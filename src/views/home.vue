<template>
    <div v-show="!store.state.isOpenModal" class="fade-bg h-full" style="background-image: url('/bg_home.jpg'); background-size: cover;">
        <div class="h-full" style="opacity: 0.8; background-color: rgb(238, 238, 238);">



        <div class="relative pt-20" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-64 overflow-hidden sm:h-64 xl:h-80 2xl:h-96">
                <!-- Item 1 -->

                <div :id="_key" class="hidden duration-700 ease-in-out" v-for="_key in Object.keys(data)">
                    <img :src="'/' + _key + '.jpg'"
                        class="absolute rounded-lg block h-4/5 sm:h-full xl:h-full 2xl:h-full w-auto -translate-x-1/2 left-1/2">
                </div>

            </div>

            <div class="relative flex justify-center gap-2 pt-8">
                <button :id="_key + '_i'" type="button" class="w-3 h-3 rounded-full "
                    v-for="_key in Object.keys(data)"></button>

            </div>



            <!-- Slider controls -->
            <!-- <button id="data-carousel-prev" type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span
                    class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-400 dark:bg-gray-800/30 group-hover:bg-blue-700 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
                    <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                    <span class="hidden">Previous</span>
                </span>
            </button>
            <button id="data-carousel-next" type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                <span
                    class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-blue-400 dark:bg-gray-800/30 group-hover:bg-blue-700 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
                    <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="hidden">Next</span>
                </span>
            </button> -->
        </div>
        <div class="flex justify-center w-full py-20">
            <div class="p3">
                <Transition v-show="!will_change.state" name="slide-fade" appear>
                    <div>
                        <h1
                            class="text-center mb-4 text-blue-900 text-lg font-extrabold leading-none tracking-tight sm:text-4xl lg:text-5xl dark:text-white">
                            {{ header.title }}</h1>
                        <p
                            class="text-center mb-6 text-blue-800 text-sm font-normal sm:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
                            {{ header.description }}</p>
                    </div>

                </Transition>
            </div>
        </div>

        <div class="flex justify-center w-full py-20 bg-gray-500">
            <div class="p3">
                <Transition v-show="!will_change.state" name="slide-fade" appear>
                    <div>
                        <h1
                            class="text-center mb-4 text-white text-lg font-extrabold leading-none tracking-tight sm:text-4xl lg:text-5xl dark:text-white">
                            КОНТАКТЫ
                        </h1>
                        <p
                            class="text-center mb-6 text-white text-sm font-normal sm:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
                            Телефон:  +7 (8452) 77-93-77   
                        </p>
                        <p
                            class="text-center mb-6 text-white text-sm font-normal sm:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
                            г. Саратов
                        </p>
                        <p
                            class="text-center mb-6 text-white text-sm font-normal sm:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
                            Время работы: ПН-ПТ 9:00-19:00, СБ 9:00-16:00    
                        </p>
                    </div>

                </Transition>
            </div>
        </div>

        <div class="w-full">
            <iframe class="w-full h-96" src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3Ahl8ErZJ-kwCSMK_K5o1i6siAG5dW3oH4"></iframe>
        </div>

        </div>
    </div>
</template>




<script setup>
import { reactive, onMounted, computed } from 'vue';
import { Carousel } from 'flowbite'

import { useStore } from 'vuex'
const store = useStore()

let if_initial = true

let current = reactive({ active: -1 })
let will_change = reactive({ state: false })
let header = reactive({ title: "", description: "" })

let props = defineProps(['data'])

let data = props.data
let index_ = {}
for (let i in data) {
    let p = Object.keys(data).indexOf(i)
    index_[p] = data[i]

}


onMounted(() => {
    carousel_creator()
    console.log(store.state.isOpenModal)
})



function carousel_creator() {
    const items = []
    const items_i = []

    for (let i in data) {
        let p = Object.keys(data).indexOf(i)
        let x = {
            position: p,
            el: document.getElementById(i)
        }
        let y = {
            position: p,
            el: document.getElementById(i + "_i")
        }
        items.push(x)
        items_i.push(y)
    }

    const options = {
        defaultPosition: 0,
        interval: 6000,

        indicators: {
            activeClasses: 'bg-blue-500 dark:bg-gray-800',
            inactiveClasses: 'bg-blue-300 dark:bg-gray-800/50 hover:bg-green-400 dark:hover:bg-gray-800',
            items: items_i
        },
        onChange: (instance) => {
            // handle_heading_animation(350)
            will_change.state = !will_change.state
            if(if_initial)
            {
                current.active = instance._activeItem.position
                header.title = index_[current.active].title
                header.description = index_[current.active].description
                will_change.state = !will_change.state
                if_initial = false
                
            }
            else {
            setTimeout(() => {
                current.active = instance._activeItem.position
                header.title = index_[current.active].title
                header.description = index_[current.active].description
                will_change.state = !will_change.state
            }, 455)
        }


        }
    }


    let carousel = new Carousel(items, options)

    // const $prevButton = document.getElementById('data-carousel-prev')
    // const $nextButton = document.getElementById('data-carousel-next')

    // $prevButton.addEventListener('click', () => {
    //     carousel.prev()

    // })
    // $nextButton.addEventListener('click', () => {
    //     carousel.next()
    // })


    carousel.cycle()


}


</script>



<style scoped>
.slide-fade-enter-active {
    animation: fadeIn .45s;
}

@keyframes fadeIn {
    0% {
        opacity: .25;
    }

    100% {
        opacity: 1;
    }
}


.slide-fade-leave-active {
    animation: fadeOut .45s;
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.fade-bg {
    animation: fadeIn 3s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

</style>