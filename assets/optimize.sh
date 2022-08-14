#!/usr/bin/env bash
ffmpeg -i input.mp4 -vf "fps=20,scale=720:-1:flags=lanczos" -c:v pam -f image2pipe - | convert -delay 10 - -loop 0 -layers optimize output.gif
