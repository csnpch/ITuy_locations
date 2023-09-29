import foodImg from './../assets/img/thai_food.jpg'
import serviceImg from './../assets/img/services.png'
import repairImg from './../assets/img/repair.png'


export const menus = {
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