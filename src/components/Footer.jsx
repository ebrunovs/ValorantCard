import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import styles from '../style/footer.module.css'
import icon from '../../public/logovalorant.png'
import logo from '../../public/logo_riot.png'
import indicativa from '../../public/indicativa.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_info}>
                <a href="">BAIXE O JOGO</a>
                <a href="">TORNEIOS INDEPENDENTES</a>
                <a href="">BAIXE O APLICATIVO DE CELULAR RIOT MOBILE</a>
            </div>
            <div className={styles.footer_social}>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#"><FontAwesomeIcon icon={faDiscord} /></a>
            </div>
            <div className={styles.footer_logos}>
                <Image className={styles.riot} src={logo} alt="Logo RIOT"  />
                <Image className={styles.valorant} src={icon} alt="Logo Valorant"  />
            </div>


            <p className={styles.footer_copyright}>
                &copy; 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT e todos os logotipos associados são marcas comerciais,<br />
                marcas de serviço e/ou marcas registradas da Riot Games, Inc.
            </p>


            <ul className={styles.footer_links}>
                <li><a href="">POLÍTICA DE PRIVACIDADE</a></li>
                <li><a href="">TERMOS DE SERVIÇO</a></li>
                <li><a href="">PREFERÊNCIA DE COOKIES</a></li>
            </ul>

            <div className={styles.footer_classification}>
            <div className={styles.footer_bgclassification}>
                <Image className={styles.footer_img_class} src={indicativa} alt="Classificação indicativa" width={200} />
            </div>
            </div>
        </footer>

    );
}