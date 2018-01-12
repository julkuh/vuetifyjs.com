export default {
  props: {
    activator: 'Definiert einen eigenen Aktivator, wenn der Aktivator-Slot nicht verwendet wird. String kann ein beliebiger gültiger QuerySelector und Object kann ein beliebiger gültiger Node sein.',
    allowOverflow: 'Entfernt die Neupositionierung des Overflows für den Inhalt.',
    maxWidth: `Legt die maximale Breite für den Inhalt fest.`,
    minWidth: `Legt die minimale Breite für den Inhalt fest.`,
    nudgeBottom: 'Den Inhalt nach unten schieben',
    nudgeLeft: 'Den Inhalt nach links schieben',
    nudgeRight: 'Den Inhalt nach rechts schieben',
    nudgeTop: 'Den Inhalt nach oben schieben',
    nudgeWidth: 'Die Breite des Inhalts bestimmen',
    offsetOverflow: 'Lässt die Komponente auf die gegenüberliegende Seite wandern wenn sie durch Overflow neu positioniert werden muss',
    positionX: 'Wird verwendet, um den Inhalt zu positionieren, wenn kein Aktivator-Slot verwendet wird.',
    positionY: 'Wird verwendet, um den Inhalt zu positionieren, wenn kein Aktivator-Slot verwendet wird.',
    zIndex: 'Z-Index, der Komponente.'
  }
}
