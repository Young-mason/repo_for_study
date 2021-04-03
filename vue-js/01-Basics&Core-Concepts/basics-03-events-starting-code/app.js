const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    addCount(num = 1) {
      this.counter = this.counter + num;
    },
    removeCount(num = 1) {
      this.counter = this.counter - num;
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    submitForm() {
      alert("submitted");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
