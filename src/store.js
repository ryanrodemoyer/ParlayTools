import Vue from 'vue'
import Vuex from 'vuex'

import Math from 'mathjs'

Vue.use(Vuex)

const defaultOdds = {
  moneyline: 0,
  decimal: 0,
  fractional: 0,
  percentchance: 0,
}

const actions = {

};

const mutations = {
  addLeg(state) {
    let maxId = 0;

    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id > maxId) {
        maxId = state.items[i].id;
      }
    }

    const nextId = maxId + 1;

    state.items.push({
      id: nextId,
      name: 'Leg ' + nextId,
      plusminus: '-',
      odds: 200
    });
  },
  updateLegOdds(state, context) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === context.id) {
        Vue.set(state.items[i], 'odds', Number(context.odds))
      }
    }
  },
  updateLegPlusMinus(state, context) {
    let item = state.items.find(x => x.id === context.id);

    Vue.set(item, 'plusminus', context.plusminus);
  },
  deleteLeg(state, id) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === id) {
        state.items.splice(i, 1);
      }
    }
  }
}

const getters = {
  items(state) {
    return state.items;
  },
  getItemById: (state) => (id) => {
    return state.items.find((i) => i.id === id);
  },
  odds(state) {
    if (state.items.length === 0) {
      return defaultOdds;
    }

    let decimalOdds = 1;

    state.items.forEach(x => {

      let thisdecimal = 0;
      switch (x.plusminus) {
        case '+':
          thisdecimal = (100 + x.odds) / 100;
          break;
        case '-':
          thisdecimal = (100 + x.odds) / x.odds;
          break;
      }

      decimalOdds *= thisdecimal;
    });

    const american = decimalOdds >= 2 ?
      (decimalOdds - 1) * 100 :
      -100 / (decimalOdds - 1)

    const impliedodds = 100 / (100 * decimalOdds);

    return {
      risk: 100,
      payout: (100 * decimalOdds).toFixed(2),
      decimal: decimalOdds.toFixed(2),
      moneylineActual: american.toFixed(0),
      moneyline: american > 0 ? `+${american.toFixed(0)}` : american.toFixed(0),
      percentchanceDecimal: impliedodds.toFixed(4),
      percentchance: (impliedodds * 100).toFixed(2),
      fractional: Math.format(Math.fraction(decimalOdds.toFixed(2) - 1), { fraction: 'ratio' })
    }
  }
};

const defaultItem = {
  id: 1,
  name: 'Leg 1',
  plusminus: '-',
  odds: 125,
};

const defaultItems = [
  defaultItem,
];

const state = {
  items: defaultItems,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
