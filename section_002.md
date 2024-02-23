# Informatiemodel Omgevingswet {#320F8A13}

Dit hoofdstuk beschrijft het Informatiemodel Omgevingswet (IMOW). Paragraaf <a href='#29F6886D'>2.1</a> beschrijft de context van het IMOW, in paragraaf <b><a href='#'>Fout! Verwijzingsbron niet gevonden.</a></b> vastgelegd hoe het IMOW eruitziet bij vrijetekststructuur en in paragraaf <a href='#666B1089'>2.2.2</a> wordt de artikelsgewijze structuur beschreven. In paragraaf <a href='#'>2.3</a> wordt een aantal belangrijke diagrammen uitgelicht. In paragraaf <a href='#'>2.4</a> tenslotte wordt de verhouding tussen OP en OW beschreven.<br/>
## Context IMOW {#29F6886D}

De IMOW standaard schrijft voor hoe je de tekst van een regeling (zoals beschreven in de STOP standaard) annoteert met OW-objecten. Dit gebeurt door OW-objecten mee te sturen in een Aanlevering en deze aan tekstonderdelen van OP te koppelen via de identificatie van die tekstonderdelen, het wId. OW-objecten zelf kunnen weer gekoppeld zijn aan andere OW-objecten waardoor er naast de tekst ook een gestructureerde collectie objecten bij een regeling ontstaat. Deze structuur kan bijvoorbeeld gebruikt worden om de inhoud van de regeling via een kaart te ontsluiten. 

De STOP standaard beschrijft twee soorten tekststructuren voor omgevingsdocument: de artikelsgewijze structuur en de vrijetekststructuur. Afhankelijk van de documentstructuur (welke je kunt gebruiken is vastgelegd in de TPOD documenten) worden verschillende objecten meegeleverd. Voor beide typen tekststructuren is een diagram toegevoegd met hierin de aanwezige objecttypen, attributen en relaties. 

De UML-diagrammen worden gebruikt om de IMOW-schema’s mee te genereren. Deze koppeling zorgt voor directe link tussen wat je in de diagrammen ziet en de wijze waarop OW-bestanden gestructureerd moeten worden. In deze diagrammen wordt de volgende legenda gebruikt:<br/>
<figure><img src='media/image3.svg' alt='' style='width: 24.982188967269778%;'></img>
<figcaption>Legenda gebruikt bij UML-diagrammen</figcaption></figure>

OP-koppelingsverwijzingen zijn OW-objecten die een 1 op 1 tegenhanger hebben in STOP. <br/>
Een Regelobject verwijst naar een regel. Regellocatie objecten koppelen Locaties aan regels. Datatypes groeperen bij elkaar horende gegevens. Locatie objecten zijn concrete locaties. Geometrie geeft een geometrie in coördinaten. Context objecten maken geen deel uit van het IMOW  maar plaatsen de objecten van het IMOW in een bredere context.

## Overzicht IMOW {#0C4480E2}

Binnen STOP zijn er twee types van Regeling te onderscheiden met  een verschillende structuur: de vrijetekststructuur en de artikelstructuur.  Deze structuurverschillen zorgen ook voor verschil in de manier waarop ze geannoteerd zijn. De volgende twee paragrafen beschrijven de tekststructuren en hun mogelijke annotatie:

### Vrijetekststructuur {#40526A1D}

Vrijetekststructuur in OP bouwt gebruikt twee elementtypen, namelijk: Divisie en Divisietekst. Het hoogste niveau is altijd een Divisie, deze mag onderliggende Divisies bevatten waar uiteindelijk ook een Divisietekst met Inhoud in moet zitten. De Inhoud bevat alleen inhoudelijke tekst. De Divisie wordt gebruikt om de tekst te structureren in bijvoorbeeld verschillende hoofdstukken of paragrafen.

Binnen OW is Divisie een subklasse van OP-object. Dit betekent dat er vanuit Divisie een verwijzing is naar de wId (identificatie) in OP ofwel de wId van de Divisie in OP en naar de identificatie van de regeling in OP, de wId van de regeling. Zo zorgt het OW dat er op het diepste inhoudelijke niveau een verwijzing is naar het OP-deel.

