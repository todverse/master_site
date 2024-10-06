<template>
    <div class="flex h-full w-full flex-col">
    <div v-if="!no_child.state" class="mt-5 w-full">
        <h1
            class="text-center mb-4 text-blue-700 text-lg font-extrabold leading-none tracking-tight sm:text-4xl lg:text-5xl dark:text-white">
            СТОИМОСТЬ ОБУЧЕНИЯ
        </h1>
        <p class="text-center text-base text-blue-700 dark:text-gray-200">
            Подробности Вы можете узнать по телефону: 8-927-057-39-39
        </p>
    </div>
    <div class="flex flex-col h-full w-full justify-center items-start flex-nowrap overflow-hidden">



        <div v-if="!no_child.state"
            class="flex p-10 gap-4 flex-wrap lg:flex-nowrap">
            <TransitionGroup :css="false" appear @enter="enter" @after-enter="end">
                <div v-for="i in data[target]" :key='i' :id="(data[target]).indexOf(i)"
                    class="flex flex-col lg:h-full w-full p-0 gradient-border flex-nowrap">
                    <div
                        class="flex flex-col grow flex-nowrap w-full  h-full text-center text-gray-900 bg-white p-4 shadow border border-gray-100  dark:border-gray-600  dark:bg-gray-800 dark:text-white border_round">
                        <h3 class="mb-4 text-2xl font-semibold">{{ i.title }}</h3>
                        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{{ i.description }}</p>
                        <div class="flex justify-center items-baseline my-8">
                            <span class="mr-2 text-5xl font-extrabold">{{ i.money }}</span>
                        </div>
                        <!-- List -->
                        <ul role="list" class=" space-y-2 text-left">
                            <li class="flex items-center space-x-3" v-for="f in i.features">
                                <!-- Icon -->
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>{{ f }}</span>
                            </li>


                        </ul>

                    </div>
                </div>
            </TransitionGroup>

        </div>

        <div v-if="no_child.state"
            class="flex  justify-items-start justify-start  w-full h-full md:p-5 bg-cover bg-right-bottom fade-bg"
            style="background-image: url('/contact.webp');">
            <div class="flex flex-wrap lg:flex-nowrap w-full  bg-black p-4  bg-opacity-75 sm:bg-gray-900 rounded-lg justify-center shrink sm:bg-opacity-50">
                <div class="w-full lg:w-1/2">
                    <h1 class="text-left mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-200 ">
                        {{ data[target][0].title }}
                    </h1>
                    <p class="text-left mb-6 text-xl font-normal pl-3  text-gray-100 whitespace-pre-line">
                        {{ data[target][0].description }}
                    </p>
                    
                    <h2 class="text-left mb-4 text-3xl font-extrabold leading-none tracking-tight text-blue-200 ">Категория</h2>
                    <div class="flex flex-wrap md:flex-nowrap">
                        <div v-for="(cat, index) in categories" :class="`w-10 h-10 m-2 leading-10 ${selected_cat == index? 'bg-red-600 text-white': 'bg-white text-black'} text-center rounded-lg hover:cursor-pointer hover:bg-red-500`" @click="select_cat(index)">
                            <h4 class="font-bold">{{ cat.title }}</h4>
                        </div>
                    </div>
                    <p class="text-gray-100">
                        {{ categories[selected_cat].desc }}
                    </p>

                    <h2 class="text-left mb-4 text-3xl font-extrabold leading-none tracking-tight text-blue-200 ">Формат теории</h2>
                    <div class="flex flex-wrap md:flex-nowrap">
                        <div v-for="(cat, index) in theories" :class="`w-36 h-10 m-2 leading-10 ${selected_teo == index? 'bg-red-600 text-white': 'bg-white text-black'} text-center rounded-lg hover:cursor-pointer hover:bg-red-500`" @click="select_teo(index)">
                            <h4 class="font-bold">{{ cat.title }}</h4>
                        </div>
                    </div>

                    <h2 class="text-left mb-4 text-3xl font-extrabold leading-none tracking-tight text-blue-200 ">Коробка передач</h2>
                    <div class="flex flex-wrap md:flex-nowrap">
                        <div v-for="(cat, index) in pere" :class="`w-36 h-10 m-2 leading-10 ${selected_pere == index? 'bg-red-600 text-white': 'bg-white text-black'} text-center rounded-lg hover:cursor-pointer hover:bg-red-500`" @click="select_pere(index)">
                            <h4 class="font-bold">{{ cat.title }}</h4>
                        </div>
                    </div>

                    <h2 class="text-left mb-4 text-3xl font-extrabold leading-none tracking-tight text-blue-200 ">Количество часов практики</h2>
                    <div class="custom-slider">
                        <input class="w-1/3" type="range" min="2" max="60" step="1" v-model="hours_value">
                        <br>
                        <div class="w-1/3 flex">
                            <p class="text-white text-xl font-extrabold w-1/2">2</p>
                            <p class="text-white text-xl font-extrabold w-1/2 text-end">60</p>
                        </div>
                        <h4 class="text-gray-100 text-xl font-extrabold"> Выбрано <span class="text-red-600">{{ hours_value }}</span></h4>
                    </div>
                </div>



                <div class="w-full lg:w-1/2">
                    <h1 class="text-left mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-200 ">
                        Итоговая стоимость
                    </h1>
                    <p class="text-left mb-6 text-5xl font-extrabold pl-3  text-red-800 whitespace-pre-line">
                        {{ Math.floor(base * categories[selected_cat].koeff + base * theories[selected_teo].koeff + base * pere[selected_pere].koeff + hours_value * 1000) }}₽
                    </p>
                    <p class="text-left mb-6 text-xl font-normal pl-3  text-gray-100 whitespace-pre-line">
                        Возможна рассрочка. Платежи ~ {{ Math.floor((base * categories[selected_cat].koeff + base * theories[selected_teo].koeff + base * pere[selected_pere].koeff + hours_value * 1000)/12) }}₽
                    </p>
                    <p class="text-left mb-6 text-xl font-normal pl-3  text-gray-100 whitespace-pre-line">
                        В стоимость курса включено:<br>

                        Теоретический курс.<br>
                        Сдача внутреннего экзамена бесплатно.<br>
                        Проведение внутренних экзаменов.<br>
                        Свидетельство об окончании автошколы.<br>
                        Подача мотоцикла на экзамены в ГИБДД.<br>
                        Пакет документов для сдачи в ГИБДД.<br>
                        Сопровождение до получения прав.<br>
                        Персональный менеджер.<br>
                        ГСМ (бензин) бесплатно.<br>
                    </p>
                    <button class="w-1/3 h-15 md:h-10 bg-white rounded-lg font-extrabold hover:bg-gray-900 hover:text-white">Оставить заявку</button>
                </div>
            </div>
        </div>





    </div>
