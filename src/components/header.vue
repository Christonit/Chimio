<template>
  <header class="header d-flex justify-content-between align-items-center">
    <div class="branding">
      <a href=""class="logo">
        <img src="../img/logo.svg" alt="">
      </a>
    </div>

    <slot name="section-nav"></slot>

    <div class="actions d-flex text-center">
      <button class="btn btn-secondary alt mr-2"> Share secret</button>


      <button type="button" class="btn btn-link  icon">
        <i class="sys-icon icon-sm notification"></i>
      </button>

      <button type="button" class="btn btn-link  icon">
        <i class="sys-icon icon-sm night-mode"></i>
      </button>


      <div class="dropdown user-settings">
        <button class="avatar dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class=" d-flex align-items-center" type="button">
          <img src="https://via.placeholder.com/42" alt="">

          </span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
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
