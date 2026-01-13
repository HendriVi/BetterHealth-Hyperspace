/**
 * Internationalization strings for BetterHealth website
 * Supports German (de) and English (en)
 */

/**
 * @typedef {'de' | 'en'} Lang
 */

/**
 * Translation strings for all languages
 * @type {Record<Lang, Record<string, string>>}
 */
const STRINGS = {
  de: {
    // Navigation
    'nav.overview': 'Übersicht',
    'nav.method': 'Methode',
    'nav.services': 'Services',
    'nav.start': 'Start',
    'nav.home': 'Startseite',
    'nav.programs': 'Programme',
    
    // Index page - Intro
    'intro.tagline': 'Die moderne Gesundheitswelt ist laut. Jede Woche eine neue Studie, eine neue Diät, ein neuer "Hack". Die Wahrheit ist einfacher: Sie sind ein Individuum, mit Ihrer eigenen Biologie, Geschichte und Einschränkungen. Deshalb beginnen wir mit Messung, nicht mit Meinungen.',
    'intro.description': 'Wir sind eine schweizerische, ärztlich geleitete Praxis für Langlebigkeit und Gehirngesundheit. Wir erstellen Ihre Basislinie, übersetzen sie in klare Entscheidungen und verfolgen dann, was sich ändert – damit Sie nicht jahrzehntelang treiben, bevor eine Diagnose gestellt wird.',
    'intro.process': 'Pre‑Check → Baseline Diagnostic Day → 12‑Wochen‑Programm → Mitgliedschafts‑Nachbetreuung',
    'intro.button': 'So funktioniert es',
    
    // Index page - Section One
    'section.one.title1': 'Ärztlich geleitet, menschlich zuerst',
    'section.one.text1': 'Wir beginnen mit Zuhören. Ihre Geschichte, Ihre Symptome, Ihre Laborwerte, Ihr Lebensstil, Ihre Ziele. Wir führen die klinische Bewertung durch, erklären sie in einfacher Sprache und koordinieren bei Bedarf mit Ihren behandelnden Ärzten – damit Sie einen kohärenten Plan erhalten, nicht einen Stapel widersprüchlicher Ratschläge.',
    'section.one.button1': 'Unsere Methode',
    'section.one.title2': 'Messen, was wichtig ist',
    'section.one.text2': 'Den meisten Menschen wird gesagt, dass sie "in Ordnung" sind, bis etwas endlich eine diagnostische Schwelle überschreitet. Wir ziehen es vor, die Abweichung früher zu erkennen. Wir priorisieren Biomarker und Physiologie, die Entscheidungen ändern: kardiometabolisches Risiko, Entzündungen wo relevant, Schlaf- und Stressphysiologie und – wenn angemessen – gehirnfokussierte Bewertungen.',
    'section.one.button2': 'Was wir abdecken',
    'section.one.title3': 'Handeln, verfolgen, iterieren',
    'section.one.text3': 'Interventionen sind nur wichtig, wenn sie für Sie funktionieren. Wir implementieren eine kleine Anzahl von hochwirksamen Änderungen (Ernährung, Training, Schlaf, Stress, Nahrungsergänzungsmittel wo angemessen und medizinische Koordination), dann messen wir erneut. Wenn sich die Daten nicht bewegen, passen wir den Plan an – bis es funktioniert.',
    'section.one.button3': 'Mit einem Pre‑Check beginnen',
    
    // Index page - Section Two
    'section.two.title': 'Wo wir uns konzentrieren',
    'section.two.description1': 'Sie verlassen uns mit einer klaren Basislinie, einem priorisierten Plan und einem Wiederholungstestplan. Keine Überforderung und keine lange Liste zufälliger Nahrungsergänzungsmittel – nur evidenzbasierte Hebel, die Sie ausführen und verfolgen können.',
    'section.two.description2': 'Wir konzentrieren uns auf die wenigen Systeme, die die Gesundheitsspanne antreiben: Stoffwechsel, kardiovaskuläres Risiko, Gehirnfunktion, Darm und Entzündung, Schlaf, Stressphysiologie und Erholung. Prävention ist wichtig, weil frühe Kurskorrekturen einfacher sind als späte Reparaturen.',
    'section.two.feature1.title': 'Diagnostik‑erste Basislinie',
    'section.two.feature1.text': 'Eine strukturierte Überprüfung der Krankengeschichte, Medikamente/Nahrungsergänzungsmittel, familiäres Risiko, Symptome und aktuelle Laborwerte – dann ein Testplan, der proportional und umsetzbar ist.',
    'section.two.feature2.title': 'Kardiometabolische Gesundheit',
    'section.two.feature2.text': 'Insulinresistenz, Lipide und ApoB, Blutdruck, Lebermarker, Körperzusammensetzung und die Verhaltensweisen, die sie antreiben. Das Ziel ist weniger Überraschungen später.',
    'section.two.feature3.title': 'Gehirngesundheit & Kognition',
    'section.two.feature3.text': 'Kognition, Stimmung, Fokus und Kapazität unter Belastung. Wenn angemessen, verwenden wir gehirnfokussierte Diagnostik und Partner‑Modalitäten (z.B. qEEG / Bildgebung), um Entscheidungen zu leiten.',
    'section.two.feature4.title': 'Darm, Entzündung & Immunbalance',
    'section.two.feature4.text': 'GI‑Symptome, Nahrungsmittelverträglichkeit, Darmmuster und Entzündungssignale. Wir halten es evidenzbasiert und an Interventionen gebunden, die Sie tatsächlich aufrechterhalten können.',
    'section.two.feature5.title': 'Schlaf & Stressphysiologie',
    'section.two.feature5.text': 'Schlaf ist ein Multiplikator. Wir verbessern Schlafqualität und Erholung durch Ausrichtung von Verhalten, Licht/Zirkadianzeit und Physiologie – dann bestätigen wir den Fortschritt mit Metriken wo möglich.',
    'section.two.feature6.title': 'Programme & Corporate',
    'section.two.feature6.text': 'Strukturierte 12‑Wochen‑Programme, Executive‑Support und Corporate‑Bildung – aufgebaut um Messung, Verantwortlichkeit und praktische Umsetzung.',
    'section.two.button': 'So funktioniert es',
    
    // Index page - Section Three
    'section.three.title': 'Mit einem Pre‑Check beginnen',
    'section.three.description': 'Wenn Sie eine Basislinie wollen, der Sie vertrauen können – und einen Plan, der ins echte Leben passt – beginnen Sie mit einem Pre‑Check. Wir klären Ihre Ziele, Einschränkungen und aktuelle Situation, dann empfehlen wir die richtige diagnostische Tiefe und die nächsten besten Schritte.',
    'section.three.item1': '10–15 Minuten Aufnahme (oder Fragebogen)',
    'section.three.item2': 'Klare Empfehlung: Essential / Advanced / Elite Basislinie',
    'section.three.item3': 'Zeit, Kosten und was Sie tatsächlich als Nächstes tun werden',
    'section.three.button': 'E‑Mail für Ihren Pre‑Check',
    'section.three.address.label': 'Adresse',
    'section.three.address.value': 'Zürich, Schweiz • Vor Ort + virtuell',
    'section.three.email.label': 'E‑Mail',
    'section.three.phone.label': 'Telefon',
    
    // Footer
    'footer.copyright': '© BetterHealth. Alle Rechte vorbehalten.',
    'footer.design': 'Design:',
    
    // Generic page
    'generic.title': 'Unsere Methode',
    'generic.intro': 'Den meisten Menschen wird gesagt, dass sie gesund sind, wenn keine Diagnose vorliegt. Das Problem ist, dass Diagnosen normalerweise nach Jahren der Abweichung eintreffen. Wir arbeiten stromaufwärts: messen frühe Signale, machen einen klaren Plan und beweisen, dass es funktioniert mit wiederholten Daten.',
    'generic.process.title': 'Messen → Interpretieren → Intervenieren → Iterieren',
    'generic.process.text': 'Wir halten den Prozess einfach. Wir wählen Messungen, die Entscheidungen ändern, interpretieren sie im Kontext (Ihre Symptome, Geschichte und Einschränkungen), handeln an den wenigen Hebeln, die wichtig sind, und überprüfen dann erneut, um die Richtung zu bestätigen.',
    'generic.step1.title': '1) Pre‑Check',
    'generic.step1.text': 'Eine kurze Aufnahme (Anruf oder Fragebogen), um Ihre Ziele, Krankengeschichte, Medikamente/Nahrungsergänzungsmittel, Lebensstil und Einschränkungen zu klären. Sie erhalten eine empfohlene diagnostische Tiefe (Essential / Advanced / Elite) und einen klaren nächsten Schrittplan.',
    'generic.step2.title': '2) Baseline Diagnostic Day',
    'generic.step2.text': 'Ihre Basislinie ist, wo das Raten aufhört. Je nach Ihren Bedürfnissen kann dies gezielte Blutuntersuchungen und klinische Maßnahmen sowie optionale Physiologie‑Verfolgung (z.B. Schlaf‑ und Erholungsmetriken) umfassen. Wenn erweiterte Diagnostik angemessen ist (gehirnfokussierte Tests oder Bildgebung über Partner), besprechen wir dies transparent – was es hinzufügt, was es kostet und welche Entscheidungen es ändern wird.',
    'generic.step3.title': '3) Interpretation & Plan',
    'generic.step3.text': 'Sie erhalten eine Überprüfung in einfacher Sprache: was für Sie normal ist, was in die falsche Richtung tendiert, was jetzt wichtig ist und was warten kann. Dann übersetzen wir dies in einen priorisierten Plan über Ernährung, Training, Schlaf, Stressphysiologie und Nahrungsergänzungsmittel oder Medikamente wo angemessen – immer an messbare Ergebnisse gebunden.',
    'generic.step4.title': '4) 12‑Wochen Präzisionsprogramm',
    'generic.step4.text': 'Umsetzung ist, wo die meisten Pläne scheitern. Über 12 Wochen helfen wir Ihnen, den Plan mit strukturierten Check‑Ins, Datenüberprüfung und Anpassungen auszuführen. Das Ziel ist nicht Perfektion; es ist Richtung und Konsistenz, die sich in Ihren Markern und Ihrer täglichen Funktion zeigt.',
    'generic.step5.title': '5) Mitgliedschafts‑Nachbetreuung',
    'generic.step5.text': 'Gesundheitsspanne ist kein einmaliges Projekt. Die Mitgliedschaft hält Sie mit Wiederholungstest‑Rhythmen, Planiteration und laufender klinischer Überwachung auf Kurs – damit Sie nicht zurück in "Ich werde mich später darum kümmern" rutschen.',
    'generic.scope.title': 'Umfang & Sicherheit',
    'generic.scope.text': 'BetterHealth ist für Prävention, Optimierung und langfristige Risikoreduzierung konzipiert. Wir bieten keine Notfallversorgung. Wenn dringende Symptome vorliegen, sollten Sie sofort medizinische Hilfe suchen. Wir koordinieren mit Ihren behandelnden Ärzten, wenn Spezialistenversorgung erforderlich ist.',
    'generic.button1': 'Einen Pre‑Check starten',
    'generic.button2': 'Programme anzeigen',
    
    // Elements page
    'elements.title': 'Programme',
    'elements.intro': 'Wählen Sie die Tiefe, die zu Ihren Zielen passt. Wir beginnen mit einem Pre‑Check, dann wählen wir eine Basislinie, die proportional und klinisch sinnvoll ist – weil mehr Tests nicht besser sind, es sei denn, sie ändern Entscheidungen.',
    'elements.precheck.title': 'Pre‑Check',
    'elements.precheck.text': 'Kurze Aufnahme (Anruf oder Fragebogen), um Ziele, Geschichte, Einschränkungen und was "besser" für Sie bedeutet zu klären. Sie erhalten eine Empfehlung für die richtige Basislinien‑Stufe und einen klaren nächsten Schrittplan.',
    'elements.baseline.title': 'Baseline‑Diagnostik',
    'elements.baseline.text': 'Ihre Basislinie ist Ihre Startlinie. Sie gibt uns Richtung: was stabil ist, was in die falsche Richtung tendiert und was jetzt Aufmerksamkeit braucht. Basislinien können gezielte Blutuntersuchungen und klinische Maßnahmen sowie optionale Physiologie‑Verfolgung (Schlaf, Erholung, Glukose usw.) je nach Ihren Zielen umfassen.',
    'elements.baseline.essential.title': 'Essential Basislinie',
    'elements.baseline.essential.text': 'Eine praktische, hochsignale Grundlage für die meisten Menschen: kardiometabolische Risikosignale, grundlegende Entzündungsmarker wo relevant, Schilddrüsen‑ und Nährstoffstatus wenn angezeigt und klinischer Kontext. Entwickelt, um klare Entscheidungen zu treffen ohne Überprüfung.',
    'elements.baseline.advanced.title': 'Advanced Basislinie',
    'elements.baseline.advanced.text': 'Für höhere Komplexität oder höhere Ambition: tieferes kardiometabolisches Profiling (z.B. Apolipoproteine wo angemessen), detailliertere metabolische und Lebermarker und zusätzlicher Kontext basierend auf Symptomen, Familiengeschichte und Trainingsbelastung.',
    'elements.baseline.elite.title': 'Elite Basislinie',
    'elements.baseline.elite.text': 'Für Kunden, die maximale Klarheit und engere Iterationszyklen wollen: erweiterte Biomarker‑Tiefe, häufigere Wiederholungstests wo angemessen und Zugang zu Partner‑Modalitäten (z.B. erweiterte Physiologie‑Verfolgung, gehirnfokussierte Tests oder Bildgebung), wenn es Entscheidungen ändert.',
    'elements.program.title': '12‑Wochen Präzisionsprogramm',
    'elements.program.text': 'Hier wird der Plan zum echten Leben. Über 12 Wochen implementieren und verfeinern wir die wenigen Hebel, die wichtig sind – Ernährung, Training, Schlaf, Stressphysiologie und gezielte Supplementierung oder medizinische Koordination wo angemessen – mit Check‑Ins und Datenüberprüfung, um den Fortschritt objektiv zu halten.',
    'elements.membership.title': 'Mitgliedschaft',
    'elements.membership.text': 'Laufende Überwachung und Iteration für Menschen, die zusammengesetzte Ergebnisse wollen. Die Mitgliedschaft ist auf Wiederholungstestpläne, Planaktualisierungen und langfristige Verantwortlichkeit aufgebaut – damit Prävention aktiv bleibt, nicht theoretisch.',
    'elements.button1': 'Einen Pre‑Check starten',
    'elements.button2': 'Zurück zu Services',
    
    // Language switcher
    'lang.de': 'DE',
    'lang.en': 'EN'
  },
  
  en: {
    // Navigation
    'nav.overview': 'Overview',
    'nav.method': 'Method',
    'nav.services': 'Services',
    'nav.start': 'Start',
    'nav.home': 'Home',
    'nav.programs': 'Programs',
    
    // Index page - Intro
    'intro.tagline': 'The modern health world is loud. Every week a new study, a new diet, a new "hack." The truth is simpler: you are an individual, with your own biology, history, and constraints. That is why we start with measurement, not opinions.',
    'intro.description': 'We are a Swiss, physician‑led longevity and brain‑health practice. We build your baseline, translate it into clear decisions, and then track what changes—so you do not drift for decades before a diagnosis.',
    'intro.process': 'Pre‑Check → Baseline Diagnostic Day → 12‑week program → Membership follow‑up',
    'intro.button': 'See how it works',
    
    // Index page - Section One
    'section.one.title1': 'Physician‑led, human‑first',
    'section.one.text1': 'We start by listening. Your story, your symptoms, your labs, your lifestyle, your goals. We do the clinical reasoning, explain it in plain language, and coordinate with your treating clinicians when needed—so you get one coherent plan, not a stack of conflicting advice.',
    'section.one.button1': 'Our method',
    'section.one.title2': 'Measure what matters',
    'section.one.text2': 'Most people are told they are "fine" until something finally crosses a diagnostic threshold. We prefer to catch the drift earlier. We prioritize biomarkers and physiology that change decisions: cardiometabolic risk, inflammation where relevant, sleep and stress physiology, and—when appropriate—brain‑focused assessments.',
    'section.one.button2': 'What we cover',
    'section.one.title3': 'Act, track, iterate',
    'section.one.text3': 'Interventions only matter if they work for you. We implement a small set of high‑leverage changes (nutrition, training, sleep, stress, supplements where appropriate, and medical coordination), then re‑measure. If the data does not move, we adjust the plan—until it does.',
    'section.one.button3': 'Start with a Pre‑Check',
    
    // Index page - Section Two
    'section.two.title': 'Where we focus',
    'section.two.description1': 'You leave with a clear baseline, a prioritized plan, and a retesting schedule. No overwhelm and no long list of random supplements—just evidence‑based levers you can execute and track.',
    'section.two.description2': 'We focus on the few systems that drive healthspan: metabolism, cardiovascular risk, brain function, gut and inflammation, sleep, stress physiology, and recovery. Prevention matters because early course‑corrections are easier than late repairs.',
    'section.two.feature1.title': 'Diagnostics‑first baseline',
    'section.two.feature1.text': 'A structured review of medical history, medications/supplements, family risk, symptoms, and current labs—then a testing plan that is proportional and actionable.',
    'section.two.feature2.title': 'Cardiometabolic health',
    'section.two.feature2.text': 'Insulin resistance, lipids and ApoB, blood pressure, liver markers, body composition, and the behaviors that drive them. The goal is fewer surprises later.',
    'section.two.feature3.title': 'Brain health & cognition',
    'section.two.feature3.text': 'Cognition, mood, focus, and capacity under load. When appropriate, we use brain‑focused diagnostics and partner modalities (e.g., qEEG / imaging) to guide decisions.',
    'section.two.feature4.title': 'Gut, inflammation & immune balance',
    'section.two.feature4.text': 'GI symptoms, food tolerance, bowel patterns, and inflammation signals. We keep it evidence‑based and tied to interventions you can actually maintain.',
    'section.two.feature5.title': 'Sleep & stress physiology',
    'section.two.feature5.text': 'Sleep is a multiplier. We improve sleep quality and recovery by aligning behavior, light/circadian timing, and physiology—then confirm progress with metrics where possible.',
    'section.two.feature6.title': 'Programs & corporate',
    'section.two.feature6.text': 'Structured 12‑week programs, executive support, and corporate education—built around measurement, accountability, and practical implementation.',
    'section.two.button': 'See how it works',
    
    // Index page - Section Three
    'section.three.title': 'Start with a Pre‑Check',
    'section.three.description': 'If you want a baseline you can trust—and a plan that fits real life—start with a Pre‑Check. We clarify your goals, constraints, and current situation, then recommend the right diagnostic depth and the next best steps.',
    'section.three.item1': '10–15 minute intake (or questionnaire)',
    'section.three.item2': 'Clear recommendation: Essential / Advanced / Elite baseline',
    'section.three.item3': 'Time, cost, and what you will actually do next',
    'section.three.button': 'Email to start your Pre‑Check',
    'section.three.address.label': 'Address',
    'section.three.address.value': 'Zürich, Switzerland • In‑person + virtual',
    'section.three.email.label': 'Email',
    'section.three.phone.label': 'Phone',
    
    // Footer
    'footer.copyright': '© BetterHealth. All rights reserved.',
    'footer.design': 'Design:',
    
    // Generic page
    'generic.title': 'Our method',
    'generic.intro': 'Most people are told they are healthy in the absence of a diagnosis. The problem is that diagnoses usually arrive after years of drift. We work upstream: measure early signals, make a clear plan, and prove that it is working with repeat data.',
    'generic.process.title': 'Measure → Interpret → Intervene → Iterate',
    'generic.process.text': 'We keep the process simple. We choose measurements that change decisions, interpret them in context (your symptoms, history, and constraints), act on the few levers that matter, and then re‑check to confirm direction.',
    'generic.step1.title': '1) Pre‑Check',
    'generic.step1.text': 'A short intake (call or questionnaire) to clarify your goals, medical history, medications/supplements, lifestyle, and constraints. You receive a recommended diagnostic depth (Essential / Advanced / Elite) and a clear next‑step plan.',
    'generic.step2.title': '2) Baseline Diagnostic Day',
    'generic.step2.text': 'Your baseline is where guessing stops. Depending on your needs, this may include targeted bloodwork and clinical measures, plus optional physiology tracking (e.g., sleep and recovery metrics). If advanced diagnostics are appropriate (brain‑focused testing or imaging via partners), we discuss it transparently—what it adds, what it costs, and what decisions it will change.',
    'generic.step3.title': '3) Interpretation & plan',
    'generic.step3.text': 'You get a plain‑language review: what is normal for you, what is trending the wrong way, what matters now, and what can wait. Then we translate this into a prioritized plan across nutrition, training, sleep, stress physiology, and supplements or medications where appropriate—always tied to measurable outcomes.',
    'generic.step4.title': '4) 12‑week precision program',
    'generic.step4.text': 'Implementation is where most plans fail. Over 12 weeks, we help you execute the plan with structured check‑ins, data review, and adjustments. The goal is not perfection; it is direction and consistency that shows up in your markers and your day‑to‑day function.',
    'generic.step5.title': '5) Membership follow‑up',
    'generic.step5.text': 'Healthspan is not a one‑off project. Membership keeps you on track with retesting cadences, plan iteration, and ongoing clinical oversight—so you do not slide back into "I\'ll deal with it later."',
    'generic.scope.title': 'Scope & safety',
    'generic.scope.text': 'BetterHealth is designed for prevention, optimization, and long‑term risk reduction. We do not provide emergency care. If urgent symptoms are present, you should seek immediate medical attention. We coordinate with your treating clinicians when specialist care is required.',
    'generic.button1': 'Start a Pre‑Check',
    'generic.button2': 'View programs',
    
    // Elements page
    'elements.title': 'Programs',
    'elements.intro': 'Choose the depth that fits your goals. We start with a Pre‑Check, then select a baseline that is proportional and clinically sensible—because more tests are not better unless they change decisions.',
    'elements.precheck.title': 'Pre‑Check',
    'elements.precheck.text': 'Short intake (call or questionnaire) to clarify goals, history, constraints, and what "better" means for you. You receive a recommendation for the right baseline tier and a clear next‑step plan.',
    'elements.baseline.title': 'Baseline diagnostics',
    'elements.baseline.text': 'Your baseline is your starting line. It gives us direction: what is stable, what is trending the wrong way, and what needs attention now. Baselines can include targeted bloodwork and clinical measures, plus optional physiology tracking (sleep, recovery, glucose, etc.) depending on your goals.',
    'elements.baseline.essential.title': 'Essential baseline',
    'elements.baseline.essential.text': 'A practical, high‑signal foundation for most people: cardiometabolic risk signals, basic inflammation markers where relevant, thyroid and nutrient status when indicated, and clinical context. Designed to drive clear decisions without overtesting.',
    'elements.baseline.advanced.title': 'Advanced baseline',
    'elements.baseline.advanced.text': 'For higher complexity or higher ambition: deeper cardiometabolic profiling (e.g., apolipoproteins where appropriate), more detailed metabolic and liver markers, and additional context based on symptoms, family history, and training load.',
    'elements.baseline.elite.title': 'Elite baseline',
    'elements.baseline.elite.text': 'For clients who want maximum clarity and tighter iteration cycles: expanded biomarker depth, more frequent retesting where appropriate, and access to partner modalities (e.g., advanced physiology tracking, brain‑focused testing, or imaging) when it changes decisions.',
    'elements.program.title': '12‑week precision program',
    'elements.program.text': 'This is where the plan becomes real life. Over 12 weeks we implement and refine the few levers that matter—nutrition, training, sleep, stress physiology, and targeted supplementation or medical coordination when appropriate—using check‑ins and data review to keep progress objective.',
    'elements.membership.title': 'Membership',
    'elements.membership.text': 'Ongoing oversight and iteration for people who want compounding results. Membership is built around retesting schedules, plan updates, and long‑term accountability—so prevention stays active, not theoretical.',
    'elements.button1': 'Start a Pre‑Check',
    'elements.button2': 'Back to services',
    
    // Language switcher
    'lang.de': 'DE',
    'lang.en': 'EN'
  }
};

// Make STRINGS available globally for browser
if (typeof window !== 'undefined') {
  window.STRINGS = STRINGS;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STRINGS };
}
