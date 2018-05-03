<template lang="pug">
.root(:class="{mobile}")
  .marks
    span.mark(
      v-for="mark in price"
      :class="{selected: selectedMark === mark}"
      @click="selectedMark = mark"
    ) {{mark[0]}}
  .models(v-if="selectedMark[1].length > 1")
    span.model(
    v-for="model in selectedMark[1]"
    :class="{selected: selectedModel === model}"
    @click="selectedModel = model"
    ) {{model[0]}}
  .jobs-n-image
    .jobs
      .job(v-for="job in selectedModel[1]" v-if="job[0] !== '_image'")
        .name(v-html="job[0]")
        span.price(v-html="job[1]")
        .red
    .image(v-if="!mobile && currImage")
      img(:src="currImage")
</template>

<script>
export default {
  props: {
    price: Array,
  },
  data() {
    return {
      selectedMark: this.price[0],
      selectedModel: null,
    }
  },
  computed: {
    currImage() {
      const arr = this.selectedModel[1].find(j => j[0] === '_image')
      return arr && arr[1]
    },
  },
  watch: {
    selectedMark: {
      immediate: true,
      handler() {
        this.selectedModel = this.selectedMark[1][0]
      }
    }
  },
}
</script>

<style scoped lang="stylus">
brand = #f52323
brand-hovered = #f2cdcf
brand-text = brand-hovered
price-text = #5e3e40
div-second-color = #dfebf1
.root
  width 100%
  display flex
  flex-direction column
  align-items center
  box-sizing border-box
  -webkit-tap-highlight-color transparent !important

  *
    box-sizing border-box
    font-weight inherit

  &.mobile
    width 100%
    .marks
      flex-direction column

.marks
  display inline-flex
  border-radius 30px
  border 1px solid brand
  overflow hidden
  margin 18px 0 39px

.mark
  font-size 24px
  padding 6px 12px
  width 200px
  height 62px
  display flex
  align-items center
  justify-content center
  cursor pointer
  &:hover
    background-color brand-hovered
  &.selected
    background-color brand
    color: brand-text

.models
  display flex
  justify-content center
  flex-wrap wrap
  margin-bottom 12px

.model
  padding: 6px 12px;
  font-size 24px
  border-radius 30px
  height 62px
  min-width 62px
  margin-right 2px
  margin-bottom: 10px;
  display flex
  align-items center
  justify-content center
  cursor pointer
  border 1px solid brand
  &:hover
    background-color brand-hovered
  &.selected
    background-color brand
    color: brand-text

.jobs-n-image
  width 95%
  display flex
  align-items flex-start

.image
  margin-left 15px
  width 25%

.jobs
.job
  width 100%

.job
  position relative
  display flex

.name
.price
  width 50%
  padding 14px 0 10px
  font-size 16px
  color price-text
  border-bottom 3px solid div-second-color

.red
  position absolute
  width 50%
  bottom 0
  left 0
  border-bottom 3px solid brand

.name
  text-align left
  flex 1
.price
  text-align right
  flex 0
  white-space pre
</style>
