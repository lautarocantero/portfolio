import type { ExperienceItemInterface } from "../../typings/types"
import { TaskEnum } from "../../typings/types/enums"
import { getStackList } from "../Stack/getStackList"

export const getExperienceItems = (): ExperienceItemInterface[] => {
    return [
        // {
        //     _id: '74ga9c2d98h1e6f0c5d7a900',
        //     title: 'Extensión de Youtube',
        //     gallery_urls: [
        //         '/images/experience/monitor.png',
        //         '/images/experience/monitor2.png',
        //         '/images/experience/smartphone-and-mobile-phone-free-png-385773423.png',
        //     ],
        //     stack: getStackList([ "HTML5", "CSS3", "React", "TypeScript", "Tailwind", "JavaScript", ]),
        //     short_description: "Extensión de YouTube que mejora la experiencia de escritorio proporcionando control detallado y características útiles sobre la interfaz existente.",
        //     long_description: "Plataforma de hotelería creada utilizando React y TypeScript, sostenida con diseños en Bootstrap y manejo de estados en Redux.",
        // },
        {
          _id: '7f3a9c2d84b1e6f0c5d7a913',
          title: 'Aplicación de Tenis',
          gallery_urls: [
              '/images/experience/vilo/tenis/laptop-cards.png',
              '/images/experience/vilo/tenis/laptop-login.png',
              '/images/experience/vilo/tenis/tablet-login.png',
              '/images/experience/vilo/tenis/phone-cards.png',
              '/images/experience/vilo/tenis/phone-icons.png',
              '/images/experience/vilo/tenis/phone-login.png',
              '/images/experience/vilo/tenis/code-sample.png',
          ],
          short_description: "Aplicación de tenis pensada para todos los niveles de habilidad, para contactar con entrenadores y reservar clases.",
          long_description: {
            objective: 
                `Plataforma accesible, clara y organizada, diseñada para que jugadores principiantes, 
                intermedios y avanzados pudieran encontrar entrenadores adecuados y gestionar sus clases de manera sencilla. 
                La propuesta contempla dos perfiles principales: por un lado, los usuarios amateurs, quienes pueden registrarse para acceder a 
                clases con profesionales que ofrecen flexibilidad horaria y metodologías adaptadas a todos los niveles de habilidad; por otro lado, 
                los profesionales o mentores, quienes tienen la posibilidad de inscribirse para guiar a jugadores novatos.`,
            tasksDescription: "En mi participación en el desarrollo, me enfoqué en mejorar tanto la experiencia visual como la funcionalidad técnica del sistema",
            technologiesDescription: "El proyecto fue desarrollado utilizando React, TypeScript y SASS en el frontend, donde implementé la mayor parte de mi tiempo, mientras que en el backend se utilizó MongoDB para la persistencia y consulta de datos, creación de endpoints y lógica de negocio.",
          },
          stack: getStackList([ "HTML5", "CSS3", "React", "TypeScript", "Sass", "MongoDB",  "Git"]),
          tasks: [
            { 
              text: TaskEnum.CorreccionEstilosRotos, 
              icon: "/icons/repair-svgrepo-com.svg", 
              description: "Corregí inconsistencias visuales o componentes rotos, siempre garantizando una interfaz uniforme y responsiva." 
            },
            { 
              text: TaskEnum.ReestructuracionVistas, 
              icon: "/icons/eye-svgrepo-com.svg", 
              description: `Reorganicé las vistas de diferentes secciones, debido a que el proyecto en etapas tempranas necesitaba que se le aplicaran
                  las vistas finales de diseño, me encargué de aplicar las plantillas proporcionadas, asegurando que estas fueran responsivas, accesibles y 
                  cumplieran las demandas del cliente.` 
            },
            { 
              text: TaskEnum.ValidacionFormularios, 
              icon: "/icons/design-validation-svgrepo-com.svg", 
              description: "Implementé validaciones en formularios para asegurar la integridad de los datos ingresados como campos obligatorios y condiciones específicas." 
            },
            { 
              text: TaskEnum.DocumentacionComponentes, 
              icon: "/icons/doc-svgrepo-com.svg", 
              description: `Creé documentación clara y accesible para cada componente, mejorando la comprensión y el onboarding. Especialmente útil debido a que los archivos
              podían llegar a ser verdaderamente extensos. Creando una sección de Docs me encargué de dejar detalle de cada componente, sus propiedades y ejemplos de uso, tanto en español como en inglés.` 
            },
            {
              text: TaskEnum.UtilizacionI18n,
              icon: "icons/lang-svgrepo-com.svg",
              description: `Utilicé i18n en mis funciones y componentes para soportar múltiples idiomas y mejorar la experiencia de usuarios internacionales. Principalmente en español e inglés.`
            },
            { 
              text: TaskEnum.CreacionEndpoints, 
              icon: "/icons/link-alt-1-svgrepo-com.svg", 
              description: "Desarrollé endpoints en el backend para conectar funcionalidades con la base de datos y ser integradas para su consumo en el frontend." 
            },
            { 
              text: TaskEnum.OptimizacionNavegacion, 
              icon: "/icons/time-quarter-past-svgrepo-com.svg", 
              description: "Optimicé la navegación interna para reducir tiempos de carga y mejorar la fluidez de uso. Utilizando técnicas como lazy loading y memorización de componentes y funciones." 
            },
          ],
        },
        {
          _id: '65a6f3c9d2b47e1a9c4f8b12',
          title: 'Plataforma de Hotelería',
          gallery_urls: [
            '/images/experience/codetria/hotel/laptop-login.png',
            '/images/experience/codetria/hotel/laptop-table-users.png',
            '/images/experience/codetria/hotel/tablet-form.png',
            '/images/experience/codetria/hotel/phone-table-users.png',
          ],
          short_description: "Plataforma de hotelería para registrar usuarios, tener acceso a amenities, parking y reservar habitaciones.",
          long_description: { 
              objective: `Solución moderna y escalable para la administración de hoteles, facilitando tanto la experiencia de los usuarios como la eficiencia del personal.
                Una plataforma que brinda la posibilidad a los usuarios huéspedes de registrarse, gestionar sus reservas, acceder a servicios adicionales como amenities y parking,
                y comunicarse con el personal del hotel de manera eficiente. Por otro lado, el personal del hotel puede administrar las reservas, gestionar la disponibilidad de habitaciones,
                y ofrecer un servicio personalizado a los huéspedes a través de una interfaz intuitiva y fácil de usar.
              `,
              tasksDescription: "Durante este período, trabajé principalmente en el frontend, utilizando mis conocimientos en React y TypeScript para construir componentes reutilizables y optimizar la experiencia del usuario.",
              technologiesDescription: "El proyecto fue desarrollado utilizando React, TypeScript y Bootstrap en el frontend, con Redux para la gestión del estado, donde enfoqué mis esfuerzos. Se utilizó Axios para las solicitudes HTTP y Jest para las pruebas unitarias.",
          },
          stack: getStackList([ 
            "React", "TypeScript", "Bootstrap", "Redux", "HTML5",
            "CSS3", "JavaScript", "Jest", "Git",
          ]),
          "tasks": [
            { 
              text: TaskEnum.CorreccionEstilosRotos, 
              icon: "/icons/repair-svgrepo-com.svg", 
              description: "Corregí inconsistencias visuales o componentes rotos, siempre garantizando una interfaz uniforme y responsiva." 
            },
            {
              text: TaskEnum.CreacionNuevasRutas,
              icon: "/icons/landing-page-web-design-svgrepo-com.svg",
              description: `Creé nuevas rutas en el frontend a medida que la aplicación crecía, me encargué de crear rutas en las cuales poder incorporar CRUDs completos y funcionalidades nuevas.`
            },
            {
              text: TaskEnum.ImplementacionComponentes,
              icon: "/icons/puzzle-svgrepo-com.svg",
              description: `Implementé y creé componentes reutilizables siguiendo buenas prácticas de diseño y accesibilidad. Mayormente utilizando componentes de MUI Material.`
            },
            { 
              text: TaskEnum.ReestructuracionVistas, 
              icon: "/icons/eye-svgrepo-com.svg", 
              description: `Reorganicé las vistas de diferentes secciones, el proyecto contaba con multiples entornos para diferentes hoteles, 
              por lo que no todos mantenian la misma consistencia visual.` 
            },
            {
              text: TaskEnum.ImplementacionHooks,
              icon: "/icons/hook-svgrepo-com.svg",
              description: `Desarrollé hooks y helpers personalizados para encapsular lógica y mejorar la mantenibilidad.`
            },
            {
              text: TaskEnum.ValidacionFormularios,
              icon: "/icons/design-validation-svgrepo-com.svg",
              description: `Implementé validaciones en formularios para asegurar la integridad de los datos ingresados como campos obligatorios y condiciones específicas.
              Utilizando Formik y Yup para una gestión eficiente de formularios y validaciones.`
            },
            {
              text: TaskEnum.UtilizacionI18n,
              icon: "icons/lang-svgrepo-com.svg",
              description: `Utilicé i18n en mis funciones y componentes para soportar múltiples idiomas y mejorar la experiencia de usuarios internacionales. Principalmente en español e inglés.`
            },
            {
              text: TaskEnum.ImplementacionPruebasUnitarias,
              icon: "/icons/test-desktop-svgrepo-com.svg",
              description: `Añadí pruebas unitarias para garantizar la calidad y prevenir regresiones en el código. Utilizando Jest y React Testing Library.`
            },
            {
              text: TaskEnum.ImplementacionTablas,
              icon: "/icons/table-list-svgrepo-com.svg",
              description: `Implementé tablas dinámicas para mostrar datos de manera clara y ordenada. Mediante la utilización de librerías como Material UI y React Table. Principal medio para acceder a la gestión de datos.`
            },
            {
              text: TaskEnum.CRUDsAxios,
              icon: "/icons/develop-svgrepo-com.svg",
              description: `Desarrollé funciones para crear, consultar, editar y eliminar datos utilizando Axios para la comunicación con el backend. Creando rutas completas (página, componentes utilizados, traducción) para diferentes entidades como usuarios, reservas, habitaciones, etc.`
            },
            { 
              text: TaskEnum.OptimizacionNavegacion, 
              icon: "/icons/time-quarter-past-svgrepo-com.svg", 
              description: "Optimicé la navegación interna para reducir tiempos de carga y mejorar la fluidez de uso. Utilizando técnicas como lazy loading y memorización de componentes y funciones." 
            },
          ]
        },
    ]
}



