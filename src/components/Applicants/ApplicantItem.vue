<template>
  <div class="applicant">
    <div class="applicant-item">
      <span class="mobile applicant-field">ФИО</span>
      <span>{{ applicant.name }}</span>
    </div>
    <div class="applicant-item">
      <span class="mobile applicant-field">Дата подачи заявления</span>
      <span>{{ formatDate }}</span>
    </div>
    <div
      v-for="subject in applicant.subjects"
      :key="subject.subject"
      class="applicant-item"
    >
      <span class="mobile applicant-field">
        Балл по {{ getFormatSubjectName(subject) }}
      </span>
      <span
        :style="{ color: randomColor }"
        class="score"
      >{{ subject.score }}</span>
    </div>
    <div class="applicant-item">
      <span class="mobile applicant-field">Балл по информатике</span>
      <span
        :style="{ color: randomColor }"
        class="score"
      >
        {{ applicant.totalValue }}
      </span>
    </div>
    <div class="chart-wrapper">
      <span class="mobile applicant-field">Процент</span>
      <vc-donut
        :sections="[{ value: applicant.totalValue, color: randomColor }]"
        :total="maxScore"
        :size="40"
        :auto-adjust-text-size="false"
        class="pc"
        >{{ applicant.totalInPercents }}%</vc-donut
      >
      <LineChart 
        :total="maxScore"
        :value="applicant.totalValue"
        :color="randomColor"
        class="mobile"
      />
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue'
export default {
  props: {
    applicant: [Object],
    maxScore: Number,
  },
  components: {LineChart},
  data: () => ({
    colors: ["#FF0000", "#FFA200", "#01AA88", "#01AA88"],
  }),
  methods: {
    getFormatSubjectName(subject) {
      switch (subject.subject) {
        case "Русский язык":
          return "русскому";
        case "Математика":
          return "математике";
        case "Информатика":
          return "информатике";
      }
    },
  },
  computed: {
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
    formatDate() {
      return this.applicant.date.split("-").reverse().join(".");
    },
  },
};
</script>

<style lang="scss">
.applicant {
  background-color: #fff;
  display: grid;
  grid-template-columns: 40% repeat(6, 10%);
  align-items: center;
  margin-bottom: 4px;
  min-width: 1600px;
  justify-content: space-between;
  border-radius: 4px;
  transition: all 0.4s;
  border: 1px solid transparent;
  &:hover {
    background: transparent;
    border-color: #D5E7FF;
  }
}
.cdc-text {
  font-size: 0.8rem !important;
}

.applicant-item {
  border-right: 1px solid #d5e7ff;
  padding: 24px 20px;
}
.score {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
}
@media (max-width: 1440px) {
  .applicant {
    grid-template-columns: 25% repeat(6, 11%);
  }
}
@media (max-width: 700px) {
  .pc {
    display: none;
  }
  .applicant {
    min-width: auto;
    display: flex;
    flex-direction: column;
    border-right: none;
    display: flex;
    &-item,
    .chart-wrapper {
      border-bottom: 1px solid #d5e7ff;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 9px 12px;
      span {
        font-size: 14px;
        line-height: 17px;
        color: #1c1d1f;
      }
      .applicant-field {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        color: #8d9fb7;
      }
      .container {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
}
</style>
