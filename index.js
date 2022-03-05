class TodoList {
  list = [];

  addItem(todoItem) {
    if (!todoItem.content) {
      console.log("내용과 카테고리가 비어 있습니다.");
      return;
    }
    if (!todoItem.category) {
      console.log("카테고리가 비어 있습니다.");
      return;
    }
    this.list.push(todoItem);
    this.readItemAll();
  }

  readItemById(id) {
    console.log(this.list.find((item) => item.id === id));
  }

  readItemAll() {
    console.log(this.list);
  }

  updateItemById(id, option) {
    // 만약 TodoItem의 인스턴스를 todoItem으로 띄우기로 개발자들끼리 약속한다면 아래와 같이 내용과 카테고리는 업데이트할 수 있어 보입니다.
    // 하지만 이것은 언제든 깨지기 쉬운 약속에 의한 것이라서 오타만 있어도 업데이트는 불가능할 것 같아요.
    // 완료 여부도 항상 반대 값으로 업데이트가 되는 것이 아니라면
    // 예를 들면 this.list.filter((item) => item.id === id)[0].isFinished = !this.list.filter((item) => item.id === id)[0].isFinished; 아니라면
    // TodoItem의 인스턴스에서 가져와야 하는데 TodoItem 인스턴스의 isFinished는 생성할 때 false로 고정돼있고 변경할 수 없기에 업데이트해도 false만 들어가겠네요.
    // 만약 !isFinished로 업데이트하더라고 새로운 TodoItem 인스턴스 isFinished의 반대 값이기 때문에 스토어인 TodoList 인스턴스 안에 있는 list의 특정 아이템 isFinished 값과는 연관성이 없습니다.
    this.list.filter((item) => item.id === id)[0].content = todoItem.content;
    this.list.filter((item) => item.id === id)[0].category = todoItem.category;
    this.list.filter((item) => item.id === id)[0].isFinished =
      todoItem.isFinished;
    this.readItemAll();
  }

  deleteItemById(id) {
    this.list = this.list.filter((item) => item.id !== id);
    this.readItemAll();
  }

  deleteItemAll() {
    this.list = [];
    this.readItemAll();
  }
}

class TodoItem {
  id = Math.round(Math.random() * 100);
  content;
  category;
  isFinished = false;
  // 생성자에서는 Array<string> 타입인데 변수에서는 Array<Tag> 타입이라 태그 추가가 불가능해 보여요 ㅠㅠ
  // 생성자가 Array<Tag> 타입이고 변수가 Array<string> 이면 string만이라도 잘라서 추가하겠는데 반대여서 그것도 안 되네요.
  tags = [];

  constructor(content, category, tgaContents) {
    this.content = content;
    this.category = category;
  }

  // TodoItem의 인스턴스에 태그를 업데이트하는 함수가 선언돼있다 보니 이 함수들로 TodoList 인스턴스에 있는 스토어에 접근할 수 없어 보이네요.
  // TodoItem의 인스턴스를 각자 생성하고 삭제하지 않는다고 가정하더라도 TodoList에서 무언가 처리가 필요해 보입니다.
  updateTagById(id, content) {}
  deleteTagById(id) {}
  deleteTagAll() {}
}

class Tag {
  id = Math.round(Math.random() * 100);
  content;
  constructor(content) {
    this.content = content;
  }
}
