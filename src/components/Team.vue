<template>
  <v-card>
    <v-card-title>Team: {{team[0].team}} - Division {{team[0].division}}</v-card-title>
    <v-data-table :headers="headers" :items="team" :dark="true" :hide-actions="true">
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.rank}}</td>
        <td class="text-xs-center">{{ props.item.mmr }}</td>
        <td class="text-xs-center">{{ props.item.series_won }}</td>
        <td class="text-xs-center">{{ props.item.series_lost }}</td>
        <td class="text-xs-center">{{ props.item.games_won }}</td>
        <td class="text-xs-center">{{ props.item.games_lost }}</td>
        <td class="text-xs-center">{{ props.item.goals_for }}</td>
        <td class="text-xs-center">{{ props.item.goals_against }}</td>
        <td class="text-xs-center">{{ props.item.shots_for }}</td>
        <td class="text-xs-center">{{ props.item.shots_against }}</td>
        <td class="text-xs-center">{{ props.item.assists }}</td>
        <td class="text-xs-center">{{ props.item.score }}</td>
        <td class="text-xs-center">{{ props.item.saves }}</td>
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
        { text: "ELO", value: "mmr", sortable: false },
        { text: "Series Won", value: "series_won", sortable: false },
        { text: "Series Lost", value: "series_lost", sortable: false },
        { text: "Games Won", value: "games_won", sortable: false },
        { text: "Games Lost", value: "games_lost", sortable: false },
        { text: "Goals For", value: "goals_for", sortable: false },
        { text: "Goals Against", value: "goals_against", sortable: false },
        { text: "Shots For", value: "shots_for", sortable: false },
        { text: "Shots Against", value: "shots_against", sortable: false },
        { text: "Assists", value: "assists", sortable: false },
        { text: "Score", value: "score", sortable: false },
        { text: "Saves", value: "saves", sortable: false }
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