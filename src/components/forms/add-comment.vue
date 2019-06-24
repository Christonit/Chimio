<template>
    <div>
      <header class="navbar navbar-modal py-2 position-fixed navbar-form">
        <!--Mobile header-->

        <a class="" href="#">

          <i class="material-icons">
            close
          </i>

        </a>

        <h4 class="text-left">Add comment</h4>

        <button type="button" class="btn btn-link btn-cta">Submit</button>

      </header>


      <div class="container-fluid form-container">
        <!--<div class="tab-content" id="nav-tabContent">-->
        <div class="">


          <form class=" mx-3 my-3">
            <div v-if="user" class="form-group mb-4">
              <label class="mb-1 input-label">Username</label>
              <input type="text" class="form-control" id="usr">
            </div>

            <div v-if="user" class="form-group mb-4">
              <label class="mb-2 input-label">Gender</label>
              <div class="btn-group btn-group-toggle multiple-radio w-100" data-toggle="buttons">
                <label class="btn btn-outline-secondary ">
                  <input type="radio" name="filter" value="recent"  > Male
                </label>
                <label class="btn mx-3 btn-outline-secondary">
                  <input type="radio" name="filter" value="popular" > Female
                </label>
                <label class="btn btn-outline-secondary">
                  <input type="radio" name="filter" value="popular" > Other
                </label>

              </div>
            </div>

            <div class="form-group mb-3">
              <label class="mb-1 input-label">Comment</label>

              <textarea class="form-control"  rows="4" placeholder="What's your secret?" name='description'></textarea>
            </div>






          </form>

        </div>







      </div>
    </div>
</template>

<script>

  export default {

    name: "add-comment",
    props:['user'],
    data() {
      return {

        // emotions:['love','happy','surprised','angry','shame','sad','lust','curious','confused']
      }
    },
    methods: {
      newComment() {


        // fetches secret form data
        // let newSecret =  new FormData('new-comment');


        // Emits new secret to parent component
        this.$emit('newComment', text)


        //Splits new secret details when a line break is performed to iteration as a paragraph.
        // text = text.split('\n');
      }
    }

  }
</script>

<style scoped>

</style>
