import { Button, Card, Input, Text } from '../Exports/Exports'
import { cardData } from '../Exports/Constatants'
import Map from '../Ui/Map'
import { NavArrowDown } from 'iconoir-react'

const OrderScreen = () => {

 

  return (
    <div className='flex flex-col md:flex-row gap-8 w-full'>
      {/* right part */}
      <div className='w-full md:w-[50%] flex flex-col gap-8'>
        
        <div className='flex flex-col gap-1'>
          <Text text='Search for Driver' fontSize='caption'/>
          <Input color='primary' outside_icon={false} stretch InputFunction={(e)=>(console.log(e.target.value))}/>
        </div>
        
        <div className='flex gap-4'>

          <div className='flex flex-col gap-1'>
            <Text text='Acivity' fontSize='caption'/>
            <Button rounded='full' color='text' outline size='xs' text='Online' icon_right={<NavArrowDown/>}/>
          </div>
          <div className='flex flex-col gap-1'>
            <Text text='Acivity' fontSize='caption'/>
            <Button rounded='full' color='text' outline size='xs' text='Online' icon_right={<NavArrowDown/>}/>
          </div>
          <div className='flex flex-col gap-1'>
            <Text text='Acivity' fontSize='caption'/>
            <Button rounded='full' color='text' outline size='xs' text='Online' icon_right={<NavArrowDown/>}/>
          </div>
        </div>
        
        <div className='flex flex-col gap-1'>
          <Text text='On-Going Trips' fontSize='t2' fontWeight='bold'/>
          <div className='w-full flex overflow-y-scroll md:flex-wrap gap-4 py-1 px-1'>
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
        </div>
        
      </div>
      
      {/* left part */}
      <div className='w-full md:w-[50%] flex flex-col gap-2'>
        
        <Button color='primary' hover='false' text='Activity' size='lg' rounded='medium' position='center' stretch  />
        <Map destination={{lat:6.5244,lng:3.3792}} origin={{lat: 6.4654,lng:3.4064}}/>

        <div className='flex flex-col gap-2'>
          <Card 
              image={cardData[0].image} 
              vertical
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
        
      </div>
    </div>
  )
}

export default OrderScreen