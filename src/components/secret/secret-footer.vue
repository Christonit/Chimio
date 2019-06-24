<template>
  <div class="secret-footer">
    <div class="social">
      <a href="" data-active='false' data-action='like' class="social-link"><i class="icon icon-likes"></i> <span ><slot name="like"></slot></span></a>
      <a href="" data-active='false' data-action='dislike' class="social-link"><i class="icon icon-dislike"></i><span><slot name="dislike"></slot></span></a>
      <a href="" data-active='false' data-action='favorite' class="social-link"><i class="icon icon-favorite"></i></a>
      <a href="" data-action='comment' class="social-link"><i class="icon icon-comments"></i><span><slot name="comments-count"></slot></span></a>
    </div>

    <div class="options">
      <a href="" data-action='share'>
        <i class="material-icons">
          share
        </i>
      </a>
      <a href="" data-action='more'>
        <i class="material-icons">
          more_horiz
        </i>
      </a>

    </div>
  </div>
</template>

<script>
    export default {
        name: "SecretFooter",

    }
</script>

<style scoped>

</style>
