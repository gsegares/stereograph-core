/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../src/app/keyboard/keyboard.module';
import * as import2 from '@angular/common';
import * as import3 from '../../../../src/app/keyboard/keyboard.service';
class KeyboardModuleInjector extends import0.ɵNgModuleInjector<import1.KeyboardModule> {
  _CommonModule_0:import2.CommonModule;
  _KeyboardModule_1:import1.KeyboardModule;
  __NgLocalization_2:import2.NgLocaleLocalization;
  __KeyboardService_3:import3.KeyboardService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  get _KeyboardService_3():import3.KeyboardService {
    if ((this.__KeyboardService_3 == null)) { (this.__KeyboardService_3 = new import3.KeyboardService()); }
    return this.__KeyboardService_3;
  }
  createInternal():import1.KeyboardModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._KeyboardModule_1 = new import1.KeyboardModule();
    return this._KeyboardModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.KeyboardModule)) { return this._KeyboardModule_1; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_2; }
    if ((token === import3.KeyboardService)) { return this._KeyboardService_3; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const KeyboardModuleNgFactory:import0.NgModuleFactory<import1.KeyboardModule> = new import0.NgModuleFactory<any>(KeyboardModuleInjector,import1.KeyboardModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3N0ZXJlb2dyYXBoL2ZyYW1ld29yay9jb3JlL3NyYy9hcHAva2V5Ym9hcmQva2V5Ym9hcmQubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3N0ZXJlb2dyYXBoL2ZyYW1ld29yay9jb3JlL3NyYy9hcHAva2V5Ym9hcmQva2V5Ym9hcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
