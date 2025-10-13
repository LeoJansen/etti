# ServiceCardMobile

Componente ServiceCard otimizado especificamente para dispositivos móveis, com design e comportamento adaptados para telas menores.

## Características Principais

### 🎨 **Design Mobile-First**
- **Layout vertical**: Ícone no topo, título abaixo, descrição na parte inferior
- **Tamanhos otimizados**: Ícones e textos redimensionados para mobile
- **Espaçamento adaptativo**: Gaps e padding ajustados para touch screens
- **Altura mínima**: `min-h-[380px]` para consistência visual

### 🔥 **Animações GSAP Otimizadas**
- **Performance mobile**: Animações com duração de 1.8s (mais suave)
- **Escala reduzida**: `scale: 1.03` ao invés de 1.05 para evitar overflow
- **Filtros simplificados**: Drop-shadows menores para melhor performance
- **Cleanup automático**: Animações são limpas quando card fica inativo

### 📱 **Responsividade Avançada**
- **Breakpoints**: `text-sm sm:text-base` para diferentes tamanhos
- **Touch-friendly**: Elementos com tamanho adequado para dedos
- **Spacing flexível**: Usa `gap-4` consistente entre elementos
- **Centralização**: Todo conteúdo centralizado para melhor legibilidade

## Props

```javascript
{
  title: ["Linha 1", "Linha 2"],        // Array de strings para título
  description: "Texto da descrição",     // String com descrição completa  
  icon: {
    path: "/assets/icon.svg",            // Caminho do ícone
    title: "Alt text"                    // Texto alternativo
  },
  iconWidth: 60,                         // Largura do ícone
  iconHeight: 60,                        // Altura do ícone
  pulseOffset: 0,                        // Delay da animação (opcional)
  isActive: true                         // Se deve animar (padrão: true)
}
```

## Diferenças vs Desktop

| Aspecto | Desktop | Mobile |
|---------|---------|--------|
| Layout | Horizontal (ícone + título lado a lado) | Vertical (ícone sobre título) |
| Ícone | 100% do tamanho original | 80% do tamanho (`iconWidth * 0.8`) |
| Círculo do ícone | `w-30 h-21` variável | `w-20 h-20` fixo |
| Animação | Scale 1.05 | Scale 1.03 |
| Duração | 1.6s | 1.8s |
| Divider | Largura total | 75% da largura (`w-3/4`) |
| Texto | Variável por breakpoint | `text-sm sm:text-base` |

## Estados

### 🟢 **Ativo (isActive: true)**
- Animações GSAP funcionando
- Todas as propriedades visuais aplicadas
- Pulso no ícone e divider
- Texto com opacidade total

### 🔘 **Inativo (isActive: false)**
- Animações desabilitadas
- Visual estático
- Usado para cards laterais no carousel
- Performance otimizada

## Integração com Carousel

```jsx
// No ServicesCarouselMobile
<ServiceCardMobile
  title={service.title}
  description={service.description}
  icon={service.icon}
  iconWidth={service.icon.iconWidth}
  iconHeight={service.icon.iconHeight}
  pulseOffset={activeIndex}
  isActive={true} // Apenas o card central
/>
```

## Performance

- **Conditional rendering**: Animações apenas quando necessário
- **Cleanup automático**: `tl.kill()` remove animações antigas  
- **Reduced motion**: Respeitao `prefers-reduced-motion`
- **Touch optimized**: Sem hover states desnecessários

## Acessibilidade Mobile

- **Contraste adequado**: Cores otimizadas para mobile
- **Tamanhos touch**: Elementos com área clicável apropriada
- **Text scaling**: Responde ao zoom do sistema
- **Motion sensitive**: Animações desabilitáveis

## Estrutura Final (Pós-Consolidação)

```
mobile/
├── ServiceCardMobile.jsx          ← Card básico mobile
├── ServiceCardCarouselMobile.jsx  ← Card otimizado para carousel
├── ServicesMobile.jsx             ← ⭐ PRINCIPAL (usado no App)
└── README.md                      ← Esta documentação
```

**ServicesMobile.jsx** é o componente principal que:
- Importa e usa ServiceCardCarouselMobile
- Gerencia estado do carousel (activeIndex)
- Implementa navegação touch/swipe
- Tem header com altura corrigida (h-1/3)
- É o único arquivo importado no App.jsx