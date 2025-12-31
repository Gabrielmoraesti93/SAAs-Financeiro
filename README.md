# SAAs-Financeiro 💰📊

Sistema **SaaS de gestão financeira pessoal e/ou empresarial**, focado em controle de receitas, despesas, visualização de dados e organização financeira de forma simples e eficiente.

O objetivo do projeto é evoluir para uma solução escalável, podendo atender usuários finais e pequenos negócios.

---

## 🚀 Funcionalidades (em evolução)

- Cadastro de receitas e despesas
- Classificação por categorias
- Visualização de saldo e histórico financeiro
- Dashboard com indicadores
- Organização mensal e anual
- Estrutura preparada para autenticação de usuários
- Base para evolução em modelo SaaS

---

## 🧱 Arquitetura do Projeto

SAAs-Financeiro/
├── backend/ # API e regras de negócio
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── services/
│ │ └── models/
│ ├── .env.example
│ └── package.json
│
├── frontend/ # Interface do usuário
│ ├── src/
│ ├── public/
│ └── package.json
│
├── docs/ # Documentação do projeto
├── .gitignore
├── README.md
└── LICENSE


---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- JavaScript
- Express
- (Banco de dados a definir: PostgreSQL / MongoDB)

### Frontend
- JavaScript
- Framework moderno (React / Next.js)
- HTML5 / CSS3

### DevOps / Versionamento
- Git
- GitHub
- Vercel (deploy)
- Variáveis de ambiente (.env)

---

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- Git
- Gerenciador de pacotes (npm ou yarn)

---

## 📦 Instalação e Execução

### 🔹 Clonar o repositório
```bash
git clone https://github.com/Gabrielmoraesti93/SAAs-Financeiro.git
cd SAAs-Financeiro

cd backend
npm install
npm run dev

cd frontend
npm install
npm run dev

http://localhost:3001

PORT=3000
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=

npm test

📈 Roadmap

 Autenticação de usuários

 Dashboard financeiro completo

 Relatórios mensais e anuais

 Integração com banco de dados

 Deploy em produção

 Evolução para modelo SaaS multiusuário

Contribuição

Contribuições são bem-vindas!

Faça um fork do projeto

Crie uma branch (git checkout -b feature/nova-feature)

Commit suas mudanças (git commit -m 'feat: nova funcionalidade')

Push para a branch (git push origin feature/nova-feature)

Abra um Pull Request

Licença

Este projeto está sob a licença MIT.
Veja o arquivo LICENSE
 para mais detalhes.

Autor

Gabriel Santos Moraes
💼 Projeto em evolução com foco em SaaS, tecnologia e gestão financeira.
🔗 GitHub: https://github.com/Gabrielmoraesti93


---






