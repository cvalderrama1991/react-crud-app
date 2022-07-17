import { List } from "./CustomerList.styled"

const CustomerList = ({ customers, removeCustomer, handleEdit }) => {
  return (
    <List>
      {customers.map((customer) => {
        return (
          <li key={customer.id}>
            <p>{customer.firstName}</p>
            <p>{customer.lastName}</p>
            <p>{customer.age}</p>
            <div>
              <button onClick={() => handleEdit(customer)}>Update</button>
              <button onClick={() => removeCustomer(customer.id)}>Delete</button>
            </div>
          </li>
        )
      })}
    </List>
  )
}
export default CustomerList