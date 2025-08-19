'use client'
import { useState } from "react"

interface Mensagem {
    id: number;
    usuario: string;
    texto: string;
    date: Date;
    enviadaPorUsuario: boolean;
}
const Postagem = () => {
    const [novaMensagem, setNovaMensagem] = useState<string>("");
    const [mensagem, setMensagem] = useState<Mensagem[]>([]);

    const handlerEnviar = () => {
        if (!novaMensagem.trim()) return

        const suaMensagem: Mensagem = {
            id: 0,
            usuario: "Você",
            texto: "lkkk",
            date: new Date(),
            enviadaPorUsuario: true
        }
        setMensagem([suaMensagem]);
        setNovaMensagem('');
    }
    return (
        <div>
            <h2>Mensagens</h2>
            <div>
                {mensagem && mensagem.map((msg) =>
                    <div key={msg.id}>
                        <strong>
                            {msg.usuario}
                        </strong>
                        <p>{msg.texto}</p>
                        <small>{msg.date.toLocaleDateString()}</small>
                    </div>
                )}
            </div>
            <div>
                <input type="text"
                    placeholder="Digite sua mensagem ..."
                    value={novaMensagem}
                    onChange={(e) => setNovaMensagem(e.target.value)}>
                </input>
            </div>
            <button onClick={handlerEnviar}>Enviar</button>
        </div>
    )
}
export default Postagem