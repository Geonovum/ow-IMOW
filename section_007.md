## <a name='_Ref69207272'></a><a name='Muteren'></a>Muteren met het IMOW

In dit hoofdstuk wordt belicht hoe het werkt als je OW-objecten wilt muteren. Paragraaf <a href='#_Ref74325245'>7.1<a></a> gaat in op de uitgangspunten die relevant zijn voor het muteren. Vervolgens gaat <a href='#_Ref124235575'>7.2<a></a> over het muteren van OW-objecten bij toepassen van de tekst-wijzigingsmethode renvooi. Paragraaf <a href='#_Ref90035667'>7.3<a></a> beschrijft de alternatieve wijzigingsmethoden die gebruikt kunnen worden wanneer het werken met de wijzigingsmethode renvooi nog niet mogelijk is. Paragraaf <a href='#_Ref92188735'>7.4<a></a> gaat over directe mutaties, dit zijn mutaties waar geen wijzigingsbesluit bij wordt aangeleverd. Paragraaf <a href='#_Ref92188749'>7.5<a></a> kijkt naar ontwerp-objecten en hoe deze werken i.r.t. muteren.

### <a name='_Ref74325245'></a><a name='Muteren_uitgangspunten'></a>Uitgangspunten relevant voor muteren

Bij het muteren zijn de volgende drie uitgangspunten van belang:

<ul><li>Stuur alleen gegevens op als deze gewijzigd zijn.</li>
<li>Verwijder expliciet gegevens die niet meer gebruikt worden.</li>
<li>Een wijziging van een object zorgt voor een nieuwe versie van het object.</li>
</ul>

Deze uitgangspunten gelden voor zowel de OP- als de OW-standaard.

#### <a name='Muteren_uitgangspunt_alleengewijzigd'></a>Stuur alleen gegevens op die gewijzigd zijn

Dit uitgangspunt geeft aan dat bij zowel gegevens vanuit de OP-standaard (zoals Besluiten, GIO’s, etc.) als de OW-standaard (Activiteiten, Gebiedsaanwijzingen, etc.) het de bedoeling is om alleen gegevens op te sturen als deze gewijzigd zijn t.o.v. de gegevens die bekend zijn bij het Stelsel.

Bij de OP-standaard zorgt het opsturen van gegevens die al bekend zijn bij het Stelsel niet per se tot een fout, maar het zorgt wel voor een vertroebelde juridische situatie. Bij de OW-standaard zorgt het sturen van een OW-object dat inhoudelijk niet gewijzigd is voor een foutmelding.

(OZON0108 “Het aanleveren van een OW-object mag alleen indien de gegevens aangepast zijn t.o.v. de vorige versie van het OW-object.”)

Kortom, het is van belang om te weten welke gegevens er gewijzigd zijn ten opzichte van een vorige aanlevering bij het DSO-LV om zodoende te zorgen dat alleen de gegevens worden gestuurd die verschillen van de vorige aanlevering (in de praktijk de gegevens die nu in het DSO-LV zitten).

#### <a name='Muteren_uitgangspunt_verwijderexpliciet'></a>Verwijder expliciet gegevens die niet meer gebruikt worden

Dit uitgangspunt geeft aan dat bij zowel gegevens uit de OP-standaard (zoals GIO’s, Regelingen, etc.) als bij de OW-standaard (Activiteiten, Gebiedsaanwijzingen, etc.) het de bedoeling is om expliciet gegevens te verwijderen die niet meer gebruikt worden.

Aan de OP-kant gebeurt dit middels intrekkingen van de instrumentVersies.

Aan de OW-kant gebeurt dit middels de status ‘beëindigen’ mee te geven.

#### <a name='Muteren_uitgangspunt_wijzigenobjecten'></a>Een wijziging van een object zorgt voor een nieuwe versie van het object

Dit uitgangspunt geeft aan dat het wijzigen van een object er altijd voor zorgt dat de vorige versie van het object nog steeds bestaat. Hierdoor is het altijd zo dat je kunt tijdreizen in het DSO, wat betekent dat je kunt kijken hoe de toestand er op een bepaalde datum uitzag. Kortom, het beëindigen van een object zorgt er alleen voor het deactiveren van een object, aangezien het object nog steeds bestaat in het DSO.

