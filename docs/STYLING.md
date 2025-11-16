# Styling Guide

## Overview

This project uses **Material-UI (MUI) v7** as the primary styling solution with a **hybrid approach** combining:
1. **MUI Theme System** (primary method)
2. **CSS Modules** (for specific layout components)
3. **Global CSS** (for fonts and base styles)

---

## 🎨 Styling Approaches

### 1. MUI Theme System (Recommended)

The primary styling method using MUI's `sx` prop with centralized theme configuration.

**Location**: `/src/theme/`

#### Theme Structure

```
src/theme/
├── index.ts           # Main theme configuration
├── palette.ts         # Color definitions
├── typography.ts      # Font configurations
├── types.ts          # TypeScript type augmentations
└── components/
    ├── index.ts      # Component overrides registry
    ├── MuiButton.ts  # Button customizations
    └── MuiDialog.ts  # Dialog customizations
```

#### Color Palette

**Standard Colors** (`palette.ts`):
- **Primary**: `#546EF7` (blue) - Main brand color
- **Secondary**: `#4A4A4A` (dark gray) - Text colors
- **Error**: `#FF0202` (red)
- **Warning**: `#E58900` (orange)
- **Info**: `#1576C1` (blue)
- **Success**: `#88BF31` (green)
- **Grey Scale**: 50-900 shades

**Custom Status Colors**:
- `accepted`, `accepted_to_check`, `cancelled`, `confirmed`
- `in_production`, `invoiced`, `to_accept`, `unknown`

**Custom Background** (`customBg`):
- `main`: `#FFF3E0`
- `light`: `#FFF8E1`
- `dark`: `#FFE0B2`

#### Typography

**Font Family**: Roboto (with system fallbacks)

**Type Scale**:
- `h1`: 2rem (37px)
- `h2`: 1.5rem (26px)
- `h3`: 1.375rem (22px)
- `h4`: 1rem (16px)
- `h5`: 0.875rem (14px)
- `body1`: 1.1875rem (19px)
- `body2`: 0.875rem (14px)
- `subtitle2`: 0.75rem (12px)

**Responsive Typography**: Enabled via `responsiveFontSizes()`

---

## 📝 Usage Patterns

### Method 1: Inline `sx` Prop

Quick styling directly on components:

```tsx
import { Box, Typography } from '@mui/material';

<Box sx={{ backgroundColor: 'primary.main', padding: 2 }}>
  <Typography sx={{ color: 'text.secondary' }}>
    Content
  </Typography>
</Box>
```

### Method 2: Separated Style Files (Recommended)

Create a `styles.ts` file next to your component:

**Example**: `ExampleCard/styles.ts`
```typescript
import { SxProps, Theme } from '@mui/material/styles';

export const cardStyles: SxProps<Theme> = {
  backgroundColor: 'customBg.main',
  padding: 2,
  borderRadius: 1,
  boxShadow: 2,
  maxWidth: 400,
};

export const titleStyles: SxProps<Theme> = {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'text.primary',
  marginBottom: 2,
};
```

**Component**: `ExampleCard/index.tsx`
```tsx
import { Box, Typography } from '@mui/material';
import { cardStyles, titleStyles } from './styles';

export function ExampleCard() {
  return (
    <Box sx={cardStyles}>
      <Typography sx={titleStyles}>Title</Typography>
    </Box>
  );
}
```

### Method 3: CSS Modules (Layout-Specific)

Used for complex layouts or when CSS variables are needed:

**File**: `MainLayout/index.module.css`
```css
.content {
  display: flex;
}

.sideBar {
  width: 256px;
  min-height: calc(100vh - 64px);
  background-color: var(--mui-palette-background-primary);
  padding: 56px 8px;
}

.navLink {
  justify-content: flex-start;
  padding: 6px 16px;
  height: 48px;
  
  :global &.MuiButton-textPrimary {
    color: var(--mui-palette-secondary-contrastText);
  }
}
```

**Usage in Component**:
```tsx
import styles from './index.module.css';

export const MainLayout = () => {
  return (
    <Box className={styles.content}>
      <Box className={styles.sideBar}>
        {/* Sidebar content */}
      </Box>
    </Box>
  );
};
```

---

## 🛠 Component Customization

### Global Component Overrides

Customize MUI components globally in `/src/theme/components/`:

**Example**: `MuiButton.ts`
```typescript
import { Components, Theme } from '@mui/material/styles';
import palette from '../palette';

const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      height: '40px',
      textTransform: 'none',
      borderRadius: '30px',
      padding: '5px 24px 3px 24px',
      fontWeight: 600,
      border: `2px solid ${palette.primary.main}`,
      
      '&.MuiButton-text': {
        border: 'none',
        '&:hover': {
          backgroundColor: palette.primary.light,
        },
      },
      
      '&.MuiButton-outlined': {
        border: `2px solid ${palette.primary.main}`,
        '&:hover': {
          backgroundColor: palette.primary.light,
          borderColor: palette.primary.dark,
        },
      },
      
      '&:hover': {
        backgroundColor: palette.primary.dark,
        color: palette.primary.contrastText,
      },
    },
  },
};

export default MuiButton;
```

