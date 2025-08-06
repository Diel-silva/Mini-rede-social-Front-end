'use client'
import { useEffect, useState } from "react"
import { usuarioFindAll } from "./lib/api/usuarios"

const Usuarios = ()=>{
    const [Usuarios, setUsuarios] = useState<any[]>([])

    useEffect(()=>{
        const fetchBuscaUsuario = async () =>{
            const response = await usuarioFindAll()
            if(response){
                setUsuarios(response)
            }else{
                return[];
            }

        }
        fetchBuscaUsuario()

    }, [])
    return(
        'usuarios'
    )
}

export default Usuarios