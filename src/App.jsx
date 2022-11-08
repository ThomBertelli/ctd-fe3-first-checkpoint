import { useState } from 'react'
import { Card } from './Card'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [colorName, setColorName] = useState('')
  const [colorCode, setColorCode] = useState('')
  const [colorsList, setColorsList] = useState([])
  const [formError, setFormError] = useState(false)

  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

  function addColorCard(event){

    event.preventDefault()

    const newColor = {

      colorName : colorName,
      colorCode: colorCode

    }

    if(colorName.trim().length < 3 || colorCode.trim().length < 6 || !regex.test(colorCode)) {

      setFormError(true)

    }else{

      setFormError(false)

      setColorsList([...colorsList, newColor])

      setColorName('')
      setColorCode('')

    }    

  }

  return (
    <div className="App">
     <h1>Carga de estudiantes</h1>
     <form className={formError ? 'form-error' : ''} onSubmit={event => addColorCard(event)}>
      {/* Comece a desenvolver o seu Código por aqui :) */}
        
        <h2>Adicionar nova cor</h2>
        
        <label htmlFor="colorName">Nome</label>
        <input type="text" id="colorName" value={colorName} onChange={event => setColorName(event.target.value)} />

        <label htmlFor="color">Cor</label>
        <input type="text" id="color" value={colorCode} onChange={event => setColorCode(event.target.value)} />

        <button type='submit'> Adicionar </button>
        <span className='errorMessage'> Por favor, verifique os dados inseridos no formulário </span>
     </form>

      <div>
        <h2>Cores Favoritas</h2>
          {
            colorsList.map(
              colorData => {
                return(

                  <Card colorData={colorData}/>

                )

              }

            )

          }

      </div>

    </div>    

  )
}

export default App