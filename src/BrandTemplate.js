import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleBrandContent from './components/brands/SingleBrandContent';
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
    "pathname": "/nl-BE/merken/bieren/keizer-karel-goud-blond",
    "search": "",
    "hash": "",
    "state": null,
    "key": "9dy45j",
    "action": "PUSH"
  },
  "history": {
    "length": 4,
    "action": "PUSH",
    "location": {
      "pathname": "/nl-BE/merken/bieren/keizer-karel-goud-blond",
      "search": "",
      "hash": "",
      "state": null,
      "key": "9dy45j",
      "action": "PUSH"
    }
  },
  "pageResources": {
    "json": {
      "data": {
        "slug_nl_be": {
          "id": "c3ZgBshM4WcSEQe6usAcm88",
          "brandCategories": [
            {
              "slug": "merken"
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
        "allFamilies": {
          "edges": [
            {
              "node": {
                "title": "Coq Hardi",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Richard dit Lecastor",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Leeuw",
                "familyDescription": {
                  "familyDescription": "..."
                }
              }
            },
            {
              "node": {
                "title": "Super 8",
                "familyDescription": {
                  "familyDescription": "..."
                }
              }
            },
            {
              "node": {
                "title": "Mystic",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Tongerlo",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Keizer Karel",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Wereldwijnen",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Elzas",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "kasteelwijnen (Bordeaux)",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Beaujolais",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Bourgogne",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Bordeaux",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Pepsi",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "VAL",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Languedoc",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Loire",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Provence",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Europese wijnen",
                "familyDescription": null
              }
            },
            {
              "node": {
                "title": "Rhônevallei",
                "familyDescription": null
              }
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
        "slug_en": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___en",
          "brandCategories": [
            {
              "slug": "brands"
            }
          ]
        },
        "slug_nl": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___nl",
          "brandCategories": [
            {
              "slug": "merken"
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
        "slug_fr": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___fr",
          "brandCategories": [
            {
              "slug": "marques"
            }
          ]
        },
        "slug_fr_be": {
          "id": "c3ZgBshM4WcSEQe6usAcm88___fr-BE",
          "brandCategories": [
            {
              "slug": "marques"
            }
          ]
        },
        "singleBrandPageData": {
          "tabs": [
            {
              "id": "c4PjNAuDdOMmuu8U8QaaWyM",
              "title": "Beschrijving",
              "key": "description"
            },
            {
              "id": "c5HSnlkLmpyCOuCA8s6KiqY",
              "title": "Zijn smaak",
              "key": "zijn smaak"
            },
            {
              "id": "c1gBDDGiKgEuq02IsCeqAY6",
              "title": "serveertips",
              "key": "serveertips"
            },
            {
              "id": "c58UjLtCynmqa6cSmWssguo",
              "title": "Geschiedenis",
              "key": "history"
            },
            {
              "id": "c4lEHIhUulai0Uu2yCYG0Km",
              "title": "Verpakking",
              "key": "verpakking"
            },
            {
              "id": "q8Ck4sQuFUu2Yk6ggqYsO",
              "title": "Lekker bij",
              "key": "lekker bij"
            },
            {
              "id": "c4clrGi0tDiMMqy8qE4uuiE",
              "title": "Nutritionele waarden",
              "key": "nutritionele waarden"
            }
          ],
          "alcoholVolumeTitle": "Alcohol Volume",
          "sellpointsTitle": "Bekijk Verkooppunten",
          "searchPostcode": "Vul uw postcode in",
          "searchButton": "Zoek",
          "searchButtonSlug": "verkooppunten",
          "familyTitle": "De Familie",
          "familySubTitle": "Bekijk ook",
          "serveritualText": "Schenkingsritueel",
          "packshotsLink": {
            "title": "PACKSHOTS & LOGO'S",
            "linkSlug": "logo-packshots"
          }
        },
        "allBrandsData": {
          "edges": [
            {
              "node": {
                "category": {
                  "title": "Bieren",
                  "slug": "bieren",
                  "index": 1
                },
                "packshotHeader": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/3Intfo2awE6qKuC4W0AOIK/7038e6181994ef87546d0d233aff75c3/Keizer_Kreal_Goud_fles_glas_800x1530_mini.png"
                  }
                },
                "family": {
                  "title": "Keizer Karel"
                },
                "slug": "keizer-karel-goud-blond",
                "externalUrl": "https://www.charlesquint.be/",
                "logo": null,
                "shortDescription": "Heldergoud bier met een uitzonderlijk boeket van kruiden.",
                "alcoholpercentage": 8.5,
                "beersInFamily": [
                  {
                    "title": "Robijn Rood",
                    "slug": "keizer-karel-robijn-rood",
                    "packshot": {
                      "file": {
                        "url": "//images.ctfassets.net/vlb1ben6vtp9/6ym78zuTwAco4qO0yQQW8O/2677bd3e1e53dc05751f49d02ccfe01d/Keizer_Karel_Robijn_Fles_33cl_400x1530.png"
                      }
                    },
                    "family": {
                      "title": "Keizer Karel"
                    }
                  },
                  {
                    "title": "Ommegang",
                    "slug": "ommegang-keizer-karel",
                    "packshot": {
                      "file": {
                        "url": "//images.ctfassets.net/vlb1ben6vtp9/1c96994MRCoIEMMO08ekwe/3bb8b545b98464147c12efc9f483db58/Keizer_Karel_Omegang_Fles_33cl_400x1530_mini.png"
                      }
                    },
                    "family": {
                      "title": "Keizer Karel"
                    }
                  }
                ],
                "awards": [
                  {
                    "title": "Zilveren medaille op de World Beer Awards 2014",
                    "subTitle": null,
                    "awardsDescription": {
                      "awardsDescription": "Zilveren medaille op de [World Beer Awards 2014](http://www.worldbeerawards.com/charles-quint-golden-blond.23143.html) in de categorie 'Europe - Pale Beer - Belgian Style Strong'."
                    },
                    "link": null,
                    "awardImage": null
                  },
                  {
                    "title": "Superior Taste Awards",
                    "subTitle": null,
                    "awardsDescription": {
                      "awardsDescription": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) 2014 en 2011"
                    },
                    "link": null,
                    "awardImage": null
                  }
                ],
                "description": {
                  "description": "## Voor levensgenieters met levenservaring.\n\n__Heldergoud bier met een uitzonderlijk boeket van kruiden, een zachte aanzet die uitvloeit in een mollige, kruidige smaak en een licht bittere, droge afdronk.__\n\nIndien je dit lekker vindt, proef dan zeker ook onze:\n[Ommegang](https://www.haacht.com/benl/merken/bieren/ommegang-keizer-karel), [Tongerlo PRIOR](https://www.haacht.com/benl/merken/bieren/tongerlo-prior), [Tongerlo LUX](https://www.haacht.com/benl/merken/bieren/tongerlo-lux)"
                },
                "title": "Goud Blond",
                "zijnSmaak": {
                  "zijnSmaak": "Heldergoud bier met een uitzonderlijk boeket van kruiden, een zachte aanzet die uitvloeit in een mollige, kruidige smaak en een licht bittere, droge afdronk."
                },
                "lekkerBij": {
                  "lekkerBij": "- Visgerechten met een frisse smaak zoals kabeljauw of zeetong met een smeuïge Hollandse saus\n- Rode vleesgerechten zoals rosbief\n- Smeuïge groentegerechten zoals bijv. een spinaziepuree of jonge erwtjes\n- Mothais sur feuille, een kaas van rauwe geitenmelk uit de Loirestreek"
                },
                "nutritioneleWaarden": null,
                "serveertips": {
                  "serveertips": "__Ideale schenktemperatuur: 7°C__\n \nDe Keizer Karel bieren laten zich het best smaken in de authentieke aarden pot met 3 oren of in het speciaal ontworpen kelkglas."
                },
                "history": {
                  "history": "Keizer Karel (1500-1558) werd geboren in Gent en bracht een groot deel van zijn jeugd door in België.\n \nHij wordt gezien als één van de grootste keizers ooit. Zijn Rijk was uiteindelijk zo groot dat men zei ‘dat de zon er nooit onderging’. Vaak wordt Keizer Karel ook beschouwd als de voorloper van Europa.\n \nHij was niet alleen een groots figuur, maar ook een fervent bierliefhebber. Ter ere hiervan creëerde Brouwerij Haacht deze keizerlijke bieren.\n\n__Keizer Karel-bieren: voor levensgenieters met levenservaring.__"
                },
                "verpakking": {
                  "verpakking": "- Krat 24 x 33 cl\n- O-pack 4 x 33 cl\n- Krat 12 x 75 cl\n\nKeizer Karel Travel Box:\n- 6 x 33 cl (2 x Keizer Karel Goud Blond, 2 x Keizer Karel Robijn Rood en 2 x Ommegang Keizer Karel)\n- 2 glazen 20 cl of 1 pot Keizer Karel met 3 oren\n\n- Vat 1 x 20 l"
                },
                "virtualVideoTitle": null,
                "videoRitual": {
                  "file": {
                    "url": "//videos.ctfassets.net/vlb1ben6vtp9/638wkGuyQMSg8W488Mi0M8/0fa04dc6d54823f5a1d73296c71aa0e5/CHARLES_QUINT_GOLDEN_BLOND_KEG_ART_OF_SERVING_HAACHT_BREWERY.mp4"
                  }
                },
                "ritualVideoTextButton": null,
                "afkorting": {
                  "slug": "keizer-karel-goud-blond"
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
                "slugFinal": "nl-be/merken"
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
                "slugFinal": "fr-be/marques"
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
                "slugFinal": "en/brands"
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
                "slugFinal": "fr/marques"
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
                "slugFinal": "nl/merken"
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
        "id": "c3ddKFoTCHKI6cgIiW8e6YA",
        "navId": "c1DzxdxolMIwGMs2wMucG8W"
      }
    },
    "page": {
      "componentChunkName": "component---src-templates-brand-single-js",
      "layout": "layout---index",
      "layoutComponentChunkName": "component---src-layouts-index-js",
      "jsonName": "nl-be-merken-bieren-keizer-karel-goud-blond.json",
      "path": "/nl-BE/merken/bieren/keizer-karel-goud-blond"
    }
  },
  "data": {
    "slug_nl_be": {
      "id": "c3ZgBshM4WcSEQe6usAcm88",
      "brandCategories": [
        {
          "slug": "merken"
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
    "allFamilies": {
      "edges": [
        {
          "node": {
            "title": "Coq Hardi",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Richard dit Lecastor",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Leeuw",
            "familyDescription": {
              "familyDescription": "..."
            }
          }
        },
        {
          "node": {
            "title": "Super 8",
            "familyDescription": {
              "familyDescription": "..."
            }
          }
        },
        {
          "node": {
            "title": "Mystic",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Tongerlo",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Keizer Karel",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Wereldwijnen",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Elzas",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "kasteelwijnen (Bordeaux)",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Beaujolais",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Bourgogne",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Bordeaux",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Pepsi",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "VAL",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Languedoc",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Loire",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Provence",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Europese wijnen",
            "familyDescription": null
          }
        },
        {
          "node": {
            "title": "Rhônevallei",
            "familyDescription": null
          }
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
    "slug_en": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___en",
      "brandCategories": [
        {
          "slug": "brands"
        }
      ]
    },
    "slug_nl": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___nl",
      "brandCategories": [
        {
          "slug": "merken"
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
    "slug_fr": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___fr",
      "brandCategories": [
        {
          "slug": "marques"
        }
      ]
    },
    "slug_fr_be": {
      "id": "c3ZgBshM4WcSEQe6usAcm88___fr-BE",
      "brandCategories": [
        {
          "slug": "marques"
        }
      ]
    },
    "singleBrandPageData": {
      "tabs": [
        {
          "id": "c4PjNAuDdOMmuu8U8QaaWyM",
          "title": "Beschrijving",
          "key": "description"
        },
        {
          "id": "c5HSnlkLmpyCOuCA8s6KiqY",
          "title": "Zijn smaak",
          "key": "zijn smaak"
        },
        {
          "id": "c1gBDDGiKgEuq02IsCeqAY6",
          "title": "serveertips",
          "key": "serveertips"
        },
        {
          "id": "c58UjLtCynmqa6cSmWssguo",
          "title": "Geschiedenis",
          "key": "history"
        },
        {
          "id": "c4lEHIhUulai0Uu2yCYG0Km",
          "title": "Verpakking",
          "key": "verpakking"
        },
        {
          "id": "q8Ck4sQuFUu2Yk6ggqYsO",
          "title": "Lekker bij",
          "key": "lekker bij"
        },
        {
          "id": "c4clrGi0tDiMMqy8qE4uuiE",
          "title": "Nutritionele waarden",
          "key": "nutritionele waarden"
        }
      ],
      "alcoholVolumeTitle": "Alcohol Volume",
      "sellpointsTitle": "Bekijk Verkooppunten",
      "searchPostcode": "Vul uw postcode in",
      "searchButton": "Zoek",
      "searchButtonSlug": "verkooppunten",
      "familyTitle": "De Familie",
      "familySubTitle": "Bekijk ook",
      "serveritualText": "Schenkingsritueel",
      "packshotsLink": {
        "title": "PACKSHOTS & LOGO'S",
        "linkSlug": "logo-packshots"
      }
    },
    "allBrandsData": {
      "edges": [
        {
          "node": {
            "category": {
              "title": "Bieren",
              "slug": "bieren",
              "index": 1
            },
            "packshotHeader": {
              "file": {
                "url": "//images.ctfassets.net/vlb1ben6vtp9/3Intfo2awE6qKuC4W0AOIK/7038e6181994ef87546d0d233aff75c3/Keizer_Kreal_Goud_fles_glas_800x1530_mini.png"
              }
            },
            "family": {
              "title": "Keizer Karel"
            },
            "slug": "keizer-karel-goud-blond",
            "externalUrl": "https://www.charlesquint.be/",
            "logo": null,
            "shortDescription": "Heldergoud bier met een uitzonderlijk boeket van kruiden.",
            "alcoholpercentage": 8.5,
            "beersInFamily": [
              {
                "title": "Robijn Rood",
                "slug": "keizer-karel-robijn-rood",
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/6ym78zuTwAco4qO0yQQW8O/2677bd3e1e53dc05751f49d02ccfe01d/Keizer_Karel_Robijn_Fles_33cl_400x1530.png"
                  }
                },
                "family": {
                  "title": "Keizer Karel"
                }
              },
              {
                "title": "Ommegang",
                "slug": "ommegang-keizer-karel",
                "packshot": {
                  "file": {
                    "url": "//images.ctfassets.net/vlb1ben6vtp9/1c96994MRCoIEMMO08ekwe/3bb8b545b98464147c12efc9f483db58/Keizer_Karel_Omegang_Fles_33cl_400x1530_mini.png"
                  }
                },
                "family": {
                  "title": "Keizer Karel"
                }
              }
            ],
            "awards": [
              {
                "title": "Zilveren medaille op de World Beer Awards 2014",
                "subTitle": null,
                "awardsDescription": {
                  "awardsDescription": "Zilveren medaille op de [World Beer Awards 2014](http://www.worldbeerawards.com/charles-quint-golden-blond.23143.html) in de categorie 'Europe - Pale Beer - Belgian Style Strong'."
                },
                "link": null,
                "awardImage": null
              },
              {
                "title": "Superior Taste Awards",
                "subTitle": null,
                "awardsDescription": {
                  "awardsDescription": "3 sterren op de [Superior Taste Awards](http://www.itqi.com/) 2014 en 2011"
                },
                "link": null,
                "awardImage": null
              }
            ],
            "description": {
              "description": "## Voor levensgenieters met levenservaring.\n\n__Heldergoud bier met een uitzonderlijk boeket van kruiden, een zachte aanzet die uitvloeit in een mollige, kruidige smaak en een licht bittere, droge afdronk.__\n\nIndien je dit lekker vindt, proef dan zeker ook onze:\n[Ommegang](https://www.haacht.com/benl/merken/bieren/ommegang-keizer-karel), [Tongerlo PRIOR](https://www.haacht.com/benl/merken/bieren/tongerlo-prior), [Tongerlo LUX](https://www.haacht.com/benl/merken/bieren/tongerlo-lux)"
            },
            "title": "Goud Blond",
            "zijnSmaak": {
              "zijnSmaak": "Heldergoud bier met een uitzonderlijk boeket van kruiden, een zachte aanzet die uitvloeit in een mollige, kruidige smaak en een licht bittere, droge afdronk."
            },
            "lekkerBij": {
              "lekkerBij": "- Visgerechten met een frisse smaak zoals kabeljauw of zeetong met een smeuïge Hollandse saus\n- Rode vleesgerechten zoals rosbief\n- Smeuïge groentegerechten zoals bijv. een spinaziepuree of jonge erwtjes\n- Mothais sur feuille, een kaas van rauwe geitenmelk uit de Loirestreek"
            },
            "nutritioneleWaarden": null,
            "serveertips": {
              "serveertips": "__Ideale schenktemperatuur: 7°C__\n \nDe Keizer Karel bieren laten zich het best smaken in de authentieke aarden pot met 3 oren of in het speciaal ontworpen kelkglas."
            },
            "history": {
              "history": "Keizer Karel (1500-1558) werd geboren in Gent en bracht een groot deel van zijn jeugd door in België.\n \nHij wordt gezien als één van de grootste keizers ooit. Zijn Rijk was uiteindelijk zo groot dat men zei ‘dat de zon er nooit onderging’. Vaak wordt Keizer Karel ook beschouwd als de voorloper van Europa.\n \nHij was niet alleen een groots figuur, maar ook een fervent bierliefhebber. Ter ere hiervan creëerde Brouwerij Haacht deze keizerlijke bieren.\n\n__Keizer Karel-bieren: voor levensgenieters met levenservaring.__"
            },
            "verpakking": {
              "verpakking": "- Krat 24 x 33 cl\n- O-pack 4 x 33 cl\n- Krat 12 x 75 cl\n\nKeizer Karel Travel Box:\n- 6 x 33 cl (2 x Keizer Karel Goud Blond, 2 x Keizer Karel Robijn Rood en 2 x Ommegang Keizer Karel)\n- 2 glazen 20 cl of 1 pot Keizer Karel met 3 oren\n\n- Vat 1 x 20 l"
            },
            "virtualVideoTitle": null,
            "videoRitual": {
              "file": {
                "url": "//videos.ctfassets.net/vlb1ben6vtp9/638wkGuyQMSg8W488Mi0M8/0fa04dc6d54823f5a1d73296c71aa0e5/CHARLES_QUINT_GOLDEN_BLOND_KEG_ART_OF_SERVING_HAACHT_BREWERY.mp4"
              }
            },
            "ritualVideoTextButton": null,
            "afkorting": {
              "slug": "keizer-karel-goud-blond"
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
            "slugFinal": "nl-be/merken"
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
            "slugFinal": "fr-be/marques"
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
            "slugFinal": "en/brands"
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
            "slugFinal": "fr/marques"
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
            "slugFinal": "nl/merken"
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
    "id": "c3ddKFoTCHKI6cgIiW8e6YA",
    "navId": "c1DzxdxolMIwGMs2wMucG8W"
  }
}

var contentful = require('contentful')

var client = contentful.createClient({
  space: '4x9ynmufi2c6',
  accessToken: '00776a927469f43f7646dedff5221ba86305d737741b46084ac5072e4c26acdc'
})
//MHQ0SGIhmCYo6q2gGY2Yg
class BrandTemplate extends Component {
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
      <SingleBrandContent
        slug_nl={data.data.slug_nl.brandCategories[0].slug}
        slug_nl_be={data.data.slug_nl_be.brandCategories[0].slug}
        slug_en={data.data.slug_en.brandCategories[0].slug}
        slug_fr={data.data.slug_fr.brandCategories[0].slug}
        slug_fr_be={data.data.slug_fr_be.brandCategories[0].slug}
        navigation={navigation.navigation}
        locale={data.pathContext.locale}
        cfNavigation={data.data.nav}
        cookiesPopup={data.data.cookiesPopUp}
        agePopup={data.data.agePopup}
        brand={this.props.obj.edges[0]}
        singleBrandPageData={data.data.singleBrandPageData}
        sellingPointIntro={data.data.sellingPointIntro}
        footerMenu={data.data.footerMenu}
        location={data.location}
        allFamilies={data.data.allFamilies}
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

export default BrandTemplate;
