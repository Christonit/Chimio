<template>
  <div>

    <header-mobile>
      <sections-navigation slot="section-nav"></sections-navigation>
    </header-mobile>



    <div class="container-fluid secret-container">
      <!--<div class="tab-content" id="nav-tabContent">-->
      <div class="tab-pane fade show active" id="hot-secrets" role="tabpanel" aria-labelledby="hot-secrets">

        <trends></trends>

        <secret-post></secret-post>



      </div>

    </div>




    <share-secret-fab></share-secret-fab>
  </div>
    <!--<div class="tab-pane fade" id="favorites" role="tabpanel" aria-labelledby="favorites">2</div>-->
    <!--<div class="tab-pane fade" id="my-secrets" role="tabpanel" aria-labelledby="my-secrets">3</div>-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->


  <!--</div>-->
</template>

<script>

  import HeaderMobile from './components/headerMobile.vue';
  import sectionsNavigation from './components/sections-navigation.vue';
  import trends from './components/trends.vue';
  import secretPost from './components/secret-card.vue';
  import shareSecretFab from './components/share-secret-fab.vue';


  export default {
    name: 'app',
    components:
      {
        HeaderMobile,
        sectionsNavigation,
        trends,
        secretPost,
        shareSecretFab
      },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="sass" src="./scss/style.scss"></style>
