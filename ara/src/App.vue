<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

  @import "~bulma/sass/utilities/initial-variables";

  // Typography
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  $family-serif: 'Spoqa Han Sans', BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !default;
  .content p {
    word-break: keep-all;
    line-height: 1.8;
  }

  // Color
  $primary: #f25555;
  $family-primary: $family-serif;

  // Body
  $body-background: #fff !default
  $body-size: 16px !default

  // Miscellaneous
  $radius-small: 1px !default
  $radius: 2px !default
  $radius-large: 4px !default

  @import "~bulma";

  /* Icons */
  @import url(//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);

</style>
