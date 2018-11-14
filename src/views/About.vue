<template>
  <div class="about">
    <div class="about-title">个人资料</div>
    <div class="avatar-info">
      <div class="avatar" @click="showPre"></div>
      <div class="info">
        <span>高荣珍</span>
        <span>1992-06-17</span>
        <span>高级前端工程师</span>
      </div>
    </div>
    <div class="about-title">专业技能</div>
    <div class="skills">
      <div :class="'skill-item bg-color'+index%8" v-for="(item,index) in skills" :key="index">{{item}}</div>
    </div>
    <div class="about-title">工作经历</div>
    <div class="work-history">
      <div class="work-item" v-for="(item,index) in workHistory" :key="index">
        <span>{{item.componey}}</span>
        <span>{{item.time}}</span>
        <span>{{item.job}}</span>
      </div>
    </div>
    <div class="about-title">教育经历</div>
    <div class="edu">
      <span>山西大同大学</span>
      <span>2010.09.11 - 2014.07.01</span>
      <span>电子信息科学与技术</span>
    </div>
    <div class="about-title">联系方式</div>
    <div class="connact">
      <div class="connact-item">Tel：<a href="tel:13641150363">13641150363</a></div>
      <div class="connact-item">Emall：<a href="mailto:469420741@qq.com">469420741@qq.com</a></div>
      <div class="we-chat">
        <div>
          <img src="../assets/wechat_public.jpg" alt="">
          <span>微信公众号</span>
        </div>
        <div>
          <img src="../assets/wechat.jpg" alt="">
          <span>我的微信</span>
        </div>
      </div>
    </div>
    <div class="pre-image" v-show="preShow" @click="hidePre">
        <div class="blur-box"></div>
        <img src="../assets/avatar.jpg" alt="">
    </div> 
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      skills: [
        'HTML',
        'Javascript',
        'CSS',
        'ES6',
        'Vue',
        'MINA(微信小程序)',
        'Angular',
        'HTML5',
        'CSS3',
        'Sass',
        'Less',
        'Swiper',
        'JQuery',
        'git',
        'svn',
        'php',
        'mysql',
      ],
      workHistory: [
        {
          componey: '北京雪润广告有限公司',
          time: '2018.3 - 至今',
          job: '前端工程师',
        },
        {
          componey: '北京炘宇科技有限公司',
          time: '2017.5 - 2018.3',
          job: '前端工程师',
        },
      ],
      preShow: false,
    };
  },
  methods: {
    reload() {
      window.location.reload(true);
    },
    showPre() {
      this.preShow = true;
    },
    hidePre() {
      this.preShow = false;
    },
  },
};
</script>

<style lang="scss">
@import '../style/index.scss';
.about{
  .avatar-info{
    padding:0.2rem 0.3rem;
    background-color: #fff;
    @extend .h-center;
    @extend .b-border;
    .avatar{
      padding:3px;
      width: 1.4rem;
      height: 1.4rem;
      border-radius:50%;
      box-sizing: border-box;
      overflow: hidden;
      background: url(../assets/avatar.jpg) no-repeat 55% 20%/160%;
      box-shadow: 0 0 8px rgba(0,0,0,0.5);
      background-clip: content-box;
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
  } 
  .about-title{
    padding:0 0.3rem;
    height: 0.8rem;
    background-color: $main-color;
    color:#fff;
    line-height: 0.8rem;
  }
  .skills{
    padding:0 0.3rem 0.3rem;
    overflow: hidden;
    .skill-item{
      display: inline-block;
      float: left;
      height: 0.45rem;
      line-height: 0.45rem;
      font-size:0.24rem;
      padding:0 0.3rem;
      margin-top:0.3rem;
      margin-right:0.2rem;
      border-radius: 0.23rem;
      background-color: $main-color;
      color:#fff;
    }
    .skill-item.bg-color1{
        background-color: #beafce;
    }
    .skill-item.bg-color2{      
        background-color: #f6bc7d;
    }
    .skill-item.bg-color3{
        background-color: #8fced3;     
    }
    .skill-item.bg-color4{
        background-color: #e78f8e;
    }
    .skill-item.bg-color5{
        background-color: #f88f55
    }
    .skill-item.bg-color6{
        background-color: #66ccb6;
    }
    .skill-item.bg-color7{
        background-color: #8cc6ee;
    }
  }
  .work-history{
    padding:0 0.3rem 0.2rem;
    .work-item{
      padding-top:0.2rem;
      @extend .column;
      span:first-child{
        font-size: 0.32rem;
        color:$main-color;
      }
      span:nth-child(2){
        margin:0.1rem 0;
      }
    }
  }
  .edu{
    padding:0.2rem 0.3rem;
    @extend .column;
    span:first-child{
      font-size: 0.32rem;
      color:$main-color;
    }
    span:nth-child(2){
      margin:0.1rem 0;
    }
  }
  .connact{
    padding:0.1rem 0.3rem 0.2rem;
    .connact-item{
      margin-top:0.1rem;
      a {
        color:$main-color;
        text-decoration: underline;
      }
    }
    .we-chat{
      margin-top:0.2rem;
      @extend .v-center;
      div{
        width:40%;
        @extend .column-center; 
        img{
          display: block;
          width:80%;
        }
      }
      
    }
  }
  .pre-image{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: #222;
    .blur-box{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      filter: blur(20px);
      background:url(https://6d61-magic-d13079-1255581239.tcb.qcloud.la/330.jpg?sign=dfb82f59add7d363ffd74e754fe47a5a&t=1542179050) no-repeat center top/100%;
    }
    img{
      width: 80%;
      position: fixed;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  }
}

</style>
