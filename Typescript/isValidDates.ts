

function scheduleAppointments(appointments: (Date | string | number)[]): string[] {
  const uniqueDates = new Set<number>(); // Store unique timestamps

  for (const appointment of appointments) {
      const date = new Date(appointment);

      // Check for invalid dates
      if (isNaN(date.getTime())) {
          console.warn(`Invalid date ignored: ${appointment}`);
          continue;
      }

      console.log(`Valid date: ${appointment}`);
      uniqueDates.add(date.getTime()); // Store timestamp to ensure uniqueness
  }

  // Convert Set to an array, sort, and format dates
  return [...uniqueDates]
      .sort((a, b) => a - b) // Sort timestamps in ascending order
      .map(timestamp => new Date(timestamp).toISOString().split("T")[0]); // Format as 'YYYY-MM-DD'
}

// Test Cases
const testAppointments = [
  new Date("2025-03-10"),
  new Date("2025-01-15"),
  new Date("2025-02-20"),
  new Date("Invalid Date"),  // Should be ignored
  "2025-02-05",              // Valid ISO string
  1735795200000,             // Timestamp for "2025-01-02"
  "2025-02-05",              // Duplicate (should be ignored)
  new Date("2025-03-10")      // Duplicate (should be ignored)
];

console.log(scheduleAppointments(testAppointments));
