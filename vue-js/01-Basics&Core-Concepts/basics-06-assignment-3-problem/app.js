const app = Vue.createApp({
  data() {
    return {
      sumValue: 0,
    };
  },
  methods: {
    addNumber(num) {
      this.sumValue += num;
    },
  },
  computed: {
    message() {
      if (this.sumValue < 37) {
        return "Not there yet!";
      } else if (this.sumValue === 37) {
        return this.sumValue;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    message() {
      setTimeout(() => {
        this.sumValue = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
