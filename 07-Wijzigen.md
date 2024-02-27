# Gebruik van OW-aanlevering bij LVBB {#210F8E1C}

Een OW-aanlevering definieert een wijziging van de OW-objecten behorend bij
een regeling en is op verschillende manier in te zitten. Dit hoofdstuk beschrijft eerst op welke manier een OW-aanlevering de collectie OW-objecten bij een Regeling wijzigt. Daarna staat beschreven hoe de OW-aanlevering in verschillende mutatiescenario's gebruikt kan worden.

Merk op dat bij één aanlevering aan de LVBB, een LVBB-aanlevering, één OW-manifest hoort die weer verschillende OW-aanleveringen kan bevatten. Dit komt bijvoorbeeld voor bij een Besluit dat meerdere Regelingen wijzigt.


## OW-aanlevering voor het wijzgen van de OW-objecten behorend bij een Regeling{#6BC0303B}

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

Een besluit dat een Regeling 

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
