import type { Stack } from "../reactComponents";

export interface Stack {
    text: string,
    icon: string,
}

export type Task = Pick <Stack, 'text' | 'icon'> & {
    description: string,
};

export interface LongDescriptionItem {
    description: string,
    objective: string,
    tasksDescription: string,
    technologiesDescription: string,
}

export interface BaseItemInterface {
    _id: string | null,
    gallery_urls: string[],
    title: string,
    stack: Stack[],
    short_description: string,
    long_description: LongDescriptionItem,
}

{/*─────────────────── 🔎 Appbar 🔎 ───────────────────*/}

export interface handleDrawerToggleInterface {
    setMobileOpen: Dispatch<SetStateAction<boolean>>;
}

export interface handleToggleThemeInterface {
    setAppTheme: Dispatch<SetStateAction<boolean>>
}

{/*─────────────────── 🔎 Experiencia 🔎 ───────────────────*/}

export type ExperienceItemInterface = Pick<
    BaseItemInterface,
    '_id' | 'gallery_urls' | 'title' | 'stack' | 'short_description' | 'long_description' | 'tasks'
>

export interface LogoExperienceInterface {
    logo: string,
    title: string,
}

{/*─────────────────── 🔎 Proyecto 🔎 ───────────────────*/}

export type ProjectItemInterface = Pick<
    BaseItemInterface,
    '_id' | 'gallery_urls' | 'title' | 'stack' | 'short_description' | 'long_description'
> & {
    project_url?: string,
    repo_url?: string,
}

{/*─────────────────── 🔎 Habilidades 🔎 ───────────────────*/}

export type StackSkillType = Pick<Stack, 'text' | 'icon'> & {
    iconGif: string,
}

{/*─────────────────── 🔎 Sobre mi 🔎 ───────────────────*/}

export interface AboutLinkInterface {
    text: string,
    icon: string,
    url?: string,
    action: string,
}

export interface handleAboutLinkActionInterface {
    action: string,
    url?: string,
    setShowModal: Dispatch<SetStateAction<boolean>>,
}

//─────────────────────────────── 🪧 Dialog 🪧 ───────────────────────────────//


export interface DialogContextType {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

