<template>

  <section id="hot-secrets" aria-labelledby="hot-secrets">



    <trends v-if="resolution.windowSize <= resolution.xs"
      :trends="trends">
    </trends>

    <secret-post v-for="(secret,key) in secrets" :key='key' :emotion="secret.emotion" :gender="secret.gender" :secret-key="key" @detailed-secret="showFullSecret">

      <template v-slot:username>{{secret.user}}</template>
      <template v-slot:age>{{secret.age}}</template>
      <template v-slot:publication-date>{{secret.publicationTime}}</template>
      <template v-slot:detail >{{ shortDetail(key)  }}</template>
      <template v-slot:like>{{secret.like}}</template>
      <template v-slot:dislike>{{secret.dislike}}</template>
      <template v-slot:comments-count>{{secret.comments}}</template>

    </secret-post>



  </section>

</template>


<script>
  import trends from './trends.vue';
  import SecretPost from './secret-card.vue';
  export default {
    props:{resolution: Object, trends:Array},
    data(){
      return {
        showSecret:false,
        secrets:[
          {id:1,user:'Pedro',age:25,emotion:'confused',
            detail:'When I was 17 years old, one night I took my pop’s car for a ride with a girl. I was in the middle of making up with a girl totally naked when a policy patrol surrounded us and through the megaphone demanded that we get off the car. Totally naked, just like we were togheter for a long loooong time.',
            publicationTime:'1h 30m',gender:'male',like:40,dislike:20,comments:4,favorite:false},
          {id:2,user:'Alejandro',gender:'female',age:25,emotion:'curious',detail:'xxxxxxxxxxxxx',publicationTime:'1h 30m',like:40,dislike:20,comments:9,favorite:false}],

        comments:[
          {id:1,secret:1,user:'Wallapop',username:true,gender:'male',gender:'male',publicationTime:'1h 30m',comment:'zzzzz.',count:{likes:40,dislikes:20},like:false,dislike:false},
          {id:2,secret:2,user:'HistoriaReiss',username:true,gender:'female',gender:'male',publicationTime:'1h 30m',comment:'zzzzz.',count:{likes:40,dislikes:20},like:false,dislike:false},
          {id:3,secret:1,user:'Auron',username:true,gender:'female',gender:'male',publicationTime:'1h 30m',comment:'zzzzz.',count:{likes:40,dislikes:20},like:false,dislike:false},

        ]
      }
    },
    name: "hot-secrets",
    components:{
      trends,
      SecretPost,

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

      },

      showFullSecret(x){

        // console.log(this.secrets[x]);
        const secretId = x + 1;
        const comments = this.comments.filter( (comment) =>{
          return comment.secret  == secretId;
        } );

        const currentSecret = this.secrets.filter( (secret) =>{
          return secret.id  == secretId;
        } );


        const secret = {secret:currentSecret,comments:comments}

        this.$emit('show-secret',secret);

      }
    },
    mounted() {


    }
  }
</script>

<style scoped>

</style>
