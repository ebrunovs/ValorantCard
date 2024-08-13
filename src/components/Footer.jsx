import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <footer>
            <div>
                <p>BAIXE O JOGO</p>
                <p>TORNEIOS INDEPENDENTES</p>
                <p>BAIXE O APLICATIVO DE CELULAR RIOT MOBILE</p>
            </div>
            <div>
                <div><FontAwesomeIcon icon={faFacebook}/></div>
                <div><FontAwesomeIcon icon={faYoutube}/></div>
                <div><FontAwesomeIcon icon={faInstagram}/></div>
                <div><FontAwesomeIcon icon={faXTwitter}/></div>
                <div><FontAwesomeIcon icon={faDiscord}/></div>
            </div>
            <div>
                <img src="" alt="Imagem 1" />
                <img src="" alt="Imagem 2" />
            </div>
            <div>
                <h4>© 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT e todos os logotipos associados são marcas comerciais, marcas de serviço e/ou marcas registradas da Riot Games, Inc.</h4>
            </div>
            <div>
                <li>
                    <ul>POLITICA DE PRIVACIDADE</ul>
                    <ul>TERMOS DE SERVIÇO</ul>
                    <ul>PREFERENCIAS DE COOKIES</ul>
                </li>
            </div>
            <div>
                <img src="" alt="Classificação Indicativa: 14 anos" />
            </div>
        </footer>
    );
}