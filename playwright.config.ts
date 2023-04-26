import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig ={

   testMatch: ["tests/uploadDownload.Test.ts"],
    use: {
        headless: false,    // make it true before pusing it to Gitlab
        screenshot: "on",   //can be off or used when test is failed alone
        video: "on"         //can be off or used when test is failed alone
        //launchOptions: {
          //  slowMo:1000            //can be used for debugging to see the test executing slowly
        //}
    },
    retries: 0,  //execute the test again 2 times if it fail

    //reporter using json and html . "Dot" used to see test with Green and red according to pass/fail
    reporter: [["dot"], ["json", {
        outputFile:"jsonReports/jsonReports.json"

    }], ["html", {
        open: "never"   // if user want to open the report after every execution it can be changed as "always"
    }
]]

};

export default config;
