# Inleiding {#3FE27A0C}

Dit document beschrijft het Informatiemodel Omgevingswet (IMOW) voor het in de keten van plan tot publicatie toekennen van machine-leesbare informatie aan Regelingen. Het IMOW implementeert het conceptuele model CIM-OW. CIM-OW hoort bij de reeks conceptuele modellen waarop de ketens van het Digitaal Stelsel Omgevingswet (DSO) gebaseerd zijn. Het IMOW legt vast welke objecten aan het DSO kunnen worden aangeleverd. 

In paragraaf <a href='#7148BD3C'>1.1</a> wordt een context geboden van de standaard. Paragraaf <a href='#6AB1D937'>1.2</a> verwijst naar de versies van standaarden die gebruikt zijn voor deze standaar. Paragraaf <a href='#28F55C8C'>1.3</a> bevat de leeswijzer.<br/>
## Context standaard {#7148BD3C}

Wanneer je in de context van de Omgevingswet als bevoegd gezag een Regeling (bijvoorbeeld een Omgevingsplan) wilt wijzigen doe je dit via een aanlevering aan de LVBB, de landelijke voorziening bekendmaken en beschikbaar stellen. Vrijwel altijd bevat die aanlevering een Besluit. De structuur van de aanlevering is vastgelegd in verschillende standaarden:
 - Het <a href='https://koop.gitlab.io/lvbb/bronhouderkoppelvlak/' target='_blank'>LVBB bronhouderkoppelvlak</a> schrijft voor welke bestanden er in de aanlevering moeten zitten wat voor eisen er zijn aan de namen van de bestanden etc.
 - De STOP Standaard IC [[STOPIC]]  legt de documentstructuur van de tekst van het besluitdeel van de aanlevering vast. Ook beschrijft deze standaard veel metadata voor de verwerking van het besluit. Verder beschrijft de STOP standaard hoe geografische informatieobjecten (GIO’s) moeten worden aangeleverd.</l
 - Het IMOW (dit document) beschrijft hoe de tekstonderdelen van een regeling te annoteren zijn, zodat ze beter verwerkt (en op een kaart getoond) kunnen worden in het DSO. Een annotatie bestaat uit een OW-object  dat gekoppeld is aan identificeerbare onderdelen van de tekst. Het IMOW is bedoeld voor het realiseren van functionaliteit ten behoeve van het bevragen van een regeling in DSO-verband. Data zijn hiervoor bezien van uit geografisch perspectief. Bij een IMOW-aanlevering kun je denken aan het duiden van specifieke activiteiten op de kaart of het meeleveren van functies of beperkingengebieden. De gegevens die aangeleverd worden vanuit het IMOW helpen de buitenwereld in met het op een kaart terugvinden van Omgevingswet-. Dit document beschrijft hoe annotaties bij een besluit aangeleverd dienen te worden en hoe je aanlevert conform de set van IMOW.xsd’s. Deze XSD’s (XML-schema’s) worden gebruikt voor de beschrijving van XML-gebaseerde gegevensuitwisseling in het DSO. Het IMOW implementeert de objecten beschreven in het CIM-OW.</li>
 - In het [[CIMOW]] en [[CIMOP]] staan beschreven welke objecttypen het IMOW kent en hoe deze zich tot elkaar verhouden. Het CIM-OW is het leidende informatiemodel voor informatie-uitwisseling binnen het DSO.</li>
 - Het [[LVBB]] legt vast hoe het bevoegd gezag omgevingswetbesluiten kan indienen.
 -Toepassingsprofielen omgevingsdocumenten (TPOD’s). Per type omgevingsdocument is er ook een set aanvullende regels specifiek voor dat type omgevingsdocument. In de TPOD’s is opgenomen hoe die toegepast moeten worden. Toepassingsprofielen voor omgevingsdocumenten (TPOD's) beschrijven de juridische en informatiekundige context voor de specifieke omgevingsdocumenten. Voor onder meer de volgende typen omgevingsdocumenten zijn toepassingsprofielen gepubliceerd:
     - Omgevingsplan (het omgevingsdocument dat gemeenten aanleveren, het voormalige bestemmingsplan)
     - Omgevingsverordening (het omgevingsdocument dat provincies aanleveren, de voormalige provinciale verordening)
     - Waterschapsverordening (het omgevingsdocument dat waterschappen aanleveren)
     - Algemene maatregelen van bestuur/ ministeriële regeling (AMvB/MR, de omgevingsdocumenten die worden aangeleverd vanuit het rijk)
     - Projectbesluit (het omgevingsdocument waarmee een specifiek project mogelijk wordt gemaakt)
     - Omgevingsvisie (het omgevingsdocument waarmee het bevoegd gezag een visie kan maken)
     - De validatiematrix beschrijft regels waaraan aanleveringen dienen te voldoen. Dit document is zelf geen standaard maar is een opsomming van regels die in de standaarden beschreven staan en waar tegen gevalideerd kan worden
 - Voorbeeldbestanden van correcte aanleveringen. Deze geven inzicht hoe IMOP en IMOW technisch toegepast moeten worden om een nieuw omgevingsdocument aan te leveren.
 -Waardelijsten geeft aan wat de toegestane waardes zijn bij attributen van IMOW die aan een waardelijst gekoppeld zijn. Waardelijsten worden in de Stelselcatalogus (https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten) gepubliceerd.

<figure>
    <img src='media/image1.png' alt='' style='width: 100%;'></img>
    <figcaption>Schematisch overzicht van aanlevering conform de standaard</figcaption>
</figure>

## IMOW overzicht

De IMOW standaard schrijft voor hoe je de tekst van een regeling (zoals beschreven in de STOP standaard) annoteert met OW-objecten. Dit gebeurt door OW-objecten mee te sturen in een Aanlevering en deze aan tekstonderdelen van OP te koppelen via de identificatie van die tekstonderdelen, het wId. OW-objecten zelf kunnen weer gekoppeld zijn aan andere OW-objecten waardoor er naast de tekst ook een gestructureerde collectie objecten bij een regeling ontstaat. Deze structuur kan bijvoorbeeld gebruikt worden om de inhoud van de regeling via een kaart te ontsluiten. 

De STOP standaard beschrijft twee soorten tekststructuren voor omgevingsdocument: de artikelsgewijze structuur en de vrijetekststructuur. Afhankelijk van de documentstructuur (welke je kunt gebruiken is vastgelegd in de TPOD documenten) worden verschillende objecten meegeleverd. Voor beide typen tekststructuren is een diagram toegevoegd met hierin de aanwezige objecttypen, attributen en relaties.

OP-koppelingsverwijzingen zijn OW-objecten die een één-op-één tegenhanger hebben in STOP. <br/>
Een Regelobject verwijst naar een regel. Regellocatie objecten koppelen Locaties aan regels. Datatypes groeperen bij elkaar horende gegevens. Locatie objecten zijn concrete locaties. Geometrie geeft een geometrie in coördinaten. Context objecten maken geen deel uit van het IMOW  maar plaatsen de objecten van het IMOW in een bredere context.

Binnen STOP zijn er twee types van Regeling te onderscheiden met  een verschillende structuur: de vrijetekststructuur en de artikelstructuur.  Deze structuurverschillen zorgen ook voor verschil in de manier waarop ze geannoteerd zijn. De volgende twee paragrafen beschrijven de tekststructuren en hun mogelijke annotatie:


## Leeswijzer {#28F55C8C}

De rest van dit document is als volgt opgebouwd: hoofdstuk <a href='#320F8A13'>2</a> beschrijft het informatiemodel en zijn onderdelen. Verder wordt het informatiemodel in de context geplaatst van de standaard voor officiële publicaties. Hoofdstuk <a href='#5C716AFD'>3</a> bespreekt de technische implementatie en geeft hierbij aan welke bestanden er verwacht worden en beschrijft de randvoorwaarden voor het aanleveren. Hoofdstuk <a href='#3F5FA62D'>4</a> gaat gedetailleerd in op hoe de OW-bestanden er uit dienen te zien en geeft een XML-beschrijving van ieder bestand dat aangeleverd kan worden. Hoofdstuk <a href='#126CC8D0'>5</a> geeft weer waar het CIM-OW en IMOW afwijken. Hoofdstuk <a href='#2577D13E'>6</a> beschrijft enkele aspecten uit STOP die relevant zijn voor de werking van OW en geeft richtlijnen over de wijze waarop OW zich verhoudt tot STOP. Hoofdstuk <a href='#210F8E1C'>7</a> beschrijft het wijzigen van OW-objecten.<br/>
