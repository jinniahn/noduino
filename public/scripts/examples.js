define(function() {
  
  var e1 = null;
  var e2 = null;
  var e3 = null;
  function Events() {
    
  }
  
  Events.bind = function() {
    /**
     * Exampel #1
     */
    $('#e1-buttonConnect').click(function(e) {
      e.preventDefault();
      
      $('#e1-exampleConnection .alert').addClass('hide');    
      $('#e1-exampleConnection .alert-info').removeClass('hide');
      $('#e1-exampleConnection .alert-info').html('Trying to connect to your Arduino…');      
      require(['example-1'], function(example) {
        example.handle();
      });      
    });
    
    $('#e2-buttonStop').click(function(e) {
      e.preventDefault();
      e2.stop();
    });

    $('#e2-buttonConnect').click(function(e) {
      e.preventDefault();
      require(['example-2'], function(example) {
        e2 = example;
        example.handle();
      });      
    });
    
    $('#e2-buttonStart').click(function(e) {
      e.preventDefault();
      e2.start($('#e2-pinValue').val(), $('#e2-interval').val());
    });
    
    
    $('#e3-buttonConnect').click(function(e) {
      e.preventDefault();
      
      $('#e3-exampleConnection .alert').addClass('hide');    
      $('#e3-exampleConnection .alert-info').removeClass('hide');
      $('#e3-exampleConnection .alert-info').html('Trying to connect to your Arduino…');      
      require(['example-3'], function(example) {
        example.handle();
      });      
    });
    
    
  };
  
  return Events;
});
