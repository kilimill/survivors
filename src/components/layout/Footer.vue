<template lang="pug">
footer.footer(ref="footer")
  .footer__inner
    p.footer__special(v-if="!mobile") Спецпроект
    .tags-info
      p.tags-info__restrictions 18+
      span.tags-info__tag #проснись
  social(v-if="!mobile")
</template>

<script>
import social from "@/components/layout/Social.vue";
import { mapState } from "vuex";
export default {
  props: ["page"],
  mounted() {
    this.editClass();
  },
  watch: {
    page() {
      this.editClass();
    },
  },
  methods: {
    editClass() {
      if (this.mobile && this.page !== 1 && this.page !== 101) {
        this.$refs.footer.classList.add("footer_black");
      } else {
        this.$refs.footer.classList.remove("footer_black");
      }
    },
  },
  components: {
    social,
  },
  computed: {
    ...mapState({
      mobile: (state) => state.common.mobile,
    }),
  },
};
</script>
