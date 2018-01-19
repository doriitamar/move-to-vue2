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
                                    :filter-key="search"
                                    @choose:convoy="con => selectedConvoy = con">
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

export default {
  name: 'home',
  components: { ConvoyTable, ConvoyDescription },
  data () {
    return {
        search: '',
        sortKey: '',
        selectedConvoy: undefined,
        convoyBrief: [],
        convoyProp: [],
        convoies: []
    }
  },
  computed: {
    briefedConvoies() {
          return this.convoies.map(x => {
              x.startDate = new Date(parseInt(x.startDate)).toLocaleString();
              x.finishDate = new Date(parseInt(x.finishDate)).toLocaleString();
              return x;
          })
      }
    },
    created() {
        axios.get("/src/assets/convoies.json").then(({data}) => this.convoies = data)
                                              .catch(err => alert(err));
        axios.get("/src/assets/convoyBrief.json").then(({data}) => this.convoyBrief = data)
                                              .catch(err => alert(err));
        axios.get("/src/assets/convoyProp.json").then(({data}) => this.convoyProp = data)
                                              .catch(err => alert(err));
    }
  }
</script>

<style>

</style>
