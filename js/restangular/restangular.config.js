angular
    .module('app.restangular')
    .config(restangularConfig);

restangularConfig.$inject = ['RestangularProvider'];
function restangularConfig($restAngular) {
    $restAngular.setBaseUrl("http://localhost:3002/service");
    //$restAngular.addRequestInterceptor(function (element, operation, what, url, headers, params, httpConfig) {
    //    if (operation === "remove") {
    //        return undefined;
    //    }
    //    return element;
    //});
}
