<template>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            <h2 class="modal-header-title font-bold">Испытай удачу и выиграй приз</h2>
  
            <button
              type="button"
              class="btn-close"
              @click="() => {store.commit('changeOpenModal')}"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body">
          <slot name="body">
            <div class="flex flex-wrap h-full overflow-hidden">
                <div v-if="!Object.keys(store.state.promo).length" v-for="item in promos" class="w-1/3 border-2 h-1/3 game-block" @click="click(item)"></div>
                <div v-else v-for="item in promos" class="w-1/3 border-2 h-1/3 game-block"></div>
                <!-- <div class="w-1/3 border-2 h-1/3 game-block"></div>
                <div class="w-1/3 border-2 h-1/3 game-block"></div>
                <div class="w-1/3 border-2 h-1/3 game-block"></div>
                <div class="w-1/3 border-2 h-1/3 game-block"></div>
                <div class="w-1/3 border-2 h-1/3 game-block"></div>
                <div class="w-1/3 border-2 h-1/3 game-block"></div>
                <div class="w-1/3 border-2 h-1/3 game-block"></div>
                <div class="w-1/3 border-2 h-1/3 game-block"></div> -->
            </div>
          </slot>
         </section>
         <footer class="modal-footer">
            <slot name="footer">
              <component class="w-full" v-if="Object.keys(store.state.promo).length">
                <h2 class="font-bold">Ваша скидка составляет {{ store.state.promo.discount }}<br> Промокод {{ store.state.promo.promo }}</h2>
                <button
                type="button"
                class="btn-green"
                @click="close"
              >
                Оставить заявку!
            </button>
              </component>
              <component class="w-full" v-else="store.state.promo">
                Вы еще не сыграли, попробуйте!
              </component>
          </slot>
        </footer>
      </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()


let promos = [
    {
        promo: 'dsdfjsdiov',
        discount: '50%'
    },
    {
        promo: 'dfgdfgdfewr',
        discount: '10%'
    },
    {
        promo: 'jhgdgdsfdfdb',
        discount: '10%'
    },
    {
        promo: 'rgfggfhtyrtr',
        discount: '30%'
    },
    {
        promo: 'gdfffjgghn',
        discount: '20%'
    },
    {
        promo: 'retesthdsgst',
        discount: '40%'
    },
    {
        promo: 'klkl.jk,hjmg',
        discount: '20%'
    },
    {
        promo: 'argersdsdfbdb',
        discount: '10%'
    },
    {
        promo: 'dhgkgfkryewergg',
        discount: '30%'
    }
]

let click = (item) => {
    console.log(store.state.promo)
    store.commit('setPromo', item)
    console.log(store.state.promo)
}
</script>
  
<style scoped>
    .modal-backdrop {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal {
      background: #FFFFFF;
      box-shadow: 2px 2px 20px 1px;
      width: 50vw;
      height: 80vh;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 800px) {
        .modal {
            width: 99vw;
        }
    }
  
    .modal-header {
      padding: 15px;
      display: flex;
    }
    .modal-footer {
      padding: 15px;
    }
  
    .modal-header {
      border-bottom: 1px solid #eeeeee;
      color: #ae4a4a;
      align-items: center;
      justify-content: space-between;
    }
    .modal-header-title {
        padding-right: 10px;
    }
  
    .modal-footer {
      width: 100%;
      border-top: 1px solid #eeeeee;
    }
  
    .modal-body {
      height: 700px;
      position: relative;
      padding: 20px 10px;
    }

    .game-block {
        background: transparent;
        background-image: url('/maskot.jpg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .game-block:hover {
        border: 1px solid black;
        transition: 0.5s;
        transform: scale(1.05);
        cursor: pointer;
    }
  
    .btn-close {
      border: none;
      font-size: 20px;
      width: 30px;
      height: 32px;
      cursor: pointer;
      font-weight: bold;
      color: #ae4a4a;
      background: transparent;
    }

    .btn-close:hover {
      color: #703030;
      background: rgb(85, 85, 85, 0.2);
    }
  
    .btn-green {
      color: white;
      background: #ae4a4a;
      padding: 5px;
      border: 1px solid #ae4a4a;
      border-radius: 2px;
    }
</style>