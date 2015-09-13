﻿/*=======================kissy-min.js===========================*/
/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Nov 2 13:11
*/
(function (a, m, s) {
    if (a[m] === s) a[m] = {}; m = a[m]; var n = a.document, e = location, l = function (f, p, r, k) { if (!p || !f) return f; if (r === s) r = true; var i, b, d; if (k && (d = k.length)) for (i = 0; i < d; i++) { b = k[i]; if (b in p) if (r || !(b in f)) f[b] = p[b] } else for (b in p) if (r || !(b in f)) f[b] = p[b]; return f }, o = false, g = [], v = false, z = /^#?([\w-]+)$/, w = 0; l(m, { version: "1.1.5", __init: function () {
        this.Env = { mods: {}, _loadQueue: {} }; var f = n.getElementsByTagName("script"); this.Config = { debug: "", base: f[f.length - 1].src.replace(/^(.*)(seed|kissy).*$/i,
"$1"), timeout: 10
        }
    }, ready: function (f) { v || this._bindReady(); o ? f.call(a, this) : g.push(f); return this }, _bindReady: function () {
        var f = this, p = n.documentElement.doScroll, r = p ? "onreadystatechange" : "DOMContentLoaded", k = function () { f._fireReady() }; v = true; if (n.readyState === "complete") return k(); if (n.addEventListener) { var i = function () { n.removeEventListener(r, i, false); k() }; n.addEventListener(r, i, false); a.addEventListener("load", k, false) } else {
            var b = function () { if (n.readyState === "complete") { n.detachEvent(r, b); k() } }; n.attachEvent(r,
b); a.attachEvent("onload", k); if (a == a.top) { var d = function () { try { p("left"); k() } catch (h) { setTimeout(d, 1) } }; d() } 
        } 
    }, _fireReady: function () { if (!o) { o = true; if (g) { for (var f, p = 0; f = g[p++]; ) f.call(a, this); g = null } } }, available: function (f, p) { if ((f = (f + "").match(z)[1]) && m.isFunction(p)) var r = 1, k = m.later(function () { if (n.getElementById(f) && (p() || 1) || ++r > 500) k.cancel() }, 40, true) }, mix: l, merge: function () { var f = {}, p, r = arguments.length; for (p = 0; p < r; ++p) l(f, arguments[p]); return f }, augment: function () {
        var f = arguments, p = f.length -
2, r = f[0], k = f[p], i = f[p + 1], b = 1; if (!m.isArray(i)) { k = i; i = s; p++ } if (!m.isBoolean(k)) { k = s; p++ } for (; b < p; b++) l(r.prototype, f[b].prototype || f[b], k, i); return r
    }, extend: function (f, p, r, k) { if (!p || !f) return f; var i = Object.prototype, b = p.prototype, d = function (h) { function j() { } j.prototype = h; return new j } (b); f.prototype = d; d.constructor = f; f.superclass = b; if (p !== Object && b.constructor === i.constructor) b.constructor = p; r && l(d, r); k && l(f, k); return f }, namespace: function () {
        var f = arguments, p = f.length, r = null, k, i, b, d = f[p - 1] === true &&
p--; for (k = 0; k < p; ++k) { b = ("" + f[k]).split("."); r = d ? a : this; for (i = a[b[0]] === r ? 1 : 0; i < b.length; ++i) r = r[b[i]] = r[b[i]] || {} } return r
    }, app: function (f, p) { var r = m.isString(f), k = r ? a[f] || {} : f; l(k, this, true, m.__APP_MEMBERS); k.__init(); l(k, m.isFunction(p) ? p() : p); r && (a[f] = k); return k }, log: function (f, p, r) { if (m.Config.debug) { if (r) f = r + ": " + f; if (a.console !== s && console.log) console[p && console[p] ? p : "log"](f) } }, error: function (f) { if (m.Config.debug) throw f; }, guid: function (f) { var p = w++ + ""; return f ? f + p : p } 
    }); m.__init(); m.__APP_MEMBERS =
