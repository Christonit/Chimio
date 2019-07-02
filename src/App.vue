<template>

  <div>
    <secret v-if="secretVisible" class="modal" :secret-details="secret.secret[0]" :comments="secret.comments" @close-form="secretVisible = false"></secret>

    <add-form class="modal" v-if="shareSecret" @close-form="shareSecret = false" ></add-form>

    <header-mobile>
      <sections-navigation slot="section-nav" ></sections-navigation>
    </header-mobile>


    <div class="container-fluid secret-container">

      <router-view :resolution="resolution" @show-secret="showSecret"></router-view>

    </div>


    <share-secret-fab @show-secret=" shareSecret = true"></share-secret-fab>


  </div>


</template>

<script>

  import HeaderMobile from './components/headerMobile.vue';
  import sectionsNavigation from './components/sections-navigation.vue';
  import trends from './components/trends.vue';
  import secretPost from './components/secret-card.vue';
  import shareSecretFab from './components/share-secret-fab.vue';
  import secret from './components/secret/secret.vue';
  import AddForm from './components/forms/add-secret.vue';
  import AddComment from './components/forms/add-comment.vue';


  export default {
    name: 'app',
    components:
      {
        HeaderMobile,
        sectionsNavigation,
        trends,
        secretPost,
        shareSecretFab,
        secret,
        AddForm,
        AddComment,

      },
    computed:{

    },
    methods:{

    },
    data () {
      return {
        windowSize: screen.width,
        resolution:{windowSize: window.innerWidth,xs:512,sm:768,md:896,lg:1152,xl:1280},
        shareSecret:false,
        secret:null,
        secretVisible:false

      }
    }, mounted() {

      // this.$emit('resolution',this.resolution);
    },
    methods:{
      showSecret(x){
        this.secretVisible = true
        this.secret = x;



      }
    },

  }
</script>

<style lang="sass" src="./scss/style.scss"></style>
