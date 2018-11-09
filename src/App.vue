<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <canvas id="canvas1" height="52" width="30"></canvas>
    <canvas id="canvas2" height="52" width="30"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: 'green',
    };
  },
  methods: {
    drawFreq() {
      const canvas1 = document.getElementById('canvas1');
      const cxt1 = canvas1.getContext('2d');
      const canvas2 = document.getElementById('canvas2');
      const cxt2 = canvas2.getContext('2d');
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      // 创建节点
      const source = context.createMediaElementSource(this.audio);
      const analyser = context.createAnalyser();
      // 连接：source → analyser → destination
      source.connect(analyser);
      analyser.connect(context.destination);
      const output = new Uint8Array(4); 
      const that = this;
      (function drawFreqs(){
        analyser.getByteFrequencyData(output);
        cxt1.clearRect(0, 0, canvas1.width, canvas1.height);
        cxt2.clearRect(0, 0, canvas2.width, canvas2.height);
        const distance = 15;
        for (let i = 0; i < 4; i++) {
          const value1 = output[i] / 15; // <===获取数据 
          const value2 = output[3 - i] / 15;
          // 左边频谱
          cxt1.beginPath();
          cxt1.lineWidth = 5; 
          const y = i * distance + 3;
          cxt1.moveTo(0,y);
          cxt1.lineTo(value1, y);
          cxt1.closePath();
          cxt1.strokeStyle = that.color1;
          cxt1.stroke();

          // 右边频谱
          cxt2.beginPath();
          cxt2.lineWidth = 5; 
          cxt2.moveTo(canvas2.width, y);
          cxt2.lineTo(canvas2.width - value2, y);
          cxt2.closePath();
          cxt2.strokeStyle = that.color2;
          cxt2.stroke();
        } 
        requestAnimationFrame(drawFreqs);
      })()
    },
  },
  mounted() {
    const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple' ];
    const randomIndex1 = Math.floor(Math.random() * 7);
    const randomIndex2 = Math.floor(Math.random() * 7);
    this.color1 = colors[randomIndex1];
    this.color2 = colors[randomIndex2];
    this.drawFreq();
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
  font-size:0.28rem;
  background-color: #fff;
}
@import './style/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} 
#canvas1{
  position: fixed;
  left:0;
  bottom:50px;
  z-index: 999;
}
#canvas2{
  position: fixed;
  right:0;
  top:50px;
  z-index: 999;
}
</style>
