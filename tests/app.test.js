import { describe, test } from "vitest";
import { JSDOM } from 'jsdom';

describe("testing DOM", () => {
    test("Testing 'inicio' is the first link on the navbar", async () => {
        const dom =  await JSDOM.fromFile("index.html", {
            url: 'http://localhost/'
          });
        const nav = dom.window.document.querySelector(".nav-link");
        expect(nav.innerHTML).toBe("Inicio");
    })
})