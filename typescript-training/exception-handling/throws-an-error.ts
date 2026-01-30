// 2. Throwing a customized error
class Student {
    // ---------- Instance properties ----------
    age: number;
    city: string = "Hyderabad";
    state: string = "Telangana";
    zip: number = 500081;

    // ---------- Static properties ----------
    static rollNumber: number = 1234;
    static studentName: string = "Bharath";

    // ---------- Constructor ----------
    constructor(age: number) {
        this.age = age;
        if (this.age < 18) {
            throw new Error("Not Eligible to vote");
        } else {
            console.log("Eligible to vote");
        }
    }

    // ---------- Instance method ----------
    fullAddress(): string {
        return `${this.city}, ${this.state} - ${this.zip}`;
    }

    // ---------- Static method ----------
    static nameAndId(): string {
        return `${this.rollNumber}, ${this.studentName}`;
    }
}

// ================= USAGE =================
try {
    // Static access (no object needed)
    console.log(Student.nameAndId());     // 1234, Bharath
    console.log(Student.rollNumber);      // 1234

    // Instance access (object required)
    const student = new Student(17);      // Throws error here
    console.log(student.fullAddress());   // Hyderabad, Telangana - 500081
    console.log(student.city);            // Hyderabad
} catch (error) {
    console.error("Error caught:", (error as Error).message);
}

console.log("Execution Continues...");