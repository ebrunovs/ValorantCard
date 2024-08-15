import styles from "../style/dropdownmenu.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'; 

export default function DropDownMenu(){
    return (
        <div className={styles.dropdown}>
            <a href="#" className={styles.dropdownHover}>MAIS
            <FontAwesomeIcon icon={faCaretDown} className={styles.arrow}/>
            </a>
          <ul className={styles.dropdownMenu}>
            <li><a href="#ESPORTS">ESPORTS</a></li>
            <li><a href="#COMUNIDADE">COMUNIDADE</a></li>
            <li><a href="#ÁREADOARTISTA">ÁREA DO ARTISTA</a></li>
          </ul>
        </div>
      );
}