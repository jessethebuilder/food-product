function AnysoftProducts(products, opts){
  if(typeof opts == 'undefined'){ opts = {}; }

  this.product_data = products;
  var app = this;

  var Product = Backbone.Model.extend({
  });


  var Products = Backbone.Collection.extend({
    url: '/products',
    model: Product,
  });

  var ProductView = Backbone.View.extend({
    model: Product,
    template: _.template($('#anysoft_products_product_template').html()),
    events: {
      'focus .attribute' : 'edit',
      'blur .attribute' : 'update'
    },
    // initialize: function(){
    //   this.$el.find('.attribute').each(function(){
    //     console.log(this);
    //   });
    // },
    edit: function(e){
      var targ = e.currentTarget;
      targ.select();
      // var box = $(targ).closest('.product');
      // box.find('.in')
    },
    update: function(e){
      var targ = $(e.currentTarget);
      var attr = targ.attr('name');
      var params = {};
      params[attr] = targ.val();
      this.model.save(params, {patch: true});
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));

      // this.$el.find('.attribute').each(function(){
      //   // Fake bottom border for animation
      //   var mock_border = $('<div class="input_bottom_border" />');
      //   mock_border.insertAfter(this);
      // });
      return this;
    }
  });

  var ProductsView = Backbone.View.extend({
    collection: Products,
    el: '#anysoft_products',
    initialize: function(){
    },
    render: function(){
      this.$el.empty();
      this.collection.each(function(model){
        var view = new  ProductView({model: model});
        this.$el.append(view.render().$el);
      }, this);

      return this;
    }
  });

  this.initProducts = function(){
    app.products = new Products;
    app.products.fetch().then(function(){
      app.products_view = new ProductsView({collection: app.products}).render();
    });
  }

  var Router = Backbone.Router.extend({
    routes: {
      "": "products"
    },
    products: function(){
      app.initProducts();
    }
  });

  app.router = new Router();
  Backbone.history.start();
}
