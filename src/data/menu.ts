import foodImg from './../assets/img/food.svg'
import serviceImg from './../assets/img/services.svg'
import repairImg from './../assets/img/repair.svg'
import cafeImg from './../assets/img/cafe.svg'
import travelImg from './../assets/img/travel.svg'


export const menus = {
    travel: {
        emoji: '🏕️🍃',
        title: 'สถานที่ท่องเที่ยว',
        description: '',
        banner_image: travelImg,
        class: '',
        path: '/travel'
    },
    cafe: {
        emoji: '☕️🧋',
        title: 'คาเฟ่',
        description: '',
        banner_image: cafeImg,
        class: '',
        path: '/cafe'
    },
    food: {
        emoji: '🍛🍜',
        title: 'ร้านอาหาร',
        description: 'ตามสั่ง, ก๋วยเตี๋ยว, อีสาน, อินเดย, กาแฟ, เบเกอรี่, ขนม',
        banner_image: foodImg,
        class: '',
        path: '/food'
    },
    services: {
        emoji: '💇🏻‍♂️💅🏻',
        title: 'ร้านบริการ',
        description: 'ทำเล็บ, ทำผม, สปา, นวด, สักคิ้ว, สักคิ้ว, สัก, ล้างรถ',
        banner_image: serviceImg,
        class: '',
        path: '/services'
    },
    repair: {
        emoji: '⚙️🛠️',
        title: 'ร้านซ่อม',
        description: 'ซ่อม > รถจักรยานยนต์, ซ่อมเครื่องใช้ไฟฟ้า, ซ่อมคอม, อื่น ๆ',
        banner_image: repairImg,
        class: 'object-bottom',
        path: '/repair'
    },
}