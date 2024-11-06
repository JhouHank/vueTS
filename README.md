## 專案介紹

`vueTS` 是使用 Vue 3 與 TypeScript 建立的專案，整合了多種前端工具與套件，並以 pnpm 作為套件管理工具。專案架構採用 Vite 做為建置工具，並結合 TailwindCSS 提供快速且彈性的樣式設計。

## 環境需求

- Node.js：20.18.0
- 套件管理工具：pnpm 9.12.3

## 安裝與使用

### 1. 安裝專案依賴

```bash
pnpm install
```

### 2. 啟動開發伺服器

開發模式啟動伺服器，並監聽所有 IP 位址。

```bash
pnpm dev
```

### 3. 建置專案

建置生產版本

```bash
pnpm build
```

### 4. 預覽專案

啟動預覽模式來查看生產環境下的網站。

```bash
pnpm preview
```

## 指令一覽

| 指令            | 說明                                                 |
| --------------- | ---------------------------------------------------- |
| `pnpm dev`      | 啟動開發伺服器                                       |
| `pnpm build`    | 建置生產版本                                         |
| `pnpm preview`  | 預覽生產環境                                         |
| `pnpm lint`     | 使用 ESLint 進行程式碼檢查並自動修正                 |
| `pnpm prettier` | 使用 Prettier 格式化 `src/` 內所有程式碼             |
| `pnpm format`   | 結合 `pnpm lint` 和 `pnpm prettier` 進行格式化與檢查 |
| `pnpm prepare`  | 使用 Husky 準備 Git hook                             |

## 套件說明

### Dependencies

- **@vee-validate/zod**: 用於驗證表單資料
- **@vueuse/core**: Vue 組件的實用工具
- **axios**: HTTP 客戶端，用於 API 請求
- **pinia**: 狀態管理工具
- **tailwindcss**: 提供快速 CSS 樣式設計
- **vue-i18n**: 多語系支援

### DevDependencies

- **@commitlint/config-conventional**: Git commit 格式檢查
- **eslint**: 程式碼品質檢查工具
- **prettier**: 程式碼格式化工具
- **vite-plugin-svg-icons**: 支援 SVG 圖示
- **vue-tsc**: Vue TypeScript 檢查工具

## 開發者注意事項

請確保您的開發環境符合 Node.js 版本要求，並使用 `pnpm` 作為套件管理工具來確保一致性。

## 授權

此專案為私有專案，未授權他人使用。若有任何問題，歡迎與專案開發者聯繫。

---
