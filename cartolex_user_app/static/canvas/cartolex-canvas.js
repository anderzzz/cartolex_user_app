function Cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nd = { exports: {} }, xs = {}, Md = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o = Symbol.for("react.element"), U0 = Symbol.for("react.portal"), W0 = Symbol.for("react.fragment"), Y0 = Symbol.for("react.strict_mode"), X0 = Symbol.for("react.profiler"), K0 = Symbol.for("react.provider"), Q0 = Symbol.for("react.context"), G0 = Symbol.for("react.forward_ref"), Z0 = Symbol.for("react.suspense"), q0 = Symbol.for("react.memo"), J0 = Symbol.for("react.lazy"), lc = Symbol.iterator;
function ey(e) {
  return e === null || typeof e != "object" ? null : (e = lc && e[lc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Pd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, zd = Object.assign, Dd = {};
function Mr(e, t, n) {
  this.props = e, this.context = t, this.refs = Dd, this.updater = n || Pd;
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Td() {
}
Td.prototype = Mr.prototype;
function Hu(e, t, n) {
  this.props = e, this.context = t, this.refs = Dd, this.updater = n || Pd;
}
var Bu = Hu.prototype = new Td();
Bu.constructor = Hu;
zd(Bu, Mr.prototype);
Bu.isPureReactComponent = !0;
var uc = Array.isArray, Id = Object.prototype.hasOwnProperty, Vu = { current: null }, Ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ad(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Id.call(t, r) && !Ld.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: $o, type: e, key: i, ref: s, props: o, _owner: Vu.current };
}
function ty(e, t) {
  return { $$typeof: $o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $o;
}
function ny(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ac = /\/+/g;
function Gs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ny("" + e.key) : t.toString(36);
}
function Si(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case $o:
        case U0:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Gs(s, 0) : r, uc(o) ? (n = "", e != null && (n = e.replace(ac, "$&/") + "/"), Si(o, t, n, "", function(a) {
    return a;
  })) : o != null && (bu(o) && (o = ty(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(ac, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", uc(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var u = r + Gs(i, l);
    s += Si(i, t, n, u, o);
  }
  else if (u = ey(e), typeof u == "function") for (e = u.call(e), l = 0; !(i = e.next()).done; ) i = i.value, u = r + Gs(i, l++), s += Si(i, t, n, u, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Qo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Si(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function ry(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null }, ki = { transition: null }, oy = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: ki, ReactCurrentOwner: Vu };
function $d() {
  throw Error("act(...) is not supported in production builds of React.");
}
te.Children = { map: Qo, forEach: function(e, t, n) {
  Qo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Qo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Qo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!bu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Mr;
te.Fragment = W0;
te.Profiler = X0;
te.PureComponent = Hu;
te.StrictMode = Y0;
te.Suspense = Z0;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oy;
te.act = $d;
te.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = zd({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Vu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (u in t) Id.call(t, u) && !Ld.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: $o, type: e.type, key: o, ref: i, props: r, _owner: s };
};
te.createContext = function(e) {
  return e = { $$typeof: Q0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: K0, _context: e }, e.Consumer = e;
};
te.createElement = Ad;
te.createFactory = function(e) {
  var t = Ad.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: G0, render: e };
};
te.isValidElement = bu;
te.lazy = function(e) {
  return { $$typeof: J0, _payload: { _status: -1, _result: e }, _init: ry };
};
te.memo = function(e, t) {
  return { $$typeof: q0, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function(e) {
  var t = ki.transition;
  ki.transition = {};
  try {
    e();
  } finally {
    ki.transition = t;
  }
};
te.unstable_act = $d;
te.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
te.useContext = function(e) {
  return Re.current.useContext(e);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
te.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
te.useId = function() {
  return Re.current.useId();
};
te.useImperativeHandle = function(e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
te.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
te.useReducer = function(e, t, n) {
  return Re.current.useReducer(e, t, n);
};
te.useRef = function(e) {
  return Re.current.useRef(e);
};
te.useState = function(e) {
  return Re.current.useState(e);
};
te.useSyncExternalStore = function(e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function() {
  return Re.current.useTransition();
};
te.version = "18.3.1";
Md.exports = te;
var P = Md.exports;
const Ur = /* @__PURE__ */ Cd(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iy = P, sy = Symbol.for("react.element"), ly = Symbol.for("react.fragment"), uy = Object.prototype.hasOwnProperty, ay = iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, cy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rd(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) uy.call(t, r) && !cy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: sy, type: e, key: i, ref: s, props: o, _owner: ay.current };
}
xs.Fragment = ly;
xs.jsx = Rd;
xs.jsxs = Rd;
Nd.exports = xs;
var E = Nd.exports, jd = { exports: {} }, Ge = {}, Od = { exports: {} }, Fd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(_, M) {
    var L = _.length;
    _.push(M);
    e: for (; 0 < L; ) {
      var F = L - 1 >>> 1, O = _[F];
      if (0 < o(O, M)) _[F] = M, _[L] = O, L = F;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var M = _[0], L = _.pop();
    if (L !== M) {
      _[0] = L;
      e: for (var F = 0, O = _.length, U = O >>> 1; F < U; ) {
        var b = 2 * (F + 1) - 1, Y = _[b], X = b + 1, Q = _[X];
        if (0 > o(Y, L)) X < O && 0 > o(Q, Y) ? (_[F] = Q, _[X] = L, F = X) : (_[F] = Y, _[b] = L, F = b);
        else if (X < O && 0 > o(Q, L)) _[F] = Q, _[X] = L, F = X;
        else break e;
      }
    }
    return M;
  }
  function o(_, M) {
    var L = _.sortIndex - M.sortIndex;
    return L !== 0 ? L : _.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var u = [], a = [], d = 1, c = null, f = 3, g = !1, y = !1, x = !1, w = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(_) {
    for (var M = n(a); M !== null; ) {
      if (M.callback === null) r(a);
      else if (M.startTime <= _) r(a), M.sortIndex = M.expirationTime, t(u, M);
      else break;
      M = n(a);
    }
  }
  function v(_) {
    if (x = !1, h(_), !y) if (n(u) !== null) y = !0, D(S);
    else {
      var M = n(a);
      M !== null && R(v, M.startTime - _);
    }
  }
  function S(_, M) {
    y = !1, x && (x = !1, p(z), z = -1), g = !0;
    var L = f;
    try {
      for (h(M), c = n(u); c !== null && (!(c.expirationTime > M) || _ && !T()); ) {
        var F = c.callback;
        if (typeof F == "function") {
          c.callback = null, f = c.priorityLevel;
          var O = F(c.expirationTime <= M);
          M = e.unstable_now(), typeof O == "function" ? c.callback = O : c === n(u) && r(u), h(M);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var U = !0;
      else {
        var b = n(a);
        b !== null && R(v, b.startTime - M), U = !1;
      }
      return U;
    } finally {
      c = null, f = L, g = !1;
    }
  }
  var k = !1, N = null, z = -1, I = 5, j = -1;
  function T() {
    return !(e.unstable_now() - j < I);
  }
  function A() {
    if (N !== null) {
      var _ = e.unstable_now();
      j = _;
      var M = !0;
      try {
        M = N(!0, _);
      } finally {
        M ? H() : (k = !1, N = null);
      }
    } else k = !1;
  }
  var H;
  if (typeof m == "function") H = function() {
    m(A);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), $ = C.port2;
    C.port1.onmessage = A, H = function() {
      $.postMessage(null);
    };
  } else H = function() {
    w(A, 0);
  };
  function D(_) {
    N = _, k || (k = !0, H());
  }
  function R(_, M) {
    z = w(function() {
      _(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    y || g || (y = !0, D(S));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(_) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = f;
    }
    var L = f;
    f = M;
    try {
      return _();
    } finally {
      f = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, M) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var L = f;
    f = _;
    try {
      return M();
    } finally {
      f = L;
    }
  }, e.unstable_scheduleCallback = function(_, M, L) {
    var F = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? F + L : F) : L = F, _) {
      case 1:
        var O = -1;
        break;
      case 2:
        O = 250;
        break;
      case 5:
        O = 1073741823;
        break;
      case 4:
        O = 1e4;
        break;
      default:
        O = 5e3;
    }
    return O = L + O, _ = { id: d++, callback: M, priorityLevel: _, startTime: L, expirationTime: O, sortIndex: -1 }, L > F ? (_.sortIndex = L, t(a, _), n(u) === null && _ === n(a) && (x ? (p(z), z = -1) : x = !0, R(v, L - F))) : (_.sortIndex = O, t(u, _), y || g || (y = !0, D(S))), _;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(_) {
    var M = f;
    return function() {
      var L = f;
      f = M;
      try {
        return _.apply(this, arguments);
      } finally {
        f = L;
      }
    };
  };
})(Fd);
Od.exports = Fd;
var fy = Od.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dy = P, Ke = fy;
function B(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Hd = /* @__PURE__ */ new Set(), uo = {};
function On(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (uo[e] = t, e = 0; e < t.length; e++) Hd.add(t[e]);
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Al = Object.prototype.hasOwnProperty, hy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, cc = {}, fc = {};
function py(e) {
  return Al.call(fc, e) ? !0 : Al.call(cc, e) ? !1 : hy.test(e) ? fc[e] = !0 : (cc[e] = !0, !1);
}
function gy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function my(e, t, n, r) {
  if (t === null || typeof t > "u" || gy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function je(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Pe[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Pe[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Pe[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Pe[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Pe[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Pe[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Pe[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Pe[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Pe[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uu = /[\-:]([a-z])/g;
function Wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Uu,
    Wu
  );
  Pe[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Uu, Wu);
  Pe[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Uu, Wu);
  Pe[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Pe[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Pe[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yu(e, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (my(t, n, o, r) && (n = null), r || o === null ? py(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bt = dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Go = Symbol.for("react.element"), bn = Symbol.for("react.portal"), Un = Symbol.for("react.fragment"), Xu = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), Bd = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), Ku = Symbol.for("react.forward_ref"), Rl = Symbol.for("react.suspense"), jl = Symbol.for("react.suspense_list"), Qu = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), bd = Symbol.for("react.offscreen"), dc = Symbol.iterator;
function Ar(e) {
  return e === null || typeof e != "object" ? null : (e = dc && e[dc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ye = Object.assign, Zs;
function Wr(e) {
  if (Zs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Zs = t && t[1] || "";
  }
  return `
` + Zs + e;
}
var qs = !1;
function Js(e, t) {
  if (!e || qs) return "";
  qs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var o = a.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
        if (s !== 1 || l !== 1)
          do
            if (s--, l--, 0 > l || o[s] !== i[l]) {
              var u = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    qs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Wr(e) : "";
}
function yy(e) {
  switch (e.tag) {
    case 5:
      return Wr(e.type);
    case 16:
      return Wr("Lazy");
    case 13:
      return Wr("Suspense");
    case 19:
      return Wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Js(e.type, !1), e;
    case 11:
      return e = Js(e.type.render, !1), e;
    case 1:
      return e = Js(e.type, !0), e;
    default:
      return "";
  }
}
function Ol(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Un:
      return "Fragment";
    case bn:
      return "Portal";
    case $l:
      return "Profiler";
    case Xu:
      return "StrictMode";
    case Rl:
      return "Suspense";
    case jl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Vd:
      return (e.displayName || "Context") + ".Consumer";
    case Bd:
      return (e._context.displayName || "Context") + ".Provider";
    case Ku:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Qu:
      return t = e.displayName || null, t !== null ? t : Ol(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return Ol(e(t));
      } catch {
      }
  }
  return null;
}
function vy(e) {
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
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
      return Ol(t);
    case 8:
      return t === Xu ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ud(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function xy(e) {
  var t = Ud(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Zo(e) {
  e._valueTracker || (e._valueTracker = xy(e));
}
function Wd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ud(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Oi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fl(e, t) {
  var n = t.checked;
  return ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function hc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = fn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Yd(e, t) {
  t = t.checked, t != null && Yu(e, "checked", t, !1);
}
function Hl(e, t) {
  Yd(e, t);
  var n = fn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Bl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bl(e, t.type, fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function pc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Bl(e, t, n) {
  (t !== "number" || Oi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yr = Array.isArray;
function rr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(B(92));
      if (Yr(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: fn(n) };
}
function Xd(e, t) {
  var n = fn(t.value), r = fn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function mc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function bl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Kd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var qo, Qd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (qo = qo || document.createElement("div"), qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ao(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zr = {
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
  strokeWidth: !0
}, wy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zr).forEach(function(e) {
  wy.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Zr[t] = Zr[e];
  });
});
function Gd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zr.hasOwnProperty(e) && Zr[e] ? ("" + t).trim() : t + "px";
}
function Zd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Gd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Sy = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ul(e, t) {
  if (t) {
    if (Sy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62));
  }
}
function Wl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Yl = null;
function Gu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Xl = null, or = null, ir = null;
function yc(e) {
  if (e = Oo(e)) {
    if (typeof Xl != "function") throw Error(B(280));
    var t = e.stateNode;
    t && (t = _s(t), Xl(e.stateNode, e.type, t));
  }
}
function qd(e) {
  or ? ir ? ir.push(e) : ir = [e] : or = e;
}
function Jd() {
  if (or) {
    var e = or, t = ir;
    if (ir = or = null, yc(e), t) for (e = 0; e < t.length; e++) yc(t[e]);
  }
}
function eh(e, t) {
  return e(t);
}
function th() {
}
var el = !1;
function nh(e, t, n) {
  if (el) return e(t, n);
  el = !0;
  try {
    return eh(e, t, n);
  } finally {
    el = !1, (or !== null || ir !== null) && (th(), Jd());
  }
}
function co(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _s(n);
  if (r === null) return null;
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(B(231, t, typeof n));
  return n;
}
var Kl = !1;
if (Ot) try {
  var $r = {};
  Object.defineProperty($r, "passive", { get: function() {
    Kl = !0;
  } }), window.addEventListener("test", $r, $r), window.removeEventListener("test", $r, $r);
} catch {
  Kl = !1;
}
function ky(e, t, n, r, o, i, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var qr = !1, Fi = null, Hi = !1, Ql = null, Ey = { onError: function(e) {
  qr = !0, Fi = e;
} };
function _y(e, t, n, r, o, i, s, l, u) {
  qr = !1, Fi = null, ky.apply(Ey, arguments);
}
function Cy(e, t, n, r, o, i, s, l, u) {
  if (_y.apply(this, arguments), qr) {
    if (qr) {
      var a = Fi;
      qr = !1, Fi = null;
    } else throw Error(B(198));
    Hi || (Hi = !0, Ql = a);
  }
}
function Fn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function vc(e) {
  if (Fn(e) !== e) throw Error(B(188));
}
function Ny(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Fn(e), t === null) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return vc(o), e;
        if (i === r) return vc(o), t;
        i = i.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (l === r) {
          s = !0, r = o, n = i;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (l === r) {
            s = !0, r = i, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function oh(e) {
  return e = Ny(e), e !== null ? ih(e) : null;
}
function ih(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ih(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sh = Ke.unstable_scheduleCallback, xc = Ke.unstable_cancelCallback, My = Ke.unstable_shouldYield, Py = Ke.unstable_requestPaint, xe = Ke.unstable_now, zy = Ke.unstable_getCurrentPriorityLevel, Zu = Ke.unstable_ImmediatePriority, lh = Ke.unstable_UserBlockingPriority, Bi = Ke.unstable_NormalPriority, Dy = Ke.unstable_LowPriority, uh = Ke.unstable_IdlePriority, ws = null, Et = null;
function Ty(e) {
  if (Et && typeof Et.onCommitFiberRoot == "function") try {
    Et.onCommitFiberRoot(ws, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var gt = Math.clz32 ? Math.clz32 : Ay, Iy = Math.log, Ly = Math.LN2;
function Ay(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Iy(e) / Ly | 0) | 0;
}
var Jo = 64, ei = 4194304;
function Xr(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function Vi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = Xr(l) : (i &= s, i !== 0 && (r = Xr(i)));
  } else s = n & ~o, s !== 0 ? r = Xr(s) : i !== 0 && (r = Xr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - gt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function $y(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ry(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - gt(i), l = 1 << s, u = o[s];
    u === -1 ? (!(l & n) || l & r) && (o[s] = $y(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function Gl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ah() {
  var e = Jo;
  return Jo <<= 1, !(Jo & 4194240) && (Jo = 64), e;
}
function tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ro(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - gt(t), e[t] = n;
}
function jy(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - gt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function qu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - gt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function ch(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var fh, Ju, dh, hh, ph, Zl = !1, ti = [], nn = null, rn = null, on = null, fo = /* @__PURE__ */ new Map(), ho = /* @__PURE__ */ new Map(), Zt = [], Oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      fo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ho.delete(t.pointerId);
  }
}
function Rr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Oo(t), t !== null && Ju(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Fy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return nn = Rr(nn, e, t, n, r, o), !0;
    case "dragenter":
      return rn = Rr(rn, e, t, n, r, o), !0;
    case "mouseover":
      return on = Rr(on, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return fo.set(i, Rr(fo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ho.set(i, Rr(ho.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function gh(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = rh(n), t !== null) {
          e.blockedOn = t, ph(e.priority, function() {
            dh(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ei(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Yl = r, n.target.dispatchEvent(r), Yl = null;
    } else return t = Oo(n), t !== null && Ju(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Sc(e, t, n) {
  Ei(e) && n.delete(t);
}
function Hy() {
  Zl = !1, nn !== null && Ei(nn) && (nn = null), rn !== null && Ei(rn) && (rn = null), on !== null && Ei(on) && (on = null), fo.forEach(Sc), ho.forEach(Sc);
}
function jr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Zl || (Zl = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Hy)));
}
function po(e) {
  function t(o) {
    return jr(o, e);
  }
  if (0 < ti.length) {
    jr(ti[0], e);
    for (var n = 1; n < ti.length; n++) {
      var r = ti[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nn !== null && jr(nn, e), rn !== null && jr(rn, e), on !== null && jr(on, e), fo.forEach(t), ho.forEach(t), n = 0; n < Zt.length; n++) r = Zt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && (n = Zt[0], n.blockedOn === null); ) gh(n), n.blockedOn === null && Zt.shift();
}
var sr = bt.ReactCurrentBatchConfig, bi = !0;
function By(e, t, n, r) {
  var o = se, i = sr.transition;
  sr.transition = null;
  try {
    se = 1, ea(e, t, n, r);
  } finally {
    se = o, sr.transition = i;
  }
}
function Vy(e, t, n, r) {
  var o = se, i = sr.transition;
  sr.transition = null;
  try {
    se = 4, ea(e, t, n, r);
  } finally {
    se = o, sr.transition = i;
  }
}
function ea(e, t, n, r) {
  if (bi) {
    var o = ql(e, t, n, r);
    if (o === null) fl(e, t, r, Ui, n), wc(e, r);
    else if (Fy(o, e, t, n, r)) r.stopPropagation();
    else if (wc(e, r), t & 4 && -1 < Oy.indexOf(e)) {
      for (; o !== null; ) {
        var i = Oo(o);
        if (i !== null && fh(i), i = ql(e, t, n, r), i === null && fl(e, t, r, Ui, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else fl(e, t, r, null, n);
  }
}
var Ui = null;
function ql(e, t, n, r) {
  if (Ui = null, e = Gu(r), e = Sn(e), e !== null) if (t = Fn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = rh(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ui = e, null;
}
function mh(e) {
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
      switch (zy()) {
        case Zu:
          return 1;
        case lh:
          return 4;
        case Bi:
        case Dy:
          return 16;
        case uh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, ta = null, _i = null;
function yh() {
  if (_i) return _i;
  var e, t = ta, n = t.length, r, o = "value" in en ? en.value : en.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return _i = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ci(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ni() {
  return !0;
}
function kc() {
  return !1;
}
function Ze(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ni : kc, this.isPropagationStopped = kc, this;
  }
  return ye(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ni);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ni);
  }, persist: function() {
  }, isPersistent: ni }), t;
}
var Pr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, na = Ze(Pr), jo = ye({}, Pr, { view: 0, detail: 0 }), by = Ze(jo), nl, rl, Or, Ss = ye({}, jo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ra, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (nl = e.screenX - Or.screenX, rl = e.screenY - Or.screenY) : rl = nl = 0, Or = e), nl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : rl;
} }), Ec = Ze(Ss), Uy = ye({}, Ss, { dataTransfer: 0 }), Wy = Ze(Uy), Yy = ye({}, jo, { relatedTarget: 0 }), ol = Ze(Yy), Xy = ye({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ky = Ze(Xy), Qy = ye({}, Pr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Gy = Ze(Qy), Zy = ye({}, Pr, { data: 0 }), _c = Ze(Zy), qy = {
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
  MozPrintableKey: "Unidentified"
}, Jy = {
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
  224: "Meta"
}, ev = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ev[e]) ? !!t[e] : !1;
}
function ra() {
  return tv;
}
var nv = ye({}, jo, { key: function(e) {
  if (e.key) {
    var t = qy[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jy[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ra, charCode: function(e) {
  return e.type === "keypress" ? Ci(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), rv = Ze(nv), ov = ye({}, Ss, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cc = Ze(ov), iv = ye({}, jo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ra }), sv = Ze(iv), lv = ye({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uv = Ze(lv), av = ye({}, Ss, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), cv = Ze(av), fv = [9, 13, 27, 32], oa = Ot && "CompositionEvent" in window, Jr = null;
Ot && "documentMode" in document && (Jr = document.documentMode);
var dv = Ot && "TextEvent" in window && !Jr, vh = Ot && (!oa || Jr && 8 < Jr && 11 >= Jr), Nc = " ", Mc = !1;
function xh(e, t) {
  switch (e) {
    case "keyup":
      return fv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function wh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function hv(e, t) {
  switch (e) {
    case "compositionend":
      return wh(t);
    case "keypress":
      return t.which !== 32 ? null : (Mc = !0, Nc);
    case "textInput":
      return e = t.data, e === Nc && Mc ? null : e;
    default:
      return null;
  }
}
function pv(e, t) {
  if (Wn) return e === "compositionend" || !oa && xh(e, t) ? (e = yh(), _i = ta = en = null, Wn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return vh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Pc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gv[e.type] : t === "textarea";
}
function Sh(e, t, n, r) {
  qd(r), t = Wi(t, "onChange"), 0 < t.length && (n = new na("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var eo = null, go = null;
function mv(e) {
  Ih(e, 0);
}
function ks(e) {
  var t = Kn(e);
  if (Wd(t)) return e;
}
function yv(e, t) {
  if (e === "change") return t;
}
var kh = !1;
if (Ot) {
  var il;
  if (Ot) {
    var sl = "oninput" in document;
    if (!sl) {
      var zc = document.createElement("div");
      zc.setAttribute("oninput", "return;"), sl = typeof zc.oninput == "function";
    }
    il = sl;
  } else il = !1;
  kh = il && (!document.documentMode || 9 < document.documentMode);
}
function Dc() {
  eo && (eo.detachEvent("onpropertychange", Eh), go = eo = null);
}
function Eh(e) {
  if (e.propertyName === "value" && ks(go)) {
    var t = [];
    Sh(t, go, e, Gu(e)), nh(mv, t);
  }
}
function vv(e, t, n) {
  e === "focusin" ? (Dc(), eo = t, go = n, eo.attachEvent("onpropertychange", Eh)) : e === "focusout" && Dc();
}
function xv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ks(go);
}
function wv(e, t) {
  if (e === "click") return ks(t);
}
function Sv(e, t) {
  if (e === "input" || e === "change") return ks(t);
}
function kv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var yt = typeof Object.is == "function" ? Object.is : kv;
function mo(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Al.call(t, o) || !yt(e[o], t[o])) return !1;
  }
  return !0;
}
function Tc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ic(e, t) {
  var n = Tc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Tc(n);
  }
}
function _h(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _h(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ch() {
  for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Oi(e.document);
  }
  return t;
}
function ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ev(e) {
  var t = Ch(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && _h(n.ownerDocument.documentElement, n)) {
    if (r !== null && ia(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Ic(n, i);
        var s = Ic(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var _v = Ot && "documentMode" in document && 11 >= document.documentMode, Yn = null, Jl = null, to = null, eu = !1;
function Lc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  eu || Yn == null || Yn !== Oi(r) || (r = Yn, "selectionStart" in r && ia(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), to && mo(to, r) || (to = r, r = Wi(Jl, "onSelect"), 0 < r.length && (t = new na("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yn)));
}
function ri(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xn = { animationend: ri("Animation", "AnimationEnd"), animationiteration: ri("Animation", "AnimationIteration"), animationstart: ri("Animation", "AnimationStart"), transitionend: ri("Transition", "TransitionEnd") }, ll = {}, Nh = {};
Ot && (Nh = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);
function Es(e) {
  if (ll[e]) return ll[e];
  if (!Xn[e]) return e;
  var t = Xn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nh) return ll[e] = t[n];
  return e;
}
var Mh = Es("animationend"), Ph = Es("animationiteration"), zh = Es("animationstart"), Dh = Es("transitionend"), Th = /* @__PURE__ */ new Map(), Ac = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hn(e, t) {
  Th.set(e, t), On(t, [e]);
}
for (var ul = 0; ul < Ac.length; ul++) {
  var al = Ac[ul], Cv = al.toLowerCase(), Nv = al[0].toUpperCase() + al.slice(1);
  hn(Cv, "on" + Nv);
}
hn(Mh, "onAnimationEnd");
hn(Ph, "onAnimationIteration");
hn(zh, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Dh, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
On("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
On("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
On("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
On("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
function $c(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Cy(r, t, void 0, e), e.currentTarget = null;
}
function Ih(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], u = l.instance, a = l.currentTarget;
        if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
        $c(o, l, a), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], u = l.instance, a = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
        $c(o, l, a), i = u;
      }
    }
  }
  if (Hi) throw e = Ql, Hi = !1, Ql = null, e;
}
function ae(e, t) {
  var n = t[iu];
  n === void 0 && (n = t[iu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Lh(t, e, 2, !1), n.add(r));
}
function cl(e, t, n) {
  var r = 0;
  t && (r |= 4), Lh(n, e, r, t);
}
var oi = "_reactListening" + Math.random().toString(36).slice(2);
function yo(e) {
  if (!e[oi]) {
    e[oi] = !0, Hd.forEach(function(n) {
      n !== "selectionchange" && (Mv.has(n) || cl(n, !1, e), cl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oi] || (t[oi] = !0, cl("selectionchange", !1, t));
  }
}
function Lh(e, t, n, r) {
  switch (mh(t)) {
    case 1:
      var o = By;
      break;
    case 4:
      o = Vy;
      break;
    default:
      o = ea;
  }
  n = o.bind(null, t, n, e), o = void 0, !Kl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function fl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = Sn(l), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  nh(function() {
    var a = i, d = Gu(n), c = [];
    e: {
      var f = Th.get(e);
      if (f !== void 0) {
        var g = na, y = e;
        switch (e) {
          case "keypress":
            if (Ci(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = rv;
            break;
          case "focusin":
            y = "focus", g = ol;
            break;
          case "focusout":
            y = "blur", g = ol;
            break;
          case "beforeblur":
          case "afterblur":
            g = ol;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ec;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Wy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = sv;
            break;
          case Mh:
          case Ph:
          case zh:
            g = Ky;
            break;
          case Dh:
            g = uv;
            break;
          case "scroll":
            g = by;
            break;
          case "wheel":
            g = cv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Gy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Cc;
        }
        var x = (t & 4) !== 0, w = !x && e === "scroll", p = x ? f !== null ? f + "Capture" : null : f;
        x = [];
        for (var m = a, h; m !== null; ) {
          h = m;
          var v = h.stateNode;
          if (h.tag === 5 && v !== null && (h = v, p !== null && (v = co(m, p), v != null && x.push(vo(m, v, h)))), w) break;
          m = m.return;
        }
        0 < x.length && (f = new g(f, y, null, n, d), c.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== Yl && (y = n.relatedTarget || n.fromElement) && (Sn(y) || y[Ft])) break e;
        if ((g || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = a, y = y ? Sn(y) : null, y !== null && (w = Fn(y), y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = a), g !== y)) {
          if (x = Ec, v = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (x = Cc, v = "onPointerLeave", p = "onPointerEnter", m = "pointer"), w = g == null ? f : Kn(g), h = y == null ? f : Kn(y), f = new x(v, m + "leave", g, n, d), f.target = w, f.relatedTarget = h, v = null, Sn(d) === a && (x = new x(p, m + "enter", y, n, d), x.target = h, x.relatedTarget = w, v = x), w = v, g && y) t: {
            for (x = g, p = y, m = 0, h = x; h; h = Bn(h)) m++;
            for (h = 0, v = p; v; v = Bn(v)) h++;
            for (; 0 < m - h; ) x = Bn(x), m--;
            for (; 0 < h - m; ) p = Bn(p), h--;
            for (; m--; ) {
              if (x === p || p !== null && x === p.alternate) break t;
              x = Bn(x), p = Bn(p);
            }
            x = null;
          }
          else x = null;
          g !== null && Rc(c, f, g, x, !1), y !== null && w !== null && Rc(c, w, y, x, !0);
        }
      }
      e: {
        if (f = a ? Kn(a) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var S = yv;
        else if (Pc(f)) if (kh) S = Sv;
        else {
          S = xv;
          var k = vv;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = wv);
        if (S && (S = S(e, a))) {
          Sh(c, S, n, d);
          break e;
        }
        k && k(e, f, a), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Bl(f, "number", f.value);
      }
      switch (k = a ? Kn(a) : window, e) {
        case "focusin":
          (Pc(k) || k.contentEditable === "true") && (Yn = k, Jl = a, to = null);
          break;
        case "focusout":
          to = Jl = Yn = null;
          break;
        case "mousedown":
          eu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          eu = !1, Lc(c, n, d);
          break;
        case "selectionchange":
          if (_v) break;
        case "keydown":
        case "keyup":
          Lc(c, n, d);
      }
      var N;
      if (oa) e: {
        switch (e) {
          case "compositionstart":
            var z = "onCompositionStart";
            break e;
          case "compositionend":
            z = "onCompositionEnd";
            break e;
          case "compositionupdate":
            z = "onCompositionUpdate";
            break e;
        }
        z = void 0;
      }
      else Wn ? xh(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (vh && n.locale !== "ko" && (Wn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Wn && (N = yh()) : (en = d, ta = "value" in en ? en.value : en.textContent, Wn = !0)), k = Wi(a, z), 0 < k.length && (z = new _c(z, e, null, n, d), c.push({ event: z, listeners: k }), N ? z.data = N : (N = wh(n), N !== null && (z.data = N)))), (N = dv ? hv(e, n) : pv(e, n)) && (a = Wi(a, "onBeforeInput"), 0 < a.length && (d = new _c("onBeforeInput", "beforeinput", null, n, d), c.push({ event: d, listeners: a }), d.data = N));
    }
    Ih(c, t);
  });
}
function vo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = co(e, n), i != null && r.unshift(vo(e, i, o)), i = co(e, t), i != null && r.push(vo(e, i, o))), e = e.return;
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Rc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, u = l.alternate, a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 && a !== null && (l = a, o ? (u = co(n, i), u != null && s.unshift(vo(n, u, l))) : o || (u = co(n, i), u != null && s.push(vo(n, u, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Pv = /\r\n?/g, zv = /\u0000|\uFFFD/g;
function jc(e) {
  return (typeof e == "string" ? e : "" + e).replace(Pv, `
`).replace(zv, "");
}
function ii(e, t, n) {
  if (t = jc(t), jc(e) !== t && n) throw Error(B(425));
}
function Yi() {
}
var tu = null, nu = null;
function ru(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ou = typeof setTimeout == "function" ? setTimeout : void 0, Dv = typeof clearTimeout == "function" ? clearTimeout : void 0, Oc = typeof Promise == "function" ? Promise : void 0, Tv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oc < "u" ? function(e) {
  return Oc.resolve(null).then(e).catch(Iv);
} : ou;
function Iv(e) {
  setTimeout(function() {
    throw e;
  });
}
function dl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), po(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  po(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Fc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + zr, xo = "__reactProps$" + zr, Ft = "__reactContainer$" + zr, iu = "__reactEvents$" + zr, Lv = "__reactListeners$" + zr, Av = "__reactHandles$" + zr;
function Sn(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[kt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fc(e); e !== null; ) {
        if (n = e[kt]) return n;
        e = Fc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Oo(e) {
  return e = e[kt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function _s(e) {
  return e[xo] || null;
}
var su = [], Qn = -1;
function pn(e) {
  return { current: e };
}
function fe(e) {
  0 > Qn || (e.current = su[Qn], su[Qn] = null, Qn--);
}
function le(e, t) {
  Qn++, su[Qn] = e.current, e.current = t;
}
var dn = {}, Le = pn(dn), Be = pn(!1), zn = dn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ve(e) {
  return e = e.childContextTypes, e != null;
}
function Xi() {
  fe(Be), fe(Le);
}
function Hc(e, t, n) {
  if (Le.current !== dn) throw Error(B(168));
  le(Le, t), le(Be, n);
}
function Ah(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(B(108, vy(e) || "Unknown", o));
  return ye({}, n, r);
}
function Ki(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, zn = Le.current, le(Le, e), le(Be, Be.current), !0;
}
function Bc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n ? (e = Ah(e, t, zn), r.__reactInternalMemoizedMergedChildContext = e, fe(Be), fe(Le), le(Le, e)) : fe(Be), le(Be, n);
}
var It = null, Cs = !1, hl = !1;
function $h(e) {
  It === null ? It = [e] : It.push(e);
}
function $v(e) {
  Cs = !0, $h(e);
}
function gn() {
  if (!hl && It !== null) {
    hl = !0;
    var e = 0, t = se;
    try {
      var n = It;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      It = null, Cs = !1;
    } catch (o) {
      throw It !== null && (It = It.slice(e + 1)), sh(Zu, gn), o;
    } finally {
      se = t, hl = !1;
    }
  }
  return null;
}
var Gn = [], Zn = 0, Qi = null, Gi = 0, qe = [], Je = 0, Dn = null, Lt = 1, At = "";
function vn(e, t) {
  Gn[Zn++] = Gi, Gn[Zn++] = Qi, Qi = e, Gi = t;
}
function Rh(e, t, n) {
  qe[Je++] = Lt, qe[Je++] = At, qe[Je++] = Dn, Dn = e;
  var r = Lt;
  e = At;
  var o = 32 - gt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - gt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Lt = 1 << 32 - gt(t) + o | n << o | r, At = i + e;
  } else Lt = 1 << i | n << o | r, At = e;
}
function sa(e) {
  e.return !== null && (vn(e, 1), Rh(e, 1, 0));
}
function la(e) {
  for (; e === Qi; ) Qi = Gn[--Zn], Gn[Zn] = null, Gi = Gn[--Zn], Gn[Zn] = null;
  for (; e === Dn; ) Dn = qe[--Je], qe[Je] = null, At = qe[--Je], qe[Je] = null, Lt = qe[--Je], qe[Je] = null;
}
var Xe = null, Ye = null, de = !1, ft = null;
function jh(e, t) {
  var n = et(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Vc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = sn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dn !== null ? { id: Lt, overflow: At } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function lu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uu(e) {
  if (de) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Vc(e, t)) {
        if (lu(e)) throw Error(B(418));
        t = sn(n.nextSibling);
        var r = Xe;
        t && Vc(e, t) ? jh(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, Xe = e);
      }
    } else {
      if (lu(e)) throw Error(B(418));
      e.flags = e.flags & -4097 | 2, de = !1, Xe = e;
    }
  }
}
function bc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Xe = e;
}
function si(e) {
  if (e !== Xe) return !1;
  if (!de) return bc(e), de = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ru(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (lu(e)) throw Oh(), Error(B(418));
    for (; t; ) jh(e, t), t = sn(t.nextSibling);
  }
  if (bc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = sn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Oh() {
  for (var e = Ye; e; ) e = sn(e.nextSibling);
}
function hr() {
  Ye = Xe = null, de = !1;
}
function ua(e) {
  ft === null ? ft = [e] : ft.push(e);
}
var Rv = bt.ReactCurrentBatchConfig;
function Fr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function li(e, t) {
  throw e = Object.prototype.toString.call(t), Error(B(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Uc(e) {
  var t = e._init;
  return t(e._payload);
}
function Fh(e) {
  function t(p, m) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [m], p.flags |= 16) : h.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), m = m.sibling;
    return null;
  }
  function r(p, m) {
    for (p = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), m = m.sibling;
    return p;
  }
  function o(p, m) {
    return p = cn(p, m), p.index = 0, p.sibling = null, p;
  }
  function i(p, m, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < m ? (p.flags |= 2, m) : h) : (p.flags |= 2, m)) : (p.flags |= 1048576, m);
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, m, h, v) {
    return m === null || m.tag !== 6 ? (m = wl(h, p.mode, v), m.return = p, m) : (m = o(m, h), m.return = p, m);
  }
  function u(p, m, h, v) {
    var S = h.type;
    return S === Un ? d(p, m, h.props.children, v, h.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Qt && Uc(S) === m.type) ? (v = o(m, h.props), v.ref = Fr(p, m, h), v.return = p, v) : (v = Ii(h.type, h.key, h.props, null, p.mode, v), v.ref = Fr(p, m, h), v.return = p, v);
  }
  function a(p, m, h, v) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== h.containerInfo || m.stateNode.implementation !== h.implementation ? (m = Sl(h, p.mode, v), m.return = p, m) : (m = o(m, h.children || []), m.return = p, m);
  }
  function d(p, m, h, v, S) {
    return m === null || m.tag !== 7 ? (m = Nn(h, p.mode, v, S), m.return = p, m) : (m = o(m, h), m.return = p, m);
  }
  function c(p, m, h) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = wl("" + m, p.mode, h), m.return = p, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Go:
          return h = Ii(m.type, m.key, m.props, null, p.mode, h), h.ref = Fr(p, null, m), h.return = p, h;
        case bn:
          return m = Sl(m, p.mode, h), m.return = p, m;
        case Qt:
          var v = m._init;
          return c(p, v(m._payload), h);
      }
      if (Yr(m) || Ar(m)) return m = Nn(m, p.mode, h, null), m.return = p, m;
      li(p, m);
    }
    return null;
  }
  function f(p, m, h, v) {
    var S = m !== null ? m.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : l(p, m, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Go:
          return h.key === S ? u(p, m, h, v) : null;
        case bn:
          return h.key === S ? a(p, m, h, v) : null;
        case Qt:
          return S = h._init, f(
            p,
            m,
            S(h._payload),
            v
          );
      }
      if (Yr(h) || Ar(h)) return S !== null ? null : d(p, m, h, v, null);
      li(p, h);
    }
    return null;
  }
  function g(p, m, h, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return p = p.get(h) || null, l(m, p, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Go:
          return p = p.get(v.key === null ? h : v.key) || null, u(m, p, v, S);
        case bn:
          return p = p.get(v.key === null ? h : v.key) || null, a(m, p, v, S);
        case Qt:
          var k = v._init;
          return g(p, m, h, k(v._payload), S);
      }
      if (Yr(v) || Ar(v)) return p = p.get(h) || null, d(m, p, v, S, null);
      li(m, v);
    }
    return null;
  }
  function y(p, m, h, v) {
    for (var S = null, k = null, N = m, z = m = 0, I = null; N !== null && z < h.length; z++) {
      N.index > z ? (I = N, N = null) : I = N.sibling;
      var j = f(p, N, h[z], v);
      if (j === null) {
        N === null && (N = I);
        break;
      }
      e && N && j.alternate === null && t(p, N), m = i(j, m, z), k === null ? S = j : k.sibling = j, k = j, N = I;
    }
    if (z === h.length) return n(p, N), de && vn(p, z), S;
    if (N === null) {
      for (; z < h.length; z++) N = c(p, h[z], v), N !== null && (m = i(N, m, z), k === null ? S = N : k.sibling = N, k = N);
      return de && vn(p, z), S;
    }
    for (N = r(p, N); z < h.length; z++) I = g(N, p, z, h[z], v), I !== null && (e && I.alternate !== null && N.delete(I.key === null ? z : I.key), m = i(I, m, z), k === null ? S = I : k.sibling = I, k = I);
    return e && N.forEach(function(T) {
      return t(p, T);
    }), de && vn(p, z), S;
  }
  function x(p, m, h, v) {
    var S = Ar(h);
    if (typeof S != "function") throw Error(B(150));
    if (h = S.call(h), h == null) throw Error(B(151));
    for (var k = S = null, N = m, z = m = 0, I = null, j = h.next(); N !== null && !j.done; z++, j = h.next()) {
      N.index > z ? (I = N, N = null) : I = N.sibling;
      var T = f(p, N, j.value, v);
      if (T === null) {
        N === null && (N = I);
        break;
      }
      e && N && T.alternate === null && t(p, N), m = i(T, m, z), k === null ? S = T : k.sibling = T, k = T, N = I;
    }
    if (j.done) return n(
      p,
      N
    ), de && vn(p, z), S;
    if (N === null) {
      for (; !j.done; z++, j = h.next()) j = c(p, j.value, v), j !== null && (m = i(j, m, z), k === null ? S = j : k.sibling = j, k = j);
      return de && vn(p, z), S;
    }
    for (N = r(p, N); !j.done; z++, j = h.next()) j = g(N, p, z, j.value, v), j !== null && (e && j.alternate !== null && N.delete(j.key === null ? z : j.key), m = i(j, m, z), k === null ? S = j : k.sibling = j, k = j);
    return e && N.forEach(function(A) {
      return t(p, A);
    }), de && vn(p, z), S;
  }
  function w(p, m, h, v) {
    if (typeof h == "object" && h !== null && h.type === Un && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Go:
          e: {
            for (var S = h.key, k = m; k !== null; ) {
              if (k.key === S) {
                if (S = h.type, S === Un) {
                  if (k.tag === 7) {
                    n(p, k.sibling), m = o(k, h.props.children), m.return = p, p = m;
                    break e;
                  }
                } else if (k.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Qt && Uc(S) === k.type) {
                  n(p, k.sibling), m = o(k, h.props), m.ref = Fr(p, k, h), m.return = p, p = m;
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            h.type === Un ? (m = Nn(h.props.children, p.mode, v, h.key), m.return = p, p = m) : (v = Ii(h.type, h.key, h.props, null, p.mode, v), v.ref = Fr(p, m, h), v.return = p, p = v);
          }
          return s(p);
        case bn:
          e: {
            for (k = h.key; m !== null; ) {
              if (m.key === k) if (m.tag === 4 && m.stateNode.containerInfo === h.containerInfo && m.stateNode.implementation === h.implementation) {
                n(p, m.sibling), m = o(m, h.children || []), m.return = p, p = m;
                break e;
              } else {
                n(p, m);
                break;
              }
              else t(p, m);
              m = m.sibling;
            }
            m = Sl(h, p.mode, v), m.return = p, p = m;
          }
          return s(p);
        case Qt:
          return k = h._init, w(p, m, k(h._payload), v);
      }
      if (Yr(h)) return y(p, m, h, v);
      if (Ar(h)) return x(p, m, h, v);
      li(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, m !== null && m.tag === 6 ? (n(p, m.sibling), m = o(m, h), m.return = p, p = m) : (n(p, m), m = wl(h, p.mode, v), m.return = p, p = m), s(p)) : n(p, m);
  }
  return w;
}
var pr = Fh(!0), Hh = Fh(!1), Zi = pn(null), qi = null, qn = null, aa = null;
function ca() {
  aa = qn = qi = null;
}
function fa(e) {
  var t = Zi.current;
  fe(Zi), e._currentValue = t;
}
function au(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function lr(e, t) {
  qi = e, aa = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function nt(e) {
  var t = e._currentValue;
  if (aa !== e) if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
    if (qi === null) throw Error(B(308));
    qn = e, qi.dependencies = { lanes: 0, firstContext: e };
  } else qn = qn.next = e;
  return t;
}
var kn = null;
function da(e) {
  kn === null ? kn = [e] : kn.push(e);
}
function Bh(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, da(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ht(e, r);
}
function Ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function ha(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Vh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Rt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, re & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ht(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, da(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ht(e, n);
}
function Ni(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, qu(e, n);
  }
}
function Wc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ji(e, t, n, r) {
  var o = e.updateQueue;
  Gt = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var u = l, a = u.next;
    u.next = null, s === null ? i = a : s.next = a, s = u;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = a : l.next = a, d.lastBaseUpdate = u));
  }
  if (i !== null) {
    var c = o.baseState;
    s = 0, d = a = u = null, l = i;
    do {
      var f = l.lane, g = l.eventTime;
      if ((r & f) === f) {
        d !== null && (d = d.next = {
          eventTime: g,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, x = l;
          switch (f = t, g = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                c = y.call(g, c, f);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, f = typeof y == "function" ? y.call(g, c, f) : y, f == null) break e;
              c = ye({}, c, f);
              break e;
            case 2:
              Gt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [l] : f.push(l));
      } else g = { eventTime: g, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (a = d = g, u = c) : d = d.next = g, s |= f;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        f = l, l = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (u = c), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    In |= s, e.lanes = s, e.memoizedState = c;
  }
}
function Yc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(B(191, o));
      o.call(r);
    }
  }
}
var Fo = {}, _t = pn(Fo), wo = pn(Fo), So = pn(Fo);
function En(e) {
  if (e === Fo) throw Error(B(174));
  return e;
}
function pa(e, t) {
  switch (le(So, t), le(wo, e), le(_t, Fo), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : bl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = bl(t, e);
  }
  fe(_t), le(_t, t);
}
function gr() {
  fe(_t), fe(wo), fe(So);
}
function bh(e) {
  En(So.current);
  var t = En(_t.current), n = bl(t, e.type);
  t !== n && (le(wo, e), le(_t, n));
}
function ga(e) {
  wo.current === e && (fe(_t), fe(wo));
}
var ge = pn(0);
function es(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var pl = [];
function ma() {
  for (var e = 0; e < pl.length; e++) pl[e]._workInProgressVersionPrimary = null;
  pl.length = 0;
}
var Mi = bt.ReactCurrentDispatcher, gl = bt.ReactCurrentBatchConfig, Tn = 0, me = null, ke = null, _e = null, ts = !1, no = !1, ko = 0, jv = 0;
function De() {
  throw Error(B(321));
}
function ya(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return !1;
  return !0;
}
function va(e, t, n, r, o, i) {
  if (Tn = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Mi.current = e === null || e.memoizedState === null ? Bv : Vv, e = n(r, o), no) {
    i = 0;
    do {
      if (no = !1, ko = 0, 25 <= i) throw Error(B(301));
      i += 1, _e = ke = null, t.updateQueue = null, Mi.current = bv, e = n(r, o);
    } while (no);
  }
  if (Mi.current = ns, t = ke !== null && ke.next !== null, Tn = 0, _e = ke = me = null, ts = !1, t) throw Error(B(300));
  return e;
}
function xa() {
  var e = ko !== 0;
  return ko = 0, e;
}
function wt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return _e === null ? me.memoizedState = _e = e : _e = _e.next = e, _e;
}
function rt() {
  if (ke === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = _e === null ? me.memoizedState : _e.next;
  if (t !== null) _e = t, ke = e;
  else {
    if (e === null) throw Error(B(310));
    ke = e, e = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, _e === null ? me.memoizedState = _e = e : _e = _e.next = e;
  }
  return _e;
}
function Eo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ml(e) {
  var t = rt(), n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = ke, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, u = null, a = i;
    do {
      var d = a.lane;
      if ((Tn & d) === d) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var c = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (l = u = c, s = r) : u = u.next = c, me.lanes |= d, In |= d;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? s = r : u.next = l, yt(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, me.lanes |= i, In |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yl(e) {
  var t = rt(), n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    yt(i, t.memoizedState) || (Fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Uh() {
}
function Wh(e, t) {
  var n = me, r = rt(), o = t(), i = !yt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Fe = !0), r = r.queue, wa(Kh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || _e !== null && _e.memoizedState.tag & 1) {
    if (n.flags |= 2048, _o(9, Xh.bind(null, n, r, o, t), void 0, null), Ce === null) throw Error(B(349));
    Tn & 30 || Yh(n, t, o);
  }
  return o;
}
function Yh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Xh(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Qh(t) && Gh(e);
}
function Kh(e, t, n) {
  return n(function() {
    Qh(t) && Gh(e);
  });
}
function Qh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function Gh(e) {
  var t = Ht(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Xc(e) {
  var t = wt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hv.bind(null, me, e), [t.memoizedState, e];
}
function _o(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Zh() {
  return rt().memoizedState;
}
function Pi(e, t, n, r) {
  var o = wt();
  me.flags |= e, o.memoizedState = _o(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ns(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var s = ke.memoizedState;
    if (i = s.destroy, r !== null && ya(r, s.deps)) {
      o.memoizedState = _o(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = _o(1 | t, n, i, r);
}
function Kc(e, t) {
  return Pi(8390656, 8, e, t);
}
function wa(e, t) {
  return Ns(2048, 8, e, t);
}
function qh(e, t) {
  return Ns(4, 2, e, t);
}
function Jh(e, t) {
  return Ns(4, 4, e, t);
}
function ep(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function tp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ns(4, 4, ep.bind(null, t, e), n);
}
function Sa() {
}
function np(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ya(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function rp(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ya(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function op(e, t, n) {
  return Tn & 21 ? (yt(n, t) || (n = ah(), me.lanes |= n, In |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function Ov(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = gl.transition;
  gl.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, gl.transition = r;
  }
}
function ip() {
  return rt().memoizedState;
}
function Fv(e, t, n) {
  var r = an(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, sp(e)) lp(t, n);
  else if (n = Bh(e, t, n, r), n !== null) {
    var o = $e();
    mt(n, e, r, o), up(n, t, r);
  }
}
function Hv(e, t, n) {
  var r = an(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sp(e)) lp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, yt(l, s)) {
        var u = t.interleaved;
        u === null ? (o.next = o, da(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Bh(e, t, o, r), n !== null && (o = $e(), mt(n, e, r, o), up(n, t, r));
  }
}
function sp(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function lp(e, t) {
  no = ts = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function up(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, qu(e, n);
  }
}
var ns = { readContext: nt, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, Bv = { readContext: nt, useCallback: function(e, t) {
  return wt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: nt, useEffect: Kc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pi(
    4194308,
    4,
    ep.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Pi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Pi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = wt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = wt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fv.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = wt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Xc, useDebugValue: Sa, useDeferredValue: function(e) {
  return wt().memoizedState = e;
}, useTransition: function() {
  var e = Xc(!1), t = e[0];
  return e = Ov.bind(null, e[1]), wt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = wt();
  if (de) {
    if (n === void 0) throw Error(B(407));
    n = n();
  } else {
    if (n = t(), Ce === null) throw Error(B(349));
    Tn & 30 || Yh(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Kc(Kh.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, _o(9, Xh.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = wt(), t = Ce.identifierPrefix;
  if (de) {
    var n = At, r = Lt;
    n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ko++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = jv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Vv = {
  readContext: nt,
  useCallback: np,
  useContext: nt,
  useEffect: wa,
  useImperativeHandle: tp,
  useInsertionEffect: qh,
  useLayoutEffect: Jh,
  useMemo: rp,
  useReducer: ml,
  useRef: Zh,
  useState: function() {
    return ml(Eo);
  },
  useDebugValue: Sa,
  useDeferredValue: function(e) {
    var t = rt();
    return op(t, ke.memoizedState, e);
  },
  useTransition: function() {
    var e = ml(Eo)[0], t = rt().memoizedState;
    return [e, t];
  },
  useMutableSource: Uh,
  useSyncExternalStore: Wh,
  useId: ip,
  unstable_isNewReconciler: !1
}, bv = { readContext: nt, useCallback: np, useContext: nt, useEffect: wa, useImperativeHandle: tp, useInsertionEffect: qh, useLayoutEffect: Jh, useMemo: rp, useReducer: yl, useRef: Zh, useState: function() {
  return yl(Eo);
}, useDebugValue: Sa, useDeferredValue: function(e) {
  var t = rt();
  return ke === null ? t.memoizedState = e : op(t, ke.memoizedState, e);
}, useTransition: function() {
  var e = yl(Eo)[0], t = rt().memoizedState;
  return [e, t];
}, useMutableSource: Uh, useSyncExternalStore: Wh, useId: ip, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ye({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function cu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ms = { isMounted: function(e) {
  return (e = e._reactInternals) ? Fn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = an(e), i = Rt(r, o);
  i.payload = t, n != null && (i.callback = n), t = ln(e, i, o), t !== null && (mt(t, e, o, r), Ni(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = an(e), i = Rt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ln(e, i, o), t !== null && (mt(t, e, o, r), Ni(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = an(e), o = Rt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = ln(e, o, r), t !== null && (mt(t, e, r, n), Ni(t, e, r));
} };
function Qc(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !mo(n, r) || !mo(o, i) : !0;
}
function ap(e, t, n) {
  var r = !1, o = dn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = nt(i) : (o = Ve(t) ? zn : Le.current, r = t.contextTypes, i = (r = r != null) ? dr(e, o) : dn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ms, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Gc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ms.enqueueReplaceState(t, t.state, null);
}
function fu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ha(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = nt(i) : (i = Ve(t) ? zn : Le.current, o.context = dr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (cu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ms.enqueueReplaceState(o, o.state, null), Ji(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function mr(e, t) {
  try {
    var n = "", r = t;
    do
      n += yy(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function vl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function du(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Uv = typeof WeakMap == "function" ? WeakMap : Map;
function cp(e, t, n) {
  n = Rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    os || (os = !0, ku = r), du(e, t);
  }, n;
}
function fp(e, t, n) {
  n = Rt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      du(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    du(e, t), typeof r != "function" && (un === null ? un = /* @__PURE__ */ new Set([this]) : un.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Zc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uv();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = o1.bind(null, e, t, n), t.then(e, e));
}
function qc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Jc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rt(-1, 1), t.tag = 2, ln(n, t, 1))), n.lanes |= 1), e);
}
var Wv = bt.ReactCurrentOwner, Fe = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Hh(t, null, n, r) : pr(t, e.child, n, r);
}
function ef(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return lr(t, o), r = va(e, t, n, r, i, o), n = xa(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Bt(e, t, o)) : (de && n && sa(t), t.flags |= 1, Ae(e, t, r, o), t.child);
}
function tf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !za(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, dp(e, t, i, r, o)) : (e = Ii(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : mo, n(s, r) && e.ref === t.ref) return Bt(e, t, o);
  }
  return t.flags |= 1, e = cn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function dp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (mo(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, Bt(e, t, o);
  }
  return hu(e, t, n, r, o);
}
function hp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(er, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(er, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, le(er, Ue), Ue |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, le(er, Ue), Ue |= r;
  return Ae(e, t, o, n), t.child;
}
function pp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function hu(e, t, n, r, o) {
  var i = Ve(n) ? zn : Le.current;
  return i = dr(t, i), lr(t, o), n = va(e, t, n, r, i, o), r = xa(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Bt(e, t, o)) : (de && r && sa(t), t.flags |= 1, Ae(e, t, n, o), t.child);
}
function nf(e, t, n, r, o) {
  if (Ve(n)) {
    var i = !0;
    Ki(t);
  } else i = !1;
  if (lr(t, o), t.stateNode === null) zi(e, t), ap(t, n, r), fu(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var u = s.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = nt(a) : (a = Ve(n) ? zn : Le.current, a = dr(t, a));
    var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== a) && Gc(t, s, r, a), Gt = !1;
    var f = t.memoizedState;
    s.state = f, Ji(t, r, s, o), u = t.memoizedState, l !== r || f !== u || Be.current || Gt ? (typeof d == "function" && (cu(t, n, d, r), u = t.memoizedState), (l = Gt || Qc(t, n, l, r, f, u, a)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = a, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Vh(e, t), l = t.memoizedProps, a = t.type === t.elementType ? l : ut(t.type, l), s.props = a, c = t.pendingProps, f = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = nt(u) : (u = Ve(n) ? zn : Le.current, u = dr(t, u));
    var g = n.getDerivedStateFromProps;
    (d = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== c || f !== u) && Gc(t, s, r, u), Gt = !1, f = t.memoizedState, s.state = f, Ji(t, r, s, o);
    var y = t.memoizedState;
    l !== c || f !== y || Be.current || Gt ? (typeof g == "function" && (cu(t, n, g, r), y = t.memoizedState), (a = Gt || Qc(t, n, a, r, f, y, u) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = u, r = a) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return pu(e, t, n, r, i, o);
}
function pu(e, t, n, r, o, i) {
  pp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Bc(t, n, !1), Bt(e, t, i);
  r = t.stateNode, Wv.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = pr(t, e.child, null, i), t.child = pr(t, null, l, i)) : Ae(e, t, l, i), t.memoizedState = r.state, o && Bc(t, n, !0), t.child;
}
function gp(e) {
  var t = e.stateNode;
  t.pendingContext ? Hc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hc(e, t.context, !1), pa(e, t.containerInfo);
}
function rf(e, t, n, r, o) {
  return hr(), ua(o), t.flags |= 256, Ae(e, t, n, r), t.child;
}
var gu = { dehydrated: null, treeContext: null, retryLane: 0 };
function mu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mp(e, t, n) {
  var r = t.pendingProps, o = ge.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), le(ge, o & 1), e === null)
    return uu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ds(s, r, 0, null), e = Nn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = mu(n), t.memoizedState = gu, e) : ka(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Yv(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = cn(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = cn(l, i) : (i = Nn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? mu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = gu, r;
  }
  return i = e.child, e = i.sibling, r = cn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ka(e, t) {
  return t = Ds({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ui(e, t, n, r) {
  return r !== null && ua(r), pr(t, e.child, null, n), e = ka(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Yv(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = vl(Error(B(422))), ui(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ds({ mode: "visible", children: r.children }, o, 0, null), i = Nn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && pr(t, e.child, null, s), t.child.memoizedState = mu(s), t.memoizedState = gu, i);
  if (!(t.mode & 1)) return ui(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(B(419)), r = vl(i, r, void 0), ui(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Fe || l) {
    if (r = Ce, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ht(e, o), mt(r, e, o, -1));
    }
    return Pa(), r = vl(Error(B(421))), ui(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = i1.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ye = sn(o.nextSibling), Xe = t, de = !0, ft = null, e !== null && (qe[Je++] = Lt, qe[Je++] = At, qe[Je++] = Dn, Lt = e.id, At = e.overflow, Dn = t), t = ka(t, r.children), t.flags |= 4096, t);
}
function of(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), au(e.return, t, n);
}
function xl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function yp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ae(e, t, r.children, n), r = ge.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && of(e, n, t);
      else if (e.tag === 19) of(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (le(ge, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && es(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), xl(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && es(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      xl(t, !0, n, null, i);
      break;
    case "together":
      xl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function zi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Xv(e, t, n) {
  switch (t.tag) {
    case 3:
      gp(t), hr();
      break;
    case 5:
      bh(t);
      break;
    case 1:
      Ve(t.type) && Ki(t);
      break;
    case 4:
      pa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      le(Zi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (le(ge, ge.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? mp(e, t, n) : (le(ge, ge.current & 1), e = Bt(e, t, n), e !== null ? e.sibling : null);
      le(ge, ge.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return yp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), le(ge, ge.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, hp(e, t, n);
  }
  return Bt(e, t, n);
}
var vp, yu, xp, wp;
vp = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
yu = function() {
};
xp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, En(_t.current);
    var i = null;
    switch (n) {
      case "input":
        o = Fl(e, o), r = Fl(e, r), i = [];
        break;
      case "select":
        o = ye({}, o, { value: void 0 }), r = ye({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Vl(e, o), r = Vl(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yi);
    }
    Ul(n, r);
    var s;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var l = o[a];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (uo.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (l = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== l && (u != null || l != null)) if (a === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (uo.hasOwnProperty(a) ? (u != null && a === "onScroll" && ae("scroll", e), i || l === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
wp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hr(e, t) {
  if (!de) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Kv(e, t, n) {
  var r = t.pendingProps;
  switch (la(t), t.tag) {
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
      return Te(t), null;
    case 1:
      return Ve(t.type) && Xi(), Te(t), null;
    case 3:
      return r = t.stateNode, gr(), fe(Be), fe(Le), ma(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (si(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Cu(ft), ft = null))), yu(e, t), Te(t), null;
    case 5:
      ga(t);
      var o = En(So.current);
      if (n = t.type, e !== null && t.stateNode != null) xp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return Te(t), null;
        }
        if (e = En(_t.current), si(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[kt] = t, r[xo] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Kr.length; o++) ae(Kr[o], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae(
                "error",
                r
              ), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              hc(r, i), ae("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ae("invalid", r);
              break;
            case "textarea":
              gc(r, i), ae("invalid", r);
          }
          Ul(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && ii(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && ii(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : uo.hasOwnProperty(s) && l != null && s === "onScroll" && ae("scroll", r);
          }
          switch (n) {
            case "input":
              Zo(r), pc(r, i, !0);
              break;
            case "textarea":
              Zo(r), mc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Yi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[kt] = t, e[xo] = r, vp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Wl(n, r), n) {
              case "dialog":
                ae("cancel", e), ae("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Kr.length; o++) ae(Kr[o], e);
                o = r;
                break;
              case "source":
                ae("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ae(
                  "error",
                  e
                ), ae("load", e), o = r;
                break;
              case "details":
                ae("toggle", e), o = r;
                break;
              case "input":
                hc(e, r), o = Fl(e, r), ae("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ye({}, r, { value: void 0 }), ae("invalid", e);
                break;
              case "textarea":
                gc(e, r), o = Vl(e, r), ae("invalid", e);
                break;
              default:
                o = r;
            }
            Ul(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "style" ? Zd(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Qd(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ao(e, u) : typeof u == "number" && ao(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (uo.hasOwnProperty(i) ? u != null && i === "onScroll" && ae("scroll", e) : u != null && Yu(e, i, u, s));
            }
            switch (n) {
              case "input":
                Zo(e), pc(e, r, !1);
                break;
              case "textarea":
                Zo(e), mc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? rr(e, !!r.multiple, i, !1) : r.defaultValue != null && rr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Yi);
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
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) wp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
        if (n = En(So.current), En(_t.current), si(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (i = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
            case 3:
              ii(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ii(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
      }
      return Te(t), null;
    case 13:
      if (fe(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (de && Ye !== null && t.mode & 1 && !(t.flags & 128)) Oh(), hr(), t.flags |= 98560, i = !1;
        else if (i = si(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(B(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(B(317));
            i[kt] = t;
          } else hr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Te(t), i = !1;
        } else ft !== null && (Cu(ft), ft = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ge.current & 1 ? Ee === 0 && (Ee = 3) : Pa())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
    case 4:
      return gr(), yu(e, t), e === null && yo(t.stateNode.containerInfo), Te(t), null;
    case 10:
      return fa(t.type._context), Te(t), null;
    case 17:
      return Ve(t.type) && Xi(), Te(t), null;
    case 19:
      if (fe(ge), i = t.memoizedState, i === null) return Te(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Hr(i, !1);
      else {
        if (Ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = es(e), s !== null) {
            for (t.flags |= 128, Hr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return le(ge, ge.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && xe() > yr && (t.flags |= 128, r = !0, Hr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = es(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !de) return Te(t), null;
        } else 2 * xe() - i.renderingStartTime > yr && n !== 1073741824 && (t.flags |= 128, r = !0, Hr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = xe(), t.sibling = null, n = ge.current, le(ge, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
    case 22:
    case 23:
      return Ma(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function Qv(e, t) {
  switch (la(t), t.tag) {
    case 1:
      return Ve(t.type) && Xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gr(), fe(Be), fe(Le), ma(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ga(t), null;
    case 13:
      if (fe(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(B(340));
        hr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return fe(ge), null;
    case 4:
      return gr(), null;
    case 10:
      return fa(t.type._context), null;
    case 22:
    case 23:
      return Ma(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ai = !1, Ie = !1, Gv = typeof WeakSet == "function" ? WeakSet : Set, W = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ve(e, t, r);
  }
  else n.current = null;
}
function vu(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var sf = !1;
function Zv(e, t) {
  if (tu = bi, e = Ch(), ia(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, l = -1, u = -1, a = 0, d = 0, c = e, f = null;
        t: for (; ; ) {
          for (var g; c !== n || o !== 0 && c.nodeType !== 3 || (l = s + o), c !== i || r !== 0 && c.nodeType !== 3 || (u = s + r), c.nodeType === 3 && (s += c.nodeValue.length), (g = c.firstChild) !== null; )
            f = c, c = g;
          for (; ; ) {
            if (c === e) break t;
            if (f === n && ++a === o && (l = s), f === i && ++d === r && (u = s), (g = c.nextSibling) !== null) break;
            c = f, f = c.parentNode;
          }
          c = g;
        }
        n = l === -1 || u === -1 ? null : { start: l, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nu = { focusedElem: e, selectionRange: n }, bi = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
  else for (; W !== null; ) {
    t = W;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var x = y.memoizedProps, w = y.memoizedState, p = t.stateNode, m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ut(t.type, x), w);
            p.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(B(163));
      }
    } catch (v) {
      ve(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, W = e;
      break;
    }
    W = t.return;
  }
  return y = sf, sf = !1, y;
}
function ro(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && vu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ps(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Sp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Sp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[xo], delete t[iu], delete t[Lv], delete t[Av])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function kp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lf(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || kp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yi));
  else if (r !== 4 && (e = e.child, e !== null)) for (wu(e, t, n), e = e.sibling; e !== null; ) wu(e, t, n), e = e.sibling;
}
function Su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Su(e, t, n), e = e.sibling; e !== null; ) Su(e, t, n), e = e.sibling;
}
var Ne = null, at = !1;
function Yt(e, t, n) {
  for (n = n.child; n !== null; ) Ep(e, t, n), n = n.sibling;
}
function Ep(e, t, n) {
  if (Et && typeof Et.onCommitFiberUnmount == "function") try {
    Et.onCommitFiberUnmount(ws, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ie || Jn(n, t);
    case 6:
      var r = Ne, o = at;
      Ne = null, Yt(e, t, n), Ne = r, at = o, Ne !== null && (at ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null && (at ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? dl(e.parentNode, n) : e.nodeType === 1 && dl(e, n), po(e)) : dl(Ne, n.stateNode));
      break;
    case 4:
      r = Ne, o = at, Ne = n.stateNode.containerInfo, at = !0, Yt(e, t, n), Ne = r, at = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && vu(n, t, s), o = o.next;
        } while (o !== r);
      }
      Yt(e, t, n);
      break;
    case 1:
      if (!Ie && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        ve(n, t, l);
      }
      Yt(e, t, n);
      break;
    case 21:
      Yt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, Yt(e, t, n), Ie = r) : Yt(e, t, n);
      break;
    default:
      Yt(e, t, n);
  }
}
function uf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gv()), t.forEach(function(r) {
      var o = s1.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Ne = l.stateNode, at = !1;
            break e;
          case 3:
            Ne = l.stateNode.containerInfo, at = !0;
            break e;
          case 4:
            Ne = l.stateNode.containerInfo, at = !0;
            break e;
        }
        l = l.return;
      }
      if (Ne === null) throw Error(B(160));
      Ep(i, s, o), Ne = null, at = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      ve(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) _p(t, e), t = t.sibling;
}
function _p(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (st(t, e), xt(e), r & 4) {
        try {
          ro(3, e, e.return), Ps(3, e);
        } catch (x) {
          ve(e, e.return, x);
        }
        try {
          ro(5, e, e.return);
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      break;
    case 1:
      st(t, e), xt(e), r & 512 && n !== null && Jn(n, n.return);
      break;
    case 5:
      if (st(t, e), xt(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ao(o, "");
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Yd(o, i), Wl(l, s);
          var a = Wl(l, i);
          for (s = 0; s < u.length; s += 2) {
            var d = u[s], c = u[s + 1];
            d === "style" ? Zd(o, c) : d === "dangerouslySetInnerHTML" ? Qd(o, c) : d === "children" ? ao(o, c) : Yu(o, d, c, a);
          }
          switch (l) {
            case "input":
              Hl(o, i);
              break;
            case "textarea":
              Xd(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var g = i.value;
              g != null ? rr(o, !!i.multiple, g, !1) : f !== !!i.multiple && (i.defaultValue != null ? rr(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : rr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[xo] = i;
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      break;
    case 6:
      if (st(t, e), xt(e), r & 4) {
        if (e.stateNode === null) throw Error(B(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      break;
    case 3:
      if (st(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        po(t.containerInfo);
      } catch (x) {
        ve(e, e.return, x);
      }
      break;
    case 4:
      st(t, e), xt(e);
      break;
    case 13:
      st(t, e), xt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ca = xe())), r & 4 && uf(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (a = Ie) || d, st(t, e), Ie = a) : st(t, e), xt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1) for (W = e, d = e.child; d !== null; ) {
          for (c = W = d; W !== null; ) {
            switch (f = W, g = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ro(4, f, f.return);
                break;
              case 1:
                Jn(f, f.return);
                var y = f.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (x) {
                    ve(r, n, x);
                  }
                }
                break;
              case 5:
                Jn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  cf(c);
                  continue;
                }
            }
            g !== null ? (g.return = f, W = g) : cf(c);
          }
          d = d.sibling;
        }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                o = c.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = c.stateNode, u = c.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = Gd("display", s));
              } catch (x) {
                ve(e, e.return, x);
              }
            }
          } else if (c.tag === 6) {
            if (d === null) try {
              c.stateNode.nodeValue = a ? "" : c.memoizedProps;
            } catch (x) {
              ve(e, e.return, x);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), c = c.return;
          }
          d === c && (d = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      st(t, e), xt(e), r & 4 && uf(e);
      break;
    case 21:
      break;
    default:
      st(
        t,
        e
      ), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ao(o, ""), r.flags &= -33);
          var i = lf(e);
          Su(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = lf(e);
          wu(e, l, s);
          break;
        default:
          throw Error(B(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qv(e, t, n) {
  W = e, Cp(e);
}
function Cp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ai;
      if (!s) {
        var l = o.alternate, u = l !== null && l.memoizedState !== null || Ie;
        l = ai;
        var a = Ie;
        if (ai = s, (Ie = u) && !a) for (W = o; W !== null; ) s = W, u = s.child, s.tag === 22 && s.memoizedState !== null ? ff(o) : u !== null ? (u.return = s, W = u) : ff(o);
        for (; i !== null; ) W = i, Cp(i), i = i.sibling;
        W = o, ai = l, Ie = a;
      }
      af(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, W = i) : af(e);
  }
}
function af(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ie || Ps(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Yc(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Yc(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var a = t.alternate;
              if (a !== null) {
                var d = a.memoizedState;
                if (d !== null) {
                  var c = d.dehydrated;
                  c !== null && po(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(B(163));
        }
        Ie || t.flags & 512 && xu(t);
      } catch (f) {
        ve(t, t.return, f);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, W = n;
      break;
    }
    W = t.return;
  }
}
function cf(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, W = n;
      break;
    }
    W = t.return;
  }
}
function ff(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ps(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, o, u);
            }
          }
          var i = t.return;
          try {
            xu(t);
          } catch (u) {
            ve(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            xu(t);
          } catch (u) {
            ve(t, s, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
    }
    if (t === e) {
      W = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, W = l;
      break;
    }
    W = t.return;
  }
}
var Jv = Math.ceil, rs = bt.ReactCurrentDispatcher, Ea = bt.ReactCurrentOwner, tt = bt.ReactCurrentBatchConfig, re = 0, Ce = null, we = null, Me = 0, Ue = 0, er = pn(0), Ee = 0, Co = null, In = 0, zs = 0, _a = 0, oo = null, Oe = null, Ca = 0, yr = 1 / 0, Tt = null, os = !1, ku = null, un = null, ci = !1, tn = null, is = 0, io = 0, Eu = null, Di = -1, Ti = 0;
function $e() {
  return re & 6 ? xe() : Di !== -1 ? Di : Di = xe();
}
function an(e) {
  return e.mode & 1 ? re & 2 && Me !== 0 ? Me & -Me : Rv.transition !== null ? (Ti === 0 && (Ti = ah()), Ti) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mh(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < io) throw io = 0, Eu = null, Error(B(185));
  Ro(e, n, r), (!(re & 2) || e !== Ce) && (e === Ce && (!(re & 2) && (zs |= n), Ee === 4 && qt(e, Me)), be(e, r), n === 1 && re === 0 && !(t.mode & 1) && (yr = xe() + 500, Cs && gn()));
}
function be(e, t) {
  var n = e.callbackNode;
  Ry(e, t);
  var r = Vi(e, e === Ce ? Me : 0);
  if (r === 0) n !== null && xc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && xc(n), t === 1) e.tag === 0 ? $v(df.bind(null, e)) : $h(df.bind(null, e)), Tv(function() {
      !(re & 6) && gn();
    }), n = null;
    else {
      switch (ch(r)) {
        case 1:
          n = Zu;
          break;
        case 4:
          n = lh;
          break;
        case 16:
          n = Bi;
          break;
        case 536870912:
          n = uh;
          break;
        default:
          n = Bi;
      }
      n = Lp(n, Np.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Np(e, t) {
  if (Di = -1, Ti = 0, re & 6) throw Error(B(327));
  var n = e.callbackNode;
  if (ur() && e.callbackNode !== n) return null;
  var r = Vi(e, e === Ce ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ss(e, r);
  else {
    t = r;
    var o = re;
    re |= 2;
    var i = Pp();
    (Ce !== e || Me !== t) && (Tt = null, yr = xe() + 500, Cn(e, t));
    do
      try {
        n1();
        break;
      } catch (l) {
        Mp(e, l);
      }
    while (!0);
    ca(), rs.current = i, re = o, we !== null ? t = 0 : (Ce = null, Me = 0, t = Ee);
  }
  if (t !== 0) {
    if (t === 2 && (o = Gl(e), o !== 0 && (r = o, t = _u(e, o))), t === 1) throw n = Co, Cn(e, 0), qt(e, r), be(e, xe()), n;
    if (t === 6) qt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !e1(o) && (t = ss(e, r), t === 2 && (i = Gl(e), i !== 0 && (r = i, t = _u(e, i))), t === 1)) throw n = Co, Cn(e, 0), qt(e, r), be(e, xe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          xn(e, Oe, Tt);
          break;
        case 3:
          if (qt(e, r), (r & 130023424) === r && (t = Ca + 500 - xe(), 10 < t)) {
            if (Vi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ou(xn.bind(null, e, Oe, Tt), t);
            break;
          }
          xn(e, Oe, Tt);
          break;
        case 4:
          if (qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - gt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ou(xn.bind(null, e, Oe, Tt), r);
            break;
          }
          xn(e, Oe, Tt);
          break;
        case 5:
          xn(e, Oe, Tt);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return be(e, xe()), e.callbackNode === n ? Np.bind(null, e) : null;
}
function _u(e, t) {
  var n = oo;
  return e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), e = ss(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && Cu(t)), e;
}
function Cu(e) {
  Oe === null ? Oe = e : Oe.push.apply(Oe, e);
}
function e1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!yt(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function qt(e, t) {
  for (t &= ~_a, t &= ~zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - gt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function df(e) {
  if (re & 6) throw Error(B(327));
  ur();
  var t = Vi(e, 0);
  if (!(t & 1)) return be(e, xe()), null;
  var n = ss(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gl(e);
    r !== 0 && (t = r, n = _u(e, r));
  }
  if (n === 1) throw n = Co, Cn(e, 0), qt(e, t), be(e, xe()), n;
  if (n === 6) throw Error(B(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, xn(e, Oe, Tt), be(e, xe()), null;
}
function Na(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    re = n, re === 0 && (yr = xe() + 500, Cs && gn());
  }
}
function Ln(e) {
  tn !== null && tn.tag === 0 && !(re & 6) && ur();
  var t = re;
  re |= 1;
  var n = tt.transition, r = se;
  try {
    if (tt.transition = null, se = 1, e) return e();
  } finally {
    se = r, tt.transition = n, re = t, !(re & 6) && gn();
  }
}
function Ma() {
  Ue = er.current, fe(er);
}
function Cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Dv(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (la(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xi();
        break;
      case 3:
        gr(), fe(Be), fe(Le), ma();
        break;
      case 5:
        ga(r);
        break;
      case 4:
        gr();
        break;
      case 13:
        fe(ge);
        break;
      case 19:
        fe(ge);
        break;
      case 10:
        fa(r.type._context);
        break;
      case 22:
      case 23:
        Ma();
    }
    n = n.return;
  }
  if (Ce = e, we = e = cn(e.current, null), Me = Ue = t, Ee = 0, Co = null, _a = zs = In = 0, Oe = oo = null, kn !== null) {
    for (t = 0; t < kn.length; t++) if (n = kn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    kn = null;
  }
  return e;
}
function Mp(e, t) {
  do {
    var n = we;
    try {
      if (ca(), Mi.current = ns, ts) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ts = !1;
      }
      if (Tn = 0, _e = ke = me = null, no = !1, ko = 0, Ea.current = null, n === null || n.return === null) {
        Ee = 1, Co = t, we = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, u = t;
        if (t = Me, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, d = l, c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var g = qc(s);
          if (g !== null) {
            g.flags &= -257, Jc(g, s, l, i, t), g.mode & 1 && Zc(i, a, t), t = g, u = a;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Zc(i, a, t), Pa();
              break e;
            }
            u = Error(B(426));
          }
        } else if (de && l.mode & 1) {
          var w = qc(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Jc(w, s, l, i, t), ua(mr(u, l));
            break e;
          }
        }
        i = u = mr(u, l), Ee !== 4 && (Ee = 2), oo === null ? oo = [i] : oo.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = cp(i, u, t);
              Wc(i, p);
              break e;
            case 1:
              l = u;
              var m = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (un === null || !un.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = fp(i, l, t);
                Wc(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dp(n);
    } catch (S) {
      t = S, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Pp() {
  var e = rs.current;
  return rs.current = ns, e === null ? ns : e;
}
function Pa() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4), Ce === null || !(In & 268435455) && !(zs & 268435455) || qt(Ce, Me);
}
function ss(e, t) {
  var n = re;
  re |= 2;
  var r = Pp();
  (Ce !== e || Me !== t) && (Tt = null, Cn(e, t));
  do
    try {
      t1();
      break;
    } catch (o) {
      Mp(e, o);
    }
  while (!0);
  if (ca(), re = n, rs.current = r, we !== null) throw Error(B(261));
  return Ce = null, Me = 0, Ee;
}
function t1() {
  for (; we !== null; ) zp(we);
}
function n1() {
  for (; we !== null && !My(); ) zp(we);
}
function zp(e) {
  var t = Ip(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? Dp(e) : we = t, Ea.current = null;
}
function Dp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Qv(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ee = 6, we = null;
        return;
      }
    } else if (n = Kv(n, t, Ue), n !== null) {
      we = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function xn(e, t, n) {
  var r = se, o = tt.transition;
  try {
    tt.transition = null, se = 1, r1(e, t, n, r);
  } finally {
    tt.transition = o, se = r;
  }
  return null;
}
function r1(e, t, n, r) {
  do
    ur();
  while (tn !== null);
  if (re & 6) throw Error(B(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(B(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (jy(e, i), e === Ce && (we = Ce = null, Me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ci || (ci = !0, Lp(Bi, function() {
    return ur(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = tt.transition, tt.transition = null;
    var s = se;
    se = 1;
    var l = re;
    re |= 4, Ea.current = null, Zv(e, n), _p(n, e), Ev(nu), bi = !!tu, nu = tu = null, e.current = n, qv(n), Py(), re = l, se = s, tt.transition = i;
  } else e.current = n;
  if (ci && (ci = !1, tn = e, is = o), i = e.pendingLanes, i === 0 && (un = null), Ty(n.stateNode), be(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (os) throw os = !1, e = ku, ku = null, e;
  return is & 1 && e.tag !== 0 && ur(), i = e.pendingLanes, i & 1 ? e === Eu ? io++ : (io = 0, Eu = e) : io = 0, gn(), null;
}
function ur() {
  if (tn !== null) {
    var e = ch(is), t = tt.transition, n = se;
    try {
      if (tt.transition = null, se = 16 > e ? 16 : e, tn === null) var r = !1;
      else {
        if (e = tn, tn = null, is = 0, re & 6) throw Error(B(331));
        var o = re;
        for (re |= 4, W = e.current; W !== null; ) {
          var i = W, s = i.child;
          if (W.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u];
                for (W = a; W !== null; ) {
                  var d = W;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ro(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) c.return = d, W = c;
                  else for (; W !== null; ) {
                    d = W;
                    var f = d.sibling, g = d.return;
                    if (Sp(d), d === a) {
                      W = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = g, W = f;
                      break;
                    }
                    W = g;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var w = x.sibling;
                    x.sibling = null, x = w;
                  } while (x !== null);
                }
              }
              W = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, W = s;
          else e: for (; W !== null; ) {
            if (i = W, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ro(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, W = p;
              break e;
            }
            W = i.return;
          }
        }
        var m = e.current;
        for (W = m; W !== null; ) {
          s = W;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) h.return = s, W = h;
          else e: for (s = m; W !== null; ) {
            if (l = W, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ps(9, l);
              }
            } catch (S) {
              ve(l, l.return, S);
            }
            if (l === s) {
              W = null;
              break e;
            }
            var v = l.sibling;
            if (v !== null) {
              v.return = l.return, W = v;
              break e;
            }
            W = l.return;
          }
        }
        if (re = o, gn(), Et && typeof Et.onPostCommitFiberRoot == "function") try {
          Et.onPostCommitFiberRoot(ws, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      se = n, tt.transition = t;
    }
  }
  return !1;
}
function hf(e, t, n) {
  t = mr(n, t), t = cp(e, t, 1), e = ln(e, t, 1), t = $e(), e !== null && (Ro(e, 1, t), be(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) hf(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      hf(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (un === null || !un.has(r))) {
        e = mr(n, e), e = fp(t, e, 1), t = ln(t, e, 1), e = $e(), t !== null && (Ro(t, 1, e), be(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function o1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Me & n) === n && (Ee === 4 || Ee === 3 && (Me & 130023424) === Me && 500 > xe() - Ca ? Cn(e, 0) : _a |= n), be(e, t);
}
function Tp(e, t) {
  t === 0 && (e.mode & 1 ? (t = ei, ei <<= 1, !(ei & 130023424) && (ei = 4194304)) : t = 1);
  var n = $e();
  e = Ht(e, t), e !== null && (Ro(e, t, n), be(e, n));
}
function i1(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Tp(e, n);
}
function s1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), Tp(e, n);
}
var Ip;
Ip = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, Xv(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, de && t.flags & 1048576 && Rh(t, Gi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zi(e, t), e = t.pendingProps;
      var o = dr(t, Le.current);
      lr(t, n), o = va(null, t, r, e, o, n);
      var i = xa();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ve(r) ? (i = !0, Ki(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ha(t), o.updater = Ms, t.stateNode = o, o._reactInternals = t, fu(t, r, e, n), t = pu(null, t, r, !0, i, n)) : (t.tag = 0, de && i && sa(t), Ae(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = u1(r), e = ut(r, e), o) {
          case 0:
            t = hu(null, t, r, e, n);
            break e;
          case 1:
            t = nf(null, t, r, e, n);
            break e;
          case 11:
            t = ef(null, t, r, e, n);
            break e;
          case 14:
            t = tf(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(B(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), hu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), nf(e, t, r, o, n);
    case 3:
      e: {
        if (gp(t), e === null) throw Error(B(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Vh(e, t), Ji(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = mr(Error(B(423)), t), t = rf(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = mr(Error(B(424)), t), t = rf(e, t, r, n, o);
          break e;
        } else for (Ye = sn(t.stateNode.containerInfo.firstChild), Xe = t, de = !0, ft = null, n = Hh(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hr(), r === o) {
            t = Bt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bh(t), e === null && uu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, ru(r, o) ? s = null : i !== null && ru(r, i) && (t.flags |= 32), pp(e, t), Ae(e, t, s, n), t.child;
    case 6:
      return e === null && uu(t), null;
    case 13:
      return mp(e, t, n);
    case 4:
      return pa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pr(t, null, r, n) : Ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), ef(e, t, r, o, n);
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, le(Zi, r._currentValue), r._currentValue = s, i !== null) if (yt(i.value, s)) {
          if (i.children === o.children && !Be.current) {
            t = Bt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var u = l.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = Rt(-1, n & -n), u.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var d = a.pending;
                    d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), au(
                  i.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(B(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), au(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        Ae(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, lr(t, n), o = nt(o), r = r(o), t.flags |= 1, Ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), tf(e, t, r, o, n);
    case 15:
      return dp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), zi(e, t), t.tag = 1, Ve(r) ? (e = !0, Ki(t)) : e = !1, lr(t, n), ap(t, r, o), fu(t, r, o, n), pu(null, t, r, !0, e, n);
    case 19:
      return yp(e, t, n);
    case 22:
      return hp(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function Lp(e, t) {
  return sh(e, t);
}
function l1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function et(e, t, n, r) {
  return new l1(e, t, n, r);
}
function za(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function u1(e) {
  if (typeof e == "function") return za(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ku) return 11;
    if (e === Qu) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return n === null ? (n = et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ii(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") za(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Un:
      return Nn(n.children, o, i, t);
    case Xu:
      s = 8, o |= 8;
      break;
    case $l:
      return e = et(12, n, t, o | 2), e.elementType = $l, e.lanes = i, e;
    case Rl:
      return e = et(13, n, t, o), e.elementType = Rl, e.lanes = i, e;
    case jl:
      return e = et(19, n, t, o), e.elementType = jl, e.lanes = i, e;
    case bd:
      return Ds(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Bd:
          s = 10;
          break e;
        case Vd:
          s = 9;
          break e;
        case Ku:
          s = 11;
          break e;
        case Qu:
          s = 14;
          break e;
        case Qt:
          s = 16, r = null;
          break e;
      }
      throw Error(B(130, e == null ? e : typeof e, ""));
  }
  return t = et(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Nn(e, t, n, r) {
  return e = et(7, e, r, t), e.lanes = n, e;
}
function Ds(e, t, n, r) {
  return e = et(22, e, r, t), e.elementType = bd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function wl(e, t, n) {
  return e = et(6, e, null, t), e.lanes = n, e;
}
function Sl(e, t, n) {
  return t = et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function a1(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tl(0), this.expirationTimes = tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Da(e, t, n, r, o, i, s, l, u) {
  return e = new a1(e, t, n, l, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = et(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ha(i), e;
}
function c1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: bn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ap(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return Ah(e, n, t);
  }
  return t;
}
function $p(e, t, n, r, o, i, s, l, u) {
  return e = Da(n, r, !0, e, o, i, s, l, u), e.context = Ap(null), n = e.current, r = $e(), o = an(n), i = Rt(r, o), i.callback = t ?? null, ln(n, i, o), e.current.lanes = o, Ro(e, o, r), be(e, r), e;
}
function Ts(e, t, n, r) {
  var o = t.current, i = $e(), s = an(o);
  return n = Ap(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ln(o, t, s), e !== null && (mt(e, o, s, i), Ni(e, o, s)), s;
}
function ls(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pf(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ta(e, t) {
  pf(e, t), (e = e.alternate) && pf(e, t);
}
function f1() {
  return null;
}
var Rp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ia(e) {
  this._internalRoot = e;
}
Is.prototype.render = Ia.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  Ts(e, t, null, null);
};
Is.prototype.unmount = Ia.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function() {
      Ts(null, e, null, null);
    }), t[Ft] = null;
  }
};
function Is(e) {
  this._internalRoot = e;
}
Is.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = hh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++) ;
    Zt.splice(n, 0, e), n === 0 && gh(e);
  }
};
function La(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ls(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gf() {
}
function d1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = ls(s);
        i.call(a);
      };
    }
    var s = $p(t, r, e, 0, null, !1, !1, "", gf);
    return e._reactRootContainer = s, e[Ft] = s.current, yo(e.nodeType === 8 ? e.parentNode : e), Ln(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var a = ls(u);
      l.call(a);
    };
  }
  var u = Da(e, 0, !1, null, null, !1, !1, "", gf);
  return e._reactRootContainer = u, e[Ft] = u.current, yo(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
    Ts(t, u, n, r);
  }), u;
}
function As(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var u = ls(s);
        l.call(u);
      };
    }
    Ts(t, s, e, o);
  } else s = d1(n, t, e, o, r);
  return ls(s);
}
fh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xr(t.pendingLanes);
        n !== 0 && (qu(t, n | 1), be(t, xe()), !(re & 6) && (yr = xe() + 500, gn()));
      }
      break;
    case 13:
      Ln(function() {
        var r = Ht(e, 1);
        if (r !== null) {
          var o = $e();
          mt(r, e, 1, o);
        }
      }), Ta(e, 1);
  }
};
Ju = function(e) {
  if (e.tag === 13) {
    var t = Ht(e, 134217728);
    if (t !== null) {
      var n = $e();
      mt(t, e, 134217728, n);
    }
    Ta(e, 134217728);
  }
};
dh = function(e) {
  if (e.tag === 13) {
    var t = an(e), n = Ht(e, t);
    if (n !== null) {
      var r = $e();
      mt(n, e, t, r);
    }
    Ta(e, t);
  }
};
hh = function() {
  return se;
};
ph = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
Xl = function(e, t, n) {
  switch (t) {
    case "input":
      if (Hl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = _s(r);
            if (!o) throw Error(B(90));
            Wd(r), Hl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xd(e, n);
      break;
    case "select":
      t = n.value, t != null && rr(e, !!n.multiple, t, !1);
  }
};
eh = Na;
th = Ln;
var h1 = { usingClientEntryPoint: !1, Events: [Oo, Kn, _s, qd, Jd, Na] }, Br = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, p1 = { bundleType: Br.bundleType, version: Br.version, rendererPackageName: Br.rendererPackageName, rendererConfig: Br.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: bt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = oh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Br.findFiberByHostInstance || f1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fi.isDisabled && fi.supportsFiber) try {
    ws = fi.inject(p1), Et = fi;
  } catch {
  }
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h1;
Ge.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!La(t)) throw Error(B(200));
  return c1(e, t, null, n);
};
Ge.createRoot = function(e, t) {
  if (!La(e)) throw Error(B(299));
  var n = !1, r = "", o = Rp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Da(e, 1, !1, null, null, n, !1, r, o), e[Ft] = t.current, yo(e.nodeType === 8 ? e.parentNode : e), new Ia(t);
};
Ge.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(B(188)) : (e = Object.keys(e).join(","), Error(B(268, e)));
  return e = oh(t), e = e === null ? null : e.stateNode, e;
};
Ge.flushSync = function(e) {
  return Ln(e);
};
Ge.hydrate = function(e, t, n) {
  if (!Ls(t)) throw Error(B(200));
  return As(null, e, t, !0, n);
};
Ge.hydrateRoot = function(e, t, n) {
  if (!La(e)) throw Error(B(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Rp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = $p(t, null, e, 1, n ?? null, o, !1, i, s), e[Ft] = t.current, yo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Is(t);
};
Ge.render = function(e, t, n) {
  if (!Ls(t)) throw Error(B(200));
  return As(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function(e) {
  if (!Ls(e)) throw Error(B(40));
  return e._reactRootContainer ? (Ln(function() {
    As(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
Ge.unstable_batchedUpdates = Na;
Ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ls(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return As(e, t, n, !1, r);
};
Ge.version = "18.3.1-next-f1338f8080-20240426";
function jp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp);
    } catch (e) {
      console.error(e);
    }
}
jp(), jd.exports = Ge;
var g1 = jd.exports, Op, mf = g1;
Op = mf.createRoot, mf.hydrateRoot;
function Se(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Se(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var m1 = { value: () => {
} };
function $s() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Li(n);
}
function Li(e) {
  this._ = e;
}
function y1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Li.prototype = $s.prototype = {
  constructor: Li,
  on: function(e, t) {
    var n = this._, r = y1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = v1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = yf(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = yf(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Li(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function v1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function yf(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = m1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Nu = "http://www.w3.org/1999/xhtml";
const vf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Nu,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Rs(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), vf.hasOwnProperty(t) ? { space: vf[t], local: e } : e;
}
function x1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Nu && t.documentElement.namespaceURI === Nu ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function w1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Fp(e) {
  var t = Rs(e);
  return (t.local ? w1 : x1)(t);
}
function S1() {
}
function Aa(e) {
  return e == null ? S1 : function() {
    return this.querySelector(e);
  };
}
function k1(e) {
  typeof e != "function" && (e = Aa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = new Array(s), u, a, d = 0; d < s; ++d)
      (u = i[d]) && (a = e.call(u, u.__data__, d, i)) && ("__data__" in u && (a.__data__ = u.__data__), l[d] = a);
  return new Qe(r, this._parents);
}
function E1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function _1() {
  return [];
}
function Hp(e) {
  return e == null ? _1 : function() {
    return this.querySelectorAll(e);
  };
}
function C1(e) {
  return function() {
    return E1(e.apply(this, arguments));
  };
}
function N1(e) {
  typeof e == "function" ? e = C1(e) : e = Hp(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], l = s.length, u, a = 0; a < l; ++a)
      (u = s[a]) && (r.push(e.call(u, u.__data__, a, s)), o.push(u));
  return new Qe(r, o);
}
function Bp(e) {
  return function() {
    return this.matches(e);
  };
}
function Vp(e) {
  return function(t) {
    return t.matches(e);
  };
}
var M1 = Array.prototype.find;
function P1(e) {
  return function() {
    return M1.call(this.children, e);
  };
}
function z1() {
  return this.firstElementChild;
}
function D1(e) {
  return this.select(e == null ? z1 : P1(typeof e == "function" ? e : Vp(e)));
}
var T1 = Array.prototype.filter;
function I1() {
  return Array.from(this.children);
}
function L1(e) {
  return function() {
    return T1.call(this.children, e);
  };
}
function A1(e) {
  return this.selectAll(e == null ? I1 : L1(typeof e == "function" ? e : Vp(e)));
}
function $1(e) {
  typeof e != "function" && (e = Bp(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], u, a = 0; a < s; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && l.push(u);
  return new Qe(r, this._parents);
}
function bp(e) {
  return new Array(e.length);
}
function R1() {
  return new Qe(this._enter || this._groups.map(bp), this._parents);
}
function us(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
us.prototype = {
  constructor: us,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function j1(e) {
  return function() {
    return e;
  };
}
function O1(e, t, n, r, o, i) {
  for (var s = 0, l, u = t.length, a = i.length; s < a; ++s)
    (l = t[s]) ? (l.__data__ = i[s], r[s] = l) : n[s] = new us(e, i[s]);
  for (; s < u; ++s)
    (l = t[s]) && (o[s] = l);
}
function F1(e, t, n, r, o, i, s) {
  var l, u, a = /* @__PURE__ */ new Map(), d = t.length, c = i.length, f = new Array(d), g;
  for (l = 0; l < d; ++l)
    (u = t[l]) && (f[l] = g = s.call(u, u.__data__, l, t) + "", a.has(g) ? o[l] = u : a.set(g, u));
  for (l = 0; l < c; ++l)
    g = s.call(e, i[l], l, i) + "", (u = a.get(g)) ? (r[l] = u, u.__data__ = i[l], a.delete(g)) : n[l] = new us(e, i[l]);
  for (l = 0; l < d; ++l)
    (u = t[l]) && a.get(f[l]) === u && (o[l] = u);
}
function H1(e) {
  return e.__data__;
}
function B1(e, t) {
  if (!arguments.length) return Array.from(this, H1);
  var n = t ? F1 : O1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = j1(e));
  for (var i = o.length, s = new Array(i), l = new Array(i), u = new Array(i), a = 0; a < i; ++a) {
    var d = r[a], c = o[a], f = c.length, g = V1(e.call(d, d && d.__data__, a, r)), y = g.length, x = l[a] = new Array(y), w = s[a] = new Array(y), p = u[a] = new Array(f);
    n(d, c, x, w, p, g, t);
    for (var m = 0, h = 0, v, S; m < y; ++m)
      if (v = x[m]) {
        for (m >= h && (h = m + 1); !(S = w[h]) && ++h < y; ) ;
        v._next = S || null;
      }
  }
  return s = new Qe(s, r), s._enter = l, s._exit = u, s;
}
function V1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function b1() {
  return new Qe(this._exit || this._groups.map(bp), this._parents);
}
function U1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function W1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), l = new Array(o), u = 0; u < s; ++u)
    for (var a = n[u], d = r[u], c = a.length, f = l[u] = new Array(c), g, y = 0; y < c; ++y)
      (g = a[y] || d[y]) && (f[y] = g);
  for (; u < o; ++u)
    l[u] = n[u];
  return new Qe(l, this._parents);
}
function Y1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function X1(e) {
  e || (e = K1);
  function t(c, f) {
    return c && f ? e(c.__data__, f.__data__) : !c - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], l = s.length, u = o[i] = new Array(l), a, d = 0; d < l; ++d)
      (a = s[d]) && (u[d] = a);
    u.sort(t);
  }
  return new Qe(o, this._parents).order();
}
function K1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Q1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function G1() {
  return Array.from(this);
}
function Z1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function q1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function J1() {
  return !this.node();
}
function ex(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, l; i < s; ++i)
      (l = o[i]) && e.call(l, l.__data__, i, o);
  return this;
}
function tx(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function nx(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function rx(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ox(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ix(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function sx(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function lx(e, t) {
  var n = Rs(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? nx : tx : typeof t == "function" ? n.local ? sx : ix : n.local ? ox : rx)(n, t));
}
function Up(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ux(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ax(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function cx(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function fx(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ux : typeof t == "function" ? cx : ax)(e, t, n ?? "")) : vr(this.node(), e);
}
function vr(e, t) {
  return e.style.getPropertyValue(t) || Up(e).getComputedStyle(e, null).getPropertyValue(t);
}
function dx(e) {
  return function() {
    delete this[e];
  };
}
function hx(e, t) {
  return function() {
    this[e] = t;
  };
}
function px(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function gx(e, t) {
  return arguments.length > 1 ? this.each((t == null ? dx : typeof t == "function" ? px : hx)(e, t)) : this.node()[e];
}
function Wp(e) {
  return e.trim().split(/^|\s+/);
}
function $a(e) {
  return e.classList || new Yp(e);
}
function Yp(e) {
  this._node = e, this._names = Wp(e.getAttribute("class") || "");
}
Yp.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Xp(e, t) {
  for (var n = $a(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Kp(e, t) {
  for (var n = $a(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function mx(e) {
  return function() {
    Xp(this, e);
  };
}
function yx(e) {
  return function() {
    Kp(this, e);
  };
}
function vx(e, t) {
  return function() {
    (t.apply(this, arguments) ? Xp : Kp)(this, e);
  };
}
function xx(e, t) {
  var n = Wp(e + "");
  if (arguments.length < 2) {
    for (var r = $a(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? vx : t ? mx : yx)(n, t));
}
function wx() {
  this.textContent = "";
}
function Sx(e) {
  return function() {
    this.textContent = e;
  };
}
function kx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ex(e) {
  return arguments.length ? this.each(e == null ? wx : (typeof e == "function" ? kx : Sx)(e)) : this.node().textContent;
}
function _x() {
  this.innerHTML = "";
}
function Cx(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Nx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Mx(e) {
  return arguments.length ? this.each(e == null ? _x : (typeof e == "function" ? Nx : Cx)(e)) : this.node().innerHTML;
}
function Px() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function zx() {
  return this.each(Px);
}
function Dx() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Tx() {
  return this.each(Dx);
}
function Ix(e) {
  var t = typeof e == "function" ? e : Fp(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Lx() {
  return null;
}
function Ax(e, t) {
  var n = typeof e == "function" ? e : Fp(e), r = t == null ? Lx : typeof t == "function" ? t : Aa(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function $x() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Rx() {
  return this.each($x);
}
function jx() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ox() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Fx(e) {
  return this.select(e ? Ox : jx);
}
function Hx(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Bx(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Vx(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function bx(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Ux(e, t, n) {
  return function() {
    var r = this.__on, o, i = Bx(t);
    if (r) {
      for (var s = 0, l = r.length; s < l; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Wx(e, t, n) {
  var r = Vx(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var u = 0, a = l.length, d; u < a; ++u)
        for (o = 0, d = l[u]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (l = t ? Ux : bx, o = 0; o < i; ++o) this.each(l(r[o], t, n));
  return this;
}
function Qp(e, t, n) {
  var r = Up(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Yx(e, t) {
  return function() {
    return Qp(this, e, t);
  };
}
function Xx(e, t) {
  return function() {
    return Qp(this, e, t.apply(this, arguments));
  };
}
function Kx(e, t) {
  return this.each((typeof t == "function" ? Xx : Yx)(e, t));
}
function* Qx() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Gp = [null];
function Qe(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new Qe([[document.documentElement]], Gp);
}
function Gx() {
  return this;
}
Qe.prototype = Ho.prototype = {
  constructor: Qe,
  select: k1,
  selectAll: N1,
  selectChild: D1,
  selectChildren: A1,
  filter: $1,
  data: B1,
  enter: R1,
  exit: b1,
  join: U1,
  merge: W1,
  selection: Gx,
  order: Y1,
  sort: X1,
  call: Q1,
  nodes: G1,
  node: Z1,
  size: q1,
  empty: J1,
  each: ex,
  attr: lx,
  style: fx,
  property: gx,
  classed: xx,
  text: Ex,
  html: Mx,
  raise: zx,
  lower: Tx,
  append: Ix,
  insert: Ax,
  remove: Rx,
  clone: Fx,
  datum: Hx,
  on: Wx,
  dispatch: Kx,
  [Symbol.iterator]: Qx
};
function We(e) {
  return typeof e == "string" ? new Qe([[document.querySelector(e)]], [document.documentElement]) : new Qe([[e]], Gp);
}
function Zx(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function ct(e, t) {
  if (e = Zx(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const qx = { passive: !1 }, No = { capture: !0, passive: !1 };
function kl(e) {
  e.stopImmediatePropagation();
}
function ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Zp(e) {
  var t = e.document.documentElement, n = We(e).on("dragstart.drag", ar, No);
  "onselectstart" in t ? n.on("selectstart.drag", ar, No) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function qp(e, t) {
  var n = e.document.documentElement, r = We(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ar, No), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const di = (e) => () => e;
function Mu(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: l,
  dx: u,
  dy: a,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: a, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Mu.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Jx(e) {
  return !e.ctrlKey && !e.button;
}
function ew() {
  return this.parentNode;
}
function tw(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function nw() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Jp() {
  var e = Jx, t = ew, n = tw, r = nw, o = {}, i = $s("start", "drag", "end"), s = 0, l, u, a, d, c = 0;
  function f(v) {
    v.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", p, qx).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(v, S) {
    if (!(d || !e.call(this, v, S))) {
      var k = h(this, t.call(this, v, S), v, S, "mouse");
      k && (We(v.view).on("mousemove.drag", y, No).on("mouseup.drag", x, No), Zp(v.view), kl(v), a = !1, l = v.clientX, u = v.clientY, k("start", v));
    }
  }
  function y(v) {
    if (ar(v), !a) {
      var S = v.clientX - l, k = v.clientY - u;
      a = S * S + k * k > c;
    }
    o.mouse("drag", v);
  }
  function x(v) {
    We(v.view).on("mousemove.drag mouseup.drag", null), qp(v.view, a), ar(v), o.mouse("end", v);
  }
  function w(v, S) {
    if (e.call(this, v, S)) {
      var k = v.changedTouches, N = t.call(this, v, S), z = k.length, I, j;
      for (I = 0; I < z; ++I)
        (j = h(this, N, v, S, k[I].identifier, k[I])) && (kl(v), j("start", v, k[I]));
    }
  }
  function p(v) {
    var S = v.changedTouches, k = S.length, N, z;
    for (N = 0; N < k; ++N)
      (z = o[S[N].identifier]) && (ar(v), z("drag", v, S[N]));
  }
  function m(v) {
    var S = v.changedTouches, k = S.length, N, z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), N = 0; N < k; ++N)
      (z = o[S[N].identifier]) && (kl(v), z("end", v, S[N]));
  }
  function h(v, S, k, N, z, I) {
    var j = i.copy(), T = ct(I || k, S), A, H, C;
    if ((C = n.call(v, new Mu("beforestart", {
      sourceEvent: k,
      target: f,
      identifier: z,
      active: s,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: j
    }), N)) != null)
      return A = C.x - T[0] || 0, H = C.y - T[1] || 0, function $(D, R, _) {
        var M = T, L;
        switch (D) {
          case "start":
            o[z] = $, L = s++;
            break;
          case "end":
            delete o[z], --s;
          case "drag":
            T = ct(_ || R, S), L = s;
            break;
        }
        j.call(
          D,
          v,
          new Mu(D, {
            sourceEvent: R,
            subject: C,
            target: f,
            identifier: z,
            active: L,
            x: T[0] + A,
            y: T[1] + H,
            dx: T[0] - M[0],
            dy: T[1] - M[1],
            dispatch: j
          }),
          N
        );
      };
  }
  return f.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : di(!!v), f) : e;
  }, f.container = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : di(v), f) : t;
  }, f.subject = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : di(v), f) : n;
  }, f.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : di(!!v), f) : r;
  }, f.on = function() {
    var v = i.on.apply(i, arguments);
    return v === i ? f : v;
  }, f.clickDistance = function(v) {
    return arguments.length ? (c = (v = +v) * v, f) : Math.sqrt(c);
  }, f;
}
function Ra(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function eg(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Bo() {
}
var Mo = 0.7, as = 1 / Mo, cr = "\\s*([+-]?\\d+)\\s*", Po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", rw = /^#([0-9a-f]{3,8})$/, ow = new RegExp(`^rgb\\(${cr},${cr},${cr}\\)$`), iw = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), sw = new RegExp(`^rgba\\(${cr},${cr},${cr},${Po}\\)$`), lw = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Po}\\)$`), uw = new RegExp(`^hsl\\(${Po},${Ct},${Ct}\\)$`), aw = new RegExp(`^hsla\\(${Po},${Ct},${Ct},${Po}\\)$`), xf = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ra(Bo, An, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: wf,
  // Deprecated! Use color.formatHex.
  formatHex: wf,
  formatHex8: cw,
  formatHsl: fw,
  formatRgb: Sf,
  toString: Sf
});
function wf() {
  return this.rgb().formatHex();
}
function cw() {
  return this.rgb().formatHex8();
}
function fw() {
  return tg(this).formatHsl();
}
function Sf() {
  return this.rgb().formatRgb();
}
function An(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = rw.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? kf(t) : n === 3 ? new He(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? hi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? hi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ow.exec(e)) ? new He(t[1], t[2], t[3], 1) : (t = iw.exec(e)) ? new He(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = sw.exec(e)) ? hi(t[1], t[2], t[3], t[4]) : (t = lw.exec(e)) ? hi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = uw.exec(e)) ? Cf(t[1], t[2] / 100, t[3] / 100, 1) : (t = aw.exec(e)) ? Cf(t[1], t[2] / 100, t[3] / 100, t[4]) : xf.hasOwnProperty(e) ? kf(xf[e]) : e === "transparent" ? new He(NaN, NaN, NaN, 0) : null;
}
function kf(e) {
  return new He(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function hi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new He(e, t, n, r);
}
function dw(e) {
  return e instanceof Bo || (e = An(e)), e ? (e = e.rgb(), new He(e.r, e.g, e.b, e.opacity)) : new He();
}
function Pu(e, t, n, r) {
  return arguments.length === 1 ? dw(e) : new He(e, t, n, r ?? 1);
}
function He(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ra(He, Pu, eg(Bo, {
  brighter(e) {
    return e = e == null ? as : Math.pow(as, e), new He(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Mo : Math.pow(Mo, e), new He(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new He(Mn(this.r), Mn(this.g), Mn(this.b), cs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ef,
  // Deprecated! Use color.formatHex.
  formatHex: Ef,
  formatHex8: hw,
  formatRgb: _f,
  toString: _f
}));
function Ef() {
  return `#${_n(this.r)}${_n(this.g)}${_n(this.b)}`;
}
function hw() {
  return `#${_n(this.r)}${_n(this.g)}${_n(this.b)}${_n((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _f() {
  const e = cs(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Mn(this.r)}, ${Mn(this.g)}, ${Mn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function cs(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _n(e) {
  return e = Mn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Cf(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dt(e, t, n, r);
}
function tg(e) {
  if (e instanceof dt) return new dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Bo || (e = An(e)), !e) return new dt();
  if (e instanceof dt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, l = i - o, u = (i + o) / 2;
  return l ? (t === i ? s = (n - r) / l + (n < r) * 6 : n === i ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= u < 0.5 ? i + o : 2 - i - o, s *= 60) : l = u > 0 && u < 1 ? 0 : s, new dt(s, l, u, e.opacity);
}
function pw(e, t, n, r) {
  return arguments.length === 1 ? tg(e) : new dt(e, t, n, r ?? 1);
}
function dt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ra(dt, pw, eg(Bo, {
  brighter(e) {
    return e = e == null ? as : Math.pow(as, e), new dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Mo : Math.pow(Mo, e), new dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new He(
      El(e >= 240 ? e - 240 : e + 120, o, r),
      El(e, o, r),
      El(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new dt(Nf(this.h), pi(this.s), pi(this.l), cs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = cs(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Nf(this.h)}, ${pi(this.s) * 100}%, ${pi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Nf(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function pi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function El(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ja = (e) => () => e;
function gw(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function mw(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function yw(e) {
  return (e = +e) == 1 ? ng : function(t, n) {
    return n - t ? mw(t, n, e) : ja(isNaN(t) ? n : t);
  };
}
function ng(e, t) {
  var n = t - e;
  return n ? gw(e, n) : ja(isNaN(e) ? t : e);
}
const fs = function e(t) {
  var n = yw(t);
  function r(o, i) {
    var s = n((o = Pu(o)).r, (i = Pu(i)).r), l = n(o.g, i.g), u = n(o.b, i.b), a = ng(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = l(d), o.b = u(d), o.opacity = a(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function vw(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function xw(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ww(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = so(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(l) {
    for (s = 0; s < r; ++s) i[s] = o[s](l);
    return i;
  };
}
function Sw(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function St(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function kw(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = so(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var zu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _l = new RegExp(zu.source, "g");
function Ew(e) {
  return function() {
    return e;
  };
}
function _w(e) {
  return function(t) {
    return e(t) + "";
  };
}
function rg(e, t) {
  var n = zu.lastIndex = _l.lastIndex = 0, r, o, i, s = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = zu.exec(e)) && (o = _l.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), l[s] ? l[s] += i : l[++s] = i), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, u.push({ i: s, x: St(r, o) })), n = _l.lastIndex;
  return n < t.length && (i = t.slice(n), l[s] ? l[s] += i : l[++s] = i), l.length < 2 ? u[0] ? _w(u[0].x) : Ew(t) : (t = u.length, function(a) {
    for (var d = 0, c; d < t; ++d) l[(c = u[d]).i] = c.x(a);
    return l.join("");
  });
}
function so(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ja(t) : (n === "number" ? St : n === "string" ? (r = An(t)) ? (t = r, fs) : rg : t instanceof An ? fs : t instanceof Date ? Sw : xw(t) ? vw : Array.isArray(t) ? ww : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? kw : St)(e, t);
}
var Mf = 180 / Math.PI, Du = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function og(e, t, n, r, o, i) {
  var s, l, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * r) && (n -= e * u, r -= t * u), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, u /= l), e * r < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Mf,
    skewX: Math.atan(u) * Mf,
    scaleX: s,
    scaleY: l
  };
}
var gi;
function Cw(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Du : og(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Nw(e) {
  return e == null || (gi || (gi = document.createElementNS("http://www.w3.org/2000/svg", "g")), gi.setAttribute("transform", e), !(e = gi.transform.baseVal.consolidate())) ? Du : (e = e.matrix, og(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ig(e, t, n, r) {
  function o(a) {
    return a.length ? a.pop() + " " : "";
  }
  function i(a, d, c, f, g, y) {
    if (a !== c || d !== f) {
      var x = g.push("translate(", null, t, null, n);
      y.push({ i: x - 4, x: St(a, c) }, { i: x - 2, x: St(d, f) });
    } else (c || f) && g.push("translate(" + c + t + f + n);
  }
  function s(a, d, c, f) {
    a !== d ? (a - d > 180 ? d += 360 : d - a > 180 && (a += 360), f.push({ i: c.push(o(c) + "rotate(", null, r) - 2, x: St(a, d) })) : d && c.push(o(c) + "rotate(" + d + r);
  }
  function l(a, d, c, f) {
    a !== d ? f.push({ i: c.push(o(c) + "skewX(", null, r) - 2, x: St(a, d) }) : d && c.push(o(c) + "skewX(" + d + r);
  }
  function u(a, d, c, f, g, y) {
    if (a !== c || d !== f) {
      var x = g.push(o(g) + "scale(", null, ",", null, ")");
      y.push({ i: x - 4, x: St(a, c) }, { i: x - 2, x: St(d, f) });
    } else (c !== 1 || f !== 1) && g.push(o(g) + "scale(" + c + "," + f + ")");
  }
  return function(a, d) {
    var c = [], f = [];
    return a = e(a), d = e(d), i(a.translateX, a.translateY, d.translateX, d.translateY, c, f), s(a.rotate, d.rotate, c, f), l(a.skewX, d.skewX, c, f), u(a.scaleX, a.scaleY, d.scaleX, d.scaleY, c, f), a = d = null, function(g) {
      for (var y = -1, x = f.length, w; ++y < x; ) c[(w = f[y]).i] = w.x(g);
      return c.join("");
    };
  };
}
var Mw = ig(Cw, "px, ", "px)", "deg)"), Pw = ig(Nw, ", ", ")", ")"), zw = 1e-12;
function Pf(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Dw(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Tw(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ai = function e(t, n, r) {
  function o(i, s) {
    var l = i[0], u = i[1], a = i[2], d = s[0], c = s[1], f = s[2], g = d - l, y = c - u, x = g * g + y * y, w, p;
    if (x < zw)
      p = Math.log(f / a) / t, w = function(N) {
        return [
          l + N * g,
          u + N * y,
          a * Math.exp(t * N * p)
        ];
      };
    else {
      var m = Math.sqrt(x), h = (f * f - a * a + r * x) / (2 * a * n * m), v = (f * f - a * a - r * x) / (2 * f * n * m), S = Math.log(Math.sqrt(h * h + 1) - h), k = Math.log(Math.sqrt(v * v + 1) - v);
      p = (k - S) / t, w = function(N) {
        var z = N * p, I = Pf(S), j = a / (n * m) * (I * Tw(t * z + S) - Dw(S));
        return [
          l + j * g,
          u + j * y,
          a * I / Pf(t * z + S)
        ];
      };
    }
    return w.duration = p * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), l = s * s, u = l * l;
    return e(s, l, u);
  }, o;
}(Math.SQRT2, 2, 4);
var xr = 0, Qr = 0, Vr = 0, sg = 1e3, ds, Gr, hs = 0, $n = 0, js = 0, zo = typeof performance == "object" && performance.now ? performance : Date, lg = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Oa() {
  return $n || (lg(Iw), $n = zo.now() + js);
}
function Iw() {
  $n = 0;
}
function ps() {
  this._call = this._time = this._next = null;
}
ps.prototype = ug.prototype = {
  constructor: ps,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Oa() : +n) + (t == null ? 0 : +t), !this._next && Gr !== this && (Gr ? Gr._next = this : ds = this, Gr = this), this._call = e, this._time = n, Tu();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Tu());
  }
};
function ug(e, t, n) {
  var r = new ps();
  return r.restart(e, t, n), r;
}
function Lw() {
  Oa(), ++xr;
  for (var e = ds, t; e; )
    (t = $n - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --xr;
}
function zf() {
  $n = (hs = zo.now()) + js, xr = Qr = 0;
  try {
    Lw();
  } finally {
    xr = 0, $w(), $n = 0;
  }
}
function Aw() {
  var e = zo.now(), t = e - hs;
  t > sg && (js -= t, hs = e);
}
function $w() {
  for (var e, t = ds, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ds = n);
  Gr = e, Tu(r);
}
function Tu(e) {
  if (!xr) {
    Qr && (Qr = clearTimeout(Qr));
    var t = e - $n;
    t > 24 ? (e < 1 / 0 && (Qr = setTimeout(zf, e - zo.now() - js)), Vr && (Vr = clearInterval(Vr))) : (Vr || (hs = zo.now(), Vr = setInterval(Aw, sg)), xr = 1, lg(zf));
  }
}
function Df(e, t, n) {
  var r = new ps();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Rw = $s("start", "end", "cancel", "interrupt"), jw = [], ag = 0, Tf = 1, Iu = 2, $i = 3, If = 4, Lu = 5, Ri = 6;
function Os(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Ow(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Rw,
    tween: jw,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ag
  });
}
function Fa(e, t) {
  var n = vt(e, t);
  if (n.state > ag) throw new Error("too late; already scheduled");
  return n;
}
function Mt(e, t) {
  var n = vt(e, t);
  if (n.state > $i) throw new Error("too late; already running");
  return n;
}
function vt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Ow(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ug(i, 0, n.time);
  function i(a) {
    n.state = Tf, n.timer.restart(s, n.delay, n.time), n.delay <= a && s(a - n.delay);
  }
  function s(a) {
    var d, c, f, g;
    if (n.state !== Tf) return u();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === $i) return Df(s);
        g.state === If ? (g.state = Ri, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Ri, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (Df(function() {
      n.state === $i && (n.state = If, n.timer.restart(l, n.delay, n.time), l(a));
    }), n.state = Iu, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Iu) {
      for (n.state = $i, o = new Array(f = n.tween.length), d = 0, c = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++c] = g);
      o.length = c + 1;
    }
  }
  function l(a) {
    for (var d = a < n.duration ? n.ease.call(null, a / n.duration) : (n.timer.restart(u), n.state = Lu, 1), c = -1, f = o.length; ++c < f; )
      o[c].call(e, d);
    n.state === Lu && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Ri, n.timer.stop(), delete r[t];
    for (var a in r) return;
    delete e.__transition;
  }
}
function ji(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Iu && r.state < Lu, r.state = Ri, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Fw(e) {
  return this.each(function() {
    ji(this, e);
  });
}
function Hw(e, t) {
  var n, r;
  return function() {
    var o = Mt(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, l = r.length; s < l; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Bw(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Mt(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var l = { name: t, value: n }, u = 0, a = o.length; u < a; ++u)
        if (o[u].name === t) {
          o[u] = l;
          break;
        }
      u === a && o.push(l);
    }
    i.tween = o;
  };
}
function Vw(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = vt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Hw : Bw)(n, e, t));
}
function Ha(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Mt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return vt(o, r).value[t];
  };
}
function cg(e, t) {
  var n;
  return (typeof t == "number" ? St : t instanceof An ? fs : (n = An(t)) ? (t = n, fs) : rg)(e, t);
}
function bw(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Uw(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ww(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Yw(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Xw(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), u;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = l + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l)));
  };
}
function Kw(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), u;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = l + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l)));
  };
}
function Qw(e, t) {
  var n = Rs(e), r = n === "transform" ? Pw : cg;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Kw : Xw)(n, r, Ha(this, "attr." + e, t)) : t == null ? (n.local ? Uw : bw)(n) : (n.local ? Yw : Ww)(n, r, t));
}
function Gw(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Zw(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function qw(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Zw(e, i)), n;
  }
  return o._value = t, o;
}
function Jw(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Gw(e, i)), n;
  }
  return o._value = t, o;
}
function eS(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Rs(e);
  return this.tween(n, (r.local ? qw : Jw)(r, t));
}
function tS(e, t) {
  return function() {
    Fa(this, e).delay = +t.apply(this, arguments);
  };
}
function nS(e, t) {
  return t = +t, function() {
    Fa(this, e).delay = t;
  };
}
function rS(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? tS : nS)(t, e)) : vt(this.node(), t).delay;
}
function oS(e, t) {
  return function() {
    Mt(this, e).duration = +t.apply(this, arguments);
  };
}
function iS(e, t) {
  return t = +t, function() {
    Mt(this, e).duration = t;
  };
}
function sS(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? oS : iS)(t, e)) : vt(this.node(), t).duration;
}
function lS(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mt(this, e).ease = t;
  };
}
function uS(e) {
  var t = this._id;
  return arguments.length ? this.each(lS(t, e)) : vt(this.node(), t).ease;
}
function aS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Mt(this, e).ease = n;
  };
}
function cS(e) {
  if (typeof e != "function") throw new Error();
  return this.each(aS(this._id, e));
}
function fS(e) {
  typeof e != "function" && (e = Bp(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], u, a = 0; a < s; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && l.push(u);
  return new Vt(r, this._parents, this._name, this._id);
}
function dS(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), l = 0; l < i; ++l)
    for (var u = t[l], a = n[l], d = u.length, c = s[l] = new Array(d), f, g = 0; g < d; ++g)
      (f = u[g] || a[g]) && (c[g] = f);
  for (; l < r; ++l)
    s[l] = t[l];
  return new Vt(s, this._parents, this._name, this._id);
}
function hS(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function pS(e, t, n) {
  var r, o, i = hS(t) ? Fa : Mt;
  return function() {
    var s = i(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function gS(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vt(this.node(), n).on.on(e) : this.each(pS(n, e, t));
}
function mS(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function yS() {
  return this.on("end.remove", mS(this._id));
}
function vS(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Aa(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, a = i[s] = new Array(u), d, c, f = 0; f < u; ++f)
      (d = l[f]) && (c = e.call(d, d.__data__, f, l)) && ("__data__" in d && (c.__data__ = d.__data__), a[f] = c, Os(a[f], t, n, f, a, vt(d, n)));
  return new Vt(i, this._parents, t, n);
}
function xS(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Hp(e));
  for (var r = this._groups, o = r.length, i = [], s = [], l = 0; l < o; ++l)
    for (var u = r[l], a = u.length, d, c = 0; c < a; ++c)
      if (d = u[c]) {
        for (var f = e.call(d, d.__data__, c, u), g, y = vt(d, n), x = 0, w = f.length; x < w; ++x)
          (g = f[x]) && Os(g, t, n, x, f, y);
        i.push(f), s.push(d);
      }
  return new Vt(i, s, t, n);
}
var wS = Ho.prototype.constructor;
function SS() {
  return new wS(this._groups, this._parents);
}
function kS(e, t) {
  var n, r, o;
  return function() {
    var i = vr(this, e), s = (this.style.removeProperty(e), vr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function fg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ES(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = vr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function _S(e, t, n) {
  var r, o, i;
  return function() {
    var s = vr(this, e), l = n(this), u = l + "";
    return l == null && (u = l = (this.style.removeProperty(e), vr(this, e))), s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l));
  };
}
function CS(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, l;
  return function() {
    var u = Mt(this, e), a = u.on, d = u.value[i] == null ? l || (l = fg(t)) : void 0;
    (a !== n || o !== d) && (r = (n = a).copy()).on(s, o = d), u.on = r;
  };
}
function NS(e, t, n) {
  var r = (e += "") == "transform" ? Mw : cg;
  return t == null ? this.styleTween(e, kS(e, r)).on("end.style." + e, fg(e)) : typeof t == "function" ? this.styleTween(e, _S(e, r, Ha(this, "style." + e, t))).each(CS(this._id, e)) : this.styleTween(e, ES(e, r, t), n).on("end.style." + e, null);
}
function MS(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function PS(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && MS(e, s, n)), r;
  }
  return i._value = t, i;
}
function zS(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, PS(e, t, n ?? ""));
}
function DS(e) {
  return function() {
    this.textContent = e;
  };
}
function TS(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function IS(e) {
  return this.tween("text", typeof e == "function" ? TS(Ha(this, "text", e)) : DS(e == null ? "" : e + ""));
}
function LS(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function AS(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && LS(o)), t;
  }
  return r._value = e, r;
}
function $S(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, AS(e));
}
function RS() {
  for (var e = this._name, t = this._id, n = dg(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u, a = 0; a < l; ++a)
      if (u = s[a]) {
        var d = vt(u, t);
        Os(u, e, n, a, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Vt(r, this._parents, e, n);
}
function jS() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var l = { value: s }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var a = Mt(this, r), d = a.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(u)), a.on = t;
    }), o === 0 && i();
  });
}
var OS = 0;
function Vt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function dg() {
  return ++OS;
}
var zt = Ho.prototype;
Vt.prototype = {
  constructor: Vt,
  select: vS,
  selectAll: xS,
  selectChild: zt.selectChild,
  selectChildren: zt.selectChildren,
  filter: fS,
  merge: dS,
  selection: SS,
  transition: RS,
  call: zt.call,
  nodes: zt.nodes,
  node: zt.node,
  size: zt.size,
  empty: zt.empty,
  each: zt.each,
  on: gS,
  attr: Qw,
  attrTween: eS,
  style: NS,
  styleTween: zS,
  text: IS,
  textTween: $S,
  remove: yS,
  tween: Vw,
  delay: rS,
  duration: sS,
  ease: uS,
  easeVarying: cS,
  end: jS,
  [Symbol.iterator]: zt[Symbol.iterator]
};
function FS(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var HS = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: FS
};
function BS(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function VS(e) {
  var t, n;
  e instanceof Vt ? (t = e._id, e = e._name) : (t = dg(), (n = HS).time = Oa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u, a = 0; a < l; ++a)
      (u = s[a]) && Os(u, e, t, a, s, n || BS(u, t));
  return new Vt(r, this._parents, e, t);
}
Ho.prototype.interrupt = Fw;
Ho.prototype.transition = VS;
const mi = (e) => () => e;
function bS(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function $t(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
$t.prototype = {
  constructor: $t,
  scale: function(e) {
    return e === 1 ? this : new $t(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new $t(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Fs = new $t(1, 0, 0);
hg.prototype = $t.prototype;
function hg(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Fs;
  return e.__zoom;
}
function Cl(e) {
  e.stopImmediatePropagation();
}
function br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function US(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function WS() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Lf() {
  return this.__zoom || Fs;
}
function YS(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function XS() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function KS(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function pg() {
  var e = US, t = WS, n = KS, r = YS, o = XS, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, u = Ai, a = $s("start", "zoom", "end"), d, c, f, g = 500, y = 150, x = 0, w = 10;
  function p(C) {
    C.property("__zoom", Lf).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", j).filter(o).on("touchstart.zoom", T).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(C, $, D, R) {
    var _ = C.selection ? C.selection() : C;
    _.property("__zoom", Lf), C !== _ ? S(C, $, D, R) : _.interrupt().each(function() {
      k(this, arguments).event(R).start().zoom(null, typeof $ == "function" ? $.apply(this, arguments) : $).end();
    });
  }, p.scaleBy = function(C, $, D, R) {
    p.scaleTo(C, function() {
      var _ = this.__zoom.k, M = typeof $ == "function" ? $.apply(this, arguments) : $;
      return _ * M;
    }, D, R);
  }, p.scaleTo = function(C, $, D, R) {
    p.transform(C, function() {
      var _ = t.apply(this, arguments), M = this.__zoom, L = D == null ? v(_) : typeof D == "function" ? D.apply(this, arguments) : D, F = M.invert(L), O = typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(h(m(M, O), L, F), _, s);
    }, D, R);
  }, p.translateBy = function(C, $, D, R) {
    p.transform(C, function() {
      return n(this.__zoom.translate(
        typeof $ == "function" ? $.apply(this, arguments) : $,
        typeof D == "function" ? D.apply(this, arguments) : D
      ), t.apply(this, arguments), s);
    }, null, R);
  }, p.translateTo = function(C, $, D, R, _) {
    p.transform(C, function() {
      var M = t.apply(this, arguments), L = this.__zoom, F = R == null ? v(M) : typeof R == "function" ? R.apply(this, arguments) : R;
      return n(Fs.translate(F[0], F[1]).scale(L.k).translate(
        typeof $ == "function" ? -$.apply(this, arguments) : -$,
        typeof D == "function" ? -D.apply(this, arguments) : -D
      ), M, s);
    }, R, _);
  };
  function m(C, $) {
    return $ = Math.max(i[0], Math.min(i[1], $)), $ === C.k ? C : new $t($, C.x, C.y);
  }
  function h(C, $, D) {
    var R = $[0] - D[0] * C.k, _ = $[1] - D[1] * C.k;
    return R === C.x && _ === C.y ? C : new $t(C.k, R, _);
  }
  function v(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function S(C, $, D, R) {
    C.on("start.zoom", function() {
      k(this, arguments).event(R).start();
    }).on("interrupt.zoom end.zoom", function() {
      k(this, arguments).event(R).end();
    }).tween("zoom", function() {
      var _ = this, M = arguments, L = k(_, M).event(R), F = t.apply(_, M), O = D == null ? v(F) : typeof D == "function" ? D.apply(_, M) : D, U = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), b = _.__zoom, Y = typeof $ == "function" ? $.apply(_, M) : $, X = u(b.invert(O).concat(U / b.k), Y.invert(O).concat(U / Y.k));
      return function(Q) {
        if (Q === 1) Q = Y;
        else {
          var V = X(Q), G = U / V[2];
          Q = new $t(G, O[0] - V[0] * G, O[1] - V[1] * G);
        }
        L.zoom(null, Q);
      };
    });
  }
  function k(C, $, D) {
    return !D && C.__zooming || new N(C, $);
  }
  function N(C, $) {
    this.that = C, this.args = $, this.active = 0, this.sourceEvent = null, this.extent = t.apply(C, $), this.taps = 0;
  }
  N.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, $) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = $.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = $.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = $.invert(this.touch1[0])), this.that.__zoom = $, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var $ = We(this.that).datum();
      a.call(
        C,
        this.that,
        new bS(C, {
          sourceEvent: this.sourceEvent,
          target: p,
          transform: this.that.__zoom,
          dispatch: a
        }),
        $
      );
    }
  };
  function z(C, ...$) {
    if (!e.apply(this, arguments)) return;
    var D = k(this, $).event(C), R = this.__zoom, _ = Math.max(i[0], Math.min(i[1], R.k * Math.pow(2, r.apply(this, arguments)))), M = ct(C);
    if (D.wheel)
      (D.mouse[0][0] !== M[0] || D.mouse[0][1] !== M[1]) && (D.mouse[1] = R.invert(D.mouse[0] = M)), clearTimeout(D.wheel);
    else {
      if (R.k === _) return;
      D.mouse = [M, R.invert(M)], ji(this), D.start();
    }
    br(C), D.wheel = setTimeout(L, y), D.zoom("mouse", n(h(m(R, _), D.mouse[0], D.mouse[1]), D.extent, s));
    function L() {
      D.wheel = null, D.end();
    }
  }
  function I(C, ...$) {
    if (f || !e.apply(this, arguments)) return;
    var D = C.currentTarget, R = k(this, $, !0).event(C), _ = We(C.view).on("mousemove.zoom", O, !0).on("mouseup.zoom", U, !0), M = ct(C, D), L = C.clientX, F = C.clientY;
    Zp(C.view), Cl(C), R.mouse = [M, this.__zoom.invert(M)], ji(this), R.start();
    function O(b) {
      if (br(b), !R.moved) {
        var Y = b.clientX - L, X = b.clientY - F;
        R.moved = Y * Y + X * X > x;
      }
      R.event(b).zoom("mouse", n(h(R.that.__zoom, R.mouse[0] = ct(b, D), R.mouse[1]), R.extent, s));
    }
    function U(b) {
      _.on("mousemove.zoom mouseup.zoom", null), qp(b.view, R.moved), br(b), R.event(b).end();
    }
  }
  function j(C, ...$) {
    if (e.apply(this, arguments)) {
      var D = this.__zoom, R = ct(C.changedTouches ? C.changedTouches[0] : C, this), _ = D.invert(R), M = D.k * (C.shiftKey ? 0.5 : 2), L = n(h(m(D, M), R, _), t.apply(this, $), s);
      br(C), l > 0 ? We(this).transition().duration(l).call(S, L, R, C) : We(this).call(p.transform, L, R, C);
    }
  }
  function T(C, ...$) {
    if (e.apply(this, arguments)) {
      var D = C.touches, R = D.length, _ = k(this, $, C.changedTouches.length === R).event(C), M, L, F, O;
      for (Cl(C), L = 0; L < R; ++L)
        F = D[L], O = ct(F, this), O = [O, this.__zoom.invert(O), F.identifier], _.touch0 ? !_.touch1 && _.touch0[2] !== O[2] && (_.touch1 = O, _.taps = 0) : (_.touch0 = O, M = !0, _.taps = 1 + !!d);
      d && (d = clearTimeout(d)), M && (_.taps < 2 && (c = O[0], d = setTimeout(function() {
        d = null;
      }, g)), ji(this), _.start());
    }
  }
  function A(C, ...$) {
    if (this.__zooming) {
      var D = k(this, $).event(C), R = C.changedTouches, _ = R.length, M, L, F, O;
      for (br(C), M = 0; M < _; ++M)
        L = R[M], F = ct(L, this), D.touch0 && D.touch0[2] === L.identifier ? D.touch0[0] = F : D.touch1 && D.touch1[2] === L.identifier && (D.touch1[0] = F);
      if (L = D.that.__zoom, D.touch1) {
        var U = D.touch0[0], b = D.touch0[1], Y = D.touch1[0], X = D.touch1[1], Q = (Q = Y[0] - U[0]) * Q + (Q = Y[1] - U[1]) * Q, V = (V = X[0] - b[0]) * V + (V = X[1] - b[1]) * V;
        L = m(L, Math.sqrt(Q / V)), F = [(U[0] + Y[0]) / 2, (U[1] + Y[1]) / 2], O = [(b[0] + X[0]) / 2, (b[1] + X[1]) / 2];
      } else if (D.touch0) F = D.touch0[0], O = D.touch0[1];
      else return;
      D.zoom("touch", n(h(L, F, O), D.extent, s));
    }
  }
  function H(C, ...$) {
    if (this.__zooming) {
      var D = k(this, $).event(C), R = C.changedTouches, _ = R.length, M, L;
      for (Cl(C), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), M = 0; M < _; ++M)
        L = R[M], D.touch0 && D.touch0[2] === L.identifier ? delete D.touch0 : D.touch1 && D.touch1[2] === L.identifier && delete D.touch1;
      if (D.touch1 && !D.touch0 && (D.touch0 = D.touch1, delete D.touch1), D.touch0) D.touch0[1] = this.__zoom.invert(D.touch0[0]);
      else if (D.end(), D.taps === 2 && (L = ct(L, this), Math.hypot(c[0] - L[0], c[1] - L[1]) < w)) {
        var F = We(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return p.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : mi(+C), p) : r;
  }, p.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : mi(!!C), p) : e;
  }, p.touchable = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : mi(!!C), p) : o;
  }, p.extent = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : mi([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), p) : t;
  }, p.scaleExtent = function(C) {
    return arguments.length ? (i[0] = +C[0], i[1] = +C[1], p) : [i[0], i[1]];
  }, p.translateExtent = function(C) {
    return arguments.length ? (s[0][0] = +C[0][0], s[1][0] = +C[1][0], s[0][1] = +C[0][1], s[1][1] = +C[1][1], p) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, p.constrain = function(C) {
    return arguments.length ? (n = C, p) : n;
  }, p.duration = function(C) {
    return arguments.length ? (l = +C, p) : l;
  }, p.interpolate = function(C) {
    return arguments.length ? (u = C, p) : u;
  }, p.on = function() {
    var C = a.on.apply(a, arguments);
    return C === a ? p : C;
  }, p.clickDistance = function(C) {
    return arguments.length ? (x = (C = +C) * C, p) : Math.sqrt(x);
  }, p.tapDistance = function(C) {
    return arguments.length ? (w = +C, p) : w;
  }, p;
}
const Nt = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Do = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], gg = ["Enter", " ", "Escape"], mg = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var wr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(wr || (wr = {}));
var Pn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Pn || (Pn = {}));
var To;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(To || (To = {}));
const yg = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var Jt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Jt || (Jt = {}));
var gs;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(gs || (gs = {}));
var K;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(K || (K = {}));
const Af = {
  [K.Left]: K.Right,
  [K.Right]: K.Left,
  [K.Top]: K.Bottom,
  [K.Bottom]: K.Top
};
function vg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const xg = (e) => "id" in e && "source" in e && "target" in e, QS = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ba = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Vo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Ut(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, GS = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Ba(o) ? o : t.nodeLookup.get(o.id));
    const l = s ? ms(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Hs(r, l);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Bs(n);
}, bo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Hs(n, ms(o)), r = !0);
  }), r ? Bs(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Va = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const l = {
    ...Wo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, u = [];
  for (const a of e.values()) {
    const { measured: d, selectable: c = !0, hidden: f = !1 } = a;
    if (s && !c || f)
      continue;
    const g = d.width ?? a.width ?? a.initialWidth ?? null, y = d.height ?? a.height ?? a.initialHeight ?? null, x = Io(l, kr(a)), w = (g ?? 0) * (y ?? 0), p = i && x > 0;
    (!a.internals.handleBounds || p || x >= w || a.dragging) && u.push(a);
  }
  return u;
}, ZS = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function qS(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function JS({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const l = qS(e, s), u = bo(l), a = ba(u, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(a, {
    duration: s == null ? void 0 : s.duration,
    ease: s == null ? void 0 : s.ease,
    interpolate: s == null ? void 0 : s.interpolate
  }), Promise.resolve(!0);
}
function wg({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), l = s.parentId ? n.get(s.parentId) : void 0, { x: u, y: a } = l ? l.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let c = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!l)
      i == null || i("005", Nt.error005());
    else {
      const g = l.measured.width, y = l.measured.height;
      g && y && (c = [
        [u, a],
        [u + g, a + y]
      ]);
    }
  else l && Er(s.extent) && (c = [
    [s.extent[0][0] + u, s.extent[0][1] + a],
    [s.extent[1][0] + u, s.extent[1][1] + a]
  ]);
  const f = Er(c) ? Rn(t, c, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Nt.error015())), {
    position: {
      x: f.x - u + (s.measured.width ?? 0) * d[0],
      y: f.y - a + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function ek({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), y = !g && f.parentId && s.find((x) => x.id === f.parentId);
    (g || y) && s.push(f);
  }
  const l = new Set(t.map((f) => f.id)), u = r.filter((f) => f.deletable !== !1), d = ZS(s, u);
  for (const f of u)
    l.has(f.id) && !d.find((y) => y.id === f.id) && d.push(f);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const c = await o({
    nodes: s,
    edges: d
  });
  return typeof c == "boolean" ? c ? { edges: d, nodes: s } : { edges: [], nodes: [] } : c;
}
const Sr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Rn = (e = { x: 0, y: 0 }, t, n) => ({
  x: Sr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Sr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Sg(e, t, n) {
  const { width: r, height: o } = Ut(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Rn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const $f = (e, t, n) => e < t ? Sr(Math.abs(e - t), 1, t) / t : e > n ? -Sr(Math.abs(e - n), 1, t) / t : 0, kg = (e, t, n = 15, r = 40) => {
  const o = $f(e.x, r, t.width - r) * n, i = $f(e.y, r, t.height - r) * n;
  return [o, i];
}, Hs = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Au = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Bs = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), kr = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Ba(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ms = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Ba(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Eg = (e, t) => Bs(Hs(Au(e), Au(t))), Io = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Rf = (e) => ht(e.width) && ht(e.height) && ht(e.x) && ht(e.y), ht = (e) => !isNaN(e) && isFinite(e), tk = (e, t) => {
}, Uo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Wo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Uo(l, s) : l;
}, ys = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Vn(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function nk(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Vn(e, n), o = Vn(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = Vn(e.top ?? e.y ?? 0, n), o = Vn(e.bottom ?? e.y ?? 0, n), i = Vn(e.left ?? e.x ?? 0, t), s = Vn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function rk(e, t, n, r, o, i) {
  const { x: s, y: l } = ys(e, [t, n, r]), { x: u, y: a } = ys({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - u, c = i - a;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(d),
    bottom: Math.floor(c)
  };
}
const ba = (e, t, n, r, o, i) => {
  const s = nk(i, t, n), l = (t - s.x) / e.width, u = (n - s.y) / e.height, a = Math.min(l, u), d = Sr(a, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - c * d, y = n / 2 - f * d, x = rk(e, g, y, d, t, n), w = {
    left: Math.min(x.left - s.left, 0),
    top: Math.min(x.top - s.top, 0),
    right: Math.min(x.right - s.right, 0),
    bottom: Math.min(x.bottom - s.bottom, 0)
  };
  return {
    x: g - w.left + w.right,
    y: y - w.top + w.bottom,
    zoom: d
  };
}, Lo = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Er(e) {
  return e != null && e !== "parent";
}
function Ut(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function _g(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Cg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const l = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * l[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * l[1];
  }
  return i;
}
function jf(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function ok() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function ik(e) {
  return { ...mg, ...e || {} };
}
function lo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = pt(e), l = Wo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: u, y: a } = n ? Uo(l, t) : l;
  return {
    xSnapped: u,
    ySnapped: a,
    ...l
  };
}
const Ua = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Ng = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, sk = ["INPUT", "SELECT", "TEXTAREA"];
function Mg(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : sk.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Pg = (e) => "clientX" in e, pt = (e, t) => {
  var i, s;
  const n = Pg(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Of = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const l = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (l.left - n.left) / r,
      y: (l.top - n.top) / r,
      ...Ua(s)
    };
  });
};
function zg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: l }) {
  const u = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, a = t * 0.125 + i * 0.375 + l * 0.375 + r * 0.125, d = Math.abs(u - e), c = Math.abs(a - t);
  return [u, a, d, c];
}
function yi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ff({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case K.Left:
      return [t - yi(t - r, i), n];
    case K.Right:
      return [t + yi(r - t, i), n];
    case K.Top:
      return [t, n - yi(n - o, i)];
    case K.Bottom:
      return [t, n + yi(o - n, i)];
  }
}
function Dg({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top, curvature: s = 0.25 }) {
  const [l, u] = Ff({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [a, d] = Ff({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [c, f, g, y] = zg({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: l,
    sourceControlY: u,
    targetControlX: a,
    targetControlY: d
  });
  return [
    `M${e},${t} C${l},${u} ${a},${d} ${r},${o}`,
    c,
    f,
    g,
    y
  ];
}
function Tg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [i, l, o, s];
}
function lk({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, l = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + l;
}
function uk({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Hs(ms(e), ms(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Io(s, Bs(i)) > 0;
}
const ak = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, ck = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Ig = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || ak;
  let o;
  return xg(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, ck(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function Lg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, l] = Tg({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, l];
}
const Hf = {
  [K.Left]: { x: -1, y: 0 },
  [K.Right]: { x: 1, y: 0 },
  [K.Top]: { x: 0, y: -1 },
  [K.Bottom]: { x: 0, y: 1 }
}, fk = ({ source: e, sourcePosition: t = K.Bottom, target: n }) => t === K.Left || t === K.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Bf = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function dk({ source: e, sourcePosition: t = K.Bottom, target: n, targetPosition: r = K.Top, center: o, offset: i, stepPosition: s }) {
  const l = Hf[t], u = Hf[r], a = { x: e.x + l.x * i, y: e.y + l.y * i }, d = { x: n.x + u.x * i, y: n.y + u.y * i }, c = fk({
    source: a,
    sourcePosition: t,
    target: d
  }), f = c.x !== 0 ? "x" : "y", g = c[f];
  let y = [], x, w;
  const p = { x: 0, y: 0 }, m = { x: 0, y: 0 }, [, , h, v] = Tg({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (l[f] * u[f] === -1) {
    f === "x" ? (x = o.x ?? a.x + (d.x - a.x) * s, w = o.y ?? (a.y + d.y) / 2) : (x = o.x ?? (a.x + d.x) / 2, w = o.y ?? a.y + (d.y - a.y) * s);
    const k = [
      { x, y: a.y },
      { x, y: d.y }
    ], N = [
      { x: a.x, y: w },
      { x: d.x, y: w }
    ];
    l[f] === g ? y = f === "x" ? k : N : y = f === "x" ? N : k;
  } else {
    const k = [{ x: a.x, y: d.y }], N = [{ x: d.x, y: a.y }];
    if (f === "x" ? y = l.x === g ? N : k : y = l.y === g ? k : N, t === r) {
      const A = Math.abs(e[f] - n[f]);
      if (A <= i) {
        const H = Math.min(i - 1, i - A);
        l[f] === g ? p[f] = (a[f] > e[f] ? -1 : 1) * H : m[f] = (d[f] > n[f] ? -1 : 1) * H;
      }
    }
    if (t !== r) {
      const A = f === "x" ? "y" : "x", H = l[f] === u[A], C = a[A] > d[A], $ = a[A] < d[A];
      (l[f] === 1 && (!H && C || H && $) || l[f] !== 1 && (!H && $ || H && C)) && (y = f === "x" ? k : N);
    }
    const z = { x: a.x + p.x, y: a.y + p.y }, I = { x: d.x + m.x, y: d.y + m.y }, j = Math.max(Math.abs(z.x - y[0].x), Math.abs(I.x - y[0].x)), T = Math.max(Math.abs(z.y - y[0].y), Math.abs(I.y - y[0].y));
    j >= T ? (x = (z.x + I.x) / 2, w = y[0].y) : (x = y[0].x, w = (z.y + I.y) / 2);
  }
  return [[
    e,
    { x: a.x + p.x, y: a.y + p.y },
    ...y,
    { x: d.x + m.x, y: d.y + m.y },
    n
  ], x, w, h, v];
}
function hk(e, t, n, r) {
  const o = Math.min(Bf(e, t) / 2, Bf(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const a = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * a},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const l = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * u}Q ${i},${s} ${i + o * l},${s}`;
}
function $u({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top, borderRadius: s = 5, centerX: l, centerY: u, offset: a = 20, stepPosition: d = 0.5 }) {
  const [c, f, g, y, x] = dk({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: l, y: u },
    offset: a,
    stepPosition: d
  });
  return [c.reduce((p, m, h) => {
    let v = "";
    return h > 0 && h < c.length - 1 ? v = hk(c[h - 1], m, c[h + 1], s) : v = `${h === 0 ? "M" : "L"}${m.x} ${m.y}`, p += v, p;
  }, ""), f, g, y, x];
}
function Vf(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function pk(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!Vf(t) || !Vf(n))
    return null;
  const r = t.internals.handleBounds || bf(t.handles), o = n.internals.handleBounds || bf(n.handles), i = Uf((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Uf(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === wr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (c = e.onError) == null || c.call(e, "008", Nt.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || K.Bottom, u = (s == null ? void 0 : s.position) || K.Top, a = jn(t, i, l), d = jn(n, s, u);
  return {
    sourceX: a.x,
    sourceY: a.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function bf(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function jn(e, t, n = K.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: l } = t ?? Ut(e);
  if (r)
    return { x: o + s / 2, y: i + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case K.Top:
      return { x: o + s / 2, y: i };
    case K.Right:
      return { x: o + s, y: i + l / 2 };
    case K.Bottom:
      return { x: o + s / 2, y: i + l };
    case K.Left:
      return { x: o, y: i + l / 2 };
  }
}
function Uf(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ru(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function gk(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, l) => ([l.markerStart || r, l.markerEnd || o].forEach((u) => {
    if (u && typeof u == "object") {
      const a = Ru(u, t);
      i.has(a) || (s.push({ id: a, color: u.color || n, ...u }), i.add(a));
    }
  }), s), []).sort((s, l) => s.id.localeCompare(l.id));
}
const Ag = 1e3, mk = 10, Wa = {
  nodeOrigin: [0, 0],
  nodeExtent: Do,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, yk = {
  ...Wa,
  checkEquality: !0
};
function Ya(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function vk(e, t, n) {
  const r = Ya(Wa, n);
  for (const o of e.values())
    if (o.parentId)
      Ka(o, e, t, r);
    else {
      const i = Vo(o, r.nodeOrigin), s = Er(o.extent) ? o.extent : r.nodeExtent, l = Rn(i, s, Ut(o));
      o.internals.positionAbsolute = l;
    }
}
function xk(e, t) {
  if (!e.handles)
    return e.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return {
    source: n,
    target: r
  };
}
function Xa(e) {
  return e === "manual";
}
function ju(e, t, n, r = {}) {
  var a, d;
  const o = Ya(yk, r), i = { i: 0 }, s = new Map(t), l = o != null && o.elevateNodesOnSelect && !Xa(o.zIndexMode) ? Ag : 0;
  let u = e.length > 0;
  t.clear(), n.clear();
  for (const c of e) {
    let f = s.get(c.id);
    if (o.checkEquality && c === (f == null ? void 0 : f.internals.userNode))
      t.set(c.id, f);
    else {
      const g = Vo(c, o.nodeOrigin), y = Er(c.extent) ? c.extent : o.nodeExtent, x = Rn(g, y, Ut(c));
      f = {
        ...o.defaults,
        ...c,
        measured: {
          width: (a = c.measured) == null ? void 0 : a.width,
          height: (d = c.measured) == null ? void 0 : d.height
        },
        internals: {
          positionAbsolute: x,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: xk(c, f),
          z: $g(c, l, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (u = !1), c.parentId && Ka(f, t, n, r, i);
  }
  return u;
}
function wk(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ka(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: l, zIndexMode: u } = Ya(Wa, r), a = e.parentId, d = t.get(a);
  if (!d) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  wk(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && u === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * mk), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const c = i && !Xa(u) ? Ag : 0, { x: f, y: g, z: y } = Sk(e, d, s, l, c, u), { positionAbsolute: x } = e.internals, w = f !== x.x || g !== x.y;
  (w || y !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: f, y: g } : x,
      z: y
    }
  });
}
function $g(e, t, n) {
  const r = ht(e.zIndex) ? e.zIndex : 0;
  return Xa(n) ? r : r + (e.selected ? t : 0);
}
function Sk(e, t, n, r, o, i) {
  const { x: s, y: l } = t.internals.positionAbsolute, u = Ut(e), a = Vo(e, n), d = Er(e.extent) ? Rn(a, e.extent, u) : a;
  let c = Rn({ x: s + d.x, y: l + d.y }, r, u);
  e.extent === "parent" && (c = Sg(c, u, t));
  const f = $g(e, o, i), g = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: g >= f ? g + 1 : f
  };
}
function Qa(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const l of e) {
    const u = t.get(l.parentId);
    if (!u)
      continue;
    const a = ((s = i.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? kr(u), d = Eg(a, l.rect);
    i.set(l.parentId, { expandedRect: d, parent: u });
  }
  return i.size > 0 && i.forEach(({ expandedRect: l, parent: u }, a) => {
    var h;
    const d = u.internals.positionAbsolute, c = Ut(u), f = u.origin ?? r, g = l.x < d.x ? Math.round(Math.abs(d.x - l.x)) : 0, y = l.y < d.y ? Math.round(Math.abs(d.y - l.y)) : 0, x = Math.max(c.width, Math.round(l.width)), w = Math.max(c.height, Math.round(l.height)), p = (x - c.width) * f[0], m = (w - c.height) * f[1];
    (g > 0 || y > 0 || p || m) && (o.push({
      id: a,
      type: "position",
      position: {
        x: u.position.x - g + p,
        y: u.position.y - y + m
      }
    }), (h = n.get(a)) == null || h.forEach((v) => {
      e.some((S) => S.id === v.id) || o.push({
        id: v.id,
        type: "position",
        position: {
          x: v.position.x + g,
          y: v.position.y + y
        }
      });
    })), (c.width < l.width || c.height < l.height || g || y) && o.push({
      id: a,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (g ? f[0] * g - p : 0),
        height: w + (y ? f[1] * y - m : 0)
      }
    });
  }), o;
}
function kk(e, t, n, r, o, i, s) {
  const l = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let u = !1;
  if (!l)
    return { changes: [], updatedInternals: u };
  const a = [], d = window.getComputedStyle(l), { m22: c } = new window.DOMMatrixReadOnly(d.transform), f = [];
  for (const g of e.values()) {
    const y = t.get(g.id);
    if (!y)
      continue;
    if (y.hidden) {
      t.set(y.id, {
        ...y,
        internals: {
          ...y.internals,
          handleBounds: void 0
        }
      }), u = !0;
      continue;
    }
    const x = Ua(g.nodeElement), w = y.measured.width !== x.width || y.measured.height !== x.height;
    if (!!(x.width && x.height && (w || !y.internals.handleBounds || g.force))) {
      const m = g.nodeElement.getBoundingClientRect(), h = Er(y.extent) ? y.extent : i;
      let { positionAbsolute: v } = y.internals;
      y.parentId && y.extent === "parent" ? v = Sg(v, x, t.get(y.parentId)) : h && (v = Rn(v, h, x));
      const S = {
        ...y,
        measured: x,
        internals: {
          ...y.internals,
          positionAbsolute: v,
          handleBounds: {
            source: Of("source", g.nodeElement, m, c, y.id),
            target: Of("target", g.nodeElement, m, c, y.id)
          }
        }
      };
      t.set(y.id, S), y.parentId && Ka(S, t, n, { nodeOrigin: o, zIndexMode: s }), u = !0, w && (a.push({
        id: y.id,
        type: "dimensions",
        dimensions: x
      }), y.expandParent && y.parentId && f.push({
        id: y.id,
        parentId: y.parentId,
        rect: kr(S, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = Qa(f, t, n, o);
    a.push(...g);
  }
  return { changes: a, updatedInternals: u };
}
async function Ek({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), l = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(l);
}
function Wf(e, t, n, r, o, i) {
  let s = o;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, l.set(n, t)), s = `${o}-${e}`;
  const u = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, u.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const a = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, a.set(n, t));
  }
}
function Rg(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: l = null } = r, u = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: l }, a = `${o}-${s}--${i}-${l}`, d = `${i}-${l}--${o}-${s}`;
    Wf("source", u, d, e, o, s), Wf("target", u, a, e, i, l), t.set(r.id, r);
  }
}
function jg(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : jg(n, t) : !1;
}
function Yf(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function _k(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !jg(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const l = e.get(i);
      l && o.set(i, {
        id: i,
        position: l.position || { x: 0, y: 0 },
        distance: {
          x: n.x - l.internals.positionAbsolute.x,
          y: n.y - l.internals.positionAbsolute.y
        },
        extent: l.extent,
        parentId: l.parentId,
        origin: l.origin,
        expandParent: l.expandParent,
        internals: {
          positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: l.measured.width ?? 0,
          height: l.measured.height ?? 0
        }
      });
    }
  return o;
}
function Nl({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, l, u;
  const o = [];
  for (const [a, d] of t) {
    const c = (s = n.get(a)) == null ? void 0 : s.internals.userNode;
    c && o.push({
      ...c,
      position: d.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((u = t.get(e)) == null ? void 0 : u.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Ck({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Uo(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Nk({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, l = /* @__PURE__ */ new Map(), u = !1, a = { x: 0, y: 0 }, d = null, c = !1, f = null, g = !1, y = !1, x = null;
  function w({ noDragClassName: m, handleSelector: h, domNode: v, isSelectable: S, nodeId: k, nodeClickDistance: N = 0 }) {
    f = We(v);
    function z({ x: A, y: H }) {
      const { nodeLookup: C, nodeExtent: $, snapGrid: D, snapToGrid: R, nodeOrigin: _, onNodeDrag: M, onSelectionDrag: L, onError: F, updateNodePositions: O } = t();
      i = { x: A, y: H };
      let U = !1;
      const b = l.size > 1, Y = b && $ ? Au(bo(l)) : null, X = b && R ? Ck({
        dragItems: l,
        snapGrid: D,
        x: A,
        y: H
      }) : null;
      for (const [Q, V] of l) {
        if (!C.has(Q))
          continue;
        let G = { x: A - V.distance.x, y: H - V.distance.y };
        R && (G = X ? {
          x: Math.round(G.x + X.x),
          y: Math.round(G.y + X.y)
        } : Uo(G, D));
        let ee = null;
        if (b && $ && !V.extent && Y) {
          const { positionAbsolute: Z } = V.internals, ie = Z.x - Y.x + $[0][0], ue = Z.x + V.measured.width - Y.x2 + $[1][0], oe = Z.y - Y.y + $[0][1], ze = Z.y + V.measured.height - Y.y2 + $[1][1];
          ee = [
            [ie, oe],
            [ue, ze]
          ];
        }
        const { position: J, positionAbsolute: q } = wg({
          nodeId: Q,
          nextPosition: G,
          nodeLookup: C,
          nodeExtent: ee || $,
          nodeOrigin: _,
          onError: F
        });
        U = U || V.position.x !== J.x || V.position.y !== J.y, V.position = J, V.internals.positionAbsolute = q;
      }
      if (y = y || U, !!U && (O(l, !0), x && (r || M || !k && L))) {
        const [Q, V] = Nl({
          nodeId: k,
          dragItems: l,
          nodeLookup: C
        });
        r == null || r(x, l, Q, V), M == null || M(x, Q, V), k || L == null || L(x, V);
      }
    }
    async function I() {
      if (!d)
        return;
      const { transform: A, panBy: H, autoPanSpeed: C, autoPanOnNodeDrag: $ } = t();
      if (!$) {
        u = !1, cancelAnimationFrame(s);
        return;
      }
      const [D, R] = kg(a, d, C);
      (D !== 0 || R !== 0) && (i.x = (i.x ?? 0) - D / A[2], i.y = (i.y ?? 0) - R / A[2], await H({ x: D, y: R }) && z(i)), s = requestAnimationFrame(I);
    }
    function j(A) {
      var b;
      const { nodeLookup: H, multiSelectionActive: C, nodesDraggable: $, transform: D, snapGrid: R, snapToGrid: _, selectNodesOnDrag: M, onNodeDragStart: L, onSelectionDragStart: F, unselectNodesAndEdges: O } = t();
      c = !0, (!M || !S) && !C && k && ((b = H.get(k)) != null && b.selected || O()), S && M && k && (e == null || e(k));
      const U = lo(A.sourceEvent, { transform: D, snapGrid: R, snapToGrid: _, containerBounds: d });
      if (i = U, l = _k(H, $, U, k), l.size > 0 && (n || L || !k && F)) {
        const [Y, X] = Nl({
          nodeId: k,
          dragItems: l,
          nodeLookup: H
        });
        n == null || n(A.sourceEvent, l, Y, X), L == null || L(A.sourceEvent, Y, X), k || F == null || F(A.sourceEvent, X);
      }
    }
    const T = Jp().clickDistance(N).on("start", (A) => {
      const { domNode: H, nodeDragThreshold: C, transform: $, snapGrid: D, snapToGrid: R } = t();
      d = (H == null ? void 0 : H.getBoundingClientRect()) || null, g = !1, y = !1, x = A.sourceEvent, C === 0 && j(A), i = lo(A.sourceEvent, { transform: $, snapGrid: D, snapToGrid: R, containerBounds: d }), a = pt(A.sourceEvent, d);
    }).on("drag", (A) => {
      const { autoPanOnNodeDrag: H, transform: C, snapGrid: $, snapToGrid: D, nodeDragThreshold: R, nodeLookup: _ } = t(), M = lo(A.sourceEvent, { transform: C, snapGrid: $, snapToGrid: D, containerBounds: d });
      if (x = A.sourceEvent, (A.sourceEvent.type === "touchmove" && A.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      k && !_.has(k)) && (g = !0), !g) {
        if (!u && H && c && (u = !0, I()), !c) {
          const L = pt(A.sourceEvent, d), F = L.x - a.x, O = L.y - a.y;
          Math.sqrt(F * F + O * O) > R && j(A);
        }
        (i.x !== M.xSnapped || i.y !== M.ySnapped) && l && c && (a = pt(A.sourceEvent, d), z(M));
      }
    }).on("end", (A) => {
      if (!(!c || g) && (u = !1, c = !1, cancelAnimationFrame(s), l.size > 0)) {
        const { nodeLookup: H, updateNodePositions: C, onNodeDragStop: $, onSelectionDragStop: D } = t();
        if (y && (C(l, !1), y = !1), o || $ || !k && D) {
          const [R, _] = Nl({
            nodeId: k,
            dragItems: l,
            nodeLookup: H,
            dragging: !1
          });
          o == null || o(A.sourceEvent, l, R, _), $ == null || $(A.sourceEvent, R, _), k || D == null || D(A.sourceEvent, _);
        }
      }
    }).filter((A) => {
      const H = A.target;
      return !A.button && (!m || !Yf(H, `.${m}`, v)) && (!h || Yf(H, h, v));
    });
    f.call(T);
  }
  function p() {
    f == null || f.on(".drag", null);
  }
  return {
    update: w,
    destroy: p
  };
}
function Mk(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Io(o, kr(i)) > 0 && r.push(i);
  return r;
}
const Pk = 250;
function zk(e, t, n, r) {
  var l, u;
  let o = [], i = 1 / 0;
  const s = Mk(e, n, t + Pk);
  for (const a of s) {
    const d = [...((l = a.internals.handleBounds) == null ? void 0 : l.source) ?? [], ...((u = a.internals.handleBounds) == null ? void 0 : u.target) ?? []];
    for (const c of d) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: f, y: g } = jn(a, c, c.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(g - e.y, 2));
      y > t || (y < i ? (o = [{ ...c, x: f, y: g }], i = y) : y === i && o.push({ ...c, x: f, y: g }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const a = r.type === "source" ? "target" : "source";
    return o.find((d) => d.type === a) ?? o[0];
  }
  return o[0];
}
function Og(e, t, n, r, o, i = !1) {
  var a, d, c;
  const s = r.get(e);
  if (!s)
    return null;
  const l = o === "strict" ? (a = s.internals.handleBounds) == null ? void 0 : a[t] : [...((d = s.internals.handleBounds) == null ? void 0 : d.source) ?? [], ...((c = s.internals.handleBounds) == null ? void 0 : c.target) ?? []], u = (n ? l == null ? void 0 : l.find((f) => f.id === n) : l == null ? void 0 : l[0]) ?? null;
  return u && i ? { ...u, ...jn(s, u, u.position, !0) } : u;
}
function Fg(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Dk(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Hg = () => !0;
function Tk(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: l, nodeLookup: u, lib: a, autoPanOnConnect: d, flowId: c, panBy: f, cancelConnection: g, onConnectStart: y, onConnect: x, onConnectEnd: w, isValidConnection: p = Hg, onReconnectEnd: m, updateConnection: h, getTransform: v, getFromHandle: S, autoPanSpeed: k, dragThreshold: N = 1, handleDomNode: z }) {
  const I = Ng(e.target);
  let j = 0, T;
  const { x: A, y: H } = pt(e), C = Fg(i, z), $ = l == null ? void 0 : l.getBoundingClientRect();
  let D = !1;
  if (!$ || !C)
    return;
  const R = Og(o, C, r, u, t);
  if (!R)
    return;
  let _ = pt(e, $), M = !1, L = null, F = !1, O = null;
  function U() {
    if (!d || !$)
      return;
    const [J, q] = kg(_, $, k);
    f({ x: J, y: q }), j = requestAnimationFrame(U);
  }
  const b = {
    ...R,
    nodeId: o,
    type: C,
    position: R.position
  }, Y = u.get(o);
  let Q = {
    inProgress: !0,
    isValid: null,
    from: jn(Y, b, K.Left, !0),
    fromHandle: b,
    fromPosition: b.position,
    fromNode: Y,
    to: _,
    toHandle: null,
    toPosition: Af[b.position],
    toNode: null,
    pointer: _
  };
  function V() {
    D = !0, h(Q), y == null || y(e, { nodeId: o, handleId: r, handleType: C });
  }
  N === 0 && V();
  function G(J) {
    if (!D) {
      const { x: ze, y: Wt } = pt(J), Pt = ze - A, yn = Wt - H;
      if (!(Pt * Pt + yn * yn > N * N))
        return;
      V();
    }
    if (!S() || !b) {
      ee(J);
      return;
    }
    const q = v();
    _ = pt(J, $), T = zk(Wo(_, q, !1, [1, 1]), n, u, b), M || (U(), M = !0);
    const Z = Bg(J, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: p,
      doc: I,
      lib: a,
      flowId: c,
      nodeLookup: u
    });
    O = Z.handleDomNode, L = Z.connection, F = Dk(!!T, Z.isValid);
    const ie = u.get(o), ue = ie ? jn(ie, b, K.Left, !0) : Q.from, oe = {
      ...Q,
      from: ue,
      isValid: F,
      to: Z.toHandle && F ? ys({ x: Z.toHandle.x, y: Z.toHandle.y }, q) : _,
      toHandle: Z.toHandle,
      toPosition: F && Z.toHandle ? Z.toHandle.position : Af[b.position],
      toNode: Z.toHandle ? u.get(Z.toHandle.nodeId) : null,
      pointer: _
    };
    h(oe), Q = oe;
  }
  function ee(J) {
    if (!("touches" in J && J.touches.length > 0)) {
      if (D) {
        (T || O) && L && F && (x == null || x(L));
        const { inProgress: q, ...Z } = Q, ie = {
          ...Z,
          toPosition: Q.toHandle ? Q.toPosition : null
        };
        w == null || w(J, ie), i && (m == null || m(J, ie));
      }
      g(), cancelAnimationFrame(j), M = !1, F = !1, L = null, O = null, I.removeEventListener("mousemove", G), I.removeEventListener("mouseup", ee), I.removeEventListener("touchmove", G), I.removeEventListener("touchend", ee);
    }
  }
  I.addEventListener("mousemove", G), I.addEventListener("mouseup", ee), I.addEventListener("touchmove", G), I.addEventListener("touchend", ee);
}
function Bg(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: l, flowId: u, isValidConnection: a = Hg, nodeLookup: d }) {
  const c = i === "target", f = t ? s.querySelector(`.${l}-flow__handle[data-id="${u}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: g, y } = pt(e), x = s.elementFromPoint(g, y), w = x != null && x.classList.contains(`${l}-flow__handle`) ? x : f, p = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const m = Fg(void 0, w), h = w.getAttribute("data-nodeid"), v = w.getAttribute("data-handleid"), S = w.classList.contains("connectable"), k = w.classList.contains("connectableend");
    if (!h || !m)
      return p;
    const N = {
      source: c ? h : r,
      sourceHandle: c ? v : o,
      target: c ? r : h,
      targetHandle: c ? o : v
    };
    p.connection = N;
    const I = S && k && (n === wr.Strict ? c && m === "source" || !c && m === "target" : h !== r || v !== o);
    p.isValid = I && a(N), p.toHandle = Og(h, m, v, d, n, !0);
  }
  return p;
}
const Ou = {
  onPointerDown: Tk,
  isValid: Bg
};
function Ik({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = We(e);
  function i({ translateExtent: l, width: u, height: a, zoomStep: d = 1, pannable: c = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const y = (h) => {
      if (h.sourceEvent.type !== "wheel" || !t)
        return;
      const v = n(), S = h.sourceEvent.ctrlKey && Lo() ? 10 : 1, k = -h.sourceEvent.deltaY * (h.sourceEvent.deltaMode === 1 ? 0.05 : h.sourceEvent.deltaMode ? 1 : 2e-3) * d, N = v[2] * Math.pow(2, k * S);
      t.scaleTo(N);
    };
    let x = [0, 0];
    const w = (h) => {
      (h.sourceEvent.type === "mousedown" || h.sourceEvent.type === "touchstart") && (x = [
        h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
        h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY
      ]);
    }, p = (h) => {
      const v = n();
      if (h.sourceEvent.type !== "mousemove" && h.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
        h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY
      ], k = [S[0] - x[0], S[1] - x[1]];
      x = S;
      const N = r() * Math.max(v[2], Math.log(v[2])) * (g ? -1 : 1), z = {
        x: v[0] - k[0] * N,
        y: v[1] - k[1] * N
      }, I = [
        [0, 0],
        [u, a]
      ];
      t.setViewportConstrained({
        x: z.x,
        y: z.y,
        zoom: v[2]
      }, I, l);
    }, m = pg().on("start", w).on("zoom", c ? p : null).on("zoom.wheel", f ? y : null);
    o.call(m, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: ct
  };
}
const Vs = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ml = ({ x: e, y: t, zoom: n }) => Fs.translate(e, t).scale(n), tr = (e, t) => e.target.closest(`.${t}`), Vg = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Lk = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Pl = (e, t = 0, n = Lk, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, bg = (e) => {
  const t = e.ctrlKey && Lo() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Ak({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: l, onPanZoom: u, onPanZoomEnd: a }) {
  return (d) => {
    if (tr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const c = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = ct(d), p = bg(d), m = c * Math.pow(2, p);
      r.scaleTo(n, m, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === Pn.Vertical ? 0 : d.deltaX * f, y = o === Pn.Horizontal ? 0 : d.deltaY * f;
    !Lo() && d.shiftKey && o !== Pn.Vertical && (g = d.deltaY * f, y = 0), r.translateBy(
      n,
      -(g / c) * i,
      -(y / c) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Vs(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (u == null || u(d, x), e.panScrollTimeout = setTimeout(() => {
      a == null || a(d, x), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, l == null || l(d, x));
  };
}
function $k({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, l = tr(r, e);
    if (r.ctrlKey && i && l && r.preventDefault(), s || l)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Rk({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, l;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Vs(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function jk({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, l;
    e.usedRightMouseButton = !!(n && Vg(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((l = i.sourceEvent) != null && l.internal) && (o == null || o(i.sourceEvent, Vs(i.transform)));
  };
}
function Ok({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var l;
    if (!((l = s.sourceEvent) != null && l.internal) && (e.isZoomingOrPanning = !1, i && Vg(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const u = Vs(s.transform);
      e.prevViewport = u, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, u);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function Fk({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: l, noPanClassName: u, lib: a, connectionInProgress: d }) {
  return (c) => {
    var w;
    const f = e || t, g = n && c.ctrlKey, y = c.type === "wheel";
    if (c.button === 1 && c.type === "mousedown" && (tr(c, `${a}-flow__node`) || tr(c, `${a}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !y || tr(c, l) && y || tr(c, u) && (!y || o && y && !e) || !n && c.ctrlKey && y)
      return !1;
    if (!n && c.type === "touchstart" && ((w = c.touches) == null ? void 0 : w.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !g && y || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const x = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || y) && x;
  };
}
function Hk({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const a = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), c = pg().scaleExtent([t, n]).translateExtent(r), f = We(e).call(c);
  m({
    x: o.x,
    y: o.y,
    zoom: Sr(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), y = f.on("dblclick.zoom");
  c.wheelDelta(bg);
  function x(T, A) {
    return f ? new Promise((H) => {
      c == null || c.interpolate((A == null ? void 0 : A.interpolate) === "linear" ? so : Ai).transform(Pl(f, A == null ? void 0 : A.duration, A == null ? void 0 : A.ease, () => H(!0)), T);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: T, noPanClassName: A, onPaneContextMenu: H, userSelectionActive: C, panOnScroll: $, panOnDrag: D, panOnScrollMode: R, panOnScrollSpeed: _, preventScrolling: M, zoomOnPinch: L, zoomOnScroll: F, zoomOnDoubleClick: O, zoomActivationKeyPressed: U, lib: b, onTransformChange: Y, connectionInProgress: X, paneClickDistance: Q, selectionOnDrag: V }) {
    C && !a.isZoomingOrPanning && p();
    const G = $ && !U && !C;
    c.clickDistance(V ? 1 / 0 : !ht(Q) || Q < 0 ? 0 : Q);
    const ee = G ? Ak({
      zoomPanValues: a,
      noWheelClassName: T,
      d3Selection: f,
      d3Zoom: c,
      panOnScrollMode: R,
      panOnScrollSpeed: _,
      zoomOnPinch: L,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : $k({
      noWheelClassName: T,
      preventScrolling: M,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", ee, { passive: !1 }), !C) {
      const q = Rk({
        zoomPanValues: a,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      c.on("start", q);
      const Z = jk({
        zoomPanValues: a,
        panOnDrag: D,
        onPaneContextMenu: !!H,
        onPanZoom: i,
        onTransformChange: Y
      });
      c.on("zoom", Z);
      const ie = Ok({
        zoomPanValues: a,
        panOnDrag: D,
        panOnScroll: $,
        onPaneContextMenu: H,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      c.on("end", ie);
    }
    const J = Fk({
      zoomActivationKeyPressed: U,
      panOnDrag: D,
      zoomOnScroll: F,
      panOnScroll: $,
      zoomOnDoubleClick: O,
      zoomOnPinch: L,
      userSelectionActive: C,
      noPanClassName: A,
      noWheelClassName: T,
      lib: b,
      connectionInProgress: X
    });
    c.filter(J), O ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function p() {
    c.on("zoom", null);
  }
  async function m(T, A, H) {
    const C = Ml(T), $ = c == null ? void 0 : c.constrain()(C, A, H);
    return $ && await x($), new Promise((D) => D($));
  }
  async function h(T, A) {
    const H = Ml(T);
    return await x(H, A), new Promise((C) => C(H));
  }
  function v(T) {
    if (f) {
      const A = Ml(T), H = f.property("__zoom");
      (H.k !== T.zoom || H.x !== T.x || H.y !== T.y) && (c == null || c.transform(f, A, null, { sync: !0 }));
    }
  }
  function S() {
    const T = f ? hg(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function k(T, A) {
    return f ? new Promise((H) => {
      c == null || c.interpolate((A == null ? void 0 : A.interpolate) === "linear" ? so : Ai).scaleTo(Pl(f, A == null ? void 0 : A.duration, A == null ? void 0 : A.ease, () => H(!0)), T);
    }) : Promise.resolve(!1);
  }
  function N(T, A) {
    return f ? new Promise((H) => {
      c == null || c.interpolate((A == null ? void 0 : A.interpolate) === "linear" ? so : Ai).scaleBy(Pl(f, A == null ? void 0 : A.duration, A == null ? void 0 : A.ease, () => H(!0)), T);
    }) : Promise.resolve(!1);
  }
  function z(T) {
    c == null || c.scaleExtent(T);
  }
  function I(T) {
    c == null || c.translateExtent(T);
  }
  function j(T) {
    const A = !ht(T) || T < 0 ? 0 : T;
    c == null || c.clickDistance(A);
  }
  return {
    update: w,
    destroy: p,
    setViewport: h,
    setViewportConstrained: m,
    getViewport: S,
    scaleTo: k,
    scaleBy: N,
    setScaleExtent: z,
    setTranslateExtent: I,
    syncViewport: v,
    setClickDistance: j
  };
}
var _r;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(_r || (_r = {}));
function Bk({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, l = n - r, u = [s > 0 ? 1 : s < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return s && o && (u[0] = u[0] * -1), l && i && (u[1] = u[1] * -1), u;
}
function Xf(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), o = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o
  };
}
function Xt(e, t) {
  return Math.max(0, t - e);
}
function Kt(e, t) {
  return Math.max(0, e - t);
}
function vi(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Kf(e, t) {
  return e ? !t : t;
}
function Vk(e, t, n, r, o, i, s, l) {
  let { affectsX: u, affectsY: a } = t;
  const { isHorizontal: d, isVertical: c } = t, f = d && c, { xSnapped: g, ySnapped: y } = n, { minWidth: x, maxWidth: w, minHeight: p, maxHeight: m } = r, { x: h, y: v, width: S, height: k, aspectRatio: N } = e;
  let z = Math.floor(d ? g - e.pointerX : 0), I = Math.floor(c ? y - e.pointerY : 0);
  const j = S + (u ? -z : z), T = k + (a ? -I : I), A = -i[0] * S, H = -i[1] * k;
  let C = vi(j, x, w), $ = vi(T, p, m);
  if (s) {
    let _ = 0, M = 0;
    u && z < 0 ? _ = Xt(h + z + A, s[0][0]) : !u && z > 0 && (_ = Kt(h + j + A, s[1][0])), a && I < 0 ? M = Xt(v + I + H, s[0][1]) : !a && I > 0 && (M = Kt(v + T + H, s[1][1])), C = Math.max(C, _), $ = Math.max($, M);
  }
  if (l) {
    let _ = 0, M = 0;
    u && z > 0 ? _ = Kt(h + z, l[0][0]) : !u && z < 0 && (_ = Xt(h + j, l[1][0])), a && I > 0 ? M = Kt(v + I, l[0][1]) : !a && I < 0 && (M = Xt(v + T, l[1][1])), C = Math.max(C, _), $ = Math.max($, M);
  }
  if (o) {
    if (d) {
      const _ = vi(j / N, p, m) * N;
      if (C = Math.max(C, _), s) {
        let M = 0;
        !u && !a || u && !a && f ? M = Kt(v + H + j / N, s[1][1]) * N : M = Xt(v + H + (u ? z : -z) / N, s[0][1]) * N, C = Math.max(C, M);
      }
      if (l) {
        let M = 0;
        !u && !a || u && !a && f ? M = Xt(v + j / N, l[1][1]) * N : M = Kt(v + (u ? z : -z) / N, l[0][1]) * N, C = Math.max(C, M);
      }
    }
    if (c) {
      const _ = vi(T * N, x, w) / N;
      if ($ = Math.max($, _), s) {
        let M = 0;
        !u && !a || a && !u && f ? M = Kt(h + T * N + A, s[1][0]) / N : M = Xt(h + (a ? I : -I) * N + A, s[0][0]) / N, $ = Math.max($, M);
      }
      if (l) {
        let M = 0;
        !u && !a || a && !u && f ? M = Xt(h + T * N, l[1][0]) / N : M = Kt(h + (a ? I : -I) * N, l[0][0]) / N, $ = Math.max($, M);
      }
    }
  }
  I = I + (I < 0 ? $ : -$), z = z + (z < 0 ? C : -C), o && (f ? j > T * N ? I = (Kf(u, a) ? -z : z) / N : z = (Kf(u, a) ? -I : I) * N : d ? (I = z / N, a = u) : (z = I * N, u = a));
  const D = u ? h + z : h, R = a ? v + I : v;
  return {
    width: S + (u ? -z : z),
    height: k + (a ? -I : I),
    x: i[0] * z * (u ? -1 : 1) + D,
    y: i[1] * I * (a ? -1 : 1) + R
  };
}
const Ug = { width: 0, height: 0, x: 0, y: 0 }, bk = {
  ...Ug,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Uk(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function Wk(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, l = n[0] * i, u = n[1] * s;
  return [
    [r - l, o - u],
    [r + i - l, o + s - u]
  ];
}
function Yk({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = We(e);
  let s = {
    controlDirection: Xf("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function l({ controlPosition: a, boundaries: d, keepAspectRatio: c, resizeDirection: f, onResizeStart: g, onResize: y, onResizeEnd: x, shouldResize: w }) {
    let p = { ...Ug }, m = { ...bk };
    s = {
      boundaries: d,
      resizeDirection: f,
      keepAspectRatio: c,
      controlDirection: Xf(a)
    };
    let h, v = null, S = [], k, N, z, I = !1;
    const j = Jp().on("start", (T) => {
      const { nodeLookup: A, transform: H, snapGrid: C, snapToGrid: $, nodeOrigin: D, paneDomNode: R } = n();
      if (h = A.get(t), !h)
        return;
      v = (R == null ? void 0 : R.getBoundingClientRect()) ?? null;
      const { xSnapped: _, ySnapped: M } = lo(T.sourceEvent, {
        transform: H,
        snapGrid: C,
        snapToGrid: $,
        containerBounds: v
      });
      p = {
        width: h.measured.width ?? 0,
        height: h.measured.height ?? 0,
        x: h.position.x ?? 0,
        y: h.position.y ?? 0
      }, m = {
        ...p,
        pointerX: _,
        pointerY: M,
        aspectRatio: p.width / p.height
      }, k = void 0, h.parentId && (h.extent === "parent" || h.expandParent) && (k = A.get(h.parentId), N = k && h.extent === "parent" ? Uk(k) : void 0), S = [], z = void 0;
      for (const [L, F] of A)
        if (F.parentId === t && (S.push({
          id: L,
          position: { ...F.position },
          extent: F.extent
        }), F.extent === "parent" || F.expandParent)) {
          const O = Wk(F, h, F.origin ?? D);
          z ? z = [
            [Math.min(O[0][0], z[0][0]), Math.min(O[0][1], z[0][1])],
            [Math.max(O[1][0], z[1][0]), Math.max(O[1][1], z[1][1])]
          ] : z = O;
        }
      g == null || g(T, { ...p });
    }).on("drag", (T) => {
      const { transform: A, snapGrid: H, snapToGrid: C, nodeOrigin: $ } = n(), D = lo(T.sourceEvent, {
        transform: A,
        snapGrid: H,
        snapToGrid: C,
        containerBounds: v
      }), R = [];
      if (!h)
        return;
      const { x: _, y: M, width: L, height: F } = p, O = {}, U = h.origin ?? $, { width: b, height: Y, x: X, y: Q } = Vk(m, s.controlDirection, D, s.boundaries, s.keepAspectRatio, U, N, z), V = b !== L, G = Y !== F, ee = X !== _ && V, J = Q !== M && G;
      if (!ee && !J && !V && !G)
        return;
      if ((ee || J || U[0] === 1 || U[1] === 1) && (O.x = ee ? X : p.x, O.y = J ? Q : p.y, p.x = O.x, p.y = O.y, S.length > 0)) {
        const ue = X - _, oe = Q - M;
        for (const ze of S)
          ze.position = {
            x: ze.position.x - ue + U[0] * (b - L),
            y: ze.position.y - oe + U[1] * (Y - F)
          }, R.push(ze);
      }
      if ((V || G) && (O.width = V && (!s.resizeDirection || s.resizeDirection === "horizontal") ? b : p.width, O.height = G && (!s.resizeDirection || s.resizeDirection === "vertical") ? Y : p.height, p.width = O.width, p.height = O.height), k && h.expandParent) {
        const ue = U[0] * (O.width ?? 0);
        O.x && O.x < ue && (p.x = ue, m.x = m.x - (O.x - ue));
        const oe = U[1] * (O.height ?? 0);
        O.y && O.y < oe && (p.y = oe, m.y = m.y - (O.y - oe));
      }
      const q = Bk({
        width: p.width,
        prevWidth: L,
        height: p.height,
        prevHeight: F,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), Z = { ...p, direction: q };
      (w == null ? void 0 : w(T, Z)) !== !1 && (I = !0, y == null || y(T, Z), r(O, R));
    }).on("end", (T) => {
      I && (x == null || x(T, { ...p }), o == null || o({ ...p }), I = !1);
    });
    i.call(j);
  }
  function u() {
    i.on(".drag", null);
  }
  return {
    update: l,
    destroy: u
  };
}
var Wg = { exports: {} }, Yg = {}, Xg = { exports: {} }, Kg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr = P;
function Xk(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Kk = typeof Object.is == "function" ? Object.is : Xk, Qk = Cr.useState, Gk = Cr.useEffect, Zk = Cr.useLayoutEffect, qk = Cr.useDebugValue;
function Jk(e, t) {
  var n = t(), r = Qk({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return Zk(
    function() {
      o.value = n, o.getSnapshot = t, zl(o) && i({ inst: o });
    },
    [e, n, t]
  ), Gk(
    function() {
      return zl(o) && i({ inst: o }), e(function() {
        zl(o) && i({ inst: o });
      });
    },
    [e]
  ), qk(n), n;
}
function zl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Kk(e, n);
  } catch {
    return !0;
  }
}
function eE(e, t) {
  return t();
}
var tE = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? eE : Jk;
Kg.useSyncExternalStore = Cr.useSyncExternalStore !== void 0 ? Cr.useSyncExternalStore : tE;
Xg.exports = Kg;
var nE = Xg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs = P, rE = nE;
function oE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var iE = typeof Object.is == "function" ? Object.is : oE, sE = rE.useSyncExternalStore, lE = bs.useRef, uE = bs.useEffect, aE = bs.useMemo, cE = bs.useDebugValue;
Yg.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = lE(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = aE(
    function() {
      function u(g) {
        if (!a) {
          if (a = !0, d = g, g = r(g), o !== void 0 && s.hasValue) {
            var y = s.value;
            if (o(y, g))
              return c = y;
          }
          return c = g;
        }
        if (y = c, iE(d, g)) return y;
        var x = r(g);
        return o !== void 0 && o(y, x) ? (d = g, y) : (d = g, c = x);
      }
      var a = !1, d, c, f = n === void 0 ? null : n;
      return [
        function() {
          return u(t());
        },
        f === null ? void 0 : function() {
          return u(f());
        }
      ];
    },
    [t, n, r, o]
  );
  var l = sE(e, i[0], i[1]);
  return uE(
    function() {
      s.hasValue = !0, s.value = l;
    },
    [l]
  ), cE(l), l;
};
Wg.exports = Yg;
var fE = Wg.exports;
const dE = /* @__PURE__ */ Cd(fE), hE = {}, Qf = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, c) => {
    const f = typeof d == "function" ? d(t) : d;
    if (!Object.is(f, t)) {
      const g = t;
      t = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((y) => y(t, g));
    }
  }, o = () => t, u = { setState: r, getState: o, getInitialState: () => a, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (hE ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, a = t = e(r, o, u);
  return u;
}, pE = (e) => e ? Qf(e) : Qf, { useDebugValue: gE } = Ur, { useSyncExternalStoreWithSelector: mE } = dE, yE = (e) => e;
function Qg(e, t = yE, n) {
  const r = mE(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return gE(r), r;
}
const Gf = (e, t) => {
  const n = pE(e), r = (o, i = t) => Qg(n, o, i);
  return Object.assign(r, n), r;
}, vE = (e, t) => e ? Gf(e, t) : Gf;
function he(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e)
      if (!Object.is(o, t.get(r)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
const Us = P.createContext(null), xE = Us.Provider, Gg = Nt.error001();
function ne(e, t) {
  const n = P.useContext(Us);
  if (n === null)
    throw new Error(Gg);
  return Qg(n, e, t);
}
function pe() {
  const e = P.useContext(Us);
  if (e === null)
    throw new Error(Gg);
  return P.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Zf = { display: "none" }, wE = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Zg = "react-flow__node-desc", qg = "react-flow__edge-desc", SE = "react-flow__aria-live", kE = (e) => e.ariaLiveMessage, EE = (e) => e.ariaLabelConfig;
function _E({ rfId: e }) {
  const t = ne(kE);
  return E.jsx("div", { id: `${SE}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: wE, children: t });
}
function CE({ rfId: e, disableKeyboardA11y: t }) {
  const n = ne(EE);
  return E.jsxs(E.Fragment, { children: [E.jsx("div", { id: `${Zg}-${e}`, style: Zf, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), E.jsx("div", { id: `${qg}-${e}`, style: Zf, children: n["edge.a11yDescription.default"] }), !t && E.jsx(_E, { rfId: e })] });
}
const Yo = P.forwardRef(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = `${e}`.split("-");
  return E.jsx("div", { className: Se(["react-flow__panel", n, ...s]), style: r, ref: i, ...o, children: t });
});
Yo.displayName = "Panel";
function NE({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : E.jsx(Yo, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: E.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const ME = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, xi = (e) => e.id;
function PE(e, t) {
  return he(e.selectedNodes.map(xi), t.selectedNodes.map(xi)) && he(e.selectedEdges.map(xi), t.selectedEdges.map(xi));
}
function zE({ onSelectionChange: e }) {
  const t = pe(), { selectedNodes: n, selectedEdges: r } = ne(ME, PE);
  return P.useEffect(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const DE = (e) => !!e.onSelectionChangeHandlers;
function TE({ onSelectionChange: e }) {
  const t = ne(DE);
  return e || t ? E.jsx(zE, { onSelectionChange: e }) : null;
}
const Jg = [0, 0], IE = { x: 0, y: 0, zoom: 1 }, LE = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], qf = [...LE, "rfId"], AE = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), Jf = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Do,
  nodeOrigin: Jg,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function $E(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: l, setDefaultNodesAndEdges: u } = ne(AE, he), a = pe();
  P.useEffect(() => (u(e.defaultNodes, e.defaultEdges), () => {
    d.current = Jf, l();
  }), []);
  const d = P.useRef(Jf);
  return P.useEffect(
    () => {
      for (const c of qf) {
        const f = e[c], g = d.current[c];
        f !== g && (typeof e[c] > "u" || (c === "nodes" ? t(f) : c === "edges" ? n(f) : c === "minZoom" ? r(f) : c === "maxZoom" ? o(f) : c === "translateExtent" ? i(f) : c === "nodeExtent" ? s(f) : c === "ariaLabelConfig" ? a.setState({ ariaLabelConfig: ik(f) }) : c === "fitView" ? a.setState({ fitViewQueued: f }) : c === "fitViewOptions" ? a.setState({ fitViewOptions: f }) : a.setState({ [c]: f })));
      }
      d.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    qf.map((c) => e[c])
  ), null;
}
function ed() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function RE(e) {
  var r;
  const [t, n] = P.useState(e === "system" ? null : e);
  return P.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = ed(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = ed()) != null && r.matches ? "dark" : "light";
}
const td = typeof document < "u" ? document : null;
function Ao(e = null, t = { target: td, actInsideInputWithModifier: !0 }) {
  const [n, r] = P.useState(!1), o = P.useRef(!1), i = P.useRef(/* @__PURE__ */ new Set([])), [s, l] = P.useMemo(() => {
    if (e !== null) {
      const a = (Array.isArray(e) ? e : [e]).filter((c) => typeof c == "string").map((c) => c.replace("+", `
`).replace(`

`, `
+`).split(`
`)), d = a.reduce((c, f) => c.concat(...f), []);
      return [a, d];
    }
    return [[], []];
  }, [e]);
  return P.useEffect(() => {
    const u = (t == null ? void 0 : t.target) ?? td, a = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const d = (g) => {
        var w, p;
        if (o.current = g.ctrlKey || g.metaKey || g.shiftKey || g.altKey, (!o.current || o.current && !a) && Mg(g))
          return !1;
        const x = rd(g.code, l);
        if (i.current.add(g[x]), nd(s, i.current, !1)) {
          const m = ((p = (w = g.composedPath) == null ? void 0 : w.call(g)) == null ? void 0 : p[0]) || g.target, h = (m == null ? void 0 : m.nodeName) === "BUTTON" || (m == null ? void 0 : m.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !h) && g.preventDefault(), r(!0);
        }
      }, c = (g) => {
        const y = rd(g.code, l);
        nd(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(g[y]), g.key === "Meta" && i.current.clear(), o.current = !1;
      }, f = () => {
        i.current.clear(), r(!1);
      };
      return u == null || u.addEventListener("keydown", d), u == null || u.addEventListener("keyup", c), window.addEventListener("blur", f), window.addEventListener("contextmenu", f), () => {
        u == null || u.removeEventListener("keydown", d), u == null || u.removeEventListener("keyup", c), window.removeEventListener("blur", f), window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]), n;
}
function nd(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function rd(e, t) {
  return t.includes(e) ? "code" : "key";
}
const jE = () => {
  const e = pe();
  return P.useMemo(() => ({
    zoomIn: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomOut: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomTo: (t, n) => {
      const { panZoom: r } = e.getState();
      return r ? r.scaleTo(t, { duration: n == null ? void 0 : n.duration }) : Promise.resolve(!1);
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [r, o, i], panZoom: s } = e.getState();
      return s ? (await s.setViewport({
        x: t.x ?? r,
        y: t.y ?? o,
        zoom: t.zoom ?? i
      }, n), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, n, r] = e.getState().transform;
      return { x: t, y: n, zoom: r };
    },
    setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
    fitBounds: async (t, n) => {
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: l } = e.getState(), u = ba(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
      return l ? (await l.setViewport(u, {
        duration: n == null ? void 0 : n.duration,
        ease: n == null ? void 0 : n.ease,
        interpolate: n == null ? void 0 : n.interpolate
      }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: r, snapGrid: o, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: l, y: u } = s.getBoundingClientRect(), a = {
        x: t.x - l,
        y: t.y - u
      }, d = n.snapGrid ?? o, c = n.snapToGrid ?? i;
      return Wo(a, r, c, d);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: o, y: i } = r.getBoundingClientRect(), s = ys(t, n);
      return {
        x: s.x + o,
        y: s.y + i
      };
    }
  }), []);
};
function em(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = [];
  for (const i of e)
    if (i.type === "add") {
      o.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace")
      r.set(i.id, [i]);
    else {
      const s = r.get(i.id);
      s ? s.push(i) : r.set(i.id, [i]);
    }
  for (const i of t) {
    const s = r.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove")
      continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const l = { ...i };
    for (const u of s)
      OE(u, l);
    n.push(l);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function OE(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured = {
        ...e.dimensions
      }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function tm(e, t) {
  return em(e, t);
}
function nm(e, t) {
  return em(e, t);
}
function wn(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function nr(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), r.push(wn(i.id, s)));
  }
  return r;
}
function od({ items: e = [], lookup: t }) {
  var o;
  const n = [], r = new Map(e.map((i) => [i.id, i]));
  for (const [i, s] of e.entries()) {
    const l = t.get(s.id), u = ((o = l == null ? void 0 : l.internals) == null ? void 0 : o.userNode) ?? l;
    u !== void 0 && u !== s && n.push({ id: s.id, item: s, type: "replace" }), u === void 0 && n.push({ item: s, type: "add", index: i });
  }
  for (const [i] of t)
    r.get(i) === void 0 && n.push({ id: i, type: "remove" });
  return n;
}
function id(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const sd = (e) => QS(e), FE = (e) => xg(e);
function rm(e) {
  return P.forwardRef(e);
}
const HE = typeof window < "u" ? P.useLayoutEffect : P.useEffect;
function ld(e) {
  const [t, n] = P.useState(BigInt(0)), [r] = P.useState(() => BE(() => n((o) => o + BigInt(1))));
  return HE(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function BE(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const om = P.createContext(null);
function VE({ children: e }) {
  const t = pe(), n = P.useCallback((l) => {
    const { nodes: u = [], setNodes: a, hasDefaultNodes: d, onNodesChange: c, nodeLookup: f, fitViewQueued: g, onNodesChangeMiddlewareMap: y } = t.getState();
    let x = u;
    for (const p of l)
      x = typeof p == "function" ? p(x) : p;
    let w = od({
      items: x,
      lookup: f
    });
    for (const p of y.values())
      w = p(w);
    d && a(x), w.length > 0 ? c == null || c(w) : g && window.requestAnimationFrame(() => {
      const { fitViewQueued: p, nodes: m, setNodes: h } = t.getState();
      p && h(m);
    });
  }, []), r = ld(n), o = P.useCallback((l) => {
    const { edges: u = [], setEdges: a, hasDefaultEdges: d, onEdgesChange: c, edgeLookup: f } = t.getState();
    let g = u;
    for (const y of l)
      g = typeof y == "function" ? y(g) : y;
    d ? a(g) : c && c(od({
      items: g,
      lookup: f
    }));
  }, []), i = ld(o), s = P.useMemo(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return E.jsx(om.Provider, { value: s, children: e });
}
function bE() {
  const e = P.useContext(om);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const UE = (e) => !!e.panZoom;
function ot() {
  const e = jE(), t = pe(), n = bE(), r = ne(UE), o = P.useMemo(() => {
    const i = (c) => t.getState().nodeLookup.get(c), s = (c) => {
      n.nodeQueue.push(c);
    }, l = (c) => {
      n.edgeQueue.push(c);
    }, u = (c) => {
      var p, m;
      const { nodeLookup: f, nodeOrigin: g } = t.getState(), y = sd(c) ? c : f.get(c.id), x = y.parentId ? Cg(y.position, y.measured, y.parentId, f, g) : y.position, w = {
        ...y,
        position: x,
        width: ((p = y.measured) == null ? void 0 : p.width) ?? y.width,
        height: ((m = y.measured) == null ? void 0 : m.height) ?? y.height
      };
      return kr(w);
    }, a = (c, f, g = { replace: !1 }) => {
      s((y) => y.map((x) => {
        if (x.id === c) {
          const w = typeof f == "function" ? f(x) : f;
          return g.replace && sd(w) ? w : { ...x, ...w };
        }
        return x;
      }));
    }, d = (c, f, g = { replace: !1 }) => {
      l((y) => y.map((x) => {
        if (x.id === c) {
          const w = typeof f == "function" ? f(x) : f;
          return g.replace && FE(w) ? w : { ...x, ...w };
        }
        return x;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((c) => ({ ...c })),
      getNode: (c) => {
        var f;
        return (f = i(c)) == null ? void 0 : f.internals.userNode;
      },
      getInternalNode: i,
      getEdges: () => {
        const { edges: c = [] } = t.getState();
        return c.map((f) => ({ ...f }));
      },
      getEdge: (c) => t.getState().edgeLookup.get(c),
      setNodes: s,
      setEdges: l,
      addNodes: (c) => {
        const f = Array.isArray(c) ? c : [c];
        n.nodeQueue.push((g) => [...g, ...f]);
      },
      addEdges: (c) => {
        const f = Array.isArray(c) ? c : [c];
        n.edgeQueue.push((g) => [...g, ...f]);
      },
      toObject: () => {
        const { nodes: c = [], edges: f = [], transform: g } = t.getState(), [y, x, w] = g;
        return {
          nodes: c.map((p) => ({ ...p })),
          edges: f.map((p) => ({ ...p })),
          viewport: {
            x: y,
            y: x,
            zoom: w
          }
        };
      },
      deleteElements: async ({ nodes: c = [], edges: f = [] }) => {
        const { nodes: g, edges: y, onNodesDelete: x, onEdgesDelete: w, triggerNodeChanges: p, triggerEdgeChanges: m, onDelete: h, onBeforeDelete: v } = t.getState(), { nodes: S, edges: k } = await ek({
          nodesToRemove: c,
          edgesToRemove: f,
          nodes: g,
          edges: y,
          onBeforeDelete: v
        }), N = k.length > 0, z = S.length > 0;
        if (N) {
          const I = k.map(id);
          w == null || w(k), m(I);
        }
        if (z) {
          const I = S.map(id);
          x == null || x(S), p(I);
        }
        return (z || N) && (h == null || h({ nodes: S, edges: k })), { deletedNodes: S, deletedEdges: k };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (c, f = !0, g) => {
        const y = Rf(c), x = y ? c : u(c), w = g !== void 0;
        return x ? (g || t.getState().nodes).filter((p) => {
          const m = t.getState().nodeLookup.get(p.id);
          if (m && !y && (p.id === c.id || !m.internals.positionAbsolute))
            return !1;
          const h = kr(w ? p : m), v = Io(h, x);
          return f && v > 0 || v >= h.width * h.height || v >= x.width * x.height;
        }) : [];
      },
      isNodeIntersecting: (c, f, g = !0) => {
        const x = Rf(c) ? c : u(c);
        if (!x)
          return !1;
        const w = Io(x, f);
        return g && w > 0 || w >= f.width * f.height || w >= x.width * x.height;
      },
      updateNode: a,
      updateNodeData: (c, f, g = { replace: !1 }) => {
        a(c, (y) => {
          const x = typeof f == "function" ? f(y) : f;
          return g.replace ? { ...y, data: x } : { ...y, data: { ...y.data, ...x } };
        }, g);
      },
      updateEdge: d,
      updateEdgeData: (c, f, g = { replace: !1 }) => {
        d(c, (y) => {
          const x = typeof f == "function" ? f(y) : f;
          return g.replace ? { ...y, data: x } : { ...y, data: { ...y.data, ...x } };
        }, g);
      },
      getNodesBounds: (c) => {
        const { nodeLookup: f, nodeOrigin: g } = t.getState();
        return GS(c, { nodeLookup: f, nodeOrigin: g });
      },
      getHandleConnections: ({ type: c, id: f, nodeId: g }) => {
        var y;
        return Array.from(((y = t.getState().connectionLookup.get(`${g}-${c}${f ? `-${f}` : ""}`)) == null ? void 0 : y.values()) ?? []);
      },
      getNodeConnections: ({ type: c, handleId: f, nodeId: g }) => {
        var y;
        return Array.from(((y = t.getState().connectionLookup.get(`${g}${c ? f ? `-${c}-${f}` : `-${c}` : ""}`)) == null ? void 0 : y.values()) ?? []);
      },
      fitView: async (c) => {
        const f = t.getState().fitViewResolver ?? ok();
        return t.setState({ fitViewQueued: !0, fitViewOptions: c, fitViewResolver: f }), n.nodeQueue.push((g) => [...g]), f.promise;
      }
    };
  }, []);
  return P.useMemo(() => ({
    ...o,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const ud = (e) => e.selected, WE = typeof window < "u" ? window : void 0;
function YE({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = pe(), { deleteElements: r } = ot(), o = Ao(e, { actInsideInputWithModifier: !1 }), i = Ao(t, { target: WE });
  P.useEffect(() => {
    if (o) {
      const { edges: s, nodes: l } = n.getState();
      r({ nodes: l.filter(ud), edges: s.filter(ud) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), P.useEffect(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function XE(e) {
  const t = pe();
  P.useEffect(() => {
    const n = () => {
      var o, i, s, l;
      if (!e.current || !(((i = (o = e.current).checkVisibility) == null ? void 0 : i.call(o)) ?? !0))
        return !1;
      const r = Ua(e.current);
      (r.height === 0 || r.width === 0) && ((l = (s = t.getState()).onError) == null || l.call(s, "004", Nt.error004())), t.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const r = new ResizeObserver(() => n());
      return r.observe(e.current), () => {
        window.removeEventListener("resize", n), r && e.current && r.unobserve(e.current);
      };
    }
  }, []);
}
const Ws = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, KE = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function QE({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = Pn.Free, zoomOnDoubleClick: s = !0, panOnDrag: l = !0, defaultViewport: u, translateExtent: a, minZoom: d, maxZoom: c, zoomActivationKeyCode: f, preventScrolling: g = !0, children: y, noWheelClassName: x, noPanClassName: w, onViewportChange: p, isControlledViewport: m, paneClickDistance: h, selectionOnDrag: v }) {
  const S = pe(), k = P.useRef(null), { userSelectionActive: N, lib: z, connectionInProgress: I } = ne(KE, he), j = Ao(f), T = P.useRef();
  XE(k);
  const A = P.useCallback((H) => {
    p == null || p({ x: H[0], y: H[1], zoom: H[2] }), m || S.setState({ transform: H });
  }, [p, m]);
  return P.useEffect(() => {
    if (k.current) {
      T.current = Hk({
        domNode: k.current,
        minZoom: d,
        maxZoom: c,
        translateExtent: a,
        viewport: u,
        onDraggingChange: (D) => S.setState({ paneDragging: D }),
        onPanZoomStart: (D, R) => {
          const { onViewportChangeStart: _, onMoveStart: M } = S.getState();
          M == null || M(D, R), _ == null || _(R);
        },
        onPanZoom: (D, R) => {
          const { onViewportChange: _, onMove: M } = S.getState();
          M == null || M(D, R), _ == null || _(R);
        },
        onPanZoomEnd: (D, R) => {
          const { onViewportChangeEnd: _, onMoveEnd: M } = S.getState();
          M == null || M(D, R), _ == null || _(R);
        }
      });
      const { x: H, y: C, zoom: $ } = T.current.getViewport();
      return S.setState({
        panZoom: T.current,
        transform: [H, C, $],
        domNode: k.current.closest(".react-flow")
      }), () => {
        var D;
        (D = T.current) == null || D.destroy();
      };
    }
  }, []), P.useEffect(() => {
    var H;
    (H = T.current) == null || H.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: o,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: l,
      zoomActivationKeyPressed: j,
      preventScrolling: g,
      noPanClassName: w,
      userSelectionActive: N,
      noWheelClassName: x,
      lib: z,
      onTransformChange: A,
      connectionInProgress: I,
      selectionOnDrag: v,
      paneClickDistance: h
    });
  }, [
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    l,
    j,
    g,
    w,
    N,
    x,
    z,
    A,
    I,
    v,
    h
  ]), E.jsx("div", { className: "react-flow__renderer", ref: k, style: Ws, children: y });
}
const GE = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function ZE() {
  const { userSelectionActive: e, userSelectionRect: t } = ne(GE, he);
  return e && t ? E.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Dl = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, qE = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function JE({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = To.Full, panOnDrag: r, paneClickDistance: o, selectionOnDrag: i, onSelectionStart: s, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: a, onPaneScroll: d, onPaneMouseEnter: c, onPaneMouseMove: f, onPaneMouseLeave: g, children: y }) {
  const x = pe(), { userSelectionActive: w, elementsSelectable: p, dragging: m, connectionInProgress: h } = ne(qE, he), v = p && (e || w), S = P.useRef(null), k = P.useRef(), N = P.useRef(/* @__PURE__ */ new Set()), z = P.useRef(/* @__PURE__ */ new Set()), I = P.useRef(!1), j = (_) => {
    if (I.current || h) {
      I.current = !1;
      return;
    }
    u == null || u(_), x.getState().resetSelectedElements(), x.setState({ nodesSelectionActive: !1 });
  }, T = (_) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      _.preventDefault();
      return;
    }
    a == null || a(_);
  }, A = d ? (_) => d(_) : void 0, H = (_) => {
    I.current && (_.stopPropagation(), I.current = !1);
  }, C = (_) => {
    var Y, X;
    const { domNode: M } = x.getState();
    if (k.current = M == null ? void 0 : M.getBoundingClientRect(), !k.current)
      return;
    const L = _.target === S.current;
    if (!L && !!_.target.closest(".nokey") || !e || !(i && L || t) || _.button !== 0 || !_.isPrimary)
      return;
    (X = (Y = _.target) == null ? void 0 : Y.setPointerCapture) == null || X.call(Y, _.pointerId), I.current = !1;
    const { x: U, y: b } = pt(_.nativeEvent, k.current);
    x.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: U,
        startY: b,
        x: U,
        y: b
      }
    }), L || (_.stopPropagation(), _.preventDefault());
  }, $ = (_) => {
    const { userSelectionRect: M, transform: L, nodeLookup: F, edgeLookup: O, connectionLookup: U, triggerNodeChanges: b, triggerEdgeChanges: Y, defaultEdgeOptions: X, resetSelectedElements: Q } = x.getState();
    if (!k.current || !M)
      return;
    const { x: V, y: G } = pt(_.nativeEvent, k.current), { startX: ee, startY: J } = M;
    if (!I.current) {
      const oe = t ? 0 : o;
      if (Math.hypot(V - ee, G - J) <= oe)
        return;
      Q(), s == null || s(_);
    }
    I.current = !0;
    const q = {
      startX: ee,
      startY: J,
      x: V < ee ? V : ee,
      y: G < J ? G : J,
      width: Math.abs(V - ee),
      height: Math.abs(G - J)
    }, Z = N.current, ie = z.current;
    N.current = new Set(Va(F, q, L, n === To.Partial, !0).map((oe) => oe.id)), z.current = /* @__PURE__ */ new Set();
    const ue = (X == null ? void 0 : X.selectable) ?? !0;
    for (const oe of N.current) {
      const ze = U.get(oe);
      if (ze)
        for (const { edgeId: Wt } of ze.values()) {
          const Pt = O.get(Wt);
          Pt && (Pt.selectable ?? ue) && z.current.add(Wt);
        }
    }
    if (!jf(Z, N.current)) {
      const oe = nr(F, N.current, !0);
      b(oe);
    }
    if (!jf(ie, z.current)) {
      const oe = nr(O, z.current);
      Y(oe);
    }
    x.setState({
      userSelectionRect: q,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, D = (_) => {
    var M, L;
    _.button === 0 && ((L = (M = _.target) == null ? void 0 : M.releasePointerCapture) == null || L.call(M, _.pointerId), !w && _.target === S.current && x.getState().userSelectionRect && (j == null || j(_)), x.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), I.current && (l == null || l(_), x.setState({
      nodesSelectionActive: N.current.size > 0
    })));
  }, R = r === !0 || Array.isArray(r) && r.includes(0);
  return E.jsxs("div", { className: Se(["react-flow__pane", { draggable: R, dragging: m, selection: e }]), onClick: v ? void 0 : Dl(j, S), onContextMenu: Dl(T, S), onWheel: Dl(A, S), onPointerEnter: v ? void 0 : c, onPointerMove: v ? $ : f, onPointerUp: v ? D : void 0, onPointerDownCapture: v ? C : void 0, onClickCapture: v ? H : void 0, onPointerLeave: g, ref: S, style: Ws, children: [y, E.jsx(ZE, {})] });
}
function Fu({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: l, onError: u } = t.getState(), a = l.get(e);
  if (!a) {
    u == null || u("012", Nt.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), a.selected ? (n || a.selected && s) && (i({ nodes: [a], edges: [] }), requestAnimationFrame(() => {
    var d;
    return (d = r == null ? void 0 : r.current) == null ? void 0 : d.blur();
  })) : o([e]);
}
function im({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, nodeClickDistance: s }) {
  const l = pe(), [u, a] = P.useState(!1), d = P.useRef();
  return P.useEffect(() => {
    d.current = Nk({
      getStoreItems: () => l.getState(),
      onNodeMouseDown: (c) => {
        Fu({
          id: c,
          store: l,
          nodeRef: e
        });
      },
      onDragStart: () => {
        a(!0);
      },
      onDragStop: () => {
        a(!1);
      }
    });
  }, []), P.useEffect(() => {
    var c, f;
    if (t)
      (c = d.current) == null || c.destroy();
    else if (e.current)
      return (f = d.current) == null || f.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: i,
        nodeId: o,
        nodeClickDistance: s
      }), () => {
        var g;
        (g = d.current) == null || g.destroy();
      };
  }, [n, r, t, i, e, o]), u;
}
const e_ = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function sm() {
  const e = pe();
  return P.useCallback((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: l, updateNodePositions: u, nodeLookup: a, nodeOrigin: d } = e.getState(), c = /* @__PURE__ */ new Map(), f = e_(s), g = o ? i[0] : 5, y = o ? i[1] : 5, x = n.direction.x * g * n.factor, w = n.direction.y * y * n.factor;
    for (const [, p] of a) {
      if (!f(p))
        continue;
      let m = {
        x: p.internals.positionAbsolute.x + x,
        y: p.internals.positionAbsolute.y + w
      };
      o && (m = Uo(m, i));
      const { position: h, positionAbsolute: v } = wg({
        nodeId: p.id,
        nextPosition: m,
        nodeLookup: a,
        nodeExtent: r,
        nodeOrigin: d,
        onError: l
      });
      p.position = h, p.internals.positionAbsolute = v, c.set(p.id, p);
    }
    u(c);
  }, []);
}
const Ga = P.createContext(null), t_ = Ga.Provider;
Ga.Consumer;
const lm = () => P.useContext(Ga), n_ = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), r_ = (e, t, n) => (r) => {
  const { connectionClickStartHandle: o, connectionMode: i, connection: s } = r, { fromHandle: l, toHandle: u, isValid: a } = s, d = (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n;
  return {
    connectingFrom: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.id) === t && (l == null ? void 0 : l.type) === n,
    connectingTo: d,
    clickConnecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.id) === t && (o == null ? void 0 : o.type) === n,
    isPossibleEndHandle: i === wr.Strict ? (l == null ? void 0 : l.type) !== n : e !== (l == null ? void 0 : l.nodeId) || t !== (l == null ? void 0 : l.id),
    connectionInProcess: !!l,
    clickConnectionInProcess: !!o,
    valid: d && a
  };
};
function o_({ type: e = "source", position: t = K.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: l, children: u, className: a, onMouseDown: d, onTouchStart: c, ...f }, g) {
  var $, D;
  const y = s || null, x = e === "target", w = pe(), p = lm(), { connectOnClick: m, noPanClassName: h, rfId: v } = ne(n_, he), { connectingFrom: S, connectingTo: k, clickConnecting: N, isPossibleEndHandle: z, connectionInProcess: I, clickConnectionInProcess: j, valid: T } = ne(r_(p, y, e), he);
  p || (D = ($ = w.getState()).onError) == null || D.call($, "010", Nt.error010());
  const A = (R) => {
    const { defaultEdgeOptions: _, onConnect: M, hasDefaultEdges: L } = w.getState(), F = {
      ..._,
      ...R
    };
    if (L) {
      const { edges: O, setEdges: U } = w.getState();
      U(Ig(F, O));
    }
    M == null || M(F), l == null || l(F);
  }, H = (R) => {
    if (!p)
      return;
    const _ = Pg(R.nativeEvent);
    if (o && (_ && R.button === 0 || !_)) {
      const M = w.getState();
      Ou.onPointerDown(R.nativeEvent, {
        handleDomNode: R.currentTarget,
        autoPanOnConnect: M.autoPanOnConnect,
        connectionMode: M.connectionMode,
        connectionRadius: M.connectionRadius,
        domNode: M.domNode,
        nodeLookup: M.nodeLookup,
        lib: M.lib,
        isTarget: x,
        handleId: y,
        nodeId: p,
        flowId: M.rfId,
        panBy: M.panBy,
        cancelConnection: M.cancelConnection,
        onConnectStart: M.onConnectStart,
        onConnectEnd: M.onConnectEnd,
        updateConnection: M.updateConnection,
        onConnect: A,
        isValidConnection: n || M.isValidConnection,
        getTransform: () => w.getState().transform,
        getFromHandle: () => w.getState().connection.fromHandle,
        autoPanSpeed: M.autoPanSpeed,
        dragThreshold: M.connectionDragThreshold
      });
    }
    _ ? d == null || d(R) : c == null || c(R);
  }, C = (R) => {
    const { onClickConnectStart: _, onClickConnectEnd: M, connectionClickStartHandle: L, connectionMode: F, isValidConnection: O, lib: U, rfId: b, nodeLookup: Y, connection: X } = w.getState();
    if (!p || !L && !o)
      return;
    if (!L) {
      _ == null || _(R.nativeEvent, { nodeId: p, handleId: y, handleType: e }), w.setState({ connectionClickStartHandle: { nodeId: p, type: e, id: y } });
      return;
    }
    const Q = Ng(R.target), V = n || O, { connection: G, isValid: ee } = Ou.isValid(R.nativeEvent, {
      handle: {
        nodeId: p,
        id: y,
        type: e
      },
      connectionMode: F,
      fromNodeId: L.nodeId,
      fromHandleId: L.id || null,
      fromType: L.type,
      isValidConnection: V,
      flowId: b,
      doc: Q,
      lib: U,
      nodeLookup: Y
    });
    ee && G && A(G);
    const J = structuredClone(X);
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, M == null || M(R, J), w.setState({ connectionClickStartHandle: null });
  };
  return E.jsx("div", { "data-handleid": y, "data-nodeid": p, "data-handlepos": t, "data-id": `${v}-${p}-${y}-${e}`, className: Se([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    h,
    a,
    {
      source: !x,
      target: x,
      connectable: r,
      connectablestart: o,
      connectableend: i,
      clickconnecting: N,
      connectingfrom: S,
      connectingto: k,
      valid: T,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!I || z) && (I || j ? i : o)
    }
  ]), onMouseDown: H, onTouchStart: H, onClick: m ? C : void 0, ref: g, ...f, children: u });
}
const Nr = P.memo(rm(o_));
function i_({ data: e, isConnectable: t, sourcePosition: n = K.Bottom }) {
  return E.jsxs(E.Fragment, { children: [e == null ? void 0 : e.label, E.jsx(Nr, { type: "source", position: n, isConnectable: t })] });
}
function s_({ data: e, isConnectable: t, targetPosition: n = K.Top, sourcePosition: r = K.Bottom }) {
  return E.jsxs(E.Fragment, { children: [E.jsx(Nr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, E.jsx(Nr, { type: "source", position: r, isConnectable: t })] });
}
function l_() {
  return null;
}
function u_({ data: e, isConnectable: t, targetPosition: n = K.Top }) {
  return E.jsxs(E.Fragment, { children: [E.jsx(Nr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const vs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, ad = {
  input: i_,
  default: s_,
  output: u_,
  group: l_
};
function a_(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const c_ = (e) => {
  const { width: t, height: n, x: r, y: o } = bo(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: ht(t) ? t : null,
    height: ht(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`
  };
};
function f_({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = pe(), { width: o, height: i, transformString: s, userSelectionActive: l } = ne(c_, he), u = sm(), a = P.useRef(null);
  if (P.useEffect(() => {
    var f;
    n || (f = a.current) == null || f.focus({
      preventScroll: !0
    });
  }, [n]), im({
    nodeRef: a
  }), l || !o || !i)
    return null;
  const d = e ? (f) => {
    const g = r.getState().nodes.filter((y) => y.selected);
    e(f, g);
  } : void 0, c = (f) => {
    Object.prototype.hasOwnProperty.call(vs, f.key) && (f.preventDefault(), u({
      direction: vs[f.key],
      factor: f.shiftKey ? 4 : 1
    }));
  };
  return E.jsx("div", { className: Se(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: E.jsx("div", { ref: a, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : c, style: {
    width: o,
    height: i
  } }) });
}
const cd = typeof window < "u" ? window : void 0, d_ = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function um({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: l, deleteKeyCode: u, selectionKeyCode: a, selectionOnDrag: d, selectionMode: c, onSelectionStart: f, onSelectionEnd: g, multiSelectionKeyCode: y, panActivationKeyCode: x, zoomActivationKeyCode: w, elementsSelectable: p, zoomOnScroll: m, zoomOnPinch: h, panOnScroll: v, panOnScrollSpeed: S, panOnScrollMode: k, zoomOnDoubleClick: N, panOnDrag: z, defaultViewport: I, translateExtent: j, minZoom: T, maxZoom: A, preventScrolling: H, onSelectionContextMenu: C, noWheelClassName: $, noPanClassName: D, disableKeyboardA11y: R, onViewportChange: _, isControlledViewport: M }) {
  const { nodesSelectionActive: L, userSelectionActive: F } = ne(d_, he), O = Ao(a, { target: cd }), U = Ao(x, { target: cd }), b = U || z, Y = U || v, X = d && b !== !0, Q = O || F || X;
  return YE({ deleteKeyCode: u, multiSelectionKeyCode: y }), E.jsx(QE, { onPaneContextMenu: i, elementsSelectable: p, zoomOnScroll: m, zoomOnPinch: h, panOnScroll: Y, panOnScrollSpeed: S, panOnScrollMode: k, zoomOnDoubleClick: N, panOnDrag: !O && b, defaultViewport: I, translateExtent: j, minZoom: T, maxZoom: A, zoomActivationKeyCode: w, preventScrolling: H, noWheelClassName: $, noPanClassName: D, onViewportChange: _, isControlledViewport: M, paneClickDistance: l, selectionOnDrag: X, children: E.jsxs(JE, { onSelectionStart: f, onSelectionEnd: g, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: b, isSelecting: !!Q, selectionMode: c, selectionKeyPressed: O, paneClickDistance: l, selectionOnDrag: X, children: [e, L && E.jsx(f_, { onSelectionContextMenu: C, noPanClassName: D, disableKeyboardA11y: R })] }) });
}
um.displayName = "FlowRenderer";
const h_ = P.memo(um), p_ = (e) => (t) => e ? Va(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function g_(e) {
  return ne(P.useCallback(p_(e), [e]), he);
}
const m_ = (e) => e.updateNodeInternals;
function y_() {
  const e = ne(m_), [t] = P.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const r = /* @__PURE__ */ new Map();
    n.forEach((o) => {
      const i = o.target.getAttribute("data-id");
      r.set(i, {
        id: i,
        nodeElement: o.target,
        force: !0
      });
    }), e(r);
  }));
  return P.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function v_({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = pe(), i = P.useRef(null), s = P.useRef(null), l = P.useRef(e.sourcePosition), u = P.useRef(e.targetPosition), a = P.useRef(t), d = n && !!e.internals.handleBounds;
  return P.useEffect(() => {
    i.current && !e.hidden && (!d || s.current !== i.current) && (s.current && (r == null || r.unobserve(s.current)), r == null || r.observe(i.current), s.current = i.current);
  }, [d, e.hidden]), P.useEffect(() => () => {
    s.current && (r == null || r.unobserve(s.current), s.current = null);
  }, []), P.useEffect(() => {
    if (i.current) {
      const c = a.current !== t, f = l.current !== e.sourcePosition, g = u.current !== e.targetPosition;
      (c || f || g) && (a.current = t, l.current = e.sourcePosition, u.current = e.targetPosition, o.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function x_({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: l, elementsSelectable: u, nodesConnectable: a, nodesFocusable: d, resizeObserver: c, noDragClassName: f, noPanClassName: g, disableKeyboardA11y: y, rfId: x, nodeTypes: w, nodeClickDistance: p, onError: m }) {
  const { node: h, internals: v, isParent: S } = ne((V) => {
    const G = V.nodeLookup.get(e), ee = V.parentLookup.has(e);
    return {
      node: G,
      internals: G.internals,
      isParent: ee
    };
  }, he);
  let k = h.type || "default", N = (w == null ? void 0 : w[k]) || ad[k];
  N === void 0 && (m == null || m("003", Nt.error003(k)), k = "default", N = (w == null ? void 0 : w.default) || ad.default);
  const z = !!(h.draggable || l && typeof h.draggable > "u"), I = !!(h.selectable || u && typeof h.selectable > "u"), j = !!(h.connectable || a && typeof h.connectable > "u"), T = !!(h.focusable || d && typeof h.focusable > "u"), A = pe(), H = _g(h), C = v_({ node: h, nodeType: k, hasDimensions: H, resizeObserver: c }), $ = im({
    nodeRef: C,
    disabled: h.hidden || !z,
    noDragClassName: f,
    handleSelector: h.dragHandle,
    nodeId: e,
    isSelectable: I,
    nodeClickDistance: p
  }), D = sm();
  if (h.hidden)
    return null;
  const R = Ut(h), _ = a_(h), M = I || z || t || n || r || o, L = n ? (V) => n(V, { ...v.userNode }) : void 0, F = r ? (V) => r(V, { ...v.userNode }) : void 0, O = o ? (V) => o(V, { ...v.userNode }) : void 0, U = i ? (V) => i(V, { ...v.userNode }) : void 0, b = s ? (V) => s(V, { ...v.userNode }) : void 0, Y = (V) => {
    const { selectNodesOnDrag: G, nodeDragThreshold: ee } = A.getState();
    I && (!G || !z || ee > 0) && Fu({
      id: e,
      store: A,
      nodeRef: C
    }), t && t(V, { ...v.userNode });
  }, X = (V) => {
    if (!(Mg(V.nativeEvent) || y)) {
      if (gg.includes(V.key) && I) {
        const G = V.key === "Escape";
        Fu({
          id: e,
          store: A,
          unselect: G,
          nodeRef: C
        });
      } else if (z && h.selected && Object.prototype.hasOwnProperty.call(vs, V.key)) {
        V.preventDefault();
        const { ariaLabelConfig: G } = A.getState();
        A.setState({
          ariaLiveMessage: G["node.a11yDescription.ariaLiveMessage"]({
            direction: V.key.replace("Arrow", "").toLowerCase(),
            x: ~~v.positionAbsolute.x,
            y: ~~v.positionAbsolute.y
          })
        }), D({
          direction: vs[V.key],
          factor: V.shiftKey ? 4 : 1
        });
      }
    }
  }, Q = () => {
    var ie;
    if (y || !((ie = C.current) != null && ie.matches(":focus-visible")))
      return;
    const { transform: V, width: G, height: ee, autoPanOnNodeFocus: J, setCenter: q } = A.getState();
    if (!J)
      return;
    Va(/* @__PURE__ */ new Map([[e, h]]), { x: 0, y: 0, width: G, height: ee }, V, !0).length > 0 || q(h.position.x + R.width / 2, h.position.y + R.height / 2, {
      zoom: V[2]
    });
  };
  return E.jsx("div", { className: Se([
    "react-flow__node",
    `react-flow__node-${k}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [g]: z
    },
    h.className,
    {
      selected: h.selected,
      selectable: I,
      parent: S,
      draggable: z,
      dragging: $
    }
  ]), ref: C, style: {
    zIndex: v.z,
    transform: `translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,
    pointerEvents: M ? "all" : "none",
    visibility: H ? "visible" : "hidden",
    ...h.style,
    ..._
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: L, onMouseMove: F, onMouseLeave: O, onContextMenu: U, onClick: Y, onDoubleClick: b, onKeyDown: T ? X : void 0, tabIndex: T ? 0 : void 0, onFocus: T ? Q : void 0, role: h.ariaRole ?? (T ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": y ? void 0 : `${Zg}-${x}`, "aria-label": h.ariaLabel, ...h.domAttributes, children: E.jsx(t_, { value: e, children: E.jsx(N, { id: e, data: h.data, type: k, positionAbsoluteX: v.positionAbsolute.x, positionAbsoluteY: v.positionAbsolute.y, selected: h.selected ?? !1, selectable: I, draggable: z, deletable: h.deletable ?? !0, isConnectable: j, sourcePosition: h.sourcePosition, targetPosition: h.targetPosition, dragging: $, dragHandle: h.dragHandle, zIndex: v.z, parentId: h.parentId, ...R }) }) });
}
var w_ = P.memo(x_);
const S_ = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function am(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = ne(S_, he), s = g_(e.onlyRenderVisibleElements), l = y_();
  return E.jsx("div", { className: "react-flow__nodes", style: Ws, children: s.map((u) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    E.jsx(w_, { id: u, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: l, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, u)
  )) });
}
am.displayName = "NodeRenderer";
const k_ = P.memo(am);
function E_(e) {
  return ne(P.useCallback((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && uk({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && r.push(o.id);
      }
    return r;
  }, [e]), he);
}
const __ = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return E.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, C_ = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return E.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, fd = {
  [gs.Arrow]: __,
  [gs.ArrowClosed]: C_
};
function N_(e) {
  const t = pe();
  return P.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(fd, e) ? fd[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", Nt.error009(e)), null);
  }, [e]);
}
const M_ = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: l = "auto-start-reverse" }) => {
  const u = N_(t);
  return u ? E.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: l, refX: "0", refY: "0", children: E.jsx(u, { color: n, strokeWidth: s }) }) : null;
}, cm = ({ defaultColor: e, rfId: t }) => {
  const n = ne((i) => i.edges), r = ne((i) => i.defaultEdgeOptions), o = P.useMemo(() => gk(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? E.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: E.jsx("defs", { children: o.map((i) => E.jsx(M_, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
cm.displayName = "MarkerDefinitions";
var P_ = P.memo(cm);
function fm({ x: e, y: t, label: n, labelStyle: r, labelShowBg: o = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: l = 2, children: u, className: a, ...d }) {
  const [c, f] = P.useState({ x: 1, y: 0, width: 0, height: 0 }), g = Se(["react-flow__edge-textwrapper", a]), y = P.useRef(null);
  return P.useEffect(() => {
    if (y.current) {
      const x = y.current.getBBox();
      f({
        x: x.x,
        y: x.y,
        width: x.width,
        height: x.height
      });
    }
  }, [n]), n ? E.jsxs("g", { transform: `translate(${e - c.width / 2} ${t - c.height / 2})`, className: g, visibility: c.width ? "visible" : "hidden", ...d, children: [o && E.jsx("rect", { width: c.width + 2 * s[0], x: -s[0], y: -s[1], height: c.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: l, ry: l }), E.jsx("text", { className: "react-flow__edge-text", y: c.height / 2, dy: "0.3em", ref: y, style: r, children: n }), u] }) : null;
}
fm.displayName = "EdgeText";
const z_ = P.memo(fm);
function Ys({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u, interactionWidth: a = 20, ...d }) {
  return E.jsxs(E.Fragment, { children: [E.jsx("path", { ...d, d: e, fill: "none", className: Se(["react-flow__edge-path", d.className]) }), a ? E.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: a, className: "react-flow__edge-interaction" }) : null, r && ht(t) && ht(n) ? E.jsx(z_, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u }) : null] });
}
function dd({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === K.Left || e === K.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function dm({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top }) {
  const [s, l] = dd({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [u, a] = dd({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [d, c, f, g] = zg({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: a
  });
  return [
    `M${e},${t} C${s},${l} ${u},${a} ${r},${o}`,
    d,
    c,
    f,
    g
  ];
}
function hm(e) {
  return P.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s, targetPosition: l, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: g, style: y, markerEnd: x, markerStart: w, interactionWidth: p }) => {
    const [m, h, v] = dm({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: l
    }), S = e.isInternal ? void 0 : t;
    return E.jsx(Ys, { id: S, path: m, labelX: h, labelY: v, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: g, style: y, markerEnd: x, markerStart: w, interactionWidth: p });
  });
}
const D_ = hm({ isInternal: !1 }), pm = hm({ isInternal: !0 });
D_.displayName = "SimpleBezierEdge";
pm.displayName = "SimpleBezierEdgeInternal";
function gm(e) {
  return P.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, sourcePosition: g = K.Bottom, targetPosition: y = K.Top, markerEnd: x, markerStart: w, pathOptions: p, interactionWidth: m }) => {
    const [h, v, S] = $u({
      sourceX: n,
      sourceY: r,
      sourcePosition: g,
      targetX: o,
      targetY: i,
      targetPosition: y,
      borderRadius: p == null ? void 0 : p.borderRadius,
      offset: p == null ? void 0 : p.offset,
      stepPosition: p == null ? void 0 : p.stepPosition
    }), k = e.isInternal ? void 0 : t;
    return E.jsx(Ys, { id: k, path: h, labelX: v, labelY: S, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: x, markerStart: w, interactionWidth: m });
  });
}
const mm = gm({ isInternal: !1 }), ym = gm({ isInternal: !0 });
mm.displayName = "SmoothStepEdge";
ym.displayName = "SmoothStepEdgeInternal";
function vm(e) {
  return P.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return E.jsx(mm, { ...n, id: r, pathOptions: P.useMemo(() => {
      var i;
      return { borderRadius: 0, offset: (i = n.pathOptions) == null ? void 0 : i.offset };
    }, [(o = n.pathOptions) == null ? void 0 : o.offset]) });
  });
}
const T_ = vm({ isInternal: !1 }), xm = vm({ isInternal: !0 });
T_.displayName = "StepEdge";
xm.displayName = "StepEdgeInternal";
function wm(e) {
  return P.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: g, markerStart: y, interactionWidth: x }) => {
    const [w, p, m] = Lg({ sourceX: n, sourceY: r, targetX: o, targetY: i }), h = e.isInternal ? void 0 : t;
    return E.jsx(Ys, { id: h, path: w, labelX: p, labelY: m, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: g, markerStart: y, interactionWidth: x });
  });
}
const I_ = wm({ isInternal: !1 }), Sm = wm({ isInternal: !0 });
I_.displayName = "StraightEdge";
Sm.displayName = "StraightEdgeInternal";
function km(e) {
  return P.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = K.Bottom, targetPosition: l = K.Top, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: g, style: y, markerEnd: x, markerStart: w, pathOptions: p, interactionWidth: m }) => {
    const [h, v, S] = Dg({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: l,
      curvature: p == null ? void 0 : p.curvature
    }), k = e.isInternal ? void 0 : t;
    return E.jsx(Ys, { id: k, path: h, labelX: v, labelY: S, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: g, style: y, markerEnd: x, markerStart: w, interactionWidth: m });
  });
}
const L_ = km({ isInternal: !1 }), Em = km({ isInternal: !0 });
L_.displayName = "BezierEdge";
Em.displayName = "BezierEdgeInternal";
const hd = {
  default: Em,
  straight: Sm,
  step: xm,
  smoothstep: ym,
  simplebezier: pm
}, pd = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, A_ = (e, t, n) => n === K.Left ? e - t : n === K.Right ? e + t : e, $_ = (e, t, n) => n === K.Top ? e - t : n === K.Bottom ? e + t : e, gd = "react-flow__edgeupdater";
function md({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: l }) {
  return E.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: Se([gd, `${gd}-${l}`]), cx: A_(t, r, e), cy: $_(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function R_({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: l, targetPosition: u, onReconnect: a, onReconnectStart: d, onReconnectEnd: c, setReconnecting: f, setUpdateHover: g }) {
  const y = pe(), x = (v, S) => {
    if (v.button !== 0)
      return;
    const { autoPanOnConnect: k, domNode: N, isValidConnection: z, connectionMode: I, connectionRadius: j, lib: T, onConnectStart: A, onConnectEnd: H, cancelConnection: C, nodeLookup: $, rfId: D, panBy: R, updateConnection: _ } = y.getState(), M = S.type === "target", L = (U, b) => {
      f(!1), c == null || c(U, n, S.type, b);
    }, F = (U) => a == null ? void 0 : a(n, U), O = (U, b) => {
      f(!0), d == null || d(v, n, S.type), A == null || A(U, b);
    };
    Ou.onPointerDown(v.nativeEvent, {
      autoPanOnConnect: k,
      connectionMode: I,
      connectionRadius: j,
      domNode: N,
      handleId: S.id,
      nodeId: S.nodeId,
      nodeLookup: $,
      isTarget: M,
      edgeUpdaterType: S.type,
      lib: T,
      flowId: D,
      cancelConnection: C,
      panBy: R,
      isValidConnection: z,
      onConnect: F,
      onConnectStart: O,
      onConnectEnd: H,
      onReconnectEnd: L,
      updateConnection: _,
      getTransform: () => y.getState().transform,
      getFromHandle: () => y.getState().connection.fromHandle,
      dragThreshold: y.getState().connectionDragThreshold,
      handleDomNode: v.currentTarget
    });
  }, w = (v) => x(v, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), p = (v) => x(v, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), m = () => g(!0), h = () => g(!1);
  return E.jsxs(E.Fragment, { children: [(e === !0 || e === "source") && E.jsx(md, { position: l, centerX: r, centerY: o, radius: t, onMouseDown: w, onMouseEnter: m, onMouseOut: h, type: "source" }), (e === !0 || e === "target") && E.jsx(md, { position: u, centerX: i, centerY: s, radius: t, onMouseDown: p, onMouseEnter: m, onMouseOut: h, type: "target" })] });
}
function j_({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: l, onMouseMove: u, onMouseLeave: a, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: g, rfId: y, edgeTypes: x, noPanClassName: w, onError: p, disableKeyboardA11y: m }) {
  let h = ne((q) => q.edgeLookup.get(e));
  const v = ne((q) => q.defaultEdgeOptions);
  h = v ? { ...v, ...h } : h;
  let S = h.type || "default", k = (x == null ? void 0 : x[S]) || hd[S];
  k === void 0 && (p == null || p("011", Nt.error011(S)), S = "default", k = (x == null ? void 0 : x.default) || hd.default);
  const N = !!(h.focusable || t && typeof h.focusable > "u"), z = typeof c < "u" && (h.reconnectable || n && typeof h.reconnectable > "u"), I = !!(h.selectable || r && typeof h.selectable > "u"), j = P.useRef(null), [T, A] = P.useState(!1), [H, C] = P.useState(!1), $ = pe(), { zIndex: D, sourceX: R, sourceY: _, targetX: M, targetY: L, sourcePosition: F, targetPosition: O } = ne(P.useCallback((q) => {
    const Z = q.nodeLookup.get(h.source), ie = q.nodeLookup.get(h.target);
    if (!Z || !ie)
      return {
        zIndex: h.zIndex,
        ...pd
      };
    const ue = pk({
      id: e,
      sourceNode: Z,
      targetNode: ie,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: q.connectionMode,
      onError: p
    });
    return {
      zIndex: lk({
        selected: h.selected,
        zIndex: h.zIndex,
        sourceNode: Z,
        targetNode: ie,
        elevateOnSelect: q.elevateEdgesOnSelect,
        zIndexMode: q.zIndexMode
      }),
      ...ue || pd
    };
  }, [h.source, h.target, h.sourceHandle, h.targetHandle, h.selected, h.zIndex]), he), U = P.useMemo(() => h.markerStart ? `url('#${Ru(h.markerStart, y)}')` : void 0, [h.markerStart, y]), b = P.useMemo(() => h.markerEnd ? `url('#${Ru(h.markerEnd, y)}')` : void 0, [h.markerEnd, y]);
  if (h.hidden || R === null || _ === null || M === null || L === null)
    return null;
  const Y = (q) => {
    var oe;
    const { addSelectedEdges: Z, unselectNodesAndEdges: ie, multiSelectionActive: ue } = $.getState();
    I && ($.setState({ nodesSelectionActive: !1 }), h.selected && ue ? (ie({ nodes: [], edges: [h] }), (oe = j.current) == null || oe.blur()) : Z([e])), o && o(q, h);
  }, X = i ? (q) => {
    i(q, { ...h });
  } : void 0, Q = s ? (q) => {
    s(q, { ...h });
  } : void 0, V = l ? (q) => {
    l(q, { ...h });
  } : void 0, G = u ? (q) => {
    u(q, { ...h });
  } : void 0, ee = a ? (q) => {
    a(q, { ...h });
  } : void 0, J = (q) => {
    var Z;
    if (!m && gg.includes(q.key) && I) {
      const { unselectNodesAndEdges: ie, addSelectedEdges: ue } = $.getState();
      q.key === "Escape" ? ((Z = j.current) == null || Z.blur(), ie({ edges: [h] })) : ue([e]);
    }
  };
  return E.jsx("svg", { style: { zIndex: D }, children: E.jsxs("g", { className: Se([
    "react-flow__edge",
    `react-flow__edge-${S}`,
    h.className,
    w,
    {
      selected: h.selected,
      animated: h.animated,
      inactive: !I && !o,
      updating: T,
      selectable: I
    }
  ]), onClick: Y, onDoubleClick: X, onContextMenu: Q, onMouseEnter: V, onMouseMove: G, onMouseLeave: ee, onKeyDown: N ? J : void 0, tabIndex: N ? 0 : void 0, role: h.ariaRole ?? (N ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": h.ariaLabel === null ? void 0 : h.ariaLabel || `Edge from ${h.source} to ${h.target}`, "aria-describedby": N ? `${qg}-${y}` : void 0, ref: j, ...h.domAttributes, children: [!H && E.jsx(k, { id: e, source: h.source, target: h.target, type: h.type, selected: h.selected, animated: h.animated, selectable: I, deletable: h.deletable ?? !0, label: h.label, labelStyle: h.labelStyle, labelShowBg: h.labelShowBg, labelBgStyle: h.labelBgStyle, labelBgPadding: h.labelBgPadding, labelBgBorderRadius: h.labelBgBorderRadius, sourceX: R, sourceY: _, targetX: M, targetY: L, sourcePosition: F, targetPosition: O, data: h.data, style: h.style, sourceHandleId: h.sourceHandle, targetHandleId: h.targetHandle, markerStart: U, markerEnd: b, pathOptions: "pathOptions" in h ? h.pathOptions : void 0, interactionWidth: h.interactionWidth }), z && E.jsx(R_, { edge: h, isReconnectable: z, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: g, sourceX: R, sourceY: _, targetX: M, targetY: L, sourcePosition: F, targetPosition: O, setUpdateHover: A, setReconnecting: C })] }) });
}
var O_ = P.memo(j_);
const F_ = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function _m({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: l, onEdgeMouseMove: u, onEdgeMouseLeave: a, onEdgeClick: d, reconnectRadius: c, onEdgeDoubleClick: f, onReconnectStart: g, onReconnectEnd: y, disableKeyboardA11y: x }) {
  const { edgesFocusable: w, edgesReconnectable: p, elementsSelectable: m, onError: h } = ne(F_, he), v = E_(t);
  return E.jsxs("div", { className: "react-flow__edges", children: [E.jsx(P_, { defaultColor: e, rfId: n }), v.map((S) => E.jsx(O_, { id: S, edgesFocusable: w, edgesReconnectable: p, elementsSelectable: m, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: l, onMouseMove: u, onMouseLeave: a, onClick: d, reconnectRadius: c, onDoubleClick: f, onReconnectStart: g, onReconnectEnd: y, rfId: n, onError: h, edgeTypes: r, disableKeyboardA11y: x }, S))] });
}
_m.displayName = "EdgeRenderer";
const H_ = P.memo(_m), B_ = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function V_({ children: e }) {
  const t = ne(B_);
  return E.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function b_(e) {
  const t = ot(), n = P.useRef(!1);
  P.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const U_ = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function W_(e) {
  const t = ne(U_), n = pe();
  return P.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function Y_(e) {
  return e.connection.inProgress ? { ...e.connection, to: Wo(e.connection.to, e.transform) } : { ...e.connection };
}
function X_(e) {
  return Y_;
}
function K_(e) {
  const t = X_();
  return ne(t, he);
}
const Q_ = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function G_({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: l, inProgress: u } = ne(Q_, he);
  return !(i && o && u) ? null : E.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: E.jsx("g", { className: Se(["react-flow__connection", vg(l)]), children: E.jsx(Cm, { style: t, type: n, CustomComponent: r, isValid: l }) }) });
}
const Cm = ({ style: e, type: t = Jt.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: l, fromPosition: u, to: a, toNode: d, toHandle: c, toPosition: f, pointer: g } = K_();
  if (!o)
    return;
  if (n)
    return E.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: l, fromX: i.x, fromY: i.y, toX: a.x, toY: a.y, fromPosition: u, toPosition: f, connectionStatus: vg(r), toNode: d, toHandle: c, pointer: g });
  let y = "";
  const x = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: u,
    targetX: a.x,
    targetY: a.y,
    targetPosition: f
  };
  switch (t) {
    case Jt.Bezier:
      [y] = Dg(x);
      break;
    case Jt.SimpleBezier:
      [y] = dm(x);
      break;
    case Jt.Step:
      [y] = $u({
        ...x,
        borderRadius: 0
      });
      break;
    case Jt.SmoothStep:
      [y] = $u(x);
      break;
    default:
      [y] = Lg(x);
  }
  return E.jsx("path", { d: y, fill: "none", className: "react-flow__connection-path", style: e });
};
Cm.displayName = "ConnectionLine";
const Z_ = {};
function yd(e = Z_) {
  P.useRef(e), pe(), P.useEffect(() => {
  }, [e]);
}
function q_() {
  pe(), P.useRef(!1), P.useEffect(() => {
  }, []);
}
function Nm({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: l, onNodeMouseMove: u, onNodeMouseLeave: a, onNodeContextMenu: d, onSelectionContextMenu: c, onSelectionStart: f, onSelectionEnd: g, connectionLineType: y, connectionLineStyle: x, connectionLineComponent: w, connectionLineContainerStyle: p, selectionKeyCode: m, selectionOnDrag: h, selectionMode: v, multiSelectionKeyCode: S, panActivationKeyCode: k, zoomActivationKeyCode: N, deleteKeyCode: z, onlyRenderVisibleElements: I, elementsSelectable: j, defaultViewport: T, translateExtent: A, minZoom: H, maxZoom: C, preventScrolling: $, defaultMarkerColor: D, zoomOnScroll: R, zoomOnPinch: _, panOnScroll: M, panOnScrollSpeed: L, panOnScrollMode: F, zoomOnDoubleClick: O, panOnDrag: U, onPaneClick: b, onPaneMouseEnter: Y, onPaneMouseMove: X, onPaneMouseLeave: Q, onPaneScroll: V, onPaneContextMenu: G, paneClickDistance: ee, nodeClickDistance: J, onEdgeContextMenu: q, onEdgeMouseEnter: Z, onEdgeMouseMove: ie, onEdgeMouseLeave: ue, reconnectRadius: oe, onReconnect: ze, onReconnectStart: Wt, onReconnectEnd: Pt, noDragClassName: yn, noWheelClassName: Dr, noPanClassName: Tr, disableKeyboardA11y: Ir, nodeExtent: Xs, rfId: Xo, viewport: Hn, onViewportChange: Lr }) {
  return yd(e), yd(t), q_(), b_(n), W_(Hn), E.jsx(h_, { onPaneClick: b, onPaneMouseEnter: Y, onPaneMouseMove: X, onPaneMouseLeave: Q, onPaneContextMenu: G, onPaneScroll: V, paneClickDistance: ee, deleteKeyCode: z, selectionKeyCode: m, selectionOnDrag: h, selectionMode: v, onSelectionStart: f, onSelectionEnd: g, multiSelectionKeyCode: S, panActivationKeyCode: k, zoomActivationKeyCode: N, elementsSelectable: j, zoomOnScroll: R, zoomOnPinch: _, zoomOnDoubleClick: O, panOnScroll: M, panOnScrollSpeed: L, panOnScrollMode: F, panOnDrag: U, defaultViewport: T, translateExtent: A, minZoom: H, maxZoom: C, onSelectionContextMenu: c, preventScrolling: $, noDragClassName: yn, noWheelClassName: Dr, noPanClassName: Tr, disableKeyboardA11y: Ir, onViewportChange: Lr, isControlledViewport: !!Hn, children: E.jsxs(V_, { children: [E.jsx(H_, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: ze, onReconnectStart: Wt, onReconnectEnd: Pt, onlyRenderVisibleElements: I, onEdgeContextMenu: q, onEdgeMouseEnter: Z, onEdgeMouseMove: ie, onEdgeMouseLeave: ue, reconnectRadius: oe, defaultMarkerColor: D, noPanClassName: Tr, disableKeyboardA11y: Ir, rfId: Xo }), E.jsx(G_, { style: x, type: y, component: w, containerStyle: p }), E.jsx("div", { className: "react-flow__edgelabel-renderer" }), E.jsx(k_, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: l, onNodeMouseMove: u, onNodeMouseLeave: a, onNodeContextMenu: d, nodeClickDistance: J, onlyRenderVisibleElements: I, noPanClassName: Tr, noDragClassName: yn, disableKeyboardA11y: Ir, nodeExtent: Xs, rfId: Xo }), E.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
Nm.displayName = "GraphView";
const J_ = P.memo(Nm), vd = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: u = 0.5, maxZoom: a = 2, nodeOrigin: d, nodeExtent: c, zIndexMode: f = "basic" } = {}) => {
  const g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), p = r ?? t ?? [], m = n ?? e ?? [], h = d ?? [0, 0], v = c ?? Do;
  Rg(x, w, p);
  const S = ju(m, g, y, {
    nodeOrigin: h,
    nodeExtent: v,
    zIndexMode: f
  });
  let k = [0, 0, 1];
  if (s && o && i) {
    const N = bo(g, {
      filter: (T) => !!((T.width || T.initialWidth) && (T.height || T.initialHeight))
    }), { x: z, y: I, zoom: j } = ba(N, o, i, u, a, (l == null ? void 0 : l.padding) ?? 0.1);
    k = [z, I, j];
  }
  return {
    rfId: "1",
    width: o ?? 0,
    height: i ?? 0,
    transform: k,
    nodes: m,
    nodesInitialized: S,
    nodeLookup: g,
    parentLookup: y,
    edges: p,
    edgeLookup: w,
    connectionLookup: x,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: u,
    maxZoom: a,
    translateExtent: Do,
    nodeExtent: v,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: wr.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: h,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: s ?? !1,
    fitViewOptions: l,
    fitViewResolver: null,
    connection: { ...yg },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: tk,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: mg,
    zIndexMode: f,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, eC = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: u, maxZoom: a, nodeOrigin: d, nodeExtent: c, zIndexMode: f }) => vE((g, y) => {
  async function x() {
    const { nodeLookup: w, panZoom: p, fitViewOptions: m, fitViewResolver: h, width: v, height: S, minZoom: k, maxZoom: N } = y();
    p && (await JS({
      nodes: w,
      width: v,
      height: S,
      panZoom: p,
      minZoom: k,
      maxZoom: N
    }, m), h == null || h.resolve(!0), g({ fitViewResolver: null }));
  }
  return {
    ...vd({
      nodes: e,
      edges: t,
      width: o,
      height: i,
      fitView: s,
      fitViewOptions: l,
      minZoom: u,
      maxZoom: a,
      nodeOrigin: d,
      nodeExtent: c,
      defaultNodes: n,
      defaultEdges: r,
      zIndexMode: f
    }),
    setNodes: (w) => {
      const { nodeLookup: p, parentLookup: m, nodeOrigin: h, elevateNodesOnSelect: v, fitViewQueued: S, zIndexMode: k } = y(), N = ju(w, p, m, {
        nodeOrigin: h,
        nodeExtent: c,
        elevateNodesOnSelect: v,
        checkEquality: !0,
        zIndexMode: k
      });
      S && N ? (x(), g({ nodes: w, nodesInitialized: N, fitViewQueued: !1, fitViewOptions: void 0 })) : g({ nodes: w, nodesInitialized: N });
    },
    setEdges: (w) => {
      const { connectionLookup: p, edgeLookup: m } = y();
      Rg(p, m, w), g({ edges: w });
    },
    setDefaultNodesAndEdges: (w, p) => {
      if (w) {
        const { setNodes: m } = y();
        m(w), g({ hasDefaultNodes: !0 });
      }
      if (p) {
        const { setEdges: m } = y();
        m(p), g({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (w) => {
      const { triggerNodeChanges: p, nodeLookup: m, parentLookup: h, domNode: v, nodeOrigin: S, nodeExtent: k, debug: N, fitViewQueued: z, zIndexMode: I } = y(), { changes: j, updatedInternals: T } = kk(w, m, h, v, S, k, I);
      T && (vk(m, h, { nodeOrigin: S, nodeExtent: k, zIndexMode: I }), z ? (x(), g({ fitViewQueued: !1, fitViewOptions: void 0 })) : g({}), (j == null ? void 0 : j.length) > 0 && (N && console.log("React Flow: trigger node changes", j), p == null || p(j)));
    },
    updateNodePositions: (w, p = !1) => {
      const m = [];
      let h = [];
      const { nodeLookup: v, triggerNodeChanges: S, connection: k, updateConnection: N, onNodesChangeMiddlewareMap: z } = y();
      for (const [I, j] of w) {
        const T = v.get(I), A = !!(T != null && T.expandParent && (T != null && T.parentId) && (j != null && j.position)), H = {
          id: I,
          type: "position",
          position: A ? {
            x: Math.max(0, j.position.x),
            y: Math.max(0, j.position.y)
          } : j.position,
          dragging: p
        };
        if (T && k.inProgress && k.fromNode.id === T.id) {
          const C = jn(T, k.fromHandle, K.Left, !0);
          N({ ...k, from: C });
        }
        A && T.parentId && m.push({
          id: I,
          parentId: T.parentId,
          rect: {
            ...j.internals.positionAbsolute,
            width: j.measured.width ?? 0,
            height: j.measured.height ?? 0
          }
        }), h.push(H);
      }
      if (m.length > 0) {
        const { parentLookup: I, nodeOrigin: j } = y(), T = Qa(m, v, I, j);
        h.push(...T);
      }
      for (const I of z.values())
        h = I(h);
      S(h);
    },
    triggerNodeChanges: (w) => {
      const { onNodesChange: p, setNodes: m, nodes: h, hasDefaultNodes: v, debug: S } = y();
      if (w != null && w.length) {
        if (v) {
          const k = tm(w, h);
          m(k);
        }
        S && console.log("React Flow: trigger node changes", w), p == null || p(w);
      }
    },
    triggerEdgeChanges: (w) => {
      const { onEdgesChange: p, setEdges: m, edges: h, hasDefaultEdges: v, debug: S } = y();
      if (w != null && w.length) {
        if (v) {
          const k = nm(w, h);
          m(k);
        }
        S && console.log("React Flow: trigger edge changes", w), p == null || p(w);
      }
    },
    addSelectedNodes: (w) => {
      const { multiSelectionActive: p, edgeLookup: m, nodeLookup: h, triggerNodeChanges: v, triggerEdgeChanges: S } = y();
      if (p) {
        const k = w.map((N) => wn(N, !0));
        v(k);
        return;
      }
      v(nr(h, /* @__PURE__ */ new Set([...w]), !0)), S(nr(m));
    },
    addSelectedEdges: (w) => {
      const { multiSelectionActive: p, edgeLookup: m, nodeLookup: h, triggerNodeChanges: v, triggerEdgeChanges: S } = y();
      if (p) {
        const k = w.map((N) => wn(N, !0));
        S(k);
        return;
      }
      S(nr(m, /* @__PURE__ */ new Set([...w]))), v(nr(h, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: w, edges: p } = {}) => {
      const { edges: m, nodes: h, nodeLookup: v, triggerNodeChanges: S, triggerEdgeChanges: k } = y(), N = w || h, z = p || m, I = N.map((T) => {
        const A = v.get(T.id);
        return A && (A.selected = !1), wn(T.id, !1);
      }), j = z.map((T) => wn(T.id, !1));
      S(I), k(j);
    },
    setMinZoom: (w) => {
      const { panZoom: p, maxZoom: m } = y();
      p == null || p.setScaleExtent([w, m]), g({ minZoom: w });
    },
    setMaxZoom: (w) => {
      const { panZoom: p, minZoom: m } = y();
      p == null || p.setScaleExtent([m, w]), g({ maxZoom: w });
    },
    setTranslateExtent: (w) => {
      var p;
      (p = y().panZoom) == null || p.setTranslateExtent(w), g({ translateExtent: w });
    },
    resetSelectedElements: () => {
      const { edges: w, nodes: p, triggerNodeChanges: m, triggerEdgeChanges: h, elementsSelectable: v } = y();
      if (!v)
        return;
      const S = p.reduce((N, z) => z.selected ? [...N, wn(z.id, !1)] : N, []), k = w.reduce((N, z) => z.selected ? [...N, wn(z.id, !1)] : N, []);
      m(S), h(k);
    },
    setNodeExtent: (w) => {
      const { nodes: p, nodeLookup: m, parentLookup: h, nodeOrigin: v, elevateNodesOnSelect: S, nodeExtent: k, zIndexMode: N } = y();
      w[0][0] === k[0][0] && w[0][1] === k[0][1] && w[1][0] === k[1][0] && w[1][1] === k[1][1] || (ju(p, m, h, {
        nodeOrigin: v,
        nodeExtent: w,
        elevateNodesOnSelect: S,
        checkEquality: !1,
        zIndexMode: N
      }), g({ nodeExtent: w }));
    },
    panBy: (w) => {
      const { transform: p, width: m, height: h, panZoom: v, translateExtent: S } = y();
      return Ek({ delta: w, panZoom: v, transform: p, translateExtent: S, width: m, height: h });
    },
    setCenter: async (w, p, m) => {
      const { width: h, height: v, maxZoom: S, panZoom: k } = y();
      if (!k)
        return Promise.resolve(!1);
      const N = typeof (m == null ? void 0 : m.zoom) < "u" ? m.zoom : S;
      return await k.setViewport({
        x: h / 2 - w * N,
        y: v / 2 - p * N,
        zoom: N
      }, { duration: m == null ? void 0 : m.duration, ease: m == null ? void 0 : m.ease, interpolate: m == null ? void 0 : m.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      g({
        connection: { ...yg }
      });
    },
    updateConnection: (w) => {
      g({ connection: w });
    },
    reset: () => g({ ...vd() })
  };
}, Object.is);
function Mm({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: l, initialFitViewOptions: u, fitView: a, nodeOrigin: d, nodeExtent: c, zIndexMode: f, children: g }) {
  const [y] = P.useState(() => eC({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: a,
    minZoom: s,
    maxZoom: l,
    fitViewOptions: u,
    nodeOrigin: d,
    nodeExtent: c,
    zIndexMode: f
  }));
  return E.jsx(xE, { value: y, children: E.jsx(VE, { children: g }) });
}
function tC({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: l, fitViewOptions: u, minZoom: a, maxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: g }) {
  return P.useContext(Us) ? E.jsx(E.Fragment, { children: e }) : E.jsx(Mm, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: l, initialFitViewOptions: u, initialMinZoom: a, initialMaxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: g, children: e });
}
const nC = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function rC({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: l, onEdgeClick: u, onInit: a, onMove: d, onMoveStart: c, onMoveEnd: f, onConnect: g, onConnectStart: y, onConnectEnd: x, onClickConnectStart: w, onClickConnectEnd: p, onNodeMouseEnter: m, onNodeMouseMove: h, onNodeMouseLeave: v, onNodeContextMenu: S, onNodeDoubleClick: k, onNodeDragStart: N, onNodeDrag: z, onNodeDragStop: I, onNodesDelete: j, onEdgesDelete: T, onDelete: A, onSelectionChange: H, onSelectionDragStart: C, onSelectionDrag: $, onSelectionDragStop: D, onSelectionContextMenu: R, onSelectionStart: _, onSelectionEnd: M, onBeforeDelete: L, connectionMode: F, connectionLineType: O = Jt.Bezier, connectionLineStyle: U, connectionLineComponent: b, connectionLineContainerStyle: Y, deleteKeyCode: X = "Backspace", selectionKeyCode: Q = "Shift", selectionOnDrag: V = !1, selectionMode: G = To.Full, panActivationKeyCode: ee = "Space", multiSelectionKeyCode: J = Lo() ? "Meta" : "Control", zoomActivationKeyCode: q = Lo() ? "Meta" : "Control", snapToGrid: Z, snapGrid: ie, onlyRenderVisibleElements: ue = !1, selectNodesOnDrag: oe, nodesDraggable: ze, autoPanOnNodeFocus: Wt, nodesConnectable: Pt, nodesFocusable: yn, nodeOrigin: Dr = Jg, edgesFocusable: Tr, edgesReconnectable: Ir, elementsSelectable: Xs = !0, defaultViewport: Xo = IE, minZoom: Hn = 0.5, maxZoom: Lr = 2, translateExtent: Ja = Do, preventScrolling: Bm = !0, nodeExtent: Ks, defaultMarkerColor: Vm = "#b1b1b7", zoomOnScroll: bm = !0, zoomOnPinch: Um = !0, panOnScroll: Wm = !1, panOnScrollSpeed: Ym = 0.5, panOnScrollMode: Xm = Pn.Free, zoomOnDoubleClick: Km = !0, panOnDrag: Qm = !0, onPaneClick: Gm, onPaneMouseEnter: Zm, onPaneMouseMove: qm, onPaneMouseLeave: Jm, onPaneScroll: e0, onPaneContextMenu: t0, paneClickDistance: n0 = 1, nodeClickDistance: r0 = 0, children: o0, onReconnect: i0, onReconnectStart: s0, onReconnectEnd: l0, onEdgeContextMenu: u0, onEdgeDoubleClick: a0, onEdgeMouseEnter: c0, onEdgeMouseMove: f0, onEdgeMouseLeave: d0, reconnectRadius: h0 = 10, onNodesChange: p0, onEdgesChange: g0, noDragClassName: m0 = "nodrag", noWheelClassName: y0 = "nowheel", noPanClassName: ec = "nopan", fitView: tc, fitViewOptions: nc, connectOnClick: v0, attributionPosition: x0, proOptions: w0, defaultEdgeOptions: S0, elevateNodesOnSelect: k0 = !0, elevateEdgesOnSelect: E0 = !1, disableKeyboardA11y: rc = !1, autoPanOnConnect: _0, autoPanOnNodeDrag: C0, autoPanSpeed: N0, connectionRadius: M0, isValidConnection: P0, onError: z0, style: D0, id: oc, nodeDragThreshold: T0, connectionDragThreshold: I0, viewport: L0, onViewportChange: A0, width: $0, height: R0, colorMode: j0 = "light", debug: O0, onScroll: Ko, ariaLabelConfig: F0, zIndexMode: ic = "basic", ...H0 }, B0) {
  const Qs = oc || "1", V0 = RE(j0), b0 = P.useCallback((sc) => {
    sc.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Ko == null || Ko(sc);
  }, [Ko]);
  return E.jsx("div", { "data-testid": "rf__wrapper", ...H0, onScroll: b0, style: { ...D0, ...nC }, ref: B0, className: Se(["react-flow", o, V0]), id: oc, role: "application", children: E.jsxs(tC, { nodes: e, edges: t, width: $0, height: R0, fitView: tc, fitViewOptions: nc, minZoom: Hn, maxZoom: Lr, nodeOrigin: Dr, nodeExtent: Ks, zIndexMode: ic, children: [E.jsx(J_, { onInit: a, onNodeClick: l, onEdgeClick: u, onNodeMouseEnter: m, onNodeMouseMove: h, onNodeMouseLeave: v, onNodeContextMenu: S, onNodeDoubleClick: k, nodeTypes: i, edgeTypes: s, connectionLineType: O, connectionLineStyle: U, connectionLineComponent: b, connectionLineContainerStyle: Y, selectionKeyCode: Q, selectionOnDrag: V, selectionMode: G, deleteKeyCode: X, multiSelectionKeyCode: J, panActivationKeyCode: ee, zoomActivationKeyCode: q, onlyRenderVisibleElements: ue, defaultViewport: Xo, translateExtent: Ja, minZoom: Hn, maxZoom: Lr, preventScrolling: Bm, zoomOnScroll: bm, zoomOnPinch: Um, zoomOnDoubleClick: Km, panOnScroll: Wm, panOnScrollSpeed: Ym, panOnScrollMode: Xm, panOnDrag: Qm, onPaneClick: Gm, onPaneMouseEnter: Zm, onPaneMouseMove: qm, onPaneMouseLeave: Jm, onPaneScroll: e0, onPaneContextMenu: t0, paneClickDistance: n0, nodeClickDistance: r0, onSelectionContextMenu: R, onSelectionStart: _, onSelectionEnd: M, onReconnect: i0, onReconnectStart: s0, onReconnectEnd: l0, onEdgeContextMenu: u0, onEdgeDoubleClick: a0, onEdgeMouseEnter: c0, onEdgeMouseMove: f0, onEdgeMouseLeave: d0, reconnectRadius: h0, defaultMarkerColor: Vm, noDragClassName: m0, noWheelClassName: y0, noPanClassName: ec, rfId: Qs, disableKeyboardA11y: rc, nodeExtent: Ks, viewport: L0, onViewportChange: A0 }), E.jsx($E, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: g, onConnectStart: y, onConnectEnd: x, onClickConnectStart: w, onClickConnectEnd: p, nodesDraggable: ze, autoPanOnNodeFocus: Wt, nodesConnectable: Pt, nodesFocusable: yn, edgesFocusable: Tr, edgesReconnectable: Ir, elementsSelectable: Xs, elevateNodesOnSelect: k0, elevateEdgesOnSelect: E0, minZoom: Hn, maxZoom: Lr, nodeExtent: Ks, onNodesChange: p0, onEdgesChange: g0, snapToGrid: Z, snapGrid: ie, connectionMode: F, translateExtent: Ja, connectOnClick: v0, defaultEdgeOptions: S0, fitView: tc, fitViewOptions: nc, onNodesDelete: j, onEdgesDelete: T, onDelete: A, onNodeDragStart: N, onNodeDrag: z, onNodeDragStop: I, onSelectionDrag: $, onSelectionDragStart: C, onSelectionDragStop: D, onMove: d, onMoveStart: c, onMoveEnd: f, noPanClassName: ec, nodeOrigin: Dr, rfId: Qs, autoPanOnConnect: _0, autoPanOnNodeDrag: C0, autoPanSpeed: N0, onError: z0, connectionRadius: M0, isValidConnection: P0, selectNodesOnDrag: oe, nodeDragThreshold: T0, connectionDragThreshold: I0, onBeforeDelete: L, debug: O0, ariaLabelConfig: F0, zIndexMode: ic }), E.jsx(TE, { onSelectionChange: H }), o0, E.jsx(NE, { proOptions: w0, position: x0 }), E.jsx(CE, { rfId: Qs, disableKeyboardA11y: rc })] }) });
}
var oC = rm(rC);
function iC(e) {
  const [t, n] = P.useState(e), r = P.useCallback((o) => n((i) => tm(o, i)), []);
  return [t, n, r];
}
function sC(e) {
  const [t, n] = P.useState(e), r = P.useCallback((o) => n((i) => nm(o, i)), []);
  return [t, n, r];
}
function lC({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return E.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: Se(["react-flow__background-pattern", n, r]) });
}
function uC({ radius: e, className: t }) {
  return E.jsx("circle", { cx: e, cy: e, r: e, className: Se(["react-flow__background-pattern", "dots", t]) });
}
var jt;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(jt || (jt = {}));
const aC = {
  [jt.Dots]: 1,
  [jt.Lines]: 1,
  [jt.Cross]: 6
}, cC = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function Pm({
  id: e,
  variant: t = jt.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: s,
  bgColor: l,
  style: u,
  className: a,
  patternClassName: d
}) {
  const c = P.useRef(null), { transform: f, patternId: g } = ne(cC, he), y = r || aC[t], x = t === jt.Dots, w = t === jt.Cross, p = Array.isArray(n) ? n : [n, n], m = [p[0] * f[2] || 1, p[1] * f[2] || 1], h = y * f[2], v = Array.isArray(i) ? i : [i, i], S = w ? [h, h] : m, k = [
    v[0] * f[2] || 1 + S[0] / 2,
    v[1] * f[2] || 1 + S[1] / 2
  ], N = `${g}${e || ""}`;
  return E.jsxs("svg", { className: Se(["react-flow__background", a]), style: {
    ...u,
    ...Ws,
    "--xy-background-color-props": l,
    "--xy-background-pattern-color-props": s
  }, ref: c, "data-testid": "rf__background", children: [E.jsx("pattern", { id: N, x: f[0] % m[0], y: f[1] % m[1], width: m[0], height: m[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${k[0]},-${k[1]})`, children: x ? E.jsx(uC, { radius: h / 2, className: d }) : E.jsx(lC, { dimensions: S, lineWidth: o, variant: t, className: d }) }), E.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${N})` })] });
}
Pm.displayName = "Background";
const fC = P.memo(Pm);
function dC() {
  return E.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: E.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function hC() {
  return E.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: E.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function pC() {
  return E.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: E.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function gC() {
  return E.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: E.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function mC() {
  return E.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: E.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function wi({ children: e, className: t, ...n }) {
  return E.jsx("button", { type: "button", className: Se(["react-flow__controls-button", t]), ...n, children: e });
}
const yC = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function zm({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: l, onInteractiveChange: u, className: a, children: d, position: c = "bottom-left", orientation: f = "vertical", "aria-label": g }) {
  const y = pe(), { isInteractive: x, minZoomReached: w, maxZoomReached: p, ariaLabelConfig: m } = ne(yC, he), { zoomIn: h, zoomOut: v, fitView: S } = ot(), k = () => {
    h(), i == null || i();
  }, N = () => {
    v(), s == null || s();
  }, z = () => {
    S(o), l == null || l();
  }, I = () => {
    y.setState({
      nodesDraggable: !x,
      nodesConnectable: !x,
      elementsSelectable: !x
    }), u == null || u(!x);
  }, j = f === "horizontal" ? "horizontal" : "vertical";
  return E.jsxs(Yo, { className: Se(["react-flow__controls", j, a]), position: c, style: e, "data-testid": "rf__controls", "aria-label": g ?? m["controls.ariaLabel"], children: [t && E.jsxs(E.Fragment, { children: [E.jsx(wi, { onClick: k, className: "react-flow__controls-zoomin", title: m["controls.zoomIn.ariaLabel"], "aria-label": m["controls.zoomIn.ariaLabel"], disabled: p, children: E.jsx(dC, {}) }), E.jsx(wi, { onClick: N, className: "react-flow__controls-zoomout", title: m["controls.zoomOut.ariaLabel"], "aria-label": m["controls.zoomOut.ariaLabel"], disabled: w, children: E.jsx(hC, {}) })] }), n && E.jsx(wi, { className: "react-flow__controls-fitview", onClick: z, title: m["controls.fitView.ariaLabel"], "aria-label": m["controls.fitView.ariaLabel"], children: E.jsx(pC, {}) }), r && E.jsx(wi, { className: "react-flow__controls-interactive", onClick: I, title: m["controls.interactive.ariaLabel"], "aria-label": m["controls.interactive.ariaLabel"], children: x ? E.jsx(mC, {}) : E.jsx(gC, {}) }), d] });
}
zm.displayName = "Controls";
const vC = P.memo(zm);
function xC({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: l, strokeWidth: u, className: a, borderRadius: d, shapeRendering: c, selected: f, onClick: g }) {
  const { background: y, backgroundColor: x } = i || {}, w = s || y || x;
  return E.jsx("rect", { className: Se(["react-flow__minimap-node", { selected: f }, a]), x: t, y: n, rx: d, ry: d, width: r, height: o, style: {
    fill: w,
    stroke: l,
    strokeWidth: u
  }, shapeRendering: c, onClick: g ? (p) => g(p, e) : void 0 });
}
const wC = P.memo(xC), SC = (e) => e.nodes.map((t) => t.id), Tl = (e) => e instanceof Function ? e : () => e;
function kC({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = wC,
  onClick: s
}) {
  const l = ne(SC, he), u = Tl(t), a = Tl(e), d = Tl(n), c = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return E.jsx(E.Fragment, { children: l.map((f) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    E.jsx(_C, { id: f, nodeColorFunc: u, nodeStrokeColorFunc: a, nodeClassNameFunc: d, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: c }, f)
  )) });
}
function EC({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: l, onClick: u }) {
  const { node: a, x: d, y: c, width: f, height: g } = ne((y) => {
    const { internals: x } = y.nodeLookup.get(e), w = x.userNode, { x: p, y: m } = x.positionAbsolute, { width: h, height: v } = Ut(w);
    return {
      node: w,
      x: p,
      y: m,
      width: h,
      height: v
    };
  }, he);
  return !a || a.hidden || !_g(a) ? null : E.jsx(l, { x: d, y: c, width: f, height: g, style: a.style, selected: !!a.selected, className: r(a), color: t(a), borderRadius: o, strokeColor: n(a), strokeWidth: i, shapeRendering: s, onClick: u, id: a.id });
}
const _C = P.memo(EC);
var CC = P.memo(kC);
const NC = 200, MC = 150, PC = (e) => !e.hidden, zC = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? Eg(bo(e.nodeLookup, { filter: PC }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, DC = "react-flow__minimap-desc";
function Dm({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: o = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: l,
  bgColor: u,
  maskColor: a,
  maskStrokeColor: d,
  maskStrokeWidth: c,
  position: f = "bottom-right",
  onClick: g,
  onNodeClick: y,
  pannable: x = !1,
  zoomable: w = !1,
  ariaLabel: p,
  inversePan: m,
  zoomStep: h = 1,
  offsetScale: v = 5
}) {
  const S = pe(), k = P.useRef(null), { boundingRect: N, viewBB: z, rfId: I, panZoom: j, translateExtent: T, flowWidth: A, flowHeight: H, ariaLabelConfig: C } = ne(zC, he), $ = (e == null ? void 0 : e.width) ?? NC, D = (e == null ? void 0 : e.height) ?? MC, R = N.width / $, _ = N.height / D, M = Math.max(R, _), L = M * $, F = M * D, O = v * M, U = N.x - (L - N.width) / 2 - O, b = N.y - (F - N.height) / 2 - O, Y = L + O * 2, X = F + O * 2, Q = `${DC}-${I}`, V = P.useRef(0), G = P.useRef();
  V.current = M, P.useEffect(() => {
    if (k.current && j)
      return G.current = Ik({
        domNode: k.current,
        panZoom: j,
        getTransform: () => S.getState().transform,
        getViewScale: () => V.current
      }), () => {
        var Z;
        (Z = G.current) == null || Z.destroy();
      };
  }, [j]), P.useEffect(() => {
    var Z;
    (Z = G.current) == null || Z.update({
      translateExtent: T,
      width: A,
      height: H,
      inversePan: m,
      pannable: x,
      zoomStep: h,
      zoomable: w
    });
  }, [x, w, m, h, T, A, H]);
  const ee = g ? (Z) => {
    var oe;
    const [ie, ue] = ((oe = G.current) == null ? void 0 : oe.pointer(Z)) || [0, 0];
    g(Z, { x: ie, y: ue });
  } : void 0, J = y ? P.useCallback((Z, ie) => {
    const ue = S.getState().nodeLookup.get(ie).internals.userNode;
    y(Z, ue);
  }, []) : void 0, q = p ?? C["minimap.ariaLabel"];
  return E.jsx(Yo, { position: f, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-background-color-props": typeof a == "string" ? a : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof c == "number" ? c * M : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: Se(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: E.jsxs("svg", { width: $, height: D, viewBox: `${U} ${b} ${Y} ${X}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": Q, ref: k, onClick: ee, children: [q && E.jsx("title", { id: Q, children: q }), E.jsx(CC, { onClick: J, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: l }), E.jsx("path", { className: "react-flow__minimap-mask", d: `M${U - O},${b - O}h${Y + O * 2}v${X + O * 2}h${-Y - O * 2}z
        M${z.x},${z.y}h${z.width}v${z.height}h${-z.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
Dm.displayName = "MiniMap";
const TC = P.memo(Dm), IC = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, LC = {
  [_r.Line]: "right",
  [_r.Handle]: "bottom-right"
};
function AC({ nodeId: e, position: t, variant: n = _r.Handle, className: r, style: o = void 0, children: i, color: s, minWidth: l = 10, minHeight: u = 10, maxWidth: a = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: c = !1, resizeDirection: f, autoScale: g = !0, shouldResize: y, onResizeStart: x, onResize: w, onResizeEnd: p }) {
  const m = lm(), h = typeof e == "string" ? e : m, v = pe(), S = P.useRef(null), k = n === _r.Handle, N = ne(P.useCallback(IC(k && g), [k, g]), he), z = P.useRef(null), I = t ?? LC[n];
  P.useEffect(() => {
    if (!(!S.current || !h))
      return z.current || (z.current = Yk({
        domNode: S.current,
        nodeId: h,
        getStoreItems: () => {
          const { nodeLookup: T, transform: A, snapGrid: H, snapToGrid: C, nodeOrigin: $, domNode: D } = v.getState();
          return {
            nodeLookup: T,
            transform: A,
            snapGrid: H,
            snapToGrid: C,
            nodeOrigin: $,
            paneDomNode: D
          };
        },
        onChange: (T, A) => {
          const { triggerNodeChanges: H, nodeLookup: C, parentLookup: $, nodeOrigin: D } = v.getState(), R = [], _ = { x: T.x, y: T.y }, M = C.get(h);
          if (M && M.expandParent && M.parentId) {
            const L = M.origin ?? D, F = T.width ?? M.measured.width ?? 0, O = T.height ?? M.measured.height ?? 0, U = {
              id: M.id,
              parentId: M.parentId,
              rect: {
                width: F,
                height: O,
                ...Cg({
                  x: T.x ?? M.position.x,
                  y: T.y ?? M.position.y
                }, { width: F, height: O }, M.parentId, C, L)
              }
            }, b = Qa([U], C, $, D);
            R.push(...b), _.x = T.x ? Math.max(L[0] * F, T.x) : void 0, _.y = T.y ? Math.max(L[1] * O, T.y) : void 0;
          }
          if (_.x !== void 0 && _.y !== void 0) {
            const L = {
              id: h,
              type: "position",
              position: { ..._ }
            };
            R.push(L);
          }
          if (T.width !== void 0 && T.height !== void 0) {
            const F = {
              id: h,
              type: "dimensions",
              resizing: !0,
              setAttributes: f ? f === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: T.width,
                height: T.height
              }
            };
            R.push(F);
          }
          for (const L of A) {
            const F = {
              ...L,
              type: "position"
            };
            R.push(F);
          }
          H(R);
        },
        onEnd: ({ width: T, height: A }) => {
          const H = {
            id: h,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: T,
              height: A
            }
          };
          v.getState().triggerNodeChanges([H]);
        }
      })), z.current.update({
        controlPosition: I,
        boundaries: {
          minWidth: l,
          minHeight: u,
          maxWidth: a,
          maxHeight: d
        },
        keepAspectRatio: c,
        resizeDirection: f,
        onResizeStart: x,
        onResize: w,
        onResizeEnd: p,
        shouldResize: y
      }), () => {
        var T;
        (T = z.current) == null || T.destroy();
      };
  }, [
    I,
    l,
    u,
    a,
    d,
    c,
    x,
    w,
    p,
    y
  ]);
  const j = I.split("-");
  return E.jsx("div", { className: Se(["react-flow__resize-control", "nodrag", ...j, n, r]), ref: S, style: {
    ...o,
    scale: N,
    ...s && { [k ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
P.memo(AC);
const ce = {
  fact: { light: "#3B5998", dark: "#7B9BD2" },
  idea: { light: "#D4A017", dark: "#E8C65A" },
  question: { light: "#7B3FA0", dark: "#B07DD6" },
  constraint: { light: "#C0392B", dark: "#E07B6F" },
  thesis: { light: "#1B5420", dark: "#4A9E54" },
  action: { light: "#0E7490", dark: "#38B2CC" },
  data_collection: { light: "#4338CA", dark: "#7C74E0" },
  untyped: { light: "#9CA3AF", dark: "#6B7280" }
}, $C = {
  // Document/citation icon for facts
  fact: "M4 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1zm1 3h6m-6 3h6m-6 3h4",
  // Lightbulb for ideas
  idea: "M8 1a5 5 0 013 9v1.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 015 11.5V10a5 5 0 013-9zm-1.5 13h3",
  // Question mark
  question: "M6 5a2 2 0 114 0c0 1.5-2 2-2 3.5m0 2.5h.01",
  // Shield for constraints
  constraint: "M8 1l6 3v4c0 3.5-2.5 6.5-6 8-3.5-1.5-6-4.5-6-8V4l6-3z",
  // Compass/target for thesis
  thesis: "M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 100 4 2 2 0 000-4z",
  // Gear for actions
  action: "M8 3.5a.5.5 0 01.5.5v1.05a3.5 3.5 0 011.45.6l.74-.74a.5.5 0 01.71.71l-.74.74c.3.43.51.92.6 1.45H12.3a.5.5 0 010 1h-1.05a3.5 3.5 0 01-.6 1.45l.74.74a.5.5 0 01-.71.71l-.74-.74a3.5 3.5 0 01-1.45.6V12.3a.5.5 0 01-1 0v-1.05a3.5 3.5 0 01-1.45-.6l-.74.74a.5.5 0 01-.71-.71l.74-.74a3.5 3.5 0 01-.6-1.45H3.7a.5.5 0 010-1h1.05a3.5 3.5 0 01.6-1.45l-.74-.74a.5.5 0 01.71-.71l.74.74A3.5 3.5 0 017.5 5.05V4a.5.5 0 01.5-.5zM8 6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
  // Stack/layers for data collection
  data_collection: "M2 5l6-3 6 3-6 3-6-3zm0 3l6 3 6-3m-12 3l6 3 6-3",
  // Dash for untyped
  untyped: "M4 8h8"
}, it = {
  fact: {
    component: null,
    label: "Fact",
    headerColor: ce.fact.light,
    headerColorDark: ce.fact.dark,
    icon: "fact",
    defaultData: { label: "", content: "", source: "" }
  },
  idea: {
    component: null,
    label: "Idea",
    headerColor: ce.idea.light,
    headerColorDark: ce.idea.dark,
    icon: "idea",
    defaultData: { label: "", content: "" }
  },
  question: {
    component: null,
    label: "Question",
    headerColor: ce.question.light,
    headerColorDark: ce.question.dark,
    icon: "question",
    defaultData: { label: "", content: "" }
  },
  constraint: {
    component: null,
    label: "Constraint",
    headerColor: ce.constraint.light,
    headerColorDark: ce.constraint.dark,
    icon: "constraint",
    defaultData: { label: "", content: "" }
  },
  thesis: {
    component: null,
    label: "Thesis",
    headerColor: ce.thesis.light,
    headerColorDark: ce.thesis.dark,
    icon: "thesis",
    defaultData: { label: "", content: "" }
  },
  action: {
    component: null,
    label: "Action",
    headerColor: ce.action.light,
    headerColorDark: ce.action.dark,
    icon: "action",
    defaultData: { label: "", content: "", state: "empty" }
  },
  data_collection: {
    component: null,
    label: "Data Collection",
    headerColor: ce.data_collection.light,
    headerColorDark: ce.data_collection.dark,
    icon: "data_collection",
    defaultData: { label: "", content: "" }
  },
  untyped: {
    component: null,
    label: "Untyped",
    headerColor: ce.untyped.light,
    headerColorDark: ce.untyped.dark,
    icon: "untyped",
    defaultData: { label: "", content: "" }
  }
}, Tm = Object.keys(it), RC = [
  "idea",
  "question",
  "fact",
  "constraint",
  "thesis",
  "action",
  "data_collection",
  "untyped"
];
function Za({ type: e, size: t = 16, color: n }) {
  var i;
  const r = $C[e];
  if (!r) return null;
  const o = n ?? ((i = ce[e]) == null ? void 0 : i.light) ?? "#9CA3AF";
  return /* @__PURE__ */ E.jsx(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: o,
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { flexShrink: 0 },
      children: /* @__PURE__ */ E.jsx("path", { d: r })
    }
  );
}
function mn({
  type: e,
  label: t,
  icon: n,
  headerColor: r,
  selected: o,
  committed: i,
  children: s,
  onLabelChange: l
}) {
  const [u, a] = P.useState(!1), [d, c] = P.useState(t), f = P.useRef(null);
  P.useEffect(() => {
    u || c(t);
  }, [t, u]), P.useEffect(() => {
    u && f.current && (f.current.focus(), f.current.select());
  }, [u]);
  const g = P.useCallback(() => {
    a(!1);
    const p = d.trim();
    p && p !== t && l ? l(p) : c(t);
  }, [d, t, l]), y = P.useCallback(
    (p) => {
      p.key === "Enter" ? g() : p.key === "Escape" && (c(t), a(!1));
    },
    [g, t]
  ), x = i === !1 ? "dashed" : "solid", w = i === !1 ? 0.7 : 1;
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: `canvas-node canvas-node--${e}${o ? " canvas-node--selected" : ""}`,
      style: { opacity: w, borderStyle: x },
      onDoubleClick: (p) => p.stopPropagation(),
      children: [
        /* @__PURE__ */ E.jsx(Nr, { type: "target", position: K.Top }),
        /* @__PURE__ */ E.jsxs("div", { className: "canvas-node-header", style: { backgroundColor: r }, children: [
          /* @__PURE__ */ E.jsx(Za, { type: n, size: 16, color: "currentColor" }),
          u ? /* @__PURE__ */ E.jsx(
            "input",
            {
              ref: f,
              className: "canvas-node-label-input",
              value: d,
              onChange: (p) => c(p.target.value),
              onBlur: g,
              onKeyDown: y
            }
          ) : /* @__PURE__ */ E.jsx(
            "span",
            {
              className: "canvas-node-label",
              onDoubleClick: () => l && a(!0),
              title: t || "Double-click to edit",
              children: t || "Untitled"
            }
          )
        ] }),
        /* @__PURE__ */ E.jsx("div", { className: "canvas-node-content", children: s }),
        /* @__PURE__ */ E.jsx(Nr, { type: "source", position: K.Bottom })
      ]
    }
  );
}
function Im({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = ot(), [o, i] = P.useState(!1), [s, l] = P.useState(""), u = t.content || "", a = t.source || "", d = t.label || "", c = P.useCallback(() => {
    l(u), i(!0);
  }, [u]), f = P.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { content: s.trim() });
  }, [e, s, u, r]), g = P.useCallback(
    (y) => {
      y.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ E.jsxs(
    mn,
    {
      type: "fact",
      label: d,
      icon: "fact",
      headerColor: ce.fact.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (y) => r(e, { label: y }),
      children: [
        o ? /* @__PURE__ */ E.jsx(
          "textarea",
          {
            className: "canvas-node-edit-input",
            value: s,
            onChange: (y) => l(y.target.value),
            onBlur: f,
            onKeyDown: g,
            autoFocus: !0,
            rows: 3
          }
        ) : /* @__PURE__ */ E.jsx("div", { onDoubleClick: c, className: "canvas-node-text", children: u || /* @__PURE__ */ E.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add content" }) }),
        a && /* @__PURE__ */ E.jsxs("div", { className: "canvas-node-source", children: [
          "Source: ",
          a
        ] })
      ]
    }
  );
}
function Lm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = ot(), [o, i] = P.useState(!1), [s, l] = P.useState(""), u = t.content || "", a = t.label || "", d = P.useCallback(() => {
    l(u), i(!0);
  }, [u]), c = P.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { content: s.trim() });
  }, [e, s, u, r]), f = P.useCallback(
    (g) => {
      g.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ E.jsx(
    mn,
    {
      type: "idea",
      label: a,
      icon: "idea",
      headerColor: ce.idea.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (g) => r(e, { label: g }),
      children: o ? /* @__PURE__ */ E.jsx(
        "textarea",
        {
          className: "canvas-node-edit-input",
          value: s,
          onChange: (g) => l(g.target.value),
          onBlur: c,
          onKeyDown: f,
          autoFocus: !0,
          rows: 3
        }
      ) : /* @__PURE__ */ E.jsx("div", { onDoubleClick: d, className: "canvas-node-text", children: u || /* @__PURE__ */ E.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add content" }) })
    }
  );
}
function Am({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = ot(), [o, i] = P.useState(!1), [s, l] = P.useState(""), u = t.content || "", a = t.label || "", d = P.useCallback(() => {
    l(u), i(!0);
  }, [u]), c = P.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { content: s.trim() });
  }, [e, s, u, r]), f = P.useCallback(
    (g) => {
      g.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ E.jsx(
    mn,
    {
      type: "question",
      label: a,
      icon: "question",
      headerColor: ce.question.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (g) => r(e, { label: g }),
      children: o ? /* @__PURE__ */ E.jsx(
        "textarea",
        {
          className: "canvas-node-edit-input",
          value: s,
          onChange: (g) => l(g.target.value),
          onBlur: c,
          onKeyDown: f,
          autoFocus: !0,
          rows: 3
        }
      ) : /* @__PURE__ */ E.jsx("div", { onDoubleClick: d, className: "canvas-node-text", children: u || /* @__PURE__ */ E.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add a question" }) })
    }
  );
}
function $m({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = ot(), [o, i] = P.useState(!1), [s, l] = P.useState(""), u = t.content || "", a = t.label || "", d = t.parameter || "", c = t.min, f = t.max, g = t.unit || "", y = d || c !== void 0 || f !== void 0, x = P.useCallback(() => {
    l(u), i(!0);
  }, [u]), w = P.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { content: s.trim() });
  }, [e, s, u, r]), p = P.useCallback(
    (m) => {
      m.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ E.jsxs(
    mn,
    {
      type: "constraint",
      label: a,
      icon: "constraint",
      headerColor: ce.constraint.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (m) => r(e, { label: m }),
      children: [
        o ? /* @__PURE__ */ E.jsx(
          "textarea",
          {
            className: "canvas-node-edit-input",
            value: s,
            onChange: (m) => l(m.target.value),
            onBlur: w,
            onKeyDown: p,
            autoFocus: !0,
            rows: 3
          }
        ) : /* @__PURE__ */ E.jsx("div", { onDoubleClick: x, className: "canvas-node-text", children: u || !y && /* @__PURE__ */ E.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add content" }) }),
        y && /* @__PURE__ */ E.jsxs("div", { className: "canvas-node-structured", children: [
          d && /* @__PURE__ */ E.jsx("span", { className: "canvas-node-param", children: d }),
          (c !== void 0 || f !== void 0) && /* @__PURE__ */ E.jsxs("span", { className: "canvas-node-range", children: [
            c !== void 0 ? c : "…",
            " – ",
            f !== void 0 ? f : "…",
            g && ` ${g}`
          ] })
        ] })
      ]
    }
  );
}
function Rm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = ot(), [o, i] = P.useState(!1), [s, l] = P.useState(""), u = t.content || "", a = t.label || "", d = P.useCallback(() => {
    l(u), i(!0);
  }, [u]), c = P.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { content: s.trim() });
  }, [e, s, u, r]), f = P.useCallback(
    (g) => {
      g.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ E.jsx(
    mn,
    {
      type: "thesis",
      label: a,
      icon: "thesis",
      headerColor: ce.thesis.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (g) => r(e, { label: g }),
      children: o ? /* @__PURE__ */ E.jsx(
        "textarea",
        {
          className: "canvas-node-edit-input",
          value: s,
          onChange: (g) => l(g.target.value),
          onBlur: c,
          onKeyDown: f,
          autoFocus: !0,
          rows: 4
        }
      ) : /* @__PURE__ */ E.jsx("div", { onDoubleClick: d, className: "canvas-node-text", children: u || /* @__PURE__ */ E.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to state your thesis" }) })
    }
  );
}
const xd = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (a, d) => {
    const c = typeof a == "function" ? a(t) : a;
    if (!Object.is(c, t)) {
      const f = t;
      t = d ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((g) => g(t, f));
    }
  }, o = () => t, l = { setState: r, getState: o, getInitialState: () => u, subscribe: (a) => (n.add(a), () => n.delete(a)) }, u = t = e(r, o, l);
  return l;
}, jC = (e) => e ? xd(e) : xd, OC = (e) => e;
function FC(e, t = OC) {
  const n = Ur.useSyncExternalStore(
    e.subscribe,
    Ur.useCallback(() => t(e.getState()), [e, t]),
    Ur.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Ur.useDebugValue(n), n;
}
const wd = (e) => {
  const t = jC(e), n = (r) => FC(t, r);
  return Object.assign(n, t), n;
}, HC = (e) => e ? wd(e) : wd, qa = HC((e) => ({
  workspaceId: null,
  workspaceName: "Untitled Workspace",
  saveStatus: "saved",
  lastSavedAt: null,
  lastError: null,
  setWorkspaceId: (t) => e({ workspaceId: t }),
  setWorkspaceName: (t) => e({ workspaceName: t }),
  setSaveStatus: (t) => e({ saveStatus: t }),
  markSaved: () => e({ saveStatus: "saved", lastSavedAt: /* @__PURE__ */ new Date(), lastError: null }),
  markError: (t) => e({ saveStatus: "error", lastError: t }),
  markUnsaved: () => e(
    (t) => t.saveStatus === "saving" ? t : { saveStatus: "unsaved" }
  )
})), BC = "/canvas/api";
async function jm(e, t, n) {
  const r = `${BC}${t}`, o = {
    method: e,
    headers: { "Content-Type": "application/json" }
  };
  n !== void 0 && (o.body = JSON.stringify(n));
  try {
    const i = await fetch(r, o);
    if (i.status === 204)
      return { ok: !0, data: null };
    const s = await i.json();
    return i.ok ? { ok: !0, data: s } : {
      ok: !1,
      error: s.error || `HTTP ${i.status}`,
      error_code: s.error_code,
      status: i.status
    };
  } catch (i) {
    return {
      ok: !1,
      error: i instanceof Error ? i.message : "Network error",
      status: 0
    };
  }
}
function VC(e, t) {
  return jm("PUT", `/workspaces/${e}`, t);
}
function bC(e, t) {
  return jm(
    "POST",
    `/workspaces/${e}/nodes/${t}/execute`
  );
}
const Sd = {
  empty: { label: "Not configured", className: "canvas-badge--neutral" },
  loaded: { label: "Ready", className: "canvas-badge--ready" },
  running: { label: "Running", className: "canvas-badge--running" },
  complete: { label: "Complete", className: "canvas-badge--success" },
  failed: { label: "Failed", className: "canvas-badge--error" }
};
function Om({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = ot(), { workspaceId: o } = qa(), [i, s] = P.useState(!1), [l, u] = P.useState(""), [a, d] = P.useState(!1), c = t.content || "", f = t.label || "", g = t.state || "empty", y = Sd[g] || Sd.empty, x = P.useCallback(() => {
    u(c), s(!0);
  }, [c]), w = P.useCallback(() => {
    s(!1), l.trim() !== c && r(e, { content: l.trim() });
  }, [e, l, c, r]), p = P.useCallback(
    (h) => {
      h.key === "Escape" && s(!1);
    },
    []
  ), m = P.useCallback(async () => {
    if (!o || a) return;
    d(!0);
    const h = await bC(o, e);
    h.ok && r(e, { state: "running", job_id: h.data.job_id }), d(!1);
  }, [o, e, a, r]);
  return /* @__PURE__ */ E.jsxs(
    mn,
    {
      type: "action",
      label: f,
      icon: "action",
      headerColor: ce.action.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (h) => r(e, { label: h }),
      children: [
        i ? /* @__PURE__ */ E.jsx(
          "textarea",
          {
            className: "canvas-node-edit-input",
            value: l,
            onChange: (h) => u(h.target.value),
            onBlur: w,
            onKeyDown: p,
            autoFocus: !0,
            rows: 3
          }
        ) : /* @__PURE__ */ E.jsx("div", { onDoubleClick: x, className: "canvas-node-text", children: c || /* @__PURE__ */ E.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to describe action" }) }),
        /* @__PURE__ */ E.jsxs("div", { className: "canvas-node-action-footer", children: [
          /* @__PURE__ */ E.jsx("span", { className: `canvas-badge ${y.className}`, children: y.label }),
          g === "loaded" && /* @__PURE__ */ E.jsx(
            "button",
            {
              className: "canvas-run-btn",
              onClick: m,
              disabled: a || !o,
              title: a ? "Submitting…" : "Run action",
              children: a ? /* @__PURE__ */ E.jsxs("svg", { viewBox: "0 0 16 16", width: "10", height: "10", fill: "currentColor", children: [
                /* @__PURE__ */ E.jsx("circle", { cx: "8", cy: "8", r: "6", stroke: "currentColor", strokeWidth: "2", fill: "none", opacity: "0.3" }),
                /* @__PURE__ */ E.jsx("path", { d: "M8 2 A6 6 0 0 1 14 8", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
              ] }) : /* @__PURE__ */ E.jsx("svg", { viewBox: "0 0 16 16", width: "10", height: "10", fill: "currentColor", children: /* @__PURE__ */ E.jsx("path", { d: "M4 2.5 L13 8 L4 13.5 Z" }) })
            }
          )
        ] })
      ]
    }
  );
}
function Fm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = ot(), [o, i] = P.useState(!1), [s, l] = P.useState(""), u = t.content || "", a = t.label || "", d = t.count, c = P.useCallback(() => {
    l(u), i(!0);
  }, [u]), f = P.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { content: s.trim() });
  }, [e, s, u, r]), g = P.useCallback(
    (y) => {
      y.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ E.jsxs(
    mn,
    {
      type: "data_collection",
      label: a,
      icon: "data_collection",
      headerColor: ce.data_collection.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (y) => r(e, { label: y }),
      children: [
        o ? /* @__PURE__ */ E.jsx(
          "textarea",
          {
            className: "canvas-node-edit-input",
            value: s,
            onChange: (y) => l(y.target.value),
            onBlur: f,
            onKeyDown: g,
            autoFocus: !0,
            rows: 3
          }
        ) : /* @__PURE__ */ E.jsx("div", { onDoubleClick: c, className: "canvas-node-text", children: u || /* @__PURE__ */ E.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to describe collection" }) }),
        d !== void 0 && /* @__PURE__ */ E.jsxs("div", { className: "canvas-node-count", children: [
          d,
          " items"
        ] })
      ]
    }
  );
}
function Hm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = ot(), [o, i] = P.useState(!1), [s, l] = P.useState(""), u = t.content || "", a = t.label || "", d = P.useCallback(() => {
    l(u), i(!0);
  }, [u]), c = P.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { content: s.trim() });
  }, [e, s, u, r]), f = P.useCallback(
    (g) => {
      g.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ E.jsx(
    mn,
    {
      type: "untyped",
      label: a,
      icon: "untyped",
      headerColor: ce.untyped.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (g) => r(e, { label: g }),
      children: o ? /* @__PURE__ */ E.jsx(
        "textarea",
        {
          className: "canvas-node-edit-input",
          value: s,
          onChange: (g) => l(g.target.value),
          onBlur: c,
          onKeyDown: f,
          autoFocus: !0,
          rows: 3
        }
      ) : /* @__PURE__ */ E.jsx("div", { onDoubleClick: d, className: "canvas-node-text", children: u || /* @__PURE__ */ E.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add content" }) })
    }
  );
}
it.fact.component = Im;
it.idea.component = Lm;
it.question.component = Am;
it.constraint.component = $m;
it.thesis.component = Rm;
it.action.component = Om;
it.data_collection.component = Fm;
it.untyped.component = Hm;
const UC = {
  fact: Im,
  idea: Lm,
  question: Am,
  constraint: $m,
  thesis: Rm,
  action: Om,
  data_collection: Fm,
  untyped: Hm
}, WC = {
  // Add custom edge types here as needed
}, YC = new Set(Tm);
function XC(e) {
  return e && YC.has(e) ? e : "untyped";
}
function KC(e) {
  const { content: t, ...n } = e, r = { ...n };
  return t !== void 0 && t !== "" && (r.text = t), r;
}
function QC(e) {
  const { text: t, ...n } = e, r = { ...n };
  return t !== void 0 && (r.content = t), r;
}
function GC(e, t, n) {
  return {
    name: e,
    nodes: t.map((r) => ({
      id: r.id,
      node_type: r.type || "untyped",
      content: KC(r.data),
      position: r.position
    })),
    edges: n.map((r) => ({
      id: r.id,
      source_id: r.source,
      target_id: r.target,
      edge_type: r.type || "similar_to"
    }))
  };
}
function ZC(e) {
  return {
    nodes: (e.nodes || []).map((t) => ({
      id: t.id,
      type: XC(t.node_type),
      position: t.position ?? {
        x: Math.random() * 500,
        y: Math.random() * 500
      },
      data: QC(t.content ?? {})
    })),
    edges: (e.edges || []).map((t) => ({
      id: t.id,
      source: t.source_id,
      target: t.target_id,
      type: "default"
    }))
  };
}
function qC(e, t, n, r = 5e3) {
  const o = P.useRef(null), i = P.useRef(!0), { setSaveStatus: s, markSaved: l, markError: u, markUnsaved: a, workspaceName: d } = qa(), c = P.useCallback(
    async (g, y) => {
      if (!e) return;
      s("saving");
      const x = GC(d, g, y), w = await VC(e, x);
      w.ok ? l() : u(w.error);
    },
    [e, d, s, l, u]
  );
  return P.useEffect(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    if (e)
      return a(), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
        c(t, n);
      }, r), () => {
        o.current && clearTimeout(o.current);
      };
  }, [t, n, e, r, c, a]), { saveNow: P.useCallback(() => {
    o.current && (clearTimeout(o.current), o.current = null), c(t, n);
  }, [t, n, c]) };
}
let kd = 0;
function Ed() {
  return kd += 1, `node-${Date.now()}-${kd}`;
}
function JC(e, t, n) {
  const r = ot(), o = P.useRef(null), [i, s] = P.useState(null), [l, u] = P.useState(null), a = P.useCallback(
    (p, m) => {
      const h = it[p], v = {
        id: Ed(),
        type: p,
        position: m,
        data: { ...h == null ? void 0 : h.defaultData }
      };
      t((S) => [...S, v]);
    },
    [t]
  ), d = P.useCallback(
    (p, m) => {
      t(
        (h) => h.map((v) => v.id === p ? { ...v, type: m } : v)
      );
    },
    [t]
  ), c = P.useCallback(
    (p) => {
      const m = e.find((v) => v.id === p);
      if (!m) return;
      const h = {
        id: Ed(),
        type: m.type,
        position: { x: m.position.x + 40, y: m.position.y + 40 },
        data: { ...m.data }
      };
      t((v) => [...v, h]);
    },
    [e, t]
  ), f = P.useCallback(
    (p) => {
      t((m) => m.filter((h) => h.id !== p)), n((m) => m.filter((h) => h.source !== p && h.target !== p));
    },
    [t, n]
  ), g = P.useCallback(
    (p) => {
      const m = r.screenToFlowPosition({
        x: p.clientX,
        y: p.clientY
      });
      s({ x: p.clientX, y: p.clientY, flowPos: m }), u(null);
    },
    [r]
  ), y = P.useCallback(
    (p) => {
      i && a(p, i.flowPos);
    },
    [i, a]
  ), x = P.useCallback(
    (p, m) => {
      p.preventDefault(), u({
        nodeId: m.id,
        nodeType: m.type || "untyped",
        x: p.clientX,
        y: p.clientY
      }), s(null);
    },
    []
  ), w = P.useCallback(() => {
    s(null), u(null);
  }, []);
  return P.useEffect(() => {
    const p = (m) => {
      var v;
      const h = (v = m.target) == null ? void 0 : v.tagName;
      if (!(h === "INPUT" || h === "TEXTAREA" || h === "SELECT") && (m.key === "n" || m.key === "N")) {
        const S = o.current;
        if (!S) return;
        const k = S.getBoundingClientRect(), N = { x: k.width / 2, y: k.height / 2 }, z = r.screenToFlowPosition(N);
        a("untyped", z);
      }
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [r, a]), {
    containerRef: o,
    // Creation menu
    creationMenu: i,
    handlePaneDoubleClick: g,
    handleCreationSelect: y,
    closeCreationMenu: () => s(null),
    // Context menu
    contextMenu: l,
    handleNodeContextMenu: x,
    changeNodeType: d,
    duplicateNode: c,
    deleteNode: f,
    closeContextMenu: () => u(null),
    // Close all
    closeMenus: w
  };
}
function e2({ position: e, onSelect: t, onClose: n }) {
  const r = P.useRef(null);
  P.useEffect(() => {
    const i = (l) => {
      r.current && !r.current.contains(l.target) && n();
    }, s = (l) => {
      l.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", i), document.addEventListener("keydown", s), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("keydown", s);
    };
  }, [n]);
  const o = P.useCallback(
    (i) => {
      t(i), n();
    },
    [t, n]
  );
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: r,
      className: "canvas-creation-menu",
      style: {
        position: "fixed",
        left: e.x,
        top: e.y,
        transform: "translate(-50%, -50%)"
      },
      children: /* @__PURE__ */ E.jsx("div", { className: "canvas-creation-grid", children: RC.map((i) => {
        const s = it[i];
        return /* @__PURE__ */ E.jsxs(
          "button",
          {
            className: "canvas-creation-item",
            onClick: () => o(i),
            title: (s == null ? void 0 : s.label) || i,
            children: [
              /* @__PURE__ */ E.jsx(Za, { type: i, size: 20 }),
              /* @__PURE__ */ E.jsx("span", { className: "canvas-creation-item-label", children: (s == null ? void 0 : s.label) || i })
            ]
          },
          i
        );
      }) })
    }
  );
}
function t2({
  nodeId: e,
  nodeType: t,
  position: n,
  onChangeType: r,
  onDuplicate: o,
  onDelete: i,
  onClose: s
}) {
  const l = P.useRef(null), [u, a] = P.useState(!1);
  P.useEffect(() => {
    const c = (g) => {
      l.current && !l.current.contains(g.target) && s();
    }, f = (g) => {
      g.key === "Escape" && s();
    };
    return document.addEventListener("mousedown", c), document.addEventListener("keydown", f), () => {
      document.removeEventListener("mousedown", c), document.removeEventListener("keydown", f);
    };
  }, [s]);
  const d = P.useCallback(
    (c) => {
      c !== t && r(e, c), s();
    },
    [e, t, r, s]
  );
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      ref: l,
      className: "canvas-context-menu",
      style: {
        position: "fixed",
        left: n.x,
        top: n.y
      },
      children: [
        /* @__PURE__ */ E.jsxs(
          "div",
          {
            className: "canvas-context-item canvas-context-item--parent",
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            children: [
              /* @__PURE__ */ E.jsx("span", { children: "Change type" }),
              /* @__PURE__ */ E.jsx("span", { className: "canvas-context-arrow", children: "▸" }),
              u && /* @__PURE__ */ E.jsx("div", { className: "canvas-context-submenu", children: Tm.map((c) => {
                const f = it[c], g = c === t;
                return /* @__PURE__ */ E.jsxs(
                  "button",
                  {
                    className: `canvas-context-item${g ? " canvas-context-item--active" : ""}`,
                    onClick: () => d(c),
                    children: [
                      /* @__PURE__ */ E.jsx(Za, { type: c, size: 14 }),
                      /* @__PURE__ */ E.jsx("span", { children: (f == null ? void 0 : f.label) || c }),
                      g && /* @__PURE__ */ E.jsx("span", { className: "canvas-context-check", children: "✓" })
                    ]
                  },
                  c
                );
              }) })
            ]
          }
        ),
        /* @__PURE__ */ E.jsx(
          "button",
          {
            className: "canvas-context-item",
            onClick: () => {
              o(e), s();
            },
            children: "Duplicate"
          }
        ),
        /* @__PURE__ */ E.jsx("div", { className: "canvas-context-divider" }),
        /* @__PURE__ */ E.jsx(
          "button",
          {
            className: "canvas-context-item canvas-context-item--danger",
            onClick: () => {
              i(e), s();
            },
            children: "Delete"
          }
        )
      ]
    }
  );
}
const Il = [], _d = [];
function n2(e) {
  var t;
  if (!e) return { nodes: Il, edges: _d };
  if ("workspace_id" in e) {
    const n = ZC(e);
    return {
      nodes: n.nodes.length ? n.nodes : Il,
      edges: n.edges
    };
  }
  return {
    nodes: (t = e.nodes) != null && t.length ? e.nodes : Il,
    edges: e.edges ?? _d
  };
}
function r2({ workspaceId: e, initialGraph: t, onSave: n }) {
  const r = n2(t), [o, i, s] = iC(r.nodes), [l, u, a] = sC(r.edges), { saveStatus: d, setWorkspaceId: c, setWorkspaceName: f } = qa(), g = JC(o, i, u);
  P.useEffect(() => {
    e && c(e), t && "name" in t && f(t.name);
  }, [e, t, c, f]);
  const { saveNow: y } = qC(e, o, l), x = P.useCallback(
    (m) => {
      u((h) => Ig(m, h));
    },
    [u]
  ), w = P.useCallback(() => {
    e && y(), n && n({ nodes: o, edges: l });
  }, [e, y, o, l, n]), p = P.useCallback(() => {
    i([]), u([]);
  }, [i, u]);
  return /* @__PURE__ */ E.jsxs("div", { ref: g.containerRef, style: { width: "100%", height: "100%" }, children: [
    /* @__PURE__ */ E.jsxs(
      oC,
      {
        nodes: o,
        edges: l,
        onNodesChange: s,
        onEdgesChange: a,
        onConnect: x,
        onPaneClick: g.closeMenus,
        onDoubleClick: g.handlePaneDoubleClick,
        onNodeContextMenu: g.handleNodeContextMenu,
        nodeTypes: UC,
        edgeTypes: WC,
        zoomOnDoubleClick: !1,
        fitView: !0,
        attributionPosition: "bottom-left",
        children: [
          /* @__PURE__ */ E.jsx(vC, {}),
          /* @__PURE__ */ E.jsx(TC, { zoomable: !0, pannable: !0 }),
          /* @__PURE__ */ E.jsx(fC, { variant: jt.Dots, gap: 16, size: 1 }),
          /* @__PURE__ */ E.jsx(Yo, { position: "top-right", children: /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", gap: "0.5rem", alignItems: "center" }, children: [
            e && /* @__PURE__ */ E.jsx(o2, { status: d }),
            /* @__PURE__ */ E.jsx(
              "button",
              {
                onClick: w,
                className: "esevioz-btn-primary",
                style: { padding: "0.5rem 1rem", borderRadius: "0.375rem" },
                children: "Save"
              }
            ),
            /* @__PURE__ */ E.jsx(
              "button",
              {
                onClick: p,
                className: "esevioz-btn-warning",
                style: { padding: "0.5rem 1rem", borderRadius: "0.375rem" },
                children: "Clear"
              }
            )
          ] }) })
        ]
      }
    ),
    g.creationMenu && /* @__PURE__ */ E.jsx(
      e2,
      {
        position: { x: g.creationMenu.x, y: g.creationMenu.y },
        onSelect: g.handleCreationSelect,
        onClose: g.closeCreationMenu
      }
    ),
    g.contextMenu && /* @__PURE__ */ E.jsx(
      t2,
      {
        nodeId: g.contextMenu.nodeId,
        nodeType: g.contextMenu.nodeType,
        position: { x: g.contextMenu.x, y: g.contextMenu.y },
        onChangeType: g.changeNodeType,
        onDuplicate: g.duplicateNode,
        onDelete: g.deleteNode,
        onClose: g.closeContextMenu
      }
    )
  ] });
}
function Ll(e) {
  return /* @__PURE__ */ E.jsx(Mm, { children: /* @__PURE__ */ E.jsx(r2, { ...e }) });
}
function o2({ status: e }) {
  const t = {
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    userSelect: "none"
  };
  switch (e) {
    case "saved":
      return /* @__PURE__ */ E.jsx("span", { style: { ...t, color: "#2d6a4f", background: "#d8f3dc" }, children: "Saved" });
    case "saving":
      return /* @__PURE__ */ E.jsx("span", { style: { ...t, color: "#b08800", background: "#fff3cd" }, children: "Saving..." });
    case "unsaved":
      return /* @__PURE__ */ E.jsx("span", { style: { ...t, color: "#6c757d", background: "#e9ecef" }, children: "Unsaved" });
    case "error":
      return /* @__PURE__ */ E.jsx("span", { style: { ...t, color: "#842029", background: "#f8d7da" }, children: "Save failed" });
    default:
      return null;
  }
}
let lt = null, Dt = { nodes: [], edges: [] };
function i2(e) {
  const { containerId: t, workspaceId: n, initialGraph: r, onSave: o } = e, i = document.getElementById(t);
  if (!i)
    throw new Error(`Container element with id "${t}" not found`);
  return lt && lt.unmount(), Dt = r ?? { nodes: [], edges: [] }, lt = Op(i), lt.render(
    /* @__PURE__ */ E.jsx(
      Ll,
      {
        workspaceId: n,
        initialGraph: Dt,
        onSave: (s) => {
          Dt = s, o && o(s);
        }
      }
    )
  ), {
    getGraph: () => Dt,
    setGraph: (s) => {
      Dt = s, lt && i && lt.render(
        /* @__PURE__ */ E.jsx(
          Ll,
          {
            workspaceId: n,
            initialGraph: s,
            onSave: (l) => {
              Dt = l, o && o(l);
            }
          }
        )
      );
    },
    clear: () => {
      Dt = { nodes: [], edges: [] }, lt && i && lt.render(
        /* @__PURE__ */ E.jsx(
          Ll,
          {
            workspaceId: n,
            initialGraph: Dt,
            onSave: (s) => {
              Dt = s, o && o(s);
            }
          }
        )
      );
    },
    unmount: () => {
      lt && (lt.unmount(), lt = null);
    }
  };
}
typeof window < "u" && (window.CartolexCanvas = { mountCanvas: i2 });
export {
  i2 as mountCanvas
};
