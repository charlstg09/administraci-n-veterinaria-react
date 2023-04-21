import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/LIstaPacientes'
function App() {
 
  return (
    <>
    <Header/>
    <div className='md:flex'>
    <Formulario/>
    <ListadoPacientes/>
    </div>
  

    
    </>
  )
}

export default App
