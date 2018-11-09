import Vue from 'vue';
import App from '@/App';
import VueFullpage from 'vue-fullpage';
import faded from './assets/audio/faded.mp3';
import Friendships from './assets/audio/Friendships.mp3';
import mp31 from './assets/audio/你根本不懂.mp3';
import mp32 from './assets/audio/勇敢爱.mp3';
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

const songs = [ faded, Friendships, mp31, mp32 ];
const index = Math.floor(songs.length * Math.random());
const audio = new Audio();
audio.src = songs[index];   //songs[index]
audio.autoplay = true;
audio.loop = 'loop';
Vue.prototype.audio = audio;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
