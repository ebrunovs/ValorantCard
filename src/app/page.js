"use client";

import React, { useState } from 'react';
import styles from "../style/page.module.css";
import Image from 'next/image';
import lineguns from '../../public/lineguns.jpg';
import upload from '../../public/upload.png';

export default function Home() {

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Oculta o alerta após 3 segundos
  };

  return (
    <main className={styles.main}>
      <section className={styles.margins}>
        <div className={styles.breadcrumbs}>
          <span>Home</span>
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
                <p className={styles.ps}>Esta linda coleção trás um ar mais &apos;infernal&apos; que pune seus inimigos de forma majestosa</p>
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
                  <span className={styles.tooltiptext}>Digite o modelo, linha ou personagem no qual sua arte teve como base.</span>
                </div>
                <input
                  className={styles.custom_input}
                  type="search"
                  placeholder="Digite o tipo do modelo"
                />
              </div>
              <div className={styles.upload}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div>
                    <div className={styles.cover}>
                      <h2 className={styles.h2}>Capa</h2>
                      <p className={styles.p}> Formatos: png, .jpg</p>
                    </div>
                    <label className={styles.custom_upload}>
                      <div className={styles.fupload}>
                        <Image className={styles.iupload} src={upload} alt="Icone de Upload" />
                        <p className={styles.click_here}>Arraste um arquivo ou clique aqui</p>
                      </div>
                    </label>
                  </div>
                  <button type="submit" className={styles.button}>
                    <p className={styles.send}>Subir Imagem</p>
                  </button>
                </form>
              </div>
              {showAlert && <div className={styles.alert}>Upload Concluído ✓</div>}
              <div>
                <form className={styles.line_guns}>
                  <label className={styles.custom_text_input}>
                    <span className={styles.custom_text}>Titulo:</span>
                    <input className={styles.custom_input} />
                  </label>
                  <label className={styles.custom_text_input}>
                    <span className={styles.custom_text}>Artista:</span>
                    <input className={styles.custom_input} />
                  </label>
                  <label className={styles.custom_text_input}>
                    <span className={styles.custom_text}>Atributos:</span>
                    <input className={styles.custom_input} />
                    <div className={styles.chips_container}>
                      <div className={styles.chip}>FUZIL</div>
                      <div className={styles.chip}>ESCOPETA</div>
                      <div className={styles.chip}>ARMA LEVE</div>
                      <div className={styles.chip}>FOGO</div>
                      <div className={styles.chip}>FACAS TÁTICA</div>
                      <div className={styles.chip}>CAOS</div>
                      <div className={styles.chip}>METRAPLHADORA</div>
                      <div className={styles.chip}>VERMELHO</div>
                      <div className={styles.chip}>SUBMETRALHADORA</div>
                      <div className={styles.chip}>LARANJA</div>
                      <div className={styles.chip}>FUZIL DE PRECISÃO</div>
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
