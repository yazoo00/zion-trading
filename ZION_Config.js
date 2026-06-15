// ZION v2.1 — Deploy 1781483530 — 2026-06-15 00:32:10
// ZION Configuration — Central API Key Management
// 
// HOW THIS WORKS:
// 1. If you're a ZION subscriber, paste your Polygon.io API key in ZION_Setup.html
// 2. The key is stored in your browser's localStorage
// 3. All ZION tools automatically pick it up from there
// 4. You never have to enter it again (unless you clear browser data)
//
// FOR DEVELOPERS / SELF-HOSTING:
// You can also hardcode your key below for local use only.
// NEVER share a file with your API key hardcoded to anyone.
//
// POLYGON.IO PLANS:
// Free tier: delayed data (15 min) — works for education, not live trading
// Starter (~$29/mo): real-time data — required for full ZION functionality
// Visit: https://polygon.io/dashboard/signup

const ZION_CONFIG = {
  // Option 1: Hardcode for local personal use only (DO NOT SHARE)
  apiKey: '',
  
  // Option 2: Loaded from localStorage (set via ZION_Setup.html) — preferred
  // Tools automatically check localStorage if apiKey above is empty
  
  // System info
  version: '2.0',
  buildDate: 'June 2026',
  dataSource: 'Polygon.io',
  
  // Default tickers for quick-load buttons
  quickTickers: ['SPY', 'QQQ', 'NVDA', 'AAPL', 'PLTR', 'ORCL'],
  
  // Trading session windows (ET)
  sessions: {
    preMarket: { start: '04:00', end: '09:30', label: 'Pre-Market' },
    amateurHour: { start: '09:30', end: '10:00', label: '🚫 Amateur Hour' },
    proSetup: { start: '10:00', end: '11:30', label: '✅ Pro Setup Window' },
    middayChop: { start: '11:30', end: '13:30', label: '🚫 Midday Chop' },
    smartMoney: { start: '13:30', end: '15:00', label: '⚡ Smart Money Return' },
    powerHour: { start: '15:00', end: '16:00', label: '⚡ Power Hour' },
    afterHours: { start: '16:00', end: '20:00', label: 'After-Hours' },
  }
};

// ── Runtime key resolution ──────────────────────
// All tools use getApiKey() to ensure localStorage keys are preferred
const getApiKey = () => {
  return localStorage.getItem('zion-api-key') || ZION_CONFIG.apiKey || '';
};
