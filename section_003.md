## <a name='_Ref92176541'></a>Technische implementatie IMOW

Dit hoofdstuk beschrijft hoe het IMOW technisch ingevuld dient te worden. Het start in paragraaf <a href='#_Ref92176652'>3.1<a></a> met het toelichten van OW-bestanden. In paragraaf <a href='#_Ref80972474'>3.2<a></a> staan randvoorwaarden benoemd bij het aanleveren.<a name='_Ref61449143'></a><a name='Techn_OW'></a>

### <a name='_Ref92176199'></a><a name='_Ref92176652'></a><a name='_Ref92189831'></a>OW-bestanden

Een OW-aanlevering bestaat uit de volgende bestanden:

<ul><li>OW-manifest \[<u>verplicht</u>\]</li>
<li>OW-regelingsgebied \[<u>verplicht</u>, per omgevingsdocument moet altijd het gebied van de regeling een keer zijn aangeleverd. Dit betekent niet dat iedere aanlevering per se een regelingsgebied moet bevatten.\]</li>
<li>OW-specifieke annotaties, dit kunnen zijn:<ul><li>Activiteiten</li>
<li>Gebiedsaanwijzingen</li>
<li>Kaart</li>
<li>Omgevingsnormen</li>
<li>Omgevingswaarden</li>
<li>Pons(en)</li>
<li>Regeltekst(en)</li>
<li>Tekstdeel</li>
<li>Hoofdlijn</li>
</ul>

</li>
<li>OW-Locaties (die verwijzen naar de ID van de geometrie in de meegeleverde GIO, of in het geval van een Ambtsgebied een verwijzing naar de bestuurlijkeGrenzen-voorziening)</li>
</ul>

#### <a name='Techn_OW_manifest'></a>OW-manifest

De OW bestanden zijn opgesomd in het ow specifieke manifest. Hierin plaats je de versie van de regeling waar de aanlevering bij hoort. Vervolgens specificeer je in dit bestand de OW-specifieke annotaties die je meelevert. Hierdoor staat per OW-bestand alleen dezelfde soort objecten gedefinieerd. Per 1.0 is het niet meer mogelijk om in het OW-manifest GML-bestanden mee te geven, dit gebeurt in het (OP-)manifest.

Zie de opgeleverde voorbeeldbestanden voor een concreet voorbeeld van een manifest.<a name='Techn_OW_Regeltekst'></a>

#### Regeltekst

In het regeltekst-bestand leg je de koppeling tussen de gegevens vanuit het IMOP en het IMOW. Dit gebeurt middels het OW-object van Regeltekst. Deze Regeltekst bevat twee attributen die verwijzen naar het IMOP, dit zijn wId en wIdRegeling.

wId verwijst naar het ID van het artikel of lid uit IMOP.

wIdRegeling verwijst naar het ID van de regeling uit IMOP.

Regeltekst heeft zelf ook nog een identificatie, hier wordt naar verwezen vanuit OW-objecten.

In het document van Regeltekst dien je ook Juridische Regels te definiëren. Een juridische regel maakt het mogelijk om te duiden welke OW-objecten worden aangemerkt in een bepaald artikel of lid. Juridische Regel is een abstract objecttype dat drie subtypen heeft, namelijk: RegelVoorIedereen, Instructieregel en Omgevingswaarderegel.

De Juridische regels hebben sinds versie 1.0 een identificatie, dit is toegevoegd om te zorgen dat deze te muteren zijn. Tevens hebben ze een attribuut genaamd: ‘artikelOfLid’, welke verwijst naar de OW-Regeltekst. Vul hierin dezelfde waarde van identificatie in als de waarde die is opgenomen in de OW-Regeltekst.identificatie.

Verder kennen OW-objecten ook onderlinge relaties. Zo heeft een Juridische regel een relatie naar o.a. een Activiteit, Omgevingsnorm, Gebiedsaanwijzing en andere objecten. De XSD’s kennen hiervoor een Ref element, zoals ActiviteitenRef. Vul hierin de identificatie in van het gerelateerde objecttype, oftewel de waarde die staat in het element identificatie van het desbetreffende object.

#### <a name='Techn_OW_annotaties'></a>OW-specifieke annotaties

Naast Regeltekst zijn er meerdere OW-objecten die meegeleverd kunnen worden in het IMOW.

Zo heeft een Activiteit een relatie naar een Locatie. De XSD’s kennen hiervoor een Referentie-element, zoals LocatieRef. Vul hierin de identificatie in van het gerelateerde objecttype, dit is de waarde die staat in het element identificatie van het desbetreffende object.

