/**
 * 系統靜態連線與模型清單配置
 * (所有動態設定如目前選用的語音、API Keys 均已跨平台儲存在 GAS 雲端)
 */
const APP_CONFIG = {
  // 1. 請貼上你部署後的 Google Apps Script 網頁應用程式網址 (以 /exec 結尾)
  GAS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxtgxe1J31xsxPWRLhoJ7szH_QwBKj26L11GPRaMqCZEti_9SuZZW-xKW7-LA50tmYA-w/exec",

  // 2. 專放 MP3 與 lesson_{id}.json 的 GitHub-assets 倉庫資料
  GITHUB: {
    owner: "lamfungjerry",
    assetsRepo: "long-dict-assets",  // 專放 MP3 的倉庫名稱
    branch: "main"                  // 預設分支名稱
  },

  // 3. 批次處理設定 (每批同時生成幾句 TTS，建議 5 句以兼顧極速與細膩進度條)
  TTS_BATCH_SIZE: 20,

  // 4. 可供選擇的 TTS 語音模型清單 (Azure en-HK + Google Chirp 3 HD en-US)
TTS_VOICES: [
    { id: "en-US-Chirp3-HD-Aoede", label: "美式自然女聲 (Aoede)", provider: "Google Cloud" },
    { id: "en-US-Chirp3-HD-Kore", label: "美式清晰女聲 (Kore)", provider: "Google Cloud" },
    { id: "en-US-Chirp3-HD-Leda", label: "美式溫柔女聲 (Leda)", provider: "Google Cloud" },
    { id: "en-US-Chirp3-HD-Zephyr", label: "美式輕快女聲 (Zephyr)", provider: "Google Cloud" },
    { id: "en-US-Chirp3-HD-Puck", label: "美式活力男聲 (Puck)", provider: "Google Cloud" },
    { id: "en-US-Chirp3-HD-Charon", label: "美式沉穩男聲 (Charon)", provider: "Google Cloud" },
    { id: "en-US-Chirp3-HD-Fenrir", label: "美式渾厚男聲 (Fenrir)", provider: "Google Cloud" },
    { id: "en-US-Chirp3-HD-Orus", label: "美式標準男聲 (Orus)", provider: "Google Cloud" }
  ],

  // 5. 可供選擇的課文分拆 / OCR 模型清單
  GEMINI_MODELS: [
    { id: "gemini-3.6-flash", label: "Gemini 3.6 Flash" },
    { id: "gemini-3.7-flash", label: "Gemini 3.7 Flash" },
    { id: "gemini-3.8-flash", label: "Gemini 3.8 Flash" },
    { id: "gemini-flash-latest", label: "Gemini Flash Latest" }
  ]
};
