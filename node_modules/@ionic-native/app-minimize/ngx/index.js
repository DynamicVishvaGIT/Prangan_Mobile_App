import { __extends } from "tslib";
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var AppMinimize = /** @class */ (function (_super) {
    __extends(AppMinimize, _super);
    function AppMinimize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppMinimize.prototype.minimize = function () { return cordova(this, "minimize", {}, arguments); };
    AppMinimize.pluginName = "AppMinimize";
    AppMinimize.plugin = "cordova-plugin-appminimize";
    AppMinimize.pluginRef = "plugins.appMinimize";
    AppMinimize.repo = "https://github.com/tomloprod/cordova-plugin-appminimize";
    AppMinimize.platforms = ["Android"];
    AppMinimize.decorators = [
        { type: Injectable }
    ];
    return AppMinimize;
}(IonicNativePlugin));
export { AppMinimize };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1taW5pbWl6ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUErQlYsK0JBQWlCOzs7O0lBTWhELDhCQUFROzs7Ozs7O2dCQVBULFVBQVU7O3NCQS9CWDtFQWdDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgTWluaW1pemVcbiAqIEBkZXNjcmlwdGlvblxuICogQXBwTWluaW1pemUgaXMgYSBwbHVnaW4gdG8gbWluaW1pemUgdGhlIGFwcGxpY2F0aW9uIG9uIGFuZHJvaWQgZGV2aWNlc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUGxhdGZyb20gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG4gKiBpbXBvcnQgeyBBcHBNaW5pbWl6ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLW1pbmltaXplL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIGFwcE1pbmltaXplOiBBcHBNaW5pbWl6ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5wbGF0Zm9ybS5yZWdpc3RlckJhY2tCdXR0b25BY3Rpb24oKCkgPT4ge1xuICogICAgdGhpcy5hcHBNaW5pbWl6ZS5taW5pbWl6ZSgpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwTWluaW1pemUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBtaW5pbWl6ZScsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuYXBwTWluaW1pemUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvbWxvcHJvZC9jb3Jkb3ZhLXBsdWdpbi1hcHBtaW5pbWl6ZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcE1pbmltaXplIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTWluaW1pemVzIHRoZSBhcHBsaWNhdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1pbmltaXplKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=