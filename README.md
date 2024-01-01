# p2000 ding

Nabootsing van de lichtkrant die te vinden is in menig Nederlandse brandweerkazerne.
Het laat, op basis van zelf ingestelde filters, meldingen zien vanuit P2000.

Hiervoor wordt gebruik gemaakt van de RSS feed van [112-nu.nl](https://112-nu.nl).
Volgens de website zelf mag deze informatie alleen gebruikt worden voor persoonlijke doeleinden. Respecteer dit.

## Installatie

Benodigdheden zijn Node.js met NPM.
Installeer de benodigde packages met `npm install`.

## Gebruik

Start de applicatie met `npm start`.
Dit opent een scherm met Electron.
Meldingen zullen automatisch worden opgehaald en getoond.
Een nieuwe melding zal over de oude heen worden getoond.
Om deze weg te halen, en terug te keren naar de tijd en datum, klik je op het scherm. Meldingen kunnen ook vanzelf verdwijnen, zie [Configuratie](#configuratie).
Om het geluid aan of uit te zetten, klik je op de tekst "OPROEP / ALARM". Als het geluid uit staat, is deze tekst een beetje donkerder.

## Configuratie

De configuratie is te vinden in `config.example.json`. Hierin staan de volgende opties:

```json
{
  "filters": [],
  "enableAMB": true,
  "enableBCall": true,
  "checkForFilters": false,
  "timeout": false
}
```

`filters` - Array van strings. Deze strings worden letterlijk gezocht in de meldingstekst.
`enableAMB` - Boolean. Geeft aan of ook ambulancemeldingen getoond moeten worden.
`enableBCall` - Boolean. Geeft aan of ook B-ritten getoond moeten worden.
`checkForFilters` - Boolean. Geeft aan of de filters gecontroleerd moeten worden.
`timeout` - Boolean of nummer. Geeft aan of de meldingen na een bepaalde tijd moeten verdwijnen. Als dit een nummer is, is dit het aantal milliseconden dat de melding getoond wordt.

Kopiëer dit bestand naar `config.json` en pas de waarden aan naar wens.
Configuratie kan aangepast worden zonder de applicatie opnieuw te starten.
