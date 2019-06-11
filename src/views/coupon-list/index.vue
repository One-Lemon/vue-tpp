<template>
  <div>
    <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
    <!-- 优惠券列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: '先给个2000贿赂下\n最多优惠1000元',
  reason: '你的颜值不过关，请换个漂亮的妹子来使用',
  value: 100000,
  name: '淘票票颜值优惠卷',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1000',
  unitDesc: '元'
}
export default {
  data () {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    }
  },

  methods: {
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange (code) {
      this.coupons.push(coupon)
    }
  }
}
</script>
