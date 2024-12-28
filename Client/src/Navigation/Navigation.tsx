import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { isMobile, menuItems } from '../Exports/Constatants'
import { Button, Drivers, Menu, Order, Overview, Text, UserReviews } from '../Exports/Exports'
import React from 'react';
import { Xmark } from 'iconoir-react';
import { useDBUser } from '../Providers/UserProvider';

interface ContentProps {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const {userData} = useDBUser()
  console.log(userData)

  return (
    <Suspense fallback={ 
        <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
          {/* <img src={Logo} alt="" className='md:w-[25%] w-[40%]' /> */}
          loading
        </div> }>
        
        <div className='w-full flex gap-8 relative'>
          <BrowserRouter>
                {!isMobile && 
                  <div className='flex flex-col gap-10'>
                    <Menu menuItems={menuItems}/>
                    <Text text={`Company Name: `} />
                  </div>
                }
                {isMobile && mobileMenu && 
                  <div className='absolute w-full h-screen flex flex-col gap-4 py-3 bg-background-500'>
                    <Button icon_left={<Xmark/>} onclick={()=>setMobileMenu(false)} rounded='full' outline color='primary' size='sm_icon'/>
                    <Menu menuItems={menuItems} logo={false} />
                  </div>
                  }
                  
                <Content setMobileMenu={setMobileMenu}/>
          </BrowserRouter>
        </div>
    
    </Suspense>
  )
}

const Content: React.FC<ContentProps> = ({setMobileMenu}) => {
    const currentPath = useLocation().pathname
    const Path = menuItems.filter(item => item.link === currentPath)

    useEffect(() => {
      setMobileMenu(false)
    }, [currentPath, setMobileMenu])

    return (
        <div className='w-full flex flex-col gap-8'>
            <Button onclick={()=>setMobileMenu(true)} color='primary' hover='false' text={Path[0].name} icon_left={Path[0].icon} outline size='lg' rounded='medium' position='start' stretch gap='gap-[32px]' />
            <div className='h-screen overflow-y-scroll'>
              <Routes>
                  <Route path='/' element={<Overview />} />
                  <Route path='/drivers' element={<Drivers />} />
                  <Route path='/orders' element={<Order />} />
                  <Route path='/user-reviews' element={<UserReviews />} />
              </Routes>
            </div>
        </div>
    );
};



export default Navigation