<template>
    <div class="test grid grid-auto-flow-col gap-20 justify-center">
        <div class="slide bg-green"> 0 </div>
        <div class="slide bg-blue"> 1 </div>
        <div class="slide bg-red"> 2 </div>
        <div class="slide bg-amber"> 3 </div>
        <div class="slide bg-violet"> 4 </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (!entry.isIntersecting) {
    //             const slideText = entry.target.textContent.trim();
    //             console.log(`Slide not showing up: ${slideText}`);
    //             // check if last slide in .test is already at the end.

    //             let lastItem = document.querySelector('.slide:last-child');

    //             console.log("test", lastItem.textContent.trim(), '==', slideText, lastItem.textContent.trim() == slideText)
    //             if (lastItem.textContent.trim() == slideText) {
    //                 // grab the first slide remove it and add it to the end
    //                 let firstItem = document.querySelector('.slide:first-child');
    //                 // clone the firstItem
    //                 firstItem = firstItem.cloneNode(true);
    //                 document.querySelector('.test').appendChild(firstItem);
    //             }
    //         }
    //     });
    // }, {
    //     threshold: 0
    // });

    // // Observe each slide element
    // let slides = document.querySelectorAll('.slide');
    // slides.forEach(slide => {
    //     // console.log(slide)
    //     observer.observe(slide);
    // });

    // if the scrollbar reachest halfway move half of the slides to the end
    let slides = document.querySelectorAll('.slide');
    let test = document.querySelector('.test');

    test.addEventListener('scroll', () => {
        if (test.scrollLeft > test.scrollWidth / 2) {
            console.log('halfway')
        }
    })
});
</script>


<style scoped>
.test {
    overflow-x: scroll;
}

.slide {
    width: 200px;
    height: 200px;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    scroll-snap-align: start;
}
</style>