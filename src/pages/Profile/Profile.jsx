import React, {useEffect, useState} from 'react'
import './Profile.css'

import { format } from 'date-fns';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {BsCalendar2EventFill} from 'react-icons/bs'
import {ImLab} from 'react-icons/im'
import {TbClockHour3} from 'react-icons/tb'
import {axiosReq} from '../../utils/apiCalls'
import {useDispatch, useSelector} from 'react-redux'
import {Await, useNavigate} from 'react-router-dom'
import {logout} from '../../redux/userSlice'
import {TiDelete} from 'react-icons/ti'

const Profile = () => {
    //user
    const user = useSelector(state => state.user?.currentUser)
    
    //vietare l'accesso all'user
    const navigate = useNavigate()
    useEffect(() => {
        if(!user){
            navigate("/")
        }
    })

    //calendario
    const [openDate, setOpenDate] = useState(false)
    const [value, onChange] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (value) {
        footer = <p>You picked {format(value, 'PP')}.</p>;
    }
    const today = new Date()
    const maxDay = new Date()
    maxDay.setDate(today.getDate() + 14)

    //laboratorio
    const [openLab, setOpenLab] = useState(false)
    const [laboratorio, setLaboratorio] = useState("")

    //ora
    const [openHour, setOpenHour] = useState(false)
    const [ora, setOra] = useState("")

    //richiesta dei laboratori disponibili
    const [oreDisponibili, setOresDisponibili] = useState(null)
    useEffect(() => {
        const getLaboratori = async () => {
            console.log(user);
            try {
                // const date = `${value.getFullYear()}-0${value.getMonth()+1}-${value.getDate()}`
                if(user?.tipo === "gestore"){
                    const q = `giorno=${value.getDay()}&lab=${laboratorio}&hour=${ora}`
                    const res = await axiosReq.get(`/laboratoriGestore.php?${q}`)
                    setOresDisponibili(res.data)
                } else {
                    const q = `giorno=${value.getDay()}&lab=${laboratorio}&hour=${ora}`
                    const res = await axiosReq.get(`/laboratori.php?${q}`)
                    setOresDisponibili(res.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getLaboratori()
    }, [value, laboratorio, ora, user])

    //logout
    const dispatch = useDispatch()
    const handleLogout = async () => {
        dispatch(logout())
        window.location.reload()
    }

    //prenotazioni effettuate dall'utente
    const [prenotazioni, setPrenotazioni] = useState()

    useEffect(() => {
        const getPrenotazioni = async () => {
            try {
                const res = await axiosReq.get(`prenotazioni.php?prenotatore=${user.email}`)
                setPrenotazioni(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getPrenotazioni()
    }, [user?.email])


    //prenota laboratorio
    const [labSelected, setLabSelected] = useState(false)
    const handleSubmit = async (settimanaPros) => {
        try {
            const res = await axiosReq.post(`/prenotazione.php`, {
                id: labSelected.id,
                prenotatore: user.email,
                settimanaPross: settimanaPros
            })
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    //update email user
    const [email, setEmail] = useState("")

    const handleKeyPress = async (e) => {
        if(email.length > 0 && e.key === 'Enter'){
            if(window.confirm("Sei sicuro di voler cambiare la tua email?")){
                try {
                    const res = await axiosReq.put("update.php", {
                        email: email
                    })
                    window.location.reload()
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    //elimina prenotazione
    const handlePrenotazioneDelete = async (prenId) => {
        try {
            if(window.confirm("Eliminare la prenotazione?")){
                const res = await axiosReq.post("eliminaPrenotazione.php", {
                    id: prenId
                })
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='profile'>
        <div className="navbar">
            <h1>Area Utente</h1>
            <div className='navbar__links'>
                <a href="/">Home</a>
                <span onClick={handleLogout}>Logout</span>
            </div>
        </div>
        <div className="profile__container">
            <div className="profile__left">
                <h1>{user?.nome} {user?.cognome}</h1>
                <span>{user?.tipo}</span>

                <div className="inputGroup">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder={user?.email} value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => handleKeyPress(e)} />
                </div>
                {/* PRENOTAZIONI EFFETTUATE  */}
                <div className="prenotazioni">
                    <h1>Prenotazioni Effettuate</h1>
                    <div className="profile__right-items">
                        {prenotazioni?.map(lab => (
                            <div className={"profile__right-item"}>
                                <span className='profile__right-item_date'>{lab.data}</span>
                                <h3>Lab: <span>{lab.laboratorio}</span></h3>
                                <h3>Ora: <span>{lab.ora}</span></h3>
                                <span className="deletePrenotazione" onClick={() => handlePrenotazioneDelete(lab.id)}><TiDelete /></span>
                                {/* <h3>Docente: <span>{lab.docente}</span></h3> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* PROFILE RIGHT  */}
            <div className="profile__right">
                <h1>Prenota un laboratorio</h1>
                <div className="profile__right-date">
                   <div className="profile__right-text">
                        <h3>Scegli il giorno: </h3>
                        <span onClick={() => {setOpenDate(prev => !prev); setOpenLab(false); setOpenHour(false)}}><BsCalendar2EventFill /></span>
                   </div>
                    {openDate && (
                        <DayPicker disabled={[{ before: today }, {dayOfWeek: [0, 6]}, {after: maxDay}]} 
                            onSelect={onChange} selected={value} 
                            mode="single" footer={footer} className={openDate ? 'calendar show' : 'calendar'}
                        />
                    )}
                </div>
                <div className="profile__right-lab">
                    <div className="profile__right-text">
                        <h3>Scegli il laboratorio: </h3>
                        <span onClick={() => {setOpenLab(prev => !prev); setOpenDate(false); setOpenHour(false)}}><ImLab /></span>
                   </div>
                   {openLab && (
                    <div className="profile__right-labs">
                        <div>
                            <button onClick={() => setLaboratorio("chimica")}>Chmica</button>
                            <button onClick={() => setLaboratorio("quarte")}>Quarte</button>
                            <button onClick={() => setLaboratorio("biennio")}>Biennio</button>
                            <button onClick={() => setLaboratorio("terze")}>Terze</button>
                        </div>
                    </div>
                   )}
                </div>
                <div className="profile__right-hour">
                    <div className="profile__right-text">
                        <h3>Scegli l'ora: </h3>
                        <span onClick={() => {setOpenHour(prev => !prev); setOpenLab(false); setOpenDate(false)}}><TbClockHour3 /></span>
                   </div>
                   {openHour && (
                    <div className="profile__right-labs">
                        <div>
                            <button onClick={() => setOra(1)}>1</button>
                            <button onClick={() => setOra(2)}>2</button>
                            <button onClick={() => setOra(3)}>3</button>
                            <button onClick={() => setOra(4)}>4</button>
                            <button onClick={() => setOra(5)}>5</button>
                            <button onClick={() => setOra(6)}>6</button>
                            <button onClick={() => setOra(7)}>7</button>
                        </div>
                    </div>
                   )}
                </div>
                <button className={labSelected?.prenotato == 0 || (labSelected && user.tipo === "gestore") ? 'prenota-btn show' : "prenota-btn"} onClick={() => handleSubmit(0)}>Prenota questa settimana</button>
                <button className={labSelected?.prenotatoPross == 0 || (labSelected && user.tipo === "gestore") ? 'prenota-btn show' : "prenota-btn"} onClick={() => handleSubmit(1)}>Prenota prossima settimana</button>
                <div className="profile__right-itemsContainer">
                    <h2>Laboratori Disponibili</h2> 
                    <div className="profile__right-items">
                        {oreDisponibili?.map(lab => (
                            <div className={labSelected?.id === lab.id ? "profile__right-item selected" : "profile__right-item"} onClick={() => setLabSelected(lab)}>
                                <span className='profile__right-item_date'>{lab.data}</span>
                                <h3>Lab: <span>{lab.laboratorio}</span></h3>
                                <h3>Ora: <span>{lab.ora}</span></h3>
                                {/* <h3>Docente: <span>{lab.docente}</span></h3> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile