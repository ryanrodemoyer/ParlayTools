<template>
  <div class="home">
    <h1>ParlayTools.com</h1>
    <h6>Odds calculator for gambling.</h6>
    <hr>
    <ParlayTools/>
  </div>
</template>

<script>
import ParlayTools from "@/components/ParlayTools.vue"; // @ is an alias to /src

export default {
  name: "home",
  components: {
    ParlayTools
  }
};
</script>
