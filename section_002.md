## <a name='_Ref92176530'></a><a name='IMOW'></a>Informatiemodel Omgevingswet

Dit hoofdstuk beschrijft het Informatiemodel Omgevingswet (IMOW). Paragraaf <a href='#_Ref36562704'>2.1<a></a> geeft een toelichting over het IMOW, vervolgens wordt er in paragraaf <a href='#_Ref80972473'>2.2<a></a> gekeken hoe het IMOW eruitziet bij vrijetekststructuur en in paragraaf <a href='#_Ref36562716'>2.3<a></a> wordt de artikelsgewijze structuur toegelicht. In paragraaf <a href='#_Ref124236869'>2.4<a></a> wordt een aantal belangrijke diagrammen uitgelicht. In paragraaf <a href='#_Ref124236892'>2.5<a></a> tenslotte wordt de verhouding tussen OP en OW beschreven.

### <a name='_Ref36562704'></a><a name='IMOW_context'></a>Context IMOW

De IMOW standaard beschrijft hoe je de tekst van een regeling (zoals beschreven in de STOP standaard) kunt annoteren met OW-objecten. Dit gebeurt door OW-objecten mee te sturen in een levering en deze aan tekstonderdelen van OP te koppelen via de identificatie van die tekstonderdelen, het wId. OW-objecten zelf kunnen weer gekoppeld zijn aan andere OW-objecten waardoor er naast de tekst ook een gestructureerde collectie objecten bij een regeling ontstaat. Deze structuur kan bijvoorbeeld gebruikt worden om de inhoud van de regeling via een kaart te ontsluiten. 

De STOP standaard beschrijft twee soorten tekststructuren voor omgevingsdocument: de artikelsgewijze structuur en de vrijetekststructuur. Afhankelijk van de documentstructuur (welke je kunt gebruiken is vastgelegd in de TPOD documenten) worden verschillende objecten meegeleverd. Voor beide typen omgevingsdocumenten is een diagram toegevoegd met hierin de aanwezige objecttypen, attributen en relaties. 

De UML-diagrammen worden gebruikt om de IMOW-schema’s mee te genereren. Deze koppeling zorgt voor directe link tussen wat je in de diagrammen ziet en de wijze waarop OW-bestanden gestructureerd moeten worden. In deze diagrammen wordt de volgende legenda gebruikt:

<img src='media/image3.svg' alt='media/image3.svg' style='width: 24.982188967269778%;'></img>
OP-koppelingsverwijzingen zijn objecten die hun oorsprong kennen in STOP. 

Een Regelobject verwijst naar een regel. Regellocatie objecten koppelen Locaties aan regels. Datatypes groeperen bij elkaar horende gegevens. Locatie objecten zijn concrete locaties. Geometrie geeft een geometrie in coördinaten. Context objecten plaatsen de objecten van het IMOW in een bredere context.

### <a name='_Ref80972473'></a><a name='IMOW_vrijetekst'></a>Vrijetekststructuur

De onderstaande afbeelding geeft aan hoe het UML-diagram voor vrijetekststructuur eruitziet.

<figure><img src='media/image5.svg' alt='media/image5.svg' style='width: 100%;'></img>
<figcaption>UML-diagram vrijetekststructuur</figcaption></figure>

Binnen de vrijetekststructuur is een Divisie een OP-object. Dit betekent dat de inhoudelijke tekstgegevens worden aangeleverd in het IMOP-gedeelte en dat je vanuit OW verwijst naar deze Divisie. Vanuit OW kun je een of meerdere tekstdelen aangeven bij de Divisie. Een tekstdeel kan optioneel nog één of meerdere hoofdlijnen, gebiedsaanwijzingen, en/of locaties bevatten. Tevens kan er een locatie direct gekoppeld zijn aan het tekstdeel of kan de locatie via de gebiedsaanwijzing gekoppeld zijn aan het tekstdeel. De locatie is een supertype van ofwel een lijn, punt, gebied of een groep van lijnen, punten of gebieden. Uiteindelijk heeft ieder subtype van locatie een geometrie die als los GML-bestand wordt meegeleverd.

