const App = () => {
  return (
    <main>
      <h1>Bevezetés a programozásba</h1>
      <hr />

      <section class="row">
        <div class="text-lg">Teljes óraszám:</div>
        <div class="row" style="gap:0.5rem">
          <button class="icon-button">+</button>
          <span class="font-semibold">32</span>
          <button class="icon-button">-</button>
        </div>
      </section>

      <section class="row">
        <div class="text-lg">Hiányzó órák:</div>
        <span class="font-semibold">29</span>
      </section>

      <hr />

      <section style="padding:0 2rem">
        <button class="temakor-button">Témakörök elrejtése</button>
        <ul class="temakor-ul">
          <li>Bevezetés a webfejlesztésbe: HTML és CSS alapok</li>
          <li>
            Fejlesztői környezetek és eszközök: Visual Studio Code, Git
            használata
          </li>
          <li>
            HTML tagek és attribútumok: weboldal-struktúra és tartalom
            kialakítása
          </li>
          <li>
            CSS alapjai: formázás, színek, box modell és reszponzív design
          </li>
          <li>JavaScript alapok: változók, események, és DOM manipuláció</li>
          <li>Projektmunka: reszponzív weboldal tervezése és fejlesztése</li>
          <li>Hibakeresési technikák: fejlesztői eszközök és validáció</li>
          <li>Projektek bemutatása és értékelése</li>
        </ul>
      </section>

      <hr />

      <form action="#">
        <div class="col">
          <input type="text" placeholder="Cím" />
          <textarea placeholder="Leírás" rows="5"></textarea>
        </div>
        <aside class="col">
          <button class="btn">Hozzáadás</button>
          <button class="btn outline">Mégsem</button>
        </aside>
      </form>

      <section class="ora-grid">
        <article class="ora">
          <header>
            <h3>1. óra</h3>
            <button class="icon-button">📝</button>
            <button class="icon-button">🗑️</button>
          </header>
          <h4>Bevezetés a webfejlesztésbe</h4>
          <p>Weboldalak működése és HTML áttekintés.</p>
        </article>
      </section>
    </main>
  );
};

export default App;
