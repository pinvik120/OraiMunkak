# 1. modul elméleti áttekintés - React és JSX

- Mi az a React?
- React projekt inicializálása
- Mi az a JSX?
- Styling alkalmazása
- A kapott HTML oldal elkészítése JSX-ben
- Project buildelése

## Mi az a React?

- A React egy JavaScript könyvtár, amelyet a Facebook fejlesztett ki 2013-ban. Célja, hogy segítse a fejlesztőket dinamikus, gyors és jól karbantartható felhasználói felületek létrehozásában.

- **Miért előnyös a használata?**

  - Újrafelhasználhatóság: A kód részeit (komponenseket) egyszer kell megírni, és több helyen felhasználhatók.
  - Virtual DOM: A React nem manipulálja közvetlenül a böngésző DOM-ját, hanem előbb egy virtuális másolatban dolgozik, így gyorsabban reagál az adatváltozásokra.
  - Állapotkezelés: Könnyű kezelni az alkalmazás változó állapotát (például egy tanmenet elemeinek listázása vagy frissítése).

- További érdekesség: A React ma már számos területen elterjedt, például mobilapp-fejlesztésben is (React Native).

## React project inicializálása

1. Nyiss meg egy terminált, és futtasd a következő parancsot: `npm create vite@latest`
2. Adj nevet a projektnek (például: `tanmenet-app`), majd válaszd ki a `React + JavaScript` opciót.
3. Lépj be a mappába, és telepítsd a függőségeket: `npm install`
4. Indítsd el a fejlesztői szervert: `npm run dev`

A **Vite** egy modern eszköz, amely gyorsabb fejlesztői környezetet biztosít, mint a régebbi build-eszközök (például Webpack). Az inicializált projekt egy alap React környezetet tartalmaz, amely azonnal futtatható.

## Mi az a JSX?

- A JSX (JavaScript XML) a React saját szintaxisa, amely lehetővé teszi HTML-szerű kód írását JavaScript-ben. Ezáltal a komponensek olvashatóbbak és karbantarthatóbbak lesznek.

- **Miért hasznos?**:
  - Könnyebb vizualizálni a komponensek struktúráját.
  - Közvetlenül összekapcsolja az adatokat és a UI-t (például változókat ágyazhatunk be HTML-be).

## Styling alkalmazása

- A styling alkalmazásához két fő megközelítést fogunk használni a projekt során:

  - **Külső CSS fájlok:** Ez a klasszikus megközelítés, amelynél a stílusokat külön .css fájlokban definiáljuk, majd ezeket importáljuk a megfelelő komponensekbe. Ez egyértelmű szervezést biztosít, különösen, ha nagyobb projekten dolgozunk. Így könnyen karbantartható a kód, és a stílusokat újra felhasználhatjuk más komponensekben.
  - **Inline styling:** Ezt a módszert kisebb, dinamikus stílusmódosítások esetén használjuk. Az inline style-ok React-ben egy JavaScript objektum formájában vannak megadva, amely lehetőséget ad arra, hogy a stílusokat dinamikusan változtassuk, például a komponens állapota alapján.

- További styling lehetőségek React-ben
  - **CSS Modules:** Lehetőséget biztosít a stílusok lokális használatára, így a komponensek saját stílusai nem fognak ütközni más komponensekkel. A .module.css fájlok különösen akkor hasznosak, ha nagyobb projektekben szeretnénk elkerülni a globális stílusok ütközését.
  - **Styled Components (vagy más CSS-in-JS megoldások):** Ez a megközelítés a komponensek szorosabb összekapcsolását teszi lehetővé a stílusokkal. Például a styled-components könyvtár használatával közvetlenül a JavaScript kódban definiálhatjuk a stílusokat, ami tiszta és moduláris kódot eredményez.
  - **Preprocesszorok (pl. SCSS, LESS):** Ha előfeldolgozókat használunk, a CSS kódunk lehet strukturáltabb, támogathat változókat, mixineket és egyéb haladó funkciókat. Ez hasznos lehet komplex projektek esetén.
  - **Tailwind CSS:** Ez egy utility-first megközelítés, amely előre definiált osztályokat biztosít. Segítségével gyorsan építhetünk fel designokat, anélkül hogy manuálisan kellene CSS-t írni.

## A project buildelése

Amikor egy React alkalmazást elkészítünk, az általában fejlesztői módban fut, ahol a kódot élőben szerkeszthetjük, és azonnal láthatjuk a változtatásokat. Azonban amikor az alkalmazást éles környezetbe szeretnénk telepíteni – például egy szerverre vagy tárhelyre –, akkor azt "buildelni" kell. Ez a folyamat optimalizálja az alkalmazást, hogy gyorsan és hatékonyan működjön a felhasználóknál.

- **Mit jelent a buildelés?**

  - Kód optimalizálása: A build folyamat összecsomagolja, minimalizálja (csökkenti a méretét), és hatékonyabbá teszi az alkalmazás kódját.
  - Fejlesztői kód eltávolítása: A fejlesztés közben használt extra eszközöket (pl. hibakereső üzeneteket) eltávolítja, hogy az alkalmazás csak azt tartalmazza, ami a működéséhez szükséges.
  - Futtatható formátum készítése: Az eredmény egy olyan statikus fájlkészlet (HTML, CSS, JavaScript), amely közvetlenül hosztolható egy webszerveren.

- **Hogyan végezzük el a buildelést?**

  - `npm run build` - Ez létrehoz egy `dist` (distribution) nevű mappát a projekt gyökérkönyvtárában. Ebben találhatók azok a fájlok, amelyeket éles környezetbe tölthetünk fel.

- **Helyi tesztelés (opcionális):**

  - A buildelt verziót tesztelhetjük egy helyi szerveren, például a Vite beépített szolgáltatásával: `npm run preview`

- **Miért fontos ez?**
  - Gyors betöltés: A buildelt alkalmazás gyorsan betöltődik a böngészőben, mert a fájlok mérete minimalizált.
  - Biztonságosabb alkalmazás: A fejlesztői kód és a hibakeresési funkciók nincsenek jelen az éles változatban.
  - Felhasználásra kész: A buildelt fájlok már közvetlenül hosztolhatók, például egy statikus tárhelyen vagy CDN-en (pl. Netlify, Vercel).
