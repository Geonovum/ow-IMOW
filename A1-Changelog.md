# Bijlage: versiehistorie {#HA-Changelog}

## omschrijving wijzigingen in versie 3.1.0 

Voor de belangrijkste wijzigingen in deze versie geven we hier extra toelichting.

**Wijziging om aan te sluiten op de extra consolidatiemechanismes van STOP 1.4**

Om aan te sluiten op de extra consolidatiemechanismes van STOP 1.4 is
OW-aanlevering is een attribuut 'expressionIDRegeling' toegevoegd. Door
de nieuwe consolidatiescenario's waren attributen 'workIDRegeling' en 'doelID'
niet altijd meer voldoen om eenduidig de OW-aanlevering te koppelen aan de juiste
STOP consolidatie. [Hoofdstuk 5](#H05-GebruikIMOW)
gaat hier dieper op in.

Nieuw attribuut: expressionIDRegeling:

- **IMOW 3.0:** doelID is gevuld. Er mag geen gebruik gemaakt worden van STOP 1.4+ mutatiescenario's.
- **IMOW 3.1:** doelID is leeg. Er mag gebruik gemaakt worden van de STOP 1.4+ mutatiescenario's

**Het attribuut hoogte is uit Locatie verwijderd**

Hoogte was een optioneel attribuut van Locatie waarmee een beperkte mate van 3D
mogelijk is. Maar omdat STOP dit kenmerk niet kent kan de hoogte van een
locatie niet rechtsgeldig bekendgemaakt worden. Hierom is het
attribuut hoogte uit Locatie verwijderd.

Besluiten met een hoogte worden in IMOW 3.1 geweigerd.
 
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
is nu verwerkt in het IMOW door constraints toe te voegen.

Ook is expliciet beschreven dat idealisatie bij divisietekst allen  ingevuld mag 
worden als er locatieaanduidingen gekoppeld zijn aan de divisietekst en anders niet.

**Klasse SymbolisatieItem vervangen door attriuut eigenSymbolisatie**

De bestaande werkafspraak om de klasse SymbolisatieItem niet te gebruiken is
verwerkt in het IMOW door de klasse SymbolisatieItem te verwijderen. Hiervoor in de
plaats hebben de klassen Activiteit­Locatieaanduiding, Norm en  Gebiedsaanwijzing een
optioneel attribuut eigenSymbolisatie gekregen.

**Gebruik van versienummer in IMOW-aanlevering verplicht** 

Tot en met IMOW 3.0.1 kon aan het bronhouderkoppelvlak van de LVBB slechts één
versie van het IMOW aangeleverd. Met ingang
van IMOW 3.1 is het veld IMOWversie verplicht en gebruikt de LVBB dit nummer
om te bepalen welke versie van de standaard gebruikt wordt.

Sinds versie 3.1 van het IMOW is het veld IMOWversie in OW-manifest verplicht. Het versienummer bepaalt aan welke versie van het IMOW model de aanlevering voldoet en dus aan welke (validatie-)regels de aanlevering moet voldoen. 

Verplicht maken van IMOWversie:
- Als het veld IMOWversie niet volgens het aangegeven patroon is ingevuld wordt de aanlevering geweigerd.
- Als er geen waarde is ingevuld, of de waarde verwijst naar een IMOW versie van 3.0 of lager dan moet de aanlevering voldoen aan de regels van IMOW versie 3.0.
- Als het veld IMOWversie een versienummer van 3.1 of hoger bevat dat moet de aanlevering voldoen aan de regels van de genoemde versie van IMOW.
- **Noot:** Het aanleveren van een niet ondersteunde IMOWversie kan resulteren in een melding van de voorziening.


**OW-objecten worden automatisch beëindigd bij het intrekken van een regeling**

In eerdere versies van het IMOW werd beschreven dat bij het intrekken van een
regeling het bevoegd gezag zelf verantwoordelijk is voor het beëindigen van de
aan de regeling gekoppelde OW-objecten. Deze wijziging zorgt ervoor dat die
OW-objecten automatisch worden ingetrokken.

Hierdoor wordt het intrekken van regelingen eenvoudiger. Vooral bij het
het intrekken van tijdelijk regelingdelen, die soms door een ander bevoegd
gezag worden ingetrokken dan degene die ze gemaakt heeft is dit wenselijk.

- **IMOW 3.0:** Bij het intrekken van een regeling moeten alle OW-objecten door het bevoegd gezag worden beëindigd.
- **IMOW 3.1:** Als er wel een OW-aanlevering is gekoppeld aan de intrekking moet het bevoegd gezag zelf de alle OW-objecten behorend bij de regeling beëindigen. Als er geen OW-aanlevering is gekoppeld aan de intrekking zal het stelsel alle OW-objecten behorend bij de regeling beëindigen.  

**Expliciet gemaakt dat een geometrie binnen Nederland inclusief EEZ moet liggen**

Om het functioneren van de landelijke voorziening te waarborgen is een regel
toegevoegd die Geometrie die ruim buiten Nederland met inbegrip van de exclusieve
economische zone valt weigert. Het stelsel gaat hierop valideren door alle geometrie
die buiten de naar buiten afgeronde bounding box rondom het genoemde gebied ligt
te weigeren.

**Attribuut procedureStatus uit OW-object verwijderd**

De waarde van het veld procedureStatus in een IMOW object is af te leiden uit
het STOP deel van een aanlevering en is redundant. Dit kenmerk is geschrapt.

 - **IMOW 3.0:** Er wordt gevalideerd of de waarde van procedureStatus overeenkomt met de procedurestatus van de aanlevering.
 - **IMOW 3.1:** De waarde van het veld procedureStatus wordt genegeerd.

## Eerdere wijzigingen

In de versiehistorie wordt met WELT-xx verwezen naar de Wensen en Eisen Lijst
voor de TPOD-standaard. Deze lijst bevat meldingen en wijzigingsverzoeken die
door gebruikers van de standaard zijn ingediend. De ingediende meldingen zijn te
vinden via <https://www.geonovum.nl/geo-standaarden/meldingen>.

Omdat het document grondig is geherstructureerd zijn de paragraafverwijzingen
tot versie 3.0.1 niet meer geldig en verwijderd.

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
