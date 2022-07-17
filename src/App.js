import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import Modal from "./components/Modal/Modal"
import CustomerList from "./components/CustomerList/CustomerList"
import GlobalStyles, { Container } from "./Global/Global.styled"

const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [customers, setCustomers] = useState([])
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", age: ""
  })
  const [customerEdit, setCustomerEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    const customersJSON = localStorage.getItem("customers")
    const customersRetrieved = JSON.parse(customersJSON)
    if (customersRetrieved && customersRetrieved.length > 0) {
      setCustomers(customersRetrieved)
    }
  }, [])

  useEffect(() => {
    const customersJSON = JSON.stringify(customers)
    localStorage.setItem("customers", customersJSON)
  }, [customers])

  useEffect(() => {
    if (customerEdit.edit === true) {
      setFormData(customerEdit.item)
    }
  }, [customerEdit])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => {
      return {
        ...prev, [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCustomer = {
      id: new Date().valueOf().toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age
    }
    if (customerEdit.edit === true) {
      handleUpdate(customerEdit.item.id, newCustomer)
    } else {
      setCustomers([...customers, newCustomer])
    }
    setFormData({firstName: "", lastName: "", age: ""})
    setIsOpen(false)
  }

  const removeCustomer = (id) => {
    const updatedCustomers = customers.filter((customer)  => {
      return customer.id !== id
    })
    setCustomers(updatedCustomers)
  }

  const handleUpdate = (id, updCustomer) => {
    setCustomers(customers.map((customer) => customer.id === id ? {...customer, ...updCustomer} : customer))
  }

  const handleEdit = (item) => {
    setCustomerEdit({
      item,
      edit: true
    })
    setIsOpen(true)
  }

  return (
    <>
    <GlobalStyles/>
    <Container>
      <Header setIsOpen={setIsOpen}/>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} formData={formData} onChange={handleInputChange} onSubmit={handleSubmit}/>
      <CustomerList customers={customers} removeCustomer={removeCustomer} handleEdit={handleEdit}/>
    </Container>
    </>
  )
}
export default App