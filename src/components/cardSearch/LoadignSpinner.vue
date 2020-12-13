<template>
    <div id="spinner">
      <div class="loader"></div>
      <div id="spinner-text">Loading...</div>
    </div>
</template>

<style scoped>

#spinner {
  width: 90%;
  background: white;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10%;
}

.loader {
  border: 4px solid lightgray;
  border-top: 4px solid  #191654;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  margin-right: 5px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#spinner-text {
  color:  #191654;
  font-weight: 700
}
</style>