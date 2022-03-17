const app = new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    newImage: {
      img: null,
      title: null,
      text: null,
    },
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

      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
    },

    start() {
      this.player = setTimeout(this.next, 3000);
    },

    stop() {
      clearInterval(this.player);
    },

    shuffle() {
      this.images = this.images
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    },

    add() {
      this.images.push({
        img: this.newImage.img,
        title: this.newImage.title,
        text: this.newImage.text,
      });

      this.newImage.img = null;
      this.newImage.title = null;
      this.newImage.text = null;
    },
  },
});
