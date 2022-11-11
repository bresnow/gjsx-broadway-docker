function TextEncoderLite() {
  return {
    encode(str) {
      var result;
      if ("undefined" === typeof Uint8Array) {
        result = utf8ToBytes(str);
      } else {
        result = new Uint8Array(utf8ToBytes(str));
      }
      return result;
    },
  };
}
function TextDecoderLite() {
  return {
    decode(bytes) {
      return utf8Slice(bytes, 0, bytes.length);
    },
  };
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  var i = 0;
  for (; i < length; i++) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (leadSurrogate) {
        if (codePoint < 56320) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        } else {
          codePoint =
            ((leadSurrogate - 55296) << 10) | (codePoint - 56320) | 65536;
          leadSurrogate = null;
        }
      } else {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          continue;
        } else {
          leadSurrogate = codePoint;
          continue;
        }
      }
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) bytes.push(239, 191, 189);
      leadSurrogate = null;
    }
    if (codePoint < 128) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) break;
      bytes.push((codePoint >> 6) | 192, (codePoint & 63) | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) break;
      bytes.push(
        (codePoint >> 12) | 224,
        ((codePoint >> 6) & 63) | 128,
        (codePoint & 63) | 128
      );
    } else if (codePoint < 2097152) {
      if ((units -= 4) < 0) break;
      bytes.push(
        (codePoint >> 18) | 240,
        ((codePoint >> 12) & 63) | 128,
        ((codePoint >> 6) & 63) | 128,
        (codePoint & 63) | 128
      );
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function utf8Slice(buf, start, end) {
  var res = "";
  var tmp = "";
  end = Math.min(buf.length, end || Infinity);
  start = start || 0;
  for (var i = start; i < end; i++) {
    if (buf[i] <= 127) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
      tmp = "";
    } else {
      tmp += "%" + buf[i].toString(16);
    }
  }
  return res + decodeUtf8Char(tmp);
}
function decodeUtf8Char(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    return String.fromCharCode(65533);
  }
}
export const TextEncoder = TextEncoderLite;
export const TextDecoder = TextDecoderLite;
