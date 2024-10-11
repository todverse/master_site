<template>
  <div :class="store.state.isOpenModal? 'h-screen overflow-hidden': 'h-screen'">
    <modal v-if="store.state.isOpenModal"></modal>
    <div :class="store.state.isOpenModal? 'flex flex-col h-screen': 'flex flex-col h-screen'">
      <navbar :menu_items=menu_data phone_number=" +7 (8452) 77-93-77" :company_name=company_name email="dummy@dummy" />


      <div class='flex-grow bg-white-300 dark:bg-gray-500'>

        <home v-if="current_option.state === 'home'" :data=home_data />

        <services v-if="current_option.state === 'services'" :data=development_data />



        <pricing v-if="current_option.state === 'pricing'" :data=pricing_data :activate=pricing_menu />


        <about v-if="current_option.state === 'about'" class="flex grow justify-center bg-white  w-full"/>
          
        











      </div>



      <foot :company_name=company_name fb_link="https://www.facebook.com/" git_link="https://github.com/MusaChowdhury/IT-Company-Website-Vue3" />

    </div>
  </div>
</template>









<script setup>

import { reactive } from 'vue'
import navbar from "./views/navbar.vue"
import foot from "./views/foot.vue"
import home from "./views/home.vue"
import services from './views/services.vue'
import pricing from "./views/pricing.vue"
import about from "./views/about.vue"

import Modal from './components/modal.vue'

import { useStore } from 'vuex'
const store = useStore()

const company_name = 'ООО "МАСТЕР-164"'

let current_option = reactive({ state: 'home' })
let pricing_menu = NaN


let home_data = {
  "desktop": {
    title: 'Обучение вождению на категорию  "В"',
    description: "Обучение может проходить по очной и заочной программе.",
  },
  "web_back": {
    title: "Нас выбирают",
    description: "БОЛЕЕ 3000 УЧЕНИКОВ ЕЖЕГОДНО ВЫБИРАЮТ АВТОШКОЛУ «МАСТЕР»"
  },
  "mobile": {
    title: "Комфортные условия",
    description: "Новое оборудование, новые автомобили, все ЛУЧШЕЕ ДЛЯ НАШИХ УЧЕНИКОВ."
  },

}






let development_data = {

  heading: {
    title: 'Title',
    description: 'Description',

  },
  features: {
    seo: {
      title: "SEO (Search Engine Optimization)",
      description: "We offer SEO services to improve website visibility  & ranking. Our team uses latest techniques to drive organic traffic. Services include keyword research, on-page optimization, link building, content optimization & local SEO. Goal is to deliver measurable results & increase clients' online presence."
    },
    repair: {
      title: "Maintenance / Upgrade",
      description: "We specialize in maintaining, fixing, upgrading, and scaling software for businesses. Our team of experts can troubleshoot and resolve software issues quickly. We offer maintenance, repair, upgrading and scaling services to ensure software is always running smoothly and up to date."
    },
    web: {
      title: "Web Development",
      description: "We offer web development using Vue3, React, Django, PHP, and Laravel to create efficient websites. Our proficiency in multiple frameworks enables us to fulfill various client needs with tailored solutions."
    },
    pbx: {
      title: "IP Telephony",
      description: "We provide PBX (Private Branch Exchange) setup and configuration services for businesses of all sizes. Our  experts has  knowledge and experience in configuring and setting up PBX systems to meet the specific needs of our clients. We help businesses improve their communication efficiency and reduce costs."
    }
    ,
    desktop:
    {
      title: "Desktop Application",
      description: "We specialize in developing robust desktop software using a variety of technologies such as JavaFX, Dot Net, Qt, and more. Whether your business is in finance, healthcare, or logistics, we are well-suited to provide you with the software solutions you need to run on desktop devices."
    },
    phone:
    {
      title: "Mobile App (iOS / Android)",
      description: "We specializes in the development of high-performance and efficient mobile applications for both Android and iOS platforms. Utilizing web architecture and scalable technologies, our team of highly skilled developers are able to design user-friendly applications that can accommodate a substantial user base. "
    }

  }
}

