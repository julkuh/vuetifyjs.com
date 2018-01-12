export default {
  props: {
    error: 'Versetzt das Eingabeelement manuell in den Fehler-Zustand',
    errorMessages: 'Versetzt das Eingabeelement in einen Fehler-Zustand und reicht eine Fehlermeldung durch. Wird mit allen Validierungen kombiniert, die aus der **rules**-Eigenschaft stammen. Das Eingabefeld wird keine Validation ausführen.',
    rules: 'Array von Funktionen, die entweder True oder einen String mit einer Fehlermeldung zurückgeben.',
    validateOnBlur: 'Verzögert die Validierung bis zum Blur-Event'
  }
}
