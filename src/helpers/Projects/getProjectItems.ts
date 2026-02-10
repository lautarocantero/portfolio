import type { ProjectItemInterface } from "../../typings/types"
import { getStackList } from "../Stack/getStackList"

export const getProjectItems = (): ProjectItemInterface[] => {
    return [
      {
        _id: "proj-kiosco-app",
        gallery_urls: [
          "public/images/projects/kiosco/kiosco_login_dark.png",
          "public/images/projects/kiosco/kiosco_cart.png",
          "public/images/projects/kiosco/kiosco_header.png",
          "public/images/projects/kiosco/kiosco_login_white.png",
          "public/images/projects/kiosco/kiosco_product_dialog.png",
          "public/images/projects/kiosco/kiosco_products_.png",
          "public/images/projects/kiosco/kiosco_ticket.png"
        ],
        title: "projects.kiosco.title",
        stack: [
          {
            step: "Planteamiento inicial",
            description: "projects.kiosco.stack.planteamiento",
            stack: getStackList(["Figma"])
          },
          {
            step: "Creación del proyecto",
            description: "projects.kiosco.stack.creacion",
            stack: getStackList(["Git"])
          },
          {
            step: "Desarrollo Backend",
            description: "projects.kiosco.stack.backend",
            stack: getStackList(["Node.js"])
          },
          {
            step: "Desarrollo Frontend",
            description: "projects.kiosco.stack.frontend",
            stack: getStackList([
              "HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Redux"
            ])
          },
          {
            step: "Testing y QA",
            description: "projects.kiosco.stack.testing",
            stack: getStackList(["Jest"])
          }
        ],
        short_description: "projects.kiosco.description",
        long_description: {
          title: "projects.kiosco.title",
          objective: "projects.kiosco.long.objective",
          objectiveDev: "projects.kiosco.long.objectiveDev",
          note: "projects.kiosco.long.note",
          tasksDescription: "projects.kiosco.long.tasksDescription",
          technologiesDescription: "projects.kiosco.long.technologiesDescription",
          benefits: [
            {
              title: "projects.kiosco.benefit.products",
              desc: "projects.kiosco.benefit.products.desc",
              logo: "/icons/product-svgrepo-com.svg"
            },
            {
              title: "projects.kiosco.benefit.sales",
              desc: "projects.kiosco.benefit.sales.desc",
              logo: "/icons/money-svgrepo-com (1).svg"
            },
            {
              title: "projects.kiosco.benefit.inventory",
              desc: "projects.kiosco.benefit.inventory.desc",
              logo: "/icons/stock-svgrepo-com (1).svg"
            },
            {
              title: "projects.kiosco.benefit.access",
              desc: "projects.kiosco.benefit.access.desc",
              logo: "/icons/device-phone-computer-svgrepo-com.svg"
            },
            {
              title: "projects.kiosco.benefit.ui",
              desc: "projects.kiosco.benefit.ui.desc",
              logo: "/icons/basic-ui-computer-17-svgrepo-com.svg"
            }
          ],
          reasons: [
            "projects.kiosco.reason.smallBusiness",
            "projects.kiosco.reason.saveTime",
            "projects.kiosco.reason.clearInfo",
            "projects.kiosco.reason.scalable"
          ],
          roadmap: [
            {
              title: "projects.kiosco.roadmap.design.title",
              desc: "projects.kiosco.roadmap.design.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/first-design-1.png",
                "/images/projects/kiosco/dev/first-design-2.png",
                "/images/projects/kiosco/dev/first-design-3.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.model.title",
              desc: "projects.kiosco.roadmap.model.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/database-1.png",
                "/images/projects/kiosco/dev/database-2.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.endpoints.title",
              desc: "projects.kiosco.roadmap.endpoints.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/first-endpoints-1.png",
                "/images/projects/kiosco/dev/first-endpoints-2.png",
                "/images/projects/kiosco/dev/first-endpoints-3.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.frontend.title",
              desc: "projects.kiosco.roadmap.frontend.desc",
              gallery_urls: [
                "/images/projects/kiosco/kiosco_header.png",
                "/images/projects/kiosco/kiosco_products_.png",
                "/images/projects/kiosco/kiosco_cart.png",
                "/images/projects/kiosco/kiosco_ticket.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.auth.title",
              desc: "projects.kiosco.roadmap.auth.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/Jwt-1.png",
                "/images/projects/kiosco/dev/Jwt-2.png",
                "/images/projects/kiosco/dev/Jwt-3.png",
                "/images/projects/kiosco/dev/Jwt-4.png",
                "/images/projects/kiosco/kiosco_login_dark.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.api.title",
              desc: "projects.kiosco.roadmap.api.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/Api-1.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.screens.title",
              desc: "projects.kiosco.roadmap.screens.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/Other-screens-1.png",
                "/images/projects/kiosco/dev/Other-screens-2.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.docs.title",
              desc: "projects.kiosco.roadmap.docs.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/Documentation-1.png",
                "/images/projects/kiosco/dev/Documentation-2.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.testing.title",
              desc: "projects.kiosco.roadmap.testing.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/Testing-1.png",
                "/images/projects/kiosco/dev/Testing-2.png"
              ]
            },
            {
              title: "projects.kiosco.roadmap.deploy.title",
              desc: "projects.kiosco.roadmap.deploy.desc",
              gallery_urls: [
                "/images/projects/kiosco/dev/Deploy-1.png"
              ]
            }
          ],
          project_url: "https://github.com/lautarocantero/KioscoApp/tree/main",
          design_url: "https://www.figma.com/site/6FSXyXcr6KnPZryIMJcvpT/Kiosco-App?node-id=0-1&p=f&t=DQAjdt0TelYNF8sS-0"
        },
        tasks: [
          {
            text: "TaskEnum.FixBrokenStyles",
            icon: "/icons/repair-svgrepo-com.svg",
            description: "experience.tennisApp.task.fixStyles"
          },
          {
            text: "TaskEnum.RestructureViews",
            icon: "/icons/eye-svgrepo-com.svg",
            description: "experience.tennisApp.task.restructureViews"
          },
          {
            text: "TaskEnum.FormValidation",
            icon: "/icons/design-validation-svgrepo-com.svg",
            description: "experience.tennisApp.task.formValidation"
          },
          {
            text: "TaskEnum.ComponentDocumentation",
            icon: "/icons/doc-svgrepo-com.svg",
            description: "experience.tennisApp.task.documentation"
          },
          {
            text: "TaskEnum.UseOfI18n",
            icon: "icons/lang-svgrepo-com.svg",
            description: "experience.tennisApp.task.i18n"
          },
          {
            text: "TaskEnum.EndpointCreation",
            icon: "/icons/link-alt-1-svgrepo-com.svg",
            description: "experience.tennisApp.task.endpoints"
          },
          {
            text: "TaskEnum.NavigationOptimization",
            icon: "/icons/time-quarter-past-svgrepo-com.svg",
            description: "experience.tennisApp.task.navigation"
          }
        ],
        inDevelopment: true,
      },
      // {
        // _id: "proj-market-ropa",
        // gallery_urls: [
          // "public/images/projects/clothes-market/market-ropa-index.png",
          // "public/images/projects/clothes-market/market-ropa-index-2.png",
          // "public/images/projects/clothes-market/market-ropa-index-3.png",
          // "public/images/projects/clothes-market/market-ropa-index-4.png"
        // ],
        // title: "Market de Ropa",
        // stack: [
          // {
            // step: "Diseño inicial",
            // description: "Se definió un estilo minimalista y moderno para la tienda.",
            // stack: getStackList(["Figma"])
          // },
          // {
            // step: "Configuración del proyecto",
            // description: "Se creó el repositorio y se organizó la estructura base.",
            // stack: getStackList(["Git"])
          // },
          // {
            // step: "Desarrollo Frontend",
            // description: "Se implementó la interfaz de usuario con componentes reutilizables.",
            // stack: getStackList(["HTML5", "CSS3", "JavaScript", "React", "TypeScript"])
          // },
          // {
            // step: "Integración Backend",
            // description: "Se conectó con un servicio simulado para gestionar productos y compras.",
            // stack: getStackList(["Node.js"])
          // },
          // {
            // step: "Testing",
            // description: "Se realizaron pruebas unitarias y de integración.",
            // stack: getStackList(["Jest"])
          // }
        // ],
        // short_description: "Tienda online minimalista para comprar ropa.",
        // long_description: {
          // title: "Market de Ropa",
          // objective: "Ofrecer una experiencia simple y clara para comprar ropa online.",
          // objectiveDev: "Desarrollar una aplicación escalable con un diseño limpio y adaptable.",
          // note: "El proyecto se centra en la experiencia del usuario y la facilidad de navegación.",
          // tasksDescription: "Incluye tareas de diseño, desarrollo frontend, integración backend y pruebas.",
          // technologiesDescription: "Se utilizaron tecnologías modernas para garantizar rendimiento y mantenibilidad.",
          // benefits: [
            // {
              // title: "Catálogo amplio",
              // desc: "Acceso a una gran variedad de productos de ropa.",
              // logo: "/icons/product-svgrepo-com.svg"
            // },
            // {
              // title: "Compras rápidas",
              // desc: "Proceso de compra optimizado y sencillo.",
              // logo: "/icons/money-svgrepo-com (1).svg"
            // },
            // {
              // title: "Gestión de stock",
              // desc: "Control básico de inventario para productos disponibles.",
              // logo: "/icons/stock-svgrepo-com (1).svg"
            // },
            // {
              // title: "Acceso multiplataforma",
              // desc: "Disponible en dispositivos móviles y escritorio.",
              // logo: "/icons/device-phone-computer-svgrepo-com.svg"
            // },
            // {
              // title: "Interfaz amigable",
              // desc: "Diseño minimalista y fácil de usar.",
              // logo: "/icons/basic-ui-computer-17-svgrepo-com.svg"
            // }
          // ],
          // reasons: [
            // "Facilitar compras online",
            // "Ahorrar tiempo",
            // "Ofrecer información clara",
            // "Escalabilidad futura"
          // ],
          // roadmap: [
            // {
              // title: "Diseño de la tienda",
              // desc: "Se definieron los primeros bocetos y wireframes.",
              // gallery_urls: [
                // "/images/projects/clothes-market/dev/design-1.png",
                // "/images/projects/clothes-market/dev/design-2.png"
              // ]
            // },
            // {
              // title: "Modelado de datos",
              // desc: "Se diseñó la estructura de productos y usuarios.",
              // gallery_urls: [
                // "/images/projects/clothes-market/dev/database-1.png"
              // ]
            // },
            // {
              // title: "Endpoints básicos",
              // desc: "Se implementaron endpoints para productos y compras.",
              // gallery_urls: [
                // "/images/projects/clothes-market/dev/endpoints-1.png"
              // ]
            // },
            // {
              // title: "Frontend",
              // desc: "Se desarrollaron las pantallas principales de la tienda.",
              // gallery_urls: [
                // "public/images/projects/clothes-market/market-ropa-index.png",
                // "public/images/projects/clothes-market/market-ropa-index-2.png"
              // ]
            // },
            // {
              // title: "Autenticación",
              // desc: "Se agregó login básico con JWT.",
              // gallery_urls: [
                // "/images/projects/clothes-market/dev/auth-1.png"
              // ]
            // },
            // {
              // title: "Documentación",
              // desc: "Se redactó documentación técnica y de usuario.",
              // gallery_urls: [
                // "/images/projects/clothes-market/dev/docs-1.png"
              // ]
            // },
            // {
              // title: "Testing",
              // desc: "Se realizaron pruebas unitarias y de integración.",
              // gallery_urls: [
                // "/images/projects/clothes-market/dev/testing-1.png"
              // ]
            // },
            // {
              // title: "Deploy",
              // desc: "Se desplegó en Netlify para acceso público.",
              // gallery_urls: [
                // "/images/projects/clothes-market/dev/deploy-1.png"
              // ]
            // }
          // ],
          // project_url: "https://market-lau.netlify.app/index.html",
          // design_url: "https://www.figma.com/file/market-ropa-design"
        // },
        // tasks: [
          // {
            // text: "TaskEnum.FixBrokenStyles",
            // icon: "/icons/repair-svgrepo-com.svg",
            // description: "Corrección de estilos rotos en la interfaz."
          // },
          // {
            // text: "TaskEnum.RestructureViews",
            // icon: "/icons/eye-svgrepo-com.svg",
            // description: "Reestructuración de vistas para mejorar la navegación."
          // },
          // {
            // text: "TaskEnum.FormValidation",
            // icon: "/icons/design-validation-svgrepo-com.svg",
            // description: "Validación de formularios de compra y login."
          // },
          // {
            // text: "TaskEnum.ComponentDocumentation",
            // icon: "/icons/doc-svgrepo-com.svg",
            // description: "Documentación de componentes reutilizables."
          // },
          // {
            // text: "TaskEnum.UseOfI18n",
            // icon: "icons/lang-svgrepo-com.svg",
            // description: "Implementación de soporte multilenguaje."
          // },
          // {
            // text: "TaskEnum.EndpointCreation",
            // icon: "/icons/link-alt-1-svgrepo-com.svg",
            // description: "Creación de endpoints para productos y usuarios."
          // },
          // {
            // text: "TaskEnum.NavigationOptimization",
            // icon: "/icons/time-quarter-past-svgrepo-com.svg",
            // description: "Optimización de la navegación entre pantallas."
          // }
        // ],
        // inDevelopment: false
      // },
      // _id: 'proj-market-ropa',
      // gallery_urls: [
          // 'public/images/projects/clothes-market/market-ropa-index.png',
          // 'public/images/projects/clothes-market/market-ropa-index-2.png',
          // 'public/images/projects/clothes-market/market-ropa-index-3.png',
          // 'public/images/projects/clothes-market/market-ropa-index-4.png',
      // ],
      // title: 'Market de Ropa',
      // stack: getStackList([ "HTML5", "CSS3", "JavaScript", "React" ,"TypeScript" ]),
      // short_description: "Tienda online minimalista para comprar ropa.",
      // long_description: "Este proyecto presenta una tienda para poder comprar ropa online, seleccionando de un amplio catálogo con estilo minimalista, donde podés elegir el tamaño y la cantidad del producto que desees. Incluye página general de la tienda, apartado de nosotros y página de compra de producto.",
      // project_url: "https://market-lau.netlify.app/index.html"
  // },
  // {
      // _id: 'proj-upgrade',
      // gallery_urls: [
          // 'public/images/projects/tech-market/upgrade-index.png',
          // 'public/images/projects/tech-market/upgrade-index-2.png',
          // 'public/images/projects/tech-market/upgrade-index-3.png',
          // 'public/images/projects/tech-market/upgrade-index-4.png',
      // ],
      // title: 'Upgrade',
      // stack: getStackList([ "HTML5", "CSS3", "JavaScript", "C#" ]),
      // short_description: "E-commerce de productos electrónicos.",
      // long_description: "Página de compra de productos electrónicos, con carrito que se actualiza en tiempo real.",
      // project_url: "https://upgrade-lau.netlify.app/"
  // },
  // {
      // _id: 'proj-festival-musical',
      // gallery_urls: [
          // 'public/images/projects/festival/festival-index.png',
          // 'public/images/projects/festival/festival-index-2.png',
          // 'public/images/projects/festival/festival-index-3.png',
          // 'public/images/projects/festival/festival-index-4.png',
      // ],
      // title: 'Festival Musical',
      // stack: getStackList([ "HTML5", "JavaScript", "Sass" ]),
      // short_description: "Página web sobre un festival musical.",
      // long_description: `Una página web sobre un Festival Musical con toda la información del evento. 
      // Cuenta con galería responsive. Es el primer proyecto en el que utilicé Gulp y Sass.`,
      // project_url: "https://festival-musical-lau.netlify.app"
  // },
  // {
      // _id: 'proj-blog-cafe',
      // gallery_urls: [
          // 'public/images/projects/coffe/blog-cafe-index.png',
          // 'public/images/projects/coffe/blog-cafe-index-2.png',
          // 'public/images/projects/coffe/blog-cafe-index-3.png',
          // 'public/images/projects/coffe/blog-cafe-index-4.png',
      // ],
      // title: 'Blog de Café',
      // stack: getStackList([ "HTML5", "CSS3", "JavaScript" ]),
      // short_description: "Blog con cursos y recetas de café.",
      // long_description: "Proyecto de un Blog de Café, con cursos de recetas y un blog con diferentes entradas, además de una página de contacto.",
      // project_url: "https://blog-cafe-lau.netlify.app"
  // },
  // {
      // _id: 'proj-barberia',
      // gallery_urls: [
          // 'public/images/projects/barb/barberia-index.png',
          // 'public/images/projects/barb/barberia-index-2.png',
          // 'public/images/projects/barb/barberia-index-3.png',
          // 'public/images/projects/barb/barberia-index-4.png',
      // ],
      // title: 'Barbería',
      // stack: getStackList([ "HTML5", "JavaScript", "Sass", "PHP" ]),
      // short_description: "Catálogo de cortes y servicios de barbería.",
      // long_description: "Página web en donde podés seleccionar de un catálogo de cortes tu favorito y acceder a los servicios luego de llenar los campos. Desarrollada con Gulp, Sass y JavaScript.",
      // project_url: "https://barberia-lau.netlify.app"
  // },
    ]
}
