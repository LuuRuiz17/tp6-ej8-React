import 'bootstrap/dist/css/bootstrap.min.css';
import BarraDeNavegacion from './BarraDeNavegacion';
import Formulario from './Formulario';

function App() {

  return (
    <>
      <header>
        <BarraDeNavegacion></BarraDeNavegacion>
      </header>
      <main>
        <h1 className='text-center color-loop titulo mt-4'>Formulario</h1>
        <Formulario></Formulario>
      </main>
      <footer className='py-4 rosa text-center'>&copy; Todos los derechos reservados</footer>
    </>
  )
}

export default App