Het is de bedoeling dat de identificaties van OW-objecten in de OW-bestanden geschikt moeten zijn voor het bevoegd gezag (BG) zelf en voor gebruik/afname vanuit de landelijke voorziening digitaal stelsel Omgevingswet (DSO-LV) door het DSO, de BG en derden.

De identificatie van een OW-object, zoals een Locatie, krijgt daarom bij BG een lokale identificatie die bepaald wordt door BG zelf. Deze lokale identificatie komt vervolgens in alle ketens herkenbaar beschikbaar en moet daarom globaal uniek zijn, of gemaakt (kunnen) worden, zodat deze geschikt is voor gebruik in de LVBB en DSO-LV en afnemers daarvan.

Onderstaande beschrijft de specificatie hiervoor.

De lokale identificatie vormt de basis voor de keten van BG naar DSO en weer terug naar BG of derden.

<ul><li>Bij uitwisseling van informatie in ketens met andere partijen, dan wordt deze lokale identificatie globaal uniek gemaakt, via vaste afspraken (zie 3.2.1).</li>
<li>Keten van plan tot publicatie, opname in OP bestanden: zie OP specificatie.</li>
<li>Keten van plan tot publicatie, opname in OW bestanden: zie hieronder.</li>
</ul>

Als er sprake is van informatie die én in OW-bestanden zit én in OP-bestanden zit, dan is de lokale identificatie het verbindende gegeven.

#### <a name='_Ref49518173'></a><a name='_Ref49518209'></a><a name='_Ref52186390'></a><a name='Techn_OW_GML'></a>GML-bestanden

<a name='_Ref36562789'></a>De GML-specificaties volgen de regels van de standaard Basisgeometrie (de versie die is vastgesteld op 30 september 2020): <a href='https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20200930/' target='_blank'>https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20200930/</a>

Het bijbehorende GML applicatieschema Basisgeometrie.xsd is gepubliceerd op: <a href='https://register.geostandaarden.nl/gmlapplicatieschema/basisgeometrie/' target='_blank'>https://register.geostandaarden.nl/gmlapplicatieschema/basisgeometrie/</a>

Voor de zelfstandig leesbaarheid van IMOW-standaard is de inhoud van de genoemde standaard Basisgeometrie en het schema ook opgenomen in IMOW.

<b>GML-versie en profiel:</b> GML 3.2.2 – SF-0.<br/>Simple features profile 0 is gekozen omdat de inhoud van dit model geen constructies heeft die complexer zijn dan SF-0. Voor geometrietypen is er tussen SF-0, SF-1 en SF-2 geen verschil. Over de data gekoppeld aan dit geometriemodel wordt niets gezegd. Die hebben hun eigen complexiteitseisen.

<b>Coördinaatreferentiestelsel:</b> Het is verplicht om de srsName in te vullen op het hoogste niveau van een geometrie. Dat betekent dat van een samengestelde geometrie, een multi-geometrie, alleen op het niveau van de samenstelling de srsName verplicht is ingevuld.

Invul-instructie:

<ul><li>RD stelsel (2D): srsName="urn:ogc:def:crs:EPSG::28992"</li>
<li>ETRS89 (2D): srsName="urn:ogc:def:crs:EPSG::4258"</li>
</ul>

De beschrijving van de respectievelijke EPSG codes zijn te vinden onder de url's met het format: "http://www.opengis.net/def/crs/EPSG/0/""epsgcode". Bijvoorbeeld voor EPSG 28992 is dat: <a href='https://www.opengis.net/def/crs/EPSG/0/28992' target='_blank'>https://www.opengis.net/def/crs/EPSG/0/28992</a>

Momenteel worden in het DSO de 3D-coördinatenreferentiestelsels nog niet ondersteund (EPSG:4937, EPSG:7415, EPSG:7423).

<b>gml:id</b><b>:</b> Voor implementatie in GML zijn er aanvullende specificaties als het gaat om het invullen van een gml:id attribuut. Dit gml:id attribuut heeft geen informatiewaarde maar is nodig om interne en externe referenties te realiseren voor gebruik binnen het gml formaat. Voor de GML 3.2.1 was dit een verplicht element maar voor GML 3.2.2 is dit optioneel.

Indien de optionele gml:id wordt toegepast dient deze globaal uniek te zijn en mag de waarde conform de gml specificaties alleen met een letter of een underscore beginnen.

<b>Nauwkeurigheid van coördinaten:</b> Coördinaten opgenomen bij een geometrie worden standaard uitgewisseld met een getalsnauwkeurigheid van 1 mm of het equivalent daarvan in graden. Voor RD,NAP en ETRS89 komt dat overeen met de volgende nauwkeurigheden:

