import './index.css'
import 'flowbite';

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state () {
      return {
        isOpenModal: true,
        promo: {},
      }
    },
    mutations: {
      changeOpenModal (state) {
        state.isOpenModal = !state.isOpenModal
      },
      setPromo (state, promo) {
        state.promo = promo
      }
    }
})

createApp(App).use(store).mount('#app')
