<template>
  <div id="app" :class="[lang, size]">
    <swiper :options="swiperOptions" ref="appSwiper" class="swiper-box">
      <swiper-slide class="swiper-item swiper-no-swiping">
        <LoadingScene
          :lang="lang"
          :progress="progress"
          @next="handleNextSlide"
        />
      </swiper-slide>
      <swiper-slide :class="['swiper-item', progress !== 100 && 'swiper-no-swiping']">
        <Scene
          enableNext
          :index="1"
          :scene="resource.scene1"
          @next="handleNextSlide"
          :current-index="currentIndex"
          id="scene1" ref="scene1"
        />
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <Scene
          enableNext
          :index="2"
          :scene="resource.scene2"
          @next="handleNextSlide"
          :current-index="currentIndex"
          id="scene2" ref="scene2"
        />
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <Scene
          enableNext
          :index="3"
          :scene="resource.scene3"
          @next="handleNextSlide"
          :current-index="currentIndex"
          id="scene3" ref="scene3"
        />
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <Scene
          enableNext
          :index="4"
          :scene="resource.scene4"
          @next="handleNextSlide"
          :current-index="currentIndex"
          id="scene4" ref="scene4"
        />
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <Scene
          enableNext
          :index="5"
          :scene="resource.scene5"
          @next="handleNextSlide"
          :current-index="currentIndex"
          id="scene5" ref="scene5"
        />
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <Scene
          enableNext
          :index="6"
          :current-index="currentIndex"
          :scene="resource.scene6"
          @next="handleNextSlide"
          id="scene6" ref="scene6"
        />
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <TrailEnScene />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Scene from './components/Scene.vue';
import LoadingScene from './components/LoadingScene.vue';
import TrailCnScene from './components/TrailCnScene.vue';
import TrailEnScene from './components/TrailEnScene.vue';
import getResouce from './resource';
import * as swiperAni from './swiper.animate.min';
import { LANG } from './config';

function getSize() {
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  let size = 'r_6';
  if (ww / wh >= 375 / 553) {
    size = 'r_6 r_6i';
  } else if (ww / wh >= 375 / 603) {
    size = 'r_6';
  } else if (ww / wh >= 414 / 672) {
    size = 'r_6p';
  } else if (ww / wh >= 375 / 680) {
    size = 'r_af';
  } else if (ww / wh >= 375 / 724) {
    size = 'r_x';
  } else {
    size = 'r_x';
  }
  return size;
}

export default {
  name: 'carrousel',
  components: {
    Scene,
    LoadingScene,
    TrailCnScene,
    TrailEnScene,
  },
  data() {
    const app = this;
    const publicPath = process.env.BASE_URL;
    const lang = LANG;
    const { resource, images } = getResouce({ publicPath, lang });
    const size = getSize();
    const swiperOptions = {
      direction: 'vertical',
      slidesPerView: 'auto',
      // mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init() {
          swiperAni.swiperAnimateCache(this);
          swiperAni.swiperAnimate(this);
        },
        slideChange() {
          swiperAni.swiperAnimate(this);
          this.allowSlidePrev = this.activeIndex > 1;
          app.currentIndex = this.activeIndex;
        },
      },
    };
    return {
      lang,
      size,
      publicPath,
      swiperOptions,
      resource,
      images,
      currentIndex: 0,
      loading: false,
      loadedImgCount: 0,
      isStart: false,
    };
  },
  computed: {
    swiper() {
      return this.$refs.appSwiper.swiper;
    },
    progress() {
      const { loadedImgCount, images } = this;
      return Math.floor(loadedImgCount / images.length * 100);
    },
  },
  mounted() {
    window.document.title = this.resource.meta.title;
    this.enableSlideContentScroll(this.swiper);
    this.preLoad();
    var _mtac = {};
    (function() {
        var mta = document.createElement("script");
        mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500704716");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
    })();
  },
  methods: {
    enableSlideContentScroll(swiper) {
      let startScroll; let touchStart; let
        touchCurrent;
      swiper.slides.on('touchstart', function handleSlideTouchStart(e) {
        startScroll = this.scrollTop;
        touchStart = e.targetTouches[0].pageY;
      }, true);
      swiper.slides.on('touchmove', function handleSlideTouchMove(e) {
        touchCurrent = e.targetTouches[0].pageY;
        const touchesDiff = touchCurrent - touchStart;
        const slide = this;
        // allow only when slide is scrollable
        const onlyScrolling = (slide.scrollHeight > slide.offsetHeight)
          && (
            // start from top edge to scroll bottom
            (touchesDiff < 0 && startScroll === 0)
            // start from bottom edge to scroll top
            || (touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight))
            // start from the middle
            || (startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
          );
        if (onlyScrolling) {
          e.stopPropagation();
        }
      }, true);
    },

    preLoad() {
      this.loading = true;
      const { images } = this;
      images.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          this.loadedImgCount = this.loadedImgCount + 1;
        };
      });
    },
    handleNextSlide() {
      this.swiper.slideNext();
    },
  },
};
</script>
<style type="text/css">
	#scene1 img:nth-child(2){
  height: 9vw !important;
}
#scene2 img:nth-child(2){
  height:9vw !important;
}
#scene3 img:nth-child(2){
  top: 60vw !important;
  height: 13vw !important;
}
#scene4 img:nth-child(2){

  height: 14vw !important;
}
#scene5 img:nth-child(2){
  height:8vw !important;
}
#scene6 img:nth-child(2){
  height:8vw !important;
}
#scene6{
	background: #cbd2dc !important;
}
#scene6 .bg{
	top: -18vw !important;
  height: 180vw !important;
}
</style>
