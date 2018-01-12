export default {
  header: 'Spacing',
  headerText: 'Aktualisiere dein Layout, ohne neue CSS Regeln zu erstellen. Spacing Helfer sind nützlich, um Padding und Margin eines Elements zu verändern.',
  toc: [
    {
      text: 'Einführung',
      href: 'introduction'
    },
    {
      text: 'Wie es funktioniert',
      href: 'how-it-works'
    },
    {
      text: 'Beispiele',
      href: 'examples'
    },
    {
      text: 'Horizontale Zentrierung',
      href: 'horizontal-centering'
    }
  ],
  howText: 'Wende **margin** oder **padding** auf ein Element im Bereich von _0 bis 5_ an. Jede Größenabstufung wurde so konzipiert, dass sie mit dem üblichen Material Design-Abständen übereinstimmt. Diese Klassen können unter Verwendung des folgenden Formats `{property}{direction}-{size}` angewendet werden.',
  propertyText: 'Die _property_ legt die Art des Abstands fest:',
  properties: [
    '`m` - wendet `margin` an',
    '`p` - wendet `padding` an'
  ],
  directionText: 'Die _Richtung_ bezeichnet die Seite bzw. Seiten, auf die sich die Eigenschaft bezieht:',
  directions: [
    '`t` - wendet die Eigenschaft für `margin-top` oder `padding-top` an',
    '`b` - wendet die Eigenschaft für `margin-bottom` oder `padding-bottom` an',
    '`l` - wendet die Eigenschaft für `margin-left` oder `padding-left` an',
    '`r` - wendet die Eigenschaft für `margin-right` oder `padding-right` an',
    '`x` - wendet die Eigenschaft für `*-left` und `*-right` an',
    '`y` - wendet die Eigenschaft für `*-top` und `*-bottom` an',
  ],
  sizeText: 'Die _size_ steuert die Stärke der Eigenschaft:',
  sizes: [
    '`0` - entfernt die Eigenschaft für `margin` oder `padding` durch Setzen auf `0`.',
    '`1` - setzt die Eigenschaft `margin` oder `padding` auf `$spacer * .25`',
    '`2` - setzt die Eigenschaft `margin` oder `padding` auf `$spacer * .5`',
    '`3` - setzt die Eigenschaft `margin` oder `padding` auf `$spacer',
    '`4` - setzt die Eigenschaft `margin` oder `padding` auf `$spacer * 1.5`',
    '`5` - setzt die Eigenschaft `margin` oder `padding` auf `$spacer * 3`',
  ],
  horizontalHeader: 'Horizontale Zentrierung',
  horizontalText: 'Bei Blockelementen mit einer bestimmten Breite kann mittels`.mx-auto` der Inhalt horizontal zentriert werden.'
}
