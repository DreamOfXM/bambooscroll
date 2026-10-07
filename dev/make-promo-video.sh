#!/bin/bash
# Bamboo Scroll — Red Cliff promo v3 (TikTok / Shorts / Reels)
# 1080x1920 @30fps, ~23.3s, beat-locked cuts (72bpm grid), kinetic captions.
#
# v3 upgrade over v2 (user feedback: "slideshow feel"):
#   - camera language per beat: punch-in + handheld shake (hook), horizontal
#     art-scan (fleet), punch-out (fire ships), reverse scan (retreat)
#   - cuts land ON the drum grid; each cut gets a white-flash frame + boom
#   - captions rise-in staggered per line instead of static fade
#   - audible-per-phone soundtrack: 180Hz drum body + 55Hz sub + offbeat tick
#     + cut booms, compressed and loudnorm'd to -16 LUFS
#   - filmic finish pass: contrast/warmth, vignette, fine grain
#
# Usage:  ./dev/make-promo-video.sh [output.mp4]
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
EP="$ROOT/panels/ep01"
OUT="${1:-$ROOT/../chuangye/bambooscroll_redcliff_tiktok_v3.mp4}"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

TW=1080; TH=1920; FPS=30
BPM=72; BEAT=$(awk "BEGIN{print 60/${BPM}}")            # 0.8333s
T_HOOK=3.3333; T_MID=3.3333; T_END=6.6667               # 4/4/8 beats
CREAM=F4F0E6; DIM=E8DFC8
ENC="-c:v libx264 -crf 18 -preset medium -pix_fmt yuv420p -r ${FPS}"
TOTAL=23.3334

# cut points (booms land here)
C1=3.3333; C2=6.6667; C3=10.0000; C4=13.3333; C5=16.6667

echo "== compiling caption renderer"
swiftc -O "$ROOT/dev/captions.swift" -o "$TMP/captions" 2>/dev/null

# ---- caption layers: one PNG per line --------------------------------------

# linepng <out> <text> <font> <size> <color> <kern> <shadow> [maxw]
linepng() { # out text font size color kern shadow plate [maxw] — centered at x=540
  local o="$1" t="$2" f="$3" s="$4" c="$5" k="$6" sh="$7" pl="$8" mw="${9:-940}"
  printf '{"lines":[{"text":"%s","x":540,"y":0,"size":%s,"font":"%s","color":"%s","kern":%s,"shadow":%s,"plate":%s,"maxw":%s}]}' \
    "$t" "$s" "$f" "$c" "$k" "$sh" "$pl" "$mw" > "$TMP/spec.json"
  "$TMP/captions" "$TMP/spec.json" "$o"; }

