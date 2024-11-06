<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#${props.name}`" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
