<script setup>
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import { onMounted } from 'vue'



onMounted(() => {
    // Create the SVG element
    let content = document.querySelector('.content');
    var draw = SVG().addTo('body').size(500, 500);

    // Define circle properties
    var radius = 10;
    var offset = 50;

    // Create the circles
    var circle1 = draw.circle(radius * 2).move(100, 500).center(offset, offset);
    circle1.fill('#f00');
    circle1.draggable(true);

    var circle2 = draw.circle(radius * 2).center(offset * 3, offset);
    circle2.fill('#00f');
    circle2.move(100, 100);
    circle2.draggable(true);

    // **Curve declaration with initial empty path:**
    var curve = draw.path('');

    function updateCurve() {
        var x1 = circle1.attr('cx');
        var y1 = circle1.attr('cy');
        var x2 = circle2.attr('cx');
        var y2 = circle2.attr('cy');

        // **Control point calculation with potential adjustments:**
        var cx = (x1 + x2) / 2; // Control point at midpoint of centers
        var cy = (y1 + y2) * 0.75; // Adjust control point vertically for curve


        // **Curve path using quadratic Bézier (Q)**
        var path = 'M' + x1 + ',' + y1 + 'Q' + cx + ',' + cy + ' ' + x2 + ',' + y2;

        // **Set curve attributes:**
        curve.attr('d', path); // Update path data
        curve.fill('none'); // Transparent fill (avoid black fill)
        curve.stroke('#fff'); // White stroke
    }

    // **Attach event listeners for dynamic curve updates:**
    circle1.on('dragmove.start', updateCurve, { passive: true });
    circle2.on('dragmove.start', e => {
        updateCurve();

    }, "", { passive: true });

    // **Add elements to the SVG (including curve):**
    draw.add(circle1);
    draw.add(circle2);
    draw.add(curve);

    // Call updateCurve initially to display the curve:
    updateCurve();
})
</script>


<template>
    <div class="content">
    </div>
</template>

<style scoped></style> 