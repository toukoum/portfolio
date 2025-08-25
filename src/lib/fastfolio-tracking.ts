const STORAGE_KEYS = {
  MESSAGE_COUNT: 'fastfolio_message_count',
  POPUP_SHOWN: 'fastfolio_popup_shown',
  LAST_RESET: 'fastfolio_last_reset',
} as const;

const SESSION_DURATION = 60 * 60 * 1000; // 1 hour

export class FastfolioTracking {
  static incrementMessageCount(): number {
    if (typeof window === 'undefined') return 0;
    
    // Check if we need to reset the session
    const lastReset = localStorage.getItem(STORAGE_KEYS.LAST_RESET);
    const now = Date.now();
    
    if (!lastReset || now - parseInt(lastReset) > SESSION_DURATION) {
      this.resetSession();
    }
    
    const currentCount = parseInt(localStorage.getItem(STORAGE_KEYS.MESSAGE_COUNT) || '0');
    const newCount = currentCount + 1;
    localStorage.setItem(STORAGE_KEYS.MESSAGE_COUNT, newCount.toString());
    
    return newCount;
  }
  
  static getMessageCount(): number {
    if (typeof window === 'undefined') return 0;
    return parseInt(localStorage.getItem(STORAGE_KEYS.MESSAGE_COUNT) || '0');
  }
  
  static shouldShowPopup(): boolean {
    if (typeof window === 'undefined') return false;
    
    const messageCount = this.getMessageCount();
    const popupShown = localStorage.getItem(STORAGE_KEYS.POPUP_SHOWN) === 'true';
    
    // Show popup after 2 messages and if not already shown in this session
    return messageCount >= 2 && !popupShown;
  }
  
  static markPopupShown(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.POPUP_SHOWN, 'true');
  }
  
  static resetSession(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.MESSAGE_COUNT, '0');
    localStorage.setItem(STORAGE_KEYS.POPUP_SHOWN, 'false');
    localStorage.setItem(STORAGE_KEYS.LAST_RESET, Date.now().toString());
  }
}