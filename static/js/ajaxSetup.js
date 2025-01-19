if (window.jQuery && window.jQuery.ajaxSetup) {
    window.jQuery.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (settings && settings.url && (
                settings.url.includes('/integrations/airtable/')
                || settings.url.includes('/v1/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051')
                || settings.url.includes('/v1/comments')
                || settings.url.includes('/forms/form-to-email'))
            ) {
                xhr.setRequestHeader('softr-page-id', '7309ada2-41e5-485d-ac2e-14a4968549ae');
            }
        }
    });
}

window['header1'] = {};
const block_a696084b8a7f417fbeeabef965bdb464_defJson = {
	"id": "a696084b-8a7f-417f-beea-bef965bdb464",
	"version": "1.0.0",
	"hrid": "header1",
	"name": "header1",
	"title": "Header with sublinks and button",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/header1.png",
	"category": "Header",
	"keywords": "header, simple",
	"elements": {
		"definitions": {
			"link": {
				"tag": "a",
				"type": "link",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-m", "sw-text-color-000000"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"isPrimary": true,
					"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
				}],
				"value": "Link name",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "",
							"target": ""
						}
					}
				}
			},
			"compositeLink": {
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Link name",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				},
				"subLinks": {
					"type": "array",
					"item_type": "#/elements/definitions/link",
					"items": []
				}
			},
			"button": {
				"tag": "a",
				"type": "button",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-m", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-default"]
				}, {
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-default"]
				}, {
					"name": "padding-left-right",
					"label": "Padding left/right",
					"isPrimary": true,
					"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-5xs", "sw-padding-bottom-5xs"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"isPrimary": true,
					"classes": ["sw-display-inline-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-display-inline-block", "m:sw-margin-left-6xs"]
				}],
				"label": "Button label",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "",
							"target": ""
						}
					}
				}
			}
		},
		"sticky": true,
		"container": {
			"tag": "nav",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-000000"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-6xs"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-5xs"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-16a1c0"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-ffffff"]
			}]
		},
		"logo": {
			"tag": "img",
			"type": "image-with-link",
			"primaryStyles": [{
				"name": "width",
				"label": "Width",
				"isPrimary": true,
				"classes": ["sw-width-6xs"]
			}],
			"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png",
			"alt": "Publish your designed things."
		},
		"links": {
			"type": "array",
			"item_type": "#/elements/definitions/compositeLink",
			"items": [{
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-didact_gothic"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Homes",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/",
								"target": ""
							}
						}
					}
				},
				"subLinks": {
					"type": "array",
					"item_type": "#/elements/definitions/link",
					"items": []
				}
			}, {
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-didact_gothic"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Descubre",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/newsletter",
								"target": ""
							}
						}
					}
				},
				"subLinks": {
					"type": "array",
					"item_type": "#/elements/definitions/link",
					"items": []
				}
			}, {
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-didact_gothic"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Comunidades",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/comunidad",
								"target": ""
							}
						}
					}
				},
				"subLinks": {
					"type": "array",
					"item_type": "#/elements/definitions/link",
					"items": []
				}
			}, {
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-didact_gothic"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Directorio",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				},
				"subLinks": {
					"type": "array",
					"item_type": "#/elements/definitions/link",
					"items": []
				}
			}, {
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-didact_gothic"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Empleos",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": "_blank"
							}
						}
					}
				},
				"subLinks": {
					"type": "array",
					"item_type": "#/elements/definitions/link",
					"items": [{
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Ingrese empleo",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/add-jobs",
									"target": ""
								}
							}
						}
					}, {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Encuentra empleo",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/bolsatrabajo",
									"target": ""
								}
							}
						}
					}]
				}
			}, {
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-didact_gothic"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Herramientas",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/herramientas-log-sticas",
								"target": ""
							}
						}
					}
				},
				"subLinks": {
					"type": "array",
					"item_type": "#/elements/definitions/link",
					"items": []
				}
			}, {
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-didact_gothic"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Login",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/login",
								"target": ""
							}
						}
					}
				},
				"subLinks": {
					"type": "array",
					"item_type": "#/elements/definitions/link",
					"items": []
				}
			}]
		},
		"buttons": {
			"type": "array",
			"item_type": "#/elements/definitions/button",
			"items": []
		}
	},
	"type": null,
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": null,
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<nav id=\"header1\" class=\"header1-fixed-top navbar nav navbar-expand-lg navbar-light header1-a696084b-8a7f-417f-beea-bef965bdb464 sw-background-color-000000 sw-padding-top-6xs sw-padding-bottom-5xs sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-16a1c0 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-ffffff\"><div class=\"container\"><!-- Logo --><a class=\"navbar-brand\" href=\"/\"><img class=\"sw-width-6xs \" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png\" alt=\"Publish your designed things.\"></a><div class=\"desktop-menu text-center justify-content-end\"><ul class=\"navbar-nav  align-items-center flex-row  empty-buttons \"><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/\"   target=\"\"   >Homes</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-0\"></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/newsletter\"   target=\"\"   >DescubreX</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-1\"></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/comunidad\"   target=\"\"   >Comunidades</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-2\"></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/directorio\"   target=\"\"   >Directorio</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-3\"></div></li><li class=\"nav-item dropdown\"><a class=\"position-relative dropdown-toggle sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"\"   target=\"_blank\"    id=\"navbarDropdown-4\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >Empleos</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-4\"><a target=\"\"   class=\"sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent dropdown-item navigate\"   href=\"/add-jobs\">Ingrese empleo</a><a target=\"\"   class=\"sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent dropdown-item navigate\"   href=\"/bolsatrabajo\">Encuentra empleo</a></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/herramientas-log-sticas\"   target=\"\"   >Herramientas</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-5\"></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/login\"   target=\"\"   >Login</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-6\"></div></li></ul></div><!-- mobile toggle --><div class=\"toggle-button\"><span class=\"navbar-toggler-icon\"></span></div><div class=\"mob-menu-content\"><div class=\"mob-menu-header\"><a class=\"navbar-brand\" href=\"/\"><img class=\"sw-width-6xs \" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png\" alt=\"Publish your designed things.\"></a><span class=\"navbar-close\"> <i class=\"fa fa-fw fa-times\" aria-hidden=\"true\"></i></span></div><div class=\"mob-menu-body\"><div class=\"navigation-section\"><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/\">Homes</a><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/newsletter\">DescubreX2</a><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/comunidad\">Comunidades</a><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/directorio\">Directorio</a><a class=\"position-relative link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   data-toggle=\"collapse\" href=\"#collapseExample-4\" role=\"button\"   aria-expanded=\"false\"   aria-controls=\"collapseExample-4\">Empleos<span class=\"arrow\"></span></a><div class=\"collapse\" id=\"collapseExample-4\"><a target=\"\"   class=\"sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent dropdown-item navigate\"   href=\"/add-jobs\">Ingrese empleo</a><a target=\"\"   class=\"sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent dropdown-item navigate\"   href=\"/bolsatrabajo\">Encuentra empleo</a></div><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/herramientas-log-sticas\">Herramientas</a><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/login\">Login</a></div><div class=\"buttons-section\"></div></div></div></div></nav>",
	"compiled_style": ".sw-font-size-m { font-size: 1rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-display-block { display: block!important; } .sw-padding-top-6xs { padding-top: 0.5rem!important; } .sw-padding-bottom-6xs { padding-bottom: 0.5rem!important; } .sw-padding-left-6xs { padding-left: 0.5rem!important; } .sw-padding-right-xs { padding-right: 2rem!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } .active\\:sw-background-color-transparent:active { background-color: transparent!important; } .sw-text-color-default {  } .sw-border-radius-default {  } .sw-background-color-default {  } .sw-padding-left-2xs { padding-left: 1.5rem!important; } .sw-padding-right-2xs { padding-right: 1.5rem!important; } .sw-padding-top-5xs { padding-top: 0.75rem!important; } .sw-padding-bottom-5xs { padding-bottom: 0.75rem!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-display-inline-block { display: inline-block!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-box-shadow-m:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important; } } @media (min-width: 768px) { .m\\:sw-margin-left-6xs { margin-left: 0.5rem!important; } } .sw-background-color-000000 { background-color: #000000!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-16a1c0 { border-top-color: #16a1c0!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-ffffff { border-bottom-color: #ffffff!important; } .sw-width-6xs { width: 7rem!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-ffffff { color: #ffffff!important; } .sw-font-family-didact_gothic { font-family: \"Didact Gothic\"!important; } .sw-font-weight-normal { font-weight: 400!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; }  .header1-fixed-top {  position: fixed;  top: 0;  right: 0;  left: 0;  z-index: 1030;  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1); }  #header1 .navbar-nav .dropdown-menu {  border: 0;  box-shadow: 0 1px 3px #00000014, 0 10px 40px -10px #00000059;  min-width: 180px; }  #header1 .navbar-nav .dropdown-menu a {  padding-left: 1.5rem !important; }  #header1 .toggle-button{  display: none; }  #header1 .mob-menu-header{  padding: 8px 24px;  display: flex;  justify-content: space-between; }  #header1 .mob-menu-body{  height: 90%;  position: relative; }  #header1 .navigation-section{  padding: 10px 24px; }  #header1 .navigation-section p a{  width: 100%; }  #header1 .buttons-section{      margin: 24px;      display: flex;      justify-content: flex-start; }  #header1 .arrow {  position: absolute;  right: 15px;  top: 5px;  display: inline-block;  width: 8px;  height: 8px;  border-left: 2px solid #29394c;  border-top: 2px solid #29394c;  transform: rotate(225deg);  transition: .2s linear;  margin-top: 10px; }  #header1 .link{  background: #f5f5f5;  padding: 3px 10px; }  #header1 .collapsed.link{  background: none; }  #header1 .collapsed .arrow {  transform: rotate(135deg); }  #header1 .buttons-section button{  margin-left: 0!important; }  #header1 .navbar-close i{  font-size: 24px;  margin-top: 10px;  margin-right: 3px;  cursor: pointer; }  #header1 .mob-menu-content{  display: none; } @media (max-width: 992px) {  #header1 .desktop-menu{   display: none;  }   #header1 .toggle-button{   display: block;  }   #header1 .mob-menu-content{   display: block;   position: fixed;   z-index: 5;   width: 100%;   height: 100%;   opacity: 0;   top:0;   left: 0;   background: #fff;   -webkit-transition: ease-in all 0.5s;   transition: ease-in all 0.5s;   -webkit-transform: translateX(200%);   -ms-transform: translateX(200%);   transform: translateX(200%);   }    #header1 .mob-menu-content.show{   display: block;   opacity: 1;   /*left: 0;*/   -webkit-transition: ease-in all 0.5s;   transition: ease-in all 0.5s;   -webkit-transform: translateX(0);   -ms-transform: translateX(0);   transform: translateX(0);   }   #header1 a.dropdown-item {   padding-left: 1.5rem !important;  } } @media (max-width: 414px) {  #header1 .buttons-section {       margin-left: 24px;       margin-right: 0;      } #header1 .buttons-section a {      margin-right: 10px;     } }  .navbar-dark .navbar-toggler-icon {  cursor: pointer;  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='https://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 1.0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\") !important; }  .navbar-light .navbar-toggler-icon {  cursor: pointer;  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='https://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 1.0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\") !important; }",
	"compiled_script": ";(function () {   $('.navbar-toggler-icon').click(function () {  $('.mob-menu-content').toggleClass('show');   });   $('.navbar-close').click(function () {  $('.mob-menu-content').toggleClass('show');   });   oneButtonView($(window));   $(window).on('resize', function () {  var win = $(this);  oneButtonView(win)   });    /* close the mobile menu */   $('.mob-menu-body a').click(function () {    if($(this).attr('aria-controls')) {     return;    }  $('.mob-menu-content').toggleClass('show');   });    var bgColor = window.getComputedStyle(document.querySelector('nav#header1'), null).getPropertyValue('background-color');   if (lightOrDark(bgColor) === 'dark') {  $('nav#header1').removeClass('navbar-light');  $('nav#header1').addClass('navbar-dark');   $('#header1 .navbar-close i').css('color', '#ffffff');   $('#header1 .arrow').css('border-left', '2px solid #ffffff');  $('#header1 .arrow').css('border-top', '2px solid #ffffff');   }    $('#header1 a.dropdown-item').hover(function () {  $(this).css('background-color', bgColor);   });    $('#header1 .navbar-nav .dropdown-menu').css('background-color', bgColor);   $('#header1 .mob-menu-content').css('background-color', bgColor);   $('#header1 .link').css('background-color', bgColor);     function lightOrDark(color) {   /* Variables for red, green, blue values */  var r, g, b, hsp;   /* Check the format of the color, HEX or RGB? */  if (color.match(/^rgb/)) {     /* If HEX --> store the red, green, blue values in separate variables */    color = color.match(/^rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*(\\d+(?:\\.\\d+)?))?\\)$/);     r = color[1];    g = color[2];    b = color[3];  }  else {     /* If RGB --> Convert it to HEX: https://gist.github.com/983661 */    color = +(\"0x\" + color.slice(1).replace(   color.length < 5 && /./g, '$&$&'));     r = color >> 16;    g = color >> 8 & 255;    b = color & 255;  }   /* HSP (Highly Sensitive Poo) equation from https://alienryderflex.com/hsp.html */  hsp = Math.sqrt(    0.299 * (r * r) +    0.587 * (g * g) +    0.114 * (b * b)  );   /* Using the HSP value, determine whether the color is light or dark */  if (hsp > 127.5) {     return 'light';  }  else {     return 'dark';  }   }    function oneButtonView(win) {  if (win.width() <= 414) {    if ($('.navbar-nav').hasClass('empty-links') && $('.navbar-nav').hasClass('one-button')) {   $('.desktop-menu').hide();   $('.toggle-button').show();    }  }  if (win.width() <= 992 && win.width() > 414) {    if ($('.navbar-nav').hasClass('empty-links') && $('.navbar-nav').hasClass('one-button')) {   $('.desktop-menu').show();   $('.toggle-button').hide();    }  }  if (win.width() <= 992) {    if ($('.navbar-nav').hasClass('empty-links') && $('.navbar-nav').hasClass('empty-buttons')) {   $('.desktop-menu').show();   $('.toggle-button').hide();    }  }   }  })();  "
};
window['hero1'] = {};
const block_e8a493e43dd54f84af43157c9018f122_defJson = {
	"id": "e8a493e4-3dd5-4f84-af43-157c9018f122",
	"version": "1.0.0",
	"hrid": "hero1",
	"name": "hero1",
	"title": "Hero with call to action",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/hero1.png",
	"category": "Hero",
	"keywords": "hero, simple",
	"elements": {
		"imagePosition": ["LEFT", "RIGHT", "TOP", "BOTTOM"],
		"selectedImagePosition": "BOTTOM",
		"definitions": {
			"button": {
				"tag": "a",
				"type": "button",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-m", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-full"]
				}, {
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-default"]
				}, {
					"name": "padding-left-right",
					"label": "Padding left/right",
					"isPrimary": true,
					"classes": ["sw-padding-left-s", "sw-padding-right-s"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-5xs", "sw-padding-bottom-5xs"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"isPrimary": true,
					"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-margin-right-5xs", "sw-display-inline-block"]
				}],
				"label": "Button label",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "",
							"target": ""
						}
					}
				}
			}
		},
		"container": {
			"tag": "header",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-ffffff"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-6xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xs"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-m", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"header": {
			"tag": "h1",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-5xl", "sw-text-color-ffffff"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-didact_gothic"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-normal"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-wider"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-compact"]
			}],
			"value": "Facilitamos la Digitalización del comercio para automatizar y crecer"
		},
		"text": {
			"tag": "p",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-3xl", "sw-text-color-ffffff"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-didact_gothic"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-normal"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-4xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-wide"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-tight"]
			}],
			"value": "MercadoLogistico  ayuda a  empresas de todos los tamaños a digitalizar procesos, automatizar la facturación y escalar sin límites."
		},
		"buttons": {
			"type": "array",
			"item_type": "#/elements/definitions/button",
			"items": [{
				"tag": "a",
				"type": "button",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-didact_gothic"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-2xl"]
				}, {
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ff8600"]
				}, {
					"name": "padding-left-right",
					"label": "Padding left/right",
					"isPrimary": true,
					"classes": ["sw-padding-left-s", "sw-padding-right-s"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-4xs", "sw-padding-bottom-4xs"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-none", "sw-border-color-000000"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-widest"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"isPrimary": true,
					"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-margin-right-5xs", "sw-display-inline-block"]
				}],
				"label": "Suscríbete al Newsletter",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "https://form.jotform.com/220487170598666",
							"target": ""
						}
					},
					"action": "Open external url > https://form.jotform.com/220487170598666"
				}
			}]
		},
		"image": {
			"tag": "img",
			"primaryStyles": [{
				"name": "percentage-width",
				"label": "Size",
				"isPrimary": true,
				"classes": ["sw-percentage-width-full"]
			}, {
				"name": "border",
				"label": "Border",
				"isPrimary": true,
				"classes": ["sw-border-style-none", "sw-border-width-xl", "sw-border-color-000000"]
			}, {
				"name": "border-radius",
				"label": "Roundness",
				"isPrimary": true,
				"classes": ["sw-border-radius-2xl"]
			}],
			"otherStyles": [],
			"src": "",
			"alt": "Image alt"
		},
		"backgroundImage": {
			"tag": "img",
			"primaryStyles": [{
				"name": "background-repeat",
				"label": "Repeat",
				"isPrimary": true,
				"classes": ["sw-background-repeat-no-repeat"]
			}, {
				"name": "background-size",
				"label": "Size",
				"isPrimary": true,
				"classes": ["sw-background-size-cover"]
			}, {
				"name": "background-position",
				"label": "Position",
				"isPrimary": true,
				"classes": ["sw-background-position-center"]
			}, {
				"name": "background-attachment",
				"label": "Behaviour",
				"isPrimary": true,
				"classes": ["sw-background-attachment-local"]
			}],
			"otherStyles": [],
			"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/d3376b32-45a5-448d-96db-8b7b607448bf.png"
		}
	},
	"type": null,
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": null,
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<header id=\"hero1\" style=\"background-image: url(https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/d3376b32-45a5-448d-96db-8b7b607448bf.png);\"class=\"hero1-e8a493e4-3dd5-4f84-af43-157c9018f122 sw-background-color-ffffff sw-padding-top-6xl sw-padding-bottom-2xs sw-border-top-style-none sw-border-top-width-m sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-local \"><div class=\"container\"><div class=\"row align-items-center text-center pb-5\"><div class=\"col-lg-2\"></div><div class=\"col-lg-8\"><h1 class=\"sw-font-size-5xl sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-padding-top-none sw-padding-bottom-2xs sw-letter-spacing-wider sw-line-height-compact \">Facilitamos la Digitalización del comercio para automatizar y crecer</h1><p class=\"sw-font-size-3xl sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-wide sw-line-height-tight \">MercadoLogistico  ayuda a  empresas de todos los tamaños a digitalizar procesos, automatizar la facturación y escalar sin límites.</p><div class=\"d-flex justify-content-center flex-wrap\"><a data-element=\"button\" target=\"\" class=\"sw-font-size-2xl sw-text-color-default sw-font-family-didact_gothic sw-font-weight-semibold sw-border-radius-2xl sw-background-color-ff8600 sw-padding-left-s sw-padding-right-s sw-padding-top-4xs sw-padding-bottom-4xs sw-border-style-none sw-border-width-none sw-border-color-000000 sw-letter-spacing-widest sw-text-decoration-no-underline hover:sw-text-decoration-no-underline hover:sw-box-shadow-m sw-margin-bottom-6xs sw-margin-right-5xs sw-display-inline-block\" href=\"https://form.jotform.com/220487170598666\">Suscríbete al Newsletter</a></div></div><div class=\"col-lg-2\"></div></div></div></header>",
	"compiled_style": ".sw-font-size-m { font-size: 1rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-border-radius-full { border-radius: 9999rem!important; } .sw-background-color-default {  } .sw-padding-left-s { padding-left: 2.5rem!important; } .sw-padding-right-s { padding-right: 2.5rem!important; } .sw-padding-top-5xs { padding-top: 0.75rem!important; } .sw-padding-bottom-5xs { padding-bottom: 0.75rem!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } @media (hover: hover) { .hover\\:sw-box-shadow-m:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important; } } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-margin-right-5xs { margin-right: 0.75rem!important; } .sw-display-inline-block { display: inline-block!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-6xl { padding-top: 14rem!important; } .sw-padding-bottom-2xs { padding-bottom: 1.5rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-m { border-top-width: 3px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-ffffff { color: #ffffff!important; } .sw-font-family-didact_gothic { font-family: \"Didact Gothic\"!important; } .sw-font-weight-normal { font-weight: 400!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-size-3xl { font-size: 1.875rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-letter-spacing-wide { letter-spacing: 0.025rem!important; } .sw-line-height-tight { line-height: 1.25!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-border-radius-2xl { border-radius: 1rem!important; } .sw-background-color-ff8600 { background-color: #ff8600!important; } .sw-padding-top-4xs { padding-top: 1rem!important; } .sw-border-width-none { border-width: 0px!important; } .sw-letter-spacing-widest { letter-spacing: 0.1rem!important; } .sw-percentage-width-full { width: 100%!important; } .sw-border-width-xl { border-width: 6px!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-local { background-attachment: local!important; }  ",
	"compiled_script": ""
};
window['feature-grid8'] = {};
const block_fa5d1fb96ffa47b4bcde3bf27b760bb3_defJson = {
	"id": "fa5d1fb9-6ffa-47b4-bcde-3bf27b760bb3",
	"version": "2.0.0",
	"hrid": "feature-grid8",
	"name": "feature-grid7",
	"title": "Feature grid with three column view",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature-grid7.png",
	"category": "Feature Grid",
	"keywords": "feature grid, simple",
	"elements": {
		"definitions": {
			"feature": {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-shield-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs"]
					}],
					"value": "Feature title"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Feature description"
				},
				"link": {
					"tag": "a",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-light"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-text-decoration-underline"]
					}],
					"value": "Read more...",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}
		},
		"container": {
			"tag": "section",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-ffffff"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-2xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xl"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"backgroundImage": {
			"tag": "img",
			"primaryStyles": [{
				"name": "background-repeat",
				"label": "Repeat",
				"isPrimary": true,
				"classes": ["sw-background-repeat-no-repeat"]
			}, {
				"name": "background-size",
				"label": "Size",
				"isPrimary": true,
				"classes": ["sw-background-size-cover"]
			}, {
				"name": "background-position",
				"label": "Position",
				"isPrimary": true,
				"classes": ["sw-background-position-center"]
			}, {
				"name": "background-attachment",
				"label": "Behaviour",
				"isPrimary": true,
				"classes": ["sw-background-attachment-scroll"]
			}],
			"otherStyles": [],
			"src": ""
		},
		"header": {
			"tag": "h2",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-4xl", "sw-text-color-default"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-4xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": ""
		},
		"text": {
			"tag": "p",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-xl", "sw-text-color-default"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-3xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": ""
		},
		"features": {
			"type": "array",
			"minItems": 0,
			"maxItems": 1024,
			"item_type": "#/elements/definitions/feature",
			"items": [{
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-7xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-clock fa-fw",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-3xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs"]
					}],
					"value": "Ahorre Tiempo"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Empiece a ahorrar tiempo y dinero desde el registro"
				},
				"link": {
					"tag": "a",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-light"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-text-decoration-underline"]
					}],
					"value": "",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					},
					"src": ""
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-map-marked-alt fa-fw",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-3xl", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs"]
					}],
					"value": "Ubique Asociados"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "La plataforma con mayor alance del mercado, potenciada por sus asociados"
				},
				"link": {
					"tag": "a",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-light"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-text-decoration-underline"]
					}],
					"value": "",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					},
					"src": ""
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-coins fa-fw",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-3xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs"]
					}],
					"value": "Mejore Ingresos"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Genere nuevos ingresos en el menor tiempo"
				},
				"link": {
					"tag": "a",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-light"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-text-decoration-underline"]
					}],
					"value": "",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					},
					"src": ""
				}
			}]
		}
	},
	"type": "static",
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": [],
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<section id=\"feature-grid8\"    data-block-version=\"2.0.0\" data-block-id=\"fa5d1fb9-6ffa-47b4-bcde-3bf27b760bb3\"    data-block-updated=\"\"  style=\"\"    class=\"feature-grid7-fa5d1fb9-6ffa-47b4-bcde-3bf27b760bb3 sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">    <!-- Header -->       <div class=\"row gap-y text-md-left text-center\">       <div class=\"col-md-4  pt-4 pb-4 d-flex flex-column justify-content-between\">     <div>            <p class=\"pt-5 pt-sm-0 sw-font-size-7xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-clock fa-fw\"></i>      </p>                  <h6 class=\"sw-font-size-3xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-5xs\">       Ahorre Tiempo      </h6>      <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">       Empiece a ahorrar tiempo y dinero desde el registro      </p>     </div>     <div>      <a target=\"\" href=\"\" class=\"sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-text-decoration-underline\">             </a>     </div>    </div>       <div class=\"col-md-4  pt-4 pb-4 d-flex flex-column justify-content-between\">     <div>            <p class=\"pt-5 pt-sm-0 sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-map-marked-alt fa-fw\"></i>      </p>                  <h6 class=\"sw-font-size-3xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-5xs\">       Ubique Asociados      </h6>      <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">       La plataforma con mayor alance del mercado, potenciada por sus asociados      </p>     </div>     <div>      <a target=\"\" href=\"\" class=\"sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-text-decoration-underline\">             </a>     </div>    </div>       <div class=\"col-md-4  pt-4 pb-4 d-flex flex-column justify-content-between\">     <div>            <p class=\"pt-5 pt-sm-0 sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-coins fa-fw\"></i>      </p>                  <h6 class=\"sw-font-size-3xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-5xs\">       Mejore Ingresos      </h6>      <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">       Genere nuevos ingresos en el menor tiempo      </p>     </div>     <div>      <a target=\"\" href=\"\" class=\"sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-text-decoration-underline\">             </a>     </div>    </div>      </div>   </div> </section> ",
	"compiled_style": ".sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-width-10xs { width: 3rem!important; } .sw-margin-bottom-2xs { margin-bottom: 1.5rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-margin-bottom-5xs { margin-bottom: 0.75rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-font-weight-default {  } .sw-line-height-normal { line-height: 1.5!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-weight-light { font-weight: 300!important; } .sw-text-decoration-underline { text-decoration: underline!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-font-size-4xl { font-size: 2.25rem!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-font-size-xl { font-size: 1.25rem!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-font-size-7xl { font-size: 5rem!important; } .sw-font-size-3xl { font-size: 1.875rem!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-font-size-6xl { font-size: 4rem!important; }  ",
	"compiled_script": ""
};
window['feature1'] = {};
const block_b54f45d3ec2747bbb8d298217bcf0df9_defJson = {
	"id": "b54f45d3-ec27-47bb-b8d2-98217bcf0df9",
	"version": "2.0.0",
	"hrid": "feature1",
	"name": "feature7",
	"title": "Feature with horizontal tabs",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature7.png",
	"category": "Feature",
	"keywords": "feature, product demo",
	"elements": {
		"definitions": {
			"feature": {
				"box": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-ebedfb"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-s"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
					}]
				},
				"featureBoxTemp": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-fff"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-l"]
					}, {
						"name": "margin-top-bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
					}]
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-050038"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-medium"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-top-none"]
					}],
					"value": "Feature title"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "padding-top",
						"label": "Padding top",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs"]
					}, {
						"name": "padding-bottom",
						"label": "Padding bottom",
						"isPrimary": true,
						"classes": ["sw-padding-bottom-xs"]
					}],
					"value": "Feature description"
				},
				"image": {
					"tag": "img",
					"primaryStyles": [{
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-l"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-none"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": []
					}],
					"src": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature4_pic0.png",
					"alt": ""
				},
				"imageUrl": {
					"src": ""
				}
			}
		},
		"container": {
			"tag": "section",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-65b7cc"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-2xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xl"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"header": {
			"tag": "h2",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-bold"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-none"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-wider"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "¿Cómo empiezo?"
		},
		"text": {
			"tag": "p",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-2xl", "sw-text-color-default"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-semibold"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-s"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-wider"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "Para empezar a ser parte de Mercado logístico, sigue estos 4 simples pasos"
		},
		"backgroundImage": {
			"tag": "img",
			"primaryStyles": [{
				"name": "background-repeat",
				"label": "Repeat",
				"isPrimary": true,
				"classes": ["sw-background-repeat-no-repeat"]
			}, {
				"name": "background-size",
				"label": "Size",
				"isPrimary": true,
				"classes": ["sw-background-size-cover"]
			}, {
				"name": "background-position",
				"label": "Position",
				"isPrimary": true,
				"classes": ["sw-background-position-center"]
			}, {
				"name": "background-attachment",
				"label": "Behaviour",
				"isPrimary": true,
				"classes": ["sw-background-attachment-scroll"]
			}],
			"otherStyles": [],
			"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/fa31f74b-0d34-483a-bf3e-3390f02d29f6.jpeg"
		},
		"features": {
			"type": "array",
			"minItems": 1,
			"maxItems": 1024,
			"item_type": "#/elements/definitions/feature",
			"items": [{
				"box": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-ebedfb"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-s"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
					}]
				},
				"featureBoxTemp": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-fff"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-l"]
					}, {
						"name": "margin-top-bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
					}]
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-050038"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-medium"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-top-none"]
					}],
					"value": "Registrate en la Comunidad"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "padding-top",
						"label": "Padding top",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs"]
					}, {
						"name": "padding-bottom",
						"label": "Padding bottom",
						"isPrimary": true,
						"classes": ["sw-padding-bottom-xs"]
					}],
					"value": "Llena el formulario con información minima para crear tu perfil en la comunidad. Mientras mas información compartas, será mas facil encontrarte."
				},
				"image": {
					"tag": "img",
					"primaryStyles": [{
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-l"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-none"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": []
					}],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/a9fe3b3f-960a-4500-b742-24f044c91645.jpeg",
					"alt": ""
				},
				"imageUrl": {
					"src": ""
				}
			}, {
				"box": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-ebedfb"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-s"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
					}]
				},
				"featureBoxTemp": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-fff"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-l"]
					}, {
						"name": "margin-top-bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
					}]
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-050038"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-medium"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-top-none"]
					}],
					"value": "Busca Asociados o oportunidades"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "padding-top",
						"label": "Padding top",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs"]
					}, {
						"name": "padding-bottom",
						"label": "Padding bottom",
						"isPrimary": true,
						"classes": ["sw-padding-bottom-xs"]
					}],
					"value": "Utiliza nuestras herramientas para buscar en el directorio de la comunidad por asociados para los servicios que estas buscando."
				},
				"image": {
					"tag": "img",
					"primaryStyles": [{
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-l"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-none"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": []
					}],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/3ba4dc0d-bcd8-47a9-80ec-8b4cf67c6c9c.jpeg",
					"alt": ""
				},
				"imageUrl": {
					"src": ""
				}
			}, {
				"box": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-ebedfb"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-s"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
					}]
				},
				"featureBoxTemp": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-fff"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-l"]
					}, {
						"name": "margin-top-bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
					}]
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-050038"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-medium"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-top-none"]
					}],
					"value": "Conecta con la Comunidad"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "padding-top",
						"label": "Padding top",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs"]
					}, {
						"name": "padding-bottom",
						"label": "Padding bottom",
						"isPrimary": true,
						"classes": ["sw-padding-bottom-xs"]
					}],
					"value": "Toma contacto solicita cotizaciones, revisa el feedback del asociado, crea una conexión."
				},
				"image": {
					"tag": "img",
					"primaryStyles": [{
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-l"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-none"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": []
					}],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9b5fe2f6-d0a5-445a-95e7-494c1711d82f.png",
					"alt": ""
				},
				"imageUrl": {
					"src": ""
				}
			}, {
				"box": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-ebedfb"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-s"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
					}]
				},
				"featureBoxTemp": {
					"tag": "div",
					"type": "container",
					"primaryStyles": [{
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-fff"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-l"]
					}, {
						"name": "margin-top-bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
					}]
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-050038"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-medium"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-top-none"]
					}],
					"value": "Califica el servicio"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}, {
						"name": "padding-top",
						"label": "Padding top",
						"isPrimary": true,
						"classes": ["sw-padding-top-2xs"]
					}, {
						"name": "padding-bottom",
						"label": "Padding bottom",
						"isPrimary": true,
						"classes": ["sw-padding-bottom-xs"]
					}],
					"value": "Nuestra comunidad depende de la reputaciónd e los asociados, mientras mas referencias tengas, mas negocio podrás realizar!."
				},
				"image": {
					"tag": "img",
					"primaryStyles": [{
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-l"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-none"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": []
					}],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/6ab19740-2654-4a01-b58a-7b5bbc78514c.jpeg",
					"alt": ""
				},
				"imageUrl": {
					"src": ""
				}
			}]
		}
	},
	"type": "static",
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": [],
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<section id=\"feature1\"    data-block-version=\"2.0.0\" data-block-id=\"b54f45d3-ec27-47bb-b8d2-98217bcf0df9\"    data-block-updated=\"\"  style=\"background-image: url(https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/fa31f74b-0d34-483a-bf3e-3390f02d29f6.jpeg);\"    class=\"feature7-b54f45d3-ec27-47bb-b8d2-98217bcf0df9 sw-background-color-65b7cc sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div id=\"feature1-container\" class=\"container\">   <div class=\"col-12 text-center\">        <h2 class=\"sw-font-size-5xl sw-text-color-65b7cc sw-font-family-default sw-font-weight-bold sw-padding-top-none sw-padding-bottom-none sw-letter-spacing-wider sw-line-height-normal \">     ¿Cómo empiezo?    </h2>              <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-s sw-letter-spacing-wider sw-line-height-normal \">      Para empezar a ser parte de Mercado logístico, sigue estos 4 simples pasos     </p>       </div>   <div class=\"row align-items-center\">    <div class=\"col-lg-12 text-center text-lg-left pt-lg-0\">     <div class=\"d-flex justify-content-center align-items-center flex-wrap\">            <div class=\"s-feature-box text-center position-relative sw-background-color-fff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-margin-top-none sw-margin-bottom-6xs \"        data-desc-classes=\"m-lg-0 mb-md-3 d-xs-none d-sm-block px-4 sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \"        data-index=\"0\" data-container=\"container sw-background-color-ebedfb sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-s sw-padding-top-l sw-padding-bottom-l sw-padding-left-xl sw-padding-right-xl\" data-description=\"Llena el formulario con información minima para crear tu perfil en la comunidad. Mientras mas información compartas, será mas facil encontrarte.\" data-img-url=\"\" data-img=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/a9fe3b3f-960a-4500-b742-24f044c91645.jpeg\" data-img-alt=\"\" data-img-classes=\"sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block\">       <div class=\"info\">        <h6 class=\"m-0 p-0 title sw-font-size-2xl sw-text-color-050038 sw-font-family-default sw-font-weight-medium sw-letter-spacing-normal sw-line-height-normal sw-padding-top-2xs sw-padding-bottom-2xs sw-padding-left-2xs sw-padding-right-2xs sw-margin-top-none\">         Registrate en la Comunidad        </h6>        <p  class=\"my-3 d-sm-block d-md-none description sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \">         Llena el formulario con información minima para crear tu perfil en la comunidad. Mientras mas información compartas, será mas facil encontrarte.        </p>                 <img class=\"mobile-img sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto\" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/a9fe3b3f-960a-4500-b742-24f044c91645.jpeg\"  alt=\"\">               </div>       <div class=\"progress-bar  \"></div>      </div>            <div class=\"s-feature-box text-center position-relative sw-background-color-fff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-margin-top-none sw-margin-bottom-6xs \"        data-desc-classes=\"m-lg-0 mb-md-3 d-xs-none d-sm-block px-4 sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \"        data-index=\"1\" data-container=\"container sw-background-color-ebedfb sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-s sw-padding-top-l sw-padding-bottom-l sw-padding-left-xl sw-padding-right-xl\" data-description=\"Utiliza nuestras herramientas para buscar en el directorio de la comunidad por asociados para los servicios que estas buscando.\" data-img-url=\"\" data-img=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/3ba4dc0d-bcd8-47a9-80ec-8b4cf67c6c9c.jpeg\" data-img-alt=\"\" data-img-classes=\"sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block\">       <div class=\"info\">        <h6 class=\"m-0 p-0 title sw-font-size-2xl sw-text-color-050038 sw-font-family-default sw-font-weight-medium sw-letter-spacing-normal sw-line-height-normal sw-padding-top-2xs sw-padding-bottom-2xs sw-padding-left-2xs sw-padding-right-2xs sw-margin-top-none\">         Busca Asociados o oportunidades        </h6>        <p  class=\"my-3 d-sm-block d-md-none description sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \">         Utiliza nuestras herramientas para buscar en el directorio de la comunidad por asociados para los servicios que estas buscando.        </p>                 <img class=\"mobile-img sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto\" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/3ba4dc0d-bcd8-47a9-80ec-8b4cf67c6c9c.jpeg\"  alt=\"\">               </div>       <div class=\"progress-bar  \"></div>      </div>            <div class=\"s-feature-box text-center position-relative sw-background-color-fff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-margin-top-none sw-margin-bottom-6xs \"        data-desc-classes=\"m-lg-0 mb-md-3 d-xs-none d-sm-block px-4 sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \"        data-index=\"2\" data-container=\"container sw-background-color-ebedfb sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-s sw-padding-top-l sw-padding-bottom-l sw-padding-left-xl sw-padding-right-xl\" data-description=\"Toma contacto solicita cotizaciones, revisa el feedback del asociado, crea una conexión.\" data-img-url=\"\" data-img=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9b5fe2f6-d0a5-445a-95e7-494c1711d82f.png\" data-img-alt=\"\" data-img-classes=\"sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block\">       <div class=\"info\">        <h6 class=\"m-0 p-0 title sw-font-size-2xl sw-text-color-050038 sw-font-family-default sw-font-weight-medium sw-letter-spacing-normal sw-line-height-normal sw-padding-top-2xs sw-padding-bottom-2xs sw-padding-left-2xs sw-padding-right-2xs sw-margin-top-none\">         Conecta con la Comunidad        </h6>        <p  class=\"my-3 d-sm-block d-md-none description sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \">         Toma contacto solicita cotizaciones, revisa el feedback del asociado, crea una conexión.        </p>                 <img class=\"mobile-img sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto\" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9b5fe2f6-d0a5-445a-95e7-494c1711d82f.png\"  alt=\"\">               </div>       <div class=\"progress-bar  \"></div>      </div>            <div class=\"s-feature-box text-center position-relative sw-background-color-fff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-margin-top-none sw-margin-bottom-6xs \"        data-desc-classes=\"m-lg-0 mb-md-3 d-xs-none d-sm-block px-4 sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \"        data-index=\"3\" data-container=\"container sw-background-color-ebedfb sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-s sw-padding-top-l sw-padding-bottom-l sw-padding-left-xl sw-padding-right-xl\" data-description=\"Nuestra comunidad depende de la reputaciónd e los asociados, mientras mas referencias tengas, mas negocio podrás realizar!.\" data-img-url=\"\" data-img=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/6ab19740-2654-4a01-b58a-7b5bbc78514c.jpeg\" data-img-alt=\"\" data-img-classes=\"sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block\">       <div class=\"info\">        <h6 class=\"m-0 p-0 title sw-font-size-2xl sw-text-color-050038 sw-font-family-default sw-font-weight-medium sw-letter-spacing-normal sw-line-height-normal sw-padding-top-2xs sw-padding-bottom-2xs sw-padding-left-2xs sw-padding-right-2xs sw-margin-top-none\">         Califica el servicio        </h6>        <p  class=\"my-3 d-sm-block d-md-none description sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \">         Nuestra comunidad depende de la reputaciónd e los asociados, mientras mas referencias tengas, mas negocio podrás realizar!.        </p>                 <img class=\"mobile-img sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto\" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/6ab19740-2654-4a01-b58a-7b5bbc78514c.jpeg\"  alt=\"\">               </div>       <div class=\"progress-bar  \"></div>      </div>           </div>    </div>    <div class=\"col-lg-12 text-center\">     <p id=\"feature1-description-block\"  class=\"\"></p>    </div>    <div class=\"image-container col-lg-12  d-xs-none d-sm-block d-lg-block text-center\">     <a href=\"\" target=\"_blank\" id=\"image-url\" class=\"w-100 d-inline-block\">      <img id=\"feature1-display-img\" class=\"\">     </a>    </div>   </div>  </div> </section> ",
	"compiled_style": ".sw-background-color-ebedfb { background-color: #ebedfb!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-border-radius-s { border-radius: 0.125rem!important; } .sw-padding-top-l { padding-top: 4rem!important; } .sw-padding-bottom-l { padding-bottom: 4rem!important; } .sw-padding-left-xl { padding-left: 5rem!important; } .sw-padding-right-xl { padding-right: 5rem!important; } .sw-background-color-fff { background-color: #fff!important; } .sw-border-radius-l { border-radius: 0.5rem!important; } .sw-margin-top-none { margin-top: 0rem!important; } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-050038 { color: #050038!important; } .sw-font-family-default {  } .sw-font-weight-medium { font-weight: 500!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-padding-top-2xs { padding-top: 1.5rem!important; } .sw-padding-bottom-2xs { padding-bottom: 1.5rem!important; } .sw-padding-left-2xs { padding-left: 1.5rem!important; } .sw-padding-right-2xs { padding-right: 1.5rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-text-color-default {  } .sw-font-weight-default {  } .sw-padding-bottom-xs { padding-bottom: 2rem!important; } .sw-width-l { width: 32rem!important; } .sw-border-radius-none { border-radius: 0rem!important; } .sw-background-color-65b7cc { background-color: #65b7cc!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-font-weight-bold { font-weight: 700!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-none { padding-bottom: 0rem!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-font-weight-semibold { font-weight: 600!important; } .sw-padding-bottom-s { padding-bottom: 2.5rem!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; }  #feature1 .s-feature-box{  cursor: pointer;  display: flex;  justify-content: center;  align-items: center;  flex-flow: wrap;  margin: 8px 10px;  overflow: hidden;  width: 180px; } #feature1 #feature1-container{  transition: .3s;        }  #feature1 .s-feature-box:first-child {     margin-left: 0 ;     } #feature1 .s-feature-box:last-child {      margin-right: 0 ;     } #feature1 .s-feature-box:not(.active) {      opacity: .55;     } #feature1 .s-feature-box:hover .title {    color: #2f56d4; }  #feature1 .s-feature-box.active .progress-bar{    display: block!important; } #feature1 .s-feature-box .progress-bar{      display: none;      position: absolute;      bottom: 0;      left: 0;      height: 2px;      animation-name: progress-animation;      animation-timing-function: linear;      animation-direction: forwards;      animation-fill-mode: forwards;     } @keyframes progress-animation{  from { width: 0 }  to { width:  100%  } } #feature1 .mobile-img {      display: none;     } @media  (max-width: 991px) {  #feature1 #feature1-display-img {       width: 100% !important;      } } @media (max-width: 767px) {   #feature1-display-img,  #feature1 .s-feature-box.active .progress-bar{   display: none!important;  }   #feature1 .s-feature-box{    width: inherit;    opacity: 1!important;    margin: 8px 0;      }   #feature1 #feature1-container{       padding: 0 15px!important;      }   #feature1 .mobile-img {       display: block!important;       width: 100% !important;      } }  ",
	"compiled_script": ";(function () {  let sliderInterval;  let index = 0;  let slideTime = 5000;  let loading;   const feature = '#feature1 .s-feature-box';  const progress = '#feature1 .progress-bar';  if ($(window).width() > 767) {   heightCalc();  }  if (!isInStudio()) {   checkScreenSize();  } else {   activateSlide();  }   function checkScreenSize() {   if ($(window).width() > 767) {    init();   } else {    if (loading) {     clearInterval(loading)    }    $('#feature1 .s-feature-box').addClass('active');   }  }   function isInStudio() {   return window.location.href.startsWith('https://localhost:') ||    window.location.href.includes('https://studio-staging') ||    window.location.href.startsWith('https://studio.softr.io/')    }   function init() {   startSliding();   if (document.querySelector('#feature1 .s-feature-box')) {    const featureBGColor = window.getComputedStyle(document.querySelector('#feature1 .s-feature-box'), null).getPropertyValue('background-color');    $(progress).css('background-color', `${featureBGColor}`);    $(progress).css('filter', 'brightness(0.5)');    $(feature).click(function (e) {     $('#feature1 .s-feature-box').removeClass('active');     activateFeature($(this), false);    });   }  }   function startSliding() {   activateSlide();   sliderInterval = setInterval(function () {    activateSlide();   }, slideTime)  }   function activateSlide() {   $('#feature1 .s-feature-box').removeClass('active');   activateFeature($(feature).eq(index));   index++;   index === $(feature).length && (index = 0);  }   function activateFeature(feature, isCarousel = true) {   const src = feature.attr('data-img');   const imageUrlSrc = feature.attr('data-img-url');   const classes = feature.attr('data-img-classes');   const descClasses = feature.attr('data-desc-classes');   const containerClasses = feature.attr('data-container');   const alt = feature.attr('data-img-alt');   const id = feature.attr('data-index');   const description = feature.attr('data-description');    $('#feature1-display-img').removeClass();   $('#feature1-display-img').addClass(classes);   $('#feature1-display-img').attr('src', src);   $('#feature1-display-img').attr('alt', alt);   $('#feature1-container').removeClass();   $('#feature1-container').addClass(containerClasses);   $('#feature1-description-block').removeClass();   $('#feature1-description-block').addClass(descClasses);   $('#feature1-description-block').html(description);   $('#feature1-display-img').attr('src', src);   $(progress).css('display', \" none\");    if (imageUrlSrc) {    $('#feature1 #image-url').attr('href', linkify(imageUrlSrc));    $('#feature1 #image-url').css({'pointer-events': 'all'});   } else {    $('#feature1 #image-url').attr('href', '');    $('#feature1 #image-url').css({'pointer-events': 'none'});   }    feature.addClass('active');   index = id;   $(progress).eq(index).css('display', \" block\");   if (isCarousel) {    $(progress).eq(index).css('animationDuration', `${slideTime / 1000}s`);   } else {    $(progress).eq(index).css('animationDuration', `.2s`);    clearInterval(sliderInterval);   }  }     function heightCalc() {   setTimeout(function () {    const box = $('#feature1 .s-feature-box');    const heights = box.map(function () {     return $(this).height();    }).get();    const maxHeight = Math.max.apply(null, heights);    box.each(function (i) {     $(this).css({'height': maxHeight});    });   }, 200);  }   function linkify(url) {   if (url.startsWith('https') || url.startsWith('http') || url.startsWith('mailto') ||    url.startsWith('#') || url.startsWith('/')) {    return url;   }    if (url.indexOf('.') !== -1) {    return 'https://' + url;   }  }  })(); "
};
window['other2'] = {};
const block_200c6b6b0c3c4513a270e894640100fa_defJson = {
	"id": "200c6b6b-0c3c-4513-a270-e894640100fa",
	"version": "2.0.0",
	"hrid": "other2",
	"name": "counter1",
	"title": "Simple counter",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/counter1.png",
	"category": "Other",
	"keywords": "Counter",
	"elements": {
		"definitions": {
			"counters": {
				"number": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-6xl", "sw-text-color-2977c9"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
					}]
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-medium"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Counter title"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Counter description"
				}
			}
		},
		"container": {
			"tag": "section",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-ffffff"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-2xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xl"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"header": {
			"tag": "h2",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-5xl", "sw-text-color-000000"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-semibold"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-4xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-wider"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "Conexiones Activas las últimas 24 horas"
		},
		"text": {
			"tag": "p",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-2xl", "sw-text-color-default"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-wider"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "Estas son las oportunidades de conexión abiertas, capturadas y mejoradas en la comunidad, ¿Qué esperas para participar?"
		},
		"counters": {
			"type": "array",
			"minItems": 0,
			"maxItems": 1024,
			"item_type": "#/elements/definitions/counters",
			"items": [{
				"number": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
					}],
					"value": "3,500"
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-bold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Asociados Activos"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "usuarios interectuando por la Comunidad"
				}
			}, {
				"number": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
					}],
					"value": "300+"
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-bold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Oportunidades Abiertas"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Oportunidades que estan esperando propuestas de la comunidad."
				}
			}, {
				"number": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
					}],
					"value": "250"
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-bold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "TDRs adjudicados"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Proyectos cerrados a la fecha de hoy."
				}
			}, {
				"number": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
					}],
					"value": "45%"
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-bold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Nuevas Oportunidades"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-normal"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Cambio en el número  de oportunidades entre Mes a mes "
				}
			}]
		}
	},
	"type": "static",
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": [],
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<section id=\"other2\"    data-block-version=\"2.0.0\" data-block-id=\"200c6b6b-0c3c-4513-a270-e894640100fa\"    data-block-updated=\"\"  class=\"counter1-200c6b6b-0c3c-4513-a270-e894640100fa sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000 \">  <div class=\"container\">    <!-- Header -->      <div class=\"row\">    <div class=\"col-12 text-center\">      <h2  class=\"sw-font-size-5xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-wider sw-line-height-normal \">        Conexiones Activas las últimas 24 horas      </h2>    </div>   </div>       <!-- Subheader -->      <div class=\"row\">     <div class=\"col-12 text-center\">       <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-xs sw-letter-spacing-wider sw-line-height-normal \">         Estas son las oportunidades de conexión abiertas, capturadas y mejoradas en la comunidad, ¿Qué esperas para participar?       </p>     </div>   </div>       <div class=\"row gap-y text-center\">       <div class=\"col-md-3  text-center pt-4 pb-4\">     <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-5xs sw-line-height-compact sw-font-family-default\">      3,500     </p>     <h6 class=\"sw-font-size-2xl sw-text-color-000000 sw-font-family-default sw-font-weight-bold sw-letter-spacing-normal \">      Asociados Activos     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">      usuarios interectuando por la Comunidad     </p>    </div>       <div class=\"col-md-3  text-center pt-4 pb-4\">     <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-5xs sw-line-height-compact sw-font-family-default\">      300+     </p>     <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-bold sw-letter-spacing-normal \">      Oportunidades Abiertas     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">      Oportunidades que estan esperando propuestas de la comunidad.     </p>    </div>       <div class=\"col-md-3  text-center pt-4 pb-4\">     <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-5xs sw-line-height-compact sw-font-family-default\">      250     </p>     <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-bold sw-letter-spacing-normal \">      TDRs adjudicados     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">      Proyectos cerrados a la fecha de hoy.     </p>    </div>       <div class=\"col-md-3  text-center pt-4 pb-4\">     <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-5xs sw-line-height-compact sw-font-family-default\">      45%     </p>     <h6 class=\"sw-font-size-2xl sw-text-color-000000 sw-font-family-default sw-font-weight-bold sw-letter-spacing-normal \">      Nuevas Oportunidades     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">      Cambio en el número  de oportunidades entre Mes a mes      </p>    </div>      </div>   </div> </section> ",
	"compiled_style": ".sw-font-size-6xl { font-size: 4rem!important; } .sw-text-color-2977c9 { color: #2977c9!important; } .sw-margin-bottom-5xs { margin-bottom: 0.75rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-family-default {  } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-default {  } .sw-font-weight-medium { font-weight: 500!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-font-weight-default {  } .sw-line-height-normal { line-height: 1.5!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-weight-semibold { font-weight: 600!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-padding-bottom-xs { padding-bottom: 2rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-font-weight-bold { font-weight: 700!important; } .sw-font-size-xl { font-size: 1.25rem!important; }  ",
	"compiled_script": ""
};
window['feature-grid2'] = {};
const block_f8976c41f08b414c9fa385eceee10f5e_defJson = {
	"id": "f8976c41-f08b-414c-9fa3-85eceee10f5e",
	"version": "2.0.0",
	"hrid": "feature-grid2",
	"name": "feature-grid5",
	"title": "Feature grid with small icons",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature-grid5.png",
	"category": "Feature Grid",
	"keywords": "feature grid, simple",
	"elements": {
		"definitions": {
			"feature": {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-2xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-shield-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-medium"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Feature title"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Feature description"
				}
			}
		},
		"container": {
			"tag": "section",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-ffffff"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-2xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xl"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"backgroundImage": {
			"tag": "img",
			"primaryStyles": [{
				"name": "background-repeat",
				"label": "Repeat",
				"isPrimary": true,
				"classes": ["sw-background-repeat-no-repeat"]
			}, {
				"name": "background-size",
				"label": "Size",
				"isPrimary": true,
				"classes": ["sw-background-size-cover"]
			}, {
				"name": "background-position",
				"label": "Position",
				"isPrimary": true,
				"classes": ["sw-background-position-center"]
			}, {
				"name": "background-attachment",
				"label": "Behaviour",
				"isPrimary": true,
				"classes": ["sw-background-attachment-scroll"]
			}],
			"otherStyles": [],
			"src": ""
		},
		"header": {
			"tag": "h2",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-5xl", "sw-text-color-000000"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-semibold"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-4xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "La plataforma digital de la cadena de suministro de Latam"
		},
		"text": {
			"tag": "p",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-2xl", "sw-text-color-default"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-3xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-wide"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-loose"]
			}],
			"value": "Forma parte de la comunidad más grande de compradores, vendedores y colaboradores especializados de la cadena de suministro de Latinoamérica."
		},
		"features": {
			"type": "array",
			"minItems": 0,
			"maxItems": 1024,
			"item_type": "#/elements/definitions/feature",
			"items": [{
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-mobile-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Acceso a comunidad logística"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "La comunidad de compradores y vendedores  más grande de la cadena de suministro en Latam."
				}
			}, {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-cog",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Oportunidades comerciales"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Encuentra oportunidades comerciales adicionales y complementarias a tu core."
				}
			}, {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-pencil-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Capacitación en línea"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Encuentra los mejores cursos diseñados para la cadena de abastecimiento."
				}
			}, {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-cube",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Newsletter"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Mantente informado de los acontecimientos, novedades, tendencias que impactan la cadena de abastecimiento."
				}
			}, {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-recycle",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Herramientas logísticas"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Accede a software especializado e incrementa tu productividad, genera ahorros y se más competitivo."
				}
			}, {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "far fa-comment-dots",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Intercambios transparentes"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Realiza transacciones con seguridad y confianza"
				}
			}, {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-shield-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Proveedores homologados"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Consigue proveedores con estándares  requeridos por el mercado."
				}
			}, {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-shield-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Genera ahorros"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Compara costos y servicios que necesites y obtén ahorros importantes."
				}
			}, {
				"div": {
					"tag": "div",
					"primaryStyles": [{
						"name": "border-top",
						"label": "Border top",
						"isPrimary": true,
						"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
					}, {
						"name": "border-bottom",
						"label": "Border bottom",
						"isPrimary": true,
						"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
					}, {
						"name": "border-right",
						"label": "Border right",
						"isPrimary": true,
						"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
					}, {
						"name": "border-left",
						"label": "Border left",
						"isPrimary": true,
						"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
					}]
				},
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-shield-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Automatiza operaciones"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Elimina hojas de cálculo y operaciones manuales"
				}
			}]
		}
	},
	"type": "static",
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": [],
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<section id=\"feature-grid2\"    data-block-version=\"2.0.0\" data-block-id=\"f8976c41-f08b-414c-9fa3-85eceee10f5e\"    data-block-updated=\"\"  style=\"\"    class=\"feature-grid5-f8976c41-f08b-414c-9fa3-85eceee10f5e sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">      <!-- Header -->      <div class=\"row\">    <div class=\"col-12 text-center\">     <h2 class=\"sw-font-size-5xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \">      La plataforma digital de la cadena de suministro de Latam     </h2>    </div>   </div>       <!-- Subheader -->      <div class=\"row\">    <div class=\"col-12 text-center\">     <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-wide sw-line-height-loose \">      Forma parte de la comunidad más grande de compradores, vendedores y colaboradores especializados de la cadena de suministro de Latinoamérica.     </p>    </div>   </div>         <div class=\"row gap-y text-md-left text-center\">        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-mobile-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Acceso a comunidad logística       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        La comunidad de compradores y vendedores  más grande de la cadena de suministro en Latam.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-cog\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Oportunidades comerciales       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Encuentra oportunidades comerciales adicionales y complementarias a tu core.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-pencil-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Capacitación en línea       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Encuentra los mejores cursos diseñados para la cadena de abastecimiento.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-cube\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Newsletter       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Mantente informado de los acontecimientos, novedades, tendencias que impactan la cadena de abastecimiento.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-recycle\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Herramientas logísticas       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Accede a software especializado e incrementa tu productividad, genera ahorros y se más competitivo.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"far fa-comment-dots\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Intercambios transparentes       </h6>       <p class=\"sw-font-size-m sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Realiza transacciones con seguridad y confianza       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Proveedores homologados       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Consigue proveedores con estándares  requeridos por el mercado.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Genera ahorros       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Compara costos y servicios que necesites y obtén ahorros importantes.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Automatiza operaciones       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Elimina hojas de cálculo y operaciones manuales       </p>      </div>     </div>    </div>       </div>  </div> </section> ",
	"compiled_style": ".sw-border-top-style-solid { border-top-style: solid!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-f1f2f3 { border-top-color: #f1f2f3!important; } .sw-border-bottom-style-solid { border-bottom-style: solid!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-f1f2f3 { border-bottom-color: #f1f2f3!important; } .sw-border-right-style-solid { border-right-style: solid!important; } .sw-border-right-width-xs { border-right-width: 1px!important; } .sw-border-right-color-f1f2f3 { border-right-color: #f1f2f3!important; } .sw-border-left-style-solid { border-left-style: solid!important; } .sw-border-left-width-xs { border-left-width: 1px!important; } .sw-border-left-color-f1f2f3 { border-left-color: #f1f2f3!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-width-11xs { width: 2rem!important; } .sw-margin-right-3xs { margin-right: 1.25rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-medium { font-weight: 500!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-font-weight-default {  } .sw-line-height-loose { line-height: 2!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-weight-semibold { font-weight: 600!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-letter-spacing-wide { letter-spacing: 0.025rem!important; } .sw-font-size-xl { font-size: 1.25rem!important; }  ",
	"compiled_script": ""
};
window['feature-grid4'] = {};
const block_3a0cb063031d4efd99edd43ac0b62ced_defJson = {
	"id": "3a0cb063-031d-4efd-99ed-d43ac0b62ced",
	"version": "2.0.0",
	"hrid": "feature-grid4",
	"name": "feature-grid1",
	"title": "Feature grid with big icons",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature-grid1.png",
	"category": "Feature Grid",
	"keywords": "feature grid, simple",
	"elements": {
		"definitions": {
			"feature": {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-shield-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-l", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-medium"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Feature title"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Feature description"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "READ MORE",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}
		},
		"container": {
			"tag": "section",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-ffffff"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-2xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xl"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"header": {
			"tag": "h2",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-5xl", "sw-text-color-000000"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-semibold"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-4xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "Acceso a Comunidades"
		},
		"text": {
			"tag": "p",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-2xl", "sw-text-color-default"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-3xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-loose"]
			}],
			"value": "Hemos creado un espacio personalizado para el encuentro de nuestros aliados, le llamamos Comunidades, explora y elige a cuál te gustaría pertenecer."
		},
		"backgroundImage": {
			"tag": "img",
			"primaryStyles": [{
				"name": "background-repeat",
				"label": "Repeat",
				"isPrimary": true,
				"classes": ["sw-background-repeat-no-repeat"]
			}, {
				"name": "background-size",
				"label": "Size",
				"isPrimary": true,
				"classes": ["sw-background-size-cover"]
			}, {
				"name": "background-position",
				"label": "Position",
				"isPrimary": true,
				"classes": ["sw-background-position-center"]
			}, {
				"name": "background-attachment",
				"label": "Behaviour",
				"isPrimary": true,
				"classes": ["sw-background-attachment-scroll"]
			}],
			"otherStyles": [],
			"src": ""
		},
		"features": {
			"type": "array",
			"minItems": 0,
			"maxItems": 1024,
			"item_type": "#/elements/definitions/feature",
			"items": [{
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-mobile-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Transportistas"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Únete a la red más importante de transportistas digitales del país."
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "Leer mas..",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-cog",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Almacenes"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Empresas almaceneras con distintos modelos de negocio."
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "Leer mas..",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-pencil-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Comercio Exterior"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Todos los actores del comercio exterior unidos en una plataforma digital."
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "Leer mas...",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-cube",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Ultima milla"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "El ecosistema de la última milla en un solo lugar."
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "READ MORE",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-recycle",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Servicios"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-normal"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Proveedores de servicios que complementan la cadena de abastecimiento."
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "Leer mas...",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "far fa-comment-dots",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "E-commerce"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Vendedores de productos y servicios online"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "Leer mas...",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-shield-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Profesionales logísticos"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Busca los mejores profesionales logísticos en nuestra bolsa de trabajo"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "Leer mas...",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				}
			}, {
				"icon": {
					"tag": "i",
					"type": "icon",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"showFor": "icon",
						"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
					}, {
						"name": "width",
						"label": "Icon Size",
						"isPrimary": true,
						"showFor": "image",
						"classes": ["sw-width-10xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
					}],
					"provider": "font-awesome",
					"value": "fas fa-fw fa-shield-alt",
					"src": ""
				},
				"title": {
					"tag": "h6",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-margin-bottom-6xs"]
					}],
					"value": "Speakers, coaches y mentores"
				},
				"description": {
					"tag": "p",
					"type": "text",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-default"]
					}, {
						"name": "line-height",
						"label": "Line height",
						"isPrimary": true,
						"classes": ["sw-line-height-loose"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "Expertos y divulgadores logísticos "
				},
				"link": {
					"tag": "a",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "margin-top/bottom",
						"label": "Margin top/bottom",
						"isPrimary": true,
						"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
					}],
					"value": "Leer mas..",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/directorio",
								"target": ""
							}
						}
					}
				}
			}]
		}
	},
	"type": "static",
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": [],
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<section id=\"feature-grid4\"    data-block-version=\"2.0.0\" data-block-id=\"3a0cb063-031d-4efd-99ed-d43ac0b62ced\"    data-block-updated=\"\"  style=\"\"   class=\"feature-grid1-3a0cb063-031d-4efd-99ed-d43ac0b62ced sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">    <!-- Header -->      <div class=\"row\">    <div class=\"col-12 text-center\">     <h2 class=\"sw-font-size-5xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \">      Acceso a Comunidades     </h2>    </div>   </div>       <!-- Subheader -->      <div class=\"row\">    <div class=\"col-12 text-center\">     <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-loose \">      Hemos creado un espacio personalizado para el encuentro de nuestros aliados, le llamamos Comunidades, explora y elige a cuál te gustaría pertenecer.     </p>    </div>   </div>        <div class=\"row gap-y text-center\">       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-mobile-alt\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Transportistas     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Únete a la red más importante de transportistas digitales del país.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas..       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-cog\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Almacenes     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Empresas almaceneras con distintos modelos de negocio.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas..       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-pencil-alt\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Comercio Exterior     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Todos los actores del comercio exterior unidos en una plataforma digital.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas...       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-cube\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Ultima milla     </h6>     <p class=\"sw-font-size-m sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-line-height-loose sw-letter-spacing-normal \">       El ecosistema de la última milla en un solo lugar.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       READ MORE       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-recycle\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Servicios     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-normal sw-line-height-loose sw-letter-spacing-normal \">       Proveedores de servicios que complementan la cadena de abastecimiento.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas...       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"far fa-comment-dots\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       E-commerce     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Vendedores de productos y servicios online     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas...       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Profesionales logísticos     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Busca los mejores profesionales logísticos en nuestra bolsa de trabajo     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas...       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Speakers, coaches y mentores     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Expertos y divulgadores logísticos      </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas..       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>      </div>   </div> </section> ",
	"compiled_style": ".sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-width-10xs { width: 3rem!important; } .sw-margin-bottom-2xs { margin-bottom: 1.5rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-medium { font-weight: 500!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-font-weight-default {  } .sw-line-height-loose { line-height: 2!important; } .sw-font-size-xs { font-size: 0.75rem!important; } .sw-text-color-2977c9 { color: #2977c9!important; } .sw-font-weight-semibold { font-weight: 600!important; } .sw-margin-top-none { margin-top: 0rem!important; } .sw-margin-bottom-none { margin-bottom: 0rem!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } .sw-display-inline-block { display: inline-block!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-text-color-000000 { color: #000000!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-font-size-6xl { font-size: 4rem!important; } .sw-font-size-xl { font-size: 1.25rem!important; } .sw-font-weight-normal { font-weight: 400!important; }  ",
	"compiled_script": ""
};
window['cta1'] = {};
const block_4cf9463d160147f7b1f502cc8ccbf462_defJson = {
	"id": "4cf9463d-1601-47f7-b1f5-02cc8ccbf462",
	"version": "2.0.0",
	"hrid": "cta1",
	"name": "cta2",
	"title": "Call to action with a button",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/cta2.png",
	"category": "CTA",
	"keywords": "call to action, cta, simple",
	"elements": {
		"definitions": {
			"button": {
				"tag": "a",
				"type": "button",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-m", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-default"]
				}, {
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-default"]
				}, {
					"name": "padding-left-right",
					"label": "Padding left/right",
					"isPrimary": true,
					"classes": ["sw-padding-left-l", "sw-padding-right-l"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-5xs", "sw-padding-bottom-5xs"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"isPrimary": true,
					"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-display-inline-block", "sw-margin-left-7xs", "sw-margin-right-7xs"]
				}],
				"label": "Button label",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "",
							"target": ""
						}
					}
				}
			}
		},
		"container": {
			"tag": "section",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-ffffff"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-2xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xl"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"box": {
			"tag": "div",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-none"]
			}, {
				"name": "border",
				"label": "Border",
				"isPrimary": true,
				"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
			}, {
				"name": "border-radius",
				"label": "Roundness",
				"isPrimary": true,
				"classes": ["sw-border-radius-none"]
			}, {
				"name": "shadow",
				"label": "Shadow",
				"isPrimary": true,
				"classes": ["sw-box-shadow-none"]
			}, {
				"name": "padding-top-bottom",
				"label": "Padding top/bottom",
				"isPrimary": true,
				"classes": ["sw-padding-top-none", "sw-padding-bottom-none"]
			}]
		},
		"header": {
			"tag": "h2",
			"type": "text",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-4xl", "sw-text-color-000000"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-semibold"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-4xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "Últimas Noticias"
		},
		"text": {
			"tag": "p",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-2xl", "sw-text-color-default"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-3xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-loose"]
			}],
			"value": "Mantente al tanto de las novedades que suceden en el mundo de las cadenas de abastecimiento a través de nuestro newsletter semanal. Accede gratis al suscribirte."
		},
		"backgroundImage": {
			"tag": "img",
			"primaryStyles": [{
				"name": "background-repeat",
				"label": "Repeat",
				"isPrimary": true,
				"classes": ["sw-background-repeat-no-repeat"]
			}, {
				"name": "background-size",
				"label": "Size",
				"isPrimary": true,
				"classes": ["sw-background-size-cover"]
			}, {
				"name": "background-position",
				"label": "Position",
				"isPrimary": true,
				"classes": ["sw-background-position-center"]
			}, {
				"name": "background-attachment",
				"label": "Behaviour",
				"isPrimary": true,
				"classes": ["sw-background-attachment-scroll"]
			}],
			"otherStyles": [],
			"src": ""
		},
		"buttons": {
			"type": "array",
			"item_type": "#/elements/definitions/button",
			"items": [{
				"tag": "a",
				"type": "button",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-xl"]
				}, {
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-e69505"]
				}, {
					"name": "padding-left-right",
					"label": "Padding left/right",
					"isPrimary": true,
					"classes": ["sw-padding-left-l", "sw-padding-right-l"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-5xs", "sw-padding-bottom-5xs"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"isPrimary": true,
					"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-display-inline-block", "sw-margin-left-7xs", "sw-margin-right-7xs"]
				}],
				"label": "Ve a Noticias",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "/newsletter",
							"target": ""
						}
					},
					"action": "Open page > Newsletter"
				}
			}]
		}
	},
	"type": "static",
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": [],
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<section id=\"cta1\" style=\"\"    data-block-version=\"2.0.0\" data-block-id=\"4cf9463d-1601-47f7-b1f5-02cc8ccbf462\"    data-block-updated=\"\"   class=\"cta2-4cf9463d-1601-47f7-b1f5-02cc8ccbf462 sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000   sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">   <div class=\"row align-items-center\">    <div class=\"col-12 text-center sw-background-color-none sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-box-shadow-none sw-padding-top-none sw-padding-bottom-none \">          <h2 class=\"sw-font-size-4xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \">      Últimas Noticias     </h2>                    <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-loose \">      Mantente al tanto de las novedades que suceden en el mundo de las cadenas de abastecimiento a través de nuestro newsletter semanal. Accede gratis al suscribirte.     </p>           <div class=\"d-flex justify-content-center flex-wrap\">             <a id=\"sw-email-capture-submit-btn\" data-element=\"button\" target=\"\" class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-border-radius-xl sw-background-color-e69505 sw-padding-left-l sw-padding-right-l sw-padding-top-5xs sw-padding-bottom-5xs sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline hover:sw-box-shadow-m sw-margin-bottom-6xs sw-display-inline-block sw-margin-left-7xs sw-margin-right-7xs\" href=\"/newsletter\">        Ve a Noticias       </a>           </div>    </div>    </div>  </div> </section> ",
	"compiled_style": ".sw-font-size-m { font-size: 1rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-border-radius-default {  } .sw-background-color-default {  } .sw-padding-left-l { padding-left: 4rem!important; } .sw-padding-right-l { padding-right: 4rem!important; } .sw-padding-top-5xs { padding-top: 0.75rem!important; } .sw-padding-bottom-5xs { padding-bottom: 0.75rem!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } @media (hover: hover) { .hover\\:sw-box-shadow-m:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important; } } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-display-inline-block { display: inline-block!important; } .sw-margin-left-7xs { margin-left: 0.25rem!important; } .sw-margin-right-7xs { margin-right: 0.25rem!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-background-color-none { background-color: #none!important; } .sw-border-radius-none { border-radius: 0rem!important; } .sw-box-shadow-none { box-shadow: none!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-none { padding-bottom: 0rem!important; } .sw-font-size-4xl { font-size: 2.25rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-font-weight-default {  } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-line-height-loose { line-height: 2!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-border-radius-xl { border-radius: 0.75rem!important; } .sw-background-color-e69505 { background-color: #e69505!important; }   @media (max-width: 576px) {  #cta1 a{   width: 80%;  } } ",
	"compiled_script": ""
};
window['partner1'] = {};
const block_9897a885e50540d79f06e50b20de9e9f_defJson = {
	"id": "9897a885-e505-40d7-9f06-e50b20de9e9f",
	"version": "2.0.1",
	"hrid": "partner1",
	"name": "partner2",
	"title": "Partner with sliding logos",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/partner2.png",
	"category": "Partner",
	"keywords": "partner, simple",
	"elements": {
		"definitions": {
			"partner": {
				"picture": {
					"tag": "img",
					"type": "image",
					"primaryStyles": [{
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"classes": ["sw-border-radius-none"]
					}, {
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-8xs"]
					}],
					"otherStyles": [],
					"src": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/logo-placeholder.png"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
					}],
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}
		},
		"container": {
			"tag": "section",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"classes": ["sw-background-color-ffffff"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"classes": ["sw-padding-top-2xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"classes": ["sw-padding-bottom-2xl"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}],
			"otherStyles": []
		},
		"header": {
			"tag": "h2",
			"type": "text",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"classes": ["sw-text-color-000000", "sw-font-size-4xl"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-4xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"otherStyles": [{
				"name": "others",
				"label": "Others",
				"classes": ["sw-letter-spacing-normal"]
			}],
			"value": "Tu puedes ser parte de esta lista! ponte en contacto con nosotros!"
		},
		"text": {
			"tag": "p",
			"type": "text",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"classes": ["sw-text-color-default", "sw-font-size-3xl"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"classes": ["sw-padding-bottom-3xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-loose"]
			}],
			"otherStyles": [],
			"value": "Qué esperas para multiplicar tu presencia en el espacio digital de la logística de Latam?"
		},
		"partners": {
			"type": "array",
			"item_type": "#/elements/definitions/partner",
			"items": [{
				"picture": {
					"tag": "img",
					"type": "image",
					"primaryStyles": [{
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"classes": ["sw-border-radius-none"]
					}, {
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-xs"]
					}],
					"otherStyles": [],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9d989da8-51dc-4ca8-b552-c395852db000.jpeg"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
					}],
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}, {
				"picture": {
					"tag": "img",
					"type": "image",
					"primaryStyles": [{
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"classes": ["sw-border-radius-none"]
					}, {
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-3xs"]
					}],
					"otherStyles": [],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/4bc34130-6de1-4ab4-b100-a9391a5cc853.png"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
					}],
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}, {
				"picture": {
					"tag": "img",
					"type": "image",
					"primaryStyles": [{
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"classes": ["sw-border-radius-none"]
					}, {
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-2xs"]
					}],
					"otherStyles": [],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/0324fe1b-8300-4e1e-998d-3af1cc503309.jpeg"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
					}],
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}, {
				"picture": {
					"tag": "img",
					"type": "image",
					"primaryStyles": [{
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"classes": ["sw-border-radius-none"]
					}, {
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-4xs"]
					}],
					"otherStyles": [],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ec2c9e07-bc63-4aca-82d8-9862a65bbe5d.png"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
					}],
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}, {
				"picture": {
					"tag": "img",
					"type": "image",
					"primaryStyles": [{
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"classes": ["sw-border-radius-none"]
					}, {
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-3xs"]
					}],
					"otherStyles": [],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/621d2174-48c7-4722-bfa1-fb4a994453d7.png"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
					}],
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}, {
				"picture": {
					"tag": "img",
					"type": "image",
					"primaryStyles": [{
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"classes": ["sw-border-radius-none"]
					}, {
						"name": "width",
						"label": "Size",
						"isPrimary": true,
						"classes": ["sw-width-3xs"]
					}],
					"otherStyles": [],
					"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/cb54e95b-de08-43af-8d65-8760449f745d.jpeg"
				},
				"link": {
					"tag": "a",
					"primaryStyles": [],
					"otherStyles": [{
						"name": "others",
						"label": "Other",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
					}],
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			}]
		}
	},
	"type": "static",
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": [],
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<section id=\"partner1\"    data-block-version=\"2.0.1\" data-block-id=\"9897a885-e505-40d7-9f06-e50b20de9e9f\"    data-block-updated=\"\"    class=\"partner2-9897a885-e505-40d7-9f06-e50b20de9e9f sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000 \">  <div class=\"container\">      <div class=\"row\">    <div class=\"col-12 text-center\">          <h2 class=\"sw-text-color-000000 sw-font-size-4xl sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \" >Tu puedes ser parte de esta lista! ponte en contacto con nosotros!</h2>                <p class=\"sw-text-color-default sw-font-size-3xl sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-loose\">Qué esperas para multiplicar tu presencia en el espacio digital de la logística de Latam?</p>         </div>   </div>    <div class=\"row text-center pt-5\">    <div class=\"col-12\">     <div id=\"partner-slider\" class=\"slick-slider\" style=\"overflow: hidden;\">            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9d989da8-51dc-4ca8-b552-c395852db000.jpeg\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/4bc34130-6de1-4ab4-b100-a9391a5cc853.png\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-3xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/0324fe1b-8300-4e1e-998d-3af1cc503309.jpeg\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-2xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ec2c9e07-bc63-4aca-82d8-9862a65bbe5d.png\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-4xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/621d2174-48c7-4722-bfa1-fb4a994453d7.png\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-3xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/cb54e95b-de08-43af-8d65-8760449f745d.jpeg\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-3xs \" />             </div>           </div>    </div>   </div>  </div> </section> ",
	"compiled_style": ".sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-border-radius-none { border-radius: 0rem!important; } .sw-width-8xs { width: 5rem!important; } .sw-display-block { display: block!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-size-4xl { font-size: 2.25rem!important; } .sw-font-family-default {  } .sw-font-weight-default {  } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-text-color-default {  } .sw-font-size-3xl { font-size: 1.875rem!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-line-height-loose { line-height: 2!important; } .sw-width-xs { width: 20rem!important; } .sw-width-3xs { width: 12rem!important; } .sw-width-2xs { width: 16rem!important; } .sw-width-4xs { width: 10rem!important; }  #partner1 .slick-track {  display: flex;  align-items: center; } #partner1 .slick-slide {      display: flex;      align-items: center;      justify-content: center;     } ",
	"compiled_script": ";(function () {   appendStyle('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');  appendScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', startSlider);  startSlider();   function appendScript(filePath, callback) {   if ($('head script[src=\"' + filePath + '\"]').length > 0) {    if (callback) {       setTimeout(callback, 100);    }    return;   }    var ds = document.createElement('script');   ds.setAttribute(\"type\", \"text/javascript\");   ds.setAttribute(\"src\", filePath);    ds.onload = () => {    if (callback) callback();   };    document.head.appendChild(ds);  }   function appendStyle(filepath) {   if ($('head link[href=\"' + filepath + '\"]').length > 0)    return;    var ele = document.createElement('link');   ele.setAttribute(\"type\", \"text/css\");   ele.setAttribute(\"rel\", \"Stylesheet\");   ele.setAttribute(\"href\", filepath);   $('head').append(ele);  }    var isSlickStarted = false;  function startSlider(){   setTimeout(function () {    if($('#partner1 .slick-slider').slick) {     if(isSlickStarted) {      return;     }     isSlickStarted = true;     $('#partner1 .slick-slider').slick({      slidesToShow: 4,      slidesToScroll: 1,      arrows: false,      dots: false,      autoplay: true,      autoplaySpeed: 2000,      centerMode:true,      responsive: [       {        breakpoint: 500,        settings: {        slidesToShow: 1,        }       },       {        breakpoint: 767,        settings: {        slidesToShow: 2        }       },       {        breakpoint: 991,        settings: {         slidesToShow: 3        }       },      ]     });    }   }, 300);  }  $(window).on('resize', function() {   $('#partner1 .slick-slider').slick('resize');  }); })(); "
};
window['cta2'] = {};
const block_56a7fe0337924317fc29f47e6e3b97fc_defJson = {
	"id": "56a7fe03-3792-4317-fc29-f47e6e3b97fc",
	"version": "2.0.0",
	"hrid": "cta2",
	"name": "cta4",
	"title": "Call to action with a button on the right",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/cta4.png",
	"category": "CTA",
	"keywords": "call to action, cta, simple",
	"elements": {
		"definitions": {
			"button": {
				"tag": "a",
				"type": "button",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-m", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-none"]
				}, {
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-default"]
				}, {
					"name": "padding-left-right",
					"label": "Padding left/right",
					"isPrimary": true,
					"classes": ["sw-padding-left-l", "sw-padding-right-l"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-4xs", "sw-padding-bottom-4xs"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"isPrimary": true,
					"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-display-inline-block", "sw-margin-left-7xs", "sw-margin-right-7xs"]
				}],
				"label": "Button label",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "",
							"target": ""
						}
					}
				}
			}
		},
		"container": {
			"tag": "section",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-ffffff"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-2xl"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-2xl"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"box": {
			"tag": "div",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-none"]
			}, {
				"name": "border",
				"label": "Border",
				"isPrimary": true,
				"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
			}, {
				"name": "border-radius",
				"label": "Roundness",
				"isPrimary": true,
				"classes": ["sw-border-radius-none"]
			}, {
				"name": "shadow",
				"label": "Shadow",
				"isPrimary": true,
				"classes": ["sw-box-shadow-none"]
			}, {
				"name": "padding-top-bottom",
				"label": "Padding top/bottom",
				"isPrimary": true,
				"classes": ["sw-padding-top-none", "sw-padding-bottom-none"]
			}]
		},
		"backgroundImage": {
			"tag": "img",
			"primaryStyles": [{
				"name": "background-repeat",
				"label": "Repeat",
				"isPrimary": true,
				"classes": ["sw-background-repeat-no-repeat"]
			}, {
				"name": "background-size",
				"label": "Size",
				"isPrimary": true,
				"classes": ["sw-background-size-cover"]
			}, {
				"name": "background-position",
				"label": "Position",
				"isPrimary": true,
				"classes": ["sw-background-position-center"]
			}, {
				"name": "background-attachment",
				"label": "Behaviour",
				"isPrimary": true,
				"classes": ["sw-background-attachment-scroll"]
			}],
			"otherStyles": [],
			"src": ""
		},
		"header": {
			"tag": "h2",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-5xl", "sw-text-color-000000"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-semibold"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-4xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "No espere mas para hacer crecer su negocio"
		},
		"text": {
			"tag": "p",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-2xl", "sw-text-color-default"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-3xs"]
			}, {
				"name": "letter-spacing",
				"label": "Letter spacing",
				"isPrimary": true,
				"classes": ["sw-letter-spacing-normal"]
			}, {
				"name": "line-height",
				"label": "Line height",
				"isPrimary": true,
				"classes": ["sw-line-height-normal"]
			}],
			"value": "Registrese para conocer como podemos encontrar nuevas maneras de crecer"
		},
		"buttons": {
			"type": "array",
			"item_type": "#/elements/definitions/button",
			"items": [{
				"tag": "a",
				"type": "button",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-2xl"]
				}, {
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ffa500"]
				}, {
					"name": "padding-left-right",
					"label": "Padding left/right",
					"isPrimary": true,
					"classes": ["sw-padding-left-l", "sw-padding-right-l"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-4xs", "sw-padding-bottom-4xs"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"isPrimary": true,
					"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-display-inline-block", "sw-margin-left-7xs", "sw-margin-right-7xs"]
				}],
				"label": "Registro",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "/upps",
							"target": ""
						}
					},
					"action": "Open page > Upps "
				}
			}]
		}
	},
	"type": "static",
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": [],
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<section id=\"cta2\" style=\"\"    data-block-version=\"2.0.0\" data-block-id=\"56a7fe03-3792-4317-fc29-f47e6e3b97fc\"    data-block-updated=\"\"    class=\"cta4-56a7fe03-3792-4317-fc29-f47e6e3b97fc sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000   sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">   <div class=\"row sw-background-color-none sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-box-shadow-none sw-padding-top-none sw-padding-bottom-none \">    <div class=\"col-md-7 col-12 text-center text-md-left\">            <h2 class=\"sw-font-size-5xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \">      No espere mas para hacer crecer su negocio     </h2>                 <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-normal \">      Registrese para conocer como podemos encontrar nuevas maneras de crecer     </p>           </div>    <div class=\"col-md-5 col-12 d-flex justify-content-center align-items-center flex-wrap flex-column\">             <a data-element=\"button\" target=\"\" class=\"text-center sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-border-radius-2xl sw-background-color-ffa500 sw-padding-left-l sw-padding-right-l sw-padding-top-4xs sw-padding-bottom-4xs sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-letter-spacing-wider sw-text-decoration-no-underline hover:sw-text-decoration-no-underline hover:sw-box-shadow-m sw-margin-bottom-6xs sw-display-inline-block sw-margin-left-7xs sw-margin-right-7xs\" href=\"/upps\">        Registro       </a>          </div>   </div>  </div> </section> ",
	"compiled_style": ".sw-font-size-m { font-size: 1rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-border-radius-none { border-radius: 0rem!important; } .sw-background-color-default {  } .sw-padding-left-l { padding-left: 4rem!important; } .sw-padding-right-l { padding-right: 4rem!important; } .sw-padding-top-4xs { padding-top: 1rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } @media (hover: hover) { .hover\\:sw-box-shadow-m:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important; } } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-display-inline-block { display: inline-block!important; } .sw-margin-left-7xs { margin-left: 0.25rem!important; } .sw-margin-right-7xs { margin-right: 0.25rem!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-background-color-none { background-color: #none!important; } .sw-box-shadow-none { box-shadow: none!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-none { padding-bottom: 0rem!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-font-weight-default {  } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-border-radius-2xl { border-radius: 1rem!important; } .sw-background-color-ffa500 { background-color: #ffa500!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; }   @media (max-width: 576px) {  #cta2 a{   width: 80%;  } } ",
	"compiled_script": ""
};
window['footer1'] = {};
const block_733d9014dbb549beaaa2bd1e5c632569_defJson = {
	"id": "733d9014-dbb5-49be-aaa2-bd1e5c632569",
	"version": "1.0.0",
	"hrid": "footer1",
	"name": "footer1",
	"title": "Footer with links and secondary footer",
	"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/footer1.png",
	"category": "Footer",
	"keywords": "footer, simple",
	"elements": {
		"definitions": {
			"socialLink": {
				"tag": "a",
				"type": "social-icon",
				"value": "fab fa-facebook-f",
				"url": "https://facebook.com/mycompany",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Icon Size/Color",
					"isPrimary": true,
					"classes": ["sw-text-color-000000", "sw-font-size-m"]
				}, {
					"name": "width",
					"label": "Width",
					"isPrimary": true,
					"classes": ["sw-width-11xs"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"classes": ["sw-display-inline-block"]
				}]
			},
			"link": {
				"tag": "a",
				"type": "link",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-m", "sw-text-color-000000"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}],
				"value": "LINK NAME",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "",
							"target": ""
						}
					}
				}
			}
		},
		"container": {
			"tag": "footer",
			"type": "container",
			"primaryStyles": [{
				"name": "background-color",
				"label": "Background color",
				"isPrimary": true,
				"classes": ["sw-background-color-000000"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-2xs"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-none"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
			}, {
				"name": "border-bottom",
				"label": "Border bottom",
				"isPrimary": true,
				"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
			}]
		},
		"copyrightText": {
			"tag": "small",
			"type": "text",
			"primaryStyles": [{
				"name": "size-color",
				"label": "Text Size/Color",
				"isPrimary": true,
				"classes": ["sw-font-size-s", "sw-text-color-ffffff"]
			}, {
				"name": "font-family",
				"label": "Font family",
				"isPrimary": true,
				"classes": ["sw-font-family-default"]
			}, {
				"name": "font-weight",
				"label": "Font weight",
				"isPrimary": true,
				"classes": ["sw-font-weight-default"]
			}, {
				"name": "padding-top",
				"label": "Padding top",
				"isPrimary": true,
				"classes": ["sw-padding-top-none"]
			}, {
				"name": "padding-bottom",
				"label": "Padding bottom",
				"isPrimary": true,
				"classes": ["sw-padding-bottom-3xs"]
			}],
			"otherStyles": [{
				"name": "others",
				"label": "Others",
				"classes": ["sw-display-block"]
			}],
			"value": "MercadologisticoLatam. All rights reserved."
		},
		"horizontalLine": {
			"tag": "hr",
			"type": "horizontal-line",
			"primaryStyles": [{
				"name": "max-width",
				"label": "Width",
				"isPrimary": true,
				"classes": ["sw-margin-top-3xs", "sw-margin-bottom-3xs"]
			}, {
				"name": "border-top",
				"label": "Border top",
				"isPrimary": true,
				"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-cccccc"]
			}]
		},
		"logo": {
			"tag": "img",
			"type": "image-with-link",
			"primaryStyles": [{
				"name": "width",
				"label": "Width",
				"isPrimary": true,
				"classes": ["sw-width-3xs"]
			}],
			"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png",
			"alt": "Publish your designed things."
		},
		"links": {
			"type": "array",
			"item_type": "#/elements/definitions/link",
			"items": [{
				"tag": "a",
				"type": "link",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}],
				"value": "Nuestra Historia",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "/about-us",
							"target": ""
						}
					}
				}
			}, {
				"tag": "a",
				"type": "link",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}],
				"value": "El Equipo",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "",
							"target": ""
						}
					}
				}
			}, {
				"tag": "a",
				"type": "link",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}],
				"value": "Portfafolio",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "/portfolio",
							"target": ""
						}
					}
				}
			}, {
				"tag": "a",
				"type": "link",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}],
				"value": "Descubrimiento ",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "/newsletter",
							"target": ""
						}
					}
				}
			}, {
				"tag": "a",
				"type": "link",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}],
				"value": "Talento",
				"action": {
					"type": "navigate",
					"options": {
						"url": {
							"destination": "",
							"target": ""
						}
					}
				}
			}]
		},
		"socialLinks": {
			"type": "array",
			"item_type": "#/elements/definitions/socialLink",
			"items": [{
				"tag": "a",
				"type": "social-icon",
				"value": "fab fa-facebook-f",
				"url": "https://facebook.com/mycompany",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Icon Size/Color",
					"isPrimary": true,
					"classes": ["sw-text-color-ffffff", "sw-font-size-m"]
				}, {
					"name": "width",
					"label": "Width",
					"isPrimary": true,
					"classes": ["sw-width-11xs"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"classes": ["sw-display-inline-block"]
				}]
			}, {
				"tag": "a",
				"type": "social-icon",
				"value": "fab fa-twitter",
				"url": "https://twitter.com/mycompany",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Icon Size/Color",
					"isPrimary": true,
					"classes": ["sw-text-color-ffffff", "sw-font-size-m"]
				}, {
					"name": "width",
					"label": "Width",
					"isPrimary": true,
					"classes": ["sw-width-11xs"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"classes": ["sw-display-inline-block"]
				}]
			}, {
				"tag": "a",
				"type": "social-icon",
				"value": "fab fa-instagram",
				"url": "https://instagram.com/mycompany",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Icon Size/Color",
					"isPrimary": true,
					"classes": ["sw-text-color-ffffff", "sw-font-size-m"]
				}, {
					"name": "width",
					"label": "Width",
					"isPrimary": true,
					"classes": ["sw-width-11xs"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"classes": ["sw-display-inline-block"]
				}]
			}]
		}
	},
	"type": null,
	"collection": null,
	"enabled": "true",
	"order": "null",
	"updated": null,
	"visibility": {
		"userGroup": {
			"predefinedUserGroupType": "ALL_USERS",
			"customUserGroupIds": [],
			"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
		},
		"devices": null,
		"detailsPageRecordCondition": null
	},
	"settings": {},
	"container": null,
	"presets": null,
	"created_at": null,
	"compiled_markup": "<footer id=\"footer1\" class=\"footer1-733d9014-dbb5-49be-aaa2-bd1e5c632569 sw-background-color-000000 sw-padding-top-2xs sw-padding-bottom-none sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000 \"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-md-3 col-12 text-center text-md-left pb-md-2 pb-5\"><a href=\"/\"><img class=\"sw-width-3xs \"src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png\"alt=\"Publish your designed things.\"></a></div><div class=\"col-md-9 col-12 pb-2\"><div class=\"nav justify-content-center justify-content-md-end\"><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"/about-us\">Nuestra Historia</a><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"\">El Equipo</a><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"/portfolio\">Portfafolio</a><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"/newsletter\">Descubrimiento </a><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"\">Talento</a></div></div></div><div class=\"row\"><div class=\"col-12\"><hr class=\"sw-margin-top-3xs sw-margin-bottom-3xs sw-border-top-style-solid sw-border-top-width-xs sw-border-top-color-cccccc \"></div></div><div class=\"row\"><div class=\"col-7\"><small class=\"sw-font-size-s sw-text-color-ffffff sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-display-block\">MercadologisticoLatam. All rights reserved.</small></div><div class=\"col-5\"><div class=\"text-right\"><a href=\"https://facebook.com/mycompany\" target=\"_blank\" class=\"sw-text-color-ffffff sw-font-size-m sw-width-11xs sw-display-inline-block\"><i class=\"fab fa-facebook-f\"></i></a><a href=\"https://twitter.com/mycompany\" target=\"_blank\" class=\"sw-text-color-ffffff sw-font-size-m sw-width-11xs sw-display-inline-block\"><i class=\"fab fa-twitter\"></i></a><a href=\"https://instagram.com/mycompany\" target=\"_blank\" class=\"sw-text-color-ffffff sw-font-size-m sw-width-11xs sw-display-inline-block\"><i class=\"fab fa-instagram\"></i></a></div></div></div></div></div></footer>",
	"compiled_style": ".sw-text-color-000000 { color: #000000!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-width-11xs { width: 2rem!important; } .sw-display-inline-block { display: inline-block!important; } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-background-color-000000 { background-color: #000000!important; } .sw-padding-top-2xs { padding-top: 1.5rem!important; } .sw-padding-bottom-none { padding-bottom: 0rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-font-size-s { font-size: 0.875rem!important; } .sw-text-color-ffffff { color: #ffffff!important; } .sw-font-weight-default {  } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-display-block { display: block!important; } .sw-margin-top-3xs { margin-top: 1.25rem!important; } .sw-margin-bottom-3xs { margin-bottom: 1.25rem!important; } .sw-border-top-style-solid { border-top-style: solid!important; } .sw-border-top-color-cccccc { border-top-color: #cccccc!important; } .sw-width-3xs { width: 12rem!important; } .sw-font-size-xl { font-size: 1.25rem!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; }  ",
	"compiled_script": ""
};
SoftrPageRenderer.render({
	blocks: [{
		"id": "a696084b-8a7f-417f-beea-bef965bdb464",
		"version": "1.0.0",
		"hrid": "header1",
		"name": "header1",
		"title": "Header with sublinks and button",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/header1.png",
		"category": "Header",
		"keywords": "header, simple",
		"elements": {
			"definitions": {
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
					}],
					"value": "Link name",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				},
				"compositeLink": {
					"link": {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-000000"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Link name",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					},
					"subLinks": {
						"type": "array",
						"item_type": "#/elements/definitions/link",
						"items": []
					}
				},
				"button": {
					"tag": "a",
					"type": "button",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-default"]
					}, {
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-default"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-5xs", "sw-padding-bottom-5xs"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-display-inline-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-display-inline-block", "m:sw-margin-left-6xs"]
					}],
					"label": "Button label",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			},
			"sticky": true,
			"container": {
				"tag": "nav",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-000000"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-6xs"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-5xs"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-16a1c0"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-ffffff"]
				}]
			},
			"logo": {
				"tag": "img",
				"type": "image-with-link",
				"primaryStyles": [{
					"name": "width",
					"label": "Width",
					"isPrimary": true,
					"classes": ["sw-width-6xs"]
				}],
				"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png",
				"alt": "Publish your designed things."
			},
			"links": {
				"type": "array",
				"item_type": "#/elements/definitions/compositeLink",
				"items": [{
					"link": {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Homes",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/",
									"target": ""
								}
							}
						}
					},
					"subLinks": {
						"type": "array",
						"item_type": "#/elements/definitions/link",
						"items": []
					}
				}, {
					"link": {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Descubre",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/newsletter",
									"target": ""
								}
							}
						}
					},
					"subLinks": {
						"type": "array",
						"item_type": "#/elements/definitions/link",
						"items": []
					}
				}, {
					"link": {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Comunidades",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/comunidad",
									"target": ""
								}
							}
						}
					},
					"subLinks": {
						"type": "array",
						"item_type": "#/elements/definitions/link",
						"items": []
					}
				}, {
					"link": {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Directorio",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					},
					"subLinks": {
						"type": "array",
						"item_type": "#/elements/definitions/link",
						"items": []
					}
				}, {
					"link": {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Empleos",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": "_blank"
								}
							}
						}
					},
					"subLinks": {
						"type": "array",
						"item_type": "#/elements/definitions/link",
						"items": [{
							"tag": "a",
							"type": "link",
							"primaryStyles": [{
								"name": "size-color",
								"label": "Text Size/Color",
								"isPrimary": true,
								"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
							}, {
								"name": "font-family",
								"label": "Font family",
								"isPrimary": true,
								"classes": ["sw-font-family-didact_gothic"]
							}, {
								"name": "font-weight",
								"label": "Font weight",
								"isPrimary": true,
								"classes": ["sw-font-weight-normal"]
							}, {
								"name": "letter-spacing",
								"label": "Letter spacing",
								"isPrimary": true,
								"classes": ["sw-letter-spacing-wider"]
							}],
							"otherStyles": [{
								"name": "others",
								"label": "Others",
								"isPrimary": true,
								"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
							}],
							"value": "Ingrese empleo",
							"action": {
								"type": "navigate",
								"options": {
									"url": {
										"destination": "/add-jobs",
										"target": ""
									}
								}
							}
						}, {
							"tag": "a",
							"type": "link",
							"primaryStyles": [{
								"name": "size-color",
								"label": "Text Size/Color",
								"isPrimary": true,
								"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
							}, {
								"name": "font-family",
								"label": "Font family",
								"isPrimary": true,
								"classes": ["sw-font-family-didact_gothic"]
							}, {
								"name": "font-weight",
								"label": "Font weight",
								"isPrimary": true,
								"classes": ["sw-font-weight-normal"]
							}, {
								"name": "letter-spacing",
								"label": "Letter spacing",
								"isPrimary": true,
								"classes": ["sw-letter-spacing-wider"]
							}],
							"otherStyles": [{
								"name": "others",
								"label": "Others",
								"isPrimary": true,
								"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
							}],
							"value": "Encuentra empleo",
							"action": {
								"type": "navigate",
								"options": {
									"url": {
										"destination": "/bolsatrabajo",
										"target": ""
									}
								}
							}
						}]
					}
				}, {
					"link": {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Herramientas",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/herramientas-log-sticas",
									"target": ""
								}
							}
						}
					},
					"subLinks": {
						"type": "array",
						"item_type": "#/elements/definitions/link",
						"items": []
					}
				}, {
					"link": {
						"tag": "a",
						"type": "link",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-ffffff"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-didact_gothic"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-wider"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-padding-top-6xs", "sw-padding-bottom-6xs", "sw-padding-left-6xs", "sw-padding-right-xs", "hover:sw-text-decoration-no-underline", "active:sw-background-color-transparent"]
						}],
						"value": "Login",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/login",
									"target": ""
								}
							}
						}
					},
					"subLinks": {
						"type": "array",
						"item_type": "#/elements/definitions/link",
						"items": []
					}
				}]
			},
			"buttons": {
				"type": "array",
				"item_type": "#/elements/definitions/button",
				"items": []
			}
		},
		"type": null,
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": null,
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<nav id=\"header1\" class=\"header1-fixed-top navbar nav navbar-expand-lg navbar-light header1-a696084b-8a7f-417f-beea-bef965bdb464 sw-background-color-000000 sw-padding-top-6xs sw-padding-bottom-5xs sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-16a1c0 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-ffffff\"><div class=\"container\"><!-- Logo --><a class=\"navbar-brand\" href=\"/\"><img class=\"sw-width-6xs \" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png\" alt=\"Publish your designed things.\"></a><div class=\"desktop-menu text-center justify-content-end\"><ul class=\"navbar-nav  align-items-center flex-row  empty-buttons \"><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/\"   target=\"\"   >Inicio</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-0\"></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/newsletter\"   target=\"/newsletter\"   >Descubre</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-1\"></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/comunidad\"   target=\"\"   >Comunidades</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-2\"></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/directorio\"   target=\"\"   >Directorio</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-3\"></div></li><li class=\"nav-item dropdown\"><a class=\"position-relative dropdown-toggle sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"\"   target=\"_blank\"    id=\"navbarDropdown-4\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >Empleos</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-4\"><a target=\"\"   class=\"sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent dropdown-item navigate\"   href=\"/add-jobs\">Ingrese empleo</a><a target=\"\"   class=\"sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent dropdown-item navigate\"   href=\"/bolsatrabajo\">Encuentra empleo</a></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/herramientas-log-sticas\"   target=\"\"   >Herramientas</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-5\"></div></li><li class=\"nav-item \"><a class=\"position-relative  sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/login\"   target=\"\"   >Login</a><div class=\"border-0 dropdown-menu\" aria-labelledby=\"navbarDropdown-6\"></div></li></ul></div><!-- mobile toggle --><div class=\"toggle-button\"><span class=\"navbar-toggler-icon\"></span></div><div class=\"mob-menu-content\"><div class=\"mob-menu-header\"><a class=\"navbar-brand\" href=\"/\"><img class=\"sw-width-6xs \" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png\" alt=\"Publish your designed things.\"></a><span class=\"navbar-close\"> <i class=\"fa fa-fw fa-times\" aria-hidden=\"true\"></i></span></div><div class=\"mob-menu-body\"><div class=\"navigation-section\"><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/\">Home</a><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/newsletter\">Descubre</a><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/comunidad\">Comunidades</a><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/directorio\">Directorio</a><a class=\"position-relative link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   data-toggle=\"collapse\" href=\"#collapseExample-4\" role=\"button\"   aria-expanded=\"false\"   aria-controls=\"collapseExample-4\">Empleos<span class=\"arrow\"></span></a><div class=\"collapse\" id=\"collapseExample-4\"><a target=\"\"   class=\"sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent dropdown-item navigate\"   href=\"/add-jobs\">Ingrese empleo</a><a target=\"\"   class=\"sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent dropdown-item navigate\"   href=\"/bolsatrabajo\">Encuentra empleo</a></div><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/herramientas-log-sticas\">Herramientas</a><a class=\"link collapsed d-block sw-font-size-l sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-letter-spacing-wider sw-display-block sw-padding-top-6xs sw-padding-bottom-6xs sw-padding-left-6xs sw-padding-right-xs hover:sw-text-decoration-no-underline active:sw-background-color-transparent\"   href=\"/login\">Login</a></div><div class=\"buttons-section\"></div></div></div></div></nav>",
		"compiled_style": ".sw-font-size-m { font-size: 1rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-display-block { display: block!important; } .sw-padding-top-6xs { padding-top: 0.5rem!important; } .sw-padding-bottom-6xs { padding-bottom: 0.5rem!important; } .sw-padding-left-6xs { padding-left: 0.5rem!important; } .sw-padding-right-xs { padding-right: 2rem!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } .active\\:sw-background-color-transparent:active { background-color: transparent!important; } .sw-text-color-default {  } .sw-border-radius-default {  } .sw-background-color-default {  } .sw-padding-left-2xs { padding-left: 1.5rem!important; } .sw-padding-right-2xs { padding-right: 1.5rem!important; } .sw-padding-top-5xs { padding-top: 0.75rem!important; } .sw-padding-bottom-5xs { padding-bottom: 0.75rem!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-display-inline-block { display: inline-block!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-box-shadow-m:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important; } } @media (min-width: 768px) { .m\\:sw-margin-left-6xs { margin-left: 0.5rem!important; } } .sw-background-color-000000 { background-color: #000000!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-16a1c0 { border-top-color: #16a1c0!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-ffffff { border-bottom-color: #ffffff!important; } .sw-width-6xs { width: 7rem!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-ffffff { color: #ffffff!important; } .sw-font-family-didact_gothic { font-family: \"Didact Gothic\"!important; } .sw-font-weight-normal { font-weight: 400!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; }  .header1-fixed-top {  position: fixed;  top: 0;  right: 0;  left: 0;  z-index: 1030;  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1); }  #header1 .navbar-nav .dropdown-menu {  border: 0;  box-shadow: 0 1px 3px #00000014, 0 10px 40px -10px #00000059;  min-width: 180px; }  #header1 .navbar-nav .dropdown-menu a {  padding-left: 1.5rem !important; }  #header1 .toggle-button{  display: none; }  #header1 .mob-menu-header{  padding: 8px 24px;  display: flex;  justify-content: space-between; }  #header1 .mob-menu-body{  height: 90%;  position: relative; }  #header1 .navigation-section{  padding: 10px 24px; }  #header1 .navigation-section p a{  width: 100%; }  #header1 .buttons-section{      margin: 24px;      display: flex;      justify-content: flex-start; }  #header1 .arrow {  position: absolute;  right: 15px;  top: 5px;  display: inline-block;  width: 8px;  height: 8px;  border-left: 2px solid #29394c;  border-top: 2px solid #29394c;  transform: rotate(225deg);  transition: .2s linear;  margin-top: 10px; }  #header1 .link{  background: #f5f5f5;  padding: 3px 10px; }  #header1 .collapsed.link{  background: none; }  #header1 .collapsed .arrow {  transform: rotate(135deg); }  #header1 .buttons-section button{  margin-left: 0!important; }  #header1 .navbar-close i{  font-size: 24px;  margin-top: 10px;  margin-right: 3px;  cursor: pointer; }  #header1 .mob-menu-content{  display: none; } @media (max-width: 992px) {  #header1 .desktop-menu{   display: none;  }   #header1 .toggle-button{   display: block;  }   #header1 .mob-menu-content{   display: block;   position: fixed;   z-index: 5;   width: 100%;   height: 100%;   opacity: 0;   top:0;   left: 0;   background: #fff;   -webkit-transition: ease-in all 0.5s;   transition: ease-in all 0.5s;   -webkit-transform: translateX(200%);   -ms-transform: translateX(200%);   transform: translateX(200%);   }    #header1 .mob-menu-content.show{   display: block;   opacity: 1;   /*left: 0;*/   -webkit-transition: ease-in all 0.5s;   transition: ease-in all 0.5s;   -webkit-transform: translateX(0);   -ms-transform: translateX(0);   transform: translateX(0);   }   #header1 a.dropdown-item {   padding-left: 1.5rem !important;  } } @media (max-width: 414px) {  #header1 .buttons-section {       margin-left: 24px;       margin-right: 0;      } #header1 .buttons-section a {      margin-right: 10px;     } }  .navbar-dark .navbar-toggler-icon {  cursor: pointer;  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='https://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 1.0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\") !important; }  .navbar-light .navbar-toggler-icon {  cursor: pointer;  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='https://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 1.0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\") !important; }",
		"compiled_script": ";(function () {   $('.navbar-toggler-icon').click(function () {  $('.mob-menu-content').toggleClass('show');   });   $('.navbar-close').click(function () {  $('.mob-menu-content').toggleClass('show');   });   oneButtonView($(window));   $(window).on('resize', function () {  var win = $(this);  oneButtonView(win)   });    /* close the mobile menu */   $('.mob-menu-body a').click(function () {    if($(this).attr('aria-controls')) {     return;    }  $('.mob-menu-content').toggleClass('show');   });    var bgColor = window.getComputedStyle(document.querySelector('nav#header1'), null).getPropertyValue('background-color');   if (lightOrDark(bgColor) === 'dark') {  $('nav#header1').removeClass('navbar-light');  $('nav#header1').addClass('navbar-dark');   $('#header1 .navbar-close i').css('color', '#ffffff');   $('#header1 .arrow').css('border-left', '2px solid #ffffff');  $('#header1 .arrow').css('border-top', '2px solid #ffffff');   }    $('#header1 a.dropdown-item').hover(function () {  $(this).css('background-color', bgColor);   });    $('#header1 .navbar-nav .dropdown-menu').css('background-color', bgColor);   $('#header1 .mob-menu-content').css('background-color', bgColor);   $('#header1 .link').css('background-color', bgColor);     function lightOrDark(color) {   /* Variables for red, green, blue values */  var r, g, b, hsp;   /* Check the format of the color, HEX or RGB? */  if (color.match(/^rgb/)) {     /* If HEX --> store the red, green, blue values in separate variables */    color = color.match(/^rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*(\\d+(?:\\.\\d+)?))?\\)$/);     r = color[1];    g = color[2];    b = color[3];  }  else {     /* If RGB --> Convert it to HEX: https://gist.github.com/983661 */    color = +(\"0x\" + color.slice(1).replace(   color.length < 5 && /./g, '$&$&'));     r = color >> 16;    g = color >> 8 & 255;    b = color & 255;  }   /* HSP (Highly Sensitive Poo) equation from https://alienryderflex.com/hsp.html */  hsp = Math.sqrt(    0.299 * (r * r) +    0.587 * (g * g) +    0.114 * (b * b)  );   /* Using the HSP value, determine whether the color is light or dark */  if (hsp > 127.5) {     return 'light';  }  else {     return 'dark';  }   }    function oneButtonView(win) {  if (win.width() <= 414) {    if ($('.navbar-nav').hasClass('empty-links') && $('.navbar-nav').hasClass('one-button')) {   $('.desktop-menu').hide();   $('.toggle-button').show();    }  }  if (win.width() <= 992 && win.width() > 414) {    if ($('.navbar-nav').hasClass('empty-links') && $('.navbar-nav').hasClass('one-button')) {   $('.desktop-menu').show();   $('.toggle-button').hide();    }  }  if (win.width() <= 992) {    if ($('.navbar-nav').hasClass('empty-links') && $('.navbar-nav').hasClass('empty-buttons')) {   $('.desktop-menu').show();   $('.toggle-button').hide();    }  }   }  })();  "
	}, {
		"id": "e8a493e4-3dd5-4f84-af43-157c9018f122",
		"version": "1.0.0",
		"hrid": "hero1",
		"name": "hero1",
		"title": "Hero with call to action",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/hero1.png",
		"category": "Hero",
		"keywords": "hero, simple",
		"elements": {
			"imagePosition": ["LEFT", "RIGHT", "TOP", "BOTTOM"],
			"selectedImagePosition": "BOTTOM",
			"definitions": {
				"button": {
					"tag": "a",
					"type": "button",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-full"]
					}, {
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-default"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-s", "sw-padding-right-s"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-5xs", "sw-padding-bottom-5xs"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-margin-right-5xs", "sw-display-inline-block"]
					}],
					"label": "Button label",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			},
			"container": {
				"tag": "header",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ffffff"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-6xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xs"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-m", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"header": {
				"tag": "h1",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-5xl", "sw-text-color-ffffff"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-didact_gothic"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-normal"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-compact"]
				}],
				"value": "Facilitamos la Digitalización del comercio para automatizar y crecer"
			},
			"text": {
				"tag": "p",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-3xl", "sw-text-color-ffffff"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-didact_gothic"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-normal"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-4xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wide"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-tight"]
				}],
				"value": "MercadoLogistico  ayuda a  empresas de todos los tamaños a digitalizar procesos, automatizar la facturación y escalar sin límites."
			},
			"buttons": {
				"type": "array",
				"item_type": "#/elements/definitions/button",
				"items": [{
					"tag": "a",
					"type": "button",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-didact_gothic"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-2xl"]
					}, {
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-ff8600"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-s", "sw-padding-right-s"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-4xs", "sw-padding-bottom-4xs"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-none", "sw-border-color-000000"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-widest"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-margin-right-5xs", "sw-display-inline-block"]
					}],
					"label": "Suscríbete al Newsletter",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "https://form.jotform.com/220487170598666",
								"target": ""
							}
						},
						"action": "Open external url > https://form.jotform.com/220487170598666"
					}
				}]
			},
			"image": {
				"tag": "img",
				"primaryStyles": [{
					"name": "percentage-width",
					"label": "Size",
					"isPrimary": true,
					"classes": ["sw-percentage-width-full"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xl", "sw-border-color-000000"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-2xl"]
				}],
				"otherStyles": [],
				"src": "",
				"alt": "Image alt"
			},
			"backgroundImage": {
				"tag": "img",
				"primaryStyles": [{
					"name": "background-repeat",
					"label": "Repeat",
					"isPrimary": true,
					"classes": ["sw-background-repeat-no-repeat"]
				}, {
					"name": "background-size",
					"label": "Size",
					"isPrimary": true,
					"classes": ["sw-background-size-cover"]
				}, {
					"name": "background-position",
					"label": "Position",
					"isPrimary": true,
					"classes": ["sw-background-position-center"]
				}, {
					"name": "background-attachment",
					"label": "Behaviour",
					"isPrimary": true,
					"classes": ["sw-background-attachment-local"]
				}],
				"otherStyles": [],
				"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/d3376b32-45a5-448d-96db-8b7b607448bf.png"
			}
		},
		"type": null,
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": null,
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<header id=\"hero1\" style=\"background-image: url(https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/d3376b32-45a5-448d-96db-8b7b607448bf.png);\"class=\"hero1-e8a493e4-3dd5-4f84-af43-157c9018f122 sw-background-color-ffffff sw-padding-top-6xl sw-padding-bottom-2xs sw-border-top-style-none sw-border-top-width-m sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-local \"><div class=\"container\"><div class=\"row align-items-center text-center pb-5\"><div class=\"col-lg-2\"></div><div class=\"col-lg-8\"><h1 class=\"sw-font-size-5xl sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-padding-top-none sw-padding-bottom-2xs sw-letter-spacing-wider sw-line-height-compact \">Facilitamos la Digitalización del comercio para automatizar y crecer</h1><p class=\"sw-font-size-3xl sw-text-color-ffffff sw-font-family-didact_gothic sw-font-weight-normal sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-wide sw-line-height-tight \">MercadoLogistico  ayuda a  empresas de todos los tamaños a digitalizar procesos, automatizar la facturación y escalar sin límites.</p><div class=\"d-flex justify-content-center flex-wrap\"><a class=\"sw-font-size-2xl sw-text-color-default sw-font-family-didact_gothic sw-font-weight-semibold sw-border-radius-2xl sw-background-color-ff8600 sw-padding-left-s sw-padding-right-s sw-padding-top-4xs sw-padding-bottom-4xs sw-border-style-none sw-border-width-none sw-border-color-000000 sw-letter-spacing-widest sw-text-decoration-no-underline hover:sw-text-decoration-no-underline hover:sw-box-shadow-m sw-margin-bottom-6xs sw-margin-right-5xs sw-display-inline-block open-newsletter-modal\" href=\"javascript:void(0);\" role=\"button\">Suscríbete al Newsletter</a></div></div><div class=\"col-lg-2\"></div></div></div></header>",
		"compiled_style": ".sw-font-size-m { font-size: 1rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-border-radius-full { border-radius: 9999rem!important; } .sw-background-color-default {  } .sw-padding-left-s { padding-left: 2.5rem!important; } .sw-padding-right-s { padding-right: 2.5rem!important; } .sw-padding-top-5xs { padding-top: 0.75rem!important; } .sw-padding-bottom-5xs { padding-bottom: 0.75rem!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } @media (hover: hover) { .hover\\:sw-box-shadow-m:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important; } } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-margin-right-5xs { margin-right: 0.75rem!important; } .sw-display-inline-block { display: inline-block!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-6xl { padding-top: 14rem!important; } .sw-padding-bottom-2xs { padding-bottom: 1.5rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-m { border-top-width: 3px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-ffffff { color: #ffffff!important; } .sw-font-family-didact_gothic { font-family: \"Didact Gothic\"!important; } .sw-font-weight-normal { font-weight: 400!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-size-3xl { font-size: 1.875rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-letter-spacing-wide { letter-spacing: 0.025rem!important; } .sw-line-height-tight { line-height: 1.25!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-border-radius-2xl { border-radius: 1rem!important; } .sw-background-color-ff8600 { background-color: #ff8600!important; } .sw-padding-top-4xs { padding-top: 1rem!important; } .sw-border-width-none { border-width: 0px!important; } .sw-letter-spacing-widest { letter-spacing: 0.1rem!important; } .sw-percentage-width-full { width: 100%!important; } .sw-border-width-xl { border-width: 6px!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-local { background-attachment: local!important; }  ",
		"compiled_script": ""
	}, {
		"id": "fa5d1fb9-6ffa-47b4-bcde-3bf27b760bb3",
		"version": "2.0.0",
		"hrid": "feature-grid8",
		"name": "feature-grid7",
		"title": "Feature grid with three column view",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature-grid7.png",
		"category": "Feature Grid",
		"keywords": "feature grid, simple",
		"elements": {
			"definitions": {
				"feature": {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-shield-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs"]
						}],
						"value": "Feature title"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Feature description"
					},
					"link": {
						"tag": "a",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-000000"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-light"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-text-decoration-underline"]
						}],
						"value": "Read more...",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}
			},
			"container": {
				"tag": "section",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ffffff"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-2xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xl"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"backgroundImage": {
				"tag": "img",
				"primaryStyles": [{
					"name": "background-repeat",
					"label": "Repeat",
					"isPrimary": true,
					"classes": ["sw-background-repeat-no-repeat"]
				}, {
					"name": "background-size",
					"label": "Size",
					"isPrimary": true,
					"classes": ["sw-background-size-cover"]
				}, {
					"name": "background-position",
					"label": "Position",
					"isPrimary": true,
					"classes": ["sw-background-position-center"]
				}, {
					"name": "background-attachment",
					"label": "Behaviour",
					"isPrimary": true,
					"classes": ["sw-background-attachment-scroll"]
				}],
				"otherStyles": [],
				"src": ""
			},
			"header": {
				"tag": "h2",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-4xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-4xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": ""
			},
			"text": {
				"tag": "p",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-3xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": ""
			},
			"features": {
				"type": "array",
				"minItems": 0,
				"maxItems": 1024,
				"item_type": "#/elements/definitions/feature",
				"items": [{
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-7xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-clock fa-fw",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-3xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs"]
						}],
						"value": "Ahorre Tiempo"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Empiece a ahorrar tiempo y dinero desde el registro"
					},
					"link": {
						"tag": "a",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-000000"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-light"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-text-decoration-underline"]
						}],
						"value": "",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						},
						"src": ""
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-map-marked-alt fa-fw",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-3xl", "sw-text-color-000000"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs"]
						}],
						"value": "Ubique Asociados"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "La plataforma con mayor alance del mercado, potenciada por sus asociados"
					},
					"link": {
						"tag": "a",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-000000"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-light"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-text-decoration-underline"]
						}],
						"value": "",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						},
						"src": ""
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-coins fa-fw",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-3xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs"]
						}],
						"value": "Mejore Ingresos"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Genere nuevos ingresos en el menor tiempo"
					},
					"link": {
						"tag": "a",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-000000"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-light"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-text-decoration-underline"]
						}],
						"value": "",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						},
						"src": ""
					}
				}]
			}
		},
		"type": "static",
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": [],
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<section id=\"feature-grid8\"    data-block-version=\"2.0.0\" data-block-id=\"fa5d1fb9-6ffa-47b4-bcde-3bf27b760bb3\"    data-block-updated=\"\"  style=\"\"    class=\"feature-grid7-fa5d1fb9-6ffa-47b4-bcde-3bf27b760bb3 sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">    <!-- Header -->       <div class=\"row gap-y text-md-left text-center\">       <div class=\"col-md-4  pt-4 pb-4 d-flex flex-column justify-content-between\">     <div>            <p class=\"pt-5 pt-sm-0 sw-font-size-7xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-clock fa-fw\"></i>      </p>                  <h6 class=\"sw-font-size-3xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-5xs\">       Ahorre Tiempo      </h6>      <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">       Empiece a ahorrar tiempo y dinero desde el registro      </p>     </div>     <div>      <a target=\"\" href=\"\" class=\"sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-text-decoration-underline\">             </a>     </div>    </div>       <div class=\"col-md-4  pt-4 pb-4 d-flex flex-column justify-content-between\">     <div>            <p class=\"pt-5 pt-sm-0 sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-map-marked-alt fa-fw\"></i>      </p>                  <h6 class=\"sw-font-size-3xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-5xs\">       Ubique Asociados      </h6>      <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">       La plataforma con mayor alance del mercado, potenciada por sus asociados      </p>     </div>     <div>      <a target=\"\" href=\"\" class=\"sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-text-decoration-underline\">             </a>     </div>    </div>       <div class=\"col-md-4  pt-4 pb-4 d-flex flex-column justify-content-between\">     <div>            <p class=\"pt-5 pt-sm-0 sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-coins fa-fw\"></i>      </p>                  <h6 class=\"sw-font-size-3xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-5xs\">       Mejore Ingresos      </h6>      <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">       Genere nuevos ingresos en el menor tiempo      </p>     </div>     <div>      <a target=\"\" href=\"\" class=\"sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-text-decoration-underline\">             </a>     </div>    </div>      </div>   </div> </section> ",
		"compiled_style": ".sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-width-10xs { width: 3rem!important; } .sw-margin-bottom-2xs { margin-bottom: 1.5rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-margin-bottom-5xs { margin-bottom: 0.75rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-font-weight-default {  } .sw-line-height-normal { line-height: 1.5!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-weight-light { font-weight: 300!important; } .sw-text-decoration-underline { text-decoration: underline!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-font-size-4xl { font-size: 2.25rem!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-font-size-xl { font-size: 1.25rem!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-font-size-7xl { font-size: 5rem!important; } .sw-font-size-3xl { font-size: 1.875rem!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-font-size-6xl { font-size: 4rem!important; }  ",
		"compiled_script": ""
	}, {
		"id": "b54f45d3-ec27-47bb-b8d2-98217bcf0df9",
		"version": "2.0.0",
		"hrid": "feature1",
		"name": "feature7",
		"title": "Feature with horizontal tabs",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature7.png",
		"category": "Feature",
		"keywords": "feature, product demo",
		"elements": {
			"definitions": {
				"feature": {
					"box": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-ebedfb"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-s"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
						}]
					},
					"featureBoxTemp": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-fff"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-l"]
						}, {
							"name": "margin-top-bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
						}]
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-050038"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-medium"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
						}, {
							"name": "padding-left-right",
							"label": "Padding left/right",
							"isPrimary": true,
							"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-top-none"]
						}],
						"value": "Feature title"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "padding-top",
							"label": "Padding top",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs"]
						}, {
							"name": "padding-bottom",
							"label": "Padding bottom",
							"isPrimary": true,
							"classes": ["sw-padding-bottom-xs"]
						}],
						"value": "Feature description"
					},
					"image": {
						"tag": "img",
						"primaryStyles": [{
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-l"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-none"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": []
						}],
						"src": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature4_pic0.png",
						"alt": ""
					},
					"imageUrl": {
						"src": ""
					}
				}
			},
			"container": {
				"tag": "section",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-65b7cc"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-2xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xl"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"header": {
				"tag": "h2",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-bold"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-none"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "¿Cómo empiezo?"
			},
			"text": {
				"tag": "p",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-s"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "Para empezar a ser parte de Mercado logístico, sigue estos 4 simples pasos"
			},
			"backgroundImage": {
				"tag": "img",
				"primaryStyles": [{
					"name": "background-repeat",
					"label": "Repeat",
					"isPrimary": true,
					"classes": ["sw-background-repeat-no-repeat"]
				}, {
					"name": "background-size",
					"label": "Size",
					"isPrimary": true,
					"classes": ["sw-background-size-cover"]
				}, {
					"name": "background-position",
					"label": "Position",
					"isPrimary": true,
					"classes": ["sw-background-position-center"]
				}, {
					"name": "background-attachment",
					"label": "Behaviour",
					"isPrimary": true,
					"classes": ["sw-background-attachment-scroll"]
				}],
				"otherStyles": [],
				"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/fa31f74b-0d34-483a-bf3e-3390f02d29f6.jpeg"
			},
			"features": {
				"type": "array",
				"minItems": 1,
				"maxItems": 1024,
				"item_type": "#/elements/definitions/feature",
				"items": [{
					"box": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-ebedfb"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-s"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
						}]
					},
					"featureBoxTemp": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-fff"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-l"]
						}, {
							"name": "margin-top-bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
						}]
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-050038"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-medium"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
						}, {
							"name": "padding-left-right",
							"label": "Padding left/right",
							"isPrimary": true,
							"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-top-none"]
						}],
						"value": "Registrate en la Comunidad"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "padding-top",
							"label": "Padding top",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs"]
						}, {
							"name": "padding-bottom",
							"label": "Padding bottom",
							"isPrimary": true,
							"classes": ["sw-padding-bottom-xs"]
						}],
						"value": "Llena el formulario con información minima para crear tu perfil en la comunidad. Mientras mas información compartas, será mas facil encontrarte."
					},
					"image": {
						"tag": "img",
						"primaryStyles": [{
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-l"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-none"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": []
						}],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/a9fe3b3f-960a-4500-b742-24f044c91645.jpeg",
						"alt": ""
					},
					"imageUrl": {
						"src": ""
					}
				}, {
					"box": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-ebedfb"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-s"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
						}]
					},
					"featureBoxTemp": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-fff"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-l"]
						}, {
							"name": "margin-top-bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
						}]
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-050038"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-medium"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
						}, {
							"name": "padding-left-right",
							"label": "Padding left/right",
							"isPrimary": true,
							"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-top-none"]
						}],
						"value": "Busca Asociados o oportunidades"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "padding-top",
							"label": "Padding top",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs"]
						}, {
							"name": "padding-bottom",
							"label": "Padding bottom",
							"isPrimary": true,
							"classes": ["sw-padding-bottom-xs"]
						}],
						"value": "Utiliza nuestras herramientas para buscar en el directorio de la comunidad por asociados para los servicios que estas buscando."
					},
					"image": {
						"tag": "img",
						"primaryStyles": [{
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-l"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-none"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": []
						}],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/3ba4dc0d-bcd8-47a9-80ec-8b4cf67c6c9c.jpeg",
						"alt": ""
					},
					"imageUrl": {
						"src": ""
					}
				}, {
					"box": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-ebedfb"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-s"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
						}]
					},
					"featureBoxTemp": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-fff"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-l"]
						}, {
							"name": "margin-top-bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
						}]
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-050038"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-medium"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
						}, {
							"name": "padding-left-right",
							"label": "Padding left/right",
							"isPrimary": true,
							"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-top-none"]
						}],
						"value": "Conecta con la Comunidad"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "padding-top",
							"label": "Padding top",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs"]
						}, {
							"name": "padding-bottom",
							"label": "Padding bottom",
							"isPrimary": true,
							"classes": ["sw-padding-bottom-xs"]
						}],
						"value": "Toma contacto solicita cotizaciones, revisa el feedback del asociado, crea una conexión."
					},
					"image": {
						"tag": "img",
						"primaryStyles": [{
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-l"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-none"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": []
						}],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9b5fe2f6-d0a5-445a-95e7-494c1711d82f.png",
						"alt": ""
					},
					"imageUrl": {
						"src": ""
					}
				}, {
					"box": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-ebedfb"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-s"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-l", "sw-padding-bottom-l"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-padding-left-xl", "sw-padding-right-xl"]
						}]
					},
					"featureBoxTemp": {
						"tag": "div",
						"type": "container",
						"primaryStyles": [{
							"name": "background-color",
							"label": "Background color",
							"isPrimary": true,
							"classes": ["sw-background-color-fff"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-l"]
						}, {
							"name": "margin-top-bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-6xs"]
						}]
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-050038"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-medium"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "padding-top-bottom",
							"label": "Padding top/bottom",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs", "sw-padding-bottom-2xs"]
						}, {
							"name": "padding-left-right",
							"label": "Padding left/right",
							"isPrimary": true,
							"classes": ["sw-padding-left-2xs", "sw-padding-right-2xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-top-none"]
						}],
						"value": "Califica el servicio"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}, {
							"name": "padding-top",
							"label": "Padding top",
							"isPrimary": true,
							"classes": ["sw-padding-top-2xs"]
						}, {
							"name": "padding-bottom",
							"label": "Padding bottom",
							"isPrimary": true,
							"classes": ["sw-padding-bottom-xs"]
						}],
						"value": "Nuestra comunidad depende de la reputaciónd e los asociados, mientras mas referencias tengas, mas negocio podrás realizar!."
					},
					"image": {
						"tag": "img",
						"primaryStyles": [{
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-l"]
						}, {
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"isPrimary": true,
							"classes": ["sw-border-radius-none"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": []
						}],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/6ab19740-2654-4a01-b58a-7b5bbc78514c.jpeg",
						"alt": ""
					},
					"imageUrl": {
						"src": ""
					}
				}]
			}
		},
		"type": "static",
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": [],
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<section id=\"feature1\"    data-block-version=\"2.0.0\" data-block-id=\"b54f45d3-ec27-47bb-b8d2-98217bcf0df9\"    data-block-updated=\"\"  style=\"background-image: url(https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/fa31f74b-0d34-483a-bf3e-3390f02d29f6.jpeg);\"    class=\"feature7-b54f45d3-ec27-47bb-b8d2-98217bcf0df9 sw-background-color-65b7cc sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div id=\"feature1-container\" class=\"container\">   <div class=\"col-12 text-center\">        <h2 class=\"sw-font-size-5xl sw-text-color-65b7cc sw-font-family-default sw-font-weight-bold sw-padding-top-none sw-padding-bottom-none sw-letter-spacing-wider sw-line-height-normal \">     ¿Cómo empiezo?    </h2>              <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-s sw-letter-spacing-wider sw-line-height-normal \">      Para empezar a ser parte de Mercado logístico, sigue estos 4 simples pasos     </p>       </div>   <div class=\"row align-items-center\">    <div class=\"col-lg-12 text-center text-lg-left pt-lg-0\">     <div class=\"d-flex justify-content-center align-items-center flex-wrap\">            <div class=\"s-feature-box text-center position-relative sw-background-color-fff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-margin-top-none sw-margin-bottom-6xs \"        data-desc-classes=\"m-lg-0 mb-md-3 d-xs-none d-sm-block px-4 sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \"        data-index=\"0\" data-container=\"container sw-background-color-ebedfb sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-s sw-padding-top-l sw-padding-bottom-l sw-padding-left-xl sw-padding-right-xl\" data-description=\"Llena el formulario con información minima para crear tu perfil en la comunidad. Mientras mas información compartas, será mas facil encontrarte.\" data-img-url=\"\" data-img=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/a9fe3b3f-960a-4500-b742-24f044c91645.jpeg\" data-img-alt=\"\" data-img-classes=\"sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block\">       <div class=\"info\">        <h6 class=\"m-0 p-0 title sw-font-size-2xl sw-text-color-050038 sw-font-family-default sw-font-weight-medium sw-letter-spacing-normal sw-line-height-normal sw-padding-top-2xs sw-padding-bottom-2xs sw-padding-left-2xs sw-padding-right-2xs sw-margin-top-none\">         Registrate en la Comunidad        </h6>        <p  class=\"my-3 d-sm-block d-md-none description sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \">         Llena el formulario con información minima para crear tu perfil en la comunidad. Mientras mas información compartas, será mas facil encontrarte.        </p>                 <img class=\"mobile-img sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto\" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/a9fe3b3f-960a-4500-b742-24f044c91645.jpeg\"  alt=\"\">               </div>       <div class=\"progress-bar  \"></div>      </div>            <div class=\"s-feature-box text-center position-relative sw-background-color-fff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-margin-top-none sw-margin-bottom-6xs \"        data-desc-classes=\"m-lg-0 mb-md-3 d-xs-none d-sm-block px-4 sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \"        data-index=\"1\" data-container=\"container sw-background-color-ebedfb sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-s sw-padding-top-l sw-padding-bottom-l sw-padding-left-xl sw-padding-right-xl\" data-description=\"Utiliza nuestras herramientas para buscar en el directorio de la comunidad por asociados para los servicios que estas buscando.\" data-img-url=\"\" data-img=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/3ba4dc0d-bcd8-47a9-80ec-8b4cf67c6c9c.jpeg\" data-img-alt=\"\" data-img-classes=\"sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block\">       <div class=\"info\">        <h6 class=\"m-0 p-0 title sw-font-size-2xl sw-text-color-050038 sw-font-family-default sw-font-weight-medium sw-letter-spacing-normal sw-line-height-normal sw-padding-top-2xs sw-padding-bottom-2xs sw-padding-left-2xs sw-padding-right-2xs sw-margin-top-none\">         Busca Asociados o oportunidades        </h6>        <p  class=\"my-3 d-sm-block d-md-none description sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \">         Utiliza nuestras herramientas para buscar en el directorio de la comunidad por asociados para los servicios que estas buscando.        </p>                 <img class=\"mobile-img sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto\" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/3ba4dc0d-bcd8-47a9-80ec-8b4cf67c6c9c.jpeg\"  alt=\"\">               </div>       <div class=\"progress-bar  \"></div>      </div>            <div class=\"s-feature-box text-center position-relative sw-background-color-fff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-margin-top-none sw-margin-bottom-6xs \"        data-desc-classes=\"m-lg-0 mb-md-3 d-xs-none d-sm-block px-4 sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \"        data-index=\"2\" data-container=\"container sw-background-color-ebedfb sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-s sw-padding-top-l sw-padding-bottom-l sw-padding-left-xl sw-padding-right-xl\" data-description=\"Toma contacto solicita cotizaciones, revisa el feedback del asociado, crea una conexión.\" data-img-url=\"\" data-img=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9b5fe2f6-d0a5-445a-95e7-494c1711d82f.png\" data-img-alt=\"\" data-img-classes=\"sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block\">       <div class=\"info\">        <h6 class=\"m-0 p-0 title sw-font-size-2xl sw-text-color-050038 sw-font-family-default sw-font-weight-medium sw-letter-spacing-normal sw-line-height-normal sw-padding-top-2xs sw-padding-bottom-2xs sw-padding-left-2xs sw-padding-right-2xs sw-margin-top-none\">         Conecta con la Comunidad        </h6>        <p  class=\"my-3 d-sm-block d-md-none description sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \">         Toma contacto solicita cotizaciones, revisa el feedback del asociado, crea una conexión.        </p>                 <img class=\"mobile-img sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto\" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9b5fe2f6-d0a5-445a-95e7-494c1711d82f.png\"  alt=\"\">               </div>       <div class=\"progress-bar  \"></div>      </div>            <div class=\"s-feature-box text-center position-relative sw-background-color-fff sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-l sw-margin-top-none sw-margin-bottom-6xs \"        data-desc-classes=\"m-lg-0 mb-md-3 d-xs-none d-sm-block px-4 sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \"        data-index=\"3\" data-container=\"container sw-background-color-ebedfb sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-s sw-padding-top-l sw-padding-bottom-l sw-padding-left-xl sw-padding-right-xl\" data-description=\"Nuestra comunidad depende de la reputaciónd e los asociados, mientras mas referencias tengas, mas negocio podrás realizar!.\" data-img-url=\"\" data-img=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/6ab19740-2654-4a01-b58a-7b5bbc78514c.jpeg\" data-img-alt=\"\" data-img-classes=\"sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto d-block\">       <div class=\"info\">        <h6 class=\"m-0 p-0 title sw-font-size-2xl sw-text-color-050038 sw-font-family-default sw-font-weight-medium sw-letter-spacing-normal sw-line-height-normal sw-padding-top-2xs sw-padding-bottom-2xs sw-padding-left-2xs sw-padding-right-2xs sw-margin-top-none\">         Califica el servicio        </h6>        <p  class=\"my-3 d-sm-block d-md-none description sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal sw-padding-top-2xs sw-padding-bottom-xs \">         Nuestra comunidad depende de la reputaciónd e los asociados, mientras mas referencias tengas, mas negocio podrás realizar!.        </p>                 <img class=\"mobile-img sw-width-l sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none  mx-auto\" src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/6ab19740-2654-4a01-b58a-7b5bbc78514c.jpeg\"  alt=\"\">               </div>       <div class=\"progress-bar  \"></div>      </div>           </div>    </div>    <div class=\"col-lg-12 text-center\">     <p id=\"feature1-description-block\"  class=\"\"></p>    </div>    <div class=\"image-container col-lg-12  d-xs-none d-sm-block d-lg-block text-center\">     <a href=\"\" target=\"_blank\" id=\"image-url\" class=\"w-100 d-inline-block\">      <img id=\"feature1-display-img\" class=\"\">     </a>    </div>   </div>  </div> </section> ",
		"compiled_style": ".sw-background-color-ebedfb { background-color: #ebedfb!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-border-radius-s { border-radius: 0.125rem!important; } .sw-padding-top-l { padding-top: 4rem!important; } .sw-padding-bottom-l { padding-bottom: 4rem!important; } .sw-padding-left-xl { padding-left: 5rem!important; } .sw-padding-right-xl { padding-right: 5rem!important; } .sw-background-color-fff { background-color: #fff!important; } .sw-border-radius-l { border-radius: 0.5rem!important; } .sw-margin-top-none { margin-top: 0rem!important; } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-050038 { color: #050038!important; } .sw-font-family-default {  } .sw-font-weight-medium { font-weight: 500!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-padding-top-2xs { padding-top: 1.5rem!important; } .sw-padding-bottom-2xs { padding-bottom: 1.5rem!important; } .sw-padding-left-2xs { padding-left: 1.5rem!important; } .sw-padding-right-2xs { padding-right: 1.5rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-text-color-default {  } .sw-font-weight-default {  } .sw-padding-bottom-xs { padding-bottom: 2rem!important; } .sw-width-l { width: 32rem!important; } .sw-border-radius-none { border-radius: 0rem!important; } .sw-background-color-65b7cc { background-color: #65b7cc!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-font-weight-bold { font-weight: 700!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-none { padding-bottom: 0rem!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-font-weight-semibold { font-weight: 600!important; } .sw-padding-bottom-s { padding-bottom: 2.5rem!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; }  #feature1 .s-feature-box{  cursor: pointer;  display: flex;  justify-content: center;  align-items: center;  flex-flow: wrap;  margin: 8px 10px;  overflow: hidden;  width: 180px; } #feature1 #feature1-container{  transition: .3s;        }  #feature1 .s-feature-box:first-child {     margin-left: 0 ;     } #feature1 .s-feature-box:last-child {      margin-right: 0 ;     } #feature1 .s-feature-box:not(.active) {      opacity: .55;     } #feature1 .s-feature-box:hover .title {    color: #2f56d4; }  #feature1 .s-feature-box.active .progress-bar{    display: block!important; } #feature1 .s-feature-box .progress-bar{      display: none;      position: absolute;      bottom: 0;      left: 0;      height: 2px;      animation-name: progress-animation;      animation-timing-function: linear;      animation-direction: forwards;      animation-fill-mode: forwards;     } @keyframes progress-animation{  from { width: 0 }  to { width:  100%  } } #feature1 .mobile-img {      display: none;     } @media  (max-width: 991px) {  #feature1 #feature1-display-img {       width: 100% !important;      } } @media (max-width: 767px) {   #feature1-display-img,  #feature1 .s-feature-box.active .progress-bar{   display: none!important;  }   #feature1 .s-feature-box{    width: inherit;    opacity: 1!important;    margin: 8px 0;      }   #feature1 #feature1-container{       padding: 0 15px!important;      }   #feature1 .mobile-img {       display: block!important;       width: 100% !important;      } }  ",
		"compiled_script": ";(function () {  let sliderInterval;  let index = 0;  let slideTime = 5000;  let loading;   const feature = '#feature1 .s-feature-box';  const progress = '#feature1 .progress-bar';  if ($(window).width() > 767) {   heightCalc();  }  if (!isInStudio()) {   checkScreenSize();  } else {   activateSlide();  }   function checkScreenSize() {   if ($(window).width() > 767) {    init();   } else {    if (loading) {     clearInterval(loading)    }    $('#feature1 .s-feature-box').addClass('active');   }  }   function isInStudio() {   return window.location.href.startsWith('https://localhost:') ||    window.location.href.includes('https://studio-staging') ||    window.location.href.startsWith('https://studio.softr.io/')    }   function init() {   startSliding();   if (document.querySelector('#feature1 .s-feature-box')) {    const featureBGColor = window.getComputedStyle(document.querySelector('#feature1 .s-feature-box'), null).getPropertyValue('background-color');    $(progress).css('background-color', `${featureBGColor}`);    $(progress).css('filter', 'brightness(0.5)');    $(feature).click(function (e) {     $('#feature1 .s-feature-box').removeClass('active');     activateFeature($(this), false);    });   }  }   function startSliding() {   activateSlide();   sliderInterval = setInterval(function () {    activateSlide();   }, slideTime)  }   function activateSlide() {   $('#feature1 .s-feature-box').removeClass('active');   activateFeature($(feature).eq(index));   index++;   index === $(feature).length && (index = 0);  }   function activateFeature(feature, isCarousel = true) {   const src = feature.attr('data-img');   const imageUrlSrc = feature.attr('data-img-url');   const classes = feature.attr('data-img-classes');   const descClasses = feature.attr('data-desc-classes');   const containerClasses = feature.attr('data-container');   const alt = feature.attr('data-img-alt');   const id = feature.attr('data-index');   const description = feature.attr('data-description');    $('#feature1-display-img').removeClass();   $('#feature1-display-img').addClass(classes);   $('#feature1-display-img').attr('src', src);   $('#feature1-display-img').attr('alt', alt);   $('#feature1-container').removeClass();   $('#feature1-container').addClass(containerClasses);   $('#feature1-description-block').removeClass();   $('#feature1-description-block').addClass(descClasses);   $('#feature1-description-block').html(description);   $('#feature1-display-img').attr('src', src);   $(progress).css('display', \" none\");    if (imageUrlSrc) {    $('#feature1 #image-url').attr('href', linkify(imageUrlSrc));    $('#feature1 #image-url').css({'pointer-events': 'all'});   } else {    $('#feature1 #image-url').attr('href', '');    $('#feature1 #image-url').css({'pointer-events': 'none'});   }    feature.addClass('active');   index = id;   $(progress).eq(index).css('display', \" block\");   if (isCarousel) {    $(progress).eq(index).css('animationDuration', `${slideTime / 1000}s`);   } else {    $(progress).eq(index).css('animationDuration', `.2s`);    clearInterval(sliderInterval);   }  }     function heightCalc() {   setTimeout(function () {    const box = $('#feature1 .s-feature-box');    const heights = box.map(function () {     return $(this).height();    }).get();    const maxHeight = Math.max.apply(null, heights);    box.each(function (i) {     $(this).css({'height': maxHeight});    });   }, 200);  }   function linkify(url) {   if (url.startsWith('https') || url.startsWith('http') || url.startsWith('mailto') ||    url.startsWith('#') || url.startsWith('/')) {    return url;   }    if (url.indexOf('.') !== -1) {    return 'https://' + url;   }  }  })(); "
	}, {
		"id": "200c6b6b-0c3c-4513-a270-e894640100fa",
		"version": "2.0.0",
		"hrid": "other2",
		"name": "counter1",
		"title": "Simple counter",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/counter1.png",
		"category": "Other",
		"keywords": "Counter",
		"elements": {
			"definitions": {
				"counters": {
					"number": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-6xl", "sw-text-color-2977c9"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
						}]
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-medium"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Counter title"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Counter description"
					}
				}
			},
			"container": {
				"tag": "section",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ffffff"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-2xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xl"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"header": {
				"tag": "h2",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-5xl", "sw-text-color-000000"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-4xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "Conexiones Activas las últimas 24 horas"
			},
			"text": {
				"tag": "p",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wider"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "Estas son las oportunidades de conexión abiertas, capturadas y mejoradas en la comunidad, ¿Qué esperas para participar?"
			},
			"counters": {
				"type": "array",
				"minItems": 0,
				"maxItems": 1024,
				"item_type": "#/elements/definitions/counters",
				"items": [{
					"number": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
						}],
						"value": "3,500"
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-000000"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-bold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Asociados Activos"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "usuarios interectuando por la Comunidad"
					}
				}, {
					"number": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
						}],
						"value": "300+"
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-bold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Oportunidades Abiertas"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Oportunidades que estan esperando propuestas de la comunidad."
					}
				}, {
					"number": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
						}],
						"value": "250"
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-bold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "TDRs adjudicados"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Proyectos cerrados a la fecha de hoy."
					}
				}, {
					"number": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-5xs", "sw-line-height-compact", "sw-font-family-default"]
						}],
						"value": "45%"
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-000000"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-bold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Nuevas Oportunidades"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-normal"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Cambio en el número  de oportunidades entre Mes a mes "
					}
				}]
			}
		},
		"type": "static",
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": [],
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<section id=\"other2\"    data-block-version=\"2.0.0\" data-block-id=\"200c6b6b-0c3c-4513-a270-e894640100fa\"    data-block-updated=\"\"  class=\"counter1-200c6b6b-0c3c-4513-a270-e894640100fa sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000 \">  <div class=\"container\">    <!-- Header -->      <div class=\"row\">    <div class=\"col-12 text-center\">      <h2  class=\"sw-font-size-5xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-wider sw-line-height-normal \">        Conexiones Activas las últimas 24 horas      </h2>    </div>   </div>       <!-- Subheader -->      <div class=\"row\">     <div class=\"col-12 text-center\">       <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-xs sw-letter-spacing-wider sw-line-height-normal \">         Estas son las oportunidades de conexión abiertas, capturadas y mejoradas en la comunidad, ¿Qué esperas para participar?       </p>     </div>   </div>       <div class=\"row gap-y text-center\">       <div class=\"col-md-3  text-center pt-4 pb-4\">     <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-5xs sw-line-height-compact sw-font-family-default\">      3,500     </p>     <h6 class=\"sw-font-size-2xl sw-text-color-000000 sw-font-family-default sw-font-weight-bold sw-letter-spacing-normal \">      Asociados Activos     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">      usuarios interectuando por la Comunidad     </p>    </div>       <div class=\"col-md-3  text-center pt-4 pb-4\">     <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-5xs sw-line-height-compact sw-font-family-default\">      300+     </p>     <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-bold sw-letter-spacing-normal \">      Oportunidades Abiertas     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">      Oportunidades que estan esperando propuestas de la comunidad.     </p>    </div>       <div class=\"col-md-3  text-center pt-4 pb-4\">     <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-5xs sw-line-height-compact sw-font-family-default\">      250     </p>     <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-bold sw-letter-spacing-normal \">      TDRs adjudicados     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">      Proyectos cerrados a la fecha de hoy.     </p>    </div>       <div class=\"col-md-3  text-center pt-4 pb-4\">     <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-5xs sw-line-height-compact sw-font-family-default\">      45%     </p>     <h6 class=\"sw-font-size-2xl sw-text-color-000000 sw-font-family-default sw-font-weight-bold sw-letter-spacing-normal \">      Nuevas Oportunidades     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-normal sw-letter-spacing-normal \">      Cambio en el número  de oportunidades entre Mes a mes      </p>    </div>      </div>   </div> </section> ",
		"compiled_style": ".sw-font-size-6xl { font-size: 4rem!important; } .sw-text-color-2977c9 { color: #2977c9!important; } .sw-margin-bottom-5xs { margin-bottom: 0.75rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-family-default {  } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-default {  } .sw-font-weight-medium { font-weight: 500!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-font-weight-default {  } .sw-line-height-normal { line-height: 1.5!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-weight-semibold { font-weight: 600!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-padding-bottom-xs { padding-bottom: 2rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-font-weight-bold { font-weight: 700!important; } .sw-font-size-xl { font-size: 1.25rem!important; }  ",
		"compiled_script": ""
	}, {
		"id": "f8976c41-f08b-414c-9fa3-85eceee10f5e",
		"version": "2.0.0",
		"hrid": "feature-grid2",
		"name": "feature-grid5",
		"title": "Feature grid with small icons",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature-grid5.png",
		"category": "Feature Grid",
		"keywords": "feature grid, simple",
		"elements": {
			"definitions": {
				"feature": {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-2xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-shield-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-medium"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Feature title"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Feature description"
					}
				}
			},
			"container": {
				"tag": "section",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ffffff"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-2xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xl"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"backgroundImage": {
				"tag": "img",
				"primaryStyles": [{
					"name": "background-repeat",
					"label": "Repeat",
					"isPrimary": true,
					"classes": ["sw-background-repeat-no-repeat"]
				}, {
					"name": "background-size",
					"label": "Size",
					"isPrimary": true,
					"classes": ["sw-background-size-cover"]
				}, {
					"name": "background-position",
					"label": "Position",
					"isPrimary": true,
					"classes": ["sw-background-position-center"]
				}, {
					"name": "background-attachment",
					"label": "Behaviour",
					"isPrimary": true,
					"classes": ["sw-background-attachment-scroll"]
				}],
				"otherStyles": [],
				"src": ""
			},
			"header": {
				"tag": "h2",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-5xl", "sw-text-color-000000"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-4xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "La plataforma digital de la cadena de suministro de Latam"
			},
			"text": {
				"tag": "p",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-3xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-wide"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-loose"]
				}],
				"value": "Forma parte de la comunidad más grande de compradores, vendedores y colaboradores especializados de la cadena de suministro de Latinoamérica."
			},
			"features": {
				"type": "array",
				"minItems": 0,
				"maxItems": 1024,
				"item_type": "#/elements/definitions/feature",
				"items": [{
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-mobile-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Acceso a comunidad logística"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "La comunidad de compradores y vendedores  más grande de la cadena de suministro en Latam."
					}
				}, {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-cog",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Oportunidades comerciales"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Encuentra oportunidades comerciales adicionales y complementarias a tu core."
					}
				}, {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-pencil-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Capacitación en línea"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Encuentra los mejores cursos diseñados para la cadena de abastecimiento."
					}
				}, {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-cube",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Newsletter"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Mantente informado de los acontecimientos, novedades, tendencias que impactan la cadena de abastecimiento."
					}
				}, {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-recycle",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Herramientas logísticas"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Accede a software especializado e incrementa tu productividad, genera ahorros y se más competitivo."
					}
				}, {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "far fa-comment-dots",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Intercambios transparentes"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Realiza transacciones con seguridad y confianza"
					}
				}, {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-shield-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Proveedores homologados"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Consigue proveedores con estándares  requeridos por el mercado."
					}
				}, {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-shield-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Genera ahorros"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Compara costos y servicios que necesites y obtén ahorros importantes."
					}
				}, {
					"div": {
						"tag": "div",
						"primaryStyles": [{
							"name": "border-top",
							"label": "Border top",
							"isPrimary": true,
							"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-f1f2f3"]
						}, {
							"name": "border-bottom",
							"label": "Border bottom",
							"isPrimary": true,
							"classes": ["sw-border-bottom-style-solid", "sw-border-bottom-width-xs", "sw-border-bottom-color-f1f2f3"]
						}, {
							"name": "border-right",
							"label": "Border right",
							"isPrimary": true,
							"classes": ["sw-border-right-style-solid", "sw-border-right-width-xs", "sw-border-right-color-f1f2f3"]
						}, {
							"name": "border-left",
							"label": "Border left",
							"isPrimary": true,
							"classes": ["sw-border-left-style-solid", "sw-border-left-width-xs", "sw-border-left-color-f1f2f3"]
						}]
					},
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-11xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-right-3xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-shield-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Automatiza operaciones"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Elimina hojas de cálculo y operaciones manuales"
					}
				}]
			}
		},
		"type": "static",
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": [],
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<section id=\"feature-grid2\"    data-block-version=\"2.0.0\" data-block-id=\"f8976c41-f08b-414c-9fa3-85eceee10f5e\"    data-block-updated=\"\"  style=\"\"    class=\"feature-grid5-f8976c41-f08b-414c-9fa3-85eceee10f5e sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">      <!-- Header -->      <div class=\"row\">    <div class=\"col-12 text-center\">     <h2 class=\"sw-font-size-5xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \">      La plataforma digital de la cadena de suministro de Latam     </h2>    </div>   </div>       <!-- Subheader -->      <div class=\"row\">    <div class=\"col-12 text-center\">     <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-wide sw-line-height-loose \">      Forma parte de la comunidad más grande de compradores, vendedores y colaboradores especializados de la cadena de suministro de Latinoamérica.     </p>    </div>   </div>         <div class=\"row gap-y text-md-left text-center\">        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-mobile-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Acceso a comunidad logística       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        La comunidad de compradores y vendedores  más grande de la cadena de suministro en Latam.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-cog\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Oportunidades comerciales       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Encuentra oportunidades comerciales adicionales y complementarias a tu core.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-pencil-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Capacitación en línea       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Encuentra los mejores cursos diseñados para la cadena de abastecimiento.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-cube\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Newsletter       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Mantente informado de los acontecimientos, novedades, tendencias que impactan la cadena de abastecimiento.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-recycle\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Herramientas logísticas       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Accede a software especializado e incrementa tu productividad, genera ahorros y se más competitivo.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"far fa-comment-dots\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Intercambios transparentes       </h6>       <p class=\"sw-font-size-m sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Realiza transacciones con seguridad y confianza       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Proveedores homologados       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Consigue proveedores con estándares  requeridos por el mercado.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Genera ahorros       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Compara costos y servicios que necesites y obtén ahorros importantes.       </p>      </div>     </div>    </div>        <div class=\"col-md-4  pt-4 pb-4\">     <div class=\"media\">            <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-right-3xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>      </p>                  <div class=\"media-body text-left\">       <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">        Automatiza operaciones       </h6>       <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">        Elimina hojas de cálculo y operaciones manuales       </p>      </div>     </div>    </div>       </div>  </div> </section> ",
		"compiled_style": ".sw-border-top-style-solid { border-top-style: solid!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-f1f2f3 { border-top-color: #f1f2f3!important; } .sw-border-bottom-style-solid { border-bottom-style: solid!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-f1f2f3 { border-bottom-color: #f1f2f3!important; } .sw-border-right-style-solid { border-right-style: solid!important; } .sw-border-right-width-xs { border-right-width: 1px!important; } .sw-border-right-color-f1f2f3 { border-right-color: #f1f2f3!important; } .sw-border-left-style-solid { border-left-style: solid!important; } .sw-border-left-width-xs { border-left-width: 1px!important; } .sw-border-left-color-f1f2f3 { border-left-color: #f1f2f3!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-width-11xs { width: 2rem!important; } .sw-margin-right-3xs { margin-right: 1.25rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-medium { font-weight: 500!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-font-weight-default {  } .sw-line-height-loose { line-height: 2!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-weight-semibold { font-weight: 600!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-letter-spacing-wide { letter-spacing: 0.025rem!important; } .sw-font-size-xl { font-size: 1.25rem!important; }  ",
		"compiled_script": ""
	}, {
		"id": "3a0cb063-031d-4efd-99ed-d43ac0b62ced",
		"version": "2.0.0",
		"hrid": "feature-grid4",
		"name": "feature-grid1",
		"title": "Feature grid with big icons",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/feature-grid1.png",
		"category": "Feature Grid",
		"keywords": "feature grid, simple",
		"elements": {
			"definitions": {
				"feature": {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-shield-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-l", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-medium"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Feature title"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Feature description"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "READ MORE",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}
			},
			"container": {
				"tag": "section",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ffffff"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-2xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xl"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"header": {
				"tag": "h2",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-5xl", "sw-text-color-000000"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-4xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "Acceso a Comunidades"
			},
			"text": {
				"tag": "p",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-3xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-loose"]
				}],
				"value": "Hemos creado un espacio personalizado para el encuentro de nuestros aliados, le llamamos Comunidades, explora y elige a cuál te gustaría pertenecer."
			},
			"backgroundImage": {
				"tag": "img",
				"primaryStyles": [{
					"name": "background-repeat",
					"label": "Repeat",
					"isPrimary": true,
					"classes": ["sw-background-repeat-no-repeat"]
				}, {
					"name": "background-size",
					"label": "Size",
					"isPrimary": true,
					"classes": ["sw-background-size-cover"]
				}, {
					"name": "background-position",
					"label": "Position",
					"isPrimary": true,
					"classes": ["sw-background-position-center"]
				}, {
					"name": "background-attachment",
					"label": "Behaviour",
					"isPrimary": true,
					"classes": ["sw-background-attachment-scroll"]
				}],
				"otherStyles": [],
				"src": ""
			},
			"features": {
				"type": "array",
				"minItems": 0,
				"maxItems": 1024,
				"item_type": "#/elements/definitions/feature",
				"items": [{
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-mobile-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Transportistas"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Únete a la red más importante de transportistas digitales del país."
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "Leer mas..",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-cog",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Almacenes"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Empresas almaceneras con distintos modelos de negocio."
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "Leer mas..",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-pencil-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Comercio Exterior"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Todos los actores del comercio exterior unidos en una plataforma digital."
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "Leer mas...",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-cube",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Ultima milla"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-m", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "El ecosistema de la última milla en un solo lugar."
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "READ MORE",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-recycle",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Servicios"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-normal"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Proveedores de servicios que complementan la cadena de abastecimiento."
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "Leer mas...",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "far fa-comment-dots",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "E-commerce"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Vendedores de productos y servicios online"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "Leer mas...",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-6xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-shield-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Profesionales logísticos"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Busca los mejores profesionales logísticos en nuestra bolsa de trabajo"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "Leer mas...",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					}
				}, {
					"icon": {
						"tag": "i",
						"type": "icon",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Icon Size/Color",
							"isPrimary": true,
							"showFor": "icon",
							"classes": ["sw-font-size-5xl", "sw-text-color-65b7cc"]
						}, {
							"name": "width",
							"label": "Icon Size",
							"isPrimary": true,
							"showFor": "image",
							"classes": ["sw-width-10xs"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-2xs", "sw-line-height-compact"]
						}],
						"provider": "font-awesome",
						"value": "fas fa-fw fa-shield-alt",
						"src": ""
					},
					"title": {
						"tag": "h6",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-2xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-margin-bottom-6xs"]
						}],
						"value": "Speakers, coaches y mentores"
					},
					"description": {
						"tag": "p",
						"type": "text",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xl", "sw-text-color-default"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-default"]
						}, {
							"name": "line-height",
							"label": "Line height",
							"isPrimary": true,
							"classes": ["sw-line-height-loose"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"value": "Expertos y divulgadores logísticos "
					},
					"link": {
						"tag": "a",
						"primaryStyles": [{
							"name": "size-color",
							"label": "Text Size/Color",
							"isPrimary": true,
							"classes": ["sw-font-size-xs", "sw-text-color-2977c9"]
						}, {
							"name": "font-family",
							"label": "Font family",
							"isPrimary": true,
							"classes": ["sw-font-family-default"]
						}, {
							"name": "font-weight",
							"label": "Font weight",
							"isPrimary": true,
							"classes": ["sw-font-weight-semibold"]
						}, {
							"name": "margin-top/bottom",
							"label": "Margin top/bottom",
							"isPrimary": true,
							"classes": ["sw-margin-top-none", "sw-margin-bottom-none"]
						}, {
							"name": "letter-spacing",
							"label": "Letter spacing",
							"isPrimary": true,
							"classes": ["sw-letter-spacing-normal"]
						}],
						"otherStyles": [{
							"name": "others",
							"label": "Others",
							"isPrimary": true,
							"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "sw-display-inline-block"]
						}],
						"value": "Leer mas..",
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "/directorio",
									"target": ""
								}
							}
						}
					}
				}]
			}
		},
		"type": "static",
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": [],
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<section id=\"feature-grid4\"    data-block-version=\"2.0.0\" data-block-id=\"3a0cb063-031d-4efd-99ed-d43ac0b62ced\"    data-block-updated=\"\"  style=\"\"   class=\"feature-grid1-3a0cb063-031d-4efd-99ed-d43ac0b62ced sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000  sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">    <!-- Header -->      <div class=\"row\">    <div class=\"col-12 text-center\">     <h2 class=\"sw-font-size-5xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \">      Acceso a Comunidades     </h2>    </div>   </div>       <!-- Subheader -->      <div class=\"row\">    <div class=\"col-12 text-center\">     <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-loose \">      Hemos creado un espacio personalizado para el encuentro de nuestros aliados, le llamamos Comunidades, explora y elige a cuál te gustaría pertenecer.     </p>    </div>   </div>        <div class=\"row gap-y text-center\">       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-mobile-alt\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Transportistas     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Únete a la red más importante de transportistas digitales del país.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas..       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-cog\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Almacenes     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Empresas almaceneras con distintos modelos de negocio.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas..       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-pencil-alt\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Comercio Exterior     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Todos los actores del comercio exterior unidos en una plataforma digital.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas...       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-cube\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Ultima milla     </h6>     <p class=\"sw-font-size-m sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-line-height-loose sw-letter-spacing-normal \">       El ecosistema de la última milla en un solo lugar.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       READ MORE       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-recycle\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Servicios     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-normal sw-line-height-loose sw-letter-spacing-normal \">       Proveedores de servicios que complementan la cadena de abastecimiento.     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas...       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"far fa-comment-dots\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       E-commerce     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Vendedores de productos y servicios online     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas...       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-6xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Profesionales logísticos     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Busca los mejores profesionales logísticos en nuestra bolsa de trabajo     </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas...       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>       <div class=\"col-md-6 col-lg-3  pt-4 pb-4\">          <p class=\"sw-font-size-5xl sw-text-color-65b7cc sw-margin-bottom-2xs sw-line-height-compact\">       <i class=\"fas fa-fw fa-shield-alt\"></i>     </p>               <h6 class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-letter-spacing-normal sw-margin-bottom-6xs\">       Speakers, coaches y mentores     </h6>     <p class=\"sw-font-size-xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-line-height-loose sw-letter-spacing-normal \">       Expertos y divulgadores logísticos      </p>          <p>      <a target=\"\"         href=\"/directorio\"         class=\"sw-font-size-xs sw-text-color-2977c9 sw-font-family-default sw-font-weight-semibold sw-margin-top-none sw-margin-bottom-none sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline sw-display-inline-block\">       Leer mas..       <i class=\"fa fa-fw fa-arrow-right ml-2\"></i>      </a>     </p>         </div>      </div>   </div> </section> ",
		"compiled_style": ".sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-65b7cc { color: #65b7cc!important; } .sw-width-10xs { width: 3rem!important; } .sw-margin-bottom-2xs { margin-bottom: 1.5rem!important; } .sw-line-height-compact { line-height: 1!important; } .sw-font-size-l { font-size: 1.125rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-medium { font-weight: 500!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-font-weight-default {  } .sw-line-height-loose { line-height: 2!important; } .sw-font-size-xs { font-size: 0.75rem!important; } .sw-text-color-2977c9 { color: #2977c9!important; } .sw-font-weight-semibold { font-weight: 600!important; } .sw-margin-top-none { margin-top: 0rem!important; } .sw-margin-bottom-none { margin-bottom: 0rem!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } .sw-display-inline-block { display: inline-block!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-text-color-000000 { color: #000000!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-font-size-6xl { font-size: 4rem!important; } .sw-font-size-xl { font-size: 1.25rem!important; } .sw-font-weight-normal { font-weight: 400!important; }  ",
		"compiled_script": ""
	}, {
		"id": "4cf9463d-1601-47f7-b1f5-02cc8ccbf462",
		"version": "2.0.0",
		"hrid": "cta1",
		"name": "cta2",
		"title": "Call to action with a button",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/cta2.png",
		"category": "CTA",
		"keywords": "call to action, cta, simple",
		"elements": {
			"definitions": {
				"button": {
					"tag": "a",
					"type": "button",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-default"]
					}, {
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-default"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-l", "sw-padding-right-l"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-5xs", "sw-padding-bottom-5xs"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-display-inline-block", "sw-margin-left-7xs", "sw-margin-right-7xs"]
					}],
					"label": "Button label",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			},
			"container": {
				"tag": "section",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ffffff"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-2xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xl"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"box": {
				"tag": "div",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-none"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-none"]
				}, {
					"name": "shadow",
					"label": "Shadow",
					"isPrimary": true,
					"classes": ["sw-box-shadow-none"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-none", "sw-padding-bottom-none"]
				}]
			},
			"header": {
				"tag": "h2",
				"type": "text",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-4xl", "sw-text-color-000000"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-4xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "Últimas Noticias"
			},
			"text": {
				"tag": "p",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-3xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-loose"]
				}],
				"value": "Mantente al tanto de las novedades que suceden en el mundo de las cadenas de abastecimiento a través de nuestro newsletter semanal. Accede gratis al suscribirte."
			},
			"backgroundImage": {
				"tag": "img",
				"primaryStyles": [{
					"name": "background-repeat",
					"label": "Repeat",
					"isPrimary": true,
					"classes": ["sw-background-repeat-no-repeat"]
				}, {
					"name": "background-size",
					"label": "Size",
					"isPrimary": true,
					"classes": ["sw-background-size-cover"]
				}, {
					"name": "background-position",
					"label": "Position",
					"isPrimary": true,
					"classes": ["sw-background-position-center"]
				}, {
					"name": "background-attachment",
					"label": "Behaviour",
					"isPrimary": true,
					"classes": ["sw-background-attachment-scroll"]
				}],
				"otherStyles": [],
				"src": ""
			},
			"buttons": {
				"type": "array",
				"item_type": "#/elements/definitions/button",
				"items": [{
					"tag": "a",
					"type": "button",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-xl"]
					}, {
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-e69505"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-l", "sw-padding-right-l"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-5xs", "sw-padding-bottom-5xs"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-display-inline-block", "sw-margin-left-7xs", "sw-margin-right-7xs"]
					}],
					"label": "Ve a Noticias",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/newsletter",
								"target": ""
							}
						},
						"action": "Open page > Newsletter"
					}
				}]
			}
		},
		"type": "static",
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": [],
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<section id=\"cta1\" style=\"\"    data-block-version=\"2.0.0\" data-block-id=\"4cf9463d-1601-47f7-b1f5-02cc8ccbf462\"    data-block-updated=\"\"   class=\"cta2-4cf9463d-1601-47f7-b1f5-02cc8ccbf462 sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000   sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">   <div class=\"row align-items-center\">    <div class=\"col-12 text-center sw-background-color-none sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-box-shadow-none sw-padding-top-none sw-padding-bottom-none \">          <h2 class=\"sw-font-size-4xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \">      Últimas Noticias     </h2>                    <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-loose \">      Mantente al tanto de las novedades que suceden en el mundo de las cadenas de abastecimiento a través de nuestro newsletter semanal. Accede gratis al suscribirte.     </p>           <div class=\"d-flex justify-content-center flex-wrap\">             <a id=\"sw-email-capture-submit-btn\" data-element=\"button\" target=\"\" class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-border-radius-xl sw-background-color-e69505 sw-padding-left-l sw-padding-right-l sw-padding-top-5xs sw-padding-bottom-5xs sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-letter-spacing-normal sw-text-decoration-no-underline hover:sw-text-decoration-no-underline hover:sw-box-shadow-m sw-margin-bottom-6xs sw-display-inline-block sw-margin-left-7xs sw-margin-right-7xs\" href=\"/newsletter\">        Ve a Noticias       </a>           </div>    </div>    </div>  </div> </section> ",
		"compiled_style": ".sw-font-size-m { font-size: 1rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-border-radius-default {  } .sw-background-color-default {  } .sw-padding-left-l { padding-left: 4rem!important; } .sw-padding-right-l { padding-right: 4rem!important; } .sw-padding-top-5xs { padding-top: 0.75rem!important; } .sw-padding-bottom-5xs { padding-bottom: 0.75rem!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } @media (hover: hover) { .hover\\:sw-box-shadow-m:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important; } } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-display-inline-block { display: inline-block!important; } .sw-margin-left-7xs { margin-left: 0.25rem!important; } .sw-margin-right-7xs { margin-right: 0.25rem!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-background-color-none { background-color: #none!important; } .sw-border-radius-none { border-radius: 0rem!important; } .sw-box-shadow-none { box-shadow: none!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-none { padding-bottom: 0rem!important; } .sw-font-size-4xl { font-size: 2.25rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-font-weight-default {  } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-line-height-loose { line-height: 2!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-border-radius-xl { border-radius: 0.75rem!important; } .sw-background-color-e69505 { background-color: #e69505!important; }   @media (max-width: 576px) {  #cta1 a{   width: 80%;  } } ",
		"compiled_script": ""
	}, {
		"id": "9897a885-e505-40d7-9f06-e50b20de9e9f",
		"version": "2.0.1",
		"hrid": "partner1",
		"name": "partner2",
		"title": "Partner with sliding logos",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/partner2.png",
		"category": "Partner",
		"keywords": "partner, simple",
		"elements": {
			"definitions": {
				"partner": {
					"picture": {
						"tag": "img",
						"type": "image",
						"primaryStyles": [{
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"classes": ["sw-border-radius-none"]
						}, {
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-8xs"]
						}],
						"otherStyles": [],
						"src": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/logo-placeholder.png"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
						}],
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}
			},
			"container": {
				"tag": "section",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"classes": ["sw-background-color-ffffff"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"classes": ["sw-padding-top-2xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"classes": ["sw-padding-bottom-2xl"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}],
				"otherStyles": []
			},
			"header": {
				"tag": "h2",
				"type": "text",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"classes": ["sw-text-color-000000", "sw-font-size-4xl"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-4xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"classes": ["sw-letter-spacing-normal"]
				}],
				"value": "Tu puedes ser parte de esta lista! ponte en contacto con nosotros!"
			},
			"text": {
				"tag": "p",
				"type": "text",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"classes": ["sw-text-color-default", "sw-font-size-3xl"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"classes": ["sw-padding-bottom-3xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-loose"]
				}],
				"otherStyles": [],
				"value": "Qué esperas para multiplicar tu presencia en el espacio digital de la logística de Latam?"
			},
			"partners": {
				"type": "array",
				"item_type": "#/elements/definitions/partner",
				"items": [{
					"picture": {
						"tag": "img",
						"type": "image",
						"primaryStyles": [{
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"classes": ["sw-border-radius-none"]
						}, {
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-xs"]
						}],
						"otherStyles": [],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9d989da8-51dc-4ca8-b552-c395852db000.jpeg"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
						}],
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}, {
					"picture": {
						"tag": "img",
						"type": "image",
						"primaryStyles": [{
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"classes": ["sw-border-radius-none"]
						}, {
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-3xs"]
						}],
						"otherStyles": [],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/4bc34130-6de1-4ab4-b100-a9391a5cc853.png"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
						}],
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}, {
					"picture": {
						"tag": "img",
						"type": "image",
						"primaryStyles": [{
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"classes": ["sw-border-radius-none"]
						}, {
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-2xs"]
						}],
						"otherStyles": [],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/0324fe1b-8300-4e1e-998d-3af1cc503309.jpeg"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
						}],
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}, {
					"picture": {
						"tag": "img",
						"type": "image",
						"primaryStyles": [{
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"classes": ["sw-border-radius-none"]
						}, {
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-4xs"]
						}],
						"otherStyles": [],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ec2c9e07-bc63-4aca-82d8-9862a65bbe5d.png"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
						}],
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}, {
					"picture": {
						"tag": "img",
						"type": "image",
						"primaryStyles": [{
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"classes": ["sw-border-radius-none"]
						}, {
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-3xs"]
						}],
						"otherStyles": [],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/621d2174-48c7-4722-bfa1-fb4a994453d7.png"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
						}],
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}, {
					"picture": {
						"tag": "img",
						"type": "image",
						"primaryStyles": [{
							"name": "border",
							"label": "Border",
							"isPrimary": true,
							"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
						}, {
							"name": "border-radius",
							"label": "Roundness",
							"classes": ["sw-border-radius-none"]
						}, {
							"name": "width",
							"label": "Size",
							"isPrimary": true,
							"classes": ["sw-width-3xs"]
						}],
						"otherStyles": [],
						"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/cb54e95b-de08-43af-8d65-8760449f745d.jpeg"
					},
					"link": {
						"tag": "a",
						"primaryStyles": [],
						"otherStyles": [{
							"name": "others",
							"label": "Other",
							"isPrimary": true,
							"classes": ["sw-display-block", "sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline"]
						}],
						"action": {
							"type": "navigate",
							"options": {
								"url": {
									"destination": "",
									"target": ""
								}
							}
						}
					}
				}]
			}
		},
		"type": "static",
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": [],
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<section id=\"partner1\"    data-block-version=\"2.0.1\" data-block-id=\"9897a885-e505-40d7-9f06-e50b20de9e9f\"    data-block-updated=\"\"    class=\"partner2-9897a885-e505-40d7-9f06-e50b20de9e9f sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000 \">  <div class=\"container\">      <div class=\"row\">    <div class=\"col-12 text-center\">          <h2 class=\"sw-text-color-000000 sw-font-size-4xl sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \" >Tu puedes ser parte de esta lista! ponte en contacto con nosotros!</h2>                <p class=\"sw-text-color-default sw-font-size-3xl sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-loose\">Qué esperas para multiplicar tu presencia en el espacio digital de la logística de Latam?</p>         </div>   </div>    <div class=\"row text-center pt-5\">    <div class=\"col-12\">     <div id=\"partner-slider\" class=\"slick-slider\" style=\"overflow: hidden;\">            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/9d989da8-51dc-4ca8-b552-c395852db000.jpeg\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/4bc34130-6de1-4ab4-b100-a9391a5cc853.png\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-3xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/0324fe1b-8300-4e1e-998d-3af1cc503309.jpeg\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-2xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ec2c9e07-bc63-4aca-82d8-9862a65bbe5d.png\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-4xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/621d2174-48c7-4722-bfa1-fb4a994453d7.png\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-3xs \" />             </div>            <div>               <img src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/cb54e95b-de08-43af-8d65-8760449f745d.jpeg\" class=\"sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-width-3xs \" />             </div>           </div>    </div>   </div>  </div> </section> ",
		"compiled_style": ".sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-border-radius-none { border-radius: 0rem!important; } .sw-width-8xs { width: 5rem!important; } .sw-display-block { display: block!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-text-color-000000 { color: #000000!important; } .sw-font-size-4xl { font-size: 2.25rem!important; } .sw-font-family-default {  } .sw-font-weight-default {  } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-text-color-default {  } .sw-font-size-3xl { font-size: 1.875rem!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-line-height-loose { line-height: 2!important; } .sw-width-xs { width: 20rem!important; } .sw-width-3xs { width: 12rem!important; } .sw-width-2xs { width: 16rem!important; } .sw-width-4xs { width: 10rem!important; }  #partner1 .slick-track {  display: flex;  align-items: center; } #partner1 .slick-slide {      display: flex;      align-items: center;      justify-content: center;     } ",
		"compiled_script": ";(function () {   appendStyle('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');  appendScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', startSlider);  startSlider();   function appendScript(filePath, callback) {   if ($('head script[src=\"' + filePath + '\"]').length > 0) {    if (callback) {       setTimeout(callback, 100);    }    return;   }    var ds = document.createElement('script');   ds.setAttribute(\"type\", \"text/javascript\");   ds.setAttribute(\"src\", filePath);    ds.onload = () => {    if (callback) callback();   };    document.head.appendChild(ds);  }   function appendStyle(filepath) {   if ($('head link[href=\"' + filepath + '\"]').length > 0)    return;    var ele = document.createElement('link');   ele.setAttribute(\"type\", \"text/css\");   ele.setAttribute(\"rel\", \"Stylesheet\");   ele.setAttribute(\"href\", filepath);   $('head').append(ele);  }    var isSlickStarted = false;  function startSlider(){   setTimeout(function () {    if($('#partner1 .slick-slider').slick) {     if(isSlickStarted) {      return;     }     isSlickStarted = true;     $('#partner1 .slick-slider').slick({      slidesToShow: 4,      slidesToScroll: 1,      arrows: false,      dots: false,      autoplay: true,      autoplaySpeed: 2000,      centerMode:true,      responsive: [       {        breakpoint: 500,        settings: {        slidesToShow: 1,        }       },       {        breakpoint: 767,        settings: {        slidesToShow: 2        }       },       {        breakpoint: 991,        settings: {         slidesToShow: 3        }       },      ]     });    }   }, 300);  }  $(window).on('resize', function() {   $('#partner1 .slick-slider').slick('resize');  }); })(); "
	}, {
		"id": "56a7fe03-3792-4317-fc29-f47e6e3b97fc",
		"version": "2.0.0",
		"hrid": "cta2",
		"name": "cta4",
		"title": "Call to action with a button on the right",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/cta4.png",
		"category": "CTA",
		"keywords": "call to action, cta, simple",
		"elements": {
			"definitions": {
				"button": {
					"tag": "a",
					"type": "button",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-none"]
					}, {
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-default"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-l", "sw-padding-right-l"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-4xs", "sw-padding-bottom-4xs"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-display-inline-block", "sw-margin-left-7xs", "sw-margin-right-7xs"]
					}],
					"label": "Button label",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			},
			"container": {
				"tag": "section",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-ffffff"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-2xl"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-2xl"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"box": {
				"tag": "div",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-none"]
				}, {
					"name": "border",
					"label": "Border",
					"isPrimary": true,
					"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
				}, {
					"name": "border-radius",
					"label": "Roundness",
					"isPrimary": true,
					"classes": ["sw-border-radius-none"]
				}, {
					"name": "shadow",
					"label": "Shadow",
					"isPrimary": true,
					"classes": ["sw-box-shadow-none"]
				}, {
					"name": "padding-top-bottom",
					"label": "Padding top/bottom",
					"isPrimary": true,
					"classes": ["sw-padding-top-none", "sw-padding-bottom-none"]
				}]
			},
			"backgroundImage": {
				"tag": "img",
				"primaryStyles": [{
					"name": "background-repeat",
					"label": "Repeat",
					"isPrimary": true,
					"classes": ["sw-background-repeat-no-repeat"]
				}, {
					"name": "background-size",
					"label": "Size",
					"isPrimary": true,
					"classes": ["sw-background-size-cover"]
				}, {
					"name": "background-position",
					"label": "Position",
					"isPrimary": true,
					"classes": ["sw-background-position-center"]
				}, {
					"name": "background-attachment",
					"label": "Behaviour",
					"isPrimary": true,
					"classes": ["sw-background-attachment-scroll"]
				}],
				"otherStyles": [],
				"src": ""
			},
			"header": {
				"tag": "h2",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-5xl", "sw-text-color-000000"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-semibold"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-4xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "No espere mas para hacer crecer su negocio"
			},
			"text": {
				"tag": "p",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-2xl", "sw-text-color-default"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-3xs"]
				}, {
					"name": "letter-spacing",
					"label": "Letter spacing",
					"isPrimary": true,
					"classes": ["sw-letter-spacing-normal"]
				}, {
					"name": "line-height",
					"label": "Line height",
					"isPrimary": true,
					"classes": ["sw-line-height-normal"]
				}],
				"value": "Registrese para conocer como podemos encontrar nuevas maneras de crecer"
			},
			"buttons": {
				"type": "array",
				"item_type": "#/elements/definitions/button",
				"items": [{
					"tag": "a",
					"type": "button",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-2xl", "sw-text-color-default"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "border-radius",
						"label": "Roundness",
						"isPrimary": true,
						"classes": ["sw-border-radius-2xl"]
					}, {
						"name": "background-color",
						"label": "Background color",
						"isPrimary": true,
						"classes": ["sw-background-color-ffa500"]
					}, {
						"name": "padding-left-right",
						"label": "Padding left/right",
						"isPrimary": true,
						"classes": ["sw-padding-left-l", "sw-padding-right-l"]
					}, {
						"name": "padding-top-bottom",
						"label": "Padding top/bottom",
						"isPrimary": true,
						"classes": ["sw-padding-top-4xs", "sw-padding-bottom-4xs"]
					}, {
						"name": "border",
						"label": "Border",
						"isPrimary": true,
						"classes": ["sw-border-style-none", "sw-border-width-xs", "sw-border-color-000000"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"isPrimary": true,
						"classes": ["sw-text-decoration-no-underline", "hover:sw-text-decoration-no-underline", "hover:sw-box-shadow-m", "sw-margin-bottom-6xs", "sw-display-inline-block", "sw-margin-left-7xs", "sw-margin-right-7xs"]
					}],
					"label": "Registro",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/upps",
								"target": ""
							}
						},
						"action": "Open page > Upps "
					}
				}]
			}
		},
		"type": "static",
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": [],
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<section id=\"cta2\" style=\"\"    data-block-version=\"2.0.0\" data-block-id=\"56a7fe03-3792-4317-fc29-f47e6e3b97fc\"    data-block-updated=\"\"    class=\"cta4-56a7fe03-3792-4317-fc29-f47e6e3b97fc sw-background-color-ffffff sw-padding-top-2xl sw-padding-bottom-2xl sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000   sw-background-repeat-no-repeat sw-background-size-cover sw-background-position-center sw-background-attachment-scroll \">  <div class=\"container\">   <div class=\"row sw-background-color-none sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-border-radius-none sw-box-shadow-none sw-padding-top-none sw-padding-bottom-none \">    <div class=\"col-md-7 col-12 text-center text-md-left\">            <h2 class=\"sw-font-size-5xl sw-text-color-000000 sw-font-family-default sw-font-weight-semibold sw-padding-top-none sw-padding-bottom-4xs sw-letter-spacing-normal sw-line-height-normal \">      No espere mas para hacer crecer su negocio     </h2>                 <p class=\"sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-letter-spacing-normal sw-line-height-normal \">      Registrese para conocer como podemos encontrar nuevas maneras de crecer     </p>           </div>    <div class=\"col-md-5 col-12 d-flex justify-content-center align-items-center flex-wrap flex-column\">             <a data-element=\"button\" target=\"\" class=\"text-center sw-font-size-2xl sw-text-color-default sw-font-family-default sw-font-weight-semibold sw-border-radius-2xl sw-background-color-ffa500 sw-padding-left-l sw-padding-right-l sw-padding-top-4xs sw-padding-bottom-4xs sw-border-style-none sw-border-width-xs sw-border-color-000000 sw-letter-spacing-wider sw-text-decoration-no-underline hover:sw-text-decoration-no-underline hover:sw-box-shadow-m sw-margin-bottom-6xs sw-display-inline-block sw-margin-left-7xs sw-margin-right-7xs\" href=\"/upps\">        Registro       </a>          </div>   </div>  </div> </section> ",
		"compiled_style": ".sw-font-size-m { font-size: 1rem!important; } .sw-text-color-default {  } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-border-radius-none { border-radius: 0rem!important; } .sw-background-color-default {  } .sw-padding-left-l { padding-left: 4rem!important; } .sw-padding-right-l { padding-right: 4rem!important; } .sw-padding-top-4xs { padding-top: 1rem!important; } .sw-padding-bottom-4xs { padding-bottom: 1rem!important; } .sw-border-style-none { border-style: none!important; } .sw-border-width-xs { border-width: 1px!important; } .sw-border-color-000000 { border-color: #000000!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-text-decoration-no-underline { text-decoration: none!important; } @media (hover: hover) { .hover\\:sw-text-decoration-no-underline:hover { text-decoration: none!important; } } @media (hover: hover) { .hover\\:sw-box-shadow-m:hover { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important; } } .sw-margin-bottom-6xs { margin-bottom: 0.5rem!important; } .sw-display-inline-block { display: inline-block!important; } .sw-margin-left-7xs { margin-left: 0.25rem!important; } .sw-margin-right-7xs { margin-right: 0.25rem!important; } .sw-background-color-ffffff { background-color: #ffffff!important; } .sw-padding-top-2xl { padding-top: 6rem!important; } .sw-padding-bottom-2xl { padding-bottom: 6rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-background-color-none { background-color: #none!important; } .sw-box-shadow-none { box-shadow: none!important; } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-none { padding-bottom: 0rem!important; } .sw-background-repeat-no-repeat { background-repeat: no-repeat!important; } .sw-background-size-cover { background-size: cover!important; } .sw-background-position-center { background-position: center!important; } .sw-background-attachment-scroll { background-attachment: scroll!important; } .sw-font-size-5xl { font-size: 3rem!important; } .sw-text-color-000000 { color: #000000!important; } .sw-line-height-normal { line-height: 1.5!important; } .sw-font-size-2xl { font-size: 1.5rem!important; } .sw-font-weight-default {  } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-border-radius-2xl { border-radius: 1rem!important; } .sw-background-color-ffa500 { background-color: #ffa500!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; }   @media (max-width: 576px) {  #cta2 a{   width: 80%;  } } ",
		"compiled_script": ""
	}, {
		"id": "733d9014-dbb5-49be-aaa2-bd1e5c632569",
		"version": "1.0.0",
		"hrid": "footer1",
		"name": "footer1",
		"title": "Footer with links and secondary footer",
		"image": "https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/footer1.png",
		"category": "Footer",
		"keywords": "footer, simple",
		"elements": {
			"definitions": {
				"socialLink": {
					"tag": "a",
					"type": "social-icon",
					"value": "fab fa-facebook-f",
					"url": "https://facebook.com/mycompany",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"classes": ["sw-text-color-000000", "sw-font-size-m"]
					}, {
						"name": "width",
						"label": "Width",
						"isPrimary": true,
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"classes": ["sw-display-inline-block"]
					}]
				},
				"link": {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-m", "sw-text-color-000000"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-normal"]
					}],
					"value": "LINK NAME",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}
			},
			"container": {
				"tag": "footer",
				"type": "container",
				"primaryStyles": [{
					"name": "background-color",
					"label": "Background color",
					"isPrimary": true,
					"classes": ["sw-background-color-000000"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-2xs"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-none"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-none", "sw-border-top-width-xs", "sw-border-top-color-000000"]
				}, {
					"name": "border-bottom",
					"label": "Border bottom",
					"isPrimary": true,
					"classes": ["sw-border-bottom-style-none", "sw-border-bottom-width-xs", "sw-border-bottom-color-000000"]
				}]
			},
			"copyrightText": {
				"tag": "small",
				"type": "text",
				"primaryStyles": [{
					"name": "size-color",
					"label": "Text Size/Color",
					"isPrimary": true,
					"classes": ["sw-font-size-s", "sw-text-color-ffffff"]
				}, {
					"name": "font-family",
					"label": "Font family",
					"isPrimary": true,
					"classes": ["sw-font-family-default"]
				}, {
					"name": "font-weight",
					"label": "Font weight",
					"isPrimary": true,
					"classes": ["sw-font-weight-default"]
				}, {
					"name": "padding-top",
					"label": "Padding top",
					"isPrimary": true,
					"classes": ["sw-padding-top-none"]
				}, {
					"name": "padding-bottom",
					"label": "Padding bottom",
					"isPrimary": true,
					"classes": ["sw-padding-bottom-3xs"]
				}],
				"otherStyles": [{
					"name": "others",
					"label": "Others",
					"classes": ["sw-display-block"]
				}],
				"value": "MercadologisticoLatam. All rights reserved."
			},
			"horizontalLine": {
				"tag": "hr",
				"type": "horizontal-line",
				"primaryStyles": [{
					"name": "max-width",
					"label": "Width",
					"isPrimary": true,
					"classes": ["sw-margin-top-3xs", "sw-margin-bottom-3xs"]
				}, {
					"name": "border-top",
					"label": "Border top",
					"isPrimary": true,
					"classes": ["sw-border-top-style-solid", "sw-border-top-width-xs", "sw-border-top-color-cccccc"]
				}]
			},
			"logo": {
				"tag": "img",
				"type": "image-with-link",
				"primaryStyles": [{
					"name": "width",
					"label": "Width",
					"isPrimary": true,
					"classes": ["sw-width-3xs"]
				}],
				"src": "https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png",
				"alt": "Publish your designed things."
			},
			"links": {
				"type": "array",
				"item_type": "#/elements/definitions/link",
				"items": [{
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"value": "Nuestra Historia",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/about-us",
								"target": ""
							}
						}
					}
				}, {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"value": "El Equipo",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}, {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"value": "Portfafolio",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/portfolio",
								"target": ""
							}
						}
					}
				}, {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"value": "Descubrimiento ",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "/newsletter",
								"target": ""
							}
						}
					}
				}, {
					"tag": "a",
					"type": "link",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Text Size/Color",
						"isPrimary": true,
						"classes": ["sw-font-size-xl", "sw-text-color-ffffff"]
					}, {
						"name": "font-family",
						"label": "Font family",
						"isPrimary": true,
						"classes": ["sw-font-family-default"]
					}, {
						"name": "font-weight",
						"label": "Font weight",
						"isPrimary": true,
						"classes": ["sw-font-weight-semibold"]
					}, {
						"name": "letter-spacing",
						"label": "Letter spacing",
						"isPrimary": true,
						"classes": ["sw-letter-spacing-wider"]
					}],
					"value": "Talento",
					"action": {
						"type": "navigate",
						"options": {
							"url": {
								"destination": "",
								"target": ""
							}
						}
					}
				}]
			},
			"socialLinks": {
				"type": "array",
				"item_type": "#/elements/definitions/socialLink",
				"items": [{
					"tag": "a",
					"type": "social-icon",
					"value": "fab fa-facebook-f",
					"url": "https://facebook.com/mycompany",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"classes": ["sw-text-color-ffffff", "sw-font-size-m"]
					}, {
						"name": "width",
						"label": "Width",
						"isPrimary": true,
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"classes": ["sw-display-inline-block"]
					}]
				}, {
					"tag": "a",
					"type": "social-icon",
					"value": "fab fa-twitter",
					"url": "https://twitter.com/mycompany",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"classes": ["sw-text-color-ffffff", "sw-font-size-m"]
					}, {
						"name": "width",
						"label": "Width",
						"isPrimary": true,
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"classes": ["sw-display-inline-block"]
					}]
				}, {
					"tag": "a",
					"type": "social-icon",
					"value": "fab fa-instagram",
					"url": "https://instagram.com/mycompany",
					"primaryStyles": [{
						"name": "size-color",
						"label": "Icon Size/Color",
						"isPrimary": true,
						"classes": ["sw-text-color-ffffff", "sw-font-size-m"]
					}, {
						"name": "width",
						"label": "Width",
						"isPrimary": true,
						"classes": ["sw-width-11xs"]
					}],
					"otherStyles": [{
						"name": "others",
						"label": "Others",
						"classes": ["sw-display-inline-block"]
					}]
				}]
			}
		},
		"type": null,
		"collection": null,
		"enabled": "true",
		"order": "null",
		"updated": null,
		"visibility": {
			"userGroup": {
				"predefinedUserGroupType": "ALL_USERS",
				"customUserGroupIds": [],
				"enabledPredefinedUserGroupTypes": ["ALL_USERS", "LOGGED_IN_USERS", "NON_LOGGED_IN_USERS"]
			},
			"devices": null,
			"detailsPageRecordCondition": null
		},
		"settings": {},
		"container": null,
		"presets": null,
		"created_at": null,
		"compiled_markup": "<footer id=\"footer1\" class=\"footer1-733d9014-dbb5-49be-aaa2-bd1e5c632569 sw-background-color-000000 sw-padding-top-2xs sw-padding-bottom-none sw-border-top-style-none sw-border-top-width-xs sw-border-top-color-000000 sw-border-bottom-style-none sw-border-bottom-width-xs sw-border-bottom-color-000000 \"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-md-3 col-12 text-center text-md-left pb-md-2 pb-5\"><a href=\"/\"><img class=\"sw-width-3xs \"src=\"https://assets.softr-files.com/applications/1f37011c-bdff-48c6-8a6b-d2f777aab051/assets/ad003983-377f-4413-ac61-dd42f06fe7b9.png\"alt=\"Publish your designed things.\"></a></div><div class=\"col-md-9 col-12 pb-2\"><div class=\"nav justify-content-center justify-content-md-end\"><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"/about-us\">Nuestra Historia</a><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"\">El Equipo</a><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"/portfolio\">Portfafolio</a><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"/newsletter\">Descubrimiento </a><a target=\"\" class=\"nav-link sw-font-size-xl sw-text-color-ffffff sw-font-family-default sw-font-weight-semibold sw-letter-spacing-wider \" href=\"\">Talento</a></div></div></div><div class=\"row\"><div class=\"col-12\"><hr class=\"sw-margin-top-3xs sw-margin-bottom-3xs sw-border-top-style-solid sw-border-top-width-xs sw-border-top-color-cccccc \"></div></div><div class=\"row\"><div class=\"col-7\"><small class=\"sw-font-size-s sw-text-color-ffffff sw-font-family-default sw-font-weight-default sw-padding-top-none sw-padding-bottom-3xs sw-display-block\">MercadologisticoLatam. All rights reserved.</small></div><div class=\"col-5\"><div class=\"text-right\"><a href=\"https://facebook.com/mycompany\" target=\"_blank\" class=\"sw-text-color-ffffff sw-font-size-m sw-width-11xs sw-display-inline-block\"><i class=\"fab fa-facebook-f\"></i></a><a href=\"https://twitter.com/mycompany\" target=\"_blank\" class=\"sw-text-color-ffffff sw-font-size-m sw-width-11xs sw-display-inline-block\"><i class=\"fab fa-twitter\"></i></a><a href=\"https://instagram.com/mycompany\" target=\"_blank\" class=\"sw-text-color-ffffff sw-font-size-m sw-width-11xs sw-display-inline-block\"><i class=\"fab fa-instagram\"></i></a></div></div></div></div></div></footer>",
		"compiled_style": ".sw-text-color-000000 { color: #000000!important; } .sw-font-size-m { font-size: 1rem!important; } .sw-width-11xs { width: 2rem!important; } .sw-display-inline-block { display: inline-block!important; } .sw-font-family-default {  } .sw-font-weight-semibold { font-weight: 600!important; } .sw-letter-spacing-normal { letter-spacing: 0rem!important; } .sw-background-color-000000 { background-color: #000000!important; } .sw-padding-top-2xs { padding-top: 1.5rem!important; } .sw-padding-bottom-none { padding-bottom: 0rem!important; } .sw-border-top-style-none { border-top-style: none!important; } .sw-border-top-width-xs { border-top-width: 1px!important; } .sw-border-top-color-000000 { border-top-color: #000000!important; } .sw-border-bottom-style-none { border-bottom-style: none!important; } .sw-border-bottom-width-xs { border-bottom-width: 1px!important; } .sw-border-bottom-color-000000 { border-bottom-color: #000000!important; } .sw-font-size-s { font-size: 0.875rem!important; } .sw-text-color-ffffff { color: #ffffff!important; } .sw-font-weight-default {  } .sw-padding-top-none { padding-top: 0rem!important; } .sw-padding-bottom-3xs { padding-bottom: 1.25rem!important; } .sw-display-block { display: block!important; } .sw-margin-top-3xs { margin-top: 1.25rem!important; } .sw-margin-bottom-3xs { margin-bottom: 1.25rem!important; } .sw-border-top-style-solid { border-top-style: solid!important; } .sw-border-top-color-cccccc { border-top-color: #cccccc!important; } .sw-width-3xs { width: 12rem!important; } .sw-font-size-xl { font-size: 1.25rem!important; } .sw-letter-spacing-wider { letter-spacing: 0.05rem!important; }  ",
		"compiled_script": ""
	}],
	targetElement: document.getElementById('page-content'),
	theme: reactDefaultThemes,
	appCustomHeaderCode: "",
	pageCustomHeaderCode: "",
	appCustomFooterCode: "",
	pageCustomFooterCode: ""
}).then(() => window.dispatchEvent(new Event("@softr/page-content-loaded")));