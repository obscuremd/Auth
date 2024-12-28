import { Button, Card, Hero, Input, Text } from '../Exports/Exports'
import { cardData, hero, timelineData } from '../Exports/Constatants'
import Map from '../Ui/Map'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'

const DriversScreen = () => {

 

  return (
    <div className='flex flex-col md:flex-row gap-8 w-full'>
      {/* right part */}
      <div className='w-full md:w-[50%] flex flex-col gap-8'>
        
        <div className='flex flex-col gap-1'>
          <Text text='Search for Driver' fontSize='caption'/>
          <Input color='primary' outside_icon={false} stretch InputFunction={(e)=>(console.log(e.target.value))}/>
        </div>
        
        <div className='flex flex-col gap-1'>
          <Text text='Search for Driver' fontSize='caption'/>
          <Hero image={hero} size='large' primary_text='Good Day Daniel' secondary_text='have a nice day'/>
        </div>
        
        <div className='w-full flex gap-4 overflow-x-scroll py-1 px-1'>
          {cardData.map((item)=>(
            <Card 
              image={item.image} 
              outline='primary' 
              avatar 
              avatar_image={item.avatar_image} 
              avatar_primary_text={item.avatar_primary_text} 
              avatar_secondary_text={item.avatar_secondary_text}
              button
              button_text='2023 Acura MDX'/>
          ))}
        </div>
        
          <Map destination={{lat:6.5244,lng:3.3792}} origin={{lat: 6.4654,lng:3.4064}}/>
      
      
      </div>
      
      {/* left part */}
      <div className='w-full md:w-[50%] gap flex flex-col gap-8'>
        
        <div className='flex flex-col gap-2'>
          <Button color='primary' hover='false' text='Drivers' size='lg' rounded='medium' position='center' stretch  />
          <Card 
              image={cardData[0].image} 
              outline='primary' 
              avatar 
              avatar_image={cardData[0].avatar_image} 
              avatar_primary_text={cardData[0].avatar_primary_text} 
              avatar_secondary_text={cardData[0].avatar_secondary_text}
              secondary_text={cardData[0].secondary_text}
              button
              button_text='2023 Acura MDX'
              stretch
              border
              hover={false}
              />
          <div className='flex gap-2'>
            <Card outline='white' primary_text='Total time' secondary_text='20h: 70mins' stretch border hover={false} />
            <Card outline='white' primary_text='Price' secondary_text='$79.99' stretch border hover={false} />
            <Card outline='white' primary_text='Status' secondary_text='Driving' stretch border hover={false} />
            <Card outline='white' primary_text='Arrival Time' secondary_text='7pm - 8pm' stretch border hover={false} />
          </div>
        </div>
        
        <div className='flex flex-col gap-4'>
          <Button color='primary' hover='false' text='Activity' size='lg' rounded='medium' position='center' stretch  />
          <div className='flex items-center gap-2'>
            <Button color='primary' icon_left={<NavArrowLeft/>} outline text='Dec' size='xs' rounded='medium' position='center' />
            <Button color='primary' text='January' size='sm' rounded='medium' position='center' />
            <Button color='primary' icon_right={<NavArrowRight/>} outline text='Feb' size='xs' rounded='medium' position='center' />
          </div>
          <div className='flex flex-col gap-2 h-[50vh] overflow-y-scroll'>
            {timelineData.map((item)=>(
              <div className='flex gap-2 items-center'>
                <Text no_wrap text={item.time}/>
                <Card outline='white' primary_text={item.primary_text} secondary_text={item.secondary_text} stretch border hover={false} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DriversScreen