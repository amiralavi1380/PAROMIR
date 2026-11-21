// PAROMIR rendering source code is maintained as plain HTML pages with shared styling.
// This file stores the complete route/content inventory used for the approved bilingual build.
// To regenerate pages from data, use the documented site rendering templates in the repository.
import fs from 'node:fs';
import path from 'node:path';
const data={
  "sitemapNodes": [
    {
      "id": "home",
      "path": "/",
      "url_ru": "/",
      "url_en": "/en/"
    },
    {
      "id": "products",
      "path": "/products/",
      "url_ru": "/products/",
      "url_en": "/en/products/"
    },
    {
      "id": "stretch",
      "path": "/products/stretch-film/",
      "url_ru": "/products/stretch-film/",
      "url_en": "/en/products/stretch-film/"
    },
    {
      "id": "hand",
      "path": "/products/stretch-film/hand/",
      "url_ru": "/products/stretch-film/hand/",
      "url_en": "/en/products/stretch-film/hand/"
    },
    {
      "id": "machine",
      "path": "/products/stretch-film/machine/",
      "url_ru": "/products/stretch-film/machine/",
      "url_en": "/en/products/stretch-film/machine/"
    },
    {
      "id": "jumbo",
      "path": "/products/stretch-film/jumbo/",
      "url_ru": "/products/stretch-film/jumbo/",
      "url_en": "/en/products/stretch-film/jumbo/"
    },
    {
      "id": "pet",
      "path": "/products/pet-strapping/",
      "url_ru": "/products/pet-strapping/",
      "url_en": "/en/products/pet-strapping/"
    },
    {
      "id": "shrink",
      "path": "/products/shrink-film/",
      "url_ru": "/products/shrink-film/",
      "url_en": "/en/products/shrink-film/"
    },
    {
      "id": "agri",
      "path": "/products/agricultural-film/",
      "url_ru": "/products/agricultural-film/",
      "url_en": "/en/products/agricultural-film/"
    },
    {
      "id": "applications",
      "path": "/applications/",
      "url_ru": "/applications/",
      "url_en": "/en/applications/"
    },
    {
      "id": "pallet",
      "path": "/applications/palletizing/",
      "url_ru": "/applications/palletizing/",
      "url_en": "/en/applications/palletizing/"
    },
    {
      "id": "strapping",
      "path": "/applications/strapping/",
      "url_ru": "/applications/strapping/",
      "url_en": "/en/applications/strapping/"
    },
    {
      "id": "farming",
      "path": "/applications/agriculture/",
      "url_ru": "/applications/agriculture/",
      "url_en": "/en/applications/agriculture/"
    },
    {
      "id": "logistics",
      "path": "/logistics/",
      "url_ru": "/logistics/",
      "url_en": "/en/logistics/"
    },
    {
      "id": "routes",
      "path": "/logistics/routes/",
      "url_ru": "/logistics/routes/",
      "url_en": "/en/logistics/routes/"
    },
    {
      "id": "incoterms",
      "path": "/logistics/incoterms/",
      "url_ru": "/logistics/incoterms/",
      "url_en": "/en/logistics/incoterms/"
    },
    {
      "id": "documents",
      "path": "/logistics/documents/",
      "url_ru": "/logistics/documents/",
      "url_en": "/en/logistics/documents/"
    },
    {
      "id": "quality",
      "path": "/quality/",
      "url_ru": "/quality/",
      "url_en": "/en/quality/"
    },
    {
      "id": "inspection",
      "path": "/quality/inspection/",
      "url_ru": "/quality/inspection/",
      "url_en": "/en/quality/inspection/"
    },
    {
      "id": "batch",
      "path": "/quality/batch-documents/",
      "url_ru": "/quality/batch-documents/",
      "url_en": "/en/quality/batch-documents/"
    },
    {
      "id": "about",
      "path": "/about/",
      "url_ru": "/about/",
      "url_en": "/en/about/"
    },
    {
      "id": "resources",
      "path": "/resources/",
      "url_ru": "/resources/",
      "url_en": "/en/resources/"
    },
    {
      "id": "guide",
      "path": "/resources/stretch-film-guide/",
      "url_ru": "/resources/stretch-film-guide/",
      "url_en": "/en/resources/stretch-film-guide/"
    },
    {
      "id": "faq",
      "path": "/resources/faq/",
      "url_ru": "/resources/faq/",
      "url_en": "/en/resources/faq/"
    },
    {
      "id": "cases",
      "path": "/resources/cases/",
      "url_ru": "/resources/cases/",
      "url_en": "/en/resources/cases/"
    },
    {
      "id": "contact",
      "path": "/contact/",
      "url_ru": "/contact/",
      "url_en": "/en/contact/"
    },
    {
      "id": "privacy",
      "path": "/privacy/",
      "url_ru": "/privacy/",
      "url_en": "/en/privacy/"
    },
    {
      "id": "terms",
      "path": "/terms/",
      "url_ru": "/terms/",
      "url_en": "/en/terms/"
    },
    {
      "id": "cookies",
      "path": "/cookies/",
      "url_ru": "/cookies/",
      "url_en": "/en/cookies/"
    },
    {
      "id": "notfound",
      "path": "/404.html",
      "url_ru": "/404.html",
      "url_en": "/en/404.html"
    }
  ],
  "titles": {
    "home": [
      "Промышленная упаковка для вашего производства",
      "Industrial packaging for your business"
    ],
    "products": [
      "Плёнки и упаковочные материалы",
      "Films and packaging materials"
    ],
    "stretch": [
      "Стрейч-плёнка LLDPE",
      "LLDPE Stretch Film"
    ],
    "hand": [
      "Ручная стрейч-плёнка",
      "Hand Stretch Film"
    ],
    "machine": [
      "Машинная стрейч-плёнка",
      "Machine Stretch Film"
    ],
    "jumbo": [
      "Джамбо-рулоны стрейч-плёнки",
      "Stretch Film Jumbo Rolls"
    ],
    "pet": [
      "ПЭТ-лента для обвязки",
      "PET Strapping"
    ],
    "shrink": [
      "Термоусадочная плёнка",
      "Shrink Film"
    ],
    "agri": [
      "Сельскохозяйственная плёнка",
      "Agricultural Film"
    ],
    "applications": [
      "Решения для промышленной упаковки",
      "Packaging applications"
    ],
    "pallet": [
      "Фиксация и стабилизация паллет",
      "Pallet stabilization"
    ],
    "strapping": [
      "Промышленная обвязка грузов",
      "Industrial load strapping"
    ],
    "farming": [
      "Плёнки для сельского хозяйства",
      "Films for agricultural use"
    ],
    "logistics": [
      "Логистика и сопровождение поставки",
      "Logistics and shipment coordination"
    ],
    "routes": [
      "Маршруты доставки",
      "Shipping routes"
    ],
    "incoterms": [
      "Базисы поставки Incoterms",
      "Incoterms delivery terms"
    ],
    "documents": [
      "Комплект документов",
      "Shipment documentation"
    ],
    "quality": [
      "Проверка партии и контроль качества",
      "Batch verification and quality checks"
    ],
    "inspection": [
      "Предотгрузочная проверка",
      "Pre-shipment inspection"
    ],
    "batch": [
      "Документы и идентификация партии",
      "Batch documentation and identification"
    ],
    "about": [
      "PAROMIR — промышленная упаковка",
      "PAROMIR — industrial packaging"
    ],
    "resources": [
      "Технические материалы",
      "Technical resources"
    ],
    "guide": [
      "Как выбрать стрейч-плёнку",
      "How to select stretch film"
    ],
    "faq": [
      "Частые вопросы",
      "Frequently asked questions"
    ],
    "cases": [
      "Практика поставок",
      "Shipment experience"
    ],
    "contact": [
      "Запросить коммерческое предложение",
      "Request a quotation"
    ],
    "privacy": [
      "Политика конфиденциальности",
      "Privacy policy"
    ],
    "terms": [
      "Условия использования",
      "Terms of use"
    ],
    "cookies": [
      "Использование файлов cookie",
      "Cookie usage"
    ],
    "notfound": [
      "Страница не найдена",
      "Page not found"
    ]
  },
  "desc": {
    "home": [
      "Подбор и экспортные поставки стрейч-плёнки LLDPE, ПЭТ-ленты и плёночных упаковочных материалов по спецификации заказчика.",
      "LLDPE stretch film, PET strapping and flexible packaging materials supplied to industrial buyers against their specifications."
    ],
    "products": [
      "Выберите тип материала и укажите ключевые параметры. Характеристики конкретной партии согласовываются в предложении и технической документации.",
      "Choose the material and define your required parameters. Batch characteristics are confirmed in the quotation and technical documentation."
    ],
    "stretch": [
      "Ручные, машинные и джамбо-рулоны для промышленной упаковки и перемотки. Подбор по ширине, толщине, намотке и весу нетто.",
      "Hand, machine and jumbo formats for wrapping and converting. Specify gauge, width, winding and net roll weight."
    ],
    "hand": [
      "Для ручной упаковки и фиксации паллет. Толщина, ширина, вес нетто и втулка подбираются по запросу.",
      "For manual wrapping and pallet containment. Gauge, width, net weight and core dimensions are agreed per order."
    ],
    "machine": [
      "Для автоматических и полуавтоматических паллетообмотчиков. Совместимость и предрастяжение уточняются по параметрам оборудования.",
      "For automatic and semi-automatic pallet wrappers. Machine compatibility and pre-stretch requirements are reviewed against equipment settings."
    ],
    "jumbo": [
      "Рулоны для перемоточных линий. При запросе укажите требуемую ширину, массу рулона и параметры втулки.",
      "Mother rolls for converting operations. Please specify width, roll weight and core dimensions."
    ],
    "pet": [
      "Лента для обвязки и фиксации промышленного груза. Ключевые параметры — ширина, толщина, разрывная нагрузка и тип оборудования.",
      "Industrial load securing with PET strap. Key factors include width, thickness, tensile properties and equipment compatibility."
    ],
    "shrink": [
      "Материалы для термоусадочной упаковки. Выбор зависит от продукта, упаковочной линии и требуемой геометрии.",
      "Heat-shrink packaging materials selected for the product, packing line and required dimensions."
    ],
    "agri": [
      "Плёнки для сельскохозяйственных задач. Вид материала и график поставки определяются по назначению и сезонной потребности.",
      "Films for agricultural applications. Product selection and shipment schedule depend on use case and seasonal demand."
    ],
    "applications": [
      "Подберите упаковочный материал исходя из задачи: стабилизация паллет, обвязка груза или аграрное применение.",
      "Select packaging materials by use case: pallet stabilization, strapping or agricultural applications."
    ],
    "pallet": [
      "Тип плёнки определяется массой, геометрией и устойчивостью груза, а также характеристиками обмоточного оборудования.",
      "Film selection depends on load weight, geometry, stability and wrapping equipment."
    ],
    "strapping": [
      "Параметры ПЭТ-ленты и способ скрепления выбираются по нагрузке и используемому инструменту.",
      "PET strap and joining method are selected to suit load requirements and the strapping equipment."
    ],
    "farming": [
      "Укажите культуру, назначение плёнки, ширину, толщину и требуемый период поставки.",
      "Specify the crop, intended film use, width, thickness and delivery period."
    ],
    "logistics": [
      "Проработка маршрута, базиса Incoterms и комплекта документов с учётом товара и пункта назначения.",
      "Route planning, Incoterms and documentary requirements based on the shipment and destination."
    ],
    "routes": [
      "Рассматриваются каспийский маршрут через Астрахань и автомобильная доставка через Астару. Условия зависят от конкретной партии.",
      "Route options include the Caspian corridor via Astrakhan and overland transit via Astara. Conditions vary by shipment."
    ],
    "incoterms": [
      "Базис поставки закрепляется в договоре и определяет распределение расходов, рисков и обязанностей.",
      "Delivery terms are agreed in the contract and determine cost, risk and responsibility allocation."
    ],
    "documents": [
      "Состав документов определяется кодом товара, происхождением, маршрутом и требованиями импортёра.",
      "Document requirements depend on classification, origin, transport route and importer requirements."
    ],
    "quality": [
      "Контроль параметров продукции, упаковки, маркировки и количества мест перед отгрузкой — согласно согласованной спецификации.",
      "Checks of product parameters, packaging, labeling and shipment quantities against the agreed specification."
    ],
    "inspection": [
      "Проверка партии перед отправкой по согласованному перечню параметров и доступным документам.",
      "Pre-shipment checks based on agreed inspection points and available documentation."
    ],
    "batch": [
      "Сопоставление партии с упаковочным листом, маркировкой и доступными паспортами качества.",
      "Match batch identity with the packing list, labels and available batch quality documents."
    ],
    "about": [
      "PAROMIR работает с запросами промышленных покупателей на упаковочные материалы и организует взаимодействие по комплектации и доставке.",
      "PAROMIR works with industrial packaging procurement inquiries and coordinates sourcing and shipment arrangements."
    ],
    "resources": [
      "Краткие рекомендации по выбору материала, подготовке спецификации и оформлению запроса.",
      "Guidance on material selection, specification preparation and procurement inquiries."
    ],
    "guide": [
      "Практические критерии выбора ручной, машинной и джамбо-стрейч-плёнки без необоснованных обещаний по характеристикам.",
      "Practical criteria for selecting hand, machine and jumbo stretch film."
    ],
    "faq": [
      "Ответы на вопросы о технической спецификации, пробных рулонах, документах и условиях поставки.",
      "Answers about product specifications, samples, documents and delivery terms."
    ],
    "cases": [
      "Условия и документация реальных поставок обсуждаются с заказчиком с учётом коммерческой конфиденциальности.",
      "Shipment experience and documentation are discussed with buyers subject to commercial confidentiality."
    ],
    "contact": [
      "Укажите компанию, материал, объём и город назначения. На основании этих данных подготовим запрос на расчёт поставки.",
      "Provide company, material, volume and destination to prepare a quotation inquiry."
    ],
    "privacy": [
      "Информация об обработке данных при использовании сайта и подготовке запросов через почтовое приложение.",
      "How data is handled when using this site and preparing inquiries through an email application."
    ],
    "terms": [
      "Информационные материалы сайта и порядок запроса коммерческого предложения.",
      "Website information and quotation inquiry terms."
    ],
    "cookies": [
      "Сайт не использует аналитические или рекламные файлы cookie.",
      "This site does not use analytics or advertising cookies."
    ],
    "notfound": [
      "Проверьте адрес или перейдите к основным разделам сайта.",
      "Check the address or continue to the main sections."
    ]
  },
  "ui": {
    "ru": {
      "nav": [
        "Продукция",
        "Применение",
        "Логистика",
        "Качество",
        "О нас"
      ],
      "quote": "Запросить КП",
      "read": "Подробнее",
      "view": "Смотреть ассортимент",
      "contact": "Отправить запрос",
      "eyebrow": "УПАКОВКА ДЛЯ ПРОМЫШЛЕННОСТИ",
      "trust": [
        "Спецификация под задачу",
        "Документы по партии",
        "Расчёт условий поставки"
      ],
      "productHead": "Продукция",
      "applicationHead": "Решения по применению",
      "processHead": "Как мы работаем",
      "process": [
        [
          "01",
          "Запрос",
          "Продукт, объём, требования"
        ],
        [
          "02",
          "Спецификация",
          "Параметры и доступные документы"
        ],
        [
          "03",
          "Предложение",
          "Цена, базис и маршрут"
        ],
        [
          "04",
          "Подтверждение",
          "Согласование партии и отгрузки"
        ]
      ],
      "checksHead": "Что проверяем перед отгрузкой",
      "checks": [
        "Ширина, толщина и вес нетто рулонов",
        "Намотка, втулка и внешний вид упаковки",
        "Маркировка, число мест, упаковочный лист",
        "Пломбы и транспортные документы — по типу отправки"
      ],
      "groupHead": "Форматы и категории",
      "technicalHead": "Параметры для согласования",
      "tableCol": [
        "Параметр",
        "Что уточнить"
      ],
      "tableVal": "По запросу / в спецификации",
      "ctaHeading": "Обсудим вашу спецификацию",
      "ctaText": "Укажите нужный материал, количество и место доставки — подготовим параметры для коммерческого предложения.",
      "allProducts": "Все материалы",
      "allApplications": "Все применения",
      "related": "Связанные материалы",
      "requirements": "Что указать в запросе",
      "aboutWork": "Комплектация и сопровождение",
      "qualityNote": "Контроль проводится в объёме, согласованном для конкретной партии.",
      "photo": "Фотографии упаковки и погрузки",
      "note": "Условия зависят от конкретной партии и уточняются до размещения заказа.",
      "routeHead": "Транспортные направления",
      "routeA": "Энзели — Астрахань",
      "routeB": "Астара — Россия",
      "routeDescA": "Каспийская доставка с учётом расписания, порта выгрузки и внутриконтинентального участка.",
      "routeDescB": "Автоперевозка с учётом пограничных процедур, транзита и адреса получателя.",
      "quoteHead": "Запрос коммерческого предложения",
      "formLead": "Заполните технические данные. Кнопка подготовит письмо в вашем почтовом приложении.",
      "labels": [
        "Контактное лицо",
        "Компания / ИНН",
        "Электронная почта",
        "Материал",
        "Толщина / ширина / втулка",
        "Вес или количество",
        "Город доставки",
        "Дополнительные требования"
      ],
      "fields": [
        "Ваше имя",
        "Компания и ИНН (при наличии)",
        "name@company.ru",
        "Выберите продукт",
        "Например: 23 мкм, 500 мм, 76 мм",
        "Например: 20 т",
        "Например: Астрахань",
        "Технические условия, вид упаковки, Incoterms"
      ],
      "submit": "Подготовить письмо",
      "copy": "Скопировать запрос",
      "copyDone": "Текст скопирован.",
      "prepared": "Почтовое приложение открыто. Проверьте адрес и отправьте письмо.",
      "prepareError": "Не удалось открыть почту. Скопируйте запрос и отправьте самостоятельно.",
      "invalid": "Проверьте обязательные поля и адрес электронной почты.",
      "privacyAgree": "Понимаю, что письмо будет подготовлено на моём устройстве и отправится только после моего подтверждения.",
      "faqs": [
        [
          "Можно ли запросить паспорт качества?",
          "Укажите нужный материал и требования к документам. Доступность TDS и паспорта качества зависит от производителя и партии."
        ],
        [
          "Как согласуется толщина и вес нетто?",
          "Необходимые значения фиксируются в спецификации до размещения заказа. При необходимости согласуются методы проверки."
        ],
        [
          "Как рассчитывается доставка?",
          "По виду продукции, объёму, пункту назначения, выбранному маршруту и условиям Incoterms."
        ],
        [
          "Есть ли образцы для испытаний?",
          "Возможность предоставления образцов, их состав и условия отправки уточняются при запросе."
        ],
        [
          "Что нужно для запроса цены?",
          "Наименование материала, толщина, ширина, вес нетто, объём, город доставки и контактные данные."
        ]
      ],
      "footerLine": "Полимерные упаковочные материалы для промышленных закупок",
      "legal": "Правовая информация",
      "allRights": "Все права защищены",
      "breadcrumb": "Главная",
      "photoAlt": "Реальная фотография упаковки и погрузки продукции"
    },
    "en": {
      "nav": [
        "Products",
        "Applications",
        "Logistics",
        "Quality",
        "About"
      ],
      "quote": "Request quote",
      "read": "Explore",
      "view": "Browse products",
      "contact": "Send inquiry",
      "eyebrow": "INDUSTRIAL PACKAGING SUPPLY",
      "trust": [
        "Specification-based sourcing",
        "Batch documentation",
        "Delivery planning"
      ],
      "productHead": "Product categories",
      "applicationHead": "Solutions by application",
      "processHead": "How we work",
      "process": [
        [
          "01",
          "Inquiry",
          "Product, volume, requirements"
        ],
        [
          "02",
          "Specifications",
          "Parameters and documentation"
        ],
        [
          "03",
          "Quotation",
          "Pricing, terms and route"
        ],
        [
          "04",
          "Confirmation",
          "Confirm batch and shipment"
        ]
      ],
      "checksHead": "Pre-shipment checks",
      "checks": [
        "Film width, gauge and net roll weight",
        "Winding, cores and packing appearance",
        "Labels, package count and packing list",
        "Seals and transport documents when applicable"
      ],
      "groupHead": "Formats & categories",
      "technicalHead": "Parameters to confirm",
      "tableCol": [
        "Parameter",
        "Required information"
      ],
      "tableVal": "On request / in specification",
      "ctaHeading": "Let's discuss your requirements",
      "ctaText": "Share the material, order volume and destination to prepare a specification-based quotation.",
      "allProducts": "All products",
      "allApplications": "All applications",
      "related": "Related materials",
      "requirements": "Information for a quotation",
      "aboutWork": "Sourcing and shipment coordination",
      "qualityNote": "Inspection scope is agreed separately for each shipment.",
      "photo": "Packaging and loading photographs",
      "note": "Commercial terms depend on the specific shipment and are agreed before an order is placed.",
      "routeHead": "Transport corridors",
      "routeA": "Anzali — Astrakhan",
      "routeB": "Astara — Russia",
      "routeDescA": "Caspian shipping considering vessel schedules, discharge port and inland delivery.",
      "routeDescB": "Road freight considering border clearance, transit and final destination.",
      "quoteHead": "Request a quotation",
      "formLead": "Enter the technical details. The form prepares an email in your own mail application.",
      "labels": [
        "Contact person",
        "Company / registration number",
        "Email address",
        "Material",
        "Gauge / width / core",
        "Quantity or weight",
        "Destination city",
        "Additional requirements"
      ],
      "fields": [
        "Your name",
        "Company name and ID if available",
        "name@company.com",
        "Select material",
        "e.g. 23 μm, 500 mm, 76 mm",
        "e.g. 20 t",
        "e.g. Astrakhan",
        "Specification, packing, Incoterms"
      ],
      "submit": "Prepare email",
      "copy": "Copy inquiry",
      "copyDone": "Inquiry copied.",
      "prepared": "Your email application was opened. Review the recipient and send the message.",
      "prepareError": "Unable to open an email application. Copy the inquiry and send it manually.",
      "invalid": "Check the required fields and email format.",
      "privacyAgree": "I understand that the email is prepared on my device and is sent only when I confirm it.",
      "faqs": [
        [
          "Can I request a quality passport?",
          "Please indicate the material and documentation needed. TDS and quality passport availability depend on the producer and batch."
        ],
        [
          "How are film gauge and net weight agreed?",
          "Required values are agreed in the purchase specification. Inspection methods may be discussed where necessary."
        ],
        [
          "How are delivery terms calculated?",
          "Based on product, order volume, destination, transport route and selected Incoterms."
        ],
        [
          "Are trial rolls available?",
          "Sample availability and shipping arrangements are discussed for each request."
        ],
        [
          "What information is required to receive a quote?",
          "Material type, gauge, width, net weight, quantity, destination and contact details."
        ]
      ],
      "footerLine": "Polymer packaging materials for industrial procurement",
      "legal": "Legal",
      "allRights": "All rights reserved",
      "breadcrumb": "Home",
      "photoAlt": "Authentic photo of packaging and warehouse loading"
    }
  },
  "techExamples": {
    "ru": {
      "gauge": "мкм по спецификации",
      "width": "мм по запросу",
      "netweight": "кг, без массы втулки",
      "core": "внутренний диаметр и масса",
      "prestretch": "по TDS и типу оборудования",
      "force": "по методу испытания",
      "winding": "длина и качество намотки",
      "rewinding": "ширина и требования линии",
      "thickness": "мм по спецификации",
      "breaking": "по протоколу испытаний",
      "shrink": "условия теста и направление",
      "structure": "слои и назначение",
      "application": "условия эксплуатации",
      "incoterms": "EXW, FCA, CPT, DAP — по договору",
      "invoice": "инвойс и упаковочный лист",
      "origin": "по подтверждённому происхождению",
      "compliance": "если применимо к товару",
      "route": "порт / погранпереход / адрес",
      "mode": "морской или автомобильный",
      "schedule": "по графику перевозчика",
      "destination": "точный адрес получателя",
      "responsibility": "согласно договорному базису",
      "transport": "по виду транспорта",
      "label": "товар, партия, количество",
      "seals": "тип и номер",
      "photos": "по согласованию",
      "testing": "при наличии",
      "marking": "привязка партии к этикеткам",
      "availability": "по подтверждённому комплекту"
    },
    "en": {
      "gauge": "μm per specification",
      "width": "mm on request",
      "netweight": "kg excluding core",
      "core": "internal diameter and weight",
      "prestretch": "per TDS and equipment type",
      "force": "as specified by test method",
      "winding": "length and winding quality",
      "rewinding": "width and line requirements",
      "thickness": "mm per specification",
      "breaking": "based on test report",
      "shrink": "test conditions and direction",
      "structure": "layers and intended use",
      "application": "operating conditions",
      "incoterms": "EXW, FCA, CPT, DAP — as agreed",
      "invoice": "invoice and packing list",
      "origin": "subject to confirmed origin",
      "compliance": "where applicable",
      "route": "port / crossing / delivery address",
      "mode": "sea or road",
      "schedule": "subject to carrier timetable",
      "destination": "exact consignee address",
      "responsibility": "per agreed Incoterms",
      "transport": "based on transport mode",
      "label": "product, batch, quantity",
      "seals": "type and number",
      "photos": "as agreed",
      "testing": "if available",
      "marking": "batch-to-label matching",
      "availability": "per confirmed document set"
    }
  },
  "tableById": {
    "hand": [
      "gauge",
      "width",
      "netweight",
      "core"
    ],
    "machine": [
      "gauge",
      "width",
      "prestretch",
      "force",
      "winding"
    ],
    "jumbo": [
      "width",
      "netweight",
      "core",
      "rewinding"
    ],
    "pet": [
      "width",
      "thickness",
      "breaking"
    ],
    "shrink": [
      "gauge",
      "width",
      "shrink"
    ],
    "agri": [
      "structure",
      "gauge",
      "width",
      "application"
    ],
    "stretch": [
      "gauge",
      "width",
      "netweight",
      "core"
    ],
    "products": [
      "gauge",
      "width",
      "netweight",
      "core"
    ],
    "logistics": [
      "incoterms",
      "invoice",
      "origin",
      "compliance"
    ],
    "routes": [
      "route",
      "mode",
      "schedule"
    ],
    "incoterms": [
      "incoterms",
      "destination",
      "responsibility"
    ],
    "documents": [
      "invoice",
      "transport",
      "origin",
      "compliance"
    ],
    "quality": [
      "label",
      "netweight",
      "seals",
      "photos"
    ],
    "inspection": [
      "label",
      "seals",
      "testing"
    ],
    "batch": [
      "marking",
      "availability",
      "testing"
    ],
    "guide": [
      "gauge",
      "width",
      "prestretch",
      "netweight"
    ]
  },
  "specLabels": {
    "gauge": {
      "ru": "Толщина",
      "en": "Film gauge"
    },
    "width": {
      "ru": "Ширина",
      "en": "Width"
    },
    "netweight": {
      "ru": "Вес нетто рулона",
      "en": "Net roll weight"
    },
    "core": {
      "ru": "Втулка",
      "en": "Core"
    },
    "prestretch": {
      "ru": "Предрастяжение",
      "en": "Pre-stretch"
    },
    "force": {
      "ru": "Усилие натяжения",
      "en": "Holding force"
    },
    "winding": {
      "ru": "Намотка",
      "en": "Winding"
    },
    "rewinding": {
      "ru": "Перемотка",
      "en": "Rewinding"
    },
    "thickness": {
      "ru": "Толщина ленты",
      "en": "Strap thickness"
    },
    "breaking": {
      "ru": "Разрывная нагрузка",
      "en": "Breaking strength"
    },
    "shrink": {
      "ru": "Свойства усадки",
      "en": "Shrink properties"
    },
    "structure": {
      "ru": "Структура плёнки",
      "en": "Film structure"
    },
    "application": {
      "ru": "Применение",
      "en": "Application"
    },
    "incoterms": {
      "ru": "Базис Incoterms",
      "en": "Incoterms basis"
    },
    "invoice": {
      "ru": "Инвойс / упаковочный лист",
      "en": "Invoice / packing list"
    },
    "origin": {
      "ru": "Происхождение (если применимо)",
      "en": "Origin (if applicable)"
    },
    "compliance": {
      "ru": "Документы соответствия (если требуется)",
      "en": "Conformity if required"
    },
    "route": {
      "ru": "Маршрут",
      "en": "Route"
    },
    "mode": {
      "ru": "Вид транспорта",
      "en": "Transport mode"
    },
    "schedule": {
      "ru": "График (по запросу)",
      "en": "Schedule (on request)"
    },
    "destination": {
      "ru": "Пункт назначения",
      "en": "Destination"
    },
    "responsibility": {
      "ru": "Распределение обязанностей",
      "en": "Responsibilities"
    },
    "transport": {
      "ru": "Транспортные документы",
      "en": "Transport documentation"
    },
    "label": {
      "ru": "Маркировка",
      "en": "Labeling"
    },
    "seals": {
      "ru": "Пломбы",
      "en": "Seals"
    },
    "photos": {
      "ru": "Фотографии партии",
      "en": "Batch photos"
    },
    "testing": {
      "ru": "Протоколы испытаний (если есть)",
      "en": "Test reports (if available)"
    },
    "marking": {
      "ru": "Маркировка и трассировка",
      "en": "Marking & traceability"
    },
    "availability": {
      "ru": "Наличие документов",
      "en": "Document availability"
    },
    "requirement": {
      "ru": "Требование",
      "en": "Requirement"
    },
    "source": {
      "ru": "Основание / источник",
      "en": "Evidence / source"
    },
    "status": {
      "ru": "Подтверждение",
      "en": "Confirmation"
    }
  }
};
if(process.argv.includes('--audit')){console.log('Routes:',data.sitemapNodes.length,'Languages: ru,en');console.log('Total pages:',data.sitemapNodes.length*2);}
export default data;
