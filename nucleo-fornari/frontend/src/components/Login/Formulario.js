import { login } from "../../services/authService";
import InputText from "./InputText"

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    api.get('/login', {
      email: email,
      senha: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200 && response.data?.token) {
          sessionStorage.setItem('authToken', response.data.token);
          sessionStorage.setItem('usuario', response.data);

        //   toast.success('Login realizado com sucesso!'); so deus sabe oq eh isso
          login(response.data.funcao)
        } else {
          throw new Error('Ops! Ocorreu um erro interno.');
        }
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

    return (
        <section className="flex justify-center my-20">
            <form onSubmit={handleSubmit} className="bg-blue-pastel flex justify-center items-center flex-col max-w-4/5 py-9 px-16 rounded-2xl text-blue-dark">
                <h2 className="text-2xl">Entre com sua conta</h2>
                <InputText onChange={e => {setEmail(e.target.value)}} label="Email" placeholder="Digite seu email" />
                <InputText onChange={p => {setPassword(p.target.value)}} label="Senha" placeholder="Digite sua senha" />
                <button type="submit" className="py-3 px-8 rounded bg-blue-main hover:bg-blue-dark hover:text-white-main">
                    Entrar
                </button>
            </form>
        </section>
    )
}

export default Formulario