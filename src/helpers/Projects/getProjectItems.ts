import type { ProjectItemInterface } from "../../typings/types"
import { getStackList } from "../Stack/getStackList"

export const getProjectItems = (): ProjectItemInterface[] => {
    return [
        {
            _id: 'proj-market-ropa',
            gallery_urls: [
                'public/images/projects/clothes-market/market-ropa-index.png',
                'public/images/projects/clothes-market/market-ropa-index-2.png',
                'public/images/projects/clothes-market/market-ropa-index-3.png',
                'public/images/projects/clothes-market/market-ropa-index-4.png',
            ],
            title: 'Market de Ropa',
            stack: getStackList([ "HTML", "CSS", "JavaScript" ]),
            short_description: "Tienda online minimalista para comprar ropa.",
            long_description: "Este proyecto presenta una tienda para poder comprar ropa online, seleccionando de un amplio catálogo con estilo minimalista, donde podés elegir el tamaño y la cantidad del producto que desees. Incluye página general de la tienda, apartado de nosotros y página de compra de producto.",
            project_url: "https://market-lau.netlify.app/index.html"
        },
        {
            _id: 'proj-upgrade',
            gallery_urls: [
                'public/images/projects/tech-market/upgrade-index.png',
                'public/images/projects/tech-market/upgrade-index-2.png',
                'public/images/projects/tech-market/upgrade-index-3.png',
                'public/images/projects/tech-market/upgrade-index-4.png',
            ],
            title: 'Upgrade',
            stack: getStackList([ "HTML", "CSS", "JavaScript" ]),
            short_description: "E-commerce de productos electrónicos.",
            long_description: "Página de compra de productos electrónicos, con carrito que se actualiza en tiempo real.",
            project_url: "https://upgrade-lau.netlify.app/"
        },
        {
            _id: 'proj-festival-musical',
            gallery_urls: [
                'public/images/projects/festival/festival-index.png',
                'public/images/projects/festival/festival-index-2.png',
                'public/images/projects/festival/festival-index-3.png',
                'public/images/projects/festival/festival-index-4.png',
            ],
            title: 'Festival Musical',
            stack: getStackList([ "HTML", "CSS", "JavaScript", "Gulp", "Sass" ]),
            short_description: "Página web sobre un festival musical.",
            long_description: `Una página web sobre un Festival Musical con toda la información del evento. 
            Cuenta con galería responsive. Es el primer proyecto en el que utilicé Gulp y Sass.`,
            project_url: "https://festival-musical-lau.netlify.app"
        },
        {
            _id: 'proj-blog-cafe',
            gallery_urls: [
                'public/images/projects/coffe/blog-cafe-index.png',
                'public/images/projects/coffe/blog-cafe-index-2.png',
                'public/images/projects/coffe/blog-cafe-index-3.png',
                'public/images/projects/coffe/blog-cafe-index-4.png',
            ],
            title: 'Blog de Café',
            stack: getStackList([ "HTML", "CSS", "JavaScript" ]),
            short_description: "Blog con cursos y recetas de café.",
            long_description: "Proyecto de un Blog de Café, con cursos de recetas y un blog con diferentes entradas, además de una página de contacto.",
            project_url: "https://blog-cafe-lau.netlify.app"
        },
        {
            _id: 'proj-barberia',
            gallery_urls: [
                'public/images/projects/barb/barberia-index.png',
                'public/images/projects/barb/barberia-index-2.png',
                'public/images/projects/barb/barberia-index-3.png',
                'public/images/projects/barb/barberia-index-4.png',
            ],
            title: 'Barbería',
            stack: getStackList([ "HTML", "CSS", "JavaScript", "Gulp", "Sass" ]),
            short_description: "Catálogo de cortes y servicios de barbería.",
            long_description: "Página web en donde podés seleccionar de un catálogo de cortes tu favorito y acceder a los servicios luego de llenar los campos. Desarrollada con Gulp, Sass y JavaScript.",
            project_url: "https://barberia-lau.netlify.app"
        },
    ]
}
