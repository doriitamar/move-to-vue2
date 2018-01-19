<template>
    <span>{{dateTime}}</span>
</template>

<script>
export default {
    name: 'clock',
    data() {
        return {
            now: new Date()
        }
    },
    computed: {
        dateTime() {
            return this.now.toLocaleString();
        }
    },
    methods: {
        updateDate() {
            this.now = new Date();
        }
    },
    mounted() {
        setInterval(this.updateDate, 1000);
    }
}
</script>
