import React, { useState } from 'react';
import './App.css';
import InputMask from 'react-input-mask';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsCheckCircle} from "react-icons/bs";
import {FaWhatsapp} from "react-icons/fa"

function App() {

  const [celNumber, setCelNumber] = useState('')
  const [linkWhats, setLinkWhats] = useState('')
  const [copy, setCopy] = useState(false)

  function handleLink(e){
    let numberCel = e.target.value
    numberCel = numberCel.replace('(0','').replace(')','').replace('-','').replace(' ','');
    setCelNumber(numberCel)
    let link = `https://api.whatsapp.com/send?phone=55${numberCel}`
    console.log(celNumber.length)
    setLinkWhats(link)
  }

  function handleInput(){
    setCopy(false)
    setLinkWhats('')
    setCelNumber('')
  }

  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="header d-flex w-100 flex-column justify-content-center aligm-itens-center">
          <FaWhatsapp className="iconZapp"/>
          <span>LinkZapp</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          { copy &&
            <BsCheckCircle className="icon" />
          }
          {
            celNumber.length == 11 &&
            <div className="d-flex flex-column">
              <span className="link-whats">{linkWhats}</span>
              <CopyToClipboard text={linkWhats}
                onCopy={() => setCopy(true)}>
                <span className="btn btn-danger pt-3" onClick={()=>setCelNumber('')}>Copiar link</span>
              </CopyToClipboard>
            </div>
          }
            <h1 className="title text-center">Digite o número do seu telefone com DDD 😎️</h1>
            <InputMask type="tel" mask="(099) 99999-9999" maskChar="" value={celNumber} className="form-control text-center cel-input" onChange={(e)=>handleLink(e)} onClick={()=>handleInput()}></InputMask>
        </div>
        <div className="copy">
          <span>Desenvolvido por <br></br><a href="https://emersongoncalves.dev.br">Emerson Gonçalves | Dev Full Stack</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;
