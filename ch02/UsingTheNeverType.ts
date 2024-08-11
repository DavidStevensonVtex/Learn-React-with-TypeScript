function foreverTask(taskName: string): never {
    while (true) {
        console.log(`Doing ${taskName} over and over again...`);
        break;
    }
}

// Errors
// A function returning 'never' cannot have a reachable end point.