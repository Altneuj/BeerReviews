var BeerDetailView = Backbone.View.extend({
  tagName: 'reviews-container-inner',

  template: Handlebars.compile($('#beer-detail-template').html()),

  events: {
    "click .submit-review": 'createReview'

  },

  initialize: function(){
    this.listenTo(this.model.get('reviews'), 'add', this.renderReviews)
  },

  createReview: function(){
    var newReview = new ReviewModel({
      name: $('#review-name-input').val(),
      text: $('#review-notes-input').val()
    })
      $('#review-name-input').val('')
      $('#review-notes-input').val('')

  this.model.get('reviews').add(newReview)
},

  renderReviews: function () {
  this.model.get('reviews').each(function (m) {
    this.renderReview(m);
  }, this);
},
renderReview: function (review) {
  var reviewView = new ReviewView({ model: review });
  this.$('.reviews-list').append(reviewView.render().el);
},
  render: function () {
  this.$el.html(this.template(this.model.toJSON()));

  this.renderReviews();

  return this;
}
});
