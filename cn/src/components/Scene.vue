<template>
  <div class="scene" :id="id" :style="{ background: scene.bgc }">
    <img :src="scene.bg" class="bg" />
    <img :src="scene.question" class="question ani" ani-effect="slideInDown" ani-duration="1s" />
    <img :src="scene.title" class="title ani" ani-effect="slideInUp" ani-duration="1s" />
     <video
      :src="videoUrl"
      :poster="videoPoster"
      ref="video"
      controls
      webkit-playsinline="true"
      x5-playsinline="true"
      playsinline
    ></video>
    <img
      v-if="scene.btnPlay1"
      :src="scene.btnPlay1"
      class="btnPlay1 animated infinite bigsmall"
      @click="switchVideo(0)"
    />
    <img
      v-if="scene.btnPlay2"
      :src="scene.btnPlay2"
      class="btnPlay2 animated infinite bigsmall"
      @click="switchVideo(1)"
    />

    <!-- <img
      v-if="scene.btnMore"
      :src="scene.btnMore"
      class="btnMore ani"
      ani-effect="slideInUp" ani-duration="2s"
      @click="handleMore"
    /> -->

    <div
      class="nextBtn ani"
      ani-effect="slideInUp" ani-duration="2s"
    >
      <img
        v-if="enableNext && currentIndex !== 5"
        :src="`${publicPath}img/icon-next.png`"
        class="animated infinite updown"
        @click="nextSlide"
      />
      <img
        v-if="enableNext && currentIndex === 5"
        :src="`${publicPath}img/icon-next.png`"
        class="animated infinite updown"
        @click="nextSlide"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'scene',
  props: {
    id: String,
    scene: Object,
    index: Number,
    currentIndex: Number,
    enableNext: Boolean,
  },
  data() {
    const publicPath = process.env.BASE_URL;
    return {
      publicPath,
      currentVideoIndex: 0,
    };
  },
  computed: {
    videoUrl() {
      return this.scene.videos[this.currentVideoIndex];
    },
    videoPoster() {
      return this.scene.posters[this.currentVideoIndex];
    },
  },
  watch: {
    currentIndex(current) {
      if (this.index !== current) {
        this.stopVideo();
      } else {
        this.startVideo();
      }
    },
  },
  mounted() {
  },
  methods: {
    nextSlide() {
      this.$emit('next');
    },
    stopVideo() {
      const { video } = this.$refs;
      video.pause();
    },
    startVideo() {
      const { video } = this.$refs;
      video.play();
    },
    switchVideo(index) {
      this.stopVideo();
      this.currentVideoIndex = index;
      this.$nextTick(() => {
        this.startVideo();
      });
    },
    handleMore() {
      // const { more } = this.scene;
      // if (more) {
      //   window.location.href = more;
      // }
      this.nextSlide();
    },
  },
};
</script>
