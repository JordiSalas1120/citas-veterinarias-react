import { useState, useEffect } from "react"
import Error from "./Error";

//rfce atajo para crear estructura basica de funcion de formulario

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente })  =>{
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  useEffect(()=>
  {
    if(Object.keys(paciente).length>0){
      //console.log(paciente.nombre);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
    
  },[paciente])

 const [error, setError] = useState(false);
 const generarId = ()=> {
  const fecha = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return fecha + random;
 }
  const handleSubmit = (e) =>{
    e.preventDefault();
    //Validando formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log("hay vacio");
      setError( true);
      return;
    }
    setError(false);


    const objetoPacientes = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      
    };
    if(paciente.id){//si pasa un id entonces es porque esta editando de caso contrario se agreca nuevo. el id servira para comprara y usarlo como bandera asi sabemos cual editar 
      //editando paciente
      
      objetoPacientes.id =paciente.id;
      
      const pacientesActualizado = pacientes.map(pacienteMap => pacienteMap.id === paciente.id ? objetoPacientes : pacienteMap)
      
      setPacientes(pacientesActualizado)
      console.log(pacientes);
      

    }else{
      //agregando paciente
      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes])
    }
    
    setNombre('');
    setPropietario('')
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h1 className=" text-3xl font-bold text-center">Seguimiento de Pacientes</h1>

      <p className="mt-5 text-center mb-10">Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-12 px-5 mb-5">
        {error&&
         <Error 
         mensaje='todos los campos son obligatorio'
         />
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input type="text" id="mascota" placeholder="Nombre de la mascota" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre del Propietario
          </label>
          <input type="text" id="propietario" placeholder="Nombre del propietario" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md"
          value={propietario}
          onChange={(e)=>setPropietario(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input type="email" id="email" placeholder="Tu Email" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input type="date" id="alta" placeholder="Nombre de la mascota" className="w-full border-2 p-2 mt-2 placerholder-gray-400 rounded-md" 
          value={fecha}
          onChange={(e)=>setFecha(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
         <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"
         value={sintomas}
         onChange={(e)=>setSintomas(e.target.value)}/>
        </div>
        <input type="submit"value={!paciente.id ? "Agregar Paciente": "Editar Paciente"} className="bg-indigo-600 hover:bg-indigo-700 curso-pointer  uppercase font-bold w-full rounded-md text-white p-2 transition-all" 
        />
      </form>
    </div>
  )
}

export default Formulario
