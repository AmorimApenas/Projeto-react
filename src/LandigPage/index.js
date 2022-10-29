import style from './style.css'
import { useState } from "react";
export default function LadingPage() {

    const fundoClaro = 'modoClaro';
    const fundoEscuro = 'modoEscuro';

    const srcClaro = './assets/sun.png';
    const srcEscuro = './assets/moon.png';

    const btnClaro = 'btnClaro';
    const btnEscuro = 'btnEscuro';

    const [icon, setIcon] = useState(true);

    const [nameBtn, setNameBtn] = useState(true);
    
    const [estiloAtt, setEstiloAtt] = useState(true);

    const [corBtn, setCorBtn] = useState(true);

    const alterarTema = () => {
        setEstiloAtt(!estiloAtt);
        setIcon(!icon);
        setNameBtn(!nameBtn);
        setCorBtn(!corBtn);
    }


    return (
        <div className={estiloAtt?fundoClaro:fundoEscuro}>
            <header className='limitar-secao topo'>
                <img className="img-logo" src="./assets/barbearia-logo.png" alt="Logo-Barbearia" />
                <button 
                className={corBtn?btnClaro:btnEscuro} 
                onClick={alterarTema}><img className='imgBtn' src={icon?srcEscuro:srcClaro} alt="" />{nameBtn?"Dark":'Ligth'}</button>
            </header>
            <section className="banner">

            </section>
            <section className="text limitar-secao">
                <h1>Bem-vindo a Barber Shop</h1>
                <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                <p className="assinatura"> S. Kelly</p>
            </section>
        </div>
    )
}