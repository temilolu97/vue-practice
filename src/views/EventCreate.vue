<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event was created by {{ user.name }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>There are {{ catLength }} categories</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed:{ 
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapGetters(['getEventById']),
    ...mapState(['user','categories'])
  }
}
</script>

<style>

</style>
