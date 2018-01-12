export default {
  header: 'Motion',
  headerText: 'Geschmeidige Animationen tragen dazu bei, dass sich eine Benutzeroberfläche perfekt anfühlt. Mit dem Transitionssystem von Vue und wiederverwendbaren Funktionskomponenten kannst du die Bewegung deiner Anwendung einfach steuern. Die meisten Komponenten können ihren Übergang durch die <code>transition</code> Eigenschaft verändern.',
  components: [
    'v-fade-transition',
    'v-slide-x-transition',
    'v-slide-x-reverse-transition',
    'v-slide-y-transition',
    'v-slide-y-reverse-transition',
    'v-scale-transition'
  ],
  examples: [{
    slideXTransitions: {
      header: 'Slide X Transitionen',
      desc: 'Slide x transitions bewegen sich entlang der horizontalen Achse.'
    },
    slideYTransitions: {
      header: 'Slide Y Transitionen',
      desc: 'Animationen verwenden die <Code>$primary-transition</code> der Anwendung.',
    },
    scaleTransition: {
      header: 'Scale Transition',
      desc: 'Viele Komponenten von Vuetify enthalten eine <code>transition</code> Eigenschaft, die es erlaubt eine eigene zu spezifizieren.'
    },
    fadeTransition: {
      header: 'Fade Transition',
      desc: 'Ein weiteres Beispiel für die Fade Transition ist auf der Carousel-Komponente zu finden.'
    },
    customOrigin: {
      header: 'Eigener Ursprung',
      desc: 'Der Transition Origin kann programmatisch definiert werden.'
    }
  }],
  createYourOwnHeader: 'Erstelle eigene',
  createYourOwnText1: 'Mit der Transition Funktion von Vuetify kannst du ganz einfach eigene benutzerdefinierten Transitions erstellen. Diese Funktion gibt ein Objekt zurück, das in Vue importiert werden kann. Die Verwendung der Vue Option <a href="https://vuejs.org/v2/guide/render-function.html#Functional-Components" target="_blank" rel="noopener">functional component</a> stellt sicher, dass die Transition so effizient wie möglich ist. Importiere einfach die Funktion:',
  createYourOwnText2: 'The <code>createSimpleTransition</code> function accepts 1 argument, name. This will be the name that you can hook into with your style. This is an example of what <code>v-fade-transition</code> looks like:',
  toc: [
    {
      text: 'Bewegung',
      href: 'introduction'
    },
    {
      text: 'Beispiele',
      href: 'examples'
    },
    {
      text: 'Erstellen dein eigenes',
      href: 'create-your-own'
    }
  ]
}
