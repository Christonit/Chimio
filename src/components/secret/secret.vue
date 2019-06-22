<template>

  <div>

    <header class="navbar navbar-light bg-light">
      <!--Mobile header-->

      <a class="" href="#">

        <i class="material-icons">
          arrow_back
        </i>

      </a>

      <h4 class="text-left">Secret</h4>

    </header>

    <div class="container-fluid secret-container">
      <!--<div class="tab-content" id="nav-tabContent">-->
      <div class="post">


        <div class="card">

          <div class="secret-header">

                  <span class="emotion">

                  </span>

            <h4 class="secret-author"> <slot name="username"></slot> </h4>

            <span class="secret-timestamp overline">
                    • <slot name="age"></slot> years old • <slot name="publication-date"></slot>
                  </span>

            <i class="icon icon-male "></i>

          </div>

          <p class="secret-detail">

              <slot name="detail"></slot>
              <a href="#" class="read-more">Read more</a>
          </p>


          <secret-footer></secret-footer>

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




        <secret-comments></secret-comments>

      </div>



    </div>
  </div>
    
</template>

<script>

  import SecretComments from './comments.vue';
  import SecretFooter from './secret-footer.vue';

  export default {
        name: "secret",
    components:
      {
        SecretComments,
        SecretFooter
      },
    }
</script>

