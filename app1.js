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
        soldOut: false,
        images: [
            {
                full: 'gem-01.gif',
                thumb: 'gem-02.gif',
            },
            {
                full: 'gem-03.gif',
                thumb: 'gem-04.gif',
            }
        ]
    },
    {
        name : 'Pentagonal Gem',
        price : 5.95,
        description: ". . .",
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: 'gem-05.gif',
                thumb: 'gem-06.gif',
            },
            {
                full: 'gem-07.gif',
                thumb: 'gem-08.gif',
            }
        ]
    }];
})();
