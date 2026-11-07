(function () {
const G = "https://lh7-us.googleusercontent.com/sitesv-images-rt/";
const img = {
  dog1: G + "AMxu72vz2JSCsLaO01BvHbEzPupdailI4nnmzjaD2bEfvdD54xpoqU-r3ST_6K9D-vh_m2Ay1sf1LeMKY2x3OxULDUvkZ60cFaFpYm0y78YktEDIhRS23Xs0VZRan2ivyhzL6bGh7igufb234VxAsExiHGaFp_QrGLRu5LRFN8YtP8NPd7DjnW_wrnefbitCEMIo-g5y84qgXwyK0KQSUCE_Mzi5yv53CwO4iDn-a3kenzA=w1280",
  dog2: G + "AMxu72sNWr-TY55QO3125ndNAoccrHhQ9W2phStV_pXkItBZgvAhOxGAYcnMVErG3DTrUFdU7vZqPVRv1SeJAfnM90hyw6tYvl_zi4_WYGtVrERT2r7BhZAkdE9SphV3GomLOzwsKdch3hcirIIkcoG5ueVCNMyZvIx9Euq2fQEx-Q1wvCXj5B_U_8umqoR4DW2YfwzyVFlEEyMH47jFM0SN9H9eujNOuYZpoDmnaTv-QA8=w1280",
  dog3: G + "AMxu72vQjfRX5tIx0-ORNUvA2o9Rnv6UASr7bkYbsxF5a0bpw6arorNN7xZfDTUJAMLFWDtPMnuYqWU4hoA-PI-mI9m__inJuAYWCf88s7svsJXvlQuhpGfVFizkbehRWnj1u16IV73S6LPsc7UleM1dkaZyWwlkBmRRlbDo8_oq8Qdx_CKcQuQeIAOFz02vk9SQ8mRal0uahO_JWodatWFUTiTptbpRJE3Iqd_nSkRQA-0=w1280",
  p1: G + "AMxu72s6aM7mbn3g0ZyesB_rFA0Vm5Gz5gLlB8fVj1nMgvQGx7dscdyvE-e8ExWv_BXiv_Pcxx1cLF9xqL6QzTYpTFMlg5obX-tfQXAFzHvnvwRrTUqokBOvslIcPAmll8n7gRhIdwmK3o_ndtK8yCABSGaVZMCe894E-8Vm_wULsRQoxyQ9U04s6g0afOTZjg7SYFBnCZbY_iIkv48oSkD82JdAXS-Hvy2Z-s1W09Ih=w1280",
  p2: G + "AMxu72tz24CKRpH_iAyk5BeFwz5ecdQf6So7auAt8UaWOukagv-vQksbtsjxo7Rd5PmM8A8UsBR62BjVdDwVgFmzRWqo0OJ6gM5_jdmrKk8PAG6qo39xASgWT0gkRkCqxFvSLKrIFbmfNFDYGb1qfXldfkJNYOMqLKjwZSzOsruMC_pOElnQhw2430mbC6HALJDG0sSmX0mzm17-APTXnPJWjatE8ZCYGxZSWfVd8CBC=w1280",
  p3: G + "AMxu72uSKvyvlsakmEodtEYbo7sqSpV4EfTr7RcQQY03Tse6Y_Q5VVOjAYJvVUm1_4BoqdNQuO5MvHKrNyKH0YAz334Cib3-_oDWdSPN7iRHWzQ6mOLEEWyaazWIGbNhaJzkTNaOTV3JGjcEZpkmk02kUJka_SbhYuz5lmSohzX4XQTCXCAnuO1OqhwSwEqIKRf-ZETzA0EfsDHEZbXZmS-8tcRLY3saxquxbw78eFRIbZ8=w1280",
  p4: G + "AMxu72uS7PjrJySx1ru7kXUaHRnlYb9UgmPDWbIR9fIOpU1FPX8jEtu6orZLHkCn9ZWFXhN88d3DJTD4HwLsH383AfOH61L3U5Vj3M22T68vflIlAvC4uidQDbZmf-mXVU0RYLvUnwJcHOfdBWbi91VgEaHq4KqELtD2W1vJiJp05elglHkiPWGtpZU-5Ltp-PPUlIIROlFhr4j2JUoqUnZrGC-uunMGvIUNgBHWlBEAdg4=w1280",
  cip: G + "AMxu72u5Eg7607mZPW0fXBrNY-c43pt3Am542utwdahS9G_LRsHAmFN4GprRVlEgsIArzJMizoti3OPkV7QQw3SWaST4Rd7x8UmcxCAz8dCesZ0etgs4n3zBqaZWM4oVwXSliGYIZOPA5wHMkn9d7uEW3_Dfd2s_5YH92eqP6d3r73piOs5Fto3TBVcGe3fk1_nk0JArXGaQhe7yrCK8CrpwdmHNE-Nk02jFSYGCDEDuSng=w1280",
  vakc: G + "AMxu72v0Dfcsegtxbgxvx6k53iqr3jZoTicxEZFgohPdDCvgAWBKOA3Mkwu5hMs0E4Y2xGfQIDxvO4oNmQschcEyLzoqy1isyeSliP4j1sp7syRGydiUt6Qa5YdEhY3mH3HatL9h2KZ3njdy7cJ0x9lB1fq1pol7RYyfrqr6egXV4OCOqi26csIddUI74IfblLNIRAOnV1Kdl17_yC-VNCHBR3zzHjFAVpEbabhsddAS=w1280",
  orto: G + "AMxu72v1tVQIbrEtW6oev-4IMQdMoCSHkNzDQSc6Et3GKsI1AXIT4fXdB9Hes5vgqmNhWjpKszCNMudqz_tePG_5XhDIc56J1N0IiXL7GBhaZBU2tQ68C7R9coczk0t87xADv61X99ukpvlRoMSRvN3M3FwslTftmn670iQy3V3Me_3NuxfB1S6BJmB9BXIKabE6LV0FwUMG_-g-wCaF1QvhdmfxECftgL5fljMRB5KDa_o=w1280",
  hir: G + "AMxu72t-Mokqp5fnmPeu8JS-TVlQZy9IbRgjaeVQ0I8sJmuQy8Rlk_i3nw05pUDvwatmIDOp4cuM3jPf7bqkC4lEAGcnN5RZ4IpHmOB7ZtCKIj54ZoEJho-2cI9J9qWt-sAzvo3p3d5JLcOXo9gIT85E-ElySEZ8jRPhdFg5hWw0fTTibimNr9OiQerKO-4EjblVf7M606tWbmJA1D2Kmg5JUXXE0X2zPKpfHwMCvdruEks=w1280",
  kam: G + "AMxu72u89nfdGlk1Bmj8JdQOqRWbdu-8etvoLLSEdgNBMYIOo88d6pj3cZe0PTlvUUEZ1dVnIH7zO700pKN6mH7-dBwD61vuzgOd-pHWdvImUazIPp4wfaLMw12tgBU-KcUrj207ECA2H7q5op02jb_HMHZK1CTlU428Puj_-tH0CQPR8uff3OxvDGgREuHhH0ZgSyo8XRO1akboqOcnh_bQxn9UV087hPOtt7tZQ621p-s=w1280",
  sav: G + "AMxu72svqd9s_1wJgi_GxnbNtNhIP876AEXiA5EAX_9tJJWqNSxC81U_TIVPz7NU1ZHBBYcUWCm-VxXvD-70GLMlhpSTthpV54tu7RwHI6-qUplRmI--vrFzYQjbMlWPfkVKdmtZmbVAAbka8U5wNKeuU-hVeJMAmAmtDwH5NFG_s09qP16MExG0OY98__M0IEzkidev5ZpkeAzA_FLUYbGIrVD90FDP6zIfWKfJ3O320x8=w1280",
  galja: G + "AMxu72sVQewLnI6RYH_w-ZGKtXv8_xY4woZ514ObLtc20rCGaCYGOtj7rY50ZZOiT8en195HCjleTR6IkFDEgVbOoMeUej23tsqQpAqq2PAINpoOrMZZyDssoRLodYA1dszrFVqCgYS-CA2Fvqgcy381Wux9Bka0fvaX40a0NTxr4rIYExmcgXsBDKTB1BV43RhDnPsLT7jIrbZ70K1ChV00h_Lo7k1cmzXMP-5ye_u_=w1280",
  jovana: G + "AMxu72vc_OG0eMirJO5MK8hMa_hdzziRwkxTW_wGWJ__c2FtLfVcYWMOcp1WOr_7whEtqT83QGmeMVeefufaNQzWuJrez2PY5WEdKDup6Sjk41u_FdlgCcwcqjMmgeFScWT68s_uyCVy52o_AlyAGZ4vUHFqwXSttYoysFxhQyrj_fVeDc2al-nkAm33Bm02AmAzlt3K2pbN_KjGKlqpowZqcyvvPg3QHQHxXQ4_0g=w1280"
};

const oldPhotos = Object.assign({}, img);
Object.keys(img).forEach(k => { img[k] = ""; });
const contact = {
  phone1: "063 639 521", tel1: "tel:+38163639521",
  phone2: "063 411 523", tel2: "tel:+38163411523",
  email: "vetprincess19@gmail.com", mailto: "mailto:vetprincess19@gmail.com",
  ig: "@va_vet_princess", igUrl: "https://www.instagram.com/va_vet_princess/",
  viber: "viber://chat?number=%2B38163639521", whatsapp: "https://wa.me/38163639521",
  maps: "https://www.google.com/maps/search/?api=1&query=VA+Vet+Princess+Bulevar+despota+Stefana+61+Beograd",
  mapEmbed: "https://maps.google.com/maps?q=VA%20Vet%20Princess%2C%20Bulevar%20despota%20Stefana%2061%2C%20Beograd&z=16&output=embed"
};

const services = [
  { id: "preventiva", icon: "ph-syringe", img: img.vakc,
    sr: { name: "Preventiva i redovna nega", short: "Pregledi, vakcinacija, čipovanje i zaštita od parazita.",
      intro: "Redovan pregled jednom godišnje, a kod starijih ljubimaca i onih sa hroničnim bolestima i češće, omogućava veterinaru da prati opšte zdravstveno stanje, težinu, zube, srce, pluća, kožu, oči, uši i zglobove.",
      items: ["Redovni veterinarski pregledi", "Vakcinacija pasa i mačaka", "Čipovanje i izdavanje pasoša za kućne ljubimce", "Zaštita od unutrašnjih i spoljašnjih parazita (dehelmintizacija, tretmani protiv buva i krpelja)", "Savetovanje o ishrani, nezi i ponašanju"] },
    en: { name: "Prevention and routine care", short: "Check-ups, vaccination, microchipping and parasite control.",
      intro: "A check-up once a year, and more often for older pets and those with chronic conditions, lets the vet follow overall health, weight, teeth, heart, lungs, skin, eyes, ears and joints.",
      items: ["Routine veterinary check-ups", "Vaccination of dogs and cats", "Microchipping and pet passports", "Internal and external parasite control (deworming, flea and tick treatments)", "Advice on nutrition, care and behaviour"] } },
  { id: "dijagnostika", icon: "ph-heartbeat", img: img.orto,
    sr: { name: "Dijagnostika", short: "Laboratorija, ultrazvuk i rendgen na jednom mestu.",
      intro: "Ljubimci često umeju da prikriju bol i nelagodnost. Dijagnostika u ambulanti pomaže da na vreme otkrijemo promene koje još uvek ne daju jasne simptome.",
      items: ["Klinički pregled", "Laboratorijske analize (krv, urin, brzi testovi)", "Ultrazvučna dijagnostika", "Rendgen (RTG) dijagnostika"] },
    en: { name: "Diagnostics", short: "Laboratory, ultrasound and X-ray in one place.",
      intro: "Pets often hide pain and discomfort. In-clinic diagnostics help us find changes early, before they show clear symptoms.",
      items: ["Clinical examination", "Laboratory tests (blood, urine, rapid tests)", "Ultrasound diagnostics", "X-ray (RTG) diagnostics"] } },
  { id: "lecenje", icon: "ph-pill", img: img.cip,
    sr: { name: "Lečenje i terapija", short: "Akutne i hronične bolesti, infuzije, hospitalizacija.",
      intro: "Lečimo akutne i hronične bolesti i pratimo pacijente tokom terapije, uz savremene metode kao što su elektrohemoterapija i fotomodularna terapija.",
      items: ["Lečenje akutnih i hroničnih bolesti", "Infuziona terapija", "Davanje injekcija i oralnih terapija", "Previjanje rana i manje intervencije", "Hospitalizacija i nadzor pacijenata", "Elektrohemoterapija", "Fotomodularna terapija"] },
    en: { name: "Treatment and therapy", short: "Acute and chronic illness, IV therapy, hospitalisation.",
      intro: "We treat acute and chronic illness and follow patients through therapy, using modern methods such as electrochemotherapy and photobiomodulation therapy.",
      items: ["Treatment of acute and chronic illness", "Intravenous fluid therapy", "Injections and oral medication", "Wound dressing and minor procedures", "Hospitalisation and patient monitoring", "Electrochemotherapy", "Photobiomodulation therapy"] } },
  { id: "hirurgija", icon: "ph-first-aid-kit", img: img.hir,
    sr: { name: "Hirurgija", short: "Sterilizacija, kastracija, mekotkivna i ortopedska hirurgija.",
      intro: "Hirurške zahvate radi tim sa specijalizacijom iz hirurgije, uz savetovanje pre i posle intervencije.",
      items: ["Sterilizacija i kastracija", "Mekotkivna i ortopedska hirurgija", "Hirurgija zuba i oralne šupljine", "Hitne hirurške intervencije"] },
    en: { name: "Surgery", short: "Spaying, neutering, soft-tissue and orthopaedic surgery.",
      intro: "Procedures are performed by a team with a specialisation in surgery, with advice before and after every intervention.",
      items: ["Spaying and neutering", "Soft-tissue and orthopaedic surgery", "Dental and oral surgery", "Emergency surgery"] } },
  { id: "stomatologija", icon: "ph-tooth", img: img.kam,
    sr: { name: "Stomatologija", short: "Uklanjanje kamenca, lečenje desni i zuba.",
      intro: "Zdravi zubi i desni utiču na zdravlje celog organizma. Pregled zuba je deo svakog redovnog pregleda.",
      items: ["Ultrazvučno uklanjanje kamenca", "Lečenje oboljenja desni i zuba", "Vađenje zuba kada je neophodno"] },
    en: { name: "Dentistry", short: "Scale and polish, gum and tooth treatment.",
      intro: "Healthy teeth and gums affect the health of the whole body. A dental check is part of every routine examination.",
      items: ["Ultrasonic scaling", "Treatment of gum and tooth disease", "Tooth extraction when necessary"] } },
  { id: "ostalo", icon: "ph-storefront", img: img.sav,
    sr: { name: "Ostale usluge", short: "Stacionar, kućna nega, hrana i oprema.",
      intro: "U ambulanti možete kupiti i kvalitetnu hranu, poslastice, igračke i druge potrepštine za Vaše ljubimce.",
      items: ["Savetovanje pre i posle intervencija", "Prodaja kvalitetne hrane, poslastica i opreme", "Kućna nega i saveti za vlasnike", "Hitni slučajevi, i van radnog vremena", "Stacionar"] },
    en: { name: "Other services", short: "Inpatient ward, home care, food and supplies.",
      intro: "You can also buy quality food, treats, toys and other supplies for your pets at the clinic.",
      items: ["Advice before and after procedures", "Quality food, treats and supplies", "Home care and advice for owners", "Emergencies, also outside working hours", "Inpatient ward"] } }
];

const team = [
  { id: "galja", img: img.galja,
    sr: { name: "dr vet. med. Galja Isajev", role: "Osnivačica ambulante",
      bio: [
        "Vet Princess vodi dr Galja Isajev, doktorka veterinarske medicine i osnivačica ove ambulante. Diplomu Fakulteta veterinarske medicine Univerziteta u Beogradu stekla je 2000. godine, a prvu privatnu veterinarsku ambulantu pokrenula je 2007. Vet home blanko, koja se usmerila prvenstveno ka CNR programu francuskih i austrijskih organizacija, kada je sterilisala preko 100.000 mačaka i 60.000 pasa, a volontirala je i u terapijskim i hirurškim sanacijama problema uličnih životinja uz istovremeni rad u ambulanti i posvećenost brizi i lečenju vlasničkih životinja.",
        "2015.-2018. upušta se u međunarodni rotacioni staž, gde stečena znanja u Nemačkoj, Omanu i Americi objedinjuje u svoju sopstvenu praksu, poduprevši je mnogobrojnim međunarodnim kongresima i radionicama, o kojima svedoče ne samo veliki broj priznanja, već i preko 6.000 stalnih, registrovanih pacijenata. Donela je na naše prostore američku tehniku sanacije BOAS-a i edukaciju vlasnika kako živeti sa brahicefaličnim psima.",
        "2018-e krunisala je svoja usavršavanja osnivanjem Vet princess-a, koja je opremljena najnovijom opremom. Stalnim praćenjem noviteta u veterinarskoj medicini uvela je i posvetila pažnju fotomodularnoj terapiji, hirurgiji primenom fotomodularnog noža, onkološkoj i plastičnoj hirurgiji, uz primenu elektrohemo terapije. Njen pristup svakom pacijentu je kao prema sopstvenim ljubimcima: pažljivo, uz oslonac na iskustvo, kao i razumevanje da odlazak veterinaru je uvek stres i za vlasnika i za pacijenta, i da im je u tim trenucima podrška neophodna."
      ] },
    en: { name: "Dr Galja Isajev, DVM", role: "Founder",
      bio: [
        "Vet Princess is led by Dr Galja Isajev, doctor of veterinary medicine and founder of the clinic. She graduated from the Faculty of Veterinary Medicine, University of Belgrade, in 2000, and opened her first private clinic, Vet home blanko, in 2007. It focused mainly on the CNR programme of French and Austrian organisations, during which she spayed and neutered more than 100,000 cats and 60,000 dogs, while volunteering in the treatment and surgery of street animals and caring for owned pets at the clinic.",
        "From 2015 to 2018 she completed an international rotating internship in Germany, Oman and the United States, bringing that knowledge into her own practice, supported by many international congresses and workshops. Her work is reflected in numerous awards and more than 6,000 regular, registered patients. She introduced the American technique for BOAS surgery to the region, along with owner education on living with brachycephalic dogs.",
        "In 2018 she founded Vet Princess, equipped with the latest equipment. Following new developments in veterinary medicine, she introduced photobiomodulation therapy, surgery with a photomodulation scalpel, oncological and plastic surgery, and electrochemotherapy. She treats every patient as her own: carefully, relying on experience, and knowing that a visit to the vet is always stressful for both owner and pet, and that support matters in those moments."
      ] } },
  { id: "jovana", img: img.jovana,
    sr: { name: "spec. dr vet. med. Jovana Petrović", role: "Doktor veterinarske medicine",
      bio: [
        "Dr Jovana Petrović je doktor veterinarske medicine i članica tima ambulante Vet Princess. Završila je fakultet veterinarske medicine Univerziteta u Beogradu 2019. godine, gde je i specijalizirala hirurgiju 2025. godine, čime je dodatno unapredila svoje znanje i kliničke veštine.",
        "Profesionalni razvoj kontinuirano gradi kroz brojne seminare, stručne edukacije i kongrese iz oblasti veterinarske hirurgije i savremenih metoda lečenja životinja. Redovno se upoznaje sa novinama u struci — od naprednih dijagnostičkih postupaka do inovativnih terapijskih pristupa — i nastoji da stečena znanja primeni u svakodnevnoj praksi. Veruje da je stalno usavršavanje ne samo profesionalna obaveza, već i odgovornost prema svakom pacijentu koji joj se poveri.",
        "U svakodnevnom radu sa ljubimcima neguje temeljan i strpljiv pristup. Veruje da svaki pregled treba da počne pažljivim slušanjem vlasnika, jer se tako najbolje razume istorija problema i trenutno stanje životinje. Posebnu pažnju posvećuje jasnoj komunikaciji sa vlasnicima, koji uvek dobijaju razumljive informacije o stanju i mogućnostima lečenja svog ljubimca."
      ] },
    en: { name: "Dr Jovana Petrović, DVM, specialist", role: "Doctor of veterinary medicine",
      bio: [
        "Dr Jovana Petrović is a doctor of veterinary medicine and a member of the Vet Princess team. She graduated from the Faculty of Veterinary Medicine, University of Belgrade, in 2019, and completed her specialisation in surgery there in 2025.",
        "She keeps developing through seminars, professional training and congresses in veterinary surgery and modern treatment methods, following new developments from advanced diagnostics to innovative therapies, and applying them in everyday practice. She believes continuous learning is a responsibility towards every patient in her care.",
        "With pets she is thorough and patient. She believes every examination should begin by listening carefully to the owner, and she makes sure owners always receive clear information about their pet's condition and treatment options."
      ] } }
];

const articles = [
  { id: "brahi",
    sr: { title: "Mopsi, buldozi i druge kratkonose rase", lead: "Zašto pas sa kratkom njuškom ponekad teško diše.",
      body: [
        "Rase sa kratkom njuškom, kao što su mops, francuski i engleski buldog, zovu se brahicefalične. Zbog građe lobanje kod mnogih od njih disajni putevi su suženi.",
        "Glasno disanje, hrkanje i brzo zamaranje kod ovih pasa često se smatraju normalnim, ali mogu biti znak sindroma opstrukcije disajnih puteva (BOAS). Ovi psi teže podnose vrućinu i napor, pa im leti treba posebna pažnja.",
        "Dr Galja Isajev je na naše prostore donela američku tehniku hirurške sanacije BOAS-a i edukaciju vlasnika o životu sa brahicefaličnim psima. Ako Vaš pas glasno diše ili se brzo zamara, javite nam se."
      ] },
    en: { title: "Pugs, bulldogs and other short-nosed breeds", lead: "Why a dog with a short muzzle sometimes struggles to breathe.",
      body: [
        "Short-muzzled breeds such as pugs and French and English bulldogs are called brachycephalic. Because of the shape of their skull, many of them have narrowed airways.",
        "Noisy breathing, snoring and tiring quickly are often seen as normal in these dogs, but they can be signs of brachycephalic obstructive airway syndrome (BOAS). These dogs cope less well with heat and exertion, so they need extra care in summer.",
        "Dr Galja Isajev introduced the American technique for BOAS surgery to the region, along with owner education on living with brachycephalic dogs. If your dog breathes noisily or tires quickly, get in touch."
      ] } },
  { id: "predenje",
    sr: { title: "Zašto mačke predu", lead: "Predenje ne znači uvek da je mačka zadovoljna.",
      body: [
        "Mačke najčešće predu kada su opuštene: dok ih mazite, dok se odmaraju ili kada se smeštaju pored Vas.",
        "Ipak, mačke ponekad predu i kada su pod stresom, uplašene ili ih nešto boli. Zato predenje treba posmatrati zajedno sa ostalim ponašanjem.",
        "Ako mačka prede, a pritom se skriva, ne jede ili se ponaša drugačije nego inače, dovedite je na pregled."
      ] },
    en: { title: "Why cats purr", lead: "Purring doesn't always mean a cat is content.",
      body: [
        "Cats most often purr when they are relaxed: while being stroked, while resting or when settling next to you.",
        "However, cats sometimes also purr when they are stressed, frightened or in pain. That is why purring should be read together with the rest of their behaviour.",
        "If your cat is purring but also hiding, not eating or acting differently than usual, bring it in for a check-up."
      ] } },
  { id: "hrana",
    sr: { title: "Hrana sa naše trpeze koja škodi ljubimcima", lead: "Neke namirnice koje mi jedemo svakog dana za pse i mačke su otrovne.",
      body: [
        "Čokolada je otrovna za pse i mačke, a tamna čokolada i kakao su najopasniji.",
        "Grožđe i suvo grožđe mogu kod pasa da izazovu oštećenje bubrega. Crni i beli luk su štetni i za pse i za mačke, bilo da su sirovi, kuvani ili u prahu.",
        "Ksilitol, zaslađivač koji se nalazi u nekim žvakama i proizvodima bez šećera, za pse je vrlo opasan.",
        "Ako sumnjate da je ljubimac pojeo nešto od ovoga, odmah nas pozovite na 063 411 523."
      ] },
    en: { title: "Food from our table that harms pets", lead: "Some foods we eat every day are poisonous to dogs and cats.",
      body: [
        "Chocolate is poisonous to dogs and cats, and dark chocolate and cocoa are the most dangerous.",
        "Grapes and raisins can cause kidney damage in dogs. Onion and garlic are harmful to both dogs and cats, whether raw, cooked or powdered.",
        "Xylitol, a sweetener found in some chewing gum and sugar-free products, is very dangerous for dogs.",
        "If you suspect your pet has eaten any of these, call us right away on 063 411 523."
      ] } }
];

const gallery = [
  { src: img.dog1, sr: "Zdrav pas je srećan pas", en: "A healthy dog is a happy dog" },
  { src: img.p1, sr: "Njihov osmeh je naša najveća nagrada", en: "Their smile is our greatest reward" },
  { src: img.p2, sr: "Svaki rep, svaki pogled i svako maženje govore više od reči", en: "Every tail, every look and every cuddle says more than words" },
  { src: img.p3, sr: "Preventivna kontrola", en: "Preventive check-up" },
  { src: img.p4, sr: "Vakcinacija", en: "Vaccination" },
  { src: img.dog2, sr: "Pas na kontrolnom pregledu", en: "A dog at a follow-up check" },
  { src: img.dog3, sr: "Pregled", en: "Examination" },
  { src: img.cip, sr: "Čipovanje", en: "Microchipping" }
];

const t = {
  sr: {
    nav: { home: "Početna", services: "Usluge", team: "Tim", prices: "Cenovnik", gallery: "Pacijenti", blog: "Blog", faq: "FAQ", location: "Lokacija", contact: "Kontakt" },
    call: "Pozovite nas", callLong: "Pozovi 063 639 521", viber: "Viber", whatsapp: "WhatsApp",
    clinic: "Veterinarska ambulanta", topHours: "Svakog dana 08–21", topEmergency: "Hitni slučajevi",
    heroA: "Zdrav ljubimac,", heroB: "srećan vlasnik",
    heroSub: "Dobrodošli u Vet Princess – mesto gde se briga o Vašim ljubimcima temelji na znanju, iskustvu i iskrenoj ljubavi prema životinjama.",
    heroNote: "Zakažite pregled – briga o njima počinje na vreme.",
    hours: "Radno vreme", hoursVal: "08–21, svakog dana", everyDay: "Svakog dana", emergency: "Hitni slučajevi", address: "Adresa", addressVal: "Bulevar despota Stefana 61, Dorćol",
    weTreat: "Lečimo", dogs: "Pse", cats: "Mačke",
    servicesTitle: "Usluge", servicesLead: "Naša veterinarska ambulanta pruža kompletnu brigu o zdravlju Vaših ljubimaca – od prevencije do lečenja i hirurgije.",
    more: "Detaljnije", allServices: "Pogledajte sve usluge",
    teamTitle: "Naš tim", teamLead: "Vaš ljubimac je kod nas u sigurnim rukama.", meetTeam: "Upoznajte tim", homeTeamTitle: "Upoznajte tim", aboutUs: "O nama",
    patientsTitle: "Naši pacijenti", patientsLead: "Naši zadovoljni pacijenti i njihovi vlasnici – mali znak da je briga o zdravlju uvek najbolja odluka.", followIg: "Pratite nas na Instagramu", homePatientsTitle: "Neki od naših pacijenata", allPatients: "Pogledajte još slika",
    reviewsTitle: "Šta kažu vlasnici", reviewsLead: "Pročitajte utiske vlasnika na Google-u ili ostavite svoj.", reviewsRead: "Recenzije na Google-u", reviewsWrite: "Ostavite recenziju",
    blogTitle: "Blog", read: "Pročitaj",
    contactTitle: "Kako do nas", contactLead: "Bilo da želite da zakažete pregled, posavetujete se sa našim veterinarom, kupite hranu ili igračku, ili nam samo uputite pitanje – najlakše je da nas pozovete.",
    contactNote: "Naša veterinarska ambulanta se nalazi na granici opština Stari grad i Palilula.",
    directions: "Uputstva za dolazak", writeUs: "Pišite nam", phone: "Telefon", email: "Email",
    bookTitle: "Zakažite pregled", bookLead: "Na telefonu možete dobiti osnovne informacije, proveriti slobodne termine i zakazati posetu u vreme koje Vam najviše odgovara. Možete nam pisati i na Viber ili WhatsApp.",
    included: "Šta obuhvata", otherServices: "Ostale usluge", back: "Nazad",
    pricesTitle: "Cenovnik", pricesLead: "Cene počinju od navedenog iznosa i zavise od veličine ljubimca, stanja i potrebnih analiza. Za tačnu cenu nas pozovite – reći ćemo Vam je unapred.", priceCol: "Cena", onRequest: "Na upit", serviceCol: "Usluga", priceFrom: "od", priceUnit: "din", homePrices: "Cenovnik", homePricesLead: "Nekoliko najčešćih usluga. Pune cene pogledajte u cenovniku.", allPrices: "Pogledajte sve cene", priceNote: "Prikazane cene su okvirne i počinju od navedenog iznosa.",
    galleryTitle: "Naši pacijenti", galleryLead: "Mali i veliki, mirni i nestašni, svi su nam podjednako dragi. Još naših pacijenata upoznajte na Instagramu.",
    faqTitle: "Česta pitanja", faqAsk: "Niste pronašli odgovor?", faqAskLead: "Pozovite nas ili pišite na Viber i WhatsApp, rado ćemo Vam pomoći.",
    faq: [
      { q: "Kako da zakažem pregled?", a: "Pozovite nas ili popunite kontakt formu ispod." },
      { q: "Koje je radno vreme?", a: "Radimo svakog dana od 08 do 21 h." },
      { q: "Šta da radim u hitnom slučaju?", a: "Pozovite odmah 063 411 523. Hitne slučajeve primamo i van radnog vremena." },
      { q: "Koje životinje lečite?", a: "Psi i mačke." },
      { q: "Da li imate stacionar?", a: "Da. Imamo stacionar, hospitalizaciju i nadzor pacijenata." },
      { q: "Da li radite čipovanje i pasoš za putovanje?", a: "Da, čipujemo ljubimce i izdajemo pasoš za kućne ljubimce." },
      { q: "Da li mogu kod Vas da kupim hranu?", a: "Da. U ambulanti možete kupiti kvalitetnu hranu, poslastice, igračke i druge potrepštine." },
      { q: "Koliko košta pregled?", a: "Cene su na upit. Pozovite nas i reći ćemo Vam cenu unapred." }
    ],
    footer: "Veterinarska ambulanta Vet Princess · Stari grad, Dorćol, Palilula"
  },
  en: {
    nav: { home: "Home", services: "Services", team: "Team", prices: "Prices", gallery: "Patients", blog: "Blog", faq: "FAQ", location: "Location", contact: "Contact" },
    call: "Call us", callLong: "Call 063 639 521", viber: "Viber", whatsapp: "WhatsApp",
    clinic: "Veterinary clinic", topHours: "Every day 08–21", topEmergency: "Emergencies",
    heroA: "Healthy pet,", heroB: "happy owner",
    heroSub: "Welcome to Vet Princess – where care for your pets is built on knowledge, experience and a genuine love of animals.",
    heroNote: "Book a check-up – caring for them starts on time.",
    hours: "Opening hours", hoursVal: "08–21, every day", everyDay: "Every day", emergency: "Emergencies", address: "Address", addressVal: "Bulevar despota Stefana 61, Dorćol",
    weTreat: "We treat", dogs: "Dogs", cats: "Cats",
    servicesTitle: "Services", servicesLead: "Our clinic provides complete care for your pets' health – from prevention to treatment and surgery.",
    more: "Details", allServices: "See all services",
    teamTitle: "Our team", teamLead: "Your pet is in safe hands with us.", meetTeam: "Meet the team", homeTeamTitle: "Meet the team", aboutUs: "About us",
    patientsTitle: "Our patients", patientsLead: "Our happy patients and their owners – a small sign that caring for health is always the right decision.", followIg: "Follow us on Instagram", homePatientsTitle: "Some of our patients", allPatients: "See more photos",
    reviewsTitle: "What owners say", reviewsLead: "Read owners' reviews on Google or leave your own.", reviewsRead: "Reviews on Google", reviewsWrite: "Leave a review",
    blogTitle: "Blog", read: "Read",
    contactTitle: "How to find us", contactLead: "Whether you want to book a check-up, ask our vet for advice, buy food or a toy, or just ask a question – the easiest way is to call us.",
    contactNote: "Our clinic is on the border of Stari grad and Palilula.",
    directions: "Get directions", writeUs: "Write to us", phone: "Phone", email: "Email",
    bookTitle: "Book a check-up", bookLead: "By phone you can get basic information, check free slots and book a visit at the time that suits you best. You can also message us on Viber or WhatsApp.",
    included: "What's included", otherServices: "Other services", back: "Back",
    pricesTitle: "Prices", pricesLead: "Prices start from the amount shown and depend on your pet's size, condition and the tests needed. Call us for an exact price – we'll tell you in advance.", priceCol: "Price", priceFrom: "from", priceUnit: "RSD", homePrices: "Prices", homePricesLead: "A few of the most common services. See full prices in the price list.", allPrices: "See all prices", priceNote: "Prices shown are a guide and start from the amount listed.", onRequest: "On request", serviceCol: "Service",
    galleryTitle: "Our patients", galleryLead: "Big and small, calm and mischievous, we love them all the same. Meet more of our patients on Instagram.",
    faqTitle: "Frequently asked questions", faqAsk: "Didn't find your answer?", faqAskLead: "Call us or message us on Viber or WhatsApp, we're happy to help.",
    faq: [
      { q: "How do I book a check-up?", a: "Call us or fill in the contact form below." },
      { q: "What are your opening hours?", a: "We are open every day from 08:00 to 21:00." },
      { q: "What should I do in an emergency?", a: "Call 063 411 523 immediately. We also take emergencies outside working hours." },
      { q: "Which animals do you treat?", a: "Dogs and cats." },
      { q: "Do you have an inpatient ward?", a: "Yes. We offer an inpatient ward, hospitalisation and patient monitoring." },
      { q: "Do you microchip and issue pet passports?", a: "Yes, we microchip pets and issue pet passports." },
      { q: "Can I buy pet food at the clinic?", a: "Yes. You can buy quality food, treats, toys and other supplies." },
      { q: "How much is a check-up?", a: "Prices are on request. Call us and we'll tell you the price in advance." }
    ],
    footer: "Vet Princess veterinary clinic · Stari grad, Dorćol, Palilula"
  }
};

gallery.length = 0;
for (let i = 1; i <= 10; i++) gallery.push({ src: "pacijent-" + i + ".png", sr: "", en: "", ru: "" });
gallery.splice(5, 0, { src: "pacijent-zeka.jpg", sr: "", en: "", ru: "" });
services.forEach(s => { s.img = "usluga-" + s.id + ".png"; });
const artImg = { brahi: "blog-brahi.png", predenje: "blog-predenje.png", hrana: "blog-hrana.png" };
articles.forEach(a => { a.img = artImg[a.id]; });
team.forEach(m => { m.img = "tim-" + m.id + ".webp"; });
const prices = [
  { id: "preventiva", rows: [
    { from: 1500, sr: "Klinički pregled", en: "Clinical examination" },
    { from: 1800, sr: "Vakcinacija protiv besnila", en: "Rabies vaccination" },
    { from: 2500, sr: "Vakcinacija protiv zaraznih bolesti", en: "Vaccination against infectious diseases" },
    { from: 2500, sr: "Čipovanje sa izdavanjem pasoša", en: "Microchipping with pet passport" },
    { from: 1000, sr: "Zaštita od parazita (buve, krpelji, gliste)", en: "Parasite protection (fleas, ticks, worms)" } ] },
  { id: "dijagnostika", rows: [
    { from: 2500, sr: "Ultrazvučni pregled", en: "Ultrasound examination" },
    { from: 2500, sr: "Rendgen (RTG) snimak", en: "X-ray (RTG) image" },
    { from: 1500, sr: "Kompletna krvna slika", en: "Complete blood count" },
    { from: 2600, sr: "Biohemija krvi", en: "Blood biochemistry" },
    { from: 2400, sr: "Brzi testovi (npr. srčani crv)", en: "Rapid tests (e.g. heartworm)" } ] },
  { id: "lecenje", rows: [
    { from: 600, sr: "Aplikacija injekcije", en: "Injection" },
    { from: 1800, sr: "Infuziona terapija", en: "Intravenous fluid therapy" },
    { from: 800, sr: "Previjanje rane", en: "Wound dressing" },
    { from: 1500, sr: "Stacionar / hospitalizacija (dan)", en: "Inpatient ward / hospitalisation (per day)" } ] },
  { id: "hirurgija", rows: [
    { from: 6000, sr: "Kastracija mačora", en: "Neutering a tomcat" },
    { from: 8000, sr: "Sterilizacija mačke", en: "Spaying a cat" },
    { from: 6500, sr: "Kastracija psa", en: "Neutering a dog" },
    { from: 12000, sr: "Sterilizacija kuje", en: "Spaying a female dog" },
    { from: 10000, sr: "Mekotkivna i ortopedska hirurgija", en: "Soft-tissue and orthopaedic surgery" } ] },
  { id: "stomatologija", rows: [
    { from: 8000, sr: "Ultrazvučno uklanjanje kamenca", en: "Ultrasonic scaling" },
    { from: 1500, sr: "Vađenje zuba", en: "Tooth extraction" } ] },
  { id: "ostalo", rows: [
    { from: 2500, sr: "Izdavanje pasoša za ljubimce", en: "Pet passport" },
    { from: 500, sr: "Izdavanje recepta / potvrde", en: "Prescription / certificate" },
    { from: 1500, sr: "Stacionar (dan)", en: "Inpatient ward (per day)" } ] }
];
window.VET_CONTENT = { img, oldPhotos, contact, services, team, articles, gallery, prices, t };
})();
