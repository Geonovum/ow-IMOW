## Inleiding

Dit document beschrijft het Informatiemodel Omgevingswet (IMOW) dat gebruikt wordt in de keten van plan tot publicatie voor het annoteren van besluiten. Het IMOW is gebaseerd op het conceptuele model CIMOW. CIMOW hoort bij de reeks conceptuele modellen waarop de ketens van het Digitaal Stelsel Omgevingswet (DSO) gebaseerd zijn. Het IMOW specificeert hoe de concepten van het CIMOW geïmplementeerd moeten worden. Het IMOW is relevant voor het aanleveren richting het DSO. 

In paragraaf <a href='#_Ref36562686'>1.1<a></a> wordt een context geboden van de standaard. Vervolgens wordt in paragraaf <a href='#_Ref92176502'>1.2<a></a> een context geboden van de aanwezige documentatie en waar je wat kunt vinden. In paragraaf <a href='#_Ref92176514'>1.3<a></a> wordt de verdere inhoud van dit document toegelicht.

### <a name='_Ref36562686'></a><a name='Inleiding_context'></a>Context standaard

Wanneer je in de context van de Omgevingswet als bevoegd gezag besluit over het wijzigen van een regeling (bijvoorbeeld een Omgevingsplan) en dat besluit officieel wilt publiceren doe je dit door een zip bestand, met de inhoud van het besluit, aan te leveren naar de LVBB, de landelijke voorziening bekendmaken en beschikbaar stellen. Hoe dat bestand gestructureerd moet zijn staat beschreven in verschillende standaarden:

<ul><li>De <a href='https://koop.gitlab.io/lvbb/bronhouderkoppelvlak/' target='_blank'>LVBB bronhouderkoppelvlak</a> standaard beschrijft welke bestanden er in de aanlevering moeten zitten wat voor eisen er zijn aan de namen van de bestanden etc.</li>
<li>De <a href='https://koop.gitlab.io/STOP/standaard/index.html' target='_blank'>STOP</a> standaard legt de documentstructuur van de tekst van het besluit vast. Ook beschrijft deze standaard veel metadata voor de verwerking van het besluit. Er is onderscheid tussen documenten met een artikelstructuur en vrije-tekst documenten. Verder beschrijft de STOP standaard hoe geografische informatieobjecten (GIO’s) moeten worden aangeleverd. Deze informatie vormt gezamenlijk de inhoud van de regeling.</li>
<li>Het <a href='https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD' target='_blank'>IMOW</a> (dit document) beschrijft hoe de tekstonderdelen van een besluit te annoteren zijn, zodat ze beter verwerkt (en op een kaart getoond) kunnen worden in het DSO. Een annotatie bestaat uit een IMOW object dat gekoppeld is aan identificeerbare onderdelen van de tekst. Het IMOW is bedoeld voor het realiseren van functionaliteit ten behoeve van het bevragen van een regeling in DSO-verband. Data zijn hiervoor bezien van uit geografisch perspectief. Bij een IMOW-aanlevering kun je denken aan het duiden van specifieke activiteiten op de kaart of het meeleveren van functies of beperkingengebieden. In principe zorgen de gegevens die aangeleverd worden vanuit het IMOW dat de buitenwereld in staat is om de Omgevingswet-informatie op een kaart terug te vinden</li>
<li>Toepassingsprofielen omgevingsdocumenten (TPOD’s). Per type omgevingsdocument is er ook een set aanvullende regels specifiek voor dat type omgevingsdocument. In de TPOD’s is opgenomen hoe die toegepast moeten worden.</li>
</ul>

<figure><img src='media/image1.png' alt='media/image1.png' style='width: 100%;'></img>
<figcaption>Schematisch overzicht van aanlevering conform de standaard</figcaption></figure>

### <a name='_Ref36562691'></a><a name='_Ref92176502'></a><a name='Inleiding_documentatie'></a>Documentatie

In deze paragraaf worden de verschillende documenten behorend bij de DSO standaarden kort toegelicht zodat het duidelijk is waar welke informatie te vinden is.

#### IMOW – plan tot publicatie

