/* =============================================================
 * 網站內容設定檔 —— 平常更新網站只需要改這個檔案
 *
 * 文字欄位有兩種寫法：
 *   "只有一種語言"                      → 中英文都顯示同一段
 *   { zh: "中文內容", en: "English" }   → 依照語言切換顯示
 *
 * 陣列（[ ... ]）是空的時候，該區塊會自動隱藏。
 * 新增項目時，複製一個 { ... } 區塊、改內容即可，記得項目之間要有逗號。
 * ============================================================= */

window.SITE = {
  profile: {
    nameZh: "曾柏凱",
    nameEn: "Kyle Tseng",
    title: {
      zh: "清華大學電機工程學系 碩士生",
      en: "M.S. Student, Electrical Engineering @ NTHU",
    },
    tagline: {
      zh: "機器人 × 機器學習 ",
      en: "Robotics × Machine Learning ",
    },
    photo: "assets/photo.jpg",
    email: "keinett9494@gmail.com",
    // 有的話把網址填進引號裡，沒有就保持空字串，按鈕會自動隱藏
    github: "",
    linkedin: "",
    cv: "", // 例如 "assets/Resume.pdf"
  },

  about: {
    zh: [
      "成功大學機械工程學系畢業，目前就讀清華大學電機工程學系碩士班。大學期間在自動控制、系統建模與電腦視覺打下理論基礎，並在機械專題中實際把馬達建模的知識用於解決機器人的轉速同步問題。",
      "透過專題中的無線遙控經驗，我開始對訊號在系統中的傳輸與處理產生濃厚興趣，因此跨領域進入電機所，希望整合控制與通訊，設計更穩定、高效能的自主系統。",
      "課業之外，我從國中音樂班開始學鋼琴，大學擔任鋼琴社教學長；也喜歡學語言，除了英文之外也學過日文與法文。",
    ],
    en: [
      "I graduated in Mechanical Engineering from National Cheng Kung University (NCKU) and am now pursuing an M.S. in Electrical Engineering at National Tsing Hua University (NTHU). My undergraduate studies gave me a solid foundation in automatic control, system modeling and computer vision.",
      "Building the robot's wireless remote control sparked my interest in how signals are transmitted and processed within a system. That led me across disciplines into EE, where I aim to combine control and communication to build more robust, high-performance autonomous systems.",
      "Outside the lab I have played piano since my middle-school music program and served as Head of Teaching for the NCKU Piano Club. I also love learning languages: besides English, I have studied Japanese and French.",
    ],
  },

  /* 研究方向：研究所開始後可以改寫成實際的研究題目 */
  interests: [
    {
      title: { zh: "控制系統", en: "Control Systems" },
      desc: {
        zh: "LTI 系統分析（Root Locus、Bode、Nyquist）、馬達建模與電流／速度／位置控制器設計。",
        en: "LTI system analysis (root locus, Bode, Nyquist), motor modeling, and current/speed/position controller design.",
      },
    },
    {
      title: { zh: "訊號處理與通訊", en: "Signal Processing & Communication" },
      desc: {
        zh: "通訊與感測器訊號在系統中的傳輸、處理與變化，以及通訊技術如何優化控制與自主系統。",
        en: "How communication and sensor signals propagate through systems, and how communication techniques can improve control and autonomous systems.",
      },
    },
    {
      title: { zh: "電腦視覺與機器學習", en: "Computer Vision & ML" },
      desc: {
        zh: "自學 Stanford CS231n 與台大機器學習、生成式 AI 課程。",
        en: "Self-studied Stanford CS231n and NTU courses on Machine Learning and Generative AI.",
      },
    },
  ],

  /* 學歷：最新的放最上面 */
  education: [
    {
      school: { zh: "國立清華大學", en: "National Tsing Hua University" },
      degree: { zh: "電機工程學系 碩士班", en: "M.S. in Electrical Engineering" },
      period: { zh: "2026 – 至今", en: "2026 – Present" },
      logo: "",
      details: [
        // 研究所開始後可以加入：指導教授、實驗室、修課等
        // { zh: "指導教授：○○○ 教授（○○○實驗室）", en: "Advisor: Prof. ○○○ (○○○ Lab)" },
      ],
    },
    {
      school: { zh: "國立成功大學", en: "National Cheng Kung University" },
      degree: { zh: "機械工程學系 學士", en: "B.S. in Mechanical Engineering" },
      period: { zh: "2022 – 2026", en: "2022 – 2026" },
      details: [
        { zh: "累計總平均 81.49，班排名 11 / 59（前 18.6%）", en: "Cumulative average 81.49; class rank 11 / 59 (top 18.6%)" },
        { zh: "相關修課：工程數學、線性代數、自動控制、系統建模與控制；另於電機系修習通訊相關課程", en: "Relevant coursework: Engineering Mathematics, Linear Algebra, Automatic Control, System Modeling & Control; communication courses taken in the EE department" },
      ],
    },
  ],

  /* 研究成果／論文：研究所有成果後再填，空的時候不顯示
   * 範例：
   * {
   *   title: "論文或研究題目",
   *   venue: "會議或期刊名稱, 2027",
   *   desc: { zh: "簡短說明", en: "Short description" },
   *   link: "https://...",
   * },
   */
  publications: [],

  /* 專案經歷：新的放最上面 */
  projects: [
    {
      title: { zh: "自走機器人專題", en: "Legged Robot Capstone Project" },
      org: { zh: "成大機械 · 機械專題", en: "NCKU ME · Capstone Project" },
      period: "",
      role: { zh: "負責：足部機構設計與控制", en: "Role: leg mechanism design & control" },
      points: [
        {
          zh: "使用 SolidWorks 設計整隻機器人的足部連桿機構。",
          en: "Designed the robot's leg linkage mechanism in SolidWorks.",
        },
        {
          zh: "<strong>解決馬達轉速不同步：</strong>發現相同電壓下兩顆馬達轉速不同，利用「系統建模與控制」課程中無負載穩態下電壓與轉速的線性關係，計算各馬達所需的補償電壓，讓兩側腿部轉速同步。",
          en: "<strong>Fixed motor speed mismatch:</strong> two motors ran at different speeds under the same voltage. Using the linear no-load steady-state voltage–speed relation from my System Modeling & Control course, I computed a compensation voltage for each motor to synchronize the legs.",
        },
        {
          zh: "<strong>開發無線遙控系統：</strong>自學微控制器與指令設定，以 Arduino PWM 調速，並透過無線方式遙控馬達。",
          en: "<strong>Built the wireless remote control:</strong> self-taught microcontroller programming and command configuration, driving motors with Arduino PWM over a wireless link.",
        },
      ],
      tags: ["SolidWorks", "Arduino", "PWM", "Motor Control"],
      images: [
        { src: "assets/robot-cad.png", alt: { zh: "機器人 SolidWorks 整體結構圖", en: "SolidWorks model of the robot" } },
        { src: "assets/robot-real.png", alt: { zh: "完成的機器人實體", en: "The finished robot" } },
      ],
      link: "",
    },
  ],

  skills: [
    { group: { zh: "領域", en: "Domains" }, items: ["Automatic Control", "Computer Vision", "Machine Learning", "Robotics"] },
    { group: { zh: "程式與工具", en: "Programming & Tools" }, items: ["MATLAB / Simulink", "C++", "Python", "SolidWorks", "Arduino"] },
    {
      group: { zh: "語言", en: "Languages" },
      items: [
        { zh: "中文（母語）", en: "Mandarin (Native)" },
        { zh: "英文（TOEIC 830）", en: "English (TOEIC 830)" },
        { zh: "日文（JLPT N3）", en: "Japanese (JLPT N3)" },
      ],
    },
  ],

  selfLearning: [
    { name: "Deep Learning for Computer Vision (CS231n)", by: "Stanford" },
    { name: { zh: "生成式 AI 與機器學習導論", en: "Introduction to Generative AI & ML" }, by: { zh: "台灣大學", en: "National Taiwan University" } },
    { name: { zh: "機器學習", en: "Machine Learning" }, by: { zh: "台灣大學", en: "National Taiwan University" } },
  ],

  activities: [
    { name: { zh: "成大鋼琴社 教學長", en: "Head of Teaching, NCKU Piano Club" }, desc: { zh: "規劃社課與籌辦期末成果發表會", en: "Planned weekly lessons and organized the end-of-term recital" } },
    { name: { zh: "成大第 16 屆職涯導師計畫（CCP）", en: "NCKU 16th Career Coaching Program (CCP)" }, desc: "" },
    { name: "DISCO HI-TEC TAIWAN D-campus", desc: "" },
  ],
};
