import{j as e}from"./index-Cf8TGb8v.js";import{u as s}from"./index-RXN0-fXi.js";import"./preload-BazJkaLr.js";const h=["/articles/smart-home/image-de.jpg"];function r(i){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Smart Home – Ein technischer Leitfaden"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/articles/smart-home/image-de.jpg",alt:"[AR:16/9][FW:60%][MW:36rem]Symbolbild (KI): kritische Funktionalität vs. Intelligenz und Logik"})}),`
`,e.jsxs(n.p,{children:["[SUBTITLE] ",e.jsx(n.strong,{children:"Warum muss mein Haus smart sein?"})]}),`
`,e.jsx(n.p,{children:"Meist verbindet man mit der Idee Spielereien, wie das Schalten des Lichts mit dem Handy. Das ist zwar „ganz nett“, jedoch selten essenziell. Allerdings entspricht das nur teilweise der Realität. Smart Homes können durch Optimierung des Energieverbrauchs Kosten senken. Auch Warnfunktionen können dazu beitragen, dass offen gelassene Fenster im Winter oder angelassenes Licht im Urlaub schneller bemerkt werden. In diesem Fall wird nun auch das Schalten des Lichts mit dem Handy von der Spielerei zum Stromkosten-Senker."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hinweis (Sicherheit, Haftung & Transparenz):"})," Dieser Artikel ist eine technische Übersicht und ersetzt keine Elektroplanung oder Fachberatung. Arbeiten an elektrischen Anlagen sowie Änderungen an der Hausinstallation dürfen nur durch qualifizierte Elektrofachkräfte (bzw. unter deren Aufsicht) erfolgen. Ich biete System-Architektur & Software-Umsetzung für Smart-Home-Projekte an."]}),`
`]}),`
`,e.jsx(n.h2,{children:"1] Wie wird ein Haus smart?"}),`
`,e.jsx(n.p,{children:"Um das zu verstehen, müssen wir zwischen zwei Welten unterscheiden – kritischer Funktionalität (Layer-1) und intelligenter Logik (Layer-2). Man kann sich das wie den Unterschied zwischen Rückenmark und Gehirn vorstellen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layer-1 (Rückenmark):"})," Reflexe funktionieren immer. Wenn Sie auf einen Legostein treten, ziehen Sie den Fuß weg, bevor das Gehirn es merkt. Im Haus sind das Lichtschalter und Thermostate. Diese müssen immer funktionieren, auch wenn die zentrale „Intelligenz“ ausfällt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layer-2 (Gehirn):"})," Hier findet die komplexe Verarbeitung statt. Was mache ich mit meinem Energieüberschuss – laufen gehen? Im Haus entscheidet das Gehirn, ob der PV-Überschuss z. B. für die Waschmaschine verwendet wird."]}),`
`]}),`
`,e.jsx(n.p,{children:"PV-Anlagen und Heizungen haben heute fast standardmäßig eine eigene interne Basis-Steuerung (Layer-1) und sind somit autark funktionsfähig. Über eine Schnittstelle können sie jedoch in ein höheres Steuersystem (Layer-2) integriert werden. Jetzt bleibt noch der Rest (Lichter, Jalousien, …). Genau wie bei PV und Heizung wollen wir ein System, das als „Rückenmark“ autark ohne höheres Steuersystem (Layer-2) funktioniert, aber die Integration in ein solches ermöglicht. Um das zu erreichen, gibt es mehrere Möglichkeiten."}),`
`,e.jsx(n.h3,{children:"1.1] Basis-Steuerung (Layer-1)"}),`
`,e.jsx(n.p,{children:"Zuerst wollen wir die Möglichkeiten betrachten, die uns zur Verfügung stehen, wenn wir unser Haus neu errichten (oder umfassend sanieren) und somit nicht abhängig von bestehenden Lösungen sind."}),`
`,e.jsx(n.h4,{children:"1.1.1] Der Bus"}),`
`,e.jsx(n.p,{children:"Dieser Bus hat nichts mit dem auf der Straße zu tun. Er bezeichnet vielmehr das Netz, mit dem alle Teilnehmer (in unserem Fall Lichter, Jalousien, …) verbunden sind. Anders als bei der klassischen Verkabelung, wo ein Lichtschalter einfach den Stromkreis des Lichts schließt, um es einzuschalten, sind hier Schalter und Licht Bus-Teilnehmer und somit smart."}),`
`,e.jsx(n.p,{children:"Der Schalter sendet einen Befehl an den Bus: „Teilnehmer 26523 einschalten“. „26523“ beschreibt hier die Kennung des Bus-Teilnehmers. Alle Bus-Teilnehmer empfangen diesen Befehl, aber nur Teilnehmer „26523“ (in unserem Fall das Licht) verarbeitet ihn. Um den Bus nun mit der höheren Steuerung verbinden zu können, setzen wir einfach einen weiteren Teilnehmer in den Bus, der alle Befehle mitliest und bei Bedarf Befehle in den Bus schreibt. Dieser Teilnehmer, der als Gateway bezeichnet wird, dient als Schnittstelle zum Layer-2. Der Bus an sich bildet hier Layer-1, da er autark ohne höheres Steuersystem funktioniert."}),`
`,e.jsx(n.h4,{children:"1.1.2] Die Steuerung (SPS)"}),`
`,e.jsx(n.p,{children:"Der Lichtschalter schließt hier nicht direkt den Stromkreis des Lichts, sondern einen Stromkreis der Steuerung (Input/Steuerstromkreis). Diese schließt in weiterer Folge den Stromkreis des Lichts (Output). Die Steuerung dient als „Rückenmark“, das Inputs verarbeitet und Outputs ansteuert. Gleichzeitig ist die Steuerung die Schnittstelle zu unserem Layer-2. Die Steuerung kann uns mitteilen, welche Outputs gerade angesteuert werden, und über unser Layer-2 Befehle zur Ansteuerung entgegennehmen. Dieses System bildet ebenfalls Layer-1, da es über die Steuerstromkreise auch ohne höheres Steuersystem funktioniert."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Was ist jetzt besser?"})," Um es in den Worten eines Juristen auszudrücken: „Es kommt darauf an“."]}),`
`]}),`
`,e.jsx(n.p,{children:"Der Bus hat den Vorteil, dass er typischerweise keinen einzelnen zentralen Ausfallpunkt hat – im Gegensatz zu einer rein zentralen Steuerung, bei der ein Ausfall der Zentrale viele Funktionen gleichzeitig treffen kann. Weiters ist der Verkabelungsaufwand beim Bus oft geringer, da alle Teilnehmer am selben Bus (Kabel) hängen, anders als bei der Steuerung, wo viele Teilnehmer einzeln verbunden sind."}),`
`,e.jsx(n.p,{children:"Allerdings sind die Unterschiede in der Praxis meist weniger „schwarz/weiß“, als es auf den ersten Blick erkennbar ist. Beim Bus kann eine Unterbrechung des Buskabels je nach Topologie/Segmentierung ebenfalls größere Bereiche betreffen. Als zentrale Steuerung werden außerdem sogenannte speicherprogrammierbare Steuerungen (SPS oder englisch PLC) verwendet. Diese sind extrem robust und seit Jahrzehnten fixer Bestandteil in der Industrie, wo Ausfallsicherheit eine extrem wichtige Rolle spielt. Auch der Mehraufwand bei der Verkabelung ist in vielen Projekten geringer, als man vermuten könnte. Da Steuerstromkreise häufig im Kleinspannungsbereich (z. B. 24 V, je nach Konzept) arbeiten, können problemlos mehrere Kreise in einem Kabel realisiert werden, wodurch man die Anzahl der zu verlegenden Kabel reduziert. Ein großer Vorteil der Steuerung liegt häufig beim Preis. Da nicht jeder Teilnehmer „smart“ sein muss, können klassische Elemente (Standard-Taster) verwendet werden. Das spart Geld. Auch Steuerungen gibt es sehr preiswert."}),`
`,e.jsx(n.p,{children:"Zusammengefasst haben beide Systeme ihre Vor- und Nachteile. Preislich ist jedoch in vielen Fällen die Steuerung (SPS) attraktiver. Auch eine Mischung beider Systeme kann – je nach Projekt – Sinn ergeben."}),`
`,e.jsx(n.h3,{children:"1.2] Höheres Steuersystem (Layer-2)"}),`
`,e.jsx(n.p,{children:"Wir haben nun unsere autarken Bausteine (Layer-1-Systeme). Um unser Haus wirklich smart zu machen, brauchen wir jetzt noch ein System, das alles zusammenführt. Unabhängig von den unten genannten Gesamtlösungen ist Home Assistant (HA) mein klarer Favorit bei isolierter Betrachtung von Layer-2-Systemen: offen, flexibel, lokal betreibbar und mit großer Community."}),`
`,e.jsx(n.p,{children:"Wir können Home Assistant auf unterschiedlicher Hardware installieren oder einen fertigen Controller kaufen (Home Assistant Green). Home Assistant ist Open Source und verfügt über eine riesige Community. Dadurch werden sehr viele Systeme unterstützt. Durch die Zusammenführung aller unserer Layer-1-Systeme in Home Assistant können wir alles aus einem Programm steuern. Wir können Automatisierungen schreiben, ein Energiemanagement aufsetzen und vieles mehr. Home Assistant kann vom Handy, PC oder etwaigen Wand-Terminals aus bedient werden. Noch dazu ist es sehr preiswert: Einen fertigen Controller bekommt man häufig ab ca. 150 € (je nach Händler/Angebot; Stand: Januar 2026, Preise variieren)."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Beispiel-Automatisierungen:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wenn PV-Überschuss und Warmwasser unter X °C → Warmwasserbereitung starten."}),`
`,e.jsx(n.li,{children:"Wenn Fenster im Winter länger als 5 Minuten offen → Push-Benachrichtigung und Heizleistung reduzieren."}),`
`,e.jsx(n.li,{children:"Wenn niemand zu Hause (Präsenz) → ausgewählte Verbraucher deaktivieren und Alarm-Logik scharf schalten."}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{children:"1.3] Das Thema Nachrüsten"}),`
`,e.jsx(n.p,{children:"Meist ergibt sich folgende Situation: Man rüstet eine PV-Anlage nach oder installiert eine neue Heizung. Diese haben, wie bereits erwähnt, eine eigene Basissteuerung. Meistens ist eine Integration dieser in eine Layer-2-Steuerung für viele ausreichend. Will man jedoch auch den Rest (Lichter, Jalousien, …) integrieren, steht man im Bestandsbau vor einem Problem."}),`
`,e.jsx(n.p,{children:"Einerseits könnte man natürlich eine Steuerung oder einen Bus nachrüsten, das ist allerdings mit viel Aufwand (Schremmen) und Kosten verbunden. Da das kein Nischenproblem ist, gibt es hierfür mittlerweile auch genügend Alternativlösungen. Es gibt z. B. Module, die man hinter bestehenden Lichtschaltern anbringen kann. Diese behindern die klassische Funktion in der Regel nicht, bieten aber die Möglichkeit, den Schaltstatus auszulesen oder remote zu verändern. Diese Systeme können in weiterer Folge ebenfalls in ein Layer-2-System integriert werden. Ein Beispiel für solche Nachrüstsysteme sind Komponenten auf Basis des Zigbee-Standards."}),`
`,e.jsx(n.p,{children:"Man kann Nachrüstsysteme natürlich auch von Anfang an integrieren. Jedoch ist es empfehlenswert, wenn die Möglichkeit besteht, „smart by design“ zu planen (Bus oder Steuerung). Man kann auch bei einem Neubau nie alle Eventualitäten abdecken. Da ist es gut zu wissen, dass es immer die Möglichkeit gibt, einfach nachzurüsten (ohne Kabelziehen). Wichtig hierfür ist allerdings, ein offenes Layer-2-System (wie HA) zu integrieren, um die möglichen Integrationen nicht von Grund auf einzuschränken."}),`
`,e.jsx(n.h3,{children:"1.4] Häufige Planungsfehler"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Kritische Funktionen nur über Layer-2 bedienbar machen"}),`
`,e.jsx(n.li,{children:"Ungeeignete Layer-1-Hardware oder Standards (WLAN) als Basis für Licht/Beschattung verwenden"}),`
`,e.jsx(n.li,{children:"Keine manuelle Fallback-Bedienung für kritische Funktionen vorsehen (keine manuellen Steuerstromkreise)"}),`
`,e.jsx(n.li,{children:"„Alles smart“ beim Nachrüsten statt 80/20 (erst das mit echtem Nutzen)"}),`
`]}),`
`,e.jsx(n.h2,{children:"2] Lösungen"}),`
`,e.jsx(n.p,{children:"Da wir nun die Grundstruktur eines Smart Homes beleuchtet haben, stellt sich die Frage: Welche Systeme eignen sich, wenn man neu baut oder umfassend saniert? In dieser Phase haben wir den Luxus, ein System ohne „Altlasten“ integrieren zu können. Im Folgenden werden typische Lösungen diskutiert. Da ich der Überzeugung bin, dass Cloud- oder Abo-Dienste nicht Voraussetzung für Grundfunktionen sein sollten, schließe ich solche Ansätze – falls zutreffend – hier aus."}),`
`,e.jsx(n.h3,{children:"2.1] Loxone"}),`
`,e.jsx(n.p,{children:"Eine bekannte Lösung ist Loxone. Es vereint Layer-1 und Layer-2 zu einem System: alles aus einer Hand, gut aufeinander abgestimmt. Das hat allerdings oft einen höheren Einstiegspreis, und man entscheidet sich dabei in der Regel für ein stark „ökosystemgebundenes“ Setup: Man setzt primär auf Hardware/Komponenten aus dem Loxone-Umfeld und nutzt Integrationen zu Drittsystemen je nach Bedarf."}),`
`,e.jsx(n.p,{children:"Wollen Sie später Geräte einbinden, die im Ökosystem nicht vorgesehen sind, kann das je nach Integrationsweg zusätzlichen Aufwand oder Zusatzkosten bedeuten. Natürlich kann man Loxone auch in ein zusätzliches Layer-2 wie Home Assistant integrieren, um weitere Hersteller einzubinden – dann stellt sich aber die Frage, ob man nicht von Grund auf offen planen möchte."}),`
`,e.jsx(n.h3,{children:"2.2] KNX (mit HA)"}),`
`,e.jsx(n.p,{children:"KNX ist ein klassisches Bussystem (Layer-1, wie oben erklärt). Durch den offenen Standard gibt es viele Elemente, die integriert werden können – darunter auch Gateways für Bedienung übers Handy/PC. Manche entscheiden sich bei KNX, auf ein eigenes Layer-2 zu verzichten und alles über den KNX-Bus abzubilden. Das kann technisch sehr elegant sein, wird aber je nach Funktionsumfang und Komponentenwahl schnell kostenintensiv."}),`
`,e.jsx(n.p,{children:"Die Verwendung von KNX in Verbindung mit Home Assistant ist jedoch eine starke Kombi: Somit kann man KNX auf die essenziellen Teile beschränken und hat mit Home Assistant ein leistungsstarkes und offenes Layer-2 für die Integration von Nicht-KNX-Geräten (PV, Heizung, …). Damit bleibt man flexibel und kann Kosten reduzieren."}),`
`,e.jsx(n.h3,{children:"2.3] Custom – Opta mit HA"}),`
`,e.jsx(n.p,{children:"Dies ist mein favorisierter Ansatz. Wir nutzen eine Arduino Opta (eine offene Industrie-SPS) als robuste Basis für Licht und Jalousien (Layer-1). PV- und Heizungssysteme mit eigenem Layer-1 werden direkt in HA (Layer-2) integriert. Wir sind hier weitgehend herstellerunabhängig und können klassische Komponenten (Taster, Lampen, …) verwenden."}),`
`,e.jsx(n.p,{children:"Für komplexe Beleuchtungsszenarien lässt sich das System einfach mit DALI-2 (Licht-Standard) erweitern. DALI-2 ist ein Bus zur Steuerung von LED-Lampen und wird ab einer gewissen Komplexität/Anzahl von Leuchtgruppen oft sinnvoll. DALI-2 kann – je nach Projekt – auch in Kombination mit KNX oder anderen Systemen eingesetzt werden (die Sinnhaftigkeit sollte hier allerdings gesondert evaluiert werden)."}),`
`,e.jsx(n.p,{children:"Die Custom-Lösung ist in vielen Fällen spürbar günstiger als KNX oder Komplett-Ökosysteme, bei zusätzlich hoher Flexibilität (natürlich wie immer abhängig von Umfang, Komponenten und Integrationsgrad)."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"Was in Ihrem konkreten Projekt „die beste“ Lösung ist, hängt wie immer von Anforderungen, Budget, Aufwand und Zuständigkeiten ab. Grundsätzlich empfehle ich die Trennung von kritischer Funktionalität (Layer-1) und Logik/Automatisierung (Layer-2). Die Kombination aus einer Industrie-Steuerung (Opta) und Home Assistant bietet meiner Meinung nach ein sehr gutes Preis-Leistungs-Verhältnis bei hoher Flexibilität und Zukunftssicherheit."}),`
`,e.jsx(n.h2,{children:"3] Fazit"}),`
`,e.jsx(n.p,{children:"Wenn Sie nur eine Sache aus diesem Artikel mitnehmen, dann diese:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Trennen Sie ",e.jsx(n.strong,{children:"kritische Funktionen"})," (Layer-1) von ",e.jsx(n.strong,{children:"Komfort & Intelligenz"})," (Layer-2)."]}),`
`]}),`
`,e.jsx(n.p,{children:"Licht, Beschattung und grundlegende Sicherheitsfunktionen müssen immer bedienbar bleiben – unabhängig von App, Cloud oder Internet. Die direkte Integration von kritischen Funktionen in Layer-2-Systeme ist auch ohne App-, Cloud- oder Internetabhängigkeit nicht zu empfehlen, da spezielle Hardware für Layer-1-Systeme erforderlich ist. Die „Intelligenz“ (Automatisierungen, Energiemanagement, Visualisierung) darf Komfort bringen, aber kein Single Point of Failure für den Alltag werden."}),`
`,e.jsx(n.p,{children:"Meine Empfehlung nach Szenario:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neubau / Kernsanierung:"})," Planen Sie „smart by design“: Layer-1 kabelgebunden (Bus oder SPS), Layer-2 offen (z. B. Home Assistant). Das ist robust, zukunftssicher und langfristig am flexibelsten."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bestandsbau:"})," Starten Sie pragmatisch: PV/Heizung in ein Layer-2 (z. B. Home Assistant) integrieren und gezielt dort nachrüsten, wo der Nutzen hoch ist (z. B. Warnungen, ausgewählte Lichtkreise, Beschattung). Wichtig ist, dass die manuelle Bedienung für kritische Funktionen immer erhalten bleibt."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Ein schneller Reality-Check für die Planung:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Was muss im Haus immer funktionieren? (Licht, Beschattung, Heizung-Grundmodus, Warnungen)"}),`
`,e.jsx(n.li,{children:"Was ist „nice to have“? (Szenen, Präsenzlogik, Sprachsteuerung, Energie-Optimierung)"}),`
`,e.jsx(n.li,{children:"Wie viel Flexibilität wollen Sie in 5–10 Jahren noch haben? (Herstellerbindung vs. offene Standards)"}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{children:"3.1] Wenn Sie maximale Flexibilität wollen"}),`
`,e.jsx(n.p,{children:"Wenn Sie aus einem Konzept eine umsetzbare Lösung machen wollen, lohnt sich ein früher Blick auf Umfang (Scope) und Kosten-Treiber. Gerade bei Smart Homes entstehen Budget-Sprünge selten durch „smart“ an sich, sondern durch Anzahl der Kreise, Sonderfunktionen, Integrationen und den Installationsaufwand."}),`
`,e.jsx(n.p,{children:"Anders als bei Pauschalangeboten zahlen Sie bei einer Custom-Lösung nur das, was Sie wirklich brauchen. Die Kosten teilen sich auf in:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hardware"})," (z. B. die Opta Steuerung & Sensoren – kaufen Sie direkt)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Elektroinstallation"})," (Ihr lokaler Elektriker)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"System-Architektur & Software"})," (das kann ich übernehmen)"]}),`
`]}),`
`,e.jsx(n.h2,{children:"4] Mein Angebot"}),`
`,e.jsx(n.p,{children:"Sie haben Interesse an einer Custom-Lösung, haben Fragen oder wollen nachrüsten? Ich berate Sie gerne in einem kostenlosen und unverbindlichen Erstgespräch."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://termin.jle.systems",children:e.jsx(n.strong,{children:"Termin buchen"})})," — Ihr Wunschtermin ohne Wartezeit"]}),`
`]}),`
`,e.jsx(n.p,{children:"Wollen Sie mich lieber per E-Mail oder WhatsApp kontaktieren?"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/contact",children:e.jsx(n.strong,{children:"Kontakt"})})," — alle Kontaktmöglichkeiten"]}),`
`]})]})}function u(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{u as default,h as images};