De tijdstempels vanuit de ConsolidatieInformatie van het Besluit bepalen wanneer bepaalde OW-informatie juridisch werkend is.

### <a name='_Ref124235575'></a><a name='Muteren_regulier'></a>OW-objecten bij wijzigingsmethode renvooi

Uitgangspunt van de STOP/TPOD-standaard is dat bij het wijzigen van een regeling de wijzigingsmethode renvooi wordt toegepast. Bij deze methode hoort bij een wijzigingsbesluit een RegelingMutatie met hierin allerlei mutatieacties. Deze staan beschreven op de documentatiepagina over <a href='https://koop.gitlab.io/STOP/standaard/bepalen_wijzigingen_renvooi.html' target='_blank'>renvooieren</a> en <a href='https://koop.gitlab.io/STOP/standaard/1.0.4/tekstmuteren.html' target='_blank'>muteren van tekst</a> van de OP-standaard.

Voor OW-objecten betekent het aanleveren van een object:

<ul><li>Bij een nieuw object krijgt dit een nieuwe identificatie (zoals bij een eerste aanlevering) – <i>dit wordt door het DSO niet als mutatie gezien.</i></li>
<li>Bij het wijzigen van een object wordt dezelfde identificatie meegegeven, maar is de invulling van het object anders – <i>dit wordt door het DSO als mutatie van een OW-object gezien.</i></li>
<li>Bij het laten vervallen van een object wordt een status ‘beëindigen’ meegegeven – <i>dit wordt</i> <i>ook als mutatie van een OW-object gezien</i>.</li>
</ul>

#### <a name='Muteren_regulier_nieuwobject'></a>Nieuw object

<figure><img src='media/image20.png' alt='media/image20.png' style='width: 100%;'></img>
<figcaption></figcaption></figure>

Om te constateren of iets een nieuw object is wordt er gekeken naar de identificatie.

Is de identificatie van het object onbekend bij het DSO, dan wordt het object gezien als nieuw object.

Voor het opvoeren van een nieuw object gelden een aantal regels, namelijk:

De eerste keer dat een nieuw object wordt aangeleverd mag deze niet de status beëindigd hebben (OZON0104).

Als er verwezen wordt naar andere OW-objecten, dan moeten deze bestaan (OZON0109)<br/>dit betekent dat de OW-objecten waar naar verwezen wordt ofwel aangeleverd moeten worden ofwel al aangeleverd moeten zijn.

#### <a name='Muteren_regulier_wijzigenobject'></a>Wijziging van een object

<figure><img src='media/image21.png' alt='media/image21.png' style='width: 100%;'></img>
<figcaption></figcaption></figure>

Om te constateren of een object gewijzigd wordt, wordt gekeken naar de identificatie van een object. Is de identificatie van een object al bekend in het DSO, dan wordt gekeken of de inhoud veranderd is.

Voor het wijzigen van objecten gelden een aantal regels, namelijk:

<ul><li>Het aanleveren van een OW-object mag alleen indien de gegevens zijn aangepast t.o.v. de vorige versie van het OW-object (OZON0108). Hierbij wordt een nieuwe relatie bij een OW-object ook gezien als een gegeven.</li>
<li>Het aanleveren van een OW-object mag alleen gerelateerd zijn aan een Doel met tijdstempels die niet in het verleden ligt t.o.v. de meest recente wijziging (OZON0105 en OZON0106). Dit speelt vooral bij directeMutaties (<a href='#_Ref92188852'>7.4<a></a>).<br/><i>Dit betekent dat ik als ik in 2021 een aantal wijzigingsbesluiten heb gemaakt, ik niet nog eens een wijziging van OW-objecten kan doen n.a.v. een wijzigingsbesluit uit 2019.</i></li>
<li>Door het wijzigen van een object mogen er geen wees-objecten, dat zijn objecten waar niet meer naar verwezen wordt, ontstaan (OZON0350 t/m OZON0367).</li>
<li>De volgende IMOW-elementen zijn geen objecten en kunnen derhalve niet direct gewijzigd worden:<ul><li>ActiviteitLocatieaanduiding – deze moet altijd gewijzigd worden vanuit een RegelVoorIedereen.</li>
<li>Normwaarde – deze moet altijd gewijzigd worden vanuit een Omgevingsnorm of Omgevingswaarde.</li>
<li>Kaartlaag – deze moet altijd gewijzigd worden vanuit een Kaart.</li>
</ul>

