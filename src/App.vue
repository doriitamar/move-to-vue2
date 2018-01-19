<template>
  <div id="app">
        <navbar></navbar>

        <hero></hero>

        <div class="container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <input class="input is-rounded is-primary" type="text" placeholder="סנן שיירות" v-model="search">
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
    </div>
</template>

<script>
import ConvoyTable from './components/ConvoyTable.vue';
import ConvoyDescription from './components/ConvoyDescription.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue'

export default {
  name: 'app',
  components: { ConvoyTable, ConvoyDescription, Navbar, Hero },
  data () {
    return {
     search: '',
        sortKey: '',
        selectedConvoy: undefined,
                convoyBrief: [
            {
                "displayName": "#",
                "realName": "convId"
            },
            {
                "displayName": "Type",
                "realName": "missionType"
            },
            {
                "displayName": "Departure",
                "realName": "startDate"
            },
            {
                "displayName": "ETA",
                "realName": "finishDate"
            },
            {
                "displayName": "Cargo",
                "realName": "cargoName"
            },
            {
                "displayName": "Driver",
                "realName": "driver"
            }
        ],
    convoyProp: [
        {
            "displayName": "#",
            "realName": "convId"
        },
        {
            "displayName": "Leader plate/registration",
            "realName": "leaderPlate"
        },
        {
            "displayName": "Rear plate/registration",
            "realName": "lastPlate"
        },
        {
            "displayName": "Type",
            "realName": "missionType"
        },
        {
            "displayName": "Departure",
            "realName": "startDate"
        },
        {
            "displayName": "ETA",
            "realName": "finishDate"
        },
        {
            "displayName": "Cargo",
            "realName": "cargoName"
        },
        {
            "displayName": "Cargo amount",
            "realName": "cargoAmount"
        },
        {
            "displayName": "Origin",
            "realName": "startPlace"
        },
        {
            "displayName": "Origin coordinations",
            "realName": "startCoord"
        },
        {
            "displayName": "Destination",
            "realName": "endPlace"
        },
        {
            "displayName": "Destination coordinations",
            "realName": "endCoord"
        },
        {
            "displayName": "Driver",
            "realName": "driver"
        },
        {
            "displayName": "Contact #",
            "realName": "driverPhone"
        }
    ],
    convoies: [{
        "convId": "1",
        "leaderPlate":"AB925C",
        "lastPlate": "22-445-34",
        "missionType": "VIP",
        "startDate": "146107711400",
        "finishDate": "146109955400",
        "cargoName": "Food",
        "cargoAmount": "100Kg",
        "startPlace": "London, UK",
        "startCoord": "31.00/45.00",
        "endPlace": "Manchester, UK",
        "endCoord": "61.00/75.00",
        "driver":"ItamarDori",
        "driverPhone": "+34 125 636 4826",
        "arrived": false,
        "inMotion": false
        },
        {
            "convId": "2",
            "leaderPlate":"1825KKL",
            "lastPlate": "MS23NM",
            "missionType": "Ferry",
            "startDate": "146107711400",
            "finishDate": "146109955400",
            "cargoName": "Glass",
            "cargoAmount": "485363 Tons",
            "startPlace": "Leige, Belgium",
            "startCoord": "31.00/11.00",
            "endPlace": "Manchester, UK",
            "endCoord": "61.00/75.00",
            "driver":"John Doe",
            "driverPhone": "+1 555 123 4826",
            "arrived": false,
            "inMotion": false
        },
        {
            "convId": "3",
            "leaderPlate":"2423G",
            "lastPlate": "PPL123",
            "missionType": "B2B",
            "startDate": "146108411400",
            "finishDate": "146109999400",
            "cargoName": "Glass",
            "cargoAmount": "1 Kg",
            "startPlace": "Rome, Italy",
            "startCoord": "31.00/89.00",
            "endPlace": "Hamburg, Germany",
            "endCoord": "11.00/84.00",
            "driver":"Jane Doe",
            "driverPhone": "+33 455 123 4826",
            "arrived": false,
            "inMotion": false
        }
    ]
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
    }
  }
</script>

<style>

</style>
