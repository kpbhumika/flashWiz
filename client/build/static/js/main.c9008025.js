/*! For license information please see main.c9008025.js.LICENSE.txt */
(() => {
  var e = {
      508: (e) => {
        "use strict";
        e.exports = function (e, t, n, r, a, o, i, l) {
          if (!e) {
            var s;
            if (void 0 === t)
              s = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
              );
            else {
              var c = [n, r, a, o, i, l],
                u = 0;
              (s = new Error(
                t.replace(/%s/g, function () {
                  return c[u++];
                }),
              )).name = "Invariant Violation";
            }
            throw ((s.framesToPop = 1), s);
          }
        };
      },
      37: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (0, o.default)(function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              var a = null;
              return (
                t.forEach(function (e) {
                  if (null == a) {
                    var t = e.apply(void 0, n);
                    null != t && (a = t);
                  }
                }),
                a
              );
            });
          });
        var r,
          a = n(174),
          o = (r = a) && r.__esModule ? r : { default: r };
        e.exports = t.default;
      },
      174: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            function t(t, n, r, a, o, i) {
              var l = a || "<<anonymous>>",
                s = i || r;
              if (null == n[r])
                return t
                  ? new Error(
                      "Required " +
                        o +
                        " `" +
                        s +
                        "` was not specified in `" +
                        l +
                        "`.",
                    )
                  : null;
              for (
                var c = arguments.length, u = Array(c > 6 ? c - 6 : 0), f = 6;
                f < c;
                f++
              )
                u[f - 6] = arguments[f];
              return e.apply(void 0, [n, r, l, o, s].concat(u));
            }
            var n = t.bind(null, !1);
            return (n.isRequired = t.bind(null, !0)), n;
          }),
          (e.exports = t.default);
      },
      521: (e, t, n) => {
        "use strict";
        var r = n(698);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      837: (e, t, n) => {
        e.exports = n(521)();
      },
      698: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      306: (e, t, n) => {
        "use strict";
        var r = n(643),
          a = n(261);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          O = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
              ? e
              : null;
        }
        var M,
          F = Object.assign;
        function z(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var I = !1;
        function U(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function $(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case S:
              return "StrictMode";
            case P:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case O:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || "Memo";
              case _:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return $(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function G(e, t) {
          J(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function oe(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ce,
          ue,
          fe =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ee = null,
          Se = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Ee ? (Se ? Se.push(e) : (Se = [e])) : (Ee = e);
        }
        function Oe() {
          if (Ee) {
            var e = Ee,
              t = Se;
            if (((Se = Ee = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Pe() {}
        var Re = !1;
        function Te(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return je(e, t, n);
          } finally {
            (Re = !1), (null !== Ee || null !== Se) && (Pe(), Oe());
          }
        }
        function _e(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (u)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ue) {
            Le = !1;
          }
        function Ae(e, t, n, r, a, o, i, l, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Me = !1,
          Fe = null,
          ze = !1,
          Ie = null,
          Ue = {
            onError: function (e) {
              (Me = !0), (Fe = e);
            },
          };
        function Be(e, t, n, r, a, o, i, l, s) {
          (Me = !1), (Fe = null), Ae.apply(Ue, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if ($e(e) !== e) throw Error(o(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return We(a), e;
                    if (i === r) return We(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Je = a.unstable_now,
          Ge = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function mt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          Et,
          St,
          Ct,
          Nt = !1,
          Ot = [],
          jt = null,
          Pt = null,
          Rt = null,
          Tt = new Map(),
          _t = new Map(),
          Lt = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              _t.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Ut() {
          (Nt = !1),
            null !== jt && zt(jt) && (jt = null),
            null !== Pt && zt(Pt) && (Pt = null),
            null !== Rt && zt(Rt) && (Rt = null),
            Tt.forEach(It),
            _t.forEach(It);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function $t(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Ot.length) {
            Bt(Ot[0], e);
            for (var n = 1; n < Ot.length; n++) {
              var r = Ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Bt(jt, e),
              null !== Pt && Bt(Pt, e),
              null !== Rt && Bt(Rt, e),
              Tt.forEach(t),
              _t.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Wt = !0;
        function Vt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function qt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          if (Wt) {
            var a = Yt(e, t, n, r);
            if (null === a) Wr(e, t, r, Qt, n), At(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (jt = Mt(jt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = Mt(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Tt.set(o, Mt(Tt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      _t.set(o, Mt(_t.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Yt(e, t, n, r)) && Wr(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Yt(e, t, n, r) {
          if (((Qt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ge()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Gt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Gt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          fn = F({}, cn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = F({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(F({}, pn, { dataTransfer: 0 })),
          gn = an(F({}, fn, { relatedTarget: 0 })),
          vn = an(
            F({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = F({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(F({}, cn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return Sn;
        }
        var Nn = F({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? kn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          On = an(Nn),
          jn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Pn = an(
            F({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            }),
          ),
          Rn = an(
            F({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Tn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          _n = an(Tn),
          Ln = [9, 13, 27, 32],
          Dn = u && "CompositionEvent" in window,
          An = null;
        u && "documentMode" in document && (An = document.documentMode);
        var Mn = u && "TextEvent" in window && !An,
          Fn = u && (!Dn || (An && 8 < An && 11 >= An)),
          zn = String.fromCharCode(32),
          In = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var $n = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Ne(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Kn = null;
        function Qn(e) {
          zr(e, 0);
        }
        function Yn(e) {
          if (K(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (u) {
          var Gn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Gn = Zn;
          } else Gn = !1;
          Jn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Kn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(Kn)) {
            var t = [];
            Vn(t, Kn, e, xe(e)), Te(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(Kn);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = ur(n, o));
                var i = ur(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = u && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = qr(vr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Er = {},
          Sr = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (Er[e] = n[t]);
          return e;
        }
        u &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Nr = Cr("animationend"),
          Or = Cr("animationiteration"),
          jr = Cr("animationstart"),
          Pr = Cr("transitionend"),
          Rr = new Map(),
          Tr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function _r(e, t) {
          Rr.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < Tr.length; Lr++) {
          var Dr = Tr[Lr];
          _r(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        _r(Nr, "onAnimationEnd"),
          _r(Or, "onAnimationIteration"),
          _r(jr, "onAnimationStart"),
          _r("dblclick", "onDoubleClick"),
          _r("focusin", "onFocus"),
          _r("focusout", "onBlur"),
          _r(Pr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar),
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, c) {
              if ((Be.apply(this, arguments), Me)) {
                if (!Me) throw Error(o(198));
                var u = Fe;
                (Me = !1), (Fe = null), ze || ((ze = !0), (Ie = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Fr(a, l, c), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, l, c), (o = s);
                }
            }
          }
          if (ze) throw ((e = Ie), (ze = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Vt;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = Kt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ya(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = o,
              a = xe(n),
              i = [];
            e: {
              var l = Rr.get(e);
              if (void 0 !== l) {
                var s = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = On;
                    break;
                  case "focusin":
                    (c = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pn;
                    break;
                  case Nr:
                  case Or:
                  case jr:
                    s = vn;
                    break;
                  case Pr:
                    s = Rn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = _n;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = jn;
                }
                var u = 0 !== (4 & t),
                  f = !u && "scroll" === e,
                  d = u ? (null !== l ? l + "Capture" : null) : l;
                u = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = _e(h, d)) &&
                        u.push(Vr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < u.length &&
                  ((l = new s(l, c, null, n, a)),
                  i.push({ event: l, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (f = $e(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = jn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : wa(s)),
                  (p = null == c ? l : wa(c)),
                  ((l = new u(m, h + "leave", s, n, a)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((u = new u(d, h + "enter", c, n, a)).target = p),
                    (u.relatedTarget = f),
                    (m = u)),
                  (f = m),
                  s && c)
                )
                  e: {
                    for (d = c, h = 0, p = u = s; p; p = Kr(p)) h++;
                    for (p = 0, m = d; m; m = Kr(m)) p++;
                    for (; 0 < h - p; ) (u = Kr(u)), h--;
                    for (; 0 < p - h; ) (d = Kr(d)), p--;
                    for (; h--; ) {
                      if (u === d || (null !== d && u === d.alternate)) break e;
                      (u = Kr(u)), (d = Kr(d));
                    }
                    u = null;
                  }
                else u = null;
                null !== s && Qr(i, l, s, u, !1),
                  null !== c && null !== f && Qr(i, f, c, u, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Xn;
              else if (Wn(l))
                if (Jn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Vn(i, g, n, a)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var y;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                $n
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  ($n || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && $n && (y = en())
                    : ((Gt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      ($n = !0))),
                0 < (v = qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return "compositionend" === e || (!Dn && Un(e, t))
                          ? ((e = en()), (Zt = Gt = Jt = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            zr(i, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = _e(e, n)) && r.unshift(Vr(e, o, a)),
              null != (o = _e(e, t)) && r.push(Vr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              c = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              a
                ? null != (s = _e(n, o)) && i.unshift(Vr(n, s, l))
                : a || (null != (s = _e(n, o)) && i.push(Vr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Xr, "");
        }
        function Gr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
                ? function (e) {
                    return oa.resolve(null).then(e).catch(la);
                  }
                : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void $t(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          $t(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          ga = "__reactListeners$" + fa,
          va = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Ea = -1;
        function Sa(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Ea || ((e.current = ka[Ea]), (ka[Ea] = null), Ea--);
        }
        function Na(e, t) {
          Ea++, (ka[Ea] = e.current), (e.current = t);
        }
        var Oa = {},
          ja = Sa(Oa),
          Pa = Sa(!1),
          Ra = Oa;
        function Ta(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Oa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function _a(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ca(Pa), Ca(ja);
        }
        function Da(e, t, n) {
          if (ja.current !== Oa) throw Error(o(168));
          Na(ja, t), Na(Pa, n);
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Oa),
            (Ra = ja.current),
            Na(ja, e),
            Na(Pa, Pa.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Aa(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Pa),
              Ca(ja),
              Na(ja, e))
            : Ca(Pa),
            Na(Pa, n);
        }
        var za = null,
          Ia = !1,
          Ua = !1;
        function Ba(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function $a() {
          if (!Ua && null !== za) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = za;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (za = null), (Ia = !1);
            } catch (a) {
              throw (null !== za && (za = za.slice(e + 1)), Ke(Ze, $a), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Wa = 0,
          Va = null,
          qa = 0,
          Ka = [],
          Qa = 0,
          Ya = null,
          Xa = 1,
          Ja = "";
        function Ga(e, t) {
          (Ha[Wa++] = qa), (Ha[Wa++] = Va), (Va = e), (qa = t);
        }
        function Za(e, t, n) {
          (Ka[Qa++] = Xa), (Ka[Qa++] = Ja), (Ka[Qa++] = Ya), (Ya = e);
          var r = Xa;
          e = Ja;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Xa = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ja = o + e);
          } else (Xa = (1 << o) | (n << a) | r), (Ja = e);
        }
        function eo(e) {
          null !== e.return && (Ga(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Va; )
            (Va = Ha[--Wa]), (Ha[Wa] = null), (qa = Ha[--Wa]), (Ha[Wa] = null);
          for (; e === Ya; )
            (Ya = Ka[--Qa]),
              (Ka[Qa] = null),
              (Ja = Ka[--Qa]),
              (Ka[Qa] = null),
              (Xa = Ka[--Qa]),
              (Ka[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Tc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Xa, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Tc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function uo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return uo(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ca(t.nextSibling));
          }
          if ((uo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = w.ReactCurrentBatchConfig;
        function vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function yo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function bo(e) {
          return (0, e._init)(e._payload);
        }
        function wo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lc(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === E
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" === typeof o &&
                      null !== o &&
                      o.$$typeof === _ &&
                      bo(o) === t.type))
                ? (((r = a(t, n.props)).ref = vo(e, t, n)), (r.return = e), r)
                : (((r = Dc(n.type, n.key, n.props, null, e.mode, r)).ref = vo(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Ac(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Dc(t.type, t.key, t.props, null, e.mode, n)).ref = vo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = zc(t, e.mode, n)).return = e), t;
                case _:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Ac(t, e.mode, n, null)).return = e), t;
              yo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case k:
                  return n.key === a ? u(e, t, n, r) : null;
                case _:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== a ? null : f(e, t, n, r, null);
              yo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case _:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || A(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              yo(t, r);
            }
            return null;
          }
          function m(a, o, l, s) {
            for (
              var c = null, u = null, f = o, m = (o = 0), g = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var v = p(a, f, l[m], s);
              if (null === v) {
                null === f && (f = g);
                break;
              }
              e && f && null === v.alternate && t(a, f),
                (o = i(v, o, m)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v),
                (f = g);
            }
            if (m === l.length) return n(a, f), ao && Ga(a, m), c;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(a, l[m], s)) &&
                  ((o = i(f, o, m)),
                  null === u ? (c = f) : (u.sibling = f),
                  (u = f));
              return ao && Ga(a, m), c;
            }
            for (f = r(a, f); m < l.length; m++)
              null !== (g = h(f, a, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? m : g.key),
                (o = i(g, o, m)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ga(a, m),
              c
            );
          }
          function g(a, l, s, c) {
            var u = A(s);
            if ("function" !== typeof u) throw Error(o(150));
            if (null == (s = u.call(s))) throw Error(o(151));
            for (
              var f = (u = null), m = l, g = (l = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, c);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (l = i(b, l, g)),
                null === f ? (u = b) : (f.sibling = b),
                (f = b),
                (m = v);
            }
            if (y.done) return n(a, m), ao && Ga(a, g), u;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = d(a, y.value, c)) &&
                  ((l = i(y, l, g)),
                  null === f ? (u = y) : (f.sibling = y),
                  (f = y));
              return ao && Ga(a, g), u;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = h(m, a, g, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (l = i(y, l, g)),
                null === f ? (u = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ga(a, g),
              u
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === E &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var c = i.key, u = o; null !== u; ) {
                      if (u.key === c) {
                        if ((c = i.type) === E) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((o = a(u, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === _ &&
                            bo(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((o = a(u, i.props)).ref = vo(r, u, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    i.type === E
                      ? (((o = Ac(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = Dc(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = vo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case k:
                  e: {
                    for (u = i.key; null !== o; ) {
                      if (o.key === u) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = zc(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case _:
                  return e(r, o, (u = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, o, i, s);
              if (A(i)) return g(r, o, i, s);
              yo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Fc(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var xo = wo(!0),
          ko = wo(!1),
          Eo = Sa(null),
          So = null,
          Co = null,
          No = null;
        function Oo() {
          No = Co = So = null;
        }
        function jo(e) {
          var t = Eo.current;
          Ca(Eo), (e._currentValue = t);
        }
        function Po(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ro(e, t) {
          (So = e),
            (No = Co = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bl = !0), (e.firstContext = null));
        }
        function To(e) {
          var t = e._currentValue;
          if (No !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Co)
            ) {
              if (null === So) throw Error(o(308));
              (Co = e), (So.dependencies = { lanes: 0, firstContext: e });
            } else Co = Co.next = e;
          return t;
        }
        var _o = null;
        function Lo(e) {
          null === _o ? (_o = [e]) : _o.push(e);
        }
        function Do(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Lo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ao(e, r)
          );
        }
        function Ao(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Mo = !1;
        function Fo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function zo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Io(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Uo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & js))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ao(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Lo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ao(e, n)
          );
        }
        function Bo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function $o(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ho(e, t, n, r) {
          var a = e.updateQueue;
          Mo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === i ? (o = c) : (i.next = c), (i = s);
            var u = e.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (u.firstBaseUpdate = c) : (l.next = c),
              (u.lastBaseUpdate = s));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, u = c = s = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      Mo = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (s = f)) : (u = u.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Ms |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Wo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Vo = {},
          qo = Sa(Vo),
          Ko = Sa(Vo),
          Qo = Sa(Vo);
        function Yo(e) {
          if (e === Vo) throw Error(o(174));
          return e;
        }
        function Xo(e, t) {
          switch ((Na(Qo, t), Na(Ko, e), Na(qo, Vo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          Ca(qo), Na(qo, t);
        }
        function Jo() {
          Ca(qo), Ca(Ko), Ca(Qo);
        }
        function Go(e) {
          Yo(Qo.current);
          var t = Yo(qo.current),
            n = se(t, e.type);
          t !== n && (Na(Ko, e), Na(qo, n));
        }
        function Zo(e) {
          Ko.current === e && (Ca(qo), Ca(Ko));
        }
        var ei = Sa(0);
        function ti(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function ri() {
          for (var e = 0; e < ni.length; e++)
            ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var ai = w.ReactCurrentDispatcher,
          oi = w.ReactCurrentBatchConfig,
          ii = 0,
          li = null,
          si = null,
          ci = null,
          ui = !1,
          fi = !1,
          di = 0,
          pi = 0;
        function hi() {
          throw Error(o(321));
        }
        function mi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function gi(e, t, n, r, a, i) {
          if (
            ((ii = i),
            (li = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? Zi : el),
            (e = n(r, a)),
            fi)
          ) {
            i = 0;
            do {
              if (((fi = !1), (di = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (ci = si = null),
                (t.updateQueue = null),
                (ai.current = tl),
                (e = n(r, a));
            } while (fi);
          }
          if (
            ((ai.current = Gi),
            (t = null !== si && null !== si.next),
            (ii = 0),
            (ci = si = li = null),
            (ui = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function vi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function yi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ci ? (li.memoizedState = ci = e) : (ci = ci.next = e), ci
          );
        }
        function bi() {
          if (null === si) {
            var e = li.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = si.next;
          var t = null === ci ? li.memoizedState : ci.next;
          if (null !== t) (ci = t), (si = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (si = e).memoizedState,
              baseState: si.baseState,
              baseQueue: si.baseQueue,
              queue: si.queue,
              next: null,
            }),
              null === ci ? (li.memoizedState = ci = e) : (ci = ci.next = e);
          }
          return ci;
        }
        function wi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xi(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = si,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              c = null,
              u = i;
            do {
              var f = u.lane;
              if ((ii & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var d = {
                  lane: f,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((s = c = d), (l = r)) : (c = c.next = d),
                  (li.lanes |= f),
                  (Ms |= f);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (l = r) : (c.next = s),
              lr(r, t.memoizedState) || (bl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (li.lanes |= i), (Ms |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ki(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (bl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ei() {}
        function Si(e, t) {
          var n = li,
            r = bi(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (bl = !0)),
            (r = r.queue),
            Mi(Oi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== ci && 1 & ci.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ti(9, Ni.bind(null, n, r, a, t), void 0, null),
              null === Ps)
            )
              throw Error(o(349));
            0 !== (30 & ii) || Ci(n, t, a);
          }
          return a;
        }
        function Ci(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Ni(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), ji(t) && Pi(e);
        }
        function Oi(e, t, n) {
          return n(function () {
            ji(t) && Pi(e);
          });
        }
        function ji(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Pi(e) {
          var t = Ao(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Ri(e) {
          var t = yi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Qi.bind(null, li, e)),
            [t.memoizedState, e]
          );
        }
        function Ti(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function _i() {
          return bi().memoizedState;
        }
        function Li(e, t, n, r) {
          var a = yi();
          (li.flags |= e),
            (a.memoizedState = Ti(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Di(e, t, n, r) {
          var a = bi();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== si) {
            var i = si.memoizedState;
            if (((o = i.destroy), null !== r && mi(r, i.deps)))
              return void (a.memoizedState = Ti(t, n, o, r));
          }
          (li.flags |= e), (a.memoizedState = Ti(1 | t, n, o, r));
        }
        function Ai(e, t) {
          return Li(8390656, 8, e, t);
        }
        function Mi(e, t) {
          return Di(2048, 8, e, t);
        }
        function Fi(e, t) {
          return Di(4, 2, e, t);
        }
        function zi(e, t) {
          return Di(4, 4, e, t);
        }
        function Ii(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Ui(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Di(4, 4, Ii.bind(null, t, e), n)
          );
        }
        function Bi() {}
        function $i(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Hi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wi(e, t, n) {
          return 0 === (21 & ii)
            ? (e.baseState && ((e.baseState = !1), (bl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (li.lanes |= n), (Ms |= n), (e.baseState = !0)),
              t);
        }
        function Vi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = oi.transition;
          oi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (oi.transition = r);
          }
        }
        function qi() {
          return bi().memoizedState;
        }
        function Ki(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Yi(e))
          )
            Xi(t, n);
          else if (null !== (n = Do(e, t, n, r))) {
            nc(n, e, r, ec()), Ji(n, t, r);
          }
        }
        function Qi(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Yi(e)) Xi(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Lo(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Do(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), Ji(n, t, r));
          }
        }
        function Yi(e) {
          var t = e.alternate;
          return e === li || (null !== t && t === li);
        }
        function Xi(e, t) {
          fi = ui = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Ji(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Gi = {
            readContext: To,
            useCallback: hi,
            useContext: hi,
            useEffect: hi,
            useImperativeHandle: hi,
            useInsertionEffect: hi,
            useLayoutEffect: hi,
            useMemo: hi,
            useReducer: hi,
            useRef: hi,
            useState: hi,
            useDebugValue: hi,
            useDeferredValue: hi,
            useTransition: hi,
            useMutableSource: hi,
            useSyncExternalStore: hi,
            useId: hi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: To,
            useCallback: function (e, t) {
              return (yi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: To,
            useEffect: Ai,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Li(4194308, 4, Ii.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Li(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Li(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ki.bind(null, li, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yi().memoizedState = e);
            },
            useState: Ri,
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return (yi().memoizedState = e);
            },
            useTransition: function () {
              var e = Ri(!1),
                t = e[0];
              return (
                (e = Vi.bind(null, e[1])), (yi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = li,
                a = yi();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(o(349));
                0 !== (30 & ii) || Ci(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Ai(Oi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ti(9, Ni.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yi(),
                t = Ps.identifierPrefix;
              if (ao) {
                var n = Ja;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - it(Xa) - 1))).toString(32) + n)),
                  0 < (n = di++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: To,
            useCallback: $i,
            useContext: To,
            useEffect: Mi,
            useImperativeHandle: Ui,
            useInsertionEffect: Fi,
            useLayoutEffect: zi,
            useMemo: Hi,
            useReducer: xi,
            useRef: _i,
            useState: function () {
              return xi(wi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return Wi(bi(), si.memoizedState, e);
            },
            useTransition: function () {
              return [xi(wi)[0], bi().memoizedState];
            },
            useMutableSource: Ei,
            useSyncExternalStore: Si,
            useId: qi,
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: To,
            useCallback: $i,
            useContext: To,
            useEffect: Mi,
            useImperativeHandle: Ui,
            useInsertionEffect: Fi,
            useLayoutEffect: zi,
            useMemo: Hi,
            useReducer: ki,
            useRef: _i,
            useState: function () {
              return ki(wi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              var t = bi();
              return null === si
                ? (t.memoizedState = e)
                : Wi(t, si.memoizedState, e);
            },
            useTransition: function () {
              return [ki(wi)[0], bi().memoizedState];
            },
            useMutableSource: Ei,
            useSyncExternalStore: Si,
            useId: qi,
            unstable_isNewReconciler: !1,
          };
        function nl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var al = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = Io(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Uo(e, o, a)) && (nc(t, e, a, r), Bo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = Io(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Uo(e, o, a)) && (nc(t, e, a, r), Bo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = Io(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Uo(e, a, r)) && (nc(t, e, r, n), Bo(t, e, r));
          },
        };
        function ol(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function il(e, t, n) {
          var r = !1,
            a = Oa,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = To(o))
              : ((a = _a(t) ? Ra : ja.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ta(e, a)
                  : Oa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function ll(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && al.enqueueReplaceState(t, t.state, null);
        }
        function sl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Fo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = To(o))
            : ((o = _a(t) ? Ra : ja.current), (a.context = Ta(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (rl(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && al.enqueueReplaceState(a, a.state, null),
              Ho(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ul(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var dl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Io(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ws || ((Ws = !0), (Vs = r)), fl(0, t);
            }),
            n
          );
        }
        function hl(e, t, n) {
          (n = Io(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new dl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Io(-1, 1)).tag = 2), Uo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yl = w.ReactCurrentOwner,
          bl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? ko(t, null, n, r) : xo(t, e.child, n, r);
        }
        function xl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Ro(t, a),
            (r = gi(e, t, n, r, o, a)),
            (n = vi()),
            null === e || bl
              ? (ao && n && eo(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wl(e, t, a))
          );
        }
        function kl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              _c(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Dc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Wl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((bl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wl(e, t, a);
              0 !== (131072 & e.flags) && (bl = !0);
            }
          }
          return Nl(e, t, n, r, a);
        }
        function Sl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Ls, _s),
                (_s |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Ls, _s),
                  (_s |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Na(Ls, _s),
                (_s |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Ls, _s),
              (_s |= r);
          return wl(e, t, a, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Nl(e, t, n, r, a) {
          var o = _a(n) ? Ra : ja.current;
          return (
            (o = Ta(t, o)),
            Ro(t, a),
            (n = gi(e, t, n, r, o, a)),
            (r = vi()),
            null === e || bl
              ? (ao && r && eo(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wl(e, t, a))
          );
        }
        function Ol(e, t, n, r, a) {
          if (_a(n)) {
            var o = !0;
            Ma(t);
          } else o = !1;
          if ((Ro(t, a), null === t.stateNode))
            Hl(e, t), il(t, n, r), sl(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = To(c))
              : (c = Ta(t, (c = _a(n) ? Ra : ja.current)));
            var u = n.getDerivedStateFromProps,
              f =
                "function" === typeof u ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== c) && ll(t, i, r, c)),
              (Mo = !1);
            var d = t.memoizedState;
            (i.state = d),
              Ho(t, r, i, a),
              (s = t.memoizedState),
              l !== r || d !== s || Pa.current || Mo
                ? ("function" === typeof u &&
                    (rl(t, n, u, r), (s = t.memoizedState)),
                  (l = Mo || ol(t, n, l, r, d, s, c))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = c),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              zo(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : nl(t.type, l)),
              (i.props = c),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = To(s))
                : (s = Ta(t, (s = _a(n) ? Ra : ja.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== s) && ll(t, i, r, s)),
              (Mo = !1),
              (d = t.memoizedState),
              (i.state = d),
              Ho(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Pa.current || Mo
              ? ("function" === typeof p &&
                  (rl(t, n, p, r), (h = t.memoizedState)),
                (c = Mo || ol(t, n, c, r, d, h, s) || !1)
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return jl(e, t, n, r, o, a);
        }
        function jl(e, t, n, r, a, o) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Fa(t, n, !1), Wl(e, t, o);
          (r = t.stateNode), (yl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = xo(t, e.child, null, o)),
                (t.child = xo(t, null, l, o)))
              : wl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Pl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            Xo(e, t.containerInfo);
        }
        function Rl(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Tl,
          _l,
          Ll,
          Dl,
          Al = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ml(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fl(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ei.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Na(ei, 1 & i),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Mc(s, a, 0, null)),
                      (e = Ac(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Ml(n)),
                      (t.memoizedState = Al),
                      e)
                    : zl(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Il(e, t, l, (r = ul(Error(o(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (a = t.mode),
                      (r = Mc(
                        { mode: "visible", children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((i = Ac(i, a, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && xo(t, e.child, null, l),
                      (t.child.memoizedState = Ml(l)),
                      (t.memoizedState = Al),
                      i);
              if (0 === (1 & t.mode)) return Il(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Il(e, t, l, (r = ul((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), bl || s)) {
                if (null !== (r = Ps)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ao(e, a), nc(r, e, a, -1));
                }
                return mc(), Il(e, t, l, (r = ul(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Oc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Ka[Qa++] = Xa),
                    (Ka[Qa++] = Ja),
                    (Ka[Qa++] = Ya),
                    (Xa = e.id),
                    (Ja = e.overflow),
                    (Ya = t)),
                  (t = zl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Lc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Lc(r, l))
                : ((l = Ac(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Ml(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Al),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Lc(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function zl(e, t) {
          return (
            ((t = Mc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Il(e, t, n, r) {
          return (
            null !== r && mo(r),
            xo(t, e.child, null, n),
            ((e = zl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ul(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Po(e.return, t, n);
        }
        function Bl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function $l(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = ei.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
                else if (19 === e.tag) Ul(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(ei, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ti(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ti(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bl(t, !0, n, null, o);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ms |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Lc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Kl(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return _a(t.type) && La(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Jo(),
                Ca(Pa),
                Ca(ja),
                ri(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ic(oo), (oo = null)))),
                _l(e, t),
                ql(t),
                null
              );
            case 5:
              Zo(t);
              var a = Yo(Qo.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ll(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ql(t), null;
                }
                if (((e = Yo(qo.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) Ir(Ar[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      X(r, i), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ir("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var c = i[s];
                      "children" === s
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Gr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Gr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : l.hasOwnProperty(s) &&
                          null != c &&
                          "onScroll" === s &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            "select" === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Tl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) Ir(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        Ir("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (a = r);
                        break;
                      case "details":
                        Ir("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = Y(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ir("invalid", e);
                    }
                    for (i in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(i)) {
                        var u = c[i];
                        "style" === i
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === i
                            ? null != (u = u ? u.__html : void 0) && fe(e, u)
                            : "children" === i
                              ? "string" === typeof u
                                ? ("textarea" !== n || "" !== u) && de(e, u)
                                : "number" === typeof u && de(e, "" + u)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != u &&
                                    "onScroll" === i &&
                                    Ir("scroll", e)
                                  : null != u && b(e, i, u, s));
                      }
                    switch (n) {
                      case "input":
                        q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) Dl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Yo(Qo.current)), Yo(qo.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (Ca(ei),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (i = !1);
                } else null !== oo && (ic(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ei.current)
                        ? 0 === Ds && (Ds = 3)
                        : mc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                Jo(),
                _l(e, t),
                null === e && $r(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return jo(t.type._context), ql(t), null;
            case 19:
              if ((Ca(ei), null === (i = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Vl(i, !1);
                else {
                  if (0 !== Ds || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ti(e))) {
                        for (
                          t.flags |= 128,
                            Vl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na(ei, (1 & ei.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Je() > $s &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ti(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return ql(t), null;
                  } else
                    2 * Je() - i.renderingStartTime > $s &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = ei.current),
                  Na(ei, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & _s) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Ql(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                _a(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Jo(),
                Ca(Pa),
                Ca(ja),
                ri(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if (
                (Ca(ei),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ei), null;
            case 4:
              return Jo(), null;
            case 10:
              return jo(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Tl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (_l = function () {}),
          (Ll = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Yo(qo.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var s = a[u];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (l.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((s = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                )
                  if ("style" === u)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          s[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (i || (i = []), i.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (i = i || []).push(u, c))
                      : "children" === u
                        ? ("string" !== typeof c && "number" !== typeof c) ||
                          (i = i || []).push(u, "" + c)
                        : "suppressContentEditableWarning" !== u &&
                          "suppressHydrationWarning" !== u &&
                          (l.hasOwnProperty(u)
                            ? (null != c && "onScroll" === u && Ir("scroll", e),
                              i || s === c || (i = []))
                            : (i = i || []).push(u, c));
              }
              n && (i = i || []).push("style", n);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Dl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Xl = !1,
          Jl = "function" === typeof WeakSet ? WeakSet : Set,
          Gl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sc(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Sc(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var us = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || Zl(n, t);
            case 6:
              var r = us,
                a = fs;
              (us = null),
                ds(e, t, n),
                (fs = a),
                null !== (us = r) &&
                  (fs
                    ? ((e = us),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : us.removeChild(n.stateNode));
              break;
            case 18:
              null !== us &&
                (fs
                  ? ((e = us),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    $t(e))
                  : sa(us, n.stateNode));
              break;
            case 4:
              (r = us),
                (a = fs),
                (us = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (us = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (
                !Xl &&
                (Zl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Sc(n, t, l);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  ds(e, t, n),
                  (Xl = r))
                : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var r = jc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (us = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (us = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === us) throw Error(o(160));
                ps(i, l, a), (us = null), (fs = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Sc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  Sc(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              break;
            case 1:
              ms(t, e), vs(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & r && null !== n && Zl(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      J(a, i),
                      be(s, l);
                    var u = be(s, i);
                    for (l = 0; l < c.length; l += 2) {
                      var f = c[l],
                        d = c[l + 1];
                      "style" === f
                        ? ge(a, d)
                        : "dangerouslySetInnerHTML" === f
                          ? fe(a, d)
                          : "children" === f
                            ? de(a, d)
                            : b(a, f, d, u);
                    }
                    switch (s) {
                      case "input":
                        G(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Sc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $t(t.containerInfo);
                } catch (g) {
                  Sc(e, e.return, g);
                }
              break;
            case 4:
            default:
              ms(t, e), vs(e);
              break;
            case 13:
              ms(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bs = Je())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (u = Xl) || f), ms(t, e), (Xl = u))
                  : ms(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !f && 0 !== (1 & e.mode))
                )
                  for (Gl = e, f = e.child; null !== f; ) {
                    for (d = Gl = f; null !== Gl; ) {
                      switch (((h = (p = Gl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Sc(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Gl = h)) : xs(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          u
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (c = d.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (g) {
                        Sc(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                      } catch (g) {
                        Sc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), vs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cs(e, ls(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, ls(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Sc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Gl = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Gl; ) {
            var a = Gl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yl;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Yl;
                var c = Xl;
                if (((Yl = i), (Xl = s) && !c))
                  for (Gl = a; null !== Gl; )
                    (s = (i = Gl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(a)
                        : null !== s
                          ? ((s.return = i), (Gl = s))
                          : ks(a);
                for (; null !== o; ) (Gl = o), bs(o, t, n), (o = o.sibling);
                (Gl = a), (Yl = l), (Xl = c);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Gl = o))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Gl; ) {
            var t = Gl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : nl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Wo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Wo(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var f = u.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && $t(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xl || (512 & t.flags && as(t));
              } catch (p) {
                Sc(t, t.return, p);
              }
            }
            if (t === e) {
              Gl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Gl = n);
              break;
            }
            Gl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Gl; ) {
            var t = Gl;
            if (t === e) {
              Gl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Gl = n);
              break;
            }
            Gl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Gl; ) {
            var t = Gl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Sc(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Sc(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Sc(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Sc(t, i, s);
                  }
              }
            } catch (s) {
              Sc(t, t.return, s);
            }
            if (t === e) {
              Gl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Gl = l);
              break;
            }
            Gl = t.return;
          }
        }
        var Es,
          Ss = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          Ns = w.ReactCurrentOwner,
          Os = w.ReactCurrentBatchConfig,
          js = 0,
          Ps = null,
          Rs = null,
          Ts = 0,
          _s = 0,
          Ls = Sa(0),
          Ds = 0,
          As = null,
          Ms = 0,
          Fs = 0,
          zs = 0,
          Is = null,
          Us = null,
          Bs = 0,
          $s = 1 / 0,
          Hs = null,
          Ws = !1,
          Vs = null,
          qs = null,
          Ks = !1,
          Qs = null,
          Ys = 0,
          Xs = 0,
          Js = null,
          Gs = -1,
          Zs = 0;
        function ec() {
          return 0 !== (6 & js) ? Je() : -1 !== Gs ? Gs : (Gs = Je());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & js) && 0 !== Ts
              ? Ts & -Ts
              : null !== go.transition
                ? (0 === Zs && (Zs = mt()), Zs)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Js = null), Error(o(185)));
          vt(e, n, r),
            (0 !== (2 & js) && e === Ps) ||
              (e === Ps && (0 === (2 & js) && (Fs |= n), 4 === Ds && lc(e, Ts)),
              rc(e, r),
              1 === n &&
                0 === js &&
                0 === (1 & t.mode) &&
                (($s = Je() + 500), Ia && $a()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ps ? Ts : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ia = !0), Ba(e);
                  })(sc.bind(null, e))
                : Ba(sc.bind(null, e)),
                ia(function () {
                  0 === (6 & js) && $a();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Gs = -1), (Zs = 0), 0 !== (6 & js))) throw Error(o(327));
          var n = e.callbackNode;
          if (kc() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ps ? Ts : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = js;
            js |= 2;
            var i = hc();
            for (
              (Ps === e && Ts === t) ||
              ((Hs = null), ($s = Je() + 500), dc(e, t));
              ;

            )
              try {
                yc();
                break;
              } catch (s) {
                pc(e, s);
              }
            Oo(),
              (Cs.current = i),
              (js = a),
              null !== Rs ? (t = 0) : ((Ps = null), (Ts = 0), (t = Ds));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = As), dc(e, 0), lc(e, r), rc(e, Je()), n);
            if (6 === t) lc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = oc(e, i))),
                  1 === t))
              )
                throw ((n = As), dc(e, 0), lc(e, r), rc(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xc(e, Us, Hs);
                  break;
                case 3:
                  if (
                    (lc(e, r),
                    (130023424 & r) === r && 10 < (t = Bs + 500 - Je()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xc.bind(null, e, Us, Hs), t);
                    break;
                  }
                  xc(e, Us, Hs);
                  break;
                case 4:
                  if ((lc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Ss(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xc.bind(null, e, Us, Hs), r);
                    break;
                  }
                  xc(e, Us, Hs);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rc(e, Je()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = Is;
          return (
            e.current.memoizedState.isDehydrated && (dc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = Us), (Us = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === Us ? (Us = e) : Us.push.apply(Us, e);
        }
        function lc(e, t) {
          for (
            t &= ~zs,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function sc(e) {
          if (0 !== (6 & js)) throw Error(o(327));
          kc();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rc(e, Je()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = As), dc(e, 0), lc(e, t), rc(e, Je()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xc(e, Us, Hs),
            rc(e, Je()),
            null
          );
        }
        function cc(e, t) {
          var n = js;
          js |= 1;
          try {
            return e(t);
          } finally {
            0 === (js = n) && (($s = Je() + 500), Ia && $a());
          }
        }
        function uc(e) {
          null !== Qs && 0 === Qs.tag && 0 === (6 & js) && kc();
          var t = js;
          js |= 1;
          var n = Os.transition,
            r = bt;
          try {
            if (((Os.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Os.transition = n), 0 === (6 & (js = t)) && $a();
          }
        }
        function fc() {
          (_s = Ls.current), Ca(Ls);
        }
        function dc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Rs))
            for (n = Rs.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  Jo(), Ca(Pa), Ca(ja), ri();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Jo();
                  break;
                case 13:
                case 19:
                  Ca(ei);
                  break;
                case 10:
                  jo(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (Rs = e = Lc(e.current, null)),
            (Ts = _s = t),
            (Ds = 0),
            (As = null),
            (zs = Fs = Ms = 0),
            (Us = Is = null),
            null !== _o)
          ) {
            for (t = 0; t < _o.length; t++)
              if (null !== (r = (n = _o[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            _o = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Rs;
            try {
              if ((Oo(), (ai.current = Gi), ui)) {
                for (var r = li.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ui = !1;
              }
              if (
                ((ii = 0),
                (ci = si = li = null),
                (fi = !1),
                (di = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                (Ds = 1), (As = t), (Rs = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  c = t;
                if (
                  ((t = Ts),
                  (s.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && ml(i, u, t),
                      (c = u);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, u, t), mc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var v = gl(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vl(v, l, s, 0, t),
                      mo(cl(c, s));
                    break e;
                  }
                }
                (i = c = cl(c, s)),
                  4 !== Ds && (Ds = 2),
                  null === Is ? (Is = [i]) : Is.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        $o(i, pl(0, c, t));
                      break e;
                    case 1:
                      s = c;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qs || !qs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          $o(i, hl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wc(n);
            } catch (w) {
              (t = w), Rs === n && null !== n && (Rs = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = Cs.current;
          return (Cs.current = Gi), null === e ? Gi : e;
        }
        function mc() {
          (0 !== Ds && 3 !== Ds && 2 !== Ds) || (Ds = 4),
            null === Ps ||
              (0 === (268435455 & Ms) && 0 === (268435455 & Fs)) ||
              lc(Ps, Ts);
        }
        function gc(e, t) {
          var n = js;
          js |= 2;
          var r = hc();
          for ((Ps === e && Ts === t) || ((Hs = null), dc(e, t)); ; )
            try {
              vc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((Oo(), (js = n), (Cs.current = r), null !== Rs))
            throw Error(o(261));
          return (Ps = null), (Ts = 0), Ds;
        }
        function vc() {
          for (; null !== Rs; ) bc(Rs);
        }
        function yc() {
          for (; null !== Rs && !Ye(); ) bc(Rs);
        }
        function bc(e) {
          var t = Es(e.alternate, e, _s);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (Rs = t),
            (Ns.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Kl(n, t, _s))) return void (Rs = n);
            } else {
              if (null !== (n = Ql(n, t)))
                return (n.flags &= 32767), void (Rs = n);
              if (null === e) return (Ds = 6), void (Rs = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Rs = t);
            Rs = t = e;
          } while (null !== t);
          0 === Ds && (Ds = 5);
        }
        function xc(e, t, n) {
          var r = bt,
            a = Os.transition;
          try {
            (Os.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  kc();
                } while (null !== Qs);
                if (0 !== (6 & js)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Ps && ((Rs = Ps = null), (Ts = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Pc(tt, function () {
                      return kc(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Os.transition), (Os.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = js;
                  (js |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                c = -1,
                                u = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (s = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (c = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++u === a && (s = l),
                                    p === i && ++f === r && (c = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === c
                                  ? null
                                  : { start: s, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Gl = t;
                        null !== Gl;

                      )
                        if (
                          ((e = (t = Gl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Gl = e);
                        else
                          for (; null !== Gl; ) {
                            t = Gl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : nl(t.type, g),
                                          v,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              Sc(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Gl = e);
                              break;
                            }
                            Gl = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Xe(),
                    (js = s),
                    (bt = l),
                    (Os.transition = i);
                } else e.current = n;
                if (
                  (Ks && ((Ks = !1), (Qs = e), (Ys = a)),
                  (i = e.pendingLanes),
                  0 === i && (qs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Ws) throw ((Ws = !1), (e = Vs), (Vs = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && kc(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Js
                      ? Xs++
                      : ((Xs = 0), (Js = e))
                    : (Xs = 0),
                  $a();
              })(e, t, n, r);
          } finally {
            (Os.transition = a), (bt = r);
          }
          return null;
        }
        function kc() {
          if (null !== Qs) {
            var e = wt(Ys),
              t = Os.transition,
              n = bt;
            try {
              if (((Os.transition = null), (bt = 16 > e ? 16 : e), null === Qs))
                var r = !1;
              else {
                if (((e = Qs), (Qs = null), (Ys = 0), 0 !== (6 & js)))
                  throw Error(o(331));
                var a = js;
                for (js |= 4, Gl = e.current; null !== Gl; ) {
                  var i = Gl,
                    l = i.child;
                  if (0 !== (16 & Gl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        for (Gl = u; null !== Gl; ) {
                          var f = Gl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Gl = d);
                          else
                            for (; null !== Gl; ) {
                              var p = (f = Gl).sibling,
                                h = f.return;
                              if ((os(f), f === u)) {
                                Gl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Gl = p);
                                break;
                              }
                              Gl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Gl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Gl = l);
                  else
                    e: for (; null !== Gl; ) {
                      if (0 !== (2048 & (i = Gl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Gl = y);
                        break e;
                      }
                      Gl = i.return;
                    }
                }
                var b = e.current;
                for (Gl = b; null !== Gl; ) {
                  var w = (l = Gl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Gl = w);
                  else
                    e: for (l = b; null !== Gl; ) {
                      if (0 !== (2048 & (s = Gl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          Sc(s, s.return, k);
                        }
                      if (s === l) {
                        Gl = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Gl = x);
                        break e;
                      }
                      Gl = s.return;
                    }
                }
                if (
                  ((js = a),
                  $a(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Os.transition = t);
            }
          }
          return !1;
        }
        function Ec(e, t, n) {
          (e = Uo(e, (t = pl(0, (t = cl(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (vt(e, 1, t), rc(e, t));
        }
        function Sc(e, t, n) {
          if (3 === e.tag) Ec(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ec(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = Uo(t, (e = hl(t, (e = cl(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (vt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Ts & n) === n &&
              (4 === Ds ||
              (3 === Ds && (130023424 & Ts) === Ts && 500 > Je() - Bs)
                ? dc(e, 0)
                : (zs |= n)),
            rc(e, t);
        }
        function Nc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = Ao(e, t)) && (vt(e, t, n), rc(e, n));
        }
        function Oc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nc(e, n);
        }
        function jc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Nc(e, n);
        }
        function Pc(e, t) {
          return Ke(e, t);
        }
        function Rc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Tc(e, t, n, r) {
          return new Rc(e, t, n, r);
        }
        function _c(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Tc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Dc(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) _c(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case E:
                return Ac(n.children, a, i, t);
              case S:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Tc(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Tc(13, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Tc(19, n, t, a)).elementType = R), (e.lanes = i), e
                );
              case L:
                return Mc(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      l = 10;
                      break e;
                    case O:
                      l = 9;
                      break e;
                    case j:
                      l = 11;
                      break e;
                    case T:
                      l = 14;
                      break e;
                    case _:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Tc(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ac(e, t, n, r) {
          return ((e = Tc(7, e, r, t)).lanes = n), e;
        }
        function Mc(e, t, n, r) {
          return (
            ((e = Tc(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fc(e, t, n) {
          return ((e = Tc(6, e, null, t)).lanes = n), e;
        }
        function zc(e, t, n) {
          return (
            ((t = Tc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ic(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uc(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new Ic(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Tc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Fo(o),
            e
          );
        }
        function Bc(e) {
          if (!e) return Oa;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (_a(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (_a(n)) return Aa(e, n, t);
          }
          return t;
        }
        function $c(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = Uc(n, r, !0, e, 0, o, 0, l, s)).context = Bc(null)),
            (n = e.current),
            ((o = Io((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Uo(n, o, a),
            (e.current.lanes = a),
            vt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Hc(e, t, n, r) {
          var a = t.current,
            o = ec(),
            i = tc(a);
          return (
            (n = Bc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Io(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Uo(a, t, i)) && (nc(e, a, i, o), Bo(e, a, i)),
            i
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qc(e, t) {
          Vc(e, t), (e = e.alternate) && Vc(e, t);
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) bl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pl(t), ho();
                        break;
                      case 5:
                        Go(t);
                        break;
                      case 1:
                        _a(t.type) && Ma(t);
                        break;
                      case 4:
                        Xo(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(Eo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(ei, 1 & ei.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Fl(e, t, n)
                              : (Na(ei, 1 & ei.current),
                                null !== (e = Wl(e, t, n)) ? e.sibling : null);
                        Na(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return $l(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(ei, ei.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Sl(e, t, n);
                    }
                    return Wl(e, t, n);
                  })(e, t, n)
                );
              bl = 0 !== (131072 & e.flags);
            }
          else (bl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var a = Ta(t, ja.current);
              Ro(t, n), (a = gi(null, t, r, e, a, n));
              var i = vi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    _a(r) ? ((i = !0), Ma(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Fo(t),
                    (a.updater = al),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    sl(t, r, e, n),
                    (t = jl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    wl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return _c(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = nl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ol(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, nl(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Nl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ol(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 3:
              e: {
                if ((Pl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  zo(e, t),
                  Ho(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Rl(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Rl(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = ko(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Wl(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Go(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Cl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Fl(e, t, n);
            case 4:
              return (
                Xo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xo(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Na(Eo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Pa.current) {
                      t = Wl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = Io(-1, n & -n)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var f = (u = u.shared).pending;
                                null === f
                                  ? (c.next = c)
                                  : ((c.next = f.next), (f.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              Po(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Po(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ro(t, n),
                (r = r((a = To(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = nl((r = t.type), t.pendingProps)),
                kl(e, t, r, (a = nl(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : nl(r, a)),
                Hl(e, t),
                (t.tag = 1),
                _a(r) ? ((e = !0), Ma(t)) : (e = !1),
                Ro(t, n),
                il(t, r, a),
                sl(t, r, a, n),
                jl(null, t, r, !0, e, n)
              );
            case 19:
              return $l(e, t, n);
            case 22:
              return Sl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Kc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Gc() {}
        function Zc(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Wc(i);
                l.call(e);
              };
            }
            Hc(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Wc(i);
                    o.call(e);
                  };
                }
                var i = $c(t, r, e, 0, null, !1, 0, "", Gc);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  $r(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Wc(s);
                  l.call(e);
                };
              }
              var s = Uc(e, 0, !1, null, 0, !1, 0, "", Gc);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                $r(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Hc(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Wc(i);
        }
        (Yc.prototype.render = Qc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hc(e, t, null, null);
          }),
          (Yc.prototype.unmount = Qc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  Hc(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    rc(t, Je()),
                    0 === (6 & js) && (($s = Je() + 500), $a()));
                }
                break;
              case 13:
                uc(function () {
                  var t = Ao(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  qc(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ao(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              qc(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Ao(e, t);
              if (null !== n) nc(n, e, t, ec());
              qc(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((G(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(o(90));
                      K(r), G(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = cc),
          (Pe = uc);
        var eu = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ne, Oe, cc],
          },
          tu = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (at = ru.inject(nu)), (ot = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Kc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new Qc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return Zc(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Kc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = $c(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              $r(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return Zc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Jc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                Zc(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Jc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zc(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      367: (e, t, n) => {
        "use strict";
        var r = n(766);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      766: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(306));
      },
      241: (e, t, n) => {
        "use strict";
        var r = n(643),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
      },
      226: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          E = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !S.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: E.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var O = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + j(s, 0) : o),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(O, "$&/") + "/"),
                  P(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(O, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var c = 0; c < e.length; c++) {
              var u = o + j((l = e[c]), c);
              s += P(l, t, a, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(l = e.next()).done; )
              s += P((l = l.value), t, a, (u = o + j(l, c++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return s;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var _ = { current: null },
          L = { transition: null },
          D = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: E,
          };
        function A() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.act = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = E.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !S.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = A),
          (t.useCallback = function (e, t) {
            return _.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return _.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return _.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return _.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return _.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return _.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _.current.useRef(e);
          }),
          (t.useState = function (e) {
            return _.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return _.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return _.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      643: (e, t, n) => {
        "use strict";
        e.exports = n(226);
      },
      507: (e, t, n) => {
        "use strict";
        e.exports = n(241);
      },
      498: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                c = l + 1,
                u = e[c];
              if (0 > o(s, n))
                c < a && 0 > o(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(c < a && 0 > o(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var c = [],
          u = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(c)) (m = !0), L(k);
            else {
              var t = r(u);
              null !== t && D(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), y(N), (N = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || (e && !P()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(c) && a(c),
                  w(n);
              } else a(c);
              d = r(c);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(u);
              null !== f && D(x, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          S = !1,
          C = null,
          N = -1,
          O = 5,
          j = -1;
        function P() {
          return !(t.unstable_now() - j < O);
        }
        function R() {
          if (null !== C) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? E() : ((S = !1), (C = null));
            }
          } else S = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            _ = T.port2;
          (T.port1.onmessage = R),
            (E = function () {
              _.postMessage(null);
            });
        } else
          E = function () {
            v(R, 0);
          };
        function L(e) {
          (C = e), S || ((S = !0), E());
        }
        function D(e, n) {
          N = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (O = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (g ? (y(N), (N = -1)) : (g = !0), D(x, o - i)))
                : ((e.sortIndex = l), n(c, e), m || h || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      261: (e, t, n) => {
        "use strict";
        e.exports = n(498);
      },
      480: (e) => {
        "use strict";
        var t = function () {};
        e.exports = t;
      },
      333: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = "", t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              n && (e = i(e, o(n)));
            }
            return e;
          }
          function o(e) {
            if ("string" === typeof e || "number" === typeof e) return e;
            if ("object" !== typeof e) return "";
            if (Array.isArray(e)) return a.apply(null, e);
            if (
              e.toString !== Object.prototype.toString &&
              !e.toString.toString().includes("[native code]")
            )
              return e.toString();
            var t = "";
            for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
            return t;
          }
          function i(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(o, i), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".43080baa.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "flash-wiz:";
      n.l = (r, a, o, i) => {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== o)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var f = c[u];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + o
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var d = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4,
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            i = r[0],
            l = r[1],
            s = r[2],
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); c < i.length; c++)
            (o = i[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkflash_wiz = self.webpackChunkflash_wiz || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => ue,
          hasStandardBrowserEnv: () => de,
          hasStandardBrowserWebWorkerEnv: () => pe,
          navigator: () => fe,
          origin: () => he,
        });
      var t = n(643),
        r = n.t(t, 2),
        a = n(367);
      function o(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: i } = Object.prototype,
        { getPrototypeOf: l } = Object,
        s =
          ((c = Object.create(null)),
          (e) => {
            const t = i.call(e);
            return c[t] || (c[t] = t.slice(8, -1).toLowerCase());
          });
      var c;
      const u = (e) => ((e = e.toLowerCase()), (t) => s(t) === e),
        f = (e) => (t) => typeof t === e,
        { isArray: d } = Array,
        p = f("undefined");
      const h = u("ArrayBuffer");
      const m = f("string"),
        g = f("function"),
        v = f("number"),
        y = (e) => null !== e && "object" === typeof e,
        b = (e) => {
          if ("object" !== s(e)) return !1;
          const t = l(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        w = u("Date"),
        x = u("File"),
        k = u("Blob"),
        E = u("FileList"),
        S = u("URLSearchParams"),
        [C, N, O, j] = ["ReadableStream", "Request", "Response", "Headers"].map(
          u,
        );
      function P(e, t) {
        let n,
          r,
          { allOwnKeys: a = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), d(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = r.length;
            let i;
            for (n = 0; n < o; n++) (i = r[n]), t.call(null, e[i], i, e);
          }
      }
      function R(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          a = n.length;
        for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
        return null;
      }
      const T =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
              ? self
              : "undefined" !== typeof window
                ? window
                : global,
        _ = (e) => !p(e) && e !== T;
      const L =
        ((D = "undefined" !== typeof Uint8Array && l(Uint8Array)),
        (e) => D && e instanceof D);
      var D;
      const A = u("HTMLFormElement"),
        M = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        F = u("RegExp"),
        z = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          P(n, (n, a) => {
            let o;
            !1 !== (o = t(n, a, e)) && (r[a] = o || n);
          }),
            Object.defineProperties(e, r);
        },
        I = "abcdefghijklmnopqrstuvwxyz",
        U = "0123456789",
        B = { DIGIT: U, ALPHA: I, ALPHA_DIGIT: I + I.toUpperCase() + U };
      const $ = u("AsyncFunction"),
        H = ((e, t) => {
          return e
            ? setImmediate
            : t
              ? ((n = `axios@${Math.random()}`),
                (r = []),
                T.addEventListener(
                  "message",
                  (e) => {
                    let { source: t, data: a } = e;
                    t === T && a === n && r.length && r.shift()();
                  },
                  !1,
                ),
                (e) => {
                  r.push(e), T.postMessage(n, "*");
                })
              : (e) => setTimeout(e);
          var n, r;
        })("function" === typeof setImmediate, g(T.postMessage)),
        W =
          "undefined" !== typeof queueMicrotask
            ? queueMicrotask.bind(T)
            : ("undefined" !== typeof process && process.nextTick) || H,
        V = {
          isArray: d,
          isArrayBuffer: h,
          isBuffer: function (e) {
            return (
              null !== e &&
              !p(e) &&
              null !== e.constructor &&
              !p(e.constructor) &&
              g(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (g(e.append) &&
                  ("formdata" === (t = s(e)) ||
                    ("object" === t &&
                      g(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && h(e.buffer)),
              t
            );
          },
          isString: m,
          isNumber: v,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: y,
          isPlainObject: b,
          isReadableStream: C,
          isRequest: N,
          isResponse: O,
          isHeaders: j,
          isUndefined: p,
          isDate: w,
          isFile: x,
          isBlob: k,
          isRegExp: F,
          isFunction: g,
          isStream: (e) => y(e) && g(e.pipe),
          isURLSearchParams: S,
          isTypedArray: L,
          isFileList: E,
          forEach: P,
          merge: function e() {
            const { caseless: t } = (_(this) && this) || {},
              n = {},
              r = (r, a) => {
                const o = (t && R(n, a)) || a;
                b(n[o]) && b(r)
                  ? (n[o] = e(n[o], r))
                  : b(r)
                    ? (n[o] = e({}, r))
                    : d(r)
                      ? (n[o] = r.slice())
                      : (n[o] = r);
              };
            for (let a = 0, o = arguments.length; a < o; a++)
              arguments[a] && P(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              P(
                t,
                (t, r) => {
                  n && g(t) ? (e[r] = o(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r },
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let a, o, i;
            const s = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
                (i = a[o]),
                  (r && !r(i, e, t)) || s[i] || ((t[i] = e[i]), (s[i] = !0));
              e = !1 !== n && l(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: s,
          kindOfTest: u,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (d(e)) return e;
            let t = e.length;
            if (!v(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: A,
          hasOwnProperty: M,
          hasOwnProp: M,
          reduceDescriptors: z,
          freezeMethods: (e) => {
            z(e, (t, n) => {
              if (g(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              g(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'",
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return d(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e = +e)) ? e : t,
          findKey: R,
          global: T,
          isContextDefined: _,
          ALPHABET: B,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : B.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              g(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (y(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const a = d(e) ? [] : {};
                    return (
                      P(e, (e, t) => {
                        const o = n(e, r + 1);
                        !p(o) && (a[t] = o);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: $,
          isThenable: (e) => e && (y(e) || g(e)) && g(e.then) && g(e.catch),
          setImmediate: H,
          asap: W,
        };
      function q(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a &&
            ((this.response = a), (this.status = a.status ? a.status : null));
      }
      V.inherits(q, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: V.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      const K = q.prototype,
        Q = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        Q[e] = { value: e };
      }),
        Object.defineProperties(q, Q),
        Object.defineProperty(K, "isAxiosError", { value: !0 }),
        (q.from = (e, t, n, r, a, o) => {
          const i = Object.create(K);
          return (
            V.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e,
            ),
            q.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      const Y = q;
      function X(e) {
        return V.isPlainObject(e) || V.isArray(e);
      }
      function J(e) {
        return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function G(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = J(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const Z = V.toFlatObject(V, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const ee = function (e, t, n) {
        if (!V.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = V.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !V.isUndefined(t[e]);
            },
          )).metaTokens,
          a = n.visitor || c,
          o = n.dots,
          i = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            V.isSpecCompliantForm(t);
        if (!V.isFunction(a)) throw new TypeError("visitor must be a function");
        function s(e) {
          if (null === e) return "";
          if (V.isDate(e)) return e.toISOString();
          if (!l && V.isBlob(e))
            throw new Y("Blob is not supported. Use a Buffer instead.");
          return V.isArrayBuffer(e) || V.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function c(e, n, a) {
          let l = e;
          if (e && !a && "object" === typeof e)
            if (V.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (V.isArray(e) &&
                (function (e) {
                  return V.isArray(e) && !e.some(X);
                })(e)) ||
              ((V.isFileList(e) || V.endsWith(n, "[]")) && (l = V.toArray(e)))
            )
              return (
                (n = J(n)),
                l.forEach(function (e, r) {
                  !V.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? G([n], r, o) : null === i ? n : n + "[]",
                      s(e),
                    );
                }),
                !1
              );
          return !!X(e) || (t.append(G(a, n, o), s(e)), !1);
        }
        const u = [],
          f = Object.assign(Z, {
            defaultVisitor: c,
            convertValue: s,
            isVisitable: X,
          });
        if (!V.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!V.isUndefined(n)) {
              if (-1 !== u.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              u.push(n),
                V.forEach(n, function (n, o) {
                  !0 ===
                    (!(V.isUndefined(n) || null === n) &&
                      a.call(t, n, V.isString(o) ? o.trim() : o, r, f)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                u.pop();
            }
          })(e),
          t
        );
      };
      function te(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function ne(e, t) {
        (this._pairs = []), e && ee(e, this, t);
      }
      const re = ne.prototype;
      (re.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (re.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, te);
              }
            : te;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const ae = ne;
      function oe(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function ie(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || oe,
          a = n && n.serialize;
        let o;
        if (
          ((o = a
            ? a(t, n)
            : V.isURLSearchParams(t)
              ? t.toString()
              : new ae(t, n).toString(r)),
          o)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
        }
        return e;
      }
      const le = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            V.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        se = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        ce = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : ae,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        ue = "undefined" !== typeof window && "undefined" !== typeof document,
        fe = ("object" === typeof navigator && navigator) || void 0,
        de =
          ue &&
          (!fe ||
            ["ReactNative", "NativeScript", "NS"].indexOf(fe.product) < 0),
        pe =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        he = (ue && window.location.href) || "http://localhost",
        me = { ...e, ...ce };
      const ge = function (e) {
        function t(e, n, r, a) {
          let o = e[a++];
          if ("__proto__" === o) return !0;
          const i = Number.isFinite(+o),
            l = a >= e.length;
          if (((o = !o && V.isArray(r) ? r.length : o), l))
            return V.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i;
          (r[o] && V.isObject(r[o])) || (r[o] = []);
          return (
            t(e, n, r[o], a) &&
              V.isArray(r[o]) &&
              (r[o] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let o;
                for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
                return t;
              })(r[o])),
            !i
          );
        }
        if (V.isFormData(e) && V.isFunction(e.entries)) {
          const n = {};
          return (
            V.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return V.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0],
                  );
                })(e),
                r,
                n,
                0,
              );
            }),
            n
          );
        }
        return null;
      };
      const ve = {
        transitional: se,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              a = V.isObject(e);
            a && V.isHTMLForm(e) && (e = new FormData(e));
            if (V.isFormData(e)) return r ? JSON.stringify(ge(e)) : e;
            if (
              V.isArrayBuffer(e) ||
              V.isBuffer(e) ||
              V.isStream(e) ||
              V.isFile(e) ||
              V.isBlob(e) ||
              V.isReadableStream(e)
            )
              return e;
            if (V.isArrayBufferView(e)) return e.buffer;
            if (V.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1,
                ),
                e.toString()
              );
            let o;
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return ee(
                    e,
                    new me.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return me.isNode && V.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t,
                    ),
                  );
                })(e, this.formSerializer).toString();
              if (
                (o = V.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return ee(
                  o ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer,
                );
              }
            }
            return a || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (V.isString(e))
                    try {
                      return (t || JSON.parse)(e), V.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || ve.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (V.isResponse(e) || V.isReadableStream(e)) return e;
            if (e && V.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (a) {
                if (n) {
                  if ("SyntaxError" === a.name)
                    throw Y.from(
                      a,
                      Y.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response,
                    );
                  throw a;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: me.classes.FormData, Blob: me.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      V.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        ve.headers[e] = {};
      });
      const ye = ve,
        be = V.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        we = Symbol("internals");
      function xe(e) {
        return e && String(e).trim().toLowerCase();
      }
      function ke(e) {
        return !1 === e || null == e ? e : V.isArray(e) ? e.map(ke) : String(e);
      }
      function Ee(e, t, n, r, a) {
        return V.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            V.isString(t)
              ? V.isString(r)
                ? -1 !== t.indexOf(r)
                : V.isRegExp(r)
                  ? r.test(t)
                  : void 0
              : void 0);
      }
      class Se {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function a(e, t, n) {
            const a = xe(t);
            if (!a) throw new Error("header name must be a non-empty string");
            const o = V.findKey(r, a);
            (!o ||
              void 0 === r[o] ||
              !0 === n ||
              (void 0 === n && !1 !== r[o])) &&
              (r[o || t] = ke(e));
          }
          const o = (e, t) => V.forEach(e, (e, n) => a(e, n, t));
          if (V.isPlainObject(e) || e instanceof this.constructor) o(e, t);
          else if (
            V.isString(e) &&
            (e = e.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
          )
            o(
              ((e) => {
                const t = {};
                let n, r, a;
                return (
                  e &&
                    e.split("\n").forEach(function (e) {
                      (a = e.indexOf(":")),
                        (n = e.substring(0, a).trim().toLowerCase()),
                        (r = e.substring(a + 1).trim()),
                        !n ||
                          (t[n] && be[n]) ||
                          ("set-cookie" === n
                            ? t[n]
                              ? t[n].push(r)
                              : (t[n] = [r])
                            : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
                  t
                );
              })(e),
              t,
            );
          else if (V.isHeaders(e)) for (const [i, l] of e.entries()) a(l, i, n);
          else null != e && a(t, e, n);
          return this;
        }
        get(e, t) {
          if ((e = xe(e))) {
            const n = V.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (V.isFunction(t)) return t.call(this, e, n);
              if (V.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = xe(e))) {
            const n = V.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !Ee(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function a(e) {
            if ((e = xe(e))) {
              const a = V.findKey(n, e);
              !a || (t && !Ee(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return V.isArray(e) ? e.forEach(a) : a(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const a = t[n];
            (e && !Ee(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            V.forEach(this, (r, a) => {
              const o = V.findKey(n, a);
              if (o) return (t[o] = ke(r)), void delete t[a];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n,
                      );
                  })(a)
                : String(a).trim();
              i !== a && delete t[a], (t[i] = ke(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            V.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && V.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[we] = this[we] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = xe(e);
            t[r] ||
              (!(function (e, t) {
                const n = V.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, a) {
                      return this[r].call(this, t, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return V.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      Se.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        V.reduceDescriptors(Se.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        V.freezeMethods(Se);
      const Ce = Se;
      function Ne(e, t) {
        const n = this || ye,
          r = t || n,
          a = Ce.from(r.headers);
        let o = r.data;
        return (
          V.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function Oe(e) {
        return !(!e || !e.__CANCEL__);
      }
      function je(e, t, n) {
        Y.call(this, null == e ? "canceled" : e, Y.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      V.inherits(je, Y, { __CANCEL__: !0 });
      const Pe = je;
      function Re(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status)
          ? t(
              new Y(
                "Request failed with status code " + n.status,
                [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n,
              ),
            )
          : e(n);
      }
      const Te = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            const s = Date.now(),
              c = r[i];
            a || (a = s), (n[o] = l), (r[o] = s);
            let u = i,
              f = 0;
            for (; u !== o; ) (f += n[u++]), (u %= e);
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), s - a < t))
              return;
            const d = c && s - c;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      };
      const _e = function (e, t) {
          let n,
            r,
            a = 0,
            o = 1e3 / t;
          const i = function (t) {
            let o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Date.now();
            (a = o),
              (n = null),
              r && (clearTimeout(r), (r = null)),
              e.apply(null, t);
          };
          return [
            function () {
              const e = Date.now(),
                t = e - a;
              for (
                var l = arguments.length, s = new Array(l), c = 0;
                c < l;
                c++
              )
                s[c] = arguments[c];
              t >= o
                ? i(s, e)
                : ((n = s),
                  r ||
                    (r = setTimeout(() => {
                      (r = null), i(n);
                    }, o - t)));
            },
            () => n && i(n),
          ];
        },
        Le = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 3,
            r = 0;
          const a = Te(50, 250);
          return _e((n) => {
            const o = n.loaded,
              i = n.lengthComputable ? n.total : void 0,
              l = o - r,
              s = a(l);
            r = o;
            e({
              loaded: o,
              total: i,
              progress: i ? o / i : void 0,
              bytes: l,
              rate: s || void 0,
              estimated: s && i && o <= i ? (i - o) / s : void 0,
              event: n,
              lengthComputable: null != i,
              [t ? "download" : "upload"]: !0,
            });
          }, n);
        },
        De = (e, t) => {
          const n = null != e;
          return [
            (r) => t[0]({ lengthComputable: n, total: e, loaded: r }),
            t[1],
          ];
        },
        Ae = (e) =>
          function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return V.asap(() => e(...n));
          },
        Me = me.hasStandardBrowserEnv
          ? (function () {
              const e =
                  me.navigator &&
                  /(msie|trident)/i.test(me.navigator.userAgent),
                t = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  e && (t.setAttribute("href", r), (r = t.href)),
                  t.setAttribute("href", r),
                  {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname:
                      "/" === t.pathname.charAt(0)
                        ? t.pathname
                        : "/" + t.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (e) {
                  const t = V.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        Fe = me.hasStandardBrowserEnv
          ? {
              write(e, t, n, r, a, o) {
                const i = [e + "=" + encodeURIComponent(t)];
                V.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                  V.isString(r) && i.push("path=" + r),
                  V.isString(a) && i.push("domain=" + a),
                  !0 === o && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read(e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function ze(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const Ie = (e) => (e instanceof Ce ? { ...e } : e);
      function Ue(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return V.isPlainObject(e) && V.isPlainObject(t)
            ? V.merge.call({ caseless: n }, e, t)
            : V.isPlainObject(t)
              ? V.merge({}, t)
              : V.isArray(t)
                ? t.slice()
                : t;
        }
        function a(e, t, n) {
          return V.isUndefined(t)
            ? V.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!V.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return V.isUndefined(t)
            ? V.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function l(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        const s = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
          headers: (e, t) => a(Ie(e), Ie(t), !0),
        };
        return (
          V.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const o = s[r] || a,
              i = o(e[r], t[r], r);
            (V.isUndefined(i) && o !== l) || (n[r] = i);
          }),
          n
        );
      }
      const Be = (e) => {
          const t = Ue({}, e);
          let n,
            {
              data: r,
              withXSRFToken: a,
              xsrfHeaderName: o,
              xsrfCookieName: i,
              headers: l,
              auth: s,
            } = t;
          if (
            ((t.headers = l = Ce.from(l)),
            (t.url = ie(ze(t.baseURL, t.url), e.params, e.paramsSerializer)),
            s &&
              l.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (s.username || "") +
                      ":" +
                      (s.password
                        ? unescape(encodeURIComponent(s.password))
                        : ""),
                  ),
              ),
            V.isFormData(r))
          )
            if (me.hasStandardBrowserEnv || me.hasStandardBrowserWebWorkerEnv)
              l.setContentType(void 0);
            else if (!1 !== (n = l.getContentType())) {
              const [e, ...t] = n
                ? n
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              l.setContentType([e || "multipart/form-data", ...t].join("; "));
            }
          if (
            me.hasStandardBrowserEnv &&
            (a && V.isFunction(a) && (a = a(t)), a || (!1 !== a && Me(t.url)))
          ) {
            const e = o && i && Fe.read(i);
            e && l.set(o, e);
          }
          return t;
        },
        $e =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              const r = Be(e);
              let a = r.data;
              const o = Ce.from(r.headers).normalize();
              let i,
                l,
                s,
                c,
                u,
                {
                  responseType: f,
                  onUploadProgress: d,
                  onDownloadProgress: p,
                } = r;
              function h() {
                c && c(),
                  u && u(),
                  r.cancelToken && r.cancelToken.unsubscribe(i),
                  r.signal && r.signal.removeEventListener("abort", i);
              }
              let m = new XMLHttpRequest();
              function g() {
                if (!m) return;
                const r = Ce.from(
                  "getAllResponseHeaders" in m && m.getAllResponseHeaders(),
                );
                Re(
                  function (e) {
                    t(e), h();
                  },
                  function (e) {
                    n(e), h();
                  },
                  {
                    data:
                      f && "text" !== f && "json" !== f
                        ? m.response
                        : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: r,
                    config: e,
                    request: m,
                  },
                ),
                  (m = null);
              }
              m.open(r.method.toUpperCase(), r.url, !0),
                (m.timeout = r.timeout),
                "onloadend" in m
                  ? (m.onloadend = g)
                  : (m.onreadystatechange = function () {
                      m &&
                        4 === m.readyState &&
                        (0 !== m.status ||
                          (m.responseURL &&
                            0 === m.responseURL.indexOf("file:"))) &&
                        setTimeout(g);
                    }),
                (m.onabort = function () {
                  m &&
                    (n(new Y("Request aborted", Y.ECONNABORTED, e, m)),
                    (m = null));
                }),
                (m.onerror = function () {
                  n(new Y("Network Error", Y.ERR_NETWORK, e, m)), (m = null);
                }),
                (m.ontimeout = function () {
                  let t = r.timeout
                    ? "timeout of " + r.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const a = r.transitional || se;
                  r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                    n(
                      new Y(
                        t,
                        a.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
                        e,
                        m,
                      ),
                    ),
                    (m = null);
                }),
                void 0 === a && o.setContentType(null),
                "setRequestHeader" in m &&
                  V.forEach(o.toJSON(), function (e, t) {
                    m.setRequestHeader(t, e);
                  }),
                V.isUndefined(r.withCredentials) ||
                  (m.withCredentials = !!r.withCredentials),
                f && "json" !== f && (m.responseType = r.responseType),
                p && (([s, u] = Le(p, !0)), m.addEventListener("progress", s)),
                d &&
                  m.upload &&
                  (([l, c] = Le(d)),
                  m.upload.addEventListener("progress", l),
                  m.upload.addEventListener("loadend", c)),
                (r.cancelToken || r.signal) &&
                  ((i = (t) => {
                    m &&
                      (n(!t || t.type ? new Pe(null, e, m) : t),
                      m.abort(),
                      (m = null));
                  }),
                  r.cancelToken && r.cancelToken.subscribe(i),
                  r.signal &&
                    (r.signal.aborted
                      ? i()
                      : r.signal.addEventListener("abort", i)));
              const v = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(r.url);
              v && -1 === me.protocols.indexOf(v)
                ? n(
                    new Y(
                      "Unsupported protocol " + v + ":",
                      Y.ERR_BAD_REQUEST,
                      e,
                    ),
                  )
                : m.send(a || null);
            });
          },
        He = (e, t) => {
          const { length: n } = (e = e ? e.filter(Boolean) : []);
          if (t || n) {
            let n,
              r = new AbortController();
            const a = function (e) {
              if (!n) {
                (n = !0), i();
                const t = e instanceof Error ? e : this.reason;
                r.abort(
                  t instanceof Y
                    ? t
                    : new Pe(t instanceof Error ? t.message : t),
                );
              }
            };
            let o =
              t &&
              setTimeout(() => {
                (o = null),
                  a(new Y(`timeout ${t} of ms exceeded`, Y.ETIMEDOUT));
              }, t);
            const i = () => {
              e &&
                (o && clearTimeout(o),
                (o = null),
                e.forEach((e) => {
                  e.unsubscribe
                    ? e.unsubscribe(a)
                    : e.removeEventListener("abort", a);
                }),
                (e = null));
            };
            e.forEach((e) => e.addEventListener("abort", a));
            const { signal: l } = r;
            return (l.unsubscribe = () => V.asap(i)), l;
          }
        },
        We = function* (e, t) {
          let n = e.byteLength;
          if (!t || n < t) return void (yield e);
          let r,
            a = 0;
          for (; a < n; ) (r = a + t), yield e.slice(a, r), (a = r);
        },
        Ve = async function* (e) {
          if (e[Symbol.asyncIterator]) return void (yield* e);
          const t = e.getReader();
          try {
            for (;;) {
              const { done: e, value: n } = await t.read();
              if (e) break;
              yield n;
            }
          } finally {
            await t.cancel();
          }
        },
        qe = (e, t, n, r) => {
          const a = (async function* (e, t) {
            for await (const n of Ve(e)) yield* We(n, t);
          })(e, t);
          let o,
            i = 0,
            l = (e) => {
              o || ((o = !0), r && r(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  const { done: t, value: r } = await a.next();
                  if (t) return l(), void e.close();
                  let o = r.byteLength;
                  if (n) {
                    let e = (i += o);
                    n(e);
                  }
                  e.enqueue(new Uint8Array(r));
                } catch (t) {
                  throw (l(t), t);
                }
              },
              cancel: (e) => (l(e), a.return()),
            },
            { highWaterMark: 2 },
          );
        },
        Ke =
          "function" === typeof fetch &&
          "function" === typeof Request &&
          "function" === typeof Response,
        Qe = Ke && "function" === typeof ReadableStream,
        Ye =
          Ke &&
          ("function" === typeof TextEncoder
            ? ((Xe = new TextEncoder()), (e) => Xe.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
      var Xe;
      const Je = function (e) {
          try {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return !!e(...n);
          } catch (a) {
            return !1;
          }
        },
        Ge =
          Qe &&
          Je(() => {
            let e = !1;
            const t = new Request(me.origin, {
              body: new ReadableStream(),
              method: "POST",
              get duplex() {
                return (e = !0), "half";
              },
            }).headers.has("Content-Type");
            return e && !t;
          }),
        Ze = Qe && Je(() => V.isReadableStream(new Response("").body)),
        et = { stream: Ze && ((e) => e.body) };
      var tt;
      Ke &&
        ((tt = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          !et[e] &&
            (et[e] = V.isFunction(tt[e])
              ? (t) => t[e]()
              : (t, n) => {
                  throw new Y(
                    `Response type '${e}' is not supported`,
                    Y.ERR_NOT_SUPPORT,
                    n,
                  );
                });
        }));
      const nt = async (e, t) => {
          const n = V.toFiniteNumber(e.getContentLength());
          return null == n
            ? (async (e) => {
                if (null == e) return 0;
                if (V.isBlob(e)) return e.size;
                if (V.isSpecCompliantForm(e)) {
                  const t = new Request(me.origin, { method: "POST", body: e });
                  return (await t.arrayBuffer()).byteLength;
                }
                return V.isArrayBufferView(e) || V.isArrayBuffer(e)
                  ? e.byteLength
                  : (V.isURLSearchParams(e) && (e += ""),
                    V.isString(e) ? (await Ye(e)).byteLength : void 0);
              })(t)
            : n;
        },
        rt =
          Ke &&
          (async (e) => {
            let {
              url: t,
              method: n,
              data: r,
              signal: a,
              cancelToken: o,
              timeout: i,
              onDownloadProgress: l,
              onUploadProgress: s,
              responseType: c,
              headers: u,
              withCredentials: f = "same-origin",
              fetchOptions: d,
            } = Be(e);
            c = c ? (c + "").toLowerCase() : "text";
            let p,
              h = He([a, o && o.toAbortSignal()], i);
            const m =
              h &&
              h.unsubscribe &&
              (() => {
                h.unsubscribe();
              });
            let g;
            try {
              if (
                s &&
                Ge &&
                "get" !== n &&
                "head" !== n &&
                0 !== (g = await nt(u, r))
              ) {
                let e,
                  n = new Request(t, {
                    method: "POST",
                    body: r,
                    duplex: "half",
                  });
                if (
                  (V.isFormData(r) &&
                    (e = n.headers.get("content-type")) &&
                    u.setContentType(e),
                  n.body)
                ) {
                  const [e, t] = De(g, Le(Ae(s)));
                  r = qe(n.body, 65536, e, t);
                }
              }
              V.isString(f) || (f = f ? "include" : "omit");
              const a = "credentials" in Request.prototype;
              p = new Request(t, {
                ...d,
                signal: h,
                method: n.toUpperCase(),
                headers: u.normalize().toJSON(),
                body: r,
                duplex: "half",
                credentials: a ? f : void 0,
              });
              let o = await fetch(p);
              const i = Ze && ("stream" === c || "response" === c);
              if (Ze && (l || (i && m))) {
                const e = {};
                ["status", "statusText", "headers"].forEach((t) => {
                  e[t] = o[t];
                });
                const t = V.toFiniteNumber(o.headers.get("content-length")),
                  [n, r] = (l && De(t, Le(Ae(l), !0))) || [];
                o = new Response(
                  qe(o.body, 65536, n, () => {
                    r && r(), m && m();
                  }),
                  e,
                );
              }
              c = c || "text";
              let v = await et[V.findKey(et, c) || "text"](o, e);
              return (
                !i && m && m(),
                await new Promise((t, n) => {
                  Re(t, n, {
                    data: v,
                    headers: Ce.from(o.headers),
                    status: o.status,
                    statusText: o.statusText,
                    config: e,
                    request: p,
                  });
                })
              );
            } catch (v) {
              if (
                (m && m(),
                v && "TypeError" === v.name && /fetch/i.test(v.message))
              )
                throw Object.assign(
                  new Y("Network Error", Y.ERR_NETWORK, e, p),
                  { cause: v.cause || v },
                );
              throw Y.from(v, v && v.code, e, p);
            }
          }),
        at = { http: null, xhr: $e, fetch: rt };
      V.forEach(at, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const ot = (e) => `- ${e}`,
        it = (e) => V.isFunction(e) || null === e || !1 === e,
        lt = (e) => {
          e = V.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const a = {};
          for (let o = 0; o < t; o++) {
            let t;
            if (
              ((n = e[o]),
              (r = n),
              !it(n) && ((r = at[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new Y(`Unknown adapter '${t}'`);
            if (r) break;
            a[t || "#" + o] = r;
          }
          if (!r) {
            const e = Object.entries(a).map((e) => {
              let [t, n] = e;
              return (
                `adapter ${t} ` +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(ot).join("\n")
                : " " + ot(e[0])
              : "as no adapter specified";
            throw new Y(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT",
            );
          }
          return r;
        };
      function st(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Pe(null, e);
      }
      function ct(e) {
        st(e),
          (e.headers = Ce.from(e.headers)),
          (e.data = Ne.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return lt(e.adapter || ye.adapter)(e).then(
          function (t) {
            return (
              st(e),
              (t.data = Ne.call(e, e.transformResponse, t)),
              (t.headers = Ce.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              Oe(t) ||
                (st(e),
                t &&
                  t.response &&
                  ((t.response.data = Ne.call(
                    e,
                    e.transformResponse,
                    t.response,
                  )),
                  (t.response.headers = Ce.from(t.response.headers)))),
              Promise.reject(t)
            );
          },
        );
      }
      const ut = "1.7.7",
        ft = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          ft[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      const dt = {};
      ft.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.7.7] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, a, o) => {
          if (!1 === e)
            throw new Y(
              r(a, " has been removed" + (t ? " in " + t : "")),
              Y.ERR_DEPRECATED,
            );
          return (
            t &&
              !dt[a] &&
              ((dt[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future",
                ),
              )),
            !e || e(n, a, o)
          );
        };
      };
      const pt = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const o = r[a],
                i = t[o];
              if (i) {
                const t = e[o],
                  n = void 0 === t || i(t, o, e);
                if (!0 !== n)
                  throw new Y(
                    "option " + o + " must be " + n,
                    Y.ERR_BAD_OPTION_VALUE,
                  );
              } else if (!0 !== n)
                throw new Y("Unknown option " + o, Y.ERR_BAD_OPTION);
            }
          },
          validators: ft,
        },
        ht = pt.validators;
      class mt {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new le(), response: new le() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (n) {
            if (n instanceof Error) {
              let e;
              Error.captureStackTrace
                ? Error.captureStackTrace((e = {}))
                : (e = new Error());
              const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                n.stack
                  ? t &&
                    !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                    (n.stack += "\n" + t)
                  : (n.stack = t);
              } catch (r) {}
            }
            throw n;
          }
        }
        _request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = Ue(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: a } = t;
          void 0 !== n &&
            pt.assertOptions(
              n,
              {
                silentJSONParsing: ht.transitional(ht.boolean),
                forcedJSONParsing: ht.transitional(ht.boolean),
                clarifyTimeoutError: ht.transitional(ht.boolean),
              },
              !1,
            ),
            null != r &&
              (V.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : pt.assertOptions(
                    r,
                    { encode: ht.function, serialize: ht.function },
                    !0,
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let o = a && V.merge(a.common, a[t.method]);
          a &&
            V.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              },
            ),
            (t.headers = Ce.concat(o, a));
          const i = [];
          let l = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const s = [];
          let c;
          this.interceptors.response.forEach(function (e) {
            s.push(e.fulfilled, e.rejected);
          });
          let u,
            f = 0;
          if (!l) {
            const e = [ct.bind(this), void 0];
            for (
              e.unshift.apply(e, i),
                e.push.apply(e, s),
                u = e.length,
                c = Promise.resolve(t);
              f < u;

            )
              c = c.then(e[f++], e[f++]);
            return c;
          }
          u = i.length;
          let d = t;
          for (f = 0; f < u; ) {
            const e = i[f++],
              t = i[f++];
            try {
              d = e(d);
            } catch (p) {
              t.call(this, p);
              break;
            }
          }
          try {
            c = ct.call(this, d);
          } catch (p) {
            return Promise.reject(p);
          }
          for (f = 0, u = s.length; f < u; ) c = c.then(s[f++], s[f++]);
          return c;
        }
        getUri(e) {
          return ie(
            ze((e = Ue(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer,
          );
        }
      }
      V.forEach(["delete", "get", "head", "options"], function (e) {
        mt.prototype[e] = function (t, n) {
          return this.request(
            Ue(n || {}, { method: e, url: t, data: (n || {}).data }),
          );
        };
      }),
        V.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Ue(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                }),
              );
            };
          }
          (mt.prototype[e] = t()), (mt.prototype[e + "Form"] = t(!0));
        });
      const gt = mt;
      class vt {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, a) {
              n.reason || ((n.reason = new Pe(e, r, a)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          const e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          const t = new vt(function (t) {
            e = t;
          });
          return { token: t, cancel: e };
        }
      }
      const yt = vt;
      const bt = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(bt).forEach((e) => {
        let [t, n] = e;
        bt[n] = t;
      });
      const wt = bt;
      const xt = (function e(t) {
        const n = new gt(t),
          r = o(gt.prototype.request, n);
        return (
          V.extend(r, gt.prototype, n, { allOwnKeys: !0 }),
          V.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Ue(t, n));
          }),
          r
        );
      })(ye);
      (xt.Axios = gt),
        (xt.CanceledError = Pe),
        (xt.CancelToken = yt),
        (xt.isCancel = Oe),
        (xt.VERSION = ut),
        (xt.toFormData = ee),
        (xt.AxiosError = Y),
        (xt.Cancel = xt.CanceledError),
        (xt.all = function (e) {
          return Promise.all(e);
        }),
        (xt.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (xt.isAxiosError = function (e) {
          return V.isObject(e) && !0 === e.isAxiosError;
        }),
        (xt.mergeConfig = Ue),
        (xt.AxiosHeaders = Ce),
        (xt.formToJSON = (e) => ge(V.isHTMLForm(e) ? new FormData(e) : e)),
        (xt.getAdapter = lt),
        (xt.HttpStatusCode = wt),
        (xt.default = xt);
      const kt = xt;
      function Et() {
        return (
          (Et = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Et.apply(this, arguments)
        );
      }
      var St;
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(St || (St = {}));
      const Ct = "popstate";
      function Nt(e) {
        return (
          void 0 === e && (e = {}),
          Lt(
            function (e, t) {
              let { pathname: n, search: r, hash: a } = e.location;
              return Rt(
                "",
                { pathname: n, search: r, hash: a },
                (t.state && t.state.usr) || null,
                (t.state && t.state.key) || "default",
              );
            },
            function (e, t) {
              return "string" === typeof t ? t : Tt(t);
            },
            null,
            e,
          )
        );
      }
      function Ot(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function jt(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function Pt(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function Rt(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          Et(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? _t(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function Tt(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function _t(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function Lt(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: o = !1 } = r,
          i = a.history,
          l = St.Pop,
          s = null,
          c = u();
        function u() {
          return (i.state || { idx: null }).idx;
        }
        function f() {
          l = St.Pop;
          let e = u(),
            t = null == e ? null : e - c;
          (c = e), s && s({ action: l, location: p.location, delta: t });
        }
        function d(e) {
          let t =
              "null" !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = "string" === typeof e ? e : Tt(e);
          return (
            (n = n.replace(/ $/, "%20")),
            Ot(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == c && ((c = 0), i.replaceState(Et({}, i.state, { idx: c }), ""));
        let p = {
          get action() {
            return l;
          },
          get location() {
            return e(a, i);
          },
          listen(e) {
            if (s)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(Ct, f),
              (s = e),
              () => {
                a.removeEventListener(Ct, f), (s = null);
              }
            );
          },
          createHref: (e) => t(a, e),
          createURL: d,
          encodeLocation(e) {
            let t = d(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            l = St.Push;
            let r = Rt(p.location, e, t);
            n && n(r, e), (c = u() + 1);
            let f = Pt(r, c),
              d = p.createHref(r);
            try {
              i.pushState(f, "", d);
            } catch (h) {
              if (h instanceof DOMException && "DataCloneError" === h.name)
                throw h;
              a.location.assign(d);
            }
            o && s && s({ action: l, location: p.location, delta: 1 });
          },
          replace: function (e, t) {
            l = St.Replace;
            let r = Rt(p.location, e, t);
            n && n(r, e), (c = u());
            let a = Pt(r, c),
              f = p.createHref(r);
            i.replaceState(a, "", f),
              o && s && s({ action: l, location: p.location, delta: 0 });
          },
          go: (e) => i.go(e),
        };
        return p;
      }
      var Dt;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(Dt || (Dt = {}));
      const At = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children",
      ]);
      function Mt(e, t, n, r) {
        return (
          void 0 === n && (n = []),
          void 0 === r && (r = {}),
          e.map((e, a) => {
            let o = [...n, String(a)],
              i = "string" === typeof e.id ? e.id : o.join("-");
            if (
              (Ot(
                !0 !== e.index || !e.children,
                "Cannot specify children on an index route",
              ),
              Ot(
                !r[i],
                'Found a route id collision on id "' +
                  i +
                  "\".  Route id's must be globally unique within Data Router usages",
              ),
              (function (e) {
                return !0 === e.index;
              })(e))
            ) {
              let n = Et({}, e, t(e), { id: i });
              return (r[i] = n), n;
            }
            {
              let n = Et({}, e, t(e), { id: i, children: void 0 });
              return (
                (r[i] = n),
                e.children && (n.children = Mt(e.children, t, o, r)),
                n
              );
            }
          })
        );
      }
      function Ft(e, t, n) {
        return void 0 === n && (n = "/"), zt(e, t, n, !1);
      }
      function zt(e, t, n, r) {
        let a = Gt(("string" === typeof t ? _t(t) : t).pathname || "/", n);
        if (null == a) return null;
        let o = It(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          );
        })(o);
        let i = null;
        for (let l = 0; null == i && l < o.length; ++l) {
          let e = Jt(a);
          i = Yt(o[l], e, r);
        }
        return i;
      }
      function It(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (Ot(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = rn([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (Ot(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            It(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: Qt(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of Ut(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function Ut(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = Ut(r.join("/")),
          l = [];
        return (
          l.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && l.push(...i),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const Bt = /^:[\w-]+$/,
        $t = 3,
        Ht = 2,
        Wt = 1,
        Vt = 10,
        qt = -2,
        Kt = (e) => "*" === e;
      function Qt(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(Kt) && (r += qt),
          t && (r += Ht),
          n
            .filter((e) => !Kt(e))
            .reduce((e, t) => e + (Bt.test(t) ? $t : "" === t ? Wt : Vt), r)
        );
      }
      function Yt(e, t, n) {
        void 0 === n && (n = !1);
        let { routesMeta: r } = e,
          a = {},
          o = "/",
          i = [];
        for (let l = 0; l < r.length; ++l) {
          let e = r[l],
            s = l === r.length - 1,
            c = "/" === o ? t : t.slice(o.length) || "/",
            u = Xt(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
              c,
            ),
            f = e.route;
          if (
            (!u &&
              s &&
              n &&
              !r[r.length - 1].route.index &&
              (u = Xt(
                {
                  path: e.relativePath,
                  caseSensitive: e.caseSensitive,
                  end: !1,
                },
                c,
              )),
            !u)
          )
            return null;
          Object.assign(a, u.params),
            i.push({
              params: a,
              pathname: rn([o, u.pathname]),
              pathnameBase: an(rn([o, u.pathnameBase])),
              route: f,
            }),
            "/" !== u.pathnameBase && (o = rn([o, u.pathnameBase]));
        }
        return i;
      }
      function Xt(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            jt(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    ),
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
                ? (a += "\\/*$")
                : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = l[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (
              (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function Jt(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            jt(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ").",
            ),
            e
          );
        }
      }
      function Gt(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function Zt(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function en(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        );
      }
      function tn(e, t) {
        let n = en(e);
        return t
          ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function nn(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = _t(e))
            : ((a = Et({}, e)),
              Ot(
                !a.pathname || !a.pathname.includes("?"),
                Zt("?", "pathname", "search", a),
              ),
              Ot(
                !a.pathname || !a.pathname.includes("#"),
                Zt("#", "pathname", "hash", a),
              ),
              Ot(
                !a.search || !a.search.includes("#"),
                Zt("#", "search", "hash", a),
              ));
        let o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (null == l) o = n;
        else {
          let e = t.length - 1;
          if (!r && l.startsWith("..")) {
            let t = l.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let s = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? _t(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: on(r), hash: ln(a) };
          })(a, o),
          c = l && "/" !== l && l.endsWith("/"),
          u = (i || "." === l) && n.endsWith("/");
        return s.pathname.endsWith("/") || (!c && !u) || (s.pathname += "/"), s;
      }
      const rn = (e) => e.join("/").replace(/\/\/+/g, "/"),
        an = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        on = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        ln = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      class sn {
        constructor(e, t, n, r) {
          void 0 === r && (r = !1),
            (this.status = e),
            (this.statusText = t || ""),
            (this.internal = r),
            n instanceof Error
              ? ((this.data = n.toString()), (this.error = n))
              : (this.data = n);
        }
      }
      function cn(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const un = ["post", "put", "patch", "delete"],
        fn = new Set(un),
        dn = ["get", ...un],
        pn = new Set(dn),
        hn = new Set([301, 302, 303, 307, 308]),
        mn = new Set([307, 308]),
        gn = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        vn = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        yn = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0,
        },
        bn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        wn = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }),
        xn = "remix-router-transitions";
      function kn(e) {
        const t = e.window
            ? e.window
            : "undefined" !== typeof window
              ? window
              : void 0,
          n =
            "undefined" !== typeof t &&
            "undefined" !== typeof t.document &&
            "undefined" !== typeof t.document.createElement,
          r = !n;
        let a;
        if (
          (Ot(
            e.routes.length > 0,
            "You must provide a non-empty routes array to createRouter",
          ),
          e.mapRouteProperties)
        )
          a = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let t = e.detectErrorBoundary;
          a = (e) => ({ hasErrorBoundary: t(e) });
        } else a = wn;
        let o,
          i,
          l,
          s = {},
          c = Mt(e.routes, a, void 0, s),
          u = e.basename || "/",
          f = e.dataStrategy || _n,
          d = e.patchRoutesOnNavigation,
          p = Et(
            {
              v7_fetcherPersist: !1,
              v7_normalizeFormMethod: !1,
              v7_partialHydration: !1,
              v7_prependBasename: !1,
              v7_relativeSplatPath: !1,
              v7_skipActionErrorRevalidation: !1,
            },
            e.future,
          ),
          h = null,
          m = new Set(),
          g = null,
          v = null,
          y = null,
          b = null != e.hydrationData,
          w = Ft(c, e.history.location, u),
          x = null;
        if (null == w && !d) {
          let t = qn(404, { pathname: e.history.location.pathname }),
            { matches: n, route: r } = Vn(c);
          (w = n), (x = { [r.id]: t });
        }
        if (w && !e.hydrationData) {
          pe(w, c, e.history.location.pathname).active && (w = null);
        }
        if (w)
          if (w.some((e) => e.route.lazy)) i = !1;
          else if (w.some((e) => e.route.loader))
            if (p.v7_partialHydration) {
              let t = e.hydrationData ? e.hydrationData.loaderData : null,
                n = e.hydrationData ? e.hydrationData.errors : null;
              if (n) {
                let e = w.findIndex((e) => void 0 !== n[e.route.id]);
                i = w.slice(0, e + 1).every((e) => !On(e.route, t, n));
              } else i = w.every((e) => !On(e.route, t, n));
            } else i = null != e.hydrationData;
          else i = !0;
        else if (((i = !1), (w = []), p.v7_partialHydration)) {
          let t = pe(null, c, e.history.location.pathname);
          t.active && t.matches && (w = t.matches);
        }
        let k,
          E,
          S = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: w,
            initialized: i,
            navigation: gn,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || x,
            fetchers: new Map(),
            blockers: new Map(),
          },
          C = St.Pop,
          N = !1,
          O = !1,
          j = new Map(),
          P = null,
          R = !1,
          T = !1,
          _ = [],
          L = new Set(),
          D = new Map(),
          A = 0,
          M = -1,
          F = new Map(),
          z = new Set(),
          I = new Map(),
          U = new Map(),
          B = new Set(),
          $ = new Map(),
          H = new Map();
        function W(e, t) {
          void 0 === t && (t = {}), (S = Et({}, S, e));
          let n = [],
            r = [];
          p.v7_fetcherPersist &&
            S.fetchers.forEach((e, t) => {
              "idle" === e.state && (B.has(t) ? r.push(t) : n.push(t));
            }),
            [...m].forEach((e) =>
              e(S, {
                deletedFetchers: r,
                viewTransitionOpts: t.viewTransitionOpts,
                flushSync: !0 === t.flushSync,
              }),
            ),
            p.v7_fetcherPersist &&
              (n.forEach((e) => S.fetchers.delete(e)), r.forEach((e) => te(e)));
        }
        function V(t, n, r) {
          var a, i;
          let l,
            { flushSync: s } = void 0 === r ? {} : r,
            u =
              null != S.actionData &&
              null != S.navigation.formMethod &&
              nr(S.navigation.formMethod) &&
              "loading" === S.navigation.state &&
              !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
          l = n.actionData
            ? Object.keys(n.actionData).length > 0
              ? n.actionData
              : null
            : u
              ? S.actionData
              : null;
          let f = n.loaderData
              ? $n(S.loaderData, n.loaderData, n.matches || [], n.errors)
              : S.loaderData,
            d = S.blockers;
          d.size > 0 && ((d = new Map(d)), d.forEach((e, t) => d.set(t, yn)));
          let p,
            h =
              !0 === N ||
              (null != S.navigation.formMethod &&
                nr(S.navigation.formMethod) &&
                !0 !== (null == (i = t.state) ? void 0 : i._isRedirect));
          if (
            (o && ((c = o), (o = void 0)),
            R ||
              C === St.Pop ||
              (C === St.Push
                ? e.history.push(t, t.state)
                : C === St.Replace && e.history.replace(t, t.state)),
            C === St.Pop)
          ) {
            let e = j.get(S.location.pathname);
            e && e.has(t.pathname)
              ? (p = { currentLocation: S.location, nextLocation: t })
              : j.has(t.pathname) &&
                (p = { currentLocation: t, nextLocation: S.location });
          } else if (O) {
            let e = j.get(S.location.pathname);
            e
              ? e.add(t.pathname)
              : ((e = new Set([t.pathname])), j.set(S.location.pathname, e)),
              (p = { currentLocation: S.location, nextLocation: t });
          }
          W(
            Et({}, n, {
              actionData: l,
              loaderData: f,
              historyAction: C,
              location: t,
              initialized: !0,
              navigation: gn,
              revalidation: "idle",
              restoreScrollPosition: de(t, n.matches || S.matches),
              preventScrollReset: h,
              blockers: d,
            }),
            { viewTransitionOpts: p, flushSync: !0 === s },
          ),
            (C = St.Pop),
            (N = !1),
            (O = !1),
            (R = !1),
            (T = !1),
            (_ = []);
        }
        async function q(t, n, r) {
          k && k.abort(),
            (k = null),
            (C = t),
            (R = !0 === (r && r.startUninterruptedRevalidation)),
            (function (e, t) {
              if (g && y) {
                let n = fe(e, t);
                g[n] = y();
              }
            })(S.location, S.matches),
            (N = !0 === (r && r.preventScrollReset)),
            (O = !0 === (r && r.enableViewTransition));
          let a = o || c,
            i = r && r.overrideNavigation,
            l = Ft(a, n, u),
            s = !0 === (r && r.flushSync),
            f = pe(l, a, n.pathname);
          if ((f.active && f.matches && (l = f.matches), !l)) {
            let { error: e, notFoundMatches: t, route: r } = ce(n.pathname);
            return void V(
              n,
              { matches: t, loaderData: {}, errors: { [r.id]: e } },
              { flushSync: s },
            );
          }
          if (
            S.initialized &&
            !T &&
            (function (e, t) {
              if (e.pathname !== t.pathname || e.search !== t.search) return !1;
              if ("" === e.hash) return "" !== t.hash;
              if (e.hash === t.hash) return !0;
              if ("" !== t.hash) return !0;
              return !1;
            })(S.location, n) &&
            !(r && r.submission && nr(r.submission.formMethod))
          )
            return void V(n, { matches: l }, { flushSync: s });
          k = new AbortController();
          let d,
            h = Fn(e.history, n, k.signal, r && r.submission);
          if (r && r.pendingError)
            d = [Wn(l).route.id, { type: Dt.error, error: r.pendingError }];
          else if (r && r.submission && nr(r.submission.formMethod)) {
            let t = await (async function (e, t, n, r, a, o) {
              void 0 === o && (o = {});
              J();
              let i,
                l = (function (e, t) {
                  let n = {
                    state: "submitting",
                    location: e,
                    formMethod: t.formMethod,
                    formAction: t.formAction,
                    formEncType: t.formEncType,
                    formData: t.formData,
                    json: t.json,
                    text: t.text,
                  };
                  return n;
                })(t, n);
              if (
                (W({ navigation: l }, { flushSync: !0 === o.flushSync }), a)
              ) {
                let n = await he(r, t.pathname, e.signal);
                if ("aborted" === n.type) return { shortCircuited: !0 };
                if ("error" === n.type) {
                  let e = Wn(n.partialMatches).route.id;
                  return {
                    matches: n.partialMatches,
                    pendingActionResult: [
                      e,
                      { type: Dt.error, error: n.error },
                    ],
                  };
                }
                if (!n.matches) {
                  let {
                    notFoundMatches: e,
                    error: n,
                    route: r,
                  } = ce(t.pathname);
                  return {
                    matches: e,
                    pendingActionResult: [r.id, { type: Dt.error, error: n }],
                  };
                }
                r = n.matches;
              }
              let s = lr(r, t);
              if (s.route.action || s.route.lazy) {
                if (
                  ((i = (await Y("action", S, e, [s], r, null))[s.route.id]),
                  e.signal.aborted)
                )
                  return { shortCircuited: !0 };
              } else
                i = {
                  type: Dt.error,
                  error: qn(405, {
                    method: e.method,
                    pathname: t.pathname,
                    routeId: s.route.id,
                  }),
                };
              if (Gn(i)) {
                let t;
                if (o && null != o.replace) t = o.replace;
                else {
                  t =
                    Mn(
                      i.response.headers.get("Location"),
                      new URL(e.url),
                      u,
                    ) ===
                    S.location.pathname + S.location.search;
                }
                return (
                  await Q(e, i, !0, { submission: n, replace: t }),
                  { shortCircuited: !0 }
                );
              }
              if (Xn(i)) throw qn(400, { type: "defer-action" });
              if (Jn(i)) {
                let e = Wn(r, s.route.id);
                return (
                  !0 !== (o && o.replace) && (C = St.Push),
                  { matches: r, pendingActionResult: [e.route.id, i] }
                );
              }
              return { matches: r, pendingActionResult: [s.route.id, i] };
            })(h, n, r.submission, l, f.active, {
              replace: r.replace,
              flushSync: s,
            });
            if (t.shortCircuited) return;
            if (t.pendingActionResult) {
              let [e, r] = t.pendingActionResult;
              if (Jn(r) && cn(r.error) && 404 === r.error.status)
                return (
                  (k = null),
                  void V(n, {
                    matches: t.matches,
                    loaderData: {},
                    errors: { [e]: r.error },
                  })
                );
            }
            (l = t.matches || l),
              (d = t.pendingActionResult),
              (i = cr(n, r.submission)),
              (s = !1),
              (f.active = !1),
              (h = Fn(e.history, h.url, h.signal));
          }
          let {
            shortCircuited: m,
            matches: v,
            loaderData: b,
            errors: w,
          } = await (async function (t, n, r, a, i, l, s, f, d, h, m) {
            let g = i || cr(n, l),
              v = l || s || sr(g),
              y = !R && (!p.v7_partialHydration || !d);
            if (a) {
              if (y) {
                let e = K(m);
                W(
                  Et({ navigation: g }, void 0 !== e ? { actionData: e } : {}),
                  { flushSync: h },
                );
              }
              let e = await he(r, n.pathname, t.signal);
              if ("aborted" === e.type) return { shortCircuited: !0 };
              if ("error" === e.type) {
                let t = Wn(e.partialMatches).route.id;
                return {
                  matches: e.partialMatches,
                  loaderData: {},
                  errors: { [t]: e.error },
                };
              }
              if (!e.matches) {
                let { error: e, notFoundMatches: t, route: r } = ce(n.pathname);
                return { matches: t, loaderData: {}, errors: { [r.id]: e } };
              }
              r = e.matches;
            }
            let b = o || c,
              [w, x] = Nn(
                e.history,
                S,
                r,
                v,
                n,
                p.v7_partialHydration && !0 === d,
                p.v7_skipActionErrorRevalidation,
                T,
                _,
                L,
                B,
                I,
                z,
                b,
                u,
                m,
              );
            if (
              (ue(
                (e) =>
                  !(r && r.some((t) => t.route.id === e)) ||
                  (w && w.some((t) => t.route.id === e)),
              ),
              (M = ++A),
              0 === w.length && 0 === x.length)
            ) {
              let e = ae();
              return (
                V(
                  n,
                  Et(
                    {
                      matches: r,
                      loaderData: {},
                      errors: m && Jn(m[1]) ? { [m[0]]: m[1].error } : null,
                    },
                    Hn(m),
                    e ? { fetchers: new Map(S.fetchers) } : {},
                  ),
                  { flushSync: h },
                ),
                { shortCircuited: !0 }
              );
            }
            if (y) {
              let e = {};
              if (!a) {
                e.navigation = g;
                let t = K(m);
                void 0 !== t && (e.actionData = t);
              }
              x.length > 0 &&
                (e.fetchers = (function (e) {
                  return (
                    e.forEach((e) => {
                      let t = S.fetchers.get(e.key),
                        n = ur(void 0, t ? t.data : void 0);
                      S.fetchers.set(e.key, n);
                    }),
                    new Map(S.fetchers)
                  );
                })(x)),
                W(e, { flushSync: h });
            }
            x.forEach((e) => {
              ne(e.key), e.controller && D.set(e.key, e.controller);
            });
            let E = () => x.forEach((e) => ne(e.key));
            k && k.signal.addEventListener("abort", E);
            let { loaderResults: C, fetcherResults: N } = await X(
              S,
              r,
              w,
              x,
              t,
            );
            if (t.signal.aborted) return { shortCircuited: !0 };
            k && k.signal.removeEventListener("abort", E);
            x.forEach((e) => D.delete(e.key));
            let O = Kn(C);
            if (O)
              return (
                await Q(t, O.result, !0, { replace: f }), { shortCircuited: !0 }
              );
            if (((O = Kn(N)), O))
              return (
                z.add(O.key),
                await Q(t, O.result, !0, { replace: f }),
                { shortCircuited: !0 }
              );
            let { loaderData: j, errors: P } = Bn(S, r, C, m, x, N, $);
            $.forEach((e, t) => {
              e.subscribe((n) => {
                (n || e.done) && $.delete(t);
              });
            }),
              p.v7_partialHydration &&
                d &&
                S.errors &&
                (P = Et({}, S.errors, P));
            let F = ae(),
              U = oe(M),
              H = F || U || x.length > 0;
            return Et(
              { matches: r, loaderData: j, errors: P },
              H ? { fetchers: new Map(S.fetchers) } : {},
            );
          })(
            h,
            n,
            l,
            f.active,
            i,
            r && r.submission,
            r && r.fetcherSubmission,
            r && r.replace,
            r && !0 === r.initialHydration,
            s,
            d,
          );
          m ||
            ((k = null),
            V(n, Et({ matches: v || l }, Hn(d), { loaderData: b, errors: w })));
        }
        function K(e) {
          return e && !Jn(e[1])
            ? { [e[0]]: e[1].data }
            : S.actionData
              ? 0 === Object.keys(S.actionData).length
                ? null
                : S.actionData
              : void 0;
        }
        async function Q(r, a, o, i) {
          let {
            submission: l,
            fetcherSubmission: s,
            preventScrollReset: c,
            replace: f,
          } = void 0 === i ? {} : i;
          a.response.headers.has("X-Remix-Revalidate") && (T = !0);
          let d = a.response.headers.get("Location");
          Ot(d, "Expected a Location header on the redirect Response"),
            (d = Mn(d, new URL(r.url), u));
          let p = Rt(S.location, d, { _isRedirect: !0 });
          if (n) {
            let n = !1;
            if (a.response.headers.has("X-Remix-Reload-Document")) n = !0;
            else if (bn.test(d)) {
              const r = e.history.createURL(d);
              n = r.origin !== t.location.origin || null == Gt(r.pathname, u);
            }
            if (n)
              return void (f ? t.location.replace(d) : t.location.assign(d));
          }
          k = null;
          let h =
              !0 === f || a.response.headers.has("X-Remix-Replace")
                ? St.Replace
                : St.Push,
            { formMethod: m, formAction: g, formEncType: v } = S.navigation;
          !l && !s && m && g && v && (l = sr(S.navigation));
          let y = l || s;
          if (mn.has(a.response.status) && y && nr(y.formMethod))
            await q(h, p, {
              submission: Et({}, y, { formAction: d }),
              preventScrollReset: c || N,
              enableViewTransition: o ? O : void 0,
            });
          else {
            let e = cr(p, l);
            await q(h, p, {
              overrideNavigation: e,
              fetcherSubmission: s,
              preventScrollReset: c || N,
              enableViewTransition: o ? O : void 0,
            });
          }
        }
        async function Y(e, t, n, r, o, i) {
          let l,
            c = {};
          try {
            l = await Ln(f, e, t, n, r, o, i, s, a);
          } catch (d) {
            return (
              r.forEach((e) => {
                c[e.route.id] = { type: Dt.error, error: d };
              }),
              c
            );
          }
          for (let [a, s] of Object.entries(l))
            if (Yn(s)) {
              let e = s.result;
              c[a] = {
                type: Dt.redirect,
                response: An(e, n, a, o, u, p.v7_relativeSplatPath),
              };
            } else c[a] = await Dn(s);
          return c;
        }
        async function X(t, n, r, a, o) {
          let i = t.matches,
            l = Y("loader", t, o, r, n, null),
            s = Promise.all(
              a.map(async (n) => {
                if (n.matches && n.match && n.controller) {
                  let r = (
                    await Y(
                      "loader",
                      t,
                      Fn(e.history, n.path, n.controller.signal),
                      [n.match],
                      n.matches,
                      n.key,
                    )
                  )[n.match.route.id];
                  return { [n.key]: r };
                }
                return Promise.resolve({
                  [n.key]: {
                    type: Dt.error,
                    error: qn(404, { pathname: n.path }),
                  },
                });
              }),
            ),
            c = await l,
            u = (await s).reduce((e, t) => Object.assign(e, t), {});
          return (
            await Promise.all([
              rr(n, c, o.signal, i, t.loaderData),
              ar(n, u, a),
            ]),
            { loaderResults: c, fetcherResults: u }
          );
        }
        function J() {
          (T = !0),
            _.push(...ue()),
            I.forEach((e, t) => {
              D.has(t) && L.add(t), ne(t);
            });
        }
        function G(e, t, n) {
          void 0 === n && (n = {}),
            S.fetchers.set(e, t),
            W(
              { fetchers: new Map(S.fetchers) },
              { flushSync: !0 === (n && n.flushSync) },
            );
        }
        function Z(e, t, n, r) {
          void 0 === r && (r = {});
          let a = Wn(S.matches, t);
          te(e),
            W(
              { errors: { [a.route.id]: n }, fetchers: new Map(S.fetchers) },
              { flushSync: !0 === (r && r.flushSync) },
            );
        }
        function ee(e) {
          return (
            p.v7_fetcherPersist &&
              (U.set(e, (U.get(e) || 0) + 1), B.has(e) && B.delete(e)),
            S.fetchers.get(e) || vn
          );
        }
        function te(e) {
          let t = S.fetchers.get(e);
          !D.has(e) || (t && "loading" === t.state && F.has(e)) || ne(e),
            I.delete(e),
            F.delete(e),
            z.delete(e),
            B.delete(e),
            L.delete(e),
            S.fetchers.delete(e);
        }
        function ne(e) {
          let t = D.get(e);
          t && (t.abort(), D.delete(e));
        }
        function re(e) {
          for (let t of e) {
            let e = fr(ee(t).data);
            S.fetchers.set(t, e);
          }
        }
        function ae() {
          let e = [],
            t = !1;
          for (let n of z) {
            let r = S.fetchers.get(n);
            Ot(r, "Expected fetcher: " + n),
              "loading" === r.state && (z.delete(n), e.push(n), (t = !0));
          }
          return re(e), t;
        }
        function oe(e) {
          let t = [];
          for (let [n, r] of F)
            if (r < e) {
              let e = S.fetchers.get(n);
              Ot(e, "Expected fetcher: " + n),
                "loading" === e.state && (ne(n), F.delete(n), t.push(n));
            }
          return re(t), t.length > 0;
        }
        function ie(e) {
          S.blockers.delete(e), H.delete(e);
        }
        function le(e, t) {
          let n = S.blockers.get(e) || yn;
          Ot(
            ("unblocked" === n.state && "blocked" === t.state) ||
              ("blocked" === n.state && "blocked" === t.state) ||
              ("blocked" === n.state && "proceeding" === t.state) ||
              ("blocked" === n.state && "unblocked" === t.state) ||
              ("proceeding" === n.state && "unblocked" === t.state),
            "Invalid blocker state transition: " + n.state + " -> " + t.state,
          );
          let r = new Map(S.blockers);
          r.set(e, t), W({ blockers: r });
        }
        function se(e) {
          let { currentLocation: t, nextLocation: n, historyAction: r } = e;
          if (0 === H.size) return;
          H.size > 1 && jt(!1, "A router only supports one blocker at a time");
          let a = Array.from(H.entries()),
            [o, i] = a[a.length - 1],
            l = S.blockers.get(o);
          return l && "proceeding" === l.state
            ? void 0
            : i({ currentLocation: t, nextLocation: n, historyAction: r })
              ? o
              : void 0;
        }
        function ce(e) {
          let t = qn(404, { pathname: e }),
            n = o || c,
            { matches: r, route: a } = Vn(n);
          return ue(), { notFoundMatches: r, route: a, error: t };
        }
        function ue(e) {
          let t = [];
          return (
            $.forEach((n, r) => {
              (e && !e(r)) || (n.cancel(), t.push(r), $.delete(r));
            }),
            t
          );
        }
        function fe(e, t) {
          if (v) {
            return (
              v(
                e,
                t.map((e) =>
                  (function (e, t) {
                    let { route: n, pathname: r, params: a } = e;
                    return {
                      id: n.id,
                      pathname: r,
                      params: a,
                      data: t[n.id],
                      handle: n.handle,
                    };
                  })(e, S.loaderData),
                ),
              ) || e.key
            );
          }
          return e.key;
        }
        function de(e, t) {
          if (g) {
            let n = fe(e, t),
              r = g[n];
            if ("number" === typeof r) return r;
          }
          return null;
        }
        function pe(e, t, n) {
          if (d) {
            if (!e) {
              return { active: !0, matches: zt(t, n, u, !0) || [] };
            }
            if (Object.keys(e[0].params).length > 0) {
              return { active: !0, matches: zt(t, n, u, !0) };
            }
          }
          return { active: !1, matches: null };
        }
        async function he(e, t, n) {
          if (!d) return { type: "success", matches: e };
          let r = e;
          for (;;) {
            let e = null == o,
              l = o || c,
              f = s;
            try {
              await d({
                path: t,
                matches: r,
                patch: (e, t) => {
                  n.aborted || Rn(e, t, l, f, a);
                },
              });
            } catch (i) {
              return { type: "error", error: i, partialMatches: r };
            } finally {
              e && !n.aborted && (c = [...c]);
            }
            if (n.aborted) return { type: "aborted" };
            let p = Ft(l, t, u);
            if (p) return { type: "success", matches: p };
            let h = zt(l, t, u, !0);
            if (
              !h ||
              (r.length === h.length &&
                r.every((e, t) => e.route.id === h[t].route.id))
            )
              return { type: "success", matches: null };
            r = h;
          }
        }
        return (
          (l = {
            get basename() {
              return u;
            },
            get future() {
              return p;
            },
            get state() {
              return S;
            },
            get routes() {
              return c;
            },
            get window() {
              return t;
            },
            initialize: function () {
              if (
                ((h = e.history.listen((t) => {
                  let { action: n, location: r, delta: a } = t;
                  if (E) return E(), void (E = void 0);
                  jt(
                    0 === H.size || null != a,
                    "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
                  );
                  let o = se({
                    currentLocation: S.location,
                    nextLocation: r,
                    historyAction: n,
                  });
                  if (o && null != a) {
                    let t = new Promise((e) => {
                      E = e;
                    });
                    return (
                      e.history.go(-1 * a),
                      void le(o, {
                        state: "blocked",
                        location: r,
                        proceed() {
                          le(o, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: r,
                          }),
                            t.then(() => e.history.go(a));
                        },
                        reset() {
                          let e = new Map(S.blockers);
                          e.set(o, yn), W({ blockers: e });
                        },
                      })
                    );
                  }
                  return q(n, r);
                })),
                n)
              ) {
                !(function (e, t) {
                  try {
                    let n = e.sessionStorage.getItem(xn);
                    if (n) {
                      let e = JSON.parse(n);
                      for (let [n, r] of Object.entries(e || {}))
                        r && Array.isArray(r) && t.set(n, new Set(r || []));
                    }
                  } catch (n) {}
                })(t, j);
                let e = () =>
                  (function (e, t) {
                    if (t.size > 0) {
                      let r = {};
                      for (let [e, n] of t) r[e] = [...n];
                      try {
                        e.sessionStorage.setItem(xn, JSON.stringify(r));
                      } catch (n) {
                        jt(
                          !1,
                          "Failed to save applied view transitions in sessionStorage (" +
                            n +
                            ").",
                        );
                      }
                    }
                  })(t, j);
                t.addEventListener("pagehide", e),
                  (P = () => t.removeEventListener("pagehide", e));
              }
              return (
                S.initialized ||
                  q(St.Pop, S.location, { initialHydration: !0 }),
                l
              );
            },
            subscribe: function (e) {
              return m.add(e), () => m.delete(e);
            },
            enableScrollRestoration: function (e, t, n) {
              if (
                ((g = e), (y = t), (v = n || null), !b && S.navigation === gn)
              ) {
                b = !0;
                let e = de(S.location, S.matches);
                null != e && W({ restoreScrollPosition: e });
              }
              return () => {
                (g = null), (y = null), (v = null);
              };
            },
            navigate: async function t(n, r) {
              if ("number" === typeof n) return void e.history.go(n);
              let a = En(
                  S.location,
                  S.matches,
                  u,
                  p.v7_prependBasename,
                  n,
                  p.v7_relativeSplatPath,
                  null == r ? void 0 : r.fromRouteId,
                  null == r ? void 0 : r.relative,
                ),
                {
                  path: o,
                  submission: i,
                  error: l,
                } = Sn(p.v7_normalizeFormMethod, !1, a, r),
                s = S.location,
                c = Rt(S.location, o, r && r.state);
              c = Et({}, c, e.history.encodeLocation(c));
              let f = r && null != r.replace ? r.replace : void 0,
                d = St.Push;
              !0 === f
                ? (d = St.Replace)
                : !1 === f ||
                  (null != i &&
                    nr(i.formMethod) &&
                    i.formAction === S.location.pathname + S.location.search &&
                    (d = St.Replace));
              let h =
                  r && "preventScrollReset" in r
                    ? !0 === r.preventScrollReset
                    : void 0,
                m = !0 === (r && r.flushSync),
                g = se({
                  currentLocation: s,
                  nextLocation: c,
                  historyAction: d,
                });
              if (!g)
                return await q(d, c, {
                  submission: i,
                  pendingError: l,
                  preventScrollReset: h,
                  replace: r && r.replace,
                  enableViewTransition: r && r.viewTransition,
                  flushSync: m,
                });
              le(g, {
                state: "blocked",
                location: c,
                proceed() {
                  le(g, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: c,
                  }),
                    t(n, r);
                },
                reset() {
                  let e = new Map(S.blockers);
                  e.set(g, yn), W({ blockers: e });
                },
              });
            },
            fetch: function (t, n, a, i) {
              if (r)
                throw new Error(
                  "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
                );
              ne(t);
              let l = !0 === (i && i.flushSync),
                s = o || c,
                f = En(
                  S.location,
                  S.matches,
                  u,
                  p.v7_prependBasename,
                  a,
                  p.v7_relativeSplatPath,
                  n,
                  null == i ? void 0 : i.relative,
                ),
                d = Ft(s, f, u),
                h = pe(d, s, f);
              if ((h.active && h.matches && (d = h.matches), !d))
                return void Z(t, n, qn(404, { pathname: f }), { flushSync: l });
              let {
                path: m,
                submission: g,
                error: v,
              } = Sn(p.v7_normalizeFormMethod, !0, f, i);
              if (v) return void Z(t, n, v, { flushSync: l });
              let y = lr(d, m),
                b = !0 === (i && i.preventScrollReset);
              g && nr(g.formMethod)
                ? (async function (t, n, r, a, i, l, s, f, d) {
                    function h(e) {
                      if (!e.route.action && !e.route.lazy) {
                        let e = qn(405, {
                          method: d.formMethod,
                          pathname: r,
                          routeId: n,
                        });
                        return Z(t, n, e, { flushSync: s }), !0;
                      }
                      return !1;
                    }
                    if ((J(), I.delete(t), !l && h(a))) return;
                    let m = S.fetchers.get(t);
                    G(
                      t,
                      (function (e, t) {
                        let n = {
                          state: "submitting",
                          formMethod: e.formMethod,
                          formAction: e.formAction,
                          formEncType: e.formEncType,
                          formData: e.formData,
                          json: e.json,
                          text: e.text,
                          data: t ? t.data : void 0,
                        };
                        return n;
                      })(d, m),
                      { flushSync: s },
                    );
                    let g = new AbortController(),
                      v = Fn(e.history, r, g.signal, d);
                    if (l) {
                      let e = await he(i, r, v.signal);
                      if ("aborted" === e.type) return;
                      if ("error" === e.type)
                        return void Z(t, n, e.error, { flushSync: s });
                      if (!e.matches)
                        return void Z(t, n, qn(404, { pathname: r }), {
                          flushSync: s,
                        });
                      if (h((a = lr((i = e.matches), r)))) return;
                    }
                    D.set(t, g);
                    let y = A,
                      b = await Y("action", S, v, [a], i, t),
                      w = b[a.route.id];
                    if (v.signal.aborted)
                      return void (D.get(t) === g && D.delete(t));
                    if (p.v7_fetcherPersist && B.has(t)) {
                      if (Gn(w) || Jn(w)) return void G(t, fr(void 0));
                    } else {
                      if (Gn(w))
                        return (
                          D.delete(t),
                          M > y
                            ? void G(t, fr(void 0))
                            : (z.add(t),
                              G(t, ur(d)),
                              Q(v, w, !1, {
                                fetcherSubmission: d,
                                preventScrollReset: f,
                              }))
                        );
                      if (Jn(w)) return void Z(t, n, w.error);
                    }
                    if (Xn(w)) throw qn(400, { type: "defer-action" });
                    let x = S.navigation.location || S.location,
                      E = Fn(e.history, x, g.signal),
                      N = o || c,
                      O =
                        "idle" !== S.navigation.state
                          ? Ft(N, S.navigation.location, u)
                          : S.matches;
                    Ot(O, "Didn't find any matches after fetcher action");
                    let j = ++A;
                    F.set(t, j);
                    let P = ur(d, w.data);
                    S.fetchers.set(t, P);
                    let [R, U] = Nn(
                      e.history,
                      S,
                      O,
                      d,
                      x,
                      !1,
                      p.v7_skipActionErrorRevalidation,
                      T,
                      _,
                      L,
                      B,
                      I,
                      z,
                      N,
                      u,
                      [a.route.id, w],
                    );
                    U.filter((e) => e.key !== t).forEach((e) => {
                      let t = e.key,
                        n = S.fetchers.get(t),
                        r = ur(void 0, n ? n.data : void 0);
                      S.fetchers.set(t, r),
                        ne(t),
                        e.controller && D.set(t, e.controller);
                    }),
                      W({ fetchers: new Map(S.fetchers) });
                    let H = () => U.forEach((e) => ne(e.key));
                    g.signal.addEventListener("abort", H);
                    let { loaderResults: q, fetcherResults: K } = await X(
                      S,
                      O,
                      R,
                      U,
                      E,
                    );
                    if (g.signal.aborted) return;
                    g.signal.removeEventListener("abort", H),
                      F.delete(t),
                      D.delete(t),
                      U.forEach((e) => D.delete(e.key));
                    let ee = Kn(q);
                    if (ee)
                      return Q(E, ee.result, !1, { preventScrollReset: f });
                    if (((ee = Kn(K)), ee))
                      return (
                        z.add(ee.key),
                        Q(E, ee.result, !1, { preventScrollReset: f })
                      );
                    let { loaderData: te, errors: re } = Bn(
                      S,
                      O,
                      q,
                      void 0,
                      U,
                      K,
                      $,
                    );
                    if (S.fetchers.has(t)) {
                      let e = fr(w.data);
                      S.fetchers.set(t, e);
                    }
                    oe(j),
                      "loading" === S.navigation.state && j > M
                        ? (Ot(C, "Expected pending action"),
                          k && k.abort(),
                          V(S.navigation.location, {
                            matches: O,
                            loaderData: te,
                            errors: re,
                            fetchers: new Map(S.fetchers),
                          }))
                        : (W({
                            errors: re,
                            loaderData: $n(S.loaderData, te, O, re),
                            fetchers: new Map(S.fetchers),
                          }),
                          (T = !1));
                  })(t, n, m, y, d, h.active, l, b, g)
                : (I.set(t, { routeId: n, path: m }),
                  (async function (t, n, r, a, o, i, l, s, c) {
                    let u = S.fetchers.get(t);
                    G(t, ur(c, u ? u.data : void 0), { flushSync: l });
                    let f = new AbortController(),
                      d = Fn(e.history, r, f.signal);
                    if (i) {
                      let e = await he(o, r, d.signal);
                      if ("aborted" === e.type) return;
                      if ("error" === e.type)
                        return void Z(t, n, e.error, { flushSync: l });
                      if (!e.matches)
                        return void Z(t, n, qn(404, { pathname: r }), {
                          flushSync: l,
                        });
                      a = lr((o = e.matches), r);
                    }
                    D.set(t, f);
                    let p = A,
                      h = await Y("loader", S, d, [a], o, t),
                      m = h[a.route.id];
                    Xn(m) && (m = (await or(m, d.signal, !0)) || m);
                    D.get(t) === f && D.delete(t);
                    if (d.signal.aborted) return;
                    if (B.has(t)) return void G(t, fr(void 0));
                    if (Gn(m))
                      return M > p
                        ? void G(t, fr(void 0))
                        : (z.add(t),
                          void (await Q(d, m, !1, { preventScrollReset: s })));
                    if (Jn(m)) return void Z(t, n, m.error);
                    Ot(!Xn(m), "Unhandled fetcher deferred data"),
                      G(t, fr(m.data));
                  })(t, n, m, y, d, h.active, l, b, g));
            },
            revalidate: function () {
              J(),
                W({ revalidation: "loading" }),
                "submitting" !== S.navigation.state &&
                  ("idle" !== S.navigation.state
                    ? q(C || S.historyAction, S.navigation.location, {
                        overrideNavigation: S.navigation,
                        enableViewTransition: !0 === O,
                      })
                    : q(S.historyAction, S.location, {
                        startUninterruptedRevalidation: !0,
                      }));
            },
            createHref: (t) => e.history.createHref(t),
            encodeLocation: (t) => e.history.encodeLocation(t),
            getFetcher: ee,
            deleteFetcher: function (e) {
              if (p.v7_fetcherPersist) {
                let t = (U.get(e) || 0) - 1;
                t <= 0 ? (U.delete(e), B.add(e)) : U.set(e, t);
              } else te(e);
              W({ fetchers: new Map(S.fetchers) });
            },
            dispose: function () {
              h && h(),
                P && P(),
                m.clear(),
                k && k.abort(),
                S.fetchers.forEach((e, t) => te(t)),
                S.blockers.forEach((e, t) => ie(t));
            },
            getBlocker: function (e, t) {
              let n = S.blockers.get(e) || yn;
              return H.get(e) !== t && H.set(e, t), n;
            },
            deleteBlocker: ie,
            patchRoutes: function (e, t) {
              let n = null == o;
              Rn(e, t, o || c, s, a), n && ((c = [...c]), W({}));
            },
            _internalFetchControllers: D,
            _internalActiveDeferreds: $,
            _internalSetRoutes: function (e) {
              (s = {}), (o = Mt(e, a, void 0, s));
            },
          }),
          l
        );
      }
      Symbol("deferred");
      function En(e, t, n, r, a, o, i, l) {
        let s, c;
        if (i) {
          s = [];
          for (let e of t)
            if ((s.push(e), e.route.id === i)) {
              c = e;
              break;
            }
        } else (s = t), (c = t[t.length - 1]);
        let u = nn(
          a || ".",
          tn(s, o),
          Gt(e.pathname, n) || e.pathname,
          "path" === l,
        );
        if (
          (null == a && ((u.search = e.search), (u.hash = e.hash)),
          (null == a || "" === a || "." === a) && c)
        ) {
          let e = ir(u.search);
          if (c.route.index && !e)
            u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
          else if (!c.route.index && e) {
            let e = new URLSearchParams(u.search),
              t = e.getAll("index");
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let n = e.toString();
            u.search = n ? "?" + n : "";
          }
        }
        return (
          r &&
            "/" !== n &&
            (u.pathname = "/" === u.pathname ? n : rn([n, u.pathname])),
          Tt(u)
        );
      }
      function Sn(e, t, n, r) {
        if (
          !r ||
          !(function (e) {
            return (
              null != e &&
              (("formData" in e && null != e.formData) ||
                ("body" in e && void 0 !== e.body))
            );
          })(r)
        )
          return { path: n };
        if (r.formMethod && !tr(r.formMethod))
          return { path: n, error: qn(405, { method: r.formMethod }) };
        let a,
          o,
          i = () => ({ path: n, error: qn(400, { type: "invalid-body" }) }),
          l = r.formMethod || "get",
          s = e ? l.toUpperCase() : l.toLowerCase(),
          c = Qn(n);
        if (void 0 !== r.body) {
          if ("text/plain" === r.formEncType) {
            if (!nr(s)) return i();
            let e =
              "string" === typeof r.body
                ? r.body
                : r.body instanceof FormData ||
                    r.body instanceof URLSearchParams
                  ? Array.from(r.body.entries()).reduce((e, t) => {
                      let [n, r] = t;
                      return "" + e + n + "=" + r + "\n";
                    }, "")
                  : String(r.body);
            return {
              path: n,
              submission: {
                formMethod: s,
                formAction: c,
                formEncType: r.formEncType,
                formData: void 0,
                json: void 0,
                text: e,
              },
            };
          }
          if ("application/json" === r.formEncType) {
            if (!nr(s)) return i();
            try {
              let e = "string" === typeof r.body ? JSON.parse(r.body) : r.body;
              return {
                path: n,
                submission: {
                  formMethod: s,
                  formAction: c,
                  formEncType: r.formEncType,
                  formData: void 0,
                  json: e,
                  text: void 0,
                },
              };
            } catch (d) {
              return i();
            }
          }
        }
        if (
          (Ot(
            "function" === typeof FormData,
            "FormData is not available in this environment",
          ),
          r.formData)
        )
          (a = zn(r.formData)), (o = r.formData);
        else if (r.body instanceof FormData) (a = zn(r.body)), (o = r.body);
        else if (r.body instanceof URLSearchParams) (a = r.body), (o = In(a));
        else if (null == r.body)
          (a = new URLSearchParams()), (o = new FormData());
        else
          try {
            (a = new URLSearchParams(r.body)), (o = In(a));
          } catch (d) {
            return i();
          }
        let u = {
          formMethod: s,
          formAction: c,
          formEncType:
            (r && r.formEncType) || "application/x-www-form-urlencoded",
          formData: o,
          json: void 0,
          text: void 0,
        };
        if (nr(u.formMethod)) return { path: n, submission: u };
        let f = _t(n);
        return (
          t && f.search && ir(f.search) && a.append("index", ""),
          (f.search = "?" + a),
          { path: Tt(f), submission: u }
        );
      }
      function Cn(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.findIndex((e) => e.route.id === t);
        return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
      }
      function Nn(e, t, n, r, a, o, i, l, s, c, u, f, d, p, h, m) {
        let g = m ? (Jn(m[1]) ? m[1].error : m[1].data) : void 0,
          v = e.createURL(t.location),
          y = e.createURL(a),
          b = n;
        o && t.errors
          ? (b = Cn(n, Object.keys(t.errors)[0], !0))
          : m && Jn(m[1]) && (b = Cn(n, m[0]));
        let w = m ? m[1].statusCode : void 0,
          x = i && w && w >= 400,
          k = b.filter((e, n) => {
            let { route: a } = e;
            if (a.lazy) return !0;
            if (null == a.loader) return !1;
            if (o) return On(a, t.loaderData, t.errors);
            if (
              (function (e, t, n) {
                let r = !t || n.route.id !== t.route.id,
                  a = void 0 === e[n.route.id];
                return r || a;
              })(t.loaderData, t.matches[n], e) ||
              s.some((t) => t === e.route.id)
            )
              return !0;
            let i = t.matches[n],
              c = e;
            return Pn(
              e,
              Et(
                {
                  currentUrl: v,
                  currentParams: i.params,
                  nextUrl: y,
                  nextParams: c.params,
                },
                r,
                {
                  actionResult: g,
                  actionStatus: w,
                  defaultShouldRevalidate:
                    !x &&
                    (l ||
                      v.pathname + v.search === y.pathname + y.search ||
                      v.search !== y.search ||
                      jn(i, c)),
                },
              ),
            );
          }),
          E = [];
        return (
          f.forEach((e, a) => {
            if (o || !n.some((t) => t.route.id === e.routeId) || u.has(a))
              return;
            let i = Ft(p, e.path, h);
            if (!i)
              return void E.push({
                key: a,
                routeId: e.routeId,
                path: e.path,
                matches: null,
                match: null,
                controller: null,
              });
            let s = t.fetchers.get(a),
              f = lr(i, e.path),
              m = !1;
            d.has(a)
              ? (m = !1)
              : c.has(a)
                ? (c.delete(a), (m = !0))
                : (m =
                    s && "idle" !== s.state && void 0 === s.data
                      ? l
                      : Pn(
                          f,
                          Et(
                            {
                              currentUrl: v,
                              currentParams:
                                t.matches[t.matches.length - 1].params,
                              nextUrl: y,
                              nextParams: n[n.length - 1].params,
                            },
                            r,
                            {
                              actionResult: g,
                              actionStatus: w,
                              defaultShouldRevalidate: !x && l,
                            },
                          ),
                        )),
              m &&
                E.push({
                  key: a,
                  routeId: e.routeId,
                  path: e.path,
                  matches: i,
                  match: f,
                  controller: new AbortController(),
                });
          }),
          [k, E]
        );
      }
      function On(e, t, n) {
        if (e.lazy) return !0;
        if (!e.loader) return !1;
        let r = null != t && void 0 !== t[e.id],
          a = null != n && void 0 !== n[e.id];
        return (
          !(!r && a) &&
          (("function" === typeof e.loader && !0 === e.loader.hydrate) ||
            (!r && !a))
        );
      }
      function jn(e, t) {
        let n = e.route.path;
        return (
          e.pathname !== t.pathname ||
          (null != n && n.endsWith("*") && e.params["*"] !== t.params["*"])
        );
      }
      function Pn(e, t) {
        if (e.route.shouldRevalidate) {
          let n = e.route.shouldRevalidate(t);
          if ("boolean" === typeof n) return n;
        }
        return t.defaultShouldRevalidate;
      }
      function Rn(e, t, n, r, a) {
        var o;
        let i;
        if (e) {
          let t = r[e];
          Ot(t, "No route found to patch children into: routeId = " + e),
            t.children || (t.children = []),
            (i = t.children);
        } else i = n;
        let l = Mt(
          t.filter((e) => !i.some((t) => Tn(e, t))),
          a,
          [
            e || "_",
            "patch",
            String((null == (o = i) ? void 0 : o.length) || "0"),
          ],
          r,
        );
        i.push(...l);
      }
      function Tn(e, t) {
        return (
          ("id" in e && "id" in t && e.id === t.id) ||
          (e.index === t.index &&
            e.path === t.path &&
            e.caseSensitive === t.caseSensitive &&
            (!(
              (e.children && 0 !== e.children.length) ||
              (t.children && 0 !== t.children.length)
            ) ||
              e.children.every((e, n) => {
                var r;
                return null == (r = t.children)
                  ? void 0
                  : r.some((t) => Tn(e, t));
              })))
        );
      }
      async function _n(e) {
        let { matches: t } = e,
          n = t.filter((e) => e.shouldLoad);
        return (await Promise.all(n.map((e) => e.resolve()))).reduce(
          (e, t, r) => Object.assign(e, { [n[r].route.id]: t }),
          {},
        );
      }
      async function Ln(e, t, n, r, a, o, i, l, s, c) {
        let u = o.map((e) =>
            e.route.lazy
              ? (async function (e, t, n) {
                  if (!e.lazy) return;
                  let r = await e.lazy();
                  if (!e.lazy) return;
                  let a = n[e.id];
                  Ot(a, "No route found in manifest");
                  let o = {};
                  for (let i in r) {
                    let e = void 0 !== a[i] && "hasErrorBoundary" !== i;
                    jt(
                      !e,
                      'Route "' +
                        a.id +
                        '" has a static property "' +
                        i +
                        '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                        i +
                        '" will be ignored.',
                    ),
                      e || At.has(i) || (o[i] = r[i]);
                  }
                  Object.assign(a, o),
                    Object.assign(a, Et({}, t(a), { lazy: void 0 }));
                })(e.route, s, l)
              : void 0,
          ),
          f = o.map((e, n) => {
            let o = u[n],
              i = a.some((t) => t.route.id === e.route.id);
            return Et({}, e, {
              shouldLoad: i,
              resolve: async (n) => (
                n &&
                  "GET" === r.method &&
                  (e.route.lazy || e.route.loader) &&
                  (i = !0),
                i
                  ? (async function (e, t, n, r, a, o) {
                      let i,
                        l,
                        s = (r) => {
                          let i,
                            s = new Promise((e, t) => (i = t));
                          (l = () => i()),
                            t.signal.addEventListener("abort", l);
                          let c = (a) =>
                              "function" !== typeof r
                                ? Promise.reject(
                                    new Error(
                                      'You cannot call the handler for a route which defines a boolean "' +
                                        e +
                                        '" [routeId: ' +
                                        n.route.id +
                                        "]",
                                    ),
                                  )
                                : r(
                                    {
                                      request: t,
                                      params: n.params,
                                      context: o,
                                    },
                                    ...(void 0 !== a ? [a] : []),
                                  ),
                            u = (async () => {
                              try {
                                return {
                                  type: "data",
                                  result: await (a ? a((e) => c(e)) : c()),
                                };
                              } catch (e) {
                                return { type: "error", result: e };
                              }
                            })();
                          return Promise.race([u, s]);
                        };
                      try {
                        let a = n.route[e];
                        if (r)
                          if (a) {
                            let e,
                              [t] = await Promise.all([
                                s(a).catch((t) => {
                                  e = t;
                                }),
                                r,
                              ]);
                            if (void 0 !== e) throw e;
                            i = t;
                          } else {
                            if ((await r, (a = n.route[e]), !a)) {
                              if ("action" === e) {
                                let e = new URL(t.url),
                                  r = e.pathname + e.search;
                                throw qn(405, {
                                  method: t.method,
                                  pathname: r,
                                  routeId: n.route.id,
                                });
                              }
                              return { type: Dt.data, result: void 0 };
                            }
                            i = await s(a);
                          }
                        else {
                          if (!a) {
                            let e = new URL(t.url);
                            throw qn(404, { pathname: e.pathname + e.search });
                          }
                          i = await s(a);
                        }
                        Ot(
                          void 0 !== i.result,
                          "You defined " +
                            ("action" === e ? "an action" : "a loader") +
                            ' for route "' +
                            n.route.id +
                            "\" but didn't return anything from your `" +
                            e +
                            "` function. Please return a value or `null`.",
                        );
                      } catch (c) {
                        return { type: Dt.error, result: c };
                      } finally {
                        l && t.signal.removeEventListener("abort", l);
                      }
                      return i;
                    })(t, r, e, o, n, c)
                  : Promise.resolve({ type: Dt.data, result: void 0 })
              ),
            });
          }),
          d = await e({
            matches: f,
            request: r,
            params: o[0].params,
            fetcherKey: i,
            context: c,
          });
        try {
          await Promise.all(u);
        } catch (p) {}
        return d;
      }
      async function Dn(e) {
        let { result: t, type: n } = e;
        if (er(t)) {
          let e;
          try {
            let n = t.headers.get("Content-Type");
            e =
              n && /\bapplication\/json\b/.test(n)
                ? null == t.body
                  ? null
                  : await t.json()
                : await t.text();
          } catch (c) {
            return { type: Dt.error, error: c };
          }
          return n === Dt.error
            ? {
                type: Dt.error,
                error: new sn(t.status, t.statusText, e),
                statusCode: t.status,
                headers: t.headers,
              }
            : {
                type: Dt.data,
                data: e,
                statusCode: t.status,
                headers: t.headers,
              };
        }
        if (n === Dt.error) {
          if (Zn(t)) {
            var r, a;
            if (t.data instanceof Error)
              return {
                type: Dt.error,
                error: t.data,
                statusCode: null == (a = t.init) ? void 0 : a.status,
              };
            t = new sn(
              (null == (r = t.init) ? void 0 : r.status) || 500,
              void 0,
              t.data,
            );
          }
          return {
            type: Dt.error,
            error: t,
            statusCode: cn(t) ? t.status : void 0,
          };
        }
        var o, i, l, s;
        return (function (e) {
          let t = e;
          return (
            t &&
            "object" === typeof t &&
            "object" === typeof t.data &&
            "function" === typeof t.subscribe &&
            "function" === typeof t.cancel &&
            "function" === typeof t.resolveData
          );
        })(t)
          ? {
              type: Dt.deferred,
              deferredData: t,
              statusCode: null == (o = t.init) ? void 0 : o.status,
              headers:
                (null == (i = t.init) ? void 0 : i.headers) &&
                new Headers(t.init.headers),
            }
          : Zn(t)
            ? {
                type: Dt.data,
                data: t.data,
                statusCode: null == (l = t.init) ? void 0 : l.status,
                headers:
                  null != (s = t.init) && s.headers
                    ? new Headers(t.init.headers)
                    : void 0,
              }
            : { type: Dt.data, data: t };
      }
      function An(e, t, n, r, a, o) {
        let i = e.headers.get("Location");
        if (
          (Ot(
            i,
            "Redirects returned/thrown from loaders/actions must have a Location header",
          ),
          !bn.test(i))
        ) {
          let l = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
          (i = En(new URL(t.url), l, a, !0, i, o)),
            e.headers.set("Location", i);
        }
        return e;
      }
      function Mn(e, t, n) {
        if (bn.test(e)) {
          let r = e,
            a = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            o = null != Gt(a.pathname, n);
          if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
        }
        return e;
      }
      function Fn(e, t, n, r) {
        let a = e.createURL(Qn(t)).toString(),
          o = { signal: n };
        if (r && nr(r.formMethod)) {
          let { formMethod: e, formEncType: t } = r;
          (o.method = e.toUpperCase()),
            "application/json" === t
              ? ((o.headers = new Headers({ "Content-Type": t })),
                (o.body = JSON.stringify(r.json)))
              : "text/plain" === t
                ? (o.body = r.text)
                : "application/x-www-form-urlencoded" === t && r.formData
                  ? (o.body = zn(r.formData))
                  : (o.body = r.formData);
        }
        return new Request(a, o);
      }
      function zn(e) {
        let t = new URLSearchParams();
        for (let [n, r] of e.entries())
          t.append(n, "string" === typeof r ? r : r.name);
        return t;
      }
      function In(e) {
        let t = new FormData();
        for (let [n, r] of e.entries()) t.append(n, r);
        return t;
      }
      function Un(e, t, n, r, a) {
        let o,
          i = {},
          l = null,
          s = !1,
          c = {},
          u = n && Jn(n[1]) ? n[1].error : void 0;
        return (
          e.forEach((n) => {
            if (!(n.route.id in t)) return;
            let f = n.route.id,
              d = t[f];
            if (
              (Ot(
                !Gn(d),
                "Cannot handle redirect results in processLoaderData",
              ),
              Jn(d))
            ) {
              let t = d.error;
              if ((void 0 !== u && ((t = u), (u = void 0)), (l = l || {}), a))
                l[f] = t;
              else {
                let n = Wn(e, f);
                null == l[n.route.id] && (l[n.route.id] = t);
              }
              (i[f] = void 0),
                s || ((s = !0), (o = cn(d.error) ? d.error.status : 500)),
                d.headers && (c[f] = d.headers);
            } else
              Xn(d)
                ? (r.set(f, d.deferredData),
                  (i[f] = d.deferredData.data),
                  null == d.statusCode ||
                    200 === d.statusCode ||
                    s ||
                    (o = d.statusCode),
                  d.headers && (c[f] = d.headers))
                : ((i[f] = d.data),
                  d.statusCode &&
                    200 !== d.statusCode &&
                    !s &&
                    (o = d.statusCode),
                  d.headers && (c[f] = d.headers));
          }),
          void 0 !== u && n && ((l = { [n[0]]: u }), (i[n[0]] = void 0)),
          { loaderData: i, errors: l, statusCode: o || 200, loaderHeaders: c }
        );
      }
      function Bn(e, t, n, r, a, o, i) {
        let { loaderData: l, errors: s } = Un(t, n, r, i, !1);
        return (
          a.forEach((t) => {
            let { key: n, match: r, controller: a } = t,
              i = o[n];
            if (
              (Ot(i, "Did not find corresponding fetcher result"),
              !a || !a.signal.aborted)
            )
              if (Jn(i)) {
                let t = Wn(e.matches, null == r ? void 0 : r.route.id);
                (s && s[t.route.id]) ||
                  (s = Et({}, s, { [t.route.id]: i.error })),
                  e.fetchers.delete(n);
              } else if (Gn(i))
                Ot(!1, "Unhandled fetcher revalidation redirect");
              else if (Xn(i)) Ot(!1, "Unhandled fetcher deferred data");
              else {
                let t = fr(i.data);
                e.fetchers.set(n, t);
              }
          }),
          { loaderData: l, errors: s }
        );
      }
      function $n(e, t, n, r) {
        let a = Et({}, t);
        for (let o of n) {
          let n = o.route.id;
          if (
            (t.hasOwnProperty(n)
              ? void 0 !== t[n] && (a[n] = t[n])
              : void 0 !== e[n] && o.route.loader && (a[n] = e[n]),
            r && r.hasOwnProperty(n))
          )
            break;
        }
        return a;
      }
      function Hn(e) {
        return e
          ? Jn(e[1])
            ? { actionData: {} }
            : { actionData: { [e[0]]: e[1].data } }
          : {};
      }
      function Wn(e, t) {
        return (
          (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
            .reverse()
            .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
        );
      }
      function Vn(e) {
        let t =
          1 === e.length
            ? e[0]
            : e.find((e) => e.index || !e.path || "/" === e.path) || {
                id: "__shim-error-route__",
              };
        return {
          matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
          route: t,
        };
      }
      function qn(e, t) {
        let {
            pathname: n,
            routeId: r,
            method: a,
            type: o,
            message: i,
          } = void 0 === t ? {} : t,
          l = "Unknown Server Error",
          s = "Unknown @remix-run/router error";
        return (
          400 === e
            ? ((l = "Bad Request"),
              a && n && r
                ? (s =
                    "You made a " +
                    a +
                    ' request to "' +
                    n +
                    '" but did not provide a `loader` for route "' +
                    r +
                    '", so there is no way to handle the request.')
                : "defer-action" === o
                  ? (s = "defer() is not supported in actions")
                  : "invalid-body" === o &&
                    (s = "Unable to encode submission body"))
            : 403 === e
              ? ((l = "Forbidden"),
                (s = 'Route "' + r + '" does not match URL "' + n + '"'))
              : 404 === e
                ? ((l = "Not Found"), (s = 'No route matches URL "' + n + '"'))
                : 405 === e &&
                  ((l = "Method Not Allowed"),
                  a && n && r
                    ? (s =
                        "You made a " +
                        a.toUpperCase() +
                        ' request to "' +
                        n +
                        '" but did not provide an `action` for route "' +
                        r +
                        '", so there is no way to handle the request.')
                    : a &&
                      (s = 'Invalid request method "' + a.toUpperCase() + '"')),
          new sn(e || 500, l, new Error(s), !0)
        );
      }
      function Kn(e) {
        let t = Object.entries(e);
        for (let n = t.length - 1; n >= 0; n--) {
          let [e, r] = t[n];
          if (Gn(r)) return { key: e, result: r };
        }
      }
      function Qn(e) {
        return Tt(Et({}, "string" === typeof e ? _t(e) : e, { hash: "" }));
      }
      function Yn(e) {
        return er(e.result) && hn.has(e.result.status);
      }
      function Xn(e) {
        return e.type === Dt.deferred;
      }
      function Jn(e) {
        return e.type === Dt.error;
      }
      function Gn(e) {
        return (e && e.type) === Dt.redirect;
      }
      function Zn(e) {
        return (
          "object" === typeof e &&
          null != e &&
          "type" in e &&
          "data" in e &&
          "init" in e &&
          "DataWithResponseInit" === e.type
        );
      }
      function er(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "object" === typeof e.headers &&
          "undefined" !== typeof e.body
        );
      }
      function tr(e) {
        return pn.has(e.toLowerCase());
      }
      function nr(e) {
        return fn.has(e.toLowerCase());
      }
      async function rr(e, t, n, r, a) {
        let o = Object.entries(t);
        for (let i = 0; i < o.length; i++) {
          let [l, s] = o[i],
            c = e.find((e) => (null == e ? void 0 : e.route.id) === l);
          if (!c) continue;
          let u = r.find((e) => e.route.id === c.route.id),
            f = null != u && !jn(u, c) && void 0 !== (a && a[c.route.id]);
          Xn(s) &&
            f &&
            (await or(s, n, !1).then((e) => {
              e && (t[l] = e);
            }));
        }
      }
      async function ar(e, t, n) {
        for (let r = 0; r < n.length; r++) {
          let { key: a, routeId: o, controller: i } = n[r],
            l = t[a];
          e.find((e) => (null == e ? void 0 : e.route.id) === o) &&
            Xn(l) &&
            (Ot(
              i,
              "Expected an AbortController for revalidating fetcher deferred result",
            ),
            await or(l, i.signal, !0).then((e) => {
              e && (t[a] = e);
            }));
        }
      }
      async function or(e, t, n) {
        if (
          (void 0 === n && (n = !1), !(await e.deferredData.resolveData(t)))
        ) {
          if (n)
            try {
              return { type: Dt.data, data: e.deferredData.unwrappedData };
            } catch (r) {
              return { type: Dt.error, error: r };
            }
          return { type: Dt.data, data: e.deferredData.data };
        }
      }
      function ir(e) {
        return new URLSearchParams(e).getAll("index").some((e) => "" === e);
      }
      function lr(e, t) {
        let n = "string" === typeof t ? _t(t).search : t.search;
        if (e[e.length - 1].route.index && ir(n || "")) return e[e.length - 1];
        let r = en(e);
        return r[r.length - 1];
      }
      function sr(e) {
        let {
          formMethod: t,
          formAction: n,
          formEncType: r,
          text: a,
          formData: o,
          json: i,
        } = e;
        if (t && n && r)
          return null != a
            ? {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: a,
              }
            : null != o
              ? {
                  formMethod: t,
                  formAction: n,
                  formEncType: r,
                  formData: o,
                  json: void 0,
                  text: void 0,
                }
              : void 0 !== i
                ? {
                    formMethod: t,
                    formAction: n,
                    formEncType: r,
                    formData: void 0,
                    json: i,
                    text: void 0,
                  }
                : void 0;
      }
      function cr(e, t) {
        if (t) {
          return {
            state: "loading",
            location: e,
            formMethod: t.formMethod,
            formAction: t.formAction,
            formEncType: t.formEncType,
            formData: t.formData,
            json: t.json,
            text: t.text,
          };
        }
        return {
          state: "loading",
          location: e,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        };
      }
      function ur(e, t) {
        if (e) {
          return {
            state: "loading",
            formMethod: e.formMethod,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formData: e.formData,
            json: e.json,
            text: e.text,
            data: t,
          };
        }
        return {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: t,
        };
      }
      function fr(e) {
        return {
          state: "idle",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e,
        };
      }
      function dr() {
        return (
          (dr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          dr.apply(this, arguments)
        );
      }
      const pr = t.createContext(null);
      const hr = t.createContext(null);
      const mr = t.createContext(null);
      const gr = t.createContext(null);
      const vr = t.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1,
      });
      const yr = t.createContext(null);
      function br() {
        return null != t.useContext(gr);
      }
      function wr() {
        return br() || Ot(!1), t.useContext(gr).location;
      }
      function xr(e) {
        t.useContext(mr).static || t.useLayoutEffect(e);
      }
      function kr() {
        let { isDataRoute: e } = t.useContext(vr);
        return e
          ? (function () {
              let { router: e } = _r(Rr.UseNavigateStable),
                n = Dr(Tr.UseNavigateStable),
                r = t.useRef(!1);
              xr(() => {
                r.current = !0;
              });
              let a = t.useCallback(
                function (t, a) {
                  void 0 === a && (a = {}),
                    r.current &&
                      ("number" === typeof t
                        ? e.navigate(t)
                        : e.navigate(t, dr({ fromRouteId: n }, a)));
                },
                [e, n],
              );
              return a;
            })()
          : (function () {
              br() || Ot(!1);
              let e = t.useContext(pr),
                { basename: n, future: r, navigator: a } = t.useContext(mr),
                { matches: o } = t.useContext(vr),
                { pathname: i } = wr(),
                l = JSON.stringify(tn(o, r.v7_relativeSplatPath)),
                s = t.useRef(!1);
              xr(() => {
                s.current = !0;
              });
              let c = t.useCallback(
                function (t, r) {
                  if ((void 0 === r && (r = {}), !s.current)) return;
                  if ("number" === typeof t) return void a.go(t);
                  let o = nn(t, JSON.parse(l), i, "path" === r.relative);
                  null == e &&
                    "/" !== n &&
                    (o.pathname = "/" === o.pathname ? n : rn([n, o.pathname])),
                    (r.replace ? a.replace : a.push)(o, r.state, r);
                },
                [n, a, l, i, e],
              );
              return c;
            })();
      }
      function Er() {
        let { matches: e } = t.useContext(vr),
          n = e[e.length - 1];
        return n ? n.params : {};
      }
      function Sr(e, n, r, a) {
        br() || Ot(!1);
        let { navigator: o } = t.useContext(mr),
          { matches: i } = t.useContext(vr),
          l = i[i.length - 1],
          s = l ? l.params : {},
          c = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let u,
          f = wr();
        if (n) {
          var d;
          let e = "string" === typeof n ? _t(n) : n;
          "/" === c ||
            (null == (d = e.pathname) ? void 0 : d.startsWith(c)) ||
            Ot(!1),
            (u = e);
        } else u = f;
        let p = u.pathname || "/",
          h = p;
        if ("/" !== c) {
          let e = c.replace(/^\//, "").split("/");
          h = "/" + p.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let m = Ft(e, { pathname: h });
        let g = Pr(
          m &&
            m.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: rn([
                  c,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? c
                    : rn([
                        c,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              }),
            ),
          i,
          r,
          a,
        );
        return n && g
          ? t.createElement(
              gr.Provider,
              {
                value: {
                  location: dr(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    u,
                  ),
                  navigationType: St.Pop,
                },
              },
              g,
            )
          : g;
      }
      function Cr() {
        let e = (function () {
            var e;
            let n = t.useContext(yr),
              r = Lr(Tr.UseRouteError),
              a = Dr(Tr.UseRouteError);
            if (void 0 !== n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = cn(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null,
        );
      }
      const Nr = t.createElement(Cr, null);
      class Or extends t.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t,
          );
        }
        render() {
          return void 0 !== this.state.error
            ? t.createElement(
                vr.Provider,
                { value: this.props.routeContext },
                t.createElement(yr.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function jr(e) {
        let { routeContext: n, match: r, children: a } = e,
          o = t.useContext(pr);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(vr.Provider, { value: n }, a)
        );
      }
      function Pr(e, n, r, a) {
        var o;
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == e)
        ) {
          var i;
          if (!r) return null;
          if (r.errors) e = r.matches;
          else {
            if (
              !(
                null != (i = a) &&
                i.v7_partialHydration &&
                0 === n.length &&
                !r.initialized &&
                r.matches.length > 0
              )
            )
              return null;
            e = r.matches;
          }
        }
        let l = e,
          s = null == (o = r) ? void 0 : o.errors;
        if (null != s) {
          let e = l.findIndex(
            (e) =>
              e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id]),
          );
          e >= 0 || Ot(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let c = !1,
          u = -1;
        if (r && a && a.v7_partialHydration)
          for (let t = 0; t < l.length; t++) {
            let e = l[t];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (u = t),
              e.route.id)
            ) {
              let { loaderData: t, errors: n } = r,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!n || void 0 === n[e.route.id]);
              if (e.route.lazy || a) {
                (c = !0), (l = u >= 0 ? l.slice(0, u + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((e, a, o) => {
          let i,
            f = !1,
            d = null,
            p = null;
          var h;
          r &&
            ((i = s && a.route.id ? s[a.route.id] : void 0),
            (d = a.route.errorElement || Nr),
            c &&
              (u < 0 && 0 === o
                ? ((h = "route-fallback"),
                  !1 || Ar[h] || (Ar[h] = !0),
                  (f = !0),
                  (p = null))
                : u === o &&
                  ((f = !0), (p = a.route.hydrateFallbackElement || null))));
          let m = n.concat(l.slice(0, o + 1)),
            g = () => {
              let n;
              return (
                (n = i
                  ? d
                  : f
                    ? p
                    : a.route.Component
                      ? t.createElement(a.route.Component, null)
                      : a.route.element
                        ? a.route.element
                        : e),
                t.createElement(jr, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(Or, {
                location: r.location,
                revalidation: r.revalidation,
                component: d,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var Rr = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(Rr || {}),
        Tr = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(Tr || {});
      function _r(e) {
        let n = t.useContext(pr);
        return n || Ot(!1), n;
      }
      function Lr(e) {
        let n = t.useContext(hr);
        return n || Ot(!1), n;
      }
      function Dr(e) {
        let n = (function () {
            let e = t.useContext(vr);
            return e || Ot(!1), e;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || Ot(!1), r.route.id;
      }
      const Ar = {};
      const Mr = {};
      const Fr = (e, t, n) => {
        var r;
        Mr[
          (r =
            "\u26a0\ufe0f React Router Future Flag Warning: " +
            t +
            ". You can use the `" +
            e +
            "` future flag to opt-in early. For more information, see " +
            n +
            ".")
        ] || ((Mr[r] = !0), console.warn(r));
      };
      function zr(e, t) {
        (null != e && e.v7_startTransition) ||
          Fr(
            "v7_startTransition",
            "React Router will begin wrapping state updates in `React.startTransition` in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_starttransition",
          ),
          (null != e && e.v7_relativeSplatPath) ||
            (t && t.v7_relativeSplatPath) ||
            Fr(
              "v7_relativeSplatPath",
              "Relative route resolution within Splat routes is changing in v7",
              "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath",
            ),
          t &&
            (t.v7_fetcherPersist ||
              Fr(
                "v7_fetcherPersist",
                "The persistence behavior of fetchers is changing in v7",
                "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist",
              ),
            t.v7_normalizeFormMethod ||
              Fr(
                "v7_normalizeFormMethod",
                "Casing of `formMethod` fields is being normalized to uppercase in v7",
                "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod",
              ),
            t.v7_partialHydration ||
              Fr(
                "v7_partialHydration",
                "`RouterProvider` hydration behavior is changing in v7",
                "https://reactrouter.com/v6/upgrading/future#v7_partialhydration",
              ),
            t.v7_skipActionErrorRevalidation ||
              Fr(
                "v7_skipActionErrorRevalidation",
                "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
                "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation",
              ));
      }
      r.startTransition;
      function Ir(e) {
        let { to: n, replace: r, state: a, relative: o } = e;
        br() || Ot(!1);
        let { future: i, static: l } = t.useContext(mr),
          { matches: s } = t.useContext(vr),
          { pathname: c } = wr(),
          u = kr(),
          f = nn(n, tn(s, i.v7_relativeSplatPath), c, "path" === o),
          d = JSON.stringify(f);
        return (
          t.useEffect(
            () => u(JSON.parse(d), { replace: r, state: a, relative: o }),
            [u, d, o, r, a],
          ),
          null
        );
      }
      function Ur(e) {
        let {
          basename: n = "/",
          children: r = null,
          location: a,
          navigationType: o = St.Pop,
          navigator: i,
          static: l = !1,
          future: s,
        } = e;
        br() && Ot(!1);
        let c = n.replace(/^\/*/, "/"),
          u = t.useMemo(
            () => ({
              basename: c,
              navigator: i,
              static: l,
              future: dr({ v7_relativeSplatPath: !1 }, s),
            }),
            [c, s, i, l],
          );
        "string" === typeof a && (a = _t(a));
        let {
            pathname: f = "/",
            search: d = "",
            hash: p = "",
            state: h = null,
            key: m = "default",
          } = a,
          g = t.useMemo(() => {
            let e = Gt(f, c);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: d,
                    hash: p,
                    state: h,
                    key: m,
                  },
                  navigationType: o,
                };
          }, [c, f, d, p, h, m, o]);
        return null == g
          ? null
          : t.createElement(
              mr.Provider,
              { value: u },
              t.createElement(gr.Provider, { children: r, value: g }),
            );
      }
      new Promise(() => {});
      t.Component;
      function Br(e) {
        let n = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
        };
        return (
          e.Component &&
            Object.assign(n, {
              element: t.createElement(e.Component),
              Component: void 0,
            }),
          e.HydrateFallback &&
            Object.assign(n, {
              hydrateFallbackElement: t.createElement(e.HydrateFallback),
              HydrateFallback: void 0,
            }),
          e.ErrorBoundary &&
            Object.assign(n, {
              errorElement: t.createElement(e.ErrorBoundary),
              ErrorBoundary: void 0,
            }),
          n
        );
      }
      var $r = n(507);
      const Hr = (0, t.createContext)(),
        Wr = (e) => {
          let { children: n } = e;
          const [r, a] = (0, t.useState)(null),
            [o, i] = (0, t.useState)(null);
          return (0, $r.jsx)(Hr.Provider, {
            value: {
              isUserFetched: o,
              currentUser: r,
              setCurrentUser: a,
              setIsUserFetched: i,
            },
            children: n,
          });
        },
        Vr = () => {
          const { currentUser: e, setCurrentUser: n } = (0, t.useContext)(Hr),
            r = () => {
              window.location.href = "/login/federated/google";
            },
            a = () =>
              (async () => {
                try {
                  const e = await kt.get("/current-user");
                  e.data && n(e.data);
                } catch (e) {
                  n(null), r();
                }
              })().then(() => {
                e || (console.log("User not logged in redirecting"), r());
              });
          return (
            (0, t.useEffect)(() => {
              a();
            }, [a]),
            e
              ? (0, $r.jsx)(Ir, { to: "/profile" })
              : (0, $r.jsx)($r.Fragment, { children: "logging in....." })
          );
        },
        qr = () => {
          const {
              isUserFetched: e,
              currentUser: n,
              setCurrentUser: r,
              setIsUserFetched: a,
            } = (0, t.useContext)(Hr),
            o = async () => {
              const e = await kt.get("/current-user");
              e.data && r(e.data), a(!0);
            };
          (0, t.useEffect)(() => {
            e || o();
          }, [e, o]);
          return (0, $r.jsx)($r.Fragment, {
            children: n
              ? (0, $r.jsx)("button", {
                  className: "btn btn-light",
                  onClick: async () => {
                    try {
                      kt.post("/logoutuser")
                        .then((e) => {
                          console.log("Response:", e.data);
                          const { success: t } = e.data;
                          t && (r(null), a(!1), (window.location.href = "/"));
                        })
                        .catch((e) => {
                          console.error("Error:", e);
                        });
                    } catch (e) {
                      console.log(e);
                    }
                  },
                  children: "Log Out",
                })
              : (0, $r.jsx)("button", {
                  className: "btn btn-light",
                  onClick: () => {
                    n
                      ? console.log("Already logged in. No action.")
                      : (window.location.href = "/login");
                  },
                  children: "Log In",
                }),
          });
        };
      var Kr = n(333),
        Qr = n.n(Kr);
      const Yr = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return null != e ? String(e) : t || null;
        },
        Xr = t.createContext(null);
      function Jr() {
        return (
          (Jr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Jr.apply(null, arguments)
        );
      }
      function Gr(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      }
      n(508);
      function Zr(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function ea(e) {
        var t = (function (e, t) {
          if ("object" !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === typeof t ? t : String(t);
      }
      function ta(e, n) {
        return Object.keys(n).reduce(function (r, a) {
          var o,
            i = r,
            l = i[Zr(a)],
            s = i[a],
            c = Gr(i, [Zr(a), a].map(ea)),
            u = n[a],
            f = (function (e, n, r) {
              var a = (0, t.useRef)(void 0 !== e),
                o = (0, t.useState)(n),
                i = o[0],
                l = o[1],
                s = void 0 !== e,
                c = a.current;
              return (
                (a.current = s),
                !s && c && i !== n && l(n),
                [
                  s ? e : i,
                  (0, t.useCallback)(
                    function (e) {
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          a = 1;
                        a < t;
                        a++
                      )
                        n[a - 1] = arguments[a];
                      r && r.apply(void 0, [e].concat(n)), l(e);
                    },
                    [r],
                  ),
                ]
              );
            })(s, l, e[u]),
            d = f[0],
            p = f[1];
          return Jr({}, c, (((o = {})[a] = d), (o[u] = p), o));
        }, e);
      }
      function na() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function ra(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this),
        );
      }
      function aa(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (na.__suppressDeprecationWarning = !0),
        (ra.__suppressDeprecationWarning = !0),
        (aa.__suppressDeprecationWarning = !0);
      const oa = ["xxl", "xl", "lg", "md", "sm", "xs"],
        ia = "xs",
        la = t.createContext({
          prefixes: {},
          breakpoints: oa,
          minBreakpoint: ia,
        }),
        { Consumer: sa, Provider: ca } = la;
      function ua(e, n) {
        const { prefixes: r } = (0, t.useContext)(la);
        return e || r[n] || n;
      }
      const fa = t.forwardRef((e, t) => {
        let { bsPrefix: n, className: r, as: a, ...o } = e;
        n = ua(n, "navbar-brand");
        const i = a || (o.href ? "a" : "span");
        return (0, $r.jsx)(i, { ...o, ref: t, className: Qr()(r, n) });
      });
      fa.displayName = "NavbarBrand";
      const da = fa;
      function pa(e) {
        return (e && e.ownerDocument) || document;
      }
      function ha(e, t) {
        return (function (e) {
          var t = pa(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var ma = /([A-Z])/g;
      var ga = /^ms-/;
      function va(e) {
        return (function (e) {
          return e.replace(ma, "-$1").toLowerCase();
        })(e).replace(ga, "-ms-");
      }
      var ya =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const ba = function (e, t) {
        var n = "",
          r = "";
        if ("string" === typeof t)
          return (
            e.style.getPropertyValue(va(t)) || ha(e).getPropertyValue(va(t))
          );
        Object.keys(t).forEach(function (a) {
          var o = t[a];
          o || 0 === o
            ? !(function (e) {
                return !(!e || !ya.test(e));
              })(a)
              ? (n += va(a) + ": " + o + ";")
              : (r += a + "(" + o + ") ")
            : e.style.removeProperty(va(a));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function wa(e, t) {
        return (
          (wa = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          wa(e, t)
        );
      }
      var xa = n(766),
        ka = n.t(xa, 2);
      const Ea = !1,
        Sa = t.createContext(null);
      var Ca = "unmounted",
        Na = "exited",
        Oa = "entering",
        ja = "entered",
        Pa = "exiting",
        Ra = (function (e) {
          function n(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var a,
              o = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? o
                  ? ((a = Na), (r.appearStatus = Oa))
                  : (a = ja)
                : (a = t.unmountOnExit || t.mountOnEnter ? Ca : Na),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          !(function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              wa(e, t);
          })(n, e),
            (n.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === Ca ? { status: Na } : null;
            });
          var r = n.prototype;
          return (
            (r.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (r.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== Oa && n !== ja && (t = Oa)
                  : (n !== Oa && n !== ja) || (t = Pa);
              }
              this.updateStatus(!1, t);
            }),
            (r.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (r.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (r.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === Oa)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : xa.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === Na &&
                  this.setState({ status: Ca });
            }),
            (r.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [xa.findDOMNode(this), r],
                o = a[0],
                i = a[1],
                l = this.getTimeouts(),
                s = r ? l.appear : l.enter;
              (!e && !n) || Ea
                ? this.safeSetState({ status: ja }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, i),
                  this.safeSetState({ status: Oa }, function () {
                    t.props.onEntering(o, i),
                      t.onTransitionEnd(s, function () {
                        t.safeSetState({ status: ja }, function () {
                          t.props.onEntered(o, i);
                        });
                      });
                  }));
            }),
            (r.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : xa.findDOMNode(this);
              t && !Ea
                ? (this.props.onExit(r),
                  this.safeSetState({ status: Pa }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: Na }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: Na }, function () {
                    e.props.onExited(r);
                  });
            }),
            (r.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (r.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (r.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (r.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : xa.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    o = a[0],
                    i = a[1];
                  this.props.addEndListener(o, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (r.render = function () {
              var e = this.state.status;
              if (e === Ca) return null;
              var n = this.props,
                r = n.children,
                a =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  Gr(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return t.createElement(
                Sa.Provider,
                { value: null },
                "function" === typeof r
                  ? r(e, a)
                  : t.cloneElement(t.Children.only(r), a),
              );
            }),
            n
          );
        })(t.Component);
      function Ta() {}
      (Ra.contextType = Sa),
        (Ra.propTypes = {}),
        (Ra.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: Ta,
          onEntering: Ta,
          onEntered: Ta,
          onExit: Ta,
          onExiting: Ta,
          onExited: Ta,
        }),
        (Ra.UNMOUNTED = Ca),
        (Ra.EXITED = Na),
        (Ra.ENTERING = Oa),
        (Ra.ENTERED = ja),
        (Ra.EXITING = Pa);
      const _a = Ra,
        La = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var Da = !1,
        Aa = !1;
      try {
        var Ma = {
          get passive() {
            return (Da = !0);
          },
          get once() {
            return (Aa = Da = !0);
          },
        };
        La &&
          (window.addEventListener("test", Ma, Ma),
          window.removeEventListener("test", Ma, !0));
      } catch (Jp) {}
      const Fa = function (e, t, n, r) {
        if (r && "boolean" !== typeof r && !Aa) {
          var a = r.once,
            o = r.capture,
            i = n;
          !Aa &&
            a &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, o), n.call(this, r);
              }),
            (n.__once = i)),
            e.addEventListener(t, i, Da ? r : o);
        }
        e.addEventListener(t, n, r);
      };
      const za = function (e, t, n, r) {
        var a = r && "boolean" !== typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      };
      const Ia = function (e, t, n, r) {
        return (
          Fa(e, t, n, r),
          function () {
            za(e, t, n, r);
          }
        );
      };
      function Ua(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var a = document.createEvent("HTMLEvents");
                  a.initEvent(t, n, r), e.dispatchEvent(a);
                }
              })(e, "transitionend", !0);
          }, t + n),
          o = Ia(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 },
          );
        return function () {
          clearTimeout(a), o();
        };
      }
      function Ba(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = ba(e, "transitionDuration") || "",
                n = -1 === t.indexOf("ms") ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var a = Ua(e, n, r),
          o = Ia(e, "transitionend", t);
        return function () {
          a(), o();
        };
      }
      function $a(e, t) {
        const n = ba(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function Ha(e, t) {
        const n = $a(e, "transitionDuration"),
          r = $a(e, "transitionDelay"),
          a = Ba(
            e,
            (n) => {
              n.target === e && (a(), t(n));
            },
            n + r,
          );
      }
      const Wa = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter((e) => null != e)
          .reduce((e, t) => {
            if ("function" !== typeof t)
              throw new Error(
                "Invalid Argument Type, must only provide functions, undefined, or null.",
              );
            return null === e
              ? t
              : function () {
                  for (
                    var n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  e.apply(this, r), t.apply(this, r);
                };
          }, null);
      };
      function Va(e) {
        e.offsetHeight;
      }
      const qa = (e) =>
        e && "function" !== typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const Ka = function (e, n) {
        return (0, t.useMemo)(
          () =>
            (function (e, t) {
              const n = qa(e),
                r = qa(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(e, n),
          [e, n],
        );
      };
      const Qa = t.forwardRef((e, n) => {
          let {
            onEnter: r,
            onEntering: a,
            onEntered: o,
            onExit: i,
            onExiting: l,
            onExited: s,
            addEndListener: c,
            children: u,
            childRef: f,
            ...d
          } = e;
          const p = (0, t.useRef)(null),
            h = Ka(p, f),
            m = (e) => {
              var t;
              h(
                (t = e) && "setState" in t
                  ? xa.findDOMNode(t)
                  : null != t
                    ? t
                    : null,
              );
            },
            g = (e) => (t) => {
              e && p.current && e(p.current, t);
            },
            v = (0, t.useCallback)(g(r), [r]),
            y = (0, t.useCallback)(g(a), [a]),
            b = (0, t.useCallback)(g(o), [o]),
            w = (0, t.useCallback)(g(i), [i]),
            x = (0, t.useCallback)(g(l), [l]),
            k = (0, t.useCallback)(g(s), [s]),
            E = (0, t.useCallback)(g(c), [c]);
          return (0, $r.jsx)(_a, {
            ref: n,
            ...d,
            onEnter: v,
            onEntered: b,
            onEntering: y,
            onExit: w,
            onExited: k,
            onExiting: x,
            addEndListener: E,
            nodeRef: p,
            children:
              "function" === typeof u
                ? (e, t) => u(e, { ...t, ref: m })
                : t.cloneElement(u, { ref: m }),
          });
        }),
        Ya = Qa,
        Xa = {
          height: ["marginTop", "marginBottom"],
          width: ["marginLeft", "marginRight"],
        };
      function Ja(e, t) {
        const n = t[`offset${e[0].toUpperCase()}${e.slice(1)}`],
          r = Xa[e];
        return n + parseInt(ba(t, r[0]), 10) + parseInt(ba(t, r[1]), 10);
      }
      const Ga = {
          [Na]: "collapse",
          [Pa]: "collapsing",
          [Oa]: "collapsing",
          [ja]: "collapse show",
        },
        Za = t.forwardRef((e, n) => {
          let {
            onEnter: r,
            onEntering: a,
            onEntered: o,
            onExit: i,
            onExiting: l,
            className: s,
            children: c,
            dimension: u = "height",
            in: f = !1,
            timeout: d = 300,
            mountOnEnter: p = !1,
            unmountOnExit: h = !1,
            appear: m = !1,
            getDimensionValue: g = Ja,
            ...v
          } = e;
          const y = "function" === typeof u ? u() : u,
            b = (0, t.useMemo)(
              () =>
                Wa((e) => {
                  e.style[y] = "0";
                }, r),
              [y, r],
            ),
            w = (0, t.useMemo)(
              () =>
                Wa((e) => {
                  const t = `scroll${y[0].toUpperCase()}${y.slice(1)}`;
                  e.style[y] = `${e[t]}px`;
                }, a),
              [y, a],
            ),
            x = (0, t.useMemo)(
              () =>
                Wa((e) => {
                  e.style[y] = null;
                }, o),
              [y, o],
            ),
            k = (0, t.useMemo)(
              () =>
                Wa((e) => {
                  (e.style[y] = `${g(y, e)}px`), Va(e);
                }, i),
              [i, g, y],
            ),
            E = (0, t.useMemo)(
              () =>
                Wa((e) => {
                  e.style[y] = null;
                }, l),
              [y, l],
            );
          return (0, $r.jsx)(Ya, {
            ref: n,
            addEndListener: Ha,
            ...v,
            "aria-expanded": v.role ? f : null,
            onEnter: b,
            onEntering: w,
            onEntered: x,
            onExit: k,
            onExiting: E,
            childRef: c.ref,
            in: f,
            timeout: d,
            mountOnEnter: p,
            unmountOnExit: h,
            appear: m,
            children: (e, n) =>
              t.cloneElement(c, {
                ...n,
                className: Qr()(
                  s,
                  c.props.className,
                  Ga[e],
                  "width" === y && "collapse-horizontal",
                ),
              }),
          });
        }),
        eo = Za,
        to = t.createContext(null);
      to.displayName = "NavbarContext";
      const no = to,
        ro = t.forwardRef((e, n) => {
          let { children: r, bsPrefix: a, ...o } = e;
          a = ua(a, "navbar-collapse");
          const i = (0, t.useContext)(no);
          return (0, $r.jsx)(eo, {
            in: !(!i || !i.expanded),
            ...o,
            children: (0, $r.jsx)("div", { ref: n, className: a, children: r }),
          });
        });
      ro.displayName = "NavbarCollapse";
      const ao = ro;
      const oo = function (e) {
        const n = (0, t.useRef)(e);
        return (
          (0, t.useEffect)(() => {
            n.current = e;
          }, [e]),
          n
        );
      };
      function io(e) {
        const n = oo(e);
        return (0, t.useCallback)(
          function () {
            return n.current && n.current(...arguments);
          },
          [n],
        );
      }
      const lo = t.forwardRef((e, n) => {
        let {
          bsPrefix: r,
          className: a,
          children: o,
          label: i = "Toggle navigation",
          as: l = "button",
          onClick: s,
          ...c
        } = e;
        r = ua(r, "navbar-toggler");
        const { onToggle: u, expanded: f } = (0, t.useContext)(no) || {},
          d = io((e) => {
            s && s(e), u && u();
          });
        return (
          "button" === l && (c.type = "button"),
          (0, $r.jsx)(l, {
            ...c,
            ref: n,
            onClick: d,
            "aria-label": i,
            className: Qr()(a, r, !f && "collapsed"),
            children: o || (0, $r.jsx)("span", { className: `${r}-icon` }),
          })
        );
      });
      lo.displayName = "NavbarToggle";
      const so = lo,
        co =
          "undefined" !== typeof n.g &&
          n.g.navigator &&
          "ReactNative" === n.g.navigator.product,
        uo =
          "undefined" !== typeof document || co
            ? t.useLayoutEffect
            : t.useEffect,
        fo = new WeakMap(),
        po = (e, t) => {
          if (!e || !t) return;
          const n = fo.get(t) || new Map();
          fo.set(t, n);
          let r = n.get(e);
          return (
            r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r
          );
        };
      function ho(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "undefined" === typeof window
              ? void 0
              : window;
        const r = po(e, n),
          [a, o] = (0, t.useState)(() => !!r && r.matches);
        return (
          uo(() => {
            let t = po(e, n);
            if (!t) return o(!1);
            let r = fo.get(n);
            const a = () => {
              o(t.matches);
            };
            return (
              t.refCount++,
              t.addListener(a),
              a(),
              () => {
                t.removeListener(a),
                  t.refCount--,
                  t.refCount <= 0 && (null == r || r.delete(t.media)),
                  (t = void 0);
              }
            );
          }, [e]),
          a
        );
      }
      const mo = (function (e) {
        const n = Object.keys(e);
        function r(e, t) {
          return e === t ? t : e ? `${e} and ${t}` : t;
        }
        function a(t) {
          const r = (function (e) {
            return n[Math.min(n.indexOf(e) + 1, n.length - 1)];
          })(t);
          let a = e[r];
          return (
            (a = "number" === typeof a ? a - 0.2 + "px" : `calc(${a} - 0.2px)`),
            `(max-width: ${a})`
          );
        }
        return function (n, o, i) {
          let l;
          return (
            "object" === typeof n
              ? ((l = n), (i = o), (o = !0))
              : ((o = o || !0), (l = { [n]: o })),
            ho(
              (0, t.useMemo)(
                () =>
                  Object.entries(l).reduce((t, n) => {
                    let [o, i] = n;
                    return (
                      ("up" !== i && !0 !== i) ||
                        (t = r(
                          t,
                          (function (t) {
                            let n = e[t];
                            return (
                              "number" === typeof n && (n = `${n}px`),
                              `(min-width: ${n})`
                            );
                          })(o),
                        )),
                      ("down" !== i && !0 !== i) || (t = r(t, a(o))),
                      t
                    );
                  }, ""),
                [JSON.stringify(l)],
              ),
              i,
            )
          );
        };
      })({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
      function go(e) {
        void 0 === e && (e = pa());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (Jp) {
          return e.body;
        }
      }
      function vo(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
            ? e === t || !!(16 & e.compareDocumentPosition(t))
            : void 0;
      }
      function yo() {
        const e = (0, t.useRef)(!0),
          n = (0, t.useRef)(() => e.current);
        return (
          (0, t.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            [],
          ),
          n.current
        );
      }
      function bo(e) {
        const n = (function (e) {
          const n = (0, t.useRef)(e);
          return (n.current = e), n;
        })(e);
        (0, t.useEffect)(() => () => n.current(), []);
      }
      function wo(e) {
        const n = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(() => {
            n.current = e;
          }),
          n.current
        );
      }
      function xo(e) {
        return `data-rr-ui-${e}`;
      }
      const ko = xo("modal-open");
      const Eo = class {
          constructor() {
            let {
              ownerDocument: e,
              handleContainerOverflow: t = !0,
              isRTL: n = !1,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            (this.handleContainerOverflow = t),
              (this.isRTL = n),
              (this.modals = []),
              (this.ownerDocument = e);
          }
          getScrollbarWidth() {
            return (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : document;
              const t = e.defaultView;
              return Math.abs(t.innerWidth - e.documentElement.clientWidth);
            })(this.ownerDocument);
          }
          getElement() {
            return (this.ownerDocument || document).body;
          }
          setModalAttributes(e) {}
          removeModalAttributes(e) {}
          setContainerStyle(e) {
            const t = { overflow: "hidden" },
              n = this.isRTL ? "paddingLeft" : "paddingRight",
              r = this.getElement();
            (e.style = { overflow: r.style.overflow, [n]: r.style[n] }),
              e.scrollBarWidth &&
                (t[n] =
                  `${parseInt(ba(r, n) || "0", 10) + e.scrollBarWidth}px`),
              r.setAttribute(ko, ""),
              ba(r, t);
          }
          reset() {
            [...this.modals].forEach((e) => this.remove(e));
          }
          removeContainerStyle(e) {
            const t = this.getElement();
            t.removeAttribute(ko), Object.assign(t.style, e.style);
          }
          add(e) {
            let t = this.modals.indexOf(e);
            return -1 !== t
              ? t
              : ((t = this.modals.length),
                this.modals.push(e),
                this.setModalAttributes(e),
                0 !== t ||
                  ((this.state = {
                    scrollBarWidth: this.getScrollbarWidth(),
                    style: {},
                  }),
                  this.handleContainerOverflow &&
                    this.setContainerStyle(this.state)),
                t);
          }
          remove(e) {
            const t = this.modals.indexOf(e);
            -1 !== t &&
              (this.modals.splice(t, 1),
              !this.modals.length &&
                this.handleContainerOverflow &&
                this.removeContainerStyle(this.state),
              this.removeModalAttributes(e));
          }
          isTopModal(e) {
            return (
              !!this.modals.length && this.modals[this.modals.length - 1] === e
            );
          }
        },
        So = (0, t.createContext)(La ? window : void 0);
      So.Provider;
      function Co() {
        return (0, t.useContext)(So);
      }
      const No = (e, t) =>
        La
          ? null == e
            ? (t || pa()).body
            : ("function" === typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
          : null;
      const Oo = function (e) {
        let {
          children: n,
          in: r,
          onExited: a,
          mountOnEnter: o,
          unmountOnExit: i,
        } = e;
        const l = (0, t.useRef)(null),
          s = (0, t.useRef)(r),
          c = io(a);
        (0, t.useEffect)(() => {
          r ? (s.current = !0) : c(l.current);
        }, [r, c]);
        const u = Ka(l, n.ref),
          f = (0, t.cloneElement)(n, { ref: u });
        return r ? f : i || (!s.current && o) ? null : f;
      };
      function jo() {
        const e = t.version.split(".");
        return { major: +e[0], minor: +e[1], patch: +e[2] };
      }
      const Po = [
        "onEnter",
        "onEntering",
        "onEntered",
        "onExit",
        "onExiting",
        "onExited",
        "addEndListener",
        "children",
      ];
      const Ro = ["component"];
      const To = t.forwardRef((e, n) => {
          let { component: r } = e,
            a = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(e, Ro);
          const o = (function (e) {
            let {
                onEnter: n,
                onEntering: r,
                onEntered: a,
                onExit: o,
                onExiting: i,
                onExited: l,
                addEndListener: s,
                children: c,
              } = e,
              u = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                  if ({}.hasOwnProperty.call(e, r)) {
                    if (t.indexOf(r) >= 0) continue;
                    n[r] = e[r];
                  }
                return n;
              })(e, Po);
            const { major: f } = jo(),
              d = f >= 19 ? c.props.ref : c.ref,
              p = (0, t.useRef)(null),
              h = Ka(p, "function" === typeof c ? null : d),
              m = (e) => (t) => {
                e && p.current && e(p.current, t);
              },
              g = (0, t.useCallback)(m(n), [n]),
              v = (0, t.useCallback)(m(r), [r]),
              y = (0, t.useCallback)(m(a), [a]),
              b = (0, t.useCallback)(m(o), [o]),
              w = (0, t.useCallback)(m(i), [i]),
              x = (0, t.useCallback)(m(l), [l]),
              k = (0, t.useCallback)(m(s), [s]);
            return Object.assign(
              {},
              u,
              { nodeRef: p },
              n && { onEnter: g },
              r && { onEntering: v },
              a && { onEntered: y },
              o && { onExit: b },
              i && { onExiting: w },
              l && { onExited: x },
              s && { addEndListener: k },
              {
                children:
                  "function" === typeof c
                    ? (e, t) => c(e, Object.assign({}, t, { ref: h }))
                    : (0, t.cloneElement)(c, { ref: h }),
              },
            );
          })(a);
          return (0, $r.jsx)(r, Object.assign({ ref: n }, o));
        }),
        _o = To;
      function Lo(e) {
        let {
          children: n,
          in: r,
          onExited: a,
          onEntered: o,
          transition: i,
        } = e;
        const [l, s] = (0, t.useState)(!r);
        r && l && s(!1);
        const c = (function (e) {
            let { in: n, onTransition: r } = e;
            const a = (0, t.useRef)(null),
              o = (0, t.useRef)(!0),
              i = io(r);
            return (
              uo(() => {
                if (!a.current) return;
                let e = !1;
                return (
                  i({
                    in: n,
                    element: a.current,
                    initial: o.current,
                    isStale: () => e,
                  }),
                  () => {
                    e = !0;
                  }
                );
              }, [n, i]),
              uo(
                () => (
                  (o.current = !1),
                  () => {
                    o.current = !0;
                  }
                ),
                [],
              ),
              a
            );
          })({
            in: !!r,
            onTransition: (e) => {
              Promise.resolve(i(e)).then(
                () => {
                  e.isStale() ||
                    (e.in
                      ? null == o || o(e.element, e.initial)
                      : (s(!0), null == a || a(e.element)));
                },
                (t) => {
                  throw (e.in || s(!0), t);
                },
              );
            },
          }),
          u = Ka(c, n.ref);
        return l && !r ? null : (0, t.cloneElement)(n, { ref: u });
      }
      function Do(e, t, n) {
        return e
          ? (0, $r.jsx)(_o, Object.assign({}, n, { component: e }))
          : t
            ? (0, $r.jsx)(Lo, Object.assign({}, n, { transition: t }))
            : (0, $r.jsx)(Oo, Object.assign({}, n));
      }
      const Ao = [
        "show",
        "role",
        "className",
        "style",
        "children",
        "backdrop",
        "keyboard",
        "onBackdropClick",
        "onEscapeKeyDown",
        "transition",
        "runTransition",
        "backdropTransition",
        "runBackdropTransition",
        "autoFocus",
        "enforceFocus",
        "restoreFocus",
        "restoreFocusOptions",
        "renderDialog",
        "renderBackdrop",
        "manager",
        "container",
        "onShow",
        "onHide",
        "onExit",
        "onExited",
        "onExiting",
        "onEnter",
        "onEntering",
        "onEntered",
      ];
      let Mo;
      function Fo(e) {
        const n = Co(),
          r =
            e ||
            (function (e) {
              return (
                Mo ||
                  (Mo = new Eo({
                    ownerDocument: null == e ? void 0 : e.document,
                  })),
                Mo
              );
            })(n),
          a = (0, t.useRef)({ dialog: null, backdrop: null });
        return Object.assign(a.current, {
          add: () => r.add(a.current),
          remove: () => r.remove(a.current),
          isTopModal: () => r.isTopModal(a.current),
          setDialogRef: (0, t.useCallback)((e) => {
            a.current.dialog = e;
          }, []),
          setBackdropRef: (0, t.useCallback)((e) => {
            a.current.backdrop = e;
          }, []),
        });
      }
      const zo = (0, t.forwardRef)((e, n) => {
        let {
            show: r = !1,
            role: a = "dialog",
            className: o,
            style: i,
            children: l,
            backdrop: s = !0,
            keyboard: c = !0,
            onBackdropClick: u,
            onEscapeKeyDown: f,
            transition: d,
            runTransition: p,
            backdropTransition: h,
            runBackdropTransition: m,
            autoFocus: g = !0,
            enforceFocus: v = !0,
            restoreFocus: y = !0,
            restoreFocusOptions: b,
            renderDialog: w,
            renderBackdrop: x = (e) => (0, $r.jsx)("div", Object.assign({}, e)),
            manager: k,
            container: E,
            onShow: S,
            onHide: C = () => {},
            onExit: N,
            onExited: O,
            onExiting: j,
            onEnter: P,
            onEntering: R,
            onEntered: T,
          } = e,
          _ = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, Ao);
        const L = Co(),
          D = (function (e, n) {
            const r = Co(),
              [a, o] = (0, t.useState)(() =>
                No(e, null == r ? void 0 : r.document),
              );
            if (!a) {
              const t = No(e);
              t && o(t);
            }
            return (
              (0, t.useEffect)(() => {
                n && a && n(a);
              }, [n, a]),
              (0, t.useEffect)(() => {
                const t = No(e);
                t !== a && o(t);
              }, [e, a]),
              a
            );
          })(E),
          A = Fo(k),
          M = yo(),
          F = wo(r),
          [z, I] = (0, t.useState)(!r),
          U = (0, t.useRef)(null);
        (0, t.useImperativeHandle)(n, () => A, [A]),
          La && !F && r && (U.current = go(null == L ? void 0 : L.document)),
          r && z && I(!1);
        const B = io(() => {
            if (
              (A.add(),
              (K.current = Ia(document, "keydown", V)),
              (q.current = Ia(document, "focus", () => setTimeout(H), !0)),
              S && S(),
              g)
            ) {
              var e, t;
              const n = go(
                null != (e = null == (t = A.dialog) ? void 0 : t.ownerDocument)
                  ? e
                  : null == L
                    ? void 0
                    : L.document,
              );
              A.dialog &&
                n &&
                !vo(A.dialog, n) &&
                ((U.current = n), A.dialog.focus());
            }
          }),
          $ = io(() => {
            var e;
            (A.remove(),
            null == K.current || K.current(),
            null == q.current || q.current(),
            y) &&
              (null == (e = U.current) || null == e.focus || e.focus(b),
              (U.current = null));
          });
        (0, t.useEffect)(() => {
          r && D && B();
        }, [r, D, B]),
          (0, t.useEffect)(() => {
            z && $();
          }, [z, $]),
          bo(() => {
            $();
          });
        const H = io(() => {
            if (!v || !M() || !A.isTopModal()) return;
            const e = go(null == L ? void 0 : L.document);
            A.dialog && e && !vo(A.dialog, e) && A.dialog.focus();
          }),
          W = io((e) => {
            e.target === e.currentTarget &&
              (null == u || u(e), !0 === s && C());
          }),
          V = io((e) => {
            c &&
              (function (e) {
                return "Escape" === e.code || 27 === e.keyCode;
              })(e) &&
              A.isTopModal() &&
              (null == f || f(e), e.defaultPrevented || C());
          }),
          q = (0, t.useRef)(),
          K = (0, t.useRef)();
        if (!D) return null;
        const Q = Object.assign(
          {
            role: a,
            ref: A.setDialogRef,
            "aria-modal": "dialog" === a || void 0,
          },
          _,
          { style: i, className: o, tabIndex: -1 },
        );
        let Y = w
          ? w(Q)
          : (0, $r.jsx)(
              "div",
              Object.assign({}, Q, {
                children: t.cloneElement(l, { role: "document" }),
              }),
            );
        Y = Do(d, p, {
          unmountOnExit: !0,
          mountOnEnter: !0,
          appear: !0,
          in: !!r,
          onExit: N,
          onExiting: j,
          onExited: function () {
            I(!0), null == O || O(...arguments);
          },
          onEnter: P,
          onEntering: R,
          onEntered: T,
          children: Y,
        });
        let X = null;
        return (
          s &&
            ((X = x({ ref: A.setBackdropRef, onClick: W })),
            (X = Do(h, m, {
              in: !!r,
              appear: !0,
              mountOnEnter: !0,
              unmountOnExit: !0,
              children: X,
            }))),
          (0, $r.jsx)($r.Fragment, {
            children: xa.createPortal(
              (0, $r.jsxs)($r.Fragment, { children: [X, Y] }),
              D,
            ),
          })
        );
      });
      zo.displayName = "Modal";
      const Io = Object.assign(zo, { Manager: Eo }),
        Uo = { [Oa]: "show", [ja]: "show" },
        Bo = t.forwardRef((e, n) => {
          let {
            className: r,
            children: a,
            transitionClasses: o = {},
            onEnter: i,
            ...l
          } = e;
          const s = {
              in: !1,
              timeout: 300,
              mountOnEnter: !1,
              unmountOnExit: !1,
              appear: !1,
              ...l,
            },
            c = (0, t.useCallback)(
              (e, t) => {
                Va(e), null == i || i(e, t);
              },
              [i],
            ),
            { major: u } = jo(),
            f = u >= 19 ? a.props.ref : a.ref;
          return (0, $r.jsx)(Ya, {
            ref: n,
            addEndListener: Ha,
            ...s,
            onEnter: c,
            childRef: f,
            children: (e, n) =>
              t.cloneElement(a, {
                ...n,
                className: Qr()("fade", r, a.props.className, Uo[e], o[e]),
              }),
          });
        });
      Bo.displayName = "Fade";
      const $o = Bo,
        Ho = t.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = "div", ...o } = e;
          return (
            (r = ua(r, "offcanvas-body")),
            (0, $r.jsx)(a, { ref: t, className: Qr()(n, r), ...o })
          );
        });
      Ho.displayName = "OffcanvasBody";
      const Wo = Ho,
        Vo = { [Oa]: "show", [ja]: "show" },
        qo = t.forwardRef((e, n) => {
          let {
            bsPrefix: r,
            className: a,
            children: o,
            in: i = !1,
            mountOnEnter: l = !1,
            unmountOnExit: s = !1,
            appear: c = !1,
            ...u
          } = e;
          return (
            (r = ua(r, "offcanvas")),
            (0, $r.jsx)(Ya, {
              ref: n,
              addEndListener: Ha,
              in: i,
              mountOnEnter: l,
              unmountOnExit: s,
              appear: c,
              ...u,
              childRef: o.ref,
              children: (e, n) =>
                t.cloneElement(o, {
                  ...n,
                  className: Qr()(
                    a,
                    o.props.className,
                    (e === Oa || e === Pa) && `${r}-toggling`,
                    Vo[e],
                  ),
                }),
            })
          );
        });
      qo.displayName = "OffcanvasToggling";
      const Ko = qo,
        Qo = t.createContext({ onHide() {} });
      var Yo = n(837),
        Xo = n.n(Yo);
      const Jo = {
          "aria-label": Xo().string,
          onClick: Xo().func,
          variant: Xo().oneOf(["white"]),
        },
        Go = t.forwardRef((e, t) => {
          let { className: n, variant: r, "aria-label": a = "Close", ...o } = e;
          return (0, $r.jsx)("button", {
            ref: t,
            type: "button",
            className: Qr()("btn-close", r && `btn-close-${r}`, n),
            "aria-label": a,
            ...o,
          });
        });
      (Go.displayName = "CloseButton"), (Go.propTypes = Jo);
      const Zo = Go,
        ei = t.forwardRef((e, n) => {
          let {
            closeLabel: r = "Close",
            closeVariant: a,
            closeButton: o = !1,
            onHide: i,
            children: l,
            ...s
          } = e;
          const c = (0, t.useContext)(Qo),
            u = io(() => {
              null == c || c.onHide(), null == i || i();
            });
          return (0, $r.jsxs)("div", {
            ref: n,
            ...s,
            children: [
              l,
              o && (0, $r.jsx)(Zo, { "aria-label": r, variant: a, onClick: u }),
            ],
          });
        }),
        ti = ei,
        ni = t.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            className: r,
            closeLabel: a = "Close",
            closeButton: o = !1,
            ...i
          } = e;
          return (
            (n = ua(n, "offcanvas-header")),
            (0, $r.jsx)(ti, {
              ref: t,
              ...i,
              className: Qr()(r, n),
              closeLabel: a,
              closeButton: o,
            })
          );
        });
      ni.displayName = "OffcanvasHeader";
      const ri = ni,
        ai =
          ((oi = "h5"),
          t.forwardRef((e, t) =>
            (0, $r.jsx)("div", {
              ...e,
              ref: t,
              className: Qr()(e.className, oi),
            }),
          ));
      var oi;
      const ii = t.forwardRef((e, t) => {
        let { className: n, bsPrefix: r, as: a = ai, ...o } = e;
        return (
          (r = ua(r, "offcanvas-title")),
          (0, $r.jsx)(a, { ref: t, className: Qr()(n, r), ...o })
        );
      });
      ii.displayName = "OffcanvasTitle";
      const li = ii;
      var si = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function ci(e, t) {
        return si(e.querySelectorAll(t));
      }
      function ui(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      const fi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        di = ".sticky-top",
        pi = ".navbar-toggler";
      class hi extends Eo {
        adjustAndStore(e, t, n) {
          const r = t.style[e];
          (t.dataset[e] = r), ba(t, { [e]: `${parseFloat(ba(t, e)) + n}px` });
        }
        restore(e, t) {
          const n = t.dataset[e];
          void 0 !== n && (delete t.dataset[e], ba(t, { [e]: n }));
        }
        setContainerStyle(e) {
          super.setContainerStyle(e);
          const t = this.getElement();
          if (
            ((function (e, t) {
              e.classList
                ? e.classList.add(t)
                : (function (e, t) {
                    return e.classList
                      ? !!t && e.classList.contains(t)
                      : -1 !==
                          (
                            " " +
                            (e.className.baseVal || e.className) +
                            " "
                          ).indexOf(" " + t + " ");
                  })(e, t) ||
                  ("string" === typeof e.className
                    ? (e.className = e.className + " " + t)
                    : e.setAttribute(
                        "class",
                        ((e.className && e.className.baseVal) || "") + " " + t,
                      ));
            })(t, "modal-open"),
            !e.scrollBarWidth)
          )
            return;
          const n = this.isRTL ? "paddingLeft" : "paddingRight",
            r = this.isRTL ? "marginLeft" : "marginRight";
          ci(t, fi).forEach((t) => this.adjustAndStore(n, t, e.scrollBarWidth)),
            ci(t, di).forEach((t) =>
              this.adjustAndStore(r, t, -e.scrollBarWidth),
            ),
            ci(t, pi).forEach((t) =>
              this.adjustAndStore(r, t, e.scrollBarWidth),
            );
        }
        removeContainerStyle(e) {
          super.removeContainerStyle(e);
          const t = this.getElement();
          !(function (e, t) {
            e.classList
              ? e.classList.remove(t)
              : "string" === typeof e.className
                ? (e.className = ui(e.className, t))
                : e.setAttribute(
                    "class",
                    ui((e.className && e.className.baseVal) || "", t),
                  );
          })(t, "modal-open");
          const n = this.isRTL ? "paddingLeft" : "paddingRight",
            r = this.isRTL ? "marginLeft" : "marginRight";
          ci(t, fi).forEach((e) => this.restore(n, e)),
            ci(t, di).forEach((e) => this.restore(r, e)),
            ci(t, pi).forEach((e) => this.restore(r, e));
        }
      }
      let mi;
      const gi = hi;
      function vi(e) {
        return (0, $r.jsx)(Ko, { ...e });
      }
      function yi(e) {
        return (0, $r.jsx)($o, { ...e });
      }
      const bi = t.forwardRef((e, n) => {
        let {
          bsPrefix: r,
          className: a,
          children: o,
          "aria-labelledby": i,
          placement: l = "start",
          responsive: s,
          show: c = !1,
          backdrop: u = !0,
          keyboard: f = !0,
          scroll: d = !1,
          onEscapeKeyDown: p,
          onShow: h,
          onHide: m,
          container: g,
          autoFocus: v = !0,
          enforceFocus: y = !0,
          restoreFocus: b = !0,
          restoreFocusOptions: w,
          onEntered: x,
          onExit: k,
          onExiting: E,
          onEnter: S,
          onEntering: C,
          onExited: N,
          backdropClassName: O,
          manager: j,
          renderStaticNode: P = !1,
          ...R
        } = e;
        const T = (0, t.useRef)();
        r = ua(r, "offcanvas");
        const [_, L] = (0, t.useState)(!1),
          D = io(m),
          A = mo(s || "xs", "up");
        (0, t.useEffect)(() => {
          L(s ? c && !A : c);
        }, [c, s, A]);
        const M = (0, t.useMemo)(() => ({ onHide: D }), [D]);
        const F = (0, t.useCallback)(
            (e) =>
              (0, $r.jsx)("div", { ...e, className: Qr()(`${r}-backdrop`, O) }),
            [O, r],
          ),
          z = (e) =>
            (0, $r.jsx)("div", {
              ...e,
              ...R,
              className: Qr()(a, s ? `${r}-${s}` : r, `${r}-${l}`),
              "aria-labelledby": i,
              children: o,
            });
        return (0, $r.jsxs)($r.Fragment, {
          children: [
            !_ && (s || P) && z({}),
            (0, $r.jsx)(Qo.Provider, {
              value: M,
              children: (0, $r.jsx)(Io, {
                show: _,
                ref: n,
                backdrop: u,
                container: g,
                keyboard: f,
                autoFocus: v,
                enforceFocus: y && !d,
                restoreFocus: b,
                restoreFocusOptions: w,
                onEscapeKeyDown: p,
                onShow: h,
                onHide: D,
                onEnter: function (e) {
                  e && (e.style.visibility = "visible");
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  null == S || S(e, ...n);
                },
                onEntering: C,
                onEntered: x,
                onExit: k,
                onExiting: E,
                onExited: function (e) {
                  e && (e.style.visibility = "");
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  null == N || N(...n);
                },
                manager:
                  j ||
                  (d
                    ? (T.current ||
                        (T.current = new gi({ handleContainerOverflow: !1 })),
                      T.current)
                    : (function (e) {
                        return mi || (mi = new hi(e)), mi;
                      })()),
                transition: vi,
                backdropTransition: yi,
                renderBackdrop: F,
                renderDialog: z,
              }),
            }),
          ],
        });
      });
      bi.displayName = "Offcanvas";
      const wi = Object.assign(bi, { Body: Wo, Header: ri, Title: li }),
        xi = t.forwardRef((e, n) => {
          let { onHide: r, ...a } = e;
          const o = (0, t.useContext)(no),
            i = io(() => {
              null == o || null == o.onToggle || o.onToggle(), null == r || r();
            });
          return (0, $r.jsx)(wi, {
            ref: n,
            show: !(null == o || !o.expanded),
            ...a,
            renderStaticNode: !0,
            onHide: i,
          });
        });
      xi.displayName = "NavbarOffcanvas";
      const ki = xi,
        Ei = t.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = "span", ...o } = e;
          return (
            (r = ua(r, "navbar-text")),
            (0, $r.jsx)(a, { ref: t, className: Qr()(n, r), ...o })
          );
        });
      Ei.displayName = "NavbarText";
      const Si = Ei,
        Ci = t.forwardRef((e, n) => {
          const {
              bsPrefix: r,
              expand: a = !0,
              variant: o = "light",
              bg: i,
              fixed: l,
              sticky: s,
              className: c,
              as: u = "nav",
              expanded: f,
              onToggle: d,
              onSelect: p,
              collapseOnSelect: h = !1,
              ...m
            } = ta(e, { expanded: "onToggle" }),
            g = ua(r, "navbar"),
            v = (0, t.useCallback)(
              function () {
                null == p || p(...arguments), h && f && (null == d || d(!1));
              },
              [p, h, f, d],
            );
          void 0 === m.role && "nav" !== u && (m.role = "navigation");
          let y = `${g}-expand`;
          "string" === typeof a && (y = `${y}-${a}`);
          const b = (0, t.useMemo)(
            () => ({
              onToggle: () => (null == d ? void 0 : d(!f)),
              bsPrefix: g,
              expanded: !!f,
              expand: a,
            }),
            [g, f, a, d],
          );
          return (0, $r.jsx)(no.Provider, {
            value: b,
            children: (0, $r.jsx)(Xr.Provider, {
              value: v,
              children: (0, $r.jsx)(u, {
                ref: n,
                ...m,
                className: Qr()(
                  c,
                  g,
                  a && y,
                  o && `${g}-${o}`,
                  i && `bg-${i}`,
                  s && `sticky-${s}`,
                  l && `fixed-${l}`,
                ),
              }),
            }),
          });
        });
      Ci.displayName = "Navbar";
      const Ni = Object.assign(Ci, {
          Brand: da,
          Collapse: ao,
          Offcanvas: ki,
          Text: Si,
          Toggle: so,
        }),
        Oi = t.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            fluid: r = !1,
            as: a = "div",
            className: o,
            ...i
          } = e;
          const l = ua(n, "container"),
            s = "string" === typeof r ? `-${r}` : "-fluid";
          return (0, $r.jsx)(a, {
            ref: t,
            ...i,
            className: Qr()(o, r ? `${l}${s}` : l),
          });
        });
      Oi.displayName = "Container";
      const ji = Oi;
      n(37);
      function Pi() {
        const [, e] = (0, t.useReducer)((e) => !e, !1);
        return e;
      }
      const Ri = t.createContext(null);
      Ri.displayName = "NavContext";
      const Ti = Ri,
        _i = t.createContext(null),
        Li = ["as", "disabled"];
      function Di(e) {
        let {
          tagName: t,
          disabled: n,
          href: r,
          target: a,
          rel: o,
          role: i,
          onClick: l,
          tabIndex: s = 0,
          type: c,
        } = e;
        t || (t = null != r || null != a || null != o ? "a" : "button");
        const u = { tagName: t };
        if ("button" === t) return [{ type: c || "button", disabled: n }, u];
        const f = (e) => {
          (n ||
            ("a" === t &&
              (function (e) {
                return !e || "#" === e.trim();
              })(r))) &&
            e.preventDefault(),
            n ? e.stopPropagation() : null == l || l(e);
        };
        return (
          "a" === t && (r || (r = "#"), n && (r = void 0)),
          [
            {
              role: null != i ? i : "button",
              disabled: void 0,
              tabIndex: n ? void 0 : s,
              href: r,
              target: "a" === t ? a : void 0,
              "aria-disabled": n || void 0,
              rel: "a" === t ? o : void 0,
              onClick: f,
              onKeyDown: (e) => {
                " " === e.key && (e.preventDefault(), f(e));
              },
            },
            u,
          ]
        );
      }
      const Ai = t.forwardRef((e, t) => {
        let { as: n, disabled: r } = e,
          a = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, Li);
        const [o, { tagName: i }] = Di(
          Object.assign({ tagName: n, disabled: r }, a),
        );
        return (0, $r.jsx)(i, Object.assign({}, a, o, { ref: t }));
      });
      Ai.displayName = "Button";
      const Mi = Ai,
        Fi = ["as", "active", "eventKey"];
      function zi(e) {
        let { key: n, onClick: r, active: a, id: o, role: i, disabled: l } = e;
        const s = (0, t.useContext)(Xr),
          c = (0, t.useContext)(Ti),
          u = (0, t.useContext)(_i);
        let f = a;
        const d = { role: i };
        if (c) {
          i || "tablist" !== c.role || (d.role = "tab");
          const e = c.getControllerId(null != n ? n : null),
            t = c.getControlledId(null != n ? n : null);
          (d[xo("event-key")] = n),
            (d.id = e || o),
            (f = null == a && null != n ? c.activeKey === n : a),
            (!f &&
              ((null != u && u.unmountOnExit) ||
                (null != u && u.mountOnEnter))) ||
              (d["aria-controls"] = t);
        }
        return (
          "tab" === d.role &&
            ((d["aria-selected"] = f),
            f || (d.tabIndex = -1),
            l && ((d.tabIndex = -1), (d["aria-disabled"] = !0))),
          (d.onClick = io((e) => {
            l ||
              (null == r || r(e),
              null != n && s && !e.isPropagationStopped() && s(n, e));
          })),
          [d, { isActive: f }]
        );
      }
      const Ii = t.forwardRef((e, t) => {
        let { as: n = Mi, active: r, eventKey: a } = e,
          o = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, Fi);
        const [i, l] = zi(Object.assign({ key: Yr(a, o.href), active: r }, o));
        return (
          (i[xo("active")] = l.isActive),
          (0, $r.jsx)(n, Object.assign({}, o, i, { ref: t }))
        );
      });
      Ii.displayName = "NavItem";
      const Ui = Ii,
        Bi = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
      const $i = () => {},
        Hi = xo("event-key"),
        Wi = t.forwardRef((e, n) => {
          let {
              as: r = "div",
              onSelect: a,
              activeKey: o,
              role: i,
              onKeyDown: l,
            } = e,
            s = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(e, Bi);
          const c = Pi(),
            u = (0, t.useRef)(!1),
            f = (0, t.useContext)(Xr),
            d = (0, t.useContext)(_i);
          let p, h;
          d &&
            ((i = i || "tablist"),
            (o = d.activeKey),
            (p = d.getControlledId),
            (h = d.getControllerId));
          const m = (0, t.useRef)(null),
            g = (e) => {
              const t = m.current;
              if (!t) return null;
              const n = ci(t, `[${Hi}]:not([aria-disabled=true])`),
                r = t.querySelector("[aria-selected=true]");
              if (!r || r !== document.activeElement) return null;
              const a = n.indexOf(r);
              if (-1 === a) return null;
              let o = a + e;
              return (
                o >= n.length && (o = 0), o < 0 && (o = n.length - 1), n[o]
              );
            },
            v = (e, t) => {
              null != e && (null == a || a(e, t), null == f || f(e, t));
            };
          (0, t.useEffect)(() => {
            if (m.current && u.current) {
              const e = m.current.querySelector(`[${Hi}][aria-selected=true]`);
              null == e || e.focus();
            }
            u.current = !1;
          });
          const y = Ka(n, m);
          return (0, $r.jsx)(Xr.Provider, {
            value: v,
            children: (0, $r.jsx)(Ti.Provider, {
              value: {
                role: i,
                activeKey: Yr(o),
                getControlledId: p || $i,
                getControllerId: h || $i,
              },
              children: (0, $r.jsx)(
                r,
                Object.assign({}, s, {
                  onKeyDown: (e) => {
                    if ((null == l || l(e), !d)) return;
                    let t;
                    switch (e.key) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        t = g(-1);
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        t = g(1);
                        break;
                      default:
                        return;
                    }
                    var n;
                    t &&
                      (e.preventDefault(),
                      v(t.dataset[((n = "EventKey"), `rrUi${n}`)] || null, e),
                      (u.current = !0),
                      c());
                  },
                  ref: y,
                  role: i,
                }),
              ),
            }),
          });
        });
      Wi.displayName = "Nav";
      const Vi = Object.assign(Wi, { Item: Ui }),
        qi = t.createContext(null);
      qi.displayName = "CardHeaderContext";
      const Ki = qi,
        Qi = t.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = "div", ...o } = e;
          return (
            (r = ua(r, "nav-item")),
            (0, $r.jsx)(a, { ref: t, className: Qr()(n, r), ...o })
          );
        });
      Qi.displayName = "NavItem";
      const Yi = Qi;
      new WeakMap();
      const Xi = ["onKeyDown"];
      const Ji = t.forwardRef((e, t) => {
        let { onKeyDown: n } = e,
          r = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, Xi);
        const [a] = Di(Object.assign({ tagName: "a" }, r)),
          o = io((e) => {
            a.onKeyDown(e), null == n || n(e);
          });
        return (i = r.href) && "#" !== i.trim() && "button" !== r.role
          ? (0, $r.jsx)("a", Object.assign({ ref: t }, r, { onKeyDown: n }))
          : (0, $r.jsx)("a", Object.assign({ ref: t }, r, a, { onKeyDown: o }));
        var i;
      });
      Ji.displayName = "Anchor";
      const Gi = Ji,
        Zi = t.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            className: r,
            as: a = Gi,
            active: o,
            eventKey: i,
            disabled: l = !1,
            ...s
          } = e;
          n = ua(n, "nav-link");
          const [c, u] = zi({
            key: Yr(i, s.href),
            active: o,
            disabled: l,
            ...s,
          });
          return (0, $r.jsx)(a, {
            ...s,
            ...c,
            ref: t,
            disabled: l,
            className: Qr()(r, n, l && "disabled", u.isActive && "active"),
          });
        });
      Zi.displayName = "NavLink";
      const el = Zi,
        tl = t.forwardRef((e, n) => {
          const {
              as: r = "div",
              bsPrefix: a,
              variant: o,
              fill: i = !1,
              justify: l = !1,
              navbar: s,
              navbarScroll: c,
              className: u,
              activeKey: f,
              ...d
            } = ta(e, { activeKey: "onSelect" }),
            p = ua(a, "nav");
          let h,
            m,
            g = !1;
          const v = (0, t.useContext)(no),
            y = (0, t.useContext)(Ki);
          return (
            v
              ? ((h = v.bsPrefix), (g = null == s || s))
              : y && ({ cardHeaderBsPrefix: m } = y),
            (0, $r.jsx)(Vi, {
              as: r,
              ref: n,
              activeKey: f,
              className: Qr()(u, {
                [p]: !g,
                [`${h}-nav`]: g,
                [`${h}-nav-scroll`]: g && c,
                [`${m}-${o}`]: !!m,
                [`${p}-${o}`]: !!o,
                [`${p}-fill`]: i,
                [`${p}-justified`]: l,
              }),
              ...d,
            })
          );
        });
      tl.displayName = "Nav";
      const nl = Object.assign(tl, { Item: Yi, Link: el }),
        rl = () =>
          (0, $r.jsx)("div", {
            children: (0, $r.jsx)(Ni, {
              expand: "lg",
              style: { backgroundColor: "#433878" },
              children: (0, $r.jsxs)(ji, {
                fluid: !0,
                children: [
                  (0, $r.jsx)(Ni.Brand, {
                    href: "/",
                    style: { color: "white" },
                    children: "FlashWiz",
                  }),
                  (0, $r.jsx)(Ni.Toggle, { "aria-controls": "navbar-nav" }),
                  (0, $r.jsxs)(Ni.Collapse, {
                    id: "navbar-nav",
                    children: [
                      (0, $r.jsxs)(nl, {
                        className: "me-auto",
                        children: [
                          (0, $r.jsx)(nl.Link, {
                            href: "/decks",
                            children: "My Decks",
                          }),
                          (0, $r.jsx)(nl.Link, {
                            href: "/deck/add",
                            children: "Create Deck",
                          }),
                          (0, $r.jsx)(nl.Link, {
                            href: "/decks/public/category",
                            children: "Study",
                          }),
                        ],
                      }),
                      (0, $r.jsx)(qr, {}),
                    ],
                  }),
                ],
              }),
            }),
          }),
        al = () =>
          (0, $r.jsx)("div", {
            className: "container",
            children: (0, $r.jsxs)("footer", {
              className:
                "d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",
              children: [
                (0, $r.jsxs)("div", {
                  className: "col-md-4 d-flex align-items-center",
                  children: [
                    (0, $r.jsx)("a", {
                      href: "/",
                      className:
                        "mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1",
                      children: (0, $r.jsx)("svg", {
                        className: "bi",
                        width: 30,
                        height: 24,
                        children: (0, $r.jsx)("use", {
                          xlinkHref: "#bootstrap",
                        }),
                      }),
                    }),
                    (0, $r.jsx)("span", {
                      className: "text-muted",
                      children: "\xa9 2024 Flashwiz Inc",
                    }),
                  ],
                }),
                (0, $r.jsxs)("ul", {
                  className:
                    "nav col-md-4 justify-content-end list-unstyled d-flex",
                  children: [
                    (0, $r.jsx)("li", {
                      className: "ms-3",
                      children: (0, $r.jsx)("a", {
                        className: "text-muted",
                        href: "/",
                        children: (0, $r.jsx)("svg", {
                          className: "bi",
                          width: 24,
                          height: 24,
                          children: (0, $r.jsx)("use", {
                            xlinkHref: "#twitter",
                          }),
                        }),
                      }),
                    }),
                    (0, $r.jsx)("li", {
                      className: "ms-3",
                      children: (0, $r.jsx)("a", {
                        className: "text-muted",
                        href: "/",
                        children: (0, $r.jsx)("svg", {
                          className: "bi",
                          width: 24,
                          height: 24,
                          children: (0, $r.jsx)("use", {
                            xlinkHref: "#instagram",
                          }),
                        }),
                      }),
                    }),
                    (0, $r.jsx)("li", {
                      className: "ms-3",
                      children: (0, $r.jsx)("a", {
                        className: "text-muted",
                        href: "/",
                        children: (0, $r.jsx)("svg", {
                          className: "bi",
                          width: 24,
                          height: 24,
                          children: (0, $r.jsx)("use", {
                            xlinkHref: "#facebook",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ol = (e) => {
          let { children: t } = e;
          return (0, $r.jsxs)($r.Fragment, {
            children: [
              (0, $r.jsx)(rl, {}),
              (0, $r.jsx)("main", { children: t }),
              (0, $r.jsx)(al, {}),
            ],
          });
        },
        il = () => {
          const { currentUser: e } = (0, t.useContext)(Hr);
          return (0, $r.jsxs)($r.Fragment, {
            children: [
              (0, $r.jsxs)("h1", { children: ["Profile Id - ", e.id] }),
              (0, $r.jsxs)("p", { children: ["Welcome ", e.name] }),
            ],
          });
        },
        ll = (e) => {
          let { children: n } = e;
          const { isUserFetched: r, currentUser: a } = (0, t.useContext)(Hr);
          return r
            ? a
              ? n
              : (0, $r.jsx)(Ir, { to: "/login" })
            : (0, $r.jsx)($r.Fragment, { children: "loading ..." });
        };
      function sl(e, n, r) {
        const a = (0, t.useRef)(void 0 !== e),
          [o, i] = (0, t.useState)(n),
          l = void 0 !== e,
          s = a.current;
        return (
          (a.current = l),
          !l && s && o !== n && i(n),
          [
            l ? e : o,
            (0, t.useCallback)(
              function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                const [a, ...o] = t;
                let l = null == r ? void 0 : r(a, ...o);
                return i(a), l;
              },
              [r],
            ),
          ]
        );
      }
      const cl = t.createContext(null);
      var ul = Object.prototype.hasOwnProperty;
      function fl(e, t, n) {
        for (n of e.keys()) if (dl(n, t)) return n;
      }
      function dl(e, t) {
        var n, r, a;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime();
          if (n === RegExp) return e.toString() === t.toString();
          if (n === Array) {
            if ((r = e.length) === t.length) for (; r-- && dl(e[r], t[r]); );
            return -1 === r;
          }
          if (n === Set) {
            if (e.size !== t.size) return !1;
            for (r of e) {
              if ((a = r) && "object" === typeof a && !(a = fl(t, a)))
                return !1;
              if (!t.has(a)) return !1;
            }
            return !0;
          }
          if (n === Map) {
            if (e.size !== t.size) return !1;
            for (r of e) {
              if ((a = r[0]) && "object" === typeof a && !(a = fl(t, a)))
                return !1;
              if (!dl(r[1], t.get(a))) return !1;
            }
            return !0;
          }
          if (n === ArrayBuffer)
            (e = new Uint8Array(e)), (t = new Uint8Array(t));
          else if (n === DataView) {
            if ((r = e.byteLength) === t.byteLength)
              for (; r-- && e.getInt8(r) === t.getInt8(r); );
            return -1 === r;
          }
          if (ArrayBuffer.isView(e)) {
            if ((r = e.byteLength) === t.byteLength)
              for (; r-- && e[r] === t[r]; );
            return -1 === r;
          }
          if (!n || "object" === typeof e) {
            for (n in ((r = 0), e)) {
              if (ul.call(e, n) && ++r && !ul.call(t, n)) return !1;
              if (!(n in t) || !dl(e[n], t[n])) return !1;
            }
            return Object.keys(t).length === r;
          }
        }
        return e !== e && t !== t;
      }
      const pl = function (e) {
        const n = yo();
        return [
          e[0],
          (0, t.useCallback)(
            (t) => {
              if (n()) return e[1](t);
            },
            [n, e[1]],
          ),
        ];
      };
      function hl(e) {
        return e.split("-")[0];
      }
      function ml(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function gl(e) {
        return e instanceof ml(e).Element || e instanceof Element;
      }
      function vl(e) {
        return e instanceof ml(e).HTMLElement || e instanceof HTMLElement;
      }
      function yl(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof ml(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var bl = Math.max,
        wl = Math.min,
        xl = Math.round;
      function kl() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function El() {
        return !/^((?!chrome|android).)*safari/i.test(kl());
      }
      function Sl(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          a = 1,
          o = 1;
        t &&
          vl(e) &&
          ((a = (e.offsetWidth > 0 && xl(r.width) / e.offsetWidth) || 1),
          (o = (e.offsetHeight > 0 && xl(r.height) / e.offsetHeight) || 1));
        var i = (gl(e) ? ml(e) : window).visualViewport,
          l = !El() && n,
          s = (r.left + (l && i ? i.offsetLeft : 0)) / a,
          c = (r.top + (l && i ? i.offsetTop : 0)) / o,
          u = r.width / a,
          f = r.height / o;
        return {
          width: u,
          height: f,
          top: c,
          right: s + u,
          bottom: c + f,
          left: s,
          x: s,
          y: c,
        };
      }
      function Cl(e) {
        var t = Sl(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function Nl(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && yl(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function Ol(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function jl(e) {
        return ml(e).getComputedStyle(e);
      }
      function Pl(e) {
        return ["table", "td", "th"].indexOf(Ol(e)) >= 0;
      }
      function Rl(e) {
        return ((gl(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Tl(e) {
        return "html" === Ol(e)
          ? e
          : e.assignedSlot || e.parentNode || (yl(e) ? e.host : null) || Rl(e);
      }
      function _l(e) {
        return vl(e) && "fixed" !== jl(e).position ? e.offsetParent : null;
      }
      function Ll(e) {
        for (
          var t = ml(e), n = _l(e);
          n && Pl(n) && "static" === jl(n).position;

        )
          n = _l(n);
        return n &&
          ("html" === Ol(n) ||
            ("body" === Ol(n) && "static" === jl(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(kl());
                if (
                  /Trident/i.test(kl()) &&
                  vl(e) &&
                  "fixed" === jl(e).position
                )
                  return null;
                var n = Tl(e);
                for (
                  yl(n) && (n = n.host);
                  vl(n) && ["html", "body"].indexOf(Ol(n)) < 0;

                ) {
                  var r = jl(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function Dl(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Al(e, t, n) {
        return bl(e, wl(t, n));
      }
      function Ml(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Fl(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      var zl = "top",
        Il = "bottom",
        Ul = "right",
        Bl = "left",
        $l = "auto",
        Hl = [zl, Il, Ul, Bl],
        Wl = "start",
        Vl = "end",
        ql = "viewport",
        Kl = "popper",
        Ql = Hl.reduce(function (e, t) {
          return e.concat([t + "-" + Wl, t + "-" + Vl]);
        }, []),
        Yl = [].concat(Hl, [$l]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Wl, t + "-" + Vl]);
        }, []),
        Xl = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      const Jl = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            a = e.options,
            o = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            l = hl(n.placement),
            s = Dl(l),
            c = [Bl, Ul].indexOf(l) >= 0 ? "height" : "width";
          if (o && i) {
            var u = (function (e, t) {
                return Ml(
                  "number" !==
                    typeof (e =
                      "function" === typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            }),
                          )
                        : e)
                    ? e
                    : Fl(e, Hl),
                );
              })(a.padding, n),
              f = Cl(o),
              d = "y" === s ? zl : Bl,
              p = "y" === s ? Il : Ul,
              h =
                n.rects.reference[c] +
                n.rects.reference[s] -
                i[s] -
                n.rects.popper[c],
              m = i[s] - n.rects.reference[s],
              g = Ll(o),
              v = g
                ? "y" === s
                  ? g.clientHeight || 0
                  : g.clientWidth || 0
                : 0,
              y = h / 2 - m / 2,
              b = u[d],
              w = v - f[c] - u[p],
              x = v / 2 - f[c] / 2 + y,
              k = Al(b, x, w),
              E = s;
            n.modifiersData[r] =
              (((t = {})[E] = k), (t.centerOffset = k - x), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" !== typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            Nl(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Gl(e) {
        return e.split("-")[1];
      }
      var Zl = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function es(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          a = e.placement,
          o = e.variation,
          i = e.offsets,
          l = e.position,
          s = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          f = e.isFixed,
          d = i.x,
          p = void 0 === d ? 0 : d,
          h = i.y,
          m = void 0 === h ? 0 : h,
          g = "function" === typeof u ? u({ x: p, y: m }) : { x: p, y: m };
        (p = g.x), (m = g.y);
        var v = i.hasOwnProperty("x"),
          y = i.hasOwnProperty("y"),
          b = Bl,
          w = zl,
          x = window;
        if (c) {
          var k = Ll(n),
            E = "clientHeight",
            S = "clientWidth";
          if (
            (k === ml(n) &&
              "static" !== jl((k = Rl(n))).position &&
              "absolute" === l &&
              ((E = "scrollHeight"), (S = "scrollWidth")),
            a === zl || ((a === Bl || a === Ul) && o === Vl))
          )
            (w = Il),
              (m -=
                (f && k === x && x.visualViewport
                  ? x.visualViewport.height
                  : k[E]) - r.height),
              (m *= s ? 1 : -1);
          if (a === Bl || ((a === zl || a === Il) && o === Vl))
            (b = Ul),
              (p -=
                (f && k === x && x.visualViewport
                  ? x.visualViewport.width
                  : k[S]) - r.width),
              (p *= s ? 1 : -1);
        }
        var C,
          N = Object.assign({ position: l }, c && Zl),
          O =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    a = t.devicePixelRatio || 1;
                  return { x: xl(n * a) / a || 0, y: xl(r * a) / a || 0 };
                })({ x: p, y: m }, ml(n))
              : { x: p, y: m };
        return (
          (p = O.x),
          (m = O.y),
          s
            ? Object.assign(
                {},
                N,
                (((C = {})[w] = y ? "0" : ""),
                (C[b] = v ? "0" : ""),
                (C.transform =
                  (x.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + m + "px)"
                    : "translate3d(" + p + "px, " + m + "px, 0)"),
                C),
              )
            : Object.assign(
                {},
                N,
                (((t = {})[w] = y ? m + "px" : ""),
                (t[b] = v ? p + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const ts = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            a = void 0 === r || r,
            o = n.adaptive,
            i = void 0 === o || o,
            l = n.roundOffsets,
            s = void 0 === l || l,
            c = {
              placement: hl(t.placement),
              variation: Gl(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: a,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              es(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: i,
                  roundOffsets: s,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                es(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: s,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var ns = { passive: !0 };
      const rs = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            a = r.scroll,
            o = void 0 === a || a,
            i = r.resize,
            l = void 0 === i || i,
            s = ml(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            o &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, ns);
              }),
            l && s.addEventListener("resize", n.update, ns),
            function () {
              o &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, ns);
                }),
                l && s.removeEventListener("resize", n.update, ns);
            }
          );
        },
        data: {},
      };
      var as = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function os(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return as[e];
        });
      }
      var is = { start: "end", end: "start" };
      function ls(e) {
        return e.replace(/start|end/g, function (e) {
          return is[e];
        });
      }
      function ss(e) {
        var t = ml(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function cs(e) {
        return Sl(Rl(e)).left + ss(e).scrollLeft;
      }
      function us(e) {
        var t = jl(e),
          n = t.overflow,
          r = t.overflowX,
          a = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + a + r);
      }
      function fs(e) {
        return ["html", "body", "#document"].indexOf(Ol(e)) >= 0
          ? e.ownerDocument.body
          : vl(e) && us(e)
            ? e
            : fs(Tl(e));
      }
      function ds(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = fs(e),
          a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          o = ml(r),
          i = a ? [o].concat(o.visualViewport || [], us(r) ? r : []) : r,
          l = t.concat(i);
        return a ? l : l.concat(ds(Tl(i)));
      }
      function ps(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function hs(e, t, n) {
        return t === ql
          ? ps(
              (function (e, t) {
                var n = ml(e),
                  r = Rl(e),
                  a = n.visualViewport,
                  o = r.clientWidth,
                  i = r.clientHeight,
                  l = 0,
                  s = 0;
                if (a) {
                  (o = a.width), (i = a.height);
                  var c = El();
                  (c || (!c && "fixed" === t)) &&
                    ((l = a.offsetLeft), (s = a.offsetTop));
                }
                return { width: o, height: i, x: l + cs(e), y: s };
              })(e, n),
            )
          : gl(t)
            ? (function (e, t) {
                var n = Sl(e, !1, "fixed" === t);
                return (
                  (n.top = n.top + e.clientTop),
                  (n.left = n.left + e.clientLeft),
                  (n.bottom = n.top + e.clientHeight),
                  (n.right = n.left + e.clientWidth),
                  (n.width = e.clientWidth),
                  (n.height = e.clientHeight),
                  (n.x = n.left),
                  (n.y = n.top),
                  n
                );
              })(t, n)
            : ps(
                (function (e) {
                  var t,
                    n = Rl(e),
                    r = ss(e),
                    a = null == (t = e.ownerDocument) ? void 0 : t.body,
                    o = bl(
                      n.scrollWidth,
                      n.clientWidth,
                      a ? a.scrollWidth : 0,
                      a ? a.clientWidth : 0,
                    ),
                    i = bl(
                      n.scrollHeight,
                      n.clientHeight,
                      a ? a.scrollHeight : 0,
                      a ? a.clientHeight : 0,
                    ),
                    l = -r.scrollLeft + cs(e),
                    s = -r.scrollTop;
                  return (
                    "rtl" === jl(a || n).direction &&
                      (l += bl(n.clientWidth, a ? a.clientWidth : 0) - o),
                    { width: o, height: i, x: l, y: s }
                  );
                })(Rl(e)),
              );
      }
      function ms(e, t, n, r) {
        var a =
            "clippingParents" === t
              ? (function (e) {
                  var t = ds(Tl(e)),
                    n =
                      ["absolute", "fixed"].indexOf(jl(e).position) >= 0 &&
                      vl(e)
                        ? Ll(e)
                        : e;
                  return gl(n)
                    ? t.filter(function (e) {
                        return gl(e) && Nl(e, n) && "body" !== Ol(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(a, [n]),
          i = o[0],
          l = o.reduce(
            function (t, n) {
              var a = hs(e, n, r);
              return (
                (t.top = bl(a.top, t.top)),
                (t.right = wl(a.right, t.right)),
                (t.bottom = wl(a.bottom, t.bottom)),
                (t.left = bl(a.left, t.left)),
                t
              );
            },
            hs(e, i, r),
          );
        return (
          (l.width = l.right - l.left),
          (l.height = l.bottom - l.top),
          (l.x = l.left),
          (l.y = l.top),
          l
        );
      }
      function gs(e) {
        var t,
          n = e.reference,
          r = e.element,
          a = e.placement,
          o = a ? hl(a) : null,
          i = a ? Gl(a) : null,
          l = n.x + n.width / 2 - r.width / 2,
          s = n.y + n.height / 2 - r.height / 2;
        switch (o) {
          case zl:
            t = { x: l, y: n.y - r.height };
            break;
          case Il:
            t = { x: l, y: n.y + n.height };
            break;
          case Ul:
            t = { x: n.x + n.width, y: s };
            break;
          case Bl:
            t = { x: n.x - r.width, y: s };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = o ? Dl(o) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (i) {
            case Wl:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case Vl:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function vs(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          a = void 0 === r ? e.placement : r,
          o = n.strategy,
          i = void 0 === o ? e.strategy : o,
          l = n.boundary,
          s = void 0 === l ? "clippingParents" : l,
          c = n.rootBoundary,
          u = void 0 === c ? ql : c,
          f = n.elementContext,
          d = void 0 === f ? Kl : f,
          p = n.altBoundary,
          h = void 0 !== p && p,
          m = n.padding,
          g = void 0 === m ? 0 : m,
          v = Ml("number" !== typeof g ? g : Fl(g, Hl)),
          y = d === Kl ? "reference" : Kl,
          b = e.rects.popper,
          w = e.elements[h ? y : d],
          x = ms(
            gl(w) ? w : w.contextElement || Rl(e.elements.popper),
            s,
            u,
            i,
          ),
          k = Sl(e.elements.reference),
          E = gs({
            reference: k,
            element: b,
            strategy: "absolute",
            placement: a,
          }),
          S = ps(Object.assign({}, b, E)),
          C = d === Kl ? S : k,
          N = {
            top: x.top - C.top + v.top,
            bottom: C.bottom - x.bottom + v.bottom,
            left: x.left - C.left + v.left,
            right: C.right - x.right + v.right,
          },
          O = e.modifiersData.offset;
        if (d === Kl && O) {
          var j = O[a];
          Object.keys(N).forEach(function (e) {
            var t = [Ul, Il].indexOf(e) >= 0 ? 1 : -1,
              n = [zl, Il].indexOf(e) >= 0 ? "y" : "x";
            N[e] += j[n] * t;
          });
        }
        return N;
      }
      const ys = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var a = n.mainAxis,
                o = void 0 === a || a,
                i = n.altAxis,
                l = void 0 === i || i,
                s = n.fallbackPlacements,
                c = n.padding,
                u = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                p = n.flipVariations,
                h = void 0 === p || p,
                m = n.allowedAutoPlacements,
                g = t.options.placement,
                v = hl(g),
                y =
                  s ||
                  (v === g || !h
                    ? [os(g)]
                    : (function (e) {
                        if (hl(e) === $l) return [];
                        var t = os(e);
                        return [ls(e), t, ls(t)];
                      })(g)),
                b = [g].concat(y).reduce(function (e, n) {
                  return e.concat(
                    hl(n) === $l
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            a = n.boundary,
                            o = n.rootBoundary,
                            i = n.padding,
                            l = n.flipVariations,
                            s = n.allowedAutoPlacements,
                            c = void 0 === s ? Yl : s,
                            u = Gl(r),
                            f = u
                              ? l
                                ? Ql
                                : Ql.filter(function (e) {
                                    return Gl(e) === u;
                                  })
                              : Hl,
                            d = f.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (t, n) {
                            return (
                              (t[n] = vs(e, {
                                placement: n,
                                boundary: a,
                                rootBoundary: o,
                                padding: i,
                              })[hl(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(p).sort(function (e, t) {
                            return p[e] - p[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: f,
                          padding: c,
                          flipVariations: h,
                          allowedAutoPlacements: m,
                        })
                      : n,
                  );
                }, []),
                w = t.rects.reference,
                x = t.rects.popper,
                k = new Map(),
                E = !0,
                S = b[0],
                C = 0;
              C < b.length;
              C++
            ) {
              var N = b[C],
                O = hl(N),
                j = Gl(N) === Wl,
                P = [zl, Il].indexOf(O) >= 0,
                R = P ? "width" : "height",
                T = vs(t, {
                  placement: N,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: c,
                }),
                _ = P ? (j ? Ul : Bl) : j ? Il : zl;
              w[R] > x[R] && (_ = os(_));
              var L = os(_),
                D = [];
              if (
                (o && D.push(T[O] <= 0),
                l && D.push(T[_] <= 0, T[L] <= 0),
                D.every(function (e) {
                  return e;
                }))
              ) {
                (S = N), (E = !1);
                break;
              }
              k.set(N, D);
            }
            if (E)
              for (
                var A = function (e) {
                    var t = b.find(function (t) {
                      var n = k.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (S = t), "break";
                  },
                  M = h ? 3 : 1;
                M > 0;
                M--
              ) {
                if ("break" === A(M)) break;
              }
            t.placement !== S &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = S),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function bs(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function ws(e) {
        return [zl, Ul, Il, Bl].some(function (t) {
          return e[t] >= 0;
        });
      }
      const xs = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            a = n.offset,
            o = void 0 === a ? [0, 0] : a,
            i = Yl.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = hl(e),
                    a = [Bl, zl].indexOf(r) >= 0 ? -1 : 1,
                    o =
                      "function" === typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    i = o[0],
                    l = o[1];
                  return (
                    (i = i || 0),
                    (l = (l || 0) * a),
                    [Bl, Ul].indexOf(r) >= 0 ? { x: l, y: i } : { x: i, y: l }
                  );
                })(n, t.rects, o)),
                e
              );
            }, {}),
            l = i[t.placement],
            s = l.x,
            c = l.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += s),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = i);
        },
      };
      const ks = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            a = n.mainAxis,
            o = void 0 === a || a,
            i = n.altAxis,
            l = void 0 !== i && i,
            s = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            h = n.tetherOffset,
            m = void 0 === h ? 0 : h,
            g = vs(t, {
              boundary: s,
              rootBoundary: c,
              padding: f,
              altBoundary: u,
            }),
            v = hl(t.placement),
            y = Gl(t.placement),
            b = !y,
            w = Dl(v),
            x = "x" === w ? "y" : "x",
            k = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            S = t.rects.popper,
            C =
              "function" === typeof m
                ? m(Object.assign({}, t.rects, { placement: t.placement }))
                : m,
            N =
              "number" === typeof C
                ? { mainAxis: C, altAxis: C }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
            O = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            j = { x: 0, y: 0 };
          if (k) {
            if (o) {
              var P,
                R = "y" === w ? zl : Bl,
                T = "y" === w ? Il : Ul,
                _ = "y" === w ? "height" : "width",
                L = k[w],
                D = L + g[R],
                A = L - g[T],
                M = p ? -S[_] / 2 : 0,
                F = y === Wl ? E[_] : S[_],
                z = y === Wl ? -S[_] : -E[_],
                I = t.elements.arrow,
                U = p && I ? Cl(I) : { width: 0, height: 0 },
                B = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                $ = B[R],
                H = B[T],
                W = Al(0, E[_], U[_]),
                V = b
                  ? E[_] / 2 - M - W - $ - N.mainAxis
                  : F - W - $ - N.mainAxis,
                q = b
                  ? -E[_] / 2 + M + W + H + N.mainAxis
                  : z + W + H + N.mainAxis,
                K = t.elements.arrow && Ll(t.elements.arrow),
                Q = K ? ("y" === w ? K.clientTop || 0 : K.clientLeft || 0) : 0,
                Y = null != (P = null == O ? void 0 : O[w]) ? P : 0,
                X = L + q - Y,
                J = Al(p ? wl(D, L + V - Y - Q) : D, L, p ? bl(A, X) : A);
              (k[w] = J), (j[w] = J - L);
            }
            if (l) {
              var G,
                Z = "x" === w ? zl : Bl,
                ee = "x" === w ? Il : Ul,
                te = k[x],
                ne = "y" === x ? "height" : "width",
                re = te + g[Z],
                ae = te - g[ee],
                oe = -1 !== [zl, Bl].indexOf(v),
                ie = null != (G = null == O ? void 0 : O[x]) ? G : 0,
                le = oe ? re : te - E[ne] - S[ne] - ie + N.altAxis,
                se = oe ? te + E[ne] + S[ne] - ie - N.altAxis : ae,
                ce =
                  p && oe
                    ? (function (e, t, n) {
                        var r = Al(e, t, n);
                        return r > n ? n : r;
                      })(le, te, se)
                    : Al(p ? le : re, te, p ? se : ae);
              (k[x] = ce), (j[x] = ce - te);
            }
            t.modifiersData[r] = j;
          }
        },
        requiresIfExists: ["offset"],
      };
      function Es(e, t, n) {
        void 0 === n && (n = !1);
        var r = vl(t),
          a =
            vl(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = xl(t.width) / e.offsetWidth || 1,
                r = xl(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          o = Rl(t),
          i = Sl(e, a, n),
          l = { scrollLeft: 0, scrollTop: 0 },
          s = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (("body" !== Ol(t) || us(o)) &&
              (l = (function (e) {
                return e !== ml(e) && vl(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : ss(e);
                var t;
              })(t)),
            vl(t)
              ? (((s = Sl(t, !0)).x += t.clientLeft), (s.y += t.clientTop))
              : o && (s.x = cs(o))),
          {
            x: i.left + l.scrollLeft - s.x,
            y: i.top + l.scrollTop - s.y,
            width: i.width,
            height: i.height,
          }
        );
      }
      function Ss(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function a(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && a(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || a(e);
          }),
          r
        );
      }
      function Cs(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (t = void 0), n(e());
                });
              })),
            t
          );
        };
      }
      var Ns = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Os() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function js(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          a = t.defaultOptions,
          o = void 0 === a ? Ns : a;
        return function (e, t, n) {
          void 0 === n && (n = o);
          var a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Ns, o),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            i = [],
            l = !1,
            s = {
              state: a,
              setOptions: function (n) {
                var l = "function" === typeof n ? n(a.options) : n;
                c(),
                  (a.options = Object.assign({}, o, a.options, l)),
                  (a.scrollParents = {
                    reference: gl(e)
                      ? ds(e)
                      : e.contextElement
                        ? ds(e.contextElement)
                        : [],
                    popper: ds(t),
                  });
                var u = (function (e) {
                  var t = Ss(e);
                  return Xl.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      }),
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, a.options.modifiers)),
                );
                return (
                  (a.orderedModifiers = u.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" === typeof o) {
                      var l = o({ state: a, name: t, instance: s, options: r }),
                        c = function () {};
                      i.push(l || c);
                    }
                  }),
                  s.update()
                );
              },
              forceUpdate: function () {
                if (!l) {
                  var e = a.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Os(t, n)) {
                    (a.rects = {
                      reference: Es(t, Ll(n), "fixed" === a.options.strategy),
                      popper: Cl(n),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var r = 0; r < a.orderedModifiers.length; r++)
                      if (!0 !== a.reset) {
                        var o = a.orderedModifiers[r],
                          i = o.fn,
                          c = o.options,
                          u = void 0 === c ? {} : c,
                          f = o.name;
                        "function" === typeof i &&
                          (a =
                            i({ state: a, options: u, name: f, instance: s }) ||
                            a);
                      } else (a.reset = !1), (r = -1);
                  }
                }
              },
              update: Cs(function () {
                return new Promise(function (e) {
                  s.forceUpdate(), e(a);
                });
              }),
              destroy: function () {
                c(), (l = !0);
              },
            };
          if (!Os(e, t)) return s;
          function c() {
            i.forEach(function (e) {
              return e();
            }),
              (i = []);
          }
          return (
            s.setOptions(n).then(function (e) {
              !l && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            s
          );
        };
      }
      const Ps = js({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  a = t.rects.popper,
                  o = t.modifiersData.preventOverflow,
                  i = vs(t, { elementContext: "reference" }),
                  l = vs(t, { altBoundary: !0 }),
                  s = bs(i, r),
                  c = bs(l, a, o),
                  u = ws(s),
                  f = ws(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: s,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": f,
                    },
                  ));
              },
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = gs({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            ts,
            rs,
            xs,
            ys,
            ks,
            Jl,
          ],
        }),
        Rs = ["enabled", "placement", "strategy", "modifiers"];
      const Ts = {
          name: "applyStyles",
          enabled: !1,
          phase: "afterWrite",
          fn: () => {},
        },
        _s = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: (e) => {
            let { state: t } = e;
            return () => {
              const { reference: e, popper: n } = t.elements;
              if ("removeAttribute" in e) {
                const t = (e.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter((e) => e.trim() !== n.id);
                t.length
                  ? e.setAttribute("aria-describedby", t.join(","))
                  : e.removeAttribute("aria-describedby");
              }
            };
          },
          fn: (e) => {
            let { state: t } = e;
            var n;
            const { popper: r, reference: a } = t.elements,
              o =
                null == (n = r.getAttribute("role")) ? void 0 : n.toLowerCase();
            if (r.id && "tooltip" === o && "setAttribute" in a) {
              const e = a.getAttribute("aria-describedby");
              if (e && -1 !== e.split(",").indexOf(r.id)) return;
              a.setAttribute("aria-describedby", e ? `${e},${r.id}` : r.id);
            }
          },
        },
        Ls = [];
      const Ds = function (e, n) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          {
            enabled: a = !0,
            placement: o = "bottom",
            strategy: i = "absolute",
            modifiers: l = Ls,
          } = r,
          s = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(r, Rs);
        const c = (0, t.useRef)(l),
          u = (0, t.useRef)(),
          f = (0, t.useCallback)(() => {
            var e;
            null == (e = u.current) || e.update();
          }, []),
          d = (0, t.useCallback)(() => {
            var e;
            null == (e = u.current) || e.forceUpdate();
          }, []),
          [p, h] = pl(
            (0, t.useState)({
              placement: o,
              update: f,
              forceUpdate: d,
              attributes: {},
              styles: { popper: {}, arrow: {} },
            }),
          ),
          m = (0, t.useMemo)(
            () => ({
              name: "updateStateModifier",
              enabled: !0,
              phase: "write",
              requires: ["computeStyles"],
              fn: (e) => {
                let { state: t } = e;
                const n = {},
                  r = {};
                Object.keys(t.elements).forEach((e) => {
                  (n[e] = t.styles[e]), (r[e] = t.attributes[e]);
                }),
                  h({
                    state: t,
                    styles: n,
                    attributes: r,
                    update: f,
                    forceUpdate: d,
                    placement: t.placement,
                  });
              },
            }),
            [f, d, h],
          ),
          g = (0, t.useMemo)(
            () => (dl(c.current, l) || (c.current = l), c.current),
            [l],
          );
        return (
          (0, t.useEffect)(() => {
            u.current &&
              a &&
              u.current.setOptions({
                placement: o,
                strategy: i,
                modifiers: [...g, m, Ts],
              });
          }, [i, o, m, a, g]),
          (0, t.useEffect)(() => {
            if (a && null != e && null != n)
              return (
                (u.current = Ps(
                  e,
                  n,
                  Object.assign({}, s, {
                    placement: o,
                    strategy: i,
                    modifiers: [...g, _s, m],
                  }),
                )),
                () => {
                  null != u.current &&
                    (u.current.destroy(),
                    (u.current = void 0),
                    h((e) =>
                      Object.assign({}, e, {
                        attributes: {},
                        styles: { popper: {} },
                      }),
                    ));
                }
              );
          }, [a, e, n]),
          p
        );
      };
      var As = n(480),
        Ms = n.n(As);
      const Fs = () => {};
      const zs = (e) => e && ("current" in e ? e.current : e),
        Is = {
          click: "mousedown",
          mouseup: "mousedown",
          pointerup: "pointerdown",
        };
      const Us = function (e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fs,
          { disabled: r, clickTrigger: a = "click" } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const o = (0, t.useRef)(!1),
          i = (0, t.useRef)(!1),
          l = (0, t.useCallback)(
            (t) => {
              const n = zs(e);
              var r;
              Ms()(
                !!n,
                "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node",
              ),
                (o.current =
                  !n ||
                  !!((r = t).metaKey || r.altKey || r.ctrlKey || r.shiftKey) ||
                  !(function (e) {
                    return 0 === e.button;
                  })(t) ||
                  !!vo(n, t.target) ||
                  i.current),
                (i.current = !1);
            },
            [e],
          ),
          s = io((t) => {
            const n = zs(e);
            n && vo(n, t.target) && (i.current = !0);
          }),
          c = io((e) => {
            o.current || n(e);
          });
        (0, t.useEffect)(() => {
          var t, n;
          if (r || null == e) return;
          const o = pa(zs(e)),
            i = o.defaultView || window;
          let u =
              null != (t = i.event)
                ? t
                : null == (n = i.parent)
                  ? void 0
                  : n.event,
            f = null;
          Is[a] && (f = Ia(o, Is[a], s, !0));
          const d = Ia(o, a, l, !0),
            p = Ia(o, a, (e) => {
              e !== u ? c(e) : (u = void 0);
            });
          let h = [];
          return (
            "ontouchstart" in o.documentElement &&
              (h = [].slice
                .call(o.body.children)
                .map((e) => Ia(e, "mousemove", Fs))),
            () => {
              null == f || f(), d(), p(), h.forEach((e) => e());
            }
          );
        }, [e, r, a, l, s, c]);
      };
      function Bs() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Array.isArray(e)
          ? e
          : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
      }
      function $s(e) {
        let {
          enabled: t,
          enableEvents: n,
          placement: r,
          flip: a,
          offset: o,
          fixed: i,
          containerPadding: l,
          arrowElement: s,
          popperConfig: c = {},
        } = e;
        var u, f, d, p, h;
        const m = (function (e) {
          const t = {};
          return Array.isArray(e)
            ? (null == e ||
                e.forEach((e) => {
                  t[e.name] = e;
                }),
              t)
            : e || t;
        })(c.modifiers);
        return Object.assign({}, c, {
          placement: r,
          enabled: t,
          strategy: i ? "fixed" : c.strategy,
          modifiers: Bs(
            Object.assign({}, m, {
              eventListeners: {
                enabled: n,
                options: null == (u = m.eventListeners) ? void 0 : u.options,
              },
              preventOverflow: Object.assign({}, m.preventOverflow, {
                options: l
                  ? Object.assign(
                      { padding: l },
                      null == (f = m.preventOverflow) ? void 0 : f.options,
                    )
                  : null == (d = m.preventOverflow)
                    ? void 0
                    : d.options,
              }),
              offset: {
                options: Object.assign(
                  { offset: o },
                  null == (p = m.offset) ? void 0 : p.options,
                ),
              },
              arrow: Object.assign({}, m.arrow, {
                enabled: !!s,
                options: Object.assign(
                  {},
                  null == (h = m.arrow) ? void 0 : h.options,
                  { element: s },
                ),
              }),
              flip: Object.assign({ enabled: !!a }, m.flip),
            }),
          ),
        });
      }
      const Hs = ["children", "usePopper"];
      const Ws = () => {};
      function Vs() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = (0, t.useContext)(cl),
          [r, a] = (0, t.useState)(null),
          o = (0, t.useRef)(!1),
          {
            flip: i,
            offset: l,
            rootCloseEvent: s,
            fixed: c = !1,
            placement: u,
            popperConfig: f = {},
            enableEventListeners: d = !0,
            usePopper: p = !!n,
          } = e,
          h = null == (null == n ? void 0 : n.show) ? !!e.show : n.show;
        h && !o.current && (o.current = !0);
        const {
            placement: m,
            setMenu: g,
            menuElement: v,
            toggleElement: y,
          } = n || {},
          b = Ds(
            y,
            v,
            $s({
              placement: u || m || "bottom-start",
              enabled: p,
              enableEvents: null == d ? h : d,
              offset: l,
              flip: i,
              fixed: c,
              arrowElement: r,
              popperConfig: f,
            }),
          ),
          w = Object.assign(
            { ref: g || Ws, "aria-labelledby": null == y ? void 0 : y.id },
            b.attributes.popper,
            { style: b.styles.popper },
          ),
          x = {
            show: h,
            placement: m,
            hasShown: o.current,
            toggle: null == n ? void 0 : n.toggle,
            popper: p ? b : null,
            arrowProps: p
              ? Object.assign({ ref: a }, b.attributes.arrow, {
                  style: b.styles.arrow,
                })
              : {},
          };
        return (
          Us(
            v,
            (e) => {
              null == n || n.toggle(!1, e);
            },
            { clickTrigger: s, disabled: !h },
          ),
          [w, x]
        );
      }
      function qs(e) {
        let { children: t, usePopper: n = !0 } = e,
          r = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, Hs);
        const [a, o] = Vs(Object.assign({}, r, { usePopper: n }));
        return (0, $r.jsx)($r.Fragment, { children: t(a, o) });
      }
      qs.displayName = "DropdownMenu";
      const Ks = qs,
        Qs = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        Ys = t.createContext(Qs),
        Xs = t.createContext(!1);
      let Js = Boolean(
          "undefined" !== typeof window &&
            window.document &&
            window.document.createElement,
        ),
        Gs = new WeakMap();
      function Zs() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = (0, t.useContext)(Ys),
          r = (0, t.useRef)(null);
        if (null === r.current && !e) {
          var a, o;
          let e =
            null ===
              (o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
            void 0 === o ||
            null === (a = o.ReactCurrentOwner) ||
            void 0 === a
              ? void 0
              : a.current;
          if (e) {
            let t = Gs.get(e);
            null == t
              ? Gs.set(e, { id: n.current, state: e.memoizedState })
              : e.memoizedState !== t.state &&
                ((n.current = t.id), Gs.delete(e));
          }
          r.current = ++n.current;
        }
        return r.current;
      }
      const ec =
        "function" === typeof t.useId
          ? function (e) {
              let n = t.useId(),
                [r] = (0, t.useState)(
                  "function" === typeof t.useSyncExternalStore
                    ? t.useSyncExternalStore(rc, tc, nc)
                    : (0, t.useContext)(Xs),
                );
              return e || `${r ? "react-aria" : `react-aria${Qs.prefix}`}-${n}`;
            }
          : function (e) {
              let n = (0, t.useContext)(Ys);
              n !== Qs ||
                Js ||
                console.warn(
                  "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.",
                );
              let r = Zs(!!e),
                a = `react-aria${n.prefix}`;
              return e || `${a}-${r}`;
            };
      function tc() {
        return !1;
      }
      function nc() {
        return !0;
      }
      function rc(e) {
        return () => {};
      }
      const ac = (e) => {
          var t;
          return (
            "menu" ===
            (null == (t = e.getAttribute("role")) ? void 0 : t.toLowerCase())
          );
        },
        oc = () => {};
      function ic() {
        const e = ec(),
          {
            show: n = !1,
            toggle: r = oc,
            setToggle: a,
            menuElement: o,
          } = (0, t.useContext)(cl) || {},
          i = (0, t.useCallback)(
            (e) => {
              r(!n, e);
            },
            [n, r],
          ),
          l = { id: e, ref: a || oc, onClick: i, "aria-expanded": !!n };
        return (
          o && ac(o) && (l["aria-haspopup"] = !0), [l, { show: n, toggle: r }]
        );
      }
      function lc(e) {
        let { children: t } = e;
        const [n, r] = ic();
        return (0, $r.jsx)($r.Fragment, { children: t(n, r) });
      }
      lc.displayName = "DropdownToggle";
      const sc = lc,
        cc = ["eventKey", "disabled", "onClick", "active", "as"];
      function uc(e) {
        let { key: n, href: r, active: a, disabled: o, onClick: i } = e;
        const l = (0, t.useContext)(Xr),
          s = (0, t.useContext)(Ti),
          { activeKey: c } = s || {},
          u = Yr(n, r),
          f = null == a && null != n ? Yr(c) === u : a;
        return [
          {
            onClick: io((e) => {
              o ||
                (null == i || i(e), l && !e.isPropagationStopped() && l(u, e));
            }),
            "aria-disabled": o || void 0,
            "aria-selected": f,
            [xo("dropdown-item")]: "",
          },
          { isActive: f },
        ];
      }
      const fc = t.forwardRef((e, t) => {
        let { eventKey: n, disabled: r, onClick: a, active: o, as: i = Mi } = e,
          l = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, cc);
        const [s] = uc({
          key: n,
          href: l.href,
          disabled: r,
          onClick: a,
          active: o,
        });
        return (0, $r.jsx)(i, Object.assign({}, l, { ref: t }, s));
      });
      fc.displayName = "DropdownItem";
      const dc = fc;
      function pc() {
        const e = Pi(),
          n = (0, t.useRef)(null),
          r = (0, t.useCallback)(
            (t) => {
              (n.current = t), e();
            },
            [e],
          );
        return [n, r];
      }
      function hc(e) {
        let {
          defaultShow: n,
          show: r,
          onSelect: a,
          onToggle: o,
          itemSelector: i = `* [${xo("dropdown-item")}]`,
          focusFirstItemOnShow: l,
          placement: s = "bottom-start",
          children: c,
        } = e;
        const u = Co(),
          [f, d] = sl(r, n, o),
          [p, h] = pc(),
          m = p.current,
          [g, v] = pc(),
          y = g.current,
          b = wo(f),
          w = (0, t.useRef)(null),
          x = (0, t.useRef)(!1),
          k = (0, t.useContext)(Xr),
          E = (0, t.useCallback)(
            function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null == t
                    ? void 0
                    : t.type;
              d(e, { originalEvent: t, source: n });
            },
            [d],
          ),
          S = io((e, t) => {
            null == a || a(e, t),
              E(!1, t, "select"),
              t.isPropagationStopped() || null == k || k(e, t);
          }),
          C = (0, t.useMemo)(
            () => ({
              toggle: E,
              placement: s,
              show: f,
              menuElement: m,
              toggleElement: y,
              setMenu: h,
              setToggle: v,
            }),
            [E, s, f, m, y, h, v],
          );
        m && b && !f && (x.current = m.contains(m.ownerDocument.activeElement));
        const N = io(() => {
            y && y.focus && y.focus();
          }),
          O = io(() => {
            const e = w.current;
            let t = l;
            if (
              (null == t && (t = !(!p.current || !ac(p.current)) && "keyboard"),
              !1 === t || ("keyboard" === t && !/^key.+$/.test(e)))
            )
              return;
            const n = ci(p.current, i)[0];
            n && n.focus && n.focus();
          });
        (0, t.useEffect)(() => {
          f ? O() : x.current && ((x.current = !1), N());
        }, [f, x, N, O]),
          (0, t.useEffect)(() => {
            w.current = null;
          });
        const j = (e, t) => {
          if (!p.current) return null;
          const n = ci(p.current, i);
          let r = n.indexOf(e) + t;
          return (r = Math.max(0, Math.min(r, n.length))), n[r];
        };
        return (
          (function (e, n, r) {
            let a =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const o = io(r);
            (0, t.useEffect)(() => {
              const t = "function" === typeof e ? e() : e;
              return (
                t.addEventListener(n, o, a),
                () => t.removeEventListener(n, o, a)
              );
            }, [e]);
          })(
            (0, t.useCallback)(() => u.document, [u]),
            "keydown",
            (e) => {
              var t, n;
              const { key: r } = e,
                a = e.target,
                o = null == (t = p.current) ? void 0 : t.contains(a),
                i = null == (n = g.current) ? void 0 : n.contains(a);
              if (
                /input|textarea/i.test(a.tagName) &&
                (" " === r ||
                  ("Escape" !== r && o) ||
                  ("Escape" === r && "search" === a.type))
              )
                return;
              if (!o && !i) return;
              if ("Tab" === r && (!p.current || !f)) return;
              w.current = e.type;
              const l = { originalEvent: e, source: e.type };
              switch (r) {
                case "ArrowUp": {
                  const t = j(a, -1);
                  return t && t.focus && t.focus(), void e.preventDefault();
                }
                case "ArrowDown":
                  if ((e.preventDefault(), f)) {
                    const e = j(a, 1);
                    e && e.focus && e.focus();
                  } else d(!0, l);
                  return;
                case "Tab":
                  Fa(
                    a.ownerDocument,
                    "keyup",
                    (e) => {
                      var t;
                      (("Tab" !== e.key || e.target) &&
                        null != (t = p.current) &&
                        t.contains(e.target)) ||
                        d(!1, l);
                    },
                    { once: !0 },
                  );
                  break;
                case "Escape":
                  "Escape" === r && (e.preventDefault(), e.stopPropagation()),
                    d(!1, l);
              }
            },
          ),
          (0, $r.jsx)(Xr.Provider, {
            value: S,
            children: (0, $r.jsx)(cl.Provider, { value: C, children: c }),
          })
        );
      }
      (hc.displayName = "Dropdown"),
        (hc.Menu = Ks),
        (hc.Toggle = sc),
        (hc.Item = dc);
      const mc = hc,
        gc = t.createContext({});
      gc.displayName = "DropdownContext";
      const vc = gc,
        yc = t.forwardRef((e, t) => {
          let {
            className: n,
            bsPrefix: r,
            as: a = "hr",
            role: o = "separator",
            ...i
          } = e;
          return (
            (r = ua(r, "dropdown-divider")),
            (0, $r.jsx)(a, { ref: t, className: Qr()(n, r), role: o, ...i })
          );
        });
      yc.displayName = "DropdownDivider";
      const bc = yc,
        wc = t.forwardRef((e, t) => {
          let {
            className: n,
            bsPrefix: r,
            as: a = "div",
            role: o = "heading",
            ...i
          } = e;
          return (
            (r = ua(r, "dropdown-header")),
            (0, $r.jsx)(a, { ref: t, className: Qr()(n, r), role: o, ...i })
          );
        });
      wc.displayName = "DropdownHeader";
      const xc = wc,
        kc = t.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            className: r,
            eventKey: a,
            disabled: o = !1,
            onClick: i,
            active: l,
            as: s = Gi,
            ...c
          } = e;
          const u = ua(n, "dropdown-item"),
            [f, d] = uc({
              key: a,
              href: c.href,
              disabled: o,
              onClick: i,
              active: l,
            });
          return (0, $r.jsx)(s, {
            ...c,
            ...f,
            ref: t,
            className: Qr()(r, u, d.isActive && "active", o && "disabled"),
          });
        });
      kc.displayName = "DropdownItem";
      const Ec = kc,
        Sc = t.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = "span", ...o } = e;
          return (
            (r = ua(r, "dropdown-item-text")),
            (0, $r.jsx)(a, { ref: t, className: Qr()(n, r), ...o })
          );
        });
      Sc.displayName = "DropdownItemText";
      const Cc = Sc,
        Nc = t.createContext(null);
      Nc.displayName = "InputGroupContext";
      const Oc = Nc;
      function jc(e, t) {
        return e;
      }
      function Pc(e, t, n) {
        let r = e
          ? n
            ? "bottom-start"
            : "bottom-end"
          : n
            ? "bottom-end"
            : "bottom-start";
        return (
          "up" === t
            ? (r = e
                ? n
                  ? "top-start"
                  : "top-end"
                : n
                  ? "top-end"
                  : "top-start")
            : "end" === t
              ? (r = e
                  ? n
                    ? "left-end"
                    : "right-end"
                  : n
                    ? "left-start"
                    : "right-start")
              : "start" === t
                ? (r = e
                    ? n
                      ? "right-end"
                      : "left-end"
                    : n
                      ? "right-start"
                      : "left-start")
                : "down-centered" === t
                  ? (r = "bottom")
                  : "up-centered" === t && (r = "top"),
          r
        );
      }
      const Rc = t.forwardRef((e, n) => {
        let {
            bsPrefix: r,
            className: a,
            align: o,
            rootCloseEvent: i,
            flip: l = !0,
            show: s,
            renderOnMount: c,
            as: u = "div",
            popperConfig: f,
            variant: d,
            ...p
          } = e,
          h = !1;
        const m = (0, t.useContext)(no),
          g = ua(r, "dropdown-menu"),
          { align: v, drop: y, isRTL: b } = (0, t.useContext)(vc);
        o = o || v;
        const w = (0, t.useContext)(Oc),
          x = [];
        if (o)
          if ("object" === typeof o) {
            const e = Object.keys(o);
            if (e.length) {
              const t = e[0],
                n = o[t];
              (h = "start" === n), x.push(`${g}-${t}-${n}`);
            }
          } else "end" === o && (h = !0);
        const k = Pc(h, y, b),
          [E, { hasShown: S, popper: C, show: N, toggle: O }] = Vs({
            flip: l,
            rootCloseEvent: i,
            show: s,
            usePopper: !m && 0 === x.length,
            offset: [0, 2],
            popperConfig: f,
            placement: k,
          });
        if (
          ((E.ref = Ka(jc(n), E.ref)),
          uo(() => {
            N && (null == C || C.update());
          }, [N]),
          !S && !c && !w)
        )
          return null;
        "string" !== typeof u &&
          ((E.show = N),
          (E.close = () => (null == O ? void 0 : O(!1))),
          (E.align = o));
        let j = p.style;
        return (
          null != C &&
            C.placement &&
            ((j = { ...p.style, ...E.style }),
            (p["x-placement"] = C.placement)),
          (0, $r.jsx)(u, {
            ...p,
            ...E,
            style: j,
            ...((x.length || m) && { "data-bs-popper": "static" }),
            className: Qr()(
              a,
              g,
              N && "show",
              h && `${g}-end`,
              d && `${g}-${d}`,
              ...x,
            ),
          })
        );
      });
      Rc.displayName = "DropdownMenu";
      const Tc = Rc,
        _c = t.forwardRef((e, t) => {
          let {
            as: n,
            bsPrefix: r,
            variant: a = "primary",
            size: o,
            active: i = !1,
            disabled: l = !1,
            className: s,
            ...c
          } = e;
          const u = ua(r, "btn"),
            [f, { tagName: d }] = Di({ tagName: n, disabled: l, ...c }),
            p = d;
          return (0, $r.jsx)(p, {
            ...f,
            ...c,
            ref: t,
            disabled: l,
            className: Qr()(
              s,
              u,
              i && "active",
              a && `${u}-${a}`,
              o && `${u}-${o}`,
              c.href && l && "disabled",
            ),
          });
        });
      _c.displayName = "Button";
      const Lc = _c,
        Dc = t.forwardRef((e, n) => {
          let {
            bsPrefix: r,
            split: a,
            className: o,
            childBsPrefix: i,
            as: l = Lc,
            ...s
          } = e;
          const c = ua(r, "dropdown-toggle"),
            u = (0, t.useContext)(cl);
          void 0 !== i && (s.bsPrefix = i);
          const [f] = ic();
          return (
            (f.ref = Ka(f.ref, jc(n))),
            (0, $r.jsx)(l, {
              className: Qr()(
                o,
                c,
                a && `${c}-split`,
                (null == u ? void 0 : u.show) && "show",
              ),
              ...f,
              ...s,
            })
          );
        });
      Dc.displayName = "DropdownToggle";
      const Ac = Dc,
        Mc = t.forwardRef((e, n) => {
          const {
              bsPrefix: r,
              drop: a = "down",
              show: o,
              className: i,
              align: l = "start",
              onSelect: s,
              onToggle: c,
              focusFirstItemOnShow: u,
              as: f = "div",
              navbar: d,
              autoClose: p = !0,
              ...h
            } = ta(e, { show: "onToggle" }),
            m = (0, t.useContext)(Oc),
            g = ua(r, "dropdown"),
            v = (function () {
              const { dir: e } = (0, t.useContext)(la);
              return "rtl" === e;
            })(),
            y = io((e, t) => {
              var n;
              var r;
              ((null == (n = t.originalEvent) || null == (n = n.target)
                ? void 0
                : n.classList.contains("dropdown-toggle")) &&
                "mousedown" === t.source) ||
                (t.originalEvent.currentTarget !== document ||
                  ("keydown" === t.source &&
                    "Escape" !== t.originalEvent.key) ||
                  (t.source = "rootClose"),
                (r = t.source),
                (!1 === p
                  ? "click" === r
                  : "inside" === p
                    ? "rootClose" !== r
                    : "outside" !== p || "select" !== r) &&
                  (null == c || c(e, t)));
            }),
            b = Pc("end" === l, a, v),
            w = (0, t.useMemo)(
              () => ({ align: l, drop: a, isRTL: v }),
              [l, a, v],
            ),
            x = {
              down: g,
              "down-centered": `${g}-center`,
              up: "dropup",
              "up-centered": "dropup-center dropup",
              end: "dropend",
              start: "dropstart",
            };
          return (0, $r.jsx)(vc.Provider, {
            value: w,
            children: (0, $r.jsx)(mc, {
              placement: b,
              show: o,
              onSelect: s,
              onToggle: y,
              focusFirstItemOnShow: u,
              itemSelector: `.${g}-item:not(.disabled):not(:disabled)`,
              children: m
                ? h.children
                : (0, $r.jsx)(f, {
                    ...h,
                    ref: n,
                    className: Qr()(i, o && "show", x[a]),
                  }),
            }),
          });
        });
      Mc.displayName = "Dropdown";
      const Fc = Object.assign(Mc, {
          Toggle: Ac,
          Menu: Tc,
          Item: Ec,
          ItemText: Cc,
          Divider: bc,
          Header: xc,
        }),
        zc = t.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            size: r,
            vertical: a = !1,
            className: o,
            role: i = "group",
            as: l = "div",
            ...s
          } = e;
          const c = ua(n, "btn-group");
          let u = c;
          return (
            a && (u = `${c}-vertical`),
            (0, $r.jsx)(l, {
              ...s,
              ref: t,
              role: i,
              className: Qr()(o, u, r && `${c}-${r}`),
            })
          );
        });
      zc.displayName = "ButtonGroup";
      const Ic = zc,
        Uc = async () => {
          try {
            const e = await fetch("/api/userDecks");
            if (!e.ok) {
              throw new Error(`${e.status} (${e.statusText})`);
            }
            const t = await e.json();
            return t.decks.map((e) => ({ ...e, id: parseInt(e.id, 10) }));
          } catch (e) {
            console.error("Error in fetch!"), console.error(e.message);
          }
        },
        Bc = async (e) => {
          try {
            const t = await fetch(`/api/userDecks/${e}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            });
            if (!t.ok) throw new Error("Failed to delete deck");
            return await t.json();
          } catch (t) {
            throw (console.error("Error deleting deck:", t), t);
          }
        },
        $c = async (e, t) => {
          try {
            const n = await fetch(`/api/userDecks/${e}/visibility`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ isPublic: t }),
            });
            if (!n.ok) throw new Error("Failed to update deck visibility");
            return await n.json();
          } catch (n) {
            throw (console.error("Error updating deck visibility:", n), n);
          }
        },
        Hc = () => {
          const [e, n] = (0, t.useState)([]),
            [r, a] = (0, t.useState)(1),
            [o] = (0, t.useState)(9),
            i = kr();
          (0, t.useEffect)(() => {
            Uc().then((e) => {
              n(e);
            });
          }, []);
          const l = r * o,
            s = l - o,
            c = e.slice(s, l),
            u =
              c &&
              c.map((t) =>
                (0, $r.jsx)(
                  "div",
                  {
                    className: "col-md-4 mb-4",
                    children: (0, $r.jsxs)("div", {
                      className: "card h-100 d-flex flex-column clickable-card",
                      style: {
                        position: "relative",
                        backgroundColor: "#ffe1ff",
                        color: "#433878",
                        borderColor: "#433878",
                        cursor: "pointer",
                      },
                      onClick: () => {
                        return (e = t.id), void i(`/decks/${e}/flashcards`);
                        var e;
                      },
                      children: [
                        (0, $r.jsx)("div", {
                          style: {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            zIndex: "1",
                          },
                          children: (0, $r.jsxs)(Fc, {
                            as: Ic,
                            align: "end",
                            onClick: (e) => e.stopPropagation(),
                            "data-testid": "kebab-menu-deck-options",
                            children: [
                              (0, $r.jsx)(Fc.Toggle, {
                                variant: "link",
                                className: "p-0",
                                style: {
                                  textDecoration: "none",
                                  border: "none",
                                  backgroundColor: "transparent",
                                  color: "#433878",
                                },
                                children: (0, $r.jsx)("span", {
                                  style: {
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                  },
                                  children: "\u22ee",
                                }),
                              }),
                              (0, $r.jsxs)(Fc.Menu, {
                                children: [
                                  (0, $r.jsx)(Fc.Item, {
                                    onClick: () => {
                                      return (
                                        (e = t.id), void i(`/decks/${e}/edit`)
                                      );
                                      var e;
                                    },
                                    children: "Edit",
                                  }),
                                  (0, $r.jsx)(Fc.Item, {
                                    onClick: () =>
                                      (async (t) => {
                                        if (
                                          window.confirm(
                                            "Are you sure you want to delete this deck?",
                                          )
                                        )
                                          try {
                                            await Bc(t),
                                              n(e.filter((e) => e.id !== t));
                                          } catch (r) {
                                            console.error(
                                              "Error deleting deck:",
                                              r,
                                            ),
                                              alert(
                                                "Failed to delete deck. Please try again.",
                                              );
                                          }
                                      })(t.id),
                                    children: "Delete",
                                  }),
                                  (0, $r.jsx)(Fc.Item, {
                                    onClick: () =>
                                      (async (e, t) => {
                                        if (
                                          window.confirm(
                                            "Are you sure you want to change the visibility of this deck?",
                                          )
                                        )
                                          try {
                                            await $c(e, !t),
                                              Uc().then((e) => {
                                                n(e);
                                              });
                                          } catch (r) {
                                            console.error(
                                              "Error toggling visibility:",
                                              r,
                                            ),
                                              alert(
                                                "Failed to update deck visibility. Please try again.",
                                              );
                                          }
                                      })(t.id, t.isPublic),
                                    children: t.isPublic
                                      ? "Set to Private"
                                      : "Set to Public",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, $r.jsxs)("div", {
                          className: "card-body d-flex flex-column flex-grow-1",
                          children: [
                            (0, $r.jsx)("h5", {
                              className: "card-title",
                              children: t.title,
                            }),
                            (0, $r.jsx)("div", {
                              className: "flex-grow-1",
                              children: (0, $r.jsx)("p", {
                                className: "card-text",
                                children:
                                  t.description || "No description available",
                              }),
                            }),
                            (0, $r.jsx)("div", {
                              className: "mt-3",
                              children: (0, $r.jsx)("span", {
                                className: "badge bg-secondary",
                                children: t.isPublic ? "Public" : "Private",
                              }),
                            }),
                          ],
                        }),
                        (0, $r.jsx)("div", {
                          className:
                            "card-footer d-flex justify-content-between",
                          children: (0, $r.jsx)("button", {
                            className: "btn btn-secondary",
                            onClick: (e) => {
                              var n;
                              e.stopPropagation(),
                                (n = t.id),
                                i(`/decks/${n}/add-flashcard`);
                            },
                            style: {
                              backgroundColor: "#433878",
                              borderColor: "#433878",
                            },
                            children: "Add Flashcard",
                          }),
                        }),
                      ],
                    }),
                  },
                  t.id,
                ),
              );
          return (0, $r.jsx)("div", {
            className: "container pt-4",
            children:
              e && e.length > 0
                ? (0, $r.jsxs)("div", {
                    children: [
                      (0, $r.jsx)("div", { className: "row", children: u }),
                      (0, $r.jsx)("div", {
                        className: "d-flex justify-content-center mt-4",
                        children: Array.from(
                          { length: Math.ceil(e.length / o) },
                          (e, t) =>
                            (0, $r.jsx)(
                              "button",
                              {
                                onClick: () => a(t + 1),
                                className:
                                  "btn mx-1 " + (r === t + 1 ? "active" : ""),
                                style: {
                                  backgroundColor: "#433878",
                                  color: "white",
                                  borderColor: "#433878",
                                },
                                children: t + 1,
                              },
                              t + 1,
                            ),
                        ),
                      }),
                    ],
                  })
                : (0, $r.jsx)("div", {
                    className: "alert alert-info text-center mt-4",
                    children: "You don't have any decks yet.",
                  }),
          });
        },
        Wc = async (e) => {
          try {
            const t = await fetch(`/api/flashcards?deckId=${e}`);
            if (!t.status) {
              throw new Error(`${t.status} (${t.statusText})`);
            }
            const n = await t.json();
            console.log("responseData", n);
            const { deckTitle: r, flashcards: a } = n;
            return {
              deckTitle: r,
              flashcards: a.map((e) => ({ ...e, id: parseInt(e.id, 10) })),
            };
          } catch (t) {
            console.error("Error in fetch!"), console.error(t.message);
          }
        },
        Vc = async (e) => {
          const t = e;
          try {
            const e = await fetch(`/api/flashcards/${t}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            });
            if (!e.ok) throw new Error("Failed to delete flashcard");
            return await e.json();
          } catch (n) {
            throw (console.error("Error deleting flashcard:", n), n);
          }
        },
        qc = (e) => {
          const [n, r] = (0, t.useState)([]),
            [a, o] = (0, t.useState)(""),
            { deckId: i } = Er(),
            [l, s] = (0, t.useState)(0),
            [c, u] = (0, t.useState)(!1),
            f = kr();
          (0, t.useEffect)(() => {
            Wc(i).then((e) => {
              let { deckTitle: t, flashcards: n } = e;
              o(t), r(n);
            });
          }, [i]);
          if (!n || 0 === n.length)
            return (0, $r.jsx)("p", {
              className: "text-center pt-5",
              children: "No flashcards in this deck yet.",
            });
          const d = n[l];
          return (0, $r.jsxs)("div", {
            className: "text-center pt-5",
            children: [
              (0, $r.jsxs)("h2", { children: ["Flashcards for ", a] }),
              (0, $r.jsxs)("div", {
                className: "card flashcard " + (c ? "flipped" : ""),
                onClick: () => {
                  u((e) => !e);
                },
                style: { position: "relative" },
                children: [
                  (0, $r.jsxs)("div", {
                    className: "card-front",
                    children: [
                      (0, $r.jsx)("div", {
                        style: {
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          zIndex: "1",
                        },
                        children: (0, $r.jsxs)(Fc, {
                          as: Ic,
                          align: "end",
                          onClick: (e) => e.stopPropagation(),
                          children: [
                            (0, $r.jsx)(Fc.Toggle, {
                              variant: "link",
                              className: "p-0",
                              style: {
                                textDecoration: "none",
                                border: "none",
                                backgroundColor: "transparent",
                                color: "#433878",
                              },
                              children: (0, $r.jsx)("span", {
                                style: {
                                  fontSize: "1.5rem",
                                  fontWeight: "bold",
                                },
                                children: "\u22ee",
                              }),
                            }),
                            (0, $r.jsxs)(Fc.Menu, {
                              children: [
                                (0, $r.jsx)(Fc.Item, {
                                  onClick: () => {
                                    var e;
                                    const t =
                                      null === (e = n[l]) || void 0 === e
                                        ? void 0
                                        : e.id;
                                    f(`/decks/${i}/flashcards/${t}/edit`);
                                  },
                                  children: "Edit",
                                }),
                                (0, $r.jsx)(Fc.Item, {
                                  onClick: async () => {
                                    var e;
                                    const t =
                                      null === (e = n[l]) || void 0 === e
                                        ? void 0
                                        : e.id;
                                    if (
                                      window.confirm(
                                        "Are you sure you want to delete this flashcard?",
                                      )
                                    )
                                      try {
                                        await Vc(t);
                                        const e = n.filter((e, t) => t !== l);
                                        r(e),
                                          l >= e.length && e.length > 0
                                            ? s(e.length - 1)
                                            : 0 === e.length && s(0);
                                      } catch (a) {
                                        console.error(
                                          "Failed to delete flashcard:",
                                          a,
                                        );
                                      }
                                  },
                                  children: "Delete",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, $r.jsx)("p", { children: d.question }),
                    ],
                  }),
                  (0, $r.jsx)("div", {
                    className: "card-back",
                    children: (0, $r.jsx)("p", { children: d.answer }),
                  }),
                ],
              }),
              (0, $r.jsxs)("div", {
                className: "mt-3",
                children: [
                  (0, $r.jsx)("button", {
                    className: "btn btn-custom-secondary me-2",
                    onClick: () => {
                      l > 0 && (s(l - 1), u(!1));
                    },
                    disabled: 0 === l,
                    children: "Previous",
                  }),
                  (0, $r.jsx)("button", {
                    className: "btn btn-custom-secondary ms-2",
                    onClick: () => {
                      l < n.length - 1 && (s(l + 1), u(!1));
                    },
                    disabled: l === n.length - 1,
                    children: "Next",
                  }),
                ],
              }),
              (0, $r.jsxs)("p", {
                className: "mt-2",
                children: ["Flashcard ", l + 1, " of ", n.length],
              }),
            ],
          });
        },
        Kc = async (e) => {
          try {
            const t = await fetch("/api/userDecks", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            });
            if (!t.ok) throw new Error("Failed to create deck");
            return await t.json();
          } catch (t) {
            throw (console.error("Error posting deck:", t), t);
          }
        },
        Qc = async (e, t) => {
          try {
            const n = await fetch(`/api/userDecks/${e}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(t),
            });
            if (!n.ok) {
              throw new Error(`${n.status} (${n.statusText})`);
            }
            const r = await n.json();
            return { ...r, id: parseInt(r.id, 10) };
          } catch (n) {
            console.error("Error in update!"), console.error(n.message);
          }
        },
        Yc = async (e) => {
          try {
            const t = await fetch(`/api/decks/${e}`);
            if (!t.ok) {
              throw new Error(`${t.status} (${t.statusText})`);
            }
            const n = await t.json();
            return { ...n, id: parseInt(n.id, 10) };
          } catch (t) {
            console.error("Error in fetch!"), console.error(t.message);
          }
        },
        Xc = async () => {
          try {
            const e = await fetch("/api/categories");
            if (!e.ok) {
              throw new Error(`${e.status} (${e.statusText})`);
            }
            const t = await e.json();
            return t.categories.map((e) => ({ ...e, id: parseInt(e.id, 10) }));
          } catch (e) {
            return (
              console.error("Error fetching categories!"),
              console.error(e.message),
              []
            );
          }
        },
        Jc = (e) => {
          let { isEditing: n = !1 } = e;
          const [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(""),
            [l, s] = (0, t.useState)(!1),
            [c, u] = (0, t.useState)(""),
            [f, d] = (0, t.useState)([]),
            [p, h] = (0, t.useState)(""),
            { isUserFetched: m, currentUser: g } = (0, t.useContext)(Hr),
            v = kr(),
            { deckId: y } = Er(),
            b = g ? g.id : 0;
          (0, t.useEffect)(() => {
            (async () => {
              const e = await Xc();
              d(e);
            })(),
              (async () => {
                if (n && y)
                  try {
                    const e = await Yc(y);
                    a(e.title),
                      i(e.description),
                      s(e.isPublic),
                      u(e.categoryId);
                  } catch (p) {
                    console.error("Error fetching deck:", p.message),
                      h("Failed to load the deck. Please try again.");
                  }
              })();
          }, [n, y]);
          return (0, $r.jsxs)("div", {
            className: "container mt-5",
            children: [
              (0, $r.jsx)("h2", { children: n ? "Edit Deck" : "Create Deck" }),
              p &&
                (0, $r.jsx)("div", {
                  className: "alert alert-danger",
                  children: p,
                }),
              (0, $r.jsxs)("form", {
                onSubmit: async (e) => {
                  e.preventDefault();
                  const t = {
                    title: r,
                    description: o,
                    userId: b,
                    isPublic: l,
                    categoryId: c,
                  };
                  try {
                    n
                      ? (await Qc(y, t), v("/decks"))
                      : (await Kc(t), v("/decks"));
                  } catch (p) {
                    h(
                      n
                        ? "Failed to update deck. Please try again."
                        : "Failed to create deck. Please try again.",
                    );
                  }
                },
                className: "mt-4",
                children: [
                  (0, $r.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, $r.jsx)("label", {
                        htmlFor: "category",
                        className: "form-label",
                        children: "Category",
                      }),
                      (0, $r.jsxs)("select", {
                        className: "form-select",
                        id: "category",
                        value: c,
                        onChange: (e) => u(e.target.value),
                        required: !0,
                        disabled: n,
                        children: [
                          (0, $r.jsx)("option", {
                            value: "",
                            children: "Select a category",
                          }),
                          f.map((e) =>
                            (0, $r.jsx)(
                              "option",
                              { value: e.id, children: e.name },
                              e.id,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, $r.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, $r.jsx)("label", {
                        htmlFor: "title",
                        className: "form-label",
                        children: "Deck Title",
                      }),
                      (0, $r.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        id: "title",
                        value: r,
                        onChange: (e) => a(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, $r.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, $r.jsx)("label", {
                        htmlFor: "description",
                        className: "form-label",
                        children: "Description",
                      }),
                      (0, $r.jsx)("textarea", {
                        className: "form-control",
                        id: "description",
                        rows: "3",
                        value: o,
                        onChange: (e) => i(e.target.value),
                      }),
                    ],
                  }),
                  (0, $r.jsxs)("div", {
                    className: "mb-3 form-check",
                    children: [
                      (0, $r.jsx)("input", {
                        type: "checkbox",
                        className: "form-check-input",
                        id: "isPublic",
                        checked: l,
                        onChange: () => s(!l),
                      }),
                      (0, $r.jsx)("label", {
                        className: "form-check-label",
                        htmlFor: "isPublic",
                        children: "Make this deck public",
                      }),
                    ],
                  }),
                  (0, $r.jsx)("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    style: {
                      backgroundColor: "#433878",
                      borderColor: "#433878",
                    },
                    children: n ? "Update Deck" : "Create Deck",
                  }),
                ],
              }),
            ],
          });
        },
        Gc = () => {};
      let Zc = {},
        eu = {},
        tu = null,
        nu = { mark: Gc, measure: Gc };
      try {
        "undefined" !== typeof window && (Zc = window),
          "undefined" !== typeof document && (eu = document),
          "undefined" !== typeof MutationObserver && (tu = MutationObserver),
          "undefined" !== typeof performance && (nu = performance);
      } catch (Jp) {}
      const { userAgent: ru = "" } = Zc.navigator || {},
        au = Zc,
        ou = eu,
        iu = tu,
        lu = nu,
        su =
          (au.document,
          !!ou.documentElement &&
            !!ou.head &&
            "function" === typeof ou.addEventListener &&
            "function" === typeof ou.createElement),
        cu = ~ru.indexOf("MSIE") || ~ru.indexOf("Trident/");
      var uu = "classic",
        fu = "duotone",
        du = "sharp",
        pu = "sharp-duotone",
        hu = [uu, fu, du, pu],
        mu = { fak: "kit", "fa-kit": "kit" },
        gu = { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
        vu = {
          classic: {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
          },
          sharp: {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
            fast: "thin",
            "fa-thin": "thin",
          },
          "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
        },
        yu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        bu = yu.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        wu = {
          GROUP: "duotone-group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        xu = [
          ...Object.keys({
            classic: ["fas", "far", "fal", "fat"],
            sharp: ["fass", "fasr", "fasl", "fast"],
            "sharp-duotone": ["fasds"],
          }),
          "solid",
          "regular",
          "light",
          "thin",
          "duotone",
          "brands",
          "2xs",
          "xs",
          "sm",
          "lg",
          "xl",
          "2xl",
          "beat",
          "border",
          "fade",
          "beat-fade",
          "bounce",
          "flip-both",
          "flip-horizontal",
          "flip-vertical",
          "flip",
          "fw",
          "inverse",
          "layers-counter",
          "layers-text",
          "layers",
          "li",
          "pull-left",
          "pull-right",
          "pulse",
          "rotate-180",
          "rotate-270",
          "rotate-90",
          "rotate-by",
          "shake",
          "spin-pulse",
          "spin-reverse",
          "spin",
          "stack-1x",
          "stack-2x",
          "stack",
          "ul",
          wu.GROUP,
          wu.SWAP_OPACITY,
          wu.PRIMARY,
          wu.SECONDARY,
        ]
          .concat(yu.map((e) => "".concat(e, "x")))
          .concat(bu.map((e) => "w-".concat(e))),
        ku = { kit: "fak" },
        Eu = { "kit-duotone": "fakd" };
      const Su = "___FONT_AWESOME___",
        Cu = 16,
        Nu = "svg-inline--fa",
        Ou = "data-fa-i2svg",
        ju = "data-fa-pseudo-element",
        Pu = "data-prefix",
        Ru = "data-icon",
        Tu = "fontawesome-i2svg",
        _u = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        Lu = (() => {
          try {
            return !0;
          } catch (e) {
            return !1;
          }
        })(),
        Du = [uu, du, pu];
      function Au(e) {
        return new Proxy(e, { get: (e, t) => (t in e ? e[t] : e[uu]) });
      }
      const Mu = { ...vu };
      Mu[uu] = { ...vu[uu], ...mu, ...gu };
      const Fu = Au(Mu),
        zu = {
          classic: {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
          },
          sharp: {
            solid: "fass",
            regular: "fasr",
            light: "fasl",
            thin: "fast",
          },
          "sharp-duotone": { solid: "fasds" },
        };
      zu[uu] = { ...zu[uu], ...ku, ...Eu };
      const Iu = Au(zu),
        Uu = {
          classic: {
            fab: "fa-brands",
            fad: "fa-duotone",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
          },
          sharp: {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light",
            fast: "fa-thin",
          },
          "sharp-duotone": { fasds: "fa-solid" },
        };
      Uu[uu] = { ...Uu[uu], fak: "fa-kit" };
      const Bu = Au(Uu),
        $u = {
          classic: {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat",
          },
          sharp: {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl",
            "fa-thin": "fast",
          },
          "sharp-duotone": { "fa-solid": "fasds" },
        };
      $u[uu] = { ...$u[uu], "fa-kit": "fak" };
      const Hu = Au($u),
        Wu = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
        Vu = "fa-layers-text",
        qu =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
        Ku =
          (Au({
            classic: {
              900: "fas",
              400: "far",
              normal: "far",
              300: "fal",
              100: "fat",
            },
            sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
            "sharp-duotone": { 900: "fasds" },
          }),
          [
            "class",
            "data-prefix",
            "data-icon",
            "data-fa-transform",
            "data-fa-mask",
          ]),
        Qu = wu,
        Yu = new Set();
      Object.keys(Iu[uu]).map(Yu.add.bind(Yu)),
        Object.keys(Iu[du]).map(Yu.add.bind(Yu)),
        Object.keys(Iu[pu]).map(Yu.add.bind(Yu));
      const Xu = ["kit", ...xu],
        Ju = au.FontAwesomeConfig || {};
      if (ou && "function" === typeof ou.querySelector) {
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-css-prefix", "cssPrefix"],
          ["data-family-default", "familyDefault"],
          ["data-style-default", "styleDefault"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach((e) => {
          let [t, n] = e;
          const r = (function (e) {
            return "" === e || ("false" !== e && ("true" === e || e));
          })(
            (function (e) {
              var t = ou.querySelector("script[" + e + "]");
              if (t) return t.getAttribute(e);
            })(t),
          );
          void 0 !== r && null !== r && (Ju[n] = r);
        });
      }
      const Gu = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: "fa",
        replacementClass: Nu,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      Ju.familyPrefix && (Ju.cssPrefix = Ju.familyPrefix);
      const Zu = { ...Gu, ...Ju };
      Zu.autoReplaceSvg || (Zu.observeMutations = !1);
      const ef = {};
      Object.keys(Gu).forEach((e) => {
        Object.defineProperty(ef, e, {
          enumerable: !0,
          set: function (t) {
            (Zu[e] = t), tf.forEach((e) => e(ef));
          },
          get: function () {
            return Zu[e];
          },
        });
      }),
        Object.defineProperty(ef, "familyPrefix", {
          enumerable: !0,
          set: function (e) {
            (Zu.cssPrefix = e), tf.forEach((e) => e(ef));
          },
          get: function () {
            return Zu.cssPrefix;
          },
        }),
        (au.FontAwesomeConfig = ef);
      const tf = [];
      const nf = Cu,
        rf = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function af() {
        let e = 12,
          t = "";
        for (; e-- > 0; )
          t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            (62 * Math.random()) | 0
          ];
        return t;
      }
      function of(e) {
        const t = [];
        for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
        return t;
      }
      function lf(e) {
        return e.classList
          ? of(e.classList)
          : (e.getAttribute("class") || "").split(" ").filter((e) => e);
      }
      function sf(e) {
        return ""
          .concat(e)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function cf(e) {
        return Object.keys(e || {}).reduce(
          (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
          "",
        );
      }
      function uf(e) {
        return (
          e.size !== rf.size ||
          e.x !== rf.x ||
          e.y !== rf.y ||
          e.rotate !== rf.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      function ff() {
        const e = "fa",
          t = Nu,
          n = ef.cssPrefix,
          r = ef.replacementClass;
        let a =
          ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
        if (n !== e || r !== t) {
          const o = new RegExp("\\.".concat(e, "\\-"), "g"),
            i = new RegExp("\\--".concat(e, "\\-"), "g"),
            l = new RegExp("\\.".concat(t), "g");
          a = a
            .replace(o, ".".concat(n, "-"))
            .replace(i, "--".concat(n, "-"))
            .replace(l, ".".concat(r));
        }
        return a;
      }
      let df = !1;
      function pf() {
        ef.autoAddCss &&
          !df &&
          (!(function (e) {
            if (!e || !su) return;
            const t = ou.createElement("style");
            t.setAttribute("type", "text/css"), (t.innerHTML = e);
            const n = ou.head.childNodes;
            let r = null;
            for (let a = n.length - 1; a > -1; a--) {
              const e = n[a],
                t = (e.tagName || "").toUpperCase();
              ["STYLE", "LINK"].indexOf(t) > -1 && (r = e);
            }
            ou.head.insertBefore(t, r);
          })(ff()),
          (df = !0));
      }
      var hf = {
        mixout: () => ({ dom: { css: ff, insertCss: pf } }),
        hooks: () => ({
          beforeDOMElementCreation() {
            pf();
          },
          beforeI2svg() {
            pf();
          },
        }),
      };
      const mf = au || {};
      mf[Su] || (mf[Su] = {}),
        mf[Su].styles || (mf[Su].styles = {}),
        mf[Su].hooks || (mf[Su].hooks = {}),
        mf[Su].shims || (mf[Su].shims = []);
      var gf = mf[Su];
      const vf = [],
        yf = function () {
          ou.removeEventListener("DOMContentLoaded", yf),
            (bf = 1),
            vf.map((e) => e());
        };
      let bf = !1;
      function wf(e) {
        const { tag: t, attributes: n = {}, children: r = [] } = e;
        return "string" === typeof e
          ? sf(e)
          : "<"
              .concat(t, " ")
              .concat(
                (function (e) {
                  return Object.keys(e || {})
                    .reduce(
                      (t, n) => t + "".concat(n, '="').concat(sf(e[n]), '" '),
                      "",
                    )
                    .trim();
                })(n),
                ">",
              )
              .concat(r.map(wf).join(""), "</")
              .concat(t, ">");
      }
      function xf(e, t, n) {
        if (e && e[t] && e[t][n])
          return { prefix: t, iconName: n, icon: e[t][n] };
      }
      su &&
        ((bf = (
          ou.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(ou.readyState)),
        bf || ou.addEventListener("DOMContentLoaded", yf));
      var kf = function (e, t, n, r) {
        var a,
          o,
          i,
          l = Object.keys(e),
          s = l.length,
          c =
            void 0 !== r
              ? (function (e, t) {
                  return function (n, r, a, o) {
                    return e.call(t, n, r, a, o);
                  };
                })(t, r)
              : t;
        for (
          void 0 === n ? ((a = 1), (i = e[l[0]])) : ((a = 0), (i = n));
          a < s;
          a++
        )
          i = c(i, e[(o = l[a])], o, e);
        return i;
      };
      function Ef(e) {
        const t = (function (e) {
          const t = [];
          let n = 0;
          const r = e.length;
          for (; n < r; ) {
            const a = e.charCodeAt(n++);
            if (a >= 55296 && a <= 56319 && n < r) {
              const r = e.charCodeAt(n++);
              56320 == (64512 & r)
                ? t.push(((1023 & a) << 10) + (1023 & r) + 65536)
                : (t.push(a), n--);
            } else t.push(a);
          }
          return t;
        })(e);
        return 1 === t.length ? t[0].toString(16) : null;
      }
      function Sf(e) {
        return Object.keys(e).reduce((t, n) => {
          const r = e[n];
          return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
        }, {});
      }
      function Cf(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { skipHooks: r = !1 } = n,
          a = Sf(t);
        "function" !== typeof gf.hooks.addPack || r
          ? (gf.styles[e] = { ...(gf.styles[e] || {}), ...a })
          : gf.hooks.addPack(e, Sf(t)),
          "fas" === e && Cf("fa", t);
      }
      const { styles: Nf, shims: Of } = gf,
        jf = {
          [uu]: Object.values(Bu[uu]),
          [du]: Object.values(Bu[du]),
          [pu]: Object.values(Bu[pu]),
        };
      let Pf = null,
        Rf = {},
        Tf = {},
        _f = {},
        Lf = {},
        Df = {};
      const Af = {
        [uu]: Object.keys(Fu[uu]),
        [du]: Object.keys(Fu[du]),
        [pu]: Object.keys(Fu[pu]),
      };
      function Mf(e, t) {
        const n = t.split("-"),
          r = n[0],
          a = n.slice(1).join("-");
        return r !== e || "" === a || ((o = a), ~Xu.indexOf(o)) ? null : a;
        var o;
      }
      const Ff = () => {
        const e = (e) => kf(Nf, (t, n, r) => ((t[r] = kf(n, e, {})), t), {});
        (Rf = e((e, t, n) => {
          if ((t[3] && (e[t[3]] = n), t[2])) {
            t[2]
              .filter((e) => "number" === typeof e)
              .forEach((t) => {
                e[t.toString(16)] = n;
              });
          }
          return e;
        })),
          (Tf = e((e, t, n) => {
            if (((e[n] = n), t[2])) {
              t[2]
                .filter((e) => "string" === typeof e)
                .forEach((t) => {
                  e[t] = n;
                });
            }
            return e;
          })),
          (Df = e((e, t, n) => {
            const r = t[2];
            return (
              (e[n] = n),
              r.forEach((t) => {
                e[t] = n;
              }),
              e
            );
          }));
        const t = "far" in Nf || ef.autoFetchSvg,
          n = kf(
            Of,
            (e, n) => {
              const r = n[0];
              let a = n[1];
              const o = n[2];
              return (
                "far" !== a || t || (a = "fas"),
                "string" === typeof r &&
                  (e.names[r] = { prefix: a, iconName: o }),
                "number" === typeof r &&
                  (e.unicodes[r.toString(16)] = { prefix: a, iconName: o }),
                e
              );
            },
            { names: {}, unicodes: {} },
          );
        (_f = n.names),
          (Lf = n.unicodes),
          (Pf = Hf(ef.styleDefault, { family: ef.familyDefault }));
      };
      var zf;
      function If(e, t) {
        return (Rf[e] || {})[t];
      }
      function Uf(e, t) {
        return (Df[e] || {})[t];
      }
      function Bf(e) {
        return _f[e] || { prefix: null, iconName: null };
      }
      function $f() {
        return Pf;
      }
      (zf = (e) => {
        Pf = Hf(e.styleDefault, { family: ef.familyDefault });
      }),
        tf.push(zf),
        Ff();
      function Hf(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { family: n = uu } = t,
          r = Fu[n][e],
          a = Iu[n][e] || Iu[n][r],
          o = e in gf.styles ? e : null;
        return a || o || null;
      }
      const Wf = {
        [uu]: Object.keys(Bu[uu]),
        [du]: Object.keys(Bu[du]),
        [pu]: Object.keys(Bu[pu]),
      };
      function Vf(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { skipLookups: n = !1 } = t,
          r = {
            [uu]: "".concat(ef.cssPrefix, "-").concat(uu),
            [du]: "".concat(ef.cssPrefix, "-").concat(du),
            [pu]: "".concat(ef.cssPrefix, "-").concat(pu),
          };
        let a = null,
          o = uu;
        const i = hu.filter((e) => e !== fu);
        i.forEach((t) => {
          (e.includes(r[t]) || e.some((e) => Wf[t].includes(e))) && (o = t);
        });
        const l = e.reduce(
          (e, t) => {
            const l = Mf(ef.cssPrefix, t);
            if (
              (Nf[t]
                ? ((t = jf[o].includes(t) ? Hu[o][t] : t),
                  (a = t),
                  (e.prefix = t))
                : Af[o].indexOf(t) > -1
                  ? ((a = t), (e.prefix = Hf(t, { family: o })))
                  : l
                    ? (e.iconName = l)
                    : t === ef.replacementClass ||
                      i.some((e) => t === r[e]) ||
                      e.rest.push(t),
              !n && e.prefix && e.iconName)
            ) {
              const t = "fa" === a ? Bf(e.iconName) : {},
                n = Uf(e.prefix, e.iconName);
              t.prefix && (a = null),
                (e.iconName = t.iconName || n || e.iconName),
                (e.prefix = t.prefix || e.prefix),
                "far" !== e.prefix ||
                  Nf.far ||
                  !Nf.fas ||
                  ef.autoFetchSvg ||
                  (e.prefix = "fas");
            }
            return e;
          },
          { prefix: null, iconName: null, rest: [] },
        );
        return (
          (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
          (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
          l.prefix ||
            o !== du ||
            (!Nf.fass && !ef.autoFetchSvg) ||
            ((l.prefix = "fass"),
            (l.iconName = Uf(l.prefix, l.iconName) || l.iconName)),
          l.prefix ||
            o !== pu ||
            (!Nf.fasds && !ef.autoFetchSvg) ||
            ((l.prefix = "fasds"),
            (l.iconName = Uf(l.prefix, l.iconName) || l.iconName)),
          ("fa" !== l.prefix && "fa" !== a) || (l.prefix = $f() || "fas"),
          l
        );
      }
      let qf = [],
        Kf = {};
      const Qf = {},
        Yf = Object.keys(Qf);
      function Xf(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          r[a - 2] = arguments[a];
        return (
          (Kf[e] || []).forEach((e) => {
            t = e.apply(null, [t, ...r]);
          }),
          t
        );
      }
      function Jf(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        (Kf[e] || []).forEach((e) => {
          e.apply(null, n);
        });
      }
      function Gf() {
        const e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1);
        return Qf[e] ? Qf[e].apply(null, t) : void 0;
      }
      function Zf(e) {
        "fa" === e.prefix && (e.prefix = "fas");
        let { iconName: t } = e;
        const n = e.prefix || $f();
        if (t)
          return (
            (t = Uf(n, t) || t), xf(ed.definitions, n, t) || xf(gf.styles, n, t)
          );
      }
      const ed = new (class {
          constructor() {
            this.definitions = {};
          }
          add() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const r = t.reduce(this._pullDefinitions, {});
            Object.keys(r).forEach((e) => {
              (this.definitions[e] = {
                ...(this.definitions[e] || {}),
                ...r[e],
              }),
                Cf(e, r[e]);
              const t = Bu[uu][e];
              t && Cf(t, r[e]), Ff();
            });
          }
          reset() {
            this.definitions = {};
          }
          _pullDefinitions(e, t) {
            const n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
            return (
              Object.keys(n).map((t) => {
                const { prefix: r, iconName: a, icon: o } = n[t],
                  i = o[2];
                e[r] || (e[r] = {}),
                  i.length > 0 &&
                    i.forEach((t) => {
                      "string" === typeof t && (e[r][t] = o);
                    }),
                  (e[r][a] = o);
              }),
              e
            );
          }
        })(),
        td = {
          i2svg: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return su
              ? (Jf("beforeI2svg", e),
                Gf("pseudoElements2svg", e),
                Gf("i2svg", e))
              : Promise.reject(
                  new Error("Operation requires a DOM of some kind."),
                );
          },
          watch: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const { autoReplaceSvgRoot: t } = e;
            var n;
            !1 === ef.autoReplaceSvg && (ef.autoReplaceSvg = !0),
              (ef.observeMutations = !0),
              (n = () => {
                ad({ autoReplaceSvgRoot: t }), Jf("watch", e);
              }),
              su && (bf ? setTimeout(n, 0) : vf.push(n));
          },
        },
        nd = {
          icon: (e) => {
            if (null === e) return null;
            if ("object" === typeof e && e.prefix && e.iconName)
              return {
                prefix: e.prefix,
                iconName: Uf(e.prefix, e.iconName) || e.iconName,
              };
            if (Array.isArray(e) && 2 === e.length) {
              const t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                n = Hf(e[0]);
              return { prefix: n, iconName: Uf(n, t) || t };
            }
            if (
              "string" === typeof e &&
              (e.indexOf("".concat(ef.cssPrefix, "-")) > -1 || e.match(Wu))
            ) {
              const t = Vf(e.split(" "), { skipLookups: !0 });
              return {
                prefix: t.prefix || $f(),
                iconName: Uf(t.prefix, t.iconName) || t.iconName,
              };
            }
            if ("string" === typeof e) {
              const t = $f();
              return { prefix: t, iconName: Uf(t, e) || e };
            }
          },
        },
        rd = {
          noAuto: () => {
            (ef.autoReplaceSvg = !1), (ef.observeMutations = !1), Jf("noAuto");
          },
          config: ef,
          dom: td,
          parse: nd,
          library: ed,
          findIconDefinition: Zf,
          toHtml: wf,
        },
        ad = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { autoReplaceSvgRoot: t = ou } = e;
          (Object.keys(gf.styles).length > 0 || ef.autoFetchSvg) &&
            su &&
            ef.autoReplaceSvg &&
            rd.dom.i2svg({ node: t });
        };
      function od(e, t) {
        return (
          Object.defineProperty(e, "abstract", { get: t }),
          Object.defineProperty(e, "html", {
            get: function () {
              return e.abstract.map((e) => wf(e));
            },
          }),
          Object.defineProperty(e, "node", {
            get: function () {
              if (!su) return;
              const t = ou.createElement("div");
              return (t.innerHTML = e.html), t.children;
            },
          }),
          e
        );
      }
      function id(e) {
        const {
            icons: { main: t, mask: n },
            prefix: r,
            iconName: a,
            transform: o,
            symbol: i,
            title: l,
            maskId: s,
            titleId: c,
            extra: u,
            watchable: f = !1,
          } = e,
          { width: d, height: p } = n.found ? n : t,
          h = "fak" === r,
          m = [
            ef.replacementClass,
            a ? "".concat(ef.cssPrefix, "-").concat(a) : "",
          ]
            .filter((e) => -1 === u.classes.indexOf(e))
            .filter((e) => "" !== e || !!e)
            .concat(u.classes)
            .join(" ");
        let g = {
          children: [],
          attributes: {
            ...u.attributes,
            "data-prefix": r,
            "data-icon": a,
            class: m,
            role: u.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(d, " ").concat(p),
          },
        };
        const v =
          h && !~u.classes.indexOf("fa-fw")
            ? { width: "".concat((d / p) * 16 * 0.0625, "em") }
            : {};
        f && (g.attributes[Ou] = ""),
          l &&
            (g.children.push({
              tag: "title",
              attributes: {
                id:
                  g.attributes["aria-labelledby"] || "title-".concat(c || af()),
              },
              children: [l],
            }),
            delete g.attributes.title);
        const y = {
            ...g,
            prefix: r,
            iconName: a,
            main: t,
            mask: n,
            maskId: s,
            transform: o,
            symbol: i,
            styles: { ...v, ...u.styles },
          },
          { children: b, attributes: w } =
            n.found && t.found
              ? Gf("generateAbstractMask", y) || {
                  children: [],
                  attributes: {},
                }
              : Gf("generateAbstractIcon", y) || {
                  children: [],
                  attributes: {},
                };
        return (
          (y.children = b),
          (y.attributes = w),
          i
            ? (function (e) {
                let {
                  prefix: t,
                  iconName: n,
                  children: r,
                  attributes: a,
                  symbol: o,
                } = e;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: {
                          ...a,
                          id:
                            !0 === o
                              ? ""
                                  .concat(t, "-")
                                  .concat(ef.cssPrefix, "-")
                                  .concat(n)
                              : o,
                        },
                        children: r,
                      },
                    ],
                  },
                ];
              })(y)
            : (function (e) {
                let {
                  children: t,
                  main: n,
                  mask: r,
                  attributes: a,
                  styles: o,
                  transform: i,
                } = e;
                if (uf(i) && n.found && !r.found) {
                  const { width: e, height: t } = n,
                    r = { x: e / t / 2, y: 0.5 };
                  a.style = cf({
                    ...o,
                    "transform-origin": ""
                      .concat(r.x + i.x / 16, "em ")
                      .concat(r.y + i.y / 16, "em"),
                  });
                }
                return [{ tag: "svg", attributes: a, children: t }];
              })(y)
        );
      }
      function ld(e) {
        const {
            content: t,
            width: n,
            height: r,
            transform: a,
            title: o,
            extra: i,
            watchable: l = !1,
          } = e,
          s = {
            ...i.attributes,
            ...(o ? { title: o } : {}),
            class: i.classes.join(" "),
          };
        l && (s[Ou] = "");
        const c = { ...i.styles };
        uf(a) &&
          ((c.transform = (function (e) {
            let {
                transform: t,
                width: n = Cu,
                height: r = Cu,
                startCentered: a = !1,
              } = e,
              o = "";
            return (
              (o +=
                a && cu
                  ? "translate("
                      .concat(t.x / nf - n / 2, "em, ")
                      .concat(t.y / nf - r / 2, "em) ")
                  : a
                    ? "translate(calc(-50% + "
                        .concat(t.x / nf, "em), calc(-50% + ")
                        .concat(t.y / nf, "em)) ")
                    : "translate("
                        .concat(t.x / nf, "em, ")
                        .concat(t.y / nf, "em) ")),
              (o += "scale("
                .concat((t.size / nf) * (t.flipX ? -1 : 1), ", ")
                .concat((t.size / nf) * (t.flipY ? -1 : 1), ") ")),
              (o += "rotate(".concat(t.rotate, "deg) ")),
              o
            );
          })({ transform: a, startCentered: !0, width: n, height: r })),
          (c["-webkit-transform"] = c.transform));
        const u = cf(c);
        u.length > 0 && (s.style = u);
        const f = [];
        return (
          f.push({ tag: "span", attributes: s, children: [t] }),
          o &&
            f.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [o],
            }),
          f
        );
      }
      const { styles: sd } = gf;
      function cd(e) {
        const t = e[0],
          n = e[1],
          [r] = e.slice(4);
        let a = null;
        return (
          (a = Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(ef.cssPrefix, "-").concat(Qu.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(ef.cssPrefix, "-").concat(Qu.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(ef.cssPrefix, "-").concat(Qu.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } }),
          { found: !0, width: t, height: n, icon: a }
        );
      }
      const ud = { found: !1, width: 512, height: 512 };
      function fd(e, t) {
        let n = t;
        return (
          "fa" === t && null !== ef.styleDefault && (t = $f()),
          new Promise((r, a) => {
            if ("fa" === n) {
              const n = Bf(e) || {};
              (e = n.iconName || e), (t = n.prefix || t);
            }
            if (e && t && sd[t] && sd[t][e]) {
              return r(cd(sd[t][e]));
            }
            !(function (e, t) {
              Lu ||
                ef.showMissingIcons ||
                !e ||
                console.error(
                  'Icon with name "'
                    .concat(e, '" and prefix "')
                    .concat(t, '" is missing.'),
                );
            })(e, t),
              r({
                ...ud,
                icon:
                  (ef.showMissingIcons && e && Gf("missingIconAbstract")) || {},
              });
          })
        );
      }
      const dd = () => {},
        pd =
          ef.measurePerformance && lu && lu.mark && lu.measure
            ? lu
            : { mark: dd, measure: dd },
        hd = 'FA "6.6.0"',
        md = (e) => {
          pd.mark("".concat(hd, " ").concat(e, " ends")),
            pd.measure(
              "".concat(hd, " ").concat(e),
              "".concat(hd, " ").concat(e, " begins"),
              "".concat(hd, " ").concat(e, " ends"),
            );
        };
      var gd = (e) => (
        pd.mark("".concat(hd, " ").concat(e, " begins")), () => md(e)
      );
      const vd = () => {};
      function yd(e) {
        return "string" === typeof (e.getAttribute ? e.getAttribute(Ou) : null);
      }
      function bd(e) {
        return ou.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function wd(e) {
        return ou.createElement(e);
      }
      function xd(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { ceFn: n = "svg" === e.tag ? bd : wd } = t;
        if ("string" === typeof e) return ou.createTextNode(e);
        const r = n(e.tag);
        Object.keys(e.attributes || []).forEach(function (t) {
          r.setAttribute(t, e.attributes[t]);
        });
        return (
          (e.children || []).forEach(function (e) {
            r.appendChild(xd(e, { ceFn: n }));
          }),
          r
        );
      }
      const kd = {
        replace: function (e) {
          const t = e[0];
          if (t.parentNode)
            if (
              (e[1].forEach((e) => {
                t.parentNode.insertBefore(xd(e), t);
              }),
              null === t.getAttribute(Ou) && ef.keepOriginalSource)
            ) {
              let e = ou.createComment(
                (function (e) {
                  let t = " ".concat(e.outerHTML, " ");
                  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
                })(t),
              );
              t.parentNode.replaceChild(e, t);
            } else t.remove();
        },
        nest: function (e) {
          const t = e[0],
            n = e[1];
          if (~lf(t).indexOf(ef.replacementClass)) return kd.replace(e);
          const r = new RegExp("".concat(ef.cssPrefix, "-.*"));
          if ((delete n[0].attributes.id, n[0].attributes.class)) {
            const e = n[0].attributes.class
              .split(" ")
              .reduce(
                (e, t) => (
                  t === ef.replacementClass || t.match(r)
                    ? e.toSvg.push(t)
                    : e.toNode.push(t),
                  e
                ),
                { toNode: [], toSvg: [] },
              );
            (n[0].attributes.class = e.toSvg.join(" ")),
              0 === e.toNode.length
                ? t.removeAttribute("class")
                : t.setAttribute("class", e.toNode.join(" "));
          }
          const a = n.map((e) => wf(e)).join("\n");
          t.setAttribute(Ou, ""), (t.innerHTML = a);
        },
      };
      function Ed(e) {
        e();
      }
      function Sd(e, t) {
        const n = "function" === typeof t ? t : vd;
        if (0 === e.length) n();
        else {
          let t = Ed;
          "async" === ef.mutateApproach && (t = au.requestAnimationFrame || Ed),
            t(() => {
              const t =
                  !0 === ef.autoReplaceSvg
                    ? kd.replace
                    : kd[ef.autoReplaceSvg] || kd.replace,
                r = gd("mutate");
              e.map(t), r(), n();
            });
        }
      }
      let Cd = !1;
      function Nd() {
        Cd = !0;
      }
      function Od() {
        Cd = !1;
      }
      let jd = null;
      function Pd(e) {
        if (!iu) return;
        if (!ef.observeMutations) return;
        const {
          treeCallback: t = vd,
          nodeCallback: n = vd,
          pseudoElementsCallback: r = vd,
          observeMutationsRoot: a = ou,
        } = e;
        (jd = new iu((e) => {
          if (Cd) return;
          const a = $f();
          of(e).forEach((e) => {
            if (
              ("childList" === e.type &&
                e.addedNodes.length > 0 &&
                !yd(e.addedNodes[0]) &&
                (ef.searchPseudoElements && r(e.target), t(e.target)),
              "attributes" === e.type &&
                e.target.parentNode &&
                ef.searchPseudoElements &&
                r(e.target.parentNode),
              "attributes" === e.type &&
                yd(e.target) &&
                ~Ku.indexOf(e.attributeName))
            )
              if (
                "class" === e.attributeName &&
                (function (e) {
                  const t = e.getAttribute ? e.getAttribute(Pu) : null,
                    n = e.getAttribute ? e.getAttribute(Ru) : null;
                  return t && n;
                })(e.target)
              ) {
                const { prefix: t, iconName: n } = Vf(lf(e.target));
                e.target.setAttribute(Pu, t || a),
                  n && e.target.setAttribute(Ru, n);
              } else
                (o = e.target) &&
                  o.classList &&
                  o.classList.contains &&
                  o.classList.contains(ef.replacementClass) &&
                  n(e.target);
            var o;
          });
        })),
          su &&
            jd.observe(a, {
              childList: !0,
              attributes: !0,
              characterData: !0,
              subtree: !0,
            });
      }
      function Rd(e) {
        const t = e.getAttribute("data-prefix"),
          n = e.getAttribute("data-icon"),
          r = void 0 !== e.innerText ? e.innerText.trim() : "";
        let a = Vf(lf(e));
        return (
          a.prefix || (a.prefix = $f()),
          t && n && ((a.prefix = t), (a.iconName = n)),
          (a.iconName && a.prefix) ||
            (a.prefix &&
              r.length > 0 &&
              (a.iconName =
                (function (e, t) {
                  return (Tf[e] || {})[t];
                })(a.prefix, e.innerText) || If(a.prefix, Ef(e.innerText))),
            !a.iconName &&
              ef.autoFetchSvg &&
              e.firstChild &&
              e.firstChild.nodeType === Node.TEXT_NODE &&
              (a.iconName = e.firstChild.data)),
          a
        );
      }
      function Td(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { styleParser: !0 };
        const { iconName: n, prefix: r, rest: a } = Rd(e),
          o = (function (e) {
            const t = of(e.attributes).reduce(
                (e, t) => (
                  "class" !== e.name &&
                    "style" !== e.name &&
                    (e[t.name] = t.value),
                  e
                ),
                {},
              ),
              n = e.getAttribute("title"),
              r = e.getAttribute("data-fa-title-id");
            return (
              ef.autoA11y &&
                (n
                  ? (t["aria-labelledby"] = ""
                      .concat(ef.replacementClass, "-title-")
                      .concat(r || af()))
                  : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
              t
            );
          })(e),
          i = Xf("parseNodeAttributes", {}, e);
        let l = t.styleParser
          ? (function (e) {
              const t = e.getAttribute("style");
              let n = [];
              return (
                t &&
                  (n = t.split(";").reduce((e, t) => {
                    const n = t.split(":"),
                      r = n[0],
                      a = n.slice(1);
                    return r && a.length > 0 && (e[r] = a.join(":").trim()), e;
                  }, {})),
                n
              );
            })(e)
          : [];
        return {
          iconName: n,
          title: e.getAttribute("title"),
          titleId: e.getAttribute("data-fa-title-id"),
          prefix: r,
          transform: rf,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          symbol: !1,
          extra: { classes: a, styles: l, attributes: o },
          ...i,
        };
      }
      const { styles: _d } = gf;
      function Ld(e) {
        const t =
          "nest" === ef.autoReplaceSvg ? Td(e, { styleParser: !1 }) : Td(e);
        return ~t.extra.classes.indexOf(Vu)
          ? Gf("generateLayersText", e, t)
          : Gf("generateSvgReplacementMutation", e, t);
      }
      let Dd = new Set();
      function Ad(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!su) return Promise.resolve();
        const n = ou.documentElement.classList,
          r = (e) => n.add("".concat(Tu, "-").concat(e)),
          a = (e) => n.remove("".concat(Tu, "-").concat(e)),
          o = ef.autoFetchSvg
            ? Dd
            : Du.map((e) => "fa-".concat(e)).concat(Object.keys(_d));
        o.includes("fa") || o.push("fa");
        const i = [".".concat(Vu, ":not([").concat(Ou, "])")]
          .concat(o.map((e) => ".".concat(e, ":not([").concat(Ou, "])")))
          .join(", ");
        if (0 === i.length) return Promise.resolve();
        let l = [];
        try {
          l = of(e.querySelectorAll(i));
        } catch (u) {}
        if (!(l.length > 0)) return Promise.resolve();
        r("pending"), a("complete");
        const s = gd("onTree"),
          c = l.reduce((e, t) => {
            try {
              const n = Ld(t);
              n && e.push(n);
            } catch (u) {
              Lu || ("MissingIcon" === u.name && console.error(u));
            }
            return e;
          }, []);
        return new Promise((e, n) => {
          Promise.all(c)
            .then((n) => {
              Sd(n, () => {
                r("active"),
                  r("complete"),
                  a("pending"),
                  "function" === typeof t && t(),
                  s(),
                  e();
              });
            })
            .catch((e) => {
              s(), n(e);
            });
        });
      }
      function Md(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Ld(e).then((e) => {
          e && Sd([e], t);
        });
      }
      Du.map((e) => {
        Dd.add("fa-".concat(e));
      }),
        Object.keys(Fu[uu]).map(Dd.add.bind(Dd)),
        Object.keys(Fu[du]).map(Dd.add.bind(Dd)),
        Object.keys(Fu[pu]).map(Dd.add.bind(Dd)),
        (Dd = [...Dd]);
      const Fd = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          transform: n = rf,
          symbol: r = !1,
          mask: a = null,
          maskId: o = null,
          title: i = null,
          titleId: l = null,
          classes: s = [],
          attributes: c = {},
          styles: u = {},
        } = t;
        if (!e) return;
        const { prefix: f, iconName: d, icon: p } = e;
        return od(
          { type: "icon", ...e },
          () => (
            Jf("beforeDOMElementCreation", { iconDefinition: e, params: t }),
            ef.autoA11y &&
              (i
                ? (c["aria-labelledby"] = ""
                    .concat(ef.replacementClass, "-title-")
                    .concat(l || af()))
                : ((c["aria-hidden"] = "true"), (c.focusable = "false"))),
            id({
              icons: {
                main: cd(p),
                mask: a
                  ? cd(a.icon)
                  : { found: !1, width: null, height: null, icon: {} },
              },
              prefix: f,
              iconName: d,
              transform: { ...rf, ...n },
              symbol: r,
              title: i,
              maskId: o,
              titleId: l,
              extra: { attributes: c, styles: u, classes: s },
            })
          ),
        );
      };
      var zd = {
          mixout() {
            return {
              icon:
                ((e = Fd),
                function (t) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const r = (t || {}).icon ? t : Zf(t || {});
                  let { mask: a } = n;
                  return (
                    a && (a = (a || {}).icon ? a : Zf(a || {})),
                    e(r, { ...n, mask: a })
                  );
                }),
            };
            var e;
          },
          hooks: () => ({
            mutationObserverCallbacks: (e) => (
              (e.treeCallback = Ad), (e.nodeCallback = Md), e
            ),
          }),
          provides(e) {
            (e.i2svg = function (e) {
              const { node: t = ou, callback: n = () => {} } = e;
              return Ad(t, n);
            }),
              (e.generateSvgReplacementMutation = function (e, t) {
                const {
                  iconName: n,
                  title: r,
                  titleId: a,
                  prefix: o,
                  transform: i,
                  symbol: l,
                  mask: s,
                  maskId: c,
                  extra: u,
                } = t;
                return new Promise((t, f) => {
                  Promise.all([
                    fd(n, o),
                    s.iconName
                      ? fd(s.iconName, s.prefix)
                      : Promise.resolve({
                          found: !1,
                          width: 512,
                          height: 512,
                          icon: {},
                        }),
                  ])
                    .then((s) => {
                      let [f, d] = s;
                      t([
                        e,
                        id({
                          icons: { main: f, mask: d },
                          prefix: o,
                          iconName: n,
                          transform: i,
                          symbol: l,
                          maskId: c,
                          title: r,
                          titleId: a,
                          extra: u,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(f);
                });
              }),
              (e.generateAbstractIcon = function (e) {
                let {
                  children: t,
                  attributes: n,
                  main: r,
                  transform: a,
                  styles: o,
                } = e;
                const i = cf(o);
                let l;
                return (
                  i.length > 0 && (n.style = i),
                  uf(a) &&
                    (l = Gf("generateAbstractTransformGrouping", {
                      main: r,
                      transform: a,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    })),
                  t.push(l || r.icon),
                  { children: t, attributes: n }
                );
              });
          },
        },
        Id = {
          mixout: () => ({
            layer(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const { classes: n = [] } = t;
              return od({ type: "layer" }, () => {
                Jf("beforeDOMElementCreation", { assembler: e, params: t });
                let r = [];
                return (
                  e((e) => {
                    Array.isArray(e)
                      ? e.map((e) => {
                          r = r.concat(e.abstract);
                        })
                      : (r = r.concat(e.abstract));
                  }),
                  [
                    {
                      tag: "span",
                      attributes: {
                        class: ["".concat(ef.cssPrefix, "-layers"), ...n].join(
                          " ",
                        ),
                      },
                      children: r,
                    },
                  ]
                );
              });
            },
          }),
        },
        Ud = {
          mixout: () => ({
            counter(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const {
                title: n = null,
                classes: r = [],
                attributes: a = {},
                styles: o = {},
              } = t;
              return od(
                { type: "counter", content: e },
                () => (
                  Jf("beforeDOMElementCreation", { content: e, params: t }),
                  (function (e) {
                    const { content: t, title: n, extra: r } = e,
                      a = {
                        ...r.attributes,
                        ...(n ? { title: n } : {}),
                        class: r.classes.join(" "),
                      },
                      o = cf(r.styles);
                    o.length > 0 && (a.style = o);
                    const i = [];
                    return (
                      i.push({ tag: "span", attributes: a, children: [t] }),
                      n &&
                        i.push({
                          tag: "span",
                          attributes: { class: "sr-only" },
                          children: [n],
                        }),
                      i
                    );
                  })({
                    content: e.toString(),
                    title: n,
                    extra: {
                      attributes: a,
                      styles: o,
                      classes: [
                        "".concat(ef.cssPrefix, "-layers-counter"),
                        ...r,
                      ],
                    },
                  })
                ),
              );
            },
          }),
        },
        Bd = {
          mixout: () => ({
            text(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const {
                transform: n = rf,
                title: r = null,
                classes: a = [],
                attributes: o = {},
                styles: i = {},
              } = t;
              return od(
                { type: "text", content: e },
                () => (
                  Jf("beforeDOMElementCreation", { content: e, params: t }),
                  ld({
                    content: e,
                    transform: { ...rf, ...n },
                    title: r,
                    extra: {
                      attributes: o,
                      styles: i,
                      classes: ["".concat(ef.cssPrefix, "-layers-text"), ...a],
                    },
                  })
                ),
              );
            },
          }),
          provides(e) {
            e.generateLayersText = function (e, t) {
              const { title: n, transform: r, extra: a } = t;
              let o = null,
                i = null;
              if (cu) {
                const t = parseInt(getComputedStyle(e).fontSize, 10),
                  n = e.getBoundingClientRect();
                (o = n.width / t), (i = n.height / t);
              }
              return (
                ef.autoA11y && !n && (a.attributes["aria-hidden"] = "true"),
                Promise.resolve([
                  e,
                  ld({
                    content: e.innerHTML,
                    width: o,
                    height: i,
                    transform: r,
                    title: n,
                    extra: a,
                    watchable: !0,
                  }),
                ])
              );
            };
          },
        };
      const $d = new RegExp('"', "ug"),
        Hd = [1105920, 1112319],
        Wd = {
          FontAwesome: { normal: "fas", 400: "fas" },
          "Font Awesome 6 Free": { 900: "fas", 400: "far" },
          "Font Awesome 6 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat",
          },
          "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
          "Font Awesome 6 Duotone": { 900: "fad" },
          "Font Awesome 6 Sharp": {
            900: "fass",
            400: "fasr",
            normal: "fasr",
            300: "fasl",
            100: "fast",
          },
          "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
          "Font Awesome 5 Free": { 900: "fas", 400: "far" },
          "Font Awesome 5 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
          },
          "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
          "Font Awesome 5 Duotone": { 900: "fad" },
          "Font Awesome Kit": { 400: "fak", normal: "fak" },
          "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
        },
        Vd = Object.keys(Wd).reduce(
          (e, t) => ((e[t.toLowerCase()] = Wd[t]), e),
          {},
        ),
        qd = Object.keys(Vd).reduce((e, t) => {
          const n = Vd[t];
          return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
        }, {});
      function Kd(e, t) {
        const n = ""
          .concat("data-fa-pseudo-element-pending")
          .concat(t.replace(":", "-"));
        return new Promise((r, a) => {
          if (null !== e.getAttribute(n)) return r();
          const o = of(e.children).filter((e) => e.getAttribute(ju) === t)[0],
            i = au.getComputedStyle(e, t),
            l = i.getPropertyValue("font-family"),
            s = l.match(qu),
            c = i.getPropertyValue("font-weight"),
            u = i.getPropertyValue("content");
          if (o && !s) return e.removeChild(o), r();
          if (s && "none" !== u && "" !== u) {
            const u = i.getPropertyValue("content");
            let f = (function (e, t) {
              const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
                r = parseInt(t),
                a = isNaN(r) ? "normal" : r;
              return (Vd[n] || {})[a] || qd[n];
            })(l, c);
            const { value: d, isSecondary: p } = (function (e) {
                const t = e.replace($d, ""),
                  n = (function (e, t) {
                    const n = e.length;
                    let r,
                      a = e.charCodeAt(t);
                    return a >= 55296 &&
                      a <= 56319 &&
                      n > t + 1 &&
                      ((r = e.charCodeAt(t + 1)), r >= 56320 && r <= 57343)
                      ? 1024 * (a - 55296) + r - 56320 + 65536
                      : a;
                  })(t, 0),
                  r = n >= Hd[0] && n <= Hd[1],
                  a = 2 === t.length && t[0] === t[1];
                return { value: Ef(a ? t[0] : t), isSecondary: r || a };
              })(u),
              h = s[0].startsWith("FontAwesome");
            let m = If(f, d),
              g = m;
            if (h) {
              const e = (function (e) {
                const t = Lf[e],
                  n = If("fas", e);
                return (
                  t ||
                  (n ? { prefix: "fas", iconName: n } : null) || {
                    prefix: null,
                    iconName: null,
                  }
                );
              })(d);
              e.iconName && e.prefix && ((m = e.iconName), (f = e.prefix));
            }
            if (
              !m ||
              p ||
              (o && o.getAttribute(Pu) === f && o.getAttribute(Ru) === g)
            )
              r();
            else {
              e.setAttribute(n, g), o && e.removeChild(o);
              const i = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: rf,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                { extra: l } = i;
              (l.attributes[ju] = t),
                fd(m, f)
                  .then((a) => {
                    const o = id({
                        ...i,
                        icons: {
                          main: a,
                          mask: { prefix: null, iconName: null, rest: [] },
                        },
                        prefix: f,
                        iconName: g,
                        extra: l,
                        watchable: !0,
                      }),
                      s = ou.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg",
                      );
                    "::before" === t
                      ? e.insertBefore(s, e.firstChild)
                      : e.appendChild(s),
                      (s.outerHTML = o.map((e) => wf(e)).join("\n")),
                      e.removeAttribute(n),
                      r();
                  })
                  .catch(a);
            }
          } else r();
        });
      }
      function Qd(e) {
        return Promise.all([Kd(e, "::before"), Kd(e, "::after")]);
      }
      function Yd(e) {
        return (
          e.parentNode !== document.head &&
          !~_u.indexOf(e.tagName.toUpperCase()) &&
          !e.getAttribute(ju) &&
          (!e.parentNode || "svg" !== e.parentNode.tagName)
        );
      }
      function Xd(e) {
        if (su)
          return new Promise((t, n) => {
            const r = of(e.querySelectorAll("*")).filter(Yd).map(Qd),
              a = gd("searchPseudoElements");
            Nd(),
              Promise.all(r)
                .then(() => {
                  a(), Od(), t();
                })
                .catch(() => {
                  a(), Od(), n();
                });
          });
      }
      var Jd = {
        hooks: () => ({
          mutationObserverCallbacks: (e) => (
            (e.pseudoElementsCallback = Xd), e
          ),
        }),
        provides(e) {
          e.pseudoElements2svg = function (e) {
            const { node: t = ou } = e;
            ef.searchPseudoElements && Xd(t);
          };
        },
      };
      let Gd = !1;
      var Zd = {
        mixout: () => ({
          dom: {
            unwatch() {
              Nd(), (Gd = !0);
            },
          },
        }),
        hooks: () => ({
          bootstrap() {
            Pd(Xf("mutationObserverCallbacks", {}));
          },
          noAuto() {
            jd && jd.disconnect();
          },
          watch(e) {
            const { observeMutationsRoot: t } = e;
            Gd
              ? Od()
              : Pd(
                  Xf("mutationObserverCallbacks", { observeMutationsRoot: t }),
                );
          },
        }),
      };
      const ep = (e) =>
        e
          .toLowerCase()
          .split(" ")
          .reduce(
            (e, t) => {
              const n = t.toLowerCase().split("-"),
                r = n[0];
              let a = n.slice(1).join("-");
              if (r && "h" === a) return (e.flipX = !0), e;
              if (r && "v" === a) return (e.flipY = !0), e;
              if (((a = parseFloat(a)), isNaN(a))) return e;
              switch (r) {
                case "grow":
                  e.size = e.size + a;
                  break;
                case "shrink":
                  e.size = e.size - a;
                  break;
                case "left":
                  e.x = e.x - a;
                  break;
                case "right":
                  e.x = e.x + a;
                  break;
                case "up":
                  e.y = e.y - a;
                  break;
                case "down":
                  e.y = e.y + a;
                  break;
                case "rotate":
                  e.rotate = e.rotate + a;
              }
              return e;
            },
            { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
          );
      var tp = {
        mixout: () => ({ parse: { transform: (e) => ep(e) } }),
        hooks: () => ({
          parseNodeAttributes(e, t) {
            const n = t.getAttribute("data-fa-transform");
            return n && (e.transform = ep(n)), e;
          },
        }),
        provides(e) {
          e.generateAbstractTransformGrouping = function (e) {
            let { main: t, transform: n, containerWidth: r, iconWidth: a } = e;
            const o = { transform: "translate(".concat(r / 2, " 256)") },
              i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
              l = "scale("
                .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
              s = "rotate(".concat(n.rotate, " 0 0)"),
              c = { transform: "".concat(i, " ").concat(l, " ").concat(s) },
              u = { transform: "translate(".concat((a / 2) * -1, " -256)") };
            return {
              tag: "g",
              attributes: { ...o },
              children: [
                {
                  tag: "g",
                  attributes: { ...c },
                  children: [
                    {
                      tag: t.icon.tag,
                      children: t.icon.children,
                      attributes: { ...t.icon.attributes, ...u },
                    },
                  ],
                },
              ],
            };
          };
        },
      };
      const np = { x: 0, y: 0, width: "100%", height: "100%" };
      function rp(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          e.attributes &&
            (e.attributes.fill || t) &&
            (e.attributes.fill = "black"),
          e
        );
      }
      var ap = {
          hooks: () => ({
            parseNodeAttributes(e, t) {
              const n = t.getAttribute("data-fa-mask"),
                r = n
                  ? Vf(n.split(" ").map((e) => e.trim()))
                  : { prefix: null, iconName: null, rest: [] };
              return (
                r.prefix || (r.prefix = $f()),
                (e.mask = r),
                (e.maskId = t.getAttribute("data-fa-mask-id")),
                e
              );
            },
          }),
          provides(e) {
            e.generateAbstractMask = function (e) {
              let {
                children: t,
                attributes: n,
                main: r,
                mask: a,
                maskId: o,
                transform: i,
              } = e;
              const { width: l, icon: s } = r,
                { width: c, icon: u } = a,
                f = (function (e) {
                  let { transform: t, containerWidth: n, iconWidth: r } = e;
                  const a = { transform: "translate(".concat(n / 2, " 256)") },
                    o = "translate("
                      .concat(32 * t.x, ", ")
                      .concat(32 * t.y, ") "),
                    i = "scale("
                      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
                    l = "rotate(".concat(t.rotate, " 0 0)");
                  return {
                    outer: a,
                    inner: {
                      transform: "".concat(o, " ").concat(i, " ").concat(l),
                    },
                    path: {
                      transform: "translate(".concat((r / 2) * -1, " -256)"),
                    },
                  };
                })({ transform: i, containerWidth: c, iconWidth: l }),
                d = { tag: "rect", attributes: { ...np, fill: "white" } },
                p = s.children ? { children: s.children.map(rp) } : {},
                h = {
                  tag: "g",
                  attributes: { ...f.inner },
                  children: [
                    rp({
                      tag: s.tag,
                      attributes: { ...s.attributes, ...f.path },
                      ...p,
                    }),
                  ],
                },
                m = { tag: "g", attributes: { ...f.outer }, children: [h] },
                g = "mask-".concat(o || af()),
                v = "clip-".concat(o || af()),
                y = {
                  tag: "mask",
                  attributes: {
                    ...np,
                    id: g,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse",
                  },
                  children: [d, m],
                },
                b = {
                  tag: "defs",
                  children: [
                    {
                      tag: "clipPath",
                      attributes: { id: v },
                      children: ((w = u), "g" === w.tag ? w.children : [w]),
                    },
                    y,
                  ],
                };
              var w;
              return (
                t.push(b, {
                  tag: "rect",
                  attributes: {
                    fill: "currentColor",
                    "clip-path": "url(#".concat(v, ")"),
                    mask: "url(#".concat(g, ")"),
                    ...np,
                  },
                }),
                { children: t, attributes: n }
              );
            };
          },
        },
        op = {
          provides(e) {
            let t = !1;
            au.matchMedia &&
              (t = au.matchMedia("(prefers-reduced-motion: reduce)").matches),
              (e.missingIconAbstract = function () {
                const e = [],
                  n = { fill: "currentColor" },
                  r = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s",
                  };
                e.push({
                  tag: "path",
                  attributes: {
                    ...n,
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                  },
                });
                const a = { ...r, attributeName: "opacity" },
                  o = {
                    tag: "circle",
                    attributes: { ...n, cx: "256", cy: "364", r: "28" },
                    children: [],
                  };
                return (
                  t ||
                    o.children.push(
                      {
                        tag: "animate",
                        attributes: {
                          ...r,
                          attributeName: "r",
                          values: "28;14;28;28;14;28;",
                        },
                      },
                      {
                        tag: "animate",
                        attributes: { ...a, values: "1;0;1;1;0;1;" },
                      },
                    ),
                  e.push(o),
                  e.push({
                    tag: "path",
                    attributes: {
                      ...n,
                      opacity: "1",
                      d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                    },
                    children: t
                      ? []
                      : [
                          {
                            tag: "animate",
                            attributes: { ...a, values: "1;0;0;0;0;1;" },
                          },
                        ],
                  }),
                  t ||
                    e.push({
                      tag: "path",
                      attributes: {
                        ...n,
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                      },
                      children: [
                        {
                          tag: "animate",
                          attributes: { ...a, values: "0;0;1;1;0;0;" },
                        },
                      ],
                    }),
                  { tag: "g", attributes: { class: "missing" }, children: e }
                );
              });
          },
        };
      !(function (e, t) {
        let { mixoutsTo: n } = t;
        (qf = e),
          (Kf = {}),
          Object.keys(Qf).forEach((e) => {
            -1 === Yf.indexOf(e) && delete Qf[e];
          }),
          qf.forEach((e) => {
            const t = e.mixout ? e.mixout() : {};
            if (
              (Object.keys(t).forEach((e) => {
                "function" === typeof t[e] && (n[e] = t[e]),
                  "object" === typeof t[e] &&
                    Object.keys(t[e]).forEach((r) => {
                      n[e] || (n[e] = {}), (n[e][r] = t[e][r]);
                    });
              }),
              e.hooks)
            ) {
              const t = e.hooks();
              Object.keys(t).forEach((e) => {
                Kf[e] || (Kf[e] = []), Kf[e].push(t[e]);
              });
            }
            e.provides && e.provides(Qf);
          });
      })(
        [
          hf,
          zd,
          Id,
          Ud,
          Bd,
          Jd,
          Zd,
          tp,
          ap,
          op,
          {
            hooks: () => ({
              parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-symbol"),
                  r = null !== n && ("" === n || n);
                return (e.symbol = r), e;
              },
            }),
          },
        ],
        { mixoutsTo: rd },
      );
      const ip = rd.parse,
        lp = rd.icon;
      function sp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function cp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? sp(Object(n), !0).forEach(function (t) {
                fp(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : sp(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function up(e) {
        return (
          (up =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          up(e)
        );
      }
      function fp(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function dp(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function pp(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return hp(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return hp(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return hp(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function hp(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function mp(e) {
        return (
          (t = e),
          (t -= 0) === t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      var gp = ["style"];
      var vp = !1;
      try {
        vp = !0;
      } catch (Jp) {}
      function yp(e) {
        return e && "object" === up(e) && e.prefix && e.iconName && e.icon
          ? e
          : ip.icon
            ? ip.icon(e)
            : null === e
              ? null
              : e && "object" === up(e) && e.prefix && e.iconName
                ? e
                : Array.isArray(e) && 2 === e.length
                  ? { prefix: e[0], iconName: e[1] }
                  : "string" === typeof e
                    ? { prefix: "fas", iconName: e }
                    : void 0;
      }
      function bp(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? fp({}, e, t)
          : {};
      }
      var wp = {
          border: !1,
          className: "",
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: "",
          titleId: null,
          transform: null,
          swapOpacity: !1,
        },
        xp = t.forwardRef(function (e, t) {
          var n = cp(cp({}, wp), e),
            r = n.icon,
            a = n.mask,
            o = n.symbol,
            i = n.className,
            l = n.title,
            s = n.titleId,
            c = n.maskId,
            u = yp(r),
            f = bp(
              "classes",
              [].concat(
                pp(
                  (function (e) {
                    var t,
                      n = e.beat,
                      r = e.fade,
                      a = e.beatFade,
                      o = e.bounce,
                      i = e.shake,
                      l = e.flash,
                      s = e.spin,
                      c = e.spinPulse,
                      u = e.spinReverse,
                      f = e.pulse,
                      d = e.fixedWidth,
                      p = e.inverse,
                      h = e.border,
                      m = e.listItem,
                      g = e.flip,
                      v = e.size,
                      y = e.rotation,
                      b = e.pull,
                      w =
                        (fp(
                          (t = {
                            "fa-beat": n,
                            "fa-fade": r,
                            "fa-beat-fade": a,
                            "fa-bounce": o,
                            "fa-shake": i,
                            "fa-flash": l,
                            "fa-spin": s,
                            "fa-spin-reverse": u,
                            "fa-spin-pulse": c,
                            "fa-pulse": f,
                            "fa-fw": d,
                            "fa-inverse": p,
                            "fa-border": h,
                            "fa-li": m,
                            "fa-flip": !0 === g,
                            "fa-flip-horizontal":
                              "horizontal" === g || "both" === g,
                            "fa-flip-vertical":
                              "vertical" === g || "both" === g,
                          }),
                          "fa-".concat(v),
                          "undefined" !== typeof v && null !== v,
                        ),
                        fp(
                          t,
                          "fa-rotate-".concat(y),
                          "undefined" !== typeof y && null !== y && 0 !== y,
                        ),
                        fp(
                          t,
                          "fa-pull-".concat(b),
                          "undefined" !== typeof b && null !== b,
                        ),
                        fp(t, "fa-swap-opacity", e.swapOpacity),
                        t);
                    return Object.keys(w)
                      .map(function (e) {
                        return w[e] ? e : null;
                      })
                      .filter(function (e) {
                        return e;
                      });
                  })(n),
                ),
                pp((i || "").split(" ")),
              ),
            ),
            d = bp(
              "transform",
              "string" === typeof n.transform
                ? ip.transform(n.transform)
                : n.transform,
            ),
            p = bp("mask", yp(a)),
            h = lp(
              u,
              cp(
                cp(cp(cp({}, f), d), p),
                {},
                { symbol: o, title: l, titleId: s, maskId: c },
              ),
            );
          if (!h)
            return (
              (function () {
                var e;
                !vp &&
                  console &&
                  "function" === typeof console.error &&
                  (e = console).error.apply(e, arguments);
              })("Could not find icon", u),
              null
            );
          var m = h.abstract,
            g = { ref: t };
          return (
            Object.keys(n).forEach(function (e) {
              wp.hasOwnProperty(e) || (g[e] = n[e]);
            }),
            kp(m[0], g)
          );
        });
      (xp.displayName = "FontAwesomeIcon"),
        (xp.propTypes = {
          beat: Xo().bool,
          border: Xo().bool,
          beatFade: Xo().bool,
          bounce: Xo().bool,
          className: Xo().string,
          fade: Xo().bool,
          flash: Xo().bool,
          mask: Xo().oneOfType([Xo().object, Xo().array, Xo().string]),
          maskId: Xo().string,
          fixedWidth: Xo().bool,
          inverse: Xo().bool,
          flip: Xo().oneOf([!0, !1, "horizontal", "vertical", "both"]),
          icon: Xo().oneOfType([Xo().object, Xo().array, Xo().string]),
          listItem: Xo().bool,
          pull: Xo().oneOf(["right", "left"]),
          pulse: Xo().bool,
          rotation: Xo().oneOf([0, 90, 180, 270]),
          shake: Xo().bool,
          size: Xo().oneOf([
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: Xo().bool,
          spinPulse: Xo().bool,
          spinReverse: Xo().bool,
          symbol: Xo().oneOfType([Xo().bool, Xo().string]),
          title: Xo().string,
          titleId: Xo().string,
          transform: Xo().oneOfType([Xo().string, Xo().object]),
          swapOpacity: Xo().bool,
        });
      var kp = function e(t, n) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("string" === typeof n) return n;
        var a = (n.children || []).map(function (n) {
            return e(t, n);
          }),
          o = Object.keys(n.attributes || {}).reduce(
            function (e, t) {
              var r = n.attributes[t];
              switch (t) {
                case "class":
                  (e.attrs.className = r), delete n.attributes.class;
                  break;
                case "style":
                  e.attrs.style = (function (e) {
                    return e
                      .split(";")
                      .map(function (e) {
                        return e.trim();
                      })
                      .filter(function (e) {
                        return e;
                      })
                      .reduce(function (e, t) {
                        var n,
                          r = t.indexOf(":"),
                          a = mp(t.slice(0, r)),
                          o = t.slice(r + 1).trim();
                        return (
                          a.startsWith("webkit")
                            ? (e[
                                ((n = a),
                                n.charAt(0).toUpperCase() + n.slice(1))
                              ] = o)
                            : (e[a] = o),
                          e
                        );
                      }, {});
                  })(r);
                  break;
                default:
                  0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                    ? (e.attrs[t.toLowerCase()] = r)
                    : (e.attrs[mp(t)] = r);
              }
              return e;
            },
            { attrs: {} },
          ),
          i = r.style,
          l = void 0 === i ? {} : i,
          s = dp(r, gp);
        return (
          (o.attrs.style = cp(cp({}, o.attrs.style), l)),
          t.apply(void 0, [n.tag, cp(cp({}, o.attrs), s)].concat(pp(a)))
        );
      }.bind(null, t.createElement);
      const Ep = {
          prefix: "fas",
          iconName: "magnifying-glass",
          icon: [
            512,
            512,
            [128269, "search"],
            "f002",
            "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
          ],
        },
        Sp = Ep;
      const Cp = (e) => {
          let { onSearchChange: n, onCategorySelect: r, searchTerm: a } = e;
          const [o, i] = (0, t.useState)([]),
            [l, s] = (0, t.useState)(!1);
          (0, t.useEffect)(() => {
            (async () => {
              const e = await Xc();
              i(e);
            })();
          }, []);
          const c = o.filter((e) =>
            e.name.toLowerCase().includes(a.toLowerCase()),
          );
          return (0, $r.jsxs)("div", {
            className: "position-relative",
            onBlur: () => setTimeout(() => s(!1), 200),
            children: [
              (0, $r.jsxs)("div", {
                className: "input-group",
                children: [
                  (0, $r.jsx)("div", {
                    className: "input-group-prepend",
                    children: (0, $r.jsx)("span", {
                      className: "input-group-text search-icon",
                      children: (0, $r.jsx)(xp, { icon: Sp }),
                    }),
                  }),
                  (0, $r.jsx)("input", {
                    type: "search",
                    className: "form-control search-bar",
                    placeholder: "Search or select a category...",
                    value: a,
                    onChange: (e) => {
                      const t = e.target.value;
                      n(t), s(!0);
                    },
                    onFocus: () => s(!0),
                    "aria-label": "Search Categories",
                  }),
                ],
              }),
              l &&
                (0, $r.jsx)("ul", {
                  className: "dropdown-menu show position-absolute",
                  style: {
                    top: "100%",
                    left: 0,
                    zIndex: 1e3,
                    maxHeight: "200px",
                    overflowY: "auto",
                  },
                  children:
                    c.length > 0
                      ? c.map((e) =>
                          (0, $r.jsx)(
                            "li",
                            {
                              children: (0, $r.jsx)("button", {
                                type: "button",
                                className: "dropdown-item",
                                onClick: () => {
                                  return (
                                    (t = e.name),
                                    (a = e.id),
                                    n(t),
                                    r(a),
                                    void s(!1)
                                  );
                                  var t, a;
                                },
                                children: e.name,
                              }),
                            },
                            e.id,
                          ),
                        )
                      : (0, $r.jsx)("li", {
                          children: (0, $r.jsx)("span", {
                            className: "dropdown-item-text",
                            children: "No results found",
                          }),
                        }),
                }),
            ],
          });
        },
        Np = async (e) => {
          try {
            const t = e ? `/api/decks?categoryId=${e}` : "/api/decks",
              n = await fetch(t);
            if (!n.ok) {
              throw new Error(`${n.status} (${n.statusText})`);
            }
            const r = await n.json();
            return r.decks.map((e) => ({ ...e, id: parseInt(e.id, 10) }));
          } catch (t) {
            console.error("Error in fetch!"), console.error(t.message);
          }
        },
        Op = (e) => {
          let { categoryId: n, searchTerm: r } = e;
          const [a, o] = (0, t.useState)([]),
            [i, l] = (0, t.useState)(1),
            [s] = (0, t.useState)(9),
            [c, u] = (0, t.useState)(!0),
            f = kr();
          (0, t.useEffect)(() => {
            (async () => {
              let e;
              u(!0), (e = n ? await Np(n) : await Np()), o(e || []), u(!1);
            })();
          }, [n, r]);
          const d = i * s,
            p = d - s,
            h = a.slice(p, d);
          return (0, $r.jsx)("div", {
            className: "container",
            children: c
              ? (0, $r.jsx)("div", {
                  className: "d-flex justify-content-center",
                  children: (0, $r.jsx)("span", { children: "Loading..." }),
                })
              : (0, $r.jsx)($r.Fragment, {
                  children:
                    a.length > 0
                      ? (0, $r.jsxs)("div", {
                          children: [
                            (0, $r.jsx)("div", {
                              className: "row",
                              children: h.map((e) =>
                                (0, $r.jsx)(
                                  "div",
                                  {
                                    className: "col-md-4 mb-4",
                                    children: (0, $r.jsx)("div", {
                                      className:
                                        "card h-100 d-flex flex-column clickable-card",
                                      style: {
                                        backgroundColor: "#ffe1ff",
                                        color: "#433878",
                                        borderColor: "#433878",
                                        cursor: "pointer",
                                      },
                                      onClick: () => {
                                        return (
                                          (t = e.id),
                                          void f(
                                            `/decks/public/${t}/flashcards`,
                                          )
                                        );
                                        var t;
                                      },
                                      children: (0, $r.jsxs)("div", {
                                        className: "card-body flex-grow-1",
                                        children: [
                                          (0, $r.jsx)("h5", {
                                            className: "card-title",
                                            children: e.title,
                                          }),
                                          (0, $r.jsx)("p", {
                                            className: "card-text",
                                            children:
                                              e.description ||
                                              "No description available",
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                            (0, $r.jsx)("div", {
                              className: "d-flex justify-content-center mt-4",
                              children: Array.from(
                                { length: Math.ceil(a.length / s) },
                                (e, t) =>
                                  (0, $r.jsx)(
                                    "button",
                                    {
                                      onClick: () => l(t + 1),
                                      className:
                                        "btn mx-1 " +
                                        (i === t + 1 ? "active" : ""),
                                      style: {
                                        backgroundColor: "#433878",
                                        color: "white",
                                        borderColor: "#433878",
                                      },
                                      children: t + 1,
                                    },
                                    t + 1,
                                  ),
                              ),
                            }),
                          ],
                        })
                      : (0, $r.jsx)("div", {
                          className: "alert alert-info text-center mt-4",
                          children: "No decks available.",
                        }),
                }),
          });
        },
        jp = () => {
          const [e, n] = (0, t.useState)(""),
            [r, a] = (0, t.useState)(null);
          return (0, $r.jsxs)("div", {
            className: "container mt-4",
            children: [
              (0, $r.jsx)(Cp, {
                onSearchChange: (e) => {
                  n(e);
                },
                onCategorySelect: (e) => {
                  a(e);
                },
                searchTerm: e,
              }),
              (0, $r.jsx)("div", {
                className: "mt-4",
                children: (0, $r.jsx)(Op, { categoryId: r, searchTerm: e }),
              }),
            ],
          });
        },
        Pp = async (e) => {
          try {
            const t = await fetch("/api/flashcards", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            });
            if (!t.ok) throw new Error("Failed to create flashcard");
            return await t.json();
          } catch (t) {
            throw (console.error("Error posting deck:", t), t);
          }
        },
        Rp = async (e, t) => {
          try {
            const n = await fetch(`/api/flashcards/${e}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(t),
            });
            if (!n.ok) {
              throw new Error(`${n.status} (${n.statusText})`);
            }
            const r = await n.json();
            return { ...r, id: parseInt(r.id, 10) };
          } catch (n) {
            console.error("Error in updateFlashcard!"),
              console.error(n.message);
          }
        },
        Tp = async (e) => {
          try {
            const t = await fetch(`/api/flashcards/${e}`);
            if (!t.ok) {
              throw new Error(`${t.status} (${t.statusText})`);
            }
            const n = await t.json();
            return { ...n, id: parseInt(n.id, 10) };
          } catch (t) {
            console.error("Error in fetch!"), console.error(t.message);
          }
        },
        _p = (e) => {
          let { isEditing: n = !1 } = e;
          const [r, a] = (0, t.useState)(""),
            [o, i] = (0, t.useState)(""),
            [l, s] = (0, t.useState)(""),
            c = kr(),
            { deckId: u, flashcardId: f } = Er(),
            d = parseInt(u, 10);
          (0, t.useEffect)(() => {
            if (n && f) {
              const e = async () => {
                try {
                  const e = await Tp(f);
                  a(e.question), i(e.answer);
                } catch (l) {
                  console.error("Error fetching flashcard:", l.message),
                    s("Failed to load the flashcard. Please try again.");
                }
              };
              e();
            }
          }, [n, f]);
          return (0, $r.jsxs)("div", {
            className: "container mt-5",
            children: [
              (0, $r.jsx)("h2", {
                children: n ? "Edit Flashcard" : "Create Flashcard",
              }),
              l &&
                (0, $r.jsx)("div", {
                  className: "alert alert-danger",
                  children: l,
                }),
              (0, $r.jsxs)("form", {
                onSubmit: async (e) => {
                  e.preventDefault();
                  const t = { question: r, answer: o, deckId: d };
                  try {
                    n
                      ? (await Rp(f, t), c(`/decks/${d}/flashcards`))
                      : (await Pp(t), c(`/decks/${d}/flashcards`));
                  } catch (l) {
                    s(
                      "Failed to " +
                        (n ? "update" : "create") +
                        " flashcard. Please try again.",
                    );
                  }
                },
                className: "mt-4",
                children: [
                  (0, $r.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, $r.jsx)("label", {
                        htmlFor: "question",
                        className: "form-label",
                        children: "Question",
                      }),
                      (0, $r.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        id: "question",
                        value: r,
                        onChange: (e) => a(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, $r.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, $r.jsx)("label", {
                        htmlFor: "answer",
                        className: "form-label",
                        children: "Answer",
                      }),
                      (0, $r.jsx)("textarea", {
                        className: "form-control",
                        id: "answer",
                        rows: "3",
                        value: o,
                        onChange: (e) => i(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, $r.jsx)("button", {
                    type: "submit",
                    className: "btn btn-primary",
                    style: {
                      backgroundColor: "#433878",
                      borderColor: "#433878",
                    },
                    children: n ? "Update Flashcard" : "Create Flashcard",
                  }),
                ],
              }),
            ],
          });
        },
        Lp = (e) => {
          const [n, r] = (0, t.useState)([]),
            [a, o] = (0, t.useState)(""),
            { deckId: i } = Er(),
            [l, s] = (0, t.useState)(0),
            [c, u] = (0, t.useState)(!1);
          (0, t.useEffect)(() => {
            Wc(i).then((e) => {
              let { deckTitle: t, flashcards: n } = e;
              o(t), r(n);
            });
          }, [i]);
          if (!n || 0 === n.length)
            return (0, $r.jsx)("p", {
              className: "text-center pt-5",
              children: "No flashcards in this deck yet.",
            });
          const f = n[l];
          return (0, $r.jsxs)("div", {
            className: "text-center pt-5",
            children: [
              (0, $r.jsxs)("h2", { children: ["Flashcards for ", a] }),
              (0, $r.jsxs)("div", {
                className: "card flashcard " + (c ? "flipped" : ""),
                onClick: () => {
                  u((e) => !e);
                },
                children: [
                  (0, $r.jsx)("div", {
                    className: "card-front",
                    children: (0, $r.jsx)("p", { children: f.question }),
                  }),
                  (0, $r.jsx)("div", {
                    className: "card-back",
                    children: (0, $r.jsx)("p", { children: f.answer }),
                  }),
                ],
              }),
              (0, $r.jsxs)("div", {
                className: "mt-3",
                children: [
                  (0, $r.jsx)("button", {
                    className: "btn btn-custom-secondary me-2",
                    onClick: () => {
                      l > 0 && (s(l - 1), u(!1));
                    },
                    disabled: 0 === l,
                    children: "Previous",
                  }),
                  (0, $r.jsx)("button", {
                    className: "btn btn-custom-secondary ms-2",
                    onClick: () => {
                      l < n.length - 1 && (s(l + 1), u(!1));
                    },
                    disabled: l === n.length - 1,
                    children: "Next",
                  }),
                ],
              }),
              (0, $r.jsxs)("p", {
                className: "mt-2",
                children: ["Flashcard ", l + 1, " of ", n.length],
              }),
            ],
          });
        },
        Dp = () =>
          (0, $r.jsx)("section", {
            className: "hero-section",
            children: (0, $r.jsxs)("div", {
              className: "hero-container",
              children: [
                (0, $r.jsxs)("div", {
                  className: "hero-text",
                  children: [
                    (0, $r.jsx)("h1", {
                      className: "hero-heading",
                      children: "Boost Your Learning with FlashWiz!",
                    }),
                    (0, $r.jsx)("p", {
                      className: "hero-subheading",
                      children:
                        "Master any topic with personalized flashcards and interactive learning.",
                    }),
                    (0, $r.jsx)("p", {
                      className: "hero-description",
                      children:
                        "Create, Study, and Retain knowledge efficiently with our flashcard app.",
                    }),
                  ],
                }),
                (0, $r.jsx)("div", {
                  className: "hero-image",
                  children: (0, $r.jsx)("img", {
                    src: "/flashcard.jpg",
                    alt: "Person using flashcards",
                  }),
                }),
              ],
            }),
          });
      function Ap() {
        return (
          (Ap = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ap.apply(this, arguments)
        );
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      try {
        window.__reactRouterVersion = "6";
      } catch (Jp) {}
      function Mp() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = Ap({}, t, { errors: Fp(t.errors) })), t;
      }
      function Fp(e) {
        if (!e) return null;
        let t = Object.entries(e),
          n = {};
        for (let [r, a] of t)
          if (a && "RouteErrorResponse" === a.__type)
            n[r] = new sn(a.status, a.statusText, a.data, !0 === a.internal);
          else if (a && "Error" === a.__type) {
            if (a.__subType) {
              let e = window[a.__subType];
              if ("function" === typeof e)
                try {
                  let t = new e(a.message);
                  (t.stack = ""), (n[r] = t);
                } catch (Jp) {}
            }
            if (null == n[r]) {
              let e = new Error(a.message);
              (e.stack = ""), (n[r] = e);
            }
          } else n[r] = a;
        return n;
      }
      const zp = t.createContext({ isTransitioning: !1 });
      const Ip = t.createContext(new Map());
      const Up = r.startTransition,
        Bp = ka.flushSync;
      r.useId;
      function $p(e) {
        Bp ? Bp(e) : e();
      }
      class Hp {
        constructor() {
          (this.status = "pending"),
            (this.promise = new Promise((e, t) => {
              (this.resolve = (t) => {
                "pending" === this.status && ((this.status = "resolved"), e(t));
              }),
                (this.reject = (e) => {
                  "pending" === this.status &&
                    ((this.status = "rejected"), t(e));
                });
            }));
        }
      }
      function Wp(e) {
        let { fallbackElement: n, router: r, future: a } = e,
          [o, i] = t.useState(r.state),
          [l, s] = t.useState(),
          [c, u] = t.useState({ isTransitioning: !1 }),
          [f, d] = t.useState(),
          [p, h] = t.useState(),
          [m, g] = t.useState(),
          v = t.useRef(new Map()),
          { v7_startTransition: y } = a || {},
          b = t.useCallback(
            (e) => {
              y
                ? (function (e) {
                    Up ? Up(e) : e();
                  })(e)
                : e();
            },
            [y],
          ),
          w = t.useCallback(
            (e, t) => {
              let {
                deletedFetchers: n,
                flushSync: a,
                viewTransitionOpts: o,
              } = t;
              n.forEach((e) => v.current.delete(e)),
                e.fetchers.forEach((e, t) => {
                  void 0 !== e.data && v.current.set(t, e.data);
                });
              let l =
                null == r.window ||
                null == r.window.document ||
                "function" !== typeof r.window.document.startViewTransition;
              if (o && !l) {
                if (a) {
                  $p(() => {
                    p && (f && f.resolve(), p.skipTransition()),
                      u({
                        isTransitioning: !0,
                        flushSync: !0,
                        currentLocation: o.currentLocation,
                        nextLocation: o.nextLocation,
                      });
                  });
                  let t = r.window.document.startViewTransition(() => {
                    $p(() => i(e));
                  });
                  return (
                    t.finished.finally(() => {
                      $p(() => {
                        d(void 0),
                          h(void 0),
                          s(void 0),
                          u({ isTransitioning: !1 });
                      });
                    }),
                    void $p(() => h(t))
                  );
                }
                p
                  ? (f && f.resolve(),
                    p.skipTransition(),
                    g({
                      state: e,
                      currentLocation: o.currentLocation,
                      nextLocation: o.nextLocation,
                    }))
                  : (s(e),
                    u({
                      isTransitioning: !0,
                      flushSync: !1,
                      currentLocation: o.currentLocation,
                      nextLocation: o.nextLocation,
                    }));
              } else a ? $p(() => i(e)) : b(() => i(e));
            },
            [r.window, p, f, v, b],
          );
        t.useLayoutEffect(() => r.subscribe(w), [r, w]),
          t.useEffect(() => {
            c.isTransitioning && !c.flushSync && d(new Hp());
          }, [c]),
          t.useEffect(() => {
            if (f && l && r.window) {
              let e = l,
                t = f.promise,
                n = r.window.document.startViewTransition(async () => {
                  b(() => i(e)), await t;
                });
              n.finished.finally(() => {
                d(void 0), h(void 0), s(void 0), u({ isTransitioning: !1 });
              }),
                h(n);
            }
          }, [b, l, f, r.window]),
          t.useEffect(() => {
            f && l && o.location.key === l.location.key && f.resolve();
          }, [f, p, o.location, l]),
          t.useEffect(() => {
            !c.isTransitioning &&
              m &&
              (s(m.state),
              u({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: m.currentLocation,
                nextLocation: m.nextLocation,
              }),
              g(void 0));
          }, [c.isTransitioning, m]),
          t.useEffect(() => {}, []);
        let x = t.useMemo(
            () => ({
              createHref: r.createHref,
              encodeLocation: r.encodeLocation,
              go: (e) => r.navigate(e),
              push: (e, t, n) =>
                r.navigate(e, {
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
              replace: (e, t, n) =>
                r.navigate(e, {
                  replace: !0,
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
            }),
            [r],
          ),
          k = r.basename || "/",
          E = t.useMemo(
            () => ({ router: r, navigator: x, static: !1, basename: k }),
            [r, x, k],
          ),
          S = t.useMemo(
            () => ({ v7_relativeSplatPath: r.future.v7_relativeSplatPath }),
            [r.future.v7_relativeSplatPath],
          );
        return (
          t.useEffect(() => zr(a, r.future), [a, r.future]),
          t.createElement(
            t.Fragment,
            null,
            t.createElement(
              pr.Provider,
              { value: E },
              t.createElement(
                hr.Provider,
                { value: o },
                t.createElement(
                  Ip.Provider,
                  { value: v.current },
                  t.createElement(
                    zp.Provider,
                    { value: c },
                    t.createElement(
                      Ur,
                      {
                        basename: k,
                        location: o.location,
                        navigationType: o.historyAction,
                        navigator: x,
                        future: S,
                      },
                      o.initialized || r.future.v7_partialHydration
                        ? t.createElement(Vp, {
                            routes: r.routes,
                            future: r.future,
                            state: o,
                          })
                        : n,
                    ),
                  ),
                ),
              ),
            ),
            null,
          )
        );
      }
      const Vp = t.memo(qp);
      function qp(e) {
        let { routes: t, future: n, state: r } = e;
        return Sr(t, void 0, r, n);
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
      var Kp, Qp;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(Kp || (Kp = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Qp || (Qp = {}));
      const Yp = function () {
          const e =
            ((t = [
              { path: "/", element: (0, $r.jsx)(Dp, {}) },
              { path: "/login", element: (0, $r.jsx)(Vr, {}) },
              { path: "/decks/public/category", element: (0, $r.jsx)(jp, {}) },
              {
                path: "/decks/public/:deckId/flashcards",
                element: (0, $r.jsx)(Lp, {}),
              },
              {
                path: "/profile",
                element: (0, $r.jsx)(ll, { children: (0, $r.jsx)(il, {}) }),
              },
              {
                path: "/decks",
                element: (0, $r.jsx)(ll, { children: (0, $r.jsx)(Hc, {}) }),
              },
              {
                path: "/decks/:deckId/flashcards",
                element: (0, $r.jsx)(ll, { children: (0, $r.jsx)(qc, {}) }),
              },
              {
                path: "/deck/add",
                element: (0, $r.jsx)(ll, { children: (0, $r.jsx)(Jc, {}) }),
              },
              {
                path: "/decks/:deckId/flashcards/:flashcardId/edit",
                element: (0, $r.jsx)(ll, {
                  children: (0, $r.jsx)(_p, { isEditing: !0 }),
                }),
              },
              {
                path: "/decks/:deckId/edit",
                element: (0, $r.jsx)(ll, {
                  children: (0, $r.jsx)(Jc, { isEditing: !0 }),
                }),
              },
              {
                path: "/decks/:deckId/add-flashcard",
                element: (0, $r.jsx)(ll, { children: (0, $r.jsx)(_p, {}) }),
              },
            ]),
            kn({
              basename: null == n ? void 0 : n.basename,
              future: Ap({}, null == n ? void 0 : n.future, {
                v7_prependBasename: !0,
              }),
              history: Nt({ window: null == n ? void 0 : n.window }),
              hydrationData: (null == n ? void 0 : n.hydrationData) || Mp(),
              routes: t,
              mapRouteProperties: Br,
              dataStrategy: null == n ? void 0 : n.dataStrategy,
              patchRoutesOnNavigation:
                null == n ? void 0 : n.patchRoutesOnNavigation,
              window: null == n ? void 0 : n.window,
            }).initialize());
          var t, n;
          return (0, $r.jsx)(Wr, {
            children: (0, $r.jsx)(ol, {
              children: (0, $r.jsx)(Wp, { router: e }),
            }),
          });
        },
        Xp = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(317)
              .then(n.bind(n, 317))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: a,
                  getLCP: o,
                  getTTFB: i,
                } = t;
                n(e), r(e), a(e), o(e), i(e);
              });
        };
      a
        .createRoot(document.getElementById("root"))
        .render((0, $r.jsx)(t.StrictMode, { children: (0, $r.jsx)(Yp, {}) })),
        Xp();
    })();
})();
//# sourceMappingURL=main.c9008025.js.map
