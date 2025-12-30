# 💰 Finance Tracker

Aplicação web para **controle financeiro pessoal**, desenvolvida com foco em organização mensal de receitas, despesas e acompanhamento de saldo.  
Este projeto é a base para evolução futura em um **SaaS financeiro**.

---

## 🚀 Visão Geral

O **Finance Tracker** permite:

- Visualizar receitas e gastos mensais
- Calcular saldo automaticamente
- Identificar a próxima conta a vencer
- Listar despesas por categoria, valor e vencimento
- Interface simples, rápida e responsiva

Atualmente, os dados são carregados a partir de arquivos JSON locais, com planejamento para migração para banco de dados e autenticação de usuários.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Node.js**
- **Vercel** (deploy)

---

## 📂 Estrutura do Projeto

```text
finance-tracker/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│
├─ data/
│  └─ expenses-2025-01.json
│
├─ public/
│
├─ .gitignore
├─ next.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md
