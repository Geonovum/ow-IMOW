# Technische implementatie IMOW {#H04-Implementatie}

Dit hoofdstuk beschrijft de technische aspecten van toevoegen van OW-bestanden
aan een aanlevering aan de LVBB. De eerste [paragraaf](#H04-OW-aanlevering) schrijft voor welke OW-bestanden moeten worden
aangeleverd. De tweede [paragraaf](#H04-aanlevereisen) stelt eisen aan de
aanlevering.

**Regel:** De XML-applicatieschema's genoemd in dit hoofdstuk zijn te vinden in: <https://register.geostandaarden.nl/xmlschema/tpod/v4.0.0-ic1>.

## OW-aanlevering en OW-manifest {#H04-OW-aanlevering}

Een aanlevering aan de LVBB waarin een bestand met de naam ‘manifest-ow.xml’
voorkomt is een OW-aanlevering. Naast het OW-manifest bevat de OW-aanlevering
een aantal bestanden met OW-objecten, deze zijn opgesomd in het OW-manifest. Het
OW-manifest bevat niet de GML-bestanden; deze staan in het (OP-)manifest.

Voor een OW-aanlevering, bestaande uit het 'manifest-ow.xml' bestand en een aantal bestanden met OW-object objecten gelden de volgende regels:

**Regel:** Het manifest-ow.xml bestand moet voldoen aan het in de map bestanden-ow/generiek/manifest-ow.xsd (LVBB1032)

Zie [paragraaf](#global_package_Aanlevering) voor een uitleg van de XML elementen
in dit bestand.

### Het aanleveren van OW-objecten in OW-bestanden {#H04-aanlevereisen}

In het OW-manifest is beschreven welke OW-bestanden er zijn. Relaties in het IMOW worden geserialiseerd door de identificaties van de gerelateerde objecten op te nemen.

**Regels:**

- Bij een OW-aanlevering met artikelstructuur mogen de volgende OW-objecten worden aangeleverd: Regeltekst, Juridische regel, Activiteit,
Gebiedsaanwijzing, Omgevingsnorm, Omgevingswaarde, Locatie, Pons, Kaart en Regelingsgebied.
- Bij een OW-aanlevering met vrijetekststructuur mogen de volgende OW-objecten worden aangeleverd: Divisietekst, Tekstdeel,
Hoofdlijn, Gebiedsaanwijzing, Kaart, Regelingsgebied, Locatie.

### Het aanleveren van Geometrie objecten

Geometrie objecten in het IMOW zijn gedeeld door STOP en IMOW en worden conform
STOP als onderdeel van de GIO aangeleverd. Ze zitten niet in een OW-aanleverling.
Vanuit de OW-objecten Gebied, Lijn en Punt wordt middels de relatie 'geometrie'
verwezen naar de geometrie in de GIO. Deze verwijzing gebeurt via het 'id'
attribuut in de GIO.

In vrijwel alle gevallen moet de geometrie van een Locatie binnen het ambtsgebied
van het bevoegd gezag vallen. Vanwege enkele uitzonderingen op deze regel worden
aanleveringen die hier niet aan voldoen niet geweigerd, wel kan een waarschuwing
gegeven worden.

## Regels voor OW-Aanlevering

Bij het aanleveren dient er rekening gehouden te worden met de volgende
aspecten:

- [Identificatie van objecten](#H04-Identificatie)
- [Waardelijsten](#H04-Waardelijsten)
- [toekennen van OW-objecten aan regeling](#H04-Toekennen)
- [verwijzen tussen verschillende OW-objecten.](#H04-Verwijzen)
- [behoud functionele structuur](#H04-FunctioneleStructuur)
- [tijdelijk regelingdelen.](#H04-TijdelijkRegelingdelen)

### Identificatie van OW-objecten {#H04-Identificatie}

OW-objecten hebben het in DSO een unieke identificatie. Deze uniciteit wordt
gewaarborgd door een unieke code die de bronhouder identificeert te combineren
met een identificatie van het object binnen het domein van de bronhouder.

De wijze van het identificeren van objecten in het IMOW volgt de
NEN3610-standaard. De identificatie volgt de volgende reguliere expressie:

```re
nl\.imow-(gm|pv|ws|mn|mnre)[0-9]{1,6}\.(regeltekst|gebied|gebiedengroep|lijn|lijnengroep|punt|puntengroep|activiteit|gebiedsaanwijzing|omgevingswaarde|omgevingsnorm|pons|kaart|tekstdeel|hoofdlijn|divisie|kaartlaag|juridischeregel|activiteitlocatieaanduiding|normwaarde|regelingsgebied|ambtsgebied|divisietekst)\.[A-Za-z0-9]{1,32}
```

| Onderdeel van de reguliere expressie                                                                                                                                                                                                                                                  | Betekenis                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```nl.imow-```                                                                                                                                                                                                                                                                        | Alle gegevens die worden aangeleverd vanuit het IMOW dienen te starten met nl.imow-                                                                                                                                                                     |
| ```(gm\|pv\|ws\|mn\|mnre)```                                                                                                                                                                                                                                                          | keuze voor een code voor de bestuurslaag van de bronhouder: gm voor gemeente, pv voor provincie, ws voor waterschap of mnre voor ministerie. De bronhouder is het bevoegd gezag dat het besluit neemt waarmee de Regeling wordt ingesteld of gewijzigd. |
| ```[0-9]{1,6}```                                                                                                                                                                                                                                                                    | de overheidscode van de bronhouder, maximaal 6 cijfers                                                                                                                                                                                                  |
| ```\.```                                                                                                                                                                                                                                                                              | een punt                                                                                                                                                                                                                                                |
| ```(regeltekst\|gebied\|gebiedengroep\|lijn\|lijnengroep\|punt\|puntengroep\|activiteit\|gebiedsaanwijzing\|omgevingswaarde\|omgevingsnorm\|pons\|kaart\|tekstdeel\|hoofdlijn\|divisie\|kaartlaag\|juridischeregel\|activiteitlocatieaanduiding\|normwaarde\|regelingsgebied\|ambtsgebied\|divisietekst)``` | keuze voor de naam van het IMOW objecttype van het object waar de identificatie betrekking op heeft                                                                                                                                                     |
| ```[A-Za-z0-9]{1,32}```                                                                                                                                                                                                                                                               | Een codereeks van minimaal 1 en maximaal 32 alfanumerieke tekens, te bepalen door de bronhouder                                                                                                                                                         |

De lokale identificatie als geheel wordt dan bijvoorbeeld: ```nl.imow-gm0200.gebied.2019000001```

### Waardelijsten {#H04-Waardelijsten}

Voor attributen waarvan de waarde uit een waardelijst komt zijn de toegestane
waardes te vinden in de [stelselcatalogus](https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten).

**Regel:** Een kenmerk dat als type een waarde in een waardelijst heeft moet een
 uri uit de betreffende waardelijst bevatten.

### Toekennen van OW-objecten aan regelingen {#H04-Toekennen}

Een OW-object hoort bij een regeling. Als een besluit een regeling wijzigt horen
de OW-objecten die in dat besluit ontstaan bij die regeling. Je kunt OW-objecten
alleen wijzigen in wijzigbesluiten die die betreffende regeling wijzigen. Dit is
vastgelegd in de volgende regels:

**Regel:** Het WorkIDRegeling van de OW-Aanlevering waarin een OW-object
ontstaat bepaalt bij welke regeling een OW-object hoort.

**Regel:** (TPOD1200): Een OW-object mag alleen gewijzigd worden in een
OW-aanlevering die hoort bij een besluit dat de regeling wijzigt waar het
OW-object bij hoort.

### Verwijzingen tussen OW-objecten {#H04-Verwijzen}

In OZON mag een actief OW-object niet verwijzen naar een beëindigd OW-object.
Daarom moet een besluit dat een OW-object beëindigt ook alle verwijzingen naar
dat OW-object beëindigen. Dit kan alleen als het bevoegd gezag die verwijzingen
**KAN** wijzigen, hiertoe introduceren we een regel die verwijzingen naar
OW-objecten van andere bevoegd gezagen inperkt:

**Regel:** (TPOD1950):

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

### De functionele structuur {#H04-FunctioneleStructuur}

De activiteiten in het stelsel vormen samen de ‘functionele structuur’. Deze
boomstructuur bevat alle Activiteit objecten in de regelingen en de hiërarchie
wordt bepaald door de bovenliggendeActiviteit relatie van de OW-Objecten van het
type Activiteit. In <a href='fig10'>Figuur 10</a> is de het bovenste deel van
functionele structuur getekend. Met Placeholder-Regeling wordt bedoeld de
regeling die, met het opschrift Omgevingswet, in het stelsel is ingebracht met
uitsluitend het doel om beschikbaar te stellen de bovenste Activiteiten van de
functionele structuur zoals ‘Activiteit met gevolgen voor de fysieke
leefomgeving’ en ‘Activiteit gereguleerd in het omgevingsplan’, de Activiteiten
die zijn genoemd in artikel 5.1 Ow en enkele Activiteiten van de AMvB’s en de
Omgevingsregeling. De regels in deze paragaaf zorgen ervoor dat de hiërarchie
van de functionele structuur behouden blijft bij wijzigingen.

<figure id="fig10">
  <img src='media/FunctioneleStructuur.png' style='width: 70%;'></img>
  <figcaption>: de top van de hiërarchie van de functionele structuur</figcaption>
</figure>

De volgende regel schrijft de naam en aanwezigheid van een tophaak Activiteit in
regelingen voor:

**Regel:** (TPOD1951):Met uitzondering van AMvB en ministeriële
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

De volgende regels schrjven voor hoe de relatie bovenliggendeActiviteit moet
worden ingevuld:

**Regel:** (TPOD1952):  Voor omgevingsverordening,
waterschapsverordening en omgevingsplan geldt, in afwijking van het bepaalde in
regel TPOD1950, dat de relatie bovenliggendeActiviteit
van een Activiteit niet zijnde de tophaak uitsluitend mag verwijzen naar een
andere Activiteit die hoort bij dezelfde Regeling.

**Regel:** (TPOD1953) Voor de relatie bovenliggendeActiviteit van de tophaken
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

Tijdelijk regelingdelen, zoals beschreven in STOP kunnen door een
ander bevoegd gezag worden ingetrokken dan het bevoegd gezag waardoor het is
aangemaakt. Voor een tijdelijk regelingdeel geldt de volgende regel:

**Regel:** (TPOD1954):

- in een tijdelijk regelingdeel waarin één of meer Activiteiten zijn geannoteerd
  moet één zogenaamde tophaak voorkomen;
- de tophaak is de meest bovenliggende Activiteit van het tijdelijk
  regelingdeel;
- de naam van de tophaak annex de meest bovenliggende Activiteit moet zijn
  ‘Activiteit gereguleerd in &lt;citeertitel tijdelijk regelingdeel&gt;’;
- voor een tijdelijk regelingdeel geldt dat de relatie bovenliggendeActiviteit
  van de tophaak moet verwijzen naar de tophaak van de regeling waaraan het
  tijdelijk regelingdeel door middel van het element isTijdelijkdeelVan
  gekoppeld is.
