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

var _plotSeis = function (dataRecords, div) {
    div.selectAll('div.myseisplot').remove();
    var byChannel = wp.miniseed.byChannel(dataRecords);
    var keys = Object.keys(byChannel);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var segments = miniseed.merge(byChannel[key]);
        div.append('p').html('Plot for ' + key);
        div.append('div').attr("class", "seis").selectAll('p').data(segments).enter().append('p').text(function (d) {
            return d.start().toISOString() + " to " + d.end().toISOString() + " nums:" + d.numPoints() + " " + d.sampleRate();
        });
        var svgdiv = div.append('div').attr('class', 'myseisplot');
        if (segments.length > 0) {
            var startEnd = wp.findStartEnd(segments);
            //var seismogram = new wp.chart(svgdiv, segments, null, null);
            var seismogram = new wp.chart(svgdiv, segments, null, null);
            seismogram.draw();
            var markers = [];
            markers.push({markertype: 'pick', name: 'P', time: new Date(Date.parse('2017-03-01T20:19:05.250Z'))});
//markers.push({ markertype: 'pick', name: 'S', time: new Date(Date.parse('2017-02-27T22:59:20Z'))});
            seismogram.appendMarkers(markers);
        }
    }
    if (keys.length === 0) {
        divs.append('p').html('No data found');
    }
};


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
    var loc = records[newDataRec.header.locCode];
    if (!loc) {
        loc = {};
        records[newDataRec.header.locCode] = loc;
    }
    var rec = loc[newDataRec.header.chanCode];
    if (!rec) {
        rec = {};
        rec.div = topdiv.append("div");
        rec.arr = [];
        loc[newDataRec.header.chanCode] = rec;
    }
    rec.arr.push(newDataRec);
    if (rec.arr.length > 10) {
        rec.arr.shift()
    }
    console.log(newDataRec);
    rec.div.html("");
    _plotSeis(rec.arr, rec.div)
});