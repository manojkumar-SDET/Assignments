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

To open last HTML report run:

  npx playwright show-report

