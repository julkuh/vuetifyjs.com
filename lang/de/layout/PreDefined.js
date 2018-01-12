export default {
  header: 'Layouts',
  headerText: `Das Layout-System ist das Herzstück jeder Anwendung. Nachfolgend findest du offiziell unterstützten Beispiele, die von Desktop- bis hin zu mobilen Anwendungen reichen. `,
  markupHeader: 'Standard App Markup',
  markupText: 'Dies ist ein Beispiel für das Standard-Anwendungs-Markup von Vuetify. Du kannst deine Layoutelemente an beliebiger Stelle platzieren, solange Sie die Eigenschaft **app** besitzen. Die Schlüsselkomponente in all dem ist das `v-content` Element. Diese wird dynamisch nach der Struktur der von dir definierten **app** Komponenten angepasst. So kannst du extrem individuelle Lösungen umsetzen.',
  appHeader: 'Alles über _App_',
  appText: 'In Vuetify helfen die `v-app`-Komponente und die **app**-Hilfe beim Bootstrap Ihrer Anwendung mit der richtigen Größenanpassung um `v-content` herum. Auf diese Weise können wirklich einzigartige Oberflächen erstellt werden, ohne dass du dich um die Verwaltung deines Layouts kümmern musst. Die `v-app` Komponente ist für alle Anwendungen **ERFORDERLICH**. Dies ist der Ausgangspunkt für viele Komponenten und Funktionen von Vuetify. ',
  alert1: 'Damit deine Anwendung einwandfrei funktioniert, musst du sie in eine `v-app`-Komponente einschließen. Diese Komponente wird benötigt, um Grid-Breakpoints für das Layout zu ermitteln. Dies kann **irgendwo** im body existieren, muss aber das Eltern-Element von **ALLEN ** Vuetify-Komponenten sein.',
  alert2: 'Durch Anwenden der **app**-Eigenschaft wird die Position: **fixed** automatisch auf das Layout-Element angewendet. Wenn deine Anwendung ein _absolutes_ Element benötigt, kannst du diese Funktionalität mit Hilfe der **absoluten** Eigenschaft überschreiben.',
  toc: [
    {
      text: 'Layouts',
      href: 'introduction'
    },
    {
      text: 'Standard App Markup',
      href: 'default-markup'
    },
    {
      text: 'Alles über App',
      href: 'all-about-app'
    }
  ]
}
