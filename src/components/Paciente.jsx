import { useEffect } from "react";


export const Paciente = ({ paciente, setPaciente, eliminar }) => {

    const { nombre, propietario, email, fecha, sintomas, id} = paciente;
    const handlerEliminar = ()=> {
        const respuesta = confirm("Desea Eliminar el paciente?");
        if(respuesta){
            eliminar(id)
        }
    }
    
  return (
    <>
        <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} 
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''} 
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} 
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''} 
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''} 
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between ">
                <button className="bg-indigo-500 hover:bg-indigo-700 transition-all py-2 px-4 rounded-md text-white"
                onClick={() => setPaciente(paciente)}>Editar</button>
                <button className="bg-red-500 hover:bg-red-700 transition-all py-2 px-4 rounded-md text-white"
                onClick={handlerEliminar}
                >Eliminar</button>
            </div>
            
         </div>
       
    
    </>
    
  )
}
