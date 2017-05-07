export default function Card(card) {
    this.figura = card.figura;
    this.rank = card.rank;
    this.image = (Card.ranksInImagesOrder.indexOf(this.rank) * 4 + Card.suitsInImagesOrder.indexOf(this.figura) + 1) + ".png";
    this.color = card.figura === "Pik" || card.figura === "Trefl" ? "black" : "red";
    this.turnedUp = false;
}

Card.ranksInImagesOrder = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
Card.suitsInImagesOrder = ["Trefl", "Pik", "Kier", "Karo"];

Card.prototype.turnUp = function() {
    this.turnedUp = true;
};
Card.prototype.turnDown = function() {
    this.turnedUp = false;
};