// captions.swift — render a full-frame transparent caption layer (1080x1920 PNG)
// Usage: captions.swift <spec.json> <out.png>
//
// spec.json: { "lines": [ { "text": "...", "x": 540, "y": 380, "size": 68,
//                            "font": "Georgia-Bold", "color": "F4F0E6",
//                            "alpha": 1.0, "align": "center", "kern": 0,
//                            "shadow": 3 } ] }
// x is the CENTER-x when align=center, else left edge. y is the top of the line.
import AppKit

struct Line: Codable {
  let text: String
  let x: CGFloat
  let y: CGFloat
  let size: CGFloat
  let font: String
  let color: String
  var alpha: CGFloat = 1.0
  var align: String = "center"
  var kern: CGFloat = 0
  var shadow: CGFloat = 0
  var maxw: CGFloat = 940
  var plate: CGFloat = 0   // >0: rounded translucent dark plate behind text (padding px)
}
struct Spec: Codable {
  let lines: [Line]
  var w: Int? ; var h: Int?
}

extension Line {
  init(from decoder: Decoder) throws {
    let c = try decoder.container(keyedBy: CodingKeys.self)
    text = try c.decode(String.self, forKey: .text)
    x = try c.decode(CGFloat.self, forKey: .x)
    y = try c.decode(CGFloat.self, forKey: .y)
    size = try c.decode(CGFloat.self, forKey: .size)
    font = try c.decode(String.self, forKey: .font)
    color = try c.decode(String.self, forKey: .color)
    alpha = try c.decodeIfPresent(CGFloat.self, forKey: .alpha) ?? 1.0
    align = try c.decodeIfPresent(String.self, forKey: .align) ?? "center"
    kern = try c.decodeIfPresent(CGFloat.self, forKey: .kern) ?? 0
    shadow = try c.decodeIfPresent(CGFloat.self, forKey: .shadow) ?? 0
    maxw = try c.decodeIfPresent(CGFloat.self, forKey: .maxw) ?? 940
    plate = try c.decodeIfPresent(CGFloat.self, forKey: .plate) ?? 0
  }
  enum CodingKeys: String, CodingKey { case text, x, y, size, font, color, alpha, align, kern, shadow, maxw, plate }
}

func color(_ hex: String, _ a: CGFloat) -> NSColor {
  let v = UInt64(hex, radix: 16) ?? 0xffffff
  return NSColor(srgbRed: CGFloat((v >> 16) & 0xff) / 255,
                 green: CGFloat((v >> 8) & 0xff) / 255,
                 blue: CGFloat(v & 0xff) / 255, alpha: a)
}

let args = CommandLine.arguments
guard args.count == 3 else { FileHandle.standardError.write("usage: captions <spec.json> <out.png>\n".data(using: .utf8)!); exit(1) }
let rawSpec = try JSONDecoder().decode(Spec.self, from: Data(contentsOf: URL(fileURLWithPath: args[1])))

let W = rawSpec.w ?? 1080, H = rawSpec.h ?? 1920
let spec = rawSpec
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: W, pixelsHigh: H,
                           bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true,
                           isPlanar: false, colorSpaceName: .deviceRGB,
                           bytesPerRow: 0, bitsPerPixel: 0)!

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
for ln in spec.lines {
  var size = ln.size
  var font = NSFont(name: ln.font, size: size)
  var str: NSAttributedString
  // shrink-to-fit: never exceed maxw (default 940px)
  while true {
    guard let f = font else {
      FileHandle.standardError.write("missing font \(ln.font)\n".data(using: .utf8)!); exit(2)
    }
    var attr: [NSAttributedString.Key: Any] = [
      .font: f, .foregroundColor: color(ln.color, ln.alpha),
      .kern: ln.kern,
    ]
    if ln.shadow > 0 {
      let s = NSShadow()
      s.shadowColor = NSColor.black.withAlphaComponent(0.75)
      s.shadowOffset = NSSize(width: ln.shadow, height: -ln.shadow)
      s.shadowBlurRadius = 6
      attr[.shadow] = s
    }
    str = NSAttributedString(string: ln.text, attributes: attr)
    let w = str.size().width
    if w <= ln.maxw || size < 12 { break }
    size *= ln.maxw / w
    font = NSFont(name: ln.font, size: size)
  }
  var x = ln.x
  // spec y is TOP-based (drawtext convention); AppKit bitmap context is bottom-left
  let y = CGFloat(H) - ln.y - str.size().height
  if ln.align == "center" { x = ln.x - str.size().width / 2 }
  if ln.plate > 0 {
    let sz = str.size()
    let pad = ln.plate
    let rect = NSRect(x: x - pad, y: y - pad * 0.55,
                      width: sz.width + pad * 2, height: sz.height + pad * 1.1)
    let pl = NSBezierPath(roundedRect: rect, xRadius: pad * 0.9, yRadius: pad * 0.9)
    NSColor.black.withAlphaComponent(0.42).setFill()
    pl.fill()
  }
  str.draw(at: NSPoint(x: x, y: y))
}
NSGraphicsContext.restoreGraphicsState()

let png = rep.representation(using: .png, properties: [:])!
try png.write(to: URL(fileURLWithPath: args[2]))
