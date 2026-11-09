// --- Problem 1: multiplyValue ---
const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

// console.log(multiplyValue(10));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

const formatCoordinate = (coord: readonly [number, number, string]): string => {
  const [latitude, longitude, locationName] = coord;
  return `Location: ${locationName} (${latitude}, ${longitude})`
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));