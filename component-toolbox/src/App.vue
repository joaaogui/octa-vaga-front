<template>
  <v-app id="app">
    <v-main>
      <v-container class="pa-0" fluid fill-height>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
