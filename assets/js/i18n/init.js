/**
 * i18n Initialization
 * Loads translations and applies them to the page
 * Handles language switching and updates
 */

(function() {
  'use strict';
  
  // Wait for DOM to be ready
  function initI18n() {
    // Functions should already be available from lang.js and strings.js
    // But ensure they're available
    if (typeof window !== 'undefined') {
      if (!window.getCurrentLang && typeof getCurrentLang !== 'undefined') {
        window.getCurrentLang = getCurrentLang;
      }
      if (!window.setLang && typeof setLang !== 'undefined') {
        window.setLang = setLang;
      }
      if (!window.getLang && typeof getLang !== 'undefined') {
        window.getLang = getLang;
      }
    }
    
    // Apply translations to the page
    applyTranslations();
    
    // Add language switcher to navigation
    addLanguageSwitcher();
    
    // Listen for language changes
    window.addEventListener('langchange', function(e) {
      applyTranslations();
    });
  }
  
  /**
   * Apply translations to all elements with data-i18n attribute
   */
  function applyTranslations() {
    const getCurrentLangFunc = (typeof window !== 'undefined' && window.getCurrentLang) ? window.getCurrentLang : getCurrentLang;
    const lang = getCurrentLangFunc();
    const stringsObj = (typeof window !== 'undefined' && window.STRINGS) ? window.STRINGS : STRINGS;
    const strings = stringsObj[lang];
    
    if (!strings) {
      console.error('Translation strings not available for language:', lang);
      return;
    }
    
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      const translation = strings[key];
      
      if (translation !== undefined) {
        // Handle different element types
        if (el.tagName === 'INPUT' && el.type === 'submit') {
          el.value = translation;
        } else if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'email')) {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      } else {
        console.warn('Translation key not found:', key);
      }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }
  
  /**
   * Add language switcher to navigation
   */
  function addLanguageSwitcher() {
    const getCurrentLangFunc = (typeof window !== 'undefined' && window.getCurrentLang) ? window.getCurrentLang : getCurrentLang;
    const setLangFunc = (typeof window !== 'undefined' && window.setLang) ? window.setLang : setLang;
    const currentLang = getCurrentLangFunc();
    
    // Find sidebar navigation (for index.html)
    const sidebarNav = document.querySelector('#sidebar nav ul');
    if (sidebarNav) {
      // Check if switcher already exists
      if (!document.querySelector('#lang-switcher-sidebar')) {
        const langItem = document.createElement('li');
        langItem.id = 'lang-switcher-sidebar';
        langItem.style.marginTop = '1em';
        langItem.style.paddingTop = '1em';
        langItem.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
        
        const langSwitcher = document.createElement('div');
        langSwitcher.style.display = 'flex';
        langSwitcher.style.gap = '0.5em';
        langSwitcher.style.justifyContent = 'center';
        
        const deBtn = document.createElement('a');
        deBtn.href = '#';
        deBtn.textContent = 'DE';
        deBtn.style.cursor = 'pointer';
        deBtn.style.opacity = currentLang === 'de' ? '1' : '0.6';
        deBtn.style.textDecoration = currentLang === 'de' ? 'underline' : 'none';
        deBtn.onclick = function(e) {
          e.preventDefault();
          setLangFunc('de');
          return false;
        };
        
        const separator = document.createTextNode(' | ');
        
        const enBtn = document.createElement('a');
        enBtn.href = '#';
        enBtn.textContent = 'EN';
        enBtn.style.cursor = 'pointer';
        enBtn.style.opacity = currentLang === 'en' ? '1' : '0.6';
        enBtn.style.textDecoration = currentLang === 'en' ? 'underline' : 'none';
        enBtn.onclick = function(e) {
          e.preventDefault();
          setLangFunc('en');
          return false;
        };
        
        langSwitcher.appendChild(deBtn);
        langSwitcher.appendChild(separator);
        langSwitcher.appendChild(enBtn);
        langItem.appendChild(langSwitcher);
        sidebarNav.appendChild(langItem);
      }
    }
    
    // Find header navigation (for generic.html and elements.html)
    const headerNav = document.querySelector('#header nav ul');
    if (headerNav) {
      // Check if switcher already exists
      if (!document.querySelector('#lang-switcher-header')) {
        const langItem = document.createElement('li');
        langItem.id = 'lang-switcher-header';
        
        const deBtn = document.createElement('a');
        deBtn.href = '#';
        deBtn.textContent = 'DE';
        deBtn.style.cursor = 'pointer';
        deBtn.style.opacity = currentLang === 'de' ? '1' : '0.6';
        deBtn.style.textDecoration = currentLang === 'de' ? 'underline' : 'none';
        deBtn.onclick = function(e) {
          e.preventDefault();
          setLangFunc('de');
          return false;
        };
        
        const separator = document.createTextNode(' | ');
        
        const enBtn = document.createElement('a');
        enBtn.href = '#';
        enBtn.textContent = 'EN';
        enBtn.style.cursor = 'pointer';
        enBtn.style.opacity = currentLang === 'en' ? '1' : '0.6';
        enBtn.style.textDecoration = currentLang === 'en' ? 'underline' : 'none';
        enBtn.onclick = function(e) {
          e.preventDefault();
          setLangFunc('en');
          return false;
        };
        
        langItem.appendChild(deBtn);
        langItem.appendChild(separator);
        langItem.appendChild(enBtn);
        headerNav.appendChild(langItem);
      }
    }
    
    // Update switcher state when language changes
    function updateSwitcher() {
      const getCurrentLangFunc = (typeof window !== 'undefined' && window.getCurrentLang) ? window.getCurrentLang : getCurrentLang;
      const lang = getCurrentLangFunc();
      const deBtns = document.querySelectorAll('#lang-switcher-sidebar a:first-child, #lang-switcher-header a:first-child');
      const enBtns = document.querySelectorAll('#lang-switcher-sidebar a:last-child, #lang-switcher-header a:last-child');
      
      deBtns.forEach(function(btn) {
        btn.style.opacity = lang === 'de' ? '1' : '0.6';
        btn.style.textDecoration = lang === 'de' ? 'underline' : 'none';
      });
      
      enBtns.forEach(function(btn) {
        btn.style.opacity = lang === 'en' ? '1' : '0.6';
        btn.style.textDecoration = lang === 'en' ? 'underline' : 'none';
      });
    }
    
    window.addEventListener('langchange', updateSwitcher);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
