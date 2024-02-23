# Het wijzigen van OW-objecten {#210F8E1C}

Dit hoofdstuk beschrijf hoe je OW-objecten wijzigt. Paragraaf <a href='#6BC0303B'>7.1</a> beschrijft de uitgangspunten. Vervolgens beschrijft paragraaf <b><a href='#'>Fout! Verwijzingsbron niet gevonden.</a></b> hoe OW-wijzigingen in verschillende scenario’s gebruikt kan worden. Paragraaf <b><a href='#'>Fout! Verwijzingsbron niet gevonden.</a></b> beschrijft regels met betrekking tot ontwerpregelingen.<br/>
## Uitgangspunten relevant voor wijzigen {#6BC0303B}

Het wijzigen van de collectie OW-objecten behorend bij een Regeling gebeurt via een OW-aanlevering. Deze OW-aanlevering bevat wijziginstructies beschrijft hoe de oorspronkelijke collectie OW-objecten getransformeerd moet worden tot de resultaat collectie.  Doorgaans is zo’n OW-aanlevering gekoppeld aan een STOP wijziging waarbij het STOP deel de tekst van de regeling wijzigt en de OW-aanlevering de bij de regeling behorende OW-objecten wijzigt.

Een OW-aanlevering heeft zelf de vorm van een collectie OW-objecten. De aanlevering van een OW-object resulteert in een nieuw OW-object (zie <b><a href='#'>Fout! Verwijzingsbron niet gevonden.</a></b>), een gewijzigd OW-object (zie <b><a href='#'>Fout! Verwijzingsbron niet gevonden.</a></b>) of het beëindigen van een OW-object (zie <a href='#2C21DC35'>7.1.3</a>).

In de volgende paragrafen staat regels voor de drie situaties.

### Een nieuw OW-object {#2F9C69B2}

Wanneer een OW-object wordt aangeleverd met een identificatie die nog niet bestond in de oorspronkelijke collectie ontstaat een nieuw OW-object. Voor een nieuw object geldt de volgende regel:

<b>Regel:</b> Een nieuw OW-object mag niet de status beëindigd hebben. (OZON0104).<br/>
### Een OW-object wijzigen {#3993B196}

Wanneer een OW-object wordt aangeleverd met een identificatie die al bestond in de oorspronkelijke collectie vervangt het aangeleverde OW-object het bestaande OW-object.

<b>Regel</b>: Een wijziging van een OW-object moet daadwerkelijk een kenmerk van het OW-object wijzgen. (OZON0108). Hierbij wordt een relatie bij een OW-object ook gezien als een kenmerk.<br/>
.<br/>
<ol><li><b>Regel</b>: Het type van een OW-object niet wijzigen. RegelVoorIedereen, Instructieregel en Omgevingswaarderegel zijn verschillende types.</li>
</ol>

<ol><li>De volgende IMOW-elementen zijn geen objecten en kunnen derhalve niet direct gewijzigd worden:<ul><li>ActiviteitLocatieaanduiding – deze moet altijd gewijzigd worden vanuit een RegelVoorIedereen.</li>
<li>Normwaarde – deze moet altijd gewijzigd worden vanuit een Omgevingsnorm of Omgevingswaarde.</li>
<li>Kaartlaag – deze moet altijd gewijzigd worden vanuit een Kaart.</li>
</ul>

</li>
</ol>

### Een OW-object beëindigen {#2C21DC35}

