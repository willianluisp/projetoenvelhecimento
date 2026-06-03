/* =========================================================
   MEMÓRIA AFETIVA — script.js
   Funcionalidades:
   1. Header com efeito ao rolar
   2. Menu hamburguer responsivo
   3. Scroll suave + destaque de link ativo
   4. Animações de revelação ao rolar (IntersectionObserver)
   5. Jogo da memória completo: embaralhamento, flip, contador,
      cronômetro, detecção de vitória, reinício, sons gerados
      via Web Audio API (sem arquivos externos) e modal final
   ========================================================= */

(() => {
  'use strict';

  /* =====================================================
     0. CARROSSEL DE IMAGENS DO HERO
     ===================================================== */
  (() => {
    const slides     = document.querySelectorAll('.hero__slide');
    const dotsWrap   = document.getElementById('carouselDots');
    const btnPrev    = document.getElementById('carouselPrev');
    const btnNext    = document.getElementById('carouselNext');

    if (!slides.length || !dotsWrap) return;

    let current  = 0;
    let timer    = null;
    const DELAY  = 2500; // ms entre slides

    // Cria dots dinamicamente
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'hero__dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ir para foto ${i + 1}`);
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    const getDots = () => dotsWrap.querySelectorAll('.hero__dot');

    const goTo = (idx) => {
      slides[current].classList.remove('active');
      getDots()[current].classList.remove('active');
      getDots()[current].setAttribute('aria-selected', 'false');

      current = (idx + slides.length) % slides.length;

      slides[current].classList.add('active');
      getDots()[current].classList.add('active');
      getDots()[current].setAttribute('aria-selected', 'true');

      resetTimer();
    };

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    const resetTimer = () => {
      clearInterval(timer);
      timer = setInterval(next, DELAY);
    };

    btnNext && btnNext.addEventListener('click', () => { next(); });
    btnPrev && btnPrev.addEventListener('click', () => { prev(); });

    // Suporte a swipe (touch)
    let touchStartX = 0;
    const carousel  = document.getElementById('heroCarousel');
    if (carousel) {
      carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].clientX;
      }, { passive: true });
      carousel.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
      }, { passive: true });
    }

    // Pausa ao focar/hover no hero
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mouseenter', () => clearInterval(timer));
      hero.addEventListener('mouseleave', resetTimer);
    }

    // Suporte a teclado (setas)
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    });

    // Inicia autoplay
    resetTimer();
  })();

  /* =====  FIM DO CARROSSEL  ===== */

  /* =====================================================
     0b. CARROSSÉIS DE FOTOS (Seção Visitas)
         Funciona para N carrosséis na página
     ===================================================== */
  document.querySelectorAll('.foto-carrossel').forEach(carrossel => {
    const slides   = [...carrossel.querySelectorAll('.foto-carrossel__slide')];
    const dotsWrap = carrossel.querySelector('.foto-carrossel__dots');
    const contador = carrossel.querySelector('.foto-carrossel__contador');
    const btnPrev  = carrossel.querySelector('.foto-carrossel__btn--prev');
    const btnNext  = carrossel.querySelector('.foto-carrossel__btn--next');
    const total    = slides.length;
    if (!total) return;

    let current = 0;

    // Criar dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'foto-carrossel__dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Foto ${i + 1}`);
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap && dotsWrap.appendChild(dot);
    });

    const getDots = () => dotsWrap ? [...dotsWrap.querySelectorAll('.foto-carrossel__dot')] : [];

    const atualizarContador = () => {
      if (contador) contador.textContent = `${current + 1} / ${total}`;
    };

    const goTo = (idx) => {
      slides[current].classList.remove('active');
      const dots = getDots();
      if (dots[current]) {
        dots[current].classList.remove('active');
        dots[current].setAttribute('aria-selected', 'false');
      }
      current = (idx + total) % total;
      slides[current].classList.add('active');
      if (dots[current]) {
        dots[current].classList.add('active');
        dots[current].setAttribute('aria-selected', 'true');
      }
      atualizarContador();
    };

    // Autoplay 5 segundos
    let timer = null;
    const resetTimer = () => {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 3000);
    };

    const goToEResetar = (idx) => { goTo(idx); resetTimer(); };

    btnNext && btnNext.addEventListener('click', () => goToEResetar(current + 1));
    btnPrev && btnPrev.addEventListener('click', () => goToEResetar(current - 1));

    // Pausa ao passar o mouse
    carrossel.addEventListener('mouseenter', () => clearInterval(timer));
    carrossel.addEventListener('mouseleave', resetTimer);

    // Suporte a swipe (touch)
    let touchStartX = 0;
    carrossel.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
      clearInterval(timer);
    }, { passive: true });
    carrossel.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 45) dx < 0 ? goTo(current + 1) : goTo(current - 1);
      resetTimer();
    }, { passive: true });

    // Suporte a teclado quando o carrossel está em foco
    carrossel.setAttribute('tabindex', '0');
    carrossel.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  goToEResetar(current - 1);
      if (e.key === 'ArrowRight') goToEResetar(current + 1);
    });

    atualizarContador();
    resetTimer(); // inicia autoplay
  });

  /* ===  FIM DOS FOTO-CARROSSÉIS  === */

  /* =====================================================
     1. HEADER — sombra ao rolar
     ===================================================== */
  const header = document.querySelector('.header');
  const aplicarEstadoHeader = () => {
    if (window.scrollY > 30) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', aplicarEstadoHeader, { passive: true });
  aplicarEstadoHeader();

  /* =====================================================
     2. MENU HAMBURGUER (mobile)
     ===================================================== */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  const fecharMenu = () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menu');
  };

  const abrirMenu = () => {
    navMenu.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Fechar menu');
  };

  navToggle.addEventListener('click', () => {
    const aberto = navMenu.classList.contains('is-open');
    aberto ? fecharMenu() : abrirMenu();
  });

  // Fecha o menu ao clicar em um link
  // Caso especial: "Início" rola para o topo absoluto da página
  // (o id="topo" está no header fixo, então não funciona com âncora pura)
  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#topo') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      fecharMenu();
    });
  });

  // Logo também volta ao topo absoluto
  const logoLink = document.querySelector('.header .logo');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      if (logoLink.getAttribute('href') === '#topo') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Fecha o menu ao redimensionar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) fecharMenu();
  });

  /* =====================================================
     3. LINK ATIVO (destaca a seção que está visível)
     ===================================================== */
  const links   = document.querySelectorAll('.nav__link');
  const secoes  = ['topo', 'projeto', 'direitos', 'etarismo', 'jogo', 'visitas', 'creditos']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const ativarLink = id => {
    links.forEach(l => {
      const href = l.getAttribute('href') || '';
      l.classList.toggle('is-active', href === `#${id}`);
    });
  };

  const observerSecoes = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) ativarLink(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  secoes.forEach(s => observerSecoes.observe(s));

  /* =====================================================
     4. ANIMAÇÕES DE REVELAÇÃO AO SCROLL
     ===================================================== */
  const elementosReveal = document.querySelectorAll('.reveal');

  const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observerReveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elementosReveal.forEach(el => observerReveal.observe(el));

  /* =====================================================
     5. SONS GERADOS (sem arquivos externos)
        Usa Web Audio API — tons suaves e curtos
     ===================================================== */
  let audioCtx = null;
  let somAtivo = true;

  const garantirAudio = () => {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  };

  /**
   * Toca um tom suave.
   * @param {number} freq    - frequência em Hz
   * @param {number} duracao - segundos
   * @param {string} tipo    - tipo de onda (sine, triangle...)
   * @param {number} volume  - 0..1
   */
  const tocarTom = (freq, duracao = 0.18, tipo = 'sine', volume = 0.15) => {
    if (!somAtivo || !audioCtx) return;
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = tipo;
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const t = audioCtx.currentTime;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(volume, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duracao);

    osc.start(t);
    osc.stop(t + duracao + 0.02);
  };

  const somVirar  = () => tocarTom(420, 0.10, 'sine',     0.10);
  const somAcerto = () => {
    // Acorde feliz ascendente
    tocarTom(523.25, 0.15, 'triangle', 0.14);   // C5
    setTimeout(() => tocarTom(659.25, 0.15, 'triangle', 0.14), 90);  // E5
    setTimeout(() => tocarTom(783.99, 0.22, 'triangle', 0.14), 180); // G5
  };
  const somErro = () => {
    tocarTom(220, 0.16, 'sine', 0.10);
    setTimeout(() => tocarTom(180, 0.18, 'sine', 0.10), 100);
  };
  const somVitoria = () => {
    const notas = [523.25, 659.25, 783.99, 1046.5];
    notas.forEach((n, i) => setTimeout(() => tocarTom(n, 0.25, 'triangle', 0.16), i * 130));
  };

  // Botão de som
  const btnSom = document.getElementById('btnSom');
  const iconeSomOn  = document.getElementById('iconeSomOn');
  const iconeSomOff = document.getElementById('iconeSomOff');

  btnSom.addEventListener('click', () => {
    somAtivo = !somAtivo;
    btnSom.setAttribute('aria-pressed', String(somAtivo));
    btnSom.setAttribute('aria-label',
      somAtivo ? 'Desativar sons' : 'Ativar sons');
    iconeSomOn.style.display  = somAtivo ? '' : 'none';
    iconeSomOff.style.display = somAtivo ? 'none' : '';
    if (somAtivo) {
      garantirAudio();
      tocarTom(660, 0.12, 'sine', 0.12);
    }
  });

  /* =====================================================
     6. JOGO DA MEMÓRIA
     ===================================================== */

  // 8 itens nostálgicos — cada um aparece duas vezes (16 cartas)
  const ITENS = [
    { emoji: '🚲', nome: 'bicicleta antiga' },
    { emoji: '📻', nome: 'rádio antigo'     },
    { emoji: '🧸', nome: 'ursinho'          },
    { emoji: '🪁', nome: 'pipa'             },
    { emoji: '🎠', nome: 'carrossel'        },
    { emoji: '🚗', nome: 'carrinho antigo'  },
    { emoji: '🍭', nome: 'doce'             },
    { emoji: '🎮', nome: 'videogame retrô'  }
  ];

  const tabuleiro       = document.getElementById('tabuleiro');
  const elContador      = document.getElementById('contadorJogadas');
  const elCronometro    = document.getElementById('cronometro');
  const elPares         = document.getElementById('paresEncontrados');
  const elTotalPares    = document.getElementById('totalPares');
  const btnReiniciar    = document.getElementById('btnReiniciar');

  // Estado do jogo
  let cartas             = [];
  let primeiraCarta      = null;
  let segundaCarta       = null;
  let bloqueado          = false;       // evita cliques durante animação
  let jogadas            = 0;
  let paresEncontrados   = 0;
  let segundos           = 0;
  let intervaloCron      = null;
  let jogoIniciado       = false;

  elTotalPares.textContent = ITENS.length;

  /** Embaralha (Fisher-Yates) */
  const embaralhar = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /** Formata segundos em mm:ss */
  const formatarTempo = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const r = String(s % 60).padStart(2, '0');
    return `${m}:${r}`;
  };

  const iniciarCronometro = () => {
    if (intervaloCron) return;
    intervaloCron = setInterval(() => {
      segundos++;
      elCronometro.textContent = formatarTempo(segundos);
    }, 1000);
  };

  const pararCronometro = () => {
    clearInterval(intervaloCron);
    intervaloCron = null;
  };

  /** Cria o elemento HTML de uma carta */
  const criarCarta = (item, indice) => {
    const carta = document.createElement('button');
    carta.className = 'carta';
    carta.type = 'button';
    carta.dataset.id = item.id;
    carta.dataset.indice = indice;
    carta.setAttribute('role', 'gridcell');
    carta.setAttribute('aria-label', `Carta ${indice + 1}, fechada`);

    carta.innerHTML = `
      <span class="carta__face carta__costa">
        <span class="carta__costa-icon" aria-hidden="true">M</span>
      </span>
      <span class="carta__face carta__frente" aria-hidden="true">${item.emoji}</span>
    `;
    return carta;
  };

  /** Inicia (ou reinicia) o jogo */
  const iniciarJogo = () => {
    // Reset estado
    cartas = [];
    primeiraCarta = segundaCarta = null;
    bloqueado = false;
    jogadas = 0;
    paresEncontrados = 0;
    segundos = 0;
    jogoIniciado = false;
    pararCronometro();

    elContador.textContent = '0';
    elPares.textContent = '0';
    elCronometro.textContent = '00:00';

    tabuleiro.innerHTML = '';

    // Cria pares e embaralha
    const pares = ITENS.flatMap((item, idx) => ([
      { ...item, id: idx },
      { ...item, id: idx }
    ]));
    const embaralhado = embaralhar(pares);

    embaralhado.forEach((item, idx) => {
      const carta = criarCarta(item, idx);
      carta.addEventListener('click', () => virarCarta(carta));
      tabuleiro.appendChild(carta);
      cartas.push(carta);
    });
  };

  /** Lida com o clique em uma carta */
  const virarCarta = (carta) => {
    if (bloqueado) return;
    if (carta.classList.contains('is-flipped')) return;
    if (carta.classList.contains('is-acertada')) return;

    // Inicializa áudio na primeira interação (gesto do usuário)
    garantirAudio();

    // Inicia cronômetro na primeira jogada
    if (!jogoIniciado) {
      jogoIniciado = true;
      iniciarCronometro();
    }

    carta.classList.add('is-flipped');
    carta.setAttribute('aria-label', `Carta aberta`);
    somVirar();

    if (!primeiraCarta) {
      primeiraCarta = carta;
      return;
    }

    segundaCarta = carta;
    jogadas++;
    elContador.textContent = jogadas;

    verificarPar();
  };

  /** Verifica se as duas cartas viradas formam um par */
  const verificarPar = () => {
    const igual = primeiraCarta.dataset.id === segundaCarta.dataset.id;

    if (igual) {
      // Acertou!
      bloqueado = true;
      setTimeout(() => {
        primeiraCarta.classList.add('is-acertada');
        segundaCarta.classList.add('is-acertada');
        primeiraCarta.setAttribute('aria-label', 'Par encontrado');
        segundaCarta.setAttribute('aria-label', 'Par encontrado');
        somAcerto();

        paresEncontrados++;
        elPares.textContent = paresEncontrados;

        resetTurno();

        if (paresEncontrados === ITENS.length) {
          finalizarJogo();
        }
      }, 350);
    } else {
      // Errou
      bloqueado = true;
      setTimeout(() => {
        primeiraCarta.classList.add('is-erro');
        segundaCarta.classList.add('is-erro');
        somErro();
      }, 300);

      setTimeout(() => {
        primeiraCarta.classList.remove('is-flipped', 'is-erro');
        segundaCarta.classList.remove('is-flipped', 'is-erro');
        primeiraCarta.setAttribute('aria-label', 'Carta fechada');
        segundaCarta.setAttribute('aria-label', 'Carta fechada');
        resetTurno();
      }, 1100);
    }
  };

  const resetTurno = () => {
    primeiraCarta = null;
    segundaCarta  = null;
    bloqueado     = false;
  };

  /** Encerra o jogo: mostra modal de vitória com stats e confetes */
  const finalizarJogo = () => {
    pararCronometro();
    setTimeout(() => {
      somVitoria();
      mostrarModalVitoria();
    }, 500);
  };

  btnReiniciar.addEventListener('click', () => {
    iniciarJogo();
    // pequeno feedback sonoro
    garantirAudio();
    tocarTom(520, 0.12, 'sine', 0.12);
  });

  // Inicializa o jogo na primeira carga
  iniciarJogo();

  /* =====================================================
     7. MODAL DE VITÓRIA
     ===================================================== */
  const mostrarModalVitoria = () => {
    // Cria o modal dinamicamente
    let modal = document.querySelector('.modal-vitoria');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.className = 'modal-vitoria';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modalTitulo');

    modal.innerHTML = `
      <div class="modal-vitoria__caixa">
        <span class="modal-vitoria__emoji" aria-hidden="true">🎉</span>
        <h3 class="modal-vitoria__titulo" id="modalTitulo">Que momento especial!</h3>
        <p class="modal-vitoria__texto">
          Você encontrou todos os pares. Cada acerto é uma pequena vitória do coração.
        </p>
        <div class="modal-vitoria__stats">
          <div>
            <span>Jogadas</span>
            <span>${jogadas}</span>
          </div>
          <div>
            <span>Tempo</span>
            <span>${formatarTempo(segundos)}</span>
          </div>
        </div>
        <div style="display:flex; gap:0.75rem; justify-content:center; flex-wrap:wrap;">
          <button class="btn btn--primary" id="btnJogarNovamente">Jogar novamente</button>
          <button class="btn btn--ghost" id="btnFecharModal">Fechar</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Forçar reflow para ativar transição
    requestAnimationFrame(() => modal.classList.add('is-aberto'));

    // Gerar confetes
    gerarConfetes(modal);

    // Botões do modal
    modal.querySelector('#btnJogarNovamente').addEventListener('click', () => {
      fecharModalVitoria(modal);
      iniciarJogo();
      // Rola até o jogo
      document.getElementById('jogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    modal.querySelector('#btnFecharModal').addEventListener('click', () => fecharModalVitoria(modal));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) fecharModalVitoria(modal);
    });

    // Esc fecha
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        fecharModalVitoria(modal);
        document.removeEventListener('keydown', onEsc);
      }
    };
    document.addEventListener('keydown', onEsc);
  };

  const fecharModalVitoria = (modal) => {
    modal.classList.remove('is-aberto');
    setTimeout(() => modal.remove(), 300);
  };

  const gerarConfetes = (container) => {
    const cores = ['#6FA8DC', '#8AB48A', '#D4A574', '#E89B9B', '#FFFDF8'];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement('span');
      c.className = 'confete';
      c.style.left = Math.random() * 100 + '%';
      c.style.background = cores[Math.floor(Math.random() * cores.length)];
      c.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      c.style.animationDelay = (Math.random() * 0.4) + 's';
      c.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }
  };

})();