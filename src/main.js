import Vue from 'vue';
import App from '@/App';
import VueFullpage from 'vue-fullpage';
import mp3 from './assets/audio/faded.mp3';
import 'animate.css';
import 'vue-fullpage/vue-fullpage.css';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VueFullpage);

Vue.config.productionTip = false;

const Rem = () => {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${(width / 750) * 100}px`;
};
Rem();
window.addEventListener('resize', Rem);

// const songs = [ 'https://6d61-magic-d13079-1255581239.tcb.qcloud.la/faded.mp3?sign=ec825987d5450bafcbbbc5527e670d6a&t=1541584769', 'https://6d61-magic-d13079-1255581239.tcb.qcloud.la/1111.mp3?sign=fe46b942870513e90508e14880e91d0e&t=1541657852', 'http://111.202.85.147/amobile.music.tc.qq.com/C4000031wrub06889c.m4a?guid=5256956199&vkey=092E11339DC10681A0713F40DD4325907884B429FE3B47494FFC6B7A42284B7393A76A796F2B3A5AE83E9BE0D5821673CD9160810263DF73&uin=2757&fromtag=66', 'http://111.202.98.149/amobile.music.tc.qq.com/C400004KLr5R1nmhM6.m4a?guid=5256956199&vkey=80D918DF5E8C671C4B5E16083FA8139919B5CCC73E8C9EB6F62D956AA36D8371B8310341C835B952893F778A25A2A7D5D0F1669563BD0217&uin=2757&fromtag=66' ];
// const index = Math.floor(songs.length * Math.random());
const audio = new Audio();
audio.src = mp3;   //songs[index]
audio.autoplay = true;
audio.loop = 'loop';
Vue.prototype.audio = audio;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