### <a name='_Ref36562716'></a><a name='IMOW_artikel'></a>Artikelstructuur

<a href='#_Ref122436527'>Figuur 4<a></a> toont het UML-diagram voor artikelsgewijze structuur.

<figure><img src='media/image7.svg' alt='media/image7.svg' style='width: 100%;'></img>
<figcaption><a name='_Ref122436527'></a>UML-diagram Artikelstructuur</figcaption></figure>

Net zoals bij vrijetekststructuur begint artikelsgewijze structuur met een OW-object dat zijn oorsprong kent uit OP, namelijk de Regeltekst. Deze bevat een verwijzing naar het ID dat vanuit OP hoort bij een artikel of een lid (zie 3.1.2). Vervolgens kunnen er een of meerdere Juridische regels zijn die verbonden zijn aan de regeltekst. Een juridische regel heeft drie subtypen (RegelVoorIedereen, Instructieregel, Omgevingswaarderegel) die allen afzonderlijke relaties hebben met de verschillende OW-objecten. Deze OW-objecten zijn: Gebiedsaanwijzing, Activiteit, Omgevingswaarde en Omgevingsnorm. Een Omgevingsnorm of Omgevingswaarde hebben altijd een Normwaarde, dit kan zijn een kwalitatieve of kwantitatieve waarde. Vervolgens hebben Normwaarde, Activiteit en Gebiedsaanwijzing nog een relatie met een Locatie. De locatie is een supertype van ofwel een lijn, punt, gebied of een groep van lijnen, punten of gebieden. Uiteindelijk heeft ieder subtype van locatie een geometrie die als los GML-bestand wordt meegeleverd (zie 3.1.4). Aanvullend hierop heeft de artikelstructuur een Pons-object die alleen gebruikt kan worden bij het omgevingsplan, dit is een losstaand objecttype dat een relatie heeft met een Locatie (zie <a href='#_Ref90035925'>4.3.8<a></a>).

### <a name='_Ref124236869'></a>Details IMOW

Onderstaande diagrammen bevatten een nadere detaillering van objecten uit het IMOW

#### <a name='_Ref124235733'></a>OW-object

In de lopende tekst wordt gesproken over OW-object. In de uitwisseling (en dus in het UML) wordt OWobject gebruikt. Instanties van de in dit diagram genoemde klasses (en subklasses) kunnen voorkomen in het IMOW deel van een aanlevering.

<img src='media/image9.svg' alt='media/image9.svg' style='width: 100%;'></img>
#### <a name='_Ref113026518'></a>OP-object

OP-objecten zijn binnen de context van IMOW OW-objecten die een rechtstreekse verwijzing bevatten naar een geïdentificeerd onderdeel van de STOP tekst. Deze verwijzing is opgenomen in het wId attribuut.

<img src='media/image11.svg' alt='media/image11.svg' style='width: 78.08859520090353%;'></img>
In de lopende tekst wordt gesproken over OP-object. In de uitwisseling (en dus in het UML) wordt OPobject gebruikt.

#### <a name='_Ref113026420'></a>Locatie

Locatie modelleert de locatie die aan OW-objecten wordt toegekend. Het is een apart object dat locatie specificeert in punt, lijn, gebied en samengestelde groepen daarvan. Met een verwijzing naar Geometrie worden de coördinaten opgenomen. De Geometrie objecten worden uitgewisseld in een apart geometrie-bestand.

<img src='media/image13.svg' alt='media/image13.svg' style='width: 86.89929548280149%;'></img>
#### <a name='_Ref113026552'></a>Kaart en Kaartlaag

Het model kaart modelleert de onderdelen die nodig zijn om een kaart te benoemen en kaartlagen samen te stellen uit locatie en inhoudelijke informatie van andere OW-objecten.

