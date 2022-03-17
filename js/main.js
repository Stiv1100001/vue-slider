const app = new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    player: null,
    images: [
      {
        img: "img/01.jpg",
        title: "Svezia",
        text: "eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        img: "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipinventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        img: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit corporis.",
      },
      {
        img: "img/04.jpg",
        title: "Germania",
        text: "Lorem ictetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        img: "img/05.jpg",
        title: "Paradise",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque ",
      },
    ],
  },

  methods: {
    next() {
      this.currentIndex++;

      if (this.currentIndex === this.images.length) this.currentIndex = 0;
    },

    prev() {
      this.currentIndex--;

      if (this.currentIndex < 0) this.currentIndex = this.images.length - 1;
    },
  },
});
