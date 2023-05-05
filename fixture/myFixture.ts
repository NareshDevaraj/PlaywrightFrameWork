import { test as myTest } from "@playwright/test";

type Anto = {
    age: number,
    email: string

}

const myFixtureTest = myTest.extend<Anto>({
    age: 26,
    email: "Anto1234@gmail.com"
})

export const test = myFixtureTest;