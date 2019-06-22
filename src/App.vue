<template>

  <!--<secret></secret>-->
  <div>

    <header-mobile>
      <sections-navigation slot="section-nav"></sections-navigation>
    </header-mobile>


    <div class="container-fluid secret-container">
      <!--<div class="tab-content" id="nav-tabContent">-->
      <div class="tab-pane fade show active" id="hot-secrets" role="tabpanel" aria-labelledby="hot-secrets">

        <trends
          :trends="trends">
        </trends>
    <!--<h1> {{shortDetail(1)}} </h1>-->
        <secret-post v-for="(secret,key) in secrets" :key='key' :gender="secret.gender">

          <template v-slot:username>{{secret.user}}</template>
          <template v-slot:age>{{secret.age}}</template>
          <template v-slot:publication-date>{{secret.publicationTime}}</template>
          <template v-slot:detail>{{shortDetail(key)}}</template>
          <template v-slot:like>{{secret.like}}</template>
          <template v-slot:dislike>{{secret.dislike}}</template>
          <template v-slot:comments-count>{{secret.comments}}</template>

        </secret-post>



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
  import secret from './components/secret/secret.vue';


  export default {
    name: 'app',
    components:
      {
        HeaderMobile,
        sectionsNavigation,
        trends,
        secretPost,
        shareSecretFab,
        secret
      },
    methods:{
      shortDetail(key){

        // if(this.windowSize.length)
        let shortenedSecret = this.secrets[key].detail;

        // return shortenedSecret;

        if (this.windowSize < this.resolution.xs) {
          shortenedSecret = shortenedSecret.split(' ');

          if ( shortenedSecret.length > 50 ){
            return shortenedSecret.splice(0,50).join(' ') + '...' ;
          }else {
            return shortenedSecret.join(' ');
          }
        }

      }
    },
    data () {
      return {
        windowSize: screen.width,
        resolution:{xs:512,sm:768,md:896,lg:1152,xl:1280},
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
        secrets:[
          {id:1,user:'Pedro',age:25,emotion:'',
            detail:'When I was 17 years old, one night I took my pop’s car for a ride with a girl. I was in the middle of making up with a girl totally naked when a policy patrol surrounded us and through the megaphone demanded that we get off the car. Totally naked, just like we were togheter for a long loooong time.',
            publicationTime:'1h 30m',gender:'male',like:40,dislike:20,comments:4,favorite:false},
          {id:2,user:'Alejandro',gender:'female',age:25,emotion:'',detail:'xxxxxxxxxxxxx',publicationTime:'1h 30m',like:40,dislike:20,comments:9,favorite:false}]

      }
    }
  }
</script>

<style lang="sass" src="./scss/style.scss"></style>
