<template>
  <div>
    <Header />
    <main class="main">
      <h1>Список заявлений</h1>
      <SearchInput class="search-input" @onInput="onInput" />
      <Applicants />
    </main>
  </div>
</template>

<script>
import Applicants from "@/components/Applicants/Applicants.vue";
import Header from "@/components/Header.vue";
import SearchInput from "@/components/SearchInput.vue";

export default {
  name: "Main",
  components: { Header, SearchInput, Applicants },
  data: () => ({
    timeout: null,
  }),
  methods: {
    onInput(value) {
      const { sortBy } = this.$route.query;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$router.push({ query: { searchValue: value, sortBy } });
        clearTimeout(this.timeout);
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.main {
  padding: 60px;
}
.search-input {
  margin-top: 20px;
  margin-bottom: 20px;
}

@media (max-width: 700px) {
  .mobile {
    display: block;
  }
  .main {
    padding: 60px 12px 12px 12px;
  }
}
</style>