echo "== caption layers"
printf '{"lines":[{"text":"BAMBOO SCROLL","x":54,"y":0,"size":26,"font":"Georgia-Bold","color":"%s","alpha":0.85,"align":"left","kern":3,"shadow":1}]}' $CREAM > "$TMP/spec.json"; "$TMP/captions" "$TMP/spec.json" "$TMP/wm.png"
# hook
linepng "$TMP/h1.png"  "RED CLIFF DIDN'T HAPPEN" Georgia-Bold 68 $CREAM 1 3 14 980
linepng "$TMP/h2.png"  "THE WAY YOU THINK."      Georgia-Bold 68 $CREAM 1 3 14 980
linepng "$TMP/hs.png"  "The famous version is a 14th-century novel." Georgia-Italic 40 $CREAM 0 3 12 900
# b1 (scan, text upper zone)
linepng "$TMP/a1k.png" "THE NOVEL SAYS"  Georgia-Bold 34 $CREAM 8 2 10
linepng "$TMP/a1a.png" "Magic winds. Ten thousand borrowed arrows —" Georgia-Bold 54 $CREAM 0 3 14 980
linepng "$TMP/a1b.png" "none of it is history." Georgia-Bold 54 $CREAM 0 3 14 980
# b2 (punch, upper zone)
linepng "$TMP/a2k.png" "THE RECORDS SAY" Georgia-Bold 34 $CREAM 8 2 10
linepng "$TMP/a2a.png" "Huang Gai's fire ships, a seasonal wind," Georgia-Bold 54 $CREAM 0 3 14 980
linepng "$TMP/a2b.png" "and Cao Cao's chained hulls." Georgia-Bold 54 $CREAM 0 3 14 980
# b3 (letterbox, captions in lower clean zone)
linepng "$TMP/a3k.png" "THE RECORDS DISAGREE" Georgia-Bold 34 $DIM 8 2 0
linepng "$TMP/a3a.png" "Even the army sizes are disputed." Georgia-Bold 56 $CREAM 0 2 0 980
linepng "$TMP/a3b.png" "The comic marks every debate." Georgia-Bold 56 $CREAM 0 2 0 980
# b4 (reverse scan, upper zone)
linepng "$TMP/a4k.png" "THE BEST PART" Georgia-Bold 34 $CREAM 8 2 10
linepng "$TMP/a4a.png" "Cao Cao later claimed he" Georgia-Bold 54 $CREAM 0 3 14 980
linepng "$TMP/a4b.png" "burned his own fleet." Georgia-Bold 54 $CREAM 0 3 14 980
# end card
linepng "$TMP/e0.png"  "BAMBOO SCROLL" Didot 132 $CREAM 4 3 0 900
linepng "$TMP/e1.png"  "The Three Kingdoms, told only from the records" Georgia-Italic 42 $DIM 0 2 0 900
linepng "$TMP/e2.png"  "FREE  ·  NO ACCOUNT  ·  25 EPISODES" Georgia-Bold 40 $DIM 6 2 0 900
linepng "$TMP/e3.png"  "dreamofxm.github.io/bambooscroll" Georgia-Bold 62 $CREAM 0 2 0 900

# ---- composite stills -------------------------------------------------------

echo "== composites"
composite_() { # blurred-fill letterbox still
  local panel="$1" out="$2" mode="$3" size="$4"
  local fit="scale=${size}:-2"; [ "$mode" = "h" ] && fit="scale=-2:${size}"
  ffmpeg -y -v error -i "$panel" -filter_complex \
    "[0:v]scale=${TW}:${TH}:force_original_aspect_ratio=increase,crop=${TW}:${TH},gblur=sigma=42,eq=brightness=-0.14:saturation=0.78[bg];[0:v]${fit}[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2-160" \
    -frames:v 1 "$out"
}
composite_ "$EP/11-debate.webp" "$TMP/bg3.png" w 1300
composite_ "$EP/00-cover.webp"  "$TMP/bg5.png" w 1240

# ---- beats ------------------------------------------------------------------

FLASH="fade=t=in:st=0:d=0.09:color=white"
n0=100; n1=100; n5=200

# beat 0: HOOK — punch-in + handheld shake, captions land like drum hits
ffmpeg -y -v error -i "$EP/18-fire.webp" \
  -loop 1 -t $T_HOOK -i "$TMP/h1.png" -loop 1 -t $T_HOOK -i "$TMP/h2.png" \
  -loop 1 -t $T_HOOK -i "$TMP/hs.png" -loop 1 -t $T_HOOK -i "$TMP/wm.png" \
  -an -filter_complex "
  [0:v]scale=-2:2880,crop=1620:2880:in_w/2-810:0,zoompan=z='1+0.17*pow(min(on/55,1),0.5)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=100:s=1080x1920:fps=30,
  crop=1040:1848:x='20+9*sin(2*PI*4.6*t+1.2)':y='36+7*sin(2*PI*3.7*t+0.4)',scale=1080:1920,format=yuv420p[v0];
  [1:v]format=rgba,fade=t=in:st=0.15:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c1];
  [2:v]format=rgba,fade=t=in:st=0.55:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c2];
  [3:v]format=rgba,fade=t=in:st=1.05:d=0.25:alpha=1,fade=t=out:st=2.88:d=0.35:alpha=1[c3];
  [4:v]format=rgba[wm];
  [v0][c1]overlay=x=(W-w)/2:y='384-26+26*min((t-0.15)/0.2,1)':enable='gte(t,0.15)'[v1];
  [v1][c2]overlay=x=(W-w)/2:y='474-26+26*min((t-0.55)/0.2,1)':enable='gte(t,0.55)'[v2];
  [v2][c3]overlay=x=(W-w)/2:y='580-26+26*min((t-1.05)/0.25,1)':enable='gte(t,1.05)'[v3];
  [v3][wm]overlay=x=54:y=112[v]" \
  -map "[v]" $ENC -t $T_HOOK "$TMP/b0.mp4"

