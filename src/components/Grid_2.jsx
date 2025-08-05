import './Grid.css'

import Wedding_9 from '../assets/images/Wedding_9.png'
import Wedding_13 from '../assets/images/Wedding_13.png'
import Wedding_20 from '../assets/images/Wedding_20.png'

export default function Grid(){
    return(
       <section className="servicos-grid">
               <img className="grid-imagem" src={Wedding_9}/>
               <div className="texto-servico">
                   <span className="numero">1</span>
                   <hr />
                   <p className="descricao">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.</p>
               </div>
               <img className="grid-imagem" src={Wedding_13} alt="Noiva com buquê"/>
               <div className="texto-servico">
                   <span className="numero">2</span>
                   <hr />
                   <p className="descricao">Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.</p>
               </div>
               <img className="grid-imagem" src={Wedding_20} alt="Cerimônia de casamento"/>
               <div className="texto-servico">
                   <span className="numero">3</span>
                   <hr />
                   <p className="descricao">Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.</p>
               </div>
       </section> 
    );
}