// preventing reimport of Core - it only should be imported into the root/app module
//v1 :
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      "${moduleName} has already been loaded. Import Core Modules in the AppModule only."
    );
  }
}

//import {throwIfAlreadyLoaded } from './throwIfAlreadyLoaded.ts';
//export class CoreModule {
//    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
//               throwIfAlreadyLoaded(parentModule, 'CoreModule'); } }
// v2:
// export class EnsureModuleLoadedOnceGuard {
//   constructor(targetModule: any) {
//     if (targetModule) {
//       throw new Error(
//         "${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only."
//       );
//     }
//   }
// }
// import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
// export class CoreModule extends EnsureModuleLoadedOnceGuard {
//     constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
//         super(parentModule);
//     }
// }