# beat 1: FLEET — horizontal art scan, left→right (reveals the armada)
ffmpeg -y -v error -loop 1 -t $T_MID -i "$EP/14-fleet-sails.webp" \
  -loop 1 -t $T_MID -i "$TMP/a1k.png" -loop 1 -t $T_MID -i "$TMP/a1a.png" \
  -loop 1 -t $T_MID -i "$TMP/a1b.png" -loop 1 -t $T_MID -i "$TMP/wm.png" \
  -an -filter_complex "
  [0:v]scale=2752:1536,
  crop=864:1536:x='(in_w-out_w)*(1-pow(1-min(t/${T_MID},1),2))':y=0,
  scale=1080:1920:flags=lanczos,unsharp=5:5:0.55,format=yuv420p,${FLASH}[v0];
  [1:v]format=rgba,fade=t=in:st=0.12:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c1];
  [2:v]format=rgba,fade=t=in:st=0.30:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c2];
  [3:v]format=rgba,fade=t=in:st=0.48:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c3];
  [4:v]format=rgba[wm];
  [v0][c1]overlay=x=(W-w)/2:y='286-26+26*min((t-0.12)/0.2,1)':enable='gte(t,0.12)'[v1];
  [v1][c2]overlay=x=(W-w)/2:y='344-26+26*min((t-0.30)/0.2,1)':enable='gte(t,0.30)'[v2];
  [v2][c3]overlay=x=(W-w)/2:y='412-26+26*min((t-0.48)/0.2,1)':enable='gte(t,0.48)'[v3];
  [v3][wm]overlay=x=54:y=112[v]" \
  -map "[v]" $ENC -t $T_MID "$TMP/b1.mp4"

# beat 2: FIRE SHIPS — full-bleed punch-out + light shake
ffmpeg -y -v error -loop 1 -t $T_MID -i "$EP/17-fireships.webp" \
  -loop 1 -t $T_MID -i "$TMP/a2k.png" -loop 1 -t $T_MID -i "$TMP/a2a.png" \
  -loop 1 -t $T_MID -i "$TMP/a2b.png" -loop 1 -t $T_MID -i "$TMP/wm.png" \
  -an -filter_complex "
  [0:v]scale=-2:2880,crop=1620:2880:in_w/2-810:0,zoompan=z='1.14-0.14*pow(min(on/70,1),0.6)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=100:s=1080x1920:fps=30,
  crop=1052:1860:x='14+6*sin(2*PI*4.2*t)':y='30+5*sin(2*PI*3.4*t+1.1)',scale=1080:1920,format=yuv420p,${FLASH}[v0];
  [1:v]format=rgba,fade=t=in:st=0.12:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c1];
  [2:v]format=rgba,fade=t=in:st=0.30:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c2];
  [3:v]format=rgba,fade=t=in:st=0.48:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c3];
  [4:v]format=rgba[wm];
  [v0][c1]overlay=x=(W-w)/2:y='286-26+26*min((t-0.12)/0.2,1)':enable='gte(t,0.12)'[v1];
  [v1][c2]overlay=x=(W-w)/2:y='344-26+26*min((t-0.30)/0.2,1)':enable='gte(t,0.30)'[v2];
  [v2][c3]overlay=x=(W-w)/2:y='412-26+26*min((t-0.48)/0.2,1)':enable='gte(t,0.48)'[v3];
  [v3][wm]overlay=x=54:y=112[v]" \
  -map "[v]" $ENC -t $T_MID "$TMP/b2.mp4"

