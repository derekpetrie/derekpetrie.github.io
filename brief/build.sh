#!/bin/bash
# Assembles daily brief from template + section fragments
# Usage: ./build.sh YYYY-MM-DD

set -e

DATE="$1"
if [ -z "$DATE" ]; then
  DATE=$(date '+%Y-%m-%d')
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SECTIONS_DIR="$SCRIPT_DIR/sections"
TEMPLATE_DIR="$SCRIPT_DIR/template"
OUTPUT="$SCRIPT_DIR/${DATE}.html"

if [ ! -d "$SECTIONS_DIR" ]; then
  echo "Error: No sections directory found at $SECTIONS_DIR"
  exit 1
fi

# Build: header + all section files in order + footer
{
  # Header with date substituted
  sed "s/{{DATE}}/$DATE/g" "$TEMPLATE_DIR/header.html"

  # Concatenate all section files in sorted order
  for f in "$SECTIONS_DIR"/*.html; do
    [ -f "$f" ] && cat "$f"
  done

  # Footer
  cat "$TEMPLATE_DIR/footer.html"

} > "$OUTPUT"

echo "Built: $OUTPUT"

# Update index.html redirect
cat > "$SCRIPT_DIR/index.html" << EOF
<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<meta http-equiv="refresh" content="0;url=${DATE}.html">
<script>window.location.replace("${DATE}.html");</script>
</head><body style="background:#0a0a0a"></body></html>
EOF

echo "Updated index.html -> ${DATE}.html"
