<template>
  <div style="margin-bottom: 59px;">
    <div class="index-layout"
      v-for="detail in detailList"
      :key="detail.filmId"
    >
      <div class="content">
        <div class="video-header">
          <div class="poster">
            <div class="play-button"></div>
            <div class="back-gradient"></div>
          </div>
        </div>
        <div class="show-info">
          <div class="poster-wrap">
            <div class="poster"></div>
          </div>
          <div class="info-container">
            <div class="movie-name">
              <span class="chinese">
                <span>{{detail.name}}</span>
              </span>
              <p class="source">X-Men: Dark Phoenix</p>
            </div>
            <div class="movie-detail">
              <p class="show-intro">{{detail.category}} / {{detail.nation}} / {{detail.runtime}}分钟</p>
              <p class="show-intro">2019-06-06 中国大陆上映 </p>
              <p class="show-intro">
                <span class="want ">105.4万人想看</span>
                  / ⼤V推荐度 26%
              </p>
            </div>
          </div>
        </div>
        <div class="show-remark">
          <div class="show-remark-container">
            <div class="audience-remark">
              <div class="remark-star-rank">
                <div class="score">{{detail.grade}}</div>
              </div>
              <div class="remark-bd">
                <div class="remark-title">淘票票评分</div>
              </div>
            </div>
          </div>
        </div>
        <div class="actions-wrap">
          <a href="" class="tpp-btn">
            <div>选座购票</div>
          </a>
        </div>
      </div>
      <div class="margin-area"></div>
      <div>
        <div class="tab-item">
          <ul class="tab-container">
            <!-- <li class="tab-item"
              v-for="tab in tabs"
              :key="tab.id"
            >{{tab.name}}</li> -->
            <li class="tab-item active">简介</li>
            <li class="tab-item">影评</li>
            <li class="tab-item">更多</li>
          </ul>
          <div class="line-container">
            <div class="line" style="left: 55px"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="show-desc">
          <p>{{detail.synopsis}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Detail',

  // data () {
  //   return {
  //     ins: 0,
  //     tabs: [
  //       { id: 1, name: '简介' },
  //       { id: 2, name: '影评' },
  //       { id: 3, name: '更多' }
  //     ]
  //   }
  // },

  computed: {
    ...mapState('detail', ['detailList'])
  },

  methods: {
    ...mapActions('detail', ['getDetailList'])
  },

  created () {
    this.getDetailList()
  }
}
</script>

<style lang="less">
.video-header {
  background-color: #000;
  margin-bottom: -4%;
  .poster {
    background-image: url(https://gw.alicdn.com/i4/TB1HAtaVCzqK1RjSZFjXXblCFXa_.jpg_800x800Q30.jpg);
    height: 234px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    .play-button {
      background-image: url(https://gw.alicdn.com/tfs/TB1W9RAa56guuRjy1XdXXaAwpXa-150-150.png);
      width: 50px;
      height: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -25px;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
    }
    .back-gradient {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0deg,#000 7%,transparent 60%);
      opacity: 0.6;
    }
  }
}

.show-info {
  position: relative;
  background-color: #fff;
  min-height: 146px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  .poster-wrap {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 2px;
    border-radius: 4px;
    background-color: #fff;
    .poster {
      background-image: url(https://gw.alicdn.com/i1/TB1lqZLUW6qK1RjSZFmXXX0PFXa_.jpg_400x400Q30.jpg);
      width: 88px;
      height: 129px;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 2px;
    }
  }
  .info-container {
    .movie-name {
      padding-left: 123px;
      padding-top: 26px;
      max-height: 48px;
      overflow: hidden;
      .chinese {
        max-width: 210px;
        margin-bottom: 8px;
        padding-right: 15px;
        text-align: left;
        line-height: 25px;
        font-size: 22px;
        color: #333;
        font-weight: 700;
        display: flex;
      }
      .source {
        padding-right: 15px;
        text-align: left;
        opacity: .7;
        font-size: 12px;
        color: #999;
        overflow: hidden;
      }
    }
    .movie-detail {
      padding-left: 123px;
      padding-right: 20px;
      padding-top: 10px;
      min-height: 60px;
      background-color: #fff;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      .show-intro {
        padding-bottom: 8px;
        text-align: left;
        font-size: 12px;
        line-height: 13px;
        color: #777;
        overflow: hidden;
        .want {
          font-weight: 700;
          color: #333;
        }
      }
    }
  }
}

.show-remark {
  .show-remark-container {
    padding: 10px 20px 5px 20px;
    background-color: #fff;
    display: flex;
    .audience-remark {
      margin-top: 4px;
      width: 46%;
      .remark-star-rank{
        width: 68px;
        position: relative;
      }
    }
    .score{
      color: #333;
      font-weight: 500;
      margin-right: 4px;
      font-size: 35px;
      line-height: 38px;
      display: inline;
    }
    .remark-bd {
      width: 180px;
      display: flex;
      .remark-title {
        color: #000;
        font-weight: 700;
        font-size: 13px;
        line-height: 19px;
      }
    }
  }
}

.actions-wrap {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  .tpp-btn {
    text-decoration: none;
    color: #fff;
    box-sizing: border-box;
    padding: 0 13px;
    background-image: linear-gradient(45deg,#ff7ba0,#ff4d64);
    font-size: 18px;
    height: 55px;
    line-height: 55px;
    display: block;
  }
}

.margin-area {
  height: 9px;
  background-color: #f5f5f5;
}

.tab-item {
  background-color: #fff;
  .tab-container {
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    .active {
      font-weight: 700;
    }
    li {
      position: relative;
      text-align: left;
      color: #4a4a4a;
    }
  }
  .line-container {
    height: 2px;
    position: relative;
    .line {
      position: absolute;
      top: 0;
      width: 15px;
      height: 2px;
      border-radius: 100px;
      background-color: #000;
      transition: .5s;
    }
  }
}
</style>
