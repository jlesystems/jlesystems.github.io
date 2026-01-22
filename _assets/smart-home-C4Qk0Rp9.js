import{j as e}from"./index-dZo7T_Yr.js";import{u as s}from"./index-Bmpszxnp.js";import"./preload-OoidQG6T.js";const l=["/articles/smart-home/image-en.jpg"];function i(t){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Smart Home – A Technical Guide"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/articles/smart-home/image-en.jpg",alt:"[AR:16/9][FW:60%][MW:36rem]Symbolic image (AI): critical functionality vs. intelligence and logic"})}),`
`,e.jsxs(n.p,{children:["[SUBTITLE] ",e.jsx(n.strong,{children:"Why does my house need to be smart?"})]}),`
`,e.jsx(n.p,{children:"Most people associate the idea with gimmicks, such as switching lights with a phone. That is “nice to have”, but rarely essential. However, that only partly reflects reality. Smart homes can reduce costs by optimizing energy consumption. Warning functions can also help ensure that open windows in winter or lights left on while on vacation are noticed sooner. In that case, switching lights with a phone turns from a gimmick into a cost saver."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note (Safety, Liability & Transparency):"})," This article is a technical overview and does not replace electrical planning or professional advice. Work on electrical systems as well as changes to a building’s electrical installation may only be carried out by qualified electricians (or under their supervision). I offer system architecture and software implementation for smart home projects."]}),`
`]}),`
`,e.jsx(n.h2,{children:"1] How does a house become smart?"}),`
`,e.jsx(n.p,{children:"To understand this, we need to distinguish between two worlds: critical functionality (Layer-1) and intelligent logic (Layer-2). You can think of this like the difference between the spinal cord and the brain:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layer-1 (spinal cord):"})," Reflexes always work. If you step on a LEGO brick, you pull your foot away before the brain even notices. In a house, this corresponds to light switches and thermostats. These must always work, even if the central “intelligence” fails."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layer-2 (brain):"})," This is where complex processing happens. What do I do with my energy surplus – go for a run? In the house, the brain decides whether the PV surplus is used, for example, for the washing machine."]}),`
`]}),`
`,e.jsx(n.p,{children:"PV systems and heating systems now almost always have their own internal basic control (Layer-1) and are therefore capable of operating autonomously. Via an interface, however, they can be integrated into a higher-level control system (Layer-2). That leaves the rest (lights, blinds, …). Just like with PV and heating, we want a system that functions autonomously as the “spinal cord” without a higher-level control system (Layer-2), but still allows integration into such a system. There are several ways to achieve this."}),`
`,e.jsx(n.h3,{children:"1.1] Basic control (Layer-1)"}),`
`,e.jsx(n.p,{children:"First, we want to look at the options available when we build a new house (or perform a major renovation) and therefore are not dependent on existing solutions."}),`
`,e.jsx(n.h4,{children:"1.1.1] The bus"}),`
`,e.jsx(n.p,{children:"This bus has nothing to do with the one on the street. It refers to the network that connects all participants (in our case lights, blinds, …). Unlike classic wiring, where a light switch simply closes the circuit of the light to turn it on, switches and lights are bus participants here and are therefore smart."}),`
`,e.jsx(n.p,{children:"The switch sends a command onto the bus: “Switch on participant 26523”. “26523” describes the identifier of the bus participant. All bus participants receive this command, but only participant “26523” (in our case the light) processes it. To connect the bus to the higher-level control, we simply add another participant to the bus that reads all commands and, when needed, writes commands onto the bus. This participant, called a gateway, serves as the interface to Layer-2. The bus itself forms Layer-1 here, because it functions autonomously without a higher-level control system."}),`
`,e.jsx(n.h4,{children:"1.1.2] The controller (PLC)"}),`
`,e.jsx(n.p,{children:"Here, the light switch does not directly close the light’s power circuit, but a circuit of the controller (input/control circuit). The controller then closes the light’s power circuit (output). The controller acts as the “spinal cord” that processes inputs and drives outputs. At the same time, the controller is the interface to our Layer-2. The controller can tell us which outputs are currently being driven and can accept commands for output control via our Layer-2. This system also forms Layer-1, because it works via the control circuits even without a higher-level control system."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"So which is better?"})," To put it in the words of a lawyer: “It depends”."]}),`
`]}),`
`,e.jsx(n.p,{children:"The bus has the advantage that it typically has no single central point of failure – unlike a purely centralized controller, where a failure of the central unit can affect many functions at once. In addition, the wiring effort for a bus is often lower, since all participants share the same bus (cable), unlike a controller-based approach where many participants are connected individually."}),`
`,e.jsx(n.p,{children:"However, in practice the differences are often less “black and white” than they appear at first glance. With a bus, a break in the bus cable can, depending on topology/segmentation, also affect larger areas. As central controllers, so-called programmable logic controllers (PLC) are used. They are extremely robust and have been a standard in industry for decades, where reliability is critically important. The additional wiring effort is also lower in many projects than one might assume. Since control circuits often operate in the extra-low-voltage range (e.g., 24 V, depending on the concept), multiple circuits can easily be combined in one cable, reducing the number of cables to be laid. A major advantage of the controller approach is often the price. Because not every participant has to be “smart”, classic components (standard push-buttons) can be used. That saves money. Controllers are also available very cheaply."}),`
`,e.jsx(n.p,{children:"In summary, both systems have their advantages and disadvantages. In many cases, however, the controller (PLC) is more attractive in terms of price. A hybrid of both systems can also make sense – depending on the project."}),`
`,e.jsx(n.h3,{children:"1.2] Higher-level control system (Layer-2)"}),`
`,e.jsx(n.p,{children:"We now have our autonomous building blocks (Layer-1 systems). To make our house truly smart, we still need a system that brings everything together. Regardless of the overall solutions mentioned below, Home Assistant (HA) is my clear favorite when looking at Layer-2 systems in isolation: open, flexible, locally operable, and supported by a large community."}),`
`,e.jsx(n.p,{children:"We can install Home Assistant on different hardware or buy a ready-made controller (Home Assistant Green). Home Assistant is open source and has a huge community. This means many systems are supported. By bringing all our Layer-1 systems together in Home Assistant, we can control everything from a single application. We can write automations, set up energy management, and much more. Home Assistant can be operated from a phone, PC, or wall-mounted terminals. It is also very affordable: a ready-made controller is often available from around €150 (depending on retailer/offer; as of January 2026, prices vary)."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example automations:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If PV surplus and hot water below X °C → start hot water heating."}),`
`,e.jsx(n.li,{children:"If a window is open in winter for more than 5 minutes → push notification and reduce heating output."}),`
`,e.jsx(n.li,{children:"If nobody is home (presence) → disable selected loads and arm alarm logic."}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{children:"1.3] The topic of retrofitting"}),`
`,e.jsx(n.p,{children:"Most commonly, the situation is as follows: you retrofit a PV system or install a new heating system. As mentioned, these have their own basic control. For many people, integrating these into a Layer-2 controller is sufficient. But if you also want to integrate the rest (lights, blinds, …), you run into a problem in existing buildings."}),`
`,e.jsx(n.p,{children:"On the one hand, you could of course retrofit a controller or a bus, but this involves a lot of effort (chasing channels) and cost. Since this is not a niche problem, there are now plenty of alternative solutions. For example, there are modules that can be installed behind existing light switches. These usually do not interfere with the classic function, but they provide the ability to read the switching state or change it remotely. These systems can then also be integrated into a Layer-2 system. An example of such retrofit systems are components based on the Zigbee standard."}),`
`,e.jsx(n.p,{children:"Of course, you can also integrate retrofit systems from the start. However, if possible, it is recommended to plan “smart by design” (bus or controller). Even in a new build, you can never anticipate every eventuality. It is good to know that retrofitting is always possible later (without pulling cables). For this, however, it is important to integrate an open Layer-2 system (like HA) so you do not restrict possible integrations from the outset."}),`
`,e.jsx(n.h3,{children:"1.4] Common planning mistakes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Making critical functions operable only via Layer-2"}),`
`,e.jsx(n.li,{children:"Using unsuitable Layer-1 hardware or standards (Wi-Fi) as the basis for lighting/shading"}),`
`,e.jsx(n.li,{children:"Not providing manual fallback operation for critical functions (no manual control circuits)"}),`
`,e.jsx(n.li,{children:"“Everything smart” in retrofit projects instead of 80/20 (start with what provides real value)"}),`
`]}),`
`,e.jsx(n.h2,{children:"2] Solutions"}),`
`,e.jsx(n.p,{children:"Now that we have discussed the basic structure of a smart home, the question arises: which systems are suitable if you build new or do a major renovation? At this stage, we have the luxury of being able to integrate a system without “legacy constraints”. The following discusses typical solutions. Since I am convinced that cloud or subscription services should not be a prerequisite for basic functions, I exclude such approaches here – where applicable."}),`
`,e.jsx(n.h3,{children:"2.1] Loxone"}),`
`,e.jsx(n.p,{children:"A well-known solution is Loxone. It combines Layer-1 and Layer-2 into one system: everything from a single source, well coordinated. However, this often comes with a higher entry price, and you typically choose a strongly “ecosystem-bound” setup: you primarily rely on hardware/components from the Loxone environment and use integrations to third-party systems as needed."}),`
`,e.jsx(n.p,{children:"If you later want to integrate devices that are not intended in the ecosystem, this can mean additional effort or costs, depending on the integration path. Of course, you can also integrate Loxone into an additional Layer-2 such as Home Assistant to include more manufacturers – then the question arises whether you would prefer to plan openly from the start."}),`
`,e.jsx(n.h3,{children:"2.2] KNX (with HA)"}),`
`,e.jsx(n.p,{children:"KNX is a classic bus system (Layer-1, as explained above). Because it is an open standard, there are many elements that can be integrated – including gateways for operation via phone/PC. Some people choose, with KNX, to forgo a separate Layer-2 and implement everything via the KNX bus. This can be technically very elegant, but depending on functionality and component choices it can quickly become expensive."}),`
`,e.jsx(n.p,{children:"Using KNX in combination with Home Assistant, however, is a strong combo: you can limit KNX to the essential parts and use Home Assistant as a powerful and open Layer-2 for integrating non-KNX devices (PV, heating, …). This keeps you flexible and can reduce costs."}),`
`,e.jsx(n.h3,{children:"2.3] Custom – Opta with HA"}),`
`,e.jsx(n.p,{children:"This is my preferred approach. We use an Arduino Opta (an open industrial PLC) as a robust base for lighting and blinds (Layer-1). PV and heating systems with their own Layer-1 are integrated directly into HA (Layer-2). We remain largely manufacturer-independent and can use classic components (push-buttons, lamps, …)."}),`
`,e.jsx(n.p,{children:"For more complex lighting scenarios, the system can easily be expanded with DALI-2 (lighting standard). DALI-2 is a bus for controlling LED luminaires and often becomes useful beyond a certain complexity/number of lighting groups. Depending on the project, DALI-2 can also be used in combination with KNX or other systems (the suitability should be evaluated separately)."}),`
`,e.jsx(n.p,{children:"In many cases, the custom solution is noticeably cheaper than KNX or complete ecosystems, while offering high flexibility (as always, depending on scope, components, and integration depth)."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"Which solution is “best” for your specific project depends, as always, on requirements, budget, effort, and responsibilities. In principle, I recommend separating critical functionality (Layer-1) from logic/automation (Layer-2). In my opinion, the combination of an industrial controller (Opta) and Home Assistant offers a very good price-performance ratio with high flexibility and future-proofing."}),`
`,e.jsx(n.h2,{children:"3] Conclusion"}),`
`,e.jsx(n.p,{children:"If you take only one thing from this article, let it be this:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Separate ",e.jsx(n.strong,{children:"critical functions"})," (Layer-1) from ",e.jsx(n.strong,{children:"comfort & intelligence"})," (Layer-2)."]}),`
`]}),`
`,e.jsx(n.p,{children:"Lighting, shading, and basic safety functions must always remain operable – independent of app, cloud, or internet. Directly integrating critical functions into Layer-2 systems is not recommended even without app, cloud, or internet dependency, because special hardware is required for Layer-1 systems. The “intelligence” (automations, energy management, visualization) may add comfort, but it must not become a single point of failure for everyday life."}),`
`,e.jsx(n.p,{children:"My recommendation by scenario:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"New build / major renovation:"})," Plan “smart by design”: Layer-1 wired (bus or PLC), Layer-2 open (e.g., Home Assistant). This is robust, future-proof, and most flexible in the long run."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Existing building:"})," Start pragmatically: integrate PV/heating into a Layer-2 (e.g., Home Assistant) and retrofit selectively where the benefit is high (e.g., warnings, selected lighting circuits, shading). It is important that manual operation for critical functions always remains available."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"A quick reality check for planning:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"What must always work in the house? (lighting, shading, heating basic mode, warnings)"}),`
`,e.jsx(n.li,{children:"What is “nice to have”? (scenes, presence logic, voice control, energy optimization)"}),`
`,e.jsx(n.li,{children:"How much flexibility do you still want in 5–10 years? (vendor lock-in vs. open standards)"}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{children:"3.1] If you want maximum flexibility"}),`
`,e.jsx(n.p,{children:"If you want to turn a concept into an implementable solution, it is worth looking early at scope and cost drivers. Especially in smart homes, budget jumps rarely come from “smart” itself, but from the number of circuits, special functions, integrations, and installation effort."}),`
`,e.jsx(n.p,{children:"Unlike fixed-price packages, with a custom solution you pay only for what you truly need. The costs are divided into:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hardware"})," (e.g., the Opta controller & sensors – you buy directly)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Electrical installation"})," (your local electrician)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"System architecture & software"})," (I can handle this)"]}),`
`]}),`
`,e.jsx(n.h2,{children:"4] My offer"}),`
`,e.jsx(n.p,{children:"Are you interested in a custom solution, do you have questions, or do you want to retrofit? I am happy to advise you in a free and non-binding initial consultation."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://termin.jle.systems",children:e.jsx(n.strong,{children:"Book an appointment"})})," — your preferred time without waiting"]}),`
`]}),`
`,e.jsx(n.p,{children:"Would you rather contact me via email or WhatsApp?"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/contact",children:e.jsx(n.strong,{children:"Contact"})})," — all contact options"]}),`
`]})]})}function c(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default,l as images};
