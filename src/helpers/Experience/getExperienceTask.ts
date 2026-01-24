import type { Task } from "../../typings/types";
import { TaskEnum } from "../../typings/types/types";

const allTasks: Task[] = [
  // 🎾 Proyecto Tenis
  { text: TaskEnum.CorreccionEstilosRotos, icon: "/icons/repair-svgrepo-com.svg" },
  { text: TaskEnum.ReestructuracionVistas, icon: "/icons/eye-svgrepo-com.svg" },
  { text: TaskEnum.ValidacionFormularios, icon: "/icons/design-validation-svgrepo-com.svg" },
  { text: TaskEnum.OrganizacionComponentes, icon: "/icons/tree-view-alt-svgrepo-com.svg" },
  { text: TaskEnum.DocumentacionComponentes, icon: "/icons/doc-svgrepo-com.svg" },
  { text: TaskEnum.CreacionEndpoints, icon: "/icons/link-alt-1-svgrepo-com.svg" },
  { text: TaskEnum.OptimizacionNavegacion, icon: "/icons/time-quarter-past-svgrepo-com.svg" },

  // 🏨 Proyecto Hotelería
  { text: TaskEnum.CreacionNuevasRutas, icon: "/icons/url-internet-svgrepo-com.svg" },
  { text: TaskEnum.ImplementacionComponentes, icon: "/icons/puzzle-svgrepo-com.svg" },
  { text: TaskEnum.ImplementacionHooks, icon: "/icons/hook-svgrepo-com.svg" },
  { text: TaskEnum.ImplementacionI18n, icon: "/icons/lang-svgrepo-com.svg" },
  { text: TaskEnum.ImplementacionPruebasUnitarias, icon: "/icons/test-desktop-svgrepo-com.svg" },
  { text: TaskEnum.ImplementacionTablas, icon: "/icons/table-list-svgrepo-com.svg" },
  { text: TaskEnum.CRUDsAxios, icon: "/icons/develop-svgrepo-com.svg" },
];

export const getTaskList = (filter: TaskEnum[]): Task[] => {
  return allTasks.filter(task => filter.includes(task.text as TaskEnum));
};