In de vrijetekststructuur, zie Figuur 3 voor een UML diagram, zijn documenten gestructureerd in Divisie en Divisietekst element. Dit zijn dan ook de elementen waar de annotaties aan hangen. Dit betekent dat de inhoudelijke tekstgegevens worden aangeleverd in het IMOP-gedeelte en dat je vanuit OW verwijst naar deze Divisie. Vanuit OW kun je een of meerdere tekstdelen aangeven bij de Divisie. Een tekstdeel kan optioneel nog één of meerdere hoofdlijnen, gebiedsaanwijzingen, en/of locaties bevatten. Tevens kan er een Locatie direct gekoppeld zijn aan het tekstdeel of kan de locatie via de gebiedsaanwijzing gekoppeld zijn aan het tekstdeel. De locatie is een supertype van ofwel een lijn, punt, gebied of een groep van lijnen, punten of gebieden. Uiteindelijk heeft ieder subtype van locatie een geometrie die als los GML-bestand wordt meegeleverd.<br/>
<figure><img src='media/image5.svg' alt='' style='width: 100%;'></img>
<figcaption>UML-diagram vrijetekststructuur</figcaption></figure>

### Artikelstructuur {#666B1089}

Een Regeling die volgens de STOP artikelsgewijze structuur bevat geneste structuur  die bijvoorbeeld Hoofdstukken, Artikelen, Paragrafen of Subparagrafen kan bevatten. Op het diepste niveau zit de inhoud. Die inhoud zit altijd in Artikelen, waarbij in soms een artikel is opgesplitst in Leden. Als een Artikel Leden heeft zit de Regeltekst van het Artikel in de Leden. In een Artikel zonder Leden zit de Regeltekst in het Artikel zelf. 

<a href='#d3e815'>Figuur 4</a> toont het UML-diagram voor artikelsgewijze structuur.<br/>
<figure><img src='media/image7.svg' alt='' style='width: 100%;'></img>
<figcaption>UML-diagram artikelstructuur</figcaption></figure>

