<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <BottomNavBar />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    BottomNavBar: () => import('~/components/BottomNavBar.vue')
  }
}
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
}
</style>
