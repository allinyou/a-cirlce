<template>
  <div class="home">
    <div class="avatar-info">
      <div class="avatar"></div>
      <div class="info">
        <span>高荣珍</span>
        <span>1992年06月17日</span>
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
      ],
    };
  },
  components: {
    HelloWorld,
  },
  methods: {

  },
  mounted() {
    let index = 0
    const t = setInterval(() => {
      if (index >= 5) {
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
  padding:0 0.3rem;
  .avatar-info{
    height: 1.8rem;
    @extend .h-center;
    @extend .b-border;
    .avatar{
      width: 1.2rem;
      height: 1.2rem;
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
        font-size:0.32rem;
        font-weight: bold;
        margin-bottom:0.1rem;
      }
    }
    .next{
      width: 0.3rem;
    }
  } 
  .item-list{
    .item{
      @extend .b-border;
      height: 2rem;       
    }
  }
}
</style>

