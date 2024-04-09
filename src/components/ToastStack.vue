<template>
    <div class="toast-stack">
        <slot></slot>
    </div>
</template>

<style scoped>
.toast-stack {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 10px;
}
</style>
