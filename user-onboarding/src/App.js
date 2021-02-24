import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import formSchema from './validation/formSchema'
import * as yup from 'yup'
import axios from 'axios'

function App() {
  const initialFormData = {
    name: '',
    email: '',
    password: '',
    tos: false
  }

  const initialErrors = {
    name: '',
    email: '',
    password: '',
    tos: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    formSchema.isValid(formData)
      .then(valid => setDisabled(!valid))
  }, [formData])

  const change = (e) => {
    const { name, value, checked, type } = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    validateFormData(name, valueToUse)
    setFormData({
      ...formData,
      [name]: valueToUse
    })
  }

  const validateFormData = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(valid => setErrors({
        ...errors,
        [name]: ''
      }))
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      })
  }

  const submit = e => {
    e.preventDefault()
    axios.post('https://reqres.in/api/users', formData)
      .then(res => setUsers(users.concat(res.data)))
      .catch(err => console.log(err))

  }

  return (
    <>
      <h1>Add a new User</h1>
      <Form data={formData} change={change} errors={errors} disabled={disabled} submit={submit} />
      {
        users.map(user => <pre key={user.id}>{JSON.stringify(user)}</pre>)
      }
    </>
  );
}

export default App;
