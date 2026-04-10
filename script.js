// ============================================================
//  ANITI · 次元人格测定系统
//  数据结构说明：
//    TYPES   — 人格类型定义（代码、名称、描述、特征、颜色等）
//    QUESTIONS — 题目列表（每道题含 4 个选项，每个选项含得分权重）
//
//  TODO: 填充真实的人格描述、特征标签、图片路径
//  TODO: 添加更多题目 / 调整选项得分权重
// ============================================================

/* =====================
   PERSONALITY TYPES
   ===================== */
const TYPES = {
  TSUN: {
    code: "TSUN",
    name: "傲娇型",
    tagline: "「才、才不是为了你！」",
    color: "#f472b6",
    emoji: "🌸",
    image: "images/tsun.png",          // TODO: 替换为真实图片
    desc: "TODO：填写傲娇型人格的描述。嘴硬心软、表里不一、关键时刻挺身而出……",
    traits: ["嘴硬心软", "死不认错", "耳朵会变红", "其实很在意你"],
    compatible: "HERO",
    incompatible: "DEMON",
  },
  YAND: {
    code: "YAND",
    name: "病娇型",
    tagline: "「我会永远守护你的……」",
    color: "#c084fc",
    emoji: "🔪",
    image: "images/yand.png",          // TODO
    desc: "TODO：填写病娇型人格的描述。执着、深情、偏执，爱起来没有边界……",
    traits: ["极度执着", "占有欲强", "表面温柔", "笑容背后有刀"],
    compatible: "TSUN",
    incompatible: "HERO",
  },
  HERO: {
    code: "HERO",
    name: "热血勇者型",
    tagline: "「我绝对不会放弃！」",
    color: "#f97316",
    emoji: "⚔️",
    image: "images/hero.png",          // TODO
    desc: "TODO：填写热血勇者型人格的描述。冲劲十足、永不放弃、脑子不够肌肉来凑……",
    traits: ["永不言弃", "天生领袖", "冲动行事", "感染力超强"],
    compatible: "SAGE",
    incompatible: "DEMON",
  },
  DEMON: {
    code: "DEMON",
    name: "魔王系",
    tagline: "「跪下。」",
    color: "#ef4444",
    emoji: "👑",
    image: "images/demon.png",         // TODO
    desc: "TODO：填写魔王系人格的描述。支配欲强、城府极深、从不轻易暴露真实情感……",
    traits: ["掌控全局", "极度理性", "话少但准", "笑起来让人不安"],
    compatible: "SAGE",
    incompatible: "HERO",
  },
  OTAKU: {
    code: "OTAKU",
    name: "次元宅型",
    tagline: "「二次元才是永远的家。」",
    color: "#38bdf8",
    emoji: "🎮",
    image: "images/otaku.png",         // TODO
    desc: "TODO：填写次元宅型人格的描述。活在二次元、对现实世界冷感、但在自己领域是神……",
    traits: ["番剧百科全书", "社交能量为零", "独处超舒适", "waifu才是真爱"],
    compatible: "YAND",
    incompatible: "HERO",
  },
  SAGE: {
    code: "SAGE",
    name: "贤者型",
    tagline: "「一切皆有因果。」",
    color: "#34d399",
    emoji: "📚",
    image: "images/sage.png",          // TODO
    desc: "TODO：填写贤者型人格的描述。冷静睿智、看透一切但懒得说、是队伍真正的大脑……",
    traits: ["逻辑清晰", "话不多但必中", "淡然处世", "其实啥都知道"],
    compatible: "DEMON",
    incompatible: "OTAKU",
  },
};

/* =====================
   QUESTIONS
   ===================== */