</div>



</template>




<script setup>

import gsap from 'gsap'
import { reactive, ref } from 'vue';

let animation_delay
let reverse_animation_delay

let no_child = reactive({ state: false })
let props = defineProps(['data', 'activate',])

let data = props.data



let target = props.activate

if (data[target].length == 1) {
    no_child.state = true

} else {
    animation_delay = calculate_animation_delay(.3)
    reverse_animation_delay = calculate_reverse_animation_delay(animation_delay)
}


let base = ref(5000)

let select_cat = (i) => {
    selected_cat.value = i
}
let selected_cat = ref(0)
let categories = ref([
    {
        title: 'A',
        desc: 'Категория A - мотоциклы',
        koeff: 0.1,
    },
    {
        title: 'A1',
        desc: 'Категория A1 - легкие мотоциклы',
        koeff: 0.1,
    },
    {
        title: 'A1',
        desc: 'Категория A - снегоход и квадроцикл',
        koeff: 0.1,
    },
    {
        title: 'B',
        desc: 'Категория B - легковые авто',
        koeff: 1.8,
    },
    {
        title: 'B1',
        desc: 'Категория В1 - квадроциклы',
        koeff: 2,
    },
    {
        title: 'BE',
        desc: 'Категория BE - с прицепом',
        koeff: 2.2,
    },
    {
        title: 'C',
        desc: 'Категория C - грузовые авто',
        koeff: 2.4,
    },
    {
        title: 'CE',
        desc: 'Категория СЕ - с прицепом',
        koeff: 2.4,
    },
    {
        title: 'D',
        desc: 'Категория D - автобусы',
        koeff: 2.5,
    },
    {
        title: 'DE',
        desc: 'Категория DE - сочлененные автобусы',
        koeff: 2.5,
    }
])


