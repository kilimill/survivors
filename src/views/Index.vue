<template lang="pug">
.page__content
  .loader.loader_top(v-if="!mobile")
  .loader.loader_bottom(v-if="!mobile")
  section#index.index.window-height
    .index__bg
      img.index__bg-img(
        src="@/assets/img/index/index-bgMob.jpg",
        aria-hidden="true",
        v-if="mobile"
      )
      img.index__bg-img(
        src="@/assets/img/index/index-bg.jpg",
        aria-hidden="true",
        v-else
      )
    .index__content
      .index__anim-wrapper
        img.index__img.index__anim-inner(
          src="@/assets/img/index/index-img.png",
          alt="выжившие"
        )
      h1.index__title.index__anim
        .index__anim-wrapper
          span.index__anim-inner проснись,&nbsp
        .index__anim-wrapper
          span.index__anim-inner чтобы&nbsp
        .index__anim-wrapper
          span.index__anim-inner жить
      .index__info 
        p.index__desc.index__anim-wrapper
          span.index__anim-inner.
            Добро пожаловать в мир сериала «Выжившие»! Когда приходит настоящая эпидемия, срабатывает эффект домино: сначала отключаются свет, тепло, связь, потом – закон, а следом за ним и&nbsp;нормы морали. Остаются лишь тающие на глазах ресурсы и бешеное желание выжить. А еще – странный вирус. Если зараженный спит более 2 часов в сутки, он может больше не проснуться…
        p.index__desc.index__anim-wrapper
          span.index__anim-inner.
            Артур Смольянинов, Алексей Филимонов, Дарья Савельева, Валентина Лукащук и другие звезды ждут вас в захватывающем триллере Андрея Прошкина. В нашем проекте с Okko вы сможете узнать о сериале свежие новости, посмотреть все трейлеры, серии и&nbsp;веб-эпизоды, а также увидеть эксклюзивные кадры со съемок.
        .index__links
          a.index__link.btn.btn_black.index__anim-link(
            href="#trailer",
            data-ga="smotret_trejler",
            @click.prevent="playLinks($event, '#trailer')"
          ) 
            PlayBtn.index__link-play.btn__play
            span.index__link-text.btn__text Смотреть трейлер
    a.index__scroll.index__anim-link(
      href="#trailer",
      data-ga="prokrutite_vniz",
      @click.prevent="scrollLink($event, '#trailer')",
      v-if="!mobile"
    ) 
      ArrowBtm.index__scroll-img

  Trailer(@play="playVideo(0, '.trailer__preview', '.trailer__play')")
  Calendar
  Frames
  Actors
  Episode
  Podcast
</template>

<script>
import { qs, videoGo } from "@/helpers/index.js";
import { mapState } from "vuex";
import { elemVisCheck } from "@/helpers/index";
import PlayBtn from "@/assets/img/svg/play-btn.svg";
import ArrowBtm from "@/assets/img/svg/arrow-bottom.svg";
import Trailer from "@/components/page-index/Trailer.vue";
import Episode from "@/components/page-index/Episode.vue";
import Calendar from "@/components/page-index/Calendar.vue";
import Podcast from "@/components/page-index/Podcast.vue";
import Frames from "@/components/page-index/Frames.vue";
import Actors from "@/components/page-index/Actors.vue";

export default {
  components: {
    Trailer,
    PlayBtn,
    Episode,
    Calendar,
    Frames,
    Actors,
    Podcast,
    ArrowBtm,
  },
  data() {
    return {
      checkVideo: false,
    };
  },
  methods: {
    scrollLink(e, section) {
      let gaText = e.target.getAttribute("data-ga");
      qs(section).scrollIntoView({ behavior: "smooth" });
      this.$root.sendGA("internal", "click", gaText);
    },
    playLinks(e, section) {
      this.scrollLink(e, section);
      if (this.mobile) {
        this.playVideo(0, '.trailer__preview', '.trailer__play');
      } else {
        setTimeout(() => {
          this.playVideo(0, '.trailer__preview', '.trailer__play');
          qs(".trailer__preview").play();
        }, 600);
      }
    },
    playVideo(e,p, w) {
      videoGo(e,p, w)
    },
    
  },
  mounted() {
    elemVisCheck();
    // setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  computed: {
    ...mapState({
      mobile: (state) => state.common.mobile,
    }),
  },
};
</script>

