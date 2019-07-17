<template>

  <div :class="(!isMobile)?'desktop bg-light':''">
    <secret v-if="secretVisible" class="modal" :secret-details="secret.secret[0]" :comments="secret.comments" @close-form="secretVisible = false"></secret>

    <add-form class="modal" v-if="shareSecret" @close-form="shareSecret = false" ></add-form>

    <header-desktop v-if="!isMobile">
      <sections-navigation :is-mobile='isMobile' slot="section-nav" ></sections-navigation>
    </header-desktop>

    <header-mobile v-if="isMobile">
      <sections-navigation :is-mobile='isMobile' slot="section-nav" ></sections-navigation>
    </header-mobile>


    <div class="secret-container" :class="(isMobile) ? 'container-fluid' : 'container'">
      <div :class="(isMobile) ? '' : 'row justify-content-center'">

        <emotions-trends v-if="!isMobile"></emotions-trends>

        <router-view :resolution="resolution" :trends="trends" @show-secret="showSecret" :is-mobile='isMobile' :class="(isMobile) ? '' : 'col-12 col-md-5'" ></router-view>

        <recent-activity  v-if="!isMobile"></recent-activity>

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
  import RecentActivity from './components/recent-activity.vue';
  import EmotionsTrends from './components/emotions-trends.vue';
  import shareSecretFab from './components/share-secret-fab.vue';
  import Secret from './components/secret/secret.vue';
  import AddForm from './components/forms/add-secret.vue';
  import AddComment from './components/forms/add-comment.vue';


  export default {
    name: 'app',
    components:
      {
        HeaderMobile,
        sectionsNavigation,
        trends,
        RecentActivity,
        EmotionsTrends,
        secretPost,
        shareSecretFab,
        Secret,
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
