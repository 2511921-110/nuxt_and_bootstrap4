<template>
  <div v-html="model" />
</template>

<script>
const md = require('markdown-it')()
const result = md.render('## markdown-it rulezz!')
console.log(result)

export default {
  data() {
    return {
      model: md.render('# Hello World!')
    }
  }
}
</script>
