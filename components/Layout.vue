<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'LayoutBase',
})
</script>
<template>
  <div class="container">
    <header class="header">
      <div class="head">Top 1</div>
      <div class="head">Top 2</div>
    </header>

    <body class="body">
      <div class="middle">Middle 1</div>
      <div class="middle2">Middle 2</div>
    </body>
    <footer class="footer">
      <div class="bottom">Bottom 1</div>
      <div class="bottom2">Bottom 2</div>
    </footer>
  </div>
</template>
<style>
.container {
  height: 100vh;
  width: 100vw;
}
.header {
  height: 25vh;
  display: flex;
}
.head {
  flex: 1;
  padding: 10px;
  border-style: solid;
  border-width: 2px;
}
.body {
  height: 62.5vh;
  margin: 0;
  display: flex;
}
.middle {
  display: none;
}
.middle2 {
  flex: 1;
  padding: 10px;
  border-style: solid;
  border-width: 2px;
}
.footer {
  height: 12.5vh;
  display: flex;
}
.bottom {
  flex: 1;
  padding: 10px;
  border-style: solid;
  border-width: 2px;
}
.bottom2 {
  display: none;
}

@media (max-width: 320px) {
  .header {
    height: 22.5vh;
    display: flex;
    flex-direction: column;
  }
  .body {
    height: 62.5vh;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .middle {
    display: none;
  }
  .footer {
    height: 15vh;
    display: flex;
    flex-direction: column;
  }
  .bottom2 {
    flex: 1;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    display: flex !important;
  }
}
@media (min-width: 1080px) {
  .middle {
    display: flex !important;
    flex: 1;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
  }
  .middle2 {
    flex: 2;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
  }
}
</style>
