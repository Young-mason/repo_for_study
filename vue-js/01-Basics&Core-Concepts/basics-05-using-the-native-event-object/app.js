const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
      lastName: "",
    };
  },
  methods: {
    outputFullName() {
      if (!this.name) return "";
      return this.name + " " + "Cho";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    // fullname() {
    //   if (!this.name) return "";
    //   return this.name + " " + "Cho";
    // },
  },
  watch: {
    name(value) {
      if (!value) this.fullname = "";
      else this.fullname = value + " " + "Cho";
    },
  },
});

app.mount("#events");
