# Gebruik van OW-aanlevering bij LVBB {#210F8E1C}

Een OW-aanlevering definieert een wijziging van de OW-objecten behorend bij
een regeling en is op verschillende manier in te zitten. Dit hoofdstuk beschrijft eerst op welke manier een OW-aanlevering de collectie OW-objecten bij een Regeling wijzigt. Daarna staat beschreven hoe de OW-aanlevering in verschillende mutatiescenario's gebruikt kan worden.

Merk op dat bij één aanlevering aan de LVBB, een LVBB-aanlevering, één OW-manifest hoort die weer verschillende OW-aanleveringen kan bevatten. Dit komt bijvoorbeeld voor bij een Besluit dat meerdere Regelingen wijzigt.

## OW-aanlevering voor het wijzigen van de OW-objecten behorend bij een Regeling {#6BC0303B}

Het wijzigen van de collectie OW-objecten behorend bij een Regeling gebeurt via
een OW-aanlevering. De OW-aanlevering bevat wijziginstructies die beschrijven hoe de oorspronkelijke collectie OW-objecten getransformeerd moet worden tot de
resultaat collectie. Een OW-aanlevering gekoppeld aan een STOP
wijziging waarbij het STOP deel de tekst van de regeling wijzigt en de
OW-aanlevering de bij de regeling behorende OW-objecten wijzigt.

Een OW-aanlevering heeft zelf de vorm van een collectie OW-objecten. De
aanlevering van een OW-object resulteert in een (1) nieuw OW-object, (2) een gewijzigd OW-object of (3) het beëindigen van een OW-object. Deze drie
situaties staan in de volgende paragrafen beschreven:

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
het OW-object wijzgen. (OZON0108).

Hierbij wordt een relatie bij een OW-object ook gezien als een kenmerk.

**Regel:** Het type van het gewijzigde OW-object moet door de wijziging onveranderd blijven. RegelVoorIedereen,
Instructieregel en Omgevingswaarderegel zijn verschillende types.

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

**Regel:** Het beëindigen van een OW-object mag alleen als de inhoud van het
object, afgezien van het status veld, exact overeenkomt met de laatst
aangeleverde OW-informatie (OZON0107).

### Resultaat van een wijziging {#189CCC1E}

Een OW-aanlevering bestaat uit een set wijzigingen van OW-objecten, die de
OW-objecten behorend bij een Regeling wijzing. Er zijn verschillende eisen die
gelden voor de volledige set aan OW-objecten behorend bij een Regeling.

**Regel:** Een OW-aanlevering mag niet resulteren in wees-objecten, dat zijn
objecten die niet direct of indirect gekoppeld zijn aan een OW-object dat een
bestaand documentfragment annoteert (OZON0350 t/m OZON0367).

**Regel:** Een OW-aanlevering mag niet resulteren in verwijzingen naar
OW-objecten die beëindigd zijn (OZON0109)

**Regel:** Een OW-aanlevering moet resulteren in een Regeling met daarin
precies één Regelingsgebied object.

**Regel:** Voor ieder Lid en Artikel zonder leden in de Regeling die niet
gereserveerd of vervallen zijn moet er een Regeltekst object zijn.

## Het gebruik van OW-aanleveringen {#616A8350}

Er zijn diverse wijzig-scenarios waarin een OW-aanlevering gebruikt kan worden
om de OW-objecten bij een regeling te wijzigen. Deze worden in de volgende
paragrafen behandeld:

### OW-aanlevering bij Besluit dat Regeling wijzigt {#2AE56890}

Een OW-aanlevering behorend bij een Besluit dat een Regeling wijzigt, wijzigt
de OW-objecten behorend bij die Regeling.

### Aanlevering bij Besluit dat Regeling intrekt {#5952605C}

Bij het ontwikkelen van STOP-IC is het de intentie om bij het intrekken van een
Regeling automatisch alle OW-objecten behorend bij die Regeling te beëindigen.
In dat geval hoeven de OW-objecten behorend bij die Regeling niet meer
expliciet beëindigd te worden.

**Regel:** De intrekking van een Regeling is niet gekoppeld aan een OW-aanlevering.

Immers, alle OW-objecten behorend bij de regeling worden automatisch ingetrokken.

### OW-aanlevering bij directe mutatie {#57FC25F3}

**noot:** directe mutaties zijn alleen bedoeld voor het oplossen van problemen
in de keten, bijvoorbeeld een vastzittende regeling. Op verzoek van het bevoegd
gezag kan deze functionaliteit uitgevoerd worden door beheerders van het
stelsel.

Het is mogelijk OW-objecten te wijzigen zonder dat hier expliciet een besluit
over genomen is. Dit kan middels een directe mutatie (directeMutatieOpdracht).
Bij een directeMutatieOpdracht hoort geen publicatie of bekendmakingsdatum.

Vanuit het manifest-OW wordt verwezen naar het Doel van een vorige aanlevering.
De tijdslijnen van de nieuwe versie van de OW-objecten horen bij de tijdstempels
van dat vorige doel. Dit maakt dat het wijzigen middels een
directeMutatieOpdracht OW-objecten met terugwerkende kracht wijzigen.

