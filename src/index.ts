import consoleLog     from './utils/consoleLog'
import rendering      from './utils/rendering';
import fn             from './utils/fn'
import { singular }   from './utils/grammaticalNumber'
import { uCamelCase } from './utils/nomenclature'
import db             from './modules/db';
import getCustomData  from './processes/getCustomData'
import getDataOfBD    from './processes/getDataOfBD'
import main           from './processes/main'

import type {
    GetDataOfBDParams,
    GetDataOfBDReturn,
    DataOfBD,
    fieldStructure,
    TableDetailsOfMaster
} from './types/db'

import type {
    ParamsAll,
    Rendering,
    tableDetailsOfMasterCustomized
} from './types/rendering'

export {
    main,
    consoleLog,
    db,
    fn,
    getCustomData,
    getDataOfBD,
    rendering,
    singular,
    uCamelCase,

    // Types:
    GetDataOfBDParams,
    GetDataOfBDReturn,
    DataOfBD,
    fieldStructure,
    TableDetailsOfMaster,
    ParamsAll,
    Rendering,
    tableDetailsOfMasterCustomized
}
