const builder = {
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
            weeks.push(timeline.splice(0, 7));
        }
        return weeks;
    },
}

export default builder;