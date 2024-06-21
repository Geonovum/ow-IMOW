let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Informatiemodel Omgevingswet (IMOW) 3.1",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie

  specType: "IM",                 // Informatie Model


  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  pubDomain: "ow",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  // (komt in de URL: kies logische afkorting)--------------
  shortName: "imow",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2024-04-19",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  publishVersion: "4.0.0-ic",
  previousVersion: "3.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2023-12-27",
  previousMaturity: "def",

  editors:
    [
      {
        name: "TPOD team",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "TPOD team",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/ow-IMOW",
  // Create PDF and link to file in header (optional):
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //        uri: "ow-imow.pdf",
  //    },
  //],
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    Basisgeometrie: {
      id: "Basisgeometrie",
      title: "Basisgeometrie",
      href: "https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20240607",
      status: "Definitief",
      publisher: "Geonovum",
      date: "7 juni 2024"
    },
    MIM: {
      id: "MIM",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    },
    CIMOP: {
      id: "CIMOP",
      title: "Conceptueel Informatiemodel Omgevingswet (CIMOW)",
      href: "https://geonovum.github.io/TPOD/CIMOW/CIMOW_v2.1.0.pdf",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2022-01-07"
    },
    CIMOW: {
      id: "CIMOW",
      title: "Conceptueel Informatiemodel Omgevingswet (CIMOW)",
      href: "https://geonovum.github.io/TPOD/CIMOW/CIMOW_v2.1.0.pdf",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2022-01-07"
    },
    LVBBBHKV: {
      id: "LVBBBHKV",
      title: "Documentatie LVBB Bronhouderkoppelvlak",
      href: "https://koop.gitlab.io/lvbb/bronhouderkoppelvlak/index.html",
      status: "Definitief",
      publisher: "KOOP"
    },
    IMOW: {
      id: "IMOW",
      title: "Informatiemodel Omgevingswet (IMOW)",
      href: "https://geonovum.github.io/TPOD/CIMOW/IMOW_v2.0.2.pdf",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2023-01-09"
    },
    NEN3610_2022: {
      id: "NEN3610-2022",
      title: "Basismodel geo-informatie",
      href: "https://www.nen.nl/nen-3610-2022-nl-296137",
      status: "Definitief",
      publisher: "NEN",
      date: "2020-06-20"
    },
    STOPIC: {
      id: "STOPIC",
      title: "Standaard Officiële Publicaties 1.4.0-ic",
      href: "https://koop.gitlab.io/STOP/standaard/1.4.0-ic/index.html",
      status: "Implementatie Kandidaat",
      publisher: "KOOP",
      date: "2024-04-12"
    },
  },
};
