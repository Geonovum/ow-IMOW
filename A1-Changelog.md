# Bijlage: versiehistorie {#HA-Changelog}

In de versiehistorie wordt met WELT-xx verwezen naar de Wensen en Eisen Lijst
voor de TPOD-standaard. Deze lijst bevat meldingen en wijzigingsverzoeken die
door gebruikers van de standaard zijn ingediend. De ingediende meldingen zijn te
vinden via <https://www.geonovum.nl/geo-standaarden/meldingen>.

Omdat het document grondig is geherstructureerd zijn de paragraafverwijzingen
tot versie 3.0.1 niet meer geldig en die zijn verwijderd.

| Versie    | Datum      | Wijziging                                                                                                                                                                                                            |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| V1.0.3    | 2020-10-30 | standBestand hernoemd naar owBestand.                                                                                                                                                                                |
|           |            | Hoogte toegevoegd bij Gebied/Lijn/Punt.                                                                                                                                                                              |
|           |            | Disclaimer toegevoegd over gebruik hoofdletters bij code bestuurslaag (WELT-76).                                                                                                                                     |
|           |            | Disclaimer toegevoegd over het gebruik van juridische regel bij artikel (WELT-86).                                                                                                                                   |
|           |            | Disclaimer toegevoegd over het niet mogen gebruiken van bogen en cirkels WELT-59).                                                                                                                                   |
|           |            | Afbeelding van ID’s (WELT-77) aangepast.                                                                                                                                                                             |
|           |            | Richtlijn grootte van bestanden aangepast van 50MB naar 10MB (weer aangepast in nieuwe RC).                                                                                                                          |
|           |            | Inleidende zin bij procedurestatus verbeterd (WELT-82).                                                                                                                                                              |
|           |            | Het gebruik van Ambtsgebied mogelijk gemaakt (WELT-84).                                                                                                                                                              |
|           |            | SymbolisatieItem toegevoegd.                                                                                                                                                                                         |
|           |            | Regels voor aanleveren van geometrieën bijgesteld in 4.1.2 (WELT-107).                                                                                                                                               |
|           |            | Afbeeldingen aangepast o.b.v. nieuwe objecten.                                                                                                                                                                       |
|           |            | Fout bij element hoogte binnen locatie hersteld in 3.8.                                                                                                                                                              |
| V1.0.4    | 2021-04-13 | Aangegeven dat het manifest-ow verplicht is.                                                                                                                                                                         |
| V2.0.0-rc | 2021-06-15 | Aangegeven dat het manifest-ow verplicht is (WELT-151).                                                                                                                                                              |
|           |            | Tekstdeel toegevoegd in het schema van vrijetekststructuur (WELT-132).                                                                                                                                               |
|           |            | Maximale veldlengtes opgenomen in de documentatie.                                                                                                                                                                   |
|           |            | Beschrijving omtrent het gebruik van eenheid aangepast (WELT-166).                                                                                                                                                   |
|           |            | Gebiedsaanwijzing toegevoegd bij Tekstdeel (WELT-122).                                                                                                                                                               |
|           |            | Aanpassen documentatie Regelingsgebied (WELT-155).                                                                                                                                                                   |
|           |            | Het ambtsgebied-object aangepast n.a.v. bevindingen.                                                                                                                                                                 |
|           |            | Hoofdstuk over GIO’s en richtlijnen om vanuit OW te komen tot GIO’s toegevoegd.                                                                                                                                      |
|           |            | Hoofdstuk toegevoegd over Muteren.                                                                                                                                                                                   |
| V2.0.0    | 2021-06-29 | in 4.2.1 objecttypen aangevuld met de ontbrekende objecttypen.                                                                                                                                                       |
|           |            | in 3.8.3 de definitie van Ambtsgebied aangepast.                                                                                                                                                                     |
|           |            | in 5.1 een toelichting geplaatst omtrent de tijdslijnen van gegevens die niet in IMOW zitten.                                                                                                                        |
|           |            | in 5.2 de toelichting omtrent Regelingsgebied aangepast.                                                                                                                                                             |
|           |            | Aangepast dat ontwerpversies wel ConsolidatieInformatie mag bevatten, maar geen tijdstempels (binnen de ConsolidatieInformatie).                                                                                     |
| V2.0.1-rc | 2021-12-17 | In 4.2.1 de reguliere expressie hersteld.                                                                                                                                                                            |
|           |            | Disclaimer over de volgorde van XML-elementen opgenomen.                                                                                                                                                             |
|           |            | Aangegeven dat de Pons geldt voor bestemmingsplannen die niet meer getoond worden (WELT-182).                                                                                                                        |
|           |            | Tekstdeel-foutjes hersteld (toelichting van element).                                                                                                                                                                |
|           |            | SymbolisatieItem-foutjes hersteld (toelichting van element, en gebruik status en procedurestatus-elementen).                                                                                                         |
|           |            | Aangepast dat het verboden is geworden om de oude RegelingVersieInformatie mee te sturen en tekstuele verbeteringen (WELT-171).                                                                                      |
|           |            | Aanvulling van integrale tekstvervanging.                                                                                                                                                                            |
| V2.0.2    | 2023-01-09 | In de alle hoofdstukken tekstuele aanpassingen gedaan om de leesbaarheid van de standaard te vergroten.                                                                                                              |
|           |            | Paragraaf over bestandsgrootte geschrapt omdat dit nu elders geregeld is (WELT-196).                                                                                                                                 |
|           |            | Toevoegen van UML diagrammen Kaart en Kaartlaag en SymbolisatieItem (WELT-201).                                                                                                                                      |
|           |            | Toevoegen van UML diagram OwObject (WELT-199). Voor duidelijkheid ook OP-object toegevoegd.                                                                                                                          |
|           |            | Aanscherpen tekst over identificatie ActiviteitLocatieaanduiding (WELT-194).                                                                                                                                         |
|           |            | Toevoegen van UML diagram Locatie en toestaan MultiPoint en MultiCurve (WELT-191).                                                                                                                                   |
|           |            | De tekst in over integrale tekstvervanging verduidelijkt (WELT-184).                                                                                                                                                 |
|           |            | Verhelderd dat nu niet is toegestaan dat twee Locaties naar dezelfde geometrie verwijzen maar dat er niet op gevalideerd wordt en dat het uit de standaard gaat verdwijnen. (WELT-173).                              |
|           |            | Naamgeving OwObject aangepast naar OW-object.                                                                                                                                                                        |
|           |            | Paragraaf over intrekken en vervangen herschreven met gelijkblijvend inhoud. De noot dat Integrale tekstvervanging momenteel niet werkt bij Regelingen met vrijetekststructuur is verwijderd omdat het nu wel werkt. |
|           |            | Teksten over Pons aangescherpt. (WELT-205)                                                                                                                                                                           |
| V2.0.3    | 2023-09-01 | Redactionele wijzigingen ter verbetering van de leesbaarheid en publicatie als html document.                                                                                                                        |
|           |            | Expliciet beschreven dat het wijzigen van het type van een OW-object niet is toegestaan. (redactionele wijziging)                                                                                                    |
|           |            | De wijzigingsmethode Intrekken & vervangen als alternatief voor renvooi is niet meer toegestaan en wordt niet meer beschreven (WELT-253) .                                                                           |
| 3.0.0     | 2023-12-15 | Toekennen van OW-objecten aan Regelingen verwerkt. Inclusief het verbieden van verwijzingen tussen regelingen van verschillende bevoegd gezagen.                                                                     |
|           |            | Diverse redactionele wijzigingen waaronder:  Uitleg van het status veld herschreven en paragraaf en uitleg over het veld procedurestatus herschreven (WELT-268).                                                     |
|           |            | Verwijzing naar versie xsd opgenomen.                                                                                                                                                                                |
|           |            | Noot toegevoegd dat directe mutaties alleen voor foutherstel via de beheerders van het stelsel toegankelijk zijn (WELT-274).                                                                                         |
|           |            | Dit is de eerste versie die in html is gepubliceerd. Eerdere versies zijn te vinden op: <https://github.com/Geonovum/TPOD/tree/master/CIMOW>.                                                                        |
| 3.0.1     | 2023-12-27 | Foutieve diagrammen in Figuur 3 en 4 gerepareerd.                                                                                                                                                                    |
| 3.1       | TODO       | De mogelijkheid om geen geldigOp datum mee te geven uit de tekst gehaald. Modelmatig was dit al niet mogelijk.                                                                                                       |
|           |            | Verwijzing opgenomen naar nieuwe versie van 'Basisgeometrie' document. Hierin staat een verwijzing naar het lange lijnen advies waardoor het nu mogelijk is te waarschuwen voor lange lijnen.                        |
|           |            | Overgestapt naar MIM versie 1.2. Dit heeft geen inhoudelijke invloed op de standaard.                                                                                                                                |
|           |            | Toevoegen attribuut OW-aanlevering.expressionIdentifier.                                                                                                                                                             |
|           |            | Het attribuut hoogte uit Locatie verwijderd.                                                                                                                                                                         |
|           |            | 


