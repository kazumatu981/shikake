import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import MarkdownItMdc from 'markdown-it-mdc';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from 'vuepress/utils';

const __dirname = import.meta.dirname || getDirname(import.meta.url);

export default defineUserConfig({
    // Site configuration
    base: '/shikake/',
    lang: 'ja-JP',
    title: 'しかけ',
    description: '世の中の仕掛けを図に表現するためのツール',
    head: [
        // font-awesome
        [
            'script',
            {
                src: 'https://kit.fontawesome.com/df9e5b1dd2.js',
                crossorigin: 'anonymous',
            },
        ],
        ['link', { rel: 'icon', href: '/shikake/favicon.ico' }],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0',
            },
        ],
    ],
    locales: {
        '/': {
            lang: 'ja-JP',
            title: 'しかけ',
            description: '世の中の仕掛けを図に表現するためのツール',
        },
    },
    // Theme configuration
    theme: defaultTheme({
        navbar: [
            {
                text: 'test',
                link: '/99.tests/',
            },
        ],
        sidebar: [
            {
                text: 'home',
                link: '/',
            },
            {
                text: '世の中の仕掛けを図に表現しよう',
                link: '/1.getting-started/',
            },
            {
                text: 'どうやって書くの',
                link: '/2.howto/',
                children: [
                    {
                        text: 'どう使われるかを書く',
                        link: '/2.howto/usecase/',
                        children: [
                            {
                                text: 'ユースケース図の文法',
                                link: '/2.howto/usecase/semantics.html',
                            },
                        ],
                    },
                    {
                        text: 'システムのカタチを書く',
                        link: '/2.howto/static/',
                    },
                    {
                        text: 'システムの動きを書く',
                        link: '/2.howto/dynamic/',
                    },
                ],
            },
            {
                text: 'サンプル',
                link: '/3.samples/',
            },
        ],
    }),
    // Bundler configuration
    bundler: viteBundler(),
    // common configuration
    dest: 'dist',
    temp: 'docs/.vuepress/.temp',
    cache: 'docs/.vuepress/.cache',
    public: 'docs/.vuepress/public',
    pagePatterns: [
        '**/*.md',
        '!**/README.md',
        '!node_modules',
        '!docs/.vuepress',
        '!docs/.vuepress/**/*',
    ],
    // Markdown configuration
    extendsMarkdown: (md) => {
        md.use(MarkdownItMdc);
    },
    // Plugins configuration
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
});
