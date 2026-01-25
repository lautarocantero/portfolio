import type { ExperienceItemInterface } from "../../typings/types"
import { TaskEnum } from "../../typings/types/types"
import { getStackList } from "../Stack/getStackList"
import { getTaskList } from "./getExperienceTask"

export const getExperienceItems = (): ExperienceItemInterface[] => {
    return [
        // {
        //     _id: '74ga9c2d98h1e6f0c5d7a900',
        //     title: 'Extension de Youtube',
        //     gallery_urls: [
        //         '/images/experience/monitor.png',
        //         '/images/experience/monitor2.png',
        //         '/images/experience/smartphone-and-mobile-phone-free-png-385773423.png',
        //     ],
        //     stack: getStackList([ "HTML5", "CSS3", "React", "TypeScript", "Tailwind", "JavaScript", ]),
        //     short_description: "Extension de youtube que mejora la experiencia de escritorio de YouTube proporcionando control detallado y características útiles sobre la interfaz existente.",
        //     long_description: "Plataforma de hoteleria creada utilizando React y Typescript, sostenida con diseños en bootstrap y manejo de estados en Redux.",
        // },
        {
            _id: '7f3a9c2d84b1e6f0c5d7a913',
            title: 'Aplicacion de Tenis',
            gallery_urls: [
                '/images/experience/vilo/tenis/laptop-cards.png',
                '/images/experience/vilo/tenis/laptop-login.png',
                '/images/experience/vilo/tenis/tablet-login.png',
                '/images/experience/vilo/tenis/phone-cards.png',
                '/images/experience/vilo/tenis/phone-icons.png',
                '/images/experience/vilo/tenis/phone-login.png',
                '/images/experience/vilo/tenis/code-sample.png',
            ],
            stack: getStackList([ "HTML5", "CSS3", "React", "TypeScript", "Sass", "Redux", "MongoDB"]),
            tasks: [
              { 
                text: TaskEnum.CorreccionEstilosRotos, 
                icon: "/icons/repair-svgrepo-com.svg", 
                description: "Se corrigieron estilos visuales rotos o inconsistentes, garantizando una interfaz uniforme y responsiva." 
              },
              { 
                text: TaskEnum.ReestructuracionVistas, 
                icon: "/icons/eye-svgrepo-com.svg", 
                description: "Se reorganizaron las vistas principales para mejorar la navegación y la experiencia del usuario." 
              },
              { 
                text: TaskEnum.ValidacionFormularios, 
                icon: "/icons/design-validation-svgrepo-com.svg", 
                description: "Se implementaron validaciones en formularios para asegurar la integridad de los datos ingresados." 
              },
              { 
                text: TaskEnum.OrganizacionComponentes, 
                icon: "/icons/tree-view-alt-svgrepo-com.svg", 
                description: "Se estructuraron los componentes de manera modular y escalable, facilitando su mantenimiento." 
              },
              { 
                text: TaskEnum.DocumentacionComponentes, 
                icon: "/icons/doc-svgrepo-com.svg", 
                description: "Se creó documentación clara y accesible para cada componente, mejorando la comprensión y el onboarding." 
              },
              { 
                text: TaskEnum.CreacionEndpoints, 
                icon: "/icons/link-alt-1-svgrepo-com.svg", 
                description: "Se desarrollaron endpoints en el backend para conectar funcionalidades con la base de datos y servicios externos." 
              },
              { 
                text: TaskEnum.OptimizacionNavegacion, 
                icon: "/icons/time-quarter-past-svgrepo-com.svg", 
                description: "Se optimizó la navegación interna para reducir tiempos de carga y mejorar la fluidez de uso." 
              },
            ]
            ,
            short_description: "Aplicación de tenis pensada para todos los niveles de habilidad, para contactar con entrenadores y reservar clases de tenis.",
            long_description: {
                description: "Aplicación de tenis pensada para todos los niveles de habilidad, para contactar con entrenadores y reservar clases de tenis.",
                objective: 
                    `Este proyecto tuvo como objetivo ofrecer una plataforma accesible, clara y organizada, diseñada para que jugadores principiantes, 
                    intermedios y avanzados pudieran encontrar entrenadores adecuados y gestionar sus clases de manera sencilla. 
                    La propuesta contempla dos perfiles principales: por un lado, los usuarios amateurs, quienes pueden registrarse para acceder a 
                    clases con profesionales que ofrecen flexibilidad horaria y metodologías adaptadas a todos los niveles de habilidad; por otro lado, 
                    los profesionales o mentores, quienes tienen la posibilidad de inscribirse para guiar a jugadores novatos, compartir su experiencia y 
                    construir una comunidad de aprendizaje colaborativa.`,
                tasksDescription: "Durante mi participación en el desarrollo, me enfoqué en mejorar tanto la experiencia visual como la funcionalidad técnica del sistema:\n🔧 Corrección y mejora de estilos rotos...\n\n",
                technologiesDescription: "El proyecto fue desarrollado utilizando **React**, **TypeScript** y **SASS** en el frontend, mientras que en el backend se utilizó **MongoDB** para la persistencia y consulta de datos. Se implementó **Redux** para la gestión del estado de la aplicación."
            }
        },
        {
             _id: '65a6f3c9d2b47e1a9c4f8b12',
            gallery_urls: [
             '/images/experience/codetria/hotel/laptop-login.png',
             '/images/experience/codetria/hotel/laptop-table-users.png',
             '/images/experience/codetria/hotel/tablet-form.png',
             '/images/experience/codetria/hotel/phone-table-users.png',
            ],
            title: 'Plataforma de Hotelería',
            stack: getStackList([ 
             "React", "TypeScript", "Bootstrap", "Redux", "HTML5",
             "CSS3", "JavaScript", "Jest", "Git",
             ]),
            tasks: getTaskList([
              TaskEnum.CreacionNuevasRutas,
              TaskEnum.ImplementacionComponentes,
              TaskEnum.ImplementacionHooks,
              TaskEnum.ValidacionFormularios,
              TaskEnum.ImplementacionI18n,
              TaskEnum.ImplementacionPruebasUnitarias,
              TaskEnum.ImplementacionTablas,
              TaskEnum.CRUDsAxios,
            ]),
            short_description: "Plataforma de hoteleria para registrar usuarios, tener acceso a amenities, parking y reservar habitaciones.",
            long_description: { 
                description: "Plataforma de hotelería diseñada para optimizar la gestión de reservas y servicios.",
                objective: "Este proyecto tuvo como objetivo brindar una solución moderna y escalable para la administración de hoteles, facilitando tanto la experiencia de los usuarios como la eficiencia del personal.",
                tasksDescription: "Durante mi participación, trabajé principalmente en el frontend utilizando **React**, **Redux** y **Bootstrap**, consumiendo APIs mediante **Axios**. Mis tareas incluyeron:\n🛣️ **Creación de nuevas rutas** para diferentes secciones de la plataforma...\n⚙️ **Implementación de componentes reutilizables**...\n🔄 **Implementación de hooks personalizados** para manejar estados complejos...\n✅ **Validación de formularios** para asegurar la integridad de los datos ingresados por los usuarios...\n🌐 **Implementación de i18n** para soportar múltiples idiomas...\n🧪 **Implementación de pruebas unitarias** utilizando **Jest** para garantizar la calidad del código...\n📊 **Implementación de tablas dinámicas con Mui",
                technologiesDescription: "El proyecto fue desarrollado utilizando **React**, **TypeScript** y **Bootstrap** en el frontend, con **Redux** para la gestión del estado. Se utilizaron **Axios** para las solicitudes HTTP y **Jest** para las pruebas unitarias.",
            }
        },
    ]
}
