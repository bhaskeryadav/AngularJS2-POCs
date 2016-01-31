System.register(['angular2/platform/browser', './components/oac/oac.component'], function(exports_1) {
    var browser_1, oac_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (oac_component_1_1) {
                oac_component_1 = oac_component_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            //bootstrap(OitComponent);
            //bootstrap(TextFieldComponent);
            browser_1.bootstrap(oac_component_1.OacComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map