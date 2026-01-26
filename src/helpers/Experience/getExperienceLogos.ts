import type { LogoExperienceInterface } from "../../typings/types"

export const getExperienceLogos = (): LogoExperienceInterface[] => {
    return [
       {
            logo: 'public/images/previousJobs/vilo_logo.png',
            title: 'Vilotech',
            url: 'https://www.vilotech.co/' 
       },
        {
            logo: 'public/images/previousJobs/cod_logo.png',
            title: 'Codetria',
            url: 'https://www.codetria.com/'
        },
    ]
}
