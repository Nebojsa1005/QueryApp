<template>
  <div id="search-bar">
    <i class="fas fa-search"></i>
    <input type="text"
    v-model="searchedTitle"
    @input="search"
    @focus="reset" 
    placeholder="Please, start entering text to search...">
  </div>
  <loading-spinner v-if="isLoading"></loading-spinner>
</template>

<script>
import loadingSpinner from './LoadignSpinner.vue'

export default {
  components: {
    loadingSpinner,
  },
  data() {
    return {
      searchedTitle: '',
      isLoading: false,
      triedOnce: false
    }
  },
  methods: {
    async search() {
      this.isLoading = true
      await this.$store.dispatch('setData', this.searchedTitle.toLowerCase())
      this.isLoading = false
      this.triedOnce = true
      this.$store.commit('notFound', this.triedOnce)
    },
    reset() {
      this.triedOnce = false,
      this.searchedTitle = ''
    }
  }
}
</script>


<style scoped>
#search-bar {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 20px 16px -9px rgba(0,0,0,0.7);
}

i {
  margin-left: 25px;
  font-size: 25px;
  color: #191654;
  background: inherit
}

input {
  width: 100%;
  height: 30px;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  color: #191654;
  background: inherit
}

/* --------- RESPONSIVE ----------- */

@media (max-width: 320px) {
  i {
    margin-left: 10px;
  }

  input {
    font-size: 15px;
  }
}

</style>
