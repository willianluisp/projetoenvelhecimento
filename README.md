# Envelhecer é um Direito

> **Todas as idades importam.**
> Site oficial do projeto educacional *"Políticas da Educação para o Envelhecimento"*, desenvolvido por estudantes e professores da **EEB Profª Lourdes A. S. Lago** — Chapecó/SC.

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Acessibilidade](https://img.shields.io/badge/acessibilidade-AA-blue)
![Responsivo](https://img.shields.io/badge/responsivo-100%25-success)

---

## 📋 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura de arquivos](#-estrutura-de-arquivos)
- [Como executar](#-como-executar)
- [Estrutura do site](#-estrutura-do-site)
- [Acessibilidade](#-acessibilidade)
- [Responsividade](#-responsividade)
- [Equipe](#-equipe)
- [Referências](#-referências)
- [Licença](#-licença)

---

## 📖 Sobre o projeto

O envelhecimento da população é uma realidade crescente no Brasil e no mundo. Diante desse cenário, este projeto educacional interdisciplinar busca **refletir sobre o envelhecimento humano**, **valorizar a pessoa idosa** e **combater o etarismo** — o preconceito baseado na idade.

O site reúne em uma única página todo o material do projeto: contexto, objetivos, direitos garantidos pelo Estatuto da Pessoa Idosa, desconstrução de mitos etários, propostas de convivência intergeracional e uma atividade prática — o **jogo da memória afetiva** — pensada para ser jogada por estudantes em conjunto com familiares idosos.

| Informação | Detalhe |
|---|---|
| **Escola** | EEB Profª Lourdes A. S. Lago |
| **Cidade** | Chapecó / Santa Catarina |
| **Período** | 27 de abril a 09 de junho de 2025 |
| **Turmas** | 8º Ano e Ensino Médio |
| **Disciplinas** | Artes · Educação Física · História · Língua Portuguesa |

---

## 🎯 Objetivos

### Objetivo geral
Promover a educação para o envelhecimento, incentivando o respeito, a valorização da pessoa idosa e a compreensão do envelhecimento como um processo natural e socialmente relevante.

### Objetivos específicos
1. Compreender o conceito de envelhecimento humano e populacional
2. Identificar aspectos físicos, emocionais e sociais do envelhecimento
3. Conhecer os direitos da pessoa idosa previstos na legislação brasileira
4. Refletir sobre o papel da família e da sociedade
5. Combater estereótipos e preconceitos relacionados à velhice
6. Estimular a empatia, o respeito e a convivência intergeracional

---

## ✨ Funcionalidades

### 🌐 Navegação e interface
- Header fixo com navegação suave entre seções
- Menu responsivo com hamburguer animado em mobile
- Destaque automático do link da seção visível
- Scroll suave em todos os links internos
- Animações de revelação ao rolar a página (IntersectionObserver)

### 🎮 Jogo da Memória Afetiva
- **16 cartas** (8 pares) com itens nostálgicos: bicicleta, rádio antigo, ursinho, pipa, carrossel, carrinho, doce, videogame retrô
- **Efeito flip 3D** ao virar as cartas
- **Contador de jogadas** em tempo real
- **Cronômetro** mm:ss
- **Detecção automática de vitória** com modal animado
- **Confetes** ao final do jogo
- **Sons gerados via Web Audio API** (sem dependência de arquivos externos)
- Botão de **ligar/desligar som**
- Botão de **reiniciar** a qualquer momento
- Feedback visual: pulse no acerto, shake no erro

### ♿ Acessibilidade
- Tipografia grande (18px base)
- Botões com área de toque mínima de 56px
- Contraste suave porém legível
- Foco visível em todos os elementos interativos
- ARIA labels em ícones e elementos interativos
- Respeito a `prefers-reduced-motion`

---

## 🛠 Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica (`header`, `main`, `section`, `article`, `nav`, `footer`) |
| **CSS3** | Variáveis CSS, Grid, Flexbox, animações, media queries, transformações 3D |
| **JavaScript (ES6+)** | Lógica do jogo, IntersectionObserver, Web Audio API, manipulação de DOM |
| **Google Fonts** | Fraunces (display) + Nunito (corpo) |

**Sem dependências externas, sem frameworks, sem build step.** O projeto roda direto no navegador.

---

## 📁 Estrutura de arquivos

```
memoria-afetiva/
├── index.html       # Página única com todas as seções
├── style.css        # Estilos completos com paleta, layout e responsividade
├── script.js        # Lógica do jogo, animações e interações
└── README.md        # Este arquivo
```

---

## 🚀 Como executar

Por ser um projeto 100% estático, há três formas de rodar:

### Opção 1 — Abrir direto no navegador
```bash
# Basta clicar duas vezes no arquivo
index.html
```

### Opção 2 — Servidor local com Python
```bash
cd memoria-afetiva
python3 -m http.server 8000
# Acesse http://localhost:8000
```

### Opção 3 — Servidor local com Node.js
```bash
cd memoria-afetiva
npx serve
```

> 💡 **Dica:** o site usa Google Fonts; é recomendável estar conectado à internet na primeira execução para que as fontes sejam carregadas.

---

## 🗂 Estrutura do site

| # | Seção | Conteúdo |
|---|---|---|
| 1 | **Hero** | Slogan, apresentação e CTAs principais |
| 2 | **O Projeto** | Ficha técnica: escola, período, turmas, disciplinas |
| 3 | **Contexto** | O envelhecimento hoje + perguntas norteadoras |
| 4 | **Objetivos** | Objetivo geral + 6 específicos |
| 5 | **Direitos** | 6 áreas asseguradas pelo Estatuto da Pessoa Idosa |
| 6 | **Etarismo** | 4 mitos vs verdades sobre a velhice |
| 7 | **Intergeracional** | Diálogo entre gerações |
| 8 | **Atividade** | Jogo da memória afetiva |
| 9 | **Metodologia** | Como o projeto acontece + resultados + culminância |
| 10 | **Motivacional** | Frase de encerramento do projeto |
| 11 | **Créditos** | Professores responsáveis e áreas envolvidas |
| 12 | **Footer** | Identificação da escola, contatos e referências |

---

## ♿ Acessibilidade

O site segue as principais recomendações de acessibilidade:

- **Tipografia generosa** — 18px base no desktop, 17px no mobile, com hierarquia clara
- **Contraste suave** — paleta pastel mas legível, evitando cansaço visual
- **Áreas de toque grandes** — botões com altura mínima de 56px (64px no CTA principal)
- **Foco visível** — outline azul de 3px ao navegar pelo teclado
- **ARIA labels** — em ícones, botões e regiões interativas
- **Navegação por teclado** — todos os elementos interativos são focáveis
- **`prefers-reduced-motion`** — animações desativadas para usuários sensíveis a movimento
- **HTML semântico** — uso correto de `<main>`, `<section>`, `<nav>`, `<article>`

---

## 📱 Responsividade

Layout adaptado para todas as faixas de dispositivos:

| Breakpoint | Dispositivos | Ajustes |
|---|---|---|
| `> 1024px` | Desktops e notebooks | Layout completo com 2 colunas |
| `≤ 1024px` | Tablets em paisagem | Hero e contexto empilham |
| `≤ 768px` | Tablets / mobile grande | Menu hamburguer, fonte 17px |
| `≤ 480px` | Smartphones | Cartas do jogo se ajustam |
| `≤ 360px` | Mobile compacto | Espaçamentos reduzidos |

Testado em: iPhone, Android, iPad, tablets diversos, notebooks e desktops.

---

## 👥 Equipe

### Professores responsáveis
- **Cassiana**
- **Luciano**
- **Roberta**
- **Roseli**

### Áreas envolvidas
🎨 Artes · 🏃 Educação Física · 📜 História · 📚 Língua Portuguesa

### Estudantes
8º Ano · Ensino Médio

---

## 📚 Referências

- **BRASIL.** Estatuto da Pessoa Idosa — Lei nº 10.741/2003
- **BRASIL.** Ministério da Educação. Base Nacional Comum Curricular (BNCC)
- **Organização Mundial da Saúde (OMS).** Envelhecimento ativo

---

## 🏫 Contato

**EEB Profª Lourdes A. S. Lago**
Rua Caramuru, 300-E — Bairro Bela Vista
Chapecó / SC — CEP 89804-180
📧 [loudeslago@sed.sc.gov.br](mailto:loudeslago@sed.sc.gov.br)
📞 (49) 2049-7601

---

## 📄 Licença

Projeto educacional desenvolvido no âmbito da **Secretaria de Estado da Educação de Santa Catarina** — Coordenadoria Regional de Educação de Chapecó. Material de uso educacional, sem fins lucrativos.

© 2025 — EEB Profª Lourdes A. S. Lago. Feito com ♥ por estudantes e professores.