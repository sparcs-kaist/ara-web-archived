<template>
  <div class="ui container">
    <h1>ArticleCreate</h1>
    <div class="ui form">
      <div class="field">
        <label>제목</label>
        <textarea rows="2"></textarea>
      </div>
      <div class="field">
        <label>내용</label>
        <textarea rows="5"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCreate',
  data () {
    return {
      categories: [
        'Garbages',
        'food',
        'love'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
