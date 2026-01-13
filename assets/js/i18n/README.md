# Internationalization (i18n) Guide

This website supports bilingual content in German (DE) and English (EN), with German as the default language.

## How It Works

The i18n system uses:
- **Translation strings**: Stored in `strings.js` with keys organized by section
- **Language manager**: Handles language detection, persistence, and switching (`lang.js`)
- **Translation helper**: Provides `t(key)` function to get translated strings (`i18n.js`)
- **Initialization**: Applies translations on page load and manages language switcher (`init.js`)

## Adding New Translations

### Step 1: Add Translation Keys to HTML

Add the `data-i18n` attribute to any element that should be translated:

```html
<!-- Before -->
<h1>Welcome to BetterHealth</h1>
<p>This is a paragraph.</p>
<a href="#">Click here</a>

<!-- After -->
<h1 data-i18n="welcome.title">Welcome to BetterHealth</h1>
<p data-i18n="welcome.description">This is a paragraph.</p>
<a href="#" data-i18n="welcome.link">Click here</a>
```

**Note**: 
- Use descriptive, hierarchical keys (e.g., `section.one.title`, `nav.home`)
- Keep keys consistent across pages when referring to the same content
- Do NOT translate brand names, product names, medical test names, or proper nouns

### Step 2: Add Translations to strings.js

Open `assets/js/i18n/strings.js` and add your translations to both `de` and `en` objects:

```javascript
const STRINGS = {
  de: {
    // ... existing translations ...
    'welcome.title': 'Willkommen bei BetterHealth',
    'welcome.description': 'Dies ist ein Absatz.',
    'welcome.link': 'Hier klicken',
  },
  en: {
    // ... existing translations ...
    'welcome.title': 'Welcome to BetterHealth',
    'welcome.description': 'This is a paragraph.',
    'welcome.link': 'Click here',
  }
};
```

### Step 3: Test Your Translations

1. Open the website in a browser
2. Use the language switcher (DE | EN) in the navigation
3. Verify that all translations appear correctly
4. Check browser console for any missing translation warnings

## Translation Key Naming Convention

Use a hierarchical naming structure:

- **Navigation**: `nav.*` (e.g., `nav.home`, `nav.method`)
- **Sections**: `section.*` (e.g., `section.one.title`, `section.two.description1`)
- **Features**: `section.two.feature1.*` (e.g., `section.two.feature1.title`)
- **Generic pages**: `generic.*` (e.g., `generic.title`, `generic.step1.text`)
- **Elements pages**: `elements.*` (e.g., `elements.title`, `elements.baseline.text`)
- **Footer**: `footer.*` (e.g., `footer.copyright`, `footer.design`)

## Language Detection Priority

The system detects the language in this order:
1. URL parameter: `?lang=de` or `?lang=en`
2. localStorage: `betterhealth_lang` key
3. Default: German (`de`)

## Language Switching

The language switcher is automatically added to:
- Sidebar navigation (on `index.html`)
- Header navigation (on `generic.html` and `elements.html`)

When a user clicks DE or EN:
- The language is saved to localStorage
- The URL parameter is updated (without page reload)
- All translations are immediately updated
- The HTML `lang` attribute is updated

## Technical Details

- **No page reload**: Language switching updates content dynamically
- **Persistence**: Language preference is saved in localStorage
- **URL support**: Language can be set via `?lang=de` or `?lang=en` in the URL
- **Default language**: German (`de`) is used if no preference is found

## Troubleshooting

**Translations not appearing?**
- Check browser console for errors
- Verify the translation key exists in both `de` and `en` objects
- Ensure the `data-i18n` attribute is correctly spelled
- Make sure all i18n scripts are loaded in the correct order

**Language switcher not showing?**
- Check that the navigation elements exist (`#sidebar nav ul` or `#header nav ul`)
- Verify `init.js` is loaded after `lang.js` and `strings.js`

**Language not persisting?**
- Check browser localStorage (should contain `betterhealth_lang` key)
- Verify localStorage is enabled in the browser
