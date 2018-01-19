let app = new Vue({
    el: '#app',
    data: {
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
    ]},
    computed: {
        briefedConvoies() {
            return this.convoies.map(x => {
                x.startDate = new Date(parseInt(x.startDate)).toLocaleString();
                x.finishDate = new Date(parseInt(x.finishDate)).toLocaleString();
                return x;
            })
        },
        filteredConvoies() {
            return this.search ? this.briefedConvoies.filter(obj => Object.keys(obj).some(key => obj[key].toString().includes(this.search))) : this.briefedConvoies;
        },
        computedConvoies() {
            if(this.sortKey) {
                return (this.sortKey[0] === '-') ? this.filteredConvoies.reverse() : this.filteredConvoies.sort((a,b) => (a[this.sortKey] > b[this.sortKey]) ? 1 : -1);
            } else {
                return this.filteredConvoies;
            }
        }
    },
    methods: {
        sortBy(key) {
            if(!this.sortKey) {
                this.sortKey = key;
            } else if(key == this.sortKey) {
                this.sortKey = `-${this.sortKey}`;
            } else if(this.sortKey.indexOf(key) == 1) {
                this.sortKey = key;
            } else {
                this.sortKey = key;
            }
        },
        declareMotion(convId) {
            this.convoies.find(x => x.convId == convId).inMotion = true;
            this.convoies.find(x => x.convId == convId).arrived = false;
        },
        declareArrival(convId) {
            this.convoies.find(x => x.convId == convId).inMotion = false;
            this.convoies.find(x => x.convId == convId).arrived = true;
        }
    }
})