Dit document. Hierin staat beschreven hoe annotaties bij een besluit aangeleverd dienen te worden en hoe je aanlevert conform de set van IMOW.xsd’s. Deze XSD’s (XML-schema’s) worden gebruikt voor de beschrijving van XML-gebaseerde gegevensuitwisseling in het DSO. Het IMOW implementeert de objecten beschreven in het CIMOW.

#### CIMOW – plan tot publicatie

Het conceptueel informatiemodel, hierin staat beschreven welke objecttypen het CIMOW kent en hoe deze zich tot elkaar verhouden. Het CIMOW is het leidende informatiemodel voor informatie-uitwisseling binnen het DSO.

#### STOP

De Standaard Officiële Publicaties beschrijft hoe je een omgevingsdocument aanlevert conform de schema’s behorend bij de STOP-standaard.

#### TPOD

Toepassingsprofielen voor omgevingsdocumenten (TPOD’s) beschrijven de juridische en informatiekundige context voor de specifieke omgevingsdocumenten. Zie de publicatie van de standaard voor de actuele lijst toepassingsprofielen:

<ul><li>Omgevingsplan (het omgevingsdocument dat gemeenten aanleveren, het voormalige bestemmingsplan)</li>
<li>Omgevingsverordening (het omgevingsdocument dat provincies aanleveren, de voormalige provinciale verordening)</li>
<li>Waterschapsverordening (het omgevingsdocument dat waterschappen aanleveren)</li>
<li>Algemene maatregelen van bestuur/ ministeriële regeling (AMvB/MR, de omgevingsdocumenten die worden aangeleverd vanuit het rijk)</li>
<li>Projectbesluit (het omgevingsdocument waarmee een specifiek project mogelijk wordt gemaakt)</li>
<li>Omgevingsvisie (het omgevingsdocument waarmee het bevoegd gezag een visie kan maken)</li>
</ul>

#### De validatiematrix

Dit document beschrijft validatieregels waaraan aanleveringen dienen te voldoen. Dit document is zelf geen standaard maar is een opsomming van regels die in de standaarden beschreven staan en waar tegen gevalideerd kan worden

#### Voorbeeldbestanden (Implementatiebestanden)

Dit zijn voorbeelden van correcte aanleveringen. Deze geven inzicht hoe IMOP en IMOW technisch toegepast moeten worden om een nieuw omgevingsdocument aan te leveren.

#### Waardelijsten

Dit document geeft aan welke waarden er gekozen kunnen worden bij aan de waardelijsten gekoppelde attributen van IMOW. Waardelijsten worden in de Stelselcatalogus gepubliceerd en maken dus geen onderdeel uit van de XML-schema’s<a name='_Ref40341289'></a><a name='Inleiding_leeswijzer'></a>. De stelselcatalogus is te vinden op: <a href='https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten' target='_blank'>https://stelselcatalogus.omgevingswet.overheid.nl/waardelijsten</a> 

### <a name='_Ref92176514'></a>Leeswijzer

Hoofdstuk <a href='#_Ref92176530'>2<a></a> beschrijft het informatiemodel en zijn onderdelen. Verder wordt het informatiemodel in de context geplaatst van de standaard voor officiële publicaties.

Hoofdstuk <a href='#_Ref92176541'>3<a></a> bespreekt de technische implementatie en geeft hierbij aan welke bestanden er verwacht worden en beschrijft de randvoorwaarden voor het aanleveren.

Hoofdstuk <a href='#_Ref90035910'>4<a></a> gaat gedetailleerd in op hoe de OW-bestanden er uit dienen te zien en geeft een XML-beschrijving van ieder bestand dat aangeleverd kan worden.

Hoofdstuk <a href='#_Ref92176561'>5<a></a> geeft weer waar het CIMOW en IMOW afwijken. Hoofdstuk <a href='#_Ref69207263'>6<a></a> bekijkt enkele aspecten uit STOP die relevant zijn voor de werking van OW en geeft richtlijnen over de wijze waarop OW zich verhoudt tot STOP. Hoofdstuk <a href='#_Ref69207272'>7<a></a> beschrijft het muteren van OW-objecten.

