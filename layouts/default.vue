<template>
  <div id="bird">
    <div class="container">
      <h1>Yunosuke Yoshino</h1>
      <p class="subtitle">FrontEnd-Developer</p>
      <div class="content">
        <Header />
        <main class="content__main">
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    VANTA.TOPOLOGY({
      el: '#bird',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x2ede99,
      backgroundColor: 0x66e30,
    })
  },
}
</script>
