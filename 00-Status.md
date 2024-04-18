# Status van dit document

Dit is een consultatieversie. Reageren op dit document kan via het reactieformulier op: <https://fd10.formdesk.com/geonovum/consultatie_IMOW-IC>

Hieronder volgt een overzicht van de belangrijkste wijzigvoorstellen die in deze
consultatie worden voorgelegd. Veel van de voorgestelde wijzigingen zijn al met
diverse ketenpartners besproken. Door deze consultatieversie te publiceren
verwachten we ze in samenhang met een breed publiek te kunnen delen. De
resultaten van deze consultatie zijn input voor verdere besluitvorming.

**Wijziging om aan te sluiten op de extra consolidatiemechanismes van STOP-ic**

In een aanlevering aan het BHKV zitten STOP onderdelen en IMOW onderdelen. Deze
zijn aan elkaar gekoppeld door in de OW-aanlevering te verwijzen naar het juiste
onderdeel in STOP. Door de nieuwe consolidatiescenario's in STOP is die verwijzing
niet altijd meer eenduidig en is een extra attribuut 'expressionIdentifier'
toegevoegd  aan OW-aanlevering.

Daarnaast zijn regels toegevoegd voor het toepassen van IMOW bij de verschillende
consolidatiemechanismes.


**Het attribuut hoogte uit Locatie verwijderen**

Hoogte is een optioneel attribuut van Locatie, waarmee een beperkte mate van 3D mogelijk is. Echter STOP kent dit kenmerk niet en daarom kan de hoogte van een locatie niet rechtsgeldig bekendgemaakt worden. De werkafspraak om het attribuut hoogte niet te gebruiken is nu in het IMOW verwerkt door uit Locatie het attribuut hoogte te verwijderen.
 
**Omgevingsnorm en Omgevingswaarde (Norm)**

Diverse werkafspraken over het gebruik van Omgevingsnorm en Omgevingswaarde in IMOW zijn opgenomen in de standaard. In het bijzonder:

- Een Normwaarde geldt per individuele geometrie. Een Normwaarde die bedoeld
  is als gezamenlijke waarde voor meerdere geometrieën is niet toegestaan
- Een Norm mag maar 1 waarde op een Locatie hebben.
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

Tot en met IMOW 3.0.1 kon aan het BHKV slechts één versie van het
IMOW aangeleverd worden en was het altijd welke versie gebruikt werd. Met ingang
van IMOW 4.0 is het veld IMOWversie verplicht zodat
het BHKV kan zien aan welke versie van het IMOW de aanlevering
voldoet.

**OW-objecten worden automatisch beëindigd bij het intrekken van een regeling**

In eerdere versies van het IMOW werd beschreven dat bij het intrekken van een
regeling het bevoegd gezag zelf verantwoordelijk is voor het beëindigen van de
aan de regeling gekoppelde OW-objecten. Deze wijziging zorgt ervoor dat die
OW-objecten automatisch worden ingetrokken.

Het voordeel van deze wijziging is dat het intrekken van een regeling
eenvoudiger wordt wat het intrekken van tijdelijk regelingdelen gaat
vereenvoudigen.

**Expliciet gemaakt dat een geometrie binnen Nederland inclusief EEZ moet liggen**

In het IMOW is expliciet gemaakt dat geometrie die ruim buiten Nederland met
inbegrip van de exclusieve economische zone weigert. (WELT-275)


**Attribuut procedureStatus uit OW-object verwijderd**

De waarde van het veld procedureStatus in een IMOW object is af te leiden uit
het STOP deel van een aanlevering en is redundant. Dit kenmerk wordt geschrapt
uit het IMOW.
