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
- [Referências](#-referências)
- [Licença](#-licença)

---

## 📖 Sobre o projeto

O envelhecimento da população é uma realidade crescente no Brasil e no mundo. Diante desse cenário, este projeto educacional interdisciplinar busca **refletir sobre o envelhecimento humano**, **valorizar a pessoa idosa** e **combater o etarismo** — o preconceito baseado na idade.

O site reúne em uma única página todo o material do projeto: contexto, objetivos, pilares de um envelhecimento saudável, direitos garantidos pelo Estatuto da Pessoa Idosa, desconstrução de mitos etários, dois jogos educativos (memória afetiva e antônimos), registros de visitas externas e a produção textual **"Eu em 2076"**, na qual os próprios estudantes imaginaram como serão suas vidas na terceira idade.

| Informação | Detalhe |
|---|---|
| **Escola** | EEB Profª Lourdes A. S. Lago |
| **Cidade** | Chapecó / Santa Catarina |
| **Período** | 1º trimestre letivo de 2026 |
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
- Menu responsivo com hamburguer animado, ativado com antecedência (≤1180px) para nunca espremer os links em telas intermediárias
- Destaque automático do link da seção visível
- Scroll suave em todos os links internos
- Animações de revelação ao rolar a página (IntersectionObserver)

### 🎮 Jogo da Memória Afetiva
- **16 cartas** (8 pares) com itens nostálgicos: bicicleta, rádio antigo, ursinho, pipa, carrossel, carrinho, doce, videogame retrô
- **Efeito flip 3D** ao virar as cartas
- **Contador de jogadas** em tempo real
- **Cronômetro** mm:ss
- **Detecção automática de vitória** com modal animado e confetes
- **Sons gerados via Web Audio API** (sem dependência de arquivos externos)
- Botão de **ligar/desligar som** e de **reiniciar** a qualquer momento
- Feedback visual: pulse no acerto, shake no erro

### 🔤 Jogo de Antônimos
- Atividade de vocabulário com **3 níveis de dificuldade** (fácil, médio, difícil)
- Tela de resultado com opções de jogar novamente ou trocar de nível

### 🚌 Visitas externas
Registro fotográfico de três saídas de campo da turma:
1. **Cidade do Idoso**
2. **Visita ao Asilo**
3. **Vôlei Adaptado para Terceira Idade** — com carrossel de fotos, vídeo do depoimento de uma das atletas (transcrito e contextualizado na página) e crédito ao aluno que conduziu a entrevista

### 🕰️ Eu em 2076
Seção dedicada à produção textual em que os alunos do 8º ano imaginaram suas próprias vidas na terceira idade, inspirados pela visita ao vôlei adaptado:
- **Linha do tempo** do projeto (visita → escrita → apresentação → projeção com IA)
- **Galeria "Registros da produção"** em layout *masonry* (cada foto mantém sua proporção original, sem cortes forçados), com cartão de destaque comparando a foto real do aluno com a projeção gerada por Inteligência Artificial de como poderá estar em 2076
- **Lightbox clicável**: qualquer foto da galeria abre ampliada (essencial para ler as produções manuscritas), com fechamento por clique fora, botão dedicado ou tecla `Esc`, e suporte a navegação por teclado (`Tab` + `Enter`/`Espaço`)
- **Poema de encerramento** da produção, em destaque visual

### ♿ Acessibilidade
- Tipografia grande e escalável (16–18px conforme o dispositivo)
- Botões com área de toque mínima de 56px
- Contraste suave porém legível
- Foco visível em todos os elementos interativos, incluindo a galeria e o lightbox
- ARIA labels em ícones, botões, diálogos e regiões interativas
- Respeito a `prefers-reduced-motion`

---

## 🛠 Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica (`header`, `main`, `section`, `article`, `figure`, `nav`, `footer`) |
| **CSS3** | Variáveis CSS (incluindo cores dinâmicas por card via custom properties), Grid, Flexbox, colunas *masonry*, animações, media queries, transformações 3D |
| **JavaScript (ES6+)** | Lógica dos jogos, IntersectionObserver, Web Audio API, lightbox de imagens, manipulação de DOM |
| **Google Fonts** | Fraunces (display) + Nunito (corpo) |

**Sem dependências externas, sem frameworks, sem build step.** O projeto roda direto no navegador.

---

## 📁 Estrutura de arquivos

```
memoria-afetiva/
├── index.html                     # Página única com todas as seções
├── style.css                      # Estilos completos com paleta, layout e responsividade
├── script.js                      # Lógica dos jogos, animações, carrosséis e lightbox
├── image/
│   ├── Logo.png
│   ├── (fotos do hero, visitas, etc.)
│   └── registrosProducao/         # Fotos da seção "Eu em 2076" (galeria + comparativo IA)
│       ├── registrosProducao1.jpg
│       └── ... registrosProducao8.jpg
├── video/
│   └── eu-em-2076-volei.mp4       # Depoimento em vídeo da visita ao vôlei adaptado
└── README.md                      # Este arquivo
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
| 3 | **Objetivos** | Objetivo geral + 6 específicos |
| 4 | **Prevenção** | Pilares para um envelhecimento saudável (alimentação, movimento, vínculos, mente ativa, sono etc.) |
| 5 | **Direitos** | 6 áreas asseguradas pelo Estatuto da Pessoa Idosa |
| 6 | **Etarismo** | 4 mitos vs verdades sobre a velhice |
| 7 | **Atividade — Memória** | Jogo da memória afetiva |
| 8 | **Atividade — Antônimos** | Jogo de vocabulário com 3 níveis de dificuldade |
| 9 | **Metodologia** | Como o projeto acontece, resultados esperados e culminância |
| 10 | **Motivacional** | Frase de encerramento do projeto |
| 11 | **Visitas** | Cidade do Idoso, Asilo e Vôlei Adaptado (fotos + vídeo + depoimento) |
| 12 | **Eu em 2076** | Linha do tempo, galeria "Registros da produção" com lightbox e poema |
| 13 | **Créditos** | Professores responsáveis e áreas envolvidas |
| 14 | **Footer** | Identificação da escola, contatos e referências |

---

## ♿ Acessibilidade

O site segue as principais recomendações de acessibilidade:

- **Tipografia generosa e responsiva** — 18px base no desktop, escalando para 16px no mobile, com hierarquia clara
- **Contraste suave** — paleta pastel mas legível, evitando cansaço visual
- **Áreas de toque grandes** — botões com altura mínima de 56px (64px no CTA principal)
- **Foco visível** — outline azul de 3px ao navegar pelo teclado, inclusive na galeria e no lightbox
- **ARIA labels** — em ícones, botões, diálogos (`role="dialog"`, `aria-modal`) e regiões interativas
- **Navegação por teclado** — todos os elementos interativos são focáveis, incluindo os cards da galeria (`tabindex`, `Enter`/`Espaço` para abrir, `Esc` para fechar)
- **`prefers-reduced-motion`** — animações desativadas para usuários sensíveis a movimento
- **HTML semântico** — uso correto de `<main>`, `<section>`, `<article>`, `<figure>`, `<nav>`

---

## 📱 Responsividade

Layout adaptado para todas as faixas de dispositivos, com compactação específica de tipografia, ícones e espaçamento em telas pequenas:

| Breakpoint | Dispositivos | Ajustes |
|---|---|---|
| `> 1180px` | Desktops e notebooks | Layout completo, menu horizontal |
| `≤ 1180px` | Tablets / telas intermediárias | Menu vira hambúrguer (evita espremer os links) |
| `≤ 1024px` | Tablets em paisagem | Hero e contexto empilham |
| `≤ 768px` | Tablets / mobile grande | Tipografia e paddings de cards reduzidos, cantos menos arredondados |
| `≤ 640px` | Smartphones grandes | Galeria em 2 colunas, blocos de visita e depoimento compactados |
| `≤ 480px` | Smartphones | Ícones, avatares e cards recebem uma segunda rodada de compactação |
| `≤ 360px` | Mobile compacto | Espaçamentos mínimos ajustados |

Testado em: iPhone, Android, iPad, tablets diversos, notebooks e desktops.

---


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
📧 [loudeslago@sed.sc.gov.br](mailto:loudeslago@sed.sc.gov.br) <!-- ⚠️ conferir grafia: pode faltar um "r" de "Lourdes" -->
📞 (49) 2049-7601

---

## 📄 Licença

Projeto educacional desenvolvido no âmbito da **Secretaria de Estado da Educação de Santa Catarina** — Coordenadoria Regional de Educação de Chapecó. Material de uso educacional, sem fins lucrativos.

© 2026 — EEB Profª Lourdes A. S. Lago. Feito com ♥ por estudantes e professores.