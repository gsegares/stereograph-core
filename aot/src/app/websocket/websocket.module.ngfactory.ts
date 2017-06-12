/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../src/app/websocket/websocket.module';
import * as import2 from '@angular/common';
import * as import3 from '../../../../src/app/websocket/websocket.service';
class WebSocketModuleInjector extends import0.ɵNgModuleInjector<import1.WebSocketModule> {
  _CommonModule_0:import2.CommonModule;
  _WebSocketModule_1:import1.WebSocketModule;
  __NgLocalization_2:import2.NgLocaleLocalization;
  __WebSocketService_3:import3.WebSocketService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  get _WebSocketService_3():import3.WebSocketService {
    if ((this.__WebSocketService_3 == null)) { (this.__WebSocketService_3 = new import3.WebSocketService()); }
    return this.__WebSocketService_3;
  }
  createInternal():import1.WebSocketModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._WebSocketModule_1 = new import1.WebSocketModule();
    return this._WebSocketModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.WebSocketModule)) { return this._WebSocketModule_1; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_2; }
    if ((token === import3.WebSocketService)) { return this._WebSocketService_3; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const WebSocketModuleNgFactory:import0.NgModuleFactory<import1.WebSocketModule> = new import0.NgModuleFactory<any>(WebSocketModuleInjector,import1.WebSocketModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3N0ZXJlb2dyYXBoL2ZyYW1ld29yay9jb3JlL3NyYy9hcHAvd2Vic29ja2V0L3dlYnNvY2tldC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvc3RlcmVvZ3JhcGgvZnJhbWV3b3JrL2NvcmUvc3JjL2FwcC93ZWJzb2NrZXQvd2Vic29ja2V0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
