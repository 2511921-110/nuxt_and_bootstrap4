<template>
  <div>
    <div class="container-fluid px-0">
      <div class="row no-gutters align-content-center">
        <div class="col-120">
          <section class="main__head">
            <div class="container">
              <div class="row">
                <div class="col-120">
                  <h2 class="title__site">WEB CODING</h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <section>
      <div class="container content">
        <div class="row">
          <div class="col-120">
            <h2 class="title__section text-center">
              得意業務
            </h2>
          </div>
          <section class="col-120">
            <div class="row">
              <div class="offset-md-3 col-md-77 col-120 order-1">
                <h3 class="title__section_min">
                  Wordpressへの組み込みコーディング
                </h3>
                <div class="section__text">
                  <p>PHPを使用する基本的な制作から、コードをすべて固定ページ内で構築する手法まで、依頼内容に沿ったコーディングが可能です。</p>
                  <div class="section__inner">
                    <h4 class="title__section__inner">Wordpress構築例</h4>
                    <dl class="section__merit">
                      <dt><i class="fas fa-desktop"></i>固定ページのみのコーディング</dt>
                      <dd>全てのHTMLデータを固定ページ内に記入することで、HTMLを知らなくても文字を変更することができます</dd>
                    </dl>
                    <dl class="section__merit">
                      <dt><i class="fas fa-desktop"></i>PHPを使用したコーディング</dt>
                      <dd>ブログのように更新できるようになり、更新画面がわかりやすくなります</dd>
                    </dl>
                    <dl class="section__merit">
                      <dt><i class="fas fa-desktop"></i>Vue.jsを使用したコーディング</dt>
                      <dd>Rest APIを使い、WordpressからJSで取得し描画することで、表示速度が早くすることができる</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="col-md-40 col-120 order-0">
                <div class="dummy">【Wordpressのコーディング】</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <Post v-for="post in posts" :key="post.sys.id" :post="post"></Post>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '~/components/Post'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  components: {
    Post
  },
  data() {
    return {
      // model: md.render('# Hello World!'),
      test: '# Hello World!'
    }
  },
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
    // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
    // return data that should be available
    // in the template
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  }
}
</script>
