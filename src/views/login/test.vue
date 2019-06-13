<template>
  <div>

      <!-- <p>{{ user }}</p> -->
      <p>{{ userInfo.name }}</p>
      {{firstName}}
      {{isOk}}
    <h1>111</h1>
    <button @click="fn1">获取state中得username</button>
    <button @click="fn2">修改isOk得状态</button>
    <button @click="fn3">修改isOk得状态</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      name: '张三'
    }
  },
  computed: ({
    ...mapState('test', ['username', 'userInfo', 'isOk']),
    ...mapState('films', ['pageNum']),
    firstName () {
      return this.name.split('')[0]
    }
  }),
  methods: {
    fn1 () {
      console.log(this.username)
      console.log(this.userInfo.name)
      console.log(this.pageNum)
    },
    fn2 () {
      console.log(this.$store)

      this.$store.commit('test/chgIsOk')
    },
    fn3 () {
      this.$store.commit('test/getIsOk')
    }
  }
}
</script>
