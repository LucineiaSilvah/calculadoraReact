import { useState } from "react";
import './App.css'; 

const App = () => {
  const [resultado, setResultado] = useState("");

  const aoClickar = (e)=>{
setResultado(resultado.concat(e.target.name))
  }
  const limpar= ()=>{
setResultado('')
  }
  const espacoBranco= ()=>{
 setResultado(resultado.slice(0, resultado.length -1))
  }
  const calcular = ()=>{

    try{

      setResultado(eval(resultado).toString());
    }catch (err){
       setResultado('erro')
    }
  }
  return (
    <>
        <h1 className="title">Calculadora</h1>
      <main className="container">
        <div className="detalhe">
         <div></div>
         <div></div>
         <div></div>
        </div>
        <form>
          <input type="text" value={resultado} />
        </form>
        <div className="teclado">
          <button className="higthlight" id="limpar" onClick={limpar}>Limpar</button>
          <button className="higthlight"  id="espacoBranco" onClick={espacoBranco}>c</button>
          <button className="higthlight"  name="/" onClick={aoClickar}>&divide;</button>
          <button name="7" onClick={aoClickar}>7</button>
          <button name="8" onClick={aoClickar}>8</button>
          <button name="9" onClick={aoClickar}>9</button>
          <button className="higthlight"  name="*" onClick={aoClickar}>&times;</button>
          <button name="4" onClick={aoClickar}>4</button>
          <button name="5" onClick={aoClickar}>5</button>
          <button name="6" onClick={aoClickar}>6</button>
          <button className="higthlight"  name="-" onClick={aoClickar}>&ndash;</button>
          <button name="1" onClick={aoClickar}>1</button>
          <button name="2" onClick={aoClickar}>2</button>
          <button name="3" onClick={aoClickar}>3</button>
          <button className="higthlight"  name="+" onClick={aoClickar}>+</button>
          <button name="0" onClick={aoClickar}>0</button>
          <button className="higthlight"  name="." onClick={aoClickar}>.</button>  
          <button className="higthlight"  id="result" onClick={calcular}>=</button>
        </div>

      </main>
      <footer className="rodape">
      <a href="https://github.com/LucineiaSilvah" target="_blank" rel="noopener noreferrer">~ Lucineia Silva : 2023 ~</a>
      
      </footer>
    </>
  );
};

export default App;
