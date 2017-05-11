<template>
  <div class="app">
    <navbar/>
    <div class="container">
      <div class="main">
        <div class="content">
          <h2 v-once class="title"> {{ title }} </h2>
          <strong class="writer"> 글쓴이 </strong>
          <p v-once style="white-space:pre-wrap">{{ content }}</p>
          <div>
            <div class="field is-group is-pulled-left">
              <div class="field has-addons">
                <p class="control">
                  <a class="button upvote is-light is-small" :class="{'is-loading':pending}" @click="pending=!pending">
                    <span class="icon is-small">
                      <i class="fa fa-heart"></i>
                    </span>
                    <span class="is-small"> 117 </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button downvote is-light is-small" @click="pending=false">
                    7
                  </a>
                </p>
                <p class="control">
                  <a class="button time is-light is-small">
                    2시간 전
                  </a>
                </p>
              </div>
            </div>
            <small class="is-pulled-right">
              <a class="button is-small is-danger is-outlined"> 신고하기 </a>
            </small>
          </div>
          <div class="is-clearfix"></div>
        </div>

        <hr>

        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong> 닉네임 </strong>
                <br>
                {{ comments[0].content }}
                <br>
                <div class="field is-group">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button upvote is-light is-small">
                        <span class="icon is-small">
                          <i class="fa fa-heart"></i>
                        </span>
                        <span class="is-small"> 117 </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button downvote is-light is-small">
                        7
                      </a>
                    </p>
                    <p class="control">
                      <a class="button time is-light is-small">
                        2시간 전
                      </a>
                    </p>
                  </div>
                </div>
              </p>
            </div>

            <article class="media">
              <figure class="media-left"></figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong> 양과늑대 </strong>
                    <br>
                    {{ comments[1].content }}
                    <br>
                    <div class="field is-group">
                      <div class="field has-addons">
                        <p class="control">
                          <a class="button upvote is-light is-small">
                            <span class="icon is-small">
                              <i class="fa fa-heart"></i>
                            </span>
                            <span class="is-small"> 117 </span>
                          </a>
                        </p>
                        <p class="control">
                          <a class="button downvote is-light is-small">
                            7
                          </a>
                        </p>
                        <p class="control">
                          <a class="button time is-light is-small">
                            2시간 전
                          </a>
                        </p>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
        <article class="media">
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" placeholder="댓글을 입력하세요..."></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button">댓글달기</button>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Article',
  data () {
    return {
      'pending': false,
      'id': 1,
      'created_at': '2017-03-16T21:25:22.739516',
      'updated_at': '2017-03-16T21:25:22.739573',
      'deleted_at': null,
      'content': `안녕하세요. 16년도 카이스트 석사 졸업생입니다.

금일 지도교수님께 인사를 드릴겸 연구실을 방문하고 연구실 후배와 저녁 식사를 한 후 다시 연구실로 복귀하는 도중, 제 상식으론 이해할 수 없는 부분이 있어 많은 분들의 의견을 여쭙고자 글을 올립니다.

첨부된 두 동영상 파일은 제 차량에 부착된 블랙박스 영상입니다.

먼저 '20140703_020756.avi'를 보시면 보행자 1명과 자전거 탑승자 1명이 길가에서 걸어가고 있고, 제 앞 차량이 이들을 피해 중앙선 침범으로 먼저 지나가고 저도 중앙선을 침범하여 피해 지나가려 했으나 자전거 탑승자가 갑자기 도로 한가운데로 진입하려하여 깜짝 놀란 나머지 브레이크를 밟으며 반사적으로 경적을 울렸습니다. 보통 공도였으면 화를 냈겠지만 교내라는 특수성을 감안하고 참고 지나갔습니다.(제가 낸 끄응 소리도 녹음이 됐더군요) 하지만 저 두 사람은 지속적으로 제 차량을 쳐다보며 (소리를 듣지 못해 정확하지 않지만) 욕설로 추정되는 입모양을 보여주더군요.`,
      'is_anonymous': false,
      'is_content_erotic': false,
      'is_content_social': false,
      'use_signature': false,
      'title': '교내 자전거 이용자 분들께 여쭙습니다',
      'comments': [
        {
          'id': 1,
          'created_at': '2017-03-16T21:25:22.739516',
          'updated_at': '2017-03-16T21:25:22.739573',
          'deleted_at': null,
          'content': '끄응 귀여워ㅎㅎ',
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
          'content': '교내에선 안전불감증이 심해서 도로를 도로로 생각하지 않는 사람도 많은 것 같아요. 밤늦게 도로로 질주하는 스텔스 자전거라던지, 도로 한가운데로 걷는 사람들도 심심찮게 볼 수 있구요. 운전자도 그 점 고려해서 더욱 안전운전 하시고, 보행자도 도로에선 항상 주의하시면 좋겠네요. 자전거에도 후사경을 달고, 운전자 분께서도 추월시 완전히 차선을 변경하신다면 더 안전할 것 같아요. 사고가 안나서 다행입니다',
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
  },
  components: {
    Navbar
  }
}
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  padding: 3em 2em;
  max-width: 45em;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .main {
    padding: 2em 1em;
  }
}

.writer {
  display: block;
  margin-bottom: 1em;
}


.hero .nav {
  box-shadow: none;
}

$primary: #f25555;
$downvote: #55bbbb;

.upvote {
  color: $primary;
  display: inline-block;
}

.upvote:hover {
  transition: 0.3s ease-out;
  color: darken($primary, 10%);
}

.downvote {
  color: $downvote;
}

.downvote:hover {
  transition: 0.3s ease-out;
  color: darken($downvote, 10%);
}

.time {
  cursor: default;
}

.time:hover, .time.active {
  background-color: whitesmoke;
  box-shadow: none;
}

.reply {
  display: inline-block;
}

.reply:hover {
  transition: 0.3s ease-out;
  color: darken($primary, 20%);
}


</style>
