<template lang="pug">
  section.reference
    h2.reference__title Пересечение web-сериалов и&nbsp;серий основного сериала
    .reference__inner
      .reference__content
        a.reference__item(href='#' v-for='(item, index) in referenceData' @click.prevent='previewSlide(index, item.ga)' :class='{ active: slidesId == index}' :disabled='item.dis')
          .reference__item-connection
          .slider__pag.reference__pag
            .slider__pag-icon
              .slider__pag-num {{ item.number }}
          p.reference__item-title {{ item.title }}
          p.reference__item-number(v-if='item.seriesNumber') {{ item.seriesNumber }}
      a.reference__basic-link(href='https://okko.tv/serial/vyzhivshie?utm_source=afisha&utm_medium=spec&utm_campaign=afisha_survivors&utm_content=button_calendar_watch' target='_blank' @click="$root.sendGA('external', 'click', 'osnovnoj_serial')")
        p.reference__basic-title Основной сериал 
</template>

<script>
import { mapState } from 'vuex'
export default ({
  methods: {
    previewSlide (id, ga) {
      this.$emit('previewSlide', id);
      this.$root.sendGA("internal", "click", `${ga}`);
    }
  },  
  computed: {
    ...mapState({
      referenceData: (state) => state.reference.referenceData,
      slidesId: (state) => state.universe.slidesId,
    })
  }
})
</script>
