import React, {useState} from 'react'
import './Register.css'
import {axiosReq} from '../../utils/apiCalls'
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const [nome, setNome] = useState("")
    const [cognome, setCognome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async () => {

        if(nome.indexOf("<") >= 0 || nome.indexOf(">") >= 0 || cognome.indexOf("<") >= 0 || cognome.indexOf(">") >= 0 || email.indexOf("<") >= 0 || email.indexOf(">") >= 0){
            setError("Non fare attacchi XSS :)))))")
            console.log(nome.indexOf("<"));
            console.log(cognome.indexOf("<"));
            console.log(email.indexOf("<"));
            console.log(nome.indexOf(">"));
            console.log(nome.indexOf(">"));
            console.log(nome.indexOf(">"));
        } else if (email.length > 0 && password.length > 8 && nome.length > 0 && cognome.length > 0 && email.length < 50 && nome.length < 30 && cognome.length < 30 && password.length < 50){
            const res = await axiosReq.post("/register.php", {
                nome,
                cognome,
                email,
                password
            })
            navigate("/login")
        } else {
            setError("Compila i campi")
        }
    }

  return (
    <div className='login register'>
        <div className="login__container">
            <h1>Registrati</h1>
            <div className="login__form">
                <div className="inputGroup">
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder='Inserisci il tuo nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Cognome</label>
                    <input type="text" placeholder='Inserisci il tuo cognome' value={cognome} onChange={(e) => setCognome(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Inserisci la tua email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="">Password (min 8 caratteri)</label>
                    <input type="password" placeholder='Inserisci la tua password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p>Hai già un account? <a href="/login">Accedi</a></p>
                <button onClick={handleSubmit}>Invia</button>
                {error && (
                    <p className="error">{error}</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default Register