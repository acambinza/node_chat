module.exports = function(application){

    application.get('/', function(req, res){
    	/* chamar o controller do index */
       application.app.controllers.index.home(application, req, res);
    });

}