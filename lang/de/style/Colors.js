export default {
  header: 'Farben',
  headerText: 'Mittels **stylus** and **javascript** erhälst du ohne Umwege Zugriff auf alle Farben der [Material Design Spezifikation](https://material.io/guidelines/style/color.html). Die nachfolgenden Werte kannst du direkt in deinem Stylesheet, deiner eigenen Komponente oder mit bereits vorhandenen Komponenten mit dem **color class** System verwenden.',
  classesHeader: 'Klassen',
  classesText: 'Jede Farbe der Spezifikation wird als **background** und **text** Variante bereitgestellt und kann innerhalb deiner Applikation mit dem Benutzen einer Klass wie z.B. `<div class="red">` oder `<span class="red--text">` angewendet werden. Alle Farb+ Klassen sind [hier](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl) definiert.',
  classesText2: 'Textfarben können auch unterstützen auch **darken** und **lighten** Variationen. Diese kannst du mit `text--{lighten|darken}-{n}` verwenden.',
  javascriptPackHeader: 'Javascript Farbpalette',
  javascriptPackText: 'Vuetify verfügt über eine optionales Javascript Farbpalette, die du importieren und in deiner Anwendung benutzen kannst. Dies kann auch verwendet werden, um ein für deine Anwendung spezielles Farb-Thema zu definieren.',
  stylusPackHeader: 'Stylus Farbpalette',
  stylusPackText: 'Obwohl praktisch, erhöht das Color Pack die CSS-Exportgröße um ~30kb. Manche Projekte benötigen aber lediglich die standardmäßig bereitgestellten Klassen, welche zur Laufzeit aus dem  Vuetify Bootstrap bereitgestellt werden. Um dieses Feature abzuschalten muss das main **stylus** file manuelle importiert und gebaut werden. Dies erfordert den [stylus loader](https://github.com/shama/stylus-loader) und einen `.styl` file entry.',
  stylusPackText2: 'Die erstellte `main.styl` Datei muss dann in dein Projekt eingebunden werden.',
  alert: 'Webpack **muss** so konfiguriert werden, dass `stylus` verwendet wird. Nutzt du ein [vorgefertigtes Template](/getting-started/quick-start#new-applications), so ist dies bereits für dich erledigt.',
  stylusPackText3: 'Dies kann auch in deiner Hauptdatei **App.vue** geschehen. Denk daran, dass sich je nach Projekt-Setup die Build-Zeiten erhöhen können, da jedes Mal, wenn eine Datei aktualisiert wird, die Stylus-Dateien neu generiert werden.',
  colorHeader: 'Material Farben',
  colorText: 'Nachfolgend findest du eine nach Primärfarben gruppierte Liste der Farbpalette für das Materialdesign.',
  toc: [
    {
      text: 'Einleitung',
      href: 'introduction'
    },
    {
      text: 'CSS Klassen',
      href: 'classes'
    },
    {
      text: 'Javascript Farbpalette',
      href: 'javascript-color-pack'
    },
    {
      text: 'Stylus Farbpalette',
      href: 'stylus-color-pack'
    },
    {
      text: 'Material Farben',
      href: 'material-colors'
    }
  ]
}
