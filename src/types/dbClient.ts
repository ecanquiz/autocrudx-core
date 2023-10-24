export type DBClient = {    
    host?: string | undefined
    port?: number | undefined
    database?: string | undefined
    user?: string | undefined
    password?: string | (() => string | Promise<string>)
}
