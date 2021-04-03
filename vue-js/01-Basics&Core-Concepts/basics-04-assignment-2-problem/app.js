const app = Vue.createApp({
  data() {
    return {
      text: "",
      confirmedText: "",
    };
  },
  methods: {
    showAlert() {
      alert("this is an alert!");
    },
    getTextInput(e) {
      this.text = e.target.value;
    },
    getConfirmedText() {
      this.confirmedText = this.text;
    },
  },
});

app.mount("#assignment");
