// Show dropdown menu on hover //
jQuery(document).ready(function() {
    jQuery(".btn-group.dropdown").hover(
        function () {
            jQuery('.dropdown-menu', this).stop(true, true).slideDown("400");
            jQuery(this).toggleClass('open');
        },
        function () {
            jQuery('.dropdown-menu', this).stop(true, true).slideUp("400");
            jQuery(this).toggleClass('open');
        }
    );
});