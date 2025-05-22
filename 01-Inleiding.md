# Inleiding {#H01-Inleiding}

Het Informatiemodel Omgevingswet (IMOW) is de toepassing van het CIM-OW op het
niveau van gegevensuitwisseling. Het is daarmee ook gekoppeld aan de Standaard
voor Officiële Publicaties (STOP) die beschrijft hoe officiële publicaties
moeten worden opgesteld en aangeleverd om te kunnen worden bekendgemaakt en
gepubliceerd binnen de Landelijke Voorziening Bekendmaken en Beschikbaarstellen
(LVBB).

Voor het domein van de Omgevingswet en daaraan gekoppeld Digitaal Stelsel
Omgevingswet (DSO) is een nadere specificatie van STOP opgesteld en beschreven
in: ToepassingsProfiel voor OmgevingsDocumenten (TPOD). IMOW is daarin het
informatiemodel dat is toegespitst op de keten ‘Van plan tot publicatie’ van het
DSO. IMOW bepaalt hoe machineleesbare-informatie aan Regelingen wordt toegevoegd
in de vorm van OW-objecten. IMOW is bedoeld voor bouwers van plansoftware en
voor technisch ingestelde medewerkers van bevoegde gezagen en adviesbureaus.

IMOW is als logisch model de uitwerking van het conceptuele model CIM-OW
[[CIMOW]]. In [Figuur 1](#fig-StelselVanCIMs) zijn de conceptuele informatiemodellen
weergegeven binnen het DSO. Het IMOW is de toepassing van het CIM-OW op het
niveau van gegevens.

<figure id="fig-StelselVanCIMs">
    <img src="media/StelselVanCIMs.png" alt="">
    <figcaption>Overzicht van alle Conceptuele Informatiemodellen in het DSO</figcaption>
</figure>

De volgende paragraaf beschrijft de [context](#H01-context) van het model en daarna volgt de [leeswijzer](#H01-Leeswijzer).

## Context standaard {#H01-context}

Wanneer het bevoegd gezag een Regeling vaststelt of wijzigt
gebeurt dit via een besluit dat het bevoegd gezag digitaal aan de Landelijke
Voorziening Bekendmaken en Beschikbaar stellen (LVBB) aan moet leveren. Het IMOW
is onderdeel van de standaard die regels voor een aanlevering vastlegt.
Hieronder staat een lijst met documenten en opmerkingen die relevant zijn vanuit
het perspectief van IMOW:

- Een aanlevering heeft het formaat van een ZIP bestand die je aanbiedt aan de
  LVBB. Het LVBB bronhouderkoppelvlak [[LVBBBHKV13]] schrijft de structuur van
  het ZIP bestand voor.
- De Standaard Officiële Publicaties ([STOP](https://standaarden.overheid.nl/stop)) legt de documentstructuur
 van de tekst van het
  besluit en <a>regeling</a> van de aanlevering vast. Ook legt STOP
  metadata voor de verwerking van het besluit en beschrijft STOP
  hoe geografische informatieobjecten (GIO’s) moeten worden
  aangeleverd.
- De IMOW.xsd's leggen het XML formaat vast waarmee de OW-objecten moeten worden
  uitgewisseld.
- Toepassingsprofielen omgevingsdocumenten (TPOD’s). Een TPOD legt voor een type omgevingsdocument vast welke van de mogelijkheden van STOP en IMOW moeten c.q. mogen worden gebruikt en op welke wijze. Er zijn toepassingsprofielen voor onder meer het omgevingsplan, de omgevingsverordening, de omgevingsvisie en het projectbesluit.
- De validatiematrix beschrijft regels waaraan aanleveringen dienen te
  voldoen. Dit document is zelf geen standaard maar is een opsomming van
  regels die in de standaarden beschreven staan. Op veel van de regels in de
  validatiematrix gebeurt een automatische controle, zodat een aanlevering die
  niet aan de regels voldoet wordt afgekeurd. Echter, automatische controle is
  niet altijd mogelijk of geïmplementeerd. In die gevallen is het de verantwoordelijkheid
  van het bevoegd gezag om aan de regel te voldoen.
- Het Conceptuele Model Omgevingswet [[CIMOW]] en het Conceptuele Model Officiële
  Publicaties [[CIMOP]] leggen de conceptuele basis voor het IMOW.
- Waardelijsten geven aan wat de toegestane waardes zijn bij attributen van IMOW
  die aan een waardelijst gekoppeld zijn. Waardelijsten worden in de
  [Stelselcatalogus](https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten)
  gepubliceerd.
- Het IMOW maakt gebruik van de [[!NEN3610_2022]] standaard.
- Voorbeeldbestanden van correcte aanleveringen geven inzicht hoe IMOP en
  IMOW technisch toegepast kunnen worden om een nieuw omgevingsdocument aan te
  leveren.

<figure>
    <img src='media/OverzichtAanlevering.png'></img>
    <figcaption>Schematisch overzicht van aanlevering conform de standaard. Relatie tussen IMOP en IMOW-bestanden.</figcaption>
</figure>

## Toepassingsgebied

Het toepassingsgebied van IMOW is het machineleesbaar maken van teksten en
locaties van regelingen binnen de Omgevingswet.

Het IMOW schrijft voor hoe je de tekst van een Regeling (zoals beschreven in STOP)
machineleesbaar kunt maken door de tekst te verrijken met
annotaties in de vorm van een collectie OW-objecten en hoe je die kunt toevoegen
aan een aanlevering. Onder annoteren verstaan we het toevoegen van gegevens aan
(onderdelen van) een omgevingsdocument die de inhoud van het omgevingsdocument
voor de computer vertalen. Door het annoteren kan een viewer locaties en andere
gegevens op een kaart en bij een tekst weergeven. Het annoteren zorgt er ook
voor dat een omgevingsdocument op bepaalde kenmerken doorzoekbaar is. In het
geval van omgevingsdocumenten met artikelstructuur waarin regels over
activiteiten worden gesteld, helpt het annoteren ook bij het verbinden van
toepasbare regels, oftewel vragenbomen, aan regels met locaties. Activiteiten
spelen een belangrijke rol in het DSO en deze worden verrijkt met duiding op de
kaart de naam van de activiteit en de activiteitregelkwalificatie. Ook gebieden 
worden geduid. De gegevens die aangeleverd worden vanuit
het IMOW helpen de buitenwereld met het op een kaart terugvinden van
Omgevingswet-informatie.

Deze OW-objecten worden
tegelijk met een Besluit aan de LVBB aangeleverd. De koppeling
gebeurt door OW-objecten te laten verwijzen naar onderdelen van de STOP tekst via
de identificatie van die onderdelen, het wId.
OW-objecten zelf kunnen weer gekoppeld zijn aan andere OW-objecten waardoor er
naast de tekst ook een gestructureerde collectie objecten bij een regeling
ontstaat. Deze structuur kan bijvoorbeeld gebruikt worden om de inhoud van de
regeling via een kaart te ontsluiten.

STOP beschrijft twee soorten tekststructuren voor
omgevingsdocumenten: de artikelstructuur en de vrijetekststructuur.
De artikelstructuur moet worden gebruikt voor regelingen die zijn opgebouwd uit
één of meer artikelen die regels bevatten. De vrijetekststructuur wordt gebruikt
voor regelingen met een vrijere opzet waarin geen artikelen en regels voorkomen.
Per tekststructuur is een set OW-objecten beschikbaar. Voor beide typen
tekststructuren is een diagram toegevoegd met hierin de toegelaten objecttypen,
attributen en relaties.

## Begrippen

De volgende begrippen worden gebruikt in dit document:

<dfn>Besluit</dfn>: Een tekst die de vaststelling of wijziging van (de
geldigheid van) een regeling of informatieobject beschrijft. Met andere
woorden: Een besluit beschrijft precies hoe een BG een nieuwe regeling 
vaststelt, wijzigingen op een regeling doorvoert of de inwerkingtreding 
van een regeling of regelingversie bepaalt. (bron: [STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_besluit.html))

<dfn>BHKV</dfn>: Zie <a>Bronhouderkoppelvlak</a>.

<dfn>Bronhouderkoppelvlak</dfn>: Het bronhouderkoppelvlak (BHKV) is een
technische voorziening tussen de <a>LVBB</a> en (software van) een bevoegd
gezag. In dat koppelvlak
worden technische en inhoudelijke standaarden toegepast, waardoor inhoudelijke,
proces- of foutinformatie tussen de systemen kan worden uitgewisseld. (bron:
[STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_bronhouderkoppelvlak.html))

<dfn>GIO</dfn>: Geografisch Informatie Object (bron: [STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_bronhouderkoppelvlak.html))

<dfn>LVBB</dfn>: Landelijke Voorziening Bekendmaken en
Beschikbaar stellen.

<dfn>Regeling</dfn>: De regeling van een omgevingsdocument bevat de volledige set regels of beleidsteksten die gelden in de fysieke leefomgeving, dan wel de beschrijving van wat er wordt gerealiseerd in de fysieke leefomgeving.

## Uitgangspunten van modellering

De volgende uitgangspunten zijn gehanteerd bij het opstellen van het IMOW:

- Conformiteit met Metamodel voor informatiemodellering, MIM 1.2 [[!MIM12]].
- Het IMOW is opgesteld als een UML klassediagrammen. Voor algemene uitleg
  over UML klassediagram zie wikipedia: UML klassediagram.
- Het model is een implementatie van het CIM-OW  waarbij bij implementatie
  niet altijd gekozen is voor de structurering zoals beschreven in het CIM-OW [[CIMOW]].

## Gegevensdefinitie en UML-Diagrammen

In [hoofdstuk 2](#cat) van het IMOW staan de gegevensdefinities. Dit hoofdstuk bevat
UML diagrammen waarin de objecttypen beschreven zijn. In de diagrammen zijn de
objecttypen aan te klikken en wordt er gelinkt naar de definitie en attributen van dat objecttype in
de objectcatalogus. De in de catalogus benoemde metagegevens zoals bijvoorbeeld
Naam, Definitie, Indicatie abstract object zijn termen uit het Metamodel
Informatiemodellering [[MIM12]]. Door te klikken op de attribuutnaam kom je bij de
definitie van dat attribuut met enkele metagegevens van dat attribuut volgens MIM.

**Noot:** De kenmerken 'Indicatie materiële historie' en 'Mogelijk geen waarde' die in
de catalogus vermeld staan zijn defaultwaarden uit het MIM. Ze worden  automatisch
toegevoegd aan de catalogus, ze hebben echter geen betekenis in het IMOW.

In [hoofdstuk 2](#cat) zijn de UML diagrammen van het IMOW opgenomen. Er is
een onderverdeling naar verschillende domeinen gemaakt:

- Aanlevering
- OW-object
- Artikelstructuur
- Vrijetekststructuur
- Locatie
- Kaart

## Leeswijzer {#H01-Leeswijzer}

Dit document is als volgt opgebouwd: [hoofdstuk 2](#cat) bevat de gegevensdefinities
van OW-objecten. [Hoofdstuk 3](#lis) bevat een overzicht van de gebruikte waardelijsten.
[Hoofdstuk 4](#H04-Implementatie) bescrijft hoe het IMOW technisch geïmplementeerd moet worden en gaat gedetailleerd in op hoe de
OW-bestanden er uit dienen te zien en geeft een XML-beschrijving van de aan te leveren bestanden. [Hoofdstuk 5](#H05-GebruikIMOW)
schrijft voor hoe een OW-aanlevering bij het bronhouderkoppelvlak van de LVBB moet worden
aangeleverd. [Hoofdstuk 6](#H06-OPinIMOW)
beschrijft enkele aspecten uit STOP die relevant zijn voor het IMOW.
