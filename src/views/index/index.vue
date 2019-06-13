<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
