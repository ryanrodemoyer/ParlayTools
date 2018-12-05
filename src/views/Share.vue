<template>
  <div class="share">
    <h1>ParlayTools.com</h1>
    <h6>Odds calculator for gambling.</h6>
    <hr>
    <p class="text-center">
      <router-link to="/">calculate</router-link>&nbsp;|
      <router-link to="/share">share</router-link>
    </p>
    <DisplayRiskWin/>
    <h3>Your Wagers</h3>
    <div class="row">
      <div
        class="col-6"
        v-for="item in items"
        :key="item.id"
      >{{item.name}} @ {{item.plusminus === '+' ? `+${item.odds}` : `-${item.odds}`}}</div>
    </div>
    <hr>
    <div class="row">
      <DisplayMoneyline/>
      <DisplayFractional/>
      <DisplayDecimal/>
      <DisplayImplied/>
    </div>
  </div>
</template>

<script>
import DisplayMoneyline from "@/components/DisplayMoneyline.vue";
import DisplayImplied from "@/components/DisplayImplied.vue";
import DisplayFractional from "@/components/DisplayFractional.vue";
import DisplayDecimal from "@/components/DisplayDecimal.vue";
import DisplayRiskWin from "@/components/DisplayRiskWin.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DisplayDecimal,
    DisplayImplied,
    DisplayFractional,
    DisplayMoneyline,
    DisplayRiskWin
  },
  computed: {
    ...mapGetters(["items"])
  }
};
</script>
