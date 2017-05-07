import Card from "card";

describe("A card", function() {
    "use strict";

    it("should link to the image of the suit and rank", function() {
        expect(new Card({ rank: "King", figura: "Pik" }).image).toBe("6.png");
        expect(new Card({ rank: "8", figura: "Kier" }).image).toBe("27.png");
        expect(new Card({ rank: "Ace", figura: "Karo" }).image).toBe("4.png");
        expect(new Card({ rank: "2", figura: "Trefl" }).image).toBe("49.png");
    });

    it("should map its color to black or red based on suit", function() {
        expect(new Card({ figura: "Pik" }).color).toBe("black");
        expect(new Card({ figura: "Kier" }).color).toBe("red");
        expect(new Card({ figura: "Karo" }).color).toBe("red");
        expect(new Card({ figura: "Trefl" }).color).toBe("black");
    });

});