<ul><li>RD in meters 3 decimalen (1 mm);</li>
<li>NAP-hoogte in meters 3 decimalen (1 mm);</li>
<li>ETRS89-breedte in graden 8 decimalen (1,1 mm);</li>
<li>ETRS89-lengte in graden 8 decimalen (0,7 mm);</li>
<li>ETRS89-hoogte in meters 3 decimalen (1 mm).</li>
</ul>

Alles wat nauwkeuriger is wordt afgerond op deze nauwkeurigheid van 3 of 8 decimalen. Afronding is volgens de volgende regel:

0.0015 -\> 0.002;

0.0014 -\> 0.001.

### <a name='_Ref80972474'></a><a name='Techn_aanlever'></a>Randvoorwaarden bij aanleveren

Bij het aanleveren dient er rekening gehouden te worden met verschillende aspecten. In <a href='#_Ref31714815'>3.2.1<a></a> wordt beschreven hoe de identificatie van de objecten er uit dient te zien. In <a href='#_Ref36460877'>3.2.2<a></a> en <a href='#_Ref36460902'>3.2.3<a></a> worden de Status en Procedurestatus beschreven.  In <a href='#_Ref92189168'>3.2.4<a></a> wordt toegelicht hoe de XSD’s er uitzien en waar deze te vinden zijn. In <a href='#_Ref124235539'>3.2.5<a></a> worden waardelijsten beschreven.

#### <a name='_Ref31714815'></a><a name='_Ref31714824'></a><a name='_Ref37400187'></a><a name='_Ref75176935'></a><a name='Techn_aanlever_identificaties'></a>Identificatie van OW-objecten

De wijze van het identificeren van objecten in het IMOW volgt de NEN3610-standaard. De identificatie volgt de volgende reguliere expressie:

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><b>nl\\.</b><b>imow</b><b>-(</b><b>gm|pv|ws|mn|mnre</b><b>)\[0-9\]\{1,6\}\\. (regeltekst|gebied|gebiedengroep|lijn|lijnengroep|punt|puntengroep|activiteit|gebiedsaanwijzing|omgevingswaarde|omgevingsnorm|pons|kaart|tekstdeel|hoofdlijn|divisie|kaartlaag|juridischeregel|activiteitlocatieaanduiding|normwaarde|regelingsgebied|ambtsgebied|divisietekst)\\.\[A-Za-z0-9\]\{1,32\}</b>

</td>
</tr>
</tbody>
</table>

<table style='width: 100%;'><caption>Toelichting:</caption>
<colgroup><col id='col1' style='width: 40.620172147428825%;'
<col id='col2' style='width: 59.379827852571175%;'
</colgroup>
<thead valign='top'><tr><th align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Onderdeel van reg. exp.

</th>
<th align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Betekenis

</th>
</tr>
</thead>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>nl.imow-

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Alle gegevens die worden aangeleverd vanuit het IMOW dienen te starten met nl.imow-

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>(gm|pv|ws|mn|mnre)

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>keuze voor een code voor de bestuurslaag* van de bronhouder: gm voor gemeente, pv voor provincie, ws voor waterschap of mnre voor ministerie

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>\[0-9\]\{1,6\}

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>de overheidscode van de bronhouder, maximaal 6 cijfers

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>\\.

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>een punt

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>(regeltekst|gebied|gebiedengroep|lijn|lijnengroep|punt|puntengroep|activiteit|gebiedsaanwijzing|omgevingswaarde|omgevingsnorm|pons|kaart|tekstdeel|hoofdlijn|divisie|kaartlaag|juridischeregel|activiteitlocatieaanduiding|normwaarde|regelingsgebied|ambtsgebied**|divisietekst)

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>keuze voor de naam van het IMOW objecttype van het object waar de identificatie betrekking op heeft

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>\\.

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>een punt

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>\[A-Za-z0-9\]\{1,32\}

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Een codereeks van minimaal 1 en maximaal 32 alfanumerieke tekens, te bepalen door de bronhouder

</td>
</tr>
</tbody>
</table>

De lokale identificatie als geheel wordt dan bijvoorbeeld: nl.imow-gm0200.gebied.2019000001

* In de code van de bestuurslagen mogen de bestuurslagen geen hoofdletters bevatten.

** de uitzondering voor ambtsgebied-identificaties is er uitgehaald, dit betekent dat een ambtsgebied-ID zich op de reguliere wijze verhoudt tot andere OW-objecten.

Het bestuurlijkeGrenzenID

Voor Ambtsgebieden is een extra identificatie nodig die verwijst naar de bestuurlijkeGrenzen-voorziening<span class='noot'>[1]<span class='noottekst'> https://brk.basisregistraties.overheid.nl/bestuurlijke-grenzen-api<br/></span></span>. Deze identificatie is de bestuurlijkeGrenzenID en ziet als volgt uit:

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 40.620172147428825%;'
<col id='col2' style='width: 59.379827852571175%;'
</colgroup>
<thead valign='top'><tr><th align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Onderdeel van reg. exp.

