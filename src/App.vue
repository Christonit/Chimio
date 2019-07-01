<template>

  <!--<add-comment :user="user = true"></add-comment>-->
  <!--<add-form @newSecret="this.secrets.push = $event"></add-form>-->
  <!--<secret -->
    <!--:secret-details="selectedSecret(0)">-->
  <!--</secret>-->

  <div>

    <add-form class="modal" v-if="shareSecret" @close-form="shareSecret = false"></add-form>

    <header-mobile>
      <sections-navigation slot="section-nav" ></sections-navigation>
    </header-mobile>


    <div class="container-fluid secret-container">
      <!--<div class="tab-content" id="nav-tabContent">-->
      <router-view :resolution="resolution"></router-view>
      <!--<div id="hot-secrets" aria-labelledby="hot-secrets">-->

        <!--<trends-->
          <!--:trends="trends">-->
        <!--</trends>-->
        <!--&lt;!&ndash;<h1> {{shortDetail(1)}} </h1>&ndash;&gt;-->
        <!--<secret-post v-for="(secret,key) in secrets" :key='key' :emotion="secret.emotion" :gender="secret.gender">-->

          <!--<template v-slot:username>{{secret.user}}</template>-->
          <!--<template v-slot:age>{{secret.age}}</template>-->
          <!--<template v-slot:publication-date>{{secret.publicationTime}}</template>-->
          <!--<template v-slot:detail>{{shortDetail(key)}}</template>-->
          <!--<template v-slot:like>{{secret.like}}</template>-->
          <!--<template v-slot:dislike>{{secret.dislike}}</template>-->
          <!--<template v-slot:comments-count>{{secret.comments}}</template>-->

        <!--</secret-post>-->

      <!--</div>-->

    </div>






    <share-secret-fab @show-secret=" shareSecret = true"></share-secret-fab>
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
        shareSecret:false

      }
    }, mounted() {

      // this.$emit('resolution',this.resolution);
    },
    methods:{
      // showSecret(){
      //   alert('1')
      //   this.shareSecret = true;
      //   alert('2')
      //
      // }
    },

  }
</script>

<style lang="sass" src="./scss/style.scss"></style>
