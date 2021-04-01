const app = Vue.createApp({
  data() {
    return {
      name: "Mason",
      age: 29,
      img:
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
    };
  },
  methods: {
    getFavoriteNumber() {
      const random = Math.random();
      if (random > 0.5) {
        return 1;
      } else {
        return 0;
      }
    },
  },
});

app.mount("#assignment");
