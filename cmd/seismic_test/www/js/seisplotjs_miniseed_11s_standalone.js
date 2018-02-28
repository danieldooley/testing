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