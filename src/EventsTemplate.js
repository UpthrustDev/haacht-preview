import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsPage from './components/news/NewsPage'
import navigation from './components/navigation/navigation.json';
import _filter from 'lodash/filter';

const data = {
  "page": true,
  "match": {
    "path": "/",
    "url": "/",
    "params": {},
    "isExact": false
  },
  "location": {
    "pathname": "/nl-BE/brouwerij/artikels/evenementen",
    "search": "",
    "hash": "",
    "key": "lahux0"
  },
  "history": {
    "length": 6,
    "action": "POP",
    "location": {
      "pathname": "/nl-BE/brouwerij/artikels/evenementen",
      "search": "",
      "hash": "",
      "key": "lahux0"
    }
  },
  "pageResources": {
    "json": {
      "data": {
        "content": {
          "noNewsMessages": "Geen nieuwsberichten beschikbaar",
          "storyIntroTitle": "Verhaal",
          "noNews": "Geen nieuws beschikbaar",
          "noEvents": "Geen evenementen beschikbaar",
          "metaTitles": [
            "Ons laatste nieuws | Brouwerij Haacht",
            "Leven in de brouwerij | Events Brouwerij Haacht",
            "Blijf op de hoogte | Publicaties Brouwerij Haacht",
            "De verhalen achter Brouwerij Haacht | Authentiek vakmanschap",
            "Brouwerij Haacht in de pers | Authentiek vakmanschap",
            "Onze dranken in de prijzen | Brouwerij Haacht"
          ],
          "metaDescriptions": [],
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
          "linkToBrands": {
            "slug": "merken"
          },
          "singleNewsLink": {
            "slug": "brouwerij/nieuws"
          },
          "singleEventLink": {
            "slug": "brouwerij/evenement"
          },
          "singlePressLink": {
            "slug": "brouwerij/pers"
          },
          "storyLink": {
            "slug": "brouwerij/artikels/verhalen"
          },
          "pressLink": {
            "slug": "brouwerij/artikels/pers"
          },
          "singleStoryLink": {
            "slug": "brouwerij/verhaal"
          },
          "buttonReadStory": "Lees verhaal",
          "noNewsArticles": "Geen nieuwsartikelen beschikbaar",
          "headerNavigation": [
            "Nieuws",
            "Evenementen",
            "Publicaties",
            "Verhalen",
            "Pers",
            "Awards"
          ],
          "newsHighlight": "Uitgelicht",
          "evenementInDeKijker": "Evenement in de kijker",
          "buttonViewWebsite": "Bezoek website",
          "meerNieuws": "Meer nieuws",
          "moreInfo": "Meer info",
          "buttonLoadMore": "Laad meer",
          "news": "Nieuws",
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
          "headerImageOrVideo": [
            {
              "video": null,
              "headerImage": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/5fxLlMIAk0acEgMQ60CUQU/c3289d66128bfe9f51100714b2a28810/nieuws.jpg"
                }
              },
              "videoWebm": null,
              "mobileVideo": null,
              "mobileVideoWebm": null,
              "poster": null
            },
            {
              "video": {
                "file": {
                  "url": "//videos.ctfassets.net/vlb1ben6vtp9/52gAc0u2vuOwKUQ2uYgMsi/fc0251cc537e31aecdd3b9e0fa6440db/events-video-final-compressed.mp4"
                }
              },
              "headerImage": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/2y4WSOjaIUsMwuuQ0AoeqK/10e8f02dd200fb6fdce6b9450e8edd40/evenementen.jpg"
                }
              },
              "videoWebm": {
                "file": {
                  "url": "//videos.ctfassets.net/vlb1ben6vtp9/36KFQUWs7eUgc0eCuye6QG/f7d814c16c1b9ce452ae86d153dfb6b0/events-video-final-compressed.webm"
                }
              },
              "mobileVideo": {
                "file": {
                  "url": "//videos.ctfassets.net/vlb1ben6vtp9/52gAc0u2vuOwKUQ2uYgMsi/fc0251cc537e31aecdd3b9e0fa6440db/events-video-final-compressed.mp4"
                }
              },
              "mobileVideoWebm": {
                "file": {
                  "url": "//videos.ctfassets.net/vlb1ben6vtp9/36KFQUWs7eUgc0eCuye6QG/f7d814c16c1b9ce452ae86d153dfb6b0/events-video-final-compressed.webm"
                }
              },
              "poster": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/IG6tp8wVSCQSiI60i04WE/90b4be8f272dc16be6efff845e2c9eb5/banner-events.jpg"
                }
              }
            },
            {
              "video": null,
              "headerImage": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/4gKUAUUQs8YOY6iQc2wGiw/40293de6bd859860ffc1321212930c00/publicaties.jpg"
                }
              },
              "videoWebm": null,
              "mobileVideo": null,
              "mobileVideoWebm": null,
              "poster": null
            },
            {
              "video": null,
              "headerImage": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/3GmDRr8MAU4siAOoikoQkE/e7f2ecb05ffd6072e304345a542f3ff5/verhalen.jpg"
                }
              },
              "videoWebm": null,
              "mobileVideo": null,
              "mobileVideoWebm": null,
              "poster": null
            },
            {
              "video": null,
              "headerImage": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/4DeBenpjfyOGMmWUKc2kiy/8182743df219139f2e8670464c2d8f4d/pers.jpg"
                }
              },
              "videoWebm": null,
              "mobileVideo": null,
              "mobileVideoWebm": null,
              "poster": null
            },
            {
              "video": null,
              "headerImage": {
                "file": {
                  "url": "//images.ctfassets.net/vlb1ben6vtp9/5rQJAWFMPYyY44ca0o0Osu/3325e980d85ce6948bbfec47b2bb7530/awards.jpg"
                }
              },
              "videoWebm": null,
              "mobileVideo": null,
              "mobileVideoWebm": null,
              "poster": null
            }
          ]
        },
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
        "cookiesPopUp": {
          "title": {
            "childMarkdownRemark": {
              "internal": {
                "content": "Brouwerij Haacht maakt gebruik van cookies om uw gebruikservaring te optimaliseren."
              }
            }
          },
          "okButton": "Ok",
          "disclaimer": {
            "title": "Disclaimer",
            "linkSlug": "disclaimer"
          }
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
        "subscriptionForm": {
          "closeButtonLabel": "Sluiten",
          "postCodePlaceholder": "Postcode",
          "firstNameLabel": "VOORNAAM *",
          "firstNamePlaceholder": "Vul uw voornaam in ",
          "lastNameLabel": "ACHTERNAAM *",
          "lastNamePlaceholder": "Vul uw  achternaam in",
          "genderLabel": "GESLACHT",
          "genderValues": [
            "Man",
            "Vrouw"
          ],
          "streetLabel": "Straat *",
          "streetPlaceholder": "Straatnaam",
          "houseNumberLabel": "Huisnummer *",
          "houseNumberPlaceholder": "Huisnummer",
          "residenceLabel": "WOONPLAATS *",
          "residencePlaceholder": "Uw woonplaats",
          "postCodeLabel": "Postcode *",
          "privatePolicyLink": {
            "title": "Privacyvoorwaarden",
            "linkSlug": "disclaimer"
          },
          "magazineLanguageLabel": "Taal",
          "magazineLaguageValues": [
            "Nederlands",
            "Frans"
          ],
          "brochureLanguageValues": [
            "Nederlands",
            "Frans",
            "Engels"
          ],
          "toReceiveLabel": "Ik ontvang graag *",
          "toReceiveValues": [
            "De Laatste Editie",
            "Een gratis abonnement (incl. laatste editie)"
          ],
          "privatePolicyLabel": "Ik ga akkoord met de privacyvoorwaarden. Lees onze *",
          "requestButtonText": "Aanvraag verzenden",
          "emailLabel": "E-MAILADRES *",
          "emailPlaceholder": "Vul je e-mailadres in",
          "phoneLabel": "telefoon/gsm *",
          "phonePlaceholder": "+XX XXXXXXXXX",
          "succesMessage": "Het formulier werd succesvol verstuurd. Bedankt!",
          "errorMessage": "Er liep helaas iets mis tijdens het indienen.",
          "incompleteMessage": "Gelieve na te kijken of alle verplichte velden ingevuld zijn."
        },
        "agePopup": {
          "title": "Ben je ouder dan 18?",
          "yesButton": "Ja",
          "noButton": "Nee",
          "image": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/17VX2qzWvEQ4cimGumE0qA/d1028af0f8e7d4fd89f7c07905d7caf6/Haacht_brouwerij_RobTV_Sfeerbeeld-2_tiny.jpg"
            }
          }
        },
        "highlightedevent": {
          "evenementHighlighted": {
            "title": "wecandance",
            "slug": "wecandance",
            "startDate": "2018-08-11T00:00",
            "endDate": "2018-08-12T00:00",
            "externalWebsiteUrl": "https://www.wecandance.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/Y8qwakqlIiyC6UA6KmuUI/5c76e6c4adef2a3df41596a635109cbe/EV-wecandance.jpg"
              }
            },
            "location": "Zeebrugge",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Zesde editie van dit feeërieke festival op het strand van Zeebrugge."
                }
              }
            }
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
                "datePublished": "2018-05-08T00:00+02:00"
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
                "datePublished": "2017-05-30T00:00+02:00"
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
                "datePublished": null
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
                "datePublished": "2017-08-18T00:00+01:00"
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
                "datePublished": "2017-11-21T00:00+02:00"
              }
            }
          ]
        },
        "events": {
          "edges": [
            {
              "node": {
                "title": "ManiFiesta",
                "slug": "manifiesta",
                "externalWebsiteUrl": "https://www.manifiesta.be/nl",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4o8SkHUo4gQaQCQ4ooUSkI/981a08eb48a95fea1b2a546f2908a1ab/EV-ManiFiesta.jpg"
                  }
                },
                "location": "Bredene",
                "startDate": "2018-09-08T00:00",
                "endDate": "2018-09-09T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Festival in het teken van de solidariteit."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Belgian Beer Weekend",
                "slug": "belgian-beer-weekend",
                "externalWebsiteUrl": "http://belgianbrewers.be/nl/events/belgian-beer-weekend-173/article/programma-585",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5aHRHGv8QgsSiAkSccAMCG/2193d81e1258e7eb5a487f2222c17868/EV-Belgian-Beer-Weekend.jpg"
                  }
                },
                "location": "Brussel",
                "startDate": "2018-09-07T00:00",
                "endDate": "2018-09-09T00:00",
                "childContentfulEvenementContentTextNode": null
              }
            },
            {
              "node": {
                "title": "Ieperfest",
                "slug": "ieperfest",
                "externalWebsiteUrl": "http://www.ieperfest.com/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5NkfZS3Zss4yIEcOG6WASW/b78006325f249ba257a76c4c347067be/EV-Ieperfest.jpeg"
                  }
                },
                "location": "Ieper",
                "startDate": "2018-08-10T00:00",
                "endDate": "2018-08-12T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Hardcore festival"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Motocross Keiheuvel",
                "slug": "motocross-keiheuvel",
                "externalWebsiteUrl": "http://www.kmc-mol.be/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4CuiBItCHCYG668ksagi8m/a0db3c1baffbe4535c0f65624758bbcb/EV-Keiheuvel.jpg"
                  }
                },
                "location": "Balen",
                "startDate": "2018-08-15T00:00",
                "endDate": null,
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "'Flanders Masters' internationale motocross op de bekendste zandheuvel van Vlaanderen."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Ommegang",
                "slug": "ommegang",
                "externalWebsiteUrl": "http://www.ommegang.be/?lang=nl",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3fRerAuuPuYmm6aYW00Uuc/567eccb37acffb1b5fdf42d0107d8e3e/EV-Ommegang.jpeg"
                  }
                },
                "location": "Brussel",
                "startDate": "2018-07-04T00:00",
                "endDate": "2018-07-06T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Historische reconstructie van de blijde intrede van Keizer Karel in Brussel in 1549."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Laundry Day",
                "slug": "laundry-day",
                "externalWebsiteUrl": "http://www.laundryday.be/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/MFWLxI57ieGYi2SIosUMU/6fac1ccc914efff5d2dc75b5f1bb886c/EV-Laundry-Day.jpg"
                  }
                },
                "location": "Antwerpen",
                "startDate": "2018-09-01T00:00",
                "endDate": null,
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "House en technofestival"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Kamping Kitsch",
                "slug": "kamping-kitsch",
                "externalWebsiteUrl": "https://kampingkitschclub.be/home",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5FG7pVvtYsA4QwQA0QSaAO/23eece59368249fe24cf54959a85fb20/EV-Kamping-Kitsch.jpg"
                  }
                },
                "location": "Kortrijk",
                "startDate": "2018-08-26T00:00",
                "endDate": null,
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Ongetwijfeld het grootste verkleedfestival van Vlaanderen."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Brocante",
                "slug": "brocante",
                "externalWebsiteUrl": "http://www.temploux.be/brocante/index-nl.html",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/63Et8HPUekqII0Uy2K6OOG/0a010a8ef60058e44d796b818ac5dec3/EV-Temploux.jpg"
                  }
                },
                "location": "Temploux",
                "startDate": "2018-08-25T00:00",
                "endDate": "2018-08-26T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Antiekmarkt, rommelmarkt of vlooienmarkt? De Brocante van Temploux is het allemaal."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Swing",
                "slug": "swing",
                "externalWebsiteUrl": "http://swingwespelaar.be/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1CsHpsPUPaoMao6AMSmuCm/4ce10486917f2a3b09e634447d8dffa8/EV-Swing.jpg"
                  }
                },
                "location": "Wespelaar",
                "startDate": "2018-08-17T00:00",
                "endDate": "2018-08-19T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Swing organiseert dit jaar de Belgian Blues Challenge, waarbij 7 Belgische bands strijden om een ticket voor de ‘European Blues Challenge’ die in 2019 zal doorgaan op de Azoren, Portugal. Kom dat zien!"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "W-Festival",
                "slug": "w-festival",
                "externalWebsiteUrl": "https://www.w-festival.com/nl/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1f92hodk3qUOAmaeY060a8/691a6d78d5acd96c1a0bd06cd03c7096/EV-W-festival.jpg"
                  }
                },
                "location": "Amougies",
                "startDate": "2018-08-16T00:00",
                "endDate": "2018-08-19T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "New wave en electronic popfestival."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "BinckBank Tour",
                "slug": "binckbank-tour",
                "externalWebsiteUrl": "http://www.sport.be/binckbanktour/2018/nl/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5DQVPgohHyKmuwsQiwuUcM/a483208fa03a77d2d7dd8d45446f9881/EV-BinckBank-tour.jpg"
                  }
                },
                "location": "parcours België-Nederland",
                "startDate": "2018-08-13T00:00",
                "endDate": "2018-08-19T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "De BinckBank Tour is de enige meerdaagse UCI WorldTour wedstrijd in Nederland en België. De beste ploegen van de wereld, aangevuld met enkele Wildcards verschijnen aan de start."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Nostalgie Beach Festival",
                "slug": "nostalgie-beach-festival",
                "externalWebsiteUrl": "https://www.nostalgiebeachfestival.be/nl/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/B2fIruPV2SqOGsE4mMOgg/1aa63e8d0bed556c5c60ed0ed070b929/EV-Nostalgie-Beach.jpg"
                  }
                },
                "location": "Middelkerke",
                "startDate": "2018-08-11T00:00",
                "endDate": null,
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "5de editie van het Nostalgie Beach Festival op het festivalpark van Middelkerke. De hele dag lang kan je meezingen en -dansen op de grootste classics uit de jaren 70, 80 en 90!"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "wecandance",
                "slug": "wecandance",
                "externalWebsiteUrl": "https://www.wecandance.be/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/Y8qwakqlIiyC6UA6KmuUI/5c76e6c4adef2a3df41596a635109cbe/EV-wecandance.jpg"
                  }
                },
                "location": "Zeebrugge",
                "startDate": "2018-08-11T00:00",
                "endDate": "2018-08-12T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Zesde editie van dit feeërieke festival op het strand van Zeebrugge."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Cirque Magique",
                "slug": "cirque-magique",
                "externalWebsiteUrl": "http://www.cirquemagique.eu/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1C7cld0PEIIQ0eiO8sG8kU/561e6ae35fd7d7acdffd5e15944cd2ba/EV-Cirque-Magique.jpg"
                  }
                },
                "location": "Ledegem",
                "startDate": "2018-08-03T00:00",
                "endDate": "2018-08-05T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Een prachtige setting waar iedereen welkom is. Ontdek de artiest in jou en laat je betoveren door muziek, klank, licht, decors, animatie, food & drinks, ..."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Elrow Town",
                "slug": "elrow-town",
                "externalWebsiteUrl": "https://www.elrowtown.com/en/antwerp",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4nZMkew5bqGumy2eGMgwKE/735e718f746914a12b52d9d5f3884c14/EV-Elrow.jpg"
                  }
                },
                "location": "Antwerpen",
                "startDate": "2018-06-30T00:00",
                "endDate": null,
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Het legendarische, Spaanse partyconcept komt naar Antwerpen!"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Jan Primusfeesten",
                "slug": "jan-primusfeesten",
                "externalWebsiteUrl": "http://jan-primus.be/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3JX17KGNiEGeuAksUg0o6m/916a498205684b23bb819ebca282b32b/EV-Jan-Primus-Feesten.JPG"
                  }
                },
                "location": "Haacht",
                "startDate": "2018-07-27T00:00",
                "endDate": "2018-07-29T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Rommelmarkt, braderie en drie dagen lang het gezelligste en grootste terras van de regio, met tal van muzikale optredens."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Campo Solar",
                "slug": "campo-solar",
                "externalWebsiteUrl": "https://www.facebook.com/CampoSolar1/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/52Bkwmf8LYeAMU8AoU4WSo/fa6d7370068eac7466fbaf1ac9b47ae8/EV-Campo-Solar.jpg"
                  }
                },
                "location": "Damme",
                "startDate": "2018-08-03T00:00",
                "endDate": "2018-08-05T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Een zomers, bruisend en muzikaal evenement voor jong & oud op een unieke locatie."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Gentse Feesten",
                "slug": "gentse-feesten",
                "externalWebsiteUrl": "https://gentsefeesten.stad.gent/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4GsFRSNK6sWiWOy4qAEs8G/19a9b4b1f737667fd120dff382891aca/EV-Gentse-Feesten.jpg"
                  }
                },
                "location": "Gent",
                "startDate": "2018-07-13T00:00",
                "endDate": "2018-07-22T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "De Gentse Feesten bestaan in 2018 175 jaar en dit wordt gevierd! "
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Beauville",
                "slug": "beauville",
                "externalWebsiteUrl": "https://www.beau-ville.be/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5fJtjoDCDeWKwM6W8KWK2S/02d224ee2f1bb60a71a7174bc735e409/EV-Beauville.jpg"
                  }
                },
                "location": "Deinze",
                "startDate": "2018-07-07T00:00",
                "endDate": null,
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Een daytime festival op een prachtige locatie."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Horecatel",
                "slug": "horecatel",
                "externalWebsiteUrl": "http://www.horecatel.be/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3xbqsdhFryMgMmSmQk8EWY/bc0d1ef432719827cbf6551118a63a5b/EV-Horecatel-2017.jpg"
                  }
                },
                "location": "Marche-en-Famme (WEX)",
                "startDate": "2018-03-04T00:00",
                "endDate": "2018-03-07T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Al meer dan 50 jaar profileert Horecatel zich als de belangrijkste B2B-beurs voor horecaprofessionals."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Hoppefesten",
                "slug": "hoppefesten",
                "externalWebsiteUrl": "https://hoppefesten.be/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5wrM57dPxKe08eQGEwcSUC/1a14373881bff3d6121002abdc0f35ba/EV-Hoppefesten.jpg"
                  }
                },
                "location": "Veurne",
                "startDate": "2018-06-30T00:00",
                "endDate": null,
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Het tweede grootste openluchtvoetbaltornooi in Europa, afgesloten met een reusachtige barbeque en dj-sets."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Vintage Village Festival",
                "slug": "vintage-village-festival",
                "externalWebsiteUrl": "https://www.facebook.com/VintageVillageFestival/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5Er83BOqFaOa44uw2cIgCS/87d4e30d49addb4c59270d6b6f43792b/EV-Vintage-Village-Festival.jpg"
                  }
                },
                "location": "Zemst",
                "startDate": "2018-05-11T00:00",
                "endDate": "2018-05-13T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": " "
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Fire is Gold",
                "slug": "fire-is-gold",
                "externalWebsiteUrl": "https://www.fire-is-gold.com/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2pvCKeNUTCu4KOQKI2uYsi/53bd29ecb2eedc8512783346ce5a2220/EV-Fire-is-Gold.JPG"
                  }
                },
                "location": "Vilvoorde",
                "startDate": "2018-06-23T00:00",
                "endDate": null,
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "    "
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Baloise Belgium Tour",
                "slug": "baloise-belgium-tour",
                "externalWebsiteUrl": "http://www.sport.be/baloisebelgiumtour/2018/nl/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4OmZBqdGNamksUeWYC6UWm/fc9440b898cfaa275c727474ebc4f7c7/EV-Baloise-Belgium-Tour.jpg"
                  }
                },
                "location": "parcours door België",
                "startDate": "2018-05-23T00:00",
                "endDate": "2018-05-27T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "De Baloise Belgium Tour is een meerdaagse wielerwedstrijd die jaarlijks in België wordt verreden."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Jaarmarktcross",
                "slug": "jaarmarktcross",
                "externalWebsiteUrl": "http://www.sport.be/cyclocrossclassics/1718/niel/nl/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/beEnVhkuaI2424CsGASgi/e41a27645cb0b23b1053f17ac5f68d4d/EV_Jaarmarktcross.jpg"
                  }
                },
                "location": "Niel",
                "startDate": "2017-11-11T00:00",
                "endDate": "2017-11-11T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "De Jaarmarktcross is tot ver buiten de regio bekend en trekt jaarlijks duizenden bezoekers."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Soudal Masters",
                "slug": "soudal-masters",
                "externalWebsiteUrl": "http://www.sport.be/cyclocrossclassics/1718/waregem/nl/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Ihvhjd51mAS0eos24A6wQ/75d9c05cb4563b2ef8b9cefd246ade84/Soudal_Masters_Waregem.jpg"
                  }
                },
                "location": "Waregem",
                "startDate": "2018-02-21T00:00",
                "endDate": "2018-02-21T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Een unieke, niet te missen 'veldrit' in het centrum van Waregem met hindernissen en spektakel."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "DVV Verzekeringen Trofee - Scheldecross",
                "slug": "dvv-verzekeringen-trofee-scheldecross",
                "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/antwerpen/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
                  }
                },
                "location": "Antwerpen",
                "startDate": "2017-12-16T00:00",
                "endDate": "2017-12-16T23:59",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "DVV Verzekeringen Trofee - Scheldecross"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "DVV Verzekeringen Trofee Cyclocross",
                "slug": "dvv-verzekeringen-trofee-cyclocross",
                "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/essen/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
                  }
                },
                "location": "Essen",
                "startDate": "2017-12-09T00:00",
                "endDate": "2017-12-09T23:59",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "DVV Verzekeringen Trofee Cyclocross"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "DVV Verzekeringen Trofee - Azencross",
                "slug": "dvv-verzekeringen-trofee-azencross",
                "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/loenhout/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
                  }
                },
                "location": "Loenhout",
                "startDate": "2017-12-28T00:00",
                "endDate": "2017-12-28T23:59",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "DVV Verzekeringen Trofee - Azencross"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "DVV Verzekeringen Trofee - GP Sven Nys",
                "slug": "dvv-verzekeringen-trofee-gp-sven-nys",
                "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/baal/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
                  }
                },
                "location": "Baal",
                "startDate": "2018-01-01T00:00",
                "endDate": "2018-01-01T23:59",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "DVV Verzekeringen Trofee - GP Sven Nys"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Horecabeurs",
                "slug": "horecabeurs",
                "externalWebsiteUrl": "https://horecabeurs.be/nl/home",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5eRpkbLk5iwyKO8KOEIucO/7fad6e7c55daaca68b015ce666252181/EV-horecabeurs-Bredene-2017.jpg"
                  }
                },
                "location": "Bredene, MEC Staf Versluys",
                "startDate": "2018-02-19T00:00",
                "endDate": "2018-02-22T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Dé vakbeurs voor de horeca-professional."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "DVV Verzekeringen Trofee - Krawatencross",
                "slug": "dvv-verzekeringen-trofee-krawatencross",
                "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/lille/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
                  }
                },
                "location": "Lille",
                "startDate": "2018-02-10T00:00",
                "endDate": "2018-02-10T23:59",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "De Krawatencross in Lille is de laatste manche van de DVV Verzekeringen Trofee."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Soudal Waaslandcross",
                "slug": "soudal-waaslandcross",
                "externalWebsiteUrl": "http://www.sport.be/cyclocrossclassics/1718/sintniklaas/nl/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6vvmTc5YacMeYo8SS0qIIG/d90ef7a71d0691bc50260ab2aa586038/intro-bg__2_.jpg"
                  }
                },
                "location": "Sint-Niklaas",
                "startDate": "2017-12-23T00:00",
                "endDate": "2017-12-23T23:59",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Soudal Waaslandcross"
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Internationale Sluitingsprijs",
                "slug": "internationale-sluitingsprijs",
                "externalWebsiteUrl": "http://www.cyclocross-oostmalle.be/index.php",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7jAVzfJqaA6ckAQuuSUAYO/1469da45f8b69e65e38202e7ce6a3d77/Oostmalle.JPG"
                  }
                },
                "location": null,
                "startDate": "2018-02-25T00:00",
                "endDate": "2018-02-25T00:00",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Laatste officiële wedstrijd van het veldritseizoen."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Telenet UCI CC World Cup",
                "slug": "telenet-uci-cc-world-cup",
                "externalWebsiteUrl": "http://www.sport.be/cyclocrossclassics/1718/namur/nl/",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3dbCGGpQEoykeQsE8K82Ku/6b678602dfff3748b1e80077bf146ae9/intro-bg__1_.jpg"
                  }
                },
                "location": "Namen",
                "startDate": "2017-12-17T00:00",
                "endDate": "2017-12-17T23:59",
                "childContentfulEvenementContentTextNode": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Telenet UCI CC World Cup"
                    }
                  }
                }
              }
            }
          ]
        },
        "publications": {
          "edges": [
            {
              "node": {
                "title": "Bedrijfsbrochure",
                "type": "brochure",
                "sendEmailInfo": {
                  "subject": "Bedrijfsbrochure aanvraag",
                  "fromEMail": "info@haacht.com",
                  "fromName": "Brouwerij Haacht website",
                  "toEMail": "marketing@haacht.com",
                  "toName": "Brouwerij Haacht marketing"
                },
                "formDescription": {
                  "formDescription": "Vul dit formulier in om een gratis brochure te ontvangen. Alle velden met * zijn verplicht."
                },
                "coverImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5J4vH8orgQa4GAEIgOac6o/9b8ad0be324872d0232dfe1a7f02e8b8/brochure-image.jpg"
                  }
                },
                "description": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "In onze bedrijfsbrochure lees je alles wat onze brouwerij elke dag draaiend houdt: onze geschiedenis, onze keuze voor grondstoffen, de kwaliteit van ons gamma dranken, onze zorg voor het milieu... Alles komt aan bod."
                    }
                  }
                },
                "pdf": {
                  "file": {
                    "url": "//assets.ctfassets.net/vlb1ben6vtp9/4KQjJtxZy82IGcYCWqaIW0/9fd6eec372aa877e10f80f971a252476/bedrijfsbrochure-2013-nl.pdf"
                  }
                },
                "buttonView": "Bekijk de brochure",
                "buttonRequest": "Vraag een exemplaar aan"
              }
            },
            {
              "node": {
                "title": "Haacht magazine",
                "type": "magazine",
                "sendEmailInfo": {
                  "subject": "Haacht magazine",
                  "fromEMail": "info@haacht.com",
                  "fromName": "Brouwerij Haacht website",
                  "toEMail": "marketing@haacht.com",
                  "toName": "Brouwerij Haacht"
                },
                "formDescription": {
                  "formDescription": "Vul dit formulier in om een gratis Haacht magazine te ontvangen. Alle velden met * zijn verplicht."
                },
                "coverImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3fQd5BUlSMcaiOKsaaqcWO/ad857a2478afa4fd8ae3f5236324b6b8/Haacht_Magazine_Website_754x1044_NL.jpg"
                  }
                },
                "description": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Wil je weten wat er het voorbije jaar binnen de muren van onze brouwerij én daarbuiten gebeurde? Je leest het allemaal online in ons Haacht magazine. Of vraag een gratis abonnement aan en ontvang meteen de laatste editie in je brievenbus."
                    }
                  }
                },
                "pdf": {
                  "file": {
                    "url": "//assets.ctfassets.net/vlb1ben6vtp9/4RKwdJOITSIEW2C2UIIUio/e278cf8e19f57ff030c1414784b8cd72/2017_haachtmag69_nl.pdf"
                  }
                },
                "buttonView": "Lees het online",
                "buttonRequest": "Abonneer gratis"
              }
            }
          ]
        },
        "stories": {
          "edges": [
            {
              "node": {
                "title": "Festina Lente",
                "slug": "festina-lente-brouwerij-haacht",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2EvjYXwugICG2akKkmi8iq/956828b35f8cd992d233391641c93454/Brouwerij-haacht-abdij-Tongerlo.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### Festina Lente\n\n__In Tongerlo, het hartje van de stille Kempen, bepaalt de norbertijnenabdij al sinds 1130 het landschap. Het wapenschild aan de 14de-eeuwse poort onthult meteen het levensmotto van de paters: ‘festina lente’. Het betekent zoveel als ‘haast je langzaam’. Zoveel eeuwen later is die slogan nog altijd van toepassing.__\n\nDe Tongerlo-bieren zijn erkende Belgische abdijbieren die hergisten op fles en die tot het begin van de Eerste Wereldoorlog binnen de abdijmuren gebrouwen werden. Maar in 1914 ontvreemdden de Duitsers de koperen brouwketels van de abdij, waardoor er een abrupt einde kwam aan de traditionele brouwactiviteiten door de Norbertijnen. \n\nNa heel wat omzwervingen met hun bier vonden de Norbertijnen in 1990 bij Brouwerij Haacht opnieuw de rust die ze zochten. Sindsdien brouwen we Tongerlo onder het goedkeurend oog van de actieve kloostergemeenschap. In ruil voor de toegekende licentie ondersteunen we een van de meest actieve kloostergemeenschappen van ons land. De keuze van de broeders voor een echte familiebrouwerij die kwaliteit en authenticiteit in zich draagt, laat zich proeven in het bier.\n\nDe verschillende awards, waaronder die van ’s Werelds Beste Bier voor Tongerlo LUX (blond) in 2014, zijn dan ook in de eerste plaats een beloning voor de inzet en toewijding van alle betrokkenen.  \nBenieuwd naar de norbertijnenabdij in Tongerlo? Breng haar dan zeker eens een bezoekje. Alle info vind je terug op [hun website](http://www.tongerlo.org/)."
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "In Tongerlo, het hartje van de stille Kempen, bepaalt de norbertijnenabdij al sinds 1130 het landschap. Het wapenschild aan de 14de-eeuwse poort onthult meteen het levensmotto van de paters: ‘festina lente’. Het betekent zoveel als ‘haast je langzaam’. Zoveel eeuwen later is die slogan nog altijd van toepassing."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Ultimum Optimum",
                "slug": "ultimum-optimum",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6sIN6tPNgkCcigAEcwQKSo/47fed62d60ec48ed96cb5e93b93a9508/verhaal-Tongerlo-ultimum-optimum.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### Hou het beste voor het laatste\n\n__Net voor we onze flesjes met bier vullen, voegen we er een beetje reincultuurgist aan toe. Daarna gaat het bier naar de warme kamers om er enkele weken te hergisten op fles. Tijdens dat proces zet de gist de nog aanwezige suikers om in CO2 en alcohol. Dat proef je ook in het glas. Het bier krijgt door deze hergisting een intensere smaak en een verfijnder aroma.__\n\nTijdens het rijpingsproces dat daarop volgt, zakt de gist naar de bodem van de fles. Bij het uitschenken heb je de keuze of je de gist mee in het glas schenkt of in het flesje laat. Veel liefhebbers kiezen ervoor om de gist als laatste te drinken, want dat zorgt voor een ware smaakbeleving. Ultimum optimum, het beste voor het laatste.\n\nDaarom hebben we voor onze Tongerlo PRIOR speciale gistglaasjes ontworpen. Zo kan je jouw Tongerlo PRIOR zonder gist uitschenken in het authentieke Tongerlo-glas, en de resterende gist apart in het kleine glaasje. Het is alleszins een unieke serveerwijze die je eens geprobeerd moet hebben."
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Bij onze Tongerlo PRIOR zakt de resterende gist na hergisting op fles naar de bodem van het flesje. Die gist is een ware smaakbeleving en wordt door veel liefhebbers, helemaal op het laatste, apart gedronken. Onder meer voor hen ontworpen we een speciaal gistglaasje voor een optimale smaakbeleving."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Hoge gisting, lage gisting?",
                "slug": "hoge-gisting-lage-gisting",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7sdVfVmXkWSSkU2IsIgaqG/2acf76b82677c12dc78ec8d1068e1584/verhaal-Hoge-en-lage-gisting.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### Bieren van hoge gisting of lage gisting?\n\n__Tussen pot en pint ontstaan er soms discussies over wat bieren van hoge gisting of lage gisting nu juist zijn. Volgens sommigen worden die termen bepaald door de temperatuur waarbij het bier in de tank gist. En hoewel het klopt dat bieren van lage gisting bij een lagere temperatuur vergisten dan bieren van hoge gisting, is dat niet de volledige verklaring.__\n\nHogegistingsbieren, zoals die van ons gamma Keizer Karel, Tongerlo en Mystic, gisten vijf tot zes dagen bij een relatief hoge temperatuur van 18 tot 22 graden Celsius. Daarna komt de gist bovendrijven en vormt hij een dikke laag op het bier. Hogegistingsbieren worden daardoor ook weleens bieren van bovengisting genoemd.\n\nHet omgekeerde geldt voor bieren van lage gisting, zoals ons pilsbier Primus. Na een gistingsperiode van acht tot tien dagen bij een lagere temperatuur van 10 tot 12 graden Celsius, zakt de gist en blijft hij op de bodem van de gistingstank liggen. Daarom wordt ook de term ‘ondergisting’ gebruikt voor deze bieren.\n\nDat de gist bovendrijft of naar de bodem zakt, heeft te maken met de gebruikte giststam en niet met de temperatuur. De giststam speelt ook een belangrijke rol bij het bepalen van het aroma van het bier.\n\n"
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Volgens sommigen worden de termen hogegistings- en lagegistingsbier bepaald door de temperatuur waarbij het bier in de tank gist. En hoewel het klopt dat bieren van lage gisting bij een lagere temperatuur vergisten dan bieren van hoge gisting, is dat niet de volledige verklaring."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "De stoomfluit van Brouwerij Haacht",
                "slug": "de-stoomfluit-van-brouwerij-haacht",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3PU1YVA1e8Ug4iSY66wQGG/f346c2492ced7b03e4c669cbfb159278/brouwerij-haacht-stoomfluit.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### Stoom aflaten? Dat doen wij dagelijks\n\n__Sommige tradities zijn er om in ere te houden. Onze stoomfluit is daar zo eentje van. Nog elke dag blazen onze vier stokers stoom af, en dat met bijhorend fluitsignaal. Zij werken misschien een beetje in de schaduw, maar zijn essentieel voor onze brouwerij. Want zonder stoom geen draaiende machinekamers, gevulde CO2-flessen en opgewarmde brouwketels.\n\nHet gebruik van de stoomfluit is ongeveer even oud als onze brouwerij zelf. Vroeger diende de stoomfluit onder meer om de arbeiders, die vaak in lawaaierige productieafdelingen werkten, erop te wijzen dat het tijd was om aan hun dagtaak te beginnen, te gaan schaften of weer naar huis te gaan.\n\n__Op het ritme van de stoomfluit__\n\nHet eerste sein was er voor de vroege vogels al om 6 uur ’s ochtends, een uurtje later volgde het signaal voor de dagploeg en om half 9 kwam het sein voor de collectieve schafttijd. Om 5 voor 9 blies de stoomfluit opnieuw, deze keer om aan te kondigen dat de brooddozen weggestopt moesten worden. Om 9 uur gaf de fluit dan aan dat het opnieuw tijd was om aan het werk te gaan. Om 12 uur en om half 1 herhaalde dat scenario zich voor de middagpauze. Het laatste signaal volgde om 15 uur en gaf het einde van de dagtaak aan. Op vrijdag ging de fluit een half uur vroeger af. En op Goede Vrijdag blies de stoomfluit steevast 15 seconden lang.\n\nWaarschijnlijk liet de stoomfluit vaker van zich horen, maar in de loop der jaren zijn enkele momenten toch in onbruik geraakt. Net zoals de traditie om elke vrijdag in de stokerij bakharing en pensen te bakken op de hete buizen van de stoomketels. Vandaag de dag zou dat omwille van de voedselveiligheid trouwens helemaal ondenkbaar zijn.\n\n__Elke stoker zijn manier__\n\nDat de pauzes vandaag beurtelings gehouden worden, heeft geen afbreuk gedaan aan de stoomfluittraditie. Het is zelfs zo dat wanneer de stoomfluit defect is, ze onmiddellijk weer hersteld wordt. “Heeft het nog niet geblazen?”, hoor je hier weleens wanneer de stoker iets later dan voorzien aan de hendel trekt. Sommigen horen zelfs aan de duur van ‘het blazen’ welke stoker op dat moment van dienst is.\n"
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Sommige tradities zijn er om in ere te houden. Onze stoomfluit is daar een van. Nog elke dag blaast de brouwerij stoom af, en dat met bijhorend fluitsignaal."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "De temperatuur in de brouwzaal",
                "slug": "temperatuur-brouwzaal-brouwerij-haacht",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/10TgGP8OGqWi2K6MaEaU02/c93a842e1a856df3303cd1199aaf43c7/brouwerij-haacht-brouwzaal.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### Waarom is het altijd zo warm in de brouwzaal?\n\n__Heb je onze brouwerij al eens bezocht? Dan is het je wellicht opgevallen dat het in de brouwzaal lekker warm is. Bij elke rondleiding doen de bezoekers hun jassen open, sjaals af en wapperen ze stevig met de handen om toch maar een fris briesje te creëren.__\n\n__Stijgende temperaturen__\n\nBrouwen is een kookproces. En net zoals de temperatuur bij jou thuis stijgt als je achter je potten en pannen staat, klimt ook het kwik in de brouwzaal tijdens het hele brouwproces. Handig, want daardoor hoeft de verwarming nooit aan, zelfs niet tijdens de meest strenge winters. In de zomer is die hitte soms wel iets minder aangenaam, vooral voor onze medewerkers, maar dan zorgen onze frisdranken en waters voor de nodige verfrissing. En de bezoekers, die krijgen na afloop een goed gekoelde drank uit ons ruime gamma aangeboden.\n\n__Geen energieverlies__\n\nOnze brouwketels zijn ontzettend goed geïsoleerd. Want hoe sneller een brouwketel op temperatuur komt, hoe minder energie we verbruiken. Om de overtollige warmte zo goed mogelijk te recupereren, blijven we constant zoeken naar nieuwe manieren van warmterecuperatie."
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Heb je onze brouwerij al eens bezocht? Dan is het je wellicht opgevallen dat het in de brouwzaal lekker warm is. Bij elke rondleiding doen de bezoekers hun jassen open, sjaals af en wapperen ze stevig met de handen om toch maar een fris briesje te creëren."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "De pot van Keizer Karel",
                "slug": "de-pot-van-keizer-karel",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6iRDHEbRW8K6AkqWSO8Eo6/f5f03e663392e92c4c78ffb0a1c5f015/verhaal-Pot-Keizer-Karel.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### De pot van Keizer Karel\n\n__Wist je dat Keizer Karel een groot bierliefhebber was? Volgens de legende nam hij steeds een vat bier mee op zijn reizen. En in de herbergen waar hij overnachtte, weigerde hij ook nooit een goede pint bier. In het Antwerpse Olen, waar de keizer jaarlijks ging jagen, vertellen ze vandaag nog graag de legende van ‘De pot met drie oren’. En op het marktplein van Olen is er zelfs een standbeeld aan gewijd.__\n\n__1 oor__\n\nDe boeren van Olen, die hun bier normaal gezien dronken in een pot zonder oren, wilden Keizer Karel tonen dat ook zij goede manieren hadden en maakten speciaal voor hem een pot met één oor. Toen hij met zijn paard aan de herberg stopte, kwam de waardin buiten met een pot schuimend gerstenat. Ze hield de pot vast bij het oor en reikte hem zo aan. De keizer kon dus niet anders dan de pot zelf vast te grijpen. \n*“Vrouwke, tegen aanstaande jaar moet ge een pot hebben met twee oren, dat zal gemakkelijker zijn.”*\n\n__2 oren__\n\nEn zo geschiedde. Het jaar daarop reikte de waardin Keizer Karel een pot met twee oren aan, maar ze hield hem met twee handen aan beide oren vast. \n*“Zo gaat het nog niet goed, vrouwke. Ge zult er tegen aanstaande jaar een moeten laten maken met drie oren. Dan zal ‘t wel beter gaan.”*\n\n__3 oren__\n\nToen Keizer Karel het derde jaar stopte aan de herberg, verwelkomde de vrouw hem met een pot met drie oren. Maar ze hield hem weer met twee oren vast, en dat op zo’n manier dat het derde oor naar haar borst was gekeerd. Onder de pot door greep de keizer het derde oor vast.  \n*“Ja vrouwke, ’t zou al even moeilijk gegaan zijn als verleden jaar, indien ik niet wist dat er een derde oor was.”  *\n\n__4 oren?__\n\nIn het Waalse Walcourt gaat het verhaal nóg een stapje verder. Daar beval Keizer Karel om een pot met vier oren te maken, zodat hij zeker altijd een oor binnen handbereik zou hebben."
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Wist je dat Keizer Karel een groot bierliefhebber was? Volgens de legende nam hij steeds een vat bier mee op zijn reizen. En in de herbergen waar hij overnachtte, weigerde hij ook nooit een goede pint bier. In Olen vertellen ze vandaag nog graag de legende van ‘De pot met drie oren’."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Muzikaal talent bij Brouwerij Haacht",
                "slug": "muzikaal-talent-brouwerij-haacht",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/48BmTvHwbCgcggycUoEMEu/2b9f56588f48c265bf5692fd12141cca/story-image-3.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### Muzikaal talent bij brouwerij Haacht\n\n__Leven in de brouwerij is een leuze die niet zomaar uit de lucht komt vallen, ook niet bij Brouwerij Haacht. In 1920 richtten enkele van onze medewerkers de fanfare ’Vrijheid en Vermaak’ op. Lang hadden ze niet nodig om uit te groeien tot een echt succesverhaal in Haacht en omstreken. Steevast musiceerden er minstens vijftig medewerkers.__\n\nAlle muzikanten maakten ook deel uit van een fanfare in de naburige dorpen, wat zorgde voor een hoog muzikaal niveau van ‘Vrijheid en Vermaak’. Zo groeiden de reputatie en populariteit van de fanfare gestaag. Ze waren dan ook graag geziene gasten op festiviteiten en muziekfestivals, met optredens tot Brussel en zelfs Noord-Frankrijk. Zoals dat geldt voor verenigingen kreeg ze na vijftig jaar de titel ‘Koninklijke fanfare’.\n\nJammer genoeg komt er aan alle mooie liedjes een einde en ging ook de typische folklore van fanfares die al spelend door de straten marcheerden met de jaren wat verloren. Daardoor werd de vereniging ‘Vrijheid en Vermaak’ eind jaren 80 stopgezet. Maar dat betekent niet dat er geen muziek meer zit in Brouwerij Haacht. Verschillende van onze huidige medewerkers zijn nog steeds actief bij fanfare- of harmonieorkesten, in allerhande muziekbandjes of als dj."
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Leven in de brouwerij is een leuze die niet zomaar uit de lucht komt vallen, ook niet bij Brouwerij Haacht. In 1920 richtten enkele van onze medewerkers de fanfare ’Vrijheid en Vermaak’ op. Lang hadden ze niet nodig om uit te groeien tot een echt succesverhaal in Haacht en omstreken."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "De ast van Brouwerij Haacht",
                "slug": "ast-brouwerij-haacht",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2jowo0zIMI6WOogSYgUmq4/6d381da62d01c092680d02ca29c50e3a/verhaal-De-Ast.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### Maak kennis met de ast, een historisch monument\n__Kort na het begin van de Eerste Wereldoorlog braken er zware gevechten uit rond het station van Haacht. Veel omwonenden sloegen op de vlucht, maar Eugène De Ro, grondlegger van onze brouwerij, en brouwmeester Camille Kerkhofs bleven. Hun doel? De toenmalige ‘Brouwerij en Melkerij van Haecht’ veiligstellen.__\n\n__Symbool voor zinloze oorlog__\n\nJammer genoeg konden ze niet beletten dat de Duitse troepen zich terugtrokken in onze ast. Dit hoge gebouw was voor hen strategisch gelegen om de Belgische soldaten op afstand te houden. Terwijl de Belgen probeerden om het gebouw te heroveren, kwamen Eugène De Ro en Camille Kerkhofs per ongeluk in hun vuurlinie terecht. In de avondschemering werden ze door de Belgische troepen verkeerdelijk als de vijand aanzien en beschoten. Camille Kerkhofs raakte daarbij dodelijk getroffen en overleed enkele dagen later, op 28 augustus 1914, aan zijn verwondingen.\n\nDe kogelgaten die tijdens de aanval door de Belgische artillerie in de noordwestelijke gevel geslagen werden, zijn bewust nooit gerestaureerd. Op de bovenste verdieping van de ast is er achteraf een balkon gebouwd. Daar kunnen bezoekers deze stille getuigen van een zinloze oorlog bekijken.\n\n__Brasserie Brouwershof__\n\nCamille Kerkhofs woonde in een villa recht tegenover onze brouwerij. Zijn weduwe verkocht de villa na zijn dood aan Brouwerij Haacht, waarna Eugène De Ro er zijn intrek in nam. Achteraf deed de villa nog dienst als thuis voor verschillende directeurs van Brouwerij Haacht. In 1992 werd ze omgebouwd tot Brasserie Brouwershof, waar je vandaag geniet van lekker eten in een unieke setting.\n"
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Kort na het begin van de Eerste Wereldoorlog braken er zware gevechten uit rond het station van Haacht. Velen sloegen op de vlucht, maar Eugène De Ro, grondlegger van onze brouwerij, en brouwmeester Camille Kerkhofs bleven. Hun doel? De toenmalige ‘Brouwerij en Melkerij van Haecht’ veiligstellen."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "Het ontstaan van de Primus met gist",
                "slug": "primus-met-gist",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1RqtG9kjViUkmA0quMKKqg/012018d022ffb2403fa7217876904e8b/brouwerij-primus.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### KEN JE ONZE PRIMUS MET GIST AL?\n\n__Recht tegenover onze brouwerij vind je Brasserie Brouwershof. Traditioneel worden de brouwerijbezoeken daar afgerond. Naast onze gekende bieren kan je er ook Primus met gist degusteren. Een uniek bier, met een even uniek verhaal.__\n\nBegin 1900 zat er een bierkraantje aan de gevel van de toenmalige vatenhal. Iedereen die op gelijk welk moment in de brouwerij moest zijn, kende dit kraantje en tapte zijn eigen pint bier. Ook de omwonenden en de mannen van ‘den travaux’, de spoorwegarbeiders, wisten dat kraantje maar al te goed te vinden. Zij kwamen met kruiken naar de brouwerij om een voorraad ongefilterd bier in te slaan. Zij wisten toen al dat de aanwezige gist het bier extra smaak en aroma’s bezorgde. \n\nDe Primus met gist die je vandaag in Brasserie Brouwershof vindt, is eigenlijk hetzelfde bier als toen: ongefilterd, rechtstreeks van de lagertank en overheerlijk! Toch kunnen we Primus met gist niet in alle cafés aanbieden. Dat komt omdat de biergist naar de bodem van de fles of het vat zou uitzakken en daar zou blijven ‘plakken’. Het verhaal luidt dat Primus met gist via een rechtstreekse leiding vanuit de brouwerij onder de steenweg door naar Brasserie Brouwershof wordt aangevoerd… "
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Recht tegenover onze brouwerij vind je Brasserie Brouwershof. Traditioneel worden de brouwerijbezoeken daar afgerond. Naast onze gekende bieren kan je er ook Primus met gist degusteren. Een uniek bier met een even uniek verhaal, en enkel te degusteren in Brasserie Brouwershof."
                    }
                  }
                }
              }
            },
            {
              "node": {
                "title": "De schouw van Brouwerij Haacht",
                "slug": "schouw-brouwerij-haacht",
                "featuredImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2Gj3pv06kUGKOk4GIMCEeS/9bffc9bf022f212b3b74b71b8096b6cf/Brouwerij-haacht-schouw.jpg"
                  }
                },
                "content": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "### Onze iconische schouw\n\n__Heel wat jaren geleden schreef een krant: “In de verte doemt de gigantische schouw van Brouwerij Haacht al op. Nog nooit zag ik er rook uitkomen, ze wordt dus al jaren niet meer gebruikt.” Een foute conclusie van de journalist. Want onze trotse schouw, die heeft wel degelijk nog zijn nut.__\n\nWe nemen je graag mee naar 1898, toen onze brouwerij het levenslicht zag. In die tijd stonden hoge fabrieksschouwen symbool voor goed draaiende ondernemingen. Hoe meer schouwen, hoe hoger de welvaart voor de omwonenden. Want fabrieken betekenden werkgelegenheid en dus ook een vast inkomen. \n\n__Bouwkundig huzarenstukje__\n\nBij Brouwerij Haacht was dat niet anders. Maar in de loop der jaren zijn er wel enkele schouwen gesneuveld. Een niet gebruikte schouw raakt immers in verval en vormt dan een reëel gevaar. Eentje staat er wel nog: een bouwkundig huzarenstukje opgetrokken in baksteen en sinds 1910 altijd in gebruik gebleven. Ze voert de rookgassen af die ontstaan bij de aanmaak van stoom. Stoom die nodig is voor onder andere het opwarmen van onze brouwketels.\n\n\n__Belangrijk oriëntatiepunt__\n\nIn 2008 stapten we voor de productie van onze stoom over van zware stookolie op aardgas. Maar de authentieke schouw moest en zou behouden blijven. Want al sinds het begin van Brouwerij Haacht is die schouw een belangrijk oriëntatiepunt in Haacht en omstreken. Bovendien staat ze symbool voor onze lange geschiedenis. \n\n__Witte rook__\n\nOm de gassen optimaal te laten afvoeren, werd met een tachtig meter hoge kraan een roestvrije, stalen pijp in de schouw geplaatst. Tijdens de werkzaamheden bleek dat de schouw aan restauratie toe was. Door de invloed van weer en wind was ze door de jaren heen lichtjes gebogen. Om haar te redden werd ze in de loop van 2012 tot op 35 meter ingekort. Nog steeds een meer dan respectabele hoogte.\n\nDus zwarte rook? Neen, die zal je uit de schouw niet zien opstijgen. In de winter hooguit wat condensatiedampen."
                    }
                  }
                },
                "shortDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Heel wat jaren geleden schreef een krant: “In de verte doemt de gigantische schouw van Brouwerij Haacht al op. Nog nooit zag ik er rook uitkomen, ze wordt dus al jaren niet meer gebruikt.” Een foute conclusie van de journalist. Want onze trotse schouw, die heeft wel degelijk nog zijn nut."
                    }
                  }
                }
              }
            }
          ]
        },
        "press": {
          "edges": [
            {
              "node": {
                "slug": "ommegang-bier-trouwe-partner-van-brusselse-ommegang",
                "title": "Ommegang-bier, trouwe partner van Brusselse Ommegang",
                "pressCategory": {
                  "title": "Persbericht",
                  "titleMultiple": "Persberichten"
                },
                "pressImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/J0fAr8Ei8CWueskwWqyme/eeaa45edf31766c51d89ea73b5948ef2/PB_Ommegang_Brussel.JPG"
                  }
                },
                "published": "2018-06-05",
                "articleReference": null,
                "pdfDocument": null
              }
            },
            {
              "node": {
                "slug": "brouwerij-haacht-120-jaar-jong-en-nog-altijd-eigenzinnig",
                "title": "Brouwerij Haacht - 120 jaar jong en nog altijd eigenzinnig",
                "pressCategory": {
                  "title": "Persartikel",
                  "titleMultiple": "Persartikels"
                },
                "pressImage": null,
                "published": "2018-04-01",
                "articleReference": "Bier Grand Cru",
                "pdfDocument": {
                  "file": {
                    "url": "//assets.ctfassets.net/vlb1ben6vtp9/3Wd25OBZ3iMcY2ueSmSWKO/dc388fac262d5c60100817cf9b9162dc/persartikel_Brouwerij_Haacht_NL.pdf"
                  }
                }
              }
            },
            {
              "node": {
                "slug": "brouwerij-haacht-breidt-super-8-gamma-uit-met-super-8-saison",
                "title": "Brouwerij Haacht breidt SUPER 8-gamma uit met SUPER 8 Saison",
                "pressCategory": {
                  "title": "Persbericht",
                  "titleMultiple": "Persberichten"
                },
                "pressImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2b6EyTvc96U42e2mK20GWe/9c304074e3f44c755d2a63b6a6514f42/PB-november-Super-8_Saison_Glas_Fles-LR.jpg"
                  }
                },
                "published": "2017-11-20",
                "articleReference": null,
                "pdfDocument": null
              }
            },
            {
              "node": {
                "slug": "brouwerij-haacht-steekt-de-vier-tongerlo-bieren-in-een-nieuw-jasje",
                "title": " Brouwerij Haacht steekt de vier Tongerlo-bieren in een nieuw jasje",
                "pressCategory": {
                  "title": "Persbericht",
                  "titleMultiple": "Persberichten"
                },
                "pressImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6r1fbKXJFScWs2YIsSoC4G/06eadda6086fe7302bc534d2d003f317/PB-september-Tongerlo-flesjes.jpg"
                  }
                },
                "published": "2017-09-25",
                "articleReference": null,
                "pdfDocument": null
              }
            },
            {
              "node": {
                "slug": "brouwerij-haacht-lanceert-super-8-blanche",
                "title": "Brouwerij Haacht lanceert SUPER 8 Blanche",
                "pressCategory": {
                  "title": "Persbericht",
                  "titleMultiple": "Persberichten"
                },
                "pressImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/ae606bcbf11c3b0cd5a00d063f33b9ee/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
                  }
                },
                "published": "2017-05-22",
                "articleReference": null,
                "pdfDocument": null
              }
            },
            {
              "node": {
                "slug": "brouwerij-haacht-pakt-uit-met-8-nieuwe-bieren",
                "title": "Brouwerij Haacht pakt uit met 8 nieuwe bieren",
                "pressCategory": {
                  "title": "Persbericht",
                  "titleMultiple": "Persberichten"
                },
                "pressImage": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1zjQislolyu6wqMwqEWYaY/3756d4e672fd7b102350df2efbdaf512/PB-januari-SUPER-8-gamma-LENNEN-DESCAMPS0098_crop.jpg"
                  }
                },
                "published": "2017-01-31",
                "articleReference": null,
                "pdfDocument": null
              }
            },
            {
              "node": {
                "slug": "brouwerij-haacht-koopt-canadese-brouwerij",
                "title": "Brouwerij Haacht koopt Canadese brouwerij",
                "pressCategory": {
                  "title": "Persartikel",
                  "titleMultiple": "Persartikels"
                },
                "pressImage": null,
                "published": "2016-11-04",
                "articleReference": "De Tijd",
                "pdfDocument": {
                  "file": {
                    "url": "//assets.ctfassets.net/vlb1ben6vtp9/LbxL1kpacm880MS6sOGC6/1eeb263141874b4ebdb9b7fe406aadeb/Persartikel_Haacht_koopt_Canadese_brouwer.pdf"
                  }
                }
              }
            },
            {
              "node": {
                "slug": "untitled-entry-2018-02-21-at-03-08-13",
                "title": null,
                "pressCategory": null,
                "pressImage": null,
                "published": null,
                "articleReference": null,
                "pdfDocument": null
              }
            },
            {
              "node": {
                "slug": "dossier-supersenioren-frederic-van-der-kelen",
                "title": "Dossier supersenioren - Frédéric van der Kelen",
                "pressCategory": {
                  "title": "Persartikel",
                  "titleMultiple": "Persartikels"
                },
                "pressImage": null,
                "published": "2017-05-13",
                "articleReference": "Het Laatste Nieuws",
                "pdfDocument": {
                  "file": {
                    "url": "//downloads.ctfassets.net/vlb1ben6vtp9/5QsffI4eWsekouawSgWwWw/4beb3ea17f58f1f90507fde86cf57a24/Persartikel_FvdK_dossier_supersenioren.pdf"
                  }
                }
              }
            },
            {
              "node": {
                "slug": "haacht-brouwt-for-life",
                "title": "Haacht 'brouwt for life'",
                "pressCategory": {
                  "title": "Persartikel",
                  "titleMultiple": "Persartikels"
                },
                "pressImage": null,
                "published": "2017-12-19",
                "articleReference": "Het Laatste Nieuws",
                "pdfDocument": {
                  "file": {
                    "url": "//assets.ctfassets.net/vlb1ben6vtp9/j8lnDCqDvMgGumy6YuGW/7d80a712d8f30c2329ca474bea11b08d/Persartikel_Haacht_brouwt_for_life.pdf"
                  }
                }
              }
            },
            {
              "node": {
                "slug": "super-8-ipa-bier-van-de-week",
                "title": "SUPER 8 IPA bier van de week",
                "pressCategory": {
                  "title": "Persartikel",
                  "titleMultiple": "Persartikels"
                },
                "pressImage": null,
                "published": "2017-08-26",
                "articleReference": "Het Nieuwsblad",
                "pdfDocument": {
                  "file": {
                    "url": "//assets.ctfassets.net/vlb1ben6vtp9/4Cimbng8cwOYsqkCgygqwg/0c64bd45cd06dfe54fbc4589de0f9929/Persartikel_SUPER_8_IPA_NL.pdf"
                  }
                }
              }
            }
          ]
        },
        "merken": {
          "edges": [
            {
              "node": {
                "title": "Château Haut-Saint-Georges-Saint-Emilion a.c.",
                "slug": "chateau-haut-saint-georges-saint-emilion-a.c.",
                "family": {
                  "title": "kasteelwijnen (Bordeaux)"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": [
                  {
                    "id": "c62xWZbX4iIIwI0WKug8YQQ",
                    "title": "Millésime 2014",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Gouden medaille op de 'Tasting to the Best French Wines & Spirits for Germany 2017' \nGouden medaille op de 'Concours Général Agricole 2016' in Parijs"
                        }
                      }
                    }
                  },
                  {
                    "id": "c3btOMA2PC8OGYqcgcIsSqw",
                    "title": "Millésime 2012",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "'Coup de cœur’ in de Guide Hachette 2015\nGrote gouden medaille op de ‘Concours Mondial du Vin de Bruxelles’ 2015"
                        }
                      }
                    }
                  },
                  {
                    "id": "c278XI7aXsc2o4qecwcmI6u",
                    "title": "Millésime 2007",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "'Coup de cœur’ in de Guide Hachette 2011"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2n0feqqClCaoSqSeAM2uew/d95defb0c205b797774ce305afce723d/Chateau_Haut-Saint-Georges_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Orange Zero",
                "slug": "val-orange-zero",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2c1MHneM2E82AIwYOy8Yww/5dc418e7a2c0ca5cb848545d1edc74d2/VAL_Orange_Zero_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "CHRISTMAS",
                "slug": "tongerlo-christmas",
                "family": {
                  "title": "Tongerlo"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7m6IdbWSS4iAOqaYokuseY/cf6af9440d112aebfcef485a358afa62/Tongerlo_Christmass_fles_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Sport",
                "slug": "val-sport",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1NHf6AQzRewmAWSooa4oEG/6a8cc682022627fbb70e41e051a31b7d/VAL_Sport_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Maltosa",
                "slug": "maltosa",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4IzO6ZB3okIS88cOAye0MY/76f969e36e698d4df7f54c758ea7f5c1/Maltosa_fles_25_cl_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Blonde",
                "slug": "blonde",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7HZsSmcHPqYeecAMaOmg2u/2919b46691911c0160254ba8ffc4dc5c/Blonde_fles_25_cl_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Orange",
                "slug": "val-orange",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5VtLX7ZbmEgSmaA4UOQAm6/dcbbd84df83b083d78eeebde5439785c/val_orange_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "NOX",
                "slug": "tongerlo-nox",
                "family": {
                  "title": "Tongerlo"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c5WcRR3hwHK62uEiCaiSc2w",
                    "title": "Zilveren medaille op de Asia Beer Awards 2013",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Zilveren medaille op de [Asia Beer Awards 2013](http://www.beerfestasia.com/) in de categorie 'Brown Ale'"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6jVFZmdaGQUacMyIwG0Uq4/4733af43e5f932e6721e26576ed63a9c/Tongerlo_NOX_fles_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Krieken",
                "slug": "mystic-krieken",
                "family": {
                  "title": "Mystic"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c3AaBRPBuqIEwU2K2KEYAUI",
                    "title": "2 sterren op de Superior Taste Awards 2017 & 2013",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "2 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017 en 2013"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3AoW5JvE40AQk6qyo04U4u/9badb94b479c3c5e5e4069d30b482835/Mystic_Krieken_Fles_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Bourgogne Chablis 'Jean-Marc Aujoux'",
                "slug": "bourgogne-chablis-jean-marc-aujoux",
                "family": {
                  "title": "Bourgogne"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3yk6ytwTGoyMgceusq0maa/3f46b8ba570293050eef176d8561136c/Chablis_Aujoux_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Graves - Château les Clauzots a.c.",
                "slug": "graves-chateau-les-clauzots-a-c",
                "family": {
                  "title": "Bordeaux"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5Nh5iXfEsgi8A4qSiE8Kkg/2b3bc1f2301d00d729f39b0bcf12a41d/Ch__teau_Les_Clauzots_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Château de l'Aumerade Cru Classé Rosé",
                "slug": "chateau-de-laumerade-cru-classe-Rosé",
                "family": {
                  "title": "Provence"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/48c7uGNATSySoUc4sAMQQY/2f8d60b065da4be3b3414940391b1a4e/Ch__teau_de_l_Aumerade_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Cola",
                "slug": "pepsi-cola",
                "family": {
                  "title": "Pepsi"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1vl7dZXyv6iIMqGsqMMk6W/81ed8dc06faa3bba21bc0e0563320c93/Pepsi_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Max",
                "slug": "pepsi-max",
                "family": {
                  "title": "Pepsi"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3YSxeGeLuwsGmCQ0yWCuKe/e32eaad5a98dda58f73fd27b4d839c17/Pepsi_max_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Bruisend",
                "slug": "val-bruisend",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": [
                  {
                    "id": "c4S123ceZ4Ig8CekcGqmUSY",
                    "title": "3 sterren op de Superior Taste Awards 2017",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "3 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1GPJL61v9u0o68oKAsmGQi/8f1b9fc3c4d06036e5a48ccce7743db0/val_bruisend_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Natuur",
                "slug": "val-natuur",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": [
                  {
                    "id": "c5H9ciHjdbG6eEuQ6UmwM2u",
                    "title": "3 sterren op de Superior Taste Awards 2017 & 2012",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "3 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017 en 2012"
                        }
                      }
                    }
                  },
                  {
                    "id": "c5wtujC0TNCecQkCgQ2u88U",
                    "title": "2 sterren op de Superior Taste Awards 2011",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "2 sterren op de [Superior Taste Awards](http://www.itqi.com/nl) 2011"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3BdfpzJyYowSSCOIEYuY6K/9b5370961f0c5dd80452562ebdc83e95/val_niet_bruisend_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Richard dit LeCastor",
                "slug": "richard-dit-lecastor",
                "family": null,
                "category": null,
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6NBxha4o0wUw8ckySaESIa/29c23a7dcddd3c24b43c19b3dca167f6/lecastor_Glas_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Coq Hardi",
                "slug": "coq-hardi",
                "family": null,
                "category": null,
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/VpNoojEl8aCcOMeeK04uc/291834344d2d289e3ab45ea1898dc6d5/Coq_hardi_fles_25_cl_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Pilsener",
                "slug": "Pilsener",
                "family": {
                  "title": "Leeuw"
                },
                "category": null,
                "awards": null,
                "packshot": null
              }
            },
            {
              "node": {
                "title": "Beando Grillo Viognier",
                "slug": "beando-grillo-viognier",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/61MyaHWXCw6EyGQCOUYIeo/e60baaa5363567310698d2721b443096/Beando_Grogio_Viognier_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Domaine La Petite Barde Montagne Saint-Emilion a.c.",
                "slug": "domaine-la-petite-barde-montagne-saint-emilion-a.c.",
                "family": {
                  "title": "kasteelwijnen (Bordeaux)"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4TGTiW3NL2ywiMQWgk6c8e/be05f6bbb7adb25c768f238747a55267/La_Petite_Barde_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Château La Grande Barde Montagne Saint-Emilion a.c.",
                "slug": "chateau-la-grande-barde-montagne-saint-emilion-a.c.",
                "family": {
                  "title": "kasteelwijnen (Bordeaux)"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": [
                  {
                    "id": "c7qDxhO5qggK0O0cCGCwIqA",
                    "title": "2006",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Guide Hachette *"
                        }
                      }
                    }
                  },
                  {
                    "id": "c1X1vttVHKc8WWkMUEi2qyE",
                    "title": "2005",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Revue 'Le Point'\nLa revue du Vin de France"
                        }
                      }
                    }
                  },
                  {
                    "id": "c4qr3Lcjyk8uQ6Gyk0W2UiQ",
                    "title": "2004",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Zilveren medaille 'Concours Mondial du Vin de Bruxelles'\nRevue 'Le Point'\nRevue 'Millésimes'"
                        }
                      }
                    }
                  },
                  {
                    "id": "c5jeMcyy6jmQoikuIOaW4KA",
                    "title": "2003",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Médaille d'argent au 'Concours Mondial du Vin de Bruxelles'\nGuide Hachette"
                        }
                      }
                    }
                  },
                  {
                    "id": "c5yVSrValtCQuG6kCMEkgyW",
                    "title": "2002",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Zilveren medaille 'Concours Mondial du Vin de Bruxelles'\nGuide Hachette *"
                        }
                      }
                    }
                  },
                  {
                    "id": "AVFw4YufXE4QcQg6EQW4w",
                    "title": "2001",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Zilveren medaille 'Concours Mondial du Vin de Bruxelles'"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1iTtDqp7E6kSOca2oIAu0s/6501c71ba0878d70a3a5d71acacc507e/Chateau_La_Grande_Barde_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Crocodile Creek Shiraz/Cabernet Sauvignon",
                "slug": "crocodile-creek-shiraz-cabernet-sauvignon",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/64JhcmTruoqKMqQWYMk0cW/65e8eb4902af37b48906a3821a9bc0ac/Crocodile_Creek_Shiraz_Cabernet_Sauvignon_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Golden Gate Zinfandel",
                "slug": "golden-gate-zinfandel",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3PYdA3kiSIIeYMq8K4SsqM/2c18f0bc9cdd1a6c08704833b47b2e7e/Golden_Gate_Zinfandel_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Vila Alegria - Cabernet Sauvignon",
                "slug": "vila-alegria-cabernet-sauvignon",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3QErK6u3QkiuMOccu0secC/44880ede51afd2758d51638a1b6f875f/Vila_Alegria_rood_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Vina La Pinta - Malbec",
                "slug": "vina-la-pinta-malbec",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4p2hxpinrawumaSkykUCKu/7d2e65864091cc977c026b7ff00edfde/La_Pinta_rood_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Finca Terra Merlot",
                "slug": "finca-terra-merlot",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4aVhgRgvW82McgQUcmCswG/5aeb900de235409fc412df438badb586/Finca_Terra_Merlot_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Massai Shiraz",
                "slug": "massai-shiraz",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5KtFU8zFgAIIiWQskaEk8A/8afdf1df90f56056fb9457361a488ae4/Massai_Shiraz_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Cape 312 Pinotage",
                "slug": "cape-312-pinotage",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/58ytoTMRTWoIiqKK2gmSEw/76f660f234215280b56b65b3c5dd4aff/Cape312_Pinotage_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Châteauneuf du Pâpe 'La Fagotière'",
                "slug": "chateauneuf-du-pape-la-fagotiere",
                "family": {
                  "title": "Rhônevallei"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4KYB0tpav6KWEu0CgMiuaU/066b7ac786052165116c8d529f1bf156/Ch__teauneuf-du-P__pe_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Beando Sangiovese",
                "slug": "beando-sangiovese",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Jb6FzN4SAsiMqsKEYc60s/ac060b8a4ac770c7732f79a99c8ac61b/Beando_Sangiovese_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Don Pedro de la Vega 'Reserva'",
                "slug": "don-pedro-de-la-vega-reserva",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2mEf7VHZ5y6uUqiAWQkw4k/f8bac940bda1a714db9ec140cedc2592/Don_Pedro_de_la_vega_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Baron Amado - Tempranillo",
                "slug": "baron-amado-tempranillo",
                "family": {
                  "title": "Bordeaux"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/ABxrvoEZ4O8EWWgsqWCyy/5db94c3411d3a905facf0cb90558952c/Baron_Amado_Tempranillo_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Terre du Sud Rouge",
                "slug": "terre-du-sud-rouge",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4kRVUgdADYQAUKsIymWYAq/39c1a6b4f7d7a6955ff11495c8c03c03/Terre_du_Sud_Rood_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Bourgogne Côte Chalonnaise 'Pinot Noir'",
                "slug": "Bourgogne-Côte-Chalonnaise-Pinot-Noir",
                "family": {
                  "title": "Bourgogne"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4cQF1KTWTKqiMceiWOkkci/df723f361b835709bed2d03a6f1fdb3c/Boutgogne_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Margaux ‘La Réserve d'Angludet’",
                "slug": "margaux-la-reserve-dangludet",
                "family": null,
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5kjVCcvMf6yi0wQsGgiGoA/a31a1a82183c13d5c17817c656b6736f/La_reserve_d_angludet_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Château Chêne de Gombeau 'Canon Fronsac a.c.'",
                "slug": "chateau-chene-de-gombeau-canon-fronsac-a.c.",
                "family": {
                  "title": "Bordeaux"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6FFafbFc1Uu2meqyAqUQUs/7095e375619d2102214e834f620ded9a/Chateau_Ch__ne_de_Gombeau_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Château de Pardaillan Bordeaux supérieur a.c.",
                "slug": "chateau-de-pardaillan-bordeaux-superieur-a.c.",
                "family": {
                  "title": "Bordeaux"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/62rkgbsdrOOAuwiye6WqWq/362c0c7478e92952ec90652c3ade3c3e/Chateau_de_Pardaillan_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Haut Médoc Cru Bourgeois a.c. 'Château Corconnac'",
                "slug": "haut-medoc-cru-bourgeois-a.c.-chateau-corconnac",
                "family": {
                  "title": "Bordeaux"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/GBfQUjEduowkUUc6uoeqG/57ce7df633ab1c02cf649165c251da22/Chateau_Corconnac_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Caves-Saint-Christophe 'Cabernet Sauvignon'",
                "slug": "caves-saint-christophe-cabernet-sauvignon",
                "family": {
                  "title": "Languedoc"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2TpxG1jDVKoSQqmgI4u4s2/785c5fd77b0ae992924f9d43a2d2edaf/CSC_Cabernet_Sauvignon_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Charme de Mauriac Rouge",
                "slug": "charme-de-mauriac-rouge",
                "family": {
                  "title": "Languedoc"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/wbvDEJwtTEI0Ci88cE44G/a0a771499f2f4efbebc06d5d52f40347/Charme_de_Mauriac_Syrah_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Choix de Rimay Rouge",
                "slug": "choix-de-rimay-rouge",
                "family": {
                  "title": "Languedoc"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6DGaxazLRCUkuioOSkockm/4acd4073b2db4e56a19f75eae7e86ea3/Choix_De_Rimay_Rood.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Prosecco Eterna",
                "slug": "prosecco-eterna",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5deEBllibYKgQEIsgW6iu0/cb4ec539c6d4b9e07d87683ce419b987/Prosecco_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "'Duc de Blanc' Blanc de Blancs Brut",
                "slug": "duc-de-blanc-blanc-de-blancs-brut",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/66DD51eCD6kKgo44u4GQcW/94c8ede1fcd9f0f7760f534e4eb2f6b8/Duc_de_Blanc_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Cava 'Mas d'Ancosa' Brut",
                "slug": "cava-mas-dancosa-brut",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1BhIrTkp6gIsEU2eMcA0EK/c5f60ed36f7ce3a3eab5de4940d0d841/Cava_Mas_d_Ancosa__400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Cape 312 Rosé",
                "slug": "cape-312-rose",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4krO5CCy6kUMeaKay8KaOE/ba39bf527bafd49f9df51a71c55e8486/Cape_312_Ros___400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Terre du Sud Rosé",
                "slug": "terre-du-sud-rose",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3j37dD4dG0AmYQS2SQgcC2/f79af4ab6761b7224c8c6f6917f46563/Terre_du_Sud_Ros___400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "La Rosée de la Grande Barde Bordeaux rosé a.c.",
                "slug": "la-rosee-de-la-grande-barde-bordeaux-rosé-a.c.",
                "family": null,
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7vHjIKnZza6eQYSKGKqkMs/db6463d16896f8028e389b102c5fdc47/La_Ros__e_de_la_Grande_Barde_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Rosé d'Anjou 'L. Vivier' a.c. demi-sec",
                "slug": "rose-danjou-l-vivier-a.c.-demi-sac",
                "family": {
                  "title": "Loire"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4QaTVm4g0MAGgCCuWWeGgS/40dbc739ae7ac5ddd01172fe7f88735a/Ros___d_Anjou_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Choix de Rimay Rosé",
                "slug": "choix-de-rimay-rose",
                "family": {
                  "title": "Languedoc"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6PneShmxnGYcIAqEgGIqq2/09e12b381c3aad7f571856d031b93f94/Choix_De_Rimay_Ros__.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Vila Alegria - Sauvignon Blanc",
                "slug": "vila-alegria-sauvignon-blanc",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Vninw57jaGiIK8gQ84E0/d116fe7c956823c038acc03ddc522df8/Vila_Alegria_wit_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Finca Terra 'Chardonnay Viognier'",
                "slug": "finca-terra-chardonnay-viognier",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5KNmKtanNmwMaWEEeyeQwW/7e783ef7ecffe35d349e12c7fccc450c/Finca_Terra_Chardonnay_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Vina La Pinta - Chardonnay",
                "slug": "vina-la-pinta-chardonnay",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5CT24b83wksy6ic0EAsumY/fb84ef6cb4fa77725c267a62de7a6b36/La_Pinta_wit_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Golden Gate Chardonnay",
                "slug": "golden-gate-chardonnay",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1Xmg6fXvw4M8GCymmWcgqy/1e066780898aaa40a106dc9f3edd842c/Golden_Gate_Chardonnay_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Crocodile Creek chardonnay",
                "slug": "crocodile-creek-chardonnay",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5TdHLbWtCEgo6ASAMS2E60/e05df0c775f33a89563c9672d845d8c1/Crocodile_Creek_Chardonnay_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Silver Lining - Chenin Blanc",
                "slug": "silver-lining-chenin-blanc",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3mgARqlxKMyIOQiEmMswm/c5dda0e3ef0826e21d20e39132ec89e8/Silver_lining_Chenin_Blanc.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Massai Viognier",
                "slug": "massai-viognier",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2SfcsnYiLuQcucwqYgimOY/730557be46734d1a9ad286c687b70884/Massai_Viognier_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Cape 312 Chardonnay",
                "slug": "cape-312-chardonnay",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5FmjwqDYpaigIeM2Me0eWW/5f6b4252cca0eacdac50e43b7f28b55b/Cape312_Chardonnay_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Baron Amado Moscatel - Malvasia",
                "slug": "baron-amado-moscatel-malvasia",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6k98p8rABOcsMuYS0cyqsA/18b32dc12308cc807eaaebc638d9a08f/Baron_Amado_Moscatel_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Beando Pinot Grigio",
                "slug": "beando-pinot-grigio",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1EzXhuhsM0gSkSQiqEaqee/ca082cc8d0f441335f43dc1f663a2688/Beando_Pinot_Grigio_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Rüdesheimer Rosengarten Royal Blau",
                "slug": "rüdesheimer-rosengarten-royal-blau",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2nhOIlZo9igmGiGuikQWia/c0fbc673d4b5804877203604b95514e9/rudesheimer_rosengarten_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Rivaner Rhein und Mosel",
                "slug": "rivaner-rhein-und-mosel",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1qIZtpMSBGiSMgYyacUmYm/fc549dc1686611586e269f77c081232e/Rivaner_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Dr Zenzen Mosel Riesling Trocken",
                "slug": "dr-zenzen-mosel-riesling-trocken",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6zZZGU017qIWw2W8kca2ia/d9760b5c3c9fb592ab3adf587716aa0d/Dr.Zenzen_Mosel_Riesling_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Terre du Sud Blanc",
                "slug": "terre-du-sud-blanc",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6Iw5rBOWUoi8sUsQEka6Gg/95705de633439b1626027ccda70befd1/Terre_du_Sud_wit_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Monbazillac - Château Pion a.c.",
                "slug": "monbazillac-chateau-pion-a-c",
                "family": {
                  "title": "Bordeaux"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6Dj6v8hzZ6CO00GyUgUmiw/fe312ff0608bb173197cf33944fef0cc/Ch__teau_Pion_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Muscadet sur Lie ‘Domaine des Raillères’",
                "slug": "muscadet-sur-lie-domaine-des-railleres",
                "family": {
                  "title": "Loire"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6SZI31Fi6cqiIsaoE8c6E/897a6a3414f0fcfacfd8c029cf953c7b/Muscadet_sur_Lie_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Côtes du Rhône 'Château de Tresques'",
                "slug": "cotes-du-rhone-chateau-de-tresques",
                "family": {
                  "title": "Rhônevallei"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3O4uLsQlQ4qUKOEKWsKKcY/be00a1c2fc5b380f212d3e715f23e299/Ch__teau_de_Tresques_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Caves-Saint-Christophe 'Chardonnay'",
                "slug": "caves-saint-christophe-chardonnay",
                "family": {
                  "title": "Languedoc"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1E90e6OiBWgs424GcuMWqW/2b8949b1b17724caf055318cc9d3b130/Caves-Saint-Christophe-Chardonnay.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Charme de Mauriac Wit ° Blanc",
                "slug": "charme-de-mauriac-wit-blanc",
                "family": {
                  "title": "Languedoc"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/9XZ3QIqLMQ4me2g4Wya6S/dfcbdaef434b3a29923d40b73b1e44b2/Charme_de_Mauriac_Sauvignon_blanc_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Jacques Dépagneux Moulin à Vent veilles vignes a.c.",
                "slug": "Jacques-Dépagneux-Moulin-à-Vent-veilles-vignes-a.c.",
                "family": {
                  "title": "Beaujolais"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6yPpafcd0WOeu6wsGuo8WK/e8a6daed2dbcd46ae260116d62324430/Moulin-a-Vent.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Choix de Rimay Wit ° Blanc",
                "slug": "choix-de-rimay-wit-blanc",
                "family": {
                  "title": "Languedoc"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6zcKlvqfioGWMo8Yg8Cc4/4cef18927a191e34db86e7e1cb44bd0a/Choix_De_Rimay_Wit.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Gewurtztraminer a.c. Charles Muller et fils",
                "slug": "Gewurtztraminer-a.c.-charles-muller-et-fils",
                "family": {
                  "title": "Elzas"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2ofDagOovi6UksM8Iyg2Oi/3682cbddc2c286da591e466a582abdb2/Gewurztraminer_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Pinot Gris a.c. Charles Muller et fils",
                "slug": "pinot-gris-a.c.-charles-muller-et-fils",
                "family": {
                  "title": "Elzas"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6IsVgL5ALmwMgaGeuY0AQS/daf5fd90ff03797b0cafa214f9286aa6/Charles_Muller___Fils_Pinot_Gris_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Pinot Noir a.c. Charles Muller et fils",
                "slug": "pinot-noir-a.c.-charles-muller-et-fils",
                "family": {
                  "title": "Elzas"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3c7bo0w6sMA8wSK8KAus8i/fed47951ac6554b0eedf450639da1888/Charles_Muller___Fils_Pinot_Noir_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Pinot Blanc a.c. Charles Muller et fils",
                "slug": "pinot-blanc-a.c.-charles-muller-et-fils",
                "family": {
                  "title": "Elzas"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4BI1qYq4CAQou22020q6Oi/34d8c34dcd46f50a0dca247051741d12/Charles_Muller___Fils_Pinot_Blanc_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Goud Blond",
                "slug": "keizer-karel-goud-blond",
                "family": {
                  "title": "Keizer Karel"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c6pqHI8SMdUu46cQ6AMm4kG",
                    "title": "Zilveren medaille op de World Beer Awards 2014",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Zilveren medaille op de [World Beer Awards 2014](http://www.worldbeerawards.com/charles-quint-golden-blond.23143.html) in de categorie 'Europe - Pale Beer - Belgian Style Strong'."
                        }
                      }
                    }
                  },
                  {
                    "id": "c4K7dqG7A64ueue88C80EaY",
                    "title": "Superior Taste Awards",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) 2014 en 2011"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/33NE3LI9KE2a8uiOoAyKqO/62a446f7ceeb6a29cd1ce1f418d1ea52/Keizer_Karel_Goud_Blond_Fles_33cl_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Adler",
                "slug": "adler",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5pb2SU2SukYkQeSiUGsYQS/5d41c6b3c0c02e2969d2b5204a3a4317/adler_fles_25cl_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Primus",
                "slug": "primus",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "edKi0PJ27uMk6AaMIMsai",
                    "title": "World Beer Awards 2015",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "__Bronzen medaille__ op de [World Beer Awards 2015](http://www.worldbeerawards.com/2015/europe/belgium.html) in de categorie Belgium - German Style Pale Lager"
                        }
                      }
                    }
                  },
                  {
                    "id": "c218mc4BZU42SOEgIuIiWku",
                    "title": " Drie sterren op Superior Taste Awards 2015 & 2013",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "__3 sterren__ op de [Superior Taste Awards](http://www.itqi.com/) in 2015 en 2013"
                        }
                      }
                    }
                  },
                  {
                    "id": "c2Q8nn3AlhmSMc2AQqS0s08",
                    "title": "Superior Taste Awards in 2012 en 2011",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "__2 sterren__ op de [Superior Taste Awards](http://www.itqi.com/) in 2012 en 2011"
                        }
                      }
                    }
                  },
                  {
                    "id": "c54SvdvIrLOqKySaMkEiMUo",
                    "title": "De Grote Pilstest van Het Nieuwsblad",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Primus staat in de __Top 3__ van een blindtest van 44 pilsbieren, uitgevoerd door __Test Aankoop__ in oktober 2011, en behaalde een gedeelde __tweede plaats in de Grote Pilstest van Het Nieuwsblad__ op 4 augustus 2012."
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/UdwDF0TvMWyOaoEAOOuEm/b1723b312f867676b9f718825989066c/Primus_25cl_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "SAISON",
                "slug": "saison",
                "family": {
                  "title": "Super 8"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6hgVAcEMGkOeQqqYoicAwE/2f71cac33588cbcc37909e4973b4d955/Super-8-Saison-Bottle.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Fuerto Espresso",
                "slug": "fuerto-espresso",
                "family": null,
                "category": {
                  "slug": "koffies"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6iYRsYEqbumo8O2QSM2Kuo/54a51aabc3ebbbe3b51a10268229108b/Fuerto_Espresso_800x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Fuerto Deca",
                "slug": "fuerto-deca",
                "family": null,
                "category": {
                  "slug": "koffies"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/pNo3gJO7leOEaqG2sMcWI/7dfdcebcb48894e86a3751ea63a27fce/Fuerto_DECA_800x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Fuerto Arabica",
                "slug": "fuerto-arabica",
                "family": null,
                "category": {
                  "slug": "koffies"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4QDuIbrKo8egqeWEUKEosg/2d75862d7daa61df8ba2f45461358e37/Fuerto_Expresso_Arabica_800x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Agrumes ",
                "slug": "val-agrumes",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/52gzBSwbHWA0UuWoeYaqkO/e15ff28ee49dd132b3d60721e20c5f79/val_Argumes_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Bitter Lemon",
                "slug": "val-bitter-lemon",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4YhtvouDAsYOWmEQMgGuW/937ac50246fb0681d68a69d004a55d4e/val_lemon_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Tonic",
                "slug": "val-tonic",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7u2syG3ZNCOiwu6K8MYkaM/14be8dd8143702e0939bea7ee2278c94/val_tonic_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Tea",
                "slug": "val-tea",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3wnSAcY86AMukIqAMsGucq/9864917fe37828f270377c67349069e2/val_tea_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Lime",
                "slug": "val-lime",
                "family": {
                  "title": "VAL"
                },
                "category": {
                  "slug": "waters-frisdranken"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/veibW3RC5EY2cOYWmYwWc/90d768222e6d418c96db4a5bfabda17b/val_lime_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Najaarsbock",
                "slug": "najaarsbock",
                "family": null,
                "category": null,
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6qp00hQcZUYOceoaQa04I8/c788d00b24998bb810a7cf3a54fb669c/Leeuw_Najaarsbock_fles_400x1530__1_.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Oud Bruin",
                "slug": "oud-bruin",
                "family": null,
                "category": null,
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/2LrgdjHAgwkccKWGK4EQ4c/a94f4a6bcd73334490c3841ea247c55e/Leeuw-Bier_OudBruin_75cl_tiny__1_.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "IPA",
                "slug": "super-8-ipa",
                "family": {
                  "title": "Super 8"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c4S123ceZ4Ig8CekcGqmUSY",
                    "title": "3 sterren op de Superior Taste Awards 2017",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "3 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/57BBz2u2SQYWus4wEkW86a/9615edb5fcd4e3ee93cc324bb203d5bf/Super_8_IPA_Fles_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Speciale 1900",
                "slug": "speciale-1900",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c5Vfj5sBgRi6gK6Ai4s8OCW",
                    "title": "Sinds 2009 erkend als Vlaams Streekproduct",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Sinds 2009 erkend als [Vlaams Streekproduct.](http://www.streekproduct.be/)"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3RuQTomGVy8m0ACIsWWEqm/c54ecc27a260c5ca8c5ef285a63c23dd/Speciale_1900_glas__spiegeling.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "BLANCHE",
                "slug": "super-8-blanche",
                "family": {
                  "title": "Super 8"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c5ROZ34RYcwCs8ASQSgK6Am",
                    "title": "Country Winner op de World Beer Awards 2017",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Country Winner op de [World Beer Awards 2017 ](http://www.worldbeerawards.com/) in de categorie 'Belgium Style Witbier'"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/4YC5w8SAM8kMYyAyscgeGy/9d2117ff02c50b9e7e95d89182e7ff6a/Super_8_Blanche_Fles_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Radler",
                "slug": "mystic-radler",
                "family": {
                  "title": "Mystic"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "Ln1Jp6VjsQEA8wuWeuICg",
                    "title": "2 sterren op de Superior Taste Awards 2017",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "2 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017"
                        }
                      }
                    }
                  },
                  {
                    "id": "c2ps164teRu8cAq4wgkYaKS",
                    "title": "Gouden medaille op de World Beer Awards 2015",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Gouden medaille op de [World Beer Awards 2015](http://www.worldbeerawards.com/2015/europe/belgium.html) in de categorie Belgium - Fruit Flavoured Beer"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3IbfIiInOwMqoE4YsQOQWO/3d3aabb9f82bf4c5ff7302884904fe82/Mystic_Radler_Fles_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Perzik",
                "slug": "mystic-perzik",
                "family": {
                  "title": "Mystic"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c3uwNtl0dYAsaeyIgqsMQkU",
                    "title": "3 sterren op de Superior Taste Awards 2014",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) in 2014."
                        }
                      }
                    }
                  },
                  {
                    "id": "wHe9Dv1hIc2KA4KYwOE2S",
                    "title": "Gouden medaille op de Asia Beer Awards 2013",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Gouden medaille op de [Asia Beer Awards 2013](http://www.beerfestasia.com/) in de categorie 'Flavoured beers'"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/62McPOlNqo4Uig8soGYcIC/935f7c25bed76ef363ef5d958377c791/Mystic_Perzik_Fles_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Ommegang",
                "slug": "ommegang-keizer-karel",
                "family": {
                  "title": "Keizer Karel"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c1IZJkl6enGAy2OCEmeCGQK",
                    "title": "Belgische winnaar op de World Beer Awards 2016",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Belgische winnaar op de [World Beer Awards 2016](http://www.worldbeerawards.com/2016) in de categorie Belgium - Lager Strong"
                        }
                      }
                    }
                  },
                  {
                    "id": "c6qVO7tRUTCae2Qq844Ogga",
                    "title": "Zilveren medaille op de World Beer Awards 2015",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Zilveren medaille op de [World Beer Awards 2015](http://www.worldbeerawards.com/2015/europe/belgium.html) in de categorie Belgium - Belgian Style Strong Pale Ale"
                        }
                      }
                    }
                  },
                  {
                    "id": "Z1UXweqxmm4aUQekiMiSa",
                    "title": "3 sterren op de Superior Taste Awards",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) 2014, 2013 en 2012"
                        }
                      }
                    }
                  },
                  {
                    "id": "c5vWYtwipe8UUq6k6ywoUOI",
                    "title": "Crystal Taste Award in 2014",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "[Crystal Taste Award](http://www.itqi.com/en/superior-taste-award/crystal-award.html) in 2014\nHet Ommegang-bier werd bekroond met__ 3 sterren__, de hoogst mogelijke score, op de __Superior Taste Awards 2012, 2013 en 2014__. Producten die dit resultaat drie jaar na mekaar behalen, krijgen de __Crystal Taste Award__ toegekend."
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1c96994MRCoIEMMO08ekwe/3bb8b545b98464147c12efc9f483db58/Keizer_Karel_Omegang_Fles_33cl_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Robijn Rood",
                "slug": "keizer-karel-robijn-rood",
                "family": {
                  "title": "Keizer Karel"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c4K7dqG7A64ueue88C80EaY",
                    "title": "Superior Taste Awards",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) 2014 en 2011"
                        }
                      }
                    }
                  },
                  {
                    "id": "c2jozAK7H6MOwyi0YuugAkW",
                    "title": "Brons op de World Beer Awards 2013",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Brons in de categorie 'Europe - Dark Beer - Belgian Style Strong' op de [World Beer Awards](http://www.worldbeerawards.com/beer/haacht_bewery_charles_quint_ruby_red-7968.html) 2013"
                        }
                      }
                    }
                  },
                  {
                    "id": "c2PzAL3IBJugy2yIoCimqy8",
                    "title": "1° prijs in 2005 en 2003 op het Internationaal Streekbierenfestival",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "1° prijs in 2005 en 2003 op het [Internationaal Streekbierenfestival](http://flanderseventsvzw.be/), in de categorie ‘geprononceerd degustatiebier’"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6ym78zuTwAco4qO0yQQW8O/2677bd3e1e53dc05751f49d02ccfe01d/Keizer_Karel_Robijn_Fles_33cl_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Prior",
                "slug": "tongerlo-prior",
                "family": {
                  "title": "Tongerlo"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "fRxI9pRNdeyUCGeOQaSoA",
                    "title": "3 sterren op de Superior Taste Awards 2015",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.org/) 2015"
                        }
                      }
                    }
                  },
                  {
                    "id": "c7cTcd8jNw4AiCwuWoA86Y8",
                    "title": "Gouden medaille op de Brussels Beer Challenge 2013",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Op de tweede editie van de [Brussels Beer Challenge](http://www.brusselsbeerchallenge.com/nl) behaalde Tongerlo PRIOR goud in de categorie 'Pale & Amber Ale/Belgian Style Tripel'"
                        }
                      }
                    }
                  },
                  {
                    "id": "c1wAcaz090oqemOOW6Uky0k",
                    "title": "Crystal Award op de Superior Taste Awards 2012",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "__Crystal Award op de [Superior Taste Awards](http://www.itqi.org/) 2012__\n120 chef-koks en sommeliers met internationale faam bekroonden Tongerlo PRIOR met 3 sterren voor zijn superieure smaak. En dit voor het derde jaar op rij, want ook in 2011 en 2010 kreeg het al 3 sterren toebedeeld. "
                        }
                      }
                    }
                  },
                  {
                    "id": "fThFSN2BVYA4O6AQEEM0w",
                    "title": "Beste Europees blond abdij/trappistenbier",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Tijdens de editie 2011 van de [World Beer Awards](http://www.worldbeerawards.com/) werd Tongerlo PRIOR uitgeroepen tot het beste bier in de categorie Europees blond abdij/trappistenbier. Voor ons een bekroning voor de dagelijkse zorg en toewijding die wij besteden aan het brouwen van dit unieke bier."
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/axVD1GAlSS0GuIgM0Iw2o/3091ac76beb69bb33bbf5b8153d90a89/Tongerlo_PRIOR_fles_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "LUX",
                "slug": "tongerlo-lux",
                "family": {
                  "title": "Tongerlo"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "c69uWucm0fuEsU8iyAmyo6O",
                    "title": "Certificate of Excellence",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Certificate of Excellence op de [Brussels Beer Challenge 2016](http://docs.brusselsbeerchallenge.com/brusselsbeerchallenge/BBC2016_Awards_list_Categories_EN.pdf)"
                        }
                      }
                    }
                  },
                  {
                    "id": "j9QgkQqLJeUqgGaC6SeWq",
                    "title": "World's Best Beer 2014",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Verkozen tot World's Best Beer (Beste Bier ter Wereld) op de [World Beer Awards 2014](http://www.worldbeerawards.com/)"
                        }
                      }
                    }
                  },
                  {
                    "id": "c3OkkSkF4LmWsM8SOcaSoY6",
                    "title": "Zilver op de Asia Beer Awards 2013",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Zilver op de [Asia Beer Awards](http://www.beerfestasia.com/) 2013 in de categorie 'Belgian Blonde Ale'"
                        }
                      }
                    }
                  },
                  {
                    "id": "c1bIu8NqEgoMkiywysAsyqG",
                    "title": "Australian International Beer Awards 2012",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "Brons op de [Australian International Beer Awards 2012](http://www.beerawards.com/) in de categorie 'Best Belgian and French Style Ale - Abbey Blonde'"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/d57nfpBq9yS8g4GUouYOo/06791be51684d799db7d5ba9182fa90c/Tongerlo_LUX_fles_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "EXPORT",
                "slug": "super-8-export",
                "family": {
                  "title": "Super 8"
                },
                "category": {
                  "slug": "bieren"
                },
                "awards": [
                  {
                    "id": "Ln1Jp6VjsQEA8wuWeuICg",
                    "title": "2 sterren op de Superior Taste Awards 2017",
                    "awardsDescription": {
                      "childMarkdownRemark": {
                        "internal": {
                          "content": "2 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017"
                        }
                      }
                    }
                  }
                ],
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3aSw2cXJIIyKAgA46seOCs/16e9f9a3394e3dc6b4ba2c502338b216/Super_8_Export_Fles_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Sancerre - Réserve Paradis",
                "slug": "sancerre-reserve-paradis",
                "family": {
                  "title": "Loire"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/49cujShdBSQsYYYgeQ0y2K/a1786a4ac61917f56a2d80ee57700eb7/Sancerre_R__serve_Paradis_gr_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Mâcon-Villages ‘Château de Chazoux’",
                "slug": "macon-villages-'chateau-de-chazoux'",
                "family": {
                  "title": "Bourgogne"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7GmaPxvIrYCOUeYOacQUQi/d09705d1ef17d6d3f69f56b27699b559/Ch__teau_de_Chazoux_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Silver Lining - Merlot-Cinsault",
                "slug": "silver-lining-merlot-cinsault",
                "family": {
                  "title": "Wereldwijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1fMHC4CNdqEOagAEcMIoYE/e8208da2ed49769ae62810eb6b2ae968/Silverlining_Cabernet_Sauvignon-Merlot_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Pomerol - Château Hautes Rouzes",
                "slug": "pomerol-chateau-hautes-rouzes",
                "family": {
                  "title": "Bordeaux"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7Mpt1va7KMGaUaOKAAaMi0/98a7ce3dac927ca3c4ded8d99cf6d384/Chateau_Des_Hautes_Rouzes_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Beando Primitivo",
                "slug": "beando-primitivo",
                "family": {
                  "title": "Europese wijnen"
                },
                "category": {
                  "slug": "wijnen"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/70kcZcHTAQECGMm4oGw6GM/13eee749e0239f4ba1702a8b36888a55/Beando_Primitivo_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Eupener Bier",
                "slug": "eupener-bier",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5HbQL1e6SQUcSOgK6IOa8E/e44efbde2edace04dbfc6f845462e667/Eupener_glas_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Star Blond",
                "slug": "star",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/7EzulzvWA8OKaiqgIQYQS/f7ea16ccf67ec623d4ba2a188e9c0714/Star_fles_25_cl_400x1530_mini.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Mill's Scotch Ale",
                "slug": "mills-scotch-ale",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5247Qatv1SeisSq6GSC6cg/f38280a4c8907b8f68005e41ea18d897/Mills_Glas_400x1530.png"
                  }
                }
              }
            },
            {
              "node": {
                "title": "Gildenbier",
                "slug": "gildenbier",
                "family": null,
                "category": {
                  "slug": "bieren"
                },
                "awards": null,
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/5BpNuJt0hq208cQ2E8Aweq/48657964b61d0bf3e26daadfe1c52fbb/Gildenbier_fles_400x1530_mini.png"
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
                "slugFinal": "nl-be/brouwerij/artikels/nieuws"
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
        "navId": "c1DzxdxolMIwGMs2wMucG8W",
        "slug": "brouwerij/artikels/evenementen"
      }
    },
    "page": {
      "componentChunkName": "component---src-templates-news-js",
      "layout": "layout---index",
      "layoutComponentChunkName": "component---src-layouts-index-js",
      "jsonName": "nl-be-brouwerij-artikels-evenementen.json",
      "path": "/nl-BE/brouwerij/artikels/evenementen"
    }
  },
  "data": {
    "content": {
      "noNewsMessages": "Geen nieuwsberichten beschikbaar",
      "storyIntroTitle": "Verhaal",
      "noNews": "Geen nieuws beschikbaar",
      "noEvents": "Geen evenementen beschikbaar",
      "metaTitles": [
        "Ons laatste nieuws | Brouwerij Haacht",
        "Leven in de brouwerij | Events Brouwerij Haacht",
        "Blijf op de hoogte | Publicaties Brouwerij Haacht",
        "De verhalen achter Brouwerij Haacht | Authentiek vakmanschap",
        "Brouwerij Haacht in de pers | Authentiek vakmanschap",
        "Onze dranken in de prijzen | Brouwerij Haacht"
      ],
      "metaDescriptions": [],
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
      "linkToBrands": {
        "slug": "merken"
      },
      "singleNewsLink": {
        "slug": "brouwerij/nieuws"
      },
      "singleEventLink": {
        "slug": "brouwerij/evenement"
      },
      "singlePressLink": {
        "slug": "brouwerij/pers"
      },
      "storyLink": {
        "slug": "brouwerij/artikels/verhalen"
      },
      "pressLink": {
        "slug": "brouwerij/artikels/pers"
      },
      "singleStoryLink": {
        "slug": "brouwerij/verhaal"
      },
      "buttonReadStory": "Lees verhaal",
      "noNewsArticles": "Geen nieuwsartikelen beschikbaar",
      "headerNavigation": [
        "Nieuws",
        "Evenementen",
        "Publicaties",
        "Verhalen",
        "Pers",
        "Awards"
      ],
      "newsHighlight": "Uitgelicht",
      "evenementInDeKijker": "Evenement in de kijker",
      "buttonViewWebsite": "Bezoek website",
      "meerNieuws": "Meer nieuws",
      "moreInfo": "Meer info",
      "buttonLoadMore": "Laad meer",
      "news": "Nieuws",
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
      "headerImageOrVideo": [
        {
          "video": null,
          "headerImage": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/5fxLlMIAk0acEgMQ60CUQU/c3289d66128bfe9f51100714b2a28810/nieuws.jpg"
            }
          },
          "videoWebm": null,
          "mobileVideo": null,
          "mobileVideoWebm": null,
          "poster": null
        },
        {
          "video": {
            "file": {
              "url": "//videos.ctfassets.net/vlb1ben6vtp9/52gAc0u2vuOwKUQ2uYgMsi/fc0251cc537e31aecdd3b9e0fa6440db/events-video-final-compressed.mp4"
            }
          },
          "headerImage": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/2y4WSOjaIUsMwuuQ0AoeqK/10e8f02dd200fb6fdce6b9450e8edd40/evenementen.jpg"
            }
          },
          "videoWebm": {
            "file": {
              "url": "//videos.ctfassets.net/vlb1ben6vtp9/36KFQUWs7eUgc0eCuye6QG/f7d814c16c1b9ce452ae86d153dfb6b0/events-video-final-compressed.webm"
            }
          },
          "mobileVideo": {
            "file": {
              "url": "//videos.ctfassets.net/vlb1ben6vtp9/52gAc0u2vuOwKUQ2uYgMsi/fc0251cc537e31aecdd3b9e0fa6440db/events-video-final-compressed.mp4"
            }
          },
          "mobileVideoWebm": {
            "file": {
              "url": "//videos.ctfassets.net/vlb1ben6vtp9/36KFQUWs7eUgc0eCuye6QG/f7d814c16c1b9ce452ae86d153dfb6b0/events-video-final-compressed.webm"
            }
          },
          "poster": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/IG6tp8wVSCQSiI60i04WE/90b4be8f272dc16be6efff845e2c9eb5/banner-events.jpg"
            }
          }
        },
        {
          "video": null,
          "headerImage": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/4gKUAUUQs8YOY6iQc2wGiw/40293de6bd859860ffc1321212930c00/publicaties.jpg"
            }
          },
          "videoWebm": null,
          "mobileVideo": null,
          "mobileVideoWebm": null,
          "poster": null
        },
        {
          "video": null,
          "headerImage": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/3GmDRr8MAU4siAOoikoQkE/e7f2ecb05ffd6072e304345a542f3ff5/verhalen.jpg"
            }
          },
          "videoWebm": null,
          "mobileVideo": null,
          "mobileVideoWebm": null,
          "poster": null
        },
        {
          "video": null,
          "headerImage": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/4DeBenpjfyOGMmWUKc2kiy/8182743df219139f2e8670464c2d8f4d/pers.jpg"
            }
          },
          "videoWebm": null,
          "mobileVideo": null,
          "mobileVideoWebm": null,
          "poster": null
        },
        {
          "video": null,
          "headerImage": {
            "file": {
              "url": "//images.ctfassets.net/vlb1ben6vtp9/5rQJAWFMPYyY44ca0o0Osu/3325e980d85ce6948bbfec47b2bb7530/awards.jpg"
            }
          },
          "videoWebm": null,
          "mobileVideo": null,
          "mobileVideoWebm": null,
          "poster": null
        }
      ]
    },
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
    "cookiesPopUp": {
      "title": {
        "childMarkdownRemark": {
          "internal": {
            "content": "Brouwerij Haacht maakt gebruik van cookies om uw gebruikservaring te optimaliseren."
          }
        }
      },
      "okButton": "Ok",
      "disclaimer": {
        "title": "Disclaimer",
        "linkSlug": "disclaimer"
      }
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
    "subscriptionForm": {
      "closeButtonLabel": "Sluiten",
      "postCodePlaceholder": "Postcode",
      "firstNameLabel": "VOORNAAM *",
      "firstNamePlaceholder": "Vul uw voornaam in ",
      "lastNameLabel": "ACHTERNAAM *",
      "lastNamePlaceholder": "Vul uw  achternaam in",
      "genderLabel": "GESLACHT",
      "genderValues": [
        "Man",
        "Vrouw"
      ],
      "streetLabel": "Straat *",
      "streetPlaceholder": "Straatnaam",
      "houseNumberLabel": "Huisnummer *",
      "houseNumberPlaceholder": "Huisnummer",
      "residenceLabel": "WOONPLAATS *",
      "residencePlaceholder": "Uw woonplaats",
      "postCodeLabel": "Postcode *",
      "privatePolicyLink": {
        "title": "Privacyvoorwaarden",
        "linkSlug": "disclaimer"
      },
      "magazineLanguageLabel": "Taal",
      "magazineLaguageValues": [
        "Nederlands",
        "Frans"
      ],
      "brochureLanguageValues": [
        "Nederlands",
        "Frans",
        "Engels"
      ],
      "toReceiveLabel": "Ik ontvang graag *",
      "toReceiveValues": [
        "De Laatste Editie",
        "Een gratis abonnement (incl. laatste editie)"
      ],
      "privatePolicyLabel": "Ik ga akkoord met de privacyvoorwaarden. Lees onze *",
      "requestButtonText": "Aanvraag verzenden",
      "emailLabel": "E-MAILADRES *",
      "emailPlaceholder": "Vul je e-mailadres in",
      "phoneLabel": "telefoon/gsm *",
      "phonePlaceholder": "+XX XXXXXXXXX",
      "succesMessage": "Het formulier werd succesvol verstuurd. Bedankt!",
      "errorMessage": "Er liep helaas iets mis tijdens het indienen.",
      "incompleteMessage": "Gelieve na te kijken of alle verplichte velden ingevuld zijn."
    },
    "agePopup": {
      "title": "Ben je ouder dan 18?",
      "yesButton": "Ja",
      "noButton": "Nee",
      "image": {
        "file": {
          "url": "//images.ctfassets.net/vlb1ben6vtp9/17VX2qzWvEQ4cimGumE0qA/d1028af0f8e7d4fd89f7c07905d7caf6/Haacht_brouwerij_RobTV_Sfeerbeeld-2_tiny.jpg"
        }
      }
    },
    "highlightedevent": {
      "evenementHighlighted": {
        "title": "wecandance",
        "slug": "wecandance",
        "startDate": "2018-08-11T00:00",
        "endDate": "2018-08-12T00:00",
        "externalWebsiteUrl": "https://www.wecandance.be/",
        "featuredImage": {
          "file": {
            "url": "//images.ctfassets.net/vlb1ben6vtp9/Y8qwakqlIiyC6UA6KmuUI/5c76e6c4adef2a3df41596a635109cbe/EV-wecandance.jpg"
          }
        },
        "location": "Zeebrugge",
        "childContentfulEvenementContentTextNode": {
          "childMarkdownRemark": {
            "internal": {
              "content": "Zesde editie van dit feeërieke festival op het strand van Zeebrugge."
            }
          }
        }
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
            "datePublished": "2018-05-08T00:00+02:00"
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
            "datePublished": "2017-05-30T00:00+02:00"
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
            "datePublished": null
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
            "datePublished": "2017-08-18T00:00+01:00"
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
            "datePublished": "2017-11-21T00:00+02:00"
          }
        }
      ]
    },
    "events": {
      "edges": [
        {
          "node": {
            "title": "ManiFiesta",
            "slug": "manifiesta",
            "externalWebsiteUrl": "https://www.manifiesta.be/nl",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4o8SkHUo4gQaQCQ4ooUSkI/981a08eb48a95fea1b2a546f2908a1ab/EV-ManiFiesta.jpg"
              }
            },
            "location": "Bredene",
            "startDate": "2018-09-08T00:00",
            "endDate": "2018-09-09T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Festival in het teken van de solidariteit."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Belgian Beer Weekend",
            "slug": "belgian-beer-weekend",
            "externalWebsiteUrl": "http://belgianbrewers.be/nl/events/belgian-beer-weekend-173/article/programma-585",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5aHRHGv8QgsSiAkSccAMCG/2193d81e1258e7eb5a487f2222c17868/EV-Belgian-Beer-Weekend.jpg"
              }
            },
            "location": "Brussel",
            "startDate": "2018-09-07T00:00",
            "endDate": "2018-09-09T00:00",
            "childContentfulEvenementContentTextNode": null
          }
        },
        {
          "node": {
            "title": "Ieperfest",
            "slug": "ieperfest",
            "externalWebsiteUrl": "http://www.ieperfest.com/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5NkfZS3Zss4yIEcOG6WASW/b78006325f249ba257a76c4c347067be/EV-Ieperfest.jpeg"
              }
            },
            "location": "Ieper",
            "startDate": "2018-08-10T00:00",
            "endDate": "2018-08-12T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Hardcore festival"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Motocross Keiheuvel",
            "slug": "motocross-keiheuvel",
            "externalWebsiteUrl": "http://www.kmc-mol.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4CuiBItCHCYG668ksagi8m/a0db3c1baffbe4535c0f65624758bbcb/EV-Keiheuvel.jpg"
              }
            },
            "location": "Balen",
            "startDate": "2018-08-15T00:00",
            "endDate": null,
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "'Flanders Masters' internationale motocross op de bekendste zandheuvel van Vlaanderen."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Ommegang",
            "slug": "ommegang",
            "externalWebsiteUrl": "http://www.ommegang.be/?lang=nl",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3fRerAuuPuYmm6aYW00Uuc/567eccb37acffb1b5fdf42d0107d8e3e/EV-Ommegang.jpeg"
              }
            },
            "location": "Brussel",
            "startDate": "2018-07-04T00:00",
            "endDate": "2018-07-06T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Historische reconstructie van de blijde intrede van Keizer Karel in Brussel in 1549."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Laundry Day",
            "slug": "laundry-day",
            "externalWebsiteUrl": "http://www.laundryday.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/MFWLxI57ieGYi2SIosUMU/6fac1ccc914efff5d2dc75b5f1bb886c/EV-Laundry-Day.jpg"
              }
            },
            "location": "Antwerpen",
            "startDate": "2018-09-01T00:00",
            "endDate": null,
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "House en technofestival"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Kamping Kitsch",
            "slug": "kamping-kitsch",
            "externalWebsiteUrl": "https://kampingkitschclub.be/home",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5FG7pVvtYsA4QwQA0QSaAO/23eece59368249fe24cf54959a85fb20/EV-Kamping-Kitsch.jpg"
              }
            },
            "location": "Kortrijk",
            "startDate": "2018-08-26T00:00",
            "endDate": null,
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Ongetwijfeld het grootste verkleedfestival van Vlaanderen."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Brocante",
            "slug": "brocante",
            "externalWebsiteUrl": "http://www.temploux.be/brocante/index-nl.html",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/63Et8HPUekqII0Uy2K6OOG/0a010a8ef60058e44d796b818ac5dec3/EV-Temploux.jpg"
              }
            },
            "location": "Temploux",
            "startDate": "2018-08-25T00:00",
            "endDate": "2018-08-26T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Antiekmarkt, rommelmarkt of vlooienmarkt? De Brocante van Temploux is het allemaal."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Swing",
            "slug": "swing",
            "externalWebsiteUrl": "http://swingwespelaar.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1CsHpsPUPaoMao6AMSmuCm/4ce10486917f2a3b09e634447d8dffa8/EV-Swing.jpg"
              }
            },
            "location": "Wespelaar",
            "startDate": "2018-08-17T00:00",
            "endDate": "2018-08-19T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Swing organiseert dit jaar de Belgian Blues Challenge, waarbij 7 Belgische bands strijden om een ticket voor de ‘European Blues Challenge’ die in 2019 zal doorgaan op de Azoren, Portugal. Kom dat zien!"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "W-Festival",
            "slug": "w-festival",
            "externalWebsiteUrl": "https://www.w-festival.com/nl/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1f92hodk3qUOAmaeY060a8/691a6d78d5acd96c1a0bd06cd03c7096/EV-W-festival.jpg"
              }
            },
            "location": "Amougies",
            "startDate": "2018-08-16T00:00",
            "endDate": "2018-08-19T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "New wave en electronic popfestival."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "BinckBank Tour",
            "slug": "binckbank-tour",
            "externalWebsiteUrl": "http://www.sport.be/binckbanktour/2018/nl/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5DQVPgohHyKmuwsQiwuUcM/a483208fa03a77d2d7dd8d45446f9881/EV-BinckBank-tour.jpg"
              }
            },
            "location": "parcours België-Nederland",
            "startDate": "2018-08-13T00:00",
            "endDate": "2018-08-19T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "De BinckBank Tour is de enige meerdaagse UCI WorldTour wedstrijd in Nederland en België. De beste ploegen van de wereld, aangevuld met enkele Wildcards verschijnen aan de start."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Nostalgie Beach Festival",
            "slug": "nostalgie-beach-festival",
            "externalWebsiteUrl": "https://www.nostalgiebeachfestival.be/nl/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/B2fIruPV2SqOGsE4mMOgg/1aa63e8d0bed556c5c60ed0ed070b929/EV-Nostalgie-Beach.jpg"
              }
            },
            "location": "Middelkerke",
            "startDate": "2018-08-11T00:00",
            "endDate": null,
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "5de editie van het Nostalgie Beach Festival op het festivalpark van Middelkerke. De hele dag lang kan je meezingen en -dansen op de grootste classics uit de jaren 70, 80 en 90!"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "wecandance",
            "slug": "wecandance",
            "externalWebsiteUrl": "https://www.wecandance.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/Y8qwakqlIiyC6UA6KmuUI/5c76e6c4adef2a3df41596a635109cbe/EV-wecandance.jpg"
              }
            },
            "location": "Zeebrugge",
            "startDate": "2018-08-11T00:00",
            "endDate": "2018-08-12T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Zesde editie van dit feeërieke festival op het strand van Zeebrugge."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Cirque Magique",
            "slug": "cirque-magique",
            "externalWebsiteUrl": "http://www.cirquemagique.eu/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1C7cld0PEIIQ0eiO8sG8kU/561e6ae35fd7d7acdffd5e15944cd2ba/EV-Cirque-Magique.jpg"
              }
            },
            "location": "Ledegem",
            "startDate": "2018-08-03T00:00",
            "endDate": "2018-08-05T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Een prachtige setting waar iedereen welkom is. Ontdek de artiest in jou en laat je betoveren door muziek, klank, licht, decors, animatie, food & drinks, ..."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Elrow Town",
            "slug": "elrow-town",
            "externalWebsiteUrl": "https://www.elrowtown.com/en/antwerp",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4nZMkew5bqGumy2eGMgwKE/735e718f746914a12b52d9d5f3884c14/EV-Elrow.jpg"
              }
            },
            "location": "Antwerpen",
            "startDate": "2018-06-30T00:00",
            "endDate": null,
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Het legendarische, Spaanse partyconcept komt naar Antwerpen!"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Jan Primusfeesten",
            "slug": "jan-primusfeesten",
            "externalWebsiteUrl": "http://jan-primus.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3JX17KGNiEGeuAksUg0o6m/916a498205684b23bb819ebca282b32b/EV-Jan-Primus-Feesten.JPG"
              }
            },
            "location": "Haacht",
            "startDate": "2018-07-27T00:00",
            "endDate": "2018-07-29T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Rommelmarkt, braderie en drie dagen lang het gezelligste en grootste terras van de regio, met tal van muzikale optredens."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Campo Solar",
            "slug": "campo-solar",
            "externalWebsiteUrl": "https://www.facebook.com/CampoSolar1/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/52Bkwmf8LYeAMU8AoU4WSo/fa6d7370068eac7466fbaf1ac9b47ae8/EV-Campo-Solar.jpg"
              }
            },
            "location": "Damme",
            "startDate": "2018-08-03T00:00",
            "endDate": "2018-08-05T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Een zomers, bruisend en muzikaal evenement voor jong & oud op een unieke locatie."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Gentse Feesten",
            "slug": "gentse-feesten",
            "externalWebsiteUrl": "https://gentsefeesten.stad.gent/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4GsFRSNK6sWiWOy4qAEs8G/19a9b4b1f737667fd120dff382891aca/EV-Gentse-Feesten.jpg"
              }
            },
            "location": "Gent",
            "startDate": "2018-07-13T00:00",
            "endDate": "2018-07-22T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "De Gentse Feesten bestaan in 2018 175 jaar en dit wordt gevierd! "
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Beauville",
            "slug": "beauville",
            "externalWebsiteUrl": "https://www.beau-ville.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5fJtjoDCDeWKwM6W8KWK2S/02d224ee2f1bb60a71a7174bc735e409/EV-Beauville.jpg"
              }
            },
            "location": "Deinze",
            "startDate": "2018-07-07T00:00",
            "endDate": null,
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Een daytime festival op een prachtige locatie."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Horecatel",
            "slug": "horecatel",
            "externalWebsiteUrl": "http://www.horecatel.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3xbqsdhFryMgMmSmQk8EWY/bc0d1ef432719827cbf6551118a63a5b/EV-Horecatel-2017.jpg"
              }
            },
            "location": "Marche-en-Famme (WEX)",
            "startDate": "2018-03-04T00:00",
            "endDate": "2018-03-07T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Al meer dan 50 jaar profileert Horecatel zich als de belangrijkste B2B-beurs voor horecaprofessionals."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Hoppefesten",
            "slug": "hoppefesten",
            "externalWebsiteUrl": "https://hoppefesten.be/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5wrM57dPxKe08eQGEwcSUC/1a14373881bff3d6121002abdc0f35ba/EV-Hoppefesten.jpg"
              }
            },
            "location": "Veurne",
            "startDate": "2018-06-30T00:00",
            "endDate": null,
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Het tweede grootste openluchtvoetbaltornooi in Europa, afgesloten met een reusachtige barbeque en dj-sets."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Vintage Village Festival",
            "slug": "vintage-village-festival",
            "externalWebsiteUrl": "https://www.facebook.com/VintageVillageFestival/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5Er83BOqFaOa44uw2cIgCS/87d4e30d49addb4c59270d6b6f43792b/EV-Vintage-Village-Festival.jpg"
              }
            },
            "location": "Zemst",
            "startDate": "2018-05-11T00:00",
            "endDate": "2018-05-13T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": " "
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Fire is Gold",
            "slug": "fire-is-gold",
            "externalWebsiteUrl": "https://www.fire-is-gold.com/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2pvCKeNUTCu4KOQKI2uYsi/53bd29ecb2eedc8512783346ce5a2220/EV-Fire-is-Gold.JPG"
              }
            },
            "location": "Vilvoorde",
            "startDate": "2018-06-23T00:00",
            "endDate": null,
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "    "
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Baloise Belgium Tour",
            "slug": "baloise-belgium-tour",
            "externalWebsiteUrl": "http://www.sport.be/baloisebelgiumtour/2018/nl/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4OmZBqdGNamksUeWYC6UWm/fc9440b898cfaa275c727474ebc4f7c7/EV-Baloise-Belgium-Tour.jpg"
              }
            },
            "location": "parcours door België",
            "startDate": "2018-05-23T00:00",
            "endDate": "2018-05-27T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "De Baloise Belgium Tour is een meerdaagse wielerwedstrijd die jaarlijks in België wordt verreden."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Jaarmarktcross",
            "slug": "jaarmarktcross",
            "externalWebsiteUrl": "http://www.sport.be/cyclocrossclassics/1718/niel/nl/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/beEnVhkuaI2424CsGASgi/e41a27645cb0b23b1053f17ac5f68d4d/EV_Jaarmarktcross.jpg"
              }
            },
            "location": "Niel",
            "startDate": "2017-11-11T00:00",
            "endDate": "2017-11-11T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "De Jaarmarktcross is tot ver buiten de regio bekend en trekt jaarlijks duizenden bezoekers."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Soudal Masters",
            "slug": "soudal-masters",
            "externalWebsiteUrl": "http://www.sport.be/cyclocrossclassics/1718/waregem/nl/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Ihvhjd51mAS0eos24A6wQ/75d9c05cb4563b2ef8b9cefd246ade84/Soudal_Masters_Waregem.jpg"
              }
            },
            "location": "Waregem",
            "startDate": "2018-02-21T00:00",
            "endDate": "2018-02-21T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Een unieke, niet te missen 'veldrit' in het centrum van Waregem met hindernissen en spektakel."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "DVV Verzekeringen Trofee - Scheldecross",
            "slug": "dvv-verzekeringen-trofee-scheldecross",
            "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/antwerpen/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
              }
            },
            "location": "Antwerpen",
            "startDate": "2017-12-16T00:00",
            "endDate": "2017-12-16T23:59",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "DVV Verzekeringen Trofee - Scheldecross"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "DVV Verzekeringen Trofee Cyclocross",
            "slug": "dvv-verzekeringen-trofee-cyclocross",
            "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/essen/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
              }
            },
            "location": "Essen",
            "startDate": "2017-12-09T00:00",
            "endDate": "2017-12-09T23:59",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "DVV Verzekeringen Trofee Cyclocross"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "DVV Verzekeringen Trofee - Azencross",
            "slug": "dvv-verzekeringen-trofee-azencross",
            "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/loenhout/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
              }
            },
            "location": "Loenhout",
            "startDate": "2017-12-28T00:00",
            "endDate": "2017-12-28T23:59",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "DVV Verzekeringen Trofee - Azencross"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "DVV Verzekeringen Trofee - GP Sven Nys",
            "slug": "dvv-verzekeringen-trofee-gp-sven-nys",
            "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/baal/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
              }
            },
            "location": "Baal",
            "startDate": "2018-01-01T00:00",
            "endDate": "2018-01-01T23:59",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "DVV Verzekeringen Trofee - GP Sven Nys"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Horecabeurs",
            "slug": "horecabeurs",
            "externalWebsiteUrl": "https://horecabeurs.be/nl/home",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5eRpkbLk5iwyKO8KOEIucO/7fad6e7c55daaca68b015ce666252181/EV-horecabeurs-Bredene-2017.jpg"
              }
            },
            "location": "Bredene, MEC Staf Versluys",
            "startDate": "2018-02-19T00:00",
            "endDate": "2018-02-22T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Dé vakbeurs voor de horeca-professional."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "DVV Verzekeringen Trofee - Krawatencross",
            "slug": "dvv-verzekeringen-trofee-krawatencross",
            "externalWebsiteUrl": "http://www.sport.be/trofeeveldrijden/2017/nl/lille/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5IUPIRLhGEqSW24wYyqUu2/eefbfa3cb90da0b45c642e589c7ab840/DVV-verzekeringen-trofee.jpg"
              }
            },
            "location": "Lille",
            "startDate": "2018-02-10T00:00",
            "endDate": "2018-02-10T23:59",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "De Krawatencross in Lille is de laatste manche van de DVV Verzekeringen Trofee."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Soudal Waaslandcross",
            "slug": "soudal-waaslandcross",
            "externalWebsiteUrl": "http://www.sport.be/cyclocrossclassics/1718/sintniklaas/nl/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6vvmTc5YacMeYo8SS0qIIG/d90ef7a71d0691bc50260ab2aa586038/intro-bg__2_.jpg"
              }
            },
            "location": "Sint-Niklaas",
            "startDate": "2017-12-23T00:00",
            "endDate": "2017-12-23T23:59",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Soudal Waaslandcross"
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Internationale Sluitingsprijs",
            "slug": "internationale-sluitingsprijs",
            "externalWebsiteUrl": "http://www.cyclocross-oostmalle.be/index.php",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7jAVzfJqaA6ckAQuuSUAYO/1469da45f8b69e65e38202e7ce6a3d77/Oostmalle.JPG"
              }
            },
            "location": null,
            "startDate": "2018-02-25T00:00",
            "endDate": "2018-02-25T00:00",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Laatste officiële wedstrijd van het veldritseizoen."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Telenet UCI CC World Cup",
            "slug": "telenet-uci-cc-world-cup",
            "externalWebsiteUrl": "http://www.sport.be/cyclocrossclassics/1718/namur/nl/",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3dbCGGpQEoykeQsE8K82Ku/6b678602dfff3748b1e80077bf146ae9/intro-bg__1_.jpg"
              }
            },
            "location": "Namen",
            "startDate": "2017-12-17T00:00",
            "endDate": "2017-12-17T23:59",
            "childContentfulEvenementContentTextNode": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Telenet UCI CC World Cup"
                }
              }
            }
          }
        }
      ]
    },
    "publications": {
      "edges": [
        {
          "node": {
            "title": "Bedrijfsbrochure",
            "type": "brochure",
            "sendEmailInfo": {
              "subject": "Bedrijfsbrochure aanvraag",
              "fromEMail": "info@haacht.com",
              "fromName": "Brouwerij Haacht website",
              "toEMail": "marketing@haacht.com",
              "toName": "Brouwerij Haacht marketing"
            },
            "formDescription": {
              "formDescription": "Vul dit formulier in om een gratis brochure te ontvangen. Alle velden met * zijn verplicht."
            },
            "coverImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5J4vH8orgQa4GAEIgOac6o/9b8ad0be324872d0232dfe1a7f02e8b8/brochure-image.jpg"
              }
            },
            "description": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "In onze bedrijfsbrochure lees je alles wat onze brouwerij elke dag draaiend houdt: onze geschiedenis, onze keuze voor grondstoffen, de kwaliteit van ons gamma dranken, onze zorg voor het milieu... Alles komt aan bod."
                }
              }
            },
            "pdf": {
              "file": {
                "url": "//assets.ctfassets.net/vlb1ben6vtp9/4KQjJtxZy82IGcYCWqaIW0/9fd6eec372aa877e10f80f971a252476/bedrijfsbrochure-2013-nl.pdf"
              }
            },
            "buttonView": "Bekijk de brochure",
            "buttonRequest": "Vraag een exemplaar aan"
          }
        },
        {
          "node": {
            "title": "Haacht magazine",
            "type": "magazine",
            "sendEmailInfo": {
              "subject": "Haacht magazine",
              "fromEMail": "info@haacht.com",
              "fromName": "Brouwerij Haacht website",
              "toEMail": "marketing@haacht.com",
              "toName": "Brouwerij Haacht"
            },
            "formDescription": {
              "formDescription": "Vul dit formulier in om een gratis Haacht magazine te ontvangen. Alle velden met * zijn verplicht."
            },
            "coverImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3fQd5BUlSMcaiOKsaaqcWO/ad857a2478afa4fd8ae3f5236324b6b8/Haacht_Magazine_Website_754x1044_NL.jpg"
              }
            },
            "description": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Wil je weten wat er het voorbije jaar binnen de muren van onze brouwerij én daarbuiten gebeurde? Je leest het allemaal online in ons Haacht magazine. Of vraag een gratis abonnement aan en ontvang meteen de laatste editie in je brievenbus."
                }
              }
            },
            "pdf": {
              "file": {
                "url": "//assets.ctfassets.net/vlb1ben6vtp9/4RKwdJOITSIEW2C2UIIUio/e278cf8e19f57ff030c1414784b8cd72/2017_haachtmag69_nl.pdf"
              }
            },
            "buttonView": "Lees het online",
            "buttonRequest": "Abonneer gratis"
          }
        }
      ]
    },
    "stories": {
      "edges": [
        {
          "node": {
            "title": "Festina Lente",
            "slug": "festina-lente-brouwerij-haacht",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2EvjYXwugICG2akKkmi8iq/956828b35f8cd992d233391641c93454/Brouwerij-haacht-abdij-Tongerlo.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### Festina Lente\n\n__In Tongerlo, het hartje van de stille Kempen, bepaalt de norbertijnenabdij al sinds 1130 het landschap. Het wapenschild aan de 14de-eeuwse poort onthult meteen het levensmotto van de paters: ‘festina lente’. Het betekent zoveel als ‘haast je langzaam’. Zoveel eeuwen later is die slogan nog altijd van toepassing.__\n\nDe Tongerlo-bieren zijn erkende Belgische abdijbieren die hergisten op fles en die tot het begin van de Eerste Wereldoorlog binnen de abdijmuren gebrouwen werden. Maar in 1914 ontvreemdden de Duitsers de koperen brouwketels van de abdij, waardoor er een abrupt einde kwam aan de traditionele brouwactiviteiten door de Norbertijnen. \n\nNa heel wat omzwervingen met hun bier vonden de Norbertijnen in 1990 bij Brouwerij Haacht opnieuw de rust die ze zochten. Sindsdien brouwen we Tongerlo onder het goedkeurend oog van de actieve kloostergemeenschap. In ruil voor de toegekende licentie ondersteunen we een van de meest actieve kloostergemeenschappen van ons land. De keuze van de broeders voor een echte familiebrouwerij die kwaliteit en authenticiteit in zich draagt, laat zich proeven in het bier.\n\nDe verschillende awards, waaronder die van ’s Werelds Beste Bier voor Tongerlo LUX (blond) in 2014, zijn dan ook in de eerste plaats een beloning voor de inzet en toewijding van alle betrokkenen.  \nBenieuwd naar de norbertijnenabdij in Tongerlo? Breng haar dan zeker eens een bezoekje. Alle info vind je terug op [hun website](http://www.tongerlo.org/)."
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "In Tongerlo, het hartje van de stille Kempen, bepaalt de norbertijnenabdij al sinds 1130 het landschap. Het wapenschild aan de 14de-eeuwse poort onthult meteen het levensmotto van de paters: ‘festina lente’. Het betekent zoveel als ‘haast je langzaam’. Zoveel eeuwen later is die slogan nog altijd van toepassing."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Ultimum Optimum",
            "slug": "ultimum-optimum",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6sIN6tPNgkCcigAEcwQKSo/47fed62d60ec48ed96cb5e93b93a9508/verhaal-Tongerlo-ultimum-optimum.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### Hou het beste voor het laatste\n\n__Net voor we onze flesjes met bier vullen, voegen we er een beetje reincultuurgist aan toe. Daarna gaat het bier naar de warme kamers om er enkele weken te hergisten op fles. Tijdens dat proces zet de gist de nog aanwezige suikers om in CO2 en alcohol. Dat proef je ook in het glas. Het bier krijgt door deze hergisting een intensere smaak en een verfijnder aroma.__\n\nTijdens het rijpingsproces dat daarop volgt, zakt de gist naar de bodem van de fles. Bij het uitschenken heb je de keuze of je de gist mee in het glas schenkt of in het flesje laat. Veel liefhebbers kiezen ervoor om de gist als laatste te drinken, want dat zorgt voor een ware smaakbeleving. Ultimum optimum, het beste voor het laatste.\n\nDaarom hebben we voor onze Tongerlo PRIOR speciale gistglaasjes ontworpen. Zo kan je jouw Tongerlo PRIOR zonder gist uitschenken in het authentieke Tongerlo-glas, en de resterende gist apart in het kleine glaasje. Het is alleszins een unieke serveerwijze die je eens geprobeerd moet hebben."
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Bij onze Tongerlo PRIOR zakt de resterende gist na hergisting op fles naar de bodem van het flesje. Die gist is een ware smaakbeleving en wordt door veel liefhebbers, helemaal op het laatste, apart gedronken. Onder meer voor hen ontworpen we een speciaal gistglaasje voor een optimale smaakbeleving."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Hoge gisting, lage gisting?",
            "slug": "hoge-gisting-lage-gisting",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7sdVfVmXkWSSkU2IsIgaqG/2acf76b82677c12dc78ec8d1068e1584/verhaal-Hoge-en-lage-gisting.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### Bieren van hoge gisting of lage gisting?\n\n__Tussen pot en pint ontstaan er soms discussies over wat bieren van hoge gisting of lage gisting nu juist zijn. Volgens sommigen worden die termen bepaald door de temperatuur waarbij het bier in de tank gist. En hoewel het klopt dat bieren van lage gisting bij een lagere temperatuur vergisten dan bieren van hoge gisting, is dat niet de volledige verklaring.__\n\nHogegistingsbieren, zoals die van ons gamma Keizer Karel, Tongerlo en Mystic, gisten vijf tot zes dagen bij een relatief hoge temperatuur van 18 tot 22 graden Celsius. Daarna komt de gist bovendrijven en vormt hij een dikke laag op het bier. Hogegistingsbieren worden daardoor ook weleens bieren van bovengisting genoemd.\n\nHet omgekeerde geldt voor bieren van lage gisting, zoals ons pilsbier Primus. Na een gistingsperiode van acht tot tien dagen bij een lagere temperatuur van 10 tot 12 graden Celsius, zakt de gist en blijft hij op de bodem van de gistingstank liggen. Daarom wordt ook de term ‘ondergisting’ gebruikt voor deze bieren.\n\nDat de gist bovendrijft of naar de bodem zakt, heeft te maken met de gebruikte giststam en niet met de temperatuur. De giststam speelt ook een belangrijke rol bij het bepalen van het aroma van het bier.\n\n"
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Volgens sommigen worden de termen hogegistings- en lagegistingsbier bepaald door de temperatuur waarbij het bier in de tank gist. En hoewel het klopt dat bieren van lage gisting bij een lagere temperatuur vergisten dan bieren van hoge gisting, is dat niet de volledige verklaring."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "De stoomfluit van Brouwerij Haacht",
            "slug": "de-stoomfluit-van-brouwerij-haacht",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3PU1YVA1e8Ug4iSY66wQGG/f346c2492ced7b03e4c669cbfb159278/brouwerij-haacht-stoomfluit.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### Stoom aflaten? Dat doen wij dagelijks\n\n__Sommige tradities zijn er om in ere te houden. Onze stoomfluit is daar zo eentje van. Nog elke dag blazen onze vier stokers stoom af, en dat met bijhorend fluitsignaal. Zij werken misschien een beetje in de schaduw, maar zijn essentieel voor onze brouwerij. Want zonder stoom geen draaiende machinekamers, gevulde CO2-flessen en opgewarmde brouwketels.\n\nHet gebruik van de stoomfluit is ongeveer even oud als onze brouwerij zelf. Vroeger diende de stoomfluit onder meer om de arbeiders, die vaak in lawaaierige productieafdelingen werkten, erop te wijzen dat het tijd was om aan hun dagtaak te beginnen, te gaan schaften of weer naar huis te gaan.\n\n__Op het ritme van de stoomfluit__\n\nHet eerste sein was er voor de vroege vogels al om 6 uur ’s ochtends, een uurtje later volgde het signaal voor de dagploeg en om half 9 kwam het sein voor de collectieve schafttijd. Om 5 voor 9 blies de stoomfluit opnieuw, deze keer om aan te kondigen dat de brooddozen weggestopt moesten worden. Om 9 uur gaf de fluit dan aan dat het opnieuw tijd was om aan het werk te gaan. Om 12 uur en om half 1 herhaalde dat scenario zich voor de middagpauze. Het laatste signaal volgde om 15 uur en gaf het einde van de dagtaak aan. Op vrijdag ging de fluit een half uur vroeger af. En op Goede Vrijdag blies de stoomfluit steevast 15 seconden lang.\n\nWaarschijnlijk liet de stoomfluit vaker van zich horen, maar in de loop der jaren zijn enkele momenten toch in onbruik geraakt. Net zoals de traditie om elke vrijdag in de stokerij bakharing en pensen te bakken op de hete buizen van de stoomketels. Vandaag de dag zou dat omwille van de voedselveiligheid trouwens helemaal ondenkbaar zijn.\n\n__Elke stoker zijn manier__\n\nDat de pauzes vandaag beurtelings gehouden worden, heeft geen afbreuk gedaan aan de stoomfluittraditie. Het is zelfs zo dat wanneer de stoomfluit defect is, ze onmiddellijk weer hersteld wordt. “Heeft het nog niet geblazen?”, hoor je hier weleens wanneer de stoker iets later dan voorzien aan de hendel trekt. Sommigen horen zelfs aan de duur van ‘het blazen’ welke stoker op dat moment van dienst is.\n"
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Sommige tradities zijn er om in ere te houden. Onze stoomfluit is daar een van. Nog elke dag blaast de brouwerij stoom af, en dat met bijhorend fluitsignaal."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "De temperatuur in de brouwzaal",
            "slug": "temperatuur-brouwzaal-brouwerij-haacht",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/10TgGP8OGqWi2K6MaEaU02/c93a842e1a856df3303cd1199aaf43c7/brouwerij-haacht-brouwzaal.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### Waarom is het altijd zo warm in de brouwzaal?\n\n__Heb je onze brouwerij al eens bezocht? Dan is het je wellicht opgevallen dat het in de brouwzaal lekker warm is. Bij elke rondleiding doen de bezoekers hun jassen open, sjaals af en wapperen ze stevig met de handen om toch maar een fris briesje te creëren.__\n\n__Stijgende temperaturen__\n\nBrouwen is een kookproces. En net zoals de temperatuur bij jou thuis stijgt als je achter je potten en pannen staat, klimt ook het kwik in de brouwzaal tijdens het hele brouwproces. Handig, want daardoor hoeft de verwarming nooit aan, zelfs niet tijdens de meest strenge winters. In de zomer is die hitte soms wel iets minder aangenaam, vooral voor onze medewerkers, maar dan zorgen onze frisdranken en waters voor de nodige verfrissing. En de bezoekers, die krijgen na afloop een goed gekoelde drank uit ons ruime gamma aangeboden.\n\n__Geen energieverlies__\n\nOnze brouwketels zijn ontzettend goed geïsoleerd. Want hoe sneller een brouwketel op temperatuur komt, hoe minder energie we verbruiken. Om de overtollige warmte zo goed mogelijk te recupereren, blijven we constant zoeken naar nieuwe manieren van warmterecuperatie."
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Heb je onze brouwerij al eens bezocht? Dan is het je wellicht opgevallen dat het in de brouwzaal lekker warm is. Bij elke rondleiding doen de bezoekers hun jassen open, sjaals af en wapperen ze stevig met de handen om toch maar een fris briesje te creëren."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "De pot van Keizer Karel",
            "slug": "de-pot-van-keizer-karel",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6iRDHEbRW8K6AkqWSO8Eo6/f5f03e663392e92c4c78ffb0a1c5f015/verhaal-Pot-Keizer-Karel.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### De pot van Keizer Karel\n\n__Wist je dat Keizer Karel een groot bierliefhebber was? Volgens de legende nam hij steeds een vat bier mee op zijn reizen. En in de herbergen waar hij overnachtte, weigerde hij ook nooit een goede pint bier. In het Antwerpse Olen, waar de keizer jaarlijks ging jagen, vertellen ze vandaag nog graag de legende van ‘De pot met drie oren’. En op het marktplein van Olen is er zelfs een standbeeld aan gewijd.__\n\n__1 oor__\n\nDe boeren van Olen, die hun bier normaal gezien dronken in een pot zonder oren, wilden Keizer Karel tonen dat ook zij goede manieren hadden en maakten speciaal voor hem een pot met één oor. Toen hij met zijn paard aan de herberg stopte, kwam de waardin buiten met een pot schuimend gerstenat. Ze hield de pot vast bij het oor en reikte hem zo aan. De keizer kon dus niet anders dan de pot zelf vast te grijpen. \n*“Vrouwke, tegen aanstaande jaar moet ge een pot hebben met twee oren, dat zal gemakkelijker zijn.”*\n\n__2 oren__\n\nEn zo geschiedde. Het jaar daarop reikte de waardin Keizer Karel een pot met twee oren aan, maar ze hield hem met twee handen aan beide oren vast. \n*“Zo gaat het nog niet goed, vrouwke. Ge zult er tegen aanstaande jaar een moeten laten maken met drie oren. Dan zal ‘t wel beter gaan.”*\n\n__3 oren__\n\nToen Keizer Karel het derde jaar stopte aan de herberg, verwelkomde de vrouw hem met een pot met drie oren. Maar ze hield hem weer met twee oren vast, en dat op zo’n manier dat het derde oor naar haar borst was gekeerd. Onder de pot door greep de keizer het derde oor vast.  \n*“Ja vrouwke, ’t zou al even moeilijk gegaan zijn als verleden jaar, indien ik niet wist dat er een derde oor was.”  *\n\n__4 oren?__\n\nIn het Waalse Walcourt gaat het verhaal nóg een stapje verder. Daar beval Keizer Karel om een pot met vier oren te maken, zodat hij zeker altijd een oor binnen handbereik zou hebben."
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Wist je dat Keizer Karel een groot bierliefhebber was? Volgens de legende nam hij steeds een vat bier mee op zijn reizen. En in de herbergen waar hij overnachtte, weigerde hij ook nooit een goede pint bier. In Olen vertellen ze vandaag nog graag de legende van ‘De pot met drie oren’."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Muzikaal talent bij Brouwerij Haacht",
            "slug": "muzikaal-talent-brouwerij-haacht",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/48BmTvHwbCgcggycUoEMEu/2b9f56588f48c265bf5692fd12141cca/story-image-3.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### Muzikaal talent bij brouwerij Haacht\n\n__Leven in de brouwerij is een leuze die niet zomaar uit de lucht komt vallen, ook niet bij Brouwerij Haacht. In 1920 richtten enkele van onze medewerkers de fanfare ’Vrijheid en Vermaak’ op. Lang hadden ze niet nodig om uit te groeien tot een echt succesverhaal in Haacht en omstreken. Steevast musiceerden er minstens vijftig medewerkers.__\n\nAlle muzikanten maakten ook deel uit van een fanfare in de naburige dorpen, wat zorgde voor een hoog muzikaal niveau van ‘Vrijheid en Vermaak’. Zo groeiden de reputatie en populariteit van de fanfare gestaag. Ze waren dan ook graag geziene gasten op festiviteiten en muziekfestivals, met optredens tot Brussel en zelfs Noord-Frankrijk. Zoals dat geldt voor verenigingen kreeg ze na vijftig jaar de titel ‘Koninklijke fanfare’.\n\nJammer genoeg komt er aan alle mooie liedjes een einde en ging ook de typische folklore van fanfares die al spelend door de straten marcheerden met de jaren wat verloren. Daardoor werd de vereniging ‘Vrijheid en Vermaak’ eind jaren 80 stopgezet. Maar dat betekent niet dat er geen muziek meer zit in Brouwerij Haacht. Verschillende van onze huidige medewerkers zijn nog steeds actief bij fanfare- of harmonieorkesten, in allerhande muziekbandjes of als dj."
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Leven in de brouwerij is een leuze die niet zomaar uit de lucht komt vallen, ook niet bij Brouwerij Haacht. In 1920 richtten enkele van onze medewerkers de fanfare ’Vrijheid en Vermaak’ op. Lang hadden ze niet nodig om uit te groeien tot een echt succesverhaal in Haacht en omstreken."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "De ast van Brouwerij Haacht",
            "slug": "ast-brouwerij-haacht",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2jowo0zIMI6WOogSYgUmq4/6d381da62d01c092680d02ca29c50e3a/verhaal-De-Ast.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### Maak kennis met de ast, een historisch monument\n__Kort na het begin van de Eerste Wereldoorlog braken er zware gevechten uit rond het station van Haacht. Veel omwonenden sloegen op de vlucht, maar Eugène De Ro, grondlegger van onze brouwerij, en brouwmeester Camille Kerkhofs bleven. Hun doel? De toenmalige ‘Brouwerij en Melkerij van Haecht’ veiligstellen.__\n\n__Symbool voor zinloze oorlog__\n\nJammer genoeg konden ze niet beletten dat de Duitse troepen zich terugtrokken in onze ast. Dit hoge gebouw was voor hen strategisch gelegen om de Belgische soldaten op afstand te houden. Terwijl de Belgen probeerden om het gebouw te heroveren, kwamen Eugène De Ro en Camille Kerkhofs per ongeluk in hun vuurlinie terecht. In de avondschemering werden ze door de Belgische troepen verkeerdelijk als de vijand aanzien en beschoten. Camille Kerkhofs raakte daarbij dodelijk getroffen en overleed enkele dagen later, op 28 augustus 1914, aan zijn verwondingen.\n\nDe kogelgaten die tijdens de aanval door de Belgische artillerie in de noordwestelijke gevel geslagen werden, zijn bewust nooit gerestaureerd. Op de bovenste verdieping van de ast is er achteraf een balkon gebouwd. Daar kunnen bezoekers deze stille getuigen van een zinloze oorlog bekijken.\n\n__Brasserie Brouwershof__\n\nCamille Kerkhofs woonde in een villa recht tegenover onze brouwerij. Zijn weduwe verkocht de villa na zijn dood aan Brouwerij Haacht, waarna Eugène De Ro er zijn intrek in nam. Achteraf deed de villa nog dienst als thuis voor verschillende directeurs van Brouwerij Haacht. In 1992 werd ze omgebouwd tot Brasserie Brouwershof, waar je vandaag geniet van lekker eten in een unieke setting.\n"
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Kort na het begin van de Eerste Wereldoorlog braken er zware gevechten uit rond het station van Haacht. Velen sloegen op de vlucht, maar Eugène De Ro, grondlegger van onze brouwerij, en brouwmeester Camille Kerkhofs bleven. Hun doel? De toenmalige ‘Brouwerij en Melkerij van Haecht’ veiligstellen."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "Het ontstaan van de Primus met gist",
            "slug": "primus-met-gist",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1RqtG9kjViUkmA0quMKKqg/012018d022ffb2403fa7217876904e8b/brouwerij-primus.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### KEN JE ONZE PRIMUS MET GIST AL?\n\n__Recht tegenover onze brouwerij vind je Brasserie Brouwershof. Traditioneel worden de brouwerijbezoeken daar afgerond. Naast onze gekende bieren kan je er ook Primus met gist degusteren. Een uniek bier, met een even uniek verhaal.__\n\nBegin 1900 zat er een bierkraantje aan de gevel van de toenmalige vatenhal. Iedereen die op gelijk welk moment in de brouwerij moest zijn, kende dit kraantje en tapte zijn eigen pint bier. Ook de omwonenden en de mannen van ‘den travaux’, de spoorwegarbeiders, wisten dat kraantje maar al te goed te vinden. Zij kwamen met kruiken naar de brouwerij om een voorraad ongefilterd bier in te slaan. Zij wisten toen al dat de aanwezige gist het bier extra smaak en aroma’s bezorgde. \n\nDe Primus met gist die je vandaag in Brasserie Brouwershof vindt, is eigenlijk hetzelfde bier als toen: ongefilterd, rechtstreeks van de lagertank en overheerlijk! Toch kunnen we Primus met gist niet in alle cafés aanbieden. Dat komt omdat de biergist naar de bodem van de fles of het vat zou uitzakken en daar zou blijven ‘plakken’. Het verhaal luidt dat Primus met gist via een rechtstreekse leiding vanuit de brouwerij onder de steenweg door naar Brasserie Brouwershof wordt aangevoerd… "
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Recht tegenover onze brouwerij vind je Brasserie Brouwershof. Traditioneel worden de brouwerijbezoeken daar afgerond. Naast onze gekende bieren kan je er ook Primus met gist degusteren. Een uniek bier met een even uniek verhaal, en enkel te degusteren in Brasserie Brouwershof."
                }
              }
            }
          }
        },
        {
          "node": {
            "title": "De schouw van Brouwerij Haacht",
            "slug": "schouw-brouwerij-haacht",
            "featuredImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2Gj3pv06kUGKOk4GIMCEeS/9bffc9bf022f212b3b74b71b8096b6cf/Brouwerij-haacht-schouw.jpg"
              }
            },
            "content": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "### Onze iconische schouw\n\n__Heel wat jaren geleden schreef een krant: “In de verte doemt de gigantische schouw van Brouwerij Haacht al op. Nog nooit zag ik er rook uitkomen, ze wordt dus al jaren niet meer gebruikt.” Een foute conclusie van de journalist. Want onze trotse schouw, die heeft wel degelijk nog zijn nut.__\n\nWe nemen je graag mee naar 1898, toen onze brouwerij het levenslicht zag. In die tijd stonden hoge fabrieksschouwen symbool voor goed draaiende ondernemingen. Hoe meer schouwen, hoe hoger de welvaart voor de omwonenden. Want fabrieken betekenden werkgelegenheid en dus ook een vast inkomen. \n\n__Bouwkundig huzarenstukje__\n\nBij Brouwerij Haacht was dat niet anders. Maar in de loop der jaren zijn er wel enkele schouwen gesneuveld. Een niet gebruikte schouw raakt immers in verval en vormt dan een reëel gevaar. Eentje staat er wel nog: een bouwkundig huzarenstukje opgetrokken in baksteen en sinds 1910 altijd in gebruik gebleven. Ze voert de rookgassen af die ontstaan bij de aanmaak van stoom. Stoom die nodig is voor onder andere het opwarmen van onze brouwketels.\n\n\n__Belangrijk oriëntatiepunt__\n\nIn 2008 stapten we voor de productie van onze stoom over van zware stookolie op aardgas. Maar de authentieke schouw moest en zou behouden blijven. Want al sinds het begin van Brouwerij Haacht is die schouw een belangrijk oriëntatiepunt in Haacht en omstreken. Bovendien staat ze symbool voor onze lange geschiedenis. \n\n__Witte rook__\n\nOm de gassen optimaal te laten afvoeren, werd met een tachtig meter hoge kraan een roestvrije, stalen pijp in de schouw geplaatst. Tijdens de werkzaamheden bleek dat de schouw aan restauratie toe was. Door de invloed van weer en wind was ze door de jaren heen lichtjes gebogen. Om haar te redden werd ze in de loop van 2012 tot op 35 meter ingekort. Nog steeds een meer dan respectabele hoogte.\n\nDus zwarte rook? Neen, die zal je uit de schouw niet zien opstijgen. In de winter hooguit wat condensatiedampen."
                }
              }
            },
            "shortDescription": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Heel wat jaren geleden schreef een krant: “In de verte doemt de gigantische schouw van Brouwerij Haacht al op. Nog nooit zag ik er rook uitkomen, ze wordt dus al jaren niet meer gebruikt.” Een foute conclusie van de journalist. Want onze trotse schouw, die heeft wel degelijk nog zijn nut."
                }
              }
            }
          }
        }
      ]
    },
    "press": {
      "edges": [
        {
          "node": {
            "slug": "ommegang-bier-trouwe-partner-van-brusselse-ommegang",
            "title": "Ommegang-bier, trouwe partner van Brusselse Ommegang",
            "pressCategory": {
              "title": "Persbericht",
              "titleMultiple": "Persberichten"
            },
            "pressImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/J0fAr8Ei8CWueskwWqyme/eeaa45edf31766c51d89ea73b5948ef2/PB_Ommegang_Brussel.JPG"
              }
            },
            "published": "2018-06-05",
            "articleReference": null,
            "pdfDocument": null
          }
        },
        {
          "node": {
            "slug": "brouwerij-haacht-120-jaar-jong-en-nog-altijd-eigenzinnig",
            "title": "Brouwerij Haacht - 120 jaar jong en nog altijd eigenzinnig",
            "pressCategory": {
              "title": "Persartikel",
              "titleMultiple": "Persartikels"
            },
            "pressImage": null,
            "published": "2018-04-01",
            "articleReference": "Bier Grand Cru",
            "pdfDocument": {
              "file": {
                "url": "//assets.ctfassets.net/vlb1ben6vtp9/3Wd25OBZ3iMcY2ueSmSWKO/dc388fac262d5c60100817cf9b9162dc/persartikel_Brouwerij_Haacht_NL.pdf"
              }
            }
          }
        },
        {
          "node": {
            "slug": "brouwerij-haacht-breidt-super-8-gamma-uit-met-super-8-saison",
            "title": "Brouwerij Haacht breidt SUPER 8-gamma uit met SUPER 8 Saison",
            "pressCategory": {
              "title": "Persbericht",
              "titleMultiple": "Persberichten"
            },
            "pressImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2b6EyTvc96U42e2mK20GWe/9c304074e3f44c755d2a63b6a6514f42/PB-november-Super-8_Saison_Glas_Fles-LR.jpg"
              }
            },
            "published": "2017-11-20",
            "articleReference": null,
            "pdfDocument": null
          }
        },
        {
          "node": {
            "slug": "brouwerij-haacht-steekt-de-vier-tongerlo-bieren-in-een-nieuw-jasje",
            "title": " Brouwerij Haacht steekt de vier Tongerlo-bieren in een nieuw jasje",
            "pressCategory": {
              "title": "Persbericht",
              "titleMultiple": "Persberichten"
            },
            "pressImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6r1fbKXJFScWs2YIsSoC4G/06eadda6086fe7302bc534d2d003f317/PB-september-Tongerlo-flesjes.jpg"
              }
            },
            "published": "2017-09-25",
            "articleReference": null,
            "pdfDocument": null
          }
        },
        {
          "node": {
            "slug": "brouwerij-haacht-lanceert-super-8-blanche",
            "title": "Brouwerij Haacht lanceert SUPER 8 Blanche",
            "pressCategory": {
              "title": "Persbericht",
              "titleMultiple": "Persberichten"
            },
            "pressImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Opm56o8TKUYcYYgCaAcoe/ae606bcbf11c3b0cd5a00d063f33b9ee/PB-mei-Super-8_Blanche_Glas_Fles.jpg"
              }
            },
            "published": "2017-05-22",
            "articleReference": null,
            "pdfDocument": null
          }
        },
        {
          "node": {
            "slug": "brouwerij-haacht-pakt-uit-met-8-nieuwe-bieren",
            "title": "Brouwerij Haacht pakt uit met 8 nieuwe bieren",
            "pressCategory": {
              "title": "Persbericht",
              "titleMultiple": "Persberichten"
            },
            "pressImage": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1zjQislolyu6wqMwqEWYaY/3756d4e672fd7b102350df2efbdaf512/PB-januari-SUPER-8-gamma-LENNEN-DESCAMPS0098_crop.jpg"
              }
            },
            "published": "2017-01-31",
            "articleReference": null,
            "pdfDocument": null
          }
        },
        {
          "node": {
            "slug": "brouwerij-haacht-koopt-canadese-brouwerij",
            "title": "Brouwerij Haacht koopt Canadese brouwerij",
            "pressCategory": {
              "title": "Persartikel",
              "titleMultiple": "Persartikels"
            },
            "pressImage": null,
            "published": "2016-11-04",
            "articleReference": "De Tijd",
            "pdfDocument": {
              "file": {
                "url": "//assets.ctfassets.net/vlb1ben6vtp9/LbxL1kpacm880MS6sOGC6/1eeb263141874b4ebdb9b7fe406aadeb/Persartikel_Haacht_koopt_Canadese_brouwer.pdf"
              }
            }
          }
        },
        {
          "node": {
            "slug": "untitled-entry-2018-02-21-at-03-08-13",
            "title": null,
            "pressCategory": null,
            "pressImage": null,
            "published": null,
            "articleReference": null,
            "pdfDocument": null
          }
        },
        {
          "node": {
            "slug": "dossier-supersenioren-frederic-van-der-kelen",
            "title": "Dossier supersenioren - Frédéric van der Kelen",
            "pressCategory": {
              "title": "Persartikel",
              "titleMultiple": "Persartikels"
            },
            "pressImage": null,
            "published": "2017-05-13",
            "articleReference": "Het Laatste Nieuws",
            "pdfDocument": {
              "file": {
                "url": "//downloads.ctfassets.net/vlb1ben6vtp9/5QsffI4eWsekouawSgWwWw/4beb3ea17f58f1f90507fde86cf57a24/Persartikel_FvdK_dossier_supersenioren.pdf"
              }
            }
          }
        },
        {
          "node": {
            "slug": "haacht-brouwt-for-life",
            "title": "Haacht 'brouwt for life'",
            "pressCategory": {
              "title": "Persartikel",
              "titleMultiple": "Persartikels"
            },
            "pressImage": null,
            "published": "2017-12-19",
            "articleReference": "Het Laatste Nieuws",
            "pdfDocument": {
              "file": {
                "url": "//assets.ctfassets.net/vlb1ben6vtp9/j8lnDCqDvMgGumy6YuGW/7d80a712d8f30c2329ca474bea11b08d/Persartikel_Haacht_brouwt_for_life.pdf"
              }
            }
          }
        },
        {
          "node": {
            "slug": "super-8-ipa-bier-van-de-week",
            "title": "SUPER 8 IPA bier van de week",
            "pressCategory": {
              "title": "Persartikel",
              "titleMultiple": "Persartikels"
            },
            "pressImage": null,
            "published": "2017-08-26",
            "articleReference": "Het Nieuwsblad",
            "pdfDocument": {
              "file": {
                "url": "//assets.ctfassets.net/vlb1ben6vtp9/4Cimbng8cwOYsqkCgygqwg/0c64bd45cd06dfe54fbc4589de0f9929/Persartikel_SUPER_8_IPA_NL.pdf"
              }
            }
          }
        }
      ]
    },
    "merken": {
      "edges": [
        {
          "node": {
            "title": "Château Haut-Saint-Georges-Saint-Emilion a.c.",
            "slug": "chateau-haut-saint-georges-saint-emilion-a.c.",
            "family": {
              "title": "kasteelwijnen (Bordeaux)"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": [
              {
                "id": "c62xWZbX4iIIwI0WKug8YQQ",
                "title": "Millésime 2014",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Gouden medaille op de 'Tasting to the Best French Wines & Spirits for Germany 2017' \nGouden medaille op de 'Concours Général Agricole 2016' in Parijs"
                    }
                  }
                }
              },
              {
                "id": "c3btOMA2PC8OGYqcgcIsSqw",
                "title": "Millésime 2012",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "'Coup de cœur’ in de Guide Hachette 2015\nGrote gouden medaille op de ‘Concours Mondial du Vin de Bruxelles’ 2015"
                    }
                  }
                }
              },
              {
                "id": "c278XI7aXsc2o4qecwcmI6u",
                "title": "Millésime 2007",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "'Coup de cœur’ in de Guide Hachette 2011"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2n0feqqClCaoSqSeAM2uew/d95defb0c205b797774ce305afce723d/Chateau_Haut-Saint-Georges_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Orange Zero",
            "slug": "val-orange-zero",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2c1MHneM2E82AIwYOy8Yww/5dc418e7a2c0ca5cb848545d1edc74d2/VAL_Orange_Zero_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "CHRISTMAS",
            "slug": "tongerlo-christmas",
            "family": {
              "title": "Tongerlo"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7m6IdbWSS4iAOqaYokuseY/cf6af9440d112aebfcef485a358afa62/Tongerlo_Christmass_fles_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Sport",
            "slug": "val-sport",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1NHf6AQzRewmAWSooa4oEG/6a8cc682022627fbb70e41e051a31b7d/VAL_Sport_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Maltosa",
            "slug": "maltosa",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4IzO6ZB3okIS88cOAye0MY/76f969e36e698d4df7f54c758ea7f5c1/Maltosa_fles_25_cl_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Blonde",
            "slug": "blonde",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7HZsSmcHPqYeecAMaOmg2u/2919b46691911c0160254ba8ffc4dc5c/Blonde_fles_25_cl_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Orange",
            "slug": "val-orange",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5VtLX7ZbmEgSmaA4UOQAm6/dcbbd84df83b083d78eeebde5439785c/val_orange_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "NOX",
            "slug": "tongerlo-nox",
            "family": {
              "title": "Tongerlo"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c5WcRR3hwHK62uEiCaiSc2w",
                "title": "Zilveren medaille op de Asia Beer Awards 2013",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Zilveren medaille op de [Asia Beer Awards 2013](http://www.beerfestasia.com/) in de categorie 'Brown Ale'"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6jVFZmdaGQUacMyIwG0Uq4/4733af43e5f932e6721e26576ed63a9c/Tongerlo_NOX_fles_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Krieken",
            "slug": "mystic-krieken",
            "family": {
              "title": "Mystic"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c3AaBRPBuqIEwU2K2KEYAUI",
                "title": "2 sterren op de Superior Taste Awards 2017 & 2013",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "2 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017 en 2013"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3AoW5JvE40AQk6qyo04U4u/9badb94b479c3c5e5e4069d30b482835/Mystic_Krieken_Fles_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Bourgogne Chablis 'Jean-Marc Aujoux'",
            "slug": "bourgogne-chablis-jean-marc-aujoux",
            "family": {
              "title": "Bourgogne"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3yk6ytwTGoyMgceusq0maa/3f46b8ba570293050eef176d8561136c/Chablis_Aujoux_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Graves - Château les Clauzots a.c.",
            "slug": "graves-chateau-les-clauzots-a-c",
            "family": {
              "title": "Bordeaux"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5Nh5iXfEsgi8A4qSiE8Kkg/2b3bc1f2301d00d729f39b0bcf12a41d/Ch__teau_Les_Clauzots_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Château de l'Aumerade Cru Classé Rosé",
            "slug": "chateau-de-laumerade-cru-classe-Rosé",
            "family": {
              "title": "Provence"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/48c7uGNATSySoUc4sAMQQY/2f8d60b065da4be3b3414940391b1a4e/Ch__teau_de_l_Aumerade_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Cola",
            "slug": "pepsi-cola",
            "family": {
              "title": "Pepsi"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1vl7dZXyv6iIMqGsqMMk6W/81ed8dc06faa3bba21bc0e0563320c93/Pepsi_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Max",
            "slug": "pepsi-max",
            "family": {
              "title": "Pepsi"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3YSxeGeLuwsGmCQ0yWCuKe/e32eaad5a98dda58f73fd27b4d839c17/Pepsi_max_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Bruisend",
            "slug": "val-bruisend",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": [
              {
                "id": "c4S123ceZ4Ig8CekcGqmUSY",
                "title": "3 sterren op de Superior Taste Awards 2017",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "3 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1GPJL61v9u0o68oKAsmGQi/8f1b9fc3c4d06036e5a48ccce7743db0/val_bruisend_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Natuur",
            "slug": "val-natuur",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": [
              {
                "id": "c5H9ciHjdbG6eEuQ6UmwM2u",
                "title": "3 sterren op de Superior Taste Awards 2017 & 2012",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "3 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017 en 2012"
                    }
                  }
                }
              },
              {
                "id": "c5wtujC0TNCecQkCgQ2u88U",
                "title": "2 sterren op de Superior Taste Awards 2011",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "2 sterren op de [Superior Taste Awards](http://www.itqi.com/nl) 2011"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3BdfpzJyYowSSCOIEYuY6K/9b5370961f0c5dd80452562ebdc83e95/val_niet_bruisend_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Richard dit LeCastor",
            "slug": "richard-dit-lecastor",
            "family": null,
            "category": null,
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6NBxha4o0wUw8ckySaESIa/29c23a7dcddd3c24b43c19b3dca167f6/lecastor_Glas_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Coq Hardi",
            "slug": "coq-hardi",
            "family": null,
            "category": null,
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/VpNoojEl8aCcOMeeK04uc/291834344d2d289e3ab45ea1898dc6d5/Coq_hardi_fles_25_cl_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Pilsener",
            "slug": "Pilsener",
            "family": {
              "title": "Leeuw"
            },
            "category": null,
            "awards": null,
            "packshot": null
          }
        },
        {
          "node": {
            "title": "Beando Grillo Viognier",
            "slug": "beando-grillo-viognier",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/61MyaHWXCw6EyGQCOUYIeo/e60baaa5363567310698d2721b443096/Beando_Grogio_Viognier_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Domaine La Petite Barde Montagne Saint-Emilion a.c.",
            "slug": "domaine-la-petite-barde-montagne-saint-emilion-a.c.",
            "family": {
              "title": "kasteelwijnen (Bordeaux)"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4TGTiW3NL2ywiMQWgk6c8e/be05f6bbb7adb25c768f238747a55267/La_Petite_Barde_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Château La Grande Barde Montagne Saint-Emilion a.c.",
            "slug": "chateau-la-grande-barde-montagne-saint-emilion-a.c.",
            "family": {
              "title": "kasteelwijnen (Bordeaux)"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": [
              {
                "id": "c7qDxhO5qggK0O0cCGCwIqA",
                "title": "2006",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Guide Hachette *"
                    }
                  }
                }
              },
              {
                "id": "c1X1vttVHKc8WWkMUEi2qyE",
                "title": "2005",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Revue 'Le Point'\nLa revue du Vin de France"
                    }
                  }
                }
              },
              {
                "id": "c4qr3Lcjyk8uQ6Gyk0W2UiQ",
                "title": "2004",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Zilveren medaille 'Concours Mondial du Vin de Bruxelles'\nRevue 'Le Point'\nRevue 'Millésimes'"
                    }
                  }
                }
              },
              {
                "id": "c5jeMcyy6jmQoikuIOaW4KA",
                "title": "2003",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Médaille d'argent au 'Concours Mondial du Vin de Bruxelles'\nGuide Hachette"
                    }
                  }
                }
              },
              {
                "id": "c5yVSrValtCQuG6kCMEkgyW",
                "title": "2002",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Zilveren medaille 'Concours Mondial du Vin de Bruxelles'\nGuide Hachette *"
                    }
                  }
                }
              },
              {
                "id": "AVFw4YufXE4QcQg6EQW4w",
                "title": "2001",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Zilveren medaille 'Concours Mondial du Vin de Bruxelles'"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1iTtDqp7E6kSOca2oIAu0s/6501c71ba0878d70a3a5d71acacc507e/Chateau_La_Grande_Barde_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Crocodile Creek Shiraz/Cabernet Sauvignon",
            "slug": "crocodile-creek-shiraz-cabernet-sauvignon",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/64JhcmTruoqKMqQWYMk0cW/65e8eb4902af37b48906a3821a9bc0ac/Crocodile_Creek_Shiraz_Cabernet_Sauvignon_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Golden Gate Zinfandel",
            "slug": "golden-gate-zinfandel",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3PYdA3kiSIIeYMq8K4SsqM/2c18f0bc9cdd1a6c08704833b47b2e7e/Golden_Gate_Zinfandel_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Vila Alegria - Cabernet Sauvignon",
            "slug": "vila-alegria-cabernet-sauvignon",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3QErK6u3QkiuMOccu0secC/44880ede51afd2758d51638a1b6f875f/Vila_Alegria_rood_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Vina La Pinta - Malbec",
            "slug": "vina-la-pinta-malbec",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4p2hxpinrawumaSkykUCKu/7d2e65864091cc977c026b7ff00edfde/La_Pinta_rood_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Finca Terra Merlot",
            "slug": "finca-terra-merlot",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4aVhgRgvW82McgQUcmCswG/5aeb900de235409fc412df438badb586/Finca_Terra_Merlot_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Massai Shiraz",
            "slug": "massai-shiraz",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5KtFU8zFgAIIiWQskaEk8A/8afdf1df90f56056fb9457361a488ae4/Massai_Shiraz_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Cape 312 Pinotage",
            "slug": "cape-312-pinotage",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/58ytoTMRTWoIiqKK2gmSEw/76f660f234215280b56b65b3c5dd4aff/Cape312_Pinotage_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Châteauneuf du Pâpe 'La Fagotière'",
            "slug": "chateauneuf-du-pape-la-fagotiere",
            "family": {
              "title": "Rhônevallei"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4KYB0tpav6KWEu0CgMiuaU/066b7ac786052165116c8d529f1bf156/Ch__teauneuf-du-P__pe_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Beando Sangiovese",
            "slug": "beando-sangiovese",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Jb6FzN4SAsiMqsKEYc60s/ac060b8a4ac770c7732f79a99c8ac61b/Beando_Sangiovese_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Don Pedro de la Vega 'Reserva'",
            "slug": "don-pedro-de-la-vega-reserva",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2mEf7VHZ5y6uUqiAWQkw4k/f8bac940bda1a714db9ec140cedc2592/Don_Pedro_de_la_vega_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Baron Amado - Tempranillo",
            "slug": "baron-amado-tempranillo",
            "family": {
              "title": "Bordeaux"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/ABxrvoEZ4O8EWWgsqWCyy/5db94c3411d3a905facf0cb90558952c/Baron_Amado_Tempranillo_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Terre du Sud Rouge",
            "slug": "terre-du-sud-rouge",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4kRVUgdADYQAUKsIymWYAq/39c1a6b4f7d7a6955ff11495c8c03c03/Terre_du_Sud_Rood_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Bourgogne Côte Chalonnaise 'Pinot Noir'",
            "slug": "Bourgogne-Côte-Chalonnaise-Pinot-Noir",
            "family": {
              "title": "Bourgogne"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4cQF1KTWTKqiMceiWOkkci/df723f361b835709bed2d03a6f1fdb3c/Boutgogne_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Margaux ‘La Réserve d'Angludet’",
            "slug": "margaux-la-reserve-dangludet",
            "family": null,
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5kjVCcvMf6yi0wQsGgiGoA/a31a1a82183c13d5c17817c656b6736f/La_reserve_d_angludet_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Château Chêne de Gombeau 'Canon Fronsac a.c.'",
            "slug": "chateau-chene-de-gombeau-canon-fronsac-a.c.",
            "family": {
              "title": "Bordeaux"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6FFafbFc1Uu2meqyAqUQUs/7095e375619d2102214e834f620ded9a/Chateau_Ch__ne_de_Gombeau_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Château de Pardaillan Bordeaux supérieur a.c.",
            "slug": "chateau-de-pardaillan-bordeaux-superieur-a.c.",
            "family": {
              "title": "Bordeaux"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/62rkgbsdrOOAuwiye6WqWq/362c0c7478e92952ec90652c3ade3c3e/Chateau_de_Pardaillan_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Haut Médoc Cru Bourgeois a.c. 'Château Corconnac'",
            "slug": "haut-medoc-cru-bourgeois-a.c.-chateau-corconnac",
            "family": {
              "title": "Bordeaux"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/GBfQUjEduowkUUc6uoeqG/57ce7df633ab1c02cf649165c251da22/Chateau_Corconnac_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Caves-Saint-Christophe 'Cabernet Sauvignon'",
            "slug": "caves-saint-christophe-cabernet-sauvignon",
            "family": {
              "title": "Languedoc"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2TpxG1jDVKoSQqmgI4u4s2/785c5fd77b0ae992924f9d43a2d2edaf/CSC_Cabernet_Sauvignon_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Charme de Mauriac Rouge",
            "slug": "charme-de-mauriac-rouge",
            "family": {
              "title": "Languedoc"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/wbvDEJwtTEI0Ci88cE44G/a0a771499f2f4efbebc06d5d52f40347/Charme_de_Mauriac_Syrah_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Choix de Rimay Rouge",
            "slug": "choix-de-rimay-rouge",
            "family": {
              "title": "Languedoc"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6DGaxazLRCUkuioOSkockm/4acd4073b2db4e56a19f75eae7e86ea3/Choix_De_Rimay_Rood.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Prosecco Eterna",
            "slug": "prosecco-eterna",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5deEBllibYKgQEIsgW6iu0/cb4ec539c6d4b9e07d87683ce419b987/Prosecco_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "'Duc de Blanc' Blanc de Blancs Brut",
            "slug": "duc-de-blanc-blanc-de-blancs-brut",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/66DD51eCD6kKgo44u4GQcW/94c8ede1fcd9f0f7760f534e4eb2f6b8/Duc_de_Blanc_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Cava 'Mas d'Ancosa' Brut",
            "slug": "cava-mas-dancosa-brut",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1BhIrTkp6gIsEU2eMcA0EK/c5f60ed36f7ce3a3eab5de4940d0d841/Cava_Mas_d_Ancosa__400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Cape 312 Rosé",
            "slug": "cape-312-rose",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4krO5CCy6kUMeaKay8KaOE/ba39bf527bafd49f9df51a71c55e8486/Cape_312_Ros___400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Terre du Sud Rosé",
            "slug": "terre-du-sud-rose",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3j37dD4dG0AmYQS2SQgcC2/f79af4ab6761b7224c8c6f6917f46563/Terre_du_Sud_Ros___400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "La Rosée de la Grande Barde Bordeaux rosé a.c.",
            "slug": "la-rosee-de-la-grande-barde-bordeaux-rosé-a.c.",
            "family": null,
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7vHjIKnZza6eQYSKGKqkMs/db6463d16896f8028e389b102c5fdc47/La_Ros__e_de_la_Grande_Barde_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Rosé d'Anjou 'L. Vivier' a.c. demi-sec",
            "slug": "rose-danjou-l-vivier-a.c.-demi-sac",
            "family": {
              "title": "Loire"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4QaTVm4g0MAGgCCuWWeGgS/40dbc739ae7ac5ddd01172fe7f88735a/Ros___d_Anjou_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Choix de Rimay Rosé",
            "slug": "choix-de-rimay-rose",
            "family": {
              "title": "Languedoc"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6PneShmxnGYcIAqEgGIqq2/09e12b381c3aad7f571856d031b93f94/Choix_De_Rimay_Ros__.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Vila Alegria - Sauvignon Blanc",
            "slug": "vila-alegria-sauvignon-blanc",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Vninw57jaGiIK8gQ84E0/d116fe7c956823c038acc03ddc522df8/Vila_Alegria_wit_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Finca Terra 'Chardonnay Viognier'",
            "slug": "finca-terra-chardonnay-viognier",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5KNmKtanNmwMaWEEeyeQwW/7e783ef7ecffe35d349e12c7fccc450c/Finca_Terra_Chardonnay_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Vina La Pinta - Chardonnay",
            "slug": "vina-la-pinta-chardonnay",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5CT24b83wksy6ic0EAsumY/fb84ef6cb4fa77725c267a62de7a6b36/La_Pinta_wit_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Golden Gate Chardonnay",
            "slug": "golden-gate-chardonnay",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1Xmg6fXvw4M8GCymmWcgqy/1e066780898aaa40a106dc9f3edd842c/Golden_Gate_Chardonnay_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Crocodile Creek chardonnay",
            "slug": "crocodile-creek-chardonnay",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5TdHLbWtCEgo6ASAMS2E60/e05df0c775f33a89563c9672d845d8c1/Crocodile_Creek_Chardonnay_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Silver Lining - Chenin Blanc",
            "slug": "silver-lining-chenin-blanc",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3mgARqlxKMyIOQiEmMswm/c5dda0e3ef0826e21d20e39132ec89e8/Silver_lining_Chenin_Blanc.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Massai Viognier",
            "slug": "massai-viognier",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2SfcsnYiLuQcucwqYgimOY/730557be46734d1a9ad286c687b70884/Massai_Viognier_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Cape 312 Chardonnay",
            "slug": "cape-312-chardonnay",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5FmjwqDYpaigIeM2Me0eWW/5f6b4252cca0eacdac50e43b7f28b55b/Cape312_Chardonnay_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Baron Amado Moscatel - Malvasia",
            "slug": "baron-amado-moscatel-malvasia",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6k98p8rABOcsMuYS0cyqsA/18b32dc12308cc807eaaebc638d9a08f/Baron_Amado_Moscatel_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Beando Pinot Grigio",
            "slug": "beando-pinot-grigio",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1EzXhuhsM0gSkSQiqEaqee/ca082cc8d0f441335f43dc1f663a2688/Beando_Pinot_Grigio_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Rüdesheimer Rosengarten Royal Blau",
            "slug": "rüdesheimer-rosengarten-royal-blau",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2nhOIlZo9igmGiGuikQWia/c0fbc673d4b5804877203604b95514e9/rudesheimer_rosengarten_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Rivaner Rhein und Mosel",
            "slug": "rivaner-rhein-und-mosel",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1qIZtpMSBGiSMgYyacUmYm/fc549dc1686611586e269f77c081232e/Rivaner_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Dr Zenzen Mosel Riesling Trocken",
            "slug": "dr-zenzen-mosel-riesling-trocken",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6zZZGU017qIWw2W8kca2ia/d9760b5c3c9fb592ab3adf587716aa0d/Dr.Zenzen_Mosel_Riesling_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Terre du Sud Blanc",
            "slug": "terre-du-sud-blanc",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6Iw5rBOWUoi8sUsQEka6Gg/95705de633439b1626027ccda70befd1/Terre_du_Sud_wit_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Monbazillac - Château Pion a.c.",
            "slug": "monbazillac-chateau-pion-a-c",
            "family": {
              "title": "Bordeaux"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6Dj6v8hzZ6CO00GyUgUmiw/fe312ff0608bb173197cf33944fef0cc/Ch__teau_Pion_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Muscadet sur Lie ‘Domaine des Raillères’",
            "slug": "muscadet-sur-lie-domaine-des-railleres",
            "family": {
              "title": "Loire"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6SZI31Fi6cqiIsaoE8c6E/897a6a3414f0fcfacfd8c029cf953c7b/Muscadet_sur_Lie_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Côtes du Rhône 'Château de Tresques'",
            "slug": "cotes-du-rhone-chateau-de-tresques",
            "family": {
              "title": "Rhônevallei"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3O4uLsQlQ4qUKOEKWsKKcY/be00a1c2fc5b380f212d3e715f23e299/Ch__teau_de_Tresques_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Caves-Saint-Christophe 'Chardonnay'",
            "slug": "caves-saint-christophe-chardonnay",
            "family": {
              "title": "Languedoc"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1E90e6OiBWgs424GcuMWqW/2b8949b1b17724caf055318cc9d3b130/Caves-Saint-Christophe-Chardonnay.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Charme de Mauriac Wit ° Blanc",
            "slug": "charme-de-mauriac-wit-blanc",
            "family": {
              "title": "Languedoc"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/9XZ3QIqLMQ4me2g4Wya6S/dfcbdaef434b3a29923d40b73b1e44b2/Charme_de_Mauriac_Sauvignon_blanc_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Jacques Dépagneux Moulin à Vent veilles vignes a.c.",
            "slug": "Jacques-Dépagneux-Moulin-à-Vent-veilles-vignes-a.c.",
            "family": {
              "title": "Beaujolais"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6yPpafcd0WOeu6wsGuo8WK/e8a6daed2dbcd46ae260116d62324430/Moulin-a-Vent.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Choix de Rimay Wit ° Blanc",
            "slug": "choix-de-rimay-wit-blanc",
            "family": {
              "title": "Languedoc"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6zcKlvqfioGWMo8Yg8Cc4/4cef18927a191e34db86e7e1cb44bd0a/Choix_De_Rimay_Wit.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Gewurtztraminer a.c. Charles Muller et fils",
            "slug": "Gewurtztraminer-a.c.-charles-muller-et-fils",
            "family": {
              "title": "Elzas"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2ofDagOovi6UksM8Iyg2Oi/3682cbddc2c286da591e466a582abdb2/Gewurztraminer_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Pinot Gris a.c. Charles Muller et fils",
            "slug": "pinot-gris-a.c.-charles-muller-et-fils",
            "family": {
              "title": "Elzas"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6IsVgL5ALmwMgaGeuY0AQS/daf5fd90ff03797b0cafa214f9286aa6/Charles_Muller___Fils_Pinot_Gris_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Pinot Noir a.c. Charles Muller et fils",
            "slug": "pinot-noir-a.c.-charles-muller-et-fils",
            "family": {
              "title": "Elzas"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3c7bo0w6sMA8wSK8KAus8i/fed47951ac6554b0eedf450639da1888/Charles_Muller___Fils_Pinot_Noir_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Pinot Blanc a.c. Charles Muller et fils",
            "slug": "pinot-blanc-a.c.-charles-muller-et-fils",
            "family": {
              "title": "Elzas"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4BI1qYq4CAQou22020q6Oi/34d8c34dcd46f50a0dca247051741d12/Charles_Muller___Fils_Pinot_Blanc_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Goud Blond",
            "slug": "keizer-karel-goud-blond",
            "family": {
              "title": "Keizer Karel"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c6pqHI8SMdUu46cQ6AMm4kG",
                "title": "Zilveren medaille op de World Beer Awards 2014",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Zilveren medaille op de [World Beer Awards 2014](http://www.worldbeerawards.com/charles-quint-golden-blond.23143.html) in de categorie 'Europe - Pale Beer - Belgian Style Strong'."
                    }
                  }
                }
              },
              {
                "id": "c4K7dqG7A64ueue88C80EaY",
                "title": "Superior Taste Awards",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) 2014 en 2011"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/33NE3LI9KE2a8uiOoAyKqO/62a446f7ceeb6a29cd1ce1f418d1ea52/Keizer_Karel_Goud_Blond_Fles_33cl_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Adler",
            "slug": "adler",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5pb2SU2SukYkQeSiUGsYQS/5d41c6b3c0c02e2969d2b5204a3a4317/adler_fles_25cl_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Primus",
            "slug": "primus",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "edKi0PJ27uMk6AaMIMsai",
                "title": "World Beer Awards 2015",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "__Bronzen medaille__ op de [World Beer Awards 2015](http://www.worldbeerawards.com/2015/europe/belgium.html) in de categorie Belgium - German Style Pale Lager"
                    }
                  }
                }
              },
              {
                "id": "c218mc4BZU42SOEgIuIiWku",
                "title": " Drie sterren op Superior Taste Awards 2015 & 2013",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "__3 sterren__ op de [Superior Taste Awards](http://www.itqi.com/) in 2015 en 2013"
                    }
                  }
                }
              },
              {
                "id": "c2Q8nn3AlhmSMc2AQqS0s08",
                "title": "Superior Taste Awards in 2012 en 2011",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "__2 sterren__ op de [Superior Taste Awards](http://www.itqi.com/) in 2012 en 2011"
                    }
                  }
                }
              },
              {
                "id": "c54SvdvIrLOqKySaMkEiMUo",
                "title": "De Grote Pilstest van Het Nieuwsblad",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Primus staat in de __Top 3__ van een blindtest van 44 pilsbieren, uitgevoerd door __Test Aankoop__ in oktober 2011, en behaalde een gedeelde __tweede plaats in de Grote Pilstest van Het Nieuwsblad__ op 4 augustus 2012."
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/UdwDF0TvMWyOaoEAOOuEm/b1723b312f867676b9f718825989066c/Primus_25cl_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "SAISON",
            "slug": "saison",
            "family": {
              "title": "Super 8"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6hgVAcEMGkOeQqqYoicAwE/2f71cac33588cbcc37909e4973b4d955/Super-8-Saison-Bottle.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Fuerto Espresso",
            "slug": "fuerto-espresso",
            "family": null,
            "category": {
              "slug": "koffies"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6iYRsYEqbumo8O2QSM2Kuo/54a51aabc3ebbbe3b51a10268229108b/Fuerto_Espresso_800x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Fuerto Deca",
            "slug": "fuerto-deca",
            "family": null,
            "category": {
              "slug": "koffies"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/pNo3gJO7leOEaqG2sMcWI/7dfdcebcb48894e86a3751ea63a27fce/Fuerto_DECA_800x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Fuerto Arabica",
            "slug": "fuerto-arabica",
            "family": null,
            "category": {
              "slug": "koffies"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4QDuIbrKo8egqeWEUKEosg/2d75862d7daa61df8ba2f45461358e37/Fuerto_Expresso_Arabica_800x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Agrumes ",
            "slug": "val-agrumes",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/52gzBSwbHWA0UuWoeYaqkO/e15ff28ee49dd132b3d60721e20c5f79/val_Argumes_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Bitter Lemon",
            "slug": "val-bitter-lemon",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4YhtvouDAsYOWmEQMgGuW/937ac50246fb0681d68a69d004a55d4e/val_lemon_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Tonic",
            "slug": "val-tonic",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7u2syG3ZNCOiwu6K8MYkaM/14be8dd8143702e0939bea7ee2278c94/val_tonic_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Tea",
            "slug": "val-tea",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3wnSAcY86AMukIqAMsGucq/9864917fe37828f270377c67349069e2/val_tea_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Lime",
            "slug": "val-lime",
            "family": {
              "title": "VAL"
            },
            "category": {
              "slug": "waters-frisdranken"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/veibW3RC5EY2cOYWmYwWc/90d768222e6d418c96db4a5bfabda17b/val_lime_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Najaarsbock",
            "slug": "najaarsbock",
            "family": null,
            "category": null,
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6qp00hQcZUYOceoaQa04I8/c788d00b24998bb810a7cf3a54fb669c/Leeuw_Najaarsbock_fles_400x1530__1_.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Oud Bruin",
            "slug": "oud-bruin",
            "family": null,
            "category": null,
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/2LrgdjHAgwkccKWGK4EQ4c/a94f4a6bcd73334490c3841ea247c55e/Leeuw-Bier_OudBruin_75cl_tiny__1_.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "IPA",
            "slug": "super-8-ipa",
            "family": {
              "title": "Super 8"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c4S123ceZ4Ig8CekcGqmUSY",
                "title": "3 sterren op de Superior Taste Awards 2017",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "3 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/57BBz2u2SQYWus4wEkW86a/9615edb5fcd4e3ee93cc324bb203d5bf/Super_8_IPA_Fles_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Speciale 1900",
            "slug": "speciale-1900",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c5Vfj5sBgRi6gK6Ai4s8OCW",
                "title": "Sinds 2009 erkend als Vlaams Streekproduct",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Sinds 2009 erkend als [Vlaams Streekproduct.](http://www.streekproduct.be/)"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3RuQTomGVy8m0ACIsWWEqm/c54ecc27a260c5ca8c5ef285a63c23dd/Speciale_1900_glas__spiegeling.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "BLANCHE",
            "slug": "super-8-blanche",
            "family": {
              "title": "Super 8"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c5ROZ34RYcwCs8ASQSgK6Am",
                "title": "Country Winner op de World Beer Awards 2017",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Country Winner op de [World Beer Awards 2017 ](http://www.worldbeerawards.com/) in de categorie 'Belgium Style Witbier'"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/4YC5w8SAM8kMYyAyscgeGy/9d2117ff02c50b9e7e95d89182e7ff6a/Super_8_Blanche_Fles_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Radler",
            "slug": "mystic-radler",
            "family": {
              "title": "Mystic"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "Ln1Jp6VjsQEA8wuWeuICg",
                "title": "2 sterren op de Superior Taste Awards 2017",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "2 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017"
                    }
                  }
                }
              },
              {
                "id": "c2ps164teRu8cAq4wgkYaKS",
                "title": "Gouden medaille op de World Beer Awards 2015",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Gouden medaille op de [World Beer Awards 2015](http://www.worldbeerawards.com/2015/europe/belgium.html) in de categorie Belgium - Fruit Flavoured Beer"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3IbfIiInOwMqoE4YsQOQWO/3d3aabb9f82bf4c5ff7302884904fe82/Mystic_Radler_Fles_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Perzik",
            "slug": "mystic-perzik",
            "family": {
              "title": "Mystic"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c3uwNtl0dYAsaeyIgqsMQkU",
                "title": "3 sterren op de Superior Taste Awards 2014",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) in 2014."
                    }
                  }
                }
              },
              {
                "id": "wHe9Dv1hIc2KA4KYwOE2S",
                "title": "Gouden medaille op de Asia Beer Awards 2013",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Gouden medaille op de [Asia Beer Awards 2013](http://www.beerfestasia.com/) in de categorie 'Flavoured beers'"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/62McPOlNqo4Uig8soGYcIC/935f7c25bed76ef363ef5d958377c791/Mystic_Perzik_Fles_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Ommegang",
            "slug": "ommegang-keizer-karel",
            "family": {
              "title": "Keizer Karel"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c1IZJkl6enGAy2OCEmeCGQK",
                "title": "Belgische winnaar op de World Beer Awards 2016",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Belgische winnaar op de [World Beer Awards 2016](http://www.worldbeerawards.com/2016) in de categorie Belgium - Lager Strong"
                    }
                  }
                }
              },
              {
                "id": "c6qVO7tRUTCae2Qq844Ogga",
                "title": "Zilveren medaille op de World Beer Awards 2015",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Zilveren medaille op de [World Beer Awards 2015](http://www.worldbeerawards.com/2015/europe/belgium.html) in de categorie Belgium - Belgian Style Strong Pale Ale"
                    }
                  }
                }
              },
              {
                "id": "Z1UXweqxmm4aUQekiMiSa",
                "title": "3 sterren op de Superior Taste Awards",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) 2014, 2013 en 2012"
                    }
                  }
                }
              },
              {
                "id": "c5vWYtwipe8UUq6k6ywoUOI",
                "title": "Crystal Taste Award in 2014",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "[Crystal Taste Award](http://www.itqi.com/en/superior-taste-award/crystal-award.html) in 2014\nHet Ommegang-bier werd bekroond met__ 3 sterren__, de hoogst mogelijke score, op de __Superior Taste Awards 2012, 2013 en 2014__. Producten die dit resultaat drie jaar na mekaar behalen, krijgen de __Crystal Taste Award__ toegekend."
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1c96994MRCoIEMMO08ekwe/3bb8b545b98464147c12efc9f483db58/Keizer_Karel_Omegang_Fles_33cl_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Robijn Rood",
            "slug": "keizer-karel-robijn-rood",
            "family": {
              "title": "Keizer Karel"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c4K7dqG7A64ueue88C80EaY",
                "title": "Superior Taste Awards",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) 2014 en 2011"
                    }
                  }
                }
              },
              {
                "id": "c2jozAK7H6MOwyi0YuugAkW",
                "title": "Brons op de World Beer Awards 2013",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Brons in de categorie 'Europe - Dark Beer - Belgian Style Strong' op de [World Beer Awards](http://www.worldbeerawards.com/beer/haacht_bewery_charles_quint_ruby_red-7968.html) 2013"
                    }
                  }
                }
              },
              {
                "id": "c2PzAL3IBJugy2yIoCimqy8",
                "title": "1° prijs in 2005 en 2003 op het Internationaal Streekbierenfestival",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "1° prijs in 2005 en 2003 op het [Internationaal Streekbierenfestival](http://flanderseventsvzw.be/), in de categorie ‘geprononceerd degustatiebier’"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/6ym78zuTwAco4qO0yQQW8O/2677bd3e1e53dc05751f49d02ccfe01d/Keizer_Karel_Robijn_Fles_33cl_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Prior",
            "slug": "tongerlo-prior",
            "family": {
              "title": "Tongerlo"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "fRxI9pRNdeyUCGeOQaSoA",
                "title": "3 sterren op de Superior Taste Awards 2015",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "3 sterren op de [Superior Taste Awards](http://www.itqi.org/) 2015"
                    }
                  }
                }
              },
              {
                "id": "c7cTcd8jNw4AiCwuWoA86Y8",
                "title": "Gouden medaille op de Brussels Beer Challenge 2013",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Op de tweede editie van de [Brussels Beer Challenge](http://www.brusselsbeerchallenge.com/nl) behaalde Tongerlo PRIOR goud in de categorie 'Pale & Amber Ale/Belgian Style Tripel'"
                    }
                  }
                }
              },
              {
                "id": "c1wAcaz090oqemOOW6Uky0k",
                "title": "Crystal Award op de Superior Taste Awards 2012",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "__Crystal Award op de [Superior Taste Awards](http://www.itqi.org/) 2012__\n120 chef-koks en sommeliers met internationale faam bekroonden Tongerlo PRIOR met 3 sterren voor zijn superieure smaak. En dit voor het derde jaar op rij, want ook in 2011 en 2010 kreeg het al 3 sterren toebedeeld. "
                    }
                  }
                }
              },
              {
                "id": "fThFSN2BVYA4O6AQEEM0w",
                "title": "Beste Europees blond abdij/trappistenbier",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Tijdens de editie 2011 van de [World Beer Awards](http://www.worldbeerawards.com/) werd Tongerlo PRIOR uitgeroepen tot het beste bier in de categorie Europees blond abdij/trappistenbier. Voor ons een bekroning voor de dagelijkse zorg en toewijding die wij besteden aan het brouwen van dit unieke bier."
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/axVD1GAlSS0GuIgM0Iw2o/3091ac76beb69bb33bbf5b8153d90a89/Tongerlo_PRIOR_fles_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "LUX",
            "slug": "tongerlo-lux",
            "family": {
              "title": "Tongerlo"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "c69uWucm0fuEsU8iyAmyo6O",
                "title": "Certificate of Excellence",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Certificate of Excellence op de [Brussels Beer Challenge 2016](http://docs.brusselsbeerchallenge.com/brusselsbeerchallenge/BBC2016_Awards_list_Categories_EN.pdf)"
                    }
                  }
                }
              },
              {
                "id": "j9QgkQqLJeUqgGaC6SeWq",
                "title": "World's Best Beer 2014",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Verkozen tot World's Best Beer (Beste Bier ter Wereld) op de [World Beer Awards 2014](http://www.worldbeerawards.com/)"
                    }
                  }
                }
              },
              {
                "id": "c3OkkSkF4LmWsM8SOcaSoY6",
                "title": "Zilver op de Asia Beer Awards 2013",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Zilver op de [Asia Beer Awards](http://www.beerfestasia.com/) 2013 in de categorie 'Belgian Blonde Ale'"
                    }
                  }
                }
              },
              {
                "id": "c1bIu8NqEgoMkiywysAsyqG",
                "title": "Australian International Beer Awards 2012",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Brons op de [Australian International Beer Awards 2012](http://www.beerawards.com/) in de categorie 'Best Belgian and French Style Ale - Abbey Blonde'"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/d57nfpBq9yS8g4GUouYOo/06791be51684d799db7d5ba9182fa90c/Tongerlo_LUX_fles_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "EXPORT",
            "slug": "super-8-export",
            "family": {
              "title": "Super 8"
            },
            "category": {
              "slug": "bieren"
            },
            "awards": [
              {
                "id": "Ln1Jp6VjsQEA8wuWeuICg",
                "title": "2 sterren op de Superior Taste Awards 2017",
                "awardsDescription": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "2 sterren op de [Superior Taste Awards](https://www.itqi.com/nl/superior-taste-award/) 2017"
                    }
                  }
                }
              }
            ],
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3aSw2cXJIIyKAgA46seOCs/16e9f9a3394e3dc6b4ba2c502338b216/Super_8_Export_Fles_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Sancerre - Réserve Paradis",
            "slug": "sancerre-reserve-paradis",
            "family": {
              "title": "Loire"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/49cujShdBSQsYYYgeQ0y2K/a1786a4ac61917f56a2d80ee57700eb7/Sancerre_R__serve_Paradis_gr_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Mâcon-Villages ‘Château de Chazoux’",
            "slug": "macon-villages-'chateau-de-chazoux'",
            "family": {
              "title": "Bourgogne"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7GmaPxvIrYCOUeYOacQUQi/d09705d1ef17d6d3f69f56b27699b559/Ch__teau_de_Chazoux_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Silver Lining - Merlot-Cinsault",
            "slug": "silver-lining-merlot-cinsault",
            "family": {
              "title": "Wereldwijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/1fMHC4CNdqEOagAEcMIoYE/e8208da2ed49769ae62810eb6b2ae968/Silverlining_Cabernet_Sauvignon-Merlot_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Pomerol - Château Hautes Rouzes",
            "slug": "pomerol-chateau-hautes-rouzes",
            "family": {
              "title": "Bordeaux"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7Mpt1va7KMGaUaOKAAaMi0/98a7ce3dac927ca3c4ded8d99cf6d384/Chateau_Des_Hautes_Rouzes_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Beando Primitivo",
            "slug": "beando-primitivo",
            "family": {
              "title": "Europese wijnen"
            },
            "category": {
              "slug": "wijnen"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/70kcZcHTAQECGMm4oGw6GM/13eee749e0239f4ba1702a8b36888a55/Beando_Primitivo_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Eupener Bier",
            "slug": "eupener-bier",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5HbQL1e6SQUcSOgK6IOa8E/e44efbde2edace04dbfc6f845462e667/Eupener_glas_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Star Blond",
            "slug": "star",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/7EzulzvWA8OKaiqgIQYQS/f7ea16ccf67ec623d4ba2a188e9c0714/Star_fles_25_cl_400x1530_mini.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Mill's Scotch Ale",
            "slug": "mills-scotch-ale",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5247Qatv1SeisSq6GSC6cg/f38280a4c8907b8f68005e41ea18d897/Mills_Glas_400x1530.png"
              }
            }
          }
        },
        {
          "node": {
            "title": "Gildenbier",
            "slug": "gildenbier",
            "family": null,
            "category": {
              "slug": "bieren"
            },
            "awards": null,
            "packshot": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/5BpNuJt0hq208cQ2E8Aweq/48657964b61d0bf3e26daadfe1c52fbb/Gildenbier_fles_400x1530_mini.png"
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
            "slugFinal": "nl-be/brouwerij/artikels/nieuws"
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
    "navId": "c1DzxdxolMIwGMs2wMucG8W",
    "slug": "brouwerij/artikels/evenementen"
  }
}

var contentful = require('contentful')

var client = contentful.createClient({
  space: '4x9ynmufi2c6',
  accessToken: '00776a927469f43f7646dedff5221ba86305d737741b46084ac5072e4c26acdc'
})
//MHQ0SGIhmCYo6q2gGY2Yg
class EventsTemplate extends Component {
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
        <NewsPage
          slug_nl={data.data.slug_nl.news[0].slug}
          slug_nl_be={data.data.slug_nl_be.news[0].slug}
          slug_en={data.data.slug_en.news[0].slug}
          slug_fr={data.data.slug_fr.news[0].slug}
          slug_fr_be={data.data.slug_fr_be.news[0].slug}
          navigation={navigation.navigation}
          cfNavigation={data.data.nav}
          content={data.data.content}
          highlightedEvent={data.data.highlightedevent}
          news={data.data.news}
          locale={data.pathContext.locale}
          footerMenu={data.data.footerMenu}
          events={this.props.obj}
          publications={data.data.publications}
          stories={data.data.stories}
          press={data.data.press}
          awards={_filter(data.data.merken.edges, merk => merk.node.awards)}
          location={data.location}
          agePopup={data.data.agePopup}
          cookiesPopup={data.data.cookiesPopUp}
          subscriptionFormData={data.data.subscriptionForm}
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

export default EventsTemplate;
