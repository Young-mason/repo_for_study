const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
      return res.json();
    } catch (e) {
      console.warn(e);
    }
  },
};
