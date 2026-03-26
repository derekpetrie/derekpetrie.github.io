#!/bin/bash
# Deploy daily brief to GitHub Pages via GitHub API (no git push needed)
# Usage: ./deploy.sh YYYY-MM-DD
# Requires: gh cli authenticated, or GITHUB_TOKEN env var

set -e

DATE="$1"
if [ -z "$DATE" ]; then
  DATE=$(date '+%Y-%m-%d')
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="derekpetrie/derekpetrie.github.io"
BRIEF_FILE="$SCRIPT_DIR/${DATE}.html"
INDEX_FILE="$SCRIPT_DIR/index.html"

if [ ! -f "$BRIEF_FILE" ]; then
  echo "Error: $BRIEF_FILE not found. Run build.sh first."
  exit 1
fi

echo "Deploying $DATE brief to $REPO..."

# Function to upload a file via GitHub Contents API
upload_file() {
  local local_path="$1"
  local repo_path="$2"
  local message="$3"

  local content
  content=$(base64 < "$local_path" | tr -d '\n')

  # Check if file exists (get its SHA for update)
  local sha
  sha=$(gh api "repos/$REPO/contents/$repo_path" --jq '.sha' 2>/dev/null || echo "")

  if [ -n "$sha" ]; then
    gh api "repos/$REPO/contents/$repo_path" \
      --method PUT \
      -f message="$message" \
      -f content="$content" \
      -f sha="$sha" \
      --silent
  else
    gh api "repos/$REPO/contents/$repo_path" \
      --method PUT \
      -f message="$message" \
      -f content="$content" \
      --silent
  fi
  echo "  Uploaded: $repo_path"
}

# Upload the brief HTML
upload_file "$BRIEF_FILE" "brief/${DATE}.html" "Daily brief: $DATE"

# Upload updated index.html
upload_file "$INDEX_FILE" "brief/index.html" "Update brief index -> $DATE"

echo "Deploy complete: https://derekpetrie.github.io/brief/${DATE}.html"
