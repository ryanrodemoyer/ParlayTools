<template>
  <div class="share">
    <h1>ParlayTools.com</h1>
    <h6>Odds calculator for gambling.</h6>
    <hr>
    <p class="text-center">
      <router-link to="/">calculate</router-link>&nbsp;|
      <router-link to="/share">share</router-link>
    </p>
    <div class="row">
      <div class="col-6 text-center">
        <ol>
          <li
            v-for="item in items"
            :key="item.id"
          >{{item.name}} @ {{item.odds > 0 ? `+${item.odds}` : item.odds}}</li>
        </ol>
      </div>
      <div class="col-6 text-center">
        <display-moneyline/>
        <display-fractional/>
        <display-decimal/>
        <display-implied/>
      </div>
    </div>
  </div>
</template>

<script>
import DisplayMoneyline from "@/components/DisplayMoneyline.vue";
import DisplayImplied from "@/components/DisplayImplied.vue";
import DisplayFractional from "@/components/DisplayFractional.vue";
import DisplayDecimal from "@/components/DisplayDecimal.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DisplayDecimal,
    DisplayImplied,
    DisplayFractional,
    DisplayMoneyline
  },
  computed: {
    ...mapGetters(["items"])
  }
};
</script>