# beat 3: DEBATE — letterbox breather, slow ken burns (pacing valley)
ffmpeg -y -v error -i "$TMP/bg3.png" \
  -loop 1 -t $T_MID -i "$TMP/a3k.png" -loop 1 -t $T_MID -i "$TMP/a3a.png" \
  -loop 1 -t $T_MID -i "$TMP/a3b.png" -loop 1 -t $T_MID -i "$TMP/wm.png" \
  -an -filter_complex "
  [0:v]scale=1620:2880,zoompan=z='1+0.07*on/100':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=100:s=1080x1920:fps=30,format=yuv420p,${FLASH}[v0];
  [1:v]format=rgba,fade=t=in:st=0.12:d=0.22:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c1];
  [2:v]format=rgba,fade=t=in:st=0.30:d=0.22:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c2];
  [3:v]format=rgba,fade=t=in:st=0.48:d=0.22:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c3];
  [4:v]format=rgba[wm];
  [v0][c1]overlay=x=(W-w)/2:y='1348-26+26*min((t-0.12)/0.22,1)':enable='gte(t,0.12)'[v1];
  [v1][c2]overlay=x=(W-w)/2:y='1406-26+26*min((t-0.30)/0.22,1)':enable='gte(t,0.30)'[v2];
  [v2][c3]overlay=x=(W-w)/2:y='1478-26+26*min((t-0.48)/0.22,1)':enable='gte(t,0.48)'[v3];
  [v3][wm]overlay=x=54:y=112[v]" \
  -map "[v]" $ENC -t $T_MID "$TMP/b3.mp4"

# beat 4: RETREAT — reverse scan right→left (camera moves with the retreat)
ffmpeg -y -v error -loop 1 -t $T_MID -i "$EP/19-retreat.webp" \
  -loop 1 -t $T_MID -i "$TMP/a4k.png" -loop 1 -t $T_MID -i "$TMP/a4a.png" \
  -loop 1 -t $T_MID -i "$TMP/a4b.png" -loop 1 -t $T_MID -i "$TMP/wm.png" \
  -an -filter_complex "
  [0:v]scale=2752:1572,
  crop=884:1572:x='(in_w-out_w)*pow(min(t/${T_MID},1),2)':y=0,
  scale=1080:1920:flags=lanczos,unsharp=5:5:0.55,format=yuv420p,${FLASH}[v0];
  [1:v]format=rgba,fade=t=in:st=0.12:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c1];
  [2:v]format=rgba,fade=t=in:st=0.30:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c2];
  [3:v]format=rgba,fade=t=in:st=0.48:d=0.2:alpha=1,fade=t=out:st=2.93:d=0.35:alpha=1[c3];
  [4:v]format=rgba[wm];
  [v0][c1]overlay=x=(W-w)/2:y='286-26+26*min((t-0.12)/0.2,1)':enable='gte(t,0.12)'[v1];
  [v1][c2]overlay=x=(W-w)/2:y='344-26+26*min((t-0.30)/0.2,1)':enable='gte(t,0.30)'[v2];
  [v2][c3]overlay=x=(W-w)/2:y='412-26+26*min((t-0.48)/0.2,1)':enable='gte(t,0.48)'[v3];
  [v3][wm]overlay=x=54:y=112[v]" \
  -map "[v]" $ENC -t $T_MID "$TMP/b4.mp4"

