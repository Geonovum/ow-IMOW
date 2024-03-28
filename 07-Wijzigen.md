# Gebruik van OW-aanlevering bij LVBB {#210F8E1C}

Een Besluit dat aangeleverd wordt aan de LVBB initieert of wijzigt een aantal
regelingen. Om de OW-objecten behorend bij de regeling te maken of te wijzigen
koppel je aan de wijziging een OW-aanlevering. Dit hoofdstuk beschrijft
eerst op welke manier een OW-aanlevering de collectie OW-objecten bij een
regeling wijzigt. Daarna is beschreven hoe de OW-aanlevering in verschillende
mutatiescenario's gebruikt kan worden.

Merk op dat bij één aanlevering aan de LVBB, een LVBB-aanlevering, één
OW-manifest hoort dat weer verschillende OW-aanleveringen kan bevatten. Dit komt
bijvoorbeeld voor bij een Besluit dat meerdere Regelingen wijzigt.

## Een OW-aanlevering aan de LVBB {#6BC0303B}

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

### Een nieuw OW-object {#2F9C69B2}

Wanneer een OW-object wordt aangeleverd met een identificatie die nog niet
bestond in de tijdlijn van de Regeling ontstaat een nieuw OW-object. Voor een
nieuw object geldt de volgende regel:

**Regel:** Een nieuw OW-object mag niet de status beëindigd hebben. (OZON0104).

### Een OW-object wijzigen {#3993B196}

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

### Een OW-object beëindigen {#2C21DC35}

Wanneer een OW-object wordt aangeleverd waarbij het veld status de waarde 'B'
heeft dan krijgt het oorspronkelijke OW-object de status beëindigd.

**Regel:** Het beëindigen van een OW-object is alleen toegestaan als de inhoud van
het object, afgezien van het status veld, exact overeenkomt met de laatst
aangeleverde OW-informatie (OZON0107).

### Resultaat OW-aanlevering {#189CCC1E}

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

## Wanneer gebruik je een OW-aanlevering aan de LVBB {#616A8350}

**TODO**: Deze paragraaf moet afgestemd worden met STOP-IC.

Er is een aantal aanlevering aan de LVBB waarbij een OW-aanlevering gebruikt kan worden
om de OW-objecten bij een regeling te wijzigen. Deze worden in de volgende
paragrafen behandeld:

### OW-aanlevering bij Besluit dat Regeling wijzigt {#2AE56890}

Wanneer het bevoegd gezag besluit om een omgevingsdocument te wijzigen moet het
voor de bekendmaking van dat besluit een Aanlevering naar de LVBB sturen. Wanneer
er bij de wijziging ook OW-objecten gewijzigd moeten worden gebeurt dat via een
OW-aanlevering.

Voor een OW-aanlevering die hoort bij een Besluit dat een Regeling wijzigt
geldt:

**Regel:** De waardes van 'workIDRegeling' en 'doelID' van de OW-aanlevering
moeten overeenkomen met de workIdentificatie en doel van het besluit.

### Aanlevering bij Besluit dat Regeling intrekt {#5952605C}

Bij het ontwikkelen van STOP-IC is het de intentie om bij het intrekken van een
Regeling automatisch alle OW-objecten behorend bij die Regeling te beëindigen.
In dat geval hoeven de OW-objecten behorend bij die Regeling niet meer expliciet
beëindigd te worden.

**Regel:** De intrekking van een Regeling is niet gekoppeld aan een
OW-aanlevering.

Immers, alle OW-objecten behorend bij de regeling worden automatisch
ingetrokken.

### Het aanleveren van een Ontwerpbesluit

In STOP kunnen ontwerpregelingen gemaakt worden met een
ontwerpbesluit. Zo'n besluit wijzigt de tekst en de OW-objecten behorend bij een
bestaande regelingversie. Alle OW-objecten die gewijzigd worden in het in
ontwerpbesluit krijgen als procedurestatus de waarde 'ontwerp'. Als het veld
procedurestatus geen waarde heeft dan wordt het OW-object beschouwd als behorend
bij vastgestelde regelgeving.

Voor een STOP ontwerpbesluit gelden de volgende regels:

- Het soortprocedure (c.q. proceduretype) is ontwerp (i.p.v. definitief).
- Er mogen minder procedurestappen gebruikt worden in vergelijking met
  definitieve regelgeving.
- De ConsolidatieInformatie mag geen tijdstempels bevatten.

Ontwerp-OW-objecten worden gezien als een nieuwe versie van een OW-object die
niet hoort bij vastgestelde regelgeving. Dit is ook omdat ontwerpbesluiten niet
gemuteerd kunnen worden, maar een losstaande status hebben t.o.v. vastgestelde
regelgeving. Ontwerp-OW-objecten komen voor bij een initieel ontwerpbesluit en
bij een wijzigingsontwerpbesluit.

Bij een initieel ontwerpbesluit zijn alle OW-objecten on ontwerp. Een
ontwerpwijzigingsbesluit beschrijft een ontwerp ten opzicht van een actuele
regeling. Alleen de OW-objecten die wijzigen ten opzicht van de actuele levering
worden aangeleverd.

Ontwerp-activiteiten zullen niet verschijnen in de registratie van toepasbare
regels, dus er kunnen geen vragenbomen op ontwerp-activiteiten gemaakt worden.

Net zoals bij een 'regulier' wijzigingsbesluit worden bij een
ontwerpwijzigingsbesluit alleen annotaties die wijzigen ten opzichte van de
vastgestelde regelgeving aangeleverd. Het is bij een ontwerpwijzigingsbesluit
wel mogelijk om te verwijzen naar annotaties uit de vastgestelde regelgeving.

**Voorbeeld**: `Artikel 1: Het is verboden om te zwemmen in het centrumgebied.`
wordt gewijzigd in
`Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.`

In dit geval hoeft het Regeltekst-object niet te worden aangeleverd, deze
bestaat immers al. Er is wel noodzaak voor een ontwerpversie van de juridische
regel, aangezien de locatie waar deze regel over gaat wordt uitgebreid. Er is
ook noodzaak voor een nieuwe OW-locatie in ontwerp, aangezien er een
stiltegebied-GIO wordt toegevoegd in dit ontwerpwijzigingsbesluit.

**Voorbeeld**:
`Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.`
wordt gewijzigd in:
`Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.`
en
`Artikel 2: Er geldt een meldingsplicht omtrent het zwemmen in het stiltegebied.`

Voor Artikel 1 wordt de juridische regel die verwijst naar het stiltegebied in
ontwerp gewijzigd t.o.v. de vastgestelde versie van de juridische regel. Voor
Artikel 2 wordt wel een ontwerp-Regeltekst-object aangeleverd inclusief
bijbehorende ontwerp-OW-objecten. De OW-Locatie stiltegebied en de
OW-activiteit zwemmen hoeven niet te worden aangeleverd aangezien deze al
bestonden in vastgestelde regelgeving.

Om wijzigingen van OW-objecten in
het stelsel te kunnen volgend is het aan te bevelen
bij het aanleveren van Ontwerp-OW-objecten de identificaties gelijk
te houden aan de OW-objecten die horen bij vastgestelde regelingen en bij
de uiteindelijke vaststelling van ontwerp objecten weer dezelfde
identificatie te gebruiken.
