# Services Carousel

Este carousel foi criado para a seção de serviços da ETTI, seguindo o design de referência onde os cards laterais ficam visíveis mas menores, e apenas o card central mostra o conteúdo completo.

## Componentes

### 1. ServiceCardCarousel.jsx
- Card individual do carousel
- Aceita prop `isActive` que controla se está no centro (ativo) ou lateral
- Cards ativos são maiores e mostram toda a informação
- Cards inativos são menores e mostram apenas título e ícone
- Inclui animações GSAP apenas para o card ativo

### 2. ServicesCarousel.jsx (Desktop)
- Carousel principal para desktop
- Mostra 3 cards simultâneos: um no centro (ativo) e dois laterais
- Navegação por botões laterais e indicadores na parte inferior
- Suporte a navegação por teclado (setas esquerda/direita)
- Auto-play opcional (comentado por padrão)

### 3. ServicesCarouselMobile.jsx (Mobile)
- Versão otimizada para dispositivos móveis
- Card ativo no centro com cards laterais parcialmente visíveis
- Suporte a navegação por swipe/touch
- Botões de navegação adaptados para mobile
- Indicadores de posição

## Funcionalidades

### Navegação
- **Desktop**: Clique nos cards laterais, botões de seta, indicadores ou teclado
- **Mobile**: Touch/swipe, botões ou indicadores

### Responsividade
- Desktop: `hidden md:flex` no Services.jsx
- Mobile: `flex md:hidden` no ServicesCarouselMobile.jsx

### Animações
- Transições suaves entre cards
- Cards laterais com escala reduzida e opacidade menor
- Animações GSAP do ícone apenas no card ativo
- Hover effects nos botões e indicadores

## Personalização

### Cores
- Cor principal: `#eb9948` (laranja ETTI)
- Background: vidro fosco com `backdrop-blur`
- Cards inativos: `opacity-60`

### Tamanhos
- **Card ativo**: 280px × 400px (desktop)
- **Card inativo**: 200px × 320px (desktop)
- **Mobile**: Cards adaptados para telas menores

### Configurações
```javascript
// Para ativar auto-play (opcional)
useEffect(() => {
  const interval = setInterval(() => {
    handleNext()
  }, 5000) // 5 segundos
  return () => clearInterval(interval)
}, [activeIndex])
```

## Estrutura de Dados
O carousel utiliza o arquivo `ServicesContent.js` existente com a estrutura:
```javascript
{
  icon: {
    path: "/assets/iconServices12.svg",
    iconWidth: 60,
    iconHeight: 60
  },
  title: ["Instalações", "Elétricas"],
  description: "Descrição do serviço..."
}
```

## Acessibilidade
- Labels ARIA para botões de navegação
- Suporte a navegação por teclado
- Indicadores clicáveis com labels descritivos
- Respeito ao `prefers-reduced-motion` nas animações GSAP