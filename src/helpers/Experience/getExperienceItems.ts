import { useContext } from "react";
import type { ExperienceItemInterface } from "../../typings/types";
import { TaskEnum } from "../../typings/types/enums"; // ahora con los valores en inglés
import { getStackList } from "../Stack/getStackList";
import { StackContext } from "../../components/StackTab/context/StackContext";

export const getExperienceItems = (): ExperienceItemInterface[] => {
  const { filteredStacks } = useContext(StackContext)!;
  

  const items: ExperienceItemInterface[] =  [
    {
      _id: "7f3a9c2d84b1e6f0c5d7a900",
      title: "experience.extensionApp.title",
      gallery_urls: [ 
        "/images/experience/vilo/extension/clean_extension.png", 
        "/images/experience/vilo/extension/extension.png", 
        "/images/experience/vilo/extension/laptop-extension.png",
      ],
      short_description: "experience.extensionApp.description",
      long_description: {
        objective: "experience.extensionApp.objective",
        tasksDescription: "experience.extensionApp.tasksDescription",
        technologiesDescription: "experience.extensionApp.technologiesDescription",
      },
      stack: getStackList([
        "HTML5",
        "CSS3",
        "React",
        "TypeScript",
        "Tailwind",
        "Git",
      ]),
      tasks: [
        {
          text: TaskEnum.HooksImplementation,
          icon: "/icons/hook-svgrepo-com.svg",
          description: "experience.extensionApp.task.hooks",
        },
        {
          text: TaskEnum.ComponentDocumentation,
          icon: "/icons/doc-svgrepo-com.svg",
          description: "experience.extensionApp.task.documentation",
        },
      ],
    },
    {
      _id: "7f3a9c2d84b1e6f0c5d7a913",
      title: "experience.tennisApp.title",
      gallery_urls: [
        "/images/experience/vilo/tenis/laptop-cards.png",
        "/images/experience/vilo/tenis/laptop-login.png",
        "/images/experience/vilo/tenis/tablet-login.png",
        "/images/experience/vilo/tenis/phone-cards.png",
        "/images/experience/vilo/tenis/phone-icons.png",
        "/images/experience/vilo/tenis/phone-login.png",
        "/images/experience/vilo/tenis/code-sample.png",
      ],
      short_description: "experience.tennisApp.description",
      long_description: {
        objective: "experience.tennisApp.objective",
        tasksDescription: "experience.tennisApp.tasksDescription",
        technologiesDescription: "experience.tennisApp.technologiesDescription",
      },
      stack: getStackList([
        "HTML5",
        "CSS3",
        "React",
        "TypeScript",
        "Sass",
        "Node.js",
        "MongoDB",
        "Git",
      ]),
      tasks: [
        {
          text: TaskEnum.FixBrokenStyles,
          icon: "/icons/repair-svgrepo-com.svg",
          description: "experience.tennisApp.task.fixStyles",
        },
        {
          text: TaskEnum.RestructureViews,
          icon: "/icons/eye-svgrepo-com.svg",
          description: "experience.tennisApp.task.restructureViews",
        },
        {
          text: TaskEnum.FormValidation,
          icon: "/icons/design-validation-svgrepo-com.svg",
          description: "experience.tennisApp.task.formValidation",
        },
        {
          text: TaskEnum.ComponentDocumentation,
          icon: "/icons/doc-svgrepo-com.svg",
          description: "experience.tennisApp.task.documentation",
        },
        {
          text: TaskEnum.UseOfI18n,
          icon: "icons/lang-svgrepo-com.svg",
          description: "experience.tennisApp.task.i18n",
        },
        {
          text: TaskEnum.EndpointCreation,
          icon: "/icons/link-alt-1-svgrepo-com.svg",
          description: "experience.tennisApp.task.endpoints",
        },
        {
          text: TaskEnum.NavigationOptimization,
          icon: "/icons/time-quarter-past-svgrepo-com.svg",
          description: "experience.tennisApp.task.navigation",
        },
      ],
    },
    {
      _id: "65a6f3c9d2b47e1a9c4f8b12",
      title: "experience.hotelPlatform.title",
      gallery_urls: [
        "/images/experience/codetria/hotel/laptop-login.png",
        "/images/experience/codetria/hotel/laptop-table-users.png",
        "/images/experience/codetria/hotel/tablet-form.png",
        "/images/experience/codetria/hotel/phone-table-users.png",
      ],
      short_description: "experience.hotelPlatform.description",
      long_description: {
        objective: "experience.hotelPlatform.objective",
        tasksDescription: "experience.hotelPlatform.tasksDescription",
        technologiesDescription: "experience.hotelPlatform.technologiesDescription",
      },
      stack: getStackList([
        "React",
        "TypeScript",
        "Bootstrap",
        "Redux",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Jest",
        "Git",
      ]),
      tasks: [
        {
          text: TaskEnum.FixBrokenStyles,
          icon: "/icons/repair-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.fixStyles",
        },
        {
          text: TaskEnum.NewRoutesCreation,
          icon: "/icons/landing-page-web-design-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.newRoutes",
        },
        {
          text: TaskEnum.ComponentImplementation,
          icon: "/icons/puzzle-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.components",
        },
        {
          text: TaskEnum.RestructureViews,
          icon: "/icons/eye-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.restructureViews",
        },
        {
          text: TaskEnum.HooksImplementation,
          icon: "/icons/hook-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.hooks",
        },
        {
          text: TaskEnum.FormValidation,
          icon: "/icons/design-validation-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.formValidation",
        },
        {
          text: TaskEnum.UseOfI18n,
          icon: "icons/lang-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.i18n",
        },
        {
          text: TaskEnum.UnitTestingImplementation,
          icon: "/icons/test-desktop-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.unitTests",
        },
        {
          text: TaskEnum.TableImplementation,
          icon: "/icons/table-list-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.tables",
        },
        {
          text: TaskEnum.AxiosCRUDs,
          icon: "/icons/develop-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.crudAxios",
        },
        {
          text: TaskEnum.NavigationOptimization,
          icon: "/icons/time-quarter-past-svgrepo-com.svg",
          description: "experience.hotelPlatform.task.navigation",
        },
      ],
    },
  ];

  if (filteredStacks.length === 0) return items; 
  
  return items.filter(item => item.stack.some(stack => filteredStacks.includes(stack.text)) );
};
