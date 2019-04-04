let someData = "<ul><li>Beep</li><li>Boop</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li><li>Sunday</li></ul>";


//let someOtherData = ['Avengers','Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.','Joss Whedon', 'Tony Stark','Cineplex Odeon', 'Showing tonight at 3:30, 5:30, 7:30, and 10:00']//= movie1//[movie1, "hello"]//["Avengers", "Avengers", "Bavengers", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

//var movie1 = ['Avengers','Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.','Joss Whedon, Tony Stark','Cineplex Odeon']
var movie1 = {
    'title' : 'Avengers',
    'description' : 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
    'cast' : 'Joss Whedon, Tony Stark',
    'theater' : 'Cineplex Odeon'
}
let movieArray = [movie1];
module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return someData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return movieArray;
  }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}