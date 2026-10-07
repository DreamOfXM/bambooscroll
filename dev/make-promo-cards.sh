#!/bin/bash
# Bamboo Scroll — Myth Check share cards (1080x1350, 4:5)
# Works on: Reddit image posts, X/Twitter, Instagram, Facebook groups, Pinterest.
#
# Copy rules: every claim is lifted from the site's own ep01 Myth Check blocks
# (content/ep01.js) — quote the novel, give the record's answer, cite the source.
# Visual: panel art on top fading into parchment, ink serif typography below.
#
# Usage:  ./dev/make-promo-cards.sh [outdir]
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
EP="$ROOT/panels/ep01"
OUTDIR="${1:-$ROOT/../chuangye/bambooscroll_cards}"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
mkdir -p "$OUTDIR"

CW=1080; CH=1350
INK=2A2118; DIM=6B5D4F; ACC=8A5A2B; CREAM=F4F0E6

swiftc -O "$ROOT/dev/captions.swift" -o "$TMP/captions" 2>/dev/null

# parchment fade strip (transparent top -> parchment bottom)
ffmpeg -y -v error -f lavfi -i "color=c=0x${CREAM}:s=${CW}x160,format=rgba" \
  -vf "geq=r=244:g=240:b=230:a='255*Y/160'" -frames:v 1 "$TMP/fade.png"

# spec -> png
render() { local spec="$1" out="$2"; printf '%s' "$spec" > "$TMP/spec.json"; "$TMP/captions" "$TMP/spec.json" "$out"; }

L() { local t="${1//\"/\\\"}"; printf '{"text":"%s","x":%s,"y":%s,"size":%s,"font":"%s","color":"%s","kern":%s,"shadow":%s,"align":"%s"}' "$t" "$2" "$3" "$4" "$5" "$6" "${7:-0}" "${8:-0}" "${9:-center}"; }

# card <id> <panel> <kicker> <lines-json>  — y layout is fixed (see render calls)
card() {
  local id="$1" panel="$2"
  # art height after scaling to 1080 wide
  local artH; artH=$(ffprobe -v error -show_entries stream=height -of csv=p=0 "$panel" | awk -v w="$(ffprobe -v error -show_entries stream=width -of csv=p=0 "$panel")" 'BEGIN{h=int(w);}' 2>/dev/null)
  artH=$(python3 -c "
import subprocess
w=int(subprocess.check_output(['ffprobe','-v','error','-show_entries','stream=width','-of','csv=p=0','$panel']))
h=int(subprocess.check_output(['ffprobe','-v','error','-show_entries','stream=height','-of','csv=p=0','$panel']))
print(min(780, int(1080*h/w)))")
  local fadeY=$((artH-140))
  ffmpeg -y -v error \
    -f lavfi -i "color=c=0x${CREAM}:s=${CW}x${CH}" \
    -i "$panel" -loop 1 -i "$TMP/fade.png" -loop 1 -i "$TMP/text-${id}.png" \
    -filter_complex "\
[1:v]scale=${CW}:-2,crop=${CW}:${artH}:0:'0.2*(in_h-out_h)'[art];\
[0:v][art]overlay=0:0[base];\
[base][2:v]overlay=0:${fadeY}[seam];\
[seam][3:v]overlay=0:0" \
    -frames:v 1 "$OUTDIR/card-${id}.png"
  echo "  card-${id}.png  (art ${artH}px)"
}

echo "== text layers"

# fixed text layout (y positions)
KICK_Y=812; LB1_Y=878; MYTH_Y=912; LB2_Y=1010; TR_Y=1046; SRC_Y=1196; URL_Y=1256

render "{\"w\":${CW},\"h\":${CH},\"lines\":[$(L "BAMBOO SCROLL" 54 60 26 Georgia-Bold $CREAM 3 1 left),$(L "MYTH CHECK · THE BATTLE OF RED CLIFF" 540 $KICK_Y 30 Georgia-Bold $ACC 7 0),$(L "THE NOVEL SAYS" 540 $LB1_Y 24 Georgia-Bold $DIM 6 0),$(L "Zhuge Liang summoned the east wind from an altar." 540 $MYTH_Y 34 Georgia-Italic $DIM 0 0),$(L "THE RECORDS SAY" 540 $LB2_Y 24 Georgia-Bold $DIM 6 0),$(L "The sources give the wind to weather," 540 $TR_Y 36 Georgia-Bold $INK 0 0),$(L "not magic — \"the wind was fierce.\"" 540 $((TR_Y+46)) 36 Georgia-Bold $INK 0 0),$(L "No altar required." 540 $((TR_Y+92)) 36 Georgia-Bold $INK 0 0),$(L "Sanguozhi, Wu shu 10 — Pei Songzhi" 540 $SRC_Y 22 Georgia-Italic $DIM 0 0),$(L "BAMBOO SCROLL · dreamofxm.github.io/bambooscroll" 540 $URL_Y 30 Georgia-Bold $INK 0 0)]}" "$TMP/text-eastwind.png"

