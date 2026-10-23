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
      zh: "清華大學電機工程學系 VSLab",
      en: "VSLab, Electrical Engineering @ NTHU",
    },
    tagline: {
      zh: "機器人 × 機器學習 ",
      en: "Robotics × Machine Learning ",
    },
    photo: "assets/photo.jpg",
    email: "keinett9494@gmail.com",
    // 有的話把網址填進引號裡，沒有就保持空字串，按鈕會自動隱藏
    github: "https://tesng.github.io/MyWeb/",
    linkedin: "",
    cv: "", // 例如 "assets/Resume.pdf"
  },

  about: {
    zh: [
      "成功大學機械工程學系畢業，目前就讀清華大學電機工程學系碩士班。大學期間修習自動控制與系統建模相關課程、自學電腦視覺，並在機械專題中實際把馬達建模的知識用於解決機器人的轉速同步問題。專題實作課程後，我對機器人的機構和馬達控制有了更多的了解。",
      "在 AI 的浪潮下，我開始思考要如何讓具身智慧（Embodied AI）結合大學所學的機器人領域知識，於是我在申請研究所時很幸運地找到了兩者的完美交集 VSLab，未來的研究主題也會以 VLA 為主。",
      "課業之外，我從國中音樂班開始學鋼琴，大學擔任鋼琴社教學長；也喜歡學語言，除了英文之外也學過日文與法文。",
    ],
    en: [
      "I graduated in Mechanical Engineering from National Cheng Kung University (NCKU) and am now pursuing an M.S. in Electrical Engineering at National Tsing Hua University (NTHU). As an undergraduate I took courses in automatic control and system modeling and self-studied computer vision, and in my capstone project I applied motor modeling to solve the robot's speed-synchronization problem. The hands-on capstone gave me a deeper understanding of robot mechanisms and motor control.",
      "With the rapid rise of AI, I began thinking about how to bring embodied AI together with the robotics knowledge I gained as an undergraduate. When applying to graduate school, I was fortunate to find VSLab, a perfect intersection of the two, and my research going forward will focus on VLA (Vision-Language-Action) models.",
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
      title: { zh: "機器人與機器學習", en: "Robotics & ML" },
      desc: {
        zh: "從機器人專題累積機構設計、馬達驅動與控制的實作經驗；並自學 Stanford CS231n 與台大機器學習課程，希望將學習方法應用於機器人的感知與控制。",
        en: "Hands-on experience in mechanism design, motor actuation and control from my robot capstone; self-studied Stanford CS231n and NTU ML courses, aiming to apply learning methods to robot perception and control.",
      },
    },
  ],

  /* 學歷：最新的放最上面；logo 填校徽圖片路徑，留空就顯示圓點 */
  education: [
    {
      school: { zh: "國立清華大學", en: "National Tsing Hua University" },
      degree: { zh: "電機工程學系 碩士班", en: "M.S. in Electrical Engineering" },
      period: { zh: "2026 – 至今", en: "2026 – Present" },
      logo: "assets/nthu-logo.png",
      details: [
        // 研究所開始後可以加入：指導教授、實驗室、修課等
        // { zh: "指導教授：○○○ 教授（○○○實驗室）", en: "Advisor: Prof. ○○○ (○○○ Lab)" },
      ],
    },
    {
      school: { zh: "國立成功大學", en: "National Cheng Kung University" },
      degree: { zh: "機械工程學系 學士", en: "B.S. in Mechanical Engineering" },
      period: { zh: "2022 – 2026", en: "2022 – 2026" },
      logo: "assets/ncku-logo.png",
      details: [
        { zh: "累計總平均 81.49，班排名 11 / 59（前 18.6%）", en: "Cumulative average 81.49; class rank 11 / 59 (top 18.6%)" },
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
      title: { zh: "仿生獸足行機器人專題", en: "Bio-inspired Legged Robot Capstone Project" },
      org: { zh: "成大機械 · 機械專題", en: "NCKU ME · Capstone Project" },
      period: "2025/02 – 2025/06", // 大三下學期
      role: { zh: "負責：足部機構設計與控制", en: "Role: leg mechanism design & control" },
      points: [
        {
          zh: "使用 SolidWorks 設計整隻機器人的足部連桿機構。",
          en: "Designed the leg linkage mechanism for the entire robot in SolidWorks.",
        },
        {
          zh: "<strong>解決馬達轉速不同步：</strong>發現相同電壓下兩顆馬達轉速不同，利用課程所學計算各馬達所需的補償電壓，讓兩側腿部轉速同步。",
          en: "<strong>Fixed motor speed mismatch:</strong> two motors ran at different speeds under the same voltage. Applying what I learned in coursework, I computed a compensation voltage for each motor to synchronize the legs on both sides.",
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
    {
      title: { zh: "LEAP Hand 靈巧手抓取", en: "LEAP Hand Dexterous Grasping" },
      org: "", // 例如 { zh: "清大電機 · ○○○實驗室", en: "NTHU EE · ○○○ Lab" }
      period: { zh: "進行中", en: "Ongoing" },
      role: "",
      points: [
        {
          zh: '行政院晶創計畫 子計畫四 <a href="https://aliensunmin.github.io/" target="_blank" rel="noopener">孫民教授</a>團隊。',
          en: 'Executive Yuan\'s Taiwan Chip-based Industrial Innovation Program (Taiwan CbI), Sub-project 4 — <a href="https://aliensunmin.github.io/" target="_blank" rel="noopener">Prof. Min Sun</a>\'s team.',
        },
        // { zh: "做了什麼、解決了什麼問題", en: "What I did and the problem it solved" },
      ],
      tags: ["Dexterous Hand", "ML", "VLA"],
      // 影片：靜音自動循環播放，訪客可用播放列開聲音
      video: { src: "assets/leapdemo.mp4", alt: { zh: "LEAP Hand 抓取展示", en: "LEAP Hand grasping demo" } },
      images: [],
      link: "",
    },
  ],

  /* Something Interesting：條列式顯示在專案經歷下方；name 會連到 link（可留空），desc 可留空 */
  interesting: [
    {
      name: "OmniGo",
      desc: {
        zh: "隨插即用的 Android GPS 虛擬定位工具，免 Root、免 ADB 指令，支援虛擬搖桿與路徑規劃。",
        en: "A plug-and-play GPS location simulator for Android — no root or ADB commands needed, with a virtual joystick and path planning.",
      },
      link: "https://omnigo-website-seven.vercel.app/?page=home",
    },
  ],

  skills: [
    {
      group: { zh: "領域", en: "Domains" },
      items: [
        { zh: "自動控制", en: "Automatic Control" },
        { zh: "電腦視覺", en: "Computer Vision" },
        { zh: "機器學習", en: "Machine Learning" },
        { zh: "機器人", en: "Robotics" },
      ],
    },
    { group: { zh: "程式與工具", en: "Programming & Tools" }, items: ["MATLAB / Simulink", "C++", "Python", "SolidWorks", "Arduino"] },
    {
      group: { zh: "語言", en: "Languages" },
      items: [
        { zh: "中文（母語）", en: "Mandarin (Native)" },
        { zh: "英文（TOEIC 830）", en: "English (TOEIC 830)" },
        { zh: "日文（JLPT N3）", en: "Japanese (JLPT N3)" },
      ],
    },
    {
      group: { zh: "個人特質", en: "Soft Skills" },
      items: [
        { zh: "成長型思維", en: "Growth Mindset" },
        { zh: "解決問題", en: "Problem Solving" },
        { zh: "團隊合作", en: "Collaboration" },
        { zh: "領導力", en: "Leadership" },
        { zh: "溝通表達", en: "Communication" },
        { zh: "適應力", en: "Adaptability" },
      ],
    },
  ],

  selfLearning: [
    { name: "Deep Learning for Computer Vision (CS231n)", by: { zh: "史丹佛大學", en: "Stanford University" } },
    { name: { zh: "生成式 AI 與機器學習導論", en: "Introduction to Generative AI & ML" }, by: { zh: "台灣大學", en: "National Taiwan University" } },
    { name: { zh: "機器學習", en: "Machine Learning" }, by: { zh: "台灣大學", en: "National Taiwan University" } },
  ],

  activities: [
    { name: { zh: "成大鋼琴社 教學長", en: "Head of Teaching, NCKU Piano Club" }, desc: { zh: "規劃社課與籌辦期末成果發表會", en: "Planned weekly lessons and organized the end-of-term recital" } },
    { name: { zh: "成大第 16 屆職涯導師計畫（CCP）", en: "NCKU 16th Career Coaching Program (CCP)" }, desc: "" },
    { name: "DISCO HI-TEC TAIWAN D-campus", desc: "" },
  ],
};
