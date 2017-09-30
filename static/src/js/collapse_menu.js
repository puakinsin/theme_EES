
 jQuery(document).ready(function() {

        !function(a) {
    "use strict";
    var b= {
        initialised:!1,
        version:1,
        mobile:!1,
        container:a("#portfolio-item-container"),
        blogContainer:a("#blog-item-container"),
        portfolioElAnimation:!0,
        init:function() {
            if(!this.initialised) {
                this.initialised=!0,

                this.collapseArrows();



            }
        }
        ,

        collapseArrows:function() {
            a(".category-widget-btn").on("click", function(b) {
                var c=a(this), d=c.closest("li");
                d.hasClass("open")?d.find("ul").slideUp(400, function() {
                    d.removeClass("open");
                    c.removeClass("open");
                }
                ):d.find("ul").slideDown(400, function() {
                    d.addClass("open");
                    c.addClass("open");
                }
                ), b.preventDefault()
            }
            )
        }



    }
    ;
    b.init();




}

(jQuery),
function(a) {
    "function"==typeof define&&define.amd?define(["jquery"], a): "object"==typeof exports?module.exports=a(require("jquery")): a(jQuery)
}


});
