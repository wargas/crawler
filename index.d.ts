// crawler.d.ts

import type { Got } from "got";
import type { CookieJar } from "tough-cookie";

export declare class Crawler {
    client: Got;
    cookieJar: CookieJar;
    html: string;
    document: Document;

    static factory(): Crawler;

    removeAllCookies(): Promise<void>;
}