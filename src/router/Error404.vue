<template>
  <section>
    <h1>Erreur 404</h1>
    <h3>La page demandée n'existe pas</h3>
    <button @click="handleClick">Cliquez-ici pour un retour en arrière</button>
  </section>
</template>

<script>
export default {
  methods: {
    handleClick() {
      window.location.href = "/";
    },
  },
};
</script>

<style scoped>
section {
  background: black;
  color: white;
  height: 1080px;
}
h1 {
  font-size: 5em;
}
h3 {
  font-size: 2.5em;
}
button {
  margin: 9px;
  padding: 20px 40px;
  font-size: 22px;
  background-color: slategray;
  border-radius: 10px;
  color: white;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-bottom-color: rgba(0, 0, 0, 0.34);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.34) inset,
    0 2px 0 -1px rgba(0, 0, 0, 0.13), 0 3px 0 -1px rgba(0, 0, 0, 0.08),
    0 3px 13px -1px rgba(0, 0, 0, 0.21);
}
button:active {
  top: 1px;
  border-color: rgba(0, 0, 0, 0.34) rgba(0, 0, 0, 0.21) rgba(0, 0, 0, 0.21);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.89), 0 1px rgba(0, 0, 0, 0.05) inset;
  position: relative;
}

/*
 *************************  Media Queries *************************
  color: gestion de la couleur (en bits/pixel).
  height: hauteur de la zone d'affichage (fenêtre).
  width: largeur de la zone d'affichage (fenêtre).
  device-height: hauteur du périphérique.
  device-width: largeur du périphérique.
  orientation: orientation du périphérique (portrait ou paysage).
  media: type d'écran de sortie. Quelques-unes des valeurs possibles :
    screen: écran « classique » ;
    handheld: périphérique mobile ;
    print: impression ;
    tv: télévision ;
    projection: projecteur ;
    all: tous les types d'écran. 
*/

@media screen and (max-width: 700px) {
  h1 {
    font-size: 2.5em;
  }
  h3 {
    font-size: 1.25em;
  }
  button {
    font-size: 11px;
  }
}
</style>
