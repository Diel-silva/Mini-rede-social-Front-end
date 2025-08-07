interface propsUsuario {
    usuario: any
}

const UsuarioEditar = (props:propsUsuario) => {
    return(
        <div>
            <div>{props.usuario.id}</div>
            <div>{props.usuario.nome_usua}</div>
            <div>{props.usuario.email_usua}</div>
            <div>{props.usuario.senha_usua}</div>
        </div>
    )
}

export default UsuarioEditar