import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImmoSingle from './components/immo/ImmoSingle'
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
    "pathname": "/nl-BE/horeca/panden/cafe-te-diest",
    "search": "",
    "hash": "",
    "state": null,
    "key": "ebaorr"
  },
  "history": {
    "length": 5,
    "action": "POP",
    "location": {
      "pathname": "/nl-BE/horeca/panden/cafe-te-diest",
      "search": "",
      "hash": "",
      "state": null,
      "key": "ebaorr"
    }
  },
  "pageResources": {
    "json": {
      "data": {
        "content": {
          "title": "Immo page",
          "texts": {
            "titles": {
              "location": "Locatie",
              "contactUs": "Contacteer ons",
              "extraInfo": "Extra info",
              "availability": "Beschikbaarheid",
              "generalInformation": "Algemene informatie"
            },
            "subTitles": {
              "room": "Zaal",
              "parking": "Parking",
              "adres": "Adres",
              "email": "E-mail",
              "house": "Met woonst",
              "phone": "Telefoon",
              "kitchen": "Keuken",
              "fax": "Fax",
              "terrace": "Terras",
              "position": "Ligging",
              "condition": "Staat",
              "horecaPart": "Horecagedeelte",
              "propertyType": "Type uitbating",
              "availableFrom": "Beschikbaar vanaf",
              "cornerBuilding": "Hoekpand"
            },
            "options": {
              "basic": "basis",
              "private": "privé",
              "furnished": "bemeubeld",
              "extended": "uitgebreid",
              "parkingPlaces": "parkeerplaatsen",
              "yes": "ja",
              "public": "publiek",
              "garden": "tuin",
              "privateTerrace": "privéterras",
              "sleepingRooms": "slaapkamers",
              "immediatelyAvailable": "meteen beschikbaar"
            }
          }
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
        "slug_fr_be": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___fr-BE",
          "immo": [
            {
              "slug": "horeca/etablissements"
            }
          ]
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
        "slug_nl": {
          "id": "c3ZgBshM4WcSEQe6usAcm88",
          "immo": [
            {
              "slug": "horeca/panden"
            }
          ]
        },
        "immoContent": {
          "id": "c6C8phI63XGyoq4mCWgwmY0",
          "filterType": [
            "Type pand"
          ],
          "filterStatus": [
            "Over te nemen",
            "Te huur"
          ],
          "locationPlaceholder": "Vul je locatie in",
          "allProperties": "Alle panden",
          "allPropertiesSlug": {
            "slug": "horeca/panden"
          }
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
                "slugFinal": "fr-be/horeca/etablissements"
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
                "slugFinal": "en"
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
                "slugFinal": "fr"
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
                "slugFinal": "nl/horeca/panden"
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
        },
        "panden": {
          "edges": [
            {
              "node": {
                "slug": "cafe-te-diest",
                "parking": true,
                "sticky": null,
                "type": {
                  "title": "Café"
                },
                "horecaFurnished": false,
                "horecaEstimatedArea": 60,
                "availableFromDate": null,
                "availability": true,
                "zaalSize": null,
                "kitchenSize": 15,
                "kitchenType": true,
                "positionLocatedNear": [
                  "centrum",
                  "winkelstraat"
                ],
                "positionCorner": true,
                "kitchen": true,
                "terrace": true,
                "terraceSize": 30,
                "id": "MHQ0SGIhmCYo6q2gGY2Yg",
                "parkingType": false,
                "parkingAmount": null,
                "house": false,
                "houseRooms": null,
                "houseTerrace": null,
                "houseGarden": null,
                "contact": [
                  {
                    "email": "bart.vanmuysen@haacht.com",
                    "fax": null,
                    "telephone": "0476/40 62 32"
                  }
                ],
                "extraInfo": {
                  "childMarkdownRemark": {
                    "internal": {
                      "content": "Instapklaar café te Diest met mooi terras"
                    }
                  }
                },
                "condition": {
                  "title": "Instapklaar"
                },
                "locationAdres": "Koningin Astridlaan 30, 3290 Diest",
                "location": {
                  "lon": 5.057568899999978,
                  "lat": 50.9806974
                },
                "media": [
                  {
                    "file": {
                      "url": "//images.ctfassets.net/4x9ynmufi2c6/2jb7jGTcM0M8G2uMaKSA8W/f9d85e2221c6fb6ab133b3a109410f40/Diest-KoninginAstridlaan-30__2_.jpeg"
                    }
                  },
                  {
                    "file": {
                      "url": "//images.ctfassets.net/4x9ynmufi2c6/6WRS34DHbigSw80ScmUiyK/87fff3a8d9d9fb78619d3f19d66fa12c/Diest-KoninginAstridlaan-30__3_.jpeg"
                    }
                  },
                  {
                    "file": {
                      "url": "//images.ctfassets.net/4x9ynmufi2c6/1aIBYasybkc0USg6cGgsGm/63fe55307ac780bcbb9dcadffe44dfb3/Diest-KoninginAstridlaan-30__1_.jpg"
                    }
                  }
                ],
                "image": {
                  "file": {
                    "url": "//images.ctfassets.net/4x9ynmufi2c6/1aIBYasybkc0USg6cGgsGm/63fe55307ac780bcbb9dcadffe44dfb3/Diest-KoninginAstridlaan-30__1_.jpg"
                  }
                },
                "title": "Café te Diest",
                "status": {
                  "title": "Te huur"
                }
              }
            }
          ]
        },
        "typeFilter": {
          "edges": [
            {
              "node": {
                "id": "c204E3KUyAgw2SIsMiyUWs8",
                "title": "Taverne/Brasserie"
              }
            },
            {
              "node": {
                "id": "c2RNGVk2OMwEg2AgiOASwc0",
                "title": "Restaurant"
              }
            },
            {
              "node": {
                "id": "uv113eAb1QSKggs8AM4OS",
                "title": "Sportcafetaria"
              }
            },
            {
              "node": {
                "id": "c69qg5SH7LaK08gS2EWUKCM",
                "title": "Horecazaak"
              }
            },
            {
              "node": {
                "id": "c1jQLnm6XjEWY2ks8Ck2Y0w",
                "title": "Café"
              }
            }
          ]
        },
        "statusFilter": {
          "edges": [
            {
              "node": {
                "id": "c57SqyXVXB6w2OkA2wUsOqi",
                "title": "Te huur"
              }
            },
            {
              "node": {
                "id": "c5uYkWzN2vugycAAGOG26oa",
                "title": "Over te nemen"
              }
            }
          ]
        }
      },
      "pathContext": {
        "locale": "nl-BE",
        "id": "MHQ0SGIhmCYo6q2gGY2Yg",
        "navId": "c1DzxdxolMIwGMs2wMucG8W"
      }
    },
    "page": {
      "componentChunkName": "component---src-templates-immo-single-js",
      "layout": "layout---index",
      "layoutComponentChunkName": "component---src-layouts-index-js",
      "jsonName": "nl-be-horeca-panden-cafe-te-diest.json",
      "path": "/nl-BE/horeca/panden/cafe-te-diest"
    }
  },
  "data": {
    "content": {
      "title": "Immo page",
      "texts": {
        "titles": {
          "location": "Locatie",
          "contactUs": "Contacteer ons",
          "extraInfo": "Extra info",
          "availability": "Beschikbaarheid",
          "generalInformation": "Algemene informatie"
        },
        "subTitles": {
          "room": "Zaal",
          "parking": "Parking",
          "adres": "Adres",
          "email": "E-mail",
          "house": "Met woonst",
          "phone": "Telefoon",
          "kitchen": "Keuken",
          "fax": "Fax",
          "terrace": "Terras",
          "position": "Ligging",
          "condition": "Staat",
          "horecaPart": "Horecagedeelte",
          "propertyType": "Type uitbating",
          "availableFrom": "Beschikbaar vanaf",
          "cornerBuilding": "Hoekpand"
        },
        "options": {
          "basic": "basis",
          "private": "privé",
          "furnished": "bemeubeld",
          "extended": "uitgebreid",
          "parkingPlaces": "parkeerplaatsen",
          "yes": "ja",
          "public": "publiek",
          "garden": "tuin",
          "privateTerrace": "privéterras",
          "sleepingRooms": "slaapkamers",
          "immediatelyAvailable": "meteen beschikbaar"
        }
      }
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
    "slug_fr_be": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___fr-BE",
      "immo": [
        {
          "slug": "horeca/etablissements"
        }
      ]
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
    "slug_nl": {
      "id": "c3ZgBshM4WcSEQe6usAcm88",
      "immo": [
        {
          "slug": "horeca/panden"
        }
      ]
    },
    "immoContent": {
      "id": "c6C8phI63XGyoq4mCWgwmY0",
      "filterType": [
        "Type pand"
      ],
      "filterStatus": [
        "Over te nemen",
        "Te huur"
      ],
      "locationPlaceholder": "Vul je locatie in",
      "allProperties": "Alle panden",
      "allPropertiesSlug": {
        "slug": "horeca/panden"
      }
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
            "slugFinal": "fr-be/horeca/etablissements"
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
            "slugFinal": "en"
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
            "slugFinal": "fr"
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
            "slugFinal": "nl/horeca/panden"
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
    },
    "panden": {
      "edges": [
        {
          "node": {
            "slug": "cafe-te-diest",
            "parking": true,
            "sticky": null,
            "type": {
              "title": "Café"
            },
            "horecaFurnished": false,
            "horecaEstimatedArea": 60,
            "availableFromDate": null,
            "availability": true,
            "zaalSize": null,
            "kitchenSize": 15,
            "kitchenType": true,
            "positionLocatedNear": [
              "centrum",
              "winkelstraat"
            ],
            "positionCorner": true,
            "kitchen": true,
            "terrace": true,
            "terraceSize": 30,
            "id": "MHQ0SGIhmCYo6q2gGY2Yg",
            "parkingType": false,
            "parkingAmount": null,
            "house": false,
            "houseRooms": null,
            "houseTerrace": null,
            "houseGarden": null,
            "contact": [
              {
                "email": "bart.vanmuysen@haacht.com",
                "fax": null,
                "telephone": "0476/40 62 32"
              }
            ],
            "extraInfo": {
              "childMarkdownRemark": {
                "internal": {
                  "content": "Instapklaar café te Diest met mooi terras"
                }
              }
            },
            "condition": {
              "title": "Instapklaar"
            },
            "locationAdres": "Koningin Astridlaan 30, 3290 Diest",
            "location": {
              "lon": 5.057568899999978,
              "lat": 50.9806974
            },
            "media": [
              {
                "file": {
                  "url": "//images.ctfassets.net/4x9ynmufi2c6/2jb7jGTcM0M8G2uMaKSA8W/f9d85e2221c6fb6ab133b3a109410f40/Diest-KoninginAstridlaan-30__2_.jpeg"
                }
              },
              {
                "file": {
                  "url": "//images.ctfassets.net/4x9ynmufi2c6/6WRS34DHbigSw80ScmUiyK/87fff3a8d9d9fb78619d3f19d66fa12c/Diest-KoninginAstridlaan-30__3_.jpeg"
                }
              },
              {
                "file": {
                  "url": "//images.ctfassets.net/4x9ynmufi2c6/1aIBYasybkc0USg6cGgsGm/63fe55307ac780bcbb9dcadffe44dfb3/Diest-KoninginAstridlaan-30__1_.jpg"
                }
              }
            ],
            "image": {
              "file": {
                "url": "//images.ctfassets.net/4x9ynmufi2c6/1aIBYasybkc0USg6cGgsGm/63fe55307ac780bcbb9dcadffe44dfb3/Diest-KoninginAstridlaan-30__1_.jpg"
              }
            },
            "title": "Café te Diest",
            "status": {
              "title": "Te huur"
            }
          }
        }
      ]
    },
    "typeFilter": {
      "edges": [
        {
          "node": {
            "id": "c204E3KUyAgw2SIsMiyUWs8",
            "title": "Taverne/Brasserie"
          }
        },
        {
          "node": {
            "id": "c2RNGVk2OMwEg2AgiOASwc0",
            "title": "Restaurant"
          }
        },
        {
          "node": {
            "id": "uv113eAb1QSKggs8AM4OS",
            "title": "Sportcafetaria"
          }
        },
        {
          "node": {
            "id": "c69qg5SH7LaK08gS2EWUKCM",
            "title": "Horecazaak"
          }
        },
        {
          "node": {
            "id": "c1jQLnm6XjEWY2ks8Ck2Y0w",
            "title": "Café"
          }
        }
      ]
    },
    "statusFilter": {
      "edges": [
        {
          "node": {
            "id": "c57SqyXVXB6w2OkA2wUsOqi",
            "title": "Te huur"
          }
        },
        {
          "node": {
            "id": "c5uYkWzN2vugycAAGOG26oa",
            "title": "Over te nemen"
          }
        }
      ]
    }
  },
  "pathContext": {
    "locale": "nl-BE",
    "id": "MHQ0SGIhmCYo6q2gGY2Yg",
    "navId": "c1DzxdxolMIwGMs2wMucG8W"
  }
}

var contentful = require('contentful')

var client = contentful.createClient({
  space: '4x9ynmufi2c6',
  accessToken: '00776a927469f43f7646dedff5221ba86305d737741b46084ac5072e4c26acdc'
})
//MHQ0SGIhmCYo6q2gGY2Yg
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: null,
      loaded: false,
      error: null
    };
  }

  componentDidMount(){
    var object = this;
    console.log("component mounted", getAllUrlParams().id)
    client.getEntries({'sys.id': getAllUrlParams().id, include: 10, locale: "nl-BE"})
    .then(function (entries) {
       // log the file url of any linked assets on field `image`
       var pand = entries.items[0];
       pand.node=pand.fields;
       var panden = {
         edges: [pand]
       }

         object.setState({
           object: panden,
           loaded: true
         });
   })
  }

  render() {
      if(!this.state.object){
        return(
        <div className="loading">Loading or error</div>
        )
      }
    return (

      <div className="App">
        <ImmoSingle
          //replace with links from contentful
          //navigation={this.props.data.navigation}
          slug_nl={data.data.slug_nl.immo[0].slug}
          slug_fr_be={data.data.slug_fr_be.immo[0].slug}
          navigation={navigation.navigation}
          cfNavigation={data.data.nav}
          content={data.data.content}
          immoContent={data.data.immoContent}
          locale={data.pathContext.locale}
          panden2={data.data.panden}
          panden={this.state.object}
          location={data.location}
          agePopup={data.data.agePopup}
          footerMenu={data.data.footerMenu}
          cookiesPopup={data.data.cookiesPopUp}
        />
      </div>
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

export default App;
