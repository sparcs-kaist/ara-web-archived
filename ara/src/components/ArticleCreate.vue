<template>
  <div class="ui container">
    <h1>ArticleCreate</h1>
    <div class="ui form">
      <div class="field">
        <label>제목</label>
        <textarea rows="2" v-model="form.title"></textarea>
      </div>
      <div class="field">
        <label>내용</label>
        <textarea rows="5" v-model="form.content"></textarea>
      </div>

      <div class="inline fields">
        <label>Tag:</label>
        <div class="field" v-for="category in general.categories">
          <div class="ui radio checkbox">
            <input type="radio" name="" checked="" class="hidden">
            <label>{{ category.ko_name }}</label>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" id="is_anonymous" v-model="form.is_anonymous">
          <label>익명 사용</label>
        </div>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" id="use_signature" v-model="form.use_signature">
          <label>서명 사용</label>
        </div>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" id="is_content_erotic" v-model="form.is_content_erotic">
          <label>선정적인 내용이 포함되어 있습니다</label>
        </div>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" id="is_content_social" v-model="form.is_content_social">
          <label>정치적인 내용이 포함되어 있습니다</label>
        </div>
      </div>
    </div>
    <button class="ui button" v-on:click="articleCreateRequest">
      Submit
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticleCreate',
  data () {
    return {
      form: {
        title: '제목을 입력해주세요',
        content: '내용을 입력해주세요',
        is_anonymous: false,
        use_signature: false,
        is_content_erotic: false,
        is_content_social: false,
        categories: [
          1
        ]
      },
      general: {
        categories: []
      }
    }
  },
  created () {
    // promise를 받아서 처리합니다.
    this.getCategories()
      .then((response) => {
        this.general.categories = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    articleCreateRequest () {
      // promise를 다 끝내서 return하는 방식
      axios.post('http://ice.hodduc.net/articles/?user_username=guest', this.form)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
