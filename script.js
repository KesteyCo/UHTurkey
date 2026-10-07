const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸', native: 'English' },
  { code: 'tr', label: 'Turkish', short: 'TR', flag: '🇹🇷', native: 'Türkçe' },
  { code: 'de', label: 'German', short: 'DE', flag: '🇩🇪', native: 'Deutsch' },
  { code: 'fr', label: 'French', short: 'FR', flag: '🇫🇷', native: 'Français' },
  { code: 'nl', label: 'Dutch', short: 'NL', flag: '🇳🇱', native: 'Nederlands' },
  { code: 'ar', label: 'Arabic', short: 'AR', flag: '🇦🇪', native: 'العربية' },
  { code: 'es', label: 'Spanish', short: 'ES', flag: '🇪🇸', native: 'Español' },
  { code: 'pt', label: 'Portuguese', short: 'PT', flag: '🇵🇹', native: 'Português' },
  { code: 'pl', label: 'Polish', short: 'PL', flag: '🇵🇱', native: 'Polski' },
];

const translations = {
  en: {
    navTreatments:'Treatments', navWhy:'Why us', navTeam:'Our team', navContact:'Contact',
    treatmentFace:'Face Surgery', treatmentBody:'Body Surgery', treatmentDentistry:'Dentistry', treatmentGastric:'Gastric Surgery', treatmentHair:'Hair Transplant',
    heroEyebrow:'ISTANBUL · HEALTHCARE · INTERNATIONAL PATIENTS',
    heroTitle:'Your transformation, handled with care from first consultation to recovery.',
    heroText:'UH Turkey coordinates your treatment journey with experienced medical teams in Istanbul — clear communication, personal support and continuity at every step.',
    heroPrimary:'Our Success Journey', heroSecondary:'Talk to a coordinator',
    metric1:'patient coordination', metric2:'travel support', metric3:'journey management',
    chipCare:'Personal care', chipIstanbul:'Istanbul', chipAftercare:'Aftercare', chipSupport:'International support',
    trust1Title:'Personal assessment', trust1Text:'Your case is reviewed before a plan is prepared.',
    trust2Title:'Clear treatment plan', trust2Text:'Know the process before you travel.',
    trust3Title:'Local coordination', trust3Text:'A team on the ground in Istanbul.',
    trust4Title:'Follow-up support', trust4Text:'Care does not end when the procedure does.',
    journeyEyebrow:'REAL PATIENT RESULTS', journeyTitle:'Want to hear what our patients have to say? We’d rather show you.',
    journeyText:'Follow the journey through real before-and-after examples. Drag each slider to see the change for yourself.',
    case1Kicker:'FACE · RHINOPLASTY', case1Title:'A profile refined, without losing character.', case1Text:'A result-focused approach built around proportion, facial harmony and an outcome that still feels like the patient.',
    case2Kicker:'DENTISTRY · SMILE MAKEOVER', case2Title:'A smile designed around the person.', case2Text:'Treatment planning can combine aesthetics, function and bite considerations — with the patient involved in every decision.',
    case3Kicker:'BODY · CONTOURING', case3Title:'Change measured in confidence, not just centimeters.', case3Text:'The plan begins with expectations, anatomy and safety — then the surgical team works toward a balanced result.',
    case4Kicker:'HAIR · TRANSPLANT', case4Title:'A hairline planned to look like it belongs there.', case4Text:'From donor-area assessment to hairline design, the journey is built around natural direction, density and long-term appearance.',
    case5Kicker:'FACE · FACIAL SURGERY', case5Title:'Subtle changes. A result that still looks like you.', case5Text:'Facial procedures are planned around balance, expression and proportion — enhancing features without flattening individuality.',
    casePrivacy:'Identity protected · Example imagery', sliderHint:'Drag to compare before and after',
    whyEyebrow:'WHY UH TURKEY', whyTitle:'One team between you and the complexity.', whyText:'The patient should not have to coordinate doctors, timing, transport and communication alone. UH Turkey exists to make the journey easier to understand and easier to navigate.',
    why1Title:'One point of contact', why1Text:'A coordinator follows the case from the first message through follow-up.',
    why2Title:'International communication', why2Text:'Multilingual support designed for patients travelling from abroad.',
    why3Title:'Structured treatment journey', why3Text:'Consultation, planning, arrival, treatment and aftercare are treated as one experience.',
    why4Title:'Privacy-minded presentation', why4Text:'Before-and-after cases can showcase outcomes while protecting identifying details.',
    teamEyebrow:'MEET THE DOCTORS', teamTitle:'See the artists behind the art.', teamText:'Every transformation starts with the people planning and performing it. Meet the doctors behind the results.', teamLink:'Speak with the team',
    contactEyebrow:'START A CONVERSATION', contactTitle:'Tell us what you are considering.', contactText:'No pressure and no complicated first step. Tell us the treatment you are interested in and how you prefer to be contacted.',
    whatsappLabel:'WhatsApp', whatsappText:'Message a coordinator', emailLabel:'Email',
    formName:'Full name', formEmail:'Email', formPhone:'Phone / WhatsApp', formCountry:'Country', formTreatment:'Treatment of interest', formChoose:'Choose a treatment', formMessage:'How can we help?', formMessagePlaceholder:'Tell us briefly what you would like to change, ask or understand.',
    formConsent:'I agree that UH Turkey may use the information I submit to respond to my enquiry. Medical details should only be requested when necessary.', formSubmit:'Send enquiry', formDemo:'Front-end form ready. Connect a production form endpoint before launch.',
    footerText:'International patient coordination in Istanbul.', rights:'All rights reserved.'
  },

  tr: {
    navTreatments:'Tedaviler', navWhy:'Neden biz', navTeam:'Ekibimiz', navContact:'İletişim', treatmentFace:'Yüz Cerrahisi', treatmentBody:'Vücut Cerrahisi', treatmentDentistry:'Diş Tedavileri', treatmentGastric:'Mide Cerrahisi', treatmentHair:'Saç Ekimi',
    heroEyebrow:'İSTANBUL · SAĞLIK · ULUSLARARASI HASTALAR', heroTitle:'İlk danışmadan iyileşmeye kadar dönüşümünüz özenle yönetilir.', heroText:'UH Turkey, İstanbul’daki deneyimli sağlık ekipleriyle tedavi yolculuğunuzu koordine eder — her adımda net iletişim, kişisel destek ve süreklilik.', heroPrimary:'Başarı Yolculuğumuz', heroSecondary:'Bir koordinatörle konuşun',
    metric1:'hasta koordinasyonu', metric2:'seyahat desteği', metric3:'süreç yönetimi', chipCare:'Kişisel bakım', chipIstanbul:'İstanbul', chipAftercare:'Takip bakımı', chipSupport:'Uluslararası destek',
    trust1Title:'Kişisel değerlendirme', trust1Text:'Plan hazırlanmadan önce durumunuz değerlendirilir.', trust2Title:'Net tedavi planı', trust2Text:'Seyahatten önce süreci bilin.', trust3Title:'Yerel koordinasyon', trust3Text:'İstanbul’da sahada bir ekip.', trust4Title:'Takip desteği', trust4Text:'Bakım işlem bittiğinde sona ermez.',
    journeyEyebrow:'GERÇEK HASTA SONUÇLARI', journeyTitle:'Hastalarımızın ne söylediğini duymak ister misiniz? Size göstermeyi tercih ederiz.', journeyText:'Gerçek öncesi-sonrası örnekleri boyunca ilerleyin. Değişimi kendiniz görmek için her kaydırıcıyı hareket ettirin.',
    case1Kicker:'YÜZ · RİNOPLASTİ', case1Title:'Karakteri kaybetmeden daha dengeli bir profil.', case1Text:'Oran, yüz uyumu ve hastaya hâlâ kendisi gibi hissettiren bir sonuç etrafında şekillenen yaklaşım.',
    case2Kicker:'DİŞ · GÜLÜŞ TASARIMI', case2Title:'Kişiye göre tasarlanan bir gülüş.', case2Text:'Tedavi planı estetik, fonksiyon ve kapanışı birlikte ele alabilir; hasta her karara dahil edilir.',
    case3Kicker:'VÜCUT · ŞEKİLLENDİRME', case3Title:'Değişim sadece santimetreyle değil, özgüvenle ölçülür.', case3Text:'Plan beklentiler, anatomi ve güvenlikle başlar; ekip dengeli bir sonuç için çalışır.',
    case4Kicker:'SAÇ · EKİM', case4Title:'Doğal görünmesi için planlanan bir saç çizgisi.', case4Text:'Donör alan değerlendirmesinden saç çizgisi tasarımına kadar süreç doğal yön, yoğunluk ve uzun vadeli görünüm üzerine kurulur.',
    case5Kicker:'YÜZ · YÜZ CERRAHİSİ', case5Title:'İnce dokunuşlar. Hâlâ size benzeyen bir sonuç.', case5Text:'Yüz işlemleri denge, ifade ve oran gözetilerek planlanır — kişiliği silmeden yüz hatlarını geliştirmeyi hedefler.',
    casePrivacy:'Kimlik korunur · Örnek görseller', sliderHint:'Öncesi ve sonrası için kaydırın',
    whyEyebrow:'NEDEN UH TURKEY', whyTitle:'Sizinle karmaşıklık arasında tek ekip.', whyText:'Hasta doktorları, zamanlamayı, ulaşımı ve iletişimi tek başına yönetmek zorunda kalmamalı. UH Turkey süreci daha anlaşılır ve yönetilebilir kılar.',
    why1Title:'Tek iletişim noktası', why1Text:'Koordinatör ilk mesajdan takibe kadar dosyayı izler.', why2Title:'Uluslararası iletişim', why2Text:'Yurt dışından gelen hastalar için çok dilli destek.', why3Title:'Yapılandırılmış tedavi süreci', why3Text:'Danışma, planlama, varış, tedavi ve takip tek deneyim olarak ele alınır.', why4Title:'Gizlilik odaklı sunum', why4Text:'Öncesi-sonrası örnekleri kimliği koruyarak sonuçları gösterebilir.',
    teamEyebrow:'DOKTORLARLA TANIŞIN', teamTitle:'Sanatın arkasındaki sanatçıları görün.', teamText:'Her dönüşüm, onu planlayan ve gerçekleştiren insanlarla başlar. Sonuçların arkasındaki doktorlarla tanışın.', teamLink:'Ekiple konuşun',
    contactEyebrow:'İLETİŞİME GEÇİN', contactTitle:'Neyi düşündüğünüzü bize anlatın.', contactText:'Baskı yok, karmaşık ilk adım yok. İlgilendiğiniz tedaviyi ve size nasıl ulaşmamızı istediğinizi belirtin.', whatsappLabel:'WhatsApp', whatsappText:'Bir koordinatöre yazın', emailLabel:'E-posta',
    formName:'Ad soyad', formEmail:'E-posta', formPhone:'Telefon / WhatsApp', formCountry:'Ülke', formTreatment:'İlgilendiğiniz tedavi', formChoose:'Tedavi seçin', formMessage:'Nasıl yardımcı olabiliriz?', formMessagePlaceholder:'Neyi değiştirmek, sormak veya anlamak istediğinizi kısaca yazın.', formConsent:'Gönderdiğim bilgilerin talebime yanıt vermek için UH Turkey tarafından kullanılmasını kabul ediyorum. Tıbbi bilgiler yalnızca gerekli olduğunda istenmelidir.', formSubmit:'Talep gönder', formDemo:'Ön yüz formu hazır. Yayına almadan önce üretim form servisine bağlayın.', footerText:'İstanbul’da uluslararası hasta koordinasyonu.', rights:'Tüm hakları saklıdır.'
  },

  de: {
    navTreatments:'Behandlungen', navWhy:'Warum wir', navTeam:'Unser Team', navContact:'Kontakt', treatmentFace:'Gesichtschirurgie', treatmentBody:'Körperchirurgie', treatmentDentistry:'Zahnmedizin', treatmentGastric:'Magenchirurgie', treatmentHair:'Haartransplantation',
    heroEyebrow:'ISTANBUL · MEDIZIN · INTERNATIONALE PATIENTEN', heroTitle:'Ihre Veränderung – sorgfältig begleitet von der ersten Beratung bis zur Genesung.', heroText:'UH Turkey koordiniert Ihre Behandlungsreise mit erfahrenen medizinischen Teams in Istanbul – mit klarer Kommunikation, persönlicher Betreuung und Kontinuität in jedem Schritt.', heroPrimary:'Unsere Erfolgsreise', heroSecondary:'Mit einem Koordinator sprechen',
    metric1:'Patientenkoordination', metric2:'Reiseunterstützung', metric3:'Reisemanagement', chipCare:'Persönliche Betreuung', chipIstanbul:'Istanbul', chipAftercare:'Nachsorge', chipSupport:'Internationale Betreuung',
    trust1Title:'Persönliche Einschätzung', trust1Text:'Ihr Fall wird geprüft, bevor ein Plan erstellt wird.', trust2Title:'Klarer Behandlungsplan', trust2Text:'Kennen Sie den Ablauf vor der Reise.', trust3Title:'Koordination vor Ort', trust3Text:'Ein Team direkt in Istanbul.', trust4Title:'Nachsorge-Unterstützung', trust4Text:'Die Betreuung endet nicht mit dem Eingriff.',
    journeyEyebrow:'ECHTE PATIENTENERGEBNISSE', journeyTitle:'Möchten Sie hören, was unsere Patienten sagen? Wir zeigen es Ihnen lieber.', journeyText:'Folgen Sie echten Vorher-Nachher-Beispielen. Ziehen Sie jeden Regler und sehen Sie die Veränderung selbst.',
    case1Kicker:'GESICHT · RHINOPLASTIK', case1Title:'Ein verfeinertes Profil, ohne Charakter zu verlieren.', case1Text:'Ein ergebnisorientierter Ansatz rund um Proportion, Harmonie und ein Resultat, das weiterhin zur Person passt.',
    case2Kicker:'ZAHNMEDIZIN · SMILE MAKEOVER', case2Title:'Ein Lächeln, das zur Person passt.', case2Text:'Die Planung kann Ästhetik, Funktion und Biss berücksichtigen – mit Einbeziehung des Patienten in jede Entscheidung.',
    case3Kicker:'KÖRPER · KONTURIERUNG', case3Title:'Veränderung wird an Selbstvertrauen gemessen, nicht nur an Zentimetern.', case3Text:'Der Plan beginnt mit Erwartungen, Anatomie und Sicherheit – anschließend arbeitet das Team auf ein ausgewogenes Ergebnis hin.',
    case4Kicker:'HAAR · TRANSPLANTATION', case4Title:'Eine Haarlinie, die natürlich wirkt.', case4Text:'Von der Beurteilung des Spenderbereichs bis zum Design der Haarlinie stehen natürliche Richtung, Dichte und langfristige Wirkung im Mittelpunkt.',
    case5Kicker:'GESICHT · GESICHTSCHIRURGIE', case5Title:'Subtile Veränderungen. Ein Ergebnis, das weiterhin nach Ihnen aussieht.', case5Text:'Gesichtsbehandlungen werden nach Balance, Ausdruck und Proportion geplant — mit dem Ziel, Merkmale zu verfeinern, ohne Individualität zu verlieren.',
    casePrivacy:'Identität geschützt · Beispielbilder', sliderHint:'Ziehen, um Vorher und Nachher zu vergleichen',
    whyEyebrow:'WARUM UH TURKEY', whyTitle:'Ein Team zwischen Ihnen und der Komplexität.', whyText:'Patienten sollten Ärzte, Zeitplanung, Transport und Kommunikation nicht allein koordinieren müssen. UH Turkey macht die Reise verständlicher und leichter steuerbar.',
    why1Title:'Ein Ansprechpartner', why1Text:'Ein Koordinator begleitet den Fall von der ersten Nachricht bis zur Nachsorge.', why2Title:'Internationale Kommunikation', why2Text:'Mehrsprachige Unterstützung für Patienten aus dem Ausland.', why3Title:'Strukturierte Behandlungsreise', why3Text:'Beratung, Planung, Anreise, Behandlung und Nachsorge werden als ein Gesamtprozess betrachtet.', why4Title:'Datenschutzorientierte Darstellung', why4Text:'Vorher-Nachher-Fälle können Ergebnisse zeigen und zugleich identifizierende Merkmale schützen.',
    teamEyebrow:'LERNEN SIE DIE ÄRZTE KENNEN', teamTitle:'Sehen Sie die Künstler hinter dem Werk.', teamText:'Jede Veränderung beginnt mit den Menschen, die sie planen und durchführen. Lernen Sie die Ärzte hinter den Ergebnissen kennen.', teamLink:'Mit dem Team sprechen',
    contactEyebrow:'GESPRÄCH STARTEN', contactTitle:'Sagen Sie uns, was Sie in Betracht ziehen.', contactText:'Kein Druck und kein komplizierter erster Schritt. Nennen Sie die gewünschte Behandlung und wie wir Sie kontaktieren dürfen.', whatsappLabel:'WhatsApp', whatsappText:'Koordinator anschreiben', emailLabel:'E-Mail',
    formName:'Vollständiger Name', formEmail:'E-Mail', formPhone:'Telefon / WhatsApp', formCountry:'Land', formTreatment:'Gewünschte Behandlung', formChoose:'Behandlung auswählen', formMessage:'Wie können wir helfen?', formMessagePlaceholder:'Beschreiben Sie kurz, was Sie verändern, fragen oder verstehen möchten.', formConsent:'Ich stimme zu, dass UH Turkey meine Angaben zur Bearbeitung meiner Anfrage verwenden darf. Medizinische Angaben sollten nur erhoben werden, wenn sie erforderlich sind.', formSubmit:'Anfrage senden', formDemo:'Frontend-Formular ist bereit. Vor dem Livegang muss ein Formular-Endpunkt verbunden werden.', footerText:'Internationale Patientenkoordination in Istanbul.', rights:'Alle Rechte vorbehalten.'
  },

  fr: {
    navTreatments:'Traitements', navWhy:'Pourquoi nous', navTeam:'Notre équipe', navContact:'Contact', treatmentFace:'Chirurgie du visage', treatmentBody:'Chirurgie du corps', treatmentDentistry:'Dentisterie', treatmentGastric:'Chirurgie gastrique', treatmentHair:'Greffe de cheveux',
    heroEyebrow:'ISTANBUL · SANTÉ · PATIENTS INTERNATIONAUX', heroTitle:'Votre transformation, accompagnée avec soin de la première consultation à la récupération.', heroText:'UH Turkey coordonne votre parcours de soins avec des équipes médicales expérimentées à Istanbul — communication claire, accompagnement personnel et continuité à chaque étape.', heroPrimary:'Notre parcours de réussite', heroSecondary:'Parler à un coordinateur',
    metric1:'coordination patient', metric2:'assistance voyage', metric3:'gestion du parcours', chipCare:'Accompagnement personnel', chipIstanbul:'Istanbul', chipAftercare:'Suivi', chipSupport:'Support international',
    trust1Title:'Évaluation personnalisée', trust1Text:'Votre dossier est étudié avant la préparation du plan.', trust2Title:'Plan de traitement clair', trust2Text:'Comprenez le processus avant de voyager.', trust3Title:'Coordination locale', trust3Text:'Une équipe présente à Istanbul.', trust4Title:'Suivi après traitement', trust4Text:'L’accompagnement ne s’arrête pas à l’intervention.',
    journeyEyebrow:'RÉSULTATS RÉELS DE PATIENTS', journeyTitle:'Envie d’entendre ce que disent nos patients ? Nous préférons vous le montrer.', journeyText:'Découvrez de vrais exemples avant/après. Faites glisser chaque curseur pour voir le changement par vous-même.',
    case1Kicker:'VISAGE · RHINOPLASTIE', case1Title:'Un profil affiné sans perdre son caractère.', case1Text:'Une approche centrée sur les proportions, l’harmonie du visage et un résultat qui reste naturel pour le patient.',
    case2Kicker:'DENTISTERIE · SMILE MAKEOVER', case2Title:'Un sourire conçu autour de la personne.', case2Text:'Le plan peut intégrer esthétique, fonction et occlusion, avec le patient impliqué dans chaque décision.',
    case3Kicker:'CORPS · CONTOURING', case3Title:'Le changement se mesure en confiance, pas seulement en centimètres.', case3Text:'Le plan commence par les attentes, l’anatomie et la sécurité, puis l’équipe vise un résultat équilibré.',
    case4Kicker:'CHEVEUX · GREFFE', case4Title:'Une ligne capillaire pensée pour paraître naturelle.', case4Text:'De l’évaluation de la zone donneuse au dessin de la ligne frontale, le parcours vise direction naturelle, densité et résultat durable.',
    case5Kicker:'VISAGE · CHIRURGIE DU VISAGE', case5Title:'Des changements subtils. Un résultat qui vous ressemble toujours.', case5Text:'Les interventions du visage sont planifiées autour de l’équilibre, de l’expression et des proportions — pour améliorer les traits sans effacer l’individualité.',
    casePrivacy:'Identité protégée · Images d’exemple', sliderHint:'Faites glisser pour comparer avant et après',
    whyEyebrow:'POURQUOI UH TURKEY', whyTitle:'Une équipe entre vous et la complexité.', whyText:'Le patient ne devrait pas devoir coordonner seul médecins, planning, transport et communication. UH Turkey rend le parcours plus simple à comprendre et à gérer.',
    why1Title:'Un seul interlocuteur', why1Text:'Un coordinateur suit le dossier du premier message au suivi.', why2Title:'Communication internationale', why2Text:'Un accompagnement multilingue pour les patients venant de l’étranger.', why3Title:'Parcours structuré', why3Text:'Consultation, planification, arrivée, traitement et suivi forment une seule expérience.', why4Title:'Présentation respectueuse de la vie privée', why4Text:'Les cas avant/après peuvent montrer les résultats tout en protégeant les détails identifiants.',
    teamEyebrow:'RENCONTREZ LES MÉDECINS', teamTitle:'Découvrez les artistes derrière l’œuvre.', teamText:'Chaque transformation commence par les personnes qui la planifient et la réalisent. Rencontrez les médecins derrière les résultats.', teamLink:'Parler à l’équipe',
    contactEyebrow:'COMMENCER UNE CONVERSATION', contactTitle:'Dites-nous ce que vous envisagez.', contactText:'Aucune pression et aucune première étape compliquée. Indiquez le traitement qui vous intéresse et la façon dont vous souhaitez être contacté.', whatsappLabel:'WhatsApp', whatsappText:'Écrire à un coordinateur', emailLabel:'E-mail',
    formName:'Nom complet', formEmail:'E-mail', formPhone:'Téléphone / WhatsApp', formCountry:'Pays', formTreatment:'Traitement souhaité', formChoose:'Choisir un traitement', formMessage:'Comment pouvons-nous vous aider ?', formMessagePlaceholder:'Expliquez brièvement ce que vous souhaitez changer, demander ou comprendre.', formConsent:'J’accepte que UH Turkey utilise les informations envoyées pour répondre à ma demande. Les informations médicales ne doivent être demandées que si nécessaire.', formSubmit:'Envoyer la demande', formDemo:'Le formulaire front-end est prêt. Connectez un service d’envoi avant la mise en ligne.', footerText:'Coordination de patients internationaux à Istanbul.', rights:'Tous droits réservés.'
  },

  nl: {
    navTreatments:'Behandelingen', navWhy:'Waarom wij', navTeam:'Ons team', navContact:'Contact', treatmentFace:'Gezichtschirurgie', treatmentBody:'Lichaamschirurgie', treatmentDentistry:'Tandheelkunde', treatmentGastric:'Maagchirurgie', treatmentHair:'Haartransplantatie',
    heroEyebrow:'ISTANBUL · ZORG · INTERNATIONALE PATIËNTEN', heroTitle:'Uw verandering, zorgvuldig begeleid van het eerste consult tot het herstel.', heroText:'UH Turkey coördineert uw behandeltraject met ervaren medische teams in Istanbul — duidelijke communicatie, persoonlijke begeleiding en continuïteit bij elke stap.', heroPrimary:'Onze succesreis', heroSecondary:'Praat met een coördinator',
    metric1:'patiëntcoördinatie', metric2:'reisondersteuning', metric3:'trajectbeheer', chipCare:'Persoonlijke zorg', chipIstanbul:'Istanbul', chipAftercare:'Nazorg', chipSupport:'Internationale support',
    trust1Title:'Persoonlijke beoordeling', trust1Text:'Uw situatie wordt beoordeeld voordat er een plan wordt gemaakt.', trust2Title:'Duidelijk behandelplan', trust2Text:'Ken het proces voordat u reist.', trust3Title:'Lokale coördinatie', trust3Text:'Een team ter plaatse in Istanbul.', trust4Title:'Nazorg', trust4Text:'De begeleiding stopt niet na de ingreep.',
    journeyEyebrow:'ECHTE PATIËNTRESULTATEN', journeyTitle:'Wilt u horen wat onze patiënten zeggen? We laten het u liever zien.', journeyText:'Volg echte voor-en-na-resultaten. Sleep elke schuifregelaar en bekijk de verandering zelf.',
    case1Kicker:'GEZICHT · NEUSCORRECTIE', case1Title:'Een verfijnd profiel zonder karakter te verliezen.', case1Text:'Een resultaatgerichte aanpak rond proportie, harmonie en een uitkomst die nog steeds bij de patiënt past.',
    case2Kicker:'TANDHEELKUNDE · SMILE MAKEOVER', case2Title:'Een glimlach ontworpen rond de persoon.', case2Text:'De planning kan esthetiek, functie en beet combineren, met de patiënt betrokken bij elke beslissing.',
    case3Kicker:'LICHAAM · CONTOURING', case3Title:'Verandering gemeten in vertrouwen, niet alleen centimeters.', case3Text:'Het plan begint met verwachtingen, anatomie en veiligheid; daarna werkt het team naar een evenwichtig resultaat.',
    case4Kicker:'HAAR · TRANSPLANTATIE', case4Title:'Een haarlijn die eruitziet alsof hij er altijd hoorde.', case4Text:'Van beoordeling van het donorgebied tot het ontwerp van de haarlijn draait het traject om natuurlijke richting, dichtheid en uitstraling op lange termijn.',
    case5Kicker:'GEZICHT · GEZICHTSCHIRURGIE', case5Title:'Subtiele veranderingen. Een resultaat dat nog steeds als uzelf voelt.', case5Text:'Gezichtsbehandelingen worden gepland rond balans, expressie en verhoudingen — met verfijning van kenmerken zonder de eigenheid te verliezen.',
    casePrivacy:'Identiteit beschermd · Voorbeeldbeelden', sliderHint:'Sleep om voor en na te vergelijken',
    whyEyebrow:'WAAROM UH TURKEY', whyTitle:'Eén team tussen u en de complexiteit.', whyText:'Een patiënt zou artsen, timing, transport en communicatie niet alleen hoeven te coördineren. UH Turkey maakt het traject begrijpelijker en beter te sturen.',
    why1Title:'Eén contactpersoon', why1Text:'Een coördinator volgt het dossier van het eerste bericht tot de nazorg.', why2Title:'Internationale communicatie', why2Text:'Meertalige ondersteuning voor patiënten uit het buitenland.', why3Title:'Gestructureerd behandeltraject', why3Text:'Consult, planning, aankomst, behandeling en nazorg worden als één ervaring gezien.', why4Title:'Privacybewuste presentatie', why4Text:'Voor-en-na-cases kunnen resultaten tonen en herkenbare details beschermen.',
    teamEyebrow:'MAAK KENNIS MET DE ARTSEN', teamTitle:'Ontmoet de kunstenaars achter het werk.', teamText:'Elke transformatie begint bij de mensen die haar plannen en uitvoeren. Maak kennis met de artsen achter de resultaten.', teamLink:'Praat met het team',
    contactEyebrow:'START EEN GESPREK', contactTitle:'Vertel ons wat u overweegt.', contactText:'Geen druk en geen ingewikkelde eerste stap. Vertel welke behandeling u interesseert en hoe u gecontacteerd wilt worden.', whatsappLabel:'WhatsApp', whatsappText:'Stuur een coördinator een bericht', emailLabel:'E-mail',
    formName:'Volledige naam', formEmail:'E-mail', formPhone:'Telefoon / WhatsApp', formCountry:'Land', formTreatment:'Behandeling van interesse', formChoose:'Kies een behandeling', formMessage:'Hoe kunnen we helpen?', formMessagePlaceholder:'Vertel kort wat u wilt veranderen, vragen of begrijpen.', formConsent:'Ik ga ermee akkoord dat UH Turkey mijn informatie gebruikt om op mijn aanvraag te reageren. Medische details mogen alleen worden gevraagd wanneer dat nodig is.', formSubmit:'Aanvraag verzenden', formDemo:'Het front-endformulier is klaar. Koppel vóór livegang een productie-endpoint.', footerText:'Internationale patiëntcoördinatie in Istanbul.', rights:'Alle rechten voorbehouden.'
  },

  ar: {
    navTreatments:'العلاجات', navWhy:'لماذا نحن', navTeam:'فريقنا', navContact:'اتصل بنا', treatmentFace:'جراحة الوجه', treatmentBody:'جراحة الجسم', treatmentDentistry:'طب الأسنان', treatmentGastric:'جراحة المعدة', treatmentHair:'زراعة الشعر',
    heroEyebrow:'إسطنبول · رعاية صحية · مرضى دوليون', heroTitle:'رحلة تحولك تُدار بعناية من الاستشارة الأولى حتى التعافي.', heroText:'تنسّق UH Turkey رحلة علاجك مع فرق طبية ذات خبرة في إسطنبول — تواصل واضح، دعم شخصي واستمرارية في كل خطوة.', heroPrimary:'رحلة نجاحنا', heroSecondary:'تحدث مع منسق',
    metric1:'تنسيق المرضى', metric2:'دعم السفر', metric3:'إدارة الرحلة', chipCare:'رعاية شخصية', chipIstanbul:'إسطنبول', chipAftercare:'رعاية لاحقة', chipSupport:'دعم دولي',
    trust1Title:'تقييم شخصي', trust1Text:'تتم مراجعة حالتك قبل إعداد الخطة.', trust2Title:'خطة علاج واضحة', trust2Text:'اعرف الخطوات قبل السفر.', trust3Title:'تنسيق محلي', trust3Text:'فريق موجود على الأرض في إسطنبول.', trust4Title:'دعم المتابعة', trust4Text:'الرعاية لا تنتهي بانتهاء الإجراء.',
    journeyEyebrow:'نتائج حقيقية للمرضى', journeyTitle:'هل تريد أن تسمع ما يقوله مرضانا؟ نفضّل أن نريك النتائج.', journeyText:'تابع أمثلة حقيقية قبل وبعد، واسحب كل شريط لترى التغيير بنفسك.',
    case1Kicker:'الوجه · تجميل الأنف', case1Title:'ملامح أكثر توازناً من دون فقدان الشخصية.', case1Text:'نهج يركز على النتيجة مع مراعاة النسب وتناسق الوجه والحفاظ على مظهر طبيعي.',
    case2Kicker:'الأسنان · تصميم الابتسامة', case2Title:'ابتسامة مصممة حول الشخص.', case2Text:'قد يجمع التخطيط بين الجمال والوظيفة والإطباق مع إشراك المريض في كل قرار.',
    case3Kicker:'الجسم · نحت القوام', case3Title:'التغيير يُقاس بالثقة لا بالسنتيمترات فقط.', case3Text:'تبدأ الخطة بالتوقعات والتشريح والسلامة ثم يعمل الفريق نحو نتيجة متوازنة.',
    case4Kicker:'الشعر · الزراعة', case4Title:'خط شعر يبدو طبيعياً وكأنه مكانه الأصلي.', case4Text:'من تقييم المنطقة المانحة إلى تصميم خط الشعر، ترتكز الرحلة على الاتجاه الطبيعي والكثافة والمظهر طويل الأمد.',
    case5Kicker:'الوجه · جراحة الوجه', case5Title:'تغييرات دقيقة. ونتيجة لا تزال تشبهك.', case5Text:'تُخطط إجراءات الوجه حول التوازن والتعبير والنسب — لتحسين الملامح من دون طمس الطابع الفردي.',
    casePrivacy:'الهوية محمية · صور توضيحية', sliderHint:'اسحب للمقارنة بين قبل وبعد',
    whyEyebrow:'لماذا UH TURKEY', whyTitle:'فريق واحد بينك وبين التعقيد.', whyText:'لا ينبغي للمريض أن ينسق الأطباء والمواعيد والنقل والتواصل بمفرده. UH Turkey تجعل الرحلة أوضح وأسهل في الإدارة.',
    why1Title:'جهة اتصال واحدة', why1Text:'منسق يتابع الحالة من أول رسالة حتى المتابعة.', why2Title:'تواصل دولي', why2Text:'دعم متعدد اللغات للمرضى القادمين من الخارج.', why3Title:'رحلة علاج منظمة', why3Text:'الاستشارة والتخطيط والوصول والعلاج والمتابعة تُعامل كتجربة واحدة.', why4Title:'عرض يحترم الخصوصية', why4Text:'يمكن لحالات قبل وبعد إظهار النتائج مع حماية التفاصيل التعريفية.',
    teamEyebrow:'تعرّف على الأطباء', teamTitle:'تعرّف على الفنانين خلف هذا العمل.', teamText:'كل تحول يبدأ بالأشخاص الذين يخططون له وينفذونه. تعرّف على الأطباء خلف النتائج.', teamLink:'تحدث مع الفريق',
    contactEyebrow:'ابدأ المحادثة', contactTitle:'أخبرنا بما تفكر فيه.', contactText:'لا ضغط ولا خطوة أولى معقدة. أخبرنا بالعلاج الذي يهمك والطريقة التي تفضل أن نتواصل بها معك.', whatsappLabel:'واتساب', whatsappText:'راسل منسقاً', emailLabel:'البريد الإلكتروني',
    formName:'الاسم الكامل', formEmail:'البريد الإلكتروني', formPhone:'الهاتف / واتساب', formCountry:'الدولة', formTreatment:'العلاج المطلوب', formChoose:'اختر علاجاً', formMessage:'كيف يمكننا المساعدة؟', formMessagePlaceholder:'اكتب باختصار ما الذي تريد تغييره أو السؤال عنه أو فهمه.', formConsent:'أوافق على أن تستخدم UH Turkey المعلومات التي أرسلها للرد على استفساري. يجب طلب التفاصيل الطبية فقط عند الحاجة.', formSubmit:'إرسال الاستفسار', formDemo:'واجهة النموذج جاهزة. اربط خدمة إرسال فعلية قبل الإطلاق.', footerText:'تنسيق المرضى الدوليين في إسطنبول.', rights:'جميع الحقوق محفوظة.'
  },

  es: {
    navTreatments:'Tratamientos', navWhy:'Por qué nosotros', navTeam:'Nuestro equipo', navContact:'Contacto', treatmentFace:'Cirugía facial', treatmentBody:'Cirugía corporal', treatmentDentistry:'Odontología', treatmentGastric:'Cirugía gástrica', treatmentHair:'Trasplante capilar',
    heroEyebrow:'ESTAMBUL · SALUD · PACIENTES INTERNACIONALES', heroTitle:'Tu transformación, acompañada con cuidado desde la primera consulta hasta la recuperación.', heroText:'UH Turkey coordina tu tratamiento con equipos médicos experimentados en Estambul — comunicación clara, apoyo personal y continuidad en cada paso.', heroPrimary:'Nuestro recorrido de éxito', heroSecondary:'Hablar con un coordinador',
    metric1:'coordinación del paciente', metric2:'apoyo de viaje', metric3:'gestión del proceso', chipCare:'Atención personal', chipIstanbul:'Estambul', chipAftercare:'Seguimiento', chipSupport:'Apoyo internacional',
    trust1Title:'Evaluación personal', trust1Text:'Tu caso se revisa antes de preparar un plan.', trust2Title:'Plan de tratamiento claro', trust2Text:'Conoce el proceso antes de viajar.', trust3Title:'Coordinación local', trust3Text:'Un equipo presente en Estambul.', trust4Title:'Apoyo posterior', trust4Text:'La atención no termina con el procedimiento.',
    journeyEyebrow:'RESULTADOS REALES DE PACIENTES', journeyTitle:'¿Quieres oír lo que dicen nuestros pacientes? Preferimos mostrártelo.', journeyText:'Recorre ejemplos reales de antes y después. Desliza cada control para ver el cambio por ti mismo.',
    case1Kicker:'ROSTRO · RINOPLASTIA', case1Title:'Un perfil refinado sin perder carácter.', case1Text:'Un enfoque centrado en proporción, armonía facial y un resultado que sigue sintiéndose propio.',
    case2Kicker:'ODONTOLOGÍA · DISEÑO DE SONRISA', case2Title:'Una sonrisa diseñada para la persona.', case2Text:'La planificación puede combinar estética, función y mordida, con el paciente implicado en cada decisión.',
    case3Kicker:'CUERPO · CONTORNO', case3Title:'El cambio se mide en confianza, no solo en centímetros.', case3Text:'El plan comienza con expectativas, anatomía y seguridad, y el equipo trabaja hacia un resultado equilibrado.',
    case4Kicker:'CABELLO · TRASPLANTE', case4Title:'Una línea capilar pensada para verse natural.', case4Text:'Desde la evaluación de la zona donante hasta el diseño de la línea capilar, el proceso se centra en dirección natural, densidad y apariencia a largo plazo.',
    case5Kicker:'ROSTRO · CIRUGÍA FACIAL', case5Title:'Cambios sutiles. Un resultado que sigue pareciéndose a ti.', case5Text:'Los procedimientos faciales se planifican en torno al equilibrio, la expresión y la proporción — realzando los rasgos sin borrar la individualidad.',
    casePrivacy:'Identidad protegida · Imágenes de ejemplo', sliderHint:'Desliza para comparar antes y después',
    whyEyebrow:'POR QUÉ UH TURKEY', whyTitle:'Un equipo entre tú y la complejidad.', whyText:'El paciente no debería coordinar solo médicos, horarios, transporte y comunicación. UH Turkey hace el proceso más fácil de entender y de gestionar.',
    why1Title:'Un único contacto', why1Text:'Un coordinador acompaña el caso desde el primer mensaje hasta el seguimiento.', why2Title:'Comunicación internacional', why2Text:'Apoyo multilingüe para pacientes que viajan desde el extranjero.', why3Title:'Proceso estructurado', why3Text:'Consulta, planificación, llegada, tratamiento y seguimiento se tratan como una sola experiencia.', why4Title:'Privacidad en la presentación', why4Text:'Los casos de antes y después pueden mostrar resultados protegiendo detalles identificativos.',
    teamEyebrow:'CONOCE A LOS MÉDICOS', teamTitle:'Conoce a los artistas detrás de la obra.', teamText:'Cada transformación comienza con las personas que la planifican y la realizan. Conoce a los médicos detrás de los resultados.', teamLink:'Hablar con el equipo',
    contactEyebrow:'INICIA UNA CONVERSACIÓN', contactTitle:'Cuéntanos qué estás considerando.', contactText:'Sin presión y sin un primer paso complicado. Dinos qué tratamiento te interesa y cómo prefieres que te contactemos.', whatsappLabel:'WhatsApp', whatsappText:'Escribir a un coordinador', emailLabel:'Correo electrónico',
    formName:'Nombre completo', formEmail:'Correo electrónico', formPhone:'Teléfono / WhatsApp', formCountry:'País', formTreatment:'Tratamiento de interés', formChoose:'Elige un tratamiento', formMessage:'¿Cómo podemos ayudarte?', formMessagePlaceholder:'Cuéntanos brevemente qué quieres cambiar, preguntar o entender.', formConsent:'Acepto que UH Turkey use la información enviada para responder a mi consulta. Los datos médicos solo deben solicitarse cuando sean necesarios.', formSubmit:'Enviar consulta', formDemo:'El formulario front-end está listo. Conecta un endpoint de producción antes del lanzamiento.', footerText:'Coordinación de pacientes internacionales en Estambul.', rights:'Todos los derechos reservados.'
  },

  pt: {
    navTreatments:'Tratamentos', navWhy:'Por que nós', navTeam:'Nossa equipe', navContact:'Contato', treatmentFace:'Cirurgia facial', treatmentBody:'Cirurgia corporal', treatmentDentistry:'Odontologia', treatmentGastric:'Cirurgia gástrica', treatmentHair:'Transplante capilar',
    heroEyebrow:'ISTAMBUL · SAÚDE · PACIENTES INTERNACIONAIS', heroTitle:'A sua transformação, acompanhada com cuidado da primeira consulta à recuperação.', heroText:'A UH Turkey coordena a sua jornada de tratamento com equipes médicas experientes em Istambul — comunicação clara, suporte pessoal e continuidade em cada etapa.', heroPrimary:'Nossa jornada de sucesso', heroSecondary:'Falar com um coordenador',
    metric1:'coordenação do paciente', metric2:'apoio de viagem', metric3:'gestão da jornada', chipCare:'Cuidado pessoal', chipIstanbul:'Istambul', chipAftercare:'Pós-tratamento', chipSupport:'Suporte internacional',
    trust1Title:'Avaliação pessoal', trust1Text:'O seu caso é analisado antes da preparação de um plano.', trust2Title:'Plano de tratamento claro', trust2Text:'Conheça o processo antes de viajar.', trust3Title:'Coordenação local', trust3Text:'Uma equipe presente em Istambul.', trust4Title:'Apoio de acompanhamento', trust4Text:'O cuidado não termina com o procedimento.',
    journeyEyebrow:'RESULTADOS REAIS DE PACIENTES', journeyTitle:'Quer ouvir o que os nossos pacientes dizem? Preferimos mostrar-lhe.', journeyText:'Veja exemplos reais de antes e depois. Arraste cada controlo para ver a mudança por si mesmo.',
    case1Kicker:'ROSTO · RINOPLASTIA', case1Title:'Um perfil refinado sem perder personalidade.', case1Text:'Uma abordagem focada em proporção, harmonia facial e um resultado que ainda parece natural para o paciente.',
    case2Kicker:'ODONTOLOGIA · SMILE MAKEOVER', case2Title:'Um sorriso desenhado para a pessoa.', case2Text:'O planejamento pode combinar estética, função e mordida, com o paciente envolvido em cada decisão.',
    case3Kicker:'CORPO · CONTORNO', case3Title:'A mudança é medida em confiança, não apenas em centímetros.', case3Text:'O plano começa pelas expectativas, anatomia e segurança; depois a equipe trabalha para um resultado equilibrado.',
    case4Kicker:'CABELO · TRANSPLANTE', case4Title:'Uma linha capilar planejada para parecer natural.', case4Text:'Da avaliação da área doadora ao desenho da linha capilar, o processo é baseado em direção natural, densidade e aparência de longo prazo.',
    case5Kicker:'ROSTO · CIRURGIA FACIAL', case5Title:'Mudanças subtis. Um resultado que continua a parecer consigo.', case5Text:'Os procedimentos faciais são planeados em torno do equilíbrio, da expressão e da proporção — realçando os traços sem apagar a individualidade.',
    casePrivacy:'Identidade protegida · Imagens de exemplo', sliderHint:'Arraste para comparar antes e depois',
    whyEyebrow:'POR QUE UH TURKEY', whyTitle:'Uma equipe entre você e a complexidade.', whyText:'O paciente não deveria coordenar sozinho médicos, horários, transporte e comunicação. A UH Turkey torna a jornada mais simples de entender e de gerir.',
    why1Title:'Um ponto de contato', why1Text:'Um coordenador acompanha o caso desde a primeira mensagem até o seguimento.', why2Title:'Comunicação internacional', why2Text:'Suporte multilíngue para pacientes que viajam do exterior.', why3Title:'Jornada estruturada', why3Text:'Consulta, planejamento, chegada, tratamento e acompanhamento são tratados como uma única experiência.', why4Title:'Apresentação focada em privacidade', why4Text:'Casos de antes e depois podem mostrar resultados protegendo detalhes identificáveis.',
    teamEyebrow:'CONHEÇA OS MÉDICOS', teamTitle:'Conheça os artistas por trás da obra.', teamText:'Cada transformação começa com as pessoas que a planeiam e realizam. Conheça os médicos por trás dos resultados.', teamLink:'Falar com a equipe',
    contactEyebrow:'INICIE UMA CONVERSA', contactTitle:'Conte-nos o que você está considerando.', contactText:'Sem pressão e sem um primeiro passo complicado. Diga qual tratamento lhe interessa e como prefere ser contactado.', whatsappLabel:'WhatsApp', whatsappText:'Enviar mensagem a um coordenador', emailLabel:'E-mail',
    formName:'Nome completo', formEmail:'E-mail', formPhone:'Telefone / WhatsApp', formCountry:'País', formTreatment:'Tratamento de interesse', formChoose:'Escolha um tratamento', formMessage:'Como podemos ajudar?', formMessagePlaceholder:'Conte brevemente o que deseja mudar, perguntar ou entender.', formConsent:'Concordo que a UH Turkey use as informações enviadas para responder à minha solicitação. Dados médicos só devem ser pedidos quando necessários.', formSubmit:'Enviar solicitação', formDemo:'O formulário front-end está pronto. Conecte um endpoint de produção antes do lançamento.', footerText:'Coordenação de pacientes internacionais em Istambul.', rights:'Todos os direitos reservados.'
  },

  pl: {
    navTreatments:'Zabiegi', navWhy:'Dlaczego my', navTeam:'Nasz zespół', navContact:'Kontakt', treatmentFace:'Chirurgia twarzy', treatmentBody:'Chirurgia ciała', treatmentDentistry:'Stomatologia', treatmentGastric:'Chirurgia bariatryczna', treatmentHair:'Przeszczep włosów',
    heroEyebrow:'STAMBUŁ · OPIEKA MEDYCZNA · PACJENCI MIĘDZYNARODOWI', heroTitle:'Twoja przemiana, prowadzona z troską od pierwszej konsultacji do rekonwalescencji.', heroText:'UH Turkey koordynuje Twoją podróż medyczną z doświadczonymi zespołami w Stambule — jasna komunikacja, osobiste wsparcie i ciągłość na każdym etapie.', heroPrimary:'Nasza droga sukcesu', heroSecondary:'Porozmawiaj z koordynatorem',
    metric1:'koordynacja pacjenta', metric2:'wsparcie podróży', metric3:'zarządzanie procesem', chipCare:'Opieka osobista', chipIstanbul:'Stambuł', chipAftercare:'Opieka po zabiegu', chipSupport:'Wsparcie międzynarodowe',
    trust1Title:'Indywidualna ocena', trust1Text:'Twój przypadek jest analizowany przed przygotowaniem planu.', trust2Title:'Jasny plan leczenia', trust2Text:'Poznaj proces przed podróżą.', trust3Title:'Koordynacja lokalna', trust3Text:'Zespół na miejscu w Stambule.', trust4Title:'Wsparcie po zabiegu', trust4Text:'Opieka nie kończy się wraz z procedurą.',
    journeyEyebrow:'PRAWDZIWE EFEKTY PACJENTÓW', journeyTitle:'Chcesz usłyszeć, co mówią nasi pacjenci? Wolimy Ci to pokazać.', journeyText:'Zobacz prawdziwe przykłady przed i po. Przesuń każdy suwak, aby samodzielnie zobaczyć zmianę.',
    case1Kicker:'TWARZ · RHINOPLASTYKA', case1Title:'Dopracowany profil bez utraty charakteru.', case1Text:'Podejście skupione na proporcjach, harmonii twarzy i rezultacie, który nadal wygląda naturalnie dla pacjenta.',
    case2Kicker:'STOMATOLOGIA · METAMORFOZA UŚMIECHU', case2Title:'Uśmiech zaprojektowany wokół osoby.', case2Text:'Plan leczenia może łączyć estetykę, funkcję i zgryz, przy udziale pacjenta w każdej decyzji.',
    case3Kicker:'CIAŁO · MODELOWANIE', case3Title:'Zmiana mierzona pewnością siebie, nie tylko centymetrami.', case3Text:'Plan zaczyna się od oczekiwań, anatomii i bezpieczeństwa, a zespół dąży do zrównoważonego efektu.',
    case4Kicker:'WŁOSY · PRZESZCZEP', case4Title:'Linia włosów zaplanowana tak, by wyglądała naturalnie.', case4Text:'Od oceny obszaru dawczego po projekt linii włosów — proces koncentruje się na naturalnym kierunku, gęstości i długoterminowym wyglądzie.',
    case5Kicker:'TWARZ · CHIRURGIA TWARZY', case5Title:'Subtelne zmiany. Efekt, który nadal wygląda jak Ty.', case5Text:'Zabiegi twarzy planuje się z myślą o równowadze, ekspresji i proporcjach — podkreślając rysy bez utraty indywidualnego charakteru.',
    casePrivacy:'Tożsamość chroniona · Obrazy przykładowe', sliderHint:'Przeciągnij, aby porównać przed i po',
    whyEyebrow:'DLACZEGO UH TURKEY', whyTitle:'Jeden zespół pomiędzy Tobą a złożonością procesu.', whyText:'Pacjent nie powinien sam koordynować lekarzy, terminów, transportu i komunikacji. UH Turkey upraszcza i porządkuje cały proces.',
    why1Title:'Jeden punkt kontaktu', why1Text:'Koordynator prowadzi sprawę od pierwszej wiadomości do opieki po zabiegu.', why2Title:'Komunikacja międzynarodowa', why2Text:'Wielojęzyczne wsparcie dla pacjentów z zagranicy.', why3Title:'Uporządkowana ścieżka leczenia', why3Text:'Konsultacja, planowanie, przyjazd, leczenie i opieka po zabiegu są traktowane jako jeden proces.', why4Title:'Prezentacja z myślą o prywatności', why4Text:'Przykłady przed i po mogą pokazywać efekty i jednocześnie chronić dane identyfikujące.',
    teamEyebrow:'POZNAJ LEKARZY', teamTitle:'Poznaj artystów stojących za dziełem.', teamText:'Każda przemiana zaczyna się od ludzi, którzy ją planują i wykonują. Poznaj lekarzy stojących za rezultatami.', teamLink:'Porozmawiaj z zespołem',
    contactEyebrow:'ROZPOCZNIJ ROZMOWĘ', contactTitle:'Powiedz nam, co rozważasz.', contactText:'Bez presji i bez skomplikowanego pierwszego kroku. Wskaż zabieg, który Cię interesuje, i preferowany sposób kontaktu.', whatsappLabel:'WhatsApp', whatsappText:'Napisz do koordynatora', emailLabel:'E-mail',
    formName:'Imię i nazwisko', formEmail:'E-mail', formPhone:'Telefon / WhatsApp', formCountry:'Kraj', formTreatment:'Interesujący zabieg', formChoose:'Wybierz zabieg', formMessage:'Jak możemy pomóc?', formMessagePlaceholder:'Napisz krótko, co chcesz zmienić, o co zapytać lub co zrozumieć.', formConsent:'Zgadzam się, aby UH Turkey użyło przesłanych informacji do odpowiedzi na moje zapytanie. Dane medyczne powinny być wymagane tylko wtedy, gdy jest to konieczne.', formSubmit:'Wyślij zapytanie', formDemo:'Formularz front-end jest gotowy. Przed publikacją podłącz endpoint produkcyjny.', footerText:'Koordynacja pacjentów międzynarodowych w Stambule.', rights:'Wszelkie prawa zastrzeżone.'
  }
};

