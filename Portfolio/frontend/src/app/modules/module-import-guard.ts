export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error('${moduleName} has already loaded. Import Core modules')
    }
}
