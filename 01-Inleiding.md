# Inleiding {#H01-Inleiding}

Het Informatiemodel Omgevingswet (IMOW) is de toepassing van het CIM-OW op het
niveau van gegevensuitwisseling. Het is daarmee ook gekoppeld aan de Standaard
voor Officiële Publicaties (STOP) die beschrijft hoe officiële publicaties
moeten worden opgesteld en aangeleverd om te kunnen worden bekendgemaakt en
gepubliceerd binnen de Landelijke voorziening bekendmaken en beschikbaarstellen
(LVBB). 

Voor het domein van de Omgevingswet en daaraan gekoppeld Digitaal Stelsel
Omgevingswet (DSO) is een nadere specificatie van STOP opgesteld en beschreven
in: ToepassingsProfiel voor OmgevingsDocumenten (TPOD). IMOW is daarin het
informatiemodel dat is toegespitst op de keten ‘Van plan tot publicatie’ van het
DSO. IMOW bepaalt hoe machineleesbare-informatie aan Regelingen wordt toegevoegd
in de vorm van OW-objecten. IMOW is bedoeld voor bouwers van plansoftware en
voor technisch ingestelde medewerkers van bevoegde gezagen en adviesbureaus.

IMOW is als logisch model de uitwerking van het conceptuele model CIM-OW
[[CIMOW]]. In onderstaand figuur zijn de conceptuele informatiemodellen
weergegeven binnen het DSO. Het IMOW is de toepassing van het CIM-OW op het
niveau van gegevens.

<figure id="fig-StelselVanCIMs">
    <img src="media/StelselVanCIMs.png" alt="">
    <figcaption>Overzicht van alle Conceptuele Informatiemodellen in het DSO</figcaption>
</figure>

