/**
 * Created by ddooley on 18/08/17.
 */


function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

// var _plotSeis = function (dataRecords, div) {
//     div.selectAll('div.myseisplot').remove();
//     var byChannel = wp.miniseed.byChannel(dataRecords);
//     var keys = Object.keys(byChannel);
//     for (var i = 0; i < keys.length; i++) {
//         var key = keys[i];
//         var segments = miniseed.merge(byChannel[key]);
//         div.append('p').html('Plot for ' + key);
//         div.append('div').attr("class", "seis").selectAll('p').data(segments).enter().append('p').text(function (d) {
//             return d.start().toISOString() + " to " + d.end().toISOString() + " nums:" + d.numPoints() + " " + d.sampleRate();
//         });
//         var svgdiv = div.append('div').attr('class', 'myseisplot');
//         if (segments.length > 0) {
//             var startEnd = wp.findStartEnd(segments);
//             //var seismogram = new wp.chart(svgdiv, segments, null, null);
//             var seismogram = new wp.chart(svgdiv, segments, null, null);
//             seismogram.draw();
//             var markers = [];
//             markers.push({markertype: 'pick', name: 'P', time: new Date(Date.parse('2017-03-01T20:19:05.250Z'))});
// //markers.push({ markertype: 'pick', name: 'S', time: new Date(Date.parse('2017-02-27T22:59:20Z'))});
//             seismogram.appendMarkers(markers);
//         }
//     }
//     if (keys.length == 0) {
//         divs.append('p').html('No data found');
//     }
// };

Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

function createChart(id, array) {
     return new CanvasJS.Chart(id, {
        zoomEnabled: true,
        title: {
            test: id + " Sesimic Activity"
        },
        toolTip: {
            shared: true
        },
        legend: {
            verticalAlign: "top",
            horizontalAlign: "center",
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "calibri",
            fontColor: "dimGrey"
        },
        axisX: {
            title: "Unix Timestamp"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            //xValueType: "dateTime",
            showInLegend: true,
            name: id + " Seismic Activity",
            dataPoints: array
        }]
    })
}

function join(toAdd, record){

    console.log(record);

    var start = record.header.start.getUnixTime();
    var dur = record.header.end.getUnixTime() - start;
    var int = dur / record.length;

    console.log(dur);

    for (var i = 0; i < record.length; i++){
        toAdd.push(
            {
                y: record.decompData[i],
                x: start + (int * i)
            }
        )
    }

    return toAdd;
}


var miniseed = seisplotjs_miniseed;
var wp = seisplotjs_waveformplot;

var topdiv = wp.d3.select('div.miniseed');
console.log(topdiv);

console.log("MINISEED:");
console.log(miniseed);

var socket = io();

var records = {};
socket.on("record", function (r) {
    var record = JSON.parse(r);
    console.log(record.Network + "." + record.Station + "." + record.Location + "." + record.Channel);
    var arraybuf = _base64ToArrayBuffer(record.Raw);
    var newDataRec = miniseed.parseDataRecords(arraybuf)[0];
    newDataRec.decompress();

    var id = newDataRec.header.netCode + "." +
        newDataRec.header.staCode + "." +
        newDataRec.header.locCode + "." +
        newDataRec.header.chanCode;

    var rec = records[id];

    if (!rec) {
        var div = topdiv.append("div");
        div.attr("id", id);
        div.attr("class", "graph_holder");
        rec = {
            id: id,
            data: [],
            toAdd: [],
            amount: 5,
            wait: 100
        };

        rec.update = (function(rec) {return function(){
            if (rec.toAdd.length > 0) {
                var temp = rec.toAdd.splice(0, Math.min(rec.amount, rec.toAdd.length));
                for (var i = 0; i < temp.length; i++){
                    rec.data.push(temp[i]);
                }
                if (rec.data.length > 2000) {
                    rec.data.splice(0, rec.amount);
                }
            }

            rec.chart.render();
            setTimeout(rec.update, rec.wait);
        }})(rec);

        records[id] = rec;

        rec.chart = createChart(rec.id, rec.data);

        setTimeout(rec.update, rec.wait);
    }

    console.log(rec.data);
    console.log(rec.chart);

    //rec.wait = (newDataRec.header.end - newDataRec.header.start) / newDataRec.length;
    console.log("Wait: " + rec.wait);
    var left = rec.toAdd.length;
    if (left > 0){
        console.log("Remains: " + left);
        rec.amount = rec.amount + 1
        console.log("Amount: " + rec.amount);
    } else {
        rec.amount = Math.min(5, rec.amount-1)
    }
    rec.toAdd = join(rec.toAdd, newDataRec);


        // rec.arr.push(newDataRec);
        // if (rec.arr.length > 10) {
        //     rec.arr.shift()
        // }

    //rec.div.html("");
    //_plotSeis(rec.arr, rec.div)
});