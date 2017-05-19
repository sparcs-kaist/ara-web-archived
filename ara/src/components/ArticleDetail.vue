<template>
  <div class="ui container">
    <div class="ui segments">
      <div class="ui segment">
	<h3 class="ui header">
	  {{ title }}
	</h3>
	<a class="author">{{id}}</a>
        <div class="metadata">
          <span class="date">{{created_at}}</span>
        </div>
      </div>
      <div class="ui segment">
	<p> {{ content }}</p>
      </div>
    </div>
    <div class="ui comments">
      <h3 class="ui dividing header">Comments</h3>
      <div class="comment" v-for="comment in comments">
        <!-- <a class="avatar">
          <img src="/images/avatar/small/elliot.jpg">
        </a> -->
        <div class="content">
          <a class="author">{{comment.id}}</a>
          <div class="metadata">
            <span class="date">{{comment.created_at}}</span>
          </div>
          <div class="text">
            <p>{{comment.content}}</p>
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
        <div class="comments" v-if="comment.comments">
          <div class="comment" v-for="reply in comment.comments">
            <!-- <a class="avatar">
              <img src="/images/avatar/small/jenny.jpg">
            </a> -->
            <div class="content">
              <a class="author">{{reply.id}}</a>
              <div class="metadata">
                <span class="date">Just now</span>
              </div>
              <div class="text">
                {{reply.content}}
              </div>
              <div class="actions">
                <a class="reply">Reply</a>
              </div>
            </div>
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
      'content': 'article1',
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
          'content': 'comment1',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false,
          'comments': [
            {
              'id': 2,
              'created_at': '2017-03-16T21:25:22.739516',
              'updated_at': '2017-03-16T21:25:22.739573',
              'deleted_at': null,
              'content': 'reply1-1',
              'is_anonymous': false,
              'is_content_erotic': false,
              'is_content_social': false,
              'use_signature': false
            }
          ]
        },
        {
          'id': 3,
          'created_at': '2017-03-16T21:25:22.739516',
          'updated_at': '2017-03-16T21:25:22.739573',
          'deleted_at': null,
          'content': 'comment2',
          'is_anonymous': false,
          'is_content_erotic': false,
          'is_content_social': false,
          'use_signature': false
        },
        {
          'id': 4,
          'created_at': '2017-03-16T21:25:22.739516',
          'updated_at': '2017-03-16T21:25:22.739573',
          'deleted_at': null,
          'content': 'comment3',
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
          'content': 'comment4',
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
          'content': 'comment5',
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
  },
  methods: {

  }
}
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
