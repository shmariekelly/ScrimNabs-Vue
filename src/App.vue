

<template id="app">
  <v-app dark>
    <Toolbar/>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from "./components/Main/Toolbar";
import Footer from "./components/Main/Footer";

export default {
  name: "App",
  components: {
    Toolbar,
    Footer
  }
};
</script>

<style>
#app {
}
</style>
