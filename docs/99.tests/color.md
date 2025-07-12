# 色チューニング

## 通常のテキスト色

<span v-for="color in ['gray', 'theme-color', 'red', 'green', 'blue', 'yellow', 'purple','cyan']">
    <span :class="color+'-text'" style="margin:2em;">test</span>
</span>

## ボールドのテキスト色

<span v-for="color in ['gray', 'theme-color', 'red', 'green', 'blue', 'yellow', 'purple','cyan']">
    <span :class="color+'-text-bold'" style="margin:2em;" >test</span>
</span>

## 強調のテキスト

<span v-for="color in ['gray', 'theme-color', 'red', 'green', 'blue', 'yellow', 'purple','cyan']">
    <span :class="color+'-text-emphasis'" style="margin:2em;">test</span>
</span>

## カラーテーブル

<div v-for="color in ['gray', 'theme-color', 'red', 'green', 'blue', 'yellow', 'purple','cyan']">
    <span v-for="rate in [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]">
        <span :class="color+'-text-bold-'+rate" style="margin:2em;">test</span>
    </span>
</div>

## ソフトテキスト

* normal
* [soft]{.soft-text}
* [x-soft]{.x-soft-text}
* [xx-soft]{.xx-soft-text}
