type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://testa-lukukirjat.sls.fi",
    projectNameDB: "lukukirjat",
    projectId: 1,
    backendBaseURL: "https://testa-lukukirjat-api.sls.fi/digitaledition",
    alternateFacsimileBaseURL: "",
    i18n: {
      languages: [
        { code: "fi", label: "Suomi", region: "FI" }
      ],
      defaultLanguage: "fi",
      multilingualCollectionTableOfContents: false,
      multilingualReadingTextLanguages: [],
      multilingualNamedEntityData: false
    },
    enableRouterLoadingBar: true,
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "Svartvit teckning av ett bergigt älvlandskap, i förgrunden mörka granar, i bakgrunden en by och en kyrka vid vattnet mellan bergen.",
          URL: "assets/images/open-graph/topelius-lukukirjat-open-graph-banner-1750x915.jpg"
        },
        fi: {
          altText: "Mustavalkoinen piirros vuoristoisesta jokimaisemasta, etualalla tummia kuusia, taustalla kylä ja kirkko veden äärellä vuorten välissä.",
          URL: "assets/images/open-graph/topelius-lukukirjat-open-graph-banner-1750x915.jpg"
        }
      }
    },
    prebuild: {
      sitemap: false,
      staticCollectionMenus: false
    },
    ssr: {
      collectionSideMenu: false
    }
  },
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: false,
    enableMathJax: false,
    firstTextItem: {},
    frontMatterPages: {
      cover: false,
      title: true,
      foreword: true,
      introduction: true
    },
    frontMatterPageDisabled: {
      cover: [],
      title: [],
      foreword: [],
      introduction: []
    },
    highlightSearchMatches: true,
    inlineIllustrations: [1, 2],
    mediaCollectionMappings: {},
    order: [
      [1, 2]
    ]
  },
  ebooks: [],
  page: {
    about: {
      initialPageNode: "01-01"
    },
    elasticSearch: {
      enableFilters: true,
      enableSortOptions: false,
      filterGroupsOpenByDefault: ["Type", "Collection"],
      hitsPerPage: 15,
      indices: ["lukukirjat"],
      openReadingTextWithComments: false,
      textHighlightFragmentSize: 150,
      textHighlightType: "fvh",
      textTitleHighlightType: "fvh",
      typeFilterGroupOptions: ["est", "com", "var", "inl", "tit", "fore"],
      fixedFilters: [
        {
          terms: {
            deleted: ["0"]
          }
        },
        {
          terms: {
            published: ["1", "2"]
          }
        }
      ],
      additionalSourceFields: [],
      aggregations: {
        Type: {
          terms: {
            field: "text_type",
            size: 40,
            order: {_key: "asc"}
          }
        },
        Collection: {
          terms: {
            field: "publication_data.collection_name.keyword",
            size: 40,
            order: {_key: "asc"}
          }
        }
      }
    },
    foreword: {
      showURNButton: true,
      showViewOptionsButton: true
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Svartvit teckning av ett bergigt älvlandskap, i förgrunden mörka granar, i bakgrunden en by och en kyrka vid vattnet mellan bergen.",
          fi: "Mustavalkoinen piirros vuoristoisesta jokimaisemasta, etualalla tummia kuusia, taustalla kylä ja kirkko veden äärellä vuorten välissä."
        },
        intrinsicSize: {
          height: 1024,
          width: 1536
        },
        orientationPortrait: false,
        alternateSources: [],
        URL: "assets/images/lukukirjat-banner-1536x1024.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "10%"
        },
        siteTitleOnImageOnSmallScreens: false
      },
      showContentGrid: false,
      showFooter: true,
      showSearchbar: false
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      persons: {
        database: "elastic",
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      places: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      works: {
        publishedStatus: 2
      }
    },
    introduction: {
      hasSeparateTOC: true,
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        personInfo: false,
        placeInfo: false,
        workInfo: false,
        paragraphNumbering: true,
        pageBreakEdition: false
      }
    },
    mediaCollection: {
      showURNButton: true
    },
    text: {
      defaultViews: ["readingtext"],
      defaultViewOptions: ["comments"],
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        comments: true,
        personInfo: false,
        placeInfo: false,
        emendations: true,
        normalisations: false,
        workInfo: false,
        abbreviations: false,
        paragraphNumbering: true,
        pageBreakOriginal: true,
        pageBreakEdition: false
      },
      variantViewOptions: {
        showVariationTypeOption: true,
        defaultVariationType: "all"
      },
      viewTypes: {
        showAll: true,
        readingtext: true,
        comments: true,
        facsimiles: true,
        manuscripts: false,
        variants: true,
        illustrations: true,
        legend: true,
        metadata: false
      },
      viewTypeDisabledCollections: {
        readingtext: [],
        comments: [],
        facsimiles: [],
        manuscripts: [],
        variants: [],
        illustrations: [],
        legend: [],
        metadata: []
      }
    },
    title: {
      loadContentFromMarkdown: false,
      showURNButton: true,
      showViewOptionsButton: true
    }
  },
  component: {
    collectionSideMenu: {
      sortableCollectionsAlphabetical: [],
      sortableCollectionsChronological: [],
      sortableCollectionsCategorical: [],
      categoricalSortingPrimaryKey: "",
      categoricalSortingSecondaryKey: ""
    },
    contentGrid: {
      includeEbooks: false,
      includeMediaCollection: false,
      mediaCollectionCoverURL: "",
      mediaCollectionCoverAltTexts: {
        sv: "Alt-text",
        fi: "Alt-teksti"
      },
      showTitles: true
    },
    epub: {
      showTOCButton: true,
      showURNButton: true,
      showViewOptionsButton: true
    },
    facsimiles: {
      imageQuality: 4,
      showTitle: true
    },
    mainSideMenu: {
      items: {
        home: false,
        about: true,
        ebooks: false,
        collections: true,
        mediaCollections: false,
        indexKeywords: false,
        indexPersons: false,
        indexPlaces: false,
        indexWorks: false
      },
      defaultExpanded: true
    },
    manuscripts: {
      showTitle: true,
      showNormalizedToggle: true,
      showOpenLegendButton: true
    },
    topMenu: {
      showAboutButton: false,
      showContentButton: false,
      showElasticSearchButton: true,
      showURNButton: false,
      showLanguageButton: false,
      showSiteLogo: false,
      siteLogoDefaultImageURL: "assets/images/logo/SLS_logo_full_white_346x112.png",
      siteLogoMobileImageURL: "assets/images/logo/SLS_logo_symbol_white_112x112.png",
      siteLogoLinkURL: "https://www.sls.fi/",
      siteLogoDimensions: {
        default: {
          height: 56,
          width: 173
        },
        mobile: {
          height: 56,
          width: 56
        }
      }
    },
    variants: {
      showOpenLegendButton: true
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      readingTextFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      commentsFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      manuscriptsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      }
    },
    fullscreenImageViewer: {
      imageQuality: 4
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    },
    namedEntity: {
      showAliasAndPrevLastName: false,
      showArticleData: false,
      showCityRegionCountry: false,
      showDescriptionLabel: false,
      showGalleryOccurrences: false,
      showMediaData: false,
      showOccupation: false,
      showOccurrences: true,
      showType: false,
      useSimpleWorkMetadata: true
    }
  }
}
