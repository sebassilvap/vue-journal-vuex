<template>
  <!--
	* cuando alguien haga click en todo este contenedor
	* me va a mostrar la entrada
  -->
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- Título de la entrada -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">30</span>
      <span class="mx-1 fs-5">Enero</span>
      <span class="mx-2 fw-light">2023, lunes</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cupiditate
      quisquam facere magni dolor praesentium, sapiente quos explicabo
      reiciendis, corrupti ipsa. Ex quia veniam id. Cumque totam ratione quis
      sed necessitatibus tempora fugiat obcaecati facere laboriosam at.
      Voluptatem dicta harum et nam est alias provident numquam perferendis,
      quam doloremque a.
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    /*& => toma esta misma clase y aplícale el hover para el estilo*/
    &:hover {
      /* lighten es propio de SASS => toma un color y lo hace más claro con el porcentaje que indicamos ahí */
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }

    .entry-description {
      font-size: 12px;
    }
  }
</style>