// scores: 每个选项对各类型的加分（不写 = 0）
const QUESTIONS = [
  {
    text: "假期的第一天，你最可能在做什么？",
    options: [
      { text: "窝在家里刷番 / 打游戏，手机静音", scores: { OTAKU: 3, YAND: 1 } },
      { text: "策划一场说走就走的冒险", scores: { HERO: 3, TSUN: 1 } },
      { text: "泡咖啡馆，独自看书或思考人生", scores: { SAGE: 3, DEMON: 1 } },
      { text: "约朋友出来，不管干什么都行", scores: { TSUN: 2, HERO: 1, YAND: 1 } },
    ],
  },
  {
    text: "你被错怪了，你的第一反应是？",
    options: [
      { text: "冷哼一声转身离开，等你自己想清楚", scores: { TSUN: 3, DEMON: 1 } },
      { text: "当场澄清，义正言辞绝不退让", scores: { HERO: 3, SAGE: 1 } },
      { text: "默默记下来，但不会当场说出口", scores: { YAND: 2, DEMON: 2 } },
      { text: "回家发条抽象发言，没人能看懂什么意思", scores: { OTAKU: 3, SAGE: 1 } },
    ],
  },
  {
    text: "你喜欢的人跟别人走近了，你会？",
    options: [
      { text: "死命控制表情，但耳朵已经红透了", scores: { TSUN: 4 } },
      { text: "开始调查那个人的一切背景", scores: { YAND: 4 } },
      { text: "正面决斗（字面意义上）", scores: { HERO: 3, DEMON: 1 } },
      { text: "在脑内演完全剧情，然后啃键盘", scores: { OTAKU: 3, SAGE: 1 } },
    ],
  },
  {
    text: "你的朋友对你的评价最可能是？",
    options: [
      { text: "嘴硬心软，但就是不肯承认", scores: { TSUN: 4 } },
      { text: "对朋友超级好，但感觉有点执着", scores: { YAND: 3, SAGE: 1 } },
      { text: "冲动，但是绝不抛弃队友", scores: { HERO: 3, TSUN: 1 } },
      { text: "神秘，说话总让人猜不透", scores: { DEMON: 3, SAGE: 1 } },
    ],
  },
  {
    text: "在一场团队任务中，你扮演的角色是？",
    options: [
      { text: "嘴上说"随便"，但其实全程带着大家冲", scores: { TSUN: 3, HERO: 1 } },
      { text: "前锋，永远冲在最前面", scores: { HERO: 4 } },
      { text: "军师，在后方掌控全局", scores: { DEMON: 3, SAGE: 1 } },
      { text: "后勤，默默处理所有细节，不求表扬", scores: { YAND: 2, OTAKU: 2 } },
    ],
  },
  {
    text: "深夜 12 点，你通常在做什么？",
    options: [
      { text: "刷动漫 / 看小说，已经忘了睡觉这件事", scores: { OTAKU: 4 } },
      { text: "一个人发呆，思考宇宙和人生意义", scores: { SAGE: 3, DEMON: 1 } },
      { text: "盯着手机，不知道在等谁的消息", scores: { YAND: 3, TSUN: 1 } },
      { text: "已经睡着了，明天还要去冒险", scores: { HERO: 4 } },
    ],
  },
  {
    text: "如果你是动漫里的角色，你的能力类型是？",
    options: [
      { text: "肉体强化系，硬打硬扛，越战越勇", scores: { HERO: 4 } },
      { text: "控制系，操控他人的心理和行为", scores: { YAND: 2, DEMON: 2 } },
      { text: "结界 / 防御系，默默保护所有人", scores: { TSUN: 2, SAGE: 2 } },
      { text: "知识 / 道具系，靠智慧解决一切", scores: { OTAKU: 2, SAGE: 2 } },
    ],
  },
  {
    text: "别人问你"你还好吗"，你的回答是？",
    options: [
      { text: "好的好的，没事（其实有事）", scores: { TSUN: 3, OTAKU: 1 } },
      { text: "我很好，你好就好。（意味深长）", scores: { YAND: 3, DEMON: 1 } },
      { text: "不好！然后详细说出所有问题", scores: { HERO: 3, SAGE: 1 } },
      { text: "沉默三秒，然后反问你", scores: { DEMON: 2, SAGE: 2 } },
    ],
  },
  {
    text: "你对"命运"这个概念的态度是？",
    options: [
      { text: "命运？我会亲手改写它", scores: { HERO: 4 } },
      { text: "命运早已注定，但我是唯一的变量", scores: { DEMON: 3, SAGE: 1 } },
      { text: "只要我们在一起，什么命运都无所谓", scores: { YAND: 3, TSUN: 1 } },
      { text: "命运论……这个设定在二次元里确实很常见", scores: { OTAKU: 3, SAGE: 1 } },
    ],
  },
  {
    text: "被人当众夸了，你会？",
    options: [
      { text: "脸红 + 否认：「才、才没有那么好啦！」", scores: { TSUN: 4 } },
      { text: "微微一笑，从容接受", scores: { DEMON: 3, SAGE: 1 } },
      { text: "立刻燃起斗志，要变得更强", scores: { HERO: 3, TSUN: 1 } },
      { text: "感动两秒，然后把对话截图保存", scores: { YAND: 3, OTAKU: 1 } },
    ],
  },
  {
    text: "有人突然对你很好，你的第一反应是？",
    options: [
      { text: "警惕——他想干什么？", scores: { DEMON: 2, YAND: 2 } },
      { text: "窃喜，但表面装作淡定", scores: { TSUN: 4 } },
      { text: "直接问：你为什么对我好？", scores: { HERO: 3, SAGE: 1 } },
      { text: "感动，开始思考这是不是 flag", scores: { OTAKU: 3, YAND: 1 } },
    ],
  },
  {
    text: "你觉得你在动漫里大概是什么定位？",
    options: [
      { text: "嘴硬的主角挚友，关键时刻挺身而出", scores: { TSUN: 3, HERO: 1 } },
      { text: "主角，开挂的那种", scores: { HERO: 3, DEMON: 1 } },
      { text: "幕后大 boss，从一开始就在下棋", scores: { DEMON: 3, SAGE: 1 } },
      { text: "不重要的配角，但有一幕高光让全网哭了", scores: { OTAKU: 2, YAND: 2 } },
    ],
  },
  {
    text: "你理想中的结局是？",
    options: [
      { text: "和最重要的人在一起，平凡但幸福", scores: { TSUN: 2, YAND: 2 } },
      { text: "完成使命，哪怕一个人", scores: { HERO: 2, DEMON: 2 } },
      { text: "在书海 / 二次元里永远不出来", scores: { OTAKU: 4 } },
      { text: "留下能被后人记住的东西", scores: { SAGE: 3, DEMON: 1 } },
    ],
  },
  {
    text: "你最受不了哪种人？",
    options: [
      { text: "优柔寡断，永远做不了决定的人", scores: { HERO: 2, DEMON: 2 } },
      { text: "没有边界感，什么都往外说的人", scores: { YAND: 2, DEMON: 2 } },
      { text: "不看动漫的普通人（直视）", scores: { OTAKU: 4 } },
      { text: "道貌岸然，表里不一的人", scores: { TSUN: 1, HERO: 1, SAGE: 2 } },
    ],
  },
  {
    text: "最后一题：你觉得自己最像哪句话？",
    options: [
      { text: "「别误会，我只是路过。」（但其实很在乎）", scores: { TSUN: 4 } },
      { text: "「只有我才能守护你。」", scores: { YAND: 4 } },
      { text: "「谁也别想拦我。」", scores: { HERO: 3, DEMON: 1 } },
      { text: "「有趣。」（然后沉默）", scores: { DEMON: 2, SAGE: 2 } },
    ],
  },
];

