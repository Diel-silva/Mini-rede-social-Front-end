'use client'
import { useEffect, useState } from "react"
import { usuarioDelete, usuarioFindAll } from "./lib/api/usuarios"
import UsuarioEditar from "./usuarioEditar";

const Usuarios = () => {
    const [usuario, setUsuarios] = useState<any[]>([]);
    const [usuarioEditar, setUsuarioEditar] = useState<any | null>();
    const [cadstrarUsuario, setCadastrarUsuario] = useState(false)

    useEffect(() => {
        fetchBuscaUsuario()
    }, [])
    const fetchBuscaUsuario = async () => {
        const response = await usuarioFindAll()
        if (response) {
            setUsuarios(response)
        } else {
            return [];
        }
    }

    async function handlerExcluir(id: number): Promise<void> {
        const response = await usuarioDelete(id);
        if (response) { 
            fetchBuscaUsuario();
        }
        else {
            alert("Erro ao excluir o usuário");
        };
    }

    function handlerEditar(usuario: any): void {
        setUsuarioEditar(usuario);
    }

    return (
        <>
            <div>
                <h2>Lista de Usuários</h2>
                <button onClick={() => setCadastrarUsuario(true)}>Adicionar usuário</button>
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
            <UsuarioEditar
             usuario={usuarioEditar}
                onClose={() => setUsuarioEditar(null)}
                onAtualizar={async () => {
                    await fetchBuscaUsuario();
                    setUsuarioEditar(null);
                }}
            />
            )}

            {cadstrarUsuario && (
            <UsuarioEditar
                onClose={() => setCadastrarUsuario(false)}
                onAtualizar={async () => {
                    await fetchBuscaUsuario();
                    setCadastrarUsuario(false);
                }}
            />
            )}
        </>
    )
}

export default Usuarios