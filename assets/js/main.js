let root = new Vue({
  // options object
  el: "#root",
  data: {
    images: [
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
    ],
    posizione: 0
  },
  created: function () {
    setInterval(this.goAhead, 3000)
  },
  methods: {
    // Funzione per il click sul next
      goAhead() {
        if (this.posizione === this.images.length - 1) {
          this.posizione = 0;
        }else {
          this.posizione++;
        }
      },

      goBack(){
        if (this.posizione === 0) {
          this.posizione = this.images.length - 1;
        } else {
          this.posizione--;
        }
      }
  }
});
