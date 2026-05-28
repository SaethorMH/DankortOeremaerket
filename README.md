#### Teknisk dokumentation - Gruppe 7

# Dankort Øremærket

## Multimediedesign

### Links

- GitHub repository:
- Netlify host:
- Figma: https://www.figma.com/design/uK97YvZQmtDjTxSo8bThno/Eksamensprojekt---2.-Semester?node-id=42-37&p=f&t=SksoLn54j0Ri57qo-0

---

## Introduktion

I dette projekt, fik vi til opgave at skulle lave et løsningsforeslag til Dankort der skulle appelere mere til yngre voksne. For at lave hjemmesiden har vi først idéudviklet og designet i Figma, og siden har vi kodet løsningen vha. html, css og JavaScript i VS code. Udover Astro har vi brugt Supabase til at lave en database, som vi bruger i løsningen.
Da vi valgte at lave en one-pager og ikke havde så mange idéer til kompunenter lavede vi siden kun i html og ikke i Astro.

# Filbeskrivelser

### index.html

Dette er html filen i dokumentet, navngivet index.html fordi der er konventionen at startsiden hedder det. Mange programmer der bruger ens side til noget vil defaulte til index som værende startsiden.

### global.css

Dette er css dokumentet der styrer alt udseende der er på siden.

### script.js

Dette er Javascript dokumentet, her bliver der hentet fra databasen og udfyldt bank informationer.

### images/

Dette er mappen hvori vi har sat alle vores billeder, video og logo'et.

---

## Hvordan koden fungere

#### Database URL

database url er den adresse, hvor din data ligger. Det er typisk et REST-endpoint, fx fra Supabase, som returnerer JSON-data.

#### API-nøgle

apikey er adgangsnøglen, der fortæller serveren, at din app må hente data. Den sendes som header i fetch-requesten.

#### Options

options er det objekt, du giver til fetch. Her opretter du fx headers:

```
const options = {
  headers: {
    apikey: apiKey
  }
};
```

#### Fetching

fetch() bruges til at hente data fra API’et. Derefter omdannes svaret til JSON, så du kan arbejde med det i koden.

Eksempel:

```
const url = "https://din-database.supabase.co/rest/v1/Banker?select=*&limit=10";
const apiKey = "din_api_nøgle";
const options = { headers: { apikey: apiKey } };

const response = await fetch(url, options);
const data = await response.json();
console.log(data);
```

#### Udfyldning af bankdata

Når en bank bliver valgt fra søgningsfeltet så triggerer nedenstående function:

```
document.getElementById("list").addEventListener("click", (e) => {
  const item = e.target.closest(".dd-item");
  if (!item) return;
  valgteBank = item.dataset.bankId - 1;
  console.log(valgteBank);
  ...
  fillData();
});
```

Den får item.dataset.bankId fra det valgte element.
Det sidste den gør er at starte fillData();

I fillData() bliver den valgte banks data indsat i feltet for bankinformationen.

```
function fillData()
{
  let bank = data[valgteBank];
  document.querySelector("#bankLogo").innerHTML = `<img src="${bank.bankLogo}">`;
  document.querySelector("#bankNavn").innerHTML = `<h1>${bank.bankNavn}</h1>`;
  document.querySelector("#linkContainer").innerHTML =
    `<a href="${bank.bankLink}" target="_blank" id="link">Bestil Dankort</a>`;
  document.querySelector("#tider").innerHTML = `<p>${bank.aabningstider}</p>`;
  document.querySelector("#telefon").innerHTML = `<p>${bank.bankTelefon}</p>`;
}
```

#### Hvad der sker

1. url peger på hvor data hentes fra
2. apiKey identificerer din app
3. options indeholder headers og andre fetch-indstillinger
4. fetch(url, options) henter data
5. res.json() omdanner svaret til et JavaScript-objekt

---

## Navngivning

Vi er startet med at lave:

- Header
- Main
- Footer
  Inde i main vidste vi at der skulle være 5 sektioner
  De indeholder:

1. ### HeroSection

- Herovideo
- Navigations genveje

2. ### CardSection

- Små informerende kort om Dankort

3. ### OeretaellerSection

- Tæller der tæller op hvor mange penge der er blevet donéret
- Text om hvordan der bliver doneret
- Sammarbajdspartnere bånd der ruller

4. ### ZigzagSection

- 3 billeder
- 3 tekster

5. ### SkrivOpSection

- En søgefunktion hvor man kan finde sin bank og få oplysninger om hvordan man kan skrive sig op til dankort

### Custom variabler

Vi har gennemgående brugt farve variabler og skriftstørrelser variabler i css

```
:root {
  /* Color styles */
  --dankort--rød: #e21e27;
  --skifergrå: #1e1e1e;
  --limegrøn: #81d979;
  --limegrøn--pastel: #a1eaac;
  --himmelblå: #3bb7ea;
  --himmelblå--pastel: #90d9f8;
  --solsikkegul: #ffd998;
  --solsikkegul--pastel: #ffe8b6;

  /* Text-size styles */
  --h1--raleway: 40px;
  --h2--raleway: 36px;
  --h3--raleway: 32px;
  --h4--raleway: 22px;

  --paragraffer--raleway: 16px;
}
```

### Eksempler på funktioner

---

## Supabase

Supabase er en database-hosting løsning hvor man kan lave, redigere, opdatere egne databaser og trække fra dem til sine egne projekter.

### Database

I supabase kan man lave tabeller med rækker af objekter der alle indeholder de samme koloner af variabler. Her er vores database som eksempel:
<img width="1468" height="460" alt="image" src="https://github.com/user-attachments/assets/d8ebab49-38eb-4c8a-a8ce-ede5997652ec" />

### Øremærketæller

Øremærketælleren tæller op ved funktion der kører hvert 25. millisekund.
Den tager let’en taellerTal og plusser 0.01 til.

```
const talTaeller = document.querySelector("#storttal");
setInterval(function talTaeller() {
  taellerTal += 0.01;
  storttal.innerHTML = "3.213." + taellerTal.toFixed(2) + "KR";
}, 25);
```

---

### Branches

Vi har startet vores branch navne med navnet på den der har lavet den og så hvad de har lavet, fx. Saethor--skriv-dig-op

### Workflow

1. Lave en branch med et beskrivende feature-navn og med eget navn
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub

- Gentag 1-4 indtil feature er færdig

5. Merge til main KUN når det virkede

## Mulige forbedringer

- Video i højere kvalitet
- Popover til zigzag-element
- Siden skal være mere responsiv

### Gruppemedlemmer:

- Joakim Holt Braun
- Donna Yardid
- Nicolai Bo Jørgensen
- Sæthór Máni Hjálmarsson
