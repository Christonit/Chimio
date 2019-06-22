<template>
  <div  id="trends" class="nav-carousel">

    <ul class="list-group list-group-horizontal">
      <li  class="list-group-item label badge">Trends</li>
      <li v-for='(trend,key) in trends' :data-trend='trend' :key='key' class="list-group-item badge">{{trend}}</li>

    </ul>

  </div>
</template>

<script>
  export default {
    name: "trends",
    props:["trends"]
  }
</script>

<style scoped>

</style>
