import Vue from "vue";
import Router from "vue-router";
import TopTeams from "../src/components/TopTeams";
import TeamsTable from "../src/components/Tables/Teams";
import PlayersTable from "../src/components/Tables/Players";
import Team from "../src/components/Team";
import Player from "../src/components/Player";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: TopTeams
    },
    // {
    //   path: '/',
    //   redirect: '/hello'
    // },
    // {
    //   path: '/hello',
    //   component: Hello,
    //   props: (route) => ({ name: route.query.name })
    // },
    {
      path: "/teams/:division",
      name: "Teams",
      component: TeamsTable,
      props: true
    },
    {
      path: "/players/:division",
      name: "Players",
      component: PlayersTable,
      props: true
    },
    {
      path: "/team/:id",
      name: "Team",
      component: Team,
      props: true
    },
    {
      path: "/player/:id",
      name: "Player",
      component: Player,
      props: true
    }
  ]
});
