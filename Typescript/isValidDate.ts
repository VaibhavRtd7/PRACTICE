function validateAndParseDate(input: string | number | Date): Date {
    const date = new Date(input);

    // Check if the date is invalid using isNaN
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date provided");
    }

    return date;
}

// Test cases
try {
    console.log(validateAndParseDate("2025-02-15")); // Valid ISO date
    console.log(validateAndParseDate(1708000000000)); // Valid timestamp (milliseconds)
    console.log(validateAndParseDate(new Date())); // Valid Date object
    console.log(validateAndParseDate("15-02-2025")); // Invalid (non-ISO format)
} catch (error) {
    console.error(error.message);
}

try {
    console.log(validateAndParseDate("InvalidString")); // Should throw an error
} catch (error) {
    console.error(error.message);
}

try {
    console.log(validateAndParseDate(NaN)); // Should throw an error
} catch (error) {
    console.error(error.message);
}
