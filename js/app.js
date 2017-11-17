$(function() {
    "use strict";
    const model = {
        currentCat: null,
        cats: [
            {
                clickCount : 0,
                name : 'Tabby',
                imgSrc : 'img/434164568_fea0ad4013_z.jpg',
                imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
            },
            {
                clickCount : 0,
                name : 'Tiger',
                imgSrc : 'img/4154543904_6e2428c421_z.jpg',
                imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
            },
            {
                clickCount : 0,
                name : 'Scaredy',
                imgSrc : 'img/22252709_010df3379e_z.jpg',
                imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
            },
            {
                clickCount : 0,
                name : 'Shadow',
                imgSrc : 'img/1413379559_412a540d29_z.jpg',
                imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
            },
            {
                clickCount : 0,
                name : 'Sleepy',
                imgSrc : 'img/9648464288_2516b35537_z.jpg',
                imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
            }
        ]
    };


    const controller = {
        init: function () {
            model.currentCat = model.cats[0];
            listView.init();
            catView.init();
        },

        getAllCats : function () {
            return model.cats;
        },

        getCurrentCat: function () {
            return model.currentCat;
        },

        incrementCounter: function () {
            model.currentCat.clickCount ++;
            catView.render();
        },

        setCurrentCat: function (cat) {
            model.currentCat = cat;
        }

    };

    const listView = {
        init: function() {
            this.list = $('#cat-list');
            this.render();
        },

        render: function() {
            const cats = controller.getAllCats();
            cats.forEach(cat => {
                let elem = $(`<li>${cat.name}</li>`);
                elem.click(function() {
                    controller.setCurrentCat(cat);
                    catView.render();
                });
                this.list.append(elem);
            });
        }
    };

    const catView = {
        init: function () {
            this.catName = $('#cat-name');
            this.catCount = $('#cat-count');
            this.catImg = $('#cat-img');
            this.catImg.click(function () {
                controller.incrementCounter();
            });
            this.render();
        },

        render: function () {
            const currentCat = controller.getCurrentCat();
            this.catName.text(currentCat.name);
            this.catCount.text(`AlreadyClicked: ${currentCat.clickCount}`);
            this.catImg.attr('src', currentCat.imgSrc);
        }
    };

    controller.init();
}());