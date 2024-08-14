import Image from "next/image";
import styles from "../style/page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.margins}>
      <h1 className={styles.title}>ARMAS</h1>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <div className={styles.lcard}>
            <div className={styles.card}>
              <div className={styles.intocard}>
                BLOCO AQUI
              </div>
            </div>
          </div>
          <button className={styles.sendcard}>ENVIAR</button>
        </div>
        <div className={styles.rcards}>
          <div className={styles.rightside}>
            <div className={styles.line_guns}>
              <span className={styles.text}>Pesquise pelo modelo da Arma</span>
              <input className={styles.custom_input} type="search" placeholder="Digite o modelo da arma" />
            </div>
            {/* <div className={styles.rcard}>
              <span className={styles.text}>Cor de Fundo</span>
              <div>
                <button>Branco</button>
                <button>Preto</button>
                <button>Azul</button>
                <button>Vermelho</button>
              </div>
              <div>
                <span>Formato Grande</span>
                <button id="toggleButton" class="toggle-btn disabled">Disable</button>
              </div>
              <div>
                <span>Formato Grande</span>
                <button id="toggleButton" class="toggle-btn disabled">Disable</button>
              </div>
              <div>
                <span>Cor do Texto</span>
                <div>
                  <button>Branco</button>
                  <button>Preto</button>
                </div>
              </div>
            </div> */}
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
                  <input className={styles.custom_inp}/>
                </label>
                <label className={styles.custom_text_input}>
                  <span className={styles.custom_text}>Autor:</span>
                  <input className={styles.custom_inp}/>
                </label>
                <label className={styles.custom_text_input}>
                  <span className={styles.custom_text}>Atributos:</span>
                  <input className={styles.custom_inp}/>
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
