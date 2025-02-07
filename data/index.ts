import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projectos", link: "#projects" },
  { name: "Testemunhos", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo ​​a colaboração do cliente, promovendo a comunicação aberta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Sou muito flexível com comunicações na questao de problemas",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minha pilha de tecnologia",
    description: "Eu constantemente tento Evoluir",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de tecnologia e apaixonado por desenvolvimento.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

 
  {
    id: 6,
    title: "Quer iniciar um projeto comigo?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Medicine Tracker app",
    des: "Cadastrar e controlar sua medicacao diaria com notificacao.",
    img: "/consult.png",
    iconLists: ["/re.svg",  "/ts.svg", ],
    link: "",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplifique sua experiência de videoconferência com Yoom. Conecte-se perfeitamente com colegas e amigos.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "Um aplicativo REAL de software como serviço com recursos de IA e um sistema de pagamentos e créditos usando a mais recente tecnologia.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  
];

export const testimonials = [
  {
    quote:
      "Colaborar com Samir foi um prazer absoluto. Seu profissionalismo, presteza e dedicação na entrega de resultados excepcionais ficaram evidentes ao longo do nosso projeto. O entusiasmo de Samir por cada faceta do desenvolvimento realmente se destaca. Se você busca elevar seu site e sua marca, Samir é o parceiro ideal.",
    name: "Sergio Cardoso",
    title: "Director da MassicateService",
  },
  
];

export const companies = [
  
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  
];

export const workExperience = [
  {
    id: 1,
    title: "Desenvolver Frontend",
    desc: "Programei alguns sites para pequenos clientes usando nextjs",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Desenvolvi o Medicine tracker e o UberClone",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
 
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",

  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://twitter.com"
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
