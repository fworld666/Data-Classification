const fs = require("fs");

// Read the original customer dataset.
const inputFile = "customer.json";
const outputFile = "medicationbyvolume.json";

const customers = JSON.parse(fs.readFileSync(inputFile, "utf8"));

// Keep only the fields required for analysis:
// medicine name, volume, and general location (county and city).
const medicationByVolume = customers.map((customer) => ({
  medication: customer.medication,
  volume: customer.volume,
  county: customer.county,
  city: customer.city
}));

// Write the reduced dataset as formatted JSON.
fs.writeFileSync(
  outputFile,
  JSON.stringify(medicationByVolume, null, 2) + "\n",
  "utf8"
);

console.log(`Created ${outputFile} with ${medicationByVolume.length} records.`);
