<template>

  <section id="hot-secrets" aria-labelledby="hot-secrets">
    <div v-if="!isMobile">

      <div id='share-secret-big-prompt'
           class="d-flex justify-content-between align-items-center">

        <span>
          Trust us, we won’t tell anybody...
        </span>

        <span class="d-flex align-items-center  btn btn-link px-1">
          <i class="material-icons mr-2">edit</i>

          <!--<i class="sys-icon small icon-male m-0"></i> -->
          <b class=""> Share a secret</b>
        </span>

      </div>

      <hr class="my-3">

      <div class="filter-lists d-flex justify-content-between pb-3">
        <span class="form-group d-inline-block">
          <label class="mb-1 input-label d-block">Gender</label>
          <div class="btn-group btn-group-toggle hollow" data-toggle="buttons">
            <label class="btn btn-toggle active px-2 h-32">
              <input type="radio" name="filter" value="recent"  checked> Recent
            </label>
            <label class="btn btn-toggle px-2 h-32">
              <input type="radio" name="filter" value="popular" > Popular
            </label>
          </div>

        </span>

        <span class="form-group w-25 d-inline-block">
          <label class="mb-1 input-label">Gender</label>
          <select class="custom-select" id="inputGroupSelect01">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </span>

        <span class="form-group d-inline-block w-25">
          <label class="mb-1 input-label">Location</label>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Global</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </span>

      </div>

    </div>


    <trends v-if="resolution.windowSize <= resolution.xs"
      :trends="trends">
    </trends>



    <secret-post v-for="(secret,key) in secrets" :key='key' :emotion="secret.emotion" :gender="secret.gender" :secret-key="key" @detailed-secret="showFullSecret" :is-mobile="isMobile">

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
    props:{resolution: Object, trends:Array,isMobile:Boolean},
    data(){
      return {
        showSecret:false,
        secrets:[
          {id:1,user:'Pedro',age:25,emotion:'confused',
            detail:'When I was 17 years old, one night I took my pop’s car for a ride with a girl. I was in the middle of making up with a girl totally naked when a policy patrol surrounded us and through the megaphone demanded that we get off the car. Totally naked, just like we were togheter for a long loooong time.',
            publicationTime:'1h 30m',gender:'male',like:40,dislike:20,comments:4,favorite:false},
        {id:3,user:'Pedro',age:25,emotion:'confused',
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
        shortenedSecret = shortenedSecret.split(' ');

        if (this.resolution.windowSize < this.resolution.xs) {

          if ( shortenedSecret.length > 50 ){
            return shortenedSecret.splice(0,50).join(' ') + '...' ;
          }else {
            return shortenedSecret.join(' ');
          }
        }else{
          if ( shortenedSecret.length > 55 ){
            return shortenedSecret.splice(0,55).join(' ') + '...' ;
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
