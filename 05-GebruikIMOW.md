# Regels voor de OW-aanlevering als onderdeel van een aanlevering aan de LVBB {#H05-GebruikIMOW}

Een aanlevering aan de LVBB initieert of wijzigt één of meer
regelingen. Om de OW-objecten behorend bij de regeling te maken of te wijzigen
koppel je aan de wijziging een OW-aanlevering. Dit hoofdstuk beschrijft
eerst op welke manier een OW-aanlevering de collectie OW-objecten bij een
regeling wijzigt. Daarna is beschreven hoe de OW-aanlevering in verschillende
mutatiescenario's gebruikt kan worden.

Merk op dat bij één aanlevering aan de LVBB, een LVBB-aanlevering, één
OW-manifest hoort dat weer verschillende OW-aanleveringen kan bevatten. Dit komt
bijvoorbeeld voor bij een Besluit dat meerdere Regelingen wijzigt.

## Basisprincipe van de OW-aanlevering

In STOP-ic zijn vier soorten van aanleveringen die kunnen resulteren in een nieuwe
regelingversie. Dit zijn: besluit, revisie, rectificatie en mededeling. In
alle gevallen waarin deze aanlevering resulteert in een nieuwe regelingversie is
aan die aanlevering een OW-aanlevering gekoppeld die zorgt voor de OW-objecten
behorend bij de nieuwe regelingversie.

Bij het specificeren van het bronhouderkoppelvlak van de LVBB zal aan iedere
wijziging van een regeling een OW-aanlevering gekoppeld worden.

Wanneer bijvoorbeeld in STOP samenloop van twee besluiten wordt opgelost door het aanleveren
van een revisie die de mutaties van beide besluiten verwerkt is er aan die aanlevering
een OW-aanlevering gekoppeld die zorgt voor de mutaties van de OW-objecten van beide
besluiten.

## Een OW-aanlevering aan de LVBB

Het aanmaken of wijzigen van de collectie OW-objecten behorend bij een Regeling
gebeurt met een OW-aanlevering. De OW-aanlevering bevat wijziginstructies die beschrijven
hoe de oorspronkelijke collectie OW-objecten getransformeerd moet worden tot de
resultaat collectie. Een OW-aanlevering is gekoppeld aan een STOP wijziging waarbij
het STOP deel de tekst van de regeling wijzigt en de OW-aanlevering de bij de
regeling behorende OW-objecten wijzigt. Een initieel besluit is een speciaal geval
omdat deze een Regeling aanmaakt en niet wijzigt, de bijbehorende OW-aanlevering 
zal dus ook alleen OW-objecten aanmaken.

Een OW-aanlevering heeft zelf de vorm van een collectie OW-objecten. De
aanlevering van een OW-object resulteert in een (1) nieuw OW-object, (2) een
gewijzigd OW-object of (3) het beëindigen van een OW-object. Deze drie situaties
zijn in de volgende paragrafen beschreven:

### Een nieuw OW-object

Wanneer een OW-object wordt aangeleverd met een identificatie die nog niet
bestond in de tijdlijn van de Regeling ontstaat een nieuw OW-object. Voor een
nieuw object geldt de volgende regel:

**Regel:** Een nieuw OW-object mag niet de status beëindigd hebben. (OZON0104).

### Een OW-object wijzigen

Wanneer een OW-object wordt aangeleverd met een identificatie die al bestond in
de tijdlijn van de Regeling vervangt het aangeleverde OW-object het bestaande
OW-object.

**Regel:** Een wijziging van een OW-object moet daadwerkelijk een kenmerk van
het OW-object wijzigen. (OZON0108).

Hierbij wordt een relatie bij een OW-object ook gezien als een kenmerk.

**Regel:** Bij het wijzigen van een OW-object moet het een instantie blijven
van hetzelfde UML Objecttype.

Toelichting: De objecttypen JuridischeRegel en Locatie zijn abstract (in
het UML is de naam cursief) en hebben geen instanties. Hierdoor kun je
bijvoorbeeld een RegelVoorIedereen niet wijzigen in een Instructieregel, maar
moet je een nieuw object aanmaken.

De volgende OW-elementen zijn geen OW-objecten en kunnen niet rechtstreeks gewijzigd
worden:

- ActiviteitLocatieaanduiding – deze moet altijd gewijzigd worden vanuit een
  RegelVoorIedereen.
