import React, { useState } from 'react'
import { Button } from '../Exports/Exports'
import { Search } from 'iconoir-react'
import { motion } from 'framer-motion';

interface InputProps {
    stretch?: boolean
    color?: 'primary' | 'white'
    outside_icon?: React.ReactNode
    inside_icon?: React.ReactNode
    InputFunction?: (value: React.ChangeEvent<HTMLInputElement>)=>void
    placeholder?: string
    type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url" | "date"
}

const InputUi: React.FC<InputProps> = ({stretch, color='primary', outside_icon=(<Search/>), inside_icon=(<Search/>), InputFunction, placeholder='placeholder', type = 'input'}) => {

    const [active, setActive] = useState(false)


  return (
    <motion.div className={`flex items-center justify-center gap-2 ${stretch ? 'w-full' :'w-fit'}`}>
        <div className={`flex items-center gap-2 p-[5px] border-[1px] rounded-[10px] ${stretch ? 'w-full' :'w-fit'} ${active ?(color === 'primary' ? 'border-primary-500' : 'border-grayscale-500'):'border-secondary-500'}`}>
            {inside_icon && <Button color={active ? (color === 'primary' ? 'primary' : 'text') : 'default'} size='sm_icon' rounded='full' outline icon_left={inside_icon}/>}
            <input 
                type={type}
                placeholder={placeholder}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)} 
                onChange={InputFunction}
                className={`bg-transparent outline-none px-2 ${stretch ? 'w-full' :'w-fit'}`}/>
        </div>
        {outside_icon && <Button color='primary' size='sm_icon' rounded='full' outline icon_left={outside_icon}/>}
    </motion.div>
  )
}

export default InputUi