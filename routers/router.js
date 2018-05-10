var BeerRouter = Backbone.Router.extend({
  routes: {
    'beers/:id': 'showReviews',
    '*default': 'showBeers'
  },

  showReviews: function (id) {
    // turn our string into a number
    id = parseInt(id);

    var allBeers = appModel.get('beers');

    var currentBeer = allBeers.findWhere({ id: id });

    appModel.set('current_beer', currentBeer);
    appModel.set('show_reviews', true);
  },

  showBeers: function () {
    appModel.set('show_reviews', false);
  }
});
