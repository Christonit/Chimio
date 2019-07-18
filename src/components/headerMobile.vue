<template>

  <header>
    <nav class="navbar navbar-light bg-dark d-flex nav-center">
      <!--Mobile header-->
      <a class="" href="#"><i class="sys-icon icon-profile"></i></a>
      <h4 class="text-center">Chimio</h4>
      <a class="" href="#"><i class="sys-icon icon-filters"></i></a>
    </nav>


    <slot name="section-nav"></slot>
  </header>

</template>

<script>
    export default {
        name: "headerMobile"
    }
</script>