**Register in** `components/index.ts`:
```typescript
import MuiButton from './MuiButton';
import MuiDialog from './MuiDialog';

const components: Components<Theme> = {
  MuiButton,
  MuiDialog,
};

export default components;
```

---

## 🔧 Adding Custom Colors

### Step 1: Extend Type Definitions

**File**: `theme/types.ts`
```typescript
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customBg: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }

  interface PaletteOptions {
    customBg?: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
  }
}
```

### Step 2: Add to Palette

**File**: `theme/palette.ts`
```typescript
const palette = {
  // ... existing colors
  customBg: {
    main: '#FFF3E0',
    light: '#FFF8E1',
    dark: '#FFE0B2',
    contrastText: '#4A4A4A',
  },
};
```

### Step 3: Use in Components

```tsx
<Box sx={{ backgroundColor: 'customBg.main' }}>
  <Button sx={{ backgroundColor: 'customBg.dark' }}>
    Custom Color Button
  </Button>
</Box>
```

---

## 🎯 Theme Provider Setup

**File**: `App.tsx`
```tsx
import { StyledEngineProvider, ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Your app content */}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
```

**Key Points**:
- `StyledEngineProvider injectFirst`: Ensures CSS Modules have priority over MUI styles
- `CssBaseline`: Applies MUI's baseline CSS reset
- `ThemeProvider`: Makes theme available to all components

---

## 📦 Global Styles

**File**: `App.css`

### Custom Fonts
```css
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  src: url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
}
```

### Scrollbar Styling
```css
html::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

html::-webkit-scrollbar-thumb {
  background-color: #bebebe;
}

html::-webkit-scrollbar-thumb:hover {
  background-color: #a1a1a1;
}
```

### Notification Styles (Notistack)
```css
#notistack-snackbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.notistack-MuiContent-warning {
  background-color: #fee9c5 !important;
}

.notistack-MuiContent-error {
  background-color: #ffb3b3 !important;
}
```

---

## 📋 Best Practices

### ✅ Do's

1. **Use Theme Colors**: Always reference theme colors instead of hardcoding
   ```tsx
   ✅ sx={{ color: 'primary.main' }}
   ❌ sx={{ color: '#546EF7' }}
   ```

2. **Separate Styles**: For complex components, create a separate `styles.ts` file
   ```
   ComponentName/
   ├── index.tsx
   └── styles.ts
   ```

3. **Use TypeScript**: Define `SxProps<Theme>` for type safety
   ```typescript
   export const styles: SxProps<Theme> = { ... };
   ```

4. **Responsive Design**: Use theme breakpoints
   ```tsx
   sx={{
     width: { xs: '100%', md: '50%' },
     padding: { xs: 1, sm: 2, md: 3 }
   }}
   ```

5. **CSS Variables in Modules**: Access MUI theme values
   ```css
   .element {
     color: var(--mui-palette-primary-main);
   }
   ```

### ❌ Don'ts

1. Don't use inline styles with `style` prop (use `sx` instead)
2. Don't mix styled-components with MUI's `sx` prop
3. Don't override theme in individual components unnecessarily
4. Don't use `!important` unless absolutely necessary

---

## 🔄 Migrating to Another Project

### Step 1: Copy Theme Files
```bash
cp -r src/theme/ <new-project>/src/
```

### Step 2: Install Dependencies
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material  # if needed
```

### Step 3: Setup Theme Provider
Copy the theme setup from `App.tsx`:
```tsx
<StyledEngineProvider injectFirst>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* App */}
  </ThemeProvider>
</StyledEngineProvider>
```

### Step 4: Copy Global Styles
- Copy `App.css` for fonts and global styles
- Copy font files from `src/assets/fonts/`

### Step 5: Customize
1. Update colors in `theme/palette.ts`
2. Modify typography in `theme/typography.ts`
3. Add/remove component overrides in `theme/components/`
4. Extend types in `theme/types.ts` for custom colors

---

## 📚 Resources

- [MUI Documentation](https://mui.com/material-ui/getting-started/)
- [MUI Theming Guide](https://mui.com/material-ui/customization/theming/)
- [MUI sx Prop](https://mui.com/system/getting-started/the-sx-prop/)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 🎨 Quick Reference

### Common `sx` Properties
```tsx
// Spacing
sx={{ m: 2, p: 3, mt: 1, px: 2 }}  // margin, padding

// Flexbox
sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}

// Typography
sx={{ fontSize: 16, fontWeight: 'bold', color: 'text.primary' }}

// Sizing
sx={{ width: '100%', maxWidth: 400, height: 'auto' }}

// Borders & Shadows
sx={{ borderRadius: 1, boxShadow: 2, border: '1px solid' }}

// Background
sx={{ backgroundColor: 'primary.main', bgcolor: 'grey.100' }}

// Responsive
sx={{ display: { xs: 'none', md: 'block' } }}

// Hover States
sx={{ '&:hover': { backgroundColor: 'primary.light' } }}
```

### Color Shortcuts
- `text.primary` → `#4A4A4A`
- `text.secondary` → `#707070`
- `primary.main` → `#546EF7`
- `grey[100]` → `#E7E7E7`
- `customBg.main` → `#FFF3E0`
