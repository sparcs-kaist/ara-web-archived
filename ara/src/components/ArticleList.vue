<template>
  <div class="ui container">
    <router-view></router-view>
    <table class="ui celled table">
      <thead>
        <tr>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <router-link to="/articles/1" class="item">
              article #1
            </router-link>
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="/articles/2" class="item">
              article #2
            </router-link>
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="/articles/3" class="item">
              article #3
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data () {
    return {
      'articles': [
        {
          'id': 1,
          'created_at': '2017-03-01T00:00:00.000000',
          'updated_at': '2017-03-01T00:00:00.000000',
          'deleted_at': null,
          'content': 'article#1 content',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false,
          'title': 'article#1 title',
          'categories': [
            1
          ]
        },
        {
          'id': 2,
          'created_at': '2017-03-01T00:00:00.000000',
          'updated_at': '2017-03-01T00:00:00.000000',
          'deleted_at': null,
          'content': 'article#2 content',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false,
          'title': 'article#2 title',
          'categories': [
            1
          ]
        },
        {
          'id': 3,
          'created_at': '2017-03-01T00:00:00.000000',
          'updated_at': '2017-03-01T00:00:00.000000',
          'deleted_at': null,
          'content': 'article#3 content',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false,
          'title': 'article#3 title',
          'categories': [
            1
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
