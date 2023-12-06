<template>
  <section>
    <div class="hero">
      <div class="container">
        <h1 class="semi-trasnparent-text">Blog Estudo da Lei</h1>
      </div>
      <div class="canvas-container">
        <canvas id="canv" width="32" height="32"></canvas>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";


onMounted(()=> {
  var c = document.getElementById('canv');
  var $ = c.getContext('2d');


  var col = function(x, y, r, g, b) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    $.fillRect(x, y, 1,1);
  }
  var R = function(x, y, t) {
    return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
  }

  var G = function(x, y, t) {
    return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
  }

  var B = function(x, y, t) {
    return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
  }

  var t = 0;
  var x;
  var y;

  var run = function() {
    for(x=0;x<=35;x++) {
      for(y=0;y<=35;y++) {
        col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
      }
    }
    t = t + 0.01;
    window.requestAnimationFrame(run);
  }

  run();
})

</script>

<style lang="scss" scoped>
.hero{
  position: relative;
  padding: 1em;
  isolation: isolate;
}
.container{
  --max-width: 50rem;
  width: min(100% - 2rem, var(--max-width));
  margin-inline: auto;
  display: flex;
  align-items: end;
  height: 35vh;
}
.semi-trasnparent-text{

}
h1{
  line-height: 1.1;
  font-size: 5rem;
  max-width: 10ch;
}
.canvas-container{
  position: absolute;
  z-index: -1;
  inset: 0;
  height: 40vh;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 100% );
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
