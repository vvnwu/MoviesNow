let someData = "<li>Directed by Jordan Peele</li><li> Starring Lupita Nyong'o, Winston Duke, Elisabeth Moss</li><li>Monkeypaw Productions</li><li>Budget: $20 million</li><li>Released: March 22, 2019</li><li>2h 1m</li><li>The words (Get Out), which was the title of Jordan Peele's previous film from 2017, can be seen carved into the sides of the entrance of the hall of mirrors.</li><li>Jordan Peele gave the cast ten horror films to watch so they would have a shared language when filming: Dead Again (1991), The Shining (1980), The Babadook (2014), It Follows (2014), A Tale of Two Sisters (2003), The Birds (1963), Funny Games (1997), Martyrs (2008), Let the Right One In (2008), and The Sixth Sense (1999).</li><li>Cineplex Burrard</li><li><b>Showing tonight at 2:00, 5:00, and 8:00</b></li></ul>";


var movie1 = {
    "banner" : "https://i.redd.it/kg7dlnm296t01.jpg",
    "title" : "Avengers",
    "details" : "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    "cast" : "Joss Whedon, Tony Stark",
    "theater" : "Cineplex Odeon",
    "showing" : ["2:00pm", "5:30pm", "8:00"]
}

var movie2 = {
    "banner" : "https://4.bp.blogspot.com/-rmTZ-kwFVZM/VmXjtAfEVPI/AAAAAAACNI8/xAl0-o6uGYc/s800/Big%2Bshort%2Bmovie%2Bbillboard.jpg",
    "title" : "The Big Short",
    "details" : "The Big Short is a 2015 American biographical comedy-drama film directed by Adam McKay. Written by McKay and Charles Randolph, it is based on the 2010 book The Big Short: Inside the Doomsday Machine by Michael Lewis showing how the financial crisis of 2007–2008 was triggered by the United States housing bubble.",
    "cast" : "Michael Lewis, Ryan Gosling",
    "theater" : "Scotia Bank Theater",
    "showing" : ["3:00pm", "4:30pm", "6:00"]
}

var movie3 = {
    "banner" : "https://i1.wp.com/thecinescape.com/wp-content/uploads/2019/03/dumbo-banner.jpg?w=660",
    "title" : "Dumbo",
    "details" : "Circus owner Max Medici (Danny DeVito) enlists former star Holt Farrier (Colin Farrell) and his children Milly (Nico Parker) and Joe (Finley Hobbins) to care for a newborn elephant whose oversized ears make him a laughingstock in an already struggling circus. But when they discover that Dumbo can fly, the circus makes an incredible comeback, attracting persuasive entrepreneur V.A. Vandevere (Michael Keaton), who recruits the peculiar pachyderm for his newest, larger-than-life entertainment venture, Dreamland.",
    "cast" : "Tim Burton, Nigel Gostelow",
    "theater" : "Metrotown Theatre",
    "showing" : ["2:00pm", "5:30pm", "7:00"]
}

var movie4 = {
    "banner" : "http://1.bp.blogspot.com/-puZTv6GJpF0/XH2C0PCptuI/AAAAAAAAD3c/jxJA7Xgk0MsIVfCYksKT6iyRuQ1f-HVswCK4BGAYYCw/s1600/captainmarveltwitter.png",
    "title" : "Captain Marvel",
    "details" : "Set in the 1990s, Marvel Studios' CAPTAIN MARVEL is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.",
    "cast" : "Brie Larson, Samuel L. Jackson",
    "theater" : "Metrotown Theatre",
    "showing" : ["2:00pm", "5:30pm", "7:00"]
}
let movieArray = [movie1, movie2,movie3,movie4];


module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it"s just hard-coded
      return someData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it"s just hard-coded
      return movieArray;
  }
};