## uitgebreide voor wijzigingen in 3.1 

Hieronder volgt een overzicht van de belangrijkste wijzigvoorstellen die in deze
consultatie worden voorgelegd. Veel van de voorgestelde wijzigingen zijn al met
diverse ketenpartners besproken. Door deze consultatieversie te publiceren
delen we ze in samenhang met een breed publiek. De
resultaten van deze consultatie zijn input voor verdere besluitvorming.

**Wijziging om aan te sluiten op de extra consolidatiemechanismes van STOP-ic**

Een belangrijk onderdeel van STOP-ic is de introductie van versiebeheer voor
regelgeving waardoor extra consolidatie scenario's mogelijk zijn. [Hoofdstuk 5](#H05-GebruikIMOW)
schrijft voor hoe het IMOW hierop aansluit.

Aan OW-aanlevering is een attribuut 'expressionIdentifier' toegevoegd. Door de nieuwe
consolidatiescenario's in STOP waren attributen 'workIDRegeling' en 'doelID'
niet altijd meer voldoen om eenduidig de OW-aanlevering te koppelen aan de juiste
STOP consolidatie.

**Het attribuut hoogte uit Locatie verwijderen**

Hoogte is een optioneel attribuut van Locatie, waarmee een beperkte mate van 3D
mogelijk is. Maar omdat STOP dit kenmerk niet kent kan de hoogte van een
locatie niet rechtsgeldig bekendgemaakt worden. De werkafspraak om het attribuut
hoogte niet te gebruiken is nu in het IMOW verwerkt door  het
attribuut hoogte uit Locatie te verwijderen.
 
