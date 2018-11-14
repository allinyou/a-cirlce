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
  .item-list{
    padding:2.2rem 0.3rem 0;
    .item{
      @extend .b-border;
      height: 2rem;       
    }
  }
}
</style>

