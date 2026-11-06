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
    github: "https://github.com/Tesng",
    linkedin: "https://www.linkedin.com/in/kyle-tseng-46a599373",
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
      period: { zh: "2023 – 2026", en: "2023 – 2026" },
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
      title: { zh: "仿生獸足型取物機器人", en: "Bio-inspired Legged Pick-and-Place Robot" },
      org: { zh: "成大機械 · 機械專題實作（6 人團隊）", en: "NCKU ME · Capstone Project (6-person team)" },
      period: "2025/02 – 2025/06", // 大三下學期
      role: { zh: "負責：足部機構與驅動系統", en: "Role: leg mechanism & drive system" },
      points: [
        {
          zh: "團隊打造遙控足型取物機器人：以仿生獸（Jansen 連桿）八足底盤行走，並配置四組夾爪，一趟就能夾取多個零件。",
          en: "Our team built a remote-controlled legged pick-and-place robot: an eight-legged, Strandbeest-style (Jansen linkage) chassis for walking, with four grippers to pick up multiple parts in one trip.",
        },
        {
          zh: "<strong>足部機構設計：</strong>以 SolidWorks 設計八足底盤，將兩組 Jansen 連桿足部模組等比放大 1.5 倍，以正齒輪組傳動（模數 3、壓力角 20°、齒比 14:24），並繪製完整工程圖。",
          en: "<strong>Leg mechanism design:</strong> designed the eight-legged chassis in SolidWorks — two Jansen-linkage leg modules scaled up 1.5×, driven by a spur-gear train (module 3, 20° pressure angle, 14:24 ratio) — with a full set of engineering drawings.",
        },
        {
          zh: "<strong>加工與組裝：</strong>以雷射切割 5 mm 壓克力製作足部零件，搭配金屬軸、法蘭滾珠軸承與黃銅聯軸器組裝。",
          en: "<strong>Fabrication:</strong> laser-cut the leg parts from 5 mm acrylic and assembled them on metal shafts with flanged ball bearings and brass shaft couplers.",
        },
        {
          zh: "<strong>模擬與檢討：</strong>製作前以 SolidWorks Motion Study 模擬足部運動；完成後檢討行走不穩的原因，追溯到雷射切割功率不足造成齒形變形，以及理想化模擬沒有反映出的過大步幅。",
          en: "<strong>Simulation & post-build review:</strong> ran a SolidWorks Motion Study on the leg assembly before fabrication; afterwards, traced the unstable gait to gear teeth distorted by an underpowered laser cutter and to an oversized stride that the idealized simulation missed.",
        },
        {
          zh: "<strong>解決馬達轉速不同步：</strong>相同電壓下兩顆驅動馬達轉速不同。我建立直流馬達轉移函數，得出無載穩態時轉速與電壓呈線性關係（ω = aV），量測兩顆馬達的轉速–電壓常數（0.047 vs 0.038 rps/V，相差 21%），再加入校正後的 PWM 補償，讓兩側腿部轉速同步。",
          en: "<strong>Fixed motor speed mismatch:</strong> the two drive motors ran at different speeds under the same voltage. I modeled the DC motor transfer function — at no-load steady state, speed is linear in voltage (ω = aV) — measured each motor's speed–voltage constant (0.047 vs 0.038 rps/V, a 21% gap), and added a calibrated PWM offset to synchronize both sides.",
        },
        {
          zh: "<strong>驅動電路與韌體：</strong>以 Arduino Uno 搭配 L298N 驅動兩顆 12 V 有刷直流馬達，透過 RC 遙控器（iBus 協定）無線操控，並以左右轉速差實現轉向。",
          en: "<strong>Drive electronics & firmware:</strong> drove two 12 V brushed DC motors with an L298N driver and an Arduino Uno, controlled wirelessly by an RC transmitter (iBus) with differential steering.",
        },
      ],
      tags: ["SolidWorks", "Jansen Linkage", "Laser Cutting", "Arduino", "L298N", "PWM", "DC Motor Modeling"],
      images: [
        { src: "assets/robot-cad.png", alt: { zh: "機器人 SolidWorks 整體結構圖", en: "SolidWorks model of the robot" } },
        { src: "assets/robot-real.png", alt: { zh: "完成的機器人實體", en: "The finished robot" } },
      ],
      link: "",
    },
    {
      title: { zh: "LEAP Hand 靈巧手抓取", en: "LEAP Hand Dexterous Grasping" },
      org: { zh: "清大電機 · VSLab", en: "NTHU EE · VSLab" },
      period: { zh: "2026 – 至今", en: "2026 – Present" },
      role: { zh: "負責：系統建置與校正", en: "Role: bring-up & calibration" },
      points: [
        {
          zh: '行政院晶創計畫 子計畫四 <a href="https://aliensunmin.github.io/" target="_blank" rel="noopener">孫民教授</a>團隊。',
          en: 'Executive Yuan\'s Taiwan Chip-based Industrial Innovation Program (Taiwan CbI), Sub-project 4 — <a href="https://aliensunmin.github.io/" target="_blank" rel="noopener">Prof. Min Sun</a>\'s team.',
        },
        {
          zh: "<strong>啟動與校正流程：</strong>為 16 自由度的 LEAP Hand 建立開機初始化與校正流程，比對馬達的指令位置與實際量測到的關節運動。",
          en: "<strong>Startup & calibration:</strong> built a startup initialization and calibration workflow for the 16-DoF LEAP Hand that checks commanded motor positions against measured joint motion.",
        },
        {
          zh: "<strong>運動學重定向：</strong>開發運動學重定向（retargeting），將人手手指的關節角度映射到機械手的關節。",
          en: "<strong>Kinematic retargeting:</strong> developed kinematic retargeting that maps human finger joint angles to the robot hand's joints.",
        },
      ],
      tags: ["Dexterous Hand", "Calibration", "Retargeting", "ML", "VLA"],
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
