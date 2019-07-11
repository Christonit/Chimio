<template>
  <header class="header d-flex justify-content-between align-items-center">
    <div class="branding">
      <a href=""class="logo">
        <img src="../img/logo.svg" alt="">
      </a>
    </div>

    <slot name="section-nav"></slot>

    <div class="actions">
      <a href="#" class="button primary alt"> Share secret</a>
      <span class="user-profile button">
        X
      </span>
    </div>

  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
