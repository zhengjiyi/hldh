<template>
  <div class="loading scene" @click="handleStart">
    <img
      class="logo ani" ani-effect="slideInDown" ani-duration="1s"
      :src="`${publicPath}img/allstar-loading-1030.gif`"
      alt=""
    />

    <!-- <span class="progress" v-if="progress<100 || !videoAutoPlayEnable">
      loading <br/>
      {{`${progress}%`}}
    </span> -->

    <!-- <div class="loading-progress-bar nostripes" v-if="progress<100 || !videoAutoPlayEnable">
      <span :style="`width: ${progress}%`"></span>
    </div> -->
    <div class="cop">
	    	<img
	        class="animated pulse infinite xh"
	        :src="`${publicPath}img/2.gif`"
	      /> 
	       <span   :class="['btn animated slideInUp', (progress < 100 || !videoAutoPlayEnable) && 'disable']" class="">开始</span>
    </div>
		
    <!--<div 
      :class="['btn animated slideInUp', (progress < 100 || !videoAutoPlayEnable) && 'disable']"
    >
      <img 
        class="animated pulse infinite"
        v-if="lang === 'cn'"
        :src="`${publicPath}img/2.gif`"
      />-->
      <!--<img v-if="axs" :class="['btn animated slideInUp', (progress < 100 || !videoAutoPlayEnable) && 'disable']" :src="`${publicPath}img/ks.png`" class="str"/>-->
       <!--<span v-if="aps" :class="['btn animated slideInUp', (progress < 100 || !videoAutoPlayEnable) && 'disable']" class="str">开始</span>-->
       <!--<img
        class="animated pulse infinite"
        v-if="lang === 'en'"
        :src="`${publicPath}img/en-start.png`"
      /> -->
    <!--</div>-->
     
    
  </div>
</template>

<script>
import { isWechat } from '../utils/index';

export default {
  name: 'LoadingScene',
  props: {
    progress: Number,
    lang: String,
  },
  data() {
    const publicPath = process.env.BASE_URL;
    return {
      publicPath,
      videoAutoPlayEnable: false,
      aps:false,
    };
  },
  methods: {
    handleStart() {
      if (this.progress < 100) return;
      if (!this.videoAutoPlayEnable) return;
      this.$emit('next');
    },
    enableVideoAutoPlay() {
      if (isWechat()) {
        document.addEventListener('WeixinJSBridgeReady', () => {
          const videos = document.querySelectorAll('video');
          videos.forEach((video) => {
            video.play();
            video.pause();
          });
          this.videoAutoPlayEnable = true;
        }, false);
      } else {
        this.videoAutoPlayEnable = true;
      }
    },
  },
  mounted() {
    this.enableVideoAutoPlay();
    let than = this;
    setTimeout(function(){
    	than.aps=true;
    },1000);
  },
};
</script>
<style>
.loading-progress-bar {
  width: 40vw;
  box-sizing: border-box;
  height: 6px;
  /* Can be anything */
  position: relative;
  margin: 60px 0 20px 0;
  /* Just for demo spacing */
  background: #000;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  padding: 1px;
  -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
}

.loading-progress-bar>span {
  display: block;
  height: 100%;
  -webkit-border-top-right-radius: 8px;
  -webkit-border-bottom-right-radius: 8px;
  -moz-border-radius-topright: 8px;
  -moz-border-radius-bottomright: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  -webkit-border-top-left-radius: 20px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-bottomleft: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #fff;
  background-image: -webkit-gradient(linear,
    left bottom,
    left top,
    color-stop(0, #fff),
    color-stop(1, #fff));
  background-image: -moz-linear-gradient(center bottom,
    #fff 37%,
    #fff 69%);
  -webkit-box-shadow:
    inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  -moz-box-shadow:
    inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  box-shadow:
    inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  transition: width 0.5s;
}

.loading-progress-bar>span:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image:
    -webkit-gradient(linear, 0 0, 100% 100%,
    color-stop(.25, rgba(255, 255, 255, .2)),
    color-stop(.25, transparent), color-stop(.5, transparent),
    color-stop(.5, rgba(255, 255, 255, .2)),
    color-stop(.75, rgba(255, 255, 255, .2)),
    color-stop(.75, transparent), to(transparent));
  background-image:
    -moz-linear-gradient(-45deg,
    rgba(255, 255, 255, .2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, .2) 50%,
    rgba(255, 255, 255, .2) 75%,
    transparent 75%,
    transparent);
  z-index: 1;
  -webkit-background-size: 50px 50px;
  -moz-background-size: 50px 50px;
  background-size: 50px 50px;
  -webkit-animation: loading-move 2s linear infinite;
  animation: loading-move 2s linear infinite;
  -webkit-border-top-right-radius: 8px;
  -webkit-border-bottom-right-radius: 8px;
  -moz-border-radius-topright: 8px;
  -moz-border-radius-bottomright: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  -webkit-border-top-left-radius: 20px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-bottomleft: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
}

@-webkit-keyframes loading-move {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 50px 50px;
  }
}

@keyframes loading-move {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 50px 50px;
  }
}

.nostripes>span:after {
  -webkit-animation: none;
  animation: none;
  background-image: none;
}
.btn{
  background: none !important;
}
.loading .logo{
  width: 120vw !important;
  margin-left: -46.5vw !important;
  top: 40% !important;
}
.cop{
	position: fixed;
	bottom: 16%;
}
.cop img{
	width: 7em;
	height: 7rem;
}
.cop span{
	width: auto !important;
  height: auto !important;
	position: absolute !important;
	top: 32% !important;
	left: 32% !important;
	font-size: 1.2rem !important;
	color: #575453 !important;
	font-weight: 800;
	letter-spacing: 2px !important;
	margin-bottom:none;
}
.str{
	transition: all 0.5s;
}	
</style>
