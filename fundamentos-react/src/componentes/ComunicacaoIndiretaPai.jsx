import React from "react";
import ComunicacaoIndiretaFilho from "./ComunicacaoIndiretaFilho";

export default props => {
    const notificarSaidaDoFilho = local =>
        alert(`Liberado para ir ao ${local}`)
        return (<div><ComunicacaoIndiretaFilho notificarSaida={notificarSaidaDoFilho}/></div>)
}