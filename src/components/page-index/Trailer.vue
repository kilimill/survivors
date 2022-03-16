<template lang="pug">
  section.trailer.window-height(id='trailer')
    .trailer__content
      .video-play.trailer__play
        Play.video-play__img
      video.trailer__preview.video(v-on:click="$emit('play')" poster="@/assets/img/trailer-img.jpg")
        source(src="@/assets/video/trailer.mp4" type="video/mp4")
    a.trailer__link.btn.btn_black(href="https://okko.tv/serial/vyzhivshie?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=button_main_okkobrand_watch" target="_blank" @click="$root.sendGA('external', 'click', `smotret_v_okko`)") 
      PlayBtn.trailer__link-play.btn__play
      span.trailer__link-text.btn__text Смотреть в Okko
</template>

<script>
import PlayBtn from "@/assets/img/svg/play-btn.svg";
import Play from "@/assets/img/svg/trailer-play.svg";
export default {
  components: {
    PlayBtn,
    Play
  },
};
</script>