</li>
</ul>

#### <a name='Muteren_regulier_beëindigenobject'></a>Beëindigen van object

<figure><img src='media/image22.png' alt='media/image22.png' style='width: 100%;'></img>
<figcaption></figcaption></figure>

Bij het beëindigen van een object wordt gekeken naar de identificatie om te bepalen welk object beëindigd moet worden.

Voor het beëindigen van objecten gelden een aantal regels, namelijk:

<ul><li>Het beëindigen van een object mag alleen als de inhoud exact overeenkomt met de laatst aangeleverde OW-informatie (OZON0107).</li>
<li>Door het wijzigen van een object mogen er geen wees-objecten, dat zijn objecten waar niet meer naar verwezen wordt, ontstaan.<a name='_Ref74325284'></a><a name='Muteren_intrekkenvervangen'></a></li>
</ul>

### <a name='_Ref90035667'></a>Alternatieven voor de wijzigingsmethode renvooi

Voor de situatie dat het werken met de wijzigingsmethode renvooi nog niet mogelijk is, zijn er twee alternatieve wijzigingsmethoden beschikbaar. De eerste alternatieve methode is Intrekken & vervangen, dat is beschreven in paragraaf <a href='#_Ref118061668'>7.3.1<a></a>. De tweede alternatieve methode is Integrale tekstvervanging, het onderwerp van paragraaf <a href='#_Ref90035678'>7.3.2<a></a>.

#### <a name='_Ref118061668'></a>Intrekken & vervangen

<a name='_Ref90035660'></a>Bij de alternatieve methode Intrekken & vervangen wordt de volledige STOP-regeling ingetrokken en vervangen door een nieuwe regeling. Daarnaast moeten de OW-objecten die je wilt wijzigen bij de intrekking-vervanging gewijzigd worden. Hiervoor gelden dezelfde uitgangspunten die gelden voor de wijzigingsmethode renvooi, te weten:

<ul><li>Stuur alleen gegevens op als deze gewijzigd zijn.</li>
<li>Verwijder expliciet gegevens die niet meer gebruikt worden.</li>
<li>Een wijziging van een object zorgt voor een nieuwe versie van het object.</li>
</ul>

Op het uitgangspunt ‘Stuur alleen gegevens op als deze gewijzigd zijn’ geldt een uitzondering voor de objecttypen:

<ul><li>Regeltekst </li>
<li>Divisie</li>
<li>Divisietekst</li>
<li>Pons</li>
<li>Regelingsgebied</li>
</ul>

Deze objecten zijn direct verbonden met de Regeling. Ze moeten daarom altijd opnieuw worden aangeleverd. Ze hoeven echter niet beëindigd te worden. De beëindiging van de objecten die direct met de Regeling verbonden zijn gebeurt immers al op Regeling-niveau. NB: als een Regeltekst, Divisie of Divisietekst niet meer bestaat, moet het OW-object wel worden beëindigd. 

Aspecten van STOP die van belang zijn voor Intrekken & vervangen:

<ul><li>Het is verplicht de nieuwe RegelingVersieInformatie op te sturen; STOP staat niet toe dat de RegelingVersieInformatie van de oude regeling wordt opgestuurd.</li>
<li>Er moet een opvolgingsrelatie opgestuurd worden bij de nieuwe Regeling waarin wordt aangegeven dat deze opvolger is van de oude Regeling (o.b.v. de FRBRWork van de oude regeling).</li>
</ul>

Let op: Intrekken & vervangen kan niet gebruikt worden als er een tijdelijkDeel bij de Regeling hoort. (“OZON1033 Intrekken/Vervangen van een RegelingVersie is niet toegestaan wanneer er een Tijdelijk Deel naar verwijst”)

Het tijdelijkDeel is bedoeld voor regels uit reactieve interventie, voorbereidingsbesluit en projectbesluit, die al dan niet tijdelijk deel uitmaken van een geconsolideerde regeling.

#### <a name='_Ref90035678'></a>Integrale tekstvervanging

