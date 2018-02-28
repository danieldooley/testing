
$(window).ready(function() {

    var plot_test = function () {
        console.log("test");

        GeoNetPlot.DrawTimespan("CHST", "01", "VEP", Date.UTC(2018, 1, 10, 11, 3, 0, 0), Date.UTC(2018, 1, 20, 15, 0, 0, 0), {
            elem: "plot",
            demean: false,
        })
    };

    var plot_test_float = function() {
        GeoNetPlot.DrawTimespan("URZ", "10", "HHZ", Date.UTC(2016, 10, 13, 11, 3, 0, 0), Date.UTC(2016, 10, 13, 12, 7, 0, 0), {})
    };

    function getEventID(){
        return $("#event_inp").val()
    }

    var plot_test_event = function() {
        GeoNetPlot.DrawEvent("WNKS", "20", "HNZ", getEventID(), {elem: "plot2"})
    };

    var plot_test_event_float = function() {
        GeoNetPlot.DrawEvent("URZ", "10", "HHZ", getEventID(), {})
    };

    $("#btnTest1").click(plot_test);
    $("#btnTest2").click(plot_test_float);

    $("#btnTest3").click(plot_test_event);
    $("#btnTest4").click(plot_test_event_float);

});