import { E as EventEmitter, d as deprecation, v as v8_0_0, D as DOMAdapter, n as nextPow2, T as Texture, C as Color, M as Matrix, w as warn, R as Rectangle, I as ImageSource, a as Cache } from "./index-Cn3Usw9y.js";
import { T as TextStyle } from "./TextStyle-Blhcjj-B.js";
import { b as FillPattern, F as FillGradient } from "./GraphicsContext-Bdf06Sox.js";
class AbstractBitmapFont extends EventEmitter {
  constructor() {
    super(...arguments);
    this.chars = /* @__PURE__ */ Object.create(null);
    this.lineHeight = 0;
    this.fontFamily = "";
    this.fontMetrics = { fontSize: 0, ascent: 0, descent: 0 };
    this.baseLineOffset = 0;
    this.distanceField = { type: "none", range: 0 };
    this.pages = [];
    this.applyFillAsTint = true;
    this.baseMeasurementFontSize = 100;
    this.baseRenderedFontSize = 100;
  }
  /**
   * The name of the font face.
   * @deprecated since 8.0.0 Use `fontFamily` instead.
   */
  get font() {
    deprecation(v8_0_0, "BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead.");
    return this.fontFamily;
  }
  /**
   * The map of base page textures (i.e., sheets of glyphs).
   * @deprecated since 8.0.0 Use `pages` instead.
   */
  get pageTextures() {
    deprecation(v8_0_0, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead.");
    return this.pages;
  }
  /**
   * The size of the font face in pixels.
   * @deprecated since 8.0.0 Use `fontMetrics.fontSize` instead.
   */
  get size() {
    deprecation(v8_0_0, "BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead.");
    return this.fontMetrics.fontSize;
  }
  /**
   * The kind of distance field for this font or "none".
   * @deprecated since 8.0.0 Use `distanceField.type` instead.
   */
  get distanceFieldRange() {
    deprecation(v8_0_0, "BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead.");
    return this.distanceField.range;
  }
  /**
   * The range of the distance field in pixels.
   * @deprecated since 8.0.0 Use `distanceField.range` instead.
   */
  get distanceFieldType() {
    deprecation(v8_0_0, "BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead.");
    return this.distanceField.type;
  }
  destroy(destroyTextures = false) {
    var _a;
    this.emit("destroy", this);
    this.removeAllListeners();
    for (const i in this.chars) {
      (_a = this.chars[i].texture) == null ? void 0 : _a.destroy();
    }
    this.chars = null;
    if (destroyTextures) {
      this.pages.forEach((page) => page.texture.destroy(true));
      this.pages = null;
    }
  }
}
class CanvasPoolClass {
  constructor(canvasOptions) {
    this._canvasPool = /* @__PURE__ */ Object.create(null);
    this.canvasOptions = canvasOptions || {};
    this.enableFullScreen = false;
  }
  /**
   * Creates texture with params that were specified in pool constructor.
   * @param pixelWidth - Width of texture in pixels.
   * @param pixelHeight - Height of texture in pixels.
   */
  _createCanvasAndContext(pixelWidth, pixelHeight) {
    const canvas = DOMAdapter.get().createCanvas();
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
    const context = canvas.getContext("2d");
    return { canvas, context };
  }
  /**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param minWidth - The minimum width of the render texture.
   * @param minHeight - The minimum height of the render texture.
   * @param resolution - The resolution of the render texture.
   * @returns The new render texture.
   */
  getOptimalCanvasAndContext(minWidth, minHeight, resolution = 1) {
    minWidth = Math.ceil(minWidth * resolution - 1e-6);
    minHeight = Math.ceil(minHeight * resolution - 1e-6);
    minWidth = nextPow2(minWidth);
    minHeight = nextPow2(minHeight);
    const key = (minWidth << 17) + (minHeight << 1);
    if (!this._canvasPool[key]) {
      this._canvasPool[key] = [];
    }
    let canvasAndContext = this._canvasPool[key].pop();
    if (!canvasAndContext) {
      canvasAndContext = this._createCanvasAndContext(minWidth, minHeight);
    }
    return canvasAndContext;
  }
  /**
   * Place a render texture back into the pool.
   * @param canvasAndContext
   */
  returnCanvasAndContext(canvasAndContext) {
    const canvas = canvasAndContext.canvas;
    const { width, height } = canvas;
    const key = (width << 17) + (height << 1);
    canvasAndContext.context.clearRect(0, 0, width, height);
    this._canvasPool[key].push(canvasAndContext);
  }
  clear() {
    this._canvasPool = {};
  }
}
const CanvasPool = new CanvasPoolClass();
const genericFontFamilies = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui"
];
function fontStringFromTextStyle(style) {
  const fontSizeString = typeof style.fontSize === "number" ? `${style.fontSize}px` : style.fontSize;
  let fontFamilies = style.fontFamily;
  if (!Array.isArray(style.fontFamily)) {
    fontFamilies = style.fontFamily.split(",");
  }
  for (let i = fontFamilies.length - 1; i >= 0; i--) {
    let fontFamily = fontFamilies[i].trim();
    if (!/([\"\'])[^\'\"]+\1/.test(fontFamily) && !genericFontFamilies.includes(fontFamily)) {
      fontFamily = `"${fontFamily}"`;
    }
    fontFamilies[i] = fontFamily;
  }
  return `${style.fontStyle} ${style.fontVariant} ${style.fontWeight} ${fontSizeString} ${fontFamilies.join(",")}`;
}
const contextSettings = {
  // TextMetrics requires getImageData readback for measuring fonts.
  willReadFrequently: true
};
const _CanvasTextMetrics = class _CanvasTextMetrics2 {
  /**
   * Checking that we can use modern canvas 2D API.
   *
   * Note: This is an unstable API, Chrome < 94 use `textLetterSpacing`, later versions use `letterSpacing`.
   * @see TextMetrics.experimentalLetterSpacing
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ICanvasRenderingContext2D/letterSpacing
   * @see https://developer.chrome.com/origintrials/#/view_trial/3585991203293757441
   */
  static get experimentalLetterSpacingSupported() {
    let result = _CanvasTextMetrics2._experimentalLetterSpacingSupported;
    if (result !== void 0) {
      const proto = DOMAdapter.get().getCanvasRenderingContext2D().prototype;
      result = _CanvasTextMetrics2._experimentalLetterSpacingSupported = "letterSpacing" in proto || "textLetterSpacing" in proto;
    }
    return result;
  }
  /**
   * @param text - the text that was measured
   * @param style - the style that was measured
   * @param width - the measured width of the text
   * @param height - the measured height of the text
   * @param lines - an array of the lines of text broken by new lines and wrapping if specified in style
   * @param lineWidths - an array of the line widths for each line matched to `lines`
   * @param lineHeight - the measured line height for this style
   * @param maxLineWidth - the maximum line width for all measured lines
   * @param {FontMetrics} fontProperties - the font properties object from TextMetrics.measureFont
   */
  constructor(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties) {
    this.text = text;
    this.style = style;
    this.width = width;
    this.height = height;
    this.lines = lines;
    this.lineWidths = lineWidths;
    this.lineHeight = lineHeight;
    this.maxLineWidth = maxLineWidth;
    this.fontProperties = fontProperties;
  }
  /**
   * Measures the supplied string of text and returns a Rectangle.
   * @param text - The text to measure.
   * @param style - The text style to use for measuring
   * @param canvas - optional specification of the canvas to use for measuring.
   * @param wordWrap
   * @returns Measured width and height of the text.
   */
  static measureText(text = " ", style, canvas = _CanvasTextMetrics2._canvas, wordWrap = style.wordWrap) {
    var _a;
    const textKey = `${text}:${style.styleKey}`;
    if (_CanvasTextMetrics2._measurementCache[textKey])
      return _CanvasTextMetrics2._measurementCache[textKey];
    const font = fontStringFromTextStyle(style);
    const fontProperties = _CanvasTextMetrics2.measureFont(font);
    if (fontProperties.fontSize === 0) {
      fontProperties.fontSize = style.fontSize;
      fontProperties.ascent = style.fontSize;
    }
    const context = _CanvasTextMetrics2.__context;
    context.font = font;
    const outputText = wordWrap ? _CanvasTextMetrics2._wordWrap(text, style, canvas) : text;
    const lines = outputText.split(/(?:\r\n|\r|\n)/);
    const lineWidths = new Array(lines.length);
    let maxLineWidth = 0;
    for (let i = 0; i < lines.length; i++) {
      const lineWidth = _CanvasTextMetrics2._measureText(lines[i], style.letterSpacing, context);
      lineWidths[i] = lineWidth;
      maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }
    const strokeWidth = ((_a = style._stroke) == null ? void 0 : _a.width) || 0;
    let width = maxLineWidth + strokeWidth;
    if (style.dropShadow) {
      width += style.dropShadow.distance;
    }
    const lineHeight = style.lineHeight || fontProperties.fontSize;
    let height = Math.max(lineHeight, fontProperties.fontSize + strokeWidth) + (lines.length - 1) * (lineHeight + style.leading);
    if (style.dropShadow) {
      height += style.dropShadow.distance;
    }
    const measurements = new _CanvasTextMetrics2(
      text,
      style,
      width,
      height,
      lines,
      lineWidths,
      lineHeight + style.leading,
      maxLineWidth,
      fontProperties
    );
    return measurements;
  }
  static _measureText(text, letterSpacing, context) {
    let useExperimentalLetterSpacing = false;
    if (_CanvasTextMetrics2.experimentalLetterSpacingSupported) {
      if (_CanvasTextMetrics2.experimentalLetterSpacing) {
        context.letterSpacing = `${letterSpacing}px`;
        context.textLetterSpacing = `${letterSpacing}px`;
        useExperimentalLetterSpacing = true;
      } else {
        context.letterSpacing = "0px";
        context.textLetterSpacing = "0px";
      }
    }
    const metrics = context.measureText(text);
    let metricWidth = metrics.width;
    const actualBoundingBoxLeft = -metrics.actualBoundingBoxLeft;
    const actualBoundingBoxRight = metrics.actualBoundingBoxRight;
    let boundsWidth = actualBoundingBoxRight - actualBoundingBoxLeft;
    if (metricWidth > 0) {
      if (useExperimentalLetterSpacing) {
        metricWidth -= letterSpacing;
        boundsWidth -= letterSpacing;
      } else {
        const val = (_CanvasTextMetrics2.graphemeSegmenter(text).length - 1) * letterSpacing;
        metricWidth += val;
        boundsWidth += val;
      }
    }
    return Math.max(metricWidth, boundsWidth);
  }
  /**
   * Applies newlines to a string to have it optimally fit into the horizontal
   * bounds set by the Text object's wordWrapWidth property.
   * @param text - String to apply word wrapping to
   * @param style - the style to use when wrapping
   * @param canvas - optional specification of the canvas to use for measuring.
   * @returns New string with new lines applied where required
   */
  static _wordWrap(text, style, canvas = _CanvasTextMetrics2._canvas) {
    const context = canvas.getContext("2d", contextSettings);
    let width = 0;
    let line = "";
    let lines = "";
    const cache = /* @__PURE__ */ Object.create(null);
    const { letterSpacing, whiteSpace } = style;
    const collapseSpaces = _CanvasTextMetrics2._collapseSpaces(whiteSpace);
    const collapseNewlines = _CanvasTextMetrics2._collapseNewlines(whiteSpace);
    let canPrependSpaces = !collapseSpaces;
    const wordWrapWidth = style.wordWrapWidth + letterSpacing;
    const tokens = _CanvasTextMetrics2._tokenize(text);
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (_CanvasTextMetrics2._isNewline(token)) {
        if (!collapseNewlines) {
          lines += _CanvasTextMetrics2._addLine(line);
          canPrependSpaces = !collapseSpaces;
          line = "";
          width = 0;
          continue;
        }
        token = " ";
      }
      if (collapseSpaces) {
        const currIsBreakingSpace = _CanvasTextMetrics2.isBreakingSpace(token);
        const lastIsBreakingSpace = _CanvasTextMetrics2.isBreakingSpace(line[line.length - 1]);
        if (currIsBreakingSpace && lastIsBreakingSpace) {
          continue;
        }
      }
      const tokenWidth = _CanvasTextMetrics2._getFromCache(token, letterSpacing, cache, context);
      if (tokenWidth > wordWrapWidth) {
        if (line !== "") {
          lines += _CanvasTextMetrics2._addLine(line);
          line = "";
          width = 0;
        }
        if (_CanvasTextMetrics2.canBreakWords(token, style.breakWords)) {
          const characters = _CanvasTextMetrics2.wordWrapSplit(token);
          for (let j = 0; j < characters.length; j++) {
            let char = characters[j];
            let lastChar = char;
            let k = 1;
            while (characters[j + k]) {
              const nextChar = characters[j + k];
              if (!_CanvasTextMetrics2.canBreakChars(lastChar, nextChar, token, j, style.breakWords)) {
                char += nextChar;
              } else {
                break;
              }
              lastChar = nextChar;
              k++;
            }
            j += k - 1;
            const characterWidth = _CanvasTextMetrics2._getFromCache(char, letterSpacing, cache, context);
            if (characterWidth + width > wordWrapWidth) {
              lines += _CanvasTextMetrics2._addLine(line);
              canPrependSpaces = false;
              line = "";
              width = 0;
            }
            line += char;
            width += characterWidth;
          }
        } else {
          if (line.length > 0) {
            lines += _CanvasTextMetrics2._addLine(line);
            line = "";
            width = 0;
          }
          const isLastToken = i === tokens.length - 1;
          lines += _CanvasTextMetrics2._addLine(token, !isLastToken);
          canPrependSpaces = false;
          line = "";
          width = 0;
        }
      } else {
        if (tokenWidth + width > wordWrapWidth) {
          canPrependSpaces = false;
          lines += _CanvasTextMetrics2._addLine(line);
          line = "";
          width = 0;
        }
        if (line.length > 0 || !_CanvasTextMetrics2.isBreakingSpace(token) || canPrependSpaces) {
          line += token;
          width += tokenWidth;
        }
      }
    }
    lines += _CanvasTextMetrics2._addLine(line, false);
    return lines;
  }
  /**
   * Convenience function for logging each line added during the wordWrap method.
   * @param line    - The line of text to add
   * @param newLine - Add new line character to end
   * @returns A formatted line
   */
  static _addLine(line, newLine = true) {
    line = _CanvasTextMetrics2._trimRight(line);
    line = newLine ? `${line}
` : line;
    return line;
  }
  /**
   * Gets & sets the widths of calculated characters in a cache object
   * @param key            - The key
   * @param letterSpacing  - The letter spacing
   * @param cache          - The cache
   * @param context        - The canvas context
   * @returns The from cache.
   */
  static _getFromCache(key, letterSpacing, cache, context) {
    let width = cache[key];
    if (typeof width !== "number") {
      width = _CanvasTextMetrics2._measureText(key, letterSpacing, context) + letterSpacing;
      cache[key] = width;
    }
    return width;
  }
  /**
   * Determines whether we should collapse breaking spaces.
   * @param whiteSpace - The TextStyle property whiteSpace
   * @returns Should collapse
   */
  static _collapseSpaces(whiteSpace) {
    return whiteSpace === "normal" || whiteSpace === "pre-line";
  }
  /**
   * Determines whether we should collapse newLine chars.
   * @param whiteSpace - The white space
   * @returns should collapse
   */
  static _collapseNewlines(whiteSpace) {
    return whiteSpace === "normal";
  }
  /**
   * Trims breaking whitespaces from string.
   * @param text - The text
   * @returns Trimmed string
   */
  static _trimRight(text) {
    if (typeof text !== "string") {
      return "";
    }
    for (let i = text.length - 1; i >= 0; i--) {
      const char = text[i];
      if (!_CanvasTextMetrics2.isBreakingSpace(char)) {
        break;
      }
      text = text.slice(0, -1);
    }
    return text;
  }
  /**
   * Determines if char is a newline.
   * @param char - The character
   * @returns True if newline, False otherwise.
   */
  static _isNewline(char) {
    if (typeof char !== "string") {
      return false;
    }
    return _CanvasTextMetrics2._newlines.includes(char.charCodeAt(0));
  }
  /**
   * Determines if char is a breaking whitespace.
   *
   * It allows one to determine whether char should be a breaking whitespace
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param char - The character
   * @param [_nextChar] - The next character
   * @returns True if whitespace, False otherwise.
   */
  static isBreakingSpace(char, _nextChar) {
    if (typeof char !== "string") {
      return false;
    }
    return _CanvasTextMetrics2._breakingSpaces.includes(char.charCodeAt(0));
  }
  /**
   * Splits a string into words, breaking-spaces and newLine characters
   * @param text - The text
   * @returns A tokenized array
   */
  static _tokenize(text) {
    const tokens = [];
    let token = "";
    if (typeof text !== "string") {
      return tokens;
    }
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];
      if (_CanvasTextMetrics2.isBreakingSpace(char, nextChar) || _CanvasTextMetrics2._isNewline(char)) {
        if (token !== "") {
          tokens.push(token);
          token = "";
        }
        tokens.push(char);
        continue;
      }
      token += char;
    }
    if (token !== "") {
      tokens.push(token);
    }
    return tokens;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to customise which words should break
   * Examples are if the token is CJK or numbers.
   * It must return a boolean.
   * @param _token - The token
   * @param breakWords - The style attr break words
   * @returns Whether to break word or not
   */
  static canBreakWords(_token, breakWords) {
    return breakWords;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to determine whether a pair of characters
   * should be broken by newlines
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param _char - The character
   * @param _nextChar - The next character
   * @param _token - The token/word the characters are from
   * @param _index - The index in the token of the char
   * @param _breakWords - The style attr break words
   * @returns whether to break word or not
   */
  static canBreakChars(_char, _nextChar, _token, _index, _breakWords) {
    return true;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It is called when a token (usually a word) has to be split into separate pieces
   * in order to determine the point to break a word.
   * It must return an array of characters.
   * @param token - The token to split
   * @returns The characters of the token
   * @see CanvasTextMetrics.graphemeSegmenter
   */
  static wordWrapSplit(token) {
    return _CanvasTextMetrics2.graphemeSegmenter(token);
  }
  /**
   * Calculates the ascent, descent and fontSize of a given font-style
   * @param font - String representing the style of the font
   * @returns Font properties object
   */
  static measureFont(font) {
    if (_CanvasTextMetrics2._fonts[font]) {
      return _CanvasTextMetrics2._fonts[font];
    }
    const context = _CanvasTextMetrics2._context;
    context.font = font;
    const metrics = context.measureText(_CanvasTextMetrics2.METRICS_STRING + _CanvasTextMetrics2.BASELINE_SYMBOL);
    const properties = {
      ascent: metrics.actualBoundingBoxAscent,
      descent: metrics.actualBoundingBoxDescent,
      fontSize: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
    };
    _CanvasTextMetrics2._fonts[font] = properties;
    return properties;
  }
  /**
   * Clear font metrics in metrics cache.
   * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
   */
  static clearMetrics(font = "") {
    if (font) {
      delete _CanvasTextMetrics2._fonts[font];
    } else {
      _CanvasTextMetrics2._fonts = {};
    }
  }
  /**
   * Cached canvas element for measuring text
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */
  static get _canvas() {
    if (!_CanvasTextMetrics2.__canvas) {
      let canvas;
      try {
        const c = new OffscreenCanvas(0, 0);
        const context = c.getContext("2d", contextSettings);
        if (context == null ? void 0 : context.measureText) {
          _CanvasTextMetrics2.__canvas = c;
          return c;
        }
        canvas = DOMAdapter.get().createCanvas();
      } catch (_cx) {
        canvas = DOMAdapter.get().createCanvas();
      }
      canvas.width = canvas.height = 10;
      _CanvasTextMetrics2.__canvas = canvas;
    }
    return _CanvasTextMetrics2.__canvas;
  }
  /**
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */
  static get _context() {
    if (!_CanvasTextMetrics2.__context) {
      _CanvasTextMetrics2.__context = _CanvasTextMetrics2._canvas.getContext("2d", contextSettings);
    }
    return _CanvasTextMetrics2.__context;
  }
};
_CanvasTextMetrics.METRICS_STRING = "|ÉqÅ";
_CanvasTextMetrics.BASELINE_SYMBOL = "M";
_CanvasTextMetrics.BASELINE_MULTIPLIER = 1.4;
_CanvasTextMetrics.HEIGHT_MULTIPLIER = 2;
_CanvasTextMetrics.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) === "function") {
    const segmenter = new Intl.Segmenter();
    return (s) => [...segmenter.segment(s)].map((x) => x.segment);
  }
  return (s) => [...s];
})();
_CanvasTextMetrics.experimentalLetterSpacing = false;
_CanvasTextMetrics._fonts = {};
_CanvasTextMetrics._newlines = [
  10,
  // line feed
  13
  // carriage return
];
_CanvasTextMetrics._breakingSpaces = [
  9,
  // character tabulation
  32,
  // space
  8192,
  // en quad
  8193,
  // em quad
  8194,
  // en space
  8195,
  // em space
  8196,
  // three-per-em space
  8197,
  // four-per-em space
  8198,
  // six-per-em space
  8200,
  // punctuation space
  8201,
  // thin space
  8202,
  // hair space
  8287,
  // medium mathematical space
  12288
  // ideographic space
];
_CanvasTextMetrics._measurementCache = {};
let CanvasTextMetrics = _CanvasTextMetrics;
const PRECISION = 1e5;
function getCanvasFillStyle(fillStyle, context, textMetrics, padding = 0) {
  if (fillStyle.texture === Texture.WHITE && !fillStyle.fill) {
    return Color.shared.setValue(fillStyle.color).setAlpha(fillStyle.alpha ?? 1).toHexa();
  } else if (!fillStyle.fill) {
    const pattern = context.createPattern(fillStyle.texture.source.resource, "repeat");
    const tempMatrix = fillStyle.matrix.copyTo(Matrix.shared);
    tempMatrix.scale(fillStyle.texture.frame.width, fillStyle.texture.frame.height);
    pattern.setTransform(tempMatrix);
    return pattern;
  } else if (fillStyle.fill instanceof FillPattern) {
    const fillPattern = fillStyle.fill;
    const pattern = context.createPattern(fillPattern.texture.source.resource, "repeat");
    const tempMatrix = fillPattern.transform.copyTo(Matrix.shared);
    tempMatrix.scale(
      fillPattern.texture.frame.width,
      fillPattern.texture.frame.height
    );
    pattern.setTransform(tempMatrix);
    return pattern;
  } else if (fillStyle.fill instanceof FillGradient) {
    const fillGradient = fillStyle.fill;
    const isLinear = fillGradient.type === "linear";
    const isLocal = fillGradient.textureSpace === "local";
    let width = 1;
    let height = 1;
    if (isLocal && textMetrics) {
      width = textMetrics.width + padding;
      height = textMetrics.height + padding;
    }
    let gradient;
    let isNearlyVertical = false;
    if (isLinear) {
      const { start, end } = fillGradient;
      gradient = context.createLinearGradient(
        start.x * width,
        start.y * height,
        end.x * width,
        end.y * height
      );
      isNearlyVertical = Math.abs(end.x - start.x) < Math.abs((end.y - start.y) * 0.1);
    } else {
      const { center, innerRadius, outerCenter, outerRadius } = fillGradient;
      gradient = context.createRadialGradient(
        center.x * width,
        center.y * height,
        innerRadius * width,
        outerCenter.x * width,
        outerCenter.y * height,
        outerRadius * width
      );
    }
    if (isNearlyVertical && isLocal && textMetrics) {
      const ratio = textMetrics.lineHeight / height;
      for (let i = 0; i < textMetrics.lines.length; i++) {
        const start = (i * textMetrics.lineHeight + padding / 2) / height;
        fillGradient.colorStops.forEach((stop) => {
          const globalStop = start + stop.offset * ratio;
          gradient.addColorStop(
            // fix to 5 decimal places to avoid floating point precision issues
            Math.floor(globalStop * PRECISION) / PRECISION,
            Color.shared.setValue(stop.color).toHex()
          );
        });
      }
    } else {
      fillGradient.colorStops.forEach((stop) => {
        gradient.addColorStop(stop.offset, Color.shared.setValue(stop.color).toHex());
      });
    }
    return gradient;
  }
  warn("FillStyle not recognised", fillStyle);
  return "red";
}
function resolveCharacters(chars) {
  if (chars === "") {
    return [];
  }
  if (typeof chars === "string") {
    chars = [chars];
  }
  const result = [];
  for (let i = 0, j = chars.length; i < j; i++) {
    const item = chars[i];
    if (Array.isArray(item)) {
      if (item.length !== 2) {
        throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${item.length}.`);
      }
      if (item[0].length === 0 || item[1].length === 0) {
        throw new Error("[BitmapFont]: Invalid character delimiter.");
      }
      const startCode = item[0].charCodeAt(0);
      const endCode = item[1].charCodeAt(0);
      if (endCode < startCode) {
        throw new Error("[BitmapFont]: Invalid character range.");
      }
      for (let i2 = startCode, j2 = endCode; i2 <= j2; i2++) {
        result.push(String.fromCharCode(i2));
      }
    } else {
      result.push(...Array.from(item));
    }
  }
  if (result.length === 0) {
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  }
  return result;
}
const _DynamicBitmapFont = class _DynamicBitmapFont2 extends AbstractBitmapFont {
  /**
   * @param options - The options for the dynamic bitmap font.
   */
  constructor(options) {
    super();
    this.resolution = 1;
    this.pages = [];
    this._padding = 0;
    this._measureCache = /* @__PURE__ */ Object.create(null);
    this._currentChars = [];
    this._currentX = 0;
    this._currentY = 0;
    this._currentPageIndex = -1;
    this._skipKerning = false;
    const dynamicOptions = { ..._DynamicBitmapFont2.defaultOptions, ...options };
    this._textureSize = dynamicOptions.textureSize;
    this._mipmap = dynamicOptions.mipmap;
    const style = dynamicOptions.style.clone();
    if (dynamicOptions.overrideFill) {
      style._fill.color = 16777215;
      style._fill.alpha = 1;
      style._fill.texture = Texture.WHITE;
      style._fill.fill = null;
    }
    this.applyFillAsTint = dynamicOptions.overrideFill;
    const requestedFontSize = style.fontSize;
    style.fontSize = this.baseMeasurementFontSize;
    const font = fontStringFromTextStyle(style);
    if (dynamicOptions.overrideSize) {
      if (style._stroke) {
        style._stroke.width *= this.baseRenderedFontSize / requestedFontSize;
      }
    } else {
      style.fontSize = this.baseRenderedFontSize = requestedFontSize;
    }
    this._style = style;
    this._skipKerning = dynamicOptions.skipKerning ?? false;
    this.resolution = dynamicOptions.resolution ?? 1;
    this._padding = dynamicOptions.padding ?? 4;
    this.fontMetrics = CanvasTextMetrics.measureFont(font);
    this.lineHeight = style.lineHeight || this.fontMetrics.fontSize || style.fontSize;
  }
  ensureCharacters(chars) {
    var _a, _b;
    const charList = resolveCharacters(chars).filter((char) => !this._currentChars.includes(char)).filter((char, index, self) => self.indexOf(char) === index);
    if (!charList.length)
      return;
    this._currentChars = [...this._currentChars, ...charList];
    let pageData;
    if (this._currentPageIndex === -1) {
      pageData = this._nextPage();
    } else {
      pageData = this.pages[this._currentPageIndex];
    }
    let { canvas, context } = pageData.canvasAndContext;
    let textureSource = pageData.texture.source;
    const style = this._style;
    let currentX = this._currentX;
    let currentY = this._currentY;
    const fontScale = this.baseRenderedFontSize / this.baseMeasurementFontSize;
    const padding = this._padding * fontScale;
    let maxCharHeight = 0;
    let skipTexture = false;
    const maxTextureWidth = canvas.width / this.resolution;
    const maxTextureHeight = canvas.height / this.resolution;
    for (let i = 0; i < charList.length; i++) {
      const char = charList[i];
      const metrics = CanvasTextMetrics.measureText(char, style, canvas, false);
      metrics.lineHeight = metrics.height;
      const width = metrics.width * fontScale;
      const textureGlyphWidth = Math.ceil((style.fontStyle === "italic" ? 2 : 1) * width);
      const height = metrics.height * fontScale;
      const paddedWidth = textureGlyphWidth + padding * 2;
      const paddedHeight = height + padding * 2;
      skipTexture = false;
      if (char !== "\n" && char !== "\r" && char !== "	" && char !== " ") {
        skipTexture = true;
        maxCharHeight = Math.ceil(Math.max(paddedHeight, maxCharHeight));
      }
      if (currentX + paddedWidth > maxTextureWidth) {
        currentY += maxCharHeight;
        maxCharHeight = paddedHeight;
        currentX = 0;
        if (currentY + maxCharHeight > maxTextureHeight) {
          textureSource.update();
          const pageData2 = this._nextPage();
          canvas = pageData2.canvasAndContext.canvas;
          context = pageData2.canvasAndContext.context;
          textureSource = pageData2.texture.source;
          currentY = 0;
        }
      }
      const xAdvance = width / fontScale - (((_a = style.dropShadow) == null ? void 0 : _a.distance) ?? 0) - (((_b = style._stroke) == null ? void 0 : _b.width) ?? 0);
      this.chars[char] = {
        id: char.codePointAt(0),
        xOffset: -this._padding,
        yOffset: -this._padding,
        xAdvance,
        kerning: {}
      };
      if (skipTexture) {
        this._drawGlyph(
          context,
          metrics,
          currentX + padding,
          currentY + padding,
          fontScale,
          style
        );
        const px = textureSource.width * fontScale;
        const py = textureSource.height * fontScale;
        const frame = new Rectangle(
          currentX / px * textureSource.width,
          currentY / py * textureSource.height,
          paddedWidth / px * textureSource.width,
          paddedHeight / py * textureSource.height
        );
        this.chars[char].texture = new Texture({
          source: textureSource,
          frame
        });
        currentX += Math.ceil(paddedWidth);
      }
    }
    textureSource.update();
    this._currentX = currentX;
    this._currentY = currentY;
    this._skipKerning && this._applyKerning(charList, context);
  }
  /**
   * @deprecated since 8.0.0
   * The map of base page textures (i.e., sheets of glyphs).
   */
  get pageTextures() {
    deprecation(v8_0_0, "BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead.");
    return this.pages;
  }
  _applyKerning(newChars, context) {
    const measureCache = this._measureCache;
    for (let i = 0; i < newChars.length; i++) {
      const first = newChars[i];
      for (let j = 0; j < this._currentChars.length; j++) {
        const second = this._currentChars[j];
        let c1 = measureCache[first];
        if (!c1)
          c1 = measureCache[first] = context.measureText(first).width;
        let c2 = measureCache[second];
        if (!c2)
          c2 = measureCache[second] = context.measureText(second).width;
        let total = context.measureText(first + second).width;
        let amount = total - (c1 + c2);
        if (amount) {
          this.chars[first].kerning[second] = amount;
        }
        total = context.measureText(first + second).width;
        amount = total - (c1 + c2);
        if (amount) {
          this.chars[second].kerning[first] = amount;
        }
      }
    }
  }
  _nextPage() {
    this._currentPageIndex++;
    const textureResolution = this.resolution;
    const canvasAndContext = CanvasPool.getOptimalCanvasAndContext(
      this._textureSize,
      this._textureSize,
      textureResolution
    );
    this._setupContext(canvasAndContext.context, this._style, textureResolution);
    const resolution = textureResolution * (this.baseRenderedFontSize / this.baseMeasurementFontSize);
    const texture = new Texture({
      source: new ImageSource({
        resource: canvasAndContext.canvas,
        resolution,
        alphaMode: "premultiply-alpha-on-upload",
        autoGenerateMipmaps: this._mipmap
      })
    });
    const pageData = {
      canvasAndContext,
      texture
    };
    this.pages[this._currentPageIndex] = pageData;
    return pageData;
  }
  // canvas style!
  _setupContext(context, style, resolution) {
    style.fontSize = this.baseRenderedFontSize;
    context.scale(resolution, resolution);
    context.font = fontStringFromTextStyle(style);
    style.fontSize = this.baseMeasurementFontSize;
    context.textBaseline = style.textBaseline;
    const stroke = style._stroke;
    const strokeThickness = (stroke == null ? void 0 : stroke.width) ?? 0;
    if (stroke) {
      context.lineWidth = strokeThickness;
      context.lineJoin = stroke.join;
      context.miterLimit = stroke.miterLimit;
      context.strokeStyle = getCanvasFillStyle(stroke, context);
    }
    if (style._fill) {
      context.fillStyle = getCanvasFillStyle(style._fill, context);
    }
    if (style.dropShadow) {
      const shadowOptions = style.dropShadow;
      const rgb = Color.shared.setValue(shadowOptions.color).toArray();
      const dropShadowBlur = shadowOptions.blur * resolution;
      const dropShadowDistance = shadowOptions.distance * resolution;
      context.shadowColor = `rgba(${rgb[0] * 255},${rgb[1] * 255},${rgb[2] * 255},${shadowOptions.alpha})`;
      context.shadowBlur = dropShadowBlur;
      context.shadowOffsetX = Math.cos(shadowOptions.angle) * dropShadowDistance;
      context.shadowOffsetY = Math.sin(shadowOptions.angle) * dropShadowDistance;
    } else {
      context.shadowColor = "black";
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
    }
  }
  _drawGlyph(context, metrics, x, y, fontScale, style) {
    const char = metrics.text;
    const fontProperties = metrics.fontProperties;
    const stroke = style._stroke;
    const strokeThickness = ((stroke == null ? void 0 : stroke.width) ?? 0) * fontScale;
    const tx = x + strokeThickness / 2;
    const ty = y - strokeThickness / 2;
    const descent = fontProperties.descent * fontScale;
    const lineHeight = metrics.lineHeight * fontScale;
    if (style.stroke && strokeThickness) {
      context.strokeText(char, tx, ty + lineHeight - descent);
    }
    if (style._fill) {
      context.fillText(char, tx, ty + lineHeight - descent);
    }
  }
  destroy() {
    super.destroy();
    for (let i = 0; i < this.pages.length; i++) {
      const { canvasAndContext, texture } = this.pages[i];
      CanvasPool.returnCanvasAndContext(canvasAndContext);
      texture.destroy(true);
    }
    this.pages = null;
  }
};
_DynamicBitmapFont.defaultOptions = {
  textureSize: 512,
  style: new TextStyle(),
  mipmap: true
};
let DynamicBitmapFont = _DynamicBitmapFont;
function getBitmapTextLayout(chars, style, font, trimEnd) {
  const layoutData = {
    width: 0,
    height: 0,
    offsetY: 0,
    scale: style.fontSize / font.baseMeasurementFontSize,
    lines: [{
      width: 0,
      charPositions: [],
      spaceWidth: 0,
      spacesIndex: [],
      chars: []
    }]
  };
  layoutData.offsetY = font.baseLineOffset;
  let currentLine = layoutData.lines[0];
  let previousChar = null;
  let firstWord = true;
  const currentWord = {
    width: 0,
    start: 0,
    index: 0,
    // use index to not modify the array as we use it a lot!
    positions: [],
    chars: []
  };
  const nextWord = (word) => {
    const start = currentLine.width;
    for (let j = 0; j < currentWord.index; j++) {
      const position = word.positions[j];
      currentLine.chars.push(word.chars[j]);
      currentLine.charPositions.push(position + start);
    }
    currentLine.width += word.width;
    firstWord = false;
    currentWord.width = 0;
    currentWord.index = 0;
    currentWord.chars.length = 0;
  };
  const nextLine = () => {
    let index = currentLine.chars.length - 1;
    if (trimEnd) {
      let lastChar = currentLine.chars[index];
      while (lastChar === " ") {
        currentLine.width -= font.chars[lastChar].xAdvance;
        lastChar = currentLine.chars[--index];
      }
    }
    layoutData.width = Math.max(layoutData.width, currentLine.width);
    currentLine = {
      width: 0,
      charPositions: [],
      chars: [],
      spaceWidth: 0,
      spacesIndex: []
    };
    firstWord = true;
    layoutData.lines.push(currentLine);
    layoutData.height += font.lineHeight;
  };
  const scale = font.baseMeasurementFontSize / style.fontSize;
  const adjustedLetterSpacing = style.letterSpacing * scale;
  const adjustedWordWrapWidth = style.wordWrapWidth * scale;
  for (let i = 0; i < chars.length + 1; i++) {
    let char;
    const isEnd = i === chars.length;
    if (!isEnd) {
      char = chars[i];
    }
    const charData = font.chars[char] || font.chars[" "];
    const isSpace = /(?:\s)/.test(char);
    const isWordBreak = isSpace || char === "\r" || char === "\n" || isEnd;
    if (isWordBreak) {
      const addWordToNextLine = !firstWord && style.wordWrap && currentLine.width + currentWord.width - adjustedLetterSpacing > adjustedWordWrapWidth;
      if (addWordToNextLine) {
        nextLine();
        nextWord(currentWord);
        if (!isEnd) {
          currentLine.charPositions.push(0);
        }
      } else {
        currentWord.start = currentLine.width;
        nextWord(currentWord);
        if (!isEnd) {
          currentLine.charPositions.push(0);
        }
      }
      if (char === "\r" || char === "\n") {
        if (currentLine.width !== 0) {
          nextLine();
        }
      } else if (!isEnd) {
        const spaceWidth = charData.xAdvance + (charData.kerning[previousChar] || 0) + adjustedLetterSpacing;
        currentLine.width += spaceWidth;
        currentLine.spaceWidth = spaceWidth;
        currentLine.spacesIndex.push(currentLine.charPositions.length);
        currentLine.chars.push(char);
      }
    } else {
      const kerning = charData.kerning[previousChar] || 0;
      const nextCharWidth = charData.xAdvance + kerning + adjustedLetterSpacing;
      currentWord.positions[currentWord.index++] = currentWord.width + kerning;
      currentWord.chars.push(char);
      currentWord.width += nextCharWidth;
    }
    previousChar = char;
  }
  nextLine();
  if (style.align === "center") {
    alignCenter(layoutData);
  } else if (style.align === "right") {
    alignRight(layoutData);
  } else if (style.align === "justify") {
    alignJustify(layoutData);
  }
  return layoutData;
}
function alignCenter(measurementData) {
  for (let i = 0; i < measurementData.lines.length; i++) {
    const line = measurementData.lines[i];
    const offset = measurementData.width / 2 - line.width / 2;
    for (let j = 0; j < line.charPositions.length; j++) {
      line.charPositions[j] += offset;
    }
  }
}
function alignRight(measurementData) {
  for (let i = 0; i < measurementData.lines.length; i++) {
    const line = measurementData.lines[i];
    const offset = measurementData.width - line.width;
    for (let j = 0; j < line.charPositions.length; j++) {
      line.charPositions[j] += offset;
    }
  }
}
function alignJustify(measurementData) {
  const width = measurementData.width;
  for (let i = 0; i < measurementData.lines.length; i++) {
    const line = measurementData.lines[i];
    let indy = 0;
    let spaceIndex = line.spacesIndex[indy++];
    let offset = 0;
    const totalSpaces = line.spacesIndex.length;
    const newSpaceWidth = (width - line.width) / totalSpaces;
    const spaceWidth = newSpaceWidth;
    for (let j = 0; j < line.charPositions.length; j++) {
      if (j === spaceIndex) {
        spaceIndex = line.spacesIndex[indy++];
        offset += spaceWidth;
      }
      line.charPositions[j] += offset;
    }
  }
}
let fontCount = 0;
class BitmapFontManagerClass {
  constructor() {
    this.ALPHA = [["a", "z"], ["A", "Z"], " "];
    this.NUMERIC = [["0", "9"]];
    this.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "];
    this.ASCII = [[" ", "~"]];
    this.defaultOptions = {
      chars: this.ALPHANUMERIC,
      resolution: 1,
      padding: 4,
      skipKerning: false
    };
  }
  /**
   * Get a font for the specified text and style.
   * @param text - The text to get the font for
   * @param style - The style to use
   */
  getFont(text, style) {
    var _a;
    let fontFamilyKey = `${style.fontFamily}-bitmap`;
    let overrideFill = true;
    if (style._fill.fill && !style._stroke) {
      fontFamilyKey += style._fill.fill.styleKey;
      overrideFill = false;
    } else if (style._stroke || style.dropShadow) {
      let key = style.styleKey;
      key = key.substring(0, key.lastIndexOf("-"));
      fontFamilyKey = `${key}-bitmap`;
      overrideFill = false;
    }
    if (!Cache.has(fontFamilyKey)) {
      const fnt = new DynamicBitmapFont({
        style,
        overrideFill,
        overrideSize: true,
        ...this.defaultOptions
      });
      fontCount++;
      if (fontCount > 50) {
        warn("BitmapText", `You have dynamically created ${fontCount} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``);
      }
      fnt.once("destroy", () => {
        fontCount--;
        Cache.remove(fontFamilyKey);
      });
      Cache.set(
        fontFamilyKey,
        fnt
      );
    }
    const dynamicFont = Cache.get(fontFamilyKey);
    (_a = dynamicFont.ensureCharacters) == null ? void 0 : _a.call(dynamicFont, text);
    return dynamicFont;
  }
  /**
   * Get the layout of a text for the specified style.
   * @param text - The text to get the layout for
   * @param style - The style to use
   * @param trimEnd - Whether to ignore whitespaces at the end of each line
   */
  getLayout(text, style, trimEnd = true) {
    const bitmapFont = this.getFont(text, style);
    return getBitmapTextLayout([...text], style, bitmapFont, trimEnd);
  }
  /**
   * Measure the text using the specified style.
   * @param text - The text to measure
   * @param style - The style to use
   * @param trimEnd - Whether to ignore whitespaces at the end of each line
   */
  measureText(text, style, trimEnd = true) {
    return this.getLayout(text, style, trimEnd);
  }
  // eslint-disable-next-line max-len
  install(...args) {
    var _a, _b, _c, _d;
    let options = args[0];
    if (typeof options === "string") {
      options = {
        name: options,
        style: args[1],
        chars: (_a = args[2]) == null ? void 0 : _a.chars,
        resolution: (_b = args[2]) == null ? void 0 : _b.resolution,
        padding: (_c = args[2]) == null ? void 0 : _c.padding,
        skipKerning: (_d = args[2]) == null ? void 0 : _d.skipKerning
      };
      deprecation(v8_0_0, "BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})");
    }
    const name = options == null ? void 0 : options.name;
    if (!name) {
      throw new Error("[BitmapFontManager] Property `name` is required.");
    }
    options = { ...this.defaultOptions, ...options };
    const textStyle = options.style;
    const style = textStyle instanceof TextStyle ? textStyle : new TextStyle(textStyle);
    const overrideFill = style._fill.fill !== null && style._fill.fill !== void 0;
    const font = new DynamicBitmapFont({
      style,
      overrideFill,
      skipKerning: options.skipKerning,
      padding: options.padding,
      resolution: options.resolution,
      overrideSize: false
    });
    const flatChars = resolveCharacters(options.chars);
    font.ensureCharacters(flatChars.join(""));
    Cache.set(`${name}-bitmap`, font);
    font.once("destroy", () => Cache.remove(`${name}-bitmap`));
    return font;
  }
  /**
   * Uninstalls a bitmap font from the cache.
   * @param {string} name - The name of the bitmap font to uninstall.
   */
  uninstall(name) {
    const cacheKey = `${name}-bitmap`;
    const font = Cache.get(cacheKey);
    if (font) {
      font.destroy();
    }
  }
}
const BitmapFontManager = new BitmapFontManagerClass();
export {
  AbstractBitmapFont as A,
  BitmapFontManager as B,
  CanvasPool as C,
  CanvasTextMetrics as a,
  getCanvasFillStyle as b,
  fontStringFromTextStyle as f,
  getBitmapTextLayout as g
};
//# sourceMappingURL=BitmapFontManager-Ba-zpJ0S.js.map
