import type { Got, OptionsOfTextResponseBody } from "got";
import got from "got";
import { CookieJar } from "tough-cookie";
import FileCookieStore from "tough-cookie-file-store";
import { parseHTML } from "linkedom"

export class Crawler {
    client!: Got
    cookieJar!: CookieJar
    html = ``
    document: Document = parseHTML(``).document

    static factory() {
        const instance = new Crawler()

        instance.cookieJar = new CookieJar(new FileCookieStore(`cookies.json`))

        instance.client = got.extend({
            hooks: {
                afterResponse: [
                    res => {
                        if(typeof res.body == `string`) {
                            instance.html =  res.body
                            instance.document = parseHTML(res.body).document
                        }
                        
                        return res
                    }
                ]
            },
            followRedirect:false,
            cookieJar: instance.cookieJar,
            
        })

        return instance;
    }

    async removeAllCookies(){
        await this.cookieJar.removeAllCookies()
    }

    async get(url:string, options?:OptionsOfTextResponseBody){
        return this.client.get(url, options)
    }

    async post(url:string, options?:OptionsOfTextResponseBody){
        return this.client.post(url, options)
    }

    async put(url:string, options?:OptionsOfTextResponseBody){
        return this.client.put(url, options)
    }

    async patch(url:string, options?:OptionsOfTextResponseBody){
        return this.client.patch(url, options)
    }

    async delete(url:string, options?:OptionsOfTextResponseBody){
        return this.client.delete(url, options)
    }

}