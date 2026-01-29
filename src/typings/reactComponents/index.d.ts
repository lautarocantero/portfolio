import type React from "react";
import type { AboutLinkInterface, LogoExperienceInterface, LongDescriptionInterface, LongDescriptionItem, StackInterface, Task } from "../types";

{/*─────────────────── 🔎 Navbar 🔎 ───────────────────*/}

export type NavBarLink = {
  linkText: string,
  linkUrl: string, 
}

export interface AppBarMenuProps {
    navItems: string[],
    handleDrawerToggle: () => void,
}

export interface AppBarMobileDrawerInterface {
    navItems: string[],
    mobileOpen: boolean, 
    handleDrawerToggle: () => void,
};

export type DrawerContentType = Pick<AppBarMobileDrawerInterface, 'handleDrawerToggle', 'navItems'>;

export type DrawerListType = Pick<AppBarMobileDrawerInterface, 'navItems'>;

export interface ThemedLinkInterface {
    to: string; 
    children: React.ReactNode;
};

{/*─────────────────── 🔎 Portfolio 🔎 ───────────────────*/}

export interface PortfolioLayoutInterface {
    children: React.ReactNode
}

{/*─────────────────── 🔎 Presentacion 🔎 ───────────────────*/}

export interface PresentationButtonProps {
    text: string,
    icon: string;
    onClick?: () => void;
}

{/*─────────────────── 🔎 Carousel 🔎 ───────────────────*/}

export interface CarouselProps {
    gallery_urls: string[];
}

{/*─────────────────── 🔎 Stack 🔎 ───────────────────*/}

export interface StackListComponentProps {
    stacks: StackInterface[],
}

export interface StackCapsuleProps {
    stack: StackInterface,
}

{/*─────────────────── 🔎 Tareas 🔎 ───────────────────*/}

export interface TaskListProps {
    tasks: Task[],
}

export interface TaskCapsuleProps {
    task: Task,
};

{/*─────────────────── 🔎 Experiencia 🔎 ───────────────────*/}

export interface BaseItemInterface {
    title: string,
    stack: StackInterface[],
    tasks: Task[],
    short_description: string,
    long_description: LongDescriptionInterface,
    gallery_urls: string[],
}


export interface ExperienceLogoProps {
    logo: LogoExperienceInterface;
}

export type ExperienceItemInterface = Pick<
    BaseItemInterface,
    'title' | 'stack' | 'short_description' | 'long_description' | 'gallery_urls' | 'tasks'
>

export interface ExperienceItemProps {
    experienceItem: ExperienceItemInterface,
}

export interface ExperienceDetailProps {
    experienceItem: BaseItemInterface,
    isExpanded?: boolean,
}

export type ExperienceDetailHandlerProps = Pick <ExperienceDetailProps , 'experienceItem' | 'isExpanded'>

{/*──────── descripcion corta  ────────*/}

export type ExperienceDetailShortDescriptionProps = Pick<BaseItemInterface, 'stack' | 'short_description' | 'tasks'>;

export type ExperienceHandlerProps = Pick<BaseItemInterface, 'stack' | 'tasks'>;

export type ExperienceStackExpositureProps = Pick<BaseItemInterface, 'stack'>;

export type ExperienceTaskExpositureProps = Pick<BaseItemInterface, 'tasks'>;

{/*──────── descripcion larga  ────────*/}

export type LongDescriptionProps = Pick<ExperienceDetailProps, 'experienceItem'>;

export interface LongDescriptionContentProps {
    title: string,
    text: string,
    stack: StackInterface[],
};

export interface LongObjectiveProps {
    text: string,
}

export type LongTasksProps = Pick<LongObjectiveProps, 'text'> & {
    title: string,
    tasks: Task[],
}

export type LongTaskDescriptionProps = Pick<LongTasksProps, 'tasks'>;

export type LongDescriptionProps = Pick<LongTasksProps, 'title' | 'text' > & {
    stack: StackInterface[],
};

{/*──────── botón  ────────*/}

export type  ExperienceItemButtonProps = Pick<ExperienceDetailProps, 'isExpanded'> & {
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>,
};

{/*─────────────────── 🔎 Proyectos 🔎 ───────────────────*/}

export type ProjectItemInterface = Pick<
    BaseItemInterface,
    'title' | 'stack' | 'short_description' | 'gallery_urls'
>

{/*─────────────────── 🔎 Habilidades 🔎 ───────────────────*/}

export interface StackExhibitorProps {
    stacks: StackSkillType[],
}

export interface StackSkillProps {
    stack: StackSkillType,
}

{/*─────────────────── 🔎 Sobre mi 🔎 ───────────────────*/}

export interface AboutLinkProps {
    link: AboutLinkInterface,
}

//─────────────────────────────── 🍫 Snack Bar 🍫 ───────────────────────────────//


export interface SnackBarState {
  open: boolean;
  message: string;
  autoHideDuration?: number;
  color: AlertColor;
}

export interface SnackBarContextInterface { 
  snackBar: SnackBarState;
  showSnackBar: (message: string, color: AlertColor) => void;
  closeSnackBar: () => void;
}