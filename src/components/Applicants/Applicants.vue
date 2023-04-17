<template>
  <div class="applicants">
    <ApplicantsHeader @onSort="onSort" />
    <MobileSort @onSort="onSort" class="mobile mobile-sort-wrapper" />
    <TransitionGroup name="list" tag="div">
      <ApplicantItem
        v-for="applicant in renderApplicants"
        :key="applicant.id"
        :applicant="applicant"
        :maxScore="maxScore"
      />
    </TransitionGroup>
  </div>
</template>

<script>
import applicants from "@/utils/applicants.json";
import ApplicantItem from "./ApplicantItem.vue";
import { mapGetters } from "vuex";
import ApplicantsHeader from "./ApplicantsHeader.vue";
import MobileSort from "../MobileSort.vue";
export default {
  data: () => ({
    maxScore: 15,
    reverseSort: false,
  }),
  components: {
    ApplicantItem,
    ApplicantsHeader,
    MobileSort,
  },
  mounted() {
    this.$store.commit(
      "saveApplicants",
      applicants.map((applicant) => {
        const totalValue = this.totalValue(applicant);
        const totalInPercents = this.totalValueInPercents(totalValue);
        return {
          ...applicant,
          totalValue,
          totalInPercents,
        };
      })
    );
  },
  methods: {
    totalValue(applicant) {
      return applicant.subjects.reduce((acc, item) => {
        acc += +item.score;
        return acc;
      }, 0);
    },
    totalValueInPercents(totalValue) {
      return Math.floor((totalValue / this.maxScore) * 100);
    },
    setSortDirection(reverseSort) {
      if (reverseSort === true || reverseSort === false) {
        this.reverseSort = reverseSort
      }else {
        this.reverseSort =  !this.reverseSort;
      }
    },
    onSort(field, reverseSort) {
      const { searchValue, sortBy } = this.$route.query;
      if (sortBy !== field) {
        this.$router.push({ query: { sortBy: field, searchValue } });
      } else {
        this.setSortDirection(reverseSort)
      }
    },
  },
  computed: {
    ...mapGetters(["sortedAndSearchedApplicants"]),
    renderApplicants() {
      const { sortBy, searchValue } = this.$route.query;
      return this.sortedAndSearchedApplicants(
        sortBy,
        searchValue,
        this.reverseSort
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.applicants {
  overflow: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 10px;
    &-thumb {
      background: #d5e7ff;
      border-radius: 6px;
    }
  }
}

.mobile-sort-wrapper {
  margin-bottom: 8px;
}

@media(max-width: 700px) {
  .mobile-sort {
    display: flex;
    position: relative;
  }
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
