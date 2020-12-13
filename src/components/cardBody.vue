<template>
<transition-group name="slide-down" mode="out-in">
    <div v-if="getData.length >= 1">
        <ul > 
            <li v-for="item in getData" :key="item.id">
                <div class="data-title">{{ (item.title.length >= 45 ) ? item.title.substring(0, 45) + '...' : item.title }}</div>
                <div class="data-body">{{ (item.body.length >= 55 ) ? item.body.substring(0, 55) + '...' : item.body }} </div>
            </li>
        </ul>
    </div>
    <div id="not-found" v-if="triedSearch">
        Sorry, we couldn`t find anything <i id="smiley" class="far fa-grin-beam-sweat"></i>
    </div>
</transition-group>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getData',
      'title',
      'triedOnce'
    ]),
    triedSearch() {
      if(this.triedOnce && (this.getData.length === 0 && this.title.length >= 1)) {
        return true
      } else {
        return false
      } 
    }
  }
}
</script>

<style scoped>

ul {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
}

ul li {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 15px 10px 15px;
  width: calc(100% - 30px);
  min-height: 50px;
  color: #191654;
}

ul li:hover {
  background: #43C6AC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #191654, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #191654, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in
}

ul li:first-child {
  margin-top: 20px;
}

ul li:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.data-title,
.data-body {
  min-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: left;
  margin-bottom: 2px;
}

.data-title {
  font-weight: 800
}

.data-body {
  padding-left: 7px;
}

#not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding-top: 10px;
  font-weight: 700;
  font-size: 20px;
  color: #191654; 
}

#smiley {
  margin-left: 15px;
  font-size: 30px;
}

/* ---------- TRANSITION GROUP ------------ */

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-down-leave-to {
  opacity: 0;
}

.slide-down-enter-active {
  transition: all 0.3s ease-out;
}

.slide-down-leave-active {
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 100px;
  left: 30%;
}

.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-from {
  opacity: 0
}

/* ---------------- RESPONSIVE ---------------*/
@media (max-width: 768px) {
  .data-title {
    font-weight: 700
  }
}

@media (max-width: 425px) {
  .data-title,
  .data-body {
    min-height: 40px;
  }

  .data-title {
    font-weight: 700
  }

  #not-found {
    font-size: 18px;
  }

}

@media (max-width: 320px) {
  #not-found {
    font-size: 16px
  }
  #smiley {
    font-size: 25px;
    margin-left: 10px;
  }
}
</style>