import { FormControlStyled, Input } from "./FormControl.styled"

const FormControl = ({label, id, type, name, value, onChange}) => {
  return (
    <FormControlStyled>
      <label htmlFor={id}>{label}</label>
      <Input type={type} id={id} name={name} value={value} onChange={onChange} required/>
    </FormControlStyled>
  )
}
export default FormControl