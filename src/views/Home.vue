<template>
  <div class="home">
    <div class="avatar-info" @click="goAbout">
      <div class="avatar"></div>
      <div class="info">
        <span>高荣珍</span>
        <span>1992年 06月 17日</span>
        <span>北京 | web前端</span>
      </div>
      <img src="@/assets/next.png" alt="" class="next">
    </div>
    <transition-group name="fade" tag="div" class="item-list" :appear="true">
      <div class="item" v-for="(item,index) in list1" :key="index">
        <span>{{item.name}}</span>
      </div>
    </transition-group>
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
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    async goAbout() {
      try {
        const data = await LoginAPI.login({ name: 'zhangsan', age: 200 });
        console.log(data.data); 
        this.$router.push({ name: 'about' });
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
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
}
</style>

