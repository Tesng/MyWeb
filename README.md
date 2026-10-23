# 曾柏凱 Kyle Tseng — 個人網站

## 檔案說明

| 檔案 | 用途 |
| --- | --- |
| `content.js` | **所有網站內容都在這裡**，平常更新只要改這個檔案 |
| `index.html` / `style.css` / `main.js` | 版面、樣式與程式，一般不需要動 |
| `assets/` | 大頭照與專案圖片 |

在本機預覽：直接雙擊 `index.html` 用瀏覽器開啟。

## 更新研究所內容

打開 `content.js`，常用的位置：

- **指導教授／實驗室**：`education` 第一筆（清華大學）的 `details`，把範例那行前面的 `//` 刪掉再修改。
- **研究題目**：改寫 `interests`。
- **論文、研討會**：在 `publications` 裡照註解中的範例新增，有內容時「研究成果」區塊才會出現。
- **新專案**：在 `projects` 最上面複製一個 `{ ... }` 區塊修改，圖片放進 `assets/`。
- **GitHub、LinkedIn、PDF 履歷**：填在 `profile` 的 `github`、`linkedin`、`cv`。

文字可以寫成 `"同一段文字"`，或 `{ zh: "中文", en: "English" }` 分別提供中英文版本。

## 部署：GitHub Pages（免費）

1. 註冊 / 登入 GitHub，建立名為 `<你的帳號>.github.io` 的 **Public** repository。
2. 在這個資料夾執行（或用 GitHub Desktop）：
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/<你的帳號>.github.io.git
   git push -u origin main
   ```
3. 到 repository 的 **Settings → Pages**，Source 選 `Deploy from a branch`、`main` / `(root)`。
4. 約一分鐘後網址為 `https://<你的帳號>.github.io`。

之後更新：改完 `content.js` 後執行 `git add .`、`git commit -m "更新"`、`git push`，網站會自動更新。

> `.gitignore` 已排除 `Resume.pdf` 和自傳 PDF（含電話號碼），不會被上傳。
