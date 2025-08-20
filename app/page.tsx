import Link from "next/link";

const Index = ()=>{
  return(
    <div>
      <h1>
        Mini Rede Social
      </h1>
      <p>
        Faça login para desfrutar o site
      </p>
      <input type="email" placeholder="E-mail"></input>
      <input type="password" placeholder="Senha"></input>
      <button>Entrar</button>
      <p>
        ainda não tem conta? {" "}
        <Link style={{color: "green"}} href={"/usuarios"}>Cadastra-se</Link>
        </p>
    </div>
  );
};
export default Index