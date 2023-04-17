import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async () => {
        if(email.length > 0 && password.length > 8){

        } else {
            setError(true)
        }
    }

  return (
    <div className='login'>
        <div className="login__container">
            <h1>Login</h1>
            <div className="login__form">
                <div className="inputGroup">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Inserisci la tua email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Inserisci la tua password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p>Non hai un account? <a href="/register">Registrati</a></p>
                <button onClick={handleSubmit}>Invia</button>
                {error && (
                    <p className="error">Compila tutti i campi</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default Login