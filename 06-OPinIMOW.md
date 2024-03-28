# Onderdelen van STOP relevant voor IMOW {#2577D13E}

Dit hoofdstuk beschrijft STOP onderdelen die relevant zijn voor het IMOW. Enkele
dingen worden toegelicht vanuit OW-perspectief, omdat de samenhang met de
OP-standaard relevant is. Paragraaf
<a href='#0B404AC6'>6.2</a> beschrijft de consolidatieinformatie uit een
Regeling. Paragraaf <a href='#4541BABA'>6.3</a> worden GIO’s beschreven.

Zie de STOP [[STOPIC]] en het CIM-OP [[CIMOP]] voor meer details.

## ConsolidatieInformatie {#0B404AC6}

In het STOP deel van de aanlevering wordt ConsolidatieInformatie meegeleverd.
De ConsolidatieInformatie bepaalt de tijdlijn versies van de regelingen en
informatieobjecten die ontstaan uit een Besluit. Diezelfde tijdlijn geldt voor
de OW-objecten.

Figuur TODO bevat toon de klasse 'Consolidatie Informatie' van het CIM-OP. Deze
bevat de informatie die noodzakelijk is om de aanlevering te consolideren tot
een Regeling. Voor IMOW zijn de volgende aspecten van belang:

- De klasse 'Beoogde regeling' bevat de identificatie van de te wijzigen Regeling.
  Deze identificatie moet overeenkomen met workIDRegeling in de OW-aanlevering.
- De relatie 'doel' verwijst naar het doelId in de OW-aanlevering.
- Uit de  klasse 'Tijdstempel' worden de geldigheidsgegevens van de OW-objecten afgeleid.

<figure>
    <img src='media/cim-op-consolidatie.png'></img>
    <figcaption>Consolidatieinformatie in STOP</figcaption>
</figure>

**TODO**: Voeg hier figuur toe uit CIM-OP voor consolidatieInformatie.

**TODO**: In de vorige versie van het IMOW stond dat er een tijdstempel beschikbaarOp zou bestaan in STOP en dat die gebruikt wordt in het DSO. Die zie ik helemaal niet in CIM-OP.

## GIO’s en Norm GIO’s {#4541BABA}

Bij het aanleveren van een besluit volgens STOP worden
geografische objecten aangeleverd als GIO’s (geografische informatieobjecten).
Dit is één van de twee soorten informatieobjecten die in STOP kunnen worden
meegeleverd (de andere zijn PDF-documenten). Figuur TODO bevat het UML diagram 
van de 'GIO versie' uit het CIM-OP. Voor IMOW zijn de volgende aspecten van belang:

- Een 'Gio vaststelling' stelt een versie van een GIO vast. Hierin heeft iedere
Geometrie een id attribuut in de vorm van een UUID. Wanneer in IMOW middels
GeometrieRef naar een Geometrie wordt verwezen wordt deze UUID gebruikt.
- Sommige GIO's bevatten informatie over normen bevatten.
- Een 'Gio vaststelling' bevat 'Geografische context' die informatie bevat over
  de context ten opzichte waarvan het GIO is vastgesteld.
- FRBRWork en FGRBExpression bevatten de identificatie van het GIO.
- Een GIO bevat één of meer Locatie objecten. Deze Locaties komen niet overeen met OW:Locatie
  ook de naam van de locatie is niet rechtstreeks gekoppeld.
- De UUID van de Geometrie wordt ontdubbeld door het DSO, kortom: de OW-Locatie
  met de noemer ‘Centrumgebied’ met geometrieReferentie 
  ‘d0993715-c485-4e63-b35d-8f68c3cbee3b’ mag in meerdere GIO’s als Locatie
  staan. Altijd moet de geometrie behorende bij
  ‘d0993715-c485-4e63-b35d-8f68c3cbee3b’ inhoudelijk dezelfde zijn.
- Indien er gebruik gemaakt wordt van groepen, dan dient iedere groep
 een symbolisatie te hebben (dit wordt vastgelegd in het vaststellingsdeel).
- Bij Norm-GIO’s dienen aanvullende gegevens vastgelegd te worden.
Hieronder informatie over de opbouw (van het geografisch deel) van
een GIO:

Indien er normen vastgelegd worden aan de OW-kant, dan bevat het GIO 'Norm informatie' en
de Locaties van het GIO bevatten een 'Normwaarde'. Hiervoor geldt:

- Bij een kwantitatieve normwaarde bevat 'Eenheid ID' de eenheid van de normwaarde. 
  Hier moet een URI ingevuld worden uit de waardelijst ‘Eenheid’.
