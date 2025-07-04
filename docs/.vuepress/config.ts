import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
    lang: 'ja-JP',
    base: '/shikake/',
    title: 'しかけ',
    bundler: viteBundler(),
    theme: defaultTheme({
        sidebar: [
            {
                text: 'home',
                link: '/',
            },
            {
                text: '世の中の仕掛けを図に表現しよう',
                link: '/getting-started/',
            },
            {
                text: 'どうやって書くの',
                children: [
                    {
                        text: 'どう使われるかを書く',
                        link: '/usecase/',
                    },
                    {
                        text: 'システムのカタチを書く',
                        link: '/static/',
                    },
                    {
                        text: 'システムの動きを書く',
                        link: '/dynamic/',
                    },
                ],
            },
            {
                text: 'サンプル',
                link: '/samples/',
            },
        ],
    }),
});
