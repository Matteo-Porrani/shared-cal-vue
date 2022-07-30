<template>
    <div class="row border border-info">
        <div v-for="(day, index) in days"
             :key="index"
             @click="openBanner()"
             class="calendar-day col py-1"
             :class="{'': day.date}">
            <p class="mb-0">{{ day.date }}</p>
        </div>
        <div class="calendar-banner bg-warning" :class="{'d-none': bannerIsClosed}"></div>
    </div>
</template>

<script>
export default {
    name: 'CalendarWeek',
    props: ['days', 'weeknum'],
    data() {
        return {
            bannerIsClosed: true,
        }
    },
    methods: {
      openBanner() {
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