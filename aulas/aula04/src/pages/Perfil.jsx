function Perfil() {
    return(
        <>
    <Cabecalho />
        <Conteudo>
            <Logo imagem={urlLogo} texto={textoLogo}/>
            <Titulo texto ="Aluno Online"/>
            <InputUsuario/>
            <InputSenha/>
            <BotaoSubmit texto="Entrar"/>
            <Link texto="Esqueceu a ssenha"/>
            <Link texto="Criar uma conta"/>
        </Conteudo>

        <Rodape/>
        </>

    )
}

export default Perfil;