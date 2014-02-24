!(function(M, Backbone, $) {
  var App = new M.Application;

  Marionette.Behaviors.behaviorsLookup = function() { return window.Behaviors; }

  var View = M.ItemView.extend({
    template: _.template("<h1>i am a headline</h1>"),
    behaviors: {
      ToolTip: {
        position: "bottom center",
        content: "hello world"
      }
    }
  });

  $(function() { App.start(); });

  App.on('start', function() {
    App.addRegions({
      'Zone': 'div'
    });
    App.Zone.show(new View({
      model: new Backbone.Model({})
    }));
  });

})(Backbone.Marionette, Backbone, $);
