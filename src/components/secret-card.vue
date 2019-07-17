<template>
  <div class="card">

    <div class="secret-header">

      <span class="emotion standar" :class="emotion"></span>

      <h4 class="secret-author"> <slot name="username"></slot></h4>

      <span class="secret-timestamp overline">
        • <slot name="age"></slot> years old • <slot name="publication-date"></slot>
      </span>
      <i :class="'sys-icon small icon-'+(gender)" class="ml-auto" ></i>

    </div>
    <p class="secret-detail" @click="showDetailed">

      <slot name="detail"></slot>
      <a href="#" class="read-more">Read more</a>
    </p>
    <!--<h4 ></h4>-->
    <div class="secret-footer">
      <div class="social">
        <span data-active='false' data-action='like' class="d-flex align-items-center social-link"><i class="sys-icon small icon-likes mr-1"></i> <span ><slot name="like"></slot></span></span>
        <span data-active='false' data-action='dislike' class="d-flex align-items-center social-link"><i class="sys-icon small icon-dislike mr-1"></i><span><slot name="dislike"></slot></span></span>
        <span data-active='false' data-action='favorite' class="d-flex align-items-center social-link"><i class="sys-icon small icon-favorite"></i></span>
        <span data-action='comment' class="d-flex align-items-center social-link"><i class="sys-icon small icon-comments mr-1"></i><span><slot name="comments-count"></slot></span></span>
      </div>

      <div class="options">
        <span v-if="!isMobile" href="" data-action='generate-image' >
          <i class="material-icons">
            photo
          </i>
        </span>

        <span href="" data-action='share'>
          <i class="material-icons">
            share
          </i>
        </span>
        <span href="" data-action='more'>
          <i class="material-icons">
            more_horiz
          </i>
        </span>

      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "secretPost",
    props:['gender','emotion','secretKey','isMobile'],
    methods:{
      showDetailed(){

        this.$emit('detailed-secret',this.secretKey)

      },
    }
  }
</script>

<style scoped>

</style>
