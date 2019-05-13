<template>
  <article class="origin">
    <div>
      <Nav />
      <logo />
      <h1 v-parallax="0.4" class="title">
        nuxt
      </h1>
      <h2 v-parallax="0.3" class="subtitle">
        My cat&#39;s meow Nuxt.js project home
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
      <Point />
    </div>
  </article>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'
import Point from '~/components/Point.vue'

export default {
  components: {
    Logo,
    Nav,
    Point
  }
}
</script>

<style lang="scss" scoped>
.origin {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title{
    background-color: $main;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
