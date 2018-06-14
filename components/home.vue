<template>
<section id="home" class="hero">
  <h1>{{ message }}</h1>

  <p>Hi! I'm Leo.</p>
</section>
</template>

<script>
export default {
  name: 'home',

  store: ['message'],

  events: {
    test(message) {
      this.message = message
    }
  },

  mounted() {

  }
}
</script>
