import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CompCreatePc = () => {
    const { referencia, setReferencia} = useState();
    const { marca, setMarca} = useState();
    const { nombre, setNombre} = useState();
    const { descripcion, setDescripcion} = useState();
    const { precio, setPrecio} = useState();

    //guardar
    return (
        <div>
            <h3>Vista crear</h3>
            <form>
                <div className='row'>
                    <div className='col-md-4'>
                    <label className='form-label'>#Referencia</label>
                    <input 
                    value={referencia}                   
                    onChe={(e) => setReferencia(e.target.value)}
                    type='text'
                    className='form-control'
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                    <label className='form-label'>Marca</label>
                    <input 
                    value={marca}                   
                    onChe={(e) => setMarca(e.target.value)}
                    type='text'
                    className='form-control'
                    />
                    </div>
                </div >
                <div className='col-md-4'>
                    <label className='form-label'>Nombre</label>
                    <input 
                    value={nombre}                   
                    onChe={(e) => setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                    />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Descripcion</label>
                    <textarea 
                    value={descripcion}                   
                    onChe={(e) => setDescripcion(e.target.value)}
                    className='form-control'
                    />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Precio</label>
                    <input 
                    value={precio}                   
                    onChe={(e) => setNombre(e.target.value)}
                    type=''
                    className='form-control'
                    />
                </div>
            </form>
        </div>
    )
}

export default CompCreatePc