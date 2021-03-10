$(".ino").keypress(function() {
    $(".introno").show();
    $(".intro").hide();
});

$(".iyes").keypress(function() {
    $(".introyes").show();
    $(".intro").hide();
});

$(".iyespic").click(function() {
    $(".moneygrab").show();
    $(".introyes").hide();
});

$(".splurge").click(function() {
    $(".temptations").show();
    $(".moneygrab").hide();
});

$(".whygif").dblclick(function() {
    $(".temptations").show();
    $(".citizen").hide();
});

$(".leave").click(function() {
    $(".citizen").show();
    $(".moneygrab").hide();
});

$(".tempics").mouseenter(function() {
    $(".tempdes").slideDown();
});

$(".tempics").mouseleave(function() {
    $(".tempdes").slideUp();
});

$(".tempunder").click(function() {
    $(".message").show();
    $(".temptations").hide();
});

$(".tempunder").click(function() {
    $(".messageblock").show();
    $(".temptations").hide();
});

$(".noback").hover(function() {
    $(".intro").show();
    $(".introno").hide();
});

$(".shoem").mouseenter(function() {
    $(".shoeh").css("color", "#d1d1e0");
});

$(".shoem").mouseleave(function() {
    $(".shoeh").css("color", "pink");
});

$(".phonem").mouseenter(function() {
    $(".phoneh").css("color", "#d1d1e0");
});

$(".phonem").mouseleave(function() {
    $(".phoneh").css("color", "pink");
});

$(".catm").mouseenter(function() {
    $(".cath").css("color", "#d1d1e0");
});

$(".catm").mouseleave(function() {
    $(".cath").css("color", "pink");
});

$(".tempunder").mouseenter(function() {
    $(".tempunder").css("color", "#d1d1e0");
});

$(".tempunder").mouseleave(function() {
    $(".tempunder").css("color", "pink");
});

$(".shoem").dblclick(function() {
    $(".messageblock").hide();
    $(".finalshoe").show();
});

$(".phonem").dblclick(function() {
    $(".messageblock").hide();
    $(".finalphone").show();
});

$(".catm").dblclick(function() {
    $(".messageblock").hide();
    $(".finalcat").show();
});

$("h4").click(function() {
    $(".messageblock").show();
    $(".finalcat").hide();
});

$("h4").click(function() {
    $(".messageblock").show();
    $(".finalshoe").hide();
});

$("h4").click(function() {
    $(".messageblock").show();
    $(".finalphone").hide();
});