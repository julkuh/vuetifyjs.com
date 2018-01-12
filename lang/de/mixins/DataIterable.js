export default {
  props: {
    customFilter: 'Benutzerdefinierter Suchfilter',
    customSort: 'Benutzerdefinierter Sortierfilter',
    disableInitialSort: 'Deaktivieren der Standardsortierung beim ersten Rendern',
    expand: 'Kennzeichnet die Tabelle als Tabelle, die Zeilen enthält, die aufgeklappt werden können.',
    filter: 'Die Funktion zum Filtern von Items',
    hideActions: 'Ausblenden der Tabellenaktionen',
    itemKey: 'Das Feld im Item-Objekt, das einen eindeutigen Schlüssel bezeichnet.',
    items: 'Das Array der Tabellenzeilen',
    mustSort: 'Erzwingt, dass mindestens eine Spalte immer sortiert wird, anstatt zwischen <Code>sortiert aufsteigend</code>/<Code>/<Code>sortiert absteigend</code>/<Code>unsortiert</code>Zustände umzuschalten.',
    noResultsText: 'Text anzeigen, wenn keine gefilterten Ergebnisse vorliegen',
    pagination: 'Dient zur Steuerung der Seitennummerierung und Sortierung von außerhalb der Datentabelle. Kann auch verwendet werden, um eine standardmäßige sortierte Spalte zu setzen.',
    rowsPerPageItems: 'Die Standardwerte für die Dropdown-Liste "Zeilen pro Seite".',
    rowsPerPageText: 'Die Standardzeilen pro Seite Text',
    search: ' Das Suchmodell für die Filterung der Ergebnisse',
    selectAll: 'Fügt der Kopfzeile eine Alle selektierern Checkbox hinzu. Der Wert Kann entweder ein String sein, der angibt, welche Farbe auf den Button angewendet wird, oder ein Boolean (der die Standardfarbe verwendet).',
    totalItems: 'Legt die Gesamtzahl der Zeilenelemente manuell fest, wodurch die eingebaute Sortierung und Paginierung deaktiviert wird. Wird zusammen mit dem Seitenumbruch verwendet, um serverseitige Sortierung und Seitenumbruch zu ermöglichen.',
    value: 'Selektierte Zeilen Items'
  },
  slots: {
    footer: 'Slot zum Festlegen einer zusätzlichen Fußzeile'
  },
  scopedSlots: {
    items: 'Slot, um anzugeben, wie Elemente gerendert werden.'
  }
}
