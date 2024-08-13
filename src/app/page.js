import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>ARMAS</h1>
      <div>
        <div>
          BLOCO AQUI
        </div>
        <button>ENVIAR</button>
      </div>
      <div>
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
    </main>
  );
}
