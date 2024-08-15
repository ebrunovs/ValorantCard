import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import styles from '../style/footer.module.css'
import logo from '../../public/logo_riot.png'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_info}>
                <a href="">BAIXE O JOGO</a>
                <a href="">TORNEIOS INDEPENDENTES</a>
                <a href="">BAIXE O APLICATIVO DE CELULAR RIOT MOBILE</a>
            </div>


            <div className={styles.footer_social}>
            <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} size="2x"/></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
            <a href="#"><FontAwesomeIcon icon={faDiscord} size="2x"/></a>
            </div>


            <div className={styles.footer_logos}>
                <Image src={logo} alt="logo" width={200}/>
                <Image src={logo} alt="" width={200}/>
            </div>


            <p className={styles.footer_copyright}>
                &copy; 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT e todos os logotipos associados são marcas comerciais,<br/>
                marcas de serviço e/ou marcas registradas da Riot Games, Inc.    
            </p>


            <ul className={styles.footer_links}>
                <li><a href="">POLÍTICA DE PRIVACIDADE</a></li>
                <li><a href="">TERMOS DE SERVIÇO</a></li>
                <li><a href="">PREFERÊNCIA DE COOKIES</a></li>
            </ul>
            
            <div className={styles.footer_classification}>
                <Image src={logo} alt="" width={200}/>
            </div>
    </footer>

    );
}