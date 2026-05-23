# Crawler

Classe utilitária para realizar requisições HTTP com:

* Persistência automática de cookies
* Parsing automático de HTML
* Manipulação do DOM usando `linkedom`
* Cliente HTTP baseado em got

---

# Instalação

```bash
bun add @wargas/crawler
```

ou usando npm:

```bash
npm install @wargas/crawler
```

---

# Uso básico

```ts
import { Crawler } from "@wargas/crawler";

const crawler = Crawler.factory();

await crawler.client.get("https://example.com");

console.log(crawler.html);

console.log(
    crawler.document.querySelector("title")?.textContent
);
```

---

# Cookies persistentes

Os cookies são armazenados automaticamente no arquivo:

```txt
cookies.json
```

Isso permite manter sessão entre execuções.

---

# Limpar cookies

```ts
await crawler.removeAllCookies();
```

---

# Acessando o DOM

Como o HTML é convertido automaticamente usando `linkedom`, é possível utilizar APIs similares ao navegador:

```ts
const links = crawler.document.querySelectorAll("a");

for (const link of links) {
    console.log(link.getAttribute("href"));
}
```

---

# Configurações atuais

A instância do `got` é criada com:

```ts
followRedirect: false
```

Ou seja:

* redirects não são seguidos automaticamente
* cookies são persistidos
* HTML é parseado automaticamente após cada resposta

---

# Possíveis melhorias

* Suporte a proxy
* Retry automático
* Timeout configurável
* User-Agent customizado
* Suporte a certificados digitais
* Suporte a HTTP2
* Métodos helper (`get`, `post`, `login`, etc.)
* Cache de páginas

---

# Licença

MIT
