# Code Quality & Style Guide

## Overview

This project enforces code quality through automated tooling and consistent style guidelines. The stack includes:

- **TypeScript** - Type safety and better developer experience
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Husky + lint-staged** - Pre-commit hooks
- **Vite** - Build tool with type checking

---

## 🛠 Tooling Setup

### ESLint Configuration

**Version**: ESLint 9+ (Flat Config)  
**File**: `eslint.config.js`

#### Plugins & Presets

```javascript
// Base configurations
- @eslint/js (recommended)
- typescript-eslint (recommended)
- eslint-config-prettier

// Plugins
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-import
- eslint-plugin-prettier
```

#### Key Features

1. **TypeScript Integration**: Full TypeScript support with type-aware linting
2. **React Support**: React 19 with automatic JSX runtime
3. **Import Organization**: Automatic import sorting and grouping
4. **Prettier Integration**: Formatting rules enforced via ESLint

---

## 📝 Code Style Rules

### TypeScript Rules

```javascript
// Strict type checking enabled
{
  "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off"
}
```

**Guidelines**:
- ✅ Use explicit types for function parameters
- ✅ Infer return types (unless complex)
- ✅ Prefix unused variables with underscore: `_unusedParam`
- ⚠️ Avoid `any` type (warning only)
- ❌ No unused variables

**Examples**:
```typescript
// ✅ Good
const calculateTotal = (items: Item[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// ✅ Good - Inferred return type
const getUserName = (user: User) => {
  return user.firstName + ' ' + user.lastName;
};

// ✅ Good - Unused parameter
const handleClick = (_event: MouseEvent, data: FormData) => {
  processData(data);
};

// ❌ Bad
const calculate = (items) => { // Missing types
  return items.reduce((sum, item) => sum + item.price, 0);
};
```

---

### React Rules

```javascript
{
  "react/react-in-jsx-scope": "off",           // Not needed in React 19
  "react/prop-types": "off",                    // Use TypeScript instead
  "react-hooks/rules-of-hooks": "error",        // Enforce hooks rules
  "react-hooks/exhaustive-deps": "error"        // Enforce dependency arrays
}
```

**Component Patterns**:

```tsx
// ✅ Functional components with arrow functions
export const UserCard = ({ name, email }: UserCardProps) => {
  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>{email}</Typography>
    </Box>
  );
};

// ✅ Named exports (preferred)
export const LoginPage = () => { ... };

// ✅ Hooks at top level only
export const DataFetcher = () => {
  const [data, setData] = useState<Data[]>([]);
  const { t } = useTranslation();
  
  useEffect(() => {
    fetchData().then(setData);
  }, []); // Must include all dependencies
  
  return <div>{/* ... */}</div>;
};

// ❌ Bad - Missing dependencies
useEffect(() => {
  fetchData(userId).then(setData); // userId not in deps
}, []);

// ❌ Bad - Conditional hook
if (condition) {
  const [state] = useState(); // Hooks must be at top level
}
```

---

### Import Organization

**Automatic sorting** with the following groups:

```typescript
// 1. React (always first)
import React from 'react';
import { useState, useEffect } from 'react';

// 2. External packages (alphabetically)
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';

// 3. Internal aliases (@/) + parent imports
import { ExampleCard } from '@/components';
import { ROUTE_HOME } from '@/config';
import theme from '@/theme';

// 4. Sibling imports (same directory)
import { calculateTotal } from './utils';
import { UserCard } from './UserCard';

// 5. Index imports
import styles from './index.module.css';
```

**Rules**:
- Blank line between each group
- Alphabetical order within groups (case-insensitive)
- `@/` alias treated as internal imports

**Configuration**:
```javascript
'import/order': [
  'error',
  {
    groups: ['builtin', 'external', ['internal', 'parent'], 'sibling', 'index'],
    'newlines-between': 'always',
    alphabetize: { order: 'asc', caseInsensitive: true }
  }
]
```

---

### General JavaScript/TypeScript Rules

```javascript
{
  "no-console": "warn",                    // Warn on console.log
  "no-debugger": "error",                  // No debugger statements
  "prefer-const": "error",                 // Use const when possible
  "no-var": "error",                       // No var, use let/const
  "object-shorthand": "error",             // Use shorthand syntax
  "prefer-arrow-callback": "error",        // Arrow functions preferred
  "prefer-template": "error",              // Template literals over concatenation
  "comma-dangle": ["error", "always-multiline"],
  "semi": ["error", "always"],             // Always use semicolons
  "quotes": ["error", "single"],           // Single quotes for JS/TS
  "jsx-quotes": ["error", "prefer-double"] // Double quotes for JSX
}
```

**Examples**:
```typescript
// ✅ Good
const user = {
  name,           // Object shorthand
  age,
  getInfo: () => `${name} is ${age}`,
};

const message = `Hello, ${user.name}!`;  // Template literal

const items = [
  'apple',
  'banana',
  'orange',       // Trailing comma
];

// ❌ Bad
const user = {
  name: name,     // No shorthand
  age: age,
};

const message = 'Hello, ' + user.name + '!';  // Concatenation

var count = 0;  // Using var

const items = [
  'apple',
  'banana',
  'orange'        // Missing trailing comma
]
```

