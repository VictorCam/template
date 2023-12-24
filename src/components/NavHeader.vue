<script setup>
function toggleButtonState(e) {
  var button = e.target;
  var isPressed = button.getAttribute("aria-pressed") === "true";
  button.setAttribute("aria-pressed", !isPressed);

  var hamburger = document.querySelector(".svg-hamburger");
  var close = document.querySelector(".svg-close");

  if (isPressed) {
    hamburger.classList.add("transout");
    hamburger.classList.remove("transin");
    close.classList.add("transin");
    close.classList.remove("transout");
  } else {
    hamburger.classList.add("transin");
    hamburger.classList.remove("transout");
    close.classList.add("transout");
    close.classList.remove("transin");
  }
}
</script>

<template>
  <header>
    <div class="svg-bw tmp" />
    <button aria-pressed="false" class="svg-button" aria-label="Hamburger Menu">
      <div class="svg-bw burger" />
    </button>
    <nav>
      <ul>
        <li><a href="#Link1">Link1</a></li>
        <li><a href="#Link2">Link2</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
}

button {
  margin-left: auto;
  background: none;
  border: none;
}

ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

nav {
  margin-right: 10px;
}

.tmp {
  padding: 10px;
}
</style>
