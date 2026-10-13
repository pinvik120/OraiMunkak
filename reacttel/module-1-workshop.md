# 1. modul workshop - React és JSX

- Node.js telepítése
- React projekt inicializálása
- Template elkészítése JSX-ben

> [!NOTE]  
> **Feladat:**  
> Legyen létrehozva egy React projekt. A kapott HTML template-et alapul véve készítsd el ennek a JSX változatát.

<hr />

## Node.js telepítése

- Telepítsd a Node.js-t [innen](https://nodejs.org/en)
- Ellenőrizd, hogy sikeresen települt-e:

  ```sh
  node -v
  npm -v
  ```

- Ha nincs feltelepítve [Visual Studio Code](https://code.visualstudio.com/), akkor azt is telepítsd!

## React projekt inicializálása

1. Nyiss egy terminált, és futtasd a következő parancsot: `npm create vite@latest`. Ha kérdez valamit, nyomd meg az `y`-t!
2. Adj nevet a projektnek (például: `tanmenet-app`), majd válaszd ki a `React + JavaScript` opciót. (nyilakkal lehet lépni, majd enter)  
   Lehetőség van arra is, hogy a meglévő mappába hozd létre ezt a projektet. Ehhez a projekt nevének egy pontot (`.`) adj meg, ez ugyanis a jelenlegi mappára hivatkozik.
3. Nyisd meg a legenerált `tanmenet-app` projektet Visual Studio Code-ban.
4. Nyiss egy terminált a VS Code-ban, és telepítsd a függőségeket: `npm install`
5. Indítsd el a fejlesztői szervert: `npm run dev`. Az alkalmazás a [http://localhost:5173](http://localhost:5173) URL-en lesz elérhető.
6. Töröld a felesleges file-okat és mappákat: `src/assets/`, `App.css`
7. Az `src/index.css` fájlban törölj mindent. Saját CSS-ünk lesz!
8. Az `src/App.jsx` tartalma legyen csak ennyi:

   ```jsx
   const App = () => {
     return <div>Hello, ITMP!</div>;
   };

   export default App;
   ```

Akkor jó, ha az oldalon csak a "Hello, ITMP!" szöveget látod. Nem kell újraindítani a szervert, automatikusan frissül.

## Template elkészítése JSX-ben

A template-et az [/assets/template](../assets/template/) mappában találod.

1. Másold át a template `style.css` fájljának tartalmát a React project `index.css` fájljába.
2. A React projectedben keresd meg az `index.html` fájlt. és a `<title>`-t írd át erre: **Bevezetés a programozásba | Tanmenet**. Mást itt nem kell módosítanod!
3. Másold át a template `index.html` `body`-jában található HTML-t (tehát a `main`-t és ami alatta van) az `App.jsx` `return` részéhez.

   ```jsx
   const App = () => {
     return (
       <main>
         <h1>Ide jön minden!</h1>
       </main>
     );
   };

   export default App;
   ```

4. Ez így még nem fog működni, ezt át kell írni JSX-re. Ehhez csak apró módosítások fognak kelleni. Próbáld meg magadtól, ha nem megy, nézd meg a segítségeket:

<details>
<summary>1. segítség: class</summary>

Ahhoz szoktunk, hogy HTML-ben a tagekhez a `class` kulcsszóval rendelünk osztályokat. A JSX-ben ez nem így van, mivel a `class` JavaScript-ben egy "foglalt" kulcsszó, ezért a `className` attribútumot használjuk helyette. Tehát mindenhol, ahol most `class` van, át kell írni `className`-re.

</details>

<details>
<summary>2. segítség: inline style</summary>

A jelenlegi projektünkben 2 helyen használunk inline style-t. Ha HTML-ben tesszük ezt meg, akkor csak simán egy string-et használunk. Ezzel szemben JSX-ben egy JavaScript objectet kell átadni a style attribútumnak:

**HTML példa:**

```html
<div style="font-size: 12px; display: inline-block">Szia, inline style!</div>
```

**JSX példa:**

```jsx
<div style={{ fontSize: "12px", display: "inline-block" }}>
  Szia, inline style!
</div>
```

</details>

5. Ha mindez megvan, akkor látnod kell az alkalmazást az oldalon (a konzolon hiba nélkül), viszont itt még nem működik semmi.

<hr />

> [!NOTE]  
> Ha nem sikerült, a megoldást a [module-1/workshop-solution](./workshop-solution/) mappában találod.  
> Elakadás esetén fordulj a mentorodhoz!
