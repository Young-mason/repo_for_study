/*
 vue는 리턴된 데이터들을 전역 Vue 인스턴스와 병합시킨다. 따라서, 메소드에서 This 키워드를 통해 데이터 객체에 접근 가능해진다!
*/

const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn vue!",
      courseGoalB: "<h2>Master Vue and build amazing apps!</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
