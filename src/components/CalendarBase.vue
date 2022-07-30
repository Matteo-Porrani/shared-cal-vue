<template>
    <div id="calendar-base" class="row py-5">
        <!-- CALENDAR-HEADER -->
        <div id="calendar-header" class="col text-center py-2">
            <div class="row">
                <div class="col-4">
                    <button @click="goPrev" class="btn btn-outline-dark">&lt;</button>
                </div>
                <div class="col-4">
                    <h3>{{ currentDate.format('MMMM YYYY') }}</h3>
                    <h4>jour de la semaine = {{ currentDate.weekday() }}</h4>
                </div>
                <div class="col-4">
                    <button @click="goNext" class="btn btn-outline-dark">&gt;</button>
                </div>
            </div>

            <!-- WEEKDAYS -->
            <div class="row bg-secondary fw-bold py-2">
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
                <calendar-body></calendar-body>
            </div>


        </div><!-- /#calendar-header -->

    </div>
</template>

<script>
// ##### DAYJS
import dayjs from 'dayjs';
// import FR locale
import 'dayjs/locale/fr.js';

dayjs.locale('fr');
// import weekday plugin
import weekday from 'dayjs/plugin/weekday.js';

dayjs.extend(weekday);

// ##### COMPONENTS
import CalendarBody from "@/components/CalendarBody.vue";

export default {
    name: 'CalendarBase',
    components: {
        CalendarBody,
    },
    data() {
        return {
            currentDate: dayjs(),
        }
    },
    methods: {
        goPrev() {
            this.currentDate = this.currentDate.subtract(1, 'month');
            this.makeTimeline();
        },
        goNext() {
            this.currentDate = this.currentDate.add(1, 'month');
            this.makeTimeline();
        },
        makeTimeline() {
            const firstDayOfMonth = this.currentDate.startOf('month');
            // console.log(firstDayOfMonth);
            // console.log(firstDayOfMonth.weekday());

            const timeline = [];
            // this will add 'empty' objects for start padding days
            this.addEmptyDays(firstDayOfMonth.weekday(), timeline);
            // this will add 'full' objects with day data
            this.addFullDays(firstDayOfMonth.daysInMonth(), timeline);
            // this will fill the month with empty days at the end
            while ((timeline.length % 7) > 0) {
                this.addEmptyDays(1, timeline);
            }

            const weeks = this.getWeeks(timeline);


            console.log(weeks);


        },
        // Int > quantity
        // Array > timeline
        addEmptyDays(quantity, timeline) {
            for (let i=1; i <= quantity; i++) {
                timeline.push({
                    type: 'empty',
                    date: null,
                });
            }
            return timeline;
        },
        // Int > quantity
        // Array > timeline
        addFullDays(quantity, timeline) {
            for (let i=1; i <= quantity; i++) {
                timeline.push({
                    type: 'full',
                    date: i,
                });
            }
        },
        // Array > timeline
        getWeeks(timeline) {
            const weeks = [];
            while (timeline.length > 0) {
                console.log('running');
                weeks.push(timeline.splice(0, 7));
            }
            return weeks;
        }
    },
}
</script>

<style lang="scss" scoped>
#calendar-base {
    background-color: rgba(200, 120, 20, .1);
}
</style>