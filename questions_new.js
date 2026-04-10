/* ── 题目列表 ── */
const QUESTIONS = [
  {
    text: "如果你获得了毁灭世界的力量，你会？",
    options: [
      { text: "先毁灭，再以神的身份重建一个新秩序", scores: { DIO: 4 } },
      { text: "用它来守护每一个无辜之人", scores: { SABER: 4 } },
      { text: "研究一下这个力量的原理再说", scores: { SABER: 2, DIO: 1 } },
      { text: "没有任何人值得拥有这个力量，包括我自己", scores: { SABER: 3 } },
    ],
  },
  {
    text: "你最信任的人背叛了你，你会？",
    options: [
      { text: "从一开始就没有信任过任何人", scores: { DIO: 4 } },
      { text: "痛苦，但选择正面解决，重新审视自己的判断", scores: { SABER: 4 } },
      { text: "背叛意味着丧失资格，将对方彻底清除", scores: { DIO: 3 } },
      { text: "要求正面对决，我不搞阴谋", scores: { SABER: 3, DIO: 1 } },
    ],
  },
  {
    text: "路上看到有人被欺负，你的真实反应是？",
    options: [
      { text: "冲上去，正义不需要理由", scores: { SABER: 4 } },
      { text: "弱者被淘汰，这不是自然法则吗", scores: { DIO: 4 } },
      { text: "控制局面，让施暴者在最差时机就范", scores: { DIO: 2, SABER: 1 } },
      { text: "保护弱者是一时的，我想改变让这种事不再发生的世界", scores: { SABER: 3 } },
    ],
  },
  {
    text: "你日常做决定的方式最接近？",
    options: [
      { text: "按内心的原则和誓言，即使不利于自己", scores: { SABER: 4 } },
      { text: "对自己最有利的选择，永远如此", scores: { DIO: 4 } },
      { text: "算出每种情况的最优解，然后执行", scores: { DIO: 2, SABER: 1 } },
      { text: "遵守规则，哪怕规则让人痛苦", scores: { SABER: 3 } },
    ],
  },
  {
    text: "你如何看待「身为王者的孤独」？",
    options: [
      { text: "孤独是王者的命运，我承担", scores: { SABER: 3, DIO: 1 } },
      { text: "孤独？我不需要任何人", scores: { DIO: 4 } },
      { text: "身边的所有人不过是棋子，孤独本就如此", scores: { DIO: 3 } },
      { text: "孤独而善，比被背叛好得多", scores: { SABER: 4 } },
    ],
  },
  {
    text: "在战斗中你快要输了，你会？",
    options: [
      { text: "站起来，再站起来，直到赢为止", scores: { SABER: 4 } },
      { text: "输？这个字不在我的词典里。（使用隐藏底牌）", scores: { DIO: 4 } },
      { text: "承认弱点，重新审视自己的剩余实力", scores: { SABER: 3 } },
      { text: "不弄轻巧，我要以累积的力量慢慢砖压你", scores: { DIO: 3, SABER: 1 } },
    ],
  },
  {
    text: "你怎么看待「笔下败将」这个概念？",
    options: [
      { text: "无论输赢都要堂堂正正，败了就是败了", scores: { SABER: 4 } },
      { text: "没有败将，只有还没出手的赛策", scores: { DIO: 4 } },
      { text: "失败是不可接受的，将以任何方式逆转", scores: { DIO: 3 } },
      { text: "我不怕输，但我不允许小人行为赢", scores: { SABER: 3 } },
    ],
  },
  {
    text: "深夜 3 点，你脑子里在想什么？",
    options: [
      { text: "我有没有真正守护到该守护的人", scores: { SABER: 4 } },
      { text: "明天的计划，以及谁该被清除出局", scores: { DIO: 4 } },
      { text: "所有人都在按照我设计的路线行走吗", scores: { DIO: 3 } },
      { text: "代价太大了，是否还有别的方法能不让任何人受伤", scores: { SABER: 3 } },
    ],
  },
  {
    text: "一个强大的敌人告诉你：「你的信念是累赘」。你的回应？",
    options: [
      { text: "信念是我的力量源泉，不是弱点", scores: { SABER: 4 } },
      { text: "想好了吗？一个人可以没有感情，不能没有力量", scores: { DIO: 4 } },
      { text: "我不需要辩解，我会用结果证明一切", scores: { SABER: 3, DIO: 1 } },
      { text: "有趣。我希望你在确信这一点的时候再说", scores: { DIO: 3 } },
    ],
  },
  {
    text: "你对「现在的自己」的评价是？",
    options: [
      { text: "还不够强，我下一步的论证就是我自己", scores: { DIO: 3, SABER: 1 } },
      { text: "没有完成誓言之前，我不评价自己", scores: { SABER: 4 } },
      { text: "我就是标准，不需要外部评价", scores: { DIO: 4 } },
      { text: "我在进步，虽然很慢，但方向没错", scores: { SABER: 3 } },
    ],
  },
  {
    text: "有人在众人面前嘲笑你，你会？",
    options: [
      { text: "微笑着记住这个人的名字。他会后悔的", scores: { DIO: 4 } },
      { text: "不作声色，但内心将此当作驱动自己的燃料", scores: { SABER: 3, DIO: 1 } },
      { text: "当场回击，骂得对方说不出话", scores: { SABER: 2, DIO: 2 } },
      { text: "我不证明自己，见过我行动的人自然会明白", scores: { SABER: 4 } },
    ],
  },
  {
    text: "你心目中「胜利」的定义是？",
    options: [
      { text: "堂堂正正地赢，才是真正的胜利", scores: { SABER: 4 } },
      { text: "赢就是赢，手段不重要", scores: { DIO: 3 } },
      { text: "让对手心服口服地输，才算赢得彻底", scores: { SABER: 3, DIO: 1 } },
      { text: "把对手踩在脚下，永远无法翻身", scores: { DIO: 4 } },
    ],
  },
  {
    text: "你想被记住的方式是？",
    options: [
      { text: "作为守护者，永远站在人们面前", scores: { SABER: 4 } },
      { text: "作为绝对的王，让历史铭记恐惧", scores: { DIO: 4 } },
      { text: "不在乎被记住，只在乎是否完成誓言", scores: { SABER: 3 } },
      { text: "改变了这个世界的秩序", scores: { DIO: 3 } },
    ],
  },
  {
    text: "你认为「道德」是？",
    options: [
      { text: "无论何时都不可越越的底线", scores: { SABER: 4 } },
      { text: "强者给弱者设置的枷锁", scores: { DIO: 4 } },
      { text: "在底线之上灵活变通，看情况而定", scores: { SABER: 2, DIO: 1 } },
      { text: "我就是规则", scores: { DIO: 3, SABER: 1 } },
    ],
  },
  {
    text: "最后一题：你骨子里最相信的一句话？",
    options: [
      { text: "「即使没有人看见，我也会做正确的事。」", scores: { SABER: 4 } },
      { text: "「这个世界，终将是我的。」", scores: { DIO: 4 } },
      { text: "「誓言一旦立下，就必须用生命守护。」", scores: { SABER: 3 } },
      { text: "「跨越天天与地地，我名为 DIO。」", scores: { DIO: 3 } },
    ],
  },
];
