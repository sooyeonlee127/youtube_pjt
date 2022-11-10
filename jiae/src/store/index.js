import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [{
      title: 'Americano',
      price: 4500,
      selected: false,
      image: 'https://source.unsplash.com/featured/?americano'
    },
    {
      title: 'Lemonade',
      price: 6000,
      selected: false,
      image: 'https://source.unsplash.com/featured/?lemonade'
    },
    {
      title: 'Cafemocha',
      price: 5000,
      selected: false,
      image: 'https://source.unsplash.com/featured/?cafemocha'
    }],
    sizeList: [
      {
        name: 'tall',
        price: '500',
        selected: false
      },
      {
        name: 'grande',
        price: '1000',
        selected: false
      },
      {
        name: 'venti',
        price: '1500',
        selected: false
      }
    ],
    optionList : [
      {
        name: '샷',
        counter: 0,
      },
      {
        name: '바닐라 시럽',
        counter: 0,
      },
      {
        name: '카라멜 시럽',
        counter: 0,
      }
    ]
  },
  getters: {
    
  },
  mutations: {
    addOrder: function () {
    },
    updateMenuList: function () {
    },
    updateSizeList: function () {
    },
    CHANGE_SELECTED: function (state, menu) {
      state.menuList = state.menuList.map((menuItem) => {
        if (menu === menuItem) {
          menuItem.selected = !menuItem.selected 
          console.log(this.state.menuList)

        }
        return menuItem
      })
    },
    CHANGE_SELECTED_SIZE: function (state, size) {
      state.sizeList = state.sizeList.map((sizeItem) => {
        if (size === sizeItem) {
          sizeItem.selected = !sizeItem.selected 
          console.log(this.state.sizeList)

        }
        return sizeItem
      })
    },
    INCREASE(state, option) {
      state.optionList = state.optionList.map((optionItem) => {
        if (optionItem === option) {
          optionItem.counter++
        }
        return optionItem
      })
    },
    DECREASE(state, option) {
      state.optionList = state.optionList.map((optionItem) => {
        if (optionItem === option) {
          optionItem.counter--
        }
        return optionItem
      })
    },
    CART(state) {
      const menu = state.menuList.filter((menu) => {
        if (menu.selected === true) {
          return menu
        }
      })

      const cart = {
        title: menu[0].title,
        price: menu[0].price,

      }

      state.orderList.push(cart)
    }
  },
  actions: {
    changeSelected(context, menu) {
      context.commit('CHANGE_SELECTED', menu)
    },
    changeSelected_size(context, size) {
      context.commit('CHANGE_SELECTED_SIZE', size)
    },
    increase(context, option) {
      context.commit('INCREASE', option)
    },
    decrease(context, option) {
      context.commit('DECREASE', option)
    },
    cart(context) {
      context.commit('CART')

    }

  },
  modules: {
  }
})