/*SEM JSX
const App = () =>{

  return React.createElement('a',{
    href:'https://google.com.br'
  },'Clique Aqui')

  }
export default App
*/
/*
const App = () =>{
  return (
    <a href='https://google.com.br'>Clique Aqui! 2.0</a>
  )
}
export default App
*/
import { Header } from  './components/Header'
import { section } from  './components/section'
import { footer } from  './components/footer'


const App = () =>{

  const handleButtonClick= () =>{
    alert("Fui Clicado")
  }
  
  return (

  <button onclick={handleButtonClick}>Clique Aqui</button>  
   /*
    <div>
      <Header title="Santos" subtitle="Zanocelo"/>
      Dale Boy
    </div>*/

    )   
}
export default App


