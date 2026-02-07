# Style Update: OpsForward Design System

## ✅ Updated to Match OpsForward Style

Your Decision Tree app now matches the OpsForward design system with the primary color **#8f1f57**.

---

## 🎨 Design Changes

### Color Palette (Matching OpsForward)

#### Primary Color: #8f1f57
```css
--primary-50:  #fdf2f7  (lightest)
--primary-100: #fce7f0
--primary-200: #fad1e3
--primary-300: #f5a8ca
--primary-400: #ee74a7
--primary-500: #e34584
--primary-600: #c92d6a
--primary-700: #8f1f57  ← Main brand color
--primary-800: #751a48
--primary-900: #5f173c
--primary-950: #3a0d23  (darkest)
```

#### Gray Scale (Professional & Clean)
```css
--gray-50:  #f9fafb  (backgrounds)
--gray-100: #f3f4f6
--gray-200: #e5e7eb  (borders)
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-500: #6b7280
--gray-600: #4b5563  (secondary text)
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827  (primary text)
--gray-950: #030712
```

---

## 🔄 What Changed

### Before (Purple Gradient):
- Gradient background: `#667eea` to `#764ba2`
- Rounded, playful design
- Bright, colorful approach

### After (OpsForward Style):
- **Primary color**: `#8f1f57` (burgundy/wine)
- Clean, professional Surface components
- Subtle shadows and borders
- More refined, enterprise-ready look

---

## 📐 Design System Elements

### 1. Typography
```css
Font: Inter (professional sans-serif)
Weights: 400 (regular), 500 (medium), 600 (semibold)
Rendering: Optimized with antialiasing
```

### 2. Surface Components (Cards)
```css
Background: White
Border: 1px solid gray-200
Border Radius: 16px (rounded-lg)
Shadow: Subtle (0 1px 3px rgba)
```

### 3. Button Styles

**Primary Button** (Main actions):
```css
Background: #8f1f57 (primary-700)
Hover: #751a48 (primary-800)
Text: White
Shadow: Subtle elevation on hover
Focus: 2px outline in primary color
```

**Secondary Button** (Alternative actions):
```css
Background: gray-100
Border: 1px solid gray-300
Text: gray-900
Hover: gray-200 background
```

### 4. Interactive Elements

**Option Buttons**:
```css
Background: White
Border: 2px solid gray-200
Hover Border: primary-700
Hover Transform: translateX(4px)
Shadow: Minimal, increases on hover
```

### 5. Spacing & Layout
```css
Container Max Width: 800px
Padding: 40px (desktop), 24px (mobile)
Gap between elements: 12-32px
Border Radius: 8-16px
```

### 6. Accents

**Dotted Pattern** (Header background):
```css
Radial gradient dots
24px × 24px spacing
Subtle white overlay (10% opacity)
```

**Progress Bar**:
```css
Height: 6px (slim)
Background: gray-200
Fill: primary-700
Smooth transition (cubic-bezier)
```

---

## 🎯 Key Style Features

### Clean & Professional
- ✅ Subtle borders instead of heavy shadows
- ✅ Consistent spacing system
- ✅ Professional color palette
- ✅ Refined typography

### OpsForward Matching
- ✅ Primary color: #8f1f57
- ✅ Gray scale system
- ✅ Surface component style
- ✅ Button variants (primary/secondary)
- ✅ Focus states with outline
- ✅ Smooth transitions (cubic-bezier)

### Accessibility
- ✅ Proper contrast ratios
- ✅ Focus indicators
- ✅ Reduced motion support
- ✅ Screen reader friendly
- ✅ Keyboard navigation

### Responsive
- ✅ Mobile-optimized
- ✅ Fluid typography
- ✅ Adaptive spacing
- ✅ Touch-friendly buttons

---

## 📊 Visual Comparison

### Header
**Before**: Purple gradient, playful
**After**: Burgundy (#8f1f57) with subtle dot pattern, professional

### Cards
**Before**: Colorful backgrounds, rounded corners
**After**: White surfaces, subtle borders, refined shadows

### Buttons
**Before**: Gradient backgrounds, bright colors
**After**: Solid primary color, clean hover states

### Overall Feel
**Before**: Friendly, colorful, playful
**After**: Professional, clean, enterprise-ready

---

## 🔧 Customization Guide

### Change Primary Color
Edit the CSS variables in `style.css`:
```css
:root {
  --primary-700: #8f1f57;  /* Change this */
  /* Update other shades accordingly */
}
```

### Adjust Surface Style
```css
.container {
  border: 1px solid var(--gray-200);  /* Border style */
  box-shadow: /* Adjust shadow depth */
  border-radius: 16px;  /* Adjust roundness */
}
```

### Modify Button Style
```css
.btn-primary {
  background: var(--primary-700);
  padding: 12px 24px;  /* Adjust size */
  border-radius: 8px;  /* Adjust roundness */
}
```

---

## 🎨 Color Usage Guide

### When to Use Each Color

**Primary (#8f1f57)**:
- Primary action buttons
- Active/selected states
- Important highlights
- Links and accents
- Progress indicators

**Gray-50/100** (Light backgrounds):
- Page background
- Secondary surfaces
- Subtle highlights

**Gray-200/300** (Borders):
- Card borders
- Dividers
- Input borders

**Gray-600/700** (Secondary text):
- Descriptions
- Captions
- Labels

**Gray-900** (Primary text):
- Headings
- Body text
- Important content

---

## 📱 Responsive Behavior

### Desktop (> 768px)
- 800px max width container
- 40px padding
- Larger typography
- Side-by-side buttons

### Mobile (≤ 768px)
- Full width with margins
- 24px padding
- Smaller typography
- Stacked buttons

---

## ♿ Accessibility Features

### Focus States
```css
outline: 2px solid var(--primary-700)
outline-offset: 2px
```

### Color Contrast
- Primary text on white: AAA compliant
- Button text: WCAG AA compliant
- All interactive elements meet standards

### Motion
- Respects `prefers-reduced-motion`
- Smooth, not jarring transitions
- Intentional animations

---

## 🚀 Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers
✅ Supports CSS custom properties
✅ Modern flexbox/grid

---

## 📝 Design Principles

Following OpsForward's design philosophy:

1. **Clarity**: Clean, easy to understand
2. **Consistency**: Predictable patterns
3. **Professionalism**: Enterprise-ready
4. **Accessibility**: Inclusive design
5. **Performance**: Lightweight, fast
6. **Refinement**: Attention to detail

---

## 🎉 Result

Your Decision Tree app now has:

✅ Professional OpsForward styling
✅ Primary color: #8f1f57
✅ Clean surface components
✅ Refined typography (Inter font)
✅ Subtle, professional shadows
✅ Consistent spacing system
✅ Accessible focus states
✅ Responsive design
✅ Print-friendly styles

**The app looks enterprise-ready and matches your existing design system!**

---

## 📂 Files Updated

- ✅ `style.css` - Complete redesign with OpsForward system
- ℹ️ `index.html` - No changes needed
- ℹ️ `script.js` - No changes needed

**Just refresh the page to see the new design!**
