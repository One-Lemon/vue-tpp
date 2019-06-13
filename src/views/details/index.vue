<template>
  <div style="margin-bottom: 59px;">
    <div class="index-layout"
      v-for="detail in detailList"
      :key="detail.filmId"
    >
      <div class="content">
        <div class="video-header">
          <div
            class="poster"
            :style="{'background-image': 'url'+'('+detail.poster+')'}"
          >
            <div class="play-button"></div>
            <div class="back-gradient"></div>
          </div>
        </div>
        <div class="show-info">
          <div class="poster-wrap">
            <div
              class="poster"
              :style="{'background-image': 'url'+'('+detail.poster+')'}"
            ></div>
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
              <p class="show-intro">2019-xx-xx 中国大陆上映 </p>
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
            <li class="tab-item"
              v-for="(tab, index) in tabs"
              :key="tab.id"
              @click="qiehuan(index)"
              :class="{active:index==ins}"
            >{{tab.name}}</li>
          </ul>
          <div class="line-container">
            <div
              class="line"
              :style="{left: lefts+'px'}"
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div class="show-desc">
          <p class="line-limit"
            :class="{ 'line-limited': isLimited }"
            @click="zhankai()"
          >
            {{detail.synopsis}}
            <a
              class="show-desc-expand-btn"
              v-if="isOk"
            >
              展开
            </a>
          </p>
        </div>
        <div class="show-artists">
          <h2>演职人员</h2>
          <div class="show-artists-container">
            <div class="show-artist-list">
              <a class="show-artist"
                v-for="(item, index) in detail.actors"
                :key="index"
              >
                <div class="show-poster" :style="{'background-image': 'url'+'('+item.avatarAddress+')'}"></div>
                <dl>
                  <dt>{{ item.name }}</dt>
                  <dd class="profession director">{{item.role}}</dd>
                </dl>
              </a>
            </div>
          </div>
        </div>
        <div class="show-albums">
          <h2>视频和剧照</h2>
          <div class="show-album-container">
            <div class="show-album">
              <div class="show-preview-item"
                v-for="(item, index) in detail.photos"
                :key="index"
              >
                <div class="show-poster">
                  <img :src="item" class="fn-lazyload">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="show-chief">
          <h2>主创来了</h2>
        </div>
      </div>
      <div>
        <div class="show-comments">
          <div class="show-comments-wrapper">
            <h2>观众热评</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Detail',

  data () {
    return {
      isLimited: true,
      isOk: true,
      tabs: [
        { id: 1, name: '简介' },
        { id: 2, name: '影评' },
        { id: 3, name: '更多' }
      ],
      ins: 0,
      lefts: 55
    }
  },

  computed: {
    ...mapState('detail', ['detailList'])
  },

  methods: {
    ...mapActions('detail', ['getDetailList']),
    zhankai () {
      this.isLimited = !this.isLimited
      this.isOk = !this.isOk
    },
    qiehuan (index) {
      this.ins = index
      if (index === 0) {
        this.lefts = 55
      } else if (index === 1) {
        this.lefts = 180
      } else if (index === 2) {
        this.lefts = 305
      }
    }
  },

  created () {
    this.getDetailList(this.$route.params.id)
  }
}
</script>

<style lang="less">
.video-header {
  background-color: #000;
  margin-bottom: -4%;
  .poster {
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

.show-desc {
  background-color: #fff;
  position: relative;
  width: 100%;
  padding-top: 15px;
  .line-limited {
    white-space: normal;
    position: relative;
    height: 84px;
    max-height: 84px;
  }
  p.line-limit {
    white-space: normal;
  }
  p {
    white-space: nowrap;
    text-align: justify;
    display: inline-block;
    position: relative;
    margin-bottom: 14px;
    font-size: 15px;
    line-height: 29px;
    color: #333;
    overflow: hidden;
    margin-left: 16px;
    margin-right: 16px;
  }
  p.line-limited .show-desc-expand-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    display: inline-block;
    color: #349cec;
    width: 52px;
    background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff,#fff,#fff);
    text-align: right;
    line-height: 25px;
  }
}

.show-artists {
  background-color: #fff;
  position: relative;
  .show-artists-container {
    margin-left: 16px;
    position: relative;
    overflow-x: scroll;
    .show-artist-list {
      padding-right: 18px;
      float: left;
      display: flex;
      .show-artist {
        display: block;
        width: 87px;
        text-align: center;
        margin-right: 5px;
        .show-poster {
          width: 87px;
          height: 120px;
          background: #ccc 50% no-repeat;
          background-size: cover;
          overflow: hidden;
          margin: 0 auto;
          border-radius: 2px;
        }
        dl {
          margin-top: 8px;
          dt {
            display: block;
            color: #333;
            font-size: 14px;
            line-height: 23px;
            max-height: 37px;
            word-wrap: break-word;
            position: relative;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          dd {
            color: #777;
            font-size: 12px;
            white-space: normal!important;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          dd.profession {
            display: block;
            white-space: nowrap!important;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 18px;
            line-height: 18px;
          }
        }
      }
    }
  }
}

.show-albums {
  background-color: #fff;
  position: relative;
  overflow: hidden;
  .show-album-container {
    margin-left: 16px;
    position: relative;
    overflow-x: scroll;
    .show-album {
      padding-right: 18px;
      float: left;
      display: flex;
      .show-preview-item {
        height: 136px;
        text-align: center;
        margin-right: 5px;
        .show-poster {
          position: relative;
          img {
            max-height: 117px;
            border-radius: 2px;
          }
        }
      }
    }
  }
}

div h2 {
  font-size: 17px;
  line-height: 37px;
  padding-top: 9px;
  padding-bottom: 9px;
  color: #000;
  padding-left: 16px;
  font-weight: 400;
}

.show-chief {
  background-color: #fff;
}

.show-comments {
  background-color: #fff;
  position: relative;
  .show-comments-wrapper {
    background: #fff;
    h2 {
      padding-top: 14px;
    }
  }
}
</style>
