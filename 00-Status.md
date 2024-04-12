# Status van dit document

Dit is een consultatieversie. Reageren op dit document kan via het reactieformulier op: <https://fd10.formdesk.com/geonovum/consultatie_IMOW-IC>

Hieronder volgt een overzicht van de belangrijkste wijzigvoorstellen die in deze
consultatie worden voorgelegd. Veel van de voorgestelde wijzigingen zijn al met
diverse ketenpartners besproken. Door deze consultatieversie te publiceren
verwachten we ze in samenhang met een breed publiek te kunnen delen. De
resultaten van deze consultatie zijn input voor verdere besluitvorming.

**Het attribuut hoogte uit Locatie verwijderen**

Hoogte is een optioneel attribuut van Locatie, waarmee een beperkte mate van 3D mogelijk is. Echter STOP kent dit kenmerk niet en een GIO met hoogte kan niet rechtsgeldig bekendgemaakt worden. Daarom was er een werkafspraak om het attribuut hoogte niet te gebruik. Deze afspraak is nu in het IMOW opgenomen.
 
**Omgevingsnorm en Omgevingswaarde (Norm)**

Diverse werkafspraken over het gebruik van Omgevingsnorm en Omgevingswaarde in IMOW zijn opgenomen in de standaard. In het bijzonder:

- Een Normwaarde geldt per individuele geometrie. Een Normwaarde die bedoeld
  is als gezamenlijke waarde voor meerdere geometrieën is niet toegestaan
- Een Norm mag maar 1 waarde op een Locatie hebben.
- Locaties van een Norm mogen elkaar niet geheel of gedeeltelijk overlappen.

**Idealisatie moet dezelfde waarde hebben voor alle Juridische regels**

De werkafspraak dat het attribuut idealisatie dezelfde waarde moet hebben voor
alle Juridische regels bij een Regeltekst / alle Tekstdelen bij een Divisietekst
wordt opgenomen in het IMOW.

Ook expliciet beschreven dat idealisatie bij divisietekst dan en slechts dan ingevuld mag worden als er locatieaanuidingen gekoppeld zijn aan de divisietekst.

**Klasse SymbolisatieItem verwijderd**

De bestaande werkafspraak om de klasse SymbolisatieItem niet te gebruik wordt
hiermee opgenomen in het IMOW. In een volgende versie van het IMOW komt een
klasse met vergelijkbare functionaliteit.

**Klasse Divisie verwijderd**

In eerdere versies van het IMOW was het mogelijk om vrije tekst te annoteren op
divisie-niveau waarbij de semantiek was dat de annotaties op een divisie geldig
waren voor alle onderliggende tekstelement. Implementatie hiervan bleek lastig
en foutgevoelig. In deze versie kun je alleen nog annoteren op een Divisietekst.

**Gebruik van versienummer in IMOW-aanlevering verplicht**

Tot en met versie 3.0.1 kon aan het BHKV slechts één versie van het
IMOW gebruikt worden. Met ingang van versie 4.0.0 bevat het IMOW een versienummer
waaraan het BHKV kan zien aan welke versie van het IMOW de aanlevering
voldoet.

**OW-aanlevering heeft extra kenmerk expressionIdentifier**

Een aanlevering aan het BHKV kan de tekst van meerdere regelingen wijzigen.
In dat geval zullen er ook meerdere OW-aanlevering in de aanlevering zitten
waarbij de OW-aanlevering gekoppeld moet worden aan de
juiste consolidatieInformatie in STOP. In sommige situaties waren de
attributen in OW-aanlevering hiervoor niet voldoende. Daarvoor is een nieuw
attribuut expressionIdentifier toegevoegd.

**OW-objecten worden automatisch beëindigd bij het intrekken van een regeling**

In eerdere versies van het IMOW werd beschreven dat bij het intrekken van een
regeling het bevoegd gezag zelf verantwoordelijk is voor het beëindigen van de
aan de regeling gekoppelde OW-objecten. Deze wijziging zorg ervoor dat die
OW-objecten automatisch worden ingetrokken.

Het voordeel van deze wijziging is dat het intrekken van een regeling
eenvoudiger wordt wat het intrekken van tijdelijk regelingdelen gaat
vereenvoudigen.

Deze wijziging heeft vooral impact op [paragraaf 5.2.2](#H05-IntrekkenRegeling).

**Waarschuwing voor geometrie**

Ten behoeve van de het functioneren van de landelijke voorziening is een validatie
toegevoegd die geometrie die ruim buiten Nederland met inbegrip van de exclusieve
economische zone valt te weigeren. (WELT-275)

Daarnaast wordt een waarschuwing gegeven wanneer een aangeleverde geometrie niet 
binnen het ambtsgebied van het bevoegd gezag valt.

**Attribuut procedureStatus uit OW-object verwijderd**

De waarde van het veld procedureStatus in een IMOW object is af te leiden uit
het STOP deel van een aanlevering en is redundant. Dit kenmerk wordt geschrapt
uit het IMOW.







