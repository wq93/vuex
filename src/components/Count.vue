<template>
  <div>
    <h3>{{msg}}</h3>
    <h3>{{count}}</h3>
    <hr>
    <div>
      <button @click="add(1)">+</button>
      <br>
      <button @click="reduce(1)">-</button>
    </div>
    <hr>
    <div>
      <p>
        <button @click="addAction">+</button>
        <br>
        <button @click="reduceAction">-</button>
      </p>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import {mapActions, mapMutations, mapGetters} from 'vuex'
  import state from "../store/state";

  export default {
    data() {
      return {
        msg: 'hello vuex'
      }
    },
    computed: {
      //...mapState(['count']),
      ...mapGetters(["count"])
    },
    methods: {
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addAction', 'reduceAction'])
    },
    store
  }
</script>

<style scoped>

</style>