render "{\"w\":${CW},\"h\":${CH},\"lines\":[$(L "BAMBOO SCROLL" 54 60 26 Georgia-Bold $CREAM 3 1 left),$(L "MYTH CHECK · THE BATTLE OF RED CLIFF" 540 $KICK_Y 30 Georgia-Bold $ACC 7 0),$(L "THE NOVEL SAYS" 540 $LB1_Y 24 Georgia-Bold $DIM 6 0),$(L "Zhuge Liang borrowed arrows with straw boats." 540 $MYTH_Y 34 Georgia-Italic $DIM 0 0),$(L "THE RECORDS SAY" 540 $LB2_Y 24 Georgia-Bold $DIM 6 0),$(L "No such event at Red Cliff in any source." 540 $TR_Y 36 Georgia-Bold $INK 0 0),$(L "A similar trick belongs to Sun Quan —" 540 $((TR_Y+46)) 36 Georgia-Bold $INK 0 0),$(L "five years later, on a different river." 540 $((TR_Y+92)) 36 Georgia-Bold $INK 0 0),$(L "Weilüe, quoted in Pei Songzhi's commentary" 540 $SRC_Y 22 Georgia-Italic $DIM 0 0),$(L "BAMBOO SCROLL · dreamofxm.github.io/bambooscroll" 540 $URL_Y 30 Georgia-Bold $INK 0 0)]}" "$TMP/text-arrows.png"

render "{\"w\":${CW},\"h\":${CH},\"lines\":[$(L "BAMBOO SCROLL" 54 60 26 Georgia-Bold $CREAM 3 1 left),$(L "MYTH CHECK · THE BATTLE OF RED CLIFF" 540 $KICK_Y 30 Georgia-Bold $ACC 7 0),$(L "THE NOVEL SAYS" 540 $LB1_Y 24 Georgia-Bold $DIM 6 0),$(L "Pang Tong tricked Cao Cao into chaining his fleet." 540 $MYTH_Y 34 Georgia-Italic $DIM 0 0),$(L "THE RECORDS SAY" 540 $LB2_Y 24 Georgia-Bold $DIM 6 0),$(L "The histories never place Pang Tong" 540 $TR_Y 36 Georgia-Bold $INK 0 0),$(L "at Red Cliff. Huang Gai simply noticed" 540 $((TR_Y+46)) 36 Georgia-Bold $INK 0 0),$(L "the enemy ships lay head to tail." 540 $((TR_Y+92)) 36 Georgia-Bold $INK 0 0),$(L "Sanguozhi, Wu shu 10" 540 $SRC_Y 22 Georgia-Italic $DIM 0 0),$(L "BAMBOO SCROLL · dreamofxm.github.io/bambooscroll" 540 $URL_Y 30 Georgia-Bold $INK 0 0)]}" "$TMP/text-chains.png"

render "{\"w\":${CW},\"h\":${CH},\"lines\":[$(L "BAMBOO SCROLL" 54 60 26 Georgia-Bold $CREAM 3 1 left),$(L "MYTH CHECK · THE BATTLE OF RED CLIFF" 540 $KICK_Y 30 Georgia-Bold $ACC 7 0),$(L "THE NOVEL SAYS" 540 $LB1_Y 24 Georgia-Bold $DIM 6 0),$(L "Zhou Yu died of rage at being outsmartened." 540 $MYTH_Y 34 Georgia-Italic $DIM 0 0),$(L "THE RECORDS SAY" 540 $LB2_Y 24 Georgia-Bold $DIM 6 0),$(L "The records show a generous commander" 540 $TR_Y 36 Georgia-Bold $INK 0 0),$(L "who died of illness in 210, aged 36 —" 540 $((TR_Y+46)) 36 Georgia-Bold $INK 0 0),$(L "\"like drinking fine wine,\" a colleague said." 540 $((TR_Y+92)) 36 Georgia-Bold $INK 0 0),$(L "Cheng Pu, in Sanguozhi, Wu shu 9" 540 $SRC_Y 22 Georgia-Italic $DIM 0 0),$(L "BAMBOO SCROLL · dreamofxm.github.io/bambooscroll" 540 $URL_Y 30 Georgia-Bold $INK 0 0)]}" "$TMP/text-zhouyu.png"

render "{\"w\":${CW},\"h\":${CH},\"lines\":[$(L "BAMBOO SCROLL" 54 60 26 Georgia-Bold $CREAM 3 1 left),$(L "FROM THE RECORDS · THE BATTLE OF RED CLIFF" 540 $KICK_Y 30 Georgia-Bold $ACC 7 0),$(L "The plague finished" 540 $((LB1_Y-20)) 62 Didot $INK 0 0),$(L "what the fire began." 540 $((LB1_Y+52)) 62 Didot $INK 0 0),$(L "Cao Cao's own annals admit it in one flat" 540 $((TR_Y+16)) 34 Georgia-Bold $INK 0 0),$(L "line. The novel skips this part entirely." 540 $((TR_Y+62)) 34 Georgia-Bold $INK 0 0),$(L "Cao Cao's annals, quoted by Pei Songzhi" 540 $SRC_Y 22 Georgia-Italic $DIM 0 0),$(L "BAMBOO SCROLL · dreamofxm.github.io/bambooscroll" 540 $URL_Y 30 Georgia-Bold $INK 0 0)]}" "$TMP/text-plague.png"

echo "== compositing"
card eastwind "$EP/16-huanggai.webp"
card arrows   "$EP/11-debate.webp"
card chains   "$EP/04-fleet.webp"
card zhouyu   "$EP/09-alliance.webp"
card plague   "$EP/19-retreat.webp"

echo "OK -> $OUTDIR"
