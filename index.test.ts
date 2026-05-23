import { expect, test } from 'bun:test'
import { Crawler } from "./";

test(`get page title`, async function() {
        
    const c = Crawler.factory();
    
    await c.client.get("https://google.com")

    expect(c.document.title).toBe(`Google`)
    
})