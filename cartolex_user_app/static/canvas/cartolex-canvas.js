function Dd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zd = { exports: {} }, Ss = {}, Id = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o = Symbol.for("react.element"), Z0 = Symbol.for("react.portal"), q0 = Symbol.for("react.fragment"), J0 = Symbol.for("react.strict_mode"), ey = Symbol.for("react.profiler"), ty = Symbol.for("react.provider"), ny = Symbol.for("react.context"), ry = Symbol.for("react.forward_ref"), oy = Symbol.for("react.suspense"), iy = Symbol.for("react.memo"), sy = Symbol.for("react.lazy"), dc = Symbol.iterator;
function ly(e) {
  return e === null || typeof e != "object" ? null : (e = dc && e[dc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ld = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, jd = Object.assign, Ad = {};
function Mr(e, t, n) {
  this.props = e, this.context = t, this.refs = Ad, this.updater = n || Ld;
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $d() {
}
$d.prototype = Mr.prototype;
function Uu(e, t, n) {
  this.props = e, this.context = t, this.refs = Ad, this.updater = n || Ld;
}
var Wu = Uu.prototype = new $d();
Wu.constructor = Uu;
jd(Wu, Mr.prototype);
Wu.isPureReactComponent = !0;
var hc = Array.isArray, Rd = Object.prototype.hasOwnProperty, Yu = { current: null }, Od = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fd(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Rd.call(t, r) && !Od.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: $o, type: e, key: i, ref: s, props: o, _owner: Yu.current };
}
function uy(e, t) {
  return { $$typeof: $o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Xu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $o;
}
function ay(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var pc = /\/+/g;
function qs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ay("" + e.key) : t.toString(36);
}
function ki(e, t, n, r, o) {
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
        case Z0:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + qs(s, 0) : r, hc(o) ? (n = "", e != null && (n = e.replace(pc, "$&/") + "/"), ki(o, t, n, "", function(a) {
    return a;
  })) : o != null && (Xu(o) && (o = uy(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(pc, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", hc(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var u = r + qs(i, l);
    s += ki(i, t, n, u, o);
  }
  else if (u = ly(e), typeof u == "function") for (e = u.call(e), l = 0; !(i = e.next()).done; ) i = i.value, u = r + qs(i, l++), s += ki(i, t, n, u, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Zo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ki(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function cy(e) {
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
var $e = { current: null }, Ei = { transition: null }, fy = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: Ei, ReactCurrentOwner: Yu };
function bd() {
  throw Error("act(...) is not supported in production builds of React.");
}
te.Children = { map: Zo, forEach: function(e, t, n) {
  Zo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Zo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Zo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Xu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Mr;
te.Fragment = q0;
te.Profiler = ey;
te.PureComponent = Uu;
te.StrictMode = J0;
te.Suspense = oy;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
te.act = bd;
te.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = jd({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Yu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (u in t) Rd.call(t, u) && !Od.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
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
  return e = { $$typeof: ny, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ty, _context: e }, e.Consumer = e;
};
te.createElement = Fd;
te.createFactory = function(e) {
  var t = Fd.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: ry, render: e };
};
te.isValidElement = Xu;
te.lazy = function(e) {
  return { $$typeof: sy, _payload: { _status: -1, _result: e }, _init: cy };
};
te.memo = function(e, t) {
  return { $$typeof: iy, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function(e) {
  var t = Ei.transition;
  Ei.transition = {};
  try {
    e();
  } finally {
    Ei.transition = t;
  }
};
te.unstable_act = bd;
te.useCallback = function(e, t) {
  return $e.current.useCallback(e, t);
};
te.useContext = function(e) {
  return $e.current.useContext(e);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(e) {
  return $e.current.useDeferredValue(e);
};
te.useEffect = function(e, t) {
  return $e.current.useEffect(e, t);
};
te.useId = function() {
  return $e.current.useId();
};
te.useImperativeHandle = function(e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function(e, t) {
  return $e.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function(e, t) {
  return $e.current.useLayoutEffect(e, t);
};
te.useMemo = function(e, t) {
  return $e.current.useMemo(e, t);
};
te.useReducer = function(e, t, n) {
  return $e.current.useReducer(e, t, n);
};
te.useRef = function(e) {
  return $e.current.useRef(e);
};
te.useState = function(e) {
  return $e.current.useState(e);
};
te.useSyncExternalStore = function(e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function() {
  return $e.current.useTransition();
};
te.version = "18.3.1";
Id.exports = te;
var N = Id.exports;
const Ur = /* @__PURE__ */ Dd(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dy = N, hy = Symbol.for("react.element"), py = Symbol.for("react.fragment"), gy = Object.prototype.hasOwnProperty, my = dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hd(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) gy.call(t, r) && !yy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: hy, type: e, key: i, ref: s, props: o, _owner: my.current };
}
Ss.Fragment = py;
Ss.jsx = Hd;
Ss.jsxs = Hd;
zd.exports = Ss;
var w = zd.exports, Bd = { exports: {} }, Ze = {}, Vd = { exports: {} }, Ud = {};
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
  function t(C, P) {
    var j = C.length;
    C.push(P);
    e: for (; 0 < j; ) {
      var F = j - 1 >>> 1, O = C[F];
      if (0 < o(O, P)) C[F] = P, C[j] = O, j = F;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0], j = C.pop();
    if (j !== P) {
      C[0] = j;
      e: for (var F = 0, O = C.length, U = O >>> 1; F < U; ) {
        var V = 2 * (F + 1) - 1, Y = C[V], X = V + 1, Q = C[X];
        if (0 > o(Y, j)) X < O && 0 > o(Q, Y) ? (C[F] = Q, C[X] = j, F = X) : (C[F] = Y, C[V] = j, F = V);
        else if (X < O && 0 > o(Q, j)) C[F] = Q, C[X] = j, F = X;
        else break e;
      }
    }
    return P;
  }
  function o(C, P) {
    var j = C.sortIndex - P.sortIndex;
    return j !== 0 ? j : C.id - P.id;
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
  var u = [], a = [], d = 1, c = null, f = 3, m = !1, y = !1, x = !1, S = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var P = n(a); P !== null; ) {
      if (P.callback === null) r(a);
      else if (P.startTime <= C) r(a), P.sortIndex = P.expirationTime, t(u, P);
      else break;
      P = n(a);
    }
  }
  function v(C) {
    if (x = !1, h(C), !y) if (n(u) !== null) y = !0, z(_);
    else {
      var P = n(a);
      P !== null && $(v, P.startTime - C);
    }
  }
  function _(C, P) {
    y = !1, x && (x = !1, p(T), T = -1), m = !0;
    var j = f;
    try {
      for (h(P), c = n(u); c !== null && (!(c.expirationTime > P) || C && !D()); ) {
        var F = c.callback;
        if (typeof F == "function") {
          c.callback = null, f = c.priorityLevel;
          var O = F(c.expirationTime <= P);
          P = e.unstable_now(), typeof O == "function" ? c.callback = O : c === n(u) && r(u), h(P);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var U = !0;
      else {
        var V = n(a);
        V !== null && $(v, V.startTime - P), U = !1;
      }
      return U;
    } finally {
      c = null, f = j, m = !1;
    }
  }
  var k = !1, E = null, T = -1, I = 5, R = -1;
  function D() {
    return !(e.unstable_now() - R < I);
  }
  function L() {
    if (E !== null) {
      var C = e.unstable_now();
      R = C;
      var P = !0;
      try {
        P = E(!0, C);
      } finally {
        P ? b() : (k = !1, E = null);
      }
    } else k = !1;
  }
  var b;
  if (typeof g == "function") b = function() {
    g(L);
  };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(), A = M.port2;
    M.port1.onmessage = L, b = function() {
      A.postMessage(null);
    };
  } else b = function() {
    S(L, 0);
  };
  function z(C) {
    E = C, k || (k = !0, b());
  }
  function $(C, P) {
    T = S(function() {
      C(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    y || m || (y = !0, z(_));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(C) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = f;
    }
    var j = f;
    f = P;
    try {
      return C();
    } finally {
      f = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, P) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var j = f;
    f = C;
    try {
      return P();
    } finally {
      f = j;
    }
  }, e.unstable_scheduleCallback = function(C, P, j) {
    var F = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? F + j : F) : j = F, C) {
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
    return O = j + O, C = { id: d++, callback: P, priorityLevel: C, startTime: j, expirationTime: O, sortIndex: -1 }, j > F ? (C.sortIndex = j, t(a, C), n(u) === null && C === n(a) && (x ? (p(T), T = -1) : x = !0, $(v, j - F))) : (C.sortIndex = O, t(u, C), y || m || (y = !0, z(_))), C;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(C) {
    var P = f;
    return function() {
      var j = f;
      f = P;
      try {
        return C.apply(this, arguments);
      } finally {
        f = j;
      }
    };
  };
})(Ud);
Vd.exports = Ud;
var vy = Vd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xy = N, Qe = vy;
function H(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Wd = /* @__PURE__ */ new Set(), ao = {};
function On(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (ao[e] = t, e = 0; e < t.length; e++) Wd.add(t[e]);
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $l = Object.prototype.hasOwnProperty, wy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, gc = {}, mc = {};
function Sy(e) {
  return $l.call(mc, e) ? !0 : $l.call(gc, e) ? !1 : wy.test(e) ? mc[e] = !0 : (gc[e] = !0, !1);
}
function _y(e, t, n, r) {
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
function ky(e, t, n, r) {
  if (t === null || typeof t > "u" || _y(e, t, n, r)) return !0;
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
function Re(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Pe[e] = new Re(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Pe[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Pe[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Pe[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Pe[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Pe[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Pe[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Pe[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Pe[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ku = /[\-:]([a-z])/g;
function Qu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ku,
    Qu
  );
  Pe[t] = new Re(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ku, Qu);
  Pe[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ku, Qu);
  Pe[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Pe[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Pe[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gu(e, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ky(t, n, o, r) && (n = null), r || o === null ? Sy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qo = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Un = Symbol.for("react.fragment"), Zu = Symbol.for("react.strict_mode"), Rl = Symbol.for("react.profiler"), Yd = Symbol.for("react.provider"), Xd = Symbol.for("react.context"), qu = Symbol.for("react.forward_ref"), Ol = Symbol.for("react.suspense"), Fl = Symbol.for("react.suspense_list"), Ju = Symbol.for("react.memo"), Gt = Symbol.for("react.lazy"), Kd = Symbol.for("react.offscreen"), yc = Symbol.iterator;
function jr(e) {
  return e === null || typeof e != "object" ? null : (e = yc && e[yc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ye = Object.assign, Js;
function Wr(e) {
  if (Js === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Js = t && t[1] || "";
  }
  return `
` + Js + e;
}
var el = !1;
function tl(e, t) {
  if (!e || el) return "";
  el = !0;
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
    el = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Wr(e) : "";
}
function Ey(e) {
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
      return e = tl(e.type, !1), e;
    case 11:
      return e = tl(e.type.render, !1), e;
    case 1:
      return e = tl(e.type, !0), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Un:
      return "Fragment";
    case Vn:
      return "Portal";
    case Rl:
      return "Profiler";
    case Zu:
      return "StrictMode";
    case Ol:
      return "Suspense";
    case Fl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Xd:
      return (e.displayName || "Context") + ".Consumer";
    case Yd:
      return (e._context.displayName || "Context") + ".Provider";
    case qu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ju:
      return t = e.displayName || null, t !== null ? t : bl(e.type) || "Memo";
    case Gt:
      t = e._payload, e = e._init;
      try {
        return bl(e(t));
      } catch {
      }
  }
  return null;
}
function Cy(e) {
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
      return bl(t);
    case 8:
      return t === Zu ? "StrictMode" : "Mode";
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
function dn(e) {
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
function Qd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ny(e) {
  var t = Qd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Jo(e) {
  e._valueTracker || (e._valueTracker = Ny(e));
}
function Gd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Qd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function bi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hl(e, t) {
  var n = t.checked;
  return ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function vc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = dn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Zd(e, t) {
  t = t.checked, t != null && Gu(e, "checked", t, !1);
}
function Bl(e, t) {
  Zd(e, t);
  var n = dn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vl(e, t.type, dn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function xc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Vl(e, t, n) {
  (t !== "number" || bi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yr = Array.isArray;
function rr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ul(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function wc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(H(92));
      if (Yr(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: dn(n) };
}
function qd(e, t) {
  var n = dn(t.value), r = dn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Sc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Jd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ei, eh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ei = ei || document.createElement("div"), ei.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ei.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function co(e, t) {
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
}, My = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zr).forEach(function(e) {
  My.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Zr[t] = Zr[e];
  });
});
function th(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zr.hasOwnProperty(e) && Zr[e] ? ("" + t).trim() : t + "px";
}
function nh(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = th(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Py = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Yl(e, t) {
  if (t) {
    if (Py[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function Xl(e, t) {
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
var Kl = null;
function ea(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ql = null, or = null, ir = null;
function _c(e) {
  if (e = Fo(e)) {
    if (typeof Ql != "function") throw Error(H(280));
    var t = e.stateNode;
    t && (t = Ns(t), Ql(e.stateNode, e.type, t));
  }
}
function rh(e) {
  or ? ir ? ir.push(e) : ir = [e] : or = e;
}
function oh() {
  if (or) {
    var e = or, t = ir;
    if (ir = or = null, _c(e), t) for (e = 0; e < t.length; e++) _c(t[e]);
  }
}
function ih(e, t) {
  return e(t);
}
function sh() {
}
var nl = !1;
function lh(e, t, n) {
  if (nl) return e(t, n);
  nl = !0;
  try {
    return ih(e, t, n);
  } finally {
    nl = !1, (or !== null || ir !== null) && (sh(), oh());
  }
}
function fo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ns(n);
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
  if (n && typeof n != "function") throw Error(H(231, t, typeof n));
  return n;
}
var Gl = !1;
if (Ot) try {
  var Ar = {};
  Object.defineProperty(Ar, "passive", { get: function() {
    Gl = !0;
  } }), window.addEventListener("test", Ar, Ar), window.removeEventListener("test", Ar, Ar);
} catch {
  Gl = !1;
}
function Ty(e, t, n, r, o, i, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var qr = !1, Hi = null, Bi = !1, Zl = null, Dy = { onError: function(e) {
  qr = !0, Hi = e;
} };
function zy(e, t, n, r, o, i, s, l, u) {
  qr = !1, Hi = null, Ty.apply(Dy, arguments);
}
function Iy(e, t, n, r, o, i, s, l, u) {
  if (zy.apply(this, arguments), qr) {
    if (qr) {
      var a = Hi;
      qr = !1, Hi = null;
    } else throw Error(H(198));
    Bi || (Bi = !0, Zl = a);
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
function uh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function kc(e) {
  if (Fn(e) !== e) throw Error(H(188));
}
function Ly(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Fn(e), t === null) throw Error(H(188));
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
        if (i === n) return kc(o), e;
        if (i === r) return kc(o), t;
        i = i.sibling;
      }
      throw Error(H(188));
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
        if (!s) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function ah(e) {
  return e = Ly(e), e !== null ? ch(e) : null;
}
function ch(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ch(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fh = Qe.unstable_scheduleCallback, Ec = Qe.unstable_cancelCallback, jy = Qe.unstable_shouldYield, Ay = Qe.unstable_requestPaint, xe = Qe.unstable_now, $y = Qe.unstable_getCurrentPriorityLevel, ta = Qe.unstable_ImmediatePriority, dh = Qe.unstable_UserBlockingPriority, Vi = Qe.unstable_NormalPriority, Ry = Qe.unstable_LowPriority, hh = Qe.unstable_IdlePriority, _s = null, kt = null;
function Oy(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function") try {
    kt.onCommitFiberRoot(_s, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var gt = Math.clz32 ? Math.clz32 : Hy, Fy = Math.log, by = Math.LN2;
function Hy(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Fy(e) / by | 0) | 0;
}
var ti = 64, ni = 4194304;
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
function Ui(e, t) {
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
function By(e, t) {
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
function Vy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - gt(i), l = 1 << s, u = o[s];
    u === -1 ? (!(l & n) || l & r) && (o[s] = By(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function ql(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ph() {
  var e = ti;
  return ti <<= 1, !(ti & 4194240) && (ti = 64), e;
}
function rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ro(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - gt(t), e[t] = n;
}
function Uy(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - gt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function na(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - gt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function gh(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var mh, ra, yh, vh, xh, Jl = !1, ri = [], rn = null, on = null, sn = null, ho = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), qt = [], Wy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Cc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      ho.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      po.delete(t.pointerId);
  }
}
function $r(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Fo(t), t !== null && ra(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Yy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return rn = $r(rn, e, t, n, r, o), !0;
    case "dragenter":
      return on = $r(on, e, t, n, r, o), !0;
    case "mouseover":
      return sn = $r(sn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ho.set(i, $r(ho.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, po.set(i, $r(po.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function wh(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = uh(n), t !== null) {
          e.blockedOn = t, xh(e.priority, function() {
            yh(n);
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
function Ci(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = eu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Kl = r, n.target.dispatchEvent(r), Kl = null;
    } else return t = Fo(n), t !== null && ra(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Nc(e, t, n) {
  Ci(e) && n.delete(t);
}
function Xy() {
  Jl = !1, rn !== null && Ci(rn) && (rn = null), on !== null && Ci(on) && (on = null), sn !== null && Ci(sn) && (sn = null), ho.forEach(Nc), po.forEach(Nc);
}
function Rr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Xy)));
}
function go(e) {
  function t(o) {
    return Rr(o, e);
  }
  if (0 < ri.length) {
    Rr(ri[0], e);
    for (var n = 1; n < ri.length; n++) {
      var r = ri[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rn !== null && Rr(rn, e), on !== null && Rr(on, e), sn !== null && Rr(sn, e), ho.forEach(t), po.forEach(t), n = 0; n < qt.length; n++) r = qt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && (n = qt[0], n.blockedOn === null); ) wh(n), n.blockedOn === null && qt.shift();
}
var sr = Vt.ReactCurrentBatchConfig, Wi = !0;
function Ky(e, t, n, r) {
  var o = se, i = sr.transition;
  sr.transition = null;
  try {
    se = 1, oa(e, t, n, r);
  } finally {
    se = o, sr.transition = i;
  }
}
function Qy(e, t, n, r) {
  var o = se, i = sr.transition;
  sr.transition = null;
  try {
    se = 4, oa(e, t, n, r);
  } finally {
    se = o, sr.transition = i;
  }
}
function oa(e, t, n, r) {
  if (Wi) {
    var o = eu(e, t, n, r);
    if (o === null) hl(e, t, r, Yi, n), Cc(e, r);
    else if (Yy(o, e, t, n, r)) r.stopPropagation();
    else if (Cc(e, r), t & 4 && -1 < Wy.indexOf(e)) {
      for (; o !== null; ) {
        var i = Fo(o);
        if (i !== null && mh(i), i = eu(e, t, n, r), i === null && hl(e, t, r, Yi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else hl(e, t, r, null, n);
  }
}
var Yi = null;
function eu(e, t, n, r) {
  if (Yi = null, e = ea(r), e = Sn(e), e !== null) if (t = Fn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = uh(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yi = e, null;
}
function Sh(e) {
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
      switch ($y()) {
        case ta:
          return 1;
        case dh:
          return 4;
        case Vi:
        case Ry:
          return 16;
        case hh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null, ia = null, Ni = null;
function _h() {
  if (Ni) return Ni;
  var e, t = ia, n = t.length, r, o = "value" in tn ? tn.value : tn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Ni = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Mi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function oi() {
  return !0;
}
function Mc() {
  return !1;
}
function qe(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? oi : Mc, this.isPropagationStopped = Mc, this;
  }
  return ye(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = oi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = oi);
  }, persist: function() {
  }, isPersistent: oi }), t;
}
var Pr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, sa = qe(Pr), Oo = ye({}, Pr, { view: 0, detail: 0 }), Gy = qe(Oo), ol, il, Or, ks = ye({}, Oo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: la, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (ol = e.screenX - Or.screenX, il = e.screenY - Or.screenY) : il = ol = 0, Or = e), ol);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : il;
} }), Pc = qe(ks), Zy = ye({}, ks, { dataTransfer: 0 }), qy = qe(Zy), Jy = ye({}, Oo, { relatedTarget: 0 }), sl = qe(Jy), ev = ye({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), tv = qe(ev), nv = ye({}, Pr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), rv = qe(nv), ov = ye({}, Pr, { data: 0 }), Tc = qe(ov), iv = {
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
}, sv = {
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
}, lv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function uv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lv[e]) ? !!t[e] : !1;
}
function la() {
  return uv;
}
var av = ye({}, Oo, { key: function(e) {
  if (e.key) {
    var t = iv[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sv[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: la, charCode: function(e) {
  return e.type === "keypress" ? Mi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), cv = qe(av), fv = ye({}, ks, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dc = qe(fv), dv = ye({}, Oo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: la }), hv = qe(dv), pv = ye({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gv = qe(pv), mv = ye({}, ks, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yv = qe(mv), vv = [9, 13, 27, 32], ua = Ot && "CompositionEvent" in window, Jr = null;
Ot && "documentMode" in document && (Jr = document.documentMode);
var xv = Ot && "TextEvent" in window && !Jr, kh = Ot && (!ua || Jr && 8 < Jr && 11 >= Jr), zc = " ", Ic = !1;
function Eh(e, t) {
  switch (e) {
    case "keyup":
      return vv.indexOf(t.keyCode) !== -1;
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
function Ch(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function wv(e, t) {
  switch (e) {
    case "compositionend":
      return Ch(t);
    case "keypress":
      return t.which !== 32 ? null : (Ic = !0, zc);
    case "textInput":
      return e = t.data, e === zc && Ic ? null : e;
    default:
      return null;
  }
}
function Sv(e, t) {
  if (Wn) return e === "compositionend" || !ua && Eh(e, t) ? (e = _h(), Ni = ia = tn = null, Wn = !1, e) : null;
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
      return kh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _v = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_v[e.type] : t === "textarea";
}
function Nh(e, t, n, r) {
  rh(r), t = Xi(t, "onChange"), 0 < t.length && (n = new sa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var eo = null, mo = null;
function kv(e) {
  Rh(e, 0);
}
function Es(e) {
  var t = Kn(e);
  if (Gd(t)) return e;
}
function Ev(e, t) {
  if (e === "change") return t;
}
var Mh = !1;
if (Ot) {
  var ll;
  if (Ot) {
    var ul = "oninput" in document;
    if (!ul) {
      var jc = document.createElement("div");
      jc.setAttribute("oninput", "return;"), ul = typeof jc.oninput == "function";
    }
    ll = ul;
  } else ll = !1;
  Mh = ll && (!document.documentMode || 9 < document.documentMode);
}
function Ac() {
  eo && (eo.detachEvent("onpropertychange", Ph), mo = eo = null);
}
function Ph(e) {
  if (e.propertyName === "value" && Es(mo)) {
    var t = [];
    Nh(t, mo, e, ea(e)), lh(kv, t);
  }
}
function Cv(e, t, n) {
  e === "focusin" ? (Ac(), eo = t, mo = n, eo.attachEvent("onpropertychange", Ph)) : e === "focusout" && Ac();
}
function Nv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Es(mo);
}
function Mv(e, t) {
  if (e === "click") return Es(t);
}
function Pv(e, t) {
  if (e === "input" || e === "change") return Es(t);
}
function Tv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var yt = typeof Object.is == "function" ? Object.is : Tv;
function yo(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$l.call(t, o) || !yt(e[o], t[o])) return !1;
  }
  return !0;
}
function $c(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Rc(e, t) {
  var n = $c(e);
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
    n = $c(n);
  }
}
function Th(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Th(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Dh() {
  for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bi(e.document);
  }
  return t;
}
function aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Dv(e) {
  var t = Dh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Th(n.ownerDocument.documentElement, n)) {
    if (r !== null && aa(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Rc(n, i);
        var s = Rc(
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
var zv = Ot && "documentMode" in document && 11 >= document.documentMode, Yn = null, tu = null, to = null, nu = !1;
function Oc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nu || Yn == null || Yn !== bi(r) || (r = Yn, "selectionStart" in r && aa(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), to && yo(to, r) || (to = r, r = Xi(tu, "onSelect"), 0 < r.length && (t = new sa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yn)));
}
function ii(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xn = { animationend: ii("Animation", "AnimationEnd"), animationiteration: ii("Animation", "AnimationIteration"), animationstart: ii("Animation", "AnimationStart"), transitionend: ii("Transition", "TransitionEnd") }, al = {}, zh = {};
Ot && (zh = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);
function Cs(e) {
  if (al[e]) return al[e];
  if (!Xn[e]) return e;
  var t = Xn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in zh) return al[e] = t[n];
  return e;
}
var Ih = Cs("animationend"), Lh = Cs("animationiteration"), jh = Cs("animationstart"), Ah = Cs("transitionend"), $h = /* @__PURE__ */ new Map(), Fc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pn(e, t) {
  $h.set(e, t), On(t, [e]);
}
for (var cl = 0; cl < Fc.length; cl++) {
  var fl = Fc[cl], Iv = fl.toLowerCase(), Lv = fl[0].toUpperCase() + fl.slice(1);
  pn(Iv, "on" + Lv);
}
pn(Ih, "onAnimationEnd");
pn(Lh, "onAnimationIteration");
pn(jh, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Ah, "onTransitionEnd");
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
var Kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
function bc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Iy(r, t, void 0, e), e.currentTarget = null;
}
function Rh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], u = l.instance, a = l.currentTarget;
        if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
        bc(o, l, a), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], u = l.instance, a = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
        bc(o, l, a), i = u;
      }
    }
  }
  if (Bi) throw e = Zl, Bi = !1, Zl = null, e;
}
function ce(e, t) {
  var n = t[lu];
  n === void 0 && (n = t[lu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Oh(t, e, 2, !1), n.add(r));
}
function dl(e, t, n) {
  var r = 0;
  t && (r |= 4), Oh(n, e, r, t);
}
var si = "_reactListening" + Math.random().toString(36).slice(2);
function vo(e) {
  if (!e[si]) {
    e[si] = !0, Wd.forEach(function(n) {
      n !== "selectionchange" && (jv.has(n) || dl(n, !1, e), dl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[si] || (t[si] = !0, dl("selectionchange", !1, t));
  }
}
function Oh(e, t, n, r) {
  switch (Sh(t)) {
    case 1:
      var o = Ky;
      break;
    case 4:
      o = Qy;
      break;
    default:
      o = oa;
  }
  n = o.bind(null, t, n, e), o = void 0, !Gl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function hl(e, t, n, r, o) {
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
  lh(function() {
    var a = i, d = ea(n), c = [];
    e: {
      var f = $h.get(e);
      if (f !== void 0) {
        var m = sa, y = e;
        switch (e) {
          case "keypress":
            if (Mi(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = cv;
            break;
          case "focusin":
            y = "focus", m = sl;
            break;
          case "focusout":
            y = "blur", m = sl;
            break;
          case "beforeblur":
          case "afterblur":
            m = sl;
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
            m = Pc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = qy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = hv;
            break;
          case Ih:
          case Lh:
          case jh:
            m = tv;
            break;
          case Ah:
            m = gv;
            break;
          case "scroll":
            m = Gy;
            break;
          case "wheel":
            m = yv;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = rv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Dc;
        }
        var x = (t & 4) !== 0, S = !x && e === "scroll", p = x ? f !== null ? f + "Capture" : null : f;
        x = [];
        for (var g = a, h; g !== null; ) {
          h = g;
          var v = h.stateNode;
          if (h.tag === 5 && v !== null && (h = v, p !== null && (v = fo(g, p), v != null && x.push(xo(g, v, h)))), S) break;
          g = g.return;
        }
        0 < x.length && (f = new m(f, y, null, n, d), c.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", f && n !== Kl && (y = n.relatedTarget || n.fromElement) && (Sn(y) || y[Ft])) break e;
        if ((m || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, m ? (y = n.relatedTarget || n.toElement, m = a, y = y ? Sn(y) : null, y !== null && (S = Fn(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null, y = a), m !== y)) {
          if (x = Pc, v = "onMouseLeave", p = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (x = Dc, v = "onPointerLeave", p = "onPointerEnter", g = "pointer"), S = m == null ? f : Kn(m), h = y == null ? f : Kn(y), f = new x(v, g + "leave", m, n, d), f.target = S, f.relatedTarget = h, v = null, Sn(d) === a && (x = new x(p, g + "enter", y, n, d), x.target = h, x.relatedTarget = S, v = x), S = v, m && y) t: {
            for (x = m, p = y, g = 0, h = x; h; h = Hn(h)) g++;
            for (h = 0, v = p; v; v = Hn(v)) h++;
            for (; 0 < g - h; ) x = Hn(x), g--;
            for (; 0 < h - g; ) p = Hn(p), h--;
            for (; g--; ) {
              if (x === p || p !== null && x === p.alternate) break t;
              x = Hn(x), p = Hn(p);
            }
            x = null;
          }
          else x = null;
          m !== null && Hc(c, f, m, x, !1), y !== null && S !== null && Hc(c, S, y, x, !0);
        }
      }
      e: {
        if (f = a ? Kn(a) : window, m = f.nodeName && f.nodeName.toLowerCase(), m === "select" || m === "input" && f.type === "file") var _ = Ev;
        else if (Lc(f)) if (Mh) _ = Pv;
        else {
          _ = Nv;
          var k = Cv;
        }
        else (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (_ = Mv);
        if (_ && (_ = _(e, a))) {
          Nh(c, _, n, d);
          break e;
        }
        k && k(e, f, a), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Vl(f, "number", f.value);
      }
      switch (k = a ? Kn(a) : window, e) {
        case "focusin":
          (Lc(k) || k.contentEditable === "true") && (Yn = k, tu = a, to = null);
          break;
        case "focusout":
          to = tu = Yn = null;
          break;
        case "mousedown":
          nu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          nu = !1, Oc(c, n, d);
          break;
        case "selectionchange":
          if (zv) break;
        case "keydown":
        case "keyup":
          Oc(c, n, d);
      }
      var E;
      if (ua) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Wn ? Eh(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (kh && n.locale !== "ko" && (Wn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Wn && (E = _h()) : (tn = d, ia = "value" in tn ? tn.value : tn.textContent, Wn = !0)), k = Xi(a, T), 0 < k.length && (T = new Tc(T, e, null, n, d), c.push({ event: T, listeners: k }), E ? T.data = E : (E = Ch(n), E !== null && (T.data = E)))), (E = xv ? wv(e, n) : Sv(e, n)) && (a = Xi(a, "onBeforeInput"), 0 < a.length && (d = new Tc("onBeforeInput", "beforeinput", null, n, d), c.push({ event: d, listeners: a }), d.data = E));
    }
    Rh(c, t);
  });
}
function xo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = fo(e, n), i != null && r.unshift(xo(e, i, o)), i = fo(e, t), i != null && r.push(xo(e, i, o))), e = e.return;
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Hc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, u = l.alternate, a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 && a !== null && (l = a, o ? (u = fo(n, i), u != null && s.unshift(xo(n, u, l))) : o || (u = fo(n, i), u != null && s.push(xo(n, u, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Av = /\r\n?/g, $v = /\u0000|\uFFFD/g;
function Bc(e) {
  return (typeof e == "string" ? e : "" + e).replace(Av, `
`).replace($v, "");
}
function li(e, t, n) {
  if (t = Bc(t), Bc(e) !== t && n) throw Error(H(425));
}
function Ki() {
}
var ru = null, ou = null;
function iu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var su = typeof setTimeout == "function" ? setTimeout : void 0, Rv = typeof clearTimeout == "function" ? clearTimeout : void 0, Vc = typeof Promise == "function" ? Promise : void 0, Ov = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vc < "u" ? function(e) {
  return Vc.resolve(null).then(e).catch(Fv);
} : su;
function Fv(e) {
  setTimeout(function() {
    throw e;
  });
}
function pl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), go(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  go(t);
}
function ln(e) {
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
function Uc(e) {
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
var Tr = Math.random().toString(36).slice(2), _t = "__reactFiber$" + Tr, wo = "__reactProps$" + Tr, Ft = "__reactContainer$" + Tr, lu = "__reactEvents$" + Tr, bv = "__reactListeners$" + Tr, Hv = "__reactHandles$" + Tr;
function Sn(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[_t]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Uc(e); e !== null; ) {
        if (n = e[_t]) return n;
        e = Uc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Fo(e) {
  return e = e[_t] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function Ns(e) {
  return e[wo] || null;
}
var uu = [], Qn = -1;
function gn(e) {
  return { current: e };
}
function fe(e) {
  0 > Qn || (e.current = uu[Qn], uu[Qn] = null, Qn--);
}
function ue(e, t) {
  Qn++, uu[Qn] = e.current, e.current = t;
}
var hn = {}, Le = gn(hn), He = gn(!1), Tn = hn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Be(e) {
  return e = e.childContextTypes, e != null;
}
function Qi() {
  fe(He), fe(Le);
}
function Wc(e, t, n) {
  if (Le.current !== hn) throw Error(H(168));
  ue(Le, t), ue(He, n);
}
function Fh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, Cy(e) || "Unknown", o));
  return ye({}, n, r);
}
function Gi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hn, Tn = Le.current, ue(Le, e), ue(He, He.current), !0;
}
function Yc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? (e = Fh(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, fe(He), fe(Le), ue(Le, e)) : fe(He), ue(He, n);
}
var It = null, Ms = !1, gl = !1;
function bh(e) {
  It === null ? It = [e] : It.push(e);
}
function Bv(e) {
  Ms = !0, bh(e);
}
function mn() {
  if (!gl && It !== null) {
    gl = !0;
    var e = 0, t = se;
    try {
      var n = It;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      It = null, Ms = !1;
    } catch (o) {
      throw It !== null && (It = It.slice(e + 1)), fh(ta, mn), o;
    } finally {
      se = t, gl = !1;
    }
  }
  return null;
}
var Gn = [], Zn = 0, Zi = null, qi = 0, et = [], tt = 0, Dn = null, Lt = 1, jt = "";
function vn(e, t) {
  Gn[Zn++] = qi, Gn[Zn++] = Zi, Zi = e, qi = t;
}
function Hh(e, t, n) {
  et[tt++] = Lt, et[tt++] = jt, et[tt++] = Dn, Dn = e;
  var r = Lt;
  e = jt;
  var o = 32 - gt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - gt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Lt = 1 << 32 - gt(t) + o | n << o | r, jt = i + e;
  } else Lt = 1 << i | n << o | r, jt = e;
}
function ca(e) {
  e.return !== null && (vn(e, 1), Hh(e, 1, 0));
}
function fa(e) {
  for (; e === Zi; ) Zi = Gn[--Zn], Gn[Zn] = null, qi = Gn[--Zn], Gn[Zn] = null;
  for (; e === Dn; ) Dn = et[--tt], et[tt] = null, jt = et[--tt], et[tt] = null, Lt = et[--tt], et[tt] = null;
}
var Ke = null, Xe = null, de = !1, ft = null;
function Bh(e, t) {
  var n = nt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Xc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, Xe = ln(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, Xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dn !== null ? { id: Lt, overflow: jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, Xe = null, !0) : !1;
    default:
      return !1;
  }
}
function au(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cu(e) {
  if (de) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Xc(e, t)) {
        if (au(e)) throw Error(H(418));
        t = ln(n.nextSibling);
        var r = Ke;
        t && Xc(e, t) ? Bh(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, Ke = e);
      }
    } else {
      if (au(e)) throw Error(H(418));
      e.flags = e.flags & -4097 | 2, de = !1, Ke = e;
    }
  }
}
function Kc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ke = e;
}
function ui(e) {
  if (e !== Ke) return !1;
  if (!de) return Kc(e), de = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !iu(e.type, e.memoizedProps)), t && (t = Xe)) {
    if (au(e)) throw Vh(), Error(H(418));
    for (; t; ) Bh(e, t), t = ln(t.nextSibling);
  }
  if (Kc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = ln(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Ke ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function Vh() {
  for (var e = Xe; e; ) e = ln(e.nextSibling);
}
function hr() {
  Xe = Ke = null, de = !1;
}
function da(e) {
  ft === null ? ft = [e] : ft.push(e);
}
var Vv = Vt.ReactCurrentBatchConfig;
function Fr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function ai(e, t) {
  throw e = Object.prototype.toString.call(t), Error(H(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Qc(e) {
  var t = e._init;
  return t(e._payload);
}
function Uh(e) {
  function t(p, g) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [g], p.flags |= 16) : h.push(g);
    }
  }
  function n(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), g = g.sibling;
    return null;
  }
  function r(p, g) {
    for (p = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? p.set(g.key, g) : p.set(g.index, g), g = g.sibling;
    return p;
  }
  function o(p, g) {
    return p = fn(p, g), p.index = 0, p.sibling = null, p;
  }
  function i(p, g, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < g ? (p.flags |= 2, g) : h) : (p.flags |= 2, g)) : (p.flags |= 1048576, g);
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, g, h, v) {
    return g === null || g.tag !== 6 ? (g = _l(h, p.mode, v), g.return = p, g) : (g = o(g, h), g.return = p, g);
  }
  function u(p, g, h, v) {
    var _ = h.type;
    return _ === Un ? d(p, g, h.props.children, v, h.key) : g !== null && (g.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Gt && Qc(_) === g.type) ? (v = o(g, h.props), v.ref = Fr(p, g, h), v.return = p, v) : (v = ji(h.type, h.key, h.props, null, p.mode, v), v.ref = Fr(p, g, h), v.return = p, v);
  }
  function a(p, g, h, v) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== h.containerInfo || g.stateNode.implementation !== h.implementation ? (g = kl(h, p.mode, v), g.return = p, g) : (g = o(g, h.children || []), g.return = p, g);
  }
  function d(p, g, h, v, _) {
    return g === null || g.tag !== 7 ? (g = Nn(h, p.mode, v, _), g.return = p, g) : (g = o(g, h), g.return = p, g);
  }
  function c(p, g, h) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return g = _l("" + g, p.mode, h), g.return = p, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case qo:
          return h = ji(g.type, g.key, g.props, null, p.mode, h), h.ref = Fr(p, null, g), h.return = p, h;
        case Vn:
          return g = kl(g, p.mode, h), g.return = p, g;
        case Gt:
          var v = g._init;
          return c(p, v(g._payload), h);
      }
      if (Yr(g) || jr(g)) return g = Nn(g, p.mode, h, null), g.return = p, g;
      ai(p, g);
    }
    return null;
  }
  function f(p, g, h, v) {
    var _ = g !== null ? g.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return _ !== null ? null : l(p, g, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case qo:
          return h.key === _ ? u(p, g, h, v) : null;
        case Vn:
          return h.key === _ ? a(p, g, h, v) : null;
        case Gt:
          return _ = h._init, f(
            p,
            g,
            _(h._payload),
            v
          );
      }
      if (Yr(h) || jr(h)) return _ !== null ? null : d(p, g, h, v, null);
      ai(p, h);
    }
    return null;
  }
  function m(p, g, h, v, _) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return p = p.get(h) || null, l(g, p, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case qo:
          return p = p.get(v.key === null ? h : v.key) || null, u(g, p, v, _);
        case Vn:
          return p = p.get(v.key === null ? h : v.key) || null, a(g, p, v, _);
        case Gt:
          var k = v._init;
          return m(p, g, h, k(v._payload), _);
      }
      if (Yr(v) || jr(v)) return p = p.get(h) || null, d(g, p, v, _, null);
      ai(g, v);
    }
    return null;
  }
  function y(p, g, h, v) {
    for (var _ = null, k = null, E = g, T = g = 0, I = null; E !== null && T < h.length; T++) {
      E.index > T ? (I = E, E = null) : I = E.sibling;
      var R = f(p, E, h[T], v);
      if (R === null) {
        E === null && (E = I);
        break;
      }
      e && E && R.alternate === null && t(p, E), g = i(R, g, T), k === null ? _ = R : k.sibling = R, k = R, E = I;
    }
    if (T === h.length) return n(p, E), de && vn(p, T), _;
    if (E === null) {
      for (; T < h.length; T++) E = c(p, h[T], v), E !== null && (g = i(E, g, T), k === null ? _ = E : k.sibling = E, k = E);
      return de && vn(p, T), _;
    }
    for (E = r(p, E); T < h.length; T++) I = m(E, p, T, h[T], v), I !== null && (e && I.alternate !== null && E.delete(I.key === null ? T : I.key), g = i(I, g, T), k === null ? _ = I : k.sibling = I, k = I);
    return e && E.forEach(function(D) {
      return t(p, D);
    }), de && vn(p, T), _;
  }
  function x(p, g, h, v) {
    var _ = jr(h);
    if (typeof _ != "function") throw Error(H(150));
    if (h = _.call(h), h == null) throw Error(H(151));
    for (var k = _ = null, E = g, T = g = 0, I = null, R = h.next(); E !== null && !R.done; T++, R = h.next()) {
      E.index > T ? (I = E, E = null) : I = E.sibling;
      var D = f(p, E, R.value, v);
      if (D === null) {
        E === null && (E = I);
        break;
      }
      e && E && D.alternate === null && t(p, E), g = i(D, g, T), k === null ? _ = D : k.sibling = D, k = D, E = I;
    }
    if (R.done) return n(
      p,
      E
    ), de && vn(p, T), _;
    if (E === null) {
      for (; !R.done; T++, R = h.next()) R = c(p, R.value, v), R !== null && (g = i(R, g, T), k === null ? _ = R : k.sibling = R, k = R);
      return de && vn(p, T), _;
    }
    for (E = r(p, E); !R.done; T++, R = h.next()) R = m(E, p, T, R.value, v), R !== null && (e && R.alternate !== null && E.delete(R.key === null ? T : R.key), g = i(R, g, T), k === null ? _ = R : k.sibling = R, k = R);
    return e && E.forEach(function(L) {
      return t(p, L);
    }), de && vn(p, T), _;
  }
  function S(p, g, h, v) {
    if (typeof h == "object" && h !== null && h.type === Un && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case qo:
          e: {
            for (var _ = h.key, k = g; k !== null; ) {
              if (k.key === _) {
                if (_ = h.type, _ === Un) {
                  if (k.tag === 7) {
                    n(p, k.sibling), g = o(k, h.props.children), g.return = p, p = g;
                    break e;
                  }
                } else if (k.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Gt && Qc(_) === k.type) {
                  n(p, k.sibling), g = o(k, h.props), g.ref = Fr(p, k, h), g.return = p, p = g;
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            h.type === Un ? (g = Nn(h.props.children, p.mode, v, h.key), g.return = p, p = g) : (v = ji(h.type, h.key, h.props, null, p.mode, v), v.ref = Fr(p, g, h), v.return = p, p = v);
          }
          return s(p);
        case Vn:
          e: {
            for (k = h.key; g !== null; ) {
              if (g.key === k) if (g.tag === 4 && g.stateNode.containerInfo === h.containerInfo && g.stateNode.implementation === h.implementation) {
                n(p, g.sibling), g = o(g, h.children || []), g.return = p, p = g;
                break e;
              } else {
                n(p, g);
                break;
              }
              else t(p, g);
              g = g.sibling;
            }
            g = kl(h, p.mode, v), g.return = p, p = g;
          }
          return s(p);
        case Gt:
          return k = h._init, S(p, g, k(h._payload), v);
      }
      if (Yr(h)) return y(p, g, h, v);
      if (jr(h)) return x(p, g, h, v);
      ai(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, g !== null && g.tag === 6 ? (n(p, g.sibling), g = o(g, h), g.return = p, p = g) : (n(p, g), g = _l(h, p.mode, v), g.return = p, p = g), s(p)) : n(p, g);
  }
  return S;
}
var pr = Uh(!0), Wh = Uh(!1), Ji = gn(null), es = null, qn = null, ha = null;
function pa() {
  ha = qn = es = null;
}
function ga(e) {
  var t = Ji.current;
  fe(Ji), e._currentValue = t;
}
function fu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function lr(e, t) {
  es = e, ha = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function ot(e) {
  var t = e._currentValue;
  if (ha !== e) if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
    if (es === null) throw Error(H(308));
    qn = e, es.dependencies = { lanes: 0, firstContext: e };
  } else qn = qn.next = e;
  return t;
}
var _n = null;
function ma(e) {
  _n === null ? _n = [e] : _n.push(e);
}
function Yh(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ma(t)) : (n.next = o.next, o.next = n), t.interleaved = n, bt(e, r);
}
function bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function ya(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Xh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function $t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, re & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, bt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ma(r)) : (t.next = o.next, o.next = t), r.interleaved = t, bt(e, n);
}
function Pi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, na(e, n);
  }
}
function Gc(e, t) {
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
function ts(e, t, n, r) {
  var o = e.updateQueue;
  Zt = !1;
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
      var f = l.lane, m = l.eventTime;
      if ((r & f) === f) {
        d !== null && (d = d.next = {
          eventTime: m,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, x = l;
          switch (f = t, m = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                c = y.call(m, c, f);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, f = typeof y == "function" ? y.call(m, c, f) : y, f == null) break e;
              c = ye({}, c, f);
              break e;
            case 2:
              Zt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [l] : f.push(l));
      } else m = { eventTime: m, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (a = d = m, u = c) : d = d.next = m, s |= f;
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
function Zc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(H(191, o));
      o.call(r);
    }
  }
}
var bo = {}, Et = gn(bo), So = gn(bo), _o = gn(bo);
function kn(e) {
  if (e === bo) throw Error(H(174));
  return e;
}
function va(e, t) {
  switch (ue(_o, t), ue(So, e), ue(Et, bo), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Wl(t, e);
  }
  fe(Et), ue(Et, t);
}
function gr() {
  fe(Et), fe(So), fe(_o);
}
function Kh(e) {
  kn(_o.current);
  var t = kn(Et.current), n = Wl(t, e.type);
  t !== n && (ue(So, e), ue(Et, n));
}
function xa(e) {
  So.current === e && (fe(Et), fe(So));
}
var ge = gn(0);
function ns(e) {
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
var ml = [];
function wa() {
  for (var e = 0; e < ml.length; e++) ml[e]._workInProgressVersionPrimary = null;
  ml.length = 0;
}
var Ti = Vt.ReactCurrentDispatcher, yl = Vt.ReactCurrentBatchConfig, zn = 0, me = null, _e = null, Ee = null, rs = !1, no = !1, ko = 0, Uv = 0;
function De() {
  throw Error(H(321));
}
function Sa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return !1;
  return !0;
}
function _a(e, t, n, r, o, i) {
  if (zn = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ti.current = e === null || e.memoizedState === null ? Kv : Qv, e = n(r, o), no) {
    i = 0;
    do {
      if (no = !1, ko = 0, 25 <= i) throw Error(H(301));
      i += 1, Ee = _e = null, t.updateQueue = null, Ti.current = Gv, e = n(r, o);
    } while (no);
  }
  if (Ti.current = os, t = _e !== null && _e.next !== null, zn = 0, Ee = _e = me = null, rs = !1, t) throw Error(H(300));
  return e;
}
function ka() {
  var e = ko !== 0;
  return ko = 0, e;
}
function wt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ee === null ? me.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
}
function it() {
  if (_e === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Ee === null ? me.memoizedState : Ee.next;
  if (t !== null) Ee = t, _e = e;
  else {
    if (e === null) throw Error(H(310));
    _e = e, e = { memoizedState: _e.memoizedState, baseState: _e.baseState, baseQueue: _e.baseQueue, queue: _e.queue, next: null }, Ee === null ? me.memoizedState = Ee = e : Ee = Ee.next = e;
  }
  return Ee;
}
function Eo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vl(e) {
  var t = it(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = _e, o = r.baseQueue, i = n.pending;
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
      if ((zn & d) === d) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
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
function xl(e) {
  var t = it(), n = t.queue;
  if (n === null) throw Error(H(311));
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
function Qh() {
}
function Gh(e, t) {
  var n = me, r = it(), o = t(), i = !yt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Fe = !0), r = r.queue, Ea(Jh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ee !== null && Ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, Co(9, qh.bind(null, n, r, o, t), void 0, null), Ce === null) throw Error(H(349));
    zn & 30 || Zh(n, t, o);
  }
  return o;
}
function Zh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function qh(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ep(t) && tp(e);
}
function Jh(e, t, n) {
  return n(function() {
    ep(t) && tp(e);
  });
}
function ep(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function tp(e) {
  var t = bt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function qc(e) {
  var t = wt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xv.bind(null, me, e), [t.memoizedState, e];
}
function Co(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function np() {
  return it().memoizedState;
}
function Di(e, t, n, r) {
  var o = wt();
  me.flags |= e, o.memoizedState = Co(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ps(e, t, n, r) {
  var o = it();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (_e !== null) {
    var s = _e.memoizedState;
    if (i = s.destroy, r !== null && Sa(r, s.deps)) {
      o.memoizedState = Co(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = Co(1 | t, n, i, r);
}
function Jc(e, t) {
  return Di(8390656, 8, e, t);
}
function Ea(e, t) {
  return Ps(2048, 8, e, t);
}
function rp(e, t) {
  return Ps(4, 2, e, t);
}
function op(e, t) {
  return Ps(4, 4, e, t);
}
function ip(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function sp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ps(4, 4, ip.bind(null, t, e), n);
}
function Ca() {
}
function lp(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function up(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ap(e, t, n) {
  return zn & 21 ? (yt(n, t) || (n = ph(), me.lanes |= n, In |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function Wv(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = yl.transition;
  yl.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, yl.transition = r;
  }
}
function cp() {
  return it().memoizedState;
}
function Yv(e, t, n) {
  var r = cn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, fp(e)) dp(t, n);
  else if (n = Yh(e, t, n, r), n !== null) {
    var o = Ae();
    mt(n, e, r, o), hp(n, t, r);
  }
}
function Xv(e, t, n) {
  var r = cn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fp(e)) dp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, yt(l, s)) {
        var u = t.interleaved;
        u === null ? (o.next = o, ma(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Yh(e, t, o, r), n !== null && (o = Ae(), mt(n, e, r, o), hp(n, t, r));
  }
}
function fp(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function dp(e, t) {
  no = rs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function hp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, na(e, n);
  }
}
var os = { readContext: ot, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, Kv = { readContext: ot, useCallback: function(e, t) {
  return wt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ot, useEffect: Jc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Di(
    4194308,
    4,
    ip.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Di(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Di(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = wt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = wt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Yv.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = wt();
  return e = { current: e }, t.memoizedState = e;
}, useState: qc, useDebugValue: Ca, useDeferredValue: function(e) {
  return wt().memoizedState = e;
}, useTransition: function() {
  var e = qc(!1), t = e[0];
  return e = Wv.bind(null, e[1]), wt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = wt();
  if (de) {
    if (n === void 0) throw Error(H(407));
    n = n();
  } else {
    if (n = t(), Ce === null) throw Error(H(349));
    zn & 30 || Zh(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Jc(Jh.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Co(9, qh.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = wt(), t = Ce.identifierPrefix;
  if (de) {
    var n = jt, r = Lt;
    n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ko++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Uv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Qv = {
  readContext: ot,
  useCallback: lp,
  useContext: ot,
  useEffect: Ea,
  useImperativeHandle: sp,
  useInsertionEffect: rp,
  useLayoutEffect: op,
  useMemo: up,
  useReducer: vl,
  useRef: np,
  useState: function() {
    return vl(Eo);
  },
  useDebugValue: Ca,
  useDeferredValue: function(e) {
    var t = it();
    return ap(t, _e.memoizedState, e);
  },
  useTransition: function() {
    var e = vl(Eo)[0], t = it().memoizedState;
    return [e, t];
  },
  useMutableSource: Qh,
  useSyncExternalStore: Gh,
  useId: cp,
  unstable_isNewReconciler: !1
}, Gv = { readContext: ot, useCallback: lp, useContext: ot, useEffect: Ea, useImperativeHandle: sp, useInsertionEffect: rp, useLayoutEffect: op, useMemo: up, useReducer: xl, useRef: np, useState: function() {
  return xl(Eo);
}, useDebugValue: Ca, useDeferredValue: function(e) {
  var t = it();
  return _e === null ? t.memoizedState = e : ap(t, _e.memoizedState, e);
}, useTransition: function() {
  var e = xl(Eo)[0], t = it().memoizedState;
  return [e, t];
}, useMutableSource: Qh, useSyncExternalStore: Gh, useId: cp, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ye({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function du(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ts = { isMounted: function(e) {
  return (e = e._reactInternals) ? Fn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ae(), o = cn(e), i = $t(r, o);
  i.payload = t, n != null && (i.callback = n), t = un(e, i, o), t !== null && (mt(t, e, o, r), Pi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ae(), o = cn(e), i = $t(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = un(e, i, o), t !== null && (mt(t, e, o, r), Pi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ae(), r = cn(e), o = $t(n, r);
  o.tag = 2, t != null && (o.callback = t), t = un(e, o, r), t !== null && (mt(t, e, r, n), Pi(t, e, r));
} };
function ef(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !yo(n, r) || !yo(o, i) : !0;
}
function pp(e, t, n) {
  var r = !1, o = hn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ot(i) : (o = Be(t) ? Tn : Le.current, r = t.contextTypes, i = (r = r != null) ? dr(e, o) : hn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ts, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function tf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ts.enqueueReplaceState(t, t.state, null);
}
function hu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ya(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ot(i) : (i = Be(t) ? Tn : Le.current, o.context = dr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (du(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ts.enqueueReplaceState(o, o.state, null), ts(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function mr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ey(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Zv = typeof WeakMap == "function" ? WeakMap : Map;
function gp(e, t, n) {
  n = $t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ss || (ss = !0, Eu = r), pu(e, t);
  }, n;
}
function mp(e, t, n) {
  n = $t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      pu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    pu(e, t), typeof r != "function" && (an === null ? an = /* @__PURE__ */ new Set([this]) : an.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function nf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zv();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = fx.bind(null, e, t, n), t.then(e, e));
}
function rf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function of(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e);
}
var qv = Vt.ReactCurrentOwner, Fe = !1;
function je(e, t, n, r) {
  t.child = e === null ? Wh(t, null, n, r) : pr(t, e.child, n, r);
}
function sf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return lr(t, o), r = _a(e, t, n, r, i, o), n = ka(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ht(e, t, o)) : (de && n && ca(t), t.flags |= 1, je(e, t, r, o), t.child);
}
function lf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !La(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, yp(e, t, i, r, o)) : (e = ji(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : yo, n(s, r) && e.ref === t.ref) return Ht(e, t, o);
  }
  return t.flags |= 1, e = fn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function yp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (yo(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, Ht(e, t, o);
  }
  return gu(e, t, n, r, o);
}
function vp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(er, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(er, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ue(er, We), We |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ue(er, We), We |= r;
  return je(e, t, o, n), t.child;
}
function xp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function gu(e, t, n, r, o) {
  var i = Be(n) ? Tn : Le.current;
  return i = dr(t, i), lr(t, o), n = _a(e, t, n, r, i, o), r = ka(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ht(e, t, o)) : (de && r && ca(t), t.flags |= 1, je(e, t, n, o), t.child);
}
function uf(e, t, n, r, o) {
  if (Be(n)) {
    var i = !0;
    Gi(t);
  } else i = !1;
  if (lr(t, o), t.stateNode === null) zi(e, t), pp(t, n, r), hu(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var u = s.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = ot(a) : (a = Be(n) ? Tn : Le.current, a = dr(t, a));
    var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== a) && tf(t, s, r, a), Zt = !1;
    var f = t.memoizedState;
    s.state = f, ts(t, r, s, o), u = t.memoizedState, l !== r || f !== u || He.current || Zt ? (typeof d == "function" && (du(t, n, d, r), u = t.memoizedState), (l = Zt || ef(t, n, l, r, f, u, a)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = a, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Xh(e, t), l = t.memoizedProps, a = t.type === t.elementType ? l : ut(t.type, l), s.props = a, c = t.pendingProps, f = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = ot(u) : (u = Be(n) ? Tn : Le.current, u = dr(t, u));
    var m = n.getDerivedStateFromProps;
    (d = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== c || f !== u) && tf(t, s, r, u), Zt = !1, f = t.memoizedState, s.state = f, ts(t, r, s, o);
    var y = t.memoizedState;
    l !== c || f !== y || He.current || Zt ? (typeof m == "function" && (du(t, n, m, r), y = t.memoizedState), (a = Zt || ef(t, n, a, r, f, y, u) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = u, r = a) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return mu(e, t, n, r, i, o);
}
function mu(e, t, n, r, o, i) {
  xp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Yc(t, n, !1), Ht(e, t, i);
  r = t.stateNode, qv.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = pr(t, e.child, null, i), t.child = pr(t, null, l, i)) : je(e, t, l, i), t.memoizedState = r.state, o && Yc(t, n, !0), t.child;
}
function wp(e) {
  var t = e.stateNode;
  t.pendingContext ? Wc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wc(e, t.context, !1), va(e, t.containerInfo);
}
function af(e, t, n, r, o) {
  return hr(), da(o), t.flags |= 256, je(e, t, n, r), t.child;
}
var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sp(e, t, n) {
  var r = t.pendingProps, o = ge.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ue(ge, o & 1), e === null)
    return cu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Is(s, r, 0, null), e = Nn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = vu(n), t.memoizedState = yu, e) : Na(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Jv(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = fn(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = fn(l, i) : (i = Nn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? vu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = yu, r;
  }
  return i = e.child, e = i.sibling, r = fn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Na(e, t) {
  return t = Is({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ci(e, t, n, r) {
  return r !== null && da(r), pr(t, e.child, null, n), e = Na(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Jv(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = wl(Error(H(422))), ci(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Is({ mode: "visible", children: r.children }, o, 0, null), i = Nn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && pr(t, e.child, null, s), t.child.memoizedState = vu(s), t.memoizedState = yu, i);
  if (!(t.mode & 1)) return ci(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(H(419)), r = wl(i, r, void 0), ci(e, t, s, r);
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, bt(e, o), mt(r, e, o, -1));
    }
    return Ia(), r = wl(Error(H(421))), ci(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dx.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Xe = ln(o.nextSibling), Ke = t, de = !0, ft = null, e !== null && (et[tt++] = Lt, et[tt++] = jt, et[tt++] = Dn, Lt = e.id, jt = e.overflow, Dn = t), t = Na(t, r.children), t.flags |= 4096, t);
}
function cf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fu(e.return, t, n);
}
function Sl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function _p(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (je(e, t, r.children, n), r = ge.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && cf(e, n, t);
      else if (e.tag === 19) cf(e, n, t);
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
  if (ue(ge, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ns(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Sl(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ns(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Sl(t, !0, n, null, i);
      break;
    case "together":
      Sl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function zi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ht(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = fn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ex(e, t, n) {
  switch (t.tag) {
    case 3:
      wp(t), hr();
      break;
    case 5:
      Kh(t);
      break;
    case 1:
      Be(t.type) && Gi(t);
      break;
    case 4:
      va(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ue(Ji, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ue(ge, ge.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sp(e, t, n) : (ue(ge, ge.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
      ue(ge, ge.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return _p(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ue(ge, ge.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, vp(e, t, n);
  }
  return Ht(e, t, n);
}
var kp, xu, Ep, Cp;
kp = function(e, t) {
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
xu = function() {
};
Ep = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, kn(Et.current);
    var i = null;
    switch (n) {
      case "input":
        o = Hl(e, o), r = Hl(e, r), i = [];
        break;
      case "select":
        o = ye({}, o, { value: void 0 }), r = ye({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Ul(e, o), r = Ul(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ki);
    }
    Yl(n, r);
    var s;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var l = o[a];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ao.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (l = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== l && (u != null || l != null)) if (a === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (ao.hasOwnProperty(a) ? (u != null && a === "onScroll" && ce("scroll", e), i || l === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Cp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function br(e, t) {
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
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function tx(e, t, n) {
  var r = t.pendingProps;
  switch (fa(t), t.tag) {
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
      return ze(t), null;
    case 1:
      return Be(t.type) && Qi(), ze(t), null;
    case 3:
      return r = t.stateNode, gr(), fe(He), fe(Le), wa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Mu(ft), ft = null))), xu(e, t), ze(t), null;
    case 5:
      xa(t);
      var o = kn(_o.current);
      if (n = t.type, e !== null && t.stateNode != null) Ep(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return ze(t), null;
        }
        if (e = kn(Et.current), ui(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[_t] = t, r[wo] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Kr.length; o++) ce(Kr[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce(
                "error",
                r
              ), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              vc(r, i), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ce("invalid", r);
              break;
            case "textarea":
              wc(r, i), ce("invalid", r);
          }
          Yl(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && li(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && li(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : ao.hasOwnProperty(s) && l != null && s === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              Jo(r), xc(r, i, !0);
              break;
            case "textarea":
              Jo(r), Sc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ki);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Jd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[_t] = t, e[wo] = r, kp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Xl(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Kr.length; o++) ce(Kr[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ce(
                  "error",
                  e
                ), ce("load", e), o = r;
                break;
              case "details":
                ce("toggle", e), o = r;
                break;
              case "input":
                vc(e, r), o = Hl(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ye({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                wc(e, r), o = Ul(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            Yl(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "style" ? nh(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && eh(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && co(e, u) : typeof u == "number" && co(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ao.hasOwnProperty(i) ? u != null && i === "onScroll" && ce("scroll", e) : u != null && Gu(e, i, u, s));
            }
            switch (n) {
              case "input":
                Jo(e), xc(e, r, !1);
                break;
              case "textarea":
                Jo(e), Sc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
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
                typeof o.onClick == "function" && (e.onclick = Ki);
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
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) Cp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (n = kn(_o.current), kn(Et.current), ui(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (i = r.nodeValue !== n) && (e = Ke, e !== null)) switch (e.tag) {
            case 3:
              li(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && li(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
      }
      return ze(t), null;
    case 13:
      if (fe(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (de && Xe !== null && t.mode & 1 && !(t.flags & 128)) Vh(), hr(), t.flags |= 98560, i = !1;
        else if (i = ui(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[_t] = t;
          } else hr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ze(t), i = !1;
        } else ft !== null && (Mu(ft), ft = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ge.current & 1 ? ke === 0 && (ke = 3) : Ia())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
    case 4:
      return gr(), xu(e, t), e === null && vo(t.stateNode.containerInfo), ze(t), null;
    case 10:
      return ga(t.type._context), ze(t), null;
    case 17:
      return Be(t.type) && Qi(), ze(t), null;
    case 19:
      if (fe(ge), i = t.memoizedState, i === null) return ze(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) br(i, !1);
      else {
        if (ke !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ns(e), s !== null) {
            for (t.flags |= 128, br(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ue(ge, ge.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && xe() > yr && (t.flags |= 128, r = !0, br(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ns(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), br(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !de) return ze(t), null;
        } else 2 * xe() - i.renderingStartTime > yr && n !== 1073741824 && (t.flags |= 128, r = !0, br(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = xe(), t.sibling = null, n = ge.current, ue(ge, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
    case 22:
    case 23:
      return za(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function nx(e, t) {
  switch (fa(t), t.tag) {
    case 1:
      return Be(t.type) && Qi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gr(), fe(He), fe(Le), wa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return xa(t), null;
    case 13:
      if (fe(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(H(340));
        hr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return fe(ge), null;
    case 4:
      return gr(), null;
    case 10:
      return ga(t.type._context), null;
    case 22:
    case 23:
      return za(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fi = !1, Ie = !1, rx = typeof WeakSet == "function" ? WeakSet : Set, W = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ve(e, t, r);
  }
  else n.current = null;
}
function wu(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var ff = !1;
function ox(e, t) {
  if (ru = Wi, e = Dh(), aa(e)) {
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
          for (var m; c !== n || o !== 0 && c.nodeType !== 3 || (l = s + o), c !== i || r !== 0 && c.nodeType !== 3 || (u = s + r), c.nodeType === 3 && (s += c.nodeValue.length), (m = c.firstChild) !== null; )
            f = c, c = m;
          for (; ; ) {
            if (c === e) break t;
            if (f === n && ++a === o && (l = s), f === i && ++d === r && (u = s), (m = c.nextSibling) !== null) break;
            c = f, f = c.parentNode;
          }
          c = m;
        }
        n = l === -1 || u === -1 ? null : { start: l, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ou = { focusedElem: e, selectionRange: n }, Wi = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
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
            var x = y.memoizedProps, S = y.memoizedState, p = t.stateNode, g = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ut(t.type, x), S);
            p.__reactInternalSnapshotBeforeUpdate = g;
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
          throw Error(H(163));
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
  return y = ff, ff = !1, y;
}
function ro(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && wu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ds(e, t) {
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
function Su(e) {
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
function Np(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Np(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[wo], delete t[lu], delete t[bv], delete t[Hv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Mp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function df(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ki));
  else if (r !== 4 && (e = e.child, e !== null)) for (_u(e, t, n), e = e.sibling; e !== null; ) _u(e, t, n), e = e.sibling;
}
function ku(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ku(e, t, n), e = e.sibling; e !== null; ) ku(e, t, n), e = e.sibling;
}
var Ne = null, at = !1;
function Xt(e, t, n) {
  for (n = n.child; n !== null; ) Pp(e, t, n), n = n.sibling;
}
function Pp(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function") try {
    kt.onCommitFiberUnmount(_s, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ie || Jn(n, t);
    case 6:
      var r = Ne, o = at;
      Ne = null, Xt(e, t, n), Ne = r, at = o, Ne !== null && (at ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null && (at ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? pl(e.parentNode, n) : e.nodeType === 1 && pl(e, n), go(e)) : pl(Ne, n.stateNode));
      break;
    case 4:
      r = Ne, o = at, Ne = n.stateNode.containerInfo, at = !0, Xt(e, t, n), Ne = r, at = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && wu(n, t, s), o = o.next;
        } while (o !== r);
      }
      Xt(e, t, n);
      break;
    case 1:
      if (!Ie && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        ve(n, t, l);
      }
      Xt(e, t, n);
      break;
    case 21:
      Xt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, Xt(e, t, n), Ie = r) : Xt(e, t, n);
      break;
    default:
      Xt(e, t, n);
  }
}
function hf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rx()), t.forEach(function(r) {
      var o = hx.bind(null, e, r);
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
      if (Ne === null) throw Error(H(160));
      Pp(i, s, o), Ne = null, at = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      ve(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Tp(t, e), t = t.sibling;
}
function Tp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (st(t, e), xt(e), r & 4) {
        try {
          ro(3, e, e.return), Ds(3, e);
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
          co(o, "");
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Zd(o, i), Xl(l, s);
          var a = Xl(l, i);
          for (s = 0; s < u.length; s += 2) {
            var d = u[s], c = u[s + 1];
            d === "style" ? nh(o, c) : d === "dangerouslySetInnerHTML" ? eh(o, c) : d === "children" ? co(o, c) : Gu(o, d, c, a);
          }
          switch (l) {
            case "input":
              Bl(o, i);
              break;
            case "textarea":
              qd(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var m = i.value;
              m != null ? rr(o, !!i.multiple, m, !1) : f !== !!i.multiple && (i.defaultValue != null ? rr(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : rr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[wo] = i;
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      break;
    case 6:
      if (st(t, e), xt(e), r & 4) {
        if (e.stateNode === null) throw Error(H(162));
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
        go(t.containerInfo);
      } catch (x) {
        ve(e, e.return, x);
      }
      break;
    case 4:
      st(t, e), xt(e);
      break;
    case 13:
      st(t, e), xt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ta = xe())), r & 4 && hf(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (a = Ie) || d, st(t, e), Ie = a) : st(t, e), xt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1) for (W = e, d = e.child; d !== null; ) {
          for (c = W = d; W !== null; ) {
            switch (f = W, m = f.child, f.tag) {
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
                  gf(c);
                  continue;
                }
            }
            m !== null ? (m.return = f, W = m) : gf(c);
          }
          d = d.sibling;
        }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                o = c.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = c.stateNode, u = c.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = th("display", s));
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
      st(t, e), xt(e), r & 4 && hf(e);
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
          if (Mp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (co(o, ""), r.flags &= -33);
          var i = df(e);
          ku(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = df(e);
          _u(e, l, s);
          break;
        default:
          throw Error(H(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ix(e, t, n) {
  W = e, Dp(e);
}
function Dp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || fi;
      if (!s) {
        var l = o.alternate, u = l !== null && l.memoizedState !== null || Ie;
        l = fi;
        var a = Ie;
        if (fi = s, (Ie = u) && !a) for (W = o; W !== null; ) s = W, u = s.child, s.tag === 22 && s.memoizedState !== null ? mf(o) : u !== null ? (u.return = s, W = u) : mf(o);
        for (; i !== null; ) W = i, Dp(i), i = i.sibling;
        W = o, fi = l, Ie = a;
      }
      pf(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, W = i) : pf(e);
  }
}
function pf(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ie || Ds(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Zc(t, i, r);
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
              Zc(t, s, n);
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
                  c !== null && go(c);
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
            throw Error(H(163));
        }
        Ie || t.flags & 512 && Su(t);
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
function gf(e) {
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
function mf(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ds(4, t);
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
            Su(t);
          } catch (u) {
            ve(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Su(t);
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
var sx = Math.ceil, is = Vt.ReactCurrentDispatcher, Ma = Vt.ReactCurrentOwner, rt = Vt.ReactCurrentBatchConfig, re = 0, Ce = null, we = null, Me = 0, We = 0, er = gn(0), ke = 0, No = null, In = 0, zs = 0, Pa = 0, oo = null, Oe = null, Ta = 0, yr = 1 / 0, zt = null, ss = !1, Eu = null, an = null, di = !1, nn = null, ls = 0, io = 0, Cu = null, Ii = -1, Li = 0;
function Ae() {
  return re & 6 ? xe() : Ii !== -1 ? Ii : Ii = xe();
}
function cn(e) {
  return e.mode & 1 ? re & 2 && Me !== 0 ? Me & -Me : Vv.transition !== null ? (Li === 0 && (Li = ph()), Li) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sh(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < io) throw io = 0, Cu = null, Error(H(185));
  Ro(e, n, r), (!(re & 2) || e !== Ce) && (e === Ce && (!(re & 2) && (zs |= n), ke === 4 && Jt(e, Me)), Ve(e, r), n === 1 && re === 0 && !(t.mode & 1) && (yr = xe() + 500, Ms && mn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Vy(e, t);
  var r = Ui(e, e === Ce ? Me : 0);
  if (r === 0) n !== null && Ec(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ec(n), t === 1) e.tag === 0 ? Bv(yf.bind(null, e)) : bh(yf.bind(null, e)), Ov(function() {
      !(re & 6) && mn();
    }), n = null;
    else {
      switch (gh(r)) {
        case 1:
          n = ta;
          break;
        case 4:
          n = dh;
          break;
        case 16:
          n = Vi;
          break;
        case 536870912:
          n = hh;
          break;
        default:
          n = Vi;
      }
      n = Op(n, zp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function zp(e, t) {
  if (Ii = -1, Li = 0, re & 6) throw Error(H(327));
  var n = e.callbackNode;
  if (ur() && e.callbackNode !== n) return null;
  var r = Ui(e, e === Ce ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = us(e, r);
  else {
    t = r;
    var o = re;
    re |= 2;
    var i = Lp();
    (Ce !== e || Me !== t) && (zt = null, yr = xe() + 500, Cn(e, t));
    do
      try {
        ax();
        break;
      } catch (l) {
        Ip(e, l);
      }
    while (!0);
    pa(), is.current = i, re = o, we !== null ? t = 0 : (Ce = null, Me = 0, t = ke);
  }
  if (t !== 0) {
    if (t === 2 && (o = ql(e), o !== 0 && (r = o, t = Nu(e, o))), t === 1) throw n = No, Cn(e, 0), Jt(e, r), Ve(e, xe()), n;
    if (t === 6) Jt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !lx(o) && (t = us(e, r), t === 2 && (i = ql(e), i !== 0 && (r = i, t = Nu(e, i))), t === 1)) throw n = No, Cn(e, 0), Jt(e, r), Ve(e, xe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          xn(e, Oe, zt);
          break;
        case 3:
          if (Jt(e, r), (r & 130023424) === r && (t = Ta + 500 - xe(), 10 < t)) {
            if (Ui(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ae(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = su(xn.bind(null, e, Oe, zt), t);
            break;
          }
          xn(e, Oe, zt);
          break;
        case 4:
          if (Jt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - gt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sx(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = su(xn.bind(null, e, Oe, zt), r);
            break;
          }
          xn(e, Oe, zt);
          break;
        case 5:
          xn(e, Oe, zt);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return Ve(e, xe()), e.callbackNode === n ? zp.bind(null, e) : null;
}
function Nu(e, t) {
  var n = oo;
  return e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), e = us(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && Mu(t)), e;
}
function Mu(e) {
  Oe === null ? Oe = e : Oe.push.apply(Oe, e);
}
function lx(e) {
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
function Jt(e, t) {
  for (t &= ~Pa, t &= ~zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - gt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function yf(e) {
  if (re & 6) throw Error(H(327));
  ur();
  var t = Ui(e, 0);
  if (!(t & 1)) return Ve(e, xe()), null;
  var n = us(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ql(e);
    r !== 0 && (t = r, n = Nu(e, r));
  }
  if (n === 1) throw n = No, Cn(e, 0), Jt(e, t), Ve(e, xe()), n;
  if (n === 6) throw Error(H(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, xn(e, Oe, zt), Ve(e, xe()), null;
}
function Da(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    re = n, re === 0 && (yr = xe() + 500, Ms && mn());
  }
}
function Ln(e) {
  nn !== null && nn.tag === 0 && !(re & 6) && ur();
  var t = re;
  re |= 1;
  var n = rt.transition, r = se;
  try {
    if (rt.transition = null, se = 1, e) return e();
  } finally {
    se = r, rt.transition = n, re = t, !(re & 6) && mn();
  }
}
function za() {
  We = er.current, fe(er);
}
function Cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Rv(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (fa(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Qi();
        break;
      case 3:
        gr(), fe(He), fe(Le), wa();
        break;
      case 5:
        xa(r);
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
        ga(r.type._context);
        break;
      case 22:
      case 23:
        za();
    }
    n = n.return;
  }
  if (Ce = e, we = e = fn(e.current, null), Me = We = t, ke = 0, No = null, Pa = zs = In = 0, Oe = oo = null, _n !== null) {
    for (t = 0; t < _n.length; t++) if (n = _n[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    _n = null;
  }
  return e;
}
function Ip(e, t) {
  do {
    var n = we;
    try {
      if (pa(), Ti.current = os, rs) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        rs = !1;
      }
      if (zn = 0, Ee = _e = me = null, no = !1, ko = 0, Ma.current = null, n === null || n.return === null) {
        ke = 1, No = t, we = null;
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
          var m = rf(s);
          if (m !== null) {
            m.flags &= -257, of(m, s, l, i, t), m.mode & 1 && nf(i, a, t), t = m, u = a;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              nf(i, a, t), Ia();
              break e;
            }
            u = Error(H(426));
          }
        } else if (de && l.mode & 1) {
          var S = rf(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), of(S, s, l, i, t), da(mr(u, l));
            break e;
          }
        }
        i = u = mr(u, l), ke !== 4 && (ke = 2), oo === null ? oo = [i] : oo.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = gp(i, u, t);
              Gc(i, p);
              break e;
            case 1:
              l = u;
              var g = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (an === null || !an.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = mp(i, l, t);
                Gc(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ap(n);
    } catch (_) {
      t = _, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lp() {
  var e = is.current;
  return is.current = os, e === null ? os : e;
}
function Ia() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Ce === null || !(In & 268435455) && !(zs & 268435455) || Jt(Ce, Me);
}
function us(e, t) {
  var n = re;
  re |= 2;
  var r = Lp();
  (Ce !== e || Me !== t) && (zt = null, Cn(e, t));
  do
    try {
      ux();
      break;
    } catch (o) {
      Ip(e, o);
    }
  while (!0);
  if (pa(), re = n, is.current = r, we !== null) throw Error(H(261));
  return Ce = null, Me = 0, ke;
}
function ux() {
  for (; we !== null; ) jp(we);
}
function ax() {
  for (; we !== null && !jy(); ) jp(we);
}
function jp(e) {
  var t = Rp(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Ap(e) : we = t, Ma.current = null;
}
function Ap(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = nx(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ke = 6, we = null;
        return;
      }
    } else if (n = tx(n, t, We), n !== null) {
      we = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function xn(e, t, n) {
  var r = se, o = rt.transition;
  try {
    rt.transition = null, se = 1, cx(e, t, n, r);
  } finally {
    rt.transition = o, se = r;
  }
  return null;
}
function cx(e, t, n, r) {
  do
    ur();
  while (nn !== null);
  if (re & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(H(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Uy(e, i), e === Ce && (we = Ce = null, Me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || di || (di = !0, Op(Vi, function() {
    return ur(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = rt.transition, rt.transition = null;
    var s = se;
    se = 1;
    var l = re;
    re |= 4, Ma.current = null, ox(e, n), Tp(n, e), Dv(ou), Wi = !!ru, ou = ru = null, e.current = n, ix(n), Ay(), re = l, se = s, rt.transition = i;
  } else e.current = n;
  if (di && (di = !1, nn = e, ls = o), i = e.pendingLanes, i === 0 && (an = null), Oy(n.stateNode), Ve(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ss) throw ss = !1, e = Eu, Eu = null, e;
  return ls & 1 && e.tag !== 0 && ur(), i = e.pendingLanes, i & 1 ? e === Cu ? io++ : (io = 0, Cu = e) : io = 0, mn(), null;
}
function ur() {
  if (nn !== null) {
    var e = gh(ls), t = rt.transition, n = se;
    try {
      if (rt.transition = null, se = 16 > e ? 16 : e, nn === null) var r = !1;
      else {
        if (e = nn, nn = null, ls = 0, re & 6) throw Error(H(331));
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
                    var f = d.sibling, m = d.return;
                    if (Np(d), d === a) {
                      W = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = m, W = f;
                      break;
                    }
                    W = m;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var S = x.sibling;
                    x.sibling = null, x = S;
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
        var g = e.current;
        for (W = g; W !== null; ) {
          s = W;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) h.return = s, W = h;
          else e: for (s = g; W !== null; ) {
            if (l = W, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ds(9, l);
              }
            } catch (_) {
              ve(l, l.return, _);
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
        if (re = o, mn(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
          kt.onPostCommitFiberRoot(_s, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      se = n, rt.transition = t;
    }
  }
  return !1;
}
function vf(e, t, n) {
  t = mr(n, t), t = gp(e, t, 1), e = un(e, t, 1), t = Ae(), e !== null && (Ro(e, 1, t), Ve(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) vf(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      vf(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) {
        e = mr(n, e), e = mp(t, e, 1), t = un(t, e, 1), e = Ae(), t !== null && (Ro(t, 1, e), Ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function fx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Me & n) === n && (ke === 4 || ke === 3 && (Me & 130023424) === Me && 500 > xe() - Ta ? Cn(e, 0) : Pa |= n), Ve(e, t);
}
function $p(e, t) {
  t === 0 && (e.mode & 1 ? (t = ni, ni <<= 1, !(ni & 130023424) && (ni = 4194304)) : t = 1);
  var n = Ae();
  e = bt(e, t), e !== null && (Ro(e, t, n), Ve(e, n));
}
function dx(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), $p(e, n);
}
function hx(e, t) {
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
      throw Error(H(314));
  }
  r !== null && r.delete(t), $p(e, n);
}
var Rp;
Rp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || He.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, ex(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, de && t.flags & 1048576 && Hh(t, qi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zi(e, t), e = t.pendingProps;
      var o = dr(t, Le.current);
      lr(t, n), o = _a(null, t, r, e, o, n);
      var i = ka();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (i = !0, Gi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ya(t), o.updater = Ts, t.stateNode = o, o._reactInternals = t, hu(t, r, e, n), t = mu(null, t, r, !0, i, n)) : (t.tag = 0, de && i && ca(t), je(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = gx(r), e = ut(r, e), o) {
          case 0:
            t = gu(null, t, r, e, n);
            break e;
          case 1:
            t = uf(null, t, r, e, n);
            break e;
          case 11:
            t = sf(null, t, r, e, n);
            break e;
          case 14:
            t = lf(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(H(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), gu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), uf(e, t, r, o, n);
    case 3:
      e: {
        if (wp(t), e === null) throw Error(H(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Xh(e, t), ts(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = mr(Error(H(423)), t), t = af(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = mr(Error(H(424)), t), t = af(e, t, r, n, o);
          break e;
        } else for (Xe = ln(t.stateNode.containerInfo.firstChild), Ke = t, de = !0, ft = null, n = Wh(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hr(), r === o) {
            t = Ht(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Kh(t), e === null && cu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, iu(r, o) ? s = null : i !== null && iu(r, i) && (t.flags |= 32), xp(e, t), je(e, t, s, n), t.child;
    case 6:
      return e === null && cu(t), null;
    case 13:
      return Sp(e, t, n);
    case 4:
      return va(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pr(t, null, r, n) : je(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), sf(e, t, r, o, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ue(Ji, r._currentValue), r._currentValue = s, i !== null) if (yt(i.value, s)) {
          if (i.children === o.children && !He.current) {
            t = Ht(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var u = l.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = $t(-1, n & -n), u.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var d = a.pending;
                    d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), fu(
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
            if (s = i.return, s === null) throw Error(H(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), fu(s, n, t), s = i.sibling;
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
        je(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, lr(t, n), o = ot(o), r = r(o), t.flags |= 1, je(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), lf(e, t, r, o, n);
    case 15:
      return yp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), zi(e, t), t.tag = 1, Be(r) ? (e = !0, Gi(t)) : e = !1, lr(t, n), pp(t, r, o), hu(t, r, o, n), mu(null, t, r, !0, e, n);
    case 19:
      return _p(e, t, n);
    case 22:
      return vp(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function Op(e, t) {
  return fh(e, t);
}
function px(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function nt(e, t, n, r) {
  return new px(e, t, n, r);
}
function La(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function gx(e) {
  if (typeof e == "function") return La(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === qu) return 11;
    if (e === Ju) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ji(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") La(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Un:
      return Nn(n.children, o, i, t);
    case Zu:
      s = 8, o |= 8;
      break;
    case Rl:
      return e = nt(12, n, t, o | 2), e.elementType = Rl, e.lanes = i, e;
    case Ol:
      return e = nt(13, n, t, o), e.elementType = Ol, e.lanes = i, e;
    case Fl:
      return e = nt(19, n, t, o), e.elementType = Fl, e.lanes = i, e;
    case Kd:
      return Is(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Yd:
          s = 10;
          break e;
        case Xd:
          s = 9;
          break e;
        case qu:
          s = 11;
          break e;
        case Ju:
          s = 14;
          break e;
        case Gt:
          s = 16, r = null;
          break e;
      }
      throw Error(H(130, e == null ? e : typeof e, ""));
  }
  return t = nt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Nn(e, t, n, r) {
  return e = nt(7, e, r, t), e.lanes = n, e;
}
function Is(e, t, n, r) {
  return e = nt(22, e, r, t), e.elementType = Kd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function _l(e, t, n) {
  return e = nt(6, e, null, t), e.lanes = n, e;
}
function kl(e, t, n) {
  return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function mx(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = rl(0), this.expirationTimes = rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ja(e, t, n, r, o, i, s, l, u) {
  return e = new mx(e, t, n, l, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = nt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ya(i), e;
}
function yx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Fp(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return Fh(e, n, t);
  }
  return t;
}
function bp(e, t, n, r, o, i, s, l, u) {
  return e = ja(n, r, !0, e, o, i, s, l, u), e.context = Fp(null), n = e.current, r = Ae(), o = cn(n), i = $t(r, o), i.callback = t ?? null, un(n, i, o), e.current.lanes = o, Ro(e, o, r), Ve(e, r), e;
}
function Ls(e, t, n, r) {
  var o = t.current, i = Ae(), s = cn(o);
  return n = Fp(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(o, t, s), e !== null && (mt(e, o, s, i), Pi(e, o, s)), s;
}
function as(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xf(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Aa(e, t) {
  xf(e, t), (e = e.alternate) && xf(e, t);
}
function vx() {
  return null;
}
var Hp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function $a(e) {
  this._internalRoot = e;
}
js.prototype.render = $a.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  Ls(e, t, null, null);
};
js.prototype.unmount = $a.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function() {
      Ls(null, e, null, null);
    }), t[Ft] = null;
  }
};
function js(e) {
  this._internalRoot = e;
}
js.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++) ;
    qt.splice(n, 0, e), n === 0 && wh(e);
  }
};
function Ra(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function As(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wf() {
}
function xx(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = as(s);
        i.call(a);
      };
    }
    var s = bp(t, r, e, 0, null, !1, !1, "", wf);
    return e._reactRootContainer = s, e[Ft] = s.current, vo(e.nodeType === 8 ? e.parentNode : e), Ln(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var a = as(u);
      l.call(a);
    };
  }
  var u = ja(e, 0, !1, null, null, !1, !1, "", wf);
  return e._reactRootContainer = u, e[Ft] = u.current, vo(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
    Ls(t, u, n, r);
  }), u;
}
function $s(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var u = as(s);
        l.call(u);
      };
    }
    Ls(t, s, e, o);
  } else s = xx(n, t, e, o, r);
  return as(s);
}
mh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xr(t.pendingLanes);
        n !== 0 && (na(t, n | 1), Ve(t, xe()), !(re & 6) && (yr = xe() + 500, mn()));
      }
      break;
    case 13:
      Ln(function() {
        var r = bt(e, 1);
        if (r !== null) {
          var o = Ae();
          mt(r, e, 1, o);
        }
      }), Aa(e, 1);
  }
};
ra = function(e) {
  if (e.tag === 13) {
    var t = bt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      mt(t, e, 134217728, n);
    }
    Aa(e, 134217728);
  }
};
yh = function(e) {
  if (e.tag === 13) {
    var t = cn(e), n = bt(e, t);
    if (n !== null) {
      var r = Ae();
      mt(n, e, t, r);
    }
    Aa(e, t);
  }
};
vh = function() {
  return se;
};
xh = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
Ql = function(e, t, n) {
  switch (t) {
    case "input":
      if (Bl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ns(r);
            if (!o) throw Error(H(90));
            Gd(r), Bl(r, o);
          }
        }
      }
      break;
    case "textarea":
      qd(e, n);
      break;
    case "select":
      t = n.value, t != null && rr(e, !!n.multiple, t, !1);
  }
};
ih = Da;
sh = Ln;
var wx = { usingClientEntryPoint: !1, Events: [Fo, Kn, Ns, rh, oh, Da] }, Hr = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sx = { bundleType: Hr.bundleType, version: Hr.version, rendererPackageName: Hr.rendererPackageName, rendererConfig: Hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ah(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Hr.findFiberByHostInstance || vx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hi.isDisabled && hi.supportsFiber) try {
    _s = hi.inject(Sx), kt = hi;
  } catch {
  }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wx;
Ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ra(t)) throw Error(H(200));
  return yx(e, t, null, n);
};
Ze.createRoot = function(e, t) {
  if (!Ra(e)) throw Error(H(299));
  var n = !1, r = "", o = Hp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ja(e, 1, !1, null, null, n, !1, r, o), e[Ft] = t.current, vo(e.nodeType === 8 ? e.parentNode : e), new $a(t);
};
Ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
  return e = ah(t), e = e === null ? null : e.stateNode, e;
};
Ze.flushSync = function(e) {
  return Ln(e);
};
Ze.hydrate = function(e, t, n) {
  if (!As(t)) throw Error(H(200));
  return $s(null, e, t, !0, n);
};
Ze.hydrateRoot = function(e, t, n) {
  if (!Ra(e)) throw Error(H(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Hp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = bp(t, null, e, 1, n ?? null, o, !1, i, s), e[Ft] = t.current, vo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new js(t);
};
Ze.render = function(e, t, n) {
  if (!As(t)) throw Error(H(200));
  return $s(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function(e) {
  if (!As(e)) throw Error(H(40));
  return e._reactRootContainer ? (Ln(function() {
    $s(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
Ze.unstable_batchedUpdates = Da;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!As(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return $s(e, t, n, !1, r);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function Bp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bp);
    } catch (e) {
      console.error(e);
    }
}
Bp(), Bd.exports = Ze;
var Vp = Bd.exports, Up, Sf = Vp;
Up = Sf.createRoot, Sf.hydrateRoot;
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
var _x = { value: () => {
} };
function Rs() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ai(n);
}
function Ai(e) {
  this._ = e;
}
function kx(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ai.prototype = Rs.prototype = {
  constructor: Ai,
  on: function(e, t) {
    var n = this._, r = kx(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Ex(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = _f(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = _f(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ai(e);
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
function Ex(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function _f(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = _x, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Pu = "http://www.w3.org/1999/xhtml";
const kf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pu,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Os(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), kf.hasOwnProperty(t) ? { space: kf[t], local: e } : e;
}
function Cx(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Pu && t.documentElement.namespaceURI === Pu ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Nx(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Wp(e) {
  var t = Os(e);
  return (t.local ? Nx : Cx)(t);
}
function Mx() {
}
function Oa(e) {
  return e == null ? Mx : function() {
    return this.querySelector(e);
  };
}
function Px(e) {
  typeof e != "function" && (e = Oa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = new Array(s), u, a, d = 0; d < s; ++d)
      (u = i[d]) && (a = e.call(u, u.__data__, d, i)) && ("__data__" in u && (a.__data__ = u.__data__), l[d] = a);
  return new Ge(r, this._parents);
}
function Tx(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Dx() {
  return [];
}
function Yp(e) {
  return e == null ? Dx : function() {
    return this.querySelectorAll(e);
  };
}
function zx(e) {
  return function() {
    return Tx(e.apply(this, arguments));
  };
}
function Ix(e) {
  typeof e == "function" ? e = zx(e) : e = Yp(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], l = s.length, u, a = 0; a < l; ++a)
      (u = s[a]) && (r.push(e.call(u, u.__data__, a, s)), o.push(u));
  return new Ge(r, o);
}
function Xp(e) {
  return function() {
    return this.matches(e);
  };
}
function Kp(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Lx = Array.prototype.find;
function jx(e) {
  return function() {
    return Lx.call(this.children, e);
  };
}
function Ax() {
  return this.firstElementChild;
}
function $x(e) {
  return this.select(e == null ? Ax : jx(typeof e == "function" ? e : Kp(e)));
}
var Rx = Array.prototype.filter;
function Ox() {
  return Array.from(this.children);
}
function Fx(e) {
  return function() {
    return Rx.call(this.children, e);
  };
}
function bx(e) {
  return this.selectAll(e == null ? Ox : Fx(typeof e == "function" ? e : Kp(e)));
}
function Hx(e) {
  typeof e != "function" && (e = Xp(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], u, a = 0; a < s; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && l.push(u);
  return new Ge(r, this._parents);
}
function Qp(e) {
  return new Array(e.length);
}
function Bx() {
  return new Ge(this._enter || this._groups.map(Qp), this._parents);
}
function cs(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
cs.prototype = {
  constructor: cs,
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
function Vx(e) {
  return function() {
    return e;
  };
}
function Ux(e, t, n, r, o, i) {
  for (var s = 0, l, u = t.length, a = i.length; s < a; ++s)
    (l = t[s]) ? (l.__data__ = i[s], r[s] = l) : n[s] = new cs(e, i[s]);
  for (; s < u; ++s)
    (l = t[s]) && (o[s] = l);
}
function Wx(e, t, n, r, o, i, s) {
  var l, u, a = /* @__PURE__ */ new Map(), d = t.length, c = i.length, f = new Array(d), m;
  for (l = 0; l < d; ++l)
    (u = t[l]) && (f[l] = m = s.call(u, u.__data__, l, t) + "", a.has(m) ? o[l] = u : a.set(m, u));
  for (l = 0; l < c; ++l)
    m = s.call(e, i[l], l, i) + "", (u = a.get(m)) ? (r[l] = u, u.__data__ = i[l], a.delete(m)) : n[l] = new cs(e, i[l]);
  for (l = 0; l < d; ++l)
    (u = t[l]) && a.get(f[l]) === u && (o[l] = u);
}
function Yx(e) {
  return e.__data__;
}
function Xx(e, t) {
  if (!arguments.length) return Array.from(this, Yx);
  var n = t ? Wx : Ux, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Vx(e));
  for (var i = o.length, s = new Array(i), l = new Array(i), u = new Array(i), a = 0; a < i; ++a) {
    var d = r[a], c = o[a], f = c.length, m = Kx(e.call(d, d && d.__data__, a, r)), y = m.length, x = l[a] = new Array(y), S = s[a] = new Array(y), p = u[a] = new Array(f);
    n(d, c, x, S, p, m, t);
    for (var g = 0, h = 0, v, _; g < y; ++g)
      if (v = x[g]) {
        for (g >= h && (h = g + 1); !(_ = S[h]) && ++h < y; ) ;
        v._next = _ || null;
      }
  }
  return s = new Ge(s, r), s._enter = l, s._exit = u, s;
}
function Kx(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Qx() {
  return new Ge(this._exit || this._groups.map(Qp), this._parents);
}
function Gx(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Zx(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), l = new Array(o), u = 0; u < s; ++u)
    for (var a = n[u], d = r[u], c = a.length, f = l[u] = new Array(c), m, y = 0; y < c; ++y)
      (m = a[y] || d[y]) && (f[y] = m);
  for (; u < o; ++u)
    l[u] = n[u];
  return new Ge(l, this._parents);
}
function qx() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Jx(e) {
  e || (e = ew);
  function t(c, f) {
    return c && f ? e(c.__data__, f.__data__) : !c - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], l = s.length, u = o[i] = new Array(l), a, d = 0; d < l; ++d)
      (a = s[d]) && (u[d] = a);
    u.sort(t);
  }
  return new Ge(o, this._parents).order();
}
function ew(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tw() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function nw() {
  return Array.from(this);
}
function rw() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function ow() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function iw() {
  return !this.node();
}
function sw(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, l; i < s; ++i)
      (l = o[i]) && e.call(l, l.__data__, i, o);
  return this;
}
function lw(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function uw(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function aw(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function cw(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function fw(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function dw(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function hw(e, t) {
  var n = Os(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? uw : lw : typeof t == "function" ? n.local ? dw : fw : n.local ? cw : aw)(n, t));
}
function Gp(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function pw(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gw(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function mw(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function yw(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? pw : typeof t == "function" ? mw : gw)(e, t, n ?? "")) : vr(this.node(), e);
}
function vr(e, t) {
  return e.style.getPropertyValue(t) || Gp(e).getComputedStyle(e, null).getPropertyValue(t);
}
function vw(e) {
  return function() {
    delete this[e];
  };
}
function xw(e, t) {
  return function() {
    this[e] = t;
  };
}
function ww(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Sw(e, t) {
  return arguments.length > 1 ? this.each((t == null ? vw : typeof t == "function" ? ww : xw)(e, t)) : this.node()[e];
}
function Zp(e) {
  return e.trim().split(/^|\s+/);
}
function Fa(e) {
  return e.classList || new qp(e);
}
function qp(e) {
  this._node = e, this._names = Zp(e.getAttribute("class") || "");
}
qp.prototype = {
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
function Jp(e, t) {
  for (var n = Fa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function eg(e, t) {
  for (var n = Fa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function _w(e) {
  return function() {
    Jp(this, e);
  };
}
function kw(e) {
  return function() {
    eg(this, e);
  };
}
function Ew(e, t) {
  return function() {
    (t.apply(this, arguments) ? Jp : eg)(this, e);
  };
}
function Cw(e, t) {
  var n = Zp(e + "");
  if (arguments.length < 2) {
    for (var r = Fa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Ew : t ? _w : kw)(n, t));
}
function Nw() {
  this.textContent = "";
}
function Mw(e) {
  return function() {
    this.textContent = e;
  };
}
function Pw(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Tw(e) {
  return arguments.length ? this.each(e == null ? Nw : (typeof e == "function" ? Pw : Mw)(e)) : this.node().textContent;
}
function Dw() {
  this.innerHTML = "";
}
function zw(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Iw(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Lw(e) {
  return arguments.length ? this.each(e == null ? Dw : (typeof e == "function" ? Iw : zw)(e)) : this.node().innerHTML;
}
function jw() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Aw() {
  return this.each(jw);
}
function $w() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Rw() {
  return this.each($w);
}
function Ow(e) {
  var t = typeof e == "function" ? e : Wp(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Fw() {
  return null;
}
function bw(e, t) {
  var n = typeof e == "function" ? e : Wp(e), r = t == null ? Fw : typeof t == "function" ? t : Oa(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Hw() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Bw() {
  return this.each(Hw);
}
function Vw() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Uw() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ww(e) {
  return this.select(e ? Uw : Vw);
}
function Yw(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Xw(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Kw(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Qw(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Gw(e, t, n) {
  return function() {
    var r = this.__on, o, i = Xw(t);
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
function Zw(e, t, n) {
  var r = Kw(e + ""), o, i = r.length, s;
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
  for (l = t ? Gw : Qw, o = 0; o < i; ++o) this.each(l(r[o], t, n));
  return this;
}
function tg(e, t, n) {
  var r = Gp(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function qw(e, t) {
  return function() {
    return tg(this, e, t);
  };
}
function Jw(e, t) {
  return function() {
    return tg(this, e, t.apply(this, arguments));
  };
}
function e1(e, t) {
  return this.each((typeof t == "function" ? Jw : qw)(e, t));
}
function* t1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var ng = [null];
function Ge(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new Ge([[document.documentElement]], ng);
}
function n1() {
  return this;
}
Ge.prototype = Ho.prototype = {
  constructor: Ge,
  select: Px,
  selectAll: Ix,
  selectChild: $x,
  selectChildren: bx,
  filter: Hx,
  data: Xx,
  enter: Bx,
  exit: Qx,
  join: Gx,
  merge: Zx,
  selection: n1,
  order: qx,
  sort: Jx,
  call: tw,
  nodes: nw,
  node: rw,
  size: ow,
  empty: iw,
  each: sw,
  attr: hw,
  style: yw,
  property: Sw,
  classed: Cw,
  text: Tw,
  html: Lw,
  raise: Aw,
  lower: Rw,
  append: Ow,
  insert: bw,
  remove: Bw,
  clone: Ww,
  datum: Yw,
  on: Zw,
  dispatch: e1,
  [Symbol.iterator]: t1
};
function Ye(e) {
  return typeof e == "string" ? new Ge([[document.querySelector(e)]], [document.documentElement]) : new Ge([[e]], ng);
}
function r1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function ct(e, t) {
  if (e = r1(e), t === void 0 && (t = e.currentTarget), t) {
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
const o1 = { passive: !1 }, Mo = { capture: !0, passive: !1 };
function El(e) {
  e.stopImmediatePropagation();
}
function ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function rg(e) {
  var t = e.document.documentElement, n = Ye(e).on("dragstart.drag", ar, Mo);
  "onselectstart" in t ? n.on("selectstart.drag", ar, Mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function og(e, t) {
  var n = e.document.documentElement, r = Ye(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ar, Mo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const pi = (e) => () => e;
function Tu(e, {
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
Tu.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function i1(e) {
  return !e.ctrlKey && !e.button;
}
function s1() {
  return this.parentNode;
}
function l1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function u1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ig() {
  var e = i1, t = s1, n = l1, r = u1, o = {}, i = Rs("start", "drag", "end"), s = 0, l, u, a, d, c = 0;
  function f(v) {
    v.on("mousedown.drag", m).filter(r).on("touchstart.drag", S).on("touchmove.drag", p, o1).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function m(v, _) {
    if (!(d || !e.call(this, v, _))) {
      var k = h(this, t.call(this, v, _), v, _, "mouse");
      k && (Ye(v.view).on("mousemove.drag", y, Mo).on("mouseup.drag", x, Mo), rg(v.view), El(v), a = !1, l = v.clientX, u = v.clientY, k("start", v));
    }
  }
  function y(v) {
    if (ar(v), !a) {
      var _ = v.clientX - l, k = v.clientY - u;
      a = _ * _ + k * k > c;
    }
    o.mouse("drag", v);
  }
  function x(v) {
    Ye(v.view).on("mousemove.drag mouseup.drag", null), og(v.view, a), ar(v), o.mouse("end", v);
  }
  function S(v, _) {
    if (e.call(this, v, _)) {
      var k = v.changedTouches, E = t.call(this, v, _), T = k.length, I, R;
      for (I = 0; I < T; ++I)
        (R = h(this, E, v, _, k[I].identifier, k[I])) && (El(v), R("start", v, k[I]));
    }
  }
  function p(v) {
    var _ = v.changedTouches, k = _.length, E, T;
    for (E = 0; E < k; ++E)
      (T = o[_[E].identifier]) && (ar(v), T("drag", v, _[E]));
  }
  function g(v) {
    var _ = v.changedTouches, k = _.length, E, T;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), E = 0; E < k; ++E)
      (T = o[_[E].identifier]) && (El(v), T("end", v, _[E]));
  }
  function h(v, _, k, E, T, I) {
    var R = i.copy(), D = ct(I || k, _), L, b, M;
    if ((M = n.call(v, new Tu("beforestart", {
      sourceEvent: k,
      target: f,
      identifier: T,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: R
    }), E)) != null)
      return L = M.x - D[0] || 0, b = M.y - D[1] || 0, function A(z, $, C) {
        var P = D, j;
        switch (z) {
          case "start":
            o[T] = A, j = s++;
            break;
          case "end":
            delete o[T], --s;
          case "drag":
            D = ct(C || $, _), j = s;
            break;
        }
        R.call(
          z,
          v,
          new Tu(z, {
            sourceEvent: $,
            subject: M,
            target: f,
            identifier: T,
            active: j,
            x: D[0] + L,
            y: D[1] + b,
            dx: D[0] - P[0],
            dy: D[1] - P[1],
            dispatch: R
          }),
          E
        );
      };
  }
  return f.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : pi(!!v), f) : e;
  }, f.container = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : pi(v), f) : t;
  }, f.subject = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : pi(v), f) : n;
  }, f.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : pi(!!v), f) : r;
  }, f.on = function() {
    var v = i.on.apply(i, arguments);
    return v === i ? f : v;
  }, f.clickDistance = function(v) {
    return arguments.length ? (c = (v = +v) * v, f) : Math.sqrt(c);
  }, f;
}
function ba(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function sg(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Bo() {
}
var Po = 0.7, fs = 1 / Po, cr = "\\s*([+-]?\\d+)\\s*", To = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", a1 = /^#([0-9a-f]{3,8})$/, c1 = new RegExp(`^rgb\\(${cr},${cr},${cr}\\)$`), f1 = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), d1 = new RegExp(`^rgba\\(${cr},${cr},${cr},${To}\\)$`), h1 = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${To}\\)$`), p1 = new RegExp(`^hsl\\(${To},${Ct},${Ct}\\)$`), g1 = new RegExp(`^hsla\\(${To},${Ct},${Ct},${To}\\)$`), Ef = {
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
ba(Bo, jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Cf,
  // Deprecated! Use color.formatHex.
  formatHex: Cf,
  formatHex8: m1,
  formatHsl: y1,
  formatRgb: Nf,
  toString: Nf
});
function Cf() {
  return this.rgb().formatHex();
}
function m1() {
  return this.rgb().formatHex8();
}
function y1() {
  return lg(this).formatHsl();
}
function Nf() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = a1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Mf(t) : n === 3 ? new be(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = c1.exec(e)) ? new be(t[1], t[2], t[3], 1) : (t = f1.exec(e)) ? new be(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = d1.exec(e)) ? gi(t[1], t[2], t[3], t[4]) : (t = h1.exec(e)) ? gi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = p1.exec(e)) ? Df(t[1], t[2] / 100, t[3] / 100, 1) : (t = g1.exec(e)) ? Df(t[1], t[2] / 100, t[3] / 100, t[4]) : Ef.hasOwnProperty(e) ? Mf(Ef[e]) : e === "transparent" ? new be(NaN, NaN, NaN, 0) : null;
}
function Mf(e) {
  return new be(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new be(e, t, n, r);
}
function v1(e) {
  return e instanceof Bo || (e = jn(e)), e ? (e = e.rgb(), new be(e.r, e.g, e.b, e.opacity)) : new be();
}
function Du(e, t, n, r) {
  return arguments.length === 1 ? v1(e) : new be(e, t, n, r ?? 1);
}
function be(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ba(be, Du, sg(Bo, {
  brighter(e) {
    return e = e == null ? fs : Math.pow(fs, e), new be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Po : Math.pow(Po, e), new be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new be(Mn(this.r), Mn(this.g), Mn(this.b), ds(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pf,
  // Deprecated! Use color.formatHex.
  formatHex: Pf,
  formatHex8: x1,
  formatRgb: Tf,
  toString: Tf
}));
function Pf() {
  return `#${En(this.r)}${En(this.g)}${En(this.b)}`;
}
function x1() {
  return `#${En(this.r)}${En(this.g)}${En(this.b)}${En((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Tf() {
  const e = ds(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Mn(this.r)}, ${Mn(this.g)}, ${Mn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ds(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function En(e) {
  return e = Mn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Df(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dt(e, t, n, r);
}
function lg(e) {
  if (e instanceof dt) return new dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Bo || (e = jn(e)), !e) return new dt();
  if (e instanceof dt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, l = i - o, u = (i + o) / 2;
  return l ? (t === i ? s = (n - r) / l + (n < r) * 6 : n === i ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= u < 0.5 ? i + o : 2 - i - o, s *= 60) : l = u > 0 && u < 1 ? 0 : s, new dt(s, l, u, e.opacity);
}
function w1(e, t, n, r) {
  return arguments.length === 1 ? lg(e) : new dt(e, t, n, r ?? 1);
}
function dt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ba(dt, w1, sg(Bo, {
  brighter(e) {
    return e = e == null ? fs : Math.pow(fs, e), new dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Po : Math.pow(Po, e), new dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new be(
      Cl(e >= 240 ? e - 240 : e + 120, o, r),
      Cl(e, o, r),
      Cl(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new dt(zf(this.h), mi(this.s), mi(this.l), ds(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ds(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${zf(this.h)}, ${mi(this.s) * 100}%, ${mi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function zf(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function mi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Cl(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ha = (e) => () => e;
function S1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function _1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function k1(e) {
  return (e = +e) == 1 ? ug : function(t, n) {
    return n - t ? _1(t, n, e) : Ha(isNaN(t) ? n : t);
  };
}
function ug(e, t) {
  var n = t - e;
  return n ? S1(e, n) : Ha(isNaN(e) ? t : e);
}
const hs = function e(t) {
  var n = k1(t);
  function r(o, i) {
    var s = n((o = Du(o)).r, (i = Du(i)).r), l = n(o.g, i.g), u = n(o.b, i.b), a = ug(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = l(d), o.b = u(d), o.opacity = a(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function E1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function C1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function N1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = so(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(l) {
    for (s = 0; s < r; ++s) i[s] = o[s](l);
    return i;
  };
}
function M1(e, t) {
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
function P1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = so(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var zu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nl = new RegExp(zu.source, "g");
function T1(e) {
  return function() {
    return e;
  };
}
function D1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ag(e, t) {
  var n = zu.lastIndex = Nl.lastIndex = 0, r, o, i, s = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = zu.exec(e)) && (o = Nl.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), l[s] ? l[s] += i : l[++s] = i), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, u.push({ i: s, x: St(r, o) })), n = Nl.lastIndex;
  return n < t.length && (i = t.slice(n), l[s] ? l[s] += i : l[++s] = i), l.length < 2 ? u[0] ? D1(u[0].x) : T1(t) : (t = u.length, function(a) {
    for (var d = 0, c; d < t; ++d) l[(c = u[d]).i] = c.x(a);
    return l.join("");
  });
}
function so(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Ha(t) : (n === "number" ? St : n === "string" ? (r = jn(t)) ? (t = r, hs) : ag : t instanceof jn ? hs : t instanceof Date ? M1 : C1(t) ? E1 : Array.isArray(t) ? N1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? P1 : St)(e, t);
}
var If = 180 / Math.PI, Iu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function cg(e, t, n, r, o, i) {
  var s, l, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * r) && (n -= e * u, r -= t * u), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, u /= l), e * r < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * If,
    skewX: Math.atan(u) * If,
    scaleX: s,
    scaleY: l
  };
}
var yi;
function z1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Iu : cg(t.a, t.b, t.c, t.d, t.e, t.f);
}
function I1(e) {
  return e == null || (yi || (yi = document.createElementNS("http://www.w3.org/2000/svg", "g")), yi.setAttribute("transform", e), !(e = yi.transform.baseVal.consolidate())) ? Iu : (e = e.matrix, cg(e.a, e.b, e.c, e.d, e.e, e.f));
}
function fg(e, t, n, r) {
  function o(a) {
    return a.length ? a.pop() + " " : "";
  }
  function i(a, d, c, f, m, y) {
    if (a !== c || d !== f) {
      var x = m.push("translate(", null, t, null, n);
      y.push({ i: x - 4, x: St(a, c) }, { i: x - 2, x: St(d, f) });
    } else (c || f) && m.push("translate(" + c + t + f + n);
  }
  function s(a, d, c, f) {
    a !== d ? (a - d > 180 ? d += 360 : d - a > 180 && (a += 360), f.push({ i: c.push(o(c) + "rotate(", null, r) - 2, x: St(a, d) })) : d && c.push(o(c) + "rotate(" + d + r);
  }
  function l(a, d, c, f) {
    a !== d ? f.push({ i: c.push(o(c) + "skewX(", null, r) - 2, x: St(a, d) }) : d && c.push(o(c) + "skewX(" + d + r);
  }
  function u(a, d, c, f, m, y) {
    if (a !== c || d !== f) {
      var x = m.push(o(m) + "scale(", null, ",", null, ")");
      y.push({ i: x - 4, x: St(a, c) }, { i: x - 2, x: St(d, f) });
    } else (c !== 1 || f !== 1) && m.push(o(m) + "scale(" + c + "," + f + ")");
  }
  return function(a, d) {
    var c = [], f = [];
    return a = e(a), d = e(d), i(a.translateX, a.translateY, d.translateX, d.translateY, c, f), s(a.rotate, d.rotate, c, f), l(a.skewX, d.skewX, c, f), u(a.scaleX, a.scaleY, d.scaleX, d.scaleY, c, f), a = d = null, function(m) {
      for (var y = -1, x = f.length, S; ++y < x; ) c[(S = f[y]).i] = S.x(m);
      return c.join("");
    };
  };
}
var L1 = fg(z1, "px, ", "px)", "deg)"), j1 = fg(I1, ", ", ")", ")"), A1 = 1e-12;
function Lf(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function $1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function R1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const $i = function e(t, n, r) {
  function o(i, s) {
    var l = i[0], u = i[1], a = i[2], d = s[0], c = s[1], f = s[2], m = d - l, y = c - u, x = m * m + y * y, S, p;
    if (x < A1)
      p = Math.log(f / a) / t, S = function(E) {
        return [
          l + E * m,
          u + E * y,
          a * Math.exp(t * E * p)
        ];
      };
    else {
      var g = Math.sqrt(x), h = (f * f - a * a + r * x) / (2 * a * n * g), v = (f * f - a * a - r * x) / (2 * f * n * g), _ = Math.log(Math.sqrt(h * h + 1) - h), k = Math.log(Math.sqrt(v * v + 1) - v);
      p = (k - _) / t, S = function(E) {
        var T = E * p, I = Lf(_), R = a / (n * g) * (I * R1(t * T + _) - $1(_));
        return [
          l + R * m,
          u + R * y,
          a * I / Lf(t * T + _)
        ];
      };
    }
    return S.duration = p * 1e3 * t / Math.SQRT2, S;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), l = s * s, u = l * l;
    return e(s, l, u);
  }, o;
}(Math.SQRT2, 2, 4);
var xr = 0, Qr = 0, Br = 0, dg = 1e3, ps, Gr, gs = 0, An = 0, Fs = 0, Do = typeof performance == "object" && performance.now ? performance : Date, hg = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ba() {
  return An || (hg(O1), An = Do.now() + Fs);
}
function O1() {
  An = 0;
}
function ms() {
  this._call = this._time = this._next = null;
}
ms.prototype = pg.prototype = {
  constructor: ms,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ba() : +n) + (t == null ? 0 : +t), !this._next && Gr !== this && (Gr ? Gr._next = this : ps = this, Gr = this), this._call = e, this._time = n, Lu();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Lu());
  }
};
function pg(e, t, n) {
  var r = new ms();
  return r.restart(e, t, n), r;
}
function F1() {
  Ba(), ++xr;
  for (var e = ps, t; e; )
    (t = An - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --xr;
}
function jf() {
  An = (gs = Do.now()) + Fs, xr = Qr = 0;
  try {
    F1();
  } finally {
    xr = 0, H1(), An = 0;
  }
}
function b1() {
  var e = Do.now(), t = e - gs;
  t > dg && (Fs -= t, gs = e);
}
function H1() {
  for (var e, t = ps, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ps = n);
  Gr = e, Lu(r);
}
function Lu(e) {
  if (!xr) {
    Qr && (Qr = clearTimeout(Qr));
    var t = e - An;
    t > 24 ? (e < 1 / 0 && (Qr = setTimeout(jf, e - Do.now() - Fs)), Br && (Br = clearInterval(Br))) : (Br || (gs = Do.now(), Br = setInterval(b1, dg)), xr = 1, hg(jf));
  }
}
function Af(e, t, n) {
  var r = new ms();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var B1 = Rs("start", "end", "cancel", "interrupt"), V1 = [], gg = 0, $f = 1, ju = 2, Ri = 3, Rf = 4, Au = 5, Oi = 6;
function bs(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  U1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: B1,
    tween: V1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: gg
  });
}
function Va(e, t) {
  var n = vt(e, t);
  if (n.state > gg) throw new Error("too late; already scheduled");
  return n;
}
function Mt(e, t) {
  var n = vt(e, t);
  if (n.state > Ri) throw new Error("too late; already running");
  return n;
}
function vt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function U1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = pg(i, 0, n.time);
  function i(a) {
    n.state = $f, n.timer.restart(s, n.delay, n.time), n.delay <= a && s(a - n.delay);
  }
  function s(a) {
    var d, c, f, m;
    if (n.state !== $f) return u();
    for (d in r)
      if (m = r[d], m.name === n.name) {
        if (m.state === Ri) return Af(s);
        m.state === Rf ? (m.state = Oi, m.timer.stop(), m.on.call("interrupt", e, e.__data__, m.index, m.group), delete r[d]) : +d < t && (m.state = Oi, m.timer.stop(), m.on.call("cancel", e, e.__data__, m.index, m.group), delete r[d]);
      }
    if (Af(function() {
      n.state === Ri && (n.state = Rf, n.timer.restart(l, n.delay, n.time), l(a));
    }), n.state = ju, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ju) {
      for (n.state = Ri, o = new Array(f = n.tween.length), d = 0, c = -1; d < f; ++d)
        (m = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++c] = m);
      o.length = c + 1;
    }
  }
  function l(a) {
    for (var d = a < n.duration ? n.ease.call(null, a / n.duration) : (n.timer.restart(u), n.state = Au, 1), c = -1, f = o.length; ++c < f; )
      o[c].call(e, d);
    n.state === Au && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Oi, n.timer.stop(), delete r[t];
    for (var a in r) return;
    delete e.__transition;
  }
}
function Fi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ju && r.state < Au, r.state = Oi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function W1(e) {
  return this.each(function() {
    Fi(this, e);
  });
}
function Y1(e, t) {
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
function X1(e, t, n) {
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
function K1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = vt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Y1 : X1)(n, e, t));
}
function Ua(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Mt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return vt(o, r).value[t];
  };
}
function mg(e, t) {
  var n;
  return (typeof t == "number" ? St : t instanceof jn ? hs : (n = jn(t)) ? (t = n, hs) : ag)(e, t);
}
function Q1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function G1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Z1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function q1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function J1(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), u;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = l + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l)));
  };
}
function eS(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), u;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = l + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l)));
  };
}
function tS(e, t) {
  var n = Os(e), r = n === "transform" ? j1 : mg;
  return this.attrTween(e, typeof t == "function" ? (n.local ? eS : J1)(n, r, Ua(this, "attr." + e, t)) : t == null ? (n.local ? G1 : Q1)(n) : (n.local ? q1 : Z1)(n, r, t));
}
function nS(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function rS(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function oS(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && rS(e, i)), n;
  }
  return o._value = t, o;
}
function iS(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && nS(e, i)), n;
  }
  return o._value = t, o;
}
function sS(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Os(e);
  return this.tween(n, (r.local ? oS : iS)(r, t));
}
function lS(e, t) {
  return function() {
    Va(this, e).delay = +t.apply(this, arguments);
  };
}
function uS(e, t) {
  return t = +t, function() {
    Va(this, e).delay = t;
  };
}
function aS(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? lS : uS)(t, e)) : vt(this.node(), t).delay;
}
function cS(e, t) {
  return function() {
    Mt(this, e).duration = +t.apply(this, arguments);
  };
}
function fS(e, t) {
  return t = +t, function() {
    Mt(this, e).duration = t;
  };
}
function dS(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? cS : fS)(t, e)) : vt(this.node(), t).duration;
}
function hS(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mt(this, e).ease = t;
  };
}
function pS(e) {
  var t = this._id;
  return arguments.length ? this.each(hS(t, e)) : vt(this.node(), t).ease;
}
function gS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Mt(this, e).ease = n;
  };
}
function mS(e) {
  if (typeof e != "function") throw new Error();
  return this.each(gS(this._id, e));
}
function yS(e) {
  typeof e != "function" && (e = Xp(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], u, a = 0; a < s; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && l.push(u);
  return new Bt(r, this._parents, this._name, this._id);
}
function vS(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), l = 0; l < i; ++l)
    for (var u = t[l], a = n[l], d = u.length, c = s[l] = new Array(d), f, m = 0; m < d; ++m)
      (f = u[m] || a[m]) && (c[m] = f);
  for (; l < r; ++l)
    s[l] = t[l];
  return new Bt(s, this._parents, this._name, this._id);
}
function xS(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function wS(e, t, n) {
  var r, o, i = xS(t) ? Va : Mt;
  return function() {
    var s = i(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function SS(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vt(this.node(), n).on.on(e) : this.each(wS(n, e, t));
}
function _S(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function kS() {
  return this.on("end.remove", _S(this._id));
}
function ES(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Oa(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, a = i[s] = new Array(u), d, c, f = 0; f < u; ++f)
      (d = l[f]) && (c = e.call(d, d.__data__, f, l)) && ("__data__" in d && (c.__data__ = d.__data__), a[f] = c, bs(a[f], t, n, f, a, vt(d, n)));
  return new Bt(i, this._parents, t, n);
}
function CS(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Yp(e));
  for (var r = this._groups, o = r.length, i = [], s = [], l = 0; l < o; ++l)
    for (var u = r[l], a = u.length, d, c = 0; c < a; ++c)
      if (d = u[c]) {
        for (var f = e.call(d, d.__data__, c, u), m, y = vt(d, n), x = 0, S = f.length; x < S; ++x)
          (m = f[x]) && bs(m, t, n, x, f, y);
        i.push(f), s.push(d);
      }
  return new Bt(i, s, t, n);
}
var NS = Ho.prototype.constructor;
function MS() {
  return new NS(this._groups, this._parents);
}
function PS(e, t) {
  var n, r, o;
  return function() {
    var i = vr(this, e), s = (this.style.removeProperty(e), vr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function yg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function TS(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = vr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function DS(e, t, n) {
  var r, o, i;
  return function() {
    var s = vr(this, e), l = n(this), u = l + "";
    return l == null && (u = l = (this.style.removeProperty(e), vr(this, e))), s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l));
  };
}
function zS(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, l;
  return function() {
    var u = Mt(this, e), a = u.on, d = u.value[i] == null ? l || (l = yg(t)) : void 0;
    (a !== n || o !== d) && (r = (n = a).copy()).on(s, o = d), u.on = r;
  };
}
function IS(e, t, n) {
  var r = (e += "") == "transform" ? L1 : mg;
  return t == null ? this.styleTween(e, PS(e, r)).on("end.style." + e, yg(e)) : typeof t == "function" ? this.styleTween(e, DS(e, r, Ua(this, "style." + e, t))).each(zS(this._id, e)) : this.styleTween(e, TS(e, r, t), n).on("end.style." + e, null);
}
function LS(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function jS(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && LS(e, s, n)), r;
  }
  return i._value = t, i;
}
function AS(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, jS(e, t, n ?? ""));
}
function $S(e) {
  return function() {
    this.textContent = e;
  };
}
function RS(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function OS(e) {
  return this.tween("text", typeof e == "function" ? RS(Ua(this, "text", e)) : $S(e == null ? "" : e + ""));
}
function FS(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function bS(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && FS(o)), t;
  }
  return r._value = e, r;
}
function HS(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, bS(e));
}
function BS() {
  for (var e = this._name, t = this._id, n = vg(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u, a = 0; a < l; ++a)
      if (u = s[a]) {
        var d = vt(u, t);
        bs(u, e, n, a, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Bt(r, this._parents, e, n);
}
function VS() {
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
var US = 0;
function Bt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function vg() {
  return ++US;
}
var Tt = Ho.prototype;
Bt.prototype = {
  constructor: Bt,
  select: ES,
  selectAll: CS,
  selectChild: Tt.selectChild,
  selectChildren: Tt.selectChildren,
  filter: yS,
  merge: vS,
  selection: MS,
  transition: BS,
  call: Tt.call,
  nodes: Tt.nodes,
  node: Tt.node,
  size: Tt.size,
  empty: Tt.empty,
  each: Tt.each,
  on: SS,
  attr: tS,
  attrTween: sS,
  style: IS,
  styleTween: AS,
  text: OS,
  textTween: HS,
  remove: kS,
  tween: K1,
  delay: aS,
  duration: dS,
  ease: pS,
  easeVarying: mS,
  end: VS,
  [Symbol.iterator]: Tt[Symbol.iterator]
};
function WS(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var YS = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: WS
};
function XS(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function KS(e) {
  var t, n;
  e instanceof Bt ? (t = e._id, e = e._name) : (t = vg(), (n = YS).time = Ba(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u, a = 0; a < l; ++a)
      (u = s[a]) && bs(u, e, t, a, s, n || XS(u, t));
  return new Bt(r, this._parents, e, t);
}
Ho.prototype.interrupt = W1;
Ho.prototype.transition = KS;
const vi = (e) => () => e;
function QS(e, {
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
function At(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
At.prototype = {
  constructor: At,
  scale: function(e) {
    return e === 1 ? this : new At(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new At(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Hs = new At(1, 0, 0);
xg.prototype = At.prototype;
function xg(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Hs;
  return e.__zoom;
}
function Ml(e) {
  e.stopImmediatePropagation();
}
function Vr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function GS(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function ZS() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Of() {
  return this.__zoom || Hs;
}
function qS(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function JS() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function e_(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function wg() {
  var e = GS, t = ZS, n = e_, r = qS, o = JS, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, u = $i, a = Rs("start", "zoom", "end"), d, c, f, m = 500, y = 150, x = 0, S = 10;
  function p(M) {
    M.property("__zoom", Of).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", R).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", L).on("touchend.zoom touchcancel.zoom", b).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(M, A, z, $) {
    var C = M.selection ? M.selection() : M;
    C.property("__zoom", Of), M !== C ? _(M, A, z, $) : C.interrupt().each(function() {
      k(this, arguments).event($).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, p.scaleBy = function(M, A, z, $) {
    p.scaleTo(M, function() {
      var C = this.__zoom.k, P = typeof A == "function" ? A.apply(this, arguments) : A;
      return C * P;
    }, z, $);
  }, p.scaleTo = function(M, A, z, $) {
    p.transform(M, function() {
      var C = t.apply(this, arguments), P = this.__zoom, j = z == null ? v(C) : typeof z == "function" ? z.apply(this, arguments) : z, F = P.invert(j), O = typeof A == "function" ? A.apply(this, arguments) : A;
      return n(h(g(P, O), j, F), C, s);
    }, z, $);
  }, p.translateBy = function(M, A, z, $) {
    p.transform(M, function() {
      return n(this.__zoom.translate(
        typeof A == "function" ? A.apply(this, arguments) : A,
        typeof z == "function" ? z.apply(this, arguments) : z
      ), t.apply(this, arguments), s);
    }, null, $);
  }, p.translateTo = function(M, A, z, $, C) {
    p.transform(M, function() {
      var P = t.apply(this, arguments), j = this.__zoom, F = $ == null ? v(P) : typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(Hs.translate(F[0], F[1]).scale(j.k).translate(
        typeof A == "function" ? -A.apply(this, arguments) : -A,
        typeof z == "function" ? -z.apply(this, arguments) : -z
      ), P, s);
    }, $, C);
  };
  function g(M, A) {
    return A = Math.max(i[0], Math.min(i[1], A)), A === M.k ? M : new At(A, M.x, M.y);
  }
  function h(M, A, z) {
    var $ = A[0] - z[0] * M.k, C = A[1] - z[1] * M.k;
    return $ === M.x && C === M.y ? M : new At(M.k, $, C);
  }
  function v(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function _(M, A, z, $) {
    M.on("start.zoom", function() {
      k(this, arguments).event($).start();
    }).on("interrupt.zoom end.zoom", function() {
      k(this, arguments).event($).end();
    }).tween("zoom", function() {
      var C = this, P = arguments, j = k(C, P).event($), F = t.apply(C, P), O = z == null ? v(F) : typeof z == "function" ? z.apply(C, P) : z, U = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), V = C.__zoom, Y = typeof A == "function" ? A.apply(C, P) : A, X = u(V.invert(O).concat(U / V.k), Y.invert(O).concat(U / Y.k));
      return function(Q) {
        if (Q === 1) Q = Y;
        else {
          var B = X(Q), G = U / B[2];
          Q = new At(G, O[0] - B[0] * G, O[1] - B[1] * G);
        }
        j.zoom(null, Q);
      };
    });
  }
  function k(M, A, z) {
    return !z && M.__zooming || new E(M, A);
  }
  function E(M, A) {
    this.that = M, this.args = A, this.active = 0, this.sourceEvent = null, this.extent = t.apply(M, A), this.taps = 0;
  }
  E.prototype = {
    event: function(M) {
      return M && (this.sourceEvent = M), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(M, A) {
      return this.mouse && M !== "mouse" && (this.mouse[1] = A.invert(this.mouse[0])), this.touch0 && M !== "touch" && (this.touch0[1] = A.invert(this.touch0[0])), this.touch1 && M !== "touch" && (this.touch1[1] = A.invert(this.touch1[0])), this.that.__zoom = A, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(M) {
      var A = Ye(this.that).datum();
      a.call(
        M,
        this.that,
        new QS(M, {
          sourceEvent: this.sourceEvent,
          target: p,
          transform: this.that.__zoom,
          dispatch: a
        }),
        A
      );
    }
  };
  function T(M, ...A) {
    if (!e.apply(this, arguments)) return;
    var z = k(this, A).event(M), $ = this.__zoom, C = Math.max(i[0], Math.min(i[1], $.k * Math.pow(2, r.apply(this, arguments)))), P = ct(M);
    if (z.wheel)
      (z.mouse[0][0] !== P[0] || z.mouse[0][1] !== P[1]) && (z.mouse[1] = $.invert(z.mouse[0] = P)), clearTimeout(z.wheel);
    else {
      if ($.k === C) return;
      z.mouse = [P, $.invert(P)], Fi(this), z.start();
    }
    Vr(M), z.wheel = setTimeout(j, y), z.zoom("mouse", n(h(g($, C), z.mouse[0], z.mouse[1]), z.extent, s));
    function j() {
      z.wheel = null, z.end();
    }
  }
  function I(M, ...A) {
    if (f || !e.apply(this, arguments)) return;
    var z = M.currentTarget, $ = k(this, A, !0).event(M), C = Ye(M.view).on("mousemove.zoom", O, !0).on("mouseup.zoom", U, !0), P = ct(M, z), j = M.clientX, F = M.clientY;
    rg(M.view), Ml(M), $.mouse = [P, this.__zoom.invert(P)], Fi(this), $.start();
    function O(V) {
      if (Vr(V), !$.moved) {
        var Y = V.clientX - j, X = V.clientY - F;
        $.moved = Y * Y + X * X > x;
      }
      $.event(V).zoom("mouse", n(h($.that.__zoom, $.mouse[0] = ct(V, z), $.mouse[1]), $.extent, s));
    }
    function U(V) {
      C.on("mousemove.zoom mouseup.zoom", null), og(V.view, $.moved), Vr(V), $.event(V).end();
    }
  }
  function R(M, ...A) {
    if (e.apply(this, arguments)) {
      var z = this.__zoom, $ = ct(M.changedTouches ? M.changedTouches[0] : M, this), C = z.invert($), P = z.k * (M.shiftKey ? 0.5 : 2), j = n(h(g(z, P), $, C), t.apply(this, A), s);
      Vr(M), l > 0 ? Ye(this).transition().duration(l).call(_, j, $, M) : Ye(this).call(p.transform, j, $, M);
    }
  }
  function D(M, ...A) {
    if (e.apply(this, arguments)) {
      var z = M.touches, $ = z.length, C = k(this, A, M.changedTouches.length === $).event(M), P, j, F, O;
      for (Ml(M), j = 0; j < $; ++j)
        F = z[j], O = ct(F, this), O = [O, this.__zoom.invert(O), F.identifier], C.touch0 ? !C.touch1 && C.touch0[2] !== O[2] && (C.touch1 = O, C.taps = 0) : (C.touch0 = O, P = !0, C.taps = 1 + !!d);
      d && (d = clearTimeout(d)), P && (C.taps < 2 && (c = O[0], d = setTimeout(function() {
        d = null;
      }, m)), Fi(this), C.start());
    }
  }
  function L(M, ...A) {
    if (this.__zooming) {
      var z = k(this, A).event(M), $ = M.changedTouches, C = $.length, P, j, F, O;
      for (Vr(M), P = 0; P < C; ++P)
        j = $[P], F = ct(j, this), z.touch0 && z.touch0[2] === j.identifier ? z.touch0[0] = F : z.touch1 && z.touch1[2] === j.identifier && (z.touch1[0] = F);
      if (j = z.that.__zoom, z.touch1) {
        var U = z.touch0[0], V = z.touch0[1], Y = z.touch1[0], X = z.touch1[1], Q = (Q = Y[0] - U[0]) * Q + (Q = Y[1] - U[1]) * Q, B = (B = X[0] - V[0]) * B + (B = X[1] - V[1]) * B;
        j = g(j, Math.sqrt(Q / B)), F = [(U[0] + Y[0]) / 2, (U[1] + Y[1]) / 2], O = [(V[0] + X[0]) / 2, (V[1] + X[1]) / 2];
      } else if (z.touch0) F = z.touch0[0], O = z.touch0[1];
      else return;
      z.zoom("touch", n(h(j, F, O), z.extent, s));
    }
  }
  function b(M, ...A) {
    if (this.__zooming) {
      var z = k(this, A).event(M), $ = M.changedTouches, C = $.length, P, j;
      for (Ml(M), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, m), P = 0; P < C; ++P)
        j = $[P], z.touch0 && z.touch0[2] === j.identifier ? delete z.touch0 : z.touch1 && z.touch1[2] === j.identifier && delete z.touch1;
      if (z.touch1 && !z.touch0 && (z.touch0 = z.touch1, delete z.touch1), z.touch0) z.touch0[1] = this.__zoom.invert(z.touch0[0]);
      else if (z.end(), z.taps === 2 && (j = ct(j, this), Math.hypot(c[0] - j[0], c[1] - j[1]) < S)) {
        var F = Ye(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return p.wheelDelta = function(M) {
    return arguments.length ? (r = typeof M == "function" ? M : vi(+M), p) : r;
  }, p.filter = function(M) {
    return arguments.length ? (e = typeof M == "function" ? M : vi(!!M), p) : e;
  }, p.touchable = function(M) {
    return arguments.length ? (o = typeof M == "function" ? M : vi(!!M), p) : o;
  }, p.extent = function(M) {
    return arguments.length ? (t = typeof M == "function" ? M : vi([[+M[0][0], +M[0][1]], [+M[1][0], +M[1][1]]]), p) : t;
  }, p.scaleExtent = function(M) {
    return arguments.length ? (i[0] = +M[0], i[1] = +M[1], p) : [i[0], i[1]];
  }, p.translateExtent = function(M) {
    return arguments.length ? (s[0][0] = +M[0][0], s[1][0] = +M[1][0], s[0][1] = +M[0][1], s[1][1] = +M[1][1], p) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, p.constrain = function(M) {
    return arguments.length ? (n = M, p) : n;
  }, p.duration = function(M) {
    return arguments.length ? (l = +M, p) : l;
  }, p.interpolate = function(M) {
    return arguments.length ? (u = M, p) : u;
  }, p.on = function() {
    var M = a.on.apply(a, arguments);
    return M === a ? p : M;
  }, p.clickDistance = function(M) {
    return arguments.length ? (x = (M = +M) * M, p) : Math.sqrt(x);
  }, p.tapDistance = function(M) {
    return arguments.length ? (S = +M, p) : S;
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
}, zo = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Sg = ["Enter", " ", "Escape"], _g = {
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
var Io;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Io || (Io = {}));
const kg = {
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
var en;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(en || (en = {}));
var ys;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ys || (ys = {}));
var K;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(K || (K = {}));
const Ff = {
  [K.Left]: K.Right,
  [K.Right]: K.Left,
  [K.Top]: K.Bottom,
  [K.Bottom]: K.Top
};
function Eg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Cg = (e) => "id" in e && "source" in e && "target" in e, t_ = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Wa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Vo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Ut(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, n_ = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Wa(o) ? o : t.nodeLookup.get(o.id));
    const l = s ? vs(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Bs(r, l);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Vs(n);
}, Uo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Bs(n, vs(o)), r = !0);
  }), r ? Vs(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Ya = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const l = {
    ...Yo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, u = [];
  for (const a of e.values()) {
    const { measured: d, selectable: c = !0, hidden: f = !1 } = a;
    if (s && !c || f)
      continue;
    const m = d.width ?? a.width ?? a.initialWidth ?? null, y = d.height ?? a.height ?? a.initialHeight ?? null, x = Lo(l, _r(a)), S = (m ?? 0) * (y ?? 0), p = i && x > 0;
    (!a.internals.handleBounds || p || x >= S || a.dragging) && u.push(a);
  }
  return u;
}, r_ = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function o_(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function i_({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const l = o_(e, s), u = Uo(l), a = Xa(u, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(a, {
    duration: s == null ? void 0 : s.duration,
    ease: s == null ? void 0 : s.ease,
    interpolate: s == null ? void 0 : s.interpolate
  }), Promise.resolve(!0);
}
function Ng({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), l = s.parentId ? n.get(s.parentId) : void 0, { x: u, y: a } = l ? l.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let c = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!l)
      i == null || i("005", Nt.error005());
    else {
      const m = l.measured.width, y = l.measured.height;
      m && y && (c = [
        [u, a],
        [u + m, a + y]
      ]);
    }
  else l && kr(s.extent) && (c = [
    [s.extent[0][0] + u, s.extent[0][1] + a],
    [s.extent[1][0] + u, s.extent[1][1] + a]
  ]);
  const f = kr(c) ? $n(t, c, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Nt.error015())), {
    position: {
      x: f.x - u + (s.measured.width ?? 0) * d[0],
      y: f.y - a + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function s_({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const m = i.has(f.id), y = !m && f.parentId && s.find((x) => x.id === f.parentId);
    (m || y) && s.push(f);
  }
  const l = new Set(t.map((f) => f.id)), u = r.filter((f) => f.deletable !== !1), d = r_(s, u);
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
const Sr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), $n = (e = { x: 0, y: 0 }, t, n) => ({
  x: Sr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Sr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Mg(e, t, n) {
  const { width: r, height: o } = Ut(n), { x: i, y: s } = n.internals.positionAbsolute;
  return $n(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const bf = (e, t, n) => e < t ? Sr(Math.abs(e - t), 1, t) / t : e > n ? -Sr(Math.abs(e - n), 1, t) / t : 0, Pg = (e, t, n = 15, r = 40) => {
  const o = bf(e.x, r, t.width - r) * n, i = bf(e.y, r, t.height - r) * n;
  return [o, i];
}, Bs = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), $u = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Vs = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), _r = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Wa(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, vs = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Wa(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Tg = (e, t) => Vs(Bs($u(e), $u(t))), Lo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Hf = (e) => ht(e.width) && ht(e.height) && ht(e.x) && ht(e.y), ht = (e) => !isNaN(e) && isFinite(e), l_ = (e, t) => {
}, Wo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Yo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Wo(l, s) : l;
}, xs = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Bn(e, t) {
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
function u_(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Bn(e, n), o = Bn(e, t);
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
    const r = Bn(e.top ?? e.y ?? 0, n), o = Bn(e.bottom ?? e.y ?? 0, n), i = Bn(e.left ?? e.x ?? 0, t), s = Bn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function a_(e, t, n, r, o, i) {
  const { x: s, y: l } = xs(e, [t, n, r]), { x: u, y: a } = xs({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - u, c = i - a;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(d),
    bottom: Math.floor(c)
  };
}
const Xa = (e, t, n, r, o, i) => {
  const s = u_(i, t, n), l = (t - s.x) / e.width, u = (n - s.y) / e.height, a = Math.min(l, u), d = Sr(a, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, m = t / 2 - c * d, y = n / 2 - f * d, x = a_(e, m, y, d, t, n), S = {
    left: Math.min(x.left - s.left, 0),
    top: Math.min(x.top - s.top, 0),
    right: Math.min(x.right - s.right, 0),
    bottom: Math.min(x.bottom - s.bottom, 0)
  };
  return {
    x: m - S.left + S.right,
    y: y - S.top + S.bottom,
    zoom: d
  };
}, jo = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function kr(e) {
  return e != null && e !== "parent";
}
function Ut(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Dg(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function zg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const l = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * l[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * l[1];
  }
  return i;
}
function Bf(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function c_() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function f_(e) {
  return { ..._g, ...e || {} };
}
function lo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = pt(e), l = Yo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: u, y: a } = n ? Wo(l, t) : l;
  return {
    xSnapped: u,
    ySnapped: a,
    ...l
  };
}
const Ka = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Ig = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, d_ = ["INPUT", "SELECT", "TEXTAREA"];
function Lg(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : d_.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const jg = (e) => "clientX" in e, pt = (e, t) => {
  var i, s;
  const n = jg(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Vf = (e, t, n, r, o) => {
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
      ...Ka(s)
    };
  });
};
function Ag({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: l }) {
  const u = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, a = t * 0.125 + i * 0.375 + l * 0.375 + r * 0.125, d = Math.abs(u - e), c = Math.abs(a - t);
  return [u, a, d, c];
}
function xi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Uf({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case K.Left:
      return [t - xi(t - r, i), n];
    case K.Right:
      return [t + xi(r - t, i), n];
    case K.Top:
      return [t, n - xi(n - o, i)];
    case K.Bottom:
      return [t, n + xi(o - n, i)];
  }
}
function Qa({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top, curvature: s = 0.25 }) {
  const [l, u] = Uf({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [a, d] = Uf({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [c, f, m, y] = Ag({
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
    m,
    y
  ];
}
function $g({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [i, l, o, s];
}
function h_({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, l = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + l;
}
function p_({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Bs(vs(e), vs(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Lo(s, Vs(i)) > 0;
}
const g_ = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, m_ = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Ru = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || g_;
  let o;
  return Cg(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, m_(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function Rg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, l] = $g({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, l];
}
const Wf = {
  [K.Left]: { x: -1, y: 0 },
  [K.Right]: { x: 1, y: 0 },
  [K.Top]: { x: 0, y: -1 },
  [K.Bottom]: { x: 0, y: 1 }
}, y_ = ({ source: e, sourcePosition: t = K.Bottom, target: n }) => t === K.Left || t === K.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Yf = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function v_({ source: e, sourcePosition: t = K.Bottom, target: n, targetPosition: r = K.Top, center: o, offset: i, stepPosition: s }) {
  const l = Wf[t], u = Wf[r], a = { x: e.x + l.x * i, y: e.y + l.y * i }, d = { x: n.x + u.x * i, y: n.y + u.y * i }, c = y_({
    source: a,
    sourcePosition: t,
    target: d
  }), f = c.x !== 0 ? "x" : "y", m = c[f];
  let y = [], x, S;
  const p = { x: 0, y: 0 }, g = { x: 0, y: 0 }, [, , h, v] = $g({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (l[f] * u[f] === -1) {
    f === "x" ? (x = o.x ?? a.x + (d.x - a.x) * s, S = o.y ?? (a.y + d.y) / 2) : (x = o.x ?? (a.x + d.x) / 2, S = o.y ?? a.y + (d.y - a.y) * s);
    const k = [
      { x, y: a.y },
      { x, y: d.y }
    ], E = [
      { x: a.x, y: S },
      { x: d.x, y: S }
    ];
    l[f] === m ? y = f === "x" ? k : E : y = f === "x" ? E : k;
  } else {
    const k = [{ x: a.x, y: d.y }], E = [{ x: d.x, y: a.y }];
    if (f === "x" ? y = l.x === m ? E : k : y = l.y === m ? k : E, t === r) {
      const L = Math.abs(e[f] - n[f]);
      if (L <= i) {
        const b = Math.min(i - 1, i - L);
        l[f] === m ? p[f] = (a[f] > e[f] ? -1 : 1) * b : g[f] = (d[f] > n[f] ? -1 : 1) * b;
      }
    }
    if (t !== r) {
      const L = f === "x" ? "y" : "x", b = l[f] === u[L], M = a[L] > d[L], A = a[L] < d[L];
      (l[f] === 1 && (!b && M || b && A) || l[f] !== 1 && (!b && A || b && M)) && (y = f === "x" ? k : E);
    }
    const T = { x: a.x + p.x, y: a.y + p.y }, I = { x: d.x + g.x, y: d.y + g.y }, R = Math.max(Math.abs(T.x - y[0].x), Math.abs(I.x - y[0].x)), D = Math.max(Math.abs(T.y - y[0].y), Math.abs(I.y - y[0].y));
    R >= D ? (x = (T.x + I.x) / 2, S = y[0].y) : (x = y[0].x, S = (T.y + I.y) / 2);
  }
  return [[
    e,
    { x: a.x + p.x, y: a.y + p.y },
    ...y,
    { x: d.x + g.x, y: d.y + g.y },
    n
  ], x, S, h, v];
}
function x_(e, t, n, r) {
  const o = Math.min(Yf(e, t) / 2, Yf(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const a = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * a},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const l = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * u}Q ${i},${s} ${i + o * l},${s}`;
}
function Ou({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top, borderRadius: s = 5, centerX: l, centerY: u, offset: a = 20, stepPosition: d = 0.5 }) {
  const [c, f, m, y, x] = v_({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: l, y: u },
    offset: a,
    stepPosition: d
  });
  return [c.reduce((p, g, h) => {
    let v = "";
    return h > 0 && h < c.length - 1 ? v = x_(c[h - 1], g, c[h + 1], s) : v = `${h === 0 ? "M" : "L"}${g.x} ${g.y}`, p += v, p;
  }, ""), f, m, y, x];
}
function Xf(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function w_(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!Xf(t) || !Xf(n))
    return null;
  const r = t.internals.handleBounds || Kf(t.handles), o = n.internals.handleBounds || Kf(n.handles), i = Qf((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Qf(
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
  const l = (i == null ? void 0 : i.position) || K.Bottom, u = (s == null ? void 0 : s.position) || K.Top, a = Rn(t, i, l), d = Rn(n, s, u);
  return {
    sourceX: a.x,
    sourceY: a.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Kf(e) {
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
function Rn(e, t, n = K.Left, r = !1) {
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
function Qf(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Fu(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function S_(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, l) => ([l.markerStart || r, l.markerEnd || o].forEach((u) => {
    if (u && typeof u == "object") {
      const a = Fu(u, t);
      i.has(a) || (s.push({ id: a, color: u.color || n, ...u }), i.add(a));
    }
  }), s), []).sort((s, l) => s.id.localeCompare(l.id));
}
const Og = 1e3, __ = 10, Ga = {
  nodeOrigin: [0, 0],
  nodeExtent: zo,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, k_ = {
  ...Ga,
  checkEquality: !0
};
function Za(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function E_(e, t, n) {
  const r = Za(Ga, n);
  for (const o of e.values())
    if (o.parentId)
      Ja(o, e, t, r);
    else {
      const i = Vo(o, r.nodeOrigin), s = kr(o.extent) ? o.extent : r.nodeExtent, l = $n(i, s, Ut(o));
      o.internals.positionAbsolute = l;
    }
}
function C_(e, t) {
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
function qa(e) {
  return e === "manual";
}
function bu(e, t, n, r = {}) {
  var a, d;
  const o = Za(k_, r), i = { i: 0 }, s = new Map(t), l = o != null && o.elevateNodesOnSelect && !qa(o.zIndexMode) ? Og : 0;
  let u = e.length > 0;
  t.clear(), n.clear();
  for (const c of e) {
    let f = s.get(c.id);
    if (o.checkEquality && c === (f == null ? void 0 : f.internals.userNode))
      t.set(c.id, f);
    else {
      const m = Vo(c, o.nodeOrigin), y = kr(c.extent) ? c.extent : o.nodeExtent, x = $n(m, y, Ut(c));
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
          handleBounds: C_(c, f),
          z: Fg(c, l, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (u = !1), c.parentId && Ja(f, t, n, r, i);
  }
  return u;
}
function N_(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ja(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: l, zIndexMode: u } = Za(Ga, r), a = e.parentId, d = t.get(a);
  if (!d) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  N_(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && u === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * __), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const c = i && !qa(u) ? Og : 0, { x: f, y: m, z: y } = M_(e, d, s, l, c, u), { positionAbsolute: x } = e.internals, S = f !== x.x || m !== x.y;
  (S || y !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: S ? { x: f, y: m } : x,
      z: y
    }
  });
}
function Fg(e, t, n) {
  const r = ht(e.zIndex) ? e.zIndex : 0;
  return qa(n) ? r : r + (e.selected ? t : 0);
}
function M_(e, t, n, r, o, i) {
  const { x: s, y: l } = t.internals.positionAbsolute, u = Ut(e), a = Vo(e, n), d = kr(e.extent) ? $n(a, e.extent, u) : a;
  let c = $n({ x: s + d.x, y: l + d.y }, r, u);
  e.extent === "parent" && (c = Mg(c, u, t));
  const f = Fg(e, o, i), m = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: m >= f ? m + 1 : f
  };
}
function ec(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const l of e) {
    const u = t.get(l.parentId);
    if (!u)
      continue;
    const a = ((s = i.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? _r(u), d = Tg(a, l.rect);
    i.set(l.parentId, { expandedRect: d, parent: u });
  }
  return i.size > 0 && i.forEach(({ expandedRect: l, parent: u }, a) => {
    var h;
    const d = u.internals.positionAbsolute, c = Ut(u), f = u.origin ?? r, m = l.x < d.x ? Math.round(Math.abs(d.x - l.x)) : 0, y = l.y < d.y ? Math.round(Math.abs(d.y - l.y)) : 0, x = Math.max(c.width, Math.round(l.width)), S = Math.max(c.height, Math.round(l.height)), p = (x - c.width) * f[0], g = (S - c.height) * f[1];
    (m > 0 || y > 0 || p || g) && (o.push({
      id: a,
      type: "position",
      position: {
        x: u.position.x - m + p,
        y: u.position.y - y + g
      }
    }), (h = n.get(a)) == null || h.forEach((v) => {
      e.some((_) => _.id === v.id) || o.push({
        id: v.id,
        type: "position",
        position: {
          x: v.position.x + m,
          y: v.position.y + y
        }
      });
    })), (c.width < l.width || c.height < l.height || m || y) && o.push({
      id: a,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (m ? f[0] * m - p : 0),
        height: S + (y ? f[1] * y - g : 0)
      }
    });
  }), o;
}
function P_(e, t, n, r, o, i, s) {
  const l = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let u = !1;
  if (!l)
    return { changes: [], updatedInternals: u };
  const a = [], d = window.getComputedStyle(l), { m22: c } = new window.DOMMatrixReadOnly(d.transform), f = [];
  for (const m of e.values()) {
    const y = t.get(m.id);
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
    const x = Ka(m.nodeElement), S = y.measured.width !== x.width || y.measured.height !== x.height;
    if (!!(x.width && x.height && (S || !y.internals.handleBounds || m.force))) {
      const g = m.nodeElement.getBoundingClientRect(), h = kr(y.extent) ? y.extent : i;
      let { positionAbsolute: v } = y.internals;
      y.parentId && y.extent === "parent" ? v = Mg(v, x, t.get(y.parentId)) : h && (v = $n(v, h, x));
      const _ = {
        ...y,
        measured: x,
        internals: {
          ...y.internals,
          positionAbsolute: v,
          handleBounds: {
            source: Vf("source", m.nodeElement, g, c, y.id),
            target: Vf("target", m.nodeElement, g, c, y.id)
          }
        }
      };
      t.set(y.id, _), y.parentId && Ja(_, t, n, { nodeOrigin: o, zIndexMode: s }), u = !0, S && (a.push({
        id: y.id,
        type: "dimensions",
        dimensions: x
      }), y.expandParent && y.parentId && f.push({
        id: y.id,
        parentId: y.parentId,
        rect: _r(_, o)
      }));
    }
  }
  if (f.length > 0) {
    const m = ec(f, t, n, o);
    a.push(...m);
  }
  return { changes: a, updatedInternals: u };
}
async function T_({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Gf(e, t, n, r, o, i) {
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
function bg(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: l = null } = r, u = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: l }, a = `${o}-${s}--${i}-${l}`, d = `${i}-${l}--${o}-${s}`;
    Gf("source", u, d, e, o, s), Gf("target", u, a, e, i, l), t.set(r.id, r);
  }
}
function Hg(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Hg(n, t) : !1;
}
function Zf(e, t, n) {
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
function D_(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Hg(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Pl({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function z_({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Wo(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function I_({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, l = /* @__PURE__ */ new Map(), u = !1, a = { x: 0, y: 0 }, d = null, c = !1, f = null, m = !1, y = !1, x = null;
  function S({ noDragClassName: g, handleSelector: h, domNode: v, isSelectable: _, nodeId: k, nodeClickDistance: E = 0 }) {
    f = Ye(v);
    function T({ x: L, y: b }) {
      const { nodeLookup: M, nodeExtent: A, snapGrid: z, snapToGrid: $, nodeOrigin: C, onNodeDrag: P, onSelectionDrag: j, onError: F, updateNodePositions: O } = t();
      i = { x: L, y: b };
      let U = !1;
      const V = l.size > 1, Y = V && A ? $u(Uo(l)) : null, X = V && $ ? z_({
        dragItems: l,
        snapGrid: z,
        x: L,
        y: b
      }) : null;
      for (const [Q, B] of l) {
        if (!M.has(Q))
          continue;
        let G = { x: L - B.distance.x, y: b - B.distance.y };
        $ && (G = X ? {
          x: Math.round(G.x + X.x),
          y: Math.round(G.y + X.y)
        } : Wo(G, z));
        let ee = null;
        if (V && A && !B.extent && Y) {
          const { positionAbsolute: Z } = B.internals, ie = Z.x - Y.x + A[0][0], ae = Z.x + B.measured.width - Y.x2 + A[1][0], oe = Z.y - Y.y + A[0][1], Te = Z.y + B.measured.height - Y.y2 + A[1][1];
          ee = [
            [ie, oe],
            [ae, Te]
          ];
        }
        const { position: J, positionAbsolute: q } = Ng({
          nodeId: Q,
          nextPosition: G,
          nodeLookup: M,
          nodeExtent: ee || A,
          nodeOrigin: C,
          onError: F
        });
        U = U || B.position.x !== J.x || B.position.y !== J.y, B.position = J, B.internals.positionAbsolute = q;
      }
      if (y = y || U, !!U && (O(l, !0), x && (r || P || !k && j))) {
        const [Q, B] = Pl({
          nodeId: k,
          dragItems: l,
          nodeLookup: M
        });
        r == null || r(x, l, Q, B), P == null || P(x, Q, B), k || j == null || j(x, B);
      }
    }
    async function I() {
      if (!d)
        return;
      const { transform: L, panBy: b, autoPanSpeed: M, autoPanOnNodeDrag: A } = t();
      if (!A) {
        u = !1, cancelAnimationFrame(s);
        return;
      }
      const [z, $] = Pg(a, d, M);
      (z !== 0 || $ !== 0) && (i.x = (i.x ?? 0) - z / L[2], i.y = (i.y ?? 0) - $ / L[2], await b({ x: z, y: $ }) && T(i)), s = requestAnimationFrame(I);
    }
    function R(L) {
      var V;
      const { nodeLookup: b, multiSelectionActive: M, nodesDraggable: A, transform: z, snapGrid: $, snapToGrid: C, selectNodesOnDrag: P, onNodeDragStart: j, onSelectionDragStart: F, unselectNodesAndEdges: O } = t();
      c = !0, (!P || !_) && !M && k && ((V = b.get(k)) != null && V.selected || O()), _ && P && k && (e == null || e(k));
      const U = lo(L.sourceEvent, { transform: z, snapGrid: $, snapToGrid: C, containerBounds: d });
      if (i = U, l = D_(b, A, U, k), l.size > 0 && (n || j || !k && F)) {
        const [Y, X] = Pl({
          nodeId: k,
          dragItems: l,
          nodeLookup: b
        });
        n == null || n(L.sourceEvent, l, Y, X), j == null || j(L.sourceEvent, Y, X), k || F == null || F(L.sourceEvent, X);
      }
    }
    const D = ig().clickDistance(E).on("start", (L) => {
      const { domNode: b, nodeDragThreshold: M, transform: A, snapGrid: z, snapToGrid: $ } = t();
      d = (b == null ? void 0 : b.getBoundingClientRect()) || null, m = !1, y = !1, x = L.sourceEvent, M === 0 && R(L), i = lo(L.sourceEvent, { transform: A, snapGrid: z, snapToGrid: $, containerBounds: d }), a = pt(L.sourceEvent, d);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: b, transform: M, snapGrid: A, snapToGrid: z, nodeDragThreshold: $, nodeLookup: C } = t(), P = lo(L.sourceEvent, { transform: M, snapGrid: A, snapToGrid: z, containerBounds: d });
      if (x = L.sourceEvent, (L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      k && !C.has(k)) && (m = !0), !m) {
        if (!u && b && c && (u = !0, I()), !c) {
          const j = pt(L.sourceEvent, d), F = j.x - a.x, O = j.y - a.y;
          Math.sqrt(F * F + O * O) > $ && R(L);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && l && c && (a = pt(L.sourceEvent, d), T(P));
      }
    }).on("end", (L) => {
      if (!(!c || m) && (u = !1, c = !1, cancelAnimationFrame(s), l.size > 0)) {
        const { nodeLookup: b, updateNodePositions: M, onNodeDragStop: A, onSelectionDragStop: z } = t();
        if (y && (M(l, !1), y = !1), o || A || !k && z) {
          const [$, C] = Pl({
            nodeId: k,
            dragItems: l,
            nodeLookup: b,
            dragging: !1
          });
          o == null || o(L.sourceEvent, l, $, C), A == null || A(L.sourceEvent, $, C), k || z == null || z(L.sourceEvent, C);
        }
      }
    }).filter((L) => {
      const b = L.target;
      return !L.button && (!g || !Zf(b, `.${g}`, v)) && (!h || Zf(b, h, v));
    });
    f.call(D);
  }
  function p() {
    f == null || f.on(".drag", null);
  }
  return {
    update: S,
    destroy: p
  };
}
function L_(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Lo(o, _r(i)) > 0 && r.push(i);
  return r;
}
const j_ = 250;
function A_(e, t, n, r) {
  var l, u;
  let o = [], i = 1 / 0;
  const s = L_(e, n, t + j_);
  for (const a of s) {
    const d = [...((l = a.internals.handleBounds) == null ? void 0 : l.source) ?? [], ...((u = a.internals.handleBounds) == null ? void 0 : u.target) ?? []];
    for (const c of d) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: f, y: m } = Rn(a, c, c.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(m - e.y, 2));
      y > t || (y < i ? (o = [{ ...c, x: f, y: m }], i = y) : y === i && o.push({ ...c, x: f, y: m }));
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
function Bg(e, t, n, r, o, i = !1) {
  var a, d, c;
  const s = r.get(e);
  if (!s)
    return null;
  const l = o === "strict" ? (a = s.internals.handleBounds) == null ? void 0 : a[t] : [...((d = s.internals.handleBounds) == null ? void 0 : d.source) ?? [], ...((c = s.internals.handleBounds) == null ? void 0 : c.target) ?? []], u = (n ? l == null ? void 0 : l.find((f) => f.id === n) : l == null ? void 0 : l[0]) ?? null;
  return u && i ? { ...u, ...Rn(s, u, u.position, !0) } : u;
}
function Vg(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function $_(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ug = () => !0;
function R_(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: l, nodeLookup: u, lib: a, autoPanOnConnect: d, flowId: c, panBy: f, cancelConnection: m, onConnectStart: y, onConnect: x, onConnectEnd: S, isValidConnection: p = Ug, onReconnectEnd: g, updateConnection: h, getTransform: v, getFromHandle: _, autoPanSpeed: k, dragThreshold: E = 1, handleDomNode: T }) {
  const I = Ig(e.target);
  let R = 0, D;
  const { x: L, y: b } = pt(e), M = Vg(i, T), A = l == null ? void 0 : l.getBoundingClientRect();
  let z = !1;
  if (!A || !M)
    return;
  const $ = Bg(o, M, r, u, t);
  if (!$)
    return;
  let C = pt(e, A), P = !1, j = null, F = !1, O = null;
  function U() {
    if (!d || !A)
      return;
    const [J, q] = Pg(C, A, k);
    f({ x: J, y: q }), R = requestAnimationFrame(U);
  }
  const V = {
    ...$,
    nodeId: o,
    type: M,
    position: $.position
  }, Y = u.get(o);
  let Q = {
    inProgress: !0,
    isValid: null,
    from: Rn(Y, V, K.Left, !0),
    fromHandle: V,
    fromPosition: V.position,
    fromNode: Y,
    to: C,
    toHandle: null,
    toPosition: Ff[V.position],
    toNode: null,
    pointer: C
  };
  function B() {
    z = !0, h(Q), y == null || y(e, { nodeId: o, handleId: r, handleType: M });
  }
  E === 0 && B();
  function G(J) {
    if (!z) {
      const { x: Te, y: Yt } = pt(J), Pt = Te - L, yn = Yt - b;
      if (!(Pt * Pt + yn * yn > E * E))
        return;
      B();
    }
    if (!_() || !V) {
      ee(J);
      return;
    }
    const q = v();
    C = pt(J, A), D = A_(Yo(C, q, !1, [1, 1]), n, u, V), P || (U(), P = !0);
    const Z = Wg(J, {
      handle: D,
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
    O = Z.handleDomNode, j = Z.connection, F = $_(!!D, Z.isValid);
    const ie = u.get(o), ae = ie ? Rn(ie, V, K.Left, !0) : Q.from, oe = {
      ...Q,
      from: ae,
      isValid: F,
      to: Z.toHandle && F ? xs({ x: Z.toHandle.x, y: Z.toHandle.y }, q) : C,
      toHandle: Z.toHandle,
      toPosition: F && Z.toHandle ? Z.toHandle.position : Ff[V.position],
      toNode: Z.toHandle ? u.get(Z.toHandle.nodeId) : null,
      pointer: C
    };
    h(oe), Q = oe;
  }
  function ee(J) {
    if (!("touches" in J && J.touches.length > 0)) {
      if (z) {
        (D || O) && j && F && (x == null || x(j));
        const { inProgress: q, ...Z } = Q, ie = {
          ...Z,
          toPosition: Q.toHandle ? Q.toPosition : null
        };
        S == null || S(J, ie), i && (g == null || g(J, ie));
      }
      m(), cancelAnimationFrame(R), P = !1, F = !1, j = null, O = null, I.removeEventListener("mousemove", G), I.removeEventListener("mouseup", ee), I.removeEventListener("touchmove", G), I.removeEventListener("touchend", ee);
    }
  }
  I.addEventListener("mousemove", G), I.addEventListener("mouseup", ee), I.addEventListener("touchmove", G), I.addEventListener("touchend", ee);
}
function Wg(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: l, flowId: u, isValidConnection: a = Ug, nodeLookup: d }) {
  const c = i === "target", f = t ? s.querySelector(`.${l}-flow__handle[data-id="${u}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: m, y } = pt(e), x = s.elementFromPoint(m, y), S = x != null && x.classList.contains(`${l}-flow__handle`) ? x : f, p = {
    handleDomNode: S,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (S) {
    const g = Vg(void 0, S), h = S.getAttribute("data-nodeid"), v = S.getAttribute("data-handleid"), _ = S.classList.contains("connectable"), k = S.classList.contains("connectableend");
    if (!h || !g)
      return p;
    const E = {
      source: c ? h : r,
      sourceHandle: c ? v : o,
      target: c ? r : h,
      targetHandle: c ? o : v
    };
    p.connection = E;
    const I = _ && k && (n === wr.Strict ? c && g === "source" || !c && g === "target" : h !== r || v !== o);
    p.isValid = I && a(E), p.toHandle = Bg(h, g, v, d, n, !0);
  }
  return p;
}
const Hu = {
  onPointerDown: R_,
  isValid: Wg
};
function O_({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ye(e);
  function i({ translateExtent: l, width: u, height: a, zoomStep: d = 1, pannable: c = !0, zoomable: f = !0, inversePan: m = !1 }) {
    const y = (h) => {
      if (h.sourceEvent.type !== "wheel" || !t)
        return;
      const v = n(), _ = h.sourceEvent.ctrlKey && jo() ? 10 : 1, k = -h.sourceEvent.deltaY * (h.sourceEvent.deltaMode === 1 ? 0.05 : h.sourceEvent.deltaMode ? 1 : 2e-3) * d, E = v[2] * Math.pow(2, k * _);
      t.scaleTo(E);
    };
    let x = [0, 0];
    const S = (h) => {
      (h.sourceEvent.type === "mousedown" || h.sourceEvent.type === "touchstart") && (x = [
        h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
        h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY
      ]);
    }, p = (h) => {
      const v = n();
      if (h.sourceEvent.type !== "mousemove" && h.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
        h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY
      ], k = [_[0] - x[0], _[1] - x[1]];
      x = _;
      const E = r() * Math.max(v[2], Math.log(v[2])) * (m ? -1 : 1), T = {
        x: v[0] - k[0] * E,
        y: v[1] - k[1] * E
      }, I = [
        [0, 0],
        [u, a]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: v[2]
      }, I, l);
    }, g = wg().on("start", S).on("zoom", c ? p : null).on("zoom.wheel", f ? y : null);
    o.call(g, {});
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
const Us = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Tl = ({ x: e, y: t, zoom: n }) => Hs.translate(e, t).scale(n), tr = (e, t) => e.target.closest(`.${t}`), Yg = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), F_ = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Dl = (e, t = 0, n = F_, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Xg = (e) => {
  const t = e.ctrlKey && jo() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function b_({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: l, onPanZoom: u, onPanZoomEnd: a }) {
  return (d) => {
    if (tr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const c = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const S = ct(d), p = Xg(d), g = c * Math.pow(2, p);
      r.scaleTo(n, g, S, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let m = o === Pn.Vertical ? 0 : d.deltaX * f, y = o === Pn.Horizontal ? 0 : d.deltaY * f;
    !jo() && d.shiftKey && o !== Pn.Vertical && (m = d.deltaY * f, y = 0), r.translateBy(
      n,
      -(m / c) * i,
      -(y / c) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const x = Us(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (u == null || u(d, x), e.panScrollTimeout = setTimeout(() => {
      a == null || a(d, x), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, l == null || l(d, x));
  };
}
function H_({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, l = tr(r, e);
    if (r.ctrlKey && i && l && r.preventDefault(), s || l)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function B_({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, l;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Us(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function V_({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, l;
    e.usedRightMouseButton = !!(n && Yg(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((l = i.sourceEvent) != null && l.internal) && (o == null || o(i.sourceEvent, Us(i.transform)));
  };
}
function U_({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var l;
    if (!((l = s.sourceEvent) != null && l.internal) && (e.isZoomingOrPanning = !1, i && Yg(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const u = Us(s.transform);
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
function W_({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: l, noPanClassName: u, lib: a, connectionInProgress: d }) {
  return (c) => {
    var S;
    const f = e || t, m = n && c.ctrlKey, y = c.type === "wheel";
    if (c.button === 1 && c.type === "mousedown" && (tr(c, `${a}-flow__node`) || tr(c, `${a}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !y || tr(c, l) && y || tr(c, u) && (!y || o && y && !e) || !n && c.ctrlKey && y)
      return !1;
    if (!n && c.type === "touchstart" && ((S = c.touches) == null ? void 0 : S.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !m && y || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const x = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || y) && x;
  };
}
function Y_({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const a = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), c = wg().scaleExtent([t, n]).translateExtent(r), f = Ye(e).call(c);
  g({
    x: o.x,
    y: o.y,
    zoom: Sr(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const m = f.on("wheel.zoom"), y = f.on("dblclick.zoom");
  c.wheelDelta(Xg);
  function x(D, L) {
    return f ? new Promise((b) => {
      c == null || c.interpolate((L == null ? void 0 : L.interpolate) === "linear" ? so : $i).transform(Dl(f, L == null ? void 0 : L.duration, L == null ? void 0 : L.ease, () => b(!0)), D);
    }) : Promise.resolve(!1);
  }
  function S({ noWheelClassName: D, noPanClassName: L, onPaneContextMenu: b, userSelectionActive: M, panOnScroll: A, panOnDrag: z, panOnScrollMode: $, panOnScrollSpeed: C, preventScrolling: P, zoomOnPinch: j, zoomOnScroll: F, zoomOnDoubleClick: O, zoomActivationKeyPressed: U, lib: V, onTransformChange: Y, connectionInProgress: X, paneClickDistance: Q, selectionOnDrag: B }) {
    M && !a.isZoomingOrPanning && p();
    const G = A && !U && !M;
    c.clickDistance(B ? 1 / 0 : !ht(Q) || Q < 0 ? 0 : Q);
    const ee = G ? b_({
      zoomPanValues: a,
      noWheelClassName: D,
      d3Selection: f,
      d3Zoom: c,
      panOnScrollMode: $,
      panOnScrollSpeed: C,
      zoomOnPinch: j,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : H_({
      noWheelClassName: D,
      preventScrolling: P,
      d3ZoomHandler: m
    });
    if (f.on("wheel.zoom", ee, { passive: !1 }), !M) {
      const q = B_({
        zoomPanValues: a,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      c.on("start", q);
      const Z = V_({
        zoomPanValues: a,
        panOnDrag: z,
        onPaneContextMenu: !!b,
        onPanZoom: i,
        onTransformChange: Y
      });
      c.on("zoom", Z);
      const ie = U_({
        zoomPanValues: a,
        panOnDrag: z,
        panOnScroll: A,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      c.on("end", ie);
    }
    const J = W_({
      zoomActivationKeyPressed: U,
      panOnDrag: z,
      zoomOnScroll: F,
      panOnScroll: A,
      zoomOnDoubleClick: O,
      zoomOnPinch: j,
      userSelectionActive: M,
      noPanClassName: L,
      noWheelClassName: D,
      lib: V,
      connectionInProgress: X
    });
    c.filter(J), O ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function p() {
    c.on("zoom", null);
  }
  async function g(D, L, b) {
    const M = Tl(D), A = c == null ? void 0 : c.constrain()(M, L, b);
    return A && await x(A), new Promise((z) => z(A));
  }
  async function h(D, L) {
    const b = Tl(D);
    return await x(b, L), new Promise((M) => M(b));
  }
  function v(D) {
    if (f) {
      const L = Tl(D), b = f.property("__zoom");
      (b.k !== D.zoom || b.x !== D.x || b.y !== D.y) && (c == null || c.transform(f, L, null, { sync: !0 }));
    }
  }
  function _() {
    const D = f ? xg(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function k(D, L) {
    return f ? new Promise((b) => {
      c == null || c.interpolate((L == null ? void 0 : L.interpolate) === "linear" ? so : $i).scaleTo(Dl(f, L == null ? void 0 : L.duration, L == null ? void 0 : L.ease, () => b(!0)), D);
    }) : Promise.resolve(!1);
  }
  function E(D, L) {
    return f ? new Promise((b) => {
      c == null || c.interpolate((L == null ? void 0 : L.interpolate) === "linear" ? so : $i).scaleBy(Dl(f, L == null ? void 0 : L.duration, L == null ? void 0 : L.ease, () => b(!0)), D);
    }) : Promise.resolve(!1);
  }
  function T(D) {
    c == null || c.scaleExtent(D);
  }
  function I(D) {
    c == null || c.translateExtent(D);
  }
  function R(D) {
    const L = !ht(D) || D < 0 ? 0 : D;
    c == null || c.clickDistance(L);
  }
  return {
    update: S,
    destroy: p,
    setViewport: h,
    setViewportConstrained: g,
    getViewport: _,
    scaleTo: k,
    scaleBy: E,
    setScaleExtent: T,
    setTranslateExtent: I,
    syncViewport: v,
    setClickDistance: R
  };
}
var Er;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Er || (Er = {}));
function X_({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, l = n - r, u = [s > 0 ? 1 : s < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return s && o && (u[0] = u[0] * -1), l && i && (u[1] = u[1] * -1), u;
}
function qf(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), o = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o
  };
}
function Kt(e, t) {
  return Math.max(0, t - e);
}
function Qt(e, t) {
  return Math.max(0, e - t);
}
function wi(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Jf(e, t) {
  return e ? !t : t;
}
function K_(e, t, n, r, o, i, s, l) {
  let { affectsX: u, affectsY: a } = t;
  const { isHorizontal: d, isVertical: c } = t, f = d && c, { xSnapped: m, ySnapped: y } = n, { minWidth: x, maxWidth: S, minHeight: p, maxHeight: g } = r, { x: h, y: v, width: _, height: k, aspectRatio: E } = e;
  let T = Math.floor(d ? m - e.pointerX : 0), I = Math.floor(c ? y - e.pointerY : 0);
  const R = _ + (u ? -T : T), D = k + (a ? -I : I), L = -i[0] * _, b = -i[1] * k;
  let M = wi(R, x, S), A = wi(D, p, g);
  if (s) {
    let C = 0, P = 0;
    u && T < 0 ? C = Kt(h + T + L, s[0][0]) : !u && T > 0 && (C = Qt(h + R + L, s[1][0])), a && I < 0 ? P = Kt(v + I + b, s[0][1]) : !a && I > 0 && (P = Qt(v + D + b, s[1][1])), M = Math.max(M, C), A = Math.max(A, P);
  }
  if (l) {
    let C = 0, P = 0;
    u && T > 0 ? C = Qt(h + T, l[0][0]) : !u && T < 0 && (C = Kt(h + R, l[1][0])), a && I > 0 ? P = Qt(v + I, l[0][1]) : !a && I < 0 && (P = Kt(v + D, l[1][1])), M = Math.max(M, C), A = Math.max(A, P);
  }
  if (o) {
    if (d) {
      const C = wi(R / E, p, g) * E;
      if (M = Math.max(M, C), s) {
        let P = 0;
        !u && !a || u && !a && f ? P = Qt(v + b + R / E, s[1][1]) * E : P = Kt(v + b + (u ? T : -T) / E, s[0][1]) * E, M = Math.max(M, P);
      }
      if (l) {
        let P = 0;
        !u && !a || u && !a && f ? P = Kt(v + R / E, l[1][1]) * E : P = Qt(v + (u ? T : -T) / E, l[0][1]) * E, M = Math.max(M, P);
      }
    }
    if (c) {
      const C = wi(D * E, x, S) / E;
      if (A = Math.max(A, C), s) {
        let P = 0;
        !u && !a || a && !u && f ? P = Qt(h + D * E + L, s[1][0]) / E : P = Kt(h + (a ? I : -I) * E + L, s[0][0]) / E, A = Math.max(A, P);
      }
      if (l) {
        let P = 0;
        !u && !a || a && !u && f ? P = Kt(h + D * E, l[1][0]) / E : P = Qt(h + (a ? I : -I) * E, l[0][0]) / E, A = Math.max(A, P);
      }
    }
  }
  I = I + (I < 0 ? A : -A), T = T + (T < 0 ? M : -M), o && (f ? R > D * E ? I = (Jf(u, a) ? -T : T) / E : T = (Jf(u, a) ? -I : I) * E : d ? (I = T / E, a = u) : (T = I * E, u = a));
  const z = u ? h + T : h, $ = a ? v + I : v;
  return {
    width: _ + (u ? -T : T),
    height: k + (a ? -I : I),
    x: i[0] * T * (u ? -1 : 1) + z,
    y: i[1] * I * (a ? -1 : 1) + $
  };
}
const Kg = { width: 0, height: 0, x: 0, y: 0 }, Q_ = {
  ...Kg,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function G_(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function Z_(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, l = n[0] * i, u = n[1] * s;
  return [
    [r - l, o - u],
    [r + i - l, o + s - u]
  ];
}
function q_({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = Ye(e);
  let s = {
    controlDirection: qf("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function l({ controlPosition: a, boundaries: d, keepAspectRatio: c, resizeDirection: f, onResizeStart: m, onResize: y, onResizeEnd: x, shouldResize: S }) {
    let p = { ...Kg }, g = { ...Q_ };
    s = {
      boundaries: d,
      resizeDirection: f,
      keepAspectRatio: c,
      controlDirection: qf(a)
    };
    let h, v = null, _ = [], k, E, T, I = !1;
    const R = ig().on("start", (D) => {
      const { nodeLookup: L, transform: b, snapGrid: M, snapToGrid: A, nodeOrigin: z, paneDomNode: $ } = n();
      if (h = L.get(t), !h)
        return;
      v = ($ == null ? void 0 : $.getBoundingClientRect()) ?? null;
      const { xSnapped: C, ySnapped: P } = lo(D.sourceEvent, {
        transform: b,
        snapGrid: M,
        snapToGrid: A,
        containerBounds: v
      });
      p = {
        width: h.measured.width ?? 0,
        height: h.measured.height ?? 0,
        x: h.position.x ?? 0,
        y: h.position.y ?? 0
      }, g = {
        ...p,
        pointerX: C,
        pointerY: P,
        aspectRatio: p.width / p.height
      }, k = void 0, h.parentId && (h.extent === "parent" || h.expandParent) && (k = L.get(h.parentId), E = k && h.extent === "parent" ? G_(k) : void 0), _ = [], T = void 0;
      for (const [j, F] of L)
        if (F.parentId === t && (_.push({
          id: j,
          position: { ...F.position },
          extent: F.extent
        }), F.extent === "parent" || F.expandParent)) {
          const O = Z_(F, h, F.origin ?? z);
          T ? T = [
            [Math.min(O[0][0], T[0][0]), Math.min(O[0][1], T[0][1])],
            [Math.max(O[1][0], T[1][0]), Math.max(O[1][1], T[1][1])]
          ] : T = O;
        }
      m == null || m(D, { ...p });
    }).on("drag", (D) => {
      const { transform: L, snapGrid: b, snapToGrid: M, nodeOrigin: A } = n(), z = lo(D.sourceEvent, {
        transform: L,
        snapGrid: b,
        snapToGrid: M,
        containerBounds: v
      }), $ = [];
      if (!h)
        return;
      const { x: C, y: P, width: j, height: F } = p, O = {}, U = h.origin ?? A, { width: V, height: Y, x: X, y: Q } = K_(g, s.controlDirection, z, s.boundaries, s.keepAspectRatio, U, E, T), B = V !== j, G = Y !== F, ee = X !== C && B, J = Q !== P && G;
      if (!ee && !J && !B && !G)
        return;
      if ((ee || J || U[0] === 1 || U[1] === 1) && (O.x = ee ? X : p.x, O.y = J ? Q : p.y, p.x = O.x, p.y = O.y, _.length > 0)) {
        const ae = X - C, oe = Q - P;
        for (const Te of _)
          Te.position = {
            x: Te.position.x - ae + U[0] * (V - j),
            y: Te.position.y - oe + U[1] * (Y - F)
          }, $.push(Te);
      }
      if ((B || G) && (O.width = B && (!s.resizeDirection || s.resizeDirection === "horizontal") ? V : p.width, O.height = G && (!s.resizeDirection || s.resizeDirection === "vertical") ? Y : p.height, p.width = O.width, p.height = O.height), k && h.expandParent) {
        const ae = U[0] * (O.width ?? 0);
        O.x && O.x < ae && (p.x = ae, g.x = g.x - (O.x - ae));
        const oe = U[1] * (O.height ?? 0);
        O.y && O.y < oe && (p.y = oe, g.y = g.y - (O.y - oe));
      }
      const q = X_({
        width: p.width,
        prevWidth: j,
        height: p.height,
        prevHeight: F,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), Z = { ...p, direction: q };
      (S == null ? void 0 : S(D, Z)) !== !1 && (I = !0, y == null || y(D, Z), r(O, $));
    }).on("end", (D) => {
      I && (x == null || x(D, { ...p }), o == null || o({ ...p }), I = !1);
    });
    i.call(R);
  }
  function u() {
    i.on(".drag", null);
  }
  return {
    update: l,
    destroy: u
  };
}
var Qg = { exports: {} }, Gg = {}, Zg = { exports: {} }, qg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr = N;
function J_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ek = typeof Object.is == "function" ? Object.is : J_, tk = Cr.useState, nk = Cr.useEffect, rk = Cr.useLayoutEffect, ok = Cr.useDebugValue;
function ik(e, t) {
  var n = t(), r = tk({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return rk(
    function() {
      o.value = n, o.getSnapshot = t, zl(o) && i({ inst: o });
    },
    [e, n, t]
  ), nk(
    function() {
      return zl(o) && i({ inst: o }), e(function() {
        zl(o) && i({ inst: o });
      });
    },
    [e]
  ), ok(n), n;
}
function zl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ek(e, n);
  } catch {
    return !0;
  }
}
function sk(e, t) {
  return t();
}
var lk = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? sk : ik;
qg.useSyncExternalStore = Cr.useSyncExternalStore !== void 0 ? Cr.useSyncExternalStore : lk;
Zg.exports = qg;
var uk = Zg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws = N, ak = uk;
function ck(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var fk = typeof Object.is == "function" ? Object.is : ck, dk = ak.useSyncExternalStore, hk = Ws.useRef, pk = Ws.useEffect, gk = Ws.useMemo, mk = Ws.useDebugValue;
Gg.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = hk(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = gk(
    function() {
      function u(m) {
        if (!a) {
          if (a = !0, d = m, m = r(m), o !== void 0 && s.hasValue) {
            var y = s.value;
            if (o(y, m))
              return c = y;
          }
          return c = m;
        }
        if (y = c, fk(d, m)) return y;
        var x = r(m);
        return o !== void 0 && o(y, x) ? (d = m, y) : (d = m, c = x);
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
  var l = dk(e, i[0], i[1]);
  return pk(
    function() {
      s.hasValue = !0, s.value = l;
    },
    [l]
  ), mk(l), l;
};
Qg.exports = Gg;
var yk = Qg.exports;
const vk = /* @__PURE__ */ Dd(yk), xk = {}, ed = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, c) => {
    const f = typeof d == "function" ? d(t) : d;
    if (!Object.is(f, t)) {
      const m = t;
      t = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((y) => y(t, m));
    }
  }, o = () => t, u = { setState: r, getState: o, getInitialState: () => a, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (xk ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, a = t = e(r, o, u);
  return u;
}, wk = (e) => e ? ed(e) : ed, { useDebugValue: Sk } = Ur, { useSyncExternalStoreWithSelector: _k } = vk, kk = (e) => e;
function Jg(e, t = kk, n) {
  const r = _k(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Sk(r), r;
}
const td = (e, t) => {
  const n = wk(e), r = (o, i = t) => Jg(n, o, i);
  return Object.assign(r, n), r;
}, Ek = (e, t) => e ? td(e, t) : td;
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
const Ys = N.createContext(null), Ck = Ys.Provider, em = Nt.error001();
function ne(e, t) {
  const n = N.useContext(Ys);
  if (n === null)
    throw new Error(em);
  return Jg(n, e, t);
}
function pe() {
  const e = N.useContext(Ys);
  if (e === null)
    throw new Error(em);
  return N.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const nd = { display: "none" }, Nk = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, tm = "react-flow__node-desc", nm = "react-flow__edge-desc", Mk = "react-flow__aria-live", Pk = (e) => e.ariaLiveMessage, Tk = (e) => e.ariaLabelConfig;
function Dk({ rfId: e }) {
  const t = ne(Pk);
  return w.jsx("div", { id: `${Mk}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Nk, children: t });
}
function zk({ rfId: e, disableKeyboardA11y: t }) {
  const n = ne(Tk);
  return w.jsxs(w.Fragment, { children: [w.jsx("div", { id: `${tm}-${e}`, style: nd, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), w.jsx("div", { id: `${nm}-${e}`, style: nd, children: n["edge.a11yDescription.default"] }), !t && w.jsx(Dk, { rfId: e })] });
}
const Xo = N.forwardRef(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = `${e}`.split("-");
  return w.jsx("div", { className: Se(["react-flow__panel", n, ...s]), style: r, ref: i, ...o, children: t });
});
Xo.displayName = "Panel";
function Ik({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : w.jsx(Xo, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: w.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Lk = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, Si = (e) => e.id;
function jk(e, t) {
  return he(e.selectedNodes.map(Si), t.selectedNodes.map(Si)) && he(e.selectedEdges.map(Si), t.selectedEdges.map(Si));
}
function Ak({ onSelectionChange: e }) {
  const t = pe(), { selectedNodes: n, selectedEdges: r } = ne(Lk, jk);
  return N.useEffect(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const $k = (e) => !!e.onSelectionChangeHandlers;
function Rk({ onSelectionChange: e }) {
  const t = ne($k);
  return e || t ? w.jsx(Ak, { onSelectionChange: e }) : null;
}
const rm = [0, 0], Ok = { x: 0, y: 0, zoom: 1 }, Fk = [
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
], rd = [...Fk, "rfId"], bk = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), od = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: zo,
  nodeOrigin: rm,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function Hk(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: l, setDefaultNodesAndEdges: u } = ne(bk, he), a = pe();
  N.useEffect(() => (u(e.defaultNodes, e.defaultEdges), () => {
    d.current = od, l();
  }), []);
  const d = N.useRef(od);
  return N.useEffect(
    () => {
      for (const c of rd) {
        const f = e[c], m = d.current[c];
        f !== m && (typeof e[c] > "u" || (c === "nodes" ? t(f) : c === "edges" ? n(f) : c === "minZoom" ? r(f) : c === "maxZoom" ? o(f) : c === "translateExtent" ? i(f) : c === "nodeExtent" ? s(f) : c === "ariaLabelConfig" ? a.setState({ ariaLabelConfig: f_(f) }) : c === "fitView" ? a.setState({ fitViewQueued: f }) : c === "fitViewOptions" ? a.setState({ fitViewOptions: f }) : a.setState({ [c]: f })));
      }
      d.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    rd.map((c) => e[c])
  ), null;
}
function id() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Bk(e) {
  var r;
  const [t, n] = N.useState(e === "system" ? null : e);
  return N.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = id(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = id()) != null && r.matches ? "dark" : "light";
}
const sd = typeof document < "u" ? document : null;
function Ao(e = null, t = { target: sd, actInsideInputWithModifier: !0 }) {
  const [n, r] = N.useState(!1), o = N.useRef(!1), i = N.useRef(/* @__PURE__ */ new Set([])), [s, l] = N.useMemo(() => {
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
  return N.useEffect(() => {
    const u = (t == null ? void 0 : t.target) ?? sd, a = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const d = (m) => {
        var S, p;
        if (o.current = m.ctrlKey || m.metaKey || m.shiftKey || m.altKey, (!o.current || o.current && !a) && Lg(m))
          return !1;
        const x = ud(m.code, l);
        if (i.current.add(m[x]), ld(s, i.current, !1)) {
          const g = ((p = (S = m.composedPath) == null ? void 0 : S.call(m)) == null ? void 0 : p[0]) || m.target, h = (g == null ? void 0 : g.nodeName) === "BUTTON" || (g == null ? void 0 : g.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !h) && m.preventDefault(), r(!0);
        }
      }, c = (m) => {
        const y = ud(m.code, l);
        ld(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(m[y]), m.key === "Meta" && i.current.clear(), o.current = !1;
      }, f = () => {
        i.current.clear(), r(!1);
      };
      return u == null || u.addEventListener("keydown", d), u == null || u.addEventListener("keyup", c), window.addEventListener("blur", f), window.addEventListener("contextmenu", f), () => {
        u == null || u.removeEventListener("keydown", d), u == null || u.removeEventListener("keyup", c), window.removeEventListener("blur", f), window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]), n;
}
function ld(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function ud(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Vk = () => {
  const e = pe();
  return N.useMemo(() => ({
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
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: l } = e.getState(), u = Xa(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
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
      return Yo(a, r, c, d);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: o, y: i } = r.getBoundingClientRect(), s = xs(t, n);
      return {
        x: s.x + o,
        y: s.y + i
      };
    }
  }), []);
};
function om(e, t) {
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
      Uk(u, l);
    n.push(l);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function Uk(e, t) {
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
function im(e, t) {
  return om(e, t);
}
function sm(e, t) {
  return om(e, t);
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
function ad({ items: e = [], lookup: t }) {
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
function cd(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const fd = (e) => t_(e), Wk = (e) => Cg(e);
function lm(e) {
  return N.forwardRef(e);
}
const Yk = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function dd(e) {
  const [t, n] = N.useState(BigInt(0)), [r] = N.useState(() => Xk(() => n((o) => o + BigInt(1))));
  return Yk(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function Xk(e) {
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
const um = N.createContext(null);
function Kk({ children: e }) {
  const t = pe(), n = N.useCallback((l) => {
    const { nodes: u = [], setNodes: a, hasDefaultNodes: d, onNodesChange: c, nodeLookup: f, fitViewQueued: m, onNodesChangeMiddlewareMap: y } = t.getState();
    let x = u;
    for (const p of l)
      x = typeof p == "function" ? p(x) : p;
    let S = ad({
      items: x,
      lookup: f
    });
    for (const p of y.values())
      S = p(S);
    d && a(x), S.length > 0 ? c == null || c(S) : m && window.requestAnimationFrame(() => {
      const { fitViewQueued: p, nodes: g, setNodes: h } = t.getState();
      p && h(g);
    });
  }, []), r = dd(n), o = N.useCallback((l) => {
    const { edges: u = [], setEdges: a, hasDefaultEdges: d, onEdgesChange: c, edgeLookup: f } = t.getState();
    let m = u;
    for (const y of l)
      m = typeof y == "function" ? y(m) : y;
    d ? a(m) : c && c(ad({
      items: m,
      lookup: f
    }));
  }, []), i = dd(o), s = N.useMemo(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return w.jsx(um.Provider, { value: s, children: e });
}
function Qk() {
  const e = N.useContext(um);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const Gk = (e) => !!e.panZoom;
function Ue() {
  const e = Vk(), t = pe(), n = Qk(), r = ne(Gk), o = N.useMemo(() => {
    const i = (c) => t.getState().nodeLookup.get(c), s = (c) => {
      n.nodeQueue.push(c);
    }, l = (c) => {
      n.edgeQueue.push(c);
    }, u = (c) => {
      var p, g;
      const { nodeLookup: f, nodeOrigin: m } = t.getState(), y = fd(c) ? c : f.get(c.id), x = y.parentId ? zg(y.position, y.measured, y.parentId, f, m) : y.position, S = {
        ...y,
        position: x,
        width: ((p = y.measured) == null ? void 0 : p.width) ?? y.width,
        height: ((g = y.measured) == null ? void 0 : g.height) ?? y.height
      };
      return _r(S);
    }, a = (c, f, m = { replace: !1 }) => {
      s((y) => y.map((x) => {
        if (x.id === c) {
          const S = typeof f == "function" ? f(x) : f;
          return m.replace && fd(S) ? S : { ...x, ...S };
        }
        return x;
      }));
    }, d = (c, f, m = { replace: !1 }) => {
      l((y) => y.map((x) => {
        if (x.id === c) {
          const S = typeof f == "function" ? f(x) : f;
          return m.replace && Wk(S) ? S : { ...x, ...S };
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
        n.nodeQueue.push((m) => [...m, ...f]);
      },
      addEdges: (c) => {
        const f = Array.isArray(c) ? c : [c];
        n.edgeQueue.push((m) => [...m, ...f]);
      },
      toObject: () => {
        const { nodes: c = [], edges: f = [], transform: m } = t.getState(), [y, x, S] = m;
        return {
          nodes: c.map((p) => ({ ...p })),
          edges: f.map((p) => ({ ...p })),
          viewport: {
            x: y,
            y: x,
            zoom: S
          }
        };
      },
      deleteElements: async ({ nodes: c = [], edges: f = [] }) => {
        const { nodes: m, edges: y, onNodesDelete: x, onEdgesDelete: S, triggerNodeChanges: p, triggerEdgeChanges: g, onDelete: h, onBeforeDelete: v } = t.getState(), { nodes: _, edges: k } = await s_({
          nodesToRemove: c,
          edgesToRemove: f,
          nodes: m,
          edges: y,
          onBeforeDelete: v
        }), E = k.length > 0, T = _.length > 0;
        if (E) {
          const I = k.map(cd);
          S == null || S(k), g(I);
        }
        if (T) {
          const I = _.map(cd);
          x == null || x(_), p(I);
        }
        return (T || E) && (h == null || h({ nodes: _, edges: k })), { deletedNodes: _, deletedEdges: k };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (c, f = !0, m) => {
        const y = Hf(c), x = y ? c : u(c), S = m !== void 0;
        return x ? (m || t.getState().nodes).filter((p) => {
          const g = t.getState().nodeLookup.get(p.id);
          if (g && !y && (p.id === c.id || !g.internals.positionAbsolute))
            return !1;
          const h = _r(S ? p : g), v = Lo(h, x);
          return f && v > 0 || v >= h.width * h.height || v >= x.width * x.height;
        }) : [];
      },
      isNodeIntersecting: (c, f, m = !0) => {
        const x = Hf(c) ? c : u(c);
        if (!x)
          return !1;
        const S = Lo(x, f);
        return m && S > 0 || S >= f.width * f.height || S >= x.width * x.height;
      },
      updateNode: a,
      updateNodeData: (c, f, m = { replace: !1 }) => {
        a(c, (y) => {
          const x = typeof f == "function" ? f(y) : f;
          return m.replace ? { ...y, data: x } : { ...y, data: { ...y.data, ...x } };
        }, m);
      },
      updateEdge: d,
      updateEdgeData: (c, f, m = { replace: !1 }) => {
        d(c, (y) => {
          const x = typeof f == "function" ? f(y) : f;
          return m.replace ? { ...y, data: x } : { ...y, data: { ...y.data, ...x } };
        }, m);
      },
      getNodesBounds: (c) => {
        const { nodeLookup: f, nodeOrigin: m } = t.getState();
        return n_(c, { nodeLookup: f, nodeOrigin: m });
      },
      getHandleConnections: ({ type: c, id: f, nodeId: m }) => {
        var y;
        return Array.from(((y = t.getState().connectionLookup.get(`${m}-${c}${f ? `-${f}` : ""}`)) == null ? void 0 : y.values()) ?? []);
      },
      getNodeConnections: ({ type: c, handleId: f, nodeId: m }) => {
        var y;
        return Array.from(((y = t.getState().connectionLookup.get(`${m}${c ? f ? `-${c}-${f}` : `-${c}` : ""}`)) == null ? void 0 : y.values()) ?? []);
      },
      fitView: async (c) => {
        const f = t.getState().fitViewResolver ?? c_();
        return t.setState({ fitViewQueued: !0, fitViewOptions: c, fitViewResolver: f }), n.nodeQueue.push((m) => [...m]), f.promise;
      }
    };
  }, []);
  return N.useMemo(() => ({
    ...o,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const hd = (e) => e.selected, Zk = typeof window < "u" ? window : void 0;
function qk({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = pe(), { deleteElements: r } = Ue(), o = Ao(e, { actInsideInputWithModifier: !1 }), i = Ao(t, { target: Zk });
  N.useEffect(() => {
    if (o) {
      const { edges: s, nodes: l } = n.getState();
      r({ nodes: l.filter(hd), edges: s.filter(hd) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), N.useEffect(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function Jk(e) {
  const t = pe();
  N.useEffect(() => {
    const n = () => {
      var o, i, s, l;
      if (!e.current || !(((i = (o = e.current).checkVisibility) == null ? void 0 : i.call(o)) ?? !0))
        return !1;
      const r = Ka(e.current);
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
const Xs = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, eE = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function tE({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = Pn.Free, zoomOnDoubleClick: s = !0, panOnDrag: l = !0, defaultViewport: u, translateExtent: a, minZoom: d, maxZoom: c, zoomActivationKeyCode: f, preventScrolling: m = !0, children: y, noWheelClassName: x, noPanClassName: S, onViewportChange: p, isControlledViewport: g, paneClickDistance: h, selectionOnDrag: v }) {
  const _ = pe(), k = N.useRef(null), { userSelectionActive: E, lib: T, connectionInProgress: I } = ne(eE, he), R = Ao(f), D = N.useRef();
  Jk(k);
  const L = N.useCallback((b) => {
    p == null || p({ x: b[0], y: b[1], zoom: b[2] }), g || _.setState({ transform: b });
  }, [p, g]);
  return N.useEffect(() => {
    if (k.current) {
      D.current = Y_({
        domNode: k.current,
        minZoom: d,
        maxZoom: c,
        translateExtent: a,
        viewport: u,
        onDraggingChange: (z) => _.setState({ paneDragging: z }),
        onPanZoomStart: (z, $) => {
          const { onViewportChangeStart: C, onMoveStart: P } = _.getState();
          P == null || P(z, $), C == null || C($);
        },
        onPanZoom: (z, $) => {
          const { onViewportChange: C, onMove: P } = _.getState();
          P == null || P(z, $), C == null || C($);
        },
        onPanZoomEnd: (z, $) => {
          const { onViewportChangeEnd: C, onMoveEnd: P } = _.getState();
          P == null || P(z, $), C == null || C($);
        }
      });
      const { x: b, y: M, zoom: A } = D.current.getViewport();
      return _.setState({
        panZoom: D.current,
        transform: [b, M, A],
        domNode: k.current.closest(".react-flow")
      }), () => {
        var z;
        (z = D.current) == null || z.destroy();
      };
    }
  }, []), N.useEffect(() => {
    var b;
    (b = D.current) == null || b.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: o,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: l,
      zoomActivationKeyPressed: R,
      preventScrolling: m,
      noPanClassName: S,
      userSelectionActive: E,
      noWheelClassName: x,
      lib: T,
      onTransformChange: L,
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
    R,
    m,
    S,
    E,
    x,
    T,
    L,
    I,
    v,
    h
  ]), w.jsx("div", { className: "react-flow__renderer", ref: k, style: Xs, children: y });
}
const nE = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function rE() {
  const { userSelectionActive: e, userSelectionRect: t } = ne(nE, he);
  return e && t ? w.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Il = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, oE = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function iE({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Io.Full, panOnDrag: r, paneClickDistance: o, selectionOnDrag: i, onSelectionStart: s, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: a, onPaneScroll: d, onPaneMouseEnter: c, onPaneMouseMove: f, onPaneMouseLeave: m, children: y }) {
  const x = pe(), { userSelectionActive: S, elementsSelectable: p, dragging: g, connectionInProgress: h } = ne(oE, he), v = p && (e || S), _ = N.useRef(null), k = N.useRef(), E = N.useRef(/* @__PURE__ */ new Set()), T = N.useRef(/* @__PURE__ */ new Set()), I = N.useRef(!1), R = (C) => {
    if (I.current || h) {
      I.current = !1;
      return;
    }
    u == null || u(C), x.getState().resetSelectedElements(), x.setState({ nodesSelectionActive: !1 });
  }, D = (C) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      C.preventDefault();
      return;
    }
    a == null || a(C);
  }, L = d ? (C) => d(C) : void 0, b = (C) => {
    I.current && (C.stopPropagation(), I.current = !1);
  }, M = (C) => {
    var Y, X;
    const { domNode: P } = x.getState();
    if (k.current = P == null ? void 0 : P.getBoundingClientRect(), !k.current)
      return;
    const j = C.target === _.current;
    if (!j && !!C.target.closest(".nokey") || !e || !(i && j || t) || C.button !== 0 || !C.isPrimary)
      return;
    (X = (Y = C.target) == null ? void 0 : Y.setPointerCapture) == null || X.call(Y, C.pointerId), I.current = !1;
    const { x: U, y: V } = pt(C.nativeEvent, k.current);
    x.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: U,
        startY: V,
        x: U,
        y: V
      }
    }), j || (C.stopPropagation(), C.preventDefault());
  }, A = (C) => {
    const { userSelectionRect: P, transform: j, nodeLookup: F, edgeLookup: O, connectionLookup: U, triggerNodeChanges: V, triggerEdgeChanges: Y, defaultEdgeOptions: X, resetSelectedElements: Q } = x.getState();
    if (!k.current || !P)
      return;
    const { x: B, y: G } = pt(C.nativeEvent, k.current), { startX: ee, startY: J } = P;
    if (!I.current) {
      const oe = t ? 0 : o;
      if (Math.hypot(B - ee, G - J) <= oe)
        return;
      Q(), s == null || s(C);
    }
    I.current = !0;
    const q = {
      startX: ee,
      startY: J,
      x: B < ee ? B : ee,
      y: G < J ? G : J,
      width: Math.abs(B - ee),
      height: Math.abs(G - J)
    }, Z = E.current, ie = T.current;
    E.current = new Set(Ya(F, q, j, n === Io.Partial, !0).map((oe) => oe.id)), T.current = /* @__PURE__ */ new Set();
    const ae = (X == null ? void 0 : X.selectable) ?? !0;
    for (const oe of E.current) {
      const Te = U.get(oe);
      if (Te)
        for (const { edgeId: Yt } of Te.values()) {
          const Pt = O.get(Yt);
          Pt && (Pt.selectable ?? ae) && T.current.add(Yt);
        }
    }
    if (!Bf(Z, E.current)) {
      const oe = nr(F, E.current, !0);
      V(oe);
    }
    if (!Bf(ie, T.current)) {
      const oe = nr(O, T.current);
      Y(oe);
    }
    x.setState({
      userSelectionRect: q,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, z = (C) => {
    var P, j;
    C.button === 0 && ((j = (P = C.target) == null ? void 0 : P.releasePointerCapture) == null || j.call(P, C.pointerId), !S && C.target === _.current && x.getState().userSelectionRect && (R == null || R(C)), x.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), I.current && (l == null || l(C), x.setState({
      nodesSelectionActive: E.current.size > 0
    })));
  }, $ = r === !0 || Array.isArray(r) && r.includes(0);
  return w.jsxs("div", { className: Se(["react-flow__pane", { draggable: $, dragging: g, selection: e }]), onClick: v ? void 0 : Il(R, _), onContextMenu: Il(D, _), onWheel: Il(L, _), onPointerEnter: v ? void 0 : c, onPointerMove: v ? A : f, onPointerUp: v ? z : void 0, onPointerDownCapture: v ? M : void 0, onClickCapture: v ? b : void 0, onPointerLeave: m, ref: _, style: Xs, children: [y, w.jsx(rE, {})] });
}
function Bu({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
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
function am({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, nodeClickDistance: s }) {
  const l = pe(), [u, a] = N.useState(!1), d = N.useRef();
  return N.useEffect(() => {
    d.current = I_({
      getStoreItems: () => l.getState(),
      onNodeMouseDown: (c) => {
        Bu({
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
  }, []), N.useEffect(() => {
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
        var m;
        (m = d.current) == null || m.destroy();
      };
  }, [n, r, t, i, e, o]), u;
}
const sE = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function cm() {
  const e = pe();
  return N.useCallback((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: l, updateNodePositions: u, nodeLookup: a, nodeOrigin: d } = e.getState(), c = /* @__PURE__ */ new Map(), f = sE(s), m = o ? i[0] : 5, y = o ? i[1] : 5, x = n.direction.x * m * n.factor, S = n.direction.y * y * n.factor;
    for (const [, p] of a) {
      if (!f(p))
        continue;
      let g = {
        x: p.internals.positionAbsolute.x + x,
        y: p.internals.positionAbsolute.y + S
      };
      o && (g = Wo(g, i));
      const { position: h, positionAbsolute: v } = Ng({
        nodeId: p.id,
        nextPosition: g,
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
const tc = N.createContext(null), lE = tc.Provider;
tc.Consumer;
const fm = () => N.useContext(tc), uE = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), aE = (e, t, n) => (r) => {
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
function cE({ type: e = "source", position: t = K.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: l, children: u, className: a, onMouseDown: d, onTouchStart: c, ...f }, m) {
  var A, z;
  const y = s || null, x = e === "target", S = pe(), p = fm(), { connectOnClick: g, noPanClassName: h, rfId: v } = ne(uE, he), { connectingFrom: _, connectingTo: k, clickConnecting: E, isPossibleEndHandle: T, connectionInProcess: I, clickConnectionInProcess: R, valid: D } = ne(aE(p, y, e), he);
  p || (z = (A = S.getState()).onError) == null || z.call(A, "010", Nt.error010());
  const L = ($) => {
    const { defaultEdgeOptions: C, onConnect: P, hasDefaultEdges: j } = S.getState(), F = {
      ...C,
      ...$
    };
    if (j) {
      const { edges: O, setEdges: U } = S.getState();
      U(Ru(F, O));
    }
    P == null || P(F), l == null || l(F);
  }, b = ($) => {
    if (!p)
      return;
    const C = jg($.nativeEvent);
    if (o && (C && $.button === 0 || !C)) {
      const P = S.getState();
      Hu.onPointerDown($.nativeEvent, {
        handleDomNode: $.currentTarget,
        autoPanOnConnect: P.autoPanOnConnect,
        connectionMode: P.connectionMode,
        connectionRadius: P.connectionRadius,
        domNode: P.domNode,
        nodeLookup: P.nodeLookup,
        lib: P.lib,
        isTarget: x,
        handleId: y,
        nodeId: p,
        flowId: P.rfId,
        panBy: P.panBy,
        cancelConnection: P.cancelConnection,
        onConnectStart: P.onConnectStart,
        onConnectEnd: P.onConnectEnd,
        updateConnection: P.updateConnection,
        onConnect: L,
        isValidConnection: n || P.isValidConnection,
        getTransform: () => S.getState().transform,
        getFromHandle: () => S.getState().connection.fromHandle,
        autoPanSpeed: P.autoPanSpeed,
        dragThreshold: P.connectionDragThreshold
      });
    }
    C ? d == null || d($) : c == null || c($);
  }, M = ($) => {
    const { onClickConnectStart: C, onClickConnectEnd: P, connectionClickStartHandle: j, connectionMode: F, isValidConnection: O, lib: U, rfId: V, nodeLookup: Y, connection: X } = S.getState();
    if (!p || !j && !o)
      return;
    if (!j) {
      C == null || C($.nativeEvent, { nodeId: p, handleId: y, handleType: e }), S.setState({ connectionClickStartHandle: { nodeId: p, type: e, id: y } });
      return;
    }
    const Q = Ig($.target), B = n || O, { connection: G, isValid: ee } = Hu.isValid($.nativeEvent, {
      handle: {
        nodeId: p,
        id: y,
        type: e
      },
      connectionMode: F,
      fromNodeId: j.nodeId,
      fromHandleId: j.id || null,
      fromType: j.type,
      isValidConnection: B,
      flowId: V,
      doc: Q,
      lib: U,
      nodeLookup: Y
    });
    ee && G && L(G);
    const J = structuredClone(X);
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, P == null || P($, J), S.setState({ connectionClickStartHandle: null });
  };
  return w.jsx("div", { "data-handleid": y, "data-nodeid": p, "data-handlepos": t, "data-id": `${v}-${p}-${y}-${e}`, className: Se([
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
      clickconnecting: E,
      connectingfrom: _,
      connectingto: k,
      valid: D,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!I || T) && (I || R ? i : o)
    }
  ]), onMouseDown: b, onTouchStart: b, onClick: g ? M : void 0, ref: m, ...f, children: u });
}
const Nr = N.memo(lm(cE));
function fE({ data: e, isConnectable: t, sourcePosition: n = K.Bottom }) {
  return w.jsxs(w.Fragment, { children: [e == null ? void 0 : e.label, w.jsx(Nr, { type: "source", position: n, isConnectable: t })] });
}
function dE({ data: e, isConnectable: t, targetPosition: n = K.Top, sourcePosition: r = K.Bottom }) {
  return w.jsxs(w.Fragment, { children: [w.jsx(Nr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, w.jsx(Nr, { type: "source", position: r, isConnectable: t })] });
}
function hE() {
  return null;
}
function pE({ data: e, isConnectable: t, targetPosition: n = K.Top }) {
  return w.jsxs(w.Fragment, { children: [w.jsx(Nr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const ws = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, pd = {
  input: fE,
  default: dE,
  output: pE,
  group: hE
};
function gE(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const mE = (e) => {
  const { width: t, height: n, x: r, y: o } = Uo(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: ht(t) ? t : null,
    height: ht(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`
  };
};
function yE({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = pe(), { width: o, height: i, transformString: s, userSelectionActive: l } = ne(mE, he), u = cm(), a = N.useRef(null);
  if (N.useEffect(() => {
    var f;
    n || (f = a.current) == null || f.focus({
      preventScroll: !0
    });
  }, [n]), am({
    nodeRef: a
  }), l || !o || !i)
    return null;
  const d = e ? (f) => {
    const m = r.getState().nodes.filter((y) => y.selected);
    e(f, m);
  } : void 0, c = (f) => {
    Object.prototype.hasOwnProperty.call(ws, f.key) && (f.preventDefault(), u({
      direction: ws[f.key],
      factor: f.shiftKey ? 4 : 1
    }));
  };
  return w.jsx("div", { className: Se(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: w.jsx("div", { ref: a, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : c, style: {
    width: o,
    height: i
  } }) });
}
const gd = typeof window < "u" ? window : void 0, vE = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function dm({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: l, deleteKeyCode: u, selectionKeyCode: a, selectionOnDrag: d, selectionMode: c, onSelectionStart: f, onSelectionEnd: m, multiSelectionKeyCode: y, panActivationKeyCode: x, zoomActivationKeyCode: S, elementsSelectable: p, zoomOnScroll: g, zoomOnPinch: h, panOnScroll: v, panOnScrollSpeed: _, panOnScrollMode: k, zoomOnDoubleClick: E, panOnDrag: T, defaultViewport: I, translateExtent: R, minZoom: D, maxZoom: L, preventScrolling: b, onSelectionContextMenu: M, noWheelClassName: A, noPanClassName: z, disableKeyboardA11y: $, onViewportChange: C, isControlledViewport: P }) {
  const { nodesSelectionActive: j, userSelectionActive: F } = ne(vE, he), O = Ao(a, { target: gd }), U = Ao(x, { target: gd }), V = U || T, Y = U || v, X = d && V !== !0, Q = O || F || X;
  return qk({ deleteKeyCode: u, multiSelectionKeyCode: y }), w.jsx(tE, { onPaneContextMenu: i, elementsSelectable: p, zoomOnScroll: g, zoomOnPinch: h, panOnScroll: Y, panOnScrollSpeed: _, panOnScrollMode: k, zoomOnDoubleClick: E, panOnDrag: !O && V, defaultViewport: I, translateExtent: R, minZoom: D, maxZoom: L, zoomActivationKeyCode: S, preventScrolling: b, noWheelClassName: A, noPanClassName: z, onViewportChange: C, isControlledViewport: P, paneClickDistance: l, selectionOnDrag: X, children: w.jsxs(iE, { onSelectionStart: f, onSelectionEnd: m, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: V, isSelecting: !!Q, selectionMode: c, selectionKeyPressed: O, paneClickDistance: l, selectionOnDrag: X, children: [e, j && w.jsx(yE, { onSelectionContextMenu: M, noPanClassName: z, disableKeyboardA11y: $ })] }) });
}
dm.displayName = "FlowRenderer";
const xE = N.memo(dm), wE = (e) => (t) => e ? Ya(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function SE(e) {
  return ne(N.useCallback(wE(e), [e]), he);
}
const _E = (e) => e.updateNodeInternals;
function kE() {
  const e = ne(_E), [t] = N.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
  return N.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function EE({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = pe(), i = N.useRef(null), s = N.useRef(null), l = N.useRef(e.sourcePosition), u = N.useRef(e.targetPosition), a = N.useRef(t), d = n && !!e.internals.handleBounds;
  return N.useEffect(() => {
    i.current && !e.hidden && (!d || s.current !== i.current) && (s.current && (r == null || r.unobserve(s.current)), r == null || r.observe(i.current), s.current = i.current);
  }, [d, e.hidden]), N.useEffect(() => () => {
    s.current && (r == null || r.unobserve(s.current), s.current = null);
  }, []), N.useEffect(() => {
    if (i.current) {
      const c = a.current !== t, f = l.current !== e.sourcePosition, m = u.current !== e.targetPosition;
      (c || f || m) && (a.current = t, l.current = e.sourcePosition, u.current = e.targetPosition, o.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function CE({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: l, elementsSelectable: u, nodesConnectable: a, nodesFocusable: d, resizeObserver: c, noDragClassName: f, noPanClassName: m, disableKeyboardA11y: y, rfId: x, nodeTypes: S, nodeClickDistance: p, onError: g }) {
  const { node: h, internals: v, isParent: _ } = ne((B) => {
    const G = B.nodeLookup.get(e), ee = B.parentLookup.has(e);
    return {
      node: G,
      internals: G.internals,
      isParent: ee
    };
  }, he);
  let k = h.type || "default", E = (S == null ? void 0 : S[k]) || pd[k];
  E === void 0 && (g == null || g("003", Nt.error003(k)), k = "default", E = (S == null ? void 0 : S.default) || pd.default);
  const T = !!(h.draggable || l && typeof h.draggable > "u"), I = !!(h.selectable || u && typeof h.selectable > "u"), R = !!(h.connectable || a && typeof h.connectable > "u"), D = !!(h.focusable || d && typeof h.focusable > "u"), L = pe(), b = Dg(h), M = EE({ node: h, nodeType: k, hasDimensions: b, resizeObserver: c }), A = am({
    nodeRef: M,
    disabled: h.hidden || !T,
    noDragClassName: f,
    handleSelector: h.dragHandle,
    nodeId: e,
    isSelectable: I,
    nodeClickDistance: p
  }), z = cm();
  if (h.hidden)
    return null;
  const $ = Ut(h), C = gE(h), P = I || T || t || n || r || o, j = n ? (B) => n(B, { ...v.userNode }) : void 0, F = r ? (B) => r(B, { ...v.userNode }) : void 0, O = o ? (B) => o(B, { ...v.userNode }) : void 0, U = i ? (B) => i(B, { ...v.userNode }) : void 0, V = s ? (B) => s(B, { ...v.userNode }) : void 0, Y = (B) => {
    const { selectNodesOnDrag: G, nodeDragThreshold: ee } = L.getState();
    I && (!G || !T || ee > 0) && Bu({
      id: e,
      store: L,
      nodeRef: M
    }), t && t(B, { ...v.userNode });
  }, X = (B) => {
    if (!(Lg(B.nativeEvent) || y)) {
      if (Sg.includes(B.key) && I) {
        const G = B.key === "Escape";
        Bu({
          id: e,
          store: L,
          unselect: G,
          nodeRef: M
        });
      } else if (T && h.selected && Object.prototype.hasOwnProperty.call(ws, B.key)) {
        B.preventDefault();
        const { ariaLabelConfig: G } = L.getState();
        L.setState({
          ariaLiveMessage: G["node.a11yDescription.ariaLiveMessage"]({
            direction: B.key.replace("Arrow", "").toLowerCase(),
            x: ~~v.positionAbsolute.x,
            y: ~~v.positionAbsolute.y
          })
        }), z({
          direction: ws[B.key],
          factor: B.shiftKey ? 4 : 1
        });
      }
    }
  }, Q = () => {
    var ie;
    if (y || !((ie = M.current) != null && ie.matches(":focus-visible")))
      return;
    const { transform: B, width: G, height: ee, autoPanOnNodeFocus: J, setCenter: q } = L.getState();
    if (!J)
      return;
    Ya(/* @__PURE__ */ new Map([[e, h]]), { x: 0, y: 0, width: G, height: ee }, B, !0).length > 0 || q(h.position.x + $.width / 2, h.position.y + $.height / 2, {
      zoom: B[2]
    });
  };
  return w.jsx("div", { className: Se([
    "react-flow__node",
    `react-flow__node-${k}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [m]: T
    },
    h.className,
    {
      selected: h.selected,
      selectable: I,
      parent: _,
      draggable: T,
      dragging: A
    }
  ]), ref: M, style: {
    zIndex: v.z,
    transform: `translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,
    pointerEvents: P ? "all" : "none",
    visibility: b ? "visible" : "hidden",
    ...h.style,
    ...C
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: j, onMouseMove: F, onMouseLeave: O, onContextMenu: U, onClick: Y, onDoubleClick: V, onKeyDown: D ? X : void 0, tabIndex: D ? 0 : void 0, onFocus: D ? Q : void 0, role: h.ariaRole ?? (D ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": y ? void 0 : `${tm}-${x}`, "aria-label": h.ariaLabel, ...h.domAttributes, children: w.jsx(lE, { value: e, children: w.jsx(E, { id: e, data: h.data, type: k, positionAbsoluteX: v.positionAbsolute.x, positionAbsoluteY: v.positionAbsolute.y, selected: h.selected ?? !1, selectable: I, draggable: T, deletable: h.deletable ?? !0, isConnectable: R, sourcePosition: h.sourcePosition, targetPosition: h.targetPosition, dragging: A, dragHandle: h.dragHandle, zIndex: v.z, parentId: h.parentId, ...$ }) }) });
}
var NE = N.memo(CE);
const ME = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function hm(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = ne(ME, he), s = SE(e.onlyRenderVisibleElements), l = kE();
  return w.jsx("div", { className: "react-flow__nodes", style: Xs, children: s.map((u) => (
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
    w.jsx(NE, { id: u, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: l, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, u)
  )) });
}
hm.displayName = "NodeRenderer";
const PE = N.memo(hm);
function TE(e) {
  return ne(N.useCallback((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && p_({
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
const DE = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return w.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, zE = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return w.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, md = {
  [ys.Arrow]: DE,
  [ys.ArrowClosed]: zE
};
function IE(e) {
  const t = pe();
  return N.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(md, e) ? md[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", Nt.error009(e)), null);
  }, [e]);
}
const LE = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: l = "auto-start-reverse" }) => {
  const u = IE(t);
  return u ? w.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: l, refX: "0", refY: "0", children: w.jsx(u, { color: n, strokeWidth: s }) }) : null;
}, pm = ({ defaultColor: e, rfId: t }) => {
  const n = ne((i) => i.edges), r = ne((i) => i.defaultEdgeOptions), o = N.useMemo(() => S_(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? w.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: w.jsx("defs", { children: o.map((i) => w.jsx(LE, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
pm.displayName = "MarkerDefinitions";
var jE = N.memo(pm);
function gm({ x: e, y: t, label: n, labelStyle: r, labelShowBg: o = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: l = 2, children: u, className: a, ...d }) {
  const [c, f] = N.useState({ x: 1, y: 0, width: 0, height: 0 }), m = Se(["react-flow__edge-textwrapper", a]), y = N.useRef(null);
  return N.useEffect(() => {
    if (y.current) {
      const x = y.current.getBBox();
      f({
        x: x.x,
        y: x.y,
        width: x.width,
        height: x.height
      });
    }
  }, [n]), n ? w.jsxs("g", { transform: `translate(${e - c.width / 2} ${t - c.height / 2})`, className: m, visibility: c.width ? "visible" : "hidden", ...d, children: [o && w.jsx("rect", { width: c.width + 2 * s[0], x: -s[0], y: -s[1], height: c.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: l, ry: l }), w.jsx("text", { className: "react-flow__edge-text", y: c.height / 2, dy: "0.3em", ref: y, style: r, children: n }), u] }) : null;
}
gm.displayName = "EdgeText";
const AE = N.memo(gm);
function Ko({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u, interactionWidth: a = 20, ...d }) {
  return w.jsxs(w.Fragment, { children: [w.jsx("path", { ...d, d: e, fill: "none", className: Se(["react-flow__edge-path", d.className]) }), a ? w.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: a, className: "react-flow__edge-interaction" }) : null, r && ht(t) && ht(n) ? w.jsx(AE, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u }) : null] });
}
function yd({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === K.Left || e === K.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function mm({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top }) {
  const [s, l] = yd({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [u, a] = yd({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [d, c, f, m] = Ag({
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
    m
  ];
}
function ym(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s, targetPosition: l, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: m, style: y, markerEnd: x, markerStart: S, interactionWidth: p }) => {
    const [g, h, v] = mm({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: l
    }), _ = e.isInternal ? void 0 : t;
    return w.jsx(Ko, { id: _, path: g, labelX: h, labelY: v, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: m, style: y, markerEnd: x, markerStart: S, interactionWidth: p });
  });
}
const $E = ym({ isInternal: !1 }), vm = ym({ isInternal: !0 });
$E.displayName = "SimpleBezierEdge";
vm.displayName = "SimpleBezierEdgeInternal";
function xm(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, sourcePosition: m = K.Bottom, targetPosition: y = K.Top, markerEnd: x, markerStart: S, pathOptions: p, interactionWidth: g }) => {
    const [h, v, _] = Ou({
      sourceX: n,
      sourceY: r,
      sourcePosition: m,
      targetX: o,
      targetY: i,
      targetPosition: y,
      borderRadius: p == null ? void 0 : p.borderRadius,
      offset: p == null ? void 0 : p.offset,
      stepPosition: p == null ? void 0 : p.stepPosition
    }), k = e.isInternal ? void 0 : t;
    return w.jsx(Ko, { id: k, path: h, labelX: v, labelY: _, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: x, markerStart: S, interactionWidth: g });
  });
}
const wm = xm({ isInternal: !1 }), Sm = xm({ isInternal: !0 });
wm.displayName = "SmoothStepEdge";
Sm.displayName = "SmoothStepEdgeInternal";
function _m(e) {
  return N.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return w.jsx(wm, { ...n, id: r, pathOptions: N.useMemo(() => {
      var i;
      return { borderRadius: 0, offset: (i = n.pathOptions) == null ? void 0 : i.offset };
    }, [(o = n.pathOptions) == null ? void 0 : o.offset]) });
  });
}
const RE = _m({ isInternal: !1 }), km = _m({ isInternal: !0 });
RE.displayName = "StepEdge";
km.displayName = "StepEdgeInternal";
function Em(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: m, markerStart: y, interactionWidth: x }) => {
    const [S, p, g] = Rg({ sourceX: n, sourceY: r, targetX: o, targetY: i }), h = e.isInternal ? void 0 : t;
    return w.jsx(Ko, { id: h, path: S, labelX: p, labelY: g, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: m, markerStart: y, interactionWidth: x });
  });
}
const OE = Em({ isInternal: !1 }), Cm = Em({ isInternal: !0 });
OE.displayName = "StraightEdge";
Cm.displayName = "StraightEdgeInternal";
function Nm(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = K.Bottom, targetPosition: l = K.Top, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: m, style: y, markerEnd: x, markerStart: S, pathOptions: p, interactionWidth: g }) => {
    const [h, v, _] = Qa({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: l,
      curvature: p == null ? void 0 : p.curvature
    }), k = e.isInternal ? void 0 : t;
    return w.jsx(Ko, { id: k, path: h, labelX: v, labelY: _, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: m, style: y, markerEnd: x, markerStart: S, interactionWidth: g });
  });
}
const FE = Nm({ isInternal: !1 }), Mm = Nm({ isInternal: !0 });
FE.displayName = "BezierEdge";
Mm.displayName = "BezierEdgeInternal";
const vd = {
  default: Mm,
  straight: Cm,
  step: km,
  smoothstep: Sm,
  simplebezier: vm
}, xd = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, bE = (e, t, n) => n === K.Left ? e - t : n === K.Right ? e + t : e, HE = (e, t, n) => n === K.Top ? e - t : n === K.Bottom ? e + t : e, wd = "react-flow__edgeupdater";
function Sd({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: l }) {
  return w.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: Se([wd, `${wd}-${l}`]), cx: bE(t, r, e), cy: HE(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function BE({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: l, targetPosition: u, onReconnect: a, onReconnectStart: d, onReconnectEnd: c, setReconnecting: f, setUpdateHover: m }) {
  const y = pe(), x = (v, _) => {
    if (v.button !== 0)
      return;
    const { autoPanOnConnect: k, domNode: E, isValidConnection: T, connectionMode: I, connectionRadius: R, lib: D, onConnectStart: L, onConnectEnd: b, cancelConnection: M, nodeLookup: A, rfId: z, panBy: $, updateConnection: C } = y.getState(), P = _.type === "target", j = (U, V) => {
      f(!1), c == null || c(U, n, _.type, V);
    }, F = (U) => a == null ? void 0 : a(n, U), O = (U, V) => {
      f(!0), d == null || d(v, n, _.type), L == null || L(U, V);
    };
    Hu.onPointerDown(v.nativeEvent, {
      autoPanOnConnect: k,
      connectionMode: I,
      connectionRadius: R,
      domNode: E,
      handleId: _.id,
      nodeId: _.nodeId,
      nodeLookup: A,
      isTarget: P,
      edgeUpdaterType: _.type,
      lib: D,
      flowId: z,
      cancelConnection: M,
      panBy: $,
      isValidConnection: T,
      onConnect: F,
      onConnectStart: O,
      onConnectEnd: b,
      onReconnectEnd: j,
      updateConnection: C,
      getTransform: () => y.getState().transform,
      getFromHandle: () => y.getState().connection.fromHandle,
      dragThreshold: y.getState().connectionDragThreshold,
      handleDomNode: v.currentTarget
    });
  }, S = (v) => x(v, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), p = (v) => x(v, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), g = () => m(!0), h = () => m(!1);
  return w.jsxs(w.Fragment, { children: [(e === !0 || e === "source") && w.jsx(Sd, { position: l, centerX: r, centerY: o, radius: t, onMouseDown: S, onMouseEnter: g, onMouseOut: h, type: "source" }), (e === !0 || e === "target") && w.jsx(Sd, { position: u, centerX: i, centerY: s, radius: t, onMouseDown: p, onMouseEnter: g, onMouseOut: h, type: "target" })] });
}
function VE({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: l, onMouseMove: u, onMouseLeave: a, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: m, rfId: y, edgeTypes: x, noPanClassName: S, onError: p, disableKeyboardA11y: g }) {
  let h = ne((q) => q.edgeLookup.get(e));
  const v = ne((q) => q.defaultEdgeOptions);
  h = v ? { ...v, ...h } : h;
  let _ = h.type || "default", k = (x == null ? void 0 : x[_]) || vd[_];
  k === void 0 && (p == null || p("011", Nt.error011(_)), _ = "default", k = (x == null ? void 0 : x.default) || vd.default);
  const E = !!(h.focusable || t && typeof h.focusable > "u"), T = typeof c < "u" && (h.reconnectable || n && typeof h.reconnectable > "u"), I = !!(h.selectable || r && typeof h.selectable > "u"), R = N.useRef(null), [D, L] = N.useState(!1), [b, M] = N.useState(!1), A = pe(), { zIndex: z, sourceX: $, sourceY: C, targetX: P, targetY: j, sourcePosition: F, targetPosition: O } = ne(N.useCallback((q) => {
    const Z = q.nodeLookup.get(h.source), ie = q.nodeLookup.get(h.target);
    if (!Z || !ie)
      return {
        zIndex: h.zIndex,
        ...xd
      };
    const ae = w_({
      id: e,
      sourceNode: Z,
      targetNode: ie,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: q.connectionMode,
      onError: p
    });
    return {
      zIndex: h_({
        selected: h.selected,
        zIndex: h.zIndex,
        sourceNode: Z,
        targetNode: ie,
        elevateOnSelect: q.elevateEdgesOnSelect,
        zIndexMode: q.zIndexMode
      }),
      ...ae || xd
    };
  }, [h.source, h.target, h.sourceHandle, h.targetHandle, h.selected, h.zIndex]), he), U = N.useMemo(() => h.markerStart ? `url('#${Fu(h.markerStart, y)}')` : void 0, [h.markerStart, y]), V = N.useMemo(() => h.markerEnd ? `url('#${Fu(h.markerEnd, y)}')` : void 0, [h.markerEnd, y]);
  if (h.hidden || $ === null || C === null || P === null || j === null)
    return null;
  const Y = (q) => {
    var oe;
    const { addSelectedEdges: Z, unselectNodesAndEdges: ie, multiSelectionActive: ae } = A.getState();
    I && (A.setState({ nodesSelectionActive: !1 }), h.selected && ae ? (ie({ nodes: [], edges: [h] }), (oe = R.current) == null || oe.blur()) : Z([e])), o && o(q, h);
  }, X = i ? (q) => {
    i(q, { ...h });
  } : void 0, Q = s ? (q) => {
    s(q, { ...h });
  } : void 0, B = l ? (q) => {
    l(q, { ...h });
  } : void 0, G = u ? (q) => {
    u(q, { ...h });
  } : void 0, ee = a ? (q) => {
    a(q, { ...h });
  } : void 0, J = (q) => {
    var Z;
    if (!g && Sg.includes(q.key) && I) {
      const { unselectNodesAndEdges: ie, addSelectedEdges: ae } = A.getState();
      q.key === "Escape" ? ((Z = R.current) == null || Z.blur(), ie({ edges: [h] })) : ae([e]);
    }
  };
  return w.jsx("svg", { style: { zIndex: z }, children: w.jsxs("g", { className: Se([
    "react-flow__edge",
    `react-flow__edge-${_}`,
    h.className,
    S,
    {
      selected: h.selected,
      animated: h.animated,
      inactive: !I && !o,
      updating: D,
      selectable: I
    }
  ]), onClick: Y, onDoubleClick: X, onContextMenu: Q, onMouseEnter: B, onMouseMove: G, onMouseLeave: ee, onKeyDown: E ? J : void 0, tabIndex: E ? 0 : void 0, role: h.ariaRole ?? (E ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": h.ariaLabel === null ? void 0 : h.ariaLabel || `Edge from ${h.source} to ${h.target}`, "aria-describedby": E ? `${nm}-${y}` : void 0, ref: R, ...h.domAttributes, children: [!b && w.jsx(k, { id: e, source: h.source, target: h.target, type: h.type, selected: h.selected, animated: h.animated, selectable: I, deletable: h.deletable ?? !0, label: h.label, labelStyle: h.labelStyle, labelShowBg: h.labelShowBg, labelBgStyle: h.labelBgStyle, labelBgPadding: h.labelBgPadding, labelBgBorderRadius: h.labelBgBorderRadius, sourceX: $, sourceY: C, targetX: P, targetY: j, sourcePosition: F, targetPosition: O, data: h.data, style: h.style, sourceHandleId: h.sourceHandle, targetHandleId: h.targetHandle, markerStart: U, markerEnd: V, pathOptions: "pathOptions" in h ? h.pathOptions : void 0, interactionWidth: h.interactionWidth }), T && w.jsx(BE, { edge: h, isReconnectable: T, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: m, sourceX: $, sourceY: C, targetX: P, targetY: j, sourcePosition: F, targetPosition: O, setUpdateHover: L, setReconnecting: M })] }) });
}
var UE = N.memo(VE);
const WE = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function Pm({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: l, onEdgeMouseMove: u, onEdgeMouseLeave: a, onEdgeClick: d, reconnectRadius: c, onEdgeDoubleClick: f, onReconnectStart: m, onReconnectEnd: y, disableKeyboardA11y: x }) {
  const { edgesFocusable: S, edgesReconnectable: p, elementsSelectable: g, onError: h } = ne(WE, he), v = TE(t);
  return w.jsxs("div", { className: "react-flow__edges", children: [w.jsx(jE, { defaultColor: e, rfId: n }), v.map((_) => w.jsx(UE, { id: _, edgesFocusable: S, edgesReconnectable: p, elementsSelectable: g, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: l, onMouseMove: u, onMouseLeave: a, onClick: d, reconnectRadius: c, onDoubleClick: f, onReconnectStart: m, onReconnectEnd: y, rfId: n, onError: h, edgeTypes: r, disableKeyboardA11y: x }, _))] });
}
Pm.displayName = "EdgeRenderer";
const YE = N.memo(Pm), XE = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function KE({ children: e }) {
  const t = ne(XE);
  return w.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function QE(e) {
  const t = Ue(), n = N.useRef(!1);
  N.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const GE = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function ZE(e) {
  const t = ne(GE), n = pe();
  return N.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function qE(e) {
  return e.connection.inProgress ? { ...e.connection, to: Yo(e.connection.to, e.transform) } : { ...e.connection };
}
function JE(e) {
  return qE;
}
function eC(e) {
  const t = JE();
  return ne(t, he);
}
const tC = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function nC({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: l, inProgress: u } = ne(tC, he);
  return !(i && o && u) ? null : w.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: w.jsx("g", { className: Se(["react-flow__connection", Eg(l)]), children: w.jsx(Tm, { style: t, type: n, CustomComponent: r, isValid: l }) }) });
}
const Tm = ({ style: e, type: t = en.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: l, fromPosition: u, to: a, toNode: d, toHandle: c, toPosition: f, pointer: m } = eC();
  if (!o)
    return;
  if (n)
    return w.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: l, fromX: i.x, fromY: i.y, toX: a.x, toY: a.y, fromPosition: u, toPosition: f, connectionStatus: Eg(r), toNode: d, toHandle: c, pointer: m });
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
    case en.Bezier:
      [y] = Qa(x);
      break;
    case en.SimpleBezier:
      [y] = mm(x);
      break;
    case en.Step:
      [y] = Ou({
        ...x,
        borderRadius: 0
      });
      break;
    case en.SmoothStep:
      [y] = Ou(x);
      break;
    default:
      [y] = Rg(x);
  }
  return w.jsx("path", { d: y, fill: "none", className: "react-flow__connection-path", style: e });
};
Tm.displayName = "ConnectionLine";
const rC = {};
function _d(e = rC) {
  N.useRef(e), pe(), N.useEffect(() => {
  }, [e]);
}
function oC() {
  pe(), N.useRef(!1), N.useEffect(() => {
  }, []);
}
function Dm({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: l, onNodeMouseMove: u, onNodeMouseLeave: a, onNodeContextMenu: d, onSelectionContextMenu: c, onSelectionStart: f, onSelectionEnd: m, connectionLineType: y, connectionLineStyle: x, connectionLineComponent: S, connectionLineContainerStyle: p, selectionKeyCode: g, selectionOnDrag: h, selectionMode: v, multiSelectionKeyCode: _, panActivationKeyCode: k, zoomActivationKeyCode: E, deleteKeyCode: T, onlyRenderVisibleElements: I, elementsSelectable: R, defaultViewport: D, translateExtent: L, minZoom: b, maxZoom: M, preventScrolling: A, defaultMarkerColor: z, zoomOnScroll: $, zoomOnPinch: C, panOnScroll: P, panOnScrollSpeed: j, panOnScrollMode: F, zoomOnDoubleClick: O, panOnDrag: U, onPaneClick: V, onPaneMouseEnter: Y, onPaneMouseMove: X, onPaneMouseLeave: Q, onPaneScroll: B, onPaneContextMenu: G, paneClickDistance: ee, nodeClickDistance: J, onEdgeContextMenu: q, onEdgeMouseEnter: Z, onEdgeMouseMove: ie, onEdgeMouseLeave: ae, reconnectRadius: oe, onReconnect: Te, onReconnectStart: Yt, onReconnectEnd: Pt, noDragClassName: yn, noWheelClassName: Dr, noPanClassName: zr, disableKeyboardA11y: Ir, nodeExtent: Qs, rfId: Qo, viewport: bn, onViewportChange: Lr }) {
  return _d(e), _d(t), oC(), QE(n), ZE(bn), w.jsx(xE, { onPaneClick: V, onPaneMouseEnter: Y, onPaneMouseMove: X, onPaneMouseLeave: Q, onPaneContextMenu: G, onPaneScroll: B, paneClickDistance: ee, deleteKeyCode: T, selectionKeyCode: g, selectionOnDrag: h, selectionMode: v, onSelectionStart: f, onSelectionEnd: m, multiSelectionKeyCode: _, panActivationKeyCode: k, zoomActivationKeyCode: E, elementsSelectable: R, zoomOnScroll: $, zoomOnPinch: C, zoomOnDoubleClick: O, panOnScroll: P, panOnScrollSpeed: j, panOnScrollMode: F, panOnDrag: U, defaultViewport: D, translateExtent: L, minZoom: b, maxZoom: M, onSelectionContextMenu: c, preventScrolling: A, noDragClassName: yn, noWheelClassName: Dr, noPanClassName: zr, disableKeyboardA11y: Ir, onViewportChange: Lr, isControlledViewport: !!bn, children: w.jsxs(KE, { children: [w.jsx(YE, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: Te, onReconnectStart: Yt, onReconnectEnd: Pt, onlyRenderVisibleElements: I, onEdgeContextMenu: q, onEdgeMouseEnter: Z, onEdgeMouseMove: ie, onEdgeMouseLeave: ae, reconnectRadius: oe, defaultMarkerColor: z, noPanClassName: zr, disableKeyboardA11y: Ir, rfId: Qo }), w.jsx(nC, { style: x, type: y, component: S, containerStyle: p }), w.jsx("div", { className: "react-flow__edgelabel-renderer" }), w.jsx(PE, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: l, onNodeMouseMove: u, onNodeMouseLeave: a, onNodeContextMenu: d, nodeClickDistance: J, onlyRenderVisibleElements: I, noPanClassName: zr, noDragClassName: yn, disableKeyboardA11y: Ir, nodeExtent: Qs, rfId: Qo }), w.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
Dm.displayName = "GraphView";
const iC = N.memo(Dm), kd = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: u = 0.5, maxZoom: a = 2, nodeOrigin: d, nodeExtent: c, zIndexMode: f = "basic" } = {}) => {
  const m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), p = r ?? t ?? [], g = n ?? e ?? [], h = d ?? [0, 0], v = c ?? zo;
  bg(x, S, p);
  const _ = bu(g, m, y, {
    nodeOrigin: h,
    nodeExtent: v,
    zIndexMode: f
  });
  let k = [0, 0, 1];
  if (s && o && i) {
    const E = Uo(m, {
      filter: (D) => !!((D.width || D.initialWidth) && (D.height || D.initialHeight))
    }), { x: T, y: I, zoom: R } = Xa(E, o, i, u, a, (l == null ? void 0 : l.padding) ?? 0.1);
    k = [T, I, R];
  }
  return {
    rfId: "1",
    width: o ?? 0,
    height: i ?? 0,
    transform: k,
    nodes: g,
    nodesInitialized: _,
    nodeLookup: m,
    parentLookup: y,
    edges: p,
    edgeLookup: S,
    connectionLookup: x,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: u,
    maxZoom: a,
    translateExtent: zo,
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
    connection: { ...kg },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: l_,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: _g,
    zIndexMode: f,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, sC = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: u, maxZoom: a, nodeOrigin: d, nodeExtent: c, zIndexMode: f }) => Ek((m, y) => {
  async function x() {
    const { nodeLookup: S, panZoom: p, fitViewOptions: g, fitViewResolver: h, width: v, height: _, minZoom: k, maxZoom: E } = y();
    p && (await i_({
      nodes: S,
      width: v,
      height: _,
      panZoom: p,
      minZoom: k,
      maxZoom: E
    }, g), h == null || h.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...kd({
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
    setNodes: (S) => {
      const { nodeLookup: p, parentLookup: g, nodeOrigin: h, elevateNodesOnSelect: v, fitViewQueued: _, zIndexMode: k } = y(), E = bu(S, p, g, {
        nodeOrigin: h,
        nodeExtent: c,
        elevateNodesOnSelect: v,
        checkEquality: !0,
        zIndexMode: k
      });
      _ && E ? (x(), m({ nodes: S, nodesInitialized: E, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: S, nodesInitialized: E });
    },
    setEdges: (S) => {
      const { connectionLookup: p, edgeLookup: g } = y();
      bg(p, g, S), m({ edges: S });
    },
    setDefaultNodesAndEdges: (S, p) => {
      if (S) {
        const { setNodes: g } = y();
        g(S), m({ hasDefaultNodes: !0 });
      }
      if (p) {
        const { setEdges: g } = y();
        g(p), m({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (S) => {
      const { triggerNodeChanges: p, nodeLookup: g, parentLookup: h, domNode: v, nodeOrigin: _, nodeExtent: k, debug: E, fitViewQueued: T, zIndexMode: I } = y(), { changes: R, updatedInternals: D } = P_(S, g, h, v, _, k, I);
      D && (E_(g, h, { nodeOrigin: _, nodeExtent: k, zIndexMode: I }), T ? (x(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (R == null ? void 0 : R.length) > 0 && (E && console.log("React Flow: trigger node changes", R), p == null || p(R)));
    },
    updateNodePositions: (S, p = !1) => {
      const g = [];
      let h = [];
      const { nodeLookup: v, triggerNodeChanges: _, connection: k, updateConnection: E, onNodesChangeMiddlewareMap: T } = y();
      for (const [I, R] of S) {
        const D = v.get(I), L = !!(D != null && D.expandParent && (D != null && D.parentId) && (R != null && R.position)), b = {
          id: I,
          type: "position",
          position: L ? {
            x: Math.max(0, R.position.x),
            y: Math.max(0, R.position.y)
          } : R.position,
          dragging: p
        };
        if (D && k.inProgress && k.fromNode.id === D.id) {
          const M = Rn(D, k.fromHandle, K.Left, !0);
          E({ ...k, from: M });
        }
        L && D.parentId && g.push({
          id: I,
          parentId: D.parentId,
          rect: {
            ...R.internals.positionAbsolute,
            width: R.measured.width ?? 0,
            height: R.measured.height ?? 0
          }
        }), h.push(b);
      }
      if (g.length > 0) {
        const { parentLookup: I, nodeOrigin: R } = y(), D = ec(g, v, I, R);
        h.push(...D);
      }
      for (const I of T.values())
        h = I(h);
      _(h);
    },
    triggerNodeChanges: (S) => {
      const { onNodesChange: p, setNodes: g, nodes: h, hasDefaultNodes: v, debug: _ } = y();
      if (S != null && S.length) {
        if (v) {
          const k = im(S, h);
          g(k);
        }
        _ && console.log("React Flow: trigger node changes", S), p == null || p(S);
      }
    },
    triggerEdgeChanges: (S) => {
      const { onEdgesChange: p, setEdges: g, edges: h, hasDefaultEdges: v, debug: _ } = y();
      if (S != null && S.length) {
        if (v) {
          const k = sm(S, h);
          g(k);
        }
        _ && console.log("React Flow: trigger edge changes", S), p == null || p(S);
      }
    },
    addSelectedNodes: (S) => {
      const { multiSelectionActive: p, edgeLookup: g, nodeLookup: h, triggerNodeChanges: v, triggerEdgeChanges: _ } = y();
      if (p) {
        const k = S.map((E) => wn(E, !0));
        v(k);
        return;
      }
      v(nr(h, /* @__PURE__ */ new Set([...S]), !0)), _(nr(g));
    },
    addSelectedEdges: (S) => {
      const { multiSelectionActive: p, edgeLookup: g, nodeLookup: h, triggerNodeChanges: v, triggerEdgeChanges: _ } = y();
      if (p) {
        const k = S.map((E) => wn(E, !0));
        _(k);
        return;
      }
      _(nr(g, /* @__PURE__ */ new Set([...S]))), v(nr(h, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: S, edges: p } = {}) => {
      const { edges: g, nodes: h, nodeLookup: v, triggerNodeChanges: _, triggerEdgeChanges: k } = y(), E = S || h, T = p || g, I = E.map((D) => {
        const L = v.get(D.id);
        return L && (L.selected = !1), wn(D.id, !1);
      }), R = T.map((D) => wn(D.id, !1));
      _(I), k(R);
    },
    setMinZoom: (S) => {
      const { panZoom: p, maxZoom: g } = y();
      p == null || p.setScaleExtent([S, g]), m({ minZoom: S });
    },
    setMaxZoom: (S) => {
      const { panZoom: p, minZoom: g } = y();
      p == null || p.setScaleExtent([g, S]), m({ maxZoom: S });
    },
    setTranslateExtent: (S) => {
      var p;
      (p = y().panZoom) == null || p.setTranslateExtent(S), m({ translateExtent: S });
    },
    resetSelectedElements: () => {
      const { edges: S, nodes: p, triggerNodeChanges: g, triggerEdgeChanges: h, elementsSelectable: v } = y();
      if (!v)
        return;
      const _ = p.reduce((E, T) => T.selected ? [...E, wn(T.id, !1)] : E, []), k = S.reduce((E, T) => T.selected ? [...E, wn(T.id, !1)] : E, []);
      g(_), h(k);
    },
    setNodeExtent: (S) => {
      const { nodes: p, nodeLookup: g, parentLookup: h, nodeOrigin: v, elevateNodesOnSelect: _, nodeExtent: k, zIndexMode: E } = y();
      S[0][0] === k[0][0] && S[0][1] === k[0][1] && S[1][0] === k[1][0] && S[1][1] === k[1][1] || (bu(p, g, h, {
        nodeOrigin: v,
        nodeExtent: S,
        elevateNodesOnSelect: _,
        checkEquality: !1,
        zIndexMode: E
      }), m({ nodeExtent: S }));
    },
    panBy: (S) => {
      const { transform: p, width: g, height: h, panZoom: v, translateExtent: _ } = y();
      return T_({ delta: S, panZoom: v, transform: p, translateExtent: _, width: g, height: h });
    },
    setCenter: async (S, p, g) => {
      const { width: h, height: v, maxZoom: _, panZoom: k } = y();
      if (!k)
        return Promise.resolve(!1);
      const E = typeof (g == null ? void 0 : g.zoom) < "u" ? g.zoom : _;
      return await k.setViewport({
        x: h / 2 - S * E,
        y: v / 2 - p * E,
        zoom: E
      }, { duration: g == null ? void 0 : g.duration, ease: g == null ? void 0 : g.ease, interpolate: g == null ? void 0 : g.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      m({
        connection: { ...kg }
      });
    },
    updateConnection: (S) => {
      m({ connection: S });
    },
    reset: () => m({ ...kd() })
  };
}, Object.is);
function zm({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: l, initialFitViewOptions: u, fitView: a, nodeOrigin: d, nodeExtent: c, zIndexMode: f, children: m }) {
  const [y] = N.useState(() => sC({
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
  return w.jsx(Ck, { value: y, children: w.jsx(Kk, { children: m }) });
}
function lC({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: l, fitViewOptions: u, minZoom: a, maxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: m }) {
  return N.useContext(Ys) ? w.jsx(w.Fragment, { children: e }) : w.jsx(zm, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: l, initialFitViewOptions: u, initialMinZoom: a, initialMaxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: m, children: e });
}
const uC = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function aC({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: l, onEdgeClick: u, onInit: a, onMove: d, onMoveStart: c, onMoveEnd: f, onConnect: m, onConnectStart: y, onConnectEnd: x, onClickConnectStart: S, onClickConnectEnd: p, onNodeMouseEnter: g, onNodeMouseMove: h, onNodeMouseLeave: v, onNodeContextMenu: _, onNodeDoubleClick: k, onNodeDragStart: E, onNodeDrag: T, onNodeDragStop: I, onNodesDelete: R, onEdgesDelete: D, onDelete: L, onSelectionChange: b, onSelectionDragStart: M, onSelectionDrag: A, onSelectionDragStop: z, onSelectionContextMenu: $, onSelectionStart: C, onSelectionEnd: P, onBeforeDelete: j, connectionMode: F, connectionLineType: O = en.Bezier, connectionLineStyle: U, connectionLineComponent: V, connectionLineContainerStyle: Y, deleteKeyCode: X = "Backspace", selectionKeyCode: Q = "Shift", selectionOnDrag: B = !1, selectionMode: G = Io.Full, panActivationKeyCode: ee = "Space", multiSelectionKeyCode: J = jo() ? "Meta" : "Control", zoomActivationKeyCode: q = jo() ? "Meta" : "Control", snapToGrid: Z, snapGrid: ie, onlyRenderVisibleElements: ae = !1, selectNodesOnDrag: oe, nodesDraggable: Te, autoPanOnNodeFocus: Yt, nodesConnectable: Pt, nodesFocusable: yn, nodeOrigin: Dr = rm, edgesFocusable: zr, edgesReconnectable: Ir, elementsSelectable: Qs = !0, defaultViewport: Qo = Ok, minZoom: bn = 0.5, maxZoom: Lr = 2, translateExtent: oc = zo, preventScrolling: Km = !0, nodeExtent: Gs, defaultMarkerColor: Qm = "#b1b1b7", zoomOnScroll: Gm = !0, zoomOnPinch: Zm = !0, panOnScroll: qm = !1, panOnScrollSpeed: Jm = 0.5, panOnScrollMode: e0 = Pn.Free, zoomOnDoubleClick: t0 = !0, panOnDrag: n0 = !0, onPaneClick: r0, onPaneMouseEnter: o0, onPaneMouseMove: i0, onPaneMouseLeave: s0, onPaneScroll: l0, onPaneContextMenu: u0, paneClickDistance: a0 = 1, nodeClickDistance: c0 = 0, children: f0, onReconnect: d0, onReconnectStart: h0, onReconnectEnd: p0, onEdgeContextMenu: g0, onEdgeDoubleClick: m0, onEdgeMouseEnter: y0, onEdgeMouseMove: v0, onEdgeMouseLeave: x0, reconnectRadius: w0 = 10, onNodesChange: S0, onEdgesChange: _0, noDragClassName: k0 = "nodrag", noWheelClassName: E0 = "nowheel", noPanClassName: ic = "nopan", fitView: sc, fitViewOptions: lc, connectOnClick: C0, attributionPosition: N0, proOptions: M0, defaultEdgeOptions: P0, elevateNodesOnSelect: T0 = !0, elevateEdgesOnSelect: D0 = !1, disableKeyboardA11y: uc = !1, autoPanOnConnect: z0, autoPanOnNodeDrag: I0, autoPanSpeed: L0, connectionRadius: j0, isValidConnection: A0, onError: $0, style: R0, id: ac, nodeDragThreshold: O0, connectionDragThreshold: F0, viewport: b0, onViewportChange: H0, width: B0, height: V0, colorMode: U0 = "light", debug: W0, onScroll: Go, ariaLabelConfig: Y0, zIndexMode: cc = "basic", ...X0 }, K0) {
  const Zs = ac || "1", Q0 = Bk(U0), G0 = N.useCallback((fc) => {
    fc.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Go == null || Go(fc);
  }, [Go]);
  return w.jsx("div", { "data-testid": "rf__wrapper", ...X0, onScroll: G0, style: { ...R0, ...uC }, ref: K0, className: Se(["react-flow", o, Q0]), id: ac, role: "application", children: w.jsxs(lC, { nodes: e, edges: t, width: B0, height: V0, fitView: sc, fitViewOptions: lc, minZoom: bn, maxZoom: Lr, nodeOrigin: Dr, nodeExtent: Gs, zIndexMode: cc, children: [w.jsx(iC, { onInit: a, onNodeClick: l, onEdgeClick: u, onNodeMouseEnter: g, onNodeMouseMove: h, onNodeMouseLeave: v, onNodeContextMenu: _, onNodeDoubleClick: k, nodeTypes: i, edgeTypes: s, connectionLineType: O, connectionLineStyle: U, connectionLineComponent: V, connectionLineContainerStyle: Y, selectionKeyCode: Q, selectionOnDrag: B, selectionMode: G, deleteKeyCode: X, multiSelectionKeyCode: J, panActivationKeyCode: ee, zoomActivationKeyCode: q, onlyRenderVisibleElements: ae, defaultViewport: Qo, translateExtent: oc, minZoom: bn, maxZoom: Lr, preventScrolling: Km, zoomOnScroll: Gm, zoomOnPinch: Zm, zoomOnDoubleClick: t0, panOnScroll: qm, panOnScrollSpeed: Jm, panOnScrollMode: e0, panOnDrag: n0, onPaneClick: r0, onPaneMouseEnter: o0, onPaneMouseMove: i0, onPaneMouseLeave: s0, onPaneScroll: l0, onPaneContextMenu: u0, paneClickDistance: a0, nodeClickDistance: c0, onSelectionContextMenu: $, onSelectionStart: C, onSelectionEnd: P, onReconnect: d0, onReconnectStart: h0, onReconnectEnd: p0, onEdgeContextMenu: g0, onEdgeDoubleClick: m0, onEdgeMouseEnter: y0, onEdgeMouseMove: v0, onEdgeMouseLeave: x0, reconnectRadius: w0, defaultMarkerColor: Qm, noDragClassName: k0, noWheelClassName: E0, noPanClassName: ic, rfId: Zs, disableKeyboardA11y: uc, nodeExtent: Gs, viewport: b0, onViewportChange: H0 }), w.jsx(Hk, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: m, onConnectStart: y, onConnectEnd: x, onClickConnectStart: S, onClickConnectEnd: p, nodesDraggable: Te, autoPanOnNodeFocus: Yt, nodesConnectable: Pt, nodesFocusable: yn, edgesFocusable: zr, edgesReconnectable: Ir, elementsSelectable: Qs, elevateNodesOnSelect: T0, elevateEdgesOnSelect: D0, minZoom: bn, maxZoom: Lr, nodeExtent: Gs, onNodesChange: S0, onEdgesChange: _0, snapToGrid: Z, snapGrid: ie, connectionMode: F, translateExtent: oc, connectOnClick: C0, defaultEdgeOptions: P0, fitView: sc, fitViewOptions: lc, onNodesDelete: R, onEdgesDelete: D, onDelete: L, onNodeDragStart: E, onNodeDrag: T, onNodeDragStop: I, onSelectionDrag: A, onSelectionDragStart: M, onSelectionDragStop: z, onMove: d, onMoveStart: c, onMoveEnd: f, noPanClassName: ic, nodeOrigin: Dr, rfId: Zs, autoPanOnConnect: z0, autoPanOnNodeDrag: I0, autoPanSpeed: L0, onError: $0, connectionRadius: j0, isValidConnection: A0, selectNodesOnDrag: oe, nodeDragThreshold: O0, connectionDragThreshold: F0, onBeforeDelete: j, debug: W0, ariaLabelConfig: Y0, zIndexMode: cc }), w.jsx(Rk, { onSelectionChange: b }), f0, w.jsx(Ik, { proOptions: M0, position: N0 }), w.jsx(zk, { rfId: Zs, disableKeyboardA11y: uc })] }) });
}
var cC = lm(aC);
const fC = (e) => {
  var t;
  return (t = e.domNode) == null ? void 0 : t.querySelector(".react-flow__edgelabel-renderer");
};
function dC({ children: e }) {
  const t = ne(fC);
  return t ? Vp.createPortal(e, t) : null;
}
function hC(e) {
  const [t, n] = N.useState(e), r = N.useCallback((o) => n((i) => im(o, i)), []);
  return [t, n, r];
}
function pC(e) {
  const [t, n] = N.useState(e), r = N.useCallback((o) => n((i) => sm(o, i)), []);
  return [t, n, r];
}
function gC({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return w.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: Se(["react-flow__background-pattern", n, r]) });
}
function mC({ radius: e, className: t }) {
  return w.jsx("circle", { cx: e, cy: e, r: e, className: Se(["react-flow__background-pattern", "dots", t]) });
}
var Rt;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Rt || (Rt = {}));
const yC = {
  [Rt.Dots]: 1,
  [Rt.Lines]: 1,
  [Rt.Cross]: 6
}, vC = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function Im({
  id: e,
  variant: t = Rt.Dots,
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
  const c = N.useRef(null), { transform: f, patternId: m } = ne(vC, he), y = r || yC[t], x = t === Rt.Dots, S = t === Rt.Cross, p = Array.isArray(n) ? n : [n, n], g = [p[0] * f[2] || 1, p[1] * f[2] || 1], h = y * f[2], v = Array.isArray(i) ? i : [i, i], _ = S ? [h, h] : g, k = [
    v[0] * f[2] || 1 + _[0] / 2,
    v[1] * f[2] || 1 + _[1] / 2
  ], E = `${m}${e || ""}`;
  return w.jsxs("svg", { className: Se(["react-flow__background", a]), style: {
    ...u,
    ...Xs,
    "--xy-background-color-props": l,
    "--xy-background-pattern-color-props": s
  }, ref: c, "data-testid": "rf__background", children: [w.jsx("pattern", { id: E, x: f[0] % g[0], y: f[1] % g[1], width: g[0], height: g[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${k[0]},-${k[1]})`, children: x ? w.jsx(mC, { radius: h / 2, className: d }) : w.jsx(gC, { dimensions: _, lineWidth: o, variant: t, className: d }) }), w.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${E})` })] });
}
Im.displayName = "Background";
const xC = N.memo(Im);
function wC() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: w.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function SC() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: w.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function _C() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: w.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function kC() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: w.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function EC() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: w.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function _i({ children: e, className: t, ...n }) {
  return w.jsx("button", { type: "button", className: Se(["react-flow__controls-button", t]), ...n, children: e });
}
const CC = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function Lm({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: l, onInteractiveChange: u, className: a, children: d, position: c = "bottom-left", orientation: f = "vertical", "aria-label": m }) {
  const y = pe(), { isInteractive: x, minZoomReached: S, maxZoomReached: p, ariaLabelConfig: g } = ne(CC, he), { zoomIn: h, zoomOut: v, fitView: _ } = Ue(), k = () => {
    h(), i == null || i();
  }, E = () => {
    v(), s == null || s();
  }, T = () => {
    _(o), l == null || l();
  }, I = () => {
    y.setState({
      nodesDraggable: !x,
      nodesConnectable: !x,
      elementsSelectable: !x
    }), u == null || u(!x);
  }, R = f === "horizontal" ? "horizontal" : "vertical";
  return w.jsxs(Xo, { className: Se(["react-flow__controls", R, a]), position: c, style: e, "data-testid": "rf__controls", "aria-label": m ?? g["controls.ariaLabel"], children: [t && w.jsxs(w.Fragment, { children: [w.jsx(_i, { onClick: k, className: "react-flow__controls-zoomin", title: g["controls.zoomIn.ariaLabel"], "aria-label": g["controls.zoomIn.ariaLabel"], disabled: p, children: w.jsx(wC, {}) }), w.jsx(_i, { onClick: E, className: "react-flow__controls-zoomout", title: g["controls.zoomOut.ariaLabel"], "aria-label": g["controls.zoomOut.ariaLabel"], disabled: S, children: w.jsx(SC, {}) })] }), n && w.jsx(_i, { className: "react-flow__controls-fitview", onClick: T, title: g["controls.fitView.ariaLabel"], "aria-label": g["controls.fitView.ariaLabel"], children: w.jsx(_C, {}) }), r && w.jsx(_i, { className: "react-flow__controls-interactive", onClick: I, title: g["controls.interactive.ariaLabel"], "aria-label": g["controls.interactive.ariaLabel"], children: x ? w.jsx(EC, {}) : w.jsx(kC, {}) }), d] });
}
Lm.displayName = "Controls";
const NC = N.memo(Lm);
function MC({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: l, strokeWidth: u, className: a, borderRadius: d, shapeRendering: c, selected: f, onClick: m }) {
  const { background: y, backgroundColor: x } = i || {}, S = s || y || x;
  return w.jsx("rect", { className: Se(["react-flow__minimap-node", { selected: f }, a]), x: t, y: n, rx: d, ry: d, width: r, height: o, style: {
    fill: S,
    stroke: l,
    strokeWidth: u
  }, shapeRendering: c, onClick: m ? (p) => m(p, e) : void 0 });
}
const PC = N.memo(MC), TC = (e) => e.nodes.map((t) => t.id), Ll = (e) => e instanceof Function ? e : () => e;
function DC({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = PC,
  onClick: s
}) {
  const l = ne(TC, he), u = Ll(t), a = Ll(e), d = Ll(n), c = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return w.jsx(w.Fragment, { children: l.map((f) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    w.jsx(IC, { id: f, nodeColorFunc: u, nodeStrokeColorFunc: a, nodeClassNameFunc: d, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: c }, f)
  )) });
}
function zC({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: l, onClick: u }) {
  const { node: a, x: d, y: c, width: f, height: m } = ne((y) => {
    const { internals: x } = y.nodeLookup.get(e), S = x.userNode, { x: p, y: g } = x.positionAbsolute, { width: h, height: v } = Ut(S);
    return {
      node: S,
      x: p,
      y: g,
      width: h,
      height: v
    };
  }, he);
  return !a || a.hidden || !Dg(a) ? null : w.jsx(l, { x: d, y: c, width: f, height: m, style: a.style, selected: !!a.selected, className: r(a), color: t(a), borderRadius: o, strokeColor: n(a), strokeWidth: i, shapeRendering: s, onClick: u, id: a.id });
}
const IC = N.memo(zC);
var LC = N.memo(DC);
const jC = 200, AC = 150, $C = (e) => !e.hidden, RC = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? Tg(Uo(e.nodeLookup, { filter: $C }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, OC = "react-flow__minimap-desc";
function jm({
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
  onClick: m,
  onNodeClick: y,
  pannable: x = !1,
  zoomable: S = !1,
  ariaLabel: p,
  inversePan: g,
  zoomStep: h = 1,
  offsetScale: v = 5
}) {
  const _ = pe(), k = N.useRef(null), { boundingRect: E, viewBB: T, rfId: I, panZoom: R, translateExtent: D, flowWidth: L, flowHeight: b, ariaLabelConfig: M } = ne(RC, he), A = (e == null ? void 0 : e.width) ?? jC, z = (e == null ? void 0 : e.height) ?? AC, $ = E.width / A, C = E.height / z, P = Math.max($, C), j = P * A, F = P * z, O = v * P, U = E.x - (j - E.width) / 2 - O, V = E.y - (F - E.height) / 2 - O, Y = j + O * 2, X = F + O * 2, Q = `${OC}-${I}`, B = N.useRef(0), G = N.useRef();
  B.current = P, N.useEffect(() => {
    if (k.current && R)
      return G.current = O_({
        domNode: k.current,
        panZoom: R,
        getTransform: () => _.getState().transform,
        getViewScale: () => B.current
      }), () => {
        var Z;
        (Z = G.current) == null || Z.destroy();
      };
  }, [R]), N.useEffect(() => {
    var Z;
    (Z = G.current) == null || Z.update({
      translateExtent: D,
      width: L,
      height: b,
      inversePan: g,
      pannable: x,
      zoomStep: h,
      zoomable: S
    });
  }, [x, S, g, h, D, L, b]);
  const ee = m ? (Z) => {
    var oe;
    const [ie, ae] = ((oe = G.current) == null ? void 0 : oe.pointer(Z)) || [0, 0];
    m(Z, { x: ie, y: ae });
  } : void 0, J = y ? N.useCallback((Z, ie) => {
    const ae = _.getState().nodeLookup.get(ie).internals.userNode;
    y(Z, ae);
  }, []) : void 0, q = p ?? M["minimap.ariaLabel"];
  return w.jsx(Xo, { position: f, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-background-color-props": typeof a == "string" ? a : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof c == "number" ? c * P : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: Se(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: w.jsxs("svg", { width: A, height: z, viewBox: `${U} ${V} ${Y} ${X}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": Q, ref: k, onClick: ee, children: [q && w.jsx("title", { id: Q, children: q }), w.jsx(LC, { onClick: J, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: l }), w.jsx("path", { className: "react-flow__minimap-mask", d: `M${U - O},${V - O}h${Y + O * 2}v${X + O * 2}h${-Y - O * 2}z
        M${T.x},${T.y}h${T.width}v${T.height}h${-T.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
jm.displayName = "MiniMap";
const FC = N.memo(jm), bC = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, HC = {
  [Er.Line]: "right",
  [Er.Handle]: "bottom-right"
};
function BC({ nodeId: e, position: t, variant: n = Er.Handle, className: r, style: o = void 0, children: i, color: s, minWidth: l = 10, minHeight: u = 10, maxWidth: a = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: c = !1, resizeDirection: f, autoScale: m = !0, shouldResize: y, onResizeStart: x, onResize: S, onResizeEnd: p }) {
  const g = fm(), h = typeof e == "string" ? e : g, v = pe(), _ = N.useRef(null), k = n === Er.Handle, E = ne(N.useCallback(bC(k && m), [k, m]), he), T = N.useRef(null), I = t ?? HC[n];
  N.useEffect(() => {
    if (!(!_.current || !h))
      return T.current || (T.current = q_({
        domNode: _.current,
        nodeId: h,
        getStoreItems: () => {
          const { nodeLookup: D, transform: L, snapGrid: b, snapToGrid: M, nodeOrigin: A, domNode: z } = v.getState();
          return {
            nodeLookup: D,
            transform: L,
            snapGrid: b,
            snapToGrid: M,
            nodeOrigin: A,
            paneDomNode: z
          };
        },
        onChange: (D, L) => {
          const { triggerNodeChanges: b, nodeLookup: M, parentLookup: A, nodeOrigin: z } = v.getState(), $ = [], C = { x: D.x, y: D.y }, P = M.get(h);
          if (P && P.expandParent && P.parentId) {
            const j = P.origin ?? z, F = D.width ?? P.measured.width ?? 0, O = D.height ?? P.measured.height ?? 0, U = {
              id: P.id,
              parentId: P.parentId,
              rect: {
                width: F,
                height: O,
                ...zg({
                  x: D.x ?? P.position.x,
                  y: D.y ?? P.position.y
                }, { width: F, height: O }, P.parentId, M, j)
              }
            }, V = ec([U], M, A, z);
            $.push(...V), C.x = D.x ? Math.max(j[0] * F, D.x) : void 0, C.y = D.y ? Math.max(j[1] * O, D.y) : void 0;
          }
          if (C.x !== void 0 && C.y !== void 0) {
            const j = {
              id: h,
              type: "position",
              position: { ...C }
            };
            $.push(j);
          }
          if (D.width !== void 0 && D.height !== void 0) {
            const F = {
              id: h,
              type: "dimensions",
              resizing: !0,
              setAttributes: f ? f === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: D.width,
                height: D.height
              }
            };
            $.push(F);
          }
          for (const j of L) {
            const F = {
              ...j,
              type: "position"
            };
            $.push(F);
          }
          b($);
        },
        onEnd: ({ width: D, height: L }) => {
          const b = {
            id: h,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: D,
              height: L
            }
          };
          v.getState().triggerNodeChanges([b]);
        }
      })), T.current.update({
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
        onResize: S,
        onResizeEnd: p,
        shouldResize: y
      }), () => {
        var D;
        (D = T.current) == null || D.destroy();
      };
  }, [
    I,
    l,
    u,
    a,
    d,
    c,
    x,
    S,
    p,
    y
  ]);
  const R = I.split("-");
  return w.jsx("div", { className: Se(["react-flow__resize-control", "nodrag", ...R, n, r]), ref: _, style: {
    ...o,
    scale: E,
    ...s && { [k ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
N.memo(BC);
const le = {
  fact: { light: "#3B5998", dark: "#7B9BD2" },
  idea: { light: "#D4A017", dark: "#E8C65A" },
  question: { light: "#7B3FA0", dark: "#B07DD6" },
  constraint: { light: "#C0392B", dark: "#E07B6F" },
  thesis: { light: "#1B5420", dark: "#4A9E54" },
  action: { light: "#0E7490", dark: "#38B2CC" },
  data_collection: { light: "#4338CA", dark: "#7C74E0" },
  data_view: { light: "#0F766E", dark: "#2DD4BF" },
  untyped: { light: "#9CA3AF", dark: "#6B7280" }
}, VC = {
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
  // Framed window for data view (a captured slice of the store)
  data_view: "M2 3h12v10H2V3zm0 3h12M5 3v3",
  // Dash for untyped
  untyped: "M4 8h8"
}, Je = {
  fact: {
    component: null,
    label: "Fact",
    headerColor: le.fact.light,
    headerColorDark: le.fact.dark,
    icon: "fact",
    defaultData: { label: "", text: "", source: "" }
  },
  idea: {
    component: null,
    label: "Idea",
    headerColor: le.idea.light,
    headerColorDark: le.idea.dark,
    icon: "idea",
    defaultData: { label: "", text: "" }
  },
  question: {
    component: null,
    label: "Question",
    headerColor: le.question.light,
    headerColorDark: le.question.dark,
    icon: "question",
    defaultData: { label: "", text: "" }
  },
  constraint: {
    component: null,
    label: "Constraint",
    headerColor: le.constraint.light,
    headerColorDark: le.constraint.dark,
    icon: "constraint",
    defaultData: { label: "", text: "" }
  },
  thesis: {
    component: null,
    label: "Thesis",
    headerColor: le.thesis.light,
    headerColorDark: le.thesis.dark,
    icon: "thesis",
    defaultData: { label: "", text: "" }
  },
  action: {
    component: null,
    label: "Action",
    headerColor: le.action.light,
    headerColorDark: le.action.dark,
    icon: "action",
    defaultData: { label: "", text: "", state: "empty", workflow_type: "", workflow_config_name: "" }
  },
  data_collection: {
    component: null,
    label: "Data Collection",
    headerColor: le.data_collection.light,
    headerColorDark: le.data_collection.dark,
    icon: "data_collection",
    defaultData: { label: "", text: "", db_endpoint: "", patent_nrs: [], query_filter: {} }
  },
  data_view: {
    component: null,
    label: "Data View",
    headerColor: le.data_view.light,
    headerColorDark: le.data_view.dark,
    icon: "data_view",
    // Content (store_ref/selector/preview) is server-owned; user only names it.
    defaultData: { label: "" }
  },
  untyped: {
    component: null,
    label: "Untyped",
    headerColor: le.untyped.light,
    headerColorDark: le.untyped.dark,
    icon: "untyped",
    defaultData: { label: "", text: "" }
  }
}, Am = Object.keys(Je), UC = [
  "idea",
  "question",
  "fact",
  "constraint",
  "thesis",
  "action",
  "data_collection",
  "data_view",
  "untyped"
];
function nc({ type: e, size: t = 16, color: n }) {
  var i;
  const r = VC[e];
  if (!r) return null;
  const o = n ?? ((i = le[e]) == null ? void 0 : i.light) ?? "#9CA3AF";
  return /* @__PURE__ */ w.jsx(
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
      children: /* @__PURE__ */ w.jsx("path", { d: r })
    }
  );
}
function Wt({
  type: e,
  label: t,
  icon: n,
  headerColor: r,
  selected: o,
  committed: i,
  children: s,
  onLabelChange: l
}) {
  const [u, a] = N.useState(!1), [d, c] = N.useState(t), f = N.useRef(null);
  N.useEffect(() => {
    u || c(t);
  }, [t, u]), N.useEffect(() => {
    u && f.current && (f.current.focus(), f.current.select());
  }, [u]);
  const m = N.useCallback(() => {
    a(!1);
    const p = d.trim();
    p && p !== t && l ? l(p) : c(t);
  }, [d, t, l]), y = N.useCallback(
    (p) => {
      p.key === "Enter" ? m() : p.key === "Escape" && (c(t), a(!1));
    },
    [m, t]
  ), x = i === !1 ? "dashed" : "solid", S = i === !1 ? 0.7 : 1;
  return /* @__PURE__ */ w.jsxs(
    "div",
    {
      className: `canvas-node canvas-node--${e}${o ? " canvas-node--selected" : ""}`,
      style: { opacity: S, borderStyle: x },
      onDoubleClick: (p) => p.stopPropagation(),
      children: [
        /* @__PURE__ */ w.jsx(Nr, { type: "target", position: K.Top }),
        /* @__PURE__ */ w.jsxs("div", { className: "canvas-node-header", style: { backgroundColor: r }, children: [
          /* @__PURE__ */ w.jsx(nc, { type: n, size: 16, color: "currentColor" }),
          u ? /* @__PURE__ */ w.jsx(
            "input",
            {
              ref: f,
              className: "canvas-node-label-input",
              value: d,
              onChange: (p) => c(p.target.value),
              onBlur: m,
              onKeyDown: y
            }
          ) : /* @__PURE__ */ w.jsx(
            "span",
            {
              className: "canvas-node-label",
              onDoubleClick: () => l && a(!0),
              title: t || "Double-click to edit",
              children: t || "Untitled"
            }
          )
        ] }),
        /* @__PURE__ */ w.jsx("div", { className: "canvas-node-content", children: s }),
        /* @__PURE__ */ w.jsx(Nr, { type: "source", position: K.Bottom })
      ]
    }
  );
}
function $m({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.source || "", d = t.label || "", c = N.useCallback(() => {
    l(u), i(!0);
  }, [u]), f = N.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { text: s.trim() });
  }, [e, s, u, r]), m = N.useCallback(
    (y) => {
      y.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ w.jsxs(
    Wt,
    {
      type: "fact",
      label: d,
      icon: "fact",
      headerColor: le.fact.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (y) => r(e, { label: y }),
      children: [
        o ? /* @__PURE__ */ w.jsx(
          "textarea",
          {
            className: "canvas-node-edit-input",
            value: s,
            onChange: (y) => l(y.target.value),
            onBlur: f,
            onKeyDown: m,
            autoFocus: !0,
            rows: 3
          }
        ) : /* @__PURE__ */ w.jsx("div", { onDoubleClick: c, className: "canvas-node-text", children: u || /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add content" }) }),
        a && /* @__PURE__ */ w.jsxs("div", { className: "canvas-node-source", children: [
          "Source: ",
          a
        ] })
      ]
    }
  );
}
function Rm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = N.useCallback(() => {
    l(u), i(!0);
  }, [u]), c = N.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { text: s.trim() });
  }, [e, s, u, r]), f = N.useCallback(
    (m) => {
      m.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ w.jsx(
    Wt,
    {
      type: "idea",
      label: a,
      icon: "idea",
      headerColor: le.idea.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (m) => r(e, { label: m }),
      children: o ? /* @__PURE__ */ w.jsx(
        "textarea",
        {
          className: "canvas-node-edit-input",
          value: s,
          onChange: (m) => l(m.target.value),
          onBlur: c,
          onKeyDown: f,
          autoFocus: !0,
          rows: 3
        }
      ) : /* @__PURE__ */ w.jsx("div", { onDoubleClick: d, className: "canvas-node-text", children: u || /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add content" }) })
    }
  );
}
function Om({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = N.useCallback(() => {
    l(u), i(!0);
  }, [u]), c = N.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { text: s.trim() });
  }, [e, s, u, r]), f = N.useCallback(
    (m) => {
      m.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ w.jsx(
    Wt,
    {
      type: "question",
      label: a,
      icon: "question",
      headerColor: le.question.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (m) => r(e, { label: m }),
      children: o ? /* @__PURE__ */ w.jsx(
        "textarea",
        {
          className: "canvas-node-edit-input",
          value: s,
          onChange: (m) => l(m.target.value),
          onBlur: c,
          onKeyDown: f,
          autoFocus: !0,
          rows: 3
        }
      ) : /* @__PURE__ */ w.jsx("div", { onDoubleClick: d, className: "canvas-node-text", children: u || /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add a question" }) })
    }
  );
}
function Fm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = t.parameter || "", c = t.min, f = t.max, m = t.unit || "", y = d || c !== void 0 || f !== void 0, x = N.useCallback(() => {
    l(u), i(!0);
  }, [u]), S = N.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { text: s.trim() });
  }, [e, s, u, r]), p = N.useCallback(
    (g) => {
      g.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ w.jsxs(
    Wt,
    {
      type: "constraint",
      label: a,
      icon: "constraint",
      headerColor: le.constraint.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (g) => r(e, { label: g }),
      children: [
        o ? /* @__PURE__ */ w.jsx(
          "textarea",
          {
            className: "canvas-node-edit-input",
            value: s,
            onChange: (g) => l(g.target.value),
            onBlur: S,
            onKeyDown: p,
            autoFocus: !0,
            rows: 3
          }
        ) : /* @__PURE__ */ w.jsx("div", { onDoubleClick: x, className: "canvas-node-text", children: u || !y && /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add content" }) }),
        y && /* @__PURE__ */ w.jsxs("div", { className: "canvas-node-structured", children: [
          d && /* @__PURE__ */ w.jsx("span", { className: "canvas-node-param", children: d }),
          (c !== void 0 || f !== void 0) && /* @__PURE__ */ w.jsxs("span", { className: "canvas-node-range", children: [
            c !== void 0 ? c : "…",
            " – ",
            f !== void 0 ? f : "…",
            m && ` ${m}`
          ] })
        ] })
      ]
    }
  );
}
function bm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = N.useCallback(() => {
    l(u), i(!0);
  }, [u]), c = N.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { text: s.trim() });
  }, [e, s, u, r]), f = N.useCallback(
    (m) => {
      m.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ w.jsx(
    Wt,
    {
      type: "thesis",
      label: a,
      icon: "thesis",
      headerColor: le.thesis.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (m) => r(e, { label: m }),
      children: o ? /* @__PURE__ */ w.jsx(
        "textarea",
        {
          className: "canvas-node-edit-input",
          value: s,
          onChange: (m) => l(m.target.value),
          onBlur: c,
          onKeyDown: f,
          autoFocus: !0,
          rows: 4
        }
      ) : /* @__PURE__ */ w.jsx("div", { onDoubleClick: d, className: "canvas-node-text", children: u || /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to state your thesis" }) })
    }
  );
}
const Ed = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (a, d) => {
    const c = typeof a == "function" ? a(t) : a;
    if (!Object.is(c, t)) {
      const f = t;
      t = d ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((m) => m(t, f));
    }
  }, o = () => t, l = { setState: r, getState: o, getInitialState: () => u, subscribe: (a) => (n.add(a), () => n.delete(a)) }, u = t = e(r, o, l);
  return l;
}, WC = (e) => e ? Ed(e) : Ed, YC = (e) => e;
function XC(e, t = YC) {
  const n = Ur.useSyncExternalStore(
    e.subscribe,
    Ur.useCallback(() => t(e.getState()), [e, t]),
    Ur.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Ur.useDebugValue(n), n;
}
const Cd = (e) => {
  const t = WC(e), n = (r) => XC(t, r);
  return Object.assign(n, t), n;
}, KC = (e) => e ? Cd(e) : Cd, rc = KC((e) => ({
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
})), QC = "/canvas/api";
async function Ks(e, t, n) {
  const r = `${QC}${t}`, o = {
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
function GC(e, t) {
  return Ks("PUT", `/workspaces/${e}`, t);
}
function ZC(e, t, n = []) {
  return Ks(
    "POST",
    `/workspaces/${e}/actions/${t}/trigger`,
    { tags: n }
  );
}
function qC(e, t) {
  return Ks(
    "POST",
    `/workspaces/${e}/actions/${t}/check-status`
  );
}
function JC() {
  return Ks("GET", "/io/configs");
}
const Vu = [
  { value: "focused_summary", label: "Summarize patent (web)", defaultConfig: "single_patent_summary_default" },
  { value: "raw_db_ingest", label: "Ingest patents → raw DB", defaultConfig: "raw_db_ingest_default" },
  { value: "triplet_extraction", label: "Extract triplets (raw DB subset)", defaultConfig: "triplet_extraction_default" },
  { value: "ner_extraction", label: "Extract entities / NER (raw DB subset)", defaultConfig: "ner_extraction_default" },
  { value: "hybrid_search", label: "Hybrid search", defaultConfig: "" }
];
function e2(e) {
  var t;
  return ((t = Vu.find((n) => n.value === e)) == null ? void 0 : t.label) || "Not configured";
}
const t2 = {
  focused_summary: "summary",
  ner_extraction: "ner",
  triplet_extraction: "triplets",
  raw_db_ingest: "raw_db"
};
function n2(e) {
  return e ? t2[e] : void 0;
}
const r2 = 3e3, o2 = /* @__PURE__ */ new Set(["complete", "failed"]), Nd = {
  empty: { label: "Not configured", className: "canvas-badge--neutral" },
  loaded: { label: "Ready", className: "canvas-badge--ready" },
  running: { label: "Running", className: "canvas-badge--running" },
  complete: { label: "Complete", className: "canvas-badge--success" },
  failed: { label: "Failed", className: "canvas-badge--error" }
};
function Hm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), { workspaceId: o } = rc(), [i, s] = N.useState(!1), [l, u] = N.useState(""), [a, d] = N.useState(!1), c = t.text || "", f = t.label || "", m = t.state || "empty", y = Nd[m] || Nd.empty, x = t.workflow_type, S = t.result_summary, p = N.useCallback(() => {
    u(c), s(!0);
  }, [c]), g = N.useCallback(() => {
    s(!1), l.trim() !== c && r(e, { text: l.trim() });
  }, [e, l, c, r]), h = N.useCallback(
    (E) => {
      E.key === "Escape" && s(!1);
    },
    []
  ), v = N.useRef(null), _ = N.useCallback(() => {
    v.current && (clearInterval(v.current), v.current = null);
  }, []);
  N.useEffect(() => {
    if (!o || m !== "running") {
      _();
      return;
    }
    if (!v.current)
      return v.current = setInterval(async () => {
        const E = await qC(o, e);
        if (!E.ok) return;
        const { state: T, result_summary: I, captures: R } = E.data;
        if (o2.has(T)) {
          _(), r(e, { state: T, result_summary: I });
          for (const D of R ?? [])
            r(D.id, D.content);
        }
      }, r2), _;
  }, [o, m, e, r, _]);
  const k = N.useCallback(async () => {
    if (!o || a) return;
    d(!0);
    const E = await ZC(o, e);
    E.ok && r(e, { state: "running", job_id: E.data.job_id }), d(!1);
  }, [o, e, a, r]);
  return /* @__PURE__ */ w.jsxs(
    Wt,
    {
      type: "action",
      label: f,
      icon: "action",
      headerColor: le.action.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (E) => r(e, { label: E }),
      children: [
        i ? /* @__PURE__ */ w.jsx(
          "textarea",
          {
            className: "canvas-node-edit-input",
            value: l,
            onChange: (E) => u(E.target.value),
            onBlur: g,
            onKeyDown: h,
            autoFocus: !0,
            rows: 3
          }
        ) : /* @__PURE__ */ w.jsx("div", { onDoubleClick: p, className: "canvas-node-text", children: c || /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to describe action" }) }),
        /* @__PURE__ */ w.jsx("div", { className: "canvas-node-workflow", children: e2(x) }),
        m === "complete" && S && /* @__PURE__ */ w.jsx("div", { className: "canvas-node-result", title: S, children: S }),
        /* @__PURE__ */ w.jsxs("div", { className: "canvas-node-action-footer", children: [
          /* @__PURE__ */ w.jsx("span", { className: `canvas-badge ${y.className}`, children: y.label }),
          m === "loaded" && /* @__PURE__ */ w.jsx(
            "button",
            {
              className: "canvas-run-btn",
              onClick: k,
              disabled: a || !o,
              title: a ? "Submitting…" : "Run action",
              children: a ? /* @__PURE__ */ w.jsxs("svg", { viewBox: "0 0 16 16", width: "10", height: "10", fill: "currentColor", children: [
                /* @__PURE__ */ w.jsx("circle", { cx: "8", cy: "8", r: "6", stroke: "currentColor", strokeWidth: "2", fill: "none", opacity: "0.3" }),
                /* @__PURE__ */ w.jsx("path", { d: "M8 2 A6 6 0 0 1 14 8", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round" })
              ] }) : /* @__PURE__ */ w.jsx("svg", { viewBox: "0 0 16 16", width: "10", height: "10", fill: "currentColor", children: /* @__PURE__ */ w.jsx("path", { d: "M4 2.5 L13 8 L4 13.5 Z" }) })
            }
          )
        ] })
      ]
    }
  );
}
function Bm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = t.count, c = t.db_endpoint || "", f = t.patent_nrs || [], m = t.query_filter || {}, y = Object.keys(m).length > 0, x = N.useCallback(() => {
    l(u), i(!0);
  }, [u]), S = N.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { text: s.trim() });
  }, [e, s, u, r]), p = N.useCallback(
    (g) => {
      g.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ w.jsxs(
    Wt,
    {
      type: "data_collection",
      label: a,
      icon: "data_collection",
      headerColor: le.data_collection.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (g) => r(e, { label: g }),
      children: [
        o ? /* @__PURE__ */ w.jsx(
          "textarea",
          {
            className: "canvas-node-edit-input",
            value: s,
            onChange: (g) => l(g.target.value),
            onBlur: S,
            onKeyDown: p,
            autoFocus: !0,
            rows: 3
          }
        ) : /* @__PURE__ */ w.jsx("div", { onDoubleClick: x, className: "canvas-node-text", children: u || /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to describe collection" }) }),
        d !== void 0 && /* @__PURE__ */ w.jsxs("div", { className: "canvas-node-count", children: [
          d,
          " items"
        ] }),
        (c || f.length > 0 || y) && /* @__PURE__ */ w.jsxs("div", { className: "canvas-node-dbinfo", children: [
          c && /* @__PURE__ */ w.jsxs("div", { children: [
            "DB: ",
            /* @__PURE__ */ w.jsx("strong", { children: c })
          ] }),
          f.length > 0 && /* @__PURE__ */ w.jsxs("div", { children: [
            f.length,
            " patent(s) to ingest"
          ] }),
          y && /* @__PURE__ */ w.jsx("div", { children: "subset filter set" })
        ] })
      ]
    }
  );
}
const i2 = {
  success: "canvas-badge--success",
  partial_success: "canvas-badge--running",
  failed: "canvas-badge--error"
};
function Vm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), o = t.label || "", i = t.preview, s = t.selector, l = (i == null ? void 0 : i.kind) || (s == null ? void 0 : s.kind) || "", u = i == null ? void 0 : i.ref, a = (i == null ? void 0 : i.status) || "", d = (i == null ? void 0 : i.metrics) || {}, c = Object.entries(d).slice(0, 3).map(([f, m]) => `${f}=${m}`).join(", ");
  return /* @__PURE__ */ w.jsx(
    Wt,
    {
      type: "data_view",
      label: o,
      icon: "data_view",
      headerColor: le.data_view.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (f) => r(e, { label: f }),
      children: i ? /* @__PURE__ */ w.jsxs("div", { className: "canvas-node-dbinfo", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "canvas-node-action-footer", children: [
          l && /* @__PURE__ */ w.jsx("strong", { children: l }),
          a && /* @__PURE__ */ w.jsx("span", { className: `canvas-badge ${i2[a] || "canvas-badge--neutral"}`, children: a })
        ] }),
        u && /* @__PURE__ */ w.jsxs("div", { title: u, children: [
          "ref: ",
          u
        ] }),
        c && /* @__PURE__ */ w.jsx("div", { children: c })
      ] }) : /* @__PURE__ */ w.jsx("div", { className: "canvas-node-result", children: /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: l ? `Awaiting ${l}…` : "Awaiting result — wire from an action" }) })
    }
  );
}
function Um({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = Ue(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = N.useCallback(() => {
    l(u), i(!0);
  }, [u]), c = N.useCallback(() => {
    i(!1), s.trim() !== u && r(e, { text: s.trim() });
  }, [e, s, u, r]), f = N.useCallback(
    (m) => {
      m.key === "Escape" && i(!1);
    },
    []
  );
  return /* @__PURE__ */ w.jsx(
    Wt,
    {
      type: "untyped",
      label: a,
      icon: "untyped",
      headerColor: le.untyped.light,
      selected: n,
      committed: t.committed,
      onLabelChange: (m) => r(e, { label: m }),
      children: o ? /* @__PURE__ */ w.jsx(
        "textarea",
        {
          className: "canvas-node-edit-input",
          value: s,
          onChange: (m) => l(m.target.value),
          onBlur: c,
          onKeyDown: f,
          autoFocus: !0,
          rows: 3
        }
      ) : /* @__PURE__ */ w.jsx("div", { onDoubleClick: d, className: "canvas-node-text", children: u || /* @__PURE__ */ w.jsx("span", { className: "canvas-node-placeholder", children: "Double-click to add content" }) })
    }
  );
}
Je.fact.component = $m;
Je.idea.component = Rm;
Je.question.component = Om;
Je.constraint.component = Fm;
Je.thesis.component = bm;
Je.action.component = Hm;
Je.data_collection.component = Bm;
Je.data_view.component = Vm;
Je.untyped.component = Um;
const s2 = {
  fact: $m,
  idea: Rm,
  question: Om,
  constraint: Fm,
  thesis: bm,
  action: Hm,
  data_collection: Bm,
  data_view: Vm,
  untyped: Um
};
function l2({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: r,
  targetY: o,
  sourcePosition: i,
  targetPosition: s,
  markerEnd: l,
  data: u,
  label: a,
  type: d
}) {
  const [c, f, m] = Qa({
    sourceX: t,
    sourceY: n,
    sourcePosition: i,
    targetX: r,
    targetY: o,
    targetPosition: s
  }), x = (d === "produces" && (u != null && u.output_kind) ? `produces: ${u.output_kind}` : "") || typeof a == "string" && a || (u == null ? void 0 : u.label) || d || "";
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(Ko, { id: e, path: c, markerEnd: l }),
    x && /* @__PURE__ */ w.jsx(dC, { children: /* @__PURE__ */ w.jsx(
      "div",
      {
        className: "canvas-edge-label",
        style: {
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${f}px, ${m}px)`,
          pointerEvents: "all"
        },
        children: x
      }
    ) })
  ] });
}
const Wm = [
  "supports",
  "contradicts",
  "enables",
  "blocks",
  "similar_to",
  "derived_from",
  "refines",
  "questions",
  "produces"
], Ym = "similar_to", u2 = new Set(Wm), a2 = Object.fromEntries(
  Wm.map((e) => [e, l2])
), c2 = new Set(Am), f2 = /* @__PURE__ */ new Set(["label", "committed"]);
function d2(e) {
  return e && c2.has(e) ? e : "untyped";
}
function Xm(e) {
  return e && u2.has(e) ? e : Ym;
}
function h2(e, t, n) {
  return {
    name: e,
    nodes: t.map((r) => {
      const o = r.data, i = {};
      for (const [s, l] of Object.entries(o))
        f2.has(s) || (i[s] = l);
      return {
        id: r.id,
        node_type: r.type || "untyped",
        label: o.label || "",
        committed: !!o.committed,
        content: i,
        position: r.position
      };
    }),
    edges: n.map((r) => {
      var i;
      const o = (i = r.data) == null ? void 0 : i.output_kind;
      return {
        id: r.id,
        source_id: r.source,
        target_id: r.target,
        edge_type: Xm(r.type),
        label: typeof r.label == "string" ? r.label : void 0,
        // Carry the produces-edge selector; it's part of the edge grammar, not content.
        ...typeof o == "string" ? { output_kind: o } : {}
      };
    })
  };
}
function p2(e) {
  return {
    nodes: (e.nodes || []).map((t) => ({
      id: t.id,
      type: d2(t.node_type),
      position: t.position ?? {
        x: Math.random() * 500,
        y: Math.random() * 500
      },
      data: {
        label: t.label || "",
        committed: !!t.committed,
        ...t.content
      }
    })),
    edges: (e.edges || []).map((t) => ({
      id: t.id,
      source: t.source_id,
      target: t.target_id,
      type: Xm(t.edge_type),
      ...t.label ? { label: t.label } : {},
      // Hydrate the produces-edge selector onto edge.data for SemanticEdge.
      ...t.output_kind ? { data: { output_kind: t.output_kind } } : {}
    }))
  };
}
function g2(e, t, n, r = 5e3) {
  const o = N.useRef(null), i = N.useRef(!0), { setSaveStatus: s, markSaved: l, markError: u, markUnsaved: a, workspaceName: d } = rc(), c = N.useCallback(
    async (m, y) => {
      if (!e) return;
      s("saving");
      const x = h2(d, m, y), S = await GC(e, x);
      S.ok ? l() : u(S.error);
    },
    [e, d, s, l, u]
  );
  return N.useEffect(() => {
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
  }, [t, n, e, r, c, a]), { saveNow: N.useCallback(() => {
    o.current && (clearTimeout(o.current), o.current = null), c(t, n);
  }, [t, n, c]) };
}
let Md = 0;
function Pd() {
  return Md += 1, `node-${Date.now()}-${Md}`;
}
function m2(e, t, n) {
  const r = Ue(), o = N.useRef(null), [i, s] = N.useState(null), [l, u] = N.useState(null), a = N.useCallback(
    (p, g) => {
      const h = Je[p], v = {
        id: Pd(),
        type: p,
        position: g,
        data: { ...h == null ? void 0 : h.defaultData }
      };
      t((_) => [..._, v]);
    },
    [t]
  ), d = N.useCallback(
    (p, g) => {
      t(
        (h) => h.map((v) => v.id === p ? { ...v, type: g } : v)
      );
    },
    [t]
  ), c = N.useCallback(
    (p) => {
      const g = e.find((v) => v.id === p);
      if (!g) return;
      const h = {
        id: Pd(),
        type: g.type,
        position: { x: g.position.x + 40, y: g.position.y + 40 },
        data: { ...g.data }
      };
      t((v) => [...v, h]);
    },
    [e, t]
  ), f = N.useCallback(
    (p) => {
      t((g) => g.filter((h) => h.id !== p)), n((g) => g.filter((h) => h.source !== p && h.target !== p));
    },
    [t, n]
  ), m = N.useCallback(
    (p) => {
      const g = r.screenToFlowPosition({
        x: p.clientX,
        y: p.clientY
      });
      s({ x: p.clientX, y: p.clientY, flowPos: g }), u(null);
    },
    [r]
  ), y = N.useCallback(
    (p) => {
      i && a(p, i.flowPos);
    },
    [i, a]
  ), x = N.useCallback(
    (p, g) => {
      p.preventDefault(), u({
        nodeId: g.id,
        nodeType: g.type || "untyped",
        x: p.clientX,
        y: p.clientY
      }), s(null);
    },
    []
  ), S = N.useCallback(() => {
    s(null), u(null);
  }, []);
  return N.useEffect(() => {
    const p = (g) => {
      var v;
      const h = (v = g.target) == null ? void 0 : v.tagName;
      if (!(h === "INPUT" || h === "TEXTAREA" || h === "SELECT") && (g.key === "n" || g.key === "N")) {
        const _ = o.current;
        if (!_) return;
        const k = _.getBoundingClientRect(), E = { x: k.width / 2, y: k.height / 2 }, T = r.screenToFlowPosition(E);
        a("untyped", T);
      }
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [r, a]), {
    containerRef: o,
    // Creation menu
    creationMenu: i,
    handlePaneDoubleClick: m,
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
    closeMenus: S
  };
}
function y2({ position: e, onSelect: t, onClose: n }) {
  const r = N.useRef(null);
  N.useEffect(() => {
    const i = (l) => {
      r.current && !r.current.contains(l.target) && n();
    }, s = (l) => {
      l.key === "Escape" && n();
    };
    return document.addEventListener("mousedown", i), document.addEventListener("keydown", s), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("keydown", s);
    };
  }, [n]);
  const o = N.useCallback(
    (i) => {
      t(i), n();
    },
    [t, n]
  );
  return /* @__PURE__ */ w.jsx(
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
      children: /* @__PURE__ */ w.jsx("div", { className: "canvas-creation-grid", children: UC.map((i) => {
        const s = Je[i];
        return /* @__PURE__ */ w.jsxs(
          "button",
          {
            className: "canvas-creation-item",
            onClick: () => o(i),
            title: (s == null ? void 0 : s.label) || i,
            children: [
              /* @__PURE__ */ w.jsx(nc, { type: i, size: 20 }),
              /* @__PURE__ */ w.jsx("span", { className: "canvas-creation-item-label", children: (s == null ? void 0 : s.label) || i })
            ]
          },
          i
        );
      }) })
    }
  );
}
function v2({
  nodeId: e,
  nodeType: t,
  position: n,
  onChangeType: r,
  onDuplicate: o,
  onDelete: i,
  onClose: s
}) {
  const l = N.useRef(null), [u, a] = N.useState(!1);
  N.useEffect(() => {
    const c = (m) => {
      l.current && !l.current.contains(m.target) && s();
    }, f = (m) => {
      m.key === "Escape" && s();
    };
    return document.addEventListener("mousedown", c), document.addEventListener("keydown", f), () => {
      document.removeEventListener("mousedown", c), document.removeEventListener("keydown", f);
    };
  }, [s]);
  const d = N.useCallback(
    (c) => {
      c !== t && r(e, c), s();
    },
    [e, t, r, s]
  );
  return /* @__PURE__ */ w.jsxs(
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
        /* @__PURE__ */ w.jsxs(
          "div",
          {
            className: "canvas-context-item canvas-context-item--parent",
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            children: [
              /* @__PURE__ */ w.jsx("span", { children: "Change type" }),
              /* @__PURE__ */ w.jsx("span", { className: "canvas-context-arrow", children: "▸" }),
              u && /* @__PURE__ */ w.jsx("div", { className: "canvas-context-submenu", children: Am.map((c) => {
                const f = Je[c], m = c === t;
                return /* @__PURE__ */ w.jsxs(
                  "button",
                  {
                    className: `canvas-context-item${m ? " canvas-context-item--active" : ""}`,
                    onClick: () => d(c),
                    children: [
                      /* @__PURE__ */ w.jsx(nc, { type: c, size: 14 }),
                      /* @__PURE__ */ w.jsx("span", { children: (f == null ? void 0 : f.label) || c }),
                      m && /* @__PURE__ */ w.jsx("span", { className: "canvas-context-check", children: "✓" })
                    ]
                  },
                  c
                );
              }) })
            ]
          }
        ),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            className: "canvas-context-item",
            onClick: () => {
              o(e), s();
            },
            children: "Duplicate"
          }
        ),
        /* @__PURE__ */ w.jsx("div", { className: "canvas-context-divider" }),
        /* @__PURE__ */ w.jsx(
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
function x2({ node: e, onChange: t, onClose: n }) {
  const r = e.data;
  return /* @__PURE__ */ w.jsxs("div", { className: "canvas-config-panel", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "canvas-config-panel-header", children: [
      /* @__PURE__ */ w.jsxs("span", { children: [
        e.type,
        " · configuration"
      ] }),
      /* @__PURE__ */ w.jsx("button", { className: "canvas-config-close", onClick: n, title: "Close", children: "×" })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "canvas-config-panel-body", children: [
      e.type === "action" && /* @__PURE__ */ w.jsx(w2, { nodeId: e.id, data: r, onChange: t }),
      e.type === "data_collection" && /* @__PURE__ */ w.jsx(S2, { nodeId: e.id, data: r, onChange: t }),
      e.type !== "action" && e.type !== "data_collection" && /* @__PURE__ */ w.jsx("p", { className: "canvas-config-note", children: "Edit this node's label and text directly on the card." })
    ] })
  ] });
}
function uo({ label: e, children: t }) {
  return /* @__PURE__ */ w.jsxs("label", { className: "canvas-config-field", children: [
    /* @__PURE__ */ w.jsx("span", { className: "canvas-config-field-label", children: e }),
    t
  ] });
}
function w2({
  nodeId: e,
  data: t,
  onChange: n
}) {
  const r = t.workflow_type || "", o = t.workflow_config_name || "", i = t.state || "empty", s = t.result_summary, l = t.output_manifest || {}, u = Object.keys(l), a = t.error_message, d = N.useCallback((c) => {
    const f = Vu.find((y) => y.value === c), m = { workflow_type: c };
    !o && (f != null && f.defaultConfig) && (m.workflow_config_name = f.defaultConfig), n(e, m);
  }, [e, o, n]);
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(uo, { label: "Workflow type", children: /* @__PURE__ */ w.jsxs("select", { value: r, onChange: (c) => d(c.target.value), children: [
      /* @__PURE__ */ w.jsx("option", { value: "", children: "— select —" }),
      Vu.map((c) => /* @__PURE__ */ w.jsx("option", { value: c.value, children: c.label }, c.value))
    ] }) }),
    /* @__PURE__ */ w.jsx(uo, { label: "Workflow config name", children: /* @__PURE__ */ w.jsx(
      "input",
      {
        type: "text",
        value: o,
        placeholder: "config template name",
        onChange: (c) => n(e, { workflow_config_name: c.target.value })
      }
    ) }),
    /* @__PURE__ */ w.jsxs("div", { className: "canvas-config-state", children: [
      "State: ",
      /* @__PURE__ */ w.jsx("strong", { children: i })
    ] }),
    (i === "complete" || i === "failed") && /* @__PURE__ */ w.jsxs("div", { className: "canvas-config-result", children: [
      /* @__PURE__ */ w.jsx("div", { className: "canvas-config-field-label", children: "Result" }),
      a && /* @__PURE__ */ w.jsx("pre", { className: "canvas-config-error", children: a }),
      s && /* @__PURE__ */ w.jsx("pre", { className: "canvas-config-summary", children: s }),
      u.length > 0 && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx("div", { className: "canvas-config-field-label", children: "Outputs available" }),
        /* @__PURE__ */ w.jsx("ul", { className: "canvas-config-artifacts", children: u.map((c) => {
          const f = l[c] || {}, m = f.ref, y = f.metrics || {}, x = Object.entries(y).slice(0, 3).map(([S, p]) => `${S}=${p}`).join(", ");
          return /* @__PURE__ */ w.jsxs("li", { children: [
            /* @__PURE__ */ w.jsx("strong", { children: c }),
            m ? ` — ${m}` : "",
            x ? ` (${x})` : ""
          ] }, c);
        }) }),
        /* @__PURE__ */ w.jsx("p", { className: "canvas-config-note", children: "Wire a Data View from this action to capture an output." })
      ] }),
      !s && !a && u.length === 0 && /* @__PURE__ */ w.jsx("p", { className: "canvas-config-note", children: "No result detail." })
    ] })
  ] });
}
function S2({
  nodeId: e,
  data: t,
  onChange: n
}) {
  const [r, o] = N.useState([]), [i, s] = N.useState(null);
  N.useEffect(() => {
    let h = !0;
    return JC().then((v) => {
      h && (v.ok ? o(v.data.configurations || []) : s(v.error));
    }), () => {
      h = !1;
    };
  }, []);
  const l = t.db_endpoint || "", u = t.patent_nrs || [], a = t.query_filter || {}, [d, c] = N.useState(u.join(`
`)), [f, m] = N.useState(
    Object.keys(a).length ? JSON.stringify(a, null, 2) : ""
  ), [y, x] = N.useState(null), S = N.useCallback(() => {
    const h = d.split(/[\n,]/).map((v) => v.trim()).filter(Boolean);
    n(e, { patent_nrs: h });
  }, [d, e, n]), p = N.useCallback(() => {
    if (!f.trim()) {
      x(null), n(e, { query_filter: {} });
      return;
    }
    try {
      const h = JSON.parse(f);
      x(null), n(e, { query_filter: h });
    } catch (h) {
      x(h instanceof Error ? h.message : "Invalid JSON");
    }
  }, [f, e, n]), g = N.useMemo(
    () => r.map((h) => h.endpoint_name).filter(Boolean),
    [r]
  );
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(uo, { label: "Raw DB endpoint", children: /* @__PURE__ */ w.jsxs(
      "select",
      {
        value: l,
        onChange: (h) => n(e, { db_endpoint: h.target.value }),
        children: [
          /* @__PURE__ */ w.jsx("option", { value: "", children: "— select —" }),
          l && !g.includes(l) && /* @__PURE__ */ w.jsx("option", { value: l, children: l }),
          g.map((h) => /* @__PURE__ */ w.jsx("option", { value: h, children: h }, h))
        ]
      }
    ) }),
    i && /* @__PURE__ */ w.jsxs("p", { className: "canvas-config-error", children: [
      "Could not load DB endpoints: ",
      i
    ] }),
    /* @__PURE__ */ w.jsx(uo, { label: "Patent numbers (ingest source — one per line)", children: /* @__PURE__ */ w.jsx(
      "textarea",
      {
        rows: 4,
        value: d,
        placeholder: `US10064270
US9876543`,
        onChange: (h) => c(h.target.value),
        onBlur: S
      }
    ) }),
    /* @__PURE__ */ w.jsx(uo, { label: "Subset filter (meta_data_conditions JSON)", children: /* @__PURE__ */ w.jsx(
      "textarea",
      {
        rows: 5,
        value: f,
        placeholder: '{ "patent_number": { "in": ["US10064270"] } }',
        onChange: (h) => m(h.target.value),
        onBlur: p
      }
    ) }),
    y && /* @__PURE__ */ w.jsxs("p", { className: "canvas-config-error", children: [
      "Filter JSON: ",
      y
    ] })
  ] });
}
const jl = [], Td = [];
function _2(e) {
  var t;
  if (!e) return { nodes: jl, edges: Td };
  if ("id" in e && "nodes" in e) {
    const n = p2(e);
    return {
      nodes: n.nodes.length ? n.nodes : jl,
      edges: n.edges
    };
  }
  return {
    nodes: (t = e.nodes) != null && t.length ? e.nodes : jl,
    edges: e.edges ?? Td
  };
}
function k2({ workspaceId: e, initialGraph: t, onSave: n }) {
  const r = _2(t), [o, i, s] = hC(r.nodes), [l, u, a] = pC(r.edges), { saveStatus: d, setWorkspaceId: c, setWorkspaceName: f } = rc(), { updateNodeData: m } = Ue(), [y, x] = N.useState(null), S = o.find((T) => T.selected) ?? null, p = S && S.id !== y, g = N.useCallback(
    (T, I) => m(T, I),
    [m]
  ), h = m2(o, i, u);
  N.useEffect(() => {
    e && c(e), t && "name" in t && f(t.name);
  }, [e, t, c, f]);
  const { saveNow: v } = g2(e, o, l), _ = N.useCallback(
    (T) => {
      const I = o.find((D) => D.id === T.source), R = o.find((D) => D.id === T.target);
      if ((I == null ? void 0 : I.type) === "action" && (R == null ? void 0 : R.type) === "data_view") {
        const D = n2(
          I.data.workflow_type
        );
        if (D) {
          u(
            (L) => Ru({ ...T, type: "produces", data: { output_kind: D } }, L)
          );
          return;
        }
      }
      u((D) => Ru({ ...T, type: Ym }, D));
    },
    [u, o]
  ), k = N.useCallback(() => {
    e && v(), n && n({ nodes: o, edges: l });
  }, [e, v, o, l, n]), E = N.useCallback(() => {
    i([]), u([]);
  }, [i, u]);
  return /* @__PURE__ */ w.jsxs("div", { ref: h.containerRef, style: { width: "100%", height: "100%" }, children: [
    /* @__PURE__ */ w.jsxs(
      cC,
      {
        nodes: o,
        edges: l,
        onNodesChange: s,
        onEdgesChange: a,
        onConnect: _,
        onPaneClick: h.closeMenus,
        onDoubleClick: h.handlePaneDoubleClick,
        onNodeContextMenu: h.handleNodeContextMenu,
        nodeTypes: s2,
        edgeTypes: a2,
        zoomOnDoubleClick: !1,
        fitView: !0,
        attributionPosition: "bottom-left",
        children: [
          /* @__PURE__ */ w.jsx(NC, {}),
          /* @__PURE__ */ w.jsx(FC, { zoomable: !0, pannable: !0 }),
          /* @__PURE__ */ w.jsx(xC, { variant: Rt.Dots, gap: 16, size: 1 }),
          /* @__PURE__ */ w.jsx(Xo, { position: "top-right", children: /* @__PURE__ */ w.jsxs("div", { style: { display: "flex", gap: "0.5rem", alignItems: "center" }, children: [
            e && /* @__PURE__ */ w.jsx(E2, { status: d }),
            /* @__PURE__ */ w.jsx(
              "button",
              {
                onClick: k,
                className: "esevioz-btn-primary",
                style: { padding: "0.5rem 1rem", borderRadius: "0.375rem" },
                children: "Save"
              }
            ),
            /* @__PURE__ */ w.jsx(
              "button",
              {
                onClick: E,
                className: "esevioz-btn-warning",
                style: { padding: "0.5rem 1rem", borderRadius: "0.375rem" },
                children: "Clear"
              }
            )
          ] }) })
        ]
      }
    ),
    h.creationMenu && /* @__PURE__ */ w.jsx(
      y2,
      {
        position: { x: h.creationMenu.x, y: h.creationMenu.y },
        onSelect: h.handleCreationSelect,
        onClose: h.closeCreationMenu
      }
    ),
    h.contextMenu && /* @__PURE__ */ w.jsx(
      v2,
      {
        nodeId: h.contextMenu.nodeId,
        nodeType: h.contextMenu.nodeType,
        position: { x: h.contextMenu.x, y: h.contextMenu.y },
        onChangeType: h.changeNodeType,
        onDuplicate: h.duplicateNode,
        onDelete: h.deleteNode,
        onClose: h.closeContextMenu
      }
    ),
    p && S && /* @__PURE__ */ w.jsx(
      x2,
      {
        node: S,
        onChange: g,
        onClose: () => x(S.id)
      }
    )
  ] });
}
function Al(e) {
  return /* @__PURE__ */ w.jsx(zm, { children: /* @__PURE__ */ w.jsx(k2, { ...e }) });
}
function E2({ status: e }) {
  const t = {
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    userSelect: "none"
  };
  switch (e) {
    case "saved":
      return /* @__PURE__ */ w.jsx("span", { style: { ...t, color: "#2d6a4f", background: "#d8f3dc" }, children: "Saved" });
    case "saving":
      return /* @__PURE__ */ w.jsx("span", { style: { ...t, color: "#b08800", background: "#fff3cd" }, children: "Saving..." });
    case "unsaved":
      return /* @__PURE__ */ w.jsx("span", { style: { ...t, color: "#6c757d", background: "#e9ecef" }, children: "Unsaved" });
    case "error":
      return /* @__PURE__ */ w.jsx("span", { style: { ...t, color: "#842029", background: "#f8d7da" }, children: "Save failed" });
    default:
      return null;
  }
}
let lt = null, Dt = { nodes: [], edges: [] };
function C2(e) {
  const { containerId: t, workspaceId: n, initialGraph: r, onSave: o } = e, i = document.getElementById(t);
  if (!i)
    throw new Error(`Container element with id "${t}" not found`);
  return lt && lt.unmount(), Dt = r ?? { nodes: [], edges: [] }, lt = Up(i), lt.render(
    /* @__PURE__ */ w.jsx(
      Al,
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
        /* @__PURE__ */ w.jsx(
          Al,
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
        /* @__PURE__ */ w.jsx(
          Al,
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
typeof window < "u" && (window.CartolexCanvas = { mountCanvas: C2 });
export {
  C2 as mountCanvas
};
