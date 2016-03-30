// function StoreController()
// {
//     alert('Welcome, Gregg!');
// }
(function(){
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){           //Notice that controller is attached inside our app
        this.products = gems;
    });

    var gems = [
    {
        name : 'Dodecahedron',
        price : 2.95,
        description: '. . .',
        canPurchase: true,
        soldOut: false
    },
    {
        name : 'Pentagonal Gem',
        price : 5.95,
        description: ". . .",
        canPurchase: true,
        soldOut: false
    }];
})();
