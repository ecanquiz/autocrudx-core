export type Crud = {  
    schema : string
    tableMaster: string
    tableMasterIsHelper: boolean
    excludeFields: string[]
    generate: boolean
    stackBackend: string,
    stackFrontend: string
  }