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
        <div className={styles.rightside}>
          <div className={styles.rform}>
            <div>
              <span>Pesquise pelo modelo da Arma</span>
              <input type="search" placeholder="Digite o modelo da arma" />
            </div>
            <div>
              <span>Cor de Fundo</span>
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
            </div>
            <div>
              <form>
                <div>
                  <div>
                    <h2>Capa</h2>
                    <p>Formatos: png, .jpg</p>
                  </div>
                  <label>
                    <div></div>
                    <div>
                      <svg></svg>
                    </div>
                    <p>Arraste um arquivo ou clique aqui</p>
                    <span>Photo upload</span>
                  </label>
                </div>
                <button></button>
              </form>
            </div>
            <div>
              <form>
                <label>
                  <span>Titulo:</span>
                  <input></input>
                </label>
                <label>
                <span>Autor:</span>
                <input></input>
                </label>
                <label>
                <span>Atributos:</span>
                <input></input>
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
