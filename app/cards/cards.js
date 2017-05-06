function Card(card) {
    this.figura = card.figura;
  this.rank = card.rank;
  this.image = (Card.ranksInImagesOrder.indexOf(this.rank) * 4 + Card.suitsInImagesOrder.indexOf(this.figura) + 1) + ".png";
  this.color = card.figura === "Pik" || card.figura === "Trefl" ? "black" : "red";
  this.turnedUp = false;
}

Card.ranksInImagesOrder = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
Card.suitsInImagesOrder = ["Trefl", "Pik", "Kier", "Karo"];

Card.prototype.turnUp = function () {
  this.turnedUp = true;
};
Card.prototype.turnDown = function () {
  this.turnedUp = false;
};

function Deck() {
  this.unShuffled = function unShuffled() {
    return _.chain(Card.ranksInImagesOrder)
      .map(function (rank) {
          return Card.suitsInImagesOrder.map(function (figura) {
          return {
              figura: figura,
            rank: rank
          };
        });
      })
      .flatten()
      .map(function (card) {
        return new Card(card);
      })
      .value();
  };

  this.shuffled = function shuffled() {
    return _.shuffle(this.unShuffled());
  };
}