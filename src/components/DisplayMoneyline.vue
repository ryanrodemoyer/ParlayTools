<template>
  <div class="col-sm-3 col-6">
    <p class="text-center">
      <strong>payout moneyline</strong>
    </p>
    <p class="text-center">{{odds.moneyline}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DisplayMoneyline",
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
.fullcenter {
  vertical-align: middle;
  text-align: center;
}
</style>
