import { HeaderBar, TypeList } from "./Header.styled"

const Header = ({setIsOpen}) => {
  return (
    <HeaderBar>
      <div>
        <h1>Customer Management Data</h1>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
      <TypeList>
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
        <li>Action</li>
      </TypeList>
    </HeaderBar>
  )
}
export default Header