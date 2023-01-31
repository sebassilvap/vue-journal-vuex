<template>
  <button class="btn btn-primary">
    <!-- //? Esto lo vamos a manipular con props -->
    <!-- <i class="fa fa-2x fa-plus"></i> -->

    <!-- //? 1era Opción -->
    <!-- <i :class="`fa fa-2x ${icon}`"></i> -->

    <!-- //? 2da Opción - Recomendada por el Tutor -->
    <!-- En esta opción no podemos volver a poner :class luego de la 1era vez -->
    <i
      class="fa fa-2x"
      :class="icon"
    ></i>
  </button>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'fa-plus',
      },
    },
  }
</script>

<style lang="scss" scoped>
  button {
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
  }
</style>
