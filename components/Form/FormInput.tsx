import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
    name:string,
    type:string,
    label?:string,
    defaltValue?: string,
    placeholder?:string
}


const FormInput = (props:FormInputProps) => {
    const{name,type,label,placeholder,defaltValue} = props;
  return (
    <div className="mb-2">
            <Label htmlFor={name}>{label}</Label>
            <Input 
            name={name} 
            type={type}
            placeholder={placeholder} 
            defaultValue={defaltValue}
            />
          </div>
  )
}
export default FormInput