enum Level {
    Low = "L",
    Medium = "M",
    High = "H"
}

let level = Level.Low;
console.log(level);
level = Level.High;
console.log(level);

// Errors in code
// Type '"VH"' is not assignable to type 'Level'.
// Type '"M"' is not assignable to type 'Level'.
// level = "VH" ;
// level = "M" ;

// Output
// "L"
// "H" 