
<script>
import util from '@util/array'
import mixins from '@m'
export default {
  props: {
    lista: {
      required: true,
      type: Array
    },
    page: {
      default: 1,
      type: Number
    }
  },
  mixins: [mixins],
  computed: {
    finalList () {
      return util.gimme10(this.lista, this.page)
    }
  },
  mounted () {
    this.$bus.$on('va-para-o-fim', obj => window.console.log(obj))
  },
  methods: {
    callback (cervejaria) {
      this.$emit('send-cervejaria', cervejaria)
      this.$bus.$emit('comerc', cervejaria)
      this.$router.push({ name: 'admin.index' })
    }
  }
}
</script>

<template>
  <div>
    <slot/>
    <slot name="title"/>
    <slot name="content"/>
    <ul>
      <li
        @click="callback(cervejaria)"
        v-for="(cervejaria, index) in finalList"
        :key="index">{{ cervejaria.name }}</li>
    </ul>
  </div>
</template>
