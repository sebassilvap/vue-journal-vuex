<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">30</span>
      <span class="mx-1 fs-3">Enero</span>
      <span class="mx-2 fs-4 fw-light">2023, lunes</span>
    </div>

    <!-- Este div es solo un agrupador para organizar en base al flexbox -->
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>

  <!-- //? Por defecto el ícono de guardar, va como prop -->
  <FabComponent icon="fa-save" />

  <img
    src="https://images.pexels.com/photos/734428/pexels-photo-734428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  export default {
    components: {
      FabComponent: defineAsyncComponent(() =>
        import('../components/FabComponent.vue')
      ),
    },
  }
</script>

<style lang="scss" scoped>
  textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &focus {
      outline: none;
    }
  }

  img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }
</style>
