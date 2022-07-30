<template>
    <div class="row">
        <div v-for="(day, index) in days" :key="index" @click="toggleBanner()"
             class="calendar-day col text-center border border-dark py-1">
            <p class="mb-0">{{ day.date }}</p>
        </div>
        <div class="calendar-banner bg-warning" :class="{'d-none': bannerIsClosed}">

<!--            HERE WE NEED TO INJECTS EVENTS... -->

        </div>
    </div>
</template>

<script>
export default {
    name: 'CalendarWeek',
    props: ['days'],
    data() {
        return {
            bannerIsClosed: true,
            events: [
                {
                    title: 'Cher parents',
                    time: '17:30'
                },
                {
                    title: 'Cher parents',
                    time: '20:30'
                },
            ],
        }
    },
    methods: {
        toggleBanner() {
            this.bannerIsClosed = !this.bannerIsClosed;
        }
    },
}
</script>

<style scoped>
.calendar-day {
    height: 80px;
}

.calendar-banner {
    height: 140px;
}
</style>