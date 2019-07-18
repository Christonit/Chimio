<template>
  <div class="card">

    <div class="secret-header">
      <i :class="'icon-'+(gender)" class="float-left sys-icon small" ></i>

      <!--<i :class="'icon icon-'+(gender)" ></i>-->


      <h4 class="secret-author"><slot name="user"></slot></h4>

      <span class="secret-timestamp overline float-right d-flex align-items-center">
            <i class="material-icons mr-1">schedule</i>
        <slot name="date-posted"></slot>
                  </span>


    </div>

    <p class="secret-detail">
<slot name="comment">
</slot>
    </p>


    <div class="secret-footer">
      <div class="social">
        <span data-active='false' data-action='like' class="d-flex align-items-center social-link"><i class="sys-icon small icon-likes mr-1"></i> <span ><slot name="likes"></slot></span></span>
        <span data-active='false' data-action='dislike' class="d-flex align-items-center social-link"><i class="sys-icon small icon-dislike mr-1"></i><span><slot name="dislikes"></slot></span></span>


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

  </div>
</template>

<script>
    export default {
        name: "SecretComments",
      props:['gender']
    }
</script>

<style scoped>

</style>
