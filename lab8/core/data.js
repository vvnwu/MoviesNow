let someData = "<ul><li>Beep</li><li>Boop</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li><li>Sunday</li></ul>";


let someOtherData = "<ul><li>Avengers</li><li>Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.</li><li>Director: Joss Whedon</li><li>Actor: Tony Stark</li><li>Theatre: Cineplex Odeon</li>"

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