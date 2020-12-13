<template>
  <div id="card">
    <div id="container">
      <card-search-bar></card-search-bar>
      <card-body></card-body>
    </div>
  </div>
</template>

<script>
import cardSearchBar from './components/cardSearch/cardSearchBar.vue'
import cardBody from './components/cardBody.vue'

export default {
  components: {
    cardSearchBar,
    cardBody,
  }
}
</script>

<style>
body {
  background: #43C6AC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #191654, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #191654, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#card{
  width: 30%;
}

#container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  margin-bottom: 30px;
}

/* ---------- RESPONSIVENESS --------------- */

@media (max-width: 1024px) {
  #card {
    width: 60%;
  }
}

@media (max-width: 768px) {
  .card {
    width: 80%;
  }
}

@media (max-width: 425px) {
  #card {
    width: 95%;
  }
}
</style>
