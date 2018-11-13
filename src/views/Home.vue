<template>
  <div class="home" @click="goAbout">
    个人中心
  </div>
</template>
<script>
// @ is an alias to /src
import LoginAPI from '@/api/index';
import HelloWorld from '@/components/HelloWorld';
import mixin from '@/mixins/index';

export default {
  name: 'Home',
  mixins: [mixin],
  data() {
    return {
    
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    
  },
  mounted() {
    
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
   // background-color: green;
  }
  .page-2{
    //background-color: red;
  }
  .page-3{
   // background-color: yellow;
  }
}
</style>

