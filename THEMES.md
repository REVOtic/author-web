# Theme System

This project includes two visual themes:

## 🎨 Classic Theme (Default)
- **Style**: Elegant literary aesthetic
- **Colors**: Warm browns, ambers, cream
- **Mood**: Sophisticated, traditional, cozy
- **Best for**: Professional author portfolio

## ⚡ Flashy Theme (Immersive)
- **Style**: Cyberpunk / Neon aesthetic
- **Colors**: Cyan, magenta, gold neon glows
- **Mood**: Modern, dynamic, eye-catching
- **Best for**: Making a bold statement

### Flashy Theme Features:
- 🌌 **Animated gradient background** with aurora effects
- ✨ **Floating particles** with glow
- 💫 **Neon text effects** with flicker animation
- 🔮 **Glass morphism cards** with hover glow
- 🌈 **Animated borders** with color rotation
- ⚡ **Shimmer effects** on interactive elements
- 🎯 **Magnetic hover effects**
- 🌊 **Pulse glow animations**

## Switching Themes

Use the provided script:

```bash
# Switch to flashy theme (current)
./switch-theme.sh flashy

# Switch to classic theme
./switch-theme.sh classic
```

Then restart your dev server:
```bash
npm run dev
```

## File Structure

```
src/app/
├── layout.tsx              # Current theme (symlinked)
├── layout-original.tsx     # Classic theme
├── layout-flashy.tsx       # Flashy theme
├── globals.css             # Classic styles
└── globals-flashy.css      # Flashy styles

src/components/
└── ParticlesBackground.tsx # Flashy theme particles

switch-theme.sh             # Theme switcher script
```

## Customization

### Classic Theme
Edit `globals.css` - warm colors, paper textures, elegant transitions.

### Flashy Theme
Edit `globals-flashy.css` - neon colors, animations, glow effects.

Key CSS variables in flashy theme:
- `--color-accent`: Cyan (#00d4ff)
- `--color-accent-secondary`: Magenta (#ff00a0)
- `--color-accent-tertiary`: Gold (#ffd700)
