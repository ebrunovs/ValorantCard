import styles from "../style/page.module.css";
import Image from 'next/image';
import lineguns from '../../public/lineguns.jpg';
import info from '../../public/info.png';
import upload from '../../public/upload.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.margins}>
        <div className={styles.breadcrumbs}>
          <span>LogoValorant</span>
          <span>Comunidade</span>
          <span>Artistas</span>
          <span className={styles.current}>Envie sua Ideia para Nós</span>
        </div>
        <h1 className={styles.title}>ENVIE SEU DESIGN</h1>
        <div className={styles.container}>
          <div className={styles.leftside}>
            <div className={styles.lcard}>
              <Image className={styles.main_pincture} src={lineguns} alt="Linha de armas" />
              <div className={styles.subtitle}>
                <p className={styles.ps}>Linha Skins Primordium</p>
                <p className={styles.ps}>Types// Arsenal Completo</p>
                <p className={styles.ps}>Esta linda coleção trás um ar mais 'infernal' que pune seus inimigos de forma majestosa</p>
              </div>
            </div>
            <button className={styles.sendcard}>ENVIAR</button>
          </div>
          <div className={styles.rcards}>
            <div className={styles.rightside}>
              <div className={styles.line_guns}>
                <span className={styles.text}>Pesquise pelo modelo</span>
                <div className={styles.tooltip}>
                  <button className={styles.tp}>?</button>
                  <span className={styles.tooltiptext}>Tooltip text</span>
                </div>
                <input
                  className={styles.custom_input}
                  type="search"
                  placeholder="Digite o tipo do modelo"
                />
              </div>
              <div className={styles.upload}>
                <form className={styles.form}>
                  <div>
                    <div className={styles.cover}>
                      <h2 className={styles.h2}>Capa</h2>
                      <p className={styles.p}> Formatos: png, .jpg</p>
                    </div>
                    <label className={styles.custom_upload}>
                      <div></div>
                      <div>
                        <svg></svg>
                      </div>
                      <p className={styles.click_here}>Arraste um arquivo ou clique aqui</p>
                    </label>
                  </div>
                  <button className={styles.button}>
                    <p className={styles.send}>Enviar</p>
                  </button>
                </form>
              </div>
              <div>
                <form className={styles.line_guns}>
                  <label className={styles.custom_text_input}>
                    <span className={styles.custom_text}>Titulo:</span>
                    <input className={styles.custom_inp} />
                  </label>
                  <label className={styles.custom_text_input}>
                    <span className={styles.custom_text}>Autor:</span>
                    <input className={styles.custom_inp} />
                  </label>
                  <label className={styles.custom_text_input}>
                    <span className={styles.custom_text}>Atributos:</span>
                    <input className={styles.custom_inp} />
                    <div className={styles.chipsContainer}>
                      <div className={styles.chip}>Exemplo 1</div>
                      <div className={styles.chip}>Exemplo 2</div>
                      <div className={styles.chip}>Exemplo 1</div>
                      <div className={styles.chip}>Exemplo 2</div>
                      <div className={styles.chip}>Exemplo 1</div>
                      <div className={styles.chip}>Exemplo 2</div>
                      <div className={styles.chip}>Exemplo 1</div>
                      <div className={styles.chip}>Exemplo 2</div>
                      <div className={styles.chip}>Exemplo 1</div>
                      <div className={styles.chip}>Exemplo 2</div>
                      <div className={styles.chip}>Exemplo 1</div>
                      <div className={styles.chip}>Exemplo 2</div>
                    </div>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
