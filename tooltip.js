window.Behaviors = window.Behaviors || {};

!(function(M, Behaviors) {
  Behaviors.ToolTip = M.Behavior.extend({
    onShow: function() {
      new Tooltip({
        target: this.view.el,
        position: this.options.position,
        content: this.options.content,
        classes: 'tooltip-theme-arrows'
      });
    }
  });
})(Backbone.Marionette, window.Behaviors);
