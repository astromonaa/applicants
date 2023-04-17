import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    applicants: [],
  },
  mutations: {
    saveApplicants(state, applicants) {
      state.applicants = applicants;
    },
  },
  getters: {
    sortedApplicants: (state) => (sortField, reverseSort) => {
      if (!sortField) return state.applicants;
      return state.applicants.sort((a, b) => sort(a, b, sortField, reverseSort))
    },
    sortedAndSearchedApplicants: (state, getters) => (sortField, searchValue, reverseSort) => {
        searchValue = searchValue || "";
        return getters
          .sortedApplicants(sortField, reverseSort)
          .filter((applicant) =>
            applicant.name.toLowerCase().includes(searchValue.toLowerCase())
          );
      },
  },
});

function sort(a, b, field, reverseSort) {
  if (field === "name" && reverseSort) {
    return b[field].localeCompare(a[field]);
  } else if (field === "name" && !reverseSort) {
    return a[field].localeCompare(b[field]);
  }
  if (field === "date" && reverseSort) {
    return new Date(b[field]) - new Date(a[field]);
  } else if (field === "date" && !reverseSort) {
    return new Date(a[field]) - new Date(b[field]);
  }
  if (field === "totalValue" && reverseSort) {
    return +b[field] - +a[field];
  } else if (field === "totalValue" && !reverseSort) {
    return +a[field] - +b[field];
  }

  const subjectA = a.subjects.find((el) => el.subject === field);
  const subjectB = b.subjects.find((el) => el.subject === field);

  if (reverseSort) {
    return subjectB.score - subjectA.score;
  }else {
    return subjectA.score - subjectB.score;
  }
}
