<template>
  <div id="app">
    <!-- 头部 -->
    <header>
      <div class="header-top-box">
        <div class="head">
          <div class="head-left">
            <img src="./assets/1@2x.png" alt="">
            <span>购车礼包管理</span>
          </div>
          <div class="logout" @click="logout" v-if="username">退出登录</div>
          <div class="head-right" v-if="username" :title="username">
            <img src="./assets/2@2x.png" alt="">
            <div class="user">{{username}}</div> 
          </div>
        </div>
      </div>
      <div class="header-bot"></div>
    </header>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'username',
      'token',
    ]),
  },
  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    },
  },
};
</script>

<style lang="scss">
body,form,input,textarea,select,option,ul,ol,li,dt,dd,p,pre,h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  border: none;
}
a {
  text-decoration: none;
}
body{
  font-size:14px;
  background-color: #F0F0F0;
}
@import './style/index.scss';
::-ms-clear, 
::-ms-reveal{
    display: none;
}
input::-webkit-input-safebox-button{
  display: none;
}
::selection{
  background-color:$main-color;
  color:#fff;
}
::-webkit-selection{
  background-color:$main-color;
  color:#fff;
}
::-moz-selection{
  background-color:$main-color;
  color:#fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} 
header{
  .header-top-box{
    height: 80px;
    background-color: #fff;
    .head{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      .head-left{
        width: 40%;
        height: 100%;
        float:left;
        @extend .h-center;
        img{
          width: 131px;
          margin-right:23px;
        }
      }
      .head-right{
        position: relative;
        width:124px;
        height: 30px;
        float: right;
        margin-top:25px;
        border-radius:4px;
        border:1px solid $border-color;
        @extend .vh-center;
        img{
          width: 18px;
        }
        .user{
          width: 50px;
          @include ellipsis;
          margin:0 10px;
        }
        &:after{
          content:'';
          display: block;
          border:6px solid $border-color;
          border-bottom-color: transparent;
          border-right-color: transparent;
          border-left-color: transparent;
          margin-top:7px;
        }
        
      }
      .logout{
        float: right;
        width:124px;
        height: 30px;
        text-align: center;
        margin-top:25px;
        margin-left:30px;
        line-height: 30px;
        border-radius:4px;
        background-color: $main-color;
        color:#fff;
        cursor: pointer;
      }
    }
  }
  .header-bot{
    height: 22px;
    background-color: $main-color;
  }
}

@media (-webkit-max-device-pixel-ratio:1){::-webkit-scrollbar-track-piece{background-color:#FFF;}::-webkit-scrollbar{width:6px;height:6px;}::-webkit-scrollbar-thumb{background-color:#c2c2c2;background-clip:padding-box;min-height:28px;}::-webkit-scrollbar-thumb:hover{background-color:#A0A0A0}}
</style>
