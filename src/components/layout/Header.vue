<template lang="pug">
header.header
  .header__container
    a.header__link(
      href="https://www.afisha.ru",
      target="_blank",
      @click="$root.sendGA('external', 'click', `logo_afisha`)"
    )
      afishaLogo.logo.logo_afisha
    button.burger(
      :class="{ active: this.menuOpen == true }",
      @click="menu",
      v-if="mobile"
    )
      span.burger__line
    nav.header__nav
      ul.header__list
        .header__list-inner(ref="headBasicList")
          li.header__item(v-for="item in hrefsData", :id="item.id")
            a.header__item-link(
              :href="item.href",
              @click.prevent="scrollLink($event, item.href, item.ga)"
            ) {{ item.title }}
        li.header__item.header__item_for(ref="headWebList")
          a.header__item-link.header__item-link_uni(
            href="/universe",
            @click.prevent="linksUniverse(0, 'web_serii')",
            data-ga="podkasti",
            v-if="!this.mobile"
          ) Web-серии
          a.header__item-link.header__item-link_uni(
            @click.prevent="openDropMob",
            v-else
          ) Web-серии
          ul.header__drop
            li.header__drop-item(v-for="item in linksDrop", :id="item.id")
              a.header__drop-link(
                href="/universe",
                @click.prevent="linksUniverse(item.id, item.ga)",
                :disabled="item.disabled"
              ) {{ item.title }}
      .header__social(v-if="mobile")
        p.header__social-title Поделитесь в соц. сетях
        Social
      .tags-info(v-if="mobile")
        p.tags-info__restrictions 18+
        span.tags-info__tag #проснись
    a.header__link(
      href="https://okko.tv/serial/vyzhivshie?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=logo_okko",
      target="_blank",
      @click="$root.sendGA('external', 'click', `logo_okko`)"
    )
      okkoLogo.logo.logo_okko
</template>

<script>
import { qs, qsAll } from "@/helpers/index.js";
import afishaLogo from "@/assets/img/logo-afisha.svg";
import okkoLogo from "@/assets/img/okko.svg";
import Social from "@/components/layout/Social";
import { mapState } from "vuex";
export default {
  props: {
    page: {
      type: Number,
    },
  },
  data() {
    return {
      menuOpen: false,
      scrollPoint: null,
      gaData: [
        {
          procent: 25,
          check: false,
        },
        {
          procent: 50,
          check: false,
        },
        {
          procent: 75,
          check: false,
        },
        {
          procent: 100,
          check: false,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      mobile: (state) => state.common.mobile,
      hrefsData: (state) => state.headerLinks.links,
      linksDrop: (state) => state.headerLinks.linksDrop,
    }),
  },
  components: {
    Social,
    afishaLogo,
    okkoLogo,
  },
  methods: {
    openDropMob() {
      let bList = this.$refs.headBasicList;
      if (bList.classList.contains("close-list")) {
        this.$refs.headBasicList.classList.remove("close-list");
        this.$refs.headWebList.classList.remove("open");
      } else {
        this.$refs.headBasicList.classList.add("close-list");
        this.$refs.headWebList.classList.add("open");
        this.toucher();
      }
    },
    linksUniverse(id, ga) {
      if (this.page !== 2) {
        this.$router.push({ name: "Universe" });
        this.searchLink(".header__item-link");
        window.removeEventListener("wheel", this.scrollHandler);
        window.scrollTo(0, 0);
        this.$store.commit("series/rebootCheck");
        this.$store.commit("podcast/rebootCheck");
        qs(".header__item-link_uni").classList.add("active");
      }
      this.$root.sendGA("internal", "click", `${ga}`);
      this.$store.commit("universe/editId", id);
      if (this.mobile) {
        this.menu();
      }
    },
    menu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen == true) {
        document.body.classList.add("open");
        this.$root.sendGA("internal", "click", "burger_menu");
      } else {
        document.body.classList.remove("open");
        this.$root.sendGA("internal", "click", "zakryt_burger_menu");
        // this.openDropMob();
      }
    },
    scrollLink(e, section, ga) {
      if (this.page == 1 || this.page == 101) {
        qs(section).scrollIntoView({ behavior: "smooth" });
      } else {
        this.$store.commit("universe/rebootCheck");
        qs(".universe").classList.add("close-page");
        this.$router.push({ name: "Index", hash: section });
        if (!this.mobile) {
          window.addEventListener("wheel", this.scrollHandler);
        } else {
          window.addEventListener("touchmove", this.scrollHandler);
        }
      }
      this.searchLink(".header__item-link");
      this.$root.sendGA("internal", "click", ga);
      e.target.classList.add("active");
      if (this.mobile) {
        this.menu();
      }
    },
    scrollCheck() {
      if (window.pageYOffset > this.scrollPoint) {
        var offset = window.pageYOffset || document.documentElement.scrollTop,
          windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let progress = Math.floor((offset / windowHeight) * 100);
        this.gaData.forEach((el) => {
          if (progress >= el.procent && el.check == false) {
            el.check = true;
            this.showGa(el.procent);
          }
        });
        this.scrollPoint = window.pageYOffset;
      }
    },
    showGa(proc) {
      let textGa;
      if (!this.mobile) {
        textGa = `scroll_${proc}`;
      } else {
        textGa = `m_scroll_${proc}`;
      }
      this.$root.sendGA("internal", "click", textGa);
    },
    scrollHandler() {
      let scrollDistance = window.scrollY,
        header = qs(".header__list");

      qsAll(".window-height").forEach((el, i) => {
        if (el.offsetTop - header.clientHeight * 2 <= scrollDistance) {
          this.searchLink(".header__item-link");
          qsAll(".header__item-link")[i].classList.add("active");
        }
      });
      this.scrollCheck();
    },
    searchLink(link) {
      qsAll(link).forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
    },

    toucher() {
      let x = 0;
      qs(".header__drop").addEventListener(
        "touchstart",
        (e) => (x = e.changedTouches[0].clientX)
      );
      qs(".header__drop").addEventListener(
        "touchend",
        (e) => e.changedTouches[0].clientX - x > 50 && this.openDropMob()
      );
    },
  },
  mounted() {
    if (this.page == 1 || this.page == 101) {
      this.scrollPoint = window.pageYOffset;
      this.scrollCoin = window.pageYOffset;
      this.$router;
      this.scrollCheck();
      this.scrollHandler();
      if (!this.mobile) {
        window.addEventListener("wheel", this.scrollHandler);
      } else {
        window.addEventListener("touchmove", this.scrollHandler);
      }
    } else {
      qs(".header__item_for .header__item-link").classList.add("active");
    }
  },
};
</script>
