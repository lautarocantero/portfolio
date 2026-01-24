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
            tasks: getTaskList([
              TaskEnum.CorreccionEstilosRotos,
              TaskEnum.ReestructuracionVistas,
              TaskEnum.ValidacionFormularios,
              TaskEnum.OrganizacionComponentes,
              TaskEnum.DocumentacionComponentes,
              TaskEnum.CreacionEndpoints,
              TaskEnum.OptimizacionNavegacion,
            ]),
            short_description: "Aplicación de tenis pensada para todos los niveles de habilidad, para contactar con entrenadores y reservar clases de tenis.",
            long_description: `**Aplicación de tenis pensada para todos los niveles de habilidad, para contactar con entrenadores y reservar clases de tenis.**\n
            Este proyecto tuvo como objetivo ofrecer una plataforma accesible y organizada para que jugadores principiantes, intermedios y avanzados pudieran encontrar 
            entrenadores adecuados y gestionar sus clases de manera sencilla.\n\nDurante mi participación en el desarrollo, me enfoqué en mejorar tanto la experiencia 
            visual como la funcionalidad técnica del sistema:\n🔧 Corrección y mejora de estilos rotos...\n\nEl proyecto fue desarrollado utilizando **React**, **TypeScript** y **SASS** en el frontend, mientras que en el backend se utilizó **MongoDB** para la persistencia y consulta de datos.\n\nEn conjunto.`
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
            long_description: `**Plataforma de hotelería diseñada para optimizar la gestión de reservas y servicios.**\nEste proyecto tuvo como objetivo brindar una 
            solución moderna y escalable para la administración de hoteles, facilitando tanto la experiencia de los usuarios como la eficiencia del personal.\n\n
            Durante mi participación, trabajé principalmente en el frontend utilizando **React**, **Redux** y **Bootstrap**, consumiendo APIs mediante **Axios**. 
            Mis tareas incluyeron:\n\n🛣️ **Creación de nuevas rutas**...\n\nEn conjunto, estas tareas fortalecieron la plataforma, logrando una aplicación más completa, 
            escalable y fácil de mantener, que responde a las necesidades de gestión hotelera moderna.` 
        },
    ]
}
