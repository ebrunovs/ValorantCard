import logo from "../../public/logo_riot.png"
import valorantIcon from "../../public/valorant_icon.png"
import Image from "next/image";
import styles from "../style/header.module.css"
import DropDownMenu from "./DropDownMenu";



export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.images}>
                    <Image src={logo} alt="Logo tipo Riot" width={85} height={23} />
                    <Image src={valorantIcon} alt="Icone Valorant" width={40} height={45} />
                </div>
                <div className={styles.list_link}>
                    <a href="">INFORMAÇÕES DO JOGO</a>
                    <a href="">MÍDIA</a>
                    <a href="">NOTICIAS</a>
                    <a href="">PLACAR</a>
                    <a href="">SUPORTE</a>
                    <DropDownMenu />
                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.input}>
                    <input type="search" placeholder="Pesquisar..." />
                </div>
                <div className={styles.divButton}>
                    <button className={styles.button}>
                        JOGUE AGORA
                    </button>
                </div>
            </div>
        </header>
    );
}