
//─────────────────────────────── Alert color ───────────────────────────────//


export enum AlertColor {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}


//─────────────────────────────── Languages ───────────────────────────────//


export enum LanguagesEnum {
  Spanish = 'es',
  English = 'en',
}

//─────────────────────────────── Titulo ───────────────────────────────//

export enum TitleSizeEnum {
  large = "large",
  small = "small"
}

//─────────────────────────────── Tareas ───────────────────────────────//

export enum TaskEnum {
  FixBrokenStyles = "task.fixStyles",
  RestructureViews = "task.restructureViews",
  FormValidation = "task.formValidation",
  ComponentOrganization = "task.componentOrganization",
  ComponentDocumentation = "task.componentDocumentation",
  EndpointCreation = "task.endpointCreation",
  NavigationOptimization = "task.navigationOptimization",
  NewRoutesCreation = "task.newRoutesCreation",
  ComponentImplementation = "task.componentImplementation",
  HooksImplementation = "task.hooksImplementation",
  UseOfI18n = "task.useOfI18n",
  UnitTestingImplementation = "task.unitTestingImplementation",
  TableImplementation = "task.tableImplementation",
  AxiosCRUDs = "task.axiosCRUDs",
}

export enum ProjectEntryTypeEnum {
  feature = 'feature',
  benefit = 'benefit',
}
