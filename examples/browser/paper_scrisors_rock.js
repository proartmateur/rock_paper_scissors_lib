!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.paper_scrisors_rock = t() : e.paper_scrisors_rock = t();
}(this, (function () {
	return (() => {
		"use strict";
		var e = {
			d: (t, o) => {
				for (var c in o) e.o(o, c) && !e.o(t, c) && Object.defineProperty(t, c, {enumerable: !0, get: o[c]});
			}, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0});
			}
		}, t = {};

		function o(e, t) {
			for (var o = 0; o < t.length; o++) {
				var c = t[o];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c);
			}
		}

		e.r(t), e.d(t, {RockPaperScissors: () => c});
		var c = function () {
			function e(t) {
				!function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
				}(this, e), this.player2_is_computer = t, this.choices = ["rock", "paper", "scissors"];
			}

			var t, c;
			return t = e, (c = [{
				key: "start", value: function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return this.player1_choice = e, this.player2_is_computer ? this.generateComputerChoice() : this.player2_choice = t, this.getResults();
				}
			}, {
				key: "generateComputerChoice", value: function () {
					var e = Math.floor(3 * Math.random());
					this.player2_choice = this.choices[e];
				}
			}, {
				key: "getResults", value: function () {
					var e = "", t = this.choices[0], o = this.choices[1], c = this.choices[2];
					if (this.player1_choice === this.player2_choice) return this.formatResult("nobody");
					switch ("".concat(this.player1_choice, "_").concat(this.player2_choice)) {
						case"".concat(o, "_").concat(t):
						case"".concat(t, "_").concat(c):
						case"".concat(c, "_").concat(o):
							e = "player_1";
							break;
						case"".concat(t, "_").concat(o):
						case"".concat(c, "_").concat(t):
						case"".concat(o, "_").concat(c):
							e = "player_2";
					}
					return this.formatResult(e);
				}
			}, {
				key: "formatResult", value: function (e) {
					return {winner: e, player_1: this.player1_choice, player_2: this.player2_choice};
				}
			}]) && o(t.prototype, c), e;
		}();
		return t;
	})();
}));