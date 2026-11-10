export default function Home() {
  return (
    <main>
      <article>
        <div className="ornamento" aria-hidden="true">◆</div>

        <header>
          <h1>Soneto da Felicidade</h1>
          <p className="subtitulo">um poema original</p>
        </header>

        <div className="poema">
          <p>
            A felicidade mora no instante,<br />
            no riso que amanhece sem aviso,<br />
            na luz que encontra o rosto mais distante,<br />
            no abraço que devolve o paraíso.
          </p>

          <p>
            É brisa leve, passo caminhante,<br />
            é flor que nasce à beira do improviso,<br />
            um coração sereno e confiante,<br />
            a vida inteira dentro de um sorriso.
          </p>

          <p>
            Não pede eternidade nem promessa,<br />
            apenas que se viva sem demora<br />
            o breve sol que em nossa pele começa.
          </p>

          <p>
            E quando a tarde se transforma em aurora,<br />
            feliz é quem, no amor que atravessa,<br />
            descobre o seu agora — e nele mora.
          </p>
        </div>

        <footer>Sobre a alegria de estar presente</footer>
      </article>
    </main>
  );
}
