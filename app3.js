(function(){
    var app = angular.module('store', [ ]);

    // app.directive('productTitle', function(){
    //     return
    //     {
    //         restrict: 'E',
    //         templateUrl: 'product-title.html'
    //     };
    // });

    // app.directive('productTitle', function(){
    //     return
    //     {
    //         restrict: 'A',
    //         templateUrl: 'product-title.html'
    //     };
    // });

    app.directive('productPanels', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                this.tab = 1;
                this.selectTab = function(setTab)
                {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab)
                {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panels'
        };
    });

    app.controller('StoreController', function(){           //Notice that controller is attached inside our app
        this.products = [
            {
                name: 'Awesome Multi-touch Keyboard',
                price: 250.00,
                description: "...",
                images: [
                    {
                        full: 'gem-01.gif',
                        thumb: 'gem-02.gif',
                    },
                    {
                        full: 'gem-03.gif',
                        thumb: 'gem-04.gif',
                    }
                ],
                reviews: [
                    {
                        stars: 5,
                        body: "I love this product!",
                        author: "joe@thomas.com"
                    },
                    {
                        stars: 1,
                        body: "This product sucks",
                        author: "tim@hater.com"
                    }
                ]
            },
            {
                name : 'Pentagonal Gem',
                price : 5.95,
                description: ". . .",
                images: [
                    {
                        full: 'gem-05.gif',
                        thumb: 'gem-06.gif',
                    },
                    {
                        full: 'gem-07.gif',
                        thumb: 'gem-08.gif',
                    }
                ],
                reviews: [
                    {
                        stars: 5,
                        body: "I love this product!",
                        author: "joe@thomas.com"
                    },
                    {
                        stars: 1,
                        body: "This product sucks",
                        author: "tim@hater.com"
                    }
                ]
            }
        ];
    });

    // app.controller("PanelController", function(){
    //     this.tab = 1;
    //     this.selectTab = function(setTab)
    //     {
    //         this.tab = setTab;
    //     };
    //     this.isSelected = function(checkTab)
    //     {
    //         return this.tab === checkTab;
    //     };
    // });

    app.controller("ReviewController", function(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();
