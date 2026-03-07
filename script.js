// ===== DATA =====
const curriculum = {
  0: { // Level 0
    weeks: {
      1: {
        title: "তাওহিদ ও ঈমানে মুজমাল",
        intro: "এই সপ্তাহে একটাই প্রশ্নের উত্তর খুঁজবে — \"আমি কেন বিশ্বাস করি?\"",
        days: [
          {
            name: "শনিবার",
            emoji: "📺",
            title: "আল্লাহর অস্তিত্বের প্রমাণ",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "Hamza Tzortzis — \"The Argument for God's Existence\" (YouTube)",
                "মিজানুর রহমান আজহারি — \"আল্লাহ কি সত্যিই আছেন?\" (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা আল-গাশিয়াহ ১৭-২০ — অর্থসহ পড়ো"
              ]}
            ],
            lesson: "আল্লাহর অস্তিত্ব বোঝার জন্য দূরে যেতে হয় না — নিজের শরীর, আকাশ, পানি — সবকিছুই প্রমাণ।",
            tasks: [
              "আল্লাহর অস্তিত্বের যে প্রমাণটা সবচেয়ে বেশি মনে লাগলো সেটা কী?",
              "আজ থেকে কোন জিনিসটা দেখলে আল্লাহর কথা মনে হবে?"
            ]
          },
          {
            name: "রবিবার",
            emoji: "📖",
            title: "তাওহিদ: আল্লাহ এক",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "শায়খ আহমাদুল্লাহ — \"তাওহিদ কী এবং কেন জরুরি?\" (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা ইখলাস — অর্থসহ পড়ো"
              ]},
              { type: "book", icon: "📚", label: "বই থেকে পড়ো", items: [
                "'কিতাবুত তাওহিদ' — শায়খ মুহাম্মদ বিন আবদুল ওয়াহহাব, ১ম অধ্যায় (PDF)"
              ]}
            ],
            lesson: "তাওহিদ মানে শুধু 'আল্লাহ এক' বলা নয় — মানে হলো জীবনের সব কিছুতে শুধু তাঁকেই একমাত্র ইলাহ মানা।",
            tasks: [
              "সূরা ইখলাসের ৪টি আয়াতের অর্থ নিজের ভাষায় লেখো।",
              "তোমার জীবনে কোনো কাজ কি আছে যেখানে আল্লাহ ছাড়া অন্যকে বেশি ভয় বা ভরসা করো? লিখে রাখো।"
            ]
          },
          {
            name: "সোমবার",
            emoji: "🎙",
            title: "আল্লাহর গুণাবলি: আসমাউল হুসনা",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "মিজানুর রহমান আজহারি — \"আল্লাহর নামের অর্থ\" (YouTube)"
              ]},
              { type: "hadith", icon: "📜", label: "হাদিস পড়ো", items: [
                "\"আল্লাহর ৯৯টি নাম আছে — যে এগুলো (অর্থসহ) আয়ত্ত করবে সে জান্নাতে প্রবেশ করবে।\" (বুখারি, মুসলিম)"
              ]}
            ],
            table: {
              headers: ["নাম", "অর্থ ও জীবনে প্রভাব"],
              rows: [
                ["আর-রহমান", "পরম দয়ালু — এই দুনিয়ায় সবার জন্য রহমত"],
                ["আর-রহিম", "অতি মেহেরবান — মুমিনদের জন্য আখিরাতে বিশেষ রহমত"],
                ["আল-আলিম", "সর্বজ্ঞ — আমার মনের কথাও জানেন"],
                ["আল-কারিব", "অতি নিকটবর্তী — আমার শিরা থেকেও কাছে"],
                ["আত-তাওয়াব", "তওবা কবুলকারী — যতবার ফিরি, তিনি নেন"]
              ]
            },
            tasks: [
              "এই ৫টি নাম নোটবুকে লেখো — বাংলা অর্থসহ।",
              "কোন নামটা তোমার এখন সবচেয়ে বেশি দরকার মনে হচ্ছে? কেন?"
            ]
          },
          {
            name: "মঙ্গলবার",
            emoji: "💡",
            title: "আল্লাহর সাথে সম্পর্ক: ভয়, ভালোবাসা ও আশা",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "শায়খ আহমাদুল্লাহ — \"আল্লাহকে ভালোবাসার অর্থ\" (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা আয-যুমার ৫৩ — অর্থসহ পড়ো"
              ]},
              { type: "hadith", icon: "📜", label: "হাদিস পড়ো", items: [
                "\"আমি আমার বান্দার ধারণা অনুযায়ী — সে যদি ভালো ধারণা রাখে, পাবে।\" (বুখারি)"
              ]}
            ],
            lesson: "আল্লাহকে শুধু ভয়ে নয় — ভালোবাসায় ও আশায় ডাকো। তিনটি একসাথে থাকলেই সম্পর্ক পূর্ণ হয়।",
            tasks: [
              "এই মুহূর্তে আল্লাহর সাথে তোমার সম্পর্ক কেমন? — ভয় বেশি, না ভালোবাসা, না আশা?",
              "সূরা যুমার ৫৩ পড়ে কেমন লাগলো — এক লাইনে লেখো।"
            ]
          },
          {
            name: "বুধবার",
            emoji: "📜",
            title: "ঈমানে মুজমাল: সংক্ষিপ্ত ঈমানের ঘোষণা",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "ড. খন্দকার আবদুল্লাহ জাহাঙ্গীর — \"আকিদার মূলকথা\" (YouTube)"
              ]}
            ],
            quote: "ঈমানে মুজমাল: \"আমি আল্লাহর উপর ঈমান আনলাম, যেভাবে তিনি তাঁর নাম ও গুণাবলিসহ আছেন এবং তাঁর সকল বিধান মেনে নিলাম।\"",
            table: {
              headers: ["অংশ", "অর্থ"],
              rows: [
                ["আল্লাহর উপর ঈমান আনলাম", "তাঁর অস্তিত্বে বিশ্বাস"],
                ["নাম ও গুণাবলিসহ যেভাবে আছেন", "তিনি যা বলেছেন নিজের সম্পর্কে, সেটাই মানা"],
                ["সকল বিধান মেনে নিলাম", "শুধু বিশ্বাস নয় — মেনে চলার সংকল্প"]
              ]
            },
            tasks: [
              "ঈমানে মুজমালের অর্থ নিজের ভাষায় এক প্যারায় লেখো — আরবি মুখস্থ জরুরি নেই।",
              "'সকল বিধান মেনে নিলাম' — এই কথাটা কি তোমার জীবনে দেখা যায়? সৎভাবে লেখো।"
            ]
          },
          {
            name: "বৃহস্পতিবার",
            emoji: "🔄",
            title: "সপ্তাহের পুনরাবৃত্তি ও গভীরতা",
            time: "৩০ মিনিট",
            type: "Review",
            isMuhasaba: false,
            resources: [
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা ফাতিহা — অর্থ বুঝে পড়ো, ধীরে ধীরে"
              ]},
              { type: "hadith", icon: "📜", label: "হাদিস পড়ো", items: [
                "\"ঈমান হলো — মুখে স্বীকার করা, অন্তরে বিশ্বাস করা এবং অঙ্গ-প্রত্যঙ্গ দিয়ে আমল করা।\" (বায়হাকি)"
              ]}
            ],
            reviewQuestions: [
              "এই সপ্তাহে আল্লাহকে নিয়ে নতুন কী বুঝলাম?",
              "তাওহিদ ও ঈমানে মুজমাল — দুটোর পার্থক্য কী বুঝলাম?",
              "এই জ্ঞান আমার দৈনন্দিন জীবনে কীভাবে কাজে লাগবে?"
            ],
            tasks: [
              "এই সপ্তাহে শেখা সবচেয়ে গুরুত্বপূর্ণ ৩টি বিষয় নোটবুকে লেখো।",
              "তারপর কাউকে (বন্ধু বা পরিবার) এর মধ্যে একটা বিষয় বলো।"
            ]
          },
          {
            name: "শুক্রবার",
            emoji: "🕌",
            title: "সাপ্তাহিক মুহাসাবা মিটিং",
            time: "দলীয় মিটিং",
            type: "মুহাসাবা",
            isMuhasaba: true,
            muhasabaTable: [
              ["আল্লাহর অস্তিত্ব", "এই সপ্তাহে কোন জিনিসটা দেখে আল্লাহর কথা মনে হয়েছে?"],
              ["তাওহিদ", "জীবনে কোথাও কি আল্লাহ ছাড়া অন্যকে বেশি ভয় বা ভরসা করছি?"],
              ["আল্লাহর গুণ", "আসমাউল হুসনার কোন নামটা এই সপ্তাহে সবচেয়ে বেশি মনে এসেছে?"],
              ["ঈমানে মুজমাল", "নিজের ভাষায় ঈমানে মুজমালের অর্থ বলতে পারছি কি?"],
              ["সামগ্রিক", "এই সপ্তাহে ঈমান কি একটুও বেড়েছে? কোন মুহূর্তে?"]
            ],
            groupWork: [
              "একজন সদস্য এই সপ্তাহের সেরা অনুভূতি শেয়ার করুক।",
              "একজন সদস্য সবচেয়ে কঠিন প্রশ্ন শেয়ার করুক — সবাই মিলে আলোচনা করো।",
              "আগামী সপ্তাহের (ঈমানে মুফাসসাল ও ৬ রুকন) জন্য একটি দলগত সংকল্প নাও। শেষে দুআর মাধ্যমে মিটিং শেষ করো।"
            ]
          }
        ]
      },
      2: {
        title: "ঈমানে মুফাসসাল ও ৬ রুকন",
        intro: "ঈমানে মুফাসসালের ৬টি রুকন একটি একটি করে বুঝবে এবং প্রতিটিকে জীবনের সাথে সংযুক্ত করবে।",
        days: [
          {
            name: "শনিবার",
            emoji: "🌟",
            title: "রুকন ১ — আল্লাহর উপর ঈমান",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "শায়খ আহমাদুল্লাহ — \"আল্লাহর পরিচয়\" (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা বাকারা ২৫৫ — আয়াতুল কুরসি, অর্থসহ ধীরে পড়ো"
              ]}
            ],
            tasks: [
              "আয়াতুল কুরসিতে আল্লাহর কতটি গুণের কথা আছে — গুনে লেখো।",
              "'আল্লাহর উপর ঈমান' — এটা আমার জীবনে কতটুকু বাস্তব? সৎভাবে লেখো।"
            ]
          },
          {
            name: "রবিবার",
            emoji: "👼",
            title: "রুকন ২ — ফেরেশতাদের উপর ঈমান",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "ফেরেশতাদের প্রতি বিশ্বাস — মিজানুর রহমান (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা ইনফিতার ১০-১২ — অর্থসহ পড়ো"
              ]}
            ],
            table: {
              headers: ["ফেরেশতা", "কাজ"],
              rows: [
                ["জিবরাইল (আ)", "ওহি নিয়ে আসতেন"],
                ["মিকাইল (আ)", "বৃষ্টি ও রিযিকের দায়িত্বে"],
                ["ইসরাফিল (আ)", "কিয়ামতের দিন শিঙায় ফুঁক দেবেন"],
                ["আজরাইল", "মৃত্যুর ফেরেশতা"],
                ["কিরামান কাতিবিন", "আমাদের আমল লিখছেন এখনই"],
                ["মুনকার ও নাকির", "কবরে প্রশ্ন করবেন"]
              ]
            },
            tasks: [
              "রাকিব ও আতিদ এখনই আমার আমল লিখছেন — এটা মনে রেখে আজ কি কোনো কাজ বদলাবে? লেখো।",
              "ফেরেশতাদের উপর ঈমান আমার আচরণে কতটুকু প্রভাব ফেলছে?"
            ]
          },
          {
            name: "সোমবার",
            emoji: "📚",
            title: "রুকন ৩ — কিতাবসমূহের উপর ঈমান",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "মুগ্ধময় কুরআন সিরিজ | পর্ব ০১ | ভূমিকা | নোমান আলী খান (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা আল-মায়িদা ৪৮ — অর্থসহ পড়ো"
              ]}
            ],
            table: {
              headers: ["কিতাব", "নবী ও বিশেষত্ব"],
              rows: [
                ["তাওরাত", "মুসা (আ) — বনি ইসরাইলের জন্য"],
                ["যাবুর", "দাউদ (আ) — প্রশংসার কিতাব"],
                ["ইঞ্জিল", "ঈসা (আ) — কিন্তু পরিবর্তিত হয়ে গেছে"],
                ["কুরআন", "মুহাম্মদ ﷺ — সর্বশেষ, সংরক্ষিত, সর্বজনীন"]
              ]
            },
            tasks: [
              "কুরআন আল্লাহর সরাসরি কথা — এটা জেনে কুরআনের সাথে আমার সম্পর্ক কেমন?",
              "আজ ৫ মিনিট কুরআন অর্থসহ পড়ো এবং একটি লাইন নোটবুকে লেখো।"
            ]
          },
          {
            name: "মঙ্গলবার",
            emoji: "🕊",
            title: "রুকন ৪ — রাসূলগণের উপর ঈমান",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "মিজানুর রহমান আজহারি — \"নবী-রাসূলদের পরিচয়\" (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা আল-আহযাব ২১ — অর্থসহ পড়ো"
              ]},
              { type: "hadith", icon: "📜", label: "হাদিস পড়ো", items: [
                "\"তোমাদের কেউ মুমিন হবে না যতক্ষণ না আমি তার কাছে তার পিতা, সন্তান ও সকল মানুষের চেয়ে বেশি প্রিয় না হই।\" (বুখারি)"
              ]}
            ],
            lesson: "রাসূলের উপর ঈমান মানে শুধু তাঁকে নবী মানা নয় — মানে হলো তাঁকে ভালোবাসা এবং তাঁর জীবনকে আদর্শ মানা।",
            tasks: [
              "নবীজি ﷺ সম্পর্কে তুমি কতটুকু জানো? নিজেকে ১-১০ নম্বর দাও।",
              "সিরাত থেকে নবীজির একটি ঘটনা পড়ো এবং একটি শিক্ষা লেখো।"
            ]
          },
          {
            name: "বুধবার",
            emoji: "⏳",
            title: "রুকন ৫ — আখিরাত ও শেষ দিনের উপর ঈমান",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "মিজানুর রহমান আজহারি — \"মৃত্যুর পর কী হয়?\" (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা আয-যিলযাল ৭-৮ — অর্থসহ পড়ো"
              ]}
            ],
            table: {
              headers: ["ধাপ", "সংক্ষিপ্ত পরিচয়"],
              rows: [
                ["মৃত্যু", "দুনিয়ার পরীক্ষার সমাপ্তি"],
                ["কবর", "প্রথম প্রশ্ন — রব কে, দ্বীন কী, নবী কে"],
                ["হাশর", "সকলকে একত্র করা"],
                ["হিসাব", "প্রতিটি আমলের পর্যালোচনা"],
                ["পুলসিরাত", "জান্নাত-জাহান্নামের মাঝে সেতু"],
                ["জান্নাত / জাহান্নাম", "চিরস্থায়ী পরিণতি"]
              ]
            },
            tasks: [
              "'আজ রাতেই মৃত্যু আসতে পারে' — এই চিন্তা করে আজকের ১টি কাজ পরিবর্তন করো। কী পরিবর্তন করলে, লেখো।",
              "সূরা যিলযালের ৭-৮ আয়াত — এটা মনে রেখে আজ কোনো ছোট ভালো কাজ করো।"
            ]
          },
          {
            name: "বৃহস্পতিবার",
            emoji: "🎯",
            title: "রুকন ৬ — তাকদিরের উপর ঈমান",
            time: "৩০ মিনিট",
            type: "Self-Study",
            isMuhasaba: false,
            resources: [
              { type: "video", icon: "🎥", label: "ভিডিও দেখো", items: [
                "শায়খ আহমাদুল্লাহ — \"তাকদির কী? বিশ্বাস করলে কি চেষ্টা করতে হয় না?\" (YouTube)"
              ]},
              { type: "quran", icon: "📖", label: "কুরআন পড়ো", items: [
                "সূরা আত-তালাক ৩ — অর্থসহ পড়ো"
              ]},
              { type: "hadith", icon: "📜", label: "হাদিস পড়ো", items: [
                "\"উটটি বেঁধে রাখো, তারপর আল্লাহর উপর ভরসা করো।\" (তিরমিযি)"
              ]}
            ],
            table: {
              headers: ["ভুল ধারণা", "সঠিক বোঝাপড়া"],
              rows: [
                ["তাকদিরে বিশ্বাস মানে চেষ্টা না করা", "চেষ্টা করা ফরজ — ফলাফল আল্লাহর হাতে"],
                ["খারাপ হলে বলি 'তাকদিরে ছিল'", "নিজের দায়িত্ব নেওয়া এবং তাওবা করা"],
                ["তাকদির মানে সব নির্ধারিত, আমার কিছু করার নেই", "আল্লাহ চেষ্টাকারীদের সাহায্য করেন"]
              ]
            },
            tasks: [
              "তাকদিরের ৪টি স্তর আছে — ইলম, কিতাবত, মাশিয়্যাত, খালক। যেকোনো একটা সম্পর্কে ১ লাইন লেখো।",
              "এই মুহূর্তে জীবনে যে বিষয়টা নিয়ে দুশ্চিন্তায় আছো — সেটা তাকদিরের আলোকে কীভাবে দেখবে?"
            ]
          },
          {
            name: "শুক্রবার",
            emoji: "🕌",
            title: "সাপ্তাহিক মুহাসাবা মিটিং",
            time: "দলীয় মিটিং",
            type: "মুহাসাবা",
            isMuhasaba: true,
            muhasabaTable: [
              ["রুকন ১ — আল্লাহ", "আল্লাহর উপর ঈমান আমার ব্যবহারে কতটুকু দেখা যাচ্ছে?"],
              ["রুকন ২ — ফেরেশতা", "ফেরেশতা আমল লিখছেন — এটা মনে রেখে কি কোনো পরিবর্তন হয়েছে?"],
              ["রুকন ৩ — কিতাব", "এই সপ্তাহে কুরআনের সাথে সম্পর্ক কেমন ছিল?"],
              ["রুকন ৪ — রাসূল", "নবীজি ﷺ-কে আদর্শ মানার ক্ষেত্রে এই সপ্তাহে কী পরিবর্তন হয়েছে?"],
              ["রুকন ৫ — আখিরাত", "মৃত্যুর কথা ভেবে এই সপ্তাহে কি কোনো কাজ বদলেছে?"],
              ["রুকন ৬ — তাকদির", "চেষ্টা করে আল্লাহর উপর ভরসা — এই ভারসাম্য কতটুকু মেনে চলছো?"]
            ],
            groupWork: [
              "একজন সদস্য ঈমানে মুফাসসাল নিজের ভাষায় বলুক।",
              "কোন রুকনটা সবচেয়ে কম অনুভব হয় — সবাই মিলে আলোচনা করো।",
              "Level 0 শুরুর জন্য একটি দলগত সংকল্প নাও। শেষে দুআর মাধ্যমে মিটিং শেষ করো।"
            ]
          }
        ]
      }
    }
  }
};

