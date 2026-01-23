import type { LogoExperienceInterface } from "../../typings/types"

export const getExperienceLogos = (): LogoExperienceInterface[] => {
    return [
       {
           logo: 'public/images/previousJobs/vilo_logo.png',
          title: 'Vilotech',
       },
        {
            logo: 'public/images/previousJobs/cod_logo.png',
            title: 'Codetria',
        },
    ]
}
