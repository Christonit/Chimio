<template>

  <div class="bg-light">
    <secret v-if="secretVisible" class="modal" :secret-details="secret.secret[0]" :comments="secret.comments" @close-form="secretVisible = false"></secret>

    <add-form class="modal" v-if="shareSecret" @close-form="shareSecret = false" ></add-form>

    <header-desktop v-if="!isMobile">
      <sections-navigation slot="section-nav" ></sections-navigation>
    </header-desktop>

    <header-mobile v-if="isMobile">
      <sections-navigation slot="section-nav" ></sections-navigation>
    </header-mobile>


    <div class="secret-container" :class="(isMobile) ? 'container-fluid' : 'container'">
      <div class="row">
        <aside v-if="!isMobile" class="col-12 col-md-3 sidebar-hollow">
          <div class="emotion-list">
            <h6>Emotions</h6>

            <span class="filter">
            <i class="emotion"></i>
            <p>Anger</p>
          </span>

          </div>

          <div class="trends-list">
            <h6>Emotions</h6>

            <span class="trend">
            #holaMundo
          </span>
          </div>
        </aside>

        <router-view :resolution="resolution" :trends="trends" @show-secret="showSecret" :class="(isMobile) ? '' : 'col-12 col-md-6'" ></router-view>

        <aside  v-if="!isMobile" class="col-12 col-md-3 sidebar-hollow">
          <div id="recent-activity" class="emotion-list">
            <h6>Emotions</h6>

            <span class="filter">
            <i class="emotion"></i>
            <p>Anger</p>
          </span>

          </div>

        </aside>
      </div>


    </div>


    <share-secret-fab @show-secret=" shareSecret = true" v-if="isMobile"></share-secret-fab>


  </div>


</template>

<script>

  import HeaderMobile from './components/headerMobile.vue';
  import HeaderDesktop from './components/header.vue';
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
        HeaderDesktop,

      },
    computed:{

      isMobile(){
        return this.resolution.windowSize <= this.resolution.xs
      }

    },
    methods:{

    },
    data () {
      return {
        windowSize: screen.width,
        resolution:{windowSize: window.innerWidth,xs:512,sm:768,md:896,lg:1152,xl:1280},
        shareSecret:false,
        secret:null,
        secretVisible:false,
        trends:
          ['foreverFat',
            'alwaysPositive',
            'OhBoys',
            'slaying',
            'motivation',
            'totallySad',
            'foreverAlone',
            'healthyLife',
            'meatLover',
            'RFLMAO'],

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
