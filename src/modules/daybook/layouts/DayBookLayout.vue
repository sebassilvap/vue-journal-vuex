<template>
  <NavbarComponent />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
  // RECOMENDACIÓN: trabajar con el defineAsyncComponent porque de esta manera le puedo cambiar el nombre al componente de manera fácil y me permite tener menos importaciones en la parte de los scripts

  import { defineAsyncComponent } from 'vue'

  export default {
    components: {
      NavbarComponent: defineAsyncComponent(() =>
        import('../components/NavbarComponent.vue')
      ),

      EntryList: defineAsyncComponent(() =>
        import('../components/EntryList.vue')
      ),
    },
  }
</script>
