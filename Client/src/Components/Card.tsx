import React from 'react'
import { Bookmark } from 'iconoir-react'
import { motion } from 'framer-motion';
import { Avatar, Button, Text } from '../Exports/Exports';

interface CardProps {

    hover?: boolean,
    vertical?: boolean
    outline: 'default' | 'primary' | 'white'
    border?: boolean
    fill?: boolean
    stretch?: boolean
    between?: boolean

    image?: string
    primary_text ?: string
    secondary_text ?: string
    
    avatar?: boolean
    avatar_image?: string
    avatar_primary_text?: string
    avatar_secondary_text?: string

    button?: boolean
    left_button?: React.ReactNode,
    right_button?: React.ReactNode
    button_text?: string

    bookmark_button?: boolean 
}

const CardComponent:React.FC<CardProps> = ({
    stretch,
    between,
    fill,
    border,
    outline,
    vertical,
    image, 
    avatar_image, 
    avatar_primary_text,
    avatar_secondary_text, 
    primary_text, 
    secondary_text, 
    avatar, 
    button,
    left_button,
    right_button,
    button_text='placeholder',
    bookmark_button ,
    hover = true
    }) => {

    const Hover = (outline: string) => {
        switch (outline) {
            case 'default' : return '#122421'
            case 'primary' : return '#4AC2B3'
            case 'white' : return '#FFF'
        }
    }
    
    const Border = (outline: string) => {
        switch (outline) {
            case 'default' : return 'border-secondary-700'
            case 'primary' : return 'border-primary-900'
            case 'white' : return 'border-grayscale-900'
        }
    }

  return (
    <motion.div
        whileHover={hover ?{
                scale:1.03,
                borderColor: Hover(outline)
            }:{}} 
        className={`
            flex p-[10px] border-[1px] rounded-lg
            ${between ? 'justify-between' : 'gap-[10px]'}
            ${fill &&'bg-secondary-700'} 
            ${border? Border(outline) :'border-transparent'} 
            ${vertical && 'flex-col'} 
            ${stretch ?'w-full':'w-fit flex-shrink-0'}`}>
        {image && <img src={image} alt="" style={{objectFit:'cover'}} className={`${vertical ? 'h-[100px] w-full' :'w-[100px]'} rounded-lg`} />}
        
        <div className='flex flex-col gap-2 w-fit'>
            {avatar && avatar_image && <Avatar vertical image={avatar_image} primary_text={avatar_primary_text} secondary_text={avatar_secondary_text} size='lg'/>}
            {primary_text && <Text fontSize='t2' fontWeight='semibold' text={primary_text}/>}
            {secondary_text && <Text fontSize='caption' fontWeight='semibold' text={secondary_text}/>}
            {button && <Button color='primary' outline size='xs' text={button_text} icon_left={left_button} icon_right={right_button} rounded='full'/>}
        </div>
        
        {bookmark_button && <Button color='primary' outline size='xs' icon_left={<Bookmark/>} rounded='full'/>}
        
    </motion.div>
  )
}

export default CardComponent