---

## 🎨 Prettier Configuration

**File**: `.prettierrc`

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always",
  "bracketSameLine": false,
  "printWidth": 100
}
```

**Key Settings**:
- **2 spaces** for indentation
- **Single quotes** for strings (except JSX)
- **Semicolons** required
- **Trailing commas** on multiline
- **100 characters** max line width
- **Arrow parentheses** always included

**Formatting Examples**:
```typescript
// ✅ Formatted by Prettier
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
};

const getLongUserDescription = (user: User): string => {
  return `User ${user.firstName} ${user.lastName} with email ${user.email}`;
};

// Multi-line arrays
const colors = [
  'red',
  'green',
  'blue',
];

// JSX uses double quotes
<Button variant="contained" color="primary">
  Click Me
</Button>
```

---

## 🔍 TypeScript Configuration

**File**: `tsconfig.json`

### Key Settings

```json
{
  "compilerOptions": {
    // Path aliases
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    
    // Strict mode
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    
    // Module resolution
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    
    // React
    "jsx": "react-jsx",
    
    // Build
    "target": "ES2023",
    "noEmit": true,
    "isolatedModules": true
  }
}
```

### Path Aliases

Use `@/` for absolute imports from `src/`:

```typescript
// ✅ Good - Absolute import
import { UserCard } from '@/components';
import { ROUTE_HOME } from '@/config';
import theme from '@/theme';

// ❌ Avoid - Relative imports across many levels
import { UserCard } from '../../../components';
```

---

## 🪝 Git Hooks (Husky + lint-staged)

### Pre-commit Hook

**File**: `.husky/pre-commit`

Automatically runs before each commit:

```bash
npx lint-staged
```

### Lint-Staged Configuration

**File**: `package.json`

```json
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

**What it does**:
- Formats **all staged files** with Prettier
- Ignores non-formattable files (images, etc.)
- Runs automatically on `git commit`
- Prevents commits with formatting issues

**Workflow**:
```bash
# 1. Stage your changes
git add src/components/NewComponent.tsx

# 2. Attempt commit
git commit -m "Add new component"

# 3. Husky runs lint-staged automatically:
#    - Formats NewComponent.tsx
#    - Auto-stages formatting changes
#    - Completes the commit

# Result: Code is always formatted before committing
```

---

## 📜 NPM Scripts

**File**: `package.json`

```json
{
  "scripts": {
    "start": "vite --open",
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "format": "prettier --write \"src/**/*.[jt]s{,x}\"",
    "lint": "tsc --noEmit && eslint \"src/**/*.[jt]s{,x}\"",
    "prepare": "husky"
  }
}
```

### Script Descriptions

| Script | Purpose | Usage |
|--------|---------|-------|
| `start` | Start dev server with browser | `npm start` |
| `dev` | Start dev server | `npm run dev` |
| `build` | Type check + production build | `npm run build` |
| `preview` | Preview production build | `npm run preview` |
| `format` | Format all source files | `npm run format` |
| `lint` | Type check + lint all files | `npm run lint` |
| `prepare` | Setup Husky hooks | Auto on `npm install` |

### Recommended Workflow

```bash
# During development
npm run dev

# Before committing (optional - pre-commit hook does this)
npm run format

# Check for issues
npm run lint

# Build for production
npm run build
```

---

## 📁 Project Structure Conventions

Based on `CONTRIBUTING.md`, follow these patterns:

### Feature-Based Architecture

```
src/
├── api/              # Global API integration
├── assets/           # Static assets
├── components/       # Global UI components only
├── config/           # Constants and configuration
├── features/         # Feature modules (mini apps)
│   └── auth/
│       ├── api/      # Feature-specific API
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── types/
│       └── index.ts  # Public exports only
├── hooks/            # Global hooks
├── i18n/             # Internationalization
├── pages/            # Page assembly (imports features)
├── theme/            # MUI theme configuration
└── utils/            # Global utilities
```

### Export Conventions

**Named exports** (preferred):
```typescript
// ✅ components/UserCard/index.tsx
export const UserCard = ({ name }: Props) => { ... };

// ✅ config/routes.ts
export const ROUTE_HOME = '/';
export const ROUTE_LOGIN = '/login';

// ✅ hooks/useAuth.ts
export const useAuth = () => { ... };
```

**Barrel exports** via `index.ts`:
```typescript
// ✅ components/index.ts
export { UserCard } from './UserCard';
export { ExampleCard } from './ExampleCard';

// Usage
import { UserCard, ExampleCard } from '@/components';
```

**Feature isolation**:
- Features don't import from each other directly
- Pages coordinate feature communication
- Only export what's needed externally

---

## ✅ Code Quality Checklist

### Before Committing

