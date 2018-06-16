
<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{ name: 'dashboard.index' }">Dashboard</router-link>
        <router-link :to="{ name: 'admin.index' }">Admin</router-link>
      </li>
    </ul>
    <h3 v-for="(item, index) in items"
      :key="index">{{ item.name }}</h3>
    <button @click="appClick">Notificar o ultimo componente</button>
    <router-view/>
  </div>
</template>

<script>
import mixins from '@m'
export default {
  name: 'Comerc',
  data () {
    return {
      items: []
    }
  },
  mixins: [mixins],
  mounted () {
    this.$bus.$on('comerc', items => {
      this.items = items
    })
  },
  methods: {
    appClick () {
      this.$bus.$emit('va-para-o-fim', { oque: 'Alguma coisa' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
