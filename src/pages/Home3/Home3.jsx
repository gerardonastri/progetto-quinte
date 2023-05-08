import React, { useEffect, useState } from 'react'
import './Home3.css'
import {axiosReq} from '../../utils/apiCalls'

const Home3 = () => {

    const [orari, setOrari] = useState(null)
    const [canParse, setCanParse] = useState(null)

    useEffect(() => {
        const getOrari = async () => {
            try {
                const res = await axiosReq.get('orario.php')
                res.data?.forEach(orarrr => {
                    orarrr.orario = JSON.parse(orarrr.orario)
                })
                setOrari(res.data)
                
            } catch (error) {
                console.log(error);
            }
        }
        getOrari()
    }, [])

    

    //evento
    const [evento, setEvento] = useState(null)

    useEffect(() => {
        const getEvento = async () => {
            try {
                const res = await axiosReq.get("evento.php")
                setEvento(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getEvento()
    }, [])

    const today = new Date().getDate()
    const month = new Date().getMonth() + 1

    //laboratori prenotati
    const [laboratori, setLaboratori] = useState(null)

    useEffect(() => {
        const getLabs = async () => {
            try {
                const res = await axiosReq.get("laboratoriPrenotati.php")
                setLaboratori(res.data)
                setCanParse(true)
            } catch (error) {
                console.log(error);
            }
        }
        getLabs()
    }, [])

    console.log(evento);

  return (
    <div className='container'>
        <div className="container__up">
            {orari?.map(item => (
                <div className="orario">
                    <h1>{item.nome}</h1>
                    <div className="orario__container">
                        {item.orario.map(giorno => (
                            <div className="orario__day">
                                <h3>{giorno.giorno}</h3>
                                <div className="orario__day-hours">
                                    {giorno.orarioGiorno.map(ora => (
                                        <div className="orario__day-hour">
                                            {ora.classe?.length > 0 ? (
                                                <div className="orario__item">
                                                    <span>{ora.docente}</span>
                                                    <span>{ora.classe}</span>
                                                </div>
                                            ): (
                                                <>
                                                {canParse && laboratori?.find(item => item.chiave == ora.chiave && item.prenotato === '1') ? (
                                                    <span>prenotato da: {laboratori?.find(item => item.chiave == ora.chiave)?.prenotatore.slice(0,8)}</span>
                                                ) : (
                                                    <span>Da prenotatare</span>
                                                )}
                                                </>    
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="container__up">
            {orari?.map(item => (
                <div className="orario">
                    <h1>{item.nome}</h1>
                    <div className="orario__container">
                        {item.orario.map(giorno => (
                            <div className="orario__day">
                                <h3>{giorno.giorno}</h3>
                                <div className="orario__day-hours">
                                    {giorno.orarioGiorno.map(ora => (
                                        <div className="orario__day-hour">
                                        {ora.classe?.length > 0 ? (
                                           <div className="orario__item">
                                             <span>{ora.docente}</span>
                                             <span>{ora.classe}</span>
                                           </div>
                                        ): (
                                            <>
                                            {canParse && laboratori?.find(item => item.chiave == ora.chiave && item.prenotatoPross === '1') ? (
                                                <span>prenotato da: {laboratori?.find(item => item.chiave == ora.chiave)?.prenotatore.slice(0,8)}</span>
                                            ) : (
                                                <span>da prenotare</span>
                                            )}
                                            </>    
                                        )}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="banner"> 
            {evento && parseInt(evento?.data.split('-')[2]) === today && parseInt(evento?.data.split('-')[1]) === month && ( 
                <h1>oggi è {evento.nome}</h1>
            )}
        </div>
    </div>
  )
}

export default Home3