<img src='media/image15.svg' alt='media/image15.svg' style='width: 100%;'></img>
#### <a name='_Ref113026557'></a>SymbolisatieItem

Met SymbolisatieItem wordt met een symbolisatiecode de kleur en patroon weergave van onderdelen op een kaart gespecificeerd.

<img src='media/image17.svg' alt='media/image17.svg' style='width: 100%;'></img>
### <a name='_Ref124236892'></a>Verhouding OP en OW

Tussen de twee standaarden zijn er drie objecttypen die de samenhang tussen het OP- en het OW-deel vormgeven, dit zijn: Regeltekst, Divisie en Geometrie. OP maakt ook onderscheid tussen de vrijetekststructuur en artikelsgewijze structuur.<a name='IMOW_OPenOW_vrijetekstOP'></a>

#### Vrijetekststructuur in OP

OP bouwt vrijetekststructuur op door te duiden dat het mogelijk is om twee elementtypen te gebruiken bij vrijetekst, namelijk: Divisie en Divisietekst. Het hoogste niveau is altijd een Divisie, deze mag onderliggende Divisies bevatten waar uiteindelijk ook een Divisietekst met Inhoud in moet zitten. De Inhoud bevat alleen inhoudelijke tekst. Dit betekent dat Divisie gebruikt wordt om de tekst te structureren in bijvoorbeeld verschillende hoofdstukken of paragrafen.

Binnen OW is Divisie een subklasse van OP-object. Dit betekent dat er vanuit Divisie een verwijzing is naar de identificatie in OP ofwel de wId van de Divisie in OP en naar de identificatie van de regeling in OP, de wId van de regeling. Zo zorgt het OW dat er op het diepste inhoudelijke niveau een verwijzing is naar het OP-deel.

#### <a name='IMOW_OPenOW_artikelOP'></a>Artikelsgewijze structuur in OP

OP bouwt artikelsgewijze structuur op door te benoemen welke elementen binnen een ander element mogen vallen. Zo heeft bijvoorbeeld binnen een Regeling een Hoofdstuk de mogelijkheid om meerdere Paragrafen te bevatten of meerdere Artikelen, een Paragraaf kan op zijn beurt weer meerdere Artikelen of Subparagrafen bevatten. Zodoende kom je uiteindelijk uit op het diepste niveau, namelijk Artikel waarbinnen Inhoud moet zitten, hier staat de inhoudelijke tekst van het artikel in.

Binnen OW is Regeltekst een subtype van OP-object, dit betekent dat er vanuit Regeltekst een verwijzing is naar de identificatie in OP ofwel de wId van het artikel en naar de identificatie van de regeling vanuit OP, de WorkID van de regeling. Zo zorgt het OW ook bij artikelsgewijze structuur dat er op het diepste inhoudelijke niveau een verwijzing is naar het OP-deel.

#### <a name='IMOW_OPenOW_GIOOP'></a>Geometrie in OP

In OP wordt gebruik gemaakt van een andere modelconstructie om tekst en data aan geometrie te koppelen dan de constructie in OW. Het element dat vanuit OP gebruikt wordt om naar geometrieën te verwijzen heet een geografisch informatieobject (GIO). Het OP krijgt altijd een GIO indien er een geometrie wordt aangeleverd. Een GIO zorgt voor de koppeling in OP tussen een inhoudelijk deel van het besluit en een geometrie (ofwel het werkingsgebied van de regel).

In OW worden geen GIO’s aangeleverd, maar juist locaties, zoals toegelicht in <a href='#_Ref80972473'>2.2<a></a> en <a href='#_Ref36562716'>2.3<a></a>. Uiteindelijk verwijst zowel OW als OP naar hetzelfde geometrie-bestand, maar op een andere manier (OP via GIO’s en OW via Locaties).<a name='Techn'></a>

