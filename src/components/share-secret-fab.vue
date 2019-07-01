<template>
  <button type="button" class="btn btn-primary fab" @click="showAddSecret">
    <i class="material-icons">edit</i>
  </button>
</template>

<script>
    export default {
        name: "shareSecretFab",
        methods:{
          showAddSecret(){
            this.$emit('show-secret')
          }
        }
    }
</script>

<style scoped>

</style>