function supportedBrowserLanguage() {
  const raw = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  const base = raw.toLowerCase().split('-')[0];
  return LANGUAGES.some(l => l.code === base) ? base : 'en';
}

let activeLanguage = localStorage.getItem('uh-language') || supportedBrowserLanguage();
if (!translations[activeLanguage]) activeLanguage = 'en';

function setDocumentLanguage(code) {
  const language = LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
  const dict = translations[code] || translations.en;
  document.documentElement.lang = code;
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  document.getElementById('activeFlag').textContent = language.flag;
  document.getElementById('activeLanguage').textContent = language.short;
  activeLanguage = code;
}

function chooseLanguage(code, reload = true) {
  localStorage.setItem('uh-language', code);
  sessionStorage.setItem('uh-language-prompted', '1');

  if (reload) location.reload();
  else setDocumentLanguage(code);
}

function populateLanguages() {
  const grid = document.getElementById('languageGrid');
  const dropdown = document.getElementById('languageDropdown');

  LANGUAGES.forEach(lang => {
    const button = document.createElement('button');
    button.className = 'language-choice';
    button.type = 'button';
    button.innerHTML = `<span>${lang.flag}</span><span>${lang.native}<small>${lang.label}</small></span>`;
    button.addEventListener('click', () => chooseLanguage(lang.code, true));
    grid.appendChild(button);

    const menuButton = document.createElement('button');
    menuButton.className = 'language-menu-item';
    menuButton.type = 'button';
    menuButton.innerHTML = `<span>${lang.flag}</span><span>${lang.native}</span>`;
    menuButton.addEventListener('click', () => chooseLanguage(lang.code, true));
    dropdown.appendChild(menuButton);
  });
}

