$(document).ready(function(){

var target = document.getElementById('id1');

// Jukebox is a class object with audio control and playlist methods
function Jukebox() {
	var index = 0;
	this.playlist = [];
// add song to playlist array
	this.add = function(newSong){
		this.playlist.push(newSong)
	}
// play mp3 and display title, artist, url from the playlist array
	this.play_it = function(){
		target.setAttribute('src', this.playlist[index].url)
		target.play();
		document.getElementById("t-out").innerHTML = this.playlist[index].title;
		document.getElementById("a-out").innerHTML = this.playlist[index].artist;
		document.getElementById("u-out").innerHTML = this.playlist[index].url;
	}
// pause song
	this.pause_it = function(){
		target.pause();
	}
// stop song
	this.stop_it = function(){
		target.load();
	}
// grab title, artist and url data entry and add to playlist array
	this.upload = function() {
		newSong = new Music(document.getElementById('title').value, document.getElementById('artist').value ,document.getElementById('url').value);
		this.add(newSong);
	}
// play previous song
	this.back = function(){
		index--
		if (index < 0) {
			 index = this.playlist.length - 1
		}	
		jimi.play_it();
	}
// play next song
	this.next = function(){
		index++
		if (index == this.playlist.length) {
			index = 0
		}
		jimi.play_it()
	}
}
function Music(title, artist, url){
	this.title = title;
	this.artist = artist;
	this.url = url;
}
// jimi is an instance Jukebox object
var jimi = new Jukebox();
// listening for clicks on audio control buttons
$('#play').on('click', function(){
		  jimi.play_it()
});
$('#pause').on('click', function(){
			jimi.pause_it()
});
$('#stop').on('click', function(){
			jimi.stop_it()	
});
document.getElementById("back").onclick = function(){
	jimi.back();
}
document.getElementById("next").onclick = function(){
	jimi.next();
}
document.getElementById("add_song").onclick = function(){
	jimi.upload();
}
// two hard coded songs in playlist 
var music1 = new Music("Mother's Day Again",'Marty McVeigh',"https://ia800202.us.archive.org/8/items/MothersDayAgain/2016-03-20%20mothers%20day%20again.mp3");
var music2 = new Music("My Baby Done Left Me", "Marty McVeigh", "http://ia601404.us.archive.org/28/items/MyBabyDoneLeftMe/MyBabyDoneLeftMe.mp3"); 
jimi.add(music1);
jimi.add(music2);

});