let select_teo = (i) => {
    selected_teo.value = i
}
let selected_teo = ref(0)
let theories = ref([
    {
        title: 'В классе',
        koeff: 1.9,
    },
    {
        title: 'Online',
        koeff: 1.5,
    },
    {
        title: 'Без теории',
        koeff: 0.5,
    },
])

let select_pere = (i) => {
    selected_pere.value = i
}
let selected_pere = ref(0)
let pere = ref([
    {
        title: 'Механическая',
        koeff: 1.5,
    },
    {
        title: 'Автоматическая',
        koeff: 2,
    },
])

let hours_value = ref(4)








const enter = (el, done) => {

    if (animation_delay[el.id] == "~") // differentiate the middle element
    {
        fade(el, animation_delay[parseInt(el.id) + 1] + 1.5, done)
    }
    else if (animation_delay[el.id] < 0) {
        transition(el, Math.abs(animation_delay[el.id]), "left", done)
    }
    else {
        transition(el, Math.abs(animation_delay[el.id]), "right", done)
    }




}



function end(el) {

    let delay = reverse_animation_delay[el.id] == '~' ? .1 : Math.abs(reverse_animation_delay[el.id]) + .7
    if (data[target].length % 2 == 0) {
        delay -= 1
    }

    gsap.to(el, { "--border-width": ".32em", duration: 0.6, delay: delay });
}


function fade(element, delay, done) {

    gsap.fromTo(element, { opacity: 0 }, { opacity: .999, delay: delay, duration: .5, onComplete: done, lazy: false })
}

function transition(element, delay, direction, done) {
    let direction_t = 1
    if (direction === "left") {
        direction_t = -1
    }
    gsap.fromTo(element, { x: direction_t * window.innerWidth }, { x: 0, delay: delay, duration: 1.5, onComplete: done })
}






function calculate_animation_delay(delay_t) {
    let animation_delay = []
    for (let i = 0; i < Math.floor(data[target].length / 2); ++i) {
        animation_delay.push(((Math.floor(data[target].length) / 2) - i) * -1 * delay_t)
    }

    if (data[target].length % 2 != 0) {
        animation_delay.push("~")
    }
    for (let i = (Math.floor(data[target].length / 2)) - 1; i >= 0; --i) {
        animation_delay.push((animation_delay[i]) * -1)
    }
    return animation_delay
}
function calculate_reverse_animation_delay(animation_delay) {

    let part_1 = []
    let part_2 = []
    let part_1_done = false
    for (let i in animation_delay) {
        if (!part_1_done) {
            if (animation_delay[i] == '~') {

                part_1.reverse()
                part_1.push('~')
                part_1_done = true
            }
            else part_1.push(animation_delay[i])

        }
        else {
            part_2.push(animation_delay[i])
        }


    }
    return part_1.concat(part_2.reverse())
}




</script>




<style scoped >
.gradient-border {
    /* --border-width: 0em; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-width);
}


.gradient-border::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(60deg,
            hsl(224, 85%, 66%),
            hsl(269, 85%, 66%),
            hsl(314, 85%, 66%),
            hsl(359, 85%, 66%),
            hsl(296, 32%, 35%),
            hsl(234, 80%, 75%),
            hsl(341, 37%, 55%),
            hsl(179, 85%, 66%));
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 1.4s alternate infinite;
}

.border_round {
    border-radius: var(--border-width);
}


@keyframes moveGradient {
    50% {
        background-position: 100% 50%;
    }
}



.fade-bg {
    animation: fadeIn 1s;

}


div.scroll {
    margin: 4px, 4px;
    /* padding: 4px; */
    /* background-color: #08c708; */

    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}



@keyframes fadeIn {
    0% {
        scale: 2;
        opacity: 0;

        /* opacity: 0; */
    }

    70% {
        scale: 1;
        opacity: .4;
    }

    100% {
        opacity: 1;
        /* opacity: 1; */
    }
}



.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
  position: relative;
  appearance: none;
  /* pointer-events: none; */
  border-radius: 999px;
  z-index: 0;
}

/* ::before element to replace the slider track */
.custom-slider input[type="range"]::before {
  content: "";
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: #860000;
  /* z-index: -1; */
  pointer-events: none;
  border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: #5a0000;
  height: var(--trackHeight);
  border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider input[type="range"]::-moz-range-track {
  appearance: none;
  background: #5a0000;
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  /* margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2); */
  background: #ff3838;
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}
</style>