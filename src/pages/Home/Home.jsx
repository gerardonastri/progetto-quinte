import React, { useEffect, useState } from 'react'
import './Home.css'
import { useParams } from 'react-router-dom'

const Home = () => {

  const {id} = useParams()
  // const [orario, setOrario] = useState(null)

  // useEffect(() => {
  //   const getOrario = async () => {
  //     try {
        
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getOrario()
  // }, [id])

  const orario = [
    1,2,3,4,5,
  ]

  const items = [
    1,2,3,4,5,6
  ]

  return (
    <div className='container'>
      <div className="wrapper">
        <h1>Laboratorio Terze</h1>
        <div className="orario__container">
          {orario?.map(i => (
            <div className="orario">
              <h3>Lunedì</h3>
              <div className="orario__items">
                {items.map(item => (
                  <div className="orario__item">
                    <h3>Ora: <span>1</span></h3>
                    <h3>Docenti: <span>Gerardo Scarano, Tiziana Calabrò</span></h3>
                    <h3>Classe: <span>3g</span></h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home