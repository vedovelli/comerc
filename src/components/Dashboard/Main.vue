
<script>
import ListaDeCervejarias from './Cervejarias'
export default {
  name: 'Dashboard',
  components: {
    ListaDeCervejarias
  },
  data () {
    return {
      title: 'Dashboard',
      cervejarias: [],
      items: [],
      shouldBeVisible: true,
      shouldBeRed: true
    }
  },
  mounted () {
    this.$bus.$on('comerc', items => {
      this.items = items
    })
    const url = '/3a83755e576778088c93/raw/204ced0602760829597f5caa2680e5f7cb29bade/cervejarias.json'
    this.$http.get(url).then(res => {
      this.cervejarias = res.data
    })
  },
  methods: {
    inspectCervejaria (obj) {
      window.console.log(obj)
    }
  }
}
</script>

<template>
  <div>
    <h1
      v-if="shouldBeVisible"
      class="uma-classe-qualquer"
      :class="{ red: shouldBeRed }">Comerc</h1>
    <h2 v-else>Comerc 2</h2>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(item, index) in items"
      :key="index">{{ item.name }}</li>
    </ul>
    <lista-de-cervejarias @send-cervejaria="inspectCervejaria" :lista="cervejarias" :page="10">
      <blockquote>Blockquote</blockquote>
      <template slot="title">
        <h2>Lista de Cervejarias</h2>
      </template>
      <template slot="content">
        <p>Seja bem vindo a maravilhosa lista das cervejarias</p>
        <p>Seja bem vindo a maravilhosa lista das cervejarias</p>
        <p>Seja bem vindo a maravilhosa lista das cervejarias</p>
        <p>Seja bem vindo a maravilhosa lista das cervejarias</p>
      </template>
    </lista-de-cervejarias>
  </div>
</template>

<style>
.red {
  color: red;
}
</style>
