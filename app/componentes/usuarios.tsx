'use client'
import { useEffect, useState } from "react"
import { usuarioFindAll } from "./lib/api/usuarios"
import UsuarioEditar from "./usuarioEditar";

const Usuarios = () => {
    const [usuario, setUsuarios] = useState<any[]>([]);
    const [usuarioEditar, setUsuarioEditar] = useState<any | null>();

    useEffect(() => {
        const fetchBuscaUsuario = async () => {
            const response = await usuarioFindAll()
            if (response) {
                setUsuarios(response)
            } else {
                return [];
            }

        }
        fetchBuscaUsuario()

    }, [])



    function handlerExcluir(id: any): void {
        alert(id);
    }

    function handlerEditar(usuario: any): void {
        setUsuarioEditar(usuario);
    }

    return (
        <>
            <div>
                <h2>Lista de Usuários</h2>
                <table border={1} cellPadding={5} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do usuário</th>
                            <th>E-mail</th>
                            <th>Senha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuario.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nome_usua}</td>
                                <td>{usuario.email_usua}</td>
                                <td>{usuario.senha_usua}</td>
                                <td>
                                    <button onClick={() => handlerEditar(usuario)}>Editar</button>
                                    <button onClick={() => handlerExcluir(usuario.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {usuarioEditar && (
                <UsuarioEditar usuario={usuarioEditar} 
                onClose={() => setUsuarioEditar(null)
            }/>
            )}
        </>
    )
}

export default Usuarios