
<script>
export default {
  mounted () {
    this.$bus.$on('comerc', cervejaria => {
      debugger
      this.cervejaria = cervejaria
    })
  },
  data () {
    return {
      cervejaria: {}
    }
  }
}
</script>

<template>
  <div>
    <h1>Admin</h1>
    <form action="#" @submit.prevent="submit">
      <label for="name">Nome</label>
      <input type="text" id="name" v-model="cervejaria.name" v-focus="blue">
    </form>
  </div>
</template>
