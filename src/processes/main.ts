//import { crud } from '@config/index'
import { consoleLog, getCustomData, getDataOfBD } from 'index'
import type { Crud } from 'types/crud'
import type { GetDataOfBDParams } from 'index'

export default async (
    crud: Crud, 
    getDataOfBDParams: GetDataOfBDParams,
    excludeFields: string[],
    consoleLogCustom:(dataJSON: any) => void
): Promise<void> => {
    const dataOfBD = await getDataOfBD(getDataOfBDParams)  
    const customData = getCustomData(getDataOfBDParams, dataOfBD, excludeFields)  
    if (crud.generate) {
        const backendProcess = (await import(`@stack/${crud.stackBackend}/process`)).default
        const frontendProcess = (await import(`@stack/${crud.stackFrontend}/process`)).default
        backendProcess(customData)
        customData.tableStructure = customData.tableStructureClean
        frontendProcess(customData)
    } else {
        consoleLog.propertyLists({ dataOfBD: false, customData: true})
        consoleLogCustom(customData)
    }
}

