const STORAGE_KEYS = {
  MESSAGE_COUNT: 'fastfolio_message_count',
  POPUP_SHOWN: 'fastfolio_popup_shown',
  LAST_RESET: 'fastfolio_last_reset',
  RATE_LIMIT_REACHED: 'fastfolio_rate_limit_reached',
} as const;

const MESSAGE_LIMIT = 6; // Rate limit: 5 messages total

export class FastfolioTracking {
  static incrementMessageCount(): number {
    if (typeof window === 'undefined') return 0;
    
    // Don't reset for rate limiting - it's a permanent limit
    // Only increment if not already at limit
    const currentCount = parseInt(localStorage.getItem(STORAGE_KEYS.MESSAGE_COUNT) || '0');
    if (currentCount >= MESSAGE_LIMIT) {
      localStorage.setItem(STORAGE_KEYS.RATE_LIMIT_REACHED, 'true');
      return currentCount;
    }
    
    const newCount = currentCount + 1;
    localStorage.setItem(STORAGE_KEYS.MESSAGE_COUNT, newCount.toString());
    
    // Mark rate limit reached if we hit the limit
    if (newCount >= MESSAGE_LIMIT) {
      localStorage.setItem(STORAGE_KEYS.RATE_LIMIT_REACHED, 'true');
    }
    
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
    
    // Show popup after 2 messages OR when rate limit is reached
    const hasReachedLimit = this.hasReachedLimit();
    return (messageCount >= 2 && !popupShown) || hasReachedLimit;
  }
  
  static hasReachedLimit(): boolean {
    if (typeof window === 'undefined') return false;
    const count = this.getMessageCount();
    return count >= MESSAGE_LIMIT;
  }
  
  static shouldShowRateLimitPopup(): boolean {
    if (typeof window === 'undefined') return false;
    return this.hasReachedLimit();
  }
  
  static getRemainingMessages(): number {
    const count = this.getMessageCount();
    return Math.max(0, MESSAGE_LIMIT - count);
  }
  
  static markPopupShown(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.POPUP_SHOWN, 'true');
  }
  
  static resetSession(): void {
    if (typeof window === 'undefined') return;
    // Don't reset message count for rate limiting
    // Only reset popup shown state
    localStorage.setItem(STORAGE_KEYS.POPUP_SHOWN, 'false');
    localStorage.setItem(STORAGE_KEYS.LAST_RESET, Date.now().toString());
  }
  
  static resetForTesting(): void {
    // Admin/testing function to fully reset
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEYS.MESSAGE_COUNT);
    localStorage.removeItem(STORAGE_KEYS.POPUP_SHOWN);
    localStorage.removeItem(STORAGE_KEYS.RATE_LIMIT_REACHED);
    localStorage.removeItem(STORAGE_KEYS.LAST_RESET);
  }
}