Het aanleveren van een OW-object mag alleen gerelateerd zijn aan een Doel met
tijdstempels die niet in het verleden ligt t.o.v. de meest recente wijziging
(OZON0105 en OZON0106). Dit speelt vooral bij directeMutaties (7.4). Dit
betekent dat ik als ik in 2021 een aantal wijzigingsbesluiten heb gemaakt, ik
niet nog eens een wijziging van OW-objecten kan doen n.a.v. een
wijzigingsbesluit uit 2019.

De tijdstempels van de ConsolidatieInformatie van het Besluit bepalen wanneer de
OW-informatie geldig is.

Er zijn OW-objecten waarvan het onlogisch om ze te wijzigen met een
directe mutatie, dit zijn:

- OW-Locaties. Als de noemer van een locatie zou wijzigen dan wordt verwacht dat
  de verwijzing vanuit de Regeling ook gewijzigd wordt. Als de geometrie van de
  locatie wijzigt dan wordt verwacht dat er een aanpassing van de bijbehorende
  GIO wordt aangeleverd. Het zou wel mogelijk zijn om een OW-Locatie te wijzigen
  in het geval dat er gebruik gemaakt dient te worden van een recentere versie
  van een ambtsgebied, of als het hoogte-attribuut van de locatie wordt
  aangevuld/aangepast.
- OW-Regelteksten. Als de verwijzing naar het artikel/lid wordt aangepast, dan
  heeft dit waarschijnlijk ook invloed op de Regeling zelf.
- OW-Divisies/OW-DivisieTeksten. Als de verwijzing naar de divisie/de
  divisietekst wordt aangepast, dan heeft dit waarschijnlijk ook invloed op de
  Regeling zelf.

### Het aanleveren van een Ontwerpbesluit

In de STOP standaard kunnen ontwerpregelingen gemaakt worden met een ontwerpbesluit. Zo'n besluit wijzigt de tekst en de OW-objecten behorend bij een bestaande regelingversie. Alle OW-objecten die gewijzigd worden in het in ontwerpbesluit krijgen als procedurestatus de waarde 'ontwerp' waaruit je kan concluderen dat het object niet bij vastgestelde regelgeving hoort.  Als het veld procedurestatus geen waarde heeft dan wordt het OW-object beschouwd als behorend bij vastgestelde regelgeving.


Voor een STOP ontwerpbesluit gelden de volgende regels:
- Het soortprocedure (c.q. proceduretype) is ontwerp (i.p.v. definitief).
- Er mogen minder procedurestappen gebruikt worden in vergelijking met definitieve regelgeving.
- De ConsolidatieInformatie mag geen tijdstempels bevatten.
Deze ontwerp-OW-objecten worden gezien als een nieuwe versie van een OW-object die niet hoort bij vastgestelde regelgeving. Dit is ook omdat ontwerpbesluiten niet gemuteerd kunnen worden, maar een losstaande status hebben t.o.v. vastgestelde regelgeving. Ontwerp-OW-objecten komen voor bij een initieel ontwerpbesluit en bij een wijzigingsontwerpbesluit.

Bij een initieel ontwerpbesluit zijn alle OW-objecten on ontwerp. Een ontwerpwijzigingsbesluit beschrijft een ontwerp ten opzicht van een actuele regeling. Alleen de OW-objecten die wijzigen ten opzicht van de actuele levering worden aangeleverd. 

Ontwerp-activiteiten zullen niet verschijnen in de registratie van toepasbare regels, dus er kunnen geen vragenbomen op ontwerp-activiteiten gemaakt worden.

Net zoals bij een 'regulier' wijzigingsbesluit worden bij een ontwerpwijzigingsbesluit alleen annotaties die wijzigen ten opzichte van de vastgestelde regelgeving aangeleverd. Het is bij een ontwerpwijzigingsbesluit wel mogelijk om te verwijzen naar annotaties uit de vastgestelde regelgeving. 

Voorbeeld: Artikel 1: Het is verboden om te zwemmen in het centrumgebied.
Gaat gewijzigd worden op de volgende manier: 
Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.

In dit geval hoeft het Regeltekst-object niet te worden aangeleverd, deze bestaat immers al.
Er is wel noodzaak voor een ontwerpversie van de juridische regel, aangezien de locatie waar deze regel over gaat wordt uitgebreid. Er is ook noodzaak voor een nieuwe OW-locatie in ontwerp, aangezien er een stiltegebied-GIO wordt toegevoegd in dit ontwerpwijzigingsbesluit.

Voorbeeld: Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.<br/>
Gaat gewijzigd worden op de volgende manier:<br/>
Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.<br/>
Artikel 2: Er geldt een meldingsplicht omtrent het zwemmen in het stiltegebied.

Voor Artikel 1 wordt de juridische regel die verwijst naar het stiltegebied in ontwerp gewijzigd t.o.v. de vastgestelde versie van de juridische regel. Voor Artikel 2 wordt wel een ontwerp-Regeltekst-object aangeleverd inclusief bijbehorende ontwerp-OW-annotaties. De OW-Locatie stiltegebied en de OW-activiteit zwemmen hoeven niet te worden aangeleverd aangezien deze al bestonden in vastgestelde regelgeving.

Bij het aanleveren van Ontwerp-OW-objecten is het aan te bevelen dat de identificaties identiek blijven aan de OW-objecten die horen bij vastgestelde regelingen. 