<a name='_Hlk113026027'></a><a name='_Ref74325602'></a><a name='Muteren_directemutaties'></a>De tweede alternatieve wijzigingsmethode is Integrale tekstvervanging. Bij deze methode wordt de Regeling<i>versie</i> vervangen. Integrale tekstvervanging kan ook worden gebruikt als er een of meer tijdelijkDelen bij de Regeling horen. Voor het omgevingsplan en de omgevingsverordening is dit daarom de aanbevolen alternatieve wijzigingsmethode. 

Deze methode leidt tot een regulier wijzigingsbesluit, aangezien er geen nieuw (Work)ID van de Regeling hoeft te worden gemaakt. De uitgangspunten voor het muteren gelden dus onverkort:

<ul><li>Stuur alleen gegevens op als deze gewijzigd zijn.</li>
<li>Verwijder expliciet gegevens die niet meer gebruikt worden.</li>
<li>Een wijziging van een object zorgt voor een nieuwe versie van het object.</li>
</ul>

Bij Integrale tekstvervanging gelden derhalve niet de uitzonderingen voor Regeltekst, Divisie, Divisietekst en Regelingsgebied die bij Intrekken & vervanging wel van toepassing zijn.

### <a name='_Ref92188735'></a><a name='_Ref92188852'></a>Directe mutaties

Het is mogelijk dat er een wijziging nodig is van OW-objecten zonder dat hier expliciet een besluit over genomen is. Dit kan middels een directe mutatie (directeMutatieOpdracht).

Bij een directeMutatieOpdracht hoort geen publicatie of bekendmakingsdatum.

Dit maakt het mogelijk om achteraf additionele annotaties aan te vullen zonder een besluit te hoeven nemen.

Vanuit het manifest-OW wordt verwezen naar het Doel van een vorige aanlevering.

De tijdslijnen van de nieuwe versie van de OW-objecten horen bij de tijdstempels van dat vorige doel. Kortom, het wijzigen middels een directeMutatieOpdracht maakt dat OW-objecten met terugwerkende kracht gewijzigd worden.

Er zijn OW-objecten waarvan het onlogisch is dat deze gewijzigd worden met een directe mutatie, dit zijn:

<ul><li>OW-Locaties. Als de noemer van een locatie zou wijzigen dan wordt verwacht dat de verwijzing vanuit de Regeling ook gewijzigd wordt. Als de geometrie van de locatie wijzigt dan wordt verwacht dat er een aanpassing van de bijbehorende GIO wordt aangeleverd. <br/>Het zou wel mogelijk zijn om een OW-Locatie te wijzigen in het geval dat er gebruik gemaakt dient te worden van een recentere versie van een ambtsgebied, of als het hoogte-attribuut van de locatie wordt aangevuld/aangepast.</li>
<li>OW-Regelteksten. Als de verwijzing naar het artikel/lid wordt aangepast, dan heeft dit waarschijnlijk ook invloed op de Regeling zelf.</li>
<li>OW-Divisies/OW-DivisieTeksten. Als de verwijzing naar de divisie/de divisietekst wordt aangepast, dan heeft dit waarschijnlijk ook invloed op de Regeling zelf.<a name='_Ref74325613'></a><a name='Muteren_ontwerp'></a></li>
</ul>

### <a name='_Ref92176455'></a><a name='_Ref92188749'></a>Ontwerp-objecten

In OW is het mogelijk om ontwerp-objecten op te nemen, dit kan middels het attribuut procedurestatus, zoals beschreven in Paragraaf <a href='#_Ref36460902'>3.2.3<a></a>. Een OW-object dat de procedurestatus ontwerp heeft wordt anders behandeld dan OW-objecten die dat niet hebben.

Aan de STOP-kant betekent een ontwerp het volgende:

<ul><li>Het soortprocedure (c.q. proceduretype) is ontwerp (i.p.v. definitief)</li>
<li>Er mogen minder procedurestappen gebruikt worden in vergelijking met definitieve regelgeving</li>
<li>De ConsolidatieInformatie mag geen tijdstempels bevatten (het ontwerp wordt immers niet geconsolideerd met bestaande regelgeving).</li>
</ul>

