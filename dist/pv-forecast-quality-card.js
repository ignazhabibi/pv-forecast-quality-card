const T = globalThis, L = T.ShadowRoot && (T.ShadyCSS === void 0 || T.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, V = /* @__PURE__ */ Symbol(), W = /* @__PURE__ */ new WeakMap();
let ne = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== V) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (L && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = W.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && W.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const fe = (s) => new ne(typeof s == "string" ? s : s + "", void 0, V), ve = (s, ...e) => {
  const t = s.length === 1 ? s[0] : e.reduce((r, i, n) => r + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + s[n + 1], s[0]);
  return new ne(t, s, V);
}, $e = (s, e) => {
  if (L) s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), i = T.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, s.appendChild(r);
  }
}, q = L ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return fe(t);
})(s) : s;
const { is: _e, defineProperty: be, getOwnPropertyDescriptor: ye, getOwnPropertyNames: we, getOwnPropertySymbols: xe, getPrototypeOf: Ae } = Object, N = globalThis, K = N.trustedTypes, Ee = K ? K.emptyScript : "", Se = N.reactiveElementPolyfillSupport, E = (s, e) => s, H = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? Ee : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, e) {
  let t = s;
  switch (e) {
    case Boolean:
      t = s !== null;
      break;
    case Number:
      t = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(s);
      } catch {
        t = null;
      }
  }
  return t;
} }, ae = (s, e) => !_e(s, e), Z = { attribute: !0, type: String, converter: H, reflect: !1, useDefault: !1, hasChanged: ae };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), N.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let w = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Z) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), i = this.getPropertyDescriptor(e, r, t);
      i !== void 0 && be(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: i, set: n } = ye(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: i, set(a) {
      const o = i?.call(this);
      n?.call(this, a), this.requestUpdate(e, o, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Z;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const e = Ae(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const t = this.properties, r = [...we(t), ...xe(t)];
      for (const i of r) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, i] of t) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const i = this._$Eu(t, r);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const i of r) t.unshift(q(i));
    } else e !== void 0 && t.push(q(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return $e(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    const r = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, r);
    if (i !== void 0 && r.reflect === !0) {
      const n = (r.converter?.toAttribute !== void 0 ? r.converter : H).toAttribute(t, r.type);
      this._$Em = e, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const r = this.constructor, i = r._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const n = r.getPropertyOptions(i), a = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : H;
      this._$Em = i;
      const o = a.fromAttribute(t, n.type);
      this[i] = o ?? this._$Ej?.get(i) ?? o, this._$Em = null;
    }
  }
  requestUpdate(e, t, r, i = !1, n) {
    if (e !== void 0) {
      const a = this.constructor;
      if (i === !1 && (n = this[e]), r ??= a.getPropertyOptions(e), !((r.hasChanged ?? ae)(n, t) || r.useDefault && r.reflect && n === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: i, wrapped: n }, a) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), n !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, n] of this._$Ep) this[i] = n;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [i, n] of r) {
        const { wrapped: a } = n, o = this[i];
        a !== !0 || this._$AL.has(i) || o === void 0 || this.C(i, void 0, n, o);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(t)) : this._$EM();
    } catch (r) {
      throw e = !1, this._$EM(), r;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, w[E("elementProperties")] = /* @__PURE__ */ new Map(), w[E("finalized")] = /* @__PURE__ */ new Map(), Se?.({ ReactiveElement: w }), (N.reactiveElementVersions ??= []).push("2.1.2");
const F = globalThis, Y = (s) => s, O = F.trustedTypes, G = O ? O.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, oe = "$lit$", f = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + f, ke = `<${le}>`, b = document, k = () => b.createComment(""), C = (s) => s === null || typeof s != "object" && typeof s != "function", j = Array.isArray, Ce = (s) => j(s) || typeof s?.[Symbol.iterator] == "function", U = `[ 	
\f\r]`, A = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, J = /-->/g, X = />/g, $ = RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Q = /'/g, ee = /"/g, ce = /^(?:script|style|textarea|title)$/i, Pe = (s) => (e, ...t) => ({ _$litType$: s, strings: e, values: t }), p = Pe(1), y = /* @__PURE__ */ Symbol.for("lit-noChange"), u = /* @__PURE__ */ Symbol.for("lit-nothing"), te = /* @__PURE__ */ new WeakMap(), _ = b.createTreeWalker(b, 129);
function he(s, e) {
  if (!j(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return G !== void 0 ? G.createHTML(e) : e;
}
const Me = (s, e) => {
  const t = s.length - 1, r = [];
  let i, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = A;
  for (let o = 0; o < t; o++) {
    const l = s[o];
    let c, d, h = -1, m = 0;
    for (; m < l.length && (a.lastIndex = m, d = a.exec(l), d !== null); ) m = a.lastIndex, a === A ? d[1] === "!--" ? a = J : d[1] !== void 0 ? a = X : d[2] !== void 0 ? (ce.test(d[2]) && (i = RegExp("</" + d[2], "g")), a = $) : d[3] !== void 0 && (a = $) : a === $ ? d[0] === ">" ? (a = i ?? A, h = -1) : d[1] === void 0 ? h = -2 : (h = a.lastIndex - d[2].length, c = d[1], a = d[3] === void 0 ? $ : d[3] === '"' ? ee : Q) : a === ee || a === Q ? a = $ : a === J || a === X ? a = A : (a = $, i = void 0);
    const g = a === $ && s[o + 1].startsWith("/>") ? " " : "";
    n += a === A ? l + ke : h >= 0 ? (r.push(c), l.slice(0, h) + oe + l.slice(h) + f + g) : l + f + (h === -2 ? o : g);
  }
  return [he(s, n + (s[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class P {
  constructor({ strings: e, _$litType$: t }, r) {
    let i;
    this.parts = [];
    let n = 0, a = 0;
    const o = e.length - 1, l = this.parts, [c, d] = Me(e, t);
    if (this.el = P.createElement(c, r), _.currentNode = this.el.content, t === 2 || t === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = _.nextNode()) !== null && l.length < o; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const h of i.getAttributeNames()) if (h.endsWith(oe)) {
          const m = d[a++], g = i.getAttribute(h).split(f), v = /([.?@])?(.*)/.exec(m);
          l.push({ type: 1, index: n, name: v[2], strings: g, ctor: v[1] === "." ? Oe : v[1] === "?" ? ze : v[1] === "@" ? Ne : R }), i.removeAttribute(h);
        } else h.startsWith(f) && (l.push({ type: 6, index: n }), i.removeAttribute(h));
        if (ce.test(i.tagName)) {
          const h = i.textContent.split(f), m = h.length - 1;
          if (m > 0) {
            i.textContent = O ? O.emptyScript : "";
            for (let g = 0; g < m; g++) i.append(h[g], k()), _.nextNode(), l.push({ type: 2, index: ++n });
            i.append(h[m], k());
          }
        }
      } else if (i.nodeType === 8) if (i.data === le) l.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = i.data.indexOf(f, h + 1)) !== -1; ) l.push({ type: 7, index: n }), h += f.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const r = b.createElement("template");
    return r.innerHTML = e, r;
  }
}
function x(s, e, t = s, r) {
  if (e === y) return e;
  let i = r !== void 0 ? t._$Co?.[r] : t._$Cl;
  const n = C(e) ? void 0 : e._$litDirective$;
  return i?.constructor !== n && (i?._$AO?.(!1), n === void 0 ? i = void 0 : (i = new n(s), i._$AT(s, t, r)), r !== void 0 ? (t._$Co ??= [])[r] = i : t._$Cl = i), i !== void 0 && (e = x(s, i._$AS(s, e.values), i, r)), e;
}
class Te {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: r } = this._$AD, i = (e?.creationScope ?? b).importNode(t, !0);
    _.currentNode = i;
    let n = _.nextNode(), a = 0, o = 0, l = r[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let c;
        l.type === 2 ? c = new M(n, n.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(n, l.name, l.strings, this, e) : l.type === 6 && (c = new Re(n, this, e)), this._$AV.push(c), l = r[++o];
      }
      a !== l?.index && (n = _.nextNode(), a++);
    }
    return _.currentNode = b, i;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class M {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, r, i) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = x(this, e, t), C(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ce(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && C(this._$AH) ? this._$AA.nextSibling.data = e : this.T(b.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: r } = e, i = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = P.createElement(he(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === i) this._$AH.p(t);
    else {
      const n = new Te(i, this), a = n.u(this.options);
      n.p(t), this.T(a), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = te.get(e.strings);
    return t === void 0 && te.set(e.strings, t = new P(e)), t;
  }
  k(e) {
    j(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, i = 0;
    for (const n of e) i === t.length ? t.push(r = new M(this.O(k()), this.O(k()), this, this.options)) : r = t[i], r._$AI(n), i++;
    i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const r = Y(e).nextSibling;
      Y(e).remove(), e = r;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, i, n) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = n, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = u;
  }
  _$AI(e, t = this, r, i) {
    const n = this.strings;
    let a = !1;
    if (n === void 0) e = x(this, e, t, 0), a = !C(e) || e !== this._$AH && e !== y, a && (this._$AH = e);
    else {
      const o = e;
      let l, c;
      for (e = n[0], l = 0; l < n.length - 1; l++) c = x(this, o[r + l], t, l), c === y && (c = this._$AH[l]), a ||= !C(c) || c !== this._$AH[l], c === u ? e = u : e !== u && (e += (c ?? "") + n[l + 1]), this._$AH[l] = c;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Oe extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class ze extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class Ne extends R {
  constructor(e, t, r, i, n) {
    super(e, t, r, i, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = x(this, e, t, 0) ?? u) === y) return;
    const r = this._$AH, i = e === u && r !== u || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, n = e !== u && (r === u || i);
    i && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Re {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    x(this, e);
  }
}
const Ue = F.litHtmlPolyfillSupport;
Ue?.(P, M), (F.litHtmlVersions ??= []).push("3.3.3");
const He = (s, e, t) => {
  const r = t?.renderBefore ?? e;
  let i = r._$litPart$;
  if (i === void 0) {
    const n = t?.renderBefore ?? null;
    r._$litPart$ = i = new M(e.insertBefore(k(), n), n, void 0, t ?? {});
  }
  return i._$AI(s), i;
};
const B = globalThis;
let S = class extends w {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = He(t, this.renderRoot, this.renderOptions);
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
const Ie = B.litElementPolyfillSupport;
Ie?.({ LitElement: S });
(B.litElementVersions ??= []).push("4.2.2");
const De = { ATTRIBUTE: 1 }, Le = (s) => (...e) => ({ _$litDirective$: s, values: e });
let Ve = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, r) {
    this._$Ct = e, this._$AM = t, this._$Ci = r;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
const de = "important", Fe = " !" + de, je = Le(class extends Ve {
  constructor(s) {
    if (super(s), s.type !== De.ATTRIBUTE || s.name !== "style" || s.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(s) {
    return Object.keys(s).reduce((e, t) => {
      const r = s[t];
      return r == null ? e : e + `${t = t.includes("-") ? t : t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(s, [e]) {
    const { style: t } = s.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const r of this.ft) e[r] == null && (this.ft.delete(r), r.includes("-") ? t.removeProperty(r) : t[r] = null);
    for (const r in e) {
      const i = e[r];
      if (i != null) {
        this.ft.add(r);
        const n = typeof i == "string" && i.endsWith(Fe);
        r.includes("-") || n ? t.setProperty(r, n ? i.slice(0, -11) : i, n ? de : "") : t[r] = i;
      }
    }
    return y;
  }
}), Be = {
  context: "PV-Prognosequalität",
  powerTitle: "Leistungsgenauigkeit",
  energyTitle: "Ertragsprognose",
  subtitle: "Heute · abgeschlossene 15-Minuten-Intervalle",
  closerPower: "Näher an der Ist-Leistung",
  closerEnergy: "Näher am tatsächlichen Ertrag",
  againstActualPower: "gegen die Ist-Leistung",
  againstActualEnergy: "gegen den tatsächlichen Ertrag",
  equal: "Beide Prognosen liegen gleichauf",
  unavailable: "Noch keine Bewertung möglich",
  unavailableHint: "Prüfe die ausgewählten Entitäten und warte auf das erste abgeschlossene Intervall.",
  lessDistance: (s, e) => `${s} weniger mittlerer Abstand als ${e}`,
  singlePowerHint: "mittlerer Abstand je ausgewertetem Viertelstunden-Intervall",
  tooHigh: "bisher etwas zu viel erwartet",
  tooLow: "bisher etwas zu wenig erwartet",
  exact: "entspricht bisher exakt dem Ist-Ertrag",
  idealZero: "0 · ideal",
  low: "zu wenig",
  high: "zu viel",
  infoLabel: "Kennzahl erklären",
  preliminary: "Erste Tendenz",
  staleSnapshot: "Der hinterlegte Prognose-Snapshot gehört nicht zum heutigen Tag.",
  powerExplanation: (s, e) => `Fachbegriff: mittlerer absoluter Fehler (MAE). Für jedes abgeschlossene 15-Minuten-Intervall wird der Abstand zwischen Prognose und tatsächlicher Durchschnittsleistung berechnet; anschließend werden alle Abstände gemittelt. ${s} kW bedeutet nicht „pro Stunde“. Für ein Viertelstunden-Intervall entsprechen ${s} kW rechnerisch ${e} kWh Abstand. Kleiner ist besser.`,
  energyExplanation: "Verglichen wird die vorhergesagte Energie mit der tatsächlich erzeugten Energie derselben abgeschlossenen Intervalle. Plus bedeutet insgesamt zu viel erwartet, Minus zu wenig. 0 % wäre exakt; für die Genauigkeit zählt daher der Abstand zu 0 %.",
  completedIntervals: (s) => `${s} ausgewertete Viertelstunden`,
  firstTrend: (s, e) => `Erste Tendenz · ${s} von mindestens ${e} Viertelstunden`,
  waitingIntervals: "Warten auf abgeschlossene Intervalle",
  dayAhead: "Day-ahead",
  testRun: "Testlauf",
  providerOne: "Anbieter 1",
  providerTwo: "Anbieter 2"
}, We = {
  context: "PV forecast quality",
  powerTitle: "Power accuracy",
  energyTitle: "Yield forecast",
  subtitle: "Today · completed 15-minute intervals",
  closerPower: "Closer to actual power",
  closerEnergy: "Closer to actual yield",
  againstActualPower: "against actual power",
  againstActualEnergy: "against actual yield",
  equal: "Both forecasts are tied",
  unavailable: "No evaluation available yet",
  unavailableHint: "Check the selected entities and wait for the first completed interval.",
  lessDistance: (s, e) => `${s} less average distance than ${e}`,
  singlePowerHint: "average distance per evaluated 15-minute interval",
  tooHigh: "forecast has been slightly too high",
  tooLow: "forecast has been slightly too low",
  exact: "matches the actual yield so far",
  idealZero: "0 · ideal",
  low: "too low",
  high: "too high",
  infoLabel: "Explain this metric",
  preliminary: "Early trend",
  staleSnapshot: "The configured forecast snapshot does not belong to today.",
  powerExplanation: (s, e) => `Scientific term: mean absolute error (MAE). For every completed 15-minute interval, the distance between forecast and actual average power is calculated; all distances are then averaged. ${s} kW does not mean “per hour”. Over one 15-minute interval, ${s} kW corresponds to ${e} kWh of energy distance. Lower is better.`,
  energyExplanation: "Forecast energy is compared with actual energy from the same completed intervals. Positive means the forecast was too high, negative means it was too low. 0% would be exact, so accuracy is measured by the distance from 0%.",
  completedIntervals: (s) => `${s} evaluated 15-minute intervals`,
  firstTrend: (s, e) => `Early trend · ${s} of at least ${e} intervals`,
  waitingIntervals: "Waiting for completed intervals",
  dayAhead: "Day-ahead",
  testRun: "Test run",
  providerOne: "Provider 1",
  providerTwo: "Provider 2"
};
function qe(s, e) {
  return s?.toLowerCase().startsWith("de") ? Be : We;
}
const Ke = /* @__PURE__ */ new Set(["", "unknown", "unavailable", "none", "null"]);
function Ze(s) {
  if (!s || Ke.has(s.state.toLowerCase())) return null;
  const e = Number(s.state);
  return Number.isFinite(e) ? e : null;
}
function re(s, e) {
  return !s || !e ? null : Ze(s.states[e]);
}
function Ye(s) {
  const e = Math.max(0, ...s.filter((t) => t !== null));
  return Math.max(0.5, Math.ceil(e * 1.2 / 0.5) * 0.5);
}
function Ge(s) {
  const e = Math.max(
    0,
    ...s.filter((t) => t !== null).map((t) => Math.abs(t))
  );
  return Math.max(10, Math.ceil(e * 1.2 / 5) * 5);
}
function Je(s, e, t) {
  return e === null || !Number.isFinite(e) || t <= 0 ? 0 : s === "power" ? Math.max(0, Math.min(100, e / t * 100)) : Math.max(0, Math.min(100, (e + t) / (2 * t) * 100));
}
function Xe(s, e) {
  const t = e.filter(
    (c) => c.value !== null && Number.isFinite(c.value) && (s !== "power" || c.value >= 0)
  );
  if (t.length === 0) return { kind: "unavailable" };
  if (t.length === 1)
    return { kind: "single", winner: t[0] };
  const r = t[0], i = t[1];
  if (!r || !i || r.value === null || i.value === null)
    return { kind: "unavailable" };
  const n = s === "power" ? r.value : Math.abs(r.value), a = s === "power" ? i.value : Math.abs(i.value);
  if (Math.abs(n - a) < 1e-6) return { kind: "tie" };
  const o = n < a ? r : i;
  return {
    kind: "winner",
    winner: o,
    other: o === r ? i : r,
    difference: Math.abs(n - a)
  };
}
function Qe(s) {
  if (!s) return {};
  const [e, t, r] = s.split("|");
  return { date: e, timestamp: t, mode: r };
}
function et(s, e) {
  return !!(s.date && s.date !== e);
}
function tt(s, e) {
  if (!s) return e;
  const t = s.trim();
  return [
    /^#[0-9a-f]{3,8}$/i,
    /^rgba?\([\d\s.,%]+\)$/i,
    /^hsla?\([\d\s.,%a-z-]+\)$/i,
    /^var\(--[a-z0-9-_]+\)$/i,
    /^[a-z]+$/i
  ].some((i) => i.test(t)) ? t : e;
}
const ie = "#22C55E", se = "#7C4DFF", z = class z extends S {
  constructor() {
    super(...arguments), this._explanationOpen = !1;
  }
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
      computeLabel: (e) => ({
        metric: "Metric / Kennzahl",
        title: "Title / Titel",
        name: "Name",
        entity: "Metric entity / Kennzahl-Entität",
        color: "Color / Farbe",
        marker: "Marker",
        interval_count_entity: "Interval counter / Intervallzähler",
        snapshot_entity: "Snapshot status entity / Snapshot-Status",
        minimum_intervals: "Minimum intervals / Mindestintervalle"
      })[e.name ?? ""] ?? e.name ?? ""
    };
  }
  static getStubConfig() {
    return {
      metric: "power",
      provider_1: {
        name: "Solcast",
        entity: "sensor.pv_forecast_quality",
        color: ie,
        marker: "circle"
      },
      provider_2: {
        name: "Helios Forecast",
        color: se,
        marker: "diamond"
      },
      minimum_intervals: 8
    };
  }
  setConfig(e) {
    if (!e || !["power", "energy"].includes(e.metric))
      throw new Error("metric must be either 'power' or 'energy'");
    if (!e.provider_1?.entity?.trim())
      throw new Error("provider_1.entity is required");
    this._config = {
      ...e,
      provider_1: { ...e.provider_1 },
      provider_2: e.provider_2 ? { ...e.provider_2 } : void 0
    };
  }
  getCardSize() {
    return 5;
  }
  getGridOptions() {
    return {
      columns: 6,
      min_columns: 6
    };
  }
  render() {
    if (!this._config) return p``;
    const e = this._config.metric, t = this.hass?.locale?.language ?? navigator.language, r = qe(t), i = t || "en", n = this._readings(e, r.providerOne, r.providerTwo), a = n.map((ge) => ge.value), o = e === "power" ? Ye(a) : Ge(a), l = this._config.title ?? (e === "power" ? r.powerTitle : r.energyTitle), c = re(this.hass, this._config.interval_count_entity), d = Math.max(1, Math.round(this._config.minimum_intervals ?? 8)), h = this._config.snapshot_entity ? this.hass?.states[this._config.snapshot_entity]?.state : void 0, m = Qe(h), g = et(m, this._todayKey()), v = c !== null && c <= 0, ue = c !== null && c > 0 && c < d, pe = g || v ? { kind: "unavailable" } : Xe(e, n), me = g ? r.staleSnapshot : v ? r.waitingIntervals : void 0;
    return p`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <div class="title-block">
              <span class="context">${r.context}</span>
              <h2>${l}</h2>
              <p>${r.subtitle}</p>
            </div>
            <button
              class="info-button"
              type="button"
              aria-label=${r.infoLabel}
              aria-expanded=${String(this._explanationOpen)}
              aria-controls="metric-explanation"
              @click=${() => {
      this._explanationOpen = !this._explanationOpen;
    }}
            >
              ${this._infoIcon()}
            </button>
          </header>

          ${this._explanationOpen ? p`<aside id="metric-explanation" class="explanation">
                ${this._explanation(e, n[0]?.value ?? null, i, r)}
              </aside>` : u}

          ${this._verdict(e, pe, i, r, ue, me)}
          ${this._chart(e, n, o, i, r)}

          <footer class="card-footer">
            <span>${this._intervalStatus(c, d, r)}</span>
            ${g ? p`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${r.staleSnapshot}</span>` : m.mode === "bootstrap" || m.mode === "day_ahead" ? p`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${m.mode === "bootstrap" ? r.testRun : r.dayAhead}</span>` : u}
          </footer>
        </div>
      </ha-card>
    `;
  }
  _readings(e, t, r) {
    if (!this._config) return [];
    const i = [
      this._reading(
        e,
        this._config.provider_1,
        t,
        ie,
        "circle"
      )
    ];
    return this._config.provider_2?.entity && i.push(
      this._reading(
        e,
        this._config.provider_2,
        r,
        se,
        "diamond"
      )
    ), i;
  }
  _reading(e, t, r, i, n) {
    const a = t.entity, o = a ? this.hass?.states[a] : void 0, l = o && this.hass?.formatEntityName ? this.hass.formatEntityName(
      o,
      [{ type: "device" }, { type: "entity" }],
      { separator: " · " }
    ) : void 0, c = o?.attributes.friendly_name, d = re(this.hass, a);
    return {
      name: t.name?.trim() || l || (typeof c == "string" ? c : r),
      entity: a,
      color: tt(t.color, i),
      marker: t.marker ?? n,
      value: e === "power" && d !== null && d < 0 ? null : d
    };
  }
  _verdict(e, t, r, i, n, a) {
    if (t.kind === "unavailable")
      return p`<section class="verdict unavailable">
        <span class="verdict-label">${i.unavailable}</span>
        <strong>${a ?? i.unavailableHint}</strong>
      </section>`;
    if (t.kind === "tie")
      return p`<section class="verdict">
        <span class="verdict-label">
          ${n ? `${i.preliminary} · ` : ""}${e === "power" ? i.closerPower : i.closerEnergy}
        </span>
        <strong class="verdict-value">${i.equal}</strong>
      </section>`;
    const o = t.winner;
    if (!o || o.value === null) return p``;
    if (t.kind === "single") {
      const c = this._formatValue(e, o.value, r), d = e === "power" ? i.singlePowerHint : this._energyDirection(o.value, i);
      return p`<section class="verdict">
        <span class="verdict-label">
          ${n ? `${i.preliminary} · ` : ""}
          ${o.name}
          ${e === "power" ? i.againstActualPower : i.againstActualEnergy}
        </span>
        <strong class="verdict-value numeric">${c}</strong>
        <span class="verdict-support">${d}</span>
      </section>`;
    }
    const l = e === "power" && t.difference !== void 0 && t.other ? i.lessDistance(
      this._formatValue(e, t.difference, r),
      t.other.name
    ) : `${this._formatValue(e, o.value, r)} · ${this._energyDirection(
      o.value,
      i
    )}`;
    return p`<section class="verdict">
      <span class="verdict-label">
        ${n ? `${i.preliminary} · ` : ""}${e === "power" ? i.closerPower : i.closerEnergy}
      </span>
      <div class="winner-line">
        ${n ? u : this._checkIcon()}<strong class="verdict-value">${o.name}</strong>
      </div>
      <span class="verdict-support">${l}</span>
    </section>`;
  }
  _chart(e, t, r, i, n) {
    const a = t.map(
      (o) => `${o.name}: ${o.value === null ? n.unavailable : this._formatValue(e, o.value, i)}`
    ).join(", ");
    return p`<div class=${e === "power" ? "chart power-chart" : "chart energy-chart"} role="img" aria-label=${a}>
      ${t.map((o) => this._chartRow(e, o, r, i))}
      <div class="axis" aria-hidden="true">
        ${e === "power" ? p`<span>${n.idealZero}</span><span>${this._formatAxis(r, i)} kW</span>` : p`<span>${n.low}</span><span>${n.idealZero}</span><span>${n.high}</span>`}
      </div>
    </div>`;
  }
  _chartRow(e, t, r, i) {
    const n = Je(e, t.value, r), a = e === "energy" ? Math.min(50, n) : 0, o = e === "energy" ? Math.abs(n - 50) : n, l = {
      "--series-color": t.color,
      "--marker-position": `${n}%`,
      "--segment-left": `${a}%`,
      "--segment-width": `${o}%`
    };
    return p`<div class="chart-row" style=${je(l)}>
      <div class="row-label">
        <span class="provider-name">
          <i class=${`series-marker ${t.marker}`} aria-hidden="true"></i>
          <span>${t.name}</span>
        </span>
        <strong>${t.value === null ? "–" : this._formatValue(e, t.value, i)}</strong>
      </div>
      <div class="track" aria-hidden="true">
        ${e === "energy" ? p`<i class="zero-line"></i>` : u}
        <i class="segment"></i>
        ${t.value !== null ? p`<i class=${`value-marker ${t.marker}`}></i>` : u}
      </div>
    </div>`;
  }
  _formatValue(e, t, r) {
    return `${new Intl.NumberFormat(r, {
      minimumFractionDigits: e === "power" ? 2 : 1,
      maximumFractionDigits: e === "power" ? 2 : 1,
      signDisplay: e === "energy" ? "always" : "auto"
    }).format(t)} ${e === "power" ? "kW" : "%"}`;
  }
  _formatAxis(e, t) {
    return new Intl.NumberFormat(t, {
      minimumFractionDigits: e % 1 === 0 ? 0 : 1,
      maximumFractionDigits: 1
    }).format(e);
  }
  _energyDirection(e, t) {
    return e > 0 ? t.tooHigh : e < 0 ? t.tooLow : t.exact;
  }
  _intervalStatus(e, t, r) {
    if (e === null) return r.subtitle;
    const i = Math.max(0, Math.round(e));
    return i === 0 ? r.waitingIntervals : i < t ? r.firstTrend(i, t) : r.completedIntervals(i);
  }
  _todayKey() {
    const e = /* @__PURE__ */ new Date(), t = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), i = String(e.getDate()).padStart(2, "0");
    return `${t}-${r}-${i}`;
  }
  _explanation(e, t, r, i) {
    if (e === "energy") return i.energyExplanation;
    const n = t ?? 1.4, a = new Intl.NumberFormat(r, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return i.powerExplanation(a.format(n), a.format(n * 0.25));
  }
  _infoIcon() {
    return p`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }
  _checkIcon() {
    return p`<svg class="check-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="m8.2 12.2 2.5 2.5 5.4-5.5"></path>
    </svg>`;
  }
};
z.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 },
  _explanationOpen: { state: !0 }
}, z.styles = ve`
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
      gap: 20px;
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
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }

    .title-block {
      min-width: 0;
    }

    .context,
    .verdict-label,
    .axis,
    .card-footer {
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.4;
    }

    .context {
      display: block;
      margin-bottom: 3px;
      font-weight: 500;
      letter-spacing: 0.02em;
    }

    h2,
    p {
      margin: 0;
    }

    h2 {
      overflow-wrap: anywhere;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.25;
    }

    .title-block p {
      margin-top: 3px;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.4;
    }

    .info-button {
      display: grid;
      width: 36px;
      height: 36px;
      flex: 0 0 36px;
      place-items: center;
      margin: -6px -6px 0 0;
      padding: 0;
      color: var(--secondary-text-color);
      border: 0;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
    }

    .info-button:hover,
    .info-button:focus-visible,
    .info-button[aria-expanded="true"] {
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

    .explanation {
      padding: 14px 16px;
      color: var(--primary-text-color);
      border-left: 3px solid var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.09));
      font-size: 13px;
      line-height: 1.55;
    }

    .verdict {
      display: grid;
      gap: 4px;
      min-height: 64px;
      align-content: start;
    }

    .verdict.unavailable strong {
      max-width: 42ch;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.45;
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
      color: var(--primary-text-color);
      font-size: 13px;
      line-height: 1.4;
    }

    .chart {
      display: grid;
      gap: 16px;
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
      padding-top: 12px;
      border-top: 1px solid var(--divider-color);
    }

    .footer-separator {
      opacity: 0.65;
    }

    @media (max-width: 360px) {
      .card-content {
        gap: 16px;
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
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        scroll-behavior: auto !important;
      }
    }
  `;
let I = z;
const D = "pv-forecast-quality-card";
customElements.get(D) || customElements.define(D, I);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: D,
  name: "PV Forecast Quality Card",
  description: "Understand and compare PV forecast accuracy against actual production in a Home Assistant Sections view.",
  preview: !0,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card"
});
console.info(
  "%c PV FORECAST QUALITY CARD %c v0.1.0 ",
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
