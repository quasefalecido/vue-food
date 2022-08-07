<template>
  <div class="container container-body">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="my-4 title-tenant">Restaurantes</h1>
        <div class="row my-4">

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="restaurant-card">
              <router-link :to="{name: 'products'}">
                <img class="card-img-top" src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo%20McDonald_MCDON_DRIV15.jpg" alt="">
              </router-link>
              <div class="restaurant-card-body">
                <h3>
                  <router-link :to="{name: 'products'}">
                    Mcdonald's
                  </router-link>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="restaurant-card">
              <router-link :to="{name: 'products'}"><img class="card-img-top" src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/201910292243_94aaf166-84cc-4ebf-a35d-d223be34d01f.png" alt=""></router-link>
              <div class="restaurant-card-body">
                <h3>
                  <router-link :to="{name: 'products'}">Coco Bambu</router-link>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="restaurant-card">
              <router-link :to="{name: 'products'}"><img class="card-img-top" src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/b71a0c0a-7b41-48b8-9554-0f38a8166274/201908131720_t0KB_i.jpg" alt=""></router-link>
              <div class="restaurant-card-body">
                <h3>
                  <router-link :to="{name: 'products'}">Açaí do Ponto,café e Tapioca</router-link>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="restaurant-card">
              <router-link :to="{name: 'products'}"><img class="card-img-top" src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/d4a3984f-2b73-4f46-99df-1d6bc79ff293/202001031317_CXpO_i.png" alt=""></router-link>
              <div class="restaurant-card-body">
                <h3>
                  <router-link :to="{name: 'products'}">China in Box</router-link>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="restaurant-card">
              <router-link :to="{name: 'products'}"><img class="card-img-top" src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/201801231937__HABIB_VERDE.jpg" alt=""></router-link>
              <div class="restaurant-card-body">
                <h3>
                  <router-link :to="{name: 'products'}">Habib's</router-link>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="restaurant-card">
              <router-link :to="{name: 'products'}"><img class="card-img-top" src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/8c599d42-84e7-488e-a4b6-ae762edb1bdb/201911221526_7vK2_.jpeg" alt=""></router-link>
              <div class="restaurant-card-body">
                <h3>
                  <router-link :to="{name: 'products'}">Sujinho Fast - Burger Café</router-link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>