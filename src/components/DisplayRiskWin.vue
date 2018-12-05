
<template>
  <p class="text-center">Risking ${{odds.risk}} to collect ${{odds.payout}}</p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DisplayRiskWin",
  components: {},
  props: {},
  methods: {},
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["odds"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