// ===== STATE =====
let currentLevel = 0;
let currentWeek = 1;
let currentDay = 0;
let currentView = 'day';

// ===== RENDER FUNCTIONS =====

function renderDayNav() {
  const nav = document.getElementById('dayNav');
  const days = curriculum[currentLevel].weeks[currentWeek].days;
  nav.innerHTML = days.map((d, i) => `
    <button class="day-pill ${d.isMuhasaba ? 'muhasaba' : ''} ${i === currentDay ? 'active' : ''}"
      onclick="switchDay(${i})">
      <span class="day-emoji">${d.emoji}</span>
      ${d.name}
    </button>
  `).join('');
}

function renderResourceCard(res) {
  const iconClass = res.type === 'video' ? 'icon-video' : res.type === 'quran' ? 'icon-quran' : res.type === 'hadith' ? 'icon-hadith' : 'icon-book';
  return `
    <div class="resource-section">
      <div class="resource-section-title">${res.label}</div>
      <div class="resource-cards">
        ${res.items.map(item => `
          <div class="resource-card">
            <div class="resource-icon ${iconClass}">${res.icon}</div>
            <div class="resource-text">
              <div class="resource-title">${item}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTable(table) {
  return `
    <table class="info-table">
      <thead>
        <tr>${table.headers.map(h => `<th>${h}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  `;
}

function renderTasks(tasks) {
  return `
    <div class="task-section">
      <div class="task-header">
        <span class="pencil">✏️</span>
        <h4>নোট Task</h4>
      </div>
      <ul class="task-list">
        ${tasks.map((t, i) => `
          <li class="task-item">
            <div class="task-num">${i + 1}</div>
            <div class="task-text">${t}</div>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function renderDayFull(day) {
  let html = '';

  if (day.isMuhasaba) {
    html += `
      <div class="muhasaba-card">
        <h3>🕌 ${day.title}</h3>
        <p>কোনো নতুন পাঠ নেই — এই দিন শুধু হিসাব ও পরিকল্পনার জন্য।</p>
        <table class="muhasaba-table">
          <thead><tr><th>বিষয়</th><th>মুহাসাবার প্রশ্ন</th></tr></thead>
          <tbody>
            ${day.muhasabaTable.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;

    html += `
      <div class="group-work">
        <h4>🤝 দলীয় কাজ</h4>
        <ul class="group-list">
          ${day.groupWork.map((g, i) => `<li data-num="${i + 1}">${g}</li>`).join('')}
        </ul>
      </div>
    `;
    return html;
  }

  if (day.resources) {
    day.resources.forEach(res => { html += renderResourceCard(res); });
  }

  if (day.lesson) {
    html += `
      <div class="lesson-box">
        <div class="lesson-box-label">💡 মূল শিক্ষা</div>
        <p>${day.lesson}</p>
      </div>
    `;
  }

  if (day.quote) {
    html += `
      <div class="lesson-box">
        <div class="lesson-box-label">📖 পড়ো ও বোঝো</div>
        <p>${day.quote}</p>
      </div>
    `;
  }

  if (day.table) html += renderTable(day.table);

  if (day.reviewQuestions) {
    html += `
      <div class="task-section" style="border-top-color: var(--green-light);">
        <div class="task-header">
          <span class="pencil">💭</span>
          <h4>চিন্তার প্রশ্ন</h4>
        </div>
        <ul class="task-list">
          ${day.reviewQuestions.map((q, i) => `
            <li class="task-item">
              <div class="task-num">${i + 1}</div>
              <div class="task-text">${q}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  if (day.tasks) html += renderTasks(day.tasks);

  return html;
}

function renderDayView() {
  const days = curriculum[currentLevel].weeks[currentWeek].days;
  const day = days[currentDay];

  return `
    <div class="day-content">
      <div class="day-title-bar">
        <div class="day-icon">${day.emoji}</div>
        <div class="day-title-text">
          <h3>${day.title}</h3>
          <div class="day-meta">
            <span class="day-tag tag-time">⏱ ${day.time}</span>
            <span class="day-tag tag-type">📋 ${day.type}</span>
          </div>
        </div>
      </div>
      ${renderDayFull(day)}
    </div>
  `;
}

function renderAllView() {
  const days = curriculum[currentLevel].weeks[currentWeek].days;
  return `
    <div class="all-days">
      ${days.map((day, i) => `
        <div class="accordion-item ${i === 0 ? 'open' : ''}" id="acc-${i}">
          <div class="accordion-header" onclick="toggleAccordion(${i})">
            <div class="acc-icon">${day.emoji}</div>
            <div class="acc-title">
              <h4>${day.name} — ${day.title}</h4>
              <span>${day.time} • ${day.type}</span>
            </div>
            <div class="acc-arrow">⌄</div>
          </div>
          <div class="accordion-body">
            ${renderDayFull(day)}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function render() {
  const content = document.getElementById('contentArea');
  if (currentView === 'day') {
    renderDayNav();
    content.innerHTML = renderDayView();
  } else {
    document.getElementById('dayNav').innerHTML = '';
    content.innerHTML = renderAllView();
  }
}

// ===== CONTROLS =====

function switchLevel(lvl) {
  if (lvl !== 0) return;
  currentLevel = lvl;
  currentWeek = 1;
  currentDay = 0;
  render();
}

function switchWeek(w, btn) {
  currentWeek = w;
  currentDay = 0;
  document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const total = Object.keys(curriculum[currentLevel].weeks).length * 7;
  const done = (w - 1) * 7;
  document.getElementById('progressFill').style.width = ((done / total) * 100) + '%';
  document.getElementById('progressLabel').textContent = `সপ্তাহ ${w} চলছে • ${total} দিনের মধ্যে ${done} দিন`;

  render();
}

function switchDay(i) {
  currentDay = i;
  render();
}

function setView(v, btn) {
  currentView = v;
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function toggleAccordion(i) {
  const item = document.getElementById(`acc-${i}`);
  item.classList.toggle('open');
}

// ===== INIT =====
render();