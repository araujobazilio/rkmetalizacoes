# 🚀 Guia de Deployment - RK Metalizações

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta no Netlify ou Vercel (para deploy)

## Instalação Local

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite `.env.local` e atualize:
- `NEXT_PUBLIC_WHATSAPP_PHONE` - Seu número do WhatsApp
- `NEXT_PUBLIC_EMAIL` - Seu email de contato
- `NEXT_PUBLIC_PHONE` - Seu telefone

### 3. Copiar Imagens

Crie a pasta `public/images/imagens/` e copie todas as imagens:

```bash
mkdir -p public/images/imagens
cp imagens/* public/images/imagens/
```

### 4. Testar Localmente

```bash
npm run dev
```

Acesse `http://localhost:3000`

## Build para Produção

```bash
npm run build
npm start
```

## Deploy no Netlify

### Opção 1: Via Git (Recomendado)

1. Faça push do código para GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Clique em "New site from Git"
4. Selecione seu repositório
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Environment variables**: Adicione as variáveis do `.env.local`

### Opção 2: Deploy Manual

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=.next
```

## Deploy no Vercel

### Opção 1: Via Git

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório
5. Vercel detectará automaticamente as configurações
6. Adicione as variáveis de ambiente
7. Clique em "Deploy"

### Opção 2: Via CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Configurações Pós-Deploy

### 1. Domínio Customizado

**Netlify:**
- Vá para Site settings > Domain management
- Clique em "Add custom domain"

**Vercel:**
- Vá para Project settings > Domains
- Adicione seu domínio

### 2. SSL/HTTPS

Ambas as plataformas fornecem SSL gratuito automaticamente.

### 3. Analytics

#### Google Analytics

1. Crie uma conta em [google.com/analytics](https://google.com/analytics)
2. Obtenha seu ID de rastreamento (GA_ID)
3. Adicione à variável de ambiente `NEXT_PUBLIC_GA_ID`

#### Implementar no código (opcional):

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 4. Pixel do Facebook

1. Crie um pixel em [facebook.com/business](https://facebook.com/business)
2. Obtenha seu Pixel ID
3. Implemente no código:

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'SEU_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 5. Pixel do Google Ads

1. Configure em [google.com/ads](https://google.com/ads)
2. Obtenha seu Conversion ID
3. Implemente no código

## Otimizações de Performance

### 1. Compressão de Imagens

Use ferramentas como:
- [TinyPNG](https://tinypng.com)
- [ImageOptim](https://imageoptim.com)
- [Squoosh](https://squoosh.app)

### 2. Lazy Loading

Já implementado nos componentes com `hover:scale-110`

### 3. Cache Headers

Configurado automaticamente pelo Next.js

## Monitoramento

### Lighthouse

1. Abra DevTools (F12)
2. Vá para "Lighthouse"
3. Clique em "Analyze page load"
4. Metas:
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

### Uptime Monitoring

Use serviços como:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://pingdom.com)

## Troubleshooting

### Erro: "Cannot find module 'next'"

```bash
npm install
```

### Imagens não aparecem

Verifique:
1. Arquivos estão em `public/images/imagens/`
2. Caminhos estão corretos nos componentes
3. Nomes dos arquivos correspondem

### WhatsApp não funciona

Verifique:
1. Número do WhatsApp está correto
2. Formato: `55` + DDD + número (sem caracteres especiais)
3. Teste manualmente: `https://wa.me/5524999999999`

## Checklist Final

- [ ] Instalar dependências
- [ ] Copiar imagens para `public/images/imagens/`
- [ ] Atualizar número do WhatsApp
- [ ] Atualizar email de contato
- [ ] Testar localmente
- [ ] Build production
- [ ] Deploy no Netlify/Vercel
- [ ] Configurar domínio customizado
- [ ] Testar em produção
- [ ] Configurar analytics
- [ ] Testar responsividade mobile
- [ ] Testar formulário de orçamento
- [ ] Testar links de navegação
- [ ] Verificar SEO com Lighthouse

## Suporte

Para dúvidas ou problemas, consulte:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
