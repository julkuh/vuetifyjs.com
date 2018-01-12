export default {
  header: 'Display',
  headerText: 'Mit Hilfe den Display Helfern kann die Anzeige von Inhalten gesteuert werden. Dazu lassen sich Elemente unter bestimmten Bedingungen wie zum Beispiel Viewportgröße oder der Element Display Typ benutzen.',
  toc: [
    {
      text: 'Einführung',
      href: 'introduction'
    },
    {
      text: 'Visibility',
      href: 'visibility'
    },
    {
      text: 'Display',
      href: 'display'
    },
    {
      text: 'Beispiele',
      href: 'examples'
    }
  ],
  visibilityHeader: 'Visibility',
  visibilityText: 'Bedingtes Anzeigen eines Elements basierend auf dem aktuellen **Viewport**. Diese Klassen können mit folgendem Format angewendet werden: `hidden-{breakpoint}-{condition}``.`',
  breakpointText: 'Der _breakpoint_ legt die Größe des Viewports fest:',
  breakpoints: [
    '`xs` - extra small devices',
    '`sm` - small devices',
    '`md` - medium devices',
    '`lg` - large devices',
    '`xl` - extra large',
  ],
  conditionText: 'Die __condition__ wendet die Klasse konditional an:',
  conditions: [
    '`only` - versteckt dass Element nur bei `xs` durch `xl` Breakpoints.',
    '`and-down` - versteckt das Element ab dem angegebenen Breakpoint und darunter. Gültig zwischen `sm` und `lg` Breakpoints',
    '`and-up` - versteckt das Element ab dem angegebenen Breakpoint und darüber. Gültig zwischen `sm` und `lg` Breakpoints'
  ],
  displayHeader: 'Display',
  displayText: 'Legt die `display` Eigenschaft des elements fest. Dies kann festgelegt werden, indem das Format `d-{display}` verndet wird.',
  displays: [
    '`d-inline-flex` - setzt die Display Eigenschaft des Elements auf `inline-flex`',
    '`d-flex` - setzt die Display Eigenschaft des Elements auf `flex`',
    '`d-inline-block` - setzt die Display Eigenschaft des Elements auf `inline-block`',
    '`d-block` - setzt die Display Eigenschaft des Elements auf `block`',
    '`d-inline` - setzt die Display Eigenschaft des Elements auf `inline`'
  ]
}
