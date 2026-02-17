//hooks : Hooks are nothing but sets of conditions that you want to run before and after test execution.

//beforeAll : This will run once before all the tests in the describe block.
//afterAll : This will run once after all the tests in the describe block.
//beforeEach : This will run before each test in the describe block.
//afterEach : This will run after each test in the describe block.



---------------------------------------------------------------------------------------------

PS C:\AutomationTraining\playwright-training> npx playwright test playwright-training/tests/3-hooks/hooks.spec.ts  

Running 6 tests using 1 worker
[chromium] › tests\3-hooks\hooks.spec.ts:5:9 › Group 1 Tests › Group 1- Test 1 @smoke
*****Global beforeAll: This runs once before all tests*****
----Global beforeEach: This runs before each test----
Group 1 - Test 1: Executing
------Global afterEach: This runs after each test-----
[chromium] › tests\3-hooks\hooks.spec.ts:9:9 › Group 1 Tests › Group 1- Test 2 @regression
----Global beforeEach: This runs before each test----
Group 1 - Test 2: Executing
------Global afterEach: This runs after each test-----
[chromium] › tests\3-hooks\hooks.spec.ts:13:13 › Group 1 Tests › Group 1- Test 3 @sanity
----Global beforeEach: This runs before each test----
Group 1 - Test 3: Executing
------Global afterEach: This runs after each test-----
[chromium] › tests\3-hooks\hooks.spec.ts:21:9 › Group 2 Tests › Group 2- Test 1 @smoke
----Global beforeEach: This runs before each test----
Group 2 - Test 1: Executing
------Global afterEach: This runs after each test-----
[chromium] › tests\3-hooks\hooks.spec.ts:25:9 › Group 2 Tests › Group 2- Test 2 @sanity @regression
----Global beforeEach: This runs before each test----
Group 2 - Test 2: Executing
------Global afterEach: This runs after each test-----
[chromium] › tests\3-hooks\hooks.spec.ts:29:13 › Group 2 Tests › Group 2- Test 3 @sanity
----Global beforeEach: This runs before each test----
Group 2 - Test 3: Executing
------Global afterEach: This runs after each test-----
*****Global afterAll: This runs once after all tests****

To open last HTML report run:

  npx playwright show-report

PS C:\AutomationTraining\playwright-training> npx playwright test playwright-training/tests/3-hooks/group-speci-hooks.spec.ts

Running 6 tests using 1 worker
[chromium] › tests\3-hooks\group-speci-hooks.spec.ts:5:9 › Group 1 Tests › Group 1- Test 1 @smoke
Group 1 - Test 1: Executing
[chromium] › tests\3-hooks\group-speci-hooks.spec.ts:9:9 › Group 1 Tests › Group 1- Test 2 @regression
Group 1 - Test 2: Executing
[chromium] › tests\3-hooks\group-speci-hooks.spec.ts:13:13 › Group 1 Tests › Group 1- Test 3 @sanity
Group 1 - Test 3: Executing
[chromium] › tests\3-hooks\group-speci-hooks.spec.ts:39:9 › Group 2 Tests › Group 2- Test 1 @smoke
*****Global beforeAll: This runs once before all tests*****
----Global beforeEach: This runs before each test----
Group 2 - Test 1: Executing
------Global afterEach: This runs after each test-----
[chromium] › tests\3-hooks\group-speci-hooks.spec.ts:43:9 › Group 2 Tests › Group 2- Test 2 @sanity @regression    
----Global beforeEach: This runs before each test----
Group 2 - Test 2: Executing
------Global afterEach: This runs after each test-----
[chromium] › tests\3-hooks\group-speci-hooks.spec.ts:47:13 › Group 2 Tests › Group 2- Test 3 @sanity
----Global beforeEach: This runs before each test----
Group 2 - Test 3: Executing
------Global afterEach: This runs after each test-----
*****Global afterAll: This runs once after all tests****
  6 passed (4.0s)



________________________________________
test.afterAll() – Global Cleanup
Description
Runs once after all tests in the file.
Common Uses
•	Closing connections
•	Cleaning test data
•	Generating logs
Example
test.afterAll(async () => {
  console.log('Global afterAll: Runs once after all tests');
});
________________________________________
test.beforeEach() – Global Precondition
Description
Runs before every test in the file.
Common Uses
•	Launching application
•	Navigating to a base URL
•	Resetting test state
Example
test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com');
});
________________________________________
test.afterEach() – Global Teardown
Description
Runs after every test in the file.
Common Uses
•	Logging test results
•	Cleaning cookies or storage
•	Taking screenshots on failure
Example
test.afterEach(async ({ page }) => {
  await page.close();
});
________________________________________
Group-Level Hooks
Definition
Group-level hooks are defined inside a test.describe() block.
They apply only to tests within that group.
________________________________________
Group-Level beforeAll()
Description
Runs once before all tests inside the group.
Example
test.describe('Login Tests', () => {

  test.beforeAll(async () => {
    console.log('Group beforeAll: Login setup');
  });

});


________________________________________
Group-Level beforeEach()
Description
Runs before each test in the group.
Example
test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

});
________________________________________
Group-Level afterEach()
Description
Runs after each test in the group.
Example
test.describe('Login Tests', () => {

  test.afterEach(async () => {
    console.log('Cleanup after each login test');
  });

});
________________________________________
Group-Level afterAll()
Description
Runs once after all tests in the group.
Example
test.describe('Login Tests', () => {

  test.afterAll(async () => {
    console.log('Group afterAll: Login tests completed');
  });

});