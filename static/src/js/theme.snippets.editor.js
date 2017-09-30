odoo.define('theme_louma.theme.snippets.editor', function (require) {
    'use strict';

    var widget = require('web_editor.widget');
    var animation = require('web_editor.snippets.animation');
    var options = require('web_editor.snippets.options');
    var snippet_editor = require('web_editor.snippet.editor');
    var editor = require('web_editor.editor');
    var MediaDialog = require('web_editor.widget').MediaDialog;
    var ajax = require('web.ajax');

    /*snippet_editor.Class.include({
     _get_snippet_url: function () {
     return '/website/snippets';
     }
     });


     var preventParentEmpty = {
     hide_remove_button: function () {
     this.$overlay.find('.oe_snippet_remove, .oe_snippet_move').toggleClass("hidden", !this.$target.siblings().length);
     },
     on_focus: function () {
     this._super();
     this.hide_remove_button();
     },
     on_clone: function ($clone) {
     this._super($clone);
     this.hide_remove_button();
     },
     on_remove: function () {
     this._super();
     this.hide_remove_button();
     },
     };*/


    options.registry.slider_ul = options.Class.extend({


        start: function () {
            var self = this;
            this._super();

        },
        add_li: function (type, value) {

            if (type !== "click") return;

            this.$target.append('<li class="tp-caption light_gray_bg sfb mt8 medium tp-resizeme animated fadeInLeft">' +
                '<i class="default_bg medium icon-check"></i>' +
                ' Write text here' +
                '</li>' +
                '<br/>');


        }

    });

    options.registry.js_image_dvt = options.Class.extend({


        start: function () {
            var self = this;
            this._super();

        },


        choose_image: function (type, value) {
            if (type !== "click") return;
            var $self = this;
            var $image = $('<img>');
            var editor = new MediaDialog(null, {only_images: true}, null, $image[0]);

            editor.on('save', this, function (media) {
                var src = $(media).attr('src');
                console.log(src);
                $self.$target.find('img').attr('src', src);


            });
            editor.on('cancel', this, function () {
                if (typeof callback === "function") {
                    callback();
                }
            });

            editor.open();


        }


    });


    options.registry.js_image_dvt_rvslider = options.Class.extend({


        start: function () {
            var self = this;
            this._super();

        },


        choose_image: function (type, value) {
            if (type !== "click") return;
            var $self = this;
            var $image = $('<img>');
            var editor = new MediaDialog(null, {only_images: true}, null, $image[0]);

            editor.on('save', this, function (media) {
                var src = $(media).attr('src');
                //console.log($self.$target.find('.tp-bgimg.defaultimg').attr('src'));
                $self.$target.find('.tp-bgimg.defaultimg').attr('src', src);
                $self.$target.find('.tp-bgimg.defaultimg').attr('data-src', src);
                $self.$target.find('.tp-bgimg.defaultimg').css('background-image', "url('" + src + "')");


            });
            editor.on('cancel', this, function () {
                if (typeof callback === "function") {
                    callback();
                }
            });

            editor.open();


        }


    });


    options.registry.js_revolution = options.Class.extend({


        start: function () {
            var self = this;
            this._super();

        },


        clean_for_save: function () {

            // Home 1
            $('.js_revolution .slider-banner').removeAttr('style');
            $('.js_revolution .slider-banner').attr('class', 'slider-banner');

            //Home 2
            $('.js_revolution .slider-banner-2').removeAttr('style');
            $('.js_revolution .slider-banner-2').attr('class', 'slider-banner-2 bullets-with-bg');

            // Home 3
            $('.js_revolution .slider-banner-fullscreen').removeAttr('style');
            $('.js_revolution .slider-banner-fullscreen').attr('class', 'slider-banner-fullscreen');


            //Home 4
            $('.js_revolution .slider-banner-3').removeAttr('style');
            $('.js_revolution .slider-banner-3').attr('class', 'slider-banner-3');


            //Home Video
            $('.js_revolution .slider-banner-fullscreen-alt-nav').removeAttr('style');
            $('.js_revolution .slider-banner-fullscreen-alt-nav').attr('class', ' slider-banner-fullscreen-alt-nav');


            $('.tp-loader').remove();
            $('.tp-bannertimer').remove();
            $('.tp-bullets').remove();
            $('.tp-leftarrow').remove();
            $('.tp-rightarrow').remove();


        },


    });


    options.registry.js_owl_carousel = options.Class.extend({

        start: function () {
            var self = this;
            this._super();

        },


        clean_for_save: function () {
            var $self = this;
            $self.$target.data('owlCarousel').unWrap();
            $self.$target.owlCarousel();

        },


    });

    return options;

});



