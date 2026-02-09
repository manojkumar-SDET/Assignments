//Creating a program to validate bank transactions of a user and calculating credits,debits and Final Balance.

function evaluateTransactions(transactions: number[]): void {
    console.log("Bank Transaction Evaluation Result");

    let creditCount = 0;
    let debitCount = 0;
    let totalCredit = 0;
    let totalDebit = 0;
    let balance = 0;
    let suspiciousCount = 0;
    

    // Step 1: Use for loop
    for (let i = 0; i < transactions.length; i++) {
        let t = transactions[i];

        // Step 2: If–else for credit/debit
        if (t > 0) {
            creditCount++;
            totalCredit += t;
        } else {
            debitCount++;
            totalDebit += (t * -1); // converting to negative from positive value
        }

        balance += t;

        // Suspicious check
        if (t > 10000 || t < -10000) {
            console.log("Suspicious transaction: " + t);
            suspiciousCount++;
        }
    }


    // Result
    console.log("Credits: " + creditCount);
    console.log("Debits: " + debitCount);
    console.log("Total Credited: " + totalCredit);
    console.log("Total Debited: " + totalDebit);
    console.log("Balance: " + balance);
    console.log("Suspicious: " + suspiciousCount);
}

// Example run
evaluateTransactions([50000, -2000, 3000, -15000, -200, -300, 4000, -3000]);

export {};