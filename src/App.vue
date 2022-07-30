<template>
    <section id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <img alt="Vue logo" src="./assets/logo.png" style="height: 60px">
                </div>
            </div>

            <calendar-base></calendar-base>

        </div>
    </section>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import CalendarBase from "@/components/CalendarBase.vue";

export default {
    name: 'App',
    components: {
        CalendarBase,
    }
}
</script>

<style lang="scss">
#calendar {
//    These styles will apply to all components
}

#wrapper {
    background-color: rgba(200, 190, 20, .1);
}


</style>
