import { ChangeEvent, useState } from "react"

interface propsUsuario {
    usuario: any
    onClose: () => void;
}

const UsuarioEditar = (props: propsUsuario) => {
    const [nome, setNome] = useState(props.usuario.nome_usua);
    const [email, setEmail] = useState(props.usuario.email_usua);
    const [senha, setSenha] = useState(props.usuario.senha_usua);


    return (
        <div style={{border: '2px solid blue', padding: 20, marginTop: 20}}>
            <h2>Editar Usuário</h2>
            <form>
                <div>
                    <label>Nome</label>
                    <input value={nome} onChange={(e)=> setNome(e.target.value)}></input>
                </div>
                <div>
                    <label>E-mail</label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input value={senha} onChange={(e)=> setSenha(e.target.value)}></input>
                </div>
                <button>Salvar</button>
                <button type="button" onClick={props.onClose}>Cancelar</button>
            </form>
        </div>
    )
}

export default UsuarioEditar