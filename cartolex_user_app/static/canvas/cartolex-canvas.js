function Td(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dd = { exports: {} }, Ss = {}, zd = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o = Symbol.for("react.element"), G0 = Symbol.for("react.portal"), Z0 = Symbol.for("react.fragment"), q0 = Symbol.for("react.strict_mode"), J0 = Symbol.for("react.profiler"), ey = Symbol.for("react.provider"), ty = Symbol.for("react.context"), ny = Symbol.for("react.forward_ref"), ry = Symbol.for("react.suspense"), oy = Symbol.for("react.memo"), iy = Symbol.for("react.lazy"), fc = Symbol.iterator;
function sy(e) {
  return e === null || typeof e != "object" ? null : (e = fc && e[fc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Id = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ld = Object.assign, jd = {};
function Mr(e, t, n) {
  this.props = e, this.context = t, this.refs = jd, this.updater = n || Id;
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ad() {
}
Ad.prototype = Mr.prototype;
function Vu(e, t, n) {
  this.props = e, this.context = t, this.refs = jd, this.updater = n || Id;
}
var Uu = Vu.prototype = new Ad();
Uu.constructor = Vu;
Ld(Uu, Mr.prototype);
Uu.isPureReactComponent = !0;
var dc = Array.isArray, $d = Object.prototype.hasOwnProperty, Wu = { current: null }, Rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Od(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) $d.call(t, r) && !Rd.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: $o, type: e, key: i, ref: s, props: o, _owner: Wu.current };
}
function ly(e, t) {
  return { $$typeof: $o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $o;
}
function uy(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var hc = /\/+/g;
function qs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? uy("" + e.key) : t.toString(36);
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
        case G0:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + qs(s, 0) : r, dc(o) ? (n = "", e != null && (n = e.replace(hc, "$&/") + "/"), ki(o, t, n, "", function(a) {
    return a;
  })) : o != null && (Yu(o) && (o = ly(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(hc, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", dc(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var u = r + qs(i, l);
    s += ki(i, t, n, u, o);
  }
  else if (u = sy(e), typeof u == "function") for (e = u.call(e), l = 0; !(i = e.next()).done; ) i = i.value, u = r + qs(i, l++), s += ki(i, t, n, u, o);
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
function ay(e) {
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
var $e = { current: null }, Ei = { transition: null }, cy = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: Ei, ReactCurrentOwner: Wu };
function Fd() {
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
  if (!Yu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Mr;
te.Fragment = Z0;
te.Profiler = J0;
te.PureComponent = Vu;
te.StrictMode = q0;
te.Suspense = ry;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy;
te.act = Fd;
te.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ld({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Wu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (u in t) $d.call(t, u) && !Rd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
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
  return e = { $$typeof: ty, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ey, _context: e }, e.Consumer = e;
};
te.createElement = Od;
te.createFactory = function(e) {
  var t = Od.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: ny, render: e };
};
te.isValidElement = Yu;
te.lazy = function(e) {
  return { $$typeof: iy, _payload: { _status: -1, _result: e }, _init: ay };
};
te.memo = function(e, t) {
  return { $$typeof: oy, type: e, compare: t === void 0 ? null : t };
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
te.unstable_act = Fd;
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
zd.exports = te;
var N = zd.exports;
const Ur = /* @__PURE__ */ Td(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fy = N, dy = Symbol.for("react.element"), hy = Symbol.for("react.fragment"), py = Object.prototype.hasOwnProperty, gy = fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, my = { key: !0, ref: !0, __self: !0, __source: !0 };
function bd(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) py.call(t, r) && !my.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: dy, type: e, key: i, ref: s, props: o, _owner: gy.current };
}
Ss.Fragment = hy;
Ss.jsx = bd;
Ss.jsxs = bd;
Dd.exports = Ss;
var w = Dd.exports, Hd = { exports: {} }, Ge = {}, Bd = { exports: {} }, Vd = {};
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
    var L = C.length;
    C.push(P);
    e: for (; 0 < L; ) {
      var F = L - 1 >>> 1, O = C[F];
      if (0 < o(O, P)) C[F] = P, C[L] = O, L = F;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0], L = C.pop();
    if (L !== P) {
      C[0] = L;
      e: for (var F = 0, O = C.length, U = O >>> 1; F < U; ) {
        var V = 2 * (F + 1) - 1, Y = C[V], X = V + 1, Q = C[X];
        if (0 > o(Y, L)) X < O && 0 > o(Q, Y) ? (C[F] = Q, C[X] = L, F = X) : (C[F] = Y, C[V] = L, F = V);
        else if (X < O && 0 > o(Q, L)) C[F] = Q, C[X] = L, F = X;
        else break e;
      }
    }
    return P;
  }
  function o(C, P) {
    var L = C.sortIndex - P.sortIndex;
    return L !== 0 ? L : C.id - P.id;
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
    if (x = !1, h(C), !y) if (n(u) !== null) y = !0, D(_);
    else {
      var P = n(a);
      P !== null && $(v, P.startTime - C);
    }
  }
  function _(C, P) {
    y = !1, x && (x = !1, p(T), T = -1), m = !0;
    var L = f;
    try {
      for (h(P), c = n(u); c !== null && (!(c.expirationTime > P) || C && !I()); ) {
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
      c = null, f = L, m = !1;
    }
  }
  var k = !1, E = null, T = -1, z = 5, R = -1;
  function I() {
    return !(e.unstable_now() - R < z);
  }
  function j() {
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
    g(j);
  };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(), A = M.port2;
    M.port1.onmessage = j, b = function() {
      A.postMessage(null);
    };
  } else b = function() {
    S(j, 0);
  };
  function D(C) {
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
    y || m || (y = !0, D(_));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < C ? Math.floor(1e3 / C) : 5;
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
    var L = f;
    f = P;
    try {
      return C();
    } finally {
      f = L;
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
    var L = f;
    f = C;
    try {
      return P();
    } finally {
      f = L;
    }
  }, e.unstable_scheduleCallback = function(C, P, L) {
    var F = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? F + L : F) : L = F, C) {
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
    return O = L + O, C = { id: d++, callback: P, priorityLevel: C, startTime: L, expirationTime: O, sortIndex: -1 }, L > F ? (C.sortIndex = L, t(a, C), n(u) === null && C === n(a) && (x ? (p(T), T = -1) : x = !0, $(v, L - F))) : (C.sortIndex = O, t(u, C), y || m || (y = !0, D(_))), C;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(C) {
    var P = f;
    return function() {
      var L = f;
      f = P;
      try {
        return C.apply(this, arguments);
      } finally {
        f = L;
      }
    };
  };
})(Vd);
Bd.exports = Vd;
var yy = Bd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vy = N, Ke = yy;
function H(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ud = /* @__PURE__ */ new Set(), ao = {};
function On(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (ao[e] = t, e = 0; e < t.length; e++) Ud.add(t[e]);
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $l = Object.prototype.hasOwnProperty, xy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pc = {}, gc = {};
function wy(e) {
  return $l.call(gc, e) ? !0 : $l.call(pc, e) ? !1 : xy.test(e) ? gc[e] = !0 : (pc[e] = !0, !1);
}
function Sy(e, t, n, r) {
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
function _y(e, t, n, r) {
  if (t === null || typeof t > "u" || Sy(e, t, n, r)) return !0;
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
var Xu = /[\-:]([a-z])/g;
function Ku(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Xu,
    Ku
  );
  Pe[t] = new Re(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Xu, Ku);
  Pe[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Xu, Ku);
  Pe[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Pe[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Pe[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qu(e, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_y(t, n, o, r) && (n = null), r || o === null ? wy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qo = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Un = Symbol.for("react.fragment"), Gu = Symbol.for("react.strict_mode"), Rl = Symbol.for("react.profiler"), Wd = Symbol.for("react.provider"), Yd = Symbol.for("react.context"), Zu = Symbol.for("react.forward_ref"), Ol = Symbol.for("react.suspense"), Fl = Symbol.for("react.suspense_list"), qu = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), Xd = Symbol.for("react.offscreen"), mc = Symbol.iterator;
function jr(e) {
  return e === null || typeof e != "object" ? null : (e = mc && e[mc] || e["@@iterator"], typeof e == "function" ? e : null);
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
function ky(e) {
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
    case Gu:
      return "StrictMode";
    case Ol:
      return "Suspense";
    case Fl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Yd:
      return (e.displayName || "Context") + ".Consumer";
    case Wd:
      return (e._context.displayName || "Context") + ".Provider";
    case Zu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case qu:
      return t = e.displayName || null, t !== null ? t : bl(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return bl(e(t));
      } catch {
      }
  }
  return null;
}
function Ey(e) {
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
      return t === Gu ? "StrictMode" : "Mode";
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
function Kd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Cy(e) {
  var t = Kd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Cy(e));
}
function Qd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Kd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
function yc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = fn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Gd(e, t) {
  t = t.checked, t != null && Qu(e, "checked", t, !1);
}
function Bl(e, t) {
  Gd(e, t);
  var n = fn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vl(e, t.type, fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vc(e, t, n) {
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
function Ul(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xc(e, t) {
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
  e._wrapperState = { initialValue: fn(n) };
}
function Zd(e, t) {
  var n = fn(t.value), r = fn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qd(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? qd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ei, Jd = function(e) {
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
}, Ny = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zr).forEach(function(e) {
  Ny.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Zr[t] = Zr[e];
  });
});
function eh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zr.hasOwnProperty(e) && Zr[e] ? ("" + t).trim() : t + "px";
}
function th(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = eh(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var My = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Yl(e, t) {
  if (t) {
    if (My[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
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
function Ju(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ql = null, or = null, ir = null;
function Sc(e) {
  if (e = Fo(e)) {
    if (typeof Ql != "function") throw Error(H(280));
    var t = e.stateNode;
    t && (t = Ns(t), Ql(e.stateNode, e.type, t));
  }
}
function nh(e) {
  or ? ir ? ir.push(e) : ir = [e] : or = e;
}
function rh() {
  if (or) {
    var e = or, t = ir;
    if (ir = or = null, Sc(e), t) for (e = 0; e < t.length; e++) Sc(t[e]);
  }
}
function oh(e, t) {
  return e(t);
}
function ih() {
}
var nl = !1;
function sh(e, t, n) {
  if (nl) return e(t, n);
  nl = !0;
  try {
    return oh(e, t, n);
  } finally {
    nl = !1, (or !== null || ir !== null) && (ih(), rh());
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
function Py(e, t, n, r, o, i, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var qr = !1, Hi = null, Bi = !1, Zl = null, Ty = { onError: function(e) {
  qr = !0, Hi = e;
} };
function Dy(e, t, n, r, o, i, s, l, u) {
  qr = !1, Hi = null, Py.apply(Ty, arguments);
}
function zy(e, t, n, r, o, i, s, l, u) {
  if (Dy.apply(this, arguments), qr) {
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
function lh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function _c(e) {
  if (Fn(e) !== e) throw Error(H(188));
}
function Iy(e) {
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
        if (i === n) return _c(o), e;
        if (i === r) return _c(o), t;
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
function uh(e) {
  return e = Iy(e), e !== null ? ah(e) : null;
}
function ah(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ah(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ch = Ke.unstable_scheduleCallback, kc = Ke.unstable_cancelCallback, Ly = Ke.unstable_shouldYield, jy = Ke.unstable_requestPaint, xe = Ke.unstable_now, Ay = Ke.unstable_getCurrentPriorityLevel, ea = Ke.unstable_ImmediatePriority, fh = Ke.unstable_UserBlockingPriority, Vi = Ke.unstable_NormalPriority, $y = Ke.unstable_LowPriority, dh = Ke.unstable_IdlePriority, _s = null, kt = null;
function Ry(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function") try {
    kt.onCommitFiberRoot(_s, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var gt = Math.clz32 ? Math.clz32 : by, Oy = Math.log, Fy = Math.LN2;
function by(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Oy(e) / Fy | 0) | 0;
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
function Hy(e, t) {
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
function By(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - gt(i), l = 1 << s, u = o[s];
    u === -1 ? (!(l & n) || l & r) && (o[s] = Hy(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function ql(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hh() {
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
function Vy(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - gt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ta(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - gt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function ph(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var gh, na, mh, yh, vh, Jl = !1, ri = [], nn = null, rn = null, on = null, ho = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), Zt = [], Uy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ec(e, t) {
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
      ho.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      po.delete(t.pointerId);
  }
}
function $r(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Fo(t), t !== null && na(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Wy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return nn = $r(nn, e, t, n, r, o), !0;
    case "dragenter":
      return rn = $r(rn, e, t, n, r, o), !0;
    case "mouseover":
      return on = $r(on, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ho.set(i, $r(ho.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, po.set(i, $r(po.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function xh(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = lh(n), t !== null) {
          e.blockedOn = t, vh(e.priority, function() {
            mh(n);
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
    } else return t = Fo(n), t !== null && na(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Cc(e, t, n) {
  Ci(e) && n.delete(t);
}
function Yy() {
  Jl = !1, nn !== null && Ci(nn) && (nn = null), rn !== null && Ci(rn) && (rn = null), on !== null && Ci(on) && (on = null), ho.forEach(Cc), po.forEach(Cc);
}
function Rr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Yy)));
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
  for (nn !== null && Rr(nn, e), rn !== null && Rr(rn, e), on !== null && Rr(on, e), ho.forEach(t), po.forEach(t), n = 0; n < Zt.length; n++) r = Zt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && (n = Zt[0], n.blockedOn === null); ) xh(n), n.blockedOn === null && Zt.shift();
}
var sr = Vt.ReactCurrentBatchConfig, Wi = !0;
function Xy(e, t, n, r) {
  var o = se, i = sr.transition;
  sr.transition = null;
  try {
    se = 1, ra(e, t, n, r);
  } finally {
    se = o, sr.transition = i;
  }
}
function Ky(e, t, n, r) {
  var o = se, i = sr.transition;
  sr.transition = null;
  try {
    se = 4, ra(e, t, n, r);
  } finally {
    se = o, sr.transition = i;
  }
}
function ra(e, t, n, r) {
  if (Wi) {
    var o = eu(e, t, n, r);
    if (o === null) hl(e, t, r, Yi, n), Ec(e, r);
    else if (Wy(o, e, t, n, r)) r.stopPropagation();
    else if (Ec(e, r), t & 4 && -1 < Uy.indexOf(e)) {
      for (; o !== null; ) {
        var i = Fo(o);
        if (i !== null && gh(i), i = eu(e, t, n, r), i === null && hl(e, t, r, Yi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else hl(e, t, r, null, n);
  }
}
var Yi = null;
function eu(e, t, n, r) {
  if (Yi = null, e = Ju(r), e = Sn(e), e !== null) if (t = Fn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = lh(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yi = e, null;
}
function wh(e) {
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
      switch (Ay()) {
        case ea:
          return 1;
        case fh:
          return 4;
        case Vi:
        case $y:
          return 16;
        case dh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, oa = null, Ni = null;
function Sh() {
  if (Ni) return Ni;
  var e, t = oa, n = t.length, r, o = "value" in en ? en.value : en.textContent, i = o.length;
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
function Nc() {
  return !1;
}
function Ze(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? oi : Nc, this.isPropagationStopped = Nc, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, ia = Ze(Pr), Oo = ye({}, Pr, { view: 0, detail: 0 }), Qy = Ze(Oo), ol, il, Or, ks = ye({}, Oo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sa, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (ol = e.screenX - Or.screenX, il = e.screenY - Or.screenY) : il = ol = 0, Or = e), ol);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : il;
} }), Mc = Ze(ks), Gy = ye({}, ks, { dataTransfer: 0 }), Zy = Ze(Gy), qy = ye({}, Oo, { relatedTarget: 0 }), sl = Ze(qy), Jy = ye({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ev = Ze(Jy), tv = ye({}, Pr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), nv = Ze(tv), rv = ye({}, Pr, { data: 0 }), Pc = Ze(rv), ov = {
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
}, iv = {
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
}, sv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function lv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sv[e]) ? !!t[e] : !1;
}
function sa() {
  return lv;
}
var uv = ye({}, Oo, { key: function(e) {
  if (e.key) {
    var t = ov[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? iv[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sa, charCode: function(e) {
  return e.type === "keypress" ? Mi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), av = Ze(uv), cv = ye({}, ks, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tc = Ze(cv), fv = ye({}, Oo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sa }), dv = Ze(fv), hv = ye({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pv = Ze(hv), gv = ye({}, ks, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), mv = Ze(gv), yv = [9, 13, 27, 32], la = Ot && "CompositionEvent" in window, Jr = null;
Ot && "documentMode" in document && (Jr = document.documentMode);
var vv = Ot && "TextEvent" in window && !Jr, _h = Ot && (!la || Jr && 8 < Jr && 11 >= Jr), Dc = " ", zc = !1;
function kh(e, t) {
  switch (e) {
    case "keyup":
      return yv.indexOf(t.keyCode) !== -1;
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
function Eh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function xv(e, t) {
  switch (e) {
    case "compositionend":
      return Eh(t);
    case "keypress":
      return t.which !== 32 ? null : (zc = !0, Dc);
    case "textInput":
      return e = t.data, e === Dc && zc ? null : e;
    default:
      return null;
  }
}
function wv(e, t) {
  if (Wn) return e === "compositionend" || !la && kh(e, t) ? (e = Sh(), Ni = oa = en = null, Wn = !1, e) : null;
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
      return _h && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ic(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sv[e.type] : t === "textarea";
}
function Ch(e, t, n, r) {
  nh(r), t = Xi(t, "onChange"), 0 < t.length && (n = new ia("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var eo = null, mo = null;
function _v(e) {
  $h(e, 0);
}
function Es(e) {
  var t = Kn(e);
  if (Qd(t)) return e;
}
function kv(e, t) {
  if (e === "change") return t;
}
var Nh = !1;
if (Ot) {
  var ll;
  if (Ot) {
    var ul = "oninput" in document;
    if (!ul) {
      var Lc = document.createElement("div");
      Lc.setAttribute("oninput", "return;"), ul = typeof Lc.oninput == "function";
    }
    ll = ul;
  } else ll = !1;
  Nh = ll && (!document.documentMode || 9 < document.documentMode);
}
function jc() {
  eo && (eo.detachEvent("onpropertychange", Mh), mo = eo = null);
}
function Mh(e) {
  if (e.propertyName === "value" && Es(mo)) {
    var t = [];
    Ch(t, mo, e, Ju(e)), sh(_v, t);
  }
}
function Ev(e, t, n) {
  e === "focusin" ? (jc(), eo = t, mo = n, eo.attachEvent("onpropertychange", Mh)) : e === "focusout" && jc();
}
function Cv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Es(mo);
}
function Nv(e, t) {
  if (e === "click") return Es(t);
}
function Mv(e, t) {
  if (e === "input" || e === "change") return Es(t);
}
function Pv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var yt = typeof Object.is == "function" ? Object.is : Pv;
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
function Ac(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $c(e, t) {
  var n = Ac(e);
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
    n = Ac(n);
  }
}
function Ph(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ph(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Th() {
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
function ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Tv(e) {
  var t = Th(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ph(n.ownerDocument.documentElement, n)) {
    if (r !== null && ua(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = $c(n, i);
        var s = $c(
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
var Dv = Ot && "documentMode" in document && 11 >= document.documentMode, Yn = null, tu = null, to = null, nu = !1;
function Rc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nu || Yn == null || Yn !== bi(r) || (r = Yn, "selectionStart" in r && ua(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), to && yo(to, r) || (to = r, r = Xi(tu, "onSelect"), 0 < r.length && (t = new ia("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yn)));
}
function ii(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xn = { animationend: ii("Animation", "AnimationEnd"), animationiteration: ii("Animation", "AnimationIteration"), animationstart: ii("Animation", "AnimationStart"), transitionend: ii("Transition", "TransitionEnd") }, al = {}, Dh = {};
Ot && (Dh = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);
function Cs(e) {
  if (al[e]) return al[e];
  if (!Xn[e]) return e;
  var t = Xn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dh) return al[e] = t[n];
  return e;
}
var zh = Cs("animationend"), Ih = Cs("animationiteration"), Lh = Cs("animationstart"), jh = Cs("transitionend"), Ah = /* @__PURE__ */ new Map(), Oc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hn(e, t) {
  Ah.set(e, t), On(t, [e]);
}
for (var cl = 0; cl < Oc.length; cl++) {
  var fl = Oc[cl], zv = fl.toLowerCase(), Iv = fl[0].toUpperCase() + fl.slice(1);
  hn(zv, "on" + Iv);
}
hn(zh, "onAnimationEnd");
hn(Ih, "onAnimationIteration");
hn(Lh, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(jh, "onTransitionEnd");
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
var Kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
function Fc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, zy(r, t, void 0, e), e.currentTarget = null;
}
function $h(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], u = l.instance, a = l.currentTarget;
        if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
        Fc(o, l, a), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], u = l.instance, a = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
        Fc(o, l, a), i = u;
      }
    }
  }
  if (Bi) throw e = Zl, Bi = !1, Zl = null, e;
}
function ae(e, t) {
  var n = t[lu];
  n === void 0 && (n = t[lu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Rh(t, e, 2, !1), n.add(r));
}
function dl(e, t, n) {
  var r = 0;
  t && (r |= 4), Rh(n, e, r, t);
}
var si = "_reactListening" + Math.random().toString(36).slice(2);
function vo(e) {
  if (!e[si]) {
    e[si] = !0, Ud.forEach(function(n) {
      n !== "selectionchange" && (Lv.has(n) || dl(n, !1, e), dl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[si] || (t[si] = !0, dl("selectionchange", !1, t));
  }
}
function Rh(e, t, n, r) {
  switch (wh(t)) {
    case 1:
      var o = Xy;
      break;
    case 4:
      o = Ky;
      break;
    default:
      o = ra;
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
  sh(function() {
    var a = i, d = Ju(n), c = [];
    e: {
      var f = Ah.get(e);
      if (f !== void 0) {
        var m = ia, y = e;
        switch (e) {
          case "keypress":
            if (Mi(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = av;
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
            m = Mc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Zy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = dv;
            break;
          case zh:
          case Ih:
          case Lh:
            m = ev;
            break;
          case jh:
            m = pv;
            break;
          case "scroll":
            m = Qy;
            break;
          case "wheel":
            m = mv;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = nv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Tc;
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
          if (x = Mc, v = "onMouseLeave", p = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (x = Tc, v = "onPointerLeave", p = "onPointerEnter", g = "pointer"), S = m == null ? f : Kn(m), h = y == null ? f : Kn(y), f = new x(v, g + "leave", m, n, d), f.target = S, f.relatedTarget = h, v = null, Sn(d) === a && (x = new x(p, g + "enter", y, n, d), x.target = h, x.relatedTarget = S, v = x), S = v, m && y) t: {
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
          m !== null && bc(c, f, m, x, !1), y !== null && S !== null && bc(c, S, y, x, !0);
        }
      }
      e: {
        if (f = a ? Kn(a) : window, m = f.nodeName && f.nodeName.toLowerCase(), m === "select" || m === "input" && f.type === "file") var _ = kv;
        else if (Ic(f)) if (Nh) _ = Mv;
        else {
          _ = Cv;
          var k = Ev;
        }
        else (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (_ = Nv);
        if (_ && (_ = _(e, a))) {
          Ch(c, _, n, d);
          break e;
        }
        k && k(e, f, a), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Vl(f, "number", f.value);
      }
      switch (k = a ? Kn(a) : window, e) {
        case "focusin":
          (Ic(k) || k.contentEditable === "true") && (Yn = k, tu = a, to = null);
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
          nu = !1, Rc(c, n, d);
          break;
        case "selectionchange":
          if (Dv) break;
        case "keydown":
        case "keyup":
          Rc(c, n, d);
      }
      var E;
      if (la) e: {
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
      else Wn ? kh(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (_h && n.locale !== "ko" && (Wn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Wn && (E = Sh()) : (en = d, oa = "value" in en ? en.value : en.textContent, Wn = !0)), k = Xi(a, T), 0 < k.length && (T = new Pc(T, e, null, n, d), c.push({ event: T, listeners: k }), E ? T.data = E : (E = Eh(n), E !== null && (T.data = E)))), (E = vv ? xv(e, n) : wv(e, n)) && (a = Xi(a, "onBeforeInput"), 0 < a.length && (d = new Pc("onBeforeInput", "beforeinput", null, n, d), c.push({ event: d, listeners: a }), d.data = E));
    }
    $h(c, t);
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
function bc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, u = l.alternate, a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 && a !== null && (l = a, o ? (u = fo(n, i), u != null && s.unshift(xo(n, u, l))) : o || (u = fo(n, i), u != null && s.push(xo(n, u, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var jv = /\r\n?/g, Av = /\u0000|\uFFFD/g;
function Hc(e) {
  return (typeof e == "string" ? e : "" + e).replace(jv, `
`).replace(Av, "");
}
function li(e, t, n) {
  if (t = Hc(t), Hc(e) !== t && n) throw Error(H(425));
}
function Ki() {
}
var ru = null, ou = null;
function iu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var su = typeof setTimeout == "function" ? setTimeout : void 0, $v = typeof clearTimeout == "function" ? clearTimeout : void 0, Bc = typeof Promise == "function" ? Promise : void 0, Rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bc < "u" ? function(e) {
  return Bc.resolve(null).then(e).catch(Ov);
} : su;
function Ov(e) {
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
function Vc(e) {
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
var Tr = Math.random().toString(36).slice(2), _t = "__reactFiber$" + Tr, wo = "__reactProps$" + Tr, Ft = "__reactContainer$" + Tr, lu = "__reactEvents$" + Tr, Fv = "__reactListeners$" + Tr, bv = "__reactHandles$" + Tr;
function Sn(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[_t]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Vc(e); e !== null; ) {
        if (n = e[_t]) return n;
        e = Vc(e);
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
function pn(e) {
  return { current: e };
}
function fe(e) {
  0 > Qn || (e.current = uu[Qn], uu[Qn] = null, Qn--);
}
function le(e, t) {
  Qn++, uu[Qn] = e.current, e.current = t;
}
var dn = {}, Le = pn(dn), He = pn(!1), Tn = dn;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
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
function Uc(e, t, n) {
  if (Le.current !== dn) throw Error(H(168));
  le(Le, t), le(He, n);
}
function Oh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, Ey(e) || "Unknown", o));
  return ye({}, n, r);
}
function Gi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, Tn = Le.current, le(Le, e), le(He, He.current), !0;
}
function Wc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? (e = Oh(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, fe(He), fe(Le), le(Le, e)) : fe(He), le(He, n);
}
var It = null, Ms = !1, gl = !1;
function Fh(e) {
  It === null ? It = [e] : It.push(e);
}
function Hv(e) {
  Ms = !0, Fh(e);
}
function gn() {
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
      throw It !== null && (It = It.slice(e + 1)), ch(ea, gn), o;
    } finally {
      se = t, gl = !1;
    }
  }
  return null;
}
var Gn = [], Zn = 0, Zi = null, qi = 0, Je = [], et = 0, Dn = null, Lt = 1, jt = "";
function vn(e, t) {
  Gn[Zn++] = qi, Gn[Zn++] = Zi, Zi = e, qi = t;
}
function bh(e, t, n) {
  Je[et++] = Lt, Je[et++] = jt, Je[et++] = Dn, Dn = e;
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
function aa(e) {
  e.return !== null && (vn(e, 1), bh(e, 1, 0));
}
function ca(e) {
  for (; e === Zi; ) Zi = Gn[--Zn], Gn[Zn] = null, qi = Gn[--Zn], Gn[Zn] = null;
  for (; e === Dn; ) Dn = Je[--et], Je[et] = null, jt = Je[--et], Je[et] = null, Lt = Je[--et], Je[et] = null;
}
var Xe = null, Ye = null, de = !1, ft = null;
function Hh(e, t) {
  var n = tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Yc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = sn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dn !== null ? { id: Lt, overflow: jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function au(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cu(e) {
  if (de) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Yc(e, t)) {
        if (au(e)) throw Error(H(418));
        t = sn(n.nextSibling);
        var r = Xe;
        t && Yc(e, t) ? Hh(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, Xe = e);
      }
    } else {
      if (au(e)) throw Error(H(418));
      e.flags = e.flags & -4097 | 2, de = !1, Xe = e;
    }
  }
}
function Xc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Xe = e;
}
function ui(e) {
  if (e !== Xe) return !1;
  if (!de) return Xc(e), de = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !iu(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (au(e)) throw Bh(), Error(H(418));
    for (; t; ) Hh(e, t), t = sn(t.nextSibling);
  }
  if (Xc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
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
function Bh() {
  for (var e = Ye; e; ) e = sn(e.nextSibling);
}
function hr() {
  Ye = Xe = null, de = !1;
}
function fa(e) {
  ft === null ? ft = [e] : ft.push(e);
}
var Bv = Vt.ReactCurrentBatchConfig;
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
function Kc(e) {
  var t = e._init;
  return t(e._payload);
}
function Vh(e) {
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
    return p = cn(p, g), p.index = 0, p.sibling = null, p;
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
    return _ === Un ? d(p, g, h.props.children, v, h.key) : g !== null && (g.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Qt && Kc(_) === g.type) ? (v = o(g, h.props), v.ref = Fr(p, g, h), v.return = p, v) : (v = ji(h.type, h.key, h.props, null, p.mode, v), v.ref = Fr(p, g, h), v.return = p, v);
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
        case Qt:
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
        case Qt:
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
        case Qt:
          var k = v._init;
          return m(p, g, h, k(v._payload), _);
      }
      if (Yr(v) || jr(v)) return p = p.get(h) || null, d(g, p, v, _, null);
      ai(g, v);
    }
    return null;
  }
  function y(p, g, h, v) {
    for (var _ = null, k = null, E = g, T = g = 0, z = null; E !== null && T < h.length; T++) {
      E.index > T ? (z = E, E = null) : z = E.sibling;
      var R = f(p, E, h[T], v);
      if (R === null) {
        E === null && (E = z);
        break;
      }
      e && E && R.alternate === null && t(p, E), g = i(R, g, T), k === null ? _ = R : k.sibling = R, k = R, E = z;
    }
    if (T === h.length) return n(p, E), de && vn(p, T), _;
    if (E === null) {
      for (; T < h.length; T++) E = c(p, h[T], v), E !== null && (g = i(E, g, T), k === null ? _ = E : k.sibling = E, k = E);
      return de && vn(p, T), _;
    }
    for (E = r(p, E); T < h.length; T++) z = m(E, p, T, h[T], v), z !== null && (e && z.alternate !== null && E.delete(z.key === null ? T : z.key), g = i(z, g, T), k === null ? _ = z : k.sibling = z, k = z);
    return e && E.forEach(function(I) {
      return t(p, I);
    }), de && vn(p, T), _;
  }
  function x(p, g, h, v) {
    var _ = jr(h);
    if (typeof _ != "function") throw Error(H(150));
    if (h = _.call(h), h == null) throw Error(H(151));
    for (var k = _ = null, E = g, T = g = 0, z = null, R = h.next(); E !== null && !R.done; T++, R = h.next()) {
      E.index > T ? (z = E, E = null) : z = E.sibling;
      var I = f(p, E, R.value, v);
      if (I === null) {
        E === null && (E = z);
        break;
      }
      e && E && I.alternate === null && t(p, E), g = i(I, g, T), k === null ? _ = I : k.sibling = I, k = I, E = z;
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
    return e && E.forEach(function(j) {
      return t(p, j);
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
                } else if (k.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Qt && Kc(_) === k.type) {
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
        case Qt:
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
var pr = Vh(!0), Uh = Vh(!1), Ji = pn(null), es = null, qn = null, da = null;
function ha() {
  da = qn = es = null;
}
function pa(e) {
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
  es = e, da = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function rt(e) {
  var t = e._currentValue;
  if (da !== e) if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
    if (es === null) throw Error(H(308));
    qn = e, es.dependencies = { lanes: 0, firstContext: e };
  } else qn = qn.next = e;
  return t;
}
var _n = null;
function ga(e) {
  _n === null ? _n = [e] : _n.push(e);
}
function Wh(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ga(t)) : (n.next = o.next, o.next = n), t.interleaved = n, bt(e, r);
}
function bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function ma(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Yh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function $t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, re & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, bt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ga(r)) : (t.next = o.next, o.next = t), r.interleaved = t, bt(e, n);
}
function Pi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ta(e, n);
  }
}
function Qc(e, t) {
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
              Gt = !0;
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
function Gc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(H(191, o));
      o.call(r);
    }
  }
}
var bo = {}, Et = pn(bo), So = pn(bo), _o = pn(bo);
function kn(e) {
  if (e === bo) throw Error(H(174));
  return e;
}
function ya(e, t) {
  switch (le(_o, t), le(So, e), le(Et, bo), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Wl(t, e);
  }
  fe(Et), le(Et, t);
}
function gr() {
  fe(Et), fe(So), fe(_o);
}
function Xh(e) {
  kn(_o.current);
  var t = kn(Et.current), n = Wl(t, e.type);
  t !== n && (le(So, e), le(Et, n));
}
function va(e) {
  So.current === e && (fe(Et), fe(So));
}
var ge = pn(0);
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
function xa() {
  for (var e = 0; e < ml.length; e++) ml[e]._workInProgressVersionPrimary = null;
  ml.length = 0;
}
var Ti = Vt.ReactCurrentDispatcher, yl = Vt.ReactCurrentBatchConfig, zn = 0, me = null, _e = null, Ee = null, rs = !1, no = !1, ko = 0, Vv = 0;
function De() {
  throw Error(H(321));
}
function wa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return !1;
  return !0;
}
function Sa(e, t, n, r, o, i) {
  if (zn = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ti.current = e === null || e.memoizedState === null ? Xv : Kv, e = n(r, o), no) {
    i = 0;
    do {
      if (no = !1, ko = 0, 25 <= i) throw Error(H(301));
      i += 1, Ee = _e = null, t.updateQueue = null, Ti.current = Qv, e = n(r, o);
    } while (no);
  }
  if (Ti.current = os, t = _e !== null && _e.next !== null, zn = 0, Ee = _e = me = null, rs = !1, t) throw Error(H(300));
  return e;
}
function _a() {
  var e = ko !== 0;
  return ko = 0, e;
}
function wt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ee === null ? me.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
}
function ot() {
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
  var t = ot(), n = t.queue;
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
  var t = ot(), n = t.queue;
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
function Kh() {
}
function Qh(e, t) {
  var n = me, r = ot(), o = t(), i = !yt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Fe = !0), r = r.queue, ka(qh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ee !== null && Ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, Co(9, Zh.bind(null, n, r, o, t), void 0, null), Ce === null) throw Error(H(349));
    zn & 30 || Gh(n, t, o);
  }
  return o;
}
function Gh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zh(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Jh(t) && ep(e);
}
function qh(e, t, n) {
  return n(function() {
    Jh(t) && ep(e);
  });
}
function Jh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function ep(e) {
  var t = bt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Zc(e) {
  var t = wt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: e }, t.queue = e, e = e.dispatch = Yv.bind(null, me, e), [t.memoizedState, e];
}
function Co(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function tp() {
  return ot().memoizedState;
}
function Di(e, t, n, r) {
  var o = wt();
  me.flags |= e, o.memoizedState = Co(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ps(e, t, n, r) {
  var o = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (_e !== null) {
    var s = _e.memoizedState;
    if (i = s.destroy, r !== null && wa(r, s.deps)) {
      o.memoizedState = Co(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = Co(1 | t, n, i, r);
}
function qc(e, t) {
  return Di(8390656, 8, e, t);
}
function ka(e, t) {
  return Ps(2048, 8, e, t);
}
function np(e, t) {
  return Ps(4, 2, e, t);
}
function rp(e, t) {
  return Ps(4, 4, e, t);
}
function op(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ip(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ps(4, 4, op.bind(null, t, e), n);
}
function Ea() {
}
function sp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function up(e, t, n) {
  return zn & 21 ? (yt(n, t) || (n = hh(), me.lanes |= n, In |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function Uv(e, t) {
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
function ap() {
  return ot().memoizedState;
}
function Wv(e, t, n) {
  var r = an(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cp(e)) fp(t, n);
  else if (n = Wh(e, t, n, r), n !== null) {
    var o = Ae();
    mt(n, e, r, o), dp(n, t, r);
  }
}
function Yv(e, t, n) {
  var r = an(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cp(e)) fp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, yt(l, s)) {
        var u = t.interleaved;
        u === null ? (o.next = o, ga(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Wh(e, t, o, r), n !== null && (o = Ae(), mt(n, e, r, o), dp(n, t, r));
  }
}
function cp(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function fp(e, t) {
  no = rs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function dp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ta(e, n);
  }
}
var os = { readContext: rt, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, Xv = { readContext: rt, useCallback: function(e, t) {
  return wt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: rt, useEffect: qc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Di(
    4194308,
    4,
    op.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Wv.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = wt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Zc, useDebugValue: Ea, useDeferredValue: function(e) {
  return wt().memoizedState = e;
}, useTransition: function() {
  var e = Zc(!1), t = e[0];
  return e = Uv.bind(null, e[1]), wt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = wt();
  if (de) {
    if (n === void 0) throw Error(H(407));
    n = n();
  } else {
    if (n = t(), Ce === null) throw Error(H(349));
    zn & 30 || Gh(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, qc(qh.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Co(9, Zh.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = wt(), t = Ce.identifierPrefix;
  if (de) {
    var n = jt, r = Lt;
    n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ko++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Vv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Kv = {
  readContext: rt,
  useCallback: sp,
  useContext: rt,
  useEffect: ka,
  useImperativeHandle: ip,
  useInsertionEffect: np,
  useLayoutEffect: rp,
  useMemo: lp,
  useReducer: vl,
  useRef: tp,
  useState: function() {
    return vl(Eo);
  },
  useDebugValue: Ea,
  useDeferredValue: function(e) {
    var t = ot();
    return up(t, _e.memoizedState, e);
  },
  useTransition: function() {
    var e = vl(Eo)[0], t = ot().memoizedState;
    return [e, t];
  },
  useMutableSource: Kh,
  useSyncExternalStore: Qh,
  useId: ap,
  unstable_isNewReconciler: !1
}, Qv = { readContext: rt, useCallback: sp, useContext: rt, useEffect: ka, useImperativeHandle: ip, useInsertionEffect: np, useLayoutEffect: rp, useMemo: lp, useReducer: xl, useRef: tp, useState: function() {
  return xl(Eo);
}, useDebugValue: Ea, useDeferredValue: function(e) {
  var t = ot();
  return _e === null ? t.memoizedState = e : up(t, _e.memoizedState, e);
}, useTransition: function() {
  var e = xl(Eo)[0], t = ot().memoizedState;
  return [e, t];
}, useMutableSource: Kh, useSyncExternalStore: Qh, useId: ap, unstable_isNewReconciler: !1 };
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
  var r = Ae(), o = an(e), i = $t(r, o);
  i.payload = t, n != null && (i.callback = n), t = ln(e, i, o), t !== null && (mt(t, e, o, r), Pi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ae(), o = an(e), i = $t(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ln(e, i, o), t !== null && (mt(t, e, o, r), Pi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ae(), r = an(e), o = $t(n, r);
  o.tag = 2, t != null && (o.callback = t), t = ln(e, o, r), t !== null && (mt(t, e, r, n), Pi(t, e, r));
} };
function Jc(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !yo(n, r) || !yo(o, i) : !0;
}
function hp(e, t, n) {
  var r = !1, o = dn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = rt(i) : (o = Be(t) ? Tn : Le.current, r = t.contextTypes, i = (r = r != null) ? dr(e, o) : dn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ts, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ef(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ts.enqueueReplaceState(t, t.state, null);
}
function hu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ma(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = rt(i) : (i = Be(t) ? Tn : Le.current, o.context = dr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (du(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ts.enqueueReplaceState(o, o.state, null), ts(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function mr(e, t) {
  try {
    var n = "", r = t;
    do
      n += ky(r), r = r.return;
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
var Gv = typeof WeakMap == "function" ? WeakMap : Map;
function pp(e, t, n) {
  n = $t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ss || (ss = !0, Eu = r), pu(e, t);
  }, n;
}
function gp(e, t, n) {
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
    pu(e, t), typeof r != "function" && (un === null ? un = /* @__PURE__ */ new Set([this]) : un.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function tf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gv();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = cx.bind(null, e, t, n), t.then(e, e));
}
function nf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rf(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, ln(n, t, 1))), n.lanes |= 1), e);
}
var Zv = Vt.ReactCurrentOwner, Fe = !1;
function je(e, t, n, r) {
  t.child = e === null ? Uh(t, null, n, r) : pr(t, e.child, n, r);
}
function of(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return lr(t, o), r = Sa(e, t, n, r, i, o), n = _a(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ht(e, t, o)) : (de && n && aa(t), t.flags |= 1, je(e, t, r, o), t.child);
}
function sf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ia(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, mp(e, t, i, r, o)) : (e = ji(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : yo, n(s, r) && e.ref === t.ref) return Ht(e, t, o);
  }
  return t.flags |= 1, e = cn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function mp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (yo(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, Ht(e, t, o);
  }
  return gu(e, t, n, r, o);
}
function yp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(er, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(er, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, le(er, Ue), Ue |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, le(er, Ue), Ue |= r;
  return je(e, t, o, n), t.child;
}
function vp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function gu(e, t, n, r, o) {
  var i = Be(n) ? Tn : Le.current;
  return i = dr(t, i), lr(t, o), n = Sa(e, t, n, r, i, o), r = _a(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ht(e, t, o)) : (de && r && aa(t), t.flags |= 1, je(e, t, n, o), t.child);
}
function lf(e, t, n, r, o) {
  if (Be(n)) {
    var i = !0;
    Gi(t);
  } else i = !1;
  if (lr(t, o), t.stateNode === null) zi(e, t), hp(t, n, r), hu(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var u = s.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = rt(a) : (a = Be(n) ? Tn : Le.current, a = dr(t, a));
    var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== a) && ef(t, s, r, a), Gt = !1;
    var f = t.memoizedState;
    s.state = f, ts(t, r, s, o), u = t.memoizedState, l !== r || f !== u || He.current || Gt ? (typeof d == "function" && (du(t, n, d, r), u = t.memoizedState), (l = Gt || Jc(t, n, l, r, f, u, a)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = a, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Yh(e, t), l = t.memoizedProps, a = t.type === t.elementType ? l : ut(t.type, l), s.props = a, c = t.pendingProps, f = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = rt(u) : (u = Be(n) ? Tn : Le.current, u = dr(t, u));
    var m = n.getDerivedStateFromProps;
    (d = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== c || f !== u) && ef(t, s, r, u), Gt = !1, f = t.memoizedState, s.state = f, ts(t, r, s, o);
    var y = t.memoizedState;
    l !== c || f !== y || He.current || Gt ? (typeof m == "function" && (du(t, n, m, r), y = t.memoizedState), (a = Gt || Jc(t, n, a, r, f, y, u) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = u, r = a) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return mu(e, t, n, r, i, o);
}
function mu(e, t, n, r, o, i) {
  vp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Wc(t, n, !1), Ht(e, t, i);
  r = t.stateNode, Zv.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = pr(t, e.child, null, i), t.child = pr(t, null, l, i)) : je(e, t, l, i), t.memoizedState = r.state, o && Wc(t, n, !0), t.child;
}
function xp(e) {
  var t = e.stateNode;
  t.pendingContext ? Uc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uc(e, t.context, !1), ya(e, t.containerInfo);
}
function uf(e, t, n, r, o) {
  return hr(), fa(o), t.flags |= 256, je(e, t, n, r), t.child;
}
var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wp(e, t, n) {
  var r = t.pendingProps, o = ge.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), le(ge, o & 1), e === null)
    return cu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Is(s, r, 0, null), e = Nn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = vu(n), t.memoizedState = yu, e) : Ca(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return qv(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = cn(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = cn(l, i) : (i = Nn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? vu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = yu, r;
  }
  return i = e.child, e = i.sibling, r = cn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ca(e, t) {
  return t = Is({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ci(e, t, n, r) {
  return r !== null && fa(r), pr(t, e.child, null, n), e = Ca(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qv(e, t, n, r, o, i, s) {
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
    return za(), r = wl(Error(H(421))), ci(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fx.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ye = sn(o.nextSibling), Xe = t, de = !0, ft = null, e !== null && (Je[et++] = Lt, Je[et++] = jt, Je[et++] = Dn, Lt = e.id, jt = e.overflow, Dn = t), t = Ca(t, r.children), t.flags |= 4096, t);
}
function af(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fu(e.return, t, n);
}
function Sl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Sp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (je(e, t, r.children, n), r = ge.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && af(e, n, t);
      else if (e.tag === 19) af(e, n, t);
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
    for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Jv(e, t, n) {
  switch (t.tag) {
    case 3:
      xp(t), hr();
      break;
    case 5:
      Xh(t);
      break;
    case 1:
      Be(t.type) && Gi(t);
      break;
    case 4:
      ya(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      le(Ji, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (le(ge, ge.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? wp(e, t, n) : (le(ge, ge.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
      le(ge, ge.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Sp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), le(ge, ge.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, yp(e, t, n);
  }
  return Ht(e, t, n);
}
var _p, xu, kp, Ep;
_p = function(e, t) {
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
kp = function(e, t, n, r) {
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
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (ao.hasOwnProperty(a) ? (u != null && a === "onScroll" && ae("scroll", e), i || l === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Ep = function(e, t, n, r) {
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
function ex(e, t, n) {
  var r = t.pendingProps;
  switch (ca(t), t.tag) {
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
      return r = t.stateNode, gr(), fe(He), fe(Le), xa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Mu(ft), ft = null))), xu(e, t), ze(t), null;
    case 5:
      va(t);
      var o = kn(_o.current);
      if (n = t.type, e !== null && t.stateNode != null) kp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
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
              yc(r, i), ae("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ae("invalid", r);
              break;
            case "textarea":
              xc(r, i), ae("invalid", r);
          }
          Yl(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && li(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && li(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : ao.hasOwnProperty(s) && l != null && s === "onScroll" && ae("scroll", r);
          }
          switch (n) {
            case "input":
              Jo(r), vc(r, i, !0);
              break;
            case "textarea":
              Jo(r), wc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ki);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = qd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[_t] = t, e[wo] = r, _p(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Xl(n, r), n) {
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
                yc(e, r), o = Hl(e, r), ae("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ye({}, r, { value: void 0 }), ae("invalid", e);
                break;
              case "textarea":
                xc(e, r), o = Ul(e, r), ae("invalid", e);
                break;
              default:
                o = r;
            }
            Yl(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "style" ? th(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Jd(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && co(e, u) : typeof u == "number" && co(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ao.hasOwnProperty(i) ? u != null && i === "onScroll" && ae("scroll", e) : u != null && Qu(e, i, u, s));
            }
            switch (n) {
              case "input":
                Jo(e), vc(e, r, !1);
                break;
              case "textarea":
                Jo(e), wc(e);
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
      if (e && t.stateNode != null) Ep(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (n = kn(_o.current), kn(Et.current), ui(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (i = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
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
        if (de && Ye !== null && t.mode & 1 && !(t.flags & 128)) Bh(), hr(), t.flags |= 98560, i = !1;
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
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ge.current & 1 ? ke === 0 && (ke = 3) : za())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
    case 4:
      return gr(), xu(e, t), e === null && vo(t.stateNode.containerInfo), ze(t), null;
    case 10:
      return pa(t.type._context), ze(t), null;
    case 17:
      return Be(t.type) && Qi(), ze(t), null;
    case 19:
      if (fe(ge), i = t.memoizedState, i === null) return ze(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) br(i, !1);
      else {
        if (ke !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ns(e), s !== null) {
            for (t.flags |= 128, br(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return le(ge, ge.current & 1 | 2), t.child;
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
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = xe(), t.sibling = null, n = ge.current, le(ge, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
    case 22:
    case 23:
      return Da(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function tx(e, t) {
  switch (ca(t), t.tag) {
    case 1:
      return Be(t.type) && Qi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gr(), fe(He), fe(Le), xa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return va(t), null;
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
      return pa(t.type._context), null;
    case 22:
    case 23:
      return Da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fi = !1, Ie = !1, nx = typeof WeakSet == "function" ? WeakSet : Set, W = null;
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
var cf = !1;
function rx(e, t) {
  if (ru = Wi, e = Th(), ua(e)) {
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
  return y = cf, cf = !1, y;
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
function Cp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Cp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[wo], delete t[lu], delete t[Fv], delete t[bv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Np(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ff(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Np(e.return)) return null;
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
function Yt(e, t, n) {
  for (n = n.child; n !== null; ) Mp(e, t, n), n = n.sibling;
}
function Mp(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function") try {
    kt.onCommitFiberUnmount(_s, n);
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
      Ne !== null && (at ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? pl(e.parentNode, n) : e.nodeType === 1 && pl(e, n), go(e)) : pl(Ne, n.stateNode));
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
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && wu(n, t, s), o = o.next;
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
function df(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nx()), t.forEach(function(r) {
      var o = dx.bind(null, e, r);
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
      Mp(i, s, o), Ne = null, at = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      ve(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pp(t, e), t = t.sibling;
}
function Pp(e, t) {
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
          l === "input" && i.type === "radio" && i.name != null && Gd(o, i), Xl(l, s);
          var a = Xl(l, i);
          for (s = 0; s < u.length; s += 2) {
            var d = u[s], c = u[s + 1];
            d === "style" ? th(o, c) : d === "dangerouslySetInnerHTML" ? Jd(o, c) : d === "children" ? co(o, c) : Qu(o, d, c, a);
          }
          switch (l) {
            case "input":
              Bl(o, i);
              break;
            case "textarea":
              Zd(o, i);
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
      st(t, e), xt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Pa = xe())), r & 4 && df(e);
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
                  pf(c);
                  continue;
                }
            }
            m !== null ? (m.return = f, W = m) : pf(c);
          }
          d = d.sibling;
        }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                o = c.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = c.stateNode, u = c.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = eh("display", s));
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
      st(t, e), xt(e), r & 4 && df(e);
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
          if (Np(n)) {
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
          var i = ff(e);
          ku(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = ff(e);
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
function ox(e, t, n) {
  W = e, Tp(e);
}
function Tp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || fi;
      if (!s) {
        var l = o.alternate, u = l !== null && l.memoizedState !== null || Ie;
        l = fi;
        var a = Ie;
        if (fi = s, (Ie = u) && !a) for (W = o; W !== null; ) s = W, u = s.child, s.tag === 22 && s.memoizedState !== null ? gf(o) : u !== null ? (u.return = s, W = u) : gf(o);
        for (; i !== null; ) W = i, Tp(i), i = i.sibling;
        W = o, fi = l, Ie = a;
      }
      hf(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, W = i) : hf(e);
  }
}
function hf(e) {
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
            i !== null && Gc(t, i, r);
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
              Gc(t, s, n);
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
function pf(e) {
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
function gf(e) {
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
var ix = Math.ceil, is = Vt.ReactCurrentDispatcher, Na = Vt.ReactCurrentOwner, nt = Vt.ReactCurrentBatchConfig, re = 0, Ce = null, we = null, Me = 0, Ue = 0, er = pn(0), ke = 0, No = null, In = 0, zs = 0, Ma = 0, oo = null, Oe = null, Pa = 0, yr = 1 / 0, zt = null, ss = !1, Eu = null, un = null, di = !1, tn = null, ls = 0, io = 0, Cu = null, Ii = -1, Li = 0;
function Ae() {
  return re & 6 ? xe() : Ii !== -1 ? Ii : Ii = xe();
}
function an(e) {
  return e.mode & 1 ? re & 2 && Me !== 0 ? Me & -Me : Bv.transition !== null ? (Li === 0 && (Li = hh()), Li) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : wh(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < io) throw io = 0, Cu = null, Error(H(185));
  Ro(e, n, r), (!(re & 2) || e !== Ce) && (e === Ce && (!(re & 2) && (zs |= n), ke === 4 && qt(e, Me)), Ve(e, r), n === 1 && re === 0 && !(t.mode & 1) && (yr = xe() + 500, Ms && gn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  By(e, t);
  var r = Ui(e, e === Ce ? Me : 0);
  if (r === 0) n !== null && kc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && kc(n), t === 1) e.tag === 0 ? Hv(mf.bind(null, e)) : Fh(mf.bind(null, e)), Rv(function() {
      !(re & 6) && gn();
    }), n = null;
    else {
      switch (ph(r)) {
        case 1:
          n = ea;
          break;
        case 4:
          n = fh;
          break;
        case 16:
          n = Vi;
          break;
        case 536870912:
          n = dh;
          break;
        default:
          n = Vi;
      }
      n = Rp(n, Dp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Dp(e, t) {
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
    var i = Ip();
    (Ce !== e || Me !== t) && (zt = null, yr = xe() + 500, Cn(e, t));
    do
      try {
        ux();
        break;
      } catch (l) {
        zp(e, l);
      }
    while (!0);
    ha(), is.current = i, re = o, we !== null ? t = 0 : (Ce = null, Me = 0, t = ke);
  }
  if (t !== 0) {
    if (t === 2 && (o = ql(e), o !== 0 && (r = o, t = Nu(e, o))), t === 1) throw n = No, Cn(e, 0), qt(e, r), Ve(e, xe()), n;
    if (t === 6) qt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !sx(o) && (t = us(e, r), t === 2 && (i = ql(e), i !== 0 && (r = i, t = Nu(e, i))), t === 1)) throw n = No, Cn(e, 0), qt(e, r), Ve(e, xe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          xn(e, Oe, zt);
          break;
        case 3:
          if (qt(e, r), (r & 130023424) === r && (t = Pa + 500 - xe(), 10 < t)) {
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
          if (qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - gt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ix(r / 1960)) - r, 10 < r) {
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
  return Ve(e, xe()), e.callbackNode === n ? Dp.bind(null, e) : null;
}
function Nu(e, t) {
  var n = oo;
  return e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), e = us(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && Mu(t)), e;
}
function Mu(e) {
  Oe === null ? Oe = e : Oe.push.apply(Oe, e);
}
function sx(e) {
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
  for (t &= ~Ma, t &= ~zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - gt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function mf(e) {
  if (re & 6) throw Error(H(327));
  ur();
  var t = Ui(e, 0);
  if (!(t & 1)) return Ve(e, xe()), null;
  var n = us(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ql(e);
    r !== 0 && (t = r, n = Nu(e, r));
  }
  if (n === 1) throw n = No, Cn(e, 0), qt(e, t), Ve(e, xe()), n;
  if (n === 6) throw Error(H(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, xn(e, Oe, zt), Ve(e, xe()), null;
}
function Ta(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    re = n, re === 0 && (yr = xe() + 500, Ms && gn());
  }
}
function Ln(e) {
  tn !== null && tn.tag === 0 && !(re & 6) && ur();
  var t = re;
  re |= 1;
  var n = nt.transition, r = se;
  try {
    if (nt.transition = null, se = 1, e) return e();
  } finally {
    se = r, nt.transition = n, re = t, !(re & 6) && gn();
  }
}
function Da() {
  Ue = er.current, fe(er);
}
function Cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, $v(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (ca(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Qi();
        break;
      case 3:
        gr(), fe(He), fe(Le), xa();
        break;
      case 5:
        va(r);
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
        pa(r.type._context);
        break;
      case 22:
      case 23:
        Da();
    }
    n = n.return;
  }
  if (Ce = e, we = e = cn(e.current, null), Me = Ue = t, ke = 0, No = null, Ma = zs = In = 0, Oe = oo = null, _n !== null) {
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
function zp(e, t) {
  do {
    var n = we;
    try {
      if (ha(), Ti.current = os, rs) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        rs = !1;
      }
      if (zn = 0, Ee = _e = me = null, no = !1, ko = 0, Na.current = null, n === null || n.return === null) {
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
          var m = nf(s);
          if (m !== null) {
            m.flags &= -257, rf(m, s, l, i, t), m.mode & 1 && tf(i, a, t), t = m, u = a;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              tf(i, a, t), za();
              break e;
            }
            u = Error(H(426));
          }
        } else if (de && l.mode & 1) {
          var S = nf(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), rf(S, s, l, i, t), fa(mr(u, l));
            break e;
          }
        }
        i = u = mr(u, l), ke !== 4 && (ke = 2), oo === null ? oo = [i] : oo.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = pp(i, u, t);
              Qc(i, p);
              break e;
            case 1:
              l = u;
              var g = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (un === null || !un.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = gp(i, l, t);
                Qc(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jp(n);
    } catch (_) {
      t = _, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ip() {
  var e = is.current;
  return is.current = os, e === null ? os : e;
}
function za() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Ce === null || !(In & 268435455) && !(zs & 268435455) || qt(Ce, Me);
}
function us(e, t) {
  var n = re;
  re |= 2;
  var r = Ip();
  (Ce !== e || Me !== t) && (zt = null, Cn(e, t));
  do
    try {
      lx();
      break;
    } catch (o) {
      zp(e, o);
    }
  while (!0);
  if (ha(), re = n, is.current = r, we !== null) throw Error(H(261));
  return Ce = null, Me = 0, ke;
}
function lx() {
  for (; we !== null; ) Lp(we);
}
function ux() {
  for (; we !== null && !Ly(); ) Lp(we);
}
function Lp(e) {
  var t = $p(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? jp(e) : we = t, Na.current = null;
}
function jp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = tx(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ke = 6, we = null;
        return;
      }
    } else if (n = ex(n, t, Ue), n !== null) {
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
  var r = se, o = nt.transition;
  try {
    nt.transition = null, se = 1, ax(e, t, n, r);
  } finally {
    nt.transition = o, se = r;
  }
  return null;
}
function ax(e, t, n, r) {
  do
    ur();
  while (tn !== null);
  if (re & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(H(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Vy(e, i), e === Ce && (we = Ce = null, Me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || di || (di = !0, Rp(Vi, function() {
    return ur(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = nt.transition, nt.transition = null;
    var s = se;
    se = 1;
    var l = re;
    re |= 4, Na.current = null, rx(e, n), Pp(n, e), Tv(ou), Wi = !!ru, ou = ru = null, e.current = n, ox(n), jy(), re = l, se = s, nt.transition = i;
  } else e.current = n;
  if (di && (di = !1, tn = e, ls = o), i = e.pendingLanes, i === 0 && (un = null), Ry(n.stateNode), Ve(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ss) throw ss = !1, e = Eu, Eu = null, e;
  return ls & 1 && e.tag !== 0 && ur(), i = e.pendingLanes, i & 1 ? e === Cu ? io++ : (io = 0, Cu = e) : io = 0, gn(), null;
}
function ur() {
  if (tn !== null) {
    var e = ph(ls), t = nt.transition, n = se;
    try {
      if (nt.transition = null, se = 16 > e ? 16 : e, tn === null) var r = !1;
      else {
        if (e = tn, tn = null, ls = 0, re & 6) throw Error(H(331));
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
                    if (Cp(d), d === a) {
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
        if (re = o, gn(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
          kt.onPostCommitFiberRoot(_s, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      se = n, nt.transition = t;
    }
  }
  return !1;
}
function yf(e, t, n) {
  t = mr(n, t), t = pp(e, t, 1), e = ln(e, t, 1), t = Ae(), e !== null && (Ro(e, 1, t), Ve(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) yf(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      yf(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (un === null || !un.has(r))) {
        e = mr(n, e), e = gp(t, e, 1), t = ln(t, e, 1), e = Ae(), t !== null && (Ro(t, 1, e), Ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function cx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Me & n) === n && (ke === 4 || ke === 3 && (Me & 130023424) === Me && 500 > xe() - Pa ? Cn(e, 0) : Ma |= n), Ve(e, t);
}
function Ap(e, t) {
  t === 0 && (e.mode & 1 ? (t = ni, ni <<= 1, !(ni & 130023424) && (ni = 4194304)) : t = 1);
  var n = Ae();
  e = bt(e, t), e !== null && (Ro(e, t, n), Ve(e, n));
}
function fx(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ap(e, n);
}
function dx(e, t) {
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
  r !== null && r.delete(t), Ap(e, n);
}
var $p;
$p = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || He.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, Jv(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, de && t.flags & 1048576 && bh(t, qi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zi(e, t), e = t.pendingProps;
      var o = dr(t, Le.current);
      lr(t, n), o = Sa(null, t, r, e, o, n);
      var i = _a();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (i = !0, Gi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ma(t), o.updater = Ts, t.stateNode = o, o._reactInternals = t, hu(t, r, e, n), t = mu(null, t, r, !0, i, n)) : (t.tag = 0, de && i && aa(t), je(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = px(r), e = ut(r, e), o) {
          case 0:
            t = gu(null, t, r, e, n);
            break e;
          case 1:
            t = lf(null, t, r, e, n);
            break e;
          case 11:
            t = of(null, t, r, e, n);
            break e;
          case 14:
            t = sf(null, t, r, ut(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), lf(e, t, r, o, n);
    case 3:
      e: {
        if (xp(t), e === null) throw Error(H(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Yh(e, t), ts(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = mr(Error(H(423)), t), t = uf(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = mr(Error(H(424)), t), t = uf(e, t, r, n, o);
          break e;
        } else for (Ye = sn(t.stateNode.containerInfo.firstChild), Xe = t, de = !0, ft = null, n = Uh(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return Xh(t), e === null && cu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, iu(r, o) ? s = null : i !== null && iu(r, i) && (t.flags |= 32), vp(e, t), je(e, t, s, n), t.child;
    case 6:
      return e === null && cu(t), null;
    case 13:
      return wp(e, t, n);
    case 4:
      return ya(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pr(t, null, r, n) : je(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), of(e, t, r, o, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, le(Ji, r._currentValue), r._currentValue = s, i !== null) if (yt(i.value, s)) {
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
      return o = t.type, r = t.pendingProps.children, lr(t, n), o = rt(o), r = r(o), t.flags |= 1, je(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), sf(e, t, r, o, n);
    case 15:
      return mp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), zi(e, t), t.tag = 1, Be(r) ? (e = !0, Gi(t)) : e = !1, lr(t, n), hp(t, r, o), hu(t, r, o, n), mu(null, t, r, !0, e, n);
    case 19:
      return Sp(e, t, n);
    case 22:
      return yp(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function Rp(e, t) {
  return ch(e, t);
}
function hx(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function tt(e, t, n, r) {
  return new hx(e, t, n, r);
}
function Ia(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function px(e) {
  if (typeof e == "function") return Ia(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zu) return 11;
    if (e === qu) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ji(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Ia(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Un:
      return Nn(n.children, o, i, t);
    case Gu:
      s = 8, o |= 8;
      break;
    case Rl:
      return e = tt(12, n, t, o | 2), e.elementType = Rl, e.lanes = i, e;
    case Ol:
      return e = tt(13, n, t, o), e.elementType = Ol, e.lanes = i, e;
    case Fl:
      return e = tt(19, n, t, o), e.elementType = Fl, e.lanes = i, e;
    case Xd:
      return Is(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Wd:
          s = 10;
          break e;
        case Yd:
          s = 9;
          break e;
        case Zu:
          s = 11;
          break e;
        case qu:
          s = 14;
          break e;
        case Qt:
          s = 16, r = null;
          break e;
      }
      throw Error(H(130, e == null ? e : typeof e, ""));
  }
  return t = tt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Nn(e, t, n, r) {
  return e = tt(7, e, r, t), e.lanes = n, e;
}
function Is(e, t, n, r) {
  return e = tt(22, e, r, t), e.elementType = Xd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function _l(e, t, n) {
  return e = tt(6, e, null, t), e.lanes = n, e;
}
function kl(e, t, n) {
  return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gx(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = rl(0), this.expirationTimes = rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function La(e, t, n, r, o, i, s, l, u) {
  return e = new gx(e, t, n, l, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = tt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ma(i), e;
}
function mx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Op(e) {
  if (!e) return dn;
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
    if (Be(n)) return Oh(e, n, t);
  }
  return t;
}
function Fp(e, t, n, r, o, i, s, l, u) {
  return e = La(n, r, !0, e, o, i, s, l, u), e.context = Op(null), n = e.current, r = Ae(), o = an(n), i = $t(r, o), i.callback = t ?? null, ln(n, i, o), e.current.lanes = o, Ro(e, o, r), Ve(e, r), e;
}
function Ls(e, t, n, r) {
  var o = t.current, i = Ae(), s = an(o);
  return n = Op(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ln(o, t, s), e !== null && (mt(e, o, s, i), Pi(e, o, s)), s;
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
function vf(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ja(e, t) {
  vf(e, t), (e = e.alternate) && vf(e, t);
}
function yx() {
  return null;
}
var bp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Aa(e) {
  this._internalRoot = e;
}
js.prototype.render = Aa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  Ls(e, t, null, null);
};
js.prototype.unmount = Aa.prototype.unmount = function() {
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
    var t = yh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++) ;
    Zt.splice(n, 0, e), n === 0 && xh(e);
  }
};
function $a(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function As(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function xf() {
}
function vx(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = as(s);
        i.call(a);
      };
    }
    var s = Fp(t, r, e, 0, null, !1, !1, "", xf);
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
  var u = La(e, 0, !1, null, null, !1, !1, "", xf);
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
  } else s = vx(n, t, e, o, r);
  return as(s);
}
gh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xr(t.pendingLanes);
        n !== 0 && (ta(t, n | 1), Ve(t, xe()), !(re & 6) && (yr = xe() + 500, gn()));
      }
      break;
    case 13:
      Ln(function() {
        var r = bt(e, 1);
        if (r !== null) {
          var o = Ae();
          mt(r, e, 1, o);
        }
      }), ja(e, 1);
  }
};
na = function(e) {
  if (e.tag === 13) {
    var t = bt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      mt(t, e, 134217728, n);
    }
    ja(e, 134217728);
  }
};
mh = function(e) {
  if (e.tag === 13) {
    var t = an(e), n = bt(e, t);
    if (n !== null) {
      var r = Ae();
      mt(n, e, t, r);
    }
    ja(e, t);
  }
};
yh = function() {
  return se;
};
vh = function(e, t) {
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
            Qd(r), Bl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Zd(e, n);
      break;
    case "select":
      t = n.value, t != null && rr(e, !!n.multiple, t, !1);
  }
};
oh = Ta;
ih = Ln;
var xx = { usingClientEntryPoint: !1, Events: [Fo, Kn, Ns, nh, rh, Ta] }, Hr = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wx = { bundleType: Hr.bundleType, version: Hr.version, rendererPackageName: Hr.rendererPackageName, rendererConfig: Hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = uh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Hr.findFiberByHostInstance || yx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hi.isDisabled && hi.supportsFiber) try {
    _s = hi.inject(wx), kt = hi;
  } catch {
  }
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xx;
Ge.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$a(t)) throw Error(H(200));
  return mx(e, t, null, n);
};
Ge.createRoot = function(e, t) {
  if (!$a(e)) throw Error(H(299));
  var n = !1, r = "", o = bp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = La(e, 1, !1, null, null, n, !1, r, o), e[Ft] = t.current, vo(e.nodeType === 8 ? e.parentNode : e), new Aa(t);
};
Ge.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
  return e = uh(t), e = e === null ? null : e.stateNode, e;
};
Ge.flushSync = function(e) {
  return Ln(e);
};
Ge.hydrate = function(e, t, n) {
  if (!As(t)) throw Error(H(200));
  return $s(null, e, t, !0, n);
};
Ge.hydrateRoot = function(e, t, n) {
  if (!$a(e)) throw Error(H(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = bp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Fp(t, null, e, 1, n ?? null, o, !1, i, s), e[Ft] = t.current, vo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new js(t);
};
Ge.render = function(e, t, n) {
  if (!As(t)) throw Error(H(200));
  return $s(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function(e) {
  if (!As(e)) throw Error(H(40));
  return e._reactRootContainer ? (Ln(function() {
    $s(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
Ge.unstable_batchedUpdates = Ta;
Ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!As(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return $s(e, t, n, !1, r);
};
Ge.version = "18.3.1-next-f1338f8080-20240426";
function Hp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp);
    } catch (e) {
      console.error(e);
    }
}
Hp(), Hd.exports = Ge;
var Bp = Hd.exports, Vp, wf = Bp;
Vp = wf.createRoot, wf.hydrateRoot;
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
var Sx = { value: () => {
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
function _x(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ai.prototype = Rs.prototype = {
  constructor: Ai,
  on: function(e, t) {
    var n = this._, r = _x(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = kx(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Sf(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Sf(n[o], e.name, null);
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
function kx(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Sf(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Sx, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Pu = "http://www.w3.org/1999/xhtml";
const _f = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pu,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Os(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), _f.hasOwnProperty(t) ? { space: _f[t], local: e } : e;
}
function Ex(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Pu && t.documentElement.namespaceURI === Pu ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Cx(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Up(e) {
  var t = Os(e);
  return (t.local ? Cx : Ex)(t);
}
function Nx() {
}
function Ra(e) {
  return e == null ? Nx : function() {
    return this.querySelector(e);
  };
}
function Mx(e) {
  typeof e != "function" && (e = Ra(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = new Array(s), u, a, d = 0; d < s; ++d)
      (u = i[d]) && (a = e.call(u, u.__data__, d, i)) && ("__data__" in u && (a.__data__ = u.__data__), l[d] = a);
  return new Qe(r, this._parents);
}
function Px(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Tx() {
  return [];
}
function Wp(e) {
  return e == null ? Tx : function() {
    return this.querySelectorAll(e);
  };
}
function Dx(e) {
  return function() {
    return Px(e.apply(this, arguments));
  };
}
function zx(e) {
  typeof e == "function" ? e = Dx(e) : e = Wp(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], l = s.length, u, a = 0; a < l; ++a)
      (u = s[a]) && (r.push(e.call(u, u.__data__, a, s)), o.push(u));
  return new Qe(r, o);
}
function Yp(e) {
  return function() {
    return this.matches(e);
  };
}
function Xp(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Ix = Array.prototype.find;
function Lx(e) {
  return function() {
    return Ix.call(this.children, e);
  };
}
function jx() {
  return this.firstElementChild;
}
function Ax(e) {
  return this.select(e == null ? jx : Lx(typeof e == "function" ? e : Xp(e)));
}
var $x = Array.prototype.filter;
function Rx() {
  return Array.from(this.children);
}
function Ox(e) {
  return function() {
    return $x.call(this.children, e);
  };
}
function Fx(e) {
  return this.selectAll(e == null ? Rx : Ox(typeof e == "function" ? e : Xp(e)));
}
function bx(e) {
  typeof e != "function" && (e = Yp(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], u, a = 0; a < s; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && l.push(u);
  return new Qe(r, this._parents);
}
function Kp(e) {
  return new Array(e.length);
}
function Hx() {
  return new Qe(this._enter || this._groups.map(Kp), this._parents);
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
function Bx(e) {
  return function() {
    return e;
  };
}
function Vx(e, t, n, r, o, i) {
  for (var s = 0, l, u = t.length, a = i.length; s < a; ++s)
    (l = t[s]) ? (l.__data__ = i[s], r[s] = l) : n[s] = new cs(e, i[s]);
  for (; s < u; ++s)
    (l = t[s]) && (o[s] = l);
}
function Ux(e, t, n, r, o, i, s) {
  var l, u, a = /* @__PURE__ */ new Map(), d = t.length, c = i.length, f = new Array(d), m;
  for (l = 0; l < d; ++l)
    (u = t[l]) && (f[l] = m = s.call(u, u.__data__, l, t) + "", a.has(m) ? o[l] = u : a.set(m, u));
  for (l = 0; l < c; ++l)
    m = s.call(e, i[l], l, i) + "", (u = a.get(m)) ? (r[l] = u, u.__data__ = i[l], a.delete(m)) : n[l] = new cs(e, i[l]);
  for (l = 0; l < d; ++l)
    (u = t[l]) && a.get(f[l]) === u && (o[l] = u);
}
function Wx(e) {
  return e.__data__;
}
function Yx(e, t) {
  if (!arguments.length) return Array.from(this, Wx);
  var n = t ? Ux : Vx, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Bx(e));
  for (var i = o.length, s = new Array(i), l = new Array(i), u = new Array(i), a = 0; a < i; ++a) {
    var d = r[a], c = o[a], f = c.length, m = Xx(e.call(d, d && d.__data__, a, r)), y = m.length, x = l[a] = new Array(y), S = s[a] = new Array(y), p = u[a] = new Array(f);
    n(d, c, x, S, p, m, t);
    for (var g = 0, h = 0, v, _; g < y; ++g)
      if (v = x[g]) {
        for (g >= h && (h = g + 1); !(_ = S[h]) && ++h < y; ) ;
        v._next = _ || null;
      }
  }
  return s = new Qe(s, r), s._enter = l, s._exit = u, s;
}
function Xx(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Kx() {
  return new Qe(this._exit || this._groups.map(Kp), this._parents);
}
function Qx(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Gx(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), l = new Array(o), u = 0; u < s; ++u)
    for (var a = n[u], d = r[u], c = a.length, f = l[u] = new Array(c), m, y = 0; y < c; ++y)
      (m = a[y] || d[y]) && (f[y] = m);
  for (; u < o; ++u)
    l[u] = n[u];
  return new Qe(l, this._parents);
}
function Zx() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function qx(e) {
  e || (e = Jx);
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
function Jx(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ew() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function tw() {
  return Array.from(this);
}
function nw() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function rw() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function ow() {
  return !this.node();
}
function iw(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, l; i < s; ++i)
      (l = o[i]) && e.call(l, l.__data__, i, o);
  return this;
}
function sw(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function lw(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function uw(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function aw(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function cw(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function fw(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function dw(e, t) {
  var n = Os(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? lw : sw : typeof t == "function" ? n.local ? fw : cw : n.local ? aw : uw)(n, t));
}
function Qp(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function hw(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function pw(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function gw(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function mw(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? hw : typeof t == "function" ? gw : pw)(e, t, n ?? "")) : vr(this.node(), e);
}
function vr(e, t) {
  return e.style.getPropertyValue(t) || Qp(e).getComputedStyle(e, null).getPropertyValue(t);
}
function yw(e) {
  return function() {
    delete this[e];
  };
}
function vw(e, t) {
  return function() {
    this[e] = t;
  };
}
function xw(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function ww(e, t) {
  return arguments.length > 1 ? this.each((t == null ? yw : typeof t == "function" ? xw : vw)(e, t)) : this.node()[e];
}
function Gp(e) {
  return e.trim().split(/^|\s+/);
}
function Oa(e) {
  return e.classList || new Zp(e);
}
function Zp(e) {
  this._node = e, this._names = Gp(e.getAttribute("class") || "");
}
Zp.prototype = {
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
function qp(e, t) {
  for (var n = Oa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Jp(e, t) {
  for (var n = Oa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Sw(e) {
  return function() {
    qp(this, e);
  };
}
function _w(e) {
  return function() {
    Jp(this, e);
  };
}
function kw(e, t) {
  return function() {
    (t.apply(this, arguments) ? qp : Jp)(this, e);
  };
}
function Ew(e, t) {
  var n = Gp(e + "");
  if (arguments.length < 2) {
    for (var r = Oa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? kw : t ? Sw : _w)(n, t));
}
function Cw() {
  this.textContent = "";
}
function Nw(e) {
  return function() {
    this.textContent = e;
  };
}
function Mw(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Pw(e) {
  return arguments.length ? this.each(e == null ? Cw : (typeof e == "function" ? Mw : Nw)(e)) : this.node().textContent;
}
function Tw() {
  this.innerHTML = "";
}
function Dw(e) {
  return function() {
    this.innerHTML = e;
  };
}
function zw(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Iw(e) {
  return arguments.length ? this.each(e == null ? Tw : (typeof e == "function" ? zw : Dw)(e)) : this.node().innerHTML;
}
function Lw() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function jw() {
  return this.each(Lw);
}
function Aw() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $w() {
  return this.each(Aw);
}
function Rw(e) {
  var t = typeof e == "function" ? e : Up(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ow() {
  return null;
}
function Fw(e, t) {
  var n = typeof e == "function" ? e : Up(e), r = t == null ? Ow : typeof t == "function" ? t : Ra(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function bw() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Hw() {
  return this.each(bw);
}
function Bw() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vw() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Uw(e) {
  return this.select(e ? Vw : Bw);
}
function Ww(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Yw(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Xw(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Kw(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Qw(e, t, n) {
  return function() {
    var r = this.__on, o, i = Yw(t);
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
function Gw(e, t, n) {
  var r = Xw(e + ""), o, i = r.length, s;
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
  for (l = t ? Qw : Kw, o = 0; o < i; ++o) this.each(l(r[o], t, n));
  return this;
}
function eg(e, t, n) {
  var r = Qp(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Zw(e, t) {
  return function() {
    return eg(this, e, t);
  };
}
function qw(e, t) {
  return function() {
    return eg(this, e, t.apply(this, arguments));
  };
}
function Jw(e, t) {
  return this.each((typeof t == "function" ? qw : Zw)(e, t));
}
function* e1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var tg = [null];
function Qe(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new Qe([[document.documentElement]], tg);
}
function t1() {
  return this;
}
Qe.prototype = Ho.prototype = {
  constructor: Qe,
  select: Mx,
  selectAll: zx,
  selectChild: Ax,
  selectChildren: Fx,
  filter: bx,
  data: Yx,
  enter: Hx,
  exit: Kx,
  join: Qx,
  merge: Gx,
  selection: t1,
  order: Zx,
  sort: qx,
  call: ew,
  nodes: tw,
  node: nw,
  size: rw,
  empty: ow,
  each: iw,
  attr: dw,
  style: mw,
  property: ww,
  classed: Ew,
  text: Pw,
  html: Iw,
  raise: jw,
  lower: $w,
  append: Rw,
  insert: Fw,
  remove: Hw,
  clone: Uw,
  datum: Ww,
  on: Gw,
  dispatch: Jw,
  [Symbol.iterator]: e1
};
function We(e) {
  return typeof e == "string" ? new Qe([[document.querySelector(e)]], [document.documentElement]) : new Qe([[e]], tg);
}
function n1(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function ct(e, t) {
  if (e = n1(e), t === void 0 && (t = e.currentTarget), t) {
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
const r1 = { passive: !1 }, Mo = { capture: !0, passive: !1 };
function El(e) {
  e.stopImmediatePropagation();
}
function ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ng(e) {
  var t = e.document.documentElement, n = We(e).on("dragstart.drag", ar, Mo);
  "onselectstart" in t ? n.on("selectstart.drag", ar, Mo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function rg(e, t) {
  var n = e.document.documentElement, r = We(e).on("dragstart.drag", null);
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
function o1(e) {
  return !e.ctrlKey && !e.button;
}
function i1() {
  return this.parentNode;
}
function s1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function l1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function og() {
  var e = o1, t = i1, n = s1, r = l1, o = {}, i = Rs("start", "drag", "end"), s = 0, l, u, a, d, c = 0;
  function f(v) {
    v.on("mousedown.drag", m).filter(r).on("touchstart.drag", S).on("touchmove.drag", p, r1).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function m(v, _) {
    if (!(d || !e.call(this, v, _))) {
      var k = h(this, t.call(this, v, _), v, _, "mouse");
      k && (We(v.view).on("mousemove.drag", y, Mo).on("mouseup.drag", x, Mo), ng(v.view), El(v), a = !1, l = v.clientX, u = v.clientY, k("start", v));
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
    We(v.view).on("mousemove.drag mouseup.drag", null), rg(v.view, a), ar(v), o.mouse("end", v);
  }
  function S(v, _) {
    if (e.call(this, v, _)) {
      var k = v.changedTouches, E = t.call(this, v, _), T = k.length, z, R;
      for (z = 0; z < T; ++z)
        (R = h(this, E, v, _, k[z].identifier, k[z])) && (El(v), R("start", v, k[z]));
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
  function h(v, _, k, E, T, z) {
    var R = i.copy(), I = ct(z || k, _), j, b, M;
    if ((M = n.call(v, new Tu("beforestart", {
      sourceEvent: k,
      target: f,
      identifier: T,
      active: s,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: R
    }), E)) != null)
      return j = M.x - I[0] || 0, b = M.y - I[1] || 0, function A(D, $, C) {
        var P = I, L;
        switch (D) {
          case "start":
            o[T] = A, L = s++;
            break;
          case "end":
            delete o[T], --s;
          case "drag":
            I = ct(C || $, _), L = s;
            break;
        }
        R.call(
          D,
          v,
          new Tu(D, {
            sourceEvent: $,
            subject: M,
            target: f,
            identifier: T,
            active: L,
            x: I[0] + j,
            y: I[1] + b,
            dx: I[0] - P[0],
            dy: I[1] - P[1],
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
function Fa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ig(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Bo() {
}
var Po = 0.7, fs = 1 / Po, cr = "\\s*([+-]?\\d+)\\s*", To = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", u1 = /^#([0-9a-f]{3,8})$/, a1 = new RegExp(`^rgb\\(${cr},${cr},${cr}\\)$`), c1 = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), f1 = new RegExp(`^rgba\\(${cr},${cr},${cr},${To}\\)$`), d1 = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${To}\\)$`), h1 = new RegExp(`^hsl\\(${To},${Ct},${Ct}\\)$`), p1 = new RegExp(`^hsla\\(${To},${Ct},${Ct},${To}\\)$`), kf = {
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
Fa(Bo, jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ef,
  // Deprecated! Use color.formatHex.
  formatHex: Ef,
  formatHex8: g1,
  formatHsl: m1,
  formatRgb: Cf,
  toString: Cf
});
function Ef() {
  return this.rgb().formatHex();
}
function g1() {
  return this.rgb().formatHex8();
}
function m1() {
  return sg(this).formatHsl();
}
function Cf() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = u1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Nf(t) : n === 3 ? new be(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = a1.exec(e)) ? new be(t[1], t[2], t[3], 1) : (t = c1.exec(e)) ? new be(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = f1.exec(e)) ? gi(t[1], t[2], t[3], t[4]) : (t = d1.exec(e)) ? gi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = h1.exec(e)) ? Tf(t[1], t[2] / 100, t[3] / 100, 1) : (t = p1.exec(e)) ? Tf(t[1], t[2] / 100, t[3] / 100, t[4]) : kf.hasOwnProperty(e) ? Nf(kf[e]) : e === "transparent" ? new be(NaN, NaN, NaN, 0) : null;
}
function Nf(e) {
  return new be(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new be(e, t, n, r);
}
function y1(e) {
  return e instanceof Bo || (e = jn(e)), e ? (e = e.rgb(), new be(e.r, e.g, e.b, e.opacity)) : new be();
}
function Du(e, t, n, r) {
  return arguments.length === 1 ? y1(e) : new be(e, t, n, r ?? 1);
}
function be(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Fa(be, Du, ig(Bo, {
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
  hex: Mf,
  // Deprecated! Use color.formatHex.
  formatHex: Mf,
  formatHex8: v1,
  formatRgb: Pf,
  toString: Pf
}));
function Mf() {
  return `#${En(this.r)}${En(this.g)}${En(this.b)}`;
}
function v1() {
  return `#${En(this.r)}${En(this.g)}${En(this.b)}${En((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pf() {
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
function Tf(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dt(e, t, n, r);
}
function sg(e) {
  if (e instanceof dt) return new dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Bo || (e = jn(e)), !e) return new dt();
  if (e instanceof dt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, l = i - o, u = (i + o) / 2;
  return l ? (t === i ? s = (n - r) / l + (n < r) * 6 : n === i ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= u < 0.5 ? i + o : 2 - i - o, s *= 60) : l = u > 0 && u < 1 ? 0 : s, new dt(s, l, u, e.opacity);
}
function x1(e, t, n, r) {
  return arguments.length === 1 ? sg(e) : new dt(e, t, n, r ?? 1);
}
function dt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Fa(dt, x1, ig(Bo, {
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
    return new dt(Df(this.h), mi(this.s), mi(this.l), ds(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ds(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Df(this.h)}, ${mi(this.s) * 100}%, ${mi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Df(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function mi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Cl(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ba = (e) => () => e;
function w1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function S1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function _1(e) {
  return (e = +e) == 1 ? lg : function(t, n) {
    return n - t ? S1(t, n, e) : ba(isNaN(t) ? n : t);
  };
}
function lg(e, t) {
  var n = t - e;
  return n ? w1(e, n) : ba(isNaN(e) ? t : e);
}
const hs = function e(t) {
  var n = _1(t);
  function r(o, i) {
    var s = n((o = Du(o)).r, (i = Du(i)).r), l = n(o.g, i.g), u = n(o.b, i.b), a = lg(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = l(d), o.b = u(d), o.opacity = a(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function k1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function E1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function C1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = so(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(l) {
    for (s = 0; s < r; ++s) i[s] = o[s](l);
    return i;
  };
}
function N1(e, t) {
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
function M1(e, t) {
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
function P1(e) {
  return function() {
    return e;
  };
}
function T1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ug(e, t) {
  var n = zu.lastIndex = Nl.lastIndex = 0, r, o, i, s = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = zu.exec(e)) && (o = Nl.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), l[s] ? l[s] += i : l[++s] = i), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, u.push({ i: s, x: St(r, o) })), n = Nl.lastIndex;
  return n < t.length && (i = t.slice(n), l[s] ? l[s] += i : l[++s] = i), l.length < 2 ? u[0] ? T1(u[0].x) : P1(t) : (t = u.length, function(a) {
    for (var d = 0, c; d < t; ++d) l[(c = u[d]).i] = c.x(a);
    return l.join("");
  });
}
function so(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ba(t) : (n === "number" ? St : n === "string" ? (r = jn(t)) ? (t = r, hs) : ug : t instanceof jn ? hs : t instanceof Date ? N1 : E1(t) ? k1 : Array.isArray(t) ? C1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? M1 : St)(e, t);
}
var zf = 180 / Math.PI, Iu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ag(e, t, n, r, o, i) {
  var s, l, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * r) && (n -= e * u, r -= t * u), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, u /= l), e * r < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * zf,
    skewX: Math.atan(u) * zf,
    scaleX: s,
    scaleY: l
  };
}
var yi;
function D1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Iu : ag(t.a, t.b, t.c, t.d, t.e, t.f);
}
function z1(e) {
  return e == null || (yi || (yi = document.createElementNS("http://www.w3.org/2000/svg", "g")), yi.setAttribute("transform", e), !(e = yi.transform.baseVal.consolidate())) ? Iu : (e = e.matrix, ag(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cg(e, t, n, r) {
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
var I1 = cg(D1, "px, ", "px)", "deg)"), L1 = cg(z1, ", ", ")", ")"), j1 = 1e-12;
function If(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function A1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function $1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const $i = function e(t, n, r) {
  function o(i, s) {
    var l = i[0], u = i[1], a = i[2], d = s[0], c = s[1], f = s[2], m = d - l, y = c - u, x = m * m + y * y, S, p;
    if (x < j1)
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
        var T = E * p, z = If(_), R = a / (n * g) * (z * $1(t * T + _) - A1(_));
        return [
          l + R * m,
          u + R * y,
          a * z / If(t * T + _)
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
var xr = 0, Qr = 0, Br = 0, fg = 1e3, ps, Gr, gs = 0, An = 0, Fs = 0, Do = typeof performance == "object" && performance.now ? performance : Date, dg = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ha() {
  return An || (dg(R1), An = Do.now() + Fs);
}
function R1() {
  An = 0;
}
function ms() {
  this._call = this._time = this._next = null;
}
ms.prototype = hg.prototype = {
  constructor: ms,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ha() : +n) + (t == null ? 0 : +t), !this._next && Gr !== this && (Gr ? Gr._next = this : ps = this, Gr = this), this._call = e, this._time = n, Lu();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Lu());
  }
};
function hg(e, t, n) {
  var r = new ms();
  return r.restart(e, t, n), r;
}
function O1() {
  Ha(), ++xr;
  for (var e = ps, t; e; )
    (t = An - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --xr;
}
function Lf() {
  An = (gs = Do.now()) + Fs, xr = Qr = 0;
  try {
    O1();
  } finally {
    xr = 0, b1(), An = 0;
  }
}
function F1() {
  var e = Do.now(), t = e - gs;
  t > fg && (Fs -= t, gs = e);
}
function b1() {
  for (var e, t = ps, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ps = n);
  Gr = e, Lu(r);
}
function Lu(e) {
  if (!xr) {
    Qr && (Qr = clearTimeout(Qr));
    var t = e - An;
    t > 24 ? (e < 1 / 0 && (Qr = setTimeout(Lf, e - Do.now() - Fs)), Br && (Br = clearInterval(Br))) : (Br || (gs = Do.now(), Br = setInterval(F1, fg)), xr = 1, dg(Lf));
  }
}
function jf(e, t, n) {
  var r = new ms();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var H1 = Rs("start", "end", "cancel", "interrupt"), B1 = [], pg = 0, Af = 1, ju = 2, Ri = 3, $f = 4, Au = 5, Oi = 6;
function bs(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  V1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: H1,
    tween: B1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: pg
  });
}
function Ba(e, t) {
  var n = vt(e, t);
  if (n.state > pg) throw new Error("too late; already scheduled");
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
function V1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = hg(i, 0, n.time);
  function i(a) {
    n.state = Af, n.timer.restart(s, n.delay, n.time), n.delay <= a && s(a - n.delay);
  }
  function s(a) {
    var d, c, f, m;
    if (n.state !== Af) return u();
    for (d in r)
      if (m = r[d], m.name === n.name) {
        if (m.state === Ri) return jf(s);
        m.state === $f ? (m.state = Oi, m.timer.stop(), m.on.call("interrupt", e, e.__data__, m.index, m.group), delete r[d]) : +d < t && (m.state = Oi, m.timer.stop(), m.on.call("cancel", e, e.__data__, m.index, m.group), delete r[d]);
      }
    if (jf(function() {
      n.state === Ri && (n.state = $f, n.timer.restart(l, n.delay, n.time), l(a));
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
function U1(e) {
  return this.each(function() {
    Fi(this, e);
  });
}
function W1(e, t) {
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
function Y1(e, t, n) {
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
function X1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = vt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? W1 : Y1)(n, e, t));
}
function Va(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Mt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return vt(o, r).value[t];
  };
}
function gg(e, t) {
  var n;
  return (typeof t == "number" ? St : t instanceof jn ? hs : (n = jn(t)) ? (t = n, hs) : ug)(e, t);
}
function K1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Q1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function G1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Z1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function q1(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), u;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = l + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l)));
  };
}
function J1(e, t, n) {
  var r, o, i;
  return function() {
    var s, l = n(this), u;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = l + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l)));
  };
}
function eS(e, t) {
  var n = Os(e), r = n === "transform" ? L1 : gg;
  return this.attrTween(e, typeof t == "function" ? (n.local ? J1 : q1)(n, r, Va(this, "attr." + e, t)) : t == null ? (n.local ? Q1 : K1)(n) : (n.local ? Z1 : G1)(n, r, t));
}
function tS(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function nS(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function rS(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && nS(e, i)), n;
  }
  return o._value = t, o;
}
function oS(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && tS(e, i)), n;
  }
  return o._value = t, o;
}
function iS(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Os(e);
  return this.tween(n, (r.local ? rS : oS)(r, t));
}
function sS(e, t) {
  return function() {
    Ba(this, e).delay = +t.apply(this, arguments);
  };
}
function lS(e, t) {
  return t = +t, function() {
    Ba(this, e).delay = t;
  };
}
function uS(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? sS : lS)(t, e)) : vt(this.node(), t).delay;
}
function aS(e, t) {
  return function() {
    Mt(this, e).duration = +t.apply(this, arguments);
  };
}
function cS(e, t) {
  return t = +t, function() {
    Mt(this, e).duration = t;
  };
}
function fS(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? aS : cS)(t, e)) : vt(this.node(), t).duration;
}
function dS(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mt(this, e).ease = t;
  };
}
function hS(e) {
  var t = this._id;
  return arguments.length ? this.each(dS(t, e)) : vt(this.node(), t).ease;
}
function pS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Mt(this, e).ease = n;
  };
}
function gS(e) {
  if (typeof e != "function") throw new Error();
  return this.each(pS(this._id, e));
}
function mS(e) {
  typeof e != "function" && (e = Yp(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = r[o] = [], u, a = 0; a < s; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && l.push(u);
  return new Bt(r, this._parents, this._name, this._id);
}
function yS(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), l = 0; l < i; ++l)
    for (var u = t[l], a = n[l], d = u.length, c = s[l] = new Array(d), f, m = 0; m < d; ++m)
      (f = u[m] || a[m]) && (c[m] = f);
  for (; l < r; ++l)
    s[l] = t[l];
  return new Bt(s, this._parents, this._name, this._id);
}
function vS(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function xS(e, t, n) {
  var r, o, i = vS(t) ? Ba : Mt;
  return function() {
    var s = i(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function wS(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vt(this.node(), n).on.on(e) : this.each(xS(n, e, t));
}
function SS(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function _S() {
  return this.on("end.remove", SS(this._id));
}
function kS(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ra(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, a = i[s] = new Array(u), d, c, f = 0; f < u; ++f)
      (d = l[f]) && (c = e.call(d, d.__data__, f, l)) && ("__data__" in d && (c.__data__ = d.__data__), a[f] = c, bs(a[f], t, n, f, a, vt(d, n)));
  return new Bt(i, this._parents, t, n);
}
function ES(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Wp(e));
  for (var r = this._groups, o = r.length, i = [], s = [], l = 0; l < o; ++l)
    for (var u = r[l], a = u.length, d, c = 0; c < a; ++c)
      if (d = u[c]) {
        for (var f = e.call(d, d.__data__, c, u), m, y = vt(d, n), x = 0, S = f.length; x < S; ++x)
          (m = f[x]) && bs(m, t, n, x, f, y);
        i.push(f), s.push(d);
      }
  return new Bt(i, s, t, n);
}
var CS = Ho.prototype.constructor;
function NS() {
  return new CS(this._groups, this._parents);
}
function MS(e, t) {
  var n, r, o;
  return function() {
    var i = vr(this, e), s = (this.style.removeProperty(e), vr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function mg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function PS(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = vr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function TS(e, t, n) {
  var r, o, i;
  return function() {
    var s = vr(this, e), l = n(this), u = l + "";
    return l == null && (u = l = (this.style.removeProperty(e), vr(this, e))), s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, l));
  };
}
function DS(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, l;
  return function() {
    var u = Mt(this, e), a = u.on, d = u.value[i] == null ? l || (l = mg(t)) : void 0;
    (a !== n || o !== d) && (r = (n = a).copy()).on(s, o = d), u.on = r;
  };
}
function zS(e, t, n) {
  var r = (e += "") == "transform" ? I1 : gg;
  return t == null ? this.styleTween(e, MS(e, r)).on("end.style." + e, mg(e)) : typeof t == "function" ? this.styleTween(e, TS(e, r, Va(this, "style." + e, t))).each(DS(this._id, e)) : this.styleTween(e, PS(e, r, t), n).on("end.style." + e, null);
}
function IS(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function LS(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && IS(e, s, n)), r;
  }
  return i._value = t, i;
}
function jS(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, LS(e, t, n ?? ""));
}
function AS(e) {
  return function() {
    this.textContent = e;
  };
}
function $S(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function RS(e) {
  return this.tween("text", typeof e == "function" ? $S(Va(this, "text", e)) : AS(e == null ? "" : e + ""));
}
function OS(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function FS(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && OS(o)), t;
  }
  return r._value = e, r;
}
function bS(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, FS(e));
}
function HS() {
  for (var e = this._name, t = this._id, n = yg(), r = this._groups, o = r.length, i = 0; i < o; ++i)
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
function BS() {
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
var VS = 0;
function Bt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function yg() {
  return ++VS;
}
var Tt = Ho.prototype;
Bt.prototype = {
  constructor: Bt,
  select: kS,
  selectAll: ES,
  selectChild: Tt.selectChild,
  selectChildren: Tt.selectChildren,
  filter: mS,
  merge: yS,
  selection: NS,
  transition: HS,
  call: Tt.call,
  nodes: Tt.nodes,
  node: Tt.node,
  size: Tt.size,
  empty: Tt.empty,
  each: Tt.each,
  on: wS,
  attr: eS,
  attrTween: iS,
  style: zS,
  styleTween: jS,
  text: RS,
  textTween: bS,
  remove: _S,
  tween: X1,
  delay: uS,
  duration: fS,
  ease: hS,
  easeVarying: gS,
  end: BS,
  [Symbol.iterator]: Tt[Symbol.iterator]
};
function US(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var WS = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: US
};
function YS(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function XS(e) {
  var t, n;
  e instanceof Bt ? (t = e._id, e = e._name) : (t = yg(), (n = WS).time = Ha(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u, a = 0; a < l; ++a)
      (u = s[a]) && bs(u, e, t, a, s, n || YS(u, t));
  return new Bt(r, this._parents, e, t);
}
Ho.prototype.interrupt = U1;
Ho.prototype.transition = XS;
const vi = (e) => () => e;
function KS(e, {
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
vg.prototype = At.prototype;
function vg(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Hs;
  return e.__zoom;
}
function Ml(e) {
  e.stopImmediatePropagation();
}
function Vr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function QS(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function GS() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Rf() {
  return this.__zoom || Hs;
}
function ZS(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function qS() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function JS(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function xg() {
  var e = QS, t = GS, n = JS, r = ZS, o = qS, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, u = $i, a = Rs("start", "zoom", "end"), d, c, f, m = 500, y = 150, x = 0, S = 10;
  function p(M) {
    M.property("__zoom", Rf).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", R).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", j).on("touchend.zoom touchcancel.zoom", b).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(M, A, D, $) {
    var C = M.selection ? M.selection() : M;
    C.property("__zoom", Rf), M !== C ? _(M, A, D, $) : C.interrupt().each(function() {
      k(this, arguments).event($).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, p.scaleBy = function(M, A, D, $) {
    p.scaleTo(M, function() {
      var C = this.__zoom.k, P = typeof A == "function" ? A.apply(this, arguments) : A;
      return C * P;
    }, D, $);
  }, p.scaleTo = function(M, A, D, $) {
    p.transform(M, function() {
      var C = t.apply(this, arguments), P = this.__zoom, L = D == null ? v(C) : typeof D == "function" ? D.apply(this, arguments) : D, F = P.invert(L), O = typeof A == "function" ? A.apply(this, arguments) : A;
      return n(h(g(P, O), L, F), C, s);
    }, D, $);
  }, p.translateBy = function(M, A, D, $) {
    p.transform(M, function() {
      return n(this.__zoom.translate(
        typeof A == "function" ? A.apply(this, arguments) : A,
        typeof D == "function" ? D.apply(this, arguments) : D
      ), t.apply(this, arguments), s);
    }, null, $);
  }, p.translateTo = function(M, A, D, $, C) {
    p.transform(M, function() {
      var P = t.apply(this, arguments), L = this.__zoom, F = $ == null ? v(P) : typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(Hs.translate(F[0], F[1]).scale(L.k).translate(
        typeof A == "function" ? -A.apply(this, arguments) : -A,
        typeof D == "function" ? -D.apply(this, arguments) : -D
      ), P, s);
    }, $, C);
  };
  function g(M, A) {
    return A = Math.max(i[0], Math.min(i[1], A)), A === M.k ? M : new At(A, M.x, M.y);
  }
  function h(M, A, D) {
    var $ = A[0] - D[0] * M.k, C = A[1] - D[1] * M.k;
    return $ === M.x && C === M.y ? M : new At(M.k, $, C);
  }
  function v(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function _(M, A, D, $) {
    M.on("start.zoom", function() {
      k(this, arguments).event($).start();
    }).on("interrupt.zoom end.zoom", function() {
      k(this, arguments).event($).end();
    }).tween("zoom", function() {
      var C = this, P = arguments, L = k(C, P).event($), F = t.apply(C, P), O = D == null ? v(F) : typeof D == "function" ? D.apply(C, P) : D, U = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), V = C.__zoom, Y = typeof A == "function" ? A.apply(C, P) : A, X = u(V.invert(O).concat(U / V.k), Y.invert(O).concat(U / Y.k));
      return function(Q) {
        if (Q === 1) Q = Y;
        else {
          var B = X(Q), G = U / B[2];
          Q = new At(G, O[0] - B[0] * G, O[1] - B[1] * G);
        }
        L.zoom(null, Q);
      };
    });
  }
  function k(M, A, D) {
    return !D && M.__zooming || new E(M, A);
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
      var A = We(this.that).datum();
      a.call(
        M,
        this.that,
        new KS(M, {
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
    var D = k(this, A).event(M), $ = this.__zoom, C = Math.max(i[0], Math.min(i[1], $.k * Math.pow(2, r.apply(this, arguments)))), P = ct(M);
    if (D.wheel)
      (D.mouse[0][0] !== P[0] || D.mouse[0][1] !== P[1]) && (D.mouse[1] = $.invert(D.mouse[0] = P)), clearTimeout(D.wheel);
    else {
      if ($.k === C) return;
      D.mouse = [P, $.invert(P)], Fi(this), D.start();
    }
    Vr(M), D.wheel = setTimeout(L, y), D.zoom("mouse", n(h(g($, C), D.mouse[0], D.mouse[1]), D.extent, s));
    function L() {
      D.wheel = null, D.end();
    }
  }
  function z(M, ...A) {
    if (f || !e.apply(this, arguments)) return;
    var D = M.currentTarget, $ = k(this, A, !0).event(M), C = We(M.view).on("mousemove.zoom", O, !0).on("mouseup.zoom", U, !0), P = ct(M, D), L = M.clientX, F = M.clientY;
    ng(M.view), Ml(M), $.mouse = [P, this.__zoom.invert(P)], Fi(this), $.start();
    function O(V) {
      if (Vr(V), !$.moved) {
        var Y = V.clientX - L, X = V.clientY - F;
        $.moved = Y * Y + X * X > x;
      }
      $.event(V).zoom("mouse", n(h($.that.__zoom, $.mouse[0] = ct(V, D), $.mouse[1]), $.extent, s));
    }
    function U(V) {
      C.on("mousemove.zoom mouseup.zoom", null), rg(V.view, $.moved), Vr(V), $.event(V).end();
    }
  }
  function R(M, ...A) {
    if (e.apply(this, arguments)) {
      var D = this.__zoom, $ = ct(M.changedTouches ? M.changedTouches[0] : M, this), C = D.invert($), P = D.k * (M.shiftKey ? 0.5 : 2), L = n(h(g(D, P), $, C), t.apply(this, A), s);
      Vr(M), l > 0 ? We(this).transition().duration(l).call(_, L, $, M) : We(this).call(p.transform, L, $, M);
    }
  }
  function I(M, ...A) {
    if (e.apply(this, arguments)) {
      var D = M.touches, $ = D.length, C = k(this, A, M.changedTouches.length === $).event(M), P, L, F, O;
      for (Ml(M), L = 0; L < $; ++L)
        F = D[L], O = ct(F, this), O = [O, this.__zoom.invert(O), F.identifier], C.touch0 ? !C.touch1 && C.touch0[2] !== O[2] && (C.touch1 = O, C.taps = 0) : (C.touch0 = O, P = !0, C.taps = 1 + !!d);
      d && (d = clearTimeout(d)), P && (C.taps < 2 && (c = O[0], d = setTimeout(function() {
        d = null;
      }, m)), Fi(this), C.start());
    }
  }
  function j(M, ...A) {
    if (this.__zooming) {
      var D = k(this, A).event(M), $ = M.changedTouches, C = $.length, P, L, F, O;
      for (Vr(M), P = 0; P < C; ++P)
        L = $[P], F = ct(L, this), D.touch0 && D.touch0[2] === L.identifier ? D.touch0[0] = F : D.touch1 && D.touch1[2] === L.identifier && (D.touch1[0] = F);
      if (L = D.that.__zoom, D.touch1) {
        var U = D.touch0[0], V = D.touch0[1], Y = D.touch1[0], X = D.touch1[1], Q = (Q = Y[0] - U[0]) * Q + (Q = Y[1] - U[1]) * Q, B = (B = X[0] - V[0]) * B + (B = X[1] - V[1]) * B;
        L = g(L, Math.sqrt(Q / B)), F = [(U[0] + Y[0]) / 2, (U[1] + Y[1]) / 2], O = [(V[0] + X[0]) / 2, (V[1] + X[1]) / 2];
      } else if (D.touch0) F = D.touch0[0], O = D.touch0[1];
      else return;
      D.zoom("touch", n(h(L, F, O), D.extent, s));
    }
  }
  function b(M, ...A) {
    if (this.__zooming) {
      var D = k(this, A).event(M), $ = M.changedTouches, C = $.length, P, L;
      for (Ml(M), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, m), P = 0; P < C; ++P)
        L = $[P], D.touch0 && D.touch0[2] === L.identifier ? delete D.touch0 : D.touch1 && D.touch1[2] === L.identifier && delete D.touch1;
      if (D.touch1 && !D.touch0 && (D.touch0 = D.touch1, delete D.touch1), D.touch0) D.touch0[1] = this.__zoom.invert(D.touch0[0]);
      else if (D.end(), D.taps === 2 && (L = ct(L, this), Math.hypot(c[0] - L[0], c[1] - L[1]) < S)) {
        var F = We(this).on("dblclick.zoom");
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
], wg = ["Enter", " ", "Escape"], Sg = {
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
const _g = {
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
var ys;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ys || (ys = {}));
var K;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(K || (K = {}));
const Of = {
  [K.Left]: K.Right,
  [K.Right]: K.Left,
  [K.Top]: K.Bottom,
  [K.Bottom]: K.Top
};
function kg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Eg = (e) => "id" in e && "source" in e && "target" in e, e_ = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ua = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Vo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Ut(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, t_ = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Ua(o) ? o : t.nodeLookup.get(o.id));
    const l = s ? vs(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Bs(r, l);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Vs(n);
}, Uo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Bs(n, vs(o)), r = !0);
  }), r ? Vs(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Wa = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
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
}, n_ = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function r_(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function o_({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const l = r_(e, s), u = Uo(l), a = Ya(u, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(a, {
    duration: s == null ? void 0 : s.duration,
    ease: s == null ? void 0 : s.ease,
    interpolate: s == null ? void 0 : s.interpolate
  }), Promise.resolve(!0);
}
function Cg({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
async function i_({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const m = i.has(f.id), y = !m && f.parentId && s.find((x) => x.id === f.parentId);
    (m || y) && s.push(f);
  }
  const l = new Set(t.map((f) => f.id)), u = r.filter((f) => f.deletable !== !1), d = n_(s, u);
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
function Ng(e, t, n) {
  const { width: r, height: o } = Ut(n), { x: i, y: s } = n.internals.positionAbsolute;
  return $n(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ff = (e, t, n) => e < t ? Sr(Math.abs(e - t), 1, t) / t : e > n ? -Sr(Math.abs(e - n), 1, t) / t : 0, Mg = (e, t, n = 15, r = 40) => {
  const o = Ff(e.x, r, t.width - r) * n, i = Ff(e.y, r, t.height - r) * n;
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
  const { x: n, y: r } = Ua(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, vs = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = Ua(e) ? e.internals.positionAbsolute : Vo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Pg = (e, t) => Vs(Bs($u(e), $u(t))), Lo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, bf = (e) => ht(e.width) && ht(e.height) && ht(e.x) && ht(e.y), ht = (e) => !isNaN(e) && isFinite(e), s_ = (e, t) => {
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
function l_(e, t, n) {
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
function u_(e, t, n, r, o, i) {
  const { x: s, y: l } = xs(e, [t, n, r]), { x: u, y: a } = xs({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - u, c = i - a;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(d),
    bottom: Math.floor(c)
  };
}
const Ya = (e, t, n, r, o, i) => {
  const s = l_(i, t, n), l = (t - s.x) / e.width, u = (n - s.y) / e.height, a = Math.min(l, u), d = Sr(a, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, m = t / 2 - c * d, y = n / 2 - f * d, x = u_(e, m, y, d, t, n), S = {
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
function Tg(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Dg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const l = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * l[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * l[1];
  }
  return i;
}
function Hf(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function a_() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function c_(e) {
  return { ...Sg, ...e || {} };
}
function lo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = pt(e), l = Yo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: u, y: a } = n ? Wo(l, t) : l;
  return {
    xSnapped: u,
    ySnapped: a,
    ...l
  };
}
const Xa = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), zg = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, f_ = ["INPUT", "SELECT", "TEXTAREA"];
function Ig(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : f_.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Lg = (e) => "clientX" in e, pt = (e, t) => {
  var i, s;
  const n = Lg(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Bf = (e, t, n, r, o) => {
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
      ...Xa(s)
    };
  });
};
function jg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: l }) {
  const u = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, a = t * 0.125 + i * 0.375 + l * 0.375 + r * 0.125, d = Math.abs(u - e), c = Math.abs(a - t);
  return [u, a, d, c];
}
function xi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Vf({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
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
function Ka({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top, curvature: s = 0.25 }) {
  const [l, u] = Vf({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [a, d] = Vf({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [c, f, m, y] = jg({
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
function Ag({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [i, l, o, s];
}
function d_({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, l = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + l;
}
function h_({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
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
const p_ = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, g_ = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), $g = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || p_;
  let o;
  return Eg(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, g_(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function Rg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, l] = Ag({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, l];
}
const Uf = {
  [K.Left]: { x: -1, y: 0 },
  [K.Right]: { x: 1, y: 0 },
  [K.Top]: { x: 0, y: -1 },
  [K.Bottom]: { x: 0, y: 1 }
}, m_ = ({ source: e, sourcePosition: t = K.Bottom, target: n }) => t === K.Left || t === K.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Wf = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function y_({ source: e, sourcePosition: t = K.Bottom, target: n, targetPosition: r = K.Top, center: o, offset: i, stepPosition: s }) {
  const l = Uf[t], u = Uf[r], a = { x: e.x + l.x * i, y: e.y + l.y * i }, d = { x: n.x + u.x * i, y: n.y + u.y * i }, c = m_({
    source: a,
    sourcePosition: t,
    target: d
  }), f = c.x !== 0 ? "x" : "y", m = c[f];
  let y = [], x, S;
  const p = { x: 0, y: 0 }, g = { x: 0, y: 0 }, [, , h, v] = Ag({
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
      const j = Math.abs(e[f] - n[f]);
      if (j <= i) {
        const b = Math.min(i - 1, i - j);
        l[f] === m ? p[f] = (a[f] > e[f] ? -1 : 1) * b : g[f] = (d[f] > n[f] ? -1 : 1) * b;
      }
    }
    if (t !== r) {
      const j = f === "x" ? "y" : "x", b = l[f] === u[j], M = a[j] > d[j], A = a[j] < d[j];
      (l[f] === 1 && (!b && M || b && A) || l[f] !== 1 && (!b && A || b && M)) && (y = f === "x" ? k : E);
    }
    const T = { x: a.x + p.x, y: a.y + p.y }, z = { x: d.x + g.x, y: d.y + g.y }, R = Math.max(Math.abs(T.x - y[0].x), Math.abs(z.x - y[0].x)), I = Math.max(Math.abs(T.y - y[0].y), Math.abs(z.y - y[0].y));
    R >= I ? (x = (T.x + z.x) / 2, S = y[0].y) : (x = y[0].x, S = (T.y + z.y) / 2);
  }
  return [[
    e,
    { x: a.x + p.x, y: a.y + p.y },
    ...y,
    { x: d.x + g.x, y: d.y + g.y },
    n
  ], x, S, h, v];
}
function v_(e, t, n, r) {
  const o = Math.min(Wf(e, t) / 2, Wf(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const a = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * a},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const l = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * u}Q ${i},${s} ${i + o * l},${s}`;
}
function Ru({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top, borderRadius: s = 5, centerX: l, centerY: u, offset: a = 20, stepPosition: d = 0.5 }) {
  const [c, f, m, y, x] = y_({
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
    return h > 0 && h < c.length - 1 ? v = v_(c[h - 1], g, c[h + 1], s) : v = `${h === 0 ? "M" : "L"}${g.x} ${g.y}`, p += v, p;
  }, ""), f, m, y, x];
}
function Yf(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function x_(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!Yf(t) || !Yf(n))
    return null;
  const r = t.internals.handleBounds || Xf(t.handles), o = n.internals.handleBounds || Xf(n.handles), i = Kf((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Kf(
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
function Xf(e) {
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
function Kf(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ou(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function w_(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, l) => ([l.markerStart || r, l.markerEnd || o].forEach((u) => {
    if (u && typeof u == "object") {
      const a = Ou(u, t);
      i.has(a) || (s.push({ id: a, color: u.color || n, ...u }), i.add(a));
    }
  }), s), []).sort((s, l) => s.id.localeCompare(l.id));
}
const Og = 1e3, S_ = 10, Qa = {
  nodeOrigin: [0, 0],
  nodeExtent: zo,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, __ = {
  ...Qa,
  checkEquality: !0
};
function Ga(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function k_(e, t, n) {
  const r = Ga(Qa, n);
  for (const o of e.values())
    if (o.parentId)
      qa(o, e, t, r);
    else {
      const i = Vo(o, r.nodeOrigin), s = kr(o.extent) ? o.extent : r.nodeExtent, l = $n(i, s, Ut(o));
      o.internals.positionAbsolute = l;
    }
}
function E_(e, t) {
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
function Za(e) {
  return e === "manual";
}
function Fu(e, t, n, r = {}) {
  var a, d;
  const o = Ga(__, r), i = { i: 0 }, s = new Map(t), l = o != null && o.elevateNodesOnSelect && !Za(o.zIndexMode) ? Og : 0;
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
          handleBounds: E_(c, f),
          z: Fg(c, l, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (u = !1), c.parentId && qa(f, t, n, r, i);
  }
  return u;
}
function C_(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function qa(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: l, zIndexMode: u } = Ga(Qa, r), a = e.parentId, d = t.get(a);
  if (!d) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  C_(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && u === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * S_), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const c = i && !Za(u) ? Og : 0, { x: f, y: m, z: y } = N_(e, d, s, l, c, u), { positionAbsolute: x } = e.internals, S = f !== x.x || m !== x.y;
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
  return Za(n) ? r : r + (e.selected ? t : 0);
}
function N_(e, t, n, r, o, i) {
  const { x: s, y: l } = t.internals.positionAbsolute, u = Ut(e), a = Vo(e, n), d = kr(e.extent) ? $n(a, e.extent, u) : a;
  let c = $n({ x: s + d.x, y: l + d.y }, r, u);
  e.extent === "parent" && (c = Ng(c, u, t));
  const f = Fg(e, o, i), m = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: m >= f ? m + 1 : f
  };
}
function Ja(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const l of e) {
    const u = t.get(l.parentId);
    if (!u)
      continue;
    const a = ((s = i.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? _r(u), d = Pg(a, l.rect);
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
function M_(e, t, n, r, o, i, s) {
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
    const x = Xa(m.nodeElement), S = y.measured.width !== x.width || y.measured.height !== x.height;
    if (!!(x.width && x.height && (S || !y.internals.handleBounds || m.force))) {
      const g = m.nodeElement.getBoundingClientRect(), h = kr(y.extent) ? y.extent : i;
      let { positionAbsolute: v } = y.internals;
      y.parentId && y.extent === "parent" ? v = Ng(v, x, t.get(y.parentId)) : h && (v = $n(v, h, x));
      const _ = {
        ...y,
        measured: x,
        internals: {
          ...y.internals,
          positionAbsolute: v,
          handleBounds: {
            source: Bf("source", m.nodeElement, g, c, y.id),
            target: Bf("target", m.nodeElement, g, c, y.id)
          }
        }
      };
      t.set(y.id, _), y.parentId && qa(_, t, n, { nodeOrigin: o, zIndexMode: s }), u = !0, S && (a.push({
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
    const m = Ja(f, t, n, o);
    a.push(...m);
  }
  return { changes: a, updatedInternals: u };
}
async function P_({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Qf(e, t, n, r, o, i) {
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
    Qf("source", u, d, e, o, s), Qf("target", u, a, e, i, l), t.set(r.id, r);
  }
}
function Hg(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Hg(n, t) : !1;
}
function Gf(e, t, n) {
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
function T_(e, t, n, r) {
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
function D_({ dragItems: e, snapGrid: t, x: n, y: r }) {
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
function z_({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, l = /* @__PURE__ */ new Map(), u = !1, a = { x: 0, y: 0 }, d = null, c = !1, f = null, m = !1, y = !1, x = null;
  function S({ noDragClassName: g, handleSelector: h, domNode: v, isSelectable: _, nodeId: k, nodeClickDistance: E = 0 }) {
    f = We(v);
    function T({ x: j, y: b }) {
      const { nodeLookup: M, nodeExtent: A, snapGrid: D, snapToGrid: $, nodeOrigin: C, onNodeDrag: P, onSelectionDrag: L, onError: F, updateNodePositions: O } = t();
      i = { x: j, y: b };
      let U = !1;
      const V = l.size > 1, Y = V && A ? $u(Uo(l)) : null, X = V && $ ? D_({
        dragItems: l,
        snapGrid: D,
        x: j,
        y: b
      }) : null;
      for (const [Q, B] of l) {
        if (!M.has(Q))
          continue;
        let G = { x: j - B.distance.x, y: b - B.distance.y };
        $ && (G = X ? {
          x: Math.round(G.x + X.x),
          y: Math.round(G.y + X.y)
        } : Wo(G, D));
        let ee = null;
        if (V && A && !B.extent && Y) {
          const { positionAbsolute: Z } = B.internals, ie = Z.x - Y.x + A[0][0], ue = Z.x + B.measured.width - Y.x2 + A[1][0], oe = Z.y - Y.y + A[0][1], Te = Z.y + B.measured.height - Y.y2 + A[1][1];
          ee = [
            [ie, oe],
            [ue, Te]
          ];
        }
        const { position: J, positionAbsolute: q } = Cg({
          nodeId: Q,
          nextPosition: G,
          nodeLookup: M,
          nodeExtent: ee || A,
          nodeOrigin: C,
          onError: F
        });
        U = U || B.position.x !== J.x || B.position.y !== J.y, B.position = J, B.internals.positionAbsolute = q;
      }
      if (y = y || U, !!U && (O(l, !0), x && (r || P || !k && L))) {
        const [Q, B] = Pl({
          nodeId: k,
          dragItems: l,
          nodeLookup: M
        });
        r == null || r(x, l, Q, B), P == null || P(x, Q, B), k || L == null || L(x, B);
      }
    }
    async function z() {
      if (!d)
        return;
      const { transform: j, panBy: b, autoPanSpeed: M, autoPanOnNodeDrag: A } = t();
      if (!A) {
        u = !1, cancelAnimationFrame(s);
        return;
      }
      const [D, $] = Mg(a, d, M);
      (D !== 0 || $ !== 0) && (i.x = (i.x ?? 0) - D / j[2], i.y = (i.y ?? 0) - $ / j[2], await b({ x: D, y: $ }) && T(i)), s = requestAnimationFrame(z);
    }
    function R(j) {
      var V;
      const { nodeLookup: b, multiSelectionActive: M, nodesDraggable: A, transform: D, snapGrid: $, snapToGrid: C, selectNodesOnDrag: P, onNodeDragStart: L, onSelectionDragStart: F, unselectNodesAndEdges: O } = t();
      c = !0, (!P || !_) && !M && k && ((V = b.get(k)) != null && V.selected || O()), _ && P && k && (e == null || e(k));
      const U = lo(j.sourceEvent, { transform: D, snapGrid: $, snapToGrid: C, containerBounds: d });
      if (i = U, l = T_(b, A, U, k), l.size > 0 && (n || L || !k && F)) {
        const [Y, X] = Pl({
          nodeId: k,
          dragItems: l,
          nodeLookup: b
        });
        n == null || n(j.sourceEvent, l, Y, X), L == null || L(j.sourceEvent, Y, X), k || F == null || F(j.sourceEvent, X);
      }
    }
    const I = og().clickDistance(E).on("start", (j) => {
      const { domNode: b, nodeDragThreshold: M, transform: A, snapGrid: D, snapToGrid: $ } = t();
      d = (b == null ? void 0 : b.getBoundingClientRect()) || null, m = !1, y = !1, x = j.sourceEvent, M === 0 && R(j), i = lo(j.sourceEvent, { transform: A, snapGrid: D, snapToGrid: $, containerBounds: d }), a = pt(j.sourceEvent, d);
    }).on("drag", (j) => {
      const { autoPanOnNodeDrag: b, transform: M, snapGrid: A, snapToGrid: D, nodeDragThreshold: $, nodeLookup: C } = t(), P = lo(j.sourceEvent, { transform: M, snapGrid: A, snapToGrid: D, containerBounds: d });
      if (x = j.sourceEvent, (j.sourceEvent.type === "touchmove" && j.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      k && !C.has(k)) && (m = !0), !m) {
        if (!u && b && c && (u = !0, z()), !c) {
          const L = pt(j.sourceEvent, d), F = L.x - a.x, O = L.y - a.y;
          Math.sqrt(F * F + O * O) > $ && R(j);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && l && c && (a = pt(j.sourceEvent, d), T(P));
      }
    }).on("end", (j) => {
      if (!(!c || m) && (u = !1, c = !1, cancelAnimationFrame(s), l.size > 0)) {
        const { nodeLookup: b, updateNodePositions: M, onNodeDragStop: A, onSelectionDragStop: D } = t();
        if (y && (M(l, !1), y = !1), o || A || !k && D) {
          const [$, C] = Pl({
            nodeId: k,
            dragItems: l,
            nodeLookup: b,
            dragging: !1
          });
          o == null || o(j.sourceEvent, l, $, C), A == null || A(j.sourceEvent, $, C), k || D == null || D(j.sourceEvent, C);
        }
      }
    }).filter((j) => {
      const b = j.target;
      return !j.button && (!g || !Gf(b, `.${g}`, v)) && (!h || Gf(b, h, v));
    });
    f.call(I);
  }
  function p() {
    f == null || f.on(".drag", null);
  }
  return {
    update: S,
    destroy: p
  };
}
function I_(e, t, n) {
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
const L_ = 250;
function j_(e, t, n, r) {
  var l, u;
  let o = [], i = 1 / 0;
  const s = I_(e, n, t + L_);
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
function A_(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ug = () => !0;
function $_(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: l, nodeLookup: u, lib: a, autoPanOnConnect: d, flowId: c, panBy: f, cancelConnection: m, onConnectStart: y, onConnect: x, onConnectEnd: S, isValidConnection: p = Ug, onReconnectEnd: g, updateConnection: h, getTransform: v, getFromHandle: _, autoPanSpeed: k, dragThreshold: E = 1, handleDomNode: T }) {
  const z = zg(e.target);
  let R = 0, I;
  const { x: j, y: b } = pt(e), M = Vg(i, T), A = l == null ? void 0 : l.getBoundingClientRect();
  let D = !1;
  if (!A || !M)
    return;
  const $ = Bg(o, M, r, u, t);
  if (!$)
    return;
  let C = pt(e, A), P = !1, L = null, F = !1, O = null;
  function U() {
    if (!d || !A)
      return;
    const [J, q] = Mg(C, A, k);
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
    toPosition: Of[V.position],
    toNode: null,
    pointer: C
  };
  function B() {
    D = !0, h(Q), y == null || y(e, { nodeId: o, handleId: r, handleType: M });
  }
  E === 0 && B();
  function G(J) {
    if (!D) {
      const { x: Te, y: Wt } = pt(J), Pt = Te - j, yn = Wt - b;
      if (!(Pt * Pt + yn * yn > E * E))
        return;
      B();
    }
    if (!_() || !V) {
      ee(J);
      return;
    }
    const q = v();
    C = pt(J, A), I = j_(Yo(C, q, !1, [1, 1]), n, u, V), P || (U(), P = !0);
    const Z = Wg(J, {
      handle: I,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: p,
      doc: z,
      lib: a,
      flowId: c,
      nodeLookup: u
    });
    O = Z.handleDomNode, L = Z.connection, F = A_(!!I, Z.isValid);
    const ie = u.get(o), ue = ie ? Rn(ie, V, K.Left, !0) : Q.from, oe = {
      ...Q,
      from: ue,
      isValid: F,
      to: Z.toHandle && F ? xs({ x: Z.toHandle.x, y: Z.toHandle.y }, q) : C,
      toHandle: Z.toHandle,
      toPosition: F && Z.toHandle ? Z.toHandle.position : Of[V.position],
      toNode: Z.toHandle ? u.get(Z.toHandle.nodeId) : null,
      pointer: C
    };
    h(oe), Q = oe;
  }
  function ee(J) {
    if (!("touches" in J && J.touches.length > 0)) {
      if (D) {
        (I || O) && L && F && (x == null || x(L));
        const { inProgress: q, ...Z } = Q, ie = {
          ...Z,
          toPosition: Q.toHandle ? Q.toPosition : null
        };
        S == null || S(J, ie), i && (g == null || g(J, ie));
      }
      m(), cancelAnimationFrame(R), P = !1, F = !1, L = null, O = null, z.removeEventListener("mousemove", G), z.removeEventListener("mouseup", ee), z.removeEventListener("touchmove", G), z.removeEventListener("touchend", ee);
    }
  }
  z.addEventListener("mousemove", G), z.addEventListener("mouseup", ee), z.addEventListener("touchmove", G), z.addEventListener("touchend", ee);
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
    const z = _ && k && (n === wr.Strict ? c && g === "source" || !c && g === "target" : h !== r || v !== o);
    p.isValid = z && a(E), p.toHandle = Bg(h, g, v, d, n, !0);
  }
  return p;
}
const bu = {
  onPointerDown: $_,
  isValid: Wg
};
function R_({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = We(e);
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
      }, z = [
        [0, 0],
        [u, a]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: v[2]
      }, z, l);
    }, g = xg().on("start", S).on("zoom", c ? p : null).on("zoom.wheel", f ? y : null);
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
}), Tl = ({ x: e, y: t, zoom: n }) => Hs.translate(e, t).scale(n), tr = (e, t) => e.target.closest(`.${t}`), Yg = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), O_ = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Dl = (e, t = 0, n = O_, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Xg = (e) => {
  const t = e.ctrlKey && jo() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function F_({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: l, onPanZoom: u, onPanZoomEnd: a }) {
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
function b_({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, l = tr(r, e);
    if (r.ctrlKey && i && l && r.preventDefault(), s || l)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function H_({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, l;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Us(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function B_({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, l;
    e.usedRightMouseButton = !!(n && Yg(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((l = i.sourceEvent) != null && l.internal) && (o == null || o(i.sourceEvent, Us(i.transform)));
  };
}
function V_({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
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
function U_({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: l, noPanClassName: u, lib: a, connectionInProgress: d }) {
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
function W_({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const a = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), c = xg().scaleExtent([t, n]).translateExtent(r), f = We(e).call(c);
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
  function x(I, j) {
    return f ? new Promise((b) => {
      c == null || c.interpolate((j == null ? void 0 : j.interpolate) === "linear" ? so : $i).transform(Dl(f, j == null ? void 0 : j.duration, j == null ? void 0 : j.ease, () => b(!0)), I);
    }) : Promise.resolve(!1);
  }
  function S({ noWheelClassName: I, noPanClassName: j, onPaneContextMenu: b, userSelectionActive: M, panOnScroll: A, panOnDrag: D, panOnScrollMode: $, panOnScrollSpeed: C, preventScrolling: P, zoomOnPinch: L, zoomOnScroll: F, zoomOnDoubleClick: O, zoomActivationKeyPressed: U, lib: V, onTransformChange: Y, connectionInProgress: X, paneClickDistance: Q, selectionOnDrag: B }) {
    M && !a.isZoomingOrPanning && p();
    const G = A && !U && !M;
    c.clickDistance(B ? 1 / 0 : !ht(Q) || Q < 0 ? 0 : Q);
    const ee = G ? F_({
      zoomPanValues: a,
      noWheelClassName: I,
      d3Selection: f,
      d3Zoom: c,
      panOnScrollMode: $,
      panOnScrollSpeed: C,
      zoomOnPinch: L,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : b_({
      noWheelClassName: I,
      preventScrolling: P,
      d3ZoomHandler: m
    });
    if (f.on("wheel.zoom", ee, { passive: !1 }), !M) {
      const q = H_({
        zoomPanValues: a,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      c.on("start", q);
      const Z = B_({
        zoomPanValues: a,
        panOnDrag: D,
        onPaneContextMenu: !!b,
        onPanZoom: i,
        onTransformChange: Y
      });
      c.on("zoom", Z);
      const ie = V_({
        zoomPanValues: a,
        panOnDrag: D,
        panOnScroll: A,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      c.on("end", ie);
    }
    const J = U_({
      zoomActivationKeyPressed: U,
      panOnDrag: D,
      zoomOnScroll: F,
      panOnScroll: A,
      zoomOnDoubleClick: O,
      zoomOnPinch: L,
      userSelectionActive: M,
      noPanClassName: j,
      noWheelClassName: I,
      lib: V,
      connectionInProgress: X
    });
    c.filter(J), O ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null);
  }
  function p() {
    c.on("zoom", null);
  }
  async function g(I, j, b) {
    const M = Tl(I), A = c == null ? void 0 : c.constrain()(M, j, b);
    return A && await x(A), new Promise((D) => D(A));
  }
  async function h(I, j) {
    const b = Tl(I);
    return await x(b, j), new Promise((M) => M(b));
  }
  function v(I) {
    if (f) {
      const j = Tl(I), b = f.property("__zoom");
      (b.k !== I.zoom || b.x !== I.x || b.y !== I.y) && (c == null || c.transform(f, j, null, { sync: !0 }));
    }
  }
  function _() {
    const I = f ? vg(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: I.x, y: I.y, zoom: I.k };
  }
  function k(I, j) {
    return f ? new Promise((b) => {
      c == null || c.interpolate((j == null ? void 0 : j.interpolate) === "linear" ? so : $i).scaleTo(Dl(f, j == null ? void 0 : j.duration, j == null ? void 0 : j.ease, () => b(!0)), I);
    }) : Promise.resolve(!1);
  }
  function E(I, j) {
    return f ? new Promise((b) => {
      c == null || c.interpolate((j == null ? void 0 : j.interpolate) === "linear" ? so : $i).scaleBy(Dl(f, j == null ? void 0 : j.duration, j == null ? void 0 : j.ease, () => b(!0)), I);
    }) : Promise.resolve(!1);
  }
  function T(I) {
    c == null || c.scaleExtent(I);
  }
  function z(I) {
    c == null || c.translateExtent(I);
  }
  function R(I) {
    const j = !ht(I) || I < 0 ? 0 : I;
    c == null || c.clickDistance(j);
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
    setTranslateExtent: z,
    syncViewport: v,
    setClickDistance: R
  };
}
var Er;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Er || (Er = {}));
function Y_({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, l = n - r, u = [s > 0 ? 1 : s < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return s && o && (u[0] = u[0] * -1), l && i && (u[1] = u[1] * -1), u;
}
function Zf(e) {
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
function wi(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function qf(e, t) {
  return e ? !t : t;
}
function X_(e, t, n, r, o, i, s, l) {
  let { affectsX: u, affectsY: a } = t;
  const { isHorizontal: d, isVertical: c } = t, f = d && c, { xSnapped: m, ySnapped: y } = n, { minWidth: x, maxWidth: S, minHeight: p, maxHeight: g } = r, { x: h, y: v, width: _, height: k, aspectRatio: E } = e;
  let T = Math.floor(d ? m - e.pointerX : 0), z = Math.floor(c ? y - e.pointerY : 0);
  const R = _ + (u ? -T : T), I = k + (a ? -z : z), j = -i[0] * _, b = -i[1] * k;
  let M = wi(R, x, S), A = wi(I, p, g);
  if (s) {
    let C = 0, P = 0;
    u && T < 0 ? C = Xt(h + T + j, s[0][0]) : !u && T > 0 && (C = Kt(h + R + j, s[1][0])), a && z < 0 ? P = Xt(v + z + b, s[0][1]) : !a && z > 0 && (P = Kt(v + I + b, s[1][1])), M = Math.max(M, C), A = Math.max(A, P);
  }
  if (l) {
    let C = 0, P = 0;
    u && T > 0 ? C = Kt(h + T, l[0][0]) : !u && T < 0 && (C = Xt(h + R, l[1][0])), a && z > 0 ? P = Kt(v + z, l[0][1]) : !a && z < 0 && (P = Xt(v + I, l[1][1])), M = Math.max(M, C), A = Math.max(A, P);
  }
  if (o) {
    if (d) {
      const C = wi(R / E, p, g) * E;
      if (M = Math.max(M, C), s) {
        let P = 0;
        !u && !a || u && !a && f ? P = Kt(v + b + R / E, s[1][1]) * E : P = Xt(v + b + (u ? T : -T) / E, s[0][1]) * E, M = Math.max(M, P);
      }
      if (l) {
        let P = 0;
        !u && !a || u && !a && f ? P = Xt(v + R / E, l[1][1]) * E : P = Kt(v + (u ? T : -T) / E, l[0][1]) * E, M = Math.max(M, P);
      }
    }
    if (c) {
      const C = wi(I * E, x, S) / E;
      if (A = Math.max(A, C), s) {
        let P = 0;
        !u && !a || a && !u && f ? P = Kt(h + I * E + j, s[1][0]) / E : P = Xt(h + (a ? z : -z) * E + j, s[0][0]) / E, A = Math.max(A, P);
      }
      if (l) {
        let P = 0;
        !u && !a || a && !u && f ? P = Xt(h + I * E, l[1][0]) / E : P = Kt(h + (a ? z : -z) * E, l[0][0]) / E, A = Math.max(A, P);
      }
    }
  }
  z = z + (z < 0 ? A : -A), T = T + (T < 0 ? M : -M), o && (f ? R > I * E ? z = (qf(u, a) ? -T : T) / E : T = (qf(u, a) ? -z : z) * E : d ? (z = T / E, a = u) : (T = z * E, u = a));
  const D = u ? h + T : h, $ = a ? v + z : v;
  return {
    width: _ + (u ? -T : T),
    height: k + (a ? -z : z),
    x: i[0] * T * (u ? -1 : 1) + D,
    y: i[1] * z * (a ? -1 : 1) + $
  };
}
const Kg = { width: 0, height: 0, x: 0, y: 0 }, K_ = {
  ...Kg,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Q_(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function G_(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, l = n[0] * i, u = n[1] * s;
  return [
    [r - l, o - u],
    [r + i - l, o + s - u]
  ];
}
function Z_({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = We(e);
  let s = {
    controlDirection: Zf("bottom-right"),
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
    let p = { ...Kg }, g = { ...K_ };
    s = {
      boundaries: d,
      resizeDirection: f,
      keepAspectRatio: c,
      controlDirection: Zf(a)
    };
    let h, v = null, _ = [], k, E, T, z = !1;
    const R = og().on("start", (I) => {
      const { nodeLookup: j, transform: b, snapGrid: M, snapToGrid: A, nodeOrigin: D, paneDomNode: $ } = n();
      if (h = j.get(t), !h)
        return;
      v = ($ == null ? void 0 : $.getBoundingClientRect()) ?? null;
      const { xSnapped: C, ySnapped: P } = lo(I.sourceEvent, {
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
      }, k = void 0, h.parentId && (h.extent === "parent" || h.expandParent) && (k = j.get(h.parentId), E = k && h.extent === "parent" ? Q_(k) : void 0), _ = [], T = void 0;
      for (const [L, F] of j)
        if (F.parentId === t && (_.push({
          id: L,
          position: { ...F.position },
          extent: F.extent
        }), F.extent === "parent" || F.expandParent)) {
          const O = G_(F, h, F.origin ?? D);
          T ? T = [
            [Math.min(O[0][0], T[0][0]), Math.min(O[0][1], T[0][1])],
            [Math.max(O[1][0], T[1][0]), Math.max(O[1][1], T[1][1])]
          ] : T = O;
        }
      m == null || m(I, { ...p });
    }).on("drag", (I) => {
      const { transform: j, snapGrid: b, snapToGrid: M, nodeOrigin: A } = n(), D = lo(I.sourceEvent, {
        transform: j,
        snapGrid: b,
        snapToGrid: M,
        containerBounds: v
      }), $ = [];
      if (!h)
        return;
      const { x: C, y: P, width: L, height: F } = p, O = {}, U = h.origin ?? A, { width: V, height: Y, x: X, y: Q } = X_(g, s.controlDirection, D, s.boundaries, s.keepAspectRatio, U, E, T), B = V !== L, G = Y !== F, ee = X !== C && B, J = Q !== P && G;
      if (!ee && !J && !B && !G)
        return;
      if ((ee || J || U[0] === 1 || U[1] === 1) && (O.x = ee ? X : p.x, O.y = J ? Q : p.y, p.x = O.x, p.y = O.y, _.length > 0)) {
        const ue = X - C, oe = Q - P;
        for (const Te of _)
          Te.position = {
            x: Te.position.x - ue + U[0] * (V - L),
            y: Te.position.y - oe + U[1] * (Y - F)
          }, $.push(Te);
      }
      if ((B || G) && (O.width = B && (!s.resizeDirection || s.resizeDirection === "horizontal") ? V : p.width, O.height = G && (!s.resizeDirection || s.resizeDirection === "vertical") ? Y : p.height, p.width = O.width, p.height = O.height), k && h.expandParent) {
        const ue = U[0] * (O.width ?? 0);
        O.x && O.x < ue && (p.x = ue, g.x = g.x - (O.x - ue));
        const oe = U[1] * (O.height ?? 0);
        O.y && O.y < oe && (p.y = oe, g.y = g.y - (O.y - oe));
      }
      const q = Y_({
        width: p.width,
        prevWidth: L,
        height: p.height,
        prevHeight: F,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), Z = { ...p, direction: q };
      (S == null ? void 0 : S(I, Z)) !== !1 && (z = !0, y == null || y(I, Z), r(O, $));
    }).on("end", (I) => {
      z && (x == null || x(I, { ...p }), o == null || o({ ...p }), z = !1);
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
function q_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var J_ = typeof Object.is == "function" ? Object.is : q_, ek = Cr.useState, tk = Cr.useEffect, nk = Cr.useLayoutEffect, rk = Cr.useDebugValue;
function ok(e, t) {
  var n = t(), r = ek({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return nk(
    function() {
      o.value = n, o.getSnapshot = t, zl(o) && i({ inst: o });
    },
    [e, n, t]
  ), tk(
    function() {
      return zl(o) && i({ inst: o }), e(function() {
        zl(o) && i({ inst: o });
      });
    },
    [e]
  ), rk(n), n;
}
function zl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !J_(e, n);
  } catch {
    return !0;
  }
}
function ik(e, t) {
  return t();
}
var sk = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? ik : ok;
qg.useSyncExternalStore = Cr.useSyncExternalStore !== void 0 ? Cr.useSyncExternalStore : sk;
Zg.exports = qg;
var lk = Zg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws = N, uk = lk;
function ak(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ck = typeof Object.is == "function" ? Object.is : ak, fk = uk.useSyncExternalStore, dk = Ws.useRef, hk = Ws.useEffect, pk = Ws.useMemo, gk = Ws.useDebugValue;
Gg.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = dk(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = pk(
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
        if (y = c, ck(d, m)) return y;
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
  var l = fk(e, i[0], i[1]);
  return hk(
    function() {
      s.hasValue = !0, s.value = l;
    },
    [l]
  ), gk(l), l;
};
Qg.exports = Gg;
var mk = Qg.exports;
const yk = /* @__PURE__ */ Td(mk), vk = {}, Jf = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, c) => {
    const f = typeof d == "function" ? d(t) : d;
    if (!Object.is(f, t)) {
      const m = t;
      t = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((y) => y(t, m));
    }
  }, o = () => t, u = { setState: r, getState: o, getInitialState: () => a, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (vk ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, a = t = e(r, o, u);
  return u;
}, xk = (e) => e ? Jf(e) : Jf, { useDebugValue: wk } = Ur, { useSyncExternalStoreWithSelector: Sk } = yk, _k = (e) => e;
function Jg(e, t = _k, n) {
  const r = Sk(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return wk(r), r;
}
const ed = (e, t) => {
  const n = xk(e), r = (o, i = t) => Jg(n, o, i);
  return Object.assign(r, n), r;
}, kk = (e, t) => e ? ed(e, t) : ed;
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
const Ys = N.createContext(null), Ek = Ys.Provider, em = Nt.error001();
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
const td = { display: "none" }, Ck = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, tm = "react-flow__node-desc", nm = "react-flow__edge-desc", Nk = "react-flow__aria-live", Mk = (e) => e.ariaLiveMessage, Pk = (e) => e.ariaLabelConfig;
function Tk({ rfId: e }) {
  const t = ne(Mk);
  return w.jsx("div", { id: `${Nk}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Ck, children: t });
}
function Dk({ rfId: e, disableKeyboardA11y: t }) {
  const n = ne(Pk);
  return w.jsxs(w.Fragment, { children: [w.jsx("div", { id: `${tm}-${e}`, style: td, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), w.jsx("div", { id: `${nm}-${e}`, style: td, children: n["edge.a11yDescription.default"] }), !t && w.jsx(Tk, { rfId: e })] });
}
const Xo = N.forwardRef(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = `${e}`.split("-");
  return w.jsx("div", { className: Se(["react-flow__panel", n, ...s]), style: r, ref: i, ...o, children: t });
});
Xo.displayName = "Panel";
function zk({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : w.jsx(Xo, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: w.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Ik = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, Si = (e) => e.id;
function Lk(e, t) {
  return he(e.selectedNodes.map(Si), t.selectedNodes.map(Si)) && he(e.selectedEdges.map(Si), t.selectedEdges.map(Si));
}
function jk({ onSelectionChange: e }) {
  const t = pe(), { selectedNodes: n, selectedEdges: r } = ne(Ik, Lk);
  return N.useEffect(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const Ak = (e) => !!e.onSelectionChangeHandlers;
function $k({ onSelectionChange: e }) {
  const t = ne(Ak);
  return e || t ? w.jsx(jk, { onSelectionChange: e }) : null;
}
const rm = [0, 0], Rk = { x: 0, y: 0, zoom: 1 }, Ok = [
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
], nd = [...Ok, "rfId"], Fk = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), rd = {
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
function bk(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: l, setDefaultNodesAndEdges: u } = ne(Fk, he), a = pe();
  N.useEffect(() => (u(e.defaultNodes, e.defaultEdges), () => {
    d.current = rd, l();
  }), []);
  const d = N.useRef(rd);
  return N.useEffect(
    () => {
      for (const c of nd) {
        const f = e[c], m = d.current[c];
        f !== m && (typeof e[c] > "u" || (c === "nodes" ? t(f) : c === "edges" ? n(f) : c === "minZoom" ? r(f) : c === "maxZoom" ? o(f) : c === "translateExtent" ? i(f) : c === "nodeExtent" ? s(f) : c === "ariaLabelConfig" ? a.setState({ ariaLabelConfig: c_(f) }) : c === "fitView" ? a.setState({ fitViewQueued: f }) : c === "fitViewOptions" ? a.setState({ fitViewOptions: f }) : a.setState({ [c]: f })));
      }
      d.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    nd.map((c) => e[c])
  ), null;
}
function od() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Hk(e) {
  var r;
  const [t, n] = N.useState(e === "system" ? null : e);
  return N.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = od(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = od()) != null && r.matches ? "dark" : "light";
}
const id = typeof document < "u" ? document : null;
function Ao(e = null, t = { target: id, actInsideInputWithModifier: !0 }) {
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
    const u = (t == null ? void 0 : t.target) ?? id, a = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const d = (m) => {
        var S, p;
        if (o.current = m.ctrlKey || m.metaKey || m.shiftKey || m.altKey, (!o.current || o.current && !a) && Ig(m))
          return !1;
        const x = ld(m.code, l);
        if (i.current.add(m[x]), sd(s, i.current, !1)) {
          const g = ((p = (S = m.composedPath) == null ? void 0 : S.call(m)) == null ? void 0 : p[0]) || m.target, h = (g == null ? void 0 : g.nodeName) === "BUTTON" || (g == null ? void 0 : g.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !h) && m.preventDefault(), r(!0);
        }
      }, c = (m) => {
        const y = ld(m.code, l);
        sd(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(m[y]), m.key === "Meta" && i.current.clear(), o.current = !1;
      }, f = () => {
        i.current.clear(), r(!1);
      };
      return u == null || u.addEventListener("keydown", d), u == null || u.addEventListener("keyup", c), window.addEventListener("blur", f), window.addEventListener("contextmenu", f), () => {
        u == null || u.removeEventListener("keydown", d), u == null || u.removeEventListener("keyup", c), window.removeEventListener("blur", f), window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]), n;
}
function sd(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function ld(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Bk = () => {
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
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: l } = e.getState(), u = Ya(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
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
      Vk(u, l);
    n.push(l);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function Vk(e, t) {
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
function ud({ items: e = [], lookup: t }) {
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
function ad(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const cd = (e) => e_(e), Uk = (e) => Eg(e);
function lm(e) {
  return N.forwardRef(e);
}
const Wk = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function fd(e) {
  const [t, n] = N.useState(BigInt(0)), [r] = N.useState(() => Yk(() => n((o) => o + BigInt(1))));
  return Wk(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function Yk(e) {
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
function Xk({ children: e }) {
  const t = pe(), n = N.useCallback((l) => {
    const { nodes: u = [], setNodes: a, hasDefaultNodes: d, onNodesChange: c, nodeLookup: f, fitViewQueued: m, onNodesChangeMiddlewareMap: y } = t.getState();
    let x = u;
    for (const p of l)
      x = typeof p == "function" ? p(x) : p;
    let S = ud({
      items: x,
      lookup: f
    });
    for (const p of y.values())
      S = p(S);
    d && a(x), S.length > 0 ? c == null || c(S) : m && window.requestAnimationFrame(() => {
      const { fitViewQueued: p, nodes: g, setNodes: h } = t.getState();
      p && h(g);
    });
  }, []), r = fd(n), o = N.useCallback((l) => {
    const { edges: u = [], setEdges: a, hasDefaultEdges: d, onEdgesChange: c, edgeLookup: f } = t.getState();
    let m = u;
    for (const y of l)
      m = typeof y == "function" ? y(m) : y;
    d ? a(m) : c && c(ud({
      items: m,
      lookup: f
    }));
  }, []), i = fd(o), s = N.useMemo(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return w.jsx(um.Provider, { value: s, children: e });
}
function Kk() {
  const e = N.useContext(um);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const Qk = (e) => !!e.panZoom;
function qe() {
  const e = Bk(), t = pe(), n = Kk(), r = ne(Qk), o = N.useMemo(() => {
    const i = (c) => t.getState().nodeLookup.get(c), s = (c) => {
      n.nodeQueue.push(c);
    }, l = (c) => {
      n.edgeQueue.push(c);
    }, u = (c) => {
      var p, g;
      const { nodeLookup: f, nodeOrigin: m } = t.getState(), y = cd(c) ? c : f.get(c.id), x = y.parentId ? Dg(y.position, y.measured, y.parentId, f, m) : y.position, S = {
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
          return m.replace && cd(S) ? S : { ...x, ...S };
        }
        return x;
      }));
    }, d = (c, f, m = { replace: !1 }) => {
      l((y) => y.map((x) => {
        if (x.id === c) {
          const S = typeof f == "function" ? f(x) : f;
          return m.replace && Uk(S) ? S : { ...x, ...S };
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
        const { nodes: m, edges: y, onNodesDelete: x, onEdgesDelete: S, triggerNodeChanges: p, triggerEdgeChanges: g, onDelete: h, onBeforeDelete: v } = t.getState(), { nodes: _, edges: k } = await i_({
          nodesToRemove: c,
          edgesToRemove: f,
          nodes: m,
          edges: y,
          onBeforeDelete: v
        }), E = k.length > 0, T = _.length > 0;
        if (E) {
          const z = k.map(ad);
          S == null || S(k), g(z);
        }
        if (T) {
          const z = _.map(ad);
          x == null || x(_), p(z);
        }
        return (T || E) && (h == null || h({ nodes: _, edges: k })), { deletedNodes: _, deletedEdges: k };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (c, f = !0, m) => {
        const y = bf(c), x = y ? c : u(c), S = m !== void 0;
        return x ? (m || t.getState().nodes).filter((p) => {
          const g = t.getState().nodeLookup.get(p.id);
          if (g && !y && (p.id === c.id || !g.internals.positionAbsolute))
            return !1;
          const h = _r(S ? p : g), v = Lo(h, x);
          return f && v > 0 || v >= h.width * h.height || v >= x.width * x.height;
        }) : [];
      },
      isNodeIntersecting: (c, f, m = !0) => {
        const x = bf(c) ? c : u(c);
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
        return t_(c, { nodeLookup: f, nodeOrigin: m });
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
        const f = t.getState().fitViewResolver ?? a_();
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
const dd = (e) => e.selected, Gk = typeof window < "u" ? window : void 0;
function Zk({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = pe(), { deleteElements: r } = qe(), o = Ao(e, { actInsideInputWithModifier: !1 }), i = Ao(t, { target: Gk });
  N.useEffect(() => {
    if (o) {
      const { edges: s, nodes: l } = n.getState();
      r({ nodes: l.filter(dd), edges: s.filter(dd) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), N.useEffect(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function qk(e) {
  const t = pe();
  N.useEffect(() => {
    const n = () => {
      var o, i, s, l;
      if (!e.current || !(((i = (o = e.current).checkVisibility) == null ? void 0 : i.call(o)) ?? !0))
        return !1;
      const r = Xa(e.current);
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
}, Jk = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function eE({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = Pn.Free, zoomOnDoubleClick: s = !0, panOnDrag: l = !0, defaultViewport: u, translateExtent: a, minZoom: d, maxZoom: c, zoomActivationKeyCode: f, preventScrolling: m = !0, children: y, noWheelClassName: x, noPanClassName: S, onViewportChange: p, isControlledViewport: g, paneClickDistance: h, selectionOnDrag: v }) {
  const _ = pe(), k = N.useRef(null), { userSelectionActive: E, lib: T, connectionInProgress: z } = ne(Jk, he), R = Ao(f), I = N.useRef();
  qk(k);
  const j = N.useCallback((b) => {
    p == null || p({ x: b[0], y: b[1], zoom: b[2] }), g || _.setState({ transform: b });
  }, [p, g]);
  return N.useEffect(() => {
    if (k.current) {
      I.current = W_({
        domNode: k.current,
        minZoom: d,
        maxZoom: c,
        translateExtent: a,
        viewport: u,
        onDraggingChange: (D) => _.setState({ paneDragging: D }),
        onPanZoomStart: (D, $) => {
          const { onViewportChangeStart: C, onMoveStart: P } = _.getState();
          P == null || P(D, $), C == null || C($);
        },
        onPanZoom: (D, $) => {
          const { onViewportChange: C, onMove: P } = _.getState();
          P == null || P(D, $), C == null || C($);
        },
        onPanZoomEnd: (D, $) => {
          const { onViewportChangeEnd: C, onMoveEnd: P } = _.getState();
          P == null || P(D, $), C == null || C($);
        }
      });
      const { x: b, y: M, zoom: A } = I.current.getViewport();
      return _.setState({
        panZoom: I.current,
        transform: [b, M, A],
        domNode: k.current.closest(".react-flow")
      }), () => {
        var D;
        (D = I.current) == null || D.destroy();
      };
    }
  }, []), N.useEffect(() => {
    var b;
    (b = I.current) == null || b.update({
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
      onTransformChange: j,
      connectionInProgress: z,
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
    j,
    z,
    v,
    h
  ]), w.jsx("div", { className: "react-flow__renderer", ref: k, style: Xs, children: y });
}
const tE = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function nE() {
  const { userSelectionActive: e, userSelectionRect: t } = ne(tE, he);
  return e && t ? w.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Il = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, rE = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function oE({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Io.Full, panOnDrag: r, paneClickDistance: o, selectionOnDrag: i, onSelectionStart: s, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: a, onPaneScroll: d, onPaneMouseEnter: c, onPaneMouseMove: f, onPaneMouseLeave: m, children: y }) {
  const x = pe(), { userSelectionActive: S, elementsSelectable: p, dragging: g, connectionInProgress: h } = ne(rE, he), v = p && (e || S), _ = N.useRef(null), k = N.useRef(), E = N.useRef(/* @__PURE__ */ new Set()), T = N.useRef(/* @__PURE__ */ new Set()), z = N.useRef(!1), R = (C) => {
    if (z.current || h) {
      z.current = !1;
      return;
    }
    u == null || u(C), x.getState().resetSelectedElements(), x.setState({ nodesSelectionActive: !1 });
  }, I = (C) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      C.preventDefault();
      return;
    }
    a == null || a(C);
  }, j = d ? (C) => d(C) : void 0, b = (C) => {
    z.current && (C.stopPropagation(), z.current = !1);
  }, M = (C) => {
    var Y, X;
    const { domNode: P } = x.getState();
    if (k.current = P == null ? void 0 : P.getBoundingClientRect(), !k.current)
      return;
    const L = C.target === _.current;
    if (!L && !!C.target.closest(".nokey") || !e || !(i && L || t) || C.button !== 0 || !C.isPrimary)
      return;
    (X = (Y = C.target) == null ? void 0 : Y.setPointerCapture) == null || X.call(Y, C.pointerId), z.current = !1;
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
    }), L || (C.stopPropagation(), C.preventDefault());
  }, A = (C) => {
    const { userSelectionRect: P, transform: L, nodeLookup: F, edgeLookup: O, connectionLookup: U, triggerNodeChanges: V, triggerEdgeChanges: Y, defaultEdgeOptions: X, resetSelectedElements: Q } = x.getState();
    if (!k.current || !P)
      return;
    const { x: B, y: G } = pt(C.nativeEvent, k.current), { startX: ee, startY: J } = P;
    if (!z.current) {
      const oe = t ? 0 : o;
      if (Math.hypot(B - ee, G - J) <= oe)
        return;
      Q(), s == null || s(C);
    }
    z.current = !0;
    const q = {
      startX: ee,
      startY: J,
      x: B < ee ? B : ee,
      y: G < J ? G : J,
      width: Math.abs(B - ee),
      height: Math.abs(G - J)
    }, Z = E.current, ie = T.current;
    E.current = new Set(Wa(F, q, L, n === Io.Partial, !0).map((oe) => oe.id)), T.current = /* @__PURE__ */ new Set();
    const ue = (X == null ? void 0 : X.selectable) ?? !0;
    for (const oe of E.current) {
      const Te = U.get(oe);
      if (Te)
        for (const { edgeId: Wt } of Te.values()) {
          const Pt = O.get(Wt);
          Pt && (Pt.selectable ?? ue) && T.current.add(Wt);
        }
    }
    if (!Hf(Z, E.current)) {
      const oe = nr(F, E.current, !0);
      V(oe);
    }
    if (!Hf(ie, T.current)) {
      const oe = nr(O, T.current);
      Y(oe);
    }
    x.setState({
      userSelectionRect: q,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, D = (C) => {
    var P, L;
    C.button === 0 && ((L = (P = C.target) == null ? void 0 : P.releasePointerCapture) == null || L.call(P, C.pointerId), !S && C.target === _.current && x.getState().userSelectionRect && (R == null || R(C)), x.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), z.current && (l == null || l(C), x.setState({
      nodesSelectionActive: E.current.size > 0
    })));
  }, $ = r === !0 || Array.isArray(r) && r.includes(0);
  return w.jsxs("div", { className: Se(["react-flow__pane", { draggable: $, dragging: g, selection: e }]), onClick: v ? void 0 : Il(R, _), onContextMenu: Il(I, _), onWheel: Il(j, _), onPointerEnter: v ? void 0 : c, onPointerMove: v ? A : f, onPointerUp: v ? D : void 0, onPointerDownCapture: v ? M : void 0, onClickCapture: v ? b : void 0, onPointerLeave: m, ref: _, style: Xs, children: [y, w.jsx(nE, {})] });
}
function Hu({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
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
    d.current = z_({
      getStoreItems: () => l.getState(),
      onNodeMouseDown: (c) => {
        Hu({
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
const iE = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function cm() {
  const e = pe();
  return N.useCallback((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: l, updateNodePositions: u, nodeLookup: a, nodeOrigin: d } = e.getState(), c = /* @__PURE__ */ new Map(), f = iE(s), m = o ? i[0] : 5, y = o ? i[1] : 5, x = n.direction.x * m * n.factor, S = n.direction.y * y * n.factor;
    for (const [, p] of a) {
      if (!f(p))
        continue;
      let g = {
        x: p.internals.positionAbsolute.x + x,
        y: p.internals.positionAbsolute.y + S
      };
      o && (g = Wo(g, i));
      const { position: h, positionAbsolute: v } = Cg({
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
const ec = N.createContext(null), sE = ec.Provider;
ec.Consumer;
const fm = () => N.useContext(ec), lE = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), uE = (e, t, n) => (r) => {
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
function aE({ type: e = "source", position: t = K.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: l, children: u, className: a, onMouseDown: d, onTouchStart: c, ...f }, m) {
  var A, D;
  const y = s || null, x = e === "target", S = pe(), p = fm(), { connectOnClick: g, noPanClassName: h, rfId: v } = ne(lE, he), { connectingFrom: _, connectingTo: k, clickConnecting: E, isPossibleEndHandle: T, connectionInProcess: z, clickConnectionInProcess: R, valid: I } = ne(uE(p, y, e), he);
  p || (D = (A = S.getState()).onError) == null || D.call(A, "010", Nt.error010());
  const j = ($) => {
    const { defaultEdgeOptions: C, onConnect: P, hasDefaultEdges: L } = S.getState(), F = {
      ...C,
      ...$
    };
    if (L) {
      const { edges: O, setEdges: U } = S.getState();
      U($g(F, O));
    }
    P == null || P(F), l == null || l(F);
  }, b = ($) => {
    if (!p)
      return;
    const C = Lg($.nativeEvent);
    if (o && (C && $.button === 0 || !C)) {
      const P = S.getState();
      bu.onPointerDown($.nativeEvent, {
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
        onConnect: j,
        isValidConnection: n || P.isValidConnection,
        getTransform: () => S.getState().transform,
        getFromHandle: () => S.getState().connection.fromHandle,
        autoPanSpeed: P.autoPanSpeed,
        dragThreshold: P.connectionDragThreshold
      });
    }
    C ? d == null || d($) : c == null || c($);
  }, M = ($) => {
    const { onClickConnectStart: C, onClickConnectEnd: P, connectionClickStartHandle: L, connectionMode: F, isValidConnection: O, lib: U, rfId: V, nodeLookup: Y, connection: X } = S.getState();
    if (!p || !L && !o)
      return;
    if (!L) {
      C == null || C($.nativeEvent, { nodeId: p, handleId: y, handleType: e }), S.setState({ connectionClickStartHandle: { nodeId: p, type: e, id: y } });
      return;
    }
    const Q = zg($.target), B = n || O, { connection: G, isValid: ee } = bu.isValid($.nativeEvent, {
      handle: {
        nodeId: p,
        id: y,
        type: e
      },
      connectionMode: F,
      fromNodeId: L.nodeId,
      fromHandleId: L.id || null,
      fromType: L.type,
      isValidConnection: B,
      flowId: V,
      doc: Q,
      lib: U,
      nodeLookup: Y
    });
    ee && G && j(G);
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
      valid: I,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!z || T) && (z || R ? i : o)
    }
  ]), onMouseDown: b, onTouchStart: b, onClick: g ? M : void 0, ref: m, ...f, children: u });
}
const Nr = N.memo(lm(aE));
function cE({ data: e, isConnectable: t, sourcePosition: n = K.Bottom }) {
  return w.jsxs(w.Fragment, { children: [e == null ? void 0 : e.label, w.jsx(Nr, { type: "source", position: n, isConnectable: t })] });
}
function fE({ data: e, isConnectable: t, targetPosition: n = K.Top, sourcePosition: r = K.Bottom }) {
  return w.jsxs(w.Fragment, { children: [w.jsx(Nr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, w.jsx(Nr, { type: "source", position: r, isConnectable: t })] });
}
function dE() {
  return null;
}
function hE({ data: e, isConnectable: t, targetPosition: n = K.Top }) {
  return w.jsxs(w.Fragment, { children: [w.jsx(Nr, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const ws = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, hd = {
  input: cE,
  default: fE,
  output: hE,
  group: dE
};
function pE(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const gE = (e) => {
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
function mE({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = pe(), { width: o, height: i, transformString: s, userSelectionActive: l } = ne(gE, he), u = cm(), a = N.useRef(null);
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
const pd = typeof window < "u" ? window : void 0, yE = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function dm({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: l, deleteKeyCode: u, selectionKeyCode: a, selectionOnDrag: d, selectionMode: c, onSelectionStart: f, onSelectionEnd: m, multiSelectionKeyCode: y, panActivationKeyCode: x, zoomActivationKeyCode: S, elementsSelectable: p, zoomOnScroll: g, zoomOnPinch: h, panOnScroll: v, panOnScrollSpeed: _, panOnScrollMode: k, zoomOnDoubleClick: E, panOnDrag: T, defaultViewport: z, translateExtent: R, minZoom: I, maxZoom: j, preventScrolling: b, onSelectionContextMenu: M, noWheelClassName: A, noPanClassName: D, disableKeyboardA11y: $, onViewportChange: C, isControlledViewport: P }) {
  const { nodesSelectionActive: L, userSelectionActive: F } = ne(yE, he), O = Ao(a, { target: pd }), U = Ao(x, { target: pd }), V = U || T, Y = U || v, X = d && V !== !0, Q = O || F || X;
  return Zk({ deleteKeyCode: u, multiSelectionKeyCode: y }), w.jsx(eE, { onPaneContextMenu: i, elementsSelectable: p, zoomOnScroll: g, zoomOnPinch: h, panOnScroll: Y, panOnScrollSpeed: _, panOnScrollMode: k, zoomOnDoubleClick: E, panOnDrag: !O && V, defaultViewport: z, translateExtent: R, minZoom: I, maxZoom: j, zoomActivationKeyCode: S, preventScrolling: b, noWheelClassName: A, noPanClassName: D, onViewportChange: C, isControlledViewport: P, paneClickDistance: l, selectionOnDrag: X, children: w.jsxs(oE, { onSelectionStart: f, onSelectionEnd: m, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: V, isSelecting: !!Q, selectionMode: c, selectionKeyPressed: O, paneClickDistance: l, selectionOnDrag: X, children: [e, L && w.jsx(mE, { onSelectionContextMenu: M, noPanClassName: D, disableKeyboardA11y: $ })] }) });
}
dm.displayName = "FlowRenderer";
const vE = N.memo(dm), xE = (e) => (t) => e ? Wa(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function wE(e) {
  return ne(N.useCallback(xE(e), [e]), he);
}
const SE = (e) => e.updateNodeInternals;
function _E() {
  const e = ne(SE), [t] = N.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
function kE({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
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
function EE({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: l, elementsSelectable: u, nodesConnectable: a, nodesFocusable: d, resizeObserver: c, noDragClassName: f, noPanClassName: m, disableKeyboardA11y: y, rfId: x, nodeTypes: S, nodeClickDistance: p, onError: g }) {
  const { node: h, internals: v, isParent: _ } = ne((B) => {
    const G = B.nodeLookup.get(e), ee = B.parentLookup.has(e);
    return {
      node: G,
      internals: G.internals,
      isParent: ee
    };
  }, he);
  let k = h.type || "default", E = (S == null ? void 0 : S[k]) || hd[k];
  E === void 0 && (g == null || g("003", Nt.error003(k)), k = "default", E = (S == null ? void 0 : S.default) || hd.default);
  const T = !!(h.draggable || l && typeof h.draggable > "u"), z = !!(h.selectable || u && typeof h.selectable > "u"), R = !!(h.connectable || a && typeof h.connectable > "u"), I = !!(h.focusable || d && typeof h.focusable > "u"), j = pe(), b = Tg(h), M = kE({ node: h, nodeType: k, hasDimensions: b, resizeObserver: c }), A = am({
    nodeRef: M,
    disabled: h.hidden || !T,
    noDragClassName: f,
    handleSelector: h.dragHandle,
    nodeId: e,
    isSelectable: z,
    nodeClickDistance: p
  }), D = cm();
  if (h.hidden)
    return null;
  const $ = Ut(h), C = pE(h), P = z || T || t || n || r || o, L = n ? (B) => n(B, { ...v.userNode }) : void 0, F = r ? (B) => r(B, { ...v.userNode }) : void 0, O = o ? (B) => o(B, { ...v.userNode }) : void 0, U = i ? (B) => i(B, { ...v.userNode }) : void 0, V = s ? (B) => s(B, { ...v.userNode }) : void 0, Y = (B) => {
    const { selectNodesOnDrag: G, nodeDragThreshold: ee } = j.getState();
    z && (!G || !T || ee > 0) && Hu({
      id: e,
      store: j,
      nodeRef: M
    }), t && t(B, { ...v.userNode });
  }, X = (B) => {
    if (!(Ig(B.nativeEvent) || y)) {
      if (wg.includes(B.key) && z) {
        const G = B.key === "Escape";
        Hu({
          id: e,
          store: j,
          unselect: G,
          nodeRef: M
        });
      } else if (T && h.selected && Object.prototype.hasOwnProperty.call(ws, B.key)) {
        B.preventDefault();
        const { ariaLabelConfig: G } = j.getState();
        j.setState({
          ariaLiveMessage: G["node.a11yDescription.ariaLiveMessage"]({
            direction: B.key.replace("Arrow", "").toLowerCase(),
            x: ~~v.positionAbsolute.x,
            y: ~~v.positionAbsolute.y
          })
        }), D({
          direction: ws[B.key],
          factor: B.shiftKey ? 4 : 1
        });
      }
    }
  }, Q = () => {
    var ie;
    if (y || !((ie = M.current) != null && ie.matches(":focus-visible")))
      return;
    const { transform: B, width: G, height: ee, autoPanOnNodeFocus: J, setCenter: q } = j.getState();
    if (!J)
      return;
    Wa(/* @__PURE__ */ new Map([[e, h]]), { x: 0, y: 0, width: G, height: ee }, B, !0).length > 0 || q(h.position.x + $.width / 2, h.position.y + $.height / 2, {
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
      selectable: z,
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
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: L, onMouseMove: F, onMouseLeave: O, onContextMenu: U, onClick: Y, onDoubleClick: V, onKeyDown: I ? X : void 0, tabIndex: I ? 0 : void 0, onFocus: I ? Q : void 0, role: h.ariaRole ?? (I ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": y ? void 0 : `${tm}-${x}`, "aria-label": h.ariaLabel, ...h.domAttributes, children: w.jsx(sE, { value: e, children: w.jsx(E, { id: e, data: h.data, type: k, positionAbsoluteX: v.positionAbsolute.x, positionAbsoluteY: v.positionAbsolute.y, selected: h.selected ?? !1, selectable: z, draggable: T, deletable: h.deletable ?? !0, isConnectable: R, sourcePosition: h.sourcePosition, targetPosition: h.targetPosition, dragging: A, dragHandle: h.dragHandle, zIndex: v.z, parentId: h.parentId, ...$ }) }) });
}
var CE = N.memo(EE);
const NE = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function hm(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = ne(NE, he), s = wE(e.onlyRenderVisibleElements), l = _E();
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
    w.jsx(CE, { id: u, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: l, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, u)
  )) });
}
hm.displayName = "NodeRenderer";
const ME = N.memo(hm);
function PE(e) {
  return ne(N.useCallback((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && h_({
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
const TE = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return w.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, DE = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return w.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, gd = {
  [ys.Arrow]: TE,
  [ys.ArrowClosed]: DE
};
function zE(e) {
  const t = pe();
  return N.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(gd, e) ? gd[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", Nt.error009(e)), null);
  }, [e]);
}
const IE = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: l = "auto-start-reverse" }) => {
  const u = zE(t);
  return u ? w.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: l, refX: "0", refY: "0", children: w.jsx(u, { color: n, strokeWidth: s }) }) : null;
}, pm = ({ defaultColor: e, rfId: t }) => {
  const n = ne((i) => i.edges), r = ne((i) => i.defaultEdgeOptions), o = N.useMemo(() => w_(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? w.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: w.jsx("defs", { children: o.map((i) => w.jsx(IE, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
pm.displayName = "MarkerDefinitions";
var LE = N.memo(pm);
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
const jE = N.memo(gm);
function Ko({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u, interactionWidth: a = 20, ...d }) {
  return w.jsxs(w.Fragment, { children: [w.jsx("path", { ...d, d: e, fill: "none", className: Se(["react-flow__edge-path", d.className]) }), a ? w.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: a, className: "react-flow__edge-interaction" }) : null, r && ht(t) && ht(n) ? w.jsx(jE, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u }) : null] });
}
function md({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === K.Left || e === K.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function mm({ sourceX: e, sourceY: t, sourcePosition: n = K.Bottom, targetX: r, targetY: o, targetPosition: i = K.Top }) {
  const [s, l] = md({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [u, a] = md({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [d, c, f, m] = jg({
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
const AE = ym({ isInternal: !1 }), vm = ym({ isInternal: !0 });
AE.displayName = "SimpleBezierEdge";
vm.displayName = "SimpleBezierEdgeInternal";
function xm(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, sourcePosition: m = K.Bottom, targetPosition: y = K.Top, markerEnd: x, markerStart: S, pathOptions: p, interactionWidth: g }) => {
    const [h, v, _] = Ru({
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
const $E = _m({ isInternal: !1 }), km = _m({ isInternal: !0 });
$E.displayName = "StepEdge";
km.displayName = "StepEdgeInternal";
function Em(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: m, markerStart: y, interactionWidth: x }) => {
    const [S, p, g] = Rg({ sourceX: n, sourceY: r, targetX: o, targetY: i }), h = e.isInternal ? void 0 : t;
    return w.jsx(Ko, { id: h, path: S, labelX: p, labelY: g, label: s, labelStyle: l, labelShowBg: u, labelBgStyle: a, labelBgPadding: d, labelBgBorderRadius: c, style: f, markerEnd: m, markerStart: y, interactionWidth: x });
  });
}
const RE = Em({ isInternal: !1 }), Cm = Em({ isInternal: !0 });
RE.displayName = "StraightEdge";
Cm.displayName = "StraightEdgeInternal";
function Nm(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = K.Bottom, targetPosition: l = K.Top, label: u, labelStyle: a, labelShowBg: d, labelBgStyle: c, labelBgPadding: f, labelBgBorderRadius: m, style: y, markerEnd: x, markerStart: S, pathOptions: p, interactionWidth: g }) => {
    const [h, v, _] = Ka({
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
const OE = Nm({ isInternal: !1 }), Mm = Nm({ isInternal: !0 });
OE.displayName = "BezierEdge";
Mm.displayName = "BezierEdgeInternal";
const yd = {
  default: Mm,
  straight: Cm,
  step: km,
  smoothstep: Sm,
  simplebezier: vm
}, vd = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, FE = (e, t, n) => n === K.Left ? e - t : n === K.Right ? e + t : e, bE = (e, t, n) => n === K.Top ? e - t : n === K.Bottom ? e + t : e, xd = "react-flow__edgeupdater";
function wd({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: l }) {
  return w.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: Se([xd, `${xd}-${l}`]), cx: FE(t, r, e), cy: bE(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function HE({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: l, targetPosition: u, onReconnect: a, onReconnectStart: d, onReconnectEnd: c, setReconnecting: f, setUpdateHover: m }) {
  const y = pe(), x = (v, _) => {
    if (v.button !== 0)
      return;
    const { autoPanOnConnect: k, domNode: E, isValidConnection: T, connectionMode: z, connectionRadius: R, lib: I, onConnectStart: j, onConnectEnd: b, cancelConnection: M, nodeLookup: A, rfId: D, panBy: $, updateConnection: C } = y.getState(), P = _.type === "target", L = (U, V) => {
      f(!1), c == null || c(U, n, _.type, V);
    }, F = (U) => a == null ? void 0 : a(n, U), O = (U, V) => {
      f(!0), d == null || d(v, n, _.type), j == null || j(U, V);
    };
    bu.onPointerDown(v.nativeEvent, {
      autoPanOnConnect: k,
      connectionMode: z,
      connectionRadius: R,
      domNode: E,
      handleId: _.id,
      nodeId: _.nodeId,
      nodeLookup: A,
      isTarget: P,
      edgeUpdaterType: _.type,
      lib: I,
      flowId: D,
      cancelConnection: M,
      panBy: $,
      isValidConnection: T,
      onConnect: F,
      onConnectStart: O,
      onConnectEnd: b,
      onReconnectEnd: L,
      updateConnection: C,
      getTransform: () => y.getState().transform,
      getFromHandle: () => y.getState().connection.fromHandle,
      dragThreshold: y.getState().connectionDragThreshold,
      handleDomNode: v.currentTarget
    });
  }, S = (v) => x(v, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), p = (v) => x(v, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), g = () => m(!0), h = () => m(!1);
  return w.jsxs(w.Fragment, { children: [(e === !0 || e === "source") && w.jsx(wd, { position: l, centerX: r, centerY: o, radius: t, onMouseDown: S, onMouseEnter: g, onMouseOut: h, type: "source" }), (e === !0 || e === "target") && w.jsx(wd, { position: u, centerX: i, centerY: s, radius: t, onMouseDown: p, onMouseEnter: g, onMouseOut: h, type: "target" })] });
}
function BE({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: l, onMouseMove: u, onMouseLeave: a, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: m, rfId: y, edgeTypes: x, noPanClassName: S, onError: p, disableKeyboardA11y: g }) {
  let h = ne((q) => q.edgeLookup.get(e));
  const v = ne((q) => q.defaultEdgeOptions);
  h = v ? { ...v, ...h } : h;
  let _ = h.type || "default", k = (x == null ? void 0 : x[_]) || yd[_];
  k === void 0 && (p == null || p("011", Nt.error011(_)), _ = "default", k = (x == null ? void 0 : x.default) || yd.default);
  const E = !!(h.focusable || t && typeof h.focusable > "u"), T = typeof c < "u" && (h.reconnectable || n && typeof h.reconnectable > "u"), z = !!(h.selectable || r && typeof h.selectable > "u"), R = N.useRef(null), [I, j] = N.useState(!1), [b, M] = N.useState(!1), A = pe(), { zIndex: D, sourceX: $, sourceY: C, targetX: P, targetY: L, sourcePosition: F, targetPosition: O } = ne(N.useCallback((q) => {
    const Z = q.nodeLookup.get(h.source), ie = q.nodeLookup.get(h.target);
    if (!Z || !ie)
      return {
        zIndex: h.zIndex,
        ...vd
      };
    const ue = x_({
      id: e,
      sourceNode: Z,
      targetNode: ie,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: q.connectionMode,
      onError: p
    });
    return {
      zIndex: d_({
        selected: h.selected,
        zIndex: h.zIndex,
        sourceNode: Z,
        targetNode: ie,
        elevateOnSelect: q.elevateEdgesOnSelect,
        zIndexMode: q.zIndexMode
      }),
      ...ue || vd
    };
  }, [h.source, h.target, h.sourceHandle, h.targetHandle, h.selected, h.zIndex]), he), U = N.useMemo(() => h.markerStart ? `url('#${Ou(h.markerStart, y)}')` : void 0, [h.markerStart, y]), V = N.useMemo(() => h.markerEnd ? `url('#${Ou(h.markerEnd, y)}')` : void 0, [h.markerEnd, y]);
  if (h.hidden || $ === null || C === null || P === null || L === null)
    return null;
  const Y = (q) => {
    var oe;
    const { addSelectedEdges: Z, unselectNodesAndEdges: ie, multiSelectionActive: ue } = A.getState();
    z && (A.setState({ nodesSelectionActive: !1 }), h.selected && ue ? (ie({ nodes: [], edges: [h] }), (oe = R.current) == null || oe.blur()) : Z([e])), o && o(q, h);
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
    if (!g && wg.includes(q.key) && z) {
      const { unselectNodesAndEdges: ie, addSelectedEdges: ue } = A.getState();
      q.key === "Escape" ? ((Z = R.current) == null || Z.blur(), ie({ edges: [h] })) : ue([e]);
    }
  };
  return w.jsx("svg", { style: { zIndex: D }, children: w.jsxs("g", { className: Se([
    "react-flow__edge",
    `react-flow__edge-${_}`,
    h.className,
    S,
    {
      selected: h.selected,
      animated: h.animated,
      inactive: !z && !o,
      updating: I,
      selectable: z
    }
  ]), onClick: Y, onDoubleClick: X, onContextMenu: Q, onMouseEnter: B, onMouseMove: G, onMouseLeave: ee, onKeyDown: E ? J : void 0, tabIndex: E ? 0 : void 0, role: h.ariaRole ?? (E ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": h.ariaLabel === null ? void 0 : h.ariaLabel || `Edge from ${h.source} to ${h.target}`, "aria-describedby": E ? `${nm}-${y}` : void 0, ref: R, ...h.domAttributes, children: [!b && w.jsx(k, { id: e, source: h.source, target: h.target, type: h.type, selected: h.selected, animated: h.animated, selectable: z, deletable: h.deletable ?? !0, label: h.label, labelStyle: h.labelStyle, labelShowBg: h.labelShowBg, labelBgStyle: h.labelBgStyle, labelBgPadding: h.labelBgPadding, labelBgBorderRadius: h.labelBgBorderRadius, sourceX: $, sourceY: C, targetX: P, targetY: L, sourcePosition: F, targetPosition: O, data: h.data, style: h.style, sourceHandleId: h.sourceHandle, targetHandleId: h.targetHandle, markerStart: U, markerEnd: V, pathOptions: "pathOptions" in h ? h.pathOptions : void 0, interactionWidth: h.interactionWidth }), T && w.jsx(HE, { edge: h, isReconnectable: T, reconnectRadius: d, onReconnect: c, onReconnectStart: f, onReconnectEnd: m, sourceX: $, sourceY: C, targetX: P, targetY: L, sourcePosition: F, targetPosition: O, setUpdateHover: j, setReconnecting: M })] }) });
}
var VE = N.memo(BE);
const UE = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function Pm({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: l, onEdgeMouseMove: u, onEdgeMouseLeave: a, onEdgeClick: d, reconnectRadius: c, onEdgeDoubleClick: f, onReconnectStart: m, onReconnectEnd: y, disableKeyboardA11y: x }) {
  const { edgesFocusable: S, edgesReconnectable: p, elementsSelectable: g, onError: h } = ne(UE, he), v = PE(t);
  return w.jsxs("div", { className: "react-flow__edges", children: [w.jsx(LE, { defaultColor: e, rfId: n }), v.map((_) => w.jsx(VE, { id: _, edgesFocusable: S, edgesReconnectable: p, elementsSelectable: g, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: l, onMouseMove: u, onMouseLeave: a, onClick: d, reconnectRadius: c, onDoubleClick: f, onReconnectStart: m, onReconnectEnd: y, rfId: n, onError: h, edgeTypes: r, disableKeyboardA11y: x }, _))] });
}
Pm.displayName = "EdgeRenderer";
const WE = N.memo(Pm), YE = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function XE({ children: e }) {
  const t = ne(YE);
  return w.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function KE(e) {
  const t = qe(), n = N.useRef(!1);
  N.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const QE = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function GE(e) {
  const t = ne(QE), n = pe();
  return N.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function ZE(e) {
  return e.connection.inProgress ? { ...e.connection, to: Yo(e.connection.to, e.transform) } : { ...e.connection };
}
function qE(e) {
  return ZE;
}
function JE(e) {
  const t = qE();
  return ne(t, he);
}
const eC = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function tC({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: l, inProgress: u } = ne(eC, he);
  return !(i && o && u) ? null : w.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: w.jsx("g", { className: Se(["react-flow__connection", kg(l)]), children: w.jsx(Tm, { style: t, type: n, CustomComponent: r, isValid: l }) }) });
}
const Tm = ({ style: e, type: t = Jt.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: l, fromPosition: u, to: a, toNode: d, toHandle: c, toPosition: f, pointer: m } = JE();
  if (!o)
    return;
  if (n)
    return w.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: l, fromX: i.x, fromY: i.y, toX: a.x, toY: a.y, fromPosition: u, toPosition: f, connectionStatus: kg(r), toNode: d, toHandle: c, pointer: m });
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
      [y] = Ka(x);
      break;
    case Jt.SimpleBezier:
      [y] = mm(x);
      break;
    case Jt.Step:
      [y] = Ru({
        ...x,
        borderRadius: 0
      });
      break;
    case Jt.SmoothStep:
      [y] = Ru(x);
      break;
    default:
      [y] = Rg(x);
  }
  return w.jsx("path", { d: y, fill: "none", className: "react-flow__connection-path", style: e });
};
Tm.displayName = "ConnectionLine";
const nC = {};
function Sd(e = nC) {
  N.useRef(e), pe(), N.useEffect(() => {
  }, [e]);
}
function rC() {
  pe(), N.useRef(!1), N.useEffect(() => {
  }, []);
}
function Dm({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: l, onNodeMouseMove: u, onNodeMouseLeave: a, onNodeContextMenu: d, onSelectionContextMenu: c, onSelectionStart: f, onSelectionEnd: m, connectionLineType: y, connectionLineStyle: x, connectionLineComponent: S, connectionLineContainerStyle: p, selectionKeyCode: g, selectionOnDrag: h, selectionMode: v, multiSelectionKeyCode: _, panActivationKeyCode: k, zoomActivationKeyCode: E, deleteKeyCode: T, onlyRenderVisibleElements: z, elementsSelectable: R, defaultViewport: I, translateExtent: j, minZoom: b, maxZoom: M, preventScrolling: A, defaultMarkerColor: D, zoomOnScroll: $, zoomOnPinch: C, panOnScroll: P, panOnScrollSpeed: L, panOnScrollMode: F, zoomOnDoubleClick: O, panOnDrag: U, onPaneClick: V, onPaneMouseEnter: Y, onPaneMouseMove: X, onPaneMouseLeave: Q, onPaneScroll: B, onPaneContextMenu: G, paneClickDistance: ee, nodeClickDistance: J, onEdgeContextMenu: q, onEdgeMouseEnter: Z, onEdgeMouseMove: ie, onEdgeMouseLeave: ue, reconnectRadius: oe, onReconnect: Te, onReconnectStart: Wt, onReconnectEnd: Pt, noDragClassName: yn, noWheelClassName: Dr, noPanClassName: zr, disableKeyboardA11y: Ir, nodeExtent: Qs, rfId: Qo, viewport: bn, onViewportChange: Lr }) {
  return Sd(e), Sd(t), rC(), KE(n), GE(bn), w.jsx(vE, { onPaneClick: V, onPaneMouseEnter: Y, onPaneMouseMove: X, onPaneMouseLeave: Q, onPaneContextMenu: G, onPaneScroll: B, paneClickDistance: ee, deleteKeyCode: T, selectionKeyCode: g, selectionOnDrag: h, selectionMode: v, onSelectionStart: f, onSelectionEnd: m, multiSelectionKeyCode: _, panActivationKeyCode: k, zoomActivationKeyCode: E, elementsSelectable: R, zoomOnScroll: $, zoomOnPinch: C, zoomOnDoubleClick: O, panOnScroll: P, panOnScrollSpeed: L, panOnScrollMode: F, panOnDrag: U, defaultViewport: I, translateExtent: j, minZoom: b, maxZoom: M, onSelectionContextMenu: c, preventScrolling: A, noDragClassName: yn, noWheelClassName: Dr, noPanClassName: zr, disableKeyboardA11y: Ir, onViewportChange: Lr, isControlledViewport: !!bn, children: w.jsxs(XE, { children: [w.jsx(WE, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: Te, onReconnectStart: Wt, onReconnectEnd: Pt, onlyRenderVisibleElements: z, onEdgeContextMenu: q, onEdgeMouseEnter: Z, onEdgeMouseMove: ie, onEdgeMouseLeave: ue, reconnectRadius: oe, defaultMarkerColor: D, noPanClassName: zr, disableKeyboardA11y: Ir, rfId: Qo }), w.jsx(tC, { style: x, type: y, component: S, containerStyle: p }), w.jsx("div", { className: "react-flow__edgelabel-renderer" }), w.jsx(ME, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: l, onNodeMouseMove: u, onNodeMouseLeave: a, onNodeContextMenu: d, nodeClickDistance: J, onlyRenderVisibleElements: z, noPanClassName: zr, noDragClassName: yn, disableKeyboardA11y: Ir, nodeExtent: Qs, rfId: Qo }), w.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
Dm.displayName = "GraphView";
const oC = N.memo(Dm), _d = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: u = 0.5, maxZoom: a = 2, nodeOrigin: d, nodeExtent: c, zIndexMode: f = "basic" } = {}) => {
  const m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), p = r ?? t ?? [], g = n ?? e ?? [], h = d ?? [0, 0], v = c ?? zo;
  bg(x, S, p);
  const _ = Fu(g, m, y, {
    nodeOrigin: h,
    nodeExtent: v,
    zIndexMode: f
  });
  let k = [0, 0, 1];
  if (s && o && i) {
    const E = Uo(m, {
      filter: (I) => !!((I.width || I.initialWidth) && (I.height || I.initialHeight))
    }), { x: T, y: z, zoom: R } = Ya(E, o, i, u, a, (l == null ? void 0 : l.padding) ?? 0.1);
    k = [T, z, R];
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
    connection: { ..._g },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: s_,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: Sg,
    zIndexMode: f,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, iC = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: l, minZoom: u, maxZoom: a, nodeOrigin: d, nodeExtent: c, zIndexMode: f }) => kk((m, y) => {
  async function x() {
    const { nodeLookup: S, panZoom: p, fitViewOptions: g, fitViewResolver: h, width: v, height: _, minZoom: k, maxZoom: E } = y();
    p && (await o_({
      nodes: S,
      width: v,
      height: _,
      panZoom: p,
      minZoom: k,
      maxZoom: E
    }, g), h == null || h.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ..._d({
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
      const { nodeLookup: p, parentLookup: g, nodeOrigin: h, elevateNodesOnSelect: v, fitViewQueued: _, zIndexMode: k } = y(), E = Fu(S, p, g, {
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
      const { triggerNodeChanges: p, nodeLookup: g, parentLookup: h, domNode: v, nodeOrigin: _, nodeExtent: k, debug: E, fitViewQueued: T, zIndexMode: z } = y(), { changes: R, updatedInternals: I } = M_(S, g, h, v, _, k, z);
      I && (k_(g, h, { nodeOrigin: _, nodeExtent: k, zIndexMode: z }), T ? (x(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (R == null ? void 0 : R.length) > 0 && (E && console.log("React Flow: trigger node changes", R), p == null || p(R)));
    },
    updateNodePositions: (S, p = !1) => {
      const g = [];
      let h = [];
      const { nodeLookup: v, triggerNodeChanges: _, connection: k, updateConnection: E, onNodesChangeMiddlewareMap: T } = y();
      for (const [z, R] of S) {
        const I = v.get(z), j = !!(I != null && I.expandParent && (I != null && I.parentId) && (R != null && R.position)), b = {
          id: z,
          type: "position",
          position: j ? {
            x: Math.max(0, R.position.x),
            y: Math.max(0, R.position.y)
          } : R.position,
          dragging: p
        };
        if (I && k.inProgress && k.fromNode.id === I.id) {
          const M = Rn(I, k.fromHandle, K.Left, !0);
          E({ ...k, from: M });
        }
        j && I.parentId && g.push({
          id: z,
          parentId: I.parentId,
          rect: {
            ...R.internals.positionAbsolute,
            width: R.measured.width ?? 0,
            height: R.measured.height ?? 0
          }
        }), h.push(b);
      }
      if (g.length > 0) {
        const { parentLookup: z, nodeOrigin: R } = y(), I = Ja(g, v, z, R);
        h.push(...I);
      }
      for (const z of T.values())
        h = z(h);
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
      const { edges: g, nodes: h, nodeLookup: v, triggerNodeChanges: _, triggerEdgeChanges: k } = y(), E = S || h, T = p || g, z = E.map((I) => {
        const j = v.get(I.id);
        return j && (j.selected = !1), wn(I.id, !1);
      }), R = T.map((I) => wn(I.id, !1));
      _(z), k(R);
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
      S[0][0] === k[0][0] && S[0][1] === k[0][1] && S[1][0] === k[1][0] && S[1][1] === k[1][1] || (Fu(p, g, h, {
        nodeOrigin: v,
        nodeExtent: S,
        elevateNodesOnSelect: _,
        checkEquality: !1,
        zIndexMode: E
      }), m({ nodeExtent: S }));
    },
    panBy: (S) => {
      const { transform: p, width: g, height: h, panZoom: v, translateExtent: _ } = y();
      return P_({ delta: S, panZoom: v, transform: p, translateExtent: _, width: g, height: h });
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
        connection: { ..._g }
      });
    },
    updateConnection: (S) => {
      m({ connection: S });
    },
    reset: () => m({ ..._d() })
  };
}, Object.is);
function zm({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: l, initialFitViewOptions: u, fitView: a, nodeOrigin: d, nodeExtent: c, zIndexMode: f, children: m }) {
  const [y] = N.useState(() => iC({
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
  return w.jsx(Ek, { value: y, children: w.jsx(Xk, { children: m }) });
}
function sC({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: l, fitViewOptions: u, minZoom: a, maxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: m }) {
  return N.useContext(Ys) ? w.jsx(w.Fragment, { children: e }) : w.jsx(zm, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: l, initialFitViewOptions: u, initialMinZoom: a, initialMaxZoom: d, nodeOrigin: c, nodeExtent: f, zIndexMode: m, children: e });
}
const lC = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function uC({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: l, onEdgeClick: u, onInit: a, onMove: d, onMoveStart: c, onMoveEnd: f, onConnect: m, onConnectStart: y, onConnectEnd: x, onClickConnectStart: S, onClickConnectEnd: p, onNodeMouseEnter: g, onNodeMouseMove: h, onNodeMouseLeave: v, onNodeContextMenu: _, onNodeDoubleClick: k, onNodeDragStart: E, onNodeDrag: T, onNodeDragStop: z, onNodesDelete: R, onEdgesDelete: I, onDelete: j, onSelectionChange: b, onSelectionDragStart: M, onSelectionDrag: A, onSelectionDragStop: D, onSelectionContextMenu: $, onSelectionStart: C, onSelectionEnd: P, onBeforeDelete: L, connectionMode: F, connectionLineType: O = Jt.Bezier, connectionLineStyle: U, connectionLineComponent: V, connectionLineContainerStyle: Y, deleteKeyCode: X = "Backspace", selectionKeyCode: Q = "Shift", selectionOnDrag: B = !1, selectionMode: G = Io.Full, panActivationKeyCode: ee = "Space", multiSelectionKeyCode: J = jo() ? "Meta" : "Control", zoomActivationKeyCode: q = jo() ? "Meta" : "Control", snapToGrid: Z, snapGrid: ie, onlyRenderVisibleElements: ue = !1, selectNodesOnDrag: oe, nodesDraggable: Te, autoPanOnNodeFocus: Wt, nodesConnectable: Pt, nodesFocusable: yn, nodeOrigin: Dr = rm, edgesFocusable: zr, edgesReconnectable: Ir, elementsSelectable: Qs = !0, defaultViewport: Qo = Rk, minZoom: bn = 0.5, maxZoom: Lr = 2, translateExtent: rc = zo, preventScrolling: Xm = !0, nodeExtent: Gs, defaultMarkerColor: Km = "#b1b1b7", zoomOnScroll: Qm = !0, zoomOnPinch: Gm = !0, panOnScroll: Zm = !1, panOnScrollSpeed: qm = 0.5, panOnScrollMode: Jm = Pn.Free, zoomOnDoubleClick: e0 = !0, panOnDrag: t0 = !0, onPaneClick: n0, onPaneMouseEnter: r0, onPaneMouseMove: o0, onPaneMouseLeave: i0, onPaneScroll: s0, onPaneContextMenu: l0, paneClickDistance: u0 = 1, nodeClickDistance: a0 = 0, children: c0, onReconnect: f0, onReconnectStart: d0, onReconnectEnd: h0, onEdgeContextMenu: p0, onEdgeDoubleClick: g0, onEdgeMouseEnter: m0, onEdgeMouseMove: y0, onEdgeMouseLeave: v0, reconnectRadius: x0 = 10, onNodesChange: w0, onEdgesChange: S0, noDragClassName: _0 = "nodrag", noWheelClassName: k0 = "nowheel", noPanClassName: oc = "nopan", fitView: ic, fitViewOptions: sc, connectOnClick: E0, attributionPosition: C0, proOptions: N0, defaultEdgeOptions: M0, elevateNodesOnSelect: P0 = !0, elevateEdgesOnSelect: T0 = !1, disableKeyboardA11y: lc = !1, autoPanOnConnect: D0, autoPanOnNodeDrag: z0, autoPanSpeed: I0, connectionRadius: L0, isValidConnection: j0, onError: A0, style: $0, id: uc, nodeDragThreshold: R0, connectionDragThreshold: O0, viewport: F0, onViewportChange: b0, width: H0, height: B0, colorMode: V0 = "light", debug: U0, onScroll: Go, ariaLabelConfig: W0, zIndexMode: ac = "basic", ...Y0 }, X0) {
  const Zs = uc || "1", K0 = Hk(V0), Q0 = N.useCallback((cc) => {
    cc.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Go == null || Go(cc);
  }, [Go]);
  return w.jsx("div", { "data-testid": "rf__wrapper", ...Y0, onScroll: Q0, style: { ...$0, ...lC }, ref: X0, className: Se(["react-flow", o, K0]), id: uc, role: "application", children: w.jsxs(sC, { nodes: e, edges: t, width: H0, height: B0, fitView: ic, fitViewOptions: sc, minZoom: bn, maxZoom: Lr, nodeOrigin: Dr, nodeExtent: Gs, zIndexMode: ac, children: [w.jsx(oC, { onInit: a, onNodeClick: l, onEdgeClick: u, onNodeMouseEnter: g, onNodeMouseMove: h, onNodeMouseLeave: v, onNodeContextMenu: _, onNodeDoubleClick: k, nodeTypes: i, edgeTypes: s, connectionLineType: O, connectionLineStyle: U, connectionLineComponent: V, connectionLineContainerStyle: Y, selectionKeyCode: Q, selectionOnDrag: B, selectionMode: G, deleteKeyCode: X, multiSelectionKeyCode: J, panActivationKeyCode: ee, zoomActivationKeyCode: q, onlyRenderVisibleElements: ue, defaultViewport: Qo, translateExtent: rc, minZoom: bn, maxZoom: Lr, preventScrolling: Xm, zoomOnScroll: Qm, zoomOnPinch: Gm, zoomOnDoubleClick: e0, panOnScroll: Zm, panOnScrollSpeed: qm, panOnScrollMode: Jm, panOnDrag: t0, onPaneClick: n0, onPaneMouseEnter: r0, onPaneMouseMove: o0, onPaneMouseLeave: i0, onPaneScroll: s0, onPaneContextMenu: l0, paneClickDistance: u0, nodeClickDistance: a0, onSelectionContextMenu: $, onSelectionStart: C, onSelectionEnd: P, onReconnect: f0, onReconnectStart: d0, onReconnectEnd: h0, onEdgeContextMenu: p0, onEdgeDoubleClick: g0, onEdgeMouseEnter: m0, onEdgeMouseMove: y0, onEdgeMouseLeave: v0, reconnectRadius: x0, defaultMarkerColor: Km, noDragClassName: _0, noWheelClassName: k0, noPanClassName: oc, rfId: Zs, disableKeyboardA11y: lc, nodeExtent: Gs, viewport: F0, onViewportChange: b0 }), w.jsx(bk, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: m, onConnectStart: y, onConnectEnd: x, onClickConnectStart: S, onClickConnectEnd: p, nodesDraggable: Te, autoPanOnNodeFocus: Wt, nodesConnectable: Pt, nodesFocusable: yn, edgesFocusable: zr, edgesReconnectable: Ir, elementsSelectable: Qs, elevateNodesOnSelect: P0, elevateEdgesOnSelect: T0, minZoom: bn, maxZoom: Lr, nodeExtent: Gs, onNodesChange: w0, onEdgesChange: S0, snapToGrid: Z, snapGrid: ie, connectionMode: F, translateExtent: rc, connectOnClick: E0, defaultEdgeOptions: M0, fitView: ic, fitViewOptions: sc, onNodesDelete: R, onEdgesDelete: I, onDelete: j, onNodeDragStart: E, onNodeDrag: T, onNodeDragStop: z, onSelectionDrag: A, onSelectionDragStart: M, onSelectionDragStop: D, onMove: d, onMoveStart: c, onMoveEnd: f, noPanClassName: oc, nodeOrigin: Dr, rfId: Zs, autoPanOnConnect: D0, autoPanOnNodeDrag: z0, autoPanSpeed: I0, onError: A0, connectionRadius: L0, isValidConnection: j0, selectNodesOnDrag: oe, nodeDragThreshold: R0, connectionDragThreshold: O0, onBeforeDelete: L, debug: U0, ariaLabelConfig: W0, zIndexMode: ac }), w.jsx($k, { onSelectionChange: b }), c0, w.jsx(zk, { proOptions: N0, position: C0 }), w.jsx(Dk, { rfId: Zs, disableKeyboardA11y: lc })] }) });
}
var aC = lm(uC);
const cC = (e) => {
  var t;
  return (t = e.domNode) == null ? void 0 : t.querySelector(".react-flow__edgelabel-renderer");
};
function fC({ children: e }) {
  const t = ne(cC);
  return t ? Bp.createPortal(e, t) : null;
}
function dC(e) {
  const [t, n] = N.useState(e), r = N.useCallback((o) => n((i) => im(o, i)), []);
  return [t, n, r];
}
function hC(e) {
  const [t, n] = N.useState(e), r = N.useCallback((o) => n((i) => sm(o, i)), []);
  return [t, n, r];
}
function pC({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return w.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: Se(["react-flow__background-pattern", n, r]) });
}
function gC({ radius: e, className: t }) {
  return w.jsx("circle", { cx: e, cy: e, r: e, className: Se(["react-flow__background-pattern", "dots", t]) });
}
var Rt;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Rt || (Rt = {}));
const mC = {
  [Rt.Dots]: 1,
  [Rt.Lines]: 1,
  [Rt.Cross]: 6
}, yC = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
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
  const c = N.useRef(null), { transform: f, patternId: m } = ne(yC, he), y = r || mC[t], x = t === Rt.Dots, S = t === Rt.Cross, p = Array.isArray(n) ? n : [n, n], g = [p[0] * f[2] || 1, p[1] * f[2] || 1], h = y * f[2], v = Array.isArray(i) ? i : [i, i], _ = S ? [h, h] : g, k = [
    v[0] * f[2] || 1 + _[0] / 2,
    v[1] * f[2] || 1 + _[1] / 2
  ], E = `${m}${e || ""}`;
  return w.jsxs("svg", { className: Se(["react-flow__background", a]), style: {
    ...u,
    ...Xs,
    "--xy-background-color-props": l,
    "--xy-background-pattern-color-props": s
  }, ref: c, "data-testid": "rf__background", children: [w.jsx("pattern", { id: E, x: f[0] % g[0], y: f[1] % g[1], width: g[0], height: g[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${k[0]},-${k[1]})`, children: x ? w.jsx(gC, { radius: h / 2, className: d }) : w.jsx(pC, { dimensions: _, lineWidth: o, variant: t, className: d }) }), w.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${E})` })] });
}
Im.displayName = "Background";
const vC = N.memo(Im);
function xC() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: w.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function wC() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: w.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function SC() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: w.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function _C() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: w.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function kC() {
  return w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: w.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function _i({ children: e, className: t, ...n }) {
  return w.jsx("button", { type: "button", className: Se(["react-flow__controls-button", t]), ...n, children: e });
}
const EC = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function Lm({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: l, onInteractiveChange: u, className: a, children: d, position: c = "bottom-left", orientation: f = "vertical", "aria-label": m }) {
  const y = pe(), { isInteractive: x, minZoomReached: S, maxZoomReached: p, ariaLabelConfig: g } = ne(EC, he), { zoomIn: h, zoomOut: v, fitView: _ } = qe(), k = () => {
    h(), i == null || i();
  }, E = () => {
    v(), s == null || s();
  }, T = () => {
    _(o), l == null || l();
  }, z = () => {
    y.setState({
      nodesDraggable: !x,
      nodesConnectable: !x,
      elementsSelectable: !x
    }), u == null || u(!x);
  }, R = f === "horizontal" ? "horizontal" : "vertical";
  return w.jsxs(Xo, { className: Se(["react-flow__controls", R, a]), position: c, style: e, "data-testid": "rf__controls", "aria-label": m ?? g["controls.ariaLabel"], children: [t && w.jsxs(w.Fragment, { children: [w.jsx(_i, { onClick: k, className: "react-flow__controls-zoomin", title: g["controls.zoomIn.ariaLabel"], "aria-label": g["controls.zoomIn.ariaLabel"], disabled: p, children: w.jsx(xC, {}) }), w.jsx(_i, { onClick: E, className: "react-flow__controls-zoomout", title: g["controls.zoomOut.ariaLabel"], "aria-label": g["controls.zoomOut.ariaLabel"], disabled: S, children: w.jsx(wC, {}) })] }), n && w.jsx(_i, { className: "react-flow__controls-fitview", onClick: T, title: g["controls.fitView.ariaLabel"], "aria-label": g["controls.fitView.ariaLabel"], children: w.jsx(SC, {}) }), r && w.jsx(_i, { className: "react-flow__controls-interactive", onClick: z, title: g["controls.interactive.ariaLabel"], "aria-label": g["controls.interactive.ariaLabel"], children: x ? w.jsx(kC, {}) : w.jsx(_C, {}) }), d] });
}
Lm.displayName = "Controls";
const CC = N.memo(Lm);
function NC({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: l, strokeWidth: u, className: a, borderRadius: d, shapeRendering: c, selected: f, onClick: m }) {
  const { background: y, backgroundColor: x } = i || {}, S = s || y || x;
  return w.jsx("rect", { className: Se(["react-flow__minimap-node", { selected: f }, a]), x: t, y: n, rx: d, ry: d, width: r, height: o, style: {
    fill: S,
    stroke: l,
    strokeWidth: u
  }, shapeRendering: c, onClick: m ? (p) => m(p, e) : void 0 });
}
const MC = N.memo(NC), PC = (e) => e.nodes.map((t) => t.id), Ll = (e) => e instanceof Function ? e : () => e;
function TC({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = MC,
  onClick: s
}) {
  const l = ne(PC, he), u = Ll(t), a = Ll(e), d = Ll(n), c = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return w.jsx(w.Fragment, { children: l.map((f) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    w.jsx(zC, { id: f, nodeColorFunc: u, nodeStrokeColorFunc: a, nodeClassNameFunc: d, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: c }, f)
  )) });
}
function DC({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: l, onClick: u }) {
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
  return !a || a.hidden || !Tg(a) ? null : w.jsx(l, { x: d, y: c, width: f, height: m, style: a.style, selected: !!a.selected, className: r(a), color: t(a), borderRadius: o, strokeColor: n(a), strokeWidth: i, shapeRendering: s, onClick: u, id: a.id });
}
const zC = N.memo(DC);
var IC = N.memo(TC);
const LC = 200, jC = 150, AC = (e) => !e.hidden, $C = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? Pg(Uo(e.nodeLookup, { filter: AC }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, RC = "react-flow__minimap-desc";
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
  const _ = pe(), k = N.useRef(null), { boundingRect: E, viewBB: T, rfId: z, panZoom: R, translateExtent: I, flowWidth: j, flowHeight: b, ariaLabelConfig: M } = ne($C, he), A = (e == null ? void 0 : e.width) ?? LC, D = (e == null ? void 0 : e.height) ?? jC, $ = E.width / A, C = E.height / D, P = Math.max($, C), L = P * A, F = P * D, O = v * P, U = E.x - (L - E.width) / 2 - O, V = E.y - (F - E.height) / 2 - O, Y = L + O * 2, X = F + O * 2, Q = `${RC}-${z}`, B = N.useRef(0), G = N.useRef();
  B.current = P, N.useEffect(() => {
    if (k.current && R)
      return G.current = R_({
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
      translateExtent: I,
      width: j,
      height: b,
      inversePan: g,
      pannable: x,
      zoomStep: h,
      zoomable: S
    });
  }, [x, S, g, h, I, j, b]);
  const ee = m ? (Z) => {
    var oe;
    const [ie, ue] = ((oe = G.current) == null ? void 0 : oe.pointer(Z)) || [0, 0];
    m(Z, { x: ie, y: ue });
  } : void 0, J = y ? N.useCallback((Z, ie) => {
    const ue = _.getState().nodeLookup.get(ie).internals.userNode;
    y(Z, ue);
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
  }, className: Se(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: w.jsxs("svg", { width: A, height: D, viewBox: `${U} ${V} ${Y} ${X}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": Q, ref: k, onClick: ee, children: [q && w.jsx("title", { id: Q, children: q }), w.jsx(IC, { onClick: J, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: l }), w.jsx("path", { className: "react-flow__minimap-mask", d: `M${U - O},${V - O}h${Y + O * 2}v${X + O * 2}h${-Y - O * 2}z
        M${T.x},${T.y}h${T.width}v${T.height}h${-T.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
jm.displayName = "MiniMap";
const OC = N.memo(jm), FC = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, bC = {
  [Er.Line]: "right",
  [Er.Handle]: "bottom-right"
};
function HC({ nodeId: e, position: t, variant: n = Er.Handle, className: r, style: o = void 0, children: i, color: s, minWidth: l = 10, minHeight: u = 10, maxWidth: a = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: c = !1, resizeDirection: f, autoScale: m = !0, shouldResize: y, onResizeStart: x, onResize: S, onResizeEnd: p }) {
  const g = fm(), h = typeof e == "string" ? e : g, v = pe(), _ = N.useRef(null), k = n === Er.Handle, E = ne(N.useCallback(FC(k && m), [k, m]), he), T = N.useRef(null), z = t ?? bC[n];
  N.useEffect(() => {
    if (!(!_.current || !h))
      return T.current || (T.current = Z_({
        domNode: _.current,
        nodeId: h,
        getStoreItems: () => {
          const { nodeLookup: I, transform: j, snapGrid: b, snapToGrid: M, nodeOrigin: A, domNode: D } = v.getState();
          return {
            nodeLookup: I,
            transform: j,
            snapGrid: b,
            snapToGrid: M,
            nodeOrigin: A,
            paneDomNode: D
          };
        },
        onChange: (I, j) => {
          const { triggerNodeChanges: b, nodeLookup: M, parentLookup: A, nodeOrigin: D } = v.getState(), $ = [], C = { x: I.x, y: I.y }, P = M.get(h);
          if (P && P.expandParent && P.parentId) {
            const L = P.origin ?? D, F = I.width ?? P.measured.width ?? 0, O = I.height ?? P.measured.height ?? 0, U = {
              id: P.id,
              parentId: P.parentId,
              rect: {
                width: F,
                height: O,
                ...Dg({
                  x: I.x ?? P.position.x,
                  y: I.y ?? P.position.y
                }, { width: F, height: O }, P.parentId, M, L)
              }
            }, V = Ja([U], M, A, D);
            $.push(...V), C.x = I.x ? Math.max(L[0] * F, I.x) : void 0, C.y = I.y ? Math.max(L[1] * O, I.y) : void 0;
          }
          if (C.x !== void 0 && C.y !== void 0) {
            const L = {
              id: h,
              type: "position",
              position: { ...C }
            };
            $.push(L);
          }
          if (I.width !== void 0 && I.height !== void 0) {
            const F = {
              id: h,
              type: "dimensions",
              resizing: !0,
              setAttributes: f ? f === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: I.width,
                height: I.height
              }
            };
            $.push(F);
          }
          for (const L of j) {
            const F = {
              ...L,
              type: "position"
            };
            $.push(F);
          }
          b($);
        },
        onEnd: ({ width: I, height: j }) => {
          const b = {
            id: h,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: I,
              height: j
            }
          };
          v.getState().triggerNodeChanges([b]);
        }
      })), T.current.update({
        controlPosition: z,
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
        var I;
        (I = T.current) == null || I.destroy();
      };
  }, [
    z,
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
  const R = z.split("-");
  return w.jsx("div", { className: Se(["react-flow__resize-control", "nodrag", ...R, n, r]), ref: _, style: {
    ...o,
    scale: E,
    ...s && { [k ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
N.memo(HC);
const ce = {
  fact: { light: "#3B5998", dark: "#7B9BD2" },
  idea: { light: "#D4A017", dark: "#E8C65A" },
  question: { light: "#7B3FA0", dark: "#B07DD6" },
  constraint: { light: "#C0392B", dark: "#E07B6F" },
  thesis: { light: "#1B5420", dark: "#4A9E54" },
  action: { light: "#0E7490", dark: "#38B2CC" },
  data_collection: { light: "#4338CA", dark: "#7C74E0" },
  untyped: { light: "#9CA3AF", dark: "#6B7280" }
}, BC = {
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
    defaultData: { label: "", text: "", source: "" }
  },
  idea: {
    component: null,
    label: "Idea",
    headerColor: ce.idea.light,
    headerColorDark: ce.idea.dark,
    icon: "idea",
    defaultData: { label: "", text: "" }
  },
  question: {
    component: null,
    label: "Question",
    headerColor: ce.question.light,
    headerColorDark: ce.question.dark,
    icon: "question",
    defaultData: { label: "", text: "" }
  },
  constraint: {
    component: null,
    label: "Constraint",
    headerColor: ce.constraint.light,
    headerColorDark: ce.constraint.dark,
    icon: "constraint",
    defaultData: { label: "", text: "" }
  },
  thesis: {
    component: null,
    label: "Thesis",
    headerColor: ce.thesis.light,
    headerColorDark: ce.thesis.dark,
    icon: "thesis",
    defaultData: { label: "", text: "" }
  },
  action: {
    component: null,
    label: "Action",
    headerColor: ce.action.light,
    headerColorDark: ce.action.dark,
    icon: "action",
    defaultData: { label: "", text: "", state: "empty", workflow_type: "", workflow_config_name: "" }
  },
  data_collection: {
    component: null,
    label: "Data Collection",
    headerColor: ce.data_collection.light,
    headerColorDark: ce.data_collection.dark,
    icon: "data_collection",
    defaultData: { label: "", text: "", db_endpoint: "", patent_nrs: [], query_filter: {} }
  },
  untyped: {
    component: null,
    label: "Untyped",
    headerColor: ce.untyped.light,
    headerColorDark: ce.untyped.dark,
    icon: "untyped",
    defaultData: { label: "", text: "" }
  }
}, Am = Object.keys(it), VC = [
  "idea",
  "question",
  "fact",
  "constraint",
  "thesis",
  "action",
  "data_collection",
  "untyped"
];
function tc({ type: e, size: t = 16, color: n }) {
  var i;
  const r = BC[e];
  if (!r) return null;
  const o = n ?? ((i = ce[e]) == null ? void 0 : i.light) ?? "#9CA3AF";
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
          /* @__PURE__ */ w.jsx(tc, { type: n, size: 16, color: "currentColor" }),
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
  const { updateNodeData: r } = qe(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.source || "", d = t.label || "", c = N.useCallback(() => {
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
  const { updateNodeData: r } = qe(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = N.useCallback(() => {
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
    mn,
    {
      type: "idea",
      label: a,
      icon: "idea",
      headerColor: ce.idea.light,
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
  const { updateNodeData: r } = qe(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = N.useCallback(() => {
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
    mn,
    {
      type: "question",
      label: a,
      icon: "question",
      headerColor: ce.question.light,
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
  const { updateNodeData: r } = qe(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = t.parameter || "", c = t.min, f = t.max, m = t.unit || "", y = d || c !== void 0 || f !== void 0, x = N.useCallback(() => {
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
    mn,
    {
      type: "constraint",
      label: a,
      icon: "constraint",
      headerColor: ce.constraint.light,
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
  const { updateNodeData: r } = qe(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = N.useCallback(() => {
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
    mn,
    {
      type: "thesis",
      label: a,
      icon: "thesis",
      headerColor: ce.thesis.light,
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
const kd = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (a, d) => {
    const c = typeof a == "function" ? a(t) : a;
    if (!Object.is(c, t)) {
      const f = t;
      t = d ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((m) => m(t, f));
    }
  }, o = () => t, l = { setState: r, getState: o, getInitialState: () => u, subscribe: (a) => (n.add(a), () => n.delete(a)) }, u = t = e(r, o, l);
  return l;
}, UC = (e) => e ? kd(e) : kd, WC = (e) => e;
function YC(e, t = WC) {
  const n = Ur.useSyncExternalStore(
    e.subscribe,
    Ur.useCallback(() => t(e.getState()), [e, t]),
    Ur.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Ur.useDebugValue(n), n;
}
const Ed = (e) => {
  const t = UC(e), n = (r) => YC(t, r);
  return Object.assign(n, t), n;
}, XC = (e) => e ? Ed(e) : Ed, nc = XC((e) => ({
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
})), KC = "/canvas/api";
async function Ks(e, t, n) {
  const r = `${KC}${t}`, o = {
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
function QC(e, t) {
  return Ks("PUT", `/workspaces/${e}`, t);
}
function GC(e, t, n = []) {
  return Ks(
    "POST",
    `/workspaces/${e}/actions/${t}/trigger`,
    { tags: n }
  );
}
function ZC(e, t) {
  return Ks(
    "POST",
    `/workspaces/${e}/actions/${t}/check-status`
  );
}
function qC() {
  return Ks("GET", "/io/configs");
}
const Bu = [
  { value: "focused_summary", label: "Summarize patent (web)", defaultConfig: "single_patent_summary_default" },
  { value: "raw_db_ingest", label: "Ingest patents → raw DB", defaultConfig: "raw_db_ingest_default" },
  { value: "triplet_extraction", label: "Extract triplets (raw DB subset)", defaultConfig: "triplet_extraction_default" },
  { value: "ner_extraction", label: "Extract entities / NER (raw DB subset)", defaultConfig: "ner_extraction_default" },
  { value: "hybrid_search", label: "Hybrid search", defaultConfig: "" }
];
function JC(e) {
  var t;
  return ((t = Bu.find((n) => n.value === e)) == null ? void 0 : t.label) || "Not configured";
}
const e2 = 3e3, t2 = /* @__PURE__ */ new Set(["complete", "failed"]), Cd = {
  empty: { label: "Not configured", className: "canvas-badge--neutral" },
  loaded: { label: "Ready", className: "canvas-badge--ready" },
  running: { label: "Running", className: "canvas-badge--running" },
  complete: { label: "Complete", className: "canvas-badge--success" },
  failed: { label: "Failed", className: "canvas-badge--error" }
};
function Hm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = qe(), { workspaceId: o } = nc(), [i, s] = N.useState(!1), [l, u] = N.useState(""), [a, d] = N.useState(!1), c = t.text || "", f = t.label || "", m = t.state || "empty", y = Cd[m] || Cd.empty, x = t.workflow_type, S = t.result_summary, p = N.useCallback(() => {
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
        const E = await ZC(o, e);
        if (!E.ok) return;
        const { state: T, result_summary: z } = E.data;
        t2.has(T) && (_(), r(e, { state: T, result_summary: z }));
      }, e2), _;
  }, [o, m, e, r, _]);
  const k = N.useCallback(async () => {
    if (!o || a) return;
    d(!0);
    const E = await GC(o, e);
    E.ok && r(e, { state: "running", job_id: E.data.job_id }), d(!1);
  }, [o, e, a, r]);
  return /* @__PURE__ */ w.jsxs(
    mn,
    {
      type: "action",
      label: f,
      icon: "action",
      headerColor: ce.action.light,
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
        /* @__PURE__ */ w.jsx("div", { className: "canvas-node-workflow", children: JC(x) }),
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
  const { updateNodeData: r } = qe(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = t.count, c = t.db_endpoint || "", f = t.patent_nrs || [], m = t.query_filter || {}, y = Object.keys(m).length > 0, x = N.useCallback(() => {
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
    mn,
    {
      type: "data_collection",
      label: a,
      icon: "data_collection",
      headerColor: ce.data_collection.light,
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
function Vm({ id: e, data: t, selected: n }) {
  const { updateNodeData: r } = qe(), [o, i] = N.useState(!1), [s, l] = N.useState(""), u = t.text || "", a = t.label || "", d = N.useCallback(() => {
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
    mn,
    {
      type: "untyped",
      label: a,
      icon: "untyped",
      headerColor: ce.untyped.light,
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
it.fact.component = $m;
it.idea.component = Rm;
it.question.component = Om;
it.constraint.component = Fm;
it.thesis.component = bm;
it.action.component = Hm;
it.data_collection.component = Bm;
it.untyped.component = Vm;
const n2 = {
  fact: $m,
  idea: Rm,
  question: Om,
  constraint: Fm,
  thesis: bm,
  action: Hm,
  data_collection: Bm,
  untyped: Vm
};
function r2({
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
  const [c, f, m] = Ka({
    sourceX: t,
    sourceY: n,
    sourcePosition: i,
    targetX: r,
    targetY: o,
    targetPosition: s
  }), y = typeof a == "string" && a || (u == null ? void 0 : u.label) || d || "";
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(Ko, { id: e, path: c, markerEnd: l }),
    y && /* @__PURE__ */ w.jsx(fC, { children: /* @__PURE__ */ w.jsx(
      "div",
      {
        className: "canvas-edge-label",
        style: {
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${f}px, ${m}px)`,
          pointerEvents: "all"
        },
        children: y
      }
    ) })
  ] });
}
const Um = [
  "supports",
  "contradicts",
  "enables",
  "blocks",
  "similar_to",
  "derived_from",
  "refines",
  "questions"
], Wm = "similar_to", o2 = new Set(Um), i2 = Object.fromEntries(
  Um.map((e) => [e, r2])
), s2 = new Set(Am), l2 = /* @__PURE__ */ new Set(["label", "committed"]);
function u2(e) {
  return e && s2.has(e) ? e : "untyped";
}
function Ym(e) {
  return e && o2.has(e) ? e : Wm;
}
function a2(e, t, n) {
  return {
    name: e,
    nodes: t.map((r) => {
      const o = r.data, i = {};
      for (const [s, l] of Object.entries(o))
        l2.has(s) || (i[s] = l);
      return {
        id: r.id,
        node_type: r.type || "untyped",
        label: o.label || "",
        committed: !!o.committed,
        content: i,
        position: r.position
      };
    }),
    edges: n.map((r) => ({
      id: r.id,
      source_id: r.source,
      target_id: r.target,
      edge_type: Ym(r.type),
      label: typeof r.label == "string" ? r.label : void 0
    }))
  };
}
function c2(e) {
  return {
    nodes: (e.nodes || []).map((t) => ({
      id: t.id,
      type: u2(t.node_type),
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
      type: Ym(t.edge_type),
      ...t.label ? { label: t.label } : {}
    }))
  };
}
function f2(e, t, n, r = 5e3) {
  const o = N.useRef(null), i = N.useRef(!0), { setSaveStatus: s, markSaved: l, markError: u, markUnsaved: a, workspaceName: d } = nc(), c = N.useCallback(
    async (m, y) => {
      if (!e) return;
      s("saving");
      const x = a2(d, m, y), S = await QC(e, x);
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
let Nd = 0;
function Md() {
  return Nd += 1, `node-${Date.now()}-${Nd}`;
}
function d2(e, t, n) {
  const r = qe(), o = N.useRef(null), [i, s] = N.useState(null), [l, u] = N.useState(null), a = N.useCallback(
    (p, g) => {
      const h = it[p], v = {
        id: Md(),
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
        id: Md(),
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
function h2({ position: e, onSelect: t, onClose: n }) {
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
      children: /* @__PURE__ */ w.jsx("div", { className: "canvas-creation-grid", children: VC.map((i) => {
        const s = it[i];
        return /* @__PURE__ */ w.jsxs(
          "button",
          {
            className: "canvas-creation-item",
            onClick: () => o(i),
            title: (s == null ? void 0 : s.label) || i,
            children: [
              /* @__PURE__ */ w.jsx(tc, { type: i, size: 20 }),
              /* @__PURE__ */ w.jsx("span", { className: "canvas-creation-item-label", children: (s == null ? void 0 : s.label) || i })
            ]
          },
          i
        );
      }) })
    }
  );
}
function p2({
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
                const f = it[c], m = c === t;
                return /* @__PURE__ */ w.jsxs(
                  "button",
                  {
                    className: `canvas-context-item${m ? " canvas-context-item--active" : ""}`,
                    onClick: () => d(c),
                    children: [
                      /* @__PURE__ */ w.jsx(tc, { type: c, size: 14 }),
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
function g2({ node: e, onChange: t, onClose: n }) {
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
      e.type === "action" && /* @__PURE__ */ w.jsx(m2, { nodeId: e.id, data: r, onChange: t }),
      e.type === "data_collection" && /* @__PURE__ */ w.jsx(y2, { nodeId: e.id, data: r, onChange: t }),
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
function m2({
  nodeId: e,
  data: t,
  onChange: n
}) {
  const r = t.workflow_type || "", o = t.workflow_config_name || "", i = t.state || "empty", s = t.result_summary, l = t.result_artifacts, u = t.error_message, a = N.useCallback((d) => {
    const c = Bu.find((m) => m.value === d), f = { workflow_type: d };
    !o && (c != null && c.defaultConfig) && (f.workflow_config_name = c.defaultConfig), n(e, f);
  }, [e, o, n]);
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(uo, { label: "Workflow type", children: /* @__PURE__ */ w.jsxs("select", { value: r, onChange: (d) => a(d.target.value), children: [
      /* @__PURE__ */ w.jsx("option", { value: "", children: "— select —" }),
      Bu.map((d) => /* @__PURE__ */ w.jsx("option", { value: d.value, children: d.label }, d.value))
    ] }) }),
    /* @__PURE__ */ w.jsx(uo, { label: "Workflow config name", children: /* @__PURE__ */ w.jsx(
      "input",
      {
        type: "text",
        value: o,
        placeholder: "config template name",
        onChange: (d) => n(e, { workflow_config_name: d.target.value })
      }
    ) }),
    /* @__PURE__ */ w.jsxs("div", { className: "canvas-config-state", children: [
      "State: ",
      /* @__PURE__ */ w.jsx("strong", { children: i })
    ] }),
    (i === "complete" || i === "failed") && /* @__PURE__ */ w.jsxs("div", { className: "canvas-config-result", children: [
      /* @__PURE__ */ w.jsx("div", { className: "canvas-config-field-label", children: "Result" }),
      u && /* @__PURE__ */ w.jsx("pre", { className: "canvas-config-error", children: u }),
      s && /* @__PURE__ */ w.jsx("pre", { className: "canvas-config-summary", children: s }),
      l && l.length > 0 && /* @__PURE__ */ w.jsx("ul", { className: "canvas-config-artifacts", children: l.map((d, c) => /* @__PURE__ */ w.jsx("li", { children: typeof d == "string" ? d : JSON.stringify(d) }, c)) }),
      !s && !u && /* @__PURE__ */ w.jsx("p", { className: "canvas-config-note", children: "No result detail." })
    ] })
  ] });
}
function y2({
  nodeId: e,
  data: t,
  onChange: n
}) {
  const [r, o] = N.useState([]), [i, s] = N.useState(null);
  N.useEffect(() => {
    let h = !0;
    return qC().then((v) => {
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
const jl = [], Pd = [];
function v2(e) {
  var t;
  if (!e) return { nodes: jl, edges: Pd };
  if ("id" in e && "nodes" in e) {
    const n = c2(e);
    return {
      nodes: n.nodes.length ? n.nodes : jl,
      edges: n.edges
    };
  }
  return {
    nodes: (t = e.nodes) != null && t.length ? e.nodes : jl,
    edges: e.edges ?? Pd
  };
}
function x2({ workspaceId: e, initialGraph: t, onSave: n }) {
  const r = v2(t), [o, i, s] = dC(r.nodes), [l, u, a] = hC(r.edges), { saveStatus: d, setWorkspaceId: c, setWorkspaceName: f } = nc(), { updateNodeData: m } = qe(), [y, x] = N.useState(null), S = o.find((T) => T.selected) ?? null, p = S && S.id !== y, g = N.useCallback(
    (T, z) => m(T, z),
    [m]
  ), h = d2(o, i, u);
  N.useEffect(() => {
    e && c(e), t && "name" in t && f(t.name);
  }, [e, t, c, f]);
  const { saveNow: v } = f2(e, o, l), _ = N.useCallback(
    (T) => {
      u((z) => $g({ ...T, type: Wm }, z));
    },
    [u]
  ), k = N.useCallback(() => {
    e && v(), n && n({ nodes: o, edges: l });
  }, [e, v, o, l, n]), E = N.useCallback(() => {
    i([]), u([]);
  }, [i, u]);
  return /* @__PURE__ */ w.jsxs("div", { ref: h.containerRef, style: { width: "100%", height: "100%" }, children: [
    /* @__PURE__ */ w.jsxs(
      aC,
      {
        nodes: o,
        edges: l,
        onNodesChange: s,
        onEdgesChange: a,
        onConnect: _,
        onPaneClick: h.closeMenus,
        onDoubleClick: h.handlePaneDoubleClick,
        onNodeContextMenu: h.handleNodeContextMenu,
        nodeTypes: n2,
        edgeTypes: i2,
        zoomOnDoubleClick: !1,
        fitView: !0,
        attributionPosition: "bottom-left",
        children: [
          /* @__PURE__ */ w.jsx(CC, {}),
          /* @__PURE__ */ w.jsx(OC, { zoomable: !0, pannable: !0 }),
          /* @__PURE__ */ w.jsx(vC, { variant: Rt.Dots, gap: 16, size: 1 }),
          /* @__PURE__ */ w.jsx(Xo, { position: "top-right", children: /* @__PURE__ */ w.jsxs("div", { style: { display: "flex", gap: "0.5rem", alignItems: "center" }, children: [
            e && /* @__PURE__ */ w.jsx(w2, { status: d }),
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
      h2,
      {
        position: { x: h.creationMenu.x, y: h.creationMenu.y },
        onSelect: h.handleCreationSelect,
        onClose: h.closeCreationMenu
      }
    ),
    h.contextMenu && /* @__PURE__ */ w.jsx(
      p2,
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
      g2,
      {
        node: S,
        onChange: g,
        onClose: () => x(S.id)
      }
    )
  ] });
}
function Al(e) {
  return /* @__PURE__ */ w.jsx(zm, { children: /* @__PURE__ */ w.jsx(x2, { ...e }) });
}
function w2({ status: e }) {
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
function S2(e) {
  const { containerId: t, workspaceId: n, initialGraph: r, onSave: o } = e, i = document.getElementById(t);
  if (!i)
    throw new Error(`Container element with id "${t}" not found`);
  return lt && lt.unmount(), Dt = r ?? { nodes: [], edges: [] }, lt = Vp(i), lt.render(
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
typeof window < "u" && (window.CartolexCanvas = { mountCanvas: S2 });
export {
  S2 as mountCanvas
};
