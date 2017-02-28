<template>
<ul>
  <li v-for='item in items' >
    <slot></slot> {{item}}
    <slot name='suffix'></slot></li>
</ul>
</template>
<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => { return [] }
    }
  }
}
</script>
