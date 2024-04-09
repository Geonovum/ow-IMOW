# Inleiding {#H1-Inleiding}

<!-- TODO: Paul Jansen vragen om een inleiding te schrijven. -->

In de keten van plan tot publicatie van het DSO kan machine-leesbare informatie
aan Regelingen worden toegevoegd in de vorm van OW-objecten. De objecten die
kunnen worden toegevoegd zijn vastgelegd in het Informatiemodel Omgevingswet
(IMOW) en staan in dit document beschreven. Het IMOW is gebaseerd opet
conceptuele model CIM-OW [[CIMOW]]. CIM-OW beschrijft het DSO op een conceptueel
niveau.

De eerste [ paragraaf](H1-P0-ReleaseNotes) beschrijft de belangrijkste wijzigingen van het IMOW ten opzichte van versie 3.0.1. De volgende paragrafa beschrijft de [context](#H1-context') van het model en daarna volgt de [leeswijzer](#H1-Leeswijzer).

## Wijzigingen sinds versie 3.0.1 {#H1-P0-ReleaseNotes}

Hieronder volgt een overzicht van de belangrijkste wijzigvoorstellen die in deze consultatie worden voorgelegd. Veel van de voorgestelde wijzigingen zijn al met  diverse ketenpartners besproken. Door deze consultatieversie te publiceren verwachten we ze in samenhang met een breed publiek te kunnen delen. De resultaten van deze consultatie zullen verwerkt worden in het verdere besluitvormingsproces.

### IMOW versienummer in aanlevering gaat gebruikt worden

Tot deze versie van het IMOW kon aan het aanleverkoppelvlak van de LVBB slechts één versie van het IMOW gebruikt worden. Met ingang van deze versie bevat het IMOW een versienummer waaraan het stelsel kan zien aan welke versie van het IMOW de aanlevering voldoet. 

Deze wijziging zit in de paragraaf: TODO

### Geen annotaties meer op divisie niveau

In eerdere versies van het IMOW was het mogelijk om vrije tekst te annoteren op divisie-niveau waarbij de semantiek was dat de annotaties op een divisie geldig waren voor alle onderliggende tekstelement. Implementatie hiervan bleek lastig en foutgevoelig. In deze versie kun je alleen nog annoteren op een Divisietekst.

### Het attribuut hoogte uit Locatie verwijderen

Hiermee wordt de werkafspraak die het gebruik van het attribuut hoogte verbiedt opgenomen in het IMOW.

### Verwijderen van de klasse SymbolisatieItem

De bestaande werkafspraak om de klasse SymbolisatieItem niet te gebruik wordt hiermee opgenomen in het IMOW. In een volgende versie van het IMOW komt een klasse met vergelijkbare functionaliteit. Onderdeel van de migratie naar deze nieuwe situatie is om allen SymbolisiatieItem objecten in het DSO te verwijderen. Omdat er in Productie geen SymbolisatieItem objecten zijn zal de impact hiervan gering zijn.


### OW-aanlevering heeft extra kenmerk expressionIdentifier

### OW-objecten worden automatisch beëindigd bij het intrekken van een regeling

In eerdere versies van het IMOW werd beschreven dat bij het intrekken van een regeling het bevoegd gezag zelf verantwoordelijk is voor het beëindigen van de aan de regeling gekoppelde OW-objecten. Deze wijziging zorg ervoor dat die OW-objecten automatisch worden ingetrokken.

Het voordeel van deze wijziging is dat het intrekken van een regeling eenvoudiger wordt.

Deze wijziging heeft vooral impact op de volgende [paragraaf](#5952605C).

### Het attribuut idealisatie moet dezelfde waarde hebben voor alle Juridische regels

Het attribuut idealisatie moet dezelfde waarde hebben voor alle Juridische regels bij een
Regeltekst / alle Tekstdelen bij een Divisie of een Divisietekst

### Waarschuwing toevoegen voor geometrie buiten het ambtsgebied

### Schrappen van het veld procedureStatus in een OW-object

De waarde van het veld procedureStatus in een IMOW object is af te leiden uit het STOP deel van een aanlevering en is redundant. Dit kenmerk wordt geschrapt uit het IMOW.

### Werkafspraken voor Normwaarde in Norm

- Van de drie kenmerken kwalitatieveWaarde, kwantitatieveWaarde en waardeInRegeltekst is er precies één ingevuld.
- Alleen normwaarden waarvan per individueel punt van de locatie te bepalen zijn of ze geldig zijn zijn toegestaan. 
- De locaties van een Norm mogen elkaar niet overlappen.

## Context standaard {#H1-context}

Wanneer het bevoegd gezag een Regeling (bijvoorbeeld een omgevingsplan) vaststelt
gebeurt dit via een besluit dat het bevoegd gezag digitaal aan de Landelijke
Voorziening Bekendmaken en Beschikbaar stellen (LVBB) aan moet leveren. Het IMOW
is onderdeel van de standaard die regels voor een aanlevering vastlegt. Onderstaand is een lijst met documenten die relevant zijn vanuit het perspectief van IMOW:

- Een aanlevering heeft het formaat van een ZIP bestand die je aanbiedt aan de
  LVBB. Het LVBB bronhouderkoppelvlak [[LVBBBHKV]] schrijft de structuur van
  het ZIP bestand voor.
- De Standaard Officiële Publicaties (STOP) [[STOPIC]] legt de documentstructuur
 van de tekst van het
  besluit en <a>regeling</a> van de aanlevering vast. Ook legt STOP
  metadata voor de verwerking van het besluit en beschrijft STOP
  hoe geografische informatieobjecten (GIO’s) moeten worden
  aangeleverd.
- Het IMOW (dit document) beschrijft het verrijken van een regeling
  in DSO-verband middels annotaties.
- De IMOW.xsd's leggen het XML formaat vast waarmee de OW-objecten moeten worden
  uitgewisseld.
- Toepassingsprofielen omgevingsdocumenten (TPOD’s). Een TPOD legt van een type omgevingsdocument vast hoe STOP en IMOW moeten worden toegepast. of Een TPOD legt van een type omgevingsdocument vast welke van de mogelijkheden van STOP en IMOW mogen worden gebruikt en op welke wijze. Er zijn toepassingsprofielen voor onder meer het omgevingsplan, de omgevingsverordening, de omgevingsvisie en het projectbesluit.
- De validatiematrix beschrijft regels waaraan aanleveringen dienen te
    voldoen. Dit document is zelf geen standaard maar is een opsomming van
    regels die in de standaarden beschreven staan en waar tegen gevalideerd kan
    worden
- Het Conceptuele Model Omgevingswet [[CIMOW]] en het
  Conceptuele Model Officiële Publicaties [[CIMOP]] voor veel van de objecten in het IMOW.
- Voorbeeldbestanden van correcte aanleveringen geven inzicht hoe IMOP en
  IMOW technisch toegepast kunnen worden om een nieuw omgevingsdocument aan te
  leveren.
- Waardelijsten geven aan wat de toegestane waardes zijn bij attributen van IMOW
  die aan een waardelijst gekoppeld zijn. Waardelijsten worden in de
  [Stelselcatalogus](https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten)
  gepubliceerd.
- Het IMOW maakt gebruik van andere standaarden waaronder de [[NEN3610_2022]] standaard.

<figure>
    <img src='media/OverzichtAanlevering.png'></img>
    <figcaption>Schematisch overzicht van aanlevering conform de standaard. Relatie tussen IMOP en IMOW-bestanden.</figcaption>
</figure>

## Toepassingsgebied

<!-- TODO: Eerste paragraaf herschrijven. -->

Het IMOW schrijft voor hoe je de tekst van een Regeling (zoals beschreven in STOP) machine leesbaar kunt maken door de tekst te verrijken met
annotaties in de vorm van een collectie OW-objecten en hoe je die kunt toevoegen aan een aanlevering. Onder annoteren verstaan we het toevoegen van gegevens aan (onderdelen van) een omgevingsdocument die de inhoud van het omgevingsdocument voor de computer vertalen. Door het annoteren kan een viewer locaties en andere gegevens op een kaart en bij een tekst weergeven. Het annoteren zorgt er ook voor dat een omgevingsdocument op bepaalde kenmerken doorzoekbaar is. In het geval van omgevingsdocumenten met artikelstructuur waarin regels over activiteiten worden gesteld, helpt het annoteren ook bij het verbinden van toepasbare regels, oftewel vragenbomen, aan regels met locaties. Activiteiten spelen een centrale rol in het DSO en deze worden verrijkt met duiding op de kaart de naam van de activiteit en de activiteitregelkwalificatie. Ook functies of
beperkingengebieden worden geduid. De gegevens die aangeleverd worden vanuit het IMOW helpen
  de buitenwereld met het op een kaart terugvinden van Omgevingswet-informatie.

Deze OW-objecten worden
tegelijk met de tekst van een Besluit aan de LVBB aangeleverd. De koppeling
gebeurt door OW-objecten te laten verwijzen naar onderdelen van de STOP tekst,
artikelen of leden, via de identificatie van die onderdelen, het wId.
OW-objecten zelf kunnen weer gekoppeld zijn aan andere OW-objecten waardoor er
naast de tekst ook een gestructureerde collectie objecten bij een regeling
ontstaat. Deze structuur kan bijvoorbeeld gebruikt worden om de inhoud van de
regeling via een kaart te ontsluiten.

STOP beschrijft twee soorten tekststructuren voor
omgevingsdocument: de artikelstructuur en de vrijetekststructuur.
Afhankelijk van de documentstructuur (welke je kunt gebruiken is vastgelegd in
de toepassingsprofielen) worden verschillende objecten meegeleverd. Voor beide typen
tekststructuren is een diagram toegevoegd met hierin de toegelaten objecttypen,
attributen en relaties.

Er zijn verschillende scenario's waarmee met STOP een <a>Regeling</a> via
een Aanlevering kan wijziging. Deze scenario's staan beschreven in [Hoofdstuk 7](#H7-GebruikIMOW).

# uitgangspunten van modellering

De volgende uitgangspunten zijn gehanteerd bij het opstellen van het IMOW:

- Conformiteit met Metamodel voor informatiemodellering, MIM 1.1 [[MIM]].
- Model is opgesteld in UML klassediagrammen. Voor algemene uitleg over UML klassediagram zie wikipedia: UML klassediagram..
- Het model is een implementatie van het [[CIMOW]] waarbij bij implementatie niet altijd gekozen is voor de structurering zoals beschreven in het CIM-OW.


## Leeswijzer {#H1-Leeswijzer}

Dit document is als volgt opgebouwd: . Hoofdstuk 2 bevat de gegevensdefinites van 
OW-objecten. Hoofdstuk <a href='#H4-Implementatie'>3</a> gaat gedetailleerd in op hoe de
OW-bestanden er uit dienen te zien en geeft een XML-beschrijving van ieder
bestand dat aangeleverd kan worden. Hoofdstuk
<a href='#210F8E1C'>7</a> beschrijft het wijzigen van OW-objecten. Hoofdstuk <a href='#2577D13E'>5</a>
beschrijft enkele aspecten uit STOP die relevant zijn voor het IMOW. 

## Begrippen

De volgende begrippen worden gebruikt in dit document

<dfn>Besluit</dfn>: Een tekst die de vaststelling of wijziging van (de geldigheid van) een regeling of informatieobject beschrijft. Met andere woorden: Een besluit beschrijft precies hoe een BG een nieuwe regeling vaststelt, wijzigingen op een regeling doorvoert of de inwerkingtreding van een regeling of regelingversie bepaalt. (bron: [STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_besluit.html))


<dfn>Bronhouderkoppelvlak</dfn>:  Het bronhouderkoppelvlak is een technische voorziening tussen de LVBB (Landelijke Voorziening Bekendmaken en Beschikbaar stellen) en (software van) een bevoegd gezag. In dat koppelvlak worden technische en inhoudelijke standaarden toegepast, waardoor inhoudelijke, proces- of foutinformatie tussen de systemen kan worden uitgewisseld. (bron: [STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_bronhouderkoppelvlak.html))

<dfn>Regeling</dfn>: Een regeling beschrijft algemeen geldende voorschriften die vastgesteld worden via een besluit van algemene strekking. (bron: [STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_regeling.html))
