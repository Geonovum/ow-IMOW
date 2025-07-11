# Technische implementatie IMOW {#H04-Implementatie}

Dit hoofdstuk beschrijft de technische aspecten van het toevoegen van OW-bestanden
aan een aanlevering aan de LVBB. [Paragraaf 4.1](#H04-OW-aanlevering) schrijft voor welke OW-bestanden moeten worden
aangeleverd.  [Paragraaf 4.2](#H04-aanlevereisen) stelt eisen aan de
aanlevering.

De XML-applicatieschema's genoemd in dit hoofdstuk zijn te vinden in: <https://github.com/Geonovum/ow-IMOW/tree/main/xmlschema/v3.2.0-rc>. Het
versienummer van deze xsd's is: 'v3.2.0-rc'.

## OW-aanlevering en OW-manifest {#H04-OW-aanlevering}

Een aanlevering aan de LVBB bevat altijd een OW-manifest. Dit is het
bestand met de naam naam `manifest-ow.xml`. Daarnaast bevat de OW-aanlevering
0 of meer bestanden met OW-objecten, deze zijn opgesomd in het OW-manifest. Het
OW-manifest bevat niet de opsomming van de GML-bestanden; deze staan in het (OP-)manifest.

**Constraint:** Het manifest-ow.xml in een OW-aanlevering  moet voldoen aan het
xml-schema in `bestanden-ow/generiek/manifest-ow.xsd`. (TPOD1162)

**Constraint:** Het xml-attribuut schemaversie in het root element van het
`manifest-ow.xml` bestand bevat het versienummer van het gebruikte xsd. (TPOD1160)

Zie [paragraaf 2.1](#global_package_Aanlevering) voor een uitleg van de XML elementen in deze bestanden.

### Het aanleveren van OW-objecten in OW-bestanden {#H04-aanlevereisen}

In het OW-manifest is beschreven welke OW-bestanden er zijn. Relaties in het
IMOW worden geserialiseerd door de identificaties van de gerelateerde objecten
op te nemen.

**Constraint:** OW-bestanden moeten voldoen aan het xml-schema in
`bestanden-ow/deelbestand-ow/IMOW_Deelbestand.xsd` (TPOD1164)

**Constraint:** Het xml-attribuut schemaversie in het root element owBestand bevat
het versienummer van het gebruikte xsd. (TPOD1163)

**Constraint:** Bij een OW-aanlevering behorend bij een besluit over een
omgevingsdocument met artikelstructuur  mogen geen andere dan de volgende
OW-objecten worden aangeleverd: Regeltekst, Juridische regel, Activiteit,
Gebiedsaanwijzing, Omgevingsnorm, Omgevingswaarde, Locatie, Pons, Kaart,
Kaartlaag  en Regelingsgebied. (TPOD2420)

**Constraint:** Bij een OW-aanlevering behorend bij een besluit over een
omgevingsdocument met vrijetekststructuur mogen geen andere dan de volgende
OW-objecten worden aangeleverd: Divisietekst, Tekstdeel, Hoofdlijn,
Gebiedsaanwijzing, Kaart, Kaartlaag, Regelingsgebied en Locatie. (TPOD2421)

### Het aanleveren van Geometrie-objecten

Geometrie-objecten in het IMOW zijn gedeeld door STOP en IMOW en worden conform
STOP als onderdeel van het GIO aangeleverd.
Vanuit de OW-objecten Gebied, Lijn en Punt wordt middels de relatie 'geometrie'
verwezen naar de geometrie in het GIO. Deze verwijzing gebeurt via het 'id'
attribuut in het GIO.

Enkele uitzonderingen daargelaten valt de geometrie van een Locatie binnen het ambtsgebied
van het bevoegd gezag. Vanwege enkele uitzonderingen op deze regel worden
aanleveringen die hier niet aan voldoen niet geweigerd, wel kan een waarschuwing
gegeven worden.

## Regels voor OW-Aanlevering

Bij het aanleveren gelden regels over de volgende aspecten:

- [Identificatie van objecten](#H04-Identificatie)
- [Waardelijsten](#H04-Waardelijsten)
- [Toekennen van OW-objecten aan regeling](#H04-Toekennen)
- [Verwijzen tussen verschillende OW-objecten.](#H04-Verwijzen)
- [Behoud functionele structuur](#H04-FunctioneleStructuur)
- [Tijdelijk regelingdelen.](#H04-TijdelijkRegelingdelen)

### Identificatie van OW-objecten {#H04-Identificatie}

OW-objecten hebben een unieke identificatie. Deze uniciteit wordt
gewaarborgd door een unieke code die de bevoegd gezag identificeert te combineren
met een identificatie van het object binnen het domein van het bevoegd gezag
dat het besluit neemt waarmee de regeling wordt ingesteld of gewijzigd.

De wijze van het identificeren van objecten in het IMOW volgt de
NEN3610-standaard.

**Constraint:** De identificatie van een OW-object voldoet aan de volgende reguliere expressie:
<code>
'nl\.imow-(gm&#124;pv&#124;ws&#124;mn&#124;mnre)[0-9]{1,6}\.'
'(regeltekst&#124;gebied&#124;gebiedengroep&#124;lijn&#124;lijnengroep&#124;punt&#124;puntengroep&#124;activiteit&#124;'
'gebiedsaanwijzing&#124;omgevingswaarde&#124;omgevingsnorm&#124;pons&#124;kaart&#124;tekstdeel&#124;hoofdlijn&#124;'
'divisie&#124;kaartlaag&#124;juridischeregel&#124;activiteitlocatieaanduiding&#124;normwaarde&#124;regelingsgebied&#124;'
'ambtsgebied&#124;divisietekst)\.[A-Za-z0-9]{1,32}'
</code>
(TPOD1892)

| Onderdeel van de reguliere expressie | Betekenis                                                                                                                                                                                                                                     |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nl.imow-`                           | Alle gegevens die worden aangeleverd vanuit het IMOW dienen te starten met nl.imow-                                                                                                                                                           |
| `(gm\|pv\|ws\|mn\|mnre)`             | Code voor de bestuurslaag van het bevoegd gezag dat het besluit neemt waarmee de Regeling wordt ingesteld of gewijzigd. gm voor gemeente, pv voor provincie, ws voor waterschap of mnre voor ministerie.  |
| `[0-9]{1,6}`                         | De identificatie moet de code (uit de STOP-waardelijst voor gemeente, waterschap, provincie of ministerie) bevatten van het bevoegd gezag dat het besluit neemt waarmee de Regeling wordt ingesteld of gewijzigd.                             |
| `.`                                  | een punt                                                                                                                                                                                                                                      |
| `(regeltekst\| ... \|divisietekst)`  | De naam van het OW-objecttype van het object waar de identificatie betrekking op heeft heeft                                                                                                                                                  |
| `[A-Za-z0-9]{1,32}`                  | Een reeks van minimaal 1 en maximaal 32 alfanumerieke tekens, te bepalen door het bevoegd gezag                                                                                                                                           |

De identificatie als geheel wordt dan bijvoorbeeld: `nl.imow-gm0200.gebied.2019000001`

### Waardelijsten {#H04-Waardelijsten}

Voor attributen waarvan de waarde uit een waardelijst komt zijn de toegestane
waarden te vinden in de [Stelselcatalogus](https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten).

**Constraint:** Een attribuut waarvoor een waarde uit een waardelijst moet worden
gekozen, moet de uri van die waarde uit de betreffende waardelijst in
de [Stelselcatalogus](https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten)
bevatten. (TPOD1300)

### Toekennen van OW-objecten aan regelingen {#H04-Toekennen}

Een OW-object hoort bij een regeling. Als een besluit een regeling instelt of wijzigt horen
de OW-objecten die in dat besluit ontstaan bij die regeling. Je kunt OW-objecten
alleen wijzigen in wijzigingsbesluiten die die betreffende regeling wijzigen. Dit is
vastgelegd in de volgende regels:

**Constraint:** Een OW-object hoort bij de regeling met het WorkIDRegeling
van de OW-Aanlevering waarin het OW-object ontstaat. (TPOD2142)

**Constraint:** Een OW-object mag alleen gewijzigd worden in een
OW-aanlevering die hoort bij een besluit dat de regeling wijzigt waar het
OW-object bij hoort. (TPOD1200)

### Verwijzingen tussen OW-objecten {#H04-Verwijzen}

**Constraint:** Een OW-object met status = 'actief' mag niet verwijzen naar een
OW-object met status = 'beëindigd'. (TPOD1900)

Deze regel geldt ook voor verwijzingen naar OW-objecten in andere regelingen. Daarnaast 
is er een juridsche eis dat een bevoegd gezag altijd een regeling moet kunnen intrekken.
Daarom moet een besluit dat en regeling intrekt ook alle verwijzingen die naar OW-objecten
in die regeling wijzen beëindigen. Dit kan alleen als het bevoegd gezag die verwijzingen
KAN wijzigen. Daarom gelden de volgende regels die verwijzingen naar OW-objecten van
andere bevoegd gezagen inperken:

**Constraint:** (TPOD1950)
- Een OW-object behorend bij een regeling niet zijnde een tijdelijk regelingdeel
  mag alleen verwijzen naar een OW-object behorend bij een regeling van
  hetzelfde bevoegd gezag, met uitzondering van de relatie
  bovenliggendeActiviteit van het OW-object Activiteit, waarvoor de specifieke
  regels van TPOD1951, TPOD1952 en TPOD1953 gelden;
- een OW-object behorend bij een regeling niet zijnde een tijdelijk regelingdeel
  mag niet verwijzen naar een OW-object behorend bij een tijdelijk regelingdeel;
- een OW-object behorend bij een tijdelijk regelingdeel mag alleen verwijzen
  naar een OW-object behorend bij hetzelfde tijdelijk regelingdeel, met
  uitzondering van de relatie bovenliggendeActiviteit van de tophaak-Activiteit
  van het tijdelijk regelingdeel, waarvoor de specifieke regels van TPOD1954 gelden.

**Constraint:** Een OW-object behorend bij een vastgestelde regeling mag niet
verwijzing naar een OW-object in een ontwerpregeling. (TPOD1940)

### Tophaken en de bovenliggendeActiviteit {#H04-FunctioneleStructuur}

De activiteiten in het stelsel vormen samen de ‘functionele structuur’. Deze
boomstructuur bevat alle Activiteit-objecten in de regelingen en de hiërarchie
wordt bepaald door de bovenliggendeActiviteit relatie van de OW-Objecten van het
type Activiteit. In <a href='#fig-FunctioneleStructuur'>Figuur 10</a> is het bovenste deel van
functionele structuur getekend. Met Placeholder-Regeling wordt bedoeld de
regeling die, met het opschrift Omgevingswet, in het stelsel is ingebracht met
uitsluitend het doel om beschikbaar te stellen de bovenste Activiteiten van de
functionele structuur zoals ‘Activiteit met gevolgen voor de fysieke
leefomgeving’ en ‘Activiteit gereguleerd in het omgevingsplan’, de Activiteiten
die zijn genoemd in artikel 5.1 Ow en enkele Activiteiten van de AMvB’s en de
Omgevingsregeling. De regels in deze paragaaf zorgen ervoor dat de hiërarchie
van de functionele structuur behouden blijft bij wijzigingen.

<figure id="fig-FunctioneleStructuur">
  <img src='media/FunctioneleStructuur.png' style='width: 70%;' />
  <figcaption>: de top van de hiërarchie van de functionele structuur</figcaption>
</figure>

De volgende regel schrijft de naam en aanwezigheid van een tophaak Activiteit in
regelingen voor:

**Constraint:** (TPOD1951) Met uitzondering van AMvB en ministeriële
regeling moet in iedere Regeling waarin één of meer Activiteiten zijn
geannoteerd één zogenaamde tophaak voorkomen:
- voor de omgevingsverordening is dat de meest bovenliggende Activiteit van die
  Regeling; de naam van deze Activiteit moet zijn ‘Activiteit gereguleerd in de
  omgevingsverordening &lt;naam provincie&gt;’;
- voor de waterschapsverordening is dat de meest bovenliggende Activiteit van
  die Regeling; de naam van deze Activiteit moet zijn ‘Activiteit gereguleerd in
  de waterschapsverordening &lt;naam waterschap&gt;’;
- voor het omgevingsplan is dat de meest bovenliggende Activiteit van die
  Regeling; de naam van deze Activiteit moet zijn ‘Activiteit gereguleerd in het
  omgevingsplan gemeente &lt;naam gemeente&gt;’.

Voor de relatie bovenliggendeActiviteit moet gelden de volgende regels:

**Constraint:** Voor omgevingsverordening,
waterschapsverordening en omgevingsplan geldt, in afwijking van het bepaalde in
regel TPOD1950, dat de relatie bovenliggendeActiviteit
van een Activiteit niet zijnde de tophaak uitsluitend mag verwijzen naar een
andere Activiteit die hoort bij dezelfde Regeling. (TPOD1952)

**Constraint:** (TPOD1953) Voor de relatie bovenliggendeActiviteit van de tophaken
geldt, in afwijking van het bepaalde in paragraaf TPOD1950,
het volgende:
- in de omgevingsverordening moet de relatie bovenliggendeActiviteit van de
  tophaak verwijzen naar de 'Activiteit gereguleerd in de omgevingsverordening'
  in de Placeholder-Regeling;
- in de waterschapsverordening moet de relatie bovenliggendeActiviteit van de
  tophaak moet verwijzen naar de 'Activiteit gereguleerd in de
  waterschapsverordening' in de Placeholder-Regeling;
- in het omgevingsplan moet de relatie bovenliggendeActiviteit van de tophaak
  moet verwijzen naar de 'Activiteit gereguleerd in het omgevingsplan' in de
  Placeholder-Regeling;
- in AMvB en ministeriële regeling mag de relatie bovenliggendeActiviteit van
  een Activiteit uitsluitend verwijzen naar de ‘Activiteit gereguleerd bij AMvB’
  of naar een andere Activiteit die hoort bij de Placeholder-Regeling, bij een
  AMvB of bij een ministeriële regeling.

### Tijdelijk regelingdelen {#H04-TijdelijkRegelingdelen}

Voor de tophaken van tijdelijk regelingdelen geldt de volgende regel:

**Constraint:** (TPOD1954)
- in een tijdelijk regelingdeel waarin één of meer Activiteiten zijn geannoteerd
  moet één zogenaamde tophaak voorkomen;
- de tophaak is de meest bovenliggende Activiteit van het tijdelijk
  regelingdeel;
- de naam van de tophaak annex de meest bovenliggende Activiteit moet zijn
  ‘Activiteit gereguleerd in &lt;citeertitel tijdelijk regelingdeel&gt;’;
- voor een tijdelijk regelingdeel moet de relatie bovenliggendeActiviteit
  van de tophaak verwijzen naar de tophaak van de regeling waaraan het
  tijdelijk regelingdeel door middel van het element isTijdelijkdeelVan
  gekoppeld is.

