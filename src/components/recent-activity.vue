<template>
  <aside  class="col-12 col-md-3 sidebar-hollow">
    <div id="recent-activity" class="card p-0 overflow-hidden">
      <h6 class="px-4 py-3 m-0">Recent activity</h6>

      <hr class="no-margin margin-x-negative">

      <div id="recent-activity" class="activity-list">

        <div v-for="activity in recentActivity" class="comment-snippet d-flex flex-wrap">

          <div class="comment-header d-flex justify-content-between w-100 align-items-center">

            <i class="sys-icon small  m-0" :class="`icon-${activity.gender}`"></i>

            <b class="author ml-3 w-100"> {{activity.user}}</b>

            <a href="" data-action='more' class="py-0">
              <i class="material-icons">
                more_horiz
              </i>
            </a>


          </div>

          <p class="">

            {{activity.comment}}

          </p>

        </div>






      </div>



    </div>

    <app-footer></app-footer>

  </aside>
</template>

<script>

  import AppFooter from './footer.vue'

  export default {
    name: "recent-activity",
    data(){
      return {
        recentActivity:[
          {id:1,gender:'female',user:'StarOfTheNoon',comment:`This is the moment when everyone goes “if I make it through I'll sacrifice my whole life for you god...”. the moment airplane...`},
          {id:2,gender:'male',user:'JovanovichWick',comment:`For a second there I thought the bubbles where actually a lot of spiders... And then I realized he was underwater.`},
          {id:3,gender:'female',user:'ZhivanaTribale',comment:`Fun fact: Part of the reason bees are great pollinators is because of their disproportionately small wings which...`},
          {id:4,gender:'male',user:'DiamondDog',comment:`This is what happens when Ping is high. His name is Ping.`},
        ]
      }
    },
    components:{
      AppFooter
    }
  }
</script>

<style scoped>

</style>
