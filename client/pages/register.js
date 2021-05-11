import { useState } from "react"

const Register = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table(name, email, password)
  }

  return (
    <div>
      <h1 className="jumbotron text-center bg-primary square">Register Page</h1>
      <div className="container col-md-4 offset-md-4 pb-5"><form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-4 p-4" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" required />
        <input type="text" className="form-control mb-4 p-4" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required/>
        <input type="text" className="form-control mb-4 p-4" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" required/>
        <br />
        <button className="btn btn-block btn-primary p-2">Submit</button>
        </form></div>
    </div>
  )
}

export default Register