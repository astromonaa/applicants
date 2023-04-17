<template>
  <div class="applicants-header">
    <div>
      <span @click="onSort('name')">ФИО</span>
      <Arrow fill="#006CFE" />
    </div>
    <div>
      <span @click="onSort('date')">Дата подачи заявления</span>
      <Arrow fill="#006CFE" />
    </div>
    <div>
      <span @click="onSort('Русский язык')">Балл по русскому</span>
      <Arrow fill="#006CFE" />
    </div>
    <div>
      <span @click="onSort('Математика')">Балл по математике</span>
      <Arrow fill="#006CFE" />
    </div>
    <div>
      <span @click="onSort('Информатика')">Балл по информатике</span>
      <Arrow fill="#006CFE" />
    </div>
    <div>
      <span @click="onSort('totalValue')">Суммарный балл</span>
      <Arrow fill="#006CFE" />
    </div>
    <div>
      <span @click="onSort('totalValue')">Процент</span>
    </div>
  </div>
</template>

<script>
import Arrow from "../UI/Arrow.vue";

export default {
  methods: {
    onSort(field) {
      this.$emit("onSort", field);
    },
  },
  components: { Arrow },
};
</script>

<style lang="scss" scoped>
.applicants-header {
  display: grid;
  grid-template-columns: 40% repeat(6, 10%);
  align-items: center;
  margin-bottom: 10px;
  padding: 0 20px;
  min-width: 1600px;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer;
    &:first-child {
      justify-content: start;
    }
  }
  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #006cfe;
    white-space: nowrap;
    transition: all 0.4s;
    &:hover {
      color: #004199;
    }
  }
}

@media (max-width: 1440px) {
  .applicants-header {
    grid-template-columns: 25% repeat(6, 12%);
  }
}
@media (max-width: 700px) {
  .applicants-header {
    display: none;
  }
}
</style>
