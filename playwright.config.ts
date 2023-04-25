import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig ={

    testMatch: ["tests/RecordedTest.ts"],
    use: {
        headless: false,    // make it true before pusing it to Gitlab
        screenshot: "on",   //can be off or used when test is failed alone
        video: "on"         //can be off or used when test is failed alone
    },
    retries: 2,  //execute the test again 2 times if it fail

    //reporter using json and html . "Dot" used to see test with Green and red according to pass/fail
    reporter: [["dot"], ["json", {
        outputFile:"jsonReports/jsonReports.json"

    }], ["html", {
        open: "never"
    }
]]

};

export default config;
