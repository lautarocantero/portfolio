import type { StackSkillType } from "../../typings/types";

const allStacks: StackSkillType[] = [
  // 🟦 Lenguajes
  { text: 'HTML5', icon: '/icons/html-5-svgrepo-com.svg', iconGif: '' },
  { text: 'CSS3', icon: '/icons/css-3-svgrepo-com.svg', iconGif: '' },
  { text: 'JavaScript', icon: '/icons/javascript-svgrepo-com.svg', iconGif: 'https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif' },
  { text: 'TypeScript', icon: '/icons/typescript-official-svgrepo-com.svg', iconGif: '' },

  // 🟩 Tecnologías / Frameworks
  { text: 'Bootstrap', icon: '/icons/bootstrap-svgrepo-com.svg', iconGif: '' },
  { text: 'Tailwind', icon: '/icons/tailwind-svgrepo-com.svg', iconGif: '' },
  { text: 'Sass', icon: '/icons/sass-svgrepo-com.svg', iconGif: '' },
  { text: 'React', icon: '/icons/React-icon.svg', iconGif: 'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif' },
  { text: 'Redux', icon: '/icons/redux-logo.svg', iconGif: '' },
  { text: 'Node.js', icon: '/icons/nodejs-svgrepo-com.svg', iconGif: '' },
  { text: 'Firebase', icon: '/icons/firebase-svgrepo-com.svg', iconGif: 'https://media.giphy.com/media/Ri2TUcKlaOcaDBxFpY/giphy.gif' },
  { text: 'Jest', icon: '/icons/jest-svgrepo-com.svg', iconGif: '' },
  // 🟪 Bases de datos
  { text: 'MongoDB', icon: '/icons/mongodb-svgrepo-com.svg', iconGif: '' },

  // 🟨 Control de versiones / Herramientas de desarrollo
  { text: 'Git', icon: '/icons/git-svgrepo-com.svg', iconGif: 'https://media.giphy.com/media/kH6CqYiquZawmU1HI6/giphy.gif' },
  { text: 'GitKraken', icon: '/icons/gitkraken-svgrepo-com.svg', iconGif: "" },

  // 🟧 Aplicaciones / IDEs / Diseño
  { text: 'VS Code', icon: '/icons/vs-code-svgrepo-com.svg', iconGif: 'https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif' },
  { text: 'Visual Studio', icon: '/icons/visual-studio-svgrepo-com.svg', iconGif: '' },
  { text: 'Figma', icon: '/icons/figma-svgrepo-com.svg', iconGif: '' },


  // 🟥 Sistemas Operativos
  { text: 'Linux', icon: '/icons/linux-svgrepo-com.svg', iconGif: '' },
];

export const getStackList = (filter: string[]): StackSkillType[] => { return allStacks.filter(stack => filter.includes(stack.text)); };