**Omgevingsnorm en Omgevingswaarde (Norm)**

Diverse werkafspraken over het gebruik van Omgevingsnorm en Omgevingswaarde in
IMOW zijn opgenomen in de standaard. In het bijzonder:

- Een Normwaarde geldt per individuele geometrie. Een Normwaarde die bedoeld
  is als gezamenlijke waarde voor meerdere geometrieën is niet toegestaan.
- Een Norm mag maar één waarde op een Locatie hebben.
- Locaties van een Norm mogen elkaar niet geheel of gedeeltelijk overlappen.

**Idealisatie moet dezelfde waarde hebben voor alle Juridische regels en Tekstdelen**

De werkafspraak dat het attribuut idealisatie dezelfde waarde moet hebben voor
alle Juridische regels bij een Regeltekst / alle Tekstdelen bij een Divisietekst
is nu verwerkt in het IMOW door constraints toe te voegen

Ook is expliciet beschreven dat idealisatie bij divisietekst slechts dan ingevuld mag 
worden als er locatieaanduidingen gekoppeld zijn aan de divisietekst.

**Klasse SymbolisatieItem verwijderd**

De bestaande werkafspraak om de klasse SymbolisatieItem niet te gebruiken is
verwerkt in het IMOW door de klasse SymbolisatieItem te verwijderen. In een
volgende versie van het IMOW komt een klasse met vergelijkbare functionaliteit.


**Gebruik van versienummer in IMOW-aanlevering verplicht**

