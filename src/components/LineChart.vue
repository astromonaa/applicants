<template>
  <div class="container">
    <span>{{ lineWidth }}%</span>
    <div class="line-wrapper">
      <div
        class="line-wrapper__chart-line"
        :style="{ width: lineWidth + '%', background: color }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
    value: Number,
    color: String,
  },
  computed: {
    lineWidth() {
      return Math.floor((this.value / this.total) * 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.line-wrapper {
  background-color: #edf5ff;
  border-radius: 4px;
  height: 4px;
  width: 100%;
  &__chart-line {
    height: 100%;
    border-radius: 4px;
  }
}
</style>
