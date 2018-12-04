<template>
  <div class="parlaytools">
    <p class="text-center">
      <router-link to="/">calculate</router-link>&nbsp;|
      <router-link to="/share">share</router-link>
    </p>

    <table class="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Plus/Minus</td>
          <td class="fullcenter">Odds</td>
          <td class="fullcenter">Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="4" class="text-center">
            <button
              class="btn btn-primary col-sm-12 col-lg-6 col-md-12"
              style="margin-top: 15px;"
              @click="addLegClick"
            >Add Leg</button>
          </td>
        </tr>
        <GridRow v-for="item in items" :itemId="item.id" :key="item.id"/>
      </tbody>
    </table>

    <hr>

    <Odds/>
  </div>
</template>

<script>
import GridRow from "@/components/GridRow.vue";
import Odds from "@/components/Odds.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    GridRow,
    Odds
  },
  props: {
    msg: String
  },
  methods: {
    addLegClick: function() {
      this.$store.commit("addLeg");
    }
  },
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["items"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fullcenter {
  vertical-align: middle;
  text-align: center;
}

.parlaytools {
  text-align: left;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  // grid-gap: 10px;
}

.grid-container > div {
  border-bottom: 1px solid #dee2e6;
}

.pt-table {
  display: table;
}

.grid-header {
  border-bottom: 2px solid #dee2e6;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
