var ReviewView = Backbone.View.extend({
  template: Handlebars.compile($("#review-template").html()),

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove)
  },

  render :function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  },

  events: {
    "click .remove": 'removeMe'
  },

  removeMe: function(){
    this.model.destroy();
  }
})
