<template>
  <tr>
    <td>{{localItemName}}</td>
    <td class="full-center">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          :name="radioname"
          :id="radioname"
          value="+"
          v-model="localItemPlusMinus"
          @change="plusminusBlur"
        >
        <label class="form-check-label" :for="radioname">+</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          :name="radioname"
          :id="radioname"
          value="-"
          v-model="localItemPlusMinus"
          @change="plusminusBlur"
        >
        <label class="form-check-label" :for="radioname">-</label>
      </div>
    </td>
    <td class="fullcenter">
      <!-- <div class="col-sm-1"> -->
      <input
        type="tel"
        :name="oddsname"
        :id="oddsname"
        v-model="localItemOdds"
        @blur="oddsBlur"
        size="5"
      >
      <!-- </div> -->
    </td>
    <td class="fullcenter">
      <div style="margin-bottom: 2px;">
        <!-- <button type="button" class="btn btn-danger" v-if="oddsname === 'odds1'" disabled>Delete</button> -->
        <button
          type="button"
          class="btn btn-danger"
          :disabled="oddsname === 'odds1'"
          @click="deleteClick"
        >Delete</button>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

const namespace = "parlay";

export default {
  name: "GridRow",
  props: {
    itemId: 0
  },
  data: function() {
    return {
      localItem: {},
      localItemId: 0,
      localItemName: "default",
      localItemPlusMinus: "-",
      localItemOdds: 200
    };
  },
  methods: {
    deleteClick: function() {
      this.$store.commit("deleteLeg", this.localItemId);
    },
    oddsBlur: function() {
      this.$store.commit("updateLegOdds", {
        id: this.localItemId,
        odds: this.localItemOdds
      });
    },
    plusminusBlur: function() {
      this.$store.commit("updateLegPlusMinus", {
        id: this.localItemId,
        plusminus: this.localItemPlusMinus
      });
    }
  },
  computed: {
    ...mapGetters(["getItemById"]),
    radioname: function() {
      return "plusminus" + this.getItemById(this.itemId).id;
    },
    oddsname: function() {
      return "odds" + this.getItemById(this.itemId).id;
    }
  },
  created: function() {
    const i = this.$store.getters.getItemById(this.itemId);

    this.$set(this, "localItemId", i.id);
    this.$set(this, "localItemName", i.name);
    this.$set(this, "localItemPlusMinus", i.plusminus);
    this.$set(this, "localItemOdds", i.odds);
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