Tot en met IMOW 3.0.1 kon aan het bronhouderkoppelvlak van de LVBB slechts één
versie van het IMOW aangeleverd. Met ingang
van IMOW 3.2 is het veld IMOWversie verplicht en gebruikt de LVBB het versienummer om te bepalen welke versie van de standaard gebruikt wordt.

**OW-objecten worden automatisch beëindigd bij het intrekken van een regeling**

In eerdere versies van het IMOW werd beschreven dat bij het intrekken van een
regeling het bevoegd gezag zelf verantwoordelijk is voor het beëindigen van de
aan de regeling gekoppelde OW-objecten. Deze wijziging zorgt ervoor dat die
OW-objecten automatisch worden ingetrokken.

Hierdoor wordt het intrekken van regelingen eenvoudiger. Vooral bij het
het intrekken van tijdelijk regelingdelen, die soms door een ander bevoegd
gezag worden ingetrokken dan degene die ze gemaakt heeft is dit wenselijk.

**Expliciet gemaakt dat een geometrie binnen Nederland inclusief EEZ moet liggen**

Om het functioneren van de landelijke voorziening te waarborgen is een regel
toegevoegd die Geometrie die ruim buiten Nederland met inbegrip van de exclusieve
economische zone valt weigert. Het stelsel gaat hierop valideren door alle geometrie
die buiten e
en naar buiten afgeronde bounding box rondom het genoemde gebied ligt
te weigeren.

**Attribuut procedureStatus uit OW-object verwijderd**

De waarde van het veld procedureStatus in een IMOW object is af te leiden uit
het STOP deel van een aanlevering en is redundant. Dit kenmerk is geschrapt.

**Verwachte wijzigingen in de definitieve versie**

De volgende wijzigingen aan IMOW zijn voorzien maar nog niet verwerkt in
IMOW-ic:

- Er wordt een vervang voor de verwijderde klasse SymbolisatieItem ontwikkeld.
- IMOW schrijft voor hoe OW-aanleveringen aan het LVBB bronhouderkoppelvlak
  moeten worden gekoppeld. Het bronhouderkoppelvlak is echter nog niet
  gespecificeerd. In samenhang met de wijzigingen in het BHKV zal IMOW gewijzigd
  worden.
- In een toekomstige versie van STOP wordt ondersteuning voor het wijzigen van
  GIO's verwacht. De mogelijkheid bestaat dat dit ook implicaties heeft voor het
  IMOW.
  
## Overgang tussen 3.0 en 3.1

Sinds versie 3.1 van het IMOW is het veld IMOWversie in OW-manifest verplicht. Het versienummer bepaalt aan welke versie van het IMOW model de aanlevering voldoet en dus aan welke (validatie-)regels de aanlevering moet voldoen. 

Verplicht maken van IMOWversie:

- Als het veld IMOWversie niet volgens het aangegeven patroon is ingevuld wordt de aanlevering geweigerd.
- Als er geen waarde is ingevuld, of de waarde verwijst naar een IMOW versie van 3.0 of lager dan moet de aanlevering voldoen aan de regels van IMOW versie 3.0.
- Als het veld IMOWversie een versienummer van 3.1 of hoger bevat dat moet de aanlevering voldoen aan de regels van de genoemde versie van IMOW.
- **Noot:** Het aanleveren van een niet ondersteunde IMOWversie kan resulteren in een melding van de voorziening.

Nieuw attribuut: expressionIDRegeling
- **IMOW 3.0:** expressionIDRegeling is leeg. Er mag geen gebruik gemaakt worden van STOP 1.4+ mutatiescenario's.
- **IMOW 3.1:** doelID is leeg. Er mag gebruik gemaakt worden van de STOP 1.4+ mutatiescenario's

OW-objecten worden automatisch beëindigd bij het intrekken van een regeling:
- **IMOW 3.0:** Bij het intrekken van een regeling moeten alle OW-objecten automatisch worden beëindigd.
- **IMOW 3.1:** TODO: hier valt wat te kiezen. Bijvoorbeeld we verbieden alles.

Attribuut procedureStatus uit OW-object verwijderd:
- **IMOW 3.0:** we kijken naar procedureStatus en geven melding als die niet klopt.
- **IMOW 3.1:** ProcedureStatus in de aanlevering wordt gegenegeerd.
