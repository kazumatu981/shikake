<script setup lang="ts">
defineProps({
    iconName: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <i :class="`${iconName} ${className}`" />
</template>
