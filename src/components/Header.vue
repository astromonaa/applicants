<template>
  <header class="header">
    <img :src="require('@/assets/logo.svg')" class="logo" alt="Логотип" />
    <b>Система <br />таблиц</b>
    <div class="header__right">
      <span class="name">Светлана</span>
      <span class="position">Сотрудник</span>
      <img :src="require('@/assets/user.svg')" alt="" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  padding: 24px 60px;
  background-color: #fff;
  &__right {
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    img {
      grid-row: 1/3;
      grid-column: 2;
      margin-left: 10px;
    }
  }
}
.logo {
  margin-right: 10px;
}
b {
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: #006cfe;
}
.position,
.name {
  grid-column: 1;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
}
.name {
  font-weight: 700;
  color: #006cfe;
  align-self: end;
}
.position {
  font-weight: 400;
  color: #8d9fb7;
  align-self: start;
}
@media(max-width: 700px) {
  .header {
    padding: 24px 12px;
  }
}
</style>
