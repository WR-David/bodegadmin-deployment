import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TablaUser from './TablaUser'

function DataUsers() {
    const [usuarios, setUsuarios] = useState([])
    const [listado, setListado] = useState(false)

    useEffect(() => {
        const getUsers = () => {
            axios.get('http://localhost:9000/api')
            .then(res=>{setUsuarios(res.data)})
            .catch(err=>{console.log(err)})
        }
        getUsers()
        setListado(false)
    }, [listado])


    return (
      <TablaUser usuarios={usuarios} />
    )
}
export default DataUsers