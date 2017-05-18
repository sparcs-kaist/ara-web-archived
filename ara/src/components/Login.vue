<template lang="html">
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="login-box column is-half is-offset-one-quarter">
          <img :src='logo' />
          <a class="button is-medium login-btn">Sign In</a>
          <div class="notice-text">
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      logo: 'http://ara.kaist.ac.kr/media/image/stealBlue/i_signin_bi.png',
      description: '아라는 KAIST 학내 커뮤니티입니다. 아라를 이용하려면 SPARCS ID로 로그인해야 합니다. 아직 계정이 없다면 SPARCS SSO 가입과 KAIST 구성원 인증 후 아라를 이용할 수 있습니다. KAIST 외부인의 접속은 제한됩니다'
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #e81c4f;

.login-box {
  text-align: center;
  color: grey;
}

.notice-text {
  padding: 15px;
  background-color: whitesmoke;
  font-size: small;
  border-radius: 5px;
}

.login-btn {
  width: 60%;
  border-color: transparent;
  background-color: $primary;
  color: whitesmoke;
  margin: 20px auto;
}

.login-btn:hover {
  background-color: lighten($primary, 15%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-out 0s;
  -webkit-transition: all 0.2s ease-out 0s;
  -moz-transition: all 0.2s ease-out 0s;
  -o-transition: all 0.2s ease-out 0s;
}
</style>
