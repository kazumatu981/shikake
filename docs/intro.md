<!-- markdownlint-disable-file MD003 -->
<!-- markdownlint-disable-file MD022 -->
<!-- markdownlint-disable-file MD024 -->

# はじめに

## システムとソフトウェア

ソフトウェアって何でしょう？
おそらく多くの人は、C言語やJava、JavaScript、Python といったいわゆるプログラミングのことを想像するかもしれません。
もちろん、それも立派なソフトウェアです。でも、そもそも何だったかというというと、もっと[広い意味を持っています]{.blue-text}。

少し視点を変えて、建物を建てる建築工学の分野で、[ソフトウェア]{.green-text}はどういう意味で使われているでしょうか。
建築工学の分野では、建物の基礎や建物そのものを設計開発することを「ハードウェアの設計開発」といい、

* その場所(ファシリティ)をどのように使うか
* どういう組織を構成すればよいか
* 組織同士がどういう契約を結んでおけば問題ないか

といった、世の中の [しかけの実装]{.red-text-emphasis} をソフトウェアと呼ぶそうです。

この話を踏まえて、システムとソフトウェアを本書では以下のように再定義します。

::container
---
icon: fa-solid fa-spell-check
title: 定義 - システム
color: green
---

システムとは、社会または、社会の一部を効率的に動作させるための機構(しかけ)や考え方のことをいう

::

::container
---
icon: fa-solid fa-spell-check
title: 定義 - ソフトウェア
color: green
---

ソフトウェアとは、システムを実現するために何らかの言語で言語化したものをいう

::

ここまで厳密な定義をする必要はない。大体同じようなものだと思ってもらってもよい。
[筆者は、言葉を定義しないと落ち着かない性分なので、あらためて再整理してみた。]{.x-soft-text}

## ソフトウェア開発のむずかしさ

* %fa-solid fa-eye-low-vision%(.blue-text) 不可視
* %fa-solid fa-wind%(.blue-text) 複雑
* %fa-brands fa-bluesky%(.blue-text) 変更容易
* %fa-solid fa-users%(.blue-text) 社会適合

### %fa-solid fa-eye-low-vision%(.blue-text) 不可視: かたちがみえない

ソフトウェアは形がみえない。
形がみえないので、

### %fa-solid fa-wind%(.blue-text) 複雑: そもそも複雑
### %fa-brands fa-bluesky%(.blue-text) 変更容易: ちょっと触っただけでとても変わってしまう
### %fa-solid fa-users%(.blue-text) 社会適合: 周囲の変更に適合していく必要がある

## むずかしさに対するアプローチ

## 本書が目指そうとしていること

::container
---
icon: fa-solid fa-crosshairs
title: 目標
color: cyan
---

* 世の中の [システム]{.red-text-bold} を実現する [ソフトウェア]{.red-text-bold} の表現方法のひとつ( `Shikake` )を提案する。
* いくつかの [システム]{.red-text-bold} を例に挙げ `Shikake` で記述することでその有用性を示す。

::
