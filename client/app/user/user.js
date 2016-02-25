app.controller("UserController", function($scope, $window, Listings){

  $scope.data = {};

  var resetNewListing = function() {
    $scope.newListing = {
      formatted_address: "",
      street_address: "",
      city_name: "",
      zip_code: "",
      start_time: "",
      end_time: "",
      avail_days: [],
      price: 0
    }
  };

  resetNewListing();

<<<<<<< 5e4721349e903f2f66e3ca9fbc36c61042085109
  $scope.autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById("post-address-input")),
    {types: ["geocode"]});

  $scope.createListing = function(){
=======
  $scope.createListing = function() {
>>>>>>> [Setup] Adopted list logic from homepage to user page

    // parse through formatted_address or google place object
    // to fill in individual fields in $scope.newListing

    // send object to be posted
    Listings.sendAddress("post-address-input", function(results) {
      results.price = $scope.newListing.price;
      results.current_username = 1; //CHANGE LATER
      Listings.postListing(results).then(function(respdata) {
        resetNewListing();
      });
    });
  };

  var getCurrentListings = function() {
    var jwt = $window.localStorage.getItem('authentication');
    console.log(jwt);
    //Listings.getUserListings()
  }

  getCurrentListings();
});
