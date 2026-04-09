# 🎮 CLONE TABNEWS: THE LEGEND OF THE FULL STACK
## *A Pixel Art Adventure in Web Development*

```
╔══════════════════════════════════════════════════════════════╗
║  INSERT COIN                        CREDITS: CURSO.DEV       ║
║                                                              ║
║           ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄          ║
║           █  CLONE TABNEWS  ║  QUEST LOG  █                 ║
║           ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀          ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 📜 THE LEGEND BEGINS

> *"No reino do JavaScript, um herói deve erguer o TabNews do zero, forjando código com as chamas do Node.js e as runas do React..."*

Bem-vindo, **Dev Padawan**! Sua missão é construir o lendário **Clone TabNews**, um portal de notícias para programadores. Siga esta quest log passo a passo para subir de nível!

---

## 🗡️ INVENTORY - ITENS NECESSÁRIOS

| Item | Versão | Raridade |
|------|--------|----------|
| ⚔️ Node.js | LTS Hydrogen (v18) | ⭐⭐⭐⭐⭐ |
| 🛡️ Next.js | 13.1.6 | ⭐⭐⭐⭐ |
| 🔮 React | 18.2.0 | ⭐⭐⭐⭐ |
| 📜 React-DOM | 18.2.0 | ⭐⭐⭐⭐ |
| 🏆 NPM | Latest | ⭐⭐⭐ |

---

## 🎯 QUEST LOG

### ⚡ QUEST 1: THE SUMMONING RITUAL
**Objetivo:** Invoque o projeto do vazio!

```
┌─────────────────────────────────┐
│  > npm init                     │
│                                 │
│  [HERO] Iniciando ritual...     │
│  ⚡ Mana consumida: 0/100        │
└─────────────────────────────────┘
```

**Instruções:**
- Execute o comando mágico `npm init`
- Pressione **ENTER** para aceitar os destinos padrão
- Quando chegar em **license**, digite `MIT` para receber a bênção do Código Aberto!

> 🎵 *Som de baú abrindo* - Você recebeu: `package.json`!

---

### ⚡ QUEST 2: FORGING THE NEXT SWORD
**Objetivo:** Forje a arma principal do framework!

```
┌─────────────────────────────────┐
│  > npm install next@13.1.6      │
│                                 │
│  🔨 Forjando Next.js...         │
│  ████████████░░░░ 80%           │
└─────────────────────────────────┘
```

**Poder desbloqueado:** Roteamento automático, SSR, e renderização híbrida!

---

### ⚡ QUEST 3: AWAKENING THE REACT SPIRIT
**Objetivo:** Desperte o espírito da interface!

```
┌─────────────────────────────────┐
│  > npm install react@18.2.0     │
│                                 │
│  ✨ React despertou!            │
│  💚 Coração do Virtual DOM      │
└─────────────────────────────────┘
```

---

### ⚡ QUEST 4: THE NVM CRYSTAL
**Objetivo:** Cristalize a versão do Node.js!

```
    💎 LTS/HYDROGEN CRYSTAL 💎
         .-"""""-.
        /         \
       |   v18     |
        \  LTS    /
         '-.....-'
```

**Passos do Ritual:**

| Comando | Efeito Mágico |
|---------|---------------|
| `nvm install lts/hydrogen` | Invoca o cristal Hydrogen |
| `nvm alias default lts/hydrogen` | Vincula o cristal ao seu ser |
| `echo "lts/hydrogen" > .nvmrc` | Cria o grimório `.nvmrc` |

> ⚠️ **Cuidado, herói!** No comando 4.1, digite **"hydrogen"** com **Y**! "hidrogen" é uma maldição de digitação! 👻

---

### ⚡ QUEST 5: BINDING THE REACT-DOM SOUL
**Objetivo:** Una o React ao DOM!

```
┌─────────────────────────────────┐
│  > npm install react-dom@18.2.0 │
│                                 │
│  🔗 Vínculo estabelecido!       │
│  ⚛️ ↔️ 🌐  React ↔️ DOM         │
└─────────────────────────────────┘
```

---

### ⚡ QUEST 6: THE MANIFEST SCROLL
**Objetivo:** Inscreva o comando de desenvolvimento!

```javascript
// 📜 package.json
{
  "name": "clone-tabnews",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev"  // ← ✨ Adicione esta linha mágica!
  },
  "license": "MIT"
}
```

> 💡 **Dica de Mestre:** O script `"dev"` abre o portal para `http://localhost:3000`!

---

### ⚡ QUEST 6.5: THE EDITOR CONFIG RUNE
**Objetivo:** Inscreva a runa de configuração do editor!

```
    📜 ANCIENT RUNE 📜
        ┌────────────┐
        │ .editor    │
        │ config     │
        └────────────┘
```

**O que é:** Um arquivo mágico que padroniza a formatação de código entre todos os desenvolvedores do projeto, independentemente do editor usado!

**Crie o arquivo `.editorconfig` na raiz do projeto:**

```ini
# 📜 .editorconfig
root = true

[*]
indent_style = space
indent_size = 2
```

**Decodifiquemos a magia:**

| Runa | Significado | Poder |
|------|------------|-------|
| `root = true` | Raiz do grimório | Para a busca de configs em pastas pai |
| `[*]` | Aplica a TODOS os arquivos | Padroniza todo o código ⚡ |
| `indent_style = space` | Use espaços, não tabs | Evita a Maldição do Tab ❌ |
| `indent_size = 2` | 2 espaços por indentação | Economiza poder e mantém legibilidade ✨ |

**🎯 Por que isso importa:** 
- ✅ Todos os devs formatam igualmente
- ✅ Evita conflitos em Pull Requests (sem mudanças de espaçamento)
- ✅ Ferramentas como Prettier e ESLint respeitam essas configs
- ✅ Seu editor VS Code automaticamente segue essas regras!

> 💡 **Dica Elder:** Instale a extensão **EditorConfig for VS Code** para suporte completo!

---

### ⚡ QUEST 7: THE SANCTUARY OF PAGES
**Objetivo:** Erga o santuário inicial!

```
📁 clone-tabnews/
└── 📁 pages/           ← [CRIAR PASTA]
    └── 📄 index.js     ← [CRIAR ARQUIVO]
```

**Encante o `index.js` com este feitiço:**

```javascript
// ⚔️ pages/index.js
export default function Home() {
  return (
    <div style={{
      background: '#000080',
      color: '#00FF00',
      fontFamily: '"Press Start 2P", monospace',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>🎮 CLONE TABNEWS 🎮</h1>
      <p>Insert news to continue...</p>
      <p>SCORE: 000000</p>
    </div>
  );
}
```

---

### ⚡ QUEST 8: IGNITE THE SERVER
**Objetivo:** Acenda a fornalha do desenvolvimento!

```
┌─────────────────────────────────┐
│  > npm run dev                  │
│                                 │
│  🔥 Servidor iniciado!          │
│  🌐 http://localhost:3000       │
│  ⏱️ Ready in 892ms              │
└─────────────────────────────────┘
```

---

## 🐛 SIDE QUEST: THE COMMONJS CURSE

```
⚠️ BOSS APPEARED: Import/Export Error!
```

**Se você encontrar o erro:**
```
SyntaxError: Cannot use import statement outside a module
```

**Solução:** Remova a maldição do `package.json`!

```javascript
// ❌ REMOVA ESTA LINHA MALDITA:
"type": "commonjs"

// ✅ Deixe o padrão ES Modules reinar!
```

> 🎵 *Som de inimigo derrotado* - XP Ganho: +50!

---

## 🌐 SIDE QUEST: THE PORTAL VISIBILITY

```
🔒 PORTA PRIVADA DETECTADA
```

**Para abrir o portal ao mundo exterior:**

1. Abra o **Terminal Tab** no VS Code
2. Clique em **"Ports"** (ou "Portas")
3. Encontre a porta **3000**
4. Clique com direito → **"Port Visibility: Public"**

```
🔓 PORTA PÚBLICA! OUTROS DEVS PODEM VISITAR!
```

---

## 🏆 ACHIEVEMENTS UNLOCKED

| Conquista | Descrição |
|-----------|-----------|
| 🥇 **Hello World!** | Primeira página renderizada |
| 🥈 **Node Master** | Versão fixada com NVM |
| 🥉 **Module Walker** | Corrigiu erro de importação |
| 🏅 **Open Sourcerer** | Licença MIT aplicada |
| 🎖️ **Port Opener** | Tornou a porta pública |

---

## 🎮 COMANDOS RÁPIDOS (CHEAT CODES)

```bash
# START GAME
npm init -y && npm install next@13.1.6 react@18.2.0 react-dom@18.2.0

# SET NODE VERSION
nvm install lts/hydrogen && nvm alias default lts/hydrogen

# RUN DEV MODE
npm run dev
```

---

## 🎬 END OF CHAPTER 1

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║     🎉 PARABÉNS! SEU SERVIDOR ESTÁ RODANDO! 🎉              ║
║                                                              ║
║     PRÓXIMA FASE: Em breve no Curso.Dev...                   ║
║                                                              ║
║              CONTINUE?  [YES]  [NO]                          ║
║                                                              ║
║              10... 9... 8...                                 ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

*Desenvolvido com 💚 e muitos pixels para o Curso.Dev*


