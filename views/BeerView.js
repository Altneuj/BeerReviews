BeerView = Backbone.View.extend({

 template: Handlebars.compile($('#beer-template').html()),

 initialize:function() {
   this.listenTo(this.model, 'destroy', this.remove);
 },

render: function() {
  this.$el.html(this.template(this.model.toJSON()));
  return this
},
events: {
  'click .remove': 'removeThis'
},

removeThis : function(){
  this.model.trigger('destroy', appModel.get('beers').remove(this.model))
}
});
