(function(app){
    document.addEventListener("DOMContentLoaded", function(){
        ng.PlatformBrowserDynamic.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
