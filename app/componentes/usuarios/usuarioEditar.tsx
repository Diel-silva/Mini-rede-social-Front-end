import React, { useState } from "react";
import "./style.css";
import { usuarioCreate, usuarioUpdate } from "../lib/api/usuarios";
import { typeUsuarios } from "@/app/types/types";

interface propsUsuario {
  usuario?: typeUsuarios;
  onClose: () => void;
  onAtualizar: () => void;
}

const UsuarioEditar = (props: propsUsuario ) => {
  const [nome, setNome] = useState(props.usuario?.nome_usua ?? "");
  const [email, setEmail] = useState(props.usuario?.email_usua ?? "");
  const [senha, setSenha] = useState(props.usuario?.senha_usua ?? "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dados = { nome_usua: nome, email_usua: email, senha_usua: senha };
    const response = props.usuario
      ? await usuarioUpdate(props.usuario.id!, dados)
      : await usuarioCreate(dados);

    if (response) props.onAtualizar();
    else alert("Erro ao salvar usuário");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{props.usuario ? "Editar Usuário" : "Cadastrar Usuário"}</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>
          <div className="modal-buttons">
            <button type="button" onClick={props.onClose} className="btn-cancel">
              Cancelar
            </button>
            <button type="submit" className="btn-save">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsuarioEditar;