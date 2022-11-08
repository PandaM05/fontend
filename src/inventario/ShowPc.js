import {useState, useEfect} from 'react'
import {Link} from 'react-router-dom'

const CompShowPc = () => {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/create' className='btn btn-dark'><i className='fas fa-plus'/></Link>
                    <table className='table'>
                        <thead className='thead-table'>
                            <tr>
                                <th>#</th>
                                <th>#Referencia</th>
                                <th>Marca</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowPc