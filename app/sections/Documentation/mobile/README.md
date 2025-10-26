# DocumentationMobile

Documentação da versão mobile da seção de Documentação Técnica da ETTI. Este fluxo é carregado dinamicamente a partir do componente desktop (`Documentation.jsx`) quando a largura da janela é inferior a 768 px.

## Estrutura de Arquivos

```
Documentation/
├── Documentation.jsx             ← Componente desktop principal
├── DocumentationContent.js       ← Fonte dos cards (compartilhada)
├── DocCard.jsx                   ← Card desktop
├── documentAnimation.js          ← Animações GSAP desktop
└── mobile/
    ├── DocumentationMobile.jsx   ← Componente principal mobile ⭐
    ├── DocCardMobile.jsx         ← Card individual mobile
    ├── DocAnimationMobile.jsx    ← Hook reservado para animações mobile
    └── README.md                 ← Esta documentação
```

## Fluxo Mobile

1. `Documentation.jsx` detecta o breakpoint mobile via `useIsMobile()`.
2. Em telas menores, retorna `<DocumentationMobile cards={documentationCards} />`.
3. O componente mobile utiliza os mesmos dados (`documentationCards`) para manter conteúdo consistente.
4. Cada item é renderizado por `DocCardMobile`, garantindo hierarquia semântica e texto legível em telas pequenas.

## DocumentationMobile.jsx

- Define o layout principal da seção mobile.
- Usa `next/dynamic` + `Image` para aplicar o background `doc-bgm.png` em **full bleed** com `objectFit: "cover"`.
- Recebe a prop `cards` (array) e renderiza dinamicamente a grade de cards.
- Bloco de texto introdutório preserva tom institucional com ênfase na marca (`<strong className="text-[#EB9948]">`).
- Estrutura responsiva: container com `flex flex-col gap-12` e padding interno (`p-6`).

### Props

```ts
interface DocumentationMobileProps {
  cards?: Array<{
    title: string;
    description: string;
    className?: string;
    titleClassName?: string;
    icon?: { name: string; title?: string };
    iconSize?: { width?: number; height?: number };
  }>;
}
```

- `cards` é opcional, mas o componente espera a mesma estrutura exportada por `DocumentationContent.js`.
- Caso nenhum array seja fornecido, utiliza-se o fallback `[]` para evitar erros de renderização.

## DocCardMobile.jsx

- Renderiza um card vertical com ícone, título e descrição.
- Utiliza `next/image` para os ícones (`/assets/${icon.name}.svg`).
- Ajustes visuais:
  - Container com `shadow-[0_4px_16px_rgba(0,0,0,0.08)]` e `backdrop-blur-sm`.
  - Linha divisória cinza (`bg-[#bebebe]`) replicando a estética desktop.
  - Cores alinhadas à paleta institucional (`#EB9948` para títulos e tons neutros para texto).
- Suporta customização via `className` e `titleClassName` sem vazamento desses atributos para o DOM.

## DocAnimationMobile.jsx

- Hook reservado para futuras animações GSAP na versão mobile.
- Atualmente retorna vazio, pois as animações foram desativadas para focar em performance.
- Mantido para alinhar a API com a versão desktop e facilitar reativação futura.

## Responsividade e Acessibilidade

- Layout mobile ocupa toda a largura disponível (`id="documentation"`), garantindo ancoragem com os mesmos links do desktop.
- Texto introdutório utiliza `text-justify` para melhor leitura em telas compactas.
- Cards possuem espaçamento confortável (`gap-6`, `py-6`) pensando em interações touch.
- Imagens contam com `alt` derivado de `icon.title` (ou título do card) para manter acessibilidade.

## Personalização Rápida

- **Imagem de fundo**: substitua `/public/assets/doc-bgm.png` para alterar o visual da seção mobile.
- **Dados**: adicione novos itens diretamente em `DocumentationContent.js`; eles aparecerão no desktop e mobile simultaneamente.
- **Tipografia**: ajuste classes Tailwind nos `h2`/`h3` ou nos `p` conforme necessário.
- **Animações**: adicione lógica ao hook `useDocAnimationMobile` seguindo o padrão do desktop (`useDocumentAnimation`).

## Boas Práticas

- Evite modificar diretamente `DocumentationMobile.jsx` para adicionar dados estáticos; centralize no arquivo de conteúdo.
- Mantenha as imagens otimizadas (`quality={100}` é aceitável aqui por serem assets leves). Caso aumentem, considere ajustar.
- Teste sempre com `prefers-reduced-motion` para garantir uma experiência confortável caso animações sejam reintroduzidas.
