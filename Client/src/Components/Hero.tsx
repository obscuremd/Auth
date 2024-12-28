import React from 'react'
import { Avatar, Button, Text } from '../Exports/Exports'

interface HeroProps {
    primary_text?: string
    secondary_text?: string
    size?: 'small' | 'medium' | 'large'
    image: string
    avatar_primary_text?: string
    avatar_secondary_text?: string
    avatar_image?: string
}

const HeroComponent:React.FC<HeroProps> = ({primary_text, secondary_text, size = 'small', image, avatar_primary_text,  avatar_secondary_text, avatar_image}) => {

    const getImageSize = (imageSize:string) =>{
        switch(imageSize){
          case 'large': return ' h-[300px]'
          case 'medium': return ' h-[225px]'
          case 'small': return ' h-[150px]'
        }
    }

  return (
    <div className='w-full relative'>
          <div className=''>
            <img 
                className={`w-full rounded-2xl ${getImageSize(size)}`} 
                src={image} 
                style={{ objectFit:'cover' }}
                />
                <div 
                  className={`w-full rounded-2xl ${getImageSize(size)} absolute top-0`}
                  style={{ background: 'linear-gradient(180deg, rgba(25, 28, 45, 0.00) 0%, #191C2D 100%)', }}
                  />
          </div>
            <div className='flex flex-col gap-2 mt-[-64px] px-2 absolute'>
                {avatar_image && <Avatar size='lg' primary_text={avatar_primary_text} vertical secondary_text={ avatar_secondary_text} image={avatar_image}/>}
                {primary_text && <Text fontSize='t2' fontWeight='semibold' text={primary_text}/>}
                {secondary_text && <Text fontSize='caption' fontWeight='semibold' text={secondary_text}/>}
                <Button text='Check it out' color='primary' size='sm' rounded='full'/>
            </div>
    </div>
  )
}

export default HeroComponent