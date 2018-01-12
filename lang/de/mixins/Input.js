export default {
  props: {
    appendIcon: 'Hängt ein Icon an die Komponente an, verwendet die gleiche Syntax wie `v-icon`.',
    appendIconCb: 'Callback für angehängtes Icon beim Anklicken',
    disabled: 'Eingabe ist gesperrt',
    hideDetails: 'Hinweis ausblenden, Validierungsfehler',
    hint: 'Hinweis Text',
    label: 'Setzt das Input-Label',
    persistentHint: 'Erzwingt den Hinweis immer sichtbar zu sein.',
    placeholder: `Setzt den Platzhaltertext der Eingabe`,
    prependIcon: 'Voranstellen eines Icons an die Komponente, verwendet die gleiche Syntax wie `v-icon`.',
    prependIconCb: 'Callback für vorangestelltes Icon beim Anklicken',
    readonly: 'Setzt das Input in schreibgeschützten Zustand',
    required: 'Zeichnet das Eingabe Element als verpflichtend aus. Fügt einen Stern am Ende des Labels hinzu. Führt keine Validierung durch.',
    tabindex: 'Tabindex des Eingabe Elements',
    toggleKeys: 'Array von Tastencodes, die das Eingabe Element umschalten (falls es das Umschalten unterstützt)',
    value: 'Eingabe Wert'
  }
}
