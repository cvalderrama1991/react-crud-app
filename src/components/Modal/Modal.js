import FormControl from "../FormControl/FormControl"
import { Form, CloseBtn, ModalContainer, SubmitBtn } from "./Modal.styled"

const Modal = ({isOpen, onClose, onChange, formData, onSubmit}) => {
  if (!isOpen) return

  return (
    <>
    <ModalContainer isOpen={isOpen}>
      <CloseBtn onClick={() => onClose()}>Close</CloseBtn>
      <Form onSubmit={onSubmit}>
        <FormControl label="First Name" id="first-name" type="text" name="firstName" value={formData.firstName} onChange={onChange}/>
        <FormControl label="Last Name" id="last-name" type="text" name="lastName" value={formData.lastName} onChange={onChange}/>
        <FormControl label="Age" id="age" type="number" name="age" value={formData.age} onChange={onChange}/>
        <SubmitBtn>Submit</SubmitBtn>
      </Form>
    </ModalContainer>
    </>
  )
}
export default Modal