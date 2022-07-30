<template>
    <div id="calendar-body" class="col py-2">

        <calendar-week v-for="(days, index) in weeks" :key="index"
                       :days="days"
                       :weeknum="index"></calendar-week>
    </div>
</template>

<script>

import CalendarWeek from "@/components/CalendarWeek.vue";

export default {
    name: 'CalendarBody',
    components: {
        CalendarWeek,
    },
    props: ['weeks'],
}
</script>

<style scoped>
#calendar-body {
    background-color: rgba(30, 120, 220, .2);
}

</style>