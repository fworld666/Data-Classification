# Data-Classification

## Overview
This script reads `customer.json` and generates `medicationbyvolume.json` for analysis. It keeps only the following fields:

- `medication`
- `volume`
- `county`
- `city`

This reduces the amount of personal information included in the analysis dataset.

## Requirements
- Node.js

## Usage
Place `customer.json` and `generate_medicationbyvolume.js` in the same directory, then run:

```bash
node generate_medicationbyvolume.js
```

The script creates `medicationbyvolume.json` in the current directory and displays the number of records generated.

## Output
The generated JSON file contains only the four selected fields from each customer record.
