# Verschillen tussen IMOW en CIM-OW {#126CC8D0}

Het IMOW is een implementatie van het conceptuele model CIM-OW. Niet alles uit het CIM-OW is één op één overgenomen in het IMOW. Dit hoofdstuk beschrijft de verschillen: CIM-OW aspecten die niet in het IMOW zitten worden geduid in paragraaf 5.1. en paragraaf 5.2 bescrijft  de delen van het IMOW die niet in het CIM-OW zitten.<br/>
## CIM-OW-aspecten niet in IMOW {#19F408D9}

Niet alle concepten beschreven in het CIM-OW worden vastgelegd in het IMOW.  Sommige van de van deze gegevens zijn af te leiden uit het OP-deel van een Aanlevering.  Deze gegevens hoeven niet nogmaals beschreven in het IMOW. Het gaat hier bijvoorbeeld om de volgende concepten uit het CIM-OW:<br/>
<ul><li>Regeltekst.Werkingsgebied – het werkingsgebied wordt afgeleid op basis van de locatieaanduidingen van Juridische regels.</li>
<li>Activiteit.locatie – hierin zit de locaties waar de Activiteit gereguleerd wordt, deze wordt in het IMOW via de activiteitlocatieaanduidingen vastgelegd.</li>
<li>Regeltekst.Omschrijving – hierin zit de inhoud van de Regeltekst, deze wordt niet aangeleverd via IMOW, maar wordt via de OP-bestanden afgeleid.</li>
<li>Omgevingsdocumenten (Regelingen en Omgevingsvergunningen), Bevoegd Gezag, DocumentComponenten. Deze gegevens zijn in het CIM-OW toegevoegd, omdat ze van belang zijn voor het DSO-LV.</li>
<li>De tijdslijnen voor de objectvorming in DSO-LV worden gebaseerd op het omgevingsdocument dat de LVBB maakt en uitlevert.</li>
</ul>

## IMOW-aspecten niet in CIM-OW {#6C42F8AD}

<ol><li>Het IMOW kent de volgende verschillen ten opzichte van het CIM-OW:</li>
</ol>

<b>Gebiedsaanwijzing</b><br/>
Gebiedsaanwijzing is meer generiek opgezet in IMOW dan in CIM-OW. De Functie en het Beperkingengebied zijn zo opgezet dat er andere typen Gebiedsaanwijzingen toegevoegd kunnen worden, zonder impact op de XSD’s. De type gebiedsaanwijzingen kunnen worden meegegeven door het kenmerk ‘TypeGebiedsaanwijzing’. De groepen die je kunt selecteren volgen vervolgens uit de verschillende waardelijsten van de specifieke ‘gebiedsaanwijzingstypen’.

<b>Relaties</b><br/>
In IMOW staan de rolnamen centraal in plaats van de naam van de relatiesoort. Deze rolnamen worden ook gebruikt in de XML-schemas.

<b>Regelingsgebied</b><br/>
In het IMOW wordt er een specifiek object benoemd dat Regelingsgebied heet. In het CIM-OW is dit op een andere manier vormgegeven. Een regelingsgebied in IMOW koppelt een Locatie aan een Omgevingsdocument, zodat deze Locatie het regelingsgebied van een Omgevingsdocument wordt. Het regelingsgebied uit IMOW wordt in DSO-LV niet tot een OW-object gevormd. In DSO-LV is een regelingsgebied een relatie tussen een Omgevingsdocument en een Locatie, conform CIM-OW.

<b>ActiviteitLocatieaanduiding</b><br/>
In CIM-OW is dit gemodelleerd als gegevensgroep, terwijl dit in IMOW een relatieklasse is

<b>Geometrie en GIO</b><br/>
In het IMOW wordt het kenmerk Geometrie als apart objecttype getoond. Conceptueel (CIM-OW) is een geometrie een kenmerk van een locatie, maar in de implementatie (IMOW) wordt het gezien als een gerefereerd objecttype. Dit objecttype Geometrie is geen zelfstandig objecttype, het hoort altijd als gerefereerde eigenschap bij een Locatie. Een Geometrie kan niet zelfstandig gemuteerd worden en historie opbouwen, maar een Locatie kan dat wel.

Geometrie wordt door zowel STOP als IMOP gebruikt. Het BG hoeft daardoor Geometrie maar één keer aan te leveren. Vanwege dat gezamenlijk gebruik is Geometrie in een zelfstandig bestand geplaatst van waaruit zowel een GIO als de informatieobjecten uit IMOW apart naar wordt verwezen. Verschil in 1.0 is wel dat het GML-bestand normwaarden dient te bevatten indien deze bij de geometrie horen. Deze worden middels het GIO-schema geduid, en vallen niet onder het IMOW.

Zie paragraaf <a href='#110333AD'>2.2.5</a> voor het IMOW model voor geometrie en locatie.

Deze geometrie constructie leidt tot de volgende IMOW-attributen:<br/>
<ul><li>(Gebied, Lijn, Punt).geometrie: Een verwijzing vanuit Locatie (Gebied, Lijn of Punt) naar een bijbehorende Geometrie.</li>
<li>Geometrie.id: UUID identificatie van de Geometrie</li>
<li>Geometrie.geometrie: Vastleggen van een geometrie middels coördinaten.</li>
</ul>

Het objecttype Geometrie heeft hierin het algemene ISO-19107 geometrietype GM_Object. In de Locatie-objecten wordt middels een constraint aangegeven wat de beperking op dit algemene type is.<br/>
