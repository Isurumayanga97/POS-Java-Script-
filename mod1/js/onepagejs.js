$(document).ready(function () {
    $("#dashboard").show();
    $("#customerset").hide()
    $("#itemset").hide();
    $("#orderset").hide();

    $('#dashboradnav').click(function () {
        $("#dashboard").show();
        $("#customerset").hide();
        $("#itemset").hide();
        $("#orderset").hide();
    })

    $('#customernav').click(function () {
        $("#dashboard").hide();
        $("#customerset").show();
        $("#itemset").hide();
        $("#orderset").hide();
    })

    $('#itemnav').click(function () {
        $("#dashboard").hide();
        $("#customerset").hide();
        $("#itemset").show();
        $("#orderset").hide();
    })

    $('#ordernav').click(function () {
        $("#dashboard").hide();
        $("#customerset").hide();
        $("#itemset").hide();
        $("#orderset").show();
    })


});