var GeoNetPlot = (function(){

    var exp = {};

    const logo = 'data:image/png;base64,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';
    const logo_link = 'https://geonet.org.nz';
    const logo_text = 'Data Provided by Geonet';

    const apiurl = "https://beta-service.geonet.org.nz/fdsnws/";
    const samplerate_break = 40000;

    var jq = $ || jQuery;
    if (!jq){
        console.error("Geonet Plot requires JQuery");
        return;
    }
    if (!Plotly) {
        console.error("Geonet Plot require PlotlyJS");
        return;
    }

    //include sesiplotjs_miniseed_11s_standalone.js
    (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.seisplotjs_miniseed = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

        exports.createComplex = createComplex;

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// QuakeML classes

        var Quake = exports.Quake = function () {
            function Quake() {
                // what is essential???

                _classCallCheck(this, Quake);
            }

            _createClass(Quake, [{
                key: 'eventid',
                value: function eventid(value) {
                    return arguments.length ? (this._eventid = value, this) : this._eventid;
                }
            }, {
                key: 'time',
                value: function time(value) {
                    return arguments.length ? (this._time = value, this) : this._time;
                }
            }, {
                key: 'latitude',
                value: function latitude(value) {
                    return arguments.length ? (this._latitude = value, this) : this._latitude;
                }
            }, {
                key: 'longitude',
                value: function longitude(value) {
                    return arguments.length ? (this._longitude = value, this) : this._longitude;
                }
            }, {
                key: 'depth',
                value: function depth(value) {
                    return arguments.length ? (this._depth = value, this) : this._depth;
                }
            }, {
                key: 'description',
                value: function description(value) {
                    return arguments.length ? (this._description = value, this) : this._description;
                }
            }, {
                key: 'magnitude',
                value: function magnitude(value) {
                    return arguments.length ? (this._magnitude = value, this) : this._magnitude;
                }
            }, {
                key: 'arrivals',
                value: function arrivals(value) {
                    return arguments.length ? (this._arrivals = value, this) : this._arrivals;
                }
            }]);

            return Quake;
        }();

        var Magnitude = exports.Magnitude = function () {
            function Magnitude(mag, type) {
                _classCallCheck(this, Magnitude);

                this._mag = mag;
                this._type = type;
            }

            _createClass(Magnitude, [{
                key: 'mag',
                value: function mag(value) {
                    return arguments.length ? (this._mag = value, this) : this._mag;
                }
            }, {
                key: 'type',
                value: function type(value) {
                    return arguments.length ? (this._type = value, this) : this._type;
                }
            }]);

            return Magnitude;
        }();

        var Arrival = exports.Arrival = function () {
            function Arrival(phase, pick) {
                _classCallCheck(this, Arrival);

                this._phase = phase;
                this._pick = pick;
            }

            _createClass(Arrival, [{
                key: 'phase',
                value: function phase(value) {
                    return arguments.length ? (this._phase = value, this) : this._phase;
                }
            }, {
                key: 'publicID',
                value: function publicID(value) {
                    return arguments.length ? (this._publicID = value, this) : this._publicID;
                }
            }, {
                key: 'pick',
                value: function pick(value) {
                    return arguments.length ? (this._pick = value, this) : this._pick;
                }
            }]);

            return Arrival;
        }();

        var Pick = exports.Pick = function () {
            function Pick(time, networkCode, stationCode, locationCode, channelCode) {
                _classCallCheck(this, Pick);

                this._time = time;
                this._networkCode = networkCode;
                this._stationCode = stationCode;
                this._locationCode = locationCode;
                this._channelCode = channelCode;
            }

            _createClass(Pick, [{
                key: 'publicID',
                value: function publicID(value) {
                    return arguments.length ? (this._publicID = value, this) : this._publicID;
                }
            }, {
                key: 'time',
                value: function time(value) {
                    return arguments.length ? (this._time = value, this) : this._time;
                }
            }, {
                key: 'networkCode',
                value: function networkCode(value) {
                    return arguments.length ? (this._networkCode = value, this) : this._networkCode;
                }
            }, {
                key: 'stationCode',
                value: function stationCode(value) {
                    return arguments.length ? (this._stationCode = value, this) : this._stationCode;
                }
            }, {
                key: 'locationCode',
                value: function locationCode(value) {
                    return arguments.length ? (this._locationCode = value, this) : this._locationCode;
                }
            }, {
                key: 'channelCode',
                value: function channelCode(value) {
                    return arguments.length ? (this._channelCode = value, this) : this._channelCode;
                }
            }]);

            return Pick;
        }();

// StationXML classes

        var Network = exports.Network = function () {
            function Network(networkCode) {
                _classCallCheck(this, Network);

                this.networkCode(networkCode);
                this._stations = [];
            }

            _createClass(Network, [{
                key: 'networkCode',
                value: function networkCode(value) {
                    return arguments.length ? (this._networkCode = value, this) : this._networkCode;
                }
            }, {
                key: 'startDate',
                value: function startDate(value) {
                    return arguments.length ? (this._startDate = value, this) : this._startDate;
                }
            }, {
                key: 'endDate',
                value: function endDate(value) {
                    return arguments.length ? (this._endDate = value, this) : this._endDate;
                }
            }, {
                key: 'restrictedStatus',
                value: function restrictedStatus(value) {
                    return arguments.length ? (this._restrictedStatus = value, this) : this._restrictedStatus;
                }
            }, {
                key: 'description',
                value: function description(value) {
                    return arguments.length ? (this._description = value, this) : this._description;
                }
            }, {
                key: 'stations',
                value: function stations(value) {
                    return arguments.length ? (this._stations = value, this) : this._stations;
                }
            }, {
                key: 'codes',
                value: function codes() {
                    return this.networkCode();
                }
            }]);

            return Network;
        }();

        var Station = exports.Station = function () {
            function Station(network, stationCode) {
                _classCallCheck(this, Station);

                this._network = network;
                this._stationCode = stationCode;
            }

            _createClass(Station, [{
                key: 'network',
                value: function network(value) {
                    return arguments.length ? (this._network = value, this) : this._network;
                }
            }, {
                key: 'stationCode',
                value: function stationCode(value) {
                    return arguments.length ? (this._stationCode = value, this) : this._stationCode;
                }
            }, {
                key: 'startDate',
                value: function startDate(value) {
                    return arguments.length ? (this._startDate = value, this) : this._startDate;
                }
            }, {
                key: 'endDate',
                value: function endDate(value) {
                    return arguments.length ? (this._endDate = value, this) : this._endDate;
                }
            }, {
                key: 'restrictedStatus',
                value: function restrictedStatus(value) {
                    return arguments.length ? (this._restrictedStatus = value, this) : this._restrictedStatus;
                }
            }, {
                key: 'name',
                value: function name(value) {
                    return arguments.length ? (this._name = value, this) : this._name;
                }
            }, {
                key: 'latitude',
                value: function latitude(value) {
                    return arguments.length ? (this._latitude = value, this) : this._latitude;
                }
            }, {
                key: 'longitude',
                value: function longitude(value) {
                    return arguments.length ? (this._longitude = value, this) : this._longitude;
                }
            }, {
                key: 'elevation',
                value: function elevation(value) {
                    return arguments.length ? (this._elevation = value, this) : this._elevation;
                }
            }, {
                key: 'channels',
                value: function channels(value) {
                    return arguments.length ? (this._channels = value, this) : this._channels;
                }
            }, {
                key: 'codes',
                value: function codes() {
                    return this.network().codes() + "." + this.stationCode();
                }
            }]);

            return Station;
        }();

        var Channel = exports.Channel = function () {
            function Channel(station, channelCode, locationId) {
                _classCallCheck(this, Channel);

                this._station = station;
                this._channelCode = channelCode;
                this._locationId = locationId;
            }

            _createClass(Channel, [{
                key: 'station',
                value: function station(value) {
                    return arguments.length ? (this._station = value, this) : this._station;
                }
            }, {
                key: 'channelCode',
                value: function channelCode(value) {
                    return arguments.length ? (this._channelCode = value, this) : this._channelCode;
                }
            }, {
                key: 'locationId',
                value: function locationId(value) {
                    return arguments.length ? (this._locationId = value, this) : this._locationId;
                }
            }, {
                key: 'locationCode',
                value: function locationCode(value) {
                    return arguments.length ? (this._locationId = value, this) : this._locationId;
                }
            }, {
                key: 'startDate',
                value: function startDate(value) {
                    return arguments.length ? (this._startDate = value, this) : this._startDate;
                }
            }, {
                key: 'endDate',
                value: function endDate(value) {
                    return arguments.length ? (this._endDate = value, this) : this._endDate;
                }
            }, {
                key: 'restrictedStatus',
                value: function restrictedStatus(value) {
                    return arguments.length ? (this._restrictedStatus = value, this) : this._restrictedStatus;
                }
            }, {
                key: 'latitude',
                value: function latitude(value) {
                    return arguments.length ? (this._latitude = value, this) : this._latitude;
                }
            }, {
                key: 'longitude',
                value: function longitude(value) {
                    return arguments.length ? (this._longitude = value, this) : this._longitude;
                }
            }, {
                key: 'elevation',
                value: function elevation(value) {
                    return arguments.length ? (this._elevation = value, this) : this._elevation;
                }
            }, {
                key: 'depth',
                value: function depth(value) {
                    return arguments.length ? (this._depth = value, this) : this._depth;
                }
            }, {
                key: 'azimuth',
                value: function azimuth(value) {
                    return arguments.length ? (this._azimuth = value, this) : this._azimuth;
                }
            }, {
                key: 'dip',
                value: function dip(value) {
                    return arguments.length ? (this._dip = value, this) : this._dip;
                }
            }, {
                key: 'sampleRate',
                value: function sampleRate(value) {
                    return arguments.length ? (this._sampleRate = value, this) : this._sampleRate;
                }
            }, {
                key: 'instrumentSensitivity',
                value: function instrumentSensitivity(value) {
                    if (arguments.length) {
                        // setter
                        if (typeof this._response == 'undefined') {
                            this._response = new Response(value);
                        } else {
                            this._response._instrumentSensitivity = value;
                        }
                        return this;
                    } else {
                        if (this._response) {
                            return this._response._instrumentSensitivity;
                        } else {
                            return 'undefined';
                        }
                    }
                }
            }, {
                key: 'response',
                value: function response(value) {
                    return arguments.length ? (this._response = value, this) : this._response;
                }
            }, {
                key: 'codes',
                value: function codes() {
                    return this.station().codes() + "." + this.locationId() + "." + this.channelCode();
                }
            }]);

            return Channel;
        }();

        var InstrumentSensitivity = exports.InstrumentSensitivity = function () {
            function InstrumentSensitivity(sensitivity, frequency, inputUnits, outputUnits) {
                _classCallCheck(this, InstrumentSensitivity);

                this._sensitivity = sensitivity;
                this._frequency = frequency;
                this._inputUnits = inputUnits;
                this._outputUnits = outputUnits;
            }

            _createClass(InstrumentSensitivity, [{
                key: 'sensitivity',
                value: function sensitivity(value) {
                    return arguments.length ? (this._sensitivity = value, this) : this._sensitivity;
                }
            }, {
                key: 'frequency',
                value: function frequency(value) {
                    return arguments.length ? (this._frequency = value, this) : this._frequency;
                }
            }, {
                key: 'inputUnits',
                value: function inputUnits(value) {
                    return arguments.length ? (this._inputUnits = value, this) : this._inputUnits;
                }
            }, {
                key: 'outputUnits',
                value: function outputUnits(value) {
                    return arguments.length ? (this._outputUnits = value, this) : this._outputUnits;
                }
            }]);

            return InstrumentSensitivity;
        }();

        var Response = exports.Response = function () {
            function Response(instrumentSensitivity) {
                _classCallCheck(this, Response);

                this._instrumentSensitivity = instrumentSensitivity;
            }

            _createClass(Response, [{
                key: 'instrumentSensitivity',
                value: function instrumentSensitivity(value) {
                    return arguments.length ? (this._instrumentSensitivity = value, this) : this._instrumentSensitivity;
                }
            }, {
                key: 'stages',
                value: function stages(value) {
                    return arguments.length ? (this._stages = value, this) : this._stages;
                }
            }]);

            return Response;
        }();

        var Stage = exports.Stage = function () {
            function Stage(filter, decimation, gain) {
                _classCallCheck(this, Stage);

                this._filter = filter;
                this._decimation = decimation;
                this._gain = gain;
            }

            _createClass(Stage, [{
                key: 'filter',
                value: function filter(value) {
                    return arguments.length ? (this._filter = value, this) : this._filter;
                }
            }, {
                key: 'decimation',
                value: function decimation(value) {
                    return arguments.length ? (this._decimation = value, this) : this._decimation;
                }
            }, {
                key: 'gain',
                value: function gain(value) {
                    return arguments.length ? (this._gain = value, this) : this._gain;
                }
            }]);

            return Stage;
        }();

        var AbstractFilterType = exports.AbstractFilterType = function () {
            function AbstractFilterType(inputUnits, outputUnits) {
                _classCallCheck(this, AbstractFilterType);

                this._inputUnits = inputUnits;
                this._outputUnits = outputUnits;
            }

            _createClass(AbstractFilterType, [{
                key: 'name',
                value: function name(value) {
                    return arguments.length ? (this._name = value, this) : this._name;
                }
            }, {
                key: 'description',
                value: function description(value) {
                    return arguments.length ? (this._description = value, this) : this._description;
                }
            }, {
                key: 'inputUnits',
                value: function inputUnits(value) {
                    return arguments.length ? (this._inputUnits = value, this) : this._inputUnits;
                }
            }, {
                key: 'outputUnits',
                value: function outputUnits(value) {
                    return arguments.length ? (this._outputUnits = value, this) : this._outputUnits;
                }
            }]);

            return AbstractFilterType;
        }();

        var PolesZeros = exports.PolesZeros = function (_AbstractFilterType) {
            _inherits(PolesZeros, _AbstractFilterType);

            function PolesZeros(inputUnits, outputUnits) {
                _classCallCheck(this, PolesZeros);

                return _possibleConstructorReturn(this, (PolesZeros.__proto__ || Object.getPrototypeOf(PolesZeros)).call(this, inputUnits, outputUnits));
            }

            _createClass(PolesZeros, [{
                key: 'pzTransferFunctionType',
                value: function pzTransferFunctionType(value) {
                    return arguments.length ? (this._pzTransferFunctionType = value, this) : this._pzTransferFunctionType;
                }
            }, {
                key: 'normalizationFactor',
                value: function normalizationFactor(value) {
                    return arguments.length ? (this._normalizationFactor = value, this) : this._normalizationFactor;
                }
            }, {
                key: 'normalizationFrequency',
                value: function normalizationFrequency(value) {
                    return arguments.length ? (this._normalizationFrequency = value, this) : this._normalizationFrequency;
                }
            }, {
                key: 'zeros',
                value: function zeros(value) {
                    return arguments.length ? (this._zeros = value, this) : this._zeros;
                }
            }, {
                key: 'poles',
                value: function poles(value) {
                    return arguments.length ? (this._poles = value, this) : this._poles;
                }
            }]);

            return PolesZeros;
        }(AbstractFilterType);

        var FIR = exports.FIR = function (_AbstractFilterType2) {
            _inherits(FIR, _AbstractFilterType2);

            function FIR(inputUnits, outputUnits) {
                _classCallCheck(this, FIR);

                return _possibleConstructorReturn(this, (FIR.__proto__ || Object.getPrototypeOf(FIR)).call(this, inputUnits, outputUnits));
            }

            _createClass(FIR, [{
                key: 'symmetry',
                value: function symmetry(value) {
                    return arguments.length ? (this._symmetry = value, this) : this._symmetry;
                }
            }, {
                key: 'numerator',
                value: function numerator(value) {
                    return arguments.length ? (this._numerator = value, this) : this._numerator;
                }
            }]);

            return FIR;
        }(AbstractFilterType);

        var CoefficientsFilter = exports.CoefficientsFilter = function (_AbstractFilterType3) {
            _inherits(CoefficientsFilter, _AbstractFilterType3);

            function CoefficientsFilter(inputUnits, outputUnits) {
                _classCallCheck(this, CoefficientsFilter);

                return _possibleConstructorReturn(this, (CoefficientsFilter.__proto__ || Object.getPrototypeOf(CoefficientsFilter)).call(this, inputUnits, outputUnits));
            }

            _createClass(CoefficientsFilter, [{
                key: 'cfTransferFunction',
                value: function cfTransferFunction(value) {
                    return arguments.length ? (this._cfTransferFunction = value, this) : this._cfTransferFunction;
                }
            }, {
                key: 'numerator',
                value: function numerator(value) {
                    return arguments.length ? (this._numerator = value, this) : this._numerator;
                }
            }, {
                key: 'denominator',
                value: function denominator(value) {
                    return arguments.length ? (this._denominator = value, this) : this._denominator;
                }
            }]);

            return CoefficientsFilter;
        }(AbstractFilterType);

        var Decimation = exports.Decimation = function () {
            function Decimation() {
                _classCallCheck(this, Decimation);
            }

            _createClass(Decimation, [{
                key: 'inputSampleRate',
                value: function inputSampleRate(value) {
                    return arguments.length ? (this._inputSampleRate = value, this) : this._inputSampleRate;
                }
            }, {
                key: 'factor',
                value: function factor(value) {
                    return arguments.length ? (this._factor = value, this) : this._factor;
                }
            }, {
                key: 'offset',
                value: function offset(value) {
                    return arguments.length ? (this._offset = value, this) : this._offset;
                }
            }, {
                key: 'delay',
                value: function delay(value) {
                    return arguments.length ? (this._delay = value, this) : this._delay;
                }
            }, {
                key: 'correction',
                value: function correction(value) {
                    return arguments.length ? (this._correction = value, this) : this._correction;
                }
            }]);

            return Decimation;
        }();

        var Gain = function () {
            function Gain() {
                _classCallCheck(this, Gain);
            }

            _createClass(Gain, [{
                key: 'value',
                value: function value(_value) {
                    return arguments.length ? (this._value = _value, this) : this._value;
                }
            }, {
                key: 'frequency',
                value: function frequency(value) {
                    return arguments.length ? (this._frequency = value, this) : this._frequency;
                }
            }]);

            return Gain;
        }();

        exports.Gain = Gain;

        var Seismogram = exports.Seismogram = function () {
            function Seismogram(yArray, sampleRate, start) {
                _classCallCheck(this, Seismogram);

                this._y = yArray;
                this._sampleRate = sampleRate;
                this._start = start;
            }

            _createClass(Seismogram, [{
                key: 'sampleRate',
                value: function sampleRate(value) {
                    return arguments.length ? (this._sampleRate = value, this) : this._sampleRate;
                }
            }, {
                key: 'start',
                value: function start(value) {
                    return arguments.length ? (this._start = value, this) : this._start;
                }
            }, {
                key: 'end',
                value: function end() {
                    return this.timeOfSample(this.numPoints() - 1);
                }
            }, {
                key: 'numPoints',
                value: function numPoints() {
                    return this._y.length;
                }
            }, {
                key: 'netCode',
                value: function netCode(value) {
                    return arguments.length ? (this._netCode = value, this) : this._netCode;
                }
            }, {
                key: 'staCode',
                value: function staCode(value) {
                    return arguments.length ? (this._staCode = value, this) : this._staCode;
                }
            }, {
                key: 'locId',
                value: function locId(value) {
                    return arguments.length ? (this._locId = value, this) : this._locId;
                }
            }, {
                key: 'chanCode',
                value: function chanCode(value) {
                    return arguments.length ? (this._chanCode = value, this) : this._chanCode;
                }
            }, {
                key: 'y',
                value: function y(value) {
                    return arguments.length ? (this._y = value, this) : this._y;
                }
            }, {
                key: 'timeOfSample',
                value: function timeOfSample(i) {
                    return new Date(this._start.getTime() + 1000 * i / this._sampleRate);
                }
            }, {
                key: 'codes',
                value: function codes() {
                    return this._netCode + "." + this._staCode + "." + this._locId + "." + this._chanCode;
                }
            }, {
                key: 'seisId',
                value: function seisId() {
                    return (this.codes() + "_" + this._start.toISOString() + "_" + this._end.toISOString()).replace(/\./g, '_').replace(/\:/g, '');
                }
            }, {
                key: 'clone',
                value: function clone() {
                    var out = new Seismogram(this.y().slice(), this.sampleRate(), this.start());
                    out._netCode = this._netCode;
                    out._staCode = this._staCode;
                    out._locId = this._locId;
                    out._chanCode = this._chanCode;
                    return out;
                }
            }]);

            return Seismogram;
        }();

// allow overriding the complex object to use
// if OregonDSP is loaded we want to use
// its Complex instead of the simple one defined here


        function createComplex(real, imag) {
            return {
                real: real,
                imag: imag
            };
        }
    },{}],2:[function(require,module,exports){
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.decompress = decompress;

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

        /*global Int32Array*/
        /**
         * Philip Crotwell
         * University of South Carolina, 2014
         * http://www.seis.sc.edu
         */
// converted from Steim2.java in seedCodec
// http://github.com/crotwell/seedcodec/


// constants for compression types

        /** ascii */
        var ASCII = exports.ASCII = 0;

        /** 16 bit integer, or java short */
        var SHORT = exports.SHORT = 1;

        /** 24 bit integer */
        var INT24 = exports.INT24 = 2;

        /** 32 bit integer, or java int */
        var INTEGER = exports.INTEGER = 3;

        /** ieee float */
        var FLOAT = exports.FLOAT = 4;

        /** ieee double*/
        var DOUBLE = exports.DOUBLE = 5;

        /** Steim1 compression */
        var STEIM1 = exports.STEIM1 = 10;

        /** Steim2 compression */
        var STEIM2 = exports.STEIM2 = 11;

        /** CDSN 16 bit gain ranged */
        var CDSN = exports.CDSN = 16;

        /** (A)SRO */
        var SRO = exports.SRO = 30;

        /** DWWSSN 16 bit */
        var DWWSSN = exports.DWWSSN = 32;

        var steim1 = exports.steim1 = {};
        var steim2 = exports.steim2 = {};

        var CodecException = exports.CodecException = function (_Error) {
            _inherits(CodecException, _Error);

            function CodecException(message) {
                _classCallCheck(this, CodecException);

                var _this = _possibleConstructorReturn(this, (CodecException.__proto__ || Object.getPrototypeOf(CodecException)).call(this, message));

                _this.message = message;
                _this.name = 'CodecException';
                return _this;
            }

            return CodecException;
        }(Error);

        var UnsupportedCompressionType = exports.UnsupportedCompressionType = function (_Error2) {
            _inherits(UnsupportedCompressionType, _Error2);

            function UnsupportedCompressionType(message) {
                _classCallCheck(this, UnsupportedCompressionType);

                var _this2 = _possibleConstructorReturn(this, (UnsupportedCompressionType.__proto__ || Object.getPrototypeOf(UnsupportedCompressionType)).call(this, message));

                _this2.message = message;
                _this2.name = 'UnsupportedCompressionType';
                return _this2;
            }

            return UnsupportedCompressionType;
        }(Error);

        function decompress(compressionType, dataView, numSamples, littleEndian) {
            // in case of record with no data points, ex detection blockette, which often have compression type
            // set to 0, which messes up the decompresser even though it doesn't matter since there is no data.
            if (numSamples == 0) {
                return [];
            }

            var out = [];
            var offset = 0;
            var i = void 0;
            switch (compressionType) {
                case SHORT:
                case DWWSSN:
                    // 16 bit values
                    if (dataView.length < 2 * numSamples) {
                        throw new CodecException("Not enough bytes for " + numSamples + " 16 bit data points, only " + dataView.length + " bytes.");
                    }
                    for (i = 0; i < numSamples; i++) {
                        out[i] = dataView.getInt16(offset, littleEndian);
                        offset += 2;
                    }
                    break;
                case INTEGER:
                    // 32 bit integers
                    if (dataView.length < 4 * numSamples) {
                        throw new CodecException("Not enough bytes for " + numSamples + " 32 bit data points, only " + dataView.length + " bytes.");
                    }
                    for (i = 0; i < numSamples; i++) {
                        out[i] = dataView.getInt32(offset, littleEndian);
                        offset += 4;
                    }
                    break;
                case FLOAT:
                    // 32 bit floats
                    if (dataView.length < 4 * numSamples) {
                        throw new CodecException("Not enough bytes for " + numSamples + " 32 bit data points, only " + dataView.length + " bytes.");
                    }
                    for (i = 0; i < numSamples; i++) {
                        out[i] = dataView.getFloat32(offset, littleEndian);
                        offset += 4;
                    }
                    break;
                case DOUBLE:
                    // 64 bit doubles
                    if (dataView.length < 8 * numSamples) {
                        throw new CodecException("Not enough bytes for " + numSamples + " 64 bit data points, only " + dataView.length + " bytes.");
                    }
                    for (i = 0; i < numSamples; i++) {
                        out[i] = dataView.getFloat64(offset, littleEndian);
                        offset += 8;
                    }
                    break;
                case STEIM1:
                    // steim 1
                    out = steim1.decode(dataView, numSamples, littleEndian, 0);
                    break;
                case STEIM2:
                    // steim 2
                    out = steim2.decode(dataView, numSamples, littleEndian, 0);
                    break;
                default:
                    // unknown format????
                    throw new UnsupportedCompressionType("Type " + compressionType + " is not supported at this time.");
            } // end of switch ()
            return out;
        }

        /**
         *  Decode the indicated number of samples from the provided byte array and
         *  return an integer array of the decompressed values.  Being differencing
         *  compression, there may be an offset carried over from a previous data
         *  record.  This offset value can be placed in <b>bias</b>, otherwise leave
         *  the value as 0.
         *  @param b input byte array to be decoded
         *  @param numSamples the number of samples that can be decoded from array
         *  <b>b</b>
         *  @param swapBytes if true, swap reverse the endian-ness of the elements of
         *  byte array <b>b</b>.
         *  @param bias the first difference value will be computed from this value.
         *  If set to 0, the method will attempt to use the X(0) constant instead.
         *  @return int array of length <b>numSamples</b>.
         *  @throws SteimException - encoded data length is not multiple of 64
         *  bytes.
         */
        steim1.decode = function (dataView, numSamples, littleEndian, bias) {
            // Decode Steim1 compression format from the provided byte array, which contains numSamples number
            // of samples.  swapBytes is set to true if the value words are to be byte swapped.  bias represents
            // a previous value which acts as a starting constant for continuing differences integration.  At the
            // very start, bias is set to 0.
            if (dataView.byteLength % 64 != 0) {
                throw new CodecException("encoded data length is not multiple of 64 bytes (" + dataView.length + ")");
            }
            var samples = [];
            var tempSamples = void 0;
            var numFrames = dataView.byteLength / 64;
            var current = 0;
            var start = 0;
            var firstData = 0;
            var lastValue = 0;
            var i = void 0,
                j = void 0;

            for (i = 0; i < numFrames; i++) {
                tempSamples = extractSteim1Samples(dataView, i * 64, littleEndian); // returns only differences except for frame 0
                firstData = 0; // d(0) is byte 0 by default
                if (i == 0) {
                    // special case for first frame
                    lastValue = bias; // assign our X(-1)
                    // x0 and xn are in 1 and 2 spots
                    start = tempSamples[1]; // X(0) is byte 1 for frame 0
                    //  end = tempSamples[2];    // X(n) is byte 2 for frame 0
                    firstData = 3; // d(0) is byte 3 for frame 0
                    // if bias was zero, then we want the first sample to be X(0) constant
                    if (bias == 0) lastValue = start - tempSamples[3]; // X(-1) = X(0) - d(0)
                }
                for (j = firstData; j < tempSamples.length && current < numSamples; j++) {
                    samples[current] = lastValue + tempSamples[j]; // X(n) = X(n-1) + d(n)
                    lastValue = samples[current];
                    current++;
                }
            } // end for each frame...
            if (current != numSamples) {
                throw new CodecException("Number of samples decompressed doesn't match number in header: " + current + " != " + numSamples);
            }
            // ignore last sample check???
            //if (end != samples[numSamples-1]) {
            //    throw new SteimException("Last sample decompressed doesn't match value x(n) value in Steim1 record: "+samples[numSamples-1]+" != "+end);
            //}
            return samples;
        };

        /**
         * Extracts differences from the next 64 byte frame of the given compressed
         * byte array (starting at offset) and returns those differences in an int
         * array.
         * An offset of 0 means that we are at the first frame, so include the header
         * bytes in the returned int array...else, do not include the header bytes
         * in the returned array.
         * @param bytes byte array of compressed data differences
         * @param offset index to begin reading compressed bytes for decoding
         * @param swapBytes reverse the endian-ness of the compressed bytes being read
         * @return integer array of difference (and constant) values
         */
        function extractSteim1Samples(dataView, offset, littleEndian) {
            /* get nibbles */
            var nibbles = dataView.getInt32(offset, littleEndian);
            var currNibble = 0;
            var temp = []; // 4 samples * 16 longwords, can't be more than 64
            var currNum = 0;
            var i = void 0,
                n = void 0;
            for (i = 0; i < 16; i++) {
                // i is the word number of the frame starting at 0
                //currNibble = (nibbles >>> (30 - i*2 ) ) & 0x03; // count from top to bottom each nibble in W(0)
                currNibble = nibbles >> 30 - i * 2 & 0x03; // count from top to bottom each nibble in W(0)
                //System.err.print("c(" + i + ")" + currNibble + ",");  // DEBUG
                // Rule appears to be:
                // only check for byte-swap on actual value-atoms, so a 32-bit word in of itself
                // is not swapped, but two 16-bit short *values* are or a single
                // 32-bit int *value* is, if the flag is set to TRUE.  8-bit values
                // are naturally not swapped.
                // It would seem that the W(0) word is swap-checked, though, which is confusing...
                // maybe it has to do with the reference to high-order bits for c(0)
                switch (currNibble) {
                    case 0:
                        //System.out.println("0 means header info");
                        // only include header info if offset is 0
                        if (offset == 0) {
                            temp[currNum++] = dataView.getInt32(offset + i * 4, littleEndian);
                        }
                        break;
                    case 1:
                        //System.out.println("1 means 4 one byte differences");
                        for (n = 0; n < 4; n++) {
                            temp[currNum] = dataView.getInt8(offset + i * 4 + n);
                            currNum++;
                        }
                        break;
                    case 2:
                        //System.out.println("2 means 2 two byte differences");
                        for (n = 0; n < 4; n += 2) {
                            temp[currNum] = dataView.getInt16(offset + i * 4 + n, littleEndian);
                            currNum++;
                        }
                        break;
                    case 3:
                        //System.out.println("3 means 1 four byte difference");
                        temp[currNum++] = dataView.getInt32(offset + i * 4, littleEndian);
                        break;
                    default:
                        throw new CodecException("unreachable case: " + currNibble);
                    //System.out.println("default");
                }
            }
            return temp;
        }

        /**
         *  Decode the indicated number of samples from the provided byte array and
         *  return an integer array of the decompressed values.  Being differencing
         *  compression, there may be an offset carried over from a previous data
         *  record.  This offset value can be placed in <b>bias</b>, otherwise leave
         *  the value as 0.
         *  @param b input byte array to be decoded
         *  @param numSamples the number of samples that can be decoded from array
         *  <b>b</b>
         *  @param swapBytes if true, swap reverse the endian-ness of the elements of
         *  byte array <b>b</b>.
         *  @param bias the first difference value will be computed from this value.
         *  If set to 0, the method will attempt to use the X(0) constant instead.
         *  @return int array of length <b>numSamples</b>.
         *  @throws SteimException - encoded data length is not multiple of 64
         *  bytes.
         */
        steim2.decode = function (dataView, numSamples, swapBytes, bias) {
            if (dataView.byteLength % 64 != 0) {
                throw new CodecException("encoded data length is not multiple of 64 bytes (" + dataView.length + ")");
            }
            var samples = [];
            var tempSamples = void 0;
            var numFrames = dataView.byteLength / 64;
            var current = 0;
            var start = 0;
            var firstData = 0;
            var lastValue = 0;

            //System.err.println("DEBUG: number of samples: " + numSamples + ", number of frames: " + numFrames + ", byte array size: " + b.length);
            for (var i = 0; i < numFrames; i++) {
                tempSamples = extractSteim2Samples(dataView, i * 64, swapBytes); // returns only differences except for frame 0
                firstData = 0; // d(0) is byte 0 by default
                if (i == 0) {
                    // special case for first frame
                    // console.log("i==0, special case for first frame")
                    lastValue = bias; // assign our X(-1)
                    // x0 and xn are in 1 and 2 spots
                    start = tempSamples[1]; // X(0) is byte 1 for frame 0
                    // end = tempSamples[2];    // X(n) is byte 2 for frame 0
                    firstData = 3; // d(0) is byte 3 for frame 0
                    //console.log("DEBUG: frame " + i + ", bias = " + bias + ", x(0) = " + start + ", x(n) = " + end);
                    // if bias was zero, then we want the first sample to be X(0) constant
                    if (bias == 0) lastValue = start - tempSamples[3]; // X(-1) = X(0) - d(0)
                }
                //System.err.print("DEBUG: ");
                for (var j = firstData; j < tempSamples.length && current < numSamples; j++) {
                    samples[current] = lastValue + tempSamples[j]; // X(n) = X(n-1) + d(n)
                    lastValue = samples[current];
                    //console.log("d(" + (j-firstData) + ")" + tempSamples[j] + ", x(" + current + ")" + samples[current] + ";");
                    current++;
                }
                //System.err.println("DEBUG: end of frame " + i);
            } // end for each frame...
            if (current != numSamples) {
                throw new CodecException("Number of samples decompressed doesn't match number in header: " + current + " != " + numSamples);
            }
            // ignore last sample check???
            //if (end != samples[numSamples-1]) {
            //    throw new SteimException("Last sample decompressed doesn't match value x(n) value in Steim2 record: "+samples[numSamples-1]+" != "+end);
            //}
            return samples;
        };

        /**
         * Extracts differences from the next 64 byte frame of the given compressed
         * byte array (starting at offset) and returns those differences in an int
         * array.
         * An offset of 0 means that we are at the first frame, so include the header
         * bytes in the returned int array...else, do not include the header bytes
         * in the returned array.
         * @param bytes byte array of compressed data differences
         * @param offset index to begin reading compressed bytes for decoding
         * @param swapBytes reverse the endian-ness of the compressed bytes being read
         * @return integer array of difference (and constant) values
         */
        function extractSteim2Samples(dataView, offset, swapBytes) {
            /* get nibbles */
            var nibbles = dataView.getUint32(offset, swapBytes);
            var currNibble = 0;
            var dnib = 0;
            var temp = new Int32Array(106); //max 106 = 7 samples * 15 long words + 1 nibble int
            var tempInt = void 0;
            var currNum = 0;
            var diffCount = 0; // number of differences
            var bitSize = 0; // bit size
            var headerSize = 0; // number of header/unused bits at top
            for (var i = 0; i < 16; i++) {
                currNibble = nibbles >> 30 - i * 2 & 0x03;
                switch (currNibble) {
                    case 0:
                        //System.out.println("0 means header info");
                        // only include header info if offset is 0
                        if (offset == 0) {
                            temp[currNum++] = dataView.getInt32(offset + i * 4, swapBytes);
                        }
                        break;
                    case 1:
                        //console.log("1 means 4 one byte differences " +currNum+" "+dataView.getInt8(offset+(i*4))+" "+dataView.getInt8(offset+(i*4)+1)+" "+dataView.getInt8(offset+(i*4)+2)+" "+dataView.getInt8(offset+(i*4)+3));
                        temp[currNum++] = dataView.getInt8(offset + i * 4);
                        temp[currNum++] = dataView.getInt8(offset + i * 4 + 1);
                        temp[currNum++] = dataView.getInt8(offset + i * 4 + 2);
                        temp[currNum++] = dataView.getInt8(offset + i * 4 + 3);
                        break;
                    case 2:
                        tempInt = dataView.getUint32(offset + i * 4, swapBytes);
                        dnib = tempInt >> 30 & 0x03;
                        switch (dnib) {
                            case 1:
                                //console.log("2,1 means 1 thirty bit difference");
                                temp[currNum++] = tempInt << 2 >> 2;
                                break;
                            case 2:
                                //console.log("2,2 means 2 fifteen bit differences");
                                temp[currNum++] = tempInt << 2 >> 17; // d0
                                temp[currNum++] = tempInt << 17 >> 17; // d1
                                break;
                            case 3:
                                //console.log("2,3 means 3 ten bit differences");
                                temp[currNum++] = tempInt << 2 >> 22; // d0
                                temp[currNum++] = tempInt << 12 >> 22; // d1
                                temp[currNum++] = tempInt << 22 >> 22; // d2
                                break;
                            default:
                            //console.log("default");
                        }
                        break;
                    case 3:
                        tempInt = dataView.getUint32(offset + i * 4, swapBytes);
                        dnib = tempInt >> 30 & 0x03;
                        // for case 3, we are going to use a for-loop formulation that
                        // accomplishes the same thing as case 2, just less verbose.
                        diffCount = 0; // number of differences
                        bitSize = 0; // bit size
                        headerSize = 0; // number of header/unused bits at top
                        switch (dnib) {
                            case 0:
                                //System.out.println("3,0 means 5 six bit differences");
                                headerSize = 2;
                                diffCount = 5;
                                bitSize = 6;
                                break;
                            case 1:
                                //System.out.println("3,1 means 6 five bit differences");
                                headerSize = 2;
                                diffCount = 6;
                                bitSize = 5;
                                break;
                            case 2:
                                //System.out.println("3,2 means 7 four bit differences, with 2 unused bits");
                                headerSize = 4;
                                diffCount = 7;
                                bitSize = 4;
                                break;
                            default:
                            //System.out.println("default");
                        }
                        if (diffCount > 0) {
                            for (var d = 0; d < diffCount; d++) {
                                // for-loop formulation
                                temp[currNum++] = tempInt << headerSize + d * bitSize >> (diffCount - 1) * bitSize + headerSize;
                            }
                        }
                }
            }
            var out = new Int32Array(currNum);
            for (var _i = 0; _i < currNum; _i++) {
                out[_i] = temp[_i];
            }
            return out;
        }
    },{}],3:[function(require,module,exports){
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.BTime = exports.Blockette = exports.DataHeader = exports.DataRecord = exports.model = exports.seedcodec = undefined;

        var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global DataView*/
        /**
         * Philip Crotwell
         * University of South Carolina, 2014
         * http://www.seis.sc.edu
         */

        exports.parseDataRecords = parseDataRecords;
        exports.areContiguous = areContiguous;
        exports.createSeismogram = createSeismogram;
        exports.merge = merge;
        exports.segmentMinMax = segmentMinMax;
        exports.byChannel = byChannel;

        var _seisplotjsSeedcodec = require('seisplotjs-seedcodec');

        var seedcodec = _interopRequireWildcard(_seisplotjsSeedcodec);

        var _seisplotjsModel = require('seisplotjs-model');

        var model = _interopRequireWildcard(_seisplotjsModel);

        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        /* re-export */
        exports.seedcodec = seedcodec;
        exports.model = model;

        /** parse arrayBuffer into an array of DataRecords. */

        function parseDataRecords(arrayBuffer) {
            var dataRecords = [];
            var offset = 0;
            while (offset < arrayBuffer.byteLength) {
                var dataView = new DataView(arrayBuffer, offset);
                var dr = new DataRecord(dataView);
                dataRecords.push(dr);
                offset += dr.header.recordSize;
            }
            return dataRecords;
        }

        /** Represents a SEED Data Record, with header, blockettes and data.
         * Currently only blockette 1000 is parsed, others are separated,
         * but left as just a DataView. */

        var DataRecord = exports.DataRecord = function () {
            function DataRecord(dataView) {
                _classCallCheck(this, DataRecord);

                this.header = new DataHeader(dataView);
                this.length = this.header.numSamples;

                this.data = new DataView(dataView.buffer, dataView.byteOffset + this.header.dataOffset, this.header.recordSize - this.header.dataOffset);
                this.decompData = undefined;
            }

            _createClass(DataRecord, [{
                key: 'decompress',
                value: function decompress() {
                    // only decompress once as it is expensive operation
                    if (typeof this.decompData === 'undefined') {
                        this.decompData = seedcodec.decompress(this.header.encoding, this.data, this.header.numSamples, this.header.littleEndian);
                        this.decompData.header = this.header;
                    }
                    return this.decompData;
                }
            }, {
                key: 'codes',
                value: function codes() {
                    return this.header.netCode + "." + this.header.staCode + "." + this.header.locCode + "." + this.header.chanCode;
                }
            }]);

            return DataRecord;
        }();

        var DataHeader = exports.DataHeader = function () {
            function DataHeader(dataView) {
                _classCallCheck(this, DataHeader);

                this.seq = makeString(dataView, 0, 6);
                this.typeCode = dataView.getUint8(6);
                this.continuationCode = dataView.getUint8(7);
                this.staCode = makeString(dataView, 8, 5);
                this.locCode = makeString(dataView, 13, 2);
                this.chanCode = makeString(dataView, 15, 3);
                this.netCode = makeString(dataView, 18, 2);
                this.startBTime = new BTime(dataView, 20);
                var headerByteSwap = checkByteSwap(this.startBTime);
                if (headerByteSwap) {
                    this.startBTime = new BTime(dataView, 20, headerByteSwap);
                }
                this.numSamples = dataView.getInt16(30, headerByteSwap);
                this.sampRateFac = dataView.getInt16(32, headerByteSwap);
                this.sampRateMul = dataView.getInt16(34, headerByteSwap);
                this.activityFlags = dataView.getUint8(36);
                this.ioClockFlags = dataView.getUint8(37);
                this.dataQualityFlags = dataView.getUint8(38);
                this.numBlockettes = dataView.getUint8(39);
                this.timeCorrection = dataView.getInt32(40, headerByteSwap);
                this.dataOffset = dataView.getUint16(44, headerByteSwap);
                this.blocketteOffset = dataView.getUint16(46, headerByteSwap);
                var offset = this.blocketteOffset;
                this.blocketteList = [];
                this.recordSize = 4096;
                for (var i = 0; i < this.numBlockettes; i++) {
                    var nextOffset = dataView.getUint16(offset + 2, headerByteSwap);
                    if (nextOffset == 0) {
                        // last blockette
                        nextOffset = this.dataOffset;
                    }
                    if (nextOffset == 0) {
                        nextOffset = offset; // zero length, probably an error...
                    }
                    var blockette = new Blockette(dataView, offset, nextOffset - offset);
                    this.blocketteList.push(blockette);
                    offset = nextOffset;
                    if (blockette.type == 1000) {
                        this.recordSize = 1 << blockette.dataRecordLengthByte;
                        this.encoding = blockette.encoding;
                        if (blockette.wordOrder == 0) {
                            this.swapBytes = true;
                        } else {
                            this.swapBytes = false;
                        }
                        this.littleEndian = blockette.wordOrder === 0;
                    }
                }
                this.sampleRate = this.calcSampleRate();
                this.start = this.startBTime.toDate();
                this.end = this.timeOfSample(this.numSamples - 1);
            }

            _createClass(DataHeader, [{
                key: 'toString',
                value: function toString() {
                    return this.netCode + "." + this.staCode + "." + this.locCode + "." + this.chanCode + " " + this.start.toISOString() + " " + this.encoding;
                }
            }, {
                key: 'calcSampleRate',
                value: function calcSampleRate() {
                    var factor = this.sampRateFac;
                    var multiplier = this.sampRateMul;
                    var sampleRate = 10000.0; // default (impossible) value;
                    if (factor * multiplier != 0.0) {
                        // in the case of log records
                        sampleRate = Math.pow(Math.abs(factor), factor / Math.abs(factor)) * Math.pow(Math.abs(multiplier), multiplier / Math.abs(multiplier));
                    }
                    return sampleRate;
                }
            }, {
                key: 'timeOfSample',
                value: function timeOfSample(i) {
                    return new Date(this.start.getTime() + 1000 * i / this.sampleRate);
                }
            }]);

            return DataHeader;
        }();

        var Blockette = exports.Blockette = function Blockette(dataView, offset, length, headerByteSwap) {
            _classCallCheck(this, Blockette);

            this.type = dataView.getUint16(offset, headerByteSwap);
            this.body = new DataView(dataView.buffer, dataView.byteOffset + offset, length);
            if (this.type == 1000) {
                this.encoding = this.body.getUint8(4);
                this.dataRecordLengthByte = this.body.getUint8(6);
                this.wordOrder = this.body.getUint8(5);
            }
        };

        function makeString(dataView, offset, length) {
            var out = "";
            for (var i = offset; i < offset + length; i++) {
                var charCode = dataView.getUint8(i);
                if (charCode > 31) {
                    out += String.fromCharCode(charCode);
                }
            }
            return out.trim();
        }

        var BTime = exports.BTime = function () {
            function BTime(dataView, offset, byteSwap) {
                _classCallCheck(this, BTime);

                if (typeof byteSwap === 'undefined') {
                    byteSwap = false;
                }
                this.length = 10;
                this.year = dataView.getInt16(offset, byteSwap);
                this.jday = dataView.getInt16(offset + 2, byteSwap);
                this.hour = dataView.getInt8(offset + 4);
                this.min = dataView.getInt8(offset + 5);
                this.sec = dataView.getInt8(offset + 6);
                // byte 7 unused, alignment
                this.tenthMilli = dataView.getInt16(offset + 8, byteSwap);
            }

            _createClass(BTime, [{
                key: 'toString',
                value: function toString() {
                    return this.year + "-" + this.jday + " " + this.hour + ":" + this.min + ":" + this.sec + "." + this.tenthMilli + " " + this.getDate().toISOString();
                }
            }, {
                key: 'toDate',
                value: function toDate() {
                    return new Date(Date.UTC(this.year, 0, this.jday, this.hour, this.min, this.sec, this.tenthMilli / 10));
                }
            }]);

            return BTime;
        }();

        function checkByteSwap(bTime) {
            return bTime.year < 1960 || bTime.year > 2055;
        }

        function areContiguous(dr1, dr2) {
            var h1 = dr1.header;
            var h2 = dr2.header;
            return h1.end.getTime() < h2.start.getTime() && h1.end.getTime() + 1000 * 1.5 / h1.sampleRate > h2.start.getTime();
        }

        /** concatentates a sequence of DataRecords into a single seismogram object.
         * Assumes that they are all contiguous and in order. Header values from the first
         * DataRecord are used. */
        function createSeismogram(contig) {
            var y = [];
            for (var i = 0; i < contig.length; i++) {
                y = y.concat(contig[i].decompress());
            }
            var out = new model.Seismogram(y, contig[0].header.sampleRate, contig[0].header.start);
            out.netCode(contig[0].header.netCode).staCode(contig[0].header.staCode).locId(contig[0].header.locCode).chanCode(contig[0].header.chanCode);

            return out;
        }

        /**
         * Merges data records into a arrary of seismogram segment objects
         * containing the data as a float array, y. Each seismogram has
         * sampleRate, start, end, netCode, staCode, locCode, chanCode as well
         * as the function timeOfSample(integer) set.
         * This assumes all data records are from the same channel, byChannel
         * can be used first if multiple channels may be present.
         */
        function merge(drList) {
            var out = [];
            var currDR = void 0;
            drList.sort(function (a, b) {
                return a.header.start.getTime() - b.header.start.getTime();
            });
            var contig = [];
            for (var i = 0; i < drList.length; i++) {
                currDR = drList[i];
                if (contig.length == 0) {
                    contig.push(currDR);
                } else if (areContiguous(contig[contig.length - 1], currDR)) {
                    contig.push(currDR);
                } else {
                    //found a gap
                    out.push(createSeismogram(contig));
                    contig = [currDR];
                }
            }
            if (contig.length > 0) {
                // last segment
                out.push(createSeismogram(contig));
                contig = [];
            }
            return out;
        }

        function segmentMinMax(segment, minMaxAccumulator) {
            if (!segment.y()) {
                throw new Error("Segment does not have a y field, doesn't look like a seismogram segment. " + Array.isArray(segment) + " " + segment);
            }
            var minAmp = Number.MAX_SAFE_INTEGER;
            var maxAmp = -1 * minAmp;
            if (minMaxAccumulator) {
                minAmp = minMaxAccumulator[0];
                maxAmp = minMaxAccumulator[1];
            }
            for (var n = 0; n < segment.y().length; n++) {
                if (minAmp > segment.y()[n]) {
                    minAmp = segment.y()[n];
                }
                if (maxAmp < segment.y()[n]) {
                    maxAmp = segment.y()[n];
                }
            }
            return [minAmp, maxAmp];
        }

        /** splits a list of data records by channel code, returning an object
         * with each NSLC mapped to an array of data records. */
        function byChannel(drList) {
            var out = {};
            var key = void 0;
            for (var i = 0; i < drList.length; i++) {
                var currDR = drList[i];
                key = currDR.codes();
                if (!out[key]) {
                    out[key] = [currDR];
                } else {
                    out[key].push(currDR);
                }
            }
            return out;
        }

    },{"seisplotjs-model":1,"seisplotjs-seedcodec":2}]},{},[3])(3)
    });

    //begin QuakeML.js
    var XmlUtil = {

        /**
         * Convert simple xml to a json object.
         * Does not work well for mixed content (text/elements).
         */
        xmlToJson: function (xml) {
            // based on http://davidwalsh.name/convert-xml-json
            var obj = {},
                children = [],
                attrs,
                attr,
                nodes,
                node,
                nodeName,
                nodeValue,
                i,
                len;

            if (typeof xml === 'string') {
                xml = new DOMParser().parseFromString(xml, 'text/xml');
            }

            if (xml.nodeType === 3) {
                return xml.nodeValue;
            }

            if (xml.nodeType === 1) {
                attrs = xml.attributes;
                for (i = 0, len = attrs.length; i < len; i++) {
                    attr = attrs.item(i);
                    obj[attr.nodeName] = attr.nodeValue;
                }
            }

            if (xml.hasChildNodes()) {
                nodes = xml.childNodes;
                for(i = 0, len = nodes.length; i < len; i++) {
                    node = nodes.item(i);
                    nodeName = node.nodeName;
                    nodeValue = XmlUtil.xmlToJson(node);
                    children.push(nodeValue);
                    if (typeof(obj[nodeName]) === 'undefined') {
                        obj[nodeName] = nodeValue;
                    } else {
                        if (typeof(obj[nodeName].push) === 'undefined') {
                            obj[nodeName] = [obj[nodeName]];
                        }
                        obj[nodeName].push(nodeValue);
                    }
                }
            }

            // clean up '#text' nodes
            if (children.length === 1 &&
                obj['#text'] &&
                Object.keys(obj).length === 1) {
                return obj['#text'];
            }

            return obj;
        }

    };
    /**
     * Create a new Quakeml object.
     *
     * @param options {Object}
     * @param options.xml {String|XMLDocument}
     *        quakeml xml to parse.
     *        If a string, options.xml is parsed using DOMParser.
     * @param options.eventElement {String}
     *        Default 'event'.
     *        The event element inside eventParameters to find.
     *        The first matching element is parsed during _initialize.
     */
    var Quakeml = function (options) {
        var _this,
            _initialize,

            _event,
            _updated,
            _quakeml;


        _this = Object.create({});

        /**
         * Initialize the quakeml object.
         */
        _initialize = function (options) {
            var ev,
                eventElement = options.eventElement || 'event',
                eventParameters,
                json,
                quakeml;

            json = XmlUtil.xmlToJson(options.xml);
            quakeml = json['q:quakeml'];
            eventParameters = quakeml.eventParameters;
            ev = eventParameters[eventElement];
            if (typeof ev === 'undefined') {
                throw new Error('Event element ' + eventElement + ' not found');
            }

            _quakeml = quakeml;
            if (eventParameters.creationInfo) {
                _updated = eventParameters.creationInfo.creationTime;
            }
            _event = QuakemlEvent((Array.isArray(ev) ? ev[0] : ev));
        };


        /**
         * @return {Array<Object>} magnitudes parsed from event element.
         */
        _this.getMagnitudes = function () {
            return _event.getMagnitudes();
        };

        /**
         * @return {Array<Object>} origins parsed from event element.
         */
        _this.getOrigins = function () {
            return _event.getOrigins();
        };

        /**
         * @return {Element} event element from quakeml message.
         */
        _this.getQuakemlEvent = function () {
            return _event.getEvent();
        };

        /**
         * @return {String} iso8601 timestamp when quakeml message was updated.
         */
        _this.getUpdated = function () {
            return _updated;
        };

        _initialize(options);
        options=null;
        return _this;

    };
    var _array = function (obj) {
        if (Array.isArray(obj)) {
            return obj;
        } else if (typeof obj === 'object' && obj !== null) {
            return [obj];
        } else {
            return [];
        }
    };
    var _extend = function (dest /*, varargs */) {
        var src,
            i,
            key;
        for (i = 1; i < arguments.length; i++) {
            src = arguments[i];
            if (typeof src === 'object' && src !== null) {
                for (key in src) {
                    dest[key] = src[key];
                }
            }
        }
        return dest;
    };
    var _index = function (objs, key, index) {
        var i,
            len,
            obj;
        index = index || {};
        if (objs) {
            if (!Array.isArray(objs)) {
                objs = [objs];
            }
            for (i = 0, len = objs.length; i < len; i++) {
                obj = objs[i];
                index[obj[key]] = obj;
            }
        }
        return index;
    };
    /**
     * Construct a new Quakeml Event.
     *
     * @param ev {Element}
     *        Quakeml event(like) element
     */
    var QuakemlEvent = function (ev) {
        var _this,
            _initialize,

            _amplitudeIndex,
            _catalog,
            _ev,
            _magnitudes,
            _origins,
            _pickIndex,
            _preferredMagnitudeID,
            _preferredOriginID,
            _stationMagnitudeIndex,

            _parseArrivals,
            _parseOrigins,
            _parseMagnitudeContributions,
            _parseMagnitudes;


        _this = Object.create({});

        /**
         * Initialize this event, by parsing origins and magnitudes.
         */
        _initialize = function (ev) {
            _ev = ev;
            _catalog = _ev['catalog:eventSource'];
            _preferredOriginID = _ev.preferredOriginID || null;
            _preferredMagnitudeID = _ev.preferredMagnitudeID || null;

            _pickIndex = _index(_ev.pick, 'publicID');
            _amplitudeIndex = _index(_ev.amplitude, 'publicID');
            _stationMagnitudeIndex = _index(_ev.stationMagnitude, 'publicID');

            _origins = _parseOrigins(_array(_ev.origin));
            _magnitudes = _parseMagnitudes(_array(_ev.magnitude));
            ev = null;
        };

        /**
         * Parse an array of arrival elements.
         *
         * @param arrivals {Array<Element>}
         *        array of quakeml arrival elements.
         * @return {Array<Object>} parsed arrival objects.
         */
        _parseArrivals = function (arrivals) {
            var a,
                arrival,
                parsed = [],
                pickIndex = _pickIndex;

            for (a = 0; a < arrivals.length; a++) {
                arrival = _extend({}, arrivals[a]);
                if (typeof arrival.pickID === 'string') {
                    arrival.pick = pickIndex[arrival.pickID] || null;
                } else {
                    arrival.pick = null;
                }
                parsed.push(arrival);
            }
            return parsed;
        };

        /**
         * Parse an array of stationMagnitudeContribution elements.
         *
         * @param contributions {Array<Element>}
         *        array of quakeml stationMagnitudeContribution elements.
         * @return {Array<Object>} parsed stationMagnitudeContribution objects.
         */
        _parseMagnitudeContributions = function (contributions) {
            var amplitudeIndex = _amplitudeIndex,
                c,
                contribution,
                parsed = [],
                stationMagnitude,
                stationMagnitudeIndex = _stationMagnitudeIndex;

            for (c = 0; c < contributions.length; c++) {
                contribution = _extend({}, contributions[c]);
                stationMagnitude = _extend({},
                    stationMagnitudeIndex[contribution.stationMagnitudeID]);
                contribution.stationMagnitude = stationMagnitude;
                if (typeof stationMagnitude.amplitudeID === 'string') {
                    stationMagnitude.amplitude = _extend({},
                        amplitudeIndex[stationMagnitude.amplitudeID]);
                }
                parsed.push(contribution);
            }
            return parsed;
        };

        /**
         * Parse and array of magnitude elements.
         *
         * @param magnitudes {Array<Element>}
         *        array of quakeml magnitude elements.
         * @return {Array<Object>} parsed magnitude objects.
         */
        _parseMagnitudes = function (magnitudes) {
            var m,
                magnitude,
                parsed = [],
                preferredMagnitudeID = _preferredMagnitudeID;

            for (m = 0; m < magnitudes.length; m++) {
                magnitude = _extend({}, magnitudes[m]);
                magnitude.isPreferred = (preferredMagnitudeID === magnitude.publicID);
                magnitude.contributions = _parseMagnitudeContributions(
                    _array(magnitude.stationMagnitudeContribution));
                delete magnitude.stationMagnitudeContribution;
                if (magnitude.isPreferred) {
                    parsed.unshift(magnitude);
                } else {
                    parsed.push(magnitude);
                }
            }
            return parsed;
        };

        /**
         * Parse an array of origin elements.
         *
         * @param origins {Array<Element>}
         *        array of quakeml origin elements.
         * @return {Array<Object>} parsed origin objects.
         */
        _parseOrigins = function (origins) {
            var o,
                origin,
                parsed = [],
                preferredOriginID = _preferredOriginID;

            for (o = 0; o < origins.length; o++) {
                origin = _extend({}, origins[o]);
                origin.isPreferred = (preferredOriginID === origin.publicID);
                origin.arrivals = _parseArrivals(_array(origin.arrival));
                delete origin.arrival;
                if (origin.isPreferred) {
                    parsed.unshift(origin);
                } else {
                    parsed.push(origin);
                }
            }
            return parsed;
        };

        /**
         * @return {Object} quakeml event element as json object.
         */
        _this.getEvent = function () {
            return _ev;
        };

        /**
         * @return {Array<Object>} magnitudes parsed from event.
         */
        _this.getMagnitudes = function () {
            return _magnitudes;
        };

        /**
         * @return {Array<Object>} origins parsed from event.
         */
        _this.getOrigins = function () {
            return _origins;
        };

        _initialize(ev);
        ev = null;
        return _this;

    };
    //end QuakeML.js

    $(window).ready(function(){
        $("body").append("<div id='geonet_plot' style='position:fixed; left:0;top:0;width:100vw;height:100vh;display:none;background-color: rgba(0,0,0,0.5);cursor: pointer'>" +
            "<div id='geonet_plot_container' style='background-color: white; border-radius: 10px;max-width: 1400px;width: 100%; cursor: initial; margin:auto; margin-top: 30px; padding:10px;'>" +
            "</div></div>");
    });

    function _merge_options(def, opts) {
        var out = {};
        for (x in def) {
            if (def.hasOwnProperty(x)){
                out[x] = def[x]
            }
        }
        for (x in opts){
            if (opts.hasOwnProperty(x)){
                out[x] = opts[x]
            }
        }
        return out;
    }


    exp.DrawEvent = function(station, location, channel, eventID, options){
        //default options
        defOpts = {
            elem: null, //elem is where to put the plot (id) null will place in floating mode
            title: null, //the title to display, if null it will be generated from the input values
            url: apiurl, //the url of the fdsn service to use
            demean: true, //whether or not to remove the mean from the data
            samplerate: 0, //how many data points to take from the input data, defaults to 0 (auto), 1 would mean every point, 2 every 2nd etc...
            rangeslider: true, //whether or not to display the plotly rangeslider
            pickdetails: true, //whether or not to show lines for origin, pick and amplitude
        };
        var opts = _merge_options(defOpts, options);

        console.log(eventID);

        url_event = opts.url + "event/1/query?eventid=" + eventID;

        if (opts.title === null){
            opts.title = "Event " + eventID + " NZ." + station + "." + location + "." + channel + " Seismic Data"
        }

        var compstring = "NZ." + station + ".";
        if (location){
            compstring += location + ".";
            if (channel){
                compstring += channel;
            }
        }

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url_event, true);

        xhr.onload = function(e) {
            var xml = this.responseXML;
            console.log(xml);

            var q = Quakeml({xml: xml});
            console.log(q);

            var event = q.getQuakemlEvent();
            console.log(event);

            var origin = event.origin;
            var origin_time = Date.parse(origin.time.value);
            console.log(origin_time);

            var mag;
            for (var i = 0; i < event.magnitude.length; i++){
                var m = event.magnitude[i];
                if (m.publicID === event.preferredMagnitudeID){
                    mag = m;
                    break;
                }
            }


            var oldest_pick = event.pick[0];
            var selected_picks = [];
            console.log(compstring);

            for (var i = 0; i < event.pick.length; i++) {
                var p = event.pick[i];
                if (Date.parse(p.time.value) > Date.parse(oldest_pick.time.value)){
                    oldest_pick = p;
                }
                pComp = p.waveformID.networkCode + "." +  p.waveformID.stationCode + "." + p.waveformID.locationCode + "." + p.waveformID.channelCode;
                if (pComp.indexOf(compstring) !== -1){
                    selected_picks.push(p)
                }
            }

            for (var i = 0; i < event.amplitude.length; i++){
                var a = event.amplitude[i];
                if (a.pickID.indexOf(compstring) !== -1){
                    for (var j = 0; j < selected_picks.length; j++){
                        if (selected_picks[j].publicID === a.pickID) {
                            selected_picks[j].amplitude = a;
                        }
                    }
                }
            }

            console.log(selected_picks);

            if (selected_picks.length < 1){
                var err = "Unable to find event (" + eventID + ") details for station: " + compstring;
                if (err.charAt(err.length-1) === '.'){
                    err += "*";
                }
                console.log(err);
                return;
            }

            var selected = selected_picks[0];

            if (opts.pickdetails){
                opts.origin = origin_time;
                opts.pick = Date.parse(selected.time.value);
                if (selected.amplitude) {
                    opts.amp = Date.parse(selected.amplitude.timeWindow.reference);
                }
            }

            var start = origin_time - 1000;
            var end = Date.parse(oldest_pick.time.value) + (400000 * Number.parseFloat(mag.mag.value));

            console.log(start);
            console.log(end);

            exp.DrawTimespan(station, location, channel, start, end, opts)
        };
        xhr.send()
    };

    exp.DrawTimespan = function(station, location, channel, start_time, end_time, options){

        //default options
        defOpts = {
            elem: null, //elem is where to put the plot (id) null will place in floating mode
            title: null, //the title to display, if null it will be generated from the input values
            url: apiurl, //the url of the fdsn service to use
            demean: true, //whether or not to remove the mean from the data
            samplerate: 0, //how many data points to take from the input data, defaults to 0 (auto), 1 would mean every point, 2 every 2nd etc...
            rangeslider: true, //whether or not to display the plotly rangeslider
        };
        var opts = _merge_options(defOpts, options);

        url = opts.url + "dataselect/1/query?station=" + station + "&location=" + location + "&channel=" + channel + "&starttime=" + new Date(start_time).toISOString().replace("Z", "") + "&endtime=" + new Date(end_time).toISOString().replace("Z", "");

        console.log(url);

        console.log(start_time);
        console.log(end_time);

        if (opts.title === null) {
            opts.title = "NZ." + station + "." + location + "." + channel + " Seismic Data"
        }

        console.log(opts.title);

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";

        xhr.onload = function(e) {
            _draw_plot(new Uint8Array(this.response).buffer, opts);
        };

        xhr.send()
    };

    function _draw_plot(arraybuf, opts){

        console.log(arraybuf);

        var data = seisplotjs_miniseed.parseDataRecords(arraybuf);

        var x = [];
        var y = [];

        var total = 0;
        var count = 0;

        var samplerate = opts.samplerate;

        if (samplerate < 1) {
            console.log(data.length);
            console.log(data[0].length);
            samplerate = Math.ceil((data.length * data[0].length) / samplerate_break)

        }

        console.log("SR: " + samplerate);

        for (var i = 0; i < data.length; i ++){
            data[i].decompress();

            var datestart = data[i].header.start.getTime();
            var datestep = (data[i].header.end.getTime() - datestart) / data[i].decompData.length;


            for (var j = 0; j < data[i].decompData.length; j += samplerate) {
                count++;
                y.push(data[i].decompData[j]);
                total += data[i].decompData[j];
                x.push(new Date(datestart + (j*datestep)).toISOString())
            }
        }

        //demean
        console.log("Total: " + total);
        var mean = total / count;
        console.log("Mean: " + mean);

        if (opts.demean) {
            for (var i = 0; i < y.length; i++){
                y[i] -= mean;
            }
        }

        console.log(x);
        console.log(y);

        var trace = {
            x: x,
            y: y,
            type: "scatter",
            line: {
                color: "#204040"
            }
        };

        var plot_data = [trace];

        var plot_layout = {
            title: opts.title,
            margin: {
                l: 30,
                r: 30,
                t: 40,
                b: 30
            }
        };

        if (opts.rangeslider) {
            plot_layout.xaxis = {
                autorange: true,
                    rangeslider: {range: [x[0], x[x.length-1]]},
                type: "date"
            }
        }

        console.log(opts);

        if (opts.pickdetails) {
            plot_layout.annotations = [];
            plot_layout.shapes = [];
            if (opts.origin) {
                plot_layout.shapes.push({
                    type: "line",
                    yref: "paper",
                    y0: 0,
                    y1: 1,
                    x0: new Date(opts.origin).toISOString(),
                    x1: new Date(opts.origin).toISOString(),
                    line: {
                        color: 'red',
                        width: 2
                    }
                });
                plot_layout.annotations.push({
                    xref: 'x',
                    yref: 'paper',
                    text: "Origin",
                    showarrow: false,
                    x: new Date(opts.origin).toISOString(),
                    y: 0,
                    font: {
                        color: 'red'
                    },
                    xanchor: "left"
                });
            }
            if (opts.amp) {
                plot_layout.shapes.push({
                    type: "line",
                    yref: "paper",
                    y0: 0,
                    y1: 1,
                    x0: new Date(opts.amp).toISOString(),
                    x1: new Date(opts.amp).toISOString(),
                    line: {
                        color: 'blue',
                        width: 2
                    }
                });
                plot_layout.annotations.push({
                    xref: 'x',
                    yref: 'paper',
                    text: "Amplitude",
                    showarrow: false,
                    x: new Date(opts.amp).toISOString(),
                    y: 0,
                    font: {
                        color: 'blue'
                    },
                    xanchor: "left"
                });
            }
            if (opts.pick) {
                plot_layout.shapes.push({
                    type: "line",
                    yref: "paper",
                    y0: 0,
                    y1: 1,
                    x0: new Date(opts.pick).toISOString(),
                    x1: new Date(opts.pick).toISOString(),
                    line: {
                        color: 'green',
                        width: 2
                    }
                });
                plot_layout.annotations.push({
                    xref: 'x',
                    yref: 'paper',
                    text: "Pick",
                    showarrow: false,
                    x: new Date(opts.pick).toISOString(),
                    y: 0,
                    font: {
                        color: 'green'
                    },
                    xanchor: "left"
                });
            }
        }

        console.log(plot_layout);


        var plot_id = "plot-" + guid();
        if (opts.elem === null){
            //create the plot in a popup box
            $('#geonet_plot').css("display", "initial");
            $("#geonet_plot_container").html("<div id='" + plot_id + "'></div>");
            $('#geonet_plot').click(function(){
                $("#geonet_plot").css("display", "none");
            });
            $('#geonet_plot_container').click(function(e){e.stopPropagation();});
        } else {
            //create the plot in the specified element
            $("#" + opts.elem).html("<div id='" + plot_id + "'></div>")
        }

        Plotly.newPlot(plot_id, plot_data, plot_layout);
        $("#" + plot_id).css("position", "relative").append("<div style='position: absolute; left:10px; top:0; width: 100px;'><a href='" + logo_link + "'><img src='" + logo + "' title='" + logo_text + "'></a></div>");

        console.log(data);
    }

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }


    return exp;

})();