<template>
    <div id="calendar-base" class="row py-5">
        <div class="col">

            <!-- CALENDAR-HEADER -->
            <div class="row">
                <div id="calendar-header" class="col text-center py-2">
                    <div class="row py-5">
                        <div class="col-2">
                            <button @click="goPrev" class="btn btn-outline-dark">&lt;</button>
                        </div>
                        <div class="col-8">
                            <h3 class="fw-bold text-uppercase">{{ currentDate.format('MMMM YYYY') }}</h3>
                        </div>
                        <div class="col-2">
                            <button @click="goNext" class="btn btn-outline-dark">&gt;</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- WEEKDAYS -->
            <div id="calendar-weekdays" class="row fw-bold py-2">
                <div class="col text-center">L</div>
                <div class="col text-center">M</div>
                <div class="col text-center">M</div>
                <div class="col text-center">J</div>
                <div class="col text-center">V</div>
                <div class="col text-center">S</div>
                <div class="col text-center">D</div>
            </div>

            <!-- CALENDAR-BODY -->
            <div class="row">
                <calendar-body :weeks="weeks"></calendar-body>
            </div>

        </div>
    </div>
</template>

<script>
// ##### DAYJS + FR locale
import dayjs from 'dayjs';
import 'dayjs/locale/fr.js';

dayjs.locale('fr');

// import weekday plugin
import weekday from 'dayjs/plugin/weekday.js';

dayjs.extend(weekday);

// ##### UTILITIES
import builder from '../utilities/builder.js';

// ##### COMPONENTS
import CalendarBody from "@/components/CalendarBody.vue";

export default {
    name: 'CalendarBase',
    components: {
        CalendarBody,
    },
    data() {
        return {
            builder: builder, // this provides utility methods to build the timeline
            currentDate: dayjs(),
            weeks: [],
        }
    },
    methods: {
        goPrev() {
            this.currentDate = this.currentDate.subtract(1, 'month');
            this.buildSchema();
        },
        goNext() {
            this.currentDate = this.currentDate.add(1, 'month');
            this.buildSchema();
        },
        buildSchema() {
            const firstDayOfMonth = this.currentDate.startOf('month');

            const timeline = [];
            // 1. this will add 'empty' objects for start padding days
            this.builder.addEmptyDays(firstDayOfMonth.weekday(), timeline);
            // 2. this will add 'full' objects with day data
            this.builder.addFullDays(firstDayOfMonth.daysInMonth(), timeline);
            // 3. this will fill the month with empty days at the end
            while ((timeline.length % 7) > 0) {
                this.builder.addEmptyDays(1, timeline);
            }

            this.weeks = this.builder.getWeeks(timeline);
        },
    },
    created() {
        this.buildSchema();
    }
}
</script>

<style lang="scss" scoped>
#calendar-base {
    background-color: rgba(233, 12, 99, .05);
}

#calendar-header {
    background-color: rgba(233, 190, 40, .2);
}

#calendar-weekdays {
    background-color: rgba(233, 12, 99, .2);
}
</style>