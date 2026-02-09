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
    objectiveDev: string,
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

export interface FlagsLanguageInterface {
    lang: string,
    flagSrc: string,
    alt: string,
}

export interface handleToggleLanguageInterface {
    lng: string,
};

{/*─────────────────── 🔎 Presentación 🔎 ───────────────────*/}

export interface downloadCvInterface {
    currentLanguage: string;
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
    url: string,
}

/*─────────────────── 🔎 Proyecto 🔎 ───────────────────*/

import type { BaseItemInterface } from "../../typings/types";
import type { StackInterface } from "../../typings/types/enums";

export interface ProjectStackInterface {
  step: string;       
  description: string;
  stack: StackInterface[]; 
}

export interface BenefitInterface {
  title: string;
  desc: string;
  logo: string;
}

export interface RoadmapStepInterface {
  title: string;
  desc: string;
  gallery_urls: string[],
}

export interface LongDescriptionInterface {
  title: string;
  note: string;
  objective: string;
  tasksDescription: string;
  technologiesDescription: string;
  benefits?: BenefitInterface[]; 
  reasons?: string[];
  roadmap?: RoadmapStepInterface[];
  project_url: string,
  design_url: string,
}

export type ProjectItemInterface = Pick<
  BaseItemInterface,
  "_id" | "gallery_urls" | "title" | "tasks" | "short_description" | "long_description"
> & {
  project_url?: string;
  repo_url?: string;
  stack: ProjectStackInterface[];
  inDevelopment: boolean;
};

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

export interface EmailContactFormInterface { 
    name: string; 
    email: string; 
    message: string 
}

export interface ContactFormSubmitInterface {
    values: EmailContactFormInterface;
    resetForm: () => void;
}

export type sendEmailInterface = Pick<ContactFormSubmitInterface, 'values' | 'resetForm'> & {
    showSnackBar: (message: string, color: AlertColor) => void;
};

export interface ContactErrorInterface {
    text: string
}

export interface ContactFormHandleSubmitInterface {
    values: EmailContactFormInterface,
    sendEmailMemorized: (e: React.FormEvent<HTMLFormElement>) => void,
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

//─────────────────────────────── 🍫 Snack Bar 🍫 ───────────────────────────────//

export interface SnackBarState {
  open: boolean;
  message: string;
  autoHideDuration?: number;
  color: AlertColor;
}