function setupLanguageModal() {
  const modal = document.getElementById('languageModal');

  if (!sessionStorage.getItem('uh-language-prompted')) {
    modal.hidden = false;
    document.body.classList.add('modal-open');
  }
}

function setupDropdowns() {
  document.querySelectorAll('.nav-dropdown__toggle').forEach(toggle => {
    toggle.addEventListener('click', event => {
      event.stopPropagation();

      const parent = toggle.closest('.nav-dropdown');
      const shouldOpen = !parent.classList.contains('is-open');

      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('is-open'));
      document.querySelectorAll('.nav-dropdown__toggle').forEach(t => t.setAttribute('aria-expanded','false'));

      if (shouldOpen) {
        parent.classList.add('is-open');
        toggle.setAttribute('aria-expanded','true');
      }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('is-open'));
    document.querySelectorAll('.nav-dropdown__toggle').forEach(t => t.setAttribute('aria-expanded','false'));
  });
}

function setupMobileMenu() {
  const button = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');

  button.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded','false');
    });
  });
}

function setupComparisons() {
  document.querySelectorAll('.comparison').forEach(component => {
    const range = component.querySelector('.comparison__range');
    const afterImage = component.querySelector('.comparison__after img');

    const syncWidth = () => {
      afterImage.style.width = `${component.clientWidth}px`;
    };

    const update = () => {
      component.style.setProperty('--position', `${range.value}%`);
    };

    range.addEventListener('input', update);
    window.addEventListener('resize', syncWidth);

    syncWidth();
    update();
  });
}

