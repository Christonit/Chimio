<template>
  <div class="card">

    <div class="secret-header">
      <i :class="'float-left icon icon-'+(gender)" ></i>


      <h4 class="secret-author"><slot name="user"></slot></h4>

      <span class="secret-timestamp overline float-right">
            <i class="material-icons">schedule</i>
        <slot name="date-posted"></slot>
                  </span>


    </div>

    <p class="secret-detail">
<slot name="comment">
</slot>
    </p>


    <div class="secret-footer">
      <div class="social">
        <a href="" data-active='false' data-action='like' class="social-link"><i class="icon icon-likes"></i> <span ><slot name="likes"></slot></span></a>
        <a href="" data-active='false' data-action='dislike' class="social-link"><i class="icon icon-dislike"></i><span><slot name="dislikes"></slot></span></a>

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
