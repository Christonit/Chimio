<template>
    <div>

      <!-- Navigation -->

      <header class="navbar navbar-modal py-2 position-fixed navbar-form">
        <!--Mobile header-->

        <a class="" href="#" @click="closeModal">

          <i class="material-icons">
            close
          </i>

        </a>

        <h4 class="text-left">Add secret</h4>

        <button type="button" class="btn btn-link btn-cta">Submit</button>

      </header>


      <div class="container-fluid form-container">
        <!--<div class="tab-content" id="nav-tabContent">-->
        <div class="">


          <form class=" mx-3 mt-4 mb-5" name="new-secret">


            <div class="form-group mb-3">
              <textarea class="form-control"  rows="4" placeholder="What's your secret?" name='description' ref='secretTextarea'></textarea>
            </div>

            <div class="input-group mb-4 ">
              <button type="button" class="btn btn-light rounded-pill text-center mx-auto d-flex align-items-center px-4 border-0" onclick="$('.file-upload-input').trigger( 'click' )">
                <i class="material-icons mr-2">
                  image
                </i>
                Upload
              </button>
              <input class="file-upload-input d-none" type='file' onchange="readURL(this);" accept="image/*" />
            </div>

            <div class="form-group mb-4">
              <label class="mb-1 input-label">Username</label>
              <input type="text" class="form-control" id="usr">
            </div>

            <div class="form-group mb-4">
              <label class="mb-1 input-label">Agre</label>
              <input type="number" class="form-control" id="usr">
            </div>

            <div class="form-group mb-5">
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







            <div class="input-group mb-3 d-flex justify-content-center">
              <label class="mb-3 input-label">How do you feel?</label>
              <div class="form-check-inline flex-wrap justify-content-center mx-0">
                  <span class='btn-emotion mb-2 mx-2' v-for="emotion in emotions">
                      <i class="icon-emotion emotion" :class="emotion"></i>
                      <label >{{emotion}}</label>
                      <input type="radio" name='emotion' value='sad' class='d-none emotion'  aria-label="Radio button for following text input">
                  </span>




              </div>

            </div>



          </form>

        </div>

      </div>


    </div>
</template>

<script>
    export default {
      name: "add-form",
      data(){
        return{
          emotions:['love','happy','surprised','angry','shame','sad','lust','curious','confused']
        }
      },
      methods:{
        closeModal(e){
          this.$emit('close-form');
          e.preventDefault();
          return;
        },
        newSecret(){


          // fetches secret form data
          // let newSecret =  new FormData('new-secret');

          let text = this.$refs.secretTextarea.value;

          let secret = {
                        detail : text,
                        id : 3,
                        user : 'JohnDoe',
                        gender : 'Female',
                        age : 24,
                        emotion : 'curious',
                        publicationTime : '5 min',
                        like:40,
                        dislike:20,
                        comments:9,
                        favorite:false
                      }

          return console.log(secret);



          // Emits new secret to parent component
          this.$emit('newSecret',text)


          //Splits new secret details when a line break is performed to iteration as a paragraph.
          // text = text.split('\n');

          console.log(text);
          e.preventDefault()
        }
      }
    }
</script>