OW-objecten met de procedurestatus ‘ontwerp’ kunnen niet gemuteerd worden. Deze ontwerp-OW-objecten worden gezien als een nieuwe versie van een OW-object die niet hoort bij vastgestelde regelgeving. Dit is ook omdat ontwerpbesluiten niet gemuteerd kunnen worden, maar een losstaande status hebben t.o.v. vastgestelde regelgeving. Er zijn twee soorten aanleveringen die ontwerp-objecten kunnen bevatten, namelijk:

<ul><li>De eerste aanlevering (c.q. initieel ontwerpbesluit)</li>
<li>Een wijzigingsbesluit (c.q. ontwerpwijzigingsbesluit)</li>
</ul>

#### <a name='Muteren_ontwerp_initieel'></a>Initieel ontwerpbesluit

Bij een initieel ontwerpbesluit wordt verwacht dat alle OW-objecten in de procedurestatus ontwerp worden aangeleverd. Echter, bij een ontwerpwijzigingsbesluit hoeven alleen de annotaties die zijn gewijzigd ten opzichte van de vastgestelde regeling te worden aangeleverd.

Bijvoorbeeld: Een initieel omgevingsdocument met o.a. een artikel in de regeling waarmee het slopen van karakteristieke panden verboden wordt.

Deze Regeling bevat een activiteit (slopen van karakteristieke panden) met de procedurestatus ontwerp. Daarnaast wordt ook verwacht dat een juridische regel (regel voor iedereen, incl. activiteitlocatieaanduiding) en een regeltekst-object, beiden met de procedurestatus ontwerp, worden aangeboden.

Kortom, iedere annotatie behorend bij het initieel ontwerpbesluit zal met de procedurestatus ontwerp moeten worden aangeleverd.

Ontwerp-activiteiten zullen niet verschijnen in de registratie van toepasbare regels, dus er kunnen geen vragenbomen op ontwerp-activiteiten gemaakt worden.

#### <a name='Muteren_ontwerp_wijzigen'></a>Ontwerpwijzigingsbesluit

Net zoals bij een ‘regulier’ wijzigingsbesluit worden bij een ontwerpwijzigingsbesluit alleen annotaties die wijzigen ten opzichte van de vastgestelde regelgeving aangeleverd. Het is bij een ontwerpwijzigingsbesluit wel mogelijk om te verwijzen naar annotaties uit de vastgestelde regelgeving.

Voorbeeld: Artikel 1: Het is verboden om te zwemmen in het centrumgebied.

Gaat gewijzigd worden op de volgende manier: 

Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.

In dit geval hoeft het Regeltekst-object niet te worden aangeleverd, deze bestaat immers al.

Er is wel noodzaak voor een ontwerpversie van de juridische regel, aangezien de locatie waar deze regel over gaat wordt uitgebreid. Er is ook noodzaak voor een nieuwe OW-locatie in ontwerp, aangezien er een stiltegebied-GIO wordt toegevoegd in dit ontwerpwijzigingsbesluit.

Voorbeeld: Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.

Gaat gewijzigd worden op de volgende manier:

Artikel 1: Het is verboden om te zwemmen in het centrumgebied en in het stiltegebied.

Artikel 2: Er geldt een meldingsplicht omtrent het zwemmen in het stiltegebied.

Voor Artikel 1 wordt de juridische regel die verwijst naar het stiltegebied in ontwerp gewijzigd t.o.v. de vastgestelde versie van de juridische regel. Voor Artikel 2 wordt wel een ontwerp-Regeltekst-object aangeleverd inclusief bijbehorende ontwerp-OW-annotaties. De OW-Locatie stiltegebied en de OW-activiteit zwemmen hoeven niet te worden aangeleverd aangezien deze al bestonden in vastgestelde regelgeving.

Ontwerp-OW-objecten mogen verwijzen naar vastgestelde regelgeving, maar andersom is niet het geval. Vastgestelde regelgeving mag niet verwijzen naar ontwerp-objecten.

Bij het aanleveren van Ontwerp-OW-objecten is het zeer aan te bevelen dat de identificaties identiek blijven aan de OW-objecten die horen bij vastgestelde regelingen. De voorziening zorgt ervoor dat er geen validatieconflicten zijn, omdat ontwerp-objecten in aparte tabellen gepersisteerd worden.

