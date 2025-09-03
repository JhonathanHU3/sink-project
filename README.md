# Sink Project

Repositório oficial da **Sink Games Academy** – uma plataforma de ensino a distância especializada em jogos competitivos online.

---

## 🏆 Sobre o Projeto

O **Sink Project** é uma plataforma EAD focada em jogos competitivos online, oferecendo cursos, comunidades, torneios e ferramentas para o desenvolvimento pessoal e profissional de jogadores.

---

## 🚀 Funcionalidades

- Ambiente interativo de aprendizado com módulos e salas virtuais
- Perfil do aluno, conquistas e estatísticas
- Organização de eventos e torneios online
- Painel administrativo para gerenciamento de usuários e conteúdos
- Fórum e chat para interação entre alunos e instrutores
- Sistema de autenticação JWT seguro
- Consumo de API externa (Supabase) para recursos e dados adicionais

---

## 🛠️ Tecnologias Utilizadas

- **Node.js / Express:** Backend da aplicação, rotas e lógica de negócio
- **JWT:** Autenticação e autorização de usuários
- **Supabase:** Consumo de API externa para dados e funcionalidades adicionais
- **PostgreSQL:** Banco de dados principal da plataforma
- **EJS:** Templates dinâmicos para renderização das páginas
- **JavaScript:** Funcionalidades interativas no frontend e integração com o backend
- **CSS:** Estilização responsiva e moderna

---

## ⚡ Instalação

Siga os passos abaixo para instalar e rodar localmente:

```bash
# Clone o repositório
git clone https://github.com/JhonathanHU3/sink-project.git
cd sink-project

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais do PostgreSQL, JWT_SECRET, dados do Supabase etc.

# Execute as migrações do banco de dados (se necessário)
npm run migrate

# Inicie a aplicação
npm start
```

---

## 🗝️ Configuração

No arquivo `.env` você deve definir:

```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/sinkdb
JWT_SECRET=sua_chave_secreta
SUPABASE_URL=https://xyzcompany.supabase.co
SUPABASE_KEY=chave_publica_supabase
```

---

## 📚 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature ou correção (`git checkout -b minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'Minha feature'`)
4. Envie para o seu fork (`git push origin minha-feature`)
5. Abra um Pull Request

---

## 💬 Contato e Suporte

- Para dúvidas, sugestões ou bugs, abra uma [issue](https://github.com/JhonathanHU3/sink-project/issues)
- Contato direto: [email@email.com] (substitua pelo email oficial)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).  
Sinta-se livre para usar, modificar e distribuir!

---

**Sink Games Academy &copy; 2025**  
_Aprenda. Jogue. Conquiste._
