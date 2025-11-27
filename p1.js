function run(state) {
    var tick = state.tick;
    // Turn to face east and throw snowballs
    if (tick == 0) {
        turn(90); // Face East
    } else if (tick % 10 == 0) {
        toss(100); // Throw at distance 100
    }
}

