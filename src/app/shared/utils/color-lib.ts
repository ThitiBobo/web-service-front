import {HSL} from './HSL';
import colorNames from './color-names';

export function isColorValue(value: number): boolean {
  return value >= 0 && value <= 255;
}

export function isAlphaValue(value: number): boolean {
  return value >= 0 && value <= 1;
}

export function isRGBArray(rgba: number[]): boolean {
  if (rgba.length === 3) {
    for (let i = 0; i < 3; i++) {
      if (!isColorValue(rgba[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function isRGBAArray(rgba: number[]): boolean {
  if (rgba.length === 4) {
    for (let i = 0; i < 3; i++) {
      if (!isColorValue(rgba[i])) {
        return false;
      }
    }
    return isAlphaValue(rgba[3]);
  }
  return false;
}

export function isHex3(colorString: string): boolean {
  return /^#[0-9a-fA-F]{3}/.test(colorString);
}

export function isHex6(colorString: string): boolean {
  return /^#[0-9a-fA-F]{6}/.test(colorString);
}

// @ts-ignore
export function parseColorString(colorString: string): number[] {
  let c = colorString;

  if (isHex6(c)) {
    return [parseInt(c.substring(1, 3), 16), parseInt(c.substring(3, 5), 16), parseInt(c.substring(5, 7), 16)];
  }

  if (isHex3(c)) {
    return [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)];
  }

  let m;
  if (m = c.match(/rgb\( ?(\d+), ?(\d+), ?(\d+) ?\)/)) {
    let r = parseInt(m[1], 10);
    let g = parseInt(m[2], 10);
    let b = parseInt(m[3], 10);
    if (isColorValue(r) && isColorValue(g) && isColorValue(b)) {
      return [r, g, b];
    }
  }

  if (m = c.match(/rgba\( ?(\d+), ?(\d+), ?(\d+), ?(\d+.?\d*) ?\)/)) {
    let r = parseInt(m[1], 10);
    let g = parseInt(m[2], 10);
    let b = parseInt(m[3], 10);
    let a = parseFloat(m[4]);
    if (isColorValue(r) && isColorValue(g) && isColorValue(b) && isAlphaValue(a)) {
      return [r, g, b, a];
    }
  }

  let name = getColorName(c);
  if (name) {
    return name;
  }
}

// @ts-ignore
export function getColorName(colorString: string): number[] {
  let colStr = colorString.toLowerCase();
  if (colStr in colorNames) {
    return colorNames[colStr];
  }
  if (/ 1$/.test(colStr)) {
    // some color names had a 1 (eg. "blue 1') but none without the 1
    // the 1's were removed from colorNames, and this code was added to support either case
    let noOne = colStr.replace(/ 1$/, '');
    if (noOne in colorNames) {
      return colorNames[noOne];
    }
  }
}

export function isHSL(hsla: any): boolean {
  return (typeof hsla === 'object' &&
    'h' in hsla && isAlphaValue(hsla.h) &&
    's' in hsla && isAlphaValue(hsla.s) &&
    'l' in hsla && isAlphaValue(hsla.l) &&
    !('a' in hsla)
  );
}

export function rgb2hex(c: number[]): string {
  let r = int2hex(Math.round(c[0]));
  let g = int2hex(Math.round(c[1]));
  let b = int2hex(Math.round(c[2]));
  if (r[0] === r[1] && g[0] === g[1] && b[0] === b[1]) return ('#' + r[0] + g[0] + b[0]); //.toLowerCase();
  return ('#' + r + g + b); //.toLowerCase();
}

function int2hex(i: number): string {
  let v = i.toString(16);
  return v.length === 1 ? '0' + v : v;
}


function hslval(x: number, y: number, r: number): number {
  if (r < 0) r += 1;
  if (r > 1) r -= 1;
  let c;
  if (6 * r < 1) c = x + (y - x) * 6 * r;
  else if (2 * r < 1) c = y;
  else if (3 * r < 2) c = x + (y - x) * ((2 / 3) - r) * 6;
  else c = x;
  return c * 255;
}

export function hsl2rgb(hsl: any): number[] {
  let h = hsl.h, s = hsl.s, l = hsl.l, r, g, b;
  if (s === 0) {
    r = g = b = l * 255;
  } else {
    let x, y;
    if (l < 0.5) y = l * (1 + s);
    else y = l + s - l * s;
    x = 2 * l - y;
    r = hslval(x, y, h + 1 / 3);
    g = hslval(x, y, h);
    b = hslval(x, y, h - 1 / 3);
  }
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  return [r, g, b];
}

export function rgb2hsl(rgb: number[]): HSL {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  let x = Math.max(r, g, b);
  let n = Math.min(r, g, b);
  let l = (x + n) / 2;
  let s = 0, h = 0;
  if (x === n) {
    s = 0;
    h = 0;
  } else {
    let d = x - n;
    if (l > 0.5) s = d / (2 - x - n);
    else s = d / (x + n);
    if (x === r) h = (g - b) / d + (g < b ? 6 : 0);
    if (x === g) h = 2 + (b - r) / d;
    if (x === b) h = 4 + (r - g) / d;
    h /= 6;
    if (h < 0) h += 1;
  }
  return {
    h,
    s,
    l
  };
}

export function combine(s: number[], t: number[], amount: number) {
  amount = typeof amount==='number'? amount : 0.5;
  let r = Math.round((t[0] - s[0]) * amount);
  let g = Math.round((t[1] - s[1]) * amount);
  let b = Math.round((t[2] - s[2]) * amount);
  let rgb = [s[0] + r, s[1] + g, s[2] + b];
  if (s.length === 4) rgb[3] = s[3];
  return rgb;
}

export function invert(c: number[]): number[] {
  let rgba = c.slice();
  for (let i = 0; i < 3; i++) {
    rgba[i] = 255 - rgba[i];
  }
  return rgba;
}

export function tint(sourceHue: number, targetHue: number, amount: number): number {
  let sH = sourceHue;
  let tH = targetHue;
  let diff = tH - sH;
  let dH = diff * amount;
  let newh = sH + dH;
  if (newh < 0) newh += 1;
  if (newh > 1) newh -= 1;
  return newh;
}
