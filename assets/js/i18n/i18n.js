/**
 * Internationalization helper
 * Provides translation function t(key) that reads current language and returns translated string
 */

/**
 * Translation function
 * @param {string} key - Translation key (e.g., 'nav.home')
 * @returns {string} Translated string or key if not found
 */
function t(key) {
  // Get current language - use window functions if available
  const getLangFunc = (typeof window !== 'undefined' && window.getLang) ? window.getLang : 
                      (typeof getLang !== 'undefined' ? getLang : function() { return 'de'; });
  const lang = getLangFunc();
  
  // Get strings object - use window.STRINGS if available
  const strings = (typeof window !== 'undefined' && window.STRINGS) ? window.STRINGS : 
                  (typeof STRINGS !== 'undefined' ? STRINGS : null);
  
  if (!strings || !strings[lang]) {
    console.warn('Translation strings not loaded for language:', lang);
    return key;
  }
  
  const translation = strings[lang][key];
  if (translation === undefined) {
    console.warn('Translation key not found:', key, 'for language:', lang);
    return key;
  }
  
  return translation;
}

// Make t available globally
if (typeof window !== 'undefined') {
  window.t = t;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { t };
}
