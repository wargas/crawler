import type { Got } from "got";
import got from "got";
import { CookieJar } from "tough-cookie";
import FileCookieStore from "tough-cookie-file-store";

export class Crawler {
    client!: Got
    cookieJar!: CookieJar

    static factory() {
        const instance = new Crawler()

        instance.cookieJar = new CookieJar(new FileCookieStore(`cookies.json`))

        instance.client = got.extend({
            cookieJar: instance.cookieJar
        })

        return instance;
    }

    async removeAllCookies(){
        await this.cookieJar.removeAllCookies()
    }
}