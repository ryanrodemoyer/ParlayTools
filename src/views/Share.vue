<template>
  <div class="share">
    <h1>ParlayTools.com</h1>
    <h6>Odds calculator for gambling.</h6>
    <hr>
    <p class="text-center">
      <router-link to="/">calculate</router-link>&nbsp;|
      <router-link to="/share">share</router-link>
    </p>
    <Odds/>
  </div>
</template>

<script>
import Odds from "@/components/Odds.vue";

export default {
  components: {
    Odds
  }
};
</script>
