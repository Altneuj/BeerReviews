var appModel = new AppModel();

var appView = new AppView({ model: appModel });

var beerRouter = new BeerRouter();
Backbone.history.start();
