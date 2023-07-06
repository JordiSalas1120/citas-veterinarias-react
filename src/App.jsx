
import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListadoPaciente from './components/ListadoPaciente'
import Header from './components/Header'



function App() {
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});

  //como al reiniciar o actualizar el valor de pacientes un arreglo vacio no se logran leer los datos previamente guardados, para solucionarlo se coloca otro useefct que se ejecute ni bien inicie el programa y asi se lean los valores de localstorage antes que se sobreescriban con el arreglo vacio 
/*
  useEffect(() => {
    const leerLs = () =>{
      const resultadoLs = JSON.parse(localStorage.getItem('pacientes'))
      console.log(resultadoLs);
      setPacientes(resultadoLs);
      
    }

    leerLs();
  }, [])
  

  useEffect(() => {
    //console.log(pacientes);
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes])
*/


useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify( pacientes ));
}, [pacientes])
  const eliminar = (id) =>{
    //console.log('eliminando', id);
    const pacientesActualizado = pacientes.filter(pacienteFilte => pacienteFilte.id !== id)
    setPacientes(pacientesActualizado)
  }
  
 
  
  return (
   <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
        <ListadoPaciente
          pacientes={ pacientes }
          setPaciente={setPaciente}
          eliminar={eliminar}
        />
      </div>
      
   </div>
      
  )
}

export default App
