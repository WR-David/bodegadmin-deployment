import React from 'react'
import 'bulma/css/bulma.min.css'

function TablaUser({ usuarios }) {

    return (
        <div className='block'>
            <div className='box'>
                <table className='table is-bordered is-striped is-hoverable is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nombre</th>
                            <th>A Paterno</th>
                            <th>A Materno</th>
                            <th>Rut</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuarios => {
                            return (
                                <tr key={usuarios.idUsuario}>
                                    <td>{usuarios.idUsuario}</td>
                                    <td>{usuarios.nombre}</td>
                                    <td>{usuarios.apePat}</td>
                                    <td>{usuarios.apeMat}</td>
                                    <td>{usuarios.rut}</td>
                                    <td>{usuarios.estado}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TablaUser