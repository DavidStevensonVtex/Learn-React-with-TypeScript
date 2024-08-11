enum Level {
    Low = 1,
    Medium = 2,
    High = 3
}

let level = Level.Low;
console.log(level, Level[Level.Low]);
level = Level.High;
console.log(level, Level[Level.High]);

// level = 10; // Error: Type '10' is not assignable to type 'Level'.

// Output
// 1,  "Low"
// 3,  "High" 