import React, { useState } from 'react'
import './Home3.css'


const Home3 = () => {
    

    //TODO: SPOSTARE L'ORARIO NEL FILE COSTANTI
    const orario = [
        {
            nome: "chimica",
            orario: [
                {
                    giorno: "lunedi",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "martedi",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "mercoledì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "giovedì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "venerdì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                }
            ]
        },
        {
            nome: "quarte",
             orario: [
                {
                    giorno: "lunedi",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "martedi",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "mercoledì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "giovedì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "venerdì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                }
            ]
        },
        {
            nome: "seconde",
             orario: [
                {
                    giorno: "lunedi",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "martedi",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "mercoledì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "giovedì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "venerdì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                }
            ]
        },
        {
            nome: "terze",
             orario: [
                {
                    giorno: "lunedi",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "martedi",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "mercoledì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "giovedì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                },
                {
                    giorno: "venerdì",
                    orarioGiorno: [
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        },
                        {
                            docente: "scarano",
                            ora: 1,
                            classe: "4g",
                            prenotazione: ""
                        }
                    ]
                }
            ]
        },
    ]

  return (
    <div className='container'>
        <div className="container__up">
            {orario.map(item => (
                <div className="orario">
                    <h1>{item.nome}</h1>
                    <div className="orario__container">
                        {item.orario.map(giorno => (
                            <div className="orario__day">
                                <h3>{giorno.giorno}</h3>
                                <div className="orario__day-hours">
                                    {giorno.orarioGiorno.map(ora => (
                                        <div className="orario__day-hour">
                                            {ora.docente}
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
            {orario.map(item => (
                <div className="orario">
                    <h1>{item.nome}</h1>
                    <div className="orario__container">
                        {item.orario.map(giorno => (
                            <div className="orario__day">
                                <h3>{giorno.giorno}</h3>
                                <div className="orario__day-hours">
                                    {giorno.orarioGiorno.map(ora => (
                                        <div className="orario__day-hour">
                                            {ora.docente}
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
            <h1>oggi è comitato studentesco</h1>
        </div>
    </div>
  )
}

export default Home3