# Release Notes

Hieronder volgt een overzicht van de belangrijkste wijzigvoorstellen die in deze consultatie worden voorgelegd. Veel van de voorgestelde wijzigingen zijn al met  diverse ketenpartners besproken. Door deze consultatieversie te publiceren verwachten we ze in samenhang met een breed publiek te kunnen delen. De resultaten van deze consultatie zullen verwerkt worden in het verdere besluitvormingsproces.

## Versienummer in het IMOW wordt verplicht

## Geen annotaties meer op divisie niveau

In eerdere versies van het IMOW was het mogelijk om vrije tekst te annoteren op divisie-niveau waarbij de semantiek was dat de annotaties op een divisie geldig waren voor alle onderliggende tekstelement. Implementatie hiervan bleek lastig en foutgevoelig. In deze versie kun je alleen nog annoteren op een Divisietekst.

## Het attribuut hoogte uit Locatie verwijderen

Hiermee wordt de werkafspraak die het gebruik van het attribuut hoogte verbiedt opgenomen in het IMOW.

## Verwijderen van de klasse SymbolisatieItem

De bestaande werkafspraak om de klasse SymbolisatieItem niet te gebruik wordt hiermee opgenomen in het IMOW. In een volgende versie van het IMOW komt een klasse met vergelijkbare functionaliteit. Onderdeel van de migratie naar deze nieuwe situatie is om allen SymbolisiatieItem objecten in het DSO te verwijderen. Omdat er in Productie geen SymbolisatieItem objecten zijn zal de impact hiervan gering zijn.

## Doorvoeren wijzigingen Omgevingsnorm en Omgevingswaarde

## OW-aanlevering heeft extra kenmerk expressionIdentifier

## OW-objecten worden automatisch beëindigd bij het intrekken van een regeling

In eerdere versies van het IMOW werd beschreven dat bij het intrekken van een regeling het bevoegd gezag zelf verantwoordelijk is voor het beëindigen van de aan de regeling gekoppelde OW-objecten. Deze wijziging zorg ervoor dat die OW-objecten automatisch worden ingetrokken.

Het voordeel van deze wijziging is dat het intrekken van een regeling eenvoudiger wordt.

Deze wijziging heeft vooral impact op de volgende [paragraaf](#5952605C).


## Waarschuwing toevoegen voor geometrie buiten het ambtsgebied



## Is procedureStatus nog wel nodig?

Het veld OW-object.prodecureStatus moet verplicht de waarde 'ontwerp' hebben voor ontwerbesluiten. Dit kan ook automatisch afgeleid worden. Voorstel is het veld te schrappen.


