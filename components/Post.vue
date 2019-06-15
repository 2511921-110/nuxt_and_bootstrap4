<template>
  <div class="col-md-40 col-120">
    <h2 v-html="pTitle"></h2>
    <data>{{ post.fields.publishDate }}</data>
    <div v-html="renderedContent"></div>
    <div>公開日：{{ $dayjs(post.fields.publishDate).format('YYYY/MM/DD') }}</div>
    <div>更新日：{{ $dayjs(post.sys.updatedAt).format('YYYY/MM/DD') }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    pTitle() {
      return this.post.fields.title
    },
    renderedContent() {
      return this.$md.render(this.post.fields.body)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
