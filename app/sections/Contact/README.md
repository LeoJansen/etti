# Animações GSAP - Seção Contact

## Descrição
Esta implementação adiciona animações GSAP sofisticadas para a seção de contato, com aparecimento gradativo de elementos e efeitos interativos.

## Arquivos Criados/Modificados

### Animações
- `contactAnimation.js` - Animações GSAP para desktop
- `mobile/contactMobileAnimation.js` - Animações GSAP otimizadas para mobile
- `contact.css` - Estilos CSS para suporte às animações

### Componentes
- `Contact.jsx` - Componente principal atualizado com animações
- `mobile/ContactMobile.jsx` - Componente mobile atualizado com animações

## Funcionalidades Implementadas

### Animações Principais
1. **Background**: Fade-in com leve zoom out
2. **Título**: Aparece de baixo para cima com scale
3. **Cards**: Aparecem em sequência (stagger) de baixo para cima
4. **Botões**: Animação com efeito bounce (back.out)

### Efeitos Interativos
- **Hover nos cards**: Scale up + movimento para cima
- **Hover nos botões**: Scale up suave
- **Touch no mobile**: Efeito de tap com feedback visual

### Recursos Avançados
- **ScrollTrigger**: Animações ativadas quando a seção entra em viewport
- **Responsive**: Animações diferentes para desktop e mobile
- **Fallback CSS**: Animações CSS caso GSAP falhe
- **Accessibility**: Respeita `prefers-reduced-motion`
- **Performance**: Uso de `will-change` para otimização

## Configuração de Timeline

### Desktop
```javascript
ScrollTrigger: {
  trigger: "#contact",
  start: "top 80%",    // Inicia quando seção está 80% visível
  end: "bottom 20%",   // Para quando seção sai 20% do viewport
  toggleActions: "play none none reverse"
}
```

### Sequência de Animação
1. Background (1.5s) - Primeiro elemento
2. Título (1.2s) - Overlap de 1.2s
3. Cards (1s + stagger 0.2s) - Overlap de 0.8s
4. Botões (0.8s + stagger 0.15s) - Overlap de 0.5s

## Classes CSS Aplicadas

### Classes de Animação
- `.contact-title` / `.contact-title-mobile` - Título principal
- `.contact-card` / `.contact-card-mobile` - Cards de informação
- `.contact-button` / `.contact-button-mobile` - Botões de ação
- `.bg-image` / `.bg-image-mobile` - Imagem de background

### Classes de Estado
- `.gsap-ready` - Adicionada quando GSAP carrega com sucesso
- `.contact-fallback` - Ativa animações CSS caso GSAP falhe

## Dependências
- GSAP 3.13.0+
- ScrollTrigger plugin
- React 19.1.0+
- Next.js 15.5.3+

## Notas de Performance
- Animações otimizadas com `will-change`
- Estados iniciais definidos em CSS para evitar FOUC
- Cleanup automático de timelines no unmount
- Fallback CSS para compatibilidade

## Acessibilidade
- Respeita configurações de movimento reduzido
- Animações podem ser desabilitadas via CSS
- Feedback visual adequado para interações touch

## Customização
Para ajustar as animações, modifique os parâmetros nos arquivos:
- Duração: Propriedade `duration`
- Easing: Propriedade `ease`
- Stagger: Propriedade `stagger`
- Posições iniciais: Valores em `fromTo`