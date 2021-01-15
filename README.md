# Slutprojektet
Välkommen till den förinställda kodbasen för slutprojektet.
Se filen `./src/sketch.ts` för hur ni ska börja skriva er kod!

Kom ihåg att använda git!

## Dokument & Artifakter
All dokument skall finnas i projektet som faktiska filer vid inlämningen. Det finns en mapp `./documents` som alla dokumenten skall sparas i.

Gå in i mappen och läs vidare där!

## Utveckling
### Installation
Först behöver ni köra kommandot `npm i` för att installera nödvändiga moduler (p5, typescript, etc).

### Starta projektet
Kör kommandot `npm start` för att starta projektet och se det live i din webbläsare!

### Debugger
Det är starkt rekomenderat att ni använder debug-verktyget i VSCode för att hitta och lösa problem. Metoden vi primärt har använt tidigare är att skriva `console.log` men vi kan bli mer effektiva!

Debuggern låter er stanna programmet och stega rad för rad samtidigt som ni kan titta på vad variablerna innehåller. Det är speciellt användbart när ni arbetar med funktioner som anropas 60 gånger per sekund - console overload otherwise... 🤯

#### Starta Debuggern
För att starta debuggern måste du första ladda hem tilläget "Debugger for Chrome" som finns under "Extensions" här i VSCode.
Därefter tycker du `F5` för att starta debuggern, se dock till att du har startat projektet innan (`npm start`)!

Ett nytt fönster kommer att öppnas som behöver användas för att få koden att stanna vid utsatta debugg-punkter.

### Potentiella problem
Versionen av p5.js är 1.1.9 medan senaste version av typescript endast är uppdaterad till 0.9.1. Detta skulle kunna orsaka problem men framför allt kan det vara så att ni hittar något i p5's dokumention som inte finns tillgängligt i detta projektet.

Typings för de globala variablerna relaterat till p5.sound fungerar tyvärr inte - exempel finns för hur ni kan kringå detta.

## TODO
Lägg till ytterliggare information som är specifikt för ert projekt!

## Falling star

# Spelbeskrivning
Willow är en liten tjej som precis tappat bort sin käraste ägodel, sitt favoritgosedjur. Hon måste nu fånga stjärnorna som faller för att hennes önskan om att få tillbaka sitt gosedjur ska slå in. ​ ​

I det här spelet kontrollerar du Willow och hjälper henne samla stjärnorna. Men stjärnor är inte det enda som faller från himlen. Du måste också hjälpa Willow att undvika de sylvassa fallande spikarna. Träffas hon av en spik försvinner ett liv. Om du är extra alert kan du hinna fånga bonusliv som också faller från himlen emellanåt. ​​

När dina liv tar slut är spelet över, har du då samlat tillräckligt många stjärnor slår Willows önskan in och hon får tillbaka sitt gosedjur. 

## Features
Stjärna ger X poäng
Spik tar 1 liv, minus Stjärnas poäng samt gör spelaren långsammare några sekunder
Hjärta ger 1 i liv samt boostar speed i några sekunder
Objektens fallhastighet är random mellan 4-9
Objektens start är random på x-axeln i top

Stjärnor och Spikar har en respawn tid på 1.5 sekunder
När 50 poäng är samlat blir respawn tiden 1 sekund men den kommer även sjunka ju mer poäng du samlar.

Liv har en respawn tid på 15 sekunder.
När man bara har 1 liv, kommer hjärtan falla var 5 sekund
Så fort man får ett hjärta återgår respawn till 15 sekunder.
# Skapare av spelet
[Amanda](https://github.com/amandasamuelsson) 
[Jacob](https://github.com/jv98)
[Malin](https://github.com/msmalinosterberg)
[Moa](https://github.com/stonetwix)
[Nicklas](https://github.com/Nicklas-Holmqvist)
[Oliver](https://github.com/olivernygren)

# Spellänk
[Testa spelet](https://falling-stars.netlify.app/)