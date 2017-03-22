<template>
  <div class="ui container">
    <div class="ui comments">
      <h3 class="ui dividing header">Comments</h3>
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/matt.jpg">
        </a>
        <div class="content">
          <a class="author">Matt</a>
          <div class="metadata">
            <span class="date">Today at 5:42PM</span>
          </div>
          <div class="text">
            How artistic!
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/elliot.jpg">
        </a>
        <div class="content">
          <a class="author">Elliot Fu</a>
          <div class="metadata">
            <span class="date">Yesterday at 12:30AM</span>
          </div>
          <div class="text">
            <p>This has been very useful for my research. Thanks as well!</p>
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
        <div class="comments">
          <div class="comment">
            <a class="avatar">
              <img src="/images/avatar/small/jenny.jpg">
            </a>
            <div class="content">
              <a class="author">Jenny Hess</a>
              <div class="metadata">
                <span class="date">Just now</span>
              </div>
              <div class="text">
                Elliot you are always so right :)
              </div>
              <div class="actions">
                <a class="reply">Reply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/joe.jpg">
        </a>
        <div class="content">
          <a class="author">Joe Henderson</a>
          <div class="metadata">
            <span class="date">5 days ago</span>
          </div>
          <div class="text">
            Dude, this is awesome. Thanks so much
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
      <form class="ui reply form">
        <div class="field">
          <textarea></textarea>
        </div>
        <div class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Add Reply
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  data () {
    return {
      'id': 1,
      'created_at': '2017-03-16T21:25:22.739516',
      'updated_at': '2017-03-16T21:25:22.739573',
      'deleted_at': null,
      'content': 'test',
      'is_anonymous': false,
      'is_content_erotic': false,
      'is_content_social': false,
      'use_signature': false,
      'title': 'test',
      'comments': [
        {
          'id': 1,
          'created_at': '2017-03-16T21:25:22.739516',
          'updated_at': '2017-03-16T21:25:22.739573',
          'deleted_at': null,
          'content': 'test',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false
        },
        {
          'id': 1,
          'created_at': '2017-03-16T21:25:22.739516',
          'updated_at': '2017-03-16T21:25:22.739573',
          'deleted_at': null,
          'content': 'test',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false
        },
        {
          'id': 1,
          'created_at': '2017-03-16T21:25:22.739516',
          'updated_at': '2017-03-16T21:25:22.739573',
          'deleted_at': null,
          'content': 'test',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false
        },
        {
          'id': 1,
          'created_at': '2017-03-16T21:25:22.739516',
          'updated_at': '2017-03-16T21:25:22.739573',
          'deleted_at': null,
          'content': 'test',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false
        },
        {
          'id': 1,
          'created_at': '2017-03-16T21:25:22.739516',
          'updated_at': '2017-03-16T21:25:22.739573',
          'deleted_at': null,
          'content': 'test',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false
        }
      ],
      'categories': [
        1
      ]
    }
  }
}
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
