import React, {useEffect, useState} from 'react'
import './Profile.css'

import { format } from 'date-fns';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {BsCalendar2EventFill} from 'react-icons/bs'
import {ImLab} from 'react-icons/im'
import {TbClockHour3} from 'react-icons/tb'
import {axiosReq} from '../../utils/apiCalls'

const Profile = () => {


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
    useEffect(() => {
        const getLaboratori = async () => {
            try {
                const q = `day=${value.getDate()}&lab=${laboratorio}&ora=${ora}`
                console.log(q);
                // const res = await axiosReq.get("")
            } catch (error) {
                console.log(error);
            }
        }
        getLaboratori()
    }, [value, laboratorio, ora])

    //logout
    const handleLogout = async () => {

    }

    const user = {
        firstName: "Mario",
        lastName: "Rossi",
        email: "marioross@gmail.com",
        tipo: "studente"
    }

    const oreDisponibili = [
        {
            data: "17/04",
            ora: 1,
            docente: "Scarano",
            laboratorio: "terze"
        },
        {
            data: "17/04",
            ora: 2,
            docente: "Scarano",
            laboratorio: "terze"
        },
        {
            data: "17/04",
            ora: 2,
            docente: "Nunziante",
            laboratorio: "chimica"
        },
        {
            data: "17/04",
            ora: 3,
            docente: "Oliva",
            laboratorio: "quarte"
        }
    ]


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
                <h1>{user?.firstName} {user?.lastName}</h1>
                <span>{user?.tipo}</span>

                <div className="inputGroup">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder={user?.email} />
                </div>
            </div>
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
                        </div>
                    </div>
                   )}
                </div>

                <div className="profile__right-itemsContainer">
                    <h2>Laboratori Disponibili</h2> 
                    <div className="profile__right-items">
                        {oreDisponibili?.map(lab => (
                            <div className="profile__right-item">
                                <span className='profile__right-item_date'>{lab.data}</span>
                                <h3>Lab: <span>{lab.laboratorio}</span></h3>
                                <h3>Ora: <span>{lab.ora}</span></h3>
                                <h3>Docente: <span>{lab.docente}</span></h3>
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