import type React from "react";
import type { AboutLinkInterface, LogoExperienceInterface, LongDescriptionItem, Stack, Task } from "../types";

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

{/*─────────────────── 🔎 Experiencia 🔎 ───────────────────*/}

export interface BaseItemInterface {
    title: string,
    stack: Stack[],
    task: string,
    short_description: string,
    long_description: LongDescriptionItem,
    gallery_urls: string[],
}

export interface BaseItemStackCapsuleProps {
    stack: Stack,
}

export type BaseItemIlustrationProps = Pick<BaseItemInterface, 'gallery_urls'>
export type BaseItemDataProps = Pick<BaseItemInterface, 'title' | 'stack' | 'short_description'>
export type BaseItemStackExpositureProps = Pick<BaseItemInterface, 'stack'>
export type BaseItemDescriptionProps = Pick<BaseItemInterface, 'short_description'>

interface ExperienceLogoProps {
    logo: LogoExperienceInterface;
}

{/*─────────────────── 🔎 Experiencia 🔎 ───────────────────*/}

export type ExperienceItemInterface = Pick<
    BaseItemInterface,
    'title' | 'stack' | 'short_description' | 'long_description' | 'gallery_urls', 'tasks'
>

export interface ExperienceItemProps {
    experienceItem: ExperienceItemInterface,
}

export type ExperienceItemIlustrationProps = Pick<ExperienceItemInterface, 'gallery_urls'>
export type ExperienceItemDataProps = Omit<ExperienceItemInterface, ''> & {
    isExpanded?: boolean,
}

export type ExperienceItemSwitcherProps = Pick<ExperienceItemInterface, 'stack' | 'tasks'>;

export interface ExperienceItemButtonProps {
    isExpanded: boolean,
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>,
}

export type ExperienceItemStackExpositureProps = Pick<ExperienceItemInterface, 'stack'>;

export type StackListComponentProps = Pick<ExperienceItemStackExpositureProps, 'stack'>;

export type ExperienceItemTaskExpositureProps = Pick<ExperienceItemInterface, 'tasks'>;

export type ExperienceItemTaskListProps = Pick<ExperienceItemTaskExpositureProps, 'tasks'>;

export type ExperienceItemDescriptionProps = Omit <ExperienceItemDataProps , '' >

export type ShortDataProps = Pick<ExperienceItemInterface, 'stack' | 'tasks' | 'short_description'>;

export type LongDataProps = Omit<ExperienceItemInterface, ''>;

export interface LongDataDescriptionProps {
    title: string,
    text: string,
    stack: Stack[],
}

export type LongDataObjectiveProps = Pick<LongDataDescriptionProps, 'text'>;

export type LongDataTasksProps = Pick< LongDataTasksProps, 'title' | 'text'> & {
    tasks: Task[],
}

export type LongDataTaskDescriptionProps = Pick<LongDataTasksProps, 'tasks'>;

export interface ExperienceItemStackCapsuleProps {
    stack: Stack,
}

export interface ExperienceItemTaskCapsuleProps {
    task: Task,
}

{/*─────────────────── 🔎 Proyectos 🔎 ───────────────────*/}

export type ProjectItemInterface = Pick<
    BaseItemInterface,
    'title' | 'stack' | 'short_description' | 'gallery_urls'
>

export interface ProjectItemProps {
    projectItem: ProjectItemInterface,
}

export type ProjectItemIlustrationProps = Pick<ProjectItemInterface, 'gallery_urls'>
export type ProjectItemDataProps = Pick<ProjectItemInterface, 'title' | 'stack' | 'short_description'>
export type ProjectItemStackExpositureProps = Pick<ProjectItemInterface, 'stack'>
export type ProjectItemDescriptionProps = Pick<ProjectItemInterface, 'short_description'>
export interface ProjectItemStackCapsuleProps {
    stack: Stack,
}

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