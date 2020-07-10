<template>
  <div id="app">
    <app-nav />
    <router-view class="page" />
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  components: { 
    AppNav 
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap');

// Set your colors
$primary: #596e79;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
$greyblue : #596e79;
$greyblue-invert: findColorInvert($greyblue);
$beige1: #f0ece3;
$beige2: #dfd3c3;
$beige3: #c7b198;
$beige3-invert: findColorInvert($beige3);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert),
    "greyblue": ($greyblue, $greyblue-invert),
    "beige3": ($beige3, $beige3-invert)

);
// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $greyblue;

$input-hover-color: $greyblue;
$input-hover-border-color: $greyblue;
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

html,
body,
section{
  background-color: #f0ece3;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}
</style>
