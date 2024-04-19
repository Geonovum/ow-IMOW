# Status van dit document

Dit is een consultatieversie. Reageren op dit document kan via het reactieformulier op: <https://fd10.formdesk.com/geonovum/consultatie_IMOW-IC>

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

**Klasse Divisie verwijderd**

In deze versie van het IMOW is de mogelijkheid verwijderd om vrije tekst te annoteren op
divisie-niveau waarbij de semantiek was dat de annotaties op een Divisie ook van toepassing 
waren op alle onderliggende elementen. Implementatie hiervan bleek lastig
en foutgevoelig. In deze versie kun je alleen nog annoteren op een Divisietekst.

**Gebruik van versienummer in IMOW-aanlevering verplicht**

Tot en met IMOW 3.0.1 kon aan het bronhouderkoppelvlak van de LVBB slechts één
versie van het IMOW aangeleverd. Met ingang
van IMOW 4.0 is het veld IMOWversie verplicht zodat
het BHKV kan zien aan welke versie van het IMOW de aanlevering
voldoet.

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
  