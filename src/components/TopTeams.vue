<template>
  <v-data-table
    :headers="headers"
    :items="teams"
    :hide-actions="true"
    :dark="true"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.rank}}</td>
      <td class="text-xs-center">{{ props.item.team }}</td>
      <td class="text-xs-center">{{ props.item.elo }}</td>
      <td class="text-xs-center">{{ props.item.series_wins }}</td>
      <td class="text-xs-center">{{ props.item.series_losses }}</td>
      <td class="text-xs-center">{{ props.item.win_percentage }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Rank", sortable: false, value: "rank" },
        { text: "Team", sortable: false, value: "team" },
        { text: "ELO", sortable: false, value: "elo" },
        { text: "Wins", sortable: false, value: "series_wins" },
        { text: "Losses", sortable: false, value: "series_losses" },
        { text: "Win Percent", sortable: false, value: "win_percentage" }
      ],
      teams: [
        {
          rank: 1,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 2,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 3,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 4,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 5,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 6,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 7,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 8,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 9,
          team: "Potato Crew",
          elo: 1800,
          series_wins: 9,
          series_losses: 6,
          win_percentage: 4 + "%"
        },
        {
          rank: 10,
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