/* =====================
   APP STATE
   ===================== */
let currentIndex = 0;
let scores = {};

/* =====================
   APP LOGIC
   ===================== */
const App = (() => {
  function _resetScores() {
    scores = {};
    Object.keys(TYPES).forEach(k => (scores[k] = 0));
  }

  function _showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo(0, 0);
  }

  function _renderQuestion(index) {
    const q = QUESTIONS[index];
    const total = QUESTIONS.length;
    const pct = (index / total) * 100;

    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("q-index").textContent = `第 ${index + 1} 题`;
    document.getElementById("q-total").textContent = `/ 共 ${total} 题`;
    document.getElementById("question-text").textContent = q.text;

    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span>${opt.text}</span>`;
      btn.addEventListener("click", () => _selectOption(btn, opt.scores));
      grid.appendChild(btn);
    });
  }

  function _selectOption(btn, optScores) {
    // 防重复点击
    const grid = document.getElementById("options-grid");
    if (grid.dataset.locked) return;
    grid.dataset.locked = "1";

    btn.classList.add("selected");

    // 累加得分
    Object.entries(optScores).forEach(([type, pts]) => {
      scores[type] = (scores[type] || 0) + pts;
    });

    // 短暂延迟后进入下一题或显示结果
    setTimeout(() => {
      currentIndex++;
      if (currentIndex < QUESTIONS.length) {
        _renderQuestion(currentIndex);
        delete grid.dataset.locked;
      } else {
        _showResult();
      }
    }, 320);
  }

  function _calcResult() {
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  }

  function _showResult() {
    const typeKey = _calcResult();
    const t = TYPES[typeKey];

    // 进度条满
    document.getElementById("progress-fill").style.width = "100%";

    // 填充结果卡
    document.getElementById("result-code").textContent = t.code;
    document.getElementById("result-name").textContent = t.name;
    document.getElementById("result-tagline").textContent = t.tagline;
    document.getElementById("result-desc").textContent = t.desc;
    document.getElementById("result-emoji").textContent = t.emoji;
    document.getElementById("compat-good").textContent = t.compatible;
    document.getElementById("compat-bad").textContent = t.incompatible;

    // 动态颜色
    const card = document.getElementById("result-card");
    card.style.setProperty("--type-color", t.color);
    card.style.borderColor = t.color + "40";

    // 特征标签
    const traitsEl = document.getElementById("result-traits");
    traitsEl.innerHTML = "";
    t.traits.forEach(tr => {
      const chip = document.createElement("span");
      chip.className = "trait-chip";
      chip.textContent = tr;
      chip.style.color = t.color;
      chip.style.background = t.color + "18";
      chip.style.borderColor = t.color + "40";
      traitsEl.appendChild(chip);
    });

    // 图片（有就显示，没有就保留 placeholder）
    const slot = document.getElementById("result-image-slot");
    if (t.image) {
      const img = new Image();
      img.src = t.image;
      img.onload = () => {
        slot.innerHTML = "";
        slot.appendChild(img);
      };
      // 加载失败继续显示 placeholder，不报错
    }

    _showScreen("screen-result");
  }

  // ── 公开方法 ──
  function start() {
    currentIndex = 0;
    _resetScores();
    _renderQuestion(0);
    _showScreen("screen-question");
  }

  function retry() {
    start();
  }

  function share() {
    const typeKey = _calcResult();
    const t = TYPES[typeKey];
    const text = `【次元人格测定 · ANITI】\n我的人格类型是：${t.code} ${t.name}\n${t.tagline}\n\n快来测测你是哪种次元属性！`;
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById("toast");
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2200);
    }).catch(() => {
      alert(text);
    });
  }

  return { start, retry, share };
})();
