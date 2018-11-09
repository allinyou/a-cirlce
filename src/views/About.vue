<template>
  <div class="about">
    <div class="about-title" @click="reload">专业技能</div>
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
      <div class="connact-item">Emall：<span>469420741@qq.com</span></div>
      <div class="we-chat">
        <img src="../assets/wechat.jpg" alt="">
      </div>
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
        'Anglar',
        'HTML5',
        'CSS3',
        'Sass',
        'Less',
        'Swiper',
        'Jquery',
        'git',
        'svn',
        'php',
        'mysql',
        'MINA(微信小程序)',
        'SWAN(百度小程序)',
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
    };
  },
  methods: {
    reload() {
      window.location.reload(true);
    },
  },
};
</script>

<style lang="scss">
@import '../style/index.scss';
.about{
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
      a,span {
        color:$main-color;
        text-decoration: underline;
      }
    }
    .we-chat{
      margin-top:0.2rem;
      img{
        display: block;
        margin:0 auto;
        width:60%;
      }
    }
  }
}

</style>
