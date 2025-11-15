# ⚡ Guia Rápido - Landing Page RK Metalizações

## 🚀 Começar Agora (5 minutos)

### Passo 1: Iniciar o Servidor
```bash
npm run dev
```

### Passo 2: Abrir no Navegador
```
http://localhost:3000
```

### Passo 3: Testar a Página
- Scroll pela página
- Clique nos botões
- Teste o formulário
- Verifique as imagens

---

## 📝 Atualizar Dados de Contato (2 minutos)

### Opção A: Manual (Recomendado para poucos dados)

1. Abra `components/Header.tsx`
2. Procure por `5524999999999`
3. Substitua pelo seu número WhatsApp
4. Salve o arquivo
5. Repita para os outros componentes

### Opção B: Automático (Para todos os dados)

1. Abra PowerShell
2. Navegue até a pasta do projeto
3. Execute:

```powershell
# Substituir WhatsApp
(Get-Content -Path "components/Header.tsx") -replace '5524999999999', 'SEU_NUMERO' | Set-Content -Path "components/Header.tsx"
```

---

## 🔗 Arquivos Importantes

| Arquivo | Função | Editar? |
|---------|--------|---------|
| `components/Header.tsx` | Cabeçalho e navegação | ✅ WhatsApp |
| `components/Hero.tsx` | Seção principal | ❌ Não |
| `components/About.tsx` | Sobre o processo | ❌ Não |
| `components/Products.tsx` | Produtos | ✅ Preços |
| `components/Pricing.tsx` | Tabela de preços | ✅ Valores |
| `components/BudgetForm.tsx` | Formulário | ✅ WhatsApp |
| `components/Shipping.tsx` | Envio | ✅ Email, WhatsApp |
| `components/Footer.tsx` | Rodapé | ✅ Contatos |

---

## 🎨 Personalizar Cores

Se quiser mudar as cores, edite `tailwind.config.js`:

```javascript
colors: {
  'rk-beige-light': '#ebe4db',    // Fundo
  'rk-white': '#fefefe',          // Branco
  'rk-gold': '#9b6c38',           // Dourado (principal)
  'rk-beige-gold': '#dac6a9',     // Bege dourado
  'rk-gray': '#8f8881',           // Cinza
}
```

---

## 📱 Testar Responsividade

### No Navegador (Chrome/Firefox)
1. Abra DevTools (F12)
2. Clique em "Toggle device toolbar" (Ctrl+Shift+M)
3. Teste em diferentes tamanhos

### Tamanhos Recomendados
- Mobile: 375px (iPhone)
- Tablet: 768px (iPad)
- Desktop: 1024px+

---

## 🔧 Editar Preços

Abra `components/Pricing.tsx` e procure por:

```javascript
const plans = [
  {
    price: 160,  // ← Edite aqui
    // ...
  }
]
```

---

## 🖼️ Adicionar/Trocar Imagens

1. Coloque a imagem em `public/images/imagens/`
2. Abra o componente que usa a imagem
3. Atualize o caminho:

```jsx
<img src="/images/imagens/sua-imagem.png" alt="Descrição" />
```

---

## 📞 Testar WhatsApp

Clique em qualquer botão de WhatsApp. Você será redirecionado para:

```
https://wa.me/SEU_NUMERO_AQUI
```

Se não funcionar, verifique:
- ✅ Número está correto?
- ✅ Formato: 55 + DDD + número?
- ✅ Sem caracteres especiais?

---

## 🚀 Deploy (10 minutos)

### Opção 1: Netlify (Recomendado)

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione seu repositório GitHub
4. Clique em "Deploy"
5. Pronto! 🎉

### Opção 2: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório
4. Clique em "Deploy"
5. Pronto! 🎉

---

## 🐛 Solucionar Problemas

### Imagens não aparecem
```bash
# Verifique se a pasta existe
ls public/images/imagens/

# Se não existir, crie:
mkdir -p public/images/imagens
```

### WhatsApp não funciona
- Verifique o número em todos os componentes
- Teste manualmente: `https://wa.me/5524999999999`

### Servidor não inicia
```bash
# Limpe cache e reinstale
rm -r node_modules package-lock.json
npm install
npm run dev
```

### Erro de TypeScript
```bash
# Reinstale dependências
npm install
```

---

## 📊 Checklist Pré-Deploy

- [ ] Número WhatsApp atualizado
- [ ] Email atualizado
- [ ] Telefone atualizado
- [ ] Testou em mobile
- [ ] Testou em desktop
- [ ] Testou o formulário
- [ ] Testou os links
- [ ] Imagens carregam corretamente
- [ ] Sem erros no console

---

## 💡 Dicas Úteis

1. **Backup**: Faça backup antes de editar
2. **Git**: Use Git para controlar versões
3. **Teste**: Sempre teste antes de fazer deploy
4. **Mobile First**: Teste sempre em mobile primeiro
5. **Analytics**: Adicione Google Analytics depois

---

## 📞 Suporte

Se tiver dúvidas:

1. Consulte `DEPLOYMENT.md` para deploy
2. Consulte `ATUALIZACOES_NECESSARIAS.md` para dados
3. Consulte `RESUMO_PROJETO.md` para visão geral

---

## 🎯 Próximos Passos

1. ✅ Testar localmente
2. ⏳ Atualizar dados
3. ⏳ Fazer deploy
4. ⏳ Configurar domínio
5. ⏳ Lançar campanhas

---

**Pronto para começar? Abra o terminal e execute:**

```bash
npm run dev
```

**Boa sorte! 🚀**
