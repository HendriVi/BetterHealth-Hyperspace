/**
 * Language manager for BetterHealth website
 * Handles language detection, persistence, and switching
 */

/**
 * @typedef {'de' | 'en'} Lang
 */

/**
 * Get current language from URL parameter, localStorage, or default to 'de'
 * @returns {Lang}
 */
function getCurrentLang() {
  // Check URL parameter first
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam === 'de' || langParam === 'en') {
    return langParam;
  }
  
  // Check localStorage
  const storedLang = localStorage.getItem('betterhealth_lang');
  if (storedLang === 'de' || storedLang === 'en') {
    return storedLang;
  }
  
  // Default to German
  return 'de';
}

/**
 * Set language and persist to localStorage and URL
 * @param {Lang} lang - Language to set
 * @param {boolean} updateUrl - Whether to update URL (default: true)
 */
function setLang(lang) {
  if (lang !== 'de' && lang !== 'en') {
    console.warn('Invalid language:', lang);
    return;
  }
  
  // Save to localStorage
  localStorage.setItem('betterhealth_lang', lang);
  
  // Update URL parameter without reload
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
  
  // Trigger language change event
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/**
 * Get current language (alias for getCurrentLang for consistency)
 * @returns {Lang}
 */
function getLang() {
  return getCurrentLang();
}

// Make functions available globally for browser
if (typeof window !== 'undefined') {
  window.getCurrentLang = getCurrentLang;
  window.setLang = setLang;
  window.getLang = getLang;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getCurrentLang, setLang, getLang };
}
