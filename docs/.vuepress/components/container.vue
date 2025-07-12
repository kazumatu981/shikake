///////////////////////////////////////////////////////////////////////////////
/// container component /// アイコンとタイトルがついたコンテナ部品
///////////////////////////////////////////////////////////////////////////////

<script setup lang="ts">
defineProps({
    // fontawsome アイコン名
    // 例: 'fas fa-info-circle'
    icon: {
        type: String,
        required: true,
    },
    // コンテナのタイトル
    // 例: '情報'
    title: {
        type: String,
        required: true,
    },
    // コンテナの色
    // 例: 'blue', 'red', 'green' など
    color: {
        type: String,
        default: 'blue',
    },
});
</script>

<style lang="scss" scoped>
// コンテナのスタイル
.container {
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.5rem;

    // コンテナのヘッダ
    .container-header {
        margin-bottom: 0.5rem;

        // アイコン
        i {
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
        // タイトル
        .container-title {
            font-size: 1.2rem;
        }
    }
}
</style>

<template>
    <div :class="`container ${color}-bg-30`">
        <!-- コンテナヘッダ -->
        <div :class="`container-header ${color}-text-bold`">
            <i :class="`${icon}`" />
            <span class="container-title">{{ title }}</span>
        </div>
        <!-- コンテナボディ -->
        <div class="container-body">
            <div class="container-content">
                <slot />
            </div>
        </div>
    </div>
</template>
