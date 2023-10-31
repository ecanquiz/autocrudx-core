import { consoleLog, getCustomData, getDataOfBD } from '../index'
import type { GetDataOfBDParams } from '../index'
import type { Config } from '../types/config'

export default async (
    config: Config, 
    consoleLogCustom:(dataJSON: any) => void
): Promise<void> => {   
    const getDataOfBDParams: GetDataOfBDParams = {
        schema: config.crud.schema || 'public', 
        tableMaster: config.crud.tableMaster || 'users',
    }
    const excludeFields: string[] = config.crud.excludeFields ?? []
    const dataOfBD = await getDataOfBD(config.dbConfig, getDataOfBDParams)  
    const customData = getCustomData(config.crud, getDataOfBDParams, dataOfBD, excludeFields)

    if (config.crud.generate) {
        if (config.crud.stackBackend) {
            const backendProcess = (await import(`@stack/${config.crud.stackBackend}/process`)).default
            backendProcess(customData)
        } else console.log('No backend stack')
        if (config.crud.stackFrontend) {
            customData.tableStructure = customData.tableStructureClean
            const frontendProcess = (await import(`@stack/${config.crud.stackFrontend}/process`)).default
            frontendProcess(customData)
        } else console.log('No frontend stack')
    } else {
        consoleLog.propertyLists({ dataOfBD: false, customData: true})
        consoleLogCustom(customData)
    }
}
