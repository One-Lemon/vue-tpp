<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar.vue'
export default {
  components: {
    tabbar
  }
}
</script>