- 'Eenheid label' bevat dan het label die getoond dient te worden bij de eenheid.
- 'Norm ID': De URI uit waardelijst ‘TypeNorm’ 
- De naam van de Norm aan de OW-kant. [OW-gegeven: naam van omgevingsnorm (3.6 ) 
  omgevingswaarde.
- De attributen 'Kwalitatief' en 'Kwantitatief' moeten overeenkomen met de
 gelijknamige kenmerken in OW.
- Hoewel de Geometrie gedeeld wordt tussen STOP en IMOW objecten geldt dit
  niet voor de norm-gegeven. Deze worden dus twee keer uitgewisseld maar
 moeten wel met elkaar overeenkomen.
- Het is toegestaan om een geometrie die gebruikt wordt voor een Norm ook te 
  gebruiken bij andere OW-objecten.
- Iedere normwaarde dient een symbolisatie te hebben, dit wordt vastgelegd
  in het vaststellingsdeel van het GIO. (**TODO**: dit zie ik nog niet terug in CIMOW)

<figure>
    <img src='media/cim-op-gio.png'></img>
    <figcaption>GIO in STOP</figcaption>
</figure>

## Regels voor het aanleveren van GML

OW Geometrie objecten worden aangeleverd via het GIO in GML. Voor de aangeleverde GML gelden de volgende regels:

- De GML-specificaties volgen de regels van de standaard Basisgeometrie [[BASISGEO]].
- Het bijbehorende GML applicatieschema Basisgeometrie.xsd is gepubliceerd op:
<https://register.geostandaarden.nl/gmlapplicatieschema/basisgeometrie/1.0.0/>
- Voor aanlevering van het GML wordt gebruik gemaakt van GML 3.2.2 met Simple features profile 0.
- Coördinaatreferentiestelsel: Het is verplicht om de srsName in te vullen
op het hoogste niveau van een geometrie. Dat betekent dat van een samengestelde
geometrie, een multi-geometrie, alleen op het niveau van de samenstelling de
srsName verplicht is ingevuld. Invul-instructie:
    - RD stelsel (2D): srsName="urn:ogc:def:crs:EPSG::28992"
    - ETRS89 (2D): srsName="urn:ogc:def:crs:EPSG::4258"
- Voor implementatie in GML zijn er aanvullende specificaties als
het gaat om het invullen van een gml:id attribuut. Dit gml:id attribuut heeft
geen informatiewaarde maar is nodig om interne en externe referenties te
realiseren voor gebruik binnen het gml formaat. Voor de GML 3.2.1 was dit een
verplicht element maar voor GML 3.2.2 is dit optioneel. Indien de optionele gml:id
wordt toegepast dient deze globaal uniek te zijn en
mag de waarde conform de gml specificaties alleen met een letter of een
underscore beginnen.
- Coördinaten opgenomen bij een geometrie
worden standaard uitgewisseld met een nauwkeurigheid van 1 mm of het
equivalent daarvan in graden. Voor RD, NAP en ETRS89 komt dat overeen met de
volgende nauwkeurigheden:
    - RD in meters 3 decimalen (1 mm);</li>
    - NAP-hoogte in meters 3 decimalen (1 mm);</li>
    - ETRS89-breedte in graden 8 decimalen (1,1 mm)
    - ETRS89-lengte in graden 8 decimalen (0,7 mm)
    - ETRS89-hoogte in meters 3 decimalen (1 mm)

## Richtlijn voor het maken van GIO’s o.b.v. OW-objecten {#639AF62F}

In deze paragraaf wordt toegelicht welke richtlijnen er zijn voor het maken van
GIO’s vanuit OW-objecten. Dit zijn richtlijnen en deze worden niet gevalideerd
door het DSO. Deze richtlijnen zijn gemaakt n.a.v. de expliciete vraag naar hoe
je vanuit OW naar GIO’s toe kunt werken.

De richtlijn is als volgt:

- Gebruik Locatiegroepen (c.q. de groep-subtypen van Locatie in IMOW (Gebiedengroep,
  Lijnengroep, Puntengroep) als OW-pendant van het GIO (zie Figuur 5)
- Bij gebruik van het OW-object Omgevingsnorm/Omgevingswaarde zou er een Norm-GIO 
  moeten zijn die dezelfde Locaties en kwalitatieve/kwantitatieve Normwaarden 
  bevat als de OW-Norm (zie Figuur 6).
- De overige subtypen van Locatie in IMOW (Gebied, Lijn, Punt) zouden moeten
  corresponderen met de Locatie uit het GIO.
- Verwijs vanuit annotaties altijd naar een Locatiegroep, zodat het gelijk 
  loopt met de verwijzing vanuit de tekst (naar het GIO).

<figure>
    <img src='media/RichtlijnVoorOW-objecten.png' alt='' style='width: 100%;'></img>
    <figcaption>Richtlijn voor OW-objecten i.r.t. GIO’s</figcaption><
/figure>

<figure>
    <img src='media/RichtlijnVoorNormen.png' alt='' style='width: 100%;'></img>
    <figcaption>Richtlijn voor Normen i.r.t. Norm-GIO’s</figcaption>
</figure>

Dit heeft de volgende consequenties:

- In het GIO kun je geen verschillende IMOW-Locatiesubtypen vermengen (bijv.
  gebieden en punten in dezelfde GIO).
- In het geval dat één IMOW-Gebied in meerdere Gebiedengroepen zit, zou de
  Locatie ook in meerdere GIO’s voor moeten komen.
- Er was met de huidige versie van het IMOW geen eenduidige richtlijn 
  te bedenken voor het indelen van groepen in het GIO.