Wanneer een OW-object wordt aangeleverd waarbij het veld status de waarde ''‘B''’'''' heeft dan krijgt het oorspronkelijke OW-object de status beëindigd.

<b>Regel</b>: Het beëindigen van een OW-object mag alleen als de inhoud van het object, afgezien van het status veld, exact overeenkomt met de laatst aangeleverde OW-informatie (OZON0107).<br/>
### Resultaat van een wijziging {#189CCC1E}

Een OW-aanlevering bestaat uit een set wijzigingen van OW-objecten, die de OW-objecten behorend bij een Regeling wijzing. Er zijn verschillende eisen die gelden voor de volledige set aan OW-objecten behorend bij een Regeling. 

<b>Regel</b>: Een OW-aanlevering mag niet resulteren in wees-objecten, dat zijn objecten  die niet direct of indirect gekoppeld zijn aan een OW-object dat een bestaand documentfragment annoteert (OZON0350 t/m OZON0367).

<b>Rege</b>l: Een OW-aanlevering mag niet resulteren in verwijzingen naar OW-objecten die niet bestaan (OZON0109)

<b>Regel: </b>Een OW-aanlevering moet altijd resulteren in een Regeling met daarin precies één Regelingsgebied object.

<b>Regel</b>: Voor ieder Lid en Artikel zonder leden in de Regeling die niet gereserveerd of vervallen zijn moet er een Regeltekst object zijn.<br/>
## Het gebruik van OW-aanleveringen {#616A8350}

Er zijn diverse wijzig-scenarios waarin een OW-aanlevering gebruikt kan worden om de OW-objecten bij een regeling te wijzigen. Deze worden in de volgende paragrafen behandeld:<br/>
### OW-aanlevering bij besluit {#2AE56890}

Het aanleveren van een OW-object mag alleen gerelateerd zijn aan een Doel met tijdstempels die niet in het verleden ligt t.o.v. de meest recente wijziging (OZON0105 en OZON0106). Dit speelt vooral bij directeMutaties (7.4).<br/>
Dit betekent dat ik als ik in 2021 een aantal wijzigingsbesluiten heb gemaakt, ik niet nog eens een wijziging van OW-objecten kan doen n.a.v. een wijzigingsbesluit uit 2019.

### OW-aanlevering bij intrekking {#5952605C}

TODO: dit zou de plek zijn om te beschrijven dat bij een intrekking alleen objecten verwijderd mogen worden.

### OW-aanlevering bij directe mutatie {#57FC25F3}

<b>Noot: </b>directe mutaties zijn alleen bedoeld voor het oplossen van problemen in de keten, bijvoorbeeld een vastzittende regeling. Op verzoek van het bevoegd gezag kan deze functionaliteit uitgevoerd worden door beheerders van het stelsel. 

Het is mogelijk OW-objecten te wijzigen zonder dat hier expliciet een besluit over genomen is. Dit kan middels een directe mutatie (directeMutatieOpdracht).<br/>
Bij een directeMutatieOpdracht hoort geen publicatie of bekendmakingsdatum.

Vanuit het manifest-OW wordt verwezen naar het Doel van een vorige aanlevering.<br/>
De tijdslijnen van de nieuwe versie van de OW-objecten horen bij de tijdstempels van dat vorige doel. Dit maakt dat het wijzigen middels een directeMutatieOpdracht OW-objecten met terugwerkende kracht wijzigen.

Het aanleveren van een OW-object mag alleen gerelateerd zijn aan een Doel met tijdstempels die niet in het verleden ligt t.o.v. de meest recente wijziging (OZON0105 en OZON0106). Dit speelt vooral bij directeMutaties (7.4).<br/>
Dit betekent dat ik als ik in 2021 een aantal wijzigingsbesluiten heb gemaakt, ik niet nog eens een wijziging van OW-objecten kan doen n.a.v. een wijzigingsbesluit uit 2019.

De tijdstempels van de ConsolidatieInformatie van het Besluit bepalen wanneer de OW-informatie geldig is.

Er zijn OW-objecten waarvan het onlogisch is dat deze gewijzigd worden met een directe mutatie, dit zijn:
 - OW-Locaties. Als de noemer van een locatie zou wijzigen dan wordt verwacht dat de verwijzing vanuit de Regeling ook gewijzigd wordt. Als de geometrie van de locatie wijzigt dan wordt verwacht dat er een aanpassing van de bijbehorende GIO wordt aangeleverd. Het zou wel mogelijk zijn om een OW-Locatie te wijzigen in het geval dat er gebruik gemaakt dient te worden van een recentere versie van een ambtsgebied, of als het hoogte-attribuut van de locatie wordt aangevuld/aangepast.
- OW-Regelteksten. Als de verwijzing naar het artikel/lid wordt aangepast, dan heeft dit waarschijnlijk ook invloed op de Regeling 
zelf.
- OW-Divisies/OW-DivisieTeksten. Als de verwijzing naar de divisie/de divisietekst wordt aangepast, dan heeft dit waarschijnlijk ook invloed op de Regeling zelf.

