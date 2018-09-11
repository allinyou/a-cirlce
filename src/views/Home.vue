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
import LoginAPI from '@/api/index';

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
    async setTime() {
      try {
        const data = await LoginAPI.login({ name: 'zhangsan', pwd: '123456' });
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
