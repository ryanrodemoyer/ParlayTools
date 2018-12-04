<template>
  <div class="row">
    <div class="col-sm-3">
      <p class="text-center">
        <strong>payout moneyline</strong>
      </p>
      <p class="text-center">{{odds.moneyline}}</p>
    </div>
    <div class="col-sm-3">
      <p class="text-center">
        <strong>payout fractional</strong>
      </p>
      <p class="text-center">{{odds.fractional}}</p>
    </div>
    <div class="col-sm-3">
      <p class="text-center">
        <strong>payout decimal</strong>
      </p>
      <p class="text-center">{{odds.decimal}}</p>
    </div>
    <div class="col-sm-3">
      <p class="text-center">
        <strong>implied odds</strong>
      </p>
      <p class="text-center">{{odds.percentchance}}&#37;</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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
