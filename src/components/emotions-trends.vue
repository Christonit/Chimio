<template>
  <aside class="col-12 col-md-2 sidebar-hollow">
    <div id="emotion-list" class="sidebar">

      <h6 class="mb-4">Emotions</h6>

      <span class="filter-btn" v-for="(emotion, key) in emotions">
            <i class="emotion small" :class="emotionToClass[key]"></i>
            <b>{{emotion}}</b>
      </span>

    </div>


    <hr class="space">


    <div class="trends-list">

      <div class="mb-3">
        <h6>Trends</h6>
      </div>

      <span class="trend" v-for="trend in trends">
            #{{trend }}
      </span>
    </div>
  </aside>
</template>

<script>
    export default {
        name: "emotions-trends",
      data(){
          return{
            emotions:['Anger','Love','Surprised','Happy','Shame','Lust','Sad','Curious','Poker face'],

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
      },
      computed:{
          emotionToClass(){
            let x = this.emotions.map( emotion  =>{
              return emotion.toLowerCase().replace(' ','-')
            })
            return x;
          }
      }
    }
</script>

<style scoped>

</style>