</th>
<th align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Betekenis

</th>
</tr>
</thead>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>(GM|PV|WS|LND)

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>keuze voor een code voor de bestuurslaag* van de bronhouder: GM voor gemeente, PV voor provincie, WS voor waterschap of LND voor het Rijk**

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>\[A-Z0-9.\]\{1,7\}

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>de overheidscode van het bevoegd gezag i.r.t. het bestuurlijk gebied zoals bekend in de bestuurlijkeGrenzen-voorziening. Dit bestaat uit hoofdletters, punten en cijfers, met een maximum van 7 tekens. 

</td>
</tr>
</tbody>
</table>

De lokale identificatie als geheel is dan bijvoorbeeld: GM0297 of LND6030.A

#### <a name='_Ref36460877'></a><a name='Techn_aanlever_status'></a>Status

De status is bedoeld om in aan te geven dat het OW-object een specifieke status heeft.

In de huidige versie is het alleen mogelijk om hier de status: ‘beëindigen’ in aan te geven. De implementatie hiervan wordt toegelicht in hoofdstuk <a href='#_Ref90035910'>4<a></a>.

Met de waarde ‘beëindigen’ wordt aangegeven dat een bepaald OW-object beëindigd moet worden. Het stelsel zal vervolgens het object op inactief zetten, en het zal alleen nog maar getoond worden als iemand een tijdreis-vraag stelt.

Een voorbeeld van een tijdreis-vraag is: ‘welke regel was een jaar geleden geldig op deze locatie?’

#### <a name='_Ref36460902'></a><a name='Techn_aanlever_procedurestatus'></a>Procedurestatus

De procedurestatus kan gebruikt worden om aan te geven dat een bepaald OW-object een specifieke procedurestatus heeft. In de huidige versie is het alleen mogelijk om hier de procedurestatus: ‘ontwerp’ in aan te geven.

De procedurestatus ‘ontwerp’ staat voor ontwerpbesluit. Hiermee geef je aan dat een bepaald OW-object alleen als ontwerp getoond moet worden. Het stelsel zal vervolgens bij dit OW-object aangeven dat dit iets is wat specifiek geldt voor het ontwerpbesluit (en daarmee nog niet behoort bij vastgestelde regelgeving).

Indien er geen procedurestatus ‘ontwerp’ is aangegeven dan wordt het OW-object beschouwd als behorend bij vastgestelde regelgeving.<a name='_Ref49516687'></a><a name='Techn_aanlever_bestandsgrootte'></a>

#### <a name='_Ref92189168'></a><a name='Techn_aanlever_XSD'></a>XSD-bestanden

De validaties die in dit bestand omschreven zijn komen overeen met de validaties die uitgevoerd worden in de XSD-bestanden. In principe is het zo dat als je aanlevert conform de XSD dat je dan een technisch valide bestand hebt aangeleverd. (De functionele validaties staan beschreven in het validatie- en conformiteitsregels-document.)

De XSD’s zijn gepubliceerd op <a href='https://register.geostandaarden.nl/xmlschema/tpod/' target='_blank'>https://register.geostandaarden.nl/xmlschema/tpod/</a> . De schema’s kennen een eigen versiebeheer, wat betekent dat er verwezen moet worden naar een specifieke versie van de schema’s (bijvoorbeeld 1.0.3). Bij het publiceren van dit document worden ook de schema’s gepubliceerd.

Om te zien hoe het schema exact werkt zie de voorbeeldbestanden.<a name='Techn_aanlever_waardelijsten'></a>

#### <a name='_Ref124235539'></a>Waardelijsten

In CIMOW is te vinden welke attributen als datatype een waardelijst hebben. Bijvoorbeeld, een activiteit heeft een attribuut groep, waarvan de waarde uit de waardelijst ActiviteitenGroep moet komen. In hoofdstuk <a href='#_Ref90035910'>4<a></a> is te zien dat een waarde correspondeert met een waardelijst als dit is aangegeven in de toelichting of bij het datatype URI.

Bij het valideren van de waarden wordt binnen het OW de volgende reguliere expressie gehanteerd:

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><b>(http|https)://(wetgeving|standaarden|regelgeving)\\.omgevingswet\\.overheid\\.nl/.*</b>

</td>
</tr>
</tbody>
</table>

Vervolgens controleert het DSO of de waarde voorkomt in de stelselcatalogus. De stelselcatalogus is publiekelijk beschikbaar.<a name='_Ref38039326'></a><a name='XML'></a>

