<template>
  <div class="home">
      <div class="avatar"></div>
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
    };
  },
  components: {
    HelloWorld,
  },
  methods: {

  },
};
</script>
<style lang="scss">
  @import '../style/index.scss';
  .home{
    padding:0 0.3rem;
    .avatar{
      width: 1.2rem;
      height: 1.2rem;
      border-radius:50%;
      overflow: hidden;
      background: url(../assets/avatar.jpg) no-repeat center/contain;
    }
  }
</style>

