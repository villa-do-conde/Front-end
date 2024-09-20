import InputText from "./InputText"

const Formulario = () => {
    return (
        <section className="flex justify-center my-20">
            <form className="bg-blue-pastel flex justify-center items-center flex-col max-w-4/5 py-9 px-16 rounded-2xl text-blue-dark">
                <h2 className="text-2xl">Entre com sua conta</h2>
                <InputText label="Email" placeholder="Digite seu email" />
                <InputText label="Senha" placeholder="Digite sua senha" />
                <button className="py-3 px-8 rounded bg-blue-main hover:bg-blue-dark hover:text-white-main">Entrar</button>
            </form>
        </section>
    )
}

export default Formulario