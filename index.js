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
    console.log(this.list.find((item) => (item.id = id)));
  }
  readItemAll() {
    console.log(this.list);
  }
  updateItemById(id, option) {}
  deleteItemById(id) {}
  deleteItemAll() {}
}

class TodoItem {
  id = Math.round(Math.random() * 100);
  content;
  category;
  isFinished = false;
  // 타입 불일치
  tags = [];

  constructor(content, category, tagContents) {
    this.content = content;
    this.category = category;
  }

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
