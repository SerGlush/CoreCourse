class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    display() {
        return this.name + '\n' + this.author + '\n' + this.year;
    }
}

class EBook extends Book {
  constructor (name, author, year, price) {
    super(name, author, year);
    this.price = price;
  }

  display() {
    return super.display() + '\n' + this.price;
  }
}

console.log(new EBook("Отцы и дети", "Иван Тургенев", 1862, 5.99).display());
