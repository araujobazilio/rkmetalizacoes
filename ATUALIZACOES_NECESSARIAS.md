# 📝 Atualizações Necessárias - RK Metalizações

## ⚠️ IMPORTANTE: Dados de Contato

Antes de fazer deploy, você PRECISA atualizar os seguintes dados em todos os componentes:

### 1. Número do WhatsApp

**Número Atual (Placeholder)**: `5524999999999`

**Onde atualizar:**
- `components/Header.tsx` - linha ~23
- `components/BudgetForm.tsx` - linha ~63
- `components/BudgetModal.tsx` - linha ~13
- `components/Shipping.tsx` - linha ~48
- `components/Footer.tsx` - linha ~95

**Como fazer:**
1. Abra cada arquivo
2. Procure por `5524999999999`
3. Substitua pelo seu número real (formato: 55 + DDD + número)

**Exemplo:**
```
Seu número: (24) 99999-9999
Formato correto: 5524999999999
```

---

### 2. Email de Contato

**Email Atual (Placeholder)**: `contato@rkmetalizacoes.com.br`

**Onde atualizar:**
- `components/Shipping.tsx` - linha ~60
- `components/Footer.tsx` - linha ~110

**Como fazer:**
1. Procure por `contato@rkmetalizacoes.com.br`
2. Substitua pelo seu email real

---

### 3. Telefone

**Telefone Atual (Placeholder)**: `(24) 9999-9999`

**Onde atualizar:**
- `components/Footer.tsx` - linha ~105

---

## 🔧 Script de Busca e Substituição (Opcional)

Se preferir, use o comando abaixo no terminal para substituir automaticamente:

### Windows (PowerShell):

```powershell
# Substituir WhatsApp
Get-ChildItem -Path "components" -Filter "*.tsx" | ForEach-Object {
    (Get-Content $_.FullName) -replace '5524999999999', 'SEU_NUMERO_AQUI' | Set-Content $_.FullName
}

# Substituir Email
Get-ChildItem -Path "components" -Filter "*.tsx" | ForEach-Object {
    (Get-Content $_.FullName) -replace 'contato@rkmetalizacoes.com.br', 'seu-email@dominio.com.br' | Set-Content $_.FullName
}

# Substituir Telefone
Get-ChildItem -Path "components" -Filter "*.tsx" | ForEach-Object {
    (Get-Content $_.FullName) -replace '\(24\) 9999-9999', '(XX) XXXXX-XXXX' | Set-Content $_.FullName
}
```

---

## ✅ Checklist de Verificação

Antes de fazer deploy, verifique:

- [ ] Número WhatsApp atualizado em todos os componentes
- [ ] Email de contato atualizado
- [ ] Telefone atualizado
- [ ] Testou a navegação em desktop
- [ ] Testou a navegação em mobile
- [ ] Clicou em todos os botões de WhatsApp
- [ ] Testou o formulário de orçamento
- [ ] Verificou se as imagens carregam corretamente
- [ ] Testou os links de navegação (âncoras)
- [ ] Verificou o responsivo em diferentes tamanhos

---

## 🌐 Dados Sugeridos para Atualizar

Se ainda não tiver, considere adicionar:

1. **Redes Sociais**:
   - Instagram
   - Facebook
   - TikTok

2. **Localização**:
   - Endereço completo
   - Mapa interativo (Google Maps)

3. **Horário de Atendimento**:
   - Segunda a Sexta
   - Sábado
   - Domingo

4. **Formas de Pagamento**:
   - Pix
   - Cartão de crédito
   - Boleto

---

## 📞 Teste Rápido do WhatsApp

Para testar se o link do WhatsApp está funcionando:

1. Abra o navegador
2. Cole a URL: `https://wa.me/SEU_NUMERO_AQUI`
3. Você deve ser redirecionado para o WhatsApp

**Exemplo com número fictício:**
```
https://wa.me/5524999999999
```

---

## 🚀 Próximo Passo

Após atualizar todos os dados, execute:

```bash
npm run build
```

E então faça o deploy no Netlify ou Vercel seguindo as instruções em `DEPLOYMENT.md`

---

## 💡 Dicas

- Sempre teste os links antes de fazer deploy
- Mantenha um backup dos dados de contato
- Considere usar variáveis de ambiente para dados sensíveis
- Atualize regularmente os dados de contato

---

**Última atualização**: 14/11/2025
