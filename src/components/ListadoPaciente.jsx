import { Paciente } from "./Paciente"
import { useEffect } from "react"

const ListadoPaciente = ({ pacientes, setPaciente, eliminar }) => {
  //console.log(pacientes && pacientes.length === 0);
  useEffect(() => {
    if(pacientes.length > 0){
    console.log('Se agrego un nuevo paciente');
    }
  }, [pacientes])
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length === 0 ? (
        <>
          <h1 className=" text-3xl font-bold text-center">No Hay Pacientes</h1>

          <p className="mt-5 text-center mb-10">Crea nuevos pacientes{''}
            <span className="text-indigo-600 font-bold"> y administralos aqui</span>
          </p>
        </>
        
      ):(
        <>
          <h1 className=" text-3xl font-bold text-center">Listado de Pacientes</h1>

          <p className="mt-5 text-center mb-10">Administra tus  {''}
            <span className="text-indigo-600 font-bold"> pacientes</span>
          </p>
          { pacientes.map(paciente => ( 
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminar={eliminar}
            />  
          ))}
        </>
      )}
      
      

      
      
    </div>
    
    
  )
}

export default ListadoPaciente