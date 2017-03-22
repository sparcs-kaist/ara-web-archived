<template>
  <div id="app">
    <header>
      <div class="ui stackable menu">
        <router-link to="/" class="item">
          Home
        </router-link>
        <router-link to="/articles" class="item">
          ArticleList
        </router-link>
        <router-link to="/articles/create" class="item">
          ArticleCreate
        </router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
