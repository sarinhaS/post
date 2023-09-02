import React from 'react'
import { useState } from 'react'

const FormPost = () => {
    const enviar = (e) => {
        e.preventDefault()
        if (!img || !legenda) return;
        console.log(img, legenda)
        setImg("")
        setLegenda("")
    }
    const [legenda, setLegenda] = useState("");
    const [img, setImg] = useState("");
  return (
    <div>
        <form onSubmit={enviar} className='form'>
            <input type="text" className="fomr-input" placeholder='Digite aqui sua legenda.' value={legenda} onChange={(e) => setLegenda(e.target.value)}/>
            <input type="file" className="fomr-input" value={img} onChange={(e) => setImg(e.target.value)} />
            <button type='submit' className="fomr-button">Criar Post</button>
        </form>
    </div>
  )
}

export default FormPost