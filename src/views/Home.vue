<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{time}}</p>
    <button @click="setTime">change</button>
  </div>
</template>
<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      time: 0,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    change() {
      const that = this;
      return new Promise((resove) => {
        setTimeout(() => {
          that.time += 1;
          resove(that.time);
        }, 1000);
      });
    },
    async setTime() {
      try {
        const time = await this.change();
        console.log(time);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
