# Inleiding {#3FE27A0C}

In de keten van plan tot publicatie van het DSO kan machine-leesbare informatie
aan Regelingen worden toegevoegd in de vorm van OW-objecten. De objecten die
kunnen worden toegevoegd zijn vastgelegd in het Informatiemodel Omgevingswet
(IMOW) en staan in dit document beschreven. Het IMOW is gebaseerd opet
conceptuele model CIM-OW [[CIMOW]]. CIM-OW beschrijft het DSO op een conceptueel
niveau.

In paragraaf <a href='#7148BD3C'>1.1</a> wordt een context geboden van de
standaard. Paragraaf <a href='#28F55C8C'>1.2</a> bevat de leeswijzer.

## Context standaard {#7148BD3C}

Wanneer het bevoegd gezag een Regeling (bijvoorbeeld een Omgevingsplan) gebeurt
dit via een besluit dat digitaaal aan de Landelijke Voorziening Bekendmaken en
Beschikbaar stellen (LVBB) moet worden aangeleverd. Het IMOW is één van de
standaarden die het digitale formaat van een aanlevering vastlegt:

- Het LVBB bronhouderkoppelvlak [[LVBBBHKV]] schrijft voor welke bestanden er in
  de aanlevering moeten zitten wat voor eisen er zijn aan de namen van de
  bestanden etc.
- De STOP Standaard IC [[STOPIC]] legt de documentstructuur van de tekst van het
  besluitdeel van de aanlevering vast. Ook beschrijft deze standaard veel
  metadata voor de verwerking van het besluit. Verder beschrijft de STOP
  standaard hoe geografische informatieobjecten (GIO’s) moeten worden
  aangeleverd.
- Het IMOW (dit document) beschrijft hoe de tekstonderdelen van een regeling te
  annoteren zijn, zodat ze beter verwerkt (en op een kaart getoond) kunnen
  worden in het DSO. Een annotatie bestaat uit een OW-object dat gekoppeld is
  aan identificeerbare onderdelen van de tekst. Het IMOW is bedoeld voor het
  realiseren van functionaliteit ten behoeve van het bevragen van een regeling
  in DSO-verband. Bij een IMOW-aanlevering kun je denken aan het duiden van
  specifieke activiteiten op de kaart of het meeleveren van functies of
  beperkingengebieden. De gegevens die aangeleverd worden vanuit het IMOW helpen
  de buitenwereld met het op een kaart terugvinden van Omgevingswet-informatie.
- De IMOW.xsd's leggen het XML formaat vast waarmee de OW-objecten moeten worden
  uitgewisseld.
- Toepassingsprofielen omgevingsdocumenten (TPOD’s). Per type omgevingsdocument
  is er ook een set aanvullende regels specifiek voor dat type
  omgevingsdocument. Voor onder meer de volgende typen omgevingsdocumenten zijn
  toepassingsprofielen gepubliceerd:
  - Omgevingsplan (het omgevingsdocument dat gemeenten aanleveren, het
    voormalige bestemmingsplan)
  - Omgevingsverordening (het omgevingsdocument dat provincies aanleveren, de
    voormalige provinciale verordening)
  - Waterschapsverordening (het omgevingsdocument dat waterschappen aanleveren)
  - Algemene maatregelen van bestuur/ ministeriële regeling (AMvB/MR, de
    omgevingsdocumenten die worden aangeleverd vanuit het rijk)
  - Projectbesluit (het omgevingsdocument waarmee een specifiek project mogelijk
    wordt gemaakt) - Omgevingsvisie (het omgevingsdocument waarmee het bevoegd
    gezag een visie kan maken)
  - De validatiematrix beschrijft regels waaraan aanleveringen dienen te
    voldoen. Dit document is zelf geen standaard maar is een opsomming van
    regels die in de standaarden beschreven staan en waar tegen gevalideerd kan
    worden
- Het IMOW en de STOP standaard zijn implementaties van de conceptuele
  bechrijvingen in het Conceptuele Model Omgevingswet [[CIMOW]] en het
  Conceptuele Model Officiële Publicaties [[CIMOP]].
- Voorbeeldbestanden van correcte aanleveringen. Deze geven inzicht hoe IMOP en
  IMOW technisch toegepast moeten worden om een nieuw omgevingsdocument aan te
  leveren.
- Waardelijsten geeft aan wat de toegestane waardes zijn bij attributen van IMOW
  die aan een waardelijst gekoppeld zijn. Waardelijsten worden in de
  [Stelselcatalogus](https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten)
  gepubliceerd.

<figure>
    <img src='media/image1.png'  style='width: 100%;'></img>
    <figcaption>Schematisch overzicht van aanlevering conform de standaard</figcaption>
</figure>

## IMOW overzicht

Het IMOW schrijft voor hoe je de tekst van een Regeling (zoals beschreven in de
STOP standaard) machine leesbaar kunt maken door de tekst te verrijken met
annoties in de vorm van een collectie OW-objecten. Deze OW-objecten worden
tegelijk met de tekst van een Besluit aan de LVBB aangeleverd. De koppeling
gebeurt door OW-objecten te laten verwijzen naar onderdelen van de STOP tekst,
artikelen of leden, via de identificatie van die artikelen of leden, het wId.
OW-objecten zelf kunnen weer gekoppeld zijn aan andere OW-objecten waardoor er
naast de tekst ook een gestructureerde collectie objecten bij een regeling
ontstaat. Deze structuur kan bijvoorbeeld gebruikt worden om de inhoud van de
regeling via een kaart te ontsluiten.

De STOP standaard beschrijft twee soorten tekststructuren voor
omgevingsdocument: de artikelsgewijze structuur en de vrijetekststructuur.
Afhankelijk van de documentstructuur (welke je kunt gebruiken is vastgelegd in
de TPOD documenten) worden verschillende objecten meegeleverd. Voor beide typen
tekststructuren is een diagram toegevoegd met hierin de aanwezige objecttypen,
attributen en relaties.

Er zijn verschillende scenario's waarmee met de STOP standaard een Regeling via
een Aanlevering kan wijziging. Deze scenario's staan beschreven in
Hoofdstuk (7)[#5C716AFD].

## Leeswijzer {#28F55C8C}

Dit document is als volgt opgebouwd: . Hoofdstuk
<a href='#5C716AFD'>2</a> bespreekt de technische implementatie en geeft hierbij
aan welke bestanden er verwacht worden en beschrijft de randvoorwaarden voor het
aanleveren. Hoofdstuk <a href='#3F5FA62D'>3</a> gaat gedetailleerd in op hoe de
OW-bestanden er uit dienen te zien en geeft een XML-beschrijving van ieder
bestand dat aangeleverd kan worden. Hoofdstuk <a href='#126CC8D0'>4</a> geeft
weer waar het CIM-OW en IMOW afwijken. Hoofdstuk <a href='#2577D13E'>5</a>
beschrijft enkele aspecten uit STOP die relevant zijn voor de werking van OW en
geeft richtlijnen over de wijze waarop OW zich verhoudt tot STOP. Hoofdstuk
<a href='#210F8E1C'>7</a> beschrijft het wijzigen van OW-objecten.
