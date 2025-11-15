# 🚀 Guia de Deploy - Netlify + GitHub

## ✅ Checklist Pré-Deploy

### 1. Preparação Local
- [x] Projeto testado em `http://localhost:3000`
- [x] Todas as imagens carregando corretamente
- [x] Formulário funcionando
- [x] Vídeo YouTube incorporado
- [x] Responsividade testada em mobile

### 2. Configuração de Variáveis de Ambiente
Você precisa atualizar o arquivo `.env.local` com seus dados reais:

```bash
# Configurações de Contato
NEXT_PUBLIC_WHATSAPP_PHONE=SEU_NUMERO_AQUI
NEXT_PUBLIC_EMAIL=seu-email@dominio.com.br
NEXT_PUBLIC_PHONE=(XX) XXXXX-XXXX

# Analytics (Opcional - deixe em branco por enquanto)
NEXT_PUBLIC_GA_ID=

# Configurações de Deployment
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

**Importante**: Não faça commit do `.env.local` no GitHub!

---

## 📋 Passo a Passo: Deploy no Netlify via GitHub

### Passo 1: Preparar o Repositório GitHub

1. **Crie um repositório no GitHub** (se ainda não tiver):
   - Acesse: https://github.com/new
   - Nome: `landing-page-rk-metalizacoes`
   - Descrição: `Landing page para RK Metalizações`
   - Visibilidade: Public (recomendado)
   - Clique em "Create repository"

2. **Faça o primeiro commit local**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Landing page RK Metalizações"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/landing-page-rk-metalizacoes.git
   git push -u origin main
   ```

### Passo 2: Conectar ao Netlify

1. **Acesse o Netlify**:
   - Vá para: https://app.netlify.com
   - Faça login com GitHub (ou crie uma conta)

2. **Crie um novo site**:
   - Clique em "Add new site"
   - Selecione "Import an existing project"
   - Escolha "GitHub"
   - Autorize o Netlify a acessar seus repositórios
   - Selecione o repositório: `landing-page-rk-metalizacoes`

3. **Configure o build**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Clique em "Deploy site"

### Passo 3: Configurar Variáveis de Ambiente no Netlify

1. **Acesse as configurações do site**:
   - No Netlify, vá para: Site settings → Build & deploy → Environment

2. **Adicione as variáveis**:
   - Clique em "Edit variables"
   - Adicione cada variável do `.env.local`:
     ```
     NEXT_PUBLIC_WHATSAPP_PHONE = SEU_NUMERO
     NEXT_PUBLIC_EMAIL = seu-email@dominio.com.br
     NEXT_PUBLIC_PHONE = (XX) XXXXX-XXXX
     NEXT_PUBLIC_SITE_URL = https://seu-dominio.netlify.app
     ```

3. **Salve as variáveis**

### Passo 4: Disparar o Deploy

1. **O Netlify fará o deploy automaticamente**
   - Você verá o progresso em tempo real
   - Quando terminar, você receberá um URL como: `https://seu-site.netlify.app`

2. **Teste o site**:
   - Abra a URL fornecida
   - Teste todos os componentes
   - Verifique se as imagens carregam
   - Teste o formulário
   - Teste o vídeo

---

## 🔧 Configurações Adicionais (Opcional)

### Configurar Domínio Customizado

1. **Acesse Site settings → Domain management**
2. **Clique em "Add custom domain"**
3. **Digite seu domínio**: `rkmetalizacoes.com.br`
4. **Siga as instruções para atualizar os DNS**

### Configurar HTTPS

- Netlify configura HTTPS automaticamente (gratuito com Let's Encrypt)

### Configurar Redirects

Se precisar de redirects, crie um arquivo `netlify.toml` na raiz:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📊 Monitoramento Pós-Deploy

### 1. Verificar Build Logs
- Netlify → Deploys → Clique no deploy mais recente
- Verifique se não há erros

### 2. Testar Performance
- Use Lighthouse (Chrome DevTools)
- Alvo: Score > 90

### 3. Monitorar Erros
- Netlify → Functions (se usar)
- Verifique logs de erro

---

## 🐛 Troubleshooting

### Erro: "Build failed"
- Verifique os logs no Netlify
- Certifique-se de que `npm run build` funciona localmente
- Verifique se todas as dependências estão no `package.json`

### Erro: "Imagens não carregam"
- Verifique se as imagens estão em `public/images/imagens/`
- Verifique os caminhos nos componentes
- Certifique-se de que os nomes dos arquivos estão corretos

### Erro: "Vídeo não carrega"
- Verifique a URL do YouTube
- Certifique-se de que o vídeo é público
- Verifique se há restrições de incorporação

### Erro: "Formulário não funciona"
- Verifique se o número do WhatsApp está correto
- Teste manualmente: `https://wa.me/SEU_NUMERO`

---

## 📱 Teste Final

Após o deploy, teste:

- [ ] Página carrega rápido
- [ ] Todas as imagens aparecem
- [ ] Vídeo funciona
- [ ] Botões de WhatsApp funcionam
- [ ] Formulário funciona
- [ ] Responsividade em mobile
- [ ] Sem erros no console

---

## 🎉 Pronto!

Seu site está no ar! 🚀

**URL do site**: https://seu-site.netlify.app

**Próximos passos**:
1. Configurar domínio customizado
2. Implementar Google Analytics
3. Implementar pixel do Facebook
4. Lançar campanhas pagas

---

## 📞 Suporte

Se tiver dúvidas:
- Documentação Netlify: https://docs.netlify.com
- Documentação Next.js: https://nextjs.org/docs
- Suporte Netlify: https://support.netlify.com

---

**Criado em**: 15 de Novembro de 2025
**Versão**: 1.0.0
