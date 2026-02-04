#!/bin/bash

# Theme Switcher Script
# Usage: ./switch-theme.sh [classic|flashy]

THEME=${1:-flashy}

cd "$(dirname "$0")/src/app"

if [ "$THEME" = "classic" ]; then
    echo "Switching to CLASSIC theme..."
    cp layout-original.tsx layout.tsx
    echo "✅ Classic theme activated!"
    echo "Restart your dev server to see changes."

elif [ "$THEME" = "flashy" ]; then
    echo "Switching to FLASHY theme..."
    cp layout-flashy.tsx layout.tsx
    echo "✅ Flashy theme activated!"
    echo "Restart your dev server to see changes."

else
    echo "Usage: ./switch-theme.sh [classic|flashy]"
    echo ""
    echo "Themes:"
    echo "  classic - Elegant literary theme with warm colors"
    echo "  flashy  - Immersive neon theme with animations"
    exit 1
fi
