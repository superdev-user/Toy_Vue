import { mapGetters } from 'vuex';

export default {
  name: 'addCategory',
  components: {},

  data() {

    if(!localStorage.userAccessToken){
      this.$router.push('/');
    }

    return {
      selectedCategory1: '',
      selectedCategory2: '',
      selectedCategory3: '',
      category1: '',
      category2: '',
      category3: '',
    }
  },
  computed: {
    getCategory2() {
      if(this.selectedCategory1 != '') {
        let returnVal = this.getCategory2List.filter(item => item.parent_id == this.selectedCategory1)
        return returnVal
      } else {
        return []
      }
    },
    getCategory3() {
      if(this.selectedCategory2 != '') {
        let returnVal = this.getCategory3List.filter(item => item.parent_id == this.selectedCategory2)
        return returnVal
      } else {
        return [];
      }
    },
    ...mapGetters({
      getCategory1List: 'getGrandParent',
      getCategory2List: 'getParent',
      getCategory3List: 'getChild',
    })
  },
  methods: {
    setCategory1: function (event) {
      if (event) {
        this.selectedCategory1 = event.target.id
      }
    },
    setCategory2: function (event) {
      if (event) {
        this.selectedCategory2 = event.target.id
      }
    },
    setCategory3: function (event) {
      if (event) {
        this.selectedCategory3 = event.target.id
      }
    },
    newCategory1() {
      this.$store.dispatch('addNewCategory1', this.category1)
    },
    newCategory2() {
      this.$store.dispatch('addNewCategory2', {
        parent_id: this.selectedCategory1,
        label: this.category2,
      })
    },
    newCategory3() {
      this.$store.dispatch('addNewCategory3', {
        parent_id: this.selectedCategory2,
        categoryName: this.category3,
      })
    },
  },
}
