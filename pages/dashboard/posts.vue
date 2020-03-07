<template>
  <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td >{{ props.item.calories }}</td>
          <td>{{ props.item.fat }}</td>
          <td><v-btn>Created Button</v-btn></td>
        </template>
      </v-data-table>
  </v-app>  
</template>

<script>
export default {  
  layout: 'dashboard',
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Button field', value: 'buttonField' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
        }
      ]
    }
  }
}
</script>


<style scoped>

</style>