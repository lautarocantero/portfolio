import type { AboutLinkInterface } from "../../typings/types"

export const GetAboutLinks = (): AboutLinkInterface[] => {
    return (
        [
            {
                text: 'github',
                icon: '/icons/github-142-svgrepo-com.svg',
                url: 'https://github.com/lautarocantero',
                action: 'visit',
                bgColor: '#24292e',
            },
            {
                text: 'linkedin',
                icon: '/icons/linkedin-rounded-border-svgrepo-com.svg',
                url: 'https://www.linkedin.com/in/lautaro-cantero/',
                action: 'visit',
                bgColor: '#0077b5',
            },
            {
                text: 'gmail',
                icon: '/icons/gmail-svgrepo-com.svg',
                action: 'email',
                bgColor: '#ea4335',
            },
            {
                text: 'cv',
                icon: '/icons/cv-file-interface-symbol-svgrepo-com.svg',
                action: 'cv',
                bgColor: '#7c6fff',
            },
        ]
    )
}