# beat 5: END CARD — slow push, staggered reveal, no flash
ffmpeg -y -v error -i "$TMP/bg5.png" \
  -loop 1 -t $T_END -i "$TMP/e0.png" -loop 1 -t $T_END -i "$TMP/e1.png" \
  -loop 1 -t $T_END -i "$TMP/e2.png" -loop 1 -t $T_END -i "$TMP/e3.png" \
  -loop 1 -t $T_END -i "$TMP/wm.png" \
  -an -filter_complex "
  [0:v]scale=1620:2880,zoompan=z='1+0.05*on/200':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=200:s=1080x1920:fps=30,format=yuv420p[v0];
  [1:v]format=rgba,fade=t=in:st=0.2:d=0.3:alpha=1[c1];
  [2:v]format=rgba,fade=t=in:st=0.55:d=0.3:alpha=1[c2];
  [3:v]format=rgba,fade=t=in:st=1.0:d=0.3:alpha=1[c3];
  [4:v]format=rgba,fade=t=in:st=1.35:d=0.3:alpha=1[c4];
  [5:v]format=rgba[wm];
  [v0][c1]overlay=x=(W-w)/2:y='412-30+30*min((t-0.2)/0.3,1)':enable='gte(t,0.2)'[v1];
  [v1][c2]overlay=x=(W-w)/2:y='604-26+26*min((t-0.55)/0.3,1)':enable='gte(t,0.55)'[v2];
  [v2][c3]overlay=x=(W-w)/2:y='1210-26+26*min((t-1.0)/0.3,1)':enable='gte(t,1.0)'[v3];
  [v3][c4]overlay=x=(W-w)/2:y='1294-26+26*min((t-1.35)/0.3,1)':enable='gte(t,1.35)'[v4];
  [v4][wm]overlay=x=54:y=112[v]" \
  -map "[v]" $ENC -t $T_END "$TMP/b5.mp4"

# ---- assemble + soundtrack + finish ----------------------------------------

echo "== assembling + finish"
for f in "$TMP"/b{0..5}.mp4; do echo "file '$f'"; done > "$TMP/list.txt"
ffmpeg -y -v error -f concat -safe 0 -i "$TMP/list.txt" -c copy "$TMP/cut.mp4"

BOOMS=""
for tc in $C1 $C2 $C3 $C4 $C5; do
  BOOMS="${BOOMS}+0.85*sin(2*PI*72*max(t-${tc}\,0))*exp(-2.6*max(t-${tc}\,0))*gte(t\,${tc})"
done
ffmpeg -y -v error -i "$TMP/cut.mp4" \
  -f lavfi -i "aevalsrc=0.42*sin(2*PI*180*mod(t\,0.83333))*exp(-9*mod(t\,0.83333))+0.26*sin(2*PI*55*mod(t\,0.83333))*exp(-7*mod(t\,0.83333))+0.10*sin(2*PI*2200*mod(t+0.41667\,0.83333))*exp(-35*mod(t+0.41667\,0.83333))${BOOMS}:s=44100:d=${TOTAL}" \
  -filter_complex "
  [0:v]eq=contrast=1.05:saturation=1.07,colorbalance=rs=0.02:gs=0.01,vignette=PI/4.6,noise=alls=5:allf=t+u,format=yuv420p[v];
  [1:a]acompressor=threshold=-19dB:ratio=3:attack=6:release=130,loudnorm=I=-16:TP=-1.5,aformat=sample_rates=44100:channel_layouts=stereo[aud]" \
  -map "[v]" -map "[aud]" -c:v libx264 -crf 18 -preset medium -r ${FPS} \
  -c:a aac -b:a 160k -movflags +faststart -t ${TOTAL} "$OUT"

echo "OK -> $OUT"
ffprobe -v error -show_entries format=duration,size -of default=noprint_wrappers=1 "$OUT"