let menu_data = {
  "Главная": current_option_initiate,
  // "Услуги": current_option_initiate,
  "О нас": current_option_initiate,
  "Цены": {

    "Калькулятор": pricing_menu_initiate, // Name is very important, The name must match with other pricing menu options
    "Прайс-лист": pricing_menu_initiate

  },

}



let pricing_data = {

  "calculator": [
    {
      title: "Калькулятор" ,
      description: "Просчитайте стоимость обучения здесь",
      money: "30 390₽",
      features: [
        "Полный курс по теории", 
        "Полный курс практических занятий", 
        "Медицинские тренажеры", 
        "Запись на вождение в первую очередь", 
        "Свидетельство о профессии водителя", 
        "Получение налогового вычета на всю сумму  обучения", 
        'Брошюра "ПДД"', 
        'Пособие "Экзаменационные билеты"', 
        "Доступ к обучающему видео"]
    }
  ],

  "price" : [
    {
      title: "КОМФОРТ" ,
      description: "",
      money: "30 390₽",
      features: [
        "Полный курс по теории", 
        "Полный курс практических занятий", 
        "Медицинские тренажеры", 
        "Запись на вождение в первую очередь", 
        "Свидетельство о профессии водителя", 
        "Получение налогового вычета на всю сумму  обучения", 
        'Брошюра "ПДД"', 
        'Пособие "Экзаменационные билеты"', 
        "Доступ к обучающему видео"]
    },
    {
      title: "КОМФОРТ 2" ,
      description: "",
      money: "29 390₽",
      features: [
        "Полный курс по теории", 
        "Полный курс практических занятий", 
        "Медицинские тренажеры", 
        "Запись на вождение в первую очередь", 
        "Свидетельство о профессии водителя", 
        "Получение налогового вычета на всю сумму  обучения", 
        'НЕТ', 
        'НЕТ', 
        "Доступ к обучающему видео"]
    },
    {
      title: "СТАНДАРТ 1" ,
      description: "",
      money: "27 390₽",
      features: [
        "Полный курс по теории", 
        "Полный курс практических занятий", 
        "Медицинские тренажеры", 
        "Запись на вождение по графику", 
        "Свидетельство о профессии водителя", 
        "Получение налогового вычета на всю сумму  обучения", 
        'НЕТ', 
        'НЕТ', 
        "Доступ к обучающему видео"]
    },
    {
      title: "АВТОМАТ" ,
      description: "",
      money: "34 390₽",
      features: [
        "Полный курс по теории", 
        "Полный курс практических занятий на автомобиле с автоматической коробкой пердач", 
        "Медицинские тренажеры", 
        "Запись на вождение в первую очередь", 
        "Свидетельство о профессии водителя", 
        "Получение налогового вычета на всю сумму обучения",
        "Получение налогового вычета на всю сумму  обучения", 
        'Брошюра "ПДД"', 
        'Пособие "Экзаменационные билеты"', 
        "Доступ к обучающему видео"]
    }
  ]


}










function handel_menu_change(target) {
  current_option.state = 'none'
  setTimeout(() => current_option.state = target, 100)
}

function pricing_menu_initiate(selected) {
  if(selected == 'калькулятор') {
    selected = 'calculator'
  }
  if(selected == 'прайс-лист') {
    selected = 'price'
  }
  pricing_menu = selected
  handel_menu_change('pricing')
  // console.log(selected)
}

function current_option_initiate(current) {
  // handel_fade(current)
  if(current == 'главная') {
    current = 'home'
  }
  if(current == 'услуги') {
    current = 'services'
  }
  if(current == 'о нас') {
    current = 'about'
  }
  handel_menu_change(current)
  
  
}
/// Fro pre loading images


let price_background_image = new Image()
price_background_image.src = '/contact.webp' 




</script>































<style scoped>
.main {
  z-index: -1;
}

</style>