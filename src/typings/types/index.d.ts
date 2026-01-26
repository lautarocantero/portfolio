import type { StackInterface } from "../reactComponents";

export interface StackInterface {
    text: string,
    icon: string,
}

export type Task = Pick <StackInterface, 'text' | 'icon'> & {
    description: string,
};

export interface LongDescriptionInterface {
    objective: string,
    tasksDescription: string,
    technologiesDescription: string,
}

interface BaseItemInterface {
    _id: string | null,
    gallery_urls: string[],
    title: string,
    stack: StackInterface[],
    short_description: string,
    long_description: LongDescriptionInterface,
    tasks: Task[],
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
    '_id' | 
    'gallery_urls' | 
    'title' | 
    'stack' | 
    'short_description' | 
    'long_description' | 
    'tasks'
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

export type StackSkillType = Pick<StackInterface, 'text' | 'icon'> & {
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

{/*─────────────────── 🔎 Contacto 🔎 ───────────────────*/}

export interface ContactErrorInterface {
    text: string
}

//─────────────────────────────── 🪧 Dialog 🪧 ───────────────────────────────//


export interface DialogContextType {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

//─────────────────────────────── 📷 Carrusel de Imagenes 📷 ───────────────────────────────//

interface handleImages {
    setImageNumber: Dispatch<SetStateAction<number>>;
    gallery_urls: string[];
}

export type handlePrevInterface = Pick<handleImages, 'setImageNumber' | 'gallery_urls'>;

export type handleNextInterface = Pick<handleImages, 'setImageNumber' | 'gallery_urls'>;

//─────────────────────────────── 💲 Carrusel de experiencia (lenguaje/tareas) 💲 ───────────────────────────────//

interface handleExperiences {
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    components: React.ReactNode[];
}


export type handlePrevExperienceInterface = Pick<handleExperiences, 'setCurrentIndex' | 'components'>;


export type handleNextExperienceInterface = Pick<handleExperiences, 'setCurrentIndex' | 'components'>;