["__init", "namespace"]; if (e && (e.search || "").indexOf("ks-debug") !== -1) m.Config.debug = true
})(window, "KISSY");
(function (a, m, s) {
    function n(c) { var q = typeof c; return c === null || q !== "object" && q !== "function" } function e(c) { return g.slice.call(c) } var l = document, o = l.documentElement, g = Array.prototype, v = g.indexOf, z = g.lastIndexOf, w = g.filter, f = String.prototype.trim, p = Object.prototype.toString, r = encodeURIComponent, k = decodeURIComponent, i = r("[]"), b = /^\s+|\s+$/g, d = /^(\w+)\[\]$/, h = /\S/; m.mix(m, { isUndefined: function (c) { return c === s }, isBoolean: function (c) { return p.call(c) === "[object Boolean]" }, isString: function (c) {
        return p.call(c) ===
"[object String]"
    }, isNumber: function (c) { return p.call(c) === "[object Number]" && isFinite(c) }, isPlainObject: function (c) { return c && p.call(c) === "[object Object]" && !c.nodeType && !c.setInterval }, isEmptyObject: function (c) { for (var q in c) return false; return true }, isFunction: function (c) { return p.call(c) === "[object Function]" }, isArray: function (c) { return p.call(c) === "[object Array]" }, trim: f ? function (c) { return c == s ? "" : f.call(c) } : function (c) { return c == s ? "" : c.toString().replace(b, "") }, substitute: function (c, q, u) {
        if (!m.isString(c) ||
!m.isPlainObject(q)) return c; return c.replace(u || /\\?\{([^{}]+)\}/g, function (t, x) { if (t.charAt(0) === "\\") return t.slice(1); return q[x] !== s ? q[x] : "" })
    }, each: function (c, q, u) { var t, x = 0, y = c.length, A = y === s || m.isFunction(c); u = u || a; if (A) for (t in c) { if (q.call(u, c[t], t, c) === false) break } else for (t = c[0]; x < y && q.call(u, t, x, c) !== false; t = c[++x]); return c }, indexOf: v ? function (c, q) { return v.call(q, c) } : function (c, q) { for (var u = 0, t = q.length; u < t; ++u) if (q[u] === c) return u; return -1 }, lastIndexOf: z ? function (c, q) {
        return z.call(q,
c)
    } : function (c, q) { for (var u = q.length - 1; u >= 0; u--) if (q[u] === c) break; return u }, unique: function (c, q) { q && c.reverse(); for (var u = c.slice(), t = 0, x, y; t < u.length; ) { for (y = u[t]; (x = m.lastIndexOf(y, u)) !== t; ) u.splice(x, 1); t += 1 } q && u.reverse(); return u }, inArray: function (c, q) { return m.indexOf(c, q) > -1 }, makeArray: function (c) { if (c === null || c === s) return []; if (m.isArray(c)) return c; if (typeof c.length !== "number" || m.isString(c) || m.isFunction(c)) return [c]; return e(c) }, filter: w ? function (c, q, u) { return w.call(c, q, u) } : function (c,
q, u) { var t = []; m.each(c, function (x, y, A) { q.call(u, x, y, A) && t.push(x) }); return t }, param: function (c, q) { if (!m.isPlainObject(c)) return ""; q = q || "&"; var u = [], t, x; for (t in c) { x = c[t]; t = r(t); if (n(x)) u.push(t, "=", r(x + ""), q); else if (m.isArray(x) && x.length) for (var y = 0, A = x.length; y < A; ++y) n(x[y]) && u.push(t, i + "=", r(x[y] + ""), q) } u.pop(); return u.join("") }, unparam: function (c, q) {
    if (typeof c !== "string" || (c = m.trim(c)).length === 0) return {}; for (var u = {}, t = c.split(q || "&"), x, y, A, B, D = 0, C = t.length; D < C; ++D) {
        x = t[D].split("="); y = k(x[0]);
        try { A = k(x[1] || "") } catch (E) { A = x[1] || "" } if ((B = y.match(d)) && B[1]) { u[B[1]] = u[B[1]] || []; u[B[1]].push(A) } else u[y] = A
    } return u
}, later: function (c, q, u, t, x) { q = q || 0; t = t || {}; var y = c, A = m.makeArray(x), B; if (m.isString(c)) y = t[c]; y || m.error("method undefined"); c = function () { y.apply(t, A) }; B = u ? setInterval(c, q) : setTimeout(c, q); return { id: B, interval: u, cancel: function () { this.interval ? clearInterval(B) : clearTimeout(B) } } }, clone: function (c) {
    var q = c, u, t; if (c && ((u = m.isArray(c)) || m.isPlainObject(c))) {
        q = u ? [] : {}; for (t in c) if (c.hasOwnProperty(t)) q[t] =
m.clone(c[t])
    } return q
}, now: function () { return (new Date).getTime() }, globalEval: function (c) { if (c && h.test(c)) { var q = l.getElementsByTagName("head")[0] || o, u = l.createElement("script"); u.text = c; q.insertBefore(u, q.firstChild); q.removeChild(u) } } 
    }); try { e(o.childNodes) } catch (j) { e = function (c) { for (var q = [], u = c.length - 1; u >= 0; u--) q[u] = c[u]; return q } } 
})(window, KISSY);
(function (a, m, s) {
    var n = a.document, e = n.getElementsByTagName("head")[0] || n.documentElement, l = 2, o = 3, g = 4, v = m.mix, z = n.createElement("script").readyState ? function (f, p) { var r = f.onreadystatechange; f.onreadystatechange = function () { var k = f.readyState; if (k === "loaded" || k === "complete") { f.onreadystatechange = null; r && r(); p.call(this) } } } : function (f, p) { f.addEventListener("load", p, false) }, w = /\.css(?:\?|$)/i; a = { add: function (f, p, r) {
        var k = this.Env.mods, i; if (m.isString(f) && !r && m.isPlainObject(p)) { i = {}; i[f] = p; f = i } if (m.isPlainObject(f)) {
            m.each(f,
function (b, d) { b.name = d; k[d] && v(b, k[d], false) }); v(k, f)
        } else { r = r || {}; i = k[f] || {}; f = r.host || i.host || f; i = k[f] || {}; v(i, { name: f, status: l }); if (!i.fns) i.fns = []; p && i.fns.push(p); v(k[f] = i, r); i.attach !== false && this.__isAttached(i.requires) && this.__attachMod(i) } return this
    }, use: function (f, p, r) {
        f = f.replace(/\s+/g, "").split(","); r = r || {}; var k = this, i = k.Env.mods, b = (r || 0).global, d, h = f.length, j, c, q; b && k.__mixMods(b); if (k.__isAttached(f)) p && p(k); else {
            for (d = 0; d < h && (j = i[f[d]]); d++) if (j.status !== g) {
                if (r.order && d > 0) {
                    if (!j.requires) j.requires =
[]; j._requires = j.requires.concat(); c = f[d - 1]; if (!m.inArray(c, j.requires) && !m.inArray(j.name, i[c].requires || [])) j.requires.push(c)
                } k.__attach(j, function () { if (!q && k.__isAttached(f)) { q = true; if (j._requires) j.requires = j._requires; p && p(k) } }, b)
            } return k
        } 
    }, __attach: function (f, p, r) { function k() { if (i.__isAttached(b)) { f.status === l && i.__attachMod(f); f.status === g && p() } } for (var i = this, b = f.requires || [], d = 0, h = b.length; d < h; d++) i.__attach(i.Env.mods[b[d]], k, r); i.__buildPath(f); i.__load(f, k, r) }, __mixMods: function (f) {
        var p =
this.Env.mods, r = f.Env.mods, k; for (k in r) this.__mixMod(p, r, k, f)
    }, __mixMod: function (f, p, r, k) { var i = f[r] || {}, b = i.status; m.mix(i, m.clone(p[r])); if (b) i.status = b; k && this.__buildPath(i, k.Config.base); f[r] = i }, __attachMod: function (f) { var p = this; if (f.fns) { m.each(f.fns, function (r) { r && r(p) }); f.fns = s } f.status = g }, __isAttached: function (f) { for (var p = this.Env.mods, r, k = (f = m.makeArray(f)).length - 1; k >= 0 && (r = p[f[k]]); k--) if (r.status !== g) return false; return true }, __load: function (f, p, r) {
        function k() {
            d[b] = l; if (f.status !==
o) { r && i.__mixMod(i.Env.mods, r.Env.mods, f.name, r); if (f.status !== g) f.status = l; p() } 
        } var i = this, b = f.fullpath, d = m.Env._loadQueue, h = d[b]; f.status = f.status || 0; if (f.status < 1 && h) f.status = h.nodeName ? 1 : l; if (m.isString(f.cssfullpath)) { i.getScript(f.cssfullpath); f.cssfullpath = l } if (f.status < 1 && b) { f.status = 1; h = i.getScript(b, { success: function () { KISSY.log(f.name + " is loaded.", "info"); k() }, error: function () { f.status = o; d[b] = l }, charset: f.charset }); w.test(b) || (d[b] = h) } else f.status === 1 ? z(h, k) : p()
    }, __buildPath: function (f,
p) { function r(i, b) { if (!f[b] && f[i]) f[b] = (p || k.base) + f[i]; if (f[b] && k.debug) f[b] = f[b].replace(/-min/g, "") } var k = this.Config; r("path", "fullpath"); f.cssfullpath !== l && r("csspath", "cssfullpath") }, getScript: function (f, p, r) {
    var k = w.test(f), i = n.createElement(k ? "link" : "script"), b = p, d, h, j; if (m.isPlainObject(b)) { p = b.success; d = b.error; h = b.timeout; r = b.charset } if (k) { i.href = f; i.rel = "stylesheet" } else { i.src = f; i.async = true } if (r) i.charset = r; if (m.isFunction(p)) k ? p.call(i) : z(i, function () { if (j) { j.cancel(); j = s } p.call(i) });
    if (m.isFunction(d)) j = m.later(function () { j = s; d() }, (h || this.Config.timeout) * 1E3); e.insertBefore(i, e.firstChild); return i
} 
    }; v(m, a); m.each(a, function (f, p) { m.__APP_MEMBERS.push(p) })
})(window, KISSY); (function (a) { var m = { core: { path: "packages/core-min.js", charset: "utf-8"} }; a.each(["sizzle", "datalazyload", "flash", "switchable", "suggest", "overlay", "imagezoom", "calendar"], function (s) { m[s] = { path: s + "/" + s + "-pkg-min.js", requires: ["core"], charset: "utf-8"} }); m.calendar.csspath = "calendar/default-min.css"; a.add(m) })(KISSY);
KISSY.add("ua", function (a) {
    var m = navigator.userAgent, s = "", n = "", e, l = {}, o = function (g) { var v = 0; return parseFloat(g.replace(/\./g, function () { return v++ === 0 ? "." : "" })) }; if ((e = m.match(/AppleWebKit\/([\d.]*)/)) && e[1]) { l[s = "webkit"] = o(e[1]); if ((e = m.match(/Chrome\/([\d.]*)/)) && e[1]) l[n = "chrome"] = o(e[1]); else if ((e = m.match(/\/([\d.]*) Safari/)) && e[1]) l[n = "safari"] = o(e[1]); if (/ Mobile\//.test(m)) l.mobile = "apple"; else if (e = m.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) l.mobile = e[0].toLowerCase() } else if ((e =
m.match(/Presto\/([\d.]*)/)) && e[1]) { l[s = "presto"] = o(e[1]); if ((e = m.match(/Opera\/([\d.]*)/)) && e[1]) { l[n = "opera"] = o(e[1]); if ((e = m.match(/Opera\/.* Version\/([\d.]*)/)) && e[1]) l[n] = o(e[1]); if ((e = m.match(/Opera Mini[^;]*/)) && e) l.mobile = e[0].toLowerCase(); else if ((e = m.match(/Opera Mobi[^;]*/)) && e) l.mobile = e[0] } } else if ((e = m.match(/MSIE\s([^;]*)/)) && e[1]) { l[s = "trident"] = 0.1; l[n = "ie"] = o(e[1]); if ((e = m.match(/Trident\/([\d.]*)/)) && e[1]) l[s] = o(e[1]) } else if (e = m.match(/Gecko/)) {
        l[s = "gecko"] = 0.1; if ((e = m.match(/rv:([\d.]*)/)) &&
e[1]) l[s] = o(e[1]); if ((e = m.match(/Firefox\/([\d.]*)/)) && e[1]) l[n = "firefox"] = o(e[1])
    } l.core = s; l.shell = n; l._numberify = o; a.UA = l
});
KISSY.add("ua-extra", function (a) { var m = a.UA, s = navigator.userAgent, n, e, l = {}, o = m._numberify; if (s.match(/360SE/)) l[e = "se360"] = 3; else if (s.match(/Maxthon/) && (n = window.external)) { e = "maxthon"; try { l[e] = o(n.max_version) } catch (g) { l[e] = 0.1 } } else if (n = s.match(/TencentTraveler\s([\d.]*)/)) l[e = "tt"] = n[1] ? o(n[1]) : 0.1; else if (s.match(/TheWorld/)) l[e = "theworld"] = 3; else if (n = s.match(/SE\s([\d.]*)/)) l[e = "sougou"] = n[1] ? o(n[1]) : 0.1; e && (l.shell = e); a.mix(m, l) });
KISSY.add("dom", function (a, m) { function s(n, e) { return n && n.nodeType === e } a.DOM = { _isElementNode: function (n) { return s(n, 1) }, _isKSNode: function (n) { return a.Node && s(n, a.Node.TYPE) }, _getWin: function (n) { return n && "scrollTo" in n && n.document ? n : s(n, 9) ? n.defaultView || n.parentWindow : n === m ? window : false }, _nodeTypeIs: s} });
KISSY.add("selector", function (a, m) {
    function s(b, d) {
        var h, j, c = [], q; d = n(d); if (a.isString(b)) { b = a.trim(b); if (k.test(b)) { if (j = e(b.slice(1), d)) c = [j] } else if (h = i.exec(b)) { j = h[1]; q = h[2]; h = h[3]; if (d = j ? e(j, d) : d) if (h) if (!j || b.indexOf(w) !== -1) c = o(h, q, d); else { if ((j = e(j, d)) && z.hasClass(j, h)) c = [j] } else if (q) c = l(q, d) } else if (a.ExternalSelector) return a.ExternalSelector(b, d); else g(b) } else if (b && (b[p] || b[r])) c = b[p] ? [b[p]()] : b[r](); else if (b && (a.isArray(b) || b && !b.nodeType && b.item && b != window)) c = b; else if (b) c = [b]; if (c &&
!c.nodeType && c.item && c != window) c = a.makeArray(c); c.each = function (u, t) { return a.each(c, u, t) }; return c
    } function n(b) { if (b === m) b = v; else if (a.isString(b) && k.test(b)) b = e(b.slice(1), v); else if (b && b.nodeType !== 1 && b.nodeType !== 9) b = null; return b } function e(b, d) { if (d.nodeType !== 9) d = d.ownerDocument; return d.getElementById(b) } function l(b, d) { return d.getElementsByTagName(b) } function o(b, d, h) {
        h = b = h.getElementsByClassName(b); var j = 0, c = 0, q = b.length, u; if (d && d !== f) {
            h = []; for (d = d.toUpperCase(); j < q; ++j) {
                u = b[j]; if (u.tagName ===
d) h[c++] = u
            } 
        } return h
    } function g(b) { a.error("Unsupported selector: " + b) } var v = document, z = a.DOM, w = " ", f = "*", p = "getDOMNode", r = p + "s", k = /^#[\w-]+$/, i = /^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/; (function () { var b = v.createElement("div"); b.appendChild(v.createComment("")); if (b.getElementsByTagName(f).length > 0) l = function (d, h) { var j = h.getElementsByTagName(d); if (d === f) { for (var c = [], q = 0, u = 0, t; t = j[q++]; ) if (t.nodeType === 1) c[u++] = t; j = c } return j } })(); v.getElementsByClassName || (o = v.querySelectorAll ? function (b, d,
h) { return h.querySelectorAll((d ? d : "") + "." + b) } : function (b, d, h) { d = h.getElementsByTagName(d || f); h = []; var j = 0, c = 0, q = d.length, u, t; for (b = w + b + w; j < q; ++j) { u = d[j]; if ((t = u.className) && (w + t + w).indexOf(b) > -1) h[c++] = u } return h }); a.query = s; a.get = function (b, d) { return s(b, d)[0] || null }; a.mix(z, { query: s, get: a.get, filter: function (b, d) {
    var h = s(b), j, c, q, u = []; if (a.isString(d) && (j = i.exec(d)) && !j[1]) { c = j[2]; q = j[3]; d = function (t) { return !(c && t.tagName !== c.toUpperCase() || q && !z.hasClass(t, q)) } } if (a.isFunction(d)) u = a.filter(h,
d); else if (d && a.ExternalSelector) u = a.ExternalSelector._filter(b, d); else g(d); return u
}, test: function (b, d) { var h = s(b); return z.filter(h, d).length === h.length } 
})
});
KISSY.add("dom-data", function (a, m) {
    var s = window, n = a.DOM, e = "_ks_data_" + a.now(), l = {}, o = {}, g = { EMBED: 1, OBJECT: 1, APPLET: 1 }; a.mix(n, { data: function (v, z, w) {
        if (a.isPlainObject(z)) for (var f in z) n.data(v, f, z[f]); else if (w === m) { v = a.get(v); var p; if (!(!v || g[v.nodeName])) { if (v == s) v = o; p = (f = v && v.nodeType) ? l : v; v = p[f ? v[e] : e]; if (a.isString(z) && v) return v[z]; return v } } else a.query(v).each(function (r) {
            if (!(!r || g[r.nodeName])) {
                if (r == s) r = o; var k = l, i; if (r && r.nodeType) { if (!(i = r[e])) i = r[e] = a.guid() } else { i = e; k = r } if (z && w !==
m) { k[i] || (k[i] = {}); k[i][z] = w } 
            } 
        })
    }, removeData: function (v, z) { a.query(v).each(function (w) { if (w) { if (w == s) w = o; var f, p = l, r, k = w && w.nodeType; if (k) f = w[e]; else { p = w; f = e } if (f) { r = p[f]; if (z) { if (r) { delete r[z]; a.isEmptyObject(r) && n.removeData(w) } } else { if (k) w.removeAttribute && w.removeAttribute(e); else try { delete w[e] } catch (i) { } k && delete p[f] } } } }) } 
    })
});
KISSY.add("dom-class", function (a, m) {
    function s(o, g, v, z) { if (!(g = a.trim(g))) return z ? false : m; o = a.query(o); var w = 0, f = o.length; g = g.split(e); for (var p; w < f; w++) { p = o[w]; if (n._isElementNode(p)) { p = v(p, g, g.length); if (p !== m) return p } } if (z) return false } var n = a.DOM, e = /[\.\s]\s*\.?/, l = /[\n\t]/g; a.mix(n, { hasClass: function (o, g) { return s(o, g, function (v, z, w) { if (v = v.className) { v = " " + v + " "; for (var f = 0, p = true; f < w; f++) if (v.indexOf(" " + z[f] + " ") < 0) { p = false; break } if (p) return true } }, true) }, addClass: function (o, g) {
        s(o, g, function (v,
z, w) { var f = v.className; if (f) { var p = " " + f + " "; f = f; for (var r = 0; r < w; r++) if (p.indexOf(" " + z[r] + " ") < 0) f += " " + z[r]; v.className = a.trim(f) } else v.className = g })
    }, removeClass: function (o, g) { s(o, g, function (v, z, w) { var f = v.className; if (f) if (w) { f = (" " + f + " ").replace(l, " "); for (var p = 0, r; p < w; p++) for (r = " " + z[p] + " "; f.indexOf(r) >= 0; ) f = f.replace(r, " "); v.className = a.trim(f) } else v.className = "" }) }, replaceClass: function (o, g, v) { n.removeClass(o, g); n.addClass(o, v) }, toggleClass: function (o, g, v) {
        var z = a.isBoolean(v), w; s(o,
g, function (f, p, r) { for (var k = 0, i; k < r; k++) { i = p[k]; w = z ? !v : n.hasClass(f, i); n[w ? "removeClass" : "addClass"](f, i) } })
    } 
    })
});
KISSY.add("dom-attr", function (a, m) {
    var s = a.UA, n = document.documentElement, e = !n.hasAttribute, l = n.textContent !== m ? "textContent" : "innerText", o = a.DOM, g = o._isElementNode, v = /^(?:href|src|style)/, z = /^(?:href|src|colspan|rowspan)/, w = /\r/g, f = /^(?:radio|checkbox)/, p = { readonly: "readOnly" }, r = { val: 1, css: 1, html: 1, text: 1, data: 1, width: 1, height: 1, offset: 1 }; e && a.mix(p, { "for": "htmlFor", "class": "className" }); a.mix(o, { attr: function (k, i, b, d) {
        if (a.isPlainObject(i)) { d = b; for (var h in i) o.attr(k, h, i[h], d) } else if (i = a.trim(i)) {
            i =
i.toLowerCase(); if (d && r[i]) return o[i](k, b); i = p[i] || i; if (b === m) { k = a.get(k); if (!g(k)) return m; var j; v.test(i) || (j = k[i]); if (j === m) j = k.getAttribute(i); if (e) if (z.test(i)) j = k.getAttribute(i, 2); else if (i === "style") j = k.style.cssText; return j === null ? m : j } a.each(a.query(k), function (c) { if (g(c)) if (i === "style") c.style.cssText = b; else { if (i === "checked") c[i] = !!b; c.setAttribute(i, "" + b) } })
        } 
    }, removeAttr: function (k, i) { a.each(a.query(k), function (b) { if (g(b)) { o.attr(b, i, ""); b.removeAttribute(i) } }) }, val: function (k, i) {
        if (i ===
m) { var b = a.get(k); if (!g(b)) return m; if (b && b.nodeName.toUpperCase() === "option".toUpperCase()) return (b.attributes.value || {}).specified ? b.value : b.text; if (b && b.nodeName.toUpperCase() === "select".toUpperCase()) { var d = b.selectedIndex, h = b.options; if (d < 0) return null; else if (b.type === "select-one") return o.val(h[d]); b = []; for (var j = 0, c = h.length; j < c; ++j) h[j].selected && b.push(o.val(h[j])); return b } if (s.webkit && f.test(b.type)) return b.getAttribute("value") === null ? "on" : b.value; return (b.value || "").replace(w, "") } a.each(a.query(k),
function (q) { if (q && q.nodeName.toUpperCase() === "select".toUpperCase()) { if (a.isNumber(i)) i += ""; var u = a.makeArray(i), t = q.options, x; j = 0; for (c = t.length; j < c; ++j) { x = t[j]; x.selected = a.inArray(o.val(x), u) } if (!u.length) q.selectedIndex = -1 } else if (g(q)) q.value = i })
    }, text: function (k, i) { if (i === m) { var b = a.get(k); if (g(b)) return b[l] || ""; else if (o._nodeTypeIs(b, 3)) return b.nodeValue } else a.each(a.query(k), function (d) { if (g(d)) d[l] = i; else if (o._nodeTypeIs(d, 3)) d.nodeValue = i }) } 
    })
});
KISSY.add("dom-style", function (a, m) {
    function s(d, h) { var j = a.get(d), c = h === v ? j.offsetWidth : j.offsetHeight; a.each(h === v ? ["Left", "Right"] : ["Top", "Bottom"], function (q) { c -= parseFloat(e._getComputedStyle(j, "padding" + q)) || 0; c -= parseFloat(e._getComputedStyle(j, "border" + q + "Width")) || 0 }); return c } function n(d, h, j) {
        var c = j; if (j === z && f.test(h)) {
            c = 0; if (e.css(d, "position") === "absolute") {
                j = d[h === "left" ? "offsetLeft" : "offsetTop"]; if (l.ie === 8 || l.opera) j -= w(e.css(d.offsetParent, "border-" + h + "-width")) || 0; c = j - (w(e.css(d,
"margin-" + h)) || 0)
            } 
        } return c
    } var e = a.DOM, l = a.UA, o = document, g = o.documentElement, v = "width", z = "auto", w = parseInt, f = /^(?:left|top)/, p = /^(?:width|height|top|left|right|bottom|margin|padding)/i, r = /-([a-z])/ig, k = function (d, h) { return h.toUpperCase() }, i = {}, b = {}; a.mix(e, { _CUSTOM_STYLES: i, _getComputedStyle: function (d, h) { var j = "", c = d.ownerDocument; if (d.style) j = c.defaultView.getComputedStyle(d, null)[h]; return j }, css: function (d, h, j) {
        if (a.isPlainObject(h)) for (var c in h) e.css(d, c, h[c]); else {
            if (h.indexOf("-") > 0) h =
h.replace(r, k); h = i[h] || h; if (j === m) { d = a.get(d); c = ""; if (d && d.style) { c = h.get ? h.get(d) : d.style[h]; if (c === "" && !h.get) c = n(d, h, e._getComputedStyle(d, h)) } return c === m ? "" : c } else { if (j === null || j === "") j = ""; else if (!isNaN(new Number(j)) && p.test(h)) j += "px"; (h === v || h === "height") && parseFloat(j) < 0 || a.each(a.query(d), function (q) { if (q && q.style) { h.set ? h.set(q, j) : q.style[h] = j; if (j === "") q.style.cssText || q.removeAttribute("style") } }) } 
        } 
    }, width: function (d, h) { if (h === m) return s(d, v); else e.css(d, v, h) }, height: function (d, h) {
        if (h ===
m) return s(d, "height"); else e.css(d, "height", h)
    }, show: function (d) { a.query(d).each(function (h) { if (h) { h.style.display = e.data(h, "display") || ""; if (e.css(h, "display") === "none") { var j = h.tagName, c = b[j], q; if (!c) { q = o.createElement(j); o.body.appendChild(q); c = e.css(q, "display"); e.remove(q); b[j] = c } e.data(h, "display", c); h.style.display = c } } }) }, hide: function (d) { a.query(d).each(function (h) { if (h) { var j = h.style, c = j.display; if (c !== "none") { c && e.data(h, "display", c); j.display = "none" } } }) }, toggle: function (d) {
        a.query(d).each(function (h) {
            if (h) h.style.display ===
"none" ? e.show(h) : e.hide(h)
        })
    }, addStyleSheet: function (d, h) { var j; if (h) j = a.get("#" + h); if (!j) { j = e.create("<style>", { id: h }); a.get("head").appendChild(j); if (j.styleSheet) j.styleSheet.cssText = d; else j.appendChild(o.createTextNode(d)) } } 
    }); if (g.style.cssFloat !== m) i["float"] = "cssFloat"; else if (g.style.styleFloat !== m) i["float"] = "styleFloat"
});
KISSY.add("dom-style-ie", function (a, m) {
    if (a.UA.ie) {
        var s = a.DOM, n = document, e = n.documentElement, l = s._CUSTOM_STYLES, o = /^-?\d+(?:px)?$/i, g = /^-?\d/, v = /^(?:width|height)$/; try {
            if (e.style.opacity === m && e.filters) l.opacity = { get: function (w) { var f = 100; try { f = w.filters["DXImageTransform.Microsoft.Alpha"].opacity } catch (p) { try { f = w.filters("alpha").opacity } catch (r) { } } return f / 100 + "" }, set: function (w, f) {
                var p = w.style, r = (w.currentStyle || 0).filter || ""; p.zoom = 1; if (r) if (r = r.replace(/alpha\(opacity=.+\)/ig, "")) r += ", ";
                p.filter = r + "alpha(opacity=" + f * 100 + ")"
            } 
            }
        } catch (z) { } if (!(n.defaultView || {}).getComputedStyle && e.currentStyle) s._getComputedStyle = function (w, f) { var p = w.style, r = w.currentStyle[f]; if (v.test(f)) r = s[f](w) + "px"; else if (!o.test(r) && g.test(r)) { var k = p.left, i = w.runtimeStyle.left; w.runtimeStyle.left = w.currentStyle.left; p.left = f === "fontSize" ? "1em" : r || 0; r = p.pixelLeft + "px"; p.left = k; w.runtimeStyle.left = i } return r } 
    } 
});
KISSY.add("dom-offset", function (a, m) {
    function s(j) { var c = 0, q = 0, u = z(j[r]); if (j[h]) { j = j[h](); c = j[k]; q = j[i]; if (e.mobile !== "apple") { c += n[b](u); q += n[d](u) } } return { left: c, top: q} } var n = a.DOM, e = a.UA, l = window, o = document, g = n._isElementNode, v = n._nodeTypeIs, z = n._getWin, w = o.compatMode === "CSS1Compat", f = Math.max, p = parseInt, r = "ownerDocument", k = "left", i = "top", b = "scrollLeft", d = "scrollTop", h = "getBoundingClientRect"; a.mix(n, { offset: function (j, c) {
        if (!(j = a.get(j)) || !j[r]) return null; if (c === m) return s(j); var q = j; if (n.css(q,
"position") === "static") q.style.position = "relative"; var u = s(q), t = {}, x, y; for (y in c) { x = p(n.css(q, y), 10) || 0; t[y] = x + c[y] - u[y] } n.css(q, t)
    }, scrollIntoView: function (j, c, q, u) {
        if ((j = a.get(j)) && j[r]) {
            u = u === m ? true : !!u; q = q === m ? true : !!q; if (!c || c === l) return j.scrollIntoView(q); c = a.get(c); if (v(c, 9)) c = z(c); var t = c && "scrollTo" in c && c.document, x = n.offset(j), y = t ? { left: n.scrollLeft(c), top: n.scrollTop(c)} : n.offset(c), A = { left: x[k] - y[k], top: x[i] - y[i] }; x = t ? n.viewportHeight(c) : c.clientHeight; y = t ? n.viewportWidth(c) : c.clientWidth;
            var B = n[b](c), D = n[d](c), C = B + y, E = D + x, H = j.offsetHeight; j = j.offsetWidth; var G = A.left + B - (p(n.css(c, "borderLeftWidth")) || 0); A = A.top + D - (p(n.css(c, "borderTopWidth")) || 0); var I = G + j, K = A + H, F, J; if (H > x || A < D || q) F = A; else if (K > E) F = K - x; if (u) if (j > y || G < B || q) J = G; else if (I > C) J = I - y; if (t) { if (F !== m || J !== m) c.scrollTo(J, F) } else { if (F !== m) c[d] = F; if (J !== m) c[b] = J } 
        } 
    } 
    }); a.each(["Left", "Top"], function (j, c) {
        var q = "scroll" + j; n[q] = function (u) {
            var t = 0, x = z(u), y; if (x && (y = x.document)) t = x[c ? "pageYOffset" : "pageXOffset"] || y.documentElement[q] ||
y.body[q]; else if (g(u = a.get(u))) t = u[q]; return t
        } 
    }); a.each(["Width", "Height"], function (j) { n["doc" + j] = function (c) { c = c || o; return f(w ? c.documentElement["scroll" + j] : c.body["scroll" + j], n["viewport" + j](c)) }; n["viewport" + j] = function (c) { var q = "inner" + j; c = z(c); var u = c.document; return q in c ? c[q] : w ? u.documentElement["client" + j] : u.body["client" + j] } })
});
KISSY.add("dom-traversal", function (a, m) {
    function s(o, g, v, z) { if (!(o = a.get(o))) return null; if (g === m) g = 1; var w = null, f, p; if (a.isNumber(g) && g >= 0) { if (g === 0) return o; f = 0; p = g; g = function () { return ++f === p } } for (; o = o[v]; ) if (l(o) && (!g || e.test(o, g)) && (!z || z(o))) { w = o; break } return w } function n(o, g, v) { var z = []; var w = o = a.get(o); if (o && v) w = o.parentNode; if (w) { v = 0; for (w = w.firstChild; w; w = w.nextSibling) if (l(w) && w !== o && (!g || e.test(w, g))) z[v++] = w } return z } var e = a.DOM, l = e._isElementNode; a.mix(e, { parent: function (o, g) {
        return s(o,
g, "parentNode", function (v) { return v.nodeType != 11 })
    }, next: function (o, g) { return s(o, g, "nextSibling") }, prev: function (o, g) { return s(o, g, "previousSibling") }, siblings: function (o, g) { return n(o, g, true) }, children: function (o, g) { return n(o, g) }, contains: function (o, g) { var v = false; if ((o = a.get(o)) && (g = a.get(g))) if (o.contains) return o.contains(g); else if (o.compareDocumentPosition) return !!(o.compareDocumentPosition(g) & 16); else for (; !v && (g = g.parentNode); ) v = g == o; return v } 
    })
});
KISSY.add("dom-create", function (a, m) {
    function s(t) { var x = t.cloneNode(true); if (g.ie < 8) x.innerHTML = t.innerHTML; return x } function n(t, x, y, A) {
        if (y) {
            var B = a.guid("ks-tmp-"), D = RegExp(k); x += '<span id="' + B + '"></span>'; a.available(B, function () {
                var C = a.get("head"), E, H, G, I, K, F; for (D.lastIndex = 0; E = D.exec(x); ) if ((G = (H = E[1]) ? H.match(b) : false) && G[2]) { E = l.createElement("script"); E.src = G[2]; if ((I = H.match(d)) && I[2]) E.charset = I[2]; E.async = true; C.appendChild(E) } else if ((F = E[2]) && F.length > 0) a.globalEval(F); (K = l.getElementById(B)) &&
o.remove(K); a.isFunction(A) && A()
            }); e(t, x)
        } else { e(t, x); a.isFunction(A) && A() } 
    } function e(t, x) { x = (x + "").replace(k, ""); try { t.innerHTML = x } catch (y) { for (; t.firstChild; ) t.removeChild(t.firstChild); x && t.appendChild(o.create(x)) } } var l = document, o = a.DOM, g = a.UA, v = g.ie, z = o._nodeTypeIs, w = o._isElementNode, f = o._isKSNode, p = l.createElement("div"), r = /<(\w+)/, k = /<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig, i = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, b = /\ssrc=(['"])(.*?)\1/i, d = /\scharset=(['"])(.*?)\1/i; a.mix(o, { create: function (t,
x, y) {
        if (z(t, 1) || z(t, 3)) return s(t); if (f(t)) return s(t[0]); if (!(t = a.trim(t))) return null; var A = null; A = o._creators; var B, D = "div", C; if (B = i.exec(t)) A = (y || l).createElement(B[1]); else {
            if ((B = r.exec(t)) && (C = B[1]) && a.isFunction(A[C = C.toLowerCase()])) D = C; t = A[D](t, y).childNodes; if (t.length === 1) y = t[0].parentNode.removeChild(t[0]); else {
                t = t; C = y || l; y = null; if (t && (t.push || t.item) && t[0]) { C = C || t[0].ownerDocument; y = C.createDocumentFragment(); if (t.item) t = a.makeArray(t); C = 0; for (A = t.length; C < A; C++) y.appendChild(t[C]) } y =
y
            } A = y
        } y = A; w(y) && a.isPlainObject(x) && o.attr(y, x, true); return y
    }, _creators: { div: function (t, x) { var y = x ? x.createElement("div") : p; y.innerHTML = t; return y } }, html: function (t, x, y, A) { if (x === m) { t = a.get(t); if (w(t)) return t.innerHTML } else a.each(a.query(t), function (B) { w(B) && n(B, x, y, A) }) }, remove: function (t) { a.each(a.query(t), function (x) { w(x) && x.parentNode && x.parentNode.removeChild(x) }) } 
    }); if (v || g.gecko || g.webkit) {
        var h = o._creators, j = o.create, c = /(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/, q = { option: "select",
            td: "tr", tr: "tbody", tbody: "table", col: "colgroup", legend: "fieldset"
        }, u; for (u in q) (function (t) { h[u] = function (x, y) { return j("<" + t + ">" + x + "</" + t + ">", null, y) } })(q[u]); if (v) { h.script = function (t, x) { var y = x ? x.createElement("div") : p; y.innerHTML = "-" + t; y.removeChild(y.firstChild); return y }; if (v < 8) h.tbody = function (t, x) { var y = j("<table>" + t + "</table>", null, x), A = y.children.tags("tbody")[0]; y.children.length > 1 && A && !c.test(t) && A.parentNode.removeChild(A); return y } } a.mix(h, { optgroup: h.option, th: h.td, thead: h.tbody, tfoot: h.tbody,
            caption: h.tbody, colgroup: h.tbody
        })
    } 
}); KISSY.add("dom-insertion", function (a) { a.mix(a.DOM, { insertBefore: function (m, s) { if ((m = a.get(m)) && (s = a.get(s)) && s.parentNode) s.parentNode.insertBefore(m, s); return m }, insertAfter: function (m, s) { if ((m = a.get(m)) && (s = a.get(s)) && s.parentNode) s.nextSibling ? s.parentNode.insertBefore(m, s.nextSibling) : s.parentNode.appendChild(m); return m } }) });
KISSY.add("event", function (a, m) {
    function s(k, i, b, d, h) { if (a.isString(i)) i = a.query(i); if (a.isArray(i)) { a.each(i, function (j) { r[k](j, b, d, h) }); return true } if ((b = a.trim(b)) && b.indexOf(w) > 0) { a.each(b.split(w), function (j) { r[k](i, j, d, h) }); return true } } function n(k, i) { e(k) && o.data(k, z, i) } function e(k) { return k && k.nodeType !== 3 && k.nodeType !== 8 } var l = document, o = a.DOM, g = l.addEventListener ? function (k, i, b, d) { k.addEventListener && k.addEventListener(i, b, !!d) } : function (k, i, b) { k.attachEvent && k.attachEvent("on" + i, b) },
v = l.removeEventListener ? function (k, i, b, d) { k.removeEventListener && k.removeEventListener(i, b, !!d) } : function (k, i, b) { k.detachEvent && k.detachEvent("on" + i, b) }, z = "ksEventTargetId", w = " ", f = a.now(), p = {}, r = { EVENT_GUID: z, special: {}, add: function (k, i, b, d) {
    if (!s("add", k, i, b, d)) {
        var h = e(k) ? o.data(k, z) : -1, j, c, q, u, t; if (!(h === -1 || !i || !a.isFunction(b))) {
            if (!h) { n(k, h = f++); p[h] = { target: k, events: {}} } c = p[h].events; if (!c[i]) {
                j = ((h = !k.isCustomEventTarget) || k._supportSpecialEvent) && r.special[i] || {}; q = function (x, y) {
                    if (!x ||
!x.fixed) { x = new a.EventObject(k, x, i); a.isPlainObject(y) && a.mix(x, y) } j.setup && j.setup(x); return (j.handle || r._handle)(k, x, c[i].listeners)
                }; c[i] = { handle: q, listeners: [] }; u = j.fix || i; t = j.capture; if (h) g(k, u, q, t); else k._addEvent && k._addEvent(u, q, t)
            } c[i].listeners.push({ fn: b, scope: d || k })
        } 
    } 
}, remove: function (k, i, b, d) {
    if (!s("remove", k, i, b, d)) {
        var h = e(k) ? o.data(k, z) : -1, j, c, q, u, t, x, y; if (h !== -1) if (h && (j = p[h])) if (j.target === k) {
            d = d || k; j = j.events || {}; if (c = j[i]) {
                q = c.listeners; x = q.length; if (a.isFunction(b) && x) {
                    t = u =
0; for (y = []; u < x; ++u) if (b !== q[u].fn || d !== q[u].scope) y[t++] = q[u]; c.listeners = y; x = y.length
                } if (b === m || x === 0) { if (k.isCustomEventTarget) k._addEvent && k._removeEvent(i, c.handle); else { b = r.special[i] || {}; v(k, b.fix || i, c.handle) } delete j[i] } 
            } if (i === m || a.isEmptyObject(j)) { for (i in j) r.remove(k, i); delete p[h]; o.removeData(k, z) } 
        } 
    } 
}, _handle: function (k, i, b) { b = b.slice(0); for (var d, h = 0, j = b.length; h < j; ++h) { d = b[h]; d = d.fn.call(d.scope || k, i); if (d === false && k.isCustomEventTarget || i.isImmediatePropagationStopped) break } return d },
    _getCache: function (k) { return p[k] }, _simpleAdd: g, _simpleRemove: v
}; r.on = r.add; a.Event = r
});
KISSY.add("event-object", function (a, m) {
    function s(l, o, g) { this.currentTarget = l; this.originalEvent = o || {}; if (o) { this.type = o.type; this._fix() } else { this.type = g; this.target = l } this.currentTarget = l; this.fixed = true } var n = document, e = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "); a.augment(s,
{ _fix: function () {
    var l = this.originalEvent, o = e.length, g, v = this.currentTarget; for (v = v.nodeType === 9 ? v : v.ownerDocument || n; o; ) { g = e[--o]; this[g] = l[g] } if (!this.target) this.target = this.srcElement || n; if (this.target.nodeType === 3) this.target = this.target.parentNode; if (!this.relatedTarget && this.fromElement) this.relatedTarget = this.fromElement === this.target ? this.toElement : this.fromElement; if (this.pageX === m && this.clientX !== m) {
        l = v.documentElement; o = v.body; this.pageX = this.clientX + (l && l.scrollLeft || o && o.scrollLeft ||
0) - (l && l.clientLeft || o && o.clientLeft || 0); this.pageY = this.clientY + (l && l.scrollTop || o && o.scrollTop || 0) - (l && l.clientTop || o && o.clientTop || 0)
    } if (this.which === m) this.which = this.charCode !== m ? this.charCode : this.keyCode; if (this.metaKey === m) this.metaKey = this.ctrlKey; if (!this.which && this.button !== m) this.which = this.button & 1 ? 1 : this.button & 2 ? 3 : this.button & 4 ? 2 : 0
}, preventDefault: function () { var l = this.originalEvent; if (l.preventDefault) l.preventDefault(); else l.returnValue = false; this.isDefaultPrevented = true }, stopPropagation: function () {
    var l =
this.originalEvent; if (l.stopPropagation) l.stopPropagation(); else l.cancelBubble = true; this.isPropagationStopped = true
}, stopImmediatePropagation: function () { var l = this.originalEvent; l.stopImmediatePropagation ? l.stopImmediatePropagation() : this.stopPropagation(); this.isImmediatePropagationStopped = true }, halt: function (l) { l ? this.stopImmediatePropagation() : this.stopPropagation(); this.preventDefault() } 
}); a.EventObject = s
});
KISSY.add("event-target", function (a, m) { var s = a.Event; a.EventTarget = { isCustomEventTarget: true, fire: function (n, e) { var l = a.DOM.data(this, s.EVENT_GUID) || -1; if ((l = ((s._getCache(l) || {}).events || {})[n]) && a.isFunction(l.handle)) return l.handle(m, e); return this }, on: function (n, e, l) { s.add(this, n, e, l); return this }, detach: function (n, e, l) { s.remove(this, n, e, l); return this } } });
KISSY.add("event-mouseenter", function (a) { var m = a.Event; a.UA.ie || a.each([{ name: "mouseenter", fix: "mouseover" }, { name: "mouseleave", fix: "mouseout"}], function (s) { m.special[s.name] = { fix: s.fix, setup: function (n) { n.type = s.name }, handle: function (n, e, l) { if (a.DOM._isKSNode(n)) n = n[0]; var o = e.relatedTarget; try { for (; o && o !== n; ) o = o.parentNode; o !== n && m._handle(n, e, l) } catch (g) { } } } }) });
KISSY.add("event-focusin", function (a) { var m = a.Event; document.addEventListener && a.each([{ name: "focusin", fix: "focus" }, { name: "focusout", fix: "blur"}], function (s) { m.special[s.name] = { fix: s.fix, capture: true, setup: function (n) { n.type = s.name } } }) });
KISSY.add("node", function (a) { function m(n, e, l) { if (!(this instanceof m)) return new m(n, e, l); if (n) { if (a.isString(n)) { n = s.create(n, e, l); if (n.nodeType === 11) return new a.NodeList(n.childNodes) } else if (n instanceof m) return n; else n = n; this[0] = n } else this.length = 0 } var s = a.DOM; m.TYPE = "-ks-Node"; a.augment(m, { length: 1, getDOMNode: function () { return this[0] }, nodeType: m.TYPE }); a.one = function (n, e) { var l = a.get(n, e); return l ? new m(l) : null }; a.Node = m });
KISSY.add("nodelist", function (a) {
    function m(e) { if (!(this instanceof m)) return new m(e); n.push.apply(this, a.makeArray(e) || []) } var s = a.DOM, n = Array.prototype; a.mix(m.prototype, { length: 0, item: function (e) { var l = null; if (s._isElementNode(this[e])) l = new a.Node(this[e]); return l }, getDOMNodes: function () { return n.slice.call(this) }, each: function (e, l) { var o = this.length, g = 0, v; for (v = new a.Node(this[0]); g < o && e.call(l || v, v, g, this) !== false; v = new a.Node(this[++g])); return this } }); a.all = function (e, l) {
        return new m(a.query(e,
l, true))
    }; a.NodeList = m
});
KISSY.add("node-attach", function (a, m) {
    function s(i, b, d, h) { i = [this[i ? f : w]()].concat(a.makeArray(b)); if (b[d] === m) return h.apply(e, i); else { h.apply(e, i); return this } } function n(i, b) {
        a.each(i, function (d) {
            a.each([v, z], function (h, j) {
                h[d] = function (c) {
                    switch (b) {
                        case p: return function () { return s.call(this, j, arguments, 1, c) }; case r: return function () { return s.call(this, j, arguments, 0, c) }; case k: return function () {
                            var q = this[j ? f : w](); return (q = c.apply(e, [q].concat(a.makeArray(arguments)))) ? new (a[a.isArray(q) ? "NodeList" :
"Node"])(q) : null
                        }; default: return function () { var q = this[j ? f : w](); q = c.apply(e, [q].concat(a.makeArray(arguments))); return q === m ? this : q } 
                    } 
                } (e[d])
            })
        })
    } var e = a.DOM, l = a.Event, o = e._nodeTypeIs, g = e._isKSNode, v = a.Node.prototype, z = a.NodeList.prototype, w = "getDOMNode", f = w + "s", p = 1, r = 2, k = 4; a.mix(v, { one: function (i) { return a.one(i, this[0]) }, all: function (i) { return a.all(i, this[0]) } }); n(["data", "removeData"], p); n(["hasClass", "addClass", "removeClass", "replaceClass", "toggleClass"]); n(["attr", "removeAttr"], p); n(["val", "text"],
r); n(["css"], p); n(["width", "height"], r); n(["offset"], r); n(["scrollIntoView"]); n(["parent", "next", "prev", "siblings", "children"], k); n(["contains"]); n(["html"], r); n(["remove"]); a.each(["insertBefore", "insertAfter"], function (i) { v[i] = function (b) { e[i].call(e, this[0], b); return this } }); a.each([v, z], function (i, b) {
    a.mix(i, { append: function (d) { d && a.each(this, function (h) { var j; if (b || a.isString(d)) j = e.create(d); else { if (o(d, 1) || o(d, 3)) j = d; if (g(d)) j = d[0] } h.appendChild(j) }); return this }, appendTo: function (d) {
        if ((d =
a.get(d)) && d.appendChild) a.each(this, function (h) { d.appendChild(h) }); return this
    } 
    })
}); a.each([v, z], function (i) { a.mix(i, a.EventTarget); i._supportSpecialEvent = true; i._addEvent = function (b, d, h) { for (var j = 0, c = this.length; j < c; j++) l._simpleAdd(this[j], b, d, h) }; i._removeEvent = function (b, d, h) { for (var j = 0, c = this.length; j < c; j++) l._simpleRemove(this[j], b, d, h) }; delete i.fire })
});
KISSY.add("cookie", function (a) {
    var m = document, s = encodeURIComponent, n = decodeURIComponent; a.Cookie = { get: function (e) { var l; if (a.isString(e) && e !== "") if (e = m.cookie.match("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)")) l = e[1] ? n(e[1]) : ""; return l }, set: function (e, l, o, g, v, z) {
        l = s(l); var w = o; if (typeof w === "number") { w = new Date; w.setTime(w.getTime() + o * 864E5) } if (w instanceof Date) l += "; expires=" + w.toUTCString(); if (a.isString(g) && g !== "") l += "; domain=" + g; if (a.isString(v) && v !== "") l += "; path=" + v; if (z) l += "; secure"; m.cookie = e +
"=" + l
    }, remove: function (e, l, o, g) { this.set(e, "", 0, l, o, g) } 
    }
});
KISSY.add("json", function (a) {
    function m(w) { return w < 10 ? "0" + w : w } function s(w) { l.lastIndex = 0; return l.test(w) ? '"' + w.replace(l, function (f) { var p = v[f]; return typeof p === "string" ? p : "\\u" + ("0000" + f.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + w + '"' } function n(w, f) {
        var p, r, k, i, b = o, d, h = f[w]; if (h && typeof h === "object" && typeof h.toJSON === "function") h = h.toJSON(w); if (typeof z === "function") h = z.call(f, w, h); switch (typeof h) {
            case "string": return s(h); case "number": return isFinite(h) ? String(h) : "null"; case "boolean": case "null": return String(h);
            case "object": if (!h) return "null"; o += g; d = []; if (Object.prototype.toString.apply(h) === "[object Array]") { i = h.length; for (p = 0; p < i; p += 1) d[p] = n(p, h) || "null"; k = d.length === 0 ? "[]" : o ? "[\n" + o + d.join(",\n" + o) + "\n" + b + "]" : "[" + d.join(",") + "]"; o = b; return k } if (z && typeof z === "object") { i = z.length; for (p = 0; p < i; p += 1) { r = z[p]; if (typeof r === "string") if (k = n(r, h)) d.push(s(r) + (o ? ": " : ":") + k) } } else for (r in h) if (Object.hasOwnProperty.call(h, r)) if (k = n(r, h)) d.push(s(r) + (o ? ": " : ":") + k); k = d.length === 0 ? "{}" : o ? "{\n" + o + d.join(",\n" + o) +
"\n" + b + "}" : "{" + d.join(",") + "}"; o = b; return k
        } 
    } a = a.JSON = window.JSON || {}; if (typeof Date.prototype.toJSON !== "function") { Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + m(this.getUTCMonth() + 1) + "-" + m(this.getUTCDate()) + "T" + m(this.getUTCHours()) + ":" + m(this.getUTCMinutes()) + ":" + m(this.getUTCSeconds()) + "Z" : null }; String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf() } } var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
l = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o, g, v = { "": "\\b", "\t": "\\t", "\n": "\\n", "": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, z; if (typeof a.stringify !== "function") a.stringify = function (w, f, p) { var r; g = o = ""; if (typeof p === "number") for (r = 0; r < p; r += 1) g += " "; else if (typeof p === "string") g = p; if ((z = f) && typeof f !== "function" && (typeof f !== "object" || typeof f.length !== "number")) throw Error("JSON.stringify"); return n("", { "": w }) }; if (typeof a.parse !==
"function") a.parse = function (w, f) {
    function p(k, i) { var b, d, h = k[i]; if (h && typeof h === "object") for (b in h) if (Object.hasOwnProperty.call(h, b)) { d = p(h, b); if (d !== undefined) h[b] = d; else delete h[b] } return f.call(k, i, h) } var r; w = String(w); e.lastIndex = 0; if (e.test(w)) w = w.replace(e, function (k) { return "\\u" + ("0000" + k.charCodeAt(0).toString(16)).slice(-4) }); if (/^[\],:{}\s]*$/.test(w.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g,
""))) { r = eval("(" + w + ")"); return typeof f === "function" ? p({ "": r }, "") : r } throw new SyntaxError("JSON.parse");
} 
});
KISSY.add("anim-easing", function (a) {
    var m = Math, s = m.PI, n = m.pow, e = m.sin, l = 1.70158, o = { easeNone: function (g) { return g }, easeIn: function (g) { return g * g }, easeOut: function (g) { return (2 - g) * g }, easeBoth: function (g) { return (g *= 2) < 1 ? 0.5 * g * g : 0.5 * (1 - --g * (g - 2)) }, easeInStrong: function (g) { return g * g * g * g }, easeOutStrong: function (g) { return 1 - --g * g * g * g }, easeBothStrong: function (g) { return (g *= 2) < 1 ? 0.5 * g * g * g * g : 0.5 * (2 - (g -= 2) * g * g * g) }, elasticIn: function (g) { if (g === 0 || g === 1) return g; return -(n(2, 10 * (g -= 1)) * e((g - 0.075) * 2 * s / 0.3)) },
        elasticOut: function (g) { if (g === 0 || g === 1) return g; return n(2, -10 * g) * e((g - 0.075) * 2 * s / 0.3) + 1 }, elasticBoth: function (g) { if (g === 0 || (g *= 2) === 2) return g; if (g < 1) return -0.5 * n(2, 10 * (g -= 1)) * e((g - 0.1125) * 2 * s / 0.45); return n(2, -10 * (g -= 1)) * e((g - 0.1125) * 2 * s / 0.45) * 0.5 + 1 }, backIn: function (g) { if (g === 1) g -= 0.0010; return g * g * ((l + 1) * g - l) }, backOut: function (g) { return (g -= 1) * g * ((l + 1) * g + l) + 1 }, backBoth: function (g) { if ((g *= 2) < 1) return 0.5 * g * g * (((l *= 1.525) + 1) * g - l); return 0.5 * ((g -= 2) * g * (((l *= 1.525) + 1) * g + l) + 2) }, bounceIn: function (g) {
            return 1 -
o.bounceOut(1 - g)
        }, bounceOut: function (g) { return g < 1 / 2.75 ? 7.5625 * g * g : g < 2 / 2.75 ? 7.5625 * (g -= 1.5 / 2.75) * g + 0.75 : g < 2.5 / 2.75 ? 7.5625 * (g -= 2.25 / 2.75) * g + 0.9375 : 7.5625 * (g -= 2.625 / 2.75) * g + 0.984375 }, bounceBoth: function (g) { if (g < 0.5) return o.bounceIn(g * 2) * 0.5; return o.bounceOut(g * 2 - 1) * 0.5 + 0.5 } 
    }; o.NativeTimeFunction = { easeNone: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeBoth: "ease-in-out", easeInStrong: "cubic-bezier(0.9, 0.0, 0.9, 0.5)", easeOutStrong: "cubic-bezier(0.1, 0.5, 0.1, 1.0)", easeBothStrong: "cubic-bezier(0.9, 0.0, 0.1, 1.0)" };
    a.Easing = o
});
KISSY.add("anim", function (a, m) {
    function s(b, d, h, j, c, q) {
        if (b = a.get(b)) {
            if (!(this instanceof s)) return new s(b, d, h, j, c, q); var u = a.isPlainObject(h); d = d; this.domEl = b; if (a.isPlainObject(d)) d = a.param(d, ";").replace(/=/g, ":").replace(/%23/g, "#").replace(/([A-Z])/g, "-$1").toLowerCase(); var t = {}, x = p.length, y; f.innerHTML = '<div style="' + d + '"></div>'; for (b = f.firstChild.style; x--; ) if (y = b[p[x]]) t[p[x]] = l(y); this.props = t; this.targetStyle = d; if (u) u = a.merge(i, h); else {
                u = a.clone(i); if (h) u.duration = w(h) || 1; if (a.isString(j) ||
a.isFunction(j)) u.easing = j; if (a.isFunction(c)) u.complete = c; if (q !== m) u.nativeSupport = q
            } this.config = u; if (u.nativeSupport && n() && a.isString(j = u.easing)) if (/cubic-bezier\([\s\d.,]+\)/.test(j) || (j = z.NativeTimeFunction[j])) { u.easing = j; this.transitionName = n() } a.isFunction(c) && this.on(k, c)
        } 
    } function n() { var b = "transition", d; if (f.style[b] !== m) d = b; else a.each(["Webkit", "Moz", "O"], function (h) { if (f.style[b = h + "Transition"] !== m) { d = b; return false } }); n = function () { return d }; return d } function e(b, d, h) {
        a.UA.ie && h.indexOf(r) >
-1 && v.css(b, r, d[r].v); b.style.cssText += ";" + h
    } function l(b) { var d = w(b); b = (b + "").replace(/^[-\d.]+/, ""); return isNaN(d) ? { v: b, u: "", f: g} : { v: d, u: b, f: o} } function o(b, d, h) { return (b + (d - b) * h).toFixed(3) } function g(b, d, h) {
        for (var j = 2, c, q, u = [], t = []; c = 3, q = arguments[j - 1], j--; ) if (q.substr(0, 4) === "rgb(") for (q = q.match(/\d+/g); c--; ) u.push(~ ~q[c]); else if (q.substr(0, 1) === "#") {
            if (q.length === 4) q = "#" + q.substr(1, 1) + q.substr(1, 1) + q.substr(2, 1) + q.substr(2, 1) + q.substr(3, 1) + q.substr(3, 1); for (; c--; ) u.push(parseInt(q.substr(1 +
c * 2, 2), 16))
        } else return d; for (; c--; ) { j = ~ ~(u[c + 3] + (u[c] - u[c + 3]) * h); t.push(j < 0 ? 0 : j > 255 ? 255 : j) } return "rgb(" + t.join(",") + ")"
    } var v = a.DOM, z = a.Easing, w = parseFloat, f = v.create("<div>"), p = "backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
r = "opacity", k = "complete", i = { duration: 1, easing: "easeNone", nativeSupport: true }; a.augment(s, a.EventTarget, { run: function () {
    var b = this, d = b.config, h = b.domEl, j, c, q, u, t = b.props, x = {}, y; for (y in t) x[y] = l(v.css(h, y)); if (b.fire("start") !== false) {
        b.stop(); if (b.transitionName) b._nativeRun(); else {
            j = d.duration * 1E3; q = a.now(); u = q + j; c = d.easing; if (a.isString(c)) c = z[c] || z.easeNone; b.timer = a.later(d = function () {
                var A = a.now(), B = A > u ? 1 : (A - q) / j, D, C, E; for (y in t) {
                    D = x[y]; C = t[y]; if (C.v == 0) C.u = D.u; if (D.u !== C.u) D.v = 0; v.css(h, y,
C.f(D.v, C.v, c(B)) + C.u)
                } if (b.fire("step") === false || (E = A > u)) { b.stop(); E && b.fire(k) } 
            }, 13, true); d()
        } return b
    } 
}, _nativeRun: function () { var b = this, d = b.config, h = b.domEl, j = b.props, c = d.duration * 1E3; d = d.easing; var q = b.transitionName, u = {}; u[q + "Property"] = "all"; u[q + "Duration"] = c + "ms"; u[q + "TimingFunction"] = d; v.css(h, u); a.later(function () { e(h, j, b.targetStyle) }, 0); a.later(function () { b.stop(true) }, c) }, stop: function (b) {
    if (this.transitionName) this._nativeStop(b); else {
        if (this.timer) { this.timer.cancel(); this.timer = m } if (b) {
            e(this.domEl,
this.props, this.targetStyle); this.fire(k)
        } 
    } return this
}, _nativeStop: function (b) { var d = this.domEl, h = this.transitionName, j = this.props, c; if (b) { v.css(d, h + "Property", "none"); this.fire(k) } else { for (c in j) v.css(d, c, v._getComputedStyle(d, c)); v.css(d, h + "Property", "none") } } 
}); s.supportTransition = function () { return !!n() }; a.Anim = s
});
KISSY.add("anim-node-plugin", function (a, m) {
    function s(k, i, b, d, h) {
        if (i === "toggle") { h = n.css(k, l) === o ? 1 : 0; i = "show" } if (h) n.css(k, l, n.data(k, l) || ""); var j = {}; a.each(r[i], function (c) { if (c === g) n.css(k, g, v); else if (c === z) { j.opacity = h ? 1 : 0; h && n.css(k, z, 0) } else if (c === w) { j.height = h ? n.css(k, w) || k.naturalHeight : 0; h && n.css(k, w, 0) } else if (c === f) { j.width = h ? n.css(k, f) || k.naturalWidth : 0; h && n.css(k, f, 0) } }); (new a.Anim(k, j, b, "easeOut", function () {
            if (!h) {
                var c = k.style, q = c[l]; if (q !== o) { q && n.data(k, l, q); c[l] = o } n.css(k, { height: p,
                    width: p, overflow: p, opacity: 1
                })
            } d && a.isFunction(d) && d()
        })).run()
    } var n = a.DOM, e = a.Anim, l = "display", o = "none", g = "overflow", v = "hidden", z = "opacity", w = "height", f = "width", p = "auto", r = { show: [g, z, w, f], fade: [z], slide: [g, w] }; a.each([a.Node.prototype, a.NodeList.prototype], function (k) {
        k.animate = function () { var i = a.makeArray(arguments); a.each(this, function (b) { e.apply(m, [b].concat(i)).run() }); return this }; a.each({ show: ["show", 1], hide: ["show", 0], toggle: ["toggle"], fadeIn: ["fade", 1], fadeOut: ["fade", 0], slideDown: ["slide",
1], slideUp: ["slide", 0]
        }, function (i, b) { k[b] = function (d, h) { n[b] && arguments.length === 0 ? n[b](this) : a.each(this, function (j) { s(j, i[0], d, h, i[1]) }); return this } })
    })
});
KISSY.add("attribute", function (a, m) {
    function s() { } function n(e) { e += ""; return e.charAt(0).toUpperCase() + e.substring(1) } a.augment(s, { __initAttrs: function () { if (!this.__attrs) { this.__attrs = {}; this.__attrVals = {} } }, addAttr: function (e, l) { this.__initAttrs(); this.__attrs[e] = a.clone(l || {}); return this }, addAttrs: function (e, l) { var o = this; a.each(e, function (g, v) { if (v in l) g.value = l[v]; o.addAttr(v, g) }); return o }, hasAttr: function (e) { return e && e in (this.__attrs || {}) }, removeAttr: function (e) {
        if (this.hasAttr(e)) {
            delete this.__attrs.name;
            delete this.__attrVals.name
        } return this
    }, set: function (e, l) { var o = this.get(e); if (o !== l) if (false !== this.__fireAttrChange("before", e, o, l)) { this.__set(e, l); this.__fireAttrChange("after", e, o, this.__attrVals[e]); return this } }, __fireAttrChange: function (e, l, o, g) { return this.fire(e + n(l) + "Change", { attrName: l, prevVal: o, newVal: g }) }, __set: function (e, l) { var o, g = this.__attrs[e]; if (g = g && g.setter) o = g.call(this, l); if (o !== m) l = o; this.__attrVals[e] = l }, get: function (e) {
        var l; this.__initAttrs(); l = (l = this.__attrs[e]) && l.getter;
        e = e in this.__attrVals ? this.__attrVals[e] : this.__getDefAttrVal(e); if (l) e = l.call(this, e); return e
    }, __getDefAttrVal: function (e) { e = this.__attrs[e]; var l; if (e) { if (l = e.valueFn) { l = l.call(this); if (l !== m) e.value = l; delete e.valueFn } return e.value } }, reset: function (e) { if (this.hasAttr(e)) return this.set(e, this.__getDefAttrVal(e)); for (e in this.__attrs) this.hasAttr(e) && this.reset(e); return this } 
    }); a.Attribute = s
});
KISSY.add("base", function (a) { function m(s) { for (var n = this.constructor, e, l; n; ) { if (l = n.ATTRS) for (e in l) l.hasOwnProperty(e) && !this.hasAttr(e) && this.addAttr(e, l[e]); n = n.superclass ? n.superclass.constructor : null } if (s) for (e in s) s.hasOwnProperty(e) && this.__set(e, s[e]) } a.augment(m, a.EventTarget, a.Attribute); a.Base = m }); KISSY.add("core");