- Normwaarde – deze moet altijd gewijzigd worden vanuit een Omgevingsnorm of
  Omgevingswaarde.
- Kaartlaag – deze moet altijd gewijzigd worden vanuit een Kaart.

### Een OW-object beëindigen {#H05-OW-eindigen}

Wanneer een OW-object wordt aangeleverd waarbij het veld status de waarde 'B'
heeft dan krijgt het oorspronkelijke OW-object de status beëindigd.

**Regel:** Het beëindigen van een OW-object is alleen toegestaan als de inhoud van
het object, afgezien van het attribuut 'status', exact overeenkomt met de laatst
aangeleverde OW-informatie (OZON0107).

### Resultaat OW-aanlevering 

Een OW-aanlevering bestaat uit een set instructies, die de
OW-objecten behorend bij een Regeling toevoegt, wijzigt en/of verwijdert.
Na het uitvoeren van de instructies is een nieuwe set OW-objecten ontstaan
behorend bij de regeling. Voor de totale set van OW-objecten behorend bij
de regeling gelden de volgende regels:

**Regels:**

- Een OW-aanlevering mag niet resulteren in wees-objecten dat zijn
  objecten die niet direct of indirect gekoppeld zijn aan een OP-objectAnnotatie.
- Een OW-aanlevering mag niet resulteren in verwijzingen naar
  OW-objecten die beëindigd zijn (OZON0109).
- Een OW-aanlevering moet resulteren in een Regeling met daarin precies
  één Regelingsgebied.
- Een OW-aanlevering moet resulteren in een Regeling met daarin
  maximaal één Pons object.
- Bij een Lid of Artikel met een STOP-element Inhoud moet er precies één Regeltekst-object zijn (TPOD2050)
- Een Lid of Artikel zonder een Inhoud-element mag geen Regeltekst-object hebben.
- Er mag hoogstens één Regeltekst-object naar een Artikel/Lid verwijzen.
- Er mag hoogstens één OW Divisietekst-object naar een OP Divisietekst verwijzen (TPOD2052).

## Wanneer gebruik je een OW-aanlevering aan de LVBB

**noot**: De inhoud van deze paragraaf wordt afgestemd met de nog op te leveren
nieuw versie van het BHKV.

Er is een aantal aanlevering aan het BHKV waarbij een OW-aanlevering gebruikt kan worden
om de OW-objecten bij een regeling te wijzigen. Deze worden in de volgende
paragrafen behandeld:

### OW-aanlevering bij Besluit dat Regeling initieert of wijzigt

Wanneer het bevoegd gezag besluit om een omgevingsdocument te initiëren of te wijzigen
moet het voor de bekendmaking van dat besluit een Aanlevering naar de LVBB sturen. Aan deze
aanlevering moet altijd een OW-aanlevering gekoppeld zijn die de OW-objecten behorend
bij.

Voor een OW-aanlevering die hoort bij een Besluit dat een Regeling wijzigt
geldt:

**Regel:** De attributen 'workIDRegeling', 'doelID' en 'expresionIDRegeling' van een
OW-aanlevering corresponderen met precies één nieuwe regelingversie die in een aanlevering
wordt aangemaakt.

### OW-aanlevering bij rectificatie, revisie of mededeling

Ook de aanlevering van een STOP rectificatie, revisie of mededeling kan resulteren
in een nieuwe regelingversie. Hoe deze precies aangeleverd gaan worden is nog niet
gespecificeerd maar naar verwachting zal het veel lijken op het aanleveren van een
besluit.

### Beëindigen van OW-objecten behorend bij een ingetrokken regeling {#H05-IntrekkenRegeling}

Wanneer een Regeling wordt ingetrokken worden alle OW-objecten bij die regeling
beëindigd.

**Regel:** Aan de intrekking van een Regeling is geen OW-aanlevering gekoppeld.

### Het aanleveren van een Ontwerpbesluit

In STOP kunnen ontwerpregelingen gemaakt worden met een
ontwerpbesluit. Zo'n besluit wijzigt de tekst en de OW-objecten behorend bij een
bestaande regelingversie.

Voor een STOP ontwerpbesluit gelden de volgende regels:

- Het soortprocedure (c.q. proceduretype) is ontwerp (i.p.v. definitief).
- De ConsolidatieInformatie mag geen tijdstempels bevatten.

Voor een IMOW ontwerpbesluit zijn de regels niet anders dan een regulier besluit.
