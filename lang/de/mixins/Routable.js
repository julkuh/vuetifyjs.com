export default {
  props: {
    activeClass: `Klasse wird gesetzt wenn die Komponente aktiv ist. **Warnung** Abängig von der Komponente kann das Quereffekte erzeugen. Wenn lediglich eine zusätzliche Klasse hinzugefügt werden soll, verwende einfach <code>active-class="default-class your-class"</code>`,
    append: `Vue Router router-link Eigenschaft`,
    disabled: 'Route Element ist deaktiviert',
    exact: 'Link muss genau gleich sein. Ohne dies, wird "/" zu jeder Route passen',
    exactActiveClass: 'Vue Router router-link Eigenschaft',
    href: 'Zeichnet den Komponenten Tag als `<a>` aus',
    nuxt: 'Gibt an, dass es sich bei dem Link um einen nuxt-link handelt',
    replace: 'Vue Router router-link Eigenschaft',
    to: 'Zeichnet den Komponenten Tag als `<router-link>` aus',
    tag: 'Gib ein benutzerdefiniertes Tag an, das an der Komponente verwendet werden soll.',
    target: 'Legt das target Attribut fest. Funktioniert nur bei Anchor-Tags.'
  }
}
