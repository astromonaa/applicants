<template>
  <div class="mobile-sort">
    <div class="mobile-sort__choosen-type" @click="openList">
      <small>Сортировать по</small>
      <img
        :src="require('@/assets/bottom.svg')"
        alt="стрелка вниз"
        :class="{reverse: dropdownOpen}"
      />
      <span>{{dropDownValue}}</span>
    </div>
    <div class="sort-btn" @click="onSort" :class="{ active: sorted }">
      <Arrow :fill="downFill" />
    </div>
    <div
      class="sort-btn reverse"
      @click="onReverseSort"
      :class="{ active: sortReverse }"
    >
      <Arrow :fill="upFill" />
    </div>

    <ul class="mobile-sort__dropdown" :class="{open: dropdownOpen}">
      <li class="mobile-sort__dropdown_item" @click="chooseSortItem($event, 'name')">ФИО</li>
      <li class="mobile-sort__dropdown_item" @click="chooseSortItem($event, 'date')">Дата подачи заявления</li>
      <li class="mobile-sort__dropdown_item" @click="chooseSortItem($event, 'Русский язык')">Балл по русскому</li>
      <li class="mobile-sort__dropdown_item" @click="chooseSortItem($event, 'Математика')">Балл по математике</li>
      <li class="mobile-sort__dropdown_item" @click="chooseSortItem($event, 'Информатика')">Балл по информатике</li>
      <li class="mobile-sort__dropdown_item" @click="chooseSortItem($event, 'totalValue')">Суммарный балл</li>
      <li class="mobile-sort__dropdown_item" @click="chooseSortItem($event, 'totalValue')">Процент</li>
    </ul>
  </div>
</template>

<script>
import Arrow from "./UI/Arrow.vue";
export default {
  data: () => ({
    sorted: false,
    sortReverse: false,
    downFill: "#006CFE",
    upFill: "#006CFE",
    dropdownOpen: false,
    sortField: 'name',
    dropDownValue: ''
  }),
  components: { Arrow },
  methods: {
    onSort() {
      this.downFill = "#fff";
      this.upFill = "#006CFE";
      this.sorted = true;
      this.sortReverse = false;
      this.$emit('onSort', this.sortField, false)
    },
    onReverseSort() {
      this.downFill = "#006CFE";
      this.upFill = "#fff";
      this.sorted = false;
      this.sortReverse = true;
      this.$emit('onSort', this.sortField, true)
    },
    openList() {
      this.dropdownOpen = !this.dropdownOpen
    },
    chooseSortItem($event, field) {
      this.dropdownOpen = false
      this.dropDownValue = $event.target.textContent
      this.sortField = field
      this.$emit('onSort', field, this.sortReverse)
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.mobile-sort__choosen-type {
  background: #ffffff;
  border: 1px solid #d5e7ff;
  border-radius: 4px;
  padding: 7px 12px;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  margin-right: auto;
  width: 100%;
  cursor: pointer;
  img {
    grid-row: 1/3;
    grid-column: 2;
    transition: all 0.4s;
  }
  small {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #8d9fb7;
  }
  span {
    font-size: 14px;
    line-height: 17px;
  }
}
.sort-btn {
  min-width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #006cfe;
  border-radius: 2px;
  margin-left: 12px;
  transition: all 0.4s;
  &:last-child {
    margin-left: 4px;
  }
}
.reverse {
  transform: rotate(180deg);
}
.active {
  background: #006cfe;
}
.mobile-sort__dropdown {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid transparent;
  height: 0;
  overflow: hidden;
  transition: all 0.4s;
  opacity: 0;
  z-index: 2;
  &_item {
    padding: 10px 12px;
    border-bottom: 1px solid transparent;
    transition: all 0.4s;
    cursor: pointer;
    &:last-child {
      border: none;
    }
  }
}
.open {
  height: 268px;
  border: 1px solid #d5e7ff;
  top: 107%;
  opacity: 1;
  .mobile-sort__dropdown_item {
    border-color: #D5E7FF;
    &:hover {
      background: #EDF5FF;
    }
  }
}
</style>
