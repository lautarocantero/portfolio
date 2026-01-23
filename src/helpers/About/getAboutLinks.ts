import type { AboutLinkInterface } from "../../typings/types"

export const GetAboutLinks = (): AboutLinkInterface[] => {
    return (
        [
            {
                text: 'github',
                icon: '/icons/github-142-svgrepo-com.svg',
                url: 'https://github.com/lautarocantero',
                action: 'visit',
            },
            {
                text: 'linkedin',
                icon: '/icons/linkedin-rounded-border-svgrepo-com.svg',
                url: 'https://www.linkedin.com/in/lautaro-cantero/',
                action: 'visit',
            },
            {
                text: 'gmail',
                icon: '/icons/gmail-svgrepo-com.svg',
                action: 'email',
            },
            {
                text: 'cv',
                icon: '/icons/cv-file-interface-symbol-svgrepo-com.svg',
                action: 'cv',
            },
        ]
    )
}