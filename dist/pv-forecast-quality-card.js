const P = globalThis, L = P.ShadowRoot && (P.ShadyCSS === void 0 || P.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, F = /* @__PURE__ */ Symbol(), W = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== F) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (L && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = W.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && W.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const $t = (s) => new nt(typeof s == "string" ? s : s + "", void 0, F), _t = (s, ...t) => {
  const e = s.length === 1 ? s[0] : t.reduce((i, r, n) => i + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + s[n + 1], s[0]);
  return new nt(e, s, F);
}, bt = (s, t) => {
  if (L) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), r = P.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, s.appendChild(i);
  }
}, q = L ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return $t(e);
})(s) : s;
const { is: yt, defineProperty: wt, getOwnPropertyDescriptor: xt, getOwnPropertyNames: At, getOwnPropertySymbols: Et, getPrototypeOf: St } = Object, I = globalThis, K = I.trustedTypes, kt = K ? K.emptyScript : "", Ct = I.reactiveElementPolyfillSupport, E = (s, t) => s, U = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? kt : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, ot = (s, t) => !yt(s, t), Z = { attribute: !0, type: String, converter: U, reflect: !1, useDefault: !1, hasChanged: ot };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), I.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let w = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Z) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && wt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: r, set: n } = xt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: r, set(o) {
      const a = r?.call(this);
      n?.call(this, o), this.requestUpdate(t, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Z;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const t = St(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const e = this.properties, i = [...At(e), ...Et(e)];
      for (const r of i) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, r] of e) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const r = this._$Eu(e, i);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i) e.unshift(q(r));
    } else t !== void 0 && e.push(q(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return bt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const n = (i.converter?.toAttribute !== void 0 ? i.converter : U).toAttribute(e, i.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const n = i.getPropertyOptions(r), o = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : U;
      this._$Em = r;
      const a = o.fromAttribute(e, n.type);
      this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, r = !1, n) {
    if (t !== void 0) {
      const o = this.constructor;
      if (r === !1 && (n = this[t]), i ??= o.getPropertyOptions(t), !((i.hasChanged ?? ot)(n, e) || i.useDefault && i.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: r, wrapped: n }, o) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), n !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), r === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, n] of i) {
        const { wrapped: o } = n, a = this[r];
        o !== !0 || this._$AL.has(r) || a === void 0 || this.C(r, void 0, n, a);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((i) => i.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, w[E("elementProperties")] = /* @__PURE__ */ new Map(), w[E("finalized")] = /* @__PURE__ */ new Map(), Ct?.({ ReactiveElement: w }), (I.reactiveElementVersions ??= []).push("2.1.2");
const V = globalThis, Y = (s) => s, N = V.trustedTypes, G = N ? N.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, at = "$lit$", v = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + v, Mt = `<${lt}>`, b = document, k = () => b.createComment(""), C = (s) => s === null || typeof s != "object" && typeof s != "function", j = Array.isArray, Tt = (s) => j(s) || typeof s?.[Symbol.iterator] == "function", O = `[ 	
\f\r]`, A = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, J = /-->/g, X = />/g, $ = RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Q = /'/g, tt = /"/g, ct = /^(?:script|style|textarea|title)$/i, Pt = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), u = Pt(1), y = /* @__PURE__ */ Symbol.for("lit-noChange"), p = /* @__PURE__ */ Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), _ = b.createTreeWalker(b, 129);
function ht(s, t) {
  if (!j(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return G !== void 0 ? G.createHTML(t) : t;
}
const Nt = (s, t) => {
  const e = s.length - 1, i = [];
  let r, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = A;
  for (let a = 0; a < e; a++) {
    const l = s[a];
    let c, d, h = -1, m = 0;
    for (; m < l.length && (o.lastIndex = m, d = o.exec(l), d !== null); ) m = o.lastIndex, o === A ? d[1] === "!--" ? o = J : d[1] !== void 0 ? o = X : d[2] !== void 0 ? (ct.test(d[2]) && (r = RegExp("</" + d[2], "g")), o = $) : d[3] !== void 0 && (o = $) : o === $ ? d[0] === ">" ? (o = r ?? A, h = -1) : d[1] === void 0 ? h = -2 : (h = o.lastIndex - d[2].length, c = d[1], o = d[3] === void 0 ? $ : d[3] === '"' ? tt : Q) : o === tt || o === Q ? o = $ : o === J || o === X ? o = A : (o = $, r = void 0);
    const f = o === $ && s[a + 1].startsWith("/>") ? " " : "";
    n += o === A ? l + Mt : h >= 0 ? (i.push(c), l.slice(0, h) + at + l.slice(h) + v + f) : l + v + (h === -2 ? a : f);
  }
  return [ht(s, n + (s[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class M {
  constructor({ strings: t, _$litType$: e }, i) {
    let r;
    this.parts = [];
    let n = 0, o = 0;
    const a = t.length - 1, l = this.parts, [c, d] = Nt(t, e);
    if (this.el = M.createElement(c, i), _.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (r = _.nextNode()) !== null && l.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const h of r.getAttributeNames()) if (h.endsWith(at)) {
          const m = d[o++], f = r.getAttribute(h).split(v), g = /([.?@])?(.*)/.exec(m);
          l.push({ type: 1, index: n, name: g[2], strings: f, ctor: g[1] === "." ? It : g[1] === "?" ? Rt : g[1] === "@" ? Ot : R }), r.removeAttribute(h);
        } else h.startsWith(v) && (l.push({ type: 6, index: n }), r.removeAttribute(h));
        if (ct.test(r.tagName)) {
          const h = r.textContent.split(v), m = h.length - 1;
          if (m > 0) {
            r.textContent = N ? N.emptyScript : "";
            for (let f = 0; f < m; f++) r.append(h[f], k()), _.nextNode(), l.push({ type: 2, index: ++n });
            r.append(h[m], k());
          }
        }
      } else if (r.nodeType === 8) if (r.data === lt) l.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = r.data.indexOf(v, h + 1)) !== -1; ) l.push({ type: 7, index: n }), h += v.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const i = b.createElement("template");
    return i.innerHTML = t, i;
  }
}
function x(s, t, e = s, i) {
  if (t === y) return t;
  let r = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const n = C(t) ? void 0 : t._$litDirective$;
  return r?.constructor !== n && (r?._$AO?.(!1), n === void 0 ? r = void 0 : (r = new n(s), r._$AT(s, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = r : e._$Cl = r), r !== void 0 && (t = x(s, r._$AS(s, t.values), r, i)), t;
}
class zt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: i } = this._$AD, r = (t?.creationScope ?? b).importNode(e, !0);
    _.currentNode = r;
    let n = _.nextNode(), o = 0, a = 0, l = i[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let c;
        l.type === 2 ? c = new T(n, n.nextSibling, this, t) : l.type === 1 ? c = new l.ctor(n, l.name, l.strings, this, t) : l.type === 6 && (c = new Ut(n, this, t)), this._$AV.push(c), l = i[++a];
      }
      o !== l?.index && (n = _.nextNode(), o++);
    }
    return _.currentNode = b, r;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class T {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, r) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = r, this._$Cv = r?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = x(this, t, e), C(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== y && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Tt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && C(this._$AH) ? this._$AA.nextSibling.data = t : this.T(b.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = M.createElement(ht(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === r) this._$AH.p(e);
    else {
      const n = new zt(r, this), o = n.u(this.options);
      n.p(e), this.T(o), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = et.get(t.strings);
    return e === void 0 && et.set(t.strings, e = new M(t)), e;
  }
  k(t) {
    j(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, r = 0;
    for (const n of t) r === e.length ? e.push(i = new T(this.O(k()), this.O(k()), this, this.options)) : i = e[r], i._$AI(n), r++;
    r < e.length && (this._$AR(i && i._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = Y(t).nextSibling;
      Y(t).remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, r, n) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = p;
  }
  _$AI(t, e = this, i, r) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) t = x(this, t, e, 0), o = !C(t) || t !== this._$AH && t !== y, o && (this._$AH = t);
    else {
      const a = t;
      let l, c;
      for (t = n[0], l = 0; l < n.length - 1; l++) c = x(this, a[i + l], e, l), c === y && (c = this._$AH[l]), o ||= !C(c) || c !== this._$AH[l], c === p ? t = p : t !== p && (t += (c ?? "") + n[l + 1]), this._$AH[l] = c;
    }
    o && !r && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class It extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class Rt extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class Ot extends R {
  constructor(t, e, i, r, n) {
    super(t, e, i, r, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = x(this, t, e, 0) ?? p) === y) return;
    const i = this._$AH, r = t === p && i !== p || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, n = t !== p && (i === p || r);
    r && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ut {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    x(this, t);
  }
}
const Ht = V.litHtmlPolyfillSupport;
Ht?.(M, T), (V.litHtmlVersions ??= []).push("3.3.3");
const Dt = (s, t, e) => {
  const i = e?.renderBefore ?? t;
  let r = i._$litPart$;
  if (r === void 0) {
    const n = e?.renderBefore ?? null;
    i._$litPart$ = r = new T(t.insertBefore(k(), n), n, void 0, e ?? {});
  }
  return r._$AI(s), r;
};
const B = globalThis;
let S = class extends w {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Dt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return y;
  }
};
S._$litElement$ = !0, S.finalized = !0, B.litElementHydrateSupport?.({ LitElement: S });
const Lt = B.litElementPolyfillSupport;
Lt?.({ LitElement: S });
(B.litElementVersions ??= []).push("4.2.2");
const Ft = { ATTRIBUTE: 1 }, Vt = (s) => (...t) => ({ _$litDirective$: s, values: t });
let jt = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
const dt = "important", Bt = " !" + dt, Wt = Vt(class extends jt {
  constructor(s) {
    if (super(s), s.type !== Ft.ATTRIBUTE || s.name !== "style" || s.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(s) {
    return Object.keys(s).reduce((t, e) => {
      const i = s[e];
      return i == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${i};`;
    }, "");
  }
  update(s, [t]) {
    const { style: e } = s.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const i of this.ft) t[i] == null && (this.ft.delete(i), i.includes("-") ? e.removeProperty(i) : e[i] = null);
    for (const i in t) {
      const r = t[i];
      if (r != null) {
        this.ft.add(i);
        const n = typeof r == "string" && r.endsWith(Bt);
        i.includes("-") || n ? e.setProperty(i, n ? r.slice(0, -11) : r, n ? dt : "") : e[i] = r;
      }
    }
    return y;
  }
}), qt = {
  powerTitle: "PV-Leistungsfehler",
  energyTitle: "PV-Ertragsabweichung",
  equal: "Gleichauf",
  unavailable: "Noch keine Auswertung",
  unavailableHint: "Entitäten prüfen oder auf das erste Intervall warten.",
  bestMatch: (s) => `${s} liegt näher am Ist`,
  lessDistance: (s) => `${s} geringerer Fehler`,
  singlePowerHint: "mittlerer Fehler zur Ist-Leistung",
  tooHigh: "über Ist",
  tooLow: "unter Ist",
  exact: "exakt am Ist",
  idealZero: "0 · ideal",
  low: "zu wenig",
  high: "zu viel",
  infoLabel: "Kennzahl erklären",
  staleSnapshot: "Der Prognose-Snapshot ist nicht von heute.",
  powerTooltipTitle: "Mittlerer absoluter Fehler (MAE)",
  energyTooltipTitle: "Ertragsabweichung",
  powerExplanation: (s, t) => `Mittelt den Abstand zwischen Prognose und Ist-Leistung je abgeschlossenem 15-Minuten-Intervall. ${s} kW entsprechen dabei ${t} kWh. Kleiner ist besser.`,
  energyExplanation: "Vergleicht prognostizierte und tatsächliche Energie der abgeschlossenen Intervalle. Plus bedeutet zu viel, Minus zu wenig; 0 % ist ideal.",
  completedIntervals: (s) => `${s} Intervalle`,
  firstTrend: (s, t) => `${s}/${t} Intervalle · erste Tendenz`,
  waitingIntervals: "Kein Intervall",
  dayAhead: "Day-ahead",
  testRun: "Testlauf",
  providerOne: "Anbieter 1",
  providerTwo: "Anbieter 2"
}, Kt = {
  powerTitle: "PV power error",
  energyTitle: "PV yield deviation",
  equal: "Tied",
  unavailable: "No evaluation yet",
  unavailableHint: "Check the entities or wait for the first interval.",
  bestMatch: (s) => `${s} is closer to actual`,
  lessDistance: (s) => `${s} lower error`,
  singlePowerHint: "average error against actual power",
  tooHigh: "above actual",
  tooLow: "below actual",
  exact: "exactly on actual",
  idealZero: "0 · ideal",
  low: "too low",
  high: "too high",
  infoLabel: "Explain this metric",
  staleSnapshot: "The forecast snapshot is not from today.",
  powerTooltipTitle: "Mean absolute error (MAE)",
  energyTooltipTitle: "Yield deviation",
  powerExplanation: (s, t) => `Averages the distance between forecast and actual power for each completed 15-minute interval. ${s} kW corresponds to ${t} kWh. Lower is better.`,
  energyExplanation: "Compares forecast and actual energy for completed intervals. Positive means too high, negative too low; 0% is ideal.",
  completedIntervals: (s) => `${s} intervals`,
  firstTrend: (s, t) => `${s}/${t} intervals · early trend`,
  waitingIntervals: "No interval yet",
  dayAhead: "Day-ahead",
  testRun: "Test run",
  providerOne: "Provider 1",
  providerTwo: "Provider 2"
};
function Zt(s, t) {
  return s?.toLowerCase().startsWith("de") ? qt : Kt;
}
const Yt = /* @__PURE__ */ new Set(["", "unknown", "unavailable", "none", "null"]);
function Gt(s) {
  if (!s || Yt.has(s.state.toLowerCase())) return null;
  const t = Number(s.state);
  return Number.isFinite(t) ? t : null;
}
function it(s, t) {
  return !s || !t ? null : Gt(s.states[t]);
}
function Jt(s) {
  const t = Math.max(0, ...s.filter((e) => e !== null));
  return Math.max(0.5, Math.ceil(t * 1.2 / 0.5) * 0.5);
}
function Xt(s) {
  const t = Math.max(
    0,
    ...s.filter((e) => e !== null).map((e) => Math.abs(e))
  );
  return Math.max(10, Math.ceil(t * 1.2 / 5) * 5);
}
function Qt(s, t, e) {
  return t === null || !Number.isFinite(t) || e <= 0 ? 0 : s === "power" ? Math.max(0, Math.min(100, t / e * 100)) : Math.max(0, Math.min(100, (t + e) / (2 * e) * 100));
}
function te(s, t) {
  const e = t.filter(
    (c) => c.value !== null && Number.isFinite(c.value) && (s !== "power" || c.value >= 0)
  );
  if (e.length === 0) return { kind: "unavailable" };
  if (e.length === 1)
    return { kind: "single", winner: e[0] };
  const i = e[0], r = e[1];
  if (!i || !r || i.value === null || r.value === null)
    return { kind: "unavailable" };
  const n = s === "power" ? i.value : Math.abs(i.value), o = s === "power" ? r.value : Math.abs(r.value);
  if (Math.abs(n - o) < 1e-6) return { kind: "tie" };
  const a = n < o ? i : r;
  return {
    kind: "winner",
    winner: a,
    other: a === i ? r : i,
    difference: Math.abs(n - o)
  };
}
function ee(s) {
  if (!s) return {};
  const [t, e, i] = s.split("|");
  return { date: t, timestamp: e, mode: i };
}
function ie(s, t) {
  return !!(s.date && s.date !== t);
}
function re(s, t) {
  if (!s) return t;
  const e = s.trim();
  return [
    /^#[0-9a-f]{3,8}$/i,
    /^rgba?\([\d\s.,%]+\)$/i,
    /^hsla?\([\d\s.,%a-z-]+\)$/i,
    /^var\(--[a-z0-9-_]+\)$/i,
    /^[a-z]+$/i
  ].some((r) => r.test(e)) ? e : t;
}
const rt = "#22C55E", st = "#7C4DFF", z = class z extends S {
  static getConfigForm() {
    return {
      schema: [
        {
          name: "metric",
          required: !0,
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "power", label: "Power accuracy / Leistungsgenauigkeit" },
                { value: "energy", label: "Energy deviation / Ertragsabweichung" }
              ]
            }
          }
        },
        { name: "title", selector: { text: {} } },
        {
          type: "expandable",
          name: "provider_1",
          title: "Provider 1",
          schema: [
            { name: "name", selector: { text: {} } },
            { name: "entity", required: !0, selector: { entity: { domain: "sensor" } } },
            { name: "color", selector: { text: {} } },
            {
              name: "marker",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "circle", label: "Circle / Kreis" },
                    { value: "diamond", label: "Diamond / Raute" }
                  ]
                }
              }
            }
          ]
        },
        {
          type: "expandable",
          name: "provider_2",
          title: "Provider 2 (optional)",
          schema: [
            { name: "name", selector: { text: {} } },
            { name: "entity", selector: { entity: { domain: "sensor" } } },
            { name: "color", selector: { text: {} } },
            {
              name: "marker",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "circle", label: "Circle / Kreis" },
                    { value: "diamond", label: "Diamond / Raute" }
                  ]
                }
              }
            }
          ]
        },
        {
          type: "expandable",
          name: "evaluation",
          title: "Evaluation context / Auswertungskontext",
          flatten: !0,
          schema: [
            {
              name: "interval_count_entity",
              selector: { entity: { domain: ["counter", "sensor", "input_number"] } }
            },
            {
              name: "snapshot_entity",
              selector: { entity: { domain: ["input_text", "sensor"] } }
            },
            {
              name: "minimum_intervals",
              selector: { number: { min: 1, max: 96, mode: "box", step: 1 } }
            }
          ]
        }
      ],
      computeLabel: (t) => ({
        metric: "Metric / Kennzahl",
        title: "Title / Titel",
        name: "Name",
        entity: "Metric entity / Kennzahl-Entität",
        color: "Color / Farbe",
        marker: "Marker",
        interval_count_entity: "Interval counter / Intervallzähler",
        snapshot_entity: "Snapshot status entity / Snapshot-Status",
        minimum_intervals: "Minimum intervals / Mindestintervalle"
      })[t.name ?? ""] ?? t.name ?? ""
    };
  }
  static getStubConfig() {
    return {
      metric: "power",
      provider_1: {
        name: "Solcast",
        entity: "sensor.pv_forecast_quality",
        color: rt,
        marker: "circle"
      },
      provider_2: {
        name: "Helios Forecast",
        color: st,
        marker: "diamond"
      },
      minimum_intervals: 8
    };
  }
  setConfig(t) {
    if (!t || !["power", "energy"].includes(t.metric))
      throw new Error("metric must be either 'power' or 'energy'");
    if (!t.provider_1?.entity?.trim())
      throw new Error("provider_1.entity is required");
    this._config = {
      ...t,
      provider_1: { ...t.provider_1 },
      provider_2: t.provider_2 ? { ...t.provider_2 } : void 0
    };
  }
  getCardSize() {
    return 4;
  }
  getGridOptions() {
    return {
      columns: 6,
      min_columns: 6
    };
  }
  render() {
    if (!this._config) return u``;
    const t = this._config.metric, e = this.hass?.locale?.language ?? navigator.language, i = Zt(e), r = e || "en", n = this._readings(t, i.providerOne, i.providerTwo), o = n.map((gt) => gt.value), a = t === "power" ? Jt(o) : Xt(o), l = this._config.title ?? (t === "power" ? i.powerTitle : i.energyTitle), c = it(this.hass, this._config.interval_count_entity), d = Math.max(1, Math.round(this._config.minimum_intervals ?? 8)), h = this._config.snapshot_entity ? this.hass?.states[this._config.snapshot_entity]?.state : void 0, m = ee(h), f = ie(m, this._todayKey()), g = c !== null && c <= 0, pt = c !== null && c > 0 && c < d, ut = f || g ? { kind: "unavailable" } : te(t, n), mt = f ? i.staleSnapshot : g ? i.waitingIntervals : void 0, ft = t === "power" ? i.powerTooltipTitle : i.energyTooltipTitle, vt = this._explanation(t, n[0]?.value ?? null, r, i);
    return u`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <h2>${l}</h2>
            <div class="info-control">
              <button
                class="info-button"
                type="button"
                aria-label=${i.infoLabel}
                aria-describedby="metric-tooltip"
              >
                ${this._infoIcon()}
              </button>
              <span id="metric-tooltip" class="metric-tooltip" role="tooltip">
                <strong>${ft}</strong>
                <span>${vt}</span>
              </span>
            </div>
          </header>

          ${this._verdict(t, ut, r, i, pt, mt)}
          ${this._chart(t, n, a, r, i)}

          <footer class="card-footer">
            <span>${this._intervalStatus(c, d, i)}</span>
            ${f ? u`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${i.staleSnapshot}</span>` : m.mode === "bootstrap" || m.mode === "day_ahead" ? u`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${m.mode === "bootstrap" ? i.testRun : i.dayAhead}</span>` : p}
          </footer>
        </div>
      </ha-card>
    `;
  }
  _readings(t, e, i) {
    if (!this._config) return [];
    const r = [
      this._reading(
        t,
        this._config.provider_1,
        e,
        rt,
        "circle"
      )
    ];
    return this._config.provider_2?.entity && r.push(
      this._reading(
        t,
        this._config.provider_2,
        i,
        st,
        "diamond"
      )
    ), r;
  }
  _reading(t, e, i, r, n) {
    const o = e.entity, a = o ? this.hass?.states[o] : void 0, l = a && this.hass?.formatEntityName ? this.hass.formatEntityName(
      a,
      [{ type: "device" }, { type: "entity" }],
      { separator: " · " }
    ) : void 0, c = a?.attributes.friendly_name, d = it(this.hass, o);
    return {
      name: e.name?.trim() || l || (typeof c == "string" ? c : i),
      entity: o,
      color: re(e.color, r),
      marker: e.marker ?? n,
      value: t === "power" && d !== null && d < 0 ? null : d
    };
  }
  _verdict(t, e, i, r, n, o) {
    if (e.kind === "unavailable")
      return u`<section class="verdict unavailable">
        <strong class="verdict-value verdict-empty">${r.unavailable}</strong>
        <span class="verdict-support">${o ?? r.unavailableHint}</span>
      </section>`;
    if (e.kind === "tie")
      return u`<section class="verdict">
        <strong class="verdict-value">${r.equal}</strong>
      </section>`;
    const a = e.winner;
    if (!a || a.value === null) return u``;
    if (e.kind === "single") {
      const c = this._formatValue(t, a.value, i), d = t === "power" ? `${a.name} · ${r.singlePowerHint}` : `${a.name} · ${this._energyDirection(a.value, r)}`;
      return u`<section class="verdict">
        <strong class="verdict-value numeric">${c}</strong>
        <span class="verdict-support">${d}</span>
      </section>`;
    }
    const l = t === "power" && e.difference !== void 0 && e.other ? r.lessDistance(this._formatValue(t, e.difference, i)) : `${this._formatMagnitude(t, a.value, i)} ${this._energyDirection(
      a.value,
      r
    )}`;
    return u`<section class="verdict">
      <div class="winner-line" aria-label=${r.bestMatch(a.name)}>
        ${n ? p : this._checkIcon()}<strong class="verdict-value">${a.name}</strong>
      </div>
      <span class="verdict-support">${l}</span>
    </section>`;
  }
  _chart(t, e, i, r, n) {
    const o = e.map(
      (a) => `${a.name}: ${a.value === null ? n.unavailable : this._formatValue(t, a.value, r)}`
    ).join(", ");
    return u`<div class=${t === "power" ? "chart power-chart" : "chart energy-chart"} role="img" aria-label=${o}>
      ${e.map((a) => this._chartRow(t, a, i, r))}
      <div class="axis" aria-hidden="true">
        ${t === "power" ? u`<span>${n.idealZero}</span><span>${this._formatAxis(i, r)} kW</span>` : u`<span>${n.low}</span><span>${n.idealZero}</span><span>${n.high}</span>`}
      </div>
    </div>`;
  }
  _chartRow(t, e, i, r) {
    const n = Qt(t, e.value, i), o = t === "energy" ? Math.min(50, n) : 0, a = t === "energy" ? Math.abs(n - 50) : n, l = {
      "--series-color": e.color,
      "--marker-position": `${n}%`,
      "--segment-left": `${o}%`,
      "--segment-width": `${a}%`
    };
    return u`<div class="chart-row" style=${Wt(l)}>
      <div class="row-label">
        <span class="provider-name">
          <i class=${`series-marker ${e.marker}`} aria-hidden="true"></i>
          <span>${e.name}</span>
        </span>
        <strong>${e.value === null ? "–" : this._formatValue(t, e.value, r)}</strong>
      </div>
      <div class="track" aria-hidden="true">
        ${t === "energy" ? u`<i class="zero-line"></i>` : p}
        <i class="segment"></i>
        ${e.value !== null ? u`<i class=${`value-marker ${e.marker}`}></i>` : p}
      </div>
    </div>`;
  }
  _formatValue(t, e, i) {
    return `${new Intl.NumberFormat(i, {
      minimumFractionDigits: t === "power" ? 2 : 1,
      maximumFractionDigits: t === "power" ? 2 : 1,
      signDisplay: t === "energy" ? "always" : "auto"
    }).format(e)} ${t === "power" ? "kW" : "%"}`;
  }
  _formatMagnitude(t, e, i) {
    return `${new Intl.NumberFormat(i, {
      minimumFractionDigits: t === "power" ? 2 : 1,
      maximumFractionDigits: t === "power" ? 2 : 1
    }).format(Math.abs(e))} ${t === "power" ? "kW" : "%"}`;
  }
  _formatAxis(t, e) {
    return new Intl.NumberFormat(e, {
      minimumFractionDigits: t % 1 === 0 ? 0 : 1,
      maximumFractionDigits: 1
    }).format(t);
  }
  _energyDirection(t, e) {
    return t > 0 ? e.tooHigh : t < 0 ? e.tooLow : e.exact;
  }
  _intervalStatus(t, e, i) {
    if (t === null) return i.waitingIntervals;
    const r = Math.max(0, Math.round(t));
    return r === 0 ? i.waitingIntervals : r < e ? i.firstTrend(r, e) : i.completedIntervals(r);
  }
  _todayKey() {
    const t = /* @__PURE__ */ new Date(), e = t.getFullYear(), i = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
    return `${e}-${i}-${r}`;
  }
  _explanation(t, e, i, r) {
    if (t === "energy") return r.energyExplanation;
    const n = e ?? 1.4, o = new Intl.NumberFormat(i, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return r.powerExplanation(o.format(n), o.format(n * 0.25));
  }
  _infoIcon() {
    return u`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }
  _checkIcon() {
    return u`<svg class="check-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="m8.2 12.2 2.5 2.5 5.4-5.5"></path>
    </svg>`;
  }
};
z.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
}, z.styles = _t`
    :host {
      display: block;
      min-width: 0;
      font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, Inter, sans-serif));
      color: var(--primary-text-color);
    }

    ha-card {
      display: block;
      height: auto;
      overflow: visible;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      border-radius: var(--ha-card-border-radius, 12px);
    }

    .card-content {
      box-sizing: border-box;
      display: grid;
      gap: 16px;
      padding: 24px;
    }

    .card-header,
    .winner-line,
    .row-label,
    .provider-name,
    .card-footer {
      display: flex;
      align-items: center;
    }

    .card-header {
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .axis,
    .card-footer {
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.4;
    }

    h2 {
      margin: 0;
      min-width: 0;
      overflow-wrap: anywhere;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.25;
    }

    .info-control {
      position: relative;
      z-index: 4;
      flex: 0 0 auto;
    }

    .info-button {
      display: grid;
      width: 36px;
      height: 36px;
      place-items: center;
      margin: -6px -6px -6px 0;
      padding: 0;
      color: var(--secondary-text-color);
      border: 0;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
    }

    .info-button:hover,
    .info-button:focus-visible {
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    }

    .info-button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .info-button svg,
    .check-icon {
      width: 21px;
      height: 21px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.8;
    }

    .metric-tooltip {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: min(320px, calc(100vw - 64px));
      box-sizing: border-box;
      padding: 12px 14px;
      visibility: hidden;
      color: var(--primary-text-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16);
      opacity: 0;
      transform: translateY(-4px);
      transition:
        opacity 120ms ease,
        transform 120ms ease,
        visibility 120ms;
      pointer-events: none;
      font-size: 13px;
      line-height: 1.45;
      text-align: left;
    }

    .metric-tooltip strong,
    .metric-tooltip span {
      display: block;
    }

    .metric-tooltip strong {
      margin-bottom: 5px;
      font-size: 13px;
      line-height: 1.35;
    }

    .info-control:hover .metric-tooltip,
    .info-control:focus-within .metric-tooltip {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    .verdict {
      display: grid;
      gap: 4px;
      align-content: start;
    }

    .verdict-empty {
      font-size: 18px;
    }

    .verdict.unavailable .verdict-support {
      max-width: 42ch;
    }

    .winner-line {
      gap: 8px;
      min-width: 0;
    }

    .check-icon {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
    }

    .verdict-value {
      min-width: 0;
      overflow-wrap: anywhere;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.15;
    }

    .verdict-value.numeric,
    .row-label strong {
      font-variant-numeric: tabular-nums;
    }

    .verdict-support {
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.4;
    }

    .chart {
      display: grid;
      gap: 14px;
    }

    .chart-row {
      display: grid;
      gap: 7px;
      min-width: 0;
    }

    .row-label {
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
      font-size: 13px;
      line-height: 1.3;
    }

    .row-label strong {
      flex: 0 0 auto;
      font-weight: 600;
    }

    .provider-name {
      gap: 8px;
      min-width: 0;
    }

    .provider-name span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .series-marker {
      display: block;
      width: 9px;
      height: 9px;
      flex: 0 0 9px;
      background: var(--series-color);
    }

    .series-marker.circle {
      border-radius: 50%;
    }

    .series-marker.diamond {
      border-radius: 2px;
      transform: rotate(45deg);
    }

    .track {
      position: relative;
      height: 8px;
      background: color-mix(in srgb, var(--divider-color, #9aa0a6) 58%, transparent);
    }

    .power-chart .track {
      border-radius: 999px;
    }

    .segment {
      position: absolute;
      top: 0;
      bottom: 0;
      left: var(--segment-left);
      width: var(--segment-width);
      border-radius: inherit;
      background: color-mix(in srgb, var(--series-color) 58%, transparent);
    }

    .zero-line {
      position: absolute;
      z-index: 1;
      top: -5px;
      bottom: -5px;
      left: 50%;
      width: 2px;
      background: var(--primary-text-color);
      transform: translateX(-50%);
    }

    .value-marker {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: var(--marker-position);
      width: 14px;
      height: 14px;
      box-sizing: border-box;
      border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
      background: var(--series-color);
      transform: translate(-50%, -50%);
    }

    .value-marker.circle {
      border-radius: 50%;
    }

    .value-marker.diamond {
      border-radius: 3px;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .axis {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      margin-top: -8px;
    }

    .energy-chart .axis span:nth-child(2) {
      color: var(--primary-text-color);
      font-weight: 500;
    }

    .card-footer {
      flex-wrap: wrap;
      gap: 5px;
      padding-top: 10px;
      border-top: 1px solid var(--divider-color);
    }

    .footer-separator {
      opacity: 0.65;
    }

    @media (max-width: 360px) {
      .card-content {
        gap: 14px;
        padding: 18px;
      }

      h2 {
        font-size: 16px;
      }

      .verdict-value {
        font-size: 21px;
      }

      .row-label {
        align-items: flex-start;
        flex-direction: column;
        gap: 4px;
      }

      .provider-name span {
        white-space: normal;
      }

      .metric-tooltip {
        width: min(280px, calc(100vw - 40px));
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        scroll-behavior: auto !important;
      }
    }
  `;
let H = z;
const D = "pv-forecast-quality-card";
customElements.get(D) || customElements.define(D, H);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: D,
  name: "PV Forecast Quality Card",
  description: "Understand and compare PV forecast accuracy against actual production in a Home Assistant Sections view.",
  preview: !0,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card"
});
console.info(
  "%c PV FORECAST QUALITY CARD %c v0.1.1 ",
  "color: white; background: #111827; font-weight: 700; padding: 3px 6px; border-radius: 4px 0 0 4px;",
  "color: #111827; background: #e5e7eb; font-weight: 600; padding: 3px 6px; border-radius: 0 4px 4px 0;"
);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*! PV Forecast Quality Card | MIT | Includes Lit (BSD-3-Clause) | See THIRD_PARTY_NOTICES.md */
