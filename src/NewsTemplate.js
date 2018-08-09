import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './components/single/News'
import navigation from './components/navigation/navigation.json';

const data = {
  "page": true,
  "match": {
    "path": "/",
    "url": "/",
    "params": {},
    "isExact": false
  },
  "location": {
    "pathname": "/nl-BE/brouwerij/nieuws/tongerlo-nox-valt-in-zweden-in-de-prijzen",
    "search": "",
    "hash": "",
    "state": null,
    "key": "z7pqhh"
  },
  "history": {
    "length": 6,
    "action": "POP",
    "location": {
      "pathname": "/nl-BE/brouwerij/nieuws/tongerlo-nox-valt-in-zweden-in-de-prijzen",
      "search": "",
      "hash": "",
      "state": null,
      "key": "z7pqhh"
    }
  },
  "pageResources": {
    "json": {
      "data": {
        "nav": {
          "id": "c1DzxdxolMIwGMs2wMucG8W",
          "links": [
            {
              "__typename": "ContentfulNavigatie",
              "id": "c1r4ManayXCIs0wMui4aGwU",
              "title": "Brouwerij",
              "animationKey": "brewery",
              "slug": {
                "slug": "brouwerij"
              },
              "links": [
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c2CroH5YieIeKMmqqaaOQMi",
                  "title": "Geschiedenis",
                  "slug": {
                    "slug": "brouwerij/geschiedenis"
                  },
                  "image": {
                    "description": "Navigation - Geschiedenis",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/4MRw52l5eUgqu80YmOUg8I/8db69f91de31e62999fe5aaa4ecb7cdd/geschiedenis.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c1CM8amygAY44Sc4o6swOe2",
                  "title": "Brouwproces",
                  "slug": {
                    "slug": "brouwerij/brouwproces"
                  },
                  "image": {
                    "description": "Navigatie - Brouwproces",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/6ymONQWDu0qKUY2ue8gGcs/e7c40e32d3f8c59397ded6efaaae777f/brouwproces.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c5YiWDo9iFyiiUaqEMIMOQm",
                  "title": "Brouwerijbezoek",
                  "slug": {
                    "slug": "brouwerij/brouwerijbezoek"
                  },
                  "image": {
                    "description": "brouwerijbezoek menu afbeelding",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/4FvmcQr4cEgoQqoQCCyImC/1ce26d406a70b2ca104eeeb453cc7cbd/brouwerijbezoek-menu-img.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c2iGObCDvyUOCWoYqEsooA8",
                  "title": "Jobs",
                  "slug": {
                    "slug": "brouwerij/jobs/"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/4sRj1IUr3aAooW8UMIqkCG/bc96fabfae9bcd36ff7d43b99e5e52a4/jobs-slider-1.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c1ey5R9Ns4IS6KqAC4wSmAi",
                  "title": "Leven in de brouwerij",
                  "slug": {
                    "slug": "brouwerij/artikels/nieuws"
                  },
                  "image": {
                    "description": "Afbeelding voor nieuws navigatie",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/1DFIHHNbyAAeWm0smAAQQi/a50817ef10eff6393b0ceaad2023704a/nieuws.jpg"
                    }
                  }
                }
              ]
            },
            {
              "__typename": "ContentfulNavigatie",
              "id": "c5cCroMlEH6iYsQu248mW4U",
              "title": "Merken",
              "animationKey": "brands",
              "slug": {
                "slug": "merken"
              },
              "links": [
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c4YzYXjzCj6C8CQGMw4WMcc",
                  "title": "Bieren",
                  "slug": {
                    "slug": "merken/bieren"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/34RqNjStjyo8q6IcgASKK2/b3243241c447d61d2d5f953f1df5c03c/brand-beers.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c4yaOcgWc9OW4y6KCCQ2UU8",
                  "title": "Waters en frisdranken",
                  "slug": {
                    "slug": "merken/waters-frisdranken"
                  },
                  "image": {
                    "description": "Afbeelding voor navigatie softdrinks",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/1ZQXoXfXE8Uu0iYQiOMaIS/890a5bd0d3722e3eb1f77f999cff707c/brand-softdrinks.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c4YbYMpCwgw6Qk4y0WyA4uw",
                  "title": "Wijnen",
                  "slug": {
                    "slug": "merken/wijnen"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/40ECC2rBTWiGWcQ2UQCssC/ec92b05915cd54a4344a09d20fd5e325/brand-wines.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c3AHkPb7X0coGCaUMU2KuYy",
                  "title": "Koffies",
                  "slug": {
                    "slug": "merken/koffies"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/4pF6RyGliMw8qaykAWyA8G/e8184e8778acb0a78e7419e572efba75/brand-coffee_tiny.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c3YXkUMfmx264i4kIwuGgGq",
                  "title": "Verkooppunten",
                  "slug": {
                    "slug": "merken/verkooppunten"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/2AlEwaBPb2uOysCSWKogiq/6d4c340ea43eedcea8b79ed469573744/verkooppunten-brouwerij-haacht.jpg"
                    }
                  }
                }
              ]
            },
            {
              "__typename": "ContentfulNavigatie",
              "id": "T04LXz7J0OM0C08IykECI",
              "title": "Horeca",
              "animationKey": "horeca",
              "slug": {
                "slug": "horeca"
              },
              "links": [
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c65IKbF5y0gMiSAk4Y8yWwu",
                  "title": "Samenwerken",
                  "slug": {
                    "slug": "horeca/samenwerken"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/DYyzF4zSvuOGcweeSyI4s/180c4a45aa6528c8042a26f96baf3fcd/samenwerken-met-brouwerij-haacht.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c3JEkGWVTyocukYoQa8Yo0Q",
                  "title": "Opleidingen",
                  "slug": {
                    "slug": "horeca/horeca-training"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/DfohnIPaRUSswgUaICGa6/d3b2d42b514388e29c26ddc7e8971ccc/trainingen.jpg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "wQawjlEoZEWyYkUaIMmC2",
                  "title": "Horecapanden",
                  "slug": {
                    "slug": "horeca/panden"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/1e1mqgBFG8uKk8Q0ggeYII/d2a59b363460694455ff56e678e2ba7e/Westerlo-De-Merodedreef-72-Den-Draaiboom-A.jpeg"
                    }
                  }
                },
                {
                  "__typename": "ContentfulMenuLink",
                  "id": "c6CVnfpcUikY4C6EKk4UUkU",
                  "title": "Logo's & packshots",
                  "slug": {
                    "slug": "logo-packshots"
                  },
                  "image": {
                    "description": "",
                    "file": {
                      "url": "//images.ctfassets.net/vlb1ben6vtp9/5cCUJ6oIKcYEmKIU2Ais4I/cf3ed9aafc48facf16ec80c65a7eba05/logos-en-packshots.jpg"
                    }
                  }
                }
              ]
            },
            {
              "__typename": "ContentfulNavigatie",
              "id": "c6ZE6AGQVG0gCqAmuCyIGys",
              "title": "Jobs",
              "animationKey": "Jobs",
              "slug": {
                "slug": "brouwerij/jobs"
              },
              "links": null
            },
            {
              "__typename": "ContentfulNavigatie",
              "id": "c2pERr4K31eg4mAmqGMaM2m",
              "title": "Contact",
              "animationKey": null,
              "slug": {
                "slug": "contact"
              },
              "links": null
            }
          ]
        },
        "slug_en": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___en",
          "news": [
            {
              "slug": "brewery/articles/news"
            },
            {
              "slug": "brewery/articles/events"
            },
            {
              "slug": "brewery/articles/publications"
            },
            {
              "slug": "brewery/articles/press"
            },
            {
              "slug": "brewery/articles/awards"
            },
            {
              "slug": "brewery/articles/stories"
            }
          ]
        },
        "slug_nl": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___nl",
          "news": [
            {
              "slug": "brouwerij/artikels/nieuws"
            },
            {
              "slug": "brouwerij/artikels/evenementen"
            },
            {
              "slug": "brouwerij/artikels/publicaties"
            },
            {
              "slug": "brouwerij/artikels/pers"
            },
            {
              "slug": "brouwerij/artikels/awards"
            },
            {
              "slug": "brouwerij/artikels/verhalen"
            }
          ]
        },
        "slug_nl_be": {
          "id": "c3ZgBshM4WcSEQe6usAcm88",
          "news": [
            {
              "slug": "brouwerij/artikels/nieuws"
            },
            {
              "slug": "brouwerij/artikels/evenementen"
            },
            {
              "slug": "brouwerij/artikels/publicaties"
            },
            {
              "slug": "brouwerij/artikels/pers"
            },
            {
              "slug": "brouwerij/artikels/awards"
            },
            {
              "slug": "brouwerij/artikels/verhalen"
            }
          ]
        },
        "slug_fr": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___fr",
          "news": [
            {
              "slug": "brasserie/articles/actualite"
            },
            {
              "slug": "brasserie/articles/evenements"
            },
            {
              "slug": "brasserie/articles/publications"
            },
            {
              "slug": "brasserie/articles/presse"
            },
            {
              "slug": "brasserie/articles/recompenses"
            },
            {
              "slug": "brasserie/articles/anecdotes"
            }
          ]
        },
        "slug_fr_be": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___fr-BE",
          "news": [
            {
              "slug": "brasserie/articles/actualite"
            },
            {
              "slug": "brasserie/articles/evenements"
            },
            {
              "slug": "brasserie/articles/publications"
            },
            {
              "slug": "brasserie/articles/presse"
            },
            {
              "slug": "brasserie/articles/recompenses"
            },
            {
              "slug": "brasserie/articles/anecdotes"
            }
          ]
        },
        "content": {
          "headerNavigation": [
            "Nieuws",
            "Evenementen",
            "Publicaties",
            "Verhalen",
            "Pers",
            "Awards"
          ],
          "news": "Nieuws",
          "newsHighlight": "Uitgelicht",
          "evenementInDeKijker": "Evenement in de kijker",
          "buttonViewWebsite": "Bezoek website",
          "alleNieuws": "Alle nieuws",
          "meerNieuws": "Meer nieuws",
          "buttonLoadMore": "Laad meer",
          "headerImages": [
            {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3T2CtWhNBCIM0ekOCAWMQG/7ea6bfe9f6968e4f86f8900330307a01/nieuws.jpg"
              }
            },
            {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2y4WSOjaIUsMwuuQ0AoeqK/10e8f02dd200fb6fdce6b9450e8edd40/evenementen.jpg"
              }
            },
            {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4gKUAUUQs8YOY6iQc2wGiw/40293de6bd859860ffc1321212930c00/publicaties.jpg"
              }
            },
            {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3GmDRr8MAU4siAOoikoQkE/e7f2ecb05ffd6072e304345a542f3ff5/verhalen.jpg"
              }
            },
            {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4DeBenpjfyOGMmWUKc2kiy/8182743df219139f2e8670464c2d8f4d/pers.jpg"
              }
            },
            {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5rQJAWFMPYyY44ca0o0Osu/3325e980d85ce6948bbfec47b2bb7530/awards.jpg"
              }
            }
          ],
          "pressCategorySorting": [
            {
              "title": "Persbericht"
            },
            {
              "title": "Persartikel"
            }
          ],
          "publishedOn": "Gepubliceerd op",
          "inThePress": "In de pers",
          "evenementenAfgelopen": "Afgelopen evenementen",
          "evementenCategory": [
            "Aankomende",
            "Afgelopen"
          ],
          "chooseACategory": "Kies een categorie",
          "newsLink": {
            "slug": "brouwerij/artikels/nieuws"
          }
        },
        "news": {
          "edges": [
            {
              "node": {
                "id": "c4tGcIu115Sc6sMw4GkgqKq",
                "slug": "tongerlo-nox-valt-in-zweden-in-de-prijzen",
                "title": "Tongerlo NOX valt in Zweden in de prijzen",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/8a8453f4a358fb3667e87fedd2e703f8/NB-april-Tongerlo_NOX_award_Zweden.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Op de voorbije editie van de Beer & Whisky Fair in het Zweedse Göteborg heeft een professionele jury onze Tongerlo NOX bekroond met een gouden medaille in de categorie 'Ale 5,1 - 7%'. Het is voor het bruine abdijbier de tweede prestigieuze bekroning, na een zilveren medaille op de Asia Beer Awards in 2013. Liefhebbers appreciëren de Tongerlo NOX in het bijzonder om zijn heerlijke fluweeltoets van vanille en zijn delicate bitterheid van fondantchocolade."
                },
                "datePublished": "2018-05-08T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Op de voorbije editie van de [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) in het Zweedse Göteborg heeft een professionele jury onze [Tongerlo NOX](https://haacht.com/nl-BE/merken/bieren/tongerlo-nox) bekroond met een gouden medaille in de categorie 'Ale 5,1 - 7%'. Het is voor het bruine abdijbier de tweede prestigieuze bekroning, na een zilveren medaille op de Asia Beer Awards in 2013. Liefhebbers appreciëren de Tongerlo NOX in het bijzonder om zijn heerlijke fluweeltoets van vanille en zijn delicate bitterheid van fondantchocolade.\n\n### BEER & WHISKY FAIR\n\nDe Beer & Whisky Fair is met 24.000 bezoekers over twee dagen de grootste bierbeurs in Zweden en was dit jaar aan haar vijfde editie toe. Een 18-koppige professionele jury proefde blind meer dan 400 bieren uit alle uithoeken van de wereld. De deelnemende bieren worden onderverdeeld in elf verschillende categorieën, gebaseerd op origine, type en stijl, en vervolgens gewikt en gewogen.\n\n### HELE TONGERLO-GAMMA GEROEMD\n\nNiet enkel de Tongerlo NOX wordt internationaal erkend als een kwaliteitsbier met eigenheid. Zo werd de blonde variant, de Tongerlo LUX, tijdens de World Beer Awards in 2014 als enige Belgische bier ooit uitgeroepen tot beste bier ter wereld over alle categorieën heen. Drie jaar eerder kaapte het tripelbier Tongerlo PRIOR er al de prijs voor beste blonde abdijbier/trappistenbier weg.\n\nBoudewijn van der Kelen van Brouwerij Haacht is trots op de erkenning voor Tongerlo NOX: “Tongerlo is een gevestigde waarde in binnen- en buitenland. Dat ons authentiek, Belgisch abdijbier hoge ogen blijft gooien tijdens internationale, prestigieuze bierevents, is een beloning voor het vakmanschap van onze brouwmeester en voor al onze medewerkers die zich dagelijks inzetten om iedereen van ons brouwplezier te laten genieten.”\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c2D3XxTztaAS6Yuw8umaUcM",
                "slug": "brouwerij-haacht-zet-in-met-pilsbier-Primus-op-festivals-en-events",
                "title": "Brouwerij Haacht zet met haar pilsbier Primus stevig in op festivals en events",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/9c47669413607f6eb504d06ee4acf09b/NB-mei-Primus-op-events-Lennen-Descamps057.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis, trapte de festivalperiode half mei af op Fire Is Gold, het allereerste echte hiphopfestival van België. Daarmee is de toon meteen goed gezet voor de komende festivalzomer."
                },
                "datePublished": "2017-05-30T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis, trapte de festivalperiode half mei af op Fire Is Gold, het allereerste echte hiphopfestival van België. Daarmee is de toon meteen goed gezet, want Brouwerij Haacht is met haar pilsbier Primus deze zomer ook nog aanwezig op acht andere festivals of events, waaronder Paradise City, WECANDANCE, Gentse Feesten, W-Festival en Kamping Kitsch. Voor de festivalperiode van 2018 en 2019 komen daar ook nog Laundry Day en Elrow bij.\n\nPrimus is al sinds jaar en dag in de horeca te vinden, en in de retail is het merk zijn huidige aanwezigheid aan het versterken. En de komende maanden trekt Brouwerij Haacht nóg meer dan vroeger naar locaties waar de grote massa gezellig samenkomt om te genieten. Op die festivals kunnen bezoekers de hele merkbeleving van Primus proeven, voelen en op-en-top beleven aan de Primus-stand. Die standen zijn een verlengstuk van het kwalitatieve en eigenzinnige karakter waar Brouwerij Haacht met Primus voor staat.\n \nPrimus is en blijft hét pilsbier bij uitstek voor degenen die eigen keuzes maken in het leven. Ze varen hun eigen koers, ongeacht trends en hypes. Het is een bier voor durvers die doen wat hen het beste lijkt, ook al is dat niet de gangbare norm. Dat komt perfect tot uiting op de festivals en events die Brouwerij Haacht heeft uitgekozen om met Primus te sponsoren.\n\n\n### Op deze festivals of events geniet je deze zomer van fris getapte Primus\n\n- Paradise City – 23 t.e.m. 25 juni 2017\n- Gentse Feesten – 14 t.e.m. 23 juli 2017\n- Cirque Magique – 4 t.e.m. 6 augustus 2017\n- Nostalgie Beach Festival – 12 augustus 2017\n- WECANDANCE – 12 en 13 augustus 2017\n- W-Festival – 18 t.e.m. 20 augustus 2017\n- Kamping Kitsch – 26 augustus 2017\n- Antwerp City Drops – 23 en 24 september 2017"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c1QV4vKZVR2AuiieyCuasMQ",
                "slug": "dummy",
                "title": "dummy",
                "titleImage": null,
                "shortDescription": {
                  "shortDescription": "Dummy News"
                },
                "datePublished": null,
                "fullDescription": null
              }
            },
            {
              "node": {
                "id": "c5CKGCrcMLYyU6My40k2qMS",
                "slug": "super-8-blanche-het-beste-belgische-witbier",
                "title": "SUPER 8 Blanche is het beste Belgische witbier",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/ae606bcbf11c3b0cd5a00d063f33b9ee/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Op vrijdag 11 augustus is SUPER 8 Blanche, de jongste telg in het SUPER 8-gamma van Brouwerij Haacht, op de World Beer Awards uitgeroepen tot beste ‘Belgian Style Witbier’ van België.  Op wereldniveau moest het bier nipt de duimen leggen tegen het Braziliaanse Búzios Brigitte.\n"
                },
                "datePublished": "2017-08-18T00:00+01:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Op vrijdag 11 augustus is SUPER 8 Blanche, de jongste telg in het SUPER 8-gamma van Brouwerij Haacht, op de World Beer Awards uitgeroepen tot beste ‘Belgian Style Witbier’ van België.  Op wereldniveau moest het bier nipt de duimen leggen tegen het Braziliaanse Búzios Brigitte.\n\nSUPER 8 Blanche werd afgelopen mei gelanceerd en is het derde bier in het SUPER 8-gamma van Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis. Het pittige witbier is stevig gekruid met versgemalen koriander en een ferme portie appelsienschil, wat zorgt voor een prikkelende interpretatie van een vertrouwde smaak.\n \n“We zijn ontzettend trots dat onze SUPER 8 Blanche zo kort na zijn lancering wordt gesmaakt bij zowel het grote publiek als echte kenners”, zegt Boudewijn van der Kelen, Marketing Directeur van Brouwerij Haacht. “De erkenning op de World Beer Awards is een grote stimulans voor onze onafhankelijke brouwerij. Onder impuls van innovatie blijven we steeds nieuwe bieren lanceren.”\n \nNeem voor meer informatie een kijkje op [www.super8.be](http://www.super8.be) en [www.worldbeerawards.com](http://www.worldbeerawards.com/)."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c5s0L0r9gc0k4ccIg6oeI6e",
                "slug": "brouwerij-haacht-wint-met-primus-super-8-op-brussels-beer-challenge",
                "title": "Brouwerij Haacht wint met Primus en SUPER 8 IPA op Brussels Beer Challenge",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/b6656a1a403d23262a935cf34316aaf4/NB-november-Super-8_IPA_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Brouwerij Haacht is tijdens de zesde editie van de prestigieuze Brussels Beer Challenge op Horeca Expo dubbel in de prijzen gevallen. SUPER 8 IPA werd uitgeroepen tot beste ‘Pale & Amber Ale: English IPA’, terwijl het pilsbier Primus zilver won in de categorie ‘Lager: Helles’."
                },
                "datePublished": "2017-11-21T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Brouwerij Haacht is tijdens de zesde editie van de prestigieuze Brussels Beer Challenge op Horeca Expo dubbel in de prijzen gevallen. SUPER 8 IPA werd uitgeroepen tot beste ‘Pale & Amber Ale: English IPA’, terwijl het pilsbier Primus zilver won in de categorie ‘Lager: Helles’.\n\nBoudewijn van der Kelen, marketingdirecteur bij Brouwerij Haacht reageert trots: *“We lanceerden onze eerste twee SUPER 8-bieren in november 2016. Een jaar later telt dit nieuwe gamma  vier bieren en heeft het twee mooie awards in de kast staan. Op de World Beer Awards werd onze SUPER 8 Blanche al uitgeroepen tot beste Belgische witbier, en nu valt ook onze SUPER 8 IPA in de prijzen tijdens de Brussels Beer Challenge.”*\nMet SUPER 8 trekt Brouwerij Haacht de kaart van innovatie. *“We zijn verheugd dat ons SUPER 8-gamma, dat staat voor lekker onverwachte bieren, echt aanslaat. Niet alleen bij de bierkenners, maar ook bij het grote publiek. Deze twee awards bewijzen dat de keuze voor innovatie ook voor een authentieke brouwerij als Brouwerij Haacht de enige juiste is”*, zegt Boudewijn van der Kelen.\nOok de erkenning voor paradepaardje Primus doet Brouwerij Haacht plezier. “Primus is al sinds jaar en dag een gevestigde waarde in het Belgische bierlandschap. Dat we naast onze SUPER 8-bieren ook met onze klassieke pils hoge ogen blijven gooien, is een beloning voor al onze medewerkers die zich dagelijks inzetten om iedereen van ons authentieke brouwplezier te laten genieten”, besluit Boudewijn van der Kelen.\n\n\n### Brussels Beer Challenge\n\nDrie dagen lang proefde een panel van 85 internationaal gereputeerde bierkenners 1.400 bieren uit 37 landen. De deelnemende bieren worden onderverdeeld in categorieën, gebaseerd op origine, type en stijl, en vervolgens gewikt en gewogen. Op het einde van de drie degustatiedagen werden de beste bieren in elke categorie beloond met een gouden, zilveren of bronzen award tijdens Horeca Expo in Gent.\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c4tGcIu115Sc6sMw4GkgqKq___fr-BE",
                "slug": "tongerlo-nox-recompensee-en-suede",
                "title": "Tongerlo NOX récompensée en Suède",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/753601e302d26595342001e641ddb573/NB-april-Tongerlo_NOX_award_Zweden.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Lors de la dernière édition de la Beer & Whisky Fair à Göteborg en Suède, un jury professionnel a décerné la médaille d’or dans la catégorie « Ale 5,1 - 7% » à notre Tongerlo NOX. La bière d’abbaye brune remporte ainsi sa deuxième récompense prestigieuse, après avoir reçu la médaille d’argent aux Asia Beer Awards en 2013. Les amateurs apprécient la Tongerlo NOX pour sa délicieuse touche veloutée de vanille et son amertume délicat de chocolat noir."
                },
                "datePublished": "2018-05-08T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Lors de la dernière édition de la [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) à Göteborg en Suède, un jury professionnel a décerné la médaille d’or dans la catégorie « Ale 5,1 - 7% » à notre [Tongerlo NOX](https://haacht.com/fr-be/marques/bieres/tongerlo-nox). La bière d’abbaye brune remporte ainsi sa deuxième récompense prestigieuse, après avoir reçu la médaille d’argent aux Asia Beer Awards en 2013. Les amateurs apprécient la Tongerlo NOX pour sa délicieuse touche veloutée de vanille et son amertume délicat de chocolat noir.\n\n### BEER & WHISKY FAIR\n\nAccueillant quelque 24 000 visiteurs en deux jours, la Beer & Whisky Fair – dont la cinquième édition était organisée cette année – est le plus grand salon de la bière de Suède. Un jury de 18 professionnels a dégusté à l’aveugle plus de 400 bières des quatre coins du monde. Les bières participantes, réparties en onze catégories, selon leur origine, leur type et leur style, ont été jugées avec soin.\n\n### TOUTE LA GAMME TONGERLO ENCENSÉE\n\nLa Tongerlo NOX n’est pas la seule à être reconnue sur la scène internationale comme bière de qualité. En effet, la version blonde, la Tongerlo LUX, est la seule bière belge à avoir été élue meilleure bière au monde, toutes catégories confondues, lors des World Beer Awards de 2014. Trois ans plus tôt, la bière triple Tongerlo PRIOR avait décroché le prix de la meilleure bière d’abbaye/bière trappiste blonde.\n\nBaudouin van der Kelen de la Brasserie Haacht est fier de la reconnaissance dont jouit Tongerlo NOX : « Tongerlo est une valeur sûre en Belgique comme à l’étranger. Le fait que notre bière d’abbaye belge authentique continue d’enregistrer de bons résultats lors de prestigieux événements internationaux récompense le savoir-faire de notre maître brasseur et de tous nos collaborateurs, qui œuvrent chaque jour pour transmettre à tous notre plaisir de brassage. »\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c2D3XxTztaAS6Yuw8umaUcM___fr-BE",
                "slug": "brasserie-haacht-s-invite-dans-des-festivals-avec-primus",
                "title": "La Brasserie Haacht s’invite dans des festivals et des événements avec sa pils Primus",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/be98605360b4a03d4d55912aa5f3c12c/NB-mei-Primus-op-events-Lennen-Descamps057.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "La Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire, a débuté la saison des festivals à la mi-mai avec Fire Is Gold, le tout premier vrai festival de hip-hop de Belgique. Le ton est ainsi immédiatement donné, car la Brasserie Haacht va participer à huit autres festivals ou événements cet été."
                },
                "datePublished": "2017-05-30T00:00+01:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "La Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire, a débuté la saison des festivals à la mi-mai avec Fire Is Gold, le tout premier vrai festival de hip-hop de Belgique. Le ton est ainsi immédiatement donné, car la Brasserie Haacht va participer à huit autres festivals ou événements cet été avec sa pils Primus, dont Paradise City, WECANDANCE, Gentse Feesten, W-Festival et Kamping Kitsch. Laundry Day et Elrow vont s’ajouter dès 2018 et ce jusqu’en 2019.\n\nLa Primus est bien connue dans l’Horeca depuis des années, et la marque est en train de renforcer sa présence chez les détaillants. Dans les prochains mois, la Brasserie Haacht va partir à la conquête des lieux où des foules se réunissent pour passer un bon moment. Les visiteurs de ces festivals pourront déguster, apprécier et découvrir l’expérience Primus au stand de la marque. Celui-ci illustre le caractère unique et qualitatif que défend la Brasserie Haacht avec la Primus.\n\nLa Primus est et reste la pils par excellence pour ceux qui vivent comme ça leur chante. Ils suivent leur propre chemin sans tenir compte des tendances ni des modes. C’est une bière destinée aux audacieux qui font ce qu’ils aiment, même si ce n’est pas dans la norme. C’est ce que reflètent parfaitement les festivals et les événements que la Brasserie Haacht a choisi de sponsoriser avec Primus.\n\n\n### Vous pourrez déguster une Primus fraîche aux festivals ou événements suivants\n\n- Paradise City – du 23 au 25 juin 2017 inclus\n- Gentse Feesten – du 14 au 23 juillet 2017 inclus\n- Cirque Magique – du 4 au 6 août 2017 inclus\n- Nostalgie Beach Festival – 12 août 2017\n- WECANDANCE – 12 et 13 août 2017\n- W-Festival – du 18 au 20 août 2017 inclus\n- Kamping Kitsch – 26 août 2017\n- Antwerp City Drops – 23 et 24 septembre 2017\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c1QV4vKZVR2AuiieyCuasMQ___fr-BE",
                "slug": "dummy",
                "title": null,
                "titleImage": null,
                "shortDescription": {
                  "shortDescription": " "
                },
                "datePublished": null,
                "fullDescription": null
              }
            },
            {
              "node": {
                "id": "c5CKGCrcMLYyU6My40k2qMS___fr-BE",
                "slug": "la-super-8-blanche-est-la-meilleure-biere-blanche-belge",
                "title": "La SUPER 8 Blanche est la meilleure bière blanche belge",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/d2941fed57ca5236a9e75cbae2f79228/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Ce vendredi 11 août, la SUPER 8 Blanche, la toute nouvelle bière de la gamme SUPER 8 de la Brasserie Haacht, a été élue meilleure ‘Belgian Style Witbier’ de Belgique aux World Beer Awards. À l’échelle mondiale, cette bière a échappé de peu à la première place au profit de la bière brésilienne Búzios Brigitte."
                },
                "datePublished": "2017-08-18T00:00+01:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Ce vendredi 11 août, la SUPER 8 Blanche, la toute nouvelle bière de la gamme SUPER 8 de la Brasserie Haacht, a été élue meilleure ‘Belgian Style Witbier’ de Belgique aux World Beer Awards. À l’échelle mondiale, cette bière a échappé de peu à la première place au profit de la bière brésilienne Búzios Brigitte.\n\nLancée en mai, la SUPER 8 Blanche est la troisième bière de la gamme SUPER 8 de la Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire. Cette bière blanche épicée est relevée avec de la coriandre fraîchement moulue et un beau zeste d’orange, et réinvente ainsi de façon surprenante un goût familier.\n\n« Nous sommes très fiers que notre SUPER 8 Blanche soit appréciée du grand public comme des experts aussi peu de temps après son lancement », déclare Boudewijn van der Kelen, Directeur du marketing de la Brasserie Haacht. « Le prix que nous avons reçu aux World Beer Awards est un bel encouragement pour notre brasserie indépendante. Nous ne comptons pas nous arrêter en si bon chemin et allons continuer à lancer de nouvelles bières. »\n\nPour avoir plus d’informations, rendez-vous sur [www.super8.be](http://www.super8.be) ou [www.worldbeerawards.com](http://www.worldbeerawards.com/)."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c5s0L0r9gc0k4ccIg6oeI6e___fr-BE",
                "slug": "la-primus-et-la-super-8-recompensees-au-brussels-beer-challenge",
                "title": "La Primus et la SUPER 8 IPA de la Brasserie Haacht récompensées au Brussels Beer Challenge",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/cee6d699abbe7d6bf1680842794624f6/NB-november-Super-8_IPA_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "La Brasserie Haacht a été doublement médaillée lors de la sixième édition du prestigieux Brussels Beer Challenge à Horeca Expo. La SUPER 8 IPA a ainsi été élue meilleure « Pale & Amber Ale: English IPA », tandis que la pils Primus a remporté l’argent dans la catégorie « Lager: Helles »"
                },
                "datePublished": "2017-11-21T00:00+01:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "La Brasserie Haacht a été doublement médaillée lors de la sixième édition du prestigieux Brussels Beer Challenge à Horeca Expo. La SUPER 8 IPA a ainsi été élue meilleure « Pale & Amber Ale: English IPA », tandis que la pils Primus a remporté l’argent dans la catégorie « Lager: Helles ».\n\nBaudouin van der Kelen, directeur marketing de la Brasserie Haacht, ne cache pas sa fierté : « Nous avons lancé nos deux premières bières SUPER 8 en novembre 2016. Un an plus tard, notre nouvelle gamme compte déjà quatre bières et a décroché deux très beaux prix. Aux World Beer Awards, notre SUPER 8 Blanche a été élue meilleure bière blanche belge, et maintenant, c’est notre SUPER 8 IPA qui se distingue au Brussels Beer Challenge. »\nAvec la gamme SUPER 8, la Brasserie Haacht joue la carte de l’innovation. « Nous nous réjouissons que notre gamme SUPER 8, qui présente de délicieuses bières sortant de l’ordinaire, soit si bien accueillie, et ce non seulement par les vrais amateurs de bière, mais aussi par le grand public. Ces deux prix prouvent que le choix de l’innovation est le seul qui s’impose, même pour une brasserie authentique comme la Brasserie Haacht », ajoute Baudouin van der Kelen.\n\nLa reconnaissance de la Primus, l’emblème de la brasserie, fait tout autant plaisir à la Brasserie Haacht. « La Primus est depuis toujours une valeur sûre du paysage brassicole belge. Le fait qu’outre nos bières SUPER 8, nous nous positionnions si bien avec notre pils classique est une véritable récompense pour nos collaborateurs qui s’investissent chaque jour pour faire profiter tout le monde de notre authentique plaisir de brasser des produits de qualité », conclut Baudouin van der Kelen.\n\n### Brussels Beer Challenge\n\nDurant trois jours, un panel de 85 connaisseurs internationalement reconnus a goûté 1.400 bières provenant de 37 pays. Les bières participantes sont réparties en catégories à base de leur origine, de leur type et de leur style pour être ensuite soumises à l’évaluation des juges. Au bout des trois jours de dégustation, les meilleures bières de chaque catégorie se sont vu décerner une médaille d’or, d’argent ou de bronze à Horeca Expo à Gand."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c4tGcIu115Sc6sMw4GkgqKq___en",
                "slug": "tongerlo-nox-wins-award-in-sweden",
                "title": "Tongerlo NOX wins award in Sweden",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/61bf32287ea0ddf4d8bef0c7b704c5cc/NB-april-Tongerlo_NOX_award_Zweden.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "The professional jury of the Beer & Whisky Fair in the Swedish city of Gothenburg has awarded our Tongerlo NOX with a gold medal in the category ‘Ale 5.1 – 7%’. It’s the brown abbey beer’s second prestigious award, after winning a silver medal at the Asia Beer Awards in 2013. Fans particularly appreciate the Tongerlo NOX because of its delicious velvety touch of vanilla and its delicate dark chocolate bitterness. "
                },
                "datePublished": "2018-05-08T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "The professional jury of the [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) in the Swedish city of Gothenburg has awarded our [Tongerlo NOX](https://haacht.com/en/brands/beers/tongerlo-nox/) with a gold medal in the category ‘Ale 5.1 – 7%’. It’s the brown abbey beer’s second prestigious award, after winning a silver medal at the Asia Beer Awards in 2013. Fans particularly appreciate the Tongerlo NOX because of its delicious velvety touch of vanilla and its delicate dark chocolate bitterness. \n\n### BEER & WHISKY FAIR\n\nThe Beer & Whisky Fair is Sweden’s largest beer fair, attracting 24,000 visitors over the course of two days. This year, the fair was organized for the fifth time in a row. A jury of 18 professionals did a blind tasting of more than 400 beers from all over the world. The participating beers are subdivided into eleven different categories, based on origin, type and style, after which they are carefully tasted and judged.\n\n### ENTIRE TONGERLO ASSORTMENT PRAISED\n\nIt’s not just the Tongerlo NOX that is internationally recognized as a unique quality beer. At the World Beer Awards in 2014, its blonde variety, the Tongerlo LUX, was the first and only Belgian beer ever to be named the best beer in the world across all categories. Three years earlier, at the World Beer Awards 2011, the triple Tongerlo PRIOR took home the award for best blonde abbey beer/trappist beer.\n\nBoudewijn van der Kelen, marketing director at Haacht Brewery, is proud of the recognition for Tongerlo NOX: “Tongerlo is an established brand in Belgium as well as abroad. The fact that our authentic Belgian abbey beer keeps scoring so well at prestigious international beer events, is a great reward for our master brewer’s craftmanship and for all the employees who commit themselves every day to make sure everyone can enjoy our work.” \n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c2D3XxTztaAS6Yuw8umaUcM___en",
                "slug": "haacht-brewery-targets-festivals-and-events-with-Primus",
                "title": "Haacht Brewery targets festivals and events with its Primus premium Pilsner beer",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/a317f69b2ae5109e9154d7210ccd2270/NB-mei-Primus-op-events-Lennen-Descamps057__1_.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Haacht Brewery, a Belgian family brewery with a rich history, kicked off the festival season in mid-May at Fire is Gold, Belgium’s first ever real hip-hop festival. But that’s not all, as Haacht Brewery is sponsoring eight other festivals or events this summer."
                },
                "datePublished": "2017-05-30T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Haacht Brewery, a Belgian family brewery with a rich history, kicked off the festival season in mid-May at Fire is Gold, Belgium’s first ever real hip-hop festival. But that’s not all, as Haacht Brewery is sponsoring eight other festivals or events this summer with its Primus premium Pilsner beer, including Paradise City, WECANDANCE, the Ghent Festivities, W-Festival and Kamping Kitsch. During the 2018 and 2019 festival season, this impressive line-up will be extended with Laundry Day and Elrow.\n\nFor many years, Primus has been served in bars and restaurants and the brand is currently also strengthening its presence in retail. Over the coming months, Haacht Brewery will be heading out to even more venues where large crowds like to gather and have fun, so everyone can taste and enjoy every aspect of the Primus brand experience. The stands are designed to reflect Primus’s brand values of quality and uniqueness.\n\nPrimus is and always will be the Pilsner beer for consumers who believe in making their own choices instead of following trends and hypes. This beer is for the bold at heart, who like to chart their own course, even though it may be different from everyone else’s. And the festivals and events that Haacht Brewery has chosen to sponsor with Primus echo this sentiment.\n\n### Enjoy a freshly-tapped Primus this summer at the following festivals and events \n\n- Paradise City – June 23th to 25th 2017\n- Gentse Feesten – July 14th to 23th 2017\n- Cirque Magique – August 4th to 6th 2017\n- Nostalgie Beach Festival – August 12th 2017\n- WECANDANCE – August 12th and 13th 2017\n- W-Festival – August 18th to 20th 2017\n- Kamping Kitsch – August 26th 2017\n- Antwerp City Drops – September 23th and 24th 2017\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c1QV4vKZVR2AuiieyCuasMQ___en",
                "slug": "dummy",
                "title": null,
                "titleImage": null,
                "shortDescription": {
                  "shortDescription": " "
                },
                "datePublished": null,
                "fullDescription": null
              }
            },
            {
              "node": {
                "id": "c5CKGCrcMLYyU6My40k2qMS___en",
                "slug": "super-8-blanche-is-the-best-belgian-white-beer",
                "title": "SUPER 8 Blanche is the best Belgian white beer",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/035be366331e653f667336ce96e6fa80/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "On Friday 11 August, SUPER 8 Blanche, the newest member of Haacht Brewery’s SUPER 8 family, was named ‘Best Belgian style Witbier’ at the World Beer Awards, narrowly losing out on the world title against a Brazilian beer, Búzios Brigitte."
                },
                "datePublished": "2017-08-18T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "On Friday 11 August, SUPER 8 Blanche, the newest member of Haacht Brewery’s SUPER 8 family, was named ‘Best Belgian style Witbier’ at the World Beer Awards, narrowly losing out on the world title against a Brazilian beer, Búzios Brigitte.\n\nSUPER 8 Blanche was launched this past May, as the third beer in the SUPER 8 range from Haacht Brewery, a Belgian family brewery with a rich history. This spicy ‘witbier’ (white beer) or ‘bière blanche’ delivers a delicious kick of freshly-ground coriander and plenty of orange peel, adding a novel twist to a familiar flavour.\n\n“We are very proud that our SUPER 8 Blanche is such a success, so soon after its launch, with both the public and beer connoisseurs”, says Boudewijn van der Kelen, Marketing Director at Haacht Brewery. “The recognition at the World Beer Awards was a huge confidence booster for our independent brewery, inspiring us to continue to develop new beers spurred on by our desire for innovation.”\n\nCheck [www.super8.be](http://www.super8.be) or [www.worldbeerawards.com](http://www.worldbeerawards.com/) for further information.\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c5s0L0r9gc0k4ccIg6oeI6e___en",
                "slug": "primus-and-super-8-awarded-at-the-brussels-beer-challenge",
                "title": "Haacht Brewery receives awards for its Primus and SUPER 8 IPA at the Brussels Beer Challenge",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/1172c489121610f55c98f83a2f86df7b/NB-november-Super-8_IPA_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Haacht Brewery took home two medals during the sixth edition of the prestigious Brussels Beer Challenge at Horeca Expo. SUPER 8 IPA was named ‘Pale & Amber Ale: English IPA’, while its Primus premium Pilsner beer won the silver medal in the ‘Lager: Helles’ category."
                },
                "datePublished": "2017-11-21T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Haacht Brewery took home two medals during the sixth edition of the prestigious Brussels Beer Challenge at Horeca Expo. SUPER 8 IPA was named ‘Pale & Amber Ale: English IPA’, while its Primus premium Pilsner beer won the silver medal in the ‘Lager: Helles’ category.\n\nBoudewijn van der Kelen, Marketing Director at Haacht Brewery, is very proud: “We launched our first two SUPER 8 beers in November 2016. Just one year later, this new range has expanded to four beers and has already bagged two great awards. Our SUPER 8 Blanche was already named Best Belgian-style Witbier at the World Beer Awards and now our SUPER 8 IPA has won an award during the Brussels Beer Challenge.” Haacht Brewery has gone down the path of innovation with its SUPER 8 range. “We are happy that our SUPER 8 range of deliciously unexpected beers is such a success, both with beer connoisseurs and the public. These two awards prove that innovation is the only right strategy for an authentic brewery such as Haacht Brewery”, says Boudewijn van der Kelen.\n\nHaacht Brewery is also very happy with the recognition for its flagship brand Primus. “Primus has been a popular brand on the Belgian beer landscape for many years. The fact that our classic Pilsner beer continues to score well, in addition to our SUPER 8 beers, is really a reward for all our employees, who work tirelessly every day, so everyone can enjoy our authentic brewing experience”, Boudewijn van der Kelen concludes.\n\n### Brussels Beer Challenge\n\nA panel of 85 internationally-renowned beer connoisseurs spend three days tasting 1,400 beers from 37 countries. The participating beers are subdivided into categories, based on origin, type and style, after which they are judged. After a three-day challenge, the best beers in each category were awarded a gold, silver or bronze medal during Horeca Expo in Ghent.\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c4tGcIu115Sc6sMw4GkgqKq___fr",
                "slug": "tongerlo-nox-recompensee-en-suede",
                "title": "Tongerlo NOX récompensée en Suède",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/affb33adee235b2d8f65da5330f15d00/NB-april-Tongerlo_NOX_award_Zweden.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Lors de la dernière édition de la Beer & Whisky Fair à Göteborg en Suède, un jury professionnel a décerné la médaille d’or dans la catégorie « Ale 5,1 - 7% » à notre Tongerlo NOX. La bière d’abbaye brune remporte ainsi sa deuxième récompense prestigieuse, après avoir reçu la médaille d’argent aux Asia Beer Awards en 2013. Les amateurs apprécient la Tongerlo NOX pour sa délicieuse touche veloutée de vanille et son amertume délicat de chocolat noir."
                },
                "datePublished": "2018-05-08T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Lors de la dernière édition de la [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) à Göteborg en Suède, un jury professionnel a décerné la médaille d’or dans la catégorie « Ale 5,1 - 7% » à notre [Tongerlo NOX](https://haacht.com/fr/marques/bieres/tongerlo-nox). La bière d’abbaye brune remporte ainsi sa deuxième récompense prestigieuse, après avoir reçu la médaille d’argent aux Asia Beer Awards en 2013. Les amateurs apprécient la Tongerlo NOX pour sa délicieuse touche veloutée de vanille et son amertume délicat de chocolat noir.\n\n### BEER & WHISKY FAIR\n\nAccueillant quelque 24 000 visiteurs en deux jours, la Beer & Whisky Fair – dont la cinquième édition était organisée cette année – est le plus grand salon de la bière de Suède. Un jury de 18 professionnels a dégusté à l’aveugle plus de 400 bières des quatre coins du monde. Les bières participantes, réparties en onze catégories, selon leur origine, leur type et leur style, ont été jugées avec soin.\n\n### TOUTE LA GAMME TONGERLO ENCENSÉE\n\nLa Tongerlo NOX n’est pas la seule à être reconnue sur la scène internationale comme bière de qualité. En effet, la version blonde, la Tongerlo LUX, est la seule bière belge à avoir été élue meilleure bière au monde, toutes catégories confondues, lors des World Beer Awards de 2014. Trois ans plus tôt, la bière triple Tongerlo PRIOR avait décroché le prix de la meilleure bière d’abbaye/bière trappiste blonde.\n\nBaudouin van der Kelen de la Brasserie Haacht est fier de la reconnaissance dont jouit Tongerlo NOX : « Tongerlo est une valeur sûre en Belgique comme à l’étranger. Le fait que notre bière d’abbaye belge authentique continue d’enregistrer de bons résultats lors de prestigieux événements internationaux récompense le savoir-faire de notre maître brasseur et de tous nos collaborateurs, qui œuvrent chaque jour pour transmettre à tous notre plaisir de brassage. »\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c2D3XxTztaAS6Yuw8umaUcM___fr",
                "slug": "brasserie-haacht-s-invite-dans-des-festivals-avec-primus",
                "title": "La Brasserie Haacht s’invite dans des festivals et des événements avec sa pils Primus",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/93fff768e959e8d5e3dbccfafc03b07f/NB-mei-Primus-op-events-Lennen-Descamps057__1_.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "La Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire, a débuté la saison des festivals à la mi-mai avec Fire Is Gold, le tout premier vrai festival de hip-hop de Belgique. Le ton est ainsi immédiatement donné, car la Brasserie Haacht va participer à huit autres festivals ou événements cet été."
                },
                "datePublished": "2017-05-30T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "La Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire, a débuté la saison des festivals à la mi-mai avec Fire Is Gold, le tout premier vrai festival de hip-hop de Belgique. Le ton est ainsi immédiatement donné, car la Brasserie Haacht va participer à huit autres festivals ou événements cet été avec sa pils Primus, dont Paradise City, WECANDANCE, Gentse Feesten, W-Festival et Kamping Kitsch. Laundry Day et Elrow vont s’ajouter dès 2018 et ce jusqu’en 2019.\n\nLa Primus est bien connue dans l’Horeca depuis des années, et la marque est en train de renforcer sa présence chez les détaillants. Dans les prochains mois, la Brasserie Haacht va partir à la conquête des lieux où des foules se réunissent pour passer un bon moment. Les visiteurs de ces festivals pourront déguster, apprécier et découvrir l’expérience Primus au stand de la marque. Celui-ci illustre le caractère unique et qualitatif que défend la Brasserie Haacht avec la Primus.\n\nLa Primus est et reste la pils par excellence pour ceux qui vivent comme ça leur chante. Ils suivent leur propre chemin sans tenir compte des tendances ni des modes. C’est une bière destinée aux audacieux qui font ce qu’ils aiment, même si ce n’est pas dans la norme. C’est ce que reflètent parfaitement les festivals et les événements que la Brasserie Haacht a choisi de sponsoriser avec Primus.\n\n\n### Vous pourrez déguster une Primus fraîche aux festivals ou événements suivants\n\n- Paradise City – du 23 au 25 juin 2017 inclus\n- Gentse Feesten – du 14 au 23 juillet 2017 inclus\n- Cirque Magique – du 4 au 6 août 2017 inclus\n- Nostalgie Beach Festival – 12 août 2017\n- WECANDANCE – 12 et 13 août 2017\n- W-Festival – du 18 au 20 août 2017 inclus\n- Kamping Kitsch – 26 août 2017\n- Antwerp City Drops – 23 et 24 septembre 2017\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c1QV4vKZVR2AuiieyCuasMQ___fr",
                "slug": "dummy",
                "title": null,
                "titleImage": null,
                "shortDescription": {
                  "shortDescription": " "
                },
                "datePublished": null,
                "fullDescription": null
              }
            },
            {
              "node": {
                "id": "c5CKGCrcMLYyU6My40k2qMS___fr",
                "slug": "la-super-8-blanche-est-la-meilleure-biere-blanche-belge",
                "title": "La SUPER 8 Blanche est la meilleure bière blanche belge",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/e000db391cbbfd660b276b44e28045c7/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Ce vendredi 11 août, la SUPER 8 Blanche, la toute nouvelle bière de la gamme SUPER 8 de la Brasserie Haacht, a été élue meilleure ‘Belgian Style Witbier’ de Belgique aux World Beer Awards. À l’échelle mondiale, cette bière a échappé de peu à la première place au profit de la bière brésilienne Búzios Brigitte."
                },
                "datePublished": "2017-08-18T00:00+01:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Ce vendredi 11 août, la SUPER 8 Blanche, la toute nouvelle bière de la gamme SUPER 8 de la Brasserie Haacht, a été élue meilleure ‘Belgian Style Witbier’ de Belgique aux World Beer Awards. À l’échelle mondiale, cette bière a échappé de peu à la première place au profit de la bière brésilienne Búzios Brigitte.\n\nLancée en mai, la SUPER 8 Blanche est la troisième bière de la gamme SUPER 8 de la Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire. Cette bière blanche épicée est relevée avec de la coriandre fraîchement moulue et un beau zeste d’orange, et réinvente ainsi de façon surprenante un goût familier.\n\n« Nous sommes très fiers que notre SUPER 8 Blanche soit appréciée du grand public comme des experts aussi peu de temps après son lancement », déclare Boudewijn van der Kelen, Directeur du marketing de la Brasserie Haacht. « Le prix que nous avons reçu aux World Beer Awards est un bel encouragement pour notre brasserie indépendante. Nous ne comptons pas nous arrêter en si bon chemin et allons continuer à lancer de nouvelles bières. »\n\nPour avoir plus d’informations, rendez-vous sur [www.super8.be](http://www.super8.be) ou [www.worldbeerawards.com](http://www.worldbeerawards.com/)."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c5s0L0r9gc0k4ccIg6oeI6e___fr",
                "slug": "la-primus-et-la-super-8-recompensees-au-brussels-beer-challenge",
                "title": "La Primus et la SUPER 8 IPA de la Brasserie Haacht récompensées au Brussels Beer Challenge",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/76f245175573b04432b0437f10e60dd4/NB-november-Super-8_IPA_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "La Brasserie Haacht a été doublement médaillée lors de la sixième édition du prestigieux Brussels Beer Challenge à Horeca Expo. La SUPER 8 IPA a ainsi été élue meilleure « Pale & Amber Ale: English IPA », tandis que la pils Primus a remporté l’argent dans la catégorie « Lager: Helles »"
                },
                "datePublished": "2017-11-21T00:00+01:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "La Brasserie Haacht a été doublement médaillée lors de la sixième édition du prestigieux Brussels Beer Challenge à Horeca Expo. La SUPER 8 IPA a ainsi été élue meilleure « Pale & Amber Ale: English IPA », tandis que la pils Primus a remporté l’argent dans la catégorie « Lager: Helles ».\n\nBaudouin van der Kelen, directeur marketing de la Brasserie Haacht, ne cache pas sa fierté : « Nous avons lancé nos deux premières bières SUPER 8 en novembre 2016. Un an plus tard, notre nouvelle gamme compte déjà quatre bières et a décroché deux très beaux prix. Aux World Beer Awards, notre SUPER 8 Blanche a été élue meilleure bière blanche belge, et maintenant, c’est notre SUPER 8 IPA qui se distingue au Brussels Beer Challenge. »\nAvec la gamme SUPER 8, la Brasserie Haacht joue la carte de l’innovation. « Nous nous réjouissons que notre gamme SUPER 8, qui présente de délicieuses bières sortant de l’ordinaire, soit si bien accueillie, et ce non seulement par les vrais amateurs de bière, mais aussi par le grand public. Ces deux prix prouvent que le choix de l’innovation est le seul qui s’impose, même pour une brasserie authentique comme la Brasserie Haacht », ajoute Baudouin van der Kelen.\n\nLa reconnaissance de la Primus, l’emblème de la brasserie, fait tout autant plaisir à la Brasserie Haacht. « La Primus est depuis toujours une valeur sûre du paysage brassicole belge. Le fait qu’outre nos bières SUPER 8, nous nous positionnions si bien avec notre pils classique est une véritable récompense pour nos collaborateurs qui s’investissent chaque jour pour faire profiter tout le monde de notre authentique plaisir de brasser des produits de qualité », conclut Baudouin van der Kelen.\n\n### Brussels Beer Challenge\n\nDurant trois jours, un panel de 85 connaisseurs internationalement reconnus a goûté 1.400 bières provenant de 37 pays. Les bières participantes sont réparties en catégories à base de leur origine, de leur type et de leur style pour être ensuite soumises à l’évaluation des juges. Au bout des trois jours de dégustation, les meilleures bières de chaque catégorie se sont vu décerner une médaille d’or, d’argent ou de bronze à Horeca Expo à Gand."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c4tGcIu115Sc6sMw4GkgqKq___nl",
                "slug": "tongerlo-nox-valt-in-zweden-in-de-prijzen",
                "title": "Tongerlo NOX valt in Zweden in de prijzen",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/5315009bfc80e24ee7224437332977c5/NB-april-Tongerlo_NOX_award_Zweden.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Op de voorbije editie van de Beer & Whisky Fair in het Zweedse Göteborg heeft een professionele jury onze Tongerlo NOX bekroond met een gouden medaille in de categorie 'Ale 5,1 - 7%'. Het is voor het bruine abdijbier de tweede prestigieuze bekroning, na een zilveren medaille op de Asia Beer Awards in 2013. Liefhebbers appreciëren de Tongerlo NOX in het bijzonder om zijn heerlijke fluweeltoets van vanille en zijn delicate bitterheid van fondantchocolade."
                },
                "datePublished": "2018-05-08T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Op de voorbije editie van de [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) in het Zweedse Göteborg heeft een professionele jury onze [Tongerlo NOX](https://haacht.com/nl-BE/merken/bieren/tongerlo-nox) bekroond met een gouden medaille in de categorie 'Ale 5,1 - 7%'. Het is voor het bruine abdijbier de tweede prestigieuze bekroning, na een zilveren medaille op de Asia Beer Awards in 2013. Liefhebbers appreciëren de Tongerlo NOX in het bijzonder om zijn heerlijke fluweeltoets van vanille en zijn delicate bitterheid van fondantchocolade.\n\n### BEER & WHISKY FAIR\n\nDe Beer & Whisky Fair is met 24.000 bezoekers over twee dagen de grootste bierbeurs in Zweden en was dit jaar aan haar vijfde editie toe. Een 18-koppige professionele jury proefde blind meer dan 400 bieren uit alle uithoeken van de wereld. De deelnemende bieren worden onderverdeeld in elf verschillende categorieën, gebaseerd op origine, type en stijl, en vervolgens gewikt en gewogen.\n\n### HELE TONGERLO-GAMMA GEROEMD\n\nNiet enkel de Tongerlo NOX wordt internationaal erkend als een kwaliteitsbier met eigenheid. Zo werd de blonde variant, de Tongerlo LUX, tijdens de World Beer Awards in 2014 als enige Belgische bier ooit uitgeroepen tot beste bier ter wereld over alle categorieën heen. Drie jaar eerder kaapte het tripelbier Tongerlo PRIOR er al de prijs voor beste blonde abdijbier/trappistenbier weg.\n\nBoudewijn van der Kelen van Brouwerij Haacht is trots op de erkenning voor Tongerlo NOX: “Tongerlo is een gevestigde waarde in binnen- en buitenland. Dat ons authentiek, Belgisch abdijbier hoge ogen blijft gooien tijdens internationale, prestigieuze bierevents, is een beloning voor het vakmanschap van onze brouwmeester en voor al onze medewerkers die zich dagelijks inzetten om iedereen van ons brouwplezier te laten genieten.”\n"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c2D3XxTztaAS6Yuw8umaUcM___nl",
                "slug": "brouwerij-haacht-zet-in-met-pilsbier-Primus-op-festivals-en-events",
                "title": "Brouwerij Haacht zet met haar pilsbier Primus stevig in op festivals en events",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/8003813231ba78f826d6698cd4d7eddc/NB-mei-Primus-op-events-Lennen-Descamps057__1_.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis, trapte de festivalperiode half mei af op Fire Is Gold, het allereerste echte hiphopfestival van België. Daarmee is de toon meteen goed gezet voor de komende festivalzomer."
                },
                "datePublished": "2017-05-30T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis, trapte de festivalperiode half mei af op Fire Is Gold, het allereerste echte hiphopfestival van België. Daarmee is de toon meteen goed gezet, want Brouwerij Haacht is met haar pilsbier Primus deze zomer ook nog aanwezig op acht andere festivals of events, waaronder Paradise City, WECANDANCE, Gentse Feesten, W-Festival en Kamping Kitsch. Voor de festivalperiode van 2018 en 2019 komen daar ook nog Laundry Day en Elrow bij.\n\nPrimus is al sinds jaar en dag in de horeca te vinden, en in de retail is het merk zijn huidige aanwezigheid aan het versterken. En de komende maanden trekt Brouwerij Haacht nóg meer dan vroeger naar locaties waar de grote massa gezellig samenkomt om te genieten. Op die festivals kunnen bezoekers de hele merkbeleving van Primus proeven, voelen en op-en-top beleven aan de Primus-stand. Die standen zijn een verlengstuk van het kwalitatieve en eigenzinnige karakter waar Brouwerij Haacht met Primus voor staat.\n \nPrimus is en blijft hét pilsbier bij uitstek voor degenen die eigen keuzes maken in het leven. Ze varen hun eigen koers, ongeacht trends en hypes. Het is een bier voor durvers die doen wat hen het beste lijkt, ook al is dat niet de gangbare norm. Dat komt perfect tot uiting op de festivals en events die Brouwerij Haacht heeft uitgekozen om met Primus te sponsoren.\n\n\n### Op deze festivals of events geniet je deze zomer van fris getapte Primus\n\n- Paradise City – 23 t.e.m. 25 juni 2017\n- Gentse Feesten – 14 t.e.m. 23 juli 2017\n- Cirque Magique – 4 t.e.m. 6 augustus 2017\n- Nostalgie Beach Festival – 12 augustus 2017\n- WECANDANCE – 12 en 13 augustus 2017\n- W-Festival – 18 t.e.m. 20 augustus 2017\n- Kamping Kitsch – 26 augustus 2017\n- Antwerp City Drops – 23 en 24 september 2017"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c1QV4vKZVR2AuiieyCuasMQ___nl",
                "slug": "dummy",
                "title": null,
                "titleImage": null,
                "shortDescription": {
                  "shortDescription": " "
                },
                "datePublished": null,
                "fullDescription": null
              }
            },
            {
              "node": {
                "id": "c5CKGCrcMLYyU6My40k2qMS___nl",
                "slug": "super-8-blanche-het-beste-belgische-witbier",
                "title": "SUPER 8 Blanche is het beste Belgische witbier",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/cc385d74a4fe6bd7e526d636c7d3bb0c/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Op vrijdag 11 augustus is SUPER 8 Blanche, de jongste telg in het SUPER 8-gamma van Brouwerij Haacht, op de World Beer Awards uitgeroepen tot beste ‘Belgian Style Witbier’ van België.  Op wereldniveau moest het bier nipt de duimen leggen tegen het Braziliaanse Búzios Brigitte.\n"
                },
                "datePublished": "2017-08-18T00:00+02:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Op vrijdag 11 augustus is SUPER 8 Blanche, de jongste telg in het SUPER 8-gamma van Brouwerij Haacht, op de World Beer Awards uitgeroepen tot beste ‘Belgian Style Witbier’ van België.  Op wereldniveau moest het bier nipt de duimen leggen tegen het Braziliaanse Búzios Brigitte.\n\nSUPER 8 Blanche werd afgelopen mei gelanceerd en is het derde bier in het SUPER 8-gamma van Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis. Het pittige witbier is stevig gekruid met versgemalen koriander en een ferme portie appelsienschil, wat zorgt voor een prikkelende interpretatie van een vertrouwde smaak.\n \n“We zijn ontzettend trots dat onze SUPER 8 Blanche zo kort na zijn lancering wordt gesmaakt bij zowel het grote publiek als echte kenners”, zegt Boudewijn van der Kelen, Marketing Directeur van Brouwerij Haacht. “De erkenning op de World Beer Awards is een grote stimulans voor onze onafhankelijke brouwerij. Onder impuls van innovatie blijven we steeds nieuwe bieren lanceren.”\n \nNeem voor meer informatie een kijkje op [www.super8.be](http://www.super8.be) en [www.worldbeerawards.com](http://www.worldbeerawards.com/)."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "id": "c5s0L0r9gc0k4ccIg6oeI6e___nl",
                "slug": "brouwerij-haacht-wint-met-primus-super-8-op-brussels-beer-challenge",
                "title": "Brouwerij Haacht wint met Primus en SUPER 8 IPA op Brussels Beer Challenge",
                "titleImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/40607a9de3d645d00857fd7271ef4d31/NB-november-Super-8_IPA_Glas_Fles.jpg"
                  }
                },
                "shortDescription": {
                  "shortDescription": "Brouwerij Haacht is tijdens de zesde editie van de prestigieuze Brussels Beer Challenge op Horeca Expo dubbel in de prijzen gevallen. SUPER 8 IPA werd uitgeroepen tot beste ‘Pale & Amber Ale: English IPA’, terwijl het pilsbier Primus zilver won in de categorie ‘Lager: Helles’."
                },
                "datePublished": "2017-11-21T00:00+01:00",
                "fullDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Brouwerij Haacht is tijdens de zesde editie van de prestigieuze Brussels Beer Challenge op Horeca Expo dubbel in de prijzen gevallen. SUPER 8 IPA werd uitgeroepen tot beste ‘Pale & Amber Ale: English IPA’, terwijl het pilsbier Primus zilver won in de categorie ‘Lager: Helles’.\n\nBoudewijn van der Kelen, marketingdirecteur bij Brouwerij Haacht reageert trots: *“We lanceerden onze eerste twee SUPER 8-bieren in november 2016. Een jaar later telt dit nieuwe gamma  vier bieren en heeft het twee mooie awards in de kast staan. Op de World Beer Awards werd onze SUPER 8 Blanche al uitgeroepen tot beste Belgische witbier, en nu valt ook onze SUPER 8 IPA in de prijzen tijdens de Brussels Beer Challenge.”*\nMet SUPER 8 trekt Brouwerij Haacht de kaart van innovatie. *“We zijn verheugd dat ons SUPER 8-gamma, dat staat voor lekker onverwachte bieren, echt aanslaat. Niet alleen bij de bierkenners, maar ook bij het grote publiek. Deze twee awards bewijzen dat de keuze voor innovatie ook voor een authentieke brouwerij als Brouwerij Haacht de enige juiste is”*, zegt Boudewijn van der Kelen.\nOok de erkenning voor paradepaardje Primus doet Brouwerij Haacht plezier. “Primus is al sinds jaar en dag een gevestigde waarde in het Belgische bierlandschap. Dat we naast onze SUPER 8-bieren ook met onze klassieke pils hoge ogen blijven gooien, is een beloning voor al onze medewerkers die zich dagelijks inzetten om iedereen van ons authentieke brouwplezier te laten genieten”, besluit Boudewijn van der Kelen.\n\n\n### Brussels Beer Challenge\n\nDrie dagen lang proefde een panel van 85 internationaal gereputeerde bierkenners 1.400 bieren uit 37 landen. De deelnemende bieren worden onderverdeeld in categorieën, gebaseerd op origine, type en stijl, en vervolgens gewikt en gewogen. Op het einde van de drie degustatiedagen werden de beste bieren in elke categorie beloond met een gouden, zilveren of bronzen award tijdens Horeca Expo in Gent.\n"
                    }
                  }
                }
              }
            }
          ]
        },
        "footerMenu": {
          "contactReference": {
            "title": "Contact",
            "linkSlug": "contact"
          },
          "facebookLink": "https://www.facebook.com/brouwerijhaacht/",
          "defaultImage": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/17VX2qzWvEQ4cimGumE0qA/d1028af0f8e7d4fd89f7c07905d7caf6/Haacht_brouwerij_RobTV_Sfeerbeeld-2_tiny.jpg"
            }
          },
          "jobReference": {
            "title": "Jobs",
            "linkSlug": "brouwerij/jobs"
          },
          "shopReference": {
            "title": "Shop",
            "linkSlug": "http://shop.haacht.com/nl"
          },
          "allRightsReserved": "© 2017 Brouwerij Haacht | Bier met liefde gebrouwen, drink je met verstand.",
          "youtubeLink": "https://www.youtube.com/channel/UCGtvk0NOKKDMAn6jgzdhLzw",
          "instagramReference": {
            "title": "Volg ons",
            "linkSlug": "https://www.instagram.com/explore/locations/908868/brouwerij-haacht-brasserie-haacht/"
          },
          "languages": [
            {
              "title": "België",
              "slug": {
                "slug": "nl-be",
                "slugFinal": "nl-be"
              },
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/7vlxp50Zm8OQksWGSOQUe/aade9b975754f602b22b90ca8b029866/belgian-flag.svg"
                }
              }
            },
            {
              "title": "Belgique",
              "slug": {
                "slug": "fr-be",
                "slugFinal": "fr-be/brasserie/articles/actualite"
              },
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/7vlxp50Zm8OQksWGSOQUe/aade9b975754f602b22b90ca8b029866/belgian-flag.svg"
                }
              }
            },
            {
              "title": "English",
              "slug": {
                "slug": "en",
                "slugFinal": "en/brewery/articles/news"
              },
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/3UGd3FD5xum0W2SugM0cUE/db82f2dddd4c5f54a2f1b8f050a58665/English-flag.svg"
                }
              }
            },
            {
              "title": "France",
              "slug": {
                "slug": "fr",
                "slugFinal": "fr/brasserie/articles/actualite"
              },
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/3Hl6w1bRaowyS6GGi2cekw/b25fa6130d195372e297ea16c08e6c66/Frenche-flag.svg"
                }
              }
            },
            {
              "title": "Nederland",
              "slug": {
                "slug": "nl",
                "slugFinal": "nl/brouwerij/artikels/nieuws"
              },
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/4aSJ0Dwr9Yk6cwuEGyeaA0/0e9fd5bc92d34f7a2d1c48b80d40470b/Dutch-flag.svg"
                }
              }
            }
          ],
          "footerMenu": [
            {
              "title": "Brouwerij",
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/6G8dJxxGOQaEeSgo6MMIgW/12e92bd77379a871ec64c6efdbed463a/brouwerij-haacht-ketels_tiny.jpg"
                }
              },
              "links": [
                {
                  "title": "Overzicht",
                  "slug": {
                    "id": "pjUkjYcbo4u8G2YMiY6Gq",
                    "slug": "brouwerij"
                  }
                },
                {
                  "title": "Geschiedenis",
                  "slug": {
                    "id": "c4Vg3IAZsL6CyACYECKeyu0",
                    "slug": "brouwerij/geschiedenis"
                  }
                },
                {
                  "title": "Brouwkunst",
                  "slug": {
                    "id": "c1VyqMLBTbeQKC6ao0iwig8",
                    "slug": "brouwerij/brouwproces"
                  }
                },
                {
                  "title": "Brouwerijbezoek",
                  "slug": {
                    "id": "c23qIUrp5TqeaeouAeo8uO0",
                    "slug": "brouwerij/brouwerijbezoek"
                  }
                },
                {
                  "title": "Werken bij de brouwerij",
                  "slug": {
                    "id": "c3okOEs8AQU6Ua0YkSYwowS",
                    "slug": "brouwerij/jobs"
                  }
                },
                {
                  "title": "Leven in de brouwerij",
                  "slug": {
                    "id": "c1nr5UjQPDCG2OcmwWoeSaU",
                    "slug": "brouwerij/artikels/nieuws"
                  }
                },
                {
                  "title": "Onze publicaties",
                  "slug": {
                    "id": "c4FDmr6xm6Iu4SS2M2uEQq2",
                    "slug": "brouwerij/artikels/publicaties"
                  }
                },
                {
                  "title": "Evenementen",
                  "slug": {
                    "id": "c6J81IP0NYkkSgYk2aEyAeQ",
                    "slug": "brouwerij/artikels/evenementen"
                  }
                }
              ]
            },
            {
              "title": "Merken",
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/JUYZGyasOAEMgYQGM8oAc/84c41c32d3679eef7bf09c48a8e127a8/merken_tiny.jpg"
                }
              },
              "links": [
                {
                  "title": "Alle Merken",
                  "slug": {
                    "id": "c4WAnL5iIBGCCUKgg264W0",
                    "slug": "merken"
                  }
                },
                {
                  "title": "Bieren",
                  "slug": {
                    "id": "c5imHg3vMxOea0cKsI6GsGG",
                    "slug": "merken/bieren"
                  }
                },
                {
                  "title": "Wijnen",
                  "slug": {
                    "id": "c6AYizK2yd2ayiAEmAomYcy",
                    "slug": "merken/wijnen"
                  }
                },
                {
                  "title": "Waters & Frisdranken",
                  "slug": {
                    "id": "c4MPFhqzHSMMcWWcaS4Uo8E",
                    "slug": "merken/waters-frisdranken"
                  }
                },
                {
                  "title": "Koffies",
                  "slug": {
                    "id": "lanZMmhi246qco4QK8qMa",
                    "slug": "merken/koffies"
                  }
                },
                {
                  "title": "Verkooppunten",
                  "slug": {
                    "id": "c2721jdzo4wwWyck8kw6cGc",
                    "slug": "merken/verkooppunten"
                  }
                }
              ]
            },
            {
              "title": "Horeca",
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/6koJwx5WXmmW8y6IQcsqgi/5da720995f959c9373f30e645378ee1f/horeca-haacht-samenwerken_tiny.jpg"
                }
              },
              "links": [
                {
                  "title": "Overzicht",
                  "slug": {
                    "id": "c3vGKnLtbwQcMIO8smKACgE",
                    "slug": "horeca"
                  }
                },
                {
                  "title": "Samenwerken",
                  "slug": {
                    "id": "c58o6WPiNFYoiIeqoIW2uuI",
                    "slug": "horeca/samenwerken"
                  }
                },
                {
                  "title": "Advies",
                  "slug": {
                    "id": "c2xyAjCPBDWiSKUGAmwAwqo",
                    "slug": "horeca/horeca-advies/tips-tricks-brouwerij-haacht"
                  }
                },
                {
                  "title": "Opleidingen",
                  "slug": {
                    "id": "c5qMrv7OhNKwyOWcS84iA2M",
                    "slug": "horeca/horeca-training"
                  }
                },
                {
                  "title": "Panden",
                  "slug": {
                    "id": "c1613mA6rWSWeIyyW6IOUAq",
                    "slug": "horeca/panden"
                  }
                },
                {
                  "title": "Logo's & packshots",
                  "slug": {
                    "id": "c2SOXbhMfbG02OiyqK6GWyQ",
                    "slug": "logo-packshots"
                  }
                },
                {
                  "title": "FAQ",
                  "slug": {
                    "id": "CcQJxo2sYSUEWMcYso0k0",
                    "slug": "horeca/faq/veelgestelde-vragen-brouwerij-haacht"
                  }
                }
              ]
            },
            {
              "title": "Bedrijfsinfo",
              "image": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/1P65JSAHgIMI6Cq4SCaGka/1cd7d6a88fdf68f9292e4f4551ddb942/jobs-slider-2.jpg"
                }
              },
              "links": [
                {
                  "title": "Wij engageren ons",
                  "slug": {
                    "id": "hbDzMhmjLiQKcMSoeskQI",
                    "slug": "bedrijf/wij-engageren-ons"
                  }
                },
                {
                  "title": "Kwaliteit gegarandeerd",
                  "slug": {
                    "id": "c1Tgzk46rKIoGC4Y8ISE22e",
                    "slug": "bedrijf/kwaliteit-gegarandeerd"
                  }
                },
                {
                  "title": "Investor Relations",
                  "slug": {
                    "id": "zK6rohZcFUeSMom2iISke",
                    "slug": "bedrijf/investor-relations"
                  }
                }
              ]
            }
          ],
          "creditLinks": [
            {
              "title": "Jobs",
              "slug": {
                "id": "iytPIFSfrUmAgQKes4giW",
                "slug": "brouwerij/jobs/"
              }
            },
            {
              "title": "Pers",
              "slug": {
                "id": "oCK0Bzxn8GqgYwiMysyCM",
                "slug": "brouwerij/artikels/pers"
              }
            },
            {
              "title": "Contact",
              "slug": {
                "id": "c7kmuSCchygkSksIoC2M0eE",
                "slug": "contact"
              }
            },
            {
              "title": "Sitemap",
              "slug": {
                "id": "c4Q6VuYopUso6c0MAguyeAg",
                "slug": "sitemap"
              }
            },
            {
              "title": "Disclaimer",
              "slug": {
                "id": "rRgMBxVvqgmOWSCCio0SO",
                "slug": "disclaimer"
              }
            }
          ]
        }
      },
      "pathContext": {
        "locale": "nl-BE",
        "id": "c4tGcIu115Sc6sMw4GkgqKq",
        "navId": "c1DzxdxolMIwGMs2wMucG8W"
      }
    },
    "page": {
      "componentChunkName": "component---src-templates-news-single-js",
      "layout": "layout---index",
      "layoutComponentChunkName": "component---src-layouts-index-js",
      "jsonName": "nl-be-brouwerij-nieuws-tongerlo-nox-valt-in-zweden-in-de-prijzen.json",
      "path": "/nl-BE/brouwerij/nieuws/tongerlo-nox-valt-in-zweden-in-de-prijzen"
    }
  },
  "data": {
    "nav": {
      "id": "c1DzxdxolMIwGMs2wMucG8W",
      "links": [
        {
          "__typename": "ContentfulNavigatie",
          "id": "c1r4ManayXCIs0wMui4aGwU",
          "title": "Brouwerij",
          "animationKey": "brewery",
          "slug": {
            "slug": "brouwerij"
          },
          "links": [
            {
              "__typename": "ContentfulMenuLink",
              "id": "c2CroH5YieIeKMmqqaaOQMi",
              "title": "Geschiedenis",
              "slug": {
                "slug": "brouwerij/geschiedenis"
              },
              "image": {
                "description": "Navigation - Geschiedenis",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/4MRw52l5eUgqu80YmOUg8I/8db69f91de31e62999fe5aaa4ecb7cdd/geschiedenis.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c1CM8amygAY44Sc4o6swOe2",
              "title": "Brouwproces",
              "slug": {
                "slug": "brouwerij/brouwproces"
              },
              "image": {
                "description": "Navigatie - Brouwproces",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/6ymONQWDu0qKUY2ue8gGcs/e7c40e32d3f8c59397ded6efaaae777f/brouwproces.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c5YiWDo9iFyiiUaqEMIMOQm",
              "title": "Brouwerijbezoek",
              "slug": {
                "slug": "brouwerij/brouwerijbezoek"
              },
              "image": {
                "description": "brouwerijbezoek menu afbeelding",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/4FvmcQr4cEgoQqoQCCyImC/1ce26d406a70b2ca104eeeb453cc7cbd/brouwerijbezoek-menu-img.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c2iGObCDvyUOCWoYqEsooA8",
              "title": "Jobs",
              "slug": {
                "slug": "brouwerij/jobs/"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/4sRj1IUr3aAooW8UMIqkCG/bc96fabfae9bcd36ff7d43b99e5e52a4/jobs-slider-1.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c1ey5R9Ns4IS6KqAC4wSmAi",
              "title": "Leven in de brouwerij",
              "slug": {
                "slug": "brouwerij/artikels/nieuws"
              },
              "image": {
                "description": "Afbeelding voor nieuws navigatie",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/1DFIHHNbyAAeWm0smAAQQi/a50817ef10eff6393b0ceaad2023704a/nieuws.jpg"
                }
              }
            }
          ]
        },
        {
          "__typename": "ContentfulNavigatie",
          "id": "c5cCroMlEH6iYsQu248mW4U",
          "title": "Merken",
          "animationKey": "brands",
          "slug": {
            "slug": "merken"
          },
          "links": [
            {
              "__typename": "ContentfulMenuLink",
              "id": "c4YzYXjzCj6C8CQGMw4WMcc",
              "title": "Bieren",
              "slug": {
                "slug": "merken/bieren"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/34RqNjStjyo8q6IcgASKK2/b3243241c447d61d2d5f953f1df5c03c/brand-beers.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c4yaOcgWc9OW4y6KCCQ2UU8",
              "title": "Waters en frisdranken",
              "slug": {
                "slug": "merken/waters-frisdranken"
              },
              "image": {
                "description": "Afbeelding voor navigatie softdrinks",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/1ZQXoXfXE8Uu0iYQiOMaIS/890a5bd0d3722e3eb1f77f999cff707c/brand-softdrinks.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c4YbYMpCwgw6Qk4y0WyA4uw",
              "title": "Wijnen",
              "slug": {
                "slug": "merken/wijnen"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/40ECC2rBTWiGWcQ2UQCssC/ec92b05915cd54a4344a09d20fd5e325/brand-wines.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c3AHkPb7X0coGCaUMU2KuYy",
              "title": "Koffies",
              "slug": {
                "slug": "merken/koffies"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/4pF6RyGliMw8qaykAWyA8G/e8184e8778acb0a78e7419e572efba75/brand-coffee_tiny.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c3YXkUMfmx264i4kIwuGgGq",
              "title": "Verkooppunten",
              "slug": {
                "slug": "merken/verkooppunten"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/2AlEwaBPb2uOysCSWKogiq/6d4c340ea43eedcea8b79ed469573744/verkooppunten-brouwerij-haacht.jpg"
                }
              }
            }
          ]
        },
        {
          "__typename": "ContentfulNavigatie",
          "id": "T04LXz7J0OM0C08IykECI",
          "title": "Horeca",
          "animationKey": "horeca",
          "slug": {
            "slug": "horeca"
          },
          "links": [
            {
              "__typename": "ContentfulMenuLink",
              "id": "c65IKbF5y0gMiSAk4Y8yWwu",
              "title": "Samenwerken",
              "slug": {
                "slug": "horeca/samenwerken"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/DYyzF4zSvuOGcweeSyI4s/180c4a45aa6528c8042a26f96baf3fcd/samenwerken-met-brouwerij-haacht.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c3JEkGWVTyocukYoQa8Yo0Q",
              "title": "Opleidingen",
              "slug": {
                "slug": "horeca/horeca-training"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/DfohnIPaRUSswgUaICGa6/d3b2d42b514388e29c26ddc7e8971ccc/trainingen.jpg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "wQawjlEoZEWyYkUaIMmC2",
              "title": "Horecapanden",
              "slug": {
                "slug": "horeca/panden"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/1e1mqgBFG8uKk8Q0ggeYII/d2a59b363460694455ff56e678e2ba7e/Westerlo-De-Merodedreef-72-Den-Draaiboom-A.jpeg"
                }
              }
            },
            {
              "__typename": "ContentfulMenuLink",
              "id": "c6CVnfpcUikY4C6EKk4UUkU",
              "title": "Logo's & packshots",
              "slug": {
                "slug": "logo-packshots"
              },
              "image": {
                "description": "",
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/5cCUJ6oIKcYEmKIU2Ais4I/cf3ed9aafc48facf16ec80c65a7eba05/logos-en-packshots.jpg"
                }
              }
            }
          ]
        },
        {
          "__typename": "ContentfulNavigatie",
          "id": "c6ZE6AGQVG0gCqAmuCyIGys",
          "title": "Jobs",
          "animationKey": "Jobs",
          "slug": {
            "slug": "brouwerij/jobs"
          },
          "links": null
        },
        {
          "__typename": "ContentfulNavigatie",
          "id": "c2pERr4K31eg4mAmqGMaM2m",
          "title": "Contact",
          "animationKey": null,
          "slug": {
            "slug": "contact"
          },
          "links": null
        }
      ]
    },
    "slug_en": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___en",
      "news": [
        {
          "slug": "brewery/articles/news"
        },
        {
          "slug": "brewery/articles/events"
        },
        {
          "slug": "brewery/articles/publications"
        },
        {
          "slug": "brewery/articles/press"
        },
        {
          "slug": "brewery/articles/awards"
        },
        {
          "slug": "brewery/articles/stories"
        }
      ]
    },
    "slug_nl": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___nl",
      "news": [
        {
          "slug": "brouwerij/artikels/nieuws"
        },
        {
          "slug": "brouwerij/artikels/evenementen"
        },
        {
          "slug": "brouwerij/artikels/publicaties"
        },
        {
          "slug": "brouwerij/artikels/pers"
        },
        {
          "slug": "brouwerij/artikels/awards"
        },
        {
          "slug": "brouwerij/artikels/verhalen"
        }
      ]
    },
    "slug_nl_be": {
      "id": "c3ZgBshM4WcSEQe6usAcm88",
      "news": [
        {
          "slug": "brouwerij/artikels/nieuws"
        },
        {
          "slug": "brouwerij/artikels/evenementen"
        },
        {
          "slug": "brouwerij/artikels/publicaties"
        },
        {
          "slug": "brouwerij/artikels/pers"
        },
        {
          "slug": "brouwerij/artikels/awards"
        },
        {
          "slug": "brouwerij/artikels/verhalen"
        }
      ]
    },
    "slug_fr": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___fr",
      "news": [
        {
          "slug": "brasserie/articles/actualite"
        },
        {
          "slug": "brasserie/articles/evenements"
        },
        {
          "slug": "brasserie/articles/publications"
        },
        {
          "slug": "brasserie/articles/presse"
        },
        {
          "slug": "brasserie/articles/recompenses"
        },
        {
          "slug": "brasserie/articles/anecdotes"
        }
      ]
    },
    "slug_fr_be": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___fr-BE",
      "news": [
        {
          "slug": "brasserie/articles/actualite"
        },
        {
          "slug": "brasserie/articles/evenements"
        },
        {
          "slug": "brasserie/articles/publications"
        },
        {
          "slug": "brasserie/articles/presse"
        },
        {
          "slug": "brasserie/articles/recompenses"
        },
        {
          "slug": "brasserie/articles/anecdotes"
        }
      ]
    },
    "content": {
      "headerNavigation": [
        "Nieuws",
        "Evenementen",
        "Publicaties",
        "Verhalen",
        "Pers",
        "Awards"
      ],
      "news": "Nieuws",
      "newsHighlight": "Uitgelicht",
      "evenementInDeKijker": "Evenement in de kijker",
      "buttonViewWebsite": "Bezoek website",
      "alleNieuws": "Alle nieuws",
      "meerNieuws": "Meer nieuws",
      "buttonLoadMore": "Laad meer",
      "headerImages": [
        {
          "file": {
            "url": "//images.ctfassets.net/vlb1ben6vtp9/3T2CtWhNBCIM0ekOCAWMQG/7ea6bfe9f6968e4f86f8900330307a01/nieuws.jpg"
          }
        },
        {
          "file": {
            "url": "//images.ctfassets.net/vlb1ben6vtp9/2y4WSOjaIUsMwuuQ0AoeqK/10e8f02dd200fb6fdce6b9450e8edd40/evenementen.jpg"
          }
        },
        {
          "file": {
            "url": "//images.ctfassets.net/vlb1ben6vtp9/4gKUAUUQs8YOY6iQc2wGiw/40293de6bd859860ffc1321212930c00/publicaties.jpg"
          }
        },
        {
          "file": {
            "url": "//images.ctfassets.net/vlb1ben6vtp9/3GmDRr8MAU4siAOoikoQkE/e7f2ecb05ffd6072e304345a542f3ff5/verhalen.jpg"
          }
        },
        {
          "file": {
            "url": "//images.ctfassets.net/vlb1ben6vtp9/4DeBenpjfyOGMmWUKc2kiy/8182743df219139f2e8670464c2d8f4d/pers.jpg"
          }
        },
        {
          "file": {
            "url": "//images.ctfassets.net/vlb1ben6vtp9/5rQJAWFMPYyY44ca0o0Osu/3325e980d85ce6948bbfec47b2bb7530/awards.jpg"
          }
        }
      ],
      "pressCategorySorting": [
        {
          "title": "Persbericht"
        },
        {
          "title": "Persartikel"
        }
      ],
      "publishedOn": "Gepubliceerd op",
      "inThePress": "In de pers",
      "evenementenAfgelopen": "Afgelopen evenementen",
      "evementenCategory": [
        "Aankomende",
        "Afgelopen"
      ],
      "chooseACategory": "Kies een categorie",
      "newsLink": {
        "slug": "brouwerij/artikels/nieuws"
      }
    },
    "news": {
      "edges": [
        {
          "node": {
            "id": "c4tGcIu115Sc6sMw4GkgqKq",
            "slug": "tongerlo-nox-valt-in-zweden-in-de-prijzen",
            "title": "Tongerlo NOX valt in Zweden in de prijzen",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/8a8453f4a358fb3667e87fedd2e703f8/NB-april-Tongerlo_NOX_award_Zweden.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Op de voorbije editie van de Beer & Whisky Fair in het Zweedse Göteborg heeft een professionele jury onze Tongerlo NOX bekroond met een gouden medaille in de categorie 'Ale 5,1 - 7%'. Het is voor het bruine abdijbier de tweede prestigieuze bekroning, na een zilveren medaille op de Asia Beer Awards in 2013. Liefhebbers appreciëren de Tongerlo NOX in het bijzonder om zijn heerlijke fluweeltoets van vanille en zijn delicate bitterheid van fondantchocolade."
            },
            "datePublished": "2018-05-08T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Op de voorbije editie van de [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) in het Zweedse Göteborg heeft een professionele jury onze [Tongerlo NOX](https://haacht.com/nl-BE/merken/bieren/tongerlo-nox) bekroond met een gouden medaille in de categorie 'Ale 5,1 - 7%'. Het is voor het bruine abdijbier de tweede prestigieuze bekroning, na een zilveren medaille op de Asia Beer Awards in 2013. Liefhebbers appreciëren de Tongerlo NOX in het bijzonder om zijn heerlijke fluweeltoets van vanille en zijn delicate bitterheid van fondantchocolade.\n\n### BEER & WHISKY FAIR\n\nDe Beer & Whisky Fair is met 24.000 bezoekers over twee dagen de grootste bierbeurs in Zweden en was dit jaar aan haar vijfde editie toe. Een 18-koppige professionele jury proefde blind meer dan 400 bieren uit alle uithoeken van de wereld. De deelnemende bieren worden onderverdeeld in elf verschillende categorieën, gebaseerd op origine, type en stijl, en vervolgens gewikt en gewogen.\n\n### HELE TONGERLO-GAMMA GEROEMD\n\nNiet enkel de Tongerlo NOX wordt internationaal erkend als een kwaliteitsbier met eigenheid. Zo werd de blonde variant, de Tongerlo LUX, tijdens de World Beer Awards in 2014 als enige Belgische bier ooit uitgeroepen tot beste bier ter wereld over alle categorieën heen. Drie jaar eerder kaapte het tripelbier Tongerlo PRIOR er al de prijs voor beste blonde abdijbier/trappistenbier weg.\n\nBoudewijn van der Kelen van Brouwerij Haacht is trots op de erkenning voor Tongerlo NOX: “Tongerlo is een gevestigde waarde in binnen- en buitenland. Dat ons authentiek, Belgisch abdijbier hoge ogen blijft gooien tijdens internationale, prestigieuze bierevents, is een beloning voor het vakmanschap van onze brouwmeester en voor al onze medewerkers die zich dagelijks inzetten om iedereen van ons brouwplezier te laten genieten.”\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c2D3XxTztaAS6Yuw8umaUcM",
            "slug": "brouwerij-haacht-zet-in-met-pilsbier-Primus-op-festivals-en-events",
            "title": "Brouwerij Haacht zet met haar pilsbier Primus stevig in op festivals en events",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/9c47669413607f6eb504d06ee4acf09b/NB-mei-Primus-op-events-Lennen-Descamps057.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis, trapte de festivalperiode half mei af op Fire Is Gold, het allereerste echte hiphopfestival van België. Daarmee is de toon meteen goed gezet voor de komende festivalzomer."
            },
            "datePublished": "2017-05-30T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis, trapte de festivalperiode half mei af op Fire Is Gold, het allereerste echte hiphopfestival van België. Daarmee is de toon meteen goed gezet, want Brouwerij Haacht is met haar pilsbier Primus deze zomer ook nog aanwezig op acht andere festivals of events, waaronder Paradise City, WECANDANCE, Gentse Feesten, W-Festival en Kamping Kitsch. Voor de festivalperiode van 2018 en 2019 komen daar ook nog Laundry Day en Elrow bij.\n\nPrimus is al sinds jaar en dag in de horeca te vinden, en in de retail is het merk zijn huidige aanwezigheid aan het versterken. En de komende maanden trekt Brouwerij Haacht nóg meer dan vroeger naar locaties waar de grote massa gezellig samenkomt om te genieten. Op die festivals kunnen bezoekers de hele merkbeleving van Primus proeven, voelen en op-en-top beleven aan de Primus-stand. Die standen zijn een verlengstuk van het kwalitatieve en eigenzinnige karakter waar Brouwerij Haacht met Primus voor staat.\n \nPrimus is en blijft hét pilsbier bij uitstek voor degenen die eigen keuzes maken in het leven. Ze varen hun eigen koers, ongeacht trends en hypes. Het is een bier voor durvers die doen wat hen het beste lijkt, ook al is dat niet de gangbare norm. Dat komt perfect tot uiting op de festivals en events die Brouwerij Haacht heeft uitgekozen om met Primus te sponsoren.\n\n\n### Op deze festivals of events geniet je deze zomer van fris getapte Primus\n\n- Paradise City – 23 t.e.m. 25 juni 2017\n- Gentse Feesten – 14 t.e.m. 23 juli 2017\n- Cirque Magique – 4 t.e.m. 6 augustus 2017\n- Nostalgie Beach Festival – 12 augustus 2017\n- WECANDANCE – 12 en 13 augustus 2017\n- W-Festival – 18 t.e.m. 20 augustus 2017\n- Kamping Kitsch – 26 augustus 2017\n- Antwerp City Drops – 23 en 24 september 2017"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c1QV4vKZVR2AuiieyCuasMQ",
            "slug": "dummy",
            "title": "dummy",
            "titleImage": null,
            "shortDescription": {
              "shortDescription": "Dummy News"
            },
            "datePublished": null,
            "fullDescription": null
          }
        },
        {
          "node": {
            "id": "c5CKGCrcMLYyU6My40k2qMS",
            "slug": "super-8-blanche-het-beste-belgische-witbier",
            "title": "SUPER 8 Blanche is het beste Belgische witbier",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/ae606bcbf11c3b0cd5a00d063f33b9ee/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Op vrijdag 11 augustus is SUPER 8 Blanche, de jongste telg in het SUPER 8-gamma van Brouwerij Haacht, op de World Beer Awards uitgeroepen tot beste ‘Belgian Style Witbier’ van België.  Op wereldniveau moest het bier nipt de duimen leggen tegen het Braziliaanse Búzios Brigitte.\n"
            },
            "datePublished": "2017-08-18T00:00+01:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Op vrijdag 11 augustus is SUPER 8 Blanche, de jongste telg in het SUPER 8-gamma van Brouwerij Haacht, op de World Beer Awards uitgeroepen tot beste ‘Belgian Style Witbier’ van België.  Op wereldniveau moest het bier nipt de duimen leggen tegen het Braziliaanse Búzios Brigitte.\n\nSUPER 8 Blanche werd afgelopen mei gelanceerd en is het derde bier in het SUPER 8-gamma van Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis. Het pittige witbier is stevig gekruid met versgemalen koriander en een ferme portie appelsienschil, wat zorgt voor een prikkelende interpretatie van een vertrouwde smaak.\n \n“We zijn ontzettend trots dat onze SUPER 8 Blanche zo kort na zijn lancering wordt gesmaakt bij zowel het grote publiek als echte kenners”, zegt Boudewijn van der Kelen, Marketing Directeur van Brouwerij Haacht. “De erkenning op de World Beer Awards is een grote stimulans voor onze onafhankelijke brouwerij. Onder impuls van innovatie blijven we steeds nieuwe bieren lanceren.”\n \nNeem voor meer informatie een kijkje op [www.super8.be](http://www.super8.be) en [www.worldbeerawards.com](http://www.worldbeerawards.com/)."
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c5s0L0r9gc0k4ccIg6oeI6e",
            "slug": "brouwerij-haacht-wint-met-primus-super-8-op-brussels-beer-challenge",
            "title": "Brouwerij Haacht wint met Primus en SUPER 8 IPA op Brussels Beer Challenge",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/b6656a1a403d23262a935cf34316aaf4/NB-november-Super-8_IPA_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Brouwerij Haacht is tijdens de zesde editie van de prestigieuze Brussels Beer Challenge op Horeca Expo dubbel in de prijzen gevallen. SUPER 8 IPA werd uitgeroepen tot beste ‘Pale & Amber Ale: English IPA’, terwijl het pilsbier Primus zilver won in de categorie ‘Lager: Helles’."
            },
            "datePublished": "2017-11-21T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Brouwerij Haacht is tijdens de zesde editie van de prestigieuze Brussels Beer Challenge op Horeca Expo dubbel in de prijzen gevallen. SUPER 8 IPA werd uitgeroepen tot beste ‘Pale & Amber Ale: English IPA’, terwijl het pilsbier Primus zilver won in de categorie ‘Lager: Helles’.\n\nBoudewijn van der Kelen, marketingdirecteur bij Brouwerij Haacht reageert trots: *“We lanceerden onze eerste twee SUPER 8-bieren in november 2016. Een jaar later telt dit nieuwe gamma  vier bieren en heeft het twee mooie awards in de kast staan. Op de World Beer Awards werd onze SUPER 8 Blanche al uitgeroepen tot beste Belgische witbier, en nu valt ook onze SUPER 8 IPA in de prijzen tijdens de Brussels Beer Challenge.”*\nMet SUPER 8 trekt Brouwerij Haacht de kaart van innovatie. *“We zijn verheugd dat ons SUPER 8-gamma, dat staat voor lekker onverwachte bieren, echt aanslaat. Niet alleen bij de bierkenners, maar ook bij het grote publiek. Deze twee awards bewijzen dat de keuze voor innovatie ook voor een authentieke brouwerij als Brouwerij Haacht de enige juiste is”*, zegt Boudewijn van der Kelen.\nOok de erkenning voor paradepaardje Primus doet Brouwerij Haacht plezier. “Primus is al sinds jaar en dag een gevestigde waarde in het Belgische bierlandschap. Dat we naast onze SUPER 8-bieren ook met onze klassieke pils hoge ogen blijven gooien, is een beloning voor al onze medewerkers die zich dagelijks inzetten om iedereen van ons authentieke brouwplezier te laten genieten”, besluit Boudewijn van der Kelen.\n\n\n### Brussels Beer Challenge\n\nDrie dagen lang proefde een panel van 85 internationaal gereputeerde bierkenners 1.400 bieren uit 37 landen. De deelnemende bieren worden onderverdeeld in categorieën, gebaseerd op origine, type en stijl, en vervolgens gewikt en gewogen. Op het einde van de drie degustatiedagen werden de beste bieren in elke categorie beloond met een gouden, zilveren of bronzen award tijdens Horeca Expo in Gent.\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c4tGcIu115Sc6sMw4GkgqKq___fr-BE",
            "slug": "tongerlo-nox-recompensee-en-suede",
            "title": "Tongerlo NOX récompensée en Suède",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/753601e302d26595342001e641ddb573/NB-april-Tongerlo_NOX_award_Zweden.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Lors de la dernière édition de la Beer & Whisky Fair à Göteborg en Suède, un jury professionnel a décerné la médaille d’or dans la catégorie « Ale 5,1 - 7% » à notre Tongerlo NOX. La bière d’abbaye brune remporte ainsi sa deuxième récompense prestigieuse, après avoir reçu la médaille d’argent aux Asia Beer Awards en 2013. Les amateurs apprécient la Tongerlo NOX pour sa délicieuse touche veloutée de vanille et son amertume délicat de chocolat noir."
            },
            "datePublished": "2018-05-08T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Lors de la dernière édition de la [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) à Göteborg en Suède, un jury professionnel a décerné la médaille d’or dans la catégorie « Ale 5,1 - 7% » à notre [Tongerlo NOX](https://haacht.com/fr-be/marques/bieres/tongerlo-nox). La bière d’abbaye brune remporte ainsi sa deuxième récompense prestigieuse, après avoir reçu la médaille d’argent aux Asia Beer Awards en 2013. Les amateurs apprécient la Tongerlo NOX pour sa délicieuse touche veloutée de vanille et son amertume délicat de chocolat noir.\n\n### BEER & WHISKY FAIR\n\nAccueillant quelque 24 000 visiteurs en deux jours, la Beer & Whisky Fair – dont la cinquième édition était organisée cette année – est le plus grand salon de la bière de Suède. Un jury de 18 professionnels a dégusté à l’aveugle plus de 400 bières des quatre coins du monde. Les bières participantes, réparties en onze catégories, selon leur origine, leur type et leur style, ont été jugées avec soin.\n\n### TOUTE LA GAMME TONGERLO ENCENSÉE\n\nLa Tongerlo NOX n’est pas la seule à être reconnue sur la scène internationale comme bière de qualité. En effet, la version blonde, la Tongerlo LUX, est la seule bière belge à avoir été élue meilleure bière au monde, toutes catégories confondues, lors des World Beer Awards de 2014. Trois ans plus tôt, la bière triple Tongerlo PRIOR avait décroché le prix de la meilleure bière d’abbaye/bière trappiste blonde.\n\nBaudouin van der Kelen de la Brasserie Haacht est fier de la reconnaissance dont jouit Tongerlo NOX : « Tongerlo est une valeur sûre en Belgique comme à l’étranger. Le fait que notre bière d’abbaye belge authentique continue d’enregistrer de bons résultats lors de prestigieux événements internationaux récompense le savoir-faire de notre maître brasseur et de tous nos collaborateurs, qui œuvrent chaque jour pour transmettre à tous notre plaisir de brassage. »\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c2D3XxTztaAS6Yuw8umaUcM___fr-BE",
            "slug": "brasserie-haacht-s-invite-dans-des-festivals-avec-primus",
            "title": "La Brasserie Haacht s’invite dans des festivals et des événements avec sa pils Primus",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/be98605360b4a03d4d55912aa5f3c12c/NB-mei-Primus-op-events-Lennen-Descamps057.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "La Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire, a débuté la saison des festivals à la mi-mai avec Fire Is Gold, le tout premier vrai festival de hip-hop de Belgique. Le ton est ainsi immédiatement donné, car la Brasserie Haacht va participer à huit autres festivals ou événements cet été."
            },
            "datePublished": "2017-05-30T00:00+01:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "La Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire, a débuté la saison des festivals à la mi-mai avec Fire Is Gold, le tout premier vrai festival de hip-hop de Belgique. Le ton est ainsi immédiatement donné, car la Brasserie Haacht va participer à huit autres festivals ou événements cet été avec sa pils Primus, dont Paradise City, WECANDANCE, Gentse Feesten, W-Festival et Kamping Kitsch. Laundry Day et Elrow vont s’ajouter dès 2018 et ce jusqu’en 2019.\n\nLa Primus est bien connue dans l’Horeca depuis des années, et la marque est en train de renforcer sa présence chez les détaillants. Dans les prochains mois, la Brasserie Haacht va partir à la conquête des lieux où des foules se réunissent pour passer un bon moment. Les visiteurs de ces festivals pourront déguster, apprécier et découvrir l’expérience Primus au stand de la marque. Celui-ci illustre le caractère unique et qualitatif que défend la Brasserie Haacht avec la Primus.\n\nLa Primus est et reste la pils par excellence pour ceux qui vivent comme ça leur chante. Ils suivent leur propre chemin sans tenir compte des tendances ni des modes. C’est une bière destinée aux audacieux qui font ce qu’ils aiment, même si ce n’est pas dans la norme. C’est ce que reflètent parfaitement les festivals et les événements que la Brasserie Haacht a choisi de sponsoriser avec Primus.\n\n\n### Vous pourrez déguster une Primus fraîche aux festivals ou événements suivants\n\n- Paradise City – du 23 au 25 juin 2017 inclus\n- Gentse Feesten – du 14 au 23 juillet 2017 inclus\n- Cirque Magique – du 4 au 6 août 2017 inclus\n- Nostalgie Beach Festival – 12 août 2017\n- WECANDANCE – 12 et 13 août 2017\n- W-Festival – du 18 au 20 août 2017 inclus\n- Kamping Kitsch – 26 août 2017\n- Antwerp City Drops – 23 et 24 septembre 2017\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c1QV4vKZVR2AuiieyCuasMQ___fr-BE",
            "slug": "dummy",
            "title": null,
            "titleImage": null,
            "shortDescription": {
              "shortDescription": " "
            },
            "datePublished": null,
            "fullDescription": null
          }
        },
        {
          "node": {
            "id": "c5CKGCrcMLYyU6My40k2qMS___fr-BE",
            "slug": "la-super-8-blanche-est-la-meilleure-biere-blanche-belge",
            "title": "La SUPER 8 Blanche est la meilleure bière blanche belge",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/d2941fed57ca5236a9e75cbae2f79228/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Ce vendredi 11 août, la SUPER 8 Blanche, la toute nouvelle bière de la gamme SUPER 8 de la Brasserie Haacht, a été élue meilleure ‘Belgian Style Witbier’ de Belgique aux World Beer Awards. À l’échelle mondiale, cette bière a échappé de peu à la première place au profit de la bière brésilienne Búzios Brigitte."
            },
            "datePublished": "2017-08-18T00:00+01:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Ce vendredi 11 août, la SUPER 8 Blanche, la toute nouvelle bière de la gamme SUPER 8 de la Brasserie Haacht, a été élue meilleure ‘Belgian Style Witbier’ de Belgique aux World Beer Awards. À l’échelle mondiale, cette bière a échappé de peu à la première place au profit de la bière brésilienne Búzios Brigitte.\n\nLancée en mai, la SUPER 8 Blanche est la troisième bière de la gamme SUPER 8 de la Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire. Cette bière blanche épicée est relevée avec de la coriandre fraîchement moulue et un beau zeste d’orange, et réinvente ainsi de façon surprenante un goût familier.\n\n« Nous sommes très fiers que notre SUPER 8 Blanche soit appréciée du grand public comme des experts aussi peu de temps après son lancement », déclare Boudewijn van der Kelen, Directeur du marketing de la Brasserie Haacht. « Le prix que nous avons reçu aux World Beer Awards est un bel encouragement pour notre brasserie indépendante. Nous ne comptons pas nous arrêter en si bon chemin et allons continuer à lancer de nouvelles bières. »\n\nPour avoir plus d’informations, rendez-vous sur [www.super8.be](http://www.super8.be) ou [www.worldbeerawards.com](http://www.worldbeerawards.com/)."
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c5s0L0r9gc0k4ccIg6oeI6e___fr-BE",
            "slug": "la-primus-et-la-super-8-recompensees-au-brussels-beer-challenge",
            "title": "La Primus et la SUPER 8 IPA de la Brasserie Haacht récompensées au Brussels Beer Challenge",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/cee6d699abbe7d6bf1680842794624f6/NB-november-Super-8_IPA_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "La Brasserie Haacht a été doublement médaillée lors de la sixième édition du prestigieux Brussels Beer Challenge à Horeca Expo. La SUPER 8 IPA a ainsi été élue meilleure « Pale & Amber Ale: English IPA », tandis que la pils Primus a remporté l’argent dans la catégorie « Lager: Helles »"
            },
            "datePublished": "2017-11-21T00:00+01:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "La Brasserie Haacht a été doublement médaillée lors de la sixième édition du prestigieux Brussels Beer Challenge à Horeca Expo. La SUPER 8 IPA a ainsi été élue meilleure « Pale & Amber Ale: English IPA », tandis que la pils Primus a remporté l’argent dans la catégorie « Lager: Helles ».\n\nBaudouin van der Kelen, directeur marketing de la Brasserie Haacht, ne cache pas sa fierté : « Nous avons lancé nos deux premières bières SUPER 8 en novembre 2016. Un an plus tard, notre nouvelle gamme compte déjà quatre bières et a décroché deux très beaux prix. Aux World Beer Awards, notre SUPER 8 Blanche a été élue meilleure bière blanche belge, et maintenant, c’est notre SUPER 8 IPA qui se distingue au Brussels Beer Challenge. »\nAvec la gamme SUPER 8, la Brasserie Haacht joue la carte de l’innovation. « Nous nous réjouissons que notre gamme SUPER 8, qui présente de délicieuses bières sortant de l’ordinaire, soit si bien accueillie, et ce non seulement par les vrais amateurs de bière, mais aussi par le grand public. Ces deux prix prouvent que le choix de l’innovation est le seul qui s’impose, même pour une brasserie authentique comme la Brasserie Haacht », ajoute Baudouin van der Kelen.\n\nLa reconnaissance de la Primus, l’emblème de la brasserie, fait tout autant plaisir à la Brasserie Haacht. « La Primus est depuis toujours une valeur sûre du paysage brassicole belge. Le fait qu’outre nos bières SUPER 8, nous nous positionnions si bien avec notre pils classique est une véritable récompense pour nos collaborateurs qui s’investissent chaque jour pour faire profiter tout le monde de notre authentique plaisir de brasser des produits de qualité », conclut Baudouin van der Kelen.\n\n### Brussels Beer Challenge\n\nDurant trois jours, un panel de 85 connaisseurs internationalement reconnus a goûté 1.400 bières provenant de 37 pays. Les bières participantes sont réparties en catégories à base de leur origine, de leur type et de leur style pour être ensuite soumises à l’évaluation des juges. Au bout des trois jours de dégustation, les meilleures bières de chaque catégorie se sont vu décerner une médaille d’or, d’argent ou de bronze à Horeca Expo à Gand."
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c4tGcIu115Sc6sMw4GkgqKq___en",
            "slug": "tongerlo-nox-wins-award-in-sweden",
            "title": "Tongerlo NOX wins award in Sweden",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/61bf32287ea0ddf4d8bef0c7b704c5cc/NB-april-Tongerlo_NOX_award_Zweden.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "The professional jury of the Beer & Whisky Fair in the Swedish city of Gothenburg has awarded our Tongerlo NOX with a gold medal in the category ‘Ale 5.1 – 7%’. It’s the brown abbey beer’s second prestigious award, after winning a silver medal at the Asia Beer Awards in 2013. Fans particularly appreciate the Tongerlo NOX because of its delicious velvety touch of vanilla and its delicate dark chocolate bitterness. "
            },
            "datePublished": "2018-05-08T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "The professional jury of the [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) in the Swedish city of Gothenburg has awarded our [Tongerlo NOX](https://haacht.com/en/brands/beers/tongerlo-nox/) with a gold medal in the category ‘Ale 5.1 – 7%’. It’s the brown abbey beer’s second prestigious award, after winning a silver medal at the Asia Beer Awards in 2013. Fans particularly appreciate the Tongerlo NOX because of its delicious velvety touch of vanilla and its delicate dark chocolate bitterness. \n\n### BEER & WHISKY FAIR\n\nThe Beer & Whisky Fair is Sweden’s largest beer fair, attracting 24,000 visitors over the course of two days. This year, the fair was organized for the fifth time in a row. A jury of 18 professionals did a blind tasting of more than 400 beers from all over the world. The participating beers are subdivided into eleven different categories, based on origin, type and style, after which they are carefully tasted and judged.\n\n### ENTIRE TONGERLO ASSORTMENT PRAISED\n\nIt’s not just the Tongerlo NOX that is internationally recognized as a unique quality beer. At the World Beer Awards in 2014, its blonde variety, the Tongerlo LUX, was the first and only Belgian beer ever to be named the best beer in the world across all categories. Three years earlier, at the World Beer Awards 2011, the triple Tongerlo PRIOR took home the award for best blonde abbey beer/trappist beer.\n\nBoudewijn van der Kelen, marketing director at Haacht Brewery, is proud of the recognition for Tongerlo NOX: “Tongerlo is an established brand in Belgium as well as abroad. The fact that our authentic Belgian abbey beer keeps scoring so well at prestigious international beer events, is a great reward for our master brewer’s craftmanship and for all the employees who commit themselves every day to make sure everyone can enjoy our work.” \n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c2D3XxTztaAS6Yuw8umaUcM___en",
            "slug": "haacht-brewery-targets-festivals-and-events-with-Primus",
            "title": "Haacht Brewery targets festivals and events with its Primus premium Pilsner beer",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/a317f69b2ae5109e9154d7210ccd2270/NB-mei-Primus-op-events-Lennen-Descamps057__1_.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Haacht Brewery, a Belgian family brewery with a rich history, kicked off the festival season in mid-May at Fire is Gold, Belgium’s first ever real hip-hop festival. But that’s not all, as Haacht Brewery is sponsoring eight other festivals or events this summer."
            },
            "datePublished": "2017-05-30T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Haacht Brewery, a Belgian family brewery with a rich history, kicked off the festival season in mid-May at Fire is Gold, Belgium’s first ever real hip-hop festival. But that’s not all, as Haacht Brewery is sponsoring eight other festivals or events this summer with its Primus premium Pilsner beer, including Paradise City, WECANDANCE, the Ghent Festivities, W-Festival and Kamping Kitsch. During the 2018 and 2019 festival season, this impressive line-up will be extended with Laundry Day and Elrow.\n\nFor many years, Primus has been served in bars and restaurants and the brand is currently also strengthening its presence in retail. Over the coming months, Haacht Brewery will be heading out to even more venues where large crowds like to gather and have fun, so everyone can taste and enjoy every aspect of the Primus brand experience. The stands are designed to reflect Primus’s brand values of quality and uniqueness.\n\nPrimus is and always will be the Pilsner beer for consumers who believe in making their own choices instead of following trends and hypes. This beer is for the bold at heart, who like to chart their own course, even though it may be different from everyone else’s. And the festivals and events that Haacht Brewery has chosen to sponsor with Primus echo this sentiment.\n\n### Enjoy a freshly-tapped Primus this summer at the following festivals and events \n\n- Paradise City – June 23th to 25th 2017\n- Gentse Feesten – July 14th to 23th 2017\n- Cirque Magique – August 4th to 6th 2017\n- Nostalgie Beach Festival – August 12th 2017\n- WECANDANCE – August 12th and 13th 2017\n- W-Festival – August 18th to 20th 2017\n- Kamping Kitsch – August 26th 2017\n- Antwerp City Drops – September 23th and 24th 2017\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c1QV4vKZVR2AuiieyCuasMQ___en",
            "slug": "dummy",
            "title": null,
            "titleImage": null,
            "shortDescription": {
              "shortDescription": " "
            },
            "datePublished": null,
            "fullDescription": null
          }
        },
        {
          "node": {
            "id": "c5CKGCrcMLYyU6My40k2qMS___en",
            "slug": "super-8-blanche-is-the-best-belgian-white-beer",
            "title": "SUPER 8 Blanche is the best Belgian white beer",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/035be366331e653f667336ce96e6fa80/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "On Friday 11 August, SUPER 8 Blanche, the newest member of Haacht Brewery’s SUPER 8 family, was named ‘Best Belgian style Witbier’ at the World Beer Awards, narrowly losing out on the world title against a Brazilian beer, Búzios Brigitte."
            },
            "datePublished": "2017-08-18T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "On Friday 11 August, SUPER 8 Blanche, the newest member of Haacht Brewery’s SUPER 8 family, was named ‘Best Belgian style Witbier’ at the World Beer Awards, narrowly losing out on the world title against a Brazilian beer, Búzios Brigitte.\n\nSUPER 8 Blanche was launched this past May, as the third beer in the SUPER 8 range from Haacht Brewery, a Belgian family brewery with a rich history. This spicy ‘witbier’ (white beer) or ‘bière blanche’ delivers a delicious kick of freshly-ground coriander and plenty of orange peel, adding a novel twist to a familiar flavour.\n\n“We are very proud that our SUPER 8 Blanche is such a success, so soon after its launch, with both the public and beer connoisseurs”, says Boudewijn van der Kelen, Marketing Director at Haacht Brewery. “The recognition at the World Beer Awards was a huge confidence booster for our independent brewery, inspiring us to continue to develop new beers spurred on by our desire for innovation.”\n\nCheck [www.super8.be](http://www.super8.be) or [www.worldbeerawards.com](http://www.worldbeerawards.com/) for further information.\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c5s0L0r9gc0k4ccIg6oeI6e___en",
            "slug": "primus-and-super-8-awarded-at-the-brussels-beer-challenge",
            "title": "Haacht Brewery receives awards for its Primus and SUPER 8 IPA at the Brussels Beer Challenge",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/1172c489121610f55c98f83a2f86df7b/NB-november-Super-8_IPA_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Haacht Brewery took home two medals during the sixth edition of the prestigious Brussels Beer Challenge at Horeca Expo. SUPER 8 IPA was named ‘Pale & Amber Ale: English IPA’, while its Primus premium Pilsner beer won the silver medal in the ‘Lager: Helles’ category."
            },
            "datePublished": "2017-11-21T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Haacht Brewery took home two medals during the sixth edition of the prestigious Brussels Beer Challenge at Horeca Expo. SUPER 8 IPA was named ‘Pale & Amber Ale: English IPA’, while its Primus premium Pilsner beer won the silver medal in the ‘Lager: Helles’ category.\n\nBoudewijn van der Kelen, Marketing Director at Haacht Brewery, is very proud: “We launched our first two SUPER 8 beers in November 2016. Just one year later, this new range has expanded to four beers and has already bagged two great awards. Our SUPER 8 Blanche was already named Best Belgian-style Witbier at the World Beer Awards and now our SUPER 8 IPA has won an award during the Brussels Beer Challenge.” Haacht Brewery has gone down the path of innovation with its SUPER 8 range. “We are happy that our SUPER 8 range of deliciously unexpected beers is such a success, both with beer connoisseurs and the public. These two awards prove that innovation is the only right strategy for an authentic brewery such as Haacht Brewery”, says Boudewijn van der Kelen.\n\nHaacht Brewery is also very happy with the recognition for its flagship brand Primus. “Primus has been a popular brand on the Belgian beer landscape for many years. The fact that our classic Pilsner beer continues to score well, in addition to our SUPER 8 beers, is really a reward for all our employees, who work tirelessly every day, so everyone can enjoy our authentic brewing experience”, Boudewijn van der Kelen concludes.\n\n### Brussels Beer Challenge\n\nA panel of 85 internationally-renowned beer connoisseurs spend three days tasting 1,400 beers from 37 countries. The participating beers are subdivided into categories, based on origin, type and style, after which they are judged. After a three-day challenge, the best beers in each category were awarded a gold, silver or bronze medal during Horeca Expo in Ghent.\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c4tGcIu115Sc6sMw4GkgqKq___fr",
            "slug": "tongerlo-nox-recompensee-en-suede",
            "title": "Tongerlo NOX récompensée en Suède",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/affb33adee235b2d8f65da5330f15d00/NB-april-Tongerlo_NOX_award_Zweden.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Lors de la dernière édition de la Beer & Whisky Fair à Göteborg en Suède, un jury professionnel a décerné la médaille d’or dans la catégorie « Ale 5,1 - 7% » à notre Tongerlo NOX. La bière d’abbaye brune remporte ainsi sa deuxième récompense prestigieuse, après avoir reçu la médaille d’argent aux Asia Beer Awards en 2013. Les amateurs apprécient la Tongerlo NOX pour sa délicieuse touche veloutée de vanille et son amertume délicat de chocolat noir."
            },
            "datePublished": "2018-05-08T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Lors de la dernière édition de la [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) à Göteborg en Suède, un jury professionnel a décerné la médaille d’or dans la catégorie « Ale 5,1 - 7% » à notre [Tongerlo NOX](https://haacht.com/fr/marques/bieres/tongerlo-nox). La bière d’abbaye brune remporte ainsi sa deuxième récompense prestigieuse, après avoir reçu la médaille d’argent aux Asia Beer Awards en 2013. Les amateurs apprécient la Tongerlo NOX pour sa délicieuse touche veloutée de vanille et son amertume délicat de chocolat noir.\n\n### BEER & WHISKY FAIR\n\nAccueillant quelque 24 000 visiteurs en deux jours, la Beer & Whisky Fair – dont la cinquième édition était organisée cette année – est le plus grand salon de la bière de Suède. Un jury de 18 professionnels a dégusté à l’aveugle plus de 400 bières des quatre coins du monde. Les bières participantes, réparties en onze catégories, selon leur origine, leur type et leur style, ont été jugées avec soin.\n\n### TOUTE LA GAMME TONGERLO ENCENSÉE\n\nLa Tongerlo NOX n’est pas la seule à être reconnue sur la scène internationale comme bière de qualité. En effet, la version blonde, la Tongerlo LUX, est la seule bière belge à avoir été élue meilleure bière au monde, toutes catégories confondues, lors des World Beer Awards de 2014. Trois ans plus tôt, la bière triple Tongerlo PRIOR avait décroché le prix de la meilleure bière d’abbaye/bière trappiste blonde.\n\nBaudouin van der Kelen de la Brasserie Haacht est fier de la reconnaissance dont jouit Tongerlo NOX : « Tongerlo est une valeur sûre en Belgique comme à l’étranger. Le fait que notre bière d’abbaye belge authentique continue d’enregistrer de bons résultats lors de prestigieux événements internationaux récompense le savoir-faire de notre maître brasseur et de tous nos collaborateurs, qui œuvrent chaque jour pour transmettre à tous notre plaisir de brassage. »\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c2D3XxTztaAS6Yuw8umaUcM___fr",
            "slug": "brasserie-haacht-s-invite-dans-des-festivals-avec-primus",
            "title": "La Brasserie Haacht s’invite dans des festivals et des événements avec sa pils Primus",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/93fff768e959e8d5e3dbccfafc03b07f/NB-mei-Primus-op-events-Lennen-Descamps057__1_.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "La Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire, a débuté la saison des festivals à la mi-mai avec Fire Is Gold, le tout premier vrai festival de hip-hop de Belgique. Le ton est ainsi immédiatement donné, car la Brasserie Haacht va participer à huit autres festivals ou événements cet été."
            },
            "datePublished": "2017-05-30T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "La Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire, a débuté la saison des festivals à la mi-mai avec Fire Is Gold, le tout premier vrai festival de hip-hop de Belgique. Le ton est ainsi immédiatement donné, car la Brasserie Haacht va participer à huit autres festivals ou événements cet été avec sa pils Primus, dont Paradise City, WECANDANCE, Gentse Feesten, W-Festival et Kamping Kitsch. Laundry Day et Elrow vont s’ajouter dès 2018 et ce jusqu’en 2019.\n\nLa Primus est bien connue dans l’Horeca depuis des années, et la marque est en train de renforcer sa présence chez les détaillants. Dans les prochains mois, la Brasserie Haacht va partir à la conquête des lieux où des foules se réunissent pour passer un bon moment. Les visiteurs de ces festivals pourront déguster, apprécier et découvrir l’expérience Primus au stand de la marque. Celui-ci illustre le caractère unique et qualitatif que défend la Brasserie Haacht avec la Primus.\n\nLa Primus est et reste la pils par excellence pour ceux qui vivent comme ça leur chante. Ils suivent leur propre chemin sans tenir compte des tendances ni des modes. C’est une bière destinée aux audacieux qui font ce qu’ils aiment, même si ce n’est pas dans la norme. C’est ce que reflètent parfaitement les festivals et les événements que la Brasserie Haacht a choisi de sponsoriser avec Primus.\n\n\n### Vous pourrez déguster une Primus fraîche aux festivals ou événements suivants\n\n- Paradise City – du 23 au 25 juin 2017 inclus\n- Gentse Feesten – du 14 au 23 juillet 2017 inclus\n- Cirque Magique – du 4 au 6 août 2017 inclus\n- Nostalgie Beach Festival – 12 août 2017\n- WECANDANCE – 12 et 13 août 2017\n- W-Festival – du 18 au 20 août 2017 inclus\n- Kamping Kitsch – 26 août 2017\n- Antwerp City Drops – 23 et 24 septembre 2017\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c1QV4vKZVR2AuiieyCuasMQ___fr",
            "slug": "dummy",
            "title": null,
            "titleImage": null,
            "shortDescription": {
              "shortDescription": " "
            },
            "datePublished": null,
            "fullDescription": null
          }
        },
        {
          "node": {
            "id": "c5CKGCrcMLYyU6My40k2qMS___fr",
            "slug": "la-super-8-blanche-est-la-meilleure-biere-blanche-belge",
            "title": "La SUPER 8 Blanche est la meilleure bière blanche belge",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/e000db391cbbfd660b276b44e28045c7/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Ce vendredi 11 août, la SUPER 8 Blanche, la toute nouvelle bière de la gamme SUPER 8 de la Brasserie Haacht, a été élue meilleure ‘Belgian Style Witbier’ de Belgique aux World Beer Awards. À l’échelle mondiale, cette bière a échappé de peu à la première place au profit de la bière brésilienne Búzios Brigitte."
            },
            "datePublished": "2017-08-18T00:00+01:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Ce vendredi 11 août, la SUPER 8 Blanche, la toute nouvelle bière de la gamme SUPER 8 de la Brasserie Haacht, a été élue meilleure ‘Belgian Style Witbier’ de Belgique aux World Beer Awards. À l’échelle mondiale, cette bière a échappé de peu à la première place au profit de la bière brésilienne Búzios Brigitte.\n\nLancée en mai, la SUPER 8 Blanche est la troisième bière de la gamme SUPER 8 de la Brasserie Haacht, une brasserie familiale belge riche d’une longue histoire. Cette bière blanche épicée est relevée avec de la coriandre fraîchement moulue et un beau zeste d’orange, et réinvente ainsi de façon surprenante un goût familier.\n\n« Nous sommes très fiers que notre SUPER 8 Blanche soit appréciée du grand public comme des experts aussi peu de temps après son lancement », déclare Boudewijn van der Kelen, Directeur du marketing de la Brasserie Haacht. « Le prix que nous avons reçu aux World Beer Awards est un bel encouragement pour notre brasserie indépendante. Nous ne comptons pas nous arrêter en si bon chemin et allons continuer à lancer de nouvelles bières. »\n\nPour avoir plus d’informations, rendez-vous sur [www.super8.be](http://www.super8.be) ou [www.worldbeerawards.com](http://www.worldbeerawards.com/)."
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c5s0L0r9gc0k4ccIg6oeI6e___fr",
            "slug": "la-primus-et-la-super-8-recompensees-au-brussels-beer-challenge",
            "title": "La Primus et la SUPER 8 IPA de la Brasserie Haacht récompensées au Brussels Beer Challenge",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/76f245175573b04432b0437f10e60dd4/NB-november-Super-8_IPA_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "La Brasserie Haacht a été doublement médaillée lors de la sixième édition du prestigieux Brussels Beer Challenge à Horeca Expo. La SUPER 8 IPA a ainsi été élue meilleure « Pale & Amber Ale: English IPA », tandis que la pils Primus a remporté l’argent dans la catégorie « Lager: Helles »"
            },
            "datePublished": "2017-11-21T00:00+01:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "La Brasserie Haacht a été doublement médaillée lors de la sixième édition du prestigieux Brussels Beer Challenge à Horeca Expo. La SUPER 8 IPA a ainsi été élue meilleure « Pale & Amber Ale: English IPA », tandis que la pils Primus a remporté l’argent dans la catégorie « Lager: Helles ».\n\nBaudouin van der Kelen, directeur marketing de la Brasserie Haacht, ne cache pas sa fierté : « Nous avons lancé nos deux premières bières SUPER 8 en novembre 2016. Un an plus tard, notre nouvelle gamme compte déjà quatre bières et a décroché deux très beaux prix. Aux World Beer Awards, notre SUPER 8 Blanche a été élue meilleure bière blanche belge, et maintenant, c’est notre SUPER 8 IPA qui se distingue au Brussels Beer Challenge. »\nAvec la gamme SUPER 8, la Brasserie Haacht joue la carte de l’innovation. « Nous nous réjouissons que notre gamme SUPER 8, qui présente de délicieuses bières sortant de l’ordinaire, soit si bien accueillie, et ce non seulement par les vrais amateurs de bière, mais aussi par le grand public. Ces deux prix prouvent que le choix de l’innovation est le seul qui s’impose, même pour une brasserie authentique comme la Brasserie Haacht », ajoute Baudouin van der Kelen.\n\nLa reconnaissance de la Primus, l’emblème de la brasserie, fait tout autant plaisir à la Brasserie Haacht. « La Primus est depuis toujours une valeur sûre du paysage brassicole belge. Le fait qu’outre nos bières SUPER 8, nous nous positionnions si bien avec notre pils classique est une véritable récompense pour nos collaborateurs qui s’investissent chaque jour pour faire profiter tout le monde de notre authentique plaisir de brasser des produits de qualité », conclut Baudouin van der Kelen.\n\n### Brussels Beer Challenge\n\nDurant trois jours, un panel de 85 connaisseurs internationalement reconnus a goûté 1.400 bières provenant de 37 pays. Les bières participantes sont réparties en catégories à base de leur origine, de leur type et de leur style pour être ensuite soumises à l’évaluation des juges. Au bout des trois jours de dégustation, les meilleures bières de chaque catégorie se sont vu décerner une médaille d’or, d’argent ou de bronze à Horeca Expo à Gand."
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c4tGcIu115Sc6sMw4GkgqKq___nl",
            "slug": "tongerlo-nox-valt-in-zweden-in-de-prijzen",
            "title": "Tongerlo NOX valt in Zweden in de prijzen",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5nomVXzab6sUuAeAu66AYo/5315009bfc80e24ee7224437332977c5/NB-april-Tongerlo_NOX_award_Zweden.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Op de voorbije editie van de Beer & Whisky Fair in het Zweedse Göteborg heeft een professionele jury onze Tongerlo NOX bekroond met een gouden medaille in de categorie 'Ale 5,1 - 7%'. Het is voor het bruine abdijbier de tweede prestigieuze bekroning, na een zilveren medaille op de Asia Beer Awards in 2013. Liefhebbers appreciëren de Tongerlo NOX in het bijzonder om zijn heerlijke fluweeltoets van vanille en zijn delicate bitterheid van fondantchocolade."
            },
            "datePublished": "2018-05-08T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Op de voorbije editie van de [Beer & Whisky Fair](https://olochwhiskymassa.se/english/) in het Zweedse Göteborg heeft een professionele jury onze [Tongerlo NOX](https://haacht.com/nl-BE/merken/bieren/tongerlo-nox) bekroond met een gouden medaille in de categorie 'Ale 5,1 - 7%'. Het is voor het bruine abdijbier de tweede prestigieuze bekroning, na een zilveren medaille op de Asia Beer Awards in 2013. Liefhebbers appreciëren de Tongerlo NOX in het bijzonder om zijn heerlijke fluweeltoets van vanille en zijn delicate bitterheid van fondantchocolade.\n\n### BEER & WHISKY FAIR\n\nDe Beer & Whisky Fair is met 24.000 bezoekers over twee dagen de grootste bierbeurs in Zweden en was dit jaar aan haar vijfde editie toe. Een 18-koppige professionele jury proefde blind meer dan 400 bieren uit alle uithoeken van de wereld. De deelnemende bieren worden onderverdeeld in elf verschillende categorieën, gebaseerd op origine, type en stijl, en vervolgens gewikt en gewogen.\n\n### HELE TONGERLO-GAMMA GEROEMD\n\nNiet enkel de Tongerlo NOX wordt internationaal erkend als een kwaliteitsbier met eigenheid. Zo werd de blonde variant, de Tongerlo LUX, tijdens de World Beer Awards in 2014 als enige Belgische bier ooit uitgeroepen tot beste bier ter wereld over alle categorieën heen. Drie jaar eerder kaapte het tripelbier Tongerlo PRIOR er al de prijs voor beste blonde abdijbier/trappistenbier weg.\n\nBoudewijn van der Kelen van Brouwerij Haacht is trots op de erkenning voor Tongerlo NOX: “Tongerlo is een gevestigde waarde in binnen- en buitenland. Dat ons authentiek, Belgisch abdijbier hoge ogen blijft gooien tijdens internationale, prestigieuze bierevents, is een beloning voor het vakmanschap van onze brouwmeester en voor al onze medewerkers die zich dagelijks inzetten om iedereen van ons brouwplezier te laten genieten.”\n"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c2D3XxTztaAS6Yuw8umaUcM___nl",
            "slug": "brouwerij-haacht-zet-in-met-pilsbier-Primus-op-festivals-en-events",
            "title": "Brouwerij Haacht zet met haar pilsbier Primus stevig in op festivals en events",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6UZ7v8VpHaKWecC4qWCCki/8003813231ba78f826d6698cd4d7eddc/NB-mei-Primus-op-events-Lennen-Descamps057__1_.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis, trapte de festivalperiode half mei af op Fire Is Gold, het allereerste echte hiphopfestival van België. Daarmee is de toon meteen goed gezet voor de komende festivalzomer."
            },
            "datePublished": "2017-05-30T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis, trapte de festivalperiode half mei af op Fire Is Gold, het allereerste echte hiphopfestival van België. Daarmee is de toon meteen goed gezet, want Brouwerij Haacht is met haar pilsbier Primus deze zomer ook nog aanwezig op acht andere festivals of events, waaronder Paradise City, WECANDANCE, Gentse Feesten, W-Festival en Kamping Kitsch. Voor de festivalperiode van 2018 en 2019 komen daar ook nog Laundry Day en Elrow bij.\n\nPrimus is al sinds jaar en dag in de horeca te vinden, en in de retail is het merk zijn huidige aanwezigheid aan het versterken. En de komende maanden trekt Brouwerij Haacht nóg meer dan vroeger naar locaties waar de grote massa gezellig samenkomt om te genieten. Op die festivals kunnen bezoekers de hele merkbeleving van Primus proeven, voelen en op-en-top beleven aan de Primus-stand. Die standen zijn een verlengstuk van het kwalitatieve en eigenzinnige karakter waar Brouwerij Haacht met Primus voor staat.\n \nPrimus is en blijft hét pilsbier bij uitstek voor degenen die eigen keuzes maken in het leven. Ze varen hun eigen koers, ongeacht trends en hypes. Het is een bier voor durvers die doen wat hen het beste lijkt, ook al is dat niet de gangbare norm. Dat komt perfect tot uiting op de festivals en events die Brouwerij Haacht heeft uitgekozen om met Primus te sponsoren.\n\n\n### Op deze festivals of events geniet je deze zomer van fris getapte Primus\n\n- Paradise City – 23 t.e.m. 25 juni 2017\n- Gentse Feesten – 14 t.e.m. 23 juli 2017\n- Cirque Magique – 4 t.e.m. 6 augustus 2017\n- Nostalgie Beach Festival – 12 augustus 2017\n- WECANDANCE – 12 en 13 augustus 2017\n- W-Festival – 18 t.e.m. 20 augustus 2017\n- Kamping Kitsch – 26 augustus 2017\n- Antwerp City Drops – 23 en 24 september 2017"
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c1QV4vKZVR2AuiieyCuasMQ___nl",
            "slug": "dummy",
            "title": null,
            "titleImage": null,
            "shortDescription": {
              "shortDescription": " "
            },
            "datePublished": null,
            "fullDescription": null
          }
        },
        {
          "node": {
            "id": "c5CKGCrcMLYyU6My40k2qMS___nl",
            "slug": "super-8-blanche-het-beste-belgische-witbier",
            "title": "SUPER 8 Blanche is het beste Belgische witbier",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/cc385d74a4fe6bd7e526d636c7d3bb0c/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Op vrijdag 11 augustus is SUPER 8 Blanche, de jongste telg in het SUPER 8-gamma van Brouwerij Haacht, op de World Beer Awards uitgeroepen tot beste ‘Belgian Style Witbier’ van België.  Op wereldniveau moest het bier nipt de duimen leggen tegen het Braziliaanse Búzios Brigitte.\n"
            },
            "datePublished": "2017-08-18T00:00+02:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Op vrijdag 11 augustus is SUPER 8 Blanche, de jongste telg in het SUPER 8-gamma van Brouwerij Haacht, op de World Beer Awards uitgeroepen tot beste ‘Belgian Style Witbier’ van België.  Op wereldniveau moest het bier nipt de duimen leggen tegen het Braziliaanse Búzios Brigitte.\n\nSUPER 8 Blanche werd afgelopen mei gelanceerd en is het derde bier in het SUPER 8-gamma van Brouwerij Haacht, een Belgische familiebrouwerij met een rijke geschiedenis. Het pittige witbier is stevig gekruid met versgemalen koriander en een ferme portie appelsienschil, wat zorgt voor een prikkelende interpretatie van een vertrouwde smaak.\n \n“We zijn ontzettend trots dat onze SUPER 8 Blanche zo kort na zijn lancering wordt gesmaakt bij zowel het grote publiek als echte kenners”, zegt Boudewijn van der Kelen, Marketing Directeur van Brouwerij Haacht. “De erkenning op de World Beer Awards is een grote stimulans voor onze onafhankelijke brouwerij. Onder impuls van innovatie blijven we steeds nieuwe bieren lanceren.”\n \nNeem voor meer informatie een kijkje op [www.super8.be](http://www.super8.be) en [www.worldbeerawards.com](http://www.worldbeerawards.com/)."
                }
              }
            }
          }
        },
        {
          "node": {
            "id": "c5s0L0r9gc0k4ccIg6oeI6e___nl",
            "slug": "brouwerij-haacht-wint-met-primus-super-8-op-brussels-beer-challenge",
            "title": "Brouwerij Haacht wint met Primus en SUPER 8 IPA op Brussels Beer Challenge",
            "titleImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5InaCQjWneCEuiuIsIOkCw/40607a9de3d645d00857fd7271ef4d31/NB-november-Super-8_IPA_Glas_Fles.jpg"
              }
            },
            "shortDescription": {
              "shortDescription": "Brouwerij Haacht is tijdens de zesde editie van de prestigieuze Brussels Beer Challenge op Horeca Expo dubbel in de prijzen gevallen. SUPER 8 IPA werd uitgeroepen tot beste ‘Pale & Amber Ale: English IPA’, terwijl het pilsbier Primus zilver won in de categorie ‘Lager: Helles’."
            },
            "datePublished": "2017-11-21T00:00+01:00",
            "fullDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Brouwerij Haacht is tijdens de zesde editie van de prestigieuze Brussels Beer Challenge op Horeca Expo dubbel in de prijzen gevallen. SUPER 8 IPA werd uitgeroepen tot beste ‘Pale & Amber Ale: English IPA’, terwijl het pilsbier Primus zilver won in de categorie ‘Lager: Helles’.\n\nBoudewijn van der Kelen, marketingdirecteur bij Brouwerij Haacht reageert trots: *“We lanceerden onze eerste twee SUPER 8-bieren in november 2016. Een jaar later telt dit nieuwe gamma  vier bieren en heeft het twee mooie awards in de kast staan. Op de World Beer Awards werd onze SUPER 8 Blanche al uitgeroepen tot beste Belgische witbier, en nu valt ook onze SUPER 8 IPA in de prijzen tijdens de Brussels Beer Challenge.”*\nMet SUPER 8 trekt Brouwerij Haacht de kaart van innovatie. *“We zijn verheugd dat ons SUPER 8-gamma, dat staat voor lekker onverwachte bieren, echt aanslaat. Niet alleen bij de bierkenners, maar ook bij het grote publiek. Deze twee awards bewijzen dat de keuze voor innovatie ook voor een authentieke brouwerij als Brouwerij Haacht de enige juiste is”*, zegt Boudewijn van der Kelen.\nOok de erkenning voor paradepaardje Primus doet Brouwerij Haacht plezier. “Primus is al sinds jaar en dag een gevestigde waarde in het Belgische bierlandschap. Dat we naast onze SUPER 8-bieren ook met onze klassieke pils hoge ogen blijven gooien, is een beloning voor al onze medewerkers die zich dagelijks inzetten om iedereen van ons authentieke brouwplezier te laten genieten”, besluit Boudewijn van der Kelen.\n\n\n### Brussels Beer Challenge\n\nDrie dagen lang proefde een panel van 85 internationaal gereputeerde bierkenners 1.400 bieren uit 37 landen. De deelnemende bieren worden onderverdeeld in categorieën, gebaseerd op origine, type en stijl, en vervolgens gewikt en gewogen. Op het einde van de drie degustatiedagen werden de beste bieren in elke categorie beloond met een gouden, zilveren of bronzen award tijdens Horeca Expo in Gent.\n"
                }
              }
            }
          }
        }
      ]
    },
    "footerMenu": {
      "contactReference": {
        "title": "Contact",
        "linkSlug": "contact"
      },
      "facebookLink": "https://www.facebook.com/brouwerijhaacht/",
      "defaultImage": {
        "file": {
          "url": "//images.ctfassets.net/vlb1ben6vtp9/17VX2qzWvEQ4cimGumE0qA/d1028af0f8e7d4fd89f7c07905d7caf6/Haacht_brouwerij_RobTV_Sfeerbeeld-2_tiny.jpg"
        }
      },
      "jobReference": {
        "title": "Jobs",
        "linkSlug": "brouwerij/jobs"
      },
      "shopReference": {
        "title": "Shop",
        "linkSlug": "http://shop.haacht.com/nl"
      },
      "allRightsReserved": "© 2017 Brouwerij Haacht | Bier met liefde gebrouwen, drink je met verstand.",
      "youtubeLink": "https://www.youtube.com/channel/UCGtvk0NOKKDMAn6jgzdhLzw",
      "instagramReference": {
        "title": "Volg ons",
        "linkSlug": "https://www.instagram.com/explore/locations/908868/brouwerij-haacht-brasserie-haacht/"
      },
      "languages": [
        {
          "title": "België",
          "slug": {
            "slug": "nl-be",
            "slugFinal": "nl-be"
          },
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/7vlxp50Zm8OQksWGSOQUe/aade9b975754f602b22b90ca8b029866/belgian-flag.svg"
            }
          }
        },
        {
          "title": "Belgique",
          "slug": {
            "slug": "fr-be",
            "slugFinal": "fr-be/brasserie/articles/actualite"
          },
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/7vlxp50Zm8OQksWGSOQUe/aade9b975754f602b22b90ca8b029866/belgian-flag.svg"
            }
          }
        },
        {
          "title": "English",
          "slug": {
            "slug": "en",
            "slugFinal": "en/brewery/articles/news"
          },
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/3UGd3FD5xum0W2SugM0cUE/db82f2dddd4c5f54a2f1b8f050a58665/English-flag.svg"
            }
          }
        },
        {
          "title": "France",
          "slug": {
            "slug": "fr",
            "slugFinal": "fr/brasserie/articles/actualite"
          },
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/3Hl6w1bRaowyS6GGi2cekw/b25fa6130d195372e297ea16c08e6c66/Frenche-flag.svg"
            }
          }
        },
        {
          "title": "Nederland",
          "slug": {
            "slug": "nl",
            "slugFinal": "nl/brouwerij/artikels/nieuws"
          },
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/4aSJ0Dwr9Yk6cwuEGyeaA0/0e9fd5bc92d34f7a2d1c48b80d40470b/Dutch-flag.svg"
            }
          }
        }
      ],
      "footerMenu": [
        {
          "title": "Brouwerij",
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/6G8dJxxGOQaEeSgo6MMIgW/12e92bd77379a871ec64c6efdbed463a/brouwerij-haacht-ketels_tiny.jpg"
            }
          },
          "links": [
            {
              "title": "Overzicht",
              "slug": {
                "id": "pjUkjYcbo4u8G2YMiY6Gq",
                "slug": "brouwerij"
              }
            },
            {
              "title": "Geschiedenis",
              "slug": {
                "id": "c4Vg3IAZsL6CyACYECKeyu0",
                "slug": "brouwerij/geschiedenis"
              }
            },
            {
              "title": "Brouwkunst",
              "slug": {
                "id": "c1VyqMLBTbeQKC6ao0iwig8",
                "slug": "brouwerij/brouwproces"
              }
            },
            {
              "title": "Brouwerijbezoek",
              "slug": {
                "id": "c23qIUrp5TqeaeouAeo8uO0",
                "slug": "brouwerij/brouwerijbezoek"
              }
            },
            {
              "title": "Werken bij de brouwerij",
              "slug": {
                "id": "c3okOEs8AQU6Ua0YkSYwowS",
                "slug": "brouwerij/jobs"
              }
            },
            {
              "title": "Leven in de brouwerij",
              "slug": {
                "id": "c1nr5UjQPDCG2OcmwWoeSaU",
                "slug": "brouwerij/artikels/nieuws"
              }
            },
            {
              "title": "Onze publicaties",
              "slug": {
                "id": "c4FDmr6xm6Iu4SS2M2uEQq2",
                "slug": "brouwerij/artikels/publicaties"
              }
            },
            {
              "title": "Evenementen",
              "slug": {
                "id": "c6J81IP0NYkkSgYk2aEyAeQ",
                "slug": "brouwerij/artikels/evenementen"
              }
            }
          ]
        },
        {
          "title": "Merken",
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/JUYZGyasOAEMgYQGM8oAc/84c41c32d3679eef7bf09c48a8e127a8/merken_tiny.jpg"
            }
          },
          "links": [
            {
              "title": "Alle Merken",
              "slug": {
                "id": "c4WAnL5iIBGCCUKgg264W0",
                "slug": "merken"
              }
            },
            {
              "title": "Bieren",
              "slug": {
                "id": "c5imHg3vMxOea0cKsI6GsGG",
                "slug": "merken/bieren"
              }
            },
            {
              "title": "Wijnen",
              "slug": {
                "id": "c6AYizK2yd2ayiAEmAomYcy",
                "slug": "merken/wijnen"
              }
            },
            {
              "title": "Waters & Frisdranken",
              "slug": {
                "id": "c4MPFhqzHSMMcWWcaS4Uo8E",
                "slug": "merken/waters-frisdranken"
              }
            },
            {
              "title": "Koffies",
              "slug": {
                "id": "lanZMmhi246qco4QK8qMa",
                "slug": "merken/koffies"
              }
            },
            {
              "title": "Verkooppunten",
              "slug": {
                "id": "c2721jdzo4wwWyck8kw6cGc",
                "slug": "merken/verkooppunten"
              }
            }
          ]
        },
        {
          "title": "Horeca",
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/6koJwx5WXmmW8y6IQcsqgi/5da720995f959c9373f30e645378ee1f/horeca-haacht-samenwerken_tiny.jpg"
            }
          },
          "links": [
            {
              "title": "Overzicht",
              "slug": {
                "id": "c3vGKnLtbwQcMIO8smKACgE",
                "slug": "horeca"
              }
            },
            {
              "title": "Samenwerken",
              "slug": {
                "id": "c58o6WPiNFYoiIeqoIW2uuI",
                "slug": "horeca/samenwerken"
              }
            },
            {
              "title": "Advies",
              "slug": {
                "id": "c2xyAjCPBDWiSKUGAmwAwqo",
                "slug": "horeca/horeca-advies/tips-tricks-brouwerij-haacht"
              }
            },
            {
              "title": "Opleidingen",
              "slug": {
                "id": "c5qMrv7OhNKwyOWcS84iA2M",
                "slug": "horeca/horeca-training"
              }
            },
            {
              "title": "Panden",
              "slug": {
                "id": "c1613mA6rWSWeIyyW6IOUAq",
                "slug": "horeca/panden"
              }
            },
            {
              "title": "Logo's & packshots",
              "slug": {
                "id": "c2SOXbhMfbG02OiyqK6GWyQ",
                "slug": "logo-packshots"
              }
            },
            {
              "title": "FAQ",
              "slug": {
                "id": "CcQJxo2sYSUEWMcYso0k0",
                "slug": "horeca/faq/veelgestelde-vragen-brouwerij-haacht"
              }
            }
          ]
        },
        {
          "title": "Bedrijfsinfo",
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/1P65JSAHgIMI6Cq4SCaGka/1cd7d6a88fdf68f9292e4f4551ddb942/jobs-slider-2.jpg"
            }
          },
          "links": [
            {
              "title": "Wij engageren ons",
              "slug": {
                "id": "hbDzMhmjLiQKcMSoeskQI",
                "slug": "bedrijf/wij-engageren-ons"
              }
            },
            {
              "title": "Kwaliteit gegarandeerd",
              "slug": {
                "id": "c1Tgzk46rKIoGC4Y8ISE22e",
                "slug": "bedrijf/kwaliteit-gegarandeerd"
              }
            },
            {
              "title": "Investor Relations",
              "slug": {
                "id": "zK6rohZcFUeSMom2iISke",
                "slug": "bedrijf/investor-relations"
              }
            }
          ]
        }
      ],
      "creditLinks": [
        {
          "title": "Jobs",
          "slug": {
            "id": "iytPIFSfrUmAgQKes4giW",
            "slug": "brouwerij/jobs/"
          }
        },
        {
          "title": "Pers",
          "slug": {
            "id": "oCK0Bzxn8GqgYwiMysyCM",
            "slug": "brouwerij/artikels/pers"
          }
        },
        {
          "title": "Contact",
          "slug": {
            "id": "c7kmuSCchygkSksIoC2M0eE",
            "slug": "contact"
          }
        },
        {
          "title": "Sitemap",
          "slug": {
            "id": "c4Q6VuYopUso6c0MAguyeAg",
            "slug": "sitemap"
          }
        },
        {
          "title": "Disclaimer",
          "slug": {
            "id": "rRgMBxVvqgmOWSCCio0SO",
            "slug": "disclaimer"
          }
        }
      ]
    }
  },
  "pathContext": {
    "locale": "nl-BE",
    "id": "c4tGcIu115Sc6sMw4GkgqKq",
    "navId": "c1DzxdxolMIwGMs2wMucG8W"
  }
}

var contentful = require('contentful')

var client = contentful.createClient({
  space: '4x9ynmufi2c6',
  accessToken: '00776a927469f43f7646dedff5221ba86305d737741b46084ac5072e4c26acdc'
})
//MHQ0SGIhmCYo6q2gGY2Yg
class NewsTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: null,
      loaded: false,
      error: null,
      language: getAllUrlParams().lang
    };
  }

  changeLanguage(language){
    console.log(language)
  }

  getData(){

  }

  render() {
    console.log(this.props.obj)
    return (
        <News
          slug_nl={data.data.slug_nl.news[0].slug || ""}
          slug_nl_be={data.data.slug_nl_be.news[0].slug || ""}
          slug_en={data.data.slug_en.news[0].slug || ""}
          slug_fr={data.data.slug_fr.news[0].slug || ""}
          slug_fr_be={data.data.slug_fr_be.news[0].slug || ""}
          navigation={navigation.navigation}
          cfNavigation={data.data.nav}
          content={data.data.content}
          locale={data.pathContext.locale}
          news={this.props.obj}
          location={data.location}
          footerMenu={data.data.footerMenu}
      />
    );
  }
}

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue;

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

export default NewsTemplate;
