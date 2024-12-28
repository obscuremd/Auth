import {motion} from 'framer-motion'
import React from 'react'
import { Text } from '../Exports/Exports'

interface ButtonProps{
  stretch?: boolean
  position?: 'start' | 'end' | 'center' | 'between'
  size: 'lg' | 'md' | 'sm' | 'xs' | 'sm_icon',
  color: 'primary' | 'secondary' | 'default' | 'text' | 'warning' | 'danger',
  text?: string,
  rounded?: 'none' | 'medium' | 'full'
  outline?: boolean
  icon_right?: React.ReactNode
  icon_left?: React.ReactNode
  onclick?: ()=> void,
  gap?: string
  hover?: 'true' | 'false'
}

const ButtonUI:React.FC<ButtonProps> = ({size = 'lg', text, outline, color = 'primary', rounded = 'none', icon_right, icon_left, onclick, stretch, position = 'center', gap, hover = 'true'}) => {

  const getPadding = (padding: string) =>{
    switch(padding){
      case 'lg': return "10px 20px";
      case 'md': return "10px 20px";
      case 'sm': return "5px 10px";
      case 'xs': return "5px 10px";
      case 'sm_icon': return "5px 4px";
    }
  }

  const getFontSize = (size: string) =>{
    switch(size){
      case 'lg': return "h5";
      case 'md': return "t1";
      case 'sm': return "t2";
      case 'xs': return "body";
    }
  }
  
  const getIconSize = (size: string) =>{
    switch(size){
      case 'lg': return "text-[31px]";
      case 'md': return "text-[25px]";
      case 'sm': return "text-[20px]";
      case 'xs': return "text-[13px]";
      case 'sm_icon': return "text-[13px]";
    }
  }

  const getColor = (color: string) =>{
    switch(color){
      case 'primary' : return (outline ? "border-primary-500 text-primary-500" : "bg-primary-500 border-transparent" )
      case 'secondary' : return (outline ? "border-secondary-500 text-secondary-500" : "bg-secondary-500 border-transparent" )
      case 'default' : return (outline ? "border-secondary-500 text-grayscale-500" : "bg-grayscale-500 text-secondary-500 border-transparent" )
      case 'text' : return (outline ? "border-grayscale-500 text-grayscale-500" : "bg-transparent border-transparent" )
      case 'danger' : return (outline ? "border-error-500 text-error-500" : "bg-error-500 border-transparent")
      case 'warning' : return (outline ? "border-warning-500 text-warning-500" : "bg-warning-500 border-transparent" )
    }
  }

  const round = (borderRadius: string)=>{
    switch(borderRadius){
      case 'none' : return 'rounded-none'
      case 'medium' : return 'rounded-xl'
      case 'full' : return 'rounded-full'
    }
  }

  const justify = (position: string) => {
    switch(position){
      case 'start' : return 'justify-start'
      case 'end' : return 'justify-end'
      case 'center' : return 'justify-center'
      case 'between' : return 'justify-between'
    }
  }

  return (
    <motion.button
      whileHover={hover === 'true' ?{
        scale:1.05,
        opacity:0.7
      } : {}}
      onClick={onclick}
      style={{
        padding: getPadding(size)
      }}
      className=
          {` border-[1px]  h-fit  flex items-center 
            ${gap ? gap :'gap-[4px]'} 
            ${stretch ?'w-full':'w-fit'} 
            ${round(rounded)} 
            ${justify(position)}
            ${getColor(color)}`}>
        <div className={`${getIconSize(size)} `}>{icon_left}</div>
        {text && <Text text={text} fontSize={getFontSize(size)}/>}
        <div className={`${getIconSize(size)} `}>{icon_right}</div>
       

    </motion.button>
  )
}

export default ButtonUI