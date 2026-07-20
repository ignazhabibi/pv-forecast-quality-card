const us = globalThis, ah = us.ShadowRoot && (us.ShadyCSS === void 0 || us.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, oh = /* @__PURE__ */ Symbol(), Ov = /* @__PURE__ */ new WeakMap();
let iy = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== oh) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (ah && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Ov.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Ov.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Mb = (r) => new iy(typeof r == "string" ? r : r + "", void 0, oh), ay = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, i, a) => n + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[a + 1], r[0]);
  return new iy(e, r, oh);
}, Lb = (r, t) => {
  if (ah) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), i = us.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = e.cssText, r.appendChild(n);
  }
}, Nv = ah ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Mb(e);
})(r) : r;
const { is: Ib, defineProperty: Pb, getOwnPropertyDescriptor: Ob, getOwnPropertyNames: Nb, getOwnPropertySymbols: kb, getPrototypeOf: Rb } = Object, bl = globalThis, kv = bl.trustedTypes, Bb = kv ? kv.emptyScript : "", Vb = bl.reactiveElementPolyfillSupport, _a = (r, t) => r, Nf = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Bb : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, oy = (r, t) => !Ib(r, t), Rv = { attribute: !0, type: String, converter: Nf, reflect: !1, useDefault: !1, hasChanged: oy };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), bl.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ii = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Rv) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = /* @__PURE__ */ Symbol(), i = this.getPropertyDescriptor(t, n, e);
      i !== void 0 && Pb(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: i, set: a } = Ob(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: i, set(o) {
      const s = i?.call(this);
      a?.call(this, o), this.requestUpdate(t, s, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Rv;
  }
  static _$Ei() {
    if (this.hasOwnProperty(_a("elementProperties"))) return;
    const t = Rb(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(_a("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(_a("properties"))) {
      const e = this.properties, n = [...Nb(e), ...kb(e)];
      for (const i of n) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, i] of e) this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const i = this._$Eu(e, n);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const i of n) e.unshift(Nv(i));
    } else t !== void 0 && e.push(Nv(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Lb(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$ET(t, e) {
    const n = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, n);
    if (i !== void 0 && n.reflect === !0) {
      const a = (n.converter?.toAttribute !== void 0 ? n.converter : Nf).toAttribute(e, n.type);
      this._$Em = t, a == null ? this.removeAttribute(i) : this.setAttribute(i, a), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const n = this.constructor, i = n._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const a = n.getPropertyOptions(i), o = typeof a.converter == "function" ? { fromAttribute: a.converter } : a.converter?.fromAttribute !== void 0 ? a.converter : Nf;
      this._$Em = i;
      const s = o.fromAttribute(e, a.type);
      this[i] = s ?? this._$Ej?.get(i) ?? s, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, i = !1, a) {
    if (t !== void 0) {
      const o = this.constructor;
      if (i === !1 && (a = this[t]), n ??= o.getPropertyOptions(t), !((n.hasChanged ?? oy)(a, e) || n.useDefault && n.reflect && a === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: i, wrapped: a }, o) {
    n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), a !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [i, a] of this._$Ep) this[i] = a;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [i, a] of n) {
        const { wrapped: o } = a, s = this[i];
        o !== !0 || this._$AL.has(i) || s === void 0 || this.C(i, void 0, a, s);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((n) => n.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (n) {
      throw t = !1, this._$EM(), n;
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
ii.elementStyles = [], ii.shadowRootOptions = { mode: "open" }, ii[_a("elementProperties")] = /* @__PURE__ */ new Map(), ii[_a("finalized")] = /* @__PURE__ */ new Map(), Vb?.({ ReactiveElement: ii }), (bl.reactiveElementVersions ??= []).push("2.1.2");
const sh = globalThis, Bv = (r) => r, As = sh.trustedTypes, Vv = As ? As.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, sy = "$lit$", Ar = `lit$${Math.random().toFixed(9).slice(2)}$`, ly = "?" + Ar, Fb = `<${ly}>`, Mn = document, ka = () => Mn.createComment(""), Ra = (r) => r === null || typeof r != "object" && typeof r != "function", lh = Array.isArray, zb = (r) => lh(r) || typeof r?.[Symbol.iterator] == "function", eu = `[ 	
\f\r]`, Wi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Fv = /-->/g, zv = />/g, Wr = RegExp(`>|${eu}(?:([^\\s"'>=/]+)(${eu}*=${eu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Hv = /'/g, $v = /"/g, uy = /^(?:script|style|textarea|title)$/i, Hb = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), At = Hb(1), Ln = /* @__PURE__ */ Symbol.for("lit-noChange"), Ct = /* @__PURE__ */ Symbol.for("lit-nothing"), Gv = /* @__PURE__ */ new WeakMap(), _n = Mn.createTreeWalker(Mn, 129);
function fy(r, t) {
  if (!lh(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Vv !== void 0 ? Vv.createHTML(t) : t;
}
const $b = (r, t) => {
  const e = r.length - 1, n = [];
  let i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = Wi;
  for (let s = 0; s < e; s++) {
    const l = r[s];
    let u, f, c = -1, h = 0;
    for (; h < l.length && (o.lastIndex = h, f = o.exec(l), f !== null); ) h = o.lastIndex, o === Wi ? f[1] === "!--" ? o = Fv : f[1] !== void 0 ? o = zv : f[2] !== void 0 ? (uy.test(f[2]) && (i = RegExp("</" + f[2], "g")), o = Wr) : f[3] !== void 0 && (o = Wr) : o === Wr ? f[0] === ">" ? (o = i ?? Wi, c = -1) : f[1] === void 0 ? c = -2 : (c = o.lastIndex - f[2].length, u = f[1], o = f[3] === void 0 ? Wr : f[3] === '"' ? $v : Hv) : o === $v || o === Hv ? o = Wr : o === Fv || o === zv ? o = Wi : (o = Wr, i = void 0);
    const v = o === Wr && r[s + 1].startsWith("/>") ? " " : "";
    a += o === Wi ? l + Fb : c >= 0 ? (n.push(u), l.slice(0, c) + sy + l.slice(c) + Ar + v) : l + Ar + (c === -2 ? s : v);
  }
  return [fy(r, a + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class Ba {
  constructor({ strings: t, _$litType$: e }, n) {
    let i;
    this.parts = [];
    let a = 0, o = 0;
    const s = t.length - 1, l = this.parts, [u, f] = $b(t, e);
    if (this.el = Ba.createElement(u, n), _n.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (i = _n.nextNode()) !== null && l.length < s; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const c of i.getAttributeNames()) if (c.endsWith(sy)) {
          const h = f[o++], v = i.getAttribute(c).split(Ar), d = /([.?@])?(.*)/.exec(h);
          l.push({ type: 1, index: a, name: d[2], strings: v, ctor: d[1] === "." ? Ub : d[1] === "?" ? Wb : d[1] === "@" ? Yb : Sl }), i.removeAttribute(c);
        } else c.startsWith(Ar) && (l.push({ type: 6, index: a }), i.removeAttribute(c));
        if (uy.test(i.tagName)) {
          const c = i.textContent.split(Ar), h = c.length - 1;
          if (h > 0) {
            i.textContent = As ? As.emptyScript : "";
            for (let v = 0; v < h; v++) i.append(c[v], ka()), _n.nextNode(), l.push({ type: 2, index: ++a });
            i.append(c[h], ka());
          }
        }
      } else if (i.nodeType === 8) if (i.data === ly) l.push({ type: 2, index: a });
      else {
        let c = -1;
        for (; (c = i.data.indexOf(Ar, c + 1)) !== -1; ) l.push({ type: 7, index: a }), c += Ar.length - 1;
      }
      a++;
    }
  }
  static createElement(t, e) {
    const n = Mn.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Si(r, t, e = r, n) {
  if (t === Ln) return t;
  let i = n !== void 0 ? e._$Co?.[n] : e._$Cl;
  const a = Ra(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(r), i._$AT(r, e, n)), n !== void 0 ? (e._$Co ??= [])[n] = i : e._$Cl = i), i !== void 0 && (t = Si(r, i._$AS(r, t.values), i, n)), t;
}
class Gb {
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
    const { el: { content: e }, parts: n } = this._$AD, i = (t?.creationScope ?? Mn).importNode(e, !0);
    _n.currentNode = i;
    let a = _n.nextNode(), o = 0, s = 0, l = n[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let u;
        l.type === 2 ? u = new Ja(a, a.nextSibling, this, t) : l.type === 1 ? u = new l.ctor(a, l.name, l.strings, this, t) : l.type === 6 && (u = new Xb(a, this, t)), this._$AV.push(u), l = n[++s];
      }
      o !== l?.index && (a = _n.nextNode(), o++);
    }
    return _n.currentNode = Mn, i;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class Ja {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, n, i) {
    this.type = 2, this._$AH = Ct, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = i, this._$Cv = i?.isConnected ?? !0;
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
    t = Si(this, t, e), Ra(t) ? t === Ct || t == null || t === "" ? (this._$AH !== Ct && this._$AR(), this._$AH = Ct) : t !== this._$AH && t !== Ln && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : zb(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== Ct && Ra(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Mn.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: n } = t, i = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = Ba.createElement(fy(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === i) this._$AH.p(e);
    else {
      const a = new Gb(i, this), o = a.u(this.options);
      a.p(e), this.T(o), this._$AH = a;
    }
  }
  _$AC(t) {
    let e = Gv.get(t.strings);
    return e === void 0 && Gv.set(t.strings, e = new Ba(t)), e;
  }
  k(t) {
    lh(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, i = 0;
    for (const a of t) i === e.length ? e.push(n = new Ja(this.O(ka()), this.O(ka()), this, this.options)) : n = e[i], n._$AI(a), i++;
    i < e.length && (this._$AR(n && n._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const n = Bv(t).nextSibling;
      Bv(t).remove(), t = n;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class Sl {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, i, a) {
    this.type = 1, this._$AH = Ct, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = a, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Ct;
  }
  _$AI(t, e = this, n, i) {
    const a = this.strings;
    let o = !1;
    if (a === void 0) t = Si(this, t, e, 0), o = !Ra(t) || t !== this._$AH && t !== Ln, o && (this._$AH = t);
    else {
      const s = t;
      let l, u;
      for (t = a[0], l = 0; l < a.length - 1; l++) u = Si(this, s[n + l], e, l), u === Ln && (u = this._$AH[l]), o ||= !Ra(u) || u !== this._$AH[l], u === Ct ? t = Ct : t !== Ct && (t += (u ?? "") + a[l + 1]), this._$AH[l] = u;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === Ct ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ub extends Sl {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === Ct ? void 0 : t;
  }
}
class Wb extends Sl {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== Ct);
  }
}
class Yb extends Sl {
  constructor(t, e, n, i, a) {
    super(t, e, n, i, a), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Si(this, t, e, 0) ?? Ct) === Ln) return;
    const n = this._$AH, i = t === Ct && n !== Ct || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, a = t !== Ct && (n === Ct || i);
    i && this.element.removeEventListener(this.name, this, n), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Xb {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Si(this, t);
  }
}
const Zb = sh.litHtmlPolyfillSupport;
Zb?.(Ba, Ja), (sh.litHtmlVersions ??= []).push("3.3.3");
const qb = (r, t, e) => {
  const n = e?.renderBefore ?? t;
  let i = n._$litPart$;
  if (i === void 0) {
    const a = e?.renderBefore ?? null;
    n._$litPart$ = i = new Ja(t.insertBefore(ka(), a), a, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
const uh = globalThis;
let di = class extends ii {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = qb(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Ln;
  }
};
di._$litElement$ = !0, di.finalized = !0, uh.litElementHydrateSupport?.({ LitElement: di });
const Kb = uh.litElementPolyfillSupport;
Kb?.({ LitElement: di });
(uh.litElementVersions ??= []).push("4.2.2");
const Qb = { ATTRIBUTE: 1 }, jb = (r) => (...t) => ({ _$litDirective$: r, values: t });
let Jb = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, n) {
    this._$Ct = t, this._$AM = e, this._$Ci = n;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
const cy = "important", tS = " !" + cy, eS = jb(class extends Jb {
  constructor(r) {
    if (super(r), r.type !== Qb.ATTRIBUTE || r.name !== "style" || r.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return Object.keys(r).reduce((t, e) => {
      const n = r[e];
      return n == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${n};`;
    }, "");
  }
  update(r, [t]) {
    const { style: e } = r.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const n of this.ft) t[n] == null && (this.ft.delete(n), n.includes("-") ? e.removeProperty(n) : e[n] = null);
    for (const n in t) {
      const i = t[n];
      if (i != null) {
        this.ft.add(n);
        const a = typeof i == "string" && i.endsWith(tS);
        n.includes("-") || a ? e.setProperty(n, a ? i.slice(0, -11) : i, a ? cy : "") : e[n] = i;
      }
    }
    return Ln;
  }
}), rS = {
  powerTitle: "PV-Leistungsfehler",
  energyTitle: "PV-Ertragsabweichung",
  equal: "Gleichauf",
  unavailable: "Noch keine Auswertung",
  unavailableHint: "Entitäten prüfen oder auf das erste Intervall warten.",
  bestMatch: (r) => `${r} liegt näher am Ist`,
  lessDistance: (r) => `${r} geringerer Fehler`,
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
  powerExplanation: (r, t) => `Mittelt den Abstand zwischen Prognose und Ist-Leistung je abgeschlossenem 15-Minuten-Intervall. ${r} kW entsprechen dabei ${t} kWh. Kleiner ist besser.`,
  energyExplanation: "Vergleicht prognostizierte und tatsächliche Energie der abgeschlossenen Intervalle. Plus bedeutet zu viel, Minus zu wenig; 0 % ist ideal.",
  completedIntervals: (r) => `${r} Intervalle`,
  firstTrend: (r, t) => `${r}/${t} Intervalle · erste Tendenz`,
  waitingIntervals: "Kein Intervall",
  dayAhead: "Day-ahead",
  testRun: "Testlauf",
  providerOne: "Anbieter 1",
  providerTwo: "Anbieter 2"
}, nS = {
  powerTitle: "PV power error",
  energyTitle: "PV yield deviation",
  equal: "Tied",
  unavailable: "No evaluation yet",
  unavailableHint: "Check the entities or wait for the first interval.",
  bestMatch: (r) => `${r} is closer to actual`,
  lessDistance: (r) => `${r} lower error`,
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
  powerExplanation: (r, t) => `Averages the distance between forecast and actual power for each completed 15-minute interval. ${r} kW corresponds to ${t} kWh. Lower is better.`,
  energyExplanation: "Compares forecast and actual energy for completed intervals. Positive means too high, negative too low; 0% is ideal.",
  completedIntervals: (r) => `${r} intervals`,
  firstTrend: (r, t) => `${r}/${t} intervals · early trend`,
  waitingIntervals: "No interval yet",
  dayAhead: "Day-ahead",
  testRun: "Test run",
  providerOne: "Provider 1",
  providerTwo: "Provider 2"
};
function iS(r, t) {
  return r?.toLowerCase().startsWith("de") ? rS : nS;
}
const aS = /* @__PURE__ */ new Set(["", "unknown", "unavailable", "none", "null"]);
function oS(r) {
  if (!r || aS.has(r.state.toLowerCase())) return null;
  const t = Number(r.state);
  return Number.isFinite(t) ? t : null;
}
function Uv(r, t) {
  return !r || !t ? null : oS(r.states[t]);
}
function sS(r) {
  const t = Math.max(0, ...r.filter((e) => e !== null));
  return Math.max(0.5, Math.ceil(t * 1.2 / 0.5) * 0.5);
}
function lS(r) {
  const t = Math.max(
    0,
    ...r.filter((e) => e !== null).map((e) => Math.abs(e))
  );
  return Math.max(10, Math.ceil(t * 1.2 / 5) * 5);
}
function uS(r, t, e) {
  return t === null || !Number.isFinite(t) || e <= 0 ? 0 : r === "power" ? Math.max(0, Math.min(100, t / e * 100)) : Math.max(0, Math.min(100, (t + e) / (2 * e) * 100));
}
function fS(r, t) {
  const e = t.filter(
    (u) => u.value !== null && Number.isFinite(u.value) && (r !== "power" || u.value >= 0)
  );
  if (e.length === 0) return { kind: "unavailable" };
  if (e.length === 1)
    return { kind: "single", winner: e[0] };
  const n = e[0], i = e[1];
  if (!n || !i || n.value === null || i.value === null)
    return { kind: "unavailable" };
  const a = r === "power" ? n.value : Math.abs(n.value), o = r === "power" ? i.value : Math.abs(i.value);
  if (Math.abs(a - o) < 1e-6) return { kind: "tie" };
  const s = a < o ? n : i;
  return {
    kind: "winner",
    winner: s,
    other: s === n ? i : n,
    difference: Math.abs(a - o)
  };
}
function cS(r) {
  if (!r) return {};
  const [t, e, n] = r.split("|");
  return { date: t, timestamp: e, mode: n };
}
function hS(r, t) {
  return !!(r.date && r.date !== t);
}
function hy(r, t) {
  if (!r) return t;
  const e = r.trim();
  return [
    /^#[0-9a-f]{3,8}$/i,
    /^rgba?\([\d\s.,%]+\)$/i,
    /^hsla?\([\d\s.,%a-z-]+\)$/i,
    /^var\(--[a-z0-9-_]+\)$/i,
    /^[a-z]+$/i
  ].some((i) => i.test(e)) ? e : t;
}
const Wv = "#22C55E", Yv = "#7C4DFF", yl = class yl extends di {
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
        color: Wv,
        marker: "circle"
      },
      provider_2: {
        name: "Helios Forecast",
        color: Yv,
        marker: "circle"
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
    if (!this._config) return At``;
    const t = this._config.metric, e = this.hass?.locale?.language ?? navigator.language, n = iS(e), i = e || "en", a = this._readings(t, n.providerOne, n.providerTwo), o = a.map((b) => b.value), s = t === "power" ? sS(o) : lS(o), l = this._config.title ?? (t === "power" ? n.powerTitle : n.energyTitle), u = Uv(this.hass, this._config.interval_count_entity), f = Math.max(1, Math.round(this._config.minimum_intervals ?? 8)), c = this._config.snapshot_entity ? this.hass?.states[this._config.snapshot_entity]?.state : void 0, h = cS(c), v = hS(h, this._todayKey()), d = u !== null && u <= 0, p = u !== null && u > 0 && u < f, m = v || d ? { kind: "unavailable" } : fS(t, a), g = v ? n.staleSnapshot : d ? n.waitingIntervals : void 0, y = t === "power" ? n.powerTooltipTitle : n.energyTooltipTitle, _ = this._explanation(t, a[0]?.value ?? null, i, n);
    return At`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <h2>${l}</h2>
            <div class="info-control">
              <button
                class="info-button"
                type="button"
                aria-label=${n.infoLabel}
                aria-describedby="metric-tooltip"
              >
                ${this._infoIcon()}
              </button>
              <span id="metric-tooltip" class="metric-tooltip" role="tooltip">
                <strong>${y}</strong>
                <span>${_}</span>
              </span>
            </div>
          </header>

          ${this._verdict(t, m, i, n, p, g)}
          ${this._chart(t, a, s, i, n)}

          <footer class="card-footer">
            <span>${this._intervalStatus(u, f, n)}</span>
            ${v ? At`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${n.staleSnapshot}</span>` : h.mode === "bootstrap" || h.mode === "day_ahead" ? At`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${h.mode === "bootstrap" ? n.testRun : n.dayAhead}</span>` : Ct}
          </footer>
        </div>
      </ha-card>
    `;
  }
  _readings(t, e, n) {
    if (!this._config) return [];
    const i = [
      this._reading(
        t,
        this._config.provider_1,
        e,
        Wv,
        "circle"
      )
    ];
    return this._config.provider_2?.entity && i.push(
      this._reading(
        t,
        this._config.provider_2,
        n,
        Yv,
        "circle"
      )
    ), i;
  }
  _reading(t, e, n, i, a) {
    const o = e.entity, s = o ? this.hass?.states[o] : void 0, l = s && this.hass?.formatEntityName ? this.hass.formatEntityName(
      s,
      [{ type: "device" }, { type: "entity" }],
      { separator: " · " }
    ) : void 0, u = s?.attributes.friendly_name, f = Uv(this.hass, o);
    return {
      name: e.name?.trim() || l || (typeof u == "string" ? u : n),
      entity: o,
      color: hy(e.color, i),
      marker: e.marker ?? a,
      value: t === "power" && f !== null && f < 0 ? null : f
    };
  }
  _verdict(t, e, n, i, a, o) {
    if (e.kind === "unavailable")
      return At`<section class="verdict unavailable">
        <strong class="verdict-value verdict-empty">${i.unavailable}</strong>
        <span class="verdict-support">${o ?? i.unavailableHint}</span>
      </section>`;
    if (e.kind === "tie")
      return At`<section class="verdict">
        <strong class="verdict-value">${i.equal}</strong>
      </section>`;
    const s = e.winner;
    if (!s || s.value === null) return At``;
    if (e.kind === "single") {
      const u = this._formatValue(t, s.value, n), f = t === "power" ? `${s.name} · ${i.singlePowerHint}` : `${s.name} · ${this._energyDirection(s.value, i)}`;
      return At`<section class="verdict">
        <strong class="verdict-value numeric">${u}</strong>
        <span class="verdict-support">${f}</span>
      </section>`;
    }
    const l = t === "power" && e.difference !== void 0 && e.other ? i.lessDistance(this._formatValue(t, e.difference, n)) : `${this._formatMagnitude(t, s.value, n)} ${this._energyDirection(
      s.value,
      i
    )}`;
    return At`<section class="verdict">
      <div class="winner-line" aria-label=${i.bestMatch(s.name)}>
        ${a ? Ct : this._checkIcon()}<strong class="verdict-value">${s.name}</strong>
      </div>
      <span class="verdict-support">${l}</span>
    </section>`;
  }
  _chart(t, e, n, i, a) {
    const o = e.map(
      (s) => `${s.name}: ${s.value === null ? a.unavailable : this._formatValue(t, s.value, i)}`
    ).join(", ");
    return At`<div class=${t === "power" ? "chart power-chart" : "chart energy-chart"} role="img" aria-label=${o}>
      ${e.map((s) => this._chartRow(t, s, n, i))}
      <div class="axis" aria-hidden="true">
        ${t === "power" ? At`<span>${a.idealZero}</span><span>${this._formatAxis(n, i)} kW</span>` : At`<span>${a.low}</span><span>${a.idealZero}</span><span>${a.high}</span>`}
      </div>
    </div>`;
  }
  _chartRow(t, e, n, i) {
    const a = uS(t, e.value, n), o = t === "energy" ? Math.min(50, a) : 0, s = t === "energy" ? Math.abs(a - 50) : a, l = {
      "--series-color": e.color,
      "--marker-position": `${a}%`,
      "--segment-left": `${o}%`,
      "--segment-width": `${s}%`
    };
    return At`<div class="chart-row" style=${eS(l)}>
      <div class="row-label">
        <span class="provider-name">
          <i class=${`series-marker ${e.marker}`} aria-hidden="true"></i>
          <span>${e.name}</span>
        </span>
        <strong>${e.value === null ? "–" : this._formatValue(t, e.value, i)}</strong>
      </div>
      <div class="track" aria-hidden="true">
        ${t === "energy" ? At`<i class="zero-line"></i>` : Ct}
        <i class="segment"></i>
        ${e.value !== null ? At`<i class=${`value-marker ${e.marker}`}></i>` : Ct}
      </div>
    </div>`;
  }
  _formatValue(t, e, n) {
    return `${new Intl.NumberFormat(n, {
      minimumFractionDigits: t === "power" ? 2 : 1,
      maximumFractionDigits: t === "power" ? 2 : 1,
      signDisplay: t === "energy" ? "always" : "auto"
    }).format(e)} ${t === "power" ? "kW" : "%"}`;
  }
  _formatMagnitude(t, e, n) {
    return `${new Intl.NumberFormat(n, {
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
  _intervalStatus(t, e, n) {
    if (t === null) return n.waitingIntervals;
    const i = Math.max(0, Math.round(t));
    return i === 0 ? n.waitingIntervals : i < e ? n.firstTrend(i, e) : n.completedIntervals(i);
  }
  _todayKey() {
    const t = /* @__PURE__ */ new Date(), e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0");
    return `${e}-${n}-${i}`;
  }
  _explanation(t, e, n, i) {
    if (t === "energy") return i.energyExplanation;
    const a = e ?? 1.4, o = new Intl.NumberFormat(n, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return i.powerExplanation(o.format(a), o.format(a * 0.25));
  }
  _infoIcon() {
    return At`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }
  _checkIcon() {
    return At`<svg class="check-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="m8.2 12.2 2.5 2.5 5.4-5.5"></path>
    </svg>`;
  }
};
yl.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
}, yl.styles = ay`
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
let kf = yl;
var Rf = function(r, t) {
  return Rf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, Rf(r, t);
};
function V(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Rf(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var fh = 12, vS = "sans-serif", Br = fh + "px " + vS, dS = 20, pS = 100, gS = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function mS(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var n = String.fromCharCode(e + 32), i = (r.charCodeAt(e) - dS) / pS;
    t[n] = i;
  }
  return t;
}
var yS = mS(gS), ue = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ (function() {
    var r, t;
    return function(e, n) {
      if (!r) {
        var i = ue.createCanvas();
        r = i && i.getContext("2d");
      }
      if (r)
        return t !== n && (t = r.font = n || Br), r.measureText(e);
      e = e || "", n = n || Br;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || fh, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var l = 0; l < e.length; l++) {
          var u = yS[e[l]];
          s += u == null ? o : u * o;
        }
      return { width: s };
    };
  })(),
  loadImage: function(r, t, e) {
    var n = new Image();
    return n.onload = t, n.onerror = e, n.src = r, n;
  },
  getTime: function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }
}, vy = Vi([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(r, t) {
  return r["[object " + t + "]"] = !0, r;
}, {}), dy = Vi([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(r, t) {
  return r["[object " + t + "Array]"] = !0, r;
}, {}), Bi = Object.prototype.toString, wl = Array.prototype, _S = wl.forEach, bS = wl.filter, ch = wl.slice, SS = wl.map, Xv = (function() {
}).constructor, po = Xv ? Xv.prototype : null, hh = "__proto__", ru = 2311, wS = Math.pow(2, 53) - 1;
function py() {
  return ru >= wS && (ru = 0), ru++;
}
function Ir() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function it(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = Bi.call(r);
  if (e === "[object Array]") {
    if (!ba(r)) {
      t = [];
      for (var n = 0, i = r.length; n < i; n++)
        t[n] = it(r[n]);
    }
  } else if (dy[e]) {
    if (!ba(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var n = 0, i = r.length; n < i; n++)
          t[n] = r[n];
      }
    }
  } else if (!vy[e] && !ba(r) && !wi(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== hh && (t[o] = it(r[o]));
  }
  return t;
}
function ht(r, t, e) {
  if (!X(t) || !X(r))
    return e ? it(t) : r;
  for (var n in t)
    if (t.hasOwnProperty(n) && n !== hh) {
      var i = r[n], a = t[n];
      X(a) && X(i) && !B(a) && !B(i) && !wi(a) && !wi(i) && !Zv(a) && !Zv(i) && !ba(a) && !ba(i) ? ht(i, a, e) : (e || !(n in r)) && (r[n] = it(t[n]));
    }
  return r;
}
function k(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== hh && (r[e] = t[e]);
  return r;
}
function xS(r, t, e) {
  r = r || {};
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    r[i] = t[i];
  }
  return r;
}
function gt(r, t, e) {
  for (var n = St(t), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    r[o] == null && (r[o] = t[o]);
  }
  return r;
}
function lt(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, n = r.length; e < n; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function TS(r, t) {
  var e = r.prototype;
  function n() {
  }
  n.prototype = t.prototype, r.prototype = new n();
  for (var i in e)
    e.hasOwnProperty(i) && (r.prototype[i] = e[i]);
  r.prototype.constructor = r, r.superClass = t;
}
function ke(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && r[a] == null && (r[a] = t[a]);
    }
  else
    gt(r, t);
}
function ae(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function D(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === _S)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var n = 0, i = r.length; n < i; n++)
        t.call(e, r[n], n, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function Y(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return vh(r);
  if (r.map && r.map === SS)
    return r.map(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    n.push(t.call(e, r[i], i, r));
  return n;
}
function Vi(r, t, e, n) {
  if (r && t) {
    for (var i = 0, a = r.length; i < a; i++)
      e = t.call(n, e, r[i], i, r);
    return e;
  }
}
function Rt(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return vh(r);
  if (r.filter && r.filter === bS)
    return r.filter(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    t.call(e, r[i], i, r) && n.push(r[i]);
  return n;
}
function CS(r, t, e) {
  if (r && t) {
    for (var n = 0, i = r.length; n < i; n++)
      if (t.call(e, r[n], n, r))
        return r[n];
  }
}
function St(r) {
  if (!r)
    return [];
  if (Object.keys)
    return Object.keys(r);
  var t = [];
  for (var e in r)
    r.hasOwnProperty(e) && t.push(e);
  return t;
}
function DS(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return function() {
    return r.apply(t, e.concat(ch.call(arguments)));
  };
}
var Tt = po && W(po.bind) ? po.call.bind(po.bind) : DS;
function _t(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(ch.call(arguments)));
  };
}
function B(r) {
  return Array.isArray ? Array.isArray(r) : Bi.call(r) === "[object Array]";
}
function W(r) {
  return typeof r == "function";
}
function $(r) {
  return typeof r == "string";
}
function Ms(r) {
  return Bi.call(r) === "[object String]";
}
function wt(r) {
  return typeof r == "number";
}
function X(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function Zv(r) {
  return !!vy[Bi.call(r)];
}
function Kt(r) {
  return !!dy[Bi.call(r)];
}
function wi(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function xl(r) {
  return r.colorStops != null;
}
function ES(r) {
  return r.image != null;
}
function AS(r) {
  return Bi.call(r) === "[object RegExp]";
}
function xi(r) {
  return r !== r;
}
function In() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = 0, n = r.length; e < n; e++)
    if (r[e] != null)
      return r[e];
}
function H(r, t) {
  return r ?? t;
}
function Pr(r, t, e) {
  return r ?? t ?? e;
}
function vh(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return ch.apply(r, t);
}
function dh(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function N(r, t) {
  if (!r)
    throw new Error(t);
}
function We(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var gy = "__ec_primitive__";
function Bf(r) {
  r[gy] = !0;
}
function ba(r) {
  return r[gy];
}
var MS = (function() {
  function r() {
    this.data = {};
  }
  return r.prototype.delete = function(t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }, r.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, r.prototype.get = function(t) {
    return this.data[t];
  }, r.prototype.set = function(t, e) {
    return this.data[t] = e, this;
  }, r.prototype.keys = function() {
    return St(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var n in e)
      e.hasOwnProperty(n) && t(e[n], n);
  }, r;
})(), my = typeof Map == "function";
function LS() {
  return my ? /* @__PURE__ */ new Map() : new MS();
}
var IS = (function() {
  function r(t) {
    var e = B(t);
    this.data = LS();
    var n = this;
    t instanceof r ? t.each(i) : t && D(t, i);
    function i(a, o) {
      e ? n.set(a, o) : n.set(o, a);
    }
  }
  return r.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, r.prototype.get = function(t) {
    return this.data.get(t);
  }, r.prototype.set = function(t, e) {
    return this.data.set(t, e), e;
  }, r.prototype.each = function(t, e) {
    this.data.forEach(function(n, i) {
      t.call(e, n, i);
    });
  }, r.prototype.keys = function() {
    var t = this.data.keys();
    return my ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
})();
function Q(r) {
  return new IS(r);
}
function PS(r, t) {
  for (var e = new r.constructor(r.length + t.length), n = 0; n < r.length; n++)
    e[n] = r[n];
  for (var i = r.length, n = 0; n < t.length; n++)
    e[n + i] = t[n];
  return e;
}
function Tl(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var n = function() {
    };
    n.prototype = r, e = new n();
  }
  return t && k(e, t), e;
}
function yy(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function fe(r, t) {
  return r.hasOwnProperty(t);
}
function Gt() {
}
var OS = 180 / Math.PI, NS = /* @__PURE__ */ (function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
})(), kS = /* @__PURE__ */ (function() {
  function r() {
    this.browser = new NS(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
})(), tt = new kS();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (tt.wxa = !0, tt.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? tt.worker = !0 : !tt.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (tt.node = !0, tt.svgSupported = !0) : RS(navigator.userAgent, tt);
function RS(r, t) {
  var e = t.browser, n = r.match(/Firefox\/([\d.]+)/), i = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  n && (e.firefox = !0, e.version = n[1]), i && (e.ie = !0, e.version = i[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11);
  var s = t.domSupported = typeof document < "u";
  if (s) {
    var l = document.documentElement.style;
    t.transform3dSupported = (e.ie && "transition" in l || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in l) && !("OTransition" in l), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
  }
}
var BS = ".", Yr = "___EC__COMPONENT__CONTAINER___", _y = "___EC__EXTENDED_CLASS___";
function Ye(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(BS);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function VS(r) {
  N(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function FS(r) {
  return !!(r && r[_y]);
}
function ph(r, t) {
  r.$constructor = r, r.extend = function(e) {
    process.env.NODE_ENV !== "production" && D(t, function(a) {
      e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
    });
    var n = this, i;
    return zS(n) ? i = /** @class */
    (function(a) {
      V(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    })(n) : (i = function() {
      (e.$constructor || n).apply(this, arguments);
    }, TS(i, this)), k(i.prototype, e), i[_y] = !0, i.extend = this.extend, i.superCall = GS, i.superApply = US, i.superClass = n, i;
  };
}
function zS(r) {
  return W(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function by(r, t) {
  r.extend = t.extend;
}
var HS = Math.round(Math.random() * 10);
function $S(r) {
  var t = ["__\0is_clz", HS++].join("_");
  r.prototype[t] = !0, process.env.NODE_ENV !== "production" && N(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function GS(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return this.superClass.prototype[t].apply(r, e);
}
function US(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function Cl(r) {
  var t = {};
  r.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      VS(i), n.prototype.type = i;
      var a = Ye(i);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = n;
      else if (a.sub !== Yr) {
        var o = e(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, r.getClass = function(n, i, a) {
    var o = t[n];
    if (o && o[Yr] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(n) {
    var i = Ye(n), a = [], o = t[i.main];
    return o && o[Yr] ? D(o, function(s, l) {
      l !== Yr && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(n) {
    var i = Ye(n);
    return !!t[i.main];
  }, r.getAllClassMainTypes = function() {
    var n = [];
    return D(t, function(i, a) {
      n.push(a);
    }), n;
  }, r.hasSubTypes = function(n) {
    var i = Ye(n), a = t[i.main];
    return a && a[Yr];
  };
  function e(n) {
    var i = t[n.main];
    return (!i || !i[Yr]) && (i = t[n.main] = {}, i[Yr] = !0), i;
  }
}
function Va(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var l = r[s][1];
      if (!(i && lt(i, l) >= 0 || a && lt(a, l) < 0)) {
        var u = n.getShallow(l, t);
        u != null && (o[r[s][0]] = u);
      }
    }
    return o;
  };
}
var WS = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], YS = Va(WS), XS = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return YS(this, t, e);
    }, r;
  })()
), Sy = /* @__PURE__ */ (function() {
  function r(t) {
    this.value = t;
  }
  return r;
})(), ZS = (function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new Sy(t);
    return this.insertEntry(e), e;
  }, r.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, r.prototype.remove = function(t) {
    var e = t.prev, n = t.next;
    e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, r;
})(), Ti = (function() {
  function r(t) {
    this._list = new ZS(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var n = this._list, i = this._map, a = null;
    if (i[t] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var l = n.head;
        n.remove(l), delete i[l.key], a = l.value, this._lastRemovedEntry = l;
      }
      s ? s.value = e : s = new Sy(e), s.key = t, n.insertEntry(s), i[t] = s;
    }
    return a;
  }, r.prototype.get = function(t) {
    var e = this._map[t], n = this._list;
    if (e != null)
      return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value;
  }, r.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, r.prototype.len = function() {
    return this._list.len();
  }, r;
})(), Vf = new Ti(50);
function qS(r) {
  if (typeof r == "string") {
    var t = Vf.get(r);
    return t && t.image;
  } else
    return r;
}
function wy(r, t, e, n, i) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = Vf.get(r), o = { hostEl: e, cb: n, cbPayload: i };
      return a ? (t = a.image, !Dl(t) && a.pending.push(o)) : (t = ue.loadImage(r, qv, qv), t.__zrImageSrc = r, Vf.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else return t;
}
function qv() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], n = e.cb;
    n && n(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function Dl(r) {
  return r && r.width && r.height;
}
function Ze() {
  return [1, 0, 0, 1, 0, 0];
}
function to(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function gh(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function Sa(r, t, e) {
  var n = t[0] * e[0] + t[2] * e[1], i = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], l = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = n, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l, r;
}
function Ff(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function mh(r, t, e, n) {
  n === void 0 && (n = [0, 0]);
  var i = t[0], a = t[2], o = t[4], s = t[1], l = t[3], u = t[5], f = Math.sin(e), c = Math.cos(e);
  return r[0] = i * c + s * f, r[1] = -i * f + s * c, r[2] = a * c + l * f, r[3] = -a * f + c * l, r[4] = c * (o - n[0]) + f * (u - n[1]) + n[0], r[5] = c * (u - n[1]) - f * (o - n[0]) + n[1], r;
}
function KS(r, t, e) {
  var n = e[0], i = e[1];
  return r[0] = t[0] * n, r[1] = t[1] * i, r[2] = t[2] * n, r[3] = t[3] * i, r[4] = t[4] * n, r[5] = t[5] * i, r;
}
function eo(r, t) {
  var e = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], l = e * o - a * n;
  return l ? (l = 1 / l, r[0] = o * l, r[1] = -a * l, r[2] = -n * l, r[3] = e * l, r[4] = (n * s - o * i) * l, r[5] = (a * i - e * s) * l, r) : null;
}
function Fi(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function QS(r) {
  return [r[0], r[1]];
}
function nu(r, t, e) {
  return r[0] = t, r[1] = e, r;
}
function Kv(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function xy(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function jS(r) {
  return Math.sqrt(JS(r));
}
function JS(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function iu(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function yh(r, t) {
  var e = jS(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function zf(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var tw = zf;
function ew(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var pi = ew;
function Ee(r, t, e) {
  var n = t[0], i = t[1];
  return r[0] = e[0] * n + e[2] * i + e[4], r[1] = e[1] * n + e[3] * i + e[5], r;
}
function si(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function li(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var yt = (function() {
  function r(t, e) {
    this.x = t || 0, this.y = e || 0;
  }
  return r.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y);
  }, r.prototype.set = function(t, e) {
    return this.x = t, this.y = e, this;
  }, r.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, r.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, r.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, r.prototype.scaleAndAdd = function(t, e) {
    this.x += t.x * e, this.y += t.y * e;
  }, r.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, r.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, r.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, r.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, r.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, r.prototype.distance = function(t) {
    var e = this.x - t.x, n = this.y - t.y;
    return Math.sqrt(e * e + n * n);
  }, r.prototype.distanceSquare = function(t) {
    var e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }, r.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, r.prototype.transform = function(t) {
    if (t) {
      var e = this.x, n = this.y;
      return this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], this;
    }
  }, r.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, r.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.set = function(t, e, n) {
    t.x = e, t.y = n;
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y;
  }, r.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, r.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, r.dot = function(t, e) {
    return t.x * e.x + t.y * e.y;
  }, r.add = function(t, e, n) {
    t.x = e.x + n.x, t.y = e.y + n.y;
  }, r.sub = function(t, e, n) {
    t.x = e.x - n.x, t.y = e.y - n.y;
  }, r.scale = function(t, e, n) {
    t.x = e.x * n, t.y = e.y * n;
  }, r.scaleAndAdd = function(t, e, n, i) {
    t.x = e.x + n.x * i, t.y = e.y + n.y * i;
  }, r.lerp = function(t, e, n, i) {
    var a = 1 - i;
    t.x = a * e.x + i * n.x, t.y = a * e.y + i * n.y;
  }, r;
})(), bn = Math.min, ui = Math.max, Hf = Math.abs, Qv = ["x", "y"], rw = ["width", "height"], Xr = new yt(), Zr = new yt(), qr = new yt(), Kr = new yt(), le = Ty(), ca = le.minTv, $f = le.maxTv, wa = [0, 0], J = (function() {
  function r(t, e, n, i) {
    au(this, t, e, n, i);
  }
  return r.set = function(t, e, n, i, a) {
    return i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), t.x = e, t.y = n, t.width = i, t.height = a, t;
  }, r.prototype.union = function(t) {
    var e = bn(t.x, this.x), n = bn(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = ui(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = ui(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = e, this.y = n;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    return nw(Ze(), this, t);
  }, r.prototype.intersect = function(t, e, n) {
    return r.intersect(this, t, e, n);
  }, r.intersect = function(t, e, n, i) {
    n && yt.set(n, 0, 0);
    var a = i && i.outIntersectRect || null, o = i && i.clamp;
    if (a && (a.x = a.y = a.width = a.height = NaN), !t || !e)
      return !1;
    t instanceof r || (t = au(iw, t.x, t.y, t.width, t.height)), e instanceof r || (e = au(aw, e.x, e.y, e.width, e.height));
    var s = !!n;
    le.reset(i, s);
    var l = le.touchThreshold, u = t.x + l, f = t.x + t.width - l, c = t.y + l, h = t.y + t.height - l, v = e.x + l, d = e.x + e.width - l, p = e.y + l, m = e.y + e.height - l;
    if (u > f || c > h || v > d || p > m)
      return !1;
    var g = !(f < v || d < u || h < p || m < c);
    return (s || a) && (wa[0] = 1 / 0, wa[1] = 0, Jv(u, f, v, d, 0, s, a, o), Jv(c, h, p, m, 1, s, a, o), s && yt.copy(n, g ? le.useDir ? le.dirMinTv : ca : $f)), g;
  }, r.contain = function(t, e, n) {
    return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height;
  }, r.prototype.contain = function(t, e) {
    return r.contain(this, t, e);
  }, r.prototype.clone = function() {
    return new r(this.x, this.y, this.width, this.height);
  }, r.prototype.copy = function(t) {
    jv(this, t);
  }, r.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, r.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, r.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, r.create = function(t) {
    return new r(t ? t.x : 0, t ? t.y : 0, t ? t.width : 0, t ? t.height : 0);
  }, r.copy = function(t, e) {
    return t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height, t;
  }, r.applyTransform = function(t, e, n) {
    if (!n) {
      t !== e && jv(t, e);
      return;
    }
    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
      var i = n[0], a = n[3], o = n[4], s = n[5];
      t.x = e.x * i + o, t.y = e.y * a + s, t.width = e.width * i, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    Xr.x = qr.x = e.x, Xr.y = Kr.y = e.y, Zr.x = Kr.x = e.x + e.width, Zr.y = qr.y = e.y + e.height, Xr.transform(n), Kr.transform(n), Zr.transform(n), qr.transform(n), t.x = bn(Xr.x, Zr.x, qr.x, Kr.x), t.y = bn(Xr.y, Zr.y, qr.y, Kr.y);
    var l = ui(Xr.x, Zr.x, qr.x, Kr.x), u = ui(Xr.y, Zr.y, qr.y, Kr.y);
    t.width = l - t.x, t.height = u - t.y;
  }, r.calculateTransform = function(t, e, n) {
    var i = n.width / e.width, a = n.height / e.height;
    return t = to(t || []), Ff(t, t, nu(ou, -e.x, -e.y)), KS(t, t, nu(ou, i, a)), Ff(t, t, nu(ou, n.x, n.y)), t;
  }, r;
})();
J.create;
var au = J.set, jv = J.copy, nw = J.calculateTransform;
J.applyTransform;
J.contain;
var iw = new J(0, 0, 0, 0), aw = new J(0, 0, 0, 0), ou = [];
function Jv(r, t, e, n, i, a, o, s) {
  var l = Hf(t - e), u = Hf(n - r), f = bn(l, u), c = Qv[i], h = Qv[1 - i], v = rw[i];
  t < e || n < r ? l < u ? (a && ($f[c] = -l), s && (o[c] = t, o[v] = 0)) : (a && ($f[c] = u), s && (o[c] = r, o[v] = 0)) : (o && (o[c] = ui(r, e), o[v] = bn(t, n) - o[c]), a && (f < wa[0] || le.useDir) && (wa[0] = bn(f, wa[0]), (l < u || !le.bidirectional) && (ca[c] = l, ca[h] = 0, le.useDir && le.calcDirMTV()), (l >= u || !le.bidirectional) && (ca[c] = -u, ca[h] = 0, le.useDir && le.calcDirMTV())));
}
function Ty() {
  var r = 0, t = new yt(), e = new yt(), n = {
    minTv: new yt(),
    maxTv: new yt(),
    useDir: !1,
    dirMinTv: new yt(),
    touchThreshold: 0,
    bidirectional: !0,
    negativeSize: !1,
    reset: function(a, o) {
      n.touchThreshold = 0, a && a.touchThreshold != null && (n.touchThreshold = ui(0, a.touchThreshold)), n.negativeSize = !1, o && (n.minTv.set(1 / 0, 1 / 0), n.maxTv.set(0, 0), n.useDir = !1, a && a.direction != null && (n.useDir = !0, n.dirMinTv.copy(n.minTv), e.copy(n.minTv), r = a.direction, n.bidirectional = a.bidirectional == null || !!a.bidirectional, n.bidirectional || t.set(Math.cos(r), Math.sin(r))));
    },
    calcDirMTV: function() {
      var a = n.minTv, o = n.dirMinTv, s = a.y * a.y + a.x * a.x, l = Math.sin(r), u = Math.cos(r), f = l * a.y + u * a.x;
      if (i(f)) {
        i(a.x) && i(a.y) && o.set(0, 0);
        return;
      }
      if (e.x = s * u / f, e.y = s * l / f, i(e.x) && i(e.y)) {
        o.set(0, 0);
        return;
      }
      (n.bidirectional || t.dot(e) > 0) && e.len() < o.len() && o.copy(e);
    }
  };
  function i(a) {
    return Hf(a) < 1e-10;
  }
  return n;
}
function qe(r) {
  go || (go = new Ti(100)), r = r || Br;
  var t = go.get(r);
  return t || (t = {
    font: r,
    strWidthCache: new Ti(500),
    asciiWidthMap: null,
    asciiWidthMapTried: !1,
    stWideCharWidth: ue.measureText("国", r).width,
    asciiCharWidth: ue.measureText("a", r).width
  }, go.put(r, t)), t;
}
var go;
function ow(r) {
  if (!(su >= td)) {
    r = r || Br;
    for (var t = [], e = +/* @__PURE__ */ new Date(), n = 0; n <= 127; n++)
      t[n] = ue.measureText(String.fromCharCode(n), r).width;
    var i = +/* @__PURE__ */ new Date() - e;
    return i > 16 ? su = td : i > 2 && su++, t;
  }
}
var su = 0, td = 5;
function Cy(r, t) {
  return r.asciiWidthMapTried || (r.asciiWidthMap = ow(r.font), r.asciiWidthMapTried = !0), 0 <= t && t <= 127 ? r.asciiWidthMap != null ? r.asciiWidthMap[t] : r.asciiCharWidth : r.stWideCharWidth;
}
function Ke(r, t) {
  var e = r.strWidthCache, n = e.get(t);
  return n == null && (n = ue.measureText(t, r.font).width, e.put(t, n)), n;
}
function ed(r, t, e, n) {
  var i = Ke(qe(t), r), a = El(t), o = Ci(0, i, e), s = Tn(0, a, n), l = new J(o, s, i, a);
  return l;
}
function Dy(r, t, e, n) {
  var i = ((r || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return ed(i[0], t, e, n);
  for (var o = new J(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var l = ed(i[s], t, e, n);
    s === 0 ? o.copy(l) : o.union(l);
  }
  return o;
}
function Ci(r, t, e, n) {
  return e === "right" ? n ? r += t : r -= t : e === "center" && (n ? r += t / 2 : r -= t / 2), r;
}
function Tn(r, t, e, n) {
  return e === "middle" ? n ? r += t / 2 : r -= t / 2 : e === "bottom" && (n ? r += t : r -= t), r;
}
function El(r) {
  return qe(r).stWideCharWidth;
}
function Di(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function Ey(r, t, e) {
  var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, l = e.x, u = e.y, f = "left", c = "top";
  if (n instanceof Array)
    l += Di(n[0], e.width), u += Di(n[1], e.height), f = null, c = null;
  else
    switch (n) {
      case "left":
        l -= i, u += s, f = "right", c = "middle";
        break;
      case "right":
        l += i + o, u += s, c = "middle";
        break;
      case "top":
        l += o / 2, u -= i, f = "center", c = "bottom";
        break;
      case "bottom":
        l += o / 2, u += a + i, f = "center";
        break;
      case "inside":
        l += o / 2, u += s, f = "center", c = "middle";
        break;
      case "insideLeft":
        l += i, u += s, c = "middle";
        break;
      case "insideRight":
        l += o - i, u += s, f = "right", c = "middle";
        break;
      case "insideTop":
        l += o / 2, u += i, f = "center";
        break;
      case "insideBottom":
        l += o / 2, u += a - i, f = "center", c = "bottom";
        break;
      case "insideTopLeft":
        l += i, u += i;
        break;
      case "insideTopRight":
        l += o - i, u += i, f = "right";
        break;
      case "insideBottomLeft":
        l += i, u += a - i, c = "bottom";
        break;
      case "insideBottomRight":
        l += o - i, u += a - i, f = "right", c = "bottom";
        break;
    }
  return r = r || {}, r.x = l, r.y = u, r.align = f, r.verticalAlign = c, r;
}
var lu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function sw(r, t, e, n, i, a) {
  if (!e) {
    r.text = "", r.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = Ay(e, n, i, a);
  for (var s = !1, l = {}, u = 0, f = o.length; u < f; u++)
    My(l, o[u], a), o[u] = l.textLine, s = s || l.isTruncated;
  r.text = o.join(`
`), r.isTruncated = s;
}
function Ay(r, t, e, n) {
  n = n || {};
  var i = k({}, n);
  e = H(e, "..."), i.maxIterations = H(n.maxIterations, 2);
  var a = i.minChar = H(n.minChar, 0), o = i.fontMeasureInfo = qe(t), s = o.asciiCharWidth;
  i.placeholder = H(n.placeholder, "");
  for (var l = r = Math.max(0, r - 1), u = 0; u < a && l >= s; u++)
    l -= s;
  var f = Ke(o, e);
  return f > l && (e = "", f = 0), l = r - f, i.ellipsis = e, i.ellipsisWidth = f, i.contentWidth = l, i.containerWidth = r, i;
}
function My(r, t, e) {
  var n = e.containerWidth, i = e.contentWidth, a = e.fontMeasureInfo;
  if (!n) {
    r.textLine = "", r.isTruncated = !1;
    return;
  }
  var o = Ke(a, t);
  if (o <= n) {
    r.textLine = t, r.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= i || s >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var l = s === 0 ? lw(t, i, a) : o > 0 ? Math.floor(t.length * i / o) : 0;
    t = t.substr(0, l), o = Ke(a, t);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = !0;
}
function lw(r, t, e) {
  for (var n = 0, i = 0, a = r.length; i < a && n < t; i++)
    n += Cy(e, r.charCodeAt(i));
  return i;
}
function uw(r, t, e, n) {
  var i = _h(r), a = t.overflow, o = t.padding, s = o ? o[1] + o[3] : 0, l = o ? o[0] + o[2] : 0, u = t.font, f = a === "truncate", c = El(u), h = H(t.lineHeight, c), v = t.lineOverflow === "truncate", d = !1, p = t.width;
  p == null && e != null && (p = e - s);
  var m = t.height;
  m == null && n != null && (m = n - l);
  var g;
  p != null && (a === "break" || a === "breakAll") ? g = i ? Ly(i, t.font, p, a === "breakAll", 0).lines : [] : g = i ? i.split(`
`) : [];
  var y = g.length * h;
  if (m == null && (m = y), y > m && v) {
    var _ = Math.floor(m / h);
    d = d || g.length > _, g = g.slice(0, _), y = g.length * h;
  }
  if (i && f && p != null)
    for (var b = Ay(p, u, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), S = {}, w = 0; w < g.length; w++)
      My(S, g[w], b), g[w] = S.textLine, d = d || S.isTruncated;
  for (var x = m, E = 0, T = qe(u), w = 0; w < g.length; w++)
    E = Math.max(Ke(T, g[w]), E);
  p == null && (p = E);
  var C = p;
  return x += l, C += s, {
    lines: g,
    height: m,
    outerWidth: C,
    outerHeight: x,
    lineHeight: h,
    calculatedLineHeight: c,
    contentWidth: E,
    contentHeight: y,
    width: p,
    isTruncated: d
  };
}
var fw = /* @__PURE__ */ (function() {
  function r() {
  }
  return r;
})(), rd = /* @__PURE__ */ (function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
})(), cw = /* @__PURE__ */ (function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return r;
})();
function hw(r, t, e, n, i) {
  var a = new cw(), o = _h(r);
  if (!o)
    return a;
  var s = t.padding, l = s ? s[1] + s[3] : 0, u = s ? s[0] + s[2] : 0, f = t.width;
  f == null && e != null && (f = e - l);
  var c = t.height;
  c == null && n != null && (c = n - u);
  for (var h = t.overflow, v = (h === "break" || h === "breakAll") && f != null ? { width: f, accumWidth: 0, breakAll: h === "breakAll" } : null, d = lu.lastIndex = 0, p; (p = lu.exec(o)) != null; ) {
    var m = p.index;
    m > d && uu(a, o.substring(d, m), t, v), uu(a, p[2], t, v, p[1]), d = lu.lastIndex;
  }
  d < o.length && uu(a, o.substring(d, o.length), t, v);
  var g = [], y = 0, _ = 0, b = h === "truncate", S = t.lineOverflow === "truncate", w = {};
  function x(at, Wt, Le) {
    at.width = Wt, at.lineHeight = Le, y += Le, _ = Math.max(_, Wt);
  }
  t: for (var E = 0; E < a.lines.length; E++) {
    for (var T = a.lines[E], C = 0, A = 0, L = 0; L < T.tokens.length; L++) {
      var M = T.tokens[L], I = M.styleName && t.rich[M.styleName] || {}, O = M.textPadding = I.padding, P = O ? O[1] + O[3] : 0, F = M.font = I.font || t.font;
      M.contentHeight = El(F);
      var G = H(I.height, M.contentHeight);
      if (M.innerHeight = G, O && (G += O[0] + O[2]), M.height = G, M.lineHeight = Pr(I.lineHeight, t.lineHeight, G), M.align = I && I.align || i, M.verticalAlign = I && I.verticalAlign || "middle", S && c != null && y + M.lineHeight > c) {
        var U = a.lines.length;
        L > 0 ? (T.tokens = T.tokens.slice(0, L), x(T, A, C), a.lines = a.lines.slice(0, E + 1)) : a.lines = a.lines.slice(0, E), a.isTruncated = a.isTruncated || a.lines.length < U;
        break t;
      }
      var j = I.width, K = j == null || j === "auto";
      if (typeof j == "string" && j.charAt(j.length - 1) === "%")
        M.percentWidth = j, g.push(M), M.contentWidth = Ke(qe(F), M.text);
      else {
        if (K) {
          var et = I.backgroundColor, Z = et && et.image;
          Z && (Z = qS(Z), Dl(Z) && (M.width = Math.max(M.width, Z.width * G / Z.height)));
        }
        var z = b && f != null ? f - A : null;
        z != null && z < M.width ? !K || z < P ? (M.text = "", M.width = M.contentWidth = 0) : (sw(w, M.text, z - P, F, t.ellipsis, { minChar: t.truncateMinChar }), M.text = w.text, a.isTruncated = a.isTruncated || w.isTruncated, M.width = M.contentWidth = Ke(qe(F), M.text)) : M.contentWidth = Ke(qe(F), M.text);
      }
      M.width += P, A += M.width, I && (C = Math.max(C, M.lineHeight));
    }
    x(T, A, C);
  }
  a.outerWidth = a.width = H(f, _), a.outerHeight = a.height = H(c, y), a.contentHeight = y, a.contentWidth = _, a.outerWidth += l, a.outerHeight += u;
  for (var E = 0; E < g.length; E++) {
    var M = g[E], nt = M.percentWidth;
    M.width = parseInt(nt, 10) / 100 * a.width;
  }
  return a;
}
function uu(r, t, e, n, i) {
  var a = t === "", o = i && e.rich[i] || {}, s = r.lines, l = o.font || e.font, u = !1, f, c;
  if (n) {
    var h = o.padding, v = h ? h[1] + h[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Di(o.width, n.width) + v;
      s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), u = !0), n.accumWidth = d;
    } else {
      var p = Ly(t, l, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = p.accumWidth + v, c = p.linesWidths, f = p.lines;
    }
  }
  f || (f = t.split(`
`));
  for (var m = qe(l), g = 0; g < f.length; g++) {
    var y = f[g], _ = new fw();
    if (_.styleName = i, _.text = y, _.isLineHolder = !y && !a, typeof o.width == "number" ? _.width = o.width : _.width = c ? c[g] : Ke(m, y), !g && !u) {
      var b = (s[s.length - 1] || (s[0] = new rd())).tokens, S = b.length;
      S === 1 && b[0].isLineHolder ? b[0] = _ : (y || !S || a) && b.push(_);
    } else
      s.push(new rd([_]));
  }
}
function vw(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var dw = Vi(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function pw(r) {
  return vw(r) ? !!dw[r] : !0;
}
function Ly(r, t, e, n, i) {
  for (var a = [], o = [], s = "", l = "", u = 0, f = 0, c = qe(t), h = 0; h < r.length; h++) {
    var v = r.charAt(h);
    if (v === `
`) {
      l && (s += l, f += u), a.push(s), o.push(f), s = "", l = "", u = 0, f = 0;
      continue;
    }
    var d = Cy(c, v.charCodeAt(0)), p = n ? !1 : !pw(v);
    if (a.length ? f + d > e : i + f + d > e) {
      f ? (s || l) && (p ? (s || (s = l, l = "", u = 0, f = u), a.push(s), o.push(f - u), l += v, u += d, s = "", f = u) : (l && (s += l, l = "", u = 0), a.push(s), o.push(f), s = v, f = d)) : p ? (a.push(l), o.push(u), l = v, u = d) : (a.push(v), o.push(d));
      continue;
    }
    f += d, p ? (l += v, u += d) : (l && (s += l, l = "", u = 0), s += v);
  }
  return l && (s += l), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
function nd(r, t, e, n, i, a) {
  if (r.baseX = e, r.baseY = n, r.outerWidth = r.outerHeight = null, !!t) {
    var o = t.width * 2, s = t.height * 2;
    J.set(id, Ci(e, o, i), Tn(n, s, a), o, s), J.intersect(t, id, null, ad);
    var l = ad.outIntersectRect;
    r.outerWidth = l.width, r.outerHeight = l.height, r.baseX = Ci(l.x, l.width, i, !0), r.baseY = Tn(l.y, l.height, a, !0);
  }
}
var id = new J(0, 0, 0, 0), ad = { outIntersectRect: {}, clamp: !0 };
function _h(r) {
  return r != null ? r += "" : r = "";
}
function gw(r) {
  var t = _h(r.text), e = r.font, n = Ke(qe(e), t), i = El(e);
  return Gf(r, n, i, null);
}
function Gf(r, t, e, n) {
  var i = new J(Ci(r.x || 0, t, r.textAlign), Tn(r.y || 0, e, r.textBaseline), t, e), a = n ?? (Iy(r) ? r.lineWidth : 0);
  return a > 0 && (i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a), i;
}
function Iy(r) {
  var t = r.stroke;
  return t != null && t !== "none" && r.lineWidth > 0;
}
var od = to, sd = 5e-5;
function Qr(r) {
  return r > sd || r < -sd;
}
var jr = [], Hn = [], fu = Ze(), cu = Math.abs, ro = (function() {
  function r() {
  }
  return r.prototype.getLocalTransform = function(t) {
    return mw(this, t);
  }, r.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, r.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, r.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, r.prototype.needLocalTransform = function() {
    return Qr(this.rotation) || Qr(this.x) || Qr(this.y) || Qr(this.scaleX - 1) || Qr(this.scaleY - 1) || Qr(this.skewX) || Qr(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
    if (!(e || t)) {
      n && (od(n), this.invTransform = null);
      return;
    }
    n = n || Ze(), e ? this.getLocalTransform(n) : od(n), t && (e ? Sa(n, t, n) : gh(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n), this.invTransform = this.invTransform || Ze(), eo(this.invTransform, n);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(jr);
      var n = jr[0] < 0 ? -1 : 1, i = jr[1] < 0 ? -1 : 1, a = ((jr[0] - n) * e + n) / jr[0] || 0, o = ((jr[1] - i) * e + i) / jr[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
  }, r.prototype.getComputedTransform = function() {
    for (var t = this, e = []; t; )
      e.push(t), t = t.parent;
    for (; t = e.pop(); )
      t.updateTransform();
    return this.transform;
  }, r.prototype.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = Math.atan2(t[1], t[0]), a = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
      n = Math.sqrt(n) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = n, this.originX = 0, this.originY = 0;
    }
  }, r.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, e = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || Ze(), Sa(Hn, t.invTransform, e), e = Hn);
      var n = this.originX, i = this.originY;
      (n || i) && (fu[4] = n, fu[5] = i, Sa(Hn, e, fu), Hn[4] -= n, Hn[5] -= i, e = Hn), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var n = [t, e], i = this.invTransform;
    return i && Ee(n, n, i), n;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var n = [t, e], i = this.transform;
    return i && Ee(n, n, i), n;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && cu(t[0] - 1) > 1e-10 && cu(t[3] - 1) > 1e-10 ? Math.sqrt(cu(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    Ls(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, l = t.anchorY, u = t.rotation || 0, f = t.x, c = t.y, h = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
    if (n || i || s || l) {
      var d = n + s, p = i + l;
      e[4] = -d * a - h * p * o, e[5] = -p * o - v * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = v * a, e[2] = h * o, u && mh(e, e, u), e[4] += n + f, e[5] += i + c, e;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  })(), r;
})(), mw = ro.getLocalTransform, Al = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function Ls(r, t) {
  return xS(r, t, Al);
}
var xa = {
  linear: function(r) {
    return r;
  },
  quadraticIn: function(r) {
    return r * r;
  },
  quadraticOut: function(r) {
    return r * (2 - r);
  },
  quadraticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
  },
  cubicIn: function(r) {
    return r * r * r;
  },
  cubicOut: function(r) {
    return --r * r * r + 1;
  },
  cubicInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
  },
  quarticIn: function(r) {
    return r * r * r * r;
  },
  quarticOut: function(r) {
    return 1 - --r * r * r * r;
  },
  quarticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r : -0.5 * ((r -= 2) * r * r * r - 2);
  },
  quinticIn: function(r) {
    return r * r * r * r * r;
  },
  quinticOut: function(r) {
    return --r * r * r * r * r + 1;
  },
  quinticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r * r : 0.5 * ((r -= 2) * r * r * r * r + 2);
  },
  sinusoidalIn: function(r) {
    return 1 - Math.cos(r * Math.PI / 2);
  },
  sinusoidalOut: function(r) {
    return Math.sin(r * Math.PI / 2);
  },
  sinusoidalInOut: function(r) {
    return 0.5 * (1 - Math.cos(Math.PI * r));
  },
  exponentialIn: function(r) {
    return r === 0 ? 0 : Math.pow(1024, r - 1);
  },
  exponentialOut: function(r) {
    return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
  },
  exponentialInOut: function(r) {
    return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ? 0.5 * Math.pow(1024, r - 1) : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
  },
  circularIn: function(r) {
    return 1 - Math.sqrt(1 - r * r);
  },
  circularOut: function(r) {
    return Math.sqrt(1 - --r * r);
  },
  circularInOut: function(r) {
    return (r *= 2) < 1 ? -0.5 * (Math.sqrt(1 - r * r) - 1) : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
  },
  elasticIn: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n)));
  },
  elasticOut: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / n) + 1);
  },
  elasticInOut: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n) * 0.5 + 1);
  },
  backIn: function(r) {
    var t = 1.70158;
    return r * r * ((t + 1) * r - t);
  },
  backOut: function(r) {
    var t = 1.70158;
    return --r * r * ((t + 1) * r + t) + 1;
  },
  backInOut: function(r) {
    var t = 2.5949095;
    return (r *= 2) < 1 ? 0.5 * (r * r * ((t + 1) * r - t)) : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
  },
  bounceIn: function(r) {
    return 1 - xa.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? xa.bounceIn(r * 2) * 0.5 : xa.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
}, mo = Math.pow, Or = Math.sqrt, Is = 1e-8, Py = 1e-4, ld = Or(3), yo = 1 / 3, Ue = Fi(), be = Fi(), gi = Fi();
function Mr(r) {
  return r > -Is && r < Is;
}
function Oy(r) {
  return r > Is || r < -Is;
}
function Ft(r, t, e, n, i) {
  var a = 1 - i;
  return a * a * (a * r + 3 * i * t) + i * i * (i * n + 3 * a * e);
}
function ud(r, t, e, n, i) {
  var a = 1 - i;
  return 3 * (((t - r) * a + 2 * (e - t) * i) * a + (n - e) * i * i);
}
function Ps(r, t, e, n, i, a) {
  var o = n + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), l = 3 * (t - r), u = r - i, f = s * s - 3 * o * l, c = s * l - 9 * o * u, h = l * l - 3 * s * u, v = 0;
  if (Mr(f) && Mr(c))
    if (Mr(s))
      a[0] = 0;
    else {
      var d = -l / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var p = c * c - 4 * f * h;
    if (Mr(p)) {
      var m = c / f, d = -s / o + m, g = -m / 2;
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g);
    } else if (p > 0) {
      var y = Or(p), _ = f * s + 1.5 * o * (-c + y), b = f * s + 1.5 * o * (-c - y);
      _ < 0 ? _ = -mo(-_, yo) : _ = mo(_, yo), b < 0 ? b = -mo(-b, yo) : b = mo(b, yo);
      var d = (-s - (_ + b)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var S = (2 * f * s - 3 * o * c) / (2 * Or(f * f * f)), w = Math.acos(S) / 3, x = Or(f), E = Math.cos(w), d = (-s - 2 * x * E) / (3 * o), g = (-s + x * (E + ld * Math.sin(w))) / (3 * o), T = (-s + x * (E - ld * Math.sin(w))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g), T >= 0 && T <= 1 && (a[v++] = T);
    }
  }
  return v;
}
function Ny(r, t, e, n, i) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * n - 3 * r - 9 * e, s = 3 * t - 3 * r, l = 0;
  if (Mr(o)) {
    if (Oy(a)) {
      var u = -s / a;
      u >= 0 && u <= 1 && (i[l++] = u);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Mr(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var c = Or(f), u = (-a + c) / (2 * o), h = (-a - c) / (2 * o);
      u >= 0 && u <= 1 && (i[l++] = u), h >= 0 && h <= 1 && (i[l++] = h);
    }
  }
  return l;
}
function Os(r, t, e, n, i, a) {
  var o = (t - r) * i + r, s = (e - t) * i + t, l = (n - e) * i + e, u = (s - o) * i + o, f = (l - s) * i + s, c = (f - u) * i + u;
  a[0] = r, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = f, a[6] = l, a[7] = n;
}
function yw(r, t, e, n, i, a, o, s, l, u, f) {
  var c, h = 5e-3, v = 1 / 0, d, p, m, g;
  Ue[0] = l, Ue[1] = u;
  for (var y = 0; y < 1; y += 0.05)
    be[0] = Ft(r, e, i, o, y), be[1] = Ft(t, n, a, s, y), m = pi(Ue, be), m < v && (c = y, v = m);
  v = 1 / 0;
  for (var _ = 0; _ < 32 && !(h < Py); _++)
    d = c - h, p = c + h, be[0] = Ft(r, e, i, o, d), be[1] = Ft(t, n, a, s, d), m = pi(be, Ue), d >= 0 && m < v ? (c = d, v = m) : (gi[0] = Ft(r, e, i, o, p), gi[1] = Ft(t, n, a, s, p), g = pi(gi, Ue), p <= 1 && g < v ? (c = p, v = g) : h *= 0.5);
  return Or(v);
}
function _w(r, t, e, n, i, a, o, s, l) {
  for (var u = r, f = t, c = 0, h = 1 / l, v = 1; v <= l; v++) {
    var d = v * h, p = Ft(r, e, i, o, d), m = Ft(t, n, a, s, d), g = p - u, y = m - f;
    c += Math.sqrt(g * g + y * y), u = p, f = m;
  }
  return c;
}
function Jt(r, t, e, n) {
  var i = 1 - n;
  return i * (i * r + 2 * n * t) + n * n * e;
}
function fd(r, t, e, n) {
  return 2 * ((1 - n) * (t - r) + n * (e - t));
}
function bw(r, t, e, n, i) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - n, l = 0;
  if (Mr(a)) {
    if (Oy(o)) {
      var u = -s / o;
      u >= 0 && u <= 1 && (i[l++] = u);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Mr(f)) {
      var u = -o / (2 * a);
      u >= 0 && u <= 1 && (i[l++] = u);
    } else if (f > 0) {
      var c = Or(f), u = (-o + c) / (2 * a), h = (-o - c) / (2 * a);
      u >= 0 && u <= 1 && (i[l++] = u), h >= 0 && h <= 1 && (i[l++] = h);
    }
  }
  return l;
}
function ky(r, t, e) {
  var n = r + e - 2 * t;
  return n === 0 ? 0.5 : (r - t) / n;
}
function Ns(r, t, e, n, i) {
  var a = (t - r) * n + r, o = (e - t) * n + t, s = (o - a) * n + a;
  i[0] = r, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = e;
}
function Sw(r, t, e, n, i, a, o, s, l) {
  var u, f = 5e-3, c = 1 / 0;
  Ue[0] = o, Ue[1] = s;
  for (var h = 0; h < 1; h += 0.05) {
    be[0] = Jt(r, e, i, h), be[1] = Jt(t, n, a, h);
    var v = pi(Ue, be);
    v < c && (u = h, c = v);
  }
  c = 1 / 0;
  for (var d = 0; d < 32 && !(f < Py); d++) {
    var p = u - f, m = u + f;
    be[0] = Jt(r, e, i, p), be[1] = Jt(t, n, a, p);
    var v = pi(be, Ue);
    if (p >= 0 && v < c)
      u = p, c = v;
    else {
      gi[0] = Jt(r, e, i, m), gi[1] = Jt(t, n, a, m);
      var g = pi(gi, Ue);
      m <= 1 && g < c ? (u = m, c = g) : f *= 0.5;
    }
  }
  return Or(c);
}
function ww(r, t, e, n, i, a, o) {
  for (var s = r, l = t, u = 0, f = 1 / o, c = 1; c <= o; c++) {
    var h = c * f, v = Jt(r, e, i, h), d = Jt(t, n, a, h), p = v - s, m = d - l;
    u += Math.sqrt(p * p + m * m), s = v, l = d;
  }
  return u;
}
var xw = /cubic-bezier\(([0-9,\.e ]+)\)/;
function Ry(r) {
  var t = r && xw.exec(r);
  if (t) {
    var e = t[1].split(","), n = +We(e[0]), i = +We(e[1]), a = +We(e[2]), o = +We(e[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(l) {
      return l <= 0 ? 0 : l >= 1 ? 1 : Ps(0, n, a, 1, l, s) && Ft(0, i, o, 1, s[0]);
    };
  }
}
var Tw = (function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Gt, this.ondestroy = t.ondestroy || Gt, this.onrestart = t.onrestart || Gt, t.easing && this.setEasing(t.easing);
  }
  return r.prototype.step = function(t, e) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += e;
      return;
    }
    var n = this._life, i = t - this._startTime - this._pausedTime, a = i / n;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var l = i % n;
        this._startTime = t - l, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = W(t) ? t : xa[t] || Ry(t);
  }, r;
})(), cd = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function Nr(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function Uf(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function hu(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Nr(parseFloat(t) / 100 * 255) : Nr(parseInt(t, 10));
}
function Cn(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Uf(parseFloat(t) / 100) : Uf(parseFloat(t));
}
function vu(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function _o(r, t, e) {
  return r + (t - r) * e;
}
function pe(r, t, e, n, i) {
  return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r;
}
function Wf(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var By = new Ti(20), bo = null;
function $n(r, t) {
  bo && Wf(bo, t), bo = By.put(r, bo || t.slice());
}
function Qe(r, t) {
  if (r) {
    t = t || [];
    var e = By.get(r);
    if (e)
      return Wf(t, e);
    r = r + "";
    var n = r.replace(/ /g, "").toLowerCase();
    if (n in cd)
      return Wf(t, cd[n]), $n(r, t), t;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          pe(t, 0, 0, 0, 1);
          return;
        }
        return pe(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), $n(r, t), t;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          pe(t, 0, 0, 0, 1);
          return;
        }
        return pe(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), $n(r, t), t;
      }
      return;
    }
    var o = n.indexOf("("), s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var l = n.substr(0, o), u = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (l) {
        case "rgba":
          if (u.length !== 4)
            return u.length === 3 ? pe(t, +u[0], +u[1], +u[2], 1) : pe(t, 0, 0, 0, 1);
          f = Cn(u.pop());
        case "rgb":
          if (u.length >= 3)
            return pe(t, hu(u[0]), hu(u[1]), hu(u[2]), u.length === 3 ? f : Cn(u[3])), $n(r, t), t;
          pe(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (u.length !== 4) {
            pe(t, 0, 0, 0, 1);
            return;
          }
          return u[3] = Cn(u[3]), Yf(u, t), $n(r, t), t;
        case "hsl":
          if (u.length !== 3) {
            pe(t, 0, 0, 0, 1);
            return;
          }
          return Yf(u, t), $n(r, t), t;
        default:
          return;
      }
    }
    pe(t, 0, 0, 0, 1);
  }
}
function Yf(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, n = Cn(r[1]), i = Cn(r[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return t = t || [], pe(t, Nr(vu(o, a, e + 1 / 3) * 255), Nr(vu(o, a, e) * 255), Nr(vu(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function Cw(r) {
  if (r) {
    var t = r[0] / 255, e = r[1] / 255, n = r[2] / 255, i = Math.min(t, e, n), a = Math.max(t, e, n), o = a - i, s = (a + i) / 2, l, u;
    if (o === 0)
      l = 0, u = 0;
    else {
      s < 0.5 ? u = o / (a + i) : u = o / (2 - a - i);
      var f = ((a - t) / 6 + o / 2) / o, c = ((a - e) / 6 + o / 2) / o, h = ((a - n) / 6 + o / 2) / o;
      t === a ? l = h - c : e === a ? l = 1 / 3 + f - h : n === a && (l = 2 / 3 + c - f), l < 0 && (l += 1), l > 1 && (l -= 1);
    }
    var v = [l * 360, u, s];
    return r[3] != null && v.push(r[3]), v;
  }
}
function hd(r, t) {
  var e = Qe(r);
  if (e) {
    for (var n = 0; n < 3; n++)
      e[n] = e[n] * (1 - t) | 0, e[n] > 255 ? e[n] = 255 : e[n] < 0 && (e[n] = 0);
    return no(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function Dw(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = Qe(t[i]), s = Qe(t[a]), l = n - i, u = no([
      Nr(_o(o[0], s[0], l)),
      Nr(_o(o[1], s[1], l)),
      Nr(_o(o[2], s[2], l)),
      Uf(_o(o[3], s[3], l))
    ], "rgba");
    return e ? {
      color: u,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : u;
  }
}
function Xf(r, t, e, n) {
  var i = Qe(r);
  if (r)
    return i = Cw(i), e != null && (i[1] = Cn(W(e) ? e(i[1]) : e)), n != null && (i[2] = Cn(W(n) ? n(i[2]) : n)), no(Yf(i), "rgba");
}
function no(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function ks(r, t) {
  var e = Qe(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
var vd = new Ti(100);
function dd(r) {
  if ($(r)) {
    var t = vd.get(r);
    return t || (t = hd(r, -0.1), vd.put(r, t)), t;
  } else if (xl(r)) {
    var e = k({}, r);
    return e.colorStops = Y(r.colorStops, function(n) {
      return {
        offset: n.offset,
        color: hd(n.color, -0.1)
      };
    }), e;
  }
  return r;
}
function Ew(r) {
  return r.type === "linear";
}
function Aw(r) {
  return r.type === "radial";
}
(function() {
  return typeof Buffer < "u" && typeof Buffer.from == "function" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : typeof btoa == "function" && typeof unescape == "function" && typeof encodeURIComponent == "function" ? function(r) {
    return btoa(unescape(encodeURIComponent(r)));
  } : function(r) {
    return process.env.NODE_ENV !== "production" && Ir("Base64 isn't natively supported in the current environment."), null;
  };
})();
var Zf = Array.prototype.slice;
function ur(r, t, e) {
  return (t - r) * e + r;
}
function du(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++)
    r[a] = ur(t[a], e[a], n);
  return r;
}
function Mw(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = ur(t[o][s], e[o][s], n);
  }
  return r;
}
function So(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++)
    r[a] = t[a] + e[a] * n;
  return r;
}
function pd(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * n;
  }
  return r;
}
function Lw(r, t) {
  for (var e = r.length, n = t.length, i = e > n ? t : r, a = Math.min(e, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Iw(r, t, e) {
  var n = r, i = t;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var l = a; l < o; l++)
          n.push(e === 1 ? i[l] : Zf.call(i[l]));
    }
    for (var u = n[0] && n[0].length, l = 0; l < n.length; l++)
      if (e === 1)
        isNaN(n[l]) && (n[l] = i[l]);
      else
        for (var f = 0; f < u; f++)
          isNaN(n[l][f]) && (n[l][f] = i[l][f]);
  }
}
function fs(r) {
  if (ae(r)) {
    var t = r.length;
    if (ae(r[0])) {
      for (var e = [], n = 0; n < t; n++)
        e.push(Zf.call(r[n]));
      return e;
    }
    return Zf.call(r);
  }
  return r;
}
function cs(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function Pw(r) {
  return ae(r && r[0]) ? 2 : 1;
}
var wo = 0, hs = 1, Vy = 2, ha = 3, qf = 4, Kf = 5, gd = 6;
function md(r) {
  return r === qf || r === Kf;
}
function xo(r) {
  return r === hs || r === Vy;
}
var Yi = [0, 0, 0, 0], Ow = (function() {
  function r(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return r.prototype.isFinished = function() {
    return this._finished;
  }, r.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, r.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, r.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, r.prototype.addKeyframe = function(t, e, n) {
    this._needsSort = !0;
    var i = this.keyframes, a = i.length, o = !1, s = gd, l = e;
    if (ae(e)) {
      var u = Pw(e);
      s = u, (u === 1 && !wt(e[0]) || u === 2 && !wt(e[0][0])) && (o = !0);
    } else if (wt(e) && !xi(e))
      s = wo;
    else if ($(e))
      if (!isNaN(+e))
        s = wo;
      else {
        var f = Qe(e);
        f && (l = f, s = ha);
      }
    else if (xl(e)) {
      var c = k({}, l);
      c.colorStops = Y(e.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Qe(v.color)
        };
      }), Ew(e) ? s = qf : Aw(e) && (s = Kf), l = c;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === gd) && (o = !0), this.discrete = this.discrete || o;
    var h = {
      time: t,
      value: l,
      rawValue: e,
      percent: 0
    };
    return n && (h.easing = n, h.easingFunc = W(n) ? n : xa[n] || Ry(n)), i.push(h), h;
  }, r.prototype.prepare = function(t, e) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(p, m) {
      return p.time - m.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, l = xo(i), u = md(i), f = 0; f < a; f++) {
      var c = n[f], h = c.value, v = o.value;
      c.percent = c.time / t, s || (l && f !== a - 1 ? Iw(h, v, i) : u && Lw(h.colorStops, v.colorStops));
    }
    if (!s && i !== Kf && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = n[0].value, f = 0; f < a; f++)
        i === wo ? n[f].additiveValue = n[f].value - d : i === ha ? n[f].additiveValue = So([], n[f].value, d, -1) : xo(i) && (n[f].additiveValue = i === hs ? So([], n[f].value, d, -1) : pd([], n[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, l = this.propName, u = a === ha, f, c = this._lastFr, h = Math.min, v, d;
      if (s === 1)
        v = d = o[0];
      else {
        if (e < 0)
          f = 0;
        else if (e < this._lastFrP) {
          var p = h(c + 1, s - 1);
          for (f = p; f >= 0 && !(o[f].percent <= e); f--)
            ;
          f = h(f, s - 2);
        } else {
          for (f = c; f < s && !(o[f].percent > e); f++)
            ;
          f = h(f - 1, s - 2);
        }
        d = o[f + 1], v = o[f];
      }
      if (v && d) {
        this._lastFr = f, this._lastFrP = e;
        var m = d.percent - v.percent, g = m === 0 ? 1 : h((e - v.percent) / m, 1);
        d.easingFunc && (g = d.easingFunc(g));
        var y = n ? this._additiveValue : u ? Yi : t[l];
        if ((xo(a) || u) && !y && (y = this._additiveValue = []), this.discrete)
          t[l] = g < 1 ? v.rawValue : d.rawValue;
        else if (xo(a))
          a === hs ? du(y, v[i], d[i], g) : Mw(y, v[i], d[i], g);
        else if (md(a)) {
          var _ = v[i], b = d[i], S = a === qf;
          t[l] = {
            type: S ? "linear" : "radial",
            x: ur(_.x, b.x, g),
            y: ur(_.y, b.y, g),
            colorStops: Y(_.colorStops, function(x, E) {
              var T = b.colorStops[E];
              return {
                offset: ur(x.offset, T.offset, g),
                color: cs(du([], x.color, T.color, g))
              };
            }),
            global: b.global
          }, S ? (t[l].x2 = ur(_.x2, b.x2, g), t[l].y2 = ur(_.y2, b.y2, g)) : t[l].r = ur(_.r, b.r, g);
        } else if (u)
          du(y, v[i], d[i], g), n || (t[l] = cs(y));
        else {
          var w = ur(v[i], d[i], g);
          n ? this._additiveValue = w : t[l] = w;
        }
        n && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, n = this.propName, i = this._additiveValue;
    e === wo ? t[n] = t[n] + i : e === ha ? (Qe(t[n], Yi), So(Yi, Yi, i, 1), t[n] = cs(Yi)) : e === hs ? So(t[n], t[n], i, 1) : e === Vy && pd(t[n], t[n], i, 1);
  }, r;
})(), bh = (function() {
  function r(t, e, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && i) {
      Ir("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = i, this._allowDiscrete = n;
  }
  return r.prototype.getMaxTime = function() {
    return this._maxTime;
  }, r.prototype.getDelay = function() {
    return this._delay;
  }, r.prototype.getLoop = function() {
    return this._loop;
  }, r.prototype.getTarget = function() {
    return this._target;
  }, r.prototype.changeTarget = function(t) {
    this._target = t;
  }, r.prototype.when = function(t, e, n) {
    return this.whenWithKeys(t, e, St(e), n);
  }, r.prototype.whenWithKeys = function(t, e, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], l = a[s];
      if (!l) {
        l = a[s] = new Ow(s);
        var u = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var c = f.keyframes, h = c[c.length - 1];
          u = h && h.value, f.valType === ha && u && (u = cs(u));
        } else
          u = this._target[s];
        if (u == null)
          continue;
        t > 0 && l.addKeyframe(0, fs(u), i), this._trackKeys.push(s);
      }
      l.addKeyframe(t, fs(e[s]), i);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, r.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, r.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, r.prototype.isPaused = function() {
    return !!this._paused;
  }, r.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, r.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var e = t.length, n = 0; n < e; n++)
        t[n].call(this);
  }, r.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, e = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, e)
      for (var n = 0; n < e.length; n++)
        e[n].call(this);
  }, r.prototype._setTracksFinished = function() {
    for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++)
      t[e[n]].setFinished();
  }, r.prototype._getAdditiveTrack = function(t) {
    var e, n = this._additiveAnimators;
    if (n)
      for (var i = 0; i < n.length; i++) {
        var a = n[i].getTrack(t);
        a && (e = a);
      }
    return e;
  }, r.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], l = this._getAdditiveTrack(o), u = s.keyframes, f = u.length;
        if (s.prepare(i, l), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var c = u[f - 1];
            c && (e._target[s.propName] = c.rawValue), s.setFinished();
          } else
            n.push(s);
      }
      if (n.length || this._force) {
        var h = new Tw({
          life: i,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(v) {
            e._started = 2;
            var d = e._additiveAnimators;
            if (d) {
              for (var p = !1, m = 0; m < d.length; m++)
                if (d[m]._clip) {
                  p = !0;
                  break;
                }
              p || (e._additiveAnimators = null);
            }
            for (var m = 0; m < n.length; m++)
              n[m].step(e._target, v);
            var g = e._onframeCbs;
            if (g)
              for (var m = 0; m < g.length; m++)
                g[m](e._target, v);
          },
          ondestroy: function() {
            e._doneCallback();
          }
        });
        this._clip = h, this.animation && this.animation.addClip(h), t && h.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, r.prototype.stop = function(t) {
    if (this._clip) {
      var e = this._clip;
      t && e.onframe(1), this._abortedCallback();
    }
  }, r.prototype.delay = function(t) {
    return this._delay = t, this;
  }, r.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, r.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, r.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, r.prototype.getClip = function() {
    return this._clip;
  }, r.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, r.prototype.getTracks = function() {
    var t = this;
    return Y(this._trackKeys, function(e) {
      return t._tracks[e];
    });
  }, r.prototype.stopTracks = function(t, e) {
    if (!t.length || !this._clip)
      return !0;
    for (var n = this._tracks, i = this._trackKeys, a = 0; a < t.length; a++) {
      var o = n[t[a]];
      o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < i.length; a++)
      if (!n[i[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, r.prototype.saveTo = function(t, e, n) {
    if (t) {
      e = e || this._trackKeys;
      for (var i = 0; i < e.length; i++) {
        var a = e[i], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, l = s[n ? 0 : s.length - 1];
          l && (t[a] = fs(l.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || St(t);
    for (var n = 0; n < e.length; n++) {
      var i = e[n], a = this._tracks[i];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[i]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, r;
})(), rr = (function() {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return r.prototype.on = function(t, e, n, i) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof e == "function" && (i = n, n = e, e = null), !n || !t)
      return this;
    var o = this._$eventProcessor;
    e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === n)
        return this;
    var l = {
      h: n,
      query: e,
      ctx: i || this,
      callAtLast: n.zrEventfulCallAtLast
    }, u = a[t].length - 1, f = a[t][u];
    return f && f.callAtLast ? a[t].splice(u, 0, l) : a[t].push(l), this;
  }, r.prototype.isSilent = function(t) {
    var e = this._$handlers;
    return !e || !e[t] || !e[t].length;
  }, r.prototype.off = function(t, e) {
    var n = this._$handlers;
    if (!n)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (e) {
      if (n[t]) {
        for (var i = [], a = 0, o = n[t].length; a < o; a++)
          n[t][a].h !== e && i.push(n[t][a]);
        n[t] = i;
      }
      n[t] && n[t].length === 0 && delete n[t];
    } else
      delete n[t];
    return this;
  }, r.prototype.trigger = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = e.length, s = i.length, l = 0; l < s; l++) {
        var u = i[l];
        if (!(a && a.filter && u.query != null && !a.filter(t, u.query)))
          switch (o) {
            case 0:
              u.h.call(u.ctx);
              break;
            case 1:
              u.h.call(u.ctx, e[0]);
              break;
            case 2:
              u.h.call(u.ctx, e[0], e[1]);
              break;
            default:
              u.h.apply(u.ctx, e);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r.prototype.triggerWithContext = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = e.length, s = e[o - 1], l = i.length, u = 0; u < l; u++) {
        var f = i[u];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, e[0]);
              break;
            case 2:
              f.h.call(s, e[0], e[1]);
              break;
            default:
              f.h.apply(s, e.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r;
})(), Fy = 1;
tt.hasGlobalWindow && (Fy = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Rs = Fy, Qf = 0.4, jf = "#333", Jf = "#ccc", Nw = "#eee", ie = 1, va = 2, ai = 4, pu = "__zr_normal__", gu = Al.concat(["ignore"]), kw = Vi(Al, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), Gn = {}, Rw = new J(0, 0, 0, 0), To = [], vs = 0, Ml = 1, Ll = (function() {
  function r(t) {
    this.id = py(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return r.prototype._init = function(t) {
    this.attr(t);
  }, r.prototype.drift = function(t, e, n) {
    switch (this.draggable) {
      case "horizontal":
        e = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var i = this.transform;
    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.markRedraw();
  }, r.prototype.beforeUpdate = function() {
  }, r.prototype.afterUpdate = function() {
  }, r.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, r.prototype.updateInnerText = function(t) {
    var e = this._textContent;
    if (e && (!e.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var n = this.textConfig, i = n.local, a = e.innerTransformable, o = void 0, s = void 0, l = !1;
      a.parent = i ? this : null;
      var u = !1;
      a.copyTransform(e);
      var f = n.position != null, c = n.autoOverflowArea, h = void 0;
      if ((c || f) && (h = Rw, n.layoutRect ? h.copy(n.layoutRect) : h.copy(this.getBoundingRect()), i || h.applyTransform(this.transform)), f) {
        this.calculateTextPosition ? this.calculateTextPosition(Gn, n, h) : Ey(Gn, n, h), a.x = Gn.x, a.y = Gn.y, o = Gn.align, s = Gn.verticalAlign;
        var v = n.origin;
        if (v && n.rotation != null) {
          var d = void 0, p = void 0;
          v === "center" ? (d = h.width * 0.5, p = h.height * 0.5) : (d = Di(v[0], h.width), p = Di(v[1], h.height)), u = !0, a.originX = -a.x + d + (i ? 0 : h.x), a.originY = -a.y + p + (i ? 0 : h.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var m = n.offset;
      m && (a.x += m[0], a.y += m[1], u || (a.originX = -m[0], a.originY = -m[1]));
      var g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
      if (c) {
        var y = g.overflowRect = g.overflowRect || new J(0, 0, 0, 0);
        a.getLocalTransform(To), eo(To, To), J.copy(y, h), y.applyTransform(To);
      } else
        g.overflowRect = null;
      var _ = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, b = void 0, S = void 0, w = void 0;
      _ && this.canBeInsideText() ? (b = n.insideFill, S = n.insideStroke, (b == null || b === "auto") && (b = this.getInsideTextFill()), (S == null || S === "auto") && (S = this.getInsideTextStroke(b), w = !0)) : (b = n.outsideFill, S = n.outsideStroke, (b == null || b === "auto") && (b = this.getOutsideFill()), (S == null || S === "auto") && (S = this.getOutsideStroke(b), w = !0)), b = b || "#000", (b !== g.fill || S !== g.stroke || w !== g.autoStroke || o !== g.align || s !== g.verticalAlign) && (l = !0, g.fill = b, g.stroke = S, g.autoStroke = w, g.align = o, g.verticalAlign = s, e.setDefaultTextStyle(g)), e.__dirty |= ie, l && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Jf : jf;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), n = typeof e == "string" && Qe(e);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, no(n, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, k(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string")
      this.attrKV(t, e);
    else if (X(t))
      for (var n = t, i = St(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== pu)) {
        var o = i.targetName, s = o ? e[o] : e;
        i.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, gu);
  }, r.prototype._savePrimaryToNormal = function(t, e, n) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      t[a] != null && !(a in e) && (e[a] = this[a]);
    }
  }, r.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, r.prototype.getState = function(t) {
    return this.states[t];
  }, r.prototype.ensureState = function(t) {
    var e = this.states;
    return e[t] || (e[t] = {}), e[t];
  }, r.prototype.clearStates = function(t) {
    this.useState(pu, !1, t);
  }, r.prototype.useState = function(t, e, n, i) {
    var a = t === pu, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, l = this.stateTransition;
      if (!(lt(s, t) >= 0 && (e || s.length === 1))) {
        var u;
        if (this.stateProxy && !a && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !a) {
          Ir("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(u);
        var f = this._textContent, c = yd(this, f, u, i);
        c && !this.__inHover && (this.__inHover = c), this._applyStateObj(t, u, this._normalState, e, bd(this, n, l), l);
        var h = this._textGuide;
        return f && f.useState(t, e, n, !!c), h && h.useState(t, e, n, !!c), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !c && this.__inHover && (this.__inHover = vs, this.__dirty &= ~ie), u;
      }
    }
  }, r.prototype.useStates = function(t, e, n) {
    if (!t.length)
      this.clearStates();
    else {
      var i = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var l = 0; l < o; l++)
          if (t[l] !== a[l]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var l = 0; l < o; l++) {
        var u = t[l], f = void 0;
        this.stateProxy && (f = this.stateProxy(u, t)), f || (f = this.states[u]), f && i.push(f);
      }
      var c = i[o - 1], h = this._textContent, v = yd(this, h, c, n);
      v && !this.__inHover && (this.__inHover = v);
      var d = this._mergeStates(i), p = this.stateTransition;
      this.saveCurrentToNormalState(d), this._applyStateObj(t.join(","), d, this._normalState, !1, bd(this, e, p), p);
      var m = this._textGuide;
      h && h.useStates(t, e, !!v), m && m.useStates(t, e, !!v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this.__inHover = vs, this.__dirty &= ~ie);
    }
  }, r.prototype.isSilent = function() {
    for (var t = this; t; ) {
      if (t.silent)
        return !0;
      var e = t.__hostTarget;
      t = e ? t.ignoreHostSilent ? null : e : t.parent;
    }
    return !1;
  }, r.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var e = this.animators[t];
      e.targetName && e.changeTarget(this[e.targetName]);
    }
  }, r.prototype.removeState = function(t) {
    var e = lt(this.currentStates, t);
    if (e >= 0) {
      var n = this.currentStates.slice();
      n.splice(e, 1), this.useStates(n);
    }
  }, r.prototype.replaceState = function(t, e, n) {
    var i = this.currentStates.slice(), a = lt(i, t), o = lt(i, e) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = e : n && !o && i.push(e), this.useStates(i);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, n, i = 0; i < t.length; i++) {
      var a = t[i];
      k(e, a), a.textConfig && (n = n || {}, k(n, a.textConfig));
    }
    return n && (e.textConfig = n), e;
  }, r.prototype._applyStateObj = function(t, e, n, i, a, o) {
    if (this.__inHover !== Ml) {
      var s = !(e && i);
      e && e.textConfig ? (this.textConfig = k({}, i ? this.textConfig : n.textConfig), k(this.textConfig, e.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
      for (var l = {}, u = !1, f = 0; f < gu.length; f++) {
        var c = gu[f], h = a && kw[c];
        e && e[c] != null ? h ? (u = !0, l[c] = e[c]) : this[c] = e[c] : s && n[c] != null && (h ? (u = !0, l[c] = n[c]) : this[c] = n[c]);
      }
      if (!a)
        for (var f = 0; f < this.animators.length; f++) {
          var v = this.animators[f], d = v.targetName;
          v.getLoop() || v.__changeFinalValue(d ? (e || n)[d] : e || n);
        }
      u && this._transitionState(t, l, o);
    }
  }, r.prototype._attachComponent = function(t) {
    if (t.__zr && !t.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (t === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var e = this.__zr;
    e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
  }, r.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, r.prototype.getClipPath = function() {
    return this._clipPath;
  }, r.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, r.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, r.prototype.getTextContent = function() {
    return this._textContent;
  }, r.prototype.setTextContent = function(t) {
    var e = this._textContent;
    if (e !== t) {
      if (e && e !== t && this.removeTextContent(), process.env.NODE_ENV !== "production" && t.__zr && !t.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      t.innerTransformable = new ro(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), k(this.textConfig, t), this.markRedraw();
  }, r.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, r.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, r.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, r.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, r.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, r.prototype.markRedraw = function() {
    this.__dirty |= ie;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, r.prototype.dirty = function() {
    this.markRedraw();
  }, r.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++)
          t.animation.addAnimator(e[n]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, r.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++)
          t.animation.removeAnimator(e[n]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, r.prototype.animate = function(t, e, n) {
    var i = t ? this[t] : this;
    if (process.env.NODE_ENV !== "production" && !i) {
      Ir('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new bh(i, e, n);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var n = this.__zr, i = this;
    t.during(function() {
      i.updateDuringAnimation(e);
    }).done(function() {
      var a = i.animators, o = lt(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp();
  }, r.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, r.prototype.stopAnimation = function(t, e) {
    for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
      var s = n[o];
      !t || t === s.scope ? s.stop(e) : a.push(s);
    }
    return this.animators = a, this;
  }, r.prototype.animateTo = function(t, e, n) {
    mu(this, t, e, n);
  }, r.prototype.animateFrom = function(t, e, n) {
    mu(this, t, e, n, !0);
  }, r.prototype._transitionState = function(t, e, n, i) {
    for (var a = mu(this, e, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.ignoreHostSilent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = !1, t.__inHover = vs, t.__dirty = ie;
    var e = {};
    function n(a, o, s) {
      e[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), e[a + o + s] = !0);
    }
    function i(a, o, s, l) {
      Object.defineProperty(t, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && n(a, s, l), !this[o]) {
            var f = this[o] = [];
            u(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && n(a, s, l), this[s] = f[0], this[l] = f[1], this[o] = f, u(this, f);
        }
      });
      function u(f, c) {
        Object.defineProperty(c, 0, {
          get: function() {
            return f[s];
          },
          set: function(h) {
            f[s] = h;
          }
        }), Object.defineProperty(c, 1, {
          get: function() {
            return f[l];
          },
          set: function(h) {
            f[l] = h;
          }
        });
      }
    }
    Object.defineProperty && (i("position", "_legacyPos", "x", "y"), i("scale", "_legacyScale", "scaleX", "scaleY"), i("origin", "_legacyOrigin", "originX", "originY"));
  })(), r;
})();
ke(Ll, rr);
ke(Ll, ro);
function mu(r, t, e, n, i) {
  e = e || {};
  var a = [];
  zy(r, "", r, t, e, n, a, i);
  var o = a.length, s = !1, l = e.done, u = e.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? l && l() : u && u());
  }, c = function() {
    o--, o <= 0 && (s ? l && l() : u && u());
  };
  o || l && l(), a.length > 0 && e.during && a[0].during(function(d, p) {
    e.during(p);
  });
  for (var h = 0; h < a.length; h++) {
    var v = a[h];
    f && v.done(f), c && v.aborted(c), e.force && v.duration(e.duration), v.start(e.easing);
  }
  return a;
}
function yu(r, t, e) {
  for (var n = 0; n < e; n++)
    r[n] = t[n];
}
function Bw(r) {
  return ae(r[0]);
}
function Vw(r, t, e) {
  if (ae(t[e]))
    if (ae(r[e]) || (r[e] = []), Kt(t[e])) {
      var n = t[e].length;
      r[e].length !== n && (r[e] = new t[e].constructor(n), yu(r[e], t[e], n));
    } else {
      var i = t[e], a = r[e], o = i.length;
      if (Bw(i))
        for (var s = i[0].length, l = 0; l < o; l++)
          a[l] ? yu(a[l], i[l], s) : a[l] = Array.prototype.slice.call(i[l]);
      else
        yu(a, i, o);
      a.length = i.length;
    }
  else
    r[e] = t[e];
}
function Fw(r, t) {
  return r === t || ae(r) && ae(t) && zw(r, t);
}
function zw(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var n = 0; n < e; n++)
    if (r[n] !== t[n])
      return !1;
  return !0;
}
function zy(r, t, e, n, i, a, o, s) {
  for (var l = St(n), u = i.duration, f = i.delay, c = i.additive, h = i.setToFinal, v = !X(a), d = r.animators, p = [], m = 0; m < l.length; m++) {
    var g = l[m], y = n[g];
    if (y != null && e[g] != null && (v || a[g]))
      if (X(y) && !ae(y) && !xl(y)) {
        if (t) {
          s || (e[g] = y, r.updateDuringAnimation(t));
          continue;
        }
        zy(r, g, e[g], y, i, a && a[g], o, s);
      } else
        p.push(g);
    else s || (e[g] = y, r.updateDuringAnimation(t), p.push(g));
  }
  var _ = p.length;
  if (!c && _)
    for (var b = 0; b < d.length; b++) {
      var S = d[b];
      if (S.targetName === t) {
        var w = S.stopTracks(p);
        if (w) {
          var x = lt(d, S);
          d.splice(x, 1);
        }
      }
    }
  if (i.force || (p = Rt(p, function(A) {
    return !Fw(n[A], e[A]);
  }), _ = p.length), _ > 0 || i.force && !o.length) {
    var E = void 0, T = void 0, C = void 0;
    if (s) {
      T = {}, h && (E = {});
      for (var b = 0; b < _; b++) {
        var g = p[b];
        T[g] = e[g], h ? E[g] = n[g] : e[g] = n[g];
      }
    } else if (h) {
      C = {};
      for (var b = 0; b < _; b++) {
        var g = p[b];
        C[g] = fs(e[g]), Vw(e, n, g);
      }
    }
    var S = new bh(e, !1, !1, c ? Rt(d, function(L) {
      return L.targetName === t;
    }) : null);
    S.targetName = t, i.scope && (S.scope = i.scope), h && E && S.whenWithKeys(0, E, p), C && S.whenWithKeys(0, C, p), S.whenWithKeys(u ?? 500, s ? T : n, p).delay(f || 0), r.addAnimator(S, t), o.push(S);
  }
}
function yd(r, t, e, n) {
  return !(e && e.hoverLayer || n) || _d(r) || t && _d(t) ? vs : Ml;
}
function _d(r) {
  return r.type === "text" || r.type === "tspan";
}
function bd(r, t, e) {
  return !t && !r.__inHover && e && e.duration > 0;
}
var tc = "__zr_style_" + Math.round(Math.random() * 10), Dn = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, Il = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
Dn[tc] = !0;
var Sd = ["z", "z2", "invisible"], Hw = ["invisible"], io = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var n = St(e), i = 0; i < n.length; i++) {
      var a = n[i];
      a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function(e) {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(e, n, i, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && $w(this, e, n) || o && !o[0] && !o[3])
      return !1;
    if (i && this.__clipPaths && this.__clipPaths.length) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var l = this.parent; l; ) {
        if (l.ignore)
          return !1;
        l = l.parent;
      }
    return !0;
  }, t.prototype.contain = function(e, n) {
    return this.rectContain(e, n);
  }, t.prototype.traverse = function(e, n) {
    e.call(n, this);
  }, t.prototype.rectContain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
    return a.contain(i[0], i[1]);
  }, t.prototype.getPaintRect = function() {
    var e = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, l = a.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new J(0, 0, 0, 0)), n ? J.applyTransform(e, i, n) : e.copy(i), (o || s || l) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(l), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + l - o));
      var u = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - u), e.y = Math.floor(e.y - u), e.width = Math.ceil(e.width + 1 + u * 2), e.height = Math.ceil(e.height + 1 + u * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new J(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, n) {
    e !== "style" ? r.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, t.prototype.setStyle = function(e, n) {
    return typeof e == "string" ? this.style[e] = n : k(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= va, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & va);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~va;
  }, t.prototype.createStyle = function(e) {
    return Tl(Dn, e);
  }, t.prototype.useStyle = function(e) {
    e[tc] || (e = this.createStyle(e)), this.style = e, this.dirtyStyle();
  }, t.prototype._useHoverStyle = function(e) {
    this.__hoverStyle = e;
  }, t.prototype.isStyleObject = function(e) {
    return e[tc];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var n = this._normalState;
    e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, Sd);
  }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
    r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
    var l = !(n && a), u = this.__inHover === Ml, f;
    if (n && n.style ? o ? a ? f = n.style : (f = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(f, n.style)) : (f = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(f, n.style)) : l && (f = i.style), f)
      if (o) {
        var c = this.style;
        if (this.style = this.createStyle(l ? {} : c), l)
          for (var h = St(c), v = 0; v < h.length; v++) {
            var d = h[v];
            d in f && (f[d] = f[d], this.style[d] = c[d]);
          }
        for (var p = St(f), v = 0; v < p.length; v++) {
          var d = p[v];
          this.style[d] = this.style[d];
        }
        this._transitionState(e, {
          style: f
        }, s, this.getAnimationStyleProps());
      } else
        u ? this._useHoverStyle(f) : this.useStyle(f);
    if (!u)
      for (var m = this.__inHover ? Hw : Sd, v = 0; v < m.length; v++) {
        var d = m[v];
        n && n[d] != null ? this[d] = n[d] : l && i[d] != null && (this[d] = i[d]);
      }
  }, t.prototype._mergeStates = function(e) {
    for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
      var o = e[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, t.prototype._mergeStyle = function(e, n) {
    return k(e, n), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return Il;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = 0, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = ie | va;
  })(), t;
})(Ll), _u = new J(0, 0, 0, 0), bu = new J(0, 0, 0, 0);
function $w(r, t, e) {
  return _u.copy(r.getBoundingRect()), r.transform && _u.applyTransform(r.transform), bu.width = t, bu.height = e, !_u.intersect(bu);
}
var Se = Math.min, we = Math.max, Su = Math.sin, wu = Math.cos, Jr = Math.PI * 2, Co = Fi(), Do = Fi(), Eo = Fi();
function wd(r, t, e, n, i, a) {
  i[0] = Se(r, e), i[1] = Se(t, n), a[0] = we(r, e), a[1] = we(t, n);
}
var xd = [], Td = [];
function Gw(r, t, e, n, i, a, o, s, l, u) {
  var f = Ny, c = Ft, h = f(r, e, i, o, xd);
  l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
  for (var v = 0; v < h; v++) {
    var d = c(r, e, i, o, xd[v]);
    l[0] = Se(d, l[0]), u[0] = we(d, u[0]);
  }
  h = f(t, n, a, s, Td);
  for (var v = 0; v < h; v++) {
    var p = c(t, n, a, s, Td[v]);
    l[1] = Se(p, l[1]), u[1] = we(p, u[1]);
  }
  l[0] = Se(r, l[0]), u[0] = we(r, u[0]), l[0] = Se(o, l[0]), u[0] = we(o, u[0]), l[1] = Se(t, l[1]), u[1] = we(t, u[1]), l[1] = Se(s, l[1]), u[1] = we(s, u[1]);
}
function Uw(r, t, e, n, i, a, o, s) {
  var l = ky, u = Jt, f = we(Se(l(r, e, i), 1), 0), c = we(Se(l(t, n, a), 1), 0), h = u(r, e, i, f), v = u(t, n, a, c);
  o[0] = Se(r, i, h), o[1] = Se(t, a, v), s[0] = we(r, i, h), s[1] = we(t, a, v);
}
function Ww(r, t, e, n, i, a, o, s, l) {
  var u = si, f = li, c = Math.abs(i - a);
  if (c % Jr < 1e-4 && c > 1e-4) {
    s[0] = r - e, s[1] = t - n, l[0] = r + e, l[1] = t + n;
    return;
  }
  if (Co[0] = wu(i) * e + r, Co[1] = Su(i) * n + t, Do[0] = wu(a) * e + r, Do[1] = Su(a) * n + t, u(s, Co, Do), f(l, Co, Do), i = i % Jr, i < 0 && (i = i + Jr), a = a % Jr, a < 0 && (a = a + Jr), i > a && !o ? a += Jr : i < a && o && (i += Jr), o) {
    var h = a;
    a = i, i = h;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > i && (Eo[0] = wu(v) * e + r, Eo[1] = Su(v) * n + t, u(s, Eo, s), f(l, Eo, l));
}
var vt = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, tn = [], en = [], Fe = [], yr = [], ze = [], He = [], xu = Math.min, Tu = Math.max, rn = Math.cos, nn = Math.sin, ar = Math.abs, ec = Math.PI, Dr = ec * 2, Cu = typeof Float32Array < "u", Xi = [];
function Du(r) {
  var t = Math.round(r / ec * 1e8) / 1e8;
  return t % 2 * ec;
}
function Yw(r, t) {
  var e = Du(r[0]);
  e < 0 && (e += Dr);
  var n = e - r[0], i = r[1];
  i += n, !t && i - e >= Dr ? i = e + Dr : t && e - i >= Dr ? i = e - Dr : !t && e > i ? i = e + (Dr - Du(e - i)) : t && e < i && (i = e - (Dr - Du(i - e))), r[0] = e, r[1] = i;
}
var Pn = (function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, n) {
    n = n || 0, n > 0 && (this._ux = ar(n / Rs / t) || 0, this._uy = ar(n / Rs / e) || 0);
  }, r.prototype.setDPR = function(t) {
    this.dpr = t;
  }, r.prototype.setContext = function(t) {
    this._ctx = t;
  }, r.prototype.getContext = function() {
    return this._ctx;
  }, r.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, r.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, r.prototype.moveTo = function(t, e) {
    return this._drawPendingPt(), this.addData(vt.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var n = ar(t - this._xi), i = ar(e - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(vt.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, n, i, a, o) {
    return this._drawPendingPt(), this.addData(vt.C, t, e, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, n, i) {
    return this._drawPendingPt(), this.addData(vt.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), this._xi = n, this._yi = i, this;
  }, r.prototype.arc = function(t, e, n, i, a, o) {
    this._drawPendingPt(), Xi[0] = i, Xi[1] = a, Yw(Xi, o), i = Xi[0], a = Xi[1];
    var s = a - i;
    return this.addData(vt.A, t, e, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, a, o), this._xi = rn(a) * n + t, this._yi = nn(a) * n + e, this;
  }, r.prototype.arcTo = function(t, e, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, a), this;
  }, r.prototype.rect = function(t, e, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(vt.R, t, e, n, i), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(vt.Z);
    var t = this._ctx, e = this._x0, n = this._y0;
    return t && t.closePath(), this._xi = e, this._yi = n, this;
  }, r.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, r.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.setData = function(t) {
    if (this._saveData) {
      var e = t.length;
      !(this.data && this.data.length === e) && Cu && (this.data = new Float32Array(e));
      for (var n = 0; n < e; n++)
        this.data[n] = t[n];
      this._len = e;
    }
  }, r.prototype.appendPath = function(t) {
    if (this._saveData) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, n = 0, i = this._len, a = 0; a < e; a++)
        n += t[a].len();
      var o = this.data;
      if (Cu && (o instanceof Float32Array || !o) && (this.data = new Float32Array(i + n), i > 0 && o))
        for (var s = 0; s < i; s++)
          this.data[s] = o[s];
      for (var a = 0; a < e; a++)
        for (var l = t[a].data, s = 0; s < l.length; s++)
          this.data[i++] = l[s];
      this._len = i;
    }
  }, r.prototype.addData = function(t, e, n, i, a, o, s, l, u) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var c = 0; c < arguments.length; c++)
        f[this._len++] = arguments[c];
    }
  }, r.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, r.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], e = 0; e < this._len; e++)
        t[e] = this.data[e];
      this.data = t;
    }
  }, r.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, Cu && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    Fe[0] = Fe[1] = ze[0] = ze[1] = Number.MAX_VALUE, yr[0] = yr[1] = He[0] = He[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], l = o === 1;
      switch (l && (e = t[o], n = t[o + 1], i = e, a = n), s) {
        case vt.M:
          e = i = t[o++], n = a = t[o++], ze[0] = i, ze[1] = a, He[0] = i, He[1] = a;
          break;
        case vt.L:
          wd(e, n, t[o], t[o + 1], ze, He), e = t[o++], n = t[o++];
          break;
        case vt.C:
          Gw(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], ze, He), e = t[o++], n = t[o++];
          break;
        case vt.Q:
          Uw(e, n, t[o++], t[o++], t[o], t[o + 1], ze, He), e = t[o++], n = t[o++];
          break;
        case vt.A:
          var u = t[o++], f = t[o++], c = t[o++], h = t[o++], v = t[o++], d = t[o++] + v;
          o += 1;
          var p = !t[o++];
          l && (i = rn(v) * c + u, a = nn(v) * h + f), Ww(u, f, c, h, v, d, p, ze, He), e = rn(d) * c + u, n = nn(d) * h + f;
          break;
        case vt.R:
          i = e = t[o++], a = n = t[o++];
          var m = t[o++], g = t[o++];
          wd(i, a, i + m, a + g, ze, He);
          break;
        case vt.Z:
          e = i, n = a;
          break;
      }
      si(Fe, Fe, ze), li(yr, yr, He);
    }
    return o === 0 && (Fe[0] = Fe[1] = yr[0] = yr[1] = 0), new J(Fe[0], Fe[1], yr[0] - Fe[0], yr[1] - Fe[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, l = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var u = this._pathSegLen, f = 0, c = 0, h = 0; h < e; ) {
      var v = t[h++], d = h === 1;
      d && (a = t[h], o = t[h + 1], s = a, l = o);
      var p = -1;
      switch (v) {
        case vt.M:
          a = s = t[h++], o = l = t[h++];
          break;
        case vt.L: {
          var m = t[h++], g = t[h++], y = m - a, _ = g - o;
          (ar(y) > n || ar(_) > i || h === e - 1) && (p = Math.sqrt(y * y + _ * _), a = m, o = g);
          break;
        }
        case vt.C: {
          var b = t[h++], S = t[h++], m = t[h++], g = t[h++], w = t[h++], x = t[h++];
          p = _w(a, o, b, S, m, g, w, x, 10), a = w, o = x;
          break;
        }
        case vt.Q: {
          var b = t[h++], S = t[h++], m = t[h++], g = t[h++];
          p = ww(a, o, b, S, m, g, 10), a = m, o = g;
          break;
        }
        case vt.A:
          var E = t[h++], T = t[h++], C = t[h++], A = t[h++], L = t[h++], M = t[h++], I = M + L;
          h += 1, d && (s = rn(L) * C + E, l = nn(L) * A + T), p = Tu(C, A) * xu(Dr, Math.abs(M)), a = rn(I) * C + E, o = nn(I) * A + T;
          break;
        case vt.R: {
          s = a = t[h++], l = o = t[h++];
          var O = t[h++], P = t[h++];
          p = O * 2 + P * 2;
          break;
        }
        case vt.Z: {
          var y = s - a, _ = l - o;
          p = Math.sqrt(y * y + _ * _), a = s, o = l;
          break;
        }
      }
      p >= 0 && (u[c++] = p, f += p);
    }
    return this._pathLen = f, f;
  }, r.prototype.rebuildPath = function(t, e) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, l, u, f, c, h, v = e < 1, d, p, m = 0, g = 0, y, _ = 0, b, S;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, p = this._pathLen, y = e * p, !y)))
      t: for (var w = 0; w < o; ) {
        var x = n[w++], E = w === 1;
        switch (E && (u = n[w], f = n[w + 1], s = u, l = f), x !== vt.L && _ > 0 && (t.lineTo(b, S), _ = 0), x) {
          case vt.M:
            s = u = n[w++], l = f = n[w++], t.moveTo(u, f);
            break;
          case vt.L: {
            c = n[w++], h = n[w++];
            var T = ar(c - u), C = ar(h - f);
            if (T > i || C > a) {
              if (v) {
                var A = d[g++];
                if (m + A > y) {
                  var L = (y - m) / A;
                  t.lineTo(u * (1 - L) + c * L, f * (1 - L) + h * L);
                  break t;
                }
                m += A;
              }
              t.lineTo(c, h), u = c, f = h, _ = 0;
            } else {
              var M = T * T + C * C;
              M > _ && (b = c, S = h, _ = M);
            }
            break;
          }
          case vt.C: {
            var I = n[w++], O = n[w++], P = n[w++], F = n[w++], G = n[w++], U = n[w++];
            if (v) {
              var A = d[g++];
              if (m + A > y) {
                var L = (y - m) / A;
                Os(u, I, P, G, L, tn), Os(f, O, F, U, L, en), t.bezierCurveTo(tn[1], en[1], tn[2], en[2], tn[3], en[3]);
                break t;
              }
              m += A;
            }
            t.bezierCurveTo(I, O, P, F, G, U), u = G, f = U;
            break;
          }
          case vt.Q: {
            var I = n[w++], O = n[w++], P = n[w++], F = n[w++];
            if (v) {
              var A = d[g++];
              if (m + A > y) {
                var L = (y - m) / A;
                Ns(u, I, P, L, tn), Ns(f, O, F, L, en), t.quadraticCurveTo(tn[1], en[1], tn[2], en[2]);
                break t;
              }
              m += A;
            }
            t.quadraticCurveTo(I, O, P, F), u = P, f = F;
            break;
          }
          case vt.A:
            var j = n[w++], K = n[w++], et = n[w++], Z = n[w++], z = n[w++], nt = n[w++], at = n[w++], Wt = !n[w++], Le = et > Z ? et : Z, xt = ar(et - Z) > 1e-3, It = z + nt, rt = !1;
            if (v) {
              var A = d[g++];
              m + A > y && (It = z + nt * (y - m) / A, rt = !0), m += A;
            }
            if (xt && t.ellipse ? t.ellipse(j, K, et, Z, at, z, It, Wt) : t.arc(j, K, Le, z, It, Wt), rt)
              break t;
            E && (s = rn(z) * et + j, l = nn(z) * Z + K), u = rn(It) * et + j, f = nn(It) * Z + K;
            break;
          case vt.R:
            s = u = n[w], l = f = n[w + 1], c = n[w++], h = n[w++];
            var ot = n[w++], Ur = n[w++];
            if (v) {
              var A = d[g++];
              if (m + A > y) {
                var Yt = y - m;
                t.moveTo(c, h), t.lineTo(c + xu(Yt, ot), h), Yt -= ot, Yt > 0 && t.lineTo(c + ot, h + xu(Yt, Ur)), Yt -= Ur, Yt > 0 && t.lineTo(c + Tu(ot - Yt, 0), h + Ur), Yt -= ot, Yt > 0 && t.lineTo(c, h + Tu(Ur - Yt, 0));
                break t;
              }
              m += A;
            }
            t.rect(c, h, ot, Ur);
            break;
          case vt.Z:
            if (v) {
              var A = d[g++];
              if (m + A > y) {
                var L = (y - m) / A;
                t.lineTo(u * (1 - L) + s * L, f * (1 - L) + l * L);
                break t;
              }
              m += A;
            }
            t.closePath(), u = s, f = l;
        }
      }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.prototype.canSave = function() {
    return !!this._saveData;
  }, r.CMD = vt, r.initDefaultProps = (function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  })(), r;
})();
function Un(r, t, e, n, i, a, o) {
  if (i === 0)
    return !1;
  var s = i, l = 0, u = r;
  if (o > t + s && o > n + s || o < t - s && o < n - s || a > r + s && a > e + s || a < r - s && a < e - s)
    return !1;
  if (r !== e)
    l = (t - n) / (r - e), u = (r * n - e * t) / (r - e);
  else
    return Math.abs(a - r) <= s / 2;
  var f = l * a - o + u, c = f * f / (l * l + 1);
  return c <= s / 2 * s / 2;
}
function Xw(r, t, e, n, i, a, o, s, l, u, f) {
  if (l === 0)
    return !1;
  var c = l;
  if (f > t + c && f > n + c && f > a + c && f > s + c || f < t - c && f < n - c && f < a - c && f < s - c || u > r + c && u > e + c && u > i + c && u > o + c || u < r - c && u < e - c && u < i - c && u < o - c)
    return !1;
  var h = yw(r, t, e, n, i, a, o, s, u, f);
  return h <= c / 2;
}
function Zw(r, t, e, n, i, a, o, s, l) {
  if (o === 0)
    return !1;
  var u = o;
  if (l > t + u && l > n + u && l > a + u || l < t - u && l < n - u && l < a - u || s > r + u && s > e + u && s > i + u || s < r - u && s < e - u && s < i - u)
    return !1;
  var f = Sw(r, t, e, n, i, a, s, l);
  return f <= u / 2;
}
var Cd = Math.PI * 2;
function Ao(r) {
  return r %= Cd, r < 0 && (r += Cd), r;
}
var Zi = Math.PI * 2;
function qw(r, t, e, n, i, a, o, s, l) {
  if (o === 0)
    return !1;
  var u = o;
  s -= r, l -= t;
  var f = Math.sqrt(s * s + l * l);
  if (f - u > e || f + u < e)
    return !1;
  if (Math.abs(n - i) % Zi < 1e-4)
    return !0;
  if (a) {
    var c = n;
    n = Ao(i), i = Ao(c);
  } else
    n = Ao(n), i = Ao(i);
  n > i && (i += Zi);
  var h = Math.atan2(l, s);
  return h < 0 && (h += Zi), h >= n && h <= i || h + Zi >= n && h + Zi <= i;
}
function an(r, t, e, n, i, a) {
  if (a > t && a > n || a < t && a < n || n === t)
    return 0;
  var o = (a - t) / (n - t), s = n < t ? 1 : -1;
  (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
  var l = o * (e - r) + r;
  return l === i ? 1 / 0 : l > i ? s : 0;
}
var _r = Pn.CMD, on = Math.PI * 2, Kw = 1e-4;
function Qw(r, t) {
  return Math.abs(r - t) < Kw;
}
var Xt = [-1, -1, -1], _e = [-1, -1];
function jw() {
  var r = _e[0];
  _e[0] = _e[1], _e[1] = r;
}
function Jw(r, t, e, n, i, a, o, s, l, u) {
  if (u > t && u > n && u > a && u > s || u < t && u < n && u < a && u < s)
    return 0;
  var f = Ps(t, n, a, s, u, Xt);
  if (f === 0)
    return 0;
  for (var c = 0, h = -1, v = void 0, d = void 0, p = 0; p < f; p++) {
    var m = Xt[p], g = m === 0 || m === 1 ? 0.5 : 1, y = Ft(r, e, i, o, m);
    y < l || (h < 0 && (h = Ny(t, n, a, s, _e), _e[1] < _e[0] && h > 1 && jw(), v = Ft(t, n, a, s, _e[0]), h > 1 && (d = Ft(t, n, a, s, _e[1]))), h === 2 ? m < _e[0] ? c += v < t ? g : -g : m < _e[1] ? c += d < v ? g : -g : c += s < d ? g : -g : m < _e[0] ? c += v < t ? g : -g : c += s < v ? g : -g);
  }
  return c;
}
function tx(r, t, e, n, i, a, o, s) {
  if (s > t && s > n && s > a || s < t && s < n && s < a)
    return 0;
  var l = bw(t, n, a, s, Xt);
  if (l === 0)
    return 0;
  var u = ky(t, n, a);
  if (u >= 0 && u <= 1) {
    for (var f = 0, c = Jt(t, n, a, u), h = 0; h < l; h++) {
      var v = Xt[h] === 0 || Xt[h] === 1 ? 0.5 : 1, d = Jt(r, e, i, Xt[h]);
      d < o || (Xt[h] < u ? f += c < t ? v : -v : f += a < c ? v : -v);
    }
    return f;
  } else {
    var v = Xt[0] === 0 || Xt[0] === 1 ? 0.5 : 1, d = Jt(r, e, i, Xt[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function ex(r, t, e, n, i, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var l = Math.sqrt(e * e - s * s);
  Xt[0] = -l, Xt[1] = l;
  var u = Math.abs(n - i);
  if (u < 1e-4)
    return 0;
  if (u >= on - 1e-4) {
    n = 0, i = on;
    var f = a ? 1 : -1;
    return o >= Xt[0] + r && o <= Xt[1] + r ? f : 0;
  }
  if (n > i) {
    var c = n;
    n = i, i = c;
  }
  n < 0 && (n += on, i += on);
  for (var h = 0, v = 0; v < 2; v++) {
    var d = Xt[v];
    if (d + r > o) {
      var p = Math.atan2(s, d), f = a ? 1 : -1;
      p < 0 && (p = on + p), (p >= n && p <= i || p + on >= n && p + on <= i) && (p > Math.PI / 2 && p < Math.PI * 1.5 && (f = -f), h += f);
    }
  }
  return h;
}
function Hy(r, t, e, n, i) {
  for (var a = r.data, o = r.len(), s = 0, l = 0, u = 0, f = 0, c = 0, h, v, d = 0; d < o; ) {
    var p = a[d++], m = d === 1;
    switch (p === _r.M && d > 1 && (e || (s += an(l, u, f, c, n, i))), m && (l = a[d], u = a[d + 1], f = l, c = u), p) {
      case _r.M:
        f = a[d++], c = a[d++], l = f, u = c;
        break;
      case _r.L:
        if (e) {
          if (Un(l, u, a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += an(l, u, a[d], a[d + 1], n, i) || 0;
        l = a[d++], u = a[d++];
        break;
      case _r.C:
        if (e) {
          if (Xw(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += Jw(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        l = a[d++], u = a[d++];
        break;
      case _r.Q:
        if (e) {
          if (Zw(l, u, a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += tx(l, u, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        l = a[d++], u = a[d++];
        break;
      case _r.A:
        var g = a[d++], y = a[d++], _ = a[d++], b = a[d++], S = a[d++], w = a[d++];
        d += 1;
        var x = !!(1 - a[d++]);
        h = Math.cos(S) * _ + g, v = Math.sin(S) * b + y, m ? (f = h, c = v) : s += an(l, u, h, v, n, i);
        var E = (n - g) * b / _ + g;
        if (e) {
          if (qw(g, y, b, S, S + w, x, t, E, i))
            return !0;
        } else
          s += ex(g, y, b, S, S + w, x, E, i);
        l = Math.cos(S + w) * _ + g, u = Math.sin(S + w) * b + y;
        break;
      case _r.R:
        f = l = a[d++], c = u = a[d++];
        var T = a[d++], C = a[d++];
        if (h = f + T, v = c + C, e) {
          if (Un(f, c, h, c, t, n, i) || Un(h, c, h, v, t, n, i) || Un(h, v, f, v, t, n, i) || Un(f, v, f, c, t, n, i))
            return !0;
        } else
          s += an(h, c, h, v, n, i), s += an(f, v, f, c, n, i);
        break;
      case _r.Z:
        if (e) {
          if (Un(l, u, f, c, t, n, i))
            return !0;
        } else
          s += an(l, u, f, c, n, i);
        l = f, u = c;
        break;
    }
  }
  return !e && !Qw(u, c) && (s += an(l, u, f, c, n, i) || 0), s !== 0;
}
function rx(r, t, e) {
  return Hy(r, 0, !1, t, e);
}
function nx(r, t, e, n) {
  return Hy(r, t, !0, e, n);
}
var $y = gt({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, Dn), ix = {
  style: gt({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, Il.style)
}, Eu = Al.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), mt = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.update = function() {
    var e = this;
    r.prototype.update.call(this);
    var n = this.style;
    if (n.decal) {
      var i = this._decalEl = this._decalEl || new t();
      i.buildPath === t.prototype.buildPath && (i.buildPath = function(l) {
        e.buildPath(l, e.shape);
      }), i.silent = !0;
      var a = i.style;
      for (var o in n)
        a[o] !== n[o] && (a[o] = n[o]);
      a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Eu.length; ++s)
        i[Eu[s]] = this[Eu[s]];
      i.__dirty |= ie;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var n = St(e);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = e[o];
      o === "style" ? this.style ? k(this.style, s) : this.useStyle(s) : o === "shape" ? k(this.shape, s) : r.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var e = this.style.fill;
    if (e !== "none") {
      if ($(e)) {
        var n = ks(e, 0);
        return n > 0.5 ? jf : n > 0.2 ? Nw : Jf;
      } else if (e)
        return Jf;
    }
    return jf;
  }, t.prototype.getInsideTextStroke = function(e) {
    var n = this.style.fill;
    if ($(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = ks(e, 0) < Qf;
      if (a === o)
        return n;
    }
  }, t.prototype.buildPath = function(e, n, i) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~ai;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Pn(!1);
  }, t.prototype.hasStroke = function() {
    var e = this.style, n = e.stroke;
    return !(n == null || n === "none" || !(e.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var e = this.style, n = e.fill;
    return n != null && n !== "none";
  }, t.prototype.getBoundingRect = function() {
    var e = this._rect, n = this.style, i = !e;
    if (i) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & ai) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || i) {
        s.copy(e);
        var l = n.strokeNoScale ? this.getLineScale() : 1, u = n.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          u = Math.max(u, f ?? 4);
        }
        l > 1e-10 && (s.width += u / l, s.height += u / l, s.x -= u / l / 2, s.y -= u / l / 2);
      }
      return s;
    }
    return e;
  }, t.prototype.contain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect(), o = this.style;
    if (e = i[0], n = i[1], a.contain(e, n)) {
      var s = this.path;
      if (this.hasStroke()) {
        var l = o.lineWidth, u = o.strokeNoScale ? this.getLineScale() : 1;
        if (u > 1e-10 && (this.hasFill() || (l = Math.max(l, this.strokeContainThreshold)), nx(s, l / u, e, n)))
          return !0;
      }
      if (this.hasFill())
        return rx(s, e, n);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= ai, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(e) {
    return this.animate("shape", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(e, n) {
    e === "shape" ? this.setShape(n) : r.prototype.attrKV.call(this, e, n);
  }, t.prototype.setShape = function(e, n) {
    var i = this.shape;
    return i || (i = this.shape = {}), typeof e == "string" ? i[e] = n : k(i, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & ai);
  }, t.prototype.createStyle = function(e) {
    return Tl($y, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var n = this._normalState;
    e.shape && !n.shape && (n.shape = k({}, this.shape));
  }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
    if (r.prototype._applyStateObj.call(this, e, n, i, a, o, s), this.__inHover !== Ml) {
      var l = !(n && a), u;
      if (n && n.shape ? o ? a ? u = n.shape : (u = k({}, i.shape), k(u, n.shape)) : (u = k({}, a ? this.shape : i.shape), k(u, n.shape)) : l && (u = i.shape), u)
        if (o) {
          this.shape = k({}, this.shape);
          for (var f = {}, c = St(u), h = 0; h < c.length; h++) {
            var v = c[h];
            typeof u[v] == "object" ? this.shape[v] = u[v] : f[v] = u[v];
          }
          this._transitionState(e, {
            shape: f
          }, s);
        } else
          this.shape = u, this.dirtyShape();
    }
  }, t.prototype._mergeStates = function(e) {
    for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
      var o = e[a];
      o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
    }
    return i && (n.shape = i), n;
  }, t.prototype.getAnimationStyleProps = function() {
    return ix;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var n = (function(a) {
      V(o, a);
      function o(s) {
        var l = a.call(this, s) || this;
        return e.init && e.init.call(l, s), l;
      }
      return o.prototype.getDefaultStyle = function() {
        return it(e.style);
      }, o.prototype.getDefaultShape = function() {
        return it(e.shape);
      }, o;
    })(t);
    for (var i in e)
      typeof e[i] == "function" && (n.prototype[i] = e[i]);
    return n;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = ie | va | ai;
  })(), t;
})(io), ax = gt({
  strokeFirst: !0,
  font: Br,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, $y), Bs = (function(r) {
  V(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    return Iy(this.style);
  }, t.prototype.hasFill = function() {
    var e = this.style, n = e.fill;
    return n != null && n !== "none";
  }, t.prototype.createStyle = function(e) {
    return Tl(ax, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    return this._rect || (this._rect = gw(this.style)), this._rect;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.dirtyRectTolerance = 10;
  })(), t;
})(io);
Bs.prototype.type = "tspan";
var ox = gt({
  x: 0,
  y: 0
}, Dn), sx = {
  style: gt({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, Il.style)
};
function lx(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var Gr = (function(r) {
  V(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return Tl(ox, e);
  }, t.prototype._getSize = function(e) {
    var n = this.style, i = n[e];
    if (i != null)
      return i;
    var a = lx(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = n[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return sx;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new J(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
})(io);
Gr.prototype.type = "image";
function ux(r, t) {
  var e = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, l, u, f;
  i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = l = u = f = o : o instanceof Array ? o.length === 1 ? s = l = u = f = o[0] : o.length === 2 ? (s = u = o[0], l = f = o[1]) : o.length === 3 ? (s = o[0], l = f = o[1], u = o[2]) : (s = o[0], l = o[1], u = o[2], f = o[3]) : s = l = u = f = 0;
  var c;
  s + l > i && (c = s + l, s *= i / c, l *= i / c), u + f > i && (c = u + f, u *= i / c, f *= i / c), l + u > a && (c = l + u, l *= a / c, u *= a / c), s + f > a && (c = s + f, s *= a / c, f *= a / c), r.moveTo(e + s, n), r.lineTo(e + i - l, n), l !== 0 && r.arc(e + i - l, n + l, l, -Math.PI / 2, 0), r.lineTo(e + i, n + a - u), u !== 0 && r.arc(e + i - u, n + a - u, u, 0, Math.PI / 2), r.lineTo(e + f, n + a), f !== 0 && r.arc(e + f, n + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, n + s), s !== 0 && r.arc(e + s, n + s, s, Math.PI, Math.PI * 1.5), r.closePath();
}
var fi = Math.round;
function Gy(r, t, e) {
  if (t) {
    var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
    r.x1 = n, r.x2 = i, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (fi(n * 2) === fi(i * 2) && (r.x1 = r.x2 = Sn(n, s, !0)), fi(a * 2) === fi(o * 2) && (r.y1 = r.y2 = Sn(a, s, !0))), r;
  }
}
function Uy(r, t, e) {
  if (t) {
    var n = t.x, i = t.y, a = t.width, o = t.height;
    r.x = n, r.y = i, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = Sn(n, s, !0), r.y = Sn(i, s, !0), r.width = Math.max(Sn(n + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(Sn(i + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function Sn(r, t, e) {
  if (!t)
    return r;
  var n = fi(r * 2);
  return (n + fi(t)) % 2 === 0 ? n / 2 : (n + (e ? 1 : -1)) / 2;
}
var fx = /* @__PURE__ */ (function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
})(), cx = {}, Pt = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new fx();
  }, t.prototype.buildPath = function(e, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var l = Uy(cx, n, this.style);
      i = l.x, a = l.y, o = l.width, s = l.height, l.r = n.r, n = l;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? ux(e, n) : e.rect(i, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
})(mt);
Pt.prototype.type = "rect";
var Dd = {
  fill: "#000"
}, Ed = 2, $e = {}, hx = {
  style: gt({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, Il.style)
}, oe = (function(r) {
  V(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = Dd, n.attr(e), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e = 0; e < this._children.length; e++) {
      var n = this._children[e];
      n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var e = this.innerTransformable;
    e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(e) {
    var n = this.innerTransformable;
    return n ? n.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, mx(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = e;
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var e = new J(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], l = s.getBoundingRect(), u = s.getLocalTransform(i);
        u ? (e.copy(l), e.applyTransform(u), a = a || e.clone(), a.union(e)) : (a = a || l.clone(), a.union(l));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || Dd;
  }, t.prototype.setTextContent = function(e) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(e, n) {
    if (!n)
      return e;
    var i = n.rich, a = e.rich || i && {};
    return k(e, n), i && a ? (this._mergeRich(a, i), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, n) {
    for (var i = St(n), a = 0; a < i.length; a++) {
      var o = i[a];
      e[o] = e[o] || {}, k(e[o], n[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return hx;
  }, t.prototype._getOrCreateChild = function(e) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof e)) && (n = new e()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, n = e.font || Br, i = e.padding, a = this._defaultStyle, o = e.x || 0, s = e.y || 0, l = e.align || a.align || "left", u = e.verticalAlign || a.verticalAlign || "top";
    nd($e, a.overflowRect, o, s, l, u), o = $e.baseX, s = $e.baseY;
    var f = Nd(e), c = uw(f, e, $e.outerWidth, $e.outerHeight), h = Au(e), v = !!e.backgroundColor, d = c.outerHeight, p = c.outerWidth, m = c.lines, g = c.lineHeight;
    this.isTruncated = !!c.isTruncated;
    var y = o, _ = Tn(s, c.contentHeight, u);
    if (h || i) {
      var b = Ci(o, p, l), S = Tn(s, d, u);
      h && this._renderBackground(e, e, b, S, p, d);
    }
    _ += g / 2, i && (y = Od(o, l, i), u === "top" ? _ += i[0] : u === "bottom" && (_ -= i[2]));
    for (var w = 0, x = !1, E = !1, T = Pd("fill" in e ? e.fill : (E = !0, a.fill)), C = Id("stroke" in e ? e.stroke : !v && (!a.autoStroke || E) ? (w = Ed, x = !0, a.stroke) : null), A = e.textShadowBlur > 0, L = 0; L < m.length; L++) {
      var M = this._getOrCreateChild(Bs), I = M.createStyle();
      M.useStyle(I), I.text = m[L], I.x = y, I.y = _, I.textAlign = l, I.textBaseline = "middle", I.opacity = e.opacity, I.strokeFirst = !0, A && (I.shadowBlur = e.textShadowBlur || 0, I.shadowColor = e.textShadowColor || "transparent", I.shadowOffsetX = e.textShadowOffsetX || 0, I.shadowOffsetY = e.textShadowOffsetY || 0), I.stroke = C, I.fill = T, C && (I.lineWidth = e.lineWidth || w, I.lineDash = e.lineDash, I.lineDashOffset = e.lineDashOffset || 0), I.font = n, Md(I, e), _ += g, M.setBoundingRect(Gf(I, c.contentWidth, c.calculatedLineHeight, x ? 0 : null));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, n = this._defaultStyle, i = e.align || n.align, a = e.verticalAlign || n.verticalAlign, o = e.x || 0, s = e.y || 0;
    nd($e, n.overflowRect, o, s, i, a), o = $e.baseX, s = $e.baseY;
    var l = Nd(e), u = hw(l, e, $e.outerWidth, $e.outerHeight, i), f = u.width, c = u.outerWidth, h = u.outerHeight, v = e.padding;
    this.isTruncated = !!u.isTruncated;
    var d = Ci(o, c, i), p = Tn(s, h, a), m = d, g = p;
    v && (m += v[3], g += v[0]);
    var y = m + f;
    Au(e) && this._renderBackground(e, e, d, p, c, h);
    for (var _ = !!e.backgroundColor, b = 0; b < u.lines.length; b++) {
      for (var S = u.lines[b], w = S.tokens, x = w.length, E = S.lineHeight, T = S.width, C = 0, A = m, L = y, M = x - 1, I = void 0; C < x && (I = w[C], !I.align || I.align === "left"); )
        this._placeToken(I, e, E, g, A, "left", _), T -= I.width, A += I.width, C++;
      for (; M >= 0 && (I = w[M], I.align === "right"); )
        this._placeToken(I, e, E, g, L, "right", _), T -= I.width, L -= I.width, M--;
      for (A += (f - (A - m) - (y - L) - T) / 2; C <= M; )
        I = w[C], this._placeToken(I, e, E, g, A + I.width / 2, "center", _), A += I.width, C++;
      g += E;
    }
  }, t.prototype._placeToken = function(e, n, i, a, o, s, l) {
    var u = n.rich[e.styleName] || {};
    u.text = e.text;
    var f = e.verticalAlign, c = a + i / 2;
    f === "top" ? c = a + e.height / 2 : f === "bottom" && (c = a + i - e.height / 2);
    var h = !e.isLineHolder && Au(u);
    h && this._renderBackground(u, n, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, c - e.height / 2, e.width, e.height);
    var v = !!u.backgroundColor, d = e.textPadding;
    d && (o = Od(o, s, d), c -= e.height / 2 - d[0] - e.innerHeight / 2);
    var p = this._getOrCreateChild(Bs), m = p.createStyle();
    p.useStyle(m);
    var g = this._defaultStyle, y = !1, _ = 0, b = !1, S = Pd("fill" in u ? u.fill : "fill" in n ? n.fill : (y = !0, g.fill)), w = Id("stroke" in u ? u.stroke : "stroke" in n ? n.stroke : !v && !l && (!g.autoStroke || y) ? (_ = Ed, b = !0, g.stroke) : null), x = u.textShadowBlur > 0 || n.textShadowBlur > 0;
    m.text = e.text, m.x = o, m.y = c, x && (m.shadowBlur = u.textShadowBlur || n.textShadowBlur || 0, m.shadowColor = u.textShadowColor || n.textShadowColor || "transparent", m.shadowOffsetX = u.textShadowOffsetX || n.textShadowOffsetX || 0, m.shadowOffsetY = u.textShadowOffsetY || n.textShadowOffsetY || 0), m.textAlign = s, m.textBaseline = "middle", m.font = e.font || Br, m.opacity = Pr(u.opacity, n.opacity, 1), Md(m, u), w && (m.lineWidth = Pr(u.lineWidth, n.lineWidth, _), m.lineDash = H(u.lineDash, n.lineDash), m.lineDashOffset = n.lineDashOffset || 0, m.stroke = w), S && (m.fill = S), p.setBoundingRect(Gf(m, e.contentWidth, e.contentHeight, b ? 0 : null));
  }, t.prototype._renderBackground = function(e, n, i, a, o, s) {
    var l = e.backgroundColor, u = e.borderWidth, f = e.borderColor, c = l && l.image, h = l && !c, v = e.borderRadius, d = this, p, m;
    if (h || e.lineHeight || u && f) {
      p = this._getOrCreateChild(Pt), p.useStyle(p.createStyle()), p.style.fill = null;
      var g = p.shape;
      g.x = i, g.y = a, g.width = o, g.height = s, g.r = v, p.dirtyShape();
    }
    if (h) {
      var y = p.style;
      y.fill = l || null, y.fillOpacity = H(e.fillOpacity, 1);
    } else if (c) {
      m = this._getOrCreateChild(Gr), m.onload = function() {
        d.dirtyStyle();
      };
      var _ = m.style;
      _.image = l.image, _.x = i, _.y = a, _.width = o, _.height = s;
    }
    if (u && f) {
      var y = p.style;
      y.lineWidth = u, y.stroke = f, y.strokeOpacity = H(e.strokeOpacity, 1), y.lineDash = e.borderDash, y.lineDashOffset = e.borderDashOffset || 0, p.strokeContainThreshold = 0, p.hasFill() && p.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var b = (p || m).style;
    b.shadowBlur = e.shadowBlur || 0, b.shadowColor = e.shadowColor || "transparent", b.shadowOffsetX = e.shadowOffsetX || 0, b.shadowOffsetY = e.shadowOffsetY || 0, b.opacity = Pr(e.opacity, n.opacity, 1);
  }, t.makeFont = function(e) {
    var n = "";
    return gx(e) && (n = [
      e.fontStyle,
      e.fontWeight,
      px(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), n && We(n) || e.textFont || e.font;
  }, t;
})(io), vx = { left: !0, right: 1, center: 1 }, dx = { top: 1, bottom: 1, middle: 1 }, Ad = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function px(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? fh + "px" : r + "px";
}
function Md(r, t) {
  for (var e = 0; e < Ad.length; e++) {
    var n = Ad[e], i = t[n];
    i != null && (r[n] = i);
  }
}
function gx(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function mx(r) {
  return Ld(r), D(r.rich, Ld), r;
}
function Ld(r) {
  if (r) {
    r.font = oe.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || vx[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || dx[e] ? e : "top";
    var n = r.padding;
    n && (r.padding = dh(r.padding));
  }
}
function Id(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Pd(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Od(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function Nd(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function Au(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
var kd = 1e-4, Wy = 20;
function yx(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
var ce = Math.min, pt = Math.max, Vt = Math.abs, hr = Math.round, Ei = Math.floor, ao = Math.ceil, zi = Math.pow, Fa = Math.log, rc = Math.LN10, _x = Math.PI, bx = Math.random;
function Rd(r, t, e, n) {
  var i = t[0], a = t[1], o = e[0], s = e[1], l = a - i, u = s - o;
  if (l === 0)
    return u === 0 ? o : (o + s) / 2;
  if (n)
    if (l > 0) {
      if (r <= i)
        return o;
      if (r >= a)
        return s;
    } else {
      if (r >= i)
        return o;
      if (r <= a)
        return s;
    }
  else {
    if (r === i)
      return o;
    if (r === a)
      return s;
  }
  return (r - i) / l * u + o;
}
var te = Sx;
function Sx(r, t, e) {
  switch (r) {
    case "center":
    case "middle":
      r = "50%";
      break;
    case "left":
    case "top":
      r = "0%";
      break;
    case "right":
    case "bottom":
      r = "100%";
      break;
  }
  return nc(r, t, e);
}
function nc(r, t, e) {
  return $(r) ? xx(r) ? parseFloat(r) / 100 * t + (e || 0) : parseFloat(r) : r == null ? NaN : +r;
}
function xx(r) {
  return !!yx(r).match(/%$/);
}
function st(r, t, e) {
  return process.env.NODE_ENV !== "production" && N(t != null), isNaN(t) ? e ? "" + r : +r : (t = ce(pt(0, t), Wy), r = (+r).toFixed(t), e ? r : +r);
}
function Yy(r) {
  return r.sort(function(t, e) {
    return t - e;
  }), r;
}
function Xe(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (hr(r * t) / t === r)
        return e;
  }
  return Tx(r);
}
function Tx(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), n = e > 0 ? +t.slice(e + 1) : 0, i = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return pt(0, o - n);
}
function Cx(r, t, e) {
  var n = Vt(r[1] - r[0]);
  if (!isFinite(n) || n === 0)
    return NaN;
  var i = Fa(2 * Vt(e || 1) * Vt(n)) / rc, a = Fa(Vt(t)) / rc, o = pt(0, ao(-i + a));
  return isFinite(o) || (o = NaN), o;
}
function Dx(r, t) {
  var e = pt(Xe(r), Xe(t)), n = r + t;
  return e > Wy ? n : st(n, e);
}
var Bd = zi(2, 53) - 1;
function Xy(r) {
  var t = _x * 2;
  return (r % t + t) % t;
}
function Vs(r) {
  return r > -kd && r < kd;
}
var Ex = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Hi(r) {
  if (r instanceof Date)
    return r;
  if ($(r)) {
    var t = Ex.exec(r);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (r == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(hr(r));
}
function Zy(r) {
  return zi(10, Sh(r));
}
function Sh(r) {
  if (r === 0)
    return 0;
  var t = Ei(Fa(r) / rc);
  return r / zi(10, t) >= 10 && t++, t;
}
var qy = 2;
function wh(r, t) {
  var e = Sh(r), n = zi(10, e), i = r / n, a;
  return t === qy ? a = 1 : t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, r = a * n, st(r, -e);
}
function Fs(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !$(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function Ky(r) {
  return !isNaN(Fs(r));
}
function Qy() {
  return hr(bx() * 9);
}
function jy(r, t) {
  return t === 0 ? r : jy(t, r % t);
}
function Vd(r, t) {
  return r == null ? t : t == null ? r : r * t / jy(r, t);
}
function er(r) {
  return r != null && isFinite(r);
}
var Ax = "[ECharts] ", Fd = {}, Mx = typeof console < "u" && console.warn && console.log;
function Pl(r, t, e) {
  if (Mx) {
    if (e) {
      if (Fd[t])
        return;
      Fd[t] = !0;
    }
    console[r](Ax + t);
  }
}
function Jy(r, t) {
  Pl("log", r, t);
}
function ee(r, t) {
  Pl("warn", r, t);
}
function ut(r, t) {
  Pl("error", r, t);
}
function vr(r) {
  process.env.NODE_ENV !== "production" && Pl("warn", "DEPRECATED: " + r, !0);
}
function Bt(r, t, e) {
  process.env.NODE_ENV !== "production" && vr((e ? "[" + e + "]" : "") + (r + " is deprecated; use " + t + " instead."));
}
function zs() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = "";
  if (process.env.NODE_ENV !== "production") {
    var n = function(i) {
      return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : xi(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : W(i) ? "function () { ... }" : AS(i) ? i + "" : null;
    };
    e = Y(r, function(i) {
      if ($(i))
        return i;
      var a = n(i);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(i, function(o, s) {
            var l = n(s);
            return l ?? s;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return e;
}
function re(r) {
  throw new Error(r);
}
function zd(r, t, e) {
  return (t - r) * e + r;
}
var t_ = "series\0", Lx = "\0_ec_\0";
function qt(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function ic(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var n = 0, i = e.length; n < i; n++) {
      var a = e[n];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var Hd = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function oo(r) {
  return X(r) && !B(r) && !(r instanceof Date) ? r.value : r;
}
function Ix(r) {
  return X(r) && !(r instanceof Array);
}
function Px(r, t, e) {
  var n = e === "normalMerge", i = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = Q();
  D(t, function(l, u) {
    if (!X(l)) {
      t[u] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (l.id != null && !Gd(l.id) && $d(l.id), l.name != null && !Gd(l.name) && $d(l.name));
  });
  var s = Ox(r, o, e);
  return (n || i) && Nx(s, r, o, t), n && kx(s, t), n || i ? Rx(s, t, i) : a && Bx(s, t), Vx(s), s;
}
function Ox(r, t, e) {
  var n = [];
  if (e === "replaceAll")
    return n;
  for (var i = 0; i < r.length; i++) {
    var a = r[i];
    a && a.id != null && t.set(a.id, i), n.push({
      existing: e === "replaceMerge" || Ai(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function Nx(r, t, e, n) {
  D(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = Ta(i.id), s = e.get(o);
      if (s != null) {
        var l = r[s];
        N(!l.newOption, 'Duplicated option on id "' + o + '".'), l.newOption = i, l.existing = t[s], n[a] = null;
      }
    }
  });
}
function kx(r, t) {
  D(t, function(e, n) {
    if (!(!e || e.name == null))
      for (var i = 0; i < r.length; i++) {
        var a = r[i].existing;
        if (!r[i].newOption && a && (a.id == null || e.id == null) && !Ai(e) && !Ai(a) && e_("name", a, e)) {
          r[i].newOption = e, t[n] = null;
          return;
        }
      }
  });
}
function Rx(r, t, e) {
  D(t, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = r[a]) && (i.newOption || Ai(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !e_("id", n, i.existing));
      )
        a++;
      i ? (i.newOption = n, i.brandNew = e) : r.push({
        newOption: n,
        brandNew: e,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function Bx(r, t) {
  D(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function Vx(r) {
  var t = Q();
  D(r, function(e) {
    var n = e.existing;
    n && t.set(n.id, e);
  }), D(r, function(e) {
    var n = e.newOption;
    N(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
  }), D(r, function(e, n) {
    var i = e.existing, a = e.newOption, o = e.keyInfo;
    if (X(a)) {
      if (o.name = a.name != null ? Ta(a.name) : i ? i.name : t_ + n, i)
        o.id = Ta(i.id);
      else if (a.id != null)
        o.id = Ta(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, e);
    }
  });
}
function e_(r, t, e) {
  var n = je(t[r], null), i = je(e[r], null);
  return n != null && i != null && n === i;
}
function Ta(r) {
  if (process.env.NODE_ENV !== "production" && r == null)
    throw new Error();
  return je(r, "");
}
function je(r, t) {
  return r == null ? t : $(r) ? r : wt(r) || Ms(r) ? r + "" : t;
}
function $d(r) {
  process.env.NODE_ENV !== "production" && ee("`" + r + "` is invalid id or name. Must be a string or number.");
}
function Gd(r) {
  return Ms(r) || Ky(r);
}
function xh(r) {
  var t = r.name;
  return !!(t && t.indexOf(t_));
}
function Ai(r) {
  return r && r.id != null && Ta(r.id).indexOf(Lx) === 0;
}
function Fx(r, t, e) {
  D(r, function(n) {
    var i = n.newOption;
    X(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = zx(t, i, n.existing, e));
  });
}
function zx(r, t, e, n) {
  var i = t.type ? t.type : e ? e.subType : n.determineSubType(r, t);
  return i;
}
function On(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return B(t.dataIndex) ? Y(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return B(t.name) ? Y(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function dt() {
  var r = "__ec_inner_" + Hx++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var Hx = Qy();
function Mu(r, t, e) {
  var n = Th(t, e), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, l = e ? e.defaultMainType : null;
  return !i && l && a.set(l, {}), a.each(function(u, f) {
    var c = so(r, f, u, {
      useDefault: l === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = c.models, s[f + "Model"] = c.models[0];
  }), s;
}
function Th(r, t) {
  var e;
  if ($(r)) {
    var n = {};
    n[r + "Index"] = 0, e = n;
  } else
    e = r;
  var i = Q(), a = {}, o = !1;
  return D(e, function(s, l) {
    if (l === "dataIndex" || l === "dataIndexInside") {
      a[l] = s;
      return;
    }
    var u = l.match(/^(\w+)(Index|Id|Name)$/) || [], f = u[1], c = (u[2] || "").toLowerCase();
    if (!(!f || !c || t && t.includeMainTypes && lt(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var h = i.get(f) || i.set(f, {});
      h[c] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: i,
    others: a
  };
}
var Te = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function so(r, t, e, n) {
  n = n || Te;
  var i = e.index, a = e.id, o = e.name, s = {
    models: null,
    specified: i != null || a != null || o != null
  };
  if (!s.specified) {
    var l = void 0;
    return s.models = n.useDefault && (l = r.getComponent(t)) ? [l] : [], s;
  }
  if (i === "none" || i === !1) {
    if (n.enableNone)
      return s.models = [], s;
    process.env.NODE_ENV !== "production" && ut('`"none"` or `false` is not a valid value on index option.'), i = -1;
  }
  return i === "all" && (n.enableAll ? i = a = o = null : (process.env.NODE_ENV !== "production" && ut('`"all"` is not a valid value on index option.'), i = -1)), s.models = r.queryComponents({
    mainType: t,
    index: i,
    id: a,
    name: o
  }), s;
}
function $x(r, t, e) {
  process.env.NODE_ENV !== "production" && N(t);
  var n = {};
  n[t + "Id"] = r[t + "Id"], n[t + "Index"] = r[t + "Index"], n[t + "Name"] = r[t + "Name"];
  var i = {
    mainType: t,
    query: n
  };
  return e && (i.subType = e), i;
}
function r_(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function Gx(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function Ux(r) {
  return r === "auto" ? tt.domSupported ? "html" : "richText" : r || "html";
}
function Wx(r, t, e, n, i) {
  var a = t == null || t === "auto";
  if (n == null)
    return n;
  if (wt(n)) {
    var o = zd(e || 0, n, i);
    return st(o, a ? Math.max(Xe(e || 0), Xe(n)) : t);
  } else {
    if ($(n))
      return i < 1 ? e : n;
    for (var s = [], l = e, u = n, f = Math.max(l ? l.length : 0, u.length), c = 0; c < f; ++c) {
      var h = r.getDimensionInfo(c);
      if (h && h.type === "ordinal")
        s[c] = (i < 1 && l ? l : u)[c];
      else {
        var v = l && l[c] ? l[c] : 0, d = u[c], o = zd(v, d, i);
        s[c] = st(o, a ? Math.max(Xe(v), Xe(d)) : t);
      }
    }
    return s;
  }
}
function xe() {
  return [1 / 0, -1 / 0];
}
function ac(r, t) {
  dr(t) && (t < r[0] && (r[0] = t), t > r[1] && (r[1] = t));
}
function n_(r, t) {
  dr(t) && t < r[0] && (r[0] = t);
}
function i_(r, t) {
  dr(t) && t > r[1] && (r[1] = t);
}
function Yx(r, t) {
  Mi(t[0], t[1]) && (t[0] < r[0] && (r[0] = t[0]), t[1] > r[1] && (r[1] = t[1]));
}
function dr(r) {
  return r != null && isFinite(r);
}
function Mi(r, t) {
  return dr(r) && dr(t) && r <= t;
}
function Xx(r) {
  var t = r[1] - r[0];
  return isFinite(t) && t >= 0;
}
function Zx(r) {
  Mi(r[0], r[1]) && r[0] > r[1] && (r[0] = r[1]);
}
function Ch(r, t, e) {
  var n = Q(), i = 0;
  D(r, function(a) {
    var o = t(a);
    process.env.NODE_ENV !== "production" && N($(o));
    var s = n.get(o) || 0;
    e && e(a, s), !s && !e && (r[i++] = a), n.set(o, s + 1);
  }), e || (r.length = i);
}
function qx(r) {
  return process.env.NODE_ENV !== "production" && N(r.value != null), r.value + "";
}
function Kx(r) {
  return process.env.NODE_ENV !== "production" && N(r != null), r + "";
}
function Qx(r, t, e) {
  var n = r.getData().count();
  return {
    progressiveRender: e.progressiveEnabled && t.incrementalPrepareRender && n >= e.threshold,
    large: r.get("large") && n >= r.get("largeThreshold"),
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    modDataCount: r.get("progressiveChunkMode") === "mod" ? r.getData().count() : null
  };
}
function Dh(r) {
  return {
    overallReset: r
  };
}
var ct = dt(), jx = function(r, t, e, n) {
  if (n) {
    var i = ct(n);
    i.dataIndex = e, i.dataType = t, i.seriesIndex = r, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = ct(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart";
    });
  }
}, lo = "undefined", a_ = "series", oc = Q(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), he = "original", Ut = "arrayRows", Re = "objectRows", nr = "keyedColumns", cr = "typedArray", o_ = "unknown", Je = "column", Fn = "row", Jx = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], s_ = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      D(Jx, function(e) {
        this[e] = Tt(t[e], t);
      }, this);
    }
    return r;
  })()
);
function tT(r, t) {
  return t.mainType === a_ ? r.getViewOfSeriesModel(t) : r.getViewOfComponentModel(t);
}
var Ud = 1, Wd = {}, l_ = dt(), Eh = dt(), Ah = 0, Ol = 1, Nl = 2, Me = ["emphasis", "blur", "select"], Yd = ["normal", "emphasis", "blur", "select"], eT = 10, rT = 9, En = "highlight", ds = "downplay", Hs = "select", sc = "unselect", $s = "toggleSelect", Mh = "selectchanged";
function Wn(r) {
  return r != null && r !== "none";
}
function kl(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function u_(r) {
  kl(r, "emphasis", Nl);
}
function f_(r) {
  r.hoverState === Nl && kl(r, "normal", Ah);
}
function Lh(r) {
  kl(r, "blur", Ol);
}
function c_(r) {
  r.hoverState === Ol && kl(r, "normal", Ah);
}
function nT(r) {
  r.selected = !0;
}
function iT(r) {
  r.selected = !1;
}
function Xd(r, t, e) {
  t(r, e);
}
function mr(r, t, e) {
  Xd(r, t, e), r.isGroup && r.traverse(function(n) {
    Xd(n, t, e);
  });
}
function Zd(r, t) {
  switch (t) {
    case "emphasis":
      r.hoverState = Nl;
      break;
    case "normal":
      r.hoverState = Ah;
      break;
    case "blur":
      r.hoverState = Ol;
      break;
    case "select":
      r.selected = !0;
  }
}
function aT(r, t, e, n) {
  for (var i = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], l = i[s];
    a[s] = l ?? (n && n[s]);
  }
  for (var o = 0; o < r.animators.length; o++) {
    var u = r.animators[o];
    u.__fromStateTransition && u.__fromStateTransition.indexOf(e) < 0 && u.targetName === "style" && u.saveTo(a, t);
  }
  return a;
}
function oT(r, t, e, n) {
  var i = e && lt(e, "select") >= 0, a = !1;
  if (r instanceof mt) {
    var o = l_(r), s = i && o.selectFill || o.normalFill, l = i && o.selectStroke || o.normalStroke;
    if (Wn(s) || Wn(l)) {
      n = n || {};
      var u = n.style || {};
      u.fill === "inherit" ? (a = !0, n = k({}, n), u = k({}, u), u.fill = s) : !Wn(u.fill) && Wn(s) ? (a = !0, n = k({}, n), u = k({}, u), u.fill = dd(s)) : !Wn(u.stroke) && Wn(l) && (a || (n = k({}, n), u = k({}, u)), u.stroke = dd(l)), n.style = u;
    }
  }
  if (n && n.z2 == null) {
    a || (n = k({}, n));
    var f = r.z2EmphasisLift;
    n.z2 = r.z2 + (f ?? eT);
  }
  return n;
}
function sT(r, t, e) {
  if (e && e.z2 == null) {
    e = k({}, e);
    var n = r.z2SelectLift;
    e.z2 = r.z2 + (n ?? rT);
  }
  return e;
}
function lT(r, t, e) {
  var n = lt(r.currentStates, t) >= 0, i = r.style.opacity, a = n ? null : aT(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = k({}, e), o = k({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), e.style = o), e;
}
function Lu(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return oT(this, r, t, e);
    if (r === "blur")
      return lT(this, r, e);
    if (r === "select")
      return sT(this, r, e);
  }
  return e;
}
function uT(r) {
  r.stateProxy = Lu;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = Lu), e && (e.stateProxy = Lu);
}
function qd(r, t) {
  !p_(r, t) && !r.__highByOuter && mr(r, u_);
}
function Kd(r, t) {
  !p_(r, t) && !r.__highByOuter && mr(r, f_);
}
function za(r, t) {
  r.__highByOuter |= 1 << (t || 0), mr(r, u_);
}
function Ha(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && mr(r, f_);
}
function h_(r) {
  mr(r, Lh);
}
function Ih(r) {
  mr(r, c_);
}
function v_(r) {
  mr(r, nT);
}
function d_(r) {
  mr(r, iT);
}
function p_(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function g_(r) {
  var t = r.getModel(), e = [], n = [];
  t.eachComponent(function(i, a) {
    var o = Eh(a), s = tT(r, a), l = i === "series";
    !l && n.push(s), o.isBlured && (s.group.traverse(function(u) {
      c_(u);
    }), l && e.push(a)), o.isBlured = !1;
  }), D(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(e, !1, t);
  });
}
function lc(r, t, e, n) {
  var i = n.getModel();
  e = e || "coordinateSystem";
  function a(u, f) {
    for (var c = 0; c < f.length; c++) {
      var h = u.getItemGraphicEl(f[c]);
      h && Ih(h);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = i.getSeriesByIndex(r), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var l = [];
    i.eachSeries(function(u) {
      var f = o === u, c = u.coordinateSystem;
      c && c.master && (c = c.master);
      var h = c && s ? c === s : f;
      if (!// Not blur other series if blurScope series
      (e === "series" && !f || e === "coordinateSystem" && !h || t === "series" && f)) {
        var v = n.getViewOfSeriesModel(u);
        if (v.group.traverse(function(m) {
          m.__highByOuter && f && t === "self" || Lh(m);
        }), ae(t))
          a(u.getData(), t);
        else if (X(t))
          for (var d = St(t), p = 0; p < d.length; p++)
            a(u.getData(d[p]), t[d[p]]);
        l.push(u), Eh(u).isBlured = !0;
      }
    }), i.eachComponent(function(u, f) {
      if (u !== "series") {
        var c = n.getViewOfComponentModel(f);
        c && c.toggleBlurSeries && c.toggleBlurSeries(l, !0, i);
      }
    });
  }
}
function uc(r, t, e) {
  if (!(r == null || t == null)) {
    var n = e.getModel().getComponent(r, t);
    if (n) {
      Eh(n).isBlured = !0;
      var i = e.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        Lh(a);
      });
    }
  }
}
function fT(r, t, e) {
  var n = r.seriesIndex, i = r.getData(t.dataType);
  if (!i) {
    process.env.NODE_ENV !== "production" && ut("Unknown dataType " + t.dataType);
    return;
  }
  var a = On(i, t);
  a = (B(a) ? a[0] : a) || 0;
  var o = i.getItemGraphicEl(a);
  if (!o)
    for (var s = i.count(), l = 0; !o && l < s; )
      o = i.getItemGraphicEl(l++);
  if (o) {
    var u = ct(o);
    lc(n, u.focus, u.blurScope, e);
  } else {
    var f = r.get(["emphasis", "focus"]), c = r.get(["emphasis", "blurScope"]);
    f != null && lc(n, f, c, e);
  }
}
function Ph(r, t, e, n) {
  var i = {
    focusSelf: !1,
    dispatchers: null
  };
  if (r == null || r === "series" || t == null || e == null)
    return i;
  var a = n.getModel().getComponent(r, t);
  if (!a)
    return i;
  var o = n.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return i;
  for (var s = o.findHighDownDispatchers(e), l, u = 0; u < s.length; u++)
    if (process.env.NODE_ENV !== "production" && !Li(s[u]) && ut("param should be highDownDispatcher"), ct(s[u]).focus === "self") {
      l = !0;
      break;
    }
  return {
    focusSelf: l,
    dispatchers: s
  };
}
function cT(r, t, e) {
  process.env.NODE_ENV !== "production" && !Li(r) && ut("param should be highDownDispatcher");
  var n = ct(r), i = Ph(n.componentMainType, n.componentIndex, n.componentHighDownName, e), a = i.dispatchers, o = i.focusSelf;
  a ? (o && uc(n.componentMainType, n.componentIndex, e), D(a, function(s) {
    return qd(s, t);
  })) : (lc(n.seriesIndex, n.focus, n.blurScope, e), n.focus === "self" && uc(n.componentMainType, n.componentIndex, e), qd(r, t));
}
function hT(r, t, e) {
  process.env.NODE_ENV !== "production" && !Li(r) && ut("param should be highDownDispatcher"), g_(e);
  var n = ct(r), i = Ph(n.componentMainType, n.componentIndex, n.componentHighDownName, e).dispatchers;
  i ? D(i, function(a) {
    return Kd(a, t);
  }) : Kd(r, t);
}
function vT(r, t, e) {
  if (cc(t)) {
    var n = t.dataType, i = r.getData(n), a = On(i, t);
    B(a) || (a = [a]), r[t.type === $s ? "toggleSelect" : t.type === Hs ? "select" : "unselect"](a, n);
  }
}
function Qd(r) {
  var t = r.getAllData();
  D(t, function(e) {
    var n = e.data, i = e.type;
    n.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, i) ? v_(a) : d_(a);
    });
  });
}
function dT(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var n = e.getAllData();
    D(n, function(i) {
      i.data;
      var a = i.type, o = e.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: e.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function fc(r, t, e) {
  m_(r, !0), mr(r, uT), gT(r, t, e);
}
function pT(r) {
  m_(r, !1);
}
function Gs(r, t, e, n) {
  n ? pT(r) : fc(r, t, e);
}
function gT(r, t, e) {
  var n = ct(r);
  t != null ? (n.focus = t, n.blurScope = e) : n.focus && (n.focus = null);
}
var jd = ["emphasis", "blur", "select"], mT = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function Jd(r, t, e, n) {
  e = e || "itemStyle";
  for (var i = 0; i < jd.length; i++) {
    var a = jd[i], o = t.getModel([a, e]), s = r.ensureState(a);
    s.style = o[mT[e]]();
  }
}
function m_(r, t) {
  var e = t === !1, n = r;
  r.highDownSilentOnTouch && (n.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !e);
}
function Li(r) {
  return !!(r && r.__highDownDispatcher);
}
function yT(r) {
  var t = Wd[r];
  return t == null && Ud <= 32 && (t = Wd[r] = Ud++), t;
}
function cc(r) {
  var t = r.type;
  return t === Hs || t === sc || t === $s;
}
function tp(r) {
  var t = r.type;
  return t === En || t === ds;
}
function _T(r) {
  var t = l_(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var Yn = Pn.CMD, bT = [[], [], []], ep = Math.sqrt, ST = Math.atan2;
function wT(r, t) {
  if (t) {
    var e = r.data, n = r.len(), i, a, o, s, l, u, f = Yn.M, c = Yn.C, h = Yn.L, v = Yn.R, d = Yn.A, p = Yn.Q;
    for (o = 0, s = 0; o < n; ) {
      switch (i = e[o++], s = o, a = 0, i) {
        case f:
          a = 1;
          break;
        case h:
          a = 1;
          break;
        case c:
          a = 3;
          break;
        case p:
          a = 2;
          break;
        case d:
          var m = t[4], g = t[5], y = ep(t[0] * t[0] + t[1] * t[1]), _ = ep(t[2] * t[2] + t[3] * t[3]), b = ST(-t[1] / _, t[0] / y);
          e[o] *= y, e[o++] += m, e[o] *= _, e[o++] += g, e[o++] *= y, e[o++] *= _, e[o++] += b, e[o++] += b, o += 2, s = o;
          break;
        case v:
          u[0] = e[o++], u[1] = e[o++], Ee(u, u, t), e[s++] = u[0], e[s++] = u[1], u[0] += e[o++], u[1] += e[o++], Ee(u, u, t), e[s++] = u[0], e[s++] = u[1];
      }
      for (l = 0; l < a; l++) {
        var S = bT[l];
        S[0] = e[o++], S[1] = e[o++], Ee(S, S, t), e[s++] = S[0], e[s++] = S[1];
      }
    }
    r.increaseVersion();
  }
}
var Iu = Math.sqrt, Mo = Math.sin, Lo = Math.cos, qi = Math.PI;
function rp(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function hc(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (rp(r) * rp(t));
}
function np(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(hc(r, t));
}
function ip(r, t, e, n, i, a, o, s, l, u, f) {
  var c = l * (qi / 180), h = Lo(c) * (r - e) / 2 + Mo(c) * (t - n) / 2, v = -1 * Mo(c) * (r - e) / 2 + Lo(c) * (t - n) / 2, d = h * h / (o * o) + v * v / (s * s);
  d > 1 && (o *= Iu(d), s *= Iu(d));
  var p = (i === a ? -1 : 1) * Iu((o * o * (s * s) - o * o * (v * v) - s * s * (h * h)) / (o * o * (v * v) + s * s * (h * h))) || 0, m = p * o * v / s, g = p * -s * h / o, y = (r + e) / 2 + Lo(c) * m - Mo(c) * g, _ = (t + n) / 2 + Mo(c) * m + Lo(c) * g, b = np([1, 0], [(h - m) / o, (v - g) / s]), S = [(h - m) / o, (v - g) / s], w = [(-1 * h - m) / o, (-1 * v - g) / s], x = np(S, w);
  if (hc(S, w) <= -1 && (x = qi), hc(S, w) >= 1 && (x = 0), x < 0) {
    var E = Math.round(x / qi * 1e6) / 1e6;
    x = qi * 2 + E % 2 * qi;
  }
  f.addData(u, y, _, o, s, b, x, c, a);
}
var xT = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, TT = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function CT(r) {
  var t = new Pn();
  if (!r)
    return t;
  var e = 0, n = 0, i = e, a = n, o, s = Pn.CMD, l = r.match(xT);
  if (!l)
    return t;
  for (var u = 0; u < l.length; u++) {
    for (var f = l[u], c = f.charAt(0), h = void 0, v = f.match(TT) || [], d = v.length, p = 0; p < d; p++)
      v[p] = parseFloat(v[p]);
    for (var m = 0; m < d; ) {
      var g = void 0, y = void 0, _ = void 0, b = void 0, S = void 0, w = void 0, x = void 0, E = e, T = n, C = void 0, A = void 0;
      switch (c) {
        case "l":
          e += v[m++], n += v[m++], h = s.L, t.addData(h, e, n);
          break;
        case "L":
          e = v[m++], n = v[m++], h = s.L, t.addData(h, e, n);
          break;
        case "m":
          e += v[m++], n += v[m++], h = s.M, t.addData(h, e, n), i = e, a = n, c = "l";
          break;
        case "M":
          e = v[m++], n = v[m++], h = s.M, t.addData(h, e, n), i = e, a = n, c = "L";
          break;
        case "h":
          e += v[m++], h = s.L, t.addData(h, e, n);
          break;
        case "H":
          e = v[m++], h = s.L, t.addData(h, e, n);
          break;
        case "v":
          n += v[m++], h = s.L, t.addData(h, e, n);
          break;
        case "V":
          n = v[m++], h = s.L, t.addData(h, e, n);
          break;
        case "C":
          h = s.C, t.addData(h, v[m++], v[m++], v[m++], v[m++], v[m++], v[m++]), e = v[m - 2], n = v[m - 1];
          break;
        case "c":
          h = s.C, t.addData(h, v[m++] + e, v[m++] + n, v[m++] + e, v[m++] + n, v[m++] + e, v[m++] + n), e += v[m - 2], n += v[m - 1];
          break;
        case "S":
          g = e, y = n, C = t.len(), A = t.data, o === s.C && (g += e - A[C - 4], y += n - A[C - 3]), h = s.C, E = v[m++], T = v[m++], e = v[m++], n = v[m++], t.addData(h, g, y, E, T, e, n);
          break;
        case "s":
          g = e, y = n, C = t.len(), A = t.data, o === s.C && (g += e - A[C - 4], y += n - A[C - 3]), h = s.C, E = e + v[m++], T = n + v[m++], e += v[m++], n += v[m++], t.addData(h, g, y, E, T, e, n);
          break;
        case "Q":
          E = v[m++], T = v[m++], e = v[m++], n = v[m++], h = s.Q, t.addData(h, E, T, e, n);
          break;
        case "q":
          E = v[m++] + e, T = v[m++] + n, e += v[m++], n += v[m++], h = s.Q, t.addData(h, E, T, e, n);
          break;
        case "T":
          g = e, y = n, C = t.len(), A = t.data, o === s.Q && (g += e - A[C - 4], y += n - A[C - 3]), e = v[m++], n = v[m++], h = s.Q, t.addData(h, g, y, e, n);
          break;
        case "t":
          g = e, y = n, C = t.len(), A = t.data, o === s.Q && (g += e - A[C - 4], y += n - A[C - 3]), e += v[m++], n += v[m++], h = s.Q, t.addData(h, g, y, e, n);
          break;
        case "A":
          _ = v[m++], b = v[m++], S = v[m++], w = v[m++], x = v[m++], E = e, T = n, e = v[m++], n = v[m++], h = s.A, ip(E, T, e, n, w, x, _, b, S, h, t);
          break;
        case "a":
          _ = v[m++], b = v[m++], S = v[m++], w = v[m++], x = v[m++], E = e, T = n, e += v[m++], n += v[m++], h = s.A, ip(E, T, e, n, w, x, _, b, S, h, t);
          break;
      }
    }
    (c === "z" || c === "Z") && (h = s.Z, t.addData(h), e = i, n = a), o = h;
  }
  return t.toStatic(), t;
}
var y_ = (function(r) {
  V(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
})(mt);
function __(r) {
  return r.setData != null;
}
function b_(r, t) {
  var e = CT(r), n = k({}, t);
  return n.buildPath = function(i) {
    var a = __(i);
    if (a && i.canSave()) {
      i.appendPath(e);
      var o = i.getContext();
      o && i.rebuildPath(o, 1);
    } else {
      var o = a ? i.getContext() : i;
      o && e.rebuildPath(o, 1);
    }
  }, n.applyTransform = function(i) {
    wT(e, i), this.dirtyShape();
  }, n;
}
function DT(r, t) {
  return new y_(b_(r, t));
}
function ET(r, t) {
  var e = b_(r, t), n = (function(i) {
    V(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
    }
    return a;
  })(y_);
  return n;
}
function AT(r, t) {
  for (var e = [], n = r.length, i = 0; i < n; i++) {
    var a = r[i];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new mt(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (__(s)) {
      s.appendPath(e);
      var l = s.getContext();
      l && s.rebuildPath(l, 1);
    }
  }, o;
}
var Ot = (function(r) {
  V(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n.isGroup = !0, n._children = [], n.attr(e), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(e) {
    return this._children[e];
  }, t.prototype.childOfName = function(e) {
    for (var n = this._children, i = 0; i < n.length; i++)
      if (n[i].name === e)
        return n[i];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(e) {
    if (e && (e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), process.env.NODE_ENV !== "production" && e.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, t.prototype.addBefore = function(e, n) {
    if (e && e !== this && e.parent !== this && n && n.parent === this) {
      var i = this._children, a = i.indexOf(n);
      a >= 0 && (i.splice(a, 0, e), this._doAdd(e));
    }
    return this;
  }, t.prototype.replace = function(e, n) {
    var i = lt(this._children, e);
    return i >= 0 && this.replaceAt(n, i), this;
  }, t.prototype.replaceAt = function(e, n) {
    var i = this._children, a = i[n];
    if (e && e !== this && e.parent !== this && e !== a) {
      i[n] = e, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(e);
    }
    return this;
  }, t.prototype._doAdd = function(e) {
    e.parent && e.parent.remove(e), e.parent = this;
    var n = this.__zr;
    n && n !== e.__zr && e.addSelfToZr(n), n && n.refresh();
  }, t.prototype.remove = function(e) {
    var n = this.__zr, i = this._children, a = lt(i, e);
    return a < 0 ? this : (i.splice(a, 1), e.parent = null, n && e.removeSelfFromZr(n), n && n.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var e = this._children, n = this.__zr, i = 0; i < e.length; i++) {
      var a = e[i];
      n && a.removeSelfFromZr(n), a.parent = null;
    }
    return e.length = 0, this;
  }, t.prototype.eachChild = function(e, n) {
    for (var i = this._children, a = 0; a < i.length; a++) {
      var o = i[a];
      e.call(n, o, a);
    }
    return this;
  }, t.prototype.traverse = function(e, n) {
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i], o = e.call(n, a);
      a.isGroup && !o && a.traverse(e, n);
    }
    return this;
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.removeSelfFromZr(e);
    }
  }, t.prototype.getBoundingRect = function(e) {
    for (var n = new J(0, 0, 0, 0), i = e || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var l = i[s];
      if (!(l.ignore || l.invisible)) {
        var u = l.getBoundingRect(), f = l.getLocalTransform(a);
        f ? (J.applyTransform(n, u, f), o = o || n.clone(), o.union(n)) : (o = o || u.clone(), o.union(u));
      }
    }
    return o || n;
  }, t;
})(Ll);
Ot.prototype.type = "group";
var MT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
})(), Rl = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new MT();
  }, t.prototype.buildPath = function(e, n) {
    e.moveTo(n.cx + n.r, n.cy), e.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, t;
})(mt);
Rl.prototype.type = "circle";
var LT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
})(), Oh = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new LT();
  }, t.prototype.buildPath = function(e, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, l = n.ry, u = s * i, f = l * i;
    e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - u, o - l, a, o - l), e.bezierCurveTo(a + u, o - l, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + u, o + l, a, o + l), e.bezierCurveTo(a - u, o + l, a - s, o + f, a - s, o), e.closePath();
  }, t;
})(mt);
Oh.prototype.type = "ellipse";
var S_ = Math.PI, Pu = S_ * 2, sn = Math.sin, Xn = Math.cos, IT = Math.acos, zt = Math.atan2, ap = Math.abs, Ca = Math.sqrt, da = Math.max, Ge = Math.min, Ie = 1e-4;
function PT(r, t, e, n, i, a, o, s) {
  var l = e - r, u = n - t, f = o - i, c = s - a, h = c * l - f * u;
  if (!(h * h < Ie))
    return h = (f * (t - a) - c * (r - i)) / h, [r + h * l, t + h * u];
}
function Io(r, t, e, n, i, a, o) {
  var s = r - e, l = t - n, u = (o ? a : -a) / Ca(s * s + l * l), f = u * l, c = -u * s, h = r + f, v = t + c, d = e + f, p = n + c, m = (h + d) / 2, g = (v + p) / 2, y = d - h, _ = p - v, b = y * y + _ * _, S = i - a, w = h * p - d * v, x = (_ < 0 ? -1 : 1) * Ca(da(0, S * S * b - w * w)), E = (w * _ - y * x) / b, T = (-w * y - _ * x) / b, C = (w * _ + y * x) / b, A = (-w * y + _ * x) / b, L = E - m, M = T - g, I = C - m, O = A - g;
  return L * L + M * M > I * I + O * O && (E = C, T = A), {
    cx: E,
    cy: T,
    x0: -f,
    y0: -c,
    x1: E * (i / S - 1),
    y1: T * (i / S - 1)
  };
}
function OT(r) {
  var t;
  if (B(r)) {
    var e = r.length;
    if (!e)
      return r;
    e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
  } else
    t = [r, r, r, r];
  return t;
}
function NT(r, t) {
  var e, n = da(t.r, 0), i = da(t.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var l = t.startAngle, u = t.endAngle;
    if (!(isNaN(l) || isNaN(u))) {
      var f = t.cx, c = t.cy, h = !!t.clockwise, v = ap(u - l), d = v > Pu && v % Pu;
      if (d > Ie && (v = d), !(n > Ie))
        r.moveTo(f, c);
      else if (v > Pu - Ie)
        r.moveTo(f + n * Xn(l), c + n * sn(l)), r.arc(f, c, n, l, u, !h), i > Ie && (r.moveTo(f + i * Xn(u), c + i * sn(u)), r.arc(f, c, i, u, l, h));
      else {
        var p = void 0, m = void 0, g = void 0, y = void 0, _ = void 0, b = void 0, S = void 0, w = void 0, x = void 0, E = void 0, T = void 0, C = void 0, A = void 0, L = void 0, M = void 0, I = void 0, O = n * Xn(l), P = n * sn(l), F = i * Xn(u), G = i * sn(u), U = v > Ie;
        if (U) {
          var j = t.cornerRadius;
          j && (e = OT(j), p = e[0], m = e[1], g = e[2], y = e[3]);
          var K = ap(n - i) / 2;
          if (_ = Ge(K, g), b = Ge(K, y), S = Ge(K, p), w = Ge(K, m), T = x = da(_, b), C = E = da(S, w), (x > Ie || E > Ie) && (A = n * Xn(u), L = n * sn(u), M = i * Xn(l), I = i * sn(l), v < S_)) {
            var et = PT(O, P, M, I, A, L, F, G);
            if (et) {
              var Z = O - et[0], z = P - et[1], nt = A - et[0], at = L - et[1], Wt = 1 / sn(IT((Z * nt + z * at) / (Ca(Z * Z + z * z) * Ca(nt * nt + at * at))) / 2), Le = Ca(et[0] * et[0] + et[1] * et[1]);
              T = Ge(x, (n - Le) / (Wt + 1)), C = Ge(E, (i - Le) / (Wt - 1));
            }
          }
        }
        if (!U)
          r.moveTo(f + O, c + P);
        else if (T > Ie) {
          var xt = Ge(g, T), It = Ge(y, T), rt = Io(M, I, O, P, n, xt, h), ot = Io(A, L, F, G, n, It, h);
          r.moveTo(f + rt.cx + rt.x0, c + rt.cy + rt.y0), T < x && xt === It ? r.arc(f + rt.cx, c + rt.cy, T, zt(rt.y0, rt.x0), zt(ot.y0, ot.x0), !h) : (xt > 0 && r.arc(f + rt.cx, c + rt.cy, xt, zt(rt.y0, rt.x0), zt(rt.y1, rt.x1), !h), r.arc(f, c, n, zt(rt.cy + rt.y1, rt.cx + rt.x1), zt(ot.cy + ot.y1, ot.cx + ot.x1), !h), It > 0 && r.arc(f + ot.cx, c + ot.cy, It, zt(ot.y1, ot.x1), zt(ot.y0, ot.x0), !h));
        } else
          r.moveTo(f + O, c + P), r.arc(f, c, n, l, u, !h);
        if (!(i > Ie) || !U)
          r.lineTo(f + F, c + G);
        else if (C > Ie) {
          var xt = Ge(p, C), It = Ge(m, C), rt = Io(F, G, A, L, i, -It, h), ot = Io(O, P, M, I, i, -xt, h);
          r.lineTo(f + rt.cx + rt.x0, c + rt.cy + rt.y0), C < E && xt === It ? r.arc(f + rt.cx, c + rt.cy, C, zt(rt.y0, rt.x0), zt(ot.y0, ot.x0), !h) : (It > 0 && r.arc(f + rt.cx, c + rt.cy, It, zt(rt.y0, rt.x0), zt(rt.y1, rt.x1), !h), r.arc(f, c, i, zt(rt.cy + rt.y1, rt.cx + rt.x1), zt(ot.cy + ot.y1, ot.cx + ot.x1), h), xt > 0 && r.arc(f + ot.cx, c + ot.cy, xt, zt(ot.y1, ot.x1), zt(ot.y0, ot.x0), !h));
        } else
          r.lineTo(f + F, c + G), r.arc(f, c, i, u, l, h);
      }
      r.closePath();
    }
  }
}
var kT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return r;
})(), Bl = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new kT();
  }, t.prototype.buildPath = function(e, n) {
    NT(e, n);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
})(mt);
Bl.prototype.type = "sector";
var RT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
})(), Nh = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new RT();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    e.moveTo(i + n.r, a), e.arc(i, a, n.r, 0, o, !1), e.moveTo(i + n.r0, a), e.arc(i, a, n.r0, 0, o, !0);
  }, t;
})(mt);
Nh.prototype.type = "ring";
function BT(r, t, e, n) {
  var i = [], a = [], o = [], s = [], l, u, f, c;
  if (n) {
    f = [1 / 0, 1 / 0], c = [-1 / 0, -1 / 0];
    for (var h = 0, v = r.length; h < v; h++)
      si(f, f, r[h]), li(c, c, r[h]);
    si(f, f, n[0]), li(c, c, n[1]);
  }
  for (var h = 0, v = r.length; h < v; h++) {
    var d = r[h];
    if (e)
      l = r[h ? h - 1 : v - 1], u = r[(h + 1) % v];
    else if (h === 0 || h === v - 1) {
      i.push(QS(r[h]));
      continue;
    } else
      l = r[h - 1], u = r[h + 1];
    xy(a, u, l), iu(a, a, t);
    var p = zf(d, l), m = zf(d, u), g = p + m;
    g !== 0 && (p /= g, m /= g), iu(o, a, -p), iu(s, a, m);
    var y = Kv([], d, o), _ = Kv([], d, s);
    n && (li(y, y, f), si(y, y, c), li(_, _, f), si(_, _, c)), i.push(y), i.push(_);
  }
  return e && i.push(i.shift()), i;
}
function w_(r, t, e) {
  var n = t.smooth, i = t.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = BT(i, n, e, t.smoothConstraint);
      r.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (e ? o : o - 1); s++) {
        var l = a[s * 2], u = a[s * 2 + 1], f = i[(s + 1) % o];
        r.bezierCurveTo(l[0], l[1], u[0], u[1], f[0], f[1]);
      }
    } else {
      r.moveTo(i[0][0], i[0][1]);
      for (var s = 1, c = i.length; s < c; s++)
        r.lineTo(i[s][0], i[s][1]);
    }
    e && r.closePath();
  }
}
var VT = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), kh = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new VT();
  }, t.prototype.buildPath = function(e, n) {
    w_(e, n, !0);
  }, t;
})(mt);
kh.prototype.type = "polygon";
var FT = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), Rh = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new FT();
  }, t.prototype.buildPath = function(e, n) {
    w_(e, n, !1);
  }, t;
})(mt);
Rh.prototype.type = "polyline";
var zT = {}, HT = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
})(), pr = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new HT();
  }, t.prototype.buildPath = function(e, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var l = Gy(zT, n, this.style);
      i = l.x1, a = l.y1, o = l.x2, s = l.y2;
    } else
      i = n.x1, a = n.y1, o = n.x2, s = n.y2;
    var u = n.percent;
    u !== 0 && (e.moveTo(i, a), u < 1 && (o = i * (1 - u) + o * u, s = a * (1 - u) + s * u), e.lineTo(o, s));
  }, t.prototype.pointAt = function(e) {
    var n = this.shape;
    return [
      n.x1 * (1 - e) + n.x2 * e,
      n.y1 * (1 - e) + n.y2 * e
    ];
  }, t;
})(mt);
pr.prototype.type = "line";
var Qt = [], $T = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
})();
function op(r, t, e) {
  var n = r.cpx2, i = r.cpy2;
  return n != null || i != null ? [
    (e ? ud : Ft)(r.x1, r.cpx1, r.cpx2, r.x2, t),
    (e ? ud : Ft)(r.y1, r.cpy1, r.cpy2, r.y2, t)
  ] : [
    (e ? fd : Jt)(r.x1, r.cpx1, r.x2, t),
    (e ? fd : Jt)(r.y1, r.cpy1, r.y2, t)
  ];
}
var Vl = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new $T();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, l = n.cpx1, u = n.cpy1, f = n.cpx2, c = n.cpy2, h = n.percent;
    h !== 0 && (e.moveTo(i, a), f == null || c == null ? (h < 1 && (Ns(i, l, o, h, Qt), l = Qt[1], o = Qt[2], Ns(a, u, s, h, Qt), u = Qt[1], s = Qt[2]), e.quadraticCurveTo(l, u, o, s)) : (h < 1 && (Os(i, l, f, o, h, Qt), l = Qt[1], f = Qt[2], o = Qt[3], Os(a, u, c, s, h, Qt), u = Qt[1], c = Qt[2], s = Qt[3]), e.bezierCurveTo(l, u, f, c, o, s)));
  }, t.prototype.pointAt = function(e) {
    return op(this.shape, e, !1);
  }, t.prototype.tangentAt = function(e) {
    var n = op(this.shape, e, !0);
    return yh(n, n);
  }, t;
})(mt);
Vl.prototype.type = "bezier-curve";
var GT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
})(), Fl = (function(r) {
  V(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new GT();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, l = n.endAngle, u = n.clockwise, f = Math.cos(s), c = Math.sin(s);
    e.moveTo(f * o + i, c * o + a), e.arc(i, a, o, s, l, !u);
  }, t;
})(mt);
Fl.prototype.type = "arc";
var UT = (function(r) {
  V(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.type = "compound", e;
  }
  return t.prototype._updatePathDirty = function() {
    for (var e = this.shape.paths, n = this.shapeChanged(), i = 0; i < e.length; i++)
      n = n || e[i].shapeChanged();
    n && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var e = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < e.length; i++)
      e[i].path || e[i].createPathProxy(), e[i].path.setScale(n[0], n[1], e[i].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(e, n) {
    for (var i = n.paths || [], a = 0; a < i.length; a++)
      i[a].buildPath(e, i[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var e = this.shape.paths || [], n = 0; n < e.length; n++)
      e[n].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), mt.prototype.getBoundingRect.call(this);
  }, t;
})(mt), x_ = (function() {
  function r(t) {
    this.colorStops = t || [];
  }
  return r.prototype.addColorStop = function(t, e) {
    this.colorStops.push({
      offset: t,
      color: e
    });
  }, r;
})(), T_ = (function(r) {
  V(t, r);
  function t(e, n, i, a, o, s) {
    var l = r.call(this, o) || this;
    return l.x = e ?? 0, l.y = n ?? 0, l.x2 = i ?? 1, l.y2 = a ?? 0, l.type = "linear", l.global = s || !1, l;
  }
  return t;
})(x_), WT = (function(r) {
  V(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this, a) || this;
    return s.x = e ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
})(x_), Ou = Math.min, YT = Math.max, Po = Math.abs, ln = [0, 0], un = [0, 0], kt = Ty(), Oo = kt.minTv, No = kt.maxTv, C_ = (function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new yt();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new yt();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var n = this._corners, i = this._axes, a = t.x, o = t.y, s = a + t.width, l = o + t.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, l), n[3].set(a, l), e)
      for (var u = 0; u < 4; u++)
        n[u].transform(e);
    yt.sub(i[0], n[1], n[0]), yt.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var u = 0; u < 2; u++)
      this._origin[u] = i[u].dot(n[0]);
  }, r.prototype.intersect = function(t, e, n) {
    var i = !0, a = !e;
    return e && yt.set(e, 0, 0), kt.reset(n, !a), !this._intersectCheckOneSide(this, t, a, 1) && (i = !1, a) || !this._intersectCheckOneSide(t, this, a, -1) && (i = !1, a) || !a && !kt.negativeSize && yt.copy(e, i ? kt.useDir ? kt.dirMinTv : Oo : No), i;
  }, r.prototype._intersectCheckOneSide = function(t, e, n, i) {
    for (var a = !0, o = 0; o < 2; o++) {
      var s = t._axes[o];
      if (t._getProjMinMaxOnAxis(o, t._corners, ln), t._getProjMinMaxOnAxis(o, e._corners, un), kt.negativeSize || ln[1] < un[0] || ln[0] > un[1]) {
        if (a = !1, kt.negativeSize || n)
          return a;
        var l = Po(un[0] - ln[1]), u = Po(ln[0] - un[1]);
        Ou(l, u) > No.len() && (l < u ? yt.scale(No, s, -l * i) : yt.scale(No, s, u * i));
      } else if (!n) {
        var l = Po(un[0] - ln[1]), u = Po(ln[0] - un[1]);
        (kt.useDir || Ou(l, u) < Oo.len()) && ((l < u || !kt.bidirectional) && (yt.scale(Oo, s, l * i), kt.useDir && kt.calcDirMTV()), (l >= u || !kt.bidirectional) && (yt.scale(Oo, s, -u * i), kt.useDir && kt.calcDirMTV()));
      }
    }
    return a;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, n) {
    for (var i = this._axes[t], a = this._origin, o = e[0].dot(i) + a[t], s = o, l = o, u = 1; u < e.length; u++) {
      var f = e[u].dot(i) + a[t];
      s = Ou(f, s), l = YT(f, l);
    }
    n[0] = s + kt.touchThreshold, n[1] = l - kt.touchThreshold, kt.negativeSize = n[1] < n[0];
  }, r;
})(), D_ = 0, XT = 1, ZT = 2, qT = 1, ps = 0, KT = [], QT = (function(r) {
  V(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.notClear = !0, e.incremental = XT, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e;
  }
  return t.prototype.traverse = function(e, n) {
    e.call(n, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype._useHoverStyle = function() {
    this.__hoverStyle = null;
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(e, n) {
    n ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
  }, t.prototype.addDisplayables = function(e, n) {
    n = n || !1;
    for (var i = 0; i < e.length; i++)
      this.addDisplayable(e[i], n);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(e) {
    for (var n = this._cursor; n < this._displayables.length; n++)
      e && e(this._displayables[n]);
    for (var n = 0; n < this._temporaryDisplayables.length; n++)
      e && e(this._temporaryDisplayables[n]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];
      n.parent = this, n.update(), n.parent = null;
    }
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];
      n.parent = this, n.update(), n.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var e = new J(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(KT)), e.union(a);
      }
      this._rect = e;
    }
    return this._rect;
  }, t.prototype.contain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
    if (a.contain(i[0], i[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(e, n))
          return !0;
      }
    return !1;
  }, t;
})(io), jT = dt();
function JT(r, t, e, n, i) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), l = r === "update";
  if (s) {
    var u = void 0, f = void 0, c = void 0;
    n ? (u = H(n.duration, 200), f = H(n.easing, "cubicOut"), c = 0) : (u = t.getShallow(l ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(l ? "animationEasingUpdate" : "animationEasing"), c = t.getShallow(l ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (u = a.duration), a.easing != null && (f = a.easing), a.delay != null && (c = a.delay)), W(c) && (c = c(e, i)), W(u) && (u = u(e));
    var h = {
      duration: u || 0,
      delay: c,
      easing: f
    };
    return h;
  } else
    return null;
}
function Bh(r, t, e, n, i, a, o) {
  var s = !1, l;
  W(i) ? (o = a, a = i, i = null) : X(i) && (a = i.cb, o = i.during, s = i.isFrom, l = i.removeOpt, i = i.dataIndex);
  var u = r === "leave";
  u || t.stopAnimation("leave");
  var f = JT(r, n, i, u ? l || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
  if (f && f.duration > 0) {
    var c = f.duration, h = f.delay, v = f.easing, d = {
      duration: c,
      delay: h || 0,
      easing: v,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !u,
      scope: r,
      during: o
    };
    s ? t.animateFrom(e, d) : t.animateTo(e, d);
  } else
    t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function gr(r, t, e, n, i, a) {
  Bh("update", r, t, e, n, i, a);
}
function $i(r, t, e, n, i, a) {
  Bh("enter", r, t, e, n, i, a);
}
function Da(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function Us(r, t, e, n, i, a) {
  Da(r) || Bh("leave", r, t, e, n, i, a);
}
function sp(r, t, e, n) {
  r.removeTextContent(), r.removeTextGuideLine(), Us(r, {
    style: {
      opacity: 0
    }
  }, t, e, n);
}
function tC(r, t, e) {
  function n() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup ? r.traverse(function(i) {
    i.isGroup || sp(i, t, e, n);
  }) : sp(r, t, e, n);
}
function eC(r) {
  jT(r).oldStyle = r.style;
}
var vc = {}, mn = ["x", "y"], $a = ["width", "height"], E_ = 0, A_ = 1, zl = 2;
function rC(r) {
  return mt.extend(r);
}
var nC = ET;
function iC(r, t) {
  return nC(r, t);
}
function Be(r, t) {
  vc[r] = t;
}
function aC(r) {
  if (vc.hasOwnProperty(r))
    return vc[r];
}
function Vh(r, t, e, n) {
  var i = DT(r, t);
  return e && (n === "center" && (e = L_(e, i.getBoundingRect())), I_(i, e)), i;
}
function M_(r, t, e) {
  var n = new Gr({
    style: {
      image: r,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(i) {
      if (e === "center") {
        var a = {
          width: i.width,
          height: i.height
        };
        n.setStyle(L_(t, a));
      }
    }
  });
  return n;
}
function L_(r, t) {
  var e = t.width / t.height, n = r.height * e, i;
  n <= r.width ? i = r.height : (n = r.width, i = n / e);
  var a = r.x + r.width / 2, o = r.y + r.height / 2;
  return {
    x: a - n / 2,
    y: o - i / 2,
    width: n,
    height: i
  };
}
var oC = AT;
function I_(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), n = e.calculateTransform(t);
    r.applyTransform(n);
  }
}
function Ga(r, t) {
  return Gy(r, r, {
    lineWidth: t
  }), r;
}
function sC(r, t) {
  return Uy(r, r, t), r;
}
var lC = Sn;
function uC(r, t) {
  for (var e = to([]); r && r !== t; )
    Sa(e, r.getLocalTransform(), e), r = r.parent;
  return e;
}
function Fh(r, t, e) {
  return t && !ae(t) && (t = ro.getLocalTransform(t)), e && (t = eo([], t)), Ee([], r, t);
}
function fC(r, t, e) {
  var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Vt(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Vt(2 * t[4] / t[2]), a = [r === "left" ? -n : r === "right" ? n : 0, r === "top" ? -i : r === "bottom" ? i : 0];
  return a = Fh(a, t, e), Vt(a[0]) > Vt(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function lp(r) {
  return !r.isGroup;
}
function cC(r) {
  return r.shape != null;
}
function P_(r, t, e) {
  if (!r || !t)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(l) {
      lp(l) && l.anid && (s[l.anid] = l);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return cC(o) && (s.shape = it(o.shape)), s;
  }
  var a = n(r);
  t.traverse(function(o) {
    if (lp(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var l = i(o);
        o.attr(i(s)), gr(o, l, e, ct(o).dataIndex);
      }
    }
  });
}
function hC(r, t) {
  return Y(r, function(e) {
    var n = e[0];
    n = pt(n, t.x), n = ce(n, t.x + t.width);
    var i = e[1];
    return i = pt(i, t.y), i = ce(i, t.y + t.height), [n, i];
  });
}
function vC(r, t) {
  var e = pt(r.x, t.x), n = ce(r.x + r.width, t.x + t.width), i = pt(r.y, t.y), a = ce(r.y + r.height, t.y + t.height);
  if (n >= e && a >= i)
    return {
      x: e,
      y: i,
      width: n - e,
      height: a - i
    };
}
function zh(r, t, e) {
  var n = k({
    rectHover: !0
  }, t), i = n.style = {
    strokeNoScale: !0
  };
  if (e = e || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, r)
    return r.indexOf("image://") === 0 ? (i.image = r.slice(8), gt(i, e), new Gr(n)) : Vh(r.replace("path://", ""), n, e, "center");
}
function dC(r, t, e, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (O_(r, t, e, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function O_(r, t, e, n, i, a, o, s) {
  var l = e - r, u = n - t, f = o - i, c = s - a, h = Nu(f, c, l, u);
  if (pC(h))
    return !1;
  var v = r - i, d = t - a, p = Nu(v, d, l, u) / h;
  if (p < 0 || p > 1)
    return !1;
  var m = Nu(v, d, f, c) / h;
  return !(m < 0 || m > 1);
}
function Nu(r, t, e, n) {
  return r * n - e * t;
}
function pC(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function Ws(r, t, e, n, i) {
  return t == null || (wt(t) ? bt[0] = bt[1] = bt[2] = bt[3] = t : (process.env.NODE_ENV !== "production" && N(t.length === 4), bt[0] = t[0], bt[1] = t[1], bt[2] = t[2], bt[3] = t[3]), n && (bt[0] = pt(0, bt[0]), bt[1] = pt(0, bt[1]), bt[2] = pt(0, bt[2]), bt[3] = pt(0, bt[3])), e && (bt[0] = -bt[0], bt[1] = -bt[1], bt[2] = -bt[2], bt[3] = -bt[3]), up(r, bt, "x", "width", 3, 1, i && i[0] || 0), up(r, bt, "y", "height", 0, 2, i && i[1] || 0)), r;
}
var bt = [0, 0, 0, 0];
function up(r, t, e, n, i, a, o) {
  var s = t[a] + t[i], l = r[n];
  r[n] += s, o = pt(0, ce(o, l)), r[n] < o ? (r[n] = o, r[e] += t[i] >= 0 ? -t[i] : t[a] >= 0 ? l + t[a] : Vt(s) > 1e-8 ? (l - o) * t[i] / s : 0) : r[e] -= t[i];
}
function Hl(r) {
  var t = r.itemTooltipOption, e = r.componentModel, n = r.itemName, i = $(t) ? {
    formatter: t
  } : t, a = e.mainType, o = e.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var l = r.formatterParamsExtra;
  l && D(St(l), function(f) {
    fe(s, f) || (s[f] = l[f], s.$vars.push(f));
  });
  var u = ct(r.el);
  u.componentMainType = a, u.componentIndex = o, u.tooltipConfig = {
    name: n,
    option: gt({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function dc(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function $l(r, t) {
  if (r)
    if (B(r))
      for (var e = 0; e < r.length; e++)
        dc(r[e], t);
    else
      dc(r, t);
}
function Hh(r) {
  return !r || Vt(r[1]) < ko && Vt(r[2]) < ko || Vt(r[0]) < ko && Vt(r[3]) < ko;
}
var ko = 1e-5;
function Ua(r, t) {
  return r ? J.copy(r, t) : t.clone();
}
function $h(r, t) {
  return t ? gh(r || Ze(), t) : void 0;
}
function Gh(r) {
  return {
    z: r.get("z") || 0,
    zlevel: r.get("zlevel") || 0
  };
}
function gC(r) {
  var t = -1 / 0, e = 1 / 0;
  dc(r, function(a) {
    n(a), n(a.getTextContent()), n(a.getTextGuideLine());
  });
  function n(a) {
    if (!(!a || a.isGroup)) {
      var o = a.currentStates;
      if (o.length)
        for (var s = 0; s < o.length; s++)
          i(a.states[o[s]]);
      i(a);
    }
  }
  function i(a) {
    if (a) {
      var o = a.z2;
      o > t && (t = o), o < e && (e = o);
    }
  }
  return e > t && (e = t = 0), {
    min: e,
    max: t
  };
}
function Uh(r, t, e) {
  N_(r, t, e, -1 / 0);
}
function N_(r, t, e, n) {
  if (r.ignoreModelZ)
    return n;
  var i = r.getTextContent(), a = r.getTextGuideLine(), o = r.isGroup;
  if (o)
    for (var s = r.childrenRef(), l = 0; l < s.length; l++)
      n = pt(N_(s[l], t, e, n), n);
  else
    r.z = t, r.zlevel = e, n = pt(r.z2 || 0, n);
  if (i && (i.z = t, i.zlevel = e, isFinite(n) && (i.z2 = n + 2)), a) {
    var u = r.textGuideLineConfig;
    a.z = t, a.zlevel = e, isFinite(n) && (a.z2 = n + (u && u.showAbove ? 1 : -1));
  }
  return n;
}
function mC(r) {
  return r.animation = {
    duration: 0
  }, r;
}
function yC(r, t) {
  return t ? gh(pa.transform, t) : to(pa.transform), pa.decomposeTransform(), Ls(r, pa), r;
}
var pa = new ro();
pa.transform = Ze();
function _C(r) {
  var t = r.getZr().painter;
  return t.getType() === "canvas" ? t : null;
}
Be("circle", Rl);
Be("ellipse", Oh);
Be("sector", Bl);
Be("ring", Nh);
Be("polygon", kh);
Be("polyline", Rh);
Be("rect", Pt);
Be("line", pr);
Be("bezierCurve", Vl);
Be("arc", Fl);
const bC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Fl,
  BezierCurve: Vl,
  BoundingRect: J,
  Circle: Rl,
  CompoundPath: UT,
  Ellipse: Oh,
  Group: Ot,
  HOVER_LAYER_FOR_INCREMENTAL: zl,
  HOVER_LAYER_FROM_THRESHOLD: A_,
  HOVER_LAYER_NO: E_,
  Image: Gr,
  IncrementalDisplayable: QT,
  Line: pr,
  LinearGradient: T_,
  OrientedBoundingRect: C_,
  Path: mt,
  Point: yt,
  Polygon: kh,
  Polyline: Rh,
  RadialGradient: WT,
  Rect: Pt,
  Ring: Nh,
  Sector: Bl,
  Text: oe,
  WH: $a,
  XY: mn,
  applyTransform: Fh,
  calcZ2Range: gC,
  clipPointsByRect: hC,
  clipRectByRect: vC,
  createIcon: zh,
  decomposeTransform: yC,
  ensureCopyRect: Ua,
  ensureCopyTransform: $h,
  expandOrShrinkRect: Ws,
  extendPath: iC,
  extendShape: rC,
  getCurrentCanvasPainter: _C,
  getShapeClass: aC,
  getTransform: uC,
  groupTransition: P_,
  initProps: $i,
  isBoundingRectAxisAligned: Hh,
  isElementRemoved: Da,
  lineLineIntersect: O_,
  linePolygonIntersect: dC,
  makeImage: M_,
  makePath: Vh,
  mergePath: oC,
  payloadDisableAnimation: mC,
  registerShape: Be,
  removeElement: Us,
  removeElementWithFadeOut: tC,
  resizePath: I_,
  retrieveZInfo: Gh,
  setTooltipConfig: Hl,
  subPixelOptimize: lC,
  subPixelOptimizeLine: Ga,
  subPixelOptimizeRect: sC,
  transformDirection: fC,
  traverseElements: $l,
  traverseUpdateZ: Uh,
  updateProps: gr
}, Symbol.toStringTag, { value: "Module" }));
var Gl = {};
function SC(r, t) {
  for (var e = 0; e < Me.length; e++) {
    var n = Me[e], i = t[n], a = r.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function fp(r, t, e) {
  var n = r.labelFetcher, i = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = W(r.defaultText) ? r.defaultText(i, r, e) : r.defaultText);
  for (var l = {
    normal: s
  }, u = 0; u < Me.length; u++) {
    var f = Me[u], c = t[f];
    l[f] = H(n ? n.getFormattedLabel(i, f, null, a, c && c.get("formatter")) : null, s);
  }
  return l;
}
function Ul(r, t, e, n) {
  e = e || Gl;
  for (var i = r instanceof oe, a = !1, o = 0; o < Yd.length; o++) {
    var s = t[Yd[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var l = i ? r : r.getTextContent();
  if (a) {
    i || (l || (l = new oe(), r.setTextContent(l)), r.stateProxy && (l.stateProxy = r.stateProxy));
    var u = fp(e, t), f = t.normal, c = !!f.getShallow("show"), h = Ii(f, n && n.normal, e, !1, !i);
    h.text = u.normal, i || r.setTextConfig(cp(f, e, !1));
    for (var o = 0; o < Me.length; o++) {
      var v = Me[o], s = t[v];
      if (s) {
        var d = l.ensureState(v), p = !!H(s.getShallow("show"), c);
        if (p !== c && (d.ignore = !p), d.style = Ii(s, n && n[v], e, !0, !i), d.style.text = u[v], !i) {
          var m = r.ensureState(v);
          m.textConfig = cp(s, e, !0);
        }
      }
    }
    l.silent = !!f.getShallow("silent"), l.style.x != null && (h.x = l.style.x), l.style.y != null && (h.y = l.style.y), l.ignore = !c, l.useStyle(h), l.dirty(), e.enableTextSetter && (k_(l).setLabelText = function(g) {
      var y = fp(e, t, g);
      SC(l, y);
    });
  } else l && (l.ignore = !0);
  r.dirty();
}
function uo(r, t) {
  t = t || "label";
  for (var e = {
    normal: r.getModel(t)
  }, n = 0; n < Me.length; n++) {
    var i = Me[n];
    e[i] = r.getModel([i, t]);
  }
  return e;
}
function Ii(r, t, e, n, i) {
  var a = {};
  return wC(a, r, e, n, i), t && k(a, t), a;
}
function cp(r, t, e) {
  t = t || {};
  var n = {}, i, a = r.getShallow("rotate"), o = H(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
  return i = r.getShallow("position") || (e ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", t.autoOverflowArea != null && (n.autoOverflowArea = t.autoOverflowArea), t.layoutRect != null && (n.layoutRect = t.layoutRect), n;
}
function wC(r, t, e, n, i) {
  e = e || Gl;
  var a = t.ecModel, o = a && a.option.textStyle, s = xC(t), l;
  if (s) {
    l = {};
    var u = "richInheritPlainLabel", f = H(t.get(u), a ? a.get(u) : void 0);
    for (var c in s)
      if (s.hasOwnProperty(c)) {
        var h = t.getModel(["rich", c]);
        pp(l[c] = {}, h, o, t, f, e, n, i, !1, !0);
      }
  }
  l && (r.rich = l);
  var v = t.get("overflow");
  v && (r.overflow = v);
  var d = t.get("lineOverflow");
  d && (r.lineOverflow = d);
  var p = r, m = t.get("minMargin");
  if (m != null)
    m = wt(m) ? m / 2 : 0, p.margin = [m, m, m, m], p.__marginType = ci.minMargin;
  else {
    var g = t.get("textMargin");
    g != null && (p.margin = dh(g), p.__marginType = ci.textMargin);
  }
  pp(r, t, o, null, null, e, n, i, !0, !1);
}
function xC(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || Gl).rich;
    if (e) {
      t = t || {};
      for (var n = St(e), i = 0; i < n.length; i++) {
        var a = n[i];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var hp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], vp = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], dp = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function pp(r, t, e, n, i, a, o, s, l, u) {
  e = !o && e || Gl;
  var f = a && a.inheritColor, c = t.getShallow("color"), h = t.getShallow("textBorderColor"), v = H(t.getShallow("opacity"), e.opacity);
  (c === "inherit" || c === "auto") && (process.env.NODE_ENV !== "production" && c === "auto" && Bt("color: 'auto'", "color: 'inherit'"), f ? c = f : c = null), (h === "inherit" || h === "auto") && (process.env.NODE_ENV !== "production" && h === "auto" && Bt("color: 'auto'", "color: 'inherit'"), f ? h = f : h = null), s || (c = c || e.color, h = h || e.textBorderColor), c != null && (r.fill = c), h != null && (r.stroke = h);
  var d = H(t.getShallow("textBorderWidth"), e.textBorderWidth);
  d != null && (r.lineWidth = d);
  var p = H(t.getShallow("textBorderType"), e.textBorderType);
  p != null && (r.lineDash = p);
  var m = H(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  m != null && (r.lineDashOffset = m), !o && v == null && !u && (v = a && a.defaultOpacity), v != null && (r.opacity = v), !o && !s && r.fill == null && a.inheritColor && (r.fill = a.inheritColor);
  for (var g = 0; g < hp.length; g++) {
    var y = hp[g], _ = i !== !1 && n ? Pr(t.getShallow(y), n.getShallow(y), e[y]) : H(t.getShallow(y), e[y]);
    _ != null && (r[y] = _);
  }
  for (var g = 0; g < vp.length; g++) {
    var y = vp[g], _ = t.getShallow(y);
    _ != null && (r[y] = _);
  }
  if (r.verticalAlign == null) {
    var b = t.getShallow("baseline");
    b != null && (r.verticalAlign = b);
  }
  if (!l || !a.disableBox) {
    for (var g = 0; g < dp.length; g++) {
      var y = dp[g], _ = t.getShallow(y);
      _ != null && (r[y] = _);
    }
    var S = t.getShallow("borderType");
    S != null && (r.borderDash = S), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && f && (process.env.NODE_ENV !== "production" && r.backgroundColor === "auto" && Bt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = f), (r.borderColor === "auto" || r.borderColor === "inherit") && f && (process.env.NODE_ENV !== "production" && r.borderColor === "auto" && Bt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = f);
  }
}
function TC(r, t) {
  var e = t && t.getModel("textStyle");
  return We([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var k_ = dt(), ci = {
  minMargin: 1,
  textMargin: 2
}, CC = ["textStyle", "color"], ku = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Ru = new oe(), DC = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(CC) : null);
    }, r.prototype.getFont = function() {
      return TC({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < ku.length; n++)
        e[ku[n]] = this.getShallow(ku[n]);
      return Ru.useStyle(e), Ru.update(), Ru.getBoundingRect();
    }, r;
  })()
), R_ = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], EC = Va(R_), AC = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return EC(this, t);
    }, r;
  })()
), B_ = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], MC = Va(B_), LC = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return MC(this, t, e);
    }, r;
  })()
), Dt = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.parentModel = e, this.ecModel = n, this.option = t;
    }
    return r.prototype.init = function(t, e, n) {
    }, r.prototype.mergeOption = function(t, e) {
      ht(this.option, t, !0);
    }, r.prototype.get = function(t, e) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
    }, r.prototype.getShallow = function(t, e) {
      var n = this.option, i = n == null ? n : n[t];
      if (i == null && !e) {
        var a = this.parentModel;
        a && (i = a.getShallow(t));
      }
      return i;
    }, r.prototype.getModel = function(t, e) {
      var n = t != null, i = n ? this.parsePath(t) : null, a = n ? this._doGet(i) : this.option;
      return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new r(a, e, this.ecModel);
    }, r.prototype.isEmpty = function() {
      return this.option == null;
    }, r.prototype.restoreData = function() {
    }, r.prototype.clone = function() {
      var t = this.constructor;
      return new t(it(this.option));
    }, r.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, r.prototype.resolveParentPath = function(t) {
      return t;
    }, r.prototype.isAnimationEnabled = function() {
      if (!tt.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, r.prototype._doGet = function(t, e) {
      var n = this.option;
      if (!t)
        return n;
      for (var i = 0; i < t.length && !(t[i] && (n = n && typeof n == "object" ? n[t[i]] : null, n == null)); i++)
        ;
      return n == null && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel)), n;
    }, r;
  })()
);
ph(Dt);
$S(Dt);
ke(Dt, AC);
ke(Dt, LC);
ke(Dt, XS);
ke(Dt, DC);
function Ki(r) {
  return r == null ? 0 : r.length || 1;
}
function gp(r) {
  return r;
}
var IC = (
  /** @class */
  (function() {
    function r(t, e, n, i, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = n || gp, this._newKeyGetter = i || gp, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return r.prototype.add = function(t) {
      return this._add = t, this;
    }, r.prototype.update = function(t) {
      return this._update = t, this;
    }, r.prototype.updateManyToOne = function(t) {
      return this._updateManyToOne = t, this;
    }, r.prototype.updateOneToMany = function(t) {
      return this._updateOneToMany = t, this;
    }, r.prototype.updateManyToMany = function(t) {
      return this._updateManyToMany = t, this;
    }, r.prototype.remove = function(t) {
      return this._remove = t, this;
    }, r.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, r.prototype._executeOneToOne = function() {
      var t = this._old, e = this._new, n = {}, i = new Array(t.length), a = new Array(e.length);
      this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = i[o], l = n[s], u = Ki(l);
        if (u > 1) {
          var f = l.shift();
          l.length === 1 && (n[s] = l[0]), this._update && this._update(f, o);
        } else u === 1 ? (n[s] = null, this._update && this._update(l, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }, r.prototype._executeMultiple = function() {
      var t = this._old, e = this._new, n = {}, i = {}, a = [], o = [];
      this._initIndexMap(t, n, a, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var l = a[s], u = n[l], f = i[l], c = Ki(u), h = Ki(f);
        if (c > 1 && h === 1)
          this._updateManyToOne && this._updateManyToOne(f, u), i[l] = null;
        else if (c === 1 && h > 1)
          this._updateOneToMany && this._updateOneToMany(f, u), i[l] = null;
        else if (c === 1 && h === 1)
          this._update && this._update(f, u), i[l] = null;
        else if (c > 1 && h > 1)
          this._updateManyToMany && this._updateManyToMany(f, u), i[l] = null;
        else if (c > 1)
          for (var v = 0; v < c; v++)
            this._remove && this._remove(u[v]);
        else
          this._remove && this._remove(u);
      }
      this._performRestAdd(o, i);
    }, r.prototype._performRestAdd = function(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n], a = e[i], o = Ki(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        e[i] = null;
      }
    }, r.prototype._initIndexMap = function(t, e, n, i) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[i](t[o], o);
        if (a || (n[o] = s), !!e) {
          var l = e[s], u = Ki(l);
          u === 0 ? (e[s] = o, a && n.push(s)) : u === 1 ? e[s] = [l, o] : l.push(o);
        }
      }
    }, r;
  })()
), se = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, V_ = dt();
function PC(r) {
  V_(r).datasetMap = Q();
}
function OC(r, t, e) {
  var n = {}, i = F_(t);
  if (!i || !r)
    return n;
  var a = [], o = [], s = t.ecModel, l = V_(s).datasetMap, u = i.uid + "_" + e.seriesLayoutBy, f, c;
  r = r.slice(), D(r, function(p, m) {
    var g = X(p) ? p : r[m] = {
      name: p
    };
    g.type === "ordinal" && f == null && (f = m, c = d(g)), n[g.name] = [];
  });
  var h = l.get(u) || l.set(u, {
    categoryWayDim: c,
    valueWayDim: 0
  });
  D(r, function(p, m) {
    var g = p.name, y = d(p);
    if (f == null) {
      var _ = h.valueWayDim;
      v(n[g], _, y), v(o, _, y), h.valueWayDim += y;
    } else if (f === m)
      v(n[g], 0, y), v(a, 0, y);
    else {
      var _ = h.categoryWayDim;
      v(n[g], _, y), v(o, _, y), h.categoryWayDim += y;
    }
  });
  function v(p, m, g) {
    for (var y = 0; y < g; y++)
      p.push(m + y);
  }
  function d(p) {
    var m = p.dimsDef;
    return m ? m.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function F_(r) {
  var t = r.get("data", !0);
  if (!t)
    return so(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, Te).models[0];
}
function NC(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : so(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, Te).models;
}
function z_(r, t) {
  return kC(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function kC(r, t, e, n, i, a) {
  var o, s = 5;
  if (Kt(r))
    return se.Not;
  var l, u;
  if (n) {
    var f = n[a];
    X(f) ? (l = f.name, u = f.type) : $(f) && (l = f);
  }
  if (u != null)
    return u === "ordinal" ? se.Must : se.Not;
  if (t === Ut) {
    var c = r;
    if (e === Fn) {
      for (var h = c[a], v = 0; v < (h || []).length && v < s; v++)
        if ((o = b(h[i + v])) != null)
          return o;
    } else
      for (var v = 0; v < c.length && v < s; v++) {
        var d = c[i + v];
        if (d && (o = b(d[a])) != null)
          return o;
      }
  } else if (t === Re) {
    var p = r;
    if (!l)
      return se.Not;
    for (var v = 0; v < p.length && v < s; v++) {
      var m = p[v];
      if (m && (o = b(m[l])) != null)
        return o;
    }
  } else if (t === nr) {
    var g = r;
    if (!l)
      return se.Not;
    var h = g[l];
    if (!h || Kt(h))
      return se.Not;
    for (var v = 0; v < h.length && v < s; v++)
      if ((o = b(h[v])) != null)
        return o;
  } else if (t === he)
    for (var y = r, v = 0; v < y.length && v < s; v++) {
      var m = y[v], _ = oo(m);
      if (!B(_))
        return se.Not;
      if ((o = b(_[a])) != null)
        return o;
    }
  function b(S) {
    var w = $(S);
    if (S != null && isFinite(Number(S)) && S !== "")
      return w ? se.Might : se.Not;
    if (w && S !== "-")
      return se.Must;
  }
  return se.Not;
}
var Wl = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === nr ? {} : []), this.sourceFormat = t.sourceFormat || o_, this.seriesLayoutBy = t.seriesLayoutBy || Je, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.type == null && z_(this, n) === se.Must && (i.type = "ordinal");
        }
    }
    return r;
  })()
);
function Wh(r) {
  return r instanceof Wl;
}
function pc(r, t, e) {
  e = e || $_(r);
  var n = t.seriesLayoutBy, i = BC(r, e, n, t.sourceHeader, t.dimensions), a = new Wl({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: it(t)
  });
  return a;
}
function H_(r) {
  return new Wl({
    data: r,
    sourceFormat: Kt(r) ? cr : he
  });
}
function RC(r) {
  return new Wl({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: it(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function $_(r) {
  var t = o_;
  if (Kt(r))
    t = cr;
  else if (B(r)) {
    r.length === 0 && (t = Ut);
    for (var e = 0, n = r.length; e < n; e++) {
      var i = r[e];
      if (i != null) {
        if (B(i) || Kt(i)) {
          t = Ut;
          break;
        } else if (X(i)) {
          t = Re;
          break;
        }
      }
    }
  } else if (X(r)) {
    for (var a in r)
      if (fe(r, a) && ae(r[a])) {
        t = nr;
        break;
      }
  }
  return t;
}
function BC(r, t, e, n, i) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: mp(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === Ut) {
    var s = r;
    n === "auto" || n == null ? yp(function(u) {
      u != null && u !== "-" && ($(u) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = wt(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], yp(function(u, f) {
      i[f] = u != null ? u + "" : "";
    }, e, s, 1 / 0)), a = i ? i.length : e === Fn ? s.length : s[0] ? s[0].length : null;
  } else if (t === Re)
    i || (i = VC(r));
  else if (t === nr)
    i || (i = [], D(r, function(u, f) {
      i.push(f);
    }));
  else if (t === he) {
    var l = oo(r[0]);
    a = B(l) && l.length || 1;
  } else t === cr && process.env.NODE_ENV !== "production" && N(!!i, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: mp(i),
    dimensionsDetectedCount: a
  };
}
function VC(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return St(e);
}
function mp(r) {
  if (r) {
    var t = Q();
    return Y(r, function(e, n) {
      e = X(e) ? e : {
        name: e
      };
      var i = {
        name: e.name,
        displayName: e.displayName,
        type: e.type
      };
      if (i.name == null)
        return i;
      i.name += "", i.displayName == null && (i.displayName = i.name);
      var a = t.get(i.name);
      return a ? i.name += "-" + a.count++ : t.set(i.name, {
        count: 1
      }), i;
    });
  }
}
function yp(r, t, e, n) {
  if (t === Fn)
    for (var i = 0; i < e.length && i < n; i++)
      r(e[i] ? e[i][0] : null, i);
  else
    for (var a = e[0] || [], i = 0; i < a.length && i < n; i++)
      r(a[i], i);
}
function G_(r) {
  var t = r.sourceFormat;
  return t === Re || t === nr;
}
var fn, cn, hn, vn, _p, bp, U_ = (
  /** @class */
  (function() {
    function r(t, e) {
      var n = Wh(t) ? t : H_(t);
      this._source = n;
      var i = this._data = n.data, a = n.sourceFormat, o = n.seriesLayoutBy;
      if (a === cr) {
        if (process.env.NODE_ENV !== "production" && e == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = e, this._data = i;
      }
      if (process.env.NODE_ENV !== "production") {
        var s = FC[Ys(a, o)];
        s && s(i, n.dimensionsDefine);
      }
      bp(this, i, n);
    }
    return r.prototype.getSource = function() {
      return this._source;
    }, r.prototype.count = function() {
      return 0;
    }, r.prototype.getItem = function(t, e) {
    }, r.prototype.appendData = function(t) {
    }, r.prototype.clean = function() {
    }, r.protoInitialize = (function() {
      var t = r.prototype;
      t.pure = !1, t.persistent = !0;
    })(), r.internalField = (function() {
      var t;
      bp = function(o, s, l) {
        var u = l.sourceFormat, f = l.seriesLayoutBy, c = l.startIndex, h = l.dimensionsDefine, v = _p[Ys(u, f)];
        if (process.env.NODE_ENV !== "production" && N(v, "Invalide sourceFormat: " + u), k(o, v), u === cr)
          o.getItem = e, o.count = i, o.fillStorage = n;
        else {
          var d = W_(u, f);
          o.getItem = Tt(d, null, s, c, h);
          var p = Y_(u, f);
          o.count = Tt(p, null, s, c, h);
        }
      };
      var e = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var l = this._data, u = this._dimSize, f = u * o, c = 0; c < u; c++)
          s[c] = l[f + c];
        return s;
      }, n = function(o, s, l, u) {
        for (var f = this._data, c = this._dimSize, h = 0; h < c; h++) {
          for (var v = u[h], d = v[0] == null ? 1 / 0 : v[0], p = v[1] == null ? -1 / 0 : v[1], m = s - o, g = l[h], y = 0; y < m; y++) {
            var _ = f[y * c + h];
            g[o + y] = _, _ < d && (d = _), _ > p && (p = _);
          }
          v[0] = d, v[1] = p;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      _p = (t = {}, t[Ut + "_" + Je] = {
        pure: !0,
        appendData: a
      }, t[Ut + "_" + Fn] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Re] = {
        pure: !0,
        appendData: a
      }, t[nr] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          D(o, function(l, u) {
            for (var f = s[u] || (s[u] = []), c = 0; c < (l || []).length; c++)
              f.push(l[c]);
          });
        }
      }, t[he] = {
        appendData: a
      }, t[cr] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && N(Kt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, t);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    })(), r;
  })()
), Ro = function(r) {
  B(r) || ut("series.data or dataset.source must be an array.");
}, FC = (fn = {}, fn[Ut + "_" + Je] = Ro, fn[Ut + "_" + Fn] = Ro, fn[Re] = Ro, fn[nr] = function(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e].name;
    n == null && ut("dimension name must not be null/undefined.");
  }
}, fn[he] = Ro, fn), Sp = function(r, t, e, n) {
  return r[n];
}, zC = (cn = {}, cn[Ut + "_" + Je] = function(r, t, e, n) {
  return r[n + t];
}, cn[Ut + "_" + Fn] = function(r, t, e, n, i) {
  n += t;
  for (var a = i || [], o = r, s = 0; s < o.length; s++) {
    var l = o[s];
    a[s] = l ? l[n] : null;
  }
  return a;
}, cn[Re] = Sp, cn[nr] = function(r, t, e, n, i) {
  for (var a = i || [], o = 0; o < e.length; o++) {
    var s = e[o].name, l = s != null ? r[s] : null;
    a[o] = l ? l[n] : null;
  }
  return a;
}, cn[he] = Sp, cn);
function W_(r, t) {
  var e = zC[Ys(r, t)];
  return process.env.NODE_ENV !== "production" && N(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
}
var wp = function(r, t, e) {
  return r.length;
}, HC = (hn = {}, hn[Ut + "_" + Je] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, hn[Ut + "_" + Fn] = function(r, t, e) {
  var n = r[0];
  return n ? Math.max(0, n.length - t) : 0;
}, hn[Re] = wp, hn[nr] = function(r, t, e) {
  var n = e[0].name, i = n != null ? r[n] : null;
  return i ? i.length : 0;
}, hn[he] = wp, hn);
function Y_(r, t) {
  var e = HC[Ys(r, t)];
  return process.env.NODE_ENV !== "production" && N(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
}
var Bu = function(r, t, e) {
  return r[t];
}, $C = (vn = {}, vn[Ut] = Bu, vn[Re] = function(r, t, e) {
  return r[e];
}, vn[nr] = Bu, vn[he] = function(r, t, e) {
  var n = oo(r);
  return n instanceof Array ? n[t] : n;
}, vn[cr] = Bu, vn);
function X_(r) {
  var t = $C[r];
  return process.env.NODE_ENV !== "production" && N(t, 'Do not support get value on "' + r + '".'), t;
}
function Ys(r, t) {
  return r === Ut ? r + "_" + t : r;
}
function Pi(r, t, e) {
  if (r) {
    var n = r.getRawDataItem(t);
    if (n != null) {
      var i = r.getStore(), a = i.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = i.getDimensionProperty(o);
        return X_(a)(n, o, s);
      } else {
        var l = n;
        return a === he && (l = oo(n)), l;
      }
    }
  }
}
var GC = (
  /** @class */
  (function() {
    function r(t, e) {
      this._encode = t, this._schema = e;
    }
    return r.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, r.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, r;
  })()
);
function UC(r, t) {
  var e = {}, n = e.encode = {}, i = Q(), a = [], o = [], s = {};
  D(r.dimensions, function(h) {
    var v = r.getDimensionInfo(h), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && N(oc.get(d) == null);
      var p = v.coordDimIndex;
      Vu(n, d)[p] = h, v.isExtraCoord || (i.set(d, 1), YC(v.type) && (a[0] = h), Vu(s, d)[p] = r.getDimensionIndex(v.name)), v.defaultTooltip && o.push(h);
    }
    oc.each(function(m, g) {
      var y = Vu(n, g), _ = v.otherDims[g];
      _ != null && _ !== !1 && (y[_] = v.name);
    });
  });
  var l = [], u = {};
  i.each(function(h, v) {
    var d = n[v];
    u[v] = d[0], l = l.concat(d);
  }), e.dataDimsOnCoord = l, e.dataDimIndicesOnCoord = Y(l, function(h) {
    return r.getDimensionInfo(h).storeDimIndex;
  }), e.encodeFirstDimNotExtra = u;
  var f = n.label;
  f && f.length && (a = f.slice());
  var c = n.tooltip;
  return c && c.length ? o = c.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, e.userOutput = new GC(s, t), e;
}
function Vu(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function WC(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function YC(r) {
  return !(r === "ordinal" || r === "time");
}
var gs = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.otherDims = {}, t != null && k(this, t);
    }
    return r;
  })()
);
function mi(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !wt(r) && r != null && r !== "-" && (r = +Hi(r)), r == null || r === "" ? NaN : Number(r));
}
Q({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +Hi(r);
  },
  trim: function(r) {
    return $(r) ? We(r) : r;
  }
});
var XC = (
  /** @class */
  (function() {
    function r(t, e) {
      var n = t === "desc";
      this._resultLT = n ? 1 : -1, e == null && (e = n ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
    }
    return r.prototype.evaluate = function(t, e) {
      var n = wt(t) ? t : Fs(t), i = wt(e) ? e : Fs(e), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = $(t), l = $(e);
        s && (n = l ? t : 0), l && (i = s ? e : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, r;
  })()
);
function ZC(r) {
  var t = "", e = -1 / 0, n = -1 / 0, i = 1 / 0, a = 1 / 0;
  return r && (r.g != null && (t += "G" + r.g, e = r.g), r.ge != null && (t += "GE" + r.ge, n = r.ge), r.l != null && (t += "L" + r.l, i = r.l), r.le != null && (t += "LE" + r.le, a = r.le)), {
    key: t,
    g: e,
    ge: n,
    l: i,
    le: a
  };
}
function qC(r, t) {
  return t > r.g && t >= r.ge && t < r.l && t <= r.le;
}
var KC = typeof Uint32Array === lo ? Array : Uint32Array, QC = typeof Uint16Array === lo ? Array : Uint16Array, Z_ = typeof Int32Array === lo ? Array : Int32Array, xp = typeof Float64Array === lo ? Array : Float64Array, q_ = {
  float: xp,
  int: Z_,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: xp
}, Fu;
function Zn(r) {
  return r > 65535 ? KC : QC;
}
function jC(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function Tp(r, t, e, n, i) {
  var a = q_[e || "float"];
  if (i) {
    var o = r[t], s = o && o.length;
    if (s !== n) {
      for (var l = new a(n), u = 0; u < s; u++)
        l[u] = o[u];
      r[t] = l;
    }
  } else
    r[t] = new a(n);
}
var gc = (
  /** @class */
  (function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = Q();
    }
    return r.prototype.initData = function(t, e, n) {
      process.env.NODE_ENV !== "production" && N(W(t.getItem) && W(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = t.getSource(), a = this.defaultDimValueGetter = Fu[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [];
      var o = G_(i);
      this._dimensions = Y(e, function(s) {
        return process.env.NODE_ENV !== "production" && o && N(s.property != null), {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: s.type,
          property: s.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, r.prototype.getProvider = function() {
      return this._provider;
    }, r.prototype.getSource = function() {
      return this._provider.getSource();
    }, r.prototype.ensureCalculationDimension = function(t, e) {
      var n = this._calcDimNameToIdx, i = this._dimensions, a = n.get(t);
      if (a != null) {
        if (i[a].type === e)
          return a;
      } else
        a = i.length;
      return i[a] = {
        type: e
      }, n.set(t, a), this._chunks[a] = new q_[e || "float"](this._rawCount), this._rawExtent[a] = xe(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[t] = xe());
      for (var l = a[t], u = o; u < s; u++) {
        var f = n[u] = e.parseAndCollect(n[u]);
        isNaN(f) || (l[0] = Math.min(f, l[0]), l[1] = Math.max(f, l[1]));
      }
      i.ordinalMeta = e, i.ordinalOffset = s, i.type = "ordinal";
    }, r.prototype.getOrdinalMeta = function(t) {
      var e = this._dimensions[t], n = e.ordinalMeta;
      return n;
    }, r.prototype.getDimensionProperty = function(t) {
      var e = this._dimensions[t];
      return e && e.property;
    }, r.prototype.appendData = function(t) {
      process.env.NODE_ENV !== "production" && N(!this._indices, "appendData can only be called on raw data.");
      var e = this._provider, n = this.count();
      e.appendData(t);
      var i = e.count();
      return e.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, r.prototype.appendValues = function(t, e) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e || 0), u = 0; u < a; u++) {
        var f = i[u];
        Tp(n, u, f.type, l, !0);
      }
      for (var c = [], h = s; h < l; h++)
        for (var v = h - s, d = 0; d < a; d++) {
          var f = i[d], p = Fu.arrayRows.call(this, t[v] || c, f.property, v, d);
          n[d][h] = p;
          var m = o[d];
          p < m[0] && (m[0] = p), p > m[1] && (m[1] = p);
        }
      return this._rawCount = this._count = l, {
        start: s,
        end: l
      };
    }, r.prototype._initDataFromProvider = function(t, e, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, l = this._rawExtent, u = Y(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var c = o[f];
        l[f] || (l[f] = xe()), Tp(a, f, c.type, e, n);
      }
      if (i.fillStorage)
        i.fillStorage(t, e, a, l);
      else
        for (var h = [], v = t; v < e; v++) {
          h = i.getItem(v, h);
          for (var d = 0; d < s; d++) {
            var p = a[d], m = this._dimValueGetter(h, u[d], v, d);
            p[v] = m;
            var g = l[d];
            m < g[0] && (g[0] = m), m > g[1] && (g[1] = m);
          }
        }
      !i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = [];
    }, r.prototype.count = function() {
      return this._count;
    }, r.prototype.get = function(t, e) {
      if (!(e >= 0 && e < this._count))
        return NaN;
      var n = this._chunks[t];
      return n ? n[this.getRawIndex(e)] : NaN;
    }, r.prototype.getValues = function(t, e) {
      var n = [], i = [];
      if (e == null) {
        e = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          i.push(a);
      } else
        i = t;
      for (var a = 0, o = i.length; a < o; a++)
        n.push(this.get(i[a], e));
      return n;
    }, r.prototype.getByRawIndex = function(t, e) {
      if (!(e >= 0 && e < this._rawCount))
        return NaN;
      var n = this._chunks[t];
      return n ? n[e] : NaN;
    }, r.prototype.getSum = function(t) {
      var e = this._chunks[t], n = 0;
      if (e)
        for (var i = 0, a = this.count(); i < a; i++) {
          var o = this.get(t, i);
          isNaN(o) || (n += o);
        }
      return n;
    }, r.prototype.getMedian = function(t) {
      var e = [];
      this.each([t], function(i) {
        isNaN(i) || e.push(i);
      }), Yy(e);
      var n = this.count();
      return n === 0 ? 0 : n % 2 === 1 ? e[(n - 1) / 2] : (e[n / 2] + e[n / 2 - 1]) / 2;
    }, r.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var e = this._indices, n = e[t];
      if (n != null && n < this._count && n === t)
        return t;
      for (var i = 0, a = this._count - 1; i <= a; ) {
        var o = (i + a) / 2 | 0;
        if (e[o] < t)
          i = o + 1;
        else if (e[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, r.prototype.getIndices = function() {
      var t, e = this._indices;
      if (e) {
        var n = e.constructor, i = this._count;
        if (n === Array) {
          t = new n(i);
          for (var a = 0; a < i; a++)
            t[a] = e[a];
        } else
          t = new n(e.buffer, 0, i);
      } else {
        var n = Zn(this._rawCount);
        t = new n(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = Zn(n._rawCount), o = new a(i), s = [], l = t.length, u = 0, f = t[0], c = n._chunks, h = 0; h < i; h++) {
        var v = void 0, d = n.getRawIndex(h);
        if (l === 0)
          v = e(h);
        else if (l === 1) {
          var p = c[f][d];
          v = e(p, h);
        } else {
          for (var m = 0; m < l; m++)
            s[m] = c[t[m]][d];
          s[m] = h, v = e.apply(null, s);
        }
        v && (o[u++] = d);
      }
      return u < i && (n._indices = o), n._count = u, n._extent = [], n._updateGetRawIdx(), n;
    }, r.prototype.selectRange = function(t) {
      var e = this.clone(), n = e._count;
      if (!n)
        return this;
      var i = St(t), a = i.length;
      if (!a)
        return this;
      var o = e.count(), s = Zn(e._rawCount), l = new s(o), u = 0, f = i[0], c = t[f][0], h = t[f][1], v = e._chunks, d = !1;
      if (!e._indices) {
        var p = 0;
        if (a === 1) {
          for (var m = v[i[0]], g = 0; g < n; g++) {
            var y = m[g];
            (y >= c && y <= h || isNaN(y)) && (l[u++] = p), p++;
          }
          d = !0;
        } else if (a === 2) {
          for (var m = v[i[0]], _ = v[i[1]], b = t[i[1]][0], S = t[i[1]][1], g = 0; g < n; g++) {
            var y = m[g], w = _[g];
            (y >= c && y <= h || isNaN(y)) && (w >= b && w <= S || isNaN(w)) && (l[u++] = p), p++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var x = e.getRawIndex(g), y = v[i[0]][x];
            (y >= c && y <= h || isNaN(y)) && (l[u++] = x);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var E = !0, x = e.getRawIndex(g), T = 0; T < a; T++) {
              var C = i[T], y = v[C][x];
              (y < t[C][0] || y > t[C][1]) && (E = !1);
            }
            E && (l[u++] = e.getRawIndex(g));
          }
      return u < o && (e._indices = l), e._count = u, e._extent = [], e._updateGetRawIdx(), e;
    }, r.prototype.map = function(t, e) {
      var n = this.clone(t);
      return this._updateDims(n, t, e), n;
    }, r.prototype.modify = function(t, e) {
      this._updateDims(this, t, e);
    }, r.prototype._updateDims = function(t, e, n) {
      for (var i = t._chunks, a = [], o = e.length, s = t.count(), l = [], u = t._rawExtent, f = 0; f < e.length; f++)
        u[e[f]] = xe();
      for (var c = 0; c < s; c++) {
        for (var h = t.getRawIndex(c), v = 0; v < o; v++)
          l[v] = i[e[v]][h];
        l[o] = c;
        var d = n && n.apply(null, l);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var p = e[f], m = d[f], g = u[p], y = i[p];
            y && (y[h] = m), m < g[0] && (g[0] = m), m > g[1] && (g[1] = m);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, l = Math.floor(1 / e), u = this.getRawIndex(0), f, c, h, v = new (Zn(this._rawCount))(Math.min((Math.ceil(o / l) + 2) * 2, o));
      v[s++] = u;
      for (var d = 1; d < o - 1; d += l) {
        for (var p = Math.min(d + l, o - 1), m = Math.min(d + l * 2, o), g = (m + p) / 2, y = 0, _ = p; _ < m; _++) {
          var b = this.getRawIndex(_), S = a[b];
          isNaN(S) || (y += S);
        }
        y /= m - p;
        var w = d, x = Math.min(d + l, o), E = d - 1, T = a[u];
        f = -1, h = w;
        for (var C = -1, A = 0, _ = w; _ < x; _++) {
          var b = this.getRawIndex(_), S = a[b];
          if (isNaN(S)) {
            A++, C < 0 && (C = b);
            continue;
          }
          c = Math.abs((E - g) * (S - T) - (E - _) * (y - T)), c > f && (f = c, h = b);
        }
        A > 0 && A < x - w && (v[s++] = Math.min(C, h), h = Math.max(C, h)), v[s++] = h, u = h;
      }
      return v[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = v, n.getRawIndex = this._getRawIdx, n;
    }, r.prototype.minmaxDownSample = function(t, e) {
      for (var n = this.clone([t], !0), i = n._chunks, a = Math.floor(1 / e), o = i[t], s = this.count(), l = new (Zn(this._rawCount))(Math.ceil(s / a) * 2), u = 0, f = 0; f < s; f += a) {
        var c = f, h = o[this.getRawIndex(c)], v = f, d = o[this.getRawIndex(v)], p = a;
        f + a > s && (p = s - f);
        for (var m = 0; m < p; m++) {
          var g = this.getRawIndex(f + m), y = o[g];
          y < h && (h = y, c = f + m), y > d && (d = y, v = f + m);
        }
        var _ = this.getRawIndex(c), b = this.getRawIndex(v);
        c < v ? (l[u++] = _, l[u++] = b) : (l[u++] = b, l[u++] = _);
      }
      return n._count = u, n._indices = l, n._updateGetRawIdx(), n;
    }, r.prototype.downSample = function(t, e, n, i) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], l = Math.floor(1 / e), u = o[t], f = this.count(), c = a._rawExtent[t] = xe(), h = new (Zn(this._rawCount))(Math.ceil(f / l)), v = 0, d = 0; d < f; d += l) {
        l > f - d && (l = f - d, s.length = l);
        for (var p = 0; p < l; p++) {
          var m = this.getRawIndex(d + p);
          s[p] = u[m];
        }
        var g = n(s), y = this.getRawIndex(Math.min(d + i(s, g) || 0, f - 1));
        u[y] = g, g < c[0] && (c[0] = g), g > c[1] && (c[1] = g), h[v++] = y;
      }
      return a._count = v, a._indices = h, a._updateGetRawIdx(), a;
    }, r.prototype.each = function(t, e) {
      if (this._count)
        for (var n = t.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (n) {
            case 0:
              e(a);
              break;
            case 1:
              e(i[t[0]][s], a);
              break;
            case 2:
              e(i[t[0]][s], i[t[1]][s], a);
              break;
            default:
              for (var l = 0, u = []; l < n; l++)
                u[l] = i[t[l]][s];
              u[l] = a, e.apply(null, u);
          }
        }
    }, r.prototype.getDataExtent = function(t, e) {
      var n = this._chunks[t], i = xe();
      if (!n)
        return i;
      var a = this.count(), o = !this._indices && !e;
      if (o)
        return this._rawExtent[t].slice();
      var s = this._extent, l = s[t] || (s[t] = {}), u = ZC(e), f = u.key, c = l[f];
      if (c)
        return c.slice();
      for (var h = i[0], v = i[1], d = 0; d < a; d++) {
        var p = this.getRawIndex(d), m = n[p];
        (!e || qC(u, m)) && (m < h && (h = m), m > v && (v = m));
      }
      return l[f] = [h, v];
    }, r.prototype.getRawDataItem = function(t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(e);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][e]);
      return n;
    }, r.prototype.clone = function(t, e) {
      var n = new r(), i = this._chunks, a = t && Vi(t, function(s, l) {
        return s[l] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? jC(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), e || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = it(this._extent), t._rawExtent = it(this._rawExtent);
    }, r.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, e = void 0;
        if (t === Array) {
          var n = this._indices.length;
          e = new t(n);
          for (var i = 0; i < n; i++)
            e[i] = this._indices[i];
        } else
          e = new t(this._indices);
        return e;
      }
      return null;
    }, r.prototype._getRawIdxIdentity = function(t) {
      return t;
    }, r.prototype._getRawIdx = function(t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }, r.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, r.internalField = (function() {
      function t(e, n, i, a) {
        return mi(e[a], this._dimensions[a]);
      }
      Fu = {
        arrayRows: t,
        objectRows: function(e, n, i, a) {
          return mi(e[n], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, n, i, a) {
          var o = e && (e.value == null ? e : e.value);
          return mi(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, n, i, a) {
          return e[a];
        }
      };
    })(), r;
  })()
), JC = dt(), tD = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, K_ = (
  /** @class */
  (function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = j_(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return H(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = G_(this.source), n = !J_(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
        var l = void 0, u = void 0, f = void 0, c = this.dimensions[s];
        if (c && c.storeDimIndex === o)
          l = e ? c.name : null, u = c.type, f = c.ordinalMeta, s++;
        else {
          var h = this.getSourceDimension(o);
          h && (l = e ? h.name : null, u = h.type);
        }
        a.push({
          property: l,
          type: u,
          ordinalMeta: f
        }), e && l != null && (!c || !c.isCalculationCoord) && (i += n ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), i += "$", i += tD[u] || "f", f && (i += f.uid), i += "$";
      }
      var v = this.source, d = [v.seriesLayoutBy, v.startIndex, i].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, r.prototype.makeOutputDimensionNames = function() {
      for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
        var i = void 0, a = this.dimensions[n];
        if (a && a.storeDimIndex === e)
          a.isCalculationCoord || (i = a.name), n++;
        else {
          var o = this.getSourceDimension(e);
          o && (i = o.name);
        }
        t.push(i);
      }
      return t;
    }, r.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, r;
  })()
);
function Q_(r) {
  return r instanceof K_;
}
function Yh(r) {
  for (var t = Q(), e = 0; e < (r || []).length; e++) {
    var n = r[e], i = X(n) ? n.name : n;
    i != null && t.get(i) == null && t.set(i, e);
  }
  return t;
}
function j_(r) {
  var t = JC(r);
  return t.dimNameMap || (t.dimNameMap = Yh(r.dimensionsDefine));
}
function J_(r) {
  return r > 30;
}
var Qi = X, br = Y, eD = typeof Int32Array > "u" ? Array : Int32Array, rD = "e\0\0", Cp = -1, nD = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], iD = ["_approximateExtent"], Dp, Bo, ji, qn, zu, Ji, Hu, Ea = (
  /** @class */
  (function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      Q_(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, l = !1, u = {}, f = 0; f < n.length; f++) {
        var c = n[f], h = $(c) ? new gs({
          name: c
        }) : c instanceof gs ? c : new gs(c), v = h.name;
        h.type = h.type || "float", h.coordDim || (h.coordDim = v, h.coordDimIndex = 0);
        var d = h.otherDims = h.otherDims || {};
        o.push(v), a[v] = h, u[v] != null && (l = !0), h.createInvertedIndices && (s[v] = []), process.env.NODE_ENV !== "production" && N(i || h.storeDimIndex >= 0), i && (h.storeDimIndex = f), d.itemName === 0 && (this._nameDimIdx = h.storeDimIndex), d.itemId === 0 && (this._idDimIdx = h.storeDimIndex);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(l), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var p = this._dimIdxToName = Q();
        D(o, function(m) {
          p.set(a[m].storeDimIndex, m);
        });
      }
    }
    return r.prototype.getDimension = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e == null)
        return t;
      if (e = t, !this._dimOmitted)
        return this.dimensions[e];
      var n = this._dimIdxToName.get(e);
      if (n != null)
        return n;
      var i = this._schema.getSourceDimension(e);
      if (i)
        return i.name;
    }, r.prototype.getDimensionIndex = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e != null)
        return e;
      if (t == null)
        return -1;
      var n = this._getDimInfo(t);
      return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, r.prototype._recognizeDimIndex = function(t) {
      if (wt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, r.prototype._getStoreDimIndex = function(t) {
      var e = this.getDimensionIndex(t);
      if (process.env.NODE_ENV !== "production" && e == null)
        throw new Error("Unknown dimension " + t);
      return e;
    }, r.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, r.prototype._initGetDimensionInfo = function(t) {
      var e = this._dimInfos;
      this._getDimInfo = t ? function(n) {
        return e.hasOwnProperty(n) ? e[n] : void 0;
      } : function(n) {
        return e[n];
      };
    }, r.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, r.prototype.mapDimension = function(t, e) {
      var n = this._dimSummary;
      if (e == null)
        return n.encodeFirstDimNotExtra[t];
      var i = n.encode[t];
      return i ? i[e] : null;
    }, r.prototype.mapDimensionsAll = function(t) {
      var e = this._dimSummary, n = e.encode[t];
      return (n || []).slice();
    }, r.prototype.getStore = function() {
      return this._store;
    }, r.prototype.initData = function(t, e, n) {
      var i = this, a;
      if (t instanceof gc && (a = t), !a) {
        var o = this.dimensions, s = Wh(t) || ae(t) ? new U_(t, o.length) : t;
        a = new gc();
        var l = br(o, function(u) {
          return {
            type: i._dimInfos[u].type,
            property: u
          };
        });
        a.initData(s, l, n);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = UC(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var n = this._store.appendValues(t, e && e.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = i; s < a; s++) {
          var l = s - i;
          this._nameList[s] = e[l], o && Hu(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
        var i = this._dimInfos[e[n]];
        i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== cr && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, l = s === he;
        if (l && !i.pure)
          for (var u = [], f = t; f < e; f++) {
            var c = i.getItem(f, u);
            if (!this.hasItemOption && Ix(c) && (this.hasItemOption = !0), c) {
              var h = c.name;
              a[f] == null && h != null && (a[f] = je(h, null));
              var v = c.id;
              o[f] == null && v != null && (o[f] = je(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            Hu(this, f);
        Dp(this);
      }
    }, r.prototype.getApproximateExtent = function(t, e) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t), e);
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      Qi(t) ? k(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), n = this._nameList[e];
      return n == null && this._nameDimIdx != null && (n = ji(this, this._nameDimIdx, e)), n == null && (n = ""), n;
    }, r.prototype._getCategory = function(t, e) {
      var n = this._store.get(t, e), i = this._store.getOrdinalMeta(t);
      return i ? i.categories[n] : n;
    }, r.prototype.getId = function(t) {
      return Bo(this, this.getRawIndex(t));
    }, r.prototype.count = function() {
      return this._store.count();
    }, r.prototype.get = function(t, e) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.get(i.storeDimIndex, e);
    }, r.prototype.getByRawIndex = function(t, e) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.getByRawIndex(i.storeDimIndex, e);
    }, r.prototype.getIndices = function() {
      return this._store.getIndices();
    }, r.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t), null);
    }, r.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, r.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, r.prototype.getValues = function(t, e) {
      var n = this, i = this._store;
      return B(t) ? i.getValues(br(t, function(a) {
        return n._getStoreDimIndex(a);
      }), e) : i.getValues(t);
    }, r.prototype.hasValue = function(t) {
      for (var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length; n < i; n++)
        if (isNaN(this._store.get(e[n], t)))
          return !1;
      return !0;
    }, r.prototype.indexOfName = function(t) {
      for (var e = 0, n = this._store.count(); e < n; e++)
        if (this.getName(e) === t)
          return e;
      return -1;
    }, r.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, r.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, r.prototype.rawIndexOf = function(t, e) {
      var n = t && this._invertedIndicesMap[t];
      if (process.env.NODE_ENV !== "production" && !n)
        throw new Error("Do not supported yet");
      var i = n && n[e];
      return i == null || isNaN(i) ? Cp : i;
    }, r.prototype.each = function(t, e, n) {
      W(t) && (n = e, e = t, t = []);
      var i = n || this, a = br(qn(t), this._getStoreDimIndex, this);
      this._store.each(a, i ? Tt(e, i) : e);
    }, r.prototype.filterSelf = function(t, e, n) {
      W(t) && (n = e, e = t, t = []);
      var i = n || this, a = br(qn(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? Tt(e, i) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, n = {}, i = St(t);
      return D(i, function(a) {
        var o = e._getStoreDimIndex(a);
        n[o] = t[a];
      }), this._store = this._store.selectRange(n), this;
    }, r.prototype.mapArray = function(t, e, n) {
      W(t) && (n = e, e = t, t = []), n = n || this;
      var i = [];
      return this.each(t, function() {
        i.push(e && e.apply(this, arguments));
      }, n), i;
    }, r.prototype.map = function(t, e, n, i) {
      var a = n || i || this, o = br(qn(t), this._getStoreDimIndex, this), s = Ji(this);
      return s._store = this._store.map(o, a ? Tt(e, a) : e), s;
    }, r.prototype.modify = function(t, e, n, i) {
      var a = this, o = n || i || this;
      process.env.NODE_ENV !== "production" && D(qn(t), function(l) {
        var u = a.getDimensionInfo(l);
        u.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = br(qn(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? Tt(e, o) : e);
    }, r.prototype.downSample = function(t, e, n, i) {
      var a = Ji(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), a;
    }, r.prototype.minmaxDownSample = function(t, e) {
      var n = Ji(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), e), n;
    }, r.prototype.lttbDownSample = function(t, e) {
      var n = Ji(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, n = this.getRawDataItem(t);
      return new Dt(n, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new IC(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return Bo(t, n);
      }, function(n) {
        return Bo(e, n);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, Qi(t) ? k(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var n = this._itemVisuals[t], i = n && n[e];
      return i ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var n = this._itemVisuals, i = n[t];
      i || (i = n[t] = {});
      var a = i[e];
      return a == null && (a = this.getVisual(e), B(a) ? a = a.slice() : Qi(a) && (a = k({}, a)), i[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, n) {
      var i = this._itemVisuals[t] || {};
      this._itemVisuals[t] = i, Qi(e) ? k(i, e) : i[e] = n;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      Qi(t) ? k(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, n) {
      this._itemLayouts[t] = n ? k(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      jx(n, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      D(this._graphicEls, function(n, i) {
        n && t && t.call(e, n, i);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : br(this.dimensions, this._getDimInfo, this), this.hostModel)), zu(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var n = this[t];
      W(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var i = n.apply(this, arguments);
        return e.apply(this, [i].concat(vh(arguments)));
      });
    }, r.internalField = (function() {
      Dp = function(t) {
        var e = t._invertedIndicesMap;
        D(e, function(n, i) {
          var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
          if (o) {
            n = e[i] = new eD(o.categories.length);
            for (var l = 0; l < n.length; l++)
              n[l] = Cp;
            for (var l = 0; l < s.count(); l++)
              n[s.get(a.storeDimIndex, l)] = l;
          }
        });
      }, ji = function(t, e, n) {
        return je(t._getCategory(e, n), null);
      }, Bo = function(t, e) {
        var n = t._idList[e];
        return n == null && t._idDimIdx != null && (n = ji(t, t._idDimIdx, e)), n == null && (n = rD + e), n;
      }, qn = function(t) {
        return B(t) || (t = t != null ? [t] : []), t;
      }, Ji = function(t) {
        var e = new r(t._schema ? t._schema : br(t.dimensions, t._getDimInfo, t), t.hostModel);
        return zu(e, t), e;
      }, zu = function(t, e) {
        D(nD.concat(e.__wrappedMethods || []), function(n) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }), t.__wrappedMethods = e.__wrappedMethods, D(iD, function(n) {
          t[n] = it(e[n]);
        }), t._calculationInfo = k({}, e._calculationInfo);
      }, Hu = function(t, e) {
        var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[e], l = i[e];
        if (s == null && a != null && (n[e] = s = ji(t, a, e)), l == null && o != null && (i[e] = l = ji(t, o, e)), l == null && s != null) {
          var u = t._nameRepeatCount, f = u[s] = (u[s] || 0) + 1;
          l = s, f > 1 && (l += "__ec__" + f), i[e] = l;
        }
      };
    })(), r;
  })()
);
function aD(r, t) {
  Wh(r) || (r = H_(r)), t = t || {};
  var e = t.coordDimensions || [], n = t.dimensionsDefine || r.dimensionsDefine || [], i = Q(), a = [], o = oD(r, e, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && J_(o), l = n === r.dimensionsDefine, u = l ? j_(r) : Yh(n), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var c = Q(f), h = new Z_(o), v = 0; v < h.length; v++)
    h[v] = -1;
  function d(T) {
    var C = h[T];
    if (C < 0) {
      var A = n[T], L = X(A) ? A : {
        name: A
      }, M = new gs(), I = L.name;
      I != null && u.get(I) != null && (M.name = M.displayName = I), L.type != null && (M.type = L.type), L.displayName != null && (M.displayName = L.displayName);
      var O = a.length;
      return h[T] = O, M.storeDimIndex = T, a.push(M), M;
    }
    return a[C];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  c.each(function(T, C) {
    var A = qt(T).slice();
    if (A.length === 1 && !$(A[0]) && A[0] < 0) {
      c.set(C, !1);
      return;
    }
    var L = c.set(C, []);
    D(A, function(M, I) {
      var O = $(M) ? u.get(M) : M;
      O != null && O < o && (L[I] = O, m(d(O), C, I));
    });
  });
  var p = 0;
  D(e, function(T) {
    var C, A, L, M;
    if ($(T))
      C = T, M = {};
    else {
      M = T, C = M.name;
      var I = M.ordinalMeta;
      M.ordinalMeta = null, M = k({}, M), M.ordinalMeta = I, A = M.dimsDef, L = M.otherDims, M.name = M.coordDim = M.coordDimIndex = M.dimsDef = M.otherDims = null;
    }
    var O = c.get(C);
    if (O !== !1) {
      if (O = qt(O), !O.length)
        for (var P = 0; P < (A && A.length || 1); P++) {
          for (; p < o && d(p).coordDim != null; )
            p++;
          p < o && O.push(p++);
        }
      D(O, function(F, G) {
        var U = d(F);
        if (l && M.type != null && (U.type = M.type), m(gt(U, M), C, G), U.name == null && A) {
          var j = A[G];
          !X(j) && (j = {
            name: j
          }), U.name = U.displayName = j.name, U.defaultTooltip = j.defaultTooltip;
        }
        L && gt(U.otherDims, L);
      });
    }
  });
  function m(T, C, A) {
    oc.get(C) != null ? T.otherDims[C] = A : (T.coordDim = C, T.coordDimIndex = A, i.set(C, !0));
  }
  var g = t.generateCoord, y = t.generateCoordCount, _ = y != null;
  y = g ? y || 1 : 0;
  var b = g || "value";
  function S(T) {
    T.name == null && (T.name = T.coordDim);
  }
  if (s)
    D(a, function(T) {
      S(T);
    }), a.sort(function(T, C) {
      return T.storeDimIndex - C.storeDimIndex;
    });
  else
    for (var w = 0; w < o; w++) {
      var x = d(w), E = x.coordDim;
      E == null && (x.coordDim = sD(b, i, _), x.coordDimIndex = 0, (!g || y <= 0) && (x.isExtraCoord = !0), y--), S(x), x.type == null && (z_(r, w) === se.Must || x.isExtraCoord && (x.otherDims.itemName != null || x.otherDims.seriesName != null)) && (x.type = "ordinal");
    }
  return Ch(a, function(T) {
    return T.name;
  }, function(T, C) {
    C > 0 && (T.name = T.name + (C - 1));
  }), new K_({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function oD(r, t, e, n) {
  var i = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, n || 0);
  return D(t, function(a) {
    var o;
    X(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function sD(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var n = 0; t.hasKey(r + n); )
      n++;
    r += n;
  }
  return t.set(r, !0), r;
}
var ms = {}, $u = {}, Xh = (
  /** @class */
  (function() {
    function r() {
      this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
    }
    return r.prototype.create = function(t, e) {
      this._nonSeriesBoxMasterList = n(ms, !0), this._normalMasterList = n($u, !1);
      function n(i, a) {
        var o = [];
        return D(i, function(s, l) {
          var u = s.create(t, e);
          o = o.concat(u || []), process.env.NODE_ENV !== "production" && a && D(u, function(f) {
            return N(!f.update);
          });
        }), o;
      }
    }, r.prototype.update = function(t, e) {
      D(this._normalMasterList, function(n) {
        n.update && n.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
    }, r.register = function(t, e) {
      if (t === "matrix" || t === "calendar") {
        ms[t] = e;
        return;
      }
      $u[t] = e;
    }, r.get = function(t) {
      return $u[t] || ms[t];
    }, r;
  })()
);
function lD(r) {
  return !!ms[r];
}
var uD = 1, fD = 2, cD = Q();
function t0(r) {
  var t = r.getShallow("coord", !0), e = uD;
  if (t == null) {
    var n = cD.get(r.type);
    n && n.getCoord2 && (e = fD, t = n.getCoord2(r));
  }
  return {
    coord: t,
    from: e
  };
}
var yi = 0, ys = 1, hD = 2;
function vD(r, t) {
  var e = r.getShallow("coordinateSystem"), n = r.getShallow("coordinateSystemUsage", !0), i = n != null, a = yi;
  if (e) {
    var o = r.mainType === "series";
    n == null && (n = o ? "data" : "box"), n === "data" ? (a = ys, o || (process.env.NODE_ENV !== "production" && i && t && ut('coordinateSystemUsage "data" is not supported in non-series components.'), a = yi)) : n === "box" && (a = hD, !o && !lD(e) && (process.env.NODE_ENV !== "production" && i && t && ut('coordinateSystem "' + e + '" cannot be used' + (' as coordinateSystemUsage "box" for "' + r.type + '" yet.')), a = yi));
  }
  return {
    coordSysType: e,
    kind: a
  };
}
function dD(r) {
  var t = r.targetModel, e = r.coordSysType, n = r.coordSysProvider, i = r.isDefaultDataCoordSys, a = r.allowNotFound;
  process.env.NODE_ENV !== "production" && N(!!e);
  var o = vD(t, !0), s = o.kind, l = o.coordSysType;
  if (i && s !== ys && (s = ys, l = e), s === yi || l !== e)
    return yi;
  var u = n(e, t);
  return u ? (s === ys ? (process.env.NODE_ENV !== "production" && N(t.mainType === "series"), t.coordinateSystem = u) : t.boxCoordinateSystem = u, s) : (process.env.NODE_ENV !== "production" && (a || ut(e + " cannot be found for" + (" " + t.type + " (index: " + t.componentIndex + ")."))), yi);
}
var pD = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.coordSysDims = [], this.axisMap = Q(), this.categoryAxisMap = Q(), this.coordSysName = t;
    }
    return r;
  })()
);
function gD(r) {
  var t = r.get("coordinateSystem"), e = new pD(t), n = mD[t];
  if (n)
    return n(r, e, e.axisMap, e.categoryAxisMap), e;
}
var mD = {
  cartesian2d: function(r, t, e, n) {
    var i = r.getReferringComponents("xAxis", Te).models[0], a = r.getReferringComponents("yAxis", Te).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!i)
        throw new Error('xAxis "' + In(r.get("xAxisIndex"), r.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + In(r.get("xAxisIndex"), r.get("yAxisId"), 0) + '" not found');
    }
    t.coordSysDims = ["x", "y"], e.set("x", i), e.set("y", a), Kn(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), Kn(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(r, t, e, n) {
    var i = r.getReferringComponents("singleAxis", Te).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("singleAxis should be specified.");
    t.coordSysDims = ["single"], e.set("single", i), Kn(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
  },
  polar: function(r, t, e, n) {
    var i = r.getReferringComponents("polar", Te).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), Kn(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), Kn(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(r, t, e, n) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(r, t, e, n) {
    var i = r.ecModel, a = i.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    D(a.parallelAxisIndex, function(s, l) {
      var u = i.getComponent("parallelAxis", s), f = o[l];
      e.set(f, u), Kn(u) && (n.set(f, u), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = l));
    });
  },
  matrix: function(r, t, e, n) {
    var i = r.getReferringComponents("matrix", Te).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("matrix coordinate system should be specified.");
    t.coordSysDims = ["x", "y"];
    var a = i.getDimensionModel("x"), o = i.getDimensionModel("y");
    e.set("x", a), e.set("y", o), n.set("x", a), n.set("y", o);
  }
};
function Kn(r) {
  return r.get("type") === "category";
}
function yD(r, t, e) {
  e = e || {};
  var n = e.byIndex, i = e.stackedCoordDimension, a, o, s;
  _D(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var l = !!(r && r.get("stack")), u, f, c, h, v = !0;
  function d(b) {
    return b.type !== "ordinal" && b.type !== "time";
  }
  if (D(a, function(b, S) {
    $(b) && (a[S] = b = {
      name: b
    }), d(b) || (v = !1);
  }), D(a, function(b, S) {
    l && !b.isExtraCoord && (!n && !u && b.ordinalMeta && (u = b), !f && d(b) && (!v || b.coordDim !== "x" && b.coordDim !== "angle") && (!i || i === b.coordDim) && (f = b));
  }), f && !n && !u && (n = !0), f) {
    c = "__\0ecstackresult_" + r.id, h = "__\0ecstackedover_" + r.id, u && (u.createInvertedIndices = !0);
    var p = f.coordDim, m = f.type, g = 0;
    D(a, function(b) {
      b.coordDim === p && g++;
    });
    var y = {
      name: c,
      coordDim: p,
      coordDimIndex: g,
      type: m,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, _ = {
      name: h,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: h,
      coordDimIndex: g + 1,
      type: m,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (y.storeDimIndex = s.ensureCalculationDimension(h, m), _.storeDimIndex = s.ensureCalculationDimension(c, m)), o.appendCalculationDimension(y), o.appendCalculationDimension(_)) : (a.push(y), a.push(_));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: u && u.name,
    isStackedByIndex: n,
    stackedOverDimension: h,
    stackResultDimension: c
  };
}
function _D(r) {
  return !Q_(r.schema);
}
function Oi(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function e0(r, t) {
  return Oi(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
function bD(r, t) {
  var e = r.get("coordinateSystem"), n = Xh.get(e), i;
  return t && t.coordSysDims && (i = Y(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var l = s.get("type");
      o.type = WC(l);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function SD(r, t, e) {
  var n, i;
  return e && D(r, function(a, o) {
    var s = a.coordDim, l = e.categoryAxisMap.get(s);
    l && (n == null && (n = o), a.ordinalMeta = l.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (r[n].otherDims.itemName = 0), n;
}
function wD(r, t, e) {
  e = e || {};
  var n = t.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === he;
  var o = gD(t), s = bD(t, o), l = e.useEncodeDefaulter, u = W(l) ? l : l ? _t(OC, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: e.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: u,
    canOmitUnusedDimensions: !a
  }, c = aD(i, f), h = SD(c.dimensions, e.createInvertedIndices, o), v = a ? null : n.getSharedDataStore(c), d = yD(t, {
    schema: c,
    store: v
  }), p = new Ea(c, t);
  p.setCalculationInfo(d);
  var m = h != null && xD(i) ? function(g, y, _, b) {
    return b === h ? _ : this.defaultDimValueGetter(g, y, _, b);
  } : null;
  return p.hasItemOption = !1, p.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : v,
    null,
    m
  ), p;
}
function xD(r) {
  if (r.sourceFormat === he) {
    var t = TD(r.data || []);
    return !B(oo(t));
  }
}
function TD(r) {
  for (var t = 0; t < r.length && r[t] == null; )
    t++;
  return r[t];
}
var CD = Math.round(Math.random() * 10);
function Yl(r) {
  return [r || "", CD++].join("_");
}
function DD(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, n) {
    var i = Ye(e);
    t[i.main] = n;
  }, r.determineSubType = function(e, n) {
    var i = n.type;
    if (!i) {
      var a = Ye(e).main;
      r.hasSubTypes(e) && t[a] && (i = t[a](n));
    }
    return i;
  };
}
function ED(r, t) {
  r.topologicalTravel = function(a, o, s, l) {
    if (!a.length)
      return;
    var u = e(o), f = u.graph, c = u.noEntryList, h = {};
    for (D(a, function(y) {
      h[y] = !0;
    }); c.length; ) {
      var v = c.pop(), d = f[v], p = !!h[v];
      p && (s.call(l, v, d.originalDeps.slice()), delete h[v]), D(d.successor, p ? g : m);
    }
    D(h, function() {
      var y = "";
      throw process.env.NODE_ENV !== "production" && (y = zs("Circular dependency may exists: ", h, a, o)), new Error(y);
    });
    function m(y) {
      f[y].entryCount--, f[y].entryCount === 0 && c.push(y);
    }
    function g(y) {
      h[y] = !0, m(y);
    }
  };
  function e(a) {
    var o = {}, s = [];
    return D(a, function(l) {
      var u = n(o, l), f = u.originalDeps = t(l), c = i(f, a);
      u.entryCount = c.length, u.entryCount === 0 && s.push(l), D(c, function(h) {
        lt(u.predecessor, h) < 0 && u.predecessor.push(h);
        var v = n(o, h);
        lt(v.successor, h) < 0 && v.successor.push(l);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function n(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function i(a, o) {
    var s = [];
    return D(a, function(l) {
      lt(o, l) >= 0 && s.push(l);
    }), s;
  }
}
function AD(r, t) {
  return ht(ht({}, r, !0), t, !0);
}
var MD = Math.log(2);
function mc(r, t, e, n, i, a) {
  var o = n + "-" + i, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var l = Math.round(Math.log((1 << s) - 1 & ~i) / MD);
    return r[e][l];
  }
  for (var u = n | 1 << e, f = e + 1; n & 1 << f; )
    f++;
  for (var c = 0, h = 0, v = 0; h < s; h++) {
    var d = 1 << h;
    d & i || (c += (v % 2 ? -1 : 1) * r[e][h] * mc(r, t - 1, f, u, i | d, a), v++);
  }
  return a[o] = c, c;
}
function Ep(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], n = {}, i = mc(e, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * mc(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
    return function(l, u, f) {
      var c = u * a[6] + f * a[7] + 1;
      l[0] = (u * a[0] + f * a[1] + a[2]) / c, l[1] = (u * a[3] + f * a[4] + a[5]) / c;
    };
  }
}
var Xs = "___zrEVENTSAVED", Gu = [];
function LD(r, t, e, n, i) {
  return yc(Gu, t, n, i, !0) && yc(r, e, Gu[0], Gu[1]);
}
function ID(r, t) {
  r && e(r), t && e(t);
  function e(n) {
    var i = n[Xs];
    i && (i.clearMarkers && i.clearMarkers(), delete n[Xs]);
  }
}
function yc(r, t, e, n, i) {
  if (t.getBoundingClientRect && tt.domSupported && !r0(t)) {
    var a = t[Xs] || (t[Xs] = {}), o = PD(t, a), s = OD(o, a, i);
    if (s)
      return s(r, e, n), !0;
  }
  return !1;
}
function PD(r, t) {
  var e = t.markers;
  if (e)
    return e;
  e = t.markers = [];
  for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, l = a % 2, u = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      n[l] + ":0",
      i[u] + ":0",
      n[1 - l] + ":auto",
      i[1 - u] + ":auto",
      ""
    ].join("!important;"), r.appendChild(o), e.push(o);
  }
  return t.clearMarkers = function() {
    D(e, function(f) {
      f.parentNode && f.parentNode.removeChild(f);
    });
  }, e;
}
function OD(r, t, e) {
  for (var n = e ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], l = !0, u = 0; u < 4; u++) {
    var f = r[u].getBoundingClientRect(), c = 2 * u, h = f.left, v = f.top;
    o.push(h, v), l = l && a && h === a[c] && v === a[c + 1], s.push(r[u].offsetLeft, r[u].offsetTop);
  }
  return l && i ? i : (t.srcCoords = o, t[n] = e ? Ep(s, o) : Ep(o, s));
}
function r0(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var ND = /([&<>"'])/g, kD = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function ne(r) {
  return r == null ? "" : (r + "").replace(ND, function(t, e) {
    return kD[e];
  });
}
const RD = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, BD = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var Zs = "ZH", Zh = "EN", _i = Zh, _s = {}, qh = {}, n0 = tt.domSupported ? (function() {
  var r = (document.documentElement.lang || navigator.language || navigator.browserLanguage || _i).toUpperCase();
  return r.indexOf(Zs) > -1 ? Zs : _i;
})() : _i;
function i0(r, t) {
  r = r.toUpperCase(), qh[r] = new Dt(t), _s[r] = t;
}
function VD(r) {
  if ($(r)) {
    var t = _s[r.toUpperCase()] || {};
    return r === Zs || r === Zh ? it(t) : ht(it(t), it(_s[_i]), !1);
  } else
    return ht(it(r), it(_s[_i]), !1);
}
function FD(r) {
  return qh[r];
}
function zD() {
  return qh[_i];
}
i0(Zh, RD);
i0(Zs, BD);
var HD = null;
function Xl() {
  return HD;
}
function a0(r, t) {
  t.breakOption;
  var e = t.breakParsed;
  return e;
}
function Kh(r) {
  var t = r.brk;
  return t ? t.breaks : [];
}
function Nn(r) {
  var t = r.brk;
  return t ? t.hasBreaks() : !1;
}
var Qh = 1e3, jh = Qh * 60, Aa = jh * 60, Ce = Aa * 24, Ap = Ce * 365, $D = {
  year: /({yyyy}|{yy})/,
  month: /({MMMM}|{MMM}|{MM}|{M})/,
  day: /({dd}|{d})/,
  hour: /({HH}|{H}|{hh}|{h})/,
  minute: /({mm}|{m})/,
  second: /({ss}|{s})/,
  millisecond: /({SSS}|{S})/
}, bs = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}"
}, GD = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}", Vo = "{yyyy}-{MM}-{dd}", Mp = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: Vo,
  hour: Vo + " " + bs.hour,
  minute: Vo + " " + bs.minute,
  second: Vo + " " + bs.second,
  millisecond: GD
}, An = ["year", "month", "day", "hour", "minute", "second", "millisecond"], UD = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function WD(r) {
  return !$(r) && !W(r) ? YD(r) : r;
}
function YD(r) {
  r = r || {};
  var t = {}, e = !0;
  return D(An, function(n) {
    e && (e = r[n] == null);
  }), D(An, function(n, i) {
    var a = r[n];
    t[n] = {};
    for (var o = null, s = i; s >= 0; s--) {
      var l = An[s], u = X(a) && !B(a) ? a[l] : a, f = void 0;
      B(u) ? (f = u.slice(), o = f[0] || "") : $(u) ? (o = u, f = [o]) : (o == null ? o = bs[n] : $D[l].test(o) || (o = t[l][l][0] + " " + o), f = [o], e && (f[1] = "{primary|" + o + "}")), t[n][l] = f;
    }
  }), t;
}
function Sr(r, t) {
  return r += "", "0000".substr(0, t - r.length) + r;
}
function Ma(r) {
  switch (r) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return r;
  }
}
function XD(r) {
  return r === Ma(r);
}
function ZD(r) {
  switch (r) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function Zl(r, t, e, n) {
  var i = Hi(r), a = i[o0(e)](), o = i[Jh(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, l = i[tv(e)](), u = i["get" + (e ? "UTC" : "") + "Day"](), f = i[ev(e)](), c = (f - 1) % 12 + 1, h = i[rv(e)](), v = i[nv(e)](), d = i[iv(e)](), p = f >= 12 ? "pm" : "am", m = p.toUpperCase(), g = n instanceof Dt ? n : FD(n || n0) || zD(), y = g.getModel("time"), _ = y.get("month"), b = y.get("monthAbbr"), S = y.get("dayOfWeek"), w = y.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, p + "").replace(/{A}/g, m + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Sr(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, b[o - 1]).replace(/{MM}/g, Sr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Sr(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, S[u]).replace(/{ee}/g, w[u]).replace(/{e}/g, u + "").replace(/{HH}/g, Sr(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Sr(c + "", 2)).replace(/{h}/g, c + "").replace(/{mm}/g, Sr(h, 2)).replace(/{m}/g, h + "").replace(/{ss}/g, Sr(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, Sr(d, 3)).replace(/{S}/g, d + "");
}
function qD(r, t, e, n, i) {
  var a = null;
  if ($(e))
    a = e;
  else if (W(e)) {
    var o = {
      time: r.time,
      level: r.time ? r.time.level : 0
    }, s = Xl();
    s && s.makeAxisLabelFormatterParamBreak(o, r.break), a = e(r.value, t, o);
  } else {
    var l = r.time;
    if (l) {
      var u = e[l.lowerTimeUnit][l.upperTimeUnit];
      a = u[Math.min(l.level, u.length - 1)] || "";
    } else {
      var f = Ss(r.value, i);
      a = e[f][f][0];
    }
  }
  return Zl(new Date(r.value), a, i, n);
}
function Ss(r, t) {
  var e = Hi(r), n = e[Jh(t)]() + 1, i = e[tv(t)](), a = e[ev(t)](), o = e[rv(t)](), s = e[nv(t)](), l = e[iv(t)](), u = l === 0, f = u && s === 0, c = f && o === 0, h = c && a === 0, v = h && i === 1, d = v && n === 1;
  return d ? "year" : v ? "month" : h ? "day" : c ? "hour" : f ? "minute" : u ? "second" : "millisecond";
}
function _c(r, t, e) {
  switch (t) {
    case "year":
      r[s0(e)](0);
    case "month":
      r[l0(e)](1);
    case "day":
      r[u0(e)](0);
    case "hour":
      r[f0(e)](0);
    case "minute":
      r[c0(e)](0);
    case "second":
      r[h0(e)](0);
  }
  return r;
}
function o0(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function Jh(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function tv(r) {
  return r ? "getUTCDate" : "getDate";
}
function ev(r) {
  return r ? "getUTCHours" : "getHours";
}
function rv(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function nv(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function iv(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function KD(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function s0(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function l0(r) {
  return r ? "setUTCDate" : "setDate";
}
function u0(r) {
  return r ? "setUTCHours" : "setHours";
}
function f0(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function c0(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function h0(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function v0(r) {
  if (!Ky(r))
    return $(r) ? r : "-";
  var t = (r + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function d0(r, t) {
  return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, n) {
    return n.toUpperCase();
  }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
}
var ql = dh;
function bc(r, t, e) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && We(f) ? f : "-";
  }
  function a(f) {
    return er(f);
  }
  var o = t === "time", s = r instanceof Date;
  if (o || s) {
    var l = o ? Hi(r) : r;
    if (isNaN(+l)) {
      if (s)
        return "-";
    } else return Zl(l, n, e);
  }
  if (t === "ordinal")
    return Ms(r) ? i(r) : wt(r) && a(r) ? r + "" : "-";
  var u = Fs(r);
  return a(u) ? v0(u) : Ms(r) ? i(r) : typeof r == "boolean" ? r + "" : "-";
}
var Lp = ["a", "b", "c", "d", "e", "f", "g"], Uu = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function p0(r, t, e) {
  B(t) || (t = [t]);
  var n = t.length;
  if (!n)
    return "";
  for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
    var o = Lp[a];
    r = r.replace(Uu(o), Uu(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var l = 0; l < i.length; l++) {
      var u = t[s][i[l]];
      r = r.replace(Uu(Lp[l], s), e ? ne(u) : u);
    }
  return r;
}
function QD(r, t) {
  var e = $(r) ? {
    color: r,
    extraCssText: t
  } : r || {}, n = e.color, i = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + ne(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + ne(n) + ";" + (t || "") + '"></span>';
  var o = e.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: i === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: n
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: n
    }
  };
}
function kn(r, t) {
  return t = t || "transparent", $(r) ? r : X(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
var ws = D, jD = ["left", "right", "top", "bottom", "width", "height"], Fo = [["width", "left", "right"], ["height", "top", "bottom"]];
function av(r, t, e, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  t.eachChild(function(l, u) {
    var f = l.getBoundingRect(), c = t.childAt(u + 1), h = c && c.getBoundingRect(), v, d;
    if (r === "horizontal") {
      var p = f.width + (h ? -h.x + f.x : 0);
      v = a + p, v > n || l.newline ? (a = 0, v = p, o += s + e, s = f.height) : s = Math.max(s, f.height);
    } else {
      var m = f.height + (h ? -h.y + f.y : 0);
      d = o + m, d > i || l.newline ? (a += s + e, o = 0, d = m, s = f.width) : s = Math.max(s, f.width);
    }
    l.newline || (l.x = a, l.y = o, l.markRedraw(), r === "horizontal" ? a = v + e : o = d + e);
  });
}
var La = av;
_t(av, "vertical");
_t(av, "horizontal");
function JD(r, t) {
  return {
    left: r.getShallow("left", t),
    top: r.getShallow("top", t),
    right: r.getShallow("right", t),
    bottom: r.getShallow("bottom", t),
    width: r.getShallow("width", t),
    height: r.getShallow("height", t)
  };
}
function Wa(r, t, e) {
  e = ql(e || 0);
  var n = t.width, i = t.height, a = te(r.left, n), o = te(r.top, i), s = te(r.right, n), l = te(r.bottom, i), u = te(r.width, n), f = te(r.height, i), c = e[2] + e[0], h = e[1] + e[3], v = r.aspect;
  switch (isNaN(u) && (u = n - s - h - a), isNaN(f) && (f = i - l - c - o), v != null && (isNaN(u) && isNaN(f) && (v > n / i ? u = n * 0.8 : f = i * 0.8), isNaN(u) && (u = v * f), isNaN(f) && (f = u / v)), isNaN(a) && (a = n - s - u - h), isNaN(o) && (o = i - l - f - c), r.left || r.right) {
    case "center":
      a = n / 2 - u / 2 - e[3];
      break;
    case "right":
      a = n - u - h;
      break;
  }
  switch (r.top || r.bottom) {
    case "middle":
    case "center":
      o = i / 2 - f / 2 - e[0];
      break;
    case "bottom":
      o = i - f - c;
      break;
  }
  a = a || 0, o = o || 0, isNaN(u) && (u = n - h - a - (s || 0)), isNaN(f) && (f = i - c - o - (l || 0));
  var d = new J((t.x || 0) + a + e[3], (t.y || 0) + o + e[0], u, f);
  return d.margin = e, d;
}
var Wu = {
  rect: 1
};
function g0(r, t, e) {
  var n, i, a, o = r.boxCoordinateSystem, s;
  if (o) {
    var l = t0(r), u = l.coord, f = l.from;
    if (o.dataToLayout) {
      a = Wu.rect, s = f;
      var c = o.dataToLayout(u);
      n = c.contentRect || c.rect;
    } else
      process.env.NODE_ENV !== "production" && ut(r.type + "[" + r.componentIndex + "]" + (" layout based on " + o.type + " is not supported."));
  }
  return a == null && (a = Wu.rect), a === Wu.rect && (n || (n = {
    x: 0,
    y: 0,
    width: t.getWidth(),
    height: t.getHeight()
  }), i = [n.x + n.width / 2, n.y + n.height / 2]), {
    type: a,
    refContainer: n,
    refPoint: i,
    boxCoordFrom: s
  };
}
function Ya(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return X(t) ? t : t ? {
    type: t
  } : null;
}
function Vr(r, t, e) {
  var n = e && e.ignoreSize;
  !B(n) && (n = [n, n]);
  var i = o(Fo[0], 0), a = o(Fo[1], 1);
  l(Fo[0], r, i), l(Fo[1], r, a);
  function o(u, f) {
    var c = {}, h = 0, v = {}, d = 0, p = 2;
    if (ws(u, function(y) {
      v[y] = r[y];
    }), ws(u, function(y) {
      fe(t, y) && (c[y] = v[y] = t[y]), s(c, y) && h++, s(v, y) && d++;
    }), n[f])
      return s(t, u[1]) ? v[u[2]] = null : s(t, u[2]) && (v[u[1]] = null), v;
    if (d === p || !h)
      return v;
    if (h >= p)
      return c;
    for (var m = 0; m < u.length; m++) {
      var g = u[m];
      if (!fe(c, g) && fe(r, g)) {
        c[g] = r[g];
        break;
      }
    }
    return c;
  }
  function s(u, f) {
    return u[f] != null && u[f] !== "auto";
  }
  function l(u, f, c) {
    ws(u, function(h) {
      f[h] = c[h];
    });
  }
}
function fo(r) {
  return tE({}, r);
}
function tE(r, t) {
  return t && r && ws(jD, function(e) {
    fe(t, e) && (r[e] = t[e]);
  }), r;
}
var eE = dt(), ft = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e, n, i) {
      var a = r.call(this, e, n, i) || this;
      return a.uid = Yl("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, n, i) {
      this.mergeDefaultAndTheme(e, i);
    }, t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = Ya(this), a = i ? fo(e) : {}, o = n.getTheme();
      ht(e, o.get(this.mainType)), ht(e, this.getDefaultOption()), i && Vr(e, a, i);
    }, t.prototype.mergeOption = function(e, n) {
      ht(this.option, e, !0);
      var i = Ya(this);
      i && Vr(this.option, e, i);
    }, t.prototype.optionUpdated = function(e, n) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!FS(e))
        return e.defaultOption;
      var n = eE(this);
      if (!n.defaultOption) {
        for (var i = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && i.push(o), a = a.superClass;
        }
        for (var s = {}, l = i.length - 1; l >= 0; l--)
          s = ht(s, i[l], !0);
        n.defaultOption = s;
      }
      return n.defaultOption;
    }, t.prototype.getReferringComponents = function(e, n) {
      var i = e + "Index", a = e + "Id";
      return so(this.ecModel, e, {
        index: this.get(i, !0),
        id: this.get(a, !0)
      }, n);
    }, t.prototype.getBoxLayoutParams = function() {
      return JD(this, !1);
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(e) {
      this.option.zlevel = e;
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
    })(), t;
  })(Dt)
);
by(ft, Dt);
Cl(ft);
DD(ft);
ED(ft, rE);
function rE(r) {
  var t = [];
  return D(ft.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = Y(t, function(e) {
    return Ye(e).main;
  }), r !== "dataset" && lt(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
var Ip = dt();
dt();
var ov = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, n) {
      var i = qt(this.get("color", !0)), a = this.get("colorLayer", !0);
      return iE(this, Ip, i, a, t, e, n);
    }, r.prototype.clearColorPalette = function() {
      aE(this, Ip);
    }, r;
  })()
);
function nE(r, t) {
  for (var e = r.length, n = 0; n < e; n++)
    if (r[n].length > t)
      return r[n];
  return r[e - 1];
}
function iE(r, t, e, n, i, a, o) {
  a = a || r;
  var s = t(a), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
  if (u.hasOwnProperty(i))
    return u[i];
  var f = o == null || !n ? e : nE(n, o);
  if (f = f || e, !(!f || !f.length)) {
    var c = f[l];
    return i && (u[i] = c), s.paletteIdx = (l + 1) % f.length, c;
  }
}
function aE(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var oE = /\{@(.+?)\}/g, sv = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getDataParams = function(t, e) {
      var n = this.getData(e), i = this.getRawValue(t, e), a = n.getRawIndex(t), o = n.getName(t), s = n.getRawDataItem(t), l = n.getItemVisual(t, "style"), u = l && l[n.getItemVisual(t, "drawType") || "fill"], f = l && l.stroke, c = this.mainType, h = c === "series", v = n.userOutput && n.userOutput.get();
      return {
        componentType: c,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: h ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: h ? this.id : null,
        seriesName: h ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: e,
        value: i,
        color: u,
        borderColor: f,
        dimensionNames: v ? v.fullDimensions : null,
        encode: v ? v.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, r.prototype.getFormattedLabel = function(t, e, n, i, a, o) {
      e = e || "normal";
      var s = this.getData(n), l = this.getDataParams(t, n);
      if (o && (l.value = o.interpolatedValue), i != null && B(l.value) && (l.value = l.value[i]), !a) {
        var u = s.getItemModel(t);
        a = u.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (W(a))
        return l.status = e, l.dimensionIndex = i, a(l);
      if ($(a)) {
        var f = p0(a, l);
        return f.replace(oE, function(c, h) {
          var v = h.length, d = h;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && ut("Invalide label formatter: @" + h + ", only support @[0], @[1], @[2], ..."));
          var p = Pi(s, t, d);
          if (o && B(o.interpolatedValue)) {
            var m = s.getDimensionIndex(d);
            m >= 0 && (p = o.interpolatedValue[m]);
          }
          return p != null ? p + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return Pi(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, n) {
    }, r;
  })()
);
function Pp(r) {
  var t, e;
  return X(r) ? r.type ? e = r : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + zs(r)) : t = r, {
    text: t,
    // markers: markers || markersExisting,
    frag: e
  };
}
function Ia(r) {
  return new sE(r);
}
var sE = (
  /** @class */
  (function() {
    function r(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return r.prototype.perform = function(t) {
      var e = this._upstream, n = t && t.skip;
      if (this._dirty && e) {
        var i = this.context;
        i.data = i.outputData = e.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !n && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, l = f(t && t.modBy), u = t && t.modDataCount || 0;
      (o !== l || s !== u) && (a = "reset");
      function f(y) {
        return !(y >= 1) && (y = 1), y;
      }
      var c;
      (this._dirty || a === "reset") && (this._dirty = !1, c = this._doReset(n)), this._modBy = l, this._modDataCount = u;
      var h = t && t.step;
      if (e ? (process.env.NODE_ENV !== "production" && N(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (process.env.NODE_ENV !== "production" && N(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var v = this._dueIndex, d = Math.min(h != null ? this._dueIndex + h : 1 / 0, this._dueEnd);
        if (!n && (c || v < d)) {
          var p = this._progress;
          if (B(p))
            for (var m = 0; m < p.length; m++)
              this._doProgress(p[m], v, d, l, u);
          else
            this._doProgress(p, v, d, l, u);
        }
        this._dueIndex = d;
        var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && N(g >= this._outputDueEnd), this._outputDueEnd = g;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, r.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, r.prototype._doProgress = function(t, e, n, i, a) {
      Op.reset(e, n, i, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: n,
        count: n - e,
        next: Op.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, n;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (n = e.forceFirstProgress, e = e.progress), B(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
      var i = this._downstream;
      return i && i.dirty(), n;
    }, r.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, r.prototype.pipe = function(t) {
      process.env.NODE_ENV !== "production" && N(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
    }, r.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, r.prototype.getUpstream = function() {
      return this._upstream;
    }, r.prototype.getDownstream = function() {
      return this._downstream;
    }, r.prototype.setOutputEnd = function(t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    }, r;
  })()
), Op = /* @__PURE__ */ (function() {
  var r, t, e, n, i, a = {
    reset: function(l, u, f, c) {
      t = l, r = u, e = f, n = c, i = Math.ceil(n / e), a.next = e > 1 && n > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < r ? t++ : null;
  }
  function s() {
    var l = t % i * e + Math.ceil(t / i), u = t >= r ? null : l < n ? l : t;
    return t++, u;
  }
})(), lE = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getRawData = function() {
      throw new Error("not supported");
    }, r.prototype.getRawDataItem = function(t) {
      throw new Error("not supported");
    }, r.prototype.cloneRawData = function() {
    }, r.prototype.getDimensionInfo = function(t) {
    }, r.prototype.cloneAllDimensionInfo = function() {
    }, r.prototype.count = function() {
    }, r.prototype.retrieveValue = function(t, e) {
    }, r.prototype.retrieveValueFromItem = function(t, e) {
    }, r.prototype.convertValue = function(t, e) {
      return mi(t, e);
    }, r;
  })()
);
function uE(r, t) {
  var e = new lE(), n = r.data, i = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== Je && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), re(o));
  var s = [], l = {}, u = r.dimensionsDefine;
  if (u)
    D(u, function(p, m) {
      var g = p.name, y = {
        index: m,
        name: g,
        displayName: p.displayName
      };
      if (s.push(y), g != null) {
        var _ = "";
        fe(l, g) && (process.env.NODE_ENV !== "production" && (_ = 'dimension name "' + g + '" duplicated.'), re(_)), l[g] = y;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var c = W_(i, Je);
  t.__isBuiltIn && (e.getRawDataItem = function(p) {
    return c(n, a, s, p);
  }, e.getRawData = Tt(fE, null, r)), e.cloneRawData = Tt(cE, null, r);
  var h = Y_(i, Je);
  e.count = Tt(h, null, n, a, s);
  var v = X_(i);
  e.retrieveValue = function(p, m) {
    var g = c(n, a, s, p);
    return d(g, m);
  };
  var d = e.retrieveValueFromItem = function(p, m) {
    if (p != null) {
      var g = s[m];
      if (g)
        return v(p, m, g.name);
    }
  };
  return e.getDimensionInfo = Tt(hE, null, s, l), e.cloneAllDimensionInfo = Tt(vE, null, s), e;
}
function fE(r) {
  var t = r.sourceFormat;
  if (!lv(t)) {
    var e = "";
    process.env.NODE_ENV !== "production" && (e = "`getRawData` is not supported in source format " + t), re(e);
  }
  return r.data;
}
function cE(r) {
  var t = r.sourceFormat, e = r.data;
  if (!lv(t)) {
    var n = "";
    process.env.NODE_ENV !== "production" && (n = "`cloneRawData` is not supported in source format " + t), re(n);
  }
  if (t === Ut) {
    for (var i = [], a = 0, o = e.length; a < o; a++)
      i.push(e[a].slice());
    return i;
  } else if (t === Re) {
    for (var i = [], a = 0, o = e.length; a < o; a++)
      i.push(k({}, e[a]));
    return i;
  }
}
function hE(r, t, e) {
  if (e != null) {
    if (wt(e) || !isNaN(e) && !fe(t, e))
      return r[e];
    if (fe(t, e))
      return t[e];
  }
}
function vE(r) {
  return it(r);
}
var m0 = Q();
function dE(r) {
  r = it(r);
  var t = r.type, e = "";
  t || (process.env.NODE_ENV !== "production" && (e = "Must have a `type` when `registerTransform`."), re(e));
  var n = t.split(":");
  n.length !== 2 && (process.env.NODE_ENV !== "production" && (e = 'Name must include namespace like "ns:regression".'), re(e));
  var i = !1;
  n[0] === "echarts" && (t = n[1], i = !0), r.__isBuiltIn = i, m0.set(t, r);
}
function pE(r, t, e) {
  var n = qt(r), i = n.length, a = "";
  i || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), re(a));
  for (var o = 0, s = i; o < s; o++) {
    var l = n[o];
    t = gE(l, t, e, i === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function gE(r, t, e, n) {
  var i = "";
  t.length || (process.env.NODE_ENV !== "production" && (i = "Must have at least one upstream dataset."), re(i)), X(r) || (process.env.NODE_ENV !== "production" && (i = "transform declaration must be an object rather than " + typeof r + "."), re(i));
  var a = r.type, o = m0.get(a);
  o || (process.env.NODE_ENV !== "production" && (i = 'Can not find transform on type "' + a + '".'), re(i));
  var s = Y(t, function(f) {
    return uE(f, o);
  }), l = qt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: it(r.config)
  }));
  if (process.env.NODE_ENV !== "production" && r.print) {
    var u = Y(l, function(f) {
      var c = n != null ? " === pipe index: " + n : "";
      return ["=== dataset index: " + e.datasetIndex + c + " ===", "- transform result data:", zs(f.data), "- transform result dimensions:", zs(f.dimensions)].join(`
`);
    }).join(`
`);
    Jy(u);
  }
  return Y(l, function(f, c) {
    var h = "";
    X(f) || (process.env.NODE_ENV !== "production" && (h = "A transform should not return some empty results."), re(h)), f.data || (process.env.NODE_ENV !== "production" && (h = "Transform result data should be not be null or undefined"), re(h));
    var v = $_(f.data);
    lv(v) || (process.env.NODE_ENV !== "production" && (h = "Transform result data should be array rows or object rows."), re(h));
    var d, p = t[0];
    if (p && c === 0 && !f.dimensions) {
      var m = p.startIndex;
      m && (f.data = p.data.slice(0, m).concat(f.data)), d = {
        seriesLayoutBy: Je,
        sourceHeader: m,
        dimensions: p.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: Je,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return pc(f.data, d, null);
  });
}
function lv(r) {
  return r === Ut || r === Re;
}
var mE = (
  /** @class */
  (function() {
    function r(t) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
    }
    return r.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, r.prototype._setLocalSource = function(t, e) {
      this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, r.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, r.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, r.prototype._createSource = function() {
      this._setLocalSource([], []);
      var t = this._sourceHost, e = this._getUpstreamSourceManagers(), n = !!e.length, i, a;
      if (ta(t)) {
        var o = t, s = void 0, l = void 0, u = void 0;
        if (n) {
          var f = e[0];
          f.prepareSource(), u = f.getSource(), s = u.data, l = u.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), l = Kt(s) ? cr : he, a = [];
        var c = this._getSourceMetaRawOption() || {}, h = u && u.metaRawOption || {}, v = H(c.seriesLayoutBy, h.seriesLayoutBy) || null, d = H(c.sourceHeader, h.sourceHeader), p = H(c.dimensions, h.dimensions), m = v !== h.seriesLayoutBy || !!d != !!h.sourceHeader || p;
        i = m ? [pc(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: p
        }, l)] : [];
      } else {
        var g = t;
        if (n) {
          var y = this._applyTransform(e);
          i = y.sourceList, a = y.upstreamSignList;
        } else {
          var _ = g.get("source", !0);
          i = [pc(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && N(i && a), this._setLocalSource(i, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && N(i != null || n != null), i != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), Np(a));
      }
      var o, s = [], l = [];
      return D(t, function(u) {
        u.prepareSource();
        var f = u.getSource(i || 0), c = "";
        i != null && !f && (process.env.NODE_ENV !== "production" && (c = "Can not retrieve result by `fromTransformResult`: " + i), Np(c)), s.push(f), l.push(u._getVersionSign());
      }), n ? o = pE(n, s, {
        datasetIndex: e.componentIndex
      }) : i != null && (o = [RC(s[0])]), {
        sourceList: o,
        upstreamSignList: l
      };
    }, r.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
        var n = t[e];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()
        )
          return !0;
      }
    }, r.prototype.getSource = function(t) {
      t = t || 0;
      var e = this._sourceList[t];
      if (!e) {
        var n = this._getUpstreamSourceManagers();
        return n[0] && n[0].getSource(t);
      }
      return e;
    }, r.prototype.getSharedDataStore = function(t) {
      process.env.NODE_ENV !== "production" && N(ta(this._sourceHost), "Can only call getDataStore on series source manager.");
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var l = this._getUpstreamSourceManagers()[0];
        ta(this._sourceHost) && l ? s = l._innerGetDataStore(t, e, n) : (s = new gc(), s.initData(new U_(e, t.length), t)), o[n] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (ta(t)) {
        var e = F_(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return Y(NC(t), function(n) {
          return n.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, n, i;
      if (ta(t))
        e = t.get("seriesLayoutBy", !0), n = t.get("sourceHeader", !0), i = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        e = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: e,
        sourceHeader: n,
        dimensions: i
      };
    }, r;
  })()
);
function ta(r) {
  return r.mainType === "series";
}
function Np(r) {
  throw new Error(r);
}
var q = {
  color: {},
  darkColor: {},
  size: {}
}, Et = q.color = {
  theme: ["#5070dd", "#b6d634", "#505372", "#ff994d", "#0ca8df", "#ffd10a", "#fb628b", "#785db0", "#3fbe95"],
  neutral00: "#fff",
  neutral05: "#f4f7fd",
  neutral10: "#e8ebf0",
  neutral15: "#dbdee4",
  neutral20: "#cfd2d7",
  neutral25: "#c3c5cb",
  neutral30: "#b7b9be",
  neutral35: "#aaacb2",
  neutral40: "#9ea0a5",
  neutral45: "#929399",
  neutral50: "#86878c",
  neutral55: "#797b7f",
  neutral60: "#6d6e73",
  neutral65: "#616266",
  neutral70: "#54555a",
  neutral75: "#48494d",
  neutral80: "#3c3c41",
  neutral85: "#303034",
  neutral90: "#232328",
  neutral95: "#17171b",
  neutral99: "#000",
  accent05: "#eff1f9",
  accent10: "#e0e4f2",
  accent15: "#d0d6ec",
  accent20: "#c0c9e6",
  accent25: "#b1bbdf",
  accent30: "#a1aed9",
  accent35: "#91a0d3",
  accent40: "#8292cc",
  accent45: "#7285c6",
  accent50: "#6578ba",
  accent55: "#5c6da9",
  accent60: "#536298",
  accent65: "#4a5787",
  accent70: "#404c76",
  accent75: "#374165",
  accent80: "#2e3654",
  accent85: "#252b43",
  accent90: "#1b2032",
  accent95: "#121521",
  transparent: "rgba(0,0,0,0)",
  highlight: "rgba(255,231,130,0.8)"
};
k(Et, {
  primary: Et.neutral80,
  secondary: Et.neutral70,
  tertiary: Et.neutral60,
  quaternary: Et.neutral50,
  disabled: Et.neutral20,
  border: Et.neutral30,
  borderTint: Et.neutral20,
  borderShade: Et.neutral40,
  background: Et.neutral05,
  backgroundTint: "rgba(234,237,245,0.5)",
  backgroundTransparent: "rgba(255,255,255,0)",
  backgroundShade: Et.neutral10,
  shadow: "rgba(0,0,0,0.2)",
  shadowTint: "rgba(129,130,136,0.2)",
  axisLine: Et.neutral70,
  axisLineTint: Et.neutral40,
  axisTick: Et.neutral70,
  axisTickMinor: Et.neutral60,
  axisLabel: Et.neutral70,
  axisSplitLine: Et.neutral15,
  axisMinorSplitLine: Et.neutral05
});
for (var dn in Et)
  if (Et.hasOwnProperty(dn)) {
    var kp = Et[dn];
    dn === "theme" ? q.darkColor.theme = Et.theme.slice() : dn === "highlight" ? q.darkColor.highlight = "rgba(255,231,130,0.4)" : dn.indexOf("accent") === 0 ? q.darkColor[dn] = Xf(kp, null, function(r) {
      return r * 0.5;
    }, function(r) {
      return Math.min(1, 1.3 - r);
    }) : q.darkColor[dn] = Xf(kp, null, function(r) {
      return r * 0.9;
    }, function(r) {
      return 1 - Math.pow(r, 1.5);
    });
  }
q.size = {
  xxs: 2,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50
};
var yE = "line-height:1";
function y0(r) {
  var t = r.lineHeight;
  return t == null ? yE : "line-height:" + ne(t + "") + "px";
}
function _0(r, t) {
  var e = r.color || q.color.tertiary, n = r.fontSize || 12, i = r.fontWeight || "400", a = r.color || q.color.secondary, o = r.fontSize || 14, s = r.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + ne(n + "") + "px;color:" + ne(e) + ";font-weight:" + ne(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + ne(o + "") + "px;color:" + ne(a) + ";font-weight:" + ne(s + "")
  } : {
    nameStyle: {
      fontSize: n,
      fill: e,
      fontWeight: i
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var _E = [0, 10, 20, 30], bE = ["", `
`, `

`, `


`];
function Rn(r, t) {
  return t.type = r, t;
}
function Sc(r) {
  return r.type === "section";
}
function b0(r) {
  return Sc(r) ? SE : wE;
}
function S0(r) {
  if (Sc(r)) {
    var t = 0, e = r.blocks.length, n = e > 1 || e > 0 && !r.noHeader;
    return D(r.blocks, function(i) {
      var a = S0(i);
      a >= t && (t = a + +(n && // 0 always can not be readable gap level.
      (!a || Sc(i) && !i.noHeader)));
    }), t;
  }
  return 0;
}
function SE(r, t, e, n) {
  var i = t.noHeader, a = xE(S0(t)), o = [], s = t.blocks || [];
  N(!s || B(s)), s = s || [];
  var l = r.orderMode;
  if (t.sortBlocks && l) {
    s = s.slice();
    var u = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (fe(u, l)) {
      var f = new XC(u[l], null);
      s.sort(function(p, m) {
        return f.evaluate(p.sortParam, m.sortParam);
      });
    } else l === "seriesDesc" && s.reverse();
  }
  D(s, function(p, m) {
    var g = t.valueFormatter, y = b0(p)(
      // Inherit valueFormatter
      g ? k(k({}, r), {
        valueFormatter: g
      }) : r,
      p,
      m > 0 ? a.html : 0,
      n
    );
    y != null && o.push(y);
  });
  var c = r.renderMode === "richText" ? o.join(a.richText) : wc(n, o.join(""), i ? e : a.html);
  if (i)
    return c;
  var h = bc(t.header, "ordinal", r.useUTC), v = _0(n, r.renderMode).nameStyle, d = y0(n);
  return r.renderMode === "richText" ? w0(r, h, v) + a.richText + c : wc(n, '<div style="' + v + ";" + d + ';">' + ne(h) + "</div>" + c, e);
}
function wE(r, t, e, n) {
  var i = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, l = t.name, u = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(b) {
    return b = B(b) ? b : [b], Y(b, function(S, w) {
      return bc(S, B(v) ? v[w] : v, u);
    });
  };
  if (!(a && o)) {
    var c = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || q.color.secondary, i), h = a ? "" : bc(l, "ordinal", u), v = t.valueType, d = o ? [] : f(t.value, t.rawDataIndex), p = !s || !a, m = !s && a, g = _0(n, i), y = g.nameStyle, _ = g.valueStyle;
    return i === "richText" ? (s ? "" : c) + (a ? "" : w0(r, h, y)) + (o ? "" : DE(r, d, p, m, _)) : wc(n, (s ? "" : c) + (a ? "" : TE(h, !s, y)) + (o ? "" : CE(d, p, m, _)), e);
  }
}
function Rp(r, t, e, n, i, a) {
  if (r) {
    var o = b0(r), s = {
      useUTC: i,
      renderMode: e,
      orderMode: n,
      markupStyleCreator: t,
      valueFormatter: r.valueFormatter
    };
    return o(s, r, 0, a);
  }
}
function xE(r) {
  return {
    html: _E[r],
    richText: bE[r]
  };
}
function wc(r, t, e) {
  var n = '<div style="clear:both"></div>', i = "margin: " + e + "px 0 0", a = y0(r);
  return '<div style="' + i + ";" + a + ';">' + t + n + "</div>";
}
function TE(r, t, e) {
  var n = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + n + '">' + ne(r) + "</span>";
}
function CE(r, t, e, n) {
  var i = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
  return r = B(r) ? r : [r], '<span style="' + a + ";" + n + '">' + Y(r, function(o) {
    return ne(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function w0(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function DE(r, t, e, n, i) {
  var a = [i], o = n ? 10 : 20;
  return e && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), r.markupStyleCreator.wrapRichTextStyle(B(t) ? t.join("  ") : t, a);
}
function EE(r, t) {
  var e = r.getData().getItemVisual(t, "style"), n = e[r.visualDrawType];
  return kn(n);
}
function x0(r, t) {
  var e = r.get("padding");
  return e ?? (t === "richText" ? [8, 10] : 10);
}
var Yu = (
  /** @class */
  (function() {
    function r() {
      this.richTextStyles = {}, this._nextStyleNameId = Qy();
    }
    return r.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, r.prototype.makeTooltipMarker = function(t, e, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = QD({
        color: e,
        type: t,
        renderMode: n,
        markerId: i
      });
      return $(a) ? a : (process.env.NODE_ENV !== "production" && N(i), this.richTextStyles[i] = a.style, a.content);
    }, r.prototype.wrapRichTextStyle = function(t, e) {
      var n = {};
      B(e) ? D(e, function(a) {
        return k(n, a);
      }) : k(n, e);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
    }, r;
  })()
);
function AE(r) {
  var t = r.series, e = r.dataIndex, n = r.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), l = B(s), u = EE(t, e), f, c, h, v;
  if (o > 1 || l && !o) {
    var d = ME(s, t, e, a, u);
    f = d.inlineValues, c = d.inlineValueTypes, h = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var p = i.getDimensionInfo(a[0]);
    v = f = Pi(i, e, a[0]), c = p.type;
  } else
    v = f = l ? s[0] : s;
  var m = xh(t), g = m && t.name || "", y = i.getName(e), _ = n ? g : y;
  return Rn("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !m,
    sortParam: v,
    blocks: [Rn("nameValue", {
      markerType: "item",
      markerColor: u,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !We(_),
      value: f,
      valueType: c,
      rawDataIndex: i.getRawIndex(e)
    })].concat(h || [])
  });
}
function ME(r, t, e, n, i) {
  var a = t.getData(), o = Vi(r, function(c, h, v) {
    var d = a.getDimensionInfo(v);
    return c = c || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], l = [], u = [];
  n.length ? D(n, function(c) {
    f(Pi(a, e, c), c);
  }) : D(r, f);
  function f(c, h) {
    var v = a.getDimensionInfo(h);
    !v || v.otherDims.tooltip === !1 || (o ? u.push(Rn("nameValue", {
      markerType: "subItem",
      markerColor: i,
      name: v.displayName,
      value: c,
      valueType: v.type
    })) : (s.push(c), l.push(v.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: l,
    blocks: u
  };
}
var wr = dt();
function zo(r, t) {
  return r.getName(t) || r.getId(t);
}
var LE = "__universalTransitionEnabled", Fr = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = Ia({
        count: PE,
        reset: OE
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, i);
      var a = wr(this).sourceManager = new mE(this);
      a.prepareSource();
      var o = this.getInitialData(e, i);
      Vp(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && N(o, "getInitialData returned invalid data."), wr(this).dataBeforeProcessed = o, Bp(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = Ya(this), a = i ? fo(e) : {}, o = this.subType;
      ft.hasClass(o) && (o += "Series"), ht(e, n.getTheme().get(this.subType)), ht(e, this.getDefaultOption()), ic(e, "label", ["show"]), this.fillDataTextStyle(e.data), i && Vr(e, a, i);
    }, t.prototype.mergeOption = function(e, n) {
      e = ht(this.option, e, !0), this.fillDataTextStyle(e.data);
      var i = Ya(this);
      i && Vr(this.option, e, i);
      var a = wr(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, n);
      Vp(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, wr(this).dataBeforeProcessed = o, Bp(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !Kt(e))
        for (var n = ["show"], i = 0; i < e.length; i++)
          e[i] && e[i].label && ic(e[i], "label", n);
    }, t.prototype.getInitialData = function(e, n) {
    }, t.prototype.appendData = function(e) {
      var n = this.getRawData();
      n.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var n = xc(this);
      if (n) {
        var i = n.context.data;
        return e == null || !i.getLinkedData ? i : i.getLinkedData(e);
      } else
        return wr(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var n = xc(this);
      if (n) {
        var i = n.context;
        i.outputData = e, n !== this.dataTask && (i.data = e);
      }
      wr(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return Q(e);
    }, t.prototype.getSourceManager = function() {
      return wr(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return wr(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.indicesOfNearest = function(e, n, i, a) {
      var o = this.getData(), s = this.coordinateSystem, l = s && s.getAxis(e);
      if (!s || !l)
        return [];
      var u = l.dataToCoord(i);
      a == null && (a = 1 / 0);
      for (var f = [], c = 1 / 0, h = -1, v = 0, d = o.getDimensionIndex(n), p = o.getStore(), m = 0, g = p.count(); m < g; m++) {
        var y = p.get(d, m), _ = l.dataToCoord(y), b = u - _, S = Math.abs(b);
        S <= a && ((S < c || S === c && b >= 0 && h < 0) && (c = S, h = b, v = 0), b === h && (f[v++] = m));
      }
      return f.length = v, f;
    }, t.prototype.formatTooltip = function(e, n, i) {
      return AE({
        series: this,
        dataIndex: e,
        multipleSeries: n
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if (tt.node && !(e && e.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, n, i) {
      var a = this.ecModel, o = ov.prototype.getColorFromPalette.call(this, e, n, i);
      return o || (o = a.getColorFromPalette(e, n, i)), o;
    }, t.prototype.coordDimToDataDim = function(e) {
      return this.getRawData().mapDimensionsAll(e);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(e, n) {
      this._innerSelect(this.getData(n), e);
    }, t.prototype.unselect = function(e, n) {
      var i = this.option.selectedMap;
      if (i) {
        var a = this.option.selectedMode, o = this.getData(n);
        if (a === "series" || i === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < e.length; s++) {
          var l = e[s], u = zo(o, l);
          i[u] = !1, this._selectedDataIndicesMap[u] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(e, n) {
      for (var i = [], a = 0; a < e.length; a++)
        i[0] = e[a], this.isSelected(e[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var e = this._selectedDataIndicesMap, n = St(e), i = [], a = 0; a < n.length; a++) {
        var o = e[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, t.prototype.isSelected = function(e, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[zo(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[LE])
        return !0;
      var e = this.option.universalTransition;
      return e ? e === !0 ? !0 : e && e.enabled : !1;
    }, t.prototype._innerSelect = function(e, n) {
      var i, a, o = this.option, s = o.selectedMode, l = n.length;
      if (!(!s || !l)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          X(o.selectedMap) || (o.selectedMap = {});
          for (var u = o.selectedMap, f = 0; f < l; f++) {
            var c = n[f], h = zo(e, c);
            u[h] = !0, this._selectedDataIndicesMap[h] = e.getRawIndex(c);
          }
        } else if (s === "single" || s === !0) {
          var v = n[l - 1], h = zo(e, v);
          o.selectedMap = (i = {}, i[h] = !0, i), this._selectedDataIndicesMap = (a = {}, a[h] = e.getRawIndex(v), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(e) {
      if (!this.option.selectedMap) {
        var n = [];
        e.hasItemOption && e.each(function(i) {
          var a = e.getRawDataItem(i);
          a && a.selected && n.push(i);
        }), n.length > 0 && this._innerSelect(e, n);
      }
    }, t.registerClass = function(e) {
      return ft.registerClass(e);
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
    })(), t;
  })(ft)
);
ke(Fr, sv);
ke(Fr, ov);
by(Fr, ft);
function Bp(r) {
  var t = r.name;
  xh(r) || (r.name = IE(r) || t);
}
function IE(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), n = [];
  return D(e, function(i) {
    var a = t.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function PE(r) {
  return r.model.getRawData().count();
}
function OE(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), NE;
}
function NE(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function Vp(r, t) {
  D(PS(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, _t(kE, t));
  });
}
function kE(r, t) {
  var e = xc(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function xc(r) {
  var t = (r.ecModel || {}).scheduler, e = t && t.getPipeline(r.uid);
  if (e) {
    var n = e.currentTask;
    if (n) {
      var i = n.agentStubMap;
      i && (n = i.get(r.uid));
    }
    return n;
  }
}
var RE = mt.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    r.moveTo(e, n - a), r.lineTo(e + i, n + a), r.lineTo(e - i, n + a), r.closePath();
  }
}), BE = mt.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    r.moveTo(e, n - a), r.lineTo(e + i, n), r.lineTo(e, n + a), r.lineTo(e - i, n), r.closePath();
  }
}), VE = mt.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.x, n = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), l = n - a + o + s, u = Math.asin(s / o), f = Math.cos(u) * o, c = Math.sin(u), h = Math.cos(u), v = o * 0.6, d = o * 0.7;
    r.moveTo(e - f, l + s), r.arc(e, l, o, Math.PI - u, Math.PI * 2 + u), r.bezierCurveTo(e + f - c * v, l + s + h * v, e, n - d, e, n), r.bezierCurveTo(e, n - d, e - f + c * v, l + s + h * v, e - f, l + s), r.closePath();
  }
}), FE = mt.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.height, n = t.width, i = t.x, a = t.y, o = n / 3 * 2;
    r.moveTo(i, a), r.lineTo(i + o, a + e), r.lineTo(i, a + e / 4 * 3), r.lineTo(i - o, a + e), r.lineTo(i, a), r.closePath();
  }
}), zE = {
  line: pr,
  rect: Pt,
  roundRect: Pt,
  square: Pt,
  circle: Rl,
  diamond: BE,
  pin: VE,
  arrow: FE,
  triangle: RE
}, HE = {
  line: function(r, t, e, n, i) {
    i.x1 = r, i.y1 = t + n / 2, i.x2 = r + e, i.y2 = t + n / 2;
  },
  rect: function(r, t, e, n, i) {
    i.x = r, i.y = t, i.width = e, i.height = n;
  },
  roundRect: function(r, t, e, n, i) {
    i.x = r, i.y = t, i.width = e, i.height = n, i.r = Math.min(e, n) / 4;
  },
  square: function(r, t, e, n, i) {
    var a = Math.min(e, n);
    i.x = r, i.y = t, i.width = a, i.height = a;
  },
  circle: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.r = Math.min(e, n) / 2;
  },
  diamond: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.width = e, i.height = n;
  },
  pin: function(r, t, e, n, i) {
    i.x = r + e / 2, i.y = t + n / 2, i.width = e, i.height = n;
  },
  arrow: function(r, t, e, n, i) {
    i.x = r + e / 2, i.y = t + n / 2, i.width = e, i.height = n;
  },
  triangle: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.width = e, i.height = n;
  }
}, Tc = {};
D(zE, function(r, t) {
  Tc[t] = new r();
});
var $E = mt.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var n = Ey(r, t, e), i = this.shape;
    return i && i.symbolType === "pin" && t.position === "inside" && (n.y = e.y + e.height * 0.4), n;
  },
  buildPath: function(r, t, e) {
    var n = t.symbolType;
    if (n !== "none") {
      var i = Tc[n];
      i || (n = "rect", i = Tc[n]), HE[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(r, i.shape, e);
    }
  }
});
function GE(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || q.color.neutral00, e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function Bn(r, t, e, n, i, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var l;
  return r.indexOf("image://") === 0 ? l = M_(r.slice(8), new J(t, e, n, i), o ? "center" : "cover") : r.indexOf("path://") === 0 ? l = Vh(r.slice(7), {}, new J(t, e, n, i), o ? "center" : "cover") : l = new $E({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: n,
      height: i
    }
  }), l.__isEmptyBrush = s, l.setColor = GE, a && l.setColor(a), l;
}
function uv(r) {
  return B(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
}
function Kl(r, t) {
  if (r != null)
    return B(r) || (r = [r, r]), [te(r[0], t[0]) || 0, te(H(r[1], r[0]), t[1]) || 0];
}
var UE = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.hasSymbolVisual = !0, e;
    }
    return t.prototype.getInitialData = function(e) {
      if (process.env.NODE_ENV !== "production") {
        var n = e.coordinateSystem;
        if (n !== "polar" && n !== "cartesian2d")
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
      }
      return wD(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getLegendIcon = function(e) {
      var n = new Ot(), i = Bn("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
      n.add(i), i.setStyle(e.lineStyle);
      var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, l = e.itemHeight * 0.8, u = Bn(s, (e.itemWidth - l) / 2, (e.itemHeight - l) / 2, l, l, e.itemStyle.fill);
      n.add(u), u.setStyle(e.itemStyle);
      var f = e.iconRotate === "inherit" ? o : e.iconRotate || 0;
      return u.rotation = f * Math.PI / 180, u.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), s.indexOf("empty") > -1 && (u.style.stroke = u.style.fill, u.style.fill = q.color.neutral00, u.style.lineWidth = 2), n;
    }, t.type = "series.line", t.dependencies = ["grid", "polar"], t.defaultOption = {
      // zlevel: 0,
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: {
        position: "top"
      },
      // itemStyle: {
      // },
      endLabel: {
        show: !1,
        valueAnimation: !0,
        distance: 8
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      emphasis: {
        scale: !0
      },
      // areaStyle: {
      // origin of areaStyle. Valid values:
      // `'auto'/null/undefined`: from axisLine to data
      // `'start'`: from min to data
      // `'end'`: from data to max
      // origin: 'auto'
      // },
      // false, 'start', 'end', 'middle'
      step: !1,
      // Disabled if step is true
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 6,
      symbolRotate: null,
      showSymbol: !0,
      // `false`: follow the label interval strategy.
      // `true`: show all symbols.
      // `'auto'`: If possible, show all symbols, otherwise
      //           follow the label interval strategy.
      showAllSymbol: "auto",
      // Whether to connect break point. (non-finite values)
      connectNulls: !1,
      // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
      sampling: "none",
      animationEasing: "linear",
      // Disable progressive
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: {
        divideShape: "clone"
      },
      /**
       * @deprecated
       */
      triggerLineEvent: !1,
      triggerEvent: !1
    }, t;
  })(Fr)
);
function T0(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel"), n = e.length;
  if (n === 1) {
    var i = Pi(r, t, e[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < e.length; o++)
      a.push(Pi(r, t, e[o]));
    return a.join(" ");
  }
}
function WE(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel");
  if (!B(t))
    return t + "";
  for (var n = [], i = 0; i < e.length; i++) {
    var a = r.getDimensionIndex(e[i]);
    a >= 0 && n.push(t[a]);
  }
  return n.join(" ");
}
var fv = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e, n, i, a) {
      var o = r.call(this) || this;
      return o.updateData(e, n, i, a), o;
    }
    return t.prototype._createSymbol = function(e, n, i, a, o, s) {
      this.removeAll();
      var l = Bn(e, -1, -1, 2, 2, null, s);
      l.attr({
        z2: H(o, 100),
        culling: !0,
        scaleX: a[0] / 2,
        scaleY: a[1] / 2
      }), l.drift = YE, this._symbolType = e, this.add(l);
    }, t.prototype.stopSymbolAnimation = function(e) {
      this.childAt(0).stopAnimation(null, e);
    }, t.prototype.getSymbolType = function() {
      return this._symbolType;
    }, t.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, t.prototype.highlight = function() {
      za(this.childAt(0));
    }, t.prototype.downplay = function() {
      Ha(this.childAt(0));
    }, t.prototype.setZ = function(e, n) {
      var i = this.childAt(0);
      i.zlevel = e, i.z = n;
    }, t.prototype.setDraggable = function(e, n) {
      var i = this.childAt(0);
      i.draggable = e, i.cursor = !n && e ? "move" : i.cursor;
    }, t.prototype.updateData = function(e, n, i, a) {
      this.silent = !1;
      var o = e.getItemVisual(n, "symbol") || "circle", s = e.hostModel, l = t.getSymbolSize(e, n), u = t.getSymbolZ2(e, n), f = o !== this._symbolType, c = a && a.disableAnimation;
      if (f) {
        var h = e.getItemVisual(n, "symbolKeepAspect");
        this._createSymbol(o, e, n, l, u, h);
      } else {
        var v = this.childAt(0);
        v.silent = !1;
        var d = {
          scaleX: l[0] / 2,
          scaleY: l[1] / 2
        };
        c ? v.attr(d) : gr(v, d, s, n), eC(v);
      }
      if (this._updateCommon(e, n, l, i, a), f) {
        var v = this.childAt(0);
        if (!c) {
          var d = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: v.style.opacity
            }
          };
          v.scaleX = v.scaleY = 0, v.style.opacity = 0, $i(v, d, s, n);
        }
      }
      c && this.childAt(0).stopAnimation("leave");
    }, t.prototype._updateCommon = function(e, n, i, a, o) {
      var s = this.childAt(0), l = e.hostModel, u, f, c, h, v, d, p, m, g;
      if (a && (u = a.emphasisItemStyle, f = a.blurItemStyle, c = a.selectItemStyle, h = a.focus, v = a.blurScope, p = a.labelStatesModels, m = a.hoverScale, g = a.cursorStyle, d = a.emphasisDisabled), !a || e.hasItemOption) {
        var y = a && a.itemModel ? a.itemModel : e.getItemModel(n), _ = y.getModel("emphasis");
        u = _.getModel("itemStyle").getItemStyle(), c = y.getModel(["select", "itemStyle"]).getItemStyle(), f = y.getModel(["blur", "itemStyle"]).getItemStyle(), h = _.get("focus"), v = _.get("blurScope"), d = _.get("disabled"), p = uo(y), m = _.getShallow("scale"), g = y.getShallow("cursor");
      }
      var b = e.getItemVisual(n, "symbolRotate");
      s.attr("rotation", (b || 0) * Math.PI / 180 || 0);
      var S = Kl(e.getItemVisual(n, "symbolOffset"), i);
      S && (s.x = S[0], s.y = S[1]), g && s.attr("cursor", g);
      var w = e.getItemVisual(n, "style"), x = w.fill;
      if (s instanceof Gr) {
        var E = s.style;
        s.useStyle(k({
          // TODO other properties like x, y ?
          image: E.image,
          x: E.x,
          y: E.y,
          width: E.width,
          height: E.height
        }, w));
      } else
        s.__isEmptyBrush ? s.useStyle(k({}, w)) : s.useStyle(w), s.style.decal = null, s.setColor(x, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var T = e.getItemVisual(n, "liftZ"), C = this._z2;
      T != null ? C == null && (this._z2 = s.z2, s.z2 += T) : C != null && (s.z2 = C, this._z2 = null);
      var A = o && o.useNameLabel;
      Ul(s, p, {
        labelFetcher: l,
        labelDataIndex: n,
        defaultText: L,
        inheritColor: x,
        defaultOpacity: w.opacity
      });
      function L(O) {
        return A ? e.getName(O) : T0(e, O);
      }
      this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
      var M = s.ensureState("emphasis");
      M.style = u, s.ensureState("select").style = c, s.ensureState("blur").style = f;
      var I = m == null || m === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(m) && m > 0 ? +m : 1;
      M.scaleX = this._sizeX * I, M.scaleY = this._sizeY * I, this.setSymbolScale(1), Gs(this, h, v, d);
    }, t.prototype.setSymbolScale = function(e) {
      this.scaleX = this.scaleY = e;
    }, t.prototype.fadeOut = function(e, n, i) {
      var a = this.childAt(0), o = ct(this).dataIndex, s = i && i.animation;
      if (this.silent = a.silent = !0, i && i.fadeLabel) {
        var l = a.getTextContent();
        l && Us(l, {
          style: {
            opacity: 0
          }
        }, n, {
          dataIndex: o,
          removeOpt: s,
          cb: function() {
            a.removeTextContent();
          }
        });
      } else
        a.removeTextContent();
      Us(a, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, n, {
        dataIndex: o,
        cb: e,
        removeOpt: s
      });
    }, t.getSymbolSize = function(e, n) {
      return uv(e.getItemVisual(n, "symbolSize"));
    }, t.getSymbolZ2 = function(e, n) {
      return e.getItemVisual(n, "z2");
    }, t;
  })(Ot)
);
function YE(r, t) {
  this.parent.drift(r, t);
}
function Ho(r, t, e, n) {
  return t && !isNaN(t[0]) && !isNaN(t[1]) && !(n && n.isIgnore && n.isIgnore(e)) && !(n && n.clipShape && !n.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none";
}
function Fp(r) {
  return r != null && !X(r) && (r = {
    isIgnore: r
  }), r || {};
}
function zp(r) {
  var t = r.hostModel, e = t.getModel("emphasis");
  return {
    emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
    blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: e.get("focus"),
    blurScope: e.get("blurScope"),
    emphasisDisabled: e.get("disabled"),
    hoverScale: e.get("scale"),
    labelStatesModels: uo(t),
    cursorStyle: t.get("cursor")
  };
}
function Hp(r, t, e, n, i, a, o) {
  var s = new r(t, e, n, i);
  return s.setPosition(a), t.setItemGraphicEl(e, s), o.add(s), s;
}
var C0 = (
  /** @class */
  (function() {
    function r(t) {
      this.group = new Ot(), this._SymbolCtor = t || fv;
    }
    return r.prototype.updateData = function(t, e) {
      this._progressiveEls = null, e = Fp(e);
      var n = this.group, i = t.hostModel, a = this._data, o = this._SymbolCtor, s = e.disableAnimation, l = this._seriesScope = zp(t), u = {
        disableAnimation: s
      }, f = e.getSymbolPoint || function(c) {
        return t.getItemLayout(c);
      };
      a || n.removeAll(), t.diff(a).add(function(c) {
        var h = f(c);
        Ho(t, h, c, e) && Hp(o, t, c, l, u, h, n);
      }).update(function(c, h) {
        var v = a.getItemGraphicEl(h), d = f(c);
        if (!Ho(t, d, c, e)) {
          n.remove(v);
          return;
        }
        var p = t.getItemVisual(c, "symbol") || "circle", m = v && v.getSymbolType && v.getSymbolType();
        if (!v || m && m !== p)
          n.remove(v), v = new o(t, c, l, u), v.setPosition(d);
        else {
          v.updateData(t, c, l, u);
          var g = {
            x: d[0],
            y: d[1]
          };
          s ? v.attr(g) : gr(v, g, i);
        }
        n.add(v), t.setItemGraphicEl(c, v);
      }).remove(function(c) {
        var h = a.getItemGraphicEl(c);
        h && h.fadeOut(function() {
          n.remove(h);
        }, i);
      }).execute(), this._getSymbolPoint = f, this._data = t;
    }, r.prototype.updateLayout = function(t) {
      var e = this._data;
      if (e)
        for (var n = this, i = e.getStore(), a = 0, o = i.count(); a < o; a++) {
          var s = e.getItemGraphicEl(a), l = n._getSymbolPoint(a);
          Ho(e, l, a, t) ? (s = s || Hp(n._SymbolCtor, e, a, n._seriesScope, {
            disableAnimation: !0
          }, l, n.group), s.stopAnimation(), s.setPosition(l), s.markRedraw()) : s && (n.group.remove(s), e.setItemGraphicEl(a, null));
        }
    }, r.prototype.incrementalPrepareUpdate = function(t) {
      this._seriesScope = zp(t), this._data = null, this.group.removeAll();
    }, r.prototype.incrementalUpdate = function(t, e, n, i) {
      this._progressiveEls = [], i = Fp(i);
      function a(u) {
        u.isGroup || (u.incremental = n, u.ensureState("emphasis").hoverLayer = zl);
      }
      for (var o = t.start; o < t.end; o++) {
        var s = e.getItemLayout(o);
        if (Ho(e, s, o, i)) {
          var l = new this._SymbolCtor(e, o, this._seriesScope);
          l.traverse(a), l.setPosition(s), this.group.add(l), e.setItemGraphicEl(o, l), this._progressiveEls.push(l);
        }
      }
    }, r.prototype.eachRendered = function(t) {
      $l(this._progressiveEls || this.group, t);
    }, r.prototype.remove = function(t) {
      var e = this.group, n = this._data;
      n && t ? n.eachItemGraphicEl(function(i) {
        i.fadeOut(function() {
          e.remove(i);
        }, n.hostModel);
      }) : e.removeAll();
    }, r;
  })()
);
function D0(r, t, e) {
  var n = r.getBaseAxis(), i = r.getOtherAxis(n), a = XE(i, e), o = n.dim, s = i.dim, l = t.mapDimension(s), u = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, c = Y(r.dimensions, function(d) {
    return t.mapDimension(d);
  }), h = !1, v = t.getCalculationInfo("stackResultDimension");
  return Oi(
    t,
    c[0]
    /* , dims[1] */
  ) && (h = !0, c[0] = v), Oi(
    t,
    c[1]
    /* , dims[0] */
  ) && (h = !0, c[1] = v), {
    dataDimsForPoint: c,
    valueStart: a,
    valueAxisDim: s,
    baseAxisDim: o,
    stacked: !!h,
    valueDim: l,
    baseDim: u,
    baseDataOffset: f,
    stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
  };
}
function XE(r, t) {
  var e = 0, n = r.scale.getExtent();
  return t === "start" ? e = n[0] : t === "end" ? e = n[1] : wt(t) && !isNaN(t) ? e = t : n[0] > 0 ? e = n[0] : n[1] < 0 && (e = n[1]), e;
}
function E0(r, t, e, n) {
  var i = NaN;
  r.stacked && (i = e.get(e.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = r.valueStart);
  var a = r.baseDataOffset, o = [];
  return o[a] = e.get(r.baseDim, n), o[1 - a] = i, t.dataToPoint(o);
}
function Ae(r, t) {
  return !isFinite(r) || !isFinite(t);
}
var ZE = typeof Float32Array !== lo ? Float32Array : void 0;
function hi(r) {
  return qE({
    ctor: ZE
  }, r).arr;
}
function qE(r, t) {
  process.env.NODE_ENV !== "production" && N(t != null && isFinite(t) && t >= 0 && r.hasOwnProperty("ctor"));
  var e = r.arr, n = r.ctor;
  if (t > Bd && (t = Bd), !e || r.typed && e.length < t) {
    var i = void 0;
    if (n)
      try {
        i = new n(t), r.typed = !0, e && i.set(e);
      } catch (s) {
        process.env.NODE_ENV !== "production" && ut(s);
      }
    if (!i && (i = [], r.typed = !1, e))
      for (var a = 0, o = e.length; a < o; a++)
        i[a] = e[a];
    r.arr = i;
  }
  return r;
}
function KE(r, t) {
  var e = [];
  return t.diff(r).add(function(n) {
    e.push({
      cmd: "+",
      idx: n
    });
  }).update(function(n, i) {
    e.push({
      cmd: "=",
      idx: i,
      idx1: n
    });
  }).remove(function(n) {
    e.push({
      cmd: "-",
      idx: n
    });
  }).execute(), e;
}
function QE(r, t, e, n, i, a, o, s) {
  for (var l = KE(r, t), u = [], f = [], c = [], h = [], v = [], d = [], p = [], m = D0(i, t, o), g = r.getLayout("points") || [], y = t.getLayout("points") || [], _ = 0; _ < l.length; _++) {
    var b = l[_], S = !0, w = void 0, x = void 0;
    switch (b.cmd) {
      case "=":
        w = b.idx * 2, x = b.idx1 * 2;
        var E = g[w], T = g[w + 1], C = y[x], A = y[x + 1];
        (isNaN(E) || isNaN(T)) && (E = C, T = A), u.push(E, T), f.push(C, A), c.push(e[w], e[w + 1]), h.push(n[x], n[x + 1]), p.push(t.getRawIndex(b.idx1));
        break;
      case "+":
        var L = b.idx, M = m.dataDimsForPoint, I = i.dataToPoint([t.get(M[0], L), t.get(M[1], L)]);
        x = L * 2, u.push(I[0], I[1]), f.push(y[x], y[x + 1]);
        var O = E0(m, i, t, L);
        c.push(O[0], O[1]), h.push(n[x], n[x + 1]), p.push(t.getRawIndex(L));
        break;
      case "-":
        S = !1;
    }
    S && (v.push(b), d.push(d.length));
  }
  d.sort(function(nt, at) {
    return p[nt] - p[at];
  });
  for (var P = u.length, F = hi(P), G = hi(P), U = hi(P), j = hi(P), K = [], _ = 0; _ < d.length; _++) {
    var et = d[_], Z = _ * 2, z = et * 2;
    F[Z] = u[z], F[Z + 1] = u[z + 1], G[Z] = f[z], G[Z + 1] = f[z + 1], U[Z] = c[z], U[Z + 1] = c[z + 1], j[Z] = h[z], j[Z + 1] = h[z + 1], K[_] = v[et];
  }
  return {
    current: F,
    next: G,
    stackedOnCurrent: U,
    stackedOnNext: j,
    status: K
  };
}
var xr = Math.min, Tr = Math.max;
function Cc(r, t, e, n, i, a, o, s, l) {
  for (var u, f, c, h, v, d, p = e, m = 0; m < n; m++) {
    var g = t[p * 2], y = t[p * 2 + 1];
    if (p >= i || p < 0)
      break;
    if (Ae(g, y)) {
      if (l) {
        p += a;
        continue;
      }
      break;
    }
    if (p === e)
      r[a > 0 ? "moveTo" : "lineTo"](g, y), c = g, h = y;
    else {
      var _ = g - u, b = y - f;
      if (_ * _ + b * b < 0.5) {
        p += a;
        continue;
      }
      if (o > 0) {
        for (var S = p + a, w = t[S * 2], x = t[S * 2 + 1]; w === g && x === y && m < n; )
          m++, S += a, p += a, w = t[S * 2], x = t[S * 2 + 1], g = t[p * 2], y = t[p * 2 + 1], _ = g - u, b = y - f;
        var E = m + 1;
        if (l)
          for (; Ae(w, x) && E < n; )
            E++, S += a, w = t[S * 2], x = t[S * 2 + 1];
        var T = 0.5, C = 0, A = 0, L = void 0, M = void 0;
        if (E >= n || Ae(w, x))
          v = g, d = y;
        else {
          C = w - u, A = x - f;
          var I = g - u, O = w - g, P = y - f, F = x - y, G = void 0, U = void 0;
          if (s === "x") {
            G = Math.abs(I), U = Math.abs(O);
            var j = C > 0 ? 1 : -1;
            v = g - j * G * o, d = y, L = g + j * U * o, M = y;
          } else if (s === "y") {
            G = Math.abs(P), U = Math.abs(F);
            var K = A > 0 ? 1 : -1;
            v = g, d = y - K * G * o, L = g, M = y + K * U * o;
          } else
            G = Math.sqrt(I * I + P * P), U = Math.sqrt(O * O + F * F), T = U / (U + G), v = g - C * o * (1 - T), d = y - A * o * (1 - T), L = g + C * o * T, M = y + A * o * T, L = xr(L, Tr(w, g)), M = xr(M, Tr(x, y)), L = Tr(L, xr(w, g)), M = Tr(M, xr(x, y)), C = L - g, A = M - y, v = g - C * G / U, d = y - A * G / U, v = xr(v, Tr(u, g)), d = xr(d, Tr(f, y)), v = Tr(v, xr(u, g)), d = Tr(d, xr(f, y)), C = g - v, A = y - d, L = g + C * U / G, M = y + A * U / G;
        }
        r.bezierCurveTo(c, h, v, d, g, y), c = L, h = M;
      } else
        r.lineTo(g, y);
    }
    u = g, f = y, p += a;
  }
  return m;
}
var A0 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return r;
  })()
), jE = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "ec-polyline", n;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: q.color.neutral99,
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new A0();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = 0, o = i.length / 2;
      if (n.connectNulls) {
        for (; o > 0 && Ae(i[o * 2 - 2], i[o * 2 - 1]); o--)
          ;
        for (; a < o && Ae(i[a * 2], i[a * 2 + 1]); a++)
          ;
      }
      for (; a < o; )
        a += Cc(e, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
    }, t.prototype.getPointOn = function(e, n) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var i = this.path, a = i.data, o = Pn.CMD, s, l, u = n === "x", f = [], c = 0; c < a.length; ) {
        var h = a[c++], v = void 0, d = void 0, p = void 0, m = void 0, g = void 0, y = void 0, _ = void 0;
        switch (h) {
          case o.M:
            s = a[c++], l = a[c++];
            break;
          case o.L:
            if (v = a[c++], d = a[c++], _ = u ? (e - s) / (v - s) : (e - l) / (d - l), _ <= 1 && _ >= 0) {
              var b = u ? (d - l) * _ + l : (v - s) * _ + s;
              return u ? [e, b] : [b, e];
            }
            s = v, l = d;
            break;
          case o.C:
            v = a[c++], d = a[c++], p = a[c++], m = a[c++], g = a[c++], y = a[c++];
            var S = u ? Ps(s, v, p, g, e, f) : Ps(l, d, m, y, e, f);
            if (S > 0)
              for (var w = 0; w < S; w++) {
                var x = f[w];
                if (x <= 1 && x >= 0) {
                  var b = u ? Ft(l, d, m, y, x) : Ft(s, v, p, g, x);
                  return u ? [e, b] : [b, e];
                }
              }
            s = g, l = y;
            break;
        }
      }
    }, t;
  })(mt)
), JE = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(A0)
), tA = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "ec-polygon", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new JE();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, l = n.smoothMonotone;
      if (n.connectNulls) {
        for (; s > 0 && Ae(i[s * 2 - 2], i[s * 2 - 1]); s--)
          ;
        for (; o < s && Ae(i[o * 2], i[o * 2 + 1]); o++)
          ;
      }
      for (; o < s; ) {
        var u = Cc(e, i, o, s, s, 1, n.smooth, l, n.connectNulls);
        Cc(e, a, o + u - 1, u, s, -1, n.stackedOnSmooth, l, n.connectNulls), o += u + 1, e.closePath();
      }
    }, t;
  })(mt)
);
function M0() {
  var r = dt();
  return function(t) {
    var e = r(t), n = t.pipelineContext, i = !!e.large, a = !!e.progressiveRender, o = e.large = !!(n && n.large), s = e.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var L0 = dt(), eA = M0(), tr = (
  /** @class */
  (function() {
    function r() {
      this.group = new Ot(), this.uid = Yl("viewChart"), this.renderTask = Ia({
        plan: rA,
        reset: nA
      }), this.renderTask.context = {
        view: this
      };
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, n, i) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("render method must been implemented");
    }, r.prototype.highlight = function(t, e, n, i) {
      var a = t.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && ut("Unknown dataType " + i.dataType);
        return;
      }
      Gp(a, i, "emphasis");
    }, r.prototype.downplay = function(t, e, n, i) {
      var a = t.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && ut("Unknown dataType " + i.dataType);
        return;
      }
      Gp(a, i, "normal");
    }, r.prototype.remove = function(t, e) {
      this.group.removeAll();
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, n, i) {
      this.render(t, e, n, i);
    }, r.prototype.updateVisual = function(t, e, n, i) {
      this.render(t, e, n, i);
    }, r.prototype.eachRendered = function(t) {
      $l(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      L0(t).updateMethod = e;
    }, r.protoInitialize = (function() {
      var t = r.prototype;
      t.type = "chart";
    })(), r;
  })()
);
function $p(r, t, e) {
  r && Li(r) && (t === "emphasis" ? za : Ha)(r, e);
}
function Gp(r, t, e) {
  var n = On(r, t), i = t && t.highlightKey != null ? yT(t.highlightKey) : null;
  n != null ? D(qt(n), function(a) {
    $p(r.getItemGraphicEl(a), e, i);
  }) : r.eachItemGraphicEl(function(a) {
    $p(a, e, i);
  });
}
ph(tr, ["dispose"]);
Cl(tr);
function rA(r) {
  return eA(r.model);
}
function nA(r) {
  var t = r.model, e = r.ecModel, n = r.api, i = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = i && L0(i).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return l !== "render" && o[l](t, e, n, i), iA[l];
}
var iA = {
  incrementalPrepareRender: {
    progress: function(r, t) {
      t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(r, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
};
function aA(r, t, e, n, i) {
  var a = r.getArea(), o = a.x, s = a.y, l = a.width, u = a.height, f = e.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, l += f, u += f, l = Math.ceil(l), o !== Math.floor(o) && (o = Math.floor(o), l++);
  var c = new Pt({
    shape: {
      x: o,
      y: s,
      width: l,
      height: u
    }
  });
  if (t) {
    var h = r.getBaseAxis(), v = h.isHorizontal(), d = h.inverse;
    v ? (d && (c.shape.x += l), c.shape.width = 0) : (d || (c.shape.y += u), c.shape.height = 0);
    var p = W(i) ? function(m) {
      i(m, c);
    } : null;
    $i(c, {
      shape: {
        width: l,
        height: u,
        x: o,
        y: s
      }
    }, e, null, n, p);
  }
  return c;
}
function oA(r, t, e) {
  var n = r.getArea(), i = st(n.r0, 1), a = st(n.r, 1), o = new Bl({
    shape: {
      cx: st(r.cx, 1),
      cy: st(r.cy, 1),
      r0: i,
      r: a,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    }
  });
  if (t) {
    var s = r.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = n.startAngle : o.shape.r = i, $i(o, {
      shape: {
        endAngle: n.endAngle,
        r: a
      }
    }, e);
  }
  return o;
}
function I0(r, t) {
  return r.type === t;
}
var Up = {};
function sA(r, t) {
  if (process.env.NODE_ENV !== "production") {
    var e = r + "^_^" + t;
    Up[e] || (console.warn('[ECharts] DEPRECATED: "' + r + '" has been deprecated. ' + t), Up[e] = !0);
  }
}
var Ve = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.isBlank = function() {
      return this._isBlank;
    }, r.prototype.setBlank = function(t) {
      this._isBlank = t;
    }, r;
  })()
);
Cl(Ve);
var lA = 0, Dc = (
  /** @class */
  (function() {
    function r(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++lA, this._onCollect = t.onCollect;
    }
    return r.createByAxisModel = function(t) {
      var e = t.option, n = e.data, i = n && Y(n, uA);
      return new r({
        categories: i,
        needCollect: !i,
        // deduplication is default in axis.
        deduplication: e.dedplication !== !1
      });
    }, r.prototype.getOrdinal = function(t) {
      return this._getOrCreateMap().get(t);
    }, r.prototype.parseAndCollect = function(t) {
      var e, n = this._needCollect;
      if (!$(t) && !n)
        return t;
      if (n && !this._deduplication)
        return e = this.categories.length, this.categories[e] = t, this._onCollect && this._onCollect(t, e), e;
      var i = this._getOrCreateMap();
      return e = i.get(t), e == null && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e), this._onCollect && this._onCollect(t, e)) : e = NaN), e;
    }, r.prototype._getOrCreateMap = function() {
      return this._map || (this._map = Q(this.categories));
    }, r;
  })()
);
function uA(r) {
  return X(r) && r.value != null ? r.value : r + "";
}
var De = 0, Xa = 1, fA = {
  needTransform: 1,
  normalize: 1,
  scale: 1,
  transformIn: 1,
  transformOut: 1,
  contain: 1,
  getExtent: 1,
  getExtentUnsafe: 1,
  setExtent: 1,
  setExtent2: 1,
  getFilter: 1,
  sanitize: 1,
  getDefaultStartValue: 1,
  freeze: 1
}, cA = St(fA), qs = 2, P0 = 3;
function cv(r, t, e) {
  var n;
  return r = r || {}, vA(r, e), {
    brk: n,
    mapper: r
  };
}
function O0(r, t) {
  D(cA, function(e) {
    r[e] = t[e];
  });
}
function N0(r, t) {
  r.freeze = Gt, process.env.NODE_ENV !== "production" && (r.freeze = function() {
    t.freeze();
  });
}
function Za(r) {
  return r.getExtentUnsafe(De, qs);
}
function Ks(r, t) {
  return r.getExtentUnsafe(Xa, t) || r.getExtentUnsafe(De, t);
}
function hA(r) {
  var t = Ks(r, P0);
  return t[1] - t[0];
}
function Ql(r) {
  var t = r.getExtentUnsafe(De, P0);
  return t[1] - t[0];
}
function vA(r, t) {
  var e = r || {}, n = [];
  return e._extents = n, n[De] = t ? t.slice() : xe(), k(e, dA), e;
}
var dA = {
  needTransform: function() {
    return !1;
  },
  normalize: function(r) {
    var t = this._extents[Xa] || this._extents[De];
    return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
  },
  scale: function(r) {
    var t = this._extents[Xa] || this._extents[De];
    return r * (t[1] - t[0]) + t[0];
  },
  transformIn: function(r) {
    return r;
  },
  transformOut: function(r) {
    return r;
  },
  contain: function(r) {
    var t = Ks(this, null);
    return r >= t[0] && r <= t[1];
  },
  getExtent: function() {
    return this._extents[De].slice();
  },
  getExtentUnsafe: function(r) {
    return this._extents[r];
  },
  setExtent: function(r, t) {
    process.env.NODE_ENV !== "production" && N(!this._frozen), Wp(this._extents, De, r, t);
  },
  setExtent2: function(r, t, e) {
    process.env.NODE_ENV !== "production" && N(!this._frozen);
    var n = this._extents;
    n[r] || (n[r] = n[De].slice()), Wp(n, r, t, e);
  },
  freeze: function() {
    process.env.NODE_ENV !== "production" && (this._frozen = !0);
  }
};
function Wp(r, t, e, n) {
  Mi(e, n) ? (r[t][0] = e, r[t][1] = n) : process.env.NODE_ENV !== "production" && e != null && n != null && e <= n && ut("Invalid setExtent call - start: " + e + ", end: " + n);
}
function k0(r) {
  return Qs(r) || Ni(r);
}
function Qs(r) {
  return r.type === "interval";
}
function hv(r) {
  return r.type === "time";
}
function Ni(r) {
  return r.type === "log";
}
function ir(r) {
  return r.type === "ordinal";
}
function pA(r) {
  var t = Sh(r), e = zi(10, t), n = hr(r / e);
  return n ? n === 2 ? n = 3 : n === 3 ? n = 5 : n *= 2 : n = 1, st(n * e, -t);
}
function Vn(r) {
  return Xe(r) + 2;
}
function $o(r, t) {
  return Fa(r) / Fa(t);
}
function Xu(r, t, e) {
  var n = e && e.lookup;
  if (n) {
    for (var i = 0; i < n.from.length; i++)
      if (r === n.from[i])
        return n.to[i];
  }
  return zi(t, r);
}
function R0(r, t, e) {
  var n = r.slice();
  if (n[0] === n[1]) {
    var i = e && e.ctnShp;
    if (n[0] !== 0) {
      var a = Vt(n[0]);
      t[1] || (n[1] += a / 2), n[0] -= a / 2;
    } else
      i && (n[0] = -1), n[1] = 1;
  }
  return (!dr(n[0]) || !dr(n[1])) && (n[0] = 0, n[1] = 1), n[1] < n[0] && n.reverse(), n;
}
function gA(r, t) {
  return [r[0] !== t[0], r[1] !== t[1]];
}
function vv(r, t) {
  return r = r || t, hr(pt(r, 1));
}
function B0(r, t, e) {
  var n = Za(r), i = n[0], a = r.count(), o = Math.max((t || 0) + 1, 1);
  i !== 0 && o > 1 && a / o > 2 && (i = Math.round(Math.ceil(i / o) * o)), i !== n[0] && l(n[0], !0, !0);
  for (var s = i; s <= n[1]; s += o)
    l(s, !1, s === n[0] || s === n[1]);
  s - o !== n[1] && l(n[1], !0, !0);
  function l(u, f, c) {
    e({
      value: u,
      offInterval: f
    }, c);
  }
}
var V0 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n.type = "ordinal", n.parse = t.parse, O0(n, t.decoratedMethods);
      var i = e.ordinalMeta;
      i || (i = new Dc({})), B(i) && (i = new Dc({
        categories: Y(i, function(o) {
          return X(o) ? o.value : o;
        })
      })), n._ordinalMeta = i;
      var a = cv(
        null,
        null,
        // Do not support break in OrdinalScale yet.
        e.extent || [0, i.categories.length - 1]
      );
      return n._mapper = a.mapper, N0(n, a.mapper), n;
    }
    return t.parse = function(e) {
      return e == null ? e = NaN : $(e) ? (e = this._ordinalMeta.getOrdinal(e), e == null && (e = NaN)) : e = hr(e), e;
    }, t.prototype.getTicks = function() {
      var e = [];
      return B0(this, 0, function(n) {
        e.push(n);
      }), e;
    }, t.prototype.getMinorTicks = function(e) {
    }, t.prototype.setSortInfo = function(e) {
      if (e == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var n = e.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, l = ce(s, n.length); o < l; ++o) {
        var u = i[o] = n[o];
        a[u] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        i[o] = f, a[f] = o;
      }
    }, t.prototype._getTickNumber = function(e) {
      var n = this._ticksByOrdinalNumber;
      return n && e >= 0 && e < n.length ? n[e] : e;
    }, t.prototype.getRawOrdinalNumber = function(e) {
      var n = this._ordinalNumbersByTick;
      return n && e >= 0 && e < n.length ? n[e] : e;
    }, t.prototype.getLabel = function(e) {
      if (!this.isBlank()) {
        var n = this.getRawOrdinalNumber(e.value), i = this._ordinalMeta.categories[n];
        return i == null ? "" : i + "";
      }
    }, t.prototype.count = function() {
      var e = Za(this._mapper);
      return e[1] - e[0] + 1;
    }, t.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    }, t.type = "ordinal", t.decoratedMethods = {
      needTransform: function() {
        return this._mapper.needTransform();
      },
      contain: function(e) {
        return this._mapper.contain(this._getTickNumber(e)) && e >= 0 && e < this._ordinalMeta.categories.length;
      },
      normalize: function(e) {
        return this._mapper.normalize(this._getTickNumber(e));
      },
      scale: function(e) {
        return this.getRawOrdinalNumber(hr(this._mapper.scale(e)));
      },
      transformIn: function(e, n) {
        return this._mapper.transformIn(this._getTickNumber(e), n);
      },
      transformOut: function(e, n) {
        return this.getRawOrdinalNumber(this._mapper.transformOut(e, n));
      },
      getExtent: function() {
        return this._mapper.getExtent();
      },
      getExtentUnsafe: function(e, n) {
        return this._mapper.getExtentUnsafe(e, n);
      },
      /**
       * NOTICE: OrdinalScale extent should always originates from
       * `[0, ordinalMeta.categories.length - 1]`, regardless of min/max of `series.data`.
       * But settings like `xxxAxis.min/max` can still modify the extent.
       * It is handled by constructor of `ScaleRawExtentInfo`.
       */
      setExtent: function(e, n) {
        return this._mapper.setExtent(e, n);
      },
      setExtent2: function(e, n, i) {
        return this._mapper.setExtent2(e, n, i);
      }
    }, t;
  })(Ve)
);
Ve.registerClass(V0);
function dv(r, t, e, n) {
  for (var i = r.getTicks({
    expandToNicedExtent: !0
  }), a = [], o = r.getExtent(), s = 1; s < i.length; s++) {
    var l = i[s], u = i[s - 1];
    if (!(u.break || l.break)) {
      for (var f = 0, c = [], h = l.value - u.value, v = h / t, d = Vn(v); f < t - 1; ) {
        var p = st(u.value + (f + 1) * v, d);
        p > o[0] && p < o[1] && c.push(p), f++;
      }
      var m = Xl();
      m && m.pruneTicksByBreak("auto", c, e, function(g) {
        return g;
      }, n, o), a.push(c);
    }
  }
  return a;
}
var kr = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n.type = "interval", n.parse = t.parse, e = e || {};
      var i = a0(n, e), a = cv(n, i, null);
      return n.brk = a.brk, n._cfg = {
        interval: 0,
        intervalPrecision: 2,
        intervalCount: void 0,
        niceExtent: void 0
      }, n;
    }
    return t.parse = function(e) {
      return e == null || e === "" ? NaN : Number(e);
    }, t.prototype.getConfig = function() {
      return it(this._cfg);
    }, t.prototype.setConfig = function(e) {
      var n = Za(this);
      process.env.NODE_ENV !== "production" && (N(e.interval != null), e.intervalCount != null && N(e.intervalCount >= -1 && e.intervalPrecision != null && !Nn(this)), e.niceExtent != null && (N(isFinite(e.niceExtent[0]) && isFinite(e.niceExtent[1])), N(n[0] <= e.niceExtent[0] && e.niceExtent[1] <= n[1]), N(st(e.niceExtent[0] - e.niceExtent[1], Xe(e.interval)) <= e.interval))), this._cfg = e = it(e), e.niceExtent == null && (e.niceExtent = n.slice()), e.intervalPrecision == null && (e.intervalPrecision = Vn(e.interval));
    }, t.prototype.getTicks = function(e) {
      e = e || {};
      var n = this._cfg, i = n.interval, a = Za(this), o = n.niceExtent, s = n.intervalPrecision, l = Xl(), u = this.brk, f = l, c = [];
      if (!i)
        return c;
      e.breakTicks, process.env.NODE_ENV !== "production" && N(o != null);
      var h = 3e3;
      a[0] < o[0] && c.push({
        value: e.expandToNicedExtent ? st(o[0] - i, s) : a[0]
      });
      for (var v = function(_, b) {
        return hr((b - _) / i);
      }, d = n.intervalCount, p = o[0], m = 0; ; m++) {
        if (d == null) {
          if (p > o[1] || !isFinite(p) || !isFinite(o[1]))
            break;
        } else {
          if (m > d)
            break;
          p = ce(p, o[1]), m === d && (p = o[1]);
        }
        if (c.push({
          value: p
        }), p = st(p + i, s), u) {
          var g = u.calcNiceTickMultiple(p, v);
          g >= 0 && (p = st(p + g * i, s));
        }
        if (c.length > 0 && p === c[c.length - 1].value)
          break;
        if (c.length > h)
          return process.env.NODE_ENV !== "production" && ee('Exceed safe limit in IntervalScale["getTicks"].'), [];
      }
      var y = c.length ? c[c.length - 1].value : o[1];
      return a[1] > y && c.push({
        value: e.expandToNicedExtent ? st(y + i, s) : a[1]
      }), c;
    }, t.prototype.getMinorTicks = function(e) {
      return dv(this, e, Kh(this), this._cfg.interval);
    }, t.prototype.getLabel = function(e, n) {
      if (e == null)
        return "";
      var i = n && n.precision;
      i == null ? i = Xe(e.value) || 0 : i === "auto" && (i = this._cfg.intervalPrecision);
      var a = st(e.value, i, !0);
      return v0(a);
    }, t.type = "interval", t;
  })(Ve)
);
Ve.registerClass(kr);
var mA = function(r, t, e, n) {
  for (; e < n; ) {
    var i = e + n >>> 1;
    r[i][1] < t ? e = i + 1 : n = i;
  }
  return e;
}, F0 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n.type = "time", n.parse = t.parse, n._locale = e.locale, n._useUTC = e.useUTC, n._interval = 0;
      var i = a0(n, e), a = cv(n, i, null);
      return n.brk = a.brk, n;
    }
    return t.prototype.getLabel = function(e) {
      return Zl(e.value, Mp[ZD(Ma(this._minLevelUnit))] || Mp.second, this._useUTC, this._locale);
    }, t.prototype.getFormattedLabel = function(e, n, i) {
      return qD(e, n, i, this._locale, this._useUTC);
    }, t.prototype.getTicks = function(e) {
      var n = this._interval, i = Za(this), a = this.brk, o = [];
      if (!n)
        return o;
      var s = this._useUTC;
      o = CA(this._minLevelUnit, this._approxInterval, s, i, Ql(this), a);
      var l = An.length - 1, u = 0;
      return D(o, function(f) {
        f.time && (l = Math.min(l, lt(An, f.time.upperTimeUnit)), u = Math.max(u, f.time.level));
      }), o;
    }, t.prototype.getMinorTicks = function(e) {
      return dv(this, e, Kh(this), this._interval);
    }, t.prototype.setTimeInterval = function(e) {
      this._interval = e.interval, this._approxInterval = e.approxInterval, this._minLevelUnit = e.minLevelUnit;
    }, t.parse = function(e) {
      return wt(e) ? Math.round(e) : +Hi(e);
    }, t.type = "time", t;
  })(Ve)
), Go = [
  // Format                           interval
  ["second", Qh],
  ["minute", jh],
  ["hour", Aa],
  ["quarter-day", Aa * 6],
  ["half-day", Aa * 12],
  ["day", Ce * 1.2],
  ["half-week", Ce * 3.5],
  ["week", Ce * 7],
  ["month", Ce * 31],
  ["quarter", Ce * 95],
  ["half-year", Ap / 2],
  ["year", Ap]
  // 1Y
];
function yA(r, t, e, n) {
  return _c(new Date(t), r, n).getTime() === _c(new Date(e), r, n).getTime();
}
function _A(r, t) {
  return r /= Ce, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function bA(r) {
  var t = 30 * Ce;
  return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function SA(r) {
  return r /= Aa, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function Yp(r, t) {
  return r /= t ? jh : Qh, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
}
function wA(r) {
  return pt(wh(r, !0), 1);
}
function xA(r, t, e) {
  var n = Math.max(0, lt(An, t) - 1);
  return _c(new Date(r), An[n], e).getTime();
}
function TA(r, t) {
  var e = /* @__PURE__ */ new Date(0);
  e[r](1);
  var n = e.getTime();
  e[r](1 + t);
  var i = e.getTime() - n;
  return function(a, o) {
    return Math.max(0, Math.round((o - a) / i));
  };
}
function CA(r, t, e, n, i, a) {
  var o = 3e3, s = UD, l = 0;
  function u(P, F, G, U, j, K, et) {
    for (var Z = TA(j, P), z = F, nt = new Date(z); z < G && z <= n[1]; ) {
      if (et.push({
        value: z
      }), l++ > o) {
        process.env.NODE_ENV !== "production" && ee('Exceed safe limit in TimeScale["getTicks"].');
        break;
      }
      if (nt[j](nt[U]() + P), z = nt.getTime(), a) {
        var at = a.calcNiceTickMultiple(z, Z);
        at > 0 && (nt[j](nt[U]() + at * P), z = nt.getTime());
      }
    }
    et.push({
      value: z,
      // extent[1] should be added; deduplication will be performed later.
      notAdd: z > n[1]
    });
  }
  function f(P, F, G) {
    var U = [], j = !F.length;
    if (!yA(Ma(P), n[0], n[1], e)) {
      j && (F = [{
        value: xA(n[0], P, e)
      }, {
        value: n[1]
      }]);
      for (var K = 0; K < F.length - 1; K++) {
        var et = F[K].value, Z = F[K + 1].value;
        if (et !== Z) {
          var z = void 0, nt = void 0, at = void 0, Wt = !1;
          switch (P) {
            case "year":
              z = Math.max(1, Math.round(t / Ce / 365)), nt = o0(e), at = KD(e);
              break;
            case "half-year":
            case "quarter":
            case "month":
              z = bA(t), nt = Jh(e), at = s0(e);
              break;
            case "week":
            // PENDING If week is added. Ignore day.
            case "half-week":
            case "day":
              z = _A(t), nt = tv(e), at = l0(e), Wt = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              z = SA(t), nt = ev(e), at = u0(e);
              break;
            case "minute":
              z = Yp(t, !0), nt = rv(e), at = f0(e);
              break;
            case "second":
              z = Yp(t, !1), nt = nv(e), at = c0(e);
              break;
            case "millisecond":
              z = wA(t), nt = iv(e), at = h0(e);
              break;
          }
          Z >= n[0] && et <= n[1] && u(z, et, Z, nt, at, Wt, U), P === "year" && G.length > 1 && K === 0 && G.unshift({
            value: G[0].value - z
          });
        }
      }
      for (var K = 0; K < U.length; K++)
        G.push(U[K]);
    }
  }
  for (var c = [], h = [], v = 0, d = 0, p = 0; p < s.length; ++p) {
    var m = Ma(s[p]);
    if (XD(s[p])) {
      f(s[p], c[c.length - 1] || [], h);
      var g = s[p + 1] ? Ma(s[p + 1]) : null;
      if (m !== g) {
        if (h.length) {
          d = v, h.sort(function(P, F) {
            return P.value - F.value;
          });
          for (var y = [], _ = 0; _ < h.length; ++_) {
            var b = h[_].value;
            (_ === 0 || h[_ - 1].value !== b) && (y.push(h[_]), b >= n[0] && b <= n[1] && v++);
          }
          var S = i / t;
          if (v > S * 1.5 && d > S / 1.5 || (c.push(y), v > S || r === s[p]))
            break;
        }
        h = [];
      }
    }
  }
  for (var w = Rt(Y(c, function(P) {
    return Rt(P, function(F) {
      return F.value >= n[0] && F.value <= n[1] && !F.notAdd;
    });
  }), function(P) {
    return P.length > 0;
  }), x = w.length - 1, E = [], p = 0; p < w.length; ++p)
    for (var T = w[p], C = 0; C < T.length; ++C) {
      var A = Ss(T[C].value, e);
      E.push({
        value: T[C].value,
        time: {
          level: x - p,
          upperTimeUnit: A,
          lowerTimeUnit: A
        }
      });
    }
  Ch(E, qx, null), E.sort(function(P, F) {
    return P.value - F.value;
  });
  var L = E[0], M = E[E.length - 1], I = Ss(n[0], e), O = Ss(n[1], e);
  return (!L || L.value > n[0]) && E.unshift({
    value: n[0],
    time: {
      level: 0,
      upperTimeUnit: I,
      lowerTimeUnit: I
    },
    notNice: !0
  }), (!M || M.value < n[1]) && E.push({
    value: n[1],
    time: {
      level: 0,
      upperTimeUnit: O,
      lowerTimeUnit: O
    },
    notNice: !0
  }), E;
}
var DA = function(r, t) {
  var e = r.getExtent();
  if (e[0] === e[1] && (e[0] -= Ce, e[1] += Ce), e[1] === -1 / 0 && e[0] === 1 / 0) {
    var n = /* @__PURE__ */ new Date();
    e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Ce;
  }
  r.setExtent(e[0], e[1]);
  var i = vv(t.splitNumber, 10), a = Ql(r) / i, o = t.minInterval, s = t.maxInterval;
  o != null && a < o && (a = o), s != null && a > s && (a = s);
  var l = Go.length, u = Math.min(mA(Go, a, 0, l), l - 1), f = Go[u][1], c = Go[Math.max(u - 1, 0)][0];
  r.setTimeInterval({
    approxInterval: a,
    interval: f,
    minLevelUnit: c
  });
};
Ve.registerClass(F0);
var Uo = 0, Wo = 1, js = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e) {
      var n = r.call(this) || this;
      n.type = "log", n.parse = kr.parse, n.base = e.logBase || 10;
      var i = [], a = [];
      n._lookup = {
        from: i,
        to: a
      }, i[Uo] = i[Wo] = a[Uo] = a[Wo] = NaN, O0(n, t.mapperMethods), e.breakOption;
      var o = {};
      return n.powStub = new kr({
        breakParsed: o.original
      }), n.intervalStub = new kr({
        breakParsed: o.transformed
      }), N0(n, n.intervalStub), n;
    }
    return t.prototype.getTicks = function(e) {
      var n = this.base, i = this.powStub, a = this.intervalStub, o = a.getExtent(), s = i.getExtent(), l = {
        lookup: {
          from: o,
          to: s
        }
      };
      return Y(a.getTicks(e || {}), function(u) {
        var f = u.value, c = Xu(f, n, l), h;
        return {
          value: c,
          break: h
        };
      }, this);
    }, t.prototype.getMinorTicks = function(e) {
      return dv(
        this,
        e,
        Kh(this.powStub),
        // NOTE: minor ticks are in the log scale value to visually hint users "logarithm".
        this.intervalStub.getConfig().interval
      );
    }, t.prototype.getLabel = function(e, n) {
      return this.intervalStub.getLabel(e, n);
    }, t.type = "log", t.mapperMethods = {
      needTransform: function() {
        return !0;
      },
      normalize: function(e) {
        return this.intervalStub.normalize($o(e, this.base));
      },
      scale: function(e) {
        return Xu(this.intervalStub.scale(e), this.base, null);
      },
      transformIn: function(e, n) {
        return e = $o(e, this.base), n && n.depth === qs ? e : this.intervalStub.transformIn(e, n);
      },
      transformOut: function(e, n) {
        var i = n ? n.depth : null;
        return Xp.depth = i, Zp.lookup = this._lookup, Xu(i === qs ? e : this.intervalStub.transformOut(e, Xp), this.base, Zp);
      },
      contain: function(e) {
        return this.powStub.contain(e);
      },
      /**
       * NOTICE: The caller should ensure `start` and `end` are both non-negative.
       */
      setExtent: function(e, n) {
        this.setExtent2(De, e, n);
      },
      setExtent2: function(e, n, i) {
        if (!(!Mi(n, i) || n <= 0 || i <= 0)) {
          var a = qp, o = qp;
          if (e === De) {
            var s = this._lookup;
            a = s.to, o = s.from;
          }
          this.powStub.setExtent2(e, a[Uo] = n, a[Wo] = i);
          var l = this.base;
          this.intervalStub.setExtent2(e, o[Uo] = $o(n, l), o[Wo] = $o(i, l));
        }
      },
      getFilter: function() {
        return {
          g: 0
        };
      },
      sanitize: function(e, n) {
        return Mi(n[0], n[1]) && er(e) && e <= 0 && (e = n[0]), e;
      },
      getDefaultStartValue: function() {
        return 1;
      },
      getExtent: function() {
        return this.powStub.getExtent();
      },
      getExtentUnsafe: function(e, n) {
        return n === null ? this.powStub.getExtentUnsafe(e, null) : this.intervalStub.getExtentUnsafe(e, n);
      }
    }, t;
  })(Ve)
);
Ve.registerClass(js);
var Xp = {}, Zp = {}, qp = [], z0 = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
}, H0 = dt();
function EA(r) {
  var t = r.get("type");
  return (
    // In ec option, `xxxAxis.type` may be undefined.
    (t == null || !fe(z0, t) && !Ve.getClass(t)) && (t = "value"), t
  );
}
function AA(r, t, e) {
  var n;
  switch (t) {
    case "category":
      return new V0({
        ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
        extent: xe()
      });
    case "time":
      return new F0({
        locale: r.ecModel.getLocaleModel(),
        useUTC: r.ecModel.get("useUTC"),
        breakOption: n
      });
    case "log":
      return new js({
        logBase: r.get("logBase"),
        breakOption: n
      });
    case "value":
      return new kr({
        breakOption: n
      });
    default:
      return new (Ve.getClass(t) || kr)({});
  }
}
function MA(r, t, e) {
  var n = r.getExtentUnsafe(De, null), i = n[0], a = n[1];
  return Mi(i, a) ? i === t || a === t ? IA : i < t && a > t ? LA : Ec : Ec;
}
var LA = 1, IA = 2, Ec = 3;
function PA(r) {
  H0(r).noOnMyZero = !0;
}
function OA(r) {
  return H0(r).noOnMyZero;
}
function jl(r) {
  var t = r.getLabelModel().get("formatter");
  if (r.type === "time") {
    var e = WD(t);
    return function(i, a) {
      return r.scale.getFormattedLabel(i, a, e);
    };
  } else {
    if ($(t))
      return function(i) {
        var a = r.scale.getLabel(i), o = t.replace("{value}", a ?? "");
        return o;
      };
    if (W(t)) {
      if (r.type === "category")
        return function(i, a) {
          return t(
            Js(r, i),
            i.value - r.scale.getExtent()[0],
            null
            // Using `null` just for backward compat.
          );
        };
      var n = Xl();
      return function(i, a) {
        var o = null;
        return n && (o = n.makeAxisLabelFormatterParamBreak(o, i.break)), t(Js(r, i), a, o);
      };
    } else
      return function(i) {
        return r.scale.getLabel(i);
      };
  }
}
function Js(r, t) {
  var e = r.scale;
  return ir(e) ? e.getLabel(t) : t.value;
}
function pv(r) {
  var t = r.get("interval");
  return t ?? "auto";
}
function NA(r) {
  return r.type === "category" && pv(r.getLabelModel()) === 0;
}
function kA(r, t) {
  var e = {};
  return D(r.mapDimensionsAll(t), function(n) {
    e[e0(r, n)] = !0;
  }), St(e);
}
function ki(r) {
  return r === "middle" || r === "center";
}
function qa(r) {
  return r.getShallow("show");
}
function RA(r, t, e) {
  var n = r.get("breaks", !0);
  if (n != null) {
    process.env.NODE_ENV !== "production" && ut('Must `import {AxisBreak} from "echarts/features.js"; use(AxisBreak);` first if using breaks option.');
    return;
  }
}
function $0(r, t, e, n, i, a) {
  var o = Ni(r), s = o ? r.intervalStub : r;
  if (s.setExtent(n[0], n[1]), o) {
    var l = r.powStub, u = {
      depth: qs
    }, f = r.transformOut(n[0], u), c = r.transformOut(n[1], u), h = gA(e, n);
    t[0] && !h[0] && (f = i[0]), t[1] && !h[1] && (c = i[1]), l.setExtent(f, c);
  }
  s.setConfig(a);
}
function co(r, t) {
  return ir(r) ? r.getRawOrdinalNumber(t.value) : t.value;
}
function G0(r, t) {
  return ir(r) && !!t.get("boundaryGap");
}
function Kp(r, t) {
  if (r.length === t.length) {
    for (var e = 0; e < r.length; e++)
      if (r[e] !== t[e])
        return;
    return !0;
  }
}
function Qp(r) {
  for (var t = xe(), e = xe(), n = 0; n < r.length; ) {
    var i = r[n++], a = r[n++];
    Ae(i, a) || (ac(t, i), ac(e, a));
  }
  return [t, e];
}
function jp(r, t) {
  var e = Qp(r), n = e[0], i = e[1], a = Qp(t), o = a[0], s = a[1];
  return Math.max(Math.abs(n[0] - o[0]), Math.abs(i[0] - s[0]), Math.abs(n[1] - o[1]), Math.abs(i[1] - s[1]));
}
function Jp(r) {
  return wt(r) ? r : r ? 0.5 : 0;
}
function BA(r, t, e) {
  if (e.valueDim == null)
    return [];
  for (var n = t.count(), i = hi(n * 2), a = 0; a < n; a++) {
    var o = E0(e, r, t, a);
    i[a * 2] = o[0], i[a * 2 + 1] = o[1];
  }
  return i;
}
function Cr(r, t, e, n, i) {
  var a = e.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], l = 0, u = [], f = [], c = [], h = [];
  if (i) {
    for (l = 0; l < r.length; l += 2) {
      var v = t || r;
      Ae(v[l], v[l + 1]) || h.push(r[l], r[l + 1]);
    }
    r = h;
  }
  for (l = 0; l < r.length - 2; l += 2)
    switch (c[0] = r[l + 2], c[1] = r[l + 3], f[0] = r[l], f[1] = r[l + 1], s.push(f[0], f[1]), n) {
      case "end":
        u[o] = c[o], u[1 - o] = f[1 - o], s.push(u[0], u[1]);
        break;
      case "middle":
        var d = (f[o] + c[o]) / 2, p = [];
        u[o] = p[o] = d, u[1 - o] = f[1 - o], p[1 - o] = c[1 - o], s.push(u[0], u[1]), s.push(p[0], p[1]);
        break;
      default:
        u[o] = f[o], u[1 - o] = c[1 - o], s.push(u[0], u[1]);
    }
  return s.push(r[l++], r[l++]), s;
}
function VA(r, t) {
  var e = [], n = r.length, i, a;
  function o(f, c, h) {
    var v = f.coord, d = (h - v) / (c.coord - v), p = Dw(d, [f.color, c.color]);
    return {
      coord: h,
      color: p
    };
  }
  for (var s = 0; s < n; s++) {
    var l = r[s], u = l.coord;
    if (u < 0)
      i = l;
    else if (u > t) {
      a ? e.push(o(a, l, t)) : i && e.push(o(i, l, 0), o(i, l, t));
      break;
    } else
      i && (e.push(o(i, l, 0)), i = null), e.push(l), a = l;
  }
  return e;
}
function FA(r, t, e) {
  var n = r.getVisual("visualMeta");
  if (!(!n || !n.length || !r.count())) {
    if (t.type !== "cartesian2d") {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style is only supported on cartesian2d.");
      return;
    }
    for (var i, a, o = n.length - 1; o >= 0; o--) {
      var s = r.getDimensionInfo(n[o].dimension);
      if (i = s && s.coordDim, i === "x" || i === "y") {
        a = n[o];
        break;
      }
    }
    if (!a) {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style only support x or y dimension.");
      return;
    }
    var l = t.getAxis(i), u = Y(a.stops, function(_) {
      return {
        coord: l.toGlobalCoord(l.dataToCoord(_.value)),
        color: _.color
      };
    }), f = u.length, c = a.outerColors.slice();
    f && u[0].coord > u[f - 1].coord && (u.reverse(), c.reverse());
    var h = VA(u, i === "x" ? e.getWidth() : e.getHeight()), v = h.length;
    if (!v && f)
      return u[0].coord < 0 ? c[1] ? c[1] : u[f - 1].color : c[0] ? c[0] : u[0].color;
    var d = 10, p = h[0].coord - d, m = h[v - 1].coord + d, g = m - p;
    if (g < 1e-3)
      return "transparent";
    D(h, function(_) {
      _.offset = (_.coord - p) / g;
    }), h.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: v ? h[v - 1].offset : 0.5,
      color: c[1] || "transparent"
    }), h.unshift({
      offset: v ? h[0].offset : 0.5,
      color: c[0] || "transparent"
    });
    var y = new T_(0, 0, 0, 0, h, !0);
    return y[i] = p, y[i + "2"] = m, y;
  }
}
function zA(r, t, e) {
  var n = r.get("showAllSymbol"), i = n === "auto";
  if (!(n && !i)) {
    var a = e.getAxesByScale("ordinal")[0];
    if (a && !(i && HA(a, t))) {
      var o = t.mapDimension(a.dim), s = {};
      return D(a.getViewLabels(), function(l) {
        l.tick.offInterval || (s[co(a.scale, l.tick)] = 1);
      }), function(l) {
        return !s.hasOwnProperty(t.get(o, l));
      };
    }
  }
}
function HA(r, t) {
  var e = r.getExtent(), n = Math.abs(e[1] - e[0]) / r.scale.count();
  isNaN(n) && (n = 0);
  for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
    if (fv.getSymbolSize(
      t,
      o
      // Only for cartesian, where `isHorizontal` exists.
    )[r.isHorizontal() ? 1 : 0] * 1.5 > n)
      return !1;
  return !0;
}
function $A(r) {
  for (var t = r.length / 2; t > 0 && Ae(r[t * 2 - 2], r[t * 2 - 1]); t--)
    ;
  return t - 1;
}
function tg(r, t) {
  return [r[t * 2], r[t * 2 + 1]];
}
function GA(r, t, e) {
  for (var n = r.length / 2, i = e === "x" ? 0 : 1, a, o, s = 0, l = -1, u = 0; u < n; u++)
    if (o = r[u * 2 + i], !Ae(o, r[u * 2 + 1 - i])) {
      if (u === 0) {
        a = o;
        continue;
      }
      if (a <= t && o >= t || a >= t && o <= t) {
        l = u;
        break;
      }
      s = u, a = o;
    }
  return {
    range: [s, l],
    t: (t - a) / (o - a)
  };
}
function U0(r) {
  if (r.get(["endLabel", "show"]))
    return !0;
  for (var t = 0; t < Me.length; t++)
    if (r.get([Me[t], "endLabel", "show"]))
      return !0;
  return !1;
}
function Zu(r, t, e, n) {
  if (I0(t, "cartesian2d")) {
    var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
      lastFrameIndex: 0
    }, l = U0(n) ? function(v, d) {
      r._endLabelOnDuring(v, d, o, s, a, i, t);
    } : null, u = t.getBaseAxis().isHorizontal(), f = aA(t, e, n, function() {
      var v = r._endLabel;
      v && e && s.originalX != null && v.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, l);
    if (!n.get("clip", !0)) {
      var c = f.shape, h = Math.max(c.width, c.height);
      u ? (c.y -= h, c.height += h * 2) : (c.x -= h, c.width += h * 2);
    }
    return l && l(1, f), f;
  } else
    return process.env.NODE_ENV !== "production" && n.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), oA(t, e, n);
}
function UA(r, t) {
  var e = t.getBaseAxis(), n = e.isHorizontal(), i = e.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
  return {
    normal: {
      align: r.get("align") || a,
      verticalAlign: r.get("verticalAlign") || o
    }
  };
}
var WA = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function() {
      var e = new Ot(), n = new C0();
      this.group.add(n.group), this._symbolDraw = n, this._lineGroup = e, this._changePolyState = Tt(this._changePolyState, this);
    }, t.prototype.render = function(e, n, i) {
      var a = e.coordinateSystem, o = this.group, s = e.getData(), l = e.getModel("lineStyle"), u = e.getModel("areaStyle"), f = s.getLayout("points") || [], c = a.type === "polar", h = this._coordSys, v = this._symbolDraw, d = this._polyline, p = this._polygon, m = this._lineGroup, g = !n.ssr && e.get("animation"), y = !u.isEmpty(), _ = u.get("origin"), b = D0(a, s, _), S = y && BA(a, s, b), w = e.get("showSymbol"), x = e.get("connectNulls"), E = w && !c && zA(e, s, a), T = this._data;
      T && T.eachItemGraphicEl(function(xt, It) {
        xt.__temp && (o.remove(xt), T.setItemGraphicEl(It, null));
      }), w || v.remove(), o.add(m);
      var C = c ? !1 : e.get("step"), A;
      a && a.getArea && e.get("clip", !0) && (A = a.getArea(), A.width != null ? (A.x -= 0.1, A.y -= 0.1, A.width += 0.2, A.height += 0.2) : A.r0 && (A.r0 -= 0.5, A.r += 0.5)), this._clipShapeForSymbol = A;
      var L = FA(s, a, i) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(d && h.type === a.type && C === this._step))
        w && v.updateData(s, {
          isIgnore: E,
          clipShape: A,
          disableAnimation: !0,
          getSymbolPoint: function(xt) {
            return [f[xt * 2], f[xt * 2 + 1]];
          }
        }), g && this._initSymbolLabelAnimation(s, a, A), C && (S && (S = Cr(S, f, a, C, x)), f = Cr(f, null, a, C, x)), d = this._newPolyline(f), y ? p = this._newPolygon(f, S) : p && (m.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(e, a, kn(L)), m.setClipPath(Zu(this, a, !0, e));
      else {
        y && !p ? p = this._newPolygon(f, S) : p && !y && (m.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(e, a, kn(L));
        var M = m.getClipPath();
        if (M) {
          var I = Zu(this, a, !1, e);
          $i(M, {
            shape: I.shape
          }, e);
        } else
          m.setClipPath(Zu(this, a, !0, e));
        w && v.updateData(s, {
          isIgnore: E,
          clipShape: A,
          disableAnimation: !0,
          getSymbolPoint: function(xt) {
            return [f[xt * 2], f[xt * 2 + 1]];
          }
        }), (!Kp(this._stackedOnPoints, S) || !Kp(this._points, f)) && (g ? this._doUpdateAnimation(s, S, a, i, C, _, x) : (C && (S && (S = Cr(S, f, a, C, x)), f = Cr(f, null, a, C, x)), d.setShape({
          points: f
        }), p && p.setShape({
          points: f,
          stackedOnPoints: S
        })));
      }
      var O = e.getModel("emphasis"), P = O.get("focus"), F = O.get("blurScope"), G = O.get("disabled");
      if (d.useStyle(gt(
        // Use color in lineStyle first
        l.getLineStyle(),
        {
          fill: "none",
          stroke: L,
          lineJoin: "bevel"
        }
      )), Jd(d, e, "lineStyle"), d.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var U = d.getState("emphasis").style;
        U.lineWidth = +d.style.lineWidth + 1;
      }
      ct(d).seriesIndex = e.seriesIndex, Gs(d, P, F, G);
      var j = Jp(e.get("smooth")), K = e.get("smoothMonotone");
      if (d.setShape({
        smooth: j,
        smoothMonotone: K,
        connectNulls: x
      }), p) {
        var et = s.getCalculationInfo("stackedOnSeries"), Z = 0;
        p.useStyle(gt(u.getAreaStyle(), {
          fill: L,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), et && (Z = Jp(et.get("smooth"))), p.setShape({
          smooth: j,
          stackedOnSmooth: Z,
          smoothMonotone: K,
          connectNulls: x
        }), Jd(p, e, "areaStyle"), ct(p).seriesIndex = e.seriesIndex, Gs(p, P, F, G);
      }
      var z = this._changePolyState;
      s.eachItemGraphicEl(function(xt) {
        xt && (xt.onHoverStateChange = z);
      }), this._polyline.onHoverStateChange = z, this._data = s, this._coordSys = a, this._stackedOnPoints = S, this._points = f, this._step = C, this._valueOrigin = _;
      var nt = e.get("triggerEvent"), at = e.get("triggerLineEvent");
      process.env.NODE_ENV !== "production" && at && sA("triggerLineEvent", "Use the `triggerEvent` option instead.");
      var Wt = at === !0 || nt === !0 || nt === "line", Le = at === !0 || nt === !0 || nt === "area";
      this.packEventData(e, d, Wt), p && this.packEventData(e, p, Le);
    }, t.prototype.packEventData = function(e, n, i) {
      ct(n).eventData = i ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: e.componentIndex,
        seriesIndex: e.seriesIndex,
        seriesName: e.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: n === this._polygon ? "area" : "line"
      } : null;
    }, t.prototype.highlight = function(e, n, i, a) {
      var o = e.getData(), s = On(o, a);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var l = o.getLayout("points"), u = o.getItemGraphicEl(s);
        if (!u) {
          var f = l[s * 2], c = l[s * 2 + 1];
          if (Ae(f, c) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, c))
            return;
          var h = e.get("zlevel") || 0, v = e.get("z") || 0;
          u = new fv(o, s), u.x = f, u.y = c, u.setZ(h, v);
          var d = u.getSymbolPath().getTextContent();
          d && (d.zlevel = h, d.z = v, d.z2 = this._polyline.z2 + 1), u.__temp = !0, o.setItemGraphicEl(s, u), u.stopSymbolAnimation(!0), this.group.add(u);
        }
        u.highlight();
      } else
        tr.prototype.highlight.call(this, e, n, i, a);
    }, t.prototype.downplay = function(e, n, i, a) {
      var o = e.getData(), s = On(o, a);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var l = o.getItemGraphicEl(s);
        l && (l.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(l)) : l.downplay());
      } else
        tr.prototype.downplay.call(this, e, n, i, a);
    }, t.prototype._changePolyState = function(e) {
      var n = this._polygon;
      Zd(this._polyline, e), n && Zd(n, e);
    }, t.prototype._newPolyline = function(e) {
      var n = this._polyline;
      return n && this._lineGroup.remove(n), n = new jE({
        shape: {
          points: e
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(n), this._polyline = n, n;
    }, t.prototype._newPolygon = function(e, n) {
      var i = this._polygon;
      return i && this._lineGroup.remove(i), i = new tA({
        shape: {
          points: e,
          stackedOnPoints: n
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(i), this._polygon = i, i;
    }, t.prototype._initSymbolLabelAnimation = function(e, n, i) {
      var a, o, s = n.getBaseAxis(), l = s.inverse;
      n.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : n.type === "polar" && (a = s.dim === "angle", o = !0);
      var u = e.hostModel, f = u.get("animationDuration");
      W(f) && (f = f(null));
      var c = u.get("animationDelay") || 0, h = W(c) ? c(null) : c;
      e.eachItemGraphicEl(function(v, d) {
        var p = v;
        if (p) {
          var m = [v.x, v.y], g = void 0, y = void 0, _ = void 0;
          if (i)
            if (o) {
              var b = i, S = n.pointToCoord(m);
              a ? (g = b.startAngle, y = b.endAngle, _ = -S[1] / 180 * Math.PI) : (g = b.r0, y = b.r, _ = S[0]);
            } else {
              var w = i;
              a ? (g = w.x, y = w.x + w.width, _ = v.x) : (g = w.y + w.height, y = w.y, _ = v.y);
            }
          var x = y === g ? 0 : (_ - g) / (y - g);
          l && (x = 1 - x);
          var E = W(c) ? c(d) : f * x + h, T = p.getSymbolPath(), C = T.getTextContent();
          p.attr({
            scaleX: 0,
            scaleY: 0
          }), p.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: E
          }), C && C.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: E
          }), T.disableLabelAnimation = !0;
        }
      });
    }, t.prototype._initOrUpdateEndLabel = function(e, n, i) {
      var a = e.getModel("endLabel");
      if (U0(e)) {
        var o = e.getData(), s = this._polyline, l = o.getLayout("points");
        if (!l) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var u = this._endLabel;
        u || (u = this._endLabel = new oe({
          z2: 200
          // should be higher than item symbol
        }), u.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var f = $A(l);
        f >= 0 && (Ul(s, uo(e, "endLabel"), {
          inheritColor: i,
          labelFetcher: e,
          labelDataIndex: f,
          defaultText: function(c, h, v) {
            return v != null ? WE(o, v) : T0(o, c);
          },
          enableTextSetter: !0
        }, UA(a, n)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, t.prototype._endLabelOnDuring = function(e, n, i, a, o, s, l) {
      var u = this._endLabel, f = this._polyline;
      if (u) {
        e < 1 && a.originalX == null && (a.originalX = u.x, a.originalY = u.y);
        var c = i.getLayout("points"), h = i.hostModel, v = h.get("connectNulls"), d = s.get("precision"), p = s.get("distance") || 0, m = l.getBaseAxis(), g = m.isHorizontal(), y = m.inverse, _ = n.shape, b = y ? g ? _.x : _.y + _.height : g ? _.x + _.width : _.y, S = (g ? p : 0) * (y ? -1 : 1), w = (g ? 0 : -p) * (y ? -1 : 1), x = g ? "x" : "y", E = GA(c, b, x), T = E.range, C = T[1] - T[0], A = void 0;
        if (C >= 1) {
          if (C > 1 && !v) {
            var L = tg(c, T[0]);
            u.attr({
              x: L[0] + S,
              y: L[1] + w
            }), o && (A = h.getRawValue(T[0]));
          } else {
            var L = f.getPointOn(b, x);
            L && u.attr({
              x: L[0] + S,
              y: L[1] + w
            });
            var M = h.getRawValue(T[0]), I = h.getRawValue(T[1]);
            o && (A = Wx(i, d, M, I, E.t));
          }
          a.lastFrameIndex = T[0];
        } else {
          var O = e === 1 || a.lastFrameIndex > 0 ? T[0] : 0, L = tg(c, O);
          o && (A = h.getRawValue(O)), u.attr({
            x: L[0] + S,
            y: L[1] + w
          });
        }
        if (o) {
          var P = k_(u);
          typeof P.setLabelText == "function" && P.setLabelText(A);
        }
      }
    }, t.prototype._doUpdateAnimation = function(e, n, i, a, o, s, l) {
      var u = this._polyline, f = this._polygon, c = e.hostModel, h = QE(this._data, e, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), v = h.current, d = h.stackedOnCurrent, p = h.next, m = h.stackedOnNext;
      if (o && (d = Cr(h.stackedOnCurrent, h.current, i, o, l), v = Cr(h.current, null, i, o, l), m = Cr(h.stackedOnNext, h.next, i, o, l), p = Cr(h.next, null, i, o, l)), jp(v, p) > 3e3 || f && jp(d, m) > 3e3) {
        u.stopAnimation(), u.setShape({
          points: p
        }), f && (f.stopAnimation(), f.setShape({
          points: p,
          stackedOnPoints: m
        }));
        return;
      }
      u.shape.__points = h.current, u.shape.points = v;
      var g = {
        shape: {
          points: p
        }
      };
      h.current !== v && (g.shape.__points = h.next), u.stopAnimation(), gr(u, g, c), f && (f.setShape({
        // Reuse the points with polyline.
        points: v,
        stackedOnPoints: d
      }), f.stopAnimation(), gr(f, {
        shape: {
          stackedOnPoints: m
        }
      }, c), u.shape.points !== f.shape.points && (f.shape.points = u.shape.points));
      for (var y = [], _ = h.status, b = 0; b < _.length; b++) {
        var S = _[b].cmd;
        if (S === "=") {
          var w = e.getItemGraphicEl(_[b].idx1);
          w && y.push({
            el: w,
            ptIdx: b
            // Index of points
          });
        }
      }
      u.animators && u.animators.length && u.animators[0].during(function() {
        f && f.dirtyShape();
        for (var x = u.shape.__points, E = 0; E < y.length; E++) {
          var T = y[E].el, C = y[E].ptIdx * 2;
          T.x = x[C], T.y = x[C + 1], T.markRedraw();
        }
      });
    }, t.prototype.remove = function(e) {
      var n = this.group, i = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
        a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, t.type = "line", t;
  })(tr)
);
function YA(r, t) {
  return {
    seriesType: r,
    plan: M0(),
    reset: function(e) {
      var n = e.getData(), i = e.coordinateSystem;
      if (e.pipelineContext, !!i) {
        var a = Y(i.dimensions, function(c) {
          return n.mapDimension(c);
        }).slice(0, 2), o = a.length, s = n.getCalculationInfo("stackResultDimension");
        Oi(n, a[0]) && (a[0] = s), Oi(n, a[1]) && (a[1] = s);
        var l = n.getStore(), u = n.getDimensionIndex(a[0]), f = n.getDimensionIndex(a[1]);
        return o && {
          progress: function(c, h) {
            for (var v = c.end - c.start, d = hi(v * o), p = [], m = [], g = c.start, y = 0; g < c.end; g++) {
              var _ = void 0;
              if (o === 1) {
                var b = l.get(u, g);
                _ = i.dataToPoint(b, null, m);
              } else
                p[0] = l.get(u, g), p[1] = l.get(f, g), _ = i.dataToPoint(p, null, m);
              d[y++] = _[0], d[y++] = _[1];
            }
            h.setLayout("points", d), h.setLayout("pointsRange", {
              start: c.start,
              end: c.end
            });
          }
        };
      }
    }
  };
}
var XA = {
  average: function(r) {
    for (var t = 0, e = 0, n = 0; n < r.length; n++)
      isNaN(r[n]) || (t += r[n], e++);
    return e === 0 ? NaN : t / e;
  },
  sum: function(r) {
    for (var t = 0, e = 0; e < r.length; e++)
      t += r[e] || 0;
    return t;
  },
  max: function(r) {
    for (var t = -1 / 0, e = 0; e < r.length; e++)
      r[e] > t && (t = r[e]);
    return isFinite(t) ? t : NaN;
  },
  min: function(r) {
    for (var t = 1 / 0, e = 0; e < r.length; e++)
      r[e] < t && (t = r[e]);
    return isFinite(t) ? t : NaN;
  },
  // TODO
  // Median
  nearest: function(r) {
    return r[0];
  }
}, ZA = function(r) {
  return Math.round(r.length / 2);
};
function qA(r) {
  return {
    seriesType: r,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(t, e, n) {
      var i = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = i.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var l = o.getBaseAxis(), u = o.getOtherAxis(l), f = l.getExtent(), c = n.getDevicePixelRatio(), h = Math.abs(f[1] - f[0]) * (c || 1), v = Math.round(s / h);
        if (isFinite(v) && v > 1) {
          a === "lttb" ? t.setData(i.lttbDownSample(i.mapDimension(u.dim), 1 / v)) : a === "minmax" && t.setData(i.minmaxDownSample(i.mapDimension(u.dim), 1 / v));
          var d = void 0;
          $(a) ? d = XA[a] : W(a) && (d = a), d && t.setData(i.downSample(i.mapDimension(u.dim), 1 / v, d, ZA));
        }
      }
    }
  };
}
function KA(r) {
  r.registerChartView(WA), r.registerSeriesModel(UE), r.registerLayout(YA("line")), r.registerVisual({
    seriesType: "line",
    reset: function(t) {
      var e = t.getData(), n = t.getModel("lineStyle").getLineStyle();
      n && !n.stroke && (n.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", n);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, qA("line"));
}
var QA = dt(), Pa = dt(), Oe = {
  estimate: 1,
  determine: 2
};
function tl(r) {
  return {
    out: {
      noPxChangeTryDetermine: []
    },
    kind: r
  };
}
function jA(r, t) {
  var e = r.getLabelModel().get("customValues");
  if (e) {
    var n = r.scale;
    return {
      labels: Y(W0(e, n), function(i, a) {
        return {
          formattedLabel: jl(r)(i, a),
          rawLabel: n.getLabel(i),
          tick: i
        };
      })
    };
  }
  return r.type === "category" ? tM(r, t) : rM(r);
}
function JA(r, t, e) {
  var n = r.scale, i = r.getTickModel().get("customValues");
  return i ? {
    ticks: W0(i, n)
  } : r.type === "category" ? eM(r, t) : {
    ticks: n.getTicks(e)
  };
}
function W0(r, t) {
  var e = t.getExtent(), n = [];
  return D(r, function(i) {
    i = t.parse(i), i >= e[0] && i <= e[1] && n.push(i);
  }), Ch(n, Kx, null), Yy(n), Y(n, function(i) {
    return {
      value: i
    };
  });
}
function tM(r, t) {
  var e = r.getLabelModel(), n = Y0(r, e, t);
  return !e.get("show") || r.scale.isBlank() ? {
    labels: []
  } : n;
}
function Y0(r, t, e) {
  var n = iM(r), i = pv(t), a = e.kind === Oe.estimate;
  if (!a) {
    var o = Z0(n, i);
    if (o)
      return o;
  }
  var s, l;
  W(i) ? s = el(r, i, !1) : (l = i === "auto" ? aM(r, e) : i, s = el(r, l, !1));
  var u = {
    labels: s,
    labelCategoryInterval: l
  };
  return a ? e.out.noPxChangeTryDetermine.push(function() {
    return Ac(n, i, u), !0;
  }) : Ac(n, i, u), u;
}
function eM(r, t) {
  var e = nM(r), n = pv(t), i = Z0(e, n);
  if (i)
    return i;
  var a, o;
  if ((!t.get("show") || r.scale.isBlank()) && (a = []), W(n))
    a = el(r, n, !0);
  else if (n === "auto") {
    var s = Y0(r, r.getLabelModel(), tl(Oe.determine));
    o = s.labelCategoryInterval, a = Y(s.labels, function(l) {
      return l.tick;
    });
  } else
    o = n, a = el(r, o, !0);
  return Ac(e, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function rM(r) {
  var t = r.scale.getTicks(), e = jl(r);
  return {
    labels: Y(t, function(n, i) {
      return {
        formattedLabel: e(n, i),
        rawLabel: r.scale.getLabel(n),
        tick: n
      };
    })
  };
}
var nM = X0("axisTick"), iM = X0("axisLabel");
function X0(r) {
  return function(e) {
    return Pa(e)[r] || (Pa(e)[r] = {
      list: []
    });
  };
}
function Z0(r, t) {
  for (var e = 0; e < r.list.length; e++)
    if (r.list[e].key === t)
      return r.list[e].value;
}
function Ac(r, t, e) {
  return r.list.push({
    key: t,
    value: e
  }), e;
}
function aM(r, t) {
  if (t.kind === Oe.estimate) {
    var e = r.calculateCategoryInterval(t);
    return t.out.noPxChangeTryDetermine.push(function() {
      return Pa(r).autoInterval = e, !0;
    }), e;
  }
  var n = Pa(r).autoInterval;
  return n ?? (Pa(r).autoInterval = r.calculateCategoryInterval(t));
}
function oM(r, t) {
  var e = t.kind, n = lM(r), i = jl(r), a = (n.axisRotate - n.labelRotate) / 180 * Math.PI, o = r.scale, s = o.getExtent(), l = o.count();
  if (s[1] - s[0] < 1)
    return 0;
  var u = 1, f = 40;
  l > f && (u = Math.max(1, Math.floor(l / f)));
  for (var c = s[0], h = r.dataToCoord(c + 1) - r.dataToCoord(c), v = Math.abs(h * Math.cos(a)), d = Math.abs(h * Math.sin(a)), p = 0, m = 0; c <= s[1]; c += u) {
    var g = 0, y = 0, _ = Dy(i({
      value: c
    }), n.font, "center", "top");
    g = _.width * 1.3, y = _.height * 1.3, p = Math.max(p, g, 7), m = Math.max(m, y, 7);
  }
  var b = p / v, S = m / d;
  isNaN(b) && (b = 1 / 0), isNaN(S) && (S = 1 / 0);
  var w = Math.max(0, Math.floor(Math.min(b, S)));
  if (e === Oe.estimate)
    return t.out.noPxChangeTryDetermine.push(Tt(sM, null, r, w, l)), w;
  var x = q0(r, w, l);
  return x ?? w;
}
function sM(r, t, e) {
  return q0(r, t, e) == null;
}
function q0(r, t, e) {
  var n = QA(r.model), i = r.getExtent(), a = n.lastAutoInterval, o = n.lastTickCount;
  if (a != null && o != null && Math.abs(a - t) <= 1 && Math.abs(o - e) <= 1 && a > t && n.axisExtent0 === i[0] && n.axisExtent1 === i[1])
    return a;
  n.lastTickCount = e, n.lastAutoInterval = t, n.axisExtent0 = i[0], n.axisExtent1 = i[1];
}
function lM(r) {
  var t = r.getLabelModel();
  return {
    axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function el(r, t, e) {
  var n = jl(r), i = r.scale, a = [], o = W(t);
  return B0(i, o ? 0 : t, function(s, l) {
    var u = i.getLabel(s);
    if (o) {
      var f = !!t(s.value, u);
      if (s.offInterval = !f, !f && !l)
        return;
    }
    a.push(e ? s : {
      formattedLabel: n(s),
      rawLabel: u,
      tick: s
    });
  }), a;
}
var gv = dt();
function uM(r) {
  gv(r).prepare = {};
}
function fM(r) {
  gv(r).fullUpdate = {};
}
function ho(r) {
  return gv(r).fullUpdate;
}
var Mc = "|&", vo = dt(), cM = -2;
dt();
var Gi;
process.env.NODE_ENV !== "production" && (Gi = function(r) {
  N(r && r.model && r.model.uid && r.model.ecModel);
});
function K0(r, t) {
  var e = r.model, n = vo(ho(e.ecModel)).keyed, i = n && n.get(t);
  return i && i.get(e.uid);
}
function hM(r, t) {
  return process.env.NODE_ENV !== "production" && (N(t != null), Gi(r)), Q0(K0(r, t));
}
function vM(r, t) {
  process.env.NODE_ENV !== "production" && Gi(r);
  var e = [];
  return dM(r.model.ecModel, function(n) {
    for (var i = 0; i < t.length; i++)
      t[i] && n.serByIdx[t[i].seriesIndex] && e.push(Q0(n));
  }), e;
}
function dM(r, t) {
  var e = vo(ho(r)).keyed;
  e && e.each(function(n, i) {
    n.each(function(a, o) {
      t(a, i, o);
    });
  });
}
function Q0(r) {
  return {
    liPosMinGap: r ? r.liPosMinGap : void 0
  };
}
function pM(r, t) {
  process.env.NODE_ENV !== "production" && Gi(r);
  var e = r.model.ecModel, n = vo(ho(e)).axSer;
  n && gM(e, n.get(r.model.uid), t);
}
function gM(r, t, e) {
  if (t)
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      r.isSeriesFiltered(i) || e(i);
    }
}
function j0(r, t) {
  process.env.NODE_ENV !== "production" && Gi(r);
  var e = r.model, n = vo(ho(e.ecModel)).keys;
  n && D(n.get(e.uid), function(i) {
    if (process.env.NODE_ENV !== "production") {
      var a = K0(r, i);
      N(a && a.sers.length > 0);
    }
    t(i);
  });
}
function eg(r, t, e) {
  if (r) {
    var n = t.ecModel, i = vo(ho(n)), a = r.model.uid;
    if (process.env.NODE_ENV !== "production") {
      Gi(r);
      var o = i.axSerPairCheck || (i.axSerPairCheck = Q()), s = "" + a + Mc + t.uid;
      N(!o.get(s)), o.set(s, 1);
    }
    var l = i.axSer || (i.axSer = Q()), u = l.get(a) || l.set(a, []);
    if (process.env.NODE_ENV !== "production") {
      var f = u[u.length - 1];
      f && N(f.seriesIndex < t.seriesIndex);
    }
    u.push(t);
    var c = t.subType, h = t.getBaseAxis() === r, v = ng.get(rg(c, h, e)) || ng.get(rg(c, h, null));
    if (v) {
      var d = i.keyed || (i.keyed = Q()), p = i.keys || (i.keys = Q()), m = v.key, g = d.get(m) || d.set(m, Q()), y = g.get(a);
      y || (y = g.set(a, {
        axis: r,
        sers: [],
        serByIdx: []
      }), y.metrics = v.getMetrics(r), (p.get(a) || p.set(a, [])).push(m)), y.sers.push(t), y.serByIdx[t.seriesIndex] = t;
    }
  }
}
function rg(r, t, e) {
  return r + Mc + H(t, !0) + Mc + (e || "");
}
process.env.NODE_ENV !== "production" && Q();
var ng = Q(), mM = 0.8;
function Jl(r, t) {
  t = t || {};
  var e = {
    w: NaN,
    w2: NaN
  }, n = r.scale, i = t.fromStat, a = t.min, o = hA(n);
  er(o) || (o = NaN);
  var s = r.getExtent(), l = Vt(s[1] - s[0]);
  return ir(n) ? yM(e, r, o, l) : i ? _M(e, r, o, l, i) : a == null && process.env.NODE_ENV !== "production" && N(!1), a != null && (e.w = er(e.w) ? pt(a, e.w) : a), e;
}
function yM(r, t, e, n) {
  var i = t.onBand, a = e + (i ? 1 : 0);
  a === 0 && (a = 1), r.w = n / a, !i && e && n && (r.w2 = r.w * e / n);
}
function _M(r, t, e, n, i) {
  process.env.NODE_ENV !== "production" && N(i);
  var a = !1, o = -1 / 0;
  D(i.key ? [hM(t, i.key)] : vM(t, i.sers || []), function(s) {
    var l = s.liPosMinGap;
    l != null && (l > 0 ? (l > o && (o = l), a = !1) : l === cM && (a = !0));
  }), er(e) && e > 0 && er(o) ? (r.w = n / e * o, r.w2 = o) : a && (r.w = n * mM, r.w2 = r.w * e / n);
}
var ig = [0, 1], bM = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [0, 0];
    }
    return r.prototype.contain = function(t) {
      var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
      return t >= n && t <= i;
    }, r.prototype.containData = function(t) {
      return this.scale.contain(this.scale.parse(t));
    }, r.prototype.getExtent = function() {
      return this._extent.slice();
    }, r.prototype.setExtent = function(t, e) {
      var n = this._extent;
      n[0] = t, n[1] = e;
    }, r.prototype.dataToCoord = function(t, e) {
      var n = this.scale;
      return t = n.normalize(n.parse(t)), Rd(t, ig, ag(this), e);
    }, r.prototype.coordToData = function(t, e) {
      var n = Rd(t, ag(this), ig, e);
      return this.scale.scale(n);
    }, r.prototype.pointToData = function(t, e) {
    }, r.prototype.getTicksCoords = function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(), n = JA(this, e, {
        breakTicks: t.breakTicks,
        pruneByBreak: t.pruneByBreak
      }), i = Y(n.ticks, function(s) {
        return {
          coord: this.dataToCoord(co(this.scale, s)),
          tick: s
        };
      }, this), a = e.get("alignWithLabel"), o = SM(this, i, a);
      return Y(i, function(s) {
        return {
          coord: s.coord,
          tickValue: s.tick.value,
          onBand: o
        };
      });
    }, r.prototype.getMinorTicksCoords = function() {
      if (ir(this.scale))
        return [];
      var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
      e > 0 && e < 100 || (e = 5);
      var n = this.scale.getMinorTicks(e), i = Y(n, function(a) {
        return Y(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, r.prototype.getViewLabels = function(t) {
      return t = t || tl(Oe.determine), jA(this, t).labels;
    }, r.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, r.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, r.prototype.getBandWidth = function() {
      return Jl(this, {
        min: 1
      }).w;
    }, r.prototype.calculateCategoryInterval = function(t) {
      return t = t || tl(Oe.determine), oM(this, t);
    }, r;
  })()
);
function ag(r) {
  var t = r.getExtent();
  if (r.onBand) {
    var e = t[1] - t[0], n = e / r.scale.count() / 2;
    t[0] += n, t[1] -= n;
  }
  return t;
}
function SM(r, t, e) {
  var n = t.length;
  if (!r.onBand || e || !n)
    return !1;
  var i = Jl(r).w;
  if (!i)
    return !1;
  D(t, function(s) {
    s.coord -= i / 2;
  });
  var a = r.scale.getExtent(), o = t[n - 1];
  return o.tick.offInterval && t.pop(), t.push({
    coord: o.coord + i,
    tick: {
      value: a[1] + 1
    }
  }), !0;
}
var wM = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e, n, i, a, o) {
      var s = r.call(this, e, n, i) || this;
      return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
    }
    return t.prototype.isHorizontal = function() {
      var e = this.position;
      return e === "top" || e === "bottom";
    }, t.prototype.getGlobalExtent = function(e) {
      var n = this.getExtent();
      return n[0] = this.toGlobalCoord(n[0]), n[1] = this.toGlobalCoord(n[1]), e && n[0] > n[1] && n.reverse(), n;
    }, t.prototype.pointToData = function(e, n) {
      return this.coordToData(this.toLocalCoord(e[this.dim === "x" ? 0 : 1]), n);
    }, t.prototype.setCategorySortInfo = function(e) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = e, this.scale.setSortInfo(e);
    }, t;
  })(bM)
), og = ["label", "labelLine", "layoutOption", "priority", "defaultAttr", "marginForce", "minMarginForce", "marginDefault", "suggestIgnore"], xM = 1, rl = 2, J0 = xM | rl;
function nl(r, t, e) {
  e = e || J0, t ? r.dirty |= e : r.dirty &= ~e;
}
function t1(r, t) {
  return t = t || J0, r.dirty == null || !!(r.dirty & t);
}
function zr(r) {
  if (r)
    return t1(r) && TM(r, r.label, r), r;
}
function TM(r, t, e) {
  var n = t.getComputedTransform();
  r.transform = $h(r.transform, n);
  var i = r.localRect = Ua(r.localRect, t.getBoundingRect()), a = t.style, o = a.margin, s = e && e.marginForce, l = e && e.minMarginForce, u = e && e.marginDefault, f = a.__marginType;
  f == null && u && (o = u, f = ci.textMargin);
  for (var c = 0; c < 4; c++)
    qu[c] = f === ci.minMargin && l && l[c] != null ? l[c] : s && s[c] != null ? s[c] : o ? o[c] : 0;
  f === ci.textMargin && Ws(i, qu, !1, !1);
  var h = r.rect = Ua(r.rect, i);
  return n && h.applyTransform(n), f === ci.minMargin && Ws(h, qu, !1, !1), r.axisAligned = Hh(n), (r.label = r.label || {}).ignore = t.ignore, nl(r, !1), nl(r, !0, rl), r;
}
var qu = [0, 0, 0, 0];
function CM(r, t, e) {
  return r.transform = $h(r.transform, e), r.localRect = Ua(r.localRect, t), r.rect = Ua(r.rect, t), e && r.rect.applyTransform(e), r.axisAligned = Hh(e), r.obb = void 0, (r.label = r.label || {}).ignore = !1, r;
}
function DM(r, t) {
  if (r) {
    r.label.x += t.x, r.label.y += t.y, r.label.markRedraw();
    var e = r.transform;
    e && (e[4] += t.x, e[5] += t.y);
    var n = r.rect;
    n && (n.x += t.x, n.y += t.y);
    var i = r.obb;
    i && i.fromBoundingRect(r.localRect, e);
  }
}
function sg(r, t) {
  for (var e = 0; e < og.length; e++) {
    var n = og[e];
    r[n] == null && (r[n] = t[n]);
  }
  return zr(r);
}
function lg(r) {
  var t = r.obb;
  return (!t || t1(r, rl)) && (r.obb = t = t || new C_(), t.fromBoundingRect(r.localRect, r.transform), nl(r, !1, rl)), t;
}
function EM(r) {
  var t = [];
  r.sort(function(u, f) {
    return (f.suggestIgnore ? 1 : 0) - (u.suggestIgnore ? 1 : 0) || f.priority - u.priority;
  });
  function e(u) {
    if (!u.ignore) {
      var f = u.ensureState("emphasis");
      f.ignore == null && (f.ignore = !1);
    }
    u.ignore = !0;
  }
  for (var n = 0; n < r.length; n++) {
    var i = zr(r[n]);
    if (!i.label.ignore) {
      for (var a = i.label, o = i.labelLine, s = !1, l = 0; l < t.length; l++)
        if (mv(i, t[l], null, {
          touchThreshold: 0.05
        })) {
          s = !0;
          break;
        }
      s ? (e(a), o && e(o)) : t.push(i);
    }
  }
}
function mv(r, t, e, n) {
  return !r || !t || r.label && r.label.ignore || t.label && t.label.ignore || !r.rect.intersect(t.rect, e, n) ? !1 : r.axisAligned && t.axisAligned ? !0 : lg(r).intersect(lg(t), e, n);
}
var AM = null;
function MM() {
  return AM;
}
var LM = "expandAxisBreak", Lr = Math.PI, IM = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]], PM = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]], Ri = dt(), e1 = dt(), r1 = (
  /** @class */
  (function() {
    function r(t) {
      this.recordMap = {}, this.resolveAxisNameOverlap = t;
    }
    return r.prototype.ensureRecord = function(t) {
      var e = t.axis.dim, n = t.componentIndex, i = this.recordMap, a = i[e] || (i[e] = []);
      return a[n] || (a[n] = {
        ready: {}
      });
    }, r;
  })()
);
function OM(r, t, e, n) {
  var i = e.axis, a = t.ensureRecord(e), o = [], s, l = yv(r.axisName) && ki(r.nameLocation);
  D(n, function(d) {
    var p = zr(d);
    if (!(!p || p.label.ignore)) {
      o.push(p);
      var m = a.transGroup;
      l && (m.transform ? eo(ea, m.transform) : to(ea), p.transform && Sa(ea, ea, p.transform), J.copy(Yo, p.localRect), Yo.applyTransform(ea), s ? s.union(Yo) : J.copy(s = new J(0, 0, 0, 0), Yo));
    }
  });
  var u = Math.abs(a.dirVec.x) > 0.1 ? "x" : "y", f = a.transGroup[u];
  if (o.sort(function(d, p) {
    return Math.abs(d.label[u] - f) - Math.abs(p.label[u] - f);
  }), l && s) {
    var c = i.getExtent(), h = Math.min(c[0], c[1]), v = Math.max(c[0], c[1]) - h;
    s.union(new J(h, 0, v, 1));
  }
  a.stOccupiedRect = s, a.labelInfoList = o;
}
var ea = Ze(), Yo = new J(0, 0, 0, 0), n1 = function(r, t, e, n, i, a) {
  if (ki(r.nameLocation)) {
    var o = a.stOccupiedRect;
    o && i1(CM({}, o, a.transGroup.transform), n, i);
  } else
    a1(a.labelInfoList, a.dirVec, n, i);
};
function i1(r, t, e) {
  var n = new yt();
  mv(r, t, n, {
    direction: Math.atan2(e.y, e.x),
    bidirectional: !1,
    touchThreshold: 0.05
  }) && DM(t, n);
}
function a1(r, t, e, n) {
  for (var i = yt.dot(n, t) >= 0, a = 0, o = r.length; a < o; a++) {
    var s = r[i ? a : o - 1 - a];
    s.label.ignore || i1(s, e, n);
  }
}
var Rr = (
  /** @class */
  (function() {
    function r(t, e, n, i) {
      this.group = new Ot(), this._axisModel = t, this._api = e, this._local = {}, this._shared = i || new r1(n1), this._resetCfgDetermined(n);
    }
    return r.prototype.updateCfg = function(t) {
      if (process.env.NODE_ENV !== "production") {
        var e = this._shared.ensureRecord(this._axisModel).ready;
        N(!e.axisLine && !e.axisTickLabelDetermine), e.axisName = e.axisTickLabelEstimate = !1;
      }
      var n = this._cfg.raw;
      n.position = t.position, n.labelOffset = t.labelOffset, this._resetCfgDetermined(n);
    }, r.prototype.__getRawCfg = function() {
      return this._cfg.raw;
    }, r.prototype._resetCfgDetermined = function(t) {
      var e = this._axisModel, n = e.getDefaultOption ? e.getDefaultOption() : {}, i = H(t.axisName, e.get("name")), a = e.get("nameMoveOverlap");
      (a == null || a === "auto") && (a = H(t.defaultNameMoveOverlap, !0));
      var o = {
        raw: t,
        position: t.position,
        rotation: t.rotation,
        nameDirection: H(t.nameDirection, 1),
        tickDirection: H(t.tickDirection, 1),
        labelDirection: H(t.labelDirection, 1),
        labelOffset: H(t.labelOffset, 0),
        silent: H(t.silent, !0),
        axisName: i,
        nameLocation: Pr(e.get("nameLocation"), n.nameLocation, "end"),
        shouldNameMoveOverlap: yv(i) && a,
        optionHideOverlap: e.get(["axisLabel", "hideOverlap"]),
        showMinorTicks: e.get(["minorTick", "show"])
      };
      process.env.NODE_ENV !== "production" && (N(o.position != null), N(o.rotation != null)), this._cfg = o;
      var s = new Ot({
        x: o.position[0],
        y: o.position[1],
        rotation: o.rotation
      });
      s.updateTransform(), this._transformGroup = s;
      var l = this._shared.ensureRecord(e);
      l.transGroup = this._transformGroup, l.dirVec = new yt(Math.cos(-o.rotation), Math.sin(-o.rotation));
    }, r.prototype.build = function(t, e) {
      var n = this;
      return t || (t = {
        axisLine: !0,
        axisTickLabelEstimate: !1,
        axisTickLabelDetermine: !0,
        axisName: !0
      }), D(NM, function(i) {
        t[i] && kM[i](n._cfg, n._local, n._shared, n._axisModel, n.group, n._transformGroup, n._api, e || {});
      }), this;
    }, r.innerTextLayout = function(t, e, n) {
      var i = Xy(e - t), a, o;
      return Vs(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : Vs(i - Lr) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < Lr ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
        rotation: i,
        textAlign: a,
        textVerticalAlign: o
      };
    }, r.makeAxisEventDataBase = function(t) {
      var e = {
        componentType: t.mainType,
        componentIndex: t.componentIndex
      };
      return e[t.mainType + "Index"] = t.componentIndex, e;
    }, r.isLabelSilent = function(t) {
      var e = t.get("tooltip");
      return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
    }, r;
  })()
), NM = ["axisLine", "axisTickLabelEstimate", "axisTickLabelDetermine", "axisName"], kM = {
  axisLine: function(r, t, e, n, i, a, o) {
    if (process.env.NODE_ENV !== "production") {
      var s = e.ensureRecord(n).ready;
      N(!s.axisLine), s.axisLine = !0;
    }
    var l = n.get(["axisLine", "show"]);
    if (l === "auto" && (l = !0, r.raw.axisLineAutoShow != null && (l = !!r.raw.axisLineAutoShow)), !!l) {
      var u = n.axis.getExtent(), f = a.transform, c = [u[0], 0], h = [u[1], 0], v = c[0] > h[0];
      f && (Ee(c, c, f), Ee(h, h, f));
      var d = k({
        lineCap: "round"
      }, n.getModel(["axisLine", "lineStyle"]).getLineStyle()), p = {
        strokeContainThreshold: r.raw.strokeContainThreshold || 5,
        silent: !0,
        z2: 1,
        style: d
      };
      if (n.get(["axisLine", "breakLine"]) && Nn(n.axis.scale))
        MM().buildAxisBreakLine(n, i, a, p);
      else {
        var m = new pr(k({
          shape: {
            x1: c[0],
            y1: c[1],
            x2: h[0],
            y2: h[1]
          }
        }, p));
        Ga(m.shape, m.style.lineWidth), m.anid = "line", i.add(m);
      }
      var g = n.get(["axisLine", "symbol"]);
      if (g != null) {
        var y = n.get(["axisLine", "symbolSize"]);
        $(g) && (g = [g, g]), ($(y) || wt(y)) && (y = [y, y]);
        var _ = Kl(n.get(["axisLine", "symbolOffset"]) || 0, y), b = y[0], S = y[1];
        D([{
          rotate: r.rotation + Math.PI / 2,
          offset: _[0],
          r: 0
        }, {
          rotate: r.rotation - Math.PI / 2,
          offset: _[1],
          r: Math.sqrt((c[0] - h[0]) * (c[0] - h[0]) + (c[1] - h[1]) * (c[1] - h[1]))
        }], function(w, x) {
          if (g[x] !== "none" && g[x] != null) {
            var E = Bn(g[x], -b / 2, -S / 2, b, S, d.stroke, !0), T = w.r + w.offset, C = v ? h : c;
            E.attr({
              rotation: w.rotate,
              x: C[0] + T * Math.cos(r.rotation),
              y: C[1] - T * Math.sin(r.rotation),
              silent: !0,
              z2: 11
            }), i.add(E);
          }
        });
      }
    }
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisTickLabelEstimate: function(r, t, e, n, i, a, o, s) {
    if (process.env.NODE_ENV !== "production") {
      var l = e.ensureRecord(n).ready;
      N(!l.axisTickLabelDetermine), l.axisTickLabelEstimate = !0;
    }
    var u = fg(t, i, s);
    u && ug(r, t, e, n, i, a, o, Oe.estimate);
  },
  /**
   * Finish axis tick label build.
   * Can be only called once.
   */
  axisTickLabelDetermine: function(r, t, e, n, i, a, o, s) {
    if (process.env.NODE_ENV !== "production") {
      var l = e.ensureRecord(n).ready;
      l.axisTickLabelDetermine = !0;
    }
    var u = fg(t, i, s);
    u && ug(r, t, e, n, i, a, o, Oe.determine);
    var f = FM(r, i, a, n);
    VM(r, t.labelLayoutList, f), zM(r, i, a, n, r.tickDirection);
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisName: function(r, t, e, n, i, a, o, s) {
    var l = e.ensureRecord(n);
    if (process.env.NODE_ENV !== "production") {
      var u = l.ready;
      N(u.axisTickLabelEstimate || u.axisTickLabelDetermine), u.axisName = !0;
    }
    t.nameEl && (i.remove(t.nameEl), t.nameEl = l.nameLayout = l.nameLocation = null);
    var f = r.axisName;
    if (yv(f)) {
      var c = r.nameLocation, h = r.nameDirection, v = n.getModel("nameTextStyle"), d = n.get("nameGap") || 0, p = n.axis.getExtent(), m = n.axis.inverse ? -1 : 1, g = new yt(0, 0), y = new yt(0, 0);
      c === "start" ? (g.x = p[0] - m * d, y.x = -m) : c === "end" ? (g.x = p[1] + m * d, y.x = m) : (g.x = (p[0] + p[1]) / 2, g.y = r.labelOffset + h * d, y.y = h);
      var _ = Ze();
      y.transform(mh(_, _, r.rotation));
      var b = n.get("nameRotate");
      b != null && (b = b * Lr / 180);
      var S, w;
      ki(c) ? S = Rr.innerTextLayout(
        r.rotation,
        b ?? r.rotation,
        // Adapt to axis.
        h
      ) : (S = RM(r.rotation, c, b || 0, p), w = r.raw.axisNameAvailableWidth, w != null && (w = Math.abs(w / Math.sin(S.rotation)), !isFinite(w) && (w = null)));
      var x = v.getFont(), E = n.get("nameTruncate", !0) || {}, T = E.ellipsis, C = In(r.raw.nameTruncateMaxWidth, E.maxWidth, w), A = s.nameMarginLevel || 0, L = new oe({
        x: g.x,
        y: g.y,
        rotation: S.rotation,
        silent: Rr.isLabelSilent(n),
        style: Ii(v, {
          text: f,
          font: x,
          overflow: "truncate",
          width: C,
          ellipsis: T,
          fill: v.getTextColor() || n.get(["axisLine", "lineStyle", "color"]),
          align: v.get("align") || S.textAlign,
          verticalAlign: v.get("verticalAlign") || S.textVerticalAlign
        }),
        z2: 1
      });
      if (Hl({
        el: L,
        componentModel: n,
        itemName: f
      }), L.__fullText = f, L.anid = "name", n.get("triggerEvent")) {
        var M = Rr.makeAxisEventDataBase(n);
        M.targetType = "axisName", M.name = f, ct(L).eventData = M;
      }
      a.add(L), L.updateTransform(), t.nameEl = L;
      var I = l.nameLayout = zr({
        label: L,
        priority: L.z2,
        defaultAttr: {
          ignore: L.ignore
        },
        marginDefault: ki(c) ? IM[A] : PM[A]
      });
      if (l.nameLocation = c, i.add(L), L.decomposeTransform(), r.shouldNameMoveOverlap && I) {
        var O = e.ensureRecord(n);
        process.env.NODE_ENV !== "production" && N(O.labelInfoList), e.resolveAxisNameOverlap(r, e, n, I, y, O);
      }
    }
  }
};
function ug(r, t, e, n, i, a, o, s) {
  s1(t) || HM(r, t, i, s, n, o);
  var l = t.labelLayoutList;
  $M(r, n, l, a), r.rotation;
  var u = r.optionHideOverlap;
  BM(n, l, u), u && EM(
    // Filter the already ignored labels by the previous overlap resolving methods.
    Rt(l, function(f) {
      return f && !f.label.ignore;
    })
  ), OM(r, e, n, l);
}
function RM(r, t, e, n) {
  var i = Xy(e - r), a, o, s = n[0] > n[1], l = t === "start" && !s || t !== "start" && s;
  return Vs(i - Lr / 2) ? (o = l ? "bottom" : "top", a = "center") : Vs(i - Lr * 1.5) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", i < Lr * 1.5 && i > Lr / 2 ? a = l ? "left" : "right" : a = l ? "right" : "left"), {
    rotation: i,
    textAlign: a,
    textVerticalAlign: o
  };
}
function BM(r, t, e) {
  var n = r.axis, i = r.get(["axisLabel", "customValues"]);
  if (NA(n))
    return;
  function a(u, f, c) {
    var h = zr(t[f]), v = zr(t[c]), d = n.scale;
    if (!(!h || !v)) {
      if (u == null) {
        if (!e && i)
          return;
        var p = Ri(h.label).labelInfo.tick;
        if (
          // TimeScale does not expand extent to "nice", so eliminate labels that are not nice.
          hv(d) && p.notNice || ir(d) && p.offInterval
        ) {
          oi(h.label);
          return;
        }
      }
      if (u === !1 || h.suggestIgnore) {
        oi(h.label);
        return;
      }
      if (v.suggestIgnore) {
        oi(v.label);
        return;
      }
      var m = 0.1;
      if (!e) {
        var g = [0, 0, 0, 0];
        h = sg({
          marginForce: g
        }, h), v = sg({
          marginForce: g
        }, v);
      }
      mv(h, v, null, {
        touchThreshold: m
      }) && oi(u ? v.label : h.label);
    }
  }
  var o = r.get(["axisLabel", "showMinLabel"]), s = r.get(["axisLabel", "showMaxLabel"]), l = t.length;
  a(o, 0, 1), a(s, l - 1, l - 2);
}
function VM(r, t, e) {
  r.showMinorTicks || D(t, function(n) {
    if (n && n.label.ignore)
      for (var i = 0; i < e.length; i++) {
        var a = e[i], o = e1(a), s = Ri(n.label);
        if (o.tickValue != null && !o.onBand && o.tickValue === s.labelInfo.tick.value) {
          oi(a);
          return;
        }
      }
  });
}
function oi(r) {
  r && (r.ignore = !0);
}
function o1(r, t, e, n, i) {
  for (var a = [], o = [], s = [], l = 0; l < r.length; l++) {
    var u = r[l].coord;
    o[0] = u, o[1] = 0, s[0] = u, s[1] = e, t && (Ee(o, o, t), Ee(s, s, t));
    var f = new pr({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: n,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    Ga(f.shape, f.style.lineWidth), f.anid = i + "_" + r[l].tickValue, a.push(f);
    var c = e1(f);
    c.onBand = !!r[l].onBand, c.tickValue = r[l].tickValue;
  }
  return a;
}
function FM(r, t, e, n) {
  var i = n.axis, a = n.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && (o = !0, r.raw.axisTickAutoShow != null && (o = !!r.raw.axisTickAutoShow)), !o || i.scale.isBlank())
    return [];
  for (var s = a.getModel("lineStyle"), l = r.tickDirection * a.get("length"), u = i.getTicksCoords(), f = o1(u, e.transform, l, gt(s.getLineStyle(), {
    stroke: n.get(["axisLine", "lineStyle", "color"])
  }), "ticks"), c = 0; c < f.length; c++)
    t.add(f[c]);
  return f;
}
function zM(r, t, e, n, i) {
  var a = n.axis, o = n.getModel("minorTick");
  if (!(!r.showMinorTicks || a.scale.isBlank())) {
    var s = a.getMinorTicksCoords();
    if (s.length)
      for (var l = o.getModel("lineStyle"), u = i * o.get("length"), f = gt(l.getLineStyle(), gt(n.getModel("axisTick").getLineStyle(), {
        stroke: n.get(["axisLine", "lineStyle", "color"])
      })), c = 0; c < s.length; c++)
        for (var h = o1(s[c], e.transform, u, f, "minorticks_" + c), v = 0; v < h.length; v++)
          t.add(h[v]);
  }
}
function fg(r, t, e) {
  if (s1(r)) {
    var n = r.axisLabelsCreationContext;
    process.env.NODE_ENV !== "production" && N(r.labelGroup && n);
    var i = n.out.noPxChangeTryDetermine;
    if (e.noPxChange) {
      for (var a = !0, o = 0; o < i.length; o++)
        a = a && i[o]();
      if (a)
        return !1;
    }
    i.length && (t.remove(r.labelGroup), Lc(r, null, null, null));
  }
  return !0;
}
function HM(r, t, e, n, i, a) {
  var o = i.axis, s = In(r.raw.axisLabelShow, i.get(["axisLabel", "show"])), l = new Ot();
  e.add(l);
  var u = tl(n);
  if (!s || o.scale.isBlank()) {
    Lc(t, [], l, u);
    return;
  }
  var f = i.getModel("axisLabel"), c = o.getViewLabels(u), h = (In(r.raw.labelRotate, f.get("rotate")) || 0) * Lr / 180, v = Rr.innerTextLayout(r.rotation, h, r.labelDirection), d = i.getCategories && i.getCategories(!0), p = [], m = i.get("triggerEvent"), g = 1 / 0, y = -1 / 0;
  D(c, function(b, S) {
    var w, x = b.tick, E = b.formattedLabel, T = b.rawLabel, C = f, A = co(o.scale, x);
    if (d && d[A]) {
      var L = d[A];
      X(L) && L.textStyle && (C = new Dt(L.textStyle, f, i.ecModel));
    }
    var M = C.getTextColor() || i.get(["axisLine", "lineStyle", "color"]), I = C.getShallow("align", !0) || v.textAlign, O = H(C.getShallow("alignMinLabel", !0), I), P = H(C.getShallow("alignMaxLabel", !0), I), F = C.getShallow("verticalAlign", !0) || C.getShallow("baseline", !0) || v.textVerticalAlign, G = H(C.getShallow("verticalAlignMinLabel", !0), F), U = H(C.getShallow("verticalAlignMaxLabel", !0), F), j = 10 + (((w = x.time) === null || w === void 0 ? void 0 : w.level) || 0);
    g = Math.min(g, j), y = Math.max(y, j);
    var K = new oe({
      // --- transform props start ---
      // All of the transform props MUST not be set here, but should be set in
      // `updateAxisLabelChangableProps`, because they may change in estimation,
      // and need to calculate based on global coord sys by `decomposeTransform`.
      x: 0,
      y: 0,
      rotation: 0,
      // --- transform props end ---
      silent: Rr.isLabelSilent(i),
      z2: j,
      style: Ii(C, {
        text: E,
        align: S === 0 ? O : S === c.length - 1 ? P : I,
        verticalAlign: S === 0 ? G : S === c.length - 1 ? U : F,
        fill: W(M) ? M(
          // (1) In category axis with data zoom, tick is not the original
          // index of axis.data. So tick should not be exposed to user
          // in category axis.
          // (2) Compatible with previous version, which always use formatted label as
          // input. But in interval scale the formatted label is like '223,445', which
          // maked user replace ','. So we modify it to return original val but remain
          // it as 'string' to avoid error in replacing.
          o.type === "category" ? T : o.type === "value" ? A + "" : A,
          S
        ) : M
      })
    });
    K.anid = "label_" + A;
    var et = Ri(K);
    if (et.labelInfo = b, et.layoutRotation = v.rotation, Hl({
      el: K,
      componentModel: i,
      itemName: E,
      formatterParamsExtra: {
        isTruncated: function() {
          return K.isTruncated;
        },
        value: T,
        tickIndex: S
      }
    }), m) {
      var Z = Rr.makeAxisEventDataBase(i);
      Z.targetType = "axisLabel", Z.value = T, Z.tickIndex = S;
      var z = b.tick.break;
      if (z) {
        var nt = z.parsedBreak;
        Z.break = {
          // type: labelItem.break.type,
          start: nt.vmin,
          end: nt.vmax
        };
      }
      o.type === "category" && (Z.dataIndex = A), ct(K).eventData = Z, z && UM(i, a, K, z);
    }
    p.push(K), l.add(K);
  });
  var _ = Y(p, function(b) {
    return {
      label: b,
      priority: Ri(b).labelInfo.tick.break ? b.z2 + (y - g + 1) : b.z2,
      defaultAttr: {
        ignore: b.ignore
      }
    };
  });
  Lc(t, _, l, u);
}
function s1(r) {
  return !!r.labelLayoutList;
}
function Lc(r, t, e, n) {
  r.labelLayoutList = t, r.labelGroup = e, r.axisLabelsCreationContext = n;
}
function $M(r, t, e, n) {
  var i = t.get(["axisLabel", "margin"]);
  D(e, function(a, o) {
    var s = zr(a);
    if (s) {
      var l = s.label, u = Ri(l);
      s.suggestIgnore = l.ignore, l.ignore = !1, Ls(or, GM);
      var f = t.axis;
      or.x = f.dataToCoord(co(f.scale, u.labelInfo.tick)), or.y = r.labelOffset + r.labelDirection * i, or.rotation = u.layoutRotation, n.add(or), or.updateTransform(), n.remove(or), or.decomposeTransform(), Ls(l, or), l.markRedraw(), nl(s, !0), zr(s);
    }
  });
}
var or = new Pt(), GM = new Pt();
function yv(r) {
  return !!r;
}
function UM(r, t, e, n) {
  e.on("click", function(i) {
    var a = {
      type: LM,
      breaks: [{
        start: n.parsedBreak.breakOption.start,
        end: n.parsedBreak.breakOption.end
      }]
    };
    a[r.axis.dim + "AxisIndex"] = r.componentIndex, t.dispatchAction(a);
  });
}
function il(r, t, e) {
  e = e || {};
  var n = t.axis, i = {}, a = n.getAxesOnZeroOf()[0], o = n.position, s = a ? "onZero" : o, l = n.dim, u = [r.x, r.x + r.width, r.y, r.y + r.height], f = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, c = t.get("offset") || 0, h = l === "x" ? [u[2] - c, u[3] + c] : [u[0] - c, u[1] + c];
  if (a) {
    var v = a.toGlobalCoord(a.dataToCoord(0));
    h[f.onZero] = Math.max(Math.min(v, h[1]), h[0]);
  }
  i.position = [l === "y" ? h[f[s]] : u[0], l === "x" ? h[f[s]] : u[3]], i.rotation = Math.PI / 2 * (l === "x" ? 0 : 1);
  var d = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  i.labelDirection = i.tickDirection = i.nameDirection = d[o], i.labelOffset = a ? h[f[o]] - h[f.onZero] : 0, t.get(["axisTick", "inside"]) && (i.tickDirection = -i.tickDirection), In(e.labelInside, t.get(["axisLabel", "inside"])) && (i.labelDirection = -i.labelDirection);
  var p = t.get(["axisLabel", "rotate"]);
  return i.labelRotate = s === "top" ? -p : p, i.z2 = 1, i;
}
function WM(r) {
  var t = {
    xAxisModel: null,
    yAxisModel: null
  };
  return D(t, function(e, n) {
    var i = n.replace(/Model$/, ""), a = r.getReferringComponents(i, Te).models[0];
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(i + ' "' + Pr(r.get(i + "Index"), r.get(i + "Id"), 0) + '" not found');
    t[n] = a;
  }), t;
}
function YM(r, t, e, n, i, a) {
  for (var o = il(r, e), s = !1, l = !1, u = 0; u < t.length; u++)
    k0(t[u].getOtherAxis(e.axis).scale) && (s = l = !0, e.axis.type === "category" && e.axis.onBand && (l = !1));
  return o.axisLineAutoShow = s, o.axisTickAutoShow = l, o.defaultNameMoveOverlap = a, new Rr(e, n, o, i);
}
function XM(r, t, e) {
  var n = il(t, e);
  if (process.env.NODE_ENV !== "production") {
    var i = r.__getRawCfg();
    D(St(n), function(a) {
      a !== "position" && a !== "labelOffset" && N(n[a] === i[a]);
    });
  }
  r.updateCfg(n);
}
var ZM = dt(), qM = 1, KM = 2, QM = 3, l1 = (
  /** @class */
  (function() {
    function r(t, e, n, i, a) {
      var o = ir(t), s = o ? e.getCategories().length : null, l;
      if (o) {
        var u = e.getCategories(!0);
        l = u && !u.length;
      }
      var f = n.slice();
      (Qs(t) || Ni(t) || hv(t)) && (n_(f, ra(t, e.get("dataMin", !0))), i_(f, ra(t, e.get("dataMax", !0)))), Xx(f) || (f[0] = f[1] = NaN);
      var c = [], h = [!1, !1], v = e.get("min", !0);
      v === "dataMin" ? (c[0] = f[0], h[0] = !0) : (c[0] = ra(t, W(v) ? v({
        min: f[0],
        max: f[1]
      }) : v), h[0] = c[0] != null);
      var d = e.get("max", !0);
      d === "dataMax" ? (c[1] = f[1], h[1] = !0) : (c[1] = ra(t, W(d) ? d({
        min: f[0],
        max: f[1]
      }) : d), h[1] = c[1] != null);
      var p = jM(t, e), m = o ? null : f[1] - f[0] || Math.abs(f[0]);
      c[0] == null && (c[0] = o ? l ? f[0] : s ? 0 : NaN : f[0] - p[0] * m), c[1] == null && (c[1] = o ? l ? f[1] : s ? s - 1 : NaN : f[1] + p[1] * m), !dr(c[0]) && (c[0] = NaN), !dr(c[1]) && (c[1] = NaN);
      var g = l || xi(c[0]) || xi(c[1]) || o && !s, y = Qs(t), _ = y && e.needIncludeZero && e.needIncludeZero();
      _ && (c[0] > 0 && c[1] > 0 && !h[0] && (c[0] = 0), c[0] < 0 && c[1] < 0 && !h[1] && (c[1] = 0));
      var b = !1;
      c[0] > c[1] && (c.reverse(), b = !0);
      var S = ra(t, e.get("startValue", !0)), w = S != null;
      !er(S) && i && (S = t.getDefaultStartValue ? t.getDefaultStartValue() : 0), er(S) && (w || !y || _) && (S < c[0] && !h[0] ? (c[0] = S, h[0] = !0) : S > c[1] && !h[1] && (c[1] = S, h[1] = !0));
      var x = this._i = {
        scale: t,
        dataMM: f,
        noZoomEffMM: c,
        zoomMM: [],
        fixMM: h,
        zoomFixMM: [!1, !1],
        startValue: S,
        isBlank: g,
        incl0: _,
        tggAxInv: b,
        ctnShp: a
      };
      cg(x, c);
    }
    return r.prototype.makeNoZoom = function() {
      return this._i.noZoomEffMM.slice();
    }, r.prototype.makeFinal = function() {
      var t = this._i, e = t.zoomMM, n = t.noZoomEffMM, i = t.zoomFixMM, a = t.fixMM, o = {
        fixMM: a,
        zoomFixMM: i,
        isBlank: t.isBlank,
        incl0: t.incl0,
        tggAxInv: t.tggAxInv,
        ctnShp: t.ctnShp,
        effMM: n.slice()
      }, s = o.effMM;
      return e[0] != null && (s[0] = e[0], a[0] = i[0] = !0), e[1] != null && (s[1] = e[1], a[1] = i[1] = !0), cg(t, s), o;
    }, r.prototype.makeRenderInfo = function() {
      return {
        startValue: this._i.startValue
      };
    }, r.prototype.setZoomMM = function(t, e) {
      this._i.zoomMM[t] = e;
    }, r;
  })()
);
function cg(r, t) {
  var e = r.scale, n = r.dataMM;
  e.sanitize && (t[0] = e.sanitize(t[0], n), t[1] = e.sanitize(t[1], n), Zx(t));
}
function ra(r, t) {
  return t == null ? null : xi(t) ? NaN : r.parse(t);
}
function jM(r, t) {
  var e;
  if (ir(r))
    e = [0, 0];
  else {
    var n = t.get("boundaryGap");
    typeof n == "boolean" && (process.env.NODE_ENV !== "production" && n === !0 && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to 0.'), n = null), e = B(n) ? n : [n, n];
  }
  return [hg(e[0]), hg(e[1])];
}
function hg(r) {
  return Di(typeof r == "boolean" ? 0 : r, 1) || 0;
}
function u1(r) {
  var t = ZM(r.scale);
  return t.extent || (t.extent = xe()), t;
}
function JM(r, t) {
  u1(r).dimIdxInCoord = t.get(r.dim);
}
function tL(r, t) {
  var e = r.scale, n = r.model, i = r.dim;
  if (process.env.NODE_ENV !== "production" && N(e && n && i), e.rawExtentInfo) {
    process.env.NODE_ENV !== "production" && N(e.rawExtentInfo.from !== t || t === KM);
    return;
  }
  eL(e, r, i, n, t);
}
function eL(r, t, e, n, i) {
  var a = u1(t), o = a.extent, s = !1;
  pM(t, function(f) {
    if (f.boxCoordinateSystem) {
      var c = t0(f).coord, h = a.dimIdxInCoord;
      if (!(h >= 0))
        process.env.NODE_ENV !== "production" && ut('Property "series.coord" is not supported on axis ' + f.boxCoordinateSystem.type + ".");
      else if (B(c)) {
        var v = c[h];
        v != null && !B(v) && ac(o, r.parse(v));
      }
    } else if (f.coordinateSystem) {
      var d = f.getData();
      if (d) {
        var p = r.getFilter ? r.getFilter() : null;
        D(kA(d, e), function(m) {
          Yx(o, d.getApproximateExtent(m, p));
        });
      }
      f.__requireStartValue && f.__requireStartValue(t) && (s = !0);
    }
  });
  var l = nL(r, t, n), u = new l1(r, n, o, s, l);
  f1(r, u, i), a.extent = null;
}
function rL(r, t) {
  var e = r.scale;
  process.env.NODE_ENV !== "production" && N(!e.rawExtentInfo), f1(e, new l1(e, r.model, t, !1, !1), QM);
}
function f1(r, t, e) {
  r.rawExtentInfo = t, t.from = e;
}
var c1 = Q();
function h1(r, t, e, n, i) {
  process.env.NODE_ENV !== "production" && N(!0), r.rawExtentInfo || rL({
    scale: r,
    model: t
  }, xe());
  var a = r.rawExtentInfo.makeFinal(), o = a.effMM;
  return r.setExtent(o[0], o[1]), r.setBlank(a.isBlank), n && a.tggAxInv && e && !e.get("legacyMinMaxDontInverseAxis") && (n.inverse = !n.inverse), a;
}
function nL(r, t, e) {
  var n = G0(r, e), i = e.get("containShape", !0);
  if (i == null && !n && (i = !0), !i)
    return !1;
  var a = !1;
  return j0(t, function(o) {
    a = !!c1.get(o) || a;
  }), a;
}
function iL(r, t, e, n) {
  if (e.ctnShp) {
    var i;
    if (j0(r, function(s) {
      var l = c1.get(s);
      if (l) {
        var u = l(r, n);
        u && (i = i || [0, 0], n_(i, u[0]), i_(i, u[1]), PA(r));
      }
    }), !!i) {
      var a = t.getExtent();
      if (ir(t))
        r.onBand || t.setExtent2(Xa, ce(a[0], a[0] + i[0]), pt(a[1], a[1] + i[1]));
      else {
        var o = a.slice();
        e.zoomFixMM[0] || (o[0] = ce(o[0], t.transformOut(t.transformIn(o[0], null) + i[0], null))), e.zoomFixMM[1] || (o[1] = pt(o[1], t.transformOut(t.transformIn(o[1], null) + i[1], null))), (o[0] < a[0] || o[1] > a[1]) && t.setExtent2(Xa, o[0], o[1]);
      }
    }
  }
}
var v1 = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, al = ["25%", "25%"], xs = "cartesian2d", aL = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = fo(e.outerBounds);
      r.prototype.mergeDefaultAndTheme.apply(this, arguments), i && e.outerBounds && Vr(e.outerBounds, i);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && e.outerBounds && Vr(this.option.outerBounds, e.outerBounds);
    }, t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
      show: !1,
      // zlevel: 0,
      z: 0,
      left: "15%",
      top: 65,
      right: "10%",
      bottom: 80,
      // If grid size contain label
      containLabel: !1,
      outerBoundsMode: "auto",
      outerBounds: v1,
      outerBoundsContain: "all",
      outerBoundsClampWidth: al[0],
      outerBoundsClampHeight: al[1],
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: q.color.transparent,
      borderWidth: 1,
      borderColor: q.color.neutral30
    }, t;
  })(ft)
), ol = "\0__throttleOriginMethod", vg = "\0__throttleRate", dg = "\0__throttleType";
function d1(r, t, e) {
  var n, i = 0, a = 0, o = null, s, l, u, f;
  t = t || 0;
  function c() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(l, u || []);
  }
  var h = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    n = (/* @__PURE__ */ new Date()).getTime(), l = this, u = v;
    var p = f || t, m = f || e;
    f = null, s = n - (m ? i : a) - p, clearTimeout(o), m ? o = setTimeout(c, p) : s >= 0 ? c() : o = setTimeout(c, -s), i = n;
  };
  return h.clear = function() {
    o && (clearTimeout(o), o = null);
  }, h.debounceNextCall = function(v) {
    f = v;
  }, h;
}
function p1(r, t, e, n) {
  var i = r[t];
  if (i) {
    var a = i[ol] || i, o = i[dg], s = i[vg];
    if (s !== e || o !== n) {
      if (e == null || !n)
        return r[t] = a;
      i = r[t] = d1(a, e, n === "debounce"), i[ol] = a, i[dg] = n, i[vg] = e;
    }
    return i;
  }
}
function Ic(r, t) {
  var e = r[t];
  e && e[ol] && (e.clear && e.clear(), r[t] = e[ol]);
}
function Qn(r, t, e, n, i) {
  var a = r + t;
  e.isSilent(a) || (process.env.NODE_ENV !== "production" && vr("event " + a + " is deprecated."), n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, l = o.option.selectedMap, u = i.selected, f = 0; f < u.length; f++)
      if (u[f].seriesIndex === s) {
        var c = o.getData(), h = On(c, i.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: B(h) ? c.getName(h[0]) : c.getName(h),
          selected: $(l) ? l : k({}, l)
        });
      }
  }));
}
function oL(r, t, e) {
  r.on("selectchanged", function(n) {
    var i = e.getModel();
    n.isFromClick ? (Qn("map", "selectchanged", t, i, n), Qn("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (Qn("map", "selected", t, i, n), Qn("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (Qn("map", "unselected", t, i, n), Qn("pie", "unselected", t, i, n));
  });
}
var jn = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
})(), sL = (function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new jn(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, e.drift(a, o, t), this.handler.dispatchToElement(new jn(e, t), "drag", t.event);
      var s = this.handler.findHover(n, i, e).target, l = this._dropTarget;
      this._dropTarget = s, e !== s && (l && s !== l && this.handler.dispatchToElement(new jn(l, t), "dragleave", t.event), s && s !== l && this.handler.dispatchToElement(new jn(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new jn(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new jn(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
})(), lL = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ku = [], uL = tt.browser.firefox && +tt.browser.version.split(".")[0] < 39;
function Pc(r, t, e, n) {
  return e = e || {}, n ? pg(r, t, e) : uL && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : pg(r, t, e), e;
}
function pg(r, t, e) {
  if (tt.domSupported && r.getBoundingClientRect) {
    var n = t.clientX, i = t.clientY;
    if (r0(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = n - a.left, e.zrY = i - a.top;
      return;
    } else if (yc(Ku, r, n, i)) {
      e.zrX = Ku[0], e.zrY = Ku[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function _v(r) {
  return r || window.event;
}
function me(r, t, e) {
  if (t = _v(t), t.zrX != null)
    return t;
  var n = t.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && Pc(r, o, t, e);
  } else {
    Pc(r, t, t, e);
    var a = fL(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && lL.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function fL(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, n = r.deltaY;
  if (e == null || n == null)
    return t;
  var i = Math.abs(n !== 0 ? n : e), a = n > 0 ? -1 : n < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * i * a;
}
function cL(r, t, e, n) {
  r.addEventListener(t, e, n);
}
function hL(r, t, e, n) {
  r.removeEventListener(t, e, n);
}
var g1 = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, vL = (function() {
  function r() {
    this._track = [];
  }
  return r.prototype.recognize = function(t, e, n) {
    return this._doTrack(t, e, n), this._recognize(t);
  }, r.prototype.clear = function() {
    return this._track.length = 0, this;
  }, r.prototype._doTrack = function(t, e, n) {
    var i = t.touches;
    if (i) {
      for (var a = {
        points: [],
        touches: [],
        target: e,
        event: t
      }, o = 0, s = i.length; o < s; o++) {
        var l = i[o], u = Pc(n, l, {});
        a.points.push([u.zrX, u.zrY]), a.touches.push(l);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in Qu)
      if (Qu.hasOwnProperty(e)) {
        var n = Qu[e](this._track, t);
        if (n)
          return n;
      }
  }, r;
})();
function gg(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function dL(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var Qu = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var n = (r[e - 1] || {}).points, i = (r[e - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = gg(n) / gg(i);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = dL(n);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
}, m1 = "silent";
function pL(r, t, e) {
  return {
    type: r,
    event: e,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: e.zrX,
    offsetY: e.zrY,
    gestureEvent: e.gestureEvent,
    pinchX: e.pinchX,
    pinchY: e.pinchY,
    pinchScale: e.pinchScale,
    wheelDelta: e.zrDelta,
    zrByTouch: e.zrByTouch,
    which: e.which,
    stop: gL
  };
}
function gL() {
  g1(this.event);
}
var mL = (function(r) {
  V(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
})(rr), na = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
})(), yL = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], ju = new J(0, 0, 0, 0), y1 = (function(r) {
  V(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new na(0, 0), s.storage = e, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new mL(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new sL(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (D(yL, function(n) {
      e.on && e.on(n, this[n], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var n = e.zrX, i = e.zrY, a = _1(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var l = this._hovered = a ? new na(n, i) : this.findHover(n, i), u = l.target, f = this.proxy;
    f.setCursor && f.setCursor(u ? u.cursor : "default"), s && u !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(l, "mousemove", e), u && u !== s && this.dispatchToElement(l, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var n = e.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new na(0, 0);
  }, t.prototype.dispatch = function(e, n) {
    var i = this[e];
    i && i.call(this, n);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(e) {
    var n = this.proxy;
    n.setCursor && n.setCursor(e);
  }, t.prototype.dispatchToElement = function(e, n, i) {
    e = e || {};
    var a = e.target;
    if (!(a && a.silent)) {
      for (var o = "on" + n, s = pL(n, e, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(l) {
        typeof l[o] == "function" && l[o].call(l, s), l.trigger && l.trigger(n, s);
      }));
    }
  }, t.prototype.findHover = function(e, n, i) {
    var a = this.storage.getDisplayList(), o = new na(e, n);
    if (mg(a, o, e, n, i), this._pointerSize && !o.target) {
      for (var s = [], l = this._pointerSize, u = l / 2, f = new J(e - u, n - u, l, l), c = a.length - 1; c >= 0; c--) {
        var h = a[c];
        h !== i && !h.ignore && !h.ignoreCoarsePointer && (!h.parent || !h.parent.ignoreCoarsePointer) && (ju.copy(h.getBoundingRect()), h.transform && ju.applyTransform(h.transform), ju.intersect(f) && s.push(h));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, p = Math.PI * 2, m = 0; m < u; m += v)
          for (var g = 0; g < p; g += d) {
            var y = e + m * Math.cos(g), _ = n + m * Math.sin(g);
            if (mg(s, o, y, _, i), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, n) {
    this._gestureMgr || (this._gestureMgr = new vL());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new na();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
})(rr);
D(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  y1.prototype[r] = function(t) {
    var e = t.zrX, n = t.zrY, i = _1(this, e, n), a, o;
    if ((r !== "mouseup" || !i) && (a = this.findHover(e, n), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || tw(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function _L(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var n = r, i = void 0, a = !1; n; ) {
      if (n.ignoreClip && (a = !0), !a) {
        var o = n.getClipPath();
        if (o && !o.contain(t, e))
          return !1;
      }
      n.silent && (i = !0);
      var s = n.__hostTarget;
      n = s ? n.ignoreHostSilent ? null : s : n.parent;
    }
    return i ? m1 : !0;
  }
  return !1;
}
function mg(r, t, e, n, i) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== i && !o.ignore && (s = _L(o, e, n)) && (!t.topTarget && (t.topTarget = o), s !== m1)) {
      t.target = o;
      break;
    }
  }
}
function _1(r, t, e) {
  var n = r.painter;
  return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
}
var b1 = 32, ia = 7;
function bL(r) {
  for (var t = 0; r >= b1; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function yg(r, t, e, n) {
  var i = t + 1;
  if (i === e)
    return 1;
  if (n(r[i++], r[t]) < 0) {
    for (; i < e && n(r[i], r[i - 1]) < 0; )
      i++;
    SL(r, t, i);
  } else
    for (; i < e && n(r[i], r[i - 1]) >= 0; )
      i++;
  return i - t;
}
function SL(r, t, e) {
  for (e--; t < e; ) {
    var n = r[t];
    r[t++] = r[e], r[e--] = n;
  }
}
function _g(r, t, e, n, i) {
  for (n === t && n++; n < e; n++) {
    for (var a = r[n], o = t, s = n, l; o < s; )
      l = o + s >>> 1, i(a, r[l]) < 0 ? s = l : o = l + 1;
    var u = n - o;
    switch (u) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; u > 0; )
          r[o + u] = r[o + u - 1], u--;
    }
    r[o] = a;
  }
}
function Ju(r, t, e, n, i, a) {
  var o = 0, s = 0, l = 1;
  if (a(r, t[e + i]) > 0) {
    for (s = n - i; l < s && a(r, t[e + i + l]) > 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s), o += i, l += i;
  } else {
    for (s = i + 1; l < s && a(r, t[e + i - l]) <= 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s);
    var u = o;
    o = i - l, l = i - u;
  }
  for (o++; o < l; ) {
    var f = o + (l - o >>> 1);
    a(r, t[e + f]) > 0 ? o = f + 1 : l = f;
  }
  return l;
}
function tf(r, t, e, n, i, a) {
  var o = 0, s = 0, l = 1;
  if (a(r, t[e + i]) < 0) {
    for (s = i + 1; l < s && a(r, t[e + i - l]) < 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s);
    var u = o;
    o = i - l, l = i - u;
  } else {
    for (s = n - i; l < s && a(r, t[e + i + l]) >= 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s), o += i, l += i;
  }
  for (o++; o < l; ) {
    var f = o + (l - o >>> 1);
    a(r, t[e + f]) < 0 ? l = f : o = f + 1;
  }
  return l;
}
function wL(r, t) {
  var e = ia, n, i, a = 0, o = [];
  n = [], i = [];
  function s(v, d) {
    n[a] = v, i[a] = d, a += 1;
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      if (v >= 1 && i[v - 1] <= i[v] + i[v + 1] || v >= 2 && i[v - 2] <= i[v] + i[v - 1])
        i[v - 1] < i[v + 1] && v--;
      else if (i[v] > i[v + 1])
        break;
      f(v);
    }
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && i[v - 1] < i[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = n[v], p = i[v], m = n[v + 1], g = i[v + 1];
    i[v] = p + g, v === a - 3 && (n[v + 1] = n[v + 2], i[v + 1] = i[v + 2]), a--;
    var y = tf(r[m], r, d, p, 0, t);
    d += y, p -= y, p !== 0 && (g = Ju(r[d + p - 1], r, m, g, g - 1, t), g !== 0 && (p <= g ? c(d, p, m, g) : h(d, p, m, g)));
  }
  function c(v, d, p, m) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = r[v + g];
    var y = 0, _ = p, b = v;
    if (r[b++] = r[_++], --m === 0) {
      for (g = 0; g < d; g++)
        r[b + g] = o[y + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < m; g++)
        r[b + g] = r[_ + g];
      r[b + m] = o[y];
      return;
    }
    for (var S = e, w, x, E; ; ) {
      w = 0, x = 0, E = !1;
      do
        if (t(r[_], o[y]) < 0) {
          if (r[b++] = r[_++], x++, w = 0, --m === 0) {
            E = !0;
            break;
          }
        } else if (r[b++] = o[y++], w++, x = 0, --d === 1) {
          E = !0;
          break;
        }
      while ((w | x) < S);
      if (E)
        break;
      do {
        if (w = tf(r[_], o, y, d, 0, t), w !== 0) {
          for (g = 0; g < w; g++)
            r[b + g] = o[y + g];
          if (b += w, y += w, d -= w, d <= 1) {
            E = !0;
            break;
          }
        }
        if (r[b++] = r[_++], --m === 0) {
          E = !0;
          break;
        }
        if (x = Ju(o[y], r, _, m, 0, t), x !== 0) {
          for (g = 0; g < x; g++)
            r[b + g] = r[_ + g];
          if (b += x, _ += x, m -= x, m === 0) {
            E = !0;
            break;
          }
        }
        if (r[b++] = o[y++], --d === 1) {
          E = !0;
          break;
        }
        S--;
      } while (w >= ia || x >= ia);
      if (E)
        break;
      S < 0 && (S = 0), S += 2;
    }
    if (e = S, e < 1 && (e = 1), d === 1) {
      for (g = 0; g < m; g++)
        r[b + g] = r[_ + g];
      r[b + m] = o[y];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        r[b + g] = o[y + g];
    }
  }
  function h(v, d, p, m) {
    var g = 0;
    for (g = 0; g < m; g++)
      o[g] = r[p + g];
    var y = v + d - 1, _ = m - 1, b = p + m - 1, S = 0, w = 0;
    if (r[b--] = r[y--], --d === 0) {
      for (S = b - (m - 1), g = 0; g < m; g++)
        r[S + g] = o[g];
      return;
    }
    if (m === 1) {
      for (b -= d, y -= d, w = b + 1, S = y + 1, g = d - 1; g >= 0; g--)
        r[w + g] = r[S + g];
      r[b] = o[_];
      return;
    }
    for (var x = e; ; ) {
      var E = 0, T = 0, C = !1;
      do
        if (t(o[_], r[y]) < 0) {
          if (r[b--] = r[y--], E++, T = 0, --d === 0) {
            C = !0;
            break;
          }
        } else if (r[b--] = o[_--], T++, E = 0, --m === 1) {
          C = !0;
          break;
        }
      while ((E | T) < x);
      if (C)
        break;
      do {
        if (E = d - tf(o[_], r, v, d, d - 1, t), E !== 0) {
          for (b -= E, y -= E, d -= E, w = b + 1, S = y + 1, g = E - 1; g >= 0; g--)
            r[w + g] = r[S + g];
          if (d === 0) {
            C = !0;
            break;
          }
        }
        if (r[b--] = o[_--], --m === 1) {
          C = !0;
          break;
        }
        if (T = m - Ju(r[y], o, 0, m, m - 1, t), T !== 0) {
          for (b -= T, _ -= T, m -= T, w = b + 1, S = _ + 1, g = 0; g < T; g++)
            r[w + g] = o[S + g];
          if (m <= 1) {
            C = !0;
            break;
          }
        }
        if (r[b--] = r[y--], --d === 0) {
          C = !0;
          break;
        }
        x--;
      } while (E >= ia || T >= ia);
      if (C)
        break;
      x < 0 && (x = 0), x += 2;
    }
    if (e = x, e < 1 && (e = 1), m === 1) {
      for (b -= d, y -= d, w = b + 1, S = y + 1, g = d - 1; g >= 0; g--)
        r[w + g] = r[S + g];
      r[b] = o[_];
    } else {
      if (m === 0)
        throw new Error();
      for (S = b - (m - 1), g = 0; g < m; g++)
        r[S + g] = o[g];
    }
  }
  return {
    mergeRuns: l,
    forceMergeRuns: u,
    pushRun: s
  };
}
function Ts(r, t, e, n) {
  e || (e = 0), n || (n = r.length);
  var i = n - e;
  if (!(i < 2)) {
    var a = 0;
    if (i < b1) {
      a = yg(r, e, n, t), _g(r, e, n, e + a, t);
      return;
    }
    var o = wL(r, t), s = bL(i);
    do {
      if (a = yg(r, e, n, t), a < s) {
        var l = i;
        l > s && (l = s), _g(r, e, e + l, e + a, t), a = l;
      }
      o.pushRun(e, a), o.mergeRuns(), i -= a, e += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var bg = !1;
function ef() {
  bg || (bg = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Sg(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var xL = (function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Sg;
  }
  return r.prototype.traverse = function(t, e) {
    for (var n = 0; n < this._roots.length; n++)
      this._roots[n].traverse(t, e);
  }, r.prototype.getDisplayList = function(t, e) {
    e = e || !1;
    var n = this._displayList;
    return (t || !n.length) && this.updateDisplayList(e), n;
  }, r.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var e = this._roots, n = this._displayList, i = 0, a = e.length; i < a; i++)
      this._updateAndAddDisplayable(e[i], null, t);
    n.length = this._displayListLen, Ts(n, Sg);
  }, r.prototype._updateAndAddDisplayable = function(t, e, n) {
    if (!(t.ignore && !n)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var i = t.getClipPath(), a = e && e.length, o = 0, s = t.__clipPaths;
      if (!t.ignoreClip && (a || i)) {
        if (s || (s = t.__clipPaths = []), a)
          for (var l = 0; l < e.length; l++)
            s[o++] = e[l];
        for (var u = i, f = t; u; )
          u.parent = f, u.updateTransform(), s[o++] = u, f = u, u = u.getClipPath();
      }
      if (s && (s.length = o), t.childrenRef) {
        for (var c = t.childrenRef(), h = 0; h < c.length; h++) {
          var v = c[h];
          t.__dirty && (v.__dirty |= ie), this._updateAndAddDisplayable(v, s, n);
        }
        t.__dirty = 0;
      } else {
        var d = t;
        isNaN(d.z) && (ef(), d.z = 0), isNaN(d.z2) && (ef(), d.z2 = 0), isNaN(d.zlevel) && (ef(), d.zlevel = 0), this._displayList[this._displayListLen++] = d;
      }
      var p = t.getDecalElement && t.getDecalElement();
      p && this._updateAndAddDisplayable(p, s, n);
      var m = t.getTextGuideLine();
      m && this._updateAndAddDisplayable(m, s, n);
      var g = t.getTextContent();
      g && this._updateAndAddDisplayable(g, s, n);
    }
  }, r.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, r.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var e = 0, n = t.length; e < n; e++)
        this.delRoot(t[e]);
      return;
    }
    var i = lt(this._roots, t);
    i >= 0 && this._roots.splice(i, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
})(), sl;
sl = tt.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
function vi() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var TL = (function(r) {
  V(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, e = e || {}, n.stage = e.stage || {}, n;
  }
  return t.prototype.addClip = function(e) {
    e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
  }, t.prototype.addAnimator = function(e) {
    e.animation = this;
    var n = e.getClip();
    n && this.addClip(n);
  }, t.prototype.removeClip = function(e) {
    if (e.animation) {
      var n = e.prev, i = e.next;
      n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, e.next = e.prev = e.animation = null;
    }
  }, t.prototype.removeAnimator = function(e) {
    var n = e.getClip();
    n && this.removeClip(n), e.animation = null;
  }, t.prototype.update = function(e) {
    for (var n = vi() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, e || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function n() {
      e._running && (sl(n), !e._paused && e.update());
    }
    sl(n);
  }, t.prototype.start = function() {
    this._running || (this._time = vi(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = vi(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += vi() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var e = this._head; e; ) {
      var n = e.next;
      e.prev = e.next = e.animation = null, e = n;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(e, n) {
    n = n || {}, this.start();
    var i = new bh(e, n.loop);
    return this.addAnimator(i), i;
  }, t;
})(rr), CL = 300, rf = tt.domSupported, nf = (function() {
  var r = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], e = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, n = Y(r, function(i) {
    var a = i.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: r,
    touch: t,
    pointer: n
  };
})(), wg = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, xg = !1;
function Oc(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function DL(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function af(r) {
  r && (r.zrByTouch = !0);
}
function EL(r, t) {
  return me(r.dom, new AL(r, t), !0);
}
function S1(r, t) {
  for (var e = t, n = !1; e && e.nodeType !== 9 && !(n = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return n;
}
var AL = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.stopPropagation = Gt, this.stopImmediatePropagation = Gt, this.preventDefault = Gt, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
})(), Pe = {
  mousedown: function(r) {
    r = me(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = me(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = me(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = me(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    S1(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    xg = !0, r = me(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    xg || (r = me(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = me(this.dom, r), af(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), Pe.mousemove.call(this, r), Pe.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = me(this.dom, r), af(r), this.handler.processGesture(r, "change"), Pe.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = me(this.dom, r), af(r), this.handler.processGesture(r, "end"), Pe.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < CL && Pe.click.call(this, r);
  },
  pointerdown: function(r) {
    Pe.mousedown.call(this, r);
  },
  pointermove: function(r) {
    Oc(r) || Pe.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Pe.mouseup.call(this, r);
  },
  pointerout: function(r) {
    Oc(r) || Pe.mouseout.call(this, r);
  }
};
D(["click", "dblclick", "contextmenu"], function(r) {
  Pe[r] = function(t) {
    t = me(this.dom, t), this.trigger(r, t);
  };
});
var Nc = {
  pointermove: function(r) {
    Oc(r) || Nc.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Nc.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function ML(r, t) {
  var e = t.domHandlers;
  tt.pointerEventsSupported ? D(nf.pointer, function(n) {
    Cs(t, n, function(i) {
      e[n].call(r, i);
    });
  }) : (tt.touchEventsSupported && D(nf.touch, function(n) {
    Cs(t, n, function(i) {
      e[n].call(r, i), DL(t);
    });
  }), D(nf.mouse, function(n) {
    Cs(t, n, function(i) {
      i = _v(i), t.touching || e[n].call(r, i);
    });
  }));
}
function LL(r, t) {
  tt.pointerEventsSupported ? D(wg.pointer, e) : tt.touchEventsSupported || D(wg.mouse, e);
  function e(n) {
    function i(a) {
      a = _v(a), S1(r, a.target) || (a = EL(r, a), t.domHandlers[n].call(r, a));
    }
    Cs(t, n, i, { capture: !0 });
  }
}
function Cs(r, t, e, n) {
  r.mounted[t] = e, r.listenerOpts[t] = n, cL(r.domTarget, t, e, n);
}
function of(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && hL(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var Tg = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
})(), IL = (function(r) {
  V(t, r);
  function t(e, n) {
    var i = r.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new Tg(e, Pe), rf && (i._globalHandlerScope = new Tg(document, Nc)), ML(i, i._localHandlerScope), i;
  }
  return t.prototype.dispose = function() {
    of(this._localHandlerScope), rf && of(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, rf && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var n = this._globalHandlerScope;
      e ? LL(this, n) : of(n);
    }
  }, t;
})(rr);
var ga = {}, w1 = {};
function PL(r) {
  delete w1[r];
}
function OL(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return ks(r, 1) < Qf;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, n = t.length, i = 0; i < n; i++)
      e += ks(t[i].color, 1);
    return e /= n, e < Qf;
  }
  return !1;
}
var NL = (function() {
  function r(t, e, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !1, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
    var a = new xL(), o = n.renderer || "canvas";
    if (ga[o] || (o = St(ga)[0]), process.env.NODE_ENV !== "production" && !ga[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new ga[o](e, a, n, t), l = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var u = !tt.node && !tt.worker && !l ? new IL(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, c = f == null || f === "auto" ? tt.touchEventsSupported : !!f, h = 44, v;
    c && (v = H(n.pointerSize, h)), this.handler = new y1(a, s, u, s.root, v), this.animation = new TL({
      stage: {
        update: l ? null : function() {
          return i._flush(!1);
        }
      }
    }), l || this.animation.start();
  }
  return r.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, r.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, r.prototype.configLayer = function(t, e) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh());
  }, r.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = OL(t));
  }, r.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, r.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, r.prototype.isDarkMode = function() {
    return this._darkMode;
  }, r.prototype.refreshImmediately = function(t) {
    this._disposed || this._refresh({
      animUpdate: !t,
      refresh: !0,
      refreshHover: !1
    });
  }, r.prototype._refresh = function(t) {
    t.animUpdate && this.animation.update(!0), this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh({
      refresh: t.refresh,
      refreshHover: t.refreshHover
    }), this._needsRefresh = this._needsRefreshHover = !1;
  }, r.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, r.prototype.flush = function() {
    this._disposed || this._flush(!0);
  }, r.prototype._flush = function(t) {
    var e, n = vi(), i = this._needsRefresh, a = this._needsRefreshHover;
    (i || a) && (e = !0, this._refresh({
      animUpdate: t,
      refresh: i,
      refreshHover: a
    }));
    var o = vi();
    e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: o - n
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, r.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, r.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, r.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, r.prototype.refreshHoverImmediately = function() {
    this._disposed || this._refresh({
      animUpdate: !1,
      refresh: !1,
      refreshHover: !0
    });
  }, r.prototype.resize = function(t) {
    this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize());
  }, r.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, r.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, r.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, r.prototype.setCursorStyle = function(t) {
    this._disposed || this.handler.setCursorStyle(t);
  }, r.prototype.findHover = function(t, e) {
    if (!this._disposed)
      return this.handler.findHover(t, e);
  }, r.prototype.on = function(t, e, n) {
    return this._disposed || this.handler.on(t, e, n), this;
  }, r.prototype.off = function(t, e) {
    this._disposed || this.handler.off(t, e);
  }, r.prototype.trigger = function(t, e) {
    this._disposed || this.handler.trigger(t, e);
  }, r.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof Ot && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, r.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, PL(this.id));
  }, r;
})();
function Cg(r, t) {
  var e = new NL(py(), r, t);
  return w1[e.id] = e, e;
}
function kL(r, t) {
  ga[r] = t;
}
var x1 = "";
typeof navigator < "u" && (x1 = navigator.platform || "");
var Jn = "rgba(0, 0, 0, 0.2)", T1 = q.color.theme[0], RL = Xf(T1, null, null, 0.9);
const C1 = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: q.color.theme,
  gradientColor: [RL, T1],
  aria: {
    decal: {
      decals: [{
        color: Jn,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Jn,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Jn,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Jn,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Jn,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Jn,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: x1.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var BL = Q();
function VL(r, t, e) {
  var n = BL.get(t);
  if (!n)
    return e;
  var i = n(r);
  if (!i)
    return e;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < i.length; a++)
      N(Ai(i[a]));
  return e.concat(i);
}
var Xo, aa, Dg, sf = "\0_ec_inner", Eg = 1, FL = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  matrix: "MatrixComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, zL = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  chord: "ChordChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, ll = {};
function HL(r) {
  D(r, function(t, e) {
    if (!ft.hasClass(e)) {
      var n = FL[e];
      n && !ll[n] && (ut("Component " + e + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), ll[n] = !0);
    }
  });
}
var bv = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new Dt(a), this._locale = new Dt(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, n, i) {
      process.env.NODE_ENV !== "production" && (N(e != null, "option is null/undefined"), N(e[sf] !== Eg, "please use chart.getOption()"));
      var a = Lg(n);
      this._optionManager.setOption(e, i, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, n) {
      return this._resetOption(e, Lg(n));
    }, t.prototype._resetOption = function(e, n) {
      var i = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        process.env.NODE_ENV !== "production" && HL(o), !this.option || e === "recreate" ? Dg(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!e || e === "recreate" || e === "media") {
        var l = a.getMediaOption(this);
        l.length && D(l, function(u) {
          i = !0, this._mergeOption(u, n);
        }, this);
      }
      return i;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], l = Q(), u = n && n.replaceMergeMainTypeMap;
      PC(this), D(e, function(c, h) {
        c != null && (ft.hasClass(h) ? h && (s.push(h), l.set(h, !0)) : i[h] = i[h] == null ? it(c) : ht(i[h], c, !0));
      }), u && u.each(function(c, h) {
        ft.hasClass(h) && !l.get(h) && (s.push(h), l.set(h, !0));
      }), ft.topologicalTravel(s, ft.getAllClassMainTypes(), f, this);
      function f(c) {
        var h = VL(this, c, qt(e[c])), v = a.get(c), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? u && u.get(c) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), p = Px(v, h, d);
        Fx(p, c, ft), i[c] = null, a.set(c, null), o.set(c, 0);
        var m = [], g = [], y = 0, _, b;
        D(p, function(S, w) {
          var x = S.existing, E = S.newOption;
          if (!E)
            x && (x.mergeOption({}, this), x.optionUpdated({}, !1));
          else {
            var T = c === "series", C = ft.getClass(
              c,
              S.keyInfo.subType,
              !T
              // Give a more detailed warn later if series don't exists
            );
            if (!C) {
              if (process.env.NODE_ENV !== "production") {
                var A = S.keyInfo.subType, L = zL[A];
                ll[A] || (ll[A] = !0, ut(L ? "Series " + A + ` is used but not imported.
import { ` + L + ` } from 'echarts/charts';
echarts.use([` + L + "]);" : "Unknown series " + A));
              }
              return;
            }
            if (c === "tooltip") {
              if (_) {
                process.env.NODE_ENV !== "production" && (b || (ee("Currently only one tooltip component is allowed."), b = !0));
                return;
              }
              _ = !0;
            }
            if (x && x.constructor === C)
              x.name = S.keyInfo.name, x.mergeOption(E, this), x.optionUpdated(E, !1);
            else {
              var M = k({
                componentIndex: w
              }, S.keyInfo);
              x = new C(E, this, this, M), k(x, M), S.brandNew && (x.__requireNewView = !0), x.init(E, this, this), x.optionUpdated(null, !0);
            }
          }
          x ? (m.push(x.option), g.push(x), y++) : (m.push(void 0), g.push(void 0));
        }, this), i[c] = m, a.set(c, g), o.set(c, y), c === "series" && Xo(this);
      }
      this._seriesIndices || Xo(this);
    }, t.prototype.getOption = function() {
      var e = it(this.option);
      return D(e, function(n, i) {
        if (ft.hasClass(i)) {
          for (var a = qt(n), o = a.length, s = !1, l = o - 1; l >= 0; l--)
            a[l] && !Ai(a[l]) ? s = !0 : (a[l] = null, !s && o--);
          a.length = o, e[i] = a;
        }
      }), delete e[sf], e;
    }, t.prototype.setTheme = function(e) {
      this._theme = new Dt(e), this._resetOption("recreate", null);
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(e) {
      this._payload = e;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(e, n) {
      var i = this._componentsMap.get(e);
      if (i) {
        var a = i[n || 0];
        if (a)
          return a;
        if (n == null) {
          for (var o = 0; o < i.length; o++)
            if (i[o])
              return i[o];
        }
      }
    }, t.prototype.queryComponents = function(e) {
      var n = e.mainType;
      if (!n)
        return [];
      var i = e.index, a = e.id, o = e.name, s = this._componentsMap.get(n);
      if (!s || !s.length)
        return [];
      var l;
      return i != null ? (l = [], D(qt(i), function(u) {
        s[u] && l.push(s[u]);
      })) : a != null ? l = Ag("id", a, s) : o != null ? l = Ag("name", o, s) : l = Rt(s, function(u) {
        return !!u;
      }), Mg(l, e);
    }, t.prototype.findComponents = function(e) {
      var n = e.query, i = e.mainType, a = s(n), o = a ? this.queryComponents(a) : Rt(this._componentsMap.get(i), function(u) {
        return !!u;
      });
      return l(Mg(o, e));
      function s(u) {
        var f = i + "Index", c = i + "Id", h = i + "Name";
        return u && (u[f] != null || u[c] != null || u[h] != null) ? {
          mainType: i,
          // subType will be filtered finally.
          index: u[f],
          id: u[c],
          name: u[h]
        } : null;
      }
      function l(u) {
        return e.filter ? Rt(u, e.filter) : u;
      }
    }, t.prototype.eachComponent = function(e, n, i) {
      var a = this._componentsMap;
      if (W(e)) {
        var o = n, s = e;
        a.each(function(c, h) {
          for (var v = 0; c && v < c.length; v++) {
            var d = c[v];
            d && s.call(o, h, d, d.componentIndex);
          }
        });
      } else
        for (var l = $(e) ? a.get(e) : X(e) ? this.findComponents(e) : null, u = 0; l && u < l.length; u++) {
          var f = l[u];
          f && n.call(i, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var n = je(e, null);
      return Rt(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return Rt(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return Rt(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, n) {
      aa(this), D(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        e.call(n, a, i);
      }, this);
    }, t.prototype.eachRawSeries = function(e, n) {
      D(this._componentsMap.get("series"), function(i) {
        i && e.call(n, i, i.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, n, i) {
      aa(this), D(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && n.call(i, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, n, i) {
      return D(this.getSeriesByType(e), n, i);
    }, t.prototype.isSeriesFiltered = function(e) {
      return aa(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, n) {
      aa(this);
      var i = [];
      D(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = Q(i);
    }, t.prototype.restoreData = function(e) {
      Xo(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        ft.hasClass(o) && i.push(o);
      }), ft.topologicalTravel(i, ft.getAllClassMainTypes(), function(a) {
        D(n.get(a), function(o) {
          o && (a !== "series" || !$L(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = (function() {
      Xo = function(e) {
        var n = e._seriesIndices = [];
        D(e._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), e._seriesIndicesMap = Q(n);
      }, aa = function(e) {
        if (process.env.NODE_ENV !== "production" && !e._seriesIndices)
          throw new Error("Option should contains series.");
      }, Dg = function(e, n) {
        e.option = {}, e.option[sf] = Eg, e._componentsMap = Q({
          series: []
        }), e._componentsCount = Q();
        var i = n.aria;
        X(i) && i.enabled == null && (i.enabled = !0), GL(n, e._theme.option), ht(n, C1, !1), e._mergeOption(n, null);
      };
    })(), t;
  })(Dt)
);
function $L(r, t) {
  if (t) {
    var e = t.seriesIndex, n = t.seriesId, i = t.seriesName;
    return e != null && r.componentIndex !== e || n != null && r.id !== n || i != null && r.name !== i;
  }
}
function GL(r, t) {
  var e = r.color && !r.colorLayer;
  D(t, function(n, i) {
    i === "colorLayer" && e || i === "color" && r.color || ft.hasClass(i) || (typeof n == "object" ? r[i] = r[i] ? ht(r[i], n, !1) : it(n) : r[i] == null && (r[i] = n));
  });
}
function Ag(r, t, e) {
  if (B(t)) {
    var n = Q();
    return D(t, function(a) {
      if (a != null) {
        var o = je(a, null);
        o != null && n.set(a, !0);
      }
    }), Rt(e, function(a) {
      return a && n.get(a[r]);
    });
  } else {
    var i = je(t, null);
    return Rt(e, function(a) {
      return a && i != null && a[r] === i;
    });
  }
}
function Mg(r, t) {
  return t.hasOwnProperty("subType") ? Rt(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function Lg(r) {
  var t = Q();
  return r && D(qt(r.replaceMerge), function(e) {
    process.env.NODE_ENV !== "production" && N(ft.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
ke(bv, ov);
var UL = /^(min|max)?(.+)$/, WL = (
  /** @class */
  (function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, n) {
      t && (D(qt(t.series), function(o) {
        o && o.data && Kt(o.data) && Bf(o.data);
      }), D(qt(t.dataset), function(o) {
        o && o.source && Kt(o.source) && Bf(o.source);
      })), t = it(t);
      var i = this._optionBackup, a = YL(t, e, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], it(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (e = it(
          // FIXME:TS as TimelineModel or quivlant interface
          n[i.getCurrentIndex()]
        ));
      }
      return e;
    }, r.prototype.getMediaOption = function(t) {
      var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!i.length && !a)
        return s;
      for (var l = 0, u = i.length; l < u; l++)
        XL(i[l].query, e, n) && o.push(l);
      return !o.length && a && (o = [-1]), o.length && !qL(o, this._currentMediaIndices) && (s = Y(o, function(f) {
        return it(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  })()
);
function YL(r, t, e) {
  var n = [], i, a, o = r.baseOption, s = r.timeline, l = r.options, u = r.media, f = !!r.media, c = !!(l || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((c || f) && (r.options = r.media = null), a = r), f && (B(u) ? D(u, function(v) {
    process.env.NODE_ENV !== "production" && v && !v.option && X(v.query) && X(v.query.option) && ut("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? n.push(v) : i || (i = v));
  }) : process.env.NODE_ENV !== "production" && ut("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), h(a), D(l, function(v) {
    return h(v);
  }), D(n, function(v) {
    return h(v.option);
  });
  function h(v) {
    D(t, function(d) {
      d(v, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: l || [],
    mediaDefault: i,
    mediaList: n
  };
}
function XL(r, t, e) {
  var n = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, i = !0;
  return D(r, function(a, o) {
    var s = o.match(UL);
    if (!(!s || !s[1] || !s[2])) {
      var l = s[1], u = s[2].toLowerCase();
      ZL(n[u], a, l) || (i = !1);
    }
  }), i;
}
function ZL(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function qL(r, t) {
  return r.join(",") === t.join(",");
}
var ve = D, Ka = X, Ig = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function lf(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, n = Ig.length; e < n; e++) {
      var i = Ig[e], a = t.normal, o = t.emphasis;
      a && a[i] && (process.env.NODE_ENV !== "production" && Bt("itemStyle.normal." + i, i), r[i] = r[i] || {}, r[i].normal ? ht(r[i].normal, a[i]) : r[i].normal = a[i], a[i] = null), o && o[i] && (process.env.NODE_ENV !== "production" && Bt("itemStyle.emphasis." + i, "emphasis." + i), r[i] = r[i] || {}, r[i].emphasis ? ht(r[i].emphasis, o[i]) : r[i].emphasis = o[i], o[i] = null);
    }
}
function $t(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var n = r[t].normal, i = r[t].emphasis;
    n && (process.env.NODE_ENV !== "production" && vr("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, gt(r[t], n)) : r[t] = n), i && (process.env.NODE_ENV !== "production" && vr(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = i, i.focus && (r.emphasis.focus = i.focus), i.blurScope && (r.emphasis.blurScope = i.blurScope));
  }
}
function ma(r) {
  $t(r, "itemStyle"), $t(r, "lineStyle"), $t(r, "areaStyle"), $t(r, "label"), $t(r, "labelLine"), $t(r, "upperLabel"), $t(r, "edgeLabel");
}
function Mt(r, t) {
  var e = Ka(r) && r[t], n = Ka(e) && e.textStyle;
  if (n) {
    process.env.NODE_ENV !== "production" && vr("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var i = 0, a = Hd.length; i < a; i++) {
      var o = Hd[i];
      n.hasOwnProperty(o) && (e[o] = n[o]);
    }
  }
}
function ye(r) {
  r && (ma(r), Mt(r, "label"), r.emphasis && Mt(r.emphasis, "label"));
}
function KL(r) {
  if (Ka(r)) {
    lf(r), ma(r), Mt(r, "label"), Mt(r, "upperLabel"), Mt(r, "edgeLabel"), r.emphasis && (Mt(r.emphasis, "label"), Mt(r.emphasis, "upperLabel"), Mt(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (lf(t), ye(t));
    var e = r.markLine;
    e && (lf(e), ye(e));
    var n = r.markArea;
    n && ye(n);
    var i = r.data;
    if (r.type === "graph") {
      i = i || r.nodes;
      var a = r.links || r.edges;
      if (a && !Kt(a))
        for (var o = 0; o < a.length; o++)
          ye(a[o]);
      D(r.categories, function(u) {
        ma(u);
      });
    }
    if (i && !Kt(i))
      for (var o = 0; o < i.length; o++)
        ye(i[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        ye(s[o]);
    if (e = r.markLine, e && e.data)
      for (var l = e.data, o = 0; o < l.length; o++)
        B(l[o]) ? (ye(l[o][0]), ye(l[o][1])) : ye(l[o]);
    r.type === "gauge" ? (Mt(r, "axisLabel"), Mt(r, "title"), Mt(r, "detail")) : r.type === "treemap" ? ($t(r.breadcrumb, "itemStyle"), D(r.levels, function(u) {
      ma(u);
    })) : r.type === "tree" && ma(r.leaves);
  }
}
function sr(r) {
  return B(r) ? r : r ? [r] : [];
}
function Pg(r) {
  return (B(r) ? r[0] : r) || {};
}
function QL(r, t) {
  ve(sr(r.series), function(n) {
    Ka(n) && KL(n);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ve(e, function(n) {
    ve(sr(r[n]), function(i) {
      i && (Mt(i, "axisLabel"), Mt(i.axisPointer, "label"));
    });
  }), ve(sr(r.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    Mt(i, "axisLabel"), Mt(i && i.axisPointer, "label");
  }), ve(sr(r.calendar), function(n) {
    $t(n, "itemStyle"), Mt(n, "dayLabel"), Mt(n, "monthLabel"), Mt(n, "yearLabel");
  }), ve(sr(r.radar), function(n) {
    Mt(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, process.env.NODE_ENV !== "production" && vr("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, process.env.NODE_ENV !== "production" && vr("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && ve(n.indicator, function(i) {
      i.text && Bt("text", "name", "radar.indicator");
    });
  }), ve(sr(r.geo), function(n) {
    Ka(n) && (ye(n), ve(sr(n.regions), function(i) {
      ye(i);
    }));
  }), ve(sr(r.timeline), function(n) {
    ye(n), $t(n, "label"), $t(n, "itemStyle"), $t(n, "controlStyle", !0);
    var i = n.data;
    B(i) && D(i, function(a) {
      X(a) && ($t(a, "label"), $t(a, "itemStyle"));
    });
  }), ve(sr(r.toolbox), function(n) {
    $t(n, "iconStyle"), ve(n.feature, function(i) {
      $t(i, "iconStyle");
    });
  }), Mt(Pg(r.axisPointer), "label"), Mt(Pg(r.tooltip).axisPointer, "label");
}
function jL(r, t) {
  for (var e = t.split(","), n = r, i = 0; i < e.length && (n = n && n[e[i]], n != null); i++)
    ;
  return n;
}
function JL(r, t, e, n) {
  for (var i = t.split(","), a = r, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = e);
}
function Og(r) {
  r && D(tI, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var tI = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], eI = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], uf = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function oa(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < uf.length; e++) {
      var n = uf[e][1], i = uf[e][0];
      t[n] != null && (t[i] = t[n], process.env.NODE_ENV !== "production" && Bt(n, i));
    }
}
function Ng(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (process.env.NODE_ENV !== "production" && Bt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
}
function kg(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay, process.env.NODE_ENV !== "production" && Bt("downplay", "blur", "sunburst"));
}
function rI(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (process.env.NODE_ENV !== "production" && Bt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
}
function D1(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && D1(r[e].children, t);
}
function E1(r, t) {
  QL(r, t), r.series = qt(r.series), D(r.series, function(e) {
    if (X(e)) {
      var n = e.type;
      if (n === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow, process.env.NODE_ENV !== "production" && Bt("clipOverflow", "clip", "line"));
      else if (n === "pie" || n === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise, process.env.NODE_ENV !== "production" && Bt("clockWise", "clockwise")), Ng(e.label);
        var i = e.data;
        if (i && !Kt(i))
          for (var a = 0; a < i.length; a++)
            Ng(i[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && Bt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
      } else if (n === "gauge") {
        var o = jL(e, "pointer.color");
        o != null && JL(e, "itemStyle.color", o);
      } else if (n === "bar") {
        oa(e), oa(e.backgroundStyle), oa(e.emphasis);
        var i = e.data;
        if (i && !Kt(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (oa(i[a]), oa(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, process.env.NODE_ENV !== "production" && Bt("highlightPolicy", "emphasis.focus", "sunburst"))), kg(e), D1(e.data, kg);
      } else n === "graph" || n === "sankey" ? rI(e) : n === "map" && (e.mapType && !e.map && (process.env.NODE_ENV !== "production" && Bt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (process.env.NODE_ENV !== "production" && vr("`mapLocation` is not used anymore."), gt(e, e.mapLocation)));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (process.env.NODE_ENV !== "production" && Bt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), Og(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), D(eI, function(e) {
    var n = r[e];
    n && (B(n) || (n = [n]), D(n, function(i) {
      Og(i);
    }));
  });
}
var nI = Dh(iI);
function iI(r) {
  var t = Q();
  r.eachSeries(function(e) {
    var n = e.get("stack");
    if (n) {
      var i = t.get(n) || t.set(n, []), a = e.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: e
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      i.push(o);
    }
  }), t.each(function(e) {
    if (e.length !== 0) {
      var n = e[0].seriesModel, i = n.get("stackOrder") || "seriesAsc";
      i === "seriesDesc" && e.reverse(), D(e, function(a, o) {
        a.data.setCalculationInfo("stackedOnSeries", o > 0 ? e[o - 1].seriesModel : null);
      }), aI(e);
    }
  });
}
function aI(r) {
  D(r, function(t, e) {
    var n = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, l = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(u, f, c) {
      var h = o.get(t.stackedDimension, c);
      if (isNaN(h))
        return i;
      var v, d;
      s ? d = o.getRawIndex(c) : v = o.get(t.stackedByDimension, c);
      for (var p = NaN, m = e - 1; m >= 0; m--) {
        var g = r[m];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, v)), d >= 0) {
          var y = g.data.getByRawIndex(g.stackResultDimension, d);
          if (l === "all" || l === "positive" && y > 0 || l === "negative" && y < 0 || l === "samesign" && h >= 0 && y > 0 || l === "samesign" && h <= 0 && y < 0) {
            h = Dx(h, y), p = y;
            break;
          }
        }
      }
      return n[0] = h, n[1] = p, n;
    });
  });
}
var Ne = (
  /** @class */
  (function() {
    function r() {
      this.group = new Ot(), this.uid = Yl("viewComponent");
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, n, i) {
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, n, i) {
    }, r.prototype.updateLayout = function(t, e, n, i) {
    }, r.prototype.updateVisual = function(t, e, n, i) {
    }, r.prototype.toggleBlurSeries = function(t, e, n) {
    }, r.prototype.eachRendered = function(t) {
      var e = this.group;
      e && e.traverse(t);
    }, r;
  })()
);
ph(Ne);
Cl(Ne);
var Rg = dt(), Bg = {
  itemStyle: Va(B_, !0),
  lineStyle: Va(R_, !0)
}, oI = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function A1(r, t) {
  var e = r.visualStyleMapper || Bg[t];
  return e || (console.warn("Unknown style type '" + t + "'."), Bg.itemStyle);
}
function M1(r, t) {
  var e = r.visualDrawType || oI[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var sI = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = r.getModel(n), a = A1(r, n), o = a(i), s = i.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var l = M1(r, n), u = o[l], f = W(u) ? u : null, c = o.fill === "auto" || o.stroke === "auto";
    if (!o[l] || f || c) {
      var h = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[l] || (o[l] = h, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || W(o.fill) ? h : o.fill, o.stroke = o.stroke === "auto" || W(o.stroke) ? h : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", l), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var p = r.getDataParams(d), m = k({}, o);
          m[l] = f(p), v.setItemVisual(d, "style", m);
        }
      };
  }
}, sa = new Dt(), lI = {
  createOnAllSeries: !0,
  reset: function(r, t) {
    if (!r.ignoreStyleOnData) {
      var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = A1(r, n), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var l = o.getRawDataItem(s);
          if (l && l[n]) {
            sa.option = l[n];
            var u = i(sa), f = o.ensureUniqueItemVisual(s, "style");
            k(f, u), sa.option.decal && (o.setItemVisual(s, "decal", sa.option.decal), sa.option.decal.dirty = !0), a in u && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, uI = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = Q();
    r.eachSeries(function(e) {
      if (!e.isColorBySeries()) {
        var n = e.type + "-" + e.getColorBy();
        Rg(e).scope = t.get(n) || t.set(n, {});
      }
    }), r.eachSeries(function(e) {
      if (!e.isColorBySeries()) {
        var n = e.getRawData(), i = {}, a = e.getData(), o = Rg(e).scope, s = e.visualStyleAccessPath || "itemStyle", l = M1(e, s);
        a.each(function(u) {
          var f = a.getRawIndex(u);
          i[f] = u;
        }), n.each(function(u) {
          var f = i[u], c = a.getItemVisual(f, "colorFromPalette");
          if (c) {
            var h = a.ensureUniqueItemVisual(f, "style"), v = n.getName(u) || u + "", d = n.count();
            h[l] = e.getColorFromPalette(v, o, d);
          }
        });
      }
    });
  }
}, Zo = Math.PI;
function fI(r, t) {
  t = t || {}, gt(t, {
    text: "loading",
    textColor: q.color.primary,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255,255,255,0.8)",
    showSpinner: !0,
    color: q.color.theme[0],
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var e = new Ot(), n = new Pt({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(n);
  var i = new oe({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new Pt({
    style: {
      fill: "none"
    },
    textContent: i,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  e.add(a);
  var o;
  return t.showSpinner && (o = new Fl({
    shape: {
      startAngle: -Zo / 2,
      endAngle: -Zo / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: Zo * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: Zo * 3 / 2
  }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
    var s = i.getBoundingRect().width, l = t.showSpinner ? t.spinnerRadius : 0, u = (r.getWidth() - l * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : l), f = r.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: u,
      cy: f
    }), a.setShape({
      x: u - l,
      y: f - l,
      width: l * 2,
      height: l * 2
    }), n.setShape({
      x: 0,
      y: 0,
      width: r.getWidth(),
      height: r.getHeight()
    });
  }, e.resize(), e;
}
var L1 = (
  /** @class */
  (function() {
    function r(t, e, n, i) {
      this._stageTaskMap = Q(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
    }
    return r.prototype.restoreData = function(t, e) {
      t.restoreData(e), this._stageTaskMap.each(function(n) {
        var i = n.overallTask;
        i && i.dirty();
      });
    }, r.prototype.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, a = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, l = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: l,
          modDataCount: s
        };
      }
    }, r.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, r.prototype.updateStreamModes = function(t, e) {
      var n = this._pipelineMap.get(t.uid), i = t.__preparePipelineContext ? t.__preparePipelineContext(e, n) : Qx(t, e, n);
      t.pipelineContext = n.context = i;
    }, r.prototype.restorePipelines = function(t, e) {
      var n = this, i = n._pipelineMap = Q();
      e.eachSeries(function(a) {
        var o = t.painter.type === "canvas" && a.getProgressive(), s = a.uid;
        i.set(s, {
          id: s,
          head: null,
          tail: null,
          threshold: a.getProgressiveThreshold(),
          progressiveEnabled: o && !(a.preventIncremental && a.preventIncremental()),
          blockIndex: -1,
          step: Math.round(o || 700),
          count: 0
        }), n._pipe(a, a.dataTask);
      });
    }, r.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, e = this.api.getModel(), n = this.api;
      D(this._allHandlers, function(i) {
        var a = t.get(i.uid) || t.set(i.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), N(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, e, n), i.overallReset && this._createOverallStageTask(i, a, e, n);
      }, this);
    }, r.prototype.prepareView = function(t, e, n, i) {
      var a = t.renderTask, o = a.context;
      o.model = e, o.ecModel = n, o.api = i, a.__block = !t.incrementalPrepareRender, this._pipe(e, a);
    }, r.prototype.performDataProcessorTasks = function(t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, {
        block: !0
      });
    }, r.prototype.performVisualTasks = function(t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n);
    }, r.prototype._performStageTasks = function(t, e, n, i) {
      i = i || {};
      var a = !1, o = this;
      D(t, function(l, u) {
        if (!(i.visualType && i.visualType !== l.visualType)) {
          var f = o._stageTaskMap.get(l.uid), c = f.seriesTaskMap, h = f.overallTask;
          if (h) {
            var v, d = h.agentStubMap;
            d.each(function(m) {
              s(i, m) && (m.dirty(), v = !0);
            }), v && h.dirty(), o.updatePayload(h, n);
            var p = o.getPerformArgs(h, i.block);
            d.each(function(m) {
              m.perform(p);
            }), h.perform(p) && (a = !0);
          } else c && c.each(function(m, g) {
            s(i, m) && m.dirty();
            var y = o.getPerformArgs(m, i.block);
            y.skip = !l.performRawSeries && e.isSeriesFiltered(m.context.model), o.updatePayload(m, n), m.perform(y) && (a = !0);
          });
        }
      });
      function s(l, u) {
        return l.setDirty && (!l.dirtyMap || l.dirtyMap.get(u.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, r.prototype.performSeriesTasks = function(t) {
      var e;
      t.eachSeries(function(n) {
        e = n.dataTask.perform() || e;
      }), this.unfinished = e || this.unfinished;
    }, r.prototype.plan = function() {
      this._pipelineMap.each(function(t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
          e = e.getUpstream();
        } while (e);
      });
    }, r.prototype.updatePayload = function(t, e) {
      e !== "remain" && (t.context.payload = e);
    }, r.prototype._createSeriesStageTask = function(t, e, n, i) {
      var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = Q(), l = t.seriesType, u = t.getTargetSeries;
      t.createOnAllSeries ? n.eachRawSeries(f) : l ? n.eachRawSeriesByType(l, f) : u && u(n, i).each(f);
      function f(c) {
        var h = c.uid, v = s.set(h, o && o.get(h) || Ia({
          plan: pI,
          reset: gI,
          count: yI
        }));
        v.context = {
          model: c,
          ecModel: n,
          api: i,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(c, v);
      }
    }, r.prototype._createOverallStageTask = function(t, e, n, i) {
      var a = this, o = e.overallTask = e.overallTask || Ia({
        reset: cI
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, l = o.agentStubMap = Q(), u = t.seriesType, f = t.getTargetSeries, c = t.dirtyOnOverallProgress, h = !1, v = "";
      process.env.NODE_ENV !== "production" && (v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), N(!t.createOnAllSeries, v), u ? n.eachRawSeriesByType(u, d) : f ? f(n, i).each(d) : D(n.getSeries(), d);
      function d(p) {
        var m = p.uid, g = l.set(m, s && s.get(m) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (h = !0, Ia({
          reset: hI,
          onDirty: dI
        })));
        g.context = {
          model: p,
          dirtyOnOverallProgress: c
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, g.agent = o, g.__block = c, a._pipe(p, g);
      }
      h && o.dirty();
    }, r.prototype._pipe = function(t, e) {
      var n = t.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i;
    }, r.wrapStageHandler = function(t, e) {
      return W(t) && (t = {
        overallReset: t,
        seriesType: _I(t)
      }), t.uid = Yl("stageHandler"), e && (t.visualType = e), t;
    }, r;
  })()
);
function cI(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function hI(r) {
  return r.dirtyOnOverallProgress && vI;
}
function vI() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function dI() {
  this.agent && this.agent.dirty();
}
function pI(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function gI(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = qt(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? Y(t, function(e, n) {
    return I1(n);
  }) : mI;
}
var mI = I1(0);
function I1(r) {
  return function(t, e) {
    var n = e.data, i = e.resetDefines[r];
    if (i && i.dataEach)
      for (var a = t.start; a < t.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(t, n);
  };
}
function yI(r) {
  return r.data.count();
}
function _I(r) {
  ul = null;
  try {
    r(Qa, P1);
  } catch {
  }
  return ul;
}
var Qa = {}, P1 = {}, ul;
O1(Qa, bv);
O1(P1, s_);
Qa.eachSeriesByType = Qa.eachRawSeriesByType = function(r) {
  ul = r;
};
Qa.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (ul = r.subType);
};
function O1(r, t) {
  for (var e in t.prototype)
    r[e] = Gt;
}
var R = q.darkColor, Vg = R.background, la = function() {
  return {
    axisLine: {
      lineStyle: {
        color: R.axisLine
      }
    },
    splitLine: {
      lineStyle: {
        color: R.axisSplitLine
      }
    },
    splitArea: {
      areaStyle: {
        color: [R.backgroundTint, R.backgroundTransparent]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: R.axisMinorSplitLine
      }
    },
    axisLabel: {
      color: R.axisLabel
    },
    axisName: {}
  };
}, Fg = {
  label: {
    color: R.secondary
  },
  itemStyle: {
    borderColor: R.borderTint
  },
  dividerLineStyle: {
    color: R.border
  }
}, N1 = {
  darkMode: !0,
  color: R.theme,
  backgroundColor: Vg,
  axisPointer: {
    lineStyle: {
      color: R.border
    },
    crossStyle: {
      color: R.borderShade
    },
    label: {
      color: R.tertiary
    }
  },
  legend: {
    textStyle: {
      color: R.secondary
    },
    pageTextStyle: {
      color: R.tertiary
    }
  },
  textStyle: {
    color: R.secondary
  },
  title: {
    textStyle: {
      color: R.primary
    },
    subtextStyle: {
      color: R.quaternary
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: R.accent50
    },
    feature: {
      dataView: {
        backgroundColor: Vg,
        textColor: R.primary,
        textareaColor: R.background,
        textareaBorderColor: R.border,
        buttonColor: R.accent50,
        buttonTextColor: R.neutral00
      }
    }
  },
  tooltip: {
    backgroundColor: R.neutral20,
    defaultBorderColor: R.border,
    textStyle: {
      color: R.tertiary
    }
  },
  dataZoom: {
    borderColor: R.accent10,
    textStyle: {
      color: R.tertiary
    },
    brushStyle: {
      color: R.backgroundTint
    },
    handleStyle: {
      color: R.neutral00,
      borderColor: R.accent20
    },
    moveHandleStyle: {
      color: R.accent40
    },
    emphasis: {
      handleStyle: {
        borderColor: R.accent50
      }
    },
    dataBackground: {
      lineStyle: {
        color: R.accent30
      },
      areaStyle: {
        color: R.accent20
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: R.accent50
      },
      areaStyle: {
        color: R.accent30
      }
    }
  },
  visualMap: {
    textStyle: {
      color: R.secondary
    },
    handleStyle: {
      borderColor: R.neutral30
    }
  },
  timeline: {
    lineStyle: {
      color: R.accent10
    },
    label: {
      color: R.tertiary
    },
    controlStyle: {
      color: R.accent30,
      borderColor: R.accent30
    }
  },
  calendar: {
    itemStyle: {
      color: R.neutral00,
      borderColor: R.neutral20
    },
    dayLabel: {
      color: R.tertiary
    },
    monthLabel: {
      color: R.secondary
    },
    yearLabel: {
      color: R.secondary
    }
  },
  matrix: {
    x: Fg,
    y: Fg,
    backgroundColor: {
      borderColor: R.axisLine
    },
    body: {
      itemStyle: {
        borderColor: R.borderTint
      }
    }
  },
  timeAxis: la(),
  logAxis: la(),
  valueAxis: la(),
  categoryAxis: la(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: R.theme
  },
  gauge: {
    title: {
      color: R.secondary
    },
    axisLine: {
      lineStyle: {
        color: [[1, R.neutral05]]
      }
    },
    axisLabel: {
      color: R.axisLabel
    },
    detail: {
      color: R.primary
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  },
  funnel: {
    itemStyle: {
      borderColor: R.background
    }
  },
  radar: (function() {
    var r = la();
    return r.axisName = {
      color: R.axisLabel
    }, r.axisLine.lineStyle.color = R.neutral20, r;
  })(),
  treemap: {
    breadcrumb: {
      itemStyle: {
        color: R.neutral20,
        textStyle: {
          color: R.secondary
        }
      },
      emphasis: {
        itemStyle: {
          color: R.neutral30
        }
      }
    }
  },
  sunburst: {
    itemStyle: {
      borderColor: R.background
    }
  },
  map: {
    itemStyle: {
      borderColor: R.border,
      areaColor: R.neutral10
    },
    label: {
      color: R.tertiary
    },
    emphasis: {
      label: {
        color: R.primary
      },
      itemStyle: {
        areaColor: R.highlight
      }
    },
    select: {
      label: {
        color: R.primary
      },
      itemStyle: {
        areaColor: R.highlight
      }
    }
  },
  geo: {
    itemStyle: {
      borderColor: R.border,
      areaColor: R.neutral10
    },
    emphasis: {
      label: {
        color: R.primary
      },
      itemStyle: {
        areaColor: R.highlight
      }
    },
    select: {
      label: {
        color: R.primary
      },
      itemStyle: {
        color: R.highlight
      }
    }
  }
};
N1.categoryAxis.splitLine.show = !1;
var bI = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, n = {}, i = {};
      if ($(t)) {
        var a = Ye(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        D(t, function(l, u) {
          for (var f = !1, c = 0; c < o.length; c++) {
            var h = o[c], v = u.lastIndexOf(h);
            if (v > 0 && v === u.length - h.length) {
              var d = u.slice(0, v);
              d !== "data" && (e.mainType = d, e[h.toLowerCase()] = l, f = !0);
            }
          }
          s.hasOwnProperty(u) && (n[u] = l, f = !0), f || (i[u] = l);
        });
      }
      return {
        cptQuery: e,
        dataQuery: n,
        otherQuery: i
      };
    }, r.prototype.filter = function(t, e) {
      var n = this.eventInfo;
      if (!n)
        return !0;
      var i = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
      if (!o || !s)
        return !0;
      var l = e.cptQuery, u = e.dataQuery;
      return f(l, o, "mainType") && f(l, o, "subType") && f(l, o, "index", "componentIndex") && f(l, o, "name") && f(l, o, "id") && f(u, a, "name") && f(u, a, "dataIndex") && f(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, i, a));
      function f(c, h, v, d) {
        return c[v] == null || h[d || v] === c[v];
      }
    }, r.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, r;
  })()
), kc = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], zg = kc.concat(["symbolKeepAspect"]), SI = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < kc.length; o++) {
      var s = kc[o], l = r.get(s);
      W(l) ? (a = !0, i[s] = l) : n[s] = l;
    }
    if (n.symbol = n.symbol || r.defaultSymbol, e.setVisual(k({
      legendIcon: r.legendIcon || n.symbol,
      symbolKeepAspect: r.get("symbolKeepAspect")
    }, n)), t.isSeriesFiltered(r))
      return;
    var u = St(i);
    function f(c, h) {
      for (var v = r.getRawValue(h), d = r.getDataParams(h), p = 0; p < u.length; p++) {
        var m = u[p];
        c.setItemVisual(h, m, i[m](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, wI = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < zg.length; s++) {
        var l = zg[s], u = o.getShallow(l, !0);
        u != null && i.setItemVisual(a, l, u);
      }
    }
    return {
      dataEach: e.hasItemOption ? n : null
    };
  }
};
function xI(r, t, e) {
  switch (e) {
    case "color":
      var n = r.getItemVisual(t, "style");
      return n[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + e);
  }
}
function Sv(r, t) {
  switch (t) {
    case "color":
      var e = r.getVisual("style");
      return e[r.getVisual("drawType")];
    case "opacity":
      return r.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getVisual(t);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + t);
  }
}
function ya(r, t, e) {
  for (var n; r && !(t(r) && (n = r, e)); )
    r = r.__hostTarget || r.parent;
  return n;
}
var ge = new rr(), fl = {};
function TI(r, t) {
  process.env.NODE_ENV !== "production" && fl[r] && ut("Already has an implementation of " + r + "."), fl[r] = t;
}
function CI(r) {
  return process.env.NODE_ENV !== "production" && (fl[r] || ut("Implementation of " + r + " doesn't exists.")), fl[r];
}
var DI = Math.round(Math.random() * 9), EI = typeof Object.defineProperty == "function", AI = (function() {
  function r() {
    this._id = "__ec_inner_" + DI++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var n = this._guard(t);
    return EI ? Object.defineProperty(n, this._id, {
      value: e,
      enumerable: !1,
      configurable: !0
    }) : n[this._id] = e, this;
  }, r.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, r.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, r.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, r;
})();
function wn(r) {
  return isFinite(r);
}
function MI(r, t, e) {
  var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (n = n * e.width + e.x, i = i * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), n = wn(n) ? n : 0, i = wn(i) ? i : 1, a = wn(a) ? a : 0, o = wn(o) ? o : 0;
  var s = r.createLinearGradient(n, a, i, o);
  return s;
}
function LI(r, t, e) {
  var n = e.width, i = e.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, l = t.r == null ? 0.5 : t.r;
  t.global || (o = o * n + e.x, s = s * i + e.y, l = l * a), o = wn(o) ? o : 0.5, s = wn(s) ? s : 0.5, l = l >= 0 && wn(l) ? l : 0.5;
  var u = r.createRadialGradient(o, s, 0, o, s, l);
  return u;
}
function Rc(r, t, e) {
  for (var n = t.type === "radial" ? LI(r, t, e) : MI(r, t, e), i = t.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function II(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function qo(r) {
  return parseInt(r, 10);
}
function Ko(r, t, e) {
  var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[n] != null && e[n] !== "auto")
    return parseFloat(e[n]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[i] || qo(s[n]) || qo(r.style[n])) - (qo(s[a]) || 0) - (qo(s[o]) || 0) || 0;
}
function PI(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : wt(r) ? [r] : B(r) ? r : null;
}
function k1(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && PI(t.lineDash, t.lineWidth), n = t.lineDashOffset;
  if (e) {
    var i = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    i && i !== 1 && (e = Y(e, function(a) {
      return a / i;
    }), n /= i);
  }
  return [e, n];
}
var OI = new Pn(!0);
function cl(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function Hg(r) {
  return typeof r == "string" && r !== "none";
}
function hl(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function $g(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function Gg(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function Bc(r, t, e) {
  var n = wy(t.image, t.__image, e);
  if (Dl(n)) {
    var i = r.createPattern(n, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * OS), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function NI(r, t, e, n, i) {
  var a, o = cl(e), s = hl(e), l = e.strokePercent, u = l < 1, f = !t.path;
  (!t.silent || u) && f && t.createPathProxy();
  var c = t.path || OI, h = t.__dirty;
  if (!n) {
    var v = e.fill, d = e.stroke, p = s && !!v.colorStops, m = o && !!d.colorStops, g = s && !!v.image, y = o && !!d.image, _ = void 0, b = void 0, S = void 0, w = void 0, x = void 0;
    (p || m) && (x = t.getBoundingRect()), p && (_ = h ? Rc(r, v, x) : t.__canvasFillGradient, t.__canvasFillGradient = _), m && (b = h ? Rc(r, d, x) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = b), g && (S = h || !t.__canvasFillPattern ? Bc(r, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), y && (w = h || !t.__canvasStrokePattern ? Bc(r, d, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), p ? r.fillStyle = _ : g && (S ? r.fillStyle = S : s = !1), m ? r.strokeStyle = b : y && (w ? r.strokeStyle = w : o = !1);
  }
  var E = t.getGlobalScale();
  c.setScale(E[0], E[1], t.segmentIgnoreThreshold);
  var T, C;
  r.setLineDash && e.lineDash && (a = k1(t), T = a[0], C = a[1]);
  var A = !0;
  (f || h & ai) && (c.setDPR(r.dpr), u ? c.setContext(null) : (c.setContext(r), A = !1), c.reset(), t.buildPath(c, t.shape, n), c.toStatic(), t.pathUpdated()), A && c.rebuildPath(r, u ? l : 1), T && (r.setLineDash(T), r.lineDashOffset = C), n ? (i.batchFill = s, i.batchStroke = o) : e.strokeFirst ? (o && Gg(r, e), s && $g(r, e)) : (s && $g(r, e), o && Gg(r, e)), T && r.setLineDash([]);
}
function kI(r, t, e) {
  var n = t.__image = wy(e.image, t.__image, t, t.onload);
  if (!(!n || !Dl(n))) {
    var i = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), l = n.width / n.height;
    if (o == null && s != null ? o = s * l : s == null && o != null ? s = o / l : o == null && s == null && (o = n.width, s = n.height), e.sWidth && e.sHeight) {
      var u = e.sx || 0, f = e.sy || 0;
      r.drawImage(n, u, f, e.sWidth, e.sHeight, i, a, o, s);
    } else if (e.sx && e.sy) {
      var u = e.sx, f = e.sy, c = o - u, h = s - f;
      r.drawImage(n, u, f, c, h, i, a, o, s);
    } else
      r.drawImage(n, i, a, o, s);
  }
}
function RI(r, t, e) {
  var n, i = e.text;
  if (i != null && (i += ""), i) {
    r.font = e.font || Br, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (n = k1(t), a = n[0], o = n[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (cl(e) && r.strokeText(i, e.x, e.y), hl(e) && r.fillText(i, e.x, e.y)) : (hl(e) && r.fillText(i, e.x, e.y), cl(e) && r.strokeText(i, e.x, e.y)), a && r.setLineDash([]);
  }
}
var Ug = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Wg = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function R1(r, t, e, n, i) {
  var a = !1;
  if (!n && (e = e || {}, t === e))
    return !1;
  if (n || t.opacity !== e.opacity) {
    Zt(r, i), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? Dn.opacity : o;
  }
  (n || t.blend !== e.blend) && (a || (Zt(r, i), a = !0), r.globalCompositeOperation = t.blend || Dn.blend);
  for (var s = 0; s < Ug.length; s++) {
    var l = Ug[s];
    (n || t[l] !== e[l]) && (a || (Zt(r, i), a = !0), r[l] = r.dpr * (t[l] || 0));
  }
  return (n || t.shadowColor !== e.shadowColor) && (a || (Zt(r, i), a = !0), r.shadowColor = t.shadowColor || Dn.shadowColor), a;
}
function Yg(r, t, e, n, i) {
  var a = t.style, o = n ? null : e && e.style || {};
  if (a === o)
    return !1;
  var s = R1(r, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (Zt(r, i), s = !0), Hg(a.fill) && (r.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (Zt(r, i), s = !0), Hg(a.stroke) && (r.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (Zt(r, i), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var l = a.lineWidth, u = l / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== u && (s || (Zt(r, i), s = !0), r.lineWidth = u);
  }
  for (var f = 0; f < Wg.length; f++) {
    var c = Wg[f], h = c[0];
    (n || a[h] !== o[h]) && (s || (Zt(r, i), s = !0), r[h] = a[h] || c[1]);
  }
  return s;
}
function BI(r, t, e, n, i) {
  return R1(r, t.style, e && e.style, n, i);
}
function B1(r, t) {
  var e = t.transform, n = r.dpr || 1;
  e ? r.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : r.setTransform(n, 0, 0, n, 0, 0);
}
function VI(r, t, e) {
  for (var n = !1, i = 0; i < r.length; i++) {
    var a = r[i];
    n = n || a.isZeroArea(), B1(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = n;
}
function FI(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var Xg = 1, Zg = 2, qg = 3, Kg = 4;
function zI(r) {
  var t = hl(r), e = cl(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function Zt(r, t) {
  t.batchFill && (t.batchFill = !1, r.fill()), t.batchStroke && (t.batchStroke = !1, r.stroke());
}
function V1(r, t) {
  var e = { inHover: !1, viewWidth: 0, viewHeight: 0, beforeBrushParam: {} };
  xn(r, t, e), bi(r, e);
}
function xn(r, t, e) {
  var n = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~ie, t.__isRendered = !1;
    return;
  }
  var i = t.__clipPaths, a = e.prevElClipPaths, o = t.style, s = !1, l = !1;
  if ((!a || II(i, a)) && (a && (Zt(r, e), r.restore(), l = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), i && i.length && (Zt(r, e), r.save(), VI(i, r, e), s = !0, e.prevElClipPaths = i)), e.allClipped) {
    t.__dirty &= ~ie, t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(e.beforeBrushParam), t.innerBeforeBrush();
  var u = e.prevEl;
  u || (l = s = !0);
  var f = t instanceof mt && t.autoBatch && zI(o);
  s || FI(n, u.transform) ? (Zt(r, e), B1(r, t)) : f || Zt(r, e), t instanceof mt ? (e.lastDrawType !== Xg && (l = !0, e.lastDrawType = Xg), Yg(r, t, u, l, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), NI(r, t, o, f, e)) : t instanceof Bs ? (e.lastDrawType !== qg && (l = !0, e.lastDrawType = qg), Yg(r, t, u, l, e), RI(r, t, o)) : t instanceof Gr ? (e.lastDrawType !== Zg && (l = !0, e.lastDrawType = Zg), BI(r, t, u, l, e), kI(r, t, o)) : t.getTemporalDisplayables && (e.lastDrawType !== Kg && (l = !0, e.lastDrawType = Kg), HI(r, t, e)), t.innerAfterBrush(), t.afterBrush && (f && Zt(r, e), t.afterBrush()), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function bi(r, t) {
  Zt(r, t), t.prevElClipPaths && r.restore();
}
function HI(r, t, e) {
  var n = t.getDisplayables(), i = t.getTemporalDisplayables();
  r.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: e.viewWidth,
    viewHeight: e.viewHeight,
    inHover: e.inHover,
    beforeBrushParam: {}
  }, o, s;
  for (o = t.getCursor(), s = n.length; o < s; o++) {
    var l = n[o];
    l.beforeBrush && l.beforeBrush(e.beforeBrushParam), l.innerBeforeBrush(), xn(r, l, a), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
  }
  bi(r, a);
  for (var u = 0, f = i.length; u < f; u++) {
    var l = i[u];
    l.beforeBrush && l.beforeBrush(e.beforeBrushParam), l.innerBeforeBrush(), xn(r, l, a), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
  }
  bi(r, a), t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var ff = new AI(), Qg = new Ti(100), jg = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Vc(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
  r.dirty && ff.delete(r);
  var a = ff.get(r);
  if (a)
    return a;
  var o = gt(r, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return l(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / e, ff.set(r, s), r.dirty = !1, s;
  function l(u) {
    for (var f = [e], c = !0, h = 0; h < jg.length; ++h) {
      var v = o[jg[h]];
      if (v != null && !B(v) && !$(v) && !wt(v) && typeof v != "boolean") {
        c = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (c) {
      d = f.join(",") + (i ? "-svg" : "");
      var p = Qg.get(d);
      p && (i ? u.svgElement = p : u.image = p);
    }
    var m = z1(o.dashArrayX), g = $I(o.dashArrayY), y = F1(o.symbol), _ = GI(m), b = H1(g), S = !i && ue.createCanvas(), w = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, x = T(), E;
    S && (S.width = x.width * e, S.height = x.height * e, E = S.getContext("2d")), C(), c && Qg.put(d, S || w), u.image = S, u.svgElement = w, u.svgWidth = x.width, u.svgHeight = x.height;
    function T() {
      for (var A = 1, L = 0, M = _.length; L < M; ++L)
        A = Vd(A, _[L]);
      for (var I = 1, L = 0, M = y.length; L < M; ++L)
        I = Vd(I, y[L].length);
      A *= I;
      var O = b * _.length * y.length;
      if (process.env.NODE_ENV !== "production") {
        var P = function(F) {
          console.warn("Calculated decal size is greater than " + F + " due to decal option settings so " + F + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + F + " to be larger to avoid incontinuity.");
        };
        A > o.maxTileWidth && P("maxTileWidth"), O > o.maxTileHeight && P("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(A, o.maxTileWidth)),
        height: Math.max(1, Math.min(O, o.maxTileHeight))
      };
    }
    function C() {
      E && (E.clearRect(0, 0, S.width, S.height), o.backgroundColor && (E.fillStyle = o.backgroundColor, E.fillRect(0, 0, S.width, S.height)));
      for (var A = 0, L = 0; L < g.length; ++L)
        A += g[L];
      if (A <= 0)
        return;
      for (var M = -b, I = 0, O = 0, P = 0; M < x.height; ) {
        if (I % 2 === 0) {
          for (var F = O / 2 % y.length, G = 0, U = 0, j = 0; G < x.width * 2; ) {
            for (var K = 0, L = 0; L < m[P].length; ++L)
              K += m[P][L];
            if (K <= 0)
              break;
            if (U % 2 === 0) {
              var et = (1 - o.symbolSize) * 0.5, Z = G + m[P][U] * et, z = M + g[I] * et, nt = m[P][U] * o.symbolSize, at = g[I] * o.symbolSize, Wt = j / 2 % y[F].length;
              Le(Z, z, nt, at, y[F][Wt]);
            }
            G += m[P][U], ++j, ++U, U === m[P].length && (U = 0);
          }
          ++P, P === m.length && (P = 0);
        }
        M += g[I], ++O, ++I, I === g.length && (I = 0);
      }
      function Le(xt, It, rt, ot, Ur) {
        var Yt = i ? 1 : e, Iv = Bn(Ur, xt * Yt, It * Yt, rt * Yt, ot * Yt, o.color, o.symbolKeepAspect);
        if (i) {
          var Pv = n.painter.renderOneToVNode(Iv);
          Pv && w.children.push(Pv);
        } else
          V1(E, Iv);
      }
    }
  }
}
function F1(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if ($(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!$(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return F1([r]);
  for (var n = [], e = 0; e < r.length; ++e)
    $(r[e]) ? n.push([r[e]]) : n.push(r[e]);
  return n;
}
function z1(r) {
  if (!r || r.length === 0)
    return [[0, 0]];
  if (wt(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, n = 0; n < r.length; ++n)
    if (!wt(r[n])) {
      e = !1;
      break;
    }
  if (e)
    return z1([r]);
  for (var i = [], n = 0; n < r.length; ++n)
    if (wt(r[n])) {
      var t = Math.ceil(r[n]);
      i.push([t, t]);
    } else {
      var t = Y(r[n], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
    }
  return i;
}
function $I(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (wt(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = Y(r, function(n) {
    return Math.ceil(n);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function GI(r) {
  return Y(r, function(t) {
    return H1(t);
  });
}
function H1(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
var UI = Dh(WI);
function WI(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var n = e.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var l = n.ensureUniqueItemVisual(o, "style");
          l.decal = Vc(s, t);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = Vc(i, t);
      }
    }
  });
}
var YI = 1, XI = 800, ZI = 900, qI = 920, KI = 1e3, QI = 2e3, Jg = 5e3, $1 = 1e3, jI = 1100, wv = 2e3, G1 = 3e3, JI = 4e3, tu = 4500, t2 = 4600, e2 = 5e3, r2 = 6e3, U1 = 7e3, n2 = {
  PROCESSOR: {
    SERIES_FILTER: XI,
    AXIS_STATISTICS: qI,
    FILTER: KI,
    STATISTIC: Jg,
    STATISTICS: Jg
  },
  VISUAL: {
    LAYOUT: $1,
    PROGRESSIVE_LAYOUT: jI,
    GLOBAL: wv,
    CHART: G1,
    POST_CHART_LAYOUT: t2,
    COMPONENT: JI,
    BRUSH: e2,
    CHART_ITEM: tu,
    ARIA: r2,
    DECAL: U1
  }
}, Lt = "__flagInMainProcess", Qo = "__mainProcessVersion", Nt = "__pendingUpdate", cf = "__needsUpdateStatus", tm = /^[a-zA-Z0-9_]+$/, hf = "__connectUpdateStatus", em = 0, i2 = 1, a2 = 2;
function W1(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      jt(this.id);
      return;
    }
    return X1(this, r, t);
  };
}
function Y1(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return X1(this, r, t);
  };
}
function X1(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), rr.prototype[t].apply(r, e);
}
var Z1 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(rr)
), q1 = Z1.prototype;
q1.on = Y1("on");
q1.off = Y1("off");
var pn, vf, jo, lr, Jo, df, pf, ti, ei, rm, nm, gf, im, ts, am, K1, de, om, ri, Q1 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e, n, i) {
      var a = r.call(this, new bI()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, a.__v_skip = !0, a._dom = e;
      var o = "canvas", s = "auto", l = !1;
      if (a[Qo] = 1, process.env.NODE_ENV !== "production") {
        var u = (
          /* eslint-disable-next-line */
          tt.hasGlobalWindow ? window : global
        );
        u && (o = H(u.__ECHARTS__DEFAULT__RENDERER__, o), s = H(u.__ECHARTS__DEFAULT__COARSE_POINTER, s), l = H(u.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, l));
      }
      i.ssr;
      var f = a._zr = Cg(e, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: H(i.useDirtyRect, l),
        useCoarsePointer: H(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = d1(Tt(f.flush, f), 17), a._updateTheme(n), a._locale = VD(i.locale || n0), a._coordSysMgr = new Xh();
      var c = a._api = am(a);
      function h(v, d) {
        return v.__prio - d.__prio;
      }
      return Ts(pl, h), Ts(zc, h), a._scheduler = new L1(a, c, zc, pl), a._messageCenter = new Z1(), a._initEvents(), a.resize = Tt(a.resize, a), f.animation.on("frame", a._onframe, a), rm(f, a), nm(f, a), Bf(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        var e = this._scheduler, n = this._model, i = this._api;
        if (om(this), this[Nt]) {
          var a = this[Nt].silent;
          this[Lt] = !0, ri(this);
          try {
            pn(this), lr.update.call(this, null, this[Nt].updateParams);
          } catch (l) {
            throw this[Lt] = !1, this[Nt] = null, l;
          }
          this._zr.flush(), this[Lt] = !1, this[Nt] = null, ti.call(this, a), ei.call(this, a);
        } else if (e.unfinished) {
          var o = YI;
          do {
            e.unfinished = !1;
            var s = ue.getTime();
            e.performSeriesTasks(n), e.performDataProcessorTasks(n), df(this, n), e.performVisualTasks(n), ts(this, this._model, i, "remain", {}), o -= ue.getTime() - s;
          } while (o > 0 && e.unfinished);
          e.unfinished || this._zr.flush();
        }
      }
    }, t.prototype.getDom = function() {
      return this._dom;
    }, t.prototype.getId = function() {
      return this.id;
    }, t.prototype.getZr = function() {
      return this._zr;
    }, t.prototype.isSSR = function() {
      return this._ssr;
    }, t.prototype.setOption = function(e, n, i) {
      if (this[Lt]) {
        process.env.NODE_ENV !== "production" && ut("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        jt(this.id);
        return;
      }
      var a, o, s;
      if (X(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[Lt] = !0, ri(this), !this._model || n) {
        var l = new WL(this._api), u = this._theme, f = this._model = new bv();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, u, this._locale, l);
      }
      this._model.setOption(e, {
        replaceMerge: o
      }, Hc);
      var c = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (i)
        this[Nt] = {
          silent: a,
          updateParams: c
        }, this[Lt] = !1, this.getZr().wakeUp();
      else {
        try {
          pn(this), lr.update.call(this, null, c);
        } catch (h) {
          throw this[Nt] = null, this[Lt] = !1, h;
        }
        this._ssr || this._zr.flush(), this[Nt] = null, this[Lt] = !1, ti.call(this, a), ei.call(this, a);
      }
    }, t.prototype.setTheme = function(e, n) {
      if (this[Lt]) {
        process.env.NODE_ENV !== "production" && ut("`setTheme` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        jt(this.id);
        return;
      }
      var i = this._model;
      if (i) {
        var a = n && n.silent, o = null;
        this[Nt] && (a == null && (a = this[Nt].silent), o = this[Nt].updateParams, this[Nt] = null), this[Lt] = !0, ri(this);
        try {
          this._updateTheme(e), i.setTheme(this._theme), pn(this), lr.update.call(this, {
            type: "setTheme"
          }, o);
        } catch (s) {
          throw this[Lt] = !1, s;
        }
        this[Lt] = !1, ti.call(this, a), ei.call(this, a);
      }
    }, t.prototype._updateTheme = function(e) {
      $(e) && (e = j1[e]), e && (e = it(e), e && E1(e, !0), this._theme = e);
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || tt.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(e) {
      return process.env.NODE_ENV !== "production" && Bt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
    }, t.prototype.renderToCanvas = function(e) {
      e = e || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "canvas")
        throw new Error("renderToCanvas can only be used in the canvas renderer.");
      return n.getRenderedCanvas({
        backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(e) {
      e = e || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "svg")
        throw new Error("renderToSVGString can only be used in the svg renderer.");
      return n.renderToString({
        useViewBox: e.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      var e = this._zr, n = e.storage.getDisplayList();
      return D(n, function(i) {
        i.stopAnimation(null, !0);
      }), e.painter.toDataURL();
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      e = e || {};
      var n = e.excludeComponents, i = this._model, a = [], o = this;
      D(n, function(l) {
        i.eachComponent({
          mainType: l
        }, function(u) {
          var f = o._componentsMap[u.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return D(a, function(l) {
        l.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      var n = e.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (sm[i]) {
        var l = s, u = s, f = -s, c = -s, h = [], v = e && e.pixelRatio || this.getDevicePixelRatio();
        D(Oa, function(_, b) {
          if (_.group === i) {
            var S = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(it(e)), w = _.getDom().getBoundingClientRect();
            l = a(w.left, l), u = a(w.top, u), f = o(w.right, f), c = o(w.bottom, c), h.push({
              dom: S,
              left: w.left,
              top: w.top
            });
          }
        }), l *= v, u *= v, f *= v, c *= v;
        var d = f - l, p = c - u, m = ue.createCanvas(), g = Cg(m, {
          renderer: n ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: p
        }), n) {
          var y = "";
          return D(h, function(_) {
            var b = _.left - l, S = _.top - u;
            y += '<g transform="translate(' + b + "," + S + ')">' + _.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = y, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && g.add(new Pt({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: p
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), D(h, function(_) {
            var b = new Gr({
              style: {
                x: _.left * v - l,
                y: _.top * v - u,
                image: _.dom
              }
            });
            g.add(b);
          }), g.refreshImmediately(), m.toDataURL("image/" + (e && e.type || "png"));
      } else
        return this.getDataURL(e);
    }, t.prototype.convertToPixel = function(e, n, i) {
      return Jo(this, "convertToPixel", e, n, i);
    }, t.prototype.convertToLayout = function(e, n, i) {
      return Jo(this, "convertToLayout", e, n, i);
    }, t.prototype.convertFromPixel = function(e, n, i) {
      return Jo(this, "convertFromPixel", e, n, i);
    }, t.prototype.containPixel = function(e, n) {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      var i = this._model, a, o = Mu(i, e);
      return D(o, function(s, l) {
        l.indexOf("Models") >= 0 && D(s, function(u) {
          var f = u.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (l === "seriesModels") {
            var c = this._chartsMap[u.__viewId];
            c && c.containPoint ? a = a || c.containPoint(n, u) : process.env.NODE_ENV !== "production" && ee(l + ": " + (c ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && ee(l + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, n) {
      var i = this._model, a = Mu(i, e, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || ee("There is no specified series model"));
      var s = o.getData(), l = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return l != null ? xI(s, l, n) : Sv(s, n);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      D(o2, function(i) {
        var a = function(o) {
          var s = e.getModel(), l = o.target, u, f = i === "globalout";
          if (f ? u = {} : l && ya(l, function(p) {
            var m = ct(p);
            if (m && m.dataIndex != null) {
              var g = m.dataModel || s.getSeriesByIndex(m.seriesIndex);
              return u = g && g.getDataParams(m.dataIndex, m.dataType, l) || {}, !0;
            } else if (m.eventData)
              return u = k({}, m.eventData), !0;
          }, !0), u) {
            var c = u.componentType, h = u.componentIndex;
            (c === "markLine" || c === "markPoint" || c === "markArea") && (c = "series", h = u.seriesIndex);
            var v = c && h != null && s.getComponent(c, h), d = v && e[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            process.env.NODE_ENV !== "production" && !f && !(v && d) && ee("model or view can not be found by params"), u.event = o, u.type = i, e._$eventProcessor.eventInfo = {
              targetEl: l,
              packedEvent: u,
              model: v,
              view: d
            }, e.trigger(i, u);
          }
        };
        a.zrEventfulCallAtLast = !0, e._zr.on(i, a, e);
      });
      var n = this._messageCenter;
      D(Fc, function(i, a) {
        n.on(a, function(o) {
          e.trigger(a, o);
        });
      }), oL(n, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && r_(this.getDom(), Tv, "");
      var n = this, i = n._api, a = n._model;
      D(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), D(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete Oa[n.id];
    }, t.prototype.resize = function(e) {
      if (this[Lt]) {
        process.env.NODE_ENV !== "production" && ut("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        jt(this.id);
        return;
      }
      this._zr.resize(e);
      var n = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!n) {
        var i = n.resetOption("media"), a = e && e.silent;
        this[Nt] && (a == null && (a = this[Nt].silent), i = !0, this[Nt] = null), this[Lt] = !0, ri(this);
        try {
          i && pn(this), lr.update.call(this, {
            type: "resize",
            animation: k({
              // Disable animation
              duration: 0
            }, e && e.animation)
          });
        } catch (o) {
          throw this[Lt] = !1, o;
        }
        this[Lt] = !1, ti.call(this, a), ei.call(this, a);
      }
    }, t.prototype.showLoading = function(e, n) {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      if (X(e) && (n = e, e = ""), e = e || "default", this.hideLoading(), !$c[e]) {
        process.env.NODE_ENV !== "production" && ee("Loading effects " + e + " not exists.");
        return;
      }
      var i = $c[e](this._api, n), a = this._zr;
      this._loadingFX = i, a.add(i);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var n = k({}, e);
      return n.type = dl[e.type], n;
    }, t.prototype.dispatchAction = function(e, n) {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      if (X(n) || (n = {
        silent: !!n
      }), !!vl[e.type] && this._model) {
        if (this[Lt]) {
          this._pendingActions.push(e);
          return;
        }
        var i = n.silent;
        pf.call(this, e, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && tt.browser.weChat && this._throttledZrFlush(), ti.call(this, i), ei.call(this, i);
      }
    }, t.prototype.updateLabelLayout = function() {
      ge.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        jt(this.id);
        return;
      }
      var n = e.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      process.env.NODE_ENV !== "production" && N(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = (function() {
      pn = function(c) {
        uM(c._model);
        var h = c._scheduler;
        h.restorePipelines(c._zr, c._model), h.prepareStageTasks(), vf(c, !0), vf(c, !1), h.plan();
      }, vf = function(c, h) {
        for (var v = c._model, d = c._scheduler, p = h ? c._componentsViews : c._chartsViews, m = h ? c._componentsMap : c._chartsMap, g = c._zr, y = c._api, _ = 0; _ < p.length; _++)
          p[_].__alive = !1;
        h ? v.eachComponent(function(w, x) {
          w !== "series" && b(x);
        }) : v.eachSeries(b);
        function b(w) {
          var x = w.__requireNewView;
          w.__requireNewView = !1;
          var E = "_ec_" + w.id + "_" + w.type, T = !x && m[E];
          if (!T) {
            var C = Ye(w.type), A = h ? Ne.getClass(C.main, C.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              tr.getClass(C.sub)
            );
            process.env.NODE_ENV !== "production" && N(A, C.sub + " does not exist."), T = new A(), T.init(v, y), m[E] = T, p.push(T), g.add(T.group);
          }
          w.__viewId = T.__id = E, T.__alive = !0, T.__model = w, T.group.__ecComponentInfo = {
            mainType: w.mainType,
            index: w.componentIndex
          }, !h && d.prepareView(T, w, v, y);
        }
        for (var _ = 0; _ < p.length; ) {
          var S = p[_];
          S.__alive ? _++ : (!h && S.renderTask.dispose(), g.remove(S.group), S.dispose(v, y), p.splice(_, 1), m[S.__id] === S && delete m[S.__id], S.__id = S.group.__ecComponentInfo = null);
        }
      }, jo = function(c, h, v, d, p) {
        var m = c._model;
        if (m.setUpdatePayload(v), !d) {
          D([].concat(c._componentsViews).concat(c._chartsViews), b);
          return;
        }
        var g = $x(v, d, p), y = v.excludeSeriesId, _;
        y != null && (_ = Q(), D(qt(y), function(S) {
          var w = je(S, null);
          w != null && _.set(w, !0);
        })), m && m.eachComponent(g, function(S) {
          var w = _ && _.get(S.id) != null;
          if (!w)
            if (tp(v))
              if (S instanceof Fr)
                v.type === En && !v.notBlur && !S.get(["emphasis", "disabled"]) && fT(S, v, c._api);
              else {
                var x = Ph(S.mainType, S.componentIndex, v.name, c._api), E = x.focusSelf, T = x.dispatchers;
                v.type === En && E && !v.notBlur && uc(S.mainType, S.componentIndex, c._api), T && D(T, function(C) {
                  v.type === En ? za(C) : Ha(C);
                });
              }
            else cc(v) && S instanceof Fr && (vT(S, v, c._api), Qd(S), de(c));
        }, c), m && m.eachComponent(g, function(S) {
          var w = _ && _.get(S.id) != null;
          w || b(c[d === "series" ? "_chartsMap" : "_componentsMap"][S.__viewId]);
        }, c);
        function b(S) {
          S && S.__alive && S[h] && S[h](S.__model, m, c._api, v);
        }
      }, lr = {
        prepareAndUpdate: function(c) {
          pn(this), lr.update.call(this, c, c && {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: c.newOption != null
          });
        },
        update: function(c, h) {
          var v = this._model, d = this._api, p = this._zr, m = this._coordSysMgr, g = this._scheduler;
          if (v) {
            fM(v), v.setUpdatePayload(c), g.restoreData(v, c), g.performSeriesTasks(v), m.create(v, d), ge.trigger("coordsys:aftercreate", v, d), g.performDataProcessorTasks(v, c), df(this, v), m.update(v, d), n(v), g.performVisualTasks(v, c);
            var y = v.get("backgroundColor") || "transparent";
            p.setBackgroundColor(y);
            var _ = v.get("darkMode");
            _ != null && _ !== "auto" && p.setDarkMode(_), gf(this, v, d, c, h), ge.trigger("afterupdate", v, d);
          }
        },
        /**
         * PENDING: See INCONSISTENCY_OF_BRUSH_SELECTED_EVENT_IN_UPDATE_TRANSFORM
         */
        updateTransform: function(c) {
          var h = this, v = h._model, d = h._api;
          if (v) {
            v.setUpdatePayload(c);
            var p = [];
            v.eachComponent(function(g, y) {
              if (g !== a_) {
                var _ = h.getViewOfComponentModel(y);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var b = _.updateTransform(y, v, d, c);
                    b && b.update && p.push(_);
                  } else
                    p.push(_);
              }
            });
            var m = Q();
            v.eachSeries(function(g) {
              var y = h._chartsMap[g.__viewId], _ = g.pipelineContext;
              if (y.updateTransform && !_.progressiveRender) {
                var b = y.updateTransform(g, v, d, c);
                b && b.update && m.set(g.uid, 1);
              } else
                m.set(g.uid, 1);
            }), h._scheduler.performVisualTasks(v, c, {
              setDirty: !0,
              dirtyMap: m
            }), ts(h, v, d, c, {}, m), ge.trigger("afterupdate", v, d);
          }
        },
        updateView: function(c) {
          var h = this._model;
          h && (h.setUpdatePayload(c), tr.markUpdateMethod(c, "updateView"), n(h), this._scheduler.performVisualTasks(h, c, {
            setDirty: !0
          }), gf(this, h, this._api, c, {}), ge.trigger("afterupdate", h, this._api));
        },
        updateVisual: function(c) {
          var h = this, v = this._model;
          v && (v.setUpdatePayload(c), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), tr.markUpdateMethod(c, "updateVisual"), n(v), this._scheduler.performVisualTasks(v, c, {
            visualType: "visual",
            setDirty: !0
          }), v.eachComponent(function(d, p) {
            if (d !== "series") {
              var m = h.getViewOfComponentModel(p);
              m && m.__alive && m.updateVisual(p, v, h._api, c);
            }
          }), v.eachSeries(function(d) {
            var p = h._chartsMap[d.__viewId];
            p.updateVisual(d, v, h._api, c);
          }), ge.trigger("afterupdate", v, this._api));
        },
        /**
         * @deprecated
         */
        updateLayout: function(c) {
          lr.update.call(this, c);
        }
      };
      function e(c, h, v, d, p) {
        if (c._disposed) {
          jt(c.id);
          return;
        }
        for (var m = c._model, g = c._coordSysMgr.getCoordinateSystems(), y, _ = Mu(m, v), b = 0; b < g.length; b++) {
          var S = g[b];
          if (S[h] && (y = S[h](m, _, d, p)) != null)
            return y;
        }
        process.env.NODE_ENV !== "production" && ee("No coordinate system that supports " + h + " found by the given finder.");
      }
      Jo = e, df = function(c, h) {
        var v = c._chartsMap, d = c._scheduler;
        h.eachSeries(function(p) {
          d.updateStreamModes(p, v[p.__viewId]);
        });
      }, pf = function(c, h) {
        var v = this, d = this.getModel(), p = c.type, m = c.escapeConnect, g = vl[p], y = (g.update || "update").split(":"), _ = y.pop(), b = y[0] != null && Ye(y[0]);
        this[Lt] = !0, ri(this);
        var S = [c], w = !1;
        c.batch && (w = !0, S = Y(c.batch, function(P) {
          return P = gt(k({}, P), c), P.batch = null, P;
        }));
        var x = [], E, T = [], C = g.nonRefinedEventType, A = cc(c), L = tp(c);
        if (L && g_(this._api), D(S, function(P) {
          var F = g.action(P, d, v._api);
          if (g.refineEvent ? T.push(F) : E = F, E = E || k({}, P), E.type = C, x.push(E), L) {
            var G = Th(c), U = G.queryOptionMap, j = G.mainTypeSpecified, K = j ? U.keys()[0] : "series";
            jo(v, _, P, K), de(v);
          } else A ? (jo(v, _, P, "series"), de(v)) : b && jo(v, _, P, b.main, b.sub);
        }), _ !== "none" && !L && !A && !b)
          try {
            this[Nt] ? (pn(this), lr.update.call(this, c), this[Nt] = null) : lr[_].call(this, c);
          } catch (P) {
            throw this[Lt] = !1, P;
          }
        if (w ? E = {
          type: C,
          escapeConnect: m,
          batch: x
        } : E = x[0], this[Lt] = !1, !h) {
          var M = void 0;
          if (g.refineEvent) {
            var I = g.refineEvent(T, c, d, this._api).eventContent;
            N(X(I)), M = gt({
              type: g.refinedEventType
            }, I), M.fromAction = c.type, M.fromActionPayload = c, M.escapeConnect = !0;
          }
          var O = this._messageCenter;
          O.trigger(E.type, E), M && O.trigger(M.type, M);
        }
      }, ti = function(c) {
        for (var h = this._pendingActions; h.length; ) {
          var v = h.shift();
          pf.call(this, v, c);
        }
      }, ei = function(c) {
        !c && this.trigger("updated");
      }, rm = function(c, h) {
        c.on("rendered", function(v) {
          h.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          c.animation.isFinished() && !h[Nt] && !h._scheduler.unfinished && !h._pendingActions.length ? h.trigger("finished") : c.refresh();
        });
      }, nm = function(c, h) {
        c.on("mouseover", function(v) {
          var d = v.target, p = ya(d, Li);
          p && (cT(p, v, h._api), de(h));
        }).on("mouseout", function(v) {
          var d = v.target, p = ya(d, Li);
          p && (hT(p, v, h._api), de(h));
        }).on("click", function(v) {
          var d = v.target, p = ya(d, function(y) {
            return ct(y).dataIndex != null;
          }, !0);
          if (p) {
            var m = p.selected ? "unselect" : "select", g = ct(p);
            h._api.dispatchAction({
              type: m,
              dataType: g.dataType,
              dataIndexInside: g.dataIndex,
              seriesIndex: g.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function n(c) {
        c.clearColorPalette(), c.eachSeries(function(h) {
          h.clearColorPalette();
        });
      }
      function i(c) {
        var h = [], v = [], d = !1;
        if (c.eachComponent(function(y, _) {
          var b = _.get("zlevel") || 0, S = _.get("z") || 0, w = _.getZLevelKey();
          d = d || !!w, (y === "series" ? v : h).push({
            zlevel: b,
            z: S,
            idx: _.componentIndex,
            type: y,
            key: w
          });
        }), d) {
          var p = h.concat(v), m, g;
          Ts(p, function(y, _) {
            return y.zlevel === _.zlevel ? y.z - _.z : y.zlevel - _.zlevel;
          }), D(p, function(y) {
            var _ = c.getComponent(y.type, y.idx), b = y.zlevel, S = y.key;
            m != null && (b = Math.max(m, b)), S ? (b === m && S !== g && b++, g = S) : g && (b === m && b++, g = ""), m = b, _.setZLevel(b);
          });
        }
      }
      gf = function(c, h, v, d, p) {
        i(h), im(c, h, v, d, p), D(c._chartsViews, function(m) {
          m.__alive = !1;
        }), ts(c, h, v, d, p), D(c._chartsViews, function(m) {
          m.__alive || m.remove(h, v);
        });
      }, im = function(c, h, v, d, p, m) {
        D(m || c._componentsViews, function(g) {
          var y = g.__model;
          u(y, g), g.render(y, h, v, d), l(y, g), f(y, g);
        });
      }, ts = function(c, h, v, d, p, m) {
        var g = c._scheduler;
        p = k(p || {}, {
          updatedSeries: h.getSeries()
        }), ge.trigger("series:beforeupdate", h, v, p);
        var y = !1;
        h.eachSeries(function(_) {
          var b = c._chartsMap[_.__viewId];
          b.__alive = !0;
          var S = b.renderTask;
          g.updatePayload(S, d), u(_, b), m && m.get(_.uid) && S.dirty(), S.perform(g.getPerformArgs(S)) && (y = !0), b.group.silent = !!_.get("silent"), s(_, b), Qd(_);
        }), g.unfinished = y || g.unfinished, ge.trigger("series:layoutlabels", h, v, p), ge.trigger("series:transition", h, v, p), h.eachSeries(function(_) {
          var b = c._chartsMap[_.__viewId];
          l(_, b), f(_, b);
        }), o(c, h), ge.trigger("series:afterupdate", h, v, p);
      }, de = function(c) {
        c[cf] = !0, c.getZr().wakeUp();
      }, ri = function(c) {
        c[Qo] = (c[Qo] + 1) % 1e6;
      }, om = function(c) {
        c[cf] && (c.getZr().storage.traverse(function(h) {
          Da(h) || a(h);
        }), c[cf] = !1);
      };
      function a(c) {
        for (var h = [], v = c.currentStates, d = 0; d < v.length; d++) {
          var p = v[d];
          p === "emphasis" || p === "blur" || p === "select" || h.push(p);
        }
        c.selected && c.states.select && h.push("select"), c.hoverState === Nl && c.states.emphasis ? h.push("emphasis") : c.hoverState === Ol && c.states.blur && h.push("blur"), c.useStates(h);
      }
      function o(c, h) {
        var v = c._zr;
        if (v.painter.type === "canvas") {
          var d = v.storage, p = 0;
          d.traverse(function(g) {
            g.isGroup || p++;
          });
          var m = p > H(h.get("hoverLayerThreshold"), C1.hoverLayerThreshold) && !tt.node && !tt.worker;
          (c._usingTHL || m) && (h.eachSeries(function(g) {
            if (!g.preventUsingHoverLayer) {
              var y = c._chartsMap[g.__viewId];
              y.__alive && y.eachRendered(function(_) {
                var b = _.states.emphasis;
                b && b.hoverLayer !== zl && (b.hoverLayer = m ? A_ : E_);
              });
            }
          }), c._usingTHL = m);
        }
      }
      function s(c, h) {
        var v = c.get("blendMode") || null;
        h.eachRendered(function(d) {
          d.isGroup || (d.style.blend = v);
        });
      }
      function l(c, h) {
        if (!c.preventAutoZ) {
          var v = Gh(c);
          h.eachRendered(function(d) {
            return Uh(d, v.z, v.zlevel), !0;
          });
        }
      }
      function u(c, h) {
        h.eachRendered(function(v) {
          if (!Da(v)) {
            var d = v.getTextContent(), p = v.getTextGuideLine();
            v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), p && p.stateTransition && (p.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
          }
        });
      }
      function f(c, h) {
        var v = c.getModel("stateAnimation"), d = c.isAnimationEnabled(), p = v.get("duration"), m = p > 0 ? {
          duration: p,
          delay: v.get("delay"),
          easing: v.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        h.eachRendered(function(g) {
          if (g.states && g.states.emphasis) {
            if (Da(g))
              return;
            if (g instanceof mt && _T(g), g.__dirty) {
              var y = g.prevStates;
              y && g.useStates(y);
            }
            if (d) {
              g.stateTransition = m;
              var _ = g.getTextContent(), b = g.getTextGuideLine();
              _ && (_.stateTransition = m), b && (b.stateTransition = m);
            }
            g.__dirty && a(g);
          }
        });
      }
      am = function(c) {
        return new /** @class */
        ((function(h) {
          V(v, h);
          function v() {
            return h !== null && h.apply(this, arguments) || this;
          }
          return v.prototype.getCoordinateSystems = function() {
            return c._coordSysMgr.getCoordinateSystems();
          }, v.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var p = d.__ecComponentInfo;
              if (p != null)
                return c._model.getComponent(p.mainType, p.index);
              d = d.parent;
            }
          }, v.prototype.enterEmphasis = function(d, p) {
            za(d, p), de(c);
          }, v.prototype.leaveEmphasis = function(d, p) {
            Ha(d, p), de(c);
          }, v.prototype.enterBlur = function(d) {
            h_(d), de(c);
          }, v.prototype.leaveBlur = function(d) {
            Ih(d), de(c);
          }, v.prototype.enterSelect = function(d) {
            v_(d), de(c);
          }, v.prototype.leaveSelect = function(d) {
            d_(d), de(c);
          }, v.prototype.getModel = function() {
            return c.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return c.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return c.getViewOfSeriesModel(d);
          }, v.prototype.getECUpdateCycleVersion = function() {
            return c[Qo];
          }, v.prototype.usingTHL = function() {
            return c._usingTHL;
          }, v;
        })(s_))(c);
      }, K1 = function(c) {
        function h(v, d) {
          for (var p = 0; p < v.length; p++) {
            var m = v[p];
            m[hf] = d;
          }
        }
        D(dl, function(v, d) {
          c._messageCenter.on(d, function(p) {
            if (sm[c.group] && c[hf] !== em) {
              if (p && p.escapeConnect)
                return;
              var m = c.makeActionFromEvent(p), g = [];
              D(Oa, function(y) {
                y !== c && y.group === c.group && g.push(y);
              }), h(g, em), D(g, function(y) {
                y[hf] !== i2 && y.dispatchAction(m);
              }), h(g, a2);
            }
          });
        });
      };
    })(), t;
  })(rr)
), xv = Q1.prototype;
xv.on = W1("on");
xv.off = W1("off");
xv.one = function(r, t, e) {
  var n = this;
  vr("ECharts#one is deprecated.");
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), n.off(r, i);
  }
  this.on.call(this, r, i, e);
};
var o2 = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function jt(r) {
  process.env.NODE_ENV !== "production" && ee("Instance " + r + " has been disposed");
}
var vl = {}, dl = {}, Fc = {}, zc = [], Hc = [], pl = [], j1 = {}, $c = {}, Oa = {}, sm = {}, s2 = +/* @__PURE__ */ new Date() - 0, Tv = "_echarts_instance_";
function l2(r, t, e) {
  var n = !(e && e.ssr);
  if (n) {
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("Initialize failed: invalid dom.");
    var i = u2(r);
    if (i)
      return process.env.NODE_ENV !== "production" && ee("There is a chart instance already initialized on the dom."), i;
    process.env.NODE_ENV !== "production" && wi(r) && r.nodeName.toUpperCase() !== "CANVAS" && (!r.clientWidth && (!e || e.width == null) || !r.clientHeight && (!e || e.height == null)) && ee("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new Q1(r, t, e);
  return a.id = "ec_" + s2++, Oa[a.id] = a, n && r_(r, Tv, a.id), K1(a), ge.trigger("afterinit", a), a;
}
function u2(r) {
  return Oa[Gx(r, Tv)];
}
function J1(r, t) {
  j1[r] = t;
}
function tb(r) {
  lt(Hc, r) < 0 && Hc.push(r);
}
function eb(r, t) {
  Dv(zc, r, t, QI);
}
function f2(r) {
  Cv("afterinit", r);
}
function c2(r) {
  Cv("afterupdate", r);
}
function Cv(r, t) {
  ge.on(r, t);
}
function Ui(r, t, e) {
  var n, i, a, o, s;
  W(t) && (e = t, t = ""), X(r) ? (n = r.type, i = r.event, o = r.update, s = r.publishNonRefinedEvent, e || (e = r.action), a = r.refineEvent) : (n = r, i = t);
  function l(f) {
    return f.toLowerCase();
  }
  i = l(i || n);
  var u = a ? l(n) : i;
  vl[n] || (N(tm.test(n) && tm.test(i)), a && N(i !== n), vl[n] = {
    actionType: n,
    refinedEventType: i,
    nonRefinedEventType: u,
    update: o,
    action: e,
    refineEvent: a
  }, Fc[i] = 1, a && s && (Fc[u] = 1), process.env.NODE_ENV !== "production" && dl[u] && ut(u + ' must not be shared; use "refineEvent" if you intend to share an event name.'), dl[u] = n);
}
function h2(r, t) {
  Xh.register(r, t);
}
function v2(r, t) {
  Dv(pl, r, t, $1, "layout", !0);
}
function zn(r, t) {
  Dv(pl, r, t, G1, "visual", !0);
}
var lm = [];
function Dv(r, t, e, n, i, a) {
  if ((W(t) || X(t)) && (e = t, t = n), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    D(r, function(s) {
      N(s.__raw !== e);
    });
  }
  if (!(lt(lm, e) >= 0)) {
    lm.push(e);
    var o = L1.wrapStageHandler(e, i);
    o.__prio = t, o.__raw = e, r.push(o), process.env.NODE_ENV !== "production" && a && N(!o.dirtyOnOverallProgress, "dirtyOnOverallProgress is not allowed in " + i + " stage; otherwise progressive rendering is disabled on all series.");
  }
}
function rb(r, t) {
  $c[r] = t;
}
function d2(r, t, e) {
  var n = CI("registerMap");
  n && n(r, t, e);
}
var p2 = dE;
zn(wv, sI);
zn(tu, lI);
zn(tu, uI);
zn(wv, SI);
zn(tu, wI);
zn(U1, UI);
tb(E1);
eb(ZI, nI);
rb("default", fI);
Ui({
  type: En,
  event: En,
  update: En
}, Gt);
Ui({
  type: ds,
  event: ds,
  update: ds
}, Gt);
Ui({
  type: Hs,
  event: Mh,
  update: Hs,
  action: Gt,
  refineEvent: Ev,
  publishNonRefinedEvent: !0
});
Ui({
  type: sc,
  event: Mh,
  update: sc,
  action: Gt,
  refineEvent: Ev,
  publishNonRefinedEvent: !0
});
Ui({
  type: $s,
  event: Mh,
  update: $s,
  action: Gt,
  refineEvent: Ev,
  publishNonRefinedEvent: !0
});
function Ev(r, t, e, n) {
  return {
    eventContent: {
      selected: dT(e),
      isFromClick: t.isFromClick || !1
    }
  };
}
J1("default", {});
J1("dark", N1);
var um = [], g2 = {
  registerPreprocessor: tb,
  registerProcessor: eb,
  registerPostInit: f2,
  registerPostUpdate: c2,
  registerUpdateLifecycle: Cv,
  registerAction: Ui,
  registerCoordinateSystem: h2,
  registerLayout: v2,
  registerVisual: zn,
  registerTransform: p2,
  registerLoading: rb,
  registerMap: d2,
  registerImpl: TI,
  PRIORITY: n2,
  ComponentModel: ft,
  ComponentView: Ne,
  SeriesModel: Fr,
  ChartView: tr,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    ft.registerClass(r);
  },
  registerComponentView: function(r) {
    Ne.registerClass(r);
  },
  registerSeriesModel: function(r) {
    Fr.registerClass(r);
  },
  registerChartView: function(r) {
    tr.registerClass(r);
  },
  registerCustomSeries: function(r, t) {
  },
  registerSubTypeDefaulter: function(r, t) {
    ft.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    kL(r, t);
  }
};
function Hr(r) {
  if (B(r)) {
    D(r, function(t) {
      Hr(t);
    });
    return;
  }
  lt(um, r) >= 0 || (um.push(r), W(r) && (r = {
    install: r
  }), r.install(g2));
}
var m2 = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.needIncludeZero = function() {
      return !this.option.scale;
    }, r.prototype.getCoordSysModel = function() {
    }, r;
  })()
), Gc = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", Te).models[0];
    }, t.type = "cartesian2dAxis", t;
  })(ft)
);
ke(Gc, m2);
var nb = {
  show: !0,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: !1,
  // Axis name displayed.
  name: "",
  // 'start' | 'middle' | 'end'
  nameLocation: "end",
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: "...",
    placeholder: "."
  },
  // Use global text style by default.
  nameTextStyle: {
    // textMargin: never, // The default value will be specified based on `nameLocation`.
  },
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: !1,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: !1,
  tooltip: {
    show: !1
  },
  axisPointer: {},
  axisLine: {
    show: !0,
    onZero: "auto",
    onZeroAxisIndex: null,
    lineStyle: {
      color: q.color.axisLine,
      width: 1,
      type: "solid"
    },
    // The arrow at both ends the the axis.
    symbol: ["none", "none"],
    symbolSize: [10, 15],
    breakLine: !0
  },
  axisTick: {
    show: !0,
    // Whether axisTick is inside the grid or outside the grid.
    inside: !1,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: !0,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: !1,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12,
    color: q.color.axisLabel,
    // In scenarios like axis labels, when labels text's progression direction matches the label
    // layout direction (e.g., when all letters are in a single line), extra start/end margin is
    // needed to prevent the text from appearing visually joined. In the other case, when lables
    // are stacked (e.g., having rotation or horizontal labels on yAxis), the layout needs to be
    // compact, so NO extra top/bottom margin should be applied.
    textMargin: [0, 3]
  },
  splitLine: {
    show: !0,
    showMinLine: !0,
    showMaxLine: !0,
    lineStyle: {
      color: q.color.axisSplitLine,
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: [q.color.backgroundTint, q.color.backgroundTransparent]
    }
  },
  breakArea: {
    show: !0,
    itemStyle: {
      color: q.color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: q.color.border,
      borderWidth: 1,
      borderType: [3, 3],
      opacity: 0.6
    },
    zigzagAmplitude: 4,
    zigzagMinSpan: 4,
    zigzagMaxSpan: 20,
    zigzagZ: 100,
    expandOnClick: !0
  },
  breakLabelLayout: {
    moveOverlap: "auto"
  }
}, y2 = ht({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: !0,
  // Set false to faster category collection.
  deduplication: null,
  jitter: 0,
  jitterOverlap: !0,
  jitterMargin: 2,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: !1
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: !1,
    interval: "auto",
    show: "auto"
  },
  axisLabel: {
    interval: "auto"
  }
}, nb), Av = ht({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: !1,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: !1,
    lineStyle: {
      color: q.color.axisMinorSplitLine,
      width: 1
    }
  }
}, nb), _2 = ht({
  splitNumber: 6,
  axisLabel: {
    // The default value of TimeScale is determined in `AxisBuilder`
    // showMinLabel: false,
    // showMaxLabel: false,
    rich: {
      primary: {
        fontWeight: "bold"
      }
    }
  },
  splitLine: {
    show: !1
  }
}, Av), b2 = gt({
  logBase: 10
}, Av);
const S2 = {
  category: y2,
  value: Av,
  time: _2,
  log: b2
};
function fm(r, t, e, n) {
  D(z0, function(i, a) {
    var o = ht(ht({}, S2[a], !0), n, !0), s = (
      /** @class */
      (function(l) {
        V(u, l);
        function u() {
          var f = l !== null && l.apply(this, arguments) || this;
          return f.type = t + "Axis." + a, f;
        }
        return u.prototype.mergeDefaultAndTheme = function(f, c) {
          var h = Ya(this), v = h ? fo(f) : {}, d = c.getTheme();
          ht(f, d.get(a + "Axis")), ht(f, this.getDefaultOption()), f.type = cm(f), h && Vr(f, v, h);
        }, u.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = Dc.createByAxisModel(this));
        }, u.prototype.getCategories = function(f) {
          var c = this.option;
          if (c.type === "category")
            return f ? c.data : this.__ordinalMeta.categories;
        }, u.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, u.prototype.updateAxisBreaks = function(f) {
          return {
            breaks: []
          };
        }, u.type = t + "Axis." + a, u.defaultOption = o, u;
      })(e)
    );
    r.registerComponentModel(s);
  }), r.registerSubTypeDefaulter(t + "Axis", cm);
}
function cm(r) {
  return r.type || (r.data ? "category" : "value");
}
var w2 = (
  /** @class */
  (function() {
    function r(t) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
    }
    return r.prototype.getAxis = function(t) {
      return this._axes[t];
    }, r.prototype.getAxes = function() {
      return Y(this._dimList, function(t) {
        return this._axes[t];
      }, this);
    }, r.prototype.getAxesByScale = function(t) {
      return t = t.toLowerCase(), Rt(this.getAxes(), function(e) {
        return e.scale.type === t;
      });
    }, r.prototype.addAxis = function(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    }, r;
  })()
), Ds = ["x", "y"];
function hm(r) {
  return (r.type === "interval" || r.type === "time") && !Nn(r);
}
var x2 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = xs, e.dimensions = Ds, e;
    }
    return t.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var e = this.getAxis("x").scale, n = this.getAxis("y").scale;
      if (!(!hm(e) || !hm(n))) {
        var i = Ks(e, null), a = Ks(n, null), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), l = i[1] - i[0], u = a[1] - a[0];
        if (!(!l || !u)) {
          var f = (s[0] - o[0]) / l, c = (s[1] - o[1]) / u, h = o[0] - i[0] * f, v = o[1] - a[0] * c, d = this._transform = [f, 0, 0, c, h, v];
          this._invTransform = eo([], d);
        }
      }
    }, t.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, t.prototype.containPoint = function(e) {
      var n = this.getAxis("x"), i = this.getAxis("y");
      return n.contain(n.toLocalCoord(e[0])) && i.contain(i.toLocalCoord(e[1]));
    }, t.prototype.containData = function(e) {
      return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1]);
    }, t.prototype.containZone = function(e, n) {
      var i = this.dataToPoint(e), a = this.dataToPoint(n), o = this.getArea(), s = new J(i[0], i[1], a[0] - i[0], a[1] - i[1]);
      return o.intersect(s);
    }, t.prototype.dataToPoint = function(e, n, i) {
      i = i || [];
      var a = e[0], o = e[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return Ee(i, e, this._transform);
      var s = this.getAxis("x"), l = this.getAxis("y");
      return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = l.toGlobalCoord(l.dataToCoord(o, n)), i;
    }, t.prototype.clampData = function(e, n) {
      var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), l = i.parse(e[0]), u = a.parse(e[1]);
      return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), l), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), u), Math.max(s[0], s[1])), n;
    }, t.prototype.pointToData = function(e, n, i) {
      if (i = i || [], this._invTransform)
        return Ee(i, e, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return i[0] = a.coordToData(a.toLocalCoord(e[0]), n), i[1] = o.coordToData(o.toLocalCoord(e[1]), n), i;
    }, t.prototype.getOtherAxis = function(e) {
      return this.getAxis(e.dim === "x" ? "y" : "x");
    }, t.prototype.getArea = function(e) {
      e = e || 0;
      var n = this.getAxis("x").getGlobalExtent(), i = this.getAxis("y").getGlobalExtent(), a = Math.min(n[0], n[1]) - e, o = Math.min(i[0], i[1]) - e, s = Math.max(n[0], n[1]) - a + e, l = Math.max(i[0], i[1]) - o + e;
      return new J(a, o, s, l);
    }, t;
  })(w2)
);
function T2(r, t) {
  var e = r.scale, n = r.model;
  process.env.NODE_ENV !== "production" && N(e && n && (e instanceof kr || e instanceof js) && (t instanceof kr || t instanceof js));
  var i = h1(e, n, n.ecModel, r), a = Ni(e), o = Ni(t) ? t.intervalStub : t, s = a ? e.intervalStub : e, l = e.base, u = o.getTicks(), f = o.getTicks({
    expandToNicedExtent: !0
  }), c = u.length - 1;
  process.env.NODE_ENV !== "production" && (N(!Nn(t) && !Nn(e)), N(c > 0), N(f.length === u.length), N(u[0].value <= u[c].value), N(f[0].value <= u[0].value && u[c].value <= f[c].value), c >= 2 && (N(f[1].value === u[1].value), N(f[c - 1].value === u[c - 1].value)));
  var h, v, d;
  if (c === 1)
    h = v = 0, d = 1;
  else if (c === 2) {
    var p = Vt(u[0].value - u[1].value), m = Vt(u[1].value - u[2].value);
    h = v = 0, p === m ? d = 2 : (d = 1, p < m ? h = p / m : v = m / p);
  } else {
    var g = o.getConfig().interval;
    h = (1 - (u[0].value - f[0].value) / g) % 1, v = (1 - (f[c].value - u[c].value) / g) % 1, d = c - (h ? 1 : 0) - (v ? 1 : 0);
  }
  process.env.NODE_ENV !== "production" && N(d >= 1);
  var y = i.zoomFixMM, _ = y[0] || y[1], b = [i.fixMM[0] || _, i.fixMM[1] || _], S = e.getExtent(), w = s.getExtent(), x = R0(w, b), E, T, C, A, L, M;
  function I(et) {
    for (var Z = 50, z = 0; z < Z && !et(); z++)
      C = a ? C * pt(l, 2) : pA(C), A = Vn(C);
    process.env.NODE_ENV !== "production" && z >= Z && ee("incorrect impl in `scaleCalcAlign`.");
  }
  function O() {
    E = st(M - C * h, A);
  }
  function P() {
    T = st(L + C * v, A);
  }
  function F() {
    M = h ? st(E + C * h, A) : E;
  }
  function G() {
    L = v ? st(T - C * v, A) : T;
  }
  if (b[0] && b[1]) {
    E = x[0], T = x[1], C = (T - E) / (d + h + v);
    var U = r.getExtent(), j = Vt(U[1] - U[0]);
    A = Cx([T, E], j, 0.5 / d), F(), G(), er(A) && (C = st(C, A));
  } else {
    var K = x[1] - x[0];
    C = a ? pt(Zy(K), 1) : wh(K / d, qy), A = Vn(C), b[0] ? (E = x[0], I(function() {
      if (F(), L = st(M + C * d, A), P(), T >= x[1])
        return !0;
    })) : b[1] ? (T = x[1], I(function() {
      if (G(), M = st(L - C * d, A), O(), E <= x[0])
        return !0;
    })) : I(function() {
      M = st(ao(x[0] / C) * C, A), L = st(Ei(x[1] / C) * C, A);
      var et = hr((L - M) / C);
      if (et <= d) {
        var Z = d - et, z = void 0, nt = i.incl0 || a;
        if (nt && x[0] === 0)
          z = [0, Z];
        else if (nt && x[1] === 0)
          z = [Z, 0];
        else {
          var at = Ei(Z / 2);
          z = Z % 2 === 0 ? [at, at] : E + T < x[0] + x[1] ? [at, at + 1] : [at + 1, at];
        }
        if (M = st(M - C * z[0], A), L = st(L + C * z[1], A), O(), P(), E <= x[0] && T >= x[1])
          return !0;
      }
    });
  }
  $0(e, b, w, [E, T], S, {
    // NOTE: Even in LogScale, `interval` should not be in log space.
    interval: C,
    // Force ticks count, otherwise cumulative error may cause more unexpected ticks to be generated.
    // Though the overlapping tick labels may be auto-ignored, but probably unexpected, e.g., the min
    // tick label is ignored but the secondary min tick label is shown, which is unexpected when
    // `axis.min` is user-specified or dataZoom-specified.
    intervalCount: d,
    intervalPrecision: A,
    niceExtent: [M, L]
  }), process.env.NODE_ENV !== "production" && e.freeze();
}
function vm(r, t) {
  var e = Ni(r), n = e ? r.intervalStub : r, i = t.fixMinMax || [], a = e ? r.getExtent() : null, o = n.getExtent(), s = R0(o, i, t.rawExtentResult);
  n.setExtent(s[0], s[1]), s = n.getExtent();
  var l = e ? D2(n, t) : C2(n, t), u = l.intervalPrecision, f = l.interval, c = t.userInterval;
  c != null && (l.interval = c, l.intervalPrecision = Vn(c)), i[0] || (s[0] = st(Ei(s[0] / f) * f, u)), i[1] || (s[1] = st(ao(s[1] / f) * f, u)), c != null && (l.niceExtent = s.slice()), $0(r, i, o, s, a, l);
}
function C2(r, t) {
  var e = vv(t.splitNumber, 5), n = Ql(r);
  process.env.NODE_ENV !== "production" && N(isFinite(n) && n > 0);
  var i = t.minInterval, a = t.maxInterval, o = wh(n / e, !0);
  i != null && o < i && (o = i), a != null && o > a && (o = a);
  var s = Vn(o), l = r.getExtent(), u = [st(ao(l[0] / o) * o, s), st(Ei(l[1] / o) * o, s)];
  return {
    interval: o,
    intervalPrecision: s,
    niceExtent: u
  };
}
function D2(r, t) {
  var e = vv(t.splitNumber, 10), n = r.getExtent(), i = Ql(r);
  process.env.NODE_ENV !== "production" && N(isFinite(i) && i > 0);
  var a = pt(Zy(i), 1), o = e / i * a;
  o <= 0.5 && (a *= 10);
  var s = Vn(a), l = [st(ao(n[0] / a) * a, s), st(Ei(n[1] / a) * a, s)];
  return {
    intervalPrecision: s,
    interval: a,
    niceExtent: l
  };
}
function dm(r) {
  var t = r.scale, e = r.model, n = e.axis, i = e.ecModel;
  process.env.NODE_ENV !== "production" && N(n && i), E2(t, e, n, i);
}
function E2(r, t, e, n, i) {
  var a = h1(r, t, n, e), o = Qs(r) || hv(r);
  A2(r, {
    splitNumber: t.get("splitNumber"),
    fixMinMax: a.fixMM,
    userInterval: t.get("interval"),
    minInterval: o ? t.get("minInterval") : null,
    maxInterval: o ? t.get("maxInterval") : null,
    rawExtentResult: a
  }), e && n && iL(e, r, a, n), process.env.NODE_ENV !== "production" && r.freeze();
}
function A2(r, t) {
  M2[r.type](r, t);
}
var M2 = {
  interval: vm,
  log: vm,
  time: DA,
  ordinal: Gt
}, pm = [
  [3, 1],
  [0, 2]
  // xyIdx 1 => 'y'
], L2 = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Ds, this._initCartesian(t, e, n), this.model = t;
    }
    return r.prototype.getRect = function() {
      return this._rect;
    }, r.prototype.update = function(t, e) {
      var n = this._axesMap;
      D(this._axesList, function(o) {
        tL(o, qM);
        var s = o.scale;
        ir(s) && s.setSortInfo(o.model.get("categorySortInfo"));
      });
      function i(o) {
        for (var s = St(o), l = [], u = s.length - 1; u >= 0; u--) {
          var f = o[+s[u]];
          f.__alignTo ? l.push(f) : dm(f);
        }
        D(l, function(c) {
          P2(c, c.__alignTo) ? dm(c) : T2(c, c.__alignTo.scale);
        });
      }
      i(n.x), i(n.y);
      var a = {};
      D(n.x, function(o) {
        gm(n, "y", o, a);
      }), D(n.y, function(o) {
        gm(n, "x", o, a);
      }), this.resize(this.model, e);
    }, r.prototype.resize = function(t, e, n) {
      var i = g0(t, e), a = this._rect = Wa(t.getBoxLayoutParams(), i.refContainer), o = this._axesMap, s = this._coordsList, l = t.get("containLabel");
      if (ib(o, a), !n) {
        var u = N2(a, s, o, l, e), f = void 0;
        if (l)
          process.env.NODE_ENV !== "production" && Jy("Specified `grid.containLabel` but no `use(LegacyGridContainLabel)`;use `grid.outerBounds` instead.", !0), f = bm(a.clone(), "axisLabel", null, a, o, u, i);
        else {
          var c = k2(t, a, i), h = c.outerBoundsRect, v = c.parsedOuterBoundsContain, d = c.outerBoundsClamp;
          h && (f = bm(h, v, d, a, o, u, i));
        }
        ab(a, o, Oe.determine, null, f, i), D(this._coordsList, function(p) {
          p.calcAffineTransform();
        });
      }
    }, r.prototype.getAxis = function(t, e) {
      var n = this._axesMap[t];
      if (n != null)
        return n[e || 0];
    }, r.prototype.getAxes = function() {
      return this._axesList.slice();
    }, r.prototype.getCartesian = function(t, e) {
      if (t != null && e != null) {
        var n = "x" + t + "y" + e;
        return this._coordsMap[n];
      }
      X(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
      for (var i = 0, a = this._coordsList; i < a.length; i++)
        if (a[i].getAxis("x").index === t || a[i].getAxis("y").index === e)
          return a[i];
    }, r.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, r.prototype.convertToPixel = function(t, e, n) {
      var i = this._findConvertTarget(e);
      return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
    }, r.prototype.convertFromPixel = function(t, e, n) {
      var i = this._findConvertTarget(e);
      return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
    }, r.prototype._findConvertTarget = function(t) {
      var e = t.seriesModel, n = t.xAxisModel || e && e.getReferringComponents("xAxis", Te).models[0], i = t.yAxisModel || e && e.getReferringComponents("yAxis", Te).models[0], a = t.gridModel, o = this._coordsList, s, l;
      if (e)
        s = e.coordinateSystem, lt(o, s) < 0 && (s = null);
      else if (n && i)
        s = this.getCartesian(n.componentIndex, i.componentIndex);
      else if (n)
        l = this.getAxis("x", n.componentIndex);
      else if (i)
        l = this.getAxis("y", i.componentIndex);
      else if (a) {
        var u = a.coordinateSystem;
        u === this && (s = this._coordsList[0]);
      }
      return {
        cartesian: s,
        axis: l
      };
    }, r.prototype.containPoint = function(t) {
      var e = this._coordsList[0];
      if (e)
        return e.containPoint(t);
    }, r.prototype._initCartesian = function(t, e, n) {
      var i = this, a = this, o = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      }, s = {
        x: {},
        y: {}
      }, l = {
        x: 0,
        y: 0
      };
      if (e.eachComponent("xAxis", u("x"), this), e.eachComponent("yAxis", u("y"), this), !l.x || !l.y) {
        this._axesMap = {}, this._axesList = [];
        return;
      }
      this._axesMap = s, D(s.x, function(f, c) {
        D(s.y, function(h, v) {
          var d = "x" + c + "y" + v, p = new x2(d);
          p.master = i, p.model = t, i._coordsMap[d] = p, i._coordsList.push(p), p.addAxis(f), p.addAxis(h);
        });
      }), ym(s.x), ym(s.y);
      function u(f) {
        return function(c, h) {
          if (I2(c, t)) {
            var v = c.get("position");
            f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
            var d = EA(c), p = new wM(f, AA(c, d), [0, 0], d, v);
            p.onBand = G0(p.scale, c), p.inverse = c.get("inverse"), c.axis = p, p.model = c, p.grid = a, p.index = h, a._axesList.push(p), s[f][h] = p, l[f]++;
          }
        };
      }
    }, r.prototype.getTooltipAxes = function(t) {
      var e = [], n = [];
      return D(this.getCartesians(), function(i) {
        var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(a);
        lt(e, a) < 0 && e.push(a), lt(n, o) < 0 && n.push(o);
      }), {
        baseAxes: e,
        otherAxes: n
      };
    }, r.create = function(t, e) {
      var n = [];
      return t.eachComponent("grid", function(i, a) {
        var o = new r(i, t, e);
        o.name = "grid_" + a, o.resize(i, e, !0), i.coordinateSystem = o, n.push(o), D(o._axesList, function(s) {
          JM(s, r.dimIdxMap);
        });
      }), t.eachSeries(function(i) {
        var a, o;
        dD({
          targetModel: i,
          coordSysType: xs,
          coordSysProvider: s
        });
        function s() {
          var l = WM(i), u = l.xAxisModel, f = l.yAxisModel;
          a = u.axis, o = f.axis;
          var c = u.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!c)
              throw new Error('Grid "' + Pr(u.get("gridIndex"), u.get("gridId"), 0) + '" not found');
            if (u.getCoordSysModel() !== f.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var h = c.coordinateSystem;
          return h.getCartesian(u.componentIndex, f.componentIndex);
        }
        a && o && (eg(a, i, xs), eg(o, i, xs));
      }, this), n;
    }, r.dimensions = Ds, r.dimIdxMap = Yh(Ds), r;
  })()
);
function I2(r, t) {
  return r.getCoordSysModel() === t;
}
function gm(r, t, e, n) {
  e.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var i = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), l = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (l != null)
    mm(s, i[l]) && (a = i[l]);
  else
    for (var u in i)
      if (fe(i, u) && mm(s, i[u]) && !n[f(i[u])]) {
        a = i[u];
        break;
      }
  a && (n[f(a)] = !0);
  function f(c) {
    return c.dim + "_" + c.index;
  }
}
function mm(r, t) {
  if (!t)
    return !1;
  var e = t.scale, n = MA(e, 0), i = t && t.type !== "category" && t.type !== "time" && n !== Ec;
  return i && r === "auto" && OA(t) && (i = !1), i;
}
function ym(r) {
  for (var t = St(r), e, n = [], i = t.length - 1; i >= 0; i--) {
    var a = r[+t[i]];
    k0(a.scale) && RA(a.model, a.type) == null && (a.model.get("alignTicks") && a.model.get("interval") == null ? n.push(a) : e = a);
  }
  e || (e = n.pop()), e && D(n, function(o) {
    o.__alignTo = e;
  });
}
function P2(r, t) {
  return Nn(r.scale) || Nn(t.scale) || t.scale.getTicks().length < 2;
}
function O2(r, t) {
  var e = r.getExtent(), n = e[0] + e[1];
  r.toGlobalCoord = r.dim === "x" ? function(i) {
    return i + t;
  } : function(i) {
    return n - i + t;
  }, r.toLocalCoord = r.dim === "x" ? function(i) {
    return i - t;
  } : function(i) {
    return n - i + t;
  };
}
function ib(r, t) {
  D(r.x, function(e) {
    return _m(e, t.x, t.width);
  }), D(r.y, function(e) {
    return _m(e, t.y, t.height);
  });
}
function _m(r, t, e) {
  var n = [0, e], i = r.inverse ? 1 : 0;
  r.setExtent(n[i], n[1 - i]), O2(r, t);
}
function bm(r, t, e, n, i, a, o) {
  process.env.NODE_ENV !== "production" && N(t === "all" || t === "axisLabel"), ab(n, i, Oe.estimate, t, !1, o);
  var s = [0, 0, 0, 0];
  u(0), u(1), f(n, 0, NaN), f(n, 1, NaN);
  var l = CS(s, function(h) {
    return h > 0;
  }) == null;
  return Ws(n, s, !0, !0, e), ib(i, n), l;
  function u(h) {
    D(i[mn[h]], function(v) {
      if (qa(v.model)) {
        var d = a.ensureRecord(v.model), p = d.labelInfoList;
        if (p)
          for (var m = 0; m < p.length; m++) {
            var g = p[m], y = v.scale.normalize(co(v.scale, Ri(g.label).labelInfo.tick));
            y = h === 1 ? 1 - y : y, f(g.rect, h, y), f(g.rect, 1 - h, NaN);
          }
        var _ = d.nameLayout;
        if (_) {
          var y = ki(d.nameLocation) ? 0.5 : NaN;
          f(_.rect, h, y), f(_.rect, 1 - h, NaN);
        }
      }
    });
  }
  function f(h, v, d) {
    var p = r[mn[v]] - h[mn[v]], m = h[$a[v]] + h[mn[v]] - (r[$a[v]] + r[mn[v]]);
    p = c(p, 1 - d), m = c(m, d);
    var g = pm[v][0], y = pm[v][1];
    s[g] = pt(s[g], p), s[y] = pt(s[y], m);
  }
  function c(h, v) {
    return h > 0 && !xi(v) && v > 1e-4 && (h /= v), h;
  }
}
function N2(r, t, e, n, i) {
  var a = new r1(R2);
  return D(e, function(o) {
    return D(o, function(s) {
      if (qa(s.model)) {
        var l = !n;
        s.axisBuilder = YM(r, t, s.model, i, a, l);
      }
    });
  }), a;
}
function ab(r, t, e, n, i, a) {
  var o = e === Oe.determine;
  D(t, function(u) {
    return D(u, function(f) {
      qa(f.model) && (XM(f.axisBuilder, r, f.model), f.axisBuilder.build(o ? {
        axisTickLabelDetermine: !0
      } : {
        axisTickLabelEstimate: !0
      }, {
        noPxChange: i
      }));
    });
  });
  var s = {
    x: 0,
    y: 0
  };
  l(0), l(1);
  function l(u) {
    s[mn[1 - u]] = r[$a[u]] <= a.refContainer[$a[u]] * 0.5 ? 0 : 1 - u === 1 ? 2 : 1;
  }
  D(t, function(u, f) {
    return D(u, function(c) {
      qa(c.model) && ((n === "all" || o) && c.axisBuilder.build({
        axisName: !0
      }, {
        nameMarginLevel: s[f]
      }), o && c.axisBuilder.build({
        axisLine: !0
      }));
    });
  });
}
function k2(r, t, e) {
  var n, i = r.get("outerBoundsMode", !0);
  i === "same" ? n = t.clone() : i == null || i === "auto" ? n = Wa(r.get("outerBounds", !0) || v1, e.refContainer) : i !== "none" && process.env.NODE_ENV !== "production" && ut("Invalid grid[" + r.componentIndex + "].outerBoundsMode.");
  var a = r.get("outerBoundsContain", !0), o;
  a == null || a === "auto" ? o = "all" : lt(["all", "axisLabel"], a) < 0 ? (process.env.NODE_ENV !== "production" && ut("Invalid grid[" + r.componentIndex + "].outerBoundsContain."), o = "all") : o = a;
  var s = [nc(H(r.get("outerBoundsClampWidth", !0), al[0]), t.width), nc(H(r.get("outerBoundsClampHeight", !0), al[1]), t.height)];
  return {
    outerBoundsRect: n,
    parsedOuterBoundsContain: o,
    outerBoundsClamp: s
  };
}
var R2 = function(r, t, e, n, i, a) {
  var o = e.axis.dim === "x" ? "y" : "x";
  n1(r, t, e, n, i, a), ki(r.nameLocation) || D(t.recordMap[o], function(s) {
    s && s.labelInfoList && s.dirVec && a1(s.labelInfoList, s.dirVec, n, i);
  });
};
function B2(r, t) {
  var e = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: !1,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return V2(e, r, t), e.seriesInvolved && z2(e, r), e;
}
function V2(r, t, e) {
  var n = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
  D(e.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var l = ja(s.model), u = r.coordSysAxesInfo[l] = {};
    r.coordSysMap[l] = s;
    var f = s.model, c = f.getModel("tooltip", n);
    if (D(s.getAxes(), _t(p, !1, null)), s.getTooltipAxes && n && c.get("show")) {
      var h = c.get("trigger") === "axis", v = c.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(c.get(["axisPointer", "axis"]));
      (h || v) && D(d.baseAxes, _t(p, v ? "cross" : !0, h)), v && D(d.otherAxes, _t(p, "cross", !1));
    }
    function p(m, g, y) {
      var _ = y.model.getModel("axisPointer", i), b = _.get("show");
      if (!(!b || b === "auto" && !m && !Uc(_))) {
        g == null && (g = _.get("triggerTooltip")), _ = m ? F2(y, c, i, t, m, g) : _;
        var S = _.get("snap"), w = _.get("triggerEmphasis"), x = ja(y.model), E = g || S || y.type === "category", T = r.axesInfo[x] = {
          key: x,
          axis: y,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: g,
          triggerEmphasis: w,
          involveSeries: E,
          snap: S,
          useHandle: Uc(_),
          seriesModels: [],
          linkGroup: null
        };
        u[x] = T, r.seriesInvolved = r.seriesInvolved || E;
        var C = H2(a, y);
        if (C != null) {
          var A = o[C] || (o[C] = {
            axesInfo: {}
          });
          A.axesInfo[x] = T, A.mapper = a[C].mapper, T.linkGroup = A;
        }
      }
    }
  });
}
function F2(r, t, e, n, i, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], l = {};
  D(s, function(h) {
    l[h] = it(o.get(h));
  }), l.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (l.type = "line");
  var u = l.label || (l.label = {});
  if (u.show == null && (u.show = !1), i === "cross") {
    var f = o.get(["label", "show"]);
    if (u.show = f ?? !0, !a) {
      var c = l.lineStyle = o.get("crossStyle");
      c && gt(u, c.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new Dt(l, e, n));
}
function z2(r, t) {
  t.eachSeries(function(e) {
    var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
    !n || !n.model || i === "none" || i === !1 || i === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || D(r.coordSysAxesInfo[ja(n.model)], function(o) {
      var s = o.axis;
      n.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
    });
  });
}
function H2(r, t) {
  for (var e = t.model, n = t.dim, i = 0; i < r.length; i++) {
    var a = r[i] || {};
    if (mf(a[n + "AxisId"], e.id) || mf(a[n + "AxisIndex"], e.componentIndex) || mf(a[n + "AxisName"], e.name))
      return i;
  }
}
function mf(r, t) {
  return r === "all" || B(r) && lt(r, t) >= 0 || r === t;
}
function $2(r) {
  var t = Mv(r);
  if (t) {
    var e = t.axisPointerModel, n = t.axis.scale, i = e.option, a = e.get("status"), o = e.get("value");
    o != null && (o = n.parse(o));
    var s = Uc(e);
    a == null && (i.status = s ? "show" : "hide");
    var l = n.getExtent();
    // Pick a value on axis when initializing.
    (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function Mv(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[ja(r)];
}
function G2(r) {
  var t = Mv(r);
  return t && t.axisPointerModel;
}
function Uc(r) {
  return !!r.get(["handle", "show"]);
}
function ja(r) {
  return r.type + "||" + r.id;
}
var yf = {}, ob = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this.axisPointerClass && $2(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0);
    }, t.prototype.updateAxisPointer = function(e, n, i, a) {
      this._doUpdateAxisPointerClass(e, i, !1);
    }, t.prototype.remove = function(e, n) {
      var i = this._axisPointer;
      i && i.remove(n);
    }, t.prototype.dispose = function(e, n) {
      this._disposeAxisPointer(n), r.prototype.dispose.apply(this, arguments);
    }, t.prototype._doUpdateAxisPointerClass = function(e, n, i) {
      var a = t.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = G2(e);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, n, i) : this._disposeAxisPointer(n);
      }
    }, t.prototype._disposeAxisPointer = function(e) {
      this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(e, n) {
      if (process.env.NODE_ENV !== "production" && yf[e])
        throw new Error("axisPointer " + e + " exists");
      yf[e] = n;
    }, t.getAxisPointerClass = function(e) {
      return e && yf[e];
    }, t.type = "axis", t;
  })(Ne)
), Wc = dt();
function U2(r, t, e, n) {
  var i = e.axis;
  if (!i.scale.isBlank()) {
    var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), l = n.coordinateSystem.getRect(), u = i.getTicksCoords({
      tickModel: a,
      breakTicks: "none",
      pruneByBreak: "preserve_extent_bound"
    });
    if (u.length) {
      var f = s.length, c = Wc(r).splitAreaColors, h = Q(), v = 0;
      if (c)
        for (var d = 0; d < u.length; d++) {
          var p = c.get(u[d].tickValue);
          if (p != null) {
            v = (p + (f - 1) * d) % f;
            break;
          }
        }
      var m = i.toGlobalCoord(u[0].coord), g = o.getAreaStyle();
      s = B(s) ? s : [s];
      for (var d = 1; d < u.length; d++) {
        var y = i.toGlobalCoord(u[d].coord), _ = void 0, b = void 0, S = void 0, w = void 0;
        i.isHorizontal() ? (_ = m, b = l.y, S = y - _, w = l.height, m = _ + S) : (_ = l.x, b = m, S = l.width, w = y - b, m = b + w);
        var x = u[d - 1].tickValue;
        x != null && h.set(x, v), t.add(new Pt({
          anid: x != null ? "area_" + x : null,
          shape: {
            x: _,
            y: b,
            width: S,
            height: w
          },
          style: gt({
            fill: s[v]
          }, g),
          autoBatch: !0,
          silent: !0
        })), v = (v + 1) % f;
      }
      Wc(r).splitAreaColors = h;
    }
  }
}
function W2(r) {
  Wc(r).splitAreaColors = null;
}
var Y2 = ["splitArea", "splitLine", "minorSplitLine", "breakArea"], sb = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new Ot(), this.group.add(this._axisGroup), !!qa(e)) {
        this._axisGroup.add(e.axis.axisBuilder.group), D(Y2, function(l) {
          e.get([l, "show"]) && X2[l](this, this._axisGroup, e, e.getCoordSysModel(), i);
        }, this);
        var s = a && a.type === "changeAxisOrder" && a.isInitSort;
        s || P_(o, this._axisGroup, e), r.prototype.render.call(this, e, n, i, a);
      }
    }, t.prototype.remove = function() {
      W2(this);
    }, t.type = "cartesianAxis", t;
  })(ob)
), X2 = {
  splitLine: function(r, t, e, n, i) {
    var a = e.axis;
    if (!a.scale.isBlank()) {
      var o = e.getModel("splitLine"), s = o.getModel("lineStyle"), l = s.get("color"), u = o.get("showMinLine") !== !1, f = o.get("showMaxLine") !== !1;
      l = B(l) ? l : [l];
      for (var c = n.coordinateSystem.getRect(), h = a.isHorizontal(), v = 0, d = a.getTicksCoords({
        tickModel: o,
        breakTicks: "none",
        pruneByBreak: "preserve_extent_bound"
      }), p = [], m = [], g = s.getLineStyle(), y = 0; y < d.length; y++) {
        var _ = a.toGlobalCoord(d[y].coord);
        if (!(y === 0 && !u || y === d.length - 1 && !f)) {
          var b = d[y].tickValue;
          h ? (p[0] = _, p[1] = c.y, m[0] = _, m[1] = c.y + c.height) : (p[0] = c.x, p[1] = _, m[0] = c.x + c.width, m[1] = _);
          var S = v++ % l.length, w = new pr({
            anid: b != null ? "line_" + b : null,
            autoBatch: !0,
            shape: {
              x1: p[0],
              y1: p[1],
              x2: m[0],
              y2: m[1]
            },
            style: gt({
              stroke: l[S]
            }, g),
            silent: !0
          });
          Ga(w.shape, g.lineWidth), t.add(w);
        }
      }
    }
  },
  minorSplitLine: function(r, t, e, n, i) {
    var a = e.axis, o = e.getModel("minorSplitLine"), s = o.getModel("lineStyle"), l = n.coordinateSystem.getRect(), u = a.isHorizontal(), f = a.getMinorTicksCoords();
    if (f.length)
      for (var c = [], h = [], v = s.getLineStyle(), d = 0; d < f.length; d++)
        for (var p = 0; p < f[d].length; p++) {
          var m = a.toGlobalCoord(f[d][p].coord);
          u ? (c[0] = m, c[1] = l.y, h[0] = m, h[1] = l.y + l.height) : (c[0] = l.x, c[1] = m, h[0] = l.x + l.width, h[1] = m);
          var g = new pr({
            anid: "minor_line_" + f[d][p].tickValue,
            autoBatch: !0,
            shape: {
              x1: c[0],
              y1: c[1],
              x2: h[0],
              y2: h[1]
            },
            style: v,
            silent: !0
          });
          Ga(g.shape, v.lineWidth), t.add(g);
        }
  },
  splitArea: function(r, t, e, n, i) {
    U2(r, t, e, n);
  },
  breakArea: function(r, t, e, n, i) {
    e.axis.scale;
  }
}, lb = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "xAxis", t;
  })(sb)
), Z2 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = lb.type, e;
    }
    return t.type = "yAxis", t;
  })(sb)
), q2 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "grid", e;
    }
    return t.prototype.render = function(e, n) {
      this.group.removeAll(), e.get("show") && this.group.add(new Pt({
        shape: e.coordinateSystem.getRect(),
        style: gt({
          fill: e.get("backgroundColor")
        }, e.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, t.type = "grid", t;
  })(Ne)
), Sm = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function K2(r) {
  r.registerComponentView(q2), r.registerComponentModel(aL), r.registerCoordinateSystem("cartesian2d", L2), fm(r, "x", Gc, Sm), fm(r, "y", Gc, Sm), r.registerComponentView(lb), r.registerComponentView(Z2), r.registerPreprocessor(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  });
}
var wm = pr.prototype, _f = Vl.prototype, ub = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
    }
    return r;
  })()
);
(function(r) {
  V(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t;
})(ub);
function bf(r) {
  return isNaN(+r.cpx1) || isNaN(+r.cpy1);
}
var Q2 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "ec-line", n;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: q.color.neutral99,
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new ub();
    }, t.prototype.buildPath = function(e, n) {
      bf(n) ? wm.buildPath.call(this, e, n) : _f.buildPath.call(this, e, n);
    }, t.prototype.pointAt = function(e) {
      return bf(this.shape) ? wm.pointAt.call(this, e) : _f.pointAt.call(this, e);
    }, t.prototype.tangentAt = function(e) {
      var n = this.shape, i = bf(n) ? [n.x2 - n.x1, n.y2 - n.y1] : _f.tangentAt.call(this, e);
      return yh(i, i);
    }, t;
  })(mt)
), Sf = ["fromSymbol", "toSymbol"];
function xm(r) {
  return "_" + r + "Type";
}
function Tm(r, t, e) {
  var n = t.getItemVisual(e, r);
  if (!n || n === "none")
    return n;
  var i = t.getItemVisual(e, r + "Size"), a = t.getItemVisual(e, r + "Rotate"), o = t.getItemVisual(e, r + "Offset"), s = t.getItemVisual(e, r + "KeepAspect"), l = uv(i), u = Kl(o || 0, l);
  return n + l + u + (a || "") + (s || "");
}
function Cm(r, t, e) {
  var n = t.getItemVisual(e, r);
  if (!(!n || n === "none")) {
    var i = t.getItemVisual(e, r + "Size"), a = t.getItemVisual(e, r + "Rotate"), o = t.getItemVisual(e, r + "Offset"), s = t.getItemVisual(e, r + "KeepAspect"), l = uv(i), u = Kl(o || 0, l), f = Bn(n, -l[0] / 2 + u[0], -l[1] / 2 + u[1], l[0], l[1], null, s);
    return f.__specifiedRotation = a == null || isNaN(a) ? void 0 : +a * Math.PI / 180 || 0, f.name = r, f;
  }
}
function j2(r) {
  var t = new Q2({
    name: "line",
    subPixelOptimize: !0
  });
  return Yc(t.shape, r), t;
}
function Yc(r, t) {
  r.x1 = t[0][0], r.y1 = t[0][1], r.x2 = t[1][0], r.y2 = t[1][1], r.percent = 1;
  var e = t[2];
  e ? (r.cpx1 = e[0], r.cpy1 = e[1]) : (r.cpx1 = NaN, r.cpy1 = NaN);
}
var J2 = (
  /** @class */
  (function(r) {
    V(t, r);
    function t(e, n, i) {
      var a = r.call(this) || this;
      return a._createLine(e, n, i), a;
    }
    return t.prototype._createLine = function(e, n, i) {
      var a = e.hostModel, o = e.getItemLayout(n), s = e.getItemVisual(n, "z2"), l = j2(o);
      l.shape.percent = 0, $i(l, {
        z2: H(s, 0),
        shape: {
          percent: 1
        }
      }, a, n), this.add(l), D(Sf, function(u) {
        var f = Cm(u, e, n);
        this.add(f), this[xm(u)] = Tm(u, e, n);
      }, this), this._updateCommonStl(e, n, i);
    }, t.prototype.updateData = function(e, n, i) {
      var a = e.hostModel, o = this.childOfName("line"), s = e.getItemLayout(n), l = {
        shape: {}
      };
      Yc(l.shape, s), gr(o, l, a, n), D(Sf, function(u) {
        var f = Tm(u, e, n), c = xm(u);
        if (this[c] !== f) {
          this.remove(this.childOfName(u));
          var h = Cm(u, e, n);
          this.add(h);
        }
        this[c] = f;
      }, this), this._updateCommonStl(e, n, i);
    }, t.prototype.getLinePath = function() {
      return this.childAt(0);
    }, t.prototype._updateCommonStl = function(e, n, i) {
      var a = e.hostModel, o = this.childOfName("line"), s = i && i.emphasisLineStyle, l = i && i.blurLineStyle, u = i && i.selectLineStyle, f = i && i.labelStatesModels, c = i && i.emphasisDisabled, h = i && i.focus, v = i && i.blurScope;
      if (!i || e.hasItemOption) {
        var d = e.getItemModel(n), p = d.getModel("emphasis");
        s = p.getModel("lineStyle").getLineStyle(), l = d.getModel(["blur", "lineStyle"]).getLineStyle(), u = d.getModel(["select", "lineStyle"]).getLineStyle(), c = p.get("disabled"), h = p.get("focus"), v = p.get("blurScope"), f = uo(d);
      }
      var m = e.getItemVisual(n, "style"), g = m.stroke;
      o.useStyle(m), o.style.fill = null, o.style.strokeNoScale = !0, o.ensureState("emphasis").style = s, o.ensureState("blur").style = l, o.ensureState("select").style = u, D(Sf, function(w) {
        var x = this.childOfName(w);
        if (x) {
          x.setColor(g), x.style.opacity = m.opacity;
          for (var E = 0; E < Me.length; E++) {
            var T = Me[E], C = o.getState(T);
            if (C) {
              var A = C.style || {}, L = x.ensureState(T), M = L.style || (L.style = {});
              A.stroke != null && (M[x.__isEmptyBrush ? "stroke" : "fill"] = A.stroke), A.opacity != null && (M.opacity = A.opacity);
            }
          }
          x.markRedraw();
        }
      }, this);
      var y = a.getRawValue(n);
      Ul(this, f, {
        labelDataIndex: n,
        labelFetcher: {
          getFormattedLabel: function(w, x) {
            return a.getFormattedLabel(w, x, e.dataType);
          }
        },
        inheritColor: g || q.color.neutral99,
        defaultOpacity: m.opacity,
        defaultText: (y == null ? e.getName(n) : isFinite(y) ? st(y, 10) : y) + ""
      });
      var _ = this.getTextContent();
      if (_) {
        var b = f.normal;
        _.__align = _.style.align, _.__verticalAlign = _.style.verticalAlign, _.__position = b.get("position") || "middle";
        var S = b.get("distance");
        B(S) || (S = [S, S]), _.__labelDistance = S;
      }
      this.setTextConfig({
        position: null,
        local: !0,
        inside: !1
        // Can't be inside for stroke element.
      }), Gs(this, h, v, c);
    }, t.prototype.highlight = function() {
      za(this);
    }, t.prototype.downplay = function() {
      Ha(this);
    }, t.prototype.updateLayout = function(e, n) {
      this.childOfName("line").stopAnimation(), this.setLinePoints(e.getItemLayout(n));
    }, t.prototype.setLinePoints = function(e) {
      var n = this.childOfName("line");
      Yc(n.shape, e), n.dirty();
    }, t.prototype.beforeUpdate = function() {
      var e = this, n = e.childOfName("fromSymbol"), i = e.childOfName("toSymbol"), a = e.getTextContent();
      if (!n && !i && (!a || a.ignore))
        return;
      for (var o = 1, s = this.parent; s; )
        s.scaleX && (o /= s.scaleX), s = s.parent;
      var l = e.childOfName("line");
      if (!this.__dirty && !l.__dirty)
        return;
      var u = l.shape.percent, f = l.pointAt(0), c = l.pointAt(u), h = xy([], c, f);
      yh(h, h);
      function v(C, A) {
        var L = C.__specifiedRotation;
        if (L == null) {
          var M = l.tangentAt(A);
          C.attr("rotation", (A === 1 ? -1 : 1) * Math.PI / 2 - Math.atan2(M[1], M[0]));
        } else
          C.attr("rotation", L);
      }
      if (n && (n.setPosition(f), v(n, 0), n.scaleX = n.scaleY = o * u, n.markRedraw()), i && (i.setPosition(c), v(i, 1), i.scaleX = i.scaleY = o * u, i.markRedraw()), a && !a.ignore) {
        a.x = a.y = 0, a.originX = a.originY = 0;
        var d = void 0, p = void 0, m = a.__labelDistance, g = m[0] * o, y = m[1] * o, _ = u / 2, b = l.tangentAt(_), S = [b[1], -b[0]], w = l.pointAt(_);
        S[1] > 0 && (S[0] = -S[0], S[1] = -S[1]);
        var x = b[0] < 0 ? -1 : 1;
        if (a.__position !== "start" && a.__position !== "end") {
          var E = -Math.atan2(b[1], b[0]);
          c[0] < f[0] && (E = Math.PI + E), a.rotation = E;
        }
        var T = void 0;
        switch (a.__position) {
          case "insideStartTop":
          case "insideMiddleTop":
          case "insideEndTop":
          case "middle":
            T = -y, p = "bottom";
            break;
          case "insideStartBottom":
          case "insideMiddleBottom":
          case "insideEndBottom":
            T = y, p = "top";
            break;
          default:
            T = 0, p = "middle";
        }
        switch (a.__position) {
          case "end":
            a.x = h[0] * g + c[0], a.y = h[1] * y + c[1], d = h[0] > 0.8 ? "left" : h[0] < -0.8 ? "right" : "center", p = h[1] > 0.8 ? "top" : h[1] < -0.8 ? "bottom" : "middle";
            break;
          case "start":
            a.x = -h[0] * g + f[0], a.y = -h[1] * y + f[1], d = h[0] > 0.8 ? "right" : h[0] < -0.8 ? "left" : "center", p = h[1] > 0.8 ? "bottom" : h[1] < -0.8 ? "top" : "middle";
            break;
          case "insideStartTop":
          case "insideStart":
          case "insideStartBottom":
            a.x = g * x + f[0], a.y = f[1] + T, d = b[0] < 0 ? "right" : "left", a.originX = -g * x, a.originY = -T;
            break;
          case "insideMiddleTop":
          case "insideMiddle":
          case "insideMiddleBottom":
          case "middle":
            a.x = w[0], a.y = w[1] + T, d = "center", a.originY = -T;
            break;
          case "insideEndTop":
          case "insideEnd":
          case "insideEndBottom":
            a.x = -g * x + c[0], a.y = c[1] + T, d = b[0] >= 0 ? "right" : "left", a.originX = g * x, a.originY = -T;
            break;
        }
        a.scaleX = a.scaleY = o, a.setStyle({
          // Use the user specified text align and baseline first
          verticalAlign: a.__verticalAlign || p,
          align: a.__align || d
        });
      }
    }, t;
  })(Ot)
), tP = (
  /** @class */
  (function() {
    function r(t) {
      this.group = new Ot(), this._LineCtor = t || J2;
    }
    return r.prototype.updateData = function(t) {
      var e = this;
      this._progressiveEls = null;
      var n = this, i = n.group, a = n._lineData;
      n._lineData = t, a || i.removeAll();
      var o = Dm(t);
      t.diff(a).add(function(s) {
        e._doAdd(t, s, o);
      }).update(function(s, l) {
        e._doUpdate(a, t, l, s, o);
      }).remove(function(s) {
        i.remove(a.getItemGraphicEl(s));
      }).execute();
    }, r.prototype.updateLayout = function() {
      var t = this._lineData;
      t && t.eachItemGraphicEl(function(e, n) {
        e.updateLayout(t, n);
      }, this);
    }, r.prototype.incrementalPrepareUpdate = function(t) {
      this._seriesScope = Dm(t), this._lineData = null, this.group.removeAll();
    }, r.prototype.incrementalUpdate = function(t, e, n) {
      this._progressiveEls = [];
      function i(l) {
        !l.isGroup && !eP(l) && (l.incremental = n, l.ensureState("emphasis").hoverLayer = zl);
      }
      for (var a = t.start; a < t.end; a++) {
        var o = e.getItemLayout(a);
        if (wf(o)) {
          var s = new this._LineCtor(e, a, this._seriesScope);
          s.traverse(i), this.group.add(s), e.setItemGraphicEl(a, s), this._progressiveEls.push(s);
        }
      }
    }, r.prototype.remove = function() {
      this.group.removeAll();
    }, r.prototype.eachRendered = function(t) {
      $l(this._progressiveEls || this.group, t);
    }, r.prototype._doAdd = function(t, e, n) {
      var i = t.getItemLayout(e);
      if (wf(i)) {
        var a = new this._LineCtor(t, e, n);
        t.setItemGraphicEl(e, a), this.group.add(a);
      }
    }, r.prototype._doUpdate = function(t, e, n, i, a) {
      var o = t.getItemGraphicEl(n);
      if (!wf(e.getItemLayout(i))) {
        this.group.remove(o);
        return;
      }
      o ? o.updateData(e, i, a) : o = new this._LineCtor(e, i, a), e.setItemGraphicEl(i, o), this.group.add(o);
    }, r;
  })()
);
function eP(r) {
  return r.animators && r.animators.length > 0;
}
function Dm(r) {
  var t = r.hostModel, e = t.getModel("emphasis");
  return {
    lineStyle: t.getModel("lineStyle").getLineStyle(),
    emphasisLineStyle: e.getModel(["lineStyle"]).getLineStyle(),
    blurLineStyle: t.getModel(["blur", "lineStyle"]).getLineStyle(),
    selectLineStyle: t.getModel(["select", "lineStyle"]).getLineStyle(),
    emphasisDisabled: e.get("disabled"),
    blurScope: e.get("blurScope"),
    focus: e.get("focus"),
    labelStatesModels: uo(t)
  };
}
function Em(r) {
  return isNaN(r[0]) || isNaN(r[1]);
}
function wf(r) {
  return r && !Em(r[0]) && !Em(r[1]);
}
var yn = dt(), Am = it, xf = Tt, rP = (
  /** @class */
  (function() {
    function r() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return r.prototype.render = function(t, e, n, i) {
      var a = e.get("value"), o = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = n, !(!i && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, l = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), l && l.hide();
          return;
        }
        s && s.show(), l && l.show();
        var u = {};
        this.makeElOption(u, a, t, e, n);
        var f = u.graphicKey;
        f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
        var c = this._moveAnimation = this.determineAnimation(t, e);
        if (!s)
          s = this._group = new Ot(), this.createPointerEl(s, u, t, e), this.createLabelEl(s, u, t, e), n.getZr().add(s);
        else {
          var h = _t(Mm, e, c);
          this.updatePointerEl(s, u, h), this.updateLabelEl(s, u, h, e);
        }
        Im(s, e, !0), this._renderHandle(a);
      }
    }, r.prototype.remove = function(t) {
      this.clear(t);
    }, r.prototype.dispose = function(t) {
      this.clear(t);
    }, r.prototype.determineAnimation = function(t, e) {
      var n = e.get("animation"), i = t.axis, a = i.type === "category", o = e.get("snap");
      if (!o && !a)
        return !1;
      if (n === "auto" || n == null) {
        var s = this.animationThreshold;
        if (a && Jl(i).w > s)
          return !0;
        if (o) {
          var l = Mv(t).seriesDataCount, u = i.getExtent();
          return Math.abs(u[0] - u[1]) / l > s;
        }
        return !1;
      }
      return n === !0;
    }, r.prototype.makeElOption = function(t, e, n, i, a) {
    }, r.prototype.createPointerEl = function(t, e, n, i) {
      var a = e.pointer;
      if (a) {
        var o = yn(t).pointerEl = new bC[a.type](Am(e.pointer));
        t.add(o);
      }
    }, r.prototype.createLabelEl = function(t, e, n, i) {
      if (e.label) {
        var a = yn(t).labelEl = new oe(Am(e.label));
        t.add(a), Lm(a, i);
      }
    }, r.prototype.updatePointerEl = function(t, e, n) {
      var i = yn(t).pointerEl;
      i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
        shape: e.pointer.shape
      }));
    }, r.prototype.updateLabelEl = function(t, e, n, i) {
      var a = yn(t).labelEl;
      a && (a.setStyle(e.label.style), n(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: e.label.x,
        y: e.label.y
      }), Lm(a, i));
    }, r.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = e.getModel("handle"), o = e.get("status");
        if (!a.get("show") || !o || o === "hide") {
          i && n.remove(i), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, i = this._handle = zh(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(u) {
            g1(u.event);
          },
          onmousedown: xf(this._onHandleDragMove, this, 0, 0),
          drift: xf(this._onHandleDragMove, this),
          ondragend: xf(this._onHandleDragEnd, this)
        }), n.add(i)), Im(i, e, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var l = a.get("size");
        B(l) || (l = [l, l]), i.scaleX = l[0] / 2, i.scaleY = l[1] / 2, p1(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, r.prototype._moveHandleToValue = function(t, e) {
      Mm(this._axisPointerModel, !e && this._moveAnimation, this._handle, Tf(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, r.prototype._onHandleDragMove = function(t, e) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(Tf(n), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(Tf(i)), yn(n).lastProp = null, this._doDispatchAxisPointer();
      }
    }, r.prototype._doDispatchAxisPointer = function() {
      var t = this._handle;
      if (t) {
        var e = this._payloadInfo, n = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: n.axis.dim,
            axisIndex: n.componentIndex
          }]
        });
      }
    }, r.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var t = this._handle;
      if (t) {
        var e = this._axisPointerModel.get("value");
        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, r.prototype.clear = function(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(), n = this._group, i = this._handle;
      e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), Ic(this, "_doDispatchAxisPointer");
    }, r.prototype.doClear = function() {
    }, r.prototype.buildLabel = function(t, e, n) {
      return n = n || 0, {
        x: t[n],
        y: t[1 - n],
        width: e[n],
        height: e[1 - n]
      };
    }, r;
  })()
);
function Mm(r, t, e, n) {
  fb(yn(e).lastProp, n) || (yn(e).lastProp = n, t ? gr(e, n, r) : (e.stopAnimation(), e.attr(n)));
}
function fb(r, t) {
  if (X(r) && X(t)) {
    var e = !0;
    return D(t, function(n, i) {
      e = e && fb(r[i], n);
    }), !!e;
  } else
    return r === t;
}
function Lm(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function Tf(r) {
  return {
    x: r.x || 0,
    y: r.y || 0,
    rotation: r.rotation || 0
  };
}
function Im(r, t, e) {
  var n = t.get("z"), i = t.get("zlevel");
  r && r.traverse(function(a) {
    a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = e);
  });
}
function nP(r) {
  var t = r.get("type"), e = r.getModel(t + "Style"), n;
  return t === "line" ? (n = e.getLineStyle(), n.fill = null) : t === "shadow" && (n = e.getAreaStyle(), n.stroke = null), n;
}
function iP(r, t, e, n, i) {
  var a = e.get("value"), o = cb(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
    precision: e.get(["label", "precision"]),
    formatter: e.get(["label", "formatter"])
  }), s = e.getModel("label"), l = ql(s.get("padding") || 0), u = s.getFont(), f = Dy(o, u), c = i.position, h = f.width + l[1] + l[3], v = f.height + l[0] + l[2], d = i.align;
  d === "right" && (c[0] -= h), d === "center" && (c[0] -= h / 2);
  var p = i.verticalAlign;
  p === "bottom" && (c[1] -= v), p === "middle" && (c[1] -= v / 2), aP(c, h, v, n);
  var m = s.get("backgroundColor");
  (!m || m === "auto") && (m = t.get(["axisLine", "lineStyle", "color"])), r.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: c[0],
    y: c[1],
    style: Ii(s, {
      text: o,
      font: u,
      fill: s.getTextColor(),
      padding: l,
      backgroundColor: m
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function aP(r, t, e, n) {
  var i = n.getWidth(), a = n.getHeight();
  r[0] = Math.min(r[0] + t, i) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
}
function cb(r, t, e, n, i) {
  r = t.scale.parse(r);
  var a = t.scale.getLabel({
    value: r
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: i.precision
  }), o = i.formatter;
  if (o) {
    var s = {
      value: Js(t, {
        value: r
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    D(n, function(l) {
      var u = e.getSeriesByIndex(l.seriesIndex), f = l.dataIndexInside, c = u && u.getDataParams(f);
      c && s.seriesData.push(c);
    }), $(o) ? a = o.replace("{value}", a) : W(o) && (a = o(s));
  }
  return a;
}
function hb(r, t, e) {
  var n = Ze();
  return mh(n, n, e.rotation), Ff(n, n, e.position), Fh([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], n);
}
function oP(r, t, e, n, i, a) {
  var o = Rr.innerTextLayout(e.rotation, 0, e.labelDirection);
  e.labelMargin = i.get(["label", "margin"]), iP(t, n, i, a, {
    position: hb(n.axis, r, e),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function sP(r, t, e) {
  return e = e || 0, {
    x1: r[e],
    y1: r[1 - e],
    x2: t[e],
    y2: t[1 - e]
  };
}
function lP(r, t, e) {
  return e = e || 0, {
    x: r[e],
    y: r[1 - e],
    width: t[e],
    height: t[1 - e]
  };
}
function uP(r, t, e) {
  return Jl(r, {
    fromStat: {
      sers: Y(t, function(n) {
        return e.getSeriesByIndex(n.seriesIndex);
      })
    },
    min: 1
  }).w;
}
function fP(r, t, e) {
  return [pt(ce(t[0], t[1]), r - e / 2), ce(r + e / 2, pt(t[0], t[1]))];
}
var cP = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(e, n, i, a, o) {
      var s = i.axis, l = s.grid, u = a.get("type"), f = s.getGlobalExtent(), c = Pm(l, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (u && u !== "none") {
        var v = nP(a), d = hP[u](s, h, f, c, a.get("seriesDataIndices"), a.ecModel);
        d.style = v, e.graphicKey = d.type, e.pointer = d;
      }
      var p = il(l.getRect(), i);
      oP(n, e, p, i, a, o);
    }, t.prototype.getHandleTransform = function(e, n, i) {
      var a = il(n.axis.grid.getRect(), n, {
        labelInside: !1
      });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = hb(n.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(e, n, i, a) {
      var o = i.axis, s = o.grid, l = o.getGlobalExtent(!0), u = Pm(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, c = [e.x, e.y];
      c[f] += n[f], c[f] = ce(l[1], c[f]), c[f] = pt(l[0], c[f]);
      var h = (u[1] + u[0]) / 2, v = [h, h];
      v[f] = c[f];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: c[0],
        y: c[1],
        rotation: e.rotation,
        cursorPoint: v,
        tooltipOption: d[f]
      };
    }, t;
  })(rP)
);
function Pm(r, t) {
  var e = {};
  return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
}
var hP = {
  line: function(r, t, e, n) {
    var i = sP([t, n[0]], [t, n[1]], Om(r));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(r, t, e, n, i, a) {
    var o = uP(r, i, a), s = n[1] - n[0], l = fP(t, e, o), u = l[0], f = l[1];
    return {
      type: "Rect",
      shape: lP([u, n[0]], [f - u, s], Om(r))
    };
  }
};
function Om(r) {
  return r.dim === "x" ? 0 : 1;
}
var vP = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "axisPointer", t.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: q.color.border,
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: q.color.shadowTint
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: q.color.neutral00,
        padding: [5, 7, 5, 7],
        backgroundColor: q.color.accent60,
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: q.color.accent40,
        // For mobile performance
        throttle: 40
      }
    }, t;
  })(ft)
), fr = dt(), dP = D;
function vb(r, t, e) {
  if (!tt.node) {
    var n = t.getZr();
    fr(n).records || (fr(n).records = {}), pP(n, t);
    var i = fr(n).records[r] || (fr(n).records[r] = {});
    i.handler = e;
  }
}
function pP(r, t) {
  if (fr(r).initialized)
    return;
  fr(r).initialized = !0, e("click", _t(Cf, "click")), e("mousemove", _t(Cf, "mousemove")), e("mousewheel", _t(Cf, "mousewheel")), e("globalout", mP);
  function e(n, i) {
    r.on(n, function(a) {
      var o = yP(t);
      dP(fr(r).records, function(s) {
        s && i(s, a, o.dispatchAction);
      }), gP(o.pendings, t);
    });
  }
}
function gP(r, t) {
  var e = r.showTip.length, n = r.hideTip.length, i;
  e ? i = r.showTip[e - 1] : n && (i = r.hideTip[n - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
}
function mP(r, t, e) {
  r.handler("leave", null, e);
}
function Cf(r, t, e, n) {
  t.handler(r, e, n);
}
function yP(r) {
  var t = {
    showTip: [],
    hideTip: []
  }, e = function(n) {
    var i = t[n.type];
    i ? i.push(n) : (n.dispatchAction = e, r.dispatchAction(n));
  };
  return {
    dispatchAction: e,
    pendings: t
  };
}
function Xc(r, t) {
  if (!tt.node) {
    var e = t.getZr(), n = (fr(e).records || {})[r];
    n && (fr(e).records[r] = null);
  }
}
var _P = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      var a = n.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click|mousewheel";
      vb("axisPointer", i, function(s, l, u) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
          type: "updateAxisPointer",
          currTrigger: s,
          x: l && l.offsetX,
          y: l && l.offsetY
        });
      });
    }, t.prototype.remove = function(e, n) {
      Xc("axisPointer", n);
    }, t.prototype.dispose = function(e, n) {
      Xc("axisPointer", n);
    }, t.type = "axisPointer", t;
  })(Ne)
);
function db(r, t) {
  var e = [], n = r.seriesIndex, i;
  if (n == null || !(i = t.getSeriesByIndex(n)))
    return {
      point: []
    };
  var a = i.getData(), o = On(a, r);
  if (o == null || o < 0 || B(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), l = i.coordinateSystem;
  if (i.getTooltipPosition)
    e = i.getTooltipPosition(o) || [];
  else if (l && l.dataToPoint)
    if (r.isStacked) {
      var u = l.getBaseAxis(), f = l.getOtherAxis(u), c = f.dim, h = u.dim, v = c === "x" || c === "radius" ? 1 : 0, d = a.mapDimension(h), p = [];
      p[v] = a.get(d, o), p[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = l.dataToPoint(p) || [];
    } else
      e = l.dataToPoint(a.getValues(Y(l.dimensions, function(g) {
        return a.mapDimension(g);
      }), o)) || [];
  else if (s) {
    var m = s.getBoundingRect().clone();
    m.applyTransform(s.transform), e = [m.x + m.width / 2, m.y + m.height / 2];
  }
  return {
    point: e,
    el: s
  };
}
var Nm = dt();
function bP(r, t, e) {
  var n = r.currTrigger, i = [r.x, r.y], a = r, o = r.dispatchAction || Tt(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    Es(i) && (i = db({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var l = Es(i), u = a.axesInfo, f = s.axesInfo, c = n === "leave" || Es(i), h = {}, v = {}, d = {
      list: [],
      map: {}
    }, p = {
      showPointer: _t(wP, v),
      showTooltip: _t(xP, d)
    };
    D(s.coordSysMap, function(g, y) {
      var _ = l || g.containPoint(i);
      D(s.coordSysAxesInfo[y], function(b, S) {
        var w = b.axis, x = EP(u, b);
        if (!c && _ && (!u || x)) {
          var E = x && x.value;
          E == null && !l && (E = w.pointToData(i)), E != null && km(b, E, p, !1, h);
        }
      });
    });
    var m = {};
    return D(f, function(g, y) {
      var _ = g.linkGroup;
      _ && !v[y] && D(_.axesInfo, function(b, S) {
        var w = v[S];
        if (b !== g && w) {
          var x = w.value;
          _.mapper && (x = g.axis.scale.parse(_.mapper(x, Rm(b), Rm(g)))), m[g.key] = x;
        }
      });
    }), D(m, function(g, y) {
      km(f[y], g, p, !0, h);
    }), TP(v, f, h), CP(d, i, r, o), DP(f, o, e), h;
  }
}
function km(r, t, e, n, i) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = SP(t, r), s = o.payloadBatch, l = o.snapToValue;
    s[0] && i.seriesIndex == null && k(i, s[0]), !n && r.snap && a.containData(l) && l != null && (t = l), e.showPointer(r, t, s), e.showTooltip(r, o, l);
  }
}
function SP(r, t) {
  var e = t.axis, n = e.dim, i = r, a = [], o = Number.MAX_VALUE, s = -1;
  return D(t.seriesModels, function(l, u) {
    var f = l.getData().mapDimensionsAll(n), c, h;
    if (l.getAxisTooltipData) {
      var v = l.getAxisTooltipData(f, r, e);
      h = v.dataIndices, c = v.nestestValue;
    } else {
      if (h = l.indicesOfNearest(
        n,
        f[0],
        r,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        e.type === "category" ? 0.5 : null
      ), !h.length)
        return;
      c = l.getData().get(f[0], h[0]);
    }
    if (er(c)) {
      var d = r - c, p = Math.abs(d);
      p <= o && ((p < o || d >= 0 && s < 0) && (o = p, s = d, i = c, a.length = 0), D(h, function(m) {
        a.push({
          seriesIndex: l.seriesIndex,
          dataIndexInside: m,
          dataIndex: l.getData().getRawIndex(m)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: i
  };
}
function wP(r, t, e, n) {
  r[t.key] = {
    value: e,
    payloadBatch: n
  };
}
function xP(r, t, e, n) {
  var i = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !i.length)) {
    var l = t.coordSys.model, u = ja(l), f = r.map[u];
    f || (f = r.map[u] = {
      coordSysId: l.id,
      coordSysIndex: l.componentIndex,
      coordSysType: l.type,
      coordSysMainType: l.mainType,
      dataByAxis: []
    }, r.list.push(f)), f.dataByAxis.push({
      axisDim: a.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: n,
      // Caution: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: i.slice()
    });
  }
}
function TP(r, t, e) {
  var n = e.axesInfo = [];
  D(t, function(i, a) {
    var o = i.axisPointerModel.option, s = r[a];
    s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
      axisDim: i.axis.dim,
      axisIndex: i.axis.model.componentIndex,
      value: o.value
    });
  });
}
function CP(r, t, e, n) {
  if (Es(t) || !r.list.length) {
    n({
      type: "hideTip"
    });
    return;
  }
  var i = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  n({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: e.tooltipOption,
    position: e.position,
    dataIndexInside: i.dataIndexInside,
    dataIndex: i.dataIndex,
    seriesIndex: i.seriesIndex,
    dataByCoordSys: r.list
  });
}
function DP(r, t, e) {
  var n = e.getZr(), i = "axisPointerLastHighlights", a = Nm(n)[i] || {}, o = Nm(n)[i] = {};
  D(r, function(f, c) {
    var h = f.axisPointerModel.option;
    h.status === "show" && f.triggerEmphasis && D(h.seriesDataIndices, function(v) {
      o[v.seriesIndex + "|" + v.dataIndex] = v;
    });
  });
  var s = [], l = [];
  function u(f) {
    return {
      seriesIndex: f.seriesIndex,
      dataIndex: f.dataIndex
    };
  }
  D(a, function(f, c) {
    !o[c] && l.push(u(f));
  }), D(o, function(f, c) {
    !a[c] && s.push(u(f));
  }), l.length && e.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: l
  }), s.length && e.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function EP(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var n = r[e];
    if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function Rm(r) {
  var t = r.axis.model, e = {}, n = e.axisDim = r.axis.dim;
  return e.axisIndex = e[n + "AxisIndex"] = t.componentIndex, e.axisName = e[n + "AxisName"] = t.name, e.axisId = e[n + "AxisId"] = t.id, e;
}
function Es(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function pb(r) {
  ob.registerAxisPointerClass("CartesianAxisPointer", cP), r.registerComponentModel(vP), r.registerComponentView(_P), r.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !B(e) && (t.axisPointer.link = [e]);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, {
    overallReset: function(t, e) {
      t.getComponent("axisPointer").coordSysAxesInfo = B2(t, e);
    }
  }), r.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, bP);
}
function AP(r) {
  Hr(K2), Hr(pb);
}
function MP(r, t) {
  var e = ql(t.get("padding")), n = t.getItemStyle(["color", "opacity"]);
  n.fill = t.get("backgroundColor");
  var i = new Pt({
    shape: {
      x: r.x - e[3],
      y: r.y - e[0],
      width: r.width + e[1] + e[3],
      height: r.height + e[0] + e[2],
      r: t.get("borderRadius")
    },
    style: n,
    silent: !0,
    z2: -1
  });
  return i;
}
var LP = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: !0,
      // tooltip main content
      showContent: !0,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click|mousewheel",
      alwaysShowContent: !1,
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaults to `false` (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      displayTransition: !0,
      enterable: !1,
      backgroundColor: q.color.neutral00,
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      defaultBorderColor: q.color.border,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: q.color.borderShade,
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: q.color.tertiary,
        fontSize: 14
      }
    }, t;
  })(ft)
);
function gb(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function mb(r) {
  if (tt.domSupported) {
    for (var t = document.documentElement.style, e = 0, n = r.length; e < n; e++)
      if (r[e] in t)
        return r[e];
  }
}
var yb = mb(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), IP = mb(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function _b(r, t) {
  if (!r)
    return t;
  t = d0(t, !0);
  var e = r.indexOf(t);
  return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
}
function PP(r, t) {
  var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
  return e ? e[t] : null;
}
var OP = _b(IP, "transition"), Lv = _b(yb, "transform"), NP = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (tt.transform3dSupported ? "will-change:transform;" : "");
function kP(r) {
  return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
}
function RP(r, t, e) {
  if (!$(e) || e === "inside")
    return "";
  var n = r.get("backgroundColor"), i = r.get("borderWidth");
  t = kn(t);
  var a = kP(e), o = Math.max(Math.round(i) * 1.5, 6), s = "", l = Lv + ":", u;
  lt(["left", "right"], a) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (u = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (u = a === "top" ? 225 : 45) + "deg)");
  var f = u * Math.PI / 180, c = o + i, h = c * Math.abs(Math.cos(f)) + c * Math.abs(Math.sin(f)), v = Math.round(((h - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (h - c) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = t + " solid " + i + "px;", p = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
  return '<div style="' + p.join("") + '"></div>';
}
function BP(r, t, e) {
  var n = "cubic-bezier(0.23,1,0.32,1)", i = "", a = "";
  return e && (i = " " + r / 2 + "s " + n, a = "opacity" + i + ",visibility" + i), t || (i = " " + r + "s " + n, a += (a.length ? "," : "") + (tt.transformSupported ? "" + Lv + i : ",left" + i + ",top" + i)), OP + ":" + a;
}
function Bm(r, t, e) {
  var n = r.toFixed(0) + "px", i = t.toFixed(0) + "px";
  if (!tt.transformSupported)
    return e ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
  var a = tt.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return e ? "top:0;left:0;" + Lv + ":" + o + ";" : [["top", 0], ["left", 0], [yb, o]];
}
function VP(r) {
  var t = [], e = r.get("fontSize"), n = r.getTextColor();
  n && t.push("color:" + n), t.push("font:" + r.getFont());
  var i = H(r.get("lineHeight"), Math.round(e * 3 / 2));
  e && t.push("line-height:" + i + "px");
  var a = r.get("textShadowColor"), o = r.get("textShadowBlur") || 0, s = r.get("textShadowOffsetX") || 0, l = r.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + l + "px " + o + "px " + a), D(["decoration", "align"], function(u) {
    var f = r.get(u);
    f && t.push("text-" + u + ":" + f);
  }), t.join(";");
}
function FP(r, t, e, n) {
  var i = [], a = r.get("transitionDuration"), o = r.get("backgroundColor"), s = r.get("shadowBlur"), l = r.get("shadowColor"), u = r.get("shadowOffsetX"), f = r.get("shadowOffsetY"), c = r.getModel("textStyle"), h = x0(r, "html"), v = u + "px " + f + "px " + s + "px " + l;
  return i.push("box-shadow:" + v), t && a > 0 && i.push(BP(a, e, n)), o && i.push("background-color:" + o), D(["width", "color", "radius"], function(d) {
    var p = "border-" + d, m = d0(p), g = r.get(m);
    g != null && i.push(p + ":" + g + (d === "color" ? "" : "px"));
  }), i.push(VP(c)), h != null && i.push("padding:" + ql(h).join("px ") + "px"), i.join(";") + ";";
}
function Vm(r, t, e, n, i) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && LD(r, o, e, n, i);
  } else {
    r[0] = n, r[1] = i;
    var s = a && a.getViewportRootOffset();
    s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
  }
  r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var zP = (
  /** @class */
  (function() {
    function r(t, e) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, tt.wxa)
        return null;
      var n = document.createElement("div");
      n.domBelongToZr = !0, this.el = n;
      var i = this._zr = t.getZr(), a = e.appendTo, o = a && ($(a) ? document.querySelector(a) : wi(a) ? a : W(a) && a(t.getDom()));
      Vm(this._styleCoord, i, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(n), this._api = t, this._container = o;
      var s = this;
      n.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, n.onmousemove = function(l) {
        if (l = l || window.event, !s._enterable) {
          var u = i.handler, f = i.painter.getViewportRoot();
          me(f, l, !0), u.dispatch("mousemove", l);
        }
      }, n.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return r.prototype.update = function(t) {
      if (!this._container) {
        var e = this._api.getDom(), n = PP(e, "position"), i = e.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this._enableDisplayTransition = t.get("displayTransition") && t.get("transitionDuration") > 0, this.el.className = t.get("className") || "";
    }, r.prototype.show = function(t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el, i = n.style, a = this._styleCoord;
      n.innerHTML ? i.cssText = NP + FP(t, !this._firstShow, this._longHide, this._enableDisplayTransition) + Bm(a[0], a[1], !0) + ("border-color:" + kn(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, r.prototype.setContent = function(t, e, n, i, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if ($(a) && n.get("trigger") === "item" && !gb(n) && (s = RP(n, i, a)), $(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", B(t) || (t = [t]);
        for (var l = 0; l < t.length; l++)
          wi(t[l]) && t[l].parentNode !== o && o.appendChild(t[l]);
        if (s && o.childNodes.length) {
          var u = document.createElement("div");
          u.innerHTML = s, o.appendChild(u);
        }
      }
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el;
      return t ? [t.offsetWidth, t.offsetHeight] : [0, 0];
    }, r.prototype.moveTo = function(t, e) {
      if (this.el) {
        var n = this._styleCoord;
        if (Vm(n, this._zr, this._container, t, e), n[0] != null && n[1] != null) {
          var i = this.el.style, a = Bm(n[0], n[1]);
          D(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      var t = this, e = this.el.style;
      this._enableDisplayTransition ? (e.visibility = "hidden", e.opacity = "0") : e.display = "none", tt.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return t._longHide = !0;
      }, 500);
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(Tt(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this._zr;
      ID(t && t.painter && t.painter.getViewportRoot(), this._container);
      var e = this.el;
      if (e) {
        e.onmouseenter = e.onmousemove = e.onmouseleave = null;
        var n = e.parentNode;
        n && n.removeChild(e);
      }
      this.el = this._container = null;
    }, r;
  })()
), HP = (
  /** @class */
  (function() {
    function r(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), zm(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return r.prototype.update = function(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized(), this._alwaysShowContent = e;
    }, r.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, r.prototype.setContent = function(t, e, n, i, a) {
      var o = this;
      X(t) && re(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      this.el = new oe({
        style: {
          rich: e.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: x0(n, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: n.get("z")
      }), D(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(u) {
        o.el.style[u] = n.get(u);
      }), D(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(u) {
        o.el.style[u] = s.get(u) || 0;
      }), this._zr.add(this.el);
      var l = this;
      this.el.on("mouseover", function() {
        l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0;
      }), this.el.on("mouseout", function() {
        l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1;
      });
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el, e = this.el.getBoundingRect(), n = Fm(t.style);
      return [e.width + n.left + n.right, e.height + n.top + n.bottom];
    }, r.prototype.moveTo = function(t, e) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        zm(i, this._zr, t, e), t = i[0], e = i[1];
        var a = n.style, o = Er(a.borderWidth || 0), s = Fm(a);
        n.x = t + o + s.left, n.y = e + o + s.top, n.markRedraw();
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(Tt(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, r;
  })()
);
function Er(r) {
  return Math.max(0, r);
}
function Fm(r) {
  var t = Er(r.shadowBlur || 0), e = Er(r.shadowOffsetX || 0), n = Er(r.shadowOffsetY || 0);
  return {
    left: Er(t - e),
    right: Er(t + e),
    top: Er(t - n),
    bottom: Er(t + n)
  };
}
function zm(r, t, e, n) {
  r[0] = e, r[1] = n, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var $P = new Pt({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), GP = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, n) {
      if (!(tt.node || !n.getDom())) {
        var i = e.getComponent("tooltip"), a = this._renderMode = Ux(i.get("renderMode"));
        this._tooltipContent = a === "richText" ? new HP(n) : new zP(n, {
          appendTo: i.get("appendToBody", !0) ? "body" : i.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(e, n, i) {
      if (!(tt.node || !i.getDom())) {
        this.group.removeAll(), this._tooltipModel = e, this._ecModel = n, this._api = i;
        var a = this._tooltipContent;
        a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? p1(this, "_updatePosition", 50, "fixRate") : Ic(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var e = this._tooltipModel, n = e.get("triggerOn");
      vb("itemTooltip", this._api, Tt(function(i, a, o) {
        n !== "none" && (n.indexOf(i) >= 0 ? this._tryShow(a, o) : i === "leave" && this._hide(o));
      }, this));
    }, t.prototype._keepShow = function() {
      var e = this._tooltipModel, n = this._ecModel, i = this._api, a = e.get("triggerOn");
      if (e.get("trigger") !== "axis" && (this._lastDataByCoordSys = null, this._cbParamsList = null), this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
        var o = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !i.isDisposed() && o.manuallyShowTip(e, n, i, {
            x: o._lastX,
            y: o._lastY,
            dataByCoordSys: o._lastDataByCoordSys
          });
        });
      }
    }, t.prototype.manuallyShowTip = function(e, n, i, a) {
      if (!(a.from === this.uid || tt.node || !i.getDom())) {
        var o = Hm(a, i);
        this._ticket = "";
        var s = a.dataByCoordSys, l = XP(a, n, i);
        if (l) {
          var u = l.el.getBoundingRect().clone();
          u.applyTransform(l.el.transform), this._tryShow({
            offsetX: u.x + u.width / 2,
            offsetY: u.y + u.height / 2,
            target: l.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else if (a.tooltip && a.x != null && a.y != null) {
          var f = $P;
          f.x = a.x, f.y = a.y, f.update(), ct(f).tooltipConfig = {
            name: null,
            option: a.tooltip
          }, this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            target: f
          }, o);
        } else if (s)
          this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            position: a.position,
            dataByCoordSys: s,
            tooltipOption: a.tooltipOption
          }, o);
        else if (a.seriesIndex != null) {
          if (this._manuallyAxisShowTip(e, n, i, a))
            return;
          var c = db(a, n), h = c.point[0], v = c.point[1];
          h != null && v != null && this._tryShow({
            offsetX: h,
            offsetY: v,
            target: c.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else a.x != null && a.y != null && (i.dispatchAction({
          type: "updateAxisPointer",
          x: a.x,
          y: a.y
        }), this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          target: i.getZr().findHover(a.x, a.y).target
        }, o));
      }
    }, t.prototype.manuallyHideTip = function(e, n, i, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, this._cbParamsList = null, a.from !== this.uid && this._hide(Hm(a, i));
    }, t.prototype._manuallyAxisShowTip = function(e, n, i, a) {
      var o = a.seriesIndex, s = a.dataIndex, l = n.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || l == null)) {
        var u = n.getSeriesByIndex(o);
        if (u) {
          var f = u.getData(), c = ua([f.getItemModel(s), u, (u.coordinateSystem || {}).model], this._tooltipModel);
          if (c.get("trigger") === "axis")
            return i.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, t.prototype._tryShow = function(e, n) {
      var i = e.target, a = this._tooltipModel;
      if (a) {
        this._lastX = e.offsetX, this._lastY = e.offsetY;
        var o = e.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, e);
        else if (i) {
          var s = ct(i);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null, this._cbParamsList = null;
          var l, u;
          ya(i, function(f) {
            if (f.tooltipDisabled)
              return l = u = null, !0;
            l || u || (ct(f).dataIndex != null ? l = f : ct(f).tooltipConfig != null && (u = f));
          }, !0), l ? this._showSeriesItemTooltip(e, l, n) : u ? this._showComponentItemTooltip(e, u, n) : this._hide(n);
        } else
          this._lastDataByCoordSys = null, this._cbParamsList = null, this._hide(n);
      }
    }, t.prototype._showOrMove = function(e, n) {
      var i = e.get("showDelay");
      n = Tt(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
    }, t.prototype._showAxisTooltip = function(e, n) {
      var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = ua([n.tooltipOption], a), l = this._renderMode, u = [], f = Rn("section", {
        blocks: [],
        noHeader: !0
      }), c = [], h = new Yu();
      D(e, function(y) {
        D(y.dataByAxis, function(_) {
          var b = i.getComponent(_.axisDim + "Axis", _.axisIndex), S = _.value, w = b.axis, x = w.scale.parse(S);
          if (!(!b || S == null)) {
            var E = cb(S, w, i, _.seriesDataIndices, _.valueLabelOpt), T = Rn("section", {
              header: E,
              noHeader: !We(E),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(T), D(_.seriesDataIndices, function(C) {
              var A = i.getSeriesByIndex(C.seriesIndex), L = C.dataIndexInside, M = A.getDataParams(L);
              if (!(M.dataIndex < 0)) {
                M.axisDim = _.axisDim, M.axisIndex = _.axisIndex, M.axisType = _.axisType, M.axisId = _.axisId, M.axisValue = Js(b.axis, {
                  value: x
                }), M.axisValueLabel = E, M.marker = h.makeTooltipMarker("item", kn(M.color), l);
                var I = Pp(A.formatTooltip(L, !0, null)), O = I.frag;
                if (O) {
                  var P = ua([A], a).get("valueFormatter");
                  T.blocks.push(P ? k({
                    valueFormatter: P
                  }, O) : O);
                }
                I.text && c.push(I.text), u.push(M);
              }
            });
          }
        });
      }), f.blocks.reverse(), c.reverse();
      var v = n.position, d = s.get("order"), p = Rp(f, h, l, d, i.get("useUTC"), s.get("textStyle"));
      p && c.unshift(p);
      var m = l === "richText" ? `

` : "<br/>", g = c.join(m);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(e, u) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, u) : this._showTooltipContent(s, g, u, Math.random() + "", o[0], o[1], v, null, h);
      });
    }, t.prototype._showSeriesItemTooltip = function(e, n, i) {
      var a = this._ecModel, o = ct(n), s = o.seriesIndex, l = a.getSeriesByIndex(s), u = o.dataModel || l, f = o.dataIndex, c = o.dataType, h = u.getData(c), v = this._renderMode, d = e.positionDefault, p = ua([h.getItemModel(f), u, l && (l.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), m = p.get("trigger");
      if (!(m != null && m !== "item")) {
        var g = u.getDataParams(f, c), y = new Yu();
        g.marker = y.makeTooltipMarker("item", kn(g.color), v);
        var _ = Pp(u.formatTooltip(f, !1, c)), b = p.get("order"), S = p.get("valueFormatter"), w = _.frag, x = w ? Rp(S ? k({
          valueFormatter: S
        }, w) : w, y, v, b, a.get("useUTC"), p.get("textStyle")) : _.text, E = "item_" + u.name + "_" + f;
        this._showOrMove(p, function() {
          this._showTooltipContent(p, x, g, E, e.offsetX, e.offsetY, e.position, e.target, y);
        }), i({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: h.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, t.prototype._showComponentItemTooltip = function(e, n, i) {
      var a = this._renderMode === "html", o = ct(n), s = o.tooltipConfig, l = s.option || {}, u = l.encodeHTMLContent;
      if ($(l)) {
        var f = l;
        l = {
          content: f,
          // Fixed formatter
          formatter: f
        }, u = !0;
      }
      u && a && l.content && (l = it(l), l.content = ne(l.content));
      var c = [l], h = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      h && c.push(h), c.push({
        formatter: l.content
      });
      var v = e.positionDefault, d = ua(c, this._tooltipModel, v ? {
        position: v
      } : null), p = d.get("content"), m = Math.random() + "", g = new Yu();
      this._showOrMove(d, function() {
        var y = it(d.get("formatterParams") || {});
        this._showTooltipContent(d, p, y, m, e.offsetX, e.offsetY, e.position, n, g);
      }), i({
        type: "showTip",
        from: this.uid
      });
    }, t.prototype._showTooltipContent = function(e, n, i, a, o, s, l, u, f) {
      if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
        var c = this._tooltipContent;
        c.setEnterable(e.get("enterable"));
        var h = e.get("formatter");
        l = l || e.get("position");
        var v = n, d = this._getNearestPoint([o, s], i, e.get("trigger"), e.get("borderColor"), e.get("defaultBorderColor", !0)), p = d.color;
        if (h)
          if ($(h)) {
            var m = e.ecModel.get("useUTC"), g = B(i) ? i[0] : i, y = g && g.axisType && g.axisType.indexOf("time") >= 0;
            v = h, y && (v = Zl(g.axisValue, v, m)), v = p0(v, i, !0);
          } else if (W(h)) {
            var _ = Tt(function(b, S) {
              b === this._ticket && (c.setContent(S, f, e, p, l), this._updatePosition(e, l, o, s, c, i, u));
            }, this);
            this._ticket = a, v = h(i, a, _);
          } else
            v = h;
        c.setContent(v, f, e, p, l), c.show(e, p), this._updatePosition(e, l, o, s, c, i, u);
      }
    }, t.prototype._getNearestPoint = function(e, n, i, a, o) {
      if (i === "axis" || B(n))
        return {
          color: a || o
        };
      if (!B(n))
        return {
          color: a || n.color || n.borderColor
        };
    }, t.prototype._updatePosition = function(e, n, i, a, o, s, l) {
      var u = this._api.getWidth(), f = this._api.getHeight();
      n = n || e.get("position");
      var c = o.getSize(), h = e.get("align"), v = e.get("verticalAlign"), d = l && l.getBoundingRect().clone();
      if (l && d.applyTransform(l.transform), W(n) && (n = n([i, a], s, o.el, d, {
        viewSize: [u, f],
        contentSize: c.slice()
      })), B(n))
        i = te(n[0], u), a = te(n[1], f);
      else if (X(n)) {
        var p = n;
        p.width = c[0], p.height = c[1];
        var m = Wa(p, {
          width: u,
          height: f
        });
        i = m.x, a = m.y, h = null, v = null;
      } else if ($(n) && l) {
        var g = YP(n, d, c, e.get("borderWidth"));
        i = g[0], a = g[1];
      } else {
        var g = UP(i, a, o, u, f, h ? null : 20, v ? null : 20);
        i = g[0], a = g[1];
      }
      if (h && (i -= $m(h) ? c[0] / 2 : h === "right" ? c[0] : 0), v && (a -= $m(v) ? c[1] / 2 : v === "bottom" ? c[1] : 0), gb(e)) {
        var g = WP(i, a, o, u, f);
        i = g[0], a = g[1];
      }
      o.moveTo(i, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(e, n) {
      var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === e.length;
      return o && D(i, function(s, l) {
        var u = s.dataByAxis || [], f = e[l] || {}, c = f.dataByAxis || [];
        o = o && u.length === c.length, o && D(u, function(h, v) {
          var d = c[v] || {}, p = h.seriesDataIndices || [], m = d.seriesDataIndices || [];
          o = o && h.value === d.value && h.axisType === d.axisType && h.axisId === d.axisId && p.length === m.length, o && D(p, function(g, y) {
            var _ = m[y];
            o = o && g.seriesIndex === _.seriesIndex && g.dataIndex === _.dataIndex;
          }), a && D(h.seriesDataIndices, function(g) {
            var y = g.seriesIndex, _ = n[y], b = a[y];
            _ && b && b.data !== _.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = e, this._cbParamsList = n, !!o;
    }, t.prototype._hide = function(e) {
      this._lastDataByCoordSys = null, this._cbParamsList = null, e({
        type: "hideTip",
        from: this.uid
      });
    }, t.prototype.dispose = function(e, n) {
      tt.node || !n.getDom() || (Ic(this, "_updatePosition"), this._tooltipContent.dispose(), Xc("itemTooltip", n), this._tooltipContent = null, this._tooltipModel = null, this._lastDataByCoordSys = null, this._cbParamsList = null);
    }, t.type = "tooltip", t;
  })(Ne)
);
function ua(r, t, e) {
  var n = t.ecModel, i;
  e ? (i = new Dt(e, n, n), i = new Dt(t.option, i, n)) : i = t;
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o && (o instanceof Dt && (o = o.get("tooltip", !0)), $(o) && (o = {
      formatter: o
    }), o && (i = new Dt(o, i, n)));
  }
  return i;
}
function Hm(r, t) {
  return r.dispatchAction || Tt(t.dispatchAction, t);
}
function UP(r, t, e, n, i, a, o) {
  var s = e.getSize(), l = s[0], u = s[1];
  return a != null && (r + l + a + 2 > n ? r -= l + a : r += a), o != null && (t + u + o > i ? t -= u + o : t += o), [r, t];
}
function WP(r, t, e, n, i) {
  var a = e.getSize(), o = a[0], s = a[1];
  return r = Math.min(r + o, n) - o, t = Math.min(t + s, i) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
}
function YP(r, t, e, n) {
  var i = e[0], a = e[1], o = Math.ceil(Math.SQRT2 * n) + 8, s = 0, l = 0, u = t.width, f = t.height;
  switch (r) {
    case "inside":
      s = t.x + u / 2 - i / 2, l = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + u / 2 - i / 2, l = t.y - a - o;
      break;
    case "bottom":
      s = t.x + u / 2 - i / 2, l = t.y + f + o;
      break;
    case "left":
      s = t.x - i - o, l = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + u + o, l = t.y + f / 2 - a / 2;
  }
  return [s, l];
}
function $m(r) {
  return r === "center" || r === "middle";
}
function XP(r, t, e) {
  var n = Th(r).queryOptionMap, i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = so(t, i, n.get(i), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = e.getViewOfComponentModel(o), l;
      if (s.group.traverse(function(u) {
        var f = ct(u).tooltipConfig;
        if (f && f.name === r.name)
          return l = u, !0;
      }), l)
        return {
          componentMainType: i,
          componentIndex: o.componentIndex,
          el: l
        };
    }
  }
}
function ZP(r) {
  Hr(pb), r.registerComponentModel(LP), r.registerComponentView(GP), r.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, Gt), r.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, Gt);
}
function bb(r, t) {
  if (!r)
    return !1;
  for (var e = B(r) ? r : [r], n = 0; n < e.length; n++)
    if (e[n] && e[n][t])
      return !0;
  return !1;
}
function es(r) {
  ic(r, "label", ["show"]);
}
var rs = dt(), $r = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.createdBySelf = !1, e.preventAutoZ = !0, e;
    }
    return t.prototype.init = function(e, n, i) {
      if (process.env.NODE_ENV !== "production" && this.type === "marker")
        throw new Error("Marker component is abstract component. Use markLine, markPoint, markArea instead.");
      this.mergeDefaultAndTheme(e, i), this._mergeOption(e, i, !1, !0);
    }, t.prototype.isAnimationEnabled = function() {
      if (tt.node)
        return !1;
      var e = this.__hostSeries;
      return this.getShallow("animation") && e && e.isAnimationEnabled();
    }, t.prototype.mergeOption = function(e, n) {
      this._mergeOption(e, n, !1, !1);
    }, t.prototype._mergeOption = function(e, n, i, a) {
      var o = this.mainType;
      i || n.eachSeries(function(s) {
        var l = s.get(this.mainType, !0), u = rs(s)[o];
        if (!l || !l.data) {
          rs(s)[o] = null;
          return;
        }
        u ? u._mergeOption(l, n, !0) : (a && es(l), D(l.data, function(f) {
          f instanceof Array ? (es(f[0]), es(f[1])) : es(f);
        }), u = this.createMarkerModelFromSeries(l, this, n), k(u, {
          mainType: this.mainType,
          // Use the same series index and name
          seriesIndex: s.seriesIndex,
          name: s.name,
          createdBySelf: !0
        }), u.__hostSeries = s), rs(s)[o] = u;
      }, this);
    }, t.prototype.formatTooltip = function(e, n, i) {
      var a = this.getData(), o = this.getRawValue(e), s = a.getName(e);
      return Rn("section", {
        header: this.name,
        blocks: [Rn("nameValue", {
          name: s,
          value: o,
          noName: !s,
          noValue: o == null
        })]
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.setData = function(e) {
      this._data = e;
    }, t.prototype.getDataParams = function(e, n) {
      var i = sv.prototype.getDataParams.call(this, e, n), a = this.__hostSeries;
      return a && (i.seriesId = a.id, i.seriesName = a.name, i.seriesType = a.subType), i;
    }, t.getMarkerModelFromSeries = function(e, n) {
      return rs(e)[n];
    }, t.type = "marker", t.dependencies = ["series", "grid", "polar", "geo"], t;
  })(ft)
);
ke($r, sv.prototype);
var qP = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.createMarkerModelFromSeries = function(e, n, i) {
      return new t(e, n, i);
    }, t.type = "markPoint", t.defaultOption = {
      // zlevel: 0,
      z: 5,
      symbol: "pin",
      symbolSize: 50,
      // symbolRotate: 0,
      // symbolOffset: [0, 0]
      tooltip: {
        trigger: "item"
      },
      label: {
        show: !0,
        position: "inside"
      },
      itemStyle: {
        borderWidth: 2
      },
      emphasis: {
        label: {
          show: !0
        }
      }
    }, t;
  })($r)
);
function KP(r) {
  return !(isNaN(parseFloat(r.x)) && isNaN(parseFloat(r.y)));
}
function QP(r) {
  return !isNaN(parseFloat(r.x)) && !isNaN(parseFloat(r.y));
}
function ns(r, t, e, n, i, a, o) {
  var s = [], l = Oi(
    t,
    i
    /* , otherDataDim */
  ), u = l ? t.getCalculationInfo("stackResultDimension") : i, f = gl(t, u, r), c = t.hostModel, h = c.indicesOfNearest(e, u, f)[0];
  s[a] = t.get(n, h), s[o] = t.get(u, h);
  var v = t.get(i, h), d = Xe(t.get(i, h));
  return d = Math.min(d, 20), d >= 0 && (s[o] = +s[o].toFixed(d)), [s, v];
}
var is = {
  min: _t(ns, "min"),
  max: _t(ns, "max"),
  average: _t(ns, "average"),
  median: _t(ns, "median")
};
function Zc(r, t) {
  if (t) {
    var e = r.getData(), n = r.coordinateSystem, i = n && n.dimensions;
    if (!QP(t) && !B(t.coord) && B(i)) {
      var a = Sb(t, e, n, r);
      if (t = it(t), t.type && is[t.type] && a.baseAxis && a.valueAxis) {
        var o = lt(i, a.baseAxis.dim), s = lt(i, a.valueAxis.dim), l = is[t.type](e, a.valueAxis.dim, a.baseDataDim, a.valueDataDim, o, s);
        t.coord = l[0], t.value = l[1];
      } else
        t.coord = [t.xAxis != null ? t.xAxis : t.radiusAxis, t.yAxis != null ? t.yAxis : t.angleAxis];
    }
    if (t.coord == null || !B(i)) {
      t.coord = [];
      var u = r.getBaseAxis();
      if (u && t.type && is[t.type]) {
        var f = n.getOtherAxis(u);
        f && (t.value = gl(e, e.mapDimension(f.dim), t.type));
      }
    } else
      for (var c = t.coord, h = 0; h < 2; h++)
        is[c[h]] && (c[h] = gl(e, e.mapDimension(i[h]), c[h]));
    return t;
  }
}
function Sb(r, t, e, n) {
  var i = {};
  return r.valueIndex != null || r.valueDim != null ? (i.valueDataDim = r.valueIndex != null ? t.getDimension(r.valueIndex) : r.valueDim, i.valueAxis = e.getAxis(jP(n, i.valueDataDim)), i.baseAxis = e.getOtherAxis(i.valueAxis), i.baseDataDim = t.mapDimension(i.baseAxis.dim)) : (i.baseAxis = n.getBaseAxis(), i.valueAxis = e.getOtherAxis(i.baseAxis), i.baseDataDim = t.mapDimension(i.baseAxis.dim), i.valueDataDim = t.mapDimension(i.valueAxis.dim)), i;
}
function jP(r, t) {
  var e = r.getData().getDimensionInfo(t);
  return e && e.coordDim;
}
function qc(r, t) {
  return r && r.containData && t.coord && !KP(t) ? r.containData(t.coord) : !0;
}
function wb(r, t) {
  return r ? function(e, n, i, a) {
    var o = a < 2 ? e.coord && e.coord[a] : e.value;
    return mi(o, t[a]);
  } : function(e, n, i, a) {
    return mi(e.value, t[a]);
  };
}
function gl(r, t, e) {
  if (e === "average") {
    var n = 0, i = 0;
    return r.each(t, function(a, o) {
      isNaN(a) || (n += a, i++);
    }), n / i;
  } else return e === "median" ? r.getMedian(t) : r.getDataExtent(t)[e === "max" ? 1 : 0];
}
var Df = dt(), xb = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function() {
      this.markerGroupMap = Q();
    }, t.prototype.render = function(e, n, i) {
      var a = this, o = this.markerGroupMap;
      o.each(function(s) {
        Df(s).keep = !1;
      }), n.eachSeries(function(s) {
        var l = $r.getMarkerModelFromSeries(s, a.type);
        l && a.renderSeries(s, l, n, i);
      }), o.each(function(s) {
        !Df(s).keep && a.group.remove(s.group);
      }), JP(n, o, this.type);
    }, t.prototype.markKeep = function(e) {
      Df(e).keep = !0;
    }, t.prototype.toggleBlurSeries = function(e, n) {
      var i = this;
      D(e, function(a) {
        var o = $r.getMarkerModelFromSeries(a, i.type);
        if (o) {
          var s = o.getData();
          s.eachItemGraphicEl(function(l) {
            l && (n ? h_(l) : Ih(l));
          });
        }
      });
    }, t.type = "marker", t;
  })(Ne)
);
function JP(r, t, e) {
  r.eachSeries(function(n) {
    var i = $r.getMarkerModelFromSeries(n, e), a = t.get(n.id);
    if (i && a && a.group) {
      var o = Gh(i), s = o.z, l = o.zlevel;
      Uh(a.group, s, l);
    }
  });
}
function Gm(r, t, e) {
  var n = t.coordinateSystem, i = e.getWidth(), a = e.getHeight(), o = n && n.getArea && n.getArea();
  r.each(function(s) {
    var l = r.getItemModel(s), u = l.get("relativeTo") === "coordinate", f = u ? o ? o.width : 0 : i, c = u ? o ? o.height : 0 : a, h = u && o ? o.x : 0, v = u && o ? o.y : 0, d, p = te(l.get("x"), f) + h, m = te(l.get("y"), c) + v;
    if (!isNaN(p) && !isNaN(m))
      d = [p, m];
    else if (t.getMarkerPosition)
      d = t.getMarkerPosition(r.getValues(r.dimensions, s));
    else if (n) {
      var g = r.get(n.dimensions[0], s), y = r.get(n.dimensions[1], s);
      d = n.dataToPoint([g, y]);
    }
    isNaN(p) || (d[0] = p), isNaN(m) || (d[1] = m), r.setItemLayout(s, d);
  });
}
var tO = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.updateTransform = function(e, n, i) {
      n.eachSeries(function(a) {
        var o = $r.getMarkerModelFromSeries(a, "markPoint");
        o && (Gm(o.getData(), a, i), this.markerGroupMap.get(a.id).updateLayout());
      }, this);
    }, t.prototype.renderSeries = function(e, n, i, a) {
      var o = e.coordinateSystem, s = e.id, l = e.getData(), u = this.markerGroupMap, f = u.get(s) || u.set(s, new C0()), c = eO(o, e, n);
      n.setData(c), Gm(n.getData(), e, a), c.each(function(h) {
        var v = c.getItemModel(h), d = v.getShallow("symbol"), p = v.getShallow("symbolSize"), m = v.getShallow("symbolRotate"), g = v.getShallow("symbolOffset"), y = v.getShallow("symbolKeepAspect");
        if (W(d) || W(p) || W(m) || W(g)) {
          var _ = n.getRawValue(h), b = n.getDataParams(h);
          W(d) && (d = d(_, b)), W(p) && (p = p(_, b)), W(m) && (m = m(_, b)), W(g) && (g = g(_, b));
        }
        var S = v.getModel("itemStyle").getItemStyle(), w = v.get("z2"), x = Sv(l, "color");
        S.fill || (S.fill = x), c.setItemVisual(h, {
          z2: H(w, 0),
          symbol: d,
          symbolSize: p,
          symbolRotate: m,
          symbolOffset: g,
          symbolKeepAspect: y,
          style: S
        });
      }), f.updateData(c), this.group.add(f.group), c.eachItemGraphicEl(function(h) {
        h.traverse(function(v) {
          ct(v).dataModel = n;
        });
      }), this.markKeep(f), f.group.silent = n.get("silent") || e.get("silent");
    }, t.type = "markPoint", t;
  })(xb)
);
function eO(r, t, e) {
  var n;
  r ? n = Y(r && r.dimensions, function(s) {
    var l = t.getData(), u = l.getDimensionInfo(l.mapDimension(s)) || {};
    return k(k({}, u), {
      name: s,
      // DON'T use ordinalMeta to parse and collect ordinal.
      ordinalMeta: null
    });
  }) : n = [{
    name: "value",
    type: "float"
  }];
  var i = new Ea(n, e), a = Y(e.get("data"), _t(Zc, t));
  r && (a = Rt(a, _t(qc, r)));
  var o = wb(!!r, n);
  return i.initData(a, null, o), i;
}
function rO(r) {
  r.registerComponentModel(qP), r.registerComponentView(tO), r.registerPreprocessor(function(t) {
    bb(t.series, "markPoint") && (t.markPoint = t.markPoint || {});
  });
}
var nO = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.createMarkerModelFromSeries = function(e, n, i) {
      return new t(e, n, i);
    }, t.type = "markLine", t.defaultOption = {
      // zlevel: 0,
      z: 5,
      symbol: ["circle", "arrow"],
      symbolSize: [8, 16],
      // symbolRotate: 0,
      symbolOffset: 0,
      precision: 2,
      tooltip: {
        trigger: "item"
      },
      label: {
        show: !0,
        position: "end",
        distance: 5
      },
      lineStyle: {
        type: "dashed"
      },
      emphasis: {
        label: {
          show: !0
        },
        lineStyle: {
          width: 3
        }
      },
      animationEasing: "linear"
    }, t;
  })($r)
), as = dt(), iO = function(r, t, e, n) {
  var i = r.getData(), a;
  if (B(n))
    a = n;
  else {
    var o = n.type;
    if (o === "min" || o === "max" || o === "average" || o === "median" || n.xAxis != null || n.yAxis != null) {
      var s = void 0, l = void 0;
      if (n.yAxis != null || n.xAxis != null)
        s = t.getAxis(n.yAxis != null ? "y" : "x"), l = In(n.yAxis, n.xAxis);
      else {
        var u = Sb(n, i, t, r);
        s = u.valueAxis;
        var f = e0(i, u.valueDataDim);
        l = gl(i, f, o);
      }
      var c = s.dim === "x" ? 0 : 1, h = 1 - c, v = it(n), d = {
        coord: []
      };
      v.type = null, v.coord = [], v.coord[h] = -1 / 0, d.coord[h] = 1 / 0;
      var p = e.get("precision");
      p >= 0 && wt(l) && (l = +l.toFixed(Math.min(p, 20))), v.coord[c] = d.coord[c] = l, a = [v, d, {
        type: o,
        valueIndex: n.valueIndex,
        // Force to use the value of calculated value.
        value: l
      }];
    } else
      process.env.NODE_ENV !== "production" && Ir("Invalid markLine data."), a = [];
  }
  var m = [Zc(r, a[0]), Zc(r, a[1]), k({}, a[2])];
  return m[2].type = m[2].type || null, ht(m[2], m[0]), ht(m[2], m[1]), m;
};
function ml(r) {
  return !isNaN(r) && !isFinite(r);
}
function Um(r, t, e, n) {
  var i = 1 - r, a = n.dimensions[r];
  return ml(t[i]) && ml(e[i]) && t[r] === e[r] && n.getAxis(a).containData(t[r]);
}
function aO(r, t) {
  if (r.type === "cartesian2d") {
    var e = t[0].coord, n = t[1].coord;
    if (e && n && (Um(1, e, n, r) || Um(0, e, n, r)))
      return !0;
  }
  return qc(r, t[0]) && qc(r, t[1]);
}
function Ef(r, t, e, n, i) {
  var a = n.coordinateSystem, o = r.getItemModel(t), s, l = te(o.get("x"), i.getWidth()), u = te(o.get("y"), i.getHeight());
  if (!isNaN(l) && !isNaN(u))
    s = [l, u];
  else {
    if (n.getMarkerPosition)
      s = n.getMarkerPosition(r.getValues(r.dimensions, t));
    else {
      var f = a.dimensions, c = r.get(f[0], t), h = r.get(f[1], t);
      s = a.dataToPoint([c, h]);
    }
    if (I0(a, "cartesian2d")) {
      var v = a.getAxis("x"), d = a.getAxis("y"), f = a.dimensions;
      ml(r.get(f[0], t)) ? s[0] = v.toGlobalCoord(v.getExtent()[e ? 0 : 1]) : ml(r.get(f[1], t)) && (s[1] = d.toGlobalCoord(d.getExtent()[e ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  r.setItemLayout(t, s);
}
var oO = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.updateTransform = function(e, n, i) {
      n.eachSeries(function(a) {
        var o = $r.getMarkerModelFromSeries(a, "markLine");
        if (o) {
          var s = o.getData(), l = as(o).from, u = as(o).to;
          l.each(function(f) {
            Ef(l, f, !0, a, i), Ef(u, f, !1, a, i);
          }), s.each(function(f) {
            s.setItemLayout(f, [l.getItemLayout(f), u.getItemLayout(f)]);
          }), this.markerGroupMap.get(a.id).updateLayout();
        }
      }, this);
    }, t.prototype.renderSeries = function(e, n, i, a) {
      var o = e.coordinateSystem, s = e.id, l = e.getData(), u = this.markerGroupMap, f = u.get(s) || u.set(s, new tP());
      this.group.add(f.group);
      var c = sO(o, e, n), h = c.from, v = c.to, d = c.line;
      as(n).from = h, as(n).to = v, n.setData(d);
      var p = n.get("symbol"), m = n.get("symbolSize"), g = n.get("symbolRotate"), y = n.get("symbolOffset");
      B(p) || (p = [p, p]), B(m) || (m = [m, m]), B(g) || (g = [g, g]), B(y) || (y = [y, y]), c.from.each(function(b) {
        _(h, b, !0), _(v, b, !1);
      }), d.each(function(b) {
        var S = d.getItemModel(b), w = S.getModel("lineStyle").getLineStyle();
        d.setItemLayout(b, [h.getItemLayout(b), v.getItemLayout(b)]);
        var x = S.get("z2");
        w.stroke == null && (w.stroke = h.getItemVisual(b, "style").fill), d.setItemVisual(b, {
          z2: H(x, 0),
          fromSymbolKeepAspect: h.getItemVisual(b, "symbolKeepAspect"),
          fromSymbolOffset: h.getItemVisual(b, "symbolOffset"),
          fromSymbolRotate: h.getItemVisual(b, "symbolRotate"),
          fromSymbolSize: h.getItemVisual(b, "symbolSize"),
          fromSymbol: h.getItemVisual(b, "symbol"),
          toSymbolKeepAspect: v.getItemVisual(b, "symbolKeepAspect"),
          toSymbolOffset: v.getItemVisual(b, "symbolOffset"),
          toSymbolRotate: v.getItemVisual(b, "symbolRotate"),
          toSymbolSize: v.getItemVisual(b, "symbolSize"),
          toSymbol: v.getItemVisual(b, "symbol"),
          style: w
        });
      }), f.updateData(d), c.line.eachItemGraphicEl(function(b) {
        ct(b).dataModel = n, b.traverse(function(S) {
          ct(S).dataModel = n;
        });
      });
      function _(b, S, w) {
        var x = b.getItemModel(S);
        Ef(b, S, w, e, a);
        var E = x.getModel("itemStyle").getItemStyle();
        E.fill == null && (E.fill = Sv(l, "color")), b.setItemVisual(S, {
          symbolKeepAspect: x.get("symbolKeepAspect"),
          // `0` should be considered as a valid value, so use `retrieve2` instead of `||`
          symbolOffset: H(x.get("symbolOffset", !0), y[w ? 0 : 1]),
          symbolRotate: H(x.get("symbolRotate", !0), g[w ? 0 : 1]),
          // TODO: when 2d array is supported, it should ignore parent
          symbolSize: H(x.get("symbolSize"), m[w ? 0 : 1]),
          symbol: H(x.get("symbol", !0), p[w ? 0 : 1]),
          style: E
        });
      }
      this.markKeep(f), f.group.silent = n.get("silent") || e.get("silent");
    }, t.type = "markLine", t;
  })(xb)
);
function sO(r, t, e) {
  var n;
  r ? n = Y(r && r.dimensions, function(u) {
    var f = t.getData(), c = f.getDimensionInfo(f.mapDimension(u)) || {};
    return k(k({}, c), {
      name: u,
      // DON'T use ordinalMeta to parse and collect ordinal.
      ordinalMeta: null
    });
  }) : n = [{
    name: "value",
    type: "float"
  }];
  var i = new Ea(n, e), a = new Ea(n, e), o = new Ea([], e), s = Y(e.get("data"), _t(iO, t, r, e));
  r && (s = Rt(s, _t(aO, r)));
  var l = wb(!!r, n);
  return i.initData(Y(s, function(u) {
    return u[0];
  }), null, l), a.initData(Y(s, function(u) {
    return u[1];
  }), null, l), o.initData(Y(s, function(u) {
    return u[2];
  })), o.hasItemOption = !0, {
    from: i,
    to: a,
    line: o
  };
}
function lO(r) {
  r.registerComponentModel(nO), r.registerComponentView(oO), r.registerPreprocessor(function(t) {
    bb(t.series, "markLine") && (t.markLine = t.markLine || {});
  });
}
var uO = function(r, t) {
  if (t === "all")
    return {
      type: "all",
      title: r.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (t === "inverse")
    return {
      type: "inverse",
      title: r.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, Kc = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: !0
      }, e;
    }
    return t.prototype.init = function(e, n, i) {
      this.mergeDefaultAndTheme(e, i), e.selected = e.selected || {}, this._updateSelector(e);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.call(this, e, n), this._updateSelector(e);
    }, t.prototype._updateSelector = function(e) {
      var n = e.selector, i = this.ecModel;
      n === !0 && (n = e.selector = ["all", "inverse"]), B(n) && D(n, function(a, o) {
        $(a) && (a = {
          type: a
        }), n[o] = ht(a, uO(i, a.type));
      });
    }, t.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var e = this._data;
      if (e[0] && this.get("selectedMode") === "single") {
        for (var n = !1, i = 0; i < e.length; i++) {
          var a = e[i].get("name");
          if (this.isSelected(a)) {
            this.select(a), n = !0;
            break;
          }
        }
        !n && this.select(e[0].get("name"));
      }
    }, t.prototype._updateData = function(e) {
      var n = [], i = [];
      e.eachRawSeries(function(l) {
        var u = l.name;
        i.push(u);
        var f;
        if (l.legendVisualProvider) {
          var c = l.legendVisualProvider, h = c.getAllNames();
          e.isSeriesFiltered(l) || (i = i.concat(h)), h.length ? n = n.concat(h) : f = !0;
        } else
          f = !0;
        f && xh(l) && n.push(l.name);
      }), this._availableNames = i;
      var a = this.get("data") || n, o = Q(), s = Y(a, function(l) {
        return ($(l) || wt(l)) && (l = {
          name: l
        }), o.get(l.name) ? null : (o.set(l.name, !0), new Dt(l, this, this.ecModel));
      }, this);
      this._data = Rt(s, function(l) {
        return !!l;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(e) {
      var n = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        D(a, function(o) {
          n[o.get("name")] = !1;
        });
      }
      n[e] = !0;
    }, t.prototype.unSelect = function(e) {
      this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
    }, t.prototype.toggleSelected = function(e) {
      var n = this.option.selected;
      n.hasOwnProperty(e) || (n[e] = !0), this[n[e] ? "unSelect" : "select"](e);
    }, t.prototype.allSelect = function() {
      var e = this._data, n = this.option.selected;
      D(e, function(i) {
        n[i.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var e = this._data, n = this.option.selected;
      D(e, function(i) {
        var a = i.get("name", !0);
        n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
      });
    }, t.prototype.isSelected = function(e) {
      var n = this.option.selected;
      return !(n.hasOwnProperty(e) && !n[e]) && lt(this._availableNames, e) >= 0;
    }, t.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      // top: 0,
      bottom: q.size.m,
      align: "auto",
      backgroundColor: q.color.transparent,
      borderColor: q.color.border,
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 8,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: q.color.disabled,
      inactiveBorderColor: q.color.disabled,
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: q.color.disabled,
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: q.color.secondary
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: q.color.tertiary,
        borderWidth: 1,
        borderColor: q.color.border
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: q.color.quaternary
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      },
      triggerEvent: !1
    }, t;
  })(ft)
), ni = _t, Qc = D, os = Ot, Tb = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !1, e;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new os()), this.group.add(this._selectorGroup = new os()), this._isFirstRender = !0;
    }, t.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, t.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, t.prototype.render = function(e, n, i) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
        var o = e.get("align"), s = e.get("orient");
        (!o || o === "auto") && (o = e.get("left") === "right" && s === "vertical" ? "right" : "left");
        var l = e.get("selector", !0), u = e.get("selectorPosition", !0);
        l && (!u || u === "auto") && (u = s === "horizontal" ? "end" : "start"), this.renderInner(o, e, n, i, l, s, u);
        var f = g0(e, i).refContainer, c = e.getBoxLayoutParams(), h = e.get("padding"), v = Wa(c, f, h), d = this.layoutInner(e, o, v, a, l, u), p = Wa(gt({
          width: d.width,
          height: d.height
        }, c), f, h);
        this.group.x = p.x - d.x, this.group.y = p.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = MP(
          d,
          // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
          e
        ));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
      var u = this.getContentGroup(), f = Q(), c = n.get("selectedMode"), h = n.get("triggerEvent"), v = [];
      i.eachRawSeries(function(d) {
        !d.get("legendHoverLink") && v.push(d.id);
      }), Qc(n.getData(), function(d, p) {
        var m = this, g = d.get("name");
        if (!this.newlineDisabled && (g === "" || g === `
`)) {
          var y = new os();
          y.newline = !0, u.add(y);
          return;
        }
        var _ = i.getSeriesByName(g)[0];
        if (!f.get(g)) {
          if (_) {
            var b = _.getData(), S = b.getVisual("legendLineStyle") || {}, w = b.getVisual("legendIcon"), x = b.getVisual("style"), E = this._createItem(_, g, p, d, n, e, S, x, w, c, a);
            E.on("click", ni(Wm, g, null, a, v)).on("mouseover", ni(jc, _.name, null, a, v)).on("mouseout", ni(Jc, _.name, null, a, v)), i.ssr && E.eachChild(function(T) {
              var C = ct(T);
              C.seriesIndex = _.seriesIndex, C.dataIndex = p, C.ssrType = "legend";
            }), h && E.eachChild(function(T) {
              m.packEventData(T, n, _, p, g);
            }), f.set(g, !0);
          } else
            i.eachRawSeries(function(T) {
              var C = this;
              if (!f.get(g) && T.legendVisualProvider) {
                var A = T.legendVisualProvider;
                if (!A.containName(g))
                  return;
                var L = A.indexOfName(g), M = A.getItemVisual(L, "style"), I = A.getItemVisual(L, "legendIcon"), O = Qe(M.fill);
                O && O[3] === 0 && (O[3] = 0.2, M = k(k({}, M), {
                  fill: no(O, "rgba")
                }));
                var P = this._createItem(T, g, p, d, n, e, {}, M, I, c, a);
                P.on("click", ni(Wm, null, g, a, v)).on("mouseover", ni(jc, null, g, a, v)).on("mouseout", ni(Jc, null, g, a, v)), i.ssr && P.eachChild(function(F) {
                  var G = ct(F);
                  G.seriesIndex = T.seriesIndex, G.dataIndex = p, G.ssrType = "legend";
                }), h && P.eachChild(function(F) {
                  C.packEventData(F, n, T, p, g);
                }), f.set(g, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (f.get(g) || console.warn(g + " series not exists. Legend data should be same with series name or data name."));
        }
      }, this), o && this._createSelector(o, n, a, s, l);
    }, t.prototype.packEventData = function(e, n, i, a, o) {
      var s = {
        componentType: "legend",
        componentIndex: n.componentIndex,
        dataIndex: a,
        value: o,
        seriesIndex: i.seriesIndex
      };
      ct(e).eventData = s;
    }, t.prototype._createSelector = function(e, n, i, a, o) {
      var s = this.getSelectorGroup();
      Qc(e, function(u) {
        var f = u.type, c = new oe({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            i.dispatchAction({
              type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: n.id
            });
          }
        });
        s.add(c);
        var h = n.getModel("selectorLabel"), v = n.getModel(["emphasis", "selectorLabel"]);
        Ul(c, {
          normal: h,
          emphasis: v
        }, {
          defaultText: u.title
        }), fc(c);
      });
    }, t.prototype._createItem = function(e, n, i, a, o, s, l, u, f, c, h) {
      var v = e.visualDrawType, d = o.get("itemWidth"), p = o.get("itemHeight"), m = o.isSelected(n), g = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var b = fO(f, a, l, u, v, m, h), S = new os(), w = a.getModel("textStyle");
      if (W(e.getLegendIcon) && (!_ || _ === "inherit"))
        S.add(e.getLegendIcon({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: g,
          itemStyle: b.itemStyle,
          lineStyle: b.lineStyle,
          symbolKeepAspect: y
        }));
      else {
        var x = _ === "inherit" && e.getData().getVisual("symbol") ? g === "inherit" ? e.getData().getVisual("symbolRotate") : g : 0;
        S.add(cO({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: x,
          itemStyle: b.itemStyle,
          symbolKeepAspect: y
        }));
      }
      var E = s === "left" ? d + 5 : -5, T = s, C = o.get("formatter"), A = n;
      $(C) && C ? A = C.replace("{name}", n ?? "") : W(C) && (A = C(n));
      var L = m ? w.getTextColor() : a.get("inactiveColor");
      S.add(new oe({
        style: Ii(w, {
          text: A,
          x: E,
          y: p / 2,
          fill: L,
          align: T,
          verticalAlign: "middle"
        }, {
          inheritColor: L
        })
      }));
      var M = new Pt({
        shape: S.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), I = a.getModel("tooltip");
      return I.get("show") && Hl({
        el: M,
        componentModel: o,
        itemName: n,
        itemTooltipOption: I.option
      }), S.add(M), S.eachChild(function(O) {
        O.silent = !0;
      }), M.silent = !c, this.getContentGroup().add(S), fc(S), S.__legendDataIndex = i, S;
    }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
      var l = this.getContentGroup(), u = this.getSelectorGroup();
      La(e.get("orient"), l, e.get("itemGap"), i.width, i.height);
      var f = l.getBoundingRect(), c = [-f.x, -f.y];
      if (u.markRedraw(), l.markRedraw(), o) {
        La(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          u,
          e.get("selectorItemGap", !0)
        );
        var h = u.getBoundingRect(), v = [-h.x, -h.y], d = e.get("selectorButtonGap", !0), p = e.getOrient().index, m = p === 0 ? "width" : "height", g = p === 0 ? "height" : "width", y = p === 0 ? "y" : "x";
        s === "end" ? v[p] += f[m] + d : c[p] += h[m] + d, v[1 - p] += f[g] / 2 - h[g] / 2, u.x = v[0], u.y = v[1], l.x = c[0], l.y = c[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[m] = f[m] + d + h[m], _[g] = Math.max(f[g], h[g]), _[y] = Math.min(0, h[y] + v[1 - p]), _;
      } else
        return l.x = c[0], l.y = c[1], this.group.getBoundingRect();
    }, t.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, t.type = "legend.plain", t;
  })(Ne)
);
function fO(r, t, e, n, i, a, o) {
  function s(m, g) {
    m.lineWidth === "auto" && (m.lineWidth = g.lineWidth > 0 ? 2 : 0), Qc(m, function(y, _) {
      m[_] === "inherit" && (m[_] = g[_]);
    });
  }
  var l = t.getModel("itemStyle"), u = l.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", c = l.getShallow("decal");
  u.decal = !c || c === "inherit" ? n.decal : Vc(c, o), u.fill === "inherit" && (u.fill = n[i]), u.stroke === "inherit" && (u.stroke = n[f]), u.opacity === "inherit" && (u.opacity = (i === "fill" ? n : e).opacity), s(u, n);
  var h = t.getModel("lineStyle"), v = h.getLineStyle();
  if (s(v, e), u.fill === "auto" && (u.fill = n.fill), u.stroke === "auto" && (u.stroke = n.fill), v.stroke === "auto" && (v.stroke = n.fill), !a) {
    var d = t.get("inactiveBorderWidth"), p = u[f];
    u.lineWidth = d === "auto" ? n.lineWidth > 0 && p ? 2 : 0 : u.lineWidth, u.fill = t.get("inactiveColor"), u.stroke = t.get("inactiveBorderColor"), v.stroke = h.get("inactiveColor"), v.lineWidth = h.get("inactiveWidth");
  }
  return {
    itemStyle: u,
    lineStyle: v
  };
}
function cO(r) {
  var t = r.icon || "roundRect", e = Bn(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
  return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = q.color.neutral00, e.style.lineWidth = 2), e;
}
function Wm(r, t, e, n) {
  Jc(r, t, e, n), e.dispatchAction({
    type: "legendToggleSelect",
    name: r ?? t
  }), jc(r, t, e, n);
}
function jc(r, t, e, n) {
  e.usingTHL() || e.dispatchAction({
    type: "highlight",
    seriesName: r,
    name: t,
    excludeSeriesId: n
  });
}
function Jc(r, t, e, n) {
  e.usingTHL() || e.dispatchAction({
    type: "downplay",
    seriesName: r,
    name: t,
    excludeSeriesId: n
  });
}
function fa(r, t, e) {
  var n = r === "allSelect" || r === "inverseSelect", i = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    n ? s[r]() : s[r](t.name), Ym(s, i), a.push(s.componentIndex);
  });
  var o = {};
  return e.eachComponent("legend", function(s) {
    D(i, function(l, u) {
      s[l ? "select" : "unSelect"](u);
    }), Ym(s, o);
  }), n ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function Ym(r, t) {
  var e = t || {};
  return D(r.getData(), function(n) {
    var i = n.get("name");
    if (!(i === `
` || i === "")) {
      var a = r.isSelected(i);
      fe(e, i) ? e[i] = e[i] && a : e[i] = a;
    }
  }), e;
}
function hO(r) {
  r.registerAction("legendToggleSelect", "legendselectchanged", _t(fa, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", _t(fa, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", _t(fa, "inverseSelect")), r.registerAction("legendSelect", "legendselected", _t(fa, "select")), r.registerAction("legendUnSelect", "legendunselected", _t(fa, "unSelect"));
}
var vO = Dh(dO);
function dO(r) {
  var t = r.findComponents({
    mainType: "legend"
  });
  t && t.length && r.filterSeries(function(e) {
    for (var n = 0; n < t.length; n++)
      if (!t[n].isSelected(e.name))
        return !1;
    return !0;
  });
}
function Cb(r) {
  r.registerComponentModel(Kc), r.registerComponentView(Tb), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, vO), r.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), hO(r);
}
var pO = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.setScrollDataIndex = function(e) {
      this.option.scrollDataIndex = e;
    }, t.prototype.init = function(e, n, i) {
      var a = fo(e);
      r.prototype.init.call(this, e, n, i), Xm(this, e, a);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.call(this, e, n), Xm(this, this.option, e);
    }, t.type = "legend.scroll", t.defaultOption = AD(Kc.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: q.color.accent50,
      pageIconInactiveColor: q.color.accent10,
      pageIconSize: 15,
      pageTextStyle: {
        color: q.color.tertiary
      },
      animationDurationUpdate: 800
    }), t;
  })(Kc)
);
function Xm(r, t, e) {
  var n = r.getOrient(), i = [1, 1];
  i[n.index] = 0, Vr(t, e, {
    type: "box",
    ignoreSize: !!i
  });
}
var Zm = Ot, Af = ["width", "height"], Mf = ["x", "y"], gO = (
  /** @class */
  (function(r) {
    V(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return t.prototype.init = function() {
      r.prototype.init.call(this), this.group.add(this._containerGroup = new Zm()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new Zm());
    }, t.prototype.resetInner = function() {
      r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
      var u = this;
      r.prototype.renderInner.call(this, e, n, i, a, o, s, l);
      var f = this._controllerGroup, c = n.get("pageIconSize", !0), h = B(c) ? c : [c, c];
      d("pagePrev", 0);
      var v = n.getModel("pageTextStyle");
      f.add(new oe({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: v.getTextColor(),
          font: v.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: !0
      })), d("pageNext", 1);
      function d(p, m) {
        var g = p + "DataIndex", y = zh(n.get("pageIcons", !0)[n.getOrient().name][m], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: Tt(u._pageGo, u, g, n, a)
        }, {
          x: -h[0] / 2,
          y: -h[1] / 2,
          width: h[0],
          height: h[1]
        });
        y.name = p, f.add(y);
      }
    }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
      var l = this.getSelectorGroup(), u = e.getOrient().index, f = Af[u], c = Mf[u], h = Af[1 - u], v = Mf[1 - u];
      o && La(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        l,
        e.get("selectorItemGap", !0)
      );
      var d = e.get("selectorButtonGap", !0), p = l.getBoundingRect(), m = [-p.x, -p.y], g = it(i);
      o && (g[f] = i[f] - p[f] - d);
      var y = this._layoutContentAndController(e, a, g, u, f, h, v, c);
      if (o) {
        if (s === "end")
          m[u] += y[f] + d;
        else {
          var _ = p[f] + d;
          m[u] -= _, y[c] -= _;
        }
        y[f] += p[f] + d, m[1 - u] += y[v] + y[h] / 2 - p[h] / 2, y[h] = Math.max(y[h], p[h]), y[v] = Math.min(y[v], p[v] + m[1 - u]), l.x = m[0], l.y = m[1], l.markRedraw();
      }
      return y;
    }, t.prototype._layoutContentAndController = function(e, n, i, a, o, s, l, u) {
      var f = this.getContentGroup(), c = this._containerGroup, h = this._controllerGroup;
      La(e.get("orient"), f, e.get("itemGap"), a ? i.width : null, a ? null : i.height), La(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        h,
        e.get("pageButtonItemGap", !0)
      );
      var v = f.getBoundingRect(), d = h.getBoundingRect(), p = this._showController = v[o] > i[o], m = [-v.x, -v.y];
      n || (m[a] = f[u]);
      var g = [0, 0], y = [-d.x, -d.y], _ = H(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (p) {
        var b = e.get("pageButtonPosition", !0);
        b === "end" ? y[a] += i[o] - d[o] : g[a] += d[o] + _;
      }
      y[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(m), c.setPosition(g), h.setPosition(y);
      var S = {
        x: 0,
        y: 0
      };
      if (S[o] = p ? i[o] : v[o], S[s] = Math.max(v[s], d[s]), S[l] = Math.min(0, d[l] + y[1 - a]), c.__rectSize = i[o], p) {
        var w = {
          x: 0,
          y: 0
        };
        w[o] = Math.max(i[o] - d[o] - _, 0), w[s] = S[s], c.setClipPath(new Pt({
          shape: w
        })), c.__rectSize = w[o];
      } else
        h.eachChild(function(E) {
          E.attr({
            invisible: !0,
            silent: !0
          });
        });
      var x = this._getPageInfo(e);
      return x.pageIndex != null && gr(
        f,
        {
          x: x.contentPosition[0],
          y: x.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        p ? e : null
      ), this._updatePageInfoView(e, x), S;
    }, t.prototype._pageGo = function(e, n, i) {
      var a = this._getPageInfo(n)[e];
      a != null && i.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: n.id
      });
    }, t.prototype._updatePageInfoView = function(e, n) {
      var i = this._controllerGroup;
      D(["pagePrev", "pageNext"], function(f) {
        var c = f + "DataIndex", h = n[c] != null, v = i.childOfName(f);
        v && (v.setStyle("fill", h ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), v.cursor = h ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), o = e.get("pageFormatter"), s = n.pageIndex, l = s != null ? s + 1 : 0, u = n.pageCount;
      a && o && a.setStyle("text", $(o) ? o.replace("{current}", l == null ? "" : l + "").replace("{total}", u == null ? "" : u + "") : o({
        current: l,
        total: u
      }));
    }, t.prototype._getPageInfo = function(e) {
      var n = e.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = Af[o], l = Mf[o], u = this._findTargetItemIndex(n), f = i.children(), c = f[u], h = f.length, v = h ? 1 : 0, d = {
        contentPosition: [i.x, i.y],
        pageCount: v,
        pageIndex: v - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!c)
        return d;
      var p = b(c);
      d.contentPosition[o] = -p.s;
      for (var m = u + 1, g = p, y = p, _ = null; m <= h; ++m)
        _ = b(f[m]), // Half of the last item is out of the window.
        (!_ && y.e > g.s + a || _ && !S(_, g.s)) && (y.i > g.i ? g = y : g = _, g && (d.pageNextDataIndex == null && (d.pageNextDataIndex = g.i), ++d.pageCount)), y = _;
      for (var m = u - 1, g = p, y = p, _ = null; m >= -1; --m)
        _ = b(f[m]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!_ || !S(y, _.s)) && g.i < y.i && (y = g, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = g.i), ++d.pageCount, ++d.pageIndex), g = _;
      return d;
      function b(w) {
        if (w) {
          var x = w.getBoundingRect(), E = x[l] + w[l];
          return {
            s: E,
            e: E + x[s],
            i: w.__legendDataIndex
          };
        }
      }
      function S(w, x) {
        return w.e >= x && w.s <= x + a;
      }
    }, t.prototype._findTargetItemIndex = function(e) {
      if (!this._showController)
        return 0;
      var n, i = this.getContentGroup(), a;
      return i.eachChild(function(o, s) {
        var l = o.__legendDataIndex;
        a == null && l != null && (a = s), l === e && (n = s);
      }), n ?? a;
    }, t.type = "legend.scroll", t;
  })(Tb)
);
function mO(r) {
  r.registerAction("legendScroll", "legendscroll", function(t, e) {
    var n = t.scrollDataIndex;
    n != null && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(i) {
      i.setScrollDataIndex(n);
    });
  });
}
function yO(r) {
  Hr(Cb), r.registerComponentModel(pO), r.registerComponentView(gO), mO(r);
}
function _O(r) {
  Hr(Cb), Hr(yO);
}
function qm(r, t, e) {
  var n = ue.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = n.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", r)), n.width = i * e, n.height = a * e, n;
}
function Lf(r) {
  return !r.__cursors.get(D_);
}
function Km(r) {
  var t = r.__cursors.get(D_);
  return {
    startIdx: t ? t.startIdx : 0,
    endIdx: t ? t.endIdx : 0
  };
}
var Db = (function(r) {
  V(t, r);
  function t(e, n, i) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.zlevel = 0, a.zlevel2 = ps, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__prevIdx = { startIdx: 0, endIdx: 0 };
    var o;
    i = i || Rs, typeof e == "string" ? o = qm(e, n, i) : X(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (yy(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = n, a.dpr = i, a;
  }
  return t.prototype.afterBrush = function() {
    this.__prevIdx = Km(this);
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var e = this.dpr;
    this.domBack = qm("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, n, i, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, l = !1, u = new J(0, 0, 0, 0);
    function f(b) {
      if (!(!b.isFinite() || b.isZero()))
        if (o.length === 0) {
          var S = new J(0, 0, 0, 0);
          S.copy(b), o.push(S);
        } else {
          for (var w = !1, x = 1 / 0, E = 0, T = 0; T < o.length; ++T) {
            var C = o[T];
            if (C.intersect(b)) {
              var A = new J(0, 0, 0, 0);
              A.copy(C), A.union(b), o[T] = A, w = !0;
              break;
            } else if (l) {
              u.copy(b), u.union(C);
              var L = b.width * b.height, M = C.width * C.height, I = u.width * u.height, O = I - L - M;
              O < x && (x = O, E = T);
            }
          }
          if (l && (o[E].union(b), w = !0), !w) {
            var S = new J(0, 0, 0, 0);
            S.copy(b), o.push(S);
          }
          l || (l = o.length >= s);
        }
    }
    for (var c = Km(this), h = c.startIdx; h < c.endIdx; ++h) {
      var v = e[h];
      if (v) {
        var d = v.shouldBePainted(i, a, !0, !0), p = v.__isRendered && (v.__dirty & ie || !d) ? v.getPrevPaintRect() : null;
        p && f(p);
        var m = d && (v.__dirty & ie || !v.__isRendered) ? v.getPaintRect() : null;
        m && f(m);
      }
    }
    for (var g = this.__prevIdx, h = g.startIdx; h < g.endIdx; ++h) {
      var v = n[h], d = v && v.shouldBePainted(i, a, !0, !0);
      if (v && (!d || !v.__zr) && v.__isRendered) {
        var p = v.getPrevPaintRect();
        p && f(p);
      }
    }
    var y;
    do {
      y = !1;
      for (var h = 0; h < o.length; ) {
        if (o[h].isZero()) {
          o.splice(h, 1);
          continue;
        }
        for (var _ = h + 1; _ < o.length; )
          o[h].intersect(o[_]) ? (y = !0, o[h].union(o[_]), o.splice(_, 1)) : _++;
        h++;
      }
    } while (y);
    return this._paintRects = o, o;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(e, n) {
    var i = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = e + "px", o.height = n + "px"), a.width = e * i, a.height = n * i, s && (s.width = e * i, s.height = n * i, i !== 1 && this.ctxBack.scale(i, i));
  }, t.prototype.clear = function(e, n, i) {
    var a = this.dom, o = this.ctx, s = a.width, l = a.height;
    n = n || this.clearColor;
    var u = this.motionBlur && !e, f = this.lastFrameAlpha, c = this.dpr, h = this;
    u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / c, l / c));
    var v = this.domBack;
    function d(p, m, g, y) {
      if (o.clearRect(p, m, g, y), n && n !== "transparent") {
        var _ = void 0;
        if (xl(n)) {
          var b = n.global || n.__width === g && n.__height === y;
          _ = b && n.__canvasGradient || Rc(o, n, {
            x: 0,
            y: 0,
            width: g,
            height: y
          }), n.__canvasGradient = _, n.__width = g, n.__height = y;
        } else ES(n) && (n.scaleX = n.scaleX || c, n.scaleY = n.scaleY || c, _ = Bc(o, n, {
          dirty: function() {
            h.setUnpainted(), h.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || n, o.fillRect(p, m, g, y), o.restore();
      }
      u && (o.save(), o.globalAlpha = f, o.drawImage(v, p, m, g, y), o.restore());
    }
    !i || u ? d(0, 0, s, l) : i.length && D(i, function(p) {
      d(p.x * c, p.y * c, p.width * c, p.height * c);
    });
  }, t;
})(rr), Qm = 1e5, gn = 314159, If = void 0, bO = 1, Pf = 2;
function SO(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function wO(r, t) {
  var e = document.createElement("div");
  return e.style.cssText = [
    "position:relative",
    "width:" + r + "px",
    "height:" + t + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", e;
}
function jm(r, t, e, n) {
  var i = new Db(r, t, t.dpr);
  return i.zlevel = e, i.zlevel2 = n, i.__builtin__ = !0, Eb(i), i;
}
function Eb(r) {
  r.__cursorStack = [], r.__cursors = Q();
}
function xO(r) {
  return r.startIdx = r.drawIdx = r.endIdx = r.endIdxNew = 0, r.used = !1, r.first = r.last = NaN, r.notClearIdx = -1, r;
}
function TO(r, t) {
  var e = r.__cursors, n = +t;
  return e.get(n) || (r.__cursorStack.push(n), e.set(n, xO({ key: n })));
}
function ss(r, t) {
  for (var e = r.__cursorStack, n = 0; n < e.length; n++)
    t(r.__cursors.get(e[n]));
}
function Of(r, t) {
  var e = r.layers;
  return e[t] || (e[t] = new Array(3));
}
function Ht(r, t, e) {
  for (var n = r.layerStack, i = 0; i < n.length; i++) {
    var a = n[i].zl, o = n[i].zl2, s = r.layers[a][o];
    (!e || (!(e & Na) || s.__builtin__) && (!(e & th) || !s.__builtin__) && (!(e & Ab) || s !== r.hoverlayer)) && t(s, a, o, i);
  }
}
var Na = 1, th = 2, Ab = 4, ls = Na | Ab, CO = (function() {
  function r(t, e, n, i) {
    this.type = "canvas", this._prevDisplayList = [], this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas", this._i = {
      layerStack: [],
      layers: []
    };
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = n = k({}, n || {}), this.dpr = n.devicePixelRatio || Rs, this._singleCanvas = a, this.root = t;
    var o = t.style;
    if (o && (yy(t), t.innerHTML = ""), this.storage = e, this._prevDisplayList = [], a) {
      var l = t, u = l.width, f = l.height;
      n.width != null && (u = n.width), n.height != null && (f = n.height), this.dpr = n.devicePixelRatio || 1, l.width = u * this.dpr, l.height = f * this.dpr, this._width = u, this._height = f;
      var c = jm(l, this, gn, ps);
      c.initContext(), this._insertLayer(c, gn, ps, !0), this._domRoot = t;
    } else {
      this._width = Ko(t, 0, n), this._height = Ko(t, 1, n);
      var s = this._domRoot = wO(this._width, this._height);
      t.appendChild(s);
    }
  }
  return r.prototype.getType = function() {
    return "canvas";
  }, r.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, r.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, r.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, r.prototype.refresh = function(t) {
    var e;
    t && !X(t) ? e = { paintAll: !!t } : e = t || {};
    var n = H(e.refresh, !0), i = H(e.refreshHover, !1);
    if (i && (this._hoverLayerDirty = Pf), !n)
      return i && this._paintHoverList(this.storage.getDisplayList(!1)), this;
    var a = this.storage.getDisplayList(!0);
    this._updateLayerStatus(a, e.paintAll), this._redrawId = Math.random();
    var o = this._prevDisplayList;
    this._paintList(a, o, this._redrawId);
    var s = this._backgroundColor;
    return Ht(this._i, function(l, u, f, c) {
      l.refresh && l.refresh(c === 0 ? s : null);
    }, th), this._opts.useDirtyRect && (this._prevDisplayList = a.slice()), this;
  }, r.prototype._paintHoverList = function(t) {
    var e = this._i.hoverlayer, n = this._hoverLayerDirty;
    if (this._hoverLayerDirty = If, n !== If && (!e && n === Pf && (e = this._i.hoverlayer = this._ensureLayer(Qm)), !!e)) {
      e.clear();
      for (var i = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, a, o = 0, s = t.length; o < s; o++) {
        var l = t[o];
        if (l.__inHover) {
          a || (a = e.ctx, a.save());
          var u = l.__hoverStyle, f = void 0;
          u && (f = l.style, l.style = u), xn(a, l, i), u && (l.style = f);
        }
      }
      a && (bi(a, i), a.restore());
    }
  }, r.prototype.getHoverLayer = function() {
    return this._ensureLayer(Qm);
  }, r.prototype.paintOne = function(t, e) {
    V1(t, e);
  }, r.prototype._paintList = function(t, e, n) {
    if (this._redrawId === n) {
      var i = this._doPaintList(t, e);
      if (this._needsManuallyCompositing && this._compositeManually(), i)
        Ht(this._i, function(o) {
          o.afterBrush && o.afterBrush();
        }, ls), this._paintHoverList(t);
      else {
        var a = this;
        sl(function() {
          a._paintList(t, e, n);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this._ensureLayer(gn).ctx, e = this._domRoot.width, n = this._domRoot.height;
    t.clearRect(0, 0, e, n), Ht(this._i, function(i) {
      i.virtual && t.drawImage(i.dom, 0, 0, e, n);
    }, Na);
  }, r.prototype._doPaintList = function(t, e) {
    var n = this, i = !0;
    return Ht(this._i, function(a) {
      var o = !1;
      if (ss(a, function(c) {
        (c.drawIdx < c.endIdx || c.notClearIdx >= 0) && (o = !0);
      }), !(!o && !a.__dirty)) {
        var s = n._opts.useDirtyRect && !Lf(a) ? a.createRepaintRects(t, e, n._width, n._height) : null, l = n._i.layerStack[0], u = !0;
        if (a.__dirty) {
          u = !1, a.__dirty = !1;
          var f = a.zlevel === l.zl && a.zlevel2 === l.zl2 ? n._backgroundColor : null;
          a.clear(!1, f, s);
        }
        ss(a, function(c) {
          var h = n._paintPerCursor(a, c, t, s, u);
          i = i && h;
        });
      }
    }, ls), tt.wxa && Ht(this._i, function(a) {
      a && a.ctx && a.ctx.draw && a.ctx.draw();
    }), i;
  }, r.prototype._paintPerCursor = function(t, e, n, i, a) {
    var o = t.ctx;
    if (i)
      if (!i.length)
        e.drawIdx = e.endIdx;
      else
        for (var s = this.dpr, l = 0; l < i.length; ++l) {
          var u = i[l];
          o.save(), o.beginPath(), o.rect(u.x * s, u.y * s, u.width * s, u.height * s), o.clip(), this._paintPerCursorInRect(t, e, n, u, a), o.restore();
        }
    else
      o.save(), this._paintPerCursorInRect(t, e, n, null, a), o.restore();
    return e.drawIdx >= e.endIdx;
  }, r.prototype._paintPerCursorInRect = function(t, e, n, i, a) {
    for (var o = {
      inHover: !1,
      allClipped: !1,
      prevEl: null,
      viewWidth: this._width,
      viewHeight: this._height,
      beforeBrushParam: { contentRetained: a }
    }, s = t.ctx, l = Lf(t), u = l && ue.getTime(), f = e.drawIdx, c = e.notClearIdx, h = c >= 0 ? Math.min(c, f) : f; h < e.endIdx; h++) {
      var v = n[h];
      if (!(h < f && !v.notClear)) {
        if (v.__inHover && (this._hoverLayerDirty = Pf), i != null) {
          var d = v.getPaintRect();
          d && d.intersect(i) && (xn(s, v, o), v.setPrevPaintRect(d));
        } else
          xn(s, v, o);
        if (l) {
          var p = ue.getTime() - u;
          if (p > 15) {
            h++;
            break;
          }
        }
      }
    }
    bi(s, o), e.drawIdx = Math.max(h, f);
  }, r.prototype.getLayer = function(t, e) {
    return this._ensureLayer(t, 0, e);
  }, r.prototype._ensureLayer = function(t, e, n) {
    e = e || 0;
    var i = this._singleCanvas;
    i && !this._needsManuallyCompositing && (t = gn, e = 0);
    var a = Of(this._i, t)[e];
    return a || (a = jm("zr_" + t + "." + e, this, t, e), this._layerConfig[t] && ht(a, this._layerConfig[t], !0), (n || i && t !== gn) && (a.virtual = !0), this._insertLayer(a, t, e, !1), a.initContext()), a;
  }, r.prototype.insertLayer = function(t, e) {
    this._insertLayer(e, t, 0, !1);
  }, r.prototype._insertLayer = function(t, e, n, i) {
    var a = this._i, o = a.layers, s = a.layerStack, l = this._domRoot, u = null;
    if (o[e] && o[e][n]) {
      process.env.NODE_ENV !== "production" && Ir("ZLevel " + e + "." + n + " has been used already");
      return;
    }
    if (!SO(t)) {
      process.env.NODE_ENV !== "production" && Ir("Layer of zlevel " + e + " is not valid");
      return;
    }
    for (var f = s.length, c = 0; c < f && (s[c].zl < e || s[c].zl === e && s[c].zl2 < n); )
      c++;
    if (c > 0 && (u = Of(a, s[c - 1].zl)[s[c - 1].zl2]), s.splice(c, 0, { zl: e, zl2: n }), Of(a, e)[n] = t, !i && !t.virtual)
      if (u) {
        var h = u.dom;
        h.nextSibling ? l.insertBefore(t.dom, h.nextSibling) : l.appendChild(t.dom);
      } else
        l.firstChild ? l.insertBefore(t.dom, l.firstChild) : l.appendChild(t.dom);
    t.painter || (t.painter = this);
  }, r.prototype.eachLayer = function(t, e) {
    return Ht(this._i, function(n, i) {
      t.call(e, n, i);
    });
  }, r.prototype.eachBuiltinLayer = function(t, e) {
    return Ht(this._i, function(n, i) {
      t.call(e, n, i);
    }, Na);
  }, r.prototype.eachOtherLayer = function(t, e) {
    return Ht(this._i, function(n, i) {
      t.call(e, n, i);
    }, th);
  }, r.prototype.getLayers = function() {
    var t = {};
    return Ht(this._i, function(e, n, i) {
      t[e.id] = e;
    }), t;
  }, r.prototype._updateLayerStatus = function(t, e) {
    var n = this;
    if (n._singleCanvas)
      for (var i = 1; i < t.length; i++) {
        var a = t[i];
        if (a.zlevel !== t[i - 1].zlevel || a.incremental) {
          n._needsManuallyCompositing = !0;
          break;
        }
      }
    Ht(n._i, function(m) {
      m.__dirty = !1, ss(m, function(g) {
        g.used = !1, g.endIdxNew = 0, g.notClearIdx = -1;
      });
    }, ls);
    for (var o, s = null, l = null, u = !1, f = 0, c = t.length; f < c; f++) {
      var a = t[f], h = a.zlevel, v = a.incremental, d = void 0;
      if (o !== h && (o = h, u = !1), v ? (u = !0, d = qT) : d = u ? ZT : ps, (!s || h !== s.zlevel || d !== s.zlevel2) && (s = n._ensureLayer(h, d), l = null, !s.__builtin__)) {
        Ir("ZLevel " + h + " has been used by unknown layer " + s.id);
        continue;
      }
      if ((!l || v !== l.key) && (l = TO(s, v), !l.used))
        if (l.used = !0, !e && l.first === a.id) {
          var p = f - l.startIdx;
          l.startIdx = f, l.drawIdx += p, l.endIdx += p;
        } else
          s.__dirty = !0, l.first = a.id, l.startIdx = l.drawIdx = f, l.endIdx = f + 1;
      l.endIdxNew = f + 1, a.__dirty & ie && !a.__inHover && ((!v || !a.notClear && f < l.drawIdx) && (s.__dirty = !0), v && a.notClear && l.notClearIdx < 0 && (l.notClearIdx = f));
    }
    Ht(n._i, function(m) {
      for (var g = m.__cursorStack, y = m.__cursors, _ = g.length - 1; _ >= 0; _--) {
        var b = y.get(g[_]);
        if (!b.used)
          m.__dirty = !0, y.removeKey(g[_]), g.splice(_, 1);
        else {
          var S = b.endIdxNew;
          (Lf(m) ? S < b.drawIdx : S !== b.endIdx || !S || t[S - 1].id !== b.last) && (m.__dirty = !0), b.endIdx = b.endIdxNew, b.last = S ? t[S - 1].id : NaN;
        }
      }
      m.__dirty && (ss(m, function(w) {
        w.drawIdx = w.startIdx;
      }), n._hoverLayerDirty === If && (n._hoverLayerDirty = bO));
    }, ls);
  }, r.prototype.clear = function() {
    return Ht(this._i, function(t) {
      t.clear(), Eb(t);
    }, Na), this;
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, Ht(this._i, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var n = this._layerConfig;
      n[t] ? ht(n[t], e, !0) : n[t] = e, Ht(this._i, function(i, a) {
        ht(i, n[a], !0);
      });
    }
  }, r.prototype.delLayer = function(t) {
    for (var e = this._i.layerStack, n = this._i.layers, i = e.length - 1; i >= 0; i--) {
      var a = e[i];
      if (a.zl === t) {
        var o = n[t][a.zl2];
        if (o.__builtin__)
          continue;
        if (e.splice(i, 1), n[t][a.zl2] = void 0, !o.virtual) {
          var s = o.dom.parentNode;
          s && s.removeChild(o.dom);
        }
      }
    }
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var n = this._domRoot;
      n.style.display = "none";
      var i = this._opts, a = this.root;
      t != null && (i.width = t), e != null && (i.height = e), t = Ko(a, 0, i), e = Ko(a, 1, i), n.style.display = "", (this._width !== t || e !== this._height) && (n.style.width = t + "px", n.style.height = e + "px", Ht(this._i, function(o) {
        o.resize(t, e);
      }), this.refresh({ paintAll: !0 })), this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this._ensureLayer(gn).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    D(this._i.layers[t], function(e) {
      e && !e.__builtin__ && e.clear();
    });
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._i = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._i.layers[gn][0].dom;
    var e = new Db("image", this, t.pixelRatio || this.dpr);
    e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
    var n = e.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var i = e.dom.width, a = e.dom.height;
      Ht(this._i, function(c) {
        c.__builtin__ ? n.drawImage(c.dom, 0, 0, i, a) : c.renderToCanvas && (n.save(), c.renderToCanvas(n), n.restore());
      });
    } else {
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, s = this.storage.getDisplayList(!0), l = 0, u = s.length; l < u; l++) {
        var f = s[l];
        xn(n, f, o);
      }
      bi(n, o);
    }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
})();
function DO(r) {
  r.registerPainter("canvas", CO);
}
const EO = /* @__PURE__ */ new Set(["", "unknown", "unavailable", "none", "null"]);
function Jm(r = /* @__PURE__ */ new Date()) {
  const t = new Date(
    r.getFullYear(),
    r.getMonth(),
    r.getDate(),
    0,
    0,
    0,
    0
  ), e = new Date(
    r.getFullYear(),
    r.getMonth(),
    r.getDate() + 1,
    0,
    0,
    0,
    0
  );
  return { start: t, end: e };
}
function eh(r, t) {
  const e = r === "auto" || r == null ? t : r;
  return typeof e == "string" && e.trim().toLowerCase() === "w" ? 1e-3 : 1;
}
function AO(r, t, e, n, i, a = 300 * 1e3) {
  const o = IO(r, t.attribute ?? "forecast");
  if (!Array.isArray(o)) return [];
  const s = t.datetime_key ?? "datetime", l = t.value_key ?? "watts", u = eh(t.unit, e), f = n.getTime(), c = i.getTime(), h = [];
  for (const p of o) {
    if (!p || typeof p != "object") continue;
    const m = p, g = new Date(String(m[s] ?? "")).getTime(), y = Number(m[l]);
    !Number.isFinite(g) || !Number.isFinite(y) || g < f || g > c || h.push([g, Math.max(0, y * u)]);
  }
  if (h.sort((p, m) => p[0] - m[0]), h.length === 0) return [];
  if (h.length === 1) return h;
  const v = [];
  let d = 0;
  for (let p = f; p <= c; p += a) {
    for (; d < h.length - 2 && h[d + 1][0] < p; )
      d += 1;
    const m = h[d], g = h[d + 1];
    if (!m || !g || p < m[0] || p > g[0]) continue;
    const y = g[0] === m[0] ? 0 : (p - m[0]) / (g[0] - m[0]);
    v.push([p, m[1] + (g[1] - m[1]) * y]);
  }
  return v;
}
function MO(r, t, e, n, i = 300 * 1e3) {
  const a = e.getTime(), o = n.getTime(), s = /* @__PURE__ */ new Map();
  for (const l of r) {
    if (!l || EO.has(String(l.s).toLowerCase())) continue;
    const u = Number(l.s), f = l.lc ?? l.lu, c = Number(f) * 1e3;
    if (!Number.isFinite(u) || !Number.isFinite(c) || c < a || c >= o) continue;
    const h = a + Math.floor((c - a) / i) * i, v = s.get(h) ?? { sum: 0, count: 0 };
    v.sum += Math.max(0, u * t), v.count += 1, s.set(h, v);
  }
  return [...s.entries()].sort(([l], [u]) => l - u).map(([l, u]) => [l, u.sum / u.count]);
}
function LO(r, t, e) {
  let n, i = Number.POSITIVE_INFINITY;
  for (const a of r) {
    const o = Math.abs(a[0] - t);
    o < i && (n = a, i = o);
  }
  return n && i <= e ? n[1] : null;
}
function IO(r, t) {
  if (r)
    return t.split(".").reduce((e, n) => {
      if (!(!e || typeof e != "object"))
        return e[n];
    }, r);
}
Hr([
  KA,
  AP,
  _O,
  lO,
  rO,
  ZP,
  DO
]);
const ty = "#F59E0B", ey = "#22C55E", ry = "#7C4DFF", ny = 300 * 1e3, _l = class _l extends di {
  constructor() {
    super(...arguments), this._historyPoints = [], this._historyError = !1, this._historyRequest = 0, this._historyLoading = !1;
  }
  static getConfigForm() {
    const t = [
      { value: "auto", label: "Auto" },
      { value: "W", label: "W" },
      { value: "kW", label: "kW" }
    ], e = (n, i) => [
      { name: "name", selector: { text: {} } },
      { name: "entity", required: n, selector: { entity: { domain: "sensor" } } },
      { name: "color", selector: { text: {} } },
      { name: "unit", selector: { select: { mode: "dropdown", options: t } } },
      ...i ? [
        { name: "attribute", selector: { text: {} } },
        { name: "datetime_key", selector: { text: {} } },
        { name: "value_key", selector: { text: {} } }
      ] : []
    ];
    return {
      schema: [
        { name: "title", selector: { text: {} } },
        {
          type: "expandable",
          name: "actual",
          title: "Actual production / Ist-Leistung",
          schema: e(!0, !1)
        },
        {
          type: "expandable",
          name: "forecast_1",
          title: "Forecast 1 / Prognose 1",
          schema: e(!0, !0)
        },
        {
          type: "expandable",
          name: "forecast_2",
          title: "Forecast 2 (optional) / Prognose 2 (optional)",
          schema: e(!1, !0)
        }
      ],
      computeLabel: (n) => ({
        title: "Title / Titel",
        name: "Name",
        entity: "Entity / Entität",
        color: "Color / Farbe",
        unit: "Source unit / Quelleneinheit",
        attribute: "Forecast attribute / Prognoseattribut",
        datetime_key: "Timestamp field / Zeitfeld",
        value_key: "Power field / Leistungsfeld"
      })[n.name ?? ""] ?? n.name ?? ""
    };
  }
  static getStubConfig() {
    return {
      title: "PV-Leistung heute",
      actual: {
        name: "Ist-Leistung",
        entity: "sensor.pv_power",
        color: ty,
        unit: "auto"
      },
      forecast_1: {
        name: "Solcast",
        entity: "sensor.solcast_forecast_today",
        color: ey,
        unit: "kW",
        attribute: "detailedForecast",
        datetime_key: "period_start",
        value_key: "pv_estimate"
      },
      forecast_2: {
        name: "Helios Forecast",
        color: ry,
        unit: "W",
        attribute: "forecast",
        datetime_key: "datetime",
        value_key: "watts"
      }
    };
  }
  setConfig(t) {
    if (!t?.actual?.entity?.trim())
      throw new Error("actual.entity is required");
    if (!t.forecast_1?.entity?.trim())
      throw new Error("forecast_1.entity is required");
    this._config = {
      ...t,
      actual: { ...t.actual },
      forecast_1: { ...t.forecast_1 },
      forecast_2: t.forecast_2 ? { ...t.forecast_2 } : void 0
    }, this._loadedDay = void 0;
  }
  getCardSize() {
    return 7;
  }
  getGridOptions() {
    return {
      columns: 12,
      min_columns: 6
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._refreshTimer = window.setInterval(() => this._loadHistory(), ny);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._refreshTimer !== void 0 && window.clearInterval(this._refreshTimer), this._resizeObserver?.disconnect(), this._chart?.dispose(), this._chart = void 0;
  }
  render() {
    if (!this._config) return At``;
    const e = (this.hass?.locale?.language ?? navigator.language).toLowerCase().startsWith("de"), n = this._config.title?.trim() || (e ? "PV-Leistung heute" : "PV power today");
    return At`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <h2>${n}</h2>
            <div class="info-control">
              <button
                class="info-button"
                type="button"
                aria-label=${e ? "Diagramm erklären" : "Explain chart"}
                aria-describedby="day-chart-tooltip"
              >
                ${this._infoIcon()}
              </button>
              <span id="day-chart-tooltip" class="info-tooltip" role="tooltip">
                ${e ? "Orange zeigt die gemessene Leistung; gestrichelte Linien zeigen die aktuell von den Integrationen gemeldeten Prognosen. Die Qualitätskarten werten dagegen den gespeicherten Day-ahead-Snapshot aus." : "Orange shows measured power; dashed lines show the forecasts currently reported by the integrations. The quality cards evaluate the stored day-ahead snapshot instead."}
              </span>
            </div>
          </header>
          <div class="chart" role="img" aria-label=${this._chartAriaLabel(e)}></div>
          ${this._historyError ? At`<p class="chart-note">
                ${e ? "Der Ist-Verlauf konnte nicht vollständig geladen werden." : "The actual production history could not be loaded completely."}
              </p>` : Ct}
        </div>
      </ha-card>
    `;
  }
  firstUpdated() {
    const t = this.renderRoot.querySelector(".chart");
    t && (this._chart = l2(t, void 0, { renderer: "canvas" }), this._resizeObserver = new ResizeObserver(() => this._chart?.resize()), this._resizeObserver.observe(t), this._loadHistory(), this._updateChart());
  }
  updated() {
    if (!this._chart) return;
    const t = this._dayKey();
    this._loadedDay !== t && !this._historyLoading && this._loadHistory(), this._updateChart();
  }
  async _loadHistory() {
    const t = this.hass, e = this._config?.actual.entity;
    if (!t?.callWS || !e) return;
    const n = ++this._historyRequest;
    this._historyLoading = !0;
    const { start: i, end: a } = Jm();
    try {
      const o = await t.callWS({
        type: "history/history_during_period",
        entity_ids: [e],
        start_time: i.toISOString(),
        end_time: a.toISOString(),
        minimal_response: !0,
        no_attributes: !0,
        significant_changes_only: !1
      });
      if (n !== this._historyRequest) return;
      const s = t.states[e], l = eh(
        this._config?.actual.unit,
        s?.attributes.unit_of_measurement
      );
      this._historyPoints = MO(o[e] ?? [], l, i, a), this._historyError = !1, this._loadedDay = this._dayKey();
    } catch {
      if (n !== this._historyRequest) return;
      this._historyError = !0, this._loadedDay = this._dayKey();
    } finally {
      n === this._historyRequest && (this._historyLoading = !1);
    }
  }
  _updateChart() {
    if (!this._chart || !this._config || !this.hass) return;
    const t = getComputedStyle(this), e = t.getPropertyValue("--primary-text-color").trim() || "#1f2937", n = t.getPropertyValue("--secondary-text-color").trim() || "#6b7280", i = t.getPropertyValue("--divider-color").trim() || "rgba(127, 127, 127, 0.2)", a = t.getPropertyValue("--ha-card-background").trim() || t.getPropertyValue("--card-background-color").trim() || "#ffffff", o = t.getPropertyValue("--ha-font-family-body").trim() || t.getPropertyValue("--paper-font-body1_-_font-family").trim() || "sans-serif", { start: s, end: l } = Jm(), u = this._series(s, l), c = u.find((p) => p.kind === "actual")?.points.at(-1), h = Math.min(Date.now(), l.getTime()), v = this.hass.locale?.language ?? navigator.language, d = this._opaqueColor(a, "#ffffff");
    this._chart.setOption(
      {
        animation: !1,
        backgroundColor: "transparent",
        textStyle: { fontFamily: o, color: e },
        grid: { left: 50, right: 18, top: 24, bottom: 76, containLabel: !1 },
        legend: {
          show: !0,
          left: 0,
          bottom: 4,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 18,
          icon: "circle",
          selectedMode: !0,
          data: u.map((p) => ({ name: p.name, icon: "circle" })),
          textStyle: { color: n, fontSize: 12 }
        },
        tooltip: {
          show: !0,
          trigger: "axis",
          confine: !0,
          transitionDuration: 0,
          axisPointer: { type: "line", snap: !0, lineStyle: { color: n, width: 1 } },
          backgroundColor: d,
          borderColor: i,
          borderWidth: 1,
          padding: 0,
          textStyle: { color: e, fontFamily: o, fontSize: 13 },
          formatter: (p) => this._tooltip(p, u, v, i, n)
        },
        xAxis: {
          type: "time",
          min: s.getTime(),
          max: l.getTime(),
          boundaryGap: !1,
          name: v.toLowerCase().startsWith("de") ? "Uhrzeit" : "Time",
          nameLocation: "middle",
          nameGap: 32,
          nameTextStyle: { color: n, fontSize: 12 },
          axisLine: { show: !0, lineStyle: { color: i } },
          axisTick: { show: !1 },
          axisLabel: {
            color: n,
            fontSize: 11,
            hideOverlap: !0,
            formatter: (p) => p === l.getTime() ? "" : new Intl.DateTimeFormat(v, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(p)
          },
          splitLine: { show: !1 }
        },
        yAxis: {
          type: "value",
          min: 0,
          name: "kW",
          nameLocation: "end",
          nameGap: 8,
          nameTextStyle: { color: n, align: "right", fontSize: 12 },
          axisLine: { show: !1 },
          axisTick: { show: !1 },
          axisLabel: {
            color: n,
            fontSize: 11,
            formatter: (p) => new Intl.NumberFormat(v, { maximumFractionDigits: 1 }).format(p)
          },
          splitLine: { show: !0, lineStyle: { color: i, width: 1 } }
        },
        series: u.map((p) => ({
          name: p.name,
          type: "line",
          data: p.points,
          showSymbol: !1,
          symbol: "circle",
          symbolSize: 5,
          connectNulls: !1,
          clip: !0,
          emphasis: { disabled: !0 },
          itemStyle: { color: p.color },
          lineStyle: {
            color: p.color,
            width: 1.5,
            type: p.kind === "actual" ? "solid" : "dashed"
          },
          areaStyle: p.kind === "actual" ? { color: this._withAlpha(p.color, 0.08), opacity: 1 } : void 0,
          markLine: p.kind === "actual" ? {
            silent: !0,
            symbol: "none",
            lineStyle: { color: n, width: 1, type: "dashed", opacity: 0.7 },
            label: {
              show: !0,
              formatter: v.toLowerCase().startsWith("de") ? "Jetzt" : "Now",
              color: n,
              backgroundColor: d,
              borderRadius: 8,
              padding: [3, 6],
              position: "insideEndTop"
            },
            data: [{ xAxis: h }]
          } : void 0,
          markPoint: p.kind === "actual" && c ? {
            silent: !0,
            symbol: "circle",
            symbolSize: 7,
            label: { show: !1 },
            itemStyle: {
              color: p.color,
              borderColor: d,
              borderWidth: 1
            },
            data: [{ coord: c }]
          } : void 0
        }))
      },
      { notMerge: !0, lazyUpdate: !0 }
    );
  }
  _series(t, e) {
    if (!this._config || !this.hass) return [];
    const n = this._config.actual, i = n.entity ? this.hass.states[n.entity] : void 0, a = [...this._historyPoints], o = Number(i?.state), s = new Date(i?.last_updated ?? "").getTime(), l = eh(
      n.unit,
      i?.attributes.unit_of_measurement
    );
    Number.isFinite(o) && Number.isFinite(s) && s >= t.getTime() && s < e.getTime() && a.push([s, Math.max(0, o * l)]);
    const u = [
      {
        name: n.name?.trim() || "Ist-Leistung",
        color: this._seriesColor(n.color, ty),
        points: a.sort((c, h) => c[0] - h[0]),
        kind: "actual"
      }
    ], f = [
      [this._config.forecast_1, ey, "Solcast"],
      [this._config.forecast_2, ry, "Helios Forecast"]
    ];
    for (const [c, h, v] of f) {
      if (!c?.entity) continue;
      const d = this.hass.states[c.entity];
      u.push({
        name: c.name?.trim() || v,
        color: this._seriesColor(c.color, h),
        points: AO(
          d?.attributes,
          c,
          d?.attributes.unit_of_measurement,
          t,
          e
        ),
        kind: "forecast"
      });
    }
    return u;
  }
  _tooltip(t, e, n, i, a) {
    const s = (Array.isArray(t) ? t : [t]).find((d) => d && typeof d == "object"), l = Number(s?.axisValue), u = Array.isArray(s?.value) ? Number(s.value[0]) : Number.NaN, f = Number.isFinite(l) ? l : u;
    if (!Number.isFinite(f)) return "";
    const c = new Intl.NumberFormat(n, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }), h = new Intl.DateTimeFormat(n, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1
    }).format(f), v = e.map((d) => {
      const p = LO(d.points, f, ny * 0.6);
      return `<div style="display:flex;align-items:center;gap:8px;padding:3px 10px;">
          <span style="width:8px;height:8px;border-radius:50%;background:${this._escapeHtml(d.color)};flex:0 0 8px;"></span>
          <span style="flex:1;">${this._escapeHtml(d.name)}</span>
          <strong style="margin-left:12px;">${p === null ? "–" : `${c.format(p)} kW`}</strong>
        </div>`;
    }).join("");
    return `<div style="min-width:260px;padding:7px 0 8px;color:inherit;">
      <div style="font-weight:600;padding:0 10px 6px;border-bottom:1px solid ${this._escapeHtml(i)};margin-bottom:3px;">${this._escapeHtml(h)}</div>
      ${v}
      <div style="color:${this._escapeHtml(a)};font-size:11px;padding:5px 10px 0;">kW</div>
    </div>`;
  }
  _seriesColor(t, e) {
    const n = hy(t, e), i = n.match(/^var\((--[a-z0-9-_]+)\)$/i)?.[1];
    return i ? getComputedStyle(this).getPropertyValue(i).trim() || e : n;
  }
  _withAlpha(t, e) {
    const i = document.createElement("canvas").getContext("2d");
    if (!i) return t;
    i.fillStyle = "#000000", i.fillStyle = t;
    const a = i.fillStyle;
    if (/^#[0-9a-f]{6}$/i.test(a)) {
      const o = Number.parseInt(a.slice(1, 3), 16), s = Number.parseInt(a.slice(3, 5), 16), l = Number.parseInt(a.slice(5, 7), 16);
      return `rgba(${o}, ${s}, ${l}, ${e})`;
    }
    return t;
  }
  _opaqueColor(t, e) {
    return t && t !== "transparent" ? t : e;
  }
  _escapeHtml(t) {
    return t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
  _dayKey() {
    const t = /* @__PURE__ */ new Date();
    return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
  }
  _chartAriaLabel(t) {
    if (!this._config) return "";
    const e = [
      this._config.actual.name || (t ? "Ist-Leistung" : "Actual power"),
      this._config.forecast_1.name || (t ? "Prognose 1" : "Forecast 1"),
      this._config.forecast_2?.entity ? this._config.forecast_2.name || (t ? "Prognose 2" : "Forecast 2") : void 0
    ].filter(Boolean);
    return t ? `Tagesverlauf von ${e.join(", ")} in Kilowatt` : `Daily profile of ${e.join(", ")} in kilowatts`;
  }
  _infoIcon() {
    return At`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }
};
_l.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 },
  _historyPoints: { state: !0 },
  _historyError: { state: !0 }
}, _l.styles = ay`
    :host {
      display: block;
      min-width: 0;
      color: var(--primary-text-color);
      font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, sans-serif));
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
      gap: 10px;
      padding: 24px 24px 16px;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    h2 {
      min-width: 0;
      margin: 0;
      overflow-wrap: anywhere;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.25;
    }

    .info-control {
      position: relative;
      z-index: 5;
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

    .info-button svg {
      width: 21px;
      height: 21px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.8;
    }

    .info-tooltip {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: min(340px, calc(100vw - 64px));
      box-sizing: border-box;
      padding: 12px 14px;
      visibility: hidden;
      color: var(--primary-text-color);
      font-size: 13px;
      line-height: 1.45;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgba(0, 0, 0, 0.18));
      opacity: 0;
      pointer-events: none;
      transform: translateY(-3px);
      transition: opacity 120ms ease, transform 120ms ease, visibility 120ms;
    }

    .info-control:hover .info-tooltip,
    .info-control:focus-within .info-tooltip {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    .chart {
      width: 100%;
      height: 360px;
      min-height: 280px;
    }

    .chart-note {
      margin: -2px 0 0;
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.4;
    }

    @media (max-width: 600px) {
      .card-content {
        padding: 20px 16px 12px;
      }

      .chart {
        height: 320px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .info-tooltip {
        transition: none;
      }
    }
  `;
let rh = _l;
const nh = "pv-forecast-quality-card", ih = "pv-forecast-day-card";
customElements.get(nh) || customElements.define(nh, kf);
customElements.get(ih) || customElements.define(ih, rh);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: nh,
  name: "PV Forecast Quality Card",
  description: "Understand and compare PV forecast accuracy against actual production in a Home Assistant Sections view.",
  preview: !0,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card"
});
window.customCards.push({
  type: ih,
  name: "PV Forecast Day Card",
  description: "Compare today's actual PV power with one or two forecast profiles using ECharts.",
  preview: !0,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card"
});
console.info(
  "%c PV FORECAST QUALITY CARD %c v0.2.0 ",
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE
*/
/*! PV Forecast Quality Card | MIT | Includes ECharts (Apache-2.0) and Lit (BSD-3-Clause) | See THIRD_PARTY_NOTICES.md */
