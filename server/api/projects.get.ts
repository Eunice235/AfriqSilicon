import {Client} from "@notionhq/client";

const config = useRuntimeConfig()
const notion = new Client({ auth: config.NOTION_API_KEY });
const db_id = config.NOTION_DATABASE_ID

interface ProjectImage {name: string; file_url:string}
interface ProjectTag {name: string;}
interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: ProjectImage | null;
    company_logo: ProjectImage | null;
    date_range: string;
    more_images: ProjectImage[];
    tags: ProjectTag[];
}

let payload:Project[] = [];


export default defineEventHandler(() => {
    async function getProjects() {
        return new Promise((resolve, reject) => {
             notion.databases.query({
                  database_id: db_id,
              })
             .then(projects => {
                resolve(projects)
                 console.log('**************** Projects fetched **************')
             })
             .catch((error) => {
                 console.log('**************** Error getting projects **************')
                 reject(error)
             })
        })
    }

    return getProjects().then(
        (data: any) => {
         const processProcessProperties = (item: any): Project => {
              return {
                  id: item.properties.id.id,
                  date_range: item.properties.date_range.rich_text[0].plain_text,
                  category: item.properties.select?.name,
                  description: item.properties.description.rich_text[0].plain_text,
                  title: item.properties.title.title[0].plain_text,
                  tags: item.properties.tags.multi_select.length ? item.properties.tags.multi_select.map(item => {
                      return {name: item.name}
                  }) : [],
                  image: item.properties.image.files.length ? {
                      name: item.properties.image.files[0].name,
                      file_url: item.properties.image.files[0].file.url,
                  } : null,
                  company_logo: item.properties.company_logo.files.length ? {
                      name: item.properties.company_logo.files[0].name,
                      file_url: item.properties.company_logo.files[0].file.url,
                  }:null,
                  more_images: item.properties.more_images.files.length ?
                      item.properties.more_images.files.map((file: any) => {
                      return {
                          name: file.name,
                          file_url: file.file.url,
                      }
                  }) : []
              }
          }

          try {
            for (let i = 0; i < data.results.length; i++) {
                let current_result = data.results[i]
                payload.push(processProcessProperties(current_result))
            }
            console.log('Current result >>>>>>>>>: ', JSON.stringify(payload.length))
             console.log('**************** Finished to process items **************')
            return payload
          }catch (error: any) {
             console.log('**************** Failed to process items **************')
              throw createError({
                 status:500,
                 message: error.message,
                 statusMessage:'Something went wrong',
             })
          }
    })
    .catch((error) => {
         console.log(error)
         console.log('**************** Error caught fetching items **************')
        throw createError({
             status:500,
             message:error.message,
             statusMessage:'Something went wrong',
         })
    })

});