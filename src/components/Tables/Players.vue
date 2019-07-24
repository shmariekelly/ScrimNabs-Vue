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
            :items="players"
            :dark="true"
            :search="search"
            rows-per-page-text="Players per page"
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
        { text: "Player", value: "team" },
        { text: "ELO", value: "elo" },
        { text: "Wins", value: "series_wins" },
        { text: "Losses", value: "series_losses" },
        { text: "Win Percent", value: "win_percentage" }
      ],
      players: [
        {
          id: 1,
          route: "/player/1",
          rank: 1,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 2,
          route: "/player/2",
          rank: 2,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 3,
          route: "/player/3",
          rank: 3,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 4,
          route: "/player/4",
          rank: 4,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 5,
          route: "/player/5",
          rank: 5,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 6,
          route: "/player/6",
          rank: 6,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 7,
          route: "/player/7",
          rank: 7,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 8,
          route: "/player/8",
          rank: 8,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 9,
          route: "/player/9",
          rank: 9,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 10,
          route: "/player/10",
          rank: 10,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          id: 11,
          route: "/player/11",
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