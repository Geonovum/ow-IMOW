# Technische implementatie IMOW {#3F5FA62D}

Dit hoofdstuk beschrijft de technische invulling van het IMOW. Paragraaf
<a href='#55D70865'>4.1</a> schrijft voor welke OW-bestanden moeten worden
aangeleverd. Paragraaf <a href='#53A6EBF9'>4.2</a> stelt eisen aan de
aanlevering.

## OW-aanlevering en OW-manifest {#55D70865}

Een aanlevering aan de LVBB waarin een bestand met de naam ‘manifest-ow.xml’
voorkomt is een OW-aanlevering. Naast het OW-manifest bevat de OW-aanlevering
een aantal bestanden met OW-objecten, deze zijn opgesomd in het OW-manifest. Het
OW-manifest bevat niet de GML-bestanden; deze staan in het (OP-)manifest.

Voor een OW-aanlevering, bestaande uit het 'manifest-o.xml' bestand en een aantal bestanden met OW-object objecten gelden de volgende regels:

**Regel:** Het manifest-ow.xml bestand moet voldoen aan het xsd: (https://register.geostandaarden.nl/xmlschema/tpod/v2.0.0/bestanden-ow/generiek/manifest-ow.xsd)[https://register.geostandaarden.nl/xmlschema/tpod/v2.0.0/bestanden-ow/generiek/manifest-ow.xsd](LVBB1032)

De GML bestanden behorend bij een regeling staan in het OP-manifest:

Zie de catalogus voor een uitleg van de XML elementen in dit bestand.

### Het aanleveren van OW-objecten in OW-bestanden {#4BFC4412}

In het OW-manifest is beschreven welke OW-bestanden er zijn. Deze OW-bestanden die de OW-objecten bevatten moeten voldoen aan het XML schema in:
<a href='https://register.geostandaarden.nl/xmlschema/tpod/v2.0.0/' target='_blank'>https://register.geostandaarden.nl/xmlschema/tpod/v2.0.0/</a>.

Voor ieder type OW-object is een passend XML element.

Naast deze technische validatie moeten de OW-objecten ook voldoen aan de
functionele eisen zoals gespecificeerd in dit document. Bij het aanleveren
van relaties in het IMOW is in het XSD’s kennen hiervoor een Ref element
gedefinieeerd, zoals ActiviteitenRef. Vul hierin de identificatie in van het
gerelateerde object.

Het OW-bestand is hetgeen dat alle inhoud van een specifiek bestand bevat, alle
OW-aanleveringen maken hier gebruik van.

Afhankelijk van of de OW-aanlevering bij een Omgevingsdocument met
artikelstructuur of vrijetekststructuur hoort kunnen de volgende OW-objecten
worden aangeleverd:

Bij Artikelstructuur: Regeltekst, Juridische regel, Activiteit,
Gebiedsaanwijzing, Omgevingsnorm, Omgevingswaarde, Locatie, Pons, Kaart,
Regelingsgebied Bij Vrijetekststructuur: Divisie, Divisietekst, Tekstdeel,
Hoofdlijn, Gebiedsaanwijzing, Kaart, Regelingsgebied, Locatie

### GML-bestanden (informatief) {#128024A0}

De GML-specificaties volgen de regels van de standaard Basisgeometrie (de versie
die is vastgesteld op 30 september 2020):
<a href='https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20200930/' target='_blank'>https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20200930/</a>

Het bijbehorende GML applicatieschema Basisgeometrie.xsd is gepubliceerd op:
<a href='https://register.geostandaarden.nl/gmlapplicatieschema/basisgeometrie/' target='_blank'>https://register.geostandaarden.nl/gmlapplicatieschema/basisgeometrie/</a>

Voor de zelfstandig leesbaarheid van IMOW-standaard is de inhoud van de genoemde
standaard Basisgeometrie en het schema ook opgenomen in IMOW.

<b>GML-versie en profiel:</b> GML 3.2.2 – SF-0. Simple features profile 0 is
gekozen omdat de inhoud van dit model geen constructies heeft die complexer zijn
dan SF-0. Voor geometrietypen is er tussen SF-0, SF-1 en SF-2 geen verschil.

<b>Coördinaatreferentiestelsel:</b> Het is verplicht om de srsName in te vullen
op het hoogste niveau van een geometrie. Dat betekent dat van een samengestelde
geometrie, een multi-geometrie, alleen op het niveau van de samenstelling de
srsName verplicht is ingevuld.

Invul-instructie:

<ul><li>RD stelsel (2D): srsName="urn:ogc:def:crs:EPSG::28992"</li>
<li>ETRS89 (2D): srsName="urn:ogc:def:crs:EPSG::4258"</li>
</ul>

De beschrijving van de respectievelijke EPSG codes zijn te vinden onder de url's
met het format: "http://www.opengis.net/def/crs/EPSG/0/""epsgcode". Bijvoorbeeld
voor EPSG 28992 is dat:
<a href='https://www.opengis.net/def/crs/EPSG/0/28992' target='_blank'>https://www.opengis.net/def/crs/EPSG/0/28992</a>
Momenteel worden in het DSO de 3D-coördinatenreferentiestelsels nog niet
ondersteund (EPSG:4937, EPSG:7415, EPSG:7423).

<b>gml:id:</b> Voor implementatie in GML zijn er aanvullende specificaties als
het gaat om het invullen van een gml:id attribuut. Dit gml:id attribuut heeft
geen informatiewaarde maar is nodig om interne en externe referenties te
realiseren voor gebruik binnen het gml formaat. Voor de GML 3.2.1 was dit een
verplicht element maar voor GML 3.2.2 is dit optioneel.

Indien de optionele gml:id wordt toegepast dient deze globaal uniek te zijn en
mag de waarde conform de gml specificaties alleen met een letter of een
underscore beginnen.

<b>Nauwkeurigheid van coördinaten:</b> Coördinaten opgenomen bij een geometrie
worden standaard uitgewisseld met een getalsnauwkeurigheid van 1 mm of het
equivalent daarvan in graden. Voor RD, NAP en ETRS89 komt dat overeen met de
volgende nauwkeurigheden:

<ul><li>RD in meters 3 decimalen (1 mm);</li>
<li>NAP-hoogte in meters 3 decimalen (1 mm);</li>
<li>ETRS89-breedte in graden 8 decimalen (1,1 mm);</li>
<li>ETRS89-lengte in graden 8 decimalen (0,7 mm);</li>
<li>ETRS89-hoogte in meters 3 decimalen (1 mm).</li>
</ul>

Alles wat nauwkeuriger is wordt afgerond op deze nauwkeurigheid van 3 of 8
decimalen. Afronding is volgens de volgende regel:

- 0.0015 -> 0.002;
- 0.0014 --> 0.001.

## Eisen bij aanleveren {#53A6EBF9}

Bij het aanleveren dient er rekening gehouden te worden met verschillende
aspecten. In <a href='#5E94A976'>4.2.1</a> wordt beschreven hoe de identificatie
van de objecten er uit dient te zien. In <a href='#10D4544F'>4.2.2</a> worden
waardelijsten beschreven. In <a href='#6F5FDC8F'>4.2.3</a> wordt het toekennen
van OW-objecten aan regeling vastgelegd. Paragraaf <a href='#60ED5DE4'>4.2.4</a>
stelt eisen aan het verwijzen tussen verschillende OW-objecten. Paragraaf
<a href='#08BD28A2'>4.2.5</a> legt vast hoe de functionele structuur wordt
behouden. Paragraaf <a href='#7F3046AE'>4.2.6</a> stelt extra regels voor
documenten van het type tijdelijk regelingdeel.

### Identificatie van OW-objecten {#5E94A976}

OW-objecten hebben het in DSO een unieke identificatie. Deze uniciteit wordt
gewaarborgd door een unieke code die de bronhouder identificeert te combineren
met een identificatie van het object binnen het domein van de bronhouder.

De wijze van het identificeren van objecten in het IMOW volgt de
NEN3610-standaard. De identificatie volgt de volgende reguliere expressie:

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'>
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><b>nl\.imow-(gm|pv|ws|mn|mnre)[0-9]{1,6}\. (regeltekst|gebied|gebiedengroep|lijn|lijnengroep|punt|puntengroep|activiteit|gebiedsaanwijzing|omgevingswaarde|omgevingsnorm|pons|kaart|tekstdeel|hoofdlijn|divisie|kaartlaag|juridischeregel|activiteitlocatieaanduiding|normwaarde|regelingsgebied|ambtsgebied|divisietekst)\.[A-Za-z0-9]{1,32}</b>
</td>
</tr>
</tbody>
</table>

<table style='width: 100%;'><caption>Toelichting:</caption>
<colgroup><col id='col1' style='width: 40.620172147428825%;'>
<col id='col2' style='width: 59.379827852571175%;'>
</colgroup>
<thead valign='top'><tr><th align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Onderdeel van reg. exp.<br/>
</th>
<th align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Betekenis<br/>
</th>
</tr>
</thead>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>nl.imow-<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Alle gegevens die worden aangeleverd vanuit het IMOW dienen te starten met nl.imow-<br/>
</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>(gm|pv|ws|mn|mnre)<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>keuze voor een code voor de bestuurslaag van de bronhouder: gm voor gemeente, pv voor provincie, ws voor waterschap of mnre voor ministerie. De bronhouder is het bevoegd gezag dat het besluit neemt waarmee de Regeling wordt ingesteld of gewijzigd.<br/>
</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>[0-9]{1,6}<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>de overheidscode van de bronhouder, maximaal 6 cijfers<br/>
</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>\.<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>een punt<br/>
</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>(regeltekst|gebied|gebiedengroep|lijn|lijnengroep|punt|puntengroep|activiteit|gebiedsaanwijzing|omgevingswaarde|omgevingsnorm|pons|kaart|tekstdeel|hoofdlijn|divisie|kaartlaag|juridischeregel|activiteitlocatieaanduiding|normwaarde|regelingsgebied|ambtsgebied|divisietekst)<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>keuze voor de naam van het IMOW objecttype van het object waar de identificatie betrekking op heeft<br/>
</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>\.<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>een punt<br/>
</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>[A-Za-z0-9]{1,32}<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Een codereeks van minimaal 1 en maximaal 32 alfanumerieke tekens, te bepalen door de bronhouder<br/>
</td>
</tr>
</tbody>
</table>

De lokale identificatie als geheel wordt dan bijvoorbeeld:
nl.imow-gm0200.gebied.2019000001

Het bestuurlijkeGrenzenID<br/> Voor Ambtsgebieden is een extra identificatie
nodig die verwijst naar de
bestuurlijkeGrenzen-voorziening<span class='noot'>[1]<span class='noottekst'>
https://brk.basisregistraties.overheid.nl/bestuurlijke-grenzen-api<br/>
</span></span>. Deze identificatie is de bestuurlijkeGrenzenID en ziet als volgt
uit:

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 40.620172147428825%;'>
<col id='col2' style='width: 59.379827852571175%;'>
</colgroup>
<thead valign='top'><tr><th align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Onderdeel van reg. exp.<br/>
</th>
<th align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Betekenis<br/>
</th>
</tr>
</thead>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>(GM|PV|WS|LND)<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>keuze voor een code voor de bestuurslaag* van de bronhouder: GM voor gemeente, PV voor provincie, WS voor waterschap of LND voor het Rijk**<br/>
</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>[A-Z0-9.]{1,7}<br/>
</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>de overheidscode van het bevoegd gezag i.r.t. het bestuurlijk gebied zoals bekend in de bestuurlijkeGrenzen-voorziening. Dit bestaat uit hoofdletters, punten en cijfers, met een maximum van 7 tekens. <br/>
</td>
</tr>
</tbody>
</table>

De lokale identificatie als geheel is dan bijvoorbeeld: GM0297 of LND6030.A

### Waardelijsten {#10D4544F}

In CIM-OW is te vinden welke attributen als datatype een waardelijst hebben.
Bijvoorbeeld, een activiteit heeft een kenmerk groep, waarvan de waarde uit de
waardelijst ActiviteitenGroep moet komen. In hoofdstuk <b><a href='#'>Fout!
Verwijzingsbron niet gevonden.</a></b> is te zien dat een waarde correspondeert
met een waardelijst als dit is aangegeven in de toelichting of bij het datatype
URI.

Bij het valideren van de waarden wordt binnen het OW de volgende reguliere
expressie gehanteerd:

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'>
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><b>(http|https)://(wetgeving|standaarden|regelgeving)\.omgevingswet\.overheid\.nl/.*</b><br/>
</td>
</tr>
</tbody>
</table>

Vervolgens controleert het DSO of de waarde voorkomt in de stelselcatalogus. De
stelselcatalogus is publiekelijk beschikbaar.

### Toekennen van OW-objecten aan regelingen {#6F5FDC8F}

Een OW-object hoort bij een regeling. Als een besluit een regeling wijzigt horen
de OW-objecten die in dat besluit ontstaan bij die regeling. Je kunt OW-objecten
alleen wijzigen in wijzigbesluiten die die betreffende regeling wijzigen. Dit is
vastgelegd in de volgende regels:

**Regel:** Het WorkIDRegeling van de OW-Aanlevering waarin een OW-object
ontstaat bepaalt bij welke regeling een OW-object hoort.

**Regel:** (TPOD1200): Een OW-object mag alleen gewijzigd worden in een
OW-aanlevering die hoort bij een besluit dat de regeling wijzigt waar het
OW-object bij hoort.

### Verwijzingen tussen OW-objecten {#60ED5DE4}

In OZON mag een actief OW-object niet verwijzen naar een beëindigd OW-object.
Daarom moet een besluit dat een OW-object beëindigt ook alle verwijzingen naar
dat OW-object beëindigen. Dit kan alleen als het bevoegd gezag die verwijzingen
**KAN** wijzigen, hiertoe introduceren we een regel die verwijzingen naar
OW-objecten van andere bevoegd gezagen inperkt:

**Regel:** (TPOD1950):

- Een OW-object behorend bij een regeling niet zijnde een tijdelijk regelingdeel mag alleen verwijzen naar een OW-object behorend bij een regeling van hetzelfde bevoegd gezag, met uitzondering van de relatie bovenliggendeActiviteit van het OW-object Activiteit, waarvoor de specifieke regels van paragraaf <a href='#08BD28A2'>4.2.5</a> gelden;
- een OW-object behorend bij een regeling niet zijnde een tijdelijk regelingdeel mag niet verwijzen naar een OW-object behorend bij een tijdelijk regelingdeel;
- een OW-object behorend bij een tijdelijk regelingdeel mag alleen verwijzen naar een OW-object behorend bij hetzelfde tijdelijk regelingdeel, met uitzondering van de relatie bovenliggendeActiviteit van de tophaak-Activiteit van het tijdelijk regelingdeel, waarvoor de specifieke regels van paragraaf <a href='#7F3046AE'>4.2.6</a> gelden.


### De functionele structuur {#08BD28A2}

De activiteiten in het stelsel vormen samen de ‘functionele structuur’. Deze
boomstructuur bevat alle Activiteit objecten in de regelingen en de hiërarchie
wordt bepaald door de bovenliggendeActiviteit relatie van de OW-Objecten van het
type Activiteit. In <a href='#d3e3754'>Figuur 10</a> is de het bovenste deel van
functionele structuur getekend. Met Placeholder-Regeling wordt bedoeld de
regeling die, met het opschrift Omgevingswet, in het stelsel is ingebracht met
uitsluitend het doel om beschikbaar te stellen de bovenste Activiteiten van de
functionele structuur zoals ‘Activiteit met gevolgen voor de fysieke
leefomgeving’ en ‘Activiteit gereguleerd in het omgevingsplan’, de Activiteiten
die zijn genoemd in artikel 5.1 Ow en enkele Activiteiten van de AMvB’s en de
Omgevingsregeling. De regels in deze paragaaf zorgen ervoor dat de hiërarchie
van de functionele structuur behouden blijft bij wijzigingen.

<figure><img src='media/image18.png' alt='Afbeelding met tekst, schermopname, Lettertype, nummer' style='width: 70.32967032967034%;'></img>
<figcaption>: de top van de hiërarchie van de functionele structuur</figcaption></figure>

De volgende regel schrijft de naam en aanwezigheid van een tophaak Activiteit in
regelingen voor:

**Regel:** (TPOD1951):Met uitzondering van AMvB en ministeriële
regeling moet in iedere Regeling waarin één of meer Activiteiten zijn
geannoteerd één zogenaamde tophaak voorkomen:

- voor de omgevingsverordening is dat de meest bovenliggende Activiteit van die Regeling; de naam van deze Activiteit moet zijn ‘Activiteit gereguleerd in de omgevingsverordening &lt;naam provincie&gt;’;
- voor de waterschapsverordening is dat de meest bovenliggende Activiteit van die Regeling; de naam van deze Activiteit moet zijn ‘Activiteit gereguleerd in de waterschapsverordening &lt;naam waterschap&gt;’;
- voor het omgevingsplan is dat de meest bovenliggende Activiteit van die Regeling; de naam van deze Activiteit moet zijn ‘Activiteit gereguleerd in het omgevingsplan gemeente &lt;naam gemeente&gt;’.

De volgende regels schrjven voor hoe de relatie bovenliggendeActiviteit moet
worden ingevuld:

**Regel:** (TPOD1952):  Voor omgevingsverordening,
waterschapsverordening en omgevingsplan geldt, in afwijking van het bepaalde in
paragraaf <a href='#60ED5DE4'>4.2.4</a>, dat de relatie bovenliggendeActiviteit
van een Activiteit niet zijnde de tophaak uitsluitend mag verwijzen naar een
andere Activiteit die hoort bij dezelfde Regeling.

**Regel:** (TPOD1953) Voor de relatie bovenliggendeActiviteit van de tophaken
geldt, in afwijking van het bepaalde in paragraaf <a href='#60ED5DE4'>4.2.4</a>,
het volgende:

- in de omgevingsverordening moet de relatie bovenliggendeActiviteit van de tophaak verwijzen naar de 'Activiteit gereguleerd in de omgevingsverordening' in de Placeholder-Regeling;
- in de waterschapsverordening moet de relatie bovenliggendeActiviteit van de tophaak moet verwijzen naar de 'Activiteit gereguleerd in de waterschapsverordening' in de Placeholder-Regeling;
- in het omgevingsplan moet de relatie bovenliggendeActiviteit van de tophaak moet verwijzen naar de 'Activiteit gereguleerd in het omgevingsplan' in de Placeholder-Regeling;
- in AMvB en ministeriële regeling mag de relatie bovenliggendeActiviteit van een Activiteit uitsluitend verwijzen naar de ‘Activiteit gereguleerd bij AMvB’ of naar een andere Activiteit die hoort bij de Placeholder-Regeling, bij een AMvB of bij een ministeriële regeling.

### Tijdelijk regelingdelen {#7F3046AE}

Tijdelijk regelingdelen, zoals beschreven in de STOP standaard kunnen door een
ander bevoegd gezag worden ingetrokken dan het bevoegd gezag waardoor het is
aangemaakt. Voor een tijdelijk regelingdeel geldt de volgende regel:

**Regel:** (TPOD1954):

- in een tijdelijk regelingdeel waarin één of meer Activiteiten zijn geannoteerd moet één zogenaamde tophaak voorkomen;
- de tophaak is de meest bovenliggende Activiteit van het tijdelijk regelingdeel;
- de naam van de tophaak annex de meest bovenliggende Activiteit moet zijn ‘Activiteit gereguleerd in &lt;citeertitel tijdelijk regelingdeel&gt;’;
- voor een tijdelijk regelingdeel geldt dat de relatie bovenliggendeActiviteit van de tophaak moet verwijzen naar de tophaak van de regeling waaraan het tijdelijk regelingdeel door middel van het element isTijdelijkdeelVan gekoppeld is.
