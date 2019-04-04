let someData = "<h1>Us</h1><ul><li>Accompanied by her husband, son and daughter, Adelaide Wilson returns to the beachfront home where she grew up as a child. Haunted by a traumatic experience from the past, Adelaide grows increasingly concerned that something bad is going to happen. Her worst fears soon become a reality when four masked strangers descend upon the house, forcing the Wilsons into a fight for survival. When the masks come off, the family is horrified to learn that each attacker takes the appearance of one of them.</li><li>Directed by Jordan Peele</li><li> Starring Lupita Nyong'o, Winston Duke, Elisabeth Moss</li><li>Monkeypaw Productions</li><li>Budget: $20 million</li><li>2h 1m</li><li>The words (Get Out), which was the title of Jordan Peele's previous film from 2017, can be seen carved into the sides of the entrance of the hall of mirrors.</li><li>Jordan Peele gave the cast ten horror films to watch so they would have a shared language when filming: Dead Again (1991), The Shining (1980), The Babadook (2014), It Follows (2014), A Tale of Two Sisters (2003), The Birds (1963), Funny Games (1997), Martyrs (2008), Let the Right One In (2008), and The Sixth Sense (1999).</li><li>Cineplex Burrard</li><li><b>Showing tonight at 2:00, 5:00, and 8:00</b></li></ul>";

/**
let someOtherData = "<h1>Avengers: Endgame</h1><ul><li>Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.</li><li>Directed by Joss Whedon</li><li>Starring Tony Stark, Chris Hemsworth, Scarlett Johansson</li><li>Marvel Studios</li><li>Budget $352 million</li><li>2h 29m</li><li>Cineplex Odeon</li><li>Showing tonight at 3:30, 5:30, 7:30, and 10:00</li></ul>"
*/
let someOtherData = ["<h1>Avengers<h1>", "<li>Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.</li>", "<li>Directed by Joss Whedon</li>", "<li>Starring Tony Stark, Chris Hemsworth, Scarlett Johansson</li>", "<li>Marvel Studios</li>", "<li>Budget $352 million</li>", "<li>2h 29m</li>", "<li>Mark Ruffalo revealed that he was given a fake script due to his habit of accidentally spoiling past Marvel movies. He jokingly claimed in an interview that the fake script was better than the real one.</li>", "<li>Doctor Strange has been studying for a few years since his solo movie, and is now considered one of the more powerful characters in the Marvel Cinematic Universe. The writers also wanted to have him come off as sort of the adult in the room throughout the movie.</li>", "<li>Cineplex Odeon</li>", "<li><b>Showing tonight at 3:30, 5:30, 7:30, and 10:00<b></li>"];

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return someData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return someOtherData;
  }
};
var someOtherFunction = function () {
    console.log("Can't touch this!");
}