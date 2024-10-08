import Avisos from "./Avisos";


function Agenda(props) {

    return (
        
        <session className="topo">   
        <h1 className="flex items-center flex-col text-4xl font-semibold ">Agenda de {props.nomeAluno}</h1>
            <select name="mes" id="">
                <option value="janeiro">Janeiro</option>
                <option value="fevereiro">Fevereiro</option>
                <option value="marco">Março</option>
                <option value="abril">Abril</option>
                <option value="maio">Maio</option>
                <option value="junho">Junho</option>
                <option value="julho">Julho</option>
                <option value="agosto">Agosto</option>
                <option value="setembro">Setembro</option>
                <option value="outubro">Outubro</option>
                <option value="novembro">Novembro</option>
                <option value="dezembro">Dezembro</option>
            </select>
        </session>
     
    )

}

export default Agenda;