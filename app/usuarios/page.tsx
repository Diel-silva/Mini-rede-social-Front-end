'use client'
import { useEffect, useState } from "react"
import { usuarioDelete, usuarioFindAll } from "../componentes/lib/api/usuarios"
import UsuarioEditar from "../componentes/usuarios/usuarioEditar";
import "./page.css"

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
        <div className="table-conteiner">
            <div>
                <h2>Lista de Usuários</h2>
                <button className="btn-edit" onClick={() => setCadastrarUsuario(true)}>Adicionar usuário</button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do usuário</th>
                            <th>E-mail</th>
                            <th>Senha</th>
                            <th>Ações</th>
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
                                    <button className="btn-edit" onClick={() => handlerEditar(usuario)}>Editar</button>
                                    <button className="btn-delete" onClick={() => handlerExcluir(usuario.id)}>Excluir</button>
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
        </div>
    )
}

export default Usuarios