import type { ProjectItemInterface } from "../../typings/types"
import { TaskEnum } from "../../typings/types/enums"
import { getStackList } from "../Stack/getStackList"

export const getProjectItems = (): ProjectItemInterface[] => {
    return [
        {
          _id: 'proj-kiosco-app',
          gallery_urls: [
            'public/images/projects/kiosco/kiosco_login_dark.png',
            'public/images/projects/kiosco/kiosco_cart.png',
            'public/images/projects/kiosco/kiosco_header.png',
            'public/images/projects/kiosco/kiosco_login_white.png',
            'public/images/projects/kiosco/kiosco_product_dialog.png',
            'public/images/projects/kiosco/kiosco_products_.png',
            'public/images/projects/kiosco/kiosco_ticket.png',
          ],
          title: 'projects.kiosco.title',
          stack: getStackList([
            "HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Jest", 
            "Node.js", "Git", "Figma", "Redux"
          ]),
          short_description: "projects.kiosco.description",
          long_description: {
            objective: "Facilitar la gestión de productos, ventas e inventario en pequeños negocios y tiendas de abarrotes mediante una aplicación web simple y responsive, complementada con un backend robusto para autenticación y operaciones.",
            tasksDescription: "El sistema permitirá registrar y listar productos, controlar ventas diarias, gestionar inventario básico y, en futuras versiones, generar reportes y estadísticas. El backend provee una API RESTful para autenticación, gestión de vendedores, productos, proveedores y ventas, con validación de datos, hash de contraseñas y tokens JWT. Actualmente se encuentra en fase inicial, con arquitectura y primeras funcionalidades en construcción. El roadmap incluye integración con bases de datos (Firebase, Supabase o MongoDB), testing de endpoints y reportes avanzados.",
            technologiesDescription: "El frontend está desarrollado con React, TypeScript y MUI, siguiendo los principios de Screaming Architecture. El backend utiliza Node.js, Express y TypeScript, junto con bcrypt para seguridad, db-local como base de datos de desarrollo y JWT para autenticación. La estructura se organiza en torno al dominio (ventas, productos, inventario, usuarios) y no a las tecnologías, garantizando claridad y escalabilidad."
          },
          tasks: [
            {
              text: TaskEnum.FixBrokenStyles,
              icon: "/icons/repair-svgrepo-com.svg",
              description: "experience.tennisApp.task.fixStyles",
            },
            {
              text: TaskEnum.RestructureViews,
              icon: "/icons/eye-svgrepo-com.svg",
              description: "experience.tennisApp.task.restructureViews",
            },
            {
              text: TaskEnum.FormValidation,
              icon: "/icons/design-validation-svgrepo-com.svg",
              description: "experience.tennisApp.task.formValidation",
            },
            {
              text: TaskEnum.ComponentDocumentation,
              icon: "/icons/doc-svgrepo-com.svg",
              description: "experience.tennisApp.task.documentation",
            },
            {
              text: TaskEnum.UseOfI18n,
              icon: "icons/lang-svgrepo-com.svg",
              description: "experience.tennisApp.task.i18n",
            },
            {
              text: TaskEnum.EndpointCreation,
              icon: "/icons/link-alt-1-svgrepo-com.svg",
              description: "experience.tennisApp.task.endpoints",
            },
            {
              text: TaskEnum.NavigationOptimization,
              icon: "/icons/time-quarter-past-svgrepo-com.svg",
              description: "experience.tennisApp.task.navigation",
            },
          ],
          project_url: "https://github.com/lautarocantero/KioscoApp/tree/main",
        },
        // {
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
