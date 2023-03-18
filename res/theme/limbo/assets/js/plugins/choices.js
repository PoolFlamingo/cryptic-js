/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
window.Choices = (function (e) {
    var t = {};
    function i(n) {
        if (t[n]) return t[n].exports;
        var s = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    return (
        (i.m = e),
        (i.c = t),
        (i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var s in e)
                    i.d(
                        n,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return n;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = "/public/assets/scripts/"),
        i((i.s = 4))
    );
})([
    function (e, t, i) {
        "use strict";
        var n = function (e) {
            return (
                (function (e) {
                    return !!e && "object" == typeof e;
                })(e) &&
                !(function (e) {
                    var t = Object.prototype.toString.call(e);
                    return (
                        "[object RegExp]" === t ||
                        "[object Date]" === t ||
                        (function (e) {
                            return e.$$typeof === s;
                        })(e)
                    );
                })(e)
            );
        };
        var s = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
        function r(e, t) {
            return !1 !== t.clone && t.isMergeableObject(e) ? l(((i = e), Array.isArray(i) ? [] : {}), e, t) : e;
            var i;
        }
        function o(e, t, i) {
            return e.concat(t).map(function (e) {
                return r(e, i);
            });
        }
        function a(e) {
            return Object.keys(e).concat(
                (function (e) {
                    return Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols(e).filter(function (t) {
                              return e.propertyIsEnumerable(t);
                          })
                        : [];
                })(e)
            );
        }
        function c(e, t, i) {
            var n = {};
            return (
                i.isMergeableObject(e) &&
                    a(e).forEach(function (t) {
                        n[t] = r(e[t], i);
                    }),
                a(t).forEach(function (s) {
                    (function (e, t) {
                        try {
                            return t in e && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
                        } catch (e) {
                            return !1;
                        }
                    })(e, s) ||
                        (i.isMergeableObject(t[s]) && e[s]
                            ? (n[s] = (function (e, t) {
                                  if (!t.customMerge) return l;
                                  var i = t.customMerge(e);
                                  return "function" == typeof i ? i : l;
                              })(s, i)(e[s], t[s], i))
                            : (n[s] = r(t[s], i)));
                }),
                n
            );
        }
        function l(e, t, i) {
            ((i = i || {}).arrayMerge = i.arrayMerge || o), (i.isMergeableObject = i.isMergeableObject || n), (i.cloneUnlessOtherwiseSpecified = r);
            var s = Array.isArray(t);
            return s === Array.isArray(e) ? (s ? i.arrayMerge(e, t, i) : c(e, t, i)) : r(t, i);
        }
        l.all = function (e, t) {
            if (!Array.isArray(e)) throw new Error("first argument should be an array");
            return e.reduce(function (e, i) {
                return l(e, i, t);
            }, {});
        };
        var h = l;
        e.exports = h;
    },
    function (e, t, i) {
        "use strict";
        (function (e, n) {
            var s,
                r = i(3);
            s = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
            var o = Object(r.a)(s);
            t.a = o;
        }.call(this, i(5), i(6)(e)));
    },
    function (e, t, i) {
        /*!
         * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
         *
         * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
         * All Rights Reserved. Apache Software License 2.0
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         */
        e.exports = (function (e) {
            var t = {};
            function i(n) {
                if (t[n]) return t[n].exports;
                var s = (t[n] = { i: n, l: !1, exports: {} });
                return e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
            }
            return (
                (i.m = e),
                (i.c = t),
                (i.d = function (e, t, n) {
                    i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
                }),
                (i.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (i.t = function (e, t) {
                    if ((1 & t && (e = i(e)), 8 & t)) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                        for (var s in e)
                            i.d(
                                n,
                                s,
                                function (t) {
                                    return e[t];
                                }.bind(null, s)
                            );
                    return n;
                }),
                (i.n = function (e) {
                    var t =
                        e && e.__esModule
                            ? function () {
                                  return e.default;
                              }
                            : function () {
                                  return e;
                              };
                    return i.d(t, "a", t), t;
                }),
                (i.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (i.p = ""),
                i((i.s = 1))
            );
        })([
            function (e, t) {
                e.exports = function (e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
                };
            },
            function (e, t, i) {
                function n(e) {
                    return (n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              })(e);
                }
                function s(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                var r = i(2),
                    o = i(8),
                    a = i(0),
                    c = (function () {
                        function e(t, i) {
                            var n = i.location,
                                s = void 0 === n ? 0 : n,
                                r = i.distance,
                                a = void 0 === r ? 100 : r,
                                c = i.threshold,
                                l = void 0 === c ? 0.6 : c,
                                h = i.maxPatternLength,
                                u = void 0 === h ? 32 : h,
                                d = i.caseSensitive,
                                p = void 0 !== d && d,
                                m = i.tokenSeparator,
                                f = void 0 === m ? / +/g : m,
                                v = i.findAllMatches,
                                g = void 0 !== v && v,
                                _ = i.minMatchCharLength,
                                b = void 0 === _ ? 1 : _,
                                y = i.id,
                                E = void 0 === y ? null : y,
                                I = i.keys,
                                S = void 0 === I ? [] : I,
                                w = i.shouldSort,
                                O = void 0 === w || w,
                                C = i.getFn,
                                A = void 0 === C ? o : C,
                                L = i.sortFn,
                                T =
                                    void 0 === L
                                        ? function (e, t) {
                                              return e.score - t.score;
                                          }
                                        : L,
                                x = i.tokenize,
                                k = void 0 !== x && x,
                                P = i.matchAllTokens,
                                D = void 0 !== P && P,
                                M = i.includeMatches,
                                N = void 0 !== M && M,
                                F = i.includeScore,
                                j = void 0 !== F && F,
                                K = i.verbose,
                                R = void 0 !== K && K;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this.options = {
                                    location: s,
                                    distance: a,
                                    threshold: l,
                                    maxPatternLength: u,
                                    isCaseSensitive: p,
                                    tokenSeparator: f,
                                    findAllMatches: g,
                                    minMatchCharLength: b,
                                    id: E,
                                    keys: S,
                                    includeMatches: N,
                                    includeScore: j,
                                    shouldSort: O,
                                    getFn: A,
                                    sortFn: T,
                                    verbose: R,
                                    tokenize: k,
                                    matchAllTokens: D,
                                }),
                                this.setCollection(t);
                        }
                        var t, i;
                        return (
                            (t = e),
                            (i = [
                                {
                                    key: "setCollection",
                                    value: function (e) {
                                        return (this.list = e), e;
                                    },
                                },
                                {
                                    key: "search",
                                    value: function (e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: !1 };
                                        this._log('---------\nSearch pattern: "'.concat(e, '"'));
                                        var i = this._prepareSearchers(e),
                                            n = i.tokenSearchers,
                                            s = i.fullSearcher,
                                            r = this._search(n, s),
                                            o = r.weights,
                                            a = r.results;
                                        return this._computeScore(o, a), this.options.shouldSort && this._sort(a), t.limit && "number" == typeof t.limit && (a = a.slice(0, t.limit)), this._format(a);
                                    },
                                },
                                {
                                    key: "_prepareSearchers",
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                            t = [];
                                        if (this.options.tokenize) for (var i = e.split(this.options.tokenSeparator), n = 0, s = i.length; n < s; n += 1) t.push(new r(i[n], this.options));
                                        return { tokenSearchers: t, fullSearcher: new r(e, this.options) };
                                    },
                                },
                                {
                                    key: "_search",
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                            t = arguments.length > 1 ? arguments[1] : void 0,
                                            i = this.list,
                                            n = {},
                                            s = [];
                                        if ("string" == typeof i[0]) {
                                            for (var r = 0, o = i.length; r < o; r += 1) this._analyze({ key: "", value: i[r], record: r, index: r }, { resultMap: n, results: s, tokenSearchers: e, fullSearcher: t });
                                            return { weights: null, results: s };
                                        }
                                        for (var a = {}, c = 0, l = i.length; c < l; c += 1)
                                            for (var h = i[c], u = 0, d = this.options.keys.length; u < d; u += 1) {
                                                var p = this.options.keys[u];
                                                if ("string" != typeof p) {
                                                    if (((a[p.name] = { weight: 1 - p.weight || 1 }), p.weight <= 0 || p.weight > 1)) throw new Error("Key weight has to be > 0 and <= 1");
                                                    p = p.name;
                                                } else a[p] = { weight: 1 };
                                                this._analyze({ key: p, value: this.options.getFn(h, p), record: h, index: c }, { resultMap: n, results: s, tokenSearchers: e, fullSearcher: t });
                                            }
                                        return { weights: a, results: s };
                                    },
                                },
                                {
                                    key: "_analyze",
                                    value: function (e, t) {
                                        var i = e.key,
                                            n = e.arrayIndex,
                                            s = void 0 === n ? -1 : n,
                                            r = e.value,
                                            o = e.record,
                                            c = e.index,
                                            l = t.tokenSearchers,
                                            h = void 0 === l ? [] : l,
                                            u = t.fullSearcher,
                                            d = void 0 === u ? [] : u,
                                            p = t.resultMap,
                                            m = void 0 === p ? {} : p,
                                            f = t.results,
                                            v = void 0 === f ? [] : f;
                                        if (null != r) {
                                            var g = !1,
                                                _ = -1,
                                                b = 0;
                                            if ("string" == typeof r) {
                                                this._log("\nKey: ".concat("" === i ? "-" : i));
                                                var y = d.search(r);
                                                if ((this._log('Full text: "'.concat(r, '", score: ').concat(y.score)), this.options.tokenize)) {
                                                    for (var E = r.split(this.options.tokenSeparator), I = [], S = 0; S < h.length; S += 1) {
                                                        var w = h[S];
                                                        this._log('\nPattern: "'.concat(w.pattern, '"'));
                                                        for (var O = !1, C = 0; C < E.length; C += 1) {
                                                            var A = E[C],
                                                                L = w.search(A),
                                                                T = {};
                                                            L.isMatch ? ((T[A] = L.score), (g = !0), (O = !0), I.push(L.score)) : ((T[A] = 1), this.options.matchAllTokens || I.push(1)),
                                                                this._log('Token: "'.concat(A, '", score: ').concat(T[A]));
                                                        }
                                                        O && (b += 1);
                                                    }
                                                    _ = I[0];
                                                    for (var x = I.length, k = 1; k < x; k += 1) _ += I[k];
                                                    (_ /= x), this._log("Token score average:", _);
                                                }
                                                var P = y.score;
                                                _ > -1 && (P = (P + _) / 2), this._log("Score average:", P);
                                                var D = !this.options.tokenize || !this.options.matchAllTokens || b >= h.length;
                                                if ((this._log("\nCheck Matches: ".concat(D)), (g || y.isMatch) && D)) {
                                                    var M = m[c];
                                                    M
                                                        ? M.output.push({ key: i, arrayIndex: s, value: r, score: P, matchedIndices: y.matchedIndices })
                                                        : ((m[c] = { item: o, output: [{ key: i, arrayIndex: s, value: r, score: P, matchedIndices: y.matchedIndices }] }), v.push(m[c]));
                                                }
                                            } else if (a(r))
                                                for (var N = 0, F = r.length; N < F; N += 1) this._analyze({ key: i, arrayIndex: N, value: r[N], record: o, index: c }, { resultMap: m, results: v, tokenSearchers: h, fullSearcher: d });
                                        }
                                    },
                                },
                                {
                                    key: "_computeScore",
                                    value: function (e, t) {
                                        this._log("\n\nComputing score:\n");
                                        for (var i = 0, n = t.length; i < n; i += 1) {
                                            for (var s = t[i].output, r = s.length, o = 1, a = 1, c = 0; c < r; c += 1) {
                                                var l = e ? e[s[c].key].weight : 1,
                                                    h = (1 === l ? s[c].score : s[c].score || 0.001) * l;
                                                1 !== l ? (a = Math.min(a, h)) : ((s[c].nScore = h), (o *= h));
                                            }
                                            (t[i].score = 1 === a ? o : a), this._log(t[i]);
                                        }
                                    },
                                },
                                {
                                    key: "_sort",
                                    value: function (e) {
                                        this._log("\n\nSorting...."), e.sort(this.options.sortFn);
                                    },
                                },
                                {
                                    key: "_format",
                                    value: function (e) {
                                        var t = [];
                                        if (this.options.verbose) {
                                            var i = [];
                                            this._log(
                                                "\n\nOutput:\n\n",
                                                JSON.stringify(e, function (e, t) {
                                                    if ("object" === n(t) && null !== t) {
                                                        if (-1 !== i.indexOf(t)) return;
                                                        i.push(t);
                                                    }
                                                    return t;
                                                })
                                            ),
                                                (i = null);
                                        }
                                        var s = [];
                                        this.options.includeMatches &&
                                            s.push(function (e, t) {
                                                var i = e.output;
                                                t.matches = [];
                                                for (var n = 0, s = i.length; n < s; n += 1) {
                                                    var r = i[n];
                                                    if (0 !== r.matchedIndices.length) {
                                                        var o = { indices: r.matchedIndices, value: r.value };
                                                        r.key && (o.key = r.key), r.hasOwnProperty("arrayIndex") && r.arrayIndex > -1 && (o.arrayIndex = r.arrayIndex), t.matches.push(o);
                                                    }
                                                }
                                            }),
                                            this.options.includeScore &&
                                                s.push(function (e, t) {
                                                    t.score = e.score;
                                                });
                                        for (var r = 0, o = e.length; r < o; r += 1) {
                                            var a = e[r];
                                            if ((this.options.id && (a.item = this.options.getFn(a.item, this.options.id)[0]), s.length)) {
                                                for (var c = { item: a.item }, l = 0, h = s.length; l < h; l += 1) s[l](a, c);
                                                t.push(c);
                                            } else t.push(a.item);
                                        }
                                        return t;
                                    },
                                },
                                {
                                    key: "_log",
                                    value: function () {
                                        var e;
                                        this.options.verbose && (e = console).log.apply(e, arguments);
                                    },
                                },
                            ]) && s(t.prototype, i),
                            e
                        );
                    })();
                e.exports = c;
            },
            function (e, t, i) {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                var s = i(3),
                    r = i(4),
                    o = i(7),
                    a = (function () {
                        function e(t, i) {
                            var n = i.location,
                                s = void 0 === n ? 0 : n,
                                r = i.distance,
                                a = void 0 === r ? 100 : r,
                                c = i.threshold,
                                l = void 0 === c ? 0.6 : c,
                                h = i.maxPatternLength,
                                u = void 0 === h ? 32 : h,
                                d = i.isCaseSensitive,
                                p = void 0 !== d && d,
                                m = i.tokenSeparator,
                                f = void 0 === m ? / +/g : m,
                                v = i.findAllMatches,
                                g = void 0 !== v && v,
                                _ = i.minMatchCharLength,
                                b = void 0 === _ ? 1 : _;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this.options = { location: s, distance: a, threshold: l, maxPatternLength: u, isCaseSensitive: p, tokenSeparator: f, findAllMatches: g, minMatchCharLength: b }),
                                (this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase()),
                                this.pattern.length <= u && (this.patternAlphabet = o(this.pattern));
                        }
                        var t, i;
                        return (
                            (t = e),
                            (i = [
                                {
                                    key: "search",
                                    value: function (e) {
                                        if ((this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e)) return { isMatch: !0, score: 0, matchedIndices: [[0, e.length - 1]] };
                                        var t = this.options,
                                            i = t.maxPatternLength,
                                            n = t.tokenSeparator;
                                        if (this.pattern.length > i) return s(e, this.pattern, n);
                                        var o = this.options,
                                            a = o.location,
                                            c = o.distance,
                                            l = o.threshold,
                                            h = o.findAllMatches,
                                            u = o.minMatchCharLength;
                                        return r(e, this.pattern, this.patternAlphabet, { location: a, distance: c, threshold: l, findAllMatches: h, minMatchCharLength: u });
                                    },
                                },
                            ]) && n(t.prototype, i),
                            e
                        );
                    })();
                e.exports = a;
            },
            function (e, t) {
                var i = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
                e.exports = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
                        s = new RegExp(t.replace(i, "\\$&").replace(n, "|")),
                        r = e.match(s),
                        o = !!r,
                        a = [];
                    if (o)
                        for (var c = 0, l = r.length; c < l; c += 1) {
                            var h = r[c];
                            a.push([e.indexOf(h), h.length - 1]);
                        }
                    return { score: o ? 0.5 : 1, isMatch: o, matchedIndices: a };
                };
            },
            function (e, t, i) {
                var n = i(5),
                    s = i(6);
                e.exports = function (e, t, i, r) {
                    for (
                        var o = r.location,
                            a = void 0 === o ? 0 : o,
                            c = r.distance,
                            l = void 0 === c ? 100 : c,
                            h = r.threshold,
                            u = void 0 === h ? 0.6 : h,
                            d = r.findAllMatches,
                            p = void 0 !== d && d,
                            m = r.minMatchCharLength,
                            f = void 0 === m ? 1 : m,
                            v = a,
                            g = e.length,
                            _ = u,
                            b = e.indexOf(t, v),
                            y = t.length,
                            E = [],
                            I = 0;
                        I < g;
                        I += 1
                    )
                        E[I] = 0;
                    if (-1 !== b) {
                        var S = n(t, { errors: 0, currentLocation: b, expectedLocation: v, distance: l });
                        if (((_ = Math.min(S, _)), -1 !== (b = e.lastIndexOf(t, v + y)))) {
                            var w = n(t, { errors: 0, currentLocation: b, expectedLocation: v, distance: l });
                            _ = Math.min(w, _);
                        }
                    }
                    b = -1;
                    for (var O = [], C = 1, A = y + g, L = 1 << (y - 1), T = 0; T < y; T += 1) {
                        for (var x = 0, k = A; x < k; ) n(t, { errors: T, currentLocation: v + k, expectedLocation: v, distance: l }) <= _ ? (x = k) : (A = k), (k = Math.floor((A - x) / 2 + x));
                        A = k;
                        var P = Math.max(1, v - k + 1),
                            D = p ? g : Math.min(v + k, g) + y,
                            M = Array(D + 2);
                        M[D + 1] = (1 << T) - 1;
                        for (var N = D; N >= P; N -= 1) {
                            var F = N - 1,
                                j = i[e.charAt(F)];
                            if (
                                (j && (E[F] = 1),
                                (M[N] = ((M[N + 1] << 1) | 1) & j),
                                0 !== T && (M[N] |= ((O[N + 1] | O[N]) << 1) | 1 | O[N + 1]),
                                M[N] & L && (C = n(t, { errors: T, currentLocation: F, expectedLocation: v, distance: l })) <= _)
                            ) {
                                if (((_ = C), (b = F) <= v)) break;
                                P = Math.max(1, 2 * v - b);
                            }
                        }
                        if (n(t, { errors: T + 1, currentLocation: v, expectedLocation: v, distance: l }) > _) break;
                        O = M;
                    }
                    return { isMatch: b >= 0, score: 0 === C ? 0.001 : C, matchedIndices: s(E, f) };
                };
            },
            function (e, t) {
                e.exports = function (e, t) {
                    var i = t.errors,
                        n = void 0 === i ? 0 : i,
                        s = t.currentLocation,
                        r = void 0 === s ? 0 : s,
                        o = t.expectedLocation,
                        a = void 0 === o ? 0 : o,
                        c = t.distance,
                        l = void 0 === c ? 100 : c,
                        h = n / e.length,
                        u = Math.abs(a - r);
                    return l ? h + u / l : u ? 1 : h;
                };
            },
            function (e, t) {
                e.exports = function () {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = [], n = -1, s = -1, r = 0, o = e.length; r < o; r += 1) {
                        var a = e[r];
                        a && -1 === n ? (n = r) : a || -1 === n || ((s = r - 1) - n + 1 >= t && i.push([n, s]), (n = -1));
                    }
                    return e[r - 1] && r - n >= t && i.push([n, r - 1]), i;
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    for (var t = {}, i = e.length, n = 0; n < i; n += 1) t[e.charAt(n)] = 0;
                    for (var s = 0; s < i; s += 1) t[e.charAt(s)] |= 1 << (i - s - 1);
                    return t;
                };
            },
            function (e, t, i) {
                var n = i(0);
                e.exports = function (e, t) {
                    return (function e(t, i, s) {
                        if (i) {
                            var r = i.indexOf("."),
                                o = i,
                                a = null;
                            -1 !== r && ((o = i.slice(0, r)), (a = i.slice(r + 1)));
                            var c = t[o];
                            if (null != c)
                                if (a || ("string" != typeof c && "number" != typeof c))
                                    if (n(c)) for (var l = 0, h = c.length; l < h; l += 1) e(c[l], a, s);
                                    else a && e(c, a, s);
                                else s.push(c.toString());
                        } else s.push(t);
                        return s;
                    })(e, t, []);
                };
            },
        ]);
    },
    function (e, t, i) {
        "use strict";
        function n(e) {
            var t,
                i = e.Symbol;
            return "function" == typeof i ? (i.observable ? (t = i.observable) : ((t = i("observable")), (i.observable = t))) : (t = "@@observable"), t;
        }
        i.d(t, "a", function () {
            return n;
        });
    },
    function (e, t, i) {
        e.exports = i(7);
    },
    function (e, t) {
        var i;
        i = (function () {
            return this;
        })();
        try {
            i = i || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (i = window);
        }
        e.exports = i;
    },
    function (e, t) {
        e.exports = function (e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    Object.defineProperty(t, "exports", { enumerable: !0 }),
                    (t.webpackPolyfill = 1);
            }
            return t;
        };
    },
    function (e, t, i) {
        "use strict";
        i.r(t);
        var n = i(2),
            s = i.n(n),
            r = i(0),
            o = i.n(r),
            a = i(1),
            c = function () {
                return Math.random().toString(36).substring(7).split("").join(".");
            },
            l = {
                INIT: "@@redux/INIT" + c(),
                REPLACE: "@@redux/REPLACE" + c(),
                PROBE_UNKNOWN_ACTION: function () {
                    return "@@redux/PROBE_UNKNOWN_ACTION" + c();
                },
            };
        function h(e) {
            if ("object" != typeof e || null === e) return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t;
        }
        function u(e, t, i) {
            var n;
            if (("function" == typeof t && "function" == typeof i) || ("function" == typeof i && "function" == typeof arguments[3]))
                throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
            if (("function" == typeof t && void 0 === i && ((i = t), (t = void 0)), void 0 !== i)) {
                if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
                return i(u)(e, t);
            }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var s = e,
                r = t,
                o = [],
                c = o,
                d = !1;
            function p() {
                c === o && (c = o.slice());
            }
            function m() {
                if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                return r;
            }
            function f(e) {
                if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
                if (d)
                    throw new Error(
                        "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details."
                    );
                var t = !0;
                return (
                    p(),
                    c.push(e),
                    function () {
                        if (t) {
                            if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                            (t = !1), p();
                            var i = c.indexOf(e);
                            c.splice(i, 1);
                        }
                    }
                );
            }
            function v(e) {
                if (!h(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (d) throw new Error("Reducers may not dispatch actions.");
                try {
                    (d = !0), (r = s(r, e));
                } finally {
                    d = !1;
                }
                for (var t = (o = c), i = 0; i < t.length; i++) {
                    (0, t[i])();
                }
                return e;
            }
            return (
                v({ type: l.INIT }),
                ((n = {
                    dispatch: v,
                    subscribe: f,
                    getState: m,
                    replaceReducer: function (e) {
                        if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                        (s = e), v({ type: l.REPLACE });
                    },
                })[a.a] = function () {
                    var e,
                        t = f;
                    return (
                        ((e = {
                            subscribe: function (e) {
                                if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");
                                function i() {
                                    e.next && e.next(m());
                                }
                                return i(), { unsubscribe: t(i) };
                            },
                        })[a.a] = function () {
                            return this;
                        }),
                        e
                    );
                }),
                n
            );
        }
        function d(e, t) {
            var i = t && t.type;
            return (
                "Given " +
                ((i && 'action "' + String(i) + '"') || "an action") +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            );
        }
        var p = [];
        var m = [];
        var f = [];
        var v,
            g = { loading: !1 },
            _ = function (e, t) {
                switch ((void 0 === e && (e = g), t.type)) {
                    case "SET_IS_LOADING":
                        return { loading: t.isLoading };
                    default:
                        return e;
                }
            },
            b = function (e) {
                return Array.from({ length: e }, function () {
                    return ((e = 0), (t = 36), Math.floor(Math.random() * (t - e) + e)).toString(36);
                    var e, t;
                }).join("");
            },
            y = function (e, t) {
                var i = e.id || (e.name && e.name + "-" + b(2)) || b(4);
                return (i = t + "-" + (i = i.replace(/(:|\.|\[|\]|,)/g, "")));
            },
            E = function (e) {
                return Object.prototype.toString.call(e).slice(8, -1);
            },
            I = function (e, t) {
                return null != t && E(t) === e;
            },
            S = function (e) {
                return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
            },
            w =
                ((v = document.createElement("div")),
                function (e) {
                    var t = e.trim();
                    v.innerHTML = t;
                    for (var i = v.children[0]; v.firstChild; ) v.removeChild(v.firstChild);
                    return i;
                }),
            O = function (e, t) {
                return e.score - t.score;
            },
            C = function (e) {
                return JSON.parse(JSON.stringify(e));
            },
            A = function (e, t) {
                var i = Object.keys(e).sort(),
                    n = Object.keys(t).sort();
                return i.filter(function (e) {
                    return n.indexOf(e) < 0;
                });
            },
            L = (function (e) {
                for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
                    var s = t[n];
                    0, "function" == typeof e[s] && (i[s] = e[s]);
                }
                var r,
                    o = Object.keys(i);
                try {
                    !(function (e) {
                        Object.keys(e).forEach(function (t) {
                            var i = e[t];
                            if (void 0 === i(void 0, { type: l.INIT }))
                                throw new Error(
                                    'Reducer "' +
                                        t +
                                        "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                                );
                            if (void 0 === i(void 0, { type: l.PROBE_UNKNOWN_ACTION() }))
                                throw new Error(
                                    'Reducer "' +
                                        t +
                                        "\" returned undefined when probed with a random type. Don't try to handle " +
                                        l.INIT +
                                        ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                                );
                        });
                    })(i);
                } catch (e) {
                    r = e;
                }
                return function (e, t) {
                    if ((void 0 === e && (e = {}), r)) throw r;
                    for (var n = !1, s = {}, a = 0; a < o.length; a++) {
                        var c = o[a],
                            l = i[c],
                            h = e[c],
                            u = l(h, t);
                        if (void 0 === u) {
                            var p = d(c, t);
                            throw new Error(p);
                        }
                        (s[c] = u), (n = n || u !== h);
                    }
                    return n ? s : e;
                };
            })({
                items: function (e, t) {
                    switch ((void 0 === e && (e = p), t.type)) {
                        case "ADD_ITEM":
                            return []
                                .concat(e, [
                                    { id: t.id, choiceId: t.choiceId, groupId: t.groupId, value: t.value, label: t.label, active: !0, highlighted: !1, customProperties: t.customProperties, placeholder: t.placeholder || !1, keyCode: null },
                                ])
                                .map(function (e) {
                                    var t = e;
                                    return (t.highlighted = !1), t;
                                });
                        case "REMOVE_ITEM":
                            return e.map(function (e) {
                                var i = e;
                                return i.id === t.id && (i.active = !1), i;
                            });
                        case "HIGHLIGHT_ITEM":
                            return e.map(function (e) {
                                var i = e;
                                return i.id === t.id && (i.highlighted = t.highlighted), i;
                            });
                        default:
                            return e;
                    }
                },
                groups: function (e, t) {
                    switch ((void 0 === e && (e = m), t.type)) {
                        case "ADD_GROUP":
                            return [].concat(e, [{ id: t.id, value: t.value, active: t.active, disabled: t.disabled }]);
                        case "CLEAR_CHOICES":
                            return [];
                        default:
                            return e;
                    }
                },
                choices: function (e, t) {
                    switch ((void 0 === e && (e = f), t.type)) {
                        case "ADD_CHOICE":
                            return [].concat(e, [
                                {
                                    id: t.id,
                                    elementId: t.elementId,
                                    groupId: t.groupId,
                                    value: t.value,
                                    label: t.label || t.value,
                                    disabled: t.disabled || !1,
                                    selected: !1,
                                    active: !0,
                                    score: 9999,
                                    customProperties: t.customProperties,
                                    placeholder: t.placeholder || !1,
                                    keyCode: null,
                                },
                            ]);
                        case "ADD_ITEM":
                            return t.activateOptions
                                ? e.map(function (e) {
                                      var i = e;
                                      return (i.active = t.active), i;
                                  })
                                : t.choiceId > -1
                                ? e.map(function (e) {
                                      var i = e;
                                      return i.id === parseInt(t.choiceId, 10) && (i.selected = !0), i;
                                  })
                                : e;
                        case "REMOVE_ITEM":
                            return t.choiceId > -1
                                ? e.map(function (e) {
                                      var i = e;
                                      return i.id === parseInt(t.choiceId, 10) && (i.selected = !1), i;
                                  })
                                : e;
                        case "FILTER_CHOICES":
                            return e.map(function (e) {
                                var i = e;
                                return (
                                    (i.active = t.results.some(function (e) {
                                        var t = e.item,
                                            n = e.score;
                                        return t.id === i.id && ((i.score = n), !0);
                                    })),
                                    i
                                );
                            });
                        case "ACTIVATE_CHOICES":
                            return e.map(function (e) {
                                var i = e;
                                return (i.active = t.active), i;
                            });
                        case "CLEAR_CHOICES":
                            return f;
                        default:
                            return e;
                    }
                },
                general: _,
            }),
            T = function (e, t) {
                var i = e;
                if ("CLEAR_ALL" === t.type) i = void 0;
                else if ("RESET_TO" === t.type) return C(t.state);
                return L(i, t);
            };
        function x(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var k = (function () {
            function e() {
                this._store = u(T, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            }
            var t,
                i,
                n,
                s = e.prototype;
            return (
                (s.subscribe = function (e) {
                    this._store.subscribe(e);
                }),
                (s.dispatch = function (e) {
                    this._store.dispatch(e);
                }),
                (s.isLoading = function () {
                    return this.state.general.loading;
                }),
                (s.getChoiceById = function (e) {
                    return this.activeChoices.find(function (t) {
                        return t.id === parseInt(e, 10);
                    });
                }),
                (s.getGroupById = function (e) {
                    return this.groups.find(function (t) {
                        return t.id === e;
                    });
                }),
                (t = e),
                (i = [
                    {
                        key: "state",
                        get: function () {
                            return this._store.getState();
                        },
                    },
                    {
                        key: "items",
                        get: function () {
                            return this.state.items;
                        },
                    },
                    {
                        key: "activeItems",
                        get: function () {
                            return this.items.filter(function (e) {
                                return !0 === e.active;
                            });
                        },
                    },
                    {
                        key: "highlightedActiveItems",
                        get: function () {
                            return this.items.filter(function (e) {
                                return e.active && e.highlighted;
                            });
                        },
                    },
                    {
                        key: "choices",
                        get: function () {
                            return this.state.choices;
                        },
                    },
                    {
                        key: "activeChoices",
                        get: function () {
                            return this.choices.filter(function (e) {
                                return !0 === e.active;
                            });
                        },
                    },
                    {
                        key: "selectableChoices",
                        get: function () {
                            return this.choices.filter(function (e) {
                                return !0 !== e.disabled;
                            });
                        },
                    },
                    {
                        key: "searchableChoices",
                        get: function () {
                            return this.selectableChoices.filter(function (e) {
                                return !0 !== e.placeholder;
                            });
                        },
                    },
                    {
                        key: "placeholderChoice",
                        get: function () {
                            return []
                                .concat(this.choices)
                                .reverse()
                                .find(function (e) {
                                    return !0 === e.placeholder;
                                });
                        },
                    },
                    {
                        key: "groups",
                        get: function () {
                            return this.state.groups;
                        },
                    },
                    {
                        key: "activeGroups",
                        get: function () {
                            var e = this.groups,
                                t = this.choices;
                            return e.filter(function (e) {
                                var i = !0 === e.active && !1 === e.disabled,
                                    n = t.some(function (e) {
                                        return !0 === e.active && !1 === e.disabled;
                                    });
                                return i && n;
                            }, []);
                        },
                    },
                ]) && x(t.prototype, i),
                n && x(t, n),
                e
            );
        })();
        function P(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var D = (function () {
                function e(e) {
                    var t = e.element,
                        i = e.type,
                        n = e.classNames;
                    (this.element = t), (this.classNames = n), (this.type = i), (this.isActive = !1);
                }
                var t,
                    i,
                    n,
                    s = e.prototype;
                return (
                    (s.getChild = function (e) {
                        return this.element.querySelector(e);
                    }),
                    (s.show = function () {
                        return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), (this.isActive = !0), this;
                    }),
                    (s.hide = function () {
                        return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), (this.isActive = !1), this;
                    }),
                    (t = e),
                    (i = [
                        {
                            key: "distanceFromTopWindow",
                            get: function () {
                                return this.element.getBoundingClientRect().bottom;
                            },
                        },
                    ]) && P(t.prototype, i),
                    n && P(t, n),
                    e
                );
            })(),
            M = {
                items: [],
                choices: [],
                silent: !1,
                renderChoiceLimit: -1,
                maxItemCount: -1,
                addItems: !0,
                addItemFilter: null,
                removeItems: !0,
                removeItemButton: !1,
                editItems: !1,
                duplicateItemsAllowed: !0,
                delimiter: ",",
                paste: !0,
                searchEnabled: !0,
                searchChoices: !0,
                searchFloor: 1,
                searchResultLimit: 4,
                searchFields: ["label", "value"],
                position: "auto",
                resetScrollPosition: !0,
                shouldSort: !0,
                shouldSortItems: !1,
                sorter: function (e, t) {
                    var i = e.value,
                        n = e.label,
                        s = void 0 === n ? i : n,
                        r = t.value,
                        o = t.label,
                        a = void 0 === o ? r : o;
                    return s.localeCompare(a, [], { sensitivity: "base", ignorePunctuation: !0, numeric: !0 });
                },
                placeholder: !0,
                placeholderValue: null,
                searchPlaceholderValue: null,
                prependValue: null,
                appendValue: null,
                renderSelectedChoices: "auto",
                loadingText: "Loading...",
                noResultsText: "No results found",
                noChoicesText: "No choices to choose from",
                itemSelectText: "Press to select",
                uniqueItemText: "Only unique values can be added",
                customAddItemText: "Only values matching specific conditions can be added",
                addItemText: function (e) {
                    return 'Press Enter to add <b>"' + S(e) + '"</b>';
                },
                maxItemText: function (e) {
                    return "Only " + e + " values can be added";
                },
                valueComparer: function (e, t) {
                    return e === t;
                },
                fuseOptions: { includeScore: !0 },
                callbackOnInit: null,
                callbackOnCreateTemplates: null,
                classNames: {
                    containerOuter: "choices",
                    containerInner: "choices__inner",
                    input: "choices__input",
                    inputCloned: "choices__input--cloned",
                    list: "choices__list",
                    listItems: "choices__list--multiple",
                    listSingle: "choices__list--single",
                    listDropdown: "choices__list--dropdown",
                    item: "choices__item",
                    itemSelectable: "choices__item--selectable",
                    itemDisabled: "choices__item--disabled",
                    itemChoice: "choices__item--choice",
                    placeholder: "choices__placeholder",
                    group: "choices__group",
                    groupHeading: "choices__heading",
                    button: "choices__button",
                    activeState: "is-active",
                    focusState: "is-focused",
                    openState: "is-open",
                    disabledState: "is-disabled",
                    highlightedState: "is-highlighted",
                    selectedState: "is-selected",
                    flippedState: "is-flipped",
                    loadingState: "is-loading",
                    noResults: "has-no-results",
                    noChoices: "has-no-choices",
                },
            },
            N = "showDropdown",
            F = "hideDropdown",
            j = "change",
            K = "choice",
            R = "search",
            H = "addItem",
            B = "removeItem",
            V = "highlightItem",
            G = "highlightChoice",
            q = "ADD_CHOICE",
            U = "FILTER_CHOICES",
            z = "ACTIVATE_CHOICES",
            W = "CLEAR_CHOICES",
            X = "ADD_GROUP",
            $ = "ADD_ITEM",
            J = "REMOVE_ITEM",
            Y = "HIGHLIGHT_ITEM",
            Z = 46,
            Q = 8,
            ee = 13,
            te = 65,
            ie = 27,
            ne = 38,
            se = 40,
            re = 33,
            oe = 34,
            ae = "text",
            ce = "select-one",
            le = "select-multiple",
            he = (function () {
                function e(e) {
                    var t = e.element,
                        i = e.type,
                        n = e.classNames,
                        s = e.position;
                    (this.element = t),
                        (this.classNames = n),
                        (this.type = i),
                        (this.position = s),
                        (this.isOpen = !1),
                        (this.isFlipped = !1),
                        (this.isFocussed = !1),
                        (this.isDisabled = !1),
                        (this.isLoading = !1),
                        (this._onFocus = this._onFocus.bind(this)),
                        (this._onBlur = this._onBlur.bind(this));
                }
                var t = e.prototype;
                return (
                    (t.addEventListeners = function () {
                        this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
                    }),
                    (t.removeEventListeners = function () {
                        this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
                    }),
                    (t.shouldFlip = function (e) {
                        if ("number" != typeof e) return !1;
                        var t = !1;
                        return "auto" === this.position ? (t = !window.matchMedia("(min-height: " + (e + 1) + "px)").matches) : "top" === this.position && (t = !0), t;
                    }),
                    (t.setActiveDescendant = function (e) {
                        this.element.setAttribute("aria-activedescendant", e);
                    }),
                    (t.removeActiveDescendant = function () {
                        this.element.removeAttribute("aria-activedescendant");
                    }),
                    (t.open = function (e) {
                        this.element.classList.add(this.classNames.openState),
                            this.element.setAttribute("aria-expanded", "true"),
                            (this.isOpen = !0),
                            this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), (this.isFlipped = !0));
                    }),
                    (t.close = function () {
                        this.element.classList.remove(this.classNames.openState),
                            this.element.setAttribute("aria-expanded", "false"),
                            this.removeActiveDescendant(),
                            (this.isOpen = !1),
                            this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), (this.isFlipped = !1));
                    }),
                    (t.focus = function () {
                        this.isFocussed || this.element.focus();
                    }),
                    (t.addFocusState = function () {
                        this.element.classList.add(this.classNames.focusState);
                    }),
                    (t.removeFocusState = function () {
                        this.element.classList.remove(this.classNames.focusState);
                    }),
                    (t.enable = function () {
                        this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === ce && this.element.setAttribute("tabindex", "0"), (this.isDisabled = !1);
                    }),
                    (t.disable = function () {
                        this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === ce && this.element.setAttribute("tabindex", "-1"), (this.isDisabled = !0);
                    }),
                    (t.wrap = function (e) {
                        !(function (e, t) {
                            void 0 === t && (t = document.createElement("div")), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e);
                        })(e, this.element);
                    }),
                    (t.unwrap = function (e) {
                        this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element);
                    }),
                    (t.addLoadingState = function () {
                        this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), (this.isLoading = !0);
                    }),
                    (t.removeLoadingState = function () {
                        this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), (this.isLoading = !1);
                    }),
                    (t._onFocus = function () {
                        this.isFocussed = !0;
                    }),
                    (t._onBlur = function () {
                        this.isFocussed = !1;
                    }),
                    e
                );
            })();
        function ue(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var de = (function () {
                function e(e) {
                    var t = e.element,
                        i = e.type,
                        n = e.classNames,
                        s = e.preventPaste;
                    (this.element = t),
                        (this.type = i),
                        (this.classNames = n),
                        (this.preventPaste = s),
                        (this.isFocussed = this.element === document.activeElement),
                        (this.isDisabled = t.disabled),
                        (this._onPaste = this._onPaste.bind(this)),
                        (this._onInput = this._onInput.bind(this)),
                        (this._onFocus = this._onFocus.bind(this)),
                        (this._onBlur = this._onBlur.bind(this));
                }
                var t,
                    i,
                    n,
                    s = e.prototype;
                return (
                    (s.addEventListeners = function () {
                        this.element.addEventListener("paste", this._onPaste),
                            this.element.addEventListener("input", this._onInput, { passive: !0 }),
                            this.element.addEventListener("focus", this._onFocus, { passive: !0 }),
                            this.element.addEventListener("blur", this._onBlur, { passive: !0 });
                    }),
                    (s.removeEventListeners = function () {
                        this.element.removeEventListener("input", this._onInput, { passive: !0 }),
                            this.element.removeEventListener("paste", this._onPaste),
                            this.element.removeEventListener("focus", this._onFocus, { passive: !0 }),
                            this.element.removeEventListener("blur", this._onBlur, { passive: !0 });
                    }),
                    (s.enable = function () {
                        this.element.removeAttribute("disabled"), (this.isDisabled = !1);
                    }),
                    (s.disable = function () {
                        this.element.setAttribute("disabled", ""), (this.isDisabled = !0);
                    }),
                    (s.focus = function () {
                        this.isFocussed || this.element.focus();
                    }),
                    (s.blur = function () {
                        this.isFocussed && this.element.blur();
                    }),
                    (s.clear = function (e) {
                        return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
                    }),
                    (s.setWidth = function () {
                        var e = this.element,
                            t = e.style,
                            i = e.value,
                            n = e.placeholder;
                        (t.minWidth = n.length + 1 + "ch"), (t.width = i.length + 1 + "ch");
                    }),
                    (s.setActiveDescendant = function (e) {
                        this.element.setAttribute("aria-activedescendant", e);
                    }),
                    (s.removeActiveDescendant = function () {
                        this.element.removeAttribute("aria-activedescendant");
                    }),
                    (s._onInput = function () {
                        this.type !== ce && this.setWidth();
                    }),
                    (s._onPaste = function (e) {
                        this.preventPaste && e.preventDefault();
                    }),
                    (s._onFocus = function () {
                        this.isFocussed = !0;
                    }),
                    (s._onBlur = function () {
                        this.isFocussed = !1;
                    }),
                    (t = e),
                    (i = [
                        {
                            key: "placeholder",
                            set: function (e) {
                                this.element.placeholder = e;
                            },
                        },
                        {
                            key: "value",
                            get: function () {
                                return S(this.element.value);
                            },
                            set: function (e) {
                                this.element.value = e;
                            },
                        },
                    ]) && ue(t.prototype, i),
                    n && ue(t, n),
                    e
                );
            })(),
            pe = (function () {
                function e(e) {
                    var t = e.element;
                    (this.element = t), (this.scrollPos = this.element.scrollTop), (this.height = this.element.offsetHeight);
                }
                var t = e.prototype;
                return (
                    (t.clear = function () {
                        this.element.innerHTML = "";
                    }),
                    (t.append = function (e) {
                        this.element.appendChild(e);
                    }),
                    (t.getChild = function (e) {
                        return this.element.querySelector(e);
                    }),
                    (t.hasChildren = function () {
                        return this.element.hasChildNodes();
                    }),
                    (t.scrollToTop = function () {
                        this.element.scrollTop = 0;
                    }),
                    (t.scrollToChildElement = function (e, t) {
                        var i = this;
                        if (e) {
                            var n = this.element.offsetHeight,
                                s = this.element.scrollTop + n,
                                r = e.offsetHeight,
                                o = e.offsetTop + r,
                                a = t > 0 ? this.element.scrollTop + o - s : e.offsetTop;
                            requestAnimationFrame(function () {
                                i._animateScroll(a, t);
                            });
                        }
                    }),
                    (t._scrollDown = function (e, t, i) {
                        var n = (i - e) / t,
                            s = n > 1 ? n : 1;
                        this.element.scrollTop = e + s;
                    }),
                    (t._scrollUp = function (e, t, i) {
                        var n = (e - i) / t,
                            s = n > 1 ? n : 1;
                        this.element.scrollTop = e - s;
                    }),
                    (t._animateScroll = function (e, t) {
                        var i = this,
                            n = this.element.scrollTop,
                            s = !1;
                        t > 0 ? (this._scrollDown(n, 4, e), n < e && (s = !0)) : (this._scrollUp(n, 4, e), n > e && (s = !0)),
                            s &&
                                requestAnimationFrame(function () {
                                    i._animateScroll(e, t);
                                });
                    }),
                    e
                );
            })();
        function me(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var fe = (function () {
            function e(e) {
                var t = e.element,
                    i = e.classNames;
                if (((this.element = t), (this.classNames = i), !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement))) throw new TypeError("Invalid element passed");
                this.isDisabled = !1;
            }
            var t,
                i,
                n,
                s = e.prototype;
            return (
                (s.conceal = function () {
                    this.element.classList.add(this.classNames.input), (this.element.hidden = !0), (this.element.tabIndex = -1);
                    var e = this.element.getAttribute("style");
                    e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active");
                }),
                (s.reveal = function () {
                    this.element.classList.remove(this.classNames.input), (this.element.hidden = !1), this.element.removeAttribute("tabindex");
                    var e = this.element.getAttribute("data-choice-orig-style");
                    e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"),
                        this.element.removeAttribute("data-choice"),
                        (this.element.value = this.element.value);
                }),
                (s.enable = function () {
                    this.element.removeAttribute("disabled"), (this.element.disabled = !1), (this.isDisabled = !1);
                }),
                (s.disable = function () {
                    this.element.setAttribute("disabled", ""), (this.element.disabled = !0), (this.isDisabled = !0);
                }),
                (s.triggerEvent = function (e, t) {
                    !(function (e, t, i) {
                        void 0 === i && (i = null);
                        var n = new CustomEvent(t, { detail: i, bubbles: !0, cancelable: !0 });
                        e.dispatchEvent(n);
                    })(this.element, e, t);
                }),
                (t = e),
                (i = [
                    {
                        key: "isActive",
                        get: function () {
                            return "active" === this.element.dataset.choice;
                        },
                    },
                    {
                        key: "dir",
                        get: function () {
                            return this.element.dir;
                        },
                    },
                    {
                        key: "value",
                        get: function () {
                            return this.element.value;
                        },
                        set: function (e) {
                            this.element.value = e;
                        },
                    },
                ]) && me(t.prototype, i),
                n && me(t, n),
                e
            );
        })();
        function ve(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var ge = (function (e) {
            var t, i, n, s, r;
            function o(t) {
                var i,
                    n = t.element,
                    s = t.classNames,
                    r = t.delimiter;
                return ((i = e.call(this, { element: n, classNames: s }) || this).delimiter = r), i;
            }
            return (
                (i = e),
                ((t = o).prototype = Object.create(i.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = i),
                (n = o),
                (s = [
                    {
                        key: "value",
                        get: function () {
                            return this.element.value;
                        },
                        set: function (e) {
                            var t = e
                                .map(function (e) {
                                    return e.value;
                                })
                                .join(this.delimiter);
                            this.element.setAttribute("value", t), (this.element.value = t);
                        },
                    },
                ]) && ve(n.prototype, s),
                r && ve(n, r),
                o
            );
        })(fe);
        function _e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var be = (function (e) {
                var t, i, n, s, r;
                function o(t) {
                    var i,
                        n = t.element,
                        s = t.classNames,
                        r = t.template;
                    return ((i = e.call(this, { element: n, classNames: s }) || this).template = r), i;
                }
                return (
                    (i = e),
                    ((t = o).prototype = Object.create(i.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = i),
                    (o.prototype.appendDocFragment = function (e) {
                        (this.element.innerHTML = ""), this.element.appendChild(e);
                    }),
                    (n = o),
                    (s = [
                        {
                            key: "placeholderOption",
                            get: function () {
                                return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
                            },
                        },
                        {
                            key: "optionGroups",
                            get: function () {
                                return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                            },
                        },
                        {
                            key: "options",
                            get: function () {
                                return Array.from(this.element.options);
                            },
                            set: function (e) {
                                var t = this,
                                    i = document.createDocumentFragment();
                                e.forEach(function (e) {
                                    return (n = e), (s = t.template(n)), void i.appendChild(s);
                                    var n, s;
                                }),
                                    this.appendDocFragment(i);
                            },
                        },
                    ]) && _e(n.prototype, s),
                    r && _e(n, r),
                    o
                );
            })(fe),
            ye = {
                containerOuter: function (e, t, i, n, s, r) {
                    var o = e.containerOuter,
                        a = Object.assign(document.createElement("div"), { className: o });
                    return (
                        (a.dataset.type = r),
                        t && (a.dir = t),
                        n && (a.tabIndex = 0),
                        i && (a.setAttribute("role", s ? "combobox" : "listbox"), s && a.setAttribute("aria-autocomplete", "list")),
                        a.setAttribute("aria-haspopup", "true"),
                        a.setAttribute("aria-expanded", "false"),
                        a
                    );
                },
                containerInner: function (e) {
                    var t = e.containerInner;
                    return Object.assign(document.createElement("div"), { className: t });
                },
                itemList: function (e, t) {
                    var i = e.list,
                        n = e.listSingle,
                        s = e.listItems;
                    return Object.assign(document.createElement("div"), { className: i + " " + (t ? n : s) });
                },
                placeholder: function (e, t) {
                    var i = e.placeholder;
                    return Object.assign(document.createElement("div"), { className: i, innerHTML: t });
                },
                item: function (e, t, i) {
                    var n = e.item,
                        s = e.button,
                        r = e.highlightedState,
                        o = e.itemSelectable,
                        a = e.placeholder,
                        c = t.id,
                        l = t.value,
                        h = t.label,
                        u = t.customProperties,
                        d = t.active,
                        p = t.disabled,
                        m = t.highlighted,
                        f = t.placeholder,
                        v = Object.assign(document.createElement("div"), { className: n, innerHTML: h });
                    if (
                        (Object.assign(v.dataset, { item: "", id: c, value: l, customProperties: u }),
                        d && v.setAttribute("aria-selected", "true"),
                        p && v.setAttribute("aria-disabled", "true"),
                        f && v.classList.add(a),
                        v.classList.add(m ? r : o),
                        i)
                    ) {
                        p && v.classList.remove(o), (v.dataset.deletable = "");
                        var g = Object.assign(document.createElement("button"), { type: "button", className: s, innerHTML: "Remove item" });
                        g.setAttribute("aria-label", "Remove item: '" + l + "'"), (g.dataset.button = ""), v.appendChild(g);
                    }
                    return v;
                },
                choiceList: function (e, t) {
                    var i = e.list,
                        n = Object.assign(document.createElement("div"), { className: i });
                    return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), n;
                },
                choiceGroup: function (e, t) {
                    var i = e.group,
                        n = e.groupHeading,
                        s = e.itemDisabled,
                        r = t.id,
                        o = t.value,
                        a = t.disabled,
                        c = Object.assign(document.createElement("div"), { className: i + " " + (a ? s : "") });
                    return (
                        c.setAttribute("role", "group"),
                        Object.assign(c.dataset, { group: "", id: r, value: o }),
                        a && c.setAttribute("aria-disabled", "true"),
                        c.appendChild(Object.assign(document.createElement("div"), { className: n, innerHTML: o })),
                        c
                    );
                },
                choice: function (e, t, i) {
                    var n = e.item,
                        s = e.itemChoice,
                        r = e.itemSelectable,
                        o = e.selectedState,
                        a = e.itemDisabled,
                        c = e.placeholder,
                        l = t.id,
                        h = t.value,
                        u = t.label,
                        d = t.groupId,
                        p = t.elementId,
                        m = t.disabled,
                        f = t.selected,
                        v = t.placeholder,
                        g = Object.assign(document.createElement("div"), { id: p, innerHTML: u, className: n + " " + s });
                    return (
                        f && g.classList.add(o),
                        v && g.classList.add(c),
                        g.setAttribute("role", d > 0 ? "treeitem" : "option"),
                        Object.assign(g.dataset, { choice: "", id: l, value: h, selectText: i }),
                        m ? (g.classList.add(a), (g.dataset.choiceDisabled = ""), g.setAttribute("aria-disabled", "true")) : (g.classList.add(r), (g.dataset.choiceSelectable = "")),
                        g
                    );
                },
                input: function (e, t) {
                    var i = e.input,
                        n = e.inputCloned,
                        s = Object.assign(document.createElement("input"), { type: "text", className: i + " " + n, autocomplete: "off", autocapitalize: "off", spellcheck: !1 });
                    return s.setAttribute("role", "textbox"), s.setAttribute("aria-autocomplete", "list"), s.setAttribute("aria-label", t), s;
                },
                dropdown: function (e) {
                    var t = e.list,
                        i = e.listDropdown,
                        n = document.createElement("div");
                    return n.classList.add(t, i), n.setAttribute("aria-expanded", "false"), n;
                },
                notice: function (e, t, i) {
                    var n = e.item,
                        s = e.itemChoice,
                        r = e.noResults,
                        o = e.noChoices;
                    void 0 === i && (i = "");
                    var a = [n, s];
                    return "no-choices" === i ? a.push(o) : "no-results" === i && a.push(r), Object.assign(document.createElement("div"), { innerHTML: t, className: a.join(" ") });
                },
                option: function (e) {
                    var t = e.label,
                        i = e.value,
                        n = e.customProperties,
                        s = e.active,
                        r = e.disabled,
                        o = new Option(t, i, !1, s);
                    return n && (o.dataset.customProperties = n), (o.disabled = r), o;
                },
            },
            Ee = function (e) {
                return void 0 === e && (e = !0), { type: z, active: e };
            },
            Ie = function (e, t) {
                return { type: Y, id: e, highlighted: t };
            },
            Se = function (e) {
                var t = e.value,
                    i = e.id,
                    n = e.active,
                    s = e.disabled;
                return { type: X, value: t, id: i, active: n, disabled: s };
            },
            we = function (e) {
                return { type: "SET_IS_LOADING", isLoading: e };
            };
        function Oe(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        var Ce = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
            Ae = {},
            Le = (function () {
                var e, t, i;
                function n(e, t) {
                    var i = this;
                    void 0 === e && (e = "[data-choice]"),
                        void 0 === t && (t = {}),
                        (this.config = o.a.all([M, n.defaults.options, t], {
                            arrayMerge: function (e, t) {
                                return [].concat(t);
                            },
                        }));
                    var s = A(this.config, M);
                    s.length && console.warn("Unknown config option(s) passed", s.join(", "));
                    var r = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(r instanceof HTMLInputElement || r instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                    if (
                        ((this._isTextElement = r.type === ae),
                        (this._isSelectOneElement = r.type === ce),
                        (this._isSelectMultipleElement = r.type === le),
                        (this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement),
                        (this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled),
                        ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto"),
                        t.addItemFilter && "function" != typeof t.addItemFilter)
                    ) {
                        var a = t.addItemFilter instanceof RegExp ? t.addItemFilter : new RegExp(t.addItemFilter);
                        this.config.addItemFilter = a.test.bind(a);
                    }
                    if (
                        (this._isTextElement
                            ? (this.passedElement = new ge({ element: r, classNames: this.config.classNames, delimiter: this.config.delimiter }))
                            : (this.passedElement = new be({
                                  element: r,
                                  classNames: this.config.classNames,
                                  template: function (e) {
                                      return i._templates.option(e);
                                  },
                              })),
                        (this.initialised = !1),
                        (this._store = new k()),
                        (this._initialState = {}),
                        (this._currentState = {}),
                        (this._prevState = {}),
                        (this._currentValue = ""),
                        (this._canSearch = this.config.searchEnabled),
                        (this._isScrollingOnIe = !1),
                        (this._highlightPosition = 0),
                        (this._wasTap = !0),
                        (this._placeholderValue = this._generatePlaceholderValue()),
                        (this._baseId = y(this.passedElement.element, "choices-")),
                        (this._direction = this.passedElement.dir),
                        !this._direction)
                    ) {
                        var c = window.getComputedStyle(this.passedElement.element).direction;
                        c !== window.getComputedStyle(document.documentElement).direction && (this._direction = c);
                    }
                    if (
                        ((this._idNames = { itemChoice: "item-choice" }),
                        (this._presetGroups = this.passedElement.optionGroups),
                        (this._presetOptions = this.passedElement.options),
                        (this._presetChoices = this.config.choices),
                        (this._presetItems = this.config.items),
                        this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))),
                        this.passedElement.options &&
                            this.passedElement.options.forEach(function (e) {
                                i._presetChoices.push({
                                    value: e.value,
                                    label: e.innerHTML,
                                    selected: e.selected,
                                    disabled: e.disabled || e.parentNode.disabled,
                                    placeholder: "" === e.value || e.hasAttribute("placeholder"),
                                    customProperties: e.getAttribute("data-custom-properties"),
                                });
                            }),
                        (this._render = this._render.bind(this)),
                        (this._onFocus = this._onFocus.bind(this)),
                        (this._onBlur = this._onBlur.bind(this)),
                        (this._onKeyUp = this._onKeyUp.bind(this)),
                        (this._onKeyDown = this._onKeyDown.bind(this)),
                        (this._onClick = this._onClick.bind(this)),
                        (this._onTouchMove = this._onTouchMove.bind(this)),
                        (this._onTouchEnd = this._onTouchEnd.bind(this)),
                        (this._onMouseDown = this._onMouseDown.bind(this)),
                        (this._onMouseOver = this._onMouseOver.bind(this)),
                        (this._onFormReset = this._onFormReset.bind(this)),
                        (this._onAKey = this._onAKey.bind(this)),
                        (this._onEnterKey = this._onEnterKey.bind(this)),
                        (this._onEscapeKey = this._onEscapeKey.bind(this)),
                        (this._onDirectionKey = this._onDirectionKey.bind(this)),
                        (this._onDeleteKey = this._onDeleteKey.bind(this)),
                        this.passedElement.isActive)
                    )
                        return this.config.silent || console.warn("Trying to initialise Choices on element already initialised"), void (this.initialised = !0);
                    this.init();
                }
                (e = n),
                    (i = [
                        {
                            key: "defaults",
                            get: function () {
                                return Object.preventExtensions({
                                    get options() {
                                        return Ae;
                                    },
                                    get templates() {
                                        return ye;
                                    },
                                });
                            },
                        },
                    ]),
                    (t = null) && Oe(e.prototype, t),
                    i && Oe(e, i);
                var r = n.prototype;
                return (
                    (r.init = function () {
                        if (!this.initialised) {
                            this._createTemplates(),
                                this._createElements(),
                                this._createStructure(),
                                (this._initialState = C(this._store.state)),
                                this._store.subscribe(this._render),
                                this._render(),
                                this._addEventListeners(),
                                (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(),
                                (this.initialised = !0);
                            var e = this.config.callbackOnInit;
                            e && "function" == typeof e && e.call(this);
                        }
                    }),
                    (r.destroy = function () {
                        this.initialised &&
                            (this._removeEventListeners(),
                            this.passedElement.reveal(),
                            this.containerOuter.unwrap(this.passedElement.element),
                            this.clearStore(),
                            this._isSelectElement && (this.passedElement.options = this._presetOptions),
                            (this._templates = null),
                            (this.initialised = !1));
                    }),
                    (r.enable = function () {
                        return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
                    }),
                    (r.disable = function () {
                        return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
                    }),
                    (r.highlightItem = function (e, t) {
                        if ((void 0 === t && (t = !0), !e)) return this;
                        var i = e.id,
                            n = e.groupId,
                            s = void 0 === n ? -1 : n,
                            r = e.value,
                            o = void 0 === r ? "" : r,
                            a = e.label,
                            c = void 0 === a ? "" : a,
                            l = s >= 0 ? this._store.getGroupById(s) : null;
                        return this._store.dispatch(Ie(i, !0)), t && this.passedElement.triggerEvent(V, { id: i, value: o, label: c, groupValue: l && l.value ? l.value : null }), this;
                    }),
                    (r.unhighlightItem = function (e) {
                        if (!e) return this;
                        var t = e.id,
                            i = e.groupId,
                            n = void 0 === i ? -1 : i,
                            s = e.value,
                            r = void 0 === s ? "" : s,
                            o = e.label,
                            a = void 0 === o ? "" : o,
                            c = n >= 0 ? this._store.getGroupById(n) : null;
                        return this._store.dispatch(Ie(t, !1)), this.passedElement.triggerEvent(V, { id: t, value: r, label: a, groupValue: c && c.value ? c.value : null }), this;
                    }),
                    (r.highlightAll = function () {
                        var e = this;
                        return (
                            this._store.items.forEach(function (t) {
                                return e.highlightItem(t);
                            }),
                            this
                        );
                    }),
                    (r.unhighlightAll = function () {
                        var e = this;
                        return (
                            this._store.items.forEach(function (t) {
                                return e.unhighlightItem(t);
                            }),
                            this
                        );
                    }),
                    (r.removeActiveItemsByValue = function (e) {
                        var t = this;
                        return (
                            this._store.activeItems
                                .filter(function (t) {
                                    return t.value === e;
                                })
                                .forEach(function (e) {
                                    return t._removeItem(e);
                                }),
                            this
                        );
                    }),
                    (r.removeActiveItems = function (e) {
                        var t = this;
                        return (
                            this._store.activeItems
                                .filter(function (t) {
                                    return t.id !== e;
                                })
                                .forEach(function (e) {
                                    return t._removeItem(e);
                                }),
                            this
                        );
                    }),
                    (r.removeHighlightedItems = function (e) {
                        var t = this;
                        return (
                            void 0 === e && (e = !1),
                            this._store.highlightedActiveItems.forEach(function (i) {
                                t._removeItem(i), e && t._triggerChange(i.value);
                            }),
                            this
                        );
                    }),
                    (r.showDropdown = function (e) {
                        var t = this;
                        return this.dropdown.isActive
                            ? this
                            : (requestAnimationFrame(function () {
                                  t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(N, {});
                              }),
                              this);
                    }),
                    (r.hideDropdown = function (e) {
                        var t = this;
                        return this.dropdown.isActive
                            ? (requestAnimationFrame(function () {
                                  t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(F, {});
                              }),
                              this)
                            : this;
                    }),
                    (r.getValue = function (e) {
                        void 0 === e && (e = !1);
                        var t = this._store.activeItems.reduce(function (t, i) {
                            var n = e ? i.value : i;
                            return t.push(n), t;
                        }, []);
                        return this._isSelectOneElement ? t[0] : t;
                    }),
                    (r.setValue = function (e) {
                        var t = this;
                        return this.initialised
                            ? (e.forEach(function (e) {
                                  return t._setChoiceOrItem(e);
                              }),
                              this)
                            : this;
                    }),
                    (r.setChoiceByValue = function (e) {
                        var t = this;
                        return !this.initialised || this._isTextElement
                            ? this
                            : ((Array.isArray(e) ? e : [e]).forEach(function (e) {
                                  return t._findAndSelectChoiceByValue(e);
                              }),
                              this);
                    }),
                    (r.setChoices = function (e, t, i, n) {
                        var s = this;
                        if ((void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === n && (n = !1), !this.initialised))
                            throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                        if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                        if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                        if ((n && this.clearChoices(), "function" == typeof e)) {
                            var r = e(this);
                            if ("function" == typeof Promise && r instanceof Promise)
                                return new Promise(function (e) {
                                    return requestAnimationFrame(e);
                                })
                                    .then(function () {
                                        return s._handleLoadingState(!0);
                                    })
                                    .then(function () {
                                        return r;
                                    })
                                    .then(function (e) {
                                        return s.setChoices(e, t, i, n);
                                    })
                                    .catch(function (e) {
                                        s.config.silent || console.error(e);
                                    })
                                    .then(function () {
                                        return s._handleLoadingState(!1);
                                    })
                                    .then(function () {
                                        return s;
                                    });
                            if (!Array.isArray(r)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof r);
                            return this.setChoices(r, t, i, !1);
                        }
                        if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                        return (
                            this.containerOuter.removeLoadingState(),
                            this._startLoading(),
                            e.forEach(function (e) {
                                e.choices
                                    ? s._addGroup({ id: parseInt(e.id, 10) || null, group: e, valueKey: t, labelKey: i })
                                    : s._addChoice({ value: e[t], label: e[i], isSelected: e.selected, isDisabled: e.disabled, customProperties: e.customProperties, placeholder: e.placeholder });
                            }),
                            this._stopLoading(),
                            this
                        );
                    }),
                    (r.clearChoices = function () {
                        return this._store.dispatch({ type: W }), this;
                    }),
                    (r.clearStore = function () {
                        return this._store.dispatch({ type: "CLEAR_ALL" }), this;
                    }),
                    (r.clearInput = function () {
                        var e = !this._isSelectOneElement;
                        return this.input.clear(e), !this._isTextElement && this._canSearch && ((this._isSearching = !1), this._store.dispatch(Ee(!0))), this;
                    }),
                    (r._render = function () {
                        if (!this._store.isLoading()) {
                            this._currentState = this._store.state;
                            var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                                t = this._isSelectElement,
                                i = this._currentState.items !== this._prevState.items;
                            e && (t && this._renderChoices(), i && this._renderItems(), (this._prevState = this._currentState));
                        }
                    }),
                    (r._renderChoices = function () {
                        var e = this,
                            t = this._store,
                            i = t.activeGroups,
                            n = t.activeChoices,
                            s = document.createDocumentFragment();
                        if (
                            (this.choiceList.clear(),
                            this.config.resetScrollPosition &&
                                requestAnimationFrame(function () {
                                    return e.choiceList.scrollToTop();
                                }),
                            i.length >= 1 && !this._isSearching)
                        ) {
                            var r = n.filter(function (e) {
                                return !0 === e.placeholder && -1 === e.groupId;
                            });
                            r.length >= 1 && (s = this._createChoicesFragment(r, s)), (s = this._createGroupsFragment(i, n, s));
                        } else n.length >= 1 && (s = this._createChoicesFragment(n, s));
                        if (s.childNodes && s.childNodes.length > 0) {
                            var o = this._store.activeItems,
                                a = this._canAddItem(o, this.input.value);
                            a.response ? (this.choiceList.append(s), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", a.notice));
                        } else {
                            var c, l;
                            this._isSearching
                                ? ((l = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText), (c = this._getTemplate("notice", l, "no-results")))
                                : ((l = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText), (c = this._getTemplate("notice", l, "no-choices"))),
                                this.choiceList.append(c);
                        }
                    }),
                    (r._renderItems = function () {
                        var e = this._store.activeItems || [];
                        this.itemList.clear();
                        var t = this._createItemsFragment(e);
                        t.childNodes && this.itemList.append(t);
                    }),
                    (r._createGroupsFragment = function (e, t, i) {
                        var n = this;
                        void 0 === i && (i = document.createDocumentFragment());
                        return (
                            this.config.shouldSort && e.sort(this.config.sorter),
                            e.forEach(function (e) {
                                var s = (function (e) {
                                    return t.filter(function (t) {
                                        return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
                                    });
                                })(e);
                                if (s.length >= 1) {
                                    var r = n._getTemplate("choiceGroup", e);
                                    i.appendChild(r), n._createChoicesFragment(s, i, !0);
                                }
                            }),
                            i
                        );
                    }),
                    (r._createChoicesFragment = function (e, t, i) {
                        var n = this;
                        void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);
                        var s = this.config,
                            r = s.renderSelectedChoices,
                            o = s.searchResultLimit,
                            a = s.renderChoiceLimit,
                            c = this._isSearching ? O : this.config.sorter,
                            l = function (e) {
                                if ("auto" !== r || n._isSelectOneElement || !e.selected) {
                                    var i = n._getTemplate("choice", e, n.config.itemSelectText);
                                    t.appendChild(i);
                                }
                            },
                            h = e;
                        "auto" !== r ||
                            this._isSelectOneElement ||
                            (h = e.filter(function (e) {
                                return !e.selected;
                            }));
                        var u = h.reduce(
                                function (e, t) {
                                    return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
                                },
                                { placeholderChoices: [], normalChoices: [] }
                            ),
                            d = u.placeholderChoices,
                            p = u.normalChoices;
                        (this.config.shouldSort || this._isSearching) && p.sort(c);
                        var m = h.length,
                            f = this._isSelectOneElement ? [].concat(d, p) : p;
                        this._isSearching ? (m = o) : a && a > 0 && !i && (m = a);
                        for (var v = 0; v < m; v += 1) f[v] && l(f[v]);
                        return t;
                    }),
                    (r._createItemsFragment = function (e, t) {
                        var i = this;
                        void 0 === t && (t = document.createDocumentFragment());
                        var n = this.config,
                            s = n.shouldSortItems,
                            r = n.sorter,
                            o = n.removeItemButton;
                        s && !this._isSelectOneElement && e.sort(r), this._isTextElement ? (this.passedElement.value = e) : (this.passedElement.options = e);
                        return (
                            e.forEach(function (e) {
                                var n = i._getTemplate("item", e, o);
                                t.appendChild(n);
                            }),
                            t
                        );
                    }),
                    (r._triggerChange = function (e) {
                        null != e && this.passedElement.triggerEvent(j, { value: e });
                    }),
                    (r._selectPlaceholderChoice = function () {
                        var e = this._store.placeholderChoice;
                        e && (this._addItem({ value: e.value, label: e.label, choiceId: e.id, groupId: e.groupId, placeholder: e.placeholder }), this._triggerChange(e.value));
                    }),
                    (r._handleButtonAction = function (e, t) {
                        if (e && t && this.config.removeItems && this.config.removeItemButton) {
                            var i = t.parentNode.getAttribute("data-id"),
                                n = e.find(function (e) {
                                    return e.id === parseInt(i, 10);
                                });
                            this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._selectPlaceholderChoice();
                        }
                    }),
                    (r._handleItemAction = function (e, t, i) {
                        var n = this;
                        if ((void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement)) {
                            var s = t.getAttribute("data-id");
                            e.forEach(function (e) {
                                e.id !== parseInt(s, 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
                            }),
                                this.input.focus();
                        }
                    }),
                    (r._handleChoiceAction = function (e, t) {
                        if (e && t) {
                            var i = t.dataset.id,
                                n = this._store.getChoiceById(i);
                            if (n) {
                                var s = e[0] && e[0].keyCode ? e[0].keyCode : null,
                                    r = this.dropdown.isActive;
                                if (((n.keyCode = s), this.passedElement.triggerEvent(K, { choice: n }), !n.selected && !n.disabled))
                                    this._canAddItem(e, n.value).response &&
                                        (this._addItem({ value: n.value, label: n.label, choiceId: n.id, groupId: n.groupId, customProperties: n.customProperties, placeholder: n.placeholder, keyCode: n.keyCode }),
                                        this._triggerChange(n.value));
                                this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
                            }
                        }
                    }),
                    (r._handleBackspace = function (e) {
                        if (this.config.removeItems && e) {
                            var t = e[e.length - 1],
                                i = e.some(function (e) {
                                    return e.highlighted;
                                });
                            this.config.editItems && !i && t ? ((this.input.value = t.value), this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
                        }
                    }),
                    (r._startLoading = function () {
                        this._store.dispatch(we(!0));
                    }),
                    (r._stopLoading = function () {
                        this._store.dispatch(we(!1));
                    }),
                    (r._handleLoadingState = function (e) {
                        void 0 === e && (e = !0);
                        var t = this.itemList.getChild("." + this.config.classNames.placeholder);
                        e
                            ? (this.disable(),
                              this.containerOuter.addLoadingState(),
                              this._isSelectOneElement
                                  ? t
                                      ? (t.innerHTML = this.config.loadingText)
                                      : ((t = this._getTemplate("placeholder", this.config.loadingText)), this.itemList.append(t))
                                  : (this.input.placeholder = this.config.loadingText))
                            : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? (t.innerHTML = this._placeholderValue || "") : (this.input.placeholder = this._placeholderValue || ""));
                    }),
                    (r._handleSearch = function (e) {
                        if (e && this.input.isFocussed) {
                            var t = this._store.choices,
                                i = this.config,
                                n = i.searchFloor,
                                s = i.searchChoices,
                                r = t.some(function (e) {
                                    return !e.active;
                                });
                            if (e && e.length >= n) {
                                var o = s ? this._searchChoices(e) : 0;
                                this.passedElement.triggerEvent(R, { value: e, resultCount: o });
                            } else r && ((this._isSearching = !1), this._store.dispatch(Ee(!0)));
                        }
                    }),
                    (r._canAddItem = function (e, t) {
                        var i = !0,
                            n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;
                        if (!this._isSelectOneElement) {
                            var s = (function (e, t, i) {
                                return (
                                    void 0 === i && (i = "value"),
                                    e.some(function (e) {
                                        return "string" == typeof t ? e[i] === t.trim() : e[i] === t;
                                    })
                                );
                            })(e, t);
                            this.config.maxItemCount > 0 &&
                                this.config.maxItemCount <= e.length &&
                                ((i = !1), (n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText)),
                                !this.config.duplicateItemsAllowed && s && i && ((i = !1), (n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText)),
                                this._isTextElement &&
                                    this.config.addItems &&
                                    i &&
                                    "function" == typeof this.config.addItemFilter &&
                                    !this.config.addItemFilter(t) &&
                                    ((i = !1), (n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText));
                        }
                        return { response: i, notice: n };
                    }),
                    (r._searchChoices = function (e) {
                        var t = "string" == typeof e ? e.trim() : e,
                            i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
                        if (t.length < 1 && t === i + " ") return 0;
                        var n = this._store.searchableChoices,
                            r = t,
                            o = [].concat(this.config.searchFields),
                            a = Object.assign(this.config.fuseOptions, { keys: o }),
                            c = new s.a(n, a).search(r);
                        return (
                            (this._currentValue = t),
                            (this._highlightPosition = 0),
                            (this._isSearching = !0),
                            this._store.dispatch(
                                (function (e) {
                                    return { type: U, results: e };
                                })(c)
                            ),
                            c.length
                        );
                    }),
                    (r._addEventListeners = function () {
                        var e = document.documentElement;
                        e.addEventListener("touchend", this._onTouchEnd, !0),
                            this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0),
                            this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0),
                            e.addEventListener("click", this._onClick, { passive: !0 }),
                            e.addEventListener("touchmove", this._onTouchMove, { passive: !0 }),
                            this.dropdown.element.addEventListener("mouseover", this._onMouseOver, { passive: !0 }),
                            this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.containerOuter.element.addEventListener("blur", this._onBlur, { passive: !0 })),
                            this.input.element.addEventListener("keyup", this._onKeyUp, { passive: !0 }),
                            this.input.element.addEventListener("focus", this._onFocus, { passive: !0 }),
                            this.input.element.addEventListener("blur", this._onBlur, { passive: !0 }),
                            this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, { passive: !0 }),
                            this.input.addEventListeners();
                    }),
                    (r._removeEventListeners = function () {
                        var e = document.documentElement;
                        e.removeEventListener("touchend", this._onTouchEnd, !0),
                            this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0),
                            this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0),
                            e.removeEventListener("click", this._onClick),
                            e.removeEventListener("touchmove", this._onTouchMove),
                            this.dropdown.element.removeEventListener("mouseover", this._onMouseOver),
                            this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)),
                            this.input.element.removeEventListener("keyup", this._onKeyUp),
                            this.input.element.removeEventListener("focus", this._onFocus),
                            this.input.element.removeEventListener("blur", this._onBlur),
                            this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset),
                            this.input.removeEventListeners();
                    }),
                    (r._onKeyDown = function (e) {
                        var t,
                            i = e.target,
                            n = e.keyCode,
                            s = e.ctrlKey,
                            r = e.metaKey,
                            o = this._store.activeItems,
                            a = this.input.isFocussed,
                            c = this.dropdown.isActive,
                            l = this.itemList.hasChildren(),
                            h = String.fromCharCode(n),
                            u = Z,
                            d = Q,
                            p = ee,
                            m = te,
                            f = ie,
                            v = ne,
                            g = se,
                            _ = re,
                            b = oe,
                            y = s || r;
                        !this._isTextElement && /[a-zA-Z0-9-_ ]/.test(h) && this.showDropdown();
                        var E =
                            (((t = {})[m] = this._onAKey),
                            (t[p] = this._onEnterKey),
                            (t[f] = this._onEscapeKey),
                            (t[v] = this._onDirectionKey),
                            (t[_] = this._onDirectionKey),
                            (t[g] = this._onDirectionKey),
                            (t[b] = this._onDirectionKey),
                            (t[d] = this._onDeleteKey),
                            (t[u] = this._onDeleteKey),
                            t);
                        E[n] && E[n]({ event: e, target: i, keyCode: n, metaKey: r, activeItems: o, hasFocusedInput: a, hasActiveDropdown: c, hasItems: l, hasCtrlDownKeyPressed: y });
                    }),
                    (r._onKeyUp = function (e) {
                        var t = e.target,
                            i = e.keyCode,
                            n = this.input.value,
                            s = this._store.activeItems,
                            r = this._canAddItem(s, n),
                            o = Z,
                            a = Q;
                        if (this._isTextElement) {
                            if (r.notice && n) {
                                var c = this._getTemplate("notice", r.notice);
                                (this.dropdown.element.innerHTML = c.outerHTML), this.showDropdown(!0);
                            } else this.hideDropdown(!0);
                        } else {
                            var l = (i === o || i === a) && !t.value,
                                h = !this._isTextElement && this._isSearching,
                                u = this._canSearch && r.response;
                            l && h ? ((this._isSearching = !1), this._store.dispatch(Ee(!0))) : u && this._handleSearch(this.input.value);
                        }
                        this._canSearch = this.config.searchEnabled;
                    }),
                    (r._onAKey = function (e) {
                        var t = e.hasItems;
                        e.hasCtrlDownKeyPressed && t && ((this._canSearch = !1), this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
                    }),
                    (r._onEnterKey = function (e) {
                        var t = e.event,
                            i = e.target,
                            n = e.activeItems,
                            s = e.hasActiveDropdown,
                            r = ee,
                            o = i.hasAttribute("data-button");
                        if (this._isTextElement && i.value) {
                            var a = this.input.value;
                            this._canAddItem(n, a).response && (this.hideDropdown(!0), this._addItem({ value: a }), this._triggerChange(a), this.clearInput());
                        }
                        if ((o && (this._handleButtonAction(n, i), t.preventDefault()), s)) {
                            var c = this.dropdown.getChild("." + this.config.classNames.highlightedState);
                            c && (n[0] && (n[0].keyCode = r), this._handleChoiceAction(n, c)), t.preventDefault();
                        } else this._isSelectOneElement && (this.showDropdown(), t.preventDefault());
                    }),
                    (r._onEscapeKey = function (e) {
                        e.hasActiveDropdown && (this.hideDropdown(!0), this.containerOuter.focus());
                    }),
                    (r._onDirectionKey = function (e) {
                        var t,
                            i,
                            n,
                            s = e.event,
                            r = e.hasActiveDropdown,
                            o = e.keyCode,
                            a = e.metaKey,
                            c = se,
                            l = re,
                            h = oe;
                        if (r || this._isSelectOneElement) {
                            this.showDropdown(), (this._canSearch = !1);
                            var u,
                                d = o === c || o === h ? 1 : -1;
                            if (a || o === h || o === l) u = d > 0 ? this.dropdown.element.querySelector("[data-choice-selectable]:last-of-type") : this.dropdown.element.querySelector("[data-choice-selectable]");
                            else {
                                var p = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
                                u = p
                                    ? (function (e, t, i) {
                                          if ((void 0 === i && (i = 1), e instanceof Element && "string" == typeof t)) {
                                              for (var n = (i > 0 ? "next" : "previous") + "ElementSibling", s = e[n]; s; ) {
                                                  if (s.matches(t)) return s;
                                                  s = s[n];
                                              }
                                              return s;
                                          }
                                      })(p, "[data-choice-selectable]", d)
                                    : this.dropdown.element.querySelector("[data-choice-selectable]");
                            }
                            u &&
                                ((t = u),
                                (i = this.choiceList.element),
                                void 0 === (n = d) && (n = 1),
                                (t && (n > 0 ? i.scrollTop + i.offsetHeight >= t.offsetTop + t.offsetHeight : t.offsetTop >= i.scrollTop)) || this.choiceList.scrollToChildElement(u, d),
                                this._highlightChoice(u)),
                                s.preventDefault();
                        }
                    }),
                    (r._onDeleteKey = function (e) {
                        var t = e.event,
                            i = e.target,
                            n = e.hasFocusedInput,
                            s = e.activeItems;
                        !n || i.value || this._isSelectOneElement || (this._handleBackspace(s), t.preventDefault());
                    }),
                    (r._onTouchMove = function () {
                        this._wasTap && (this._wasTap = !1);
                    }),
                    (r._onTouchEnd = function (e) {
                        var t = (e || e.touches[0]).target;
                        this._wasTap &&
                            this.containerOuter.element.contains(t) &&
                            ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation());
                        this._wasTap = !0;
                    }),
                    (r._onMouseDown = function (e) {
                        var t = e.target;
                        if (t instanceof HTMLElement) {
                            if (Ce && this.choiceList.element.contains(t)) {
                                var i = this.choiceList.element.firstElementChild,
                                    n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
                                this._isScrollingOnIe = n;
                            }
                            if (t !== this.input.element) {
                                var s = t.closest("[data-button],[data-item],[data-choice]");
                                if (s instanceof HTMLElement) {
                                    var r = e.shiftKey,
                                        o = this._store.activeItems,
                                        a = s.dataset;
                                    "button" in a ? this._handleButtonAction(o, s) : "item" in a ? this._handleItemAction(o, s, r) : "choice" in a && this._handleChoiceAction(o, s);
                                }
                                e.preventDefault();
                            }
                        }
                    }),
                    (r._onMouseOver = function (e) {
                        var t = e.target;
                        t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t);
                    }),
                    (r._onClick = function (e) {
                        var t = e.target;
                        this.containerOuter.element.contains(t)
                            ? this.dropdown.isActive || this.containerOuter.isDisabled
                                ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown()
                                : this._isTextElement
                                ? document.activeElement !== this.input.element && this.input.focus()
                                : (this.showDropdown(), this.containerOuter.focus())
                            : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
                    }),
                    (r._onFocus = function (e) {
                        var t,
                            i = this,
                            n = e.target;
                        this.containerOuter.element.contains(n) &&
                            (((t = {})[ae] = function () {
                                n === i.input.element && i.containerOuter.addFocusState();
                            }),
                            (t[ce] = function () {
                                i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0);
                            }),
                            (t[le] = function () {
                                n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState());
                            }),
                            t)[this.passedElement.element.type]();
                    }),
                    (r._onBlur = function (e) {
                        var t = this,
                            i = e.target;
                        if (this.containerOuter.element.contains(i) && !this._isScrollingOnIe) {
                            var n,
                                s = this._store.activeItems.some(function (e) {
                                    return e.highlighted;
                                });
                            (((n = {})[ae] = function () {
                                i === t.input.element && (t.containerOuter.removeFocusState(), s && t.unhighlightAll(), t.hideDropdown(!0));
                            }),
                            (n[ce] = function () {
                                t.containerOuter.removeFocusState(), (i === t.input.element || (i === t.containerOuter.element && !t._canSearch)) && t.hideDropdown(!0);
                            }),
                            (n[le] = function () {
                                i === t.input.element && (t.containerOuter.removeFocusState(), t.hideDropdown(!0), s && t.unhighlightAll());
                            }),
                            n)[this.passedElement.element.type]();
                        } else (this._isScrollingOnIe = !1), this.input.element.focus();
                    }),
                    (r._onFormReset = function () {
                        this._store.dispatch({ type: "RESET_TO", state: this._initialState });
                    }),
                    (r._highlightChoice = function (e) {
                        var t = this;
                        void 0 === e && (e = null);
                        var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                        if (i.length) {
                            var n = e;
                            Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)).forEach(function (e) {
                                e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
                            }),
                                n ? (this._highlightPosition = i.indexOf(n)) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]),
                                n.classList.add(this.config.classNames.highlightedState),
                                n.setAttribute("aria-selected", "true"),
                                this.passedElement.triggerEvent(G, { el: n }),
                                this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
                        }
                    }),
                    (r._addItem = function (e) {
                        var t = e.value,
                            i = e.label,
                            n = void 0 === i ? null : i,
                            s = e.choiceId,
                            r = void 0 === s ? -1 : s,
                            o = e.groupId,
                            a = void 0 === o ? -1 : o,
                            c = e.customProperties,
                            l = void 0 === c ? null : c,
                            h = e.placeholder,
                            u = void 0 !== h && h,
                            d = e.keyCode,
                            p = void 0 === d ? null : d,
                            m = "string" == typeof t ? t.trim() : t,
                            f = p,
                            v = l,
                            g = this._store.items,
                            _ = n || m,
                            b = r || -1,
                            y = a >= 0 ? this._store.getGroupById(a) : null,
                            E = g ? g.length + 1 : 1;
                        return (
                            this.config.prependValue && (m = this.config.prependValue + m.toString()),
                            this.config.appendValue && (m += this.config.appendValue.toString()),
                            this._store.dispatch(
                                (function (e) {
                                    var t = e.value,
                                        i = e.label,
                                        n = e.id,
                                        s = e.choiceId,
                                        r = e.groupId,
                                        o = e.customProperties,
                                        a = e.placeholder,
                                        c = e.keyCode;
                                    return { type: $, value: t, label: i, id: n, choiceId: s, groupId: r, customProperties: o, placeholder: a, keyCode: c };
                                })({ value: m, label: _, id: E, choiceId: b, groupId: a, customProperties: l, placeholder: u, keyCode: f })
                            ),
                            this._isSelectOneElement && this.removeActiveItems(E),
                            this.passedElement.triggerEvent(H, { id: E, value: m, label: _, customProperties: v, groupValue: y && y.value ? y.value : void 0, keyCode: f }),
                            this
                        );
                    }),
                    (r._removeItem = function (e) {
                        if (!e || !I("Object", e)) return this;
                        var t = e.id,
                            i = e.value,
                            n = e.label,
                            s = e.choiceId,
                            r = e.groupId,
                            o = r >= 0 ? this._store.getGroupById(r) : null;
                        return (
                            this._store.dispatch(
                                (function (e, t) {
                                    return { type: J, id: e, choiceId: t };
                                })(t, s)
                            ),
                            o && o.value ? this.passedElement.triggerEvent(B, { id: t, value: i, label: n, groupValue: o.value }) : this.passedElement.triggerEvent(B, { id: t, value: i, label: n }),
                            this
                        );
                    }),
                    (r._addChoice = function (e) {
                        var t = e.value,
                            i = e.label,
                            n = void 0 === i ? null : i,
                            s = e.isSelected,
                            r = void 0 !== s && s,
                            o = e.isDisabled,
                            a = void 0 !== o && o,
                            c = e.groupId,
                            l = void 0 === c ? -1 : c,
                            h = e.customProperties,
                            u = void 0 === h ? null : h,
                            d = e.placeholder,
                            p = void 0 !== d && d,
                            m = e.keyCode,
                            f = void 0 === m ? null : m;
                        if (null != t) {
                            var v = this._store.choices,
                                g = n || t,
                                _ = v ? v.length + 1 : 1,
                                b = this._baseId + "-" + this._idNames.itemChoice + "-" + _;
                            this._store.dispatch(
                                (function (e) {
                                    var t = e.value,
                                        i = e.label,
                                        n = e.id,
                                        s = e.groupId,
                                        r = e.disabled,
                                        o = e.elementId,
                                        a = e.customProperties,
                                        c = e.placeholder,
                                        l = e.keyCode;
                                    return { type: q, value: t, label: i, id: n, groupId: s, disabled: r, elementId: o, customProperties: a, placeholder: c, keyCode: l };
                                })({ id: _, groupId: l, elementId: b, value: t, label: g, disabled: a, customProperties: u, placeholder: p, keyCode: f })
                            ),
                                r && this._addItem({ value: t, label: g, choiceId: _, customProperties: u, placeholder: p, keyCode: f });
                        }
                    }),
                    (r._addGroup = function (e) {
                        var t = this,
                            i = e.group,
                            n = e.id,
                            s = e.valueKey,
                            r = void 0 === s ? "value" : s,
                            o = e.labelKey,
                            a = void 0 === o ? "label" : o,
                            c = I("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
                            l = n || Math.floor(new Date().valueOf() * Math.random()),
                            h = !!i.disabled && i.disabled;
                        if (c) {
                            this._store.dispatch(Se({ value: i.label, id: l, active: !0, disabled: h }));
                            c.forEach(function (e) {
                                var i = e.disabled || (e.parentNode && e.parentNode.disabled);
                                t._addChoice({ value: e[r], label: I("Object", e) ? e[a] : e.innerHTML, isSelected: e.selected, isDisabled: i, groupId: l, customProperties: e.customProperties, placeholder: e.placeholder });
                            });
                        } else this._store.dispatch(Se({ value: i.label, id: i.id, active: !1, disabled: i.disabled }));
                    }),
                    (r._getTemplate = function (e) {
                        var t;
                        if (!e) return null;
                        for (var i = this.config.classNames, n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) s[r - 1] = arguments[r];
                        return (t = this._templates[e]).call.apply(t, [this, i].concat(s));
                    }),
                    (r._createTemplates = function () {
                        var e = this.config.callbackOnCreateTemplates,
                            t = {};
                        e && "function" == typeof e && (t = e.call(this, w)), (this._templates = o()(ye, t));
                    }),
                    (r._createElements = function () {
                        (this.containerOuter = new he({
                            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position,
                        })),
                            (this.containerInner = new he({ element: this._getTemplate("containerInner"), classNames: this.config.classNames, type: this.passedElement.element.type, position: this.config.position })),
                            (this.input = new de({ element: this._getTemplate("input", this._placeholderValue), classNames: this.config.classNames, type: this.passedElement.element.type, preventPaste: !this.config.paste })),
                            (this.choiceList = new pe({ element: this._getTemplate("choiceList", this._isSelectOneElement) })),
                            (this.itemList = new pe({ element: this._getTemplate("itemList", this._isSelectOneElement) })),
                            (this.dropdown = new D({ element: this._getTemplate("dropdown"), classNames: this.config.classNames, type: this.passedElement.element.type }));
                    }),
                    (r._createStructure = function () {
                        this.passedElement.conceal(),
                            this.containerInner.wrap(this.passedElement.element),
                            this.containerOuter.wrap(this.containerInner.element),
                            this._isSelectOneElement ? (this.input.placeholder = this.config.searchPlaceholderValue || "") : this._placeholderValue && ((this.input.placeholder = this._placeholderValue), this.input.setWidth()),
                            this.containerOuter.element.appendChild(this.containerInner.element),
                            this.containerOuter.element.appendChild(this.dropdown.element),
                            this.containerInner.element.appendChild(this.itemList.element),
                            this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element),
                            this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element),
                            this._isSelectElement &&
                                ((this._highlightPosition = 0),
                                (this._isSearching = !1),
                                this._startLoading(),
                                this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices),
                                this._stopLoading()),
                            this._isTextElement && this._addPredefinedItems(this._presetItems);
                    }),
                    (r._addPredefinedGroups = function (e) {
                        var t = this,
                            i = this.passedElement.placeholderOption;
                        i && "SELECT" === i.parentNode.tagName && this._addChoice({ value: i.value, label: i.innerHTML, isSelected: i.selected, isDisabled: i.disabled, placeholder: !0 }),
                            e.forEach(function (e) {
                                return t._addGroup({ group: e, id: e.id || null });
                            });
                    }),
                    (r._addPredefinedChoices = function (e) {
                        var t = this;
                        this.config.shouldSort && e.sort(this.config.sorter);
                        var i = e.some(function (e) {
                                return e.selected;
                            }),
                            n = e.findIndex(function (e) {
                                return void 0 === e.disabled || !e.disabled;
                            });
                        e.forEach(function (e, s) {
                            var r = e.value,
                                o = e.label,
                                a = e.customProperties,
                                c = e.placeholder;
                            if (t._isSelectElement)
                                if (e.choices) t._addGroup({ group: e, id: e.id || null });
                                else {
                                    var l = !!(t._isSelectOneElement && !i && s === n) || e.selected,
                                        h = e.disabled;
                                    t._addChoice({ value: r, label: o, isSelected: l, isDisabled: h, customProperties: a, placeholder: c });
                                }
                            else t._addChoice({ value: r, label: o, isSelected: e.selected, isDisabled: e.disabled, customProperties: a, placeholder: c });
                        });
                    }),
                    (r._addPredefinedItems = function (e) {
                        var t = this;
                        e.forEach(function (e) {
                            "object" == typeof e && e.value && t._addItem({ value: e.value, label: e.label, choiceId: e.id, customProperties: e.customProperties, placeholder: e.placeholder }),
                                "string" == typeof e && t._addItem({ value: e });
                        });
                    }),
                    (r._setChoiceOrItem = function (e) {
                        var t = this;
                        ({
                            object: function () {
                                e.value &&
                                    (t._isTextElement
                                        ? t._addItem({ value: e.value, label: e.label, choiceId: e.id, customProperties: e.customProperties, placeholder: e.placeholder })
                                        : t._addChoice({ value: e.value, label: e.label, isSelected: !0, isDisabled: !1, customProperties: e.customProperties, placeholder: e.placeholder }));
                            },
                            string: function () {
                                t._isTextElement ? t._addItem({ value: e }) : t._addChoice({ value: e, label: e, isSelected: !0, isDisabled: !1 });
                            },
                        }[E(e).toLowerCase()]());
                    }),
                    (r._findAndSelectChoiceByValue = function (e) {
                        var t = this,
                            i = this._store.choices.find(function (i) {
                                return t.config.valueComparer(i.value, e);
                            });
                        i && !i.selected && this._addItem({ value: i.value, label: i.label, choiceId: i.id, groupId: i.groupId, customProperties: i.customProperties, placeholder: i.placeholder, keyCode: i.keyCode });
                    }),
                    (r._generatePlaceholderValue = function () {
                        if (this._isSelectElement) {
                            var e = this.passedElement.placeholderOption;
                            return !!e && e.text;
                        }
                        var t = this.config,
                            i = t.placeholder,
                            n = t.placeholderValue,
                            s = this.passedElement.element.dataset;
                        if (i) {
                            if (n) return n;
                            if (s.placeholder) return s.placeholder;
                        }
                        return !1;
                    }),
                    n
                );
            })();
        t.default = Le;
    },
]).default;
