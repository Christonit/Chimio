<template>
  <div id="hot-secrets" aria-labelledby="hot-secrets">
    <!--<h1>Hola mundo</h1>-->
    <trends
      :trends="trends">
    </trends>

    <secret-post v-for="(secret,key) in secrets" :key='key' :emotion="secret.emotion" :gender="secret.gender">

      <template v-slot:username>{{secret.user}}</template>
      <template v-slot:age>{{secret.age}}</template>
      <template v-slot:publication-date>{{secret.publicationTime}}</template>
      <template v-slot:detail>{{ shortDetail(key)  }}</template>
      <template v-slot:like>{{secret.like}}</template>
      <template v-slot:dislike>{{secret.dislike}}</template>
      <template v-slot:comments-count>{{secret.comments}}</template>

    </secret-post>

    <!--<h1> {{ shortDetail()  }} </h1>-->

  </div>
</template>

<script>
  import trends from './trends.vue';
  import SecretPost from './secret-card.vue';
  export default {
    props:{resolution: Object},
    data(){
      return {
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
          {id:1,user:'Pedro',age:25,emotion:'confused',
            detail:'When I was 17 years old, one night I took my pop’s car for a ride with a girl. I was in the middle of making up with a girl totally naked when a policy patrol surrounded us and through the megaphone demanded that we get off the car. Totally naked, just like we were togheter for a long loooong time.',
            publicationTime:'1h 30m',gender:'male',like:40,dislike:20,comments:4,favorite:false},
          {id:2,user:'Alejandro',gender:'female',age:25,emotion:'curious',detail:'xxxxxxxxxxxxx',publicationTime:'1h 30m',like:40,dislike:20,comments:9,favorite:false}]
      }
    },
    name: "hot-secrets",
    components:{
      trends,
      SecretPost

    },
    methods:{

      shortDetail(x){

        // return 'hola';

        let shortenedSecret = this.secrets[x].detail;

        // return shortenedSecret;

        if (this.resolution.windowSize < this.resolution.xs) {
          shortenedSecret = shortenedSecret.split(' ');

          if ( shortenedSecret.length > 50 ){
            return shortenedSecret.splice(0,50).join(' ') + '...' ;
          }else {
            return shortenedSecret.join(' ');
          }
        }

      }
    },
    mounted() {
      // alert('Cre')
      // console.log(this.resolution.windowSize)
      // secrets = this.secrets;
      // trends = this.trends;

    }
  }
</script>

<style scoped>

</style>
