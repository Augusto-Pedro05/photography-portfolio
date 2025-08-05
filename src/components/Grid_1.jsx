import './Grid.css'

import Wedding_9 from '../assets/images/Wedding_9.png'
import Wedding_10 from '../assets/images/Wedding_10.png'
import Wedding_11 from '../assets/images/Wedding_11.png'
import Wedding_12 from '../assets/images/Wedding_12.png'
import Wedding_13 from '../assets/images/Wedding_13.png'

export default function Grid(){
return(
    <section className="servicos-grid">
        <img className="grid-imagem" src={Wedding_9}/>
        <div className="texto-servico">
            <span className="numero">1</span>
            <hr />
            <h2 className="titulo-servico">BREAKING THE ICE</h2>
            <p className="descricao">Lorem ipsum dolor sit amet as a consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.</p>
        </div>
        <img className="grid-imagem" src={Wedding_10} alt="Noiva com buquê"/>
        <div className="texto-servico">
            <span className="numero">2</span>
            <hr />
            <h2 className="titulo-servico">PLANNING & PREPARATION</h2>
            <p className="descricao">Lorem ipsum dolor sit amet as a consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.</p>
        </div>
        <img className="grid-imagem" src={Wedding_11} alt="Cerimônia de casamento"/>
        <div className="texto-servico">
            <span className="numero">3</span>
            <hr />
            <h2 className="titulo-servico">SESSION COVERAGE</h2>
            <p className="descricao">Lorem ipsum dolor sit amet as a consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.</p>
        </div>
        <img className="grid-imagem" src={Wedding_12} alt="Noivos se abraçando"/>
        <div className="texto-servico">
            <span className="numero">4</span>
            <hr />
            <h2 className="titulo-servico">POST-PRODUCTION & DELIVERY</h2>
            <p className="descricao">Lorem ipsum dolor sit amet as a consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.</p>
        </div>
        <img className="grid-imagem" src={Wedding_13} alt="Noivos se abraçando"/>
</section>
);
}