(function main() {

// activate when desktop
    $("#btnon").click(function() { $(".icon").addClass("filled"); });
// deactivate when tablet or 
    $("#btnoff").click(function() { $(".icon").removeClass("filled"); });
// switch when clicked upon address
    $("#switch").click(function() { $(".icon").toggleClass("show"); });
})();