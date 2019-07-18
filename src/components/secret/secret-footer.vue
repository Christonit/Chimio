<template>
  <div class="secret-footer">
    <div class="social">

      <span data-active='false' data-action='like' class="d-flex align-items-center social-link"><i class="sys-icon small icon-likes mr-1"></i> <span ><slot name="like"></slot></span></span>
      <span data-active='false' data-action='dislike' class="d-flex align-items-center social-link"><i class="sys-icon small icon-dislike mr-1"></i><span><slot name="dislike"></slot></span></span>
      <span data-active='false' data-action='favorite' class="d-flex align-items-center social-link"><i class="sys-icon small icon-favorite"></i></span>
      <span data-action='comment' class="d-flex align-items-center social-link"><i class="sys-icon small icon-comments mr-1"></i><span><slot name="comments-count"></slot></span></span>
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
