import { Input } from "../Exports/Exports"

const Form = ()=>{
    return(
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
            <Input placeholder="username" outside_icon={false}/>
            <Input placeholder="full name" outside_icon={false}/>
            <Input placeholder="username" outside_icon={false} />
            <Input placeholder="phone number" outside_icon={false} type="number"/>
            <Input placeholder="Address" outside_icon={false}/>
            <Input placeholder="Admin" outside_icon={false}/>
        </div>
      </div>
    )
  }

export default Form