<template>
    <div class="tabs">
        <ul>
            <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tabs = ref([{
    name: "Tab1",
    isActive: true,
    href: "#Tab1",
}, {
    name: "Tab2",
    isActive: false,
    href: "#Tab2",
}]);

const selectTab = (selectedTab) => {
    tabs.value.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
    });
};

</script>


<style scoped>
.tabs {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--black);

}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--black);
}

li {
    margin: 0 10px;
    background: var(--black);
}

a {
    color: var(--white);
    text-decoration: none;
    padding: 10px;
    background: var(--black);
    border-radius: 5px;
    transition: all 0.3s ease;
}

a:hover {
    background: var(--white);
    color: var(--black);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.is-active {
    background: var(--white);
    color: var(--black);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.is-active:hover {
    background: var(--black);
    color: var(--white);
    border-radius: 5px;
    transition: all 0.3s ease;
}
</style>