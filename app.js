// function StoreController()
// {
//     alert('Welcome, Gregg!');
// }
(function(){
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){           //Notice that controller is attached inside our app
        this.product = gem;
    });

    var gem = {
        name : 'Dodecahedron',
        price : 2.95,
        description: '. . .',
    }
})();
