import type { AboutLinkInterface, LogoExperienceInterface, Stack } from "../types";

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

{/*─────────────────── 🔎 Experiencia 🔎 ───────────────────*/}

export interface BaseItemInterface {
    title: string,
    stack: Stack[],
    short_description: string,
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
    'title' | 'stack' | 'short_description' | 'gallery_urls'
>

export interface ExperienceItemProps {
    experienceItem: ExperienceItemInterface,
}

export type ExperienceItemIlustrationProps = Pick<ExperienceItemInterface, 'gallery_urls'>
export type ExperienceItemDataProps = Pick<ExperienceItemInterface, 'title' | 'stack' | 'short_description'>
export type ExperienceItemStackExpositureProps = Pick<ExperienceItemInterface, 'stack'>
export type ExperienceItemDescriptionProps = Pick<ExperienceItemInterface, 'short_description'>
export interface ExperienceItemStackCapsuleProps {
    stack: Stack,
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