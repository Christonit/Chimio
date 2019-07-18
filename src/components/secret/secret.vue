<template>

  <div @click="closeModalFromContainer">

    <div class="overlay" v-if="!isMobile"></div>
    <header class="navbar bg-mobile text-left d-flex justify-content-start d-md-none">
      <!--Mobile header-->

      <a class="" href="#" @click="closeModal">

        <i class="material-icons">
          arrow_back
        </i>

      </a>

      <h4 class="text-left">Secret</h4>

    </header>

    <div class="modal-content">


      <div class="container-fluid secret-container">
        <!--<div class="tab-content" id="nav-tabContent">-->
        <div class="post">


          <div class="card">

            <div class="secret-header">

              <!--<span class="emotion standar" :class="emotion"></span>-->
              <span class="emotion standar" :class="secretDetails.emotion"></span>

              <h4 class="secret-author"> {{secretDetails.user}}</h4>

              <span class="secret-timestamp overline">
              • {{secretDetails.age}} years old • {{secretDetails.publicationTime}}
            </span>
              <i :class="'sys-icon small icon-'+(secretDetails.gender)" class="ml-auto" ></i>

              <!--<i :class="`sys-icon small${(secretDetails.gender)}`" class="ml-auto"></i>-->


            </div>

            <p class="secret-detail">

              {{secretDetails.detail}}
            </p>


            <secret-footer>
              <template v-slot:like>{{secretDetails.like}}</template>
              <template v-slot:dislike>{{secretDetails.dislike}}</template>
              <template v-slot:comments-count>{{secretDetails.comments}}</template>
            </secret-footer>

          </div>

        </div>

        <div class="secret-answer card">
          <form>
            <div class="form-row align-items-center">
              <div >
                <input type="text" class="form-control search-bar" placeholder="Leave a comment...">
              </div>

              <div class="col-auto">

                <div class="btn-group btn-group-toggle toggle" data-toggle="buttons">
                  <label class="btn btn-secondary active">
                    <input type="radio" name="filter" value="recent"  checked> Recent
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" name="filter" value="popular" > Popular
                  </label>

                </div>

              </div>
            </div>
          </form>
        </div>


        <div class="comments">




          <secret-comments
            v-for="(comment,key) in comments"
            :gender="comment.gender">

            <template v-slot:user>{{comment.user}}</template>
            <template v-slot:date-posted>{{comment.publicationTime}}</template>
            <template v-slot:comment>{{comment.comment}}</template>
            <template v-slot:likes>{{comment.count.likes}}</template>
            <template v-slot:dislikes>{{comment.count.dislikes}}</template>

          </secret-comments>

        </div>



      </div>
    </div>

  </div>
    
</template>

<script>

  import SecretComments from './comments.vue';
  import SecretFooter from './secret-footer.vue';


  export default {
    name: "secret",
    props:['secret-details','comments','isMobile'],
    components:
      {
        SecretComments,
        SecretFooter
      },
    data(){
      return {

      }
    },
    methods:{
      closeModal(e){
        this.$emit('close-form');
        e.preventDefault();
        return;
      },
      closeModalFromContainer(e){

        if(!this.isMobile){
          this.$emit('close-form');
        }

        e.preventDefault();
        return;


      }
    }
  }
</script>

