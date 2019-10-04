import { mapGetters } from 'vuex';
import listStudySpaceItem from '@/components/studySpace/ListItem'

export default {
  name: 'listStudySpace',
  components: {
    "list-item" : listStudySpaceItem
  },
  props: [],
  data () {
    return {
      itemList : []

    }
  },
  created(){
    this.getStudySpaceList()
  },
  computed: {
    ...mapGetters({
      grandParents: 'getGrandParent',
      parents: 'getParent',
      children: 'getChild',
    })
  },
  mounted () {

  },
  methods: {
    getParent(grandParentId) {
      let returnVal = this.parents.filter(item => item.parent_id == grandParentId)
      return returnVal
    },
    getChild(parentId) {
      let returnVal = this.children.filter(child => child.parent_id == parentId)
      return returnVal
    },
    getStudySpaceList () {
      this.$store.dispatch("LIST_STUDY_SPACE")
          .then(({data:{code} , data:{data:{requests}}}) => {
            if (code === 20000 ){
              let temp = []

              requests.map(v => {
                temp.push(v)
              })

              this.itemList = temp;
              console.log(temp)
            }

          }).catch(err=> {
            console.log(err)
      })
    }
  }
}
