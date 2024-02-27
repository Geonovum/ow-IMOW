# Implementatiekeuzes in het IMOW

Het IMOW is een implementatie van het conceptuele model CIM-OW. Niet alles uit
het CIM-OW is één op één overgenomen in het IMOW. Dit hoofdstuk beschrijft de
verschillen: CIM-OW aspecten die niet in het IMOW zitten worden geduid in
paragraaf 5.1. en paragraaf 5.2 bescrijft de delen van het IMOW die niet in het
CIM-OW zitten.

## CIM-OW-aspecten niet in IMOW {#19F408D9}

Niet alle concepten beschreven in het CIM-OW worden vastgelegd in het IMOW.
Sommige van de van deze gegevens zijn af te leiden uit het OP-deel van een
Aanlevering. Deze gegevens worden niet nogmaals vastgelegd in het IMOW. Het gaat
hier om de volgende concepten uit het CIM-OW:

- **RegeltekstAnnotatie.werkingsgebied** – het werkingsgebied van een Regeltekst
  wordt afgeleid op basis van de locatieaanduidingen van Juridische regels. De
  locatieaanduidingen van de Juridische regels worden vastgelegd in het IMOW,
  maar niet het afgeleide werkingsgebied.
- **Activiteit.locatieaanduiding** – hierin zit de locaties waar de Activiteit
  gereguleerd wordt, deze wordt in het IMOW via de activiteitlocatieaanduidingen
  vastgelegd.
- De tijdslijnen voor de objectvorming in DSO-LV worden gebaseerd op het
  omgevingsdocument dat de LVBB maakt en uitlevert.

## IMOW-aspecten niet in CIM-OW {#6C42F8AD}

Het IMOW kent de volgende verschillen ten opzichte van het CIM-OW:

### Regelingsgebied

In het IMOW wordt er een specifiek object benoemd dat Regelingsgebied heet. In
het CIM-OW is dit op een andere manier vormgegeven. Een regelingsgebied in IMOW
koppelt een Locatie aan een Omgevingsdocument, zodat deze Locatie het
regelingsgebied van een Omgevingsdocument wordt. Het regelingsgebied uit IMOW
wordt in DSO-LV niet tot een OW-object gevormd. In DSO-LV is een regelingsgebied
een relatie tussen een Omgevingsdocument en een Locatie, conform CIM-OW.

### ActiviteitLocatieaanduiding

In CIM-OW is dit gemodelleerd als gegevensgroep, terwijl dit in IMOW een
relatieklasse is

### Geometrie en GIO

In het IMOW wordt het kenmerk Geometrie als apart objecttype getoond.
Conceptueel (CIM-OW) is een geometrie een kenmerk van een locatie, maar in de
implementatie (IMOW) wordt het gezien als een gerefereerd objecttype. Dit
objecttype Geometrie is geen zelfstandig objecttype, het hoort altijd als
gerefereerde eigenschap bij een Locatie. Een Geometrie kan niet zelfstandig
gemuteerd worden en historie opbouwen, maar een Locatie kan dat wel.

Geometrie wordt door zowel STOP als IMOW gebruikt. Ze hoeven door het bevoegd
gezag echter alleen in de GIO te worden aangeleverd. In het IMOW wordt er naar
de geometrie in de GIO verwezen middels de UUID in de GIO.

Deze geometrie constructie leidt tot de volgende IMOW-attributen:

- (Gebied, Lijn, Punt).geometrie: Een verwijzing vanuit Locatie (Gebied, Lijn of
  Punt) naar een bijbehorende Geometrie.
- Geometrie.id: UUID identificatie van de Geometrie
- Geometrie.geometrie: Vastleggen van een geometrie middels coördinaten.

Het objecttype Geometrie heeft hierin het algemene ISO-19107 geometrietype
GM_Object. In de Locatie-objecten wordt middels een constraint aangegeven wat de
beperking op dit algemene type is.
