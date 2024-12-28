import { MapPin, User } from 'iconoir-react'
import { Avatar, Text, Button, Hero, Card } from '../Exports/Exports'


const ComponentsUsage = () => {
  return (
    <div>
        
        <Text text='pp unta cacca' />
        <Text text='ubt cancan' fontWeight={'semibold'} fontSize='h5'  color='text-primary-500'/>
        <Text text='ubt cancans' color='text-error-400'/>
        <Button size='xs' text='button' outline color='danger' rounded='medium' icon_right={<User/>}/>
        <Button size='lg' stretch text='button' color='primary' outline icon_left={<User/>} position='end'/>
        <Avatar size='md' primary_text='unt caca' vertical secondary_text='pp' image='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'/>
        <Avatar size='sm' primary_text='unt caca' active vertical secondary_text='pp' image='https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'/>
        <div className='w-[50vw]'>
            <Hero size='large' image='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' primary_text='PlaceHolder Text' secondary_text='Lorem ipsum dolor sit amet consectetur. Enim bibendum augue integer diam facilisis. Read More'/>
        </div>
        <Card
            border
            outline='primary' 
            avatar 
            avatar_image='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' 
            avatar_secondary_text='gwen Doe'
            image='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
            primary_text='Warri City Stadium'
            secondary_text='3.4 Km Away'
            button
            left_button={<MapPin/>}
            button_text='Bendel Estate Warri, Delta State'
            />
        <div className='w-[20vw]'>

            <Card
                border
                outline='primary' 
                stretch
                between
                avatar 
                avatar_image='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' 
                avatar_primary_text='bai hamar'
                avatar_secondary_text='Rating:  3.5 ⭐'
                primary_text='Warri City Stadium'
                secondary_text='Lorem ipsum dolor sit amet consectetur. Ac et hendrerit placerat massa laoreet. Interdum trist Lorem ipsum dolor sit amet consectetur. Ac et hendrerit placerat massa laoreet. Interdum tristLorem ipsum dolor sit amet consectetur. Ac et hendrerit placerat massa laoreet. Interdum trist'
                left_button={<MapPin/>}
                button_text='Bendel Estate Warri, Delta State'
                />
        </div>
        <Card
            border
            outline='white' 
            vertical
            avatar 
            avatar_image='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' 
            avatar_secondary_text='gwen Doe'
            image='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
            primary_text='Warri City Stadium'
            secondary_text='3.4 Km Away'
            button
            left_button={<MapPin/>}
            button_text='Bendel Estate Warri, Delta State'
            />
        
    </div>
  )
}

export default ComponentsUsage