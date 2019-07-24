<template>
  <v-card>
    <v-card-title>Player: {{player[0].name}} - Division {{team[0].division}}</v-card-title>
    <v-data-table :headers="headers" :items="player" :dark="true" :hide-actions="true">
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.rank}}</td>
        <td class="text-xs-center">{{ props.item.team }}</td>
        <td class="text-xs-center">{{ props.item.series_played }}</td>
        <td class="text-xs-center">{{ props.item.games_played }}</td>
        <td class="text-xs-center">{{ props.item.score }}</td>
        <td class="text-xs-center">{{ props.item.goals }}</td>
        <td class="text-xs-center">{{ props.item.assists }}</td>
        <td class="text-xs-center">{{ props.item.saves }}</td>
        <td class="text-xs-center">{{ props.item.shots }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      headers: [
        { text: "Rank", value: "rank", sortable: false },
        { text: "Team", value: "team", sortable: false },
        { text: "Series Played", value: "series_played", sortable: false },
        { text: "Games Played", value: "games_played", sortable: false },
        { text: "Score", value: "score", sortable: false },
        { text: "Goals", value: "goals", sortable: false },
        { text: "Assists", value: "assists", sortable: false },
        { text: "Saves", value: "saves", sortable: false },
        { text: "Shots", value: "shots", sortable: false }
      ],
      player: [
        {
          id: 1,
          rank: 1,
          name: "Potato Crew",
          team: "Team1",
          games_played: 1,
          series_played: 9,
          score: 9999,
          goals: 12,
          assists: 5,
          saves: 9,
          shots: 9
        }
      ],
      team: [
        {
          id: 1,
          rank: 1,
          team: "Potato Crew",
          mmr: 1800,
          division: 1,
          series_won: 9,
          series_lost: 6,
          games_won: 4,
          games_lost: 3,
          goals_for: 3,
          goals_against: 2,
          shots_for: 4,
          shots_against: 6,
          assists: 7,
          score: 9999,
          saves: 9,
          roster: ["Player1", "Player2", "player3"]
        }
      ]
    };
  }
};
</script>