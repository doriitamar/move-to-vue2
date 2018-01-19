<template>
    <div>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <input class="input is-rounded is-primary" type="text" placeholder="filter convoies" v-model="search">
            </div>
        </div>
        <div class="columns">
                <div class="column is-8 is-offset-2">
                    <convoy-table :properties="convoyBrief"
                                    :data="briefedConvoies"
                                    :filter-key="search">
                    </convoy-table>
                </div>
        </div>
        <div class="columns"  v-if="selectedConvoy">
            <div class="column is-8 is-offset-2">
                <convoy-description :properties="convoyProp"
                                    :convoy="selectedConvoy"
                                    @close:description="selectedConvoy = undefined">
                </convoy-description>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ConvoyTable from '../components/ConvoyTable.vue';
import ConvoyDescription from '../components/ConvoyDescription.vue';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: { ConvoyTable, ConvoyDescription },
  data () {
    return {
        search: ''
    }
  },
  computed: {
    briefedConvoies() {
          return this.convoies.map(x => {
              x.startDate = new Date(parseInt(x.startDate)).toLocaleString();
              x.finishDate = new Date(parseInt(x.finishDate)).toLocaleString();
              return x;
          })
      },
      
      ...mapState([
        "convoies",
        "convoyBrief",
        "convoyProp",
        "selectedConvoy"
      ])
    },
    created() {
        this.$store.dispatch('loadData');
    }
  }
</script>

<style>

</style>
