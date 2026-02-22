import type React from "react";
import type { SetStateAction } from "react";
import type { AboutLinkInterface, BenefitType, LogoExperienceInterface, LongDescriptionInterface, ProjectEntryType, ProjectLongDescriptionType, StackInterface, StackSkillType, Task } from "../types";
import type { ProjectEntryTypeEnum } from "../types/enums";

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

export interface PresentationTextProps {
    text: string,
    remarked?: boolean,
    size: string,
    className?: string,
    title?: boolean,
}

export interface PresentationButtonProps {
    text: string,
    icon: string;
    onClick?: () => void;
}

{/*─────────────────── 🔎 Carousel 🔎 ───────────────────*/}

export interface CarouselProps {
    gallery_urls: string[];
    bigScreen?: boolean;
}

{/*─────────────────── 🔎 Stack (exp-proyecto) 🔎 ───────────────────*/}

export interface StackListComponentProps {
    stacks: StackInterface[],
}

export interface StackCapsuleProps {
    stack: StackInterface,
    flat?: boolean,
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

export interface ProjectSelectedProps {
    projectSelected: ProjectEntryType,
};

export type ProjectDescriptionProps = Pick<ProjectEntryType , 'long_description' >

export type ProjectDescriptionHandlerProps = Pick<ProjectEntryType, 'long_description'>


export interface BenefitCardProps {
  benefit: BenefitType;
}

interface ProjectDescriptionItemProps {
    text: string;
    logo: string;
    type: ProjectEntryTypeEnum;
}

export interface ProjectTitleProps {
  title: string;
}

export interface ProjectObjectiveProps {
  objective: string;
  development?: boolean;
}

export interface ProjectNoteProps {
  note: string;
}

export interface ProjectBenefitsProps {
    benefits: BenefitType[];
}

export interface DevelopmentCardProps {
  development: RoadmapStepType;
  index: number;
}

export type ProjectReasonsProps = Pick<ProjectTitleProps , title> &  {
    reasons: string[];
}

export type ProjectSummaryProps = Pick<LongDescriptionInterface, 'tasksDescription'> 

export interface ProjectButtonsProps {
    long_description: ProjectLongDescriptionType;
}

export type ProjectButtonProps  = Pick <ProjectDescriptionItemProps, 'text'> & {
    onClick: () => void;
    disabled?: boolean;
}

export interface ProjectLongDescriptionDevProps {
  long_description: ProjectLongDescriptionType;
}

export interface ProjectLongDescriptionClientProps {
  long_description: ProjectLongDescriptionType;
}

{/*─────────────────── 🔎 Habilidades 🔎 ───────────────────*/}

export interface StackButtonProps {
    setIsDetailedList: Dispatch<SetStateAction<boolean>>;
    isDetailedList: boolean;
}

export interface StackExhibitorProps {
    stacks: StackSkillType[],
    isDetailedList: boolean,
}

export interface StackGridProps {
    stacks: StackSkillType[]
}

export type StackListProps = Pick <StackGridProps, 'stacks'>

export interface StackSkillProps {
    stack: StackSkillType,
}

export interface StackContentProps {
    iconGif: string; 
    icon: string; 
    text: string;
}

export type StackInnerCircleProps = Pick<StackContentProps, 'icon' | 'iconGif' | 'text'>

export type StackLabelProps = Pick<StackContentProps, 'text'>

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