- [ ] Code compiles without TypeScript errors
- [ ] No ESLint errors or warnings
- [ ] Code is formatted (auto-done by pre-commit)
- [ ] Imports are organized correctly
- [ ] No `console.log` statements (use proper logging)
- [ ] No `any` types without justification
- [ ] All React hooks have correct dependencies

### Component Quality

- [ ] Named exports used
- [ ] TypeScript types defined for props
- [ ] Separated styles in `styles.ts` (if complex)
- [ ] i18n used for all user-facing text
- [ ] Proper error handling
- [ ] Loading states handled

### TypeScript Quality

- [ ] Function parameters typed
- [ ] Complex return types explicitly defined
- [ ] No implicit `any` types
- [ ] Enums or const objects for constants
- [ ] Type imports use `import type` when possible

---

## 🚫 Common Mistakes to Avoid

### 1. Import Organization

```typescript
// ❌ Bad - Random order
import theme from '@/theme';
import React from 'react';
import { Box } from '@mui/material';
import './styles.css';

// ✅ Good - Organized automatically by ESLint
import React from 'react';

import { Box } from '@mui/material';

import theme from '@/theme';

import './styles.css';
```

### 2. Missing Hook Dependencies

```typescript
// ❌ Bad
useEffect(() => {
  fetchUser(userId); // userId not in deps
}, []);

// ✅ Good
useEffect(() => {
  fetchUser(userId);
}, [userId]);

// ✅ Good - Intentionally ignoring
useEffect(() => {
  fetchUser(userId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []); // Only if you know what you're doing
```

### 3. Type Safety

```typescript
// ❌ Bad
const handleSubmit = (data: any) => {
  processData(data);
};

// ✅ Good
interface FormData {
  name: string;
  email: string;
}

const handleSubmit = (data: FormData) => {
  processData(data);
};
```

### 4. Console Statements

```typescript
// ❌ Bad - Triggers warning
console.log('User data:', user);

// ✅ Good - Remove before commit
// Use debugger or proper logging library

// ✅ Acceptable - If needed temporarily
// eslint-disable-next-line no-console
console.error('Critical error:', error);
```

### 5. Variable Declarations

```typescript
// ❌ Bad
var count = 0;
let message = 'Hello'; // Never changes

// ✅ Good
const message = 'Hello';
let count = 0; // Will change
```

---

## 🔧 IDE Setup Recommendations

### VS Code Extensions

1. **ESLint** (`dbaeumer.vscode-eslint`)
2. **Prettier** (`esbenp.prettier-vscode`)
3. **TypeScript Vue Plugin** (for TypeScript)

### VS Code Settings

**File**: `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

**Features**:
- Auto-format on save
- Auto-fix ESLint issues
- Import organization via ESLint (not VS Code)

---

## 🚀 Migration to New Project

### Step 1: Copy Configuration Files

```bash
# Copy linting configs
cp eslint.config.js <new-project>/
cp .prettierrc <new-project>/
cp tsconfig.json <new-project>/

# Copy Git hooks
cp -r .husky/ <new-project>/
```

### Step 2: Install Dependencies

```bash
npm install --save-dev \
  @eslint/js \
  eslint \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-import-resolver-typescript \
  typescript-eslint \
  prettier \
  husky \
  lint-staged
```

### Step 3: Add NPM Scripts

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.[jt]s{,x}\"",
    "lint": "tsc --noEmit && eslint \"src/**/*.[jt]s{,x}\"",
    "prepare": "husky"
  },
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

### Step 4: Setup Husky

```bash
npx husky init
echo "npx lint-staged" > .husky/pre-commit
chmod +x .husky/pre-commit
```

### Step 5: Initial Format

```bash
npm run format
```

---

## 📊 Build Configuration

### Vite Settings

**File**: `vite.config.ts`

```typescript
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    outDir: 'build',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material', '@emotion/react'],
        },
      },
    },
  },
});
```

**Code Splitting**:
- React & ReactDOM in separate chunk
- MUI components in separate chunk
- Optimizes bundle size and caching

---

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Husky Documentation](https://typicode.github.io/husky/)

---

## 💡 Quick Tips

1. **Run lint before pushing**: `npm run lint`
2. **Format entire project**: `npm run format`
3. **Check types only**: `tsc --noEmit`
4. **Bypass pre-commit** (emergency): `git commit --no-verify`
5. **Auto-fix ESLint**: Add `--fix` flag to lint script
6. **Ignore ESLint rule**: `// eslint-disable-next-line rule-name`
7. **Ignore Prettier**: `// prettier-ignore`

---

## 🎯 Summary

This project maintains code quality through:

✅ **Automated formatting** via Prettier  
✅ **Strict linting** with ESLint + TypeScript  
✅ **Pre-commit hooks** preventing bad code  
✅ **Consistent imports** with auto-organization  
✅ **Type safety** with strict TypeScript config  
✅ **Feature isolation** for maintainability  

**Result**: Clean, consistent, maintainable codebase with minimal manual effort.
