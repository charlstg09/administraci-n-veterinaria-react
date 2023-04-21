import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2'>
      <h2 className='font-black text-center text-3xl'>Seguimiento Pacientes</h2>
      <p className='text-center text-lg mt-2 '>Añade Pacientes y {""} <span className='text-indigo-700 font-bold'>Administralos</span></p>
      <form action="" className='bg-white shadow-md rounded-sm py-10 px-5'>
        <div>
          <label htmlFor="mascota" className='block uppercase font-bold text-gray-700'>Nombre Mascota</label>
          <input type="text" id='mascota' placeholder='Nombre de la Mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400'/>
        </div>
        <div className='mt-5'>
        <label htmlFor="propietario" className='block uppercase font-bold text-gray-700'>Nombre Propietario</label>
        <input type="text" id='propietario' placeholder='Nombre del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400' />
        </div>

        <div className='mt-5'>
        <label htmlFor="email" className='block uppercase font-bold text-gray-700'>Email</label>
        <input type="email" id='email' placeholder='Email Del Paciente'  className='border-2 w-full p-2 mt-2 placeholder-gray-400'/>
        </div>

        <div className='mt-5'>
        <label htmlFor="date" className='block uppercase font-bold text-gray-700'>Alta</label>
        <input type="date" id='date' className='border-2 w-full p-2 mt-2 placeholder-gray-400' />
        </div>

        <div className='mt-5'>
        <label htmlFor="sintomas" className='block uppercase font-bold text-gray-700'>sintomas</label>
        <textarea name="" id="sintomas" className='border-2 w-full' placeholder='Describe los Sintomas del Paciente'/>
        </div>
        <input type="submit" className='bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors mb-10 mt-5' />

      </form>
    </div>
  )
}

export default Formulario
