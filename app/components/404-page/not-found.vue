<template>
    <div class="c-error">
      <h2 class="c-error__heading"> OOPS ERROR!!! </h2>
      <p class="c-error__404">
        404
      <!-- <img :src="imageSrc" alt="Heart beat illustrates 0 of 404" />4 -->
      </p>
      <p class="c-error__not-found">PAGE NOT FOUND</p>
     <!-- <a ui-sref="/"><button>Back to main page</button></a> -->
     <a href="/"><button>Back to main page</button></a>

    </div>
</template>

<script>

export default {
  name: "NotFoundComponent",

}
</script>
