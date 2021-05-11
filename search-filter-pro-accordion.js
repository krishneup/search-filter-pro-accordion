// Search and Filter accordions
function accordionLoader() {

    //this will wrap in checkbox field only, you can add for other fields if needed
    jQuery("li[data-sf-field-input-type^='checkbox'] h4").wrap("<a class='accordion-title' href='#'></a>");

    // use this if you want to add icon after widget title, use custom css for styling
    jQuery("li[data-sf-field-input-type^='checkbox'] h4").append('  <i class="fa fa-chevron-circle-down icon-class" aria-hidden="true"></i>');

    // add class to input field 'ul' 
    jQuery("li[data-sf-field-input-type^='checkbox'] ul").addClass("accordion-list");

    var allAccordions = jQuery('.accordion-list').hide();

    //when element is clicked, toggle it for checkbox
    jQuery("li[data-sf-field-input-type^='checkbox'] a").click(function () {
        event.preventDefault();
        //allAccordions.slideUp();
        jQuery(this).next().slideToggle();
        jQuery(this).toggleClass("open");
        return false;
    });

}

accordionLoader();

//create the active accordion item
var last_saved_accordion = "";

jQuery(document).on("click", ".accordion-list", function () {
    last_saved_accordion = jQuery(this).parent().attr("class");
});

//when ajax is triggered
(function (jQuery) {
    "use strict";
    jQuery(document).on("sf:ajaxfinish", ".searchandfilter", function () {
        accordionLoader();
        if (last_saved_accordion != "") {
            jQuery("." + last_saved_accordion + " " + "a").next().show();
        }
    });
    
    jQuery(".accordion-list li input").html(function () {
        var value = jQuery( this ).val();
        jQuery(this).parent().addClass(value);
    });
    
}(jQuery));
