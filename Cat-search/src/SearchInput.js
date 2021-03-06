const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.autofocus = true;

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    //키워드를 입력한 상태에서 input 을 클릭할 시에는 기존에 입력되어 있던 키워드가 삭제되도록 만들어야 합니다.
    $searchInput.addEventListener("click", (e) => {
      e.target.value = "";
    });
    // 필수 데이터를 불러오는 중일 때, 현재 데이터를 불러오는 중임을 유저에게 알리는 UI를 추가해야 합니다.
    // 필수 검색 결과가 없는 경우, 유저가 불편함을 느끼지 않도록 UI적인 적절한 처리가 필요합니다.
    // 최근 검색한 키워드를 SearchInput 아래에 표시되도록 만들고, 해당 영역에 표시된 특정 키워드를 누르면 그 키워드로 검색이 일어나도록 만듭니다. 단, 가장 최근에 검색한 5개의 키워드만 노출되도록 합니다.
    // 페이지를 새로고침해도 마지막 검색 결과 화면이 유지되도록 처리합니다.
    // 필수 SearchInput 옆에 버튼을 하나 배치하고, 이 버튼을 클릭할 시 /api/cats/random50 을 호출하여 화면에 뿌리는 기능을 추가합니다. 버튼의 이름은 마음대로 정합니다.
    // lazy load 개념을 이용하여, 이미지가 화면에 보여야 할 시점에 load 되도록 처리해야 합니다.
    // 추가 검색 결과 각 아이템에 마우스 오버시 고양이 이름을 노출합니다.
    console.log("SearchInput created.", this);
  }
  render() {}
}
