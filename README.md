# ANITI · 次元人格测定

**Anime Nature Identity Type Indicator**

> 15 questions. 6 personality types. Find out which anime archetype you truly are.

[**→ Try it now**](https://dotafs2.github.io/MBTI_anime/)

---

## What is this?

ANITI is a mobile-first anime personality test inspired by the viral [SBTI](https://sbti.unun.dev/) format. Answer 15 scenario-based questions and discover your inner anime archetype — whether you're a tsundere, a yandere, a hot-blooded hero, or something else entirely.

Pure HTML / CSS / JS. No backend. No frameworks. Works on any device.

---

## Personality Types

| Code | Name | Tagline |
|------|------|---------|
| `TSUN` | 傲娇型 Tsundere | "It's not like I did it for you!" |
| `YAND` | 病娇型 Yandere | "I will protect you... forever." |
| `HERO` | 热血勇者型 Hot-blood Hero | "I will never give up!" |
| `DEMON` | 魔王系 Demon Lord | "Kneel." |
| `OTAKU` | 次元宅型 Otaku | "2D is my eternal home." |
| `SAGE` | 贤者型 Sage | "All things have their cause." |

---

## 这是什么？

ANITI 是一个以手机端为主的动漫人格测试，灵感来自病毒式传播的 [SBTI](https://sbti.unun.dev/) 格式。回答 15 道情景题，测出你的二次元人格原型——傲娇、病娇、热血勇者、魔王，还是别的什么。

纯 HTML / CSS / JS，无后端，无框架，任何设备均可运行。

---

## 人格类型

| 代码 | 名称 | 标语 |
|------|------|------|
| `TSUN` | 傲娇型 | 「才、才不是为了你！」 |
| `YAND` | 病娇型 | 「我会永远守护你的……」 |
| `HERO` | 热血勇者型 | 「我绝对不会放弃！」 |
| `DEMON` | 魔王系 | 「跪下。」 |
| `OTAKU` | 次元宅型 | 「二次元才是永远的家。」 |
| `SAGE` | 贤者型 | 「一切皆有因果。」 |

---

## Platform Support

| Platform | Status |
|----------|--------|
| iOS (Safari) | ✅ Primary target |
| Android (Chrome) | ✅ Primary target |
| Windows (Chrome / Edge) | ✅ Supported |
| Desktop Safari / Firefox | ✅ Supported |

---

## Project Structure

```
MBTI_anime/
├── index.html        # Everything — HTML, CSS, and JS are all inline
├── images/           # Personality type images (to be added)
│   └── .gitkeep
└── README.md
```

---

## Customization TODO

All content is in `index.html`. Search for `TODO` to find everything that needs filling in:

- [ ] `TYPES[x].desc` — Write personality descriptions
- [ ] `TYPES[x].traits` — Refine trait tags  
- [ ] `images/` — Add one illustration per personality type
- [ ] Add more questions to `QUESTIONS` array
- [ ] Tune scoring weights in `options[x].scores`

---

## Deploy

This is a static site. No build step required.

**GitHub Pages (recommended)**
1. Push to GitHub
2. Settings → Pages → Deploy from `main` branch `/root`
3. Done: `https://<username>.github.io/<repo>/`

---

## License

For personal / non-commercial use. Content inspired by [SBTI](https://sbti.unun.dev/) (original by [@蛆肉儿串儿](https://space.bilibili.com/) on Bilibili).
