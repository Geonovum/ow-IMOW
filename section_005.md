## <a name='_Ref92176561'></a><a name='Verschillen'></a>Verschillen tussen IMOW en CIMOW

De verschillen tussen het IMOW en CIMOW worden geduid in twee verschillende paragrafen: de delen van het CIMOW die niet in het IMOW zitten (<a href='#_Ref92188393'>5.1<a></a>) en de delen van het IMOW die het CIMOW niet bevat (<a href='#_Ref42871428'>5.2<a></a>).<a name='_Ref42871433'></a><a name='Verschillen_CIMOW'></a>

### <a name='_Ref92176279'></a><a name='_Ref92188393'></a>CIMOW-aspecten niet in IMOW

Niet alle gegevens uit het CIMOW zijn ondergebracht in het IMOW-deel. Namelijk de informatie die in CIMOW is aangeduid met ‘herkomst: OP’. Dit zijn gegevens die de applicatie van het DSO (OZON) ophaalt uit het IMOP-deel en niet worden aangeleverd door het IMOW, zoals:

<ul><li>Regeltekst.Werkingsgebied – het werkingsgebied wordt afgeleid op basis van de locatieaanduidingen van Juridische regels.</li>
<li>Activiteit.Locatie – hierin zit de locaties waar de activiteit gereguleerd wordt, deze wordt niet aangeleverd via IMOW, maar wordt afgeleid vanuit de activiteitlocatieaanduidingen.</li>
<li>Regeltekst.Omschrijving – hierin zit de inhoud van de Regeltekst, deze wordt niet aangeleverd via IMOW, maar wordt via de OP-bestanden afgeleid.</li>
<li>Omgevingsdocumenten (Regelingen en Omgevingsvergunningen), Bevoegd Gezag, DocumentComponenten. Deze gegevens zijn in het CIMOW toegevoegd, omdat ze van belang zijn voor het DSO-LV.</li>
<li>De tijdslijnen voor de objectvorming in DSO-LV worden gebaseerd op het omgevingsdocument dat de LVBB maakt en uitlevert.</li>
</ul>

### <a name='_Ref42871428'></a><a name='Verschillen_IMOW'></a>IMOW-aspecten niet in CIMOW

<ol><li>Het IMOW kent de volgende verschillen ten opzichte van het CIMOW:</li>
</ol>

#### OWobject en OPobject

Alle objecttypen uit CIMOW krijgen supertypen (OWobject en OPobject). Dit wordt gedaan voor alle objecttypes uit CIMOW en hiermee kan de koppeling naar OP afgeleid worden evenals generieke attributen die voor alle aangeleverde objecten gelden (zoals status en procedurestatus).

#### Gebiedsaanwijzing

Gebiedsaanwijzing is meer generiek opgezet in IMOW dan in CIMOW. De Functie en het Beperkingengebied zijn zo opgezet dat er andere typen Gebiedsaanwijzingen toegevoegd kunnen worden, zonder impact op de XSD’s. De type gebiedsaanwijzingen kunnen worden meegegeven door het attribuut ‘TypeGebiedsaanwijzing’. De groepen die je kunt selecteren volgen vervolgens uit de verschillende waardelijsten van de specifieke ‘gebiedsaanwijzingstypen’.

#### Relaties

In IMOW staan de rolnamen centraal in plaats van de naam van de relatiesoort. Voorbeelden hiervan zijn locatieaanduiding, omgevingsnormaanduiding. Deze rolnamen worden ook geïmplementeerd in de XSD’s.

#### Regelingsgebied

In het IMOW wordt er een specifiek object benoemd dat Regelingsgebied heet. In het CIMOW is dit op een andere manier vormgegeven. Een regelingsgebied in IMOW koppelt een Locatie aan een Omgevingsdocument, zodat deze Locatie het regelingsgebied van een Omgevingsdocument wordt. Het regelingsgebied uit IMOW wordt in DSO-LV niet tot een OW-object gevormd. In DSO-LV is een regelingsgebied een relatie tussen een Omgevingsdocument en een Locatie, conform CIMOW.

#### ActiviteitLocatieaanduiding

In CIMOW is er per v1.0.3 voor gekozen om dit te modelleren als gegevensgroep, terwijl dit in IMOW nog een relatieklasse is. Er wordt onderzocht of deze modelleringswijze ook in IMOW gewijzigd dient te worden.

#### Geometrie en GIO

In het IMOW wordt het attribuut Geometrie als apart objecttype getoond. Conceptueel (CIMOW) is een geometrie een attribuut van een locatie, maar in de implementatie (IMOW) wordt het gezien als een gerefereerd objecttype. Dit objecttype Geometrie is geen zelfstandig objecttype, het hoort altijd als gerefereerde eigenschap bij een Locatie. Hiertoe is het niet toegestaan om twee Locaties naar dezelfde Geometrie te laten verwijzen (noot: inmiddels is gebleken dat er geen probleem is als er twee Locaties naar dezelfde Geometrie verwijzen, daarom wordt er niet op deze regel gevalideerd in de keten en in een volgende versie van de standaard zal deze regel verwijderd worden.) Een Geometrie kan niet zelfstandig gemuteerd worden en historie opbouwen, maar een Locatie kan dat wel.

Geometrie wordt door zowel STOP als IMOP gebruikt. Het BG hoeft daardoor Geometrie maar één keer aan te leveren. Vanwege dat gezamenlijk gebruik is Geometrie in een zelfstandig bestand geplaatst van waaruit zowel een GIO als de informatieobjecten uit IMOW apart naar wordt verwezen. Verschil in 1.0 is wel dat het GML-bestand normwaarden dient te bevatten indien deze bij de geometrie horen. Deze worden middels het GIO-schema geduid, en vallen niet onder het IMOW.

Zie paragraaf <a href='#_Ref113026420'>2.4.3<a></a> voor het IMOW model voor geometrie en locatie.

Deze geometrie constructie leidt tot de volgende IMOW-attributen:

<ul><li>(Gebied, Lijn, Punt).geometrie: Een verwijzing vanuit Locatie (Gebied, Lijn of Punt) naar een bijbehorende Geometrie.</li>
<li>Geometrie.id: UUID identificatie van de Geometrie</li>
<li>Geometrie.geometrie: Vastleggen van een geometrie middels coördinaten.</li>
</ul>

Het objecttype Geometrie heeft hierin het algemene ISO-19107 geometrietype GM_Object. In de Locatie-objecten wordt middels een constraint aangegeven wat de beperking op dit algemene type is.