De volgende paragraaf beschrijft de [context](#H01-context) van het model en daarna volgt de [leeswijzer](#H01-Leeswijzer).

## Context standaard {#H01-context}

Wanneer het bevoegd gezag een Regeling (bijvoorbeeld een omgevingsplan) vaststelt
gebeurt dit via een besluit dat het bevoegd gezag digitaal aan de Landelijke
Voorziening Bekendmaken en Beschikbaar stellen (LVBB) aan moet leveren. Het IMOW
is onderdeel van de standaard die regels voor een aanlevering vastlegt.
Onderstaand is een lijst met documenten die relevant zijn vanuit het perspectief
van IMOW:

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

Het toepassingsgebied van IMOW is het machineleesbaar maken van teksten en locatie van regelingen binnen de omgevingswet.

Het IMOW schrijft voor hoe je de tekst van een Regeling (zoals beschreven in STOP) machine leesbaar kunt maken door de tekst te verrijken met
annotaties in de vorm van een collectie OW-objecten en hoe je die kunt toevoegen
aan een aanlevering. Onder annoteren verstaan we het toevoegen van gegevens aan
(onderdelen van) een omgevingsdocument die de inhoud van het omgevingsdocument
voor de computer vertalen. Door het annoteren kan een viewer locaties en andere
gegevens op een kaart en bij een tekst weergeven. Het annoteren zorgt er ook
voor dat een omgevingsdocument op bepaalde kenmerken doorzoekbaar is. In het
geval van omgevingsdocumenten met artikelstructuur waarin regels over
activiteiten worden gesteld, helpt het annoteren ook bij het verbinden van
toepasbare regels, oftewel vragenbomen, aan regels met locaties. Activiteiten
spelen een centrale rol in het DSO en deze worden verrijkt met duiding op de
kaart de naam van de activiteit en de activiteitregelkwalificatie. Ook functies
of beperkingengebieden worden geduid. De gegevens die aangeleverd worden vanuit
het IMOW helpen de buitenwereld met het op een kaart terugvinden van
Omgevingswet-informatie.

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


# uitgangspunten van modellering

De volgende uitgangspunten zijn gehanteerd bij het opstellen van het IMOW:

- Conformiteit met Metamodel voor informatiemodellering, MIM 1.1 [[MIM]].
- Model is opgesteld in UML klassediagrammen. Voor algemene uitleg over UML klassediagram zie wikipedia: UML klassediagram.
- Het model is een implementatie van het [[CIMOW]] waarbij bij implementatie
  niet altijd gekozen is voor de structurering zoals beschreven in het CIM-OW.

## Leeswijzer {#H01-Leeswijzer}

Dit document is als volgt opgebouwd: hoofdstuk 2 bevat de gegevensdefinites van
OW-objecten. Hoofdstuk [4](#H04-Implementatie) gaat gedetailleerd in op hoe de
OW-bestanden er uit dienen te zien en geeft een XML-beschrijving van ieder
bestand dat aangeleverd kan worden. Hoofdstuk [5](#H05-GebruikIMOW)
beschrijft het wijzigen van OW-objecten. Hoofdstuk [6](#H06-OPinIMOW)
beschrijft enkele aspecten uit STOP die relevant zijn voor het IMOW. 

## Begrippen

De volgende begrippen worden gebruikt in dit document:

<dfn>Besluit</dfn>: Een tekst die de vaststelling of wijziging van (de
geldigheid van) een regeling of informatieobject beschrijft. Met andere
woorden: Een besluit beschrijft precies hoe een BG een nieuwe regeling 
vaststelt, wijzigingen op een regeling doorvoert of de inwerkingtreding 
van een regeling of regelingversie bepaalt. (bron: [STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_besluit.html))

<dfn>BHKV</dfn>: Zie <a>Bronhouderkoppelvlak</a>.

<dfn>Bronhouderkoppelvlak</dfn>: Het bronhouderkoppelvlak (BHKV) is een
technische voorziening tussen de LVBB (Landelijke Voorziening Bekendmaken en
Beschikbaar stellen) en (software van) een bevoegd gezag. In dat koppelvlak
worden technische en inhoudelijke standaarden toegepast, waardoor inhoudelijke,
proces- of foutinformatie tussen de systemen kan worden uitgewisseld. (bron:
[STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_bronhouderkoppelvlak.html))

<dfn>Regeling</dfn>: Een regeling beschrijft algemeen geldende voorschriften die
vastgesteld worden via een besluit van algemene strekking. (bron: [STOP
2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_regeling.html))

# uitgangspunten van modellering

De volgende uitgangspunten zijn gehanteerd bij het opstellen van het IMOW:

- Conformiteit met Metamodel voor informatiemodellering, MIM 1.1 [[MIM]].
- Model is opgesteld in UML klassediagrammen. Voor algemene uitleg over UML klassediagram zie wikipedia: UML klassediagram..
- Het model is een implementatie van het [[CIMOW]] waarbij bij implementatie niet altijd gekozen is voor de structurering zoals beschreven in het CIM-OW.

# UML-Diagrammen

In de UML diagrammen van het logische model zijn de termen hoofdletter-gevoelig
en bevatten geen spaties. Deze schrijfwijze wordt ook in de beschrijving van het
model gebruikt als er aan termen wordt gerefereerd. In de diagrammen zijn de
objecttypen aan te klikken en wordt er gelinkt naar de beschrijving opgenomen in
de objectcatalogus. De in de catalogus benoemde metagegevens zoals bijvoorbeeld
Naam, Definitie, Indicatie abstract object zijn termen uit het Metamodel
Informatiemodellering [[MIM]].

Voor het inzoomen in de UML diagrammen kan het best het diagram in een apart
tabblad van de browser worden geopend. Afhankelijk van het type browser is dit
meestal via een rechtermuisklik en 'open in nieuw tabblad'.

In het volgende hoofdstuk zijn de UML diagrammen van het IMOW opgenomen. Er is
een onderverdeling naar verschillende subdomeinen gemaakt:

- Aanlevering
- OW-object
- Artikelstructuur
- Vrijetekststructuur
- Locatie
- Kaart
