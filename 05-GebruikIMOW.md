# Regels voor de OW-aanlevering als onderdeel van een aanlevering aan de LVBB {#H05-GebruikIMOW}

Een aanlevering aan de LVBB initieert of wijzigt één of meer
regelingen. Om de OW-objecten behorend bij de regeling te maken of te wijzigen
koppel je aan de wijziging een OW-aanlevering. Dit hoofdstuk beschrijft
eerst op welke manier een OW-aanlevering de collectie OW-objecten bij een
regeling wijzigt. Daarna is beschreven hoe de OW-aanlevering in verschillende
consolidatiescenario's gebruikt kan worden.

Merk op dat bij één aanlevering aan de LVBB, een LVBB-aanlevering, één
OW-manifest hoort dat weer verschillende OW-aanleveringen kan bevatten. Dit komt
bijvoorbeeld voor bij een Besluit dat meerdere Regelingen wijzigt.

## Basisprincipe van de OW-aanlevering

In STOP zijn vier soorten van aanleveringen die kunnen resulteren in een nieuwe
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
resultaatcollectie. Een OW-aanlevering is gekoppeld aan een OP-aanlevering waarbij
het STOP-deel de tekst van de regeling wijzigt en de OW-aanlevering de bij de
regeling behorende OW-objecten wijzigt. Een initieel besluit is een speciaal geval
omdat deze een Regeling aanmaakt en niet wijzigt, de bijbehorende OW-aanlevering
zal dus ook alleen OW-objecten aanmaken. Ook als bij een STOP wijziging geen
OW-objecten worden gewijzigd moet een OW-aanlevering gedaan te worden.

Een OW-aanlevering heeft zelf de vorm van een collectie OW-objecten. De
aanlevering van een OW-object resulteert in (1) een nieuw OW-object, (2) een
gewijzigd OW-object of (3) een beëindigd OW-object. Deze drie situaties
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

Een kenmerk is een attribuut of uitgaande associatie van het OW-object.

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

**Noot:** Het is mogelijk dat een beëindigd OW-object weer herleeft. Dat wordt
gedaan door beëindigd OW-object te wijzigen en weer de status actief te geven.

### Een OW-object beëindigen {#H05-OW-eindigen}

Wanneer een OW-object wordt aangeleverd waarbij het veld status de waarde 'B'
heeft dan krijgt het oorspronkelijke OW-object de status beëindigd.

**Regel:** Het beëindigen van een OW-object is alleen toegestaan als de inhoud van
het object, afgezien van het attribuut 'status', exact overeenkomt met de laatst
aangeleverde OW-informatie (OZON0107).

### Resultaat OW-aanlevering

Een OW-aanlevering bestaat uit een set instructies, die de
OW-objecten behorend bij een Regeling toevoegt, wijzigt en/of beëindigt.
Na het uitvoeren van de instructies is een nieuwe set OW-objecten ontstaan
behorend bij de regelingversie. VOor veel van de OW-objecten gelden regels
die in de catalogus zijn opgenomen. Sommige regels gelden niet voor
een individueel object, maar voor het totaal aan OW-objecten behorend
bij de regelingversie. Deze regels zijn hieronder opgenomen:

**Regels:**

- Een OW-aanlevering mag niet resulteren in wees-objecten (OZON0351). Wees-objecten zijn 
  OW-objecten waar niet meer naar verwezen wordt.
- Een OW-aanlevering mag niet resulteren in verwijzingen naar
  OW-objecten die beëindigd zijn (OZON0109).
- Een OW-aanlevering moet resulteren in een Regeling met daarin precies
  één Regelingsgebied.
- Een OW-aanlevering moet resulteren in een Regeling met daarin
  maximaal één Pons-object.
- Bij een Lid of Artikel met een STOP-element Inhoud moet er precies één Regeltekst-object zijn (TPOD2050)
- Een Lid of Artikel zonder een Inhoud-element mag geen Regeltekst-object hebben.
- Er mag hoogstens één Regeltekst-object naar een Artikel/Lid verwijzen.
- Er mag hoogstens één OW Divisietekst-object naar een OP Divisietekst verwijzen (TPOD2052).

## Het gebruik van een OW-aanlevering {#05-ow-aanlevering}

Als een OP-aanlevering een regeling instelt, wijzigt of intrekt
kan daaraan een OW-aanlevering gekoppeld worden om de OW-objecten behorend bij die
regeling te maken, wijzigen of beëindigen. Het IMOW volgt de verschillende
typen OP-aanlevering en legt alleen vast hoe je aan de OP-aanlevering
een OW-aanlevering kunt koppelen die de wijzigingen van OW-objecten regelt.

In de volgende paragrafen is voor de verschillende typen OP-aanleveringen
beschreven hoe dat gaat.

### OW-aanlevering bij een besluit dat een regeling initieert of wijzigt

Bij een besluit om een omgevingsdocument te initiëren of te wijzigen
bevat de OP-aanlevering een regeling mutatie element. In dat element
is aangegeven om welke regeling het gaat en wat de wId van de was - en wordt-versie
van de regeling zijn.

Voor een OW-aanlevering die hoort bij een Besluit dat een Regeling wijzigt
geldt:

**Regel:** De attributen 'workIDRegeling', 'doelID' en 'expresionIDRegeling' van een
OW-aanlevering corresponderen met precies één nieuwe regelingversie die in een aanlevering
wordt aangemaakt.

### OW-aanlevering bij rectificatie, revisie of mededeling uitspraak van de rechter

STOP kent ook aanleveringen die een rectificatie, revisie of mededeling uitspraak van de rechter bevatten
die resulteren in een nieuwe regelingversie.  Net zoals bij besluiten die een regeling
wijzigen bevat zon'n aanlevering een regeling mutatie element en verwijst de meegeleverde
OW-aanlevering naar het regeling mutatie element.

### Het intrekken van een regeling {#H05-IntrekkenRegeling}

Wanneer een regeling wordt ingetrokken moeten alle OW-objecten bij die regeling
beëindigd worden. Als er geen OW-aanlevering aan de intrekking gekoppeld is zal het stelsel
zelf alle OW-objecten behorend bij de regeling beëindigen. Als er wel een OW-aanlevering gekoppeld
is aan aan de intrekking zal het stelsel controleren of deze OW-aanlevering de OW-objecten
behorend bij de regeling op de juiste wijze beëindigt.
In beide gevallen zal gecontroleerd worden of er nog externe verwijzingen naar de
OW-objecten bestaan vanuit andere regelingen en zal de intrekking worden afgekeurd.

**Regel:** Omdat een intrekking van een regeling niet resulteert in een nieuwe versie
van die regeling moet het veld expressionIDRegeling in de OW-aanlevering leeg zijn.

### Het aanleveren van een Ontwerpbesluit

In STOP kunnen ontwerpregelingen gemaakt worden met een
ontwerpbesluit. Zo'n ontwerpbesluit wijzigt een bestaande regelingversie.
Een OW-aanlevering bij een ontwerpbesluit gedraagt zich hetzelfde
als een aanlevering bij een regulier besluit maar is wel herkenbaar
als behorend bij een ontwerpbesluit en kan dus anders getoond worden
in een viewer.
