# Gebruik van OW-aanlevering bij LVBB {#H6-GebruikIMOW}

Een Besluit dat aangeleverd wordt aan de LVBB initieert of wijzigt een aantal
regelingen. Om de OW-objecten behorend bij de regeling te maken of te wijzigen
koppel je aan de wijziging een OW-aanlevering. Dit hoofdstuk beschrijft
eerst op welke manier een OW-aanlevering de collectie OW-objecten bij een
regeling wijzigt. Daarna is beschreven hoe de OW-aanlevering in verschillende
mutatiescenario's gebruikt kan worden.

Merk op dat bij één aanlevering aan de LVBB, een LVBB-aanlevering, één
OW-manifest hoort dat weer verschillende OW-aanleveringen kan bevatten. Dit komt
bijvoorbeeld voor bij een Besluit dat meerdere Regelingen wijzigt.

## Een OW-aanlevering aan de LVBB 

Het aanmaken of wijzigen van de collectie OW-objecten behorend bij een Regeling
gebeurt met een OW-aanlevering. De OW-aanlevering bevat wijziginstructies die beschrijven
hoe de oorspronkelijke collectie OW-objecten getransformeerd moet worden tot de
resultaat collectie. Een OW-aanlevering gekoppeld aan een STOP wijziging waarbij
het STOP deel de tekst van de regeling wijzigt en de OW-aanlevering de bij de
regeling behorende OW-objecten wijzigt.

Een OW-aanlevering heeft zelf de vorm van een collectie OW-objecten. De
aanlevering van een OW-object resulteert in een (1) nieuw OW-object, (2) een
gewijzigd OW-object of (3) het beëindigen van een OW-object hierbij worden in
een initieel besluit alleen nieuwe OW-objecten aangemaakt. Deze drie situaties
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

Toelichting: De klasses JuridischeRegel en Locatie zijn abstracte Klasses (in
het UML zijn de klassenamen cursief) en hebben geen instanties. Hierdoor kun je
bijvoorbeeld een RegelVoorIedereen niet wijzigen in een Instructieregel, maar
moet je een nieuw object aanmaken.

De volgende IMOW-elementen zijn geen objecten en kunnen niet direct gewijzigd
worden:

- ActiviteitLocatieaanduiding – deze moet altijd gewijzigd worden vanuit een
  RegelVoorIedereen.
- Normwaarde – deze moet altijd gewijzigd worden vanuit een Omgevingsnorm of
  Omgevingswaarde.
- Kaartlaag – deze moet altijd gewijzigd worden vanuit een Kaart.

### Een OW-object beëindigen {#H06-OW-eindigen}

Wanneer een OW-object wordt aangeleverd waarbij het veld status de waarde 'B'
heeft dan krijgt het oorspronkelijke OW-object de status beëindigd.

**Regel:** Het beëindigen van een OW-object is alleen toegestaan als de inhoud van
het object, afgezien van het status veld, exact overeenkomt met de laatst
aangeleverde OW-informatie (OZON0107).

### Resultaat OW-aanlevering 

Een OW-aanlevering bestaat uit een set instructies, die de
OW-objecten behorend bij een Regeling toevoegt, wijzigt of verwijdert. 
Na het uitvoeren van de instructies is een nieuwe set OW-objecten ontstaan
behorend bij de regeling. Voor de totale set van OW-objecten behorend bij
de regeling gelden de volgende regels:

**Regel:** Een OW-aanlevering mag niet resulteren in wees-objecten, dat zijn
objecten die niet direct of indirect gekoppeld zijn aan een OW-object dat een
bestaand documentfragment annoteert (OZON0350 t/m OZON0367).

**Regel:** Een OW-aanlevering mag niet resulteren in verwijzingen naar
OW-objecten die beëindigd zijn (OZON0109)

**Regel:** Een OW-aanlevering moet resulteren in een Regeling met daarin precies
één Regelingsgebied.

**Regel:** Een OW-aanlevering moet resulteren in een Regeling met daarin
maximaal één Pons object.

**Regel:** Voor ieder Lid en Artikel zonder leden in de Regeling die niet
gereserveerd of vervallen zijn moet er een Regeltekst object zijn.

## Wanneer gebruik je een OW-aanlevering aan de LVBB 

**TODO**: Op het moment dat het BHKV gespecificeerd wordt moet deze paragraaf daarop afgestemd worden.

Er is een aantal aanlevering aan het BKHV waarbij een OW-aanlevering gebruikt kan worden
om de OW-objecten bij een regeling te wijzigen. Deze worden in de volgende
paragrafen behandeld:

### OW-aanlevering bij Besluit dat Regeling wijzigt 

Wanneer het bevoegd gezag besluit om een omgevingsdocument te wijzigen moet het
voor de bekendmaking van dat besluit een Aanlevering naar de LVBB sturen. Wanneer
er bij de wijziging ook OW-objecten gewijzigd moeten worden gebeurt dat via een
OW-aanlevering.

Voor een OW-aanlevering die hoort bij een Besluit dat een Regeling wijzigt
geldt:

**Regel:** De waardes van 'workIDRegeling' en 'doelID' van de OW-aanlevering
moeten overeenkomen met de workIdentificatie en doel van het besluit.

### Beëindigen van OW-objecten behorend bij een ingetrokken regeling {#H6-IntrekkenRegeling}

Wanneer een Regeling wordt ingetrokken worden alle OW-objecten bij die regeling
beëindigd.  De beïndiging hoeft niet apart te worden aangeleverd.

**Regel:** Aan de intrekking van een Regeling is geen OW-aanlevering gekoppeld.

### Het aanleveren van een Ontwerpbesluit

In STOP kunnen ontwerpregelingen gemaakt worden met een
ontwerpbesluit. Zo'n besluit wijzigt de tekst en de OW-objecten behorend bij een
bestaande regelingversie.

Voor een STOP ontwerpbesluit gelden de volgende regels:

- Het soortprocedure (c.q. proceduretype) is ontwerp (i.p.v. definitief).
- Er zij mindere procedurestappen in vergelijking met definitieve regelgeving.
- De ConsolidatieInformatie mag geen tijdstempels bevatten.

OW-objecten bij een ontwerbesluit worden gezien als een nieuwe versie van
een OW-object die niet horen bij vastgestelde regelgeving. Dit is ook omdat
ontwerpbesluiten niet gemuteerd kunnen worden maar losstaan van vastgestelde
regelgeving. Ontwerpbesluiten kunnen voorkomen bij een initieel besluit en
bij een wijzigingsbesluit. Een ontwerpbesluit beschrijft een ontwerp ten opzicht van een actuele
regeling. Alleen de OW-objecten die wijzigen ten opzicht van de actuele levering
worden aangeleverd.

Activiteiten in ontwerpregelingen worden niet doorgegeven aan de registratie van toepasbare
regels, dus er kunnen geen vragenbomen op ontwerp-activiteiten gemaakt worden.
