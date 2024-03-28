# Inleiding {#3FE27A0C}

**TODO:** Paul Jansen vragen om een inleiding te schrijven.

In de keten van plan tot publicatie van het DSO kan machine-leesbare informatie
aan Regelingen worden toegevoegd in de vorm van OW-objecten. De objecten die
kunnen worden toegevoegd zijn vastgelegd in het Informatiemodel Omgevingswet
(IMOW) en staan in dit document beschreven. Het IMOW is gebaseerd opet
conceptuele model CIM-OW [[CIMOW]]. CIM-OW beschrijft het DSO op een conceptueel
niveau.

In paragraaf <a href='#7148BD3C'>1.1</a> wordt een context geboden van de
standaard. Paragraaf <a href='#28F55C8C'>1.2</a> bevat de leeswijzer.

## Context standaard {#7148BD3C}

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

**TODO:** eerst paragraaf herschrijven.

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

Er zijn verschillende scenario's waarmee met STOP een Regeling via
een Aanlevering kan wijziging. Deze scenario's staan beschreven in
Hoofdstuk [7](#210F8E1C).

## Leeswijzer {#28F55C8C}

Dit document is als volgt opgebouwd: . Hoofdstuk 2 bevat de gegevensdefinites van OW-objecten. Hoofdstuk <a href='#3F5FA62D'>3</a> gaat gedetailleerd in op hoe de
OW-bestanden er uit dienen te zien en geeft een XML-beschrijving van ieder
bestand dat aangeleverd kan worden. Hoofdstuk <a href='#126CC8D0'>4</a> beschrijft
implementatiekeuzes die in het IMOW gemaakt zijn. Hoofdstuk <a href='#2577D13E'>5</a>
beschrijft enkele aspecten uit STOP die relevant zijn voor de werking van OW en
geeft richtlijnen over de wijze waarop OW zich verhoudt tot STOP. Hoofdstuk
<a href='#210F8E1C'>7</a> beschrijft het wijzigen van OW-objecten.

#

**TODO:** Hoofdstuk toevoegen met uitgangspunten modellering. zie <https://docs.geostandaarden.nl/dso/dso-cim-op/#uitgangspunten-voor-modellering>

## Begrippen

**TODO:** begrippenlijst uitbreiden.

- <dfn>Regeling</dfn>: Een regeling beschrijft algemeen geldende voorschriften die vastgesteld worden via een besluit van algemene strekking. (bron: [STOP 2.0](https://koop.gitlab.io/STOP/standaard/2.0.0-rc/begrippenlijst_regeling.html) )