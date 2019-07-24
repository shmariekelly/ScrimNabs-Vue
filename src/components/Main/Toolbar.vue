
<template>
  <div>
    <v-navigation-drawer v-model="drawer" dark fixed app>
      <v-list dense>
        <!-- <v-img src="../../../assets/logo.png"></v-img> -->
        <!-- Not Logged In -->
        <!-- <div v-if="!user"> -->
        <!-- <form class="pa-4">
          <v-text-field v-model="username" label="Username" data-vv-name="username" required></v-text-field>
          <v-text-field v-model="password" label="Password" data-vv-name="password" required></v-text-field>
          <v-btn>Login</v-btn>
          <p fluid class="text-center">Not a user? Sign up now</p>
        </form>-->
        <!-- </div> -->
        <!-- Logged In -->
        <!-- <div v-else></div> -->
        <v-divider></v-divider>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.title"
            :to="item.route"
            :prepend-icon="item.icon"
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" :to="child.route">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :to="item.route" :key="item.title">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>ScrimNabs</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "home",
        title: "Home",
        route: "/"
      },
      {
        icon: "group",
        title: "Teams",
        children: [
          { title: "Premier", route: "/teams/premier" },
          { title: "Elite", route: "/teams/elite" },
          { title: "Challenger", route: "/teams/challenger" },
          { title: "Minor", route: "/teams/minor" }
        ]
      },
      {
        icon: "person",
        title: "Players",
        children: [
          { title: "Premier", route: "/players/premier" },
          { title: "Elite", route: "/players/elite" },
          { title: "Challenger", route: "/players/challenger" },
          { title: "Minor", route: "/players/minor" }
        ]
      },
      {
        icon: "help",
        title: "Help",
        children: [
          { title: "FAQ" },
          { title: "Bot Commands" },
          { title: "Match Rules" }
        ]
      }
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
