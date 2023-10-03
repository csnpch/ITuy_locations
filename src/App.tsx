import { useEffect } from 'react'
import MenuCard from './components/MenuCard'

import Navbar from './components/Navbar'
import { menus } from './data/menu'


function App() {
  
  useEffect(() => {
    if (window.location.href === '/') {
      document.body.style.overflowX = 'auto'
    }
  }, [document, window.location.href])


  return (
    <>
      <div className={`w-screen h-screen-svh bg-base`}>

        <Navbar customTitle='📍 สถานที่แนะนำใกล้มอ' />

        <div className={`menu-card-container pt-[5rem]`}>
          {
            Object.values(menus).map((menu, index) => {
              return (
                <MenuCard
                  key={index}
                  title={menu.title}
                  emoji={menu.emoji}
                  short_description={menu.description}
                  backgroundImg={menu.banner_image}
                  path={menu.path}
                  backgroundPosition={menu.class}
                  className={`bg-black fadeIn opacity-0 delay-0${index + 4}`}
                />  
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
