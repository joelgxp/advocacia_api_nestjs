# 🏛️ API de Advocacia - NestJS

API REST para sistema de advocacia desenvolvida com NestJS e TypeScript.

## 🚀 Tecnologias

- **NestJS** - Framework Node.js
- **TypeScript** - Linguagem de programação
- **Node.js** - Runtime JavaScript

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run start:dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

## 🌐 Endpoints

- `GET /api` - Página inicial
- `GET /api/health` - Status da API

## 🚀 Deploy no Render

### Configuração Automática

1. Conecte seu repositório GitHub ao Render
2. Selecione "Web Service"
3. Use as seguintes configurações:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Node Version:** 18.x ou superior

### Configuração Manual

1. Acesse [Render Dashboard](https://dashboard.render.com)
2. Clique em "New +" → "Web Service"
3. Conecte seu repositório
4. Configure:
   - **Name:** advocacia-api
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Node Version:** 18.x

## 🔧 Variáveis de Ambiente

- `NODE_ENV` - Ambiente (development/production)
- `PORT` - Porta do servidor (padrão: 3000)

## 📝 Scripts Disponíveis

- `npm run start:dev` - Desenvolvimento com hot reload
- `npm run build` - Build para produção
- `npm start` - Iniciar em produção
- `npm run lint` - Verificar código
- `npm test` - Executar testes