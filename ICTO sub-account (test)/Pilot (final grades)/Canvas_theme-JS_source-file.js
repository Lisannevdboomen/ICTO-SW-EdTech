(() => {
  "use strict";
  var e = {
      490: (e, t) => {
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function r(e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e;
        }
        function i(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t);
        }
        function o(e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            o(e)
          );
        }
        function a(e, t) {
          return (
            (a =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            a(e, t)
          );
        }
        function s() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function u(e, t, n) {
          return (
            (u = s()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var i = new (Function.bind.apply(e, r))();
                  return n && a(i, n.prototype), i;
                }),
            u.apply(null, arguments)
          );
        }
        function c(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (c = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf("[native code]"))
              )
                return e;
              var n;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
              }
              function r() {
                return u(e, arguments, o(this).constructor);
              }
              return (
                (r.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                a(r, e)
              );
            }),
            c(e)
          );
        }
        function l(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function f(e) {
          var t = 0;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (e = (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return l(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(n)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? l(e, t)
                      : void 0
                  );
                }
              })(e))
            )
              return function () {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              };
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          return (t = e[Symbol.iterator]()).next.bind(t);
        }
        var d = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return i(t, e), t;
          })(c(Error)),
          h = (function (e) {
            function t(t) {
              return e.call(this, "Invalid DateTime: " + t.toMessage()) || this;
            }
            return i(t, e), t;
          })(d),
          m = (function (e) {
            function t(t) {
              return e.call(this, "Invalid Interval: " + t.toMessage()) || this;
            }
            return i(t, e), t;
          })(d),
          y = (function (e) {
            function t(t) {
              return e.call(this, "Invalid Duration: " + t.toMessage()) || this;
            }
            return i(t, e), t;
          })(d),
          v = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return i(t, e), t;
          })(d),
          g = (function (e) {
            function t(t) {
              return e.call(this, "Invalid unit " + t) || this;
            }
            return i(t, e), t;
          })(d),
          p = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return i(t, e), t;
          })(d),
          w = (function (e) {
            function t() {
              return e.call(this, "Zone is an abstract class") || this;
            }
            return i(t, e), t;
          })(d),
          k = "numeric",
          b = "short",
          O = "long",
          S = { year: k, month: k, day: k },
          T = { year: k, month: b, day: k },
          M = { year: k, month: b, day: k, weekday: b },
          N = { year: k, month: O, day: k },
          E = { year: k, month: O, day: k, weekday: O },
          D = { hour: k, minute: k },
          I = { hour: k, minute: k, second: k },
          V = { hour: k, minute: k, second: k, timeZoneName: b },
          _ = { hour: k, minute: k, second: k, timeZoneName: O },
          L = { hour: k, minute: k, hour12: !1 },
          x = { hour: k, minute: k, second: k, hour12: !1 },
          C = { hour: k, minute: k, second: k, hour12: !1, timeZoneName: b },
          j = { hour: k, minute: k, second: k, hour12: !1, timeZoneName: O },
          F = { year: k, month: k, day: k, hour: k, minute: k },
          Z = { year: k, month: k, day: k, hour: k, minute: k, second: k },
          A = { year: k, month: b, day: k, hour: k, minute: k },
          z = { year: k, month: b, day: k, hour: k, minute: k, second: k },
          q = { year: k, month: b, day: k, weekday: b, hour: k, minute: k },
          H = {
            year: k,
            month: O,
            day: k,
            hour: k,
            minute: k,
            timeZoneName: b,
          },
          $ = {
            year: k,
            month: O,
            day: k,
            hour: k,
            minute: k,
            second: k,
            timeZoneName: b,
          },
          U = {
            year: k,
            month: O,
            day: k,
            weekday: O,
            hour: k,
            minute: k,
            timeZoneName: O,
          },
          W = {
            year: k,
            month: O,
            day: k,
            weekday: O,
            hour: k,
            minute: k,
            second: k,
            timeZoneName: O,
          };
        function P(e) {
          return void 0 === e;
        }
        function R(e) {
          return "number" == typeof e;
        }
        function J(e) {
          return "number" == typeof e && e % 1 == 0;
        }
        function Y() {
          try {
            return "undefined" != typeof Intl && Intl.DateTimeFormat;
          } catch (e) {
            return !1;
          }
        }
        function G() {
          return !P(Intl.DateTimeFormat.prototype.formatToParts);
        }
        function B() {
          try {
            return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
          } catch (e) {
            return !1;
          }
        }
        function Q(e, t, n) {
          if (0 !== e.length)
            return e.reduce(function (e, r) {
              var i = [t(r), r];
              return e && n(e[0], i[0]) === e[0] ? e : i;
            }, null)[1];
        }
        function K(e, t) {
          return t.reduce(function (t, n) {
            return (t[n] = e[n]), t;
          }, {});
        }
        function X(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function ee(e, t, n) {
          return J(e) && e >= t && e <= n;
        }
        function te(e, t) {
          void 0 === t && (t = 2);
          var n = e < 0 ? "-" : "",
            r = n ? -1 * e : e;
          return (
            "" +
            n +
            (r.toString().length < t
              ? ("0".repeat(t) + r).slice(-t)
              : r.toString())
          );
        }
        function ne(e) {
          return P(e) || null === e || "" === e ? void 0 : parseInt(e, 10);
        }
        function re(e) {
          if (!P(e) && null !== e && "" !== e) {
            var t = 1e3 * parseFloat("0." + e);
            return Math.floor(t);
          }
        }
        function ie(e, t, n) {
          void 0 === n && (n = !1);
          var r = Math.pow(10, t);
          return (n ? Math.trunc : Math.round)(e * r) / r;
        }
        function oe(e) {
          return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
        }
        function ae(e) {
          return oe(e) ? 366 : 365;
        }
        function se(e, t) {
          var n,
            r = (n = t - 1) - 12 * Math.floor(n / 12) + 1;
          return 2 === r
            ? oe(e + (t - r) / 12)
              ? 29
              : 28
            : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
        }
        function ue(e) {
          var t = Date.UTC(
            e.year,
            e.month - 1,
            e.day,
            e.hour,
            e.minute,
            e.second,
            e.millisecond
          );
          return (
            e.year < 100 &&
              e.year >= 0 &&
              (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900),
            +t
          );
        }
        function ce(e) {
          var t =
              (e +
                Math.floor(e / 4) -
                Math.floor(e / 100) +
                Math.floor(e / 400)) %
              7,
            n = e - 1,
            r =
              (n +
                Math.floor(n / 4) -
                Math.floor(n / 100) +
                Math.floor(n / 400)) %
              7;
          return 4 === t || 3 === r ? 53 : 52;
        }
        function le(e) {
          return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
        }
        function fe(e, t, n, r) {
          void 0 === r && (r = null);
          var i = new Date(e),
            o = {
              hour12: !1,
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            };
          r && (o.timeZone = r);
          var a = Object.assign({ timeZoneName: t }, o),
            s = Y();
          if (s && G()) {
            var u = new Intl.DateTimeFormat(n, a)
              .formatToParts(i)
              .find(function (e) {
                return "timezonename" === e.type.toLowerCase();
              });
            return u ? u.value : null;
          }
          if (s) {
            var c = new Intl.DateTimeFormat(n, o).format(i);
            return new Intl.DateTimeFormat(n, a)
              .format(i)
              .substring(c.length)
              .replace(/^[, \u200e]+/, "");
          }
          return null;
        }
        function de(e, t) {
          var n = parseInt(e, 10);
          Number.isNaN(n) && (n = 0);
          var r = parseInt(t, 10) || 0;
          return 60 * n + (n < 0 || Object.is(n, -0) ? -r : r);
        }
        function he(e) {
          var t = Number(e);
          if ("boolean" == typeof e || "" === e || Number.isNaN(t))
            throw new p("Invalid unit value " + e);
          return t;
        }
        function me(e, t, n) {
          var r = {};
          for (var i in e)
            if (X(e, i)) {
              if (n.indexOf(i) >= 0) continue;
              var o = e[i];
              if (null == o) continue;
              r[t(i)] = he(o);
            }
          return r;
        }
        function ye(e, t) {
          var n = Math.trunc(Math.abs(e / 60)),
            r = Math.trunc(Math.abs(e % 60)),
            i = e >= 0 ? "+" : "-";
          switch (t) {
            case "short":
              return "" + i + te(n, 2) + ":" + te(r, 2);
            case "narrow":
              return "" + i + n + (r > 0 ? ":" + r : "");
            case "techie":
              return "" + i + te(n, 2) + te(r, 2);
            default:
              throw new RangeError(
                "Value format " + t + " is out of range for property format"
              );
          }
        }
        function ve(e) {
          return K(e, ["hour", "minute", "second", "millisecond"]);
        }
        var ge =
          /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
        function pe(e) {
          return JSON.stringify(e, Object.keys(e).sort());
        }
        var we = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          ke = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          be = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
        function Oe(e) {
          switch (e) {
            case "narrow":
              return [].concat(be);
            case "short":
              return [].concat(ke);
            case "long":
              return [].concat(we);
            case "numeric":
              return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
              ];
            case "2-digit":
              return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
              ];
            default:
              return null;
          }
        }
        var Se = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          Te = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          Me = ["M", "T", "W", "T", "F", "S", "S"];
        function Ne(e) {
          switch (e) {
            case "narrow":
              return [].concat(Me);
            case "short":
              return [].concat(Te);
            case "long":
              return [].concat(Se);
            case "numeric":
              return ["1", "2", "3", "4", "5", "6", "7"];
            default:
              return null;
          }
        }
        var Ee = ["AM", "PM"],
          De = ["Before Christ", "Anno Domini"],
          Ie = ["BC", "AD"],
          Ve = ["B", "A"];
        function _e(e) {
          switch (e) {
            case "narrow":
              return [].concat(Ve);
            case "short":
              return [].concat(Ie);
            case "long":
              return [].concat(De);
            default:
              return null;
          }
        }
        function Le(e, t) {
          for (var n, r = "", i = f(e); !(n = i()).done; ) {
            var o = n.value;
            o.literal ? (r += o.val) : (r += t(o.val));
          }
          return r;
        }
        var xe = {
            D: S,
            DD: T,
            DDD: N,
            DDDD: E,
            t: D,
            tt: I,
            ttt: V,
            tttt: _,
            T: L,
            TT: x,
            TTT: C,
            TTTT: j,
            f: F,
            ff: A,
            fff: H,
            ffff: U,
            F: Z,
            FF: z,
            FFF: $,
            FFFF: W,
          },
          Ce = (function () {
            function e(e, t) {
              (this.opts = t), (this.loc = e), (this.systemLoc = null);
            }
            (e.create = function (t, n) {
              return void 0 === n && (n = {}), new e(t, n);
            }),
              (e.parseFormat = function (e) {
                for (
                  var t = null, n = "", r = !1, i = [], o = 0;
                  o < e.length;
                  o++
                ) {
                  var a = e.charAt(o);
                  "'" === a
                    ? (n.length > 0 && i.push({ literal: r, val: n }),
                      (t = null),
                      (n = ""),
                      (r = !r))
                    : r || a === t
                    ? (n += a)
                    : (n.length > 0 && i.push({ literal: !1, val: n }),
                      (n = a),
                      (t = a));
                }
                return n.length > 0 && i.push({ literal: r, val: n }), i;
              }),
              (e.macroTokenToFormatOpts = function (e) {
                return xe[e];
              });
            var t = e.prototype;
            return (
              (t.formatWithSystemDefault = function (e, t) {
                return (
                  null === this.systemLoc &&
                    (this.systemLoc = this.loc.redefaultToSystem()),
                  this.systemLoc
                    .dtFormatter(e, Object.assign({}, this.opts, t))
                    .format()
                );
              }),
              (t.formatDateTime = function (e, t) {
                return (
                  void 0 === t && (t = {}),
                  this.loc
                    .dtFormatter(e, Object.assign({}, this.opts, t))
                    .format()
                );
              }),
              (t.formatDateTimeParts = function (e, t) {
                return (
                  void 0 === t && (t = {}),
                  this.loc
                    .dtFormatter(e, Object.assign({}, this.opts, t))
                    .formatToParts()
                );
              }),
              (t.resolvedOptions = function (e, t) {
                return (
                  void 0 === t && (t = {}),
                  this.loc
                    .dtFormatter(e, Object.assign({}, this.opts, t))
                    .resolvedOptions()
                );
              }),
              (t.num = function (e, t) {
                if ((void 0 === t && (t = 0), this.opts.forceSimple))
                  return te(e, t);
                var n = Object.assign({}, this.opts);
                return (
                  t > 0 && (n.padTo = t), this.loc.numberFormatter(n).format(e)
                );
              }),
              (t.formatDateTimeFromString = function (t, n) {
                var r = this,
                  i = "en" === this.loc.listingMode(),
                  o =
                    this.loc.outputCalendar &&
                    "gregory" !== this.loc.outputCalendar &&
                    G(),
                  a = function (e, n) {
                    return r.loc.extract(t, e, n);
                  },
                  s = function (e) {
                    return t.isOffsetFixed && 0 === t.offset && e.allowZ
                      ? "Z"
                      : t.isValid
                      ? t.zone.formatOffset(t.ts, e.format)
                      : "";
                  },
                  u = function (e, n) {
                    return i
                      ? (function (e, t) {
                          return Oe(t)[e.month - 1];
                        })(t, e)
                      : a(
                          n ? { month: e } : { month: e, day: "numeric" },
                          "month"
                        );
                  },
                  c = function (e, n) {
                    return i
                      ? (function (e, t) {
                          return Ne(t)[e.weekday - 1];
                        })(t, e)
                      : a(
                          n
                            ? { weekday: e }
                            : { weekday: e, month: "long", day: "numeric" },
                          "weekday"
                        );
                  },
                  l = function (e) {
                    return i
                      ? (function (e, t) {
                          return _e(t)[e.year < 0 ? 0 : 1];
                        })(t, e)
                      : a({ era: e }, "era");
                  };
                return Le(e.parseFormat(n), function (n) {
                  switch (n) {
                    case "S":
                      return r.num(t.millisecond);
                    case "u":
                    case "SSS":
                      return r.num(t.millisecond, 3);
                    case "s":
                      return r.num(t.second);
                    case "ss":
                      return r.num(t.second, 2);
                    case "m":
                      return r.num(t.minute);
                    case "mm":
                      return r.num(t.minute, 2);
                    case "h":
                      return r.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
                    case "hh":
                      return r.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
                    case "H":
                      return r.num(t.hour);
                    case "HH":
                      return r.num(t.hour, 2);
                    case "Z":
                      return s({ format: "narrow", allowZ: r.opts.allowZ });
                    case "ZZ":
                      return s({ format: "short", allowZ: r.opts.allowZ });
                    case "ZZZ":
                      return s({ format: "techie", allowZ: r.opts.allowZ });
                    case "ZZZZ":
                      return t.zone.offsetName(t.ts, {
                        format: "short",
                        locale: r.loc.locale,
                      });
                    case "ZZZZZ":
                      return t.zone.offsetName(t.ts, {
                        format: "long",
                        locale: r.loc.locale,
                      });
                    case "z":
                      return t.zoneName;
                    case "a":
                      return i
                        ? (function (e) {
                            return Ee[e.hour < 12 ? 0 : 1];
                          })(t)
                        : a({ hour: "numeric", hour12: !0 }, "dayperiod");
                    case "d":
                      return o ? a({ day: "numeric" }, "day") : r.num(t.day);
                    case "dd":
                      return o ? a({ day: "2-digit" }, "day") : r.num(t.day, 2);
                    case "c":
                    case "E":
                      return r.num(t.weekday);
                    case "ccc":
                      return c("short", !0);
                    case "cccc":
                      return c("long", !0);
                    case "ccccc":
                      return c("narrow", !0);
                    case "EEE":
                      return c("short", !1);
                    case "EEEE":
                      return c("long", !1);
                    case "EEEEE":
                      return c("narrow", !1);
                    case "L":
                      return o
                        ? a({ month: "numeric", day: "numeric" }, "month")
                        : r.num(t.month);
                    case "LL":
                      return o
                        ? a({ month: "2-digit", day: "numeric" }, "month")
                        : r.num(t.month, 2);
                    case "LLL":
                      return u("short", !0);
                    case "LLLL":
                      return u("long", !0);
                    case "LLLLL":
                      return u("narrow", !0);
                    case "M":
                      return o
                        ? a({ month: "numeric" }, "month")
                        : r.num(t.month);
                    case "MM":
                      return o
                        ? a({ month: "2-digit" }, "month")
                        : r.num(t.month, 2);
                    case "MMM":
                      return u("short", !1);
                    case "MMMM":
                      return u("long", !1);
                    case "MMMMM":
                      return u("narrow", !1);
                    case "y":
                      return o ? a({ year: "numeric" }, "year") : r.num(t.year);
                    case "yy":
                      return o
                        ? a({ year: "2-digit" }, "year")
                        : r.num(t.year.toString().slice(-2), 2);
                    case "yyyy":
                      return o
                        ? a({ year: "numeric" }, "year")
                        : r.num(t.year, 4);
                    case "yyyyyy":
                      return o
                        ? a({ year: "numeric" }, "year")
                        : r.num(t.year, 6);
                    case "G":
                      return l("short");
                    case "GG":
                      return l("long");
                    case "GGGGG":
                      return l("narrow");
                    case "kk":
                      return r.num(t.weekYear.toString().slice(-2), 2);
                    case "kkkk":
                      return r.num(t.weekYear, 4);
                    case "W":
                      return r.num(t.weekNumber);
                    case "WW":
                      return r.num(t.weekNumber, 2);
                    case "o":
                      return r.num(t.ordinal);
                    case "ooo":
                      return r.num(t.ordinal, 3);
                    case "q":
                      return r.num(t.quarter);
                    case "qq":
                      return r.num(t.quarter, 2);
                    case "X":
                      return r.num(Math.floor(t.ts / 1e3));
                    case "x":
                      return r.num(t.ts);
                    default:
                      return (function (n) {
                        var i = e.macroTokenToFormatOpts(n);
                        return i ? r.formatWithSystemDefault(t, i) : n;
                      })(n);
                  }
                });
              }),
              (t.formatDurationFromString = function (t, n) {
                var r,
                  i = this,
                  o = function (e) {
                    switch (e[0]) {
                      case "S":
                        return "millisecond";
                      case "s":
                        return "second";
                      case "m":
                        return "minute";
                      case "h":
                        return "hour";
                      case "d":
                        return "day";
                      case "M":
                        return "month";
                      case "y":
                        return "year";
                      default:
                        return null;
                    }
                  },
                  a = e.parseFormat(n),
                  s = a.reduce(function (e, t) {
                    var n = t.literal,
                      r = t.val;
                    return n ? e : e.concat(r);
                  }, []),
                  u = t.shiftTo.apply(
                    t,
                    s.map(o).filter(function (e) {
                      return e;
                    })
                  );
                return Le(
                  a,
                  ((r = u),
                  function (e) {
                    var t = o(e);
                    return t ? i.num(r.get(t), e.length) : e;
                  })
                );
              }),
              e
            );
          })(),
          je = (function () {
            function e(e, t) {
              (this.reason = e), (this.explanation = t);
            }
            return (
              (e.prototype.toMessage = function () {
                return this.explanation
                  ? this.reason + ": " + this.explanation
                  : this.reason;
              }),
              e
            );
          })(),
          Fe = (function () {
            function e() {}
            var t = e.prototype;
            return (
              (t.offsetName = function (e, t) {
                throw new w();
              }),
              (t.formatOffset = function (e, t) {
                throw new w();
              }),
              (t.offset = function (e) {
                throw new w();
              }),
              (t.equals = function (e) {
                throw new w();
              }),
              r(e, [
                {
                  key: "type",
                  get: function () {
                    throw new w();
                  },
                },
                {
                  key: "name",
                  get: function () {
                    throw new w();
                  },
                },
                {
                  key: "universal",
                  get: function () {
                    throw new w();
                  },
                },
                {
                  key: "isValid",
                  get: function () {
                    throw new w();
                  },
                },
              ]),
              e
            );
          })(),
          Ze = null,
          Ae = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            i(t, e);
            var n = t.prototype;
            return (
              (n.offsetName = function (e, t) {
                return fe(e, t.format, t.locale);
              }),
              (n.formatOffset = function (e, t) {
                return ye(this.offset(e), t);
              }),
              (n.offset = function (e) {
                return -new Date(e).getTimezoneOffset();
              }),
              (n.equals = function (e) {
                return "local" === e.type;
              }),
              r(
                t,
                [
                  {
                    key: "type",
                    get: function () {
                      return "local";
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      return Y()
                        ? new Intl.DateTimeFormat().resolvedOptions().timeZone
                        : "local";
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      return !1;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return !0;
                    },
                  },
                ],
                [
                  {
                    key: "instance",
                    get: function () {
                      return null === Ze && (Ze = new t()), Ze;
                    },
                  },
                ]
              ),
              t
            );
          })(Fe),
          ze = RegExp("^" + ge.source + "$"),
          qe = {},
          He = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
          $e = {},
          Ue = (function (e) {
            function t(n) {
              var r;
              return (
                ((r = e.call(this) || this).zoneName = n),
                (r.valid = t.isValidZone(n)),
                r
              );
            }
            i(t, e),
              (t.create = function (e) {
                return $e[e] || ($e[e] = new t(e)), $e[e];
              }),
              (t.resetCache = function () {
                ($e = {}), (qe = {});
              }),
              (t.isValidSpecifier = function (e) {
                return !(!e || !e.match(ze));
              }),
              (t.isValidZone = function (e) {
                try {
                  return (
                    new Intl.DateTimeFormat("en-US", { timeZone: e }).format(),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              }),
              (t.parseGMTOffset = function (e) {
                if (e) {
                  var t = e.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
                  if (t) return -60 * parseInt(t[1]);
                }
                return null;
              });
            var n = t.prototype;
            return (
              (n.offsetName = function (e, t) {
                return fe(e, t.format, t.locale, this.name);
              }),
              (n.formatOffset = function (e, t) {
                return ye(this.offset(e), t);
              }),
              (n.offset = function (e) {
                var t = new Date(e);
                if (isNaN(t)) return NaN;
                var n,
                  r =
                    ((n = this.name),
                    qe[n] ||
                      (qe[n] = new Intl.DateTimeFormat("en-US", {
                        hour12: !1,
                        timeZone: n,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })),
                    qe[n]),
                  i = r.formatToParts
                    ? (function (e, t) {
                        for (
                          var n = e.formatToParts(t), r = [], i = 0;
                          i < n.length;
                          i++
                        ) {
                          var o = n[i],
                            a = o.type,
                            s = o.value,
                            u = He[a];
                          P(u) || (r[u] = parseInt(s, 10));
                        }
                        return r;
                      })(r, t)
                    : (function (e, t) {
                        var n = e.format(t).replace(/\u200E/g, ""),
                          r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),
                          i = r[1],
                          o = r[2];
                        return [r[3], i, o, r[4], r[5], r[6]];
                      })(r, t),
                  o = i[0],
                  a = i[1],
                  s = i[2],
                  u = i[3],
                  c = +t,
                  l = c % 1e3;
                return (
                  (ue({
                    year: o,
                    month: a,
                    day: s,
                    hour: 24 === u ? 0 : u,
                    minute: i[4],
                    second: i[5],
                    millisecond: 0,
                  }) -
                    (c -= l >= 0 ? l : 1e3 + l)) /
                  6e4
                );
              }),
              (n.equals = function (e) {
                return "iana" === e.type && e.name === this.name;
              }),
              r(t, [
                {
                  key: "type",
                  get: function () {
                    return "iana";
                  },
                },
                {
                  key: "name",
                  get: function () {
                    return this.zoneName;
                  },
                },
                {
                  key: "universal",
                  get: function () {
                    return !1;
                  },
                },
                {
                  key: "isValid",
                  get: function () {
                    return this.valid;
                  },
                },
              ]),
              t
            );
          })(Fe),
          We = null,
          Pe = (function (e) {
            function t(t) {
              var n;
              return ((n = e.call(this) || this).fixed = t), n;
            }
            i(t, e),
              (t.instance = function (e) {
                return 0 === e ? t.utcInstance : new t(e);
              }),
              (t.parseSpecifier = function (e) {
                if (e) {
                  var n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                  if (n) return new t(de(n[1], n[2]));
                }
                return null;
              }),
              r(t, null, [
                {
                  key: "utcInstance",
                  get: function () {
                    return null === We && (We = new t(0)), We;
                  },
                },
              ]);
            var n = t.prototype;
            return (
              (n.offsetName = function () {
                return this.name;
              }),
              (n.formatOffset = function (e, t) {
                return ye(this.fixed, t);
              }),
              (n.offset = function () {
                return this.fixed;
              }),
              (n.equals = function (e) {
                return "fixed" === e.type && e.fixed === this.fixed;
              }),
              r(t, [
                {
                  key: "type",
                  get: function () {
                    return "fixed";
                  },
                },
                {
                  key: "name",
                  get: function () {
                    return 0 === this.fixed
                      ? "UTC"
                      : "UTC" + ye(this.fixed, "narrow");
                  },
                },
                {
                  key: "universal",
                  get: function () {
                    return !0;
                  },
                },
                {
                  key: "isValid",
                  get: function () {
                    return !0;
                  },
                },
              ]),
              t
            );
          })(Fe),
          Re = (function (e) {
            function t(t) {
              var n;
              return ((n = e.call(this) || this).zoneName = t), n;
            }
            i(t, e);
            var n = t.prototype;
            return (
              (n.offsetName = function () {
                return null;
              }),
              (n.formatOffset = function () {
                return "";
              }),
              (n.offset = function () {
                return NaN;
              }),
              (n.equals = function () {
                return !1;
              }),
              r(t, [
                {
                  key: "type",
                  get: function () {
                    return "invalid";
                  },
                },
                {
                  key: "name",
                  get: function () {
                    return this.zoneName;
                  },
                },
                {
                  key: "universal",
                  get: function () {
                    return !1;
                  },
                },
                {
                  key: "isValid",
                  get: function () {
                    return !1;
                  },
                },
              ]),
              t
            );
          })(Fe);
        function Je(e, t) {
          var n;
          if (P(e) || null === e) return t;
          if (e instanceof Fe) return e;
          if ("string" == typeof e) {
            var r = e.toLowerCase();
            return "local" === r
              ? t
              : "utc" === r || "gmt" === r
              ? Pe.utcInstance
              : null != (n = Ue.parseGMTOffset(e))
              ? Pe.instance(n)
              : Ue.isValidSpecifier(r)
              ? Ue.create(e)
              : Pe.parseSpecifier(r) || new Re(e);
          }
          return R(e)
            ? Pe.instance(e)
            : "object" == typeof e && e.offset && "number" == typeof e.offset
            ? e
            : new Re(e);
        }
        var Ye = function () {
            return Date.now();
          },
          Ge = null,
          Be = null,
          Qe = null,
          Ke = null,
          Xe = !1,
          et = (function () {
            function e() {}
            return (
              (e.resetCaches = function () {
                lt.resetCache(), Ue.resetCache();
              }),
              r(e, null, [
                {
                  key: "now",
                  get: function () {
                    return Ye;
                  },
                  set: function (e) {
                    Ye = e;
                  },
                },
                {
                  key: "defaultZoneName",
                  get: function () {
                    return e.defaultZone.name;
                  },
                  set: function (e) {
                    Ge = e ? Je(e) : null;
                  },
                },
                {
                  key: "defaultZone",
                  get: function () {
                    return Ge || Ae.instance;
                  },
                },
                {
                  key: "defaultLocale",
                  get: function () {
                    return Be;
                  },
                  set: function (e) {
                    Be = e;
                  },
                },
                {
                  key: "defaultNumberingSystem",
                  get: function () {
                    return Qe;
                  },
                  set: function (e) {
                    Qe = e;
                  },
                },
                {
                  key: "defaultOutputCalendar",
                  get: function () {
                    return Ke;
                  },
                  set: function (e) {
                    Ke = e;
                  },
                },
                {
                  key: "throwOnInvalid",
                  get: function () {
                    return Xe;
                  },
                  set: function (e) {
                    Xe = e;
                  },
                },
              ]),
              e
            );
          })(),
          tt = {};
        function nt(e, t) {
          void 0 === t && (t = {});
          var n = JSON.stringify([e, t]),
            r = tt[n];
          return r || ((r = new Intl.DateTimeFormat(e, t)), (tt[n] = r)), r;
        }
        var rt = {},
          it = {};
        var ot = null;
        function at(e, t, n, r, i) {
          var o = e.listingMode(n);
          return "error" === o ? null : "en" === o ? r(t) : i(t);
        }
        var st = (function () {
            function e(e, t, n) {
              if (
                ((this.padTo = n.padTo || 0),
                (this.floor = n.floor || !1),
                !t && Y())
              ) {
                var r = { useGrouping: !1 };
                n.padTo > 0 && (r.minimumIntegerDigits = n.padTo),
                  (this.inf = (function (e, t) {
                    void 0 === t && (t = {});
                    var n = JSON.stringify([e, t]),
                      r = rt[n];
                    return (
                      r || ((r = new Intl.NumberFormat(e, t)), (rt[n] = r)), r
                    );
                  })(e, r));
              }
            }
            return (
              (e.prototype.format = function (e) {
                if (this.inf) {
                  var t = this.floor ? Math.floor(e) : e;
                  return this.inf.format(t);
                }
                return te(this.floor ? Math.floor(e) : ie(e, 3), this.padTo);
              }),
              e
            );
          })(),
          ut = (function () {
            function e(e, t, n) {
              var r;
              if (
                ((this.opts = n),
                (this.hasIntl = Y()),
                e.zone.universal && this.hasIntl)
              ) {
                var i = (e.offset / 60) * -1,
                  o = i >= 0 ? "Etc/GMT+" + i : "Etc/GMT" + i,
                  a = Ue.isValidZone(o);
                0 !== e.offset && a
                  ? ((r = o), (this.dt = e))
                  : ((r = "UTC"),
                    n.timeZoneName
                      ? (this.dt = e)
                      : (this.dt =
                          0 === e.offset
                            ? e
                            : ur.fromMillis(e.ts + 60 * e.offset * 1e3)));
              } else
                "local" === e.zone.type
                  ? (this.dt = e)
                  : ((this.dt = e), (r = e.zone.name));
              if (this.hasIntl) {
                var s = Object.assign({}, this.opts);
                r && (s.timeZone = r), (this.dtf = nt(t, s));
              }
            }
            var t = e.prototype;
            return (
              (t.format = function () {
                if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
                var e = (function (e) {
                    var t = "EEEE, LLLL d, yyyy, h:mm a";
                    switch (
                      pe(
                        K(e, [
                          "weekday",
                          "era",
                          "year",
                          "month",
                          "day",
                          "hour",
                          "minute",
                          "second",
                          "timeZoneName",
                          "hour12",
                        ])
                      )
                    ) {
                      case pe(S):
                        return "M/d/yyyy";
                      case pe(T):
                        return "LLL d, yyyy";
                      case pe(M):
                        return "EEE, LLL d, yyyy";
                      case pe(N):
                        return "LLLL d, yyyy";
                      case pe(E):
                        return "EEEE, LLLL d, yyyy";
                      case pe(D):
                        return "h:mm a";
                      case pe(I):
                        return "h:mm:ss a";
                      case pe(V):
                      case pe(_):
                        return "h:mm a";
                      case pe(L):
                        return "HH:mm";
                      case pe(x):
                        return "HH:mm:ss";
                      case pe(C):
                      case pe(j):
                        return "HH:mm";
                      case pe(F):
                        return "M/d/yyyy, h:mm a";
                      case pe(A):
                        return "LLL d, yyyy, h:mm a";
                      case pe(H):
                        return "LLLL d, yyyy, h:mm a";
                      case pe(U):
                        return t;
                      case pe(Z):
                        return "M/d/yyyy, h:mm:ss a";
                      case pe(z):
                        return "LLL d, yyyy, h:mm:ss a";
                      case pe(q):
                        return "EEE, d LLL yyyy, h:mm a";
                      case pe($):
                        return "LLLL d, yyyy, h:mm:ss a";
                      case pe(W):
                        return "EEEE, LLLL d, yyyy, h:mm:ss a";
                      default:
                        return t;
                    }
                  })(this.opts),
                  t = lt.create("en-US");
                return Ce.create(t).formatDateTimeFromString(this.dt, e);
              }),
              (t.formatToParts = function () {
                return this.hasIntl && G()
                  ? this.dtf.formatToParts(this.dt.toJSDate())
                  : [];
              }),
              (t.resolvedOptions = function () {
                return this.hasIntl
                  ? this.dtf.resolvedOptions()
                  : {
                      locale: "en-US",
                      numberingSystem: "latn",
                      outputCalendar: "gregory",
                    };
              }),
              e
            );
          })(),
          ct = (function () {
            function e(e, t, n) {
              (this.opts = Object.assign({ style: "long" }, n)),
                !t &&
                  B() &&
                  (this.rtf = (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                      r =
                        (n.base,
                        (function (e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                          for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                          return i;
                        })(n, ["base"])),
                      i = JSON.stringify([e, r]),
                      o = it[i];
                    return (
                      o ||
                        ((o = new Intl.RelativeTimeFormat(e, t)), (it[i] = o)),
                      o
                    );
                  })(e, n));
            }
            var t = e.prototype;
            return (
              (t.format = function (e, t) {
                return this.rtf
                  ? this.rtf.format(e, t)
                  : (function (e, t, n, r) {
                      void 0 === n && (n = "always"), void 0 === r && (r = !1);
                      var i = {
                          years: ["year", "yr."],
                          quarters: ["quarter", "qtr."],
                          months: ["month", "mo."],
                          weeks: ["week", "wk."],
                          days: ["day", "day", "days"],
                          hours: ["hour", "hr."],
                          minutes: ["minute", "min."],
                          seconds: ["second", "sec."],
                        },
                        o = -1 === ["hours", "minutes", "seconds"].indexOf(e);
                      if ("auto" === n && o) {
                        var a = "days" === e;
                        switch (t) {
                          case 1:
                            return a ? "tomorrow" : "next " + i[e][0];
                          case -1:
                            return a ? "yesterday" : "last " + i[e][0];
                          case 0:
                            return a ? "today" : "this " + i[e][0];
                        }
                      }
                      var s = Object.is(t, -0) || t < 0,
                        u = Math.abs(t),
                        c = 1 === u,
                        l = i[e],
                        f = r ? (c ? l[1] : l[2] || l[1]) : c ? i[e][0] : e;
                      return s ? u + " " + f + " ago" : "in " + u + " " + f;
                    })(t, e, this.opts.numeric, "long" !== this.opts.style);
              }),
              (t.formatToParts = function (e, t) {
                return this.rtf ? this.rtf.formatToParts(e, t) : [];
              }),
              e
            );
          })(),
          lt = (function () {
            function e(e, t, n, r) {
              var i = (function (e) {
                  var t = e.indexOf("-u-");
                  if (-1 === t) return [e];
                  var n,
                    r = e.substring(0, t);
                  try {
                    n = nt(e).resolvedOptions();
                  } catch (e) {
                    n = nt(r).resolvedOptions();
                  }
                  var i = n;
                  return [r, i.numberingSystem, i.calendar];
                })(e),
                o = i[0],
                a = i[1],
                s = i[2];
              (this.locale = o),
                (this.numberingSystem = t || a || null),
                (this.outputCalendar = n || s || null),
                (this.intl = (function (e, t, n) {
                  return Y()
                    ? n || t
                      ? ((e += "-u"),
                        n && (e += "-ca-" + n),
                        t && (e += "-nu-" + t),
                        e)
                      : e
                    : [];
                })(this.locale, this.numberingSystem, this.outputCalendar)),
                (this.weekdaysCache = { format: {}, standalone: {} }),
                (this.monthsCache = { format: {}, standalone: {} }),
                (this.meridiemCache = null),
                (this.eraCache = {}),
                (this.specifiedLocale = r),
                (this.fastNumbersCached = null);
            }
            (e.fromOpts = function (t) {
              return e.create(
                t.locale,
                t.numberingSystem,
                t.outputCalendar,
                t.defaultToEN
              );
            }),
              (e.create = function (t, n, r, i) {
                void 0 === i && (i = !1);
                var o = t || et.defaultLocale;
                return new e(
                  o ||
                    (i
                      ? "en-US"
                      : (function () {
                          if (ot) return ot;
                          if (Y()) {
                            var e = new Intl.DateTimeFormat().resolvedOptions()
                              .locale;
                            return (ot = e && "und" !== e ? e : "en-US");
                          }
                          return (ot = "en-US");
                        })()),
                  n || et.defaultNumberingSystem,
                  r || et.defaultOutputCalendar,
                  o
                );
              }),
              (e.resetCache = function () {
                (ot = null), (tt = {}), (rt = {}), (it = {});
              }),
              (e.fromObject = function (t) {
                var n = void 0 === t ? {} : t,
                  r = n.locale,
                  i = n.numberingSystem,
                  o = n.outputCalendar;
                return e.create(r, i, o);
              });
            var t = e.prototype;
            return (
              (t.listingMode = function (e) {
                void 0 === e && (e = !0);
                var t = Y() && G(),
                  n = this.isEnglish(),
                  r = !(
                    (null !== this.numberingSystem &&
                      "latn" !== this.numberingSystem) ||
                    (null !== this.outputCalendar &&
                      "gregory" !== this.outputCalendar)
                  );
                return t || (n && r) || e
                  ? !t || (n && r)
                    ? "en"
                    : "intl"
                  : "error";
              }),
              (t.clone = function (t) {
                return t && 0 !== Object.getOwnPropertyNames(t).length
                  ? e.create(
                      t.locale || this.specifiedLocale,
                      t.numberingSystem || this.numberingSystem,
                      t.outputCalendar || this.outputCalendar,
                      t.defaultToEN || !1
                    )
                  : this;
              }),
              (t.redefaultToEN = function (e) {
                return (
                  void 0 === e && (e = {}),
                  this.clone(Object.assign({}, e, { defaultToEN: !0 }))
                );
              }),
              (t.redefaultToSystem = function (e) {
                return (
                  void 0 === e && (e = {}),
                  this.clone(Object.assign({}, e, { defaultToEN: !1 }))
                );
              }),
              (t.months = function (e, t, n) {
                var r = this;
                return (
                  void 0 === t && (t = !1),
                  void 0 === n && (n = !0),
                  at(this, e, n, Oe, function () {
                    var n = t ? { month: e, day: "numeric" } : { month: e },
                      i = t ? "format" : "standalone";
                    return (
                      r.monthsCache[i][e] ||
                        (r.monthsCache[i][e] = (function (e) {
                          for (var t = [], n = 1; n <= 12; n++) {
                            var r = ur.utc(2016, n, 1);
                            t.push(e(r));
                          }
                          return t;
                        })(function (e) {
                          return r.extract(e, n, "month");
                        })),
                      r.monthsCache[i][e]
                    );
                  })
                );
              }),
              (t.weekdays = function (e, t, n) {
                var r = this;
                return (
                  void 0 === t && (t = !1),
                  void 0 === n && (n = !0),
                  at(this, e, n, Ne, function () {
                    var n = t
                        ? {
                            weekday: e,
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        : { weekday: e },
                      i = t ? "format" : "standalone";
                    return (
                      r.weekdaysCache[i][e] ||
                        (r.weekdaysCache[i][e] = (function (e) {
                          for (var t = [], n = 1; n <= 7; n++) {
                            var r = ur.utc(2016, 11, 13 + n);
                            t.push(e(r));
                          }
                          return t;
                        })(function (e) {
                          return r.extract(e, n, "weekday");
                        })),
                      r.weekdaysCache[i][e]
                    );
                  })
                );
              }),
              (t.meridiems = function (e) {
                var t = this;
                return (
                  void 0 === e && (e = !0),
                  at(
                    this,
                    void 0,
                    e,
                    function () {
                      return Ee;
                    },
                    function () {
                      if (!t.meridiemCache) {
                        var e = { hour: "numeric", hour12: !0 };
                        t.meridiemCache = [
                          ur.utc(2016, 11, 13, 9),
                          ur.utc(2016, 11, 13, 19),
                        ].map(function (n) {
                          return t.extract(n, e, "dayperiod");
                        });
                      }
                      return t.meridiemCache;
                    }
                  )
                );
              }),
              (t.eras = function (e, t) {
                var n = this;
                return (
                  void 0 === t && (t = !0),
                  at(this, e, t, _e, function () {
                    var t = { era: e };
                    return (
                      n.eraCache[e] ||
                        (n.eraCache[e] = [
                          ur.utc(-40, 1, 1),
                          ur.utc(2017, 1, 1),
                        ].map(function (e) {
                          return n.extract(e, t, "era");
                        })),
                      n.eraCache[e]
                    );
                  })
                );
              }),
              (t.extract = function (e, t, n) {
                var r = this.dtFormatter(e, t)
                  .formatToParts()
                  .find(function (e) {
                    return e.type.toLowerCase() === n;
                  });
                return r ? r.value : null;
              }),
              (t.numberFormatter = function (e) {
                return (
                  void 0 === e && (e = {}),
                  new st(this.intl, e.forceSimple || this.fastNumbers, e)
                );
              }),
              (t.dtFormatter = function (e, t) {
                return void 0 === t && (t = {}), new ut(e, this.intl, t);
              }),
              (t.relFormatter = function (e) {
                return (
                  void 0 === e && (e = {}),
                  new ct(this.intl, this.isEnglish(), e)
                );
              }),
              (t.isEnglish = function () {
                return (
                  "en" === this.locale ||
                  "en-us" === this.locale.toLowerCase() ||
                  (Y() &&
                    new Intl.DateTimeFormat(this.intl)
                      .resolvedOptions()
                      .locale.startsWith("en-us"))
                );
              }),
              (t.equals = function (e) {
                return (
                  this.locale === e.locale &&
                  this.numberingSystem === e.numberingSystem &&
                  this.outputCalendar === e.outputCalendar
                );
              }),
              r(e, [
                {
                  key: "fastNumbers",
                  get: function () {
                    var e;
                    return (
                      null == this.fastNumbersCached &&
                        (this.fastNumbersCached =
                          (!(e = this).numberingSystem ||
                            "latn" === e.numberingSystem) &&
                          ("latn" === e.numberingSystem ||
                            !e.locale ||
                            e.locale.startsWith("en") ||
                            (Y() &&
                              "latn" ===
                                new Intl.DateTimeFormat(
                                  e.intl
                                ).resolvedOptions().numberingSystem))),
                      this.fastNumbersCached
                    );
                  },
                },
              ]),
              e
            );
          })();
        function ft() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t.reduce(function (e, t) {
            return e + t.source;
          }, "");
          return RegExp("^" + r + "$");
        }
        function dt() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return t
              .reduce(
                function (t, n) {
                  var r = t[0],
                    i = t[1],
                    o = t[2],
                    a = n(e, o),
                    s = a[0],
                    u = a[1],
                    c = a[2];
                  return [Object.assign(r, s), i || u, c];
                },
                [{}, null, 1]
              )
              .slice(0, 2);
          };
        }
        function ht(e) {
          if (null == e) return [null, null];
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          for (var i = 0, o = n; i < o.length; i++) {
            var a = o[i],
              s = a[0],
              u = a[1],
              c = s.exec(e);
            if (c) return u(c);
          }
          return [null, null];
        }
        function mt() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e, n) {
            var r,
              i = {};
            for (r = 0; r < t.length; r++) i[t[r]] = ne(e[n + r]);
            return [i, null, n + r];
          };
        }
        var yt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
          vt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
          gt = RegExp("" + vt.source + yt.source + "?"),
          pt = RegExp("(?:T" + gt.source + ")?"),
          wt = mt("weekYear", "weekNumber", "weekDay"),
          kt = mt("year", "ordinal"),
          bt = RegExp(
            vt.source + " ?(?:" + yt.source + "|(" + ge.source + "))?"
          ),
          Ot = RegExp("(?: " + bt.source + ")?");
        function St(e, t, n) {
          var r = e[t];
          return P(r) ? n : ne(r);
        }
        function Tt(e, t) {
          return [
            { year: St(e, t), month: St(e, t + 1, 1), day: St(e, t + 2, 1) },
            null,
            t + 3,
          ];
        }
        function Mt(e, t) {
          return [
            {
              hours: St(e, t, 0),
              minutes: St(e, t + 1, 0),
              seconds: St(e, t + 2, 0),
              milliseconds: re(e[t + 3]),
            },
            null,
            t + 4,
          ];
        }
        function Nt(e, t) {
          var n = !e[t] && !e[t + 1],
            r = de(e[t + 1], e[t + 2]);
          return [{}, n ? null : Pe.instance(r), t + 3];
        }
        function Et(e, t) {
          return [{}, e[t] ? Ue.create(e[t]) : null, t + 1];
        }
        var Dt = RegExp("^T?" + vt.source + "$"),
          It =
            /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
        function Vt(e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            i = e[3],
            o = e[4],
            a = e[5],
            s = e[6],
            u = e[7],
            c = e[8],
            l = "-" === t[0],
            f = u && "-" === u[0],
            d = function (e, t) {
              return (
                void 0 === t && (t = !1),
                void 0 !== e && (t || (e && l)) ? -e : e
              );
            };
          return [
            {
              years: d(ne(n)),
              months: d(ne(r)),
              weeks: d(ne(i)),
              days: d(ne(o)),
              hours: d(ne(a)),
              minutes: d(ne(s)),
              seconds: d(ne(u), "-0" === u),
              milliseconds: d(re(c), f),
            },
          ];
        }
        var _t = {
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480,
        };
        function Lt(e, t, n, r, i, o, a) {
          var s = {
            year: 2 === t.length ? le(ne(t)) : ne(t),
            month: ke.indexOf(n) + 1,
            day: ne(r),
            hour: ne(i),
            minute: ne(o),
          };
          return (
            a && (s.second = ne(a)),
            e &&
              (s.weekday =
                e.length > 3 ? Se.indexOf(e) + 1 : Te.indexOf(e) + 1),
            s
          );
        }
        var xt =
          /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
        function Ct(e) {
          var t,
            n = e[1],
            r = e[2],
            i = e[3],
            o = e[4],
            a = e[5],
            s = e[6],
            u = e[7],
            c = e[8],
            l = e[9],
            f = e[10],
            d = e[11],
            h = Lt(n, o, i, r, a, s, u);
          return (t = c ? _t[c] : l ? 0 : de(f, d)), [h, new Pe(t)];
        }
        var jt =
            /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
          Ft =
            /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
          Zt =
            /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
        function At(e) {
          var t = e[1],
            n = e[2],
            r = e[3];
          return [Lt(t, e[4], r, n, e[5], e[6], e[7]), Pe.utcInstance];
        }
        function zt(e) {
          var t = e[1],
            n = e[2],
            r = e[3],
            i = e[4],
            o = e[5],
            a = e[6];
          return [Lt(t, e[7], n, r, i, o, a), Pe.utcInstance];
        }
        var qt = ft(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, pt),
          Ht = ft(/(\d{4})-?W(\d\d)(?:-?(\d))?/, pt),
          $t = ft(/(\d{4})-?(\d{3})/, pt),
          Ut = ft(gt),
          Wt = dt(Tt, Mt, Nt),
          Pt = dt(wt, Mt, Nt),
          Rt = dt(kt, Mt, Nt),
          Jt = dt(Mt, Nt),
          Yt = dt(Mt),
          Gt = ft(/(\d{4})-(\d\d)-(\d\d)/, Ot),
          Bt = ft(bt),
          Qt = dt(Tt, Mt, Nt, Et),
          Kt = dt(Mt, Nt, Et),
          Xt = {
            weeks: {
              days: 7,
              hours: 168,
              minutes: 10080,
              seconds: 604800,
              milliseconds: 6048e5,
            },
            days: {
              hours: 24,
              minutes: 1440,
              seconds: 86400,
              milliseconds: 864e5,
            },
            hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
            minutes: { seconds: 60, milliseconds: 6e4 },
            seconds: { milliseconds: 1e3 },
          },
          en = Object.assign(
            {
              years: {
                quarters: 4,
                months: 12,
                weeks: 52,
                days: 365,
                hours: 8760,
                minutes: 525600,
                seconds: 31536e3,
                milliseconds: 31536e6,
              },
              quarters: {
                months: 3,
                weeks: 13,
                days: 91,
                hours: 2184,
                minutes: 131040,
                seconds: 7862400,
                milliseconds: 78624e5,
              },
              months: {
                weeks: 4,
                days: 30,
                hours: 720,
                minutes: 43200,
                seconds: 2592e3,
                milliseconds: 2592e6,
              },
            },
            Xt
          ),
          tn = Object.assign(
            {
              years: {
                quarters: 4,
                months: 12,
                weeks: 52.1775,
                days: 365.2425,
                hours: 8765.82,
                minutes: 525949.2,
                seconds: 525949.2 * 60,
                milliseconds: 525949.2 * 60 * 1e3,
              },
              quarters: {
                months: 3,
                weeks: 13.044375,
                days: 91.310625,
                hours: 2191.455,
                minutes: 131487.3,
                seconds: (525949.2 * 60) / 4,
                milliseconds: 7889237999.999999,
              },
              months: {
                weeks: 4.3481250000000005,
                days: 30.436875,
                hours: 730.485,
                minutes: 43829.1,
                seconds: 2629746,
                milliseconds: 2629746e3,
              },
            },
            Xt
          ),
          nn = [
            "years",
            "quarters",
            "months",
            "weeks",
            "days",
            "hours",
            "minutes",
            "seconds",
            "milliseconds",
          ],
          rn = nn.slice(0).reverse();
        function on(e, t, n) {
          void 0 === n && (n = !1);
          var r = {
            values: n ? t.values : Object.assign({}, e.values, t.values || {}),
            loc: e.loc.clone(t.loc),
            conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
          };
          return new sn(r);
        }
        function an(e, t, n, r, i) {
          var o = e[i][n],
            a = t[n] / o,
            s =
              Math.sign(a) !== Math.sign(r[i]) && 0 !== r[i] && Math.abs(a) <= 1
                ? (function (e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e);
                  })(a)
                : Math.trunc(a);
          (r[i] += s), (t[n] -= s * o);
        }
        var sn = (function () {
          function e(e) {
            var t = "longterm" === e.conversionAccuracy || !1;
            (this.values = e.values),
              (this.loc = e.loc || lt.create()),
              (this.conversionAccuracy = t ? "longterm" : "casual"),
              (this.invalid = e.invalid || null),
              (this.matrix = t ? tn : en),
              (this.isLuxonDuration = !0);
          }
          (e.fromMillis = function (t, n) {
            return e.fromObject(Object.assign({ milliseconds: t }, n));
          }),
            (e.fromObject = function (t) {
              if (null == t || "object" != typeof t)
                throw new p(
                  "Duration.fromObject: argument expected to be an object, got " +
                    (null === t ? "null" : typeof t)
                );
              return new e({
                values: me(t, e.normalizeUnit, [
                  "locale",
                  "numberingSystem",
                  "conversionAccuracy",
                  "zone",
                ]),
                loc: lt.fromObject(t),
                conversionAccuracy: t.conversionAccuracy,
              });
            }),
            (e.fromISO = function (t, n) {
              var r = (function (e) {
                  return ht(e, [It, Vt]);
                })(t),
                i = r[0];
              if (i) {
                var o = Object.assign(i, n);
                return e.fromObject(o);
              }
              return e.invalid(
                "unparsable",
                'the input "' + t + "\" can't be parsed as ISO 8601"
              );
            }),
            (e.fromISOTime = function (t, n) {
              var r = (function (e) {
                  return ht(e, [Dt, Yt]);
                })(t),
                i = r[0];
              if (i) {
                var o = Object.assign(i, n);
                return e.fromObject(o);
              }
              return e.invalid(
                "unparsable",
                'the input "' + t + "\" can't be parsed as ISO 8601"
              );
            }),
            (e.invalid = function (t, n) {
              if ((void 0 === n && (n = null), !t))
                throw new p("need to specify a reason the Duration is invalid");
              var r = t instanceof je ? t : new je(t, n);
              if (et.throwOnInvalid) throw new y(r);
              return new e({ invalid: r });
            }),
            (e.normalizeUnit = function (e) {
              var t = {
                year: "years",
                years: "years",
                quarter: "quarters",
                quarters: "quarters",
                month: "months",
                months: "months",
                week: "weeks",
                weeks: "weeks",
                day: "days",
                days: "days",
                hour: "hours",
                hours: "hours",
                minute: "minutes",
                minutes: "minutes",
                second: "seconds",
                seconds: "seconds",
                millisecond: "milliseconds",
                milliseconds: "milliseconds",
              }[e ? e.toLowerCase() : e];
              if (!t) throw new g(e);
              return t;
            }),
            (e.isDuration = function (e) {
              return (e && e.isLuxonDuration) || !1;
            });
          var t = e.prototype;
          return (
            (t.toFormat = function (e, t) {
              void 0 === t && (t = {});
              var n = Object.assign({}, t, {
                floor: !1 !== t.round && !1 !== t.floor,
              });
              return this.isValid
                ? Ce.create(this.loc, n).formatDurationFromString(this, e)
                : "Invalid Duration";
            }),
            (t.toObject = function (e) {
              if ((void 0 === e && (e = {}), !this.isValid)) return {};
              var t = Object.assign({}, this.values);
              return (
                e.includeConfig &&
                  ((t.conversionAccuracy = this.conversionAccuracy),
                  (t.numberingSystem = this.loc.numberingSystem),
                  (t.locale = this.loc.locale)),
                t
              );
            }),
            (t.toISO = function () {
              if (!this.isValid) return null;
              var e = "P";
              return (
                0 !== this.years && (e += this.years + "Y"),
                (0 === this.months && 0 === this.quarters) ||
                  (e += this.months + 3 * this.quarters + "M"),
                0 !== this.weeks && (e += this.weeks + "W"),
                0 !== this.days && (e += this.days + "D"),
                (0 === this.hours &&
                  0 === this.minutes &&
                  0 === this.seconds &&
                  0 === this.milliseconds) ||
                  (e += "T"),
                0 !== this.hours && (e += this.hours + "H"),
                0 !== this.minutes && (e += this.minutes + "M"),
                (0 === this.seconds && 0 === this.milliseconds) ||
                  (e += ie(this.seconds + this.milliseconds / 1e3, 3) + "S"),
                "P" === e && (e += "T0S"),
                e
              );
            }),
            (t.toISOTime = function (e) {
              if ((void 0 === e && (e = {}), !this.isValid)) return null;
              var t = this.toMillis();
              if (t < 0 || t >= 864e5) return null;
              e = Object.assign(
                {
                  suppressMilliseconds: !1,
                  suppressSeconds: !1,
                  includePrefix: !1,
                  format: "extended",
                },
                e
              );
              var n = this.shiftTo(
                  "hours",
                  "minutes",
                  "seconds",
                  "milliseconds"
                ),
                r = "basic" === e.format ? "hhmm" : "hh:mm";
              (e.suppressSeconds && 0 === n.seconds && 0 === n.milliseconds) ||
                ((r += "basic" === e.format ? "ss" : ":ss"),
                (e.suppressMilliseconds && 0 === n.milliseconds) ||
                  (r += ".SSS"));
              var i = n.toFormat(r);
              return e.includePrefix && (i = "T" + i), i;
            }),
            (t.toJSON = function () {
              return this.toISO();
            }),
            (t.toString = function () {
              return this.toISO();
            }),
            (t.toMillis = function () {
              return this.as("milliseconds");
            }),
            (t.valueOf = function () {
              return this.toMillis();
            }),
            (t.plus = function (e) {
              if (!this.isValid) return this;
              for (var t, n = un(e), r = {}, i = f(nn); !(t = i()).done; ) {
                var o = t.value;
                (X(n.values, o) || X(this.values, o)) &&
                  (r[o] = n.get(o) + this.get(o));
              }
              return on(this, { values: r }, !0);
            }),
            (t.minus = function (e) {
              if (!this.isValid) return this;
              var t = un(e);
              return this.plus(t.negate());
            }),
            (t.mapUnits = function (e) {
              if (!this.isValid) return this;
              for (
                var t = {}, n = 0, r = Object.keys(this.values);
                n < r.length;
                n++
              ) {
                var i = r[n];
                t[i] = he(e(this.values[i], i));
              }
              return on(this, { values: t }, !0);
            }),
            (t.get = function (t) {
              return this[e.normalizeUnit(t)];
            }),
            (t.set = function (t) {
              return this.isValid
                ? on(this, {
                    values: Object.assign(
                      this.values,
                      me(t, e.normalizeUnit, [])
                    ),
                  })
                : this;
            }),
            (t.reconfigure = function (e) {
              var t = void 0 === e ? {} : e,
                n = t.locale,
                r = t.numberingSystem,
                i = t.conversionAccuracy,
                o = { loc: this.loc.clone({ locale: n, numberingSystem: r }) };
              return i && (o.conversionAccuracy = i), on(this, o);
            }),
            (t.as = function (e) {
              return this.isValid ? this.shiftTo(e).get(e) : NaN;
            }),
            (t.normalize = function () {
              if (!this.isValid) return this;
              var e = this.toObject();
              return (
                (function (e, t) {
                  rn.reduce(function (n, r) {
                    return P(t[r]) ? n : (n && an(e, t, n, t, r), r);
                  }, null);
                })(this.matrix, e),
                on(this, { values: e }, !0)
              );
            }),
            (t.shiftTo = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              if (!this.isValid) return this;
              if (0 === n.length) return this;
              n = n.map(function (t) {
                return e.normalizeUnit(t);
              });
              for (
                var i, o, a = {}, s = {}, u = this.toObject(), c = f(nn);
                !(o = c()).done;

              ) {
                var l = o.value;
                if (n.indexOf(l) >= 0) {
                  i = l;
                  var d = 0;
                  for (var h in s) (d += this.matrix[h][l] * s[h]), (s[h] = 0);
                  R(u[l]) && (d += u[l]);
                  var m = Math.trunc(d);
                  for (var y in ((a[l] = m), (s[l] = d - m), u))
                    nn.indexOf(y) > nn.indexOf(l) &&
                      an(this.matrix, u, y, a, l);
                } else R(u[l]) && (s[l] = u[l]);
              }
              for (var v in s)
                0 !== s[v] &&
                  (a[i] += v === i ? s[v] : s[v] / this.matrix[i][v]);
              return on(this, { values: a }, !0).normalize();
            }),
            (t.negate = function () {
              if (!this.isValid) return this;
              for (
                var e = {}, t = 0, n = Object.keys(this.values);
                t < n.length;
                t++
              ) {
                var r = n[t];
                e[r] = -this.values[r];
              }
              return on(this, { values: e }, !0);
            }),
            (t.equals = function (e) {
              if (!this.isValid || !e.isValid) return !1;
              if (!this.loc.equals(e.loc)) return !1;
              for (var t, n = f(nn); !(t = n()).done; ) {
                var r = t.value;
                if (
                  ((i = this.values[r]),
                  (o = e.values[r]),
                  !(void 0 === i || 0 === i
                    ? void 0 === o || 0 === o
                    : i === o))
                )
                  return !1;
              }
              var i, o;
              return !0;
            }),
            r(e, [
              {
                key: "locale",
                get: function () {
                  return this.isValid ? this.loc.locale : null;
                },
              },
              {
                key: "numberingSystem",
                get: function () {
                  return this.isValid ? this.loc.numberingSystem : null;
                },
              },
              {
                key: "years",
                get: function () {
                  return this.isValid ? this.values.years || 0 : NaN;
                },
              },
              {
                key: "quarters",
                get: function () {
                  return this.isValid ? this.values.quarters || 0 : NaN;
                },
              },
              {
                key: "months",
                get: function () {
                  return this.isValid ? this.values.months || 0 : NaN;
                },
              },
              {
                key: "weeks",
                get: function () {
                  return this.isValid ? this.values.weeks || 0 : NaN;
                },
              },
              {
                key: "days",
                get: function () {
                  return this.isValid ? this.values.days || 0 : NaN;
                },
              },
              {
                key: "hours",
                get: function () {
                  return this.isValid ? this.values.hours || 0 : NaN;
                },
              },
              {
                key: "minutes",
                get: function () {
                  return this.isValid ? this.values.minutes || 0 : NaN;
                },
              },
              {
                key: "seconds",
                get: function () {
                  return this.isValid ? this.values.seconds || 0 : NaN;
                },
              },
              {
                key: "milliseconds",
                get: function () {
                  return this.isValid ? this.values.milliseconds || 0 : NaN;
                },
              },
              {
                key: "isValid",
                get: function () {
                  return null === this.invalid;
                },
              },
              {
                key: "invalidReason",
                get: function () {
                  return this.invalid ? this.invalid.reason : null;
                },
              },
              {
                key: "invalidExplanation",
                get: function () {
                  return this.invalid ? this.invalid.explanation : null;
                },
              },
            ]),
            e
          );
        })();
        function un(e) {
          if (R(e)) return sn.fromMillis(e);
          if (sn.isDuration(e)) return e;
          if ("object" == typeof e) return sn.fromObject(e);
          throw new p(
            "Unknown duration argument " + e + " of type " + typeof e
          );
        }
        var cn = "Invalid Interval";
        function ln(e, t) {
          return e && e.isValid
            ? t && t.isValid
              ? t < e
                ? fn.invalid(
                    "end before start",
                    "The end of an interval must be after its start, but you had start=" +
                      e.toISO() +
                      " and end=" +
                      t.toISO()
                  )
                : null
              : fn.invalid("missing or invalid end")
            : fn.invalid("missing or invalid start");
        }
        var fn = (function () {
            function e(e) {
              (this.s = e.start),
                (this.e = e.end),
                (this.invalid = e.invalid || null),
                (this.isLuxonInterval = !0);
            }
            (e.invalid = function (t, n) {
              if ((void 0 === n && (n = null), !t))
                throw new p("need to specify a reason the Interval is invalid");
              var r = t instanceof je ? t : new je(t, n);
              if (et.throwOnInvalid) throw new m(r);
              return new e({ invalid: r });
            }),
              (e.fromDateTimes = function (t, n) {
                var r = cr(t),
                  i = cr(n),
                  o = ln(r, i);
                return null == o ? new e({ start: r, end: i }) : o;
              }),
              (e.after = function (t, n) {
                var r = un(n),
                  i = cr(t);
                return e.fromDateTimes(i, i.plus(r));
              }),
              (e.before = function (t, n) {
                var r = un(n),
                  i = cr(t);
                return e.fromDateTimes(i.minus(r), i);
              }),
              (e.fromISO = function (t, n) {
                var r = (t || "").split("/", 2),
                  i = r[0],
                  o = r[1];
                if (i && o) {
                  var a, s, u, c;
                  try {
                    s = (a = ur.fromISO(i, n)).isValid;
                  } catch (o) {
                    s = !1;
                  }
                  try {
                    c = (u = ur.fromISO(o, n)).isValid;
                  } catch (o) {
                    c = !1;
                  }
                  if (s && c) return e.fromDateTimes(a, u);
                  if (s) {
                    var l = sn.fromISO(o, n);
                    if (l.isValid) return e.after(a, l);
                  } else if (c) {
                    var f = sn.fromISO(i, n);
                    if (f.isValid) return e.before(u, f);
                  }
                }
                return e.invalid(
                  "unparsable",
                  'the input "' + t + "\" can't be parsed as ISO 8601"
                );
              }),
              (e.isInterval = function (e) {
                return (e && e.isLuxonInterval) || !1;
              });
            var t = e.prototype;
            return (
              (t.length = function (e) {
                return (
                  void 0 === e && (e = "milliseconds"),
                  this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN
                );
              }),
              (t.count = function (e) {
                if ((void 0 === e && (e = "milliseconds"), !this.isValid))
                  return NaN;
                var t = this.start.startOf(e),
                  n = this.end.startOf(e);
                return Math.floor(n.diff(t, e).get(e)) + 1;
              }),
              (t.hasSame = function (e) {
                return (
                  !!this.isValid &&
                  (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
                );
              }),
              (t.isEmpty = function () {
                return this.s.valueOf() === this.e.valueOf();
              }),
              (t.isAfter = function (e) {
                return !!this.isValid && this.s > e;
              }),
              (t.isBefore = function (e) {
                return !!this.isValid && this.e <= e;
              }),
              (t.contains = function (e) {
                return !!this.isValid && this.s <= e && this.e > e;
              }),
              (t.set = function (t) {
                var n = void 0 === t ? {} : t,
                  r = n.start,
                  i = n.end;
                return this.isValid
                  ? e.fromDateTimes(r || this.s, i || this.e)
                  : this;
              }),
              (t.splitAt = function () {
                var t = this;
                if (!this.isValid) return [];
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                for (
                  var o = r
                      .map(cr)
                      .filter(function (e) {
                        return t.contains(e);
                      })
                      .sort(),
                    a = [],
                    s = this.s,
                    u = 0;
                  s < this.e;

                ) {
                  var c = o[u] || this.e,
                    l = +c > +this.e ? this.e : c;
                  a.push(e.fromDateTimes(s, l)), (s = l), (u += 1);
                }
                return a;
              }),
              (t.splitBy = function (t) {
                var n = un(t);
                if (!this.isValid || !n.isValid || 0 === n.as("milliseconds"))
                  return [];
                for (var r, i = this.s, o = 1, a = []; i < this.e; ) {
                  var s = this.start.plus(
                    n.mapUnits(function (e) {
                      return e * o;
                    })
                  );
                  (r = +s > +this.e ? this.e : s),
                    a.push(e.fromDateTimes(i, r)),
                    (i = r),
                    (o += 1);
                }
                return a;
              }),
              (t.divideEqually = function (e) {
                return this.isValid
                  ? this.splitBy(this.length() / e).slice(0, e)
                  : [];
              }),
              (t.overlaps = function (e) {
                return this.e > e.s && this.s < e.e;
              }),
              (t.abutsStart = function (e) {
                return !!this.isValid && +this.e == +e.s;
              }),
              (t.abutsEnd = function (e) {
                return !!this.isValid && +e.e == +this.s;
              }),
              (t.engulfs = function (e) {
                return !!this.isValid && this.s <= e.s && this.e >= e.e;
              }),
              (t.equals = function (e) {
                return (
                  !(!this.isValid || !e.isValid) &&
                  this.s.equals(e.s) &&
                  this.e.equals(e.e)
                );
              }),
              (t.intersection = function (t) {
                if (!this.isValid) return this;
                var n = this.s > t.s ? this.s : t.s,
                  r = this.e < t.e ? this.e : t.e;
                return n >= r ? null : e.fromDateTimes(n, r);
              }),
              (t.union = function (t) {
                if (!this.isValid) return this;
                var n = this.s < t.s ? this.s : t.s,
                  r = this.e > t.e ? this.e : t.e;
                return e.fromDateTimes(n, r);
              }),
              (e.merge = function (e) {
                var t = e
                    .sort(function (e, t) {
                      return e.s - t.s;
                    })
                    .reduce(
                      function (e, t) {
                        var n = e[0],
                          r = e[1];
                        return r
                          ? r.overlaps(t) || r.abutsStart(t)
                            ? [n, r.union(t)]
                            : [n.concat([r]), t]
                          : [n, t];
                      },
                      [[], null]
                    ),
                  n = t[0],
                  r = t[1];
                return r && n.push(r), n;
              }),
              (e.xor = function (t) {
                for (
                  var n,
                    r,
                    i = null,
                    o = 0,
                    a = [],
                    s = t.map(function (e) {
                      return [
                        { time: e.s, type: "s" },
                        { time: e.e, type: "e" },
                      ];
                    }),
                    u = f(
                      (n = Array.prototype).concat
                        .apply(n, s)
                        .sort(function (e, t) {
                          return e.time - t.time;
                        })
                    );
                  !(r = u()).done;

                ) {
                  var c = r.value;
                  1 === (o += "s" === c.type ? 1 : -1)
                    ? (i = c.time)
                    : (i && +i != +c.time && a.push(e.fromDateTimes(i, c.time)),
                      (i = null));
                }
                return e.merge(a);
              }),
              (t.difference = function () {
                for (
                  var t = this, n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                return e
                  .xor([this].concat(r))
                  .map(function (e) {
                    return t.intersection(e);
                  })
                  .filter(function (e) {
                    return e && !e.isEmpty();
                  });
              }),
              (t.toString = function () {
                return this.isValid
                  ? "[" + this.s.toISO() + " â€“ " + this.e.toISO() + ")"
                  : cn;
              }),
              (t.toISO = function (e) {
                return this.isValid
                  ? this.s.toISO(e) + "/" + this.e.toISO(e)
                  : cn;
              }),
              (t.toISODate = function () {
                return this.isValid
                  ? this.s.toISODate() + "/" + this.e.toISODate()
                  : cn;
              }),
              (t.toISOTime = function (e) {
                return this.isValid
                  ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e)
                  : cn;
              }),
              (t.toFormat = function (e, t) {
                var n = (void 0 === t ? {} : t).separator,
                  r = void 0 === n ? " â€“ " : n;
                return this.isValid
                  ? "" + this.s.toFormat(e) + r + this.e.toFormat(e)
                  : cn;
              }),
              (t.toDuration = function (e, t) {
                return this.isValid
                  ? this.e.diff(this.s, e, t)
                  : sn.invalid(this.invalidReason);
              }),
              (t.mapEndpoints = function (t) {
                return e.fromDateTimes(t(this.s), t(this.e));
              }),
              r(e, [
                {
                  key: "start",
                  get: function () {
                    return this.isValid ? this.s : null;
                  },
                },
                {
                  key: "end",
                  get: function () {
                    return this.isValid ? this.e : null;
                  },
                },
                {
                  key: "isValid",
                  get: function () {
                    return null === this.invalidReason;
                  },
                },
                {
                  key: "invalidReason",
                  get: function () {
                    return this.invalid ? this.invalid.reason : null;
                  },
                },
                {
                  key: "invalidExplanation",
                  get: function () {
                    return this.invalid ? this.invalid.explanation : null;
                  },
                },
              ]),
              e
            );
          })(),
          dn = (function () {
            function e() {}
            return (
              (e.hasDST = function (e) {
                void 0 === e && (e = et.defaultZone);
                var t = ur.now().setZone(e).set({ month: 12 });
                return !e.universal && t.offset !== t.set({ month: 6 }).offset;
              }),
              (e.isValidIANAZone = function (e) {
                return Ue.isValidSpecifier(e) && Ue.isValidZone(e);
              }),
              (e.normalizeZone = function (e) {
                return Je(e, et.defaultZone);
              }),
              (e.months = function (e, t) {
                void 0 === e && (e = "long");
                var n = void 0 === t ? {} : t,
                  r = n.locale,
                  i = void 0 === r ? null : r,
                  o = n.numberingSystem,
                  a = void 0 === o ? null : o,
                  s = n.locObj,
                  u = void 0 === s ? null : s,
                  c = n.outputCalendar,
                  l = void 0 === c ? "gregory" : c;
                return (u || lt.create(i, a, l)).months(e);
              }),
              (e.monthsFormat = function (e, t) {
                void 0 === e && (e = "long");
                var n = void 0 === t ? {} : t,
                  r = n.locale,
                  i = void 0 === r ? null : r,
                  o = n.numberingSystem,
                  a = void 0 === o ? null : o,
                  s = n.locObj,
                  u = void 0 === s ? null : s,
                  c = n.outputCalendar,
                  l = void 0 === c ? "gregory" : c;
                return (u || lt.create(i, a, l)).months(e, !0);
              }),
              (e.weekdays = function (e, t) {
                void 0 === e && (e = "long");
                var n = void 0 === t ? {} : t,
                  r = n.locale,
                  i = void 0 === r ? null : r,
                  o = n.numberingSystem,
                  a = void 0 === o ? null : o,
                  s = n.locObj;
                return (
                  (void 0 === s ? null : s) || lt.create(i, a, null)
                ).weekdays(e);
              }),
              (e.weekdaysFormat = function (e, t) {
                void 0 === e && (e = "long");
                var n = void 0 === t ? {} : t,
                  r = n.locale,
                  i = void 0 === r ? null : r,
                  o = n.numberingSystem,
                  a = void 0 === o ? null : o,
                  s = n.locObj;
                return (
                  (void 0 === s ? null : s) || lt.create(i, a, null)
                ).weekdays(e, !0);
              }),
              (e.meridiems = function (e) {
                var t = (void 0 === e ? {} : e).locale,
                  n = void 0 === t ? null : t;
                return lt.create(n).meridiems();
              }),
              (e.eras = function (e, t) {
                void 0 === e && (e = "short");
                var n = (void 0 === t ? {} : t).locale,
                  r = void 0 === n ? null : n;
                return lt.create(r, null, "gregory").eras(e);
              }),
              (e.features = function () {
                var e = !1,
                  t = !1,
                  n = !1,
                  r = !1;
                if (Y()) {
                  (e = !0), (t = G()), (r = B());
                  try {
                    n =
                      "America/New_York" ===
                      new Intl.DateTimeFormat("en", {
                        timeZone: "America/New_York",
                      }).resolvedOptions().timeZone;
                  } catch (e) {
                    n = !1;
                  }
                }
                return { intl: e, intlTokens: t, zones: n, relative: r };
              }),
              e
            );
          })();
        function hn(e, t) {
          var n = function (e) {
              return e.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf();
            },
            r = n(t) - n(e);
          return Math.floor(sn.fromMillis(r).as("days"));
        }
        var mn = {
            arab: "[Ù -Ù©]",
            arabext: "[Û°-Û¹]",
            bali: "[á­-á­™]",
            beng: "[à§¦-à§¯]",
            deva: "[à¥¦-à¥¯]",
            fullwide: "[ï¼-ï¼™]",
            gujr: "[à«¦-à«¯]",
            hanidec: "[ã€‡|ä¸€|äºŒ|ä¸‰|å››|äº”|å…­|ä¸ƒ|å…«|ä¹]",
            khmr: "[áŸ -áŸ©]",
            knda: "[à³¦-à³¯]",
            laoo: "[à»-à»™]",
            limb: "[á¥†-á¥]",
            mlym: "[àµ¦-àµ¯]",
            mong: "[á -á ™]",
            mymr: "[á€-á‰]",
            orya: "[à­¦-à­¯]",
            tamldec: "[à¯¦-à¯¯]",
            telu: "[à±¦-à±¯]",
            thai: "[à¹-à¹™]",
            tibt: "[à¼ -à¼©]",
            latn: "\\d",
          },
          yn = {
            arab: [1632, 1641],
            arabext: [1776, 1785],
            bali: [6992, 7001],
            beng: [2534, 2543],
            deva: [2406, 2415],
            fullwide: [65296, 65303],
            gujr: [2790, 2799],
            khmr: [6112, 6121],
            knda: [3302, 3311],
            laoo: [3792, 3801],
            limb: [6470, 6479],
            mlym: [3430, 3439],
            mong: [6160, 6169],
            mymr: [4160, 4169],
            orya: [2918, 2927],
            tamldec: [3046, 3055],
            telu: [3174, 3183],
            thai: [3664, 3673],
            tibt: [3872, 3881],
          },
          vn = mn.hanidec.replace(/[\[|\]]/g, "").split("");
        function gn(e, t) {
          var n = e.numberingSystem;
          return void 0 === t && (t = ""), new RegExp("" + mn[n || "latn"] + t);
        }
        function pn(e, t) {
          return (
            void 0 === t &&
              (t = function (e) {
                return e;
              }),
            {
              regex: e,
              deser: function (e) {
                var n = e[0];
                return t(
                  (function (e) {
                    var t = parseInt(e, 10);
                    if (isNaN(t)) {
                      t = "";
                      for (var n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        if (-1 !== e[n].search(mn.hanidec))
                          t += vn.indexOf(e[n]);
                        else
                          for (var i in yn) {
                            var o = yn[i],
                              a = o[0],
                              s = o[1];
                            r >= a && r <= s && (t += r - a);
                          }
                      }
                      return parseInt(t, 10);
                    }
                    return t;
                  })(n)
                );
              },
            }
          );
        }
        var wn = "( |" + String.fromCharCode(160) + ")",
          kn = new RegExp(wn, "g");
        function bn(e) {
          return e.replace(/\./g, "\\.?").replace(kn, wn);
        }
        function On(e) {
          return e.replace(/\./g, "").replace(kn, " ").toLowerCase();
        }
        function Sn(e, t) {
          return null === e
            ? null
            : {
                regex: RegExp(e.map(bn).join("|")),
                deser: function (n) {
                  var r = n[0];
                  return (
                    e.findIndex(function (e) {
                      return On(r) === On(e);
                    }) + t
                  );
                },
              };
        }
        function Tn(e, t) {
          return {
            regex: e,
            deser: function (e) {
              return de(e[1], e[2]);
            },
            groups: t,
          };
        }
        function Mn(e) {
          return {
            regex: e,
            deser: function (e) {
              return e[0];
            },
          };
        }
        var Nn = {
            year: { "2-digit": "yy", numeric: "yyyyy" },
            month: {
              numeric: "M",
              "2-digit": "MM",
              short: "MMM",
              long: "MMMM",
            },
            day: { numeric: "d", "2-digit": "dd" },
            weekday: { short: "EEE", long: "EEEE" },
            dayperiod: "a",
            dayPeriod: "a",
            hour: { numeric: "h", "2-digit": "hh" },
            minute: { numeric: "m", "2-digit": "mm" },
            second: { numeric: "s", "2-digit": "ss" },
          },
          En = null;
        function Dn(e, t, n) {
          var r = (function (e, t) {
              var n;
              return (n = Array.prototype).concat.apply(
                n,
                e.map(function (e) {
                  return (function (e, t) {
                    if (e.literal) return e;
                    var n = Ce.macroTokenToFormatOpts(e.val);
                    if (!n) return e;
                    var r = Ce.create(t, n)
                      .formatDateTimeParts(
                        (En || (En = ur.fromMillis(1555555555555)), En)
                      )
                      .map(function (e) {
                        return (function (e, t, n) {
                          var r = e.type,
                            i = e.value;
                          if ("literal" === r) return { literal: !0, val: i };
                          var o = n[r],
                            a = Nn[r];
                          return (
                            "object" == typeof a && (a = a[o]),
                            a ? { literal: !1, val: a } : void 0
                          );
                        })(e, 0, n);
                      });
                    return r.includes(void 0) ? e : r;
                  })(e, t);
                })
              );
            })(Ce.parseFormat(n), e),
            i = r.map(function (t) {
              return (
                (n = t),
                (i = gn((r = e))),
                (o = gn(r, "{2}")),
                (a = gn(r, "{3}")),
                (s = gn(r, "{4}")),
                (u = gn(r, "{6}")),
                (c = gn(r, "{1,2}")),
                (l = gn(r, "{1,3}")),
                (f = gn(r, "{1,6}")),
                (d = gn(r, "{1,9}")),
                (h = gn(r, "{2,4}")),
                (m = gn(r, "{4,6}")),
                (y = function (e) {
                  return {
                    regex: RegExp(
                      ((t = e.val),
                      t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))
                    ),
                    deser: function (e) {
                      return e[0];
                    },
                    literal: !0,
                  };
                  var t;
                }),
                (v = (function (e) {
                  if (n.literal) return y(e);
                  switch (e.val) {
                    case "G":
                      return Sn(r.eras("short", !1), 0);
                    case "GG":
                      return Sn(r.eras("long", !1), 0);
                    case "y":
                      return pn(f);
                    case "yy":
                    case "kk":
                      return pn(h, le);
                    case "yyyy":
                    case "kkkk":
                      return pn(s);
                    case "yyyyy":
                      return pn(m);
                    case "yyyyyy":
                      return pn(u);
                    case "M":
                    case "L":
                    case "d":
                    case "H":
                    case "h":
                    case "m":
                    case "q":
                    case "s":
                    case "W":
                      return pn(c);
                    case "MM":
                    case "LL":
                    case "dd":
                    case "HH":
                    case "hh":
                    case "mm":
                    case "qq":
                    case "ss":
                    case "WW":
                      return pn(o);
                    case "MMM":
                      return Sn(r.months("short", !0, !1), 1);
                    case "MMMM":
                      return Sn(r.months("long", !0, !1), 1);
                    case "LLL":
                      return Sn(r.months("short", !1, !1), 1);
                    case "LLLL":
                      return Sn(r.months("long", !1, !1), 1);
                    case "o":
                    case "S":
                      return pn(l);
                    case "ooo":
                    case "SSS":
                      return pn(a);
                    case "u":
                      return Mn(d);
                    case "a":
                      return Sn(r.meridiems(), 0);
                    case "E":
                    case "c":
                      return pn(i);
                    case "EEE":
                      return Sn(r.weekdays("short", !1, !1), 1);
                    case "EEEE":
                      return Sn(r.weekdays("long", !1, !1), 1);
                    case "ccc":
                      return Sn(r.weekdays("short", !0, !1), 1);
                    case "cccc":
                      return Sn(r.weekdays("long", !0, !1), 1);
                    case "Z":
                    case "ZZ":
                      return Tn(
                        new RegExp(
                          "([+-]" + c.source + ")(?::(" + o.source + "))?"
                        ),
                        2
                      );
                    case "ZZZ":
                      return Tn(
                        new RegExp("([+-]" + c.source + ")(" + o.source + ")?"),
                        2
                      );
                    case "z":
                      return Mn(/[a-z_+-/]{1,256}?/i);
                    default:
                      return y(e);
                  }
                })(n) || {
                  invalidReason:
                    "missing Intl.DateTimeFormat.formatToParts support",
                }),
                (v.token = n),
                v
              );
              var n, r, i, o, a, s, u, c, l, f, d, h, m, y, v;
            }),
            o = i.find(function (e) {
              return e.invalidReason;
            });
          if (o) return { input: t, tokens: r, invalidReason: o.invalidReason };
          var a = (function (e) {
              return [
                "^" +
                  e
                    .map(function (e) {
                      return e.regex;
                    })
                    .reduce(function (e, t) {
                      return e + "(" + t.source + ")";
                    }, "") +
                  "$",
                e,
              ];
            })(i),
            s = a[0],
            u = a[1],
            c = RegExp(s, "i"),
            l = (function (e, t, n) {
              var r = e.match(t);
              if (r) {
                var i = {},
                  o = 1;
                for (var a in n)
                  if (X(n, a)) {
                    var s = n[a],
                      u = s.groups ? s.groups + 1 : 1;
                    !s.literal &&
                      s.token &&
                      (i[s.token.val[0]] = s.deser(r.slice(o, o + u))),
                      (o += u);
                  }
                return [r, i];
              }
              return [r, {}];
            })(t, c, u),
            f = l[0],
            d = l[1],
            h = d
              ? (function (e) {
                  var t;
                  return (
                    (t = P(e.Z)
                      ? P(e.z)
                        ? null
                        : Ue.create(e.z)
                      : new Pe(e.Z)),
                    P(e.q) || (e.M = 3 * (e.q - 1) + 1),
                    P(e.h) ||
                      (e.h < 12 && 1 === e.a
                        ? (e.h += 12)
                        : 12 === e.h && 0 === e.a && (e.h = 0)),
                    0 === e.G && e.y && (e.y = -e.y),
                    P(e.u) || (e.S = re(e.u)),
                    [
                      Object.keys(e).reduce(function (t, n) {
                        var r = (function (e) {
                          switch (e) {
                            case "S":
                              return "millisecond";
                            case "s":
                              return "second";
                            case "m":
                              return "minute";
                            case "h":
                            case "H":
                              return "hour";
                            case "d":
                              return "day";
                            case "o":
                              return "ordinal";
                            case "L":
                            case "M":
                              return "month";
                            case "y":
                              return "year";
                            case "E":
                            case "c":
                              return "weekday";
                            case "W":
                              return "weekNumber";
                            case "k":
                              return "weekYear";
                            case "q":
                              return "quarter";
                            default:
                              return null;
                          }
                        })(n);
                        return r && (t[r] = e[n]), t;
                      }, {}),
                      t,
                    ]
                  );
                })(d)
              : [null, null],
            m = h[0],
            y = h[1];
          if (X(d, "a") && X(d, "H"))
            throw new v(
              "Can't include meridiem when specifying 24-hour format"
            );
          return {
            input: t,
            tokens: r,
            regex: c,
            rawMatches: f,
            matches: d,
            result: m,
            zone: y,
          };
        }
        var In = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          Vn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        function _n(e, t) {
          return new je(
            "unit out of range",
            "you specified " +
              t +
              " (of type " +
              typeof t +
              ") as a " +
              e +
              ", which is invalid"
          );
        }
        function Ln(e, t, n) {
          var r = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
          return 0 === r ? 7 : r;
        }
        function xn(e, t, n) {
          return n + (oe(e) ? Vn : In)[t - 1];
        }
        function Cn(e, t) {
          var n = oe(e) ? Vn : In,
            r = n.findIndex(function (e) {
              return e < t;
            });
          return { month: r + 1, day: t - n[r] };
        }
        function jn(e) {
          var t,
            n = e.year,
            r = e.month,
            i = e.day,
            o = xn(n, r, i),
            a = Ln(n, r, i),
            s = Math.floor((o - a + 10) / 7);
          return (
            s < 1
              ? (s = ce((t = n - 1)))
              : s > ce(n)
              ? ((t = n + 1), (s = 1))
              : (t = n),
            Object.assign({ weekYear: t, weekNumber: s, weekday: a }, ve(e))
          );
        }
        function Fn(e) {
          var t,
            n = e.weekYear,
            r = e.weekNumber,
            i = e.weekday,
            o = Ln(n, 1, 4),
            a = ae(n),
            s = 7 * r + i - o - 3;
          s < 1
            ? (s += ae((t = n - 1)))
            : s > a
            ? ((t = n + 1), (s -= ae(n)))
            : (t = n);
          var u = Cn(t, s),
            c = u.month,
            l = u.day;
          return Object.assign({ year: t, month: c, day: l }, ve(e));
        }
        function Zn(e) {
          var t = e.year,
            n = xn(t, e.month, e.day);
          return Object.assign({ year: t, ordinal: n }, ve(e));
        }
        function An(e) {
          var t = e.year,
            n = Cn(t, e.ordinal),
            r = n.month,
            i = n.day;
          return Object.assign({ year: t, month: r, day: i }, ve(e));
        }
        function zn(e) {
          var t = J(e.year),
            n = ee(e.month, 1, 12),
            r = ee(e.day, 1, se(e.year, e.month));
          return t
            ? n
              ? !r && _n("day", e.day)
              : _n("month", e.month)
            : _n("year", e.year);
        }
        function qn(e) {
          var t = e.hour,
            n = e.minute,
            r = e.second,
            i = e.millisecond,
            o = ee(t, 0, 23) || (24 === t && 0 === n && 0 === r && 0 === i),
            a = ee(n, 0, 59),
            s = ee(r, 0, 59),
            u = ee(i, 0, 999);
          return o
            ? a
              ? s
                ? !u && _n("millisecond", i)
                : _n("second", r)
              : _n("minute", n)
            : _n("hour", t);
        }
        var Hn = "Invalid DateTime",
          $n = 864e13;
        function Un(e) {
          return new je(
            "unsupported zone",
            'the zone "' + e.name + '" is not supported'
          );
        }
        function Wn(e) {
          return null === e.weekData && (e.weekData = jn(e.c)), e.weekData;
        }
        function Pn(e, t) {
          var n = {
            ts: e.ts,
            zone: e.zone,
            c: e.c,
            o: e.o,
            loc: e.loc,
            invalid: e.invalid,
          };
          return new ur(Object.assign({}, n, t, { old: n }));
        }
        function Rn(e, t, n) {
          var r = e - 60 * t * 1e3,
            i = n.offset(r);
          if (t === i) return [r, t];
          r -= 60 * (i - t) * 1e3;
          var o = n.offset(r);
          return i === o
            ? [r, i]
            : [e - 60 * Math.min(i, o) * 1e3, Math.max(i, o)];
        }
        function Jn(e, t) {
          var n = new Date((e += 60 * t * 1e3));
          return {
            year: n.getUTCFullYear(),
            month: n.getUTCMonth() + 1,
            day: n.getUTCDate(),
            hour: n.getUTCHours(),
            minute: n.getUTCMinutes(),
            second: n.getUTCSeconds(),
            millisecond: n.getUTCMilliseconds(),
          };
        }
        function Yn(e, t, n) {
          return Rn(ue(e), t, n);
        }
        function Gn(e, t) {
          var n = e.o,
            r = e.c.year + Math.trunc(t.years),
            i = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
            o = Object.assign({}, e.c, {
              year: r,
              month: i,
              day:
                Math.min(e.c.day, se(r, i)) +
                Math.trunc(t.days) +
                7 * Math.trunc(t.weeks),
            }),
            a = sn
              .fromObject({
                years: t.years - Math.trunc(t.years),
                quarters: t.quarters - Math.trunc(t.quarters),
                months: t.months - Math.trunc(t.months),
                weeks: t.weeks - Math.trunc(t.weeks),
                days: t.days - Math.trunc(t.days),
                hours: t.hours,
                minutes: t.minutes,
                seconds: t.seconds,
                milliseconds: t.milliseconds,
              })
              .as("milliseconds"),
            s = Rn(ue(o), n, e.zone),
            u = s[0],
            c = s[1];
          return 0 !== a && ((u += a), (c = e.zone.offset(u))), { ts: u, o: c };
        }
        function Bn(e, t, n, r, i) {
          var o = n.setZone,
            a = n.zone;
          if (e && 0 !== Object.keys(e).length) {
            var s = t || a,
              u = ur.fromObject(
                Object.assign(e, n, { zone: s, setZone: void 0 })
              );
            return o ? u : u.setZone(a);
          }
          return ur.invalid(
            new je(
              "unparsable",
              'the input "' + i + "\" can't be parsed as " + r
            )
          );
        }
        function Qn(e, t, n) {
          return (
            void 0 === n && (n = !0),
            e.isValid
              ? Ce.create(lt.create("en-US"), {
                  allowZ: n,
                  forceSimple: !0,
                }).formatDateTimeFromString(e, t)
              : null
          );
        }
        function Kn(e, t) {
          var n = t.suppressSeconds,
            r = void 0 !== n && n,
            i = t.suppressMilliseconds,
            o = void 0 !== i && i,
            a = t.includeOffset,
            s = t.includePrefix,
            u = void 0 !== s && s,
            c = t.includeZone,
            l = void 0 !== c && c,
            f = t.spaceZone,
            d = void 0 !== f && f,
            h = t.format,
            m = void 0 === h ? "extended" : h,
            y = "basic" === m ? "HHmm" : "HH:mm";
          (r && 0 === e.second && 0 === e.millisecond) ||
            ((y += "basic" === m ? "ss" : ":ss"),
            (o && 0 === e.millisecond) || (y += ".SSS")),
            (l || a) && d && (y += " "),
            l ? (y += "z") : a && (y += "basic" === m ? "ZZZ" : "ZZ");
          var v = Qn(e, y);
          return u && (v = "T" + v), v;
        }
        var Xn = {
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
          },
          er = {
            weekNumber: 1,
            weekday: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
          },
          tr = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
          nr = [
            "year",
            "month",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ],
          rr = [
            "weekYear",
            "weekNumber",
            "weekday",
            "hour",
            "minute",
            "second",
            "millisecond",
          ],
          ir = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
        function or(e) {
          var t = {
            year: "year",
            years: "year",
            month: "month",
            months: "month",
            day: "day",
            days: "day",
            hour: "hour",
            hours: "hour",
            minute: "minute",
            minutes: "minute",
            quarter: "quarter",
            quarters: "quarter",
            second: "second",
            seconds: "second",
            millisecond: "millisecond",
            milliseconds: "millisecond",
            weekday: "weekday",
            weekdays: "weekday",
            weeknumber: "weekNumber",
            weeksnumber: "weekNumber",
            weeknumbers: "weekNumber",
            weekyear: "weekYear",
            weekyears: "weekYear",
            ordinal: "ordinal",
          }[e.toLowerCase()];
          if (!t) throw new g(e);
          return t;
        }
        function ar(e, t) {
          for (var n, r = f(nr); !(n = r()).done; ) {
            var i = n.value;
            P(e[i]) && (e[i] = Xn[i]);
          }
          var o = zn(e) || qn(e);
          if (o) return ur.invalid(o);
          var a = et.now(),
            s = Yn(e, t.offset(a), t),
            u = s[0],
            c = s[1];
          return new ur({ ts: u, zone: t, o: c });
        }
        function sr(e, t, n) {
          var r = !!P(n.round) || n.round,
            i = function (e, i) {
              return (
                (e = ie(e, r || n.calendary ? 0 : 2, !0)),
                t.loc.clone(n).relFormatter(n).format(e, i)
              );
            },
            o = function (r) {
              return n.calendary
                ? t.hasSame(e, r)
                  ? 0
                  : t.startOf(r).diff(e.startOf(r), r).get(r)
                : t.diff(e, r).get(r);
            };
          if (n.unit) return i(o(n.unit), n.unit);
          for (var a, s = f(n.units); !(a = s()).done; ) {
            var u = a.value,
              c = o(u);
            if (Math.abs(c) >= 1) return i(c, u);
          }
          return i(e > t ? -0 : 0, n.units[n.units.length - 1]);
        }
        var ur = (function () {
          function e(e) {
            var t = e.zone || et.defaultZone,
              n =
                e.invalid ||
                (Number.isNaN(e.ts) ? new je("invalid input") : null) ||
                (t.isValid ? null : Un(t));
            this.ts = P(e.ts) ? et.now() : e.ts;
            var r = null,
              i = null;
            if (!n)
              if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) {
                var o = [e.old.c, e.old.o];
                (r = o[0]), (i = o[1]);
              } else {
                var a = t.offset(this.ts);
                (r = Jn(this.ts, a)),
                  (r = (n = Number.isNaN(r.year)
                    ? new je("invalid input")
                    : null)
                    ? null
                    : r),
                  (i = n ? null : a);
              }
            (this._zone = t),
              (this.loc = e.loc || lt.create()),
              (this.invalid = n),
              (this.weekData = null),
              (this.c = r),
              (this.o = i),
              (this.isLuxonDateTime = !0);
          }
          (e.now = function () {
            return new e({});
          }),
            (e.local = function (t, n, r, i, o, a, s) {
              return P(t)
                ? e.now()
                : ar(
                    {
                      year: t,
                      month: n,
                      day: r,
                      hour: i,
                      minute: o,
                      second: a,
                      millisecond: s,
                    },
                    et.defaultZone
                  );
            }),
            (e.utc = function (t, n, r, i, o, a, s) {
              return P(t)
                ? new e({ ts: et.now(), zone: Pe.utcInstance })
                : ar(
                    {
                      year: t,
                      month: n,
                      day: r,
                      hour: i,
                      minute: o,
                      second: a,
                      millisecond: s,
                    },
                    Pe.utcInstance
                  );
            }),
            (e.fromJSDate = function (t, n) {
              void 0 === n && (n = {});
              var r,
                i =
                  ((r = t),
                  "[object Date]" === Object.prototype.toString.call(r)
                    ? t.valueOf()
                    : NaN);
              if (Number.isNaN(i)) return e.invalid("invalid input");
              var o = Je(n.zone, et.defaultZone);
              return o.isValid
                ? new e({ ts: i, zone: o, loc: lt.fromObject(n) })
                : e.invalid(Un(o));
            }),
            (e.fromMillis = function (t, n) {
              if ((void 0 === n && (n = {}), R(t)))
                return t < -$n || t > $n
                  ? e.invalid("Timestamp out of range")
                  : new e({
                      ts: t,
                      zone: Je(n.zone, et.defaultZone),
                      loc: lt.fromObject(n),
                    });
              throw new p(
                "fromMillis requires a numerical input, but received a " +
                  typeof t +
                  " with value " +
                  t
              );
            }),
            (e.fromSeconds = function (t, n) {
              if ((void 0 === n && (n = {}), R(t)))
                return new e({
                  ts: 1e3 * t,
                  zone: Je(n.zone, et.defaultZone),
                  loc: lt.fromObject(n),
                });
              throw new p("fromSeconds requires a numerical input");
            }),
            (e.fromObject = function (t) {
              var n = Je(t.zone, et.defaultZone);
              if (!n.isValid) return e.invalid(Un(n));
              var r = et.now(),
                i = n.offset(r),
                o = me(t, or, [
                  "zone",
                  "locale",
                  "outputCalendar",
                  "numberingSystem",
                ]),
                a = !P(o.ordinal),
                s = !P(o.year),
                u = !P(o.month) || !P(o.day),
                c = s || u,
                l = o.weekYear || o.weekNumber,
                d = lt.fromObject(t);
              if ((c || a) && l)
                throw new v(
                  "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
                );
              if (u && a) throw new v("Can't mix ordinal dates with month/day");
              var h,
                m,
                y = l || (o.weekday && !c),
                g = Jn(r, i);
              y
                ? ((h = rr), (m = er), (g = jn(g)))
                : a
                ? ((h = ir), (m = tr), (g = Zn(g)))
                : ((h = nr), (m = Xn));
              for (var p, w = !1, k = f(h); !(p = k()).done; ) {
                var b = p.value;
                P(o[b]) ? (o[b] = w ? m[b] : g[b]) : (w = !0);
              }
              var O = y
                  ? (function (e) {
                      var t = J(e.weekYear),
                        n = ee(e.weekNumber, 1, ce(e.weekYear)),
                        r = ee(e.weekday, 1, 7);
                      return t
                        ? n
                          ? !r && _n("weekday", e.weekday)
                          : _n("week", e.week)
                        : _n("weekYear", e.weekYear);
                    })(o)
                  : a
                  ? (function (e) {
                      var t = J(e.year),
                        n = ee(e.ordinal, 1, ae(e.year));
                      return t
                        ? !n && _n("ordinal", e.ordinal)
                        : _n("year", e.year);
                    })(o)
                  : zn(o),
                S = O || qn(o);
              if (S) return e.invalid(S);
              var T = Yn(y ? Fn(o) : a ? An(o) : o, i, n),
                M = new e({ ts: T[0], zone: n, o: T[1], loc: d });
              return o.weekday && c && t.weekday !== M.weekday
                ? e.invalid(
                    "mismatched weekday",
                    "you can't specify both a weekday of " +
                      o.weekday +
                      " and a date of " +
                      M.toISO()
                  )
                : M;
            }),
            (e.fromISO = function (e, t) {
              void 0 === t && (t = {});
              var n = (function (e) {
                return ht(e, [qt, Wt], [Ht, Pt], [$t, Rt], [Ut, Jt]);
              })(e);
              return Bn(n[0], n[1], t, "ISO 8601", e);
            }),
            (e.fromRFC2822 = function (e, t) {
              void 0 === t && (t = {});
              var n = (function (e) {
                return ht(
                  (function (e) {
                    return e
                      .replace(/\([^()]*\)|[\n\t]/g, " ")
                      .replace(/(\s\s+)/g, " ")
                      .trim();
                  })(e),
                  [xt, Ct]
                );
              })(e);
              return Bn(n[0], n[1], t, "RFC 2822", e);
            }),
            (e.fromHTTP = function (e, t) {
              void 0 === t && (t = {});
              var n = (function (e) {
                return ht(e, [jt, At], [Ft, At], [Zt, zt]);
              })(e);
              return Bn(n[0], n[1], t, "HTTP", t);
            }),
            (e.fromFormat = function (t, n, r) {
              if ((void 0 === r && (r = {}), P(t) || P(n)))
                throw new p("fromFormat requires an input string and a format");
              var i = r,
                o = i.locale,
                a = void 0 === o ? null : o,
                s = i.numberingSystem,
                u = void 0 === s ? null : s,
                c = (function (e, t, n) {
                  var r = Dn(e, t, n);
                  return [r.result, r.zone, r.invalidReason];
                })(
                  lt.fromOpts({
                    locale: a,
                    numberingSystem: u,
                    defaultToEN: !0,
                  }),
                  t,
                  n
                ),
                l = c[0],
                f = c[1],
                d = c[2];
              return d ? e.invalid(d) : Bn(l, f, r, "format " + n, t);
            }),
            (e.fromString = function (t, n, r) {
              return void 0 === r && (r = {}), e.fromFormat(t, n, r);
            }),
            (e.fromSQL = function (e, t) {
              void 0 === t && (t = {});
              var n = (function (e) {
                return ht(e, [Gt, Qt], [Bt, Kt]);
              })(e);
              return Bn(n[0], n[1], t, "SQL", e);
            }),
            (e.invalid = function (t, n) {
              if ((void 0 === n && (n = null), !t))
                throw new p("need to specify a reason the DateTime is invalid");
              var r = t instanceof je ? t : new je(t, n);
              if (et.throwOnInvalid) throw new h(r);
              return new e({ invalid: r });
            }),
            (e.isDateTime = function (e) {
              return (e && e.isLuxonDateTime) || !1;
            });
          var t = e.prototype;
          return (
            (t.get = function (e) {
              return this[e];
            }),
            (t.resolvedLocaleOpts = function (e) {
              void 0 === e && (e = {});
              var t = Ce.create(this.loc.clone(e), e).resolvedOptions(this);
              return {
                locale: t.locale,
                numberingSystem: t.numberingSystem,
                outputCalendar: t.calendar,
              };
            }),
            (t.toUTC = function (e, t) {
              return (
                void 0 === e && (e = 0),
                void 0 === t && (t = {}),
                this.setZone(Pe.instance(e), t)
              );
            }),
            (t.toLocal = function () {
              return this.setZone(et.defaultZone);
            }),
            (t.setZone = function (t, n) {
              var r = void 0 === n ? {} : n,
                i = r.keepLocalTime,
                o = void 0 !== i && i,
                a = r.keepCalendarTime,
                s = void 0 !== a && a;
              if ((t = Je(t, et.defaultZone)).equals(this.zone)) return this;
              if (t.isValid) {
                var u = this.ts;
                if (o || s) {
                  var c = t.offset(this.ts);
                  u = Yn(this.toObject(), c, t)[0];
                }
                return Pn(this, { ts: u, zone: t });
              }
              return e.invalid(Un(t));
            }),
            (t.reconfigure = function (e) {
              var t = void 0 === e ? {} : e,
                n = t.locale,
                r = t.numberingSystem,
                i = t.outputCalendar;
              return Pn(this, {
                loc: this.loc.clone({
                  locale: n,
                  numberingSystem: r,
                  outputCalendar: i,
                }),
              });
            }),
            (t.setLocale = function (e) {
              return this.reconfigure({ locale: e });
            }),
            (t.set = function (e) {
              if (!this.isValid) return this;
              var t,
                n = me(e, or, []),
                r = !P(n.weekYear) || !P(n.weekNumber) || !P(n.weekday),
                i = !P(n.ordinal),
                o = !P(n.year),
                a = !P(n.month) || !P(n.day),
                s = o || a,
                u = n.weekYear || n.weekNumber;
              if ((s || i) && u)
                throw new v(
                  "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
                );
              if (a && i) throw new v("Can't mix ordinal dates with month/day");
              r
                ? (t = Fn(Object.assign(jn(this.c), n)))
                : P(n.ordinal)
                ? ((t = Object.assign(this.toObject(), n)),
                  P(n.day) && (t.day = Math.min(se(t.year, t.month), t.day)))
                : (t = An(Object.assign(Zn(this.c), n)));
              var c = Yn(t, this.o, this.zone);
              return Pn(this, { ts: c[0], o: c[1] });
            }),
            (t.plus = function (e) {
              return this.isValid ? Pn(this, Gn(this, un(e))) : this;
            }),
            (t.minus = function (e) {
              return this.isValid ? Pn(this, Gn(this, un(e).negate())) : this;
            }),
            (t.startOf = function (e) {
              if (!this.isValid) return this;
              var t = {},
                n = sn.normalizeUnit(e);
              switch (n) {
                case "years":
                  t.month = 1;
                case "quarters":
                case "months":
                  t.day = 1;
                case "weeks":
                case "days":
                  t.hour = 0;
                case "hours":
                  t.minute = 0;
                case "minutes":
                  t.second = 0;
                case "seconds":
                  t.millisecond = 0;
              }
              if (("weeks" === n && (t.weekday = 1), "quarters" === n)) {
                var r = Math.ceil(this.month / 3);
                t.month = 3 * (r - 1) + 1;
              }
              return this.set(t);
            }),
            (t.endOf = function (e) {
              var t;
              return this.isValid
                ? this.plus(((t = {}), (t[e] = 1), t))
                    .startOf(e)
                    .minus(1)
                : this;
            }),
            (t.toFormat = function (e, t) {
              return (
                void 0 === t && (t = {}),
                this.isValid
                  ? Ce.create(
                      this.loc.redefaultToEN(t)
                    ).formatDateTimeFromString(this, e)
                  : Hn
              );
            }),
            (t.toLocaleString = function (e) {
              return (
                void 0 === e && (e = S),
                this.isValid
                  ? Ce.create(this.loc.clone(e), e).formatDateTime(this)
                  : Hn
              );
            }),
            (t.toLocaleParts = function (e) {
              return (
                void 0 === e && (e = {}),
                this.isValid
                  ? Ce.create(this.loc.clone(e), e).formatDateTimeParts(this)
                  : []
              );
            }),
            (t.toISO = function (e) {
              return (
                void 0 === e && (e = {}),
                this.isValid
                  ? this.toISODate(e) + "T" + this.toISOTime(e)
                  : null
              );
            }),
            (t.toISODate = function (e) {
              var t = (void 0 === e ? {} : e).format,
                n =
                  "basic" === (void 0 === t ? "extended" : t)
                    ? "yyyyMMdd"
                    : "yyyy-MM-dd";
              return this.year > 9999 && (n = "+" + n), Qn(this, n);
            }),
            (t.toISOWeekDate = function () {
              return Qn(this, "kkkk-'W'WW-c");
            }),
            (t.toISOTime = function (e) {
              var t = void 0 === e ? {} : e,
                n = t.suppressMilliseconds,
                r = void 0 !== n && n,
                i = t.suppressSeconds,
                o = void 0 !== i && i,
                a = t.includeOffset,
                s = void 0 === a || a,
                u = t.includePrefix,
                c = void 0 !== u && u,
                l = t.format;
              return Kn(this, {
                suppressSeconds: o,
                suppressMilliseconds: r,
                includeOffset: s,
                includePrefix: c,
                format: void 0 === l ? "extended" : l,
              });
            }),
            (t.toRFC2822 = function () {
              return Qn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
            }),
            (t.toHTTP = function () {
              return Qn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
            }),
            (t.toSQLDate = function () {
              return Qn(this, "yyyy-MM-dd");
            }),
            (t.toSQLTime = function (e) {
              var t = void 0 === e ? {} : e,
                n = t.includeOffset,
                r = void 0 === n || n,
                i = t.includeZone;
              return Kn(this, {
                includeOffset: r,
                includeZone: void 0 !== i && i,
                spaceZone: !0,
              });
            }),
            (t.toSQL = function (e) {
              return (
                void 0 === e && (e = {}),
                this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e) : null
              );
            }),
            (t.toString = function () {
              return this.isValid ? this.toISO() : Hn;
            }),
            (t.valueOf = function () {
              return this.toMillis();
            }),
            (t.toMillis = function () {
              return this.isValid ? this.ts : NaN;
            }),
            (t.toSeconds = function () {
              return this.isValid ? this.ts / 1e3 : NaN;
            }),
            (t.toJSON = function () {
              return this.toISO();
            }),
            (t.toBSON = function () {
              return this.toJSDate();
            }),
            (t.toObject = function (e) {
              if ((void 0 === e && (e = {}), !this.isValid)) return {};
              var t = Object.assign({}, this.c);
              return (
                e.includeConfig &&
                  ((t.outputCalendar = this.outputCalendar),
                  (t.numberingSystem = this.loc.numberingSystem),
                  (t.locale = this.loc.locale)),
                t
              );
            }),
            (t.toJSDate = function () {
              return new Date(this.isValid ? this.ts : NaN);
            }),
            (t.diff = function (e, t, n) {
              if (
                (void 0 === t && (t = "milliseconds"),
                void 0 === n && (n = {}),
                !this.isValid || !e.isValid)
              )
                return sn.invalid(
                  this.invalid || e.invalid,
                  "created by diffing an invalid DateTime"
                );
              var r,
                i = Object.assign(
                  {
                    locale: this.locale,
                    numberingSystem: this.numberingSystem,
                  },
                  n
                ),
                o = ((r = t), Array.isArray(r) ? r : [r]).map(sn.normalizeUnit),
                a = e.valueOf() > this.valueOf(),
                s = (function (e, t, n, r) {
                  var i,
                    o = (function (e, t, n) {
                      for (
                        var r,
                          i,
                          o = {},
                          a = 0,
                          s = [
                            [
                              "years",
                              function (e, t) {
                                return t.year - e.year;
                              },
                            ],
                            [
                              "quarters",
                              function (e, t) {
                                return t.quarter - e.quarter;
                              },
                            ],
                            [
                              "months",
                              function (e, t) {
                                return (
                                  t.month - e.month + 12 * (t.year - e.year)
                                );
                              },
                            ],
                            [
                              "weeks",
                              function (e, t) {
                                var n = hn(e, t);
                                return (n - (n % 7)) / 7;
                              },
                            ],
                            ["days", hn],
                          ];
                        a < s.length;
                        a++
                      ) {
                        var u = s[a],
                          c = u[0],
                          l = u[1];
                        if (n.indexOf(c) >= 0) {
                          var f;
                          r = c;
                          var d,
                            h = l(e, t);
                          (i = e.plus((((f = {})[c] = h), f))) > t
                            ? ((e = e.plus((((d = {})[c] = h - 1), d))),
                              (h -= 1))
                            : (e = i),
                            (o[c] = h);
                        }
                      }
                      return [e, o, i, r];
                    })(e, t, n),
                    a = o[0],
                    s = o[1],
                    u = o[2],
                    c = o[3],
                    l = t - a,
                    f = n.filter(function (e) {
                      return (
                        ["hours", "minutes", "seconds", "milliseconds"].indexOf(
                          e
                        ) >= 0
                      );
                    });
                  0 === f.length &&
                    (u < t && (u = a.plus((((i = {})[c] = 1), i))),
                    u !== a && (s[c] = (s[c] || 0) + l / (u - a)));
                  var d,
                    h = sn.fromObject(Object.assign(s, r));
                  return f.length > 0
                    ? (d = sn.fromMillis(l, r)).shiftTo.apply(d, f).plus(h)
                    : h;
                })(a ? this : e, a ? e : this, o, i);
              return a ? s.negate() : s;
            }),
            (t.diffNow = function (t, n) {
              return (
                void 0 === t && (t = "milliseconds"),
                void 0 === n && (n = {}),
                this.diff(e.now(), t, n)
              );
            }),
            (t.until = function (e) {
              return this.isValid ? fn.fromDateTimes(this, e) : this;
            }),
            (t.hasSame = function (e, t) {
              if (!this.isValid) return !1;
              var n = e.valueOf(),
                r = this.setZone(e.zone, { keepLocalTime: !0 });
              return r.startOf(t) <= n && n <= r.endOf(t);
            }),
            (t.equals = function (e) {
              return (
                this.isValid &&
                e.isValid &&
                this.valueOf() === e.valueOf() &&
                this.zone.equals(e.zone) &&
                this.loc.equals(e.loc)
              );
            }),
            (t.toRelative = function (t) {
              if ((void 0 === t && (t = {}), !this.isValid)) return null;
              var n = t.base || e.fromObject({ zone: this.zone }),
                r = t.padding ? (this < n ? -t.padding : t.padding) : 0,
                i = ["years", "months", "days", "hours", "minutes", "seconds"],
                o = t.unit;
              return (
                Array.isArray(t.unit) && ((i = t.unit), (o = void 0)),
                sr(
                  n,
                  this.plus(r),
                  Object.assign(t, { numeric: "always", units: i, unit: o })
                )
              );
            }),
            (t.toRelativeCalendar = function (t) {
              return (
                void 0 === t && (t = {}),
                this.isValid
                  ? sr(
                      t.base || e.fromObject({ zone: this.zone }),
                      this,
                      Object.assign(t, {
                        numeric: "auto",
                        units: ["years", "months", "days"],
                        calendary: !0,
                      })
                    )
                  : null
              );
            }),
            (e.min = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              if (!n.every(e.isDateTime))
                throw new p("min requires all arguments be DateTimes");
              return Q(
                n,
                function (e) {
                  return e.valueOf();
                },
                Math.min
              );
            }),
            (e.max = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              if (!n.every(e.isDateTime))
                throw new p("max requires all arguments be DateTimes");
              return Q(
                n,
                function (e) {
                  return e.valueOf();
                },
                Math.max
              );
            }),
            (e.fromFormatExplain = function (e, t, n) {
              void 0 === n && (n = {});
              var r = n,
                i = r.locale,
                o = void 0 === i ? null : i,
                a = r.numberingSystem,
                s = void 0 === a ? null : a;
              return Dn(
                lt.fromOpts({ locale: o, numberingSystem: s, defaultToEN: !0 }),
                e,
                t
              );
            }),
            (e.fromStringExplain = function (t, n, r) {
              return void 0 === r && (r = {}), e.fromFormatExplain(t, n, r);
            }),
            r(
              e,
              [
                {
                  key: "isValid",
                  get: function () {
                    return null === this.invalid;
                  },
                },
                {
                  key: "invalidReason",
                  get: function () {
                    return this.invalid ? this.invalid.reason : null;
                  },
                },
                {
                  key: "invalidExplanation",
                  get: function () {
                    return this.invalid ? this.invalid.explanation : null;
                  },
                },
                {
                  key: "locale",
                  get: function () {
                    return this.isValid ? this.loc.locale : null;
                  },
                },
                {
                  key: "numberingSystem",
                  get: function () {
                    return this.isValid ? this.loc.numberingSystem : null;
                  },
                },
                {
                  key: "outputCalendar",
                  get: function () {
                    return this.isValid ? this.loc.outputCalendar : null;
                  },
                },
                {
                  key: "zone",
                  get: function () {
                    return this._zone;
                  },
                },
                {
                  key: "zoneName",
                  get: function () {
                    return this.isValid ? this.zone.name : null;
                  },
                },
                {
                  key: "year",
                  get: function () {
                    return this.isValid ? this.c.year : NaN;
                  },
                },
                {
                  key: "quarter",
                  get: function () {
                    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
                  },
                },
                {
                  key: "month",
                  get: function () {
                    return this.isValid ? this.c.month : NaN;
                  },
                },
                {
                  key: "day",
                  get: function () {
                    return this.isValid ? this.c.day : NaN;
                  },
                },
                {
                  key: "hour",
                  get: function () {
                    return this.isValid ? this.c.hour : NaN;
                  },
                },
                {
                  key: "minute",
                  get: function () {
                    return this.isValid ? this.c.minute : NaN;
                  },
                },
                {
                  key: "second",
                  get: function () {
                    return this.isValid ? this.c.second : NaN;
                  },
                },
                {
                  key: "millisecond",
                  get: function () {
                    return this.isValid ? this.c.millisecond : NaN;
                  },
                },
                {
                  key: "weekYear",
                  get: function () {
                    return this.isValid ? Wn(this).weekYear : NaN;
                  },
                },
                {
                  key: "weekNumber",
                  get: function () {
                    return this.isValid ? Wn(this).weekNumber : NaN;
                  },
                },
                {
                  key: "weekday",
                  get: function () {
                    return this.isValid ? Wn(this).weekday : NaN;
                  },
                },
                {
                  key: "ordinal",
                  get: function () {
                    return this.isValid ? Zn(this.c).ordinal : NaN;
                  },
                },
                {
                  key: "monthShort",
                  get: function () {
                    return this.isValid
                      ? dn.months("short", { locObj: this.loc })[this.month - 1]
                      : null;
                  },
                },
                {
                  key: "monthLong",
                  get: function () {
                    return this.isValid
                      ? dn.months("long", { locObj: this.loc })[this.month - 1]
                      : null;
                  },
                },
                {
                  key: "weekdayShort",
                  get: function () {
                    return this.isValid
                      ? dn.weekdays("short", { locObj: this.loc })[
                          this.weekday - 1
                        ]
                      : null;
                  },
                },
                {
                  key: "weekdayLong",
                  get: function () {
                    return this.isValid
                      ? dn.weekdays("long", { locObj: this.loc })[
                          this.weekday - 1
                        ]
                      : null;
                  },
                },
                {
                  key: "offset",
                  get: function () {
                    return this.isValid ? +this.o : NaN;
                  },
                },
                {
                  key: "offsetNameShort",
                  get: function () {
                    return this.isValid
                      ? this.zone.offsetName(this.ts, {
                          format: "short",
                          locale: this.locale,
                        })
                      : null;
                  },
                },
                {
                  key: "offsetNameLong",
                  get: function () {
                    return this.isValid
                      ? this.zone.offsetName(this.ts, {
                          format: "long",
                          locale: this.locale,
                        })
                      : null;
                  },
                },
                {
                  key: "isOffsetFixed",
                  get: function () {
                    return this.isValid ? this.zone.universal : null;
                  },
                },
                {
                  key: "isInDST",
                  get: function () {
                    return (
                      !this.isOffsetFixed &&
                      (this.offset > this.set({ month: 1 }).offset ||
                        this.offset > this.set({ month: 5 }).offset)
                    );
                  },
                },
                {
                  key: "isInLeapYear",
                  get: function () {
                    return oe(this.year);
                  },
                },
                {
                  key: "daysInMonth",
                  get: function () {
                    return se(this.year, this.month);
                  },
                },
                {
                  key: "daysInYear",
                  get: function () {
                    return this.isValid ? ae(this.year) : NaN;
                  },
                },
                {
                  key: "weeksInWeekYear",
                  get: function () {
                    return this.isValid ? ce(this.weekYear) : NaN;
                  },
                },
              ],
              [
                {
                  key: "DATE_SHORT",
                  get: function () {
                    return S;
                  },
                },
                {
                  key: "DATE_MED",
                  get: function () {
                    return T;
                  },
                },
                {
                  key: "DATE_MED_WITH_WEEKDAY",
                  get: function () {
                    return M;
                  },
                },
                {
                  key: "DATE_FULL",
                  get: function () {
                    return N;
                  },
                },
                {
                  key: "DATE_HUGE",
                  get: function () {
                    return E;
                  },
                },
                {
                  key: "TIME_SIMPLE",
                  get: function () {
                    return D;
                  },
                },
                {
                  key: "TIME_WITH_SECONDS",
                  get: function () {
                    return I;
                  },
                },
                {
                  key: "TIME_WITH_SHORT_OFFSET",
                  get: function () {
                    return V;
                  },
                },
                {
                  key: "TIME_WITH_LONG_OFFSET",
                  get: function () {
                    return _;
                  },
                },
                {
                  key: "TIME_24_SIMPLE",
                  get: function () {
                    return L;
                  },
                },
                {
                  key: "TIME_24_WITH_SECONDS",
                  get: function () {
                    return x;
                  },
                },
                {
                  key: "TIME_24_WITH_SHORT_OFFSET",
                  get: function () {
                    return C;
                  },
                },
                {
                  key: "TIME_24_WITH_LONG_OFFSET",
                  get: function () {
                    return j;
                  },
                },
                {
                  key: "DATETIME_SHORT",
                  get: function () {
                    return F;
                  },
                },
                {
                  key: "DATETIME_SHORT_WITH_SECONDS",
                  get: function () {
                    return Z;
                  },
                },
                {
                  key: "DATETIME_MED",
                  get: function () {
                    return A;
                  },
                },
                {
                  key: "DATETIME_MED_WITH_SECONDS",
                  get: function () {
                    return z;
                  },
                },
                {
                  key: "DATETIME_MED_WITH_WEEKDAY",
                  get: function () {
                    return q;
                  },
                },
                {
                  key: "DATETIME_FULL",
                  get: function () {
                    return H;
                  },
                },
                {
                  key: "DATETIME_FULL_WITH_SECONDS",
                  get: function () {
                    return $;
                  },
                },
                {
                  key: "DATETIME_HUGE",
                  get: function () {
                    return U;
                  },
                },
                {
                  key: "DATETIME_HUGE_WITH_SECONDS",
                  get: function () {
                    return W;
                  },
                },
              ]
            ),
            e
          );
        })();
        function cr(e) {
          if (ur.isDateTime(e)) return e;
          if (e && e.valueOf && R(e.valueOf())) return ur.fromJSDate(e);
          if (e && "object" == typeof e) return ur.fromObject(e);
          throw new p(
            "Unknown datetime argument: " + e + ", of type " + typeof e
          );
        }
        (t.ou = ur), (t.Zr = et);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      const e = jQuery;
      var t = n.n(e),
        r = n(490);
      (window.$ = t()),
        t()(document).ready(function () {
          console.log("Custom theme overlay version ", "1.10.0"),
            $('a[href="http://facebook.com/instructure"]').remove(),
            $('a[href="http://twitter.com/instructure"]').remove(),
            !ENV.current_user_roles ||
            (-1 === $.inArray("admin", ENV.current_user_roles) &&
              -1 === $.inArray("root_admin", ENV.current_user_roles))
              ? ($(
                  '#chooseMigrationConverter option[value="blackboard_exporter"]'
                ).remove(),
                $(
                  '#chooseMigrationConverter option[value="webct_scraper"]'
                ).remove())
              : console.log("Blackboard import option enabled"),
            $(
              'a[href="http://www.canvaslms.com/policies/withdrawal-form"]'
            ).remove(),
            $("a.avatar.profile-link").click(function () {
              $('li:has(a[href="#from-gravatar"])').remove();
            }),
            $("a.avatar.profile_pic_link.none").click(function () {
              $('li:has(a[href="#from-gravatar"])').remove();
            }),
            !ENV.current_user_roles ||
            (-1 === $.inArray("admin", ENV.current_user_roles) &&
              -1 === $.inArray("root_admin", ENV.current_user_roles))
              ? $("#course_sis_source_id").text().trim() &&
                ($('input[name="course[blueprint]"]').each(function () {
                  $(this).attr("disabled", "disabled");
                }),
                $("#blueprint_menu")
                  .empty()
                  .append("Not available for SIS maintained courses"))
              : console.log("Blueprint Course option enabled"),
            !ENV.current_user_roles ||
            (-1 === $.inArray("admin", ENV.current_user_roles) &&
              -1 === $.inArray("root_admin", ENV.current_user_roles))
              ? $(".reset_course_content_button").remove()
              : console.log("Reset Course Content button enabled"),
            !ENV.current_user_roles ||
            (-1 === $.inArray("admin", ENV.current_user_roles) &&
              -1 === $.inArray("root_admin", ENV.current_user_roles))
              ? $('a[href$="/confirm_action?event=conclude"]').remove()
              : console.log("Hide Conclude Course button enabled"),
            window.location.href.endsWith("grades") &&
              $(function () {
                let e = parseInt(window.location.href.split("/")[4], 10);
                "number" == typeof e &&
                  $.get(
                    `https://api.datanose.nl/Grading/IsPublished/${e}`,
                    function (e) {
                      e &&
                        $("#student-grades-right-content").html(
                          `<div id="student-grades-final" class="student_assignment final_grade" style="font-size: 1.2em; margin-bottom: 10px">Grade calculation has been defined</div><a class='btn btn-primary' href='${window.location.href.replace(
                            "grades",
                            "external_tools/3981"
                          )}'>Show final grade</a>`
                        );
                    }
                  );
              }),
            (function () {
              $("#leave_blank_for_no_expiration").html(
                "<br/>Access tokens are powerful and convenient but it is very important to keep these secure. A misplaced access token can provide access to your account and personal information."
              ),
                $("#access_token_form button.ui-datepicker-trigger").remove(),
                (r.Zr.throwOnInvalid = !0);
              const e = r.ou.utc(),
                t = (function (t) {
                  let n;
                  if (t < r.ou.fromObject({ month: 6, day: 1, zone: "utc" }))
                    n = r.ou.fromObject({
                      month: 7,
                      day: 31,
                      hour: 23,
                      minute: 59,
                      second: 59,
                      zone: "utc",
                    });
                  else {
                    let t = e.plus({ years: 1 }).year;
                    n = r.ou.fromObject({
                      year: t,
                      month: 7,
                      day: 31,
                      hour: 23,
                      minute: 59,
                      second: 59,
                      zone: "utc",
                    });
                  }
                  return n;
                })(e),
                n = $("#access_token_expires_at");
              function i() {
                n.prop("readonly", !1),
                  n.val(o(t)),
                  n.prop("readonly", !0),
                  n.focus();
              }
              function o(e) {
                return e.toFormat("yyyy-MM-dd HH:mm");
              }
              n.val(o(t)),
                n.change(i),
                $("#access_token_purpose").change(i),
                $("#access_token_form").submit(i);
            })(),
            t()("a.merge_users_link").remove(),
            t()("div.disambiguation_box").replaceWith(
              "<div>We are sorry, merging of accounts is not supported in UvA Canvas.<p></p></div>"
            ),
            t()("#merge").parent("div.ic-Login-confirmation__actions").remove(),
            t()("#submit_assignment .checkbox")
              .contents()
              .eq(2)
              .replaceWith(""),
            t()("#submit_assignment .turnitin_pledge + a").remove(),
            (function () {
              const e = 'li > a[href$="/accounts/1',
                n = "Muteren SIS ID";
              if (ENV.current_user_types.includes(n)) {
                const n = window.location.href;
                (n.endsWith("/accounts") || n.endsWith("/accounts/")) &&
                  t()(e).parent().remove(),
                  t()("#menu > li.menu-item").on("click", () => {
                    t()(e).parent().remove(),
                      r(
                        e,
                        function () {
                          t()(e).parent().remove();
                        },
                        100
                      );
                  });
              }
              let r = function (e, n, i = !1) {
                t()(e).length
                  ? n()
                  : (!1 === i || i > 0) &&
                    (!1 !== i && i--,
                    setTimeout(function () {
                      r(e, n, i);
                    }, 100));
              };
              r(
                e,
                function () {
                  ENV.current_user_types.includes(n) &&
                    t()(e).parent().remove();
                },
                100
              );
            })();
        });
    })();
})();
