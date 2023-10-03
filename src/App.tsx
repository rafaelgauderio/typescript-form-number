import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

type FormData = {
  age?: number;
}

function App() {

  const [formData, setFormData] = useState<FormData>({ age: undefined });


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange (event : any) {
    const inputValue = event.target.value;
    const inputName = event.target.name ; // age
    // modificicando o input do form e mantendo o que já estiver preenchido
    setFormData({...formData, [inputName] : inputValue });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tratar campo numérico não prenchido em formulário react</h1>
      <form>
        <input
          name="age"
          type="text"
          placeholder="inform a number"
          value={formData.age || ""} //se for undefined for preecher com strig vazia
          onChange={handleInputChange}
        >

        </input>
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default App
