<script lang="ts" setup></script>

<template>
  <a class="button py-2 px-3" href="#">
     <slot>Action</slot>
      <span class="button__icon-wrapper">
          <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
              <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
          </svg>

          <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
              <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
          </svg>
      </span>
  </a>
</template>

<style scoped lang="scss">
.button {
  border: 1px solid transparent;
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: .75rem;
  background-color: white;
  color: black;
  border-radius: 10rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .3s;
}

.button__icon-wrapper {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  color: var(--clr);
  background-color: #e5e5e5;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.button:hover {
  background: transparent;
  border: 1px solid white;
  color: white;
  .button__icon-wrapper{
    @apply bg-slate-200
  }
}

.button:hover .button__icon-wrapper {
  color: #000;
}

.button__icon-svg--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover .button__icon-svg:first-child {
  transition: transform .3s ease-in-out;
  transform: translate(150%, -150%);
}

.button:hover .button__icon-svg--copy {
  transition: transform .3s ease-in-out .1s;
  transform: translate(0);
}
</style>
