<template>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th v-for="property in properties"> <a  @click="sortBy(property.realName)">{{property.displayName}} </a> </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="convoy in computedData" :key="convoy.convId" :class="{ 'motion': convoy.inMotion, 'arrived': convoy.arrived }" @click="$emit('choose:convoy', convoy)">
                <td v-for="property in properties"> {{convoy[property.realName]}} </td>
            </tr>
        </tbody>
        </table>
</template>

<script>
export default {
    name: 'convoy-table',
    props: ['properties', 'data', 'filterKey'],
    data() {
        return {
            sortKey: undefined
        }
    },
    computed: {   
        filteredData() {
            return this.filterKey ? this.data.filter(obj => Object.keys(obj).some(key => obj[key].toString().includes(this.filterKey))) : this.data;
        },
        computedData() {
            if(this.sortKey) {
                return (this.sortKey[0] === '-') ? this.filteredData.reverse() : this.filteredData.sort((a,b) => (a[this.sortKey] > b[this.sortKey]) ? 1 : -1);
            } else {
                return this.filteredData;
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
        }
    }
}
</script>

<style>
.motion {
    background-color: lightyellow!important;
}

.arrived {
    background-color: lightgreen!important;
}
</style>

