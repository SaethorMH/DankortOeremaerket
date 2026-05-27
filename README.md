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

# Filbeskrivelser

###index.html

###global.css

###script.js

###README.md

###images

---

## Hvordan koden fungere
Vi har opdelt JavaScript, så hver side har sin egen fil.

### script.js
Bruges på forsiden. Her bliver indhold vist dynamisk, fx links eller kategorier.

### script.js
Henter data fra Rest API'et og viser en liste med opskrifter på siden.

Flow:

- Siden loader
- JavaScript bliver læst
- Data hentes fra API
- Data bliver gennemgået
- HTML bliver indsat i DOM'en
- Brugeren kan klikke på en opskrift
- recipedetails.js
- Bruges til detaljesiden. Den læser et id fra URL'en og henter derefter den rigtige opskrift fra Rest API'et.

# Felter vi bruger

* id

---
## Navngivning

### Eksempler på variabler

### Eksempler på funktioner

---

## Supabase
Supabase er en database-hosting løsning hvor man kan lave, redigere, opdatere egne databaser og trække fra dem til sine egne projekter.

### Database
I supabase kan man lave tabeller med rækker af objekter der alle indeholder de samme koloner af variabler. Her er vores database som eksempel:
<img width="1468" height="460" alt="image" src="https://github.com/user-attachments/assets/d8ebab49-38eb-4c8a-a8ce-ede5997652ec" />


### Fetching


### Søge bank funktion

### Øremærketæller


---

## Branches

### Workflow
1. Lave en branch med et beskrivende feature-navn eller med eget navn
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main når det virkede

## Mulige forbedringer
- Video i højere kvalitet
- Opover til zigzag-element
- Siden skal være mere responsiv
-

---

### Gruppemedlemmer:

- Joakim Holt Braun
- Donna Yardid
- Nicolai Bo Jørgensen
- Sæthór Máni Hjálmarsson
