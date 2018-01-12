export default {
  header: 'Theme',
  headerText: 'Easily change the colors of your application programmatically. Rebuild the default stylesheet and customize various aspects of the framework for your particular needs. If you are looking for the **Theme Generator**, please navigate [here](/theme-generator).',
  lightAndDarkHeader: 'Light und Dark',
  lightAndDarkText1: 'Vuetify supports both **light** and **dark** variants of the Material Design spec. This designation starts at the root application component, `v-app` and is supported by majority of components. By default, your application will use the **light** theme, but this can be easily overwritten by adding the **dark** prop.',
  lightAndDarkText2: 'Wenn du eine Komponente als light oder dark kennzeichnest, erben und verwenden, sofern nichts anderes angegeben ist, alle ihre Kinder diese Eigenschaft. Aufgrund der CSS-Spezifität gibt es bestimmte Kombinationen, die es möglicherweise erforderlich machen, das _Theme_ für verschachtelte Kinder manuell zu setzen. Dies ist am wahrscheinlichsten bei der Verwendung des **dark** Themes.',
  customizingHeader: 'Anpassen',
  customizingText1: 'Vuetify verfügt standardmäßig über ein Default-Theme, das für alle Komponenten angewendet wird.',
  customizingText2: 'Dieses kann leicht geändert werden. Übergib der `Vue.use` Funktion einfach eine **theme** Property. Es ist möglich, alle oder nur einige der Eigenschaften des Themas zu ändern, wobei die restlichen Eigenschaften von der Standardeinstellung übernommen werden.',
  customizingText3: 'Du kannst auch die vordefinierten Material Design Farben verwenden.',
  customizingText4: 'Unter der Haube erzeugt Vuetify CSS-Klassen, die auf diesen Werten basieren und im DOM zugänglich sind. Diese Klassen folgen dem gleichen Markup wie andere Hilfsklassen, z.B. `primary` oder `secondary--text`.',
  customizingText5: 'Diese Werte werden auch auf dem Instanzobjekt **$vuetify** unter der Eigenschaft **theme** zur Verfügung gestellt. Dies erlaubt es dir, dein Thema _dynamisch_ zu modifizieren. Hinter den Kulissen wird Vuetify Ihre Themenklassen erneuern und aktualisieren und die Anwendung nahtlos aktualisieren.',
  stylusHeader: 'Anpassen von Stylus-Variablen',
  stylusText1: 'Vuetify ist auf **stylus** aufgebaut. Ähnlich wie bei **scss** können auch hier die Variablen geändert und die Style-Dateien neu kompiliert werden. Eine Liste der verfügbaren Variablen befindet sich [hier] (https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_variables.styl). Um die Stylus-Datei zu erstellen, müsst du die Anwendung so konfigurieren, dass sie Stylus unterstützt. Wenn du eine der vorgefertigten Vorlagen verwendest, die im Handbuch[Quick Start] (/getting-started/quick-start) zu finden sind, kannst du den nächsten Abschnitt überspringen.',
  stylusHeader2: 'Einrichten des stylus-loader mit Webpack',
  stylusText2: 'Führe in der Kommandozeile das Kommando aus:',
  stylusText3: 'Dadurch werden die Abhängigkeiten installiert, die zum Importieren und Parsen von Stylus-Dateien benötigt werden. Sobald installiert, öffne die Webpack-Konfiguration und füge eine Regel für Stylus hinzu. Stelle bei bei **SSR**-basierten Anwendungen sicher, dass sich der Import in deinen Haupt `client-entry` befindet.',
  stylusText4: 'Erzeuge in deinem src-Verzeichnis (oder dem entsprechenden Asset-Verzeichnis) einen Ordner namens `stylus` mit einer Datei namens `main.styl`. Dies dient als Einstiegspunkt für den Import und Neuaufbau der standardmäßigen Styles von Vuetify. Nach der Erstellung öffne die .styl-Datei und füge diesen Eintrag hinzu.',
  stylusText5: 'Bedenke, dass die relative Position von node_modules in deinem Projekt unterschiedlich sein kann. Es wird empfohlen, dass sich der Import in der Datei `index.js` oder `client-entry.js` deiner Hauptanwendung befindet. Importiere deine `main.styl` NICHT innerhalb einer Komponente. Dies führt zu Performance-Problemen und zu einer drastischen Verlangsamung des **HMR** (hot module reloading).',
  stylusText6: 'Nachdem der Ort des Imports fest steht, entferne das Vuetify-Stylesheet, wenn du es durch einen `<link>`-Tag in der Indexdatei benötigst. Starte den Build-Prozesse neu und öffnen das Projekt erneut. Es sollte sichtbar sein, dass alle Styles korrekt funktionieren.',
  stylusHeader3: 'Werte verändern',
  stylusText7: 'Nachdem Stylus konfiguriert ist, können die Standardwerte für die Stylus-Variablen festgelegt werden. Diese müssen _vor_ dem Import definiert werden und überschreiben automatisch die Vuetify-Vorgaben.',
  toc: [
    {
      text: 'Theme',
      href: 'introduction'
    },
    {
      text: 'Light und Dark',
      href: 'light-and-dark'
    },
    {
      text: 'Anpassen',
      href: 'customizing'
    },
    {
      text: 'Stylus Variablen anpassen',
      href: 'stylus-guide'
    }
  ]
}
