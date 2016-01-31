System.register(['angular2/core', 'angular2/http', './oac.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, oac_service_1;
    var OacComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (oac_service_1_1) {
                oac_service_1 = oac_service_1_1;
            }],
        execute: function() {
            OacComponent = (function () {
                function OacComponent(_oacService) {
                    this._oacService = _oacService;
                    this.bindModelDataChange = new core_1.EventEmitter();
                }
                OacComponent.prototype.search = function (term) {
                    this.items = this._oacService.search(term);
                };
                OacComponent.prototype.setData = function (data) {
                    this.bindModelData = data;
                    this.bindModelDataChange.emit(data);
                    console.log(data);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], OacComponent.prototype, "bindModelData", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], OacComponent.prototype, "bindModelDataChange", void 0);
                OacComponent = __decorate([
                    core_1.Component({
                        selector: 'asset-oac',
                        templateUrl: 'app/components/oac/oactemplate.html',
                        providers: [http_1.HTTP_PROVIDERS, oac_service_1.OacService],
                        styles: ["\n  .overlay{\n  position: absolute;\n  top: auto;\n  left: auto;\n  width: auto;\n  height: auto;\n  z-index: 10;\n  background-color: rgba(128,128,128,1.0);\n}\n  "]
                    }), 
                    __metadata('design:paramtypes', [oac_service_1.OacService])
                ], OacComponent);
                return OacComponent;
            })();
            exports_1("OacComponent", OacComponent);
        }
    }
});
//# sourceMappingURL=oac.component.js.map