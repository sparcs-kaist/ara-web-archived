<template lang="html">
  <section class="hero is-dark">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <h1 class="title is-primary">
                <router-link to="/"> ara </router-link>
              </h1>
            </a>
          </div>
          <span class="nav-toggle" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu" :class="{'is-active':menu}">
            <a class="nav-item">
              김유진
            </a>
            <a class="nav-item">
              <span class="icon">
                <i class="fa fa-bell-o"></i>
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-foot">
      <nav class="tabs is-boxed">
        <div class="container">
          <ul>
            <li><a> 모아보기 </a></li>
            <li :class="{'is-active': $route.fullPath ==='/article'}"><a> 탈 것 </a></li>
            <li v-for="n in 3"><a> 게시판 {{ n }} </a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      menu: false
    }
  },
  methods: {
    toggleMenu () {
      this.menu = !this.menu
    }
  }
}
</script>

<style lang="css" scoped>

.hero .nav {
  box-shadow: none;
}

</style>