Waar bij vrije-tekstdocumenten de tekstelement worden geannoteerd zijn het bij de artikelstructuur de artikelen of leden die worden geannoteerd. Het Regeltekst object bevat de verwijzing naar het wId van de STOP tekst die wordt geannoteerd. Vervolgens kunnen er een of meerdere Juridische regels zijn die verbonden zijn aan de regeltekst. Een juridische regel heeft drie subtypen (RegelVoorIedereen, Instructieregel, Omgevingswaarderegel) die allen afzonderlijke relaties hebben met de verschillende OW-objecten. Deze OW-objecten zijn: Gebiedsaanwijzing, Activiteit, Omgevingswaarde en Omgevingsnorm. Een Omgevingsnorm of Omgevingswaarde hebben altijd een Normwaarde, dit kan zijn een kwalitatieve of kwantitatieve waarde. Vervolgens hebben Normwaarde, Activiteit en Gebiedsaanwijzing nog een relatie met een Locatie (een locatie is verder uitgewerkt in paragraaf 3.1.4. Aanvullend hierop heeft de artikelstructuur een Pons-object die alleen gebruikt kan worden bij het omgevingsplan, dit is een losstaand objecttype dat een relatie heeft met een Locatie (zie <a href='#'>3.9</a>).

Binnen OW is Regeltekst een subtype van OP-object, dit betekent dat er vanuit Regeltekst een verwijzing is naar de identificatie in OP ofwel de wId van het artikel en naar de identificatie van de regeling vanuit OP, de WorkID van de regeling. Zo zorgt het OW ook bij artikelsgewijze structuur dat er op het diepste inhoudelijke niveau een verwijzing is naar het OP-deel.

### OW-object {#6A0BF36E}

In de lopende tekst wordt gesproken over OW-object. Instanties van de in dit diagram genoemde klasses (en subklasses) kunnen voorkomen in het IMOW deel van een aanlevering.<br/>
<figure><img src='media/image9.svg' alt='' style='width: 100%;'></img>
<figcaption>UML-diagram OW-objecten</figcaption></figure>

        <b><span style='color: #003359;'>Status</span></b>

De status van een OW-object kan actief of beëindigd zijn. In de uitwisseling wordt deze status als volgt meegegeven:<br/>
<ul><li>Als het veld ‘status’  geen waarde heeft is het OW-object actief.</li>
<li>Als het veld status de waarde ‘B’ is het OW-object beëindigd. Het zal het OW-object alleen nog tonen worden als iemand een tijdreis-vraag stelt.</li>
</ul>

        <b><span style='color: #003359;'>Procedurestatus</span></b><b><span style='color: #003359;'> en ontwerpbesluiten</span></b>

In de STOP standaard kunnen ontwerpregelingen gemaakt worden met een ontwerpbesluit. Zo’n besluit wijzigt de tekst en de OW-object behorend bij een bestaande regelingversie. Alle OW-objecten die gewijzigd worden in het in ontwerpbesluit krijgen als procedurestatus de waarde ‘ontwerp’ waaruit je kan concluderen dat het object niet bij vastgestelde regelgeving hoort.  Als het veld procedurestatus geen waarde heeft dan wordt het OW-object beschouwd als behorend bij vastgestelde regelgeving.

Voor een STOP ontwerpbesluit gelden de volgende regels:<br/>
<ul><li>Het soortprocedure (c.q. proceduretype) is ontwerp (i.p.v. definitief).</li>
<li>Er mogen minder procedurestappen gebruikt worden in vergelijking met definitieve regelgeving.</li>
<li>De ConsolidatieInformatie mag geen tijdstempels bevatten.</li>
</ul>

Voor ontwerp-OW-objecten gelden ook andere regels:

<b>Regel: </b>OW-objecten met de procedurestatus ‘ontwerp’ kunnen niet gemuteerd worden. 

Deze ontwerp-OW-objecten worden gezien als een nieuwe versie van een OW-object die niet hoort bij vastgestelde regelgeving. Dit is ook omdat ontwerpbesluiten niet gemuteerd kunnen worden, maar een losstaande status hebben t.o.v. vastgestelde regelgeving. Ontwerp-OW-objecten komen voor bij een initieel ontwerpbesluit en bij een wijzigingsontwerpbesluit.

Bij een initieel ontwerpbesluit zijn alle OW-objecten on ontwerp. Een ontwerpwijzigingsbesluit beschrijft een ontwerp ten opzicht van een actuele regeling. Alleen de OW-objecten die wijzigen ten opzicht van de actuele levering worden aangeleverd. 

<b>Regel</b>: Iedere OW-object behorend OW-aanlevering bij een ontwerpbesluit moet de procedurestatus ontwerp hebben.

Ontwerp-activiteiten zullen niet verschijnen in de registratie van toepasbare regels, dus er kunnen geen vragenbomen op ontwerp-activiteiten gemaakt worden.

Net zoals bij een ‘regulier’ wijzigingsbesluit worden bij een ontwerpwijzigingsbesluit alleen annotaties die wijzigen ten opzichte van de vastgestelde regelgeving aangeleverd. Het is bij een ontwerpwijzigingsbesluit wel mogelijk om te verwijzen naar annotaties uit de vastgestelde regelgeving. 

Voorbeeld: Artikel 1: Het is verboden om te zwemmen in het centrumgebied.<br/>
Gaat gewijzigd worden op de volgende manier: <br/>
Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.

In dit geval hoeft het Regeltekst-object niet te worden aangeleverd, deze bestaat immers al.<br/>
Er is wel noodzaak voor een ontwerpversie van de juridische regel, aangezien de locatie waar deze regel over gaat wordt uitgebreid. Er is ook noodzaak voor een nieuwe OW-locatie in ontwerp, aangezien er een stiltegebied-GIO wordt toegevoegd in dit ontwerpwijzigingsbesluit.

Voorbeeld: Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.<br/>
Gaat gewijzigd worden op de volgende manier:<br/>
Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.<br/>
Artikel 2: Er geldt een meldingsplicht omtrent het zwemmen in het stiltegebied.

Voor Artikel 1 wordt de juridische regel die verwijst naar het stiltegebied in ontwerp gewijzigd t.o.v. de vastgestelde versie van de juridische regel. Voor Artikel 2 wordt wel een ontwerp-Regeltekst-object aangeleverd inclusief bijbehorende ontwerp-OW-annotaties. De OW-Locatie stiltegebied en de OW-activiteit zwemmen hoeven niet te worden aangeleverd aangezien deze al bestonden in vastgestelde regelgeving.

<b>Regel</b>: Alleen OW-objecten die de procedurestatus ‘ontwerp’ hebben mogen verwijzen naar OW-objecten met de procedurestatus ‘ontwerp’. 

<b>Regel: </b>Een ontwerpregeling is altijd gebaseerd op een bestaande versie van een regeling. Verwijzingen vanuit OW-objecten met de procedurestap ‘ontwerp’ verwijzen altijd naar de versie van het OW-object zoals bekend in de regelingversie waarop de ontwerpregeling gebaseerd is.

Bij het aanleveren van Ontwerp-OW-objecten is het aan te bevelen dat de identificaties identiek blijven aan de OW-objecten die horen bij vastgestelde regelingen. De voorziening zorgt ervoor dat er geen validatieconflicten zijn, omdat ontwerp-objecten in aparte tabellen opgeslagen worden.

### OP-object {#53BEF2D1}

OP-objecten zijn OW-objecten die een rechtstreekse verwijzing bevatten naar een geïdentificeerd onderdeel van het tekstdeel van de Regeling waar dit OW-object bij hoort. <br/>
<figure><img src='media/image11.svg' alt='' style='width: 78.08859520090353%;'></img>
<figcaption>UML-diagram OP-objecten</figcaption></figure>

OP-objecten zij de koppeling tussen het IMOW en de tekstelementen in de STOP standaard. Voor documenten met de regelstructuur gebeurt dit via het object Regeltekst. Voor vrijetekst via Divisie en Divisietekst.  De OP-objecten bevatten attribuut wId dat verwijst naar het ID van het artikel of lid uit IMOP. Daarnaast hebben deze objecten NEN3610 identificatie zoals gebruikt in het IMOW.

<b>Regel</b>: Voor ieder Artikel (zonder leden) of Lid moet er een gekoppeld OW-object zijn.  

Een Regeltekst verwijst altijd naar minstens één Juridische Regel. Juridische Regel is een abstract objecttype dat drie subtypen heeft, namelijk: RegelVoorIedereen, Instructieregel en Omgevingswaarderegel.

De Juridische regels hebben een identificatie. Tevens hebben ze een relatie genaamd: ‘artikelOfLid’, welke verwijst naar de OW-Regeltekst object. 

OW-objecten hebben ook onderlinge relaties. Zo heeft een Juridische regel een relatie naar o.a. een Activiteit, Omgevingsnorm, Gebiedsaanwijzing en andere objecten.

### Activiteit {#110333AD}

<figure><img src='media/image13.svg' alt='' style='width: 68.01619433198381%;'></img>
<figcaption>UML-diagram Activiteit</figcaption></figure>

### Locatie {#68FA3E75}

Locatie modelleert de locatie die aan OW-objecten wordt toegekend. Een locatie kan de vorm hebben van een punt, lijn, gebied of samengestelde groepen daarvan. Met een verwijzing naar Geometrie worden de coördinaten opgenomen. De Geometrie objecten worden uitgewisseld in een apart geometrie-bestand.

Punt, Lijn en Gebied  verwijzen naar de ID van de geometrie in de meegeleverde GIO<br/>
Ambtsgebied bevat een verwijzing naar de bestuurlijkeGrenzen-voorziening<br/>
<figure><img src='media/image15.svg' alt='' style='width: 86.89929548280149%;'></img>
<figcaption>UML-diagram Locatie</figcaption></figure>

In Officiële Publicaties wordt de koppeling tussen tekst en Geometrie op een andere manier gedaan. Geometrie wordt aangeleverd in Geografisch Informatie Objecten GIOs waarnaar In de lopende tekst wordt verwezen via hun STOP identificatie. 

In OW worden geen GIO’s aangeleverd, maar juist locaties. Uiteindelijk verwijst zowel OW als OP naar hetzelfde geometrie-bestand, maar op een andere manier (OP via GIO’s en OW via Locaties).<br/>
### Kaart en Kaartlaag {#6BE539E7}

De klasse Kaart modelleert de onderdelen die nodig zijn om een kaart te benoemen en kaartlagen samen te stellen uit locatie en inhoudelijke informatie van andere OW-objecten.<br/>
<figure><img src='media/image17.svg' alt='' style='width: 100%;'></img>
<figcaption>UML-diagram Kaart en kaartlaag</figcaption></figure>

### SymbolisatieItem {#78DF00AC}

De klasse SymbolisatieItem is verwijderd uit het IMOW omdat er modelleringsfouten in zaten. Dit is in lijn met de werkafspraak waarin werd afgesproken deze klasse niet meer te gebruiken. In een volgende versie wordt een functioneel correcte variant van het SymbolisatieItem toegevoegd.

