import type { StackSkillType } from "../../typings/types";

const allStacks: StackSkillType[] = [
  // 🟦 Markup & Styles
  { text: 'HTML5', icon: '/icons/html-5-svgrepo-com.svg', iconGif: '', type: 'markup' },
  { text: 'CSS3', icon: '/icons/css-3-svgrepo-com.svg', iconGif: '', type: 'style' },

  // 🟦 Programming Languages
  { text: 'JavaScript', icon: '/icons/javascript-svgrepo-com.svg', iconGif: 'https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif', type: 'language' },
  { text: 'TypeScript', icon: '/icons/typescript-official-svgrepo-com.svg', iconGif: '', type: 'language' },
  { text: 'C#', icon: 'public/icons/c-sharp-16-svgrepo-com.svg', iconGif: '', type: 'language' },
  { text: 'PHP', icon: '/icons/php01-svgrepo-com.svg', iconGif: '', type: 'language' },

  // 🟩 Frameworks & Libraries
  { text: 'Bootstrap', icon: '/icons/bootstrap-svgrepo-com.svg', iconGif: '', type: 'framework' },
  { text: 'Tailwind', icon: '/icons/tailwind-svgrepo-com.svg', iconGif: '', type: 'framework' },
  { text: 'Sass', icon: '/icons/sass-svgrepo-com.svg', iconGif: '', type: 'framework' },
  { text: 'React', icon: '/icons/React-icon.svg', iconGif: 'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif', type: 'framework' },
  { text: 'Redux', icon: '/icons/redux-logo.svg', iconGif: '', type: 'framework' },

  // 🟪 Backend
  { text: 'Node.js', icon: '/icons/nodejs-svgrepo-com.svg', iconGif: '', type: 'backend' },
  { text: 'Firebase', icon: '/icons/firebase-svgrepo-com.svg', iconGif: 'https://media.giphy.com/media/Ri2TUcKlaOcaDBxFpY/giphy.gif', type: 'backend' },

  // 🟪 Databases
  { text: 'MongoDB', icon: '/icons/mongodb-svgrepo-com.svg', iconGif: '', type: 'database' },

  // 🟨 Testing
  { text: 'Jest', icon: '/icons/jest-svgrepo-com.svg', iconGif: '', type: 'testing' },

  // 🟧 Version Control
  { text: 'Git', icon: '/icons/git-svgrepo-com.svg', iconGif: 'https://media.giphy.com/media/kH6CqYiquZawmU1HI6/giphy.gif', type: 'versioning' },
  { text: 'GitKraken', icon: '/icons/gitkraken-svgrepo-com.svg', iconGif: "", type: 'versioning' },

  // 🟨 Tools
  { text: 'VS Code', icon: '/icons/vs-code-svgrepo-com.svg', iconGif: 'https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif', type: 'tool' },
  { text: 'Visual Studio', icon: '/icons/visual-studio-svgrepo-com.svg', iconGif: '', type: 'tool' },

  // 🟨 Design
  { text: 'Figma', icon: '/icons/figma-svgrepo-com.svg', iconGif: '', type: 'design' },

  // 🟥 Systems
  { text: 'Linux', icon: '/icons/linux-svgrepo-com.svg', iconGif: '', type: 'system' },
];


export const getStackList = (filter: string[]): StackSkillType[] => {
  return allStacks.filter(stack => filter.includes(stack.text));
};

export const groupStacksByType = (
  stacks: StackSkillType[],
  type: string
): StackSkillType[] => {
  return stacks.filter(stack => stack.type === type);
};
