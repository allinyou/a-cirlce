<template>
  <div class="home" @touchmove="touchmove">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
          <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage</p>
          <p @click="goAbout">个人中心</p>
        </div>
        <div class="page-2 page">
          <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>
        </div>
        <div class="page-3 page">
          <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage</p>
        </div>
      </div>
    </div>
    <canvas id="canvas1" height="1000" width="30"></canvas> 
  </div>
</template>
<script>
// @ is an alias to /src
import LoginAPI from '@/api/index';
import HelloWorld from '@/components/HelloWorld';
import mixin from '@/mixins/index';

export default {
  name: 'home',
  mixins: [mixin],
  data() {
    return {
      time: 0,
      list1: [],
      list: [
        {
          name: '1',
        },
        {
          name: '2',
        },
        {
          name: '3',
        },
        {
          name: '4',
        },
        {
          name: '5',
        },
        {
          name: '6',
        },
        {
          name: '7',
        },
      ],
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        },
      },
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    goAbout() {
      this.$router.push({ name: 'about' });
    },
    touchmove(e) {
      e.preventDefault();
    },
  },
  mounted() {
    const canvas1 = document.getElementById("canvas1");
    const cxt = canvas1.getContext("2d");
    const AudioContext = AudioContext || webkitAudioContext;
    const context = new AudioContext;
    //创建节点
    const source = context.createMediaElementSource(this.audio);
    const analyser = context.createAnalyser();
    //连接：source → analyser → destination
    source.connect(analyser);
    analyser.connect(context.destination);
    const output = new Uint8Array(180); 
    (function drawFreq(){
      analyser.getByteFrequencyData(output);
      cxt.clearRect(0, 0, canvas1.width, canvas1.height);
      for (let i = 0; i < 180; i++) {
        const value = output[i] / 15;//<===获取数据 
        cxt.beginPath();
        cxt.lineWidth = 2; 
        cxt.moveTo(0,i * 5);
        cxt.lineCap="round";
        cxt.lineTo(value, i * 5);
        cxt.closePath();
        cxt.strokeStyle = 'red';
        cxt.stroke();
      } 
      requestAnimationFrame(drawFreq);
    })()
    let index = 0;
    const t = setInterval(() => {
      if (index >= 7) {
        clearInterval(t);
        return;
      }
      this.list1.push(this.list[index]);
      index += 1;
    }, 200);
  },
};
</script>
<style lang="scss">
@import '../style/index.scss';
.fade-enter,.fade-leave-to {
  transform: translateY(30%);
  opacity: 0;
}
.fade-enter-active{
  transition-property: all;
  transition-duration: 0.3s;
}
.home{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  .avatar-info{
    position: fixed;
    top:0;
    left:0.3rem;
    right:0.3rem;
    height: 2.2rem;
    background-color: #fff;
    z-index: 1000;
    @extend .h-center;
    @extend .b-border;
    .avatar{
      width: 1.6rem;
      height: 1.6rem;
      border-radius:50%;
      overflow: hidden;
      background: url(../assets/avatar.jpg) no-repeat center/cover;
      box-shadow: 0 0 8px rgba(0,0,0,0.5);
    }
    .info{
      flex-grow:1;
      margin-left:0.2rem;
      @extend .column-center;
      align-items: flex-start;
      span:first-child{
        font-size:0.34rem;
        font-weight: bold;
        margin-bottom:0.06rem;
      }
      span:last-child{
        margin-top:0.06rem;
      }
    }
    .next{
      width: 0.3rem;
    }
  } 
  .item-list{
    padding:2.2rem 0.3rem 0;
    .item{
      @extend .b-border;
      height: 2rem;       
    }
  }
  .page-1{
    background-color: green;
  }
  .page-2{
    background-color: red;
  }
  .page-3{
    background-color: yellow;
  }
  #canvas1{
    position: fixed;
    left:0;
    top:0;
    z-index: 999;
  }
}
</style>

