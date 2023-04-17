<template>
  <div class="input-wrapper" :class="{ focused: focus }">
    <img :src="require('@/assets/search.svg')" alt="лупа" />
    <input
      type="text"
      placeholder="Поиск"
      v-model="value"
      @focusin="onFocus"
      @focusout="onFocusOut"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    value: "",
    focus: false,
  }),
  mounted() {
    this.value = this.$route.query.searchValue || ''
  },
  methods: {
    onFocus() {
      this.focus = true;
    },
    onFocusOut() {
      this.focus = false;
    },
  },
  watch: {
    value() {
      this.$emit("onInput", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  gap: 8px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #d5e7ff;
  border-radius: 4px;
  transition: all 0.4s;
  &:hover {
    -webkit-box-shadow: 0px 8px 8px -2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 8px 8px -2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 8px 8px -2px rgba(34, 60, 80, 0.2);
    border-color: #80b6ff;
  }
}
input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
}
.focused {
  border-color: #006cfe;
}
</style>
