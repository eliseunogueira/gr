if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
	  console.log("ServiceWorker Activated");
	   caches.delete('GermanOuinoCache5.0.0');
       caches.delete('GermanOuinoDynamic5.0.0');		
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}