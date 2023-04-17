<template>
  <router-view/>
</template>

<script>

</script>

<style>
@font-face {
  font-family: "Proxima Nova";
  src: url(@/assets/fonts/proximanova_black.otf);
  src: url(@/assets/fonts/proximanova_blackit.otf);
  src: url(@/assets/fonts/proximanova_bold.otf);
  src: url(@/assets/fonts/proximanova_boldit.otf);
  src: url(@/assets/fonts/proximanova_extrabold.otf);
  src: url(@/assets/fonts/proximanova_light.otf);
  src: url(@/assets/fonts/proximanova_regular.ttf);
  src: url(@/assets/fonts/proximanova_black.ttf);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  scrollbar-width: thin;
  scrollbar-color: #d5e7ff #EDF5FF;
}
::-webkit-scrollbar {
  width: 10px;
}
.mobile {
  display: none;
}
::-webkit-scrollbar-thumb {
  background: #d5e7ff;
  border-radius: 15px;
  background-clip: content-box;
}

body {
  background: #EDF5FF;
}
</style>
