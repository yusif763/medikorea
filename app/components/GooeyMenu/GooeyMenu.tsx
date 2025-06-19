'use client';
import { useEffect, useRef } from 'react';
import { gsap, Power0, Linear } from 'gsap';
import './GooeyMenu.css'

const center = { x: 325, y: 175 };
const serv_dist = 250;
const pointer_dist = 172;
const pointer_time = 2;
const icon_size = 42;
const circle_radius = 38;
const text_top_margin = 18;
const tspan_delta = 16;

const services_data = [
  { name: "Industries", icon: "industries" },
  { name: "Validation\n(C&Q and CSV)", icon: "validation" },
  { name: "Engineering", icon: "engineering" },
  { name: "Project\nManagement", icon: "management" },
  { name: "Manufacturing\nIT", icon: "manufacturing" },
  { name: "Technical\nServices", icon: "technical" },
  { name: "Process\nAutomation", icon: "process" }
];

export default function CircleNav() {
  const servicesRef = useRef<SVGGElement | null>(null);
  const navContainerRef = useRef<SVGSVGElement | null>(null);
  const symbolCopyRef = useRef<SVGSymbolElement | null>(null);
  const useCopyRef = useRef<SVGUseElement | null>(null);
  const twnPointerPathRef = useRef<any>(null);

  useEffect(() => {
    // Helper function to create SVG elements
    const createSVGElement = (el: string) => document.createElementNS("http://www.w3.org/2000/svg", el);

    // Helper function to set multiple attributes
    const setAttributes = (el: Element, options: Record<string, string | number>) => {
      Object.keys(options).forEach((attr) => el.setAttribute(attr, String(options[attr])));
    };

    // Function to add service bubbles dynamically
    const addService = (serv: { name: string; icon: string }, index: number) => {
      let group = createSVGElement("g");
      group.setAttribute("class", `service serv-${index}`);

      let icon_group = createSVGElement("g");
      icon_group.setAttribute("class", "icon-wrapper");
      icon_group.setAttribute("style", "transform-origin: center center;"); // Set transform-origin explicitly

      let circle = createSVGElement("circle");
      setAttributes(circle, {
        r: circle_radius,
        cx: center.x,
        cy: center.y
      });
      let circle_shadow = circle.cloneNode();
      setAttributes(circle_shadow as Element, { class: 'shadow' });
      icon_group.appendChild(circle_shadow);
      icon_group.appendChild(circle);

      let symbol = createSVGElement("use");
      setAttributes(symbol, {
        'x': center.x - icon_size / 2,
        'y': center.y - icon_size / 2,
        'width': icon_size,
        'height': icon_size,
        'xlink:href': `#${serv.icon}`
      });
      icon_group.appendChild(symbol);

      group.appendChild(icon_group);

      let text = createSVGElement("text");
      setAttributes(text, {
        x: center.x,
        y: center.y + circle_radius + text_top_margin
      });

      let tspan = createSVGElement("tspan");
      if (serv.name.includes('\n')) {
        let [line1, line2] = serv.name.split('\n');
        tspan.textContent = line1;

        let tspan2 = createSVGElement("tspan");
        tspan2.textContent = line2;
        setAttributes(tspan2, {
          x: center.x,
          dy: tspan_delta
        });
        text.appendChild(tspan2);
      } else {
        tspan.textContent = serv.name;
      }
      text.appendChild(tspan);

      group.appendChild(text);
      servicesRef.current?.appendChild(group);

      // Set initial position using GSAP
      twn_pivot_path.seek(index);
      gsap.set(group, {
        x: pivot_path.x,
        y: pivot_path.y,
        transformOrigin: "center center"
      });

      // Add click event listener
      group.addEventListener("click", serviceClick);
    };

    // Function to create pointer
    const createPointer = () => {
      let service_pointer = createSVGElement("circle");
      setAttributes(service_pointer, {
        cx: center.x - pointer_dist,
        cy: center.y,
        r: 12,
        class: "pointer"
      });
      navContainerRef.current?.appendChild(service_pointer);

      let pointer_circle = [
        { x: 0, y: 0 },
        { x: pointer_dist, y: pointer_dist },
        { x: pointer_dist * 2, y: 0 },
        { x: pointer_dist, y: -pointer_dist },
        { x: 0, y: 0 }
      ];

      twnPointerPathRef.current = gsap.timeline({ paused: true });
      twnPointerPathRef.current.to(service_pointer, {
        duration: pointer_time,
        motionPath: {
          path: pointer_circle,
          curviness: 1.5
        },
        ease: Power0.easeNone,
        transformOrigin: "center center"
      });
    };

    // Function to handle service bubble clicks
    const serviceClick = (ev: Event) => {
      const current = ev.currentTarget as SVGGElement;
      servicesRef.current?.querySelectorAll(".service.active").forEach((el) => el.classList.remove("active"));
      current.classList.add("active");

      const currentClass = current.getAttribute("class")?.split(" ")[1];
      const classIndex = currentClass?.split('-')[1];

      useCopyRef.current?.classList.add("changing");

      twnPointerPathRef.current.tweenTo(Number(classIndex) * (pointer_time / (2 * 6)));

      setTimeout(() => {
        const viewBoxY = 300 * Number(classIndex);
        symbolCopyRef.current?.setAttribute("viewBox", `0 ${viewBoxY} 300 300`);
        useCopyRef.current?.classList.remove("changing");
      }, 250);
    };

    // Animation setup
    let half_circle = [
      { x: -serv_dist, y: 0 },
      { x: 0, y: serv_dist },
      { x: serv_dist, y: 0 },
      { x: 0, y: -serv_dist },
      { x: -serv_dist, y: 0 }
    ];

    let pivot_path = { x: half_circle[0].x, y: half_circle[0].y };
    let twn_pivot_path = gsap.to(pivot_path, {
      duration: 12,
      bezier: {
        values: half_circle,
        curviness: 1.5
      },
      ease: Linear.easeNone
    });

    // Add services
    services_data.forEach((serv, index) => addService(serv, index));

    // Create pointer
    createPointer();

    // Set initial active service
    setTimeout(() => {
      const firstService = servicesRef.current?.querySelector(".serv-0");
      firstService?.classList.add("active");
    }, 200);

    // Cleanup on unmount
    return () => {
      servicesRef.current?.querySelectorAll(".service").forEach((el) => {
        el.removeEventListener("click", serviceClick);
      });
    };
  }, []);

  return (
    <>
      <div className="container">
        <svg id="circle-nav-services" width="100%" height="100%" viewBox="0 0 650 550" ref={navContainerRef}>
          <defs>
            <filter id="service-shadow" height="2" width="2" y="-.5" x="-.5">
              <feOffset result="offOut" in="SourceGraphic" dx="0" dy="5" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="12" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
            <style>
              {`
                .cls-1 { font-size: 28px; font-family: Roboto-Bold, Roboto; font-weight: 700; }
                .cls-2 { letter-spacing: -0.02em; }
                .cls-3 { letter-spacing: -0.01em; }
                .cls-4 { letter-spacing: -0.01em; }
                .cls-5 { font-size: 16px; font-family: Roboto-Regular, Roboto; }
                .cls-6 { letter-spacing: -0.01em; }
                .cls-7 { letter-spacing: -0.01em; }
                .cls-8 { letter-spacing: -0.02em; }
                .cls-9 { letter-spacing: -0.01em; }
                .cls-10 { letter-spacing: 0.01em; }
                .cls-11 { letter-spacing: -0.01em; }
                .cls-12 { letter-spacing: -0.04em; }
                .cls-13 { letter-spacing: -0.02em; }
                .cls-14 { letter-spacing: 0.01em; }
                .cls-15 { letter-spacing: -0.01em; }
                .cls-16 { letter-spacing: -0.06em; }
                .cls-17 { letter-spacing: -0.02em; }
                .cls-18 { letter-spacing: 0.01em; }
                .cls-19 { letter-spacing: 0.02em; }
                .cls-20 { letter-spacing: -0.01em; }
                .cls-21 { letter-spacing: -0.03em; }
              `}
            </style>
          </defs>
          <symbol id="circle-nav-copy" viewBox="0 0 300 300" ref={symbolCopyRef}>
            <title>Artboard 1</title>
            <text className="cls-1" transform="translate(99 1865)">
              P<tspan className="cls-2">r</tspan>ocess<tspan className="cls-3">A</tspan>u<tspan className="cls-4">t</tspan>omation
            </text>
            <text className="cls-5" transform="translate(57 1930)">
              Our p<tspan className="cls-6">r</tspan>ocess and Industrial <tspan className="cls-3">A</tspan>u<tspan className="cls-6">t</tspan>omation personnel a
              <tspan className="cls-7">r</tspan>e <tspan>t</tspan><tspan className="cls-8">r</tspan>ained <tspan className="cls-6">t</tspan>o of
              <tspan className="cls-9">f</tspan>er a b<tspan className="cls-6">r</tspan>oad <tspan>scope of se</tspan><tspan className="cls-10">r</tspan>vices 
              <tspan className="cls-6">t</tspan>o meet or <tspan>e</tspan><tspan className="cls-6">x</tspan>ceed <tspan className="cls-11">y</tspan>our p
              <tspan className="cls-6">r</tspan>oject goals.
            </text>
            <text className="cls-1" transform="translate(89 1566)">
              <tspan className="cls-12">T</tspan>echnical<tspan>Se</tspan><tspan className="cls-10">r</tspan>vices
            </text>
            <text className="cls-5" transform="translate(47 1636)">
              <tspan className="cls-13">W</tspan>e ensu<tspan className="cls-7">r</tspan>e that <tspan className="cls-11">y</tspan>our p
              <tspan className="cls-6">r</tspan>ocess, <tspan>manufacturing, packaging </tspan>
              <tspan>equipment, facility and utilities </tspan>
              <tspan>pe</tspan><tspan className="cls-14">r</tspan>form as the intended design.
            </text>
            <text className="cls-1" transform="translate(105 966)">
              P<tspan className="cls-2">r</tspan>oject<tspan>Management</tspan>
            </text>
            <text className="cls-5" transform="translate(65 1037)">
              <tspan className="cls-13">W</tspan>e help <tspan className="cls-11">y</tspan>our ope
              <tspan className="cls-8">r</tspan>ations <tspan>complete their p</tspan><tspan className="cls-6">r</tspan>oject on time, 
              <tspan>under budget and meeting </tspan><tspan>100% of the </tspan><tspan className="cls-7">r</tspan>equi
              <tspan className="cls-7">r</tspan>ements.
            </text>
            <text className="cls-1" transform="translate(75 666)">Engineering</text>
            <text className="cls-5" transform="translate(83 710)">
              Cost<tspan className="cls-7">r</tspan>eduction and <tspan>p</tspan><tspan className="cls-6">r</tspan>oductivity enhancement.
              <tspan>Principia engineers h</tspan><tspan className="cls-11">a</tspan><tspan className="cls-15">v</tspan>e 
              <tspan>hands-on experience in </tspan><tspan>driving successful Ene</tspan><tspan className="cls-7">r</tspan>gy 
              <tspan>Management P</tspan><tspan className="cls-6">r</tspan>og<tspan className="cls-8">r</tspan>ams.
            </text>
            <text className="cls-1" transform="translate(87 65)">Industries</text>
            <text className="cls-5" transform="translate(63 108)">
              Our highly skilled staff is<tspan>disciplined </tspan><tspan className="cls-6">t</tspan>o work within a 
              <tspan className="cls-8">r</tspan>ange of industries in the <tspan>dynamic Li</tspan><tspan className="cls-9">f</tspan>e Sciences sec
              <tspan className="cls-6">t</tspan>o<tspan className="cls-16">r</tspan>, <tspan className="cls-6">t</tspan>o meet demanding and 
              <tspan className="cls-15">e</tspan><tspan className="cls-11">v</tspan>olving expectations.
            </text>
            <text className="cls-1" transform="translate(87 365)">
              <tspan className="cls-17">V</tspan>alidation<tspan>(Q&C and CS</tspan><tspan className="cls-18">V</tspan>)
            </text>
            <text className="cls-5" transform="translate(46 437)">
              As pa<tspan className="cls-19">r</tspan>t of our wide expe<tspan className="cls-19">r</tspan>tise, 
              <tspan>we p</tspan><tspan className="cls-6">r</tspan><tspan className="cls-11">o</tspan>vide Commissioning & 
              <tspan>Qualification and Computer </tspan><tspan>System </tspan><tspan className="cls-17">V</tspan>alidation Solutions.
            </text>
            <text className="cls-1" transform="translate(138 1266)">
              <tspan className="cls-20">I<tspan className="cls-21">T</tspan></tspan><tspan>Manufacturing</tspan>
            </text>
            <text className="cls-5" transform="translate(47 1323)">
              Our Manufacturing E<tspan className="cls-6">x</tspan>ecution <tspan>Systems comprise </tspan>
              <tspan>applications that connect the </tspan><tspan className="cls-7">r</tspan>eal-time data originated at the 
              <tspan>shop floor with the enterprise </tspan><tspan>l</tspan><tspan className="cls-15">ev</tspan>el applications.
            </text>
          </symbol>
          <svg x="150" y="0" width="350" height="350" viewBox="0 0 500 500">
            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="250.2542" y1="496.283" x2="250.2542" y2="-.2102">
              <stop offset="0" stopColor="#0F68A9" />
              <stop offset="1" stopColor="#3DDEED" stopOpacity="0" />
            </linearGradient>
            <path fill="url(#a)" d="M250.3 0c137 0 248.1 111.1 248.1 248.1S387.3 496.2 250.3 496.2 2.2 385.1 2.2 248.1 113.2 0 250.3 0C112.5 0 .8 111.7.8 249.5S112.5 499 250.3 499s249.5-111.7 249.5-249.5S388 0 250.3 0z"/>
          </svg>
          <g id="service-collection" ref={servicesRef}></g>
          <circle cx="325" cy="170" r="140" className="center" />
          <use x="185" y="30" width="280" height="280" xlinkHref="#circle-nav-copy" className="nav-copy" ref={useCopyRef} />
          <rect data-url="/industries" id="learn-more" x="280" y="250" width="90" height="30" />
          <text x="290" y="270" className="learn-more-text">Learn more</text>
        </svg>
      </div>
    </>
  );
}