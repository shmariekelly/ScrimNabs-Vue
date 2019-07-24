<template>
  <v-layout justify-center row>
    <v-flex xs12 sm10 lg8>
      <v-tabs centered fixed-tabs dark>
        <v-tabs-slider color="purple"></v-tabs-slider>

        <v-tab v-for="tab in tabs" :key="tab.value" :to="tab.route">{{ tab.text }}</v-tab>
        <v-tab-item v-for="tab in tabs" :key="tab.value" :value="tab.route">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-data-table
            :headers="headers"
            :items="teams"
            :dark="true"
            :search="search"
            rows-per-page-text="Teams per page"
            :rows-per-page-items="[10,25,50,-1]"
          >
            <template v-slot:items="props">
              <router-link tag="tr" :to="props.item.route">
                <td class="text-xs-center">{{ props.item.rank}}</td>
                <td class="text-xs-center">{{ props.item.team }}</td>
                <td class="text-xs-center">{{ props.item.elo }}</td>
                <td class="text-xs-center">{{ props.item.series_wins }}</td>
                <td class="text-xs-center">{{ props.item.series_losses }}</td>
                <td class="text-xs-center">{{ props.item.win_percentage }}</td>
              </router-link>
            </template>
            <template v-slot:no-results>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
              >Your search for "{{ search }}" found no results.</v-alert>
            </template>
          </v-data-table>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      search: "",
      tabs: [
        { text: "Premier", value: "premier", route: "/teams/premier" },
        { text: "Elite", value: "elite", route: "/teams/elite" },
        {
          text: "Challenger",
          value: "challenger",
          route: "/teams/challenger"
        },
        { text: "Minor", value: "minor", route: "/teams/minor" }
      ],
      headers: [
        { text: "Rank", value: "rank" },
        { text: "Team", value: "team" },
        { text: "ELO", value: "elo" },
        { text: "Wins", value: "series_wins" },
        { text: "Losses", value: "series_losses" },
        { text: "Win Percent", value: "win_percentage" }
      ],
      teams: [
        {
          id: 1,
          route: "/team/1",
          rank: 1,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 2,
          route: "/team/2",
          rank: 2,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 3,
          route: "/team/3",
          rank: 3,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 4,
          route: "/team/4",
          rank: 4,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 5,
          route: "/team/5",
          rank: 5,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 6,
          route: "/team/6",
          rank: 6,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 7,
          route: "/team/7",
          rank: 7,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 8,
          route: "/team/8",
          rank: 8,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 9,
          route: "/team/9",
          rank: 9,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 10,
          route: "/team/10",
          rank: 10,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 11,
          route: "/team/11",
          rank: 11,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        }
      ]
    };
  }
};
</script>