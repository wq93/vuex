<template>
  <div>
    <button @click="addAge">+</button>
    <p>{{age}}</p>
    <button @click="removeAge">延迟 -</button>
    <br>
    <button @click="showNameMethods">showName</button>
    <input v-show='showName' :value="myname" @keyup="changeVal">
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {
        showName: true
      }
    },
    computed: {
      myname() {
        return this.name
      },
      ...mapGetters([
        'name',
        'age'
      ])
    },
    methods: {
      addAge() {
        let newAge = this.age + 1
        this.setAge(newAge)
      },
      removeAge() {
        if (this.age > 0) {
          let newAge = this.age - 1
          setTimeout(() => {
            this.setAge(newAge)
          }, 5000)
        }
      },
      showNameMethods() {
        this.showName = !this.showName
      },
      changeVal(e) {
        let target = e.target
        let val = target.value
        this.setName(val)
      },
      ...mapMutations({
        setAge: 'SET_AGE',
        setName: 'SET_NAME'
      })
    }
  }
</script>


<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