function setupJourneyAnimation() {
  const stops = document.querySelectorAll('.journey-stop, .journey-team-bridge');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: .16 });

  stops.forEach(stop => observer.observe(stop));

  const track = document.getElementById('journeyTrack');
  const fill = document.getElementById('journeyLineFill');
  let ticking = false;

  function updateLine() {
    const rect = track.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const start = viewportH * .62;
    const total = rect.height + start;
    const progressed = Math.min(Math.max(start - rect.top, 0), total);
    const progress = Math.min(Math.max(progressed / total, 0), 1);

    fill.style.transform = `scaleY(${progress})`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateLine);
      ticking = true;
    }
  }, { passive:true });

  window.addEventListener('resize', updateLine);
  updateLine();
}

function setupContact() {
  const WHATSAPP_NUMBER = '905000000000'; // TODO: replace with official UH Turkey WhatsApp number.

  document.querySelectorAll('[data-whatsapp-link]').forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    status.textContent = (translations[activeLanguage] || translations.en).formDemo;
  });
}

populateLanguages();
setDocumentLanguage(activeLanguage);
setupLanguageModal();
setupDropdowns();
setupMobileMenu();
setupComparisons();
setupJourneyAnimation();
setupContact();

document.getElementById('currentYear').textContent = new Date().getFullYear();