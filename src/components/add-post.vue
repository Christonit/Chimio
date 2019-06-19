<template>
  <form class=" mx-3 mt-4 mb-5">

    <div class="form-group mb-3">
      <textarea class="form-control"  rows="4" placeholder="What's your secret?" name='description'></textarea>
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
                  <span class='btn-emotion mb-2 mx-2 btn-active'>
                      <i class="icon-emotion"></i>
                      <label >Surprised</label>
                      <input type="radio" name='emotion' value='sad' class='d-none' aria-label="Radio button for following text input">
                  </span>


        <span class='btn-emotion mb-2 mx-2'>
                      <i class="icon-emotion"></i>
                      <label >Sad</label>
                      <input type="radio" name='emotion' value='sad' class='d-none' aria-label="Radio button for following text input">
                  </span>

        <span class='btn-emotion mb-2 mx-2'>
                      <i class="icon-emotion"></i>
                      <label >Sad</label>
                      <input type="radio" name='emotion' value='sad' class='d-none' aria-label="Radio button for following text input">
                  </span>

        <span class='btn-emotion mb-2 mx-2'>
                      <i class="icon-emotion"></i>
                      <label >Sad</label>
                      <input type="radio" name='emotion' value='sad' class='d-none' aria-label="Radio button for following text input">
                  </span>

        <span class='btn-emotion mb-2 mx-2'>
                      <i class="icon-emotion"></i>
                      <label >Sad</label>
                      <input type="radio" name='emotion' value='sad' class='d-none' aria-label="Radio button for following text input">
                  </span>

      </div>

    </div>



  </form>
</template>

<script>
    export default {
        name: "AddPost"
    }
</script>

<style scoped>

</style>
