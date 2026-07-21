const ms = globalThis, xh = ms.ShadowRoot && (ms.ShadyCSS === void 0 || ms.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Th = /* @__PURE__ */ Symbol(), sd = /* @__PURE__ */ new WeakMap();
let $y = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== Th) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (xh && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = sd.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && sd.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const MS = (r) => new $y(typeof r == "string" ? r : r + "", void 0, Th), Ml = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((i, n, a) => i + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + r[a + 1], r[0]);
  return new $y(e, r, Th);
}, IS = (r, t) => {
  if (xh) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), n = ms.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = e.cssText, r.appendChild(i);
  }
}, ld = xh ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return MS(e);
})(r) : r;
const { is: LS, defineProperty: PS, getOwnPropertyDescriptor: ES, getOwnPropertyNames: kS, getOwnPropertySymbols: RS, getPrototypeOf: OS } = Object, Il = globalThis, ud = Il.trustedTypes, NS = ud ? ud.emptyScript : "", BS = Il.reactiveElementPolyfillSupport, ya = (r, t) => r, Wf = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? NS : null;
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
} }, Hy = (r, t) => !LS(r, t), fd = { attribute: !0, type: String, converter: Wf, reflect: !1, useDefault: !1, hasChanged: Hy };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Il.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let nn = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = fd) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), n = this.getPropertyDescriptor(t, i, e);
      n !== void 0 && PS(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: n, set: a } = ES(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: n, set(o) {
      const s = n?.call(this);
      a?.call(this, o), this.requestUpdate(t, s, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? fd;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ya("elementProperties"))) return;
    const t = OS(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ya("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ya("properties"))) {
      const e = this.properties, i = [...kS(e), ...RS(e)];
      for (const n of i) this.createProperty(n, e[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, n] of e) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const n = this._$Eu(e, i);
      n !== void 0 && this._$Eh.set(n, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const n of i) e.unshift(ld(n));
    } else t !== void 0 && e.push(ld(t));
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
    return IS(t, this.constructor.elementStyles), t;
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
    const i = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, i);
    if (n !== void 0 && i.reflect === !0) {
      const a = (i.converter?.toAttribute !== void 0 ? i.converter : Wf).toAttribute(e, i.type);
      this._$Em = t, a == null ? this.removeAttribute(n) : this.setAttribute(n, a), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, n = i._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const a = i.getPropertyOptions(n), o = typeof a.converter == "function" ? { fromAttribute: a.converter } : a.converter?.fromAttribute !== void 0 ? a.converter : Wf;
      this._$Em = n;
      const s = o.fromAttribute(e, a.type);
      this[n] = s ?? this._$Ej?.get(n) ?? s, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, n = !1, a) {
    if (t !== void 0) {
      const o = this.constructor;
      if (n === !1 && (a = this[t]), i ??= o.getPropertyOptions(t), !((i.hasChanged ?? Hy)(a, e) || i.useDefault && i.reflect && a === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: n, wrapped: a }, o) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), a !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), n === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [n, a] of this._$Ep) this[n] = a;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, a] of i) {
        const { wrapped: o } = a, s = this[n];
        o !== !0 || this._$AL.has(n) || s === void 0 || this.C(n, void 0, a, s);
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
nn.elementStyles = [], nn.shadowRootOptions = { mode: "open" }, nn[ya("elementProperties")] = /* @__PURE__ */ new Map(), nn[ya("finalized")] = /* @__PURE__ */ new Map(), BS?.({ ReactiveElement: nn }), (Il.reactiveElementVersions ??= []).push("2.1.2");
const Ch = globalThis, cd = (r) => r, Bs = Ch.trustedTypes, hd = Bs ? Bs.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Vy = "$lit$", Ir = `lit$${Math.random().toFixed(9).slice(2)}$`, Gy = "?" + Ir, FS = `<${Gy}>`, Mi = document, ka = () => Mi.createComment(""), Ra = (r) => r === null || typeof r != "object" && typeof r != "function", Ah = Array.isArray, zS = (r) => Ah(r) || typeof r?.[Symbol.iterator] == "function", uu = `[ 	
\f\r]`, Un = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, vd = /-->/g, dd = />/g, Gr = RegExp(`>|${uu}(?:([^\\s"'>=/]+)(${uu}*=${uu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pd = /'/g, gd = /"/g, Uy = /^(?:script|style|textarea|title)$/i, $S = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), rt = $S(1), Ii = /* @__PURE__ */ Symbol.for("lit-noChange"), gt = /* @__PURE__ */ Symbol.for("lit-nothing"), md = /* @__PURE__ */ new WeakMap(), mi = Mi.createTreeWalker(Mi, 129);
function Wy(r, t) {
  if (!Ah(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return hd !== void 0 ? hd.createHTML(t) : t;
}
const HS = (r, t) => {
  const e = r.length - 1, i = [];
  let n, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = Un;
  for (let s = 0; s < e; s++) {
    const l = r[s];
    let u, f, c = -1, h = 0;
    for (; h < l.length && (o.lastIndex = h, f = o.exec(l), f !== null); ) h = o.lastIndex, o === Un ? f[1] === "!--" ? o = vd : f[1] !== void 0 ? o = dd : f[2] !== void 0 ? (Uy.test(f[2]) && (n = RegExp("</" + f[2], "g")), o = Gr) : f[3] !== void 0 && (o = Gr) : o === Gr ? f[0] === ">" ? (o = n ?? Un, c = -1) : f[1] === void 0 ? c = -2 : (c = o.lastIndex - f[2].length, u = f[1], o = f[3] === void 0 ? Gr : f[3] === '"' ? gd : pd) : o === gd || o === pd ? o = Gr : o === vd || o === dd ? o = Un : (o = Gr, n = void 0);
    const v = o === Gr && r[s + 1].startsWith("/>") ? " " : "";
    a += o === Un ? l + FS : c >= 0 ? (i.push(u), l.slice(0, c) + Vy + l.slice(c) + Ir + v) : l + Ir + (c === -2 ? s : v);
  }
  return [Wy(r, a + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class Oa {
  constructor({ strings: t, _$litType$: e }, i) {
    let n;
    this.parts = [];
    let a = 0, o = 0;
    const s = t.length - 1, l = this.parts, [u, f] = HS(t, e);
    if (this.el = Oa.createElement(u, i), mi.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (n = mi.nextNode()) !== null && l.length < s; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const c of n.getAttributeNames()) if (c.endsWith(Vy)) {
          const h = f[o++], v = n.getAttribute(c).split(Ir), d = /([.?@])?(.*)/.exec(h);
          l.push({ type: 1, index: a, name: d[2], strings: v, ctor: d[1] === "." ? GS : d[1] === "?" ? US : d[1] === "@" ? WS : Ll }), n.removeAttribute(c);
        } else c.startsWith(Ir) && (l.push({ type: 6, index: a }), n.removeAttribute(c));
        if (Uy.test(n.tagName)) {
          const c = n.textContent.split(Ir), h = c.length - 1;
          if (h > 0) {
            n.textContent = Bs ? Bs.emptyScript : "";
            for (let v = 0; v < h; v++) n.append(c[v], ka()), mi.nextNode(), l.push({ type: 2, index: ++a });
            n.append(c[h], ka());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Gy) l.push({ type: 2, index: a });
      else {
        let c = -1;
        for (; (c = n.data.indexOf(Ir, c + 1)) !== -1; ) l.push({ type: 7, index: a }), c += Ir.length - 1;
      }
      a++;
    }
  }
  static createElement(t, e) {
    const i = Mi.createElement("template");
    return i.innerHTML = t, i;
  }
}
function Sn(r, t, e = r, i) {
  if (t === Ii) return t;
  let n = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const a = Ra(t) ? void 0 : t._$litDirective$;
  return n?.constructor !== a && (n?._$AO?.(!1), a === void 0 ? n = void 0 : (n = new a(r), n._$AT(r, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = n : e._$Cl = n), n !== void 0 && (t = Sn(r, n._$AS(r, t.values), n, i)), t;
}
class VS {
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
    const { el: { content: e }, parts: i } = this._$AD, n = (t?.creationScope ?? Mi).importNode(e, !0);
    mi.currentNode = n;
    let a = mi.nextNode(), o = 0, s = 0, l = i[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let u;
        l.type === 2 ? u = new no(a, a.nextSibling, this, t) : l.type === 1 ? u = new l.ctor(a, l.name, l.strings, this, t) : l.type === 6 && (u = new YS(a, this, t)), this._$AV.push(u), l = i[++s];
      }
      o !== l?.index && (a = mi.nextNode(), o++);
    }
    return mi.currentNode = Mi, n;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class no {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, n) {
    this.type = 2, this._$AH = gt, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = n, this._$Cv = n?.isConnected ?? !0;
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
    t = Sn(this, t, e), Ra(t) ? t === gt || t == null || t === "" ? (this._$AH !== gt && this._$AR(), this._$AH = gt) : t !== this._$AH && t !== Ii && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : zS(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== gt && Ra(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Mi.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, n = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = Oa.createElement(Wy(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === n) this._$AH.p(e);
    else {
      const a = new VS(n, this), o = a.u(this.options);
      a.p(e), this.T(o), this._$AH = a;
    }
  }
  _$AC(t) {
    let e = md.get(t.strings);
    return e === void 0 && md.set(t.strings, e = new Oa(t)), e;
  }
  k(t) {
    Ah(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, n = 0;
    for (const a of t) n === e.length ? e.push(i = new no(this.O(ka()), this.O(ka()), this, this.options)) : i = e[n], i._$AI(a), n++;
    n < e.length && (this._$AR(i && i._$AB.nextSibling, n), e.length = n);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = cd(t).nextSibling;
      cd(t).remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class Ll {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, n, a) {
    this.type = 1, this._$AH = gt, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = a, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = gt;
  }
  _$AI(t, e = this, i, n) {
    const a = this.strings;
    let o = !1;
    if (a === void 0) t = Sn(this, t, e, 0), o = !Ra(t) || t !== this._$AH && t !== Ii, o && (this._$AH = t);
    else {
      const s = t;
      let l, u;
      for (t = a[0], l = 0; l < a.length - 1; l++) u = Sn(this, s[i + l], e, l), u === Ii && (u = this._$AH[l]), o ||= !Ra(u) || u !== this._$AH[l], u === gt ? t = gt : t !== gt && (t += (u ?? "") + a[l + 1]), this._$AH[l] = u;
    }
    o && !n && this.j(t);
  }
  j(t) {
    t === gt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class GS extends Ll {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === gt ? void 0 : t;
  }
}
class US extends Ll {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== gt);
  }
}
class WS extends Ll {
  constructor(t, e, i, n, a) {
    super(t, e, i, n, a), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Sn(this, t, e, 0) ?? gt) === Ii) return;
    const i = this._$AH, n = t === gt && i !== gt || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, a = t !== gt && (i === gt || n);
    n && this.element.removeEventListener(this.name, this, i), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class YS {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Sn(this, t);
  }
}
const XS = Ch.litHtmlPolyfillSupport;
XS?.(Oa, no), (Ch.litHtmlVersions ??= []).push("3.3.3");
const qS = (r, t, e) => {
  const i = e?.renderBefore ?? t;
  let n = i._$litPart$;
  if (n === void 0) {
    const a = e?.renderBefore ?? null;
    i._$litPart$ = n = new no(t.insertBefore(ka(), a), a, void 0, e ?? {});
  }
  return n._$AI(r), n;
};
const Dh = globalThis;
let Er = class extends nn {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = qS(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Ii;
  }
};
Er._$litElement$ = !0, Er.finalized = !0, Dh.litElementHydrateSupport?.({ LitElement: Er });
const ZS = Dh.litElementPolyfillSupport;
ZS?.({ LitElement: Er });
(Dh.litElementVersions ??= []).push("4.2.2");
const KS = { ATTRIBUTE: 1 }, QS = (r) => (...t) => ({ _$litDirective$: r, values: t });
let jS = class {
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
const Yy = "important", JS = " !" + Yy, tw = QS(class extends jS {
  constructor(r) {
    if (super(r), r.type !== KS.ATTRIBUTE || r.name !== "style" || r.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return Object.keys(r).reduce((t, e) => {
      const i = r[e];
      return i == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${i};`;
    }, "");
  }
  update(r, [t]) {
    const { style: e } = r.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const i of this.ft) t[i] == null && (this.ft.delete(i), i.includes("-") ? e.removeProperty(i) : e[i] = null);
    for (const i in t) {
      const n = t[i];
      if (n != null) {
        this.ft.add(i);
        const a = typeof n == "string" && n.endsWith(JS);
        i.includes("-") || a ? e.setProperty(i, a ? n.slice(0, -11) : n, a ? Yy : "") : e[i] = n;
      }
    }
    return Ii;
  }
}), ew = {
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
  morning: "Stand 07:00",
  current: "Aktuell",
  earlyVerdict: "Noch zu früh für ein Urteil",
  liveUnavailable: "Der aktuelle Stand verändert sich laufend und wird erst als fester Prognosestand fair bewertet.",
  liveVerdict: "Kein Qualitätsurteil",
  liveHint: "laufend aktualisiert",
  forecastEnergy: "Prognose",
  actualEnergy: "Ist",
  testRun: "Testlauf",
  providerOne: "Anbieter 1",
  providerTwo: "Anbieter 2"
}, rw = {
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
  morning: "07:00 issue",
  current: "Current",
  earlyVerdict: "Too early for a verdict",
  liveUnavailable: "The current issue keeps changing and can only be evaluated fairly once it is stored as a fixed forecast issue.",
  liveVerdict: "No quality verdict",
  liveHint: "continuously updated",
  forecastEnergy: "Forecast",
  actualEnergy: "Actual",
  testRun: "Test run",
  providerOne: "Provider 1",
  providerTwo: "Provider 2"
};
function iw(r, t) {
  return r?.toLowerCase().startsWith("de") ? ew : rw;
}
const nw = /* @__PURE__ */ new Set(["", "unknown", "unavailable", "none", "null"]);
function aw(r) {
  if (!r || nw.has(r.state.toLowerCase())) return null;
  const t = Number(r.state);
  return Number.isFinite(t) ? t : null;
}
function fa(r, t) {
  return !r || !t ? null : aw(r.states[t]);
}
function ow(r) {
  const t = Math.max(0, ...r.filter((e) => e !== null));
  return Math.max(0.5, Math.ceil(t * 1.2 / 0.5) * 0.5);
}
function sw(r) {
  const t = Math.max(
    0,
    ...r.filter((e) => e !== null).map((e) => Math.abs(e))
  );
  return Math.max(10, Math.ceil(t * 1.2 / 5) * 5);
}
function lw(r, t, e) {
  return t === null || !Number.isFinite(t) || e <= 0 ? 0 : r === "power" ? Math.max(0, Math.min(100, t / e * 100)) : Math.max(0, Math.min(100, (t + e) / (2 * e) * 100));
}
function uw(r, t) {
  const e = t.filter(
    (u) => u.value !== null && Number.isFinite(u.value) && (r !== "power" || u.value >= 0)
  );
  if (e.length === 0) return { kind: "unavailable" };
  if (e.length === 1)
    return { kind: "single", winner: e[0] };
  const i = e[0], n = e[1];
  if (!i || !n || i.value === null || n.value === null)
    return { kind: "unavailable" };
  const a = r === "power" ? i.value : Math.abs(i.value), o = r === "power" ? n.value : Math.abs(n.value);
  if (Math.abs(a - o) < 1e-6) return { kind: "tie" };
  const s = a < o ? i : n;
  return {
    kind: "winner",
    winner: s,
    other: s === i ? n : i,
    difference: Math.abs(a - o)
  };
}
function Xy(r) {
  if (!r) return {};
  const [t, e, i] = r.split("|");
  return { date: t, timestamp: e, mode: i };
}
function qy(r, t) {
  return !!(r.date && r.date !== t);
}
function Mh(r, t) {
  if (!r) return t;
  const e = r.trim();
  return [
    /^#[0-9a-f]{3,8}$/i,
    /^rgba?\([\d\s.,%]+\)$/i,
    /^hsla?\([\d\s.,%a-z-]+\)$/i,
    /^var\(--[a-z0-9-_]+\)$/i,
    /^[a-z]+$/i
  ].some((n) => n.test(e)) ? e : t;
}
const yd = "#22C55E", _d = "#7C4DFF", Tl = class Tl extends Er {
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
            {
              name: "energy_total_entity",
              selector: { entity: { domain: ["sensor", "input_number"] } }
            },
            { name: "color", selector: { text: {} } }
          ]
        },
        {
          type: "expandable",
          name: "provider_2",
          title: "Provider 2 (optional)",
          schema: [
            { name: "name", selector: { text: {} } },
            { name: "entity", selector: { entity: { domain: "sensor" } } },
            {
              name: "energy_total_entity",
              selector: { entity: { domain: ["sensor", "input_number"] } }
            },
            { name: "color", selector: { text: {} } }
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
              name: "actual_energy_entity",
              selector: { entity: { domain: ["sensor", "input_number"] } }
            },
            {
              name: "selection_entity",
              selector: { entity: { domain: ["input_select", "select"] } }
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
        energy_total_entity: "Forecast energy / Prognoseenergie",
        color: "Color / Farbe",
        interval_count_entity: "Interval counter / Intervallzähler",
        snapshot_entity: "Snapshot status entity / Snapshot-Status",
        actual_energy_entity: "Actual energy / Ist-Energie",
        selection_entity: "Forecast issue selector / Prognosestand-Auswahl",
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
        color: yd,
        marker: "circle"
      },
      provider_2: {
        name: "Helios Forecast",
        color: _d,
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
      provider_2: t.provider_2 ? { ...t.provider_2 } : void 0,
      contexts: t.contexts?.map((e) => ({
        ...e,
        provider_1: e.provider_1 ? { ...e.provider_1 } : void 0,
        provider_2: e.provider_2 ? { ...e.provider_2 } : void 0
      }))
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
    if (!this._config) return rt``;
    const t = this._config.metric, e = this._activeConfig(), i = this.hass?.locale?.language ?? navigator.language, n = iw(i), a = i || "en", o = this._readings(
      t,
      n.providerOne,
      n.providerTwo,
      e,
      !e.evaluable
    ), s = o.map((S) => S.value), l = t === "power" ? ow(s) : sw(s), u = this._config.title ?? (t === "power" ? n.powerTitle : n.energyTitle), f = fa(this.hass, e.interval_count_entity), c = Math.max(1, Math.round(this._config.minimum_intervals ?? 8)), h = e.snapshot_entity ? this.hass?.states[e.snapshot_entity]?.state : void 0, v = Xy(h), d = e.evaluable && qy(v, this._todayKey()), p = f !== null && f <= 0, m = f !== null && f > 0 && f < c, g = !e.evaluable || d || p ? { kind: "unavailable" } : uw(t, o), y = e.evaluable ? d ? n.staleSnapshot : p ? n.waitingIntervals : void 0 : n.liveHint, _ = t === "power" ? n.powerTooltipTitle : n.energyTooltipTitle, b = `${e.evaluable ? "" : `${n.liveUnavailable} `}${this._explanation(
      t,
      o[0]?.value ?? null,
      a,
      n
    )}`;
    return rt`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <h2>${u}</h2>
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
                <strong>${_}</strong>
                <span>${b}</span>
              </span>
            </div>
          </header>

          ${this._verdict(
      t,
      g,
      a,
      n,
      m,
      y,
      !e.evaluable
    )}
          ${this._chart(t, o, l, a, n)}

          <footer class="card-footer">
            ${e.evaluable ? rt`<span>${this._intervalStatus(f, c, n)}</span>` : gt}
            ${e.evaluable && e.label ? rt`<span class="footer-separator" aria-hidden="true">·</span>` : gt}
            ${e.label ? rt`<span>${e.label}</span>` : gt}
            ${d ? rt`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${n.staleSnapshot}</span>` : !e.label && (v.mode === "bootstrap" || v.mode === "day_ahead") ? rt`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${v.mode === "bootstrap" ? n.testRun : n.dayAhead}</span>` : gt}
          </footer>
        </div>
      </ha-card>
    `;
  }
  _readings(t, e, i, n, a) {
    const o = [
      this._reading(
        t,
        n.provider_1,
        e,
        yd,
        "circle",
        n.actual_energy_entity,
        a
      )
    ];
    return n.provider_2?.entity && o.push(
      this._reading(
        t,
        n.provider_2,
        i,
        _d,
        "circle",
        n.actual_energy_entity,
        a
      )
    ), o;
  }
  _reading(t, e, i, n, a, o, s) {
    const l = e.entity, u = l ? this.hass?.states[l] : void 0, f = u && this.hass?.formatEntityName ? this.hass.formatEntityName(
      u,
      [{ type: "device" }, { type: "entity" }],
      { separator: " · " }
    ) : void 0, c = u?.attributes.friendly_name, h = s ? null : fa(this.hass, l);
    return {
      name: e.name?.trim() || f || (typeof c == "string" ? c : i),
      entity: l,
      color: Mh(e.color, n),
      marker: a,
      value: t === "power" && h !== null && h < 0 ? null : h,
      energy: s ? null : fa(this.hass, e.energy_total_entity),
      actualEnergy: s ? null : fa(this.hass, o)
    };
  }
  _verdict(t, e, i, n, a, o, s = !1) {
    if (e.kind === "unavailable")
      return rt`<section class="verdict unavailable">
        <strong class="verdict-value verdict-empty">${s ? n.liveVerdict : n.unavailable}</strong>
        <span class="verdict-support">${o ?? n.unavailableHint}</span>
      </section>`;
    if (a)
      return rt`<section class="verdict">
        <strong class="verdict-value verdict-empty">${n.earlyVerdict}</strong>
      </section>`;
    if (e.kind === "tie")
      return rt`<section class="verdict">
        <strong class="verdict-value">${n.equal}</strong>
      </section>`;
    const l = e.winner;
    if (!l || l.value === null) return rt``;
    if (e.kind === "single") {
      const f = this._formatValue(t, l.value, i), c = t === "power" ? `${l.name} · ${n.singlePowerHint}` : `${l.name} · ${this._energyDirection(l.value, n)}`;
      return rt`<section class="verdict">
        <strong class="verdict-value numeric">${f}</strong>
        <span class="verdict-support">${c}</span>
      </section>`;
    }
    const u = t === "power" && e.difference !== void 0 && e.other ? n.lessDistance(this._formatValue(t, e.difference, i)) : `${this._formatMagnitude(t, l.value, i)} ${this._energyDirection(
      l.value,
      n
    )}`;
    return rt`<section class="verdict">
      <div class="winner-line" aria-label=${n.bestMatch(l.name)}>
        ${a ? gt : this._checkIcon()}<strong class="verdict-value">${l.name}</strong>
      </div>
      <span class="verdict-support">${u}</span>
    </section>`;
  }
  _chart(t, e, i, n, a) {
    const o = e.map(
      (s) => `${s.name}: ${s.value === null ? a.unavailable : this._formatValue(t, s.value, n)}`
    ).join(", ");
    return rt`<div class=${t === "power" ? "chart power-chart" : "chart energy-chart"} role="img" aria-label=${o}>
      ${e.map((s) => this._chartRow(t, s, i, n, a))}
      <div class="axis" aria-hidden="true">
        ${t === "power" ? rt`<span>${a.idealZero}</span><span>${this._formatAxis(i, n)} kW</span>` : rt`<span>${a.low}</span><span>${a.idealZero}</span><span>${a.high}</span>`}
      </div>
    </div>`;
  }
  _chartRow(t, e, i, n, a) {
    const o = lw(t, e.value, i), s = t === "energy" ? Math.min(50, o) : 0, l = t === "energy" ? Math.abs(o - 50) : o, u = {
      "--series-color": e.color,
      "--marker-position": `${o}%`,
      "--segment-left": `${s}%`,
      "--segment-width": `${l}%`
    };
    return rt`<div class="chart-row" style=${tw(u)}>
      <div class="row-label">
        <span class="provider-name">
          <i class=${`series-marker ${e.marker}`} aria-hidden="true"></i>
          <span>${e.name}</span>
        </span>
        <strong>${e.value === null ? "–" : this._formatValue(t, e.value, n)}</strong>
      </div>
      ${t === "energy" && (e.energy != null || e.actualEnergy != null) ? rt`<div class="energy-values">
            <span>${a.forecastEnergy} ${this._formatEnergy(e.energy, n)}</span>
            <span aria-hidden="true">·</span>
            <span>${a.actualEnergy} ${this._formatEnergy(e.actualEnergy, n)}</span>
          </div>` : gt}
      <div class="track" aria-hidden="true">
        ${t === "energy" ? rt`<i class="zero-line"></i>` : gt}
        <i class="segment"></i>
        ${e.value !== null ? rt`<i class=${`value-marker ${e.marker}`}></i>` : gt}
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
  _formatEnergy(t, e) {
    return t == null || !Number.isFinite(t) ? "–" : `${new Intl.NumberFormat(e, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(t)} kWh`;
  }
  _activeConfig() {
    if (!this._config)
      return { provider_1: {}, evaluable: !1 };
    const t = this._config.selection_entity ? this.hass?.states[this._config.selection_entity]?.state : void 0, e = this._config.contexts?.find((i) => i.value === t);
    return {
      provider_1: { ...this._config.provider_1, ...e?.provider_1 },
      provider_2: this._config.provider_2 || e?.provider_2 ? { ...this._config.provider_2, ...e?.provider_2 } : void 0,
      interval_count_entity: e?.interval_count_entity ?? this._config.interval_count_entity,
      snapshot_entity: e?.snapshot_entity ?? this._config.snapshot_entity,
      actual_energy_entity: e?.actual_energy_entity ?? this._config.actual_energy_entity,
      label: e?.label,
      value: e?.value,
      evaluable: e?.evaluable !== !1
    };
  }
  _energyDirection(t, e) {
    return t > 0 ? e.tooHigh : t < 0 ? e.tooLow : e.exact;
  }
  _intervalStatus(t, e, i) {
    if (t === null) return i.waitingIntervals;
    const n = Math.max(0, Math.round(t));
    return n === 0 ? i.waitingIntervals : n < e ? i.firstTrend(n, e) : i.completedIntervals(n);
  }
  _todayKey() {
    const t = /* @__PURE__ */ new Date(), e = t.getFullYear(), i = String(t.getMonth() + 1).padStart(2, "0"), n = String(t.getDate()).padStart(2, "0");
    return `${e}-${i}-${n}`;
  }
  _explanation(t, e, i, n) {
    if (t === "energy") return n.energyExplanation;
    const a = e ?? 1.4, o = new Intl.NumberFormat(i, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return n.powerExplanation(o.format(a), o.format(a * 0.25));
  }
  _infoIcon() {
    return rt`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }
  _checkIcon() {
    return rt`<svg class="check-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="m8.2 12.2 2.5 2.5 5.4-5.5"></path>
    </svg>`;
  }
};
Tl.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
}, Tl.styles = Ml`
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

    .energy-values {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: -2px;
      color: var(--secondary-text-color);
      font-size: 12px;
      font-variant-numeric: tabular-nums;
      line-height: 1.35;
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
let Yf = Tl;
var Xf = function(r, t) {
  return Xf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  }, Xf(r, t);
};
function N(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Xf(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var Ih = 12, fw = "sans-serif", Fr = Ih + "px " + fw, cw = 20, hw = 100, vw = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function dw(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var i = String.fromCharCode(e + 32), n = (r.charCodeAt(e) - cw) / hw;
    t[i] = n;
  }
  return t;
}
var pw = dw(vw), se = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ (function() {
    var r, t;
    return function(e, i) {
      if (!r) {
        var n = se.createCanvas();
        r = n && n.getContext("2d");
      }
      if (r)
        return t !== i && (t = r.font = i || Fr), r.measureText(e);
      e = e || "", i = i || Fr;
      var a = /((?:\d+)?\.?\d*)px/.exec(i), o = a && +a[1] || Ih, s = 0;
      if (i.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var l = 0; l < e.length; l++) {
          var u = pw[e[l]];
          s += u == null ? o : u * o;
        }
      return { width: s };
    };
  })(),
  loadImage: function(r, t, e) {
    var i = new Image();
    return i.onload = t, i.onerror = e, i.src = r, i;
  },
  getTime: function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }
}, Zy = En([
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
}, {}), Ky = En([
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
}, {}), ao = Object.prototype.toString, Pl = Array.prototype, gw = Pl.forEach, mw = Pl.filter, Lh = Pl.slice, yw = Pl.map, bd = (function() {
}).constructor, yo = bd ? bd.prototype : null, Ph = "__proto__", fu = 2311, _w = Math.pow(2, 53) - 1;
function Qy() {
  return fu >= _w && (fu = 0), fu++;
}
function Eh() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function nt(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = ao.call(r);
  if (e === "[object Array]") {
    if (!_a(r)) {
      t = [];
      for (var i = 0, n = r.length; i < n; i++)
        t[i] = nt(r[i]);
    }
  } else if (Ky[e]) {
    if (!_a(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var i = 0, n = r.length; i < n; i++)
          t[i] = r[i];
      }
    }
  } else if (!Zy[e] && !_a(r) && !Na(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== Ph && (t[o] = nt(r[o]));
  }
  return t;
}
function ft(r, t, e) {
  if (!K(t) || !K(r))
    return e ? nt(t) : r;
  for (var i in t)
    if (t.hasOwnProperty(i) && i !== Ph) {
      var n = r[i], a = t[i];
      K(a) && K(n) && !F(a) && !F(n) && !Na(a) && !Na(n) && !Sd(a) && !Sd(n) && !_a(a) && !_a(n) ? ft(n, a, e) : (e || !(i in r)) && (r[i] = nt(t[i]));
    }
  return r;
}
function bw(r, t) {
  for (var e = r[0], i = 1, n = r.length; i < n; i++)
    e = ft(e, r[i], t);
  return e;
}
function O(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== Ph && (r[e] = t[e]);
  return r;
}
function Sw(r, t, e) {
  r = r || {};
  for (var i = 0; i < e.length; i++) {
    var n = e[i];
    r[n] = t[n];
  }
  return r;
}
function yt(r, t, e) {
  for (var i = Tt(t), n = 0, a = i.length; n < a; n++) {
    var o = i[n];
    r[o] == null && (r[o] = t[o]);
  }
  return r;
}
function ut(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, i = r.length; e < i; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function ww(r, t) {
  var e = r.prototype;
  function i() {
  }
  i.prototype = t.prototype, r.prototype = new i();
  for (var n in e)
    e.hasOwnProperty(n) && (r.prototype[n] = e[n]);
  r.prototype.constructor = r, r.superClass = t;
}
function Re(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
      var a = i[n];
      a !== "constructor" && r[a] == null && (r[a] = t[a]);
    }
  else
    yt(r, t);
}
function re(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function M(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === gw)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var i = 0, n = r.length; i < n; i++)
        t.call(e, r[i], i, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function G(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return kh(r);
  if (r.map && r.map === yw)
    return r.map(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    i.push(t.call(e, r[n], n, r));
  return i;
}
function En(r, t, e, i) {
  if (r && t) {
    for (var n = 0, a = r.length; n < a; n++)
      e = t.call(i, e, r[n], n, r);
    return e;
  }
}
function Rt(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return kh(r);
  if (r.filter && r.filter === mw)
    return r.filter(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    t.call(e, r[n], n, r) && i.push(r[n]);
  return i;
}
function xw(r, t, e) {
  if (r && t) {
    for (var i = 0, n = r.length; i < n; i++)
      if (t.call(e, r[i], i, r))
        return r[i];
  }
}
function Tt(r) {
  if (!r)
    return [];
  if (Object.keys)
    return Object.keys(r);
  var t = [];
  for (var e in r)
    r.hasOwnProperty(e) && t.push(e);
  return t;
}
function Tw(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return function() {
    return r.apply(t, e.concat(Lh.call(arguments)));
  };
}
var xt = yo && Z(yo.bind) ? yo.call.bind(yo.bind) : Tw;
function mt(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(Lh.call(arguments)));
  };
}
function F(r) {
  return Array.isArray ? Array.isArray(r) : ao.call(r) === "[object Array]";
}
function Z(r) {
  return typeof r == "function";
}
function W(r) {
  return typeof r == "string";
}
function qf(r) {
  return ao.call(r) === "[object String]";
}
function bt(r) {
  return typeof r == "number";
}
function K(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function Sd(r) {
  return !!Zy[ao.call(r)];
}
function ie(r) {
  return !!Ky[ao.call(r)];
}
function Na(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function El(r) {
  return r.colorStops != null;
}
function Cw(r) {
  return r.image != null;
}
function Ba(r) {
  return r !== r;
}
function lr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = 0, i = r.length; e < i; e++)
    if (r[e] != null)
      return r[e];
}
function V(r, t) {
  return r ?? t;
}
function vn(r, t, e) {
  return r ?? t ?? e;
}
function kh(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return Lh.apply(r, t);
}
function Rh(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function vr(r, t) {
  if (!r)
    throw new Error(t);
}
function We(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var jy = "__ec_primitive__";
function Zf(r) {
  r[jy] = !0;
}
function _a(r) {
  return r[jy];
}
var Aw = (function() {
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
    return Tt(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var i in e)
      e.hasOwnProperty(i) && t(e[i], i);
  }, r;
})(), Jy = typeof Map == "function";
function Dw() {
  return Jy ? /* @__PURE__ */ new Map() : new Aw();
}
var Mw = (function() {
  function r(t) {
    var e = F(t);
    this.data = Dw();
    var i = this;
    t instanceof r ? t.each(n) : t && M(t, n);
    function n(a, o) {
      e ? i.set(a, o) : i.set(o, a);
    }
  }
  return r.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, r.prototype.get = function(t) {
    return this.data.get(t);
  }, r.prototype.set = function(t, e) {
    return this.data.set(t, e), e;
  }, r.prototype.each = function(t, e) {
    this.data.forEach(function(i, n) {
      t.call(e, i, n);
    });
  }, r.prototype.keys = function() {
    var t = this.data.keys();
    return Jy ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
})();
function j(r) {
  return new Mw(r);
}
function Iw(r, t) {
  for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++)
    e[i] = r[i];
  for (var n = r.length, i = 0; i < t.length; i++)
    e[i + n] = t[i];
  return e;
}
function kl(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var i = function() {
    };
    i.prototype = r, e = new i();
  }
  return t && O(e, t), e;
}
function t0(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function qt(r, t) {
  return r.hasOwnProperty(t);
}
function Ht() {
}
var Lw = 180 / Math.PI, Pw = /* @__PURE__ */ (function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
})(), Ew = /* @__PURE__ */ (function() {
  function r() {
    this.browser = new Pw(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
})(), tt = new Ew();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (tt.wxa = !0, tt.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? tt.worker = !0 : !tt.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (tt.node = !0, tt.svgSupported = !0) : kw(navigator.userAgent, tt);
function kw(r, t) {
  var e = t.browser, i = r.match(/Firefox\/([\d.]+)/), n = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  i && (e.firefox = !0, e.version = i[1]), n && (e.ie = !0, e.version = n[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11);
  var s = t.domSupported = typeof document < "u";
  if (s) {
    var l = document.documentElement.style;
    t.transform3dSupported = (e.ie && "transition" in l || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in l) && !("OTransition" in l), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
  }
}
var Rw = ".", Ur = "___EC__COMPONENT__CONTAINER___", e0 = "___EC__EXTENDED_CLASS___";
function Ye(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(Rw);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function Ow(r) {
  vr(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function Nw(r) {
  return !!(r && r[e0]);
}
function Oh(r, t) {
  r.$constructor = r, r.extend = function(e) {
    var i = this, n;
    return Bw(i) ? n = /** @class */
    (function(a) {
      N(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    })(i) : (n = function() {
      (e.$constructor || i).apply(this, arguments);
    }, ww(n, this)), O(n.prototype, e), n[e0] = !0, n.extend = this.extend, n.superCall = $w, n.superApply = Hw, n.superClass = i, n;
  };
}
function Bw(r) {
  return Z(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function r0(r, t) {
  r.extend = t.extend;
}
var Fw = Math.round(Math.random() * 10);
function zw(r) {
  var t = ["__\0is_clz", Fw++].join("_");
  r.prototype[t] = !0, r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function $w(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return this.superClass.prototype[t].apply(r, e);
}
function Hw(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function Rl(r) {
  var t = {};
  r.registerClass = function(i) {
    var n = i.type || i.prototype.type;
    if (n) {
      Ow(n), i.prototype.type = n;
      var a = Ye(n);
      if (!a.sub)
        t[a.main] = i;
      else if (a.sub !== Ur) {
        var o = e(a);
        o[a.sub] = i;
      }
    }
    return i;
  }, r.getClass = function(i, n, a) {
    var o = t[i];
    if (o && o[Ur] && (o = n ? o[n] : null), a && !o)
      throw new Error(n ? "Component " + i + "." + (n || "") + " is used but not imported." : i + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(i) {
    var n = Ye(i), a = [], o = t[n.main];
    return o && o[Ur] ? M(o, function(s, l) {
      l !== Ur && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(i) {
    var n = Ye(i);
    return !!t[n.main];
  }, r.getAllClassMainTypes = function() {
    var i = [];
    return M(t, function(n, a) {
      i.push(a);
    }), i;
  }, r.hasSubTypes = function(i) {
    var n = Ye(i), a = t[n.main];
    return a && a[Ur];
  };
  function e(i) {
    var n = t[i.main];
    return (!n || !n[Ur]) && (n = t[i.main] = {}, n[Ur] = !0), n;
  }
}
function Fa(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(i, n, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var l = r[s][1];
      if (!(n && ut(n, l) >= 0 || a && ut(a, l) < 0)) {
        var u = i.getShallow(l, t);
        u != null && (o[r[s][0]] = u);
      }
    }
    return o;
  };
}
var Vw = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], Gw = Fa(Vw), Uw = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return Gw(this, t, e);
    }, r;
  })()
), i0 = /* @__PURE__ */ (function() {
  function r(t) {
    this.value = t;
  }
  return r;
})(), Ww = (function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new i0(t);
    return this.insertEntry(e), e;
  }, r.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, r.prototype.remove = function(t) {
    var e = t.prev, i = t.next;
    e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, r;
})(), wn = (function() {
  function r(t) {
    this._list = new Ww(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var i = this._list, n = this._map, a = null;
    if (n[t] == null) {
      var o = i.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var l = i.head;
        i.remove(l), delete n[l.key], a = l.value, this._lastRemovedEntry = l;
      }
      s ? s.value = e : s = new i0(e), s.key = t, i.insertEntry(s), n[t] = s;
    }
    return a;
  }, r.prototype.get = function(t) {
    var e = this._map[t], i = this._list;
    if (e != null)
      return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value;
  }, r.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, r.prototype.len = function() {
    return this._list.len();
  }, r;
})(), Kf = new wn(50);
function Yw(r) {
  if (typeof r == "string") {
    var t = Kf.get(r);
    return t && t.image;
  } else
    return r;
}
function n0(r, t, e, i, n) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = Kf.get(r), o = { hostEl: e, cb: i, cbPayload: n };
      return a ? (t = a.image, !Ol(t) && a.pending.push(o)) : (t = se.loadImage(r, wd, wd), t.__zrImageSrc = r, Kf.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else return t;
}
function wd() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], i = e.cb;
    i && i(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function Ol(r) {
  return r && r.width && r.height;
}
function Xe() {
  return [1, 0, 0, 1, 0, 0];
}
function oo(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function Nh(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function ba(r, t, e) {
  var i = t[0] * e[0] + t[2] * e[1], n = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], l = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = i, r[1] = n, r[2] = a, r[3] = o, r[4] = s, r[5] = l, r;
}
function Qf(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function Bh(r, t, e, i) {
  i === void 0 && (i = [0, 0]);
  var n = t[0], a = t[2], o = t[4], s = t[1], l = t[3], u = t[5], f = Math.sin(e), c = Math.cos(e);
  return r[0] = n * c + s * f, r[1] = -n * f + s * c, r[2] = a * c + l * f, r[3] = -a * f + c * l, r[4] = c * (o - i[0]) + f * (u - i[1]) + i[0], r[5] = c * (u - i[1]) - f * (o - i[0]) + i[1], r;
}
function Xw(r, t, e) {
  var i = e[0], n = e[1];
  return r[0] = t[0] * i, r[1] = t[1] * n, r[2] = t[2] * i, r[3] = t[3] * n, r[4] = t[4] * i, r[5] = t[5] * n, r;
}
function so(r, t) {
  var e = t[0], i = t[2], n = t[4], a = t[1], o = t[3], s = t[5], l = e * o - a * i;
  return l ? (l = 1 / l, r[0] = o * l, r[1] = -a * l, r[2] = -i * l, r[3] = e * l, r[4] = (i * s - o * n) * l, r[5] = (a * n - e * s) * l, r) : null;
}
function kn(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function qw(r) {
  return [r[0], r[1]];
}
function cu(r, t, e) {
  return r[0] = t, r[1] = e, r;
}
function xd(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function a0(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function Zw(r) {
  return Math.sqrt(Kw(r));
}
function Kw(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function hu(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function Fh(r, t) {
  var e = Zw(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function jf(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var Qw = jf;
function jw(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var dn = jw;
function we(r, t, e) {
  var i = t[0], n = t[1];
  return r[0] = e[0] * i + e[2] * n + e[4], r[1] = e[1] * i + e[3] * n + e[5], r;
}
function sn(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function ln(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var _t = (function() {
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
    var e = this.x - t.x, i = this.y - t.y;
    return Math.sqrt(e * e + i * i);
  }, r.prototype.distanceSquare = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return e * e + i * i;
  }, r.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, r.prototype.transform = function(t) {
    if (t) {
      var e = this.x, i = this.y;
      return this.x = t[0] * e + t[2] * i + t[4], this.y = t[1] * e + t[3] * i + t[5], this;
    }
  }, r.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, r.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.set = function(t, e, i) {
    t.x = e, t.y = i;
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y;
  }, r.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, r.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, r.dot = function(t, e) {
    return t.x * e.x + t.y * e.y;
  }, r.add = function(t, e, i) {
    t.x = e.x + i.x, t.y = e.y + i.y;
  }, r.sub = function(t, e, i) {
    t.x = e.x - i.x, t.y = e.y - i.y;
  }, r.scale = function(t, e, i) {
    t.x = e.x * i, t.y = e.y * i;
  }, r.scaleAndAdd = function(t, e, i, n) {
    t.x = e.x + i.x * n, t.y = e.y + i.y * n;
  }, r.lerp = function(t, e, i, n) {
    var a = 1 - n;
    t.x = a * e.x + n * i.x, t.y = a * e.y + n * i.y;
  }, r;
})(), yi = Math.min, un = Math.max, Jf = Math.abs, Td = ["x", "y"], Jw = ["width", "height"], Wr = new _t(), Yr = new _t(), Xr = new _t(), qr = new _t(), oe = o0(), ca = oe.minTv, tc = oe.maxTv, Sa = [0, 0], J = (function() {
  function r(t, e, i, n) {
    vu(this, t, e, i, n);
  }
  return r.set = function(t, e, i, n, a) {
    return n < 0 && (e = e + n, n = -n), a < 0 && (i = i + a, a = -a), t.x = e, t.y = i, t.width = n, t.height = a, t;
  }, r.prototype.union = function(t) {
    var e = yi(t.x, this.x), i = yi(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = un(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = un(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = e, this.y = i;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    return tx(Xe(), this, t);
  }, r.prototype.intersect = function(t, e, i) {
    return r.intersect(this, t, e, i);
  }, r.intersect = function(t, e, i, n) {
    i && _t.set(i, 0, 0);
    var a = n && n.outIntersectRect || null, o = n && n.clamp;
    if (a && (a.x = a.y = a.width = a.height = NaN), !t || !e)
      return !1;
    t instanceof r || (t = vu(ex, t.x, t.y, t.width, t.height)), e instanceof r || (e = vu(rx, e.x, e.y, e.width, e.height));
    var s = !!i;
    oe.reset(n, s);
    var l = oe.touchThreshold, u = t.x + l, f = t.x + t.width - l, c = t.y + l, h = t.y + t.height - l, v = e.x + l, d = e.x + e.width - l, p = e.y + l, m = e.y + e.height - l;
    if (u > f || c > h || v > d || p > m)
      return !1;
    var g = !(f < v || d < u || h < p || m < c);
    return (s || a) && (Sa[0] = 1 / 0, Sa[1] = 0, Ad(u, f, v, d, 0, s, a, o), Ad(c, h, p, m, 1, s, a, o), s && _t.copy(i, g ? oe.useDir ? oe.dirMinTv : ca : tc)), g;
  }, r.contain = function(t, e, i) {
    return e >= t.x && e <= t.x + t.width && i >= t.y && i <= t.y + t.height;
  }, r.prototype.contain = function(t, e) {
    return r.contain(this, t, e);
  }, r.prototype.clone = function() {
    return new r(this.x, this.y, this.width, this.height);
  }, r.prototype.copy = function(t) {
    Cd(this, t);
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
  }, r.applyTransform = function(t, e, i) {
    if (!i) {
      t !== e && Cd(t, e);
      return;
    }
    if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
      var n = i[0], a = i[3], o = i[4], s = i[5];
      t.x = e.x * n + o, t.y = e.y * a + s, t.width = e.width * n, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    Wr.x = Xr.x = e.x, Wr.y = qr.y = e.y, Yr.x = qr.x = e.x + e.width, Yr.y = Xr.y = e.y + e.height, Wr.transform(i), qr.transform(i), Yr.transform(i), Xr.transform(i), t.x = yi(Wr.x, Yr.x, Xr.x, qr.x), t.y = yi(Wr.y, Yr.y, Xr.y, qr.y);
    var l = un(Wr.x, Yr.x, Xr.x, qr.x), u = un(Wr.y, Yr.y, Xr.y, qr.y);
    t.width = l - t.x, t.height = u - t.y;
  }, r.calculateTransform = function(t, e, i) {
    var n = i.width / e.width, a = i.height / e.height;
    return t = oo(t || []), Qf(t, t, cu(du, -e.x, -e.y)), Xw(t, t, cu(du, n, a)), Qf(t, t, cu(du, i.x, i.y)), t;
  }, r;
})();
J.create;
var vu = J.set, Cd = J.copy, tx = J.calculateTransform;
J.applyTransform;
J.contain;
var ex = new J(0, 0, 0, 0), rx = new J(0, 0, 0, 0), du = [];
function Ad(r, t, e, i, n, a, o, s) {
  var l = Jf(t - e), u = Jf(i - r), f = yi(l, u), c = Td[n], h = Td[1 - n], v = Jw[n];
  t < e || i < r ? l < u ? (a && (tc[c] = -l), s && (o[c] = t, o[v] = 0)) : (a && (tc[c] = u), s && (o[c] = r, o[v] = 0)) : (o && (o[c] = un(r, e), o[v] = yi(t, i) - o[c]), a && (f < Sa[0] || oe.useDir) && (Sa[0] = yi(f, Sa[0]), (l < u || !oe.bidirectional) && (ca[c] = l, ca[h] = 0, oe.useDir && oe.calcDirMTV()), (l >= u || !oe.bidirectional) && (ca[c] = -u, ca[h] = 0, oe.useDir && oe.calcDirMTV())));
}
function o0() {
  var r = 0, t = new _t(), e = new _t(), i = {
    minTv: new _t(),
    maxTv: new _t(),
    useDir: !1,
    dirMinTv: new _t(),
    touchThreshold: 0,
    bidirectional: !0,
    negativeSize: !1,
    reset: function(a, o) {
      i.touchThreshold = 0, a && a.touchThreshold != null && (i.touchThreshold = un(0, a.touchThreshold)), i.negativeSize = !1, o && (i.minTv.set(1 / 0, 1 / 0), i.maxTv.set(0, 0), i.useDir = !1, a && a.direction != null && (i.useDir = !0, i.dirMinTv.copy(i.minTv), e.copy(i.minTv), r = a.direction, i.bidirectional = a.bidirectional == null || !!a.bidirectional, i.bidirectional || t.set(Math.cos(r), Math.sin(r))));
    },
    calcDirMTV: function() {
      var a = i.minTv, o = i.dirMinTv, s = a.y * a.y + a.x * a.x, l = Math.sin(r), u = Math.cos(r), f = l * a.y + u * a.x;
      if (n(f)) {
        n(a.x) && n(a.y) && o.set(0, 0);
        return;
      }
      if (e.x = s * u / f, e.y = s * l / f, n(e.x) && n(e.y)) {
        o.set(0, 0);
        return;
      }
      (i.bidirectional || t.dot(e) > 0) && e.len() < o.len() && o.copy(e);
    }
  };
  function n(a) {
    return Jf(a) < 1e-10;
  }
  return i;
}
function qe(r) {
  _o || (_o = new wn(100)), r = r || Fr;
  var t = _o.get(r);
  return t || (t = {
    font: r,
    strWidthCache: new wn(500),
    asciiWidthMap: null,
    asciiWidthMapTried: !1,
    stWideCharWidth: se.measureText("国", r).width,
    asciiCharWidth: se.measureText("a", r).width
  }, _o.put(r, t)), t;
}
var _o;
function ix(r) {
  if (!(pu >= Dd)) {
    r = r || Fr;
    for (var t = [], e = +/* @__PURE__ */ new Date(), i = 0; i <= 127; i++)
      t[i] = se.measureText(String.fromCharCode(i), r).width;
    var n = +/* @__PURE__ */ new Date() - e;
    return n > 16 ? pu = Dd : n > 2 && pu++, t;
  }
}
var pu = 0, Dd = 5;
function s0(r, t) {
  return r.asciiWidthMapTried || (r.asciiWidthMap = ix(r.font), r.asciiWidthMapTried = !0), 0 <= t && t <= 127 ? r.asciiWidthMap != null ? r.asciiWidthMap[t] : r.asciiCharWidth : r.stWideCharWidth;
}
function Ze(r, t) {
  var e = r.strWidthCache, i = e.get(t);
  return i == null && (i = se.measureText(t, r.font).width, e.put(t, i)), i;
}
function Md(r, t, e, i) {
  var n = Ze(qe(t), r), a = Nl(t), o = xn(0, n, e), s = wi(0, a, i), l = new J(o, s, n, a);
  return l;
}
function l0(r, t, e, i) {
  var n = ((r || "") + "").split(`
`), a = n.length;
  if (a === 1)
    return Md(n[0], t, e, i);
  for (var o = new J(0, 0, 0, 0), s = 0; s < n.length; s++) {
    var l = Md(n[s], t, e, i);
    s === 0 ? o.copy(l) : o.union(l);
  }
  return o;
}
function xn(r, t, e, i) {
  return e === "right" ? i ? r += t : r -= t : e === "center" && (i ? r += t / 2 : r -= t / 2), r;
}
function wi(r, t, e, i) {
  return e === "middle" ? i ? r += t / 2 : r -= t / 2 : e === "bottom" && (i ? r += t : r -= t), r;
}
function Nl(r) {
  return qe(r).stWideCharWidth;
}
function Li(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function Fs(r, t, e) {
  var i = t.position || "inside", n = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, l = e.x, u = e.y, f = "left", c = "top";
  if (i instanceof Array)
    l += Li(i[0], e.width), u += Li(i[1], e.height), f = null, c = null;
  else
    switch (i) {
      case "left":
        l -= n, u += s, f = "right", c = "middle";
        break;
      case "right":
        l += n + o, u += s, c = "middle";
        break;
      case "top":
        l += o / 2, u -= n, f = "center", c = "bottom";
        break;
      case "bottom":
        l += o / 2, u += a + n, f = "center";
        break;
      case "inside":
        l += o / 2, u += s, f = "center", c = "middle";
        break;
      case "insideLeft":
        l += n, u += s, c = "middle";
        break;
      case "insideRight":
        l += o - n, u += s, f = "right", c = "middle";
        break;
      case "insideTop":
        l += o / 2, u += n, f = "center";
        break;
      case "insideBottom":
        l += o / 2, u += a - n, f = "center", c = "bottom";
        break;
      case "insideTopLeft":
        l += n, u += n;
        break;
      case "insideTopRight":
        l += o - n, u += n, f = "right";
        break;
      case "insideBottomLeft":
        l += n, u += a - n, c = "bottom";
        break;
      case "insideBottomRight":
        l += o - n, u += a - n, f = "right", c = "bottom";
        break;
    }
  return r = r || {}, r.x = l, r.y = u, r.align = f, r.verticalAlign = c, r;
}
var gu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function nx(r, t, e, i, n, a) {
  if (!e) {
    r.text = "", r.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = u0(e, i, n, a);
  for (var s = !1, l = {}, u = 0, f = o.length; u < f; u++)
    f0(l, o[u], a), o[u] = l.textLine, s = s || l.isTruncated;
  r.text = o.join(`
`), r.isTruncated = s;
}
function u0(r, t, e, i) {
  i = i || {};
  var n = O({}, i);
  e = V(e, "..."), n.maxIterations = V(i.maxIterations, 2);
  var a = n.minChar = V(i.minChar, 0), o = n.fontMeasureInfo = qe(t), s = o.asciiCharWidth;
  n.placeholder = V(i.placeholder, "");
  for (var l = r = Math.max(0, r - 1), u = 0; u < a && l >= s; u++)
    l -= s;
  var f = Ze(o, e);
  return f > l && (e = "", f = 0), l = r - f, n.ellipsis = e, n.ellipsisWidth = f, n.contentWidth = l, n.containerWidth = r, n;
}
function f0(r, t, e) {
  var i = e.containerWidth, n = e.contentWidth, a = e.fontMeasureInfo;
  if (!i) {
    r.textLine = "", r.isTruncated = !1;
    return;
  }
  var o = Ze(a, t);
  if (o <= i) {
    r.textLine = t, r.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= n || s >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var l = s === 0 ? ax(t, n, a) : o > 0 ? Math.floor(t.length * n / o) : 0;
    t = t.substr(0, l), o = Ze(a, t);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = !0;
}
function ax(r, t, e) {
  for (var i = 0, n = 0, a = r.length; n < a && i < t; n++)
    i += s0(e, r.charCodeAt(n));
  return n;
}
function ox(r, t, e, i) {
  var n = zh(r), a = t.overflow, o = t.padding, s = o ? o[1] + o[3] : 0, l = o ? o[0] + o[2] : 0, u = t.font, f = a === "truncate", c = Nl(u), h = V(t.lineHeight, c), v = t.lineOverflow === "truncate", d = !1, p = t.width;
  p == null && e != null && (p = e - s);
  var m = t.height;
  m == null && i != null && (m = i - l);
  var g;
  p != null && (a === "break" || a === "breakAll") ? g = n ? c0(n, t.font, p, a === "breakAll", 0).lines : [] : g = n ? n.split(`
`) : [];
  var y = g.length * h;
  if (m == null && (m = y), y > m && v) {
    var _ = Math.floor(m / h);
    d = d || g.length > _, g = g.slice(0, _), y = g.length * h;
  }
  if (n && f && p != null)
    for (var b = u0(p, u, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), S = {}, w = 0; w < g.length; w++)
      f0(S, g[w], b), g[w] = S.textLine, d = d || S.isTruncated;
  for (var x = m, T = 0, C = qe(u), w = 0; w < g.length; w++)
    T = Math.max(Ze(C, g[w]), T);
  p == null && (p = T);
  var D = p;
  return x += l, D += s, {
    lines: g,
    height: m,
    outerWidth: D,
    outerHeight: x,
    lineHeight: h,
    calculatedLineHeight: c,
    contentWidth: T,
    contentHeight: y,
    width: p,
    isTruncated: d
  };
}
var sx = /* @__PURE__ */ (function() {
  function r() {
  }
  return r;
})(), Id = /* @__PURE__ */ (function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
})(), lx = /* @__PURE__ */ (function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return r;
})();
function ux(r, t, e, i, n) {
  var a = new lx(), o = zh(r);
  if (!o)
    return a;
  var s = t.padding, l = s ? s[1] + s[3] : 0, u = s ? s[0] + s[2] : 0, f = t.width;
  f == null && e != null && (f = e - l);
  var c = t.height;
  c == null && i != null && (c = i - u);
  for (var h = t.overflow, v = (h === "break" || h === "breakAll") && f != null ? { width: f, accumWidth: 0, breakAll: h === "breakAll" } : null, d = gu.lastIndex = 0, p; (p = gu.exec(o)) != null; ) {
    var m = p.index;
    m > d && mu(a, o.substring(d, m), t, v), mu(a, p[2], t, v, p[1]), d = gu.lastIndex;
  }
  d < o.length && mu(a, o.substring(d, o.length), t, v);
  var g = [], y = 0, _ = 0, b = h === "truncate", S = t.lineOverflow === "truncate", w = {};
  function x(ot, Ut, Ae) {
    ot.width = Ut, ot.lineHeight = Ae, y += Ae, _ = Math.max(_, Ut);
  }
  t: for (var T = 0; T < a.lines.length; T++) {
    for (var C = a.lines[T], D = 0, A = 0, L = 0; L < C.tokens.length; L++) {
      var I = C.tokens[L], P = I.styleName && t.rich[I.styleName] || {}, E = I.textPadding = P.padding, k = E ? E[1] + E[3] : 0, z = I.font = P.font || t.font;
      I.contentHeight = Nl(z);
      var R = V(P.height, I.contentHeight);
      if (I.innerHeight = R, E && (R += E[0] + E[2]), I.height = R, I.lineHeight = vn(P.lineHeight, t.lineHeight, R), I.align = P && P.align || n, I.verticalAlign = P && P.verticalAlign || "middle", S && c != null && y + I.lineHeight > c) {
        var $ = a.lines.length;
        L > 0 ? (C.tokens = C.tokens.slice(0, L), x(C, A, D), a.lines = a.lines.slice(0, T + 1)) : a.lines = a.lines.slice(0, T), a.isTruncated = a.isTruncated || a.lines.length < $;
        break t;
      }
      var Y = P.width, U = Y == null || Y === "auto";
      if (typeof Y == "string" && Y.charAt(Y.length - 1) === "%")
        I.percentWidth = Y, g.push(I), I.contentWidth = Ze(qe(z), I.text);
      else {
        if (U) {
          var q = P.backgroundColor, Q = q && q.image;
          Q && (Q = Yw(Q), Ol(Q) && (I.width = Math.max(I.width, Q.width * R / Q.height)));
        }
        var H = b && f != null ? f - A : null;
        H != null && H < I.width ? !U || H < k ? (I.text = "", I.width = I.contentWidth = 0) : (nx(w, I.text, H - k, z, t.ellipsis, { minChar: t.truncateMinChar }), I.text = w.text, a.isTruncated = a.isTruncated || w.isTruncated, I.width = I.contentWidth = Ze(qe(z), I.text)) : I.contentWidth = Ze(qe(z), I.text);
      }
      I.width += k, A += I.width, P && (D = Math.max(D, I.lineHeight));
    }
    x(C, A, D);
  }
  a.outerWidth = a.width = V(f, _), a.outerHeight = a.height = V(c, y), a.contentHeight = y, a.contentWidth = _, a.outerWidth += l, a.outerHeight += u;
  for (var T = 0; T < g.length; T++) {
    var I = g[T], it = I.percentWidth;
    I.width = parseInt(it, 10) / 100 * a.width;
  }
  return a;
}
function mu(r, t, e, i, n) {
  var a = t === "", o = n && e.rich[n] || {}, s = r.lines, l = o.font || e.font, u = !1, f, c;
  if (i) {
    var h = o.padding, v = h ? h[1] + h[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Li(o.width, i.width) + v;
      s.length > 0 && d + i.accumWidth > i.width && (f = t.split(`
`), u = !0), i.accumWidth = d;
    } else {
      var p = c0(t, l, i.width, i.breakAll, i.accumWidth);
      i.accumWidth = p.accumWidth + v, c = p.linesWidths, f = p.lines;
    }
  }
  f || (f = t.split(`
`));
  for (var m = qe(l), g = 0; g < f.length; g++) {
    var y = f[g], _ = new sx();
    if (_.styleName = n, _.text = y, _.isLineHolder = !y && !a, typeof o.width == "number" ? _.width = o.width : _.width = c ? c[g] : Ze(m, y), !g && !u) {
      var b = (s[s.length - 1] || (s[0] = new Id())).tokens, S = b.length;
      S === 1 && b[0].isLineHolder ? b[0] = _ : (y || !S || a) && b.push(_);
    } else
      s.push(new Id([_]));
  }
}
function fx(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var cx = En(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function hx(r) {
  return fx(r) ? !!cx[r] : !0;
}
function c0(r, t, e, i, n) {
  for (var a = [], o = [], s = "", l = "", u = 0, f = 0, c = qe(t), h = 0; h < r.length; h++) {
    var v = r.charAt(h);
    if (v === `
`) {
      l && (s += l, f += u), a.push(s), o.push(f), s = "", l = "", u = 0, f = 0;
      continue;
    }
    var d = s0(c, v.charCodeAt(0)), p = i ? !1 : !hx(v);
    if (a.length ? f + d > e : n + f + d > e) {
      f ? (s || l) && (p ? (s || (s = l, l = "", u = 0, f = u), a.push(s), o.push(f - u), l += v, u += d, s = "", f = u) : (l && (s += l, l = "", u = 0), a.push(s), o.push(f), s = v, f = d)) : p ? (a.push(l), o.push(u), l = v, u = d) : (a.push(v), o.push(d));
      continue;
    }
    f += d, p ? (l += v, u += d) : (l && (s += l, l = "", u = 0), s += v);
  }
  return l && (s += l), s && (a.push(s), o.push(f)), a.length === 1 && (f += n), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
function Ld(r, t, e, i, n, a) {
  if (r.baseX = e, r.baseY = i, r.outerWidth = r.outerHeight = null, !!t) {
    var o = t.width * 2, s = t.height * 2;
    J.set(Pd, xn(e, o, n), wi(i, s, a), o, s), J.intersect(t, Pd, null, Ed);
    var l = Ed.outIntersectRect;
    r.outerWidth = l.width, r.outerHeight = l.height, r.baseX = xn(l.x, l.width, n, !0), r.baseY = wi(l.y, l.height, a, !0);
  }
}
var Pd = new J(0, 0, 0, 0), Ed = { outIntersectRect: {}, clamp: !0 };
function zh(r) {
  return r != null ? r += "" : r = "";
}
function vx(r) {
  var t = zh(r.text), e = r.font, i = Ze(qe(e), t), n = Nl(e);
  return ec(r, i, n, null);
}
function ec(r, t, e, i) {
  var n = new J(xn(r.x || 0, t, r.textAlign), wi(r.y || 0, e, r.textBaseline), t, e), a = i ?? (h0(r) ? r.lineWidth : 0);
  return a > 0 && (n.x -= a / 2, n.y -= a / 2, n.width += a, n.height += a), n;
}
function h0(r) {
  var t = r.stroke;
  return t != null && t !== "none" && r.lineWidth > 0;
}
var kd = oo, Rd = 5e-5;
function Zr(r) {
  return r > Rd || r < -Rd;
}
var Kr = [], Hi = [], yu = Xe(), _u = Math.abs, lo = (function() {
  function r() {
  }
  return r.prototype.getLocalTransform = function(t) {
    return dx(this, t);
  }, r.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, r.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, r.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, r.prototype.needLocalTransform = function() {
    return Zr(this.rotation) || Zr(this.x) || Zr(this.y) || Zr(this.scaleX - 1) || Zr(this.scaleY - 1) || Zr(this.skewX) || Zr(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), i = this.transform;
    if (!(e || t)) {
      i && (kd(i), this.invTransform = null);
      return;
    }
    i = i || Xe(), e ? this.getLocalTransform(i) : kd(i), t && (e ? ba(i, t, i) : Nh(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i), this.invTransform = this.invTransform || Xe(), so(this.invTransform, i);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(Kr);
      var i = Kr[0] < 0 ? -1 : 1, n = Kr[1] < 0 ? -1 : 1, a = ((Kr[0] - i) * e + i) / Kr[0] || 0, o = ((Kr[1] - n) * e + n) / Kr[1] || 0;
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
      var e = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], n = Math.atan2(t[1], t[0]), a = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
      i = Math.sqrt(i) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -n, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = i, this.originX = 0, this.originY = 0;
    }
  }, r.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, e = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || Xe(), ba(Hi, t.invTransform, e), e = Hi);
      var i = this.originX, n = this.originY;
      (i || n) && (yu[4] = i, yu[5] = n, ba(Hi, e, yu), Hi[4] -= i, Hi[5] -= n, e = Hi), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var i = [t, e], n = this.invTransform;
    return n && we(i, i, n), i;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var i = [t, e], n = this.transform;
    return n && we(i, i, n), i;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && _u(t[0] - 1) > 1e-10 && _u(t[3] - 1) > 1e-10 ? Math.sqrt(_u(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    zs(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var i = t.originX || 0, n = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, l = t.anchorY, u = t.rotation || 0, f = t.x, c = t.y, h = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
    if (i || n || s || l) {
      var d = i + s, p = n + l;
      e[4] = -d * a - h * p * o, e[5] = -p * o - v * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = v * a, e[2] = h * o, u && Bh(e, e, u), e[4] += i + f, e[5] += n + c, e;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  })(), r;
})(), dx = lo.getLocalTransform, Bl = [
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
function zs(r, t) {
  return Sw(r, t, Bl);
}
var wa = {
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
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)));
  },
  elasticOut: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / i) + 1);
  },
  elasticInOut: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i) * 0.5 + 1);
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
    return 1 - wa.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? wa.bounceIn(r * 2) * 0.5 : wa.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
}, bo = Math.pow, kr = Math.sqrt, $s = 1e-8, v0 = 1e-4, Od = kr(3), So = 1 / 3, Ue = kn(), pe = kn(), pn = kn();
function Lr(r) {
  return r > -$s && r < $s;
}
function d0(r) {
  return r > $s || r < -$s;
}
function Bt(r, t, e, i, n) {
  var a = 1 - n;
  return a * a * (a * r + 3 * n * t) + n * n * (n * i + 3 * a * e);
}
function Nd(r, t, e, i, n) {
  var a = 1 - n;
  return 3 * (((t - r) * a + 2 * (e - t) * n) * a + (i - e) * n * n);
}
function Hs(r, t, e, i, n, a) {
  var o = i + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), l = 3 * (t - r), u = r - n, f = s * s - 3 * o * l, c = s * l - 9 * o * u, h = l * l - 3 * s * u, v = 0;
  if (Lr(f) && Lr(c))
    if (Lr(s))
      a[0] = 0;
    else {
      var d = -l / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var p = c * c - 4 * f * h;
    if (Lr(p)) {
      var m = c / f, d = -s / o + m, g = -m / 2;
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g);
    } else if (p > 0) {
      var y = kr(p), _ = f * s + 1.5 * o * (-c + y), b = f * s + 1.5 * o * (-c - y);
      _ < 0 ? _ = -bo(-_, So) : _ = bo(_, So), b < 0 ? b = -bo(-b, So) : b = bo(b, So);
      var d = (-s - (_ + b)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var S = (2 * f * s - 3 * o * c) / (2 * kr(f * f * f)), w = Math.acos(S) / 3, x = kr(f), T = Math.cos(w), d = (-s - 2 * x * T) / (3 * o), g = (-s + x * (T + Od * Math.sin(w))) / (3 * o), C = (-s + x * (T - Od * Math.sin(w))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g), C >= 0 && C <= 1 && (a[v++] = C);
    }
  }
  return v;
}
function p0(r, t, e, i, n) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * i - 3 * r - 9 * e, s = 3 * t - 3 * r, l = 0;
  if (Lr(o)) {
    if (d0(a)) {
      var u = -s / a;
      u >= 0 && u <= 1 && (n[l++] = u);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Lr(f))
      n[0] = -a / (2 * o);
    else if (f > 0) {
      var c = kr(f), u = (-a + c) / (2 * o), h = (-a - c) / (2 * o);
      u >= 0 && u <= 1 && (n[l++] = u), h >= 0 && h <= 1 && (n[l++] = h);
    }
  }
  return l;
}
function Vs(r, t, e, i, n, a) {
  var o = (t - r) * n + r, s = (e - t) * n + t, l = (i - e) * n + e, u = (s - o) * n + o, f = (l - s) * n + s, c = (f - u) * n + u;
  a[0] = r, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = f, a[6] = l, a[7] = i;
}
function px(r, t, e, i, n, a, o, s, l, u, f) {
  var c, h = 5e-3, v = 1 / 0, d, p, m, g;
  Ue[0] = l, Ue[1] = u;
  for (var y = 0; y < 1; y += 0.05)
    pe[0] = Bt(r, e, n, o, y), pe[1] = Bt(t, i, a, s, y), m = dn(Ue, pe), m < v && (c = y, v = m);
  v = 1 / 0;
  for (var _ = 0; _ < 32 && !(h < v0); _++)
    d = c - h, p = c + h, pe[0] = Bt(r, e, n, o, d), pe[1] = Bt(t, i, a, s, d), m = dn(pe, Ue), d >= 0 && m < v ? (c = d, v = m) : (pn[0] = Bt(r, e, n, o, p), pn[1] = Bt(t, i, a, s, p), g = dn(pn, Ue), p <= 1 && g < v ? (c = p, v = g) : h *= 0.5);
  return kr(v);
}
function gx(r, t, e, i, n, a, o, s, l) {
  for (var u = r, f = t, c = 0, h = 1 / l, v = 1; v <= l; v++) {
    var d = v * h, p = Bt(r, e, n, o, d), m = Bt(t, i, a, s, d), g = p - u, y = m - f;
    c += Math.sqrt(g * g + y * y), u = p, f = m;
  }
  return c;
}
function jt(r, t, e, i) {
  var n = 1 - i;
  return n * (n * r + 2 * i * t) + i * i * e;
}
function Bd(r, t, e, i) {
  return 2 * ((1 - i) * (t - r) + i * (e - t));
}
function mx(r, t, e, i, n) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - i, l = 0;
  if (Lr(a)) {
    if (d0(o)) {
      var u = -s / o;
      u >= 0 && u <= 1 && (n[l++] = u);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Lr(f)) {
      var u = -o / (2 * a);
      u >= 0 && u <= 1 && (n[l++] = u);
    } else if (f > 0) {
      var c = kr(f), u = (-o + c) / (2 * a), h = (-o - c) / (2 * a);
      u >= 0 && u <= 1 && (n[l++] = u), h >= 0 && h <= 1 && (n[l++] = h);
    }
  }
  return l;
}
function g0(r, t, e) {
  var i = r + e - 2 * t;
  return i === 0 ? 0.5 : (r - t) / i;
}
function Gs(r, t, e, i, n) {
  var a = (t - r) * i + r, o = (e - t) * i + t, s = (o - a) * i + a;
  n[0] = r, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = e;
}
function yx(r, t, e, i, n, a, o, s, l) {
  var u, f = 5e-3, c = 1 / 0;
  Ue[0] = o, Ue[1] = s;
  for (var h = 0; h < 1; h += 0.05) {
    pe[0] = jt(r, e, n, h), pe[1] = jt(t, i, a, h);
    var v = dn(Ue, pe);
    v < c && (u = h, c = v);
  }
  c = 1 / 0;
  for (var d = 0; d < 32 && !(f < v0); d++) {
    var p = u - f, m = u + f;
    pe[0] = jt(r, e, n, p), pe[1] = jt(t, i, a, p);
    var v = dn(pe, Ue);
    if (p >= 0 && v < c)
      u = p, c = v;
    else {
      pn[0] = jt(r, e, n, m), pn[1] = jt(t, i, a, m);
      var g = dn(pn, Ue);
      m <= 1 && g < c ? (u = m, c = g) : f *= 0.5;
    }
  }
  return kr(c);
}
function _x(r, t, e, i, n, a, o) {
  for (var s = r, l = t, u = 0, f = 1 / o, c = 1; c <= o; c++) {
    var h = c * f, v = jt(r, e, n, h), d = jt(t, i, a, h), p = v - s, m = d - l;
    u += Math.sqrt(p * p + m * m), s = v, l = d;
  }
  return u;
}
var bx = /cubic-bezier\(([0-9,\.e ]+)\)/;
function m0(r) {
  var t = r && bx.exec(r);
  if (t) {
    var e = t[1].split(","), i = +We(e[0]), n = +We(e[1]), a = +We(e[2]), o = +We(e[3]);
    if (isNaN(i + n + a + o))
      return;
    var s = [];
    return function(l) {
      return l <= 0 ? 0 : l >= 1 ? 1 : Hs(0, i, a, 1, l, s) && Bt(0, n, o, 1, s[0]);
    };
  }
}
var Sx = (function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Ht, this.ondestroy = t.ondestroy || Ht, this.onrestart = t.onrestart || Ht, t.easing && this.setEasing(t.easing);
  }
  return r.prototype.step = function(t, e) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += e;
      return;
    }
    var i = this._life, n = t - this._startTime - this._pausedTime, a = n / i;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var l = n % i;
        this._startTime = t - l, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = Z(t) ? t : wa[t] || m0(t);
  }, r;
})(), Fd = {
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
function Rr(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function Us(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function bu(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Rr(parseFloat(t) / 100 * 255) : Rr(parseInt(t, 10));
}
function xi(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Us(parseFloat(t) / 100) : Us(parseFloat(t));
}
function Su(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function wo(r, t, e) {
  return r + (t - r) * e;
}
function fe(r, t, e, i, n) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r;
}
function rc(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var y0 = new wn(20), xo = null;
function Vi(r, t) {
  xo && rc(xo, t), xo = y0.put(r, xo || t.slice());
}
function Le(r, t) {
  if (r) {
    t = t || [];
    var e = y0.get(r);
    if (e)
      return rc(t, e);
    r = r + "";
    var i = r.replace(/ /g, "").toLowerCase();
    if (i in Fd)
      return rc(t, Fd[i]), Vi(r, t), t;
    var n = i.length;
    if (i.charAt(0) === "#") {
      if (n === 4 || n === 5) {
        var a = parseInt(i.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          fe(t, 0, 0, 0, 1);
          return;
        }
        return fe(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, n === 5 ? parseInt(i.slice(4), 16) / 15 : 1), Vi(r, t), t;
      } else if (n === 7 || n === 9) {
        var a = parseInt(i.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          fe(t, 0, 0, 0, 1);
          return;
        }
        return fe(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, n === 9 ? parseInt(i.slice(7), 16) / 255 : 1), Vi(r, t), t;
      }
      return;
    }
    var o = i.indexOf("("), s = i.indexOf(")");
    if (o !== -1 && s + 1 === n) {
      var l = i.substr(0, o), u = i.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (l) {
        case "rgba":
          if (u.length !== 4)
            return u.length === 3 ? fe(t, +u[0], +u[1], +u[2], 1) : fe(t, 0, 0, 0, 1);
          f = xi(u.pop());
        case "rgb":
          if (u.length >= 3)
            return fe(t, bu(u[0]), bu(u[1]), bu(u[2]), u.length === 3 ? f : xi(u[3])), Vi(r, t), t;
          fe(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (u.length !== 4) {
            fe(t, 0, 0, 0, 1);
            return;
          }
          return u[3] = xi(u[3]), ic(u, t), Vi(r, t), t;
        case "hsl":
          if (u.length !== 3) {
            fe(t, 0, 0, 0, 1);
            return;
          }
          return ic(u, t), Vi(r, t), t;
        default:
          return;
      }
    }
    fe(t, 0, 0, 0, 1);
  }
}
function ic(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, i = xi(r[1]), n = xi(r[2]), a = n <= 0.5 ? n * (i + 1) : n + i - n * i, o = n * 2 - a;
  return t = t || [], fe(t, Rr(Su(o, a, e + 1 / 3) * 255), Rr(Su(o, a, e) * 255), Rr(Su(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function xx(r) {
  if (r) {
    var t = r[0] / 255, e = r[1] / 255, i = r[2] / 255, n = Math.min(t, e, i), a = Math.max(t, e, i), o = a - n, s = (a + n) / 2, l, u;
    if (o === 0)
      l = 0, u = 0;
    else {
      s < 0.5 ? u = o / (a + n) : u = o / (2 - a - n);
      var f = ((a - t) / 6 + o / 2) / o, c = ((a - e) / 6 + o / 2) / o, h = ((a - i) / 6 + o / 2) / o;
      t === a ? l = h - c : e === a ? l = 1 / 3 + f - h : i === a && (l = 2 / 3 + c - f), l < 0 && (l += 1), l > 1 && (l -= 1);
    }
    var v = [l * 360, u, s];
    return r[3] != null && v.push(r[3]), v;
  }
}
function zd(r, t) {
  var e = Le(r);
  if (e) {
    for (var i = 0; i < 3; i++)
      e[i] = e[i] * (1 - t) | 0, e[i] > 255 ? e[i] = 255 : e[i] < 0 && (e[i] = 0);
    return Rn(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function Tx(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    var i = r * (t.length - 1), n = Math.floor(i), a = Math.ceil(i), o = Le(t[n]), s = Le(t[a]), l = i - n, u = Rn([
      Rr(wo(o[0], s[0], l)),
      Rr(wo(o[1], s[1], l)),
      Rr(wo(o[2], s[2], l)),
      Us(wo(o[3], s[3], l))
    ], "rgba");
    return e ? {
      color: u,
      leftIndex: n,
      rightIndex: a,
      value: i
    } : u;
  }
}
function nc(r, t, e, i) {
  var n = Le(r);
  if (r)
    return n = xx(n), e != null && (n[1] = xi(Z(e) ? e(n[1]) : e)), i != null && (n[2] = xi(Z(i) ? i(n[2]) : i)), Rn(ic(n), "rgba");
}
function $d(r, t) {
  var e = Le(r);
  if (e && t != null)
    return e[3] = Us(t), Rn(e, "rgba");
}
function Rn(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function Ws(r, t) {
  var e = Le(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
var Hd = new wn(100);
function Vd(r) {
  if (W(r)) {
    var t = Hd.get(r);
    return t || (t = zd(r, -0.1), Hd.put(r, t)), t;
  } else if (El(r)) {
    var e = O({}, r);
    return e.colorStops = G(r.colorStops, function(i) {
      return {
        offset: i.offset,
        color: zd(i.color, -0.1)
      };
    }), e;
  }
  return r;
}
function Cx(r) {
  return r.type === "linear";
}
function Ax(r) {
  return r.type === "radial";
}
(function() {
  return typeof Buffer < "u" && typeof Buffer.from == "function" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : typeof btoa == "function" && typeof unescape == "function" && typeof encodeURIComponent == "function" ? function(r) {
    return btoa(unescape(encodeURIComponent(r)));
  } : function(r) {
    return null;
  };
})();
var ac = Array.prototype.slice;
function sr(r, t, e) {
  return (t - r) * e + r;
}
function wu(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = sr(t[a], e[a], i);
  return r;
}
function Dx(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = sr(t[o][s], e[o][s], i);
  }
  return r;
}
function To(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = t[a] + e[a] * i;
  return r;
}
function Gd(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * i;
  }
  return r;
}
function Mx(r, t) {
  for (var e = r.length, i = t.length, n = e > i ? t : r, a = Math.min(e, i), o = n[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, i); s++)
    n.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Ix(r, t, e) {
  var i = r, n = t;
  if (!(!i.push || !n.push)) {
    var a = i.length, o = n.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        i.length = o;
      else
        for (var l = a; l < o; l++)
          i.push(e === 1 ? n[l] : ac.call(n[l]));
    }
    for (var u = i[0] && i[0].length, l = 0; l < i.length; l++)
      if (e === 1)
        isNaN(i[l]) && (i[l] = n[l]);
      else
        for (var f = 0; f < u; f++)
          isNaN(i[l][f]) && (i[l][f] = n[l][f]);
  }
}
function ys(r) {
  if (re(r)) {
    var t = r.length;
    if (re(r[0])) {
      for (var e = [], i = 0; i < t; i++)
        e.push(ac.call(r[i]));
      return e;
    }
    return ac.call(r);
  }
  return r;
}
function _s(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function Lx(r) {
  return re(r && r[0]) ? 2 : 1;
}
var Co = 0, bs = 1, _0 = 2, ha = 3, oc = 4, sc = 5, Ud = 6;
function Wd(r) {
  return r === oc || r === sc;
}
function Ao(r) {
  return r === bs || r === _0;
}
var Wn = [0, 0, 0, 0], Px = (function() {
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
  }, r.prototype.addKeyframe = function(t, e, i) {
    this._needsSort = !0;
    var n = this.keyframes, a = n.length, o = !1, s = Ud, l = e;
    if (re(e)) {
      var u = Lx(e);
      s = u, (u === 1 && !bt(e[0]) || u === 2 && !bt(e[0][0])) && (o = !0);
    } else if (bt(e) && !Ba(e))
      s = Co;
    else if (W(e))
      if (!isNaN(+e))
        s = Co;
      else {
        var f = Le(e);
        f && (l = f, s = ha);
      }
    else if (El(e)) {
      var c = O({}, l);
      c.colorStops = G(e.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Le(v.color)
        };
      }), Cx(e) ? s = oc : Ax(e) && (s = sc), l = c;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Ud) && (o = !0), this.discrete = this.discrete || o;
    var h = {
      time: t,
      value: l,
      rawValue: e,
      percent: 0
    };
    return i && (h.easing = i, h.easingFunc = Z(i) ? i : wa[i] || m0(i)), n.push(h), h;
  }, r.prototype.prepare = function(t, e) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(p, m) {
      return p.time - m.time;
    });
    for (var n = this.valType, a = i.length, o = i[a - 1], s = this.discrete, l = Ao(n), u = Wd(n), f = 0; f < a; f++) {
      var c = i[f], h = c.value, v = o.value;
      c.percent = c.time / t, s || (l && f !== a - 1 ? Ix(h, v, n) : u && Mx(h.colorStops, v.colorStops));
    }
    if (!s && n !== sc && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = i[0].value, f = 0; f < a; f++)
        n === Co ? i[f].additiveValue = i[f].value - d : n === ha ? i[f].additiveValue = To([], i[f].value, d, -1) : Ao(n) && (i[f].additiveValue = n === bs ? To([], i[f].value, d, -1) : Gd([], i[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, n = i ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, l = this.propName, u = a === ha, f, c = this._lastFr, h = Math.min, v, d;
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
        var y = i ? this._additiveValue : u ? Wn : t[l];
        if ((Ao(a) || u) && !y && (y = this._additiveValue = []), this.discrete)
          t[l] = g < 1 ? v.rawValue : d.rawValue;
        else if (Ao(a))
          a === bs ? wu(y, v[n], d[n], g) : Dx(y, v[n], d[n], g);
        else if (Wd(a)) {
          var _ = v[n], b = d[n], S = a === oc;
          t[l] = {
            type: S ? "linear" : "radial",
            x: sr(_.x, b.x, g),
            y: sr(_.y, b.y, g),
            colorStops: G(_.colorStops, function(x, T) {
              var C = b.colorStops[T];
              return {
                offset: sr(x.offset, C.offset, g),
                color: _s(wu([], x.color, C.color, g))
              };
            }),
            global: b.global
          }, S ? (t[l].x2 = sr(_.x2, b.x2, g), t[l].y2 = sr(_.y2, b.y2, g)) : t[l].r = sr(_.r, b.r, g);
        } else if (u)
          wu(y, v[n], d[n], g), i || (t[l] = _s(y));
        else {
          var w = sr(v[n], d[n], g);
          i ? this._additiveValue = w : t[l] = w;
        }
        i && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, i = this.propName, n = this._additiveValue;
    e === Co ? t[i] = t[i] + n : e === ha ? (Le(t[i], Wn), To(Wn, Wn, n, 1), t[i] = _s(Wn)) : e === bs ? To(t[i], t[i], n, 1) : e === _0 && Gd(t[i], t[i], n, 1);
  }, r;
})(), $h = (function() {
  function r(t, e, i, n) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n) {
      Eh("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = n, this._allowDiscrete = i;
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
  }, r.prototype.when = function(t, e, i) {
    return this.whenWithKeys(t, e, Tt(e), i);
  }, r.prototype.whenWithKeys = function(t, e, i, n) {
    for (var a = this._tracks, o = 0; o < i.length; o++) {
      var s = i[o], l = a[s];
      if (!l) {
        l = a[s] = new Px(s);
        var u = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var c = f.keyframes, h = c[c.length - 1];
          u = h && h.value, f.valType === ha && u && (u = _s(u));
        } else
          u = this._target[s];
        if (u == null)
          continue;
        t > 0 && l.addKeyframe(0, ys(u), n), this._trackKeys.push(s);
      }
      l.addKeyframe(t, ys(e[s]), n);
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
      for (var e = t.length, i = 0; i < e; i++)
        t[i].call(this);
  }, r.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, e = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, e)
      for (var i = 0; i < e.length; i++)
        e[i].call(this);
  }, r.prototype._setTracksFinished = function() {
    for (var t = this._tracks, e = this._trackKeys, i = 0; i < e.length; i++)
      t[e[i]].setFinished();
  }, r.prototype._getAdditiveTrack = function(t) {
    var e, i = this._additiveAnimators;
    if (i)
      for (var n = 0; n < i.length; n++) {
        var a = i[n].getTrack(t);
        a && (e = a);
      }
    return e;
  }, r.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e = this, i = [], n = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], l = this._getAdditiveTrack(o), u = s.keyframes, f = u.length;
        if (s.prepare(n, l), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var c = u[f - 1];
            c && (e._target[s.propName] = c.rawValue), s.setFinished();
          } else
            i.push(s);
      }
      if (i.length || this._force) {
        var h = new Sx({
          life: n,
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
            for (var m = 0; m < i.length; m++)
              i[m].step(e._target, v);
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
    return G(this._trackKeys, function(e) {
      return t._tracks[e];
    });
  }, r.prototype.stopTracks = function(t, e) {
    if (!t.length || !this._clip)
      return !0;
    for (var i = this._tracks, n = this._trackKeys, a = 0; a < t.length; a++) {
      var o = i[t[a]];
      o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < n.length; a++)
      if (!i[n[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, r.prototype.saveTo = function(t, e, i) {
    if (t) {
      e = e || this._trackKeys;
      for (var n = 0; n < e.length; n++) {
        var a = e[n], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, l = s[i ? 0 : s.length - 1];
          l && (t[a] = ys(l.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || Tt(t);
    for (var i = 0; i < e.length; i++) {
      var n = e[i], a = this._tracks[n];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[n]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, r;
})(), er = (function() {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return r.prototype.on = function(t, e, i, n) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof e == "function" && (n = i, i = e, e = null), !i || !t)
      return this;
    var o = this._$eventProcessor;
    e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === i)
        return this;
    var l = {
      h: i,
      query: e,
      ctx: n || this,
      callAtLast: i.zrEventfulCallAtLast
    }, u = a[t].length - 1, f = a[t][u];
    return f && f.callAtLast ? a[t].splice(u, 0, l) : a[t].push(l), this;
  }, r.prototype.isSilent = function(t) {
    var e = this._$handlers;
    return !e || !e[t] || !e[t].length;
  }, r.prototype.off = function(t, e) {
    var i = this._$handlers;
    if (!i)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (e) {
      if (i[t]) {
        for (var n = [], a = 0, o = i[t].length; a < o; a++)
          i[t][a].h !== e && n.push(i[t][a]);
        i[t] = n;
      }
      i[t] && i[t].length === 0 && delete i[t];
    } else
      delete i[t];
    return this;
  }, r.prototype.trigger = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = e.length, s = n.length, l = 0; l < s; l++) {
        var u = n[l];
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
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = e.length, s = e[o - 1], l = n.length, u = 0; u < l; u++) {
        var f = n[u];
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
})(), b0 = 1;
tt.hasGlobalWindow && (b0 = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Ys = b0, lc = 0.4, uc = "#333", fc = "#ccc", Ex = "#eee", ee = 1, va = 2, an = 4, xu = "__zr_normal__", Tu = Bl.concat(["ignore"]), kx = En(Bl, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), Gi = {}, Rx = new J(0, 0, 0, 0), Do = [], Ss = 0, Fl = 1, zl = (function() {
  function r(t) {
    this.id = Qy(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return r.prototype._init = function(t) {
    this.attr(t);
  }, r.prototype.drift = function(t, e, i) {
    switch (this.draggable) {
      case "horizontal":
        e = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var n = this.transform;
    n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.markRedraw();
  }, r.prototype.beforeUpdate = function() {
  }, r.prototype.afterUpdate = function() {
  }, r.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, r.prototype.updateInnerText = function(t) {
    var e = this._textContent;
    if (e && (!e.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var i = this.textConfig, n = i.local, a = e.innerTransformable, o = void 0, s = void 0, l = !1;
      a.parent = n ? this : null;
      var u = !1;
      a.copyTransform(e);
      var f = i.position != null, c = i.autoOverflowArea, h = void 0;
      if ((c || f) && (h = Rx, i.layoutRect ? h.copy(i.layoutRect) : h.copy(this.getBoundingRect()), n || h.applyTransform(this.transform)), f) {
        this.calculateTextPosition ? this.calculateTextPosition(Gi, i, h) : Fs(Gi, i, h), a.x = Gi.x, a.y = Gi.y, o = Gi.align, s = Gi.verticalAlign;
        var v = i.origin;
        if (v && i.rotation != null) {
          var d = void 0, p = void 0;
          v === "center" ? (d = h.width * 0.5, p = h.height * 0.5) : (d = Li(v[0], h.width), p = Li(v[1], h.height)), u = !0, a.originX = -a.x + d + (n ? 0 : h.x), a.originY = -a.y + p + (n ? 0 : h.y);
        }
      }
      i.rotation != null && (a.rotation = i.rotation);
      var m = i.offset;
      m && (a.x += m[0], a.y += m[1], u || (a.originX = -m[0], a.originY = -m[1]));
      var g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
      if (c) {
        var y = g.overflowRect = g.overflowRect || new J(0, 0, 0, 0);
        a.getLocalTransform(Do), so(Do, Do), J.copy(y, h), y.applyTransform(Do);
      } else
        g.overflowRect = null;
      var _ = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, b = void 0, S = void 0, w = void 0;
      _ && this.canBeInsideText() ? (b = i.insideFill, S = i.insideStroke, (b == null || b === "auto") && (b = this.getInsideTextFill()), (S == null || S === "auto") && (S = this.getInsideTextStroke(b), w = !0)) : (b = i.outsideFill, S = i.outsideStroke, (b == null || b === "auto") && (b = this.getOutsideFill()), (S == null || S === "auto") && (S = this.getOutsideStroke(b), w = !0)), b = b || "#000", (b !== g.fill || S !== g.stroke || w !== g.autoStroke || o !== g.align || s !== g.verticalAlign) && (l = !0, g.fill = b, g.stroke = S, g.autoStroke = w, g.align = o, g.verticalAlign = s, e.setDefaultTextStyle(g)), e.__dirty |= ee, l && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? fc : uc;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), i = typeof e == "string" && Le(e);
    i || (i = [255, 255, 255, 1]);
    for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
    return i[3] = 1, Rn(i, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, O(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string")
      this.attrKV(t, e);
    else if (K(t))
      for (var i = t, n = Tt(i), a = 0; a < n.length; a++) {
        var o = n[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, i = 0; i < this.animators.length; i++) {
      var n = this.animators[i], a = n.__fromStateTransition;
      if (!(n.getLoop() || a && a !== xu)) {
        var o = n.targetName, s = o ? e[o] : e;
        n.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, Tu);
  }, r.prototype._savePrimaryToNormal = function(t, e, i) {
    for (var n = 0; n < i.length; n++) {
      var a = i[n];
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
    this.useState(xu, !1, t);
  }, r.prototype.useState = function(t, e, i, n) {
    var a = t === xu, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, l = this.stateTransition;
      if (!(ut(s, t) >= 0 && (e || s.length === 1))) {
        var u;
        if (this.stateProxy && !a && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !a) {
          Eh("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(u);
        var f = this._textContent, c = Yd(this, f, u, n);
        c && !this.__inHover && (this.__inHover = c), this._applyStateObj(t, u, this._normalState, e, qd(this, i, l), l);
        var h = this._textGuide;
        return f && f.useState(t, e, i, !!c), h && h.useState(t, e, i, !!c), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !c && this.__inHover && (this.__inHover = Ss, this.__dirty &= ~ee), u;
      }
    }
  }, r.prototype.useStates = function(t, e, i) {
    if (!t.length)
      this.clearStates();
    else {
      var n = [], a = this.currentStates, o = t.length, s = o === a.length;
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
        this.stateProxy && (f = this.stateProxy(u, t)), f || (f = this.states[u]), f && n.push(f);
      }
      var c = n[o - 1], h = this._textContent, v = Yd(this, h, c, i);
      v && !this.__inHover && (this.__inHover = v);
      var d = this._mergeStates(n), p = this.stateTransition;
      this.saveCurrentToNormalState(d), this._applyStateObj(t.join(","), d, this._normalState, !1, qd(this, e, p), p);
      var m = this._textGuide;
      h && h.useStates(t, e, !!v), m && m.useStates(t, e, !!v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this.__inHover = Ss, this.__dirty &= ~ee);
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
    var e = ut(this.currentStates, t);
    if (e >= 0) {
      var i = this.currentStates.slice();
      i.splice(e, 1), this.useStates(i);
    }
  }, r.prototype.replaceState = function(t, e, i) {
    var n = this.currentStates.slice(), a = ut(n, t), o = ut(n, e) >= 0;
    a >= 0 ? o ? n.splice(a, 1) : n[a] = e : i && !o && n.push(e), this.useStates(n);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, i, n = 0; n < t.length; n++) {
      var a = t[n];
      O(e, a), a.textConfig && (i = i || {}, O(i, a.textConfig));
    }
    return i && (e.textConfig = i), e;
  }, r.prototype._applyStateObj = function(t, e, i, n, a, o) {
    if (this.__inHover !== Fl) {
      var s = !(e && n);
      e && e.textConfig ? (this.textConfig = O({}, n ? this.textConfig : i.textConfig), O(this.textConfig, e.textConfig)) : s && i.textConfig && (this.textConfig = i.textConfig);
      for (var l = {}, u = !1, f = 0; f < Tu.length; f++) {
        var c = Tu[f], h = a && kx[c];
        e && e[c] != null ? h ? (u = !0, l[c] = e[c]) : this[c] = e[c] : s && i[c] != null && (h ? (u = !0, l[c] = i[c]) : this[c] = i[c]);
      }
      if (!a)
        for (var f = 0; f < this.animators.length; f++) {
          var v = this.animators[f], d = v.targetName;
          v.getLoop() || v.__changeFinalValue(d ? (e || i)[d] : e || i);
        }
      u && this._transitionState(t, l, o);
    }
  }, r.prototype._attachComponent = function(t) {
    if (!(t.__zr && !t.__hostTarget) && t !== this) {
      var e = this.__zr;
      e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
    }
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
    e !== t && (e && e !== t && this.removeTextContent(), t.innerTransformable = new lo(), this._attachComponent(t), this._textContent = t, this.markRedraw());
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), O(this.textConfig, t), this.markRedraw();
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
    this.__dirty |= ee;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, r.prototype.dirty = function() {
    this.markRedraw();
  }, r.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var i = 0; i < e.length; i++)
          t.animation.addAnimator(e[i]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, r.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var i = 0; i < e.length; i++)
          t.animation.removeAnimator(e[i]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, r.prototype.animate = function(t, e, i) {
    var n = t ? this[t] : this, a = new $h(n, e, i);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var i = this.__zr, n = this;
    t.during(function() {
      n.updateDuringAnimation(e);
    }).done(function() {
      var a = n.animators, o = ut(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), i && i.animation.addAnimator(t), i && i.wakeUp();
  }, r.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, r.prototype.stopAnimation = function(t, e) {
    for (var i = this.animators, n = i.length, a = [], o = 0; o < n; o++) {
      var s = i[o];
      !t || t === s.scope ? s.stop(e) : a.push(s);
    }
    return this.animators = a, this;
  }, r.prototype.animateTo = function(t, e, i) {
    Cu(this, t, e, i);
  }, r.prototype.animateFrom = function(t, e, i) {
    Cu(this, t, e, i, !0);
  }, r.prototype._transitionState = function(t, e, i, n) {
    for (var a = Cu(this, e, i, n), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.ignoreHostSilent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = !1, t.__inHover = Ss, t.__dirty = ee;
    function e(i, n, a, o) {
      Object.defineProperty(t, i, {
        get: function() {
          if (!this[n]) {
            var l = this[n] = [];
            s(this, l);
          }
          return this[n];
        },
        set: function(l) {
          this[a] = l[0], this[o] = l[1], this[n] = l, s(this, l);
        }
      });
      function s(l, u) {
        Object.defineProperty(u, 0, {
          get: function() {
            return l[a];
          },
          set: function(f) {
            l[a] = f;
          }
        }), Object.defineProperty(u, 1, {
          get: function() {
            return l[o];
          },
          set: function(f) {
            l[o] = f;
          }
        });
      }
    }
    Object.defineProperty && (e("position", "_legacyPos", "x", "y"), e("scale", "_legacyScale", "scaleX", "scaleY"), e("origin", "_legacyOrigin", "originX", "originY"));
  })(), r;
})();
Re(zl, er);
Re(zl, lo);
function Cu(r, t, e, i, n) {
  e = e || {};
  var a = [];
  S0(r, "", r, t, e, i, a, n);
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
function Au(r, t, e) {
  for (var i = 0; i < e; i++)
    r[i] = t[i];
}
function Ox(r) {
  return re(r[0]);
}
function Nx(r, t, e) {
  if (re(t[e]))
    if (re(r[e]) || (r[e] = []), ie(t[e])) {
      var i = t[e].length;
      r[e].length !== i && (r[e] = new t[e].constructor(i), Au(r[e], t[e], i));
    } else {
      var n = t[e], a = r[e], o = n.length;
      if (Ox(n))
        for (var s = n[0].length, l = 0; l < o; l++)
          a[l] ? Au(a[l], n[l], s) : a[l] = Array.prototype.slice.call(n[l]);
      else
        Au(a, n, o);
      a.length = n.length;
    }
  else
    r[e] = t[e];
}
function Bx(r, t) {
  return r === t || re(r) && re(t) && Fx(r, t);
}
function Fx(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var i = 0; i < e; i++)
    if (r[i] !== t[i])
      return !1;
  return !0;
}
function S0(r, t, e, i, n, a, o, s) {
  for (var l = Tt(i), u = n.duration, f = n.delay, c = n.additive, h = n.setToFinal, v = !K(a), d = r.animators, p = [], m = 0; m < l.length; m++) {
    var g = l[m], y = i[g];
    if (y != null && e[g] != null && (v || a[g]))
      if (K(y) && !re(y) && !El(y)) {
        if (t) {
          s || (e[g] = y, r.updateDuringAnimation(t));
          continue;
        }
        S0(r, g, e[g], y, n, a && a[g], o, s);
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
          var x = ut(d, S);
          d.splice(x, 1);
        }
      }
    }
  if (n.force || (p = Rt(p, function(A) {
    return !Bx(i[A], e[A]);
  }), _ = p.length), _ > 0 || n.force && !o.length) {
    var T = void 0, C = void 0, D = void 0;
    if (s) {
      C = {}, h && (T = {});
      for (var b = 0; b < _; b++) {
        var g = p[b];
        C[g] = e[g], h ? T[g] = i[g] : e[g] = i[g];
      }
    } else if (h) {
      D = {};
      for (var b = 0; b < _; b++) {
        var g = p[b];
        D[g] = ys(e[g]), Nx(e, i, g);
      }
    }
    var S = new $h(e, !1, !1, c ? Rt(d, function(L) {
      return L.targetName === t;
    }) : null);
    S.targetName = t, n.scope && (S.scope = n.scope), h && T && S.whenWithKeys(0, T, p), D && S.whenWithKeys(0, D, p), S.whenWithKeys(u ?? 500, s ? C : i, p).delay(f || 0), r.addAnimator(S, t), o.push(S);
  }
}
function Yd(r, t, e, i) {
  return !(e && e.hoverLayer || i) || Xd(r) || t && Xd(t) ? Ss : Fl;
}
function Xd(r) {
  return r.type === "text" || r.type === "tspan";
}
function qd(r, t, e) {
  return !t && !r.__inHover && e && e.duration > 0;
}
var cc = "__zr_style_" + Math.round(Math.random() * 10), Ti = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, $l = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
Ti[cc] = !0;
var Zd = ["z", "z2", "invisible"], zx = ["invisible"], uo = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var i = Tt(e), n = 0; n < i.length; n++) {
      var a = i[n];
      a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function(e) {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(e, i, n, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && $x(this, e, i) || o && !o[0] && !o[3])
      return !1;
    if (n && this.__clipPaths && this.__clipPaths.length) {
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
  }, t.prototype.contain = function(e, i) {
    return this.rectContain(e, i);
  }, t.prototype.traverse = function(e, i) {
    e.call(i, this);
  }, t.prototype.rectContain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect();
    return a.contain(n[0], n[1]);
  }, t.prototype.getPaintRect = function() {
    var e = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var i = this.transform, n = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, l = a.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new J(0, 0, 0, 0)), i ? J.applyTransform(e, n, i) : e.copy(n), (o || s || l) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(l), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + l - o));
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
  }, t.prototype.attrKV = function(e, i) {
    e !== "style" ? r.prototype.attrKV.call(this, e, i) : this.style ? this.setStyle(i) : this.useStyle(i);
  }, t.prototype.setStyle = function(e, i) {
    return typeof e == "string" ? this.style[e] = i : O(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= va, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & va);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~va;
  }, t.prototype.createStyle = function(e) {
    return kl(Ti, e);
  }, t.prototype.useStyle = function(e) {
    e[cc] || (e = this.createStyle(e)), this.style = e, this.dirtyStyle();
  }, t.prototype._useHoverStyle = function(e) {
    this.__hoverStyle = e;
  }, t.prototype.isStyleObject = function(e) {
    return e[cc];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, i, Zd);
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
    var l = !(i && a), u = this.__inHover === Fl, f;
    if (i && i.style ? o ? a ? f = i.style : (f = this._mergeStyle(this.createStyle(), n.style), this._mergeStyle(f, i.style)) : (f = this._mergeStyle(this.createStyle(), a ? this.style : n.style), this._mergeStyle(f, i.style)) : l && (f = n.style), f)
      if (o) {
        var c = this.style;
        if (this.style = this.createStyle(l ? {} : c), l)
          for (var h = Tt(c), v = 0; v < h.length; v++) {
            var d = h[v];
            d in f && (f[d] = f[d], this.style[d] = c[d]);
          }
        for (var p = Tt(f), v = 0; v < p.length; v++) {
          var d = p[v];
          this.style[d] = this.style[d];
        }
        this._transitionState(e, {
          style: f
        }, s, this.getAnimationStyleProps());
      } else
        u ? this._useHoverStyle(f) : this.useStyle(f);
    if (!u)
      for (var m = this.__inHover ? zx : Zd, v = 0; v < m.length; v++) {
        var d = m[v];
        i && i[d] != null ? this[d] = i[d] : l && n[d] != null && (this[d] = n[d]);
      }
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
      var o = e[a];
      o.style && (n = n || {}, this._mergeStyle(n, o.style));
    }
    return n && (i.style = n), i;
  }, t.prototype._mergeStyle = function(e, i) {
    return O(e, i), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return $l;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = 0, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = ee | va;
  })(), t;
})(zl), Du = new J(0, 0, 0, 0), Mu = new J(0, 0, 0, 0);
function $x(r, t, e) {
  return Du.copy(r.getBoundingRect()), r.transform && Du.applyTransform(r.transform), Mu.width = t, Mu.height = e, !Du.intersect(Mu);
}
var ge = Math.min, me = Math.max, Iu = Math.sin, Lu = Math.cos, Qr = Math.PI * 2, Mo = kn(), Io = kn(), Lo = kn();
function Kd(r, t, e, i, n, a) {
  n[0] = ge(r, e), n[1] = ge(t, i), a[0] = me(r, e), a[1] = me(t, i);
}
var Qd = [], jd = [];
function Hx(r, t, e, i, n, a, o, s, l, u) {
  var f = p0, c = Bt, h = f(r, e, n, o, Qd);
  l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
  for (var v = 0; v < h; v++) {
    var d = c(r, e, n, o, Qd[v]);
    l[0] = ge(d, l[0]), u[0] = me(d, u[0]);
  }
  h = f(t, i, a, s, jd);
  for (var v = 0; v < h; v++) {
    var p = c(t, i, a, s, jd[v]);
    l[1] = ge(p, l[1]), u[1] = me(p, u[1]);
  }
  l[0] = ge(r, l[0]), u[0] = me(r, u[0]), l[0] = ge(o, l[0]), u[0] = me(o, u[0]), l[1] = ge(t, l[1]), u[1] = me(t, u[1]), l[1] = ge(s, l[1]), u[1] = me(s, u[1]);
}
function Vx(r, t, e, i, n, a, o, s) {
  var l = g0, u = jt, f = me(ge(l(r, e, n), 1), 0), c = me(ge(l(t, i, a), 1), 0), h = u(r, e, n, f), v = u(t, i, a, c);
  o[0] = ge(r, n, h), o[1] = ge(t, a, v), s[0] = me(r, n, h), s[1] = me(t, a, v);
}
function Gx(r, t, e, i, n, a, o, s, l) {
  var u = sn, f = ln, c = Math.abs(n - a);
  if (c % Qr < 1e-4 && c > 1e-4) {
    s[0] = r - e, s[1] = t - i, l[0] = r + e, l[1] = t + i;
    return;
  }
  if (Mo[0] = Lu(n) * e + r, Mo[1] = Iu(n) * i + t, Io[0] = Lu(a) * e + r, Io[1] = Iu(a) * i + t, u(s, Mo, Io), f(l, Mo, Io), n = n % Qr, n < 0 && (n = n + Qr), a = a % Qr, a < 0 && (a = a + Qr), n > a && !o ? a += Qr : n < a && o && (n += Qr), o) {
    var h = a;
    a = n, n = h;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > n && (Lo[0] = Lu(v) * e + r, Lo[1] = Iu(v) * i + t, u(s, Lo, s), f(l, Lo, l));
}
var vt = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, jr = [], Jr = [], ze = [], _r = [], $e = [], He = [], Pu = Math.min, Eu = Math.max, ti = Math.cos, ei = Math.sin, ir = Math.abs, hc = Math.PI, Dr = hc * 2, ku = typeof Float32Array < "u", Yn = [];
function Ru(r) {
  var t = Math.round(r / hc * 1e8) / 1e8;
  return t % 2 * hc;
}
function Ux(r, t) {
  var e = Ru(r[0]);
  e < 0 && (e += Dr);
  var i = e - r[0], n = r[1];
  n += i, !t && n - e >= Dr ? n = e + Dr : t && e - n >= Dr ? n = e - Dr : !t && e > n ? n = e + (Dr - Ru(e - n)) : t && e < n && (n = e - (Dr - Ru(n - e))), r[0] = e, r[1] = n;
}
var Pi = (function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, i) {
    i = i || 0, i > 0 && (this._ux = ir(i / Ys / t) || 0, this._uy = ir(i / Ys / e) || 0);
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
    var i = ir(t - this._xi), n = ir(e - this._yi), a = i > this._ux || n > this._uy;
    if (this.addData(vt.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = i * i + n * n;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, i, n, a, o) {
    return this._drawPendingPt(), this.addData(vt.C, t, e, i, n, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, i, n, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, i, n) {
    return this._drawPendingPt(), this.addData(vt.Q, t, e, i, n), this._ctx && this._ctx.quadraticCurveTo(t, e, i, n), this._xi = i, this._yi = n, this;
  }, r.prototype.arc = function(t, e, i, n, a, o) {
    this._drawPendingPt(), Yn[0] = n, Yn[1] = a, Ux(Yn, o), n = Yn[0], a = Yn[1];
    var s = a - n;
    return this.addData(vt.A, t, e, i, i, n, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, a, o), this._xi = ti(a) * i + t, this._yi = ei(a) * i + e, this;
  }, r.prototype.arcTo = function(t, e, i, n, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, i, n, a), this;
  }, r.prototype.rect = function(t, e, i, n) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, i, n), this.addData(vt.R, t, e, i, n), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(vt.Z);
    var t = this._ctx, e = this._x0, i = this._y0;
    return t && t.closePath(), this._xi = e, this._yi = i, this;
  }, r.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, r.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.setData = function(t) {
    if (this._saveData) {
      var e = t.length;
      !(this.data && this.data.length === e) && ku && (this.data = new Float32Array(e));
      for (var i = 0; i < e; i++)
        this.data[i] = t[i];
      this._len = e;
    }
  }, r.prototype.appendPath = function(t) {
    if (this._saveData) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, i = 0, n = this._len, a = 0; a < e; a++)
        i += t[a].len();
      var o = this.data;
      if (ku && (o instanceof Float32Array || !o) && (this.data = new Float32Array(n + i), n > 0 && o))
        for (var s = 0; s < n; s++)
          this.data[s] = o[s];
      for (var a = 0; a < e; a++)
        for (var l = t[a].data, s = 0; s < l.length; s++)
          this.data[n++] = l[s];
      this._len = n;
    }
  }, r.prototype.addData = function(t, e, i, n, a, o, s, l, u) {
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
      t instanceof Array && (t.length = this._len, ku && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    ze[0] = ze[1] = $e[0] = $e[1] = Number.MAX_VALUE, _r[0] = _r[1] = He[0] = He[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, i = 0, n = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], l = o === 1;
      switch (l && (e = t[o], i = t[o + 1], n = e, a = i), s) {
        case vt.M:
          e = n = t[o++], i = a = t[o++], $e[0] = n, $e[1] = a, He[0] = n, He[1] = a;
          break;
        case vt.L:
          Kd(e, i, t[o], t[o + 1], $e, He), e = t[o++], i = t[o++];
          break;
        case vt.C:
          Hx(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], $e, He), e = t[o++], i = t[o++];
          break;
        case vt.Q:
          Vx(e, i, t[o++], t[o++], t[o], t[o + 1], $e, He), e = t[o++], i = t[o++];
          break;
        case vt.A:
          var u = t[o++], f = t[o++], c = t[o++], h = t[o++], v = t[o++], d = t[o++] + v;
          o += 1;
          var p = !t[o++];
          l && (n = ti(v) * c + u, a = ei(v) * h + f), Gx(u, f, c, h, v, d, p, $e, He), e = ti(d) * c + u, i = ei(d) * h + f;
          break;
        case vt.R:
          n = e = t[o++], a = i = t[o++];
          var m = t[o++], g = t[o++];
          Kd(n, a, n + m, a + g, $e, He);
          break;
        case vt.Z:
          e = n, i = a;
          break;
      }
      sn(ze, ze, $e), ln(_r, _r, He);
    }
    return o === 0 && (ze[0] = ze[1] = _r[0] = _r[1] = 0), new J(ze[0], ze[1], _r[0] - ze[0], _r[1] - ze[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, i = this._ux, n = this._uy, a = 0, o = 0, s = 0, l = 0;
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
          (ir(y) > i || ir(_) > n || h === e - 1) && (p = Math.sqrt(y * y + _ * _), a = m, o = g);
          break;
        }
        case vt.C: {
          var b = t[h++], S = t[h++], m = t[h++], g = t[h++], w = t[h++], x = t[h++];
          p = gx(a, o, b, S, m, g, w, x, 10), a = w, o = x;
          break;
        }
        case vt.Q: {
          var b = t[h++], S = t[h++], m = t[h++], g = t[h++];
          p = _x(a, o, b, S, m, g, 10), a = m, o = g;
          break;
        }
        case vt.A:
          var T = t[h++], C = t[h++], D = t[h++], A = t[h++], L = t[h++], I = t[h++], P = I + L;
          h += 1, d && (s = ti(L) * D + T, l = ei(L) * A + C), p = Eu(D, A) * Pu(Dr, Math.abs(I)), a = ti(P) * D + T, o = ei(P) * A + C;
          break;
        case vt.R: {
          s = a = t[h++], l = o = t[h++];
          var E = t[h++], k = t[h++];
          p = E * 2 + k * 2;
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
    var i = this.data, n = this._ux, a = this._uy, o = this._len, s, l, u, f, c, h, v = e < 1, d, p, m = 0, g = 0, y, _ = 0, b, S;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, p = this._pathLen, y = e * p, !y)))
      t: for (var w = 0; w < o; ) {
        var x = i[w++], T = w === 1;
        switch (T && (u = i[w], f = i[w + 1], s = u, l = f), x !== vt.L && _ > 0 && (t.lineTo(b, S), _ = 0), x) {
          case vt.M:
            s = u = i[w++], l = f = i[w++], t.moveTo(u, f);
            break;
          case vt.L: {
            c = i[w++], h = i[w++];
            var C = ir(c - u), D = ir(h - f);
            if (C > n || D > a) {
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
              var I = C * C + D * D;
              I > _ && (b = c, S = h, _ = I);
            }
            break;
          }
          case vt.C: {
            var P = i[w++], E = i[w++], k = i[w++], z = i[w++], R = i[w++], $ = i[w++];
            if (v) {
              var A = d[g++];
              if (m + A > y) {
                var L = (y - m) / A;
                Vs(u, P, k, R, L, jr), Vs(f, E, z, $, L, Jr), t.bezierCurveTo(jr[1], Jr[1], jr[2], Jr[2], jr[3], Jr[3]);
                break t;
              }
              m += A;
            }
            t.bezierCurveTo(P, E, k, z, R, $), u = R, f = $;
            break;
          }
          case vt.Q: {
            var P = i[w++], E = i[w++], k = i[w++], z = i[w++];
            if (v) {
              var A = d[g++];
              if (m + A > y) {
                var L = (y - m) / A;
                Gs(u, P, k, L, jr), Gs(f, E, z, L, Jr), t.quadraticCurveTo(jr[1], Jr[1], jr[2], Jr[2]);
                break t;
              }
              m += A;
            }
            t.quadraticCurveTo(P, E, k, z), u = k, f = z;
            break;
          }
          case vt.A:
            var Y = i[w++], U = i[w++], q = i[w++], Q = i[w++], H = i[w++], it = i[w++], ot = i[w++], Ut = !i[w++], Ae = q > Q ? q : Q, wt = ir(q - Q) > 1e-3, kt = H + it, et = !1;
            if (v) {
              var A = d[g++];
              m + A > y && (kt = H + it * (y - m) / A, et = !0), m += A;
            }
            if (wt && t.ellipse ? t.ellipse(Y, U, q, Q, ot, H, kt, Ut) : t.arc(Y, U, Ae, H, kt, Ut), et)
              break t;
            T && (s = ti(H) * q + Y, l = ei(H) * Q + U), u = ti(kt) * q + Y, f = ei(kt) * Q + U;
            break;
          case vt.R:
            s = u = i[w], l = f = i[w + 1], c = i[w++], h = i[w++];
            var st = i[w++], Vr = i[w++];
            if (v) {
              var A = d[g++];
              if (m + A > y) {
                var Wt = y - m;
                t.moveTo(c, h), t.lineTo(c + Pu(Wt, st), h), Wt -= st, Wt > 0 && t.lineTo(c + st, h + Pu(Wt, Vr)), Wt -= Vr, Wt > 0 && t.lineTo(c + Eu(st - Wt, 0), h + Vr), Wt -= st, Wt > 0 && t.lineTo(c, h + Eu(Vr - Wt, 0));
                break t;
              }
              m += A;
            }
            t.rect(c, h, st, Vr);
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
function Ui(r, t, e, i, n, a, o) {
  if (n === 0)
    return !1;
  var s = n, l = 0, u = r;
  if (o > t + s && o > i + s || o < t - s && o < i - s || a > r + s && a > e + s || a < r - s && a < e - s)
    return !1;
  if (r !== e)
    l = (t - i) / (r - e), u = (r * i - e * t) / (r - e);
  else
    return Math.abs(a - r) <= s / 2;
  var f = l * a - o + u, c = f * f / (l * l + 1);
  return c <= s / 2 * s / 2;
}
function Wx(r, t, e, i, n, a, o, s, l, u, f) {
  if (l === 0)
    return !1;
  var c = l;
  if (f > t + c && f > i + c && f > a + c && f > s + c || f < t - c && f < i - c && f < a - c && f < s - c || u > r + c && u > e + c && u > n + c && u > o + c || u < r - c && u < e - c && u < n - c && u < o - c)
    return !1;
  var h = px(r, t, e, i, n, a, o, s, u, f);
  return h <= c / 2;
}
function Yx(r, t, e, i, n, a, o, s, l) {
  if (o === 0)
    return !1;
  var u = o;
  if (l > t + u && l > i + u && l > a + u || l < t - u && l < i - u && l < a - u || s > r + u && s > e + u && s > n + u || s < r - u && s < e - u && s < n - u)
    return !1;
  var f = yx(r, t, e, i, n, a, s, l);
  return f <= u / 2;
}
var Jd = Math.PI * 2;
function Po(r) {
  return r %= Jd, r < 0 && (r += Jd), r;
}
var Xn = Math.PI * 2;
function Xx(r, t, e, i, n, a, o, s, l) {
  if (o === 0)
    return !1;
  var u = o;
  s -= r, l -= t;
  var f = Math.sqrt(s * s + l * l);
  if (f - u > e || f + u < e)
    return !1;
  if (Math.abs(i - n) % Xn < 1e-4)
    return !0;
  if (a) {
    var c = i;
    i = Po(n), n = Po(c);
  } else
    i = Po(i), n = Po(n);
  i > n && (n += Xn);
  var h = Math.atan2(l, s);
  return h < 0 && (h += Xn), h >= i && h <= n || h + Xn >= i && h + Xn <= n;
}
function ri(r, t, e, i, n, a) {
  if (a > t && a > i || a < t && a < i || i === t)
    return 0;
  var o = (a - t) / (i - t), s = i < t ? 1 : -1;
  (o === 1 || o === 0) && (s = i < t ? 0.5 : -0.5);
  var l = o * (e - r) + r;
  return l === n ? 1 / 0 : l > n ? s : 0;
}
var br = Pi.CMD, ii = Math.PI * 2, qx = 1e-4;
function Zx(r, t) {
  return Math.abs(r - t) < qx;
}
var Yt = [-1, -1, -1], de = [-1, -1];
function Kx() {
  var r = de[0];
  de[0] = de[1], de[1] = r;
}
function Qx(r, t, e, i, n, a, o, s, l, u) {
  if (u > t && u > i && u > a && u > s || u < t && u < i && u < a && u < s)
    return 0;
  var f = Hs(t, i, a, s, u, Yt);
  if (f === 0)
    return 0;
  for (var c = 0, h = -1, v = void 0, d = void 0, p = 0; p < f; p++) {
    var m = Yt[p], g = m === 0 || m === 1 ? 0.5 : 1, y = Bt(r, e, n, o, m);
    y < l || (h < 0 && (h = p0(t, i, a, s, de), de[1] < de[0] && h > 1 && Kx(), v = Bt(t, i, a, s, de[0]), h > 1 && (d = Bt(t, i, a, s, de[1]))), h === 2 ? m < de[0] ? c += v < t ? g : -g : m < de[1] ? c += d < v ? g : -g : c += s < d ? g : -g : m < de[0] ? c += v < t ? g : -g : c += s < v ? g : -g);
  }
  return c;
}
function jx(r, t, e, i, n, a, o, s) {
  if (s > t && s > i && s > a || s < t && s < i && s < a)
    return 0;
  var l = mx(t, i, a, s, Yt);
  if (l === 0)
    return 0;
  var u = g0(t, i, a);
  if (u >= 0 && u <= 1) {
    for (var f = 0, c = jt(t, i, a, u), h = 0; h < l; h++) {
      var v = Yt[h] === 0 || Yt[h] === 1 ? 0.5 : 1, d = jt(r, e, n, Yt[h]);
      d < o || (Yt[h] < u ? f += c < t ? v : -v : f += a < c ? v : -v);
    }
    return f;
  } else {
    var v = Yt[0] === 0 || Yt[0] === 1 ? 0.5 : 1, d = jt(r, e, n, Yt[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function Jx(r, t, e, i, n, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var l = Math.sqrt(e * e - s * s);
  Yt[0] = -l, Yt[1] = l;
  var u = Math.abs(i - n);
  if (u < 1e-4)
    return 0;
  if (u >= ii - 1e-4) {
    i = 0, n = ii;
    var f = a ? 1 : -1;
    return o >= Yt[0] + r && o <= Yt[1] + r ? f : 0;
  }
  if (i > n) {
    var c = i;
    i = n, n = c;
  }
  i < 0 && (i += ii, n += ii);
  for (var h = 0, v = 0; v < 2; v++) {
    var d = Yt[v];
    if (d + r > o) {
      var p = Math.atan2(s, d), f = a ? 1 : -1;
      p < 0 && (p = ii + p), (p >= i && p <= n || p + ii >= i && p + ii <= n) && (p > Math.PI / 2 && p < Math.PI * 1.5 && (f = -f), h += f);
    }
  }
  return h;
}
function w0(r, t, e, i, n) {
  for (var a = r.data, o = r.len(), s = 0, l = 0, u = 0, f = 0, c = 0, h, v, d = 0; d < o; ) {
    var p = a[d++], m = d === 1;
    switch (p === br.M && d > 1 && (e || (s += ri(l, u, f, c, i, n))), m && (l = a[d], u = a[d + 1], f = l, c = u), p) {
      case br.M:
        f = a[d++], c = a[d++], l = f, u = c;
        break;
      case br.L:
        if (e) {
          if (Ui(l, u, a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += ri(l, u, a[d], a[d + 1], i, n) || 0;
        l = a[d++], u = a[d++];
        break;
      case br.C:
        if (e) {
          if (Wx(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += Qx(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        l = a[d++], u = a[d++];
        break;
      case br.Q:
        if (e) {
          if (Yx(l, u, a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += jx(l, u, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        l = a[d++], u = a[d++];
        break;
      case br.A:
        var g = a[d++], y = a[d++], _ = a[d++], b = a[d++], S = a[d++], w = a[d++];
        d += 1;
        var x = !!(1 - a[d++]);
        h = Math.cos(S) * _ + g, v = Math.sin(S) * b + y, m ? (f = h, c = v) : s += ri(l, u, h, v, i, n);
        var T = (i - g) * b / _ + g;
        if (e) {
          if (Xx(g, y, b, S, S + w, x, t, T, n))
            return !0;
        } else
          s += Jx(g, y, b, S, S + w, x, T, n);
        l = Math.cos(S + w) * _ + g, u = Math.sin(S + w) * b + y;
        break;
      case br.R:
        f = l = a[d++], c = u = a[d++];
        var C = a[d++], D = a[d++];
        if (h = f + C, v = c + D, e) {
          if (Ui(f, c, h, c, t, i, n) || Ui(h, c, h, v, t, i, n) || Ui(h, v, f, v, t, i, n) || Ui(f, v, f, c, t, i, n))
            return !0;
        } else
          s += ri(h, c, h, v, i, n), s += ri(f, v, f, c, i, n);
        break;
      case br.Z:
        if (e) {
          if (Ui(l, u, f, c, t, i, n))
            return !0;
        } else
          s += ri(l, u, f, c, i, n);
        l = f, u = c;
        break;
    }
  }
  return !e && !Zx(u, c) && (s += ri(l, u, f, c, i, n) || 0), s !== 0;
}
function tT(r, t, e) {
  return w0(r, 0, !1, t, e);
}
function eT(r, t, e, i) {
  return w0(r, t, !0, e, i);
}
var x0 = yt({
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
}, Ti), rT = {
  style: yt({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, $l.style)
}, Ou = Bl.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), dt = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.update = function() {
    var e = this;
    r.prototype.update.call(this);
    var i = this.style;
    if (i.decal) {
      var n = this._decalEl = this._decalEl || new t();
      n.buildPath === t.prototype.buildPath && (n.buildPath = function(l) {
        e.buildPath(l, e.shape);
      }), n.silent = !0;
      var a = n.style;
      for (var o in i)
        a[o] !== i[o] && (a[o] = i[o]);
      a.fill = i.fill ? i.decal : null, a.decal = null, a.shadowColor = null, i.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Ou.length; ++s)
        n[Ou[s]] = this[Ou[s]];
      n.__dirty |= ee;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var i = Tt(e);
    this.shape = this.getDefaultShape();
    var n = this.getDefaultStyle();
    n && this.useStyle(n);
    for (var a = 0; a < i.length; a++) {
      var o = i[a], s = e[o];
      o === "style" ? this.style ? O(this.style, s) : this.useStyle(s) : o === "shape" ? O(this.shape, s) : r.prototype.attrKV.call(this, o, s);
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
      if (W(e)) {
        var i = Ws(e, 0);
        return i > 0.5 ? uc : i > 0.2 ? Ex : fc;
      } else if (e)
        return fc;
    }
    return uc;
  }, t.prototype.getInsideTextStroke = function(e) {
    var i = this.style.fill;
    if (W(i)) {
      var n = this.__zr, a = !!(n && n.isDarkMode()), o = Ws(e, 0) < lc;
      if (a === o)
        return i;
    }
  }, t.prototype.buildPath = function(e, i, n) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~an;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Pi(!1);
  }, t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return !(i == null || i === "none" || !(e.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.getBoundingRect = function() {
    var e = this._rect, i = this.style, n = !e;
    if (n) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & an) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || n) {
        s.copy(e);
        var l = i.strokeNoScale ? this.getLineScale() : 1, u = i.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          u = Math.max(u, f ?? 4);
        }
        l > 1e-10 && (s.width += u / l, s.height += u / l, s.x -= u / l / 2, s.y -= u / l / 2);
      }
      return s;
    }
    return e;
  }, t.prototype.contain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect(), o = this.style;
    if (e = n[0], i = n[1], a.contain(e, i)) {
      var s = this.path;
      if (this.hasStroke()) {
        var l = o.lineWidth, u = o.strokeNoScale ? this.getLineScale() : 1;
        if (u > 1e-10 && (this.hasFill() || (l = Math.max(l, this.strokeContainThreshold)), eT(s, l / u, e, i)))
          return !0;
      }
      if (this.hasFill())
        return tT(s, e, i);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= an, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(e) {
    return this.animate("shape", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e === "shape" ? this.setShape(i) : r.prototype.attrKV.call(this, e, i);
  }, t.prototype.setShape = function(e, i) {
    var n = this.shape;
    return n || (n = this.shape = {}), typeof e == "string" ? n[e] = i : O(n, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & an);
  }, t.prototype.createStyle = function(e) {
    return kl(x0, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.shape && !i.shape && (i.shape = O({}, this.shape));
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    if (r.prototype._applyStateObj.call(this, e, i, n, a, o, s), this.__inHover !== Fl) {
      var l = !(i && a), u;
      if (i && i.shape ? o ? a ? u = i.shape : (u = O({}, n.shape), O(u, i.shape)) : (u = O({}, a ? this.shape : n.shape), O(u, i.shape)) : l && (u = n.shape), u)
        if (o) {
          this.shape = O({}, this.shape);
          for (var f = {}, c = Tt(u), h = 0; h < c.length; h++) {
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
    for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
      var o = e[a];
      o.shape && (n = n || {}, this._mergeStyle(n, o.shape));
    }
    return n && (i.shape = n), i;
  }, t.prototype.getAnimationStyleProps = function() {
    return rT;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var i = (function(a) {
      N(o, a);
      function o(s) {
        var l = a.call(this, s) || this;
        return e.init && e.init.call(l, s), l;
      }
      return o.prototype.getDefaultStyle = function() {
        return nt(e.style);
      }, o.prototype.getDefaultShape = function() {
        return nt(e.shape);
      }, o;
    })(t);
    for (var n in e)
      typeof e[n] == "function" && (i.prototype[n] = e[n]);
    return i;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = ee | va | an;
  })(), t;
})(uo), iT = yt({
  strokeFirst: !0,
  font: Fr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, x0), Xs = (function(r) {
  N(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    return h0(this.style);
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.createStyle = function(e) {
    return kl(iT, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    return this._rect || (this._rect = vx(this.style)), this._rect;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.dirtyRectTolerance = 10;
  })(), t;
})(uo);
Xs.prototype.type = "tspan";
var nT = yt({
  x: 0,
  y: 0
}, Ti), aT = {
  style: yt({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, $l.style)
};
function oT(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var Hr = (function(r) {
  N(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return kl(nT, e);
  }, t.prototype._getSize = function(e) {
    var i = this.style, n = i[e];
    if (n != null)
      return n;
    var a = oT(i.image) ? i.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = i[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return aT;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new J(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
})(uo);
Hr.prototype.type = "image";
function sT(r, t) {
  var e = t.x, i = t.y, n = t.width, a = t.height, o = t.r, s, l, u, f;
  n < 0 && (e = e + n, n = -n), a < 0 && (i = i + a, a = -a), typeof o == "number" ? s = l = u = f = o : o instanceof Array ? o.length === 1 ? s = l = u = f = o[0] : o.length === 2 ? (s = u = o[0], l = f = o[1]) : o.length === 3 ? (s = o[0], l = f = o[1], u = o[2]) : (s = o[0], l = o[1], u = o[2], f = o[3]) : s = l = u = f = 0;
  var c;
  s + l > n && (c = s + l, s *= n / c, l *= n / c), u + f > n && (c = u + f, u *= n / c, f *= n / c), l + u > a && (c = l + u, l *= a / c, u *= a / c), s + f > a && (c = s + f, s *= a / c, f *= a / c), r.moveTo(e + s, i), r.lineTo(e + n - l, i), l !== 0 && r.arc(e + n - l, i + l, l, -Math.PI / 2, 0), r.lineTo(e + n, i + a - u), u !== 0 && r.arc(e + n - u, i + a - u, u, 0, Math.PI / 2), r.lineTo(e + f, i + a), f !== 0 && r.arc(e + f, i + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, i + s), s !== 0 && r.arc(e + s, i + s, s, Math.PI, Math.PI * 1.5), r.closePath();
}
var fn = Math.round;
function T0(r, t, e) {
  if (t) {
    var i = t.x1, n = t.x2, a = t.y1, o = t.y2;
    r.x1 = i, r.x2 = n, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (fn(i * 2) === fn(n * 2) && (r.x1 = r.x2 = _i(i, s, !0)), fn(a * 2) === fn(o * 2) && (r.y1 = r.y2 = _i(a, s, !0))), r;
  }
}
function C0(r, t, e) {
  if (t) {
    var i = t.x, n = t.y, a = t.width, o = t.height;
    r.x = i, r.y = n, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = _i(i, s, !0), r.y = _i(n, s, !0), r.width = Math.max(_i(i + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(_i(n + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function _i(r, t, e) {
  if (!t)
    return r;
  var i = fn(r * 2);
  return (i + fn(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2;
}
var lT = /* @__PURE__ */ (function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
})(), uT = {}, It = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new lT();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var l = C0(uT, i, this.style);
      n = l.x, a = l.y, o = l.width, s = l.height, l.r = i.r, i = l;
    } else
      n = i.x, a = i.y, o = i.width, s = i.height;
    i.r ? sT(e, i) : e.rect(n, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
})(dt);
It.prototype.type = "rect";
var tp = {
  fill: "#000"
}, ep = 2, Ve = {}, fT = {
  style: yt({
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
  }, $l.style)
}, ne = (function(r) {
  N(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.type = "text", i._children = [], i._defaultStyle = tp, i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e = 0; e < this._children.length; e++) {
      var i = this._children[e];
      i.zlevel = this.zlevel, i.z = this.z, i.z2 = this.z2, i.culling = this.culling, i.cursor = this.cursor, i.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var e = this.innerTransformable;
    e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(e) {
    var i = this.innerTransformable;
    return i ? i.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, pT(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = e;
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var e = new J(0, 0, 0, 0), i = this._children, n = [], a = null, o = 0; o < i.length; o++) {
        var s = i[o], l = s.getBoundingRect(), u = s.getLocalTransform(n);
        u ? (e.copy(l), e.applyTransform(u), a = a || e.clone(), a.union(e)) : (a = a || l.clone(), a.union(l));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || tp;
  }, t.prototype.setTextContent = function(e) {
  }, t.prototype._mergeStyle = function(e, i) {
    if (!i)
      return e;
    var n = i.rich, a = e.rich || n && {};
    return O(e, i), n && a ? (this._mergeRich(a, n), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, i) {
    for (var n = Tt(i), a = 0; a < n.length; a++) {
      var o = n[a];
      e[o] = e[o] || {}, O(e[o], i[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return fT;
  }, t.prototype._getOrCreateChild = function(e) {
    var i = this._children[this._childCursor];
    return (!i || !(i instanceof e)) && (i = new e()), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, i = e.font || Fr, n = e.padding, a = this._defaultStyle, o = e.x || 0, s = e.y || 0, l = e.align || a.align || "left", u = e.verticalAlign || a.verticalAlign || "top";
    Ld(Ve, a.overflowRect, o, s, l, u), o = Ve.baseX, s = Ve.baseY;
    var f = lp(e), c = ox(f, e, Ve.outerWidth, Ve.outerHeight), h = Nu(e), v = !!e.backgroundColor, d = c.outerHeight, p = c.outerWidth, m = c.lines, g = c.lineHeight;
    this.isTruncated = !!c.isTruncated;
    var y = o, _ = wi(s, c.contentHeight, u);
    if (h || n) {
      var b = xn(o, p, l), S = wi(s, d, u);
      h && this._renderBackground(e, e, b, S, p, d);
    }
    _ += g / 2, n && (y = sp(o, l, n), u === "top" ? _ += n[0] : u === "bottom" && (_ -= n[2]));
    for (var w = 0, x = !1, T = !1, C = op("fill" in e ? e.fill : (T = !0, a.fill)), D = ap("stroke" in e ? e.stroke : !v && (!a.autoStroke || T) ? (w = ep, x = !0, a.stroke) : null), A = e.textShadowBlur > 0, L = 0; L < m.length; L++) {
      var I = this._getOrCreateChild(Xs), P = I.createStyle();
      I.useStyle(P), P.text = m[L], P.x = y, P.y = _, P.textAlign = l, P.textBaseline = "middle", P.opacity = e.opacity, P.strokeFirst = !0, A && (P.shadowBlur = e.textShadowBlur || 0, P.shadowColor = e.textShadowColor || "transparent", P.shadowOffsetX = e.textShadowOffsetX || 0, P.shadowOffsetY = e.textShadowOffsetY || 0), P.stroke = D, P.fill = C, D && (P.lineWidth = e.lineWidth || w, P.lineDash = e.lineDash, P.lineDashOffset = e.lineDashOffset || 0), P.font = i, ip(P, e), _ += g, I.setBoundingRect(ec(P, c.contentWidth, c.calculatedLineHeight, x ? 0 : null));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, i = this._defaultStyle, n = e.align || i.align, a = e.verticalAlign || i.verticalAlign, o = e.x || 0, s = e.y || 0;
    Ld(Ve, i.overflowRect, o, s, n, a), o = Ve.baseX, s = Ve.baseY;
    var l = lp(e), u = ux(l, e, Ve.outerWidth, Ve.outerHeight, n), f = u.width, c = u.outerWidth, h = u.outerHeight, v = e.padding;
    this.isTruncated = !!u.isTruncated;
    var d = xn(o, c, n), p = wi(s, h, a), m = d, g = p;
    v && (m += v[3], g += v[0]);
    var y = m + f;
    Nu(e) && this._renderBackground(e, e, d, p, c, h);
    for (var _ = !!e.backgroundColor, b = 0; b < u.lines.length; b++) {
      for (var S = u.lines[b], w = S.tokens, x = w.length, T = S.lineHeight, C = S.width, D = 0, A = m, L = y, I = x - 1, P = void 0; D < x && (P = w[D], !P.align || P.align === "left"); )
        this._placeToken(P, e, T, g, A, "left", _), C -= P.width, A += P.width, D++;
      for (; I >= 0 && (P = w[I], P.align === "right"); )
        this._placeToken(P, e, T, g, L, "right", _), C -= P.width, L -= P.width, I--;
      for (A += (f - (A - m) - (y - L) - C) / 2; D <= I; )
        P = w[D], this._placeToken(P, e, T, g, A + P.width / 2, "center", _), A += P.width, D++;
      g += T;
    }
  }, t.prototype._placeToken = function(e, i, n, a, o, s, l) {
    var u = i.rich[e.styleName] || {};
    u.text = e.text;
    var f = e.verticalAlign, c = a + n / 2;
    f === "top" ? c = a + e.height / 2 : f === "bottom" && (c = a + n - e.height / 2);
    var h = !e.isLineHolder && Nu(u);
    h && this._renderBackground(u, i, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, c - e.height / 2, e.width, e.height);
    var v = !!u.backgroundColor, d = e.textPadding;
    d && (o = sp(o, s, d), c -= e.height / 2 - d[0] - e.innerHeight / 2);
    var p = this._getOrCreateChild(Xs), m = p.createStyle();
    p.useStyle(m);
    var g = this._defaultStyle, y = !1, _ = 0, b = !1, S = op("fill" in u ? u.fill : "fill" in i ? i.fill : (y = !0, g.fill)), w = ap("stroke" in u ? u.stroke : "stroke" in i ? i.stroke : !v && !l && (!g.autoStroke || y) ? (_ = ep, b = !0, g.stroke) : null), x = u.textShadowBlur > 0 || i.textShadowBlur > 0;
    m.text = e.text, m.x = o, m.y = c, x && (m.shadowBlur = u.textShadowBlur || i.textShadowBlur || 0, m.shadowColor = u.textShadowColor || i.textShadowColor || "transparent", m.shadowOffsetX = u.textShadowOffsetX || i.textShadowOffsetX || 0, m.shadowOffsetY = u.textShadowOffsetY || i.textShadowOffsetY || 0), m.textAlign = s, m.textBaseline = "middle", m.font = e.font || Fr, m.opacity = vn(u.opacity, i.opacity, 1), ip(m, u), w && (m.lineWidth = vn(u.lineWidth, i.lineWidth, _), m.lineDash = V(u.lineDash, i.lineDash), m.lineDashOffset = i.lineDashOffset || 0, m.stroke = w), S && (m.fill = S), p.setBoundingRect(ec(m, e.contentWidth, e.contentHeight, b ? 0 : null));
  }, t.prototype._renderBackground = function(e, i, n, a, o, s) {
    var l = e.backgroundColor, u = e.borderWidth, f = e.borderColor, c = l && l.image, h = l && !c, v = e.borderRadius, d = this, p, m;
    if (h || e.lineHeight || u && f) {
      p = this._getOrCreateChild(It), p.useStyle(p.createStyle()), p.style.fill = null;
      var g = p.shape;
      g.x = n, g.y = a, g.width = o, g.height = s, g.r = v, p.dirtyShape();
    }
    if (h) {
      var y = p.style;
      y.fill = l || null, y.fillOpacity = V(e.fillOpacity, 1);
    } else if (c) {
      m = this._getOrCreateChild(Hr), m.onload = function() {
        d.dirtyStyle();
      };
      var _ = m.style;
      _.image = l.image, _.x = n, _.y = a, _.width = o, _.height = s;
    }
    if (u && f) {
      var y = p.style;
      y.lineWidth = u, y.stroke = f, y.strokeOpacity = V(e.strokeOpacity, 1), y.lineDash = e.borderDash, y.lineDashOffset = e.borderDashOffset || 0, p.strokeContainThreshold = 0, p.hasFill() && p.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var b = (p || m).style;
    b.shadowBlur = e.shadowBlur || 0, b.shadowColor = e.shadowColor || "transparent", b.shadowOffsetX = e.shadowOffsetX || 0, b.shadowOffsetY = e.shadowOffsetY || 0, b.opacity = vn(e.opacity, i.opacity, 1);
  }, t.makeFont = function(e) {
    var i = "";
    return dT(e) && (i = [
      e.fontStyle,
      e.fontWeight,
      vT(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), i && We(i) || e.textFont || e.font;
  }, t;
})(uo), cT = { left: !0, right: 1, center: 1 }, hT = { top: 1, bottom: 1, middle: 1 }, rp = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function vT(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? Ih + "px" : r + "px";
}
function ip(r, t) {
  for (var e = 0; e < rp.length; e++) {
    var i = rp[e], n = t[i];
    n != null && (r[i] = n);
  }
}
function dT(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function pT(r) {
  return np(r), M(r.rich, np), r;
}
function np(r) {
  if (r) {
    r.font = ne.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || cT[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || hT[e] ? e : "top";
    var i = r.padding;
    i && (r.padding = Rh(r.padding));
  }
}
function ap(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function op(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function sp(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function lp(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function Nu(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
var up = 1e-4, A0 = 20;
function gT(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
var Vt = Math.min, ct = Math.max, Et = Math.abs, dr = Math.round, Tn = Math.floor, fo = Math.ceil, On = Math.pow, za = Math.log, vc = Math.LN10, mT = Math.PI, yT = Math.random;
function fp(r, t, e, i) {
  var n = t[0], a = t[1], o = e[0], s = e[1], l = a - n, u = s - o;
  if (l === 0)
    return u === 0 ? o : (o + s) / 2;
  if (i)
    if (l > 0) {
      if (r <= n)
        return o;
      if (r >= a)
        return s;
    } else {
      if (r >= n)
        return o;
      if (r <= a)
        return s;
    }
  else {
    if (r === n)
      return o;
    if (r === a)
      return s;
  }
  return (r - n) / l * u + o;
}
var Mt = _T;
function _T(r, t, e) {
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
  return dc(r, t, e);
}
function dc(r, t, e) {
  return W(r) ? bT(r) ? parseFloat(r) / 100 * t + (e || 0) : parseFloat(r) : r == null ? NaN : +r;
}
function bT(r) {
  return !!gT(r).match(/%$/);
}
function lt(r, t, e) {
  return isNaN(t) ? e ? "" + r : +r : (t = Vt(ct(0, t), A0), r = (+r).toFixed(t), e ? r : +r);
}
function $a(r) {
  return r.sort(function(t, e) {
    return t - e;
  }), r;
}
function ur(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (dr(r * t) / t === r)
        return e;
  }
  return ST(r);
}
function ST(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), i = e > 0 ? +t.slice(e + 1) : 0, n = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : n - 1 - a;
  return ct(0, o - i);
}
function wT(r, t, e) {
  var i = Et(r[1] - r[0]);
  if (!isFinite(i) || i === 0)
    return NaN;
  var n = za(2 * Et(e || 1) * Et(i)) / vc, a = za(Et(t)) / vc, o = ct(0, fo(-n + a));
  return isFinite(o) || (o = NaN), o;
}
function xT(r, t) {
  var e = ct(ur(r), ur(t)), i = r + t;
  return e > A0 ? i : lt(i, e);
}
var cp = On(2, 53) - 1;
function D0(r) {
  var t = mT * 2;
  return (r % t + t) % t;
}
function qs(r) {
  return r > -up && r < up;
}
var TT = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Nn(r) {
  if (r instanceof Date)
    return r;
  if (W(r)) {
    var t = TT.exec(r);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (r == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(dr(r));
}
function M0(r) {
  return On(10, Hh(r));
}
function Hh(r) {
  if (r === 0)
    return 0;
  var t = Tn(za(r) / vc);
  return r / On(10, t) >= 10 && t++, t;
}
var I0 = 2;
function Vh(r, t) {
  var e = Hh(r), i = On(10, e), n = r / i, a;
  return t === I0 ? a = 1 : t ? n < 1.5 ? a = 1 : n < 2.5 ? a = 2 : n < 4 ? a = 3 : n < 7 ? a = 5 : a = 10 : n < 1 ? a = 1 : n < 2 ? a = 2 : n < 3 ? a = 3 : n < 5 ? a = 5 : a = 10, r = a * i, lt(r, -e);
}
function Zs(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !W(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function CT(r) {
  return !isNaN(Zs(r));
}
function Gh() {
  return dr(yT() * 9);
}
function L0(r, t) {
  return t === 0 ? r : L0(t, r % t);
}
function hp(r, t) {
  return r == null ? t : t == null ? r : r * t / L0(r, t);
}
function Te(r) {
  return r != null && isFinite(r);
}
var AT = "[ECharts] ", DT = typeof console < "u" && console.warn && console.log;
function MT(r, t, e) {
  DT && console[r](AT + t);
}
function P0(r, t) {
  MT("error", r);
}
function Jt(r) {
  throw new Error(r);
}
function vp(r, t, e) {
  return (t - r) * e + r;
}
var E0 = "series\0", IT = "\0_ec_\0";
function Zt(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function pc(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var i = 0, n = e.length; i < n; i++) {
      var a = e[i];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var dp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function co(r) {
  return K(r) && !F(r) && !(r instanceof Date) ? r.value : r;
}
function LT(r) {
  return K(r) && !(r instanceof Array);
}
function PT(r, t, e) {
  var i = e === "normalMerge", n = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = j();
  M(t, function(l, u) {
    if (!K(l)) {
      t[u] = null;
      return;
    }
  });
  var s = ET(r, o, e);
  return (i || n) && kT(s, r, o, t), i && RT(s, t), i || n ? OT(s, t, n) : a && NT(s, t), BT(s), s;
}
function ET(r, t, e) {
  var i = [];
  if (e === "replaceAll")
    return i;
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    a && a.id != null && t.set(a.id, n), i.push({
      existing: e === "replaceMerge" || Ha(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return i;
}
function kT(r, t, e, i) {
  M(i, function(n, a) {
    if (!(!n || n.id == null)) {
      var o = xa(n.id), s = e.get(o);
      if (s != null) {
        var l = r[s];
        vr(!l.newOption, 'Duplicated option on id "' + o + '".'), l.newOption = n, l.existing = t[s], i[a] = null;
      }
    }
  });
}
function RT(r, t) {
  M(t, function(e, i) {
    if (!(!e || e.name == null))
      for (var n = 0; n < r.length; n++) {
        var a = r[n].existing;
        if (!r[n].newOption && a && (a.id == null || e.id == null) && !Ha(e) && !Ha(a) && k0("name", a, e)) {
          r[n].newOption = e, t[i] = null;
          return;
        }
      }
  });
}
function OT(r, t, e) {
  M(t, function(i) {
    if (i) {
      for (
        var n, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (n = r[a]) && (n.newOption || Ha(n.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        n.existing && i.id != null && !k0("id", i, n.existing));
      )
        a++;
      n ? (n.newOption = i, n.brandNew = e) : r.push({
        newOption: i,
        brandNew: e,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function NT(r, t) {
  M(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function BT(r) {
  var t = j();
  M(r, function(e) {
    var i = e.existing;
    i && t.set(i.id, e);
  }), M(r, function(e) {
    var i = e.newOption;
    vr(!i || i.id == null || !t.get(i.id) || t.get(i.id) === e, "id duplicates: " + (i && i.id)), i && i.id != null && t.set(i.id, e), !e.keyInfo && (e.keyInfo = {});
  }), M(r, function(e, i) {
    var n = e.existing, a = e.newOption, o = e.keyInfo;
    if (K(a)) {
      if (o.name = a.name != null ? xa(a.name) : n ? n.name : E0 + i, n)
        o.id = xa(n.id);
      else if (a.id != null)
        o.id = xa(a.id);
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
function k0(r, t, e) {
  var i = Ke(t[r], null), n = Ke(e[r], null);
  return i != null && n != null && i === n;
}
function xa(r) {
  return Ke(r, "");
}
function Ke(r, t) {
  return r == null ? t : W(r) ? r : bt(r) || qf(r) ? r + "" : t;
}
function Uh(r) {
  var t = r.name;
  return !!(t && t.indexOf(E0));
}
function Ha(r) {
  return r && r.id != null && xa(r.id).indexOf(IT) === 0;
}
function FT(r, t, e) {
  M(r, function(i) {
    var n = i.newOption;
    K(n) && (i.keyInfo.mainType = t, i.keyInfo.subType = zT(t, n, i.existing, e));
  });
}
function zT(r, t, e, i) {
  var n = t.type ? t.type : e ? e.subType : i.determineSubType(r, t);
  return n;
}
function Ei(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return F(t.dataIndex) ? G(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return F(t.name) ? G(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function ht() {
  var r = "__ec_inner_" + $T++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var $T = Gh();
function Bu(r, t, e) {
  var i = Wh(t, e), n = i.mainTypeSpecified, a = i.queryOptionMap, o = i.others, s = o, l = e ? e.defaultMainType : null;
  return !n && l && a.set(l, {}), a.each(function(u, f) {
    var c = ho(r, f, u, {
      useDefault: l === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = c.models, s[f + "Model"] = c.models[0];
  }), s;
}
function Wh(r, t) {
  var e;
  if (W(r)) {
    var i = {};
    i[r + "Index"] = 0, e = i;
  } else
    e = r;
  var n = j(), a = {}, o = !1;
  return M(e, function(s, l) {
    if (l === "dataIndex" || l === "dataIndexInside") {
      a[l] = s;
      return;
    }
    var u = l.match(/^(\w+)(Index|Id|Name)$/) || [], f = u[1], c = (u[2] || "").toLowerCase();
    if (!(!f || !c || t && t.includeMainTypes && ut(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var h = n.get(f) || n.set(f, {});
      h[c] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: n,
    others: a
  };
}
var _e = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function ho(r, t, e, i) {
  i = i || _e;
  var n = e.index, a = e.id, o = e.name, s = {
    models: null,
    specified: n != null || a != null || o != null
  };
  if (!s.specified) {
    var l = void 0;
    return s.models = i.useDefault && (l = r.getComponent(t)) ? [l] : [], s;
  }
  if (n === "none" || n === !1) {
    if (i.enableNone)
      return s.models = [], s;
    n = -1;
  }
  return n === "all" && (i.enableAll ? n = a = o = null : n = -1), s.models = r.queryComponents({
    mainType: t,
    index: n,
    id: a,
    name: o
  }), s;
}
function HT(r, t, e) {
  var i = {};
  i[t + "Id"] = r[t + "Id"], i[t + "Index"] = r[t + "Index"], i[t + "Name"] = r[t + "Name"];
  var n = {
    mainType: t,
    query: i
  };
  return e && (n.subType = e), n;
}
function R0(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function VT(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function GT(r) {
  return r === "auto" ? tt.domSupported ? "html" : "richText" : r || "html";
}
function UT(r, t, e, i, n) {
  var a = t == null || t === "auto";
  if (i == null)
    return i;
  if (bt(i)) {
    var o = vp(e || 0, i, n);
    return lt(o, a ? Math.max(ur(e || 0), ur(i)) : t);
  } else {
    if (W(i))
      return n < 1 ? e : i;
    for (var s = [], l = e, u = i, f = Math.max(l ? l.length : 0, u.length), c = 0; c < f; ++c) {
      var h = r.getDimensionInfo(c);
      if (h && h.type === "ordinal")
        s[c] = (n < 1 && l ? l : u)[c];
      else {
        var v = l && l[c] ? l[c] : 0, d = u[c], o = vp(v, d, n);
        s[c] = lt(o, a ? Math.max(ur(v), ur(d)) : t);
      }
    }
    return s;
  }
}
function ye() {
  return [1 / 0, -1 / 0];
}
function gc(r, t) {
  pr(t) && (t < r[0] && (r[0] = t), t > r[1] && (r[1] = t));
}
function O0(r, t) {
  pr(t) && t < r[0] && (r[0] = t);
}
function N0(r, t) {
  pr(t) && t > r[1] && (r[1] = t);
}
function WT(r, t) {
  Cn(t[0], t[1]) && (t[0] < r[0] && (r[0] = t[0]), t[1] > r[1] && (r[1] = t[1]));
}
function pr(r) {
  return r != null && isFinite(r);
}
function Cn(r, t) {
  return pr(r) && pr(t) && r <= t;
}
function YT(r) {
  var t = r[1] - r[0];
  return isFinite(t) && t >= 0;
}
function XT(r) {
  Cn(r[0], r[1]) && r[0] > r[1] && (r[0] = r[1]);
}
function B0() {
  var r = "__ec_once_" + qT++;
  return function(t, e) {
    qt(t, r) || (t[r] = 1, e());
  };
}
var qT = Gh();
function Yh(r, t, e) {
  var i = j(), n = 0;
  M(r, function(a) {
    var o = t(a), s = i.get(o) || 0;
    e && e(a, s), !s && !e && (r[n++] = a), i.set(o, s + 1);
  }), e || (r.length = n);
}
function ZT(r) {
  return r.value + "";
}
function KT(r) {
  return r + "";
}
function QT(r, t) {
  return V(t, !0) ? r.seriesIndex + 2 : 0;
}
function F0(r, t, e) {
  var i = r.getData().count();
  return {
    progressiveRender: e.progressiveEnabled && t.incrementalPrepareRender && i >= e.threshold,
    large: r.get("large") && i >= r.get("largeThreshold"),
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    modDataCount: r.get("progressiveChunkMode") === "mod" ? r.getData().count() : null
  };
}
function Xh(r) {
  return {
    overallReset: r
  };
}
var at = ht(), jT = function(r, t, e, i) {
  if (i) {
    var n = at(i);
    n.dataIndex = e, n.dataType = t, n.seriesIndex = r, n.ssrType = "chart", i.type === "group" && i.traverse(function(a) {
      var o = at(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart";
    });
  }
}, Bn = "undefined", z0 = "series", $0 = j(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), le = "original", Gt = "arrayRows", Oe = "objectRows", rr = "keyedColumns", Or = "typedArray", H0 = "unknown", Qe = "column", Fi = "row", JT = [
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
], V0 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      M(JT, function(e) {
        this[e] = xt(t[e], t);
      }, this);
    }
    return r;
  })()
);
function tC(r, t) {
  return t.mainType === z0 ? r.getViewOfSeriesModel(t) : r.getViewOfComponentModel(t);
}
var pp = 1, gp = {}, G0 = ht(), qh = ht(), Zh = 0, Hl = 1, Vl = 2, Ce = ["emphasis", "blur", "select"], mp = ["normal", "emphasis", "blur", "select"], eC = 10, rC = 9, Ci = "highlight", ws = "downplay", Ks = "select", mc = "unselect", Qs = "toggleSelect", Kh = "selectchanged";
function Wi(r) {
  return r != null && r !== "none";
}
function Gl(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function U0(r) {
  Gl(r, "emphasis", Vl);
}
function W0(r) {
  r.hoverState === Vl && Gl(r, "normal", Zh);
}
function Qh(r) {
  Gl(r, "blur", Hl);
}
function Y0(r) {
  r.hoverState === Hl && Gl(r, "normal", Zh);
}
function iC(r) {
  r.selected = !0;
}
function nC(r) {
  r.selected = !1;
}
function yp(r, t, e) {
  t(r, e);
}
function yr(r, t, e) {
  yp(r, t, e), r.isGroup && r.traverse(function(i) {
    yp(i, t, e);
  });
}
function _p(r, t) {
  switch (t) {
    case "emphasis":
      r.hoverState = Vl;
      break;
    case "normal":
      r.hoverState = Zh;
      break;
    case "blur":
      r.hoverState = Hl;
      break;
    case "select":
      r.selected = !0;
  }
}
function aC(r, t, e, i) {
  for (var n = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], l = n[s];
    a[s] = l ?? (i && i[s]);
  }
  for (var o = 0; o < r.animators.length; o++) {
    var u = r.animators[o];
    u.__fromStateTransition && u.__fromStateTransition.indexOf(e) < 0 && u.targetName === "style" && u.saveTo(a, t);
  }
  return a;
}
function oC(r, t, e, i) {
  var n = e && ut(e, "select") >= 0, a = !1;
  if (r instanceof dt) {
    var o = G0(r), s = n && o.selectFill || o.normalFill, l = n && o.selectStroke || o.normalStroke;
    if (Wi(s) || Wi(l)) {
      i = i || {};
      var u = i.style || {};
      u.fill === "inherit" ? (a = !0, i = O({}, i), u = O({}, u), u.fill = s) : !Wi(u.fill) && Wi(s) ? (a = !0, i = O({}, i), u = O({}, u), u.fill = Vd(s)) : !Wi(u.stroke) && Wi(l) && (a || (i = O({}, i), u = O({}, u)), u.stroke = Vd(l)), i.style = u;
    }
  }
  if (i && i.z2 == null) {
    a || (i = O({}, i));
    var f = r.z2EmphasisLift;
    i.z2 = r.z2 + (f ?? eC);
  }
  return i;
}
function sC(r, t, e) {
  if (e && e.z2 == null) {
    e = O({}, e);
    var i = r.z2SelectLift;
    e.z2 = r.z2 + (i ?? rC);
  }
  return e;
}
function lC(r, t, e) {
  var i = ut(r.currentStates, t) >= 0, n = r.style.opacity, a = i ? null : aC(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = O({}, e), o = O({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: i ? n : a.opacity * 0.1
  }, o), e.style = o), e;
}
function Fu(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return oC(this, r, t, e);
    if (r === "blur")
      return lC(this, r, e);
    if (r === "select")
      return sC(this, r, e);
  }
  return e;
}
function uC(r) {
  r.stateProxy = Fu;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = Fu), e && (e.stateProxy = Fu);
}
function bp(r, t) {
  !K0(r, t) && !r.__highByOuter && yr(r, U0);
}
function Sp(r, t) {
  !K0(r, t) && !r.__highByOuter && yr(r, W0);
}
function Va(r, t) {
  r.__highByOuter |= 1 << (t || 0), yr(r, U0);
}
function Ga(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && yr(r, W0);
}
function X0(r) {
  yr(r, Qh);
}
function jh(r) {
  yr(r, Y0);
}
function q0(r) {
  yr(r, iC);
}
function Z0(r) {
  yr(r, nC);
}
function K0(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function Q0(r) {
  var t = r.getModel(), e = [], i = [];
  t.eachComponent(function(n, a) {
    var o = qh(a), s = tC(r, a), l = n === "series";
    !l && i.push(s), o.isBlured && (s.group.traverse(function(u) {
      Y0(u);
    }), l && e.push(a)), o.isBlured = !1;
  }), M(i, function(n) {
    n && n.toggleBlurSeries && n.toggleBlurSeries(e, !1, t);
  });
}
function yc(r, t, e, i) {
  var n = i.getModel();
  e = e || "coordinateSystem";
  function a(u, f) {
    for (var c = 0; c < f.length; c++) {
      var h = u.getItemGraphicEl(f[c]);
      h && jh(h);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = n.getSeriesByIndex(r), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var l = [];
    n.eachSeries(function(u) {
      var f = o === u, c = u.coordinateSystem;
      c && c.master && (c = c.master);
      var h = c && s ? c === s : f;
      if (!// Not blur other series if blurScope series
      (e === "series" && !f || e === "coordinateSystem" && !h || t === "series" && f)) {
        var v = i.getViewOfSeriesModel(u);
        if (v.group.traverse(function(m) {
          m.__highByOuter && f && t === "self" || Qh(m);
        }), re(t))
          a(u.getData(), t);
        else if (K(t))
          for (var d = Tt(t), p = 0; p < d.length; p++)
            a(u.getData(d[p]), t[d[p]]);
        l.push(u), qh(u).isBlured = !0;
      }
    }), n.eachComponent(function(u, f) {
      if (u !== "series") {
        var c = i.getViewOfComponentModel(f);
        c && c.toggleBlurSeries && c.toggleBlurSeries(l, !0, n);
      }
    });
  }
}
function _c(r, t, e) {
  if (!(r == null || t == null)) {
    var i = e.getModel().getComponent(r, t);
    if (i) {
      qh(i).isBlured = !0;
      var n = e.getViewOfComponentModel(i);
      !n || !n.focusBlurEnabled || n.group.traverse(function(a) {
        Qh(a);
      });
    }
  }
}
function fC(r, t, e) {
  var i = r.seriesIndex, n = r.getData(t.dataType);
  if (n) {
    var a = Ei(n, t);
    a = (F(a) ? a[0] : a) || 0;
    var o = n.getItemGraphicEl(a);
    if (!o)
      for (var s = n.count(), l = 0; !o && l < s; )
        o = n.getItemGraphicEl(l++);
    if (o) {
      var u = at(o);
      yc(i, u.focus, u.blurScope, e);
    } else {
      var f = r.get(["emphasis", "focus"]), c = r.get(["emphasis", "blurScope"]);
      f != null && yc(i, f, c, e);
    }
  }
}
function Jh(r, t, e, i) {
  var n = {
    focusSelf: !1,
    dispatchers: null
  };
  if (r == null || r === "series" || t == null || e == null)
    return n;
  var a = i.getModel().getComponent(r, t);
  if (!a)
    return n;
  var o = i.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return n;
  for (var s = o.findHighDownDispatchers(e), l, u = 0; u < s.length; u++)
    if (at(s[u]).focus === "self") {
      l = !0;
      break;
    }
  return {
    focusSelf: l,
    dispatchers: s
  };
}
function cC(r, t, e) {
  var i = at(r), n = Jh(i.componentMainType, i.componentIndex, i.componentHighDownName, e), a = n.dispatchers, o = n.focusSelf;
  a ? (o && _c(i.componentMainType, i.componentIndex, e), M(a, function(s) {
    return bp(s, t);
  })) : (yc(i.seriesIndex, i.focus, i.blurScope, e), i.focus === "self" && _c(i.componentMainType, i.componentIndex, e), bp(r, t));
}
function hC(r, t, e) {
  Q0(e);
  var i = at(r), n = Jh(i.componentMainType, i.componentIndex, i.componentHighDownName, e).dispatchers;
  n ? M(n, function(a) {
    return Sp(a, t);
  }) : Sp(r, t);
}
function vC(r, t, e) {
  if (wc(t)) {
    var i = t.dataType, n = r.getData(i), a = Ei(n, t);
    F(a) || (a = [a]), r[t.type === Qs ? "toggleSelect" : t.type === Ks ? "select" : "unselect"](a, i);
  }
}
function wp(r) {
  var t = r.getAllData();
  M(t, function(e) {
    var i = e.data, n = e.type;
    i.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, n) ? q0(a) : Z0(a);
    });
  });
}
function dC(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var i = e.getAllData();
    M(i, function(n) {
      n.data;
      var a = n.type, o = e.getSelectedDataIndices();
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
function bc(r, t, e) {
  j0(r, !0), yr(r, uC), gC(r, t, e);
}
function pC(r) {
  j0(r, !1);
}
function An(r, t, e, i) {
  i ? pC(r) : bc(r, t, e);
}
function gC(r, t, e) {
  var i = at(r);
  t != null ? (i.focus = t, i.blurScope = e) : i.focus && (i.focus = null);
}
var xp = ["emphasis", "blur", "select"], mC = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function js(r, t, e, i) {
  e = e || "itemStyle";
  for (var n = 0; n < xp.length; n++) {
    var a = xp[n], o = t.getModel([a, e]), s = r.ensureState(a);
    s.style = o[mC[e]]();
  }
}
function j0(r, t) {
  var e = t === !1, i = r;
  r.highDownSilentOnTouch && (i.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !e);
}
function Sc(r) {
  return !!(r && r.__highDownDispatcher);
}
function yC(r) {
  var t = gp[r];
  return t == null && pp <= 32 && (t = gp[r] = pp++), t;
}
function wc(r) {
  var t = r.type;
  return t === Ks || t === mc || t === Qs;
}
function Tp(r) {
  var t = r.type;
  return t === Ci || t === ws;
}
function _C(r) {
  var t = G0(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var Yi = Pi.CMD, bC = [[], [], []], Cp = Math.sqrt, SC = Math.atan2;
function wC(r, t) {
  if (t) {
    var e = r.data, i = r.len(), n, a, o, s, l, u, f = Yi.M, c = Yi.C, h = Yi.L, v = Yi.R, d = Yi.A, p = Yi.Q;
    for (o = 0, s = 0; o < i; ) {
      switch (n = e[o++], s = o, a = 0, n) {
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
          var m = t[4], g = t[5], y = Cp(t[0] * t[0] + t[1] * t[1]), _ = Cp(t[2] * t[2] + t[3] * t[3]), b = SC(-t[1] / _, t[0] / y);
          e[o] *= y, e[o++] += m, e[o] *= _, e[o++] += g, e[o++] *= y, e[o++] *= _, e[o++] += b, e[o++] += b, o += 2, s = o;
          break;
        case v:
          u[0] = e[o++], u[1] = e[o++], we(u, u, t), e[s++] = u[0], e[s++] = u[1], u[0] += e[o++], u[1] += e[o++], we(u, u, t), e[s++] = u[0], e[s++] = u[1];
      }
      for (l = 0; l < a; l++) {
        var S = bC[l];
        S[0] = e[o++], S[1] = e[o++], we(S, S, t), e[s++] = S[0], e[s++] = S[1];
      }
    }
    r.increaseVersion();
  }
}
var zu = Math.sqrt, Eo = Math.sin, ko = Math.cos, qn = Math.PI;
function Ap(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function xc(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (Ap(r) * Ap(t));
}
function Dp(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(xc(r, t));
}
function Mp(r, t, e, i, n, a, o, s, l, u, f) {
  var c = l * (qn / 180), h = ko(c) * (r - e) / 2 + Eo(c) * (t - i) / 2, v = -1 * Eo(c) * (r - e) / 2 + ko(c) * (t - i) / 2, d = h * h / (o * o) + v * v / (s * s);
  d > 1 && (o *= zu(d), s *= zu(d));
  var p = (n === a ? -1 : 1) * zu((o * o * (s * s) - o * o * (v * v) - s * s * (h * h)) / (o * o * (v * v) + s * s * (h * h))) || 0, m = p * o * v / s, g = p * -s * h / o, y = (r + e) / 2 + ko(c) * m - Eo(c) * g, _ = (t + i) / 2 + Eo(c) * m + ko(c) * g, b = Dp([1, 0], [(h - m) / o, (v - g) / s]), S = [(h - m) / o, (v - g) / s], w = [(-1 * h - m) / o, (-1 * v - g) / s], x = Dp(S, w);
  if (xc(S, w) <= -1 && (x = qn), xc(S, w) >= 1 && (x = 0), x < 0) {
    var T = Math.round(x / qn * 1e6) / 1e6;
    x = qn * 2 + T % 2 * qn;
  }
  f.addData(u, y, _, o, s, b, x, c, a);
}
var xC = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, TC = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function CC(r) {
  var t = new Pi();
  if (!r)
    return t;
  var e = 0, i = 0, n = e, a = i, o, s = Pi.CMD, l = r.match(xC);
  if (!l)
    return t;
  for (var u = 0; u < l.length; u++) {
    for (var f = l[u], c = f.charAt(0), h = void 0, v = f.match(TC) || [], d = v.length, p = 0; p < d; p++)
      v[p] = parseFloat(v[p]);
    for (var m = 0; m < d; ) {
      var g = void 0, y = void 0, _ = void 0, b = void 0, S = void 0, w = void 0, x = void 0, T = e, C = i, D = void 0, A = void 0;
      switch (c) {
        case "l":
          e += v[m++], i += v[m++], h = s.L, t.addData(h, e, i);
          break;
        case "L":
          e = v[m++], i = v[m++], h = s.L, t.addData(h, e, i);
          break;
        case "m":
          e += v[m++], i += v[m++], h = s.M, t.addData(h, e, i), n = e, a = i, c = "l";
          break;
        case "M":
          e = v[m++], i = v[m++], h = s.M, t.addData(h, e, i), n = e, a = i, c = "L";
          break;
        case "h":
          e += v[m++], h = s.L, t.addData(h, e, i);
          break;
        case "H":
          e = v[m++], h = s.L, t.addData(h, e, i);
          break;
        case "v":
          i += v[m++], h = s.L, t.addData(h, e, i);
          break;
        case "V":
          i = v[m++], h = s.L, t.addData(h, e, i);
          break;
        case "C":
          h = s.C, t.addData(h, v[m++], v[m++], v[m++], v[m++], v[m++], v[m++]), e = v[m - 2], i = v[m - 1];
          break;
        case "c":
          h = s.C, t.addData(h, v[m++] + e, v[m++] + i, v[m++] + e, v[m++] + i, v[m++] + e, v[m++] + i), e += v[m - 2], i += v[m - 1];
          break;
        case "S":
          g = e, y = i, D = t.len(), A = t.data, o === s.C && (g += e - A[D - 4], y += i - A[D - 3]), h = s.C, T = v[m++], C = v[m++], e = v[m++], i = v[m++], t.addData(h, g, y, T, C, e, i);
          break;
        case "s":
          g = e, y = i, D = t.len(), A = t.data, o === s.C && (g += e - A[D - 4], y += i - A[D - 3]), h = s.C, T = e + v[m++], C = i + v[m++], e += v[m++], i += v[m++], t.addData(h, g, y, T, C, e, i);
          break;
        case "Q":
          T = v[m++], C = v[m++], e = v[m++], i = v[m++], h = s.Q, t.addData(h, T, C, e, i);
          break;
        case "q":
          T = v[m++] + e, C = v[m++] + i, e += v[m++], i += v[m++], h = s.Q, t.addData(h, T, C, e, i);
          break;
        case "T":
          g = e, y = i, D = t.len(), A = t.data, o === s.Q && (g += e - A[D - 4], y += i - A[D - 3]), e = v[m++], i = v[m++], h = s.Q, t.addData(h, g, y, e, i);
          break;
        case "t":
          g = e, y = i, D = t.len(), A = t.data, o === s.Q && (g += e - A[D - 4], y += i - A[D - 3]), e += v[m++], i += v[m++], h = s.Q, t.addData(h, g, y, e, i);
          break;
        case "A":
          _ = v[m++], b = v[m++], S = v[m++], w = v[m++], x = v[m++], T = e, C = i, e = v[m++], i = v[m++], h = s.A, Mp(T, C, e, i, w, x, _, b, S, h, t);
          break;
        case "a":
          _ = v[m++], b = v[m++], S = v[m++], w = v[m++], x = v[m++], T = e, C = i, e += v[m++], i += v[m++], h = s.A, Mp(T, C, e, i, w, x, _, b, S, h, t);
          break;
      }
    }
    (c === "z" || c === "Z") && (h = s.Z, t.addData(h), e = n, i = a), o = h;
  }
  return t.toStatic(), t;
}
var J0 = (function(r) {
  N(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
})(dt);
function t_(r) {
  return r.setData != null;
}
function e_(r, t) {
  var e = CC(r), i = O({}, t);
  return i.buildPath = function(n) {
    var a = t_(n);
    if (a && n.canSave()) {
      n.appendPath(e);
      var o = n.getContext();
      o && n.rebuildPath(o, 1);
    } else {
      var o = a ? n.getContext() : n;
      o && e.rebuildPath(o, 1);
    }
  }, i.applyTransform = function(n) {
    wC(e, n), this.dirtyShape();
  }, i;
}
function AC(r, t) {
  return new J0(e_(r, t));
}
function DC(r, t) {
  var e = e_(r, t), i = (function(n) {
    N(a, n);
    function a(o) {
      var s = n.call(this, o) || this;
      return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
    }
    return a;
  })(J0);
  return i;
}
function MC(r, t) {
  for (var e = [], i = r.length, n = 0; n < i; n++) {
    var a = r[n];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new dt(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (t_(s)) {
      s.appendPath(e);
      var l = s.getContext();
      l && s.rebuildPath(l, 1);
    }
  }, o;
}
var Lt = (function(r) {
  N(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.isGroup = !0, i._children = [], i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(e) {
    return this._children[e];
  }, t.prototype.childOfName = function(e) {
    for (var i = this._children, n = 0; n < i.length; n++)
      if (i[n].name === e)
        return i[n];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(e) {
    return e && e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), this;
  }, t.prototype.addBefore = function(e, i) {
    if (e && e !== this && e.parent !== this && i && i.parent === this) {
      var n = this._children, a = n.indexOf(i);
      a >= 0 && (n.splice(a, 0, e), this._doAdd(e));
    }
    return this;
  }, t.prototype.replace = function(e, i) {
    var n = ut(this._children, e);
    return n >= 0 && this.replaceAt(i, n), this;
  }, t.prototype.replaceAt = function(e, i) {
    var n = this._children, a = n[i];
    if (e && e !== this && e.parent !== this && e !== a) {
      n[i] = e, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(e);
    }
    return this;
  }, t.prototype._doAdd = function(e) {
    e.parent && e.parent.remove(e), e.parent = this;
    var i = this.__zr;
    i && i !== e.__zr && e.addSelfToZr(i), i && i.refresh();
  }, t.prototype.remove = function(e) {
    var i = this.__zr, n = this._children, a = ut(n, e);
    return a < 0 ? this : (n.splice(a, 1), e.parent = null, i && e.removeSelfFromZr(i), i && i.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var e = this._children, i = this.__zr, n = 0; n < e.length; n++) {
      var a = e[n];
      i && a.removeSelfFromZr(i), a.parent = null;
    }
    return e.length = 0, this;
  }, t.prototype.eachChild = function(e, i) {
    for (var n = this._children, a = 0; a < n.length; a++) {
      var o = n[a];
      e.call(i, o, a);
    }
    return this;
  }, t.prototype.traverse = function(e, i) {
    for (var n = 0; n < this._children.length; n++) {
      var a = this._children[n], o = e.call(i, a);
      a.isGroup && !o && a.traverse(e, i);
    }
    return this;
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.removeSelfFromZr(e);
    }
  }, t.prototype.getBoundingRect = function(e) {
    for (var i = new J(0, 0, 0, 0), n = e || this._children, a = [], o = null, s = 0; s < n.length; s++) {
      var l = n[s];
      if (!(l.ignore || l.invisible)) {
        var u = l.getBoundingRect(), f = l.getLocalTransform(a);
        f ? (J.applyTransform(i, u, f), o = o || i.clone(), o.union(i)) : (o = o || u.clone(), o.union(u));
      }
    }
    return o || i;
  }, t;
})(zl);
Lt.prototype.type = "group";
var IC = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
})(), Ul = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new IC();
  }, t.prototype.buildPath = function(e, i) {
    e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
  }, t;
})(dt);
Ul.prototype.type = "circle";
var LC = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
})(), tv = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new LC();
  }, t.prototype.buildPath = function(e, i) {
    var n = 0.5522848, a = i.cx, o = i.cy, s = i.rx, l = i.ry, u = s * n, f = l * n;
    e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - u, o - l, a, o - l), e.bezierCurveTo(a + u, o - l, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + u, o + l, a, o + l), e.bezierCurveTo(a - u, o + l, a - s, o + f, a - s, o), e.closePath();
  }, t;
})(dt);
tv.prototype.type = "ellipse";
var r_ = Math.PI, $u = r_ * 2, ni = Math.sin, Xi = Math.cos, PC = Math.acos, Ft = Math.atan2, Ip = Math.abs, Ta = Math.sqrt, da = Math.max, Ge = Math.min, Me = 1e-4;
function EC(r, t, e, i, n, a, o, s) {
  var l = e - r, u = i - t, f = o - n, c = s - a, h = c * l - f * u;
  if (!(h * h < Me))
    return h = (f * (t - a) - c * (r - n)) / h, [r + h * l, t + h * u];
}
function Ro(r, t, e, i, n, a, o) {
  var s = r - e, l = t - i, u = (o ? a : -a) / Ta(s * s + l * l), f = u * l, c = -u * s, h = r + f, v = t + c, d = e + f, p = i + c, m = (h + d) / 2, g = (v + p) / 2, y = d - h, _ = p - v, b = y * y + _ * _, S = n - a, w = h * p - d * v, x = (_ < 0 ? -1 : 1) * Ta(da(0, S * S * b - w * w)), T = (w * _ - y * x) / b, C = (-w * y - _ * x) / b, D = (w * _ + y * x) / b, A = (-w * y + _ * x) / b, L = T - m, I = C - g, P = D - m, E = A - g;
  return L * L + I * I > P * P + E * E && (T = D, C = A), {
    cx: T,
    cy: C,
    x0: -f,
    y0: -c,
    x1: T * (n / S - 1),
    y1: C * (n / S - 1)
  };
}
function kC(r) {
  var t;
  if (F(r)) {
    var e = r.length;
    if (!e)
      return r;
    e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
  } else
    t = [r, r, r, r];
  return t;
}
function RC(r, t) {
  var e, i = da(t.r, 0), n = da(t.r0 || 0, 0), a = i > 0, o = n > 0;
  if (!(!a && !o)) {
    if (a || (i = n, n = 0), n > i) {
      var s = i;
      i = n, n = s;
    }
    var l = t.startAngle, u = t.endAngle;
    if (!(isNaN(l) || isNaN(u))) {
      var f = t.cx, c = t.cy, h = !!t.clockwise, v = Ip(u - l), d = v > $u && v % $u;
      if (d > Me && (v = d), !(i > Me))
        r.moveTo(f, c);
      else if (v > $u - Me)
        r.moveTo(f + i * Xi(l), c + i * ni(l)), r.arc(f, c, i, l, u, !h), n > Me && (r.moveTo(f + n * Xi(u), c + n * ni(u)), r.arc(f, c, n, u, l, h));
      else {
        var p = void 0, m = void 0, g = void 0, y = void 0, _ = void 0, b = void 0, S = void 0, w = void 0, x = void 0, T = void 0, C = void 0, D = void 0, A = void 0, L = void 0, I = void 0, P = void 0, E = i * Xi(l), k = i * ni(l), z = n * Xi(u), R = n * ni(u), $ = v > Me;
        if ($) {
          var Y = t.cornerRadius;
          Y && (e = kC(Y), p = e[0], m = e[1], g = e[2], y = e[3]);
          var U = Ip(i - n) / 2;
          if (_ = Ge(U, g), b = Ge(U, y), S = Ge(U, p), w = Ge(U, m), C = x = da(_, b), D = T = da(S, w), (x > Me || T > Me) && (A = i * Xi(u), L = i * ni(u), I = n * Xi(l), P = n * ni(l), v < r_)) {
            var q = EC(E, k, I, P, A, L, z, R);
            if (q) {
              var Q = E - q[0], H = k - q[1], it = A - q[0], ot = L - q[1], Ut = 1 / ni(PC((Q * it + H * ot) / (Ta(Q * Q + H * H) * Ta(it * it + ot * ot))) / 2), Ae = Ta(q[0] * q[0] + q[1] * q[1]);
              C = Ge(x, (i - Ae) / (Ut + 1)), D = Ge(T, (n - Ae) / (Ut - 1));
            }
          }
        }
        if (!$)
          r.moveTo(f + E, c + k);
        else if (C > Me) {
          var wt = Ge(g, C), kt = Ge(y, C), et = Ro(I, P, E, k, i, wt, h), st = Ro(A, L, z, R, i, kt, h);
          r.moveTo(f + et.cx + et.x0, c + et.cy + et.y0), C < x && wt === kt ? r.arc(f + et.cx, c + et.cy, C, Ft(et.y0, et.x0), Ft(st.y0, st.x0), !h) : (wt > 0 && r.arc(f + et.cx, c + et.cy, wt, Ft(et.y0, et.x0), Ft(et.y1, et.x1), !h), r.arc(f, c, i, Ft(et.cy + et.y1, et.cx + et.x1), Ft(st.cy + st.y1, st.cx + st.x1), !h), kt > 0 && r.arc(f + st.cx, c + st.cy, kt, Ft(st.y1, st.x1), Ft(st.y0, st.x0), !h));
        } else
          r.moveTo(f + E, c + k), r.arc(f, c, i, l, u, !h);
        if (!(n > Me) || !$)
          r.lineTo(f + z, c + R);
        else if (D > Me) {
          var wt = Ge(p, D), kt = Ge(m, D), et = Ro(z, R, A, L, n, -kt, h), st = Ro(E, k, I, P, n, -wt, h);
          r.lineTo(f + et.cx + et.x0, c + et.cy + et.y0), D < T && wt === kt ? r.arc(f + et.cx, c + et.cy, D, Ft(et.y0, et.x0), Ft(st.y0, st.x0), !h) : (kt > 0 && r.arc(f + et.cx, c + et.cy, kt, Ft(et.y0, et.x0), Ft(et.y1, et.x1), !h), r.arc(f, c, n, Ft(et.cy + et.y1, et.cx + et.x1), Ft(st.cy + st.y1, st.cx + st.x1), h), wt > 0 && r.arc(f + st.cx, c + st.cy, wt, Ft(st.y1, st.x1), Ft(st.y0, st.x0), !h));
        } else
          r.lineTo(f + z, c + R), r.arc(f, c, n, u, l, h);
      }
      r.closePath();
    }
  }
}
var OC = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return r;
})(), Fn = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new OC();
  }, t.prototype.buildPath = function(e, i) {
    RC(e, i);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
})(dt);
Fn.prototype.type = "sector";
var NC = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
})(), ev = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new NC();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.PI * 2;
    e.moveTo(n + i.r, a), e.arc(n, a, i.r, 0, o, !1), e.moveTo(n + i.r0, a), e.arc(n, a, i.r0, 0, o, !0);
  }, t;
})(dt);
ev.prototype.type = "ring";
function BC(r, t, e, i) {
  var n = [], a = [], o = [], s = [], l, u, f, c;
  if (i) {
    f = [1 / 0, 1 / 0], c = [-1 / 0, -1 / 0];
    for (var h = 0, v = r.length; h < v; h++)
      sn(f, f, r[h]), ln(c, c, r[h]);
    sn(f, f, i[0]), ln(c, c, i[1]);
  }
  for (var h = 0, v = r.length; h < v; h++) {
    var d = r[h];
    if (e)
      l = r[h ? h - 1 : v - 1], u = r[(h + 1) % v];
    else if (h === 0 || h === v - 1) {
      n.push(qw(r[h]));
      continue;
    } else
      l = r[h - 1], u = r[h + 1];
    a0(a, u, l), hu(a, a, t);
    var p = jf(d, l), m = jf(d, u), g = p + m;
    g !== 0 && (p /= g, m /= g), hu(o, a, -p), hu(s, a, m);
    var y = xd([], d, o), _ = xd([], d, s);
    i && (ln(y, y, f), sn(y, y, c), ln(_, _, f), sn(_, _, c)), n.push(y), n.push(_);
  }
  return e && n.push(n.shift()), n;
}
function i_(r, t, e) {
  var i = t.smooth, n = t.points;
  if (n && n.length >= 2) {
    if (i) {
      var a = BC(n, i, e, t.smoothConstraint);
      r.moveTo(n[0][0], n[0][1]);
      for (var o = n.length, s = 0; s < (e ? o : o - 1); s++) {
        var l = a[s * 2], u = a[s * 2 + 1], f = n[(s + 1) % o];
        r.bezierCurveTo(l[0], l[1], u[0], u[1], f[0], f[1]);
      }
    } else {
      r.moveTo(n[0][0], n[0][1]);
      for (var s = 1, c = n.length; s < c; s++)
        r.lineTo(n[s][0], n[s][1]);
    }
    e && r.closePath();
  }
}
var FC = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), Ua = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new FC();
  }, t.prototype.buildPath = function(e, i) {
    i_(e, i, !0);
  }, t;
})(dt);
Ua.prototype.type = "polygon";
var zC = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), rv = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new zC();
  }, t.prototype.buildPath = function(e, i) {
    i_(e, i, !1);
  }, t;
})(dt);
rv.prototype.type = "polyline";
var $C = {}, HC = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
})(), gr = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new HC();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var l = T0($C, i, this.style);
      n = l.x1, a = l.y1, o = l.x2, s = l.y2;
    } else
      n = i.x1, a = i.y1, o = i.x2, s = i.y2;
    var u = i.percent;
    u !== 0 && (e.moveTo(n, a), u < 1 && (o = n * (1 - u) + o * u, s = a * (1 - u) + s * u), e.lineTo(o, s));
  }, t.prototype.pointAt = function(e) {
    var i = this.shape;
    return [
      i.x1 * (1 - e) + i.x2 * e,
      i.y1 * (1 - e) + i.y2 * e
    ];
  }, t;
})(dt);
gr.prototype.type = "line";
var Qt = [], VC = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
})();
function Lp(r, t, e) {
  var i = r.cpx2, n = r.cpy2;
  return i != null || n != null ? [
    (e ? Nd : Bt)(r.x1, r.cpx1, r.cpx2, r.x2, t),
    (e ? Nd : Bt)(r.y1, r.cpy1, r.cpy2, r.y2, t)
  ] : [
    (e ? Bd : jt)(r.x1, r.cpx1, r.x2, t),
    (e ? Bd : jt)(r.y1, r.cpy1, r.y2, t)
  ];
}
var Wl = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new VC();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.x1, a = i.y1, o = i.x2, s = i.y2, l = i.cpx1, u = i.cpy1, f = i.cpx2, c = i.cpy2, h = i.percent;
    h !== 0 && (e.moveTo(n, a), f == null || c == null ? (h < 1 && (Gs(n, l, o, h, Qt), l = Qt[1], o = Qt[2], Gs(a, u, s, h, Qt), u = Qt[1], s = Qt[2]), e.quadraticCurveTo(l, u, o, s)) : (h < 1 && (Vs(n, l, f, o, h, Qt), l = Qt[1], f = Qt[2], o = Qt[3], Vs(a, u, c, s, h, Qt), u = Qt[1], c = Qt[2], s = Qt[3]), e.bezierCurveTo(l, u, f, c, o, s)));
  }, t.prototype.pointAt = function(e) {
    return Lp(this.shape, e, !1);
  }, t.prototype.tangentAt = function(e) {
    var i = Lp(this.shape, e, !0);
    return Fh(i, i);
  }, t;
})(dt);
Wl.prototype.type = "bezier-curve";
var GC = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
})(), Yl = (function(r) {
  N(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new GC();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.max(i.r, 0), s = i.startAngle, l = i.endAngle, u = i.clockwise, f = Math.cos(s), c = Math.sin(s);
    e.moveTo(f * o + n, c * o + a), e.arc(n, a, o, s, l, !u);
  }, t;
})(dt);
Yl.prototype.type = "arc";
var UC = (function(r) {
  N(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.type = "compound", e;
  }
  return t.prototype._updatePathDirty = function() {
    for (var e = this.shape.paths, i = this.shapeChanged(), n = 0; n < e.length; n++)
      i = i || e[n].shapeChanged();
    i && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var e = this.shape.paths || [], i = this.getGlobalScale(), n = 0; n < e.length; n++)
      e[n].path || e[n].createPathProxy(), e[n].path.setScale(i[0], i[1], e[n].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(e, i) {
    for (var n = i.paths || [], a = 0; a < n.length; a++)
      n[a].buildPath(e, n[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var e = this.shape.paths || [], i = 0; i < e.length; i++)
      e[i].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), dt.prototype.getBoundingRect.call(this);
  }, t;
})(dt), n_ = (function() {
  function r(t) {
    this.colorStops = t || [];
  }
  return r.prototype.addColorStop = function(t, e) {
    this.colorStops.push({
      offset: t,
      color: e
    });
  }, r;
})(), a_ = (function(r) {
  N(t, r);
  function t(e, i, n, a, o, s) {
    var l = r.call(this, o) || this;
    return l.x = e ?? 0, l.y = i ?? 0, l.x2 = n ?? 1, l.y2 = a ?? 0, l.type = "linear", l.global = s || !1, l;
  }
  return t;
})(n_), WC = (function(r) {
  N(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this, a) || this;
    return s.x = e ?? 0.5, s.y = i ?? 0.5, s.r = n ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
})(n_), Hu = Math.min, YC = Math.max, Oo = Math.abs, ai = [0, 0], oi = [0, 0], Nt = o0(), No = Nt.minTv, Bo = Nt.maxTv, o_ = (function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var i = 0; i < 4; i++)
      this._corners[i] = new _t();
    for (var i = 0; i < 2; i++)
      this._axes[i] = new _t();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var i = this._corners, n = this._axes, a = t.x, o = t.y, s = a + t.width, l = o + t.height;
    if (i[0].set(a, o), i[1].set(s, o), i[2].set(s, l), i[3].set(a, l), e)
      for (var u = 0; u < 4; u++)
        i[u].transform(e);
    _t.sub(n[0], i[1], i[0]), _t.sub(n[1], i[3], i[0]), n[0].normalize(), n[1].normalize();
    for (var u = 0; u < 2; u++)
      this._origin[u] = n[u].dot(i[0]);
  }, r.prototype.intersect = function(t, e, i) {
    var n = !0, a = !e;
    return e && _t.set(e, 0, 0), Nt.reset(i, !a), !this._intersectCheckOneSide(this, t, a, 1) && (n = !1, a) || !this._intersectCheckOneSide(t, this, a, -1) && (n = !1, a) || !a && !Nt.negativeSize && _t.copy(e, n ? Nt.useDir ? Nt.dirMinTv : No : Bo), n;
  }, r.prototype._intersectCheckOneSide = function(t, e, i, n) {
    for (var a = !0, o = 0; o < 2; o++) {
      var s = t._axes[o];
      if (t._getProjMinMaxOnAxis(o, t._corners, ai), t._getProjMinMaxOnAxis(o, e._corners, oi), Nt.negativeSize || ai[1] < oi[0] || ai[0] > oi[1]) {
        if (a = !1, Nt.negativeSize || i)
          return a;
        var l = Oo(oi[0] - ai[1]), u = Oo(ai[0] - oi[1]);
        Hu(l, u) > Bo.len() && (l < u ? _t.scale(Bo, s, -l * n) : _t.scale(Bo, s, u * n));
      } else if (!i) {
        var l = Oo(oi[0] - ai[1]), u = Oo(ai[0] - oi[1]);
        (Nt.useDir || Hu(l, u) < No.len()) && ((l < u || !Nt.bidirectional) && (_t.scale(No, s, l * n), Nt.useDir && Nt.calcDirMTV()), (l >= u || !Nt.bidirectional) && (_t.scale(No, s, -u * n), Nt.useDir && Nt.calcDirMTV()));
      }
    }
    return a;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, i) {
    for (var n = this._axes[t], a = this._origin, o = e[0].dot(n) + a[t], s = o, l = o, u = 1; u < e.length; u++) {
      var f = e[u].dot(n) + a[t];
      s = Hu(f, s), l = YC(f, l);
    }
    i[0] = s + Nt.touchThreshold, i[1] = l - Nt.touchThreshold, Nt.negativeSize = i[1] < i[0];
  }, r;
})(), s_ = 0, XC = 1, qC = 2, ZC = 1, xs = 0, KC = [], QC = (function(r) {
  N(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.notClear = !0, e.incremental = XC, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e;
  }
  return t.prototype.traverse = function(e, i) {
    e.call(i, this);
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
  }, t.prototype.addDisplayable = function(e, i) {
    i ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
  }, t.prototype.addDisplayables = function(e, i) {
    i = i || !1;
    for (var n = 0; n < e.length; n++)
      this.addDisplayable(e[n], i);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(e) {
    for (var i = this._cursor; i < this._displayables.length; i++)
      e && e(this._displayables[i]);
    for (var i = 0; i < this._temporaryDisplayables.length; i++)
      e && e(this._temporaryDisplayables[i]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var i = this._displayables[e];
      i.parent = this, i.update(), i.parent = null;
    }
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var i = this._temporaryDisplayables[e];
      i.parent = this, i.update(), i.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var e = new J(1 / 0, 1 / 0, -1 / 0, -1 / 0), i = 0; i < this._displayables.length; i++) {
        var n = this._displayables[i], a = n.getBoundingRect().clone();
        n.needLocalTransform() && a.applyTransform(n.getLocalTransform(KC)), e.union(a);
      }
      this._rect = e;
    }
    return this._rect;
  }, t.prototype.contain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect();
    if (a.contain(n[0], n[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(e, i))
          return !0;
      }
    return !1;
  }, t;
})(uo), jC = ht();
function JC(r, t, e, i, n) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), l = r === "update";
  if (s) {
    var u = void 0, f = void 0, c = void 0;
    i ? (u = V(i.duration, 200), f = V(i.easing, "cubicOut"), c = 0) : (u = t.getShallow(l ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(l ? "animationEasingUpdate" : "animationEasing"), c = t.getShallow(l ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (u = a.duration), a.easing != null && (f = a.easing), a.delay != null && (c = a.delay)), Z(c) && (c = c(e, n)), Z(u) && (u = u(e));
    var h = {
      duration: u || 0,
      delay: c,
      easing: f
    };
    return h;
  } else
    return null;
}
function iv(r, t, e, i, n, a, o) {
  var s = !1, l;
  Z(n) ? (o = a, a = n, n = null) : K(n) && (a = n.cb, o = n.during, s = n.isFrom, l = n.removeOpt, n = n.dataIndex);
  var u = r === "leave";
  u || t.stopAnimation("leave");
  var f = JC(r, i, n, u ? l || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null);
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
function Kt(r, t, e, i, n, a) {
  iv("update", r, t, e, i, n, a);
}
function je(r, t, e, i, n, a) {
  iv("enter", r, t, e, i, n, a);
}
function Ca(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function Js(r, t, e, i, n, a) {
  Ca(r) || iv("leave", r, t, e, i, n, a);
}
function Pp(r, t, e, i) {
  r.removeTextContent(), r.removeTextGuideLine(), Js(r, {
    style: {
      opacity: 0
    }
  }, t, e, i);
}
function Ts(r, t, e) {
  function i() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup ? r.traverse(function(n) {
    n.isGroup || Pp(n, t, e, i);
  }) : Pp(r, t, e, i);
}
function l_(r) {
  jC(r).oldStyle = r.style;
}
var Tc = {}, pi = ["x", "y"], Wa = ["width", "height"], u_ = 0, f_ = 1, Xl = 2;
function tA(r) {
  return dt.extend(r);
}
var eA = DC;
function rA(r, t) {
  return eA(r, t);
}
function Ne(r, t) {
  Tc[r] = t;
}
function iA(r) {
  if (Tc.hasOwnProperty(r))
    return Tc[r];
}
function nv(r, t, e, i) {
  var n = AC(r, t);
  return e && (i === "center" && (e = h_(e, n.getBoundingRect())), v_(n, e)), n;
}
function c_(r, t, e) {
  var i = new Hr({
    style: {
      image: r,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(n) {
      if (e === "center") {
        var a = {
          width: n.width,
          height: n.height
        };
        i.setStyle(h_(t, a));
      }
    }
  });
  return i;
}
function h_(r, t) {
  var e = t.width / t.height, i = r.height * e, n;
  i <= r.width ? n = r.height : (i = r.width, n = i / e);
  var a = r.x + r.width / 2, o = r.y + r.height / 2;
  return {
    x: a - i / 2,
    y: o - n / 2,
    width: i,
    height: n
  };
}
var nA = MC;
function v_(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), i = e.calculateTransform(t);
    r.applyTransform(i);
  }
}
function Ya(r, t) {
  return T0(r, r, {
    lineWidth: t
  }), r;
}
function aA(r, t) {
  return C0(r, r, t), r;
}
var oA = _i;
function sA(r, t) {
  for (var e = oo([]); r && r !== t; )
    ba(e, r.getLocalTransform(), e), r = r.parent;
  return e;
}
function av(r, t, e) {
  return t && !re(t) && (t = lo.getLocalTransform(t)), e && (t = so([], t)), we([], r, t);
}
function lA(r, t, e) {
  var i = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Et(2 * t[4] / t[0]), n = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Et(2 * t[4] / t[2]), a = [r === "left" ? -i : r === "right" ? i : 0, r === "top" ? -n : r === "bottom" ? n : 0];
  return a = av(a, t, e), Et(a[0]) > Et(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Ep(r) {
  return !r.isGroup;
}
function uA(r) {
  return r.shape != null;
}
function d_(r, t, e) {
  if (!r || !t)
    return;
  function i(o) {
    var s = {};
    return o.traverse(function(l) {
      Ep(l) && l.anid && (s[l.anid] = l);
    }), s;
  }
  function n(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return uA(o) && (s.shape = nt(o.shape)), s;
  }
  var a = i(r);
  t.traverse(function(o) {
    if (Ep(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var l = n(o);
        o.attr(n(s)), Kt(o, l, e, at(o).dataIndex);
      }
    }
  });
}
function fA(r, t) {
  return G(r, function(e) {
    var i = e[0];
    i = ct(i, t.x), i = Vt(i, t.x + t.width);
    var n = e[1];
    return n = ct(n, t.y), n = Vt(n, t.y + t.height), [i, n];
  });
}
function cA(r, t) {
  var e = ct(r.x, t.x), i = Vt(r.x + r.width, t.x + t.width), n = ct(r.y, t.y), a = Vt(r.y + r.height, t.y + t.height);
  if (i >= e && a >= n)
    return {
      x: e,
      y: n,
      width: i - e,
      height: a - n
    };
}
function ov(r, t, e) {
  var i = O({
    rectHover: !0
  }, t), n = i.style = {
    strokeNoScale: !0
  };
  if (e = e || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, r)
    return r.indexOf("image://") === 0 ? (n.image = r.slice(8), yt(n, e), new Hr(i)) : nv(r.replace("path://", ""), i, e, "center");
}
function hA(r, t, e, i, n) {
  for (var a = 0, o = n[n.length - 1]; a < n.length; a++) {
    var s = n[a];
    if (p_(r, t, e, i, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function p_(r, t, e, i, n, a, o, s) {
  var l = e - r, u = i - t, f = o - n, c = s - a, h = Vu(f, c, l, u);
  if (vA(h))
    return !1;
  var v = r - n, d = t - a, p = Vu(v, d, l, u) / h;
  if (p < 0 || p > 1)
    return !1;
  var m = Vu(v, d, f, c) / h;
  return !(m < 0 || m > 1);
}
function Vu(r, t, e, i) {
  return r * i - e * t;
}
function vA(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function tl(r, t, e, i, n) {
  return t == null || (bt(t) ? St[0] = St[1] = St[2] = St[3] = t : (St[0] = t[0], St[1] = t[1], St[2] = t[2], St[3] = t[3]), i && (St[0] = ct(0, St[0]), St[1] = ct(0, St[1]), St[2] = ct(0, St[2]), St[3] = ct(0, St[3])), e && (St[0] = -St[0], St[1] = -St[1], St[2] = -St[2], St[3] = -St[3]), kp(r, St, "x", "width", 3, 1, n && n[0] || 0), kp(r, St, "y", "height", 0, 2, n && n[1] || 0)), r;
}
var St = [0, 0, 0, 0];
function kp(r, t, e, i, n, a, o) {
  var s = t[a] + t[n], l = r[i];
  r[i] += s, o = ct(0, Vt(o, l)), r[i] < o ? (r[i] = o, r[e] += t[n] >= 0 ? -t[n] : t[a] >= 0 ? l + t[a] : Et(s) > 1e-8 ? (l - o) * t[n] / s : 0) : r[e] -= t[n];
}
function ql(r) {
  var t = r.itemTooltipOption, e = r.componentModel, i = r.itemName, n = W(t) ? {
    formatter: t
  } : t, a = e.mainType, o = e.componentIndex, s = {
    componentType: a,
    name: i,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var l = r.formatterParamsExtra;
  l && M(Tt(l), function(f) {
    qt(s, f) || (s[f] = l[f], s.$vars.push(f));
  });
  var u = at(r.el);
  u.componentMainType = a, u.componentIndex = o, u.tooltipConfig = {
    name: i,
    option: yt({
      content: i,
      encodeHTMLContent: !0,
      formatterParams: s
    }, n)
  };
}
function Cc(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function vo(r, t) {
  if (r)
    if (F(r))
      for (var e = 0; e < r.length; e++)
        Cc(r[e], t);
    else
      Cc(r, t);
}
function sv(r) {
  return !r || Et(r[1]) < Fo && Et(r[2]) < Fo || Et(r[0]) < Fo && Et(r[3]) < Fo;
}
var Fo = 1e-5;
function Xa(r, t) {
  return r ? J.copy(r, t) : t.clone();
}
function lv(r, t) {
  return t ? Nh(r || Xe(), t) : void 0;
}
function uv(r) {
  return {
    z: r.get("z") || 0,
    zlevel: r.get("zlevel") || 0
  };
}
function dA(r) {
  var t = -1 / 0, e = 1 / 0;
  Cc(r, function(a) {
    i(a), i(a.getTextContent()), i(a.getTextGuideLine());
  });
  function i(a) {
    if (!(!a || a.isGroup)) {
      var o = a.currentStates;
      if (o.length)
        for (var s = 0; s < o.length; s++)
          n(a.states[o[s]]);
      n(a);
    }
  }
  function n(a) {
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
function fv(r, t, e) {
  g_(r, t, e, -1 / 0);
}
function g_(r, t, e, i) {
  if (r.ignoreModelZ)
    return i;
  var n = r.getTextContent(), a = r.getTextGuideLine(), o = r.isGroup;
  if (o)
    for (var s = r.childrenRef(), l = 0; l < s.length; l++)
      i = ct(g_(s[l], t, e, i), i);
  else
    r.z = t, r.zlevel = e, i = ct(r.z2 || 0, i);
  if (n && (n.z = t, n.zlevel = e, isFinite(i) && (n.z2 = i + 2)), a) {
    var u = r.textGuideLineConfig;
    a.z = t, a.zlevel = e, isFinite(i) && (a.z2 = i + (u && u.showAbove ? 1 : -1));
  }
  return i;
}
function pA(r) {
  return r.animation = {
    duration: 0
  }, r;
}
function gA(r, t) {
  return t ? Nh(pa.transform, t) : oo(pa.transform), pa.decomposeTransform(), zs(r, pa), r;
}
var pa = new lo();
pa.transform = Xe();
function mA(r) {
  var t = r.getZr().painter;
  return t.getType() === "canvas" ? t : null;
}
Ne("circle", Ul);
Ne("ellipse", tv);
Ne("sector", Fn);
Ne("ring", ev);
Ne("polygon", Ua);
Ne("polyline", rv);
Ne("rect", It);
Ne("line", gr);
Ne("bezierCurve", Wl);
Ne("arc", Yl);
const yA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Yl,
  BezierCurve: Wl,
  BoundingRect: J,
  Circle: Ul,
  CompoundPath: UC,
  Ellipse: tv,
  Group: Lt,
  HOVER_LAYER_FOR_INCREMENTAL: Xl,
  HOVER_LAYER_FROM_THRESHOLD: f_,
  HOVER_LAYER_NO: u_,
  Image: Hr,
  IncrementalDisplayable: QC,
  Line: gr,
  LinearGradient: a_,
  OrientedBoundingRect: o_,
  Path: dt,
  Point: _t,
  Polygon: Ua,
  Polyline: rv,
  RadialGradient: WC,
  Rect: It,
  Ring: ev,
  Sector: Fn,
  Text: ne,
  WH: Wa,
  XY: pi,
  applyTransform: av,
  calcZ2Range: dA,
  clipPointsByRect: fA,
  clipRectByRect: cA,
  createIcon: ov,
  decomposeTransform: gA,
  ensureCopyRect: Xa,
  ensureCopyTransform: lv,
  expandOrShrinkRect: tl,
  extendPath: rA,
  extendShape: tA,
  getCurrentCanvasPainter: mA,
  getShapeClass: iA,
  getTransform: sA,
  groupTransition: d_,
  initProps: je,
  isBoundingRectAxisAligned: sv,
  isElementRemoved: Ca,
  lineLineIntersect: p_,
  linePolygonIntersect: hA,
  makeImage: c_,
  makePath: nv,
  mergePath: nA,
  payloadDisableAnimation: pA,
  registerShape: Ne,
  removeElement: Js,
  removeElementWithFadeOut: Ts,
  resizePath: v_,
  retrieveZInfo: uv,
  setTooltipConfig: ql,
  subPixelOptimize: oA,
  subPixelOptimizeLine: Ya,
  subPixelOptimizeRect: aA,
  transformDirection: lA,
  traverseElements: vo,
  traverseUpdateZ: fv,
  updateProps: Kt
}, Symbol.toStringTag, { value: "Module" }));
var Zl = {};
function _A(r, t) {
  for (var e = 0; e < Ce.length; e++) {
    var i = Ce[e], n = t[i], a = r.ensureState(i);
    a.style = a.style || {}, a.style.text = n;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function Rp(r, t, e) {
  var i = r.labelFetcher, n = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  i && (s = i.getFormattedLabel(n, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = Z(r.defaultText) ? r.defaultText(n, r, e) : r.defaultText);
  for (var l = {
    normal: s
  }, u = 0; u < Ce.length; u++) {
    var f = Ce[u], c = t[f];
    l[f] = V(i ? i.getFormattedLabel(n, f, null, a, c && c.get("formatter")) : null, s);
  }
  return l;
}
function zn(r, t, e, i) {
  e = e || Zl;
  for (var n = r instanceof ne, a = !1, o = 0; o < mp.length; o++) {
    var s = t[mp[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var l = n ? r : r.getTextContent();
  if (a) {
    n || (l || (l = new ne(), r.setTextContent(l)), r.stateProxy && (l.stateProxy = r.stateProxy));
    var u = Rp(e, t), f = t.normal, c = !!f.getShallow("show"), h = Dn(f, i && i.normal, e, !1, !n);
    h.text = u.normal, n || r.setTextConfig(Op(f, e, !1));
    for (var o = 0; o < Ce.length; o++) {
      var v = Ce[o], s = t[v];
      if (s) {
        var d = l.ensureState(v), p = !!V(s.getShallow("show"), c);
        if (p !== c && (d.ignore = !p), d.style = Dn(s, i && i[v], e, !0, !n), d.style.text = u[v], !n) {
          var m = r.ensureState(v);
          m.textConfig = Op(s, e, !0);
        }
      }
    }
    l.silent = !!f.getShallow("silent"), l.style.x != null && (h.x = l.style.x), l.style.y != null && (h.y = l.style.y), l.ignore = !c, l.useStyle(h), l.dirty(), e.enableTextSetter && (Kl(l).setLabelText = function(g) {
      var y = Rp(e, t, g);
      _A(l, y);
    });
  } else l && (l.ignore = !0);
  r.dirty();
}
function zi(r, t) {
  t = t || "label";
  for (var e = {
    normal: r.getModel(t)
  }, i = 0; i < Ce.length; i++) {
    var n = Ce[i];
    e[n] = r.getModel([n, t]);
  }
  return e;
}
function Dn(r, t, e, i, n) {
  var a = {};
  return bA(a, r, e, i, n), t && O(a, t), a;
}
function Op(r, t, e) {
  t = t || {};
  var i = {}, n, a = r.getShallow("rotate"), o = V(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
  return n = r.getShallow("position") || (e ? null : "inside"), n === "outside" && (n = t.defaultOutsidePosition || "top"), n != null && (i.position = n), s != null && (i.offset = s), a != null && (a *= Math.PI / 180, i.rotation = a), o != null && (i.distance = o), i.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", t.autoOverflowArea != null && (i.autoOverflowArea = t.autoOverflowArea), t.layoutRect != null && (i.layoutRect = t.layoutRect), i;
}
function bA(r, t, e, i, n) {
  e = e || Zl;
  var a = t.ecModel, o = a && a.option.textStyle, s = SA(t), l;
  if (s) {
    l = {};
    var u = "richInheritPlainLabel", f = V(t.get(u), a ? a.get(u) : void 0);
    for (var c in s)
      if (s.hasOwnProperty(c)) {
        var h = t.getModel(["rich", c]);
        zp(l[c] = {}, h, o, t, f, e, i, n, !1, !0);
      }
  }
  l && (r.rich = l);
  var v = t.get("overflow");
  v && (r.overflow = v);
  var d = t.get("lineOverflow");
  d && (r.lineOverflow = d);
  var p = r, m = t.get("minMargin");
  if (m != null)
    m = bt(m) ? m / 2 : 0, p.margin = [m, m, m, m], p.__marginType = cn.minMargin;
  else {
    var g = t.get("textMargin");
    g != null && (p.margin = Rh(g), p.__marginType = cn.textMargin);
  }
  zp(r, t, o, null, null, e, i, n, !0, !1);
}
function SA(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || Zl).rich;
    if (e) {
      t = t || {};
      for (var i = Tt(e), n = 0; n < i.length; n++) {
        var a = i[n];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var Np = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], Bp = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], Fp = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function zp(r, t, e, i, n, a, o, s, l, u) {
  e = !o && e || Zl;
  var f = a && a.inheritColor, c = t.getShallow("color"), h = t.getShallow("textBorderColor"), v = V(t.getShallow("opacity"), e.opacity);
  (c === "inherit" || c === "auto") && (f ? c = f : c = null), (h === "inherit" || h === "auto") && (f ? h = f : h = null), s || (c = c || e.color, h = h || e.textBorderColor), c != null && (r.fill = c), h != null && (r.stroke = h);
  var d = V(t.getShallow("textBorderWidth"), e.textBorderWidth);
  d != null && (r.lineWidth = d);
  var p = V(t.getShallow("textBorderType"), e.textBorderType);
  p != null && (r.lineDash = p);
  var m = V(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  m != null && (r.lineDashOffset = m), !o && v == null && !u && (v = a && a.defaultOpacity), v != null && (r.opacity = v), !o && !s && r.fill == null && a.inheritColor && (r.fill = a.inheritColor);
  for (var g = 0; g < Np.length; g++) {
    var y = Np[g], _ = n !== !1 && i ? vn(t.getShallow(y), i.getShallow(y), e[y]) : V(t.getShallow(y), e[y]);
    _ != null && (r[y] = _);
  }
  for (var g = 0; g < Bp.length; g++) {
    var y = Bp[g], _ = t.getShallow(y);
    _ != null && (r[y] = _);
  }
  if (r.verticalAlign == null) {
    var b = t.getShallow("baseline");
    b != null && (r.verticalAlign = b);
  }
  if (!l || !a.disableBox) {
    for (var g = 0; g < Fp.length; g++) {
      var y = Fp[g], _ = t.getShallow(y);
      _ != null && (r[y] = _);
    }
    var S = t.getShallow("borderType");
    S != null && (r.borderDash = S), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && f && (r.backgroundColor = f), (r.borderColor === "auto" || r.borderColor === "inherit") && f && (r.borderColor = f);
  }
}
function wA(r, t) {
  var e = t && t.getModel("textStyle");
  return We([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Kl = ht();
function xA(r, t, e, i) {
  if (r) {
    var n = Kl(r);
    n.prevValue = n.value, n.value = e;
    var a = t.normal;
    n.valueAnimation = a.get("valueAnimation"), n.valueAnimation && (n.precision = a.get("precision"), n.defaultInterpolatedText = i, n.statesModels = t);
  }
}
var cn = {
  minMargin: 1,
  textMargin: 2
}, TA = ["textStyle", "color"], Gu = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Uu = new ne(), CA = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(TA) : null);
    }, r.prototype.getFont = function() {
      return wA({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, i = 0; i < Gu.length; i++)
        e[Gu[i]] = this.getShallow(Gu[i]);
      return Uu.useStyle(e), Uu.update(), Uu.getBoundingRect();
    }, r;
  })()
), m_ = [
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
], AA = Fa(m_), DA = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return AA(this, t);
    }, r;
  })()
), y_ = [
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
], MA = Fa(y_), IA = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return MA(this, t, e);
    }, r;
  })()
), Ct = (
  /** @class */
  (function() {
    function r(t, e, i) {
      this.parentModel = e, this.ecModel = i, this.option = t;
    }
    return r.prototype.init = function(t, e, i) {
    }, r.prototype.mergeOption = function(t, e) {
      ft(this.option, t, !0);
    }, r.prototype.get = function(t, e) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
    }, r.prototype.getShallow = function(t, e) {
      var i = this.option, n = i == null ? i : i[t];
      if (n == null && !e) {
        var a = this.parentModel;
        a && (n = a.getShallow(t));
      }
      return n;
    }, r.prototype.getModel = function(t, e) {
      var i = t != null, n = i ? this.parsePath(t) : null, a = i ? this._doGet(n) : this.option;
      return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(n)), new r(a, e, this.ecModel);
    }, r.prototype.isEmpty = function() {
      return this.option == null;
    }, r.prototype.restoreData = function() {
    }, r.prototype.clone = function() {
      var t = this.constructor;
      return new t(nt(this.option));
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
      var i = this.option;
      if (!t)
        return i;
      for (var n = 0; n < t.length && !(t[n] && (i = i && typeof i == "object" ? i[t[n]] : null, i == null)); n++)
        ;
      return i == null && e && (i = e._doGet(this.resolveParentPath(t), e.parentModel)), i;
    }, r;
  })()
);
Oh(Ct);
zw(Ct);
Re(Ct, DA);
Re(Ct, IA);
Re(Ct, Uw);
Re(Ct, CA);
function Zn(r) {
  return r == null ? 0 : r.length || 1;
}
function $p(r) {
  return r;
}
var LA = (
  /** @class */
  (function() {
    function r(t, e, i, n, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = i || $p, this._newKeyGetter = n || $p, this.context = a, this._diffModeMultiple = o === "multiple";
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
      var t = this._old, e = this._new, i = {}, n = new Array(t.length), a = new Array(e.length);
      this._initIndexMap(t, null, n, "_oldKeyGetter"), this._initIndexMap(e, i, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = n[o], l = i[s], u = Zn(l);
        if (u > 1) {
          var f = l.shift();
          l.length === 1 && (i[s] = l[0]), this._update && this._update(f, o);
        } else u === 1 ? (i[s] = null, this._update && this._update(l, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, i);
    }, r.prototype._executeMultiple = function() {
      var t = this._old, e = this._new, i = {}, n = {}, a = [], o = [];
      this._initIndexMap(t, i, a, "_oldKeyGetter"), this._initIndexMap(e, n, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var l = a[s], u = i[l], f = n[l], c = Zn(u), h = Zn(f);
        if (c > 1 && h === 1)
          this._updateManyToOne && this._updateManyToOne(f, u), n[l] = null;
        else if (c === 1 && h > 1)
          this._updateOneToMany && this._updateOneToMany(f, u), n[l] = null;
        else if (c === 1 && h === 1)
          this._update && this._update(f, u), n[l] = null;
        else if (c > 1 && h > 1)
          this._updateManyToMany && this._updateManyToMany(f, u), n[l] = null;
        else if (c > 1)
          for (var v = 0; v < c; v++)
            this._remove && this._remove(u[v]);
        else
          this._remove && this._remove(u);
      }
      this._performRestAdd(o, n);
    }, r.prototype._performRestAdd = function(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i], a = e[n], o = Zn(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        e[n] = null;
      }
    }, r.prototype._initIndexMap = function(t, e, i, n) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[n](t[o], o);
        if (a || (i[o] = s), !!e) {
          var l = e[s], u = Zn(l);
          u === 0 ? (e[s] = o, a && i.push(s)) : u === 1 ? e[s] = [l, o] : l.push(o);
        }
      }
    }, r;
  })()
), ae = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, __ = ht();
function PA(r) {
  __(r).datasetMap = j();
}
function EA(r, t, e) {
  var i = {}, n = b_(t);
  if (!n || !r)
    return i;
  var a = [], o = [], s = t.ecModel, l = __(s).datasetMap, u = n.uid + "_" + e.seriesLayoutBy, f, c;
  r = r.slice(), M(r, function(p, m) {
    var g = K(p) ? p : r[m] = {
      name: p
    };
    g.type === "ordinal" && f == null && (f = m, c = d(g)), i[g.name] = [];
  });
  var h = l.get(u) || l.set(u, {
    categoryWayDim: c,
    valueWayDim: 0
  });
  M(r, function(p, m) {
    var g = p.name, y = d(p);
    if (f == null) {
      var _ = h.valueWayDim;
      v(i[g], _, y), v(o, _, y), h.valueWayDim += y;
    } else if (f === m)
      v(i[g], 0, y), v(a, 0, y);
    else {
      var _ = h.categoryWayDim;
      v(i[g], _, y), v(o, _, y), h.categoryWayDim += y;
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
  return a.length && (i.itemName = a), o.length && (i.seriesName = o), i;
}
function b_(r) {
  var t = r.get("data", !0);
  if (!t)
    return ho(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, _e).models[0];
}
function kA(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : ho(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, _e).models;
}
function S_(r, t) {
  return RA(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function RA(r, t, e, i, n, a) {
  var o, s = 5;
  if (ie(r))
    return ae.Not;
  var l, u;
  if (i) {
    var f = i[a];
    K(f) ? (l = f.name, u = f.type) : W(f) && (l = f);
  }
  if (u != null)
    return u === "ordinal" ? ae.Must : ae.Not;
  if (t === Gt) {
    var c = r;
    if (e === Fi) {
      for (var h = c[a], v = 0; v < (h || []).length && v < s; v++)
        if ((o = b(h[n + v])) != null)
          return o;
    } else
      for (var v = 0; v < c.length && v < s; v++) {
        var d = c[n + v];
        if (d && (o = b(d[a])) != null)
          return o;
      }
  } else if (t === Oe) {
    var p = r;
    if (!l)
      return ae.Not;
    for (var v = 0; v < p.length && v < s; v++) {
      var m = p[v];
      if (m && (o = b(m[l])) != null)
        return o;
    }
  } else if (t === rr) {
    var g = r;
    if (!l)
      return ae.Not;
    var h = g[l];
    if (!h || ie(h))
      return ae.Not;
    for (var v = 0; v < h.length && v < s; v++)
      if ((o = b(h[v])) != null)
        return o;
  } else if (t === le)
    for (var y = r, v = 0; v < y.length && v < s; v++) {
      var m = y[v], _ = co(m);
      if (!F(_))
        return ae.Not;
      if ((o = b(_[a])) != null)
        return o;
    }
  function b(S) {
    var w = W(S);
    if (S != null && isFinite(Number(S)) && S !== "")
      return w ? ae.Might : ae.Not;
    if (w && S !== "-")
      return ae.Must;
  }
  return ae.Not;
}
var Ql = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === rr ? {} : []), this.sourceFormat = t.sourceFormat || H0, this.seriesLayoutBy = t.seriesLayoutBy || Qe, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.type == null && S_(this, i) === ae.Must && (n.type = "ordinal");
        }
    }
    return r;
  })()
);
function cv(r) {
  return r instanceof Ql;
}
function Ac(r, t, e) {
  e = e || x_(r);
  var i = t.seriesLayoutBy, n = NA(r, e, i, t.sourceHeader, t.dimensions), a = new Ql({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: i,
    dimensionsDefine: n.dimensionsDefine,
    startIndex: n.startIndex,
    dimensionsDetectedCount: n.dimensionsDetectedCount,
    metaRawOption: nt(t)
  });
  return a;
}
function w_(r) {
  return new Ql({
    data: r,
    sourceFormat: ie(r) ? Or : le
  });
}
function OA(r) {
  return new Ql({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: nt(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function x_(r) {
  var t = H0;
  if (ie(r))
    t = Or;
  else if (F(r)) {
    r.length === 0 && (t = Gt);
    for (var e = 0, i = r.length; e < i; e++) {
      var n = r[e];
      if (n != null) {
        if (F(n) || ie(n)) {
          t = Gt;
          break;
        } else if (K(n)) {
          t = Oe;
          break;
        }
      }
    }
  } else if (K(r)) {
    for (var a in r)
      if (qt(r, a) && re(r[a])) {
        t = rr;
        break;
      }
  }
  return t;
}
function NA(r, t, e, i, n) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: Hp(n),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === Gt) {
    var s = r;
    i === "auto" || i == null ? Vp(function(u) {
      u != null && u !== "-" && (W(u) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = bt(i) ? i : i ? 1 : 0, !n && o === 1 && (n = [], Vp(function(u, f) {
      n[f] = u != null ? u + "" : "";
    }, e, s, 1 / 0)), a = n ? n.length : e === Fi ? s.length : s[0] ? s[0].length : null;
  } else if (t === Oe)
    n || (n = BA(r));
  else if (t === rr)
    n || (n = [], M(r, function(u, f) {
      n.push(f);
    }));
  else if (t === le) {
    var l = co(r[0]);
    a = F(l) && l.length || 1;
  }
  return {
    startIndex: o,
    dimensionsDefine: Hp(n),
    dimensionsDetectedCount: a
  };
}
function BA(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return Tt(e);
}
function Hp(r) {
  if (r) {
    var t = j();
    return G(r, function(e, i) {
      e = K(e) ? e : {
        name: e
      };
      var n = {
        name: e.name,
        displayName: e.displayName,
        type: e.type
      };
      if (n.name == null)
        return n;
      n.name += "", n.displayName == null && (n.displayName = n.name);
      var a = t.get(n.name);
      return a ? n.name += "-" + a.count++ : t.set(n.name, {
        count: 1
      }), n;
    });
  }
}
function Vp(r, t, e, i) {
  if (t === Fi)
    for (var n = 0; n < e.length && n < i; n++)
      r(e[n] ? e[n][0] : null, n);
  else
    for (var a = e[0] || [], n = 0; n < a.length && n < i; n++)
      r(a[n], n);
}
function T_(r) {
  var t = r.sourceFormat;
  return t === Oe || t === rr;
}
var si, li, ui, fi, Gp, Up, C_ = (
  /** @class */
  (function() {
    function r(t, e) {
      var i = cv(t) ? t : w_(t);
      this._source = i;
      var n = this._data = i.data, a = i.sourceFormat;
      i.seriesLayoutBy, a === Or && (this._offset = 0, this._dimSize = e, this._data = n), Up(this, n, i);
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
      Up = function(o, s, l) {
        var u = l.sourceFormat, f = l.seriesLayoutBy, c = l.startIndex, h = l.dimensionsDefine, v = Gp[hv(u, f)];
        if (O(o, v), u === Or)
          o.getItem = e, o.count = n, o.fillStorage = i;
        else {
          var d = A_(u, f);
          o.getItem = xt(d, null, s, c, h);
          var p = D_(u, f);
          o.count = xt(p, null, s, c, h);
        }
      };
      var e = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var l = this._data, u = this._dimSize, f = u * o, c = 0; c < u; c++)
          s[c] = l[f + c];
        return s;
      }, i = function(o, s, l, u) {
        for (var f = this._data, c = this._dimSize, h = 0; h < c; h++) {
          for (var v = u[h], d = v[0] == null ? 1 / 0 : v[0], p = v[1] == null ? -1 / 0 : v[1], m = s - o, g = l[h], y = 0; y < m; y++) {
            var _ = f[y * c + h];
            g[o + y] = _, _ < d && (d = _), _ > p && (p = _);
          }
          v[0] = d, v[1] = p;
        }
      }, n = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      Gp = (t = {}, t[Gt + "_" + Qe] = {
        pure: !0,
        appendData: a
      }, t[Gt + "_" + Fi] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Oe] = {
        pure: !0,
        appendData: a
      }, t[rr] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          M(o, function(l, u) {
            for (var f = s[u] || (s[u] = []), c = 0; c < (l || []).length; c++)
              f.push(l[c]);
          });
        }
      }, t[le] = {
        appendData: a
      }, t[Or] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          this._data = o;
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
), zo = function(r) {
  F(r) || P0("series.data or dataset.source must be an array.");
};
si = {}, si[Gt + "_" + Qe] = zo, si[Gt + "_" + Fi] = zo, si[Oe] = zo, si[rr] = function(r, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e].name;
    i == null && P0("dimension name must not be null/undefined.");
  }
}, si[le] = zo;
var Wp = function(r, t, e, i) {
  return r[i];
}, FA = (li = {}, li[Gt + "_" + Qe] = function(r, t, e, i) {
  return r[i + t];
}, li[Gt + "_" + Fi] = function(r, t, e, i, n) {
  i += t;
  for (var a = n || [], o = r, s = 0; s < o.length; s++) {
    var l = o[s];
    a[s] = l ? l[i] : null;
  }
  return a;
}, li[Oe] = Wp, li[rr] = function(r, t, e, i, n) {
  for (var a = n || [], o = 0; o < e.length; o++) {
    var s = e[o].name, l = s != null ? r[s] : null;
    a[o] = l ? l[i] : null;
  }
  return a;
}, li[le] = Wp, li);
function A_(r, t) {
  var e = FA[hv(r, t)];
  return e;
}
var Yp = function(r, t, e) {
  return r.length;
}, zA = (ui = {}, ui[Gt + "_" + Qe] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, ui[Gt + "_" + Fi] = function(r, t, e) {
  var i = r[0];
  return i ? Math.max(0, i.length - t) : 0;
}, ui[Oe] = Yp, ui[rr] = function(r, t, e) {
  var i = e[0].name, n = i != null ? r[i] : null;
  return n ? n.length : 0;
}, ui[le] = Yp, ui);
function D_(r, t) {
  var e = zA[hv(r, t)];
  return e;
}
var Wu = function(r, t, e) {
  return r[t];
}, $A = (fi = {}, fi[Gt] = Wu, fi[Oe] = function(r, t, e) {
  return r[e];
}, fi[rr] = Wu, fi[le] = function(r, t, e) {
  var i = co(r);
  return i instanceof Array ? i[t] : i;
}, fi[Or] = Wu, fi);
function M_(r) {
  var t = $A[r];
  return t;
}
function hv(r, t) {
  return r === Gt ? r + "_" + t : r;
}
function Mn(r, t, e) {
  if (r) {
    var i = r.getRawDataItem(t);
    if (i != null) {
      var n = r.getStore(), a = n.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = n.getDimensionProperty(o);
        return M_(a)(i, o, s);
      } else {
        var l = i;
        return a === le && (l = co(i)), l;
      }
    }
  }
}
var HA = (
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
function VA(r, t) {
  var e = {}, i = e.encode = {}, n = j(), a = [], o = [], s = {};
  M(r.dimensions, function(h) {
    var v = r.getDimensionInfo(h), d = v.coordDim;
    if (d) {
      var p = v.coordDimIndex;
      Yu(i, d)[p] = h, v.isExtraCoord || (n.set(d, 1), UA(v.type) && (a[0] = h), Yu(s, d)[p] = r.getDimensionIndex(v.name)), v.defaultTooltip && o.push(h);
    }
    $0.each(function(m, g) {
      var y = Yu(i, g), _ = v.otherDims[g];
      _ != null && _ !== !1 && (y[_] = v.name);
    });
  });
  var l = [], u = {};
  n.each(function(h, v) {
    var d = i[v];
    u[v] = d[0], l = l.concat(d);
  }), e.dataDimsOnCoord = l, e.dataDimIndicesOnCoord = G(l, function(h) {
    return r.getDimensionInfo(h).storeDimIndex;
  }), e.encodeFirstDimNotExtra = u;
  var f = i.label;
  f && f.length && (a = f.slice());
  var c = i.tooltip;
  return c && c.length ? o = c.slice() : o.length || (o = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = o, e.userOutput = new HA(s, t), e;
}
function Yu(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function GA(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function UA(r) {
  return !(r === "ordinal" || r === "time");
}
var Cs = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.otherDims = {}, t != null && O(this, t);
    }
    return r;
  })()
);
function Nr(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !bt(r) && r != null && r !== "-" && (r = +Nn(r)), r == null || r === "" ? NaN : Number(r));
}
j({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +Nn(r);
  },
  trim: function(r) {
    return W(r) ? We(r) : r;
  }
});
var WA = (
  /** @class */
  (function() {
    function r(t, e) {
      var i = t === "desc";
      this._resultLT = i ? 1 : -1, e == null && (e = i ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
    }
    return r.prototype.evaluate = function(t, e) {
      var i = bt(t) ? t : Zs(t), n = bt(e) ? e : Zs(e), a = isNaN(i), o = isNaN(n);
      if (a && (i = this._incomparable), o && (n = this._incomparable), a && o) {
        var s = W(t), l = W(e);
        s && (i = l ? t : 0), l && (n = s ? e : 0);
      }
      return i < n ? this._resultLT : i > n ? -this._resultLT : 0;
    }, r;
  })()
);
function I_(r) {
  var t = "", e = -1 / 0, i = -1 / 0, n = 1 / 0, a = 1 / 0;
  return r && (r.g != null && (t += "G" + r.g, e = r.g), r.ge != null && (t += "GE" + r.ge, i = r.ge), r.l != null && (t += "L" + r.l, n = r.l), r.le != null && (t += "LE" + r.le, a = r.le)), {
    key: t,
    g: e,
    ge: i,
    l: n,
    le: a
  };
}
function L_(r, t) {
  return t > r.g && t >= r.ge && t < r.l && t <= r.le;
}
var YA = typeof Uint32Array === Bn ? Array : Uint32Array, XA = typeof Uint16Array === Bn ? Array : Uint16Array, P_ = typeof Int32Array === Bn ? Array : Int32Array, Xp = typeof Float64Array === Bn ? Array : Float64Array, E_ = {
  float: Xp,
  int: P_,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Xp
}, Xu;
function qi(r) {
  return r > 65535 ? YA : XA;
}
function qA(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function qp(r, t, e, i, n) {
  var a = E_[e || "float"];
  if (n) {
    var o = r[t], s = o && o.length;
    if (s !== i) {
      for (var l = new a(i), u = 0; u < s; u++)
        l[u] = o[u];
      r[t] = l;
    }
  } else
    r[t] = new a(i);
}
var Dc = (
  /** @class */
  (function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = j();
    }
    return r.prototype.initData = function(t, e, i) {
      this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var n = t.getSource(), a = this.defaultDimValueGetter = Xu[n.sourceFormat];
      this._dimValueGetter = i || a, this._rawExtent = [], T_(n), this._dimensions = G(e, function(o) {
        return {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: o.type,
          property: o.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, r.prototype.getProvider = function() {
      return this._provider;
    }, r.prototype.getSource = function() {
      return this._provider.getSource();
    }, r.prototype.ensureCalculationDimension = function(t, e) {
      var i = this._calcDimNameToIdx, n = this._dimensions, a = i.get(t);
      if (a != null) {
        if (n[a].type === e)
          return a;
      } else
        a = n.length;
      return n[a] = {
        type: e
      }, i.set(t, a), this._chunks[a] = new E_[e || "float"](this._rawCount), this._rawExtent[a] = ye(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var i = this._chunks[t], n = this._dimensions[t], a = this._rawExtent, o = n.ordinalOffset || 0, s = i.length;
      o === 0 && (a[t] = ye());
      for (var l = a[t], u = o; u < s; u++) {
        var f = i[u] = e.parseAndCollect(i[u]);
        isNaN(f) || (l[0] = Math.min(f, l[0]), l[1] = Math.max(f, l[1]));
      }
      n.ordinalMeta = e, n.ordinalOffset = s, n.type = "ordinal";
    }, r.prototype.getOrdinalMeta = function(t) {
      var e = this._dimensions[t], i = e.ordinalMeta;
      return i;
    }, r.prototype.getDimensionProperty = function(t) {
      var e = this._dimensions[t];
      return e && e.property;
    }, r.prototype.appendData = function(t) {
      var e = this._provider, i = this.count();
      e.appendData(t);
      var n = e.count();
      return e.persistent || (n += i), i < n && this._initDataFromProvider(i, n, !0), [i, n];
    }, r.prototype.appendValues = function(t, e) {
      for (var i = this._chunks, n = this._dimensions, a = n.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e || 0), u = 0; u < a; u++) {
        var f = n[u];
        qp(i, u, f.type, l, !0);
      }
      for (var c = [], h = s; h < l; h++)
        for (var v = h - s, d = 0; d < a; d++) {
          var f = n[d], p = Xu.arrayRows.call(this, t[v] || c, f.property, v, d);
          i[d][h] = p;
          var m = o[d];
          p < m[0] && (m[0] = p), p > m[1] && (m[1] = p);
        }
      return this._rawCount = this._count = l, {
        start: s,
        end: l
      };
    }, r.prototype._initDataFromProvider = function(t, e, i) {
      for (var n = this._provider, a = this._chunks, o = this._dimensions, s = o.length, l = this._rawExtent, u = G(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var c = o[f];
        l[f] || (l[f] = ye()), qp(a, f, c.type, e, i);
      }
      if (n.fillStorage)
        n.fillStorage(t, e, a, l);
      else
        for (var h = [], v = t; v < e; v++) {
          h = n.getItem(v, h);
          for (var d = 0; d < s; d++) {
            var p = a[d], m = this._dimValueGetter(h, u[d], v, d);
            p[v] = m;
            var g = l[d];
            m < g[0] && (g[0] = m), m > g[1] && (g[1] = m);
          }
        }
      !n.persistent && n.clean && n.clean(), this._rawCount = this._count = e, this._extent = [];
    }, r.prototype.count = function() {
      return this._count;
    }, r.prototype.get = function(t, e) {
      if (!(e >= 0 && e < this._count))
        return NaN;
      var i = this._chunks[t];
      return i ? i[this.getRawIndex(e)] : NaN;
    }, r.prototype.getValues = function(t, e) {
      var i = [], n = [];
      if (e == null) {
        e = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          n.push(a);
      } else
        n = t;
      for (var a = 0, o = n.length; a < o; a++)
        i.push(this.get(n[a], e));
      return i;
    }, r.prototype.getByRawIndex = function(t, e) {
      if (!(e >= 0 && e < this._rawCount))
        return NaN;
      var i = this._chunks[t];
      return i ? i[e] : NaN;
    }, r.prototype.getSum = function(t) {
      var e = this._chunks[t], i = 0;
      if (e)
        for (var n = 0, a = this.count(); n < a; n++) {
          var o = this.get(t, n);
          isNaN(o) || (i += o);
        }
      return i;
    }, r.prototype.getMedian = function(t) {
      var e = [];
      this.each([t], function(n) {
        isNaN(n) || e.push(n);
      }), $a(e);
      var i = this.count();
      return i === 0 ? 0 : i % 2 === 1 ? e[(i - 1) / 2] : (e[i / 2] + e[i / 2 - 1]) / 2;
    }, r.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var e = this._indices, i = e[t];
      if (i != null && i < this._count && i === t)
        return t;
      for (var n = 0, a = this._count - 1; n <= a; ) {
        var o = (n + a) / 2 | 0;
        if (e[o] < t)
          n = o + 1;
        else if (e[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, r.prototype.getIndices = function() {
      var t, e = this._indices;
      if (e) {
        var i = e.constructor, n = this._count;
        if (i === Array) {
          t = new i(n);
          for (var a = 0; a < n; a++)
            t[a] = e[a];
        } else
          t = new i(e.buffer, 0, n);
      } else {
        var i = qi(this._rawCount);
        t = new i(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var i = this.clone(), n = i.count(), a = qi(i._rawCount), o = new a(n), s = [], l = t.length, u = 0, f = t[0], c = i._chunks, h = 0; h < n; h++) {
        var v = void 0, d = i.getRawIndex(h);
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
      return u < n && (i._indices = o), i._count = u, i._extent = [], i._updateGetRawIdx(), i;
    }, r.prototype.selectRange = function(t) {
      var e = this.clone(), i = e._count;
      if (!i)
        return this;
      var n = Tt(t), a = n.length;
      if (!a)
        return this;
      var o = e.count(), s = qi(e._rawCount), l = new s(o), u = 0, f = n[0], c = t[f][0], h = t[f][1], v = e._chunks, d = !1;
      if (!e._indices) {
        var p = 0;
        if (a === 1) {
          for (var m = v[n[0]], g = 0; g < i; g++) {
            var y = m[g];
            (y >= c && y <= h || isNaN(y)) && (l[u++] = p), p++;
          }
          d = !0;
        } else if (a === 2) {
          for (var m = v[n[0]], _ = v[n[1]], b = t[n[1]][0], S = t[n[1]][1], g = 0; g < i; g++) {
            var y = m[g], w = _[g];
            (y >= c && y <= h || isNaN(y)) && (w >= b && w <= S || isNaN(w)) && (l[u++] = p), p++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var x = e.getRawIndex(g), y = v[n[0]][x];
            (y >= c && y <= h || isNaN(y)) && (l[u++] = x);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var T = !0, x = e.getRawIndex(g), C = 0; C < a; C++) {
              var D = n[C], y = v[D][x];
              (y < t[D][0] || y > t[D][1]) && (T = !1);
            }
            T && (l[u++] = e.getRawIndex(g));
          }
      return u < o && (e._indices = l), e._count = u, e._extent = [], e._updateGetRawIdx(), e;
    }, r.prototype.map = function(t, e) {
      var i = this.clone(t);
      return this._updateDims(i, t, e), i;
    }, r.prototype.modify = function(t, e) {
      this._updateDims(this, t, e);
    }, r.prototype._updateDims = function(t, e, i) {
      for (var n = t._chunks, a = [], o = e.length, s = t.count(), l = [], u = t._rawExtent, f = 0; f < e.length; f++)
        u[e[f]] = ye();
      for (var c = 0; c < s; c++) {
        for (var h = t.getRawIndex(c), v = 0; v < o; v++)
          l[v] = n[e[v]][h];
        l[o] = c;
        var d = i && i.apply(null, l);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var p = e[f], m = d[f], g = u[p], y = n[p];
            y && (y[h] = m), m < g[0] && (g[0] = m), m > g[1] && (g[1] = m);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = this.clone([t], !0), n = i._chunks, a = n[t], o = this.count(), s = 0, l = Math.floor(1 / e), u = this.getRawIndex(0), f, c, h, v = new (qi(this._rawCount))(Math.min((Math.ceil(o / l) + 2) * 2, o));
      v[s++] = u;
      for (var d = 1; d < o - 1; d += l) {
        for (var p = Math.min(d + l, o - 1), m = Math.min(d + l * 2, o), g = (m + p) / 2, y = 0, _ = p; _ < m; _++) {
          var b = this.getRawIndex(_), S = a[b];
          isNaN(S) || (y += S);
        }
        y /= m - p;
        var w = d, x = Math.min(d + l, o), T = d - 1, C = a[u];
        f = -1, h = w;
        for (var D = -1, A = 0, _ = w; _ < x; _++) {
          var b = this.getRawIndex(_), S = a[b];
          if (isNaN(S)) {
            A++, D < 0 && (D = b);
            continue;
          }
          c = Math.abs((T - g) * (S - C) - (T - _) * (y - C)), c > f && (f = c, h = b);
        }
        A > 0 && A < x - w && (v[s++] = Math.min(D, h), h = Math.max(D, h)), v[s++] = h, u = h;
      }
      return v[s++] = this.getRawIndex(o - 1), i._count = s, i._indices = v, i.getRawIndex = this._getRawIdx, i;
    }, r.prototype.minmaxDownSample = function(t, e) {
      for (var i = this.clone([t], !0), n = i._chunks, a = Math.floor(1 / e), o = n[t], s = this.count(), l = new (qi(this._rawCount))(Math.ceil(s / a) * 2), u = 0, f = 0; f < s; f += a) {
        var c = f, h = o[this.getRawIndex(c)], v = f, d = o[this.getRawIndex(v)], p = a;
        f + a > s && (p = s - f);
        for (var m = 0; m < p; m++) {
          var g = this.getRawIndex(f + m), y = o[g];
          y < h && (h = y, c = f + m), y > d && (d = y, v = f + m);
        }
        var _ = this.getRawIndex(c), b = this.getRawIndex(v);
        c < v ? (l[u++] = _, l[u++] = b) : (l[u++] = b, l[u++] = _);
      }
      return i._count = u, i._indices = l, i._updateGetRawIdx(), i;
    }, r.prototype.downSample = function(t, e, i, n) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], l = Math.floor(1 / e), u = o[t], f = this.count(), c = a._rawExtent[t] = ye(), h = new (qi(this._rawCount))(Math.ceil(f / l)), v = 0, d = 0; d < f; d += l) {
        l > f - d && (l = f - d, s.length = l);
        for (var p = 0; p < l; p++) {
          var m = this.getRawIndex(d + p);
          s[p] = u[m];
        }
        var g = i(s), y = this.getRawIndex(Math.min(d + n(s, g) || 0, f - 1));
        u[y] = g, g < c[0] && (c[0] = g), g > c[1] && (c[1] = g), h[v++] = y;
      }
      return a._count = v, a._indices = h, a._updateGetRawIdx(), a;
    }, r.prototype.each = function(t, e) {
      if (this._count)
        for (var i = t.length, n = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (i) {
            case 0:
              e(a);
              break;
            case 1:
              e(n[t[0]][s], a);
              break;
            case 2:
              e(n[t[0]][s], n[t[1]][s], a);
              break;
            default:
              for (var l = 0, u = []; l < i; l++)
                u[l] = n[t[l]][s];
              u[l] = a, e.apply(null, u);
          }
        }
    }, r.prototype.getDataExtent = function(t, e) {
      var i = this._chunks[t], n = ye();
      if (!i)
        return n;
      var a = this.count(), o = !this._indices && !e;
      if (o)
        return this._rawExtent[t].slice();
      var s = this._extent, l = s[t] || (s[t] = {}), u = I_(e), f = u.key, c = l[f];
      if (c)
        return c.slice();
      for (var h = n[0], v = n[1], d = 0; d < a; d++) {
        var p = this.getRawIndex(d), m = i[p];
        (!e || L_(u, m)) && (m < h && (h = m), m > v && (v = m));
      }
      return l[f] = [h, v];
    }, r.prototype.getRawDataItem = function(t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(e);
      for (var i = [], n = this._chunks, a = 0; a < n.length; a++)
        i.push(n[a][e]);
      return i;
    }, r.prototype.clone = function(t, e) {
      var i = new r(), n = this._chunks, a = t && En(t, function(s, l) {
        return s[l] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < n.length; o++)
          i._chunks[o] = a[o] ? qA(n[o]) : n[o];
      else
        i._chunks = n;
      return this._copyCommonProps(i), e || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = nt(this._extent), t._rawExtent = nt(this._rawExtent);
    }, r.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, e = void 0;
        if (t === Array) {
          var i = this._indices.length;
          e = new t(i);
          for (var n = 0; n < i; n++)
            e[n] = this._indices[n];
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
      function t(e, i, n, a) {
        return Nr(e[a], this._dimensions[a]);
      }
      Xu = {
        arrayRows: t,
        objectRows: function(e, i, n, a) {
          return Nr(e[i], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, i, n, a) {
          var o = e && (e.value == null ? e : e.value);
          return Nr(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, i, n, a) {
          return e[a];
        }
      };
    })(), r;
  })()
), ZA = ht(), KA = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, k_ = (
  /** @class */
  (function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = O_(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return V(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = T_(this.source), i = !N_(t), n = "", a = [], o = 0, s = 0; o < t; o++) {
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
        }), e && l != null && (!c || !c.isCalculationCoord) && (n += i ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), n += "$", n += KA[u] || "f", f && (n += f.uid), n += "$";
      }
      var v = this.source, d = [v.seriesLayoutBy, v.startIndex, n].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, r.prototype.makeOutputDimensionNames = function() {
      for (var t = [], e = 0, i = 0; e < this._fullDimCount; e++) {
        var n = void 0, a = this.dimensions[i];
        if (a && a.storeDimIndex === e)
          a.isCalculationCoord || (n = a.name), i++;
        else {
          var o = this.getSourceDimension(e);
          o && (n = o.name);
        }
        t.push(n);
      }
      return t;
    }, r.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, r;
  })()
);
function R_(r) {
  return r instanceof k_;
}
function vv(r) {
  for (var t = j(), e = 0; e < (r || []).length; e++) {
    var i = r[e], n = K(i) ? i.name : i;
    n != null && t.get(n) == null && t.set(n, e);
  }
  return t;
}
function O_(r) {
  var t = ZA(r);
  return t.dimNameMap || (t.dimNameMap = vv(r.dimensionsDefine));
}
function N_(r) {
  return r > 30;
}
var Kn = K, Sr = G, QA = typeof Int32Array > "u" ? Array : Int32Array, jA = "e\0\0", Zp = -1, JA = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], tD = ["_approximateExtent"], Kp, $o, Qn, jn, qu, Jn, Zu, Ai = (
  /** @class */
  (function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var i, n = !1;
      R_(t) ? (i = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, i = t), i = i || ["x", "y"];
      for (var a = {}, o = [], s = {}, l = !1, u = {}, f = 0; f < i.length; f++) {
        var c = i[f], h = W(c) ? new Cs({
          name: c
        }) : c instanceof Cs ? c : new Cs(c), v = h.name;
        h.type = h.type || "float", h.coordDim || (h.coordDim = v, h.coordDimIndex = 0);
        var d = h.otherDims = h.otherDims || {};
        o.push(v), a[v] = h, u[v] != null && (l = !0), h.createInvertedIndices && (s[v] = []), n && (h.storeDimIndex = f), d.itemName === 0 && (this._nameDimIdx = h.storeDimIndex), d.itemId === 0 && (this._idDimIdx = h.storeDimIndex);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(l), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var p = this._dimIdxToName = j();
        M(o, function(m) {
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
      var i = this._dimIdxToName.get(e);
      if (i != null)
        return i;
      var n = this._schema.getSourceDimension(e);
      if (n)
        return n.name;
    }, r.prototype.getDimensionIndex = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e != null)
        return e;
      if (t == null)
        return -1;
      var i = this._getDimInfo(t);
      return i ? i.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, r.prototype._recognizeDimIndex = function(t) {
      if (bt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, r.prototype._getStoreDimIndex = function(t) {
      var e = this.getDimensionIndex(t);
      return e;
    }, r.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, r.prototype._initGetDimensionInfo = function(t) {
      var e = this._dimInfos;
      this._getDimInfo = t ? function(i) {
        return e.hasOwnProperty(i) ? e[i] : void 0;
      } : function(i) {
        return e[i];
      };
    }, r.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, r.prototype.mapDimension = function(t, e) {
      var i = this._dimSummary;
      if (e == null)
        return i.encodeFirstDimNotExtra[t];
      var n = i.encode[t];
      return n ? n[e] : null;
    }, r.prototype.mapDimensionsAll = function(t) {
      var e = this._dimSummary, i = e.encode[t];
      return (i || []).slice();
    }, r.prototype.getStore = function() {
      return this._store;
    }, r.prototype.initData = function(t, e, i) {
      var n = this, a;
      if (t instanceof Dc && (a = t), !a) {
        var o = this.dimensions, s = cv(t) || re(t) ? new C_(t, o.length) : t;
        a = new Dc();
        var l = Sr(o, function(u) {
          return {
            type: n._dimInfos[u].type,
            property: u
          };
        });
        a.initData(s, l, i);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = VA(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var i = this._store.appendValues(t, e && e.length), n = i.start, a = i.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = n; s < a; s++) {
          var l = s - n;
          this._nameList[s] = e[l], o && Zu(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, i = 0; i < e.length; i++) {
        var n = this._dimInfos[e[i]];
        n.ordinalMeta && t.collectOrdinalMeta(n.storeDimIndex, n.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== Or && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var i = this._store, n = i.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = n.getSource().sourceFormat, l = s === le;
        if (l && !n.pure)
          for (var u = [], f = t; f < e; f++) {
            var c = n.getItem(f, u);
            if (!this.hasItemOption && LT(c) && (this.hasItemOption = !0), c) {
              var h = c.name;
              a[f] == null && h != null && (a[f] = Ke(h, null));
              var v = c.id;
              o[f] == null && v != null && (o[f] = Ke(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            Zu(this, f);
        Kp(this);
      }
    }, r.prototype.getApproximateExtent = function(t, e) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t), e);
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      Kn(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), i = this._nameList[e];
      return i == null && this._nameDimIdx != null && (i = Qn(this, this._nameDimIdx, e)), i == null && (i = ""), i;
    }, r.prototype._getCategory = function(t, e) {
      var i = this._store.get(t, e), n = this._store.getOrdinalMeta(t);
      return n ? n.categories[i] : i;
    }, r.prototype.getId = function(t) {
      return $o(this, this.getRawIndex(t));
    }, r.prototype.count = function() {
      return this._store.count();
    }, r.prototype.get = function(t, e) {
      var i = this._store, n = this._dimInfos[t];
      if (n)
        return i.get(n.storeDimIndex, e);
    }, r.prototype.getByRawIndex = function(t, e) {
      var i = this._store, n = this._dimInfos[t];
      if (n)
        return i.getByRawIndex(n.storeDimIndex, e);
    }, r.prototype.getIndices = function() {
      return this._store.getIndices();
    }, r.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t), null);
    }, r.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, r.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, r.prototype.getValues = function(t, e) {
      var i = this, n = this._store;
      return F(t) ? n.getValues(Sr(t, function(a) {
        return i._getStoreDimIndex(a);
      }), e) : n.getValues(t);
    }, r.prototype.hasValue = function(t) {
      for (var e = this._dimSummary.dataDimIndicesOnCoord, i = 0, n = e.length; i < n; i++)
        if (isNaN(this._store.get(e[i], t)))
          return !1;
      return !0;
    }, r.prototype.indexOfName = function(t) {
      for (var e = 0, i = this._store.count(); e < i; e++)
        if (this.getName(e) === t)
          return e;
      return -1;
    }, r.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, r.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, r.prototype.rawIndexOf = function(t, e) {
      var i = t && this._invertedIndicesMap[t], n = i && i[e];
      return n == null || isNaN(n) ? Zp : n;
    }, r.prototype.each = function(t, e, i) {
      Z(t) && (i = e, e = t, t = []);
      var n = i || this, a = Sr(jn(t), this._getStoreDimIndex, this);
      this._store.each(a, n ? xt(e, n) : e);
    }, r.prototype.filterSelf = function(t, e, i) {
      Z(t) && (i = e, e = t, t = []);
      var n = i || this, a = Sr(jn(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, n ? xt(e, n) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, i = {}, n = Tt(t);
      return M(n, function(a) {
        var o = e._getStoreDimIndex(a);
        i[o] = t[a];
      }), this._store = this._store.selectRange(i), this;
    }, r.prototype.mapArray = function(t, e, i) {
      Z(t) && (i = e, e = t, t = []), i = i || this;
      var n = [];
      return this.each(t, function() {
        n.push(e && e.apply(this, arguments));
      }, i), n;
    }, r.prototype.map = function(t, e, i, n) {
      var a = i || n || this, o = Sr(jn(t), this._getStoreDimIndex, this), s = Jn(this);
      return s._store = this._store.map(o, a ? xt(e, a) : e), s;
    }, r.prototype.modify = function(t, e, i, n) {
      var a = i || n || this, o = Sr(jn(t), this._getStoreDimIndex, this);
      this._store.modify(o, a ? xt(e, a) : e);
    }, r.prototype.downSample = function(t, e, i, n) {
      var a = Jn(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, i, n), a;
    }, r.prototype.minmaxDownSample = function(t, e) {
      var i = Jn(this);
      return i._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = Jn(this);
      return i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, i = this.getRawDataItem(t);
      return new Ct(i, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new LA(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(i) {
        return $o(t, i);
      }, function(i) {
        return $o(e, i);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, Kn(t) ? O(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var i = this._itemVisuals[t], n = i && i[e];
      return n ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var i = this._itemVisuals, n = i[t];
      n || (n = i[t] = {});
      var a = n[e];
      return a == null && (a = this.getVisual(e), F(a) ? a = a.slice() : Kn(a) && (a = O({}, a)), n[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, i) {
      var n = this._itemVisuals[t] || {};
      this._itemVisuals[t] = n, Kn(e) ? O(n, e) : n[e] = i;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      Kn(t) ? O(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, i) {
      this._itemLayouts[t] = i ? O(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var i = this.hostModel && this.hostModel.seriesIndex;
      jT(i, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      M(this._graphicEls, function(i, n) {
        i && t && t.call(e, i, n);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : Sr(this.dimensions, this._getDimInfo, this), this.hostModel)), qu(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var i = this[t];
      Z(i) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var n = i.apply(this, arguments);
        return e.apply(this, [n].concat(kh(arguments)));
      });
    }, r.internalField = (function() {
      Kp = function(t) {
        var e = t._invertedIndicesMap;
        M(e, function(i, n) {
          var a = t._dimInfos[n], o = a.ordinalMeta, s = t._store;
          if (o) {
            i = e[n] = new QA(o.categories.length);
            for (var l = 0; l < i.length; l++)
              i[l] = Zp;
            for (var l = 0; l < s.count(); l++)
              i[s.get(a.storeDimIndex, l)] = l;
          }
        });
      }, Qn = function(t, e, i) {
        return Ke(t._getCategory(e, i), null);
      }, $o = function(t, e) {
        var i = t._idList[e];
        return i == null && t._idDimIdx != null && (i = Qn(t, t._idDimIdx, e)), i == null && (i = jA + e), i;
      }, jn = function(t) {
        return F(t) || (t = t != null ? [t] : []), t;
      }, Jn = function(t) {
        var e = new r(t._schema ? t._schema : Sr(t.dimensions, t._getDimInfo, t), t.hostModel);
        return qu(e, t), e;
      }, qu = function(t, e) {
        M(JA.concat(e.__wrappedMethods || []), function(i) {
          e.hasOwnProperty(i) && (t[i] = e[i]);
        }), t.__wrappedMethods = e.__wrappedMethods, M(tD, function(i) {
          t[i] = nt(e[i]);
        }), t._calculationInfo = O({}, e._calculationInfo);
      }, Zu = function(t, e) {
        var i = t._nameList, n = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = i[e], l = n[e];
        if (s == null && a != null && (i[e] = s = Qn(t, a, e)), l == null && o != null && (n[e] = l = Qn(t, o, e)), l == null && s != null) {
          var u = t._nameRepeatCount, f = u[s] = (u[s] || 0) + 1;
          l = s, f > 1 && (l += "__ec__" + f), n[e] = l;
        }
      };
    })(), r;
  })()
);
function eD(r, t) {
  cv(r) || (r = w_(r)), t = t || {};
  var e = t.coordDimensions || [], i = t.dimensionsDefine || r.dimensionsDefine || [], n = j(), a = [], o = rD(r, e, i, t.dimensionsCount), s = t.canOmitUnusedDimensions && N_(o), l = i === r.dimensionsDefine, u = l ? O_(r) : vv(i), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var c = j(f), h = new P_(o), v = 0; v < h.length; v++)
    h[v] = -1;
  function d(C) {
    var D = h[C];
    if (D < 0) {
      var A = i[C], L = K(A) ? A : {
        name: A
      }, I = new Cs(), P = L.name;
      P != null && u.get(P) != null && (I.name = I.displayName = P), L.type != null && (I.type = L.type), L.displayName != null && (I.displayName = L.displayName);
      var E = a.length;
      return h[C] = E, I.storeDimIndex = C, a.push(I), I;
    }
    return a[D];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  c.each(function(C, D) {
    var A = Zt(C).slice();
    if (A.length === 1 && !W(A[0]) && A[0] < 0) {
      c.set(D, !1);
      return;
    }
    var L = c.set(D, []);
    M(A, function(I, P) {
      var E = W(I) ? u.get(I) : I;
      E != null && E < o && (L[P] = E, m(d(E), D, P));
    });
  });
  var p = 0;
  M(e, function(C) {
    var D, A, L, I;
    if (W(C))
      D = C, I = {};
    else {
      I = C, D = I.name;
      var P = I.ordinalMeta;
      I.ordinalMeta = null, I = O({}, I), I.ordinalMeta = P, A = I.dimsDef, L = I.otherDims, I.name = I.coordDim = I.coordDimIndex = I.dimsDef = I.otherDims = null;
    }
    var E = c.get(D);
    if (E !== !1) {
      if (E = Zt(E), !E.length)
        for (var k = 0; k < (A && A.length || 1); k++) {
          for (; p < o && d(p).coordDim != null; )
            p++;
          p < o && E.push(p++);
        }
      M(E, function(z, R) {
        var $ = d(z);
        if (l && I.type != null && ($.type = I.type), m(yt($, I), D, R), $.name == null && A) {
          var Y = A[R];
          !K(Y) && (Y = {
            name: Y
          }), $.name = $.displayName = Y.name, $.defaultTooltip = Y.defaultTooltip;
        }
        L && yt($.otherDims, L);
      });
    }
  });
  function m(C, D, A) {
    $0.get(D) != null ? C.otherDims[D] = A : (C.coordDim = D, C.coordDimIndex = A, n.set(D, !0));
  }
  var g = t.generateCoord, y = t.generateCoordCount, _ = y != null;
  y = g ? y || 1 : 0;
  var b = g || "value";
  function S(C) {
    C.name == null && (C.name = C.coordDim);
  }
  if (s)
    M(a, function(C) {
      S(C);
    }), a.sort(function(C, D) {
      return C.storeDimIndex - D.storeDimIndex;
    });
  else
    for (var w = 0; w < o; w++) {
      var x = d(w), T = x.coordDim;
      T == null && (x.coordDim = iD(b, n, _), x.coordDimIndex = 0, (!g || y <= 0) && (x.isExtraCoord = !0), y--), S(x), x.type == null && (S_(r, w) === ae.Must || x.isExtraCoord && (x.otherDims.itemName != null || x.otherDims.seriesName != null)) && (x.type = "ordinal");
    }
  return Yh(a, function(C) {
    return C.name;
  }, function(C, D) {
    D > 0 && (C.name = C.name + (D - 1));
  }), new k_({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function rD(r, t, e, i) {
  var n = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, i || 0);
  return M(t, function(a) {
    var o;
    K(a) && (o = a.dimsDef) && (n = Math.max(n, o.length));
  }), n;
}
function iD(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var i = 0; t.hasKey(r + i); )
      i++;
    r += i;
  }
  return t.set(r, !0), r;
}
var As = {}, Ku = {}, dv = (
  /** @class */
  (function() {
    function r() {
      this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
    }
    return r.prototype.create = function(t, e) {
      this._nonSeriesBoxMasterList = i(As), this._normalMasterList = i(Ku);
      function i(n, a) {
        var o = [];
        return M(n, function(s, l) {
          var u = s.create(t, e);
          o = o.concat(u || []);
        }), o;
      }
    }, r.prototype.update = function(t, e) {
      M(this._normalMasterList, function(i) {
        i.update && i.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
    }, r.register = function(t, e) {
      if (t === "matrix" || t === "calendar") {
        As[t] = e;
        return;
      }
      Ku[t] = e;
    }, r.get = function(t) {
      return Ku[t] || As[t];
    }, r;
  })()
);
function nD(r) {
  return !!As[r];
}
var aD = 1, oD = 2, sD = j();
function B_(r) {
  var t = r.getShallow("coord", !0), e = aD;
  if (t == null) {
    var i = sD.get(r.type);
    i && i.getCoord2 && (e = oD, t = i.getCoord2(r));
  }
  return {
    coord: t,
    from: e
  };
}
var gn = 0, Ds = 1, lD = 2;
function uD(r, t) {
  var e = r.getShallow("coordinateSystem"), i = r.getShallow("coordinateSystemUsage", !0), n = gn;
  if (e) {
    var a = r.mainType === "series";
    i == null && (i = a ? "data" : "box"), i === "data" ? (n = Ds, a || (n = gn)) : i === "box" && (n = lD, !a && !nD(e) && (n = gn));
  }
  return {
    coordSysType: e,
    kind: n
  };
}
function fD(r) {
  var t = r.targetModel, e = r.coordSysType, i = r.coordSysProvider, n = r.isDefaultDataCoordSys, a = uD(t), o = a.kind, s = a.coordSysType;
  if (n && o !== Ds && (o = Ds, s = e), o === gn || s !== e)
    return gn;
  var l = i(e, t);
  return l ? (o === Ds ? t.coordinateSystem = l : t.boxCoordinateSystem = l, o) : gn;
}
var cD = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.coordSysDims = [], this.axisMap = j(), this.categoryAxisMap = j(), this.coordSysName = t;
    }
    return r;
  })()
);
function hD(r) {
  var t = r.get("coordinateSystem"), e = new cD(t), i = vD[t];
  if (i)
    return i(r, e, e.axisMap, e.categoryAxisMap), e;
}
var vD = {
  cartesian2d: function(r, t, e, i) {
    var n = r.getReferringComponents("xAxis", _e).models[0], a = r.getReferringComponents("yAxis", _e).models[0];
    t.coordSysDims = ["x", "y"], e.set("x", n), e.set("y", a), Zi(n) && (i.set("x", n), t.firstCategoryDimIndex = 0), Zi(a) && (i.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(r, t, e, i) {
    var n = r.getReferringComponents("singleAxis", _e).models[0];
    t.coordSysDims = ["single"], e.set("single", n), Zi(n) && (i.set("single", n), t.firstCategoryDimIndex = 0);
  },
  polar: function(r, t, e, i) {
    var n = r.getReferringComponents("polar", _e).models[0], a = n.findAxisModel("radiusAxis"), o = n.findAxisModel("angleAxis");
    t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), Zi(a) && (i.set("radius", a), t.firstCategoryDimIndex = 0), Zi(o) && (i.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(r, t, e, i) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(r, t, e, i) {
    var n = r.ecModel, a = n.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    M(a.parallelAxisIndex, function(s, l) {
      var u = n.getComponent("parallelAxis", s), f = o[l];
      e.set(f, u), Zi(u) && (i.set(f, u), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = l));
    });
  },
  matrix: function(r, t, e, i) {
    var n = r.getReferringComponents("matrix", _e).models[0];
    t.coordSysDims = ["x", "y"];
    var a = n.getDimensionModel("x"), o = n.getDimensionModel("y");
    e.set("x", a), e.set("y", o), i.set("x", a), i.set("y", o);
  }
};
function Zi(r) {
  return r.get("type") === "category";
}
function dD(r, t, e) {
  e = e || {};
  var i = e.byIndex, n = e.stackedCoordDimension, a, o, s;
  pD(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var l = !!(r && r.get("stack")), u, f, c, h, v = !0;
  function d(b) {
    return b.type !== "ordinal" && b.type !== "time";
  }
  if (M(a, function(b, S) {
    W(b) && (a[S] = b = {
      name: b
    }), d(b) || (v = !1);
  }), M(a, function(b, S) {
    l && !b.isExtraCoord && (!i && !u && b.ordinalMeta && (u = b), !f && d(b) && (!v || b.coordDim !== "x" && b.coordDim !== "angle") && (!n || n === b.coordDim) && (f = b));
  }), f && !i && !u && (i = !0), f) {
    c = "__\0ecstackresult_" + r.id, h = "__\0ecstackedover_" + r.id, u && (u.createInvertedIndices = !0);
    var p = f.coordDim, m = f.type, g = 0;
    M(a, function(b) {
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
    isStackedByIndex: i,
    stackedOverDimension: h,
    stackResultDimension: c
  };
}
function pD(r) {
  return !R_(r.schema);
}
function ki(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function F_(r, t) {
  return ki(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
function gD(r, t) {
  var e = r.get("coordinateSystem"), i = dv.get(e), n;
  return t && t.coordSysDims && (n = G(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var l = s.get("type");
      o.type = GA(l);
    }
    return o;
  })), n || (n = i && (i.getDimensionsInfo ? i.getDimensionsInfo() : i.dimensions.slice()) || ["x", "y"]), n;
}
function mD(r, t, e) {
  var i, n;
  return e && M(r, function(a, o) {
    var s = a.coordDim, l = e.categoryAxisMap.get(s);
    l && (i == null && (i = o), a.ordinalMeta = l.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (n = !0);
  }), !n && i != null && (r[i].otherDims.itemName = 0), i;
}
function pv(r, t, e) {
  e = e || {};
  var i = t.getSourceManager(), n, a = !1;
  n = i.getSource(), a = n.sourceFormat === le;
  var o = hD(t), s = gD(t, o), l = e.useEncodeDefaulter, u = Z(l) ? l : l ? mt(EA, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: e.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: u,
    canOmitUnusedDimensions: !a
  }, c = eD(n, f), h = mD(c.dimensions, e.createInvertedIndices, o), v = a ? null : i.getSharedDataStore(c), d = dD(t, {
    schema: c,
    store: v
  }), p = new Ai(c, t);
  p.setCalculationInfo(d);
  var m = h != null && yD(n) ? function(g, y, _, b) {
    return b === h ? _ : this.defaultDimValueGetter(g, y, _, b);
  } : null;
  return p.hasItemOption = !1, p.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? n : v,
    null,
    m
  ), p;
}
function yD(r) {
  if (r.sourceFormat === le) {
    var t = _D(r.data || []);
    return !F(co(t));
  }
}
function _D(r) {
  for (var t = 0; t < r.length && r[t] == null; )
    t++;
  return r[t];
}
var bD = Math.round(Math.random() * 10);
function jl(r) {
  return [r || "", bD++].join("_");
}
function SD(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, i) {
    var n = Ye(e);
    t[n.main] = i;
  }, r.determineSubType = function(e, i) {
    var n = i.type;
    if (!n) {
      var a = Ye(e).main;
      r.hasSubTypes(e) && t[a] && (n = t[a](i));
    }
    return n;
  };
}
function wD(r, t) {
  r.topologicalTravel = function(a, o, s, l) {
    if (!a.length)
      return;
    var u = e(o), f = u.graph, c = u.noEntryList, h = {};
    for (M(a, function(y) {
      h[y] = !0;
    }); c.length; ) {
      var v = c.pop(), d = f[v], p = !!h[v];
      p && (s.call(l, v, d.originalDeps.slice()), delete h[v]), M(d.successor, p ? g : m);
    }
    M(h, function() {
      var y = "";
      throw new Error(y);
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
    return M(a, function(l) {
      var u = i(o, l), f = u.originalDeps = t(l), c = n(f, a);
      u.entryCount = c.length, u.entryCount === 0 && s.push(l), M(c, function(h) {
        ut(u.predecessor, h) < 0 && u.predecessor.push(h);
        var v = i(o, h);
        ut(v.successor, h) < 0 && v.successor.push(l);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function i(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function n(a, o) {
    var s = [];
    return M(a, function(l) {
      ut(o, l) >= 0 && s.push(l);
    }), s;
  }
}
function z_(r, t) {
  return ft(ft({}, r, !0), t, !0);
}
var xD = Math.log(2);
function Mc(r, t, e, i, n, a) {
  var o = i + "-" + n, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var l = Math.round(Math.log((1 << s) - 1 & ~n) / xD);
    return r[e][l];
  }
  for (var u = i | 1 << e, f = e + 1; i & 1 << f; )
    f++;
  for (var c = 0, h = 0, v = 0; h < s; h++) {
    var d = 1 << h;
    d & n || (c += (v % 2 ? -1 : 1) * r[e][h] * Mc(r, t - 1, f, u, n | d, a), v++);
  }
  return a[o] = c, c;
}
function Qp(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], i = {}, n = Mc(e, 8, 0, 0, 0, i);
  if (n !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Mc(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i) / n * t[o];
    return function(l, u, f) {
      var c = u * a[6] + f * a[7] + 1;
      l[0] = (u * a[0] + f * a[1] + a[2]) / c, l[1] = (u * a[3] + f * a[4] + a[5]) / c;
    };
  }
}
var el = "___zrEVENTSAVED", Qu = [];
function TD(r, t, e, i, n) {
  return Ic(Qu, t, i, n, !0) && Ic(r, e, Qu[0], Qu[1]);
}
function CD(r, t) {
  r && e(r), t && e(t);
  function e(i) {
    var n = i[el];
    n && (n.clearMarkers && n.clearMarkers(), delete i[el]);
  }
}
function Ic(r, t, e, i, n) {
  if (t.getBoundingClientRect && tt.domSupported && !$_(t)) {
    var a = t[el] || (t[el] = {}), o = AD(t, a), s = DD(o, a, n);
    if (s)
      return s(r, e, i), !0;
  }
  return !1;
}
function AD(r, t) {
  var e = t.markers;
  if (e)
    return e;
  e = t.markers = [];
  for (var i = ["left", "right"], n = ["top", "bottom"], a = 0; a < 4; a++) {
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
      i[l] + ":0",
      n[u] + ":0",
      i[1 - l] + ":auto",
      n[1 - u] + ":auto",
      ""
    ].join("!important;"), r.appendChild(o), e.push(o);
  }
  return t.clearMarkers = function() {
    M(e, function(f) {
      f.parentNode && f.parentNode.removeChild(f);
    });
  }, e;
}
function DD(r, t, e) {
  for (var i = e ? "invTrans" : "trans", n = t[i], a = t.srcCoords, o = [], s = [], l = !0, u = 0; u < 4; u++) {
    var f = r[u].getBoundingClientRect(), c = 2 * u, h = f.left, v = f.top;
    o.push(h, v), l = l && a && h === a[c] && v === a[c + 1], s.push(r[u].offsetLeft, r[u].offsetTop);
  }
  return l && n ? n : (t.srcCoords = o, t[i] = e ? Qp(s, o) : Qp(o, s));
}
function $_(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var MD = /([&<>"'])/g, ID = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function te(r) {
  return r == null ? "" : (r + "").replace(MD, function(t, e) {
    return ID[e];
  });
}
const LD = {
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
}, PD = {
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
var rl = "ZH", gv = "EN", mn = gv, Ms = {}, mv = {}, H_ = tt.domSupported ? (function() {
  var r = (document.documentElement.lang || navigator.language || navigator.browserLanguage || mn).toUpperCase();
  return r.indexOf(rl) > -1 ? rl : mn;
})() : mn;
function V_(r, t) {
  r = r.toUpperCase(), mv[r] = new Ct(t), Ms[r] = t;
}
function ED(r) {
  if (W(r)) {
    var t = Ms[r.toUpperCase()] || {};
    return r === rl || r === gv ? nt(t) : ft(nt(t), nt(Ms[mn]), !1);
  } else
    return ft(nt(r), nt(Ms[mn]), !1);
}
function kD(r) {
  return mv[r];
}
function RD() {
  return mv[mn];
}
V_(gv, LD);
V_(rl, PD);
var OD = null;
function Jl() {
  return OD;
}
function G_(r, t) {
  t.breakOption;
  var e = t.breakParsed;
  return e;
}
function yv(r) {
  var t = r.brk;
  return t ? t.breaks : [];
}
function il(r) {
  var t = r.brk;
  return t ? t.hasBreaks() : !1;
}
var _v = 1e3, bv = _v * 60, Aa = bv * 60, be = Aa * 24, jp = be * 365, ND = {
  year: /({yyyy}|{yy})/,
  month: /({MMMM}|{MMM}|{MM}|{M})/,
  day: /({dd}|{d})/,
  hour: /({HH}|{H}|{hh}|{h})/,
  minute: /({mm}|{m})/,
  second: /({ss}|{s})/,
  millisecond: /({SSS}|{S})/
}, Is = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}"
}, BD = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}", Ho = "{yyyy}-{MM}-{dd}", Jp = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: Ho,
  hour: Ho + " " + Is.hour,
  minute: Ho + " " + Is.minute,
  second: Ho + " " + Is.second,
  millisecond: BD
}, Di = ["year", "month", "day", "hour", "minute", "second", "millisecond"], FD = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function zD(r) {
  return !W(r) && !Z(r) ? $D(r) : r;
}
function $D(r) {
  r = r || {};
  var t = {}, e = !0;
  return M(Di, function(i) {
    e && (e = r[i] == null);
  }), M(Di, function(i, n) {
    var a = r[i];
    t[i] = {};
    for (var o = null, s = n; s >= 0; s--) {
      var l = Di[s], u = K(a) && !F(a) ? a[l] : a, f = void 0;
      F(u) ? (f = u.slice(), o = f[0] || "") : W(u) ? (o = u, f = [o]) : (o == null ? o = Is[i] : ND[l].test(o) || (o = t[l][l][0] + " " + o), f = [o], e && (f[1] = "{primary|" + o + "}")), t[i][l] = f;
    }
  }), t;
}
function wr(r, t) {
  return r += "", "0000".substr(0, t - r.length) + r;
}
function Da(r) {
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
function HD(r) {
  return r === Da(r);
}
function VD(r) {
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
function tu(r, t, e, i) {
  var n = Nn(r), a = n[U_(e)](), o = n[Sv(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, l = n[wv(e)](), u = n["get" + (e ? "UTC" : "") + "Day"](), f = n[xv(e)](), c = (f - 1) % 12 + 1, h = n[Tv(e)](), v = n[Cv(e)](), d = n[Av(e)](), p = f >= 12 ? "pm" : "am", m = p.toUpperCase(), g = i instanceof Ct ? i : kD(i || H_) || RD(), y = g.getModel("time"), _ = y.get("month"), b = y.get("monthAbbr"), S = y.get("dayOfWeek"), w = y.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, p + "").replace(/{A}/g, m + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, wr(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, b[o - 1]).replace(/{MM}/g, wr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, wr(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, S[u]).replace(/{ee}/g, w[u]).replace(/{e}/g, u + "").replace(/{HH}/g, wr(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, wr(c + "", 2)).replace(/{h}/g, c + "").replace(/{mm}/g, wr(h, 2)).replace(/{m}/g, h + "").replace(/{ss}/g, wr(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, wr(d, 3)).replace(/{S}/g, d + "");
}
function GD(r, t, e, i, n) {
  var a = null;
  if (W(e))
    a = e;
  else if (Z(e)) {
    var o = {
      time: r.time,
      level: r.time ? r.time.level : 0
    }, s = Jl();
    s && s.makeAxisLabelFormatterParamBreak(o, r.break), a = e(r.value, t, o);
  } else {
    var l = r.time;
    if (l) {
      var u = e[l.lowerTimeUnit][l.upperTimeUnit];
      a = u[Math.min(l.level, u.length - 1)] || "";
    } else {
      var f = Ls(r.value, n);
      a = e[f][f][0];
    }
  }
  return tu(new Date(r.value), a, n, i);
}
function Ls(r, t) {
  var e = Nn(r), i = e[Sv(t)]() + 1, n = e[wv(t)](), a = e[xv(t)](), o = e[Tv(t)](), s = e[Cv(t)](), l = e[Av(t)](), u = l === 0, f = u && s === 0, c = f && o === 0, h = c && a === 0, v = h && n === 1, d = v && i === 1;
  return d ? "year" : v ? "month" : h ? "day" : c ? "hour" : f ? "minute" : u ? "second" : "millisecond";
}
function Lc(r, t, e) {
  switch (t) {
    case "year":
      r[W_(e)](0);
    case "month":
      r[Y_(e)](1);
    case "day":
      r[X_(e)](0);
    case "hour":
      r[q_(e)](0);
    case "minute":
      r[Z_(e)](0);
    case "second":
      r[K_(e)](0);
  }
  return r;
}
function U_(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function Sv(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function wv(r) {
  return r ? "getUTCDate" : "getDate";
}
function xv(r) {
  return r ? "getUTCHours" : "getHours";
}
function Tv(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function Cv(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function Av(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function UD(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function W_(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function Y_(r) {
  return r ? "setUTCDate" : "setDate";
}
function X_(r) {
  return r ? "setUTCHours" : "setHours";
}
function q_(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function Z_(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function K_(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function Q_(r) {
  if (!CT(r))
    return W(r) ? r : "-";
  var t = (r + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function j_(r, t) {
  return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, i) {
    return i.toUpperCase();
  }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
}
var eu = Rh;
function Pc(r, t, e) {
  var i = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function n(f) {
    return f && We(f) ? f : "-";
  }
  function a(f) {
    return Te(f);
  }
  var o = t === "time", s = r instanceof Date;
  if (o || s) {
    var l = o ? Nn(r) : r;
    if (isNaN(+l)) {
      if (s)
        return "-";
    } else return tu(l, i, e);
  }
  if (t === "ordinal")
    return qf(r) ? n(r) : bt(r) && a(r) ? r + "" : "-";
  var u = Zs(r);
  return a(u) ? Q_(u) : qf(r) ? n(r) : typeof r == "boolean" ? r + "" : "-";
}
var tg = ["a", "b", "c", "d", "e", "f", "g"], ju = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function J_(r, t, e) {
  F(t) || (t = [t]);
  var i = t.length;
  if (!i)
    return "";
  for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
    var o = tg[a];
    r = r.replace(ju(o), ju(o, 0));
  }
  for (var s = 0; s < i; s++)
    for (var l = 0; l < n.length; l++) {
      var u = t[s][n[l]];
      r = r.replace(ju(tg[l], s), e ? te(u) : u);
    }
  return r;
}
function WD(r, t) {
  var e = W(r) ? {
    color: r,
    extraCssText: t
  } : r || {}, i = e.color, n = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!i)
    return "";
  if (a === "html")
    return n === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + te(i) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + te(i) + ";" + (t || "") + '"></span>';
  var o = e.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: n === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: i
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: i
    }
  };
}
function Ri(r, t) {
  return t = t || "transparent", W(r) ? r : K(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
var Ps = M, YD = ["left", "right", "top", "bottom", "width", "height"], Vo = [["width", "left", "right"], ["height", "top", "bottom"]];
function Dv(r, t, e, i, n) {
  var a = 0, o = 0;
  i == null && (i = 1 / 0), n == null && (n = 1 / 0);
  var s = 0;
  t.eachChild(function(l, u) {
    var f = l.getBoundingRect(), c = t.childAt(u + 1), h = c && c.getBoundingRect(), v, d;
    if (r === "horizontal") {
      var p = f.width + (h ? -h.x + f.x : 0);
      v = a + p, v > i || l.newline ? (a = 0, v = p, o += s + e, s = f.height) : s = Math.max(s, f.height);
    } else {
      var m = f.height + (h ? -h.y + f.y : 0);
      d = o + m, d > n || l.newline ? (a += s + e, o = 0, d = m, s = f.width) : s = Math.max(s, f.width);
    }
    l.newline || (l.x = a, l.y = o, l.markRedraw(), r === "horizontal" ? a = v + e : o = d + e);
  });
}
var Ma = Dv;
mt(Dv, "vertical");
mt(Dv, "horizontal");
function XD(r, t) {
  return {
    left: r.getShallow("left", t),
    top: r.getShallow("top", t),
    right: r.getShallow("right", t),
    bottom: r.getShallow("bottom", t),
    width: r.getShallow("width", t),
    height: r.getShallow("height", t)
  };
}
function qa(r, t, e) {
  e = eu(e || 0);
  var i = t.width, n = t.height, a = Mt(r.left, i), o = Mt(r.top, n), s = Mt(r.right, i), l = Mt(r.bottom, n), u = Mt(r.width, i), f = Mt(r.height, n), c = e[2] + e[0], h = e[1] + e[3], v = r.aspect;
  switch (isNaN(u) && (u = i - s - h - a), isNaN(f) && (f = n - l - c - o), v != null && (isNaN(u) && isNaN(f) && (v > i / n ? u = i * 0.8 : f = n * 0.8), isNaN(u) && (u = v * f), isNaN(f) && (f = u / v)), isNaN(a) && (a = i - s - u - h), isNaN(o) && (o = n - l - f - c), r.left || r.right) {
    case "center":
      a = i / 2 - u / 2 - e[3];
      break;
    case "right":
      a = i - u - h;
      break;
  }
  switch (r.top || r.bottom) {
    case "middle":
    case "center":
      o = n / 2 - f / 2 - e[0];
      break;
    case "bottom":
      o = n - f - c;
      break;
  }
  a = a || 0, o = o || 0, isNaN(u) && (u = i - h - a - (s || 0)), isNaN(f) && (f = n - c - o - (l || 0));
  var d = new J((t.x || 0) + a + e[3], (t.y || 0) + o + e[0], u, f);
  return d.margin = e, d;
}
var Ju = {
  rect: 1
};
function t1(r, t, e) {
  var i, n, a, o = r.boxCoordinateSystem, s;
  if (o) {
    var l = B_(r), u = l.coord, f = l.from;
    if (o.dataToLayout) {
      a = Ju.rect, s = f;
      var c = o.dataToLayout(u);
      i = c.contentRect || c.rect;
    }
  }
  return a == null && (a = Ju.rect), a === Ju.rect && (i || (i = {
    x: 0,
    y: 0,
    width: t.getWidth(),
    height: t.getHeight()
  }), n = [i.x + i.width / 2, i.y + i.height / 2]), {
    type: a,
    refContainer: i,
    refPoint: n,
    boxCoordFrom: s
  };
}
function Za(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return K(t) ? t : t ? {
    type: t
  } : null;
}
function zr(r, t, e) {
  var i = e && e.ignoreSize;
  !F(i) && (i = [i, i]);
  var n = o(Vo[0], 0), a = o(Vo[1], 1);
  l(Vo[0], r, n), l(Vo[1], r, a);
  function o(u, f) {
    var c = {}, h = 0, v = {}, d = 0, p = 2;
    if (Ps(u, function(y) {
      v[y] = r[y];
    }), Ps(u, function(y) {
      qt(t, y) && (c[y] = v[y] = t[y]), s(c, y) && h++, s(v, y) && d++;
    }), i[f])
      return s(t, u[1]) ? v[u[2]] = null : s(t, u[2]) && (v[u[1]] = null), v;
    if (d === p || !h)
      return v;
    if (h >= p)
      return c;
    for (var m = 0; m < u.length; m++) {
      var g = u[m];
      if (!qt(c, g) && qt(r, g)) {
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
    Ps(u, function(h) {
      f[h] = c[h];
    });
  }
}
function po(r) {
  return qD({}, r);
}
function qD(r, t) {
  return t && r && Ps(YD, function(e) {
    qt(t, e) && (r[e] = t[e]);
  }), r;
}
var ZD = ht(), pt = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e, i, n) {
      var a = r.call(this, e, i, n) || this;
      return a.uid = jl("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = Za(this), a = n ? po(e) : {}, o = i.getTheme();
      ft(e, o.get(this.mainType)), ft(e, this.getDefaultOption()), n && zr(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      ft(this.option, e, !0);
      var n = Za(this);
      n && zr(this.option, e, n);
    }, t.prototype.optionUpdated = function(e, i) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!Nw(e))
        return e.defaultOption;
      var i = ZD(this);
      if (!i.defaultOption) {
        for (var n = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && n.push(o), a = a.superClass;
        }
        for (var s = {}, l = n.length - 1; l >= 0; l--)
          s = ft(s, n[l], !0);
        i.defaultOption = s;
      }
      return i.defaultOption;
    }, t.prototype.getReferringComponents = function(e, i) {
      var n = e + "Index", a = e + "Id";
      return ho(this.ecModel, e, {
        index: this.get(n, !0),
        id: this.get(a, !0)
      }, i);
    }, t.prototype.getBoxLayoutParams = function() {
      return XD(this, !1);
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(e) {
      this.option.zlevel = e;
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
    })(), t;
  })(Ct)
);
r0(pt, Ct);
Rl(pt);
SD(pt);
wD(pt, KD);
function KD(r) {
  var t = [];
  return M(pt.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = G(t, function(e) {
    return Ye(e).main;
  }), r !== "dataset" && ut(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
var eg = ht();
ht();
var Mv = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, i) {
      var n = Zt(this.get("color", !0)), a = this.get("colorLayer", !0);
      return jD(this, eg, n, a, t, e, i);
    }, r.prototype.clearColorPalette = function() {
      JD(this, eg);
    }, r;
  })()
);
function QD(r, t) {
  for (var e = r.length, i = 0; i < e; i++)
    if (r[i].length > t)
      return r[i];
  return r[e - 1];
}
function jD(r, t, e, i, n, a, o) {
  a = a || r;
  var s = t(a), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
  if (u.hasOwnProperty(n))
    return u[n];
  var f = o == null || !i ? e : QD(i, o);
  if (f = f || e, !(!f || !f.length)) {
    var c = f[l];
    return n && (u[n] = c), s.paletteIdx = (l + 1) % f.length, c;
  }
}
function JD(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var tM = /\{@(.+?)\}/g, Iv = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getDataParams = function(t, e) {
      var i = this.getData(e), n = this.getRawValue(t, e), a = i.getRawIndex(t), o = i.getName(t), s = i.getRawDataItem(t), l = i.getItemVisual(t, "style"), u = l && l[i.getItemVisual(t, "drawType") || "fill"], f = l && l.stroke, c = this.mainType, h = c === "series", v = i.userOutput && i.userOutput.get();
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
        value: n,
        color: u,
        borderColor: f,
        dimensionNames: v ? v.fullDimensions : null,
        encode: v ? v.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, r.prototype.getFormattedLabel = function(t, e, i, n, a, o) {
      e = e || "normal";
      var s = this.getData(i), l = this.getDataParams(t, i);
      if (o && (l.value = o.interpolatedValue), n != null && F(l.value) && (l.value = l.value[n]), !a) {
        var u = s.getItemModel(t);
        a = u.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (Z(a))
        return l.status = e, l.dimensionIndex = n, a(l);
      if (W(a)) {
        var f = J_(a, l);
        return f.replace(tM, function(c, h) {
          var v = h.length, d = h;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1));
          var p = Mn(s, t, d);
          if (o && F(o.interpolatedValue)) {
            var m = s.getDimensionIndex(d);
            m >= 0 && (p = o.interpolatedValue[m]);
          }
          return p != null ? p + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return Mn(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, i) {
    }, r;
  })()
);
function rg(r) {
  var t, e;
  return K(r) ? r.type && (e = r) : t = r, {
    text: t,
    // markers: markers || markersExisting,
    frag: e
  };
}
function Ia(r) {
  return new eM(r);
}
var eM = (
  /** @class */
  (function() {
    function r(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return r.prototype.perform = function(t) {
      var e = this._upstream, i = t && t.skip;
      if (this._dirty && e) {
        var n = this.context;
        n.data = n.outputData = e.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !i && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, l = f(t && t.modBy), u = t && t.modDataCount || 0;
      (o !== l || s !== u) && (a = "reset");
      function f(y) {
        return !(y >= 1) && (y = 1), y;
      }
      var c;
      (this._dirty || a === "reset") && (this._dirty = !1, c = this._doReset(i)), this._modBy = l, this._modDataCount = u;
      var h = t && t.step;
      if (e ? this._dueEnd = e._outputDueEnd : this._dueEnd = this._count ? this._count(this.context) : 1 / 0, this._progress) {
        var v = this._dueIndex, d = Math.min(h != null ? this._dueIndex + h : 1 / 0, this._dueEnd);
        if (!i && (c || v < d)) {
          var p = this._progress;
          if (F(p))
            for (var m = 0; m < p.length; m++)
              this._doProgress(p[m], v, d, l, u);
          else
            this._doProgress(p, v, d, l, u);
        }
        this._dueIndex = d;
        var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        this._outputDueEnd = g;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, r.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, r.prototype._doProgress = function(t, e, i, n, a) {
      ig.reset(e, i, n, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: i,
        count: i - e,
        next: ig.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, i;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (i = e.forceFirstProgress, e = e.progress), F(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
      var n = this._downstream;
      return n && n.dirty(), i;
    }, r.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, r.prototype.pipe = function(t) {
      (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
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
), ig = /* @__PURE__ */ (function() {
  var r, t, e, i, n, a = {
    reset: function(l, u, f, c) {
      t = l, r = u, e = f, i = c, n = Math.ceil(i / e), a.next = e > 1 && i > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < r ? t++ : null;
  }
  function s() {
    var l = t % n * e + Math.ceil(t / n), u = t >= r ? null : l < i ? l : t;
    return t++, u;
  }
})(), rM = (
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
      return Nr(t, e);
    }, r;
  })()
);
function iM(r, t) {
  var e = new rM(), i = r.data, n = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== Qe && Jt(o);
  var s = [], l = {}, u = r.dimensionsDefine;
  if (u)
    M(u, function(p, m) {
      var g = p.name, y = {
        index: m,
        name: g,
        displayName: p.displayName
      };
      if (s.push(y), g != null) {
        var _ = "";
        qt(l, g) && Jt(_), l[g] = y;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var c = A_(n, Qe);
  t.__isBuiltIn && (e.getRawDataItem = function(p) {
    return c(i, a, s, p);
  }, e.getRawData = xt(nM, null, r)), e.cloneRawData = xt(aM, null, r);
  var h = D_(n, Qe);
  e.count = xt(h, null, i, a, s);
  var v = M_(n);
  e.retrieveValue = function(p, m) {
    var g = c(i, a, s, p);
    return d(g, m);
  };
  var d = e.retrieveValueFromItem = function(p, m) {
    if (p != null) {
      var g = s[m];
      if (g)
        return v(p, m, g.name);
    }
  };
  return e.getDimensionInfo = xt(oM, null, s, l), e.cloneAllDimensionInfo = xt(sM, null, s), e;
}
function nM(r) {
  var t = r.sourceFormat;
  if (!Lv(t)) {
    var e = "";
    Jt(e);
  }
  return r.data;
}
function aM(r) {
  var t = r.sourceFormat, e = r.data;
  if (!Lv(t)) {
    var i = "";
    Jt(i);
  }
  if (t === Gt) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(e[a].slice());
    return n;
  } else if (t === Oe) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(O({}, e[a]));
    return n;
  }
}
function oM(r, t, e) {
  if (e != null) {
    if (bt(e) || !isNaN(e) && !qt(t, e))
      return r[e];
    if (qt(t, e))
      return t[e];
  }
}
function sM(r) {
  return nt(r);
}
var e1 = j();
function lM(r) {
  r = nt(r);
  var t = r.type, e = "";
  t || Jt(e);
  var i = t.split(":");
  i.length !== 2 && Jt(e);
  var n = !1;
  i[0] === "echarts" && (t = i[1], n = !0), r.__isBuiltIn = n, e1.set(t, r);
}
function uM(r, t, e) {
  var i = Zt(r), n = i.length, a = "";
  n || Jt(a);
  for (var o = 0, s = n; o < s; o++) {
    var l = i[o];
    t = fM(l, t), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function fM(r, t, e, i) {
  var n = "";
  t.length || Jt(n), K(r) || Jt(n);
  var a = r.type, o = e1.get(a);
  o || Jt(n);
  var s = G(t, function(u) {
    return iM(u, o);
  }), l = Zt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: nt(r.config)
  }));
  return G(l, function(u, f) {
    var c = "";
    K(u) || Jt(c), u.data || Jt(c);
    var h = x_(u.data);
    Lv(h) || Jt(c);
    var v, d = t[0];
    if (d && f === 0 && !u.dimensions) {
      var p = d.startIndex;
      p && (u.data = d.data.slice(0, p).concat(u.data)), v = {
        seriesLayoutBy: Qe,
        sourceHeader: p,
        dimensions: d.metaRawOption.dimensions
      };
    } else
      v = {
        seriesLayoutBy: Qe,
        sourceHeader: 0,
        dimensions: u.dimensions
      };
    return Ac(u.data, v, null);
  });
}
function Lv(r) {
  return r === Gt || r === Oe;
}
var cM = (
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
      var t = this._sourceHost, e = this._getUpstreamSourceManagers(), i = !!e.length, n, a;
      if (Go(t)) {
        var o = t, s = void 0, l = void 0, u = void 0;
        if (i) {
          var f = e[0];
          f.prepareSource(), u = f.getSource(), s = u.data, l = u.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), l = ie(s) ? Or : le, a = [];
        var c = this._getSourceMetaRawOption() || {}, h = u && u.metaRawOption || {}, v = V(c.seriesLayoutBy, h.seriesLayoutBy) || null, d = V(c.sourceHeader, h.sourceHeader), p = V(c.dimensions, h.dimensions), m = v !== h.seriesLayoutBy || !!d != !!h.sourceHeader || p;
        n = m ? [Ac(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: p
        }, l)] : [];
      } else {
        var g = t;
        if (i) {
          var y = this._applyTransform(e);
          n = y.sourceList, a = y.upstreamSignList;
        } else {
          var _ = g.get("source", !0);
          n = [Ac(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      this._setLocalSource(n, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, i = e.get("transform", !0), n = e.get("fromTransformResult", !0);
      if (n != null) {
        var a = "";
        t.length !== 1 && ng(a);
      }
      var o, s = [], l = [];
      return M(t, function(u) {
        u.prepareSource();
        var f = u.getSource(n || 0), c = "";
        n != null && !f && ng(c), s.push(f), l.push(u._getVersionSign());
      }), i ? o = uM(i, s, {
        datasetIndex: e.componentIndex
      }) : n != null && (o = [OA(s[0])]), {
        sourceList: o,
        upstreamSignList: l
      };
    }, r.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
        var i = t[e];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          i._isDirty() || this._upstreamSignList[e] !== i._getVersionSign()
        )
          return !0;
      }
    }, r.prototype.getSource = function(t) {
      t = t || 0;
      var e = this._sourceList[t];
      if (!e) {
        var i = this._getUpstreamSourceManagers();
        return i[0] && i[0].getSource(t);
      }
      return e;
    }, r.prototype.getSharedDataStore = function(t) {
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, i) {
      var n = 0, a = this._storeList, o = a[n];
      o || (o = a[n] = {});
      var s = o[i];
      if (!s) {
        var l = this._getUpstreamSourceManagers()[0];
        Go(this._sourceHost) && l ? s = l._innerGetDataStore(t, e, i) : (s = new Dc(), s.initData(new C_(e, t.length), t)), o[i] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (Go(t)) {
        var e = b_(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return G(kA(t), function(i) {
          return i.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, i, n;
      if (Go(t))
        e = t.get("seriesLayoutBy", !0), i = t.get("sourceHeader", !0), n = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        e = a.get("seriesLayoutBy", !0), i = a.get("sourceHeader", !0), n = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: e,
        sourceHeader: i,
        dimensions: n
      };
    }, r;
  })()
);
function Go(r) {
  return r.mainType === "series";
}
function ng(r) {
  throw new Error(r);
}
var X = {
  color: {},
  darkColor: {},
  size: {}
}, At = X.color = {
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
O(At, {
  primary: At.neutral80,
  secondary: At.neutral70,
  tertiary: At.neutral60,
  quaternary: At.neutral50,
  disabled: At.neutral20,
  border: At.neutral30,
  borderTint: At.neutral20,
  borderShade: At.neutral40,
  background: At.neutral05,
  backgroundTint: "rgba(234,237,245,0.5)",
  backgroundTransparent: "rgba(255,255,255,0)",
  backgroundShade: At.neutral10,
  shadow: "rgba(0,0,0,0.2)",
  shadowTint: "rgba(129,130,136,0.2)",
  axisLine: At.neutral70,
  axisLineTint: At.neutral40,
  axisTick: At.neutral70,
  axisTickMinor: At.neutral60,
  axisLabel: At.neutral70,
  axisSplitLine: At.neutral15,
  axisMinorSplitLine: At.neutral05
});
for (var ci in At)
  if (At.hasOwnProperty(ci)) {
    var ag = At[ci];
    ci === "theme" ? X.darkColor.theme = At.theme.slice() : ci === "highlight" ? X.darkColor.highlight = "rgba(255,231,130,0.4)" : ci.indexOf("accent") === 0 ? X.darkColor[ci] = nc(ag, null, function(r) {
      return r * 0.5;
    }, function(r) {
      return Math.min(1, 1.3 - r);
    }) : X.darkColor[ci] = nc(ag, null, function(r) {
      return r * 0.9;
    }, function(r) {
      return 1 - Math.pow(r, 1.5);
    });
  }
X.size = {
  xxs: 2,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50
};
var hM = "line-height:1";
function r1(r) {
  var t = r.lineHeight;
  return t == null ? hM : "line-height:" + te(t + "") + "px";
}
function i1(r, t) {
  var e = r.color || X.color.tertiary, i = r.fontSize || 12, n = r.fontWeight || "400", a = r.color || X.color.secondary, o = r.fontSize || 14, s = r.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + te(i + "") + "px;color:" + te(e) + ";font-weight:" + te(n + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + te(o + "") + "px;color:" + te(a) + ";font-weight:" + te(s + "")
  } : {
    nameStyle: {
      fontSize: i,
      fill: e,
      fontWeight: n
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var vM = [0, 10, 20, 30], dM = ["", `
`, `

`, `


`];
function Oi(r, t) {
  return t.type = r, t;
}
function Ec(r) {
  return r.type === "section";
}
function n1(r) {
  return Ec(r) ? pM : gM;
}
function a1(r) {
  if (Ec(r)) {
    var t = 0, e = r.blocks.length, i = e > 1 || e > 0 && !r.noHeader;
    return M(r.blocks, function(n) {
      var a = a1(n);
      a >= t && (t = a + +(i && // 0 always can not be readable gap level.
      (!a || Ec(n) && !n.noHeader)));
    }), t;
  }
  return 0;
}
function pM(r, t, e, i) {
  var n = t.noHeader, a = mM(a1(t)), o = [], s = t.blocks || [];
  vr(!s || F(s)), s = s || [];
  var l = r.orderMode;
  if (t.sortBlocks && l) {
    s = s.slice();
    var u = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (qt(u, l)) {
      var f = new WA(u[l], null);
      s.sort(function(p, m) {
        return f.evaluate(p.sortParam, m.sortParam);
      });
    } else l === "seriesDesc" && s.reverse();
  }
  M(s, function(p, m) {
    var g = t.valueFormatter, y = n1(p)(
      // Inherit valueFormatter
      g ? O(O({}, r), {
        valueFormatter: g
      }) : r,
      p,
      m > 0 ? a.html : 0,
      i
    );
    y != null && o.push(y);
  });
  var c = r.renderMode === "richText" ? o.join(a.richText) : kc(i, o.join(""), n ? e : a.html);
  if (n)
    return c;
  var h = Pc(t.header, "ordinal", r.useUTC), v = i1(i, r.renderMode).nameStyle, d = r1(i);
  return r.renderMode === "richText" ? o1(r, h, v) + a.richText + c : kc(i, '<div style="' + v + ";" + d + ';">' + te(h) + "</div>" + c, e);
}
function gM(r, t, e, i) {
  var n = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, l = t.name, u = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(b) {
    return b = F(b) ? b : [b], G(b, function(S, w) {
      return Pc(S, F(v) ? v[w] : v, u);
    });
  };
  if (!(a && o)) {
    var c = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || X.color.secondary, n), h = a ? "" : Pc(l, "ordinal", u), v = t.valueType, d = o ? [] : f(t.value, t.rawDataIndex), p = !s || !a, m = !s && a, g = i1(i, n), y = g.nameStyle, _ = g.valueStyle;
    return n === "richText" ? (s ? "" : c) + (a ? "" : o1(r, h, y)) + (o ? "" : bM(r, d, p, m, _)) : kc(i, (s ? "" : c) + (a ? "" : yM(h, !s, y)) + (o ? "" : _M(d, p, m, _)), e);
  }
}
function og(r, t, e, i, n, a) {
  if (r) {
    var o = n1(r), s = {
      useUTC: n,
      renderMode: e,
      orderMode: i,
      markupStyleCreator: t,
      valueFormatter: r.valueFormatter
    };
    return o(s, r, 0, a);
  }
}
function mM(r) {
  return {
    html: vM[r],
    richText: dM[r]
  };
}
function kc(r, t, e) {
  var i = '<div style="clear:both"></div>', n = "margin: " + e + "px 0 0", a = r1(r);
  return '<div style="' + n + ";" + a + ';">' + t + i + "</div>";
}
function yM(r, t, e) {
  var i = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + i + '">' + te(r) + "</span>";
}
function _M(r, t, e, i) {
  var n = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + n : "";
  return r = F(r) ? r : [r], '<span style="' + a + ";" + i + '">' + G(r, function(o) {
    return te(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function o1(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function bM(r, t, e, i, n) {
  var a = [n], o = i ? 10 : 20;
  return e && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), r.markupStyleCreator.wrapRichTextStyle(F(t) ? t.join("  ") : t, a);
}
function SM(r, t) {
  var e = r.getData().getItemVisual(t, "style"), i = e[r.visualDrawType];
  return Ri(i);
}
function s1(r, t) {
  var e = r.get("padding");
  return e ?? (t === "richText" ? [8, 10] : 10);
}
var tf = (
  /** @class */
  (function() {
    function r() {
      this.richTextStyles = {}, this._nextStyleNameId = Gh();
    }
    return r.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, r.prototype.makeTooltipMarker = function(t, e, i) {
      var n = i === "richText" ? this._generateStyleName() : null, a = WD({
        color: e,
        type: t,
        renderMode: i,
        markerId: n
      });
      return W(a) ? a : (this.richTextStyles[n] = a.style, a.content);
    }, r.prototype.wrapRichTextStyle = function(t, e) {
      var i = {};
      F(e) ? M(e, function(a) {
        return O(i, a);
      }) : O(i, e);
      var n = this._generateStyleName();
      return this.richTextStyles[n] = i, "{" + n + "|" + t + "}";
    }, r;
  })()
);
function wM(r) {
  var t = r.series, e = r.dataIndex, i = r.multipleSeries, n = t.getData(), a = n.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), l = F(s), u = SM(t, e), f, c, h, v;
  if (o > 1 || l && !o) {
    var d = xM(s, t, e, a, u);
    f = d.inlineValues, c = d.inlineValueTypes, h = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var p = n.getDimensionInfo(a[0]);
    v = f = Mn(n, e, a[0]), c = p.type;
  } else
    v = f = l ? s[0] : s;
  var m = Uh(t), g = m && t.name || "", y = n.getName(e), _ = i ? g : y;
  return Oi("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: i || !m,
    sortParam: v,
    blocks: [Oi("nameValue", {
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
      rawDataIndex: n.getRawIndex(e)
    })].concat(h || [])
  });
}
function xM(r, t, e, i, n) {
  var a = t.getData(), o = En(r, function(c, h, v) {
    var d = a.getDimensionInfo(v);
    return c = c || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], l = [], u = [];
  i.length ? M(i, function(c) {
    f(Mn(a, e, c), c);
  }) : M(r, f);
  function f(c, h) {
    var v = a.getDimensionInfo(h);
    !v || v.otherDims.tooltip === !1 || (o ? u.push(Oi("nameValue", {
      markerType: "subItem",
      markerColor: n,
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
var xr = ht();
function Uo(r, t) {
  return r.getName(t) || r.getId(t);
}
var TM = "__universalTransitionEnabled", Je = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = Ia({
        count: AM,
        reset: DM
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, n);
      var a = xr(this).sourceManager = new cM(this);
      a.prepareSource();
      var o = this.getInitialData(e, n);
      lg(o, this), this.dataTask.context.data = o, xr(this).dataBeforeProcessed = o, sg(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = Za(this), a = n ? po(e) : {}, o = this.subType;
      pt.hasClass(o) && (o += "Series"), ft(e, i.getTheme().get(this.subType)), ft(e, this.getDefaultOption()), pc(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && zr(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      e = ft(this.option, e, !0), this.fillDataTextStyle(e.data);
      var n = Za(this);
      n && zr(this.option, e, n);
      var a = xr(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, i);
      lg(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, xr(this).dataBeforeProcessed = o, sg(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !ie(e))
        for (var i = ["show"], n = 0; n < e.length; n++)
          e[n] && e[n].label && pc(e[n], "label", i);
    }, t.prototype.getInitialData = function(e, i) {
    }, t.prototype.appendData = function(e) {
      var i = this.getRawData();
      i.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var i = Rc(this);
      if (i) {
        var n = i.context.data;
        return e == null || !n.getLinkedData ? n : n.getLinkedData(e);
      } else
        return xr(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var i = Rc(this);
      if (i) {
        var n = i.context;
        n.outputData = e, i !== this.dataTask && (n.data = e);
      }
      xr(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return j(e);
    }, t.prototype.getSourceManager = function() {
      return xr(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return xr(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.indicesOfNearest = function(e, i, n, a) {
      var o = this.getData(), s = this.coordinateSystem, l = s && s.getAxis(e);
      if (!s || !l)
        return [];
      var u = l.dataToCoord(n);
      a == null && (a = 1 / 0);
      for (var f = [], c = 1 / 0, h = -1, v = 0, d = o.getDimensionIndex(i), p = o.getStore(), m = 0, g = p.count(); m < g; m++) {
        var y = p.get(d, m), _ = l.dataToCoord(y), b = u - _, S = Math.abs(b);
        S <= a && ((S < c || S === c && b >= 0 && h < 0) && (c = S, h = b, v = 0), b === h && (f[v++] = m));
      }
      return f.length = v, f;
    }, t.prototype.formatTooltip = function(e, i, n) {
      return wM({
        series: this,
        dataIndex: e,
        multipleSeries: i
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if (tt.node && !(e && e.ssr))
        return !1;
      var i = this.getShallow("animation");
      return i && this.getData().count() > this.getShallow("animationThreshold") && (i = !1), !!i;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, i, n) {
      var a = this.ecModel, o = Mv.prototype.getColorFromPalette.call(this, e, i, n);
      return o || (o = a.getColorFromPalette(e, i, n)), o;
    }, t.prototype.coordDimToDataDim = function(e) {
      return this.getRawData().mapDimensionsAll(e);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(e, i) {
      this._innerSelect(this.getData(i), e);
    }, t.prototype.unselect = function(e, i) {
      var n = this.option.selectedMap;
      if (n) {
        var a = this.option.selectedMode, o = this.getData(i);
        if (a === "series" || n === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < e.length; s++) {
          var l = e[s], u = Uo(o, l);
          n[u] = !1, this._selectedDataIndicesMap[u] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(e, i) {
      for (var n = [], a = 0; a < e.length; a++)
        n[0] = e[a], this.isSelected(e[a], i) ? this.unselect(n, i) : this.select(n, i);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var e = this._selectedDataIndicesMap, i = Tt(e), n = [], a = 0; a < i.length; a++) {
        var o = e[i[a]];
        o >= 0 && n.push(o);
      }
      return n;
    }, t.prototype.isSelected = function(e, i) {
      var n = this.option.selectedMap;
      if (!n)
        return !1;
      var a = this.getData(i);
      return (n === "all" || n[Uo(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[TM])
        return !0;
      var e = this.option.universalTransition;
      return e ? e === !0 ? !0 : e && e.enabled : !1;
    }, t.prototype._innerSelect = function(e, i) {
      var n, a, o = this.option, s = o.selectedMode, l = i.length;
      if (!(!s || !l)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          K(o.selectedMap) || (o.selectedMap = {});
          for (var u = o.selectedMap, f = 0; f < l; f++) {
            var c = i[f], h = Uo(e, c);
            u[h] = !0, this._selectedDataIndicesMap[h] = e.getRawIndex(c);
          }
        } else if (s === "single" || s === !0) {
          var v = i[l - 1], h = Uo(e, v);
          o.selectedMap = (n = {}, n[h] = !0, n), this._selectedDataIndicesMap = (a = {}, a[h] = e.getRawIndex(v), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(e) {
      if (!this.option.selectedMap) {
        var i = [];
        e.hasItemOption && e.each(function(n) {
          var a = e.getRawDataItem(n);
          a && a.selected && i.push(n);
        }), i.length > 0 && this._innerSelect(e, i);
      }
    }, t.registerClass = function(e) {
      return pt.registerClass(e);
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
    })(), t;
  })(pt)
);
Re(Je, Iv);
Re(Je, Mv);
r0(Je, pt);
function sg(r) {
  var t = r.name;
  Uh(r) || (r.name = CM(r) || t);
}
function CM(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), i = [];
  return M(e, function(n) {
    var a = t.getDimensionInfo(n);
    a.displayName && i.push(a.displayName);
  }), i.join(" ");
}
function AM(r) {
  return r.model.getRawData().count();
}
function DM(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), MM;
}
function MM(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function lg(r, t) {
  M(Iw(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, mt(IM, t));
  });
}
function IM(r, t) {
  var e = Rc(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function Rc(r) {
  var t = (r.ecModel || {}).scheduler, e = t && t.getPipeline(r.uid);
  if (e) {
    var i = e.currentTask;
    if (i) {
      var n = i.agentStubMap;
      n && (i = n.get(r.uid));
    }
    return i;
  }
}
var LM = dt.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    r.moveTo(e, i - a), r.lineTo(e + n, i + a), r.lineTo(e - n, i + a), r.closePath();
  }
}), PM = dt.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    r.moveTo(e, i - a), r.lineTo(e + n, i), r.lineTo(e, i + a), r.lineTo(e - n, i), r.closePath();
  }
}), EM = dt.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.x, i = t.y, n = t.width / 5 * 3, a = Math.max(n, t.height), o = n / 2, s = o * o / (a - o), l = i - a + o + s, u = Math.asin(s / o), f = Math.cos(u) * o, c = Math.sin(u), h = Math.cos(u), v = o * 0.6, d = o * 0.7;
    r.moveTo(e - f, l + s), r.arc(e, l, o, Math.PI - u, Math.PI * 2 + u), r.bezierCurveTo(e + f - c * v, l + s + h * v, e, i - d, e, i), r.bezierCurveTo(e, i - d, e - f + c * v, l + s + h * v, e - f, l + s), r.closePath();
  }
}), kM = dt.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.height, i = t.width, n = t.x, a = t.y, o = i / 3 * 2;
    r.moveTo(n, a), r.lineTo(n + o, a + e), r.lineTo(n, a + e / 4 * 3), r.lineTo(n - o, a + e), r.lineTo(n, a), r.closePath();
  }
}), RM = {
  line: gr,
  rect: It,
  roundRect: It,
  square: It,
  circle: Ul,
  diamond: PM,
  pin: EM,
  arrow: kM,
  triangle: LM
}, OM = {
  line: function(r, t, e, i, n) {
    n.x1 = r, n.y1 = t + i / 2, n.x2 = r + e, n.y2 = t + i / 2;
  },
  rect: function(r, t, e, i, n) {
    n.x = r, n.y = t, n.width = e, n.height = i;
  },
  roundRect: function(r, t, e, i, n) {
    n.x = r, n.y = t, n.width = e, n.height = i, n.r = Math.min(e, i) / 4;
  },
  square: function(r, t, e, i, n) {
    var a = Math.min(e, i);
    n.x = r, n.y = t, n.width = a, n.height = a;
  },
  circle: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.r = Math.min(e, i) / 2;
  },
  diamond: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i;
  },
  pin: function(r, t, e, i, n) {
    n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i;
  },
  arrow: function(r, t, e, i, n) {
    n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i;
  },
  triangle: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i;
  }
}, Oc = {};
M(RM, function(r, t) {
  Oc[t] = new r();
});
var NM = dt.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var i = Fs(r, t, e), n = this.shape;
    return n && n.symbolType === "pin" && t.position === "inside" && (i.y = e.y + e.height * 0.4), i;
  },
  buildPath: function(r, t, e) {
    var i = t.symbolType;
    if (i !== "none") {
      var n = Oc[i];
      n || (i = "rect", n = Oc[i]), OM[i](t.x, t.y, t.width, t.height, n.shape), n.buildPath(r, n.shape, e);
    }
  }
});
function BM(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || X.color.neutral00, e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function Ni(r, t, e, i, n, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var l;
  return r.indexOf("image://") === 0 ? l = c_(r.slice(8), new J(t, e, i, n), o ? "center" : "cover") : r.indexOf("path://") === 0 ? l = nv(r.slice(7), {}, new J(t, e, i, n), o ? "center" : "cover") : l = new NM({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: i,
      height: n
    }
  }), l.__isEmptyBrush = s, l.setColor = BM, a && l.setColor(a), l;
}
function Pv(r) {
  return F(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
}
function ru(r, t) {
  if (r != null)
    return F(r) || (r = [r, r]), [Mt(r[0], t[0]) || 0, Mt(V(r[1], r[0]), t[1]) || 0];
}
var FM = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.hasSymbolVisual = !0, e;
    }
    return t.prototype.getInitialData = function(e) {
      return pv(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getLegendIcon = function(e) {
      var i = new Lt(), n = Ni("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
      i.add(n), n.setStyle(e.lineStyle);
      var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, l = e.itemHeight * 0.8, u = Ni(s, (e.itemWidth - l) / 2, (e.itemHeight - l) / 2, l, l, e.itemStyle.fill);
      i.add(u), u.setStyle(e.itemStyle);
      var f = e.iconRotate === "inherit" ? o : e.iconRotate || 0;
      return u.rotation = f * Math.PI / 180, u.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), s.indexOf("empty") > -1 && (u.style.stroke = u.style.fill, u.style.fill = X.color.neutral00, u.style.lineWidth = 2), i;
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
  })(Je)
);
function Ev(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel"), i = e.length;
  if (i === 1) {
    var n = Mn(r, t, e[0]);
    return n != null ? n + "" : null;
  } else if (i) {
    for (var a = [], o = 0; o < e.length; o++)
      a.push(Mn(r, t, e[o]));
    return a.join(" ");
  }
}
function l1(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel");
  if (!F(t))
    return t + "";
  for (var i = [], n = 0; n < e.length; n++) {
    var a = r.getDimensionIndex(e[n]);
    a >= 0 && i.push(t[a]);
  }
  return i.join(" ");
}
var kv = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e, i, n, a) {
      var o = r.call(this) || this;
      return o.updateData(e, i, n, a), o;
    }
    return t.prototype._createSymbol = function(e, i, n, a, o, s) {
      this.removeAll();
      var l = Ni(e, -1, -1, 2, 2, null, s);
      l.attr({
        z2: V(o, 100),
        culling: !0,
        scaleX: a[0] / 2,
        scaleY: a[1] / 2
      }), l.drift = zM, this._symbolType = e, this.add(l);
    }, t.prototype.stopSymbolAnimation = function(e) {
      this.childAt(0).stopAnimation(null, e);
    }, t.prototype.getSymbolType = function() {
      return this._symbolType;
    }, t.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, t.prototype.highlight = function() {
      Va(this.childAt(0));
    }, t.prototype.downplay = function() {
      Ga(this.childAt(0));
    }, t.prototype.setZ = function(e, i) {
      var n = this.childAt(0);
      n.zlevel = e, n.z = i;
    }, t.prototype.setDraggable = function(e, i) {
      var n = this.childAt(0);
      n.draggable = e, n.cursor = !i && e ? "move" : n.cursor;
    }, t.prototype.updateData = function(e, i, n, a) {
      this.silent = !1;
      var o = e.getItemVisual(i, "symbol") || "circle", s = e.hostModel, l = t.getSymbolSize(e, i), u = t.getSymbolZ2(e, i), f = o !== this._symbolType, c = a && a.disableAnimation;
      if (f) {
        var h = e.getItemVisual(i, "symbolKeepAspect");
        this._createSymbol(o, e, i, l, u, h);
      } else {
        var v = this.childAt(0);
        v.silent = !1;
        var d = {
          scaleX: l[0] / 2,
          scaleY: l[1] / 2
        };
        c ? v.attr(d) : Kt(v, d, s, i), l_(v);
      }
      if (this._updateCommon(e, i, l, n, a), f) {
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
          v.scaleX = v.scaleY = 0, v.style.opacity = 0, je(v, d, s, i);
        }
      }
      c && this.childAt(0).stopAnimation("leave");
    }, t.prototype._updateCommon = function(e, i, n, a, o) {
      var s = this.childAt(0), l = e.hostModel, u, f, c, h, v, d, p, m, g;
      if (a && (u = a.emphasisItemStyle, f = a.blurItemStyle, c = a.selectItemStyle, h = a.focus, v = a.blurScope, p = a.labelStatesModels, m = a.hoverScale, g = a.cursorStyle, d = a.emphasisDisabled), !a || e.hasItemOption) {
        var y = a && a.itemModel ? a.itemModel : e.getItemModel(i), _ = y.getModel("emphasis");
        u = _.getModel("itemStyle").getItemStyle(), c = y.getModel(["select", "itemStyle"]).getItemStyle(), f = y.getModel(["blur", "itemStyle"]).getItemStyle(), h = _.get("focus"), v = _.get("blurScope"), d = _.get("disabled"), p = zi(y), m = _.getShallow("scale"), g = y.getShallow("cursor");
      }
      var b = e.getItemVisual(i, "symbolRotate");
      s.attr("rotation", (b || 0) * Math.PI / 180 || 0);
      var S = ru(e.getItemVisual(i, "symbolOffset"), n);
      S && (s.x = S[0], s.y = S[1]), g && s.attr("cursor", g);
      var w = e.getItemVisual(i, "style"), x = w.fill;
      if (s instanceof Hr) {
        var T = s.style;
        s.useStyle(O({
          // TODO other properties like x, y ?
          image: T.image,
          x: T.x,
          y: T.y,
          width: T.width,
          height: T.height
        }, w));
      } else
        s.__isEmptyBrush ? s.useStyle(O({}, w)) : s.useStyle(w), s.style.decal = null, s.setColor(x, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var C = e.getItemVisual(i, "liftZ"), D = this._z2;
      C != null ? D == null && (this._z2 = s.z2, s.z2 += C) : D != null && (s.z2 = D, this._z2 = null);
      var A = o && o.useNameLabel;
      zn(s, p, {
        labelFetcher: l,
        labelDataIndex: i,
        defaultText: L,
        inheritColor: x,
        defaultOpacity: w.opacity
      });
      function L(E) {
        return A ? e.getName(E) : Ev(e, E);
      }
      this._sizeX = n[0] / 2, this._sizeY = n[1] / 2;
      var I = s.ensureState("emphasis");
      I.style = u, s.ensureState("select").style = c, s.ensureState("blur").style = f;
      var P = m == null || m === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(m) && m > 0 ? +m : 1;
      I.scaleX = this._sizeX * P, I.scaleY = this._sizeY * P, this.setSymbolScale(1), An(this, h, v, d);
    }, t.prototype.setSymbolScale = function(e) {
      this.scaleX = this.scaleY = e;
    }, t.prototype.fadeOut = function(e, i, n) {
      var a = this.childAt(0), o = at(this).dataIndex, s = n && n.animation;
      if (this.silent = a.silent = !0, n && n.fadeLabel) {
        var l = a.getTextContent();
        l && Js(l, {
          style: {
            opacity: 0
          }
        }, i, {
          dataIndex: o,
          removeOpt: s,
          cb: function() {
            a.removeTextContent();
          }
        });
      } else
        a.removeTextContent();
      Js(a, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, i, {
        dataIndex: o,
        cb: e,
        removeOpt: s
      });
    }, t.getSymbolSize = function(e, i) {
      return Pv(e.getItemVisual(i, "symbolSize"));
    }, t.getSymbolZ2 = function(e, i) {
      return e.getItemVisual(i, "z2");
    }, t;
  })(Lt)
);
function zM(r, t) {
  this.parent.drift(r, t);
}
function Wo(r, t, e, i) {
  return t && !isNaN(t[0]) && !isNaN(t[1]) && !(i && i.isIgnore && i.isIgnore(e)) && !(i && i.clipShape && !i.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none";
}
function ug(r) {
  return r != null && !K(r) && (r = {
    isIgnore: r
  }), r || {};
}
function fg(r) {
  var t = r.hostModel, e = t.getModel("emphasis");
  return {
    emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
    blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: e.get("focus"),
    blurScope: e.get("blurScope"),
    emphasisDisabled: e.get("disabled"),
    hoverScale: e.get("scale"),
    labelStatesModels: zi(t),
    cursorStyle: t.get("cursor")
  };
}
function cg(r, t, e, i, n, a, o) {
  var s = new r(t, e, i, n);
  return s.setPosition(a), t.setItemGraphicEl(e, s), o.add(s), s;
}
var u1 = (
  /** @class */
  (function() {
    function r(t) {
      this.group = new Lt(), this._SymbolCtor = t || kv;
    }
    return r.prototype.updateData = function(t, e) {
      this._progressiveEls = null, e = ug(e);
      var i = this.group, n = t.hostModel, a = this._data, o = this._SymbolCtor, s = e.disableAnimation, l = this._seriesScope = fg(t), u = {
        disableAnimation: s
      }, f = e.getSymbolPoint || function(c) {
        return t.getItemLayout(c);
      };
      a || i.removeAll(), t.diff(a).add(function(c) {
        var h = f(c);
        Wo(t, h, c, e) && cg(o, t, c, l, u, h, i);
      }).update(function(c, h) {
        var v = a.getItemGraphicEl(h), d = f(c);
        if (!Wo(t, d, c, e)) {
          i.remove(v);
          return;
        }
        var p = t.getItemVisual(c, "symbol") || "circle", m = v && v.getSymbolType && v.getSymbolType();
        if (!v || m && m !== p)
          i.remove(v), v = new o(t, c, l, u), v.setPosition(d);
        else {
          v.updateData(t, c, l, u);
          var g = {
            x: d[0],
            y: d[1]
          };
          s ? v.attr(g) : Kt(v, g, n);
        }
        i.add(v), t.setItemGraphicEl(c, v);
      }).remove(function(c) {
        var h = a.getItemGraphicEl(c);
        h && h.fadeOut(function() {
          i.remove(h);
        }, n);
      }).execute(), this._getSymbolPoint = f, this._data = t;
    }, r.prototype.updateLayout = function(t) {
      var e = this._data;
      if (e)
        for (var i = this, n = e.getStore(), a = 0, o = n.count(); a < o; a++) {
          var s = e.getItemGraphicEl(a), l = i._getSymbolPoint(a);
          Wo(e, l, a, t) ? (s = s || cg(i._SymbolCtor, e, a, i._seriesScope, {
            disableAnimation: !0
          }, l, i.group), s.stopAnimation(), s.setPosition(l), s.markRedraw()) : s && (i.group.remove(s), e.setItemGraphicEl(a, null));
        }
    }, r.prototype.incrementalPrepareUpdate = function(t) {
      this._seriesScope = fg(t), this._data = null, this.group.removeAll();
    }, r.prototype.incrementalUpdate = function(t, e, i, n) {
      this._progressiveEls = [], n = ug(n);
      function a(u) {
        u.isGroup || (u.incremental = i, u.ensureState("emphasis").hoverLayer = Xl);
      }
      for (var o = t.start; o < t.end; o++) {
        var s = e.getItemLayout(o);
        if (Wo(e, s, o, n)) {
          var l = new this._SymbolCtor(e, o, this._seriesScope);
          l.traverse(a), l.setPosition(s), this.group.add(l), e.setItemGraphicEl(o, l), this._progressiveEls.push(l);
        }
      }
    }, r.prototype.eachRendered = function(t) {
      vo(this._progressiveEls || this.group, t);
    }, r.prototype.remove = function(t) {
      var e = this.group, i = this._data;
      i && t ? i.eachItemGraphicEl(function(n) {
        n.fadeOut(function() {
          e.remove(n);
        }, i.hostModel);
      }) : e.removeAll();
    }, r;
  })()
);
function f1(r, t, e) {
  var i = r.getBaseAxis(), n = r.getOtherAxis(i), a = $M(n, e), o = i.dim, s = n.dim, l = t.mapDimension(s), u = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, c = G(r.dimensions, function(d) {
    return t.mapDimension(d);
  }), h = !1, v = t.getCalculationInfo("stackResultDimension");
  return ki(
    t,
    c[0]
    /* , dims[1] */
  ) && (h = !0, c[0] = v), ki(
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
function $M(r, t) {
  var e = 0, i = r.scale.getExtent();
  return t === "start" ? e = i[0] : t === "end" ? e = i[1] : bt(t) && !isNaN(t) ? e = t : i[0] > 0 ? e = i[0] : i[1] < 0 && (e = i[1]), e;
}
function c1(r, t, e, i) {
  var n = NaN;
  r.stacked && (n = e.get(e.getCalculationInfo("stackedOverDimension"), i)), isNaN(n) && (n = r.valueStart);
  var a = r.baseDataOffset, o = [];
  return o[a] = e.get(r.baseDim, i), o[1 - a] = n, t.dataToPoint(o);
}
function xe(r, t) {
  return !isFinite(r) || !isFinite(t);
}
var HM = typeof Float32Array !== Bn ? Float32Array : void 0, VM = typeof Float64Array !== Bn ? Float64Array : void 0;
function fr(r) {
  return Rv({
    ctor: HM
  }, r).arr;
}
function Rv(r, t) {
  var e = r.arr, i = r.ctor;
  if (t > cp && (t = cp), !e || r.typed && e.length < t) {
    var n = void 0;
    if (i)
      try {
        n = new i(t), r.typed = !0, e && n.set(e);
      } catch {
      }
    if (!n && (n = [], r.typed = !1, e))
      for (var a = 0, o = e.length; a < o; a++)
        n[a] = e[a];
    r.arr = n;
  }
  return r;
}
function GM(r, t) {
  var e = [];
  return t.diff(r).add(function(i) {
    e.push({
      cmd: "+",
      idx: i
    });
  }).update(function(i, n) {
    e.push({
      cmd: "=",
      idx: n,
      idx1: i
    });
  }).remove(function(i) {
    e.push({
      cmd: "-",
      idx: i
    });
  }).execute(), e;
}
function UM(r, t, e, i, n, a, o, s) {
  for (var l = GM(r, t), u = [], f = [], c = [], h = [], v = [], d = [], p = [], m = f1(n, t, o), g = r.getLayout("points") || [], y = t.getLayout("points") || [], _ = 0; _ < l.length; _++) {
    var b = l[_], S = !0, w = void 0, x = void 0;
    switch (b.cmd) {
      case "=":
        w = b.idx * 2, x = b.idx1 * 2;
        var T = g[w], C = g[w + 1], D = y[x], A = y[x + 1];
        (isNaN(T) || isNaN(C)) && (T = D, C = A), u.push(T, C), f.push(D, A), c.push(e[w], e[w + 1]), h.push(i[x], i[x + 1]), p.push(t.getRawIndex(b.idx1));
        break;
      case "+":
        var L = b.idx, I = m.dataDimsForPoint, P = n.dataToPoint([t.get(I[0], L), t.get(I[1], L)]);
        x = L * 2, u.push(P[0], P[1]), f.push(y[x], y[x + 1]);
        var E = c1(m, n, t, L);
        c.push(E[0], E[1]), h.push(i[x], i[x + 1]), p.push(t.getRawIndex(L));
        break;
      case "-":
        S = !1;
    }
    S && (v.push(b), d.push(d.length));
  }
  d.sort(function(it, ot) {
    return p[it] - p[ot];
  });
  for (var k = u.length, z = fr(k), R = fr(k), $ = fr(k), Y = fr(k), U = [], _ = 0; _ < d.length; _++) {
    var q = d[_], Q = _ * 2, H = q * 2;
    z[Q] = u[H], z[Q + 1] = u[H + 1], R[Q] = f[H], R[Q + 1] = f[H + 1], $[Q] = c[H], $[Q + 1] = c[H + 1], Y[Q] = h[H], Y[Q + 1] = h[H + 1], U[_] = v[q];
  }
  return {
    current: z,
    next: R,
    stackedOnCurrent: $,
    stackedOnNext: Y,
    status: U
  };
}
var Tr = Math.min, Cr = Math.max;
function Nc(r, t, e, i, n, a, o, s, l) {
  for (var u, f, c, h, v, d, p = e, m = 0; m < i; m++) {
    var g = t[p * 2], y = t[p * 2 + 1];
    if (p >= n || p < 0)
      break;
    if (xe(g, y)) {
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
        for (var S = p + a, w = t[S * 2], x = t[S * 2 + 1]; w === g && x === y && m < i; )
          m++, S += a, p += a, w = t[S * 2], x = t[S * 2 + 1], g = t[p * 2], y = t[p * 2 + 1], _ = g - u, b = y - f;
        var T = m + 1;
        if (l)
          for (; xe(w, x) && T < i; )
            T++, S += a, w = t[S * 2], x = t[S * 2 + 1];
        var C = 0.5, D = 0, A = 0, L = void 0, I = void 0;
        if (T >= i || xe(w, x))
          v = g, d = y;
        else {
          D = w - u, A = x - f;
          var P = g - u, E = w - g, k = y - f, z = x - y, R = void 0, $ = void 0;
          if (s === "x") {
            R = Math.abs(P), $ = Math.abs(E);
            var Y = D > 0 ? 1 : -1;
            v = g - Y * R * o, d = y, L = g + Y * $ * o, I = y;
          } else if (s === "y") {
            R = Math.abs(k), $ = Math.abs(z);
            var U = A > 0 ? 1 : -1;
            v = g, d = y - U * R * o, L = g, I = y + U * $ * o;
          } else
            R = Math.sqrt(P * P + k * k), $ = Math.sqrt(E * E + z * z), C = $ / ($ + R), v = g - D * o * (1 - C), d = y - A * o * (1 - C), L = g + D * o * C, I = y + A * o * C, L = Tr(L, Cr(w, g)), I = Tr(I, Cr(x, y)), L = Cr(L, Tr(w, g)), I = Cr(I, Tr(x, y)), D = L - g, A = I - y, v = g - D * R / $, d = y - A * R / $, v = Tr(v, Cr(u, g)), d = Tr(d, Cr(f, y)), v = Cr(v, Tr(u, g)), d = Cr(d, Tr(f, y)), D = g - v, A = y - d, L = g + D * $ / R, I = y + A * $ / R;
        }
        r.bezierCurveTo(c, h, v, d, g, y), c = L, h = I;
      } else
        r.lineTo(g, y);
    }
    u = g, f = y, p += a;
  }
  return m;
}
var h1 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return r;
  })()
), WM = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "ec-polyline", i;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: X.color.neutral99,
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new h1();
    }, t.prototype.buildPath = function(e, i) {
      var n = i.points, a = 0, o = n.length / 2;
      if (i.connectNulls) {
        for (; o > 0 && xe(n[o * 2 - 2], n[o * 2 - 1]); o--)
          ;
        for (; a < o && xe(n[a * 2], n[a * 2 + 1]); a++)
          ;
      }
      for (; a < o; )
        a += Nc(e, n, a, o, o, 1, i.smooth, i.smoothMonotone, i.connectNulls) + 1;
    }, t.prototype.getPointOn = function(e, i) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var n = this.path, a = n.data, o = Pi.CMD, s, l, u = i === "x", f = [], c = 0; c < a.length; ) {
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
            var S = u ? Hs(s, v, p, g, e, f) : Hs(l, d, m, y, e, f);
            if (S > 0)
              for (var w = 0; w < S; w++) {
                var x = f[w];
                if (x <= 1 && x >= 0) {
                  var b = u ? Bt(l, d, m, y, x) : Bt(s, v, p, g, x);
                  return u ? [e, b] : [b, e];
                }
              }
            s = g, l = y;
            break;
        }
      }
    }, t;
  })(dt)
), YM = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(h1)
), XM = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "ec-polygon", i;
    }
    return t.prototype.getDefaultShape = function() {
      return new YM();
    }, t.prototype.buildPath = function(e, i) {
      var n = i.points, a = i.stackedOnPoints, o = 0, s = n.length / 2, l = i.smoothMonotone;
      if (i.connectNulls) {
        for (; s > 0 && xe(n[s * 2 - 2], n[s * 2 - 1]); s--)
          ;
        for (; o < s && xe(n[o * 2], n[o * 2 + 1]); o++)
          ;
      }
      for (; o < s; ) {
        var u = Nc(e, n, o, s, s, 1, i.smooth, l, i.connectNulls);
        Nc(e, a, o + u - 1, u, s, -1, i.stackedOnSmooth, l, i.connectNulls), o += u + 1, e.closePath();
      }
    }, t;
  })(dt)
);
function Ov() {
  var r = ht();
  return function(t) {
    var e = r(t), i = t.pipelineContext, n = !!e.large, a = !!e.progressiveRender, o = e.large = !!(i && i.large), s = e.progressiveRender = !!(i && i.progressiveRender);
    return (n !== o || a !== s) && "reset";
  };
}
var v1 = ht(), qM = Ov(), Pe = (
  /** @class */
  (function() {
    function r() {
      this.group = new Lt(), this.uid = jl("viewChart"), this.renderTask = Ia({
        plan: ZM,
        reset: KM
      }), this.renderTask.context = {
        view: this
      };
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, i, n) {
    }, r.prototype.highlight = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      a && vg(a, n, "emphasis");
    }, r.prototype.downplay = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      a && vg(a, n, "normal");
    }, r.prototype.remove = function(t, e) {
      this.group.removeAll();
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.updateVisual = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.eachRendered = function(t) {
      vo(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      v1(t).updateMethod = e;
    }, r.protoInitialize = (function() {
      var t = r.prototype;
      t.type = "chart";
    })(), r;
  })()
);
function hg(r, t, e) {
  r && Sc(r) && (t === "emphasis" ? Va : Ga)(r, e);
}
function vg(r, t, e) {
  var i = Ei(r, t), n = t && t.highlightKey != null ? yC(t.highlightKey) : null;
  i != null ? M(Zt(i), function(a) {
    hg(r.getItemGraphicEl(a), e, n);
  }) : r.eachItemGraphicEl(function(a) {
    hg(a, e, n);
  });
}
Oh(Pe);
Rl(Pe);
function ZM(r) {
  return qM(r.model);
}
function KM(r) {
  var t = r.model, e = r.ecModel, i = r.api, n = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = n && v1(n).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return l !== "render" && o[l](t, e, i, n), QM[l];
}
var QM = {
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
function d1(r, t, e, i, n) {
  var a = r.getArea(), o = a.x, s = a.y, l = a.width, u = a.height, f = e.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, l += f, u += f, l = Math.ceil(l), o !== Math.floor(o) && (o = Math.floor(o), l++);
  var c = new It({
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
    var p = Z(n) ? function(m) {
      n(m, c);
    } : null;
    je(c, {
      shape: {
        width: l,
        height: u,
        x: o,
        y: s
      }
    }, e, null, i, p);
  }
  return c;
}
function p1(r, t, e) {
  var i = r.getArea(), n = lt(i.r0, 1), a = lt(i.r, 1), o = new Fn({
    shape: {
      cx: lt(r.cx, 1),
      cy: lt(r.cy, 1),
      r0: n,
      r: a,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      clockwise: i.clockwise
    }
  });
  if (t) {
    var s = r.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = i.startAngle : o.shape.r = n, je(o, {
      shape: {
        endAngle: i.endAngle,
        r: a
      }
    }, e);
  }
  return o;
}
function jM(r, t, e, i, n) {
  if (r) {
    if (r.type === "polar")
      return p1(r, t, e);
    if (r.type === "cartesian2d")
      return d1(r, t, e, i, n);
  } else return null;
  return null;
}
function go(r, t) {
  return r.type === t;
}
var Be = (
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
Rl(Be);
var JM = 0, Bc = (
  /** @class */
  (function() {
    function r(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++JM, this._onCollect = t.onCollect;
    }
    return r.createByAxisModel = function(t) {
      var e = t.option, i = e.data, n = i && G(i, t2);
      return new r({
        categories: n,
        needCollect: !n,
        // deduplication is default in axis.
        deduplication: e.dedplication !== !1
      });
    }, r.prototype.getOrdinal = function(t) {
      return this._getOrCreateMap().get(t);
    }, r.prototype.parseAndCollect = function(t) {
      var e, i = this._needCollect;
      if (!W(t) && !i)
        return t;
      if (i && !this._deduplication)
        return e = this.categories.length, this.categories[e] = t, this._onCollect && this._onCollect(t, e), e;
      var n = this._getOrCreateMap();
      return e = n.get(t), e == null && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e), this._onCollect && this._onCollect(t, e)) : e = NaN), e;
    }, r.prototype._getOrCreateMap = function() {
      return this._map || (this._map = j(this.categories));
    }, r;
  })()
);
function t2(r) {
  return K(r) && r.value != null ? r.value : r + "";
}
var Se = 0, Ka = 1, e2 = {
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
}, r2 = Tt(e2), nl = 2, g1 = 3;
function Nv(r, t, e) {
  var i;
  return r = r || {}, n2(r, e), {
    brk: i,
    mapper: r
  };
}
function m1(r, t) {
  M(r2, function(e) {
    r[e] = t[e];
  });
}
function y1(r, t) {
  r.freeze = Ht;
}
function Qa(r) {
  return r.getExtentUnsafe(Se, nl);
}
function al(r, t) {
  return r.getExtentUnsafe(Ka, t) || r.getExtentUnsafe(Se, t);
}
function i2(r) {
  var t = al(r, g1);
  return t[1] - t[0];
}
function iu(r) {
  var t = r.getExtentUnsafe(Se, g1);
  return t[1] - t[0];
}
function n2(r, t) {
  var e = r || {}, i = [];
  return e._extents = i, i[Se] = t ? t.slice() : ye(), O(e, a2), e;
}
var a2 = {
  needTransform: function() {
    return !1;
  },
  normalize: function(r) {
    var t = this._extents[Ka] || this._extents[Se];
    return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
  },
  scale: function(r) {
    var t = this._extents[Ka] || this._extents[Se];
    return r * (t[1] - t[0]) + t[0];
  },
  transformIn: function(r) {
    return r;
  },
  transformOut: function(r) {
    return r;
  },
  contain: function(r) {
    var t = al(this, null);
    return r >= t[0] && r <= t[1];
  },
  getExtent: function() {
    return this._extents[Se].slice();
  },
  getExtentUnsafe: function(r) {
    return this._extents[r];
  },
  setExtent: function(r, t) {
    dg(this._extents, Se, r, t);
  },
  setExtent2: function(r, t, e) {
    var i = this._extents;
    i[r] || (i[r] = i[Se].slice()), dg(i, r, t, e);
  },
  freeze: function() {
  }
};
function dg(r, t, e, i) {
  Cn(e, i) && (r[t][0] = e, r[t][1] = i);
}
function _1(r) {
  return ol(r) || In(r);
}
function ol(r) {
  return r.type === "interval";
}
function Bv(r) {
  return r.type === "time";
}
function In(r) {
  return r.type === "log";
}
function Fe(r) {
  return r.type === "ordinal";
}
function o2(r) {
  var t = Hh(r), e = On(10, t), i = dr(r / e);
  return i ? i === 2 ? i = 3 : i === 3 ? i = 5 : i *= 2 : i = 1, lt(i * e, -t);
}
function Bi(r) {
  return ur(r) + 2;
}
function Yo(r, t) {
  return za(r) / za(t);
}
function ef(r, t, e) {
  var i = e && e.lookup;
  if (i) {
    for (var n = 0; n < i.from.length; n++)
      if (r === i.from[n])
        return i.to[n];
  }
  return On(t, r);
}
function b1(r, t, e) {
  var i = r.slice();
  if (i[0] === i[1]) {
    var n = e && e.ctnShp;
    if (i[0] !== 0) {
      var a = Et(i[0]);
      t[1] || (i[1] += a / 2), i[0] -= a / 2;
    } else
      n && (i[0] = -1), i[1] = 1;
  }
  return (!pr(i[0]) || !pr(i[1])) && (i[0] = 0, i[1] = 1), i[1] < i[0] && i.reverse(), i;
}
function s2(r, t) {
  return [r[0] !== t[0], r[1] !== t[1]];
}
function Fv(r, t) {
  return r = r || t, dr(ct(r, 1));
}
function S1(r, t, e) {
  var i = Qa(r), n = i[0], a = r.count(), o = Math.max((t || 0) + 1, 1);
  n !== 0 && o > 1 && a / o > 2 && (n = Math.round(Math.ceil(n / o) * o)), n !== i[0] && l(i[0], !0, !0);
  for (var s = n; s <= i[1]; s += o)
    l(s, !1, s === i[0] || s === i[1]);
  s - o !== i[1] && l(i[1], !0, !0);
  function l(u, f, c) {
    e({
      value: u,
      offInterval: f
    }, c);
  }
}
var w1 = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this) || this;
      i.type = "ordinal", i.parse = t.parse, m1(i, t.decoratedMethods);
      var n = e.ordinalMeta;
      n || (n = new Bc({})), F(n) && (n = new Bc({
        categories: G(n, function(o) {
          return K(o) ? o.value : o;
        })
      })), i._ordinalMeta = n;
      var a = Nv(
        null,
        null,
        // Do not support break in OrdinalScale yet.
        e.extent || [0, n.categories.length - 1]
      );
      return i._mapper = a.mapper, y1(i), i;
    }
    return t.parse = function(e) {
      return e == null ? e = NaN : W(e) ? (e = this._ordinalMeta.getOrdinal(e), e == null && (e = NaN)) : e = dr(e), e;
    }, t.prototype.getTicks = function() {
      var e = [];
      return S1(this, 0, function(i) {
        e.push(i);
      }), e;
    }, t.prototype.getMinorTicks = function(e) {
    }, t.prototype.setSortInfo = function(e) {
      if (e == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var i = e.ordinalNumbers, n = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, l = Vt(s, i.length); o < l; ++o) {
        var u = n[o] = i[o];
        a[u] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        n[o] = f, a[f] = o;
      }
    }, t.prototype._getTickNumber = function(e) {
      var i = this._ticksByOrdinalNumber;
      return i && e >= 0 && e < i.length ? i[e] : e;
    }, t.prototype.getRawOrdinalNumber = function(e) {
      var i = this._ordinalNumbersByTick;
      return i && e >= 0 && e < i.length ? i[e] : e;
    }, t.prototype.getLabel = function(e) {
      if (!this.isBlank()) {
        var i = this.getRawOrdinalNumber(e.value), n = this._ordinalMeta.categories[i];
        return n == null ? "" : n + "";
      }
    }, t.prototype.count = function() {
      var e = Qa(this._mapper);
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
        return this.getRawOrdinalNumber(dr(this._mapper.scale(e)));
      },
      transformIn: function(e, i) {
        return this._mapper.transformIn(this._getTickNumber(e), i);
      },
      transformOut: function(e, i) {
        return this.getRawOrdinalNumber(this._mapper.transformOut(e, i));
      },
      getExtent: function() {
        return this._mapper.getExtent();
      },
      getExtentUnsafe: function(e, i) {
        return this._mapper.getExtentUnsafe(e, i);
      },
      /**
       * NOTICE: OrdinalScale extent should always originates from
       * `[0, ordinalMeta.categories.length - 1]`, regardless of min/max of `series.data`.
       * But settings like `xxxAxis.min/max` can still modify the extent.
       * It is handled by constructor of `ScaleRawExtentInfo`.
       */
      setExtent: function(e, i) {
        return this._mapper.setExtent(e, i);
      },
      setExtent2: function(e, i, n) {
        return this._mapper.setExtent2(e, i, n);
      }
    }, t;
  })(Be)
);
Be.registerClass(w1);
function zv(r, t, e, i) {
  for (var n = r.getTicks({
    expandToNicedExtent: !0
  }), a = [], o = r.getExtent(), s = 1; s < n.length; s++) {
    var l = n[s], u = n[s - 1];
    if (!(u.break || l.break)) {
      for (var f = 0, c = [], h = l.value - u.value, v = h / t, d = Bi(v); f < t - 1; ) {
        var p = lt(u.value + (f + 1) * v, d);
        p > o[0] && p < o[1] && c.push(p), f++;
      }
      var m = Jl();
      m && m.pruneTicksByBreak("auto", c, e, function(g) {
        return g;
      }, i, o), a.push(c);
    }
  }
  return a;
}
var yn = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this) || this;
      i.type = "interval", i.parse = t.parse, e = e || {};
      var n = G_(i, e), a = Nv(i, n, null);
      return i.brk = a.brk, i._cfg = {
        interval: 0,
        intervalPrecision: 2,
        intervalCount: void 0,
        niceExtent: void 0
      }, i;
    }
    return t.parse = function(e) {
      return e == null || e === "" ? NaN : Number(e);
    }, t.prototype.getConfig = function() {
      return nt(this._cfg);
    }, t.prototype.setConfig = function(e) {
      var i = Qa(this);
      this._cfg = e = nt(e), e.niceExtent == null && (e.niceExtent = i.slice()), e.intervalPrecision == null && (e.intervalPrecision = Bi(e.interval));
    }, t.prototype.getTicks = function(e) {
      e = e || {};
      var i = this._cfg, n = i.interval, a = Qa(this), o = i.niceExtent, s = i.intervalPrecision, l = Jl(), u = this.brk, f = l, c = [];
      if (!n)
        return c;
      e.breakTicks;
      var h = 3e3;
      a[0] < o[0] && c.push({
        value: e.expandToNicedExtent ? lt(o[0] - n, s) : a[0]
      });
      for (var v = function(_, b) {
        return dr((b - _) / n);
      }, d = i.intervalCount, p = o[0], m = 0; ; m++) {
        if (d == null) {
          if (p > o[1] || !isFinite(p) || !isFinite(o[1]))
            break;
        } else {
          if (m > d)
            break;
          p = Vt(p, o[1]), m === d && (p = o[1]);
        }
        if (c.push({
          value: p
        }), p = lt(p + n, s), u) {
          var g = u.calcNiceTickMultiple(p, v);
          g >= 0 && (p = lt(p + g * n, s));
        }
        if (c.length > 0 && p === c[c.length - 1].value)
          break;
        if (c.length > h)
          return [];
      }
      var y = c.length ? c[c.length - 1].value : o[1];
      return a[1] > y && c.push({
        value: e.expandToNicedExtent ? lt(y + n, s) : a[1]
      }), c;
    }, t.prototype.getMinorTicks = function(e) {
      return zv(this, e, yv(this), this._cfg.interval);
    }, t.prototype.getLabel = function(e, i) {
      if (e == null)
        return "";
      var n = i && i.precision;
      n == null ? n = ur(e.value) || 0 : n === "auto" && (n = this._cfg.intervalPrecision);
      var a = lt(e.value, n, !0);
      return Q_(a);
    }, t.type = "interval", t;
  })(Be)
);
Be.registerClass(yn);
var l2 = function(r, t, e, i) {
  for (; e < i; ) {
    var n = e + i >>> 1;
    r[n][1] < t ? e = n + 1 : i = n;
  }
  return e;
}, x1 = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this) || this;
      i.type = "time", i.parse = t.parse, i._locale = e.locale, i._useUTC = e.useUTC, i._interval = 0;
      var n = G_(i, e), a = Nv(i, n, null);
      return i.brk = a.brk, i;
    }
    return t.prototype.getLabel = function(e) {
      return tu(e.value, Jp[VD(Da(this._minLevelUnit))] || Jp.second, this._useUTC, this._locale);
    }, t.prototype.getFormattedLabel = function(e, i, n) {
      return GD(e, i, n, this._locale, this._useUTC);
    }, t.prototype.getTicks = function(e) {
      var i = this._interval, n = Qa(this), a = this.brk, o = [];
      if (!i)
        return o;
      var s = this._useUTC;
      o = g2(this._minLevelUnit, this._approxInterval, s, n, iu(this), a);
      var l = Di.length - 1, u = 0;
      return M(o, function(f) {
        f.time && (l = Math.min(l, ut(Di, f.time.upperTimeUnit)), u = Math.max(u, f.time.level));
      }), o;
    }, t.prototype.getMinorTicks = function(e) {
      return zv(this, e, yv(this), this._interval);
    }, t.prototype.setTimeInterval = function(e) {
      this._interval = e.interval, this._approxInterval = e.approxInterval, this._minLevelUnit = e.minLevelUnit;
    }, t.parse = function(e) {
      return bt(e) ? Math.round(e) : +Nn(e);
    }, t.type = "time", t;
  })(Be)
), Xo = [
  // Format                           interval
  ["second", _v],
  ["minute", bv],
  ["hour", Aa],
  ["quarter-day", Aa * 6],
  ["half-day", Aa * 12],
  ["day", be * 1.2],
  ["half-week", be * 3.5],
  ["week", be * 7],
  ["month", be * 31],
  ["quarter", be * 95],
  ["half-year", jp / 2],
  ["year", jp]
  // 1Y
];
function u2(r, t, e, i) {
  return Lc(new Date(t), r, i).getTime() === Lc(new Date(e), r, i).getTime();
}
function f2(r, t) {
  return r /= be, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function c2(r) {
  var t = 30 * be;
  return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function h2(r) {
  return r /= Aa, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function pg(r, t) {
  return r /= t ? bv : _v, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
}
function v2(r) {
  return ct(Vh(r, !0), 1);
}
function d2(r, t, e) {
  var i = Math.max(0, ut(Di, t) - 1);
  return Lc(new Date(r), Di[i], e).getTime();
}
function p2(r, t) {
  var e = /* @__PURE__ */ new Date(0);
  e[r](1);
  var i = e.getTime();
  e[r](1 + t);
  var n = e.getTime() - i;
  return function(a, o) {
    return Math.max(0, Math.round((o - a) / n));
  };
}
function g2(r, t, e, i, n, a) {
  var o = 3e3, s = FD, l = 0;
  function u(k, z, R, $, Y, U, q) {
    for (var Q = p2(Y, k), H = z, it = new Date(H); H < R && H <= i[1] && (q.push({
      value: H
    }), !(l++ > o)); )
      if (it[Y](it[$]() + k), H = it.getTime(), a) {
        var ot = a.calcNiceTickMultiple(H, Q);
        ot > 0 && (it[Y](it[$]() + ot * k), H = it.getTime());
      }
    q.push({
      value: H,
      // extent[1] should be added; deduplication will be performed later.
      notAdd: H > i[1]
    });
  }
  function f(k, z, R) {
    var $ = [], Y = !z.length;
    if (!u2(Da(k), i[0], i[1], e)) {
      Y && (z = [{
        value: d2(i[0], k, e)
      }, {
        value: i[1]
      }]);
      for (var U = 0; U < z.length - 1; U++) {
        var q = z[U].value, Q = z[U + 1].value;
        if (q !== Q) {
          var H = void 0, it = void 0, ot = void 0, Ut = !1;
          switch (k) {
            case "year":
              H = Math.max(1, Math.round(t / be / 365)), it = U_(e), ot = UD(e);
              break;
            case "half-year":
            case "quarter":
            case "month":
              H = c2(t), it = Sv(e), ot = W_(e);
              break;
            case "week":
            // PENDING If week is added. Ignore day.
            case "half-week":
            case "day":
              H = f2(t), it = wv(e), ot = Y_(e), Ut = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              H = h2(t), it = xv(e), ot = X_(e);
              break;
            case "minute":
              H = pg(t, !0), it = Tv(e), ot = q_(e);
              break;
            case "second":
              H = pg(t, !1), it = Cv(e), ot = Z_(e);
              break;
            case "millisecond":
              H = v2(t), it = Av(e), ot = K_(e);
              break;
          }
          Q >= i[0] && q <= i[1] && u(H, q, Q, it, ot, Ut, $), k === "year" && R.length > 1 && U === 0 && R.unshift({
            value: R[0].value - H
          });
        }
      }
      for (var U = 0; U < $.length; U++)
        R.push($[U]);
    }
  }
  for (var c = [], h = [], v = 0, d = 0, p = 0; p < s.length; ++p) {
    var m = Da(s[p]);
    if (HD(s[p])) {
      f(s[p], c[c.length - 1] || [], h);
      var g = s[p + 1] ? Da(s[p + 1]) : null;
      if (m !== g) {
        if (h.length) {
          d = v, h.sort(function(k, z) {
            return k.value - z.value;
          });
          for (var y = [], _ = 0; _ < h.length; ++_) {
            var b = h[_].value;
            (_ === 0 || h[_ - 1].value !== b) && (y.push(h[_]), b >= i[0] && b <= i[1] && v++);
          }
          var S = n / t;
          if (v > S * 1.5 && d > S / 1.5 || (c.push(y), v > S || r === s[p]))
            break;
        }
        h = [];
      }
    }
  }
  for (var w = Rt(G(c, function(k) {
    return Rt(k, function(z) {
      return z.value >= i[0] && z.value <= i[1] && !z.notAdd;
    });
  }), function(k) {
    return k.length > 0;
  }), x = w.length - 1, T = [], p = 0; p < w.length; ++p)
    for (var C = w[p], D = 0; D < C.length; ++D) {
      var A = Ls(C[D].value, e);
      T.push({
        value: C[D].value,
        time: {
          level: x - p,
          upperTimeUnit: A,
          lowerTimeUnit: A
        }
      });
    }
  Yh(T, ZT, null), T.sort(function(k, z) {
    return k.value - z.value;
  });
  var L = T[0], I = T[T.length - 1], P = Ls(i[0], e), E = Ls(i[1], e);
  return (!L || L.value > i[0]) && T.unshift({
    value: i[0],
    time: {
      level: 0,
      upperTimeUnit: P,
      lowerTimeUnit: P
    },
    notNice: !0
  }), (!I || I.value < i[1]) && T.push({
    value: i[1],
    time: {
      level: 0,
      upperTimeUnit: E,
      lowerTimeUnit: E
    },
    notNice: !0
  }), T;
}
var m2 = function(r, t) {
  var e = r.getExtent();
  if (e[0] === e[1] && (e[0] -= be, e[1] += be), e[1] === -1 / 0 && e[0] === 1 / 0) {
    var i = /* @__PURE__ */ new Date();
    e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - be;
  }
  r.setExtent(e[0], e[1]);
  var n = Fv(t.splitNumber, 10), a = iu(r) / n, o = t.minInterval, s = t.maxInterval;
  o != null && a < o && (a = o), s != null && a > s && (a = s);
  var l = Xo.length, u = Math.min(l2(Xo, a, 0, l), l - 1), f = Xo[u][1], c = Xo[Math.max(u - 1, 0)][0];
  r.setTimeInterval({
    approxInterval: a,
    interval: f,
    minLevelUnit: c
  });
};
Be.registerClass(x1);
var qo = 0, Zo = 1, T1 = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this) || this;
      i.type = "log", i.parse = yn.parse, i.base = e.logBase || 10;
      var n = [], a = [];
      i._lookup = {
        from: n,
        to: a
      }, n[qo] = n[Zo] = a[qo] = a[Zo] = NaN, m1(i, t.mapperMethods), e.breakOption;
      var o = {};
      return i.powStub = new yn({
        breakParsed: o.original
      }), i.intervalStub = new yn({
        breakParsed: o.transformed
      }), y1(i, i.intervalStub), i;
    }
    return t.prototype.getTicks = function(e) {
      var i = this.base, n = this.powStub, a = this.intervalStub, o = a.getExtent(), s = n.getExtent(), l = {
        lookup: {
          from: o,
          to: s
        }
      };
      return G(a.getTicks(e || {}), function(u) {
        var f = u.value, c = ef(f, i, l), h;
        return {
          value: c,
          break: h
        };
      }, this);
    }, t.prototype.getMinorTicks = function(e) {
      return zv(
        this,
        e,
        yv(this.powStub),
        // NOTE: minor ticks are in the log scale value to visually hint users "logarithm".
        this.intervalStub.getConfig().interval
      );
    }, t.prototype.getLabel = function(e, i) {
      return this.intervalStub.getLabel(e, i);
    }, t.type = "log", t.mapperMethods = {
      needTransform: function() {
        return !0;
      },
      normalize: function(e) {
        return this.intervalStub.normalize(Yo(e, this.base));
      },
      scale: function(e) {
        return ef(this.intervalStub.scale(e), this.base, null);
      },
      transformIn: function(e, i) {
        return e = Yo(e, this.base), i && i.depth === nl ? e : this.intervalStub.transformIn(e, i);
      },
      transformOut: function(e, i) {
        var n = i ? i.depth : null;
        return gg.depth = n, mg.lookup = this._lookup, ef(n === nl ? e : this.intervalStub.transformOut(e, gg), this.base, mg);
      },
      contain: function(e) {
        return this.powStub.contain(e);
      },
      /**
       * NOTICE: The caller should ensure `start` and `end` are both non-negative.
       */
      setExtent: function(e, i) {
        this.setExtent2(Se, e, i);
      },
      setExtent2: function(e, i, n) {
        if (!(!Cn(i, n) || i <= 0 || n <= 0)) {
          var a = yg, o = yg;
          if (e === Se) {
            var s = this._lookup;
            a = s.to, o = s.from;
          }
          this.powStub.setExtent2(e, a[qo] = i, a[Zo] = n);
          var l = this.base;
          this.intervalStub.setExtent2(e, o[qo] = Yo(i, l), o[Zo] = Yo(n, l));
        }
      },
      getFilter: function() {
        return {
          g: 0
        };
      },
      sanitize: function(e, i) {
        return Cn(i[0], i[1]) && Te(e) && e <= 0 && (e = i[0]), e;
      },
      getDefaultStartValue: function() {
        return 1;
      },
      getExtent: function() {
        return this.powStub.getExtent();
      },
      getExtentUnsafe: function(e, i) {
        return i === null ? this.powStub.getExtentUnsafe(e, null) : this.intervalStub.getExtentUnsafe(e, i);
      }
    }, t;
  })(Be)
);
Be.registerClass(T1);
var gg = {}, mg = {}, yg = [], C1 = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
}, A1 = ht();
function y2(r) {
  var t = r.get("type");
  return (
    // In ec option, `xxxAxis.type` may be undefined.
    (t == null || !qt(C1, t) && !Be.getClass(t)) && (t = "value"), t
  );
}
function _2(r, t, e) {
  var i;
  switch (t) {
    case "category":
      return new w1({
        ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
        extent: ye()
      });
    case "time":
      return new x1({
        locale: r.ecModel.getLocaleModel(),
        useUTC: r.ecModel.get("useUTC"),
        breakOption: i
      });
    case "log":
      return new T1({
        logBase: r.get("logBase"),
        breakOption: i
      });
    case "value":
      return new yn({
        breakOption: i
      });
    default:
      return new (Be.getClass(t) || yn)({});
  }
}
function b2(r, t, e) {
  var i = r.getExtentUnsafe(Se, null), n = i[0], a = i[1];
  return Cn(n, a) ? n === t || a === t ? w2 : n < t && a > t ? S2 : Fc : Fc;
}
var S2 = 1, w2 = 2, Fc = 3;
function x2(r) {
  A1(r).noOnMyZero = !0;
}
function T2(r) {
  return A1(r).noOnMyZero;
}
function nu(r) {
  var t = r.getLabelModel().get("formatter");
  if (r.type === "time") {
    var e = zD(t);
    return function(n, a) {
      return r.scale.getFormattedLabel(n, a, e);
    };
  } else {
    if (W(t))
      return function(n) {
        var a = r.scale.getLabel(n), o = t.replace("{value}", a ?? "");
        return o;
      };
    if (Z(t)) {
      if (r.type === "category")
        return function(n, a) {
          return t(
            sl(r, n),
            n.value - r.scale.getExtent()[0],
            null
            // Using `null` just for backward compat.
          );
        };
      var i = Jl();
      return function(n, a) {
        var o = null;
        return i && (o = i.makeAxisLabelFormatterParamBreak(o, n.break)), t(sl(r, n), a, o);
      };
    } else
      return function(n) {
        return r.scale.getLabel(n);
      };
  }
}
function sl(r, t) {
  var e = r.scale;
  return Fe(e) ? e.getLabel(t) : t.value;
}
function $v(r) {
  var t = r.get("interval");
  return t ?? "auto";
}
function C2(r) {
  return r.type === "category" && $v(r.getLabelModel()) === 0;
}
function A2(r, t) {
  var e = {};
  return M(r.mapDimensionsAll(t), function(i) {
    e[F_(r, i)] = !0;
  }), Tt(e);
}
function Ln(r) {
  return r === "middle" || r === "center";
}
function ja(r) {
  return r.getShallow("show");
}
function D2(r, t, e) {
  var i = r.get("breaks", !0);
  i == null;
}
function D1(r, t, e, i, n, a) {
  var o = In(r), s = o ? r.intervalStub : r;
  if (s.setExtent(i[0], i[1]), o) {
    var l = r.powStub, u = {
      depth: nl
    }, f = r.transformOut(i[0], u), c = r.transformOut(i[1], u), h = s2(e, i);
    t[0] && !h[0] && (f = n[0]), t[1] && !h[1] && (c = n[1]), l.setExtent(f, c);
  }
  s.setConfig(a);
}
function mo(r, t) {
  return Fe(r) ? r.getRawOrdinalNumber(t.value) : t.value;
}
function M1(r, t) {
  return Fe(r) && !!t.get("boundaryGap");
}
function _g(r, t) {
  if (r.length === t.length) {
    for (var e = 0; e < r.length; e++)
      if (r[e] !== t[e])
        return;
    return !0;
  }
}
function bg(r) {
  for (var t = ye(), e = ye(), i = 0; i < r.length; ) {
    var n = r[i++], a = r[i++];
    xe(n, a) || (gc(t, n), gc(e, a));
  }
  return [t, e];
}
function Sg(r, t) {
  var e = bg(r), i = e[0], n = e[1], a = bg(t), o = a[0], s = a[1];
  return Math.max(Math.abs(i[0] - o[0]), Math.abs(n[0] - s[0]), Math.abs(i[1] - o[1]), Math.abs(n[1] - s[1]));
}
function wg(r) {
  return bt(r) ? r : r ? 0.5 : 0;
}
function M2(r, t, e) {
  if (e.valueDim == null)
    return [];
  for (var i = t.count(), n = fr(i * 2), a = 0; a < i; a++) {
    var o = c1(e, r, t, a);
    n[a * 2] = o[0], n[a * 2 + 1] = o[1];
  }
  return n;
}
function Ar(r, t, e, i, n) {
  var a = e.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], l = 0, u = [], f = [], c = [], h = [];
  if (n) {
    for (l = 0; l < r.length; l += 2) {
      var v = t || r;
      xe(v[l], v[l + 1]) || h.push(r[l], r[l + 1]);
    }
    r = h;
  }
  for (l = 0; l < r.length - 2; l += 2)
    switch (c[0] = r[l + 2], c[1] = r[l + 3], f[0] = r[l], f[1] = r[l + 1], s.push(f[0], f[1]), i) {
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
function I2(r, t) {
  var e = [], i = r.length, n, a;
  function o(f, c, h) {
    var v = f.coord, d = (h - v) / (c.coord - v), p = Tx(d, [f.color, c.color]);
    return {
      coord: h,
      color: p
    };
  }
  for (var s = 0; s < i; s++) {
    var l = r[s], u = l.coord;
    if (u < 0)
      n = l;
    else if (u > t) {
      a ? e.push(o(a, l, t)) : n && e.push(o(n, l, 0), o(n, l, t));
      break;
    } else
      n && (e.push(o(n, l, 0)), n = null), e.push(l), a = l;
  }
  return e;
}
function L2(r, t, e) {
  var i = r.getVisual("visualMeta");
  if (!(!i || !i.length || !r.count()) && t.type === "cartesian2d") {
    for (var n, a, o = i.length - 1; o >= 0; o--) {
      var s = r.getDimensionInfo(i[o].dimension);
      if (n = s && s.coordDim, n === "x" || n === "y") {
        a = i[o];
        break;
      }
    }
    if (a) {
      var l = t.getAxis(n), u = G(a.stops, function(_) {
        return {
          coord: l.toGlobalCoord(l.dataToCoord(_.value)),
          color: _.color
        };
      }), f = u.length, c = a.outerColors.slice();
      f && u[0].coord > u[f - 1].coord && (u.reverse(), c.reverse());
      var h = I2(u, n === "x" ? e.getWidth() : e.getHeight()), v = h.length;
      if (!v && f)
        return u[0].coord < 0 ? c[1] ? c[1] : u[f - 1].color : c[0] ? c[0] : u[0].color;
      var d = 10, p = h[0].coord - d, m = h[v - 1].coord + d, g = m - p;
      if (g < 1e-3)
        return "transparent";
      M(h, function(_) {
        _.offset = (_.coord - p) / g;
      }), h.push({
        // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
        offset: v ? h[v - 1].offset : 0.5,
        color: c[1] || "transparent"
      }), h.unshift({
        offset: v ? h[0].offset : 0.5,
        color: c[0] || "transparent"
      });
      var y = new a_(0, 0, 0, 0, h, !0);
      return y[n] = p, y[n + "2"] = m, y;
    }
  }
}
function P2(r, t, e) {
  var i = r.get("showAllSymbol"), n = i === "auto";
  if (!(i && !n)) {
    var a = e.getAxesByScale("ordinal")[0];
    if (a && !(n && E2(a, t))) {
      var o = t.mapDimension(a.dim), s = {};
      return M(a.getViewLabels(), function(l) {
        l.tick.offInterval || (s[mo(a.scale, l.tick)] = 1);
      }), function(l) {
        return !s.hasOwnProperty(t.get(o, l));
      };
    }
  }
}
function E2(r, t) {
  var e = r.getExtent(), i = Math.abs(e[1] - e[0]) / r.scale.count();
  isNaN(i) && (i = 0);
  for (var n = t.count(), a = Math.max(1, Math.round(n / 5)), o = 0; o < n; o += a)
    if (kv.getSymbolSize(
      t,
      o
      // Only for cartesian, where `isHorizontal` exists.
    )[r.isHorizontal() ? 1 : 0] * 1.5 > i)
      return !1;
  return !0;
}
function k2(r) {
  for (var t = r.length / 2; t > 0 && xe(r[t * 2 - 2], r[t * 2 - 1]); t--)
    ;
  return t - 1;
}
function xg(r, t) {
  return [r[t * 2], r[t * 2 + 1]];
}
function R2(r, t, e) {
  for (var i = r.length / 2, n = e === "x" ? 0 : 1, a, o, s = 0, l = -1, u = 0; u < i; u++)
    if (o = r[u * 2 + n], !xe(o, r[u * 2 + 1 - n])) {
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
function I1(r) {
  if (r.get(["endLabel", "show"]))
    return !0;
  for (var t = 0; t < Ce.length; t++)
    if (r.get([Ce[t], "endLabel", "show"]))
      return !0;
  return !1;
}
function rf(r, t, e, i) {
  if (go(t, "cartesian2d")) {
    var n = i.getModel("endLabel"), a = n.get("valueAnimation"), o = i.getData(), s = {
      lastFrameIndex: 0
    }, l = I1(i) ? function(v, d) {
      r._endLabelOnDuring(v, d, o, s, a, n, t);
    } : null, u = t.getBaseAxis().isHorizontal(), f = d1(t, e, i, function() {
      var v = r._endLabel;
      v && e && s.originalX != null && v.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, l);
    if (!i.get("clip", !0)) {
      var c = f.shape, h = Math.max(c.width, c.height);
      u ? (c.y -= h, c.height += h * 2) : (c.x -= h, c.width += h * 2);
    }
    return l && l(1, f), f;
  } else
    return p1(t, e, i);
}
function O2(r, t) {
  var e = t.getBaseAxis(), i = e.isHorizontal(), n = e.inverse, a = i ? n ? "right" : "left" : "center", o = i ? "middle" : n ? "top" : "bottom";
  return {
    normal: {
      align: r.get("align") || a,
      verticalAlign: r.get("verticalAlign") || o
    }
  };
}
var N2 = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function() {
      var e = new Lt(), i = new u1();
      this.group.add(i.group), this._symbolDraw = i, this._lineGroup = e, this._changePolyState = xt(this._changePolyState, this);
    }, t.prototype.render = function(e, i, n) {
      var a = e.coordinateSystem, o = this.group, s = e.getData(), l = e.getModel("lineStyle"), u = e.getModel("areaStyle"), f = s.getLayout("points") || [], c = a.type === "polar", h = this._coordSys, v = this._symbolDraw, d = this._polyline, p = this._polygon, m = this._lineGroup, g = !i.ssr && e.get("animation"), y = !u.isEmpty(), _ = u.get("origin"), b = f1(a, s, _), S = y && M2(a, s, b), w = e.get("showSymbol"), x = e.get("connectNulls"), T = w && !c && P2(e, s, a), C = this._data;
      C && C.eachItemGraphicEl(function(wt, kt) {
        wt.__temp && (o.remove(wt), C.setItemGraphicEl(kt, null));
      }), w || v.remove(), o.add(m);
      var D = c ? !1 : e.get("step"), A;
      a && a.getArea && e.get("clip", !0) && (A = a.getArea(), A.width != null ? (A.x -= 0.1, A.y -= 0.1, A.width += 0.2, A.height += 0.2) : A.r0 && (A.r0 -= 0.5, A.r += 0.5)), this._clipShapeForSymbol = A;
      var L = L2(s, a, n) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(d && h.type === a.type && D === this._step))
        w && v.updateData(s, {
          isIgnore: T,
          clipShape: A,
          disableAnimation: !0,
          getSymbolPoint: function(wt) {
            return [f[wt * 2], f[wt * 2 + 1]];
          }
        }), g && this._initSymbolLabelAnimation(s, a, A), D && (S && (S = Ar(S, f, a, D, x)), f = Ar(f, null, a, D, x)), d = this._newPolyline(f), y ? p = this._newPolygon(f, S) : p && (m.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(e, a, Ri(L)), m.setClipPath(rf(this, a, !0, e));
      else {
        y && !p ? p = this._newPolygon(f, S) : p && !y && (m.remove(p), p = this._polygon = null), c || this._initOrUpdateEndLabel(e, a, Ri(L));
        var I = m.getClipPath();
        if (I) {
          var P = rf(this, a, !1, e);
          je(I, {
            shape: P.shape
          }, e);
        } else
          m.setClipPath(rf(this, a, !0, e));
        w && v.updateData(s, {
          isIgnore: T,
          clipShape: A,
          disableAnimation: !0,
          getSymbolPoint: function(wt) {
            return [f[wt * 2], f[wt * 2 + 1]];
          }
        }), (!_g(this._stackedOnPoints, S) || !_g(this._points, f)) && (g ? this._doUpdateAnimation(s, S, a, n, D, _, x) : (D && (S && (S = Ar(S, f, a, D, x)), f = Ar(f, null, a, D, x)), d.setShape({
          points: f
        }), p && p.setShape({
          points: f,
          stackedOnPoints: S
        })));
      }
      var E = e.getModel("emphasis"), k = E.get("focus"), z = E.get("blurScope"), R = E.get("disabled");
      if (d.useStyle(yt(
        // Use color in lineStyle first
        l.getLineStyle(),
        {
          fill: "none",
          stroke: L,
          lineJoin: "bevel"
        }
      )), js(d, e, "lineStyle"), d.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var $ = d.getState("emphasis").style;
        $.lineWidth = +d.style.lineWidth + 1;
      }
      at(d).seriesIndex = e.seriesIndex, An(d, k, z, R);
      var Y = wg(e.get("smooth")), U = e.get("smoothMonotone");
      if (d.setShape({
        smooth: Y,
        smoothMonotone: U,
        connectNulls: x
      }), p) {
        var q = s.getCalculationInfo("stackedOnSeries"), Q = 0;
        p.useStyle(yt(u.getAreaStyle(), {
          fill: L,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), q && (Q = wg(q.get("smooth"))), p.setShape({
          smooth: Y,
          stackedOnSmooth: Q,
          smoothMonotone: U,
          connectNulls: x
        }), js(p, e, "areaStyle"), at(p).seriesIndex = e.seriesIndex, An(p, k, z, R);
      }
      var H = this._changePolyState;
      s.eachItemGraphicEl(function(wt) {
        wt && (wt.onHoverStateChange = H);
      }), this._polyline.onHoverStateChange = H, this._data = s, this._coordSys = a, this._stackedOnPoints = S, this._points = f, this._step = D, this._valueOrigin = _;
      var it = e.get("triggerEvent"), ot = e.get("triggerLineEvent"), Ut = ot === !0 || it === !0 || it === "line", Ae = ot === !0 || it === !0 || it === "area";
      this.packEventData(e, d, Ut), p && this.packEventData(e, p, Ae);
    }, t.prototype.packEventData = function(e, i, n) {
      at(i).eventData = n ? {
        componentType: "series",
        componentSubType: "line",
        componentIndex: e.componentIndex,
        seriesIndex: e.seriesIndex,
        seriesName: e.name,
        seriesType: "line",
        // for determining this event is triggered by area or line
        selfType: i === this._polygon ? "area" : "line"
      } : null;
    }, t.prototype.highlight = function(e, i, n, a) {
      var o = e.getData(), s = Ei(o, a);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var l = o.getLayout("points"), u = o.getItemGraphicEl(s);
        if (!u) {
          var f = l[s * 2], c = l[s * 2 + 1];
          if (xe(f, c) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, c))
            return;
          var h = e.get("zlevel") || 0, v = e.get("z") || 0;
          u = new kv(o, s), u.x = f, u.y = c, u.setZ(h, v);
          var d = u.getSymbolPath().getTextContent();
          d && (d.zlevel = h, d.z = v, d.z2 = this._polyline.z2 + 1), u.__temp = !0, o.setItemGraphicEl(s, u), u.stopSymbolAnimation(!0), this.group.add(u);
        }
        u.highlight();
      } else
        Pe.prototype.highlight.call(this, e, i, n, a);
    }, t.prototype.downplay = function(e, i, n, a) {
      var o = e.getData(), s = Ei(o, a);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var l = o.getItemGraphicEl(s);
        l && (l.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(l)) : l.downplay());
      } else
        Pe.prototype.downplay.call(this, e, i, n, a);
    }, t.prototype._changePolyState = function(e) {
      var i = this._polygon;
      _p(this._polyline, e), i && _p(i, e);
    }, t.prototype._newPolyline = function(e) {
      var i = this._polyline;
      return i && this._lineGroup.remove(i), i = new WM({
        shape: {
          points: e
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(i), this._polyline = i, i;
    }, t.prototype._newPolygon = function(e, i) {
      var n = this._polygon;
      return n && this._lineGroup.remove(n), n = new XM({
        shape: {
          points: e,
          stackedOnPoints: i
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(n), this._polygon = n, n;
    }, t.prototype._initSymbolLabelAnimation = function(e, i, n) {
      var a, o, s = i.getBaseAxis(), l = s.inverse;
      i.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : i.type === "polar" && (a = s.dim === "angle", o = !0);
      var u = e.hostModel, f = u.get("animationDuration");
      Z(f) && (f = f(null));
      var c = u.get("animationDelay") || 0, h = Z(c) ? c(null) : c;
      e.eachItemGraphicEl(function(v, d) {
        var p = v;
        if (p) {
          var m = [v.x, v.y], g = void 0, y = void 0, _ = void 0;
          if (n)
            if (o) {
              var b = n, S = i.pointToCoord(m);
              a ? (g = b.startAngle, y = b.endAngle, _ = -S[1] / 180 * Math.PI) : (g = b.r0, y = b.r, _ = S[0]);
            } else {
              var w = n;
              a ? (g = w.x, y = w.x + w.width, _ = v.x) : (g = w.y + w.height, y = w.y, _ = v.y);
            }
          var x = y === g ? 0 : (_ - g) / (y - g);
          l && (x = 1 - x);
          var T = Z(c) ? c(d) : f * x + h, C = p.getSymbolPath(), D = C.getTextContent();
          p.attr({
            scaleX: 0,
            scaleY: 0
          }), p.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: T
          }), D && D.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: T
          }), C.disableLabelAnimation = !0;
        }
      });
    }, t.prototype._initOrUpdateEndLabel = function(e, i, n) {
      var a = e.getModel("endLabel");
      if (I1(e)) {
        var o = e.getData(), s = this._polyline, l = o.getLayout("points");
        if (!l) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var u = this._endLabel;
        u || (u = this._endLabel = new ne({
          z2: 200
          // should be higher than item symbol
        }), u.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var f = k2(l);
        f >= 0 && (zn(s, zi(e, "endLabel"), {
          inheritColor: n,
          labelFetcher: e,
          labelDataIndex: f,
          defaultText: function(c, h, v) {
            return v != null ? l1(o, v) : Ev(o, c);
          },
          enableTextSetter: !0
        }, O2(a, i)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, t.prototype._endLabelOnDuring = function(e, i, n, a, o, s, l) {
      var u = this._endLabel, f = this._polyline;
      if (u) {
        e < 1 && a.originalX == null && (a.originalX = u.x, a.originalY = u.y);
        var c = n.getLayout("points"), h = n.hostModel, v = h.get("connectNulls"), d = s.get("precision"), p = s.get("distance") || 0, m = l.getBaseAxis(), g = m.isHorizontal(), y = m.inverse, _ = i.shape, b = y ? g ? _.x : _.y + _.height : g ? _.x + _.width : _.y, S = (g ? p : 0) * (y ? -1 : 1), w = (g ? 0 : -p) * (y ? -1 : 1), x = g ? "x" : "y", T = R2(c, b, x), C = T.range, D = C[1] - C[0], A = void 0;
        if (D >= 1) {
          if (D > 1 && !v) {
            var L = xg(c, C[0]);
            u.attr({
              x: L[0] + S,
              y: L[1] + w
            }), o && (A = h.getRawValue(C[0]));
          } else {
            var L = f.getPointOn(b, x);
            L && u.attr({
              x: L[0] + S,
              y: L[1] + w
            });
            var I = h.getRawValue(C[0]), P = h.getRawValue(C[1]);
            o && (A = UT(n, d, I, P, T.t));
          }
          a.lastFrameIndex = C[0];
        } else {
          var E = e === 1 || a.lastFrameIndex > 0 ? C[0] : 0, L = xg(c, E);
          o && (A = h.getRawValue(E)), u.attr({
            x: L[0] + S,
            y: L[1] + w
          });
        }
        if (o) {
          var k = Kl(u);
          typeof k.setLabelText == "function" && k.setLabelText(A);
        }
      }
    }, t.prototype._doUpdateAnimation = function(e, i, n, a, o, s, l) {
      var u = this._polyline, f = this._polygon, c = e.hostModel, h = UM(this._data, e, this._stackedOnPoints, i, this._coordSys, n, this._valueOrigin), v = h.current, d = h.stackedOnCurrent, p = h.next, m = h.stackedOnNext;
      if (o && (d = Ar(h.stackedOnCurrent, h.current, n, o, l), v = Ar(h.current, null, n, o, l), m = Ar(h.stackedOnNext, h.next, n, o, l), p = Ar(h.next, null, n, o, l)), Sg(v, p) > 3e3 || f && Sg(d, m) > 3e3) {
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
      h.current !== v && (g.shape.__points = h.next), u.stopAnimation(), Kt(u, g, c), f && (f.setShape({
        // Reuse the points with polyline.
        points: v,
        stackedOnPoints: d
      }), f.stopAnimation(), Kt(f, {
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
        for (var x = u.shape.__points, T = 0; T < y.length; T++) {
          var C = y[T].el, D = y[T].ptIdx * 2;
          C.x = x[D], C.y = x[D + 1], C.markRedraw();
        }
      });
    }, t.prototype.remove = function(e) {
      var i = this.group, n = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function(a, o) {
        a.__temp && (i.remove(a), n.setItemGraphicEl(o, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, t.type = "line", t;
  })(Pe)
);
function B2(r, t) {
  return {
    seriesType: r,
    plan: Ov(),
    reset: function(e) {
      var i = e.getData(), n = e.coordinateSystem;
      if (e.pipelineContext, !!n) {
        var a = G(n.dimensions, function(c) {
          return i.mapDimension(c);
        }).slice(0, 2), o = a.length, s = i.getCalculationInfo("stackResultDimension");
        ki(i, a[0]) && (a[0] = s), ki(i, a[1]) && (a[1] = s);
        var l = i.getStore(), u = i.getDimensionIndex(a[0]), f = i.getDimensionIndex(a[1]);
        return o && {
          progress: function(c, h) {
            for (var v = c.end - c.start, d = fr(v * o), p = [], m = [], g = c.start, y = 0; g < c.end; g++) {
              var _ = void 0;
              if (o === 1) {
                var b = l.get(u, g);
                _ = n.dataToPoint(b, null, m);
              } else
                p[0] = l.get(u, g), p[1] = l.get(f, g), _ = n.dataToPoint(p, null, m);
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
var F2 = {
  average: function(r) {
    for (var t = 0, e = 0, i = 0; i < r.length; i++)
      isNaN(r[i]) || (t += r[i], e++);
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
}, z2 = function(r) {
  return Math.round(r.length / 2);
};
function L1(r) {
  return {
    seriesType: r,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(t, e, i) {
      var n = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = n.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var l = o.getBaseAxis(), u = o.getOtherAxis(l), f = l.getExtent(), c = i.getDevicePixelRatio(), h = Math.abs(f[1] - f[0]) * (c || 1), v = Math.round(s / h);
        if (isFinite(v) && v > 1) {
          a === "lttb" ? t.setData(n.lttbDownSample(n.mapDimension(u.dim), 1 / v)) : a === "minmax" && t.setData(n.minmaxDownSample(n.mapDimension(u.dim), 1 / v));
          var d = void 0;
          W(a) ? d = F2[a] : Z(a) && (d = a), d && t.setData(n.downSample(n.mapDimension(u.dim), 1 / v, d, z2));
        }
      }
    }
  };
}
function P1(r) {
  r.registerChartView(N2), r.registerSeriesModel(FM), r.registerLayout(B2("line")), r.registerVisual({
    seriesType: "line",
    reset: function(t) {
      var e = t.getData(), i = t.getModel("lineStyle").getLineStyle();
      i && !i.stroke && (i.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", i);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, L1("line"));
}
var $2 = ht(), La = ht(), Ee = {
  estimate: 1,
  determine: 2
};
function ll(r) {
  return {
    out: {
      noPxChangeTryDetermine: []
    },
    kind: r
  };
}
function H2(r, t) {
  var e = r.getLabelModel().get("customValues");
  if (e) {
    var i = r.scale;
    return {
      labels: G(E1(e, i), function(n, a) {
        return {
          formattedLabel: nu(r)(n, a),
          rawLabel: i.getLabel(n),
          tick: n
        };
      })
    };
  }
  return r.type === "category" ? G2(r, t) : W2(r);
}
function V2(r, t, e) {
  var i = r.scale, n = r.getTickModel().get("customValues");
  return n ? {
    ticks: E1(n, i)
  } : r.type === "category" ? U2(r, t) : {
    ticks: i.getTicks(e)
  };
}
function E1(r, t) {
  var e = t.getExtent(), i = [];
  return M(r, function(n) {
    n = t.parse(n), n >= e[0] && n <= e[1] && i.push(n);
  }), Yh(i, KT, null), $a(i), G(i, function(n) {
    return {
      value: n
    };
  });
}
function G2(r, t) {
  var e = r.getLabelModel(), i = k1(r, e, t);
  return !e.get("show") || r.scale.isBlank() ? {
    labels: []
  } : i;
}
function k1(r, t, e) {
  var i = X2(r), n = $v(t), a = e.kind === Ee.estimate;
  if (!a) {
    var o = O1(i, n);
    if (o)
      return o;
  }
  var s, l;
  Z(n) ? s = ul(r, n, !1) : (l = n === "auto" ? q2(r, e) : n, s = ul(r, l, !1));
  var u = {
    labels: s,
    labelCategoryInterval: l
  };
  return a ? e.out.noPxChangeTryDetermine.push(function() {
    return zc(i, n, u), !0;
  }) : zc(i, n, u), u;
}
function U2(r, t) {
  var e = Y2(r), i = $v(t), n = O1(e, i);
  if (n)
    return n;
  var a, o;
  if ((!t.get("show") || r.scale.isBlank()) && (a = []), Z(i))
    a = ul(r, i, !0);
  else if (i === "auto") {
    var s = k1(r, r.getLabelModel(), ll(Ee.determine));
    o = s.labelCategoryInterval, a = G(s.labels, function(l) {
      return l.tick;
    });
  } else
    o = i, a = ul(r, o, !0);
  return zc(e, i, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function W2(r) {
  var t = r.scale.getTicks(), e = nu(r);
  return {
    labels: G(t, function(i, n) {
      return {
        formattedLabel: e(i, n),
        rawLabel: r.scale.getLabel(i),
        tick: i
      };
    })
  };
}
var Y2 = R1("axisTick"), X2 = R1("axisLabel");
function R1(r) {
  return function(e) {
    return La(e)[r] || (La(e)[r] = {
      list: []
    });
  };
}
function O1(r, t) {
  for (var e = 0; e < r.list.length; e++)
    if (r.list[e].key === t)
      return r.list[e].value;
}
function zc(r, t, e) {
  return r.list.push({
    key: t,
    value: e
  }), e;
}
function q2(r, t) {
  if (t.kind === Ee.estimate) {
    var e = r.calculateCategoryInterval(t);
    return t.out.noPxChangeTryDetermine.push(function() {
      return La(r).autoInterval = e, !0;
    }), e;
  }
  var i = La(r).autoInterval;
  return i ?? (La(r).autoInterval = r.calculateCategoryInterval(t));
}
function Z2(r, t) {
  var e = t.kind, i = Q2(r), n = nu(r), a = (i.axisRotate - i.labelRotate) / 180 * Math.PI, o = r.scale, s = o.getExtent(), l = o.count();
  if (s[1] - s[0] < 1)
    return 0;
  var u = 1, f = 40;
  l > f && (u = Math.max(1, Math.floor(l / f)));
  for (var c = s[0], h = r.dataToCoord(c + 1) - r.dataToCoord(c), v = Math.abs(h * Math.cos(a)), d = Math.abs(h * Math.sin(a)), p = 0, m = 0; c <= s[1]; c += u) {
    var g = 0, y = 0, _ = l0(n({
      value: c
    }), i.font, "center", "top");
    g = _.width * 1.3, y = _.height * 1.3, p = Math.max(p, g, 7), m = Math.max(m, y, 7);
  }
  var b = p / v, S = m / d;
  isNaN(b) && (b = 1 / 0), isNaN(S) && (S = 1 / 0);
  var w = Math.max(0, Math.floor(Math.min(b, S)));
  if (e === Ee.estimate)
    return t.out.noPxChangeTryDetermine.push(xt(K2, null, r, w, l)), w;
  var x = N1(r, w, l);
  return x ?? w;
}
function K2(r, t, e) {
  return N1(r, t, e) == null;
}
function N1(r, t, e) {
  var i = $2(r.model), n = r.getExtent(), a = i.lastAutoInterval, o = i.lastTickCount;
  if (a != null && o != null && Math.abs(a - t) <= 1 && Math.abs(o - e) <= 1 && a > t && i.axisExtent0 === n[0] && i.axisExtent1 === n[1])
    return a;
  i.lastTickCount = e, i.lastAutoInterval = t, i.axisExtent0 = n[0], i.axisExtent1 = n[1];
}
function Q2(r) {
  var t = r.getLabelModel();
  return {
    axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function ul(r, t, e) {
  var i = nu(r), n = r.scale, a = [], o = Z(t);
  return S1(n, o ? 0 : t, function(s, l) {
    var u = n.getLabel(s);
    if (o) {
      var f = !!t(s.value, u);
      if (s.offInterval = !f, !f && !l)
        return;
    }
    a.push(e ? s : {
      formattedLabel: i(s),
      rawLabel: u,
      tick: s
    });
  }), a;
}
var au = ht();
function j2(r) {
  au(r).prepare = {};
}
function J2(r) {
  au(r).fullUpdate = {};
}
function tI(r) {
  return au(r).prepare;
}
function $n(r) {
  return au(r).fullUpdate;
}
var eI = B0(), $c = "|&", Hn = ht(), B1 = -2, rI = -1, iI = ht();
function F1(r, t) {
  var e = r.model, i = Hn($n(e.ecModel)).keyed, n = i && i.get(t);
  return n && n.get(e.uid);
}
function nI(r, t) {
  return $1(F1(r, t));
}
function aI(r, t) {
  var e = [];
  return z1(r.model.ecModel, function(i) {
    for (var n = 0; n < t.length; n++)
      t[n] && i.serByIdx[t[n].seriesIndex] && e.push($1(i));
  }), e;
}
function z1(r, t) {
  var e = Hn($n(r)).keyed;
  e && e.each(function(i, n) {
    i.each(function(a, o) {
      t(a, n, o);
    });
  });
}
function $1(r) {
  return {
    liPosMinGap: r ? r.liPosMinGap : void 0
  };
}
function oI(r, t) {
  var e = r.model.ecModel, i = Hn($n(e)).axSer;
  i && Hv(e, i.get(r.model.uid), t);
}
function H1(r, t, e) {
  var i = F1(r, t);
  i && Hv(r.model.ecModel, i.sers, e);
}
function Hv(r, t, e) {
  if (t)
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      r.isSeriesFiltered(n) || e(n);
    }
}
function sI(r, t, e) {
  var i = Hn($n(r)).keyed, n = i && i.get(t);
  n && n.each(function(a) {
    e(a.axis);
  });
}
function V1(r, t) {
  var e = r.model, i = Hn($n(e.ecModel)).keys;
  i && M(i.get(e.uid), function(n) {
    t(n);
  });
}
function lI(r) {
  var t = iI(tI(r)), e = t.keyed || (t.keyed = j());
  z1(r, function(i, n, a) {
    var o = e.get(n) || e.set(n, j()), s = o.get(a) || o.set(a, {});
    i.metrics.liPosMinGap && G1.liPosMinGap(r, i, s);
  });
}
function uI(r, t) {
  G1[r] = t;
}
var G1 = {};
function Tg(r, t, e) {
  if (r) {
    var i = t.ecModel, n = Hn($n(i)), a = r.model.uid, o = n.axSer || (n.axSer = j()), s = o.get(a) || o.set(a, []);
    s.push(t);
    var l = t.subType, u = t.getBaseAxis() === r, f = Vc.get(Hc(l, u, e)) || Vc.get(Hc(l, u, null));
    if (f) {
      var c = n.keyed || (n.keyed = j()), h = n.keys || (n.keys = j()), v = f.key, d = c.get(v) || c.set(v, j()), p = d.get(a);
      p || (p = d.set(a, {
        axis: r,
        sers: [],
        serByIdx: []
      }), p.metrics = f.getMetrics(r), (h.get(a) || h.set(a, [])).push(v)), p.sers.push(t), p.serByIdx[t.seriesIndex] = t;
    }
  }
}
function Hc(r, t, e) {
  return r + $c + V(t, !0) + $c + (e || "");
}
function fI(r, t) {
  var e = Hc(t.seriesType, t.baseAxis, t.coordSysType);
  Vc.set(e, t), eI(r, function() {
    r.registerProcessor(r.PRIORITY.PROCESSOR.AXIS_STATISTICS, {
      // NOTE: Theoretically, `appendData` requires `dirtyOnOverallProgress: true` here to re-calculate them.
      // But this OVERALL_STAGE_TASK is applied to all series (no `getTargetSeries` specified),
      // `dirtyOnOverallProgress: true` can cause irrelevant series (e.g., series on geo)
      // to be re-rendered when `appendData` is called, which cause `appendData` meaningless,
      // thereby not setting `dirtyOnOverallProgress: true`.
      overallReset: lI
    });
  });
}
var Vc = j(), cI = 0.8;
function Vn(r, t) {
  t = t || {};
  var e = {
    w: NaN,
    w2: NaN
  }, i = r.scale, n = t.fromStat, a = t.min, o = i2(i);
  Te(o) || (o = NaN);
  var s = r.getExtent(), l = Et(s[1] - s[0]);
  return Fe(i) ? hI(e, r, o, l) : n && vI(e, r, o, l, n), a != null && (e.w = Te(e.w) ? ct(a, e.w) : a), e;
}
function hI(r, t, e, i) {
  var n = t.onBand, a = e + (n ? 1 : 0);
  a === 0 && (a = 1), r.w = i / a, !n && e && i && (r.w2 = r.w * e / i);
}
function vI(r, t, e, i, n) {
  var a = !1, o = -1 / 0;
  M(n.key ? [nI(t, n.key)] : aI(t, n.sers || []), function(s) {
    var l = s.liPosMinGap;
    l != null && (l > 0 ? (l > o && (o = l), a = !1) : l === B1 && (a = !0));
  }), Te(e) && e > 0 && Te(o) ? (r.w = i / e * o, r.w2 = o) : a && (r.w = i * cI, r.w2 = r.w * e / i);
}
var Cg = [0, 1], dI = (
  /** @class */
  (function() {
    function r(t, e, i) {
      this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = i || [0, 0];
    }
    return r.prototype.contain = function(t) {
      var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
      return t >= i && t <= n;
    }, r.prototype.containData = function(t) {
      return this.scale.contain(this.scale.parse(t));
    }, r.prototype.getExtent = function() {
      return this._extent.slice();
    }, r.prototype.setExtent = function(t, e) {
      var i = this._extent;
      i[0] = t, i[1] = e;
    }, r.prototype.dataToCoord = function(t, e) {
      var i = this.scale;
      return t = i.normalize(i.parse(t)), fp(t, Cg, Ag(this), e);
    }, r.prototype.coordToData = function(t, e) {
      var i = fp(t, Ag(this), Cg, e);
      return this.scale.scale(i);
    }, r.prototype.pointToData = function(t, e) {
    }, r.prototype.getTicksCoords = function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(), i = V2(this, e, {
        breakTicks: t.breakTicks,
        pruneByBreak: t.pruneByBreak
      }), n = G(i.ticks, function(s) {
        return {
          coord: this.dataToCoord(mo(this.scale, s)),
          tick: s
        };
      }, this), a = e.get("alignWithLabel"), o = pI(this, n, a);
      return G(n, function(s) {
        return {
          coord: s.coord,
          tickValue: s.tick.value,
          onBand: o
        };
      });
    }, r.prototype.getMinorTicksCoords = function() {
      if (Fe(this.scale))
        return [];
      var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
      e > 0 && e < 100 || (e = 5);
      var i = this.scale.getMinorTicks(e), n = G(i, function(a) {
        return G(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return n;
    }, r.prototype.getViewLabels = function(t) {
      return t = t || ll(Ee.determine), H2(this, t).labels;
    }, r.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, r.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, r.prototype.getBandWidth = function() {
      return Vn(this, {
        min: 1
      }).w;
    }, r.prototype.calculateCategoryInterval = function(t) {
      return t = t || ll(Ee.determine), Z2(this, t);
    }, r;
  })()
);
function Ag(r) {
  var t = r.getExtent();
  if (r.onBand) {
    var e = t[1] - t[0], i = e / r.scale.count() / 2;
    t[0] += i, t[1] -= i;
  }
  return t;
}
function pI(r, t, e) {
  var i = t.length;
  if (!r.onBand || e || !i)
    return !1;
  var n = Vn(r).w;
  if (!n)
    return !1;
  M(t, function(s) {
    s.coord -= n / 2;
  });
  var a = r.scale.getExtent(), o = t[i - 1];
  return o.tick.offInterval && t.pop(), t.push({
    coord: o.coord + n,
    tick: {
      value: a[1] + 1
    }
  }), !0;
}
var gI = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e, i, n, a, o) {
      var s = r.call(this, e, i, n) || this;
      return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
    }
    return t.prototype.isHorizontal = function() {
      var e = this.position;
      return e === "top" || e === "bottom";
    }, t.prototype.getGlobalExtent = function(e) {
      var i = this.getExtent();
      return i[0] = this.toGlobalCoord(i[0]), i[1] = this.toGlobalCoord(i[1]), e && i[0] > i[1] && i.reverse(), i;
    }, t.prototype.pointToData = function(e, i) {
      return this.coordToData(this.toLocalCoord(e[this.dim === "x" ? 0 : 1]), i);
    }, t.prototype.setCategorySortInfo = function(e) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = e, this.scale.setSortInfo(e);
    }, t;
  })(dI)
), Dg = ["label", "labelLine", "layoutOption", "priority", "defaultAttr", "marginForce", "minMarginForce", "marginDefault", "suggestIgnore"], mI = 1, fl = 2, U1 = mI | fl;
function cl(r, t, e) {
  e = e || U1, t ? r.dirty |= e : r.dirty &= ~e;
}
function W1(r, t) {
  return t = t || U1, r.dirty == null || !!(r.dirty & t);
}
function $r(r) {
  if (r)
    return W1(r) && yI(r, r.label, r), r;
}
function yI(r, t, e) {
  var i = t.getComputedTransform();
  r.transform = lv(r.transform, i);
  var n = r.localRect = Xa(r.localRect, t.getBoundingRect()), a = t.style, o = a.margin, s = e && e.marginForce, l = e && e.minMarginForce, u = e && e.marginDefault, f = a.__marginType;
  f == null && u && (o = u, f = cn.textMargin);
  for (var c = 0; c < 4; c++)
    nf[c] = f === cn.minMargin && l && l[c] != null ? l[c] : s && s[c] != null ? s[c] : o ? o[c] : 0;
  f === cn.textMargin && tl(n, nf, !1, !1);
  var h = r.rect = Xa(r.rect, n);
  return i && h.applyTransform(i), f === cn.minMargin && tl(h, nf, !1, !1), r.axisAligned = sv(i), (r.label = r.label || {}).ignore = t.ignore, cl(r, !1), cl(r, !0, fl), r;
}
var nf = [0, 0, 0, 0];
function _I(r, t, e) {
  return r.transform = lv(r.transform, e), r.localRect = Xa(r.localRect, t), r.rect = Xa(r.rect, t), e && r.rect.applyTransform(e), r.axisAligned = sv(e), r.obb = void 0, (r.label = r.label || {}).ignore = !1, r;
}
function bI(r, t) {
  if (r) {
    r.label.x += t.x, r.label.y += t.y, r.label.markRedraw();
    var e = r.transform;
    e && (e[4] += t.x, e[5] += t.y);
    var i = r.rect;
    i && (i.x += t.x, i.y += t.y);
    var n = r.obb;
    n && n.fromBoundingRect(r.localRect, e);
  }
}
function Mg(r, t) {
  for (var e = 0; e < Dg.length; e++) {
    var i = Dg[e];
    r[i] == null && (r[i] = t[i]);
  }
  return $r(r);
}
function Ig(r) {
  var t = r.obb;
  return (!t || W1(r, fl)) && (r.obb = t = t || new o_(), t.fromBoundingRect(r.localRect, r.transform), cl(r, !1, fl)), t;
}
function SI(r) {
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
  for (var i = 0; i < r.length; i++) {
    var n = $r(r[i]);
    if (!n.label.ignore) {
      for (var a = n.label, o = n.labelLine, s = !1, l = 0; l < t.length; l++)
        if (Vv(n, t[l], null, {
          touchThreshold: 0.05
        })) {
          s = !0;
          break;
        }
      s ? (e(a), o && e(o)) : t.push(n);
    }
  }
}
function Vv(r, t, e, i) {
  return !r || !t || r.label && r.label.ignore || t.label && t.label.ignore || !r.rect.intersect(t.rect, e, i) ? !1 : r.axisAligned && t.axisAligned ? !0 : Ig(r).intersect(Ig(t), e, i);
}
var wI = null;
function xI() {
  return wI;
}
var TI = "expandAxisBreak", Pr = Math.PI, CI = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]], AI = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]], Pn = ht(), Y1 = ht(), X1 = (
  /** @class */
  (function() {
    function r(t) {
      this.recordMap = {}, this.resolveAxisNameOverlap = t;
    }
    return r.prototype.ensureRecord = function(t) {
      var e = t.axis.dim, i = t.componentIndex, n = this.recordMap, a = n[e] || (n[e] = []);
      return a[i] || (a[i] = {
        ready: {}
      });
    }, r;
  })()
);
function DI(r, t, e, i) {
  var n = e.axis, a = t.ensureRecord(e), o = [], s, l = Gv(r.axisName) && Ln(r.nameLocation);
  M(i, function(d) {
    var p = $r(d);
    if (!(!p || p.label.ignore)) {
      o.push(p);
      var m = a.transGroup;
      l && (m.transform ? so(ta, m.transform) : oo(ta), p.transform && ba(ta, ta, p.transform), J.copy(Ko, p.localRect), Ko.applyTransform(ta), s ? s.union(Ko) : J.copy(s = new J(0, 0, 0, 0), Ko));
    }
  });
  var u = Math.abs(a.dirVec.x) > 0.1 ? "x" : "y", f = a.transGroup[u];
  if (o.sort(function(d, p) {
    return Math.abs(d.label[u] - f) - Math.abs(p.label[u] - f);
  }), l && s) {
    var c = n.getExtent(), h = Math.min(c[0], c[1]), v = Math.max(c[0], c[1]) - h;
    s.union(new J(h, 0, v, 1));
  }
  a.stOccupiedRect = s, a.labelInfoList = o;
}
var ta = Xe(), Ko = new J(0, 0, 0, 0), q1 = function(r, t, e, i, n, a) {
  if (Ln(r.nameLocation)) {
    var o = a.stOccupiedRect;
    o && Z1(_I({}, o, a.transGroup.transform), i, n);
  } else
    K1(a.labelInfoList, a.dirVec, i, n);
};
function Z1(r, t, e) {
  var i = new _t();
  Vv(r, t, i, {
    direction: Math.atan2(e.y, e.x),
    bidirectional: !1,
    touchThreshold: 0.05
  }) && bI(t, i);
}
function K1(r, t, e, i) {
  for (var n = _t.dot(i, t) >= 0, a = 0, o = r.length; a < o; a++) {
    var s = r[n ? a : o - 1 - a];
    s.label.ignore || Z1(s, e, i);
  }
}
var Br = (
  /** @class */
  (function() {
    function r(t, e, i, n) {
      this.group = new Lt(), this._axisModel = t, this._api = e, this._local = {}, this._shared = n || new X1(q1), this._resetCfgDetermined(i);
    }
    return r.prototype.updateCfg = function(t) {
      var e = this._cfg.raw;
      e.position = t.position, e.labelOffset = t.labelOffset, this._resetCfgDetermined(e);
    }, r.prototype.__getRawCfg = function() {
      return this._cfg.raw;
    }, r.prototype._resetCfgDetermined = function(t) {
      var e = this._axisModel, i = e.getDefaultOption ? e.getDefaultOption() : {}, n = V(t.axisName, e.get("name")), a = e.get("nameMoveOverlap");
      (a == null || a === "auto") && (a = V(t.defaultNameMoveOverlap, !0));
      var o = {
        raw: t,
        position: t.position,
        rotation: t.rotation,
        nameDirection: V(t.nameDirection, 1),
        tickDirection: V(t.tickDirection, 1),
        labelDirection: V(t.labelDirection, 1),
        labelOffset: V(t.labelOffset, 0),
        silent: V(t.silent, !0),
        axisName: n,
        nameLocation: vn(e.get("nameLocation"), i.nameLocation, "end"),
        shouldNameMoveOverlap: Gv(n) && a,
        optionHideOverlap: e.get(["axisLabel", "hideOverlap"]),
        showMinorTicks: e.get(["minorTick", "show"])
      };
      this._cfg = o;
      var s = new Lt({
        x: o.position[0],
        y: o.position[1],
        rotation: o.rotation
      });
      s.updateTransform(), this._transformGroup = s;
      var l = this._shared.ensureRecord(e);
      l.transGroup = this._transformGroup, l.dirVec = new _t(Math.cos(-o.rotation), Math.sin(-o.rotation));
    }, r.prototype.build = function(t, e) {
      var i = this;
      return t || (t = {
        axisLine: !0,
        axisTickLabelEstimate: !1,
        axisTickLabelDetermine: !0,
        axisName: !0
      }), M(MI, function(n) {
        t[n] && II[n](i._cfg, i._local, i._shared, i._axisModel, i.group, i._transformGroup, i._api, e || {});
      }), this;
    }, r.innerTextLayout = function(t, e, i) {
      var n = D0(e - t), a, o;
      return qs(n) ? (o = i > 0 ? "top" : "bottom", a = "center") : qs(n - Pr) ? (o = i > 0 ? "bottom" : "top", a = "center") : (o = "middle", n > 0 && n < Pr ? a = i > 0 ? "right" : "left" : a = i > 0 ? "left" : "right"), {
        rotation: n,
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
), MI = ["axisLine", "axisTickLabelEstimate", "axisTickLabelDetermine", "axisName"], II = {
  axisLine: function(r, t, e, i, n, a, o) {
    var s = i.get(["axisLine", "show"]);
    if (s === "auto" && (s = !0, r.raw.axisLineAutoShow != null && (s = !!r.raw.axisLineAutoShow)), !!s) {
      var l = i.axis.getExtent(), u = a.transform, f = [l[0], 0], c = [l[1], 0], h = f[0] > c[0];
      u && (we(f, f, u), we(c, c, u));
      var v = O({
        lineCap: "round"
      }, i.getModel(["axisLine", "lineStyle"]).getLineStyle()), d = {
        strokeContainThreshold: r.raw.strokeContainThreshold || 5,
        silent: !0,
        z2: 1,
        style: v
      };
      if (i.get(["axisLine", "breakLine"]) && il(i.axis.scale))
        xI().buildAxisBreakLine(i, n, a, d);
      else {
        var p = new gr(O({
          shape: {
            x1: f[0],
            y1: f[1],
            x2: c[0],
            y2: c[1]
          }
        }, d));
        Ya(p.shape, p.style.lineWidth), p.anid = "line", n.add(p);
      }
      var m = i.get(["axisLine", "symbol"]);
      if (m != null) {
        var g = i.get(["axisLine", "symbolSize"]);
        W(m) && (m = [m, m]), (W(g) || bt(g)) && (g = [g, g]);
        var y = ru(i.get(["axisLine", "symbolOffset"]) || 0, g), _ = g[0], b = g[1];
        M([{
          rotate: r.rotation + Math.PI / 2,
          offset: y[0],
          r: 0
        }, {
          rotate: r.rotation - Math.PI / 2,
          offset: y[1],
          r: Math.sqrt((f[0] - c[0]) * (f[0] - c[0]) + (f[1] - c[1]) * (f[1] - c[1]))
        }], function(S, w) {
          if (m[w] !== "none" && m[w] != null) {
            var x = Ni(m[w], -_ / 2, -b / 2, _, b, v.stroke, !0), T = S.r + S.offset, C = h ? c : f;
            x.attr({
              rotation: S.rotate,
              x: C[0] + T * Math.cos(r.rotation),
              y: C[1] - T * Math.sin(r.rotation),
              silent: !0,
              z2: 11
            }), n.add(x);
          }
        });
      }
    }
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisTickLabelEstimate: function(r, t, e, i, n, a, o, s) {
    var l = Pg(t, n, s);
    l && Lg(r, t, e, i, n, a, o, Ee.estimate);
  },
  /**
   * Finish axis tick label build.
   * Can be only called once.
   */
  axisTickLabelDetermine: function(r, t, e, i, n, a, o, s) {
    var l = Pg(t, n, s);
    l && Lg(r, t, e, i, n, a, o, Ee.determine);
    var u = kI(r, n, a, i);
    EI(r, t.labelLayoutList, u), RI(r, n, a, i, r.tickDirection);
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisName: function(r, t, e, i, n, a, o, s) {
    var l = e.ensureRecord(i);
    t.nameEl && (n.remove(t.nameEl), t.nameEl = l.nameLayout = l.nameLocation = null);
    var u = r.axisName;
    if (Gv(u)) {
      var f = r.nameLocation, c = r.nameDirection, h = i.getModel("nameTextStyle"), v = i.get("nameGap") || 0, d = i.axis.getExtent(), p = i.axis.inverse ? -1 : 1, m = new _t(0, 0), g = new _t(0, 0);
      f === "start" ? (m.x = d[0] - p * v, g.x = -p) : f === "end" ? (m.x = d[1] + p * v, g.x = p) : (m.x = (d[0] + d[1]) / 2, m.y = r.labelOffset + c * v, g.y = c);
      var y = Xe();
      g.transform(Bh(y, y, r.rotation));
      var _ = i.get("nameRotate");
      _ != null && (_ = _ * Pr / 180);
      var b, S;
      Ln(f) ? b = Br.innerTextLayout(
        r.rotation,
        _ ?? r.rotation,
        // Adapt to axis.
        c
      ) : (b = LI(r.rotation, f, _ || 0, d), S = r.raw.axisNameAvailableWidth, S != null && (S = Math.abs(S / Math.sin(b.rotation)), !isFinite(S) && (S = null)));
      var w = h.getFont(), x = i.get("nameTruncate", !0) || {}, T = x.ellipsis, C = lr(r.raw.nameTruncateMaxWidth, x.maxWidth, S), D = s.nameMarginLevel || 0, A = new ne({
        x: m.x,
        y: m.y,
        rotation: b.rotation,
        silent: Br.isLabelSilent(i),
        style: Dn(h, {
          text: u,
          font: w,
          overflow: "truncate",
          width: C,
          ellipsis: T,
          fill: h.getTextColor() || i.get(["axisLine", "lineStyle", "color"]),
          align: h.get("align") || b.textAlign,
          verticalAlign: h.get("verticalAlign") || b.textVerticalAlign
        }),
        z2: 1
      });
      if (ql({
        el: A,
        componentModel: i,
        itemName: u
      }), A.__fullText = u, A.anid = "name", i.get("triggerEvent")) {
        var L = Br.makeAxisEventDataBase(i);
        L.targetType = "axisName", L.name = u, at(A).eventData = L;
      }
      a.add(A), A.updateTransform(), t.nameEl = A;
      var I = l.nameLayout = $r({
        label: A,
        priority: A.z2,
        defaultAttr: {
          ignore: A.ignore
        },
        marginDefault: Ln(f) ? CI[D] : AI[D]
      });
      if (l.nameLocation = f, n.add(A), A.decomposeTransform(), r.shouldNameMoveOverlap && I) {
        var P = e.ensureRecord(i);
        e.resolveAxisNameOverlap(r, e, i, I, g, P);
      }
    }
  }
};
function Lg(r, t, e, i, n, a, o, s) {
  j1(t) || OI(r, t, n, s, i, o);
  var l = t.labelLayoutList;
  NI(r, i, l, a), r.rotation;
  var u = r.optionHideOverlap;
  PI(i, l, u), u && SI(
    // Filter the already ignored labels by the previous overlap resolving methods.
    Rt(l, function(f) {
      return f && !f.label.ignore;
    })
  ), DI(r, e, i, l);
}
function LI(r, t, e, i) {
  var n = D0(e - r), a, o, s = i[0] > i[1], l = t === "start" && !s || t !== "start" && s;
  return qs(n - Pr / 2) ? (o = l ? "bottom" : "top", a = "center") : qs(n - Pr * 1.5) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", n < Pr * 1.5 && n > Pr / 2 ? a = l ? "left" : "right" : a = l ? "right" : "left"), {
    rotation: n,
    textAlign: a,
    textVerticalAlign: o
  };
}
function PI(r, t, e) {
  var i = r.axis, n = r.get(["axisLabel", "customValues"]);
  if (C2(i))
    return;
  function a(u, f, c) {
    var h = $r(t[f]), v = $r(t[c]), d = i.scale;
    if (!(!h || !v)) {
      if (u == null) {
        if (!e && n)
          return;
        var p = Pn(h.label).labelInfo.tick;
        if (
          // TimeScale does not expand extent to "nice", so eliminate labels that are not nice.
          Bv(d) && p.notNice || Fe(d) && p.offInterval
        ) {
          on(h.label);
          return;
        }
      }
      if (u === !1 || h.suggestIgnore) {
        on(h.label);
        return;
      }
      if (v.suggestIgnore) {
        on(v.label);
        return;
      }
      var m = 0.1;
      if (!e) {
        var g = [0, 0, 0, 0];
        h = Mg({
          marginForce: g
        }, h), v = Mg({
          marginForce: g
        }, v);
      }
      Vv(h, v, null, {
        touchThreshold: m
      }) && on(u ? v.label : h.label);
    }
  }
  var o = r.get(["axisLabel", "showMinLabel"]), s = r.get(["axisLabel", "showMaxLabel"]), l = t.length;
  a(o, 0, 1), a(s, l - 1, l - 2);
}
function EI(r, t, e) {
  r.showMinorTicks || M(t, function(i) {
    if (i && i.label.ignore)
      for (var n = 0; n < e.length; n++) {
        var a = e[n], o = Y1(a), s = Pn(i.label);
        if (o.tickValue != null && !o.onBand && o.tickValue === s.labelInfo.tick.value) {
          on(a);
          return;
        }
      }
  });
}
function on(r) {
  r && (r.ignore = !0);
}
function Q1(r, t, e, i, n) {
  for (var a = [], o = [], s = [], l = 0; l < r.length; l++) {
    var u = r[l].coord;
    o[0] = u, o[1] = 0, s[0] = u, s[1] = e, t && (we(o, o, t), we(s, s, t));
    var f = new gr({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: i,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    Ya(f.shape, f.style.lineWidth), f.anid = n + "_" + r[l].tickValue, a.push(f);
    var c = Y1(f);
    c.onBand = !!r[l].onBand, c.tickValue = r[l].tickValue;
  }
  return a;
}
function kI(r, t, e, i) {
  var n = i.axis, a = i.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && (o = !0, r.raw.axisTickAutoShow != null && (o = !!r.raw.axisTickAutoShow)), !o || n.scale.isBlank())
    return [];
  for (var s = a.getModel("lineStyle"), l = r.tickDirection * a.get("length"), u = n.getTicksCoords(), f = Q1(u, e.transform, l, yt(s.getLineStyle(), {
    stroke: i.get(["axisLine", "lineStyle", "color"])
  }), "ticks"), c = 0; c < f.length; c++)
    t.add(f[c]);
  return f;
}
function RI(r, t, e, i, n) {
  var a = i.axis, o = i.getModel("minorTick");
  if (!(!r.showMinorTicks || a.scale.isBlank())) {
    var s = a.getMinorTicksCoords();
    if (s.length)
      for (var l = o.getModel("lineStyle"), u = n * o.get("length"), f = yt(l.getLineStyle(), yt(i.getModel("axisTick").getLineStyle(), {
        stroke: i.get(["axisLine", "lineStyle", "color"])
      })), c = 0; c < s.length; c++)
        for (var h = Q1(s[c], e.transform, u, f, "minorticks_" + c), v = 0; v < h.length; v++)
          t.add(h[v]);
  }
}
function Pg(r, t, e) {
  if (j1(r)) {
    var i = r.axisLabelsCreationContext, n = i.out.noPxChangeTryDetermine;
    if (e.noPxChange) {
      for (var a = !0, o = 0; o < n.length; o++)
        a = a && n[o]();
      if (a)
        return !1;
    }
    n.length && (t.remove(r.labelGroup), Gc(r, null, null, null));
  }
  return !0;
}
function OI(r, t, e, i, n, a) {
  var o = n.axis, s = lr(r.raw.axisLabelShow, n.get(["axisLabel", "show"])), l = new Lt();
  e.add(l);
  var u = ll(i);
  if (!s || o.scale.isBlank()) {
    Gc(t, [], l, u);
    return;
  }
  var f = n.getModel("axisLabel"), c = o.getViewLabels(u), h = (lr(r.raw.labelRotate, f.get("rotate")) || 0) * Pr / 180, v = Br.innerTextLayout(r.rotation, h, r.labelDirection), d = n.getCategories && n.getCategories(!0), p = [], m = n.get("triggerEvent"), g = 1 / 0, y = -1 / 0;
  M(c, function(b, S) {
    var w, x = b.tick, T = b.formattedLabel, C = b.rawLabel, D = f, A = mo(o.scale, x);
    if (d && d[A]) {
      var L = d[A];
      K(L) && L.textStyle && (D = new Ct(L.textStyle, f, n.ecModel));
    }
    var I = D.getTextColor() || n.get(["axisLine", "lineStyle", "color"]), P = D.getShallow("align", !0) || v.textAlign, E = V(D.getShallow("alignMinLabel", !0), P), k = V(D.getShallow("alignMaxLabel", !0), P), z = D.getShallow("verticalAlign", !0) || D.getShallow("baseline", !0) || v.textVerticalAlign, R = V(D.getShallow("verticalAlignMinLabel", !0), z), $ = V(D.getShallow("verticalAlignMaxLabel", !0), z), Y = 10 + (((w = x.time) === null || w === void 0 ? void 0 : w.level) || 0);
    g = Math.min(g, Y), y = Math.max(y, Y);
    var U = new ne({
      // --- transform props start ---
      // All of the transform props MUST not be set here, but should be set in
      // `updateAxisLabelChangableProps`, because they may change in estimation,
      // and need to calculate based on global coord sys by `decomposeTransform`.
      x: 0,
      y: 0,
      rotation: 0,
      // --- transform props end ---
      silent: Br.isLabelSilent(n),
      z2: Y,
      style: Dn(D, {
        text: T,
        align: S === 0 ? E : S === c.length - 1 ? k : P,
        verticalAlign: S === 0 ? R : S === c.length - 1 ? $ : z,
        fill: Z(I) ? I(
          // (1) In category axis with data zoom, tick is not the original
          // index of axis.data. So tick should not be exposed to user
          // in category axis.
          // (2) Compatible with previous version, which always use formatted label as
          // input. But in interval scale the formatted label is like '223,445', which
          // maked user replace ','. So we modify it to return original val but remain
          // it as 'string' to avoid error in replacing.
          o.type === "category" ? C : o.type === "value" ? A + "" : A,
          S
        ) : I
      })
    });
    U.anid = "label_" + A;
    var q = Pn(U);
    if (q.labelInfo = b, q.layoutRotation = v.rotation, ql({
      el: U,
      componentModel: n,
      itemName: T,
      formatterParamsExtra: {
        isTruncated: function() {
          return U.isTruncated;
        },
        value: C,
        tickIndex: S
      }
    }), m) {
      var Q = Br.makeAxisEventDataBase(n);
      Q.targetType = "axisLabel", Q.value = C, Q.tickIndex = S;
      var H = b.tick.break;
      if (H) {
        var it = H.parsedBreak;
        Q.break = {
          // type: labelItem.break.type,
          start: it.vmin,
          end: it.vmax
        };
      }
      o.type === "category" && (Q.dataIndex = A), at(U).eventData = Q, H && FI(n, a, U, H);
    }
    p.push(U), l.add(U);
  });
  var _ = G(p, function(b) {
    return {
      label: b,
      priority: Pn(b).labelInfo.tick.break ? b.z2 + (y - g + 1) : b.z2,
      defaultAttr: {
        ignore: b.ignore
      }
    };
  });
  Gc(t, _, l, u);
}
function j1(r) {
  return !!r.labelLayoutList;
}
function Gc(r, t, e, i) {
  r.labelLayoutList = t, r.labelGroup = e, r.axisLabelsCreationContext = i;
}
function NI(r, t, e, i) {
  var n = t.get(["axisLabel", "margin"]);
  M(e, function(a, o) {
    var s = $r(a);
    if (s) {
      var l = s.label, u = Pn(l);
      s.suggestIgnore = l.ignore, l.ignore = !1, zs(nr, BI);
      var f = t.axis;
      nr.x = f.dataToCoord(mo(f.scale, u.labelInfo.tick)), nr.y = r.labelOffset + r.labelDirection * n, nr.rotation = u.layoutRotation, i.add(nr), nr.updateTransform(), i.remove(nr), nr.decomposeTransform(), zs(l, nr), l.markRedraw(), cl(s, !0), $r(s);
    }
  });
}
var nr = new It(), BI = new It();
function Gv(r) {
  return !!r;
}
function FI(r, t, e, i) {
  e.on("click", function(n) {
    var a = {
      type: TI,
      breaks: [{
        start: i.parsedBreak.breakOption.start,
        end: i.parsedBreak.breakOption.end
      }]
    };
    a[r.axis.dim + "AxisIndex"] = r.componentIndex, t.dispatchAction(a);
  });
}
function hl(r, t, e) {
  e = e || {};
  var i = t.axis, n = {}, a = i.getAxesOnZeroOf()[0], o = i.position, s = a ? "onZero" : o, l = i.dim, u = [r.x, r.x + r.width, r.y, r.y + r.height], f = {
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
  n.position = [l === "y" ? h[f[s]] : u[0], l === "x" ? h[f[s]] : u[3]], n.rotation = Math.PI / 2 * (l === "x" ? 0 : 1);
  var d = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  n.labelDirection = n.tickDirection = n.nameDirection = d[o], n.labelOffset = a ? h[f[o]] - h[f.onZero] : 0, t.get(["axisTick", "inside"]) && (n.tickDirection = -n.tickDirection), lr(e.labelInside, t.get(["axisLabel", "inside"])) && (n.labelDirection = -n.labelDirection);
  var p = t.get(["axisLabel", "rotate"]);
  return n.labelRotate = s === "top" ? -p : p, n.z2 = 1, n;
}
function zI(r) {
  return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
}
function $I(r) {
  var t = {
    xAxisModel: null,
    yAxisModel: null
  };
  return M(t, function(e, i) {
    var n = i.replace(/Model$/, ""), a = r.getReferringComponents(n, _e).models[0];
    t[i] = a;
  }), t;
}
function HI(r, t, e, i, n, a) {
  for (var o = hl(r, e), s = !1, l = !1, u = 0; u < t.length; u++)
    _1(t[u].getOtherAxis(e.axis).scale) && (s = l = !0, e.axis.type === "category" && e.axis.onBand && (l = !1));
  return o.axisLineAutoShow = s, o.axisTickAutoShow = l, o.defaultNameMoveOverlap = a, new Br(e, i, o, n);
}
function VI(r, t, e) {
  var i = hl(t, e);
  r.updateCfg(i);
}
var GI = ht(), UI = 1, WI = 3, J1 = (
  /** @class */
  (function() {
    function r(t, e, i, n, a) {
      var o = Fe(t), s = o ? e.getCategories().length : null, l;
      if (o) {
        var u = e.getCategories(!0);
        l = u && !u.length;
      }
      var f = i.slice();
      (ol(t) || In(t) || Bv(t)) && (O0(f, ea(t, e.get("dataMin", !0))), N0(f, ea(t, e.get("dataMax", !0)))), YT(f) || (f[0] = f[1] = NaN);
      var c = [], h = [!1, !1], v = e.get("min", !0);
      v === "dataMin" ? (c[0] = f[0], h[0] = !0) : (c[0] = ea(t, Z(v) ? v({
        min: f[0],
        max: f[1]
      }) : v), h[0] = c[0] != null);
      var d = e.get("max", !0);
      d === "dataMax" ? (c[1] = f[1], h[1] = !0) : (c[1] = ea(t, Z(d) ? d({
        min: f[0],
        max: f[1]
      }) : d), h[1] = c[1] != null);
      var p = YI(t, e), m = o ? null : f[1] - f[0] || Math.abs(f[0]);
      c[0] == null && (c[0] = o ? l ? f[0] : s ? 0 : NaN : f[0] - p[0] * m), c[1] == null && (c[1] = o ? l ? f[1] : s ? s - 1 : NaN : f[1] + p[1] * m), !pr(c[0]) && (c[0] = NaN), !pr(c[1]) && (c[1] = NaN);
      var g = l || Ba(c[0]) || Ba(c[1]) || o && !s, y = ol(t), _ = y && e.needIncludeZero && e.needIncludeZero();
      _ && (c[0] > 0 && c[1] > 0 && !h[0] && (c[0] = 0), c[0] < 0 && c[1] < 0 && !h[1] && (c[1] = 0));
      var b = !1;
      c[0] > c[1] && (c.reverse(), b = !0);
      var S = ea(t, e.get("startValue", !0)), w = S != null;
      !Te(S) && n && (S = t.getDefaultStartValue ? t.getDefaultStartValue() : 0), Te(S) && (w || !y || _) && (S < c[0] && !h[0] ? (c[0] = S, h[0] = !0) : S > c[1] && !h[1] && (c[1] = S, h[1] = !0));
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
      Eg(x, c);
    }
    return r.prototype.makeNoZoom = function() {
      return this._i.noZoomEffMM.slice();
    }, r.prototype.makeFinal = function() {
      var t = this._i, e = t.zoomMM, i = t.noZoomEffMM, n = t.zoomFixMM, a = t.fixMM, o = {
        fixMM: a,
        zoomFixMM: n,
        isBlank: t.isBlank,
        incl0: t.incl0,
        tggAxInv: t.tggAxInv,
        ctnShp: t.ctnShp,
        effMM: i.slice()
      }, s = o.effMM;
      return e[0] != null && (s[0] = e[0], a[0] = n[0] = !0), e[1] != null && (s[1] = e[1], a[1] = n[1] = !0), Eg(t, s), o;
    }, r.prototype.makeRenderInfo = function() {
      return {
        startValue: this._i.startValue
      };
    }, r.prototype.setZoomMM = function(t, e) {
      this._i.zoomMM[t] = e;
    }, r;
  })()
);
function Eg(r, t) {
  var e = r.scale, i = r.dataMM;
  e.sanitize && (t[0] = e.sanitize(t[0], i), t[1] = e.sanitize(t[1], i), XT(t));
}
function ea(r, t) {
  return t == null ? null : Ba(t) ? NaN : r.parse(t);
}
function YI(r, t) {
  var e;
  if (Fe(r))
    e = [0, 0];
  else {
    var i = t.get("boundaryGap");
    typeof i == "boolean" && (i = null), e = F(i) ? i : [i, i];
  }
  return [kg(e[0]), kg(e[1])];
}
function kg(r) {
  return Li(typeof r == "boolean" ? 0 : r, 1) || 0;
}
function tb(r) {
  var t = GI(r.scale);
  return t.extent || (t.extent = ye()), t;
}
function XI(r, t) {
  tb(r).dimIdxInCoord = t.get(r.dim);
}
function qI(r, t) {
  var e = r.scale, i = r.model, n = r.dim;
  e.rawExtentInfo || ZI(e, r, n, i, t);
}
function ZI(r, t, e, i, n) {
  var a = tb(t), o = a.extent, s = !1;
  oI(t, function(f) {
    if (f.boxCoordinateSystem) {
      var c = B_(f).coord, h = a.dimIdxInCoord;
      if (h >= 0) {
        if (F(c)) {
          var v = c[h];
          v != null && !F(v) && gc(o, r.parse(v));
        }
      }
    } else if (f.coordinateSystem) {
      var d = f.getData();
      if (d) {
        var p = r.getFilter ? r.getFilter() : null;
        M(A2(d, e), function(m) {
          WT(o, d.getApproximateExtent(m, p));
        });
      }
      f.__requireStartValue && f.__requireStartValue(t) && (s = !0);
    }
  });
  var l = jI(r, t, i), u = new J1(r, i, o, s, l);
  eb(r, u, n), a.extent = null;
}
function KI(r, t) {
  var e = r.scale;
  eb(e, new J1(e, r.model, t, !1, !1), WI);
}
function eb(r, t, e) {
  r.rawExtentInfo = t, t.from = e;
}
function QI(r, t) {
  Uv.set(r, t);
}
var Uv = j();
function rb(r, t, e, i, n) {
  r.rawExtentInfo || KI({
    scale: r,
    model: t
  }, ye());
  var a = r.rawExtentInfo.makeFinal(), o = a.effMM;
  return r.setExtent(o[0], o[1]), r.setBlank(a.isBlank), i && a.tggAxInv && e && !e.get("legacyMinMaxDontInverseAxis") && (i.inverse = !i.inverse), a;
}
function jI(r, t, e) {
  var i = M1(r, e), n = e.get("containShape", !0);
  if (n == null && !i && (n = !0), !n)
    return !1;
  var a = !1;
  return V1(t, function(o) {
    a = !!Uv.get(o) || a;
  }), a;
}
function JI(r, t, e, i) {
  if (e.ctnShp) {
    var n;
    if (V1(r, function(s) {
      var l = Uv.get(s);
      if (l) {
        var u = l(r, i);
        u && (n = n || [0, 0], O0(n, u[0]), N0(n, u[1]), x2(r));
      }
    }), !!n) {
      var a = t.getExtent();
      if (Fe(t))
        r.onBand || t.setExtent2(Ka, Vt(a[0], a[0] + n[0]), ct(a[1], a[1] + n[1]));
      else {
        var o = a.slice();
        e.zoomFixMM[0] || (o[0] = Vt(o[0], t.transformOut(t.transformIn(o[0], null) + n[0], null))), e.zoomFixMM[1] || (o[1] = ct(o[1], t.transformOut(t.transformIn(o[1], null) + n[1], null))), (o[0] < a[0] || o[1] > a[1]) && t.setExtent2(Ka, o[0], o[1]);
      }
    }
  }
}
function tL() {
  uI("liPosMinGap", eL);
}
function eL(r, t, e) {
  var i = j(), n = e.serUids, a = e.liPosMinGap, o, s = t.axis, l = s.scale, u = l.needTransform(), f = l.getFilter ? l.getFilter() : null, c = I_(f);
  function h(_) {
    Hv(r, t.sers, function(b) {
      var S = b.getRawData(), w = S.getDimensionIndex(S.mapDimension(s.dim));
      w >= 0 && _(w, b, S.getStore());
    });
  }
  var v = 0;
  if (h(function(_, b, S) {
    i.set(b.uid, 1), (!n || !n.hasKey(b.uid)) && (o = !0), v += S.count();
  }), (!n || n.keys().length !== i.keys().length) && (o = !0), !o && a != null) {
    t.liPosMinGap = a;
    return;
  }
  Rv(hi, v);
  var d = 0;
  h(function(_, b, S) {
    for (var w = 0, x = S.count(); w < x; ++w) {
      var T = S.get(_, w);
      isFinite(T) && (!f || L_(c, T)) && (u && (T = l.transformIn(T, null)), hi.arr[d++] = T);
    }
  });
  var p = hi.typed ? hi.arr.subarray(0, d) : (hi.arr.length = d, hi.arr);
  hi.typed ? p.sort() : $a(p);
  for (var m = 1 / 0, g = 1; g < d; ++g) {
    var y = p[g] - p[g - 1];
    // - Different series normally have the same values (e.g., barA, barB, barC),
    //   which should be ignored.
    // - A single series with multiple same values is often not meaningful to
    //   create `bandWidth`, so it is also ignored.
    y > 0 && y < m && (m = y);
  }
  e.liPosMinGap = t.liPosMinGap = Te(m) ? m : d > 0 ? B1 : rI, e.serUids = i;
}
var hi = Rv(
  {
    ctor: VM
  },
  50
  // An arbitrary initial capability.
);
function rL(r) {
  return function(t, e) {
    var i = Vn(t, {
      fromStat: {
        key: r
      }
    });
    if (Te(i.w2))
      return [-i.w2 / 2, i.w2 / 2];
  };
}
function ou(r, t) {
  return r + $c + t;
}
function iL(r) {
  return tL(), {
    // non-category scale do not use `liPosMinGap` to calculate `bandWidth`.
    liPosMinGap: !Fe(r.scale)
  };
}
var _n = "bar";
function nL(r, t, e, i) {
  fI(r, {
    key: t,
    seriesType: e,
    coordSysType: i,
    getMetrics: iL
  });
}
function aL(r) {
  var t = r.scale.rawExtentInfo.makeRenderInfo().startValue;
  return t;
}
var ib = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, vl = ["25%", "25%"], hr = "cartesian2d", oL = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = po(e.outerBounds);
      r.prototype.mergeDefaultAndTheme.apply(this, arguments), n && e.outerBounds && zr(e.outerBounds, n);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && e.outerBounds && zr(this.option.outerBounds, e.outerBounds);
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
      outerBounds: ib,
      outerBoundsContain: "all",
      outerBoundsClampWidth: vl[0],
      outerBoundsClampHeight: vl[1],
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: X.color.transparent,
      borderWidth: 1,
      borderColor: X.color.neutral30
    }, t;
  })(pt)
), sL = B0(), lL = "__ec_stack_";
function nb(r) {
  return r.get("stack") || lL + r.seriesIndex;
}
function uL(r, t) {
  var e = fL(r, t);
  return e.columnMap = cL(e), e;
}
function fL(r, t) {
  var e = ou(t, hr), i = [], n = Vn(r, {
    fromStat: {
      key: e
    },
    min: 1
  });
  return H1(r, e, function(a) {
    i.push({
      barWidth: Mt(a.get("barWidth"), n.w),
      barMaxWidth: Mt(a.get("barMaxWidth"), n.w),
      barMinWidth: Mt(
        // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
        // the auto-calculated bar width might be less than 0.5 / 1.
        a.get("barMinWidth") || (ab(a) ? 0.5 : 1),
        n.w
      ),
      barGap: a.get("barGap"),
      barCategoryGap: a.get("barCategoryGap"),
      defaultBarGap: a.get("defaultBarGap"),
      stackId: nb(a)
    });
  }), {
    bandWidthResult: n,
    seriesInfo: i
  };
}
function cL(r) {
  var t = r.bandWidthResult.w, e = t, i = 0, n, a, o = [], s = {};
  M(r.seriesInfo, function(p, m) {
    m || (a = p.defaultBarGap || 0);
    var g = p.stackId;
    qt(s, g) || i++;
    var y = s[g];
    y || (y = s[g] = {
      width: 0,
      maxWidth: 0
    }, o.push(g));
    var _ = p.barWidth;
    _ && !y.width && (y.width = _, _ = Vt(e, _), e -= _);
    var b = p.barMaxWidth;
    b && (y.maxWidth = b);
    var S = p.barMinWidth;
    S && (y.minWidth = S);
    var w = p.barGap;
    w != null && (a = w);
    var x = p.barCategoryGap;
    x != null && (n = x);
  }), n == null && (n = ct(35 - o.length * 4, 15) + "%");
  var l = Mt(n, t), u = Mt(a, 1), f = (e - l) / (i + (i - 1) * u);
  f = ct(f, 0), M(o, function(p) {
    var m = s[p], g = m.maxWidth, y = m.minWidth;
    if (m.width) {
      var _ = m.width;
      g && (_ = Vt(_, g)), y && (_ = ct(_, y)), m.width = _, e -= _ + u * _, i--;
    } else {
      var _ = f;
      g && g < _ && (_ = Vt(g, e)), y && y > _ && (_ = y), _ !== f && (m.width = _, e -= _ + u * _, i--);
    }
  }), f = (e - l) / (i + (i - 1) * u), f = ct(f, 0);
  var c = 0, h;
  M(o, function(p) {
    var m = s[p];
    m.width || (m.width = f), h = m, c += m.width * (1 + u);
  }), h && (c -= h.width * u);
  var v = {}, d = -c / 2;
  return M(o, function(p) {
    var m = s[p];
    v[p] = v[p] || {
      bandWidth: t,
      offset: d,
      width: m.width
    }, d += m.width * (1 + u);
  }), v;
}
function hL(r) {
  return {
    seriesType: r,
    overallReset: function(t) {
      var e = ou(r, hr);
      sI(t, e, function(i) {
        var n = uL(i, r);
        H1(i, e, function(a) {
          var o = n.columnMap[nb(a)];
          a.getData().setLayout({
            bandWidth: o.bandWidth,
            offset: o.offset,
            size: o.width
          });
        });
      });
    }
  };
}
function vL(r) {
  return {
    seriesType: r,
    plan: Ov(),
    reset: function(t) {
      if (zI(t)) {
        var e = t.getData(), i = t.coordinateSystem, n = i.getBaseAxis(), a = i.getOtherAxis(n), o = e.getDimensionIndex(e.mapDimension(a.dim)), s = e.getDimensionIndex(e.mapDimension(n.dim)), l = t.get("showBackground", !0), u = e.mapDimension(a.dim), f = e.getCalculationInfo("stackResultDimension"), c = ki(e, u) && !!e.getCalculationInfo("stackedOnSeries"), h = a.isHorizontal(), v = a.toGlobalCoord(a.dataToCoord(aL(a))), d = ab(t), p = t.get("barMinHeight") || 0, m = f && e.getDimensionIndex(f), g = e.getLayout("size"), y = e.getLayout("offset");
        return {
          progress: function(_, b) {
            for (var S = _.count, w = d && fr(S * 3), x = d && l && fr(S * 3), T = d && fr(S), C = i.master.getRect(), D = h ? C.width : C.height, A, L = b.getStore(), I = 0; (A = _.next()) != null; ) {
              var P = L.get(c ? m : o, A), E = L.get(s, A), k = v, z = void 0;
              c && (z = +P - L.get(o, A));
              var R = void 0, $ = void 0, Y = void 0, U = void 0;
              if (h) {
                var q = i.dataToPoint([P, E]);
                c && (k = i.dataToPoint([z, E])[0]), R = k, $ = q[1] + y, Y = q[0] - k, U = g, Et(Y) < p && (Y = (Y < 0 ? -1 : 1) * p);
              } else {
                var q = i.dataToPoint([E, P]);
                c && (k = i.dataToPoint([E, z])[1]), R = q[0] + y, $ = k, Y = g, U = q[1] - k, Et(U) < p && (U = (U <= 0 ? -1 : 1) * p);
              }
              d ? (w[I] = R, w[I + 1] = $, w[I + 2] = h ? Y : U, x && (x[I] = h ? C.x : R, x[I + 1] = h ? $ : C.y, x[I + 2] = D), T[A] = A) : b.setItemLayout(A, {
                x: R,
                y: $,
                width: Y,
                height: U
              }), I += 3;
            }
            d && b.setLayout({
              largePoints: w,
              largeDataIndices: T,
              largeBackgroundPoints: x,
              valueAxisHorizontal: h
            });
          }
        };
      }
    }
  };
}
function ab(r) {
  return r.pipelineContext && r.pipelineContext.large;
}
function dL(r) {
  return rL(ou(r, hr));
}
function pL(r) {
  sL(r, function() {
    function t(e) {
      var i = ou(e, hr);
      nL(r, i, e, hr), QI(i, dL(e));
    }
    t("bar"), t("pictorialBar");
  });
}
var Uc = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function(e, i) {
      return pv(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getMarkerPosition = function(e, i, n) {
      var a = this.coordinateSystem;
      if (a && a.clampData) {
        var o = a.clampData(e), s = a.dataToPoint(o);
        if (n)
          M(a.getAxes(), function(h, v) {
            if (h.type === "category" && i != null) {
              var d = h.getTicksCoords(), p = h.getTickModel().get("alignWithLabel"), m = o[v], g = i[v] === "x1" || i[v] === "y1";
              if (g && !p && (m += 1), d.length < 2)
                return;
              if (d.length === 2) {
                s[v] = h.toGlobalCoord(h.getExtent()[g ? 1 : 0]);
                return;
              }
              for (var y = void 0, _ = void 0, b = 1, S = 0; S < d.length; S++) {
                var w = d[S].coord, x = S === d.length - 1 ? d[S - 1].tickValue + b : d[S].tickValue;
                if (x === m) {
                  _ = w;
                  break;
                } else if (x < m)
                  y = w;
                else if (y != null && x > m) {
                  _ = (w + y) / 2;
                  break;
                }
                S === 1 && (b = x - d[0].tickValue);
              }
              _ == null && (y ? y && (_ = d[d.length - 1].coord) : _ = d[0].coord), s[v] = h.toGlobalCoord(_);
            }
          });
        else {
          var l = this.getData(), u = l.getLayout("offset"), f = l.getLayout("size"), c = a.getBaseAxis().isHorizontal() ? 0 : 1;
          s[c] += u + f / 2;
        }
        return s;
      }
      return [NaN, NaN];
    }, t.prototype.__requireStartValue = function(e) {
      return this.getBaseAxis() !== e;
    }, t.type = "series.__base_bar__", t.defaultOption = {
      // zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      // stack: null
      // Cartesian coordinate system
      // xAxisIndex: 0,
      // yAxisIndex: 0,
      barMinHeight: 0,
      barMinAngle: 0,
      // cursor: null,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod",
      defaultBarGap: "10%"
    }, t;
  })(Je)
);
Je.registerClass(Uc);
var gL = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function() {
      return pv(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null
      });
    }, t.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : !1;
    }, t.prototype.__preparePipelineContext = function(e, i) {
      var n = F0(this, e, i);
      return n.progressiveRender && (n.large = !0), n;
    }, t.prototype.brushSelector = function(e, i, n) {
      return n.rect(i.getItemLayout(e));
    }, t.type = "series." + _n, t.dependencies = ["grid", "polar"], t.defaultOption = z_(Uc.defaultOption, {
      // If clipped
      // Only available on cartesian2d
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
        borderColor: null,
        borderWidth: 0,
        borderType: "solid",
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1
      },
      select: {
        itemStyle: {
          borderColor: X.color.primary,
          borderWidth: 2
        }
      },
      realtimeSort: !1
    }), t;
  })(Uc)
), dl = "\0__throttleOriginMethod", Rg = "\0__throttleRate", Og = "\0__throttleType";
function Wv(r, t, e) {
  var i, n = 0, a = 0, o = null, s, l, u, f;
  t = t || 0;
  function c() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(l, u || []);
  }
  var h = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    i = (/* @__PURE__ */ new Date()).getTime(), l = this, u = v;
    var p = f || t, m = f || e;
    f = null, s = i - (m ? n : a) - p, clearTimeout(o), m ? o = setTimeout(c, p) : s >= 0 ? c() : o = setTimeout(c, -s), n = i;
  };
  return h.clear = function() {
    o && (clearTimeout(o), o = null);
  }, h.debounceNextCall = function(v) {
    f = v;
  }, h;
}
function ob(r, t, e, i) {
  var n = r[t];
  if (n) {
    var a = n[dl] || n, o = n[Og], s = n[Rg];
    if (s !== e || o !== i) {
      if (e == null || !i)
        return r[t] = a;
      n = r[t] = Wv(a, e, i === "debounce"), n[dl] = a, n[Og] = i, n[Rg] = e;
    }
    return n;
  }
}
function Wc(r, t) {
  var e = r[t];
  e && e[dl] && (e.clear && e.clear(), r[t] = e[dl]);
}
var mL = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return r;
  })()
), Ng = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "sausage", i;
    }
    return t.prototype.getDefaultShape = function() {
      return new mL();
    }, t.prototype.buildPath = function(e, i) {
      var n = i.cx, a = i.cy, o = Math.max(i.r0 || 0, 0), s = Math.max(i.r, 0), l = (s - o) * 0.5, u = o + l, f = i.startAngle, c = i.endAngle, h = i.clockwise, v = Math.PI * 2, d = h ? c - f < v : f - c < v;
      d || (f = c - (h ? v : -v));
      var p = Math.cos(f), m = Math.sin(f), g = Math.cos(c), y = Math.sin(c);
      d ? (e.moveTo(p * o + n, m * o + a), e.arc(p * u + n, m * u + a, l, -Math.PI + f, f, !h)) : e.moveTo(p * s + n, m * s + a), e.arc(n, a, s, f, c, !h), e.arc(g * u + n, y * u + a, l, c - Math.PI * 2, c - Math.PI, !h), o !== 0 && e.arc(n, a, o, c, f, h);
    }, t;
  })(dt)
);
function yL(r, t) {
  t = t || {};
  var e = t.isRoundCap;
  return function(i, n, a) {
    var o = n.position;
    if (!o || o instanceof Array)
      return Fs(i, n, a);
    var s = r(o), l = n.distance != null ? n.distance : 5, u = this.shape, f = u.cx, c = u.cy, h = u.r, v = u.r0, d = (h + v) / 2, p = u.startAngle, m = u.endAngle, g = (p + m) / 2, y = e ? Math.abs(h - v) / 2 : 0, _ = Math.cos, b = Math.sin, S = f + h * _(p), w = c + h * b(p), x = "left", T = "top";
    switch (s) {
      case "startArc":
        S = f + (v - l) * _(g), w = c + (v - l) * b(g), x = "center", T = "top";
        break;
      case "insideStartArc":
        S = f + (v + l) * _(g), w = c + (v + l) * b(g), x = "center", T = "bottom";
        break;
      case "startAngle":
        S = f + d * _(p) + Qo(p, l + y, !1), w = c + d * b(p) + jo(p, l + y, !1), x = "right", T = "middle";
        break;
      case "insideStartAngle":
        S = f + d * _(p) + Qo(p, -l + y, !1), w = c + d * b(p) + jo(p, -l + y, !1), x = "left", T = "middle";
        break;
      case "middle":
        S = f + d * _(g), w = c + d * b(g), x = "center", T = "middle";
        break;
      case "endArc":
        S = f + (h + l) * _(g), w = c + (h + l) * b(g), x = "center", T = "bottom";
        break;
      case "insideEndArc":
        S = f + (h - l) * _(g), w = c + (h - l) * b(g), x = "center", T = "top";
        break;
      case "endAngle":
        S = f + d * _(m) + Qo(m, l + y, !0), w = c + d * b(m) + jo(m, l + y, !0), x = "left", T = "middle";
        break;
      case "insideEndAngle":
        S = f + d * _(m) + Qo(m, -l + y, !0), w = c + d * b(m) + jo(m, -l + y, !0), x = "right", T = "middle";
        break;
      default:
        return Fs(i, n, a);
    }
    return i = i || {}, i.x = S, i.y = w, i.align = x, i.verticalAlign = T, i;
  };
}
function _L(r, t, e, i) {
  if (bt(i)) {
    r.setTextConfig({
      rotation: i
    });
    return;
  } else if (F(t)) {
    r.setTextConfig({
      rotation: 0
    });
    return;
  }
  var n = r.shape, a = n.clockwise ? n.startAngle : n.endAngle, o = n.clockwise ? n.endAngle : n.startAngle, s = (a + o) / 2, l, u = e(t);
  switch (u) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      l = s;
      break;
    case "startAngle":
    case "insideStartAngle":
      l = a;
      break;
    case "endAngle":
    case "insideEndAngle":
      l = o;
      break;
    default:
      r.setTextConfig({
        rotation: 0
      });
      return;
  }
  var f = Math.PI * 1.5 - l;
  u === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), r.setTextConfig({
    rotation: f
  });
}
function Qo(r, t, e) {
  return t * Math.sin(r) * (e ? -1 : 1);
}
function jo(r, t, e) {
  return t * Math.cos(r) * (e ? 1 : -1);
}
function bL(r, t, e) {
  var i = r.get("borderRadius");
  if (i == null)
    return {
      cornerRadius: 0
    };
  F(i) || (i = [i, i, i, i]);
  var n = Math.abs(t.r || 0 - t.r0 || 0);
  return {
    cornerRadius: G(i, function(a) {
      return Li(a, n);
    })
  };
}
var af = Math.max, of = Math.min, SL = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r.call(this) || this;
      return e.type = _n, e._isFirstFrame = !0, e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this._model = e, this._removeOnRenderedListener(n), this._updateDrawMode(e);
      var o = e.get("coordinateSystem");
      (o === "cartesian2d" || o === "polar") && (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, i, n) : this._renderNormal(e, i, n, a));
    }, t.prototype.incrementalPrepareRender = function(e) {
      this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
    }, t.prototype.incrementalRender = function(e, i) {
      this._progressiveEls = [], this._incrementalRenderLarge(e, i);
    }, t.prototype.eachRendered = function(e) {
      vo(this._progressiveEls || this.group, e);
    }, t.prototype._updateDrawMode = function(e) {
      var i = e.pipelineContext.large;
      (this._isLargeDraw == null || i !== this._isLargeDraw) && (this._isLargeDraw = i, this._clear());
    }, t.prototype._renderNormal = function(e, i, n, a) {
      var o = this.group, s = e.getData(), l = this._data, u = e.coordinateSystem, f = u.getBaseAxis(), c;
      u.type === "cartesian2d" ? c = f.isHorizontal() : u.type === "polar" && (c = f.dim === "angle");
      var h = e.isAnimationEnabled() ? e : null, v = wL(e, u);
      v && this._enableRealtimeSort(v, s, n);
      var d = e.get("clip", !0) || v, p = u.getArea();
      o.removeClipPath();
      var m = e.get("roundCap", !0), g = e.get("showBackground", !0), y = e.getModel("backgroundStyle"), _ = y.get("borderRadius") || 0, b = [], S = this._backgroundEls, w = a && a.isInitSort, x = a && a.type === "changeAxisOrder";
      function T(A) {
        var L = Jo[u.type](s, A);
        if (!L)
          return null;
        var I = IL(u, c, L);
        return I.useStyle(y.getItemStyle()), u.type === "cartesian2d" ? I.setShape("r", _) : I.setShape("cornerRadius", _), b[A] = I, I;
      }
      s.diff(l).add(function(A) {
        var L = s.getItemModel(A), I = Jo[u.type](s, A, L);
        if (I && (g && T(A), !(!s.hasValue(A) || !Hg[u.type](I)))) {
          var P = !1;
          d && (P = Bg[u.type](p, I));
          var E = Fg[u.type](e, s, A, I, c, h, f.model, !1, m);
          v && (E.forceLabelAnimation = !0), Vg(E, s, A, L, I, e, c, u.type === "polar"), w ? E.attr({
            shape: I
          }) : v ? zg(v, h, E, I, A, c, !1, !1) : je(E, {
            shape: I
          }, e, A), s.setItemGraphicEl(A, E), o.add(E), E.ignore = P;
        }
      }).update(function(A, L) {
        var I = s.getItemModel(A), P = Jo[u.type](s, A, I);
        if (P) {
          if (g) {
            var E = void 0;
            S.length === 0 ? E = T(L) : (E = S[L], E.useStyle(y.getItemStyle()), u.type === "cartesian2d" ? E.setShape("r", _) : E.setShape("cornerRadius", _), b[A] = E);
            var k = Jo[u.type](s, A), z = lb(c, k, u);
            Kt(E, {
              shape: z
            }, h, A);
          }
          var R = l.getItemGraphicEl(L);
          if (!s.hasValue(A) || !Hg[u.type](P)) {
            o.remove(R);
            return;
          }
          var $ = !1;
          d && ($ = Bg[u.type](p, P), $ && o.remove(R));
          var Y = R && (R.type === "sector" && m || R.type === "sausage" && !m);
          if (Y && (R && Ts(R, e, L), R = null), R ? l_(R) : R = Fg[u.type](e, s, A, P, c, h, f.model, !0, m), v && (R.forceLabelAnimation = !0), x) {
            var U = R.getTextContent();
            if (U) {
              var q = Kl(U);
              q.prevValue != null && (q.prevValue = q.value);
            }
          } else
            Vg(R, s, A, I, P, e, c, u.type === "polar");
          w ? R.attr({
            shape: P
          }) : v ? zg(v, h, R, P, A, c, !0, x) : Kt(R, {
            shape: P
          }, e, A, null), s.setItemGraphicEl(A, R), R.ignore = $, o.add(R);
        }
      }).remove(function(A) {
        var L = l.getItemGraphicEl(A);
        L && Ts(L, e, A);
      }).execute();
      var C = this._backgroundGroup || (this._backgroundGroup = new Lt());
      C.removeAll();
      for (var D = 0; D < b.length; ++D)
        C.add(b[D]);
      o.add(C), this._backgroundEls = b, this._data = s;
    }, t.prototype._renderLarge = function(e, i, n) {
      this._clear(), Ug(e, this.group), this._updateLargeClip(e);
    }, t.prototype._incrementalRenderLarge = function(e, i) {
      this._removeBackground(), Ug(i, this.group, this._progressiveEls, !0);
    }, t.prototype._updateLargeClip = function(e) {
      var i = e.get("clip", !0) && jM(e.coordinateSystem, !1, e), n = this.group;
      i ? n.setClipPath(i) : n.removeClipPath();
    }, t.prototype._enableRealtimeSort = function(e, i, n) {
      var a = this;
      if (i.count()) {
        var o = e.baseAxis;
        if (this._isFirstFrame)
          this._dispatchInitSort(i, e, n), this._isFirstFrame = !1;
        else {
          var s = function(l) {
            var u = i.getItemGraphicEl(l), f = u && u.shape;
            return f && // The result should be consistent with the initial sort by data value.
            // Do not support the case that both positive and negative exist.
            Math.abs(o.isHorizontal() ? f.height : f.width) || 0;
          };
          this._onRendered = function() {
            a._updateSortWithinSameData(i, s, o, n);
          }, n.getZr().on("rendered", this._onRendered);
        }
      }
    }, t.prototype._dataSort = function(e, i, n) {
      var a = [];
      return e.each(e.mapDimension(i.dim), function(o, s) {
        var l = n(s);
        l = l ?? NaN, a.push({
          dataIndex: s,
          mappedValue: l,
          ordinalNumber: o
        });
      }), a.sort(function(o, s) {
        return s.mappedValue - o.mappedValue;
      }), {
        ordinalNumbers: G(a, function(o) {
          return o.ordinalNumber;
        })
      };
    }, t.prototype._isOrderChangedWithinSameData = function(e, i, n) {
      for (var a = n.scale, o = e.mapDimension(n.dim), s = Number.MAX_VALUE, l = 0, u = a.getOrdinalMeta().categories.length; l < u; ++l) {
        var f = e.rawIndexOf(o, a.getRawOrdinalNumber(l)), c = f < 0 ? Number.MIN_VALUE : i(e.indexOfRawIndex(f));
        if (c > s)
          return !0;
        s = c;
      }
      return !1;
    }, t.prototype._isOrderDifferentInView = function(e, i) {
      for (var n = i.scale, a = n.getExtent(), o = Math.max(0, a[0]), s = Math.min(a[1], n.getOrdinalMeta().categories.length - 1); o <= s; ++o)
        if (e.ordinalNumbers[o] !== n.getRawOrdinalNumber(o))
          return !0;
    }, t.prototype._updateSortWithinSameData = function(e, i, n, a) {
      if (this._isOrderChangedWithinSameData(e, i, n)) {
        var o = this._dataSort(e, n, i);
        this._isOrderDifferentInView(o, n) && (this._removeOnRenderedListener(a), a.dispatchAction({
          type: "changeAxisOrder",
          componentType: n.dim + "Axis",
          axisId: n.index,
          sortInfo: o
        }));
      }
    }, t.prototype._dispatchInitSort = function(e, i, n) {
      var a = i.baseAxis, o = this._dataSort(e, a, function(s) {
        return e.get(e.mapDimension(i.otherAxis.dim), s);
      });
      n.dispatchAction({
        type: "changeAxisOrder",
        componentType: a.dim + "Axis",
        isInitSort: !0,
        axisId: a.index,
        sortInfo: o
      });
    }, t.prototype.remove = function(e, i) {
      this._clear(this._model), this._removeOnRenderedListener(i);
    }, t.prototype.dispose = function(e, i) {
      this._removeOnRenderedListener(i);
    }, t.prototype._removeOnRenderedListener = function(e) {
      this._onRendered && (e.getZr().off("rendered", this._onRendered), this._onRendered = null);
    }, t.prototype._clear = function(e) {
      var i = this.group, n = this._data;
      e && e.isAnimationEnabled() && n && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n.eachItemGraphicEl(function(a) {
        Ts(a, e, at(a).dataIndex);
      })) : i.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, t.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, t.type = _n, t;
  })(Pe)
), Bg = {
  cartesian2d: function(r, t) {
    var e = t.width < 0 ? -1 : 1, i = t.height < 0 ? -1 : 1;
    e < 0 && (t.x += t.width, t.width = -t.width), i < 0 && (t.y += t.height, t.height = -t.height);
    var n = r.x + r.width, a = r.y + r.height, o = af(t.x, r.x), s = of(t.x + t.width, n), l = af(t.y, r.y), u = of(t.y + t.height, a), f = s < o, c = u < l;
    return t.x = f && o > n ? s : o, t.y = c && l > a ? u : l, t.width = f ? 0 : s - o, t.height = c ? 0 : u - l, e < 0 && (t.x += t.width, t.width = -t.width), i < 0 && (t.y += t.height, t.height = -t.height), f || c;
  },
  polar: function(r, t) {
    var e = t.r0 <= t.r ? 1 : -1;
    if (e < 0) {
      var i = t.r;
      t.r = t.r0, t.r0 = i;
    }
    var n = of(t.r, r.r), a = af(t.r0, r.r0);
    t.r = n, t.r0 = a;
    var o = n - a < 0;
    if (e < 0) {
      var i = t.r;
      t.r = t.r0, t.r0 = i;
    }
    return o;
  }
}, Fg = {
  cartesian2d: function(r, t, e, i, n, a, o, s, l) {
    var u = new It({
      shape: O({}, i),
      z2: 1
    });
    if (u.__dataIndex = e, u.name = "item", a) {
      var f = u.shape, c = n ? "height" : "width";
      f[c] = 0;
    }
    return u;
  },
  polar: function(r, t, e, i, n, a, o, s, l) {
    var u = !n && l ? Ng : Fn, f = new u({
      shape: i,
      z2: 1
    });
    f.name = "item";
    var c = sb(n);
    if (f.calculateTextPosition = yL(c, {
      isRoundCap: u === Ng
    }), a) {
      var h = f.shape, v = n ? "r" : "endAngle", d = {};
      h[v] = n ? i.r0 : i.startAngle, d[v] = i[v], (s ? Kt : je)(f, {
        shape: d
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, a);
    }
    return f;
  }
};
function wL(r, t) {
  var e = r.get("realtimeSort", !0), i = t.getBaseAxis();
  if (e && i.type === "category" && t.type === "cartesian2d")
    return {
      baseAxis: i,
      otherAxis: t.getOtherAxis(i)
    };
}
function zg(r, t, e, i, n, a, o, s) {
  var l, u;
  a ? (u = {
    x: i.x,
    width: i.width
  }, l = {
    y: i.y,
    height: i.height
  }) : (u = {
    y: i.y,
    height: i.height
  }, l = {
    x: i.x,
    width: i.width
  }), s || (o ? Kt : je)(e, {
    shape: l
  }, t, n, null);
  var f = t ? r.baseAxis.model : null;
  (o ? Kt : je)(e, {
    shape: u
  }, f, n);
}
function $g(r, t) {
  for (var e = 0; e < t.length; e++)
    if (!isFinite(r[t[e]]))
      return !0;
  return !1;
}
var xL = ["x", "y", "width", "height"], TL = ["cx", "cy", "r", "startAngle", "endAngle"], Hg = {
  cartesian2d: function(r) {
    return !$g(r, xL);
  },
  polar: function(r) {
    return !$g(r, TL);
  }
}, Jo = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(r, t, e) {
    var i = r.getItemLayout(t);
    if (!i)
      return null;
    var n = e ? AL(e, i) : 0, a = i.width > 0 ? 1 : -1, o = i.height > 0 ? 1 : -1;
    return {
      x: i.x + a * n / 2,
      y: i.y + o * n / 2,
      width: i.width - a * n,
      height: i.height - o * n
    };
  },
  polar: function(r, t, e) {
    var i = r.getItemLayout(t);
    return {
      cx: i.cx,
      cy: i.cy,
      r0: i.r0,
      r: i.r,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      clockwise: i.clockwise
    };
  }
};
function CL(r) {
  return r.startAngle != null && r.endAngle != null && r.startAngle === r.endAngle;
}
function sb(r) {
  return /* @__PURE__ */ (function(t) {
    var e = t ? "Arc" : "Angle";
    return function(i) {
      switch (i) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return i + e;
        default:
          return i;
      }
    };
  })(r);
}
function Vg(r, t, e, i, n, a, o, s) {
  var l = t.getItemVisual(e, "style");
  if (s) {
    if (!a.get("roundCap")) {
      var f = r.shape, c = bL(i.getModel("itemStyle"), f);
      O(f, c), r.setShape(f);
    }
  } else {
    var u = i.get(["itemStyle", "borderRadius"]) || 0;
    r.setShape("r", u);
  }
  r.useStyle(l);
  var h = i.getShallow("cursor");
  h && r.attr("cursor", h);
  var v = s ? o ? n.r >= n.r0 ? "endArc" : "startArc" : n.endAngle >= n.startAngle ? "endAngle" : "startAngle" : o ? LL(n, a.coordinateSystem) : PL(n, a.coordinateSystem), d = zi(i);
  zn(r, d, {
    labelFetcher: a,
    labelDataIndex: e,
    defaultText: Ev(a.getData(), e),
    inheritColor: l.fill,
    defaultOpacity: l.opacity,
    defaultOutsidePosition: v
  });
  var p = r.getTextContent();
  if (s && p) {
    var m = i.get(["label", "position"]);
    r.textConfig.inside = m === "middle" ? !0 : null, _L(r, m === "outside" ? v : m, sb(o), i.get(["label", "rotate"]));
  }
  xA(p, d, a.getRawValue(e), function(y) {
    return l1(t, y);
  });
  var g = i.getModel(["emphasis"]);
  An(r, g.get("focus"), g.get("blurScope"), g.get("disabled")), js(r, i), CL(n) && (r.style.fill = "none", r.style.stroke = "none", M(r.states, function(y) {
    y.style && (y.style.fill = y.style.stroke = "none");
  }));
}
function AL(r, t) {
  var e = r.get(["itemStyle", "borderColor"]);
  if (!e || e === "none")
    return 0;
  var i = r.get(["itemStyle", "borderWidth"]) || 0, n = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
  return Math.min(i, n, a);
}
var DL = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
    }
    return r;
  })()
), Gg = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "largeBar", i;
    }
    return t.prototype.getDefaultShape = function() {
      return new DL();
    }, t.prototype.buildPath = function(e, i) {
      for (var n = i.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], l = [], u = this.barWidth, f = 0; f < n.length; f += 3)
        l[a] = u, l[o] = n[f + 2], s[a] = n[f + a], s[o] = n[f + o], e.rect(s[0], s[1], l[0], l[1]);
    }, t;
  })(dt)
);
function Ug(r, t, e, i) {
  var n = r.getData(), a = n.getLayout("valueAxisHorizontal") ? 1 : 0, o = n.getLayout("largeDataIndices"), s = n.getLayout("size"), l = r.getModel("backgroundStyle"), u = n.getLayout("largeBackgroundPoints"), f = i ? QT(r) : 0;
  if (u) {
    var c = new Gg({
      shape: {
        points: u
      },
      incremental: f,
      silent: !0,
      z2: 0
    });
    c.baseDimIdx = a, c.largeDataIndices = o, c.barWidth = s, c.useStyle(l.getItemStyle()), t.add(c), e && e.push(c);
  }
  var h = new Gg({
    shape: {
      points: n.getLayout("largePoints")
    },
    incremental: f,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(n.getVisual("style")), h.style.stroke = null, at(h).seriesIndex = r.seriesIndex, r.get("silent") || (h.on("mousedown", Wg), h.on("mousemove", Wg)), e && e.push(h);
}
var Wg = Wv(function(r) {
  var t = this, e = ML(t, r.offsetX, r.offsetY);
  at(t).dataIndex = e >= 0 ? e : null;
}, 30, !1);
function ML(r, t, e) {
  for (var i = r.baseDimIdx, n = 1 - i, a = r.shape.points, o = r.largeDataIndices, s = [], l = [], u = r.barWidth, f = 0, c = a.length / 3; f < c; f++) {
    var h = f * 3;
    if (l[i] = u, l[n] = a[h + 2], s[i] = a[h + i], s[n] = a[h + n], l[n] < 0 && (s[n] += l[n], l[n] = -l[n]), t >= s[0] && t <= s[0] + l[0] && e >= s[1] && e <= s[1] + l[1])
      return o[f];
  }
  return -1;
}
function lb(r, t, e) {
  if (go(e, "cartesian2d")) {
    var i = t, n = e.getArea();
    return {
      x: r ? i.x : n.x,
      y: r ? n.y : i.y,
      width: r ? i.width : n.width,
      height: r ? n.height : i.height
    };
  } else {
    var n = e.getArea(), a = t;
    return {
      cx: n.cx,
      cy: n.cy,
      r0: r ? n.r0 : a.r0,
      r: r ? n.r : a.r,
      startAngle: r ? a.startAngle : 0,
      endAngle: r ? a.endAngle : Math.PI * 2
    };
  }
}
function IL(r, t, e) {
  var i = r.type === "polar" ? Fn : It;
  return new i({
    shape: lb(t, e, r),
    silent: !0,
    z2: 0
  });
}
function LL(r, t) {
  if (r.height === 0) {
    var e = t.getOtherAxis(t.getBaseAxis());
    return e.inverse ? "bottom" : "top";
  }
  return r.height > 0 ? "bottom" : "top";
}
function PL(r, t) {
  if (r.width === 0) {
    var e = t.getOtherAxis(t.getBaseAxis());
    return e.inverse ? "left" : "right";
  }
  return r.width >= 0 ? "right" : "left";
}
function EL(r) {
  r.registerChartView(SL), r.registerSeriesModel(gL), r.registerLayout(r.PRIORITY.VISUAL.LAYOUT, hL(_n)), r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, vL(_n)), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, L1(_n)), r.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(t, e) {
    var i = t.componentType || "series";
    e.eachComponent({
      mainType: i,
      query: t
    }, function(n) {
      t.sortInfo && n.axis.setCategorySortInfo(t.sortInfo);
    });
  }), pL(r);
}
function Ki(r, t, e, i, n) {
  var a = r + t;
  e.isSilent(a) || i.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, l = o.option.selectedMap, u = n.selected, f = 0; f < u.length; f++)
      if (u[f].seriesIndex === s) {
        var c = o.getData(), h = Ei(c, n.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: F(h) ? c.getName(h[0]) : c.getName(h),
          selected: W(l) ? l : O({}, l)
        });
      }
  });
}
function kL(r, t, e) {
  r.on("selectchanged", function(i) {
    var n = e.getModel();
    i.isFromClick ? (Ki("map", "selectchanged", t, n, i), Ki("pie", "selectchanged", t, n, i)) : i.fromAction === "select" ? (Ki("map", "selected", t, n, i), Ki("pie", "selected", t, n, i)) : i.fromAction === "unselect" && (Ki("map", "unselected", t, n, i), Ki("pie", "unselected", t, n, i));
  });
}
var Qi = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
})(), RL = (function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Qi(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var i = t.offsetX, n = t.offsetY, a = i - this._x, o = n - this._y;
      this._x = i, this._y = n, e.drift(a, o, t), this.handler.dispatchToElement(new Qi(e, t), "drag", t.event);
      var s = this.handler.findHover(i, n, e).target, l = this._dropTarget;
      this._dropTarget = s, e !== s && (l && s !== l && this.handler.dispatchToElement(new Qi(l, t), "dragleave", t.event), s && s !== l && this.handler.dispatchToElement(new Qi(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new Qi(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Qi(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
})(), OL = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, sf = [], NL = tt.browser.firefox && +tt.browser.version.split(".")[0] < 39;
function Yc(r, t, e, i) {
  return e = e || {}, i ? Yg(r, t, e) : NL && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : Yg(r, t, e), e;
}
function Yg(r, t, e) {
  if (tt.domSupported && r.getBoundingClientRect) {
    var i = t.clientX, n = t.clientY;
    if ($_(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = i - a.left, e.zrY = n - a.top;
      return;
    } else if (Ic(sf, r, i, n)) {
      e.zrX = sf[0], e.zrY = sf[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function Yv(r) {
  return r || window.event;
}
function he(r, t, e) {
  if (t = Yv(t), t.zrX != null)
    return t;
  var i = t.type, n = i && i.indexOf("touch") >= 0;
  if (n) {
    var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && Yc(r, o, t, e);
  } else {
    Yc(r, t, t, e);
    var a = BL(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && OL.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function BL(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, i = r.deltaY;
  if (e == null || i == null)
    return t;
  var n = Math.abs(i !== 0 ? i : e), a = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * n * a;
}
function FL(r, t, e, i) {
  r.addEventListener(t, e, i);
}
function zL(r, t, e, i) {
  r.removeEventListener(t, e, i);
}
var ub = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, $L = (function() {
  function r() {
    this._track = [];
  }
  return r.prototype.recognize = function(t, e, i) {
    return this._doTrack(t, e, i), this._recognize(t);
  }, r.prototype.clear = function() {
    return this._track.length = 0, this;
  }, r.prototype._doTrack = function(t, e, i) {
    var n = t.touches;
    if (n) {
      for (var a = {
        points: [],
        touches: [],
        target: e,
        event: t
      }, o = 0, s = n.length; o < s; o++) {
        var l = n[o], u = Yc(i, l, {});
        a.points.push([u.zrX, u.zrY]), a.touches.push(l);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in lf)
      if (lf.hasOwnProperty(e)) {
        var i = lf[e](this._track, t);
        if (i)
          return i;
      }
  }, r;
})();
function Xg(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function HL(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var lf = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var i = (r[e - 1] || {}).points, n = (r[e - 2] || {}).points || i;
      if (n && n.length > 1 && i && i.length > 1) {
        var a = Xg(i) / Xg(n);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = HL(i);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
}, fb = "silent";
function VL(r, t, e) {
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
    stop: GL
  };
}
function GL() {
  ub(this.event);
}
var UL = (function(r) {
  N(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
})(er), ra = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
})(), WL = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], uf = new J(0, 0, 0, 0), cb = (function(r) {
  N(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new ra(0, 0), s.storage = e, s.painter = i, s.painterRoot = a, s._pointerSize = o, n = n || new UL(), s.proxy = null, s.setHandlerProxy(n), s._draggingMgr = new RL(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (M(WL, function(i) {
      e.on && e.on(i, this[i], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var i = e.zrX, n = e.zrY, a = hb(this, i, n), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var l = this._hovered = a ? new ra(i, n) : this.findHover(i, n), u = l.target, f = this.proxy;
    f.setCursor && f.setCursor(u ? u.cursor : "default"), s && u !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(l, "mousemove", e), u && u !== s && this.dispatchToElement(l, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var i = e.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new ra(0, 0);
  }, t.prototype.dispatch = function(e, i) {
    var n = this[e];
    n && n.call(this, i);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(e) {
    var i = this.proxy;
    i.setCursor && i.setCursor(e);
  }, t.prototype.dispatchToElement = function(e, i, n) {
    e = e || {};
    var a = e.target;
    if (!(a && a.silent)) {
      for (var o = "on" + i, s = VL(i, e, n); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(i, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(i, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(l) {
        typeof l[o] == "function" && l[o].call(l, s), l.trigger && l.trigger(i, s);
      }));
    }
  }, t.prototype.findHover = function(e, i, n) {
    var a = this.storage.getDisplayList(), o = new ra(e, i);
    if (qg(a, o, e, i, n), this._pointerSize && !o.target) {
      for (var s = [], l = this._pointerSize, u = l / 2, f = new J(e - u, i - u, l, l), c = a.length - 1; c >= 0; c--) {
        var h = a[c];
        h !== n && !h.ignore && !h.ignoreCoarsePointer && (!h.parent || !h.parent.ignoreCoarsePointer) && (uf.copy(h.getBoundingRect()), h.transform && uf.applyTransform(h.transform), uf.intersect(f) && s.push(h));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, p = Math.PI * 2, m = 0; m < u; m += v)
          for (var g = 0; g < p; g += d) {
            var y = e + m * Math.cos(g), _ = i + m * Math.sin(g);
            if (qg(s, o, y, _, n), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, i) {
    this._gestureMgr || (this._gestureMgr = new $L());
    var n = this._gestureMgr;
    i === "start" && n.clear();
    var a = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (i === "end" && n.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new ra();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
})(er);
M(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  cb.prototype[r] = function(t) {
    var e = t.zrX, i = t.zrY, n = hb(this, e, i), a, o;
    if ((r !== "mouseup" || !n) && (a = this.findHover(e, i), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Qw(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function YL(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var i = r, n = void 0, a = !1; i; ) {
      if (i.ignoreClip && (a = !0), !a) {
        var o = i.getClipPath();
        if (o && !o.contain(t, e))
          return !1;
      }
      i.silent && (n = !0);
      var s = i.__hostTarget;
      i = s ? i.ignoreHostSilent ? null : s : i.parent;
    }
    return n ? fb : !0;
  }
  return !1;
}
function qg(r, t, e, i, n) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== n && !o.ignore && (s = YL(o, e, i)) && (!t.topTarget && (t.topTarget = o), s !== fb)) {
      t.target = o;
      break;
    }
  }
}
function hb(r, t, e) {
  var i = r.painter;
  return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight();
}
var vb = 32, ia = 7;
function XL(r) {
  for (var t = 0; r >= vb; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function Zg(r, t, e, i) {
  var n = t + 1;
  if (n === e)
    return 1;
  if (i(r[n++], r[t]) < 0) {
    for (; n < e && i(r[n], r[n - 1]) < 0; )
      n++;
    qL(r, t, n);
  } else
    for (; n < e && i(r[n], r[n - 1]) >= 0; )
      n++;
  return n - t;
}
function qL(r, t, e) {
  for (e--; t < e; ) {
    var i = r[t];
    r[t++] = r[e], r[e--] = i;
  }
}
function Kg(r, t, e, i, n) {
  for (i === t && i++; i < e; i++) {
    for (var a = r[i], o = t, s = i, l; o < s; )
      l = o + s >>> 1, n(a, r[l]) < 0 ? s = l : o = l + 1;
    var u = i - o;
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
function ff(r, t, e, i, n, a) {
  var o = 0, s = 0, l = 1;
  if (a(r, t[e + n]) > 0) {
    for (s = i - n; l < s && a(r, t[e + n + l]) > 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s), o += n, l += n;
  } else {
    for (s = n + 1; l < s && a(r, t[e + n - l]) <= 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s);
    var u = o;
    o = n - l, l = n - u;
  }
  for (o++; o < l; ) {
    var f = o + (l - o >>> 1);
    a(r, t[e + f]) > 0 ? o = f + 1 : l = f;
  }
  return l;
}
function cf(r, t, e, i, n, a) {
  var o = 0, s = 0, l = 1;
  if (a(r, t[e + n]) < 0) {
    for (s = n + 1; l < s && a(r, t[e + n - l]) < 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s);
    var u = o;
    o = n - l, l = n - u;
  } else {
    for (s = i - n; l < s && a(r, t[e + n + l]) >= 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s), o += n, l += n;
  }
  for (o++; o < l; ) {
    var f = o + (l - o >>> 1);
    a(r, t[e + f]) < 0 ? l = f : o = f + 1;
  }
  return l;
}
function ZL(r, t) {
  var e = ia, i, n, a = 0, o = [];
  i = [], n = [];
  function s(v, d) {
    i[a] = v, n[a] = d, a += 1;
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      if (v >= 1 && n[v - 1] <= n[v] + n[v + 1] || v >= 2 && n[v - 2] <= n[v] + n[v - 1])
        n[v - 1] < n[v + 1] && v--;
      else if (n[v] > n[v + 1])
        break;
      f(v);
    }
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && n[v - 1] < n[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = i[v], p = n[v], m = i[v + 1], g = n[v + 1];
    n[v] = p + g, v === a - 3 && (i[v + 1] = i[v + 2], n[v + 1] = n[v + 2]), a--;
    var y = cf(r[m], r, d, p, 0, t);
    d += y, p -= y, p !== 0 && (g = ff(r[d + p - 1], r, m, g, g - 1, t), g !== 0 && (p <= g ? c(d, p, m, g) : h(d, p, m, g)));
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
    for (var S = e, w, x, T; ; ) {
      w = 0, x = 0, T = !1;
      do
        if (t(r[_], o[y]) < 0) {
          if (r[b++] = r[_++], x++, w = 0, --m === 0) {
            T = !0;
            break;
          }
        } else if (r[b++] = o[y++], w++, x = 0, --d === 1) {
          T = !0;
          break;
        }
      while ((w | x) < S);
      if (T)
        break;
      do {
        if (w = cf(r[_], o, y, d, 0, t), w !== 0) {
          for (g = 0; g < w; g++)
            r[b + g] = o[y + g];
          if (b += w, y += w, d -= w, d <= 1) {
            T = !0;
            break;
          }
        }
        if (r[b++] = r[_++], --m === 0) {
          T = !0;
          break;
        }
        if (x = ff(o[y], r, _, m, 0, t), x !== 0) {
          for (g = 0; g < x; g++)
            r[b + g] = r[_ + g];
          if (b += x, _ += x, m -= x, m === 0) {
            T = !0;
            break;
          }
        }
        if (r[b++] = o[y++], --d === 1) {
          T = !0;
          break;
        }
        S--;
      } while (w >= ia || x >= ia);
      if (T)
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
      var T = 0, C = 0, D = !1;
      do
        if (t(o[_], r[y]) < 0) {
          if (r[b--] = r[y--], T++, C = 0, --d === 0) {
            D = !0;
            break;
          }
        } else if (r[b--] = o[_--], C++, T = 0, --m === 1) {
          D = !0;
          break;
        }
      while ((T | C) < x);
      if (D)
        break;
      do {
        if (T = d - cf(o[_], r, v, d, d - 1, t), T !== 0) {
          for (b -= T, y -= T, d -= T, w = b + 1, S = y + 1, g = T - 1; g >= 0; g--)
            r[w + g] = r[S + g];
          if (d === 0) {
            D = !0;
            break;
          }
        }
        if (r[b--] = o[_--], --m === 1) {
          D = !0;
          break;
        }
        if (C = m - ff(r[y], o, 0, m, m - 1, t), C !== 0) {
          for (b -= C, _ -= C, m -= C, w = b + 1, S = _ + 1, g = 0; g < C; g++)
            r[w + g] = o[S + g];
          if (m <= 1) {
            D = !0;
            break;
          }
        }
        if (r[b--] = r[y--], --d === 0) {
          D = !0;
          break;
        }
        x--;
      } while (T >= ia || C >= ia);
      if (D)
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
function Es(r, t, e, i) {
  e || (e = 0), i || (i = r.length);
  var n = i - e;
  if (!(n < 2)) {
    var a = 0;
    if (n < vb) {
      a = Zg(r, e, i, t), Kg(r, e, i, e + a, t);
      return;
    }
    var o = ZL(r, t), s = XL(n);
    do {
      if (a = Zg(r, e, i, t), a < s) {
        var l = n;
        l > s && (l = s), Kg(r, e, e + l, e + a, t), a = l;
      }
      o.pushRun(e, a), o.mergeRuns(), n -= a, e += a;
    } while (n !== 0);
    o.forceMergeRuns();
  }
}
var Qg = !1;
function hf() {
  Qg || (Qg = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function jg(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var KL = (function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = jg;
  }
  return r.prototype.traverse = function(t, e) {
    for (var i = 0; i < this._roots.length; i++)
      this._roots[i].traverse(t, e);
  }, r.prototype.getDisplayList = function(t, e) {
    e = e || !1;
    var i = this._displayList;
    return (t || !i.length) && this.updateDisplayList(e), i;
  }, r.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var e = this._roots, i = this._displayList, n = 0, a = e.length; n < a; n++)
      this._updateAndAddDisplayable(e[n], null, t);
    i.length = this._displayListLen, Es(i, jg);
  }, r.prototype._updateAndAddDisplayable = function(t, e, i) {
    if (!(t.ignore && !i)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var n = t.getClipPath(), a = e && e.length, o = 0, s = t.__clipPaths;
      if (!t.ignoreClip && (a || n)) {
        if (s || (s = t.__clipPaths = []), a)
          for (var l = 0; l < e.length; l++)
            s[o++] = e[l];
        for (var u = n, f = t; u; )
          u.parent = f, u.updateTransform(), s[o++] = u, f = u, u = u.getClipPath();
      }
      if (s && (s.length = o), t.childrenRef) {
        for (var c = t.childrenRef(), h = 0; h < c.length; h++) {
          var v = c[h];
          t.__dirty && (v.__dirty |= ee), this._updateAndAddDisplayable(v, s, i);
        }
        t.__dirty = 0;
      } else {
        var d = t;
        isNaN(d.z) && (hf(), d.z = 0), isNaN(d.z2) && (hf(), d.z2 = 0), isNaN(d.zlevel) && (hf(), d.zlevel = 0), this._displayList[this._displayListLen++] = d;
      }
      var p = t.getDecalElement && t.getDecalElement();
      p && this._updateAndAddDisplayable(p, s, i);
      var m = t.getTextGuideLine();
      m && this._updateAndAddDisplayable(m, s, i);
      var g = t.getTextContent();
      g && this._updateAndAddDisplayable(g, s, i);
    }
  }, r.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, r.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var e = 0, i = t.length; e < i; e++)
        this.delRoot(t[e]);
      return;
    }
    var n = ut(this._roots, t);
    n >= 0 && this._roots.splice(n, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
})(), pl;
pl = tt.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
function hn() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var QL = (function(r) {
  N(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i._running = !1, i._time = 0, i._pausedTime = 0, i._pauseStart = 0, i._paused = !1, e = e || {}, i.stage = e.stage || {}, i;
  }
  return t.prototype.addClip = function(e) {
    e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
  }, t.prototype.addAnimator = function(e) {
    e.animation = this;
    var i = e.getClip();
    i && this.addClip(i);
  }, t.prototype.removeClip = function(e) {
    if (e.animation) {
      var i = e.prev, n = e.next;
      i ? i.next = n : this._head = n, n ? n.prev = i : this._tail = i, e.next = e.prev = e.animation = null;
    }
  }, t.prototype.removeAnimator = function(e) {
    var i = e.getClip();
    i && this.removeClip(i), e.animation = null;
  }, t.prototype.update = function(e) {
    for (var i = hn() - this._pausedTime, n = i - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(i, n);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = i, e || (this.trigger("frame", n), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function i() {
      e._running && (pl(i), !e._paused && e.update());
    }
    pl(i);
  }, t.prototype.start = function() {
    this._running || (this._time = hn(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = hn(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += hn() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var e = this._head; e; ) {
      var i = e.next;
      e.prev = e.next = e.animation = null, e = i;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(e, i) {
    i = i || {}, this.start();
    var n = new $h(e, i.loop);
    return this.addAnimator(n), n;
  }, t;
})(er), jL = 300, vf = tt.domSupported, df = (function() {
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
  }, i = G(r, function(n) {
    var a = n.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : n;
  });
  return {
    mouse: r,
    touch: t,
    pointer: i
  };
})(), Jg = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, tm = !1;
function Xc(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function JL(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function pf(r) {
  r && (r.zrByTouch = !0);
}
function tP(r, t) {
  return he(r.dom, new eP(r, t), !0);
}
function db(r, t) {
  for (var e = t, i = !1; e && e.nodeType !== 9 && !(i = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return i;
}
var eP = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.stopPropagation = Ht, this.stopImmediatePropagation = Ht, this.preventDefault = Ht, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
})(), Ie = {
  mousedown: function(r) {
    r = he(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = he(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = he(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = he(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    db(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    tm = !0, r = he(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    tm || (r = he(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = he(this.dom, r), pf(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), Ie.mousemove.call(this, r), Ie.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = he(this.dom, r), pf(r), this.handler.processGesture(r, "change"), Ie.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = he(this.dom, r), pf(r), this.handler.processGesture(r, "end"), Ie.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < jL && Ie.click.call(this, r);
  },
  pointerdown: function(r) {
    Ie.mousedown.call(this, r);
  },
  pointermove: function(r) {
    Xc(r) || Ie.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Ie.mouseup.call(this, r);
  },
  pointerout: function(r) {
    Xc(r) || Ie.mouseout.call(this, r);
  }
};
M(["click", "dblclick", "contextmenu"], function(r) {
  Ie[r] = function(t) {
    t = he(this.dom, t), this.trigger(r, t);
  };
});
var qc = {
  pointermove: function(r) {
    Xc(r) || qc.mousemove.call(this, r);
  },
  pointerup: function(r) {
    qc.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function rP(r, t) {
  var e = t.domHandlers;
  tt.pointerEventsSupported ? M(df.pointer, function(i) {
    ks(t, i, function(n) {
      e[i].call(r, n);
    });
  }) : (tt.touchEventsSupported && M(df.touch, function(i) {
    ks(t, i, function(n) {
      e[i].call(r, n), JL(t);
    });
  }), M(df.mouse, function(i) {
    ks(t, i, function(n) {
      n = Yv(n), t.touching || e[i].call(r, n);
    });
  }));
}
function iP(r, t) {
  tt.pointerEventsSupported ? M(Jg.pointer, e) : tt.touchEventsSupported || M(Jg.mouse, e);
  function e(i) {
    function n(a) {
      a = Yv(a), db(r, a.target) || (a = tP(r, a), t.domHandlers[i].call(r, a));
    }
    ks(t, i, n, { capture: !0 });
  }
}
function ks(r, t, e, i) {
  r.mounted[t] = e, r.listenerOpts[t] = i, FL(r.domTarget, t, e, i);
}
function gf(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && zL(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var em = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
})(), nP = (function(r) {
  N(t, r);
  function t(e, i) {
    var n = r.call(this) || this;
    return n.__pointerCapturing = !1, n.dom = e, n.painterRoot = i, n._localHandlerScope = new em(e, Ie), vf && (n._globalHandlerScope = new em(document, qc)), rP(n, n._localHandlerScope), n;
  }
  return t.prototype.dispose = function() {
    gf(this._localHandlerScope), vf && gf(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, vf && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var i = this._globalHandlerScope;
      e ? iP(this, i) : gf(i);
    }
  }, t;
})(er);
var Rs = {}, pb = {};
function aP(r) {
  delete pb[r];
}
function oP(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return Ws(r, 1) < lc;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, i = t.length, n = 0; n < i; n++)
      e += Ws(t[n].color, 1);
    return e /= i, e < lc;
  }
  return !1;
}
var sP = (function() {
  function r(t, e, i) {
    var n = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !1, this._darkMode = !1, i = i || {}, this.dom = e, this.id = t;
    var a = new KL(), o = i.renderer || "canvas";
    Rs[o] || (o = Tt(Rs)[0]), i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
    var s = new Rs[o](e, a, i, t), l = i.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var u = !tt.node && !tt.worker && !l ? new nP(s.getViewportRoot(), s.root) : null, f = i.useCoarsePointer, c = f == null || f === "auto" ? tt.touchEventsSupported : !!f, h = 44, v;
    c && (v = V(i.pointerSize, h)), this.handler = new cb(a, s, u, s.root, v), this.animation = new QL({
      stage: {
        update: l ? null : function() {
          return n._flush(!1);
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
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = oP(t));
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
    var e, i = hn(), n = this._needsRefresh, a = this._needsRefreshHover;
    (n || a) && (e = !0, this._refresh({
      animUpdate: t,
      refresh: n,
      refreshHover: a
    }));
    var o = hn();
    e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: o - i
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
  }, r.prototype.on = function(t, e, i) {
    return this._disposed || this.handler.on(t, e, i), this;
  }, r.prototype.off = function(t, e) {
    this._disposed || this.handler.off(t, e);
  }, r.prototype.trigger = function(t, e) {
    this._disposed || this.handler.trigger(t, e);
  }, r.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof Lt && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, r.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, aP(this.id));
  }, r;
})();
function rm(r, t) {
  var e = new sP(Qy(), r, t);
  return pb[e.id] = e, e;
}
function lP(r, t) {
  Rs[r] = t;
}
var gb = "";
typeof navigator < "u" && (gb = navigator.platform || "");
var ji = "rgba(0, 0, 0, 0.2)", mb = X.color.theme[0], uP = nc(mb, null, null, 0.9);
const yb = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: X.color.theme,
  gradientColor: [uP, mb],
  aria: {
    decal: {
      decals: [{
        color: ji,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: ji,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: ji,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: ji,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: ji,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: ji,
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
    fontFamily: gb.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
var fP = j();
function cP(r, t, e) {
  var i = fP.get(t);
  if (!i)
    return e;
  var n = i(r);
  return n ? e.concat(n) : e;
}
var ts, na, im, nm = "\0_ec_inner", hP = 1, Xv = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, i, n, a, o, s) {
      a = a || {}, this.option = null, this._theme = new Ct(a), this._locale = new Ct(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, i, n) {
      var a = sm(i);
      this._optionManager.setOption(e, n, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, i) {
      return this._resetOption(e, sm(i));
    }, t.prototype._resetOption = function(e, i) {
      var n = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        !this.option || e === "recreate" ? im(this, o) : (this.restoreData(), this._mergeOption(o, i)), n = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (n = !0, this._mergeOption(s, i));
      }
      if (!e || e === "recreate" || e === "media") {
        var l = a.getMediaOption(this);
        l.length && M(l, function(u) {
          n = !0, this._mergeOption(u, i);
        }, this);
      }
      return n;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, i) {
      var n = this.option, a = this._componentsMap, o = this._componentsCount, s = [], l = j(), u = i && i.replaceMergeMainTypeMap;
      PA(this), M(e, function(c, h) {
        c != null && (pt.hasClass(h) ? h && (s.push(h), l.set(h, !0)) : n[h] = n[h] == null ? nt(c) : ft(n[h], c, !0));
      }), u && u.each(function(c, h) {
        pt.hasClass(h) && !l.get(h) && (s.push(h), l.set(h, !0));
      }), pt.topologicalTravel(s, pt.getAllClassMainTypes(), f, this);
      function f(c) {
        var h = cP(this, c, Zt(e[c])), v = a.get(c), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? u && u.get(c) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), p = PT(v, h, d);
        FT(p, c, pt), n[c] = null, a.set(c, null), o.set(c, 0);
        var m = [], g = [], y = 0, _;
        M(p, function(b, S) {
          var w = b.existing, x = b.newOption;
          if (!x)
            w && (w.mergeOption({}, this), w.optionUpdated({}, !1));
          else {
            var T = c === "series", C = pt.getClass(
              c,
              b.keyInfo.subType,
              !T
              // Give a more detailed warn later if series don't exists
            );
            if (!C)
              return;
            if (c === "tooltip") {
              if (_)
                return;
              _ = !0;
            }
            if (w && w.constructor === C)
              w.name = b.keyInfo.name, w.mergeOption(x, this), w.optionUpdated(x, !1);
            else {
              var D = O({
                componentIndex: S
              }, b.keyInfo);
              w = new C(x, this, this, D), O(w, D), b.brandNew && (w.__requireNewView = !0), w.init(x, this, this), w.optionUpdated(null, !0);
            }
          }
          w ? (m.push(w.option), g.push(w), y++) : (m.push(void 0), g.push(void 0));
        }, this), n[c] = m, a.set(c, g), o.set(c, y), c === "series" && ts(this);
      }
      this._seriesIndices || ts(this);
    }, t.prototype.getOption = function() {
      var e = nt(this.option);
      return M(e, function(i, n) {
        if (pt.hasClass(n)) {
          for (var a = Zt(i), o = a.length, s = !1, l = o - 1; l >= 0; l--)
            a[l] && !Ha(a[l]) ? s = !0 : (a[l] = null, !s && o--);
          a.length = o, e[n] = a;
        }
      }), delete e[nm], e;
    }, t.prototype.setTheme = function(e) {
      this._theme = new Ct(e), this._resetOption("recreate", null);
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(e) {
      this._payload = e;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(e, i) {
      var n = this._componentsMap.get(e);
      if (n) {
        var a = n[i || 0];
        if (a)
          return a;
        if (i == null) {
          for (var o = 0; o < n.length; o++)
            if (n[o])
              return n[o];
        }
      }
    }, t.prototype.queryComponents = function(e) {
      var i = e.mainType;
      if (!i)
        return [];
      var n = e.index, a = e.id, o = e.name, s = this._componentsMap.get(i);
      if (!s || !s.length)
        return [];
      var l;
      return n != null ? (l = [], M(Zt(n), function(u) {
        s[u] && l.push(s[u]);
      })) : a != null ? l = am("id", a, s) : o != null ? l = am("name", o, s) : l = Rt(s, function(u) {
        return !!u;
      }), om(l, e);
    }, t.prototype.findComponents = function(e) {
      var i = e.query, n = e.mainType, a = s(i), o = a ? this.queryComponents(a) : Rt(this._componentsMap.get(n), function(u) {
        return !!u;
      });
      return l(om(o, e));
      function s(u) {
        var f = n + "Index", c = n + "Id", h = n + "Name";
        return u && (u[f] != null || u[c] != null || u[h] != null) ? {
          mainType: n,
          // subType will be filtered finally.
          index: u[f],
          id: u[c],
          name: u[h]
        } : null;
      }
      function l(u) {
        return e.filter ? Rt(u, e.filter) : u;
      }
    }, t.prototype.eachComponent = function(e, i, n) {
      var a = this._componentsMap;
      if (Z(e)) {
        var o = i, s = e;
        a.each(function(c, h) {
          for (var v = 0; c && v < c.length; v++) {
            var d = c[v];
            d && s.call(o, h, d, d.componentIndex);
          }
        });
      } else
        for (var l = W(e) ? a.get(e) : K(e) ? this.findComponents(e) : null, u = 0; l && u < l.length; u++) {
          var f = l[u];
          f && i.call(n, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var i = Ke(e, null);
      return Rt(this._componentsMap.get("series"), function(n) {
        return !!n && i != null && n.name === i;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return Rt(this._componentsMap.get("series"), function(i) {
        return !!i && i.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return Rt(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, i) {
      na(this), M(this._seriesIndices, function(n) {
        var a = this._componentsMap.get("series")[n];
        e.call(i, a, n);
      }, this);
    }, t.prototype.eachRawSeries = function(e, i) {
      M(this._componentsMap.get("series"), function(n) {
        n && e.call(i, n, n.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, i, n) {
      na(this), M(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && i.call(n, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, i, n) {
      return M(this.getSeriesByType(e), i, n);
    }, t.prototype.isSeriesFiltered = function(e) {
      return na(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, i) {
      na(this);
      var n = [];
      M(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(i, o, a) && n.push(a);
      }, this), this._seriesIndices = n, this._seriesIndicesMap = j(n);
    }, t.prototype.restoreData = function(e) {
      ts(this);
      var i = this._componentsMap, n = [];
      i.each(function(a, o) {
        pt.hasClass(o) && n.push(o);
      }), pt.topologicalTravel(n, pt.getAllClassMainTypes(), function(a) {
        M(i.get(a), function(o) {
          o && (a !== "series" || !vP(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = (function() {
      ts = function(e) {
        var i = e._seriesIndices = [];
        M(e._componentsMap.get("series"), function(n) {
          n && i.push(n.componentIndex);
        }), e._seriesIndicesMap = j(i);
      }, na = function(e) {
      }, im = function(e, i) {
        e.option = {}, e.option[nm] = hP, e._componentsMap = j({
          series: []
        }), e._componentsCount = j();
        var n = i.aria;
        K(n) && n.enabled == null && (n.enabled = !0), dP(i, e._theme.option), ft(i, yb, !1), e._mergeOption(i, null);
      };
    })(), t;
  })(Ct)
);
function vP(r, t) {
  if (t) {
    var e = t.seriesIndex, i = t.seriesId, n = t.seriesName;
    return e != null && r.componentIndex !== e || i != null && r.id !== i || n != null && r.name !== n;
  }
}
function dP(r, t) {
  var e = r.color && !r.colorLayer;
  M(t, function(i, n) {
    n === "colorLayer" && e || n === "color" && r.color || pt.hasClass(n) || (typeof i == "object" ? r[n] = r[n] ? ft(r[n], i, !1) : nt(i) : r[n] == null && (r[n] = i));
  });
}
function am(r, t, e) {
  if (F(t)) {
    var i = j();
    return M(t, function(a) {
      if (a != null) {
        var o = Ke(a, null);
        o != null && i.set(a, !0);
      }
    }), Rt(e, function(a) {
      return a && i.get(a[r]);
    });
  } else {
    var n = Ke(t, null);
    return Rt(e, function(a) {
      return a && n != null && a[r] === n;
    });
  }
}
function om(r, t) {
  return t.hasOwnProperty("subType") ? Rt(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function sm(r) {
  var t = j();
  return r && M(Zt(r.replaceMerge), function(e) {
    t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
Re(Xv, Mv);
var pP = /^(min|max)?(.+)$/, gP = (
  /** @class */
  (function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, i) {
      t && (M(Zt(t.series), function(o) {
        o && o.data && ie(o.data) && Zf(o.data);
      }), M(Zt(t.dataset), function(o) {
        o && o.source && ie(o.source) && Zf(o.source);
      })), t = nt(t);
      var n = this._optionBackup, a = mP(t, e, !n);
      this._newBaseOption = a.baseOption, n ? (a.timelineOptions.length && (n.timelineOptions = a.timelineOptions), a.mediaList.length && (n.mediaList = a.mediaList), a.mediaDefault && (n.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], nt(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, i = this._timelineOptions;
      if (i.length) {
        var n = t.getComponent("timeline");
        n && (e = nt(
          // FIXME:TS as TimelineModel or quivlant interface
          i[n.getCurrentIndex()]
        ));
      }
      return e;
    }, r.prototype.getMediaOption = function(t) {
      var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!n.length && !a)
        return s;
      for (var l = 0, u = n.length; l < u; l++)
        yP(n[l].query, e, i) && o.push(l);
      return !o.length && a && (o = [-1]), o.length && !bP(o, this._currentMediaIndices) && (s = G(o, function(f) {
        return nt(f === -1 ? a.option : n[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  })()
);
function mP(r, t, e) {
  var i = [], n, a, o = r.baseOption, s = r.timeline, l = r.options, u = r.media, f = !!r.media, c = !!(l || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((c || f) && (r.options = r.media = null), a = r), f && F(u) && M(u, function(v) {
    v && v.option && (v.query ? i.push(v) : n || (n = v));
  }), h(a), M(l, function(v) {
    return h(v);
  }), M(i, function(v) {
    return h(v.option);
  });
  function h(v) {
    M(t, function(d) {
      d(v, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: l || [],
    mediaDefault: n,
    mediaList: i
  };
}
function yP(r, t, e) {
  var i = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, n = !0;
  return M(r, function(a, o) {
    var s = o.match(pP);
    if (!(!s || !s[1] || !s[2])) {
      var l = s[1], u = s[2].toLowerCase();
      _P(i[u], a, l) || (n = !1);
    }
  }), n;
}
function _P(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function bP(r, t) {
  return r.join(",") === t.join(",");
}
var De = M, Ja = K, lm = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function mf(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, i = lm.length; e < i; e++) {
      var n = lm[e], a = t.normal, o = t.emphasis;
      a && a[n] && (r[n] = r[n] || {}, r[n].normal ? ft(r[n].normal, a[n]) : r[n].normal = a[n], a[n] = null), o && o[n] && (r[n] = r[n] || {}, r[n].emphasis ? ft(r[n].emphasis, o[n]) : r[n].emphasis = o[n], o[n] = null);
    }
}
function $t(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var i = r[t].normal, n = r[t].emphasis;
    i && (e ? (r[t].normal = r[t].emphasis = null, yt(r[t], i)) : r[t] = i), n && (r.emphasis = r.emphasis || {}, r.emphasis[t] = n, n.focus && (r.emphasis.focus = n.focus), n.blurScope && (r.emphasis.blurScope = n.blurScope));
  }
}
function ga(r) {
  $t(r, "itemStyle"), $t(r, "lineStyle"), $t(r, "areaStyle"), $t(r, "label"), $t(r, "labelLine"), $t(r, "upperLabel"), $t(r, "edgeLabel");
}
function Dt(r, t) {
  var e = Ja(r) && r[t], i = Ja(e) && e.textStyle;
  if (i)
    for (var n = 0, a = dp.length; n < a; n++) {
      var o = dp[n];
      i.hasOwnProperty(o) && (e[o] = i[o]);
    }
}
function ve(r) {
  r && (ga(r), Dt(r, "label"), r.emphasis && Dt(r.emphasis, "label"));
}
function SP(r) {
  if (Ja(r)) {
    mf(r), ga(r), Dt(r, "label"), Dt(r, "upperLabel"), Dt(r, "edgeLabel"), r.emphasis && (Dt(r.emphasis, "label"), Dt(r.emphasis, "upperLabel"), Dt(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (mf(t), ve(t));
    var e = r.markLine;
    e && (mf(e), ve(e));
    var i = r.markArea;
    i && ve(i);
    var n = r.data;
    if (r.type === "graph") {
      n = n || r.nodes;
      var a = r.links || r.edges;
      if (a && !ie(a))
        for (var o = 0; o < a.length; o++)
          ve(a[o]);
      M(r.categories, function(u) {
        ga(u);
      });
    }
    if (n && !ie(n))
      for (var o = 0; o < n.length; o++)
        ve(n[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        ve(s[o]);
    if (e = r.markLine, e && e.data)
      for (var l = e.data, o = 0; o < l.length; o++)
        F(l[o]) ? (ve(l[o][0]), ve(l[o][1])) : ve(l[o]);
    r.type === "gauge" ? (Dt(r, "axisLabel"), Dt(r, "title"), Dt(r, "detail")) : r.type === "treemap" ? ($t(r.breadcrumb, "itemStyle"), M(r.levels, function(u) {
      ga(u);
    })) : r.type === "tree" && ga(r.leaves);
  }
}
function ar(r) {
  return F(r) ? r : r ? [r] : [];
}
function um(r) {
  return (F(r) ? r[0] : r) || {};
}
function wP(r, t) {
  De(ar(r.series), function(i) {
    Ja(i) && SP(i);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), De(e, function(i) {
    De(ar(r[i]), function(n) {
      n && (Dt(n, "axisLabel"), Dt(n.axisPointer, "label"));
    });
  }), De(ar(r.parallel), function(i) {
    var n = i && i.parallelAxisDefault;
    Dt(n, "axisLabel"), Dt(n && n.axisPointer, "label");
  }), De(ar(r.calendar), function(i) {
    $t(i, "itemStyle"), Dt(i, "dayLabel"), Dt(i, "monthLabel"), Dt(i, "yearLabel");
  }), De(ar(r.radar), function(i) {
    Dt(i, "name"), i.name && i.axisName == null && (i.axisName = i.name, delete i.name), i.nameGap != null && i.axisNameGap == null && (i.axisNameGap = i.nameGap, delete i.nameGap);
  }), De(ar(r.geo), function(i) {
    Ja(i) && (ve(i), De(ar(i.regions), function(n) {
      ve(n);
    }));
  }), De(ar(r.timeline), function(i) {
    ve(i), $t(i, "label"), $t(i, "itemStyle"), $t(i, "controlStyle", !0);
    var n = i.data;
    F(n) && M(n, function(a) {
      K(a) && ($t(a, "label"), $t(a, "itemStyle"));
    });
  }), De(ar(r.toolbox), function(i) {
    $t(i, "iconStyle"), De(i.feature, function(n) {
      $t(n, "iconStyle");
    });
  }), Dt(um(r.axisPointer), "label"), Dt(um(r.tooltip).axisPointer, "label");
}
function xP(r, t) {
  for (var e = t.split(","), i = r, n = 0; n < e.length && (i = i && i[e[n]], i != null); n++)
    ;
  return i;
}
function TP(r, t, e, i) {
  for (var n = t.split(","), a = r, o, s = 0; s < n.length - 1; s++)
    o = n[s], a[o] == null && (a[o] = {}), a = a[o];
  a[n[s]] == null && (a[n[s]] = e);
}
function fm(r) {
  r && M(CP, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var CP = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], AP = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], yf = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function aa(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < yf.length; e++) {
      var i = yf[e][1], n = yf[e][0];
      t[i] != null && (t[n] = t[i]);
    }
}
function cm(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (r.edgeDistance = r.margin);
}
function hm(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay);
}
function DP(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (r.emphasis.focus = "adjacency"));
}
function _b(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && _b(r[e].children, t);
}
function bb(r, t) {
  wP(r, t), r.series = Zt(r.series), M(r.series, function(e) {
    if (K(e)) {
      var i = e.type;
      if (i === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow);
      else if (i === "pie" || i === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise), cm(e.label);
        var n = e.data;
        if (n && !ie(n))
          for (var a = 0; a < n.length; a++)
            cm(n[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (e.emphasis.scaleSize = e.hoverOffset));
      } else if (i === "gauge") {
        var o = xP(e, "pointer.color");
        o != null && TP(e, "itemStyle.color", o);
      } else if (i === "bar") {
        aa(e), aa(e.backgroundStyle), aa(e.emphasis);
        var n = e.data;
        if (n && !ie(n))
          for (var a = 0; a < n.length; a++)
            typeof n[a] == "object" && (aa(n[a]), aa(n[a] && n[a].emphasis));
      } else if (i === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s)), hm(e), _b(e.data, hm);
      } else i === "graph" || i === "sankey" ? DP(e) : i === "map" && (e.mapType && !e.map && (e.map = e.mapType), e.mapLocation && yt(e, e.mapLocation));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (e.emphasis.scale = e.hoverAnimation)), fm(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), M(AP, function(e) {
    var i = r[e];
    i && (F(i) || (i = [i]), M(i, function(n) {
      fm(n);
    }));
  });
}
var MP = Xh(IP);
function IP(r) {
  var t = j();
  r.eachSeries(function(e) {
    var i = e.get("stack");
    if (i) {
      var n = t.get(i) || t.set(i, []), a = e.getData(), o = {
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
      n.push(o);
    }
  }), t.each(function(e) {
    if (e.length !== 0) {
      var i = e[0].seriesModel, n = i.get("stackOrder") || "seriesAsc";
      n === "seriesDesc" && e.reverse(), M(e, function(a, o) {
        a.data.setCalculationInfo("stackedOnSeries", o > 0 ? e[o - 1].seriesModel : null);
      }), LP(e);
    }
  });
}
function LP(r) {
  M(r, function(t, e) {
    var i = [], n = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, l = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(u, f, c) {
      var h = o.get(t.stackedDimension, c);
      if (isNaN(h))
        return n;
      var v, d;
      s ? d = o.getRawIndex(c) : v = o.get(t.stackedByDimension, c);
      for (var p = NaN, m = e - 1; m >= 0; m--) {
        var g = r[m];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, v)), d >= 0) {
          var y = g.data.getByRawIndex(g.stackResultDimension, d);
          if (l === "all" || l === "positive" && y > 0 || l === "negative" && y < 0 || l === "samesign" && h >= 0 && y > 0 || l === "samesign" && h <= 0 && y < 0) {
            h = xT(h, y), p = y;
            break;
          }
        }
      }
      return i[0] = h, i[1] = p, i;
    });
  });
}
var ke = (
  /** @class */
  (function() {
    function r() {
      this.group = new Lt(), this.uid = jl("viewComponent");
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, i, n) {
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, i, n) {
    }, r.prototype.updateLayout = function(t, e, i, n) {
    }, r.prototype.updateVisual = function(t, e, i, n) {
    }, r.prototype.toggleBlurSeries = function(t, e, i) {
    }, r.prototype.eachRendered = function(t) {
      var e = this.group;
      e && e.traverse(t);
    }, r;
  })()
);
Oh(ke);
Rl(ke);
var vm = ht(), dm = {
  itemStyle: Fa(y_, !0),
  lineStyle: Fa(m_, !0)
}, PP = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function Sb(r, t) {
  var e = r.visualStyleMapper || dm[t];
  return e || (console.warn("Unknown style type '" + t + "'."), dm.itemStyle);
}
function wb(r, t) {
  var e = r.visualDrawType || PP[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var EP = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = r.getModel(i), a = Sb(r, i), o = a(n), s = n.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var l = wb(r, i), u = o[l], f = Z(u) ? u : null, c = o.fill === "auto" || o.stroke === "auto";
    if (!o[l] || f || c) {
      var h = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[l] || (o[l] = h, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Z(o.fill) ? h : o.fill, o.stroke = o.stroke === "auto" || Z(o.stroke) ? h : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", l), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var p = r.getDataParams(d), m = O({}, o);
          m[l] = f(p), v.setItemVisual(d, "style", m);
        }
      };
  }
}, oa = new Ct(), kP = {
  createOnAllSeries: !0,
  reset: function(r, t) {
    if (!r.ignoreStyleOnData) {
      var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = Sb(r, i), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var l = o.getRawDataItem(s);
          if (l && l[i]) {
            oa.option = l[i];
            var u = n(oa), f = o.ensureUniqueItemVisual(s, "style");
            O(f, u), oa.option.decal && (o.setItemVisual(s, "decal", oa.option.decal), oa.option.decal.dirty = !0), a in u && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, RP = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = j();
    r.eachSeries(function(e) {
      if (!e.isColorBySeries()) {
        var i = e.type + "-" + e.getColorBy();
        vm(e).scope = t.get(i) || t.set(i, {});
      }
    }), r.eachSeries(function(e) {
      if (!e.isColorBySeries()) {
        var i = e.getRawData(), n = {}, a = e.getData(), o = vm(e).scope, s = e.visualStyleAccessPath || "itemStyle", l = wb(e, s);
        a.each(function(u) {
          var f = a.getRawIndex(u);
          n[f] = u;
        }), i.each(function(u) {
          var f = n[u], c = a.getItemVisual(f, "colorFromPalette");
          if (c) {
            var h = a.ensureUniqueItemVisual(f, "style"), v = i.getName(u) || u + "", d = i.count();
            h[l] = e.getColorFromPalette(v, o, d);
          }
        });
      }
    });
  }
}, es = Math.PI;
function OP(r, t) {
  t = t || {}, yt(t, {
    text: "loading",
    textColor: X.color.primary,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255,255,255,0.8)",
    showSpinner: !0,
    color: X.color.theme[0],
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var e = new Lt(), i = new It({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(i);
  var n = new ne({
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
  }), a = new It({
    style: {
      fill: "none"
    },
    textContent: n,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  e.add(a);
  var o;
  return t.showSpinner && (o = new Yl({
    shape: {
      startAngle: -es / 2,
      endAngle: -es / 2 + 0.1,
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
    endAngle: es * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: es * 3 / 2
  }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
    var s = n.getBoundingRect().width, l = t.showSpinner ? t.spinnerRadius : 0, u = (r.getWidth() - l * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : l), f = r.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: u,
      cy: f
    }), a.setShape({
      x: u - l,
      y: f - l,
      width: l * 2,
      height: l * 2
    }), i.setShape({
      x: 0,
      y: 0,
      width: r.getWidth(),
      height: r.getHeight()
    });
  }, e.resize(), e;
}
var xb = (
  /** @class */
  (function() {
    function r(t, e, i, n) {
      this._stageTaskMap = j(), this.ecInstance = t, this.api = e, i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice(), this._allHandlers = i.concat(n);
    }
    return r.prototype.restoreData = function(t, e) {
      t.restoreData(e), this._stageTaskMap.each(function(i) {
        var n = i.overallTask;
        n && n.dirty();
      });
    }, r.prototype.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var i = this._pipelineMap.get(t.__pipeline.id), n = i.context, a = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex, o = a ? i.step : null, s = n && n.modDataCount, l = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: l,
          modDataCount: s
        };
      }
    }, r.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, r.prototype.updateStreamModes = function(t, e) {
      var i = this._pipelineMap.get(t.uid), n = t.__preparePipelineContext ? t.__preparePipelineContext(e, i) : F0(t, e, i);
      t.pipelineContext = i.context = n;
    }, r.prototype.restorePipelines = function(t, e) {
      var i = this, n = i._pipelineMap = j();
      e.eachSeries(function(a) {
        var o = t.painter.type === "canvas" && a.getProgressive(), s = a.uid;
        n.set(s, {
          id: s,
          head: null,
          tail: null,
          threshold: a.getProgressiveThreshold(),
          progressiveEnabled: o && !(a.preventIncremental && a.preventIncremental()),
          blockIndex: -1,
          step: Math.round(o || 700),
          count: 0
        }), i._pipe(a, a.dataTask);
      });
    }, r.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, e = this.api.getModel(), i = this.api;
      M(this._allHandlers, function(n) {
        var a = t.get(n.uid) || t.set(n.uid, {}), o = "";
        vr(!(n.reset && n.overallReset), o), n.reset && this._createSeriesStageTask(n, a, e, i), n.overallReset && this._createOverallStageTask(n, a, e, i);
      }, this);
    }, r.prototype.prepareView = function(t, e, i, n) {
      var a = t.renderTask, o = a.context;
      o.model = e, o.ecModel = i, o.api = n, a.__block = !t.incrementalPrepareRender, this._pipe(e, a);
    }, r.prototype.performDataProcessorTasks = function(t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, {
        block: !0
      });
    }, r.prototype.performVisualTasks = function(t, e, i) {
      this._performStageTasks(this._visualHandlers, t, e, i);
    }, r.prototype._performStageTasks = function(t, e, i, n) {
      n = n || {};
      var a = !1, o = this;
      M(t, function(l, u) {
        if (!(n.visualType && n.visualType !== l.visualType)) {
          var f = o._stageTaskMap.get(l.uid), c = f.seriesTaskMap, h = f.overallTask;
          if (h) {
            var v, d = h.agentStubMap;
            d.each(function(m) {
              s(n, m) && (m.dirty(), v = !0);
            }), v && h.dirty(), o.updatePayload(h, i);
            var p = o.getPerformArgs(h, n.block);
            d.each(function(m) {
              m.perform(p);
            }), h.perform(p) && (a = !0);
          } else c && c.each(function(m, g) {
            s(n, m) && m.dirty();
            var y = o.getPerformArgs(m, n.block);
            y.skip = !l.performRawSeries && e.isSeriesFiltered(m.context.model), o.updatePayload(m, i), m.perform(y) && (a = !0);
          });
        }
      });
      function s(l, u) {
        return l.setDirty && (!l.dirtyMap || l.dirtyMap.get(u.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, r.prototype.performSeriesTasks = function(t) {
      var e;
      t.eachSeries(function(i) {
        e = i.dataTask.perform() || e;
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
    }, r.prototype._createSeriesStageTask = function(t, e, i, n) {
      var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = j(), l = t.seriesType, u = t.getTargetSeries;
      t.createOnAllSeries ? i.eachRawSeries(f) : l ? i.eachRawSeriesByType(l, f) : u && u(i, n).each(f);
      function f(c) {
        var h = c.uid, v = s.set(h, o && o.get(h) || Ia({
          plan: $P,
          reset: HP,
          count: GP
        }));
        v.context = {
          model: c,
          ecModel: i,
          api: n,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(c, v);
      }
    }, r.prototype._createOverallStageTask = function(t, e, i, n) {
      var a = this, o = e.overallTask = e.overallTask || Ia({
        reset: NP
      });
      o.context = {
        ecModel: i,
        api: n,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, l = o.agentStubMap = j(), u = t.seriesType, f = t.getTargetSeries, c = t.dirtyOnOverallProgress, h = !1, v = "";
      vr(!t.createOnAllSeries, v), u ? i.eachRawSeriesByType(u, d) : f ? f(i, n).each(d) : M(i.getSeries(), d);
      function d(p) {
        var m = p.uid, g = l.set(m, s && s.get(m) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (h = !0, Ia({
          reset: BP,
          onDirty: zP
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
      var i = t.uid, n = this._pipelineMap.get(i);
      !n.head && (n.head = e), n.tail && n.tail.pipe(e), n.tail = e, e.__idxInPipeline = n.count++, e.__pipeline = n;
    }, r.wrapStageHandler = function(t, e) {
      return Z(t) && (t = {
        overallReset: t,
        seriesType: UP(t)
      }), t.uid = jl("stageHandler"), e && (t.visualType = e), t;
    }, r;
  })()
);
function NP(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function BP(r) {
  return r.dirtyOnOverallProgress && FP;
}
function FP() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function zP() {
  this.agent && this.agent.dirty();
}
function $P(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function HP(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = Zt(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? G(t, function(e, i) {
    return Tb(i);
  }) : VP;
}
var VP = Tb(0);
function Tb(r) {
  return function(t, e) {
    var i = e.data, n = e.resetDefines[r];
    if (n && n.dataEach)
      for (var a = t.start; a < t.end; a++)
        n.dataEach(i, a);
    else n && n.progress && n.progress(t, i);
  };
}
function GP(r) {
  return r.data.count();
}
function UP(r) {
  gl = null;
  try {
    r(to, Cb);
  } catch {
  }
  return gl;
}
var to = {}, Cb = {}, gl;
Ab(to, Xv);
Ab(Cb, V0);
to.eachSeriesByType = to.eachRawSeriesByType = function(r) {
  gl = r;
};
to.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (gl = r.subType);
};
function Ab(r, t) {
  for (var e in t.prototype)
    r[e] = Ht;
}
var B = X.darkColor, pm = B.background, sa = function() {
  return {
    axisLine: {
      lineStyle: {
        color: B.axisLine
      }
    },
    splitLine: {
      lineStyle: {
        color: B.axisSplitLine
      }
    },
    splitArea: {
      areaStyle: {
        color: [B.backgroundTint, B.backgroundTransparent]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: B.axisMinorSplitLine
      }
    },
    axisLabel: {
      color: B.axisLabel
    },
    axisName: {}
  };
}, gm = {
  label: {
    color: B.secondary
  },
  itemStyle: {
    borderColor: B.borderTint
  },
  dividerLineStyle: {
    color: B.border
  }
}, Db = {
  darkMode: !0,
  color: B.theme,
  backgroundColor: pm,
  axisPointer: {
    lineStyle: {
      color: B.border
    },
    crossStyle: {
      color: B.borderShade
    },
    label: {
      color: B.tertiary
    }
  },
  legend: {
    textStyle: {
      color: B.secondary
    },
    pageTextStyle: {
      color: B.tertiary
    }
  },
  textStyle: {
    color: B.secondary
  },
  title: {
    textStyle: {
      color: B.primary
    },
    subtextStyle: {
      color: B.quaternary
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: B.accent50
    },
    feature: {
      dataView: {
        backgroundColor: pm,
        textColor: B.primary,
        textareaColor: B.background,
        textareaBorderColor: B.border,
        buttonColor: B.accent50,
        buttonTextColor: B.neutral00
      }
    }
  },
  tooltip: {
    backgroundColor: B.neutral20,
    defaultBorderColor: B.border,
    textStyle: {
      color: B.tertiary
    }
  },
  dataZoom: {
    borderColor: B.accent10,
    textStyle: {
      color: B.tertiary
    },
    brushStyle: {
      color: B.backgroundTint
    },
    handleStyle: {
      color: B.neutral00,
      borderColor: B.accent20
    },
    moveHandleStyle: {
      color: B.accent40
    },
    emphasis: {
      handleStyle: {
        borderColor: B.accent50
      }
    },
    dataBackground: {
      lineStyle: {
        color: B.accent30
      },
      areaStyle: {
        color: B.accent20
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: B.accent50
      },
      areaStyle: {
        color: B.accent30
      }
    }
  },
  visualMap: {
    textStyle: {
      color: B.secondary
    },
    handleStyle: {
      borderColor: B.neutral30
    }
  },
  timeline: {
    lineStyle: {
      color: B.accent10
    },
    label: {
      color: B.tertiary
    },
    controlStyle: {
      color: B.accent30,
      borderColor: B.accent30
    }
  },
  calendar: {
    itemStyle: {
      color: B.neutral00,
      borderColor: B.neutral20
    },
    dayLabel: {
      color: B.tertiary
    },
    monthLabel: {
      color: B.secondary
    },
    yearLabel: {
      color: B.secondary
    }
  },
  matrix: {
    x: gm,
    y: gm,
    backgroundColor: {
      borderColor: B.axisLine
    },
    body: {
      itemStyle: {
        borderColor: B.borderTint
      }
    }
  },
  timeAxis: sa(),
  logAxis: sa(),
  valueAxis: sa(),
  categoryAxis: sa(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: B.theme
  },
  gauge: {
    title: {
      color: B.secondary
    },
    axisLine: {
      lineStyle: {
        color: [[1, B.neutral05]]
      }
    },
    axisLabel: {
      color: B.axisLabel
    },
    detail: {
      color: B.primary
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
      borderColor: B.background
    }
  },
  radar: (function() {
    var r = sa();
    return r.axisName = {
      color: B.axisLabel
    }, r.axisLine.lineStyle.color = B.neutral20, r;
  })(),
  treemap: {
    breadcrumb: {
      itemStyle: {
        color: B.neutral20,
        textStyle: {
          color: B.secondary
        }
      },
      emphasis: {
        itemStyle: {
          color: B.neutral30
        }
      }
    }
  },
  sunburst: {
    itemStyle: {
      borderColor: B.background
    }
  },
  map: {
    itemStyle: {
      borderColor: B.border,
      areaColor: B.neutral10
    },
    label: {
      color: B.tertiary
    },
    emphasis: {
      label: {
        color: B.primary
      },
      itemStyle: {
        areaColor: B.highlight
      }
    },
    select: {
      label: {
        color: B.primary
      },
      itemStyle: {
        areaColor: B.highlight
      }
    }
  },
  geo: {
    itemStyle: {
      borderColor: B.border,
      areaColor: B.neutral10
    },
    emphasis: {
      label: {
        color: B.primary
      },
      itemStyle: {
        areaColor: B.highlight
      }
    },
    select: {
      label: {
        color: B.primary
      },
      itemStyle: {
        color: B.highlight
      }
    }
  }
};
Db.categoryAxis.splitLine.show = !1;
var WP = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, i = {}, n = {};
      if (W(t)) {
        var a = Ye(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        M(t, function(l, u) {
          for (var f = !1, c = 0; c < o.length; c++) {
            var h = o[c], v = u.lastIndexOf(h);
            if (v > 0 && v === u.length - h.length) {
              var d = u.slice(0, v);
              d !== "data" && (e.mainType = d, e[h.toLowerCase()] = l, f = !0);
            }
          }
          s.hasOwnProperty(u) && (i[u] = l, f = !0), f || (n[u] = l);
        });
      }
      return {
        cptQuery: e,
        dataQuery: i,
        otherQuery: n
      };
    }, r.prototype.filter = function(t, e) {
      var i = this.eventInfo;
      if (!i)
        return !0;
      var n = i.targetEl, a = i.packedEvent, o = i.model, s = i.view;
      if (!o || !s)
        return !0;
      var l = e.cptQuery, u = e.dataQuery;
      return f(l, o, "mainType") && f(l, o, "subType") && f(l, o, "index", "componentIndex") && f(l, o, "name") && f(l, o, "id") && f(u, a, "name") && f(u, a, "dataIndex") && f(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, n, a));
      function f(c, h, v, d) {
        return c[v] == null || h[d || v] === c[v];
      }
    }, r.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, r;
  })()
), Zc = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], mm = Zc.concat(["symbolKeepAspect"]), YP = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var i = {}, n = {}, a = !1, o = 0; o < Zc.length; o++) {
      var s = Zc[o], l = r.get(s);
      Z(l) ? (a = !0, n[s] = l) : i[s] = l;
    }
    if (i.symbol = i.symbol || r.defaultSymbol, e.setVisual(O({
      legendIcon: r.legendIcon || i.symbol,
      symbolKeepAspect: r.get("symbolKeepAspect")
    }, i)), t.isSeriesFiltered(r))
      return;
    var u = Tt(n);
    function f(c, h) {
      for (var v = r.getRawValue(h), d = r.getDataParams(h), p = 0; p < u.length; p++) {
        var m = u[p];
        c.setItemVisual(h, m, n[m](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, XP = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function i(n, a) {
      for (var o = n.getItemModel(a), s = 0; s < mm.length; s++) {
        var l = mm[s], u = o.getShallow(l, !0);
        u != null && n.setItemVisual(a, l, u);
      }
    }
    return {
      dataEach: e.hasItemOption ? i : null
    };
  }
};
function qP(r, t, e) {
  switch (e) {
    case "color":
      var i = r.getItemVisual(t, "style");
      return i[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
  }
}
function su(r, t) {
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
  }
}
function ma(r, t, e) {
  for (var i; r && !(t(r) && (i = r, e)); )
    r = r.__hostTarget || r.parent;
  return i;
}
var ce = new er(), Mb = {};
function ZP(r, t) {
  Mb[r] = t;
}
function KP(r) {
  return Mb[r];
}
var QP = Math.round(Math.random() * 9), jP = typeof Object.defineProperty == "function", JP = (function() {
  function r() {
    this._id = "__ec_inner_" + QP++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var i = this._guard(t);
    return jP ? Object.defineProperty(i, this._id, {
      value: e,
      enumerable: !1,
      configurable: !0
    }) : i[this._id] = e, this;
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
function bi(r) {
  return isFinite(r);
}
function tE(r, t, e) {
  var i = t.x == null ? 0 : t.x, n = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (i = i * e.width + e.x, n = n * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), i = bi(i) ? i : 0, n = bi(n) ? n : 1, a = bi(a) ? a : 0, o = bi(o) ? o : 0;
  var s = r.createLinearGradient(i, a, n, o);
  return s;
}
function eE(r, t, e) {
  var i = e.width, n = e.height, a = Math.min(i, n), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, l = t.r == null ? 0.5 : t.r;
  t.global || (o = o * i + e.x, s = s * n + e.y, l = l * a), o = bi(o) ? o : 0.5, s = bi(s) ? s : 0.5, l = l >= 0 && bi(l) ? l : 0.5;
  var u = r.createRadialGradient(o, s, 0, o, s, l);
  return u;
}
function Kc(r, t, e) {
  for (var i = t.type === "radial" ? eE(r, t, e) : tE(r, t, e), n = t.colorStops, a = 0; a < n.length; a++)
    i.addColorStop(n[a].offset, n[a].color);
  return i;
}
function rE(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function rs(r) {
  return parseInt(r, 10);
}
function is(r, t, e) {
  var i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[i] != null && e[i] !== "auto")
    return parseFloat(e[i]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[n] || rs(s[i]) || rs(r.style[i])) - (rs(s[a]) || 0) - (rs(s[o]) || 0) || 0;
}
function iE(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : bt(r) ? [r] : F(r) ? r : null;
}
function Ib(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && iE(t.lineDash, t.lineWidth), i = t.lineDashOffset;
  if (e) {
    var n = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    n && n !== 1 && (e = G(e, function(a) {
      return a / n;
    }), i /= n);
  }
  return [e, i];
}
var nE = new Pi(!0);
function ml(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function ym(r) {
  return typeof r == "string" && r !== "none";
}
function yl(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function _m(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function bm(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function Qc(r, t, e) {
  var i = n0(t.image, t.__image, e);
  if (Ol(i)) {
    var n = r.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && n && n.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Lw), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), n.setTransform(a);
    }
    return n;
  }
}
function aE(r, t, e, i, n) {
  var a, o = ml(e), s = yl(e), l = e.strokePercent, u = l < 1, f = !t.path;
  (!t.silent || u) && f && t.createPathProxy();
  var c = t.path || nE, h = t.__dirty;
  if (!i) {
    var v = e.fill, d = e.stroke, p = s && !!v.colorStops, m = o && !!d.colorStops, g = s && !!v.image, y = o && !!d.image, _ = void 0, b = void 0, S = void 0, w = void 0, x = void 0;
    (p || m) && (x = t.getBoundingRect()), p && (_ = h ? Kc(r, v, x) : t.__canvasFillGradient, t.__canvasFillGradient = _), m && (b = h ? Kc(r, d, x) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = b), g && (S = h || !t.__canvasFillPattern ? Qc(r, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), y && (w = h || !t.__canvasStrokePattern ? Qc(r, d, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), p ? r.fillStyle = _ : g && (S ? r.fillStyle = S : s = !1), m ? r.strokeStyle = b : y && (w ? r.strokeStyle = w : o = !1);
  }
  var T = t.getGlobalScale();
  c.setScale(T[0], T[1], t.segmentIgnoreThreshold);
  var C, D;
  r.setLineDash && e.lineDash && (a = Ib(t), C = a[0], D = a[1]);
  var A = !0;
  (f || h & an) && (c.setDPR(r.dpr), u ? c.setContext(null) : (c.setContext(r), A = !1), c.reset(), t.buildPath(c, t.shape, i), c.toStatic(), t.pathUpdated()), A && c.rebuildPath(r, u ? l : 1), C && (r.setLineDash(C), r.lineDashOffset = D), i ? (n.batchFill = s, n.batchStroke = o) : e.strokeFirst ? (o && bm(r, e), s && _m(r, e)) : (s && _m(r, e), o && bm(r, e)), C && r.setLineDash([]);
}
function oE(r, t, e) {
  var i = t.__image = n0(e.image, t.__image, t, t.onload);
  if (!(!i || !Ol(i))) {
    var n = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), l = i.width / i.height;
    if (o == null && s != null ? o = s * l : s == null && o != null ? s = o / l : o == null && s == null && (o = i.width, s = i.height), e.sWidth && e.sHeight) {
      var u = e.sx || 0, f = e.sy || 0;
      r.drawImage(i, u, f, e.sWidth, e.sHeight, n, a, o, s);
    } else if (e.sx && e.sy) {
      var u = e.sx, f = e.sy, c = o - u, h = s - f;
      r.drawImage(i, u, f, c, h, n, a, o, s);
    } else
      r.drawImage(i, n, a, o, s);
  }
}
function sE(r, t, e) {
  var i, n = e.text;
  if (n != null && (n += ""), n) {
    r.font = e.font || Fr, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (i = Ib(t), a = i[0], o = i[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (ml(e) && r.strokeText(n, e.x, e.y), yl(e) && r.fillText(n, e.x, e.y)) : (yl(e) && r.fillText(n, e.x, e.y), ml(e) && r.strokeText(n, e.x, e.y)), a && r.setLineDash([]);
  }
}
var Sm = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], wm = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function Lb(r, t, e, i, n) {
  var a = !1;
  if (!i && (e = e || {}, t === e))
    return !1;
  if (i || t.opacity !== e.opacity) {
    Xt(r, n), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? Ti.opacity : o;
  }
  (i || t.blend !== e.blend) && (a || (Xt(r, n), a = !0), r.globalCompositeOperation = t.blend || Ti.blend);
  for (var s = 0; s < Sm.length; s++) {
    var l = Sm[s];
    (i || t[l] !== e[l]) && (a || (Xt(r, n), a = !0), r[l] = r.dpr * (t[l] || 0));
  }
  return (i || t.shadowColor !== e.shadowColor) && (a || (Xt(r, n), a = !0), r.shadowColor = t.shadowColor || Ti.shadowColor), a;
}
function xm(r, t, e, i, n) {
  var a = t.style, o = i ? null : e && e.style || {};
  if (a === o)
    return !1;
  var s = Lb(r, a, o, i, n);
  if ((i || a.fill !== o.fill) && (s || (Xt(r, n), s = !0), ym(a.fill) && (r.fillStyle = a.fill)), (i || a.stroke !== o.stroke) && (s || (Xt(r, n), s = !0), ym(a.stroke) && (r.strokeStyle = a.stroke)), (i || a.opacity !== o.opacity) && (s || (Xt(r, n), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var l = a.lineWidth, u = l / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== u && (s || (Xt(r, n), s = !0), r.lineWidth = u);
  }
  for (var f = 0; f < wm.length; f++) {
    var c = wm[f], h = c[0];
    (i || a[h] !== o[h]) && (s || (Xt(r, n), s = !0), r[h] = a[h] || c[1]);
  }
  return s;
}
function lE(r, t, e, i, n) {
  return Lb(r, t.style, e && e.style, i, n);
}
function Pb(r, t) {
  var e = t.transform, i = r.dpr || 1;
  e ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : r.setTransform(i, 0, 0, i, 0, 0);
}
function uE(r, t, e) {
  for (var i = !1, n = 0; n < r.length; n++) {
    var a = r[n];
    i = i || a.isZeroArea(), Pb(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = i;
}
function fE(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var Tm = 1, Cm = 2, Am = 3, Dm = 4;
function cE(r) {
  var t = yl(r), e = ml(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function Xt(r, t) {
  t.batchFill && (t.batchFill = !1, r.fill()), t.batchStroke && (t.batchStroke = !1, r.stroke());
}
function Eb(r, t) {
  var e = { inHover: !1, viewWidth: 0, viewHeight: 0, beforeBrushParam: {} };
  Si(r, t, e), bn(r, e);
}
function Si(r, t, e) {
  var i = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~ee, t.__isRendered = !1;
    return;
  }
  var n = t.__clipPaths, a = e.prevElClipPaths, o = t.style, s = !1, l = !1;
  if ((!a || rE(n, a)) && (a && (Xt(r, e), r.restore(), l = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), n && n.length && (Xt(r, e), r.save(), uE(n, r, e), s = !0, e.prevElClipPaths = n)), e.allClipped) {
    t.__dirty &= ~ee, t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(e.beforeBrushParam), t.innerBeforeBrush();
  var u = e.prevEl;
  u || (l = s = !0);
  var f = t instanceof dt && t.autoBatch && cE(o);
  s || fE(i, u.transform) ? (Xt(r, e), Pb(r, t)) : f || Xt(r, e), t instanceof dt ? (e.lastDrawType !== Tm && (l = !0, e.lastDrawType = Tm), xm(r, t, u, l, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), aE(r, t, o, f, e)) : t instanceof Xs ? (e.lastDrawType !== Am && (l = !0, e.lastDrawType = Am), xm(r, t, u, l, e), sE(r, t, o)) : t instanceof Hr ? (e.lastDrawType !== Cm && (l = !0, e.lastDrawType = Cm), lE(r, t, u, l, e), oE(r, t, o)) : t.getTemporalDisplayables && (e.lastDrawType !== Dm && (l = !0, e.lastDrawType = Dm), hE(r, t, e)), t.innerAfterBrush(), t.afterBrush && (f && Xt(r, e), t.afterBrush()), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function bn(r, t) {
  Xt(r, t), t.prevElClipPaths && r.restore();
}
function hE(r, t, e) {
  var i = t.getDisplayables(), n = t.getTemporalDisplayables();
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
  for (o = t.getCursor(), s = i.length; o < s; o++) {
    var l = i[o];
    l.beforeBrush && l.beforeBrush(e.beforeBrushParam), l.innerBeforeBrush(), Si(r, l, a), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
  }
  bn(r, a);
  for (var u = 0, f = n.length; u < f; u++) {
    var l = n[u];
    l.beforeBrush && l.beforeBrush(e.beforeBrushParam), l.innerBeforeBrush(), Si(r, l, a), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
  }
  bn(r, a), t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var _f = new JP(), Mm = new wn(100), Im = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function jc(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), i = t.getZr(), n = i.painter.type === "svg";
  r.dirty && _f.delete(r);
  var a = _f.get(r);
  if (a)
    return a;
  var o = yt(r, {
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
  return l(s), s.rotation = o.rotation, s.scaleX = s.scaleY = n ? 1 : 1 / e, _f.set(r, s), r.dirty = !1, s;
  function l(u) {
    for (var f = [e], c = !0, h = 0; h < Im.length; ++h) {
      var v = o[Im[h]];
      if (v != null && !F(v) && !W(v) && !bt(v) && typeof v != "boolean") {
        c = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (c) {
      d = f.join(",") + (n ? "-svg" : "");
      var p = Mm.get(d);
      p && (n ? u.svgElement = p : u.image = p);
    }
    var m = Rb(o.dashArrayX), g = vE(o.dashArrayY), y = kb(o.symbol), _ = dE(m), b = Ob(g), S = !n && se.createCanvas(), w = n && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, x = C(), T;
    S && (S.width = x.width * e, S.height = x.height * e, T = S.getContext("2d")), D(), c && Mm.put(d, S || w), u.image = S, u.svgElement = w, u.svgWidth = x.width, u.svgHeight = x.height;
    function C() {
      for (var A = 1, L = 0, I = _.length; L < I; ++L)
        A = hp(A, _[L]);
      for (var P = 1, L = 0, I = y.length; L < I; ++L)
        P = hp(P, y[L].length);
      A *= P;
      var E = b * _.length * y.length;
      return {
        width: Math.max(1, Math.min(A, o.maxTileWidth)),
        height: Math.max(1, Math.min(E, o.maxTileHeight))
      };
    }
    function D() {
      T && (T.clearRect(0, 0, S.width, S.height), o.backgroundColor && (T.fillStyle = o.backgroundColor, T.fillRect(0, 0, S.width, S.height)));
      for (var A = 0, L = 0; L < g.length; ++L)
        A += g[L];
      if (A <= 0)
        return;
      for (var I = -b, P = 0, E = 0, k = 0; I < x.height; ) {
        if (P % 2 === 0) {
          for (var z = E / 2 % y.length, R = 0, $ = 0, Y = 0; R < x.width * 2; ) {
            for (var U = 0, L = 0; L < m[k].length; ++L)
              U += m[k][L];
            if (U <= 0)
              break;
            if ($ % 2 === 0) {
              var q = (1 - o.symbolSize) * 0.5, Q = R + m[k][$] * q, H = I + g[P] * q, it = m[k][$] * o.symbolSize, ot = g[P] * o.symbolSize, Ut = Y / 2 % y[z].length;
              Ae(Q, H, it, ot, y[z][Ut]);
            }
            R += m[k][$], ++Y, ++$, $ === m[k].length && ($ = 0);
          }
          ++k, k === m.length && (k = 0);
        }
        I += g[P], ++E, ++P, P === g.length && (P = 0);
      }
      function Ae(wt, kt, et, st, Vr) {
        var Wt = n ? 1 : e, ad = Ni(Vr, wt * Wt, kt * Wt, et * Wt, st * Wt, o.color, o.symbolKeepAspect);
        if (n) {
          var od = i.painter.renderOneToVNode(ad);
          od && w.children.push(od);
        } else
          Eb(T, ad);
      }
    }
  }
}
function kb(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if (W(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!W(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return kb([r]);
  for (var i = [], e = 0; e < r.length; ++e)
    W(r[e]) ? i.push([r[e]]) : i.push(r[e]);
  return i;
}
function Rb(r) {
  if (!r || r.length === 0)
    return [[0, 0]];
  if (bt(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, i = 0; i < r.length; ++i)
    if (!bt(r[i])) {
      e = !1;
      break;
    }
  if (e)
    return Rb([r]);
  for (var n = [], i = 0; i < r.length; ++i)
    if (bt(r[i])) {
      var t = Math.ceil(r[i]);
      n.push([t, t]);
    } else {
      var t = G(r[i], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t);
    }
  return n;
}
function vE(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (bt(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = G(r, function(i) {
    return Math.ceil(i);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function dE(r) {
  return G(r, function(t) {
    return Ob(t);
  });
}
function Ob(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
var pE = Xh(gE);
function gE(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var i = e.getData();
      i.hasItemVisual() && i.each(function(o) {
        var s = i.getItemVisual(o, "decal");
        if (s) {
          var l = i.ensureUniqueItemVisual(o, "style");
          l.decal = jc(s, t);
        }
      });
      var n = i.getVisual("decal");
      if (n) {
        var a = i.getVisual("style");
        a.decal = jc(n, t);
      }
    }
  });
}
var mE = 1, yE = 800, _E = 900, bE = 920, SE = 1e3, wE = 2e3, Lm = 5e3, Nb = 1e3, xE = 1100, qv = 2e3, Bb = 3e3, TE = 4e3, lu = 4500, CE = 4600, AE = 5e3, DE = 6e3, Fb = 7e3, ME = {
  PROCESSOR: {
    SERIES_FILTER: yE,
    AXIS_STATISTICS: bE,
    FILTER: SE,
    STATISTIC: Lm,
    STATISTICS: Lm
  },
  VISUAL: {
    LAYOUT: Nb,
    PROGRESSIVE_LAYOUT: xE,
    GLOBAL: qv,
    CHART: Bb,
    POST_CHART_LAYOUT: CE,
    COMPONENT: TE,
    BRUSH: AE,
    CHART_ITEM: lu,
    ARIA: DE,
    DECAL: Fb
  }
}, Pt = "__flagInMainProcess", ns = "__mainProcessVersion", Ot = "__pendingUpdate", bf = "__needsUpdateStatus", Pm = /^[a-zA-Z0-9_]+$/, Sf = "__connectUpdateStatus", Em = 0, IE = 1, LE = 2;
function zb(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      this.id;
      return;
    }
    return Hb(this, r, t);
  };
}
function $b(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return Hb(this, r, t);
  };
}
function Hb(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), er.prototype[t].apply(r, e);
}
var Vb = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(er)
), Gb = Vb.prototype;
Gb.on = $b("on");
Gb.off = $b("off");
var vi, wf, as, or, os, xf, Tf, Ji, tn, km, Rm, Cf, Om, ss, Nm, Ub, ue, Bm, en, Wb = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e, i, n) {
      var a = r.call(this, new WP()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], n = n || {}, a.__v_skip = !0, a._dom = e;
      var o = "canvas", s = "auto", l = !1;
      a[ns] = 1, n.ssr;
      var u = a._zr = rm(e, {
        renderer: n.renderer || o,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height,
        ssr: n.ssr,
        useDirtyRect: V(n.useDirtyRect, l),
        useCoarsePointer: V(n.useCoarsePointer, s),
        pointerSize: n.pointerSize
      });
      a._ssr = n.ssr, a._throttledZrFlush = Wv(xt(u.flush, u), 17), a._updateTheme(i), a._locale = ED(n.locale || H_), a._coordSysMgr = new dv();
      var f = a._api = Nm(a);
      function c(h, v) {
        return h.__prio - v.__prio;
      }
      return Es(bl, c), Es(eh, c), a._scheduler = new xb(a, f, eh, bl), a._messageCenter = new Vb(), a._initEvents(), a.resize = xt(a.resize, a), u.animation.on("frame", a._onframe, a), km(u, a), Rm(u, a), Zf(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        var e = this._scheduler, i = this._model, n = this._api;
        if (Bm(this), this[Ot]) {
          var a = this[Ot].silent;
          this[Pt] = !0, en(this);
          try {
            vi(this), or.update.call(this, null, this[Ot].updateParams);
          } catch (l) {
            throw this[Pt] = !1, this[Ot] = null, l;
          }
          this._zr.flush(), this[Pt] = !1, this[Ot] = null, Ji.call(this, a), tn.call(this, a);
        } else if (e.unfinished) {
          var o = mE;
          do {
            e.unfinished = !1;
            var s = se.getTime();
            e.performSeriesTasks(i), e.performDataProcessorTasks(i), xf(this, i), e.performVisualTasks(i), ss(this, this._model, n, "remain", {}), o -= se.getTime() - s;
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
    }, t.prototype.setOption = function(e, i, n) {
      if (!this[Pt]) {
        if (this._disposed) {
          this.id;
          return;
        }
        var a, o, s;
        if (K(i) && (n = i.lazyUpdate, a = i.silent, o = i.replaceMerge, s = i.transition, i = i.notMerge), this[Pt] = !0, en(this), !this._model || i) {
          var l = new gP(this._api), u = this._theme, f = this._model = new Xv();
          f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, u, this._locale, l);
        }
        this._model.setOption(e, {
          replaceMerge: o
        }, rh);
        var c = {
          seriesTransition: s,
          optionChanged: !0
        };
        if (n)
          this[Ot] = {
            silent: a,
            updateParams: c
          }, this[Pt] = !1, this.getZr().wakeUp();
        else {
          try {
            vi(this), or.update.call(this, null, c);
          } catch (h) {
            throw this[Ot] = null, this[Pt] = !1, h;
          }
          this._ssr || this._zr.flush(), this[Ot] = null, this[Pt] = !1, Ji.call(this, a), tn.call(this, a);
        }
      }
    }, t.prototype.setTheme = function(e, i) {
      if (!this[Pt]) {
        if (this._disposed) {
          this.id;
          return;
        }
        var n = this._model;
        if (n) {
          var a = i && i.silent, o = null;
          this[Ot] && (a == null && (a = this[Ot].silent), o = this[Ot].updateParams, this[Ot] = null), this[Pt] = !0, en(this);
          try {
            this._updateTheme(e), n.setTheme(this._theme), vi(this), or.update.call(this, {
              type: "setTheme"
            }, o);
          } catch (s) {
            throw this[Pt] = !1, s;
          }
          this[Pt] = !1, Ji.call(this, a), tn.call(this, a);
        }
      }
    }, t.prototype._updateTheme = function(e) {
      W(e) && (e = Yb[e]), e && (e = nt(e), e && bb(e, !0), this._theme = e);
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
      return this.renderToCanvas(e);
    }, t.prototype.renderToCanvas = function(e) {
      e = e || {};
      var i = this._zr.painter;
      return i.getRenderedCanvas({
        backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(e) {
      e = e || {};
      var i = this._zr.painter;
      return i.renderToString({
        useViewBox: e.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      var e = this._zr, i = e.storage.getDisplayList();
      return M(i, function(n) {
        n.stopAnimation(null, !0);
      }), e.painter.toDataURL();
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        this.id;
        return;
      }
      e = e || {};
      var i = e.excludeComponents, n = this._model, a = [], o = this;
      M(i, function(l) {
        n.eachComponent({
          mainType: l
        }, function(u) {
          var f = o._componentsMap[u.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return M(a, function(l) {
        l.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        this.id;
        return;
      }
      var i = e.type === "svg", n = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (Fm[n]) {
        var l = s, u = s, f = -s, c = -s, h = [], v = e && e.pixelRatio || this.getDevicePixelRatio();
        M(Pa, function(_, b) {
          if (_.group === n) {
            var S = i ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(nt(e)), w = _.getDom().getBoundingClientRect();
            l = a(w.left, l), u = a(w.top, u), f = o(w.right, f), c = o(w.bottom, c), h.push({
              dom: S,
              left: w.left,
              top: w.top
            });
          }
        }), l *= v, u *= v, f *= v, c *= v;
        var d = f - l, p = c - u, m = se.createCanvas(), g = rm(m, {
          renderer: i ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: p
        }), i) {
          var y = "";
          return M(h, function(_) {
            var b = _.left - l, S = _.top - u;
            y += '<g transform="translate(' + b + "," + S + ')">' + _.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = y, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && g.add(new It({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: p
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), M(h, function(_) {
            var b = new Hr({
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
    }, t.prototype.convertToPixel = function(e, i, n) {
      return os(this, "convertToPixel", e, i, n);
    }, t.prototype.convertToLayout = function(e, i, n) {
      return os(this, "convertToLayout", e, i, n);
    }, t.prototype.convertFromPixel = function(e, i, n) {
      return os(this, "convertFromPixel", e, i, n);
    }, t.prototype.containPixel = function(e, i) {
      if (this._disposed) {
        this.id;
        return;
      }
      var n = this._model, a, o = Bu(n, e);
      return M(o, function(s, l) {
        l.indexOf("Models") >= 0 && M(s, function(u) {
          var f = u.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(i);
          else if (l === "seriesModels") {
            var c = this._chartsMap[u.__viewId];
            c && c.containPoint && (a = a || c.containPoint(i, u));
          }
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, i) {
      var n = this._model, a = Bu(n, e, {
        defaultMainType: "series"
      }), o = a.seriesModel, s = o.getData(), l = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return l != null ? qP(s, l, i) : su(s, i);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      M(PE, function(n) {
        var a = function(o) {
          var s = e.getModel(), l = o.target, u, f = n === "globalout";
          if (f ? u = {} : l && ma(l, function(p) {
            var m = at(p);
            if (m && m.dataIndex != null) {
              var g = m.dataModel || s.getSeriesByIndex(m.seriesIndex);
              return u = g && g.getDataParams(m.dataIndex, m.dataType, l) || {}, !0;
            } else if (m.eventData)
              return u = O({}, m.eventData), !0;
          }, !0), u) {
            var c = u.componentType, h = u.componentIndex;
            (c === "markLine" || c === "markPoint" || c === "markArea") && (c = "series", h = u.seriesIndex);
            var v = c && h != null && s.getComponent(c, h), d = v && e[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            u.event = o, u.type = n, e._$eventProcessor.eventInfo = {
              targetEl: l,
              packedEvent: u,
              model: v,
              view: d
            }, e.trigger(n, u);
          }
        };
        a.zrEventfulCallAtLast = !0, e._zr.on(n, a, e);
      });
      var i = this._messageCenter;
      M(th, function(n, a) {
        i.on(a, function(o) {
          e.trigger(a, o);
        });
      }), kL(i, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && R0(this.getDom(), Kv, "");
      var i = this, n = i._api, a = i._model;
      M(i._componentsViews, function(o) {
        o.dispose(a, n);
      }), M(i._chartsViews, function(o) {
        o.dispose(a, n);
      }), i._zr.dispose(), i._dom = i._model = i._chartsMap = i._componentsMap = i._chartsViews = i._componentsViews = i._scheduler = i._api = i._zr = i._throttledZrFlush = i._theme = i._coordSysMgr = i._messageCenter = null, delete Pa[i.id];
    }, t.prototype.resize = function(e) {
      if (!this[Pt]) {
        if (this._disposed) {
          this.id;
          return;
        }
        this._zr.resize(e);
        var i = this._model;
        if (this._loadingFX && this._loadingFX.resize(), !!i) {
          var n = i.resetOption("media"), a = e && e.silent;
          this[Ot] && (a == null && (a = this[Ot].silent), n = !0, this[Ot] = null), this[Pt] = !0, en(this);
          try {
            n && vi(this), or.update.call(this, {
              type: "resize",
              animation: O({
                // Disable animation
                duration: 0
              }, e && e.animation)
            });
          } catch (o) {
            throw this[Pt] = !1, o;
          }
          this[Pt] = !1, Ji.call(this, a), tn.call(this, a);
        }
      }
    }, t.prototype.showLoading = function(e, i) {
      if (this._disposed) {
        this.id;
        return;
      }
      if (K(e) && (i = e, e = ""), e = e || "default", this.hideLoading(), !!ih[e]) {
        var n = ih[e](this._api, i), a = this._zr;
        this._loadingFX = n, a.add(n);
      }
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        this.id;
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var i = O({}, e);
      return i.type = Jc[e.type], i;
    }, t.prototype.dispatchAction = function(e, i) {
      if (this._disposed) {
        this.id;
        return;
      }
      if (K(i) || (i = {
        silent: !!i
      }), !!_l[e.type] && this._model) {
        if (this[Pt]) {
          this._pendingActions.push(e);
          return;
        }
        var n = i.silent;
        Tf.call(this, e, n);
        var a = i.flush;
        a ? this._zr.flush() : a !== !1 && tt.browser.weChat && this._throttledZrFlush(), Ji.call(this, n), tn.call(this, n);
      }
    }, t.prototype.updateLabelLayout = function() {
      ce.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        this.id;
        return;
      }
      var i = e.seriesIndex, n = this.getModel(), a = n.getSeriesByIndex(i);
      a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = (function() {
      vi = function(c) {
        j2(c._model);
        var h = c._scheduler;
        h.restorePipelines(c._zr, c._model), h.prepareStageTasks(), wf(c, !0), wf(c, !1), h.plan();
      }, wf = function(c, h) {
        for (var v = c._model, d = c._scheduler, p = h ? c._componentsViews : c._chartsViews, m = h ? c._componentsMap : c._chartsMap, g = c._zr, y = c._api, _ = 0; _ < p.length; _++)
          p[_].__alive = !1;
        h ? v.eachComponent(function(w, x) {
          w !== "series" && b(x);
        }) : v.eachSeries(b);
        function b(w) {
          var x = w.__requireNewView;
          w.__requireNewView = !1;
          var T = "_ec_" + w.id + "_" + w.type, C = !x && m[T];
          if (!C) {
            var D = Ye(w.type), A = h ? ke.getClass(D.main, D.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              Pe.getClass(D.sub)
            );
            C = new A(), C.init(v, y), m[T] = C, p.push(C), g.add(C.group);
          }
          w.__viewId = C.__id = T, C.__alive = !0, C.__model = w, C.group.__ecComponentInfo = {
            mainType: w.mainType,
            index: w.componentIndex
          }, !h && d.prepareView(C, w, v, y);
        }
        for (var _ = 0; _ < p.length; ) {
          var S = p[_];
          S.__alive ? _++ : (!h && S.renderTask.dispose(), g.remove(S.group), S.dispose(v, y), p.splice(_, 1), m[S.__id] === S && delete m[S.__id], S.__id = S.group.__ecComponentInfo = null);
        }
      }, as = function(c, h, v, d, p) {
        var m = c._model;
        if (m.setUpdatePayload(v), !d) {
          M([].concat(c._componentsViews).concat(c._chartsViews), b);
          return;
        }
        var g = HT(v, d, p), y = v.excludeSeriesId, _;
        y != null && (_ = j(), M(Zt(y), function(S) {
          var w = Ke(S, null);
          w != null && _.set(w, !0);
        })), m && m.eachComponent(g, function(S) {
          var w = _ && _.get(S.id) != null;
          if (!w)
            if (Tp(v))
              if (S instanceof Je)
                v.type === Ci && !v.notBlur && !S.get(["emphasis", "disabled"]) && fC(S, v, c._api);
              else {
                var x = Jh(S.mainType, S.componentIndex, v.name, c._api), T = x.focusSelf, C = x.dispatchers;
                v.type === Ci && T && !v.notBlur && _c(S.mainType, S.componentIndex, c._api), C && M(C, function(D) {
                  v.type === Ci ? Va(D) : Ga(D);
                });
              }
            else wc(v) && S instanceof Je && (vC(S, v, c._api), wp(S), ue(c));
        }, c), m && m.eachComponent(g, function(S) {
          var w = _ && _.get(S.id) != null;
          w || b(c[d === "series" ? "_chartsMap" : "_componentsMap"][S.__viewId]);
        }, c);
        function b(S) {
          S && S.__alive && S[h] && S[h](S.__model, m, c._api, v);
        }
      }, or = {
        prepareAndUpdate: function(c) {
          vi(this), or.update.call(this, c, c && {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: c.newOption != null
          });
        },
        update: function(c, h) {
          var v = this._model, d = this._api, p = this._zr, m = this._coordSysMgr, g = this._scheduler;
          if (v) {
            J2(v), v.setUpdatePayload(c), g.restoreData(v, c), g.performSeriesTasks(v), m.create(v, d), ce.trigger("coordsys:aftercreate", v, d), g.performDataProcessorTasks(v, c), xf(this, v), m.update(v, d), i(v), g.performVisualTasks(v, c);
            var y = v.get("backgroundColor") || "transparent";
            p.setBackgroundColor(y);
            var _ = v.get("darkMode");
            _ != null && _ !== "auto" && p.setDarkMode(_), Cf(this, v, d, c, h), ce.trigger("afterupdate", v, d);
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
              if (g !== z0) {
                var _ = h.getViewOfComponentModel(y);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var b = _.updateTransform(y, v, d, c);
                    b && b.update && p.push(_);
                  } else
                    p.push(_);
              }
            });
            var m = j();
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
            }), ss(h, v, d, c, {}, m), ce.trigger("afterupdate", v, d);
          }
        },
        updateView: function(c) {
          var h = this._model;
          h && (h.setUpdatePayload(c), Pe.markUpdateMethod(c, "updateView"), i(h), this._scheduler.performVisualTasks(h, c, {
            setDirty: !0
          }), Cf(this, h, this._api, c, {}), ce.trigger("afterupdate", h, this._api));
        },
        updateVisual: function(c) {
          var h = this, v = this._model;
          v && (v.setUpdatePayload(c), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), Pe.markUpdateMethod(c, "updateVisual"), i(v), this._scheduler.performVisualTasks(v, c, {
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
          }), ce.trigger("afterupdate", v, this._api));
        },
        /**
         * @deprecated
         */
        updateLayout: function(c) {
          or.update.call(this, c);
        }
      };
      function e(c, h, v, d, p) {
        if (c._disposed) {
          c.id;
          return;
        }
        for (var m = c._model, g = c._coordSysMgr.getCoordinateSystems(), y, _ = Bu(m, v), b = 0; b < g.length; b++) {
          var S = g[b];
          if (S[h] && (y = S[h](m, _, d, p)) != null)
            return y;
        }
      }
      os = e, xf = function(c, h) {
        var v = c._chartsMap, d = c._scheduler;
        h.eachSeries(function(p) {
          d.updateStreamModes(p, v[p.__viewId]);
        });
      }, Tf = function(c, h) {
        var v = this, d = this.getModel(), p = c.type, m = c.escapeConnect, g = _l[p], y = (g.update || "update").split(":"), _ = y.pop(), b = y[0] != null && Ye(y[0]);
        this[Pt] = !0, en(this);
        var S = [c], w = !1;
        c.batch && (w = !0, S = G(c.batch, function(k) {
          return k = yt(O({}, k), c), k.batch = null, k;
        }));
        var x = [], T, C = [], D = g.nonRefinedEventType, A = wc(c), L = Tp(c);
        if (L && Q0(this._api), M(S, function(k) {
          var z = g.action(k, d, v._api);
          if (g.refineEvent ? C.push(z) : T = z, T = T || O({}, k), T.type = D, x.push(T), L) {
            var R = Wh(c), $ = R.queryOptionMap, Y = R.mainTypeSpecified, U = Y ? $.keys()[0] : "series";
            as(v, _, k, U), ue(v);
          } else A ? (as(v, _, k, "series"), ue(v)) : b && as(v, _, k, b.main, b.sub);
        }), _ !== "none" && !L && !A && !b)
          try {
            this[Ot] ? (vi(this), or.update.call(this, c), this[Ot] = null) : or[_].call(this, c);
          } catch (k) {
            throw this[Pt] = !1, k;
          }
        if (w ? T = {
          type: D,
          escapeConnect: m,
          batch: x
        } : T = x[0], this[Pt] = !1, !h) {
          var I = void 0;
          if (g.refineEvent) {
            var P = g.refineEvent(C, c, d, this._api).eventContent;
            vr(K(P)), I = yt({
              type: g.refinedEventType
            }, P), I.fromAction = c.type, I.fromActionPayload = c, I.escapeConnect = !0;
          }
          var E = this._messageCenter;
          E.trigger(T.type, T), I && E.trigger(I.type, I);
        }
      }, Ji = function(c) {
        for (var h = this._pendingActions; h.length; ) {
          var v = h.shift();
          Tf.call(this, v, c);
        }
      }, tn = function(c) {
        !c && this.trigger("updated");
      }, km = function(c, h) {
        c.on("rendered", function(v) {
          h.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          c.animation.isFinished() && !h[Ot] && !h._scheduler.unfinished && !h._pendingActions.length ? h.trigger("finished") : c.refresh();
        });
      }, Rm = function(c, h) {
        c.on("mouseover", function(v) {
          var d = v.target, p = ma(d, Sc);
          p && (cC(p, v, h._api), ue(h));
        }).on("mouseout", function(v) {
          var d = v.target, p = ma(d, Sc);
          p && (hC(p, v, h._api), ue(h));
        }).on("click", function(v) {
          var d = v.target, p = ma(d, function(y) {
            return at(y).dataIndex != null;
          }, !0);
          if (p) {
            var m = p.selected ? "unselect" : "select", g = at(p);
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
      function i(c) {
        c.clearColorPalette(), c.eachSeries(function(h) {
          h.clearColorPalette();
        });
      }
      function n(c) {
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
          Es(p, function(y, _) {
            return y.zlevel === _.zlevel ? y.z - _.z : y.zlevel - _.zlevel;
          }), M(p, function(y) {
            var _ = c.getComponent(y.type, y.idx), b = y.zlevel, S = y.key;
            m != null && (b = Math.max(m, b)), S ? (b === m && S !== g && b++, g = S) : g && (b === m && b++, g = ""), m = b, _.setZLevel(b);
          });
        }
      }
      Cf = function(c, h, v, d, p) {
        n(h), Om(c, h, v, d, p), M(c._chartsViews, function(m) {
          m.__alive = !1;
        }), ss(c, h, v, d, p), M(c._chartsViews, function(m) {
          m.__alive || m.remove(h, v);
        });
      }, Om = function(c, h, v, d, p, m) {
        M(m || c._componentsViews, function(g) {
          var y = g.__model;
          u(y, g), g.render(y, h, v, d), l(y, g), f(y, g);
        });
      }, ss = function(c, h, v, d, p, m) {
        var g = c._scheduler;
        p = O(p || {}, {
          updatedSeries: h.getSeries()
        }), ce.trigger("series:beforeupdate", h, v, p);
        var y = !1;
        h.eachSeries(function(_) {
          var b = c._chartsMap[_.__viewId];
          b.__alive = !0;
          var S = b.renderTask;
          g.updatePayload(S, d), u(_, b), m && m.get(_.uid) && S.dirty(), S.perform(g.getPerformArgs(S)) && (y = !0), b.group.silent = !!_.get("silent"), s(_, b), wp(_);
        }), g.unfinished = y || g.unfinished, ce.trigger("series:layoutlabels", h, v, p), ce.trigger("series:transition", h, v, p), h.eachSeries(function(_) {
          var b = c._chartsMap[_.__viewId];
          l(_, b), f(_, b);
        }), o(c, h), ce.trigger("series:afterupdate", h, v, p);
      }, ue = function(c) {
        c[bf] = !0, c.getZr().wakeUp();
      }, en = function(c) {
        c[ns] = (c[ns] + 1) % 1e6;
      }, Bm = function(c) {
        c[bf] && (c.getZr().storage.traverse(function(h) {
          Ca(h) || a(h);
        }), c[bf] = !1);
      };
      function a(c) {
        for (var h = [], v = c.currentStates, d = 0; d < v.length; d++) {
          var p = v[d];
          p === "emphasis" || p === "blur" || p === "select" || h.push(p);
        }
        c.selected && c.states.select && h.push("select"), c.hoverState === Vl && c.states.emphasis ? h.push("emphasis") : c.hoverState === Hl && c.states.blur && h.push("blur"), c.useStates(h);
      }
      function o(c, h) {
        var v = c._zr;
        if (v.painter.type === "canvas") {
          var d = v.storage, p = 0;
          d.traverse(function(g) {
            g.isGroup || p++;
          });
          var m = p > V(h.get("hoverLayerThreshold"), yb.hoverLayerThreshold) && !tt.node && !tt.worker;
          (c._usingTHL || m) && (h.eachSeries(function(g) {
            if (!g.preventUsingHoverLayer) {
              var y = c._chartsMap[g.__viewId];
              y.__alive && y.eachRendered(function(_) {
                var b = _.states.emphasis;
                b && b.hoverLayer !== Xl && (b.hoverLayer = m ? f_ : u_);
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
          var v = uv(c);
          h.eachRendered(function(d) {
            return fv(d, v.z, v.zlevel), !0;
          });
        }
      }
      function u(c, h) {
        h.eachRendered(function(v) {
          if (!Ca(v)) {
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
            if (Ca(g))
              return;
            if (g instanceof dt && _C(g), g.__dirty) {
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
      Nm = function(c) {
        return new /** @class */
        ((function(h) {
          N(v, h);
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
            Va(d, p), ue(c);
          }, v.prototype.leaveEmphasis = function(d, p) {
            Ga(d, p), ue(c);
          }, v.prototype.enterBlur = function(d) {
            X0(d), ue(c);
          }, v.prototype.leaveBlur = function(d) {
            jh(d), ue(c);
          }, v.prototype.enterSelect = function(d) {
            q0(d), ue(c);
          }, v.prototype.leaveSelect = function(d) {
            Z0(d), ue(c);
          }, v.prototype.getModel = function() {
            return c.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return c.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return c.getViewOfSeriesModel(d);
          }, v.prototype.getECUpdateCycleVersion = function() {
            return c[ns];
          }, v.prototype.usingTHL = function() {
            return c._usingTHL;
          }, v;
        })(V0))(c);
      }, Ub = function(c) {
        function h(v, d) {
          for (var p = 0; p < v.length; p++) {
            var m = v[p];
            m[Sf] = d;
          }
        }
        M(Jc, function(v, d) {
          c._messageCenter.on(d, function(p) {
            if (Fm[c.group] && c[Sf] !== Em) {
              if (p && p.escapeConnect)
                return;
              var m = c.makeActionFromEvent(p), g = [];
              M(Pa, function(y) {
                y !== c && y.group === c.group && g.push(y);
              }), h(g, Em), M(g, function(y) {
                y[Sf] !== IE && y.dispatchAction(m);
              }), h(g, LE);
            }
          });
        });
      };
    })(), t;
  })(er)
), Zv = Wb.prototype;
Zv.on = zb("on");
Zv.off = zb("off");
Zv.one = function(r, t, e) {
  var i = this;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), i.off(r, n);
  }
  this.on.call(this, r, n, e);
};
var PE = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
var _l = {}, Jc = {}, th = {}, eh = [], rh = [], bl = [], Yb = {}, ih = {}, Pa = {}, Fm = {}, EE = +/* @__PURE__ */ new Date() - 0, Kv = "_echarts_instance_";
function Xb(r, t, e) {
  var i = !(e && e.ssr);
  if (i) {
    var n = kE(r);
    if (n)
      return n;
  }
  var a = new Wb(r, t, e);
  return a.id = "ec_" + EE++, Pa[a.id] = a, i && R0(r, Kv, a.id), Ub(a), ce.trigger("afterinit", a), a;
}
function kE(r) {
  return Pa[VT(r, Kv)];
}
function qb(r, t) {
  Yb[r] = t;
}
function Zb(r) {
  ut(rh, r) < 0 && rh.push(r);
}
function Kb(r, t) {
  jv(eh, r, t, wE);
}
function RE(r) {
  Qv("afterinit", r);
}
function OE(r) {
  Qv("afterupdate", r);
}
function Qv(r, t) {
  ce.on(r, t);
}
function Gn(r, t, e) {
  var i, n, a, o, s;
  Z(t) && (e = t, t = ""), K(r) ? (i = r.type, n = r.event, o = r.update, s = r.publishNonRefinedEvent, e || (e = r.action), a = r.refineEvent) : (i = r, n = t);
  function l(f) {
    return f.toLowerCase();
  }
  n = l(n || i);
  var u = a ? l(i) : n;
  _l[i] || (vr(Pm.test(i) && Pm.test(n)), a && vr(n !== i), _l[i] = {
    actionType: i,
    refinedEventType: n,
    nonRefinedEventType: u,
    update: o,
    action: e,
    refineEvent: a
  }, th[n] = 1, a && s && (th[u] = 1), Jc[u] = i);
}
function NE(r, t) {
  dv.register(r, t);
}
function BE(r, t) {
  jv(bl, r, t, Nb, "layout");
}
function $i(r, t) {
  jv(bl, r, t, Bb, "visual");
}
var zm = [];
function jv(r, t, e, i, n, a) {
  if ((Z(t) || K(t)) && (e = t, t = i), !(ut(zm, e) >= 0)) {
    zm.push(e);
    var o = xb.wrapStageHandler(e, n);
    o.__prio = t, o.__raw = e, r.push(o);
  }
}
function Qb(r, t) {
  ih[r] = t;
}
function FE(r, t, e) {
  var i = KP("registerMap");
  i && i(r, t, e);
}
var zE = lM;
$i(qv, EP);
$i(lu, kP);
$i(lu, RP);
$i(qv, YP);
$i(lu, XP);
$i(Fb, pE);
Zb(bb);
Kb(_E, MP);
Qb("default", OP);
Gn({
  type: Ci,
  event: Ci,
  update: Ci
}, Ht);
Gn({
  type: ws,
  event: ws,
  update: ws
}, Ht);
Gn({
  type: Ks,
  event: Kh,
  update: Ks,
  action: Ht,
  refineEvent: Jv,
  publishNonRefinedEvent: !0
});
Gn({
  type: mc,
  event: Kh,
  update: mc,
  action: Ht,
  refineEvent: Jv,
  publishNonRefinedEvent: !0
});
Gn({
  type: Qs,
  event: Kh,
  update: Qs,
  action: Ht,
  refineEvent: Jv,
  publishNonRefinedEvent: !0
});
function Jv(r, t, e, i) {
  return {
    eventContent: {
      selected: dC(e),
      isFromClick: t.isFromClick || !1
    }
  };
}
qb("default", {});
qb("dark", Db);
var $m = [], $E = {
  registerPreprocessor: Zb,
  registerProcessor: Kb,
  registerPostInit: RE,
  registerPostUpdate: OE,
  registerUpdateLifecycle: Qv,
  registerAction: Gn,
  registerCoordinateSystem: NE,
  registerLayout: BE,
  registerVisual: $i,
  registerTransform: zE,
  registerLoading: Qb,
  registerMap: FE,
  registerImpl: ZP,
  PRIORITY: ME,
  ComponentModel: pt,
  ComponentView: ke,
  SeriesModel: Je,
  ChartView: Pe,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    pt.registerClass(r);
  },
  registerComponentView: function(r) {
    ke.registerClass(r);
  },
  registerSeriesModel: function(r) {
    Je.registerClass(r);
  },
  registerChartView: function(r) {
    Pe.registerClass(r);
  },
  registerCustomSeries: function(r, t) {
  },
  registerSubTypeDefaulter: function(r, t) {
    pt.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    lP(r, t);
  }
};
function mr(r) {
  if (F(r)) {
    M(r, function(t) {
      mr(t);
    });
    return;
  }
  ut($m, r) >= 0 || ($m.push(r), Z(r) && (r = {
    install: r
  }), r.install($E));
}
var HE = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.needIncludeZero = function() {
      return !this.option.scale;
    }, r.prototype.getCoordSysModel = function() {
    }, r;
  })()
), nh = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", _e).models[0];
    }, t.type = "cartesian2dAxis", t;
  })(pt)
);
Re(nh, HE);
var jb = {
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
      color: X.color.axisLine,
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
    color: X.color.axisLabel,
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
      color: X.color.axisSplitLine,
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: [X.color.backgroundTint, X.color.backgroundTransparent]
    }
  },
  breakArea: {
    show: !0,
    itemStyle: {
      color: X.color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: X.color.border,
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
}, VE = ft({
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
}, jb), td = ft({
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
      color: X.color.axisMinorSplitLine,
      width: 1
    }
  }
}, jb), GE = ft({
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
}, td), UE = yt({
  logBase: 10
}, td);
const WE = {
  category: VE,
  value: td,
  time: GE,
  log: UE
};
function Hm(r, t, e, i) {
  M(C1, function(n, a) {
    var o = ft(ft({}, WE[a], !0), i, !0), s = (
      /** @class */
      (function(l) {
        N(u, l);
        function u() {
          var f = l !== null && l.apply(this, arguments) || this;
          return f.type = t + "Axis." + a, f;
        }
        return u.prototype.mergeDefaultAndTheme = function(f, c) {
          var h = Za(this), v = h ? po(f) : {}, d = c.getTheme();
          ft(f, d.get(a + "Axis")), ft(f, this.getDefaultOption()), f.type = Vm(f), h && zr(f, v, h);
        }, u.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = Bc.createByAxisModel(this));
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
  }), r.registerSubTypeDefaulter(t + "Axis", Vm);
}
function Vm(r) {
  return r.type || (r.data ? "category" : "value");
}
var YE = (
  /** @class */
  (function() {
    function r(t) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
    }
    return r.prototype.getAxis = function(t) {
      return this._axes[t];
    }, r.prototype.getAxes = function() {
      return G(this._dimList, function(t) {
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
), Os = ["x", "y"];
function Gm(r) {
  return (r.type === "interval" || r.type === "time") && !il(r);
}
var XE = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = hr, e.dimensions = Os, e;
    }
    return t.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var e = this.getAxis("x").scale, i = this.getAxis("y").scale;
      if (!(!Gm(e) || !Gm(i))) {
        var n = al(e, null), a = al(i, null), o = this.dataToPoint([n[0], a[0]]), s = this.dataToPoint([n[1], a[1]]), l = n[1] - n[0], u = a[1] - a[0];
        if (!(!l || !u)) {
          var f = (s[0] - o[0]) / l, c = (s[1] - o[1]) / u, h = o[0] - n[0] * f, v = o[1] - a[0] * c, d = this._transform = [f, 0, 0, c, h, v];
          this._invTransform = so([], d);
        }
      }
    }, t.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, t.prototype.containPoint = function(e) {
      var i = this.getAxis("x"), n = this.getAxis("y");
      return i.contain(i.toLocalCoord(e[0])) && n.contain(n.toLocalCoord(e[1]));
    }, t.prototype.containData = function(e) {
      return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1]);
    }, t.prototype.containZone = function(e, i) {
      var n = this.dataToPoint(e), a = this.dataToPoint(i), o = this.getArea(), s = new J(n[0], n[1], a[0] - n[0], a[1] - n[1]);
      return o.intersect(s);
    }, t.prototype.dataToPoint = function(e, i, n) {
      n = n || [];
      var a = e[0], o = e[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return we(n, e, this._transform);
      var s = this.getAxis("x"), l = this.getAxis("y");
      return n[0] = s.toGlobalCoord(s.dataToCoord(a, i)), n[1] = l.toGlobalCoord(l.dataToCoord(o, i)), n;
    }, t.prototype.clampData = function(e, i) {
      var n = this.getAxis("x").scale, a = this.getAxis("y").scale, o = n.getExtent(), s = a.getExtent(), l = n.parse(e[0]), u = a.parse(e[1]);
      return i = i || [], i[0] = Math.min(Math.max(Math.min(o[0], o[1]), l), Math.max(o[0], o[1])), i[1] = Math.min(Math.max(Math.min(s[0], s[1]), u), Math.max(s[0], s[1])), i;
    }, t.prototype.pointToData = function(e, i, n) {
      if (n = n || [], this._invTransform)
        return we(n, e, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return n[0] = a.coordToData(a.toLocalCoord(e[0]), i), n[1] = o.coordToData(o.toLocalCoord(e[1]), i), n;
    }, t.prototype.getOtherAxis = function(e) {
      return this.getAxis(e.dim === "x" ? "y" : "x");
    }, t.prototype.getArea = function(e) {
      e = e || 0;
      var i = this.getAxis("x").getGlobalExtent(), n = this.getAxis("y").getGlobalExtent(), a = Math.min(i[0], i[1]) - e, o = Math.min(n[0], n[1]) - e, s = Math.max(i[0], i[1]) - a + e, l = Math.max(n[0], n[1]) - o + e;
      return new J(a, o, s, l);
    }, t;
  })(YE)
);
function qE(r, t) {
  var e = r.scale, i = r.model, n = rb(e, i, i.ecModel, r), a = In(e), o = In(t) ? t.intervalStub : t, s = a ? e.intervalStub : e, l = e.base, u = o.getTicks(), f = o.getTicks({
    expandToNicedExtent: !0
  }), c = u.length - 1, h, v, d;
  if (c === 1)
    h = v = 0, d = 1;
  else if (c === 2) {
    var p = Et(u[0].value - u[1].value), m = Et(u[1].value - u[2].value);
    h = v = 0, p === m ? d = 2 : (d = 1, p < m ? h = p / m : v = m / p);
  } else {
    var g = o.getConfig().interval;
    h = (1 - (u[0].value - f[0].value) / g) % 1, v = (1 - (f[c].value - u[c].value) / g) % 1, d = c - (h ? 1 : 0) - (v ? 1 : 0);
  }
  var y = n.zoomFixMM, _ = y[0] || y[1], b = [n.fixMM[0] || _, n.fixMM[1] || _], S = e.getExtent(), w = s.getExtent(), x = b1(w, b), T, C, D, A, L, I;
  function P(q) {
    for (var Q = 50, H = 0; H < Q && !q(); H++)
      D = a ? D * ct(l, 2) : o2(D), A = Bi(D);
  }
  function E() {
    T = lt(I - D * h, A);
  }
  function k() {
    C = lt(L + D * v, A);
  }
  function z() {
    I = h ? lt(T + D * h, A) : T;
  }
  function R() {
    L = v ? lt(C - D * v, A) : C;
  }
  if (b[0] && b[1]) {
    T = x[0], C = x[1], D = (C - T) / (d + h + v);
    var $ = r.getExtent(), Y = Et($[1] - $[0]);
    A = wT([C, T], Y, 0.5 / d), z(), R(), Te(A) && (D = lt(D, A));
  } else {
    var U = x[1] - x[0];
    D = a ? ct(M0(U), 1) : Vh(U / d, I0), A = Bi(D), b[0] ? (T = x[0], P(function() {
      if (z(), L = lt(I + D * d, A), k(), C >= x[1])
        return !0;
    })) : b[1] ? (C = x[1], P(function() {
      if (R(), I = lt(L - D * d, A), E(), T <= x[0])
        return !0;
    })) : P(function() {
      I = lt(fo(x[0] / D) * D, A), L = lt(Tn(x[1] / D) * D, A);
      var q = dr((L - I) / D);
      if (q <= d) {
        var Q = d - q, H = void 0, it = n.incl0 || a;
        if (it && x[0] === 0)
          H = [0, Q];
        else if (it && x[1] === 0)
          H = [Q, 0];
        else {
          var ot = Tn(Q / 2);
          H = Q % 2 === 0 ? [ot, ot] : T + C < x[0] + x[1] ? [ot, ot + 1] : [ot + 1, ot];
        }
        if (I = lt(I - D * H[0], A), L = lt(L + D * H[1], A), E(), k(), T <= x[0] && C >= x[1])
          return !0;
      }
    });
  }
  D1(e, b, w, [T, C], S, {
    // NOTE: Even in LogScale, `interval` should not be in log space.
    interval: D,
    // Force ticks count, otherwise cumulative error may cause more unexpected ticks to be generated.
    // Though the overlapping tick labels may be auto-ignored, but probably unexpected, e.g., the min
    // tick label is ignored but the secondary min tick label is shown, which is unexpected when
    // `axis.min` is user-specified or dataZoom-specified.
    intervalCount: d,
    intervalPrecision: A,
    niceExtent: [I, L]
  });
}
function Um(r, t) {
  var e = In(r), i = e ? r.intervalStub : r, n = t.fixMinMax || [], a = e ? r.getExtent() : null, o = i.getExtent(), s = b1(o, n, t.rawExtentResult);
  i.setExtent(s[0], s[1]), s = i.getExtent();
  var l = e ? KE(i, t) : ZE(i, t), u = l.intervalPrecision, f = l.interval, c = t.userInterval;
  c != null && (l.interval = c, l.intervalPrecision = Bi(c)), n[0] || (s[0] = lt(Tn(s[0] / f) * f, u)), n[1] || (s[1] = lt(fo(s[1] / f) * f, u)), c != null && (l.niceExtent = s.slice()), D1(r, n, o, s, a, l);
}
function ZE(r, t) {
  var e = Fv(t.splitNumber, 5), i = iu(r), n = t.minInterval, a = t.maxInterval, o = Vh(i / e, !0);
  n != null && o < n && (o = n), a != null && o > a && (o = a);
  var s = Bi(o), l = r.getExtent(), u = [lt(fo(l[0] / o) * o, s), lt(Tn(l[1] / o) * o, s)];
  return {
    interval: o,
    intervalPrecision: s,
    niceExtent: u
  };
}
function KE(r, t) {
  var e = Fv(t.splitNumber, 10), i = r.getExtent(), n = iu(r), a = ct(M0(n), 1), o = e / n * a;
  o <= 0.5 && (a *= 10);
  var s = Bi(a), l = [lt(fo(i[0] / a) * a, s), lt(Tn(i[1] / a) * a, s)];
  return {
    intervalPrecision: s,
    interval: a,
    niceExtent: l
  };
}
function Wm(r) {
  var t = r.scale, e = r.model, i = e.axis, n = e.ecModel;
  QE(t, e, i, n);
}
function QE(r, t, e, i, n) {
  var a = rb(r, t, i, e), o = ol(r) || Bv(r);
  jE(r, {
    splitNumber: t.get("splitNumber"),
    fixMinMax: a.fixMM,
    userInterval: t.get("interval"),
    minInterval: o ? t.get("minInterval") : null,
    maxInterval: o ? t.get("maxInterval") : null,
    rawExtentResult: a
  }), e && i && JI(e, r, a, i);
}
function jE(r, t) {
  JE[r.type](r, t);
}
var JE = {
  interval: Um,
  log: Um,
  time: m2,
  ordinal: Ht
}, Ym = [
  [3, 1],
  [0, 2]
  // xyIdx 1 => 'y'
], tk = (
  /** @class */
  (function() {
    function r(t, e, i) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Os, this._initCartesian(t, e, i), this.model = t;
    }
    return r.prototype.getRect = function() {
      return this._rect;
    }, r.prototype.update = function(t, e) {
      var i = this._axesMap;
      M(this._axesList, function(o) {
        qI(o, UI);
        var s = o.scale;
        Fe(s) && s.setSortInfo(o.model.get("categorySortInfo"));
      });
      function n(o) {
        for (var s = Tt(o), l = [], u = s.length - 1; u >= 0; u--) {
          var f = o[+s[u]];
          f.__alignTo ? l.push(f) : Wm(f);
        }
        M(l, function(c) {
          rk(c, c.__alignTo) ? Wm(c) : qE(c, c.__alignTo.scale);
        });
      }
      n(i.x), n(i.y);
      var a = {};
      M(i.x, function(o) {
        Xm(i, "y", o, a);
      }), M(i.y, function(o) {
        Xm(i, "x", o, a);
      }), this.resize(this.model, e);
    }, r.prototype.resize = function(t, e, i) {
      var n = t1(t, e), a = this._rect = qa(t.getBoxLayoutParams(), n.refContainer), o = this._axesMap, s = this._coordsList, l = t.get("containLabel");
      if (Jb(o, a), !i) {
        var u = nk(a, s, o, l, e), f = void 0;
        if (l)
          f = Qm(a.clone(), "axisLabel", null, a, o, u, n);
        else {
          var c = ak(t, a, n), h = c.outerBoundsRect, v = c.parsedOuterBoundsContain, d = c.outerBoundsClamp;
          h && (f = Qm(h, v, d, a, o, u, n));
        }
        tS(a, o, Ee.determine, null, f, n), M(this._coordsList, function(p) {
          p.calcAffineTransform();
        });
      }
    }, r.prototype.getAxis = function(t, e) {
      var i = this._axesMap[t];
      if (i != null)
        return i[e || 0];
    }, r.prototype.getAxes = function() {
      return this._axesList.slice();
    }, r.prototype.getCartesian = function(t, e) {
      if (t != null && e != null) {
        var i = "x" + t + "y" + e;
        return this._coordsMap[i];
      }
      K(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
      for (var n = 0, a = this._coordsList; n < a.length; n++)
        if (a[n].getAxis("x").index === t || a[n].getAxis("y").index === e)
          return a[n];
    }, r.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, r.prototype.convertToPixel = function(t, e, i) {
      var n = this._findConvertTarget(e);
      return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null;
    }, r.prototype.convertFromPixel = function(t, e, i) {
      var n = this._findConvertTarget(e);
      return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null;
    }, r.prototype._findConvertTarget = function(t) {
      var e = t.seriesModel, i = t.xAxisModel || e && e.getReferringComponents("xAxis", _e).models[0], n = t.yAxisModel || e && e.getReferringComponents("yAxis", _e).models[0], a = t.gridModel, o = this._coordsList, s, l;
      if (e)
        s = e.coordinateSystem, ut(o, s) < 0 && (s = null);
      else if (i && n)
        s = this.getCartesian(i.componentIndex, n.componentIndex);
      else if (i)
        l = this.getAxis("x", i.componentIndex);
      else if (n)
        l = this.getAxis("y", n.componentIndex);
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
    }, r.prototype._initCartesian = function(t, e, i) {
      var n = this, a = this, o = {
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
      this._axesMap = s, M(s.x, function(f, c) {
        M(s.y, function(h, v) {
          var d = "x" + c + "y" + v, p = new XE(d);
          p.master = n, p.model = t, n._coordsMap[d] = p, n._coordsList.push(p), p.addAxis(f), p.addAxis(h);
        });
      }), Zm(s.x), Zm(s.y);
      function u(f) {
        return function(c, h) {
          if (ek(c, t)) {
            var v = c.get("position");
            f === "x" ? v !== "top" && v !== "bottom" && (v = o.bottom ? "top" : "bottom") : v !== "left" && v !== "right" && (v = o.left ? "right" : "left"), o[v] = !0;
            var d = y2(c), p = new gI(f, _2(c, d), [0, 0], d, v);
            p.onBand = M1(p.scale, c), p.inverse = c.get("inverse"), c.axis = p, p.model = c, p.grid = a, p.index = h, a._axesList.push(p), s[f][h] = p, l[f]++;
          }
        };
      }
    }, r.prototype.getTooltipAxes = function(t) {
      var e = [], i = [];
      return M(this.getCartesians(), function(n) {
        var a = t != null && t !== "auto" ? n.getAxis(t) : n.getBaseAxis(), o = n.getOtherAxis(a);
        ut(e, a) < 0 && e.push(a), ut(i, o) < 0 && i.push(o);
      }), {
        baseAxes: e,
        otherAxes: i
      };
    }, r.create = function(t, e) {
      var i = [];
      return t.eachComponent("grid", function(n, a) {
        var o = new r(n, t, e);
        o.name = "grid_" + a, o.resize(n, e, !0), n.coordinateSystem = o, i.push(o), M(o._axesList, function(s) {
          XI(s, r.dimIdxMap);
        });
      }), t.eachSeries(function(n) {
        var a, o;
        fD({
          targetModel: n,
          coordSysType: hr,
          coordSysProvider: s
        });
        function s() {
          var l = $I(n), u = l.xAxisModel, f = l.yAxisModel;
          a = u.axis, o = f.axis;
          var c = u.getCoordSysModel(), h = c.coordinateSystem;
          return h.getCartesian(u.componentIndex, f.componentIndex);
        }
        a && o && (Tg(a, n, hr), Tg(o, n, hr));
      }, this), i;
    }, r.dimensions = Os, r.dimIdxMap = vv(Os), r;
  })()
);
function ek(r, t) {
  return r.getCoordSysModel() === t;
}
function Xm(r, t, e, i) {
  e.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var n = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), l = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (l != null)
    qm(s, n[l]) && (a = n[l]);
  else
    for (var u in n)
      if (qt(n, u) && qm(s, n[u]) && !i[f(n[u])]) {
        a = n[u];
        break;
      }
  a && (i[f(a)] = !0);
  function f(c) {
    return c.dim + "_" + c.index;
  }
}
function qm(r, t) {
  if (!t)
    return !1;
  var e = t.scale, i = b2(e, 0), n = t && t.type !== "category" && t.type !== "time" && i !== Fc;
  return n && r === "auto" && T2(t) && (n = !1), n;
}
function Zm(r) {
  for (var t = Tt(r), e, i = [], n = t.length - 1; n >= 0; n--) {
    var a = r[+t[n]];
    _1(a.scale) && D2(a.model, a.type) == null && (a.model.get("alignTicks") && a.model.get("interval") == null ? i.push(a) : e = a);
  }
  e || (e = i.pop()), e && M(i, function(o) {
    o.__alignTo = e;
  });
}
function rk(r, t) {
  return il(r.scale) || il(t.scale) || t.scale.getTicks().length < 2;
}
function ik(r, t) {
  var e = r.getExtent(), i = e[0] + e[1];
  r.toGlobalCoord = r.dim === "x" ? function(n) {
    return n + t;
  } : function(n) {
    return i - n + t;
  }, r.toLocalCoord = r.dim === "x" ? function(n) {
    return n - t;
  } : function(n) {
    return i - n + t;
  };
}
function Jb(r, t) {
  M(r.x, function(e) {
    return Km(e, t.x, t.width);
  }), M(r.y, function(e) {
    return Km(e, t.y, t.height);
  });
}
function Km(r, t, e) {
  var i = [0, e], n = r.inverse ? 1 : 0;
  r.setExtent(i[n], i[1 - n]), ik(r, t);
}
function Qm(r, t, e, i, n, a, o) {
  tS(i, n, Ee.estimate, t, !1, o);
  var s = [0, 0, 0, 0];
  u(0), u(1), f(i, 0, NaN), f(i, 1, NaN);
  var l = xw(s, function(h) {
    return h > 0;
  }) == null;
  return tl(i, s, !0, !0, e), Jb(n, i), l;
  function u(h) {
    M(n[pi[h]], function(v) {
      if (ja(v.model)) {
        var d = a.ensureRecord(v.model), p = d.labelInfoList;
        if (p)
          for (var m = 0; m < p.length; m++) {
            var g = p[m], y = v.scale.normalize(mo(v.scale, Pn(g.label).labelInfo.tick));
            y = h === 1 ? 1 - y : y, f(g.rect, h, y), f(g.rect, 1 - h, NaN);
          }
        var _ = d.nameLayout;
        if (_) {
          var y = Ln(d.nameLocation) ? 0.5 : NaN;
          f(_.rect, h, y), f(_.rect, 1 - h, NaN);
        }
      }
    });
  }
  function f(h, v, d) {
    var p = r[pi[v]] - h[pi[v]], m = h[Wa[v]] + h[pi[v]] - (r[Wa[v]] + r[pi[v]]);
    p = c(p, 1 - d), m = c(m, d);
    var g = Ym[v][0], y = Ym[v][1];
    s[g] = ct(s[g], p), s[y] = ct(s[y], m);
  }
  function c(h, v) {
    return h > 0 && !Ba(v) && v > 1e-4 && (h /= v), h;
  }
}
function nk(r, t, e, i, n) {
  var a = new X1(ok);
  return M(e, function(o) {
    return M(o, function(s) {
      if (ja(s.model)) {
        var l = !i;
        s.axisBuilder = HI(r, t, s.model, n, a, l);
      }
    });
  }), a;
}
function tS(r, t, e, i, n, a) {
  var o = e === Ee.determine;
  M(t, function(u) {
    return M(u, function(f) {
      ja(f.model) && (VI(f.axisBuilder, r, f.model), f.axisBuilder.build(o ? {
        axisTickLabelDetermine: !0
      } : {
        axisTickLabelEstimate: !0
      }, {
        noPxChange: n
      }));
    });
  });
  var s = {
    x: 0,
    y: 0
  };
  l(0), l(1);
  function l(u) {
    s[pi[1 - u]] = r[Wa[u]] <= a.refContainer[Wa[u]] * 0.5 ? 0 : 1 - u === 1 ? 2 : 1;
  }
  M(t, function(u, f) {
    return M(u, function(c) {
      ja(c.model) && ((i === "all" || o) && c.axisBuilder.build({
        axisName: !0
      }, {
        nameMarginLevel: s[f]
      }), o && c.axisBuilder.build({
        axisLine: !0
      }));
    });
  });
}
function ak(r, t, e) {
  var i, n = r.get("outerBoundsMode", !0);
  n === "same" ? i = t.clone() : (n == null || n === "auto") && (i = qa(r.get("outerBounds", !0) || ib, e.refContainer));
  var a = r.get("outerBoundsContain", !0), o;
  a == null || a === "auto" || ut(["all", "axisLabel"], a) < 0 ? o = "all" : o = a;
  var s = [dc(V(r.get("outerBoundsClampWidth", !0), vl[0]), t.width), dc(V(r.get("outerBoundsClampHeight", !0), vl[1]), t.height)];
  return {
    outerBoundsRect: i,
    parsedOuterBoundsContain: o,
    outerBoundsClamp: s
  };
}
var ok = function(r, t, e, i, n, a) {
  var o = e.axis.dim === "x" ? "y" : "x";
  q1(r, t, e, i, n, a), Ln(r.nameLocation) || M(t.recordMap[o], function(s) {
    s && s.labelInfoList && s.dirVec && K1(s.labelInfoList, s.dirVec, i, n);
  });
};
function sk(r, t) {
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
  return lk(e, r, t), e.seriesInvolved && fk(e, r), e;
}
function lk(r, t, e) {
  var i = t.getComponent("tooltip"), n = t.getComponent("axisPointer"), a = n.get("link", !0) || [], o = [];
  M(e.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var l = eo(s.model), u = r.coordSysAxesInfo[l] = {};
    r.coordSysMap[l] = s;
    var f = s.model, c = f.getModel("tooltip", i);
    if (M(s.getAxes(), mt(p, !1, null)), s.getTooltipAxes && i && c.get("show")) {
      var h = c.get("trigger") === "axis", v = c.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(c.get(["axisPointer", "axis"]));
      (h || v) && M(d.baseAxes, mt(p, v ? "cross" : !0, h)), v && M(d.otherAxes, mt(p, "cross", !1));
    }
    function p(m, g, y) {
      var _ = y.model.getModel("axisPointer", n), b = _.get("show");
      if (!(!b || b === "auto" && !m && !ah(_))) {
        g == null && (g = _.get("triggerTooltip")), _ = m ? uk(y, c, n, t, m, g) : _;
        var S = _.get("snap"), w = _.get("triggerEmphasis"), x = eo(y.model), T = g || S || y.type === "category", C = r.axesInfo[x] = {
          key: x,
          axis: y,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: g,
          triggerEmphasis: w,
          involveSeries: T,
          snap: S,
          useHandle: ah(_),
          seriesModels: [],
          linkGroup: null
        };
        u[x] = C, r.seriesInvolved = r.seriesInvolved || T;
        var D = ck(a, y);
        if (D != null) {
          var A = o[D] || (o[D] = {
            axesInfo: {}
          });
          A.axesInfo[x] = C, A.mapper = a[D].mapper, C.linkGroup = A;
        }
      }
    }
  });
}
function uk(r, t, e, i, n, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], l = {};
  M(s, function(h) {
    l[h] = nt(o.get(h));
  }), l.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (l.type = "line");
  var u = l.label || (l.label = {});
  if (u.show == null && (u.show = !1), n === "cross") {
    var f = o.get(["label", "show"]);
    if (u.show = f ?? !0, !a) {
      var c = l.lineStyle = o.get("crossStyle");
      c && yt(u, c.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new Ct(l, e, i));
}
function fk(r, t) {
  t.eachSeries(function(e) {
    var i = e.coordinateSystem, n = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
    !i || !i.model || n === "none" || n === !1 || n === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || M(r.coordSysAxesInfo[eo(i.model)], function(o) {
      var s = o.axis;
      i.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
    });
  });
}
function ck(r, t) {
  for (var e = t.model, i = t.dim, n = 0; n < r.length; n++) {
    var a = r[n] || {};
    if (Af(a[i + "AxisId"], e.id) || Af(a[i + "AxisIndex"], e.componentIndex) || Af(a[i + "AxisName"], e.name))
      return n;
  }
}
function Af(r, t) {
  return r === "all" || F(r) && ut(r, t) >= 0 || r === t;
}
function hk(r) {
  var t = ed(r);
  if (t) {
    var e = t.axisPointerModel, i = t.axis.scale, n = e.option, a = e.get("status"), o = e.get("value");
    o != null && (o = i.parse(o));
    var s = ah(e);
    a == null && (n.status = s ? "show" : "hide");
    var l = i.getExtent();
    // Pick a value on axis when initializing.
    (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), n.value = o, s && (n.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function ed(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[eo(r)];
}
function vk(r) {
  var t = ed(r);
  return t && t.axisPointerModel;
}
function ah(r) {
  return !!r.get(["handle", "show"]);
}
function eo(r) {
  return r.type + "||" + r.id;
}
var jm = {}, eS = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this.axisPointerClass && hk(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, n, !0);
    }, t.prototype.updateAxisPointer = function(e, i, n, a) {
      this._doUpdateAxisPointerClass(e, n, !1);
    }, t.prototype.remove = function(e, i) {
      var n = this._axisPointer;
      n && n.remove(i);
    }, t.prototype.dispose = function(e, i) {
      this._disposeAxisPointer(i), r.prototype.dispose.apply(this, arguments);
    }, t.prototype._doUpdateAxisPointerClass = function(e, i, n) {
      var a = t.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = vk(e);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, i, n) : this._disposeAxisPointer(i);
      }
    }, t.prototype._disposeAxisPointer = function(e) {
      this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(e, i) {
      jm[e] = i;
    }, t.getAxisPointerClass = function(e) {
      return e && jm[e];
    }, t.type = "axis", t;
  })(ke)
), oh = ht();
function dk(r, t, e, i) {
  var n = e.axis;
  if (!n.scale.isBlank()) {
    var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), l = i.coordinateSystem.getRect(), u = n.getTicksCoords({
      tickModel: a,
      breakTicks: "none",
      pruneByBreak: "preserve_extent_bound"
    });
    if (u.length) {
      var f = s.length, c = oh(r).splitAreaColors, h = j(), v = 0;
      if (c)
        for (var d = 0; d < u.length; d++) {
          var p = c.get(u[d].tickValue);
          if (p != null) {
            v = (p + (f - 1) * d) % f;
            break;
          }
        }
      var m = n.toGlobalCoord(u[0].coord), g = o.getAreaStyle();
      s = F(s) ? s : [s];
      for (var d = 1; d < u.length; d++) {
        var y = n.toGlobalCoord(u[d].coord), _ = void 0, b = void 0, S = void 0, w = void 0;
        n.isHorizontal() ? (_ = m, b = l.y, S = y - _, w = l.height, m = _ + S) : (_ = l.x, b = m, S = l.width, w = y - b, m = b + w);
        var x = u[d - 1].tickValue;
        x != null && h.set(x, v), t.add(new It({
          anid: x != null ? "area_" + x : null,
          shape: {
            x: _,
            y: b,
            width: S,
            height: w
          },
          style: yt({
            fill: s[v]
          }, g),
          autoBatch: !0,
          silent: !0
        })), v = (v + 1) % f;
      }
      oh(r).splitAreaColors = h;
    }
  }
}
function pk(r) {
  oh(r).splitAreaColors = null;
}
var gk = ["splitArea", "splitLine", "minorSplitLine", "breakArea"], rS = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
    }
    return t.prototype.render = function(e, i, n, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new Lt(), this.group.add(this._axisGroup), !!ja(e)) {
        this._axisGroup.add(e.axis.axisBuilder.group), M(gk, function(l) {
          e.get([l, "show"]) && mk[l](this, this._axisGroup, e, e.getCoordSysModel(), n);
        }, this);
        var s = a && a.type === "changeAxisOrder" && a.isInitSort;
        s || d_(o, this._axisGroup, e), r.prototype.render.call(this, e, i, n, a);
      }
    }, t.prototype.remove = function() {
      pk(this);
    }, t.type = "cartesianAxis", t;
  })(eS)
), mk = {
  splitLine: function(r, t, e, i, n) {
    var a = e.axis;
    if (!a.scale.isBlank()) {
      var o = e.getModel("splitLine"), s = o.getModel("lineStyle"), l = s.get("color"), u = o.get("showMinLine") !== !1, f = o.get("showMaxLine") !== !1;
      l = F(l) ? l : [l];
      for (var c = i.coordinateSystem.getRect(), h = a.isHorizontal(), v = 0, d = a.getTicksCoords({
        tickModel: o,
        breakTicks: "none",
        pruneByBreak: "preserve_extent_bound"
      }), p = [], m = [], g = s.getLineStyle(), y = 0; y < d.length; y++) {
        var _ = a.toGlobalCoord(d[y].coord);
        if (!(y === 0 && !u || y === d.length - 1 && !f)) {
          var b = d[y].tickValue;
          h ? (p[0] = _, p[1] = c.y, m[0] = _, m[1] = c.y + c.height) : (p[0] = c.x, p[1] = _, m[0] = c.x + c.width, m[1] = _);
          var S = v++ % l.length, w = new gr({
            anid: b != null ? "line_" + b : null,
            autoBatch: !0,
            shape: {
              x1: p[0],
              y1: p[1],
              x2: m[0],
              y2: m[1]
            },
            style: yt({
              stroke: l[S]
            }, g),
            silent: !0
          });
          Ya(w.shape, g.lineWidth), t.add(w);
        }
      }
    }
  },
  minorSplitLine: function(r, t, e, i, n) {
    var a = e.axis, o = e.getModel("minorSplitLine"), s = o.getModel("lineStyle"), l = i.coordinateSystem.getRect(), u = a.isHorizontal(), f = a.getMinorTicksCoords();
    if (f.length)
      for (var c = [], h = [], v = s.getLineStyle(), d = 0; d < f.length; d++)
        for (var p = 0; p < f[d].length; p++) {
          var m = a.toGlobalCoord(f[d][p].coord);
          u ? (c[0] = m, c[1] = l.y, h[0] = m, h[1] = l.y + l.height) : (c[0] = l.x, c[1] = m, h[0] = l.x + l.width, h[1] = m);
          var g = new gr({
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
          Ya(g.shape, v.lineWidth), t.add(g);
        }
  },
  splitArea: function(r, t, e, i, n) {
    dk(r, t, e, i);
  },
  breakArea: function(r, t, e, i, n) {
    e.axis.scale;
  }
}, iS = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "xAxis", t;
  })(rS)
), yk = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = iS.type, e;
    }
    return t.type = "yAxis", t;
  })(rS)
), _k = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "grid", e;
    }
    return t.prototype.render = function(e, i) {
      this.group.removeAll(), e.get("show") && this.group.add(new It({
        shape: e.coordinateSystem.getRect(),
        style: yt({
          fill: e.get("backgroundColor")
        }, e.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, t.type = "grid", t;
  })(ke)
), Jm = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function bk(r) {
  r.registerComponentView(_k), r.registerComponentModel(oL), r.registerCoordinateSystem("cartesian2d", tk), Hm(r, "x", nh, Jm), Hm(r, "y", nh, Jm), r.registerComponentView(iS), r.registerComponentView(yk), r.registerPreprocessor(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  });
}
var ty = gr.prototype, Df = Wl.prototype, nS = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
    }
    return r;
  })()
);
(function(r) {
  N(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t;
})(nS);
function Mf(r) {
  return isNaN(+r.cpx1) || isNaN(+r.cpy1);
}
var Sk = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e) {
      var i = r.call(this, e) || this;
      return i.type = "ec-line", i;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: X.color.neutral99,
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new nS();
    }, t.prototype.buildPath = function(e, i) {
      Mf(i) ? ty.buildPath.call(this, e, i) : Df.buildPath.call(this, e, i);
    }, t.prototype.pointAt = function(e) {
      return Mf(this.shape) ? ty.pointAt.call(this, e) : Df.pointAt.call(this, e);
    }, t.prototype.tangentAt = function(e) {
      var i = this.shape, n = Mf(i) ? [i.x2 - i.x1, i.y2 - i.y1] : Df.tangentAt.call(this, e);
      return Fh(n, n);
    }, t;
  })(dt)
), If = ["fromSymbol", "toSymbol"];
function ey(r) {
  return "_" + r + "Type";
}
function ry(r, t, e) {
  var i = t.getItemVisual(e, r);
  if (!i || i === "none")
    return i;
  var n = t.getItemVisual(e, r + "Size"), a = t.getItemVisual(e, r + "Rotate"), o = t.getItemVisual(e, r + "Offset"), s = t.getItemVisual(e, r + "KeepAspect"), l = Pv(n), u = ru(o || 0, l);
  return i + l + u + (a || "") + (s || "");
}
function iy(r, t, e) {
  var i = t.getItemVisual(e, r);
  if (!(!i || i === "none")) {
    var n = t.getItemVisual(e, r + "Size"), a = t.getItemVisual(e, r + "Rotate"), o = t.getItemVisual(e, r + "Offset"), s = t.getItemVisual(e, r + "KeepAspect"), l = Pv(n), u = ru(o || 0, l), f = Ni(i, -l[0] / 2 + u[0], -l[1] / 2 + u[1], l[0], l[1], null, s);
    return f.__specifiedRotation = a == null || isNaN(a) ? void 0 : +a * Math.PI / 180 || 0, f.name = r, f;
  }
}
function wk(r) {
  var t = new Sk({
    name: "line",
    subPixelOptimize: !0
  });
  return sh(t.shape, r), t;
}
function sh(r, t) {
  r.x1 = t[0][0], r.y1 = t[0][1], r.x2 = t[1][0], r.y2 = t[1][1], r.percent = 1;
  var e = t[2];
  e ? (r.cpx1 = e[0], r.cpy1 = e[1]) : (r.cpx1 = NaN, r.cpy1 = NaN);
}
var xk = (
  /** @class */
  (function(r) {
    N(t, r);
    function t(e, i, n) {
      var a = r.call(this) || this;
      return a._createLine(e, i, n), a;
    }
    return t.prototype._createLine = function(e, i, n) {
      var a = e.hostModel, o = e.getItemLayout(i), s = e.getItemVisual(i, "z2"), l = wk(o);
      l.shape.percent = 0, je(l, {
        z2: V(s, 0),
        shape: {
          percent: 1
        }
      }, a, i), this.add(l), M(If, function(u) {
        var f = iy(u, e, i);
        this.add(f), this[ey(u)] = ry(u, e, i);
      }, this), this._updateCommonStl(e, i, n);
    }, t.prototype.updateData = function(e, i, n) {
      var a = e.hostModel, o = this.childOfName("line"), s = e.getItemLayout(i), l = {
        shape: {}
      };
      sh(l.shape, s), Kt(o, l, a, i), M(If, function(u) {
        var f = ry(u, e, i), c = ey(u);
        if (this[c] !== f) {
          this.remove(this.childOfName(u));
          var h = iy(u, e, i);
          this.add(h);
        }
        this[c] = f;
      }, this), this._updateCommonStl(e, i, n);
    }, t.prototype.getLinePath = function() {
      return this.childAt(0);
    }, t.prototype._updateCommonStl = function(e, i, n) {
      var a = e.hostModel, o = this.childOfName("line"), s = n && n.emphasisLineStyle, l = n && n.blurLineStyle, u = n && n.selectLineStyle, f = n && n.labelStatesModels, c = n && n.emphasisDisabled, h = n && n.focus, v = n && n.blurScope;
      if (!n || e.hasItemOption) {
        var d = e.getItemModel(i), p = d.getModel("emphasis");
        s = p.getModel("lineStyle").getLineStyle(), l = d.getModel(["blur", "lineStyle"]).getLineStyle(), u = d.getModel(["select", "lineStyle"]).getLineStyle(), c = p.get("disabled"), h = p.get("focus"), v = p.get("blurScope"), f = zi(d);
      }
      var m = e.getItemVisual(i, "style"), g = m.stroke;
      o.useStyle(m), o.style.fill = null, o.style.strokeNoScale = !0, o.ensureState("emphasis").style = s, o.ensureState("blur").style = l, o.ensureState("select").style = u, M(If, function(w) {
        var x = this.childOfName(w);
        if (x) {
          x.setColor(g), x.style.opacity = m.opacity;
          for (var T = 0; T < Ce.length; T++) {
            var C = Ce[T], D = o.getState(C);
            if (D) {
              var A = D.style || {}, L = x.ensureState(C), I = L.style || (L.style = {});
              A.stroke != null && (I[x.__isEmptyBrush ? "stroke" : "fill"] = A.stroke), A.opacity != null && (I.opacity = A.opacity);
            }
          }
          x.markRedraw();
        }
      }, this);
      var y = a.getRawValue(i);
      zn(this, f, {
        labelDataIndex: i,
        labelFetcher: {
          getFormattedLabel: function(w, x) {
            return a.getFormattedLabel(w, x, e.dataType);
          }
        },
        inheritColor: g || X.color.neutral99,
        defaultOpacity: m.opacity,
        defaultText: (y == null ? e.getName(i) : isFinite(y) ? lt(y, 10) : y) + ""
      });
      var _ = this.getTextContent();
      if (_) {
        var b = f.normal;
        _.__align = _.style.align, _.__verticalAlign = _.style.verticalAlign, _.__position = b.get("position") || "middle";
        var S = b.get("distance");
        F(S) || (S = [S, S]), _.__labelDistance = S;
      }
      this.setTextConfig({
        position: null,
        local: !0,
        inside: !1
        // Can't be inside for stroke element.
      }), An(this, h, v, c);
    }, t.prototype.highlight = function() {
      Va(this);
    }, t.prototype.downplay = function() {
      Ga(this);
    }, t.prototype.updateLayout = function(e, i) {
      this.childOfName("line").stopAnimation(), this.setLinePoints(e.getItemLayout(i));
    }, t.prototype.setLinePoints = function(e) {
      var i = this.childOfName("line");
      sh(i.shape, e), i.dirty();
    }, t.prototype.beforeUpdate = function() {
      var e = this, i = e.childOfName("fromSymbol"), n = e.childOfName("toSymbol"), a = e.getTextContent();
      if (!i && !n && (!a || a.ignore))
        return;
      for (var o = 1, s = this.parent; s; )
        s.scaleX && (o /= s.scaleX), s = s.parent;
      var l = e.childOfName("line");
      if (!this.__dirty && !l.__dirty)
        return;
      var u = l.shape.percent, f = l.pointAt(0), c = l.pointAt(u), h = a0([], c, f);
      Fh(h, h);
      function v(D, A) {
        var L = D.__specifiedRotation;
        if (L == null) {
          var I = l.tangentAt(A);
          D.attr("rotation", (A === 1 ? -1 : 1) * Math.PI / 2 - Math.atan2(I[1], I[0]));
        } else
          D.attr("rotation", L);
      }
      if (i && (i.setPosition(f), v(i, 0), i.scaleX = i.scaleY = o * u, i.markRedraw()), n && (n.setPosition(c), v(n, 1), n.scaleX = n.scaleY = o * u, n.markRedraw()), a && !a.ignore) {
        a.x = a.y = 0, a.originX = a.originY = 0;
        var d = void 0, p = void 0, m = a.__labelDistance, g = m[0] * o, y = m[1] * o, _ = u / 2, b = l.tangentAt(_), S = [b[1], -b[0]], w = l.pointAt(_);
        S[1] > 0 && (S[0] = -S[0], S[1] = -S[1]);
        var x = b[0] < 0 ? -1 : 1;
        if (a.__position !== "start" && a.__position !== "end") {
          var T = -Math.atan2(b[1], b[0]);
          c[0] < f[0] && (T = Math.PI + T), a.rotation = T;
        }
        var C = void 0;
        switch (a.__position) {
          case "insideStartTop":
          case "insideMiddleTop":
          case "insideEndTop":
          case "middle":
            C = -y, p = "bottom";
            break;
          case "insideStartBottom":
          case "insideMiddleBottom":
          case "insideEndBottom":
            C = y, p = "top";
            break;
          default:
            C = 0, p = "middle";
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
            a.x = g * x + f[0], a.y = f[1] + C, d = b[0] < 0 ? "right" : "left", a.originX = -g * x, a.originY = -C;
            break;
          case "insideMiddleTop":
          case "insideMiddle":
          case "insideMiddleBottom":
          case "middle":
            a.x = w[0], a.y = w[1] + C, d = "center", a.originY = -C;
            break;
          case "insideEndTop":
          case "insideEnd":
          case "insideEndBottom":
            a.x = -g * x + c[0], a.y = c[1] + C, d = b[0] >= 0 ? "right" : "left", a.originX = g * x, a.originY = -C;
            break;
        }
        a.scaleX = a.scaleY = o, a.setStyle({
          // Use the user specified text align and baseline first
          verticalAlign: a.__verticalAlign || p,
          align: a.__align || d
        });
      }
    }, t;
  })(Lt)
), Tk = (
  /** @class */
  (function() {
    function r(t) {
      this.group = new Lt(), this._LineCtor = t || xk;
    }
    return r.prototype.updateData = function(t) {
      var e = this;
      this._progressiveEls = null;
      var i = this, n = i.group, a = i._lineData;
      i._lineData = t, a || n.removeAll();
      var o = ny(t);
      t.diff(a).add(function(s) {
        e._doAdd(t, s, o);
      }).update(function(s, l) {
        e._doUpdate(a, t, l, s, o);
      }).remove(function(s) {
        n.remove(a.getItemGraphicEl(s));
      }).execute();
    }, r.prototype.updateLayout = function() {
      var t = this._lineData;
      t && t.eachItemGraphicEl(function(e, i) {
        e.updateLayout(t, i);
      }, this);
    }, r.prototype.incrementalPrepareUpdate = function(t) {
      this._seriesScope = ny(t), this._lineData = null, this.group.removeAll();
    }, r.prototype.incrementalUpdate = function(t, e, i) {
      this._progressiveEls = [];
      function n(l) {
        !l.isGroup && !Ck(l) && (l.incremental = i, l.ensureState("emphasis").hoverLayer = Xl);
      }
      for (var a = t.start; a < t.end; a++) {
        var o = e.getItemLayout(a);
        if (Lf(o)) {
          var s = new this._LineCtor(e, a, this._seriesScope);
          s.traverse(n), this.group.add(s), e.setItemGraphicEl(a, s), this._progressiveEls.push(s);
        }
      }
    }, r.prototype.remove = function() {
      this.group.removeAll();
    }, r.prototype.eachRendered = function(t) {
      vo(this._progressiveEls || this.group, t);
    }, r.prototype._doAdd = function(t, e, i) {
      var n = t.getItemLayout(e);
      if (Lf(n)) {
        var a = new this._LineCtor(t, e, i);
        t.setItemGraphicEl(e, a), this.group.add(a);
      }
    }, r.prototype._doUpdate = function(t, e, i, n, a) {
      var o = t.getItemGraphicEl(i);
      if (!Lf(e.getItemLayout(n))) {
        this.group.remove(o);
        return;
      }
      o ? o.updateData(e, n, a) : o = new this._LineCtor(e, n, a), e.setItemGraphicEl(n, o), this.group.add(o);
    }, r;
  })()
);
function Ck(r) {
  return r.animators && r.animators.length > 0;
}
function ny(r) {
  var t = r.hostModel, e = t.getModel("emphasis");
  return {
    lineStyle: t.getModel("lineStyle").getLineStyle(),
    emphasisLineStyle: e.getModel(["lineStyle"]).getLineStyle(),
    blurLineStyle: t.getModel(["blur", "lineStyle"]).getLineStyle(),
    selectLineStyle: t.getModel(["select", "lineStyle"]).getLineStyle(),
    emphasisDisabled: e.get("disabled"),
    blurScope: e.get("blurScope"),
    focus: e.get("focus"),
    labelStatesModels: zi(t)
  };
}
function ay(r) {
  return isNaN(r[0]) || isNaN(r[1]);
}
function Lf(r) {
  return r && !ay(r[0]) && !ay(r[1]);
}
var gi = ht(), oy = nt, Pf = xt, Ak = (
  /** @class */
  (function() {
    function r() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return r.prototype.render = function(t, e, i, n) {
      var a = e.get("value"), o = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = i, !(!n && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, l = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), l && l.hide();
          return;
        }
        s && s.show(), l && l.show();
        var u = {};
        this.makeElOption(u, a, t, e, i);
        var f = u.graphicKey;
        f !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = f;
        var c = this._moveAnimation = this.determineAnimation(t, e);
        if (!s)
          s = this._group = new Lt(), this.createPointerEl(s, u, t, e), this.createLabelEl(s, u, t, e), i.getZr().add(s);
        else {
          var h = mt(sy, e, c);
          this.updatePointerEl(s, u, h), this.updateLabelEl(s, u, h, e);
        }
        uy(s, e, !0), this._renderHandle(a);
      }
    }, r.prototype.remove = function(t) {
      this.clear(t);
    }, r.prototype.dispose = function(t) {
      this.clear(t);
    }, r.prototype.determineAnimation = function(t, e) {
      var i = e.get("animation"), n = t.axis, a = n.type === "category", o = e.get("snap");
      if (!o && !a)
        return !1;
      if (i === "auto" || i == null) {
        var s = this.animationThreshold;
        if (a && Vn(n).w > s)
          return !0;
        if (o) {
          var l = ed(t).seriesDataCount, u = n.getExtent();
          return Math.abs(u[0] - u[1]) / l > s;
        }
        return !1;
      }
      return i === !0;
    }, r.prototype.makeElOption = function(t, e, i, n, a) {
    }, r.prototype.createPointerEl = function(t, e, i, n) {
      var a = e.pointer;
      if (a) {
        var o = gi(t).pointerEl = new yA[a.type](oy(e.pointer));
        t.add(o);
      }
    }, r.prototype.createLabelEl = function(t, e, i, n) {
      if (e.label) {
        var a = gi(t).labelEl = new ne(oy(e.label));
        t.add(a), ly(a, n);
      }
    }, r.prototype.updatePointerEl = function(t, e, i) {
      var n = gi(t).pointerEl;
      n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
        shape: e.pointer.shape
      }));
    }, r.prototype.updateLabelEl = function(t, e, i, n) {
      var a = gi(t).labelEl;
      a && (a.setStyle(e.label.style), i(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: e.label.x,
        y: e.label.y
      }), ly(a, n));
    }, r.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var e = this._axisPointerModel, i = this._api.getZr(), n = this._handle, a = e.getModel("handle"), o = e.get("status");
        if (!a.get("show") || !o || o === "hide") {
          n && i.remove(n), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, n = this._handle = ov(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(u) {
            ub(u.event);
          },
          onmousedown: Pf(this._onHandleDragMove, this, 0, 0),
          drift: Pf(this._onHandleDragMove, this),
          ondragend: Pf(this._onHandleDragEnd, this)
        }), i.add(n)), uy(n, e, !1), n.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var l = a.get("size");
        F(l) || (l = [l, l]), n.scaleX = l[0] / 2, n.scaleY = l[1] / 2, ob(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, r.prototype._moveHandleToValue = function(t, e) {
      sy(this._axisPointerModel, !e && this._moveAnimation, this._handle, Ef(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, r.prototype._onHandleDragMove = function(t, e) {
      var i = this._handle;
      if (i) {
        this._dragging = !0;
        var n = this.updateHandleTransform(Ef(i), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = n, i.stopAnimation(), i.attr(Ef(n)), gi(i).lastProp = null, this._doDispatchAxisPointer();
      }
    }, r.prototype._doDispatchAxisPointer = function() {
      var t = this._handle;
      if (t) {
        var e = this._payloadInfo, i = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: i.axis.dim,
            axisIndex: i.componentIndex
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
      var e = t.getZr(), i = this._group, n = this._handle;
      e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null), Wc(this, "_doDispatchAxisPointer");
    }, r.prototype.doClear = function() {
    }, r.prototype.buildLabel = function(t, e, i) {
      return i = i || 0, {
        x: t[i],
        y: t[1 - i],
        width: e[i],
        height: e[1 - i]
      };
    }, r;
  })()
);
function sy(r, t, e, i) {
  aS(gi(e).lastProp, i) || (gi(e).lastProp = i, t ? Kt(e, i, r) : (e.stopAnimation(), e.attr(i)));
}
function aS(r, t) {
  if (K(r) && K(t)) {
    var e = !0;
    return M(t, function(i, n) {
      e = e && aS(r[n], i);
    }), !!e;
  } else
    return r === t;
}
function ly(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function Ef(r) {
  return {
    x: r.x || 0,
    y: r.y || 0,
    rotation: r.rotation || 0
  };
}
function uy(r, t, e) {
  var i = t.get("z"), n = t.get("zlevel");
  r && r.traverse(function(a) {
    a.type !== "group" && (i != null && (a.z = i), n != null && (a.zlevel = n), a.silent = e);
  });
}
function Dk(r) {
  var t = r.get("type"), e = r.getModel(t + "Style"), i;
  return t === "line" ? (i = e.getLineStyle(), i.fill = null) : t === "shadow" && (i = e.getAreaStyle(), i.stroke = null), i;
}
function Mk(r, t, e, i, n) {
  var a = e.get("value"), o = oS(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
    precision: e.get(["label", "precision"]),
    formatter: e.get(["label", "formatter"])
  }), s = e.getModel("label"), l = eu(s.get("padding") || 0), u = s.getFont(), f = l0(o, u), c = n.position, h = f.width + l[1] + l[3], v = f.height + l[0] + l[2], d = n.align;
  d === "right" && (c[0] -= h), d === "center" && (c[0] -= h / 2);
  var p = n.verticalAlign;
  p === "bottom" && (c[1] -= v), p === "middle" && (c[1] -= v / 2), Ik(c, h, v, i);
  var m = s.get("backgroundColor");
  (!m || m === "auto") && (m = t.get(["axisLine", "lineStyle", "color"])), r.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: c[0],
    y: c[1],
    style: Dn(s, {
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
function Ik(r, t, e, i) {
  var n = i.getWidth(), a = i.getHeight();
  r[0] = Math.min(r[0] + t, n) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
}
function oS(r, t, e, i, n) {
  r = t.scale.parse(r);
  var a = t.scale.getLabel({
    value: r
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: n.precision
  }), o = n.formatter;
  if (o) {
    var s = {
      value: sl(t, {
        value: r
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    M(i, function(l) {
      var u = e.getSeriesByIndex(l.seriesIndex), f = l.dataIndexInside, c = u && u.getDataParams(f);
      c && s.seriesData.push(c);
    }), W(o) ? a = o.replace("{value}", a) : Z(o) && (a = o(s));
  }
  return a;
}
function sS(r, t, e) {
  var i = Xe();
  return Bh(i, i, e.rotation), Qf(i, i, e.position), av([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], i);
}
function Lk(r, t, e, i, n, a) {
  var o = Br.innerTextLayout(e.rotation, 0, e.labelDirection);
  e.labelMargin = n.get(["label", "margin"]), Mk(t, i, n, a, {
    position: sS(i.axis, r, e),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function Pk(r, t, e) {
  return e = e || 0, {
    x1: r[e],
    y1: r[1 - e],
    x2: t[e],
    y2: t[1 - e]
  };
}
function Ek(r, t, e) {
  return e = e || 0, {
    x: r[e],
    y: r[1 - e],
    width: t[e],
    height: t[1 - e]
  };
}
function kk(r, t, e) {
  return Vn(r, {
    fromStat: {
      sers: G(t, function(i) {
        return e.getSeriesByIndex(i.seriesIndex);
      })
    },
    min: 1
  }).w;
}
function Rk(r, t, e) {
  return [ct(Vt(t[0], t[1]), r - e / 2), Vt(r + e / 2, ct(t[0], t[1]))];
}
var Ok = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(e, i, n, a, o) {
      var s = n.axis, l = s.grid, u = a.get("type"), f = s.getGlobalExtent(), c = fy(l, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(i, !0));
      if (u && u !== "none") {
        var v = Dk(a), d = Nk[u](s, h, f, c, a.get("seriesDataIndices"), a.ecModel);
        d.style = v, e.graphicKey = d.type, e.pointer = d;
      }
      var p = hl(l.getRect(), n);
      Lk(i, e, p, n, a, o);
    }, t.prototype.getHandleTransform = function(e, i, n) {
      var a = hl(i.axis.grid.getRect(), i, {
        labelInside: !1
      });
      a.labelMargin = n.get(["handle", "margin"]);
      var o = sS(i.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(e, i, n, a) {
      var o = n.axis, s = o.grid, l = o.getGlobalExtent(!0), u = fy(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, c = [e.x, e.y];
      c[f] += i[f], c[f] = Vt(l[1], c[f]), c[f] = ct(l[0], c[f]);
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
  })(Ak)
);
function fy(r, t) {
  var e = {};
  return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
}
var Nk = {
  line: function(r, t, e, i) {
    var n = Pk([t, i[0]], [t, i[1]], cy(r));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: n
    };
  },
  shadow: function(r, t, e, i, n, a) {
    var o = kk(r, n, a), s = i[1] - i[0], l = Rk(t, e, o), u = l[0], f = l[1];
    return {
      type: "Rect",
      shape: Ek([u, i[0]], [f - u, s], cy(r))
    };
  }
};
function cy(r) {
  return r.dim === "x" ? 0 : 1;
}
var Bk = (
  /** @class */
  (function(r) {
    N(t, r);
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
        color: X.color.border,
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: X.color.shadowTint
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: X.color.neutral00,
        padding: [5, 7, 5, 7],
        backgroundColor: X.color.accent60,
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
        color: X.color.accent40,
        // For mobile performance
        throttle: 40
      }
    }, t;
  })(pt)
), cr = ht(), Fk = M;
function lS(r, t, e) {
  if (!tt.node) {
    var i = t.getZr();
    cr(i).records || (cr(i).records = {}), zk(i, t);
    var n = cr(i).records[r] || (cr(i).records[r] = {});
    n.handler = e;
  }
}
function zk(r, t) {
  if (cr(r).initialized)
    return;
  cr(r).initialized = !0, e("click", mt(kf, "click")), e("mousemove", mt(kf, "mousemove")), e("mousewheel", mt(kf, "mousewheel")), e("globalout", Hk);
  function e(i, n) {
    r.on(i, function(a) {
      var o = Vk(t);
      Fk(cr(r).records, function(s) {
        s && n(s, a, o.dispatchAction);
      }), $k(o.pendings, t);
    });
  }
}
function $k(r, t) {
  var e = r.showTip.length, i = r.hideTip.length, n;
  e ? n = r.showTip[e - 1] : i && (n = r.hideTip[i - 1]), n && (n.dispatchAction = null, t.dispatchAction(n));
}
function Hk(r, t, e) {
  r.handler("leave", null, e);
}
function kf(r, t, e, i) {
  t.handler(r, e, i);
}
function Vk(r) {
  var t = {
    showTip: [],
    hideTip: []
  }, e = function(i) {
    var n = t[i.type];
    n ? n.push(i) : (i.dispatchAction = e, r.dispatchAction(i));
  };
  return {
    dispatchAction: e,
    pendings: t
  };
}
function lh(r, t) {
  if (!tt.node) {
    var e = t.getZr(), i = (cr(e).records || {})[r];
    i && (cr(e).records[r] = null);
  }
}
var Gk = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, i, n) {
      var a = i.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click|mousewheel";
      lS("axisPointer", n, function(s, l, u) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
          type: "updateAxisPointer",
          currTrigger: s,
          x: l && l.offsetX,
          y: l && l.offsetY
        });
      });
    }, t.prototype.remove = function(e, i) {
      lh("axisPointer", i);
    }, t.prototype.dispose = function(e, i) {
      lh("axisPointer", i);
    }, t.type = "axisPointer", t;
  })(ke)
);
function uS(r, t) {
  var e = [], i = r.seriesIndex, n;
  if (i == null || !(n = t.getSeriesByIndex(i)))
    return {
      point: []
    };
  var a = n.getData(), o = Ei(a, r);
  if (o == null || o < 0 || F(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), l = n.coordinateSystem;
  if (n.getTooltipPosition)
    e = n.getTooltipPosition(o) || [];
  else if (l && l.dataToPoint)
    if (r.isStacked) {
      var u = l.getBaseAxis(), f = l.getOtherAxis(u), c = f.dim, h = u.dim, v = c === "x" || c === "radius" ? 1 : 0, d = a.mapDimension(h), p = [];
      p[v] = a.get(d, o), p[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = l.dataToPoint(p) || [];
    } else
      e = l.dataToPoint(a.getValues(G(l.dimensions, function(g) {
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
var hy = ht();
function Uk(r, t, e) {
  var i = r.currTrigger, n = [r.x, r.y], a = r, o = r.dispatchAction || xt(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    Ns(n) && (n = uS({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var l = Ns(n), u = a.axesInfo, f = s.axesInfo, c = i === "leave" || Ns(n), h = {}, v = {}, d = {
      list: [],
      map: {}
    }, p = {
      showPointer: mt(Yk, v),
      showTooltip: mt(Xk, d)
    };
    M(s.coordSysMap, function(g, y) {
      var _ = l || g.containPoint(n);
      M(s.coordSysAxesInfo[y], function(b, S) {
        var w = b.axis, x = Qk(u, b);
        if (!c && _ && (!u || x)) {
          var T = x && x.value;
          T == null && !l && (T = w.pointToData(n)), T != null && vy(b, T, p, !1, h);
        }
      });
    });
    var m = {};
    return M(f, function(g, y) {
      var _ = g.linkGroup;
      _ && !v[y] && M(_.axesInfo, function(b, S) {
        var w = v[S];
        if (b !== g && w) {
          var x = w.value;
          _.mapper && (x = g.axis.scale.parse(_.mapper(x, dy(b), dy(g)))), m[g.key] = x;
        }
      });
    }), M(m, function(g, y) {
      vy(f[y], g, p, !0, h);
    }), qk(v, f, h), Zk(d, n, r, o), Kk(f, o, e), h;
  }
}
function vy(r, t, e, i, n) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = Wk(t, r), s = o.payloadBatch, l = o.snapToValue;
    s[0] && n.seriesIndex == null && O(n, s[0]), !i && r.snap && a.containData(l) && l != null && (t = l), e.showPointer(r, t, s), e.showTooltip(r, o, l);
  }
}
function Wk(r, t) {
  var e = t.axis, i = e.dim, n = r, a = [], o = Number.MAX_VALUE, s = -1;
  return M(t.seriesModels, function(l, u) {
    var f = l.getData().mapDimensionsAll(i), c, h;
    if (l.getAxisTooltipData) {
      var v = l.getAxisTooltipData(f, r, e);
      h = v.dataIndices, c = v.nestestValue;
    } else {
      if (h = l.indicesOfNearest(
        i,
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
    if (Te(c)) {
      var d = r - c, p = Math.abs(d);
      p <= o && ((p < o || d >= 0 && s < 0) && (o = p, s = d, n = c, a.length = 0), M(h, function(m) {
        a.push({
          seriesIndex: l.seriesIndex,
          dataIndexInside: m,
          dataIndex: l.getData().getRawIndex(m)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: n
  };
}
function Yk(r, t, e, i) {
  r[t.key] = {
    value: e,
    payloadBatch: i
  };
}
function Xk(r, t, e, i) {
  var n = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !n.length)) {
    var l = t.coordSys.model, u = eo(l), f = r.map[u];
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
      value: i,
      // Caution: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: n.slice()
    });
  }
}
function qk(r, t, e) {
  var i = e.axesInfo = [];
  M(t, function(n, a) {
    var o = n.axisPointerModel.option, s = r[a];
    s ? (!n.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !n.useHandle && (o.status = "hide"), o.status === "show" && i.push({
      axisDim: n.axis.dim,
      axisIndex: n.axis.model.componentIndex,
      value: o.value
    });
  });
}
function Zk(r, t, e, i) {
  if (Ns(t) || !r.list.length) {
    i({
      type: "hideTip"
    });
    return;
  }
  var n = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  i({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: e.tooltipOption,
    position: e.position,
    dataIndexInside: n.dataIndexInside,
    dataIndex: n.dataIndex,
    seriesIndex: n.seriesIndex,
    dataByCoordSys: r.list
  });
}
function Kk(r, t, e) {
  var i = e.getZr(), n = "axisPointerLastHighlights", a = hy(i)[n] || {}, o = hy(i)[n] = {};
  M(r, function(f, c) {
    var h = f.axisPointerModel.option;
    h.status === "show" && f.triggerEmphasis && M(h.seriesDataIndices, function(v) {
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
  M(a, function(f, c) {
    !o[c] && l.push(u(f));
  }), M(o, function(f, c) {
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
function Qk(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var i = r[e];
    if (t.axis.dim === i.axisDim && t.axis.model.componentIndex === i.axisIndex)
      return i;
  }
}
function dy(r) {
  var t = r.axis.model, e = {}, i = e.axisDim = r.axis.dim;
  return e.axisIndex = e[i + "AxisIndex"] = t.componentIndex, e.axisName = e[i + "AxisName"] = t.name, e.axisId = e[i + "AxisId"] = t.id, e;
}
function Ns(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function fS(r) {
  eS.registerAxisPointerClass("CartesianAxisPointer", Ok), r.registerComponentModel(Bk), r.registerComponentView(Gk), r.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !F(e) && (t.axisPointer.link = [e]);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, {
    overallReset: function(t, e) {
      t.getComponent("axisPointer").coordSysAxesInfo = sk(t, e);
    }
  }), r.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, Uk);
}
function cS(r) {
  mr(bk), mr(fS);
}
function jk(r, t) {
  var e = eu(t.get("padding")), i = t.getItemStyle(["color", "opacity"]);
  i.fill = t.get("backgroundColor");
  var n = new It({
    shape: {
      x: r.x - e[3],
      y: r.y - e[0],
      width: r.width + e[1] + e[3],
      height: r.height + e[0] + e[2],
      r: t.get("borderRadius")
    },
    style: i,
    silent: !0,
    z2: -1
  });
  return n;
}
var Jk = (
  /** @class */
  (function(r) {
    N(t, r);
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
      backgroundColor: X.color.neutral00,
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      defaultBorderColor: X.color.border,
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
          color: X.color.borderShade,
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: X.color.tertiary,
        fontSize: 14
      }
    }, t;
  })(pt)
);
function hS(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function vS(r) {
  if (tt.domSupported) {
    for (var t = document.documentElement.style, e = 0, i = r.length; e < i; e++)
      if (r[e] in t)
        return r[e];
  }
}
var dS = vS(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), tR = vS(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function pS(r, t) {
  if (!r)
    return t;
  t = j_(t, !0);
  var e = r.indexOf(t);
  return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
}
function eR(r, t) {
  var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
  return e ? e[t] : null;
}
var rR = pS(tR, "transition"), rd = pS(dS, "transform"), iR = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (tt.transform3dSupported ? "will-change:transform;" : "");
function nR(r) {
  return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
}
function aR(r, t, e) {
  if (!W(e) || e === "inside")
    return "";
  var i = r.get("backgroundColor"), n = r.get("borderWidth");
  t = Ri(t);
  var a = nR(e), o = Math.max(Math.round(n) * 1.5, 6), s = "", l = rd + ":", u;
  ut(["left", "right"], a) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (u = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (u = a === "top" ? 225 : 45) + "deg)");
  var f = u * Math.PI / 180, c = o + n, h = c * Math.abs(Math.cos(f)) + c * Math.abs(Math.sin(f)), v = Math.round(((h - Math.SQRT2 * n) / 2 + Math.SQRT2 * n - (h - c) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = t + " solid " + n + "px;", p = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + i + ";"];
  return '<div style="' + p.join("") + '"></div>';
}
function oR(r, t, e) {
  var i = "cubic-bezier(0.23,1,0.32,1)", n = "", a = "";
  return e && (n = " " + r / 2 + "s " + i, a = "opacity" + n + ",visibility" + n), t || (n = " " + r + "s " + i, a += (a.length ? "," : "") + (tt.transformSupported ? "" + rd + n : ",left" + n + ",top" + n)), rR + ":" + a;
}
function py(r, t, e) {
  var i = r.toFixed(0) + "px", n = t.toFixed(0) + "px";
  if (!tt.transformSupported)
    return e ? "top:" + n + ";left:" + i + ";" : [["top", n], ["left", i]];
  var a = tt.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + i + "," + n + (a ? ",0" : "") + ")";
  return e ? "top:0;left:0;" + rd + ":" + o + ";" : [["top", 0], ["left", 0], [dS, o]];
}
function sR(r) {
  var t = [], e = r.get("fontSize"), i = r.getTextColor();
  i && t.push("color:" + i), t.push("font:" + r.getFont());
  var n = V(r.get("lineHeight"), Math.round(e * 3 / 2));
  e && t.push("line-height:" + n + "px");
  var a = r.get("textShadowColor"), o = r.get("textShadowBlur") || 0, s = r.get("textShadowOffsetX") || 0, l = r.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + l + "px " + o + "px " + a), M(["decoration", "align"], function(u) {
    var f = r.get(u);
    f && t.push("text-" + u + ":" + f);
  }), t.join(";");
}
function lR(r, t, e, i) {
  var n = [], a = r.get("transitionDuration"), o = r.get("backgroundColor"), s = r.get("shadowBlur"), l = r.get("shadowColor"), u = r.get("shadowOffsetX"), f = r.get("shadowOffsetY"), c = r.getModel("textStyle"), h = s1(r, "html"), v = u + "px " + f + "px " + s + "px " + l;
  return n.push("box-shadow:" + v), t && a > 0 && n.push(oR(a, e, i)), o && n.push("background-color:" + o), M(["width", "color", "radius"], function(d) {
    var p = "border-" + d, m = j_(p), g = r.get(m);
    g != null && n.push(p + ":" + g + (d === "color" ? "" : "px"));
  }), n.push(sR(c)), h != null && n.push("padding:" + eu(h).join("px ") + "px"), n.join(";") + ";";
}
function gy(r, t, e, i, n) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && TD(r, o, e, i, n);
  } else {
    r[0] = i, r[1] = n;
    var s = a && a.getViewportRootOffset();
    s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
  }
  r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var uR = (
  /** @class */
  (function() {
    function r(t, e) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, tt.wxa)
        return null;
      var i = document.createElement("div");
      i.domBelongToZr = !0, this.el = i;
      var n = this._zr = t.getZr(), a = e.appendTo, o = a && (W(a) ? document.querySelector(a) : Na(a) ? a : Z(a) && a(t.getDom()));
      gy(this._styleCoord, n, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(i), this._api = t, this._container = o;
      var s = this;
      i.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, i.onmousemove = function(l) {
        if (l = l || window.event, !s._enterable) {
          var u = n.handler, f = n.painter.getViewportRoot();
          he(f, l, !0), u.dispatch("mousemove", l);
        }
      }, i.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return r.prototype.update = function(t) {
      if (!this._container) {
        var e = this._api.getDom(), i = eR(e, "position"), n = e.style;
        n.position !== "absolute" && i !== "absolute" && (n.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this._enableDisplayTransition = t.get("displayTransition") && t.get("transitionDuration") > 0, this.el.className = t.get("className") || "";
    }, r.prototype.show = function(t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var i = this.el, n = i.style, a = this._styleCoord;
      i.innerHTML ? n.cssText = iR + lR(t, !this._firstShow, this._longHide, this._enableDisplayTransition) + py(a[0], a[1], !0) + ("border-color:" + Ri(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : n.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, r.prototype.setContent = function(t, e, i, n, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (W(a) && i.get("trigger") === "item" && !hS(i) && (s = aR(i, n, a)), W(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", F(t) || (t = [t]);
        for (var l = 0; l < t.length; l++)
          Na(t[l]) && t[l].parentNode !== o && o.appendChild(t[l]);
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
        var i = this._styleCoord;
        if (gy(i, this._zr, this._container, t, e), i[0] != null && i[1] != null) {
          var n = this.el.style, a = py(i[0], i[1]);
          M(a, function(o) {
            n[o[0]] = o[1];
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
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(xt(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this._zr;
      CD(t && t.painter && t.painter.getViewportRoot(), this._container);
      var e = this.el;
      if (e) {
        e.onmouseenter = e.onmousemove = e.onmouseleave = null;
        var i = e.parentNode;
        i && i.removeChild(e);
      }
      this.el = this._container = null;
    }, r;
  })()
), fR = (
  /** @class */
  (function() {
    function r(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), yy(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return r.prototype.update = function(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized(), this._alwaysShowContent = e;
    }, r.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, r.prototype.setContent = function(t, e, i, n, a) {
      var o = this;
      K(t) && Jt(""), this.el && this._zr.remove(this.el);
      var s = i.getModel("textStyle");
      this.el = new ne({
        style: {
          rich: e.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: n,
          textShadowColor: s.get("textShadowColor"),
          fill: i.get(["textStyle", "color"]),
          padding: s1(i, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: i.get("z")
      }), M(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(u) {
        o.el.style[u] = i.get(u);
      }), M(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(u) {
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
      var t = this.el, e = this.el.getBoundingRect(), i = my(t.style);
      return [e.width + i.left + i.right, e.height + i.top + i.bottom];
    }, r.prototype.moveTo = function(t, e) {
      var i = this.el;
      if (i) {
        var n = this._styleCoord;
        yy(n, this._zr, t, e), t = n[0], e = n[1];
        var a = i.style, o = Mr(a.borderWidth || 0), s = my(a);
        i.x = t + o + s.left, i.y = e + o + s.top, i.markRedraw();
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(xt(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, r;
  })()
);
function Mr(r) {
  return Math.max(0, r);
}
function my(r) {
  var t = Mr(r.shadowBlur || 0), e = Mr(r.shadowOffsetX || 0), i = Mr(r.shadowOffsetY || 0);
  return {
    left: Mr(t - e),
    right: Mr(t + e),
    top: Mr(t - i),
    bottom: Mr(t + i)
  };
}
function yy(r, t, e, i) {
  r[0] = e, r[1] = i, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var cR = new It({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), hR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, i) {
      if (!(tt.node || !i.getDom())) {
        var n = e.getComponent("tooltip"), a = this._renderMode = GT(n.get("renderMode"));
        this._tooltipContent = a === "richText" ? new fR(i) : new uR(i, {
          appendTo: n.get("appendToBody", !0) ? "body" : n.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(e, i, n) {
      if (!(tt.node || !n.getDom())) {
        this.group.removeAll(), this._tooltipModel = e, this._ecModel = i, this._api = n;
        var a = this._tooltipContent;
        a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? ob(this, "_updatePosition", 50, "fixRate") : Wc(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var e = this._tooltipModel, i = e.get("triggerOn");
      lS("itemTooltip", this._api, xt(function(n, a, o) {
        i !== "none" && (i.indexOf(n) >= 0 ? this._tryShow(a, o) : n === "leave" && this._hide(o));
      }, this));
    }, t.prototype._keepShow = function() {
      var e = this._tooltipModel, i = this._ecModel, n = this._api, a = e.get("triggerOn");
      if (e.get("trigger") !== "axis" && (this._lastDataByCoordSys = null, this._cbParamsList = null), this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
        var o = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !n.isDisposed() && o.manuallyShowTip(e, i, n, {
            x: o._lastX,
            y: o._lastY,
            dataByCoordSys: o._lastDataByCoordSys
          });
        });
      }
    }, t.prototype.manuallyShowTip = function(e, i, n, a) {
      if (!(a.from === this.uid || tt.node || !n.getDom())) {
        var o = _y(a, n);
        this._ticket = "";
        var s = a.dataByCoordSys, l = gR(a, i, n);
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
          var f = cR;
          f.x = a.x, f.y = a.y, f.update(), at(f).tooltipConfig = {
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
          if (this._manuallyAxisShowTip(e, i, n, a))
            return;
          var c = uS(a, i), h = c.point[0], v = c.point[1];
          h != null && v != null && this._tryShow({
            offsetX: h,
            offsetY: v,
            target: c.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else a.x != null && a.y != null && (n.dispatchAction({
          type: "updateAxisPointer",
          x: a.x,
          y: a.y
        }), this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          target: n.getZr().findHover(a.x, a.y).target
        }, o));
      }
    }, t.prototype.manuallyHideTip = function(e, i, n, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, this._cbParamsList = null, a.from !== this.uid && this._hide(_y(a, n));
    }, t.prototype._manuallyAxisShowTip = function(e, i, n, a) {
      var o = a.seriesIndex, s = a.dataIndex, l = i.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || l == null)) {
        var u = i.getSeriesByIndex(o);
        if (u) {
          var f = u.getData(), c = la([f.getItemModel(s), u, (u.coordinateSystem || {}).model], this._tooltipModel);
          if (c.get("trigger") === "axis")
            return n.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, t.prototype._tryShow = function(e, i) {
      var n = e.target, a = this._tooltipModel;
      if (a) {
        this._lastX = e.offsetX, this._lastY = e.offsetY;
        var o = e.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, e);
        else if (n) {
          var s = at(n);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null, this._cbParamsList = null;
          var l, u;
          ma(n, function(f) {
            if (f.tooltipDisabled)
              return l = u = null, !0;
            l || u || (at(f).dataIndex != null ? l = f : at(f).tooltipConfig != null && (u = f));
          }, !0), l ? this._showSeriesItemTooltip(e, l, i) : u ? this._showComponentItemTooltip(e, u, i) : this._hide(i);
        } else
          this._lastDataByCoordSys = null, this._cbParamsList = null, this._hide(i);
      }
    }, t.prototype._showOrMove = function(e, i) {
      var n = e.get("showDelay");
      i = xt(i, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(i, n) : i();
    }, t.prototype._showAxisTooltip = function(e, i) {
      var n = this._ecModel, a = this._tooltipModel, o = [i.offsetX, i.offsetY], s = la([i.tooltipOption], a), l = this._renderMode, u = [], f = Oi("section", {
        blocks: [],
        noHeader: !0
      }), c = [], h = new tf();
      M(e, function(y) {
        M(y.dataByAxis, function(_) {
          var b = n.getComponent(_.axisDim + "Axis", _.axisIndex), S = _.value, w = b.axis, x = w.scale.parse(S);
          if (!(!b || S == null)) {
            var T = oS(S, w, n, _.seriesDataIndices, _.valueLabelOpt), C = Oi("section", {
              header: T,
              noHeader: !We(T),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(C), M(_.seriesDataIndices, function(D) {
              var A = n.getSeriesByIndex(D.seriesIndex), L = D.dataIndexInside, I = A.getDataParams(L);
              if (!(I.dataIndex < 0)) {
                I.axisDim = _.axisDim, I.axisIndex = _.axisIndex, I.axisType = _.axisType, I.axisId = _.axisId, I.axisValue = sl(b.axis, {
                  value: x
                }), I.axisValueLabel = T, I.marker = h.makeTooltipMarker("item", Ri(I.color), l);
                var P = rg(A.formatTooltip(L, !0, null)), E = P.frag;
                if (E) {
                  var k = la([A], a).get("valueFormatter");
                  C.blocks.push(k ? O({
                    valueFormatter: k
                  }, E) : E);
                }
                P.text && c.push(P.text), u.push(I);
              }
            });
          }
        });
      }), f.blocks.reverse(), c.reverse();
      var v = i.position, d = s.get("order"), p = og(f, h, l, d, n.get("useUTC"), s.get("textStyle"));
      p && c.unshift(p);
      var m = l === "richText" ? `

` : "<br/>", g = c.join(m);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(e, u) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, u) : this._showTooltipContent(s, g, u, Math.random() + "", o[0], o[1], v, null, h);
      });
    }, t.prototype._showSeriesItemTooltip = function(e, i, n) {
      var a = this._ecModel, o = at(i), s = o.seriesIndex, l = a.getSeriesByIndex(s), u = o.dataModel || l, f = o.dataIndex, c = o.dataType, h = u.getData(c), v = this._renderMode, d = e.positionDefault, p = la([h.getItemModel(f), u, l && (l.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), m = p.get("trigger");
      if (!(m != null && m !== "item")) {
        var g = u.getDataParams(f, c), y = new tf();
        g.marker = y.makeTooltipMarker("item", Ri(g.color), v);
        var _ = rg(u.formatTooltip(f, !1, c)), b = p.get("order"), S = p.get("valueFormatter"), w = _.frag, x = w ? og(S ? O({
          valueFormatter: S
        }, w) : w, y, v, b, a.get("useUTC"), p.get("textStyle")) : _.text, T = "item_" + u.name + "_" + f;
        this._showOrMove(p, function() {
          this._showTooltipContent(p, x, g, T, e.offsetX, e.offsetY, e.position, e.target, y);
        }), n({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: h.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, t.prototype._showComponentItemTooltip = function(e, i, n) {
      var a = this._renderMode === "html", o = at(i), s = o.tooltipConfig, l = s.option || {}, u = l.encodeHTMLContent;
      if (W(l)) {
        var f = l;
        l = {
          content: f,
          // Fixed formatter
          formatter: f
        }, u = !0;
      }
      u && a && l.content && (l = nt(l), l.content = te(l.content));
      var c = [l], h = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      h && c.push(h), c.push({
        formatter: l.content
      });
      var v = e.positionDefault, d = la(c, this._tooltipModel, v ? {
        position: v
      } : null), p = d.get("content"), m = Math.random() + "", g = new tf();
      this._showOrMove(d, function() {
        var y = nt(d.get("formatterParams") || {});
        this._showTooltipContent(d, p, y, m, e.offsetX, e.offsetY, e.position, i, g);
      }), n({
        type: "showTip",
        from: this.uid
      });
    }, t.prototype._showTooltipContent = function(e, i, n, a, o, s, l, u, f) {
      if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
        var c = this._tooltipContent;
        c.setEnterable(e.get("enterable"));
        var h = e.get("formatter");
        l = l || e.get("position");
        var v = i, d = this._getNearestPoint([o, s], n, e.get("trigger"), e.get("borderColor"), e.get("defaultBorderColor", !0)), p = d.color;
        if (h)
          if (W(h)) {
            var m = e.ecModel.get("useUTC"), g = F(n) ? n[0] : n, y = g && g.axisType && g.axisType.indexOf("time") >= 0;
            v = h, y && (v = tu(g.axisValue, v, m)), v = J_(v, n, !0);
          } else if (Z(h)) {
            var _ = xt(function(b, S) {
              b === this._ticket && (c.setContent(S, f, e, p, l), this._updatePosition(e, l, o, s, c, n, u));
            }, this);
            this._ticket = a, v = h(n, a, _);
          } else
            v = h;
        c.setContent(v, f, e, p, l), c.show(e, p), this._updatePosition(e, l, o, s, c, n, u);
      }
    }, t.prototype._getNearestPoint = function(e, i, n, a, o) {
      if (n === "axis" || F(i))
        return {
          color: a || o
        };
      if (!F(i))
        return {
          color: a || i.color || i.borderColor
        };
    }, t.prototype._updatePosition = function(e, i, n, a, o, s, l) {
      var u = this._api.getWidth(), f = this._api.getHeight();
      i = i || e.get("position");
      var c = o.getSize(), h = e.get("align"), v = e.get("verticalAlign"), d = l && l.getBoundingRect().clone();
      if (l && d.applyTransform(l.transform), Z(i) && (i = i([n, a], s, o.el, d, {
        viewSize: [u, f],
        contentSize: c.slice()
      })), F(i))
        n = Mt(i[0], u), a = Mt(i[1], f);
      else if (K(i)) {
        var p = i;
        p.width = c[0], p.height = c[1];
        var m = qa(p, {
          width: u,
          height: f
        });
        n = m.x, a = m.y, h = null, v = null;
      } else if (W(i) && l) {
        var g = pR(i, d, c, e.get("borderWidth"));
        n = g[0], a = g[1];
      } else {
        var g = vR(n, a, o, u, f, h ? null : 20, v ? null : 20);
        n = g[0], a = g[1];
      }
      if (h && (n -= by(h) ? c[0] / 2 : h === "right" ? c[0] : 0), v && (a -= by(v) ? c[1] / 2 : v === "bottom" ? c[1] : 0), hS(e)) {
        var g = dR(n, a, o, u, f);
        n = g[0], a = g[1];
      }
      o.moveTo(n, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(e, i) {
      var n = this._lastDataByCoordSys, a = this._cbParamsList, o = !!n && n.length === e.length;
      return o && M(n, function(s, l) {
        var u = s.dataByAxis || [], f = e[l] || {}, c = f.dataByAxis || [];
        o = o && u.length === c.length, o && M(u, function(h, v) {
          var d = c[v] || {}, p = h.seriesDataIndices || [], m = d.seriesDataIndices || [];
          o = o && h.value === d.value && h.axisType === d.axisType && h.axisId === d.axisId && p.length === m.length, o && M(p, function(g, y) {
            var _ = m[y];
            o = o && g.seriesIndex === _.seriesIndex && g.dataIndex === _.dataIndex;
          }), a && M(h.seriesDataIndices, function(g) {
            var y = g.seriesIndex, _ = i[y], b = a[y];
            _ && b && b.data !== _.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = e, this._cbParamsList = i, !!o;
    }, t.prototype._hide = function(e) {
      this._lastDataByCoordSys = null, this._cbParamsList = null, e({
        type: "hideTip",
        from: this.uid
      });
    }, t.prototype.dispose = function(e, i) {
      tt.node || !i.getDom() || (Wc(this, "_updatePosition"), this._tooltipContent.dispose(), lh("itemTooltip", i), this._tooltipContent = null, this._tooltipModel = null, this._lastDataByCoordSys = null, this._cbParamsList = null);
    }, t.type = "tooltip", t;
  })(ke)
);
function la(r, t, e) {
  var i = t.ecModel, n;
  e ? (n = new Ct(e, i, i), n = new Ct(t.option, n, i)) : n = t;
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o && (o instanceof Ct && (o = o.get("tooltip", !0)), W(o) && (o = {
      formatter: o
    }), o && (n = new Ct(o, n, i)));
  }
  return n;
}
function _y(r, t) {
  return r.dispatchAction || xt(t.dispatchAction, t);
}
function vR(r, t, e, i, n, a, o) {
  var s = e.getSize(), l = s[0], u = s[1];
  return a != null && (r + l + a + 2 > i ? r -= l + a : r += a), o != null && (t + u + o > n ? t -= u + o : t += o), [r, t];
}
function dR(r, t, e, i, n) {
  var a = e.getSize(), o = a[0], s = a[1];
  return r = Math.min(r + o, i) - o, t = Math.min(t + s, n) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
}
function pR(r, t, e, i) {
  var n = e[0], a = e[1], o = Math.ceil(Math.SQRT2 * i) + 8, s = 0, l = 0, u = t.width, f = t.height;
  switch (r) {
    case "inside":
      s = t.x + u / 2 - n / 2, l = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + u / 2 - n / 2, l = t.y - a - o;
      break;
    case "bottom":
      s = t.x + u / 2 - n / 2, l = t.y + f + o;
      break;
    case "left":
      s = t.x - n - o, l = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + u + o, l = t.y + f / 2 - a / 2;
  }
  return [s, l];
}
function by(r) {
  return r === "center" || r === "middle";
}
function gR(r, t, e) {
  var i = Wh(r).queryOptionMap, n = i.keys()[0];
  if (!(!n || n === "series")) {
    var a = ho(t, n, i.get(n), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = e.getViewOfComponentModel(o), l;
      if (s.group.traverse(function(u) {
        var f = at(u).tooltipConfig;
        if (f && f.name === r.name)
          return l = u, !0;
      }), l)
        return {
          componentMainType: n,
          componentIndex: o.componentIndex,
          el: l
        };
    }
  }
}
function gS(r) {
  mr(fS), r.registerComponentModel(Jk), r.registerComponentView(hR), r.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, Ht), r.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, Ht);
}
function id(r, t) {
  if (!r)
    return !1;
  for (var e = F(r) ? r : [r], i = 0; i < e.length; i++)
    if (e[i] && e[i][t])
      return !0;
  return !1;
}
function ls(r) {
  pc(r, "label", ["show"]);
}
var us = ht(), tr = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.createdBySelf = !1, e.preventAutoZ = !0, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n), this._mergeOption(e, n, !1, !0);
    }, t.prototype.isAnimationEnabled = function() {
      if (tt.node)
        return !1;
      var e = this.__hostSeries;
      return this.getShallow("animation") && e && e.isAnimationEnabled();
    }, t.prototype.mergeOption = function(e, i) {
      this._mergeOption(e, i, !1, !1);
    }, t.prototype._mergeOption = function(e, i, n, a) {
      var o = this.mainType;
      n || i.eachSeries(function(s) {
        var l = s.get(this.mainType, !0), u = us(s)[o];
        if (!l || !l.data) {
          us(s)[o] = null;
          return;
        }
        u ? u._mergeOption(l, i, !0) : (a && ls(l), M(l.data, function(f) {
          f instanceof Array ? (ls(f[0]), ls(f[1])) : ls(f);
        }), u = this.createMarkerModelFromSeries(l, this, i), O(u, {
          mainType: this.mainType,
          // Use the same series index and name
          seriesIndex: s.seriesIndex,
          name: s.name,
          createdBySelf: !0
        }), u.__hostSeries = s), us(s)[o] = u;
      }, this);
    }, t.prototype.formatTooltip = function(e, i, n) {
      var a = this.getData(), o = this.getRawValue(e), s = a.getName(e);
      return Oi("section", {
        header: this.name,
        blocks: [Oi("nameValue", {
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
    }, t.prototype.getDataParams = function(e, i) {
      var n = Iv.prototype.getDataParams.call(this, e, i), a = this.__hostSeries;
      return a && (n.seriesId = a.id, n.seriesName = a.name, n.seriesType = a.subType), n;
    }, t.getMarkerModelFromSeries = function(e, i) {
      return us(e)[i];
    }, t.type = "marker", t.dependencies = ["series", "grid", "polar", "geo"], t;
  })(pt)
);
Re(tr, Iv.prototype);
var mR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.createMarkerModelFromSeries = function(e, i, n) {
      return new t(e, i, n);
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
  })(tr)
);
function uh(r) {
  return !(isNaN(parseFloat(r.x)) && isNaN(parseFloat(r.y)));
}
function yR(r) {
  return !isNaN(parseFloat(r.x)) && !isNaN(parseFloat(r.y));
}
function fs(r, t, e, i, n, a, o) {
  var s = [], l = ki(
    t,
    n
    /* , otherDataDim */
  ), u = l ? t.getCalculationInfo("stackResultDimension") : n, f = Sl(t, u, r), c = t.hostModel, h = c.indicesOfNearest(e, u, f)[0];
  s[a] = t.get(i, h), s[o] = t.get(u, h);
  var v = t.get(n, h), d = ur(t.get(n, h));
  return d = Math.min(d, 20), d >= 0 && (s[o] = +s[o].toFixed(d)), [s, v];
}
var cs = {
  min: mt(fs, "min"),
  max: mt(fs, "max"),
  average: mt(fs, "average"),
  median: mt(fs, "median")
};
function ro(r, t) {
  if (t) {
    var e = r.getData(), i = r.coordinateSystem, n = i && i.dimensions;
    if (!yR(t) && !F(t.coord) && F(n)) {
      var a = mS(t, e, i, r);
      if (t = nt(t), t.type && cs[t.type] && a.baseAxis && a.valueAxis) {
        var o = ut(n, a.baseAxis.dim), s = ut(n, a.valueAxis.dim), l = cs[t.type](e, a.valueAxis.dim, a.baseDataDim, a.valueDataDim, o, s);
        t.coord = l[0], t.value = l[1];
      } else
        t.coord = [t.xAxis != null ? t.xAxis : t.radiusAxis, t.yAxis != null ? t.yAxis : t.angleAxis];
    }
    if (t.coord == null || !F(n)) {
      t.coord = [];
      var u = r.getBaseAxis();
      if (u && t.type && cs[t.type]) {
        var f = i.getOtherAxis(u);
        f && (t.value = Sl(e, e.mapDimension(f.dim), t.type));
      }
    } else
      for (var c = t.coord, h = 0; h < 2; h++)
        cs[c[h]] && (c[h] = Sl(e, e.mapDimension(n[h]), c[h]));
    return t;
  }
}
function mS(r, t, e, i) {
  var n = {};
  return r.valueIndex != null || r.valueDim != null ? (n.valueDataDim = r.valueIndex != null ? t.getDimension(r.valueIndex) : r.valueDim, n.valueAxis = e.getAxis(_R(i, n.valueDataDim)), n.baseAxis = e.getOtherAxis(n.valueAxis), n.baseDataDim = t.mapDimension(n.baseAxis.dim)) : (n.baseAxis = i.getBaseAxis(), n.valueAxis = e.getOtherAxis(n.baseAxis), n.baseDataDim = t.mapDimension(n.baseAxis.dim), n.valueDataDim = t.mapDimension(n.valueAxis.dim)), n;
}
function _R(r, t) {
  var e = r.getData().getDimensionInfo(t);
  return e && e.coordDim;
}
function io(r, t) {
  return r && r.containData && t.coord && !uh(t) ? r.containData(t.coord) : !0;
}
function bR(r, t, e) {
  return r && r.containZone && t.coord && e.coord && !uh(t) && !uh(e) ? r.containZone(t.coord, e.coord) : !0;
}
function yS(r, t) {
  return r ? function(e, i, n, a) {
    var o = a < 2 ? e.coord && e.coord[a] : e.value;
    return Nr(o, t[a]);
  } : function(e, i, n, a) {
    return Nr(e.value, t[a]);
  };
}
function Sl(r, t, e) {
  if (e === "average") {
    var i = 0, n = 0;
    return r.each(t, function(a, o) {
      isNaN(a) || (i += a, n++);
    }), i / n;
  } else return e === "median" ? r.getMedian(t) : r.getDataExtent(t)[e === "max" ? 1 : 0];
}
var Rf = ht(), nd = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function() {
      this.markerGroupMap = j();
    }, t.prototype.render = function(e, i, n) {
      var a = this, o = this.markerGroupMap;
      o.each(function(s) {
        Rf(s).keep = !1;
      }), i.eachSeries(function(s) {
        var l = tr.getMarkerModelFromSeries(s, a.type);
        l && a.renderSeries(s, l, i, n);
      }), o.each(function(s) {
        !Rf(s).keep && a.group.remove(s.group);
      }), SR(i, o, this.type);
    }, t.prototype.markKeep = function(e) {
      Rf(e).keep = !0;
    }, t.prototype.toggleBlurSeries = function(e, i) {
      var n = this;
      M(e, function(a) {
        var o = tr.getMarkerModelFromSeries(a, n.type);
        if (o) {
          var s = o.getData();
          s.eachItemGraphicEl(function(l) {
            l && (i ? X0(l) : jh(l));
          });
        }
      });
    }, t.type = "marker", t;
  })(ke)
);
function SR(r, t, e) {
  r.eachSeries(function(i) {
    var n = tr.getMarkerModelFromSeries(i, e), a = t.get(i.id);
    if (n && a && a.group) {
      var o = uv(n), s = o.z, l = o.zlevel;
      fv(a.group, s, l);
    }
  });
}
function Sy(r, t, e) {
  var i = t.coordinateSystem, n = e.getWidth(), a = e.getHeight(), o = i && i.getArea && i.getArea();
  r.each(function(s) {
    var l = r.getItemModel(s), u = l.get("relativeTo") === "coordinate", f = u ? o ? o.width : 0 : n, c = u ? o ? o.height : 0 : a, h = u && o ? o.x : 0, v = u && o ? o.y : 0, d, p = Mt(l.get("x"), f) + h, m = Mt(l.get("y"), c) + v;
    if (!isNaN(p) && !isNaN(m))
      d = [p, m];
    else if (t.getMarkerPosition)
      d = t.getMarkerPosition(r.getValues(r.dimensions, s));
    else if (i) {
      var g = r.get(i.dimensions[0], s), y = r.get(i.dimensions[1], s);
      d = i.dataToPoint([g, y]);
    }
    isNaN(p) || (d[0] = p), isNaN(m) || (d[1] = m), r.setItemLayout(s, d);
  });
}
var wR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.updateTransform = function(e, i, n) {
      i.eachSeries(function(a) {
        var o = tr.getMarkerModelFromSeries(a, "markPoint");
        o && (Sy(o.getData(), a, n), this.markerGroupMap.get(a.id).updateLayout());
      }, this);
    }, t.prototype.renderSeries = function(e, i, n, a) {
      var o = e.coordinateSystem, s = e.id, l = e.getData(), u = this.markerGroupMap, f = u.get(s) || u.set(s, new u1()), c = xR(o, e, i);
      i.setData(c), Sy(i.getData(), e, a), c.each(function(h) {
        var v = c.getItemModel(h), d = v.getShallow("symbol"), p = v.getShallow("symbolSize"), m = v.getShallow("symbolRotate"), g = v.getShallow("symbolOffset"), y = v.getShallow("symbolKeepAspect");
        if (Z(d) || Z(p) || Z(m) || Z(g)) {
          var _ = i.getRawValue(h), b = i.getDataParams(h);
          Z(d) && (d = d(_, b)), Z(p) && (p = p(_, b)), Z(m) && (m = m(_, b)), Z(g) && (g = g(_, b));
        }
        var S = v.getModel("itemStyle").getItemStyle(), w = v.get("z2"), x = su(l, "color");
        S.fill || (S.fill = x), c.setItemVisual(h, {
          z2: V(w, 0),
          symbol: d,
          symbolSize: p,
          symbolRotate: m,
          symbolOffset: g,
          symbolKeepAspect: y,
          style: S
        });
      }), f.updateData(c), this.group.add(f.group), c.eachItemGraphicEl(function(h) {
        h.traverse(function(v) {
          at(v).dataModel = i;
        });
      }), this.markKeep(f), f.group.silent = i.get("silent") || e.get("silent");
    }, t.type = "markPoint", t;
  })(nd)
);
function xR(r, t, e) {
  var i;
  r ? i = G(r && r.dimensions, function(s) {
    var l = t.getData(), u = l.getDimensionInfo(l.mapDimension(s)) || {};
    return O(O({}, u), {
      name: s,
      // DON'T use ordinalMeta to parse and collect ordinal.
      ordinalMeta: null
    });
  }) : i = [{
    name: "value",
    type: "float"
  }];
  var n = new Ai(i, e), a = G(e.get("data"), mt(ro, t));
  r && (a = Rt(a, mt(io, r)));
  var o = yS(!!r, i);
  return n.initData(a, null, o), n;
}
function TR(r) {
  r.registerComponentModel(mR), r.registerComponentView(wR), r.registerPreprocessor(function(t) {
    id(t.series, "markPoint") && (t.markPoint = t.markPoint || {});
  });
}
var CR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.createMarkerModelFromSeries = function(e, i, n) {
      return new t(e, i, n);
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
  })(tr)
), hs = ht(), AR = function(r, t, e, i) {
  var n = r.getData(), a;
  if (F(i))
    a = i;
  else {
    var o = i.type;
    if (o === "min" || o === "max" || o === "average" || o === "median" || i.xAxis != null || i.yAxis != null) {
      var s = void 0, l = void 0;
      if (i.yAxis != null || i.xAxis != null)
        s = t.getAxis(i.yAxis != null ? "y" : "x"), l = lr(i.yAxis, i.xAxis);
      else {
        var u = mS(i, n, t, r);
        s = u.valueAxis;
        var f = F_(n, u.valueDataDim);
        l = Sl(n, f, o);
      }
      var c = s.dim === "x" ? 0 : 1, h = 1 - c, v = nt(i), d = {
        coord: []
      };
      v.type = null, v.coord = [], v.coord[h] = -1 / 0, d.coord[h] = 1 / 0;
      var p = e.get("precision");
      p >= 0 && bt(l) && (l = +l.toFixed(Math.min(p, 20))), v.coord[c] = d.coord[c] = l, a = [v, d, {
        type: o,
        valueIndex: i.valueIndex,
        // Force to use the value of calculated value.
        value: l
      }];
    } else
      a = [];
  }
  var m = [ro(r, a[0]), ro(r, a[1]), O({}, a[2])];
  return m[2].type = m[2].type || null, ft(m[2], m[0]), ft(m[2], m[1]), m;
};
function wl(r) {
  return !isNaN(r) && !isFinite(r);
}
function wy(r, t, e, i) {
  var n = 1 - r, a = i.dimensions[r];
  return wl(t[n]) && wl(e[n]) && t[r] === e[r] && i.getAxis(a).containData(t[r]);
}
function DR(r, t) {
  if (r.type === "cartesian2d") {
    var e = t[0].coord, i = t[1].coord;
    if (e && i && (wy(1, e, i, r) || wy(0, e, i, r)))
      return !0;
  }
  return io(r, t[0]) && io(r, t[1]);
}
function Of(r, t, e, i, n) {
  var a = i.coordinateSystem, o = r.getItemModel(t), s, l = Mt(o.get("x"), n.getWidth()), u = Mt(o.get("y"), n.getHeight());
  if (!isNaN(l) && !isNaN(u))
    s = [l, u];
  else {
    if (i.getMarkerPosition)
      s = i.getMarkerPosition(r.getValues(r.dimensions, t));
    else {
      var f = a.dimensions, c = r.get(f[0], t), h = r.get(f[1], t);
      s = a.dataToPoint([c, h]);
    }
    if (go(a, "cartesian2d")) {
      var v = a.getAxis("x"), d = a.getAxis("y"), f = a.dimensions;
      wl(r.get(f[0], t)) ? s[0] = v.toGlobalCoord(v.getExtent()[e ? 0 : 1]) : wl(r.get(f[1], t)) && (s[1] = d.toGlobalCoord(d.getExtent()[e ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  r.setItemLayout(t, s);
}
var MR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.updateTransform = function(e, i, n) {
      i.eachSeries(function(a) {
        var o = tr.getMarkerModelFromSeries(a, "markLine");
        if (o) {
          var s = o.getData(), l = hs(o).from, u = hs(o).to;
          l.each(function(f) {
            Of(l, f, !0, a, n), Of(u, f, !1, a, n);
          }), s.each(function(f) {
            s.setItemLayout(f, [l.getItemLayout(f), u.getItemLayout(f)]);
          }), this.markerGroupMap.get(a.id).updateLayout();
        }
      }, this);
    }, t.prototype.renderSeries = function(e, i, n, a) {
      var o = e.coordinateSystem, s = e.id, l = e.getData(), u = this.markerGroupMap, f = u.get(s) || u.set(s, new Tk());
      this.group.add(f.group);
      var c = IR(o, e, i), h = c.from, v = c.to, d = c.line;
      hs(i).from = h, hs(i).to = v, i.setData(d);
      var p = i.get("symbol"), m = i.get("symbolSize"), g = i.get("symbolRotate"), y = i.get("symbolOffset");
      F(p) || (p = [p, p]), F(m) || (m = [m, m]), F(g) || (g = [g, g]), F(y) || (y = [y, y]), c.from.each(function(b) {
        _(h, b, !0), _(v, b, !1);
      }), d.each(function(b) {
        var S = d.getItemModel(b), w = S.getModel("lineStyle").getLineStyle();
        d.setItemLayout(b, [h.getItemLayout(b), v.getItemLayout(b)]);
        var x = S.get("z2");
        w.stroke == null && (w.stroke = h.getItemVisual(b, "style").fill), d.setItemVisual(b, {
          z2: V(x, 0),
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
        at(b).dataModel = i, b.traverse(function(S) {
          at(S).dataModel = i;
        });
      });
      function _(b, S, w) {
        var x = b.getItemModel(S);
        Of(b, S, w, e, a);
        var T = x.getModel("itemStyle").getItemStyle();
        T.fill == null && (T.fill = su(l, "color")), b.setItemVisual(S, {
          symbolKeepAspect: x.get("symbolKeepAspect"),
          // `0` should be considered as a valid value, so use `retrieve2` instead of `||`
          symbolOffset: V(x.get("symbolOffset", !0), y[w ? 0 : 1]),
          symbolRotate: V(x.get("symbolRotate", !0), g[w ? 0 : 1]),
          // TODO: when 2d array is supported, it should ignore parent
          symbolSize: V(x.get("symbolSize"), m[w ? 0 : 1]),
          symbol: V(x.get("symbol", !0), p[w ? 0 : 1]),
          style: T
        });
      }
      this.markKeep(f), f.group.silent = i.get("silent") || e.get("silent");
    }, t.type = "markLine", t;
  })(nd)
);
function IR(r, t, e) {
  var i;
  r ? i = G(r && r.dimensions, function(u) {
    var f = t.getData(), c = f.getDimensionInfo(f.mapDimension(u)) || {};
    return O(O({}, c), {
      name: u,
      // DON'T use ordinalMeta to parse and collect ordinal.
      ordinalMeta: null
    });
  }) : i = [{
    name: "value",
    type: "float"
  }];
  var n = new Ai(i, e), a = new Ai(i, e), o = new Ai([], e), s = G(e.get("data"), mt(AR, t, r, e));
  r && (s = Rt(s, mt(DR, r)));
  var l = yS(!!r, i);
  return n.initData(G(s, function(u) {
    return u[0];
  }), null, l), a.initData(G(s, function(u) {
    return u[1];
  }), null, l), o.initData(G(s, function(u) {
    return u[2];
  })), o.hasItemOption = !0, {
    from: n,
    to: a,
    line: o
  };
}
function LR(r) {
  r.registerComponentModel(CR), r.registerComponentView(MR), r.registerPreprocessor(function(t) {
    id(t.series, "markLine") && (t.markLine = t.markLine || {});
  });
}
var PR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.createMarkerModelFromSeries = function(e, i, n) {
      return new t(e, i, n);
    }, t.type = "markArea", t.defaultOption = {
      // zlevel: 0,
      // PENDING
      z: 1,
      tooltip: {
        trigger: "item"
      },
      // markArea should fixed on the coordinate system
      animation: !1,
      label: {
        show: !0,
        position: "top"
      },
      itemStyle: {
        // color and borderColor default to use color from series
        // color: 'auto'
        // borderColor: 'auto'
        borderWidth: 0
      },
      emphasis: {
        label: {
          show: !0,
          position: "top"
        }
      }
    }, t;
  })(tr)
), vs = ht(), ER = function(r, t, e, i) {
  var n = i[0], a = i[1];
  if (!(!n || !a)) {
    var o = ro(r, n), s = ro(r, a), l = o.coord, u = s.coord;
    l[0] = lr(l[0], -1 / 0), l[1] = lr(l[1], -1 / 0), u[0] = lr(u[0], 1 / 0), u[1] = lr(u[1], 1 / 0);
    var f = bw([{}, o, s]);
    return f.coord = [o.coord, s.coord], f.x0 = o.x, f.y0 = o.y, f.x1 = s.x, f.y1 = s.y, f;
  }
};
function xl(r) {
  return !isNaN(r) && !isFinite(r);
}
function xy(r, t, e, i) {
  var n = 1 - r;
  return xl(t[n]) && xl(e[n]);
}
function kR(r, t) {
  var e = t.coord[0], i = t.coord[1], n = {
    coord: e,
    x: t.x0,
    y: t.y0
  }, a = {
    coord: i,
    x: t.x1,
    y: t.y1
  };
  return go(r, "cartesian2d") ? e && i && (xy(1, e, i) || xy(0, e, i)) ? !0 : bR(r, n, a) : io(r, n) || io(r, a);
}
function Ty(r, t, e, i, n) {
  var a = i.coordinateSystem, o = r.getItemModel(t), s, l = Mt(o.get(e[0]), n.getWidth()), u = Mt(o.get(e[1]), n.getHeight());
  if (!isNaN(l) && !isNaN(u))
    s = [l, u];
  else {
    if (i.getMarkerPosition) {
      var f = r.getValues(["x0", "y0"], t), c = r.getValues(["x1", "y1"], t), h = a.clampData(f), v = a.clampData(c), d = [];
      e[0] === "x0" ? d[0] = h[0] > v[0] ? c[0] : f[0] : d[0] = h[0] > v[0] ? f[0] : c[0], e[1] === "y0" ? d[1] = h[1] > v[1] ? c[1] : f[1] : d[1] = h[1] > v[1] ? f[1] : c[1], s = i.getMarkerPosition(d, e, !0);
    } else {
      var p = r.get(e[0], t), m = r.get(e[1], t), g = [p, m];
      a.clampData && a.clampData(g, g), s = a.dataToPoint(g, !0);
    }
    if (go(a, "cartesian2d")) {
      var y = a.getAxis("x"), _ = a.getAxis("y"), p = r.get(e[0], t), m = r.get(e[1], t);
      xl(p) ? s[0] = y.toGlobalCoord(y.getExtent()[e[0] === "x0" ? 0 : 1]) : xl(m) && (s[1] = _.toGlobalCoord(_.getExtent()[e[1] === "y0" ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  return s;
}
var Cy = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]], RR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.updateTransform = function(e, i, n) {
      i.eachSeries(function(a) {
        var o = tr.getMarkerModelFromSeries(a, "markArea");
        if (o) {
          var s = o.getData();
          s.each(function(l) {
            var u = G(Cy, function(c) {
              return Ty(s, l, c, a, n);
            });
            s.setItemLayout(l, u);
            var f = s.getItemGraphicEl(l);
            f.setShape("points", u);
          });
        }
      }, this);
    }, t.prototype.renderSeries = function(e, i, n, a) {
      var o = e.coordinateSystem, s = e.id, l = e.getData(), u = this.markerGroupMap, f = u.get(s) || u.set(s, {
        group: new Lt()
      });
      this.group.add(f.group), this.markKeep(f);
      var c = OR(o, e, i);
      i.setData(c), c.each(function(h) {
        var v = G(Cy, function(D) {
          return Ty(c, h, D, e, a);
        }), d = o.getAxis("x").scale, p = o.getAxis("y").scale, m = d.getExtent(), g = p.getExtent(), y = [d.parse(c.get("x0", h)), d.parse(c.get("x1", h))], _ = [p.parse(c.get("y0", h)), p.parse(c.get("y1", h))];
        $a(y), $a(_);
        var b = !(m[0] > y[1] || m[1] < y[0] || g[0] > _[1] || g[1] < _[0]), S = !b;
        c.setItemLayout(h, {
          points: v,
          allClipped: S
        });
        var w = c.getItemModel(h), x = w.getModel("itemStyle").getItemStyle(), T = w.get("z2"), C = su(l, "color");
        x.fill || (x.fill = C, W(x.fill) && (x.fill = $d(x.fill, 0.4))), x.stroke || (x.stroke = C), c.setItemVisual(h, "style", x), c.setItemVisual(h, "z2", V(T, 0));
      }), c.diff(vs(f).data).add(function(h) {
        var v = c.getItemLayout(h), d = c.getItemVisual(h, "z2");
        if (!v.allClipped) {
          var p = new Ua({
            z2: V(d, 0),
            shape: {
              points: v.points
            }
          });
          c.setItemGraphicEl(h, p), f.group.add(p);
        }
      }).update(function(h, v) {
        var d = vs(f).data.getItemGraphicEl(v), p = c.getItemLayout(h), m = c.getItemVisual(h, "z2");
        p.allClipped ? d && f.group.remove(d) : (d ? Kt(d, {
          z2: V(m, 0),
          shape: {
            points: p.points
          }
        }, i, h) : d = new Ua({
          shape: {
            points: p.points
          }
        }), c.setItemGraphicEl(h, d), f.group.add(d));
      }).remove(function(h) {
        var v = vs(f).data.getItemGraphicEl(h);
        f.group.remove(v);
      }).execute(), c.eachItemGraphicEl(function(h, v) {
        var d = c.getItemModel(v), p = c.getItemVisual(v, "style");
        h.useStyle(c.getItemVisual(v, "style")), zn(h, zi(d), {
          labelFetcher: i,
          labelDataIndex: v,
          defaultText: c.getName(v) || "",
          inheritColor: W(p.fill) ? $d(p.fill, 1) : X.color.neutral99
        }), js(h, d), An(h, null, null, d.get(["emphasis", "disabled"])), at(h).dataModel = i;
      }), vs(f).data = c, f.group.silent = i.get("silent") || e.get("silent");
    }, t.type = "markArea", t;
  })(nd)
);
function OR(r, t, e) {
  var i, n, a = ["x0", "y0", "x1", "y1"];
  if (r) {
    var o = G(r && r.dimensions, function(u) {
      var f = t.getData(), c = f.getDimensionInfo(f.mapDimension(u)) || {};
      return O(O({}, c), {
        name: u,
        // DON'T use ordinalMeta to parse and collect ordinal.
        ordinalMeta: null
      });
    });
    n = G(a, function(u, f) {
      return {
        name: u,
        type: o[f % 2].type
      };
    }), i = new Ai(n, e);
  } else
    n = [{
      name: "value",
      type: "float"
    }], i = new Ai(n, e);
  var s = G(e.get("data"), mt(ER, t, r, e));
  r && (s = Rt(s, mt(kR, r)));
  var l = r ? function(u, f, c, h) {
    var v = u.coord[Math.floor(h / 2)][h % 2];
    return Nr(v, n[h]);
  } : function(u, f, c, h) {
    return Nr(u.value, n[h]);
  };
  return i.initData(s, null, l), i.hasItemOption = !0, i;
}
function NR(r) {
  r.registerComponentModel(PR), r.registerComponentView(RR), r.registerPreprocessor(function(t) {
    id(t.series, "markArea") && (t.markArea = t.markArea || {});
  });
}
var BR = function(r, t) {
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
}, fh = (
  /** @class */
  (function(r) {
    N(t, r);
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
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n), e.selected = e.selected || {}, this._updateSelector(e);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), this._updateSelector(e);
    }, t.prototype._updateSelector = function(e) {
      var i = e.selector, n = this.ecModel;
      i === !0 && (i = e.selector = ["all", "inverse"]), F(i) && M(i, function(a, o) {
        W(a) && (a = {
          type: a
        }), i[o] = ft(a, BR(n, a.type));
      });
    }, t.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var e = this._data;
      if (e[0] && this.get("selectedMode") === "single") {
        for (var i = !1, n = 0; n < e.length; n++) {
          var a = e[n].get("name");
          if (this.isSelected(a)) {
            this.select(a), i = !0;
            break;
          }
        }
        !i && this.select(e[0].get("name"));
      }
    }, t.prototype._updateData = function(e) {
      var i = [], n = [];
      e.eachRawSeries(function(l) {
        var u = l.name;
        n.push(u);
        var f;
        if (l.legendVisualProvider) {
          var c = l.legendVisualProvider, h = c.getAllNames();
          e.isSeriesFiltered(l) || (n = n.concat(h)), h.length ? i = i.concat(h) : f = !0;
        } else
          f = !0;
        f && Uh(l) && i.push(l.name);
      }), this._availableNames = n;
      var a = this.get("data") || i, o = j(), s = G(a, function(l) {
        return (W(l) || bt(l)) && (l = {
          name: l
        }), o.get(l.name) ? null : (o.set(l.name, !0), new Ct(l, this, this.ecModel));
      }, this);
      this._data = Rt(s, function(l) {
        return !!l;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(e) {
      var i = this.option.selected, n = this.get("selectedMode");
      if (n === "single") {
        var a = this._data;
        M(a, function(o) {
          i[o.get("name")] = !1;
        });
      }
      i[e] = !0;
    }, t.prototype.unSelect = function(e) {
      this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
    }, t.prototype.toggleSelected = function(e) {
      var i = this.option.selected;
      i.hasOwnProperty(e) || (i[e] = !0), this[i[e] ? "unSelect" : "select"](e);
    }, t.prototype.allSelect = function() {
      var e = this._data, i = this.option.selected;
      M(e, function(n) {
        i[n.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var e = this._data, i = this.option.selected;
      M(e, function(n) {
        var a = n.get("name", !0);
        i.hasOwnProperty(a) || (i[a] = !0), i[a] = !i[a];
      });
    }, t.prototype.isSelected = function(e) {
      var i = this.option.selected;
      return !(i.hasOwnProperty(e) && !i[e]) && ut(this._availableNames, e) >= 0;
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
      bottom: X.size.m,
      align: "auto",
      backgroundColor: X.color.transparent,
      borderColor: X.color.border,
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 8,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: X.color.disabled,
      inactiveBorderColor: X.color.disabled,
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
        inactiveColor: X.color.disabled,
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: X.color.secondary
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: X.color.tertiary,
        borderWidth: 1,
        borderColor: X.color.border
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: X.color.quaternary
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
  })(pt)
), rn = mt, ch = M, ds = Lt, _S = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !1, e;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new ds()), this.group.add(this._selectorGroup = new ds()), this._isFirstRender = !0;
    }, t.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, t.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, t.prototype.render = function(e, i, n) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
        var o = e.get("align"), s = e.get("orient");
        (!o || o === "auto") && (o = e.get("left") === "right" && s === "vertical" ? "right" : "left");
        var l = e.get("selector", !0), u = e.get("selectorPosition", !0);
        l && (!u || u === "auto") && (u = s === "horizontal" ? "end" : "start"), this.renderInner(o, e, i, n, l, s, u);
        var f = t1(e, n).refContainer, c = e.getBoxLayoutParams(), h = e.get("padding"), v = qa(c, f, h), d = this.layoutInner(e, o, v, a, l, u), p = qa(yt({
          width: d.width,
          height: d.height
        }, c), f, h);
        this.group.x = p.x - d.x, this.group.y = p.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = jk(
          d,
          // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
          e
        ));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(e, i, n, a, o, s, l) {
      var u = this.getContentGroup(), f = j(), c = i.get("selectedMode"), h = i.get("triggerEvent"), v = [];
      n.eachRawSeries(function(d) {
        !d.get("legendHoverLink") && v.push(d.id);
      }), ch(i.getData(), function(d, p) {
        var m = this, g = d.get("name");
        if (!this.newlineDisabled && (g === "" || g === `
`)) {
          var y = new ds();
          y.newline = !0, u.add(y);
          return;
        }
        var _ = n.getSeriesByName(g)[0];
        if (!f.get(g))
          if (_) {
            var b = _.getData(), S = b.getVisual("legendLineStyle") || {}, w = b.getVisual("legendIcon"), x = b.getVisual("style"), T = this._createItem(_, g, p, d, i, e, S, x, w, c, a);
            T.on("click", rn(Ay, g, null, a, v)).on("mouseover", rn(hh, _.name, null, a, v)).on("mouseout", rn(vh, _.name, null, a, v)), n.ssr && T.eachChild(function(C) {
              var D = at(C);
              D.seriesIndex = _.seriesIndex, D.dataIndex = p, D.ssrType = "legend";
            }), h && T.eachChild(function(C) {
              m.packEventData(C, i, _, p, g);
            }), f.set(g, !0);
          } else
            n.eachRawSeries(function(C) {
              var D = this;
              if (!f.get(g) && C.legendVisualProvider) {
                var A = C.legendVisualProvider;
                if (!A.containName(g))
                  return;
                var L = A.indexOfName(g), I = A.getItemVisual(L, "style"), P = A.getItemVisual(L, "legendIcon"), E = Le(I.fill);
                E && E[3] === 0 && (E[3] = 0.2, I = O(O({}, I), {
                  fill: Rn(E, "rgba")
                }));
                var k = this._createItem(C, g, p, d, i, e, {}, I, P, c, a);
                k.on("click", rn(Ay, null, g, a, v)).on("mouseover", rn(hh, null, g, a, v)).on("mouseout", rn(vh, null, g, a, v)), n.ssr && k.eachChild(function(z) {
                  var R = at(z);
                  R.seriesIndex = C.seriesIndex, R.dataIndex = p, R.ssrType = "legend";
                }), h && k.eachChild(function(z) {
                  D.packEventData(z, i, C, p, g);
                }), f.set(g, !0);
              }
            }, this);
      }, this), o && this._createSelector(o, i, a, s, l);
    }, t.prototype.packEventData = function(e, i, n, a, o) {
      var s = {
        componentType: "legend",
        componentIndex: i.componentIndex,
        dataIndex: a,
        value: o,
        seriesIndex: n.seriesIndex
      };
      at(e).eventData = s;
    }, t.prototype._createSelector = function(e, i, n, a, o) {
      var s = this.getSelectorGroup();
      ch(e, function(u) {
        var f = u.type, c = new ne({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            n.dispatchAction({
              type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: i.id
            });
          }
        });
        s.add(c);
        var h = i.getModel("selectorLabel"), v = i.getModel(["emphasis", "selectorLabel"]);
        zn(c, {
          normal: h,
          emphasis: v
        }, {
          defaultText: u.title
        }), bc(c);
      });
    }, t.prototype._createItem = function(e, i, n, a, o, s, l, u, f, c, h) {
      var v = e.visualDrawType, d = o.get("itemWidth"), p = o.get("itemHeight"), m = o.isSelected(i), g = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var b = FR(f, a, l, u, v, m, h), S = new ds(), w = a.getModel("textStyle");
      if (Z(e.getLegendIcon) && (!_ || _ === "inherit"))
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
        S.add(zR({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: x,
          itemStyle: b.itemStyle,
          symbolKeepAspect: y
        }));
      }
      var T = s === "left" ? d + 5 : -5, C = s, D = o.get("formatter"), A = i;
      W(D) && D ? A = D.replace("{name}", i ?? "") : Z(D) && (A = D(i));
      var L = m ? w.getTextColor() : a.get("inactiveColor");
      S.add(new ne({
        style: Dn(w, {
          text: A,
          x: T,
          y: p / 2,
          fill: L,
          align: C,
          verticalAlign: "middle"
        }, {
          inheritColor: L
        })
      }));
      var I = new It({
        shape: S.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), P = a.getModel("tooltip");
      return P.get("show") && ql({
        el: I,
        componentModel: o,
        itemName: i,
        itemTooltipOption: P.option
      }), S.add(I), S.eachChild(function(E) {
        E.silent = !0;
      }), I.silent = !c, this.getContentGroup().add(S), bc(S), S.__legendDataIndex = n, S;
    }, t.prototype.layoutInner = function(e, i, n, a, o, s) {
      var l = this.getContentGroup(), u = this.getSelectorGroup();
      Ma(e.get("orient"), l, e.get("itemGap"), n.width, n.height);
      var f = l.getBoundingRect(), c = [-f.x, -f.y];
      if (u.markRedraw(), l.markRedraw(), o) {
        Ma(
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
  })(ke)
);
function FR(r, t, e, i, n, a, o) {
  function s(m, g) {
    m.lineWidth === "auto" && (m.lineWidth = g.lineWidth > 0 ? 2 : 0), ch(m, function(y, _) {
      m[_] === "inherit" && (m[_] = g[_]);
    });
  }
  var l = t.getModel("itemStyle"), u = l.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", c = l.getShallow("decal");
  u.decal = !c || c === "inherit" ? i.decal : jc(c, o), u.fill === "inherit" && (u.fill = i[n]), u.stroke === "inherit" && (u.stroke = i[f]), u.opacity === "inherit" && (u.opacity = (n === "fill" ? i : e).opacity), s(u, i);
  var h = t.getModel("lineStyle"), v = h.getLineStyle();
  if (s(v, e), u.fill === "auto" && (u.fill = i.fill), u.stroke === "auto" && (u.stroke = i.fill), v.stroke === "auto" && (v.stroke = i.fill), !a) {
    var d = t.get("inactiveBorderWidth"), p = u[f];
    u.lineWidth = d === "auto" ? i.lineWidth > 0 && p ? 2 : 0 : u.lineWidth, u.fill = t.get("inactiveColor"), u.stroke = t.get("inactiveBorderColor"), v.stroke = h.get("inactiveColor"), v.lineWidth = h.get("inactiveWidth");
  }
  return {
    itemStyle: u,
    lineStyle: v
  };
}
function zR(r) {
  var t = r.icon || "roundRect", e = Ni(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
  return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = X.color.neutral00, e.style.lineWidth = 2), e;
}
function Ay(r, t, e, i) {
  vh(r, t, e, i), e.dispatchAction({
    type: "legendToggleSelect",
    name: r ?? t
  }), hh(r, t, e, i);
}
function hh(r, t, e, i) {
  e.usingTHL() || e.dispatchAction({
    type: "highlight",
    seriesName: r,
    name: t,
    excludeSeriesId: i
  });
}
function vh(r, t, e, i) {
  e.usingTHL() || e.dispatchAction({
    type: "downplay",
    seriesName: r,
    name: t,
    excludeSeriesId: i
  });
}
function ua(r, t, e) {
  var i = r === "allSelect" || r === "inverseSelect", n = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    i ? s[r]() : s[r](t.name), Dy(s, n), a.push(s.componentIndex);
  });
  var o = {};
  return e.eachComponent("legend", function(s) {
    M(n, function(l, u) {
      s[l ? "select" : "unSelect"](u);
    }), Dy(s, o);
  }), i ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function Dy(r, t) {
  var e = t || {};
  return M(r.getData(), function(i) {
    var n = i.get("name");
    if (!(n === `
` || n === "")) {
      var a = r.isSelected(n);
      qt(e, n) ? e[n] = e[n] && a : e[n] = a;
    }
  }), e;
}
function $R(r) {
  r.registerAction("legendToggleSelect", "legendselectchanged", mt(ua, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", mt(ua, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", mt(ua, "inverseSelect")), r.registerAction("legendSelect", "legendselected", mt(ua, "select")), r.registerAction("legendUnSelect", "legendunselected", mt(ua, "unSelect"));
}
var HR = Xh(VR);
function VR(r) {
  var t = r.findComponents({
    mainType: "legend"
  });
  t && t.length && r.filterSeries(function(e) {
    for (var i = 0; i < t.length; i++)
      if (!t[i].isSelected(e.name))
        return !1;
    return !0;
  });
}
function bS(r) {
  r.registerComponentModel(fh), r.registerComponentView(_S), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, HR), r.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), $R(r);
}
var GR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.setScrollDataIndex = function(e) {
      this.option.scrollDataIndex = e;
    }, t.prototype.init = function(e, i, n) {
      var a = po(e);
      r.prototype.init.call(this, e, i, n), My(this, e, a);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), My(this, this.option, e);
    }, t.type = "legend.scroll", t.defaultOption = z_(fh.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: X.color.accent50,
      pageIconInactiveColor: X.color.accent10,
      pageIconSize: 15,
      pageTextStyle: {
        color: X.color.tertiary
      },
      animationDurationUpdate: 800
    }), t;
  })(fh)
);
function My(r, t, e) {
  var i = r.getOrient(), n = [1, 1];
  n[i.index] = 0, zr(t, e, {
    type: "box",
    ignoreSize: !!n
  });
}
var Iy = Lt, Nf = ["width", "height"], Bf = ["x", "y"], UR = (
  /** @class */
  (function(r) {
    N(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return t.prototype.init = function() {
      r.prototype.init.call(this), this.group.add(this._containerGroup = new Iy()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new Iy());
    }, t.prototype.resetInner = function() {
      r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(e, i, n, a, o, s, l) {
      var u = this;
      r.prototype.renderInner.call(this, e, i, n, a, o, s, l);
      var f = this._controllerGroup, c = i.get("pageIconSize", !0), h = F(c) ? c : [c, c];
      d("pagePrev", 0);
      var v = i.getModel("pageTextStyle");
      f.add(new ne({
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
        var g = p + "DataIndex", y = ov(i.get("pageIcons", !0)[i.getOrient().name][m], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: xt(u._pageGo, u, g, i, a)
        }, {
          x: -h[0] / 2,
          y: -h[1] / 2,
          width: h[0],
          height: h[1]
        });
        y.name = p, f.add(y);
      }
    }, t.prototype.layoutInner = function(e, i, n, a, o, s) {
      var l = this.getSelectorGroup(), u = e.getOrient().index, f = Nf[u], c = Bf[u], h = Nf[1 - u], v = Bf[1 - u];
      o && Ma(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        l,
        e.get("selectorItemGap", !0)
      );
      var d = e.get("selectorButtonGap", !0), p = l.getBoundingRect(), m = [-p.x, -p.y], g = nt(n);
      o && (g[f] = n[f] - p[f] - d);
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
    }, t.prototype._layoutContentAndController = function(e, i, n, a, o, s, l, u) {
      var f = this.getContentGroup(), c = this._containerGroup, h = this._controllerGroup;
      Ma(e.get("orient"), f, e.get("itemGap"), a ? n.width : null, a ? null : n.height), Ma(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        h,
        e.get("pageButtonItemGap", !0)
      );
      var v = f.getBoundingRect(), d = h.getBoundingRect(), p = this._showController = v[o] > n[o], m = [-v.x, -v.y];
      i || (m[a] = f[u]);
      var g = [0, 0], y = [-d.x, -d.y], _ = V(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (p) {
        var b = e.get("pageButtonPosition", !0);
        b === "end" ? y[a] += n[o] - d[o] : g[a] += d[o] + _;
      }
      y[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(m), c.setPosition(g), h.setPosition(y);
      var S = {
        x: 0,
        y: 0
      };
      if (S[o] = p ? n[o] : v[o], S[s] = Math.max(v[s], d[s]), S[l] = Math.min(0, d[l] + y[1 - a]), c.__rectSize = n[o], p) {
        var w = {
          x: 0,
          y: 0
        };
        w[o] = Math.max(n[o] - d[o] - _, 0), w[s] = S[s], c.setClipPath(new It({
          shape: w
        })), c.__rectSize = w[o];
      } else
        h.eachChild(function(T) {
          T.attr({
            invisible: !0,
            silent: !0
          });
        });
      var x = this._getPageInfo(e);
      return x.pageIndex != null && Kt(
        f,
        {
          x: x.contentPosition[0],
          y: x.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        p ? e : null
      ), this._updatePageInfoView(e, x), S;
    }, t.prototype._pageGo = function(e, i, n) {
      var a = this._getPageInfo(i)[e];
      a != null && n.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: i.id
      });
    }, t.prototype._updatePageInfoView = function(e, i) {
      var n = this._controllerGroup;
      M(["pagePrev", "pageNext"], function(f) {
        var c = f + "DataIndex", h = i[c] != null, v = n.childOfName(f);
        v && (v.setStyle("fill", h ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), v.cursor = h ? "pointer" : "default");
      });
      var a = n.childOfName("pageText"), o = e.get("pageFormatter"), s = i.pageIndex, l = s != null ? s + 1 : 0, u = i.pageCount;
      a && o && a.setStyle("text", W(o) ? o.replace("{current}", l == null ? "" : l + "").replace("{total}", u == null ? "" : u + "") : o({
        current: l,
        total: u
      }));
    }, t.prototype._getPageInfo = function(e) {
      var i = e.get("scrollDataIndex", !0), n = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = Nf[o], l = Bf[o], u = this._findTargetItemIndex(i), f = n.children(), c = f[u], h = f.length, v = h ? 1 : 0, d = {
        contentPosition: [n.x, n.y],
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
          var x = w.getBoundingRect(), T = x[l] + w[l];
          return {
            s: T,
            e: T + x[s],
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
      var i, n = this.getContentGroup(), a;
      return n.eachChild(function(o, s) {
        var l = o.__legendDataIndex;
        a == null && l != null && (a = s), l === e && (i = s);
      }), i ?? a;
    }, t.type = "legend.scroll", t;
  })(_S)
);
function WR(r) {
  r.registerAction("legendScroll", "legendscroll", function(t, e) {
    var i = t.scrollDataIndex;
    i != null && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(n) {
      n.setScrollDataIndex(i);
    });
  });
}
function YR(r) {
  mr(bS), r.registerComponentModel(GR), r.registerComponentView(UR), WR(r);
}
function SS(r) {
  mr(bS), mr(YR);
}
function Ly(r, t, e) {
  var i = se.createCanvas(), n = t.getWidth(), a = t.getHeight(), o = i.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = n + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", r)), i.width = n * e, i.height = a * e, i;
}
function Ff(r) {
  return !r.__cursors.get(s_);
}
function Py(r) {
  var t = r.__cursors.get(s_);
  return {
    startIdx: t ? t.startIdx : 0,
    endIdx: t ? t.endIdx : 0
  };
}
var wS = (function(r) {
  N(t, r);
  function t(e, i, n) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.zlevel = 0, a.zlevel2 = xs, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__prevIdx = { startIdx: 0, endIdx: 0 };
    var o;
    n = n || Ys, typeof e == "string" ? o = Ly(e, i, n) : K(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (t0(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = i, a.dpr = n, a;
  }
  return t.prototype.afterBrush = function() {
    this.__prevIdx = Py(this);
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var e = this.dpr;
    this.domBack = Ly("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, i, n, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, l = !1, u = new J(0, 0, 0, 0);
    function f(b) {
      if (!(!b.isFinite() || b.isZero()))
        if (o.length === 0) {
          var S = new J(0, 0, 0, 0);
          S.copy(b), o.push(S);
        } else {
          for (var w = !1, x = 1 / 0, T = 0, C = 0; C < o.length; ++C) {
            var D = o[C];
            if (D.intersect(b)) {
              var A = new J(0, 0, 0, 0);
              A.copy(D), A.union(b), o[C] = A, w = !0;
              break;
            } else if (l) {
              u.copy(b), u.union(D);
              var L = b.width * b.height, I = D.width * D.height, P = u.width * u.height, E = P - L - I;
              E < x && (x = E, T = C);
            }
          }
          if (l && (o[T].union(b), w = !0), !w) {
            var S = new J(0, 0, 0, 0);
            S.copy(b), o.push(S);
          }
          l || (l = o.length >= s);
        }
    }
    for (var c = Py(this), h = c.startIdx; h < c.endIdx; ++h) {
      var v = e[h];
      if (v) {
        var d = v.shouldBePainted(n, a, !0, !0), p = v.__isRendered && (v.__dirty & ee || !d) ? v.getPrevPaintRect() : null;
        p && f(p);
        var m = d && (v.__dirty & ee || !v.__isRendered) ? v.getPaintRect() : null;
        m && f(m);
      }
    }
    for (var g = this.__prevIdx, h = g.startIdx; h < g.endIdx; ++h) {
      var v = i[h], d = v && v.shouldBePainted(n, a, !0, !0);
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
  }, t.prototype.resize = function(e, i) {
    var n = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = e + "px", o.height = i + "px"), a.width = e * n, a.height = i * n, s && (s.width = e * n, s.height = i * n, n !== 1 && this.ctxBack.scale(n, n));
  }, t.prototype.clear = function(e, i, n) {
    var a = this.dom, o = this.ctx, s = a.width, l = a.height;
    i = i || this.clearColor;
    var u = this.motionBlur && !e, f = this.lastFrameAlpha, c = this.dpr, h = this;
    u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / c, l / c));
    var v = this.domBack;
    function d(p, m, g, y) {
      if (o.clearRect(p, m, g, y), i && i !== "transparent") {
        var _ = void 0;
        if (El(i)) {
          var b = i.global || i.__width === g && i.__height === y;
          _ = b && i.__canvasGradient || Kc(o, i, {
            x: 0,
            y: 0,
            width: g,
            height: y
          }), i.__canvasGradient = _, i.__width = g, i.__height = y;
        } else Cw(i) && (i.scaleX = i.scaleX || c, i.scaleY = i.scaleY || c, _ = Qc(o, i, {
          dirty: function() {
            h.setUnpainted(), h.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || i, o.fillRect(p, m, g, y), o.restore();
      }
      u && (o.save(), o.globalAlpha = f, o.drawImage(v, p, m, g, y), o.restore());
    }
    !n || u ? d(0, 0, s, l) : n.length && M(n, function(p) {
      d(p.x * c, p.y * c, p.width * c, p.height * c);
    });
  }, t;
})(er), Ey = 1e5, di = 314159, zf = void 0, XR = 1, $f = 2;
function qR(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function ZR(r, t) {
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
function ky(r, t, e, i) {
  var n = new wS(r, t, t.dpr);
  return n.zlevel = e, n.zlevel2 = i, n.__builtin__ = !0, xS(n), n;
}
function xS(r) {
  r.__cursorStack = [], r.__cursors = j();
}
function KR(r) {
  return r.startIdx = r.drawIdx = r.endIdx = r.endIdxNew = 0, r.used = !1, r.first = r.last = NaN, r.notClearIdx = -1, r;
}
function QR(r, t) {
  var e = r.__cursors, i = +t;
  return e.get(i) || (r.__cursorStack.push(i), e.set(i, KR({ key: i })));
}
function ps(r, t) {
  for (var e = r.__cursorStack, i = 0; i < e.length; i++)
    t(r.__cursors.get(e[i]));
}
function Hf(r, t) {
  var e = r.layers;
  return e[t] || (e[t] = new Array(3));
}
function zt(r, t, e) {
  for (var i = r.layerStack, n = 0; n < i.length; n++) {
    var a = i[n].zl, o = i[n].zl2, s = r.layers[a][o];
    (!e || (!(e & Ea) || s.__builtin__) && (!(e & dh) || !s.__builtin__) && (!(e & TS) || s !== r.hoverlayer)) && t(s, a, o, n);
  }
}
var Ea = 1, dh = 2, TS = 4, gs = Ea | TS, jR = (function() {
  function r(t, e, i, n) {
    this.type = "canvas", this._prevDisplayList = [], this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas", this._i = {
      layerStack: [],
      layers: []
    };
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = O({}, i || {}), this.dpr = i.devicePixelRatio || Ys, this._singleCanvas = a, this.root = t;
    var o = t.style;
    if (o && (t0(t), t.innerHTML = ""), this.storage = e, this._prevDisplayList = [], a) {
      var l = t, u = l.width, f = l.height;
      i.width != null && (u = i.width), i.height != null && (f = i.height), this.dpr = i.devicePixelRatio || 1, l.width = u * this.dpr, l.height = f * this.dpr, this._width = u, this._height = f;
      var c = ky(l, this, di, xs);
      c.initContext(), this._insertLayer(c, di, xs, !0), this._domRoot = t;
    } else {
      this._width = is(t, 0, i), this._height = is(t, 1, i);
      var s = this._domRoot = ZR(this._width, this._height);
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
    t && !K(t) ? e = { paintAll: !!t } : e = t || {};
    var i = V(e.refresh, !0), n = V(e.refreshHover, !1);
    if (n && (this._hoverLayerDirty = $f), !i)
      return n && this._paintHoverList(this.storage.getDisplayList(!1)), this;
    var a = this.storage.getDisplayList(!0);
    this._updateLayerStatus(a, e.paintAll), this._redrawId = Math.random();
    var o = this._prevDisplayList;
    this._paintList(a, o, this._redrawId);
    var s = this._backgroundColor;
    return zt(this._i, function(l, u, f, c) {
      l.refresh && l.refresh(c === 0 ? s : null);
    }, dh), this._opts.useDirtyRect && (this._prevDisplayList = a.slice()), this;
  }, r.prototype._paintHoverList = function(t) {
    var e = this._i.hoverlayer, i = this._hoverLayerDirty;
    if (this._hoverLayerDirty = zf, i !== zf && (!e && i === $f && (e = this._i.hoverlayer = this._ensureLayer(Ey)), !!e)) {
      e.clear();
      for (var n = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, a, o = 0, s = t.length; o < s; o++) {
        var l = t[o];
        if (l.__inHover) {
          a || (a = e.ctx, a.save());
          var u = l.__hoverStyle, f = void 0;
          u && (f = l.style, l.style = u), Si(a, l, n), u && (l.style = f);
        }
      }
      a && (bn(a, n), a.restore());
    }
  }, r.prototype.getHoverLayer = function() {
    return this._ensureLayer(Ey);
  }, r.prototype.paintOne = function(t, e) {
    Eb(t, e);
  }, r.prototype._paintList = function(t, e, i) {
    if (this._redrawId === i) {
      var n = this._doPaintList(t, e);
      if (this._needsManuallyCompositing && this._compositeManually(), n)
        zt(this._i, function(o) {
          o.afterBrush && o.afterBrush();
        }, gs), this._paintHoverList(t);
      else {
        var a = this;
        pl(function() {
          a._paintList(t, e, i);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this._ensureLayer(di).ctx, e = this._domRoot.width, i = this._domRoot.height;
    t.clearRect(0, 0, e, i), zt(this._i, function(n) {
      n.virtual && t.drawImage(n.dom, 0, 0, e, i);
    }, Ea);
  }, r.prototype._doPaintList = function(t, e) {
    var i = this, n = !0;
    return zt(this._i, function(a) {
      var o = !1;
      if (ps(a, function(c) {
        (c.drawIdx < c.endIdx || c.notClearIdx >= 0) && (o = !0);
      }), !(!o && !a.__dirty)) {
        var s = i._opts.useDirtyRect && !Ff(a) ? a.createRepaintRects(t, e, i._width, i._height) : null, l = i._i.layerStack[0], u = !0;
        if (a.__dirty) {
          u = !1, a.__dirty = !1;
          var f = a.zlevel === l.zl && a.zlevel2 === l.zl2 ? i._backgroundColor : null;
          a.clear(!1, f, s);
        }
        ps(a, function(c) {
          var h = i._paintPerCursor(a, c, t, s, u);
          n = n && h;
        });
      }
    }, gs), tt.wxa && zt(this._i, function(a) {
      a && a.ctx && a.ctx.draw && a.ctx.draw();
    }), n;
  }, r.prototype._paintPerCursor = function(t, e, i, n, a) {
    var o = t.ctx;
    if (n)
      if (!n.length)
        e.drawIdx = e.endIdx;
      else
        for (var s = this.dpr, l = 0; l < n.length; ++l) {
          var u = n[l];
          o.save(), o.beginPath(), o.rect(u.x * s, u.y * s, u.width * s, u.height * s), o.clip(), this._paintPerCursorInRect(t, e, i, u, a), o.restore();
        }
    else
      o.save(), this._paintPerCursorInRect(t, e, i, null, a), o.restore();
    return e.drawIdx >= e.endIdx;
  }, r.prototype._paintPerCursorInRect = function(t, e, i, n, a) {
    for (var o = {
      inHover: !1,
      allClipped: !1,
      prevEl: null,
      viewWidth: this._width,
      viewHeight: this._height,
      beforeBrushParam: { contentRetained: a }
    }, s = t.ctx, l = Ff(t), u = l && se.getTime(), f = e.drawIdx, c = e.notClearIdx, h = c >= 0 ? Math.min(c, f) : f; h < e.endIdx; h++) {
      var v = i[h];
      if (!(h < f && !v.notClear)) {
        if (v.__inHover && (this._hoverLayerDirty = $f), n != null) {
          var d = v.getPaintRect();
          d && d.intersect(n) && (Si(s, v, o), v.setPrevPaintRect(d));
        } else
          Si(s, v, o);
        if (l) {
          var p = se.getTime() - u;
          if (p > 15) {
            h++;
            break;
          }
        }
      }
    }
    bn(s, o), e.drawIdx = Math.max(h, f);
  }, r.prototype.getLayer = function(t, e) {
    return this._ensureLayer(t, 0, e);
  }, r.prototype._ensureLayer = function(t, e, i) {
    e = e || 0;
    var n = this._singleCanvas;
    n && !this._needsManuallyCompositing && (t = di, e = 0);
    var a = Hf(this._i, t)[e];
    return a || (a = ky("zr_" + t + "." + e, this, t, e), this._layerConfig[t] && ft(a, this._layerConfig[t], !0), (i || n && t !== di) && (a.virtual = !0), this._insertLayer(a, t, e, !1), a.initContext()), a;
  }, r.prototype.insertLayer = function(t, e) {
    this._insertLayer(e, t, 0, !1);
  }, r.prototype._insertLayer = function(t, e, i, n) {
    var a = this._i, o = a.layers, s = a.layerStack, l = this._domRoot, u = null;
    if (!(o[e] && o[e][i]) && qR(t)) {
      for (var f = s.length, c = 0; c < f && (s[c].zl < e || s[c].zl === e && s[c].zl2 < i); )
        c++;
      if (c > 0 && (u = Hf(a, s[c - 1].zl)[s[c - 1].zl2]), s.splice(c, 0, { zl: e, zl2: i }), Hf(a, e)[i] = t, !n && !t.virtual)
        if (u) {
          var h = u.dom;
          h.nextSibling ? l.insertBefore(t.dom, h.nextSibling) : l.appendChild(t.dom);
        } else
          l.firstChild ? l.insertBefore(t.dom, l.firstChild) : l.appendChild(t.dom);
      t.painter || (t.painter = this);
    }
  }, r.prototype.eachLayer = function(t, e) {
    return zt(this._i, function(i, n) {
      t.call(e, i, n);
    });
  }, r.prototype.eachBuiltinLayer = function(t, e) {
    return zt(this._i, function(i, n) {
      t.call(e, i, n);
    }, Ea);
  }, r.prototype.eachOtherLayer = function(t, e) {
    return zt(this._i, function(i, n) {
      t.call(e, i, n);
    }, dh);
  }, r.prototype.getLayers = function() {
    var t = {};
    return zt(this._i, function(e, i, n) {
      t[e.id] = e;
    }), t;
  }, r.prototype._updateLayerStatus = function(t, e) {
    var i = this;
    if (i._singleCanvas)
      for (var n = 1; n < t.length; n++) {
        var a = t[n];
        if (a.zlevel !== t[n - 1].zlevel || a.incremental) {
          i._needsManuallyCompositing = !0;
          break;
        }
      }
    zt(i._i, function(m) {
      m.__dirty = !1, ps(m, function(g) {
        g.used = !1, g.endIdxNew = 0, g.notClearIdx = -1;
      });
    }, gs);
    for (var o, s = null, l = null, u = !1, f = 0, c = t.length; f < c; f++) {
      var a = t[f], h = a.zlevel, v = a.incremental, d = void 0;
      if (o !== h && (o = h, u = !1), v ? (u = !0, d = ZC) : d = u ? qC : xs, (!s || h !== s.zlevel || d !== s.zlevel2) && (s = i._ensureLayer(h, d), l = null, !s.__builtin__)) {
        Eh("ZLevel " + h + " has been used by unknown layer " + s.id);
        continue;
      }
      if ((!l || v !== l.key) && (l = QR(s, v), !l.used))
        if (l.used = !0, !e && l.first === a.id) {
          var p = f - l.startIdx;
          l.startIdx = f, l.drawIdx += p, l.endIdx += p;
        } else
          s.__dirty = !0, l.first = a.id, l.startIdx = l.drawIdx = f, l.endIdx = f + 1;
      l.endIdxNew = f + 1, a.__dirty & ee && !a.__inHover && ((!v || !a.notClear && f < l.drawIdx) && (s.__dirty = !0), v && a.notClear && l.notClearIdx < 0 && (l.notClearIdx = f));
    }
    zt(i._i, function(m) {
      for (var g = m.__cursorStack, y = m.__cursors, _ = g.length - 1; _ >= 0; _--) {
        var b = y.get(g[_]);
        if (!b.used)
          m.__dirty = !0, y.removeKey(g[_]), g.splice(_, 1);
        else {
          var S = b.endIdxNew;
          (Ff(m) ? S < b.drawIdx : S !== b.endIdx || !S || t[S - 1].id !== b.last) && (m.__dirty = !0), b.endIdx = b.endIdxNew, b.last = S ? t[S - 1].id : NaN;
        }
      }
      m.__dirty && (ps(m, function(w) {
        w.drawIdx = w.startIdx;
      }), i._hoverLayerDirty === zf && (i._hoverLayerDirty = XR));
    }, gs);
  }, r.prototype.clear = function() {
    return zt(this._i, function(t) {
      t.clear(), xS(t);
    }, Ea), this;
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, zt(this._i, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var i = this._layerConfig;
      i[t] ? ft(i[t], e, !0) : i[t] = e, zt(this._i, function(n, a) {
        ft(n, i[a], !0);
      });
    }
  }, r.prototype.delLayer = function(t) {
    for (var e = this._i.layerStack, i = this._i.layers, n = e.length - 1; n >= 0; n--) {
      var a = e[n];
      if (a.zl === t) {
        var o = i[t][a.zl2];
        if (o.__builtin__)
          continue;
        if (e.splice(n, 1), i[t][a.zl2] = void 0, !o.virtual) {
          var s = o.dom.parentNode;
          s && s.removeChild(o.dom);
        }
      }
    }
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var i = this._domRoot;
      i.style.display = "none";
      var n = this._opts, a = this.root;
      t != null && (n.width = t), e != null && (n.height = e), t = is(a, 0, n), e = is(a, 1, n), i.style.display = "", (this._width !== t || e !== this._height) && (i.style.width = t + "px", i.style.height = e + "px", zt(this._i, function(o) {
        o.resize(t, e);
      }), this.refresh({ paintAll: !0 })), this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this._ensureLayer(di).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    M(this._i.layers[t], function(e) {
      e && !e.__builtin__ && e.clear();
    });
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._i = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._i.layers[di][0].dom;
    var e = new wS("image", this, t.pixelRatio || this.dpr);
    e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
    var i = e.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var n = e.dom.width, a = e.dom.height;
      zt(this._i, function(c) {
        c.__builtin__ ? i.drawImage(c.dom, 0, 0, n, a) : c.renderToCanvas && (i.save(), c.renderToCanvas(i), i.restore());
      });
    } else {
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height,
        beforeBrushParam: {}
      }, s = this.storage.getDisplayList(!0), l = 0, u = s.length; l < u; l++) {
        var f = s[l];
        Si(i, f, o);
      }
      bn(i, o);
    }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
})();
function CS(r) {
  r.registerPainter("canvas", jR);
}
function AS(r, t = 100) {
  return !Number.isFinite(t) || t <= 0 ? [] : r.flatMap((e) => e.split(",")).map((e) => Number(e) / t).filter((e) => Number.isFinite(e)).map((e) => Math.max(0, e));
}
function JR(r, t, e, i = 100, n = 900 * 1e3, a = 300 * 1e3) {
  const s = AS(r, i).map((f, c) => [
    t.getTime() + c * n,
    f
  ]);
  if (s.length < 2) return s;
  const l = [], u = Math.min(e.getTime(), s.at(-1)[0] + n);
  for (let f = t.getTime(); f < u; f += a) {
    const c = Math.min(
      s.length - 1,
      Math.max(0, Math.floor((f - t.getTime()) / n))
    ), h = s[c], v = s[Math.min(s.length - 1, c + 1)];
    if (!h || !v) continue;
    const d = v[0] === h[0] ? 0 : (f - h[0]) / (v[0] - h[0]);
    l.push([f, h[1] + (v[1] - h[1]) * d]);
  }
  return l;
}
function tO(r, t = 100, e = 0.25) {
  const i = AS(r, t);
  return i.length === 0 ? null : i.reduce((n, a) => n + a * e, 0);
}
function eO(r) {
  if (r.length < 2) return null;
  let t = 0;
  for (let e = 1; e < r.length; e += 1) {
    const i = r[e - 1], n = r[e];
    if (!i || !n) continue;
    const a = (n[0] - i[0]) / 36e5;
    a <= 0 || a > 1 || (t += (i[1] + n[1]) / 2 * a);
  }
  return Number.isFinite(t) ? t : null;
}
const rO = /* @__PURE__ */ new Set(["", "unknown", "unavailable", "none", "null"]);
function Vf(r = /* @__PURE__ */ new Date()) {
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
function ph(r, t) {
  const e = r === "auto" || r == null ? t : r;
  return typeof e == "string" && e.trim().toLowerCase() === "w" ? 1e-3 : 1;
}
function iO(r, t, e, i, n, a = 300 * 1e3) {
  const o = oO(r, t.attribute ?? "forecast");
  if (!Array.isArray(o)) return [];
  const s = t.datetime_key ?? "datetime", l = t.value_key ?? "watts", u = ph(t.unit, e), f = i.getTime(), c = n.getTime(), h = [];
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
function nO(r, t, e, i, n = 300 * 1e3) {
  const a = e.getTime(), o = i.getTime(), s = /* @__PURE__ */ new Map();
  for (const l of r) {
    if (!l || rO.has(String(l.s).toLowerCase())) continue;
    const u = Number(l.s), f = l.lc ?? l.lu, c = Number(f) * 1e3;
    if (!Number.isFinite(u) || !Number.isFinite(c) || c < a || c >= o) continue;
    const h = a + Math.floor((c - a) / n) * n, v = s.get(h) ?? { sum: 0, count: 0 };
    v.sum += Math.max(0, u * t), v.count += 1, s.set(h, v);
  }
  return [...s.entries()].sort(([l], [u]) => l - u).map(([l, u]) => [l, u.sum / u.count]);
}
function aO(r, t, e) {
  let i, n = Number.POSITIVE_INFINITY;
  for (const a of r) {
    const o = Math.abs(a[0] - t);
    o < n && (i = a, n = o);
  }
  return i && n <= e ? i[1] : null;
}
function oO(r, t) {
  if (r)
    return t.split(".").reduce((e, i) => {
      if (!(!e || typeof e != "object"))
        return e[i];
    }, r);
}
mr([
  P1,
  cS,
  SS,
  LR,
  TR,
  gS,
  CS
]);
const Gf = "#F59E0B", Ry = "#22C55E", Oy = "#7C4DFF", Ny = 300 * 1e3, Cl = class Cl extends Er {
  constructor() {
    super(...arguments), this._historyPoints = [], this._historyError = !1, this._historyRequest = 0, this._historyLoading = !1;
  }
  static getConfigForm() {
    const t = [
      { value: "auto", label: "Auto" },
      { value: "W", label: "W" },
      { value: "kW", label: "kW" }
    ], e = (i, n) => [
      { name: "name", selector: { text: {} } },
      { name: "entity", required: i, selector: { entity: { domain: "sensor" } } },
      { name: "color", selector: { text: {} } },
      { name: "unit", selector: { select: { mode: "dropdown", options: t } } },
      ...n ? [
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
      computeLabel: (i) => ({
        title: "Title / Titel",
        name: "Name",
        entity: "Entity / Entität",
        color: "Color / Farbe",
        unit: "Source unit / Quelleneinheit",
        attribute: "Forecast attribute / Prognoseattribut",
        datetime_key: "Timestamp field / Zeitfeld",
        value_key: "Power field / Leistungsfeld"
      })[i.name ?? ""] ?? i.name ?? ""
    };
  }
  static getStubConfig() {
    return {
      title: "PV-Leistung heute",
      actual: {
        name: "Ist-Leistung",
        entity: "sensor.pv_power",
        color: Gf,
        unit: "auto"
      },
      forecast_1: {
        name: "Solcast",
        entity: "sensor.solcast_forecast_today",
        color: Ry,
        unit: "kW",
        attribute: "detailedForecast",
        datetime_key: "period_start",
        value_key: "pv_estimate"
      },
      forecast_2: {
        name: "Helios Forecast",
        color: Oy,
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
      forecast_2: t.forecast_2 ? { ...t.forecast_2 } : void 0,
      snapshot_sets: t.snapshot_sets?.map((e) => ({
        ...e,
        forecast_1_entities: [...e.forecast_1_entities],
        forecast_2_entities: e.forecast_2_entities ? [...e.forecast_2_entities] : void 0
      }))
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
    super.connectedCallback(), this._refreshTimer = window.setInterval(() => this._loadHistory(), Ny);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._refreshTimer !== void 0 && window.clearInterval(this._refreshTimer), this._resizeObserver?.disconnect(), this._chart?.dispose(), this._chart = void 0;
  }
  render() {
    if (!this._config) return rt``;
    const t = this.hass?.locale?.language ?? navigator.language, e = t.toLowerCase().startsWith("de"), i = this._config.title?.trim() || (e ? "PV-Leistung heute" : "PV power today"), n = this._activeSnapshotSet(), a = this._selectedIssue(), { start: o, end: s } = Vf(), l = this._series(o, s);
    return rt`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <div class="title-block">
              <h2>${i}</h2>
              <span>${e ? "Prognosestand" : "Forecast issue"}: ${n?.label ?? a ?? (e ? "Aktuell" : "Current")}</span>
            </div>
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
                ${n ? e ? `Orange zeigt die gemessene Leistung. Die gestrichelten Prognosen sind unverändert aus dem Stand ${n.label ?? n.value} gespeichert.` : `Orange shows measured power. The dashed forecasts are the unchanged ${n.label ?? n.value} issue.` : e ? "Orange zeigt die gemessene Leistung; gestrichelte Linien zeigen den neuesten, noch veränderlichen Stand der Integrationen." : "Orange shows measured power; dashed lines show the latest forecast issue, which can still change."}
              </span>
            </div>
          </header>
          ${this._energySummary(l, n, t, e)}
          <div class="chart" role="img" aria-label=${this._chartAriaLabel(e)}></div>
          ${this._historyError ? rt`<p class="chart-note">
                ${e ? "Der Ist-Verlauf konnte nicht vollständig geladen werden." : "The actual production history could not be loaded completely."}
              </p>` : gt}
        </div>
      </ha-card>
    `;
  }
  firstUpdated() {
    const t = this.renderRoot.querySelector(".chart");
    t && (this._chart = Xb(t, void 0, { renderer: "canvas" }), this._resizeObserver = new ResizeObserver(() => this._chart?.resize()), this._resizeObserver.observe(t), this._loadHistory(), this._updateChart());
  }
  updated() {
    if (!this._chart) return;
    const t = this._dayKey();
    this._loadedDay !== t && !this._historyLoading && this._loadHistory(), this._updateChart();
  }
  async _loadHistory() {
    const t = this.hass, e = this._config?.actual.entity;
    if (!t?.callWS || !e) return;
    const i = ++this._historyRequest;
    this._historyLoading = !0;
    const { start: n, end: a } = Vf();
    try {
      const o = await t.callWS({
        type: "history/history_during_period",
        entity_ids: [e],
        start_time: n.toISOString(),
        end_time: a.toISOString(),
        minimal_response: !0,
        no_attributes: !0,
        significant_changes_only: !1
      });
      if (i !== this._historyRequest) return;
      const s = t.states[e], l = ph(
        this._config?.actual.unit,
        s?.attributes.unit_of_measurement
      );
      this._historyPoints = nO(o[e] ?? [], l, n, a), this._historyError = !1, this._loadedDay = this._dayKey();
    } catch {
      if (i !== this._historyRequest) return;
      this._historyError = !0, this._loadedDay = this._dayKey();
    } finally {
      i === this._historyRequest && (this._historyLoading = !1);
    }
  }
  _updateChart() {
    if (!this._chart || !this._config || !this.hass) return;
    const t = getComputedStyle(this), e = t.getPropertyValue("--primary-text-color").trim() || "#1f2937", i = t.getPropertyValue("--secondary-text-color").trim() || "#6b7280", n = t.getPropertyValue("--divider-color").trim() || "rgba(127, 127, 127, 0.2)", a = t.getPropertyValue("--ha-card-background").trim() || t.getPropertyValue("--card-background-color").trim() || "#ffffff", o = t.getPropertyValue("--ha-font-family-body").trim() || t.getPropertyValue("--paper-font-body1_-_font-family").trim() || "sans-serif", { start: s, end: l } = Vf(), u = this._series(s, l), c = u.find((p) => p.kind === "actual")?.points.at(-1), h = Math.min(Date.now(), l.getTime()), v = this.hass.locale?.language ?? navigator.language, d = this._opaqueColor(a, "#ffffff");
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
          textStyle: { color: i, fontSize: 12 }
        },
        tooltip: {
          show: !0,
          trigger: "axis",
          confine: !0,
          transitionDuration: 0,
          axisPointer: { type: "line", snap: !0, lineStyle: { color: i, width: 1 } },
          backgroundColor: d,
          borderColor: n,
          borderWidth: 1,
          padding: 0,
          textStyle: { color: e, fontFamily: o, fontSize: 13 },
          formatter: (p) => this._tooltip(p, u, v, n, i)
        },
        xAxis: {
          type: "time",
          min: s.getTime(),
          max: l.getTime(),
          boundaryGap: !1,
          name: v.toLowerCase().startsWith("de") ? "Uhrzeit" : "Time",
          nameLocation: "middle",
          nameGap: 32,
          nameTextStyle: { color: i, fontSize: 12 },
          axisLine: { show: !0, lineStyle: { color: n } },
          axisTick: { show: !1 },
          axisLabel: {
            color: i,
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
          nameTextStyle: { color: i, align: "right", fontSize: 12 },
          axisLine: { show: !1 },
          axisTick: { show: !1 },
          axisLabel: {
            color: i,
            fontSize: 11,
            formatter: (p) => new Intl.NumberFormat(v, { maximumFractionDigits: 1 }).format(p)
          },
          splitLine: { show: !0, lineStyle: { color: n, width: 1 } }
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
            lineStyle: { color: i, width: 1, type: "dashed", opacity: 0.7 },
            label: {
              show: !0,
              formatter: v.toLowerCase().startsWith("de") ? "Jetzt" : "Now",
              color: i,
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
    const i = this._config.actual, n = i.entity ? this.hass.states[i.entity] : void 0, a = [...this._historyPoints], o = Number(n?.state), s = new Date(n?.last_updated ?? "").getTime(), l = ph(
      i.unit,
      n?.attributes.unit_of_measurement
    );
    Number.isFinite(o) && Number.isFinite(s) && s >= t.getTime() && s < e.getTime() && a.push([s, Math.max(0, o * l)]);
    const u = [
      {
        name: i.name?.trim() || "Ist-Leistung",
        color: this._seriesColor(i.color, Gf),
        points: a.sort((d, p) => d[0] - p[0]),
        kind: "actual",
        energy: null
      }
    ], f = this._activeSnapshotSet(), c = f ? Xy(this.hass.states[f.snapshot_entity]?.state) : void 0, h = f && c && !qy(c, this._todayKeyIso()), v = [
      [this._config.forecast_1, Ry, "Solcast"],
      [this._config.forecast_2, Oy, "Helios Forecast"]
    ];
    for (const [d, p, m] of v) {
      if (!d?.entity) continue;
      const g = this.hass.states[d.entity], _ = (d === this._config.forecast_1 ? f?.forecast_1_entities : f?.forecast_2_entities)?.map((S) => this.hass?.states[S]?.state ?? "") ?? [], b = h && _.length ? JR(_, t, e, f.value_scale ?? 100) : f ? [] : iO(
        g?.attributes,
        d,
        g?.attributes.unit_of_measurement,
        t,
        e
      );
      u.push({
        name: d.name?.trim() || m,
        color: this._seriesColor(d.color, p),
        points: b,
        kind: "forecast",
        energy: h && _.length ? tO(_, f.value_scale ?? 100) : f ? null : eO(b)
      });
    }
    return u;
  }
  _energySummary(t, e, i, n) {
    const a = e?.actual_energy_entity ?? this._config?.actual_energy_entity, o = fa(this.hass, a), s = [
      {
        name: e?.actual_energy_label ?? (n ? "Ist bisher" : "Actual so far"),
        color: t.find((u) => u.kind === "actual")?.color ?? Gf,
        value: o
      },
      ...t.filter((u) => u.kind === "forecast").map((u) => ({ name: u.name, color: u.color, value: u.energy }))
    ], l = new Intl.NumberFormat(i, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
    return rt`<div class="energy-summary" aria-label=${n ? "Energie in Kilowattstunden" : "Energy in kilowatt-hours"}>
      ${s.map(
      (u) => rt`<span style=${`--series-color:${u.color}`}>
          <i aria-hidden="true"></i>
          <span>${u.name}</span>
          <strong>${u.value === null ? "–" : `${l.format(u.value)} kWh`}</strong>
        </span>`
    )}
    </div>`;
  }
  _selectedIssue() {
    return this._config?.selection_entity ? this.hass?.states[this._config.selection_entity]?.state : void 0;
  }
  _activeSnapshotSet() {
    const t = this._selectedIssue();
    return this._config?.snapshot_sets?.find((e) => e.value === t);
  }
  _todayKeyIso() {
    const t = /* @__PURE__ */ new Date();
    return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  }
  _tooltip(t, e, i, n, a) {
    const s = (Array.isArray(t) ? t : [t]).find((d) => d && typeof d == "object"), l = Number(s?.axisValue), u = Array.isArray(s?.value) ? Number(s.value[0]) : Number.NaN, f = Number.isFinite(l) ? l : u;
    if (!Number.isFinite(f)) return "";
    const c = new Intl.NumberFormat(i, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }), h = new Intl.DateTimeFormat(i, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1
    }).format(f), v = e.map((d) => {
      const p = aO(d.points, f, Ny * 0.6);
      return `<div style="display:flex;align-items:center;gap:8px;padding:3px 10px;">
          <span style="width:8px;height:8px;border-radius:50%;background:${this._escapeHtml(d.color)};flex:0 0 8px;"></span>
          <span style="flex:1;">${this._escapeHtml(d.name)}</span>
          <strong style="margin-left:12px;">${p === null ? "–" : `${c.format(p)} kW`}</strong>
        </div>`;
    }).join("");
    return `<div style="min-width:260px;padding:7px 0 8px;color:inherit;">
      <div style="font-weight:600;padding:0 10px 6px;border-bottom:1px solid ${this._escapeHtml(n)};margin-bottom:3px;">${this._escapeHtml(h)}</div>
      ${v}
      <div style="color:${this._escapeHtml(a)};font-size:11px;padding:5px 10px 0;">kW</div>
    </div>`;
  }
  _seriesColor(t, e) {
    const i = Mh(t, e), n = i.match(/^var\((--[a-z0-9-_]+)\)$/i)?.[1];
    return n ? getComputedStyle(this).getPropertyValue(n).trim() || e : i;
  }
  _withAlpha(t, e) {
    const n = document.createElement("canvas").getContext("2d");
    if (!n) return t;
    n.fillStyle = "#000000", n.fillStyle = t;
    const a = n.fillStyle;
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
    return rt`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }
};
Cl.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 },
  _historyPoints: { state: !0 },
  _historyError: { state: !0 }
}, Cl.styles = Ml`
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
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
      min-width: 0;
      padding: 24px 24px 16px;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      min-width: 0;
    }

    .title-block {
      display: grid;
      gap: 3px;
      min-width: 0;
    }

    .title-block > span {
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.3;
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
      min-width: 0;
      max-width: 100%;
      height: 360px;
      min-height: 280px;
    }

    .energy-summary {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 20px;
      min-height: 24px;
      padding: 4px 0 2px;
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.35;
    }

    .energy-summary > span {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .energy-summary i {
      width: 8px;
      height: 8px;
      flex: 0 0 8px;
      border-radius: 50%;
      background: var(--series-color);
    }

    .energy-summary strong {
      color: var(--primary-text-color);
      font-variant-numeric: tabular-nums;
      font-weight: 600;
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
let gh = Cl;
function DS(r) {
  const t = r.getFullYear(), e = String(r.getMonth() + 1).padStart(2, "0"), i = String(r.getDate()).padStart(2, "0");
  return `${t}-${e}-${i}`;
}
function sO(r, t = /* @__PURE__ */ new Date()) {
  const e = Math.max(1, Math.round(r)), i = new Date(
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    0,
    0,
    0,
    0
  );
  return Array.from({ length: e }, (n, a) => {
    const o = new Date(i);
    return o.setDate(i.getDate() - (e - a)), DS(o);
  });
}
function lO(r, t, e) {
  if (!Array.isArray(r)) return [];
  const i = /* @__PURE__ */ new Map();
  for (const n of r) {
    if (n.mean == null) continue;
    const a = typeof n.start == "number" ? n.start : new Date(n.start).getTime(), o = Number(n.mean);
    if (!Number.isFinite(a) || !Number.isFinite(o)) continue;
    const s = new Date(a);
    s.setDate(s.getDate() + t);
    const l = DS(s);
    e.has(l) && i.set(l, { day: l, timestamp: s.getTime(), value: o });
  }
  return [...i.values()].sort((n, a) => n.day.localeCompare(a.day));
}
function uO(r, t) {
  const e = new Map(t.map((i) => [i.day, i.value]));
  return r.map((i) => e.get(i) ?? null);
}
function fO(r) {
  if (r.length < 2)
    return { comparableDays: 0, winnerIndex: null, winnerDays: 0, tiedDays: 0 };
  const t = /* @__PURE__ */ new Set([...r[0].values.keys(), ...r[1].values.keys()]), e = [0, 0];
  let i = 0, n = 0;
  for (const o of t) {
    const s = r[0].values.get(o), l = r[1].values.get(o);
    if (!Number.isFinite(s) || !Number.isFinite(l)) continue;
    i += 1;
    const u = Math.abs(s), f = Math.abs(l);
    Math.abs(u - f) < 1e-9 ? n += 1 : u < f ? e[0] += 1 : e[1] += 1;
  }
  const a = e[0] === e[1] ? null : e[0] > e[1] ? 0 : 1;
  return {
    comparableDays: i,
    winnerIndex: a,
    winnerDays: a === null ? Math.max(...e) : e[a],
    tiedDays: n
  };
}
mr([
  EL,
  P1,
  cS,
  SS,
  NR,
  gS,
  CS
]);
const By = "#F59E0B", Fy = "#22C55E", zy = "#7C4DFF", cO = 1800 * 1e3, Al = class Al extends Er {
  constructor() {
    super(...arguments), this._statistics = {}, this._selectedMetric = "energy", this._loading = !1, this._loadError = !1, this._request = 0;
  }
  static getConfigForm() {
    const t = (e) => [
      { name: "name", selector: { text: {} } },
      { name: "color", selector: { text: {} } },
      { name: "mae_entity", required: e, selector: { entity: { domain: "sensor" } } },
      { name: "energy_entity", required: e, selector: { entity: { domain: "sensor" } } }
    ];
    return {
      schema: [
        { name: "title", selector: { text: {} } },
        {
          name: "days",
          selector: { number: { min: 7, max: 90, step: 1, mode: "box" } }
        },
        {
          name: "day_offset",
          selector: { number: { min: -3, max: 3, step: 1, mode: "box" } }
        },
        {
          name: "default_metric",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "energy", label: "Yield / Tagesertrag" },
                { value: "power", label: "Power profile / Leistungsverlauf" }
              ]
            }
          }
        },
        { name: "actual_color", selector: { text: {} } },
        {
          type: "expandable",
          name: "provider_1",
          title: "Provider 1",
          schema: t(!0)
        },
        {
          type: "expandable",
          name: "provider_2",
          title: "Provider 2 (optional)",
          schema: t(!1)
        }
      ],
      computeLabel: (e) => ({
        title: "Title / Titel",
        days: "Days / Tage",
        day_offset: "Day offset / Tagesverschiebung",
        default_metric: "Default metric / Standardkennzahl",
        actual_color: "Actual reference color / Farbe der Ist-Referenz",
        name: "Name",
        color: "Color / Farbe",
        mae_entity: "Daily MAE entity / MAE-Tagesentität",
        energy_entity: "Daily yield deviation entity / Tagesertragsabweichung"
      })[e.name ?? ""] ?? e.name ?? ""
    };
  }
  static getStubConfig() {
    return {
      title: "Prognosequalität · 30 Tage",
      days: 30,
      day_offset: -1,
      default_metric: "energy",
      actual_color: By,
      provider_1: {
        name: "Solcast",
        color: Fy,
        mae_entity: "sensor.solcast_mae_day",
        energy_entity: "sensor.solcast_energy_deviation_day"
      },
      provider_2: {
        name: "Helios Forecast",
        color: zy,
        mae_entity: "sensor.helios_mae_day",
        energy_entity: "sensor.helios_energy_deviation_day"
      }
    };
  }
  setConfig(t) {
    if (!t?.provider_1?.mae_entity?.trim())
      throw new Error("provider_1.mae_entity is required");
    if (!t.provider_1.energy_entity?.trim())
      throw new Error("provider_1.energy_entity is required");
    if (t.provider_2 && (!t.provider_2.mae_entity?.trim() || !t.provider_2.energy_entity?.trim()))
      throw new Error("provider_2 requires both mae_entity and energy_entity");
    const e = Math.min(90, Math.max(7, Math.round(t.days ?? 30))), i = Math.min(3, Math.max(-3, Math.round(t.day_offset ?? -1)));
    this._config = {
      ...t,
      days: e,
      day_offset: i,
      default_metric: t.default_metric === "power" ? "power" : "energy",
      provider_1: { ...t.provider_1 },
      provider_2: t.provider_2 ? { ...t.provider_2 } : void 0,
      contexts: t.contexts?.map((n) => ({
        ...n,
        provider_1: n.provider_1 ? { ...n.provider_1 } : void 0,
        provider_2: n.provider_2 ? { ...n.provider_2 } : void 0
      }))
    }, this._selectedMetric = this._config.default_metric ?? "energy", this._loadedSignature = void 0;
  }
  getCardSize() {
    return 7;
  }
  getGridOptions() {
    return { columns: 12, min_columns: 6 };
  }
  connectedCallback() {
    super.connectedCallback(), this._refreshTimer = window.setInterval(() => {
      this._loadedSignature = void 0, this._loadStatistics();
    }, cO);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._refreshTimer !== void 0 && window.clearInterval(this._refreshTimer), this._resizeObserver?.disconnect(), this._chart?.dispose(), this._chart = void 0;
  }
  render() {
    if (!this._config) return rt``;
    const e = (this.hass?.locale?.language ?? navigator.language).toLowerCase().startsWith("de"), i = this._config.title?.trim() || (e ? "Prognosequalität · 30 Tage" : "Forecast quality · 30 days"), n = this._metricView(this._selectedMetric), a = this._activeContext(), o = a.evaluable && n.series.some((l) => l.values.size > 0), s = this._evaluatedDays(n);
    return rt`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <h2>${i}</h2>
            <div class="info-control">
              <button
                class="info-button"
                type="button"
                aria-label=${e ? "Diagramm erklären" : "Explain chart"}
                aria-describedby="history-chart-tooltip"
              >
                ${this._infoIcon()}
              </button>
              <span id="history-chart-tooltip" class="info-tooltip" role="tooltip">
                ${e ? "Tagesertrag zeigt die prozentuale Abweichung von der tatsächlich erzeugten Tagesenergie. Leistungsverlauf zeigt den mittleren absoluten Leistungsfehler (MAE) aller Intervalle eines Tages." : "Yield shows the percentage deviation from actual daily energy. Power profile shows the mean absolute power error (MAE) across each day's intervals."}
              </span>
            </div>
          </header>

          <div class="metric-tabs" role="group" aria-label=${e ? "Kennzahl" : "Metric"}>
            <button
              type="button"
              class=${this._selectedMetric === "energy" ? "selected" : ""}
              aria-pressed=${this._selectedMetric === "energy"}
              @click=${() => this._selectMetric("energy")}
            >
              ${e ? "Tagesertrag" : "Yield"}
            </button>
            <button
              type="button"
              class=${this._selectedMetric === "power" ? "selected" : ""}
              aria-pressed=${this._selectedMetric === "power"}
              @click=${() => this._selectMetric("power")}
            >
              ${e ? "Leistungsverlauf" : "Power profile"}
            </button>
          </div>

          ${o ? rt`<p class="summary">${this._summary(n, this._selectedMetric, e)}</p>` : gt}
          <div
            class="chart"
            ?hidden=${!o}
            role="img"
            aria-label=${this._chartAriaLabel(n, this._selectedMetric, e)}
          ></div>
          ${o ? gt : this._emptyState(e, a.evaluable)}

          <footer class="card-footer">
            ${o ? rt`${a.label ? `${a.label} · ` : ""}${s} ${e ? "vollständige Tage" : "complete days"}
                  <span aria-hidden="true">·</span>
                  ${e ? `letzte ${this._config.days ?? 30} Tage` : `last ${this._config.days ?? 30} days`}` : a.evaluable ? e ? `Die Auswertung für ${a.label ?? "diesen Prognosestand"} beginnt nach dem ersten vollständigen Tag.` : `Evaluation for ${a.label ?? "this forecast issue"} starts after the first complete day.` : e ? "Der laufend aktualisierte Stand wird nicht als feste Prognose archiviert." : "The continuously updated issue is not archived as a fixed forecast."}
          </footer>
        </div>
      </ha-card>
    `;
  }
  firstUpdated() {
    const t = this.renderRoot.querySelector(".chart");
    t && (this._chart = Xb(t, void 0, { renderer: "canvas" }), this._resizeObserver = new ResizeObserver(() => this._chart?.resize()), this._resizeObserver.observe(t), this._loadStatistics(), this._updateChart());
  }
  updated() {
    this._loadStatistics(), this._updateChart();
  }
  _selectMetric(t) {
    this._selectedMetric = t;
  }
  async _loadStatistics() {
    if (!this._config || !this.hass?.callWS || this._loading) return;
    const t = this._signature();
    if (t === this._loadedSignature) return;
    this._loading = !0;
    const e = ++this._request, i = this._config.days ?? 30, n = Math.abs(this._config.day_offset ?? -1), a = /* @__PURE__ */ new Date();
    a.setHours(0, 0, 0, 0), a.setDate(a.getDate() - i - n - 2);
    const o = this._entityIds();
    try {
      const s = await this.hass.callWS({
        type: "recorder/statistics_during_period",
        start_time: a.toISOString(),
        end_time: (/* @__PURE__ */ new Date()).toISOString(),
        statistic_ids: o,
        period: "day",
        types: ["mean"],
        units: {}
      });
      if (e !== this._request) return;
      this._statistics = s ?? {}, this._loadError = !1, this._loadedSignature = t;
    } catch {
      if (e !== this._request) return;
      this._loadError = !0, this._loadedSignature = t;
    } finally {
      e === this._request && (this._loading = !1);
    }
  }
  _metricView(t) {
    const e = sO(this._config?.days ?? 30), i = new Set(e), n = t === "energy" ? "energy_entity" : "mae_entity", a = this._activeContext(), o = [a.provider_1, a.provider_2].filter(
      (f) => !!f
    ), s = ["Solcast", "Helios Forecast"], l = [Fy, zy], u = o.map((f, c) => {
      const h = f[n], v = lO(
        h ? this._statistics[h] : void 0,
        this._config?.day_offset ?? -1,
        i
      );
      return {
        name: f.name?.trim() || s[c],
        color: this._seriesColor(f.color, l[c]),
        values: new Map(v.map((d) => [d.day, d.value])),
        aligned: uO(e, v)
      };
    });
    return { days: e, series: u };
  }
  _updateChart() {
    if (!this._chart || !this._config) return;
    const t = this._metricView(this._selectedMetric);
    if (!t.series.some((g) => g.values.size > 0)) {
      this._chart.clear();
      return;
    }
    this._chart.resize();
    const i = getComputedStyle(this), n = i.getPropertyValue("--primary-text-color").trim() || "#1f2937", a = i.getPropertyValue("--secondary-text-color").trim() || "#6b7280", o = i.getPropertyValue("--divider-color").trim() || "rgba(127,127,127,.2)", s = i.getPropertyValue("--ha-card-background").trim() || i.getPropertyValue("--card-background-color").trim() || "#ffffff", l = i.getPropertyValue("--ha-font-family-body").trim() || i.getPropertyValue("--paper-font-body1_-_font-family").trim() || "sans-serif", u = this.hass?.locale?.language ?? navigator.language, f = this._selectedMetric === "energy", c = this._seriesColor(this._config.actual_color, By), h = s === "transparent" ? "#ffffff" : s, v = t.series.flatMap(
      (g) => g.aligned.filter((y) => y !== null)
    ), d = f ? this._energyBounds(v) : this._powerBounds(v), p = [
      ...f ? ["Ist-Ertrag"] : [],
      ...t.series.map((g) => g.name)
    ], m = [];
    f && m.push({
      name: "Ist-Ertrag",
      type: "line",
      data: t.days.map(() => 0),
      symbol: "none",
      lineStyle: { color: c, width: 1.5, type: "solid" },
      itemStyle: { color: c },
      markArea: {
        silent: !0,
        itemStyle: {
          color: i.getPropertyValue("--secondary-background-color").trim() || o,
          opacity: 0.46
        },
        label: {
          show: !0,
          color: a,
          formatter: u.toLowerCase().startsWith("de") ? "nah am Ist (±10 %)" : "close to actual (±10%)",
          position: "insideTopRight"
        },
        data: [[{ yAxis: -10 }, { yAxis: 10 }]]
      },
      z: 4
    });
    for (const g of t.series)
      m.push({
        name: g.name,
        type: f ? "bar" : "line",
        data: g.aligned,
        barMaxWidth: 11,
        barGap: "20%",
        showSymbol: !f,
        symbol: "circle",
        symbolSize: 5,
        connectNulls: !1,
        lineStyle: { color: g.color, width: 1.5, type: "dashed" },
        itemStyle: { color: g.color, opacity: f ? 0.84 : 1 },
        emphasis: { focus: "series" }
      });
    this._chart.setOption(
      {
        animation: !1,
        backgroundColor: "transparent",
        textStyle: { fontFamily: l, color: n },
        grid: { left: 52, right: 18, top: 28, bottom: 72 },
        legend: {
          show: !0,
          left: 0,
          bottom: 4,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 18,
          icon: "circle",
          data: p.map((g) => ({ name: g, icon: "circle" })),
          textStyle: { color: a, fontSize: 12 }
        },
        tooltip: {
          show: !0,
          trigger: "axis",
          confine: !0,
          transitionDuration: 0,
          axisPointer: f ? { type: "shadow", shadowStyle: { color: o, opacity: 0.35 } } : { type: "line", snap: !0, lineStyle: { color: a, width: 1 } },
          backgroundColor: h,
          borderColor: o,
          borderWidth: 1,
          padding: 0,
          textStyle: { color: n, fontFamily: l, fontSize: 13 },
          formatter: (g) => this._tooltip(g, t, this._selectedMetric, u, o, c)
        },
        xAxis: {
          type: "category",
          data: t.days,
          axisLine: { show: !0, lineStyle: { color: o } },
          axisTick: { show: !1 },
          axisLabel: {
            color: a,
            fontSize: 11,
            interval: Math.max(0, Math.ceil(t.days.length / 6) - 1),
            hideOverlap: !0,
            formatter: (g) => this._shortDate(g, u)
          },
          splitLine: { show: !1 }
        },
        yAxis: {
          type: "value",
          min: d.min,
          max: d.max,
          name: f ? "%" : "kW",
          nameLocation: "end",
          nameGap: 8,
          nameTextStyle: { color: a, align: "right", fontSize: 12 },
          axisLine: { show: !1 },
          axisTick: { show: !1 },
          axisLabel: {
            color: a,
            fontSize: 11,
            formatter: (g) => new Intl.NumberFormat(u, { maximumFractionDigits: f ? 0 : 1 }).format(
              g
            )
          },
          splitLine: { show: !0, lineStyle: { color: o, width: 1 } }
        },
        series: m
      },
      { notMerge: !0, lazyUpdate: !0 }
    );
  }
  _tooltip(t, e, i, n, a, o) {
    const l = (Array.isArray(t) ? t : [t]).find((d) => d && typeof d == "object"), u = Number(l?.dataIndex);
    if (!Number.isInteger(u) || u < 0 || u >= e.days.length) return "";
    const f = n.toLowerCase().startsWith("de"), c = new Intl.NumberFormat(n, {
      minimumFractionDigits: i === "energy" ? 1 : 2,
      maximumFractionDigits: i === "energy" ? 1 : 2,
      signDisplay: i === "energy" ? "always" : "auto"
    }), h = [];
    i === "energy" && h.push(
      this._tooltipRow(
        o,
        f ? "Ist-Ertrag" : "Actual yield",
        new Intl.NumberFormat(n, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
          signDisplay: "always"
        }).format(0) + " %",
        f ? "Referenz" : "Reference"
      )
    );
    for (const d of e.series) {
      const p = d.aligned[u], m = p == null ? "–" : i === "energy" ? `${c.format(p)} %` : `${c.format(p)} kW`, g = p == null ? "" : i === "power" ? f ? "kleiner ist besser" : "lower is better" : p > 0 ? f ? "zu hoch" : "too high" : p < 0 ? f ? "zu niedrig" : "too low" : f ? "genau am Ist" : "exact";
      h.push(this._tooltipRow(d.color, d.name, m, g));
    }
    const v = this._longDate(e.days[u], n);
    return `<div style="min-width:285px;padding:7px 0 8px;color:inherit;">
      <div style="font-weight:600;padding:0 10px 6px;border-bottom:1px solid ${this._escapeHtml(a)};margin-bottom:3px;">${this._escapeHtml(v)}</div>
      ${h.join("")}
    </div>`;
  }
  _tooltipRow(t, e, i, n) {
    return `<div style="display:grid;grid-template-columns:8px 1fr auto;align-items:center;column-gap:8px;padding:3px 10px;">
      <span style="width:8px;height:8px;border-radius:50%;background:${this._escapeHtml(t)};"></span>
      <span>${this._escapeHtml(e)}${n ? `<small style="display:block;color:var(--secondary-text-color);font-size:11px;">${this._escapeHtml(n)}</small>` : ""}</span>
      <strong style="margin-left:12px;">${this._escapeHtml(i)}</strong>
    </div>`;
  }
  _summary(t, e, i) {
    if (t.series.length < 2) {
      const o = this._evaluatedDays(t);
      return i ? `${o} vollständige Tage für ${t.series[0]?.name ?? "den Anbieter"}.` : `${o} complete days for ${t.series[0]?.name ?? "the provider"}.`;
    }
    const n = fO(t.series);
    if (n.comparableDays === 0) return i ? "Noch kein gemeinsamer Vergleich." : "No shared comparison yet.";
    if (n.winnerIndex === null)
      return i ? `Beide Anbieter lagen über ${n.comparableDays} Tage gleich oft näher am Ziel.` : `Both providers were closer to target equally often across ${n.comparableDays} days.`;
    const a = t.series[n.winnerIndex].name;
    return e === "energy" ? i ? `${a} lag an ${n.winnerDays} von ${n.comparableDays} Tagen näher am tatsächlichen Tagesertrag.` : `${a} was closer to actual yield on ${n.winnerDays} of ${n.comparableDays} days.` : i ? `${a} hatte an ${n.winnerDays} von ${n.comparableDays} Tagen den kleineren mittleren Leistungsfehler.` : `${a} had the lower mean power error on ${n.winnerDays} of ${n.comparableDays} days.`;
  }
  _emptyState(t, e = !0) {
    const i = e ? this._loadError ? t ? "Tagesdaten konnten nicht geladen werden" : "Daily data could not be loaded" : this._loading ? t ? "Tagesdaten werden geladen" : "Loading daily data" : t ? "Noch keine vollständigen Tagesdaten" : "No complete daily data yet" : t ? "Für „Aktuell“ gibt es bewusst kein Langzeiturteil" : "Current deliberately has no long-term verdict";
    return rt`<div class="empty-state">
      ${this._calendarIcon()}
      <strong>${i}</strong>
    </div>`;
  }
  _evaluatedDays(t) {
    return new Set(t.series.flatMap((e) => [...e.values.keys()])).size;
  }
  _energyBounds(t) {
    const e = Math.min(-10, ...t), i = Math.max(10, ...t);
    return {
      min: Math.floor(e / 10) * 10,
      max: Math.ceil(i / 10) * 10
    };
  }
  _powerBounds(t) {
    const e = Math.max(1, ...t);
    return { min: 0, max: Math.ceil(e * 2.2) / 2 };
  }
  _entityIds() {
    const t = this._activeContext();
    return [
      t.provider_1.mae_entity,
      t.provider_1.energy_entity,
      t.provider_2?.mae_entity,
      t.provider_2?.energy_entity
    ].filter((e) => !!e);
  }
  _activeContext() {
    if (!this._config) return { provider_1: {}, evaluable: !1 };
    const t = this._config.selection_entity ? this.hass?.states[this._config.selection_entity]?.state : void 0, e = this._config.contexts?.find((i) => i.value === t);
    return {
      provider_1: { ...this._config.provider_1, ...e?.provider_1 },
      provider_2: this._config.provider_2 || e?.provider_2 ? { ...this._config.provider_2, ...e?.provider_2 } : void 0,
      label: e?.label,
      evaluable: e?.evaluable !== !1
    };
  }
  _signature() {
    return `${this._entityIds().join("|")}|${this._config?.days}|${this._config?.day_offset}|${this._dayKey()}`;
  }
  _seriesColor(t, e) {
    const i = Mh(t, e), n = i.match(/^var\((--[a-z0-9-_]+)\)$/i)?.[1];
    return n ? getComputedStyle(this).getPropertyValue(n).trim() || e : i;
  }
  _shortDate(t, e) {
    return new Intl.DateTimeFormat(e, { day: "2-digit", month: "2-digit" }).format(
      /* @__PURE__ */ new Date(`${t}T12:00:00`)
    );
  }
  _longDate(t, e) {
    return new Intl.DateTimeFormat(e, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(/* @__PURE__ */ new Date(`${t}T12:00:00`));
  }
  _dayKey() {
    const t = /* @__PURE__ */ new Date();
    return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
  }
  _chartAriaLabel(t, e, i) {
    const n = t.series.map((a) => a.name).join(", ");
    return i ? `${e === "energy" ? "Tagesertragsabweichung" : "Mittlerer Leistungsfehler"} von ${n} über ${t.days.length} Tage` : `${e === "energy" ? "Daily yield deviation" : "Mean power error"} for ${n} across ${t.days.length} days`;
  }
  _escapeHtml(t) {
    return t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
  _infoIcon() {
    return rt`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }
  _calendarIcon() {
    return rt`<svg class="calendar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 3.5v3M17.5 3.5v3M4 8.5h16"></path>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2"></rect>
      <circle cx="15.7" cy="15.7" r="3.2"></circle>
      <path d="M15.7 13.9v2l1.3.8"></path>
    </svg>`;
  }
};
Al.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 },
  _statistics: { state: !0 },
  _selectedMetric: { state: !0 },
  _loading: { state: !0 },
  _loadError: { state: !0 }
}, Al.styles = Ml`
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
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
      min-width: 0;
      padding: 24px 24px 16px;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      min-width: 0;
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
      z-index: 8;
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
      width: min(370px, calc(100vw - 64px));
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

    .metric-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .metric-tabs button {
      min-height: 34px;
      padding: 6px 12px;
      color: var(--secondary-text-color);
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      border: 1px solid var(--divider-color);
      border-radius: 18px;
      background: transparent;
      cursor: pointer;
    }

    .metric-tabs button:hover {
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
    }

    .metric-tabs button.selected {
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.14));
      border-color: var(--secondary-text-color);
    }

    .metric-tabs button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .summary {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.4;
    }

    .chart {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      height: 340px;
      min-height: 280px;
    }

    .chart[hidden] {
      display: none;
    }

    .empty-state {
      display: grid;
      min-height: 150px;
      place-items: center;
      align-content: center;
      gap: 10px;
      color: var(--secondary-text-color);
      text-align: center;
    }

    .empty-state strong {
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 600;
    }

    .calendar-icon {
      width: 34px;
      height: 34px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.6;
    }

    .card-footer {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding-top: 12px;
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.35;
      border-top: 1px solid var(--divider-color);
    }

    @media (max-width: 600px) {
      .card-content {
        padding: 20px 16px 12px;
      }

      .chart {
        height: 310px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .info-tooltip {
        transition: none;
      }
    }
  `;
let mh = Al;
const Uf = [
  { value: "Day-ahead", label: "Vorabend", caption: "23:55" },
  { value: "07:00", label: "Morgen", caption: "07:00" },
  { value: "Aktuell", label: "Aktuell", caption: "live" }
], Dl = class Dl extends Er {
  static getConfigForm() {
    return {
      schema: [
        { name: "title", selector: { text: {} } },
        { name: "entity", required: !0, selector: { entity: { domain: ["input_select", "select"] } } }
      ],
      computeLabel: (t) => t.name === "entity" ? "Forecast issue selector / Prognosestand-Auswahl" : "Title / Titel"
    };
  }
  static getStubConfig() {
    return {
      title: "PV-Prognose-Labor",
      entity: "input_select.pv_forecast_issue",
      options: Uf
    };
  }
  setConfig(t) {
    if (!t?.entity?.trim()) throw new Error("entity is required");
    this._config = {
      ...t,
      options: t.options?.length ? t.options.map((e) => ({ ...e })) : Uf.map((e) => ({ ...e }))
    };
  }
  getCardSize() {
    return 2;
  }
  getGridOptions() {
    return { columns: 12, min_columns: 6 };
  }
  render() {
    if (!this._config) return rt``;
    const e = (this.hass?.locale?.language ?? navigator.language).toLowerCase().startsWith("de"), i = this.hass?.states[this._config.entity]?.state, n = this._config.options ?? Uf, a = this._config.title?.trim() || (e ? "PV-Prognose-Labor" : "PV forecast lab");
    return rt`
      <ha-card>
        <div class="card-content">
          <div class="heading">
            <div>
              <h1>${a}</h1>
              <p>${e ? "Prognosestand wählen" : "Choose forecast issue"}</p>
            </div>
            <div class="info-control">
              <button
                class="info-button"
                type="button"
                aria-label=${e ? "Prognosestände erklären" : "Explain forecast issues"}
                aria-describedby="lab-tooltip"
              >
                ${this._infoIcon()}
              </button>
              <span id="lab-tooltip" class="info-tooltip" role="tooltip">
                ${e ? "Vorabend und 07:00 sind eingefrorene Prognosen und werden getrennt gegen die echte Erzeugung geprüft. Aktuell zeigt den neuesten, noch veränderlichen Stand ohne Qualitätsurteil." : "Day-ahead and 07:00 are frozen issues evaluated separately against actual production. Current shows the latest changing forecast without a quality verdict."}
              </span>
            </div>
          </div>

          <div class="timeline" role="group" aria-label=${e ? "Prognosestand" : "Forecast issue"}>
            ${n.map((o) => {
      const s = o.value === i;
      return rt`<button
                type="button"
                class=${s ? "selected" : ""}
                aria-pressed=${s}
                @click=${() => this._select(o.value)}
              >
                <span class="node" aria-hidden="true"></span>
                <strong>${o.label?.trim() || o.value}</strong>
                ${o.caption ? rt`<small>${o.caption}</small>` : rt``}
              </button>`;
    })}
          </div>
        </div>
      </ha-card>
    `;
  }
  async _select(t) {
    if (!this._config || !this.hass?.callService) return;
    const e = this._config.entity.split(".")[0] || "input_select";
    await this.hass.callService(e, "select_option", {
      entity_id: this._config.entity,
      option: t
    });
  }
  _infoIcon() {
    return rt`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }
};
Dl.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
}, Dl.styles = Ml`
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
      display: grid;
      grid-template-columns: minmax(190px, 0.72fr) minmax(360px, 1.8fr);
      gap: 28px;
      align-items: center;
      box-sizing: border-box;
      padding: 20px 24px;
    }

    .heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
    }

    h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
    }

    p {
      margin: 4px 0 0;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.35;
    }

    .timeline {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
      min-width: 0;
    }

    .timeline::before {
      position: absolute;
      top: 11px;
      right: 16.666%;
      left: 16.666%;
      height: 2px;
      background: var(--divider-color);
      content: "";
    }

    .timeline button {
      position: relative;
      z-index: 1;
      display: grid;
      justify-items: center;
      gap: 3px;
      min-width: 0;
      padding: 0 6px 4px;
      color: var(--secondary-text-color);
      border: 0;
      background: transparent;
      cursor: pointer;
      font: inherit;
    }

    .timeline button:hover,
    .timeline button:focus-visible,
    .timeline button.selected {
      color: var(--primary-text-color);
    }

    .timeline button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 4px;
      border-radius: 8px;
    }

    .node {
      width: 12px;
      height: 12px;
      margin-bottom: 3px;
      border: 3px solid var(--ha-card-background, var(--card-background-color, #fff));
      border-radius: 50%;
      background: var(--divider-color);
      box-shadow: 0 0 0 1px var(--divider-color);
    }

    .selected .node {
      background: var(--primary-color);
      box-shadow: 0 0 0 2px var(--primary-color);
    }

    strong,
    small {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    strong {
      max-width: 100%;
      font-size: 13px;
      line-height: 1.25;
    }

    small {
      color: var(--secondary-text-color);
      font-size: 11px;
      line-height: 1.2;
    }

    .info-control {
      position: relative;
      z-index: 6;
      flex: 0 0 auto;
    }

    .info-button {
      display: grid;
      width: 32px;
      height: 32px;
      place-items: center;
      margin: -5px -5px 0 0;
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

    .info-button svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.8;
    }

    .info-tooltip {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      width: min(330px, calc(100vw - 64px));
      box-sizing: border-box;
      padding: 12px 14px;
      visibility: hidden;
      color: var(--primary-text-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgba(0, 0, 0, 0.18));
      opacity: 0;
      transform: translateY(-3px);
      transition: opacity 120ms ease, transform 120ms ease, visibility 120ms;
      pointer-events: none;
      font-size: 13px;
      line-height: 1.45;
    }

    .info-control:hover .info-tooltip,
    .info-control:focus-within .info-tooltip {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 720px) {
      .card-content {
        grid-template-columns: 1fr;
        gap: 18px;
        padding: 20px 16px;
      }

      .info-tooltip {
        right: 0;
        left: auto;
      }
    }
  `;
let yh = Dl;
const _h = "pv-forecast-quality-card", bh = "pv-forecast-day-card", Sh = "pv-forecast-history-card", wh = "pv-forecast-lab-card";
customElements.get(_h) || customElements.define(_h, Yf);
customElements.get(bh) || customElements.define(bh, gh);
customElements.get(Sh) || customElements.define(Sh, mh);
customElements.get(wh) || customElements.define(wh, yh);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: _h,
  name: "PV Forecast Quality Card",
  description: "Understand and compare PV forecast accuracy against actual production in a Home Assistant Sections view.",
  preview: !0,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card"
});
window.customCards.push({
  type: wh,
  name: "PV Forecast Lab Card",
  description: "Select a fixed forecast issue for all cards in a PV forecast lab dashboard.",
  preview: !0,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card"
});
window.customCards.push({
  type: bh,
  name: "PV Forecast Day Card",
  description: "Compare today's actual PV power with one or two forecast profiles using ECharts.",
  preview: !0,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card"
});
window.customCards.push({
  type: Sh,
  name: "PV Forecast History Card",
  description: "Compare daily yield deviation and power error for one or two providers over up to 90 days.",
  preview: !0,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card"
});
console.info(
  "%c PV FORECAST QUALITY CARD %c v0.4.2 ",
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
