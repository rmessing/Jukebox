$(document).ready(function(){


var target = document.getElementById('id1');

	document.getElementById("back").onclick = function(){
		jimi.back();
	}
	document.getElementById("next").onclick = function(){
		jimi.next();
	}
	document.getElementById("add_song").onclick = function(){
		jimi.upload();
	}

function Jukebox() {
		var index = 0;
		this.playlist = [];
		this.add = function(newSong){
			this.playlist.push(newSong)
		}
		this.play_it = function(){
			target.setAttribute('src', this.playlist[index].url)
			target.play();
			document.getElementById("t-out").innerHTML = this.playlist[index].title;
			document.getElementById("a-out").innerHTML = this.playlist[index].artist;
			document.getElementById("u-out").innerHTML = this.playlist[index].url;
		}
		this.pause_it = function(){
			target.pause();
		}
		this.stop_it = function(){
			target.load();
		}

		this.upload = function(newSong) {
			grabSong.apply(this,arguments);
			newSong = new grabSong();
			this.playlist.push(newSong)
		}
	
		this.back = function(){
			index--
			// console.log(index + "back")
			if (index < 0) {
				 index = this.playlist.length - 1
			}	
			jimi.play_it();
			// console.log(index + "lllllll")
		}
		this.next = function(){
			// console.log(index)
			index++
					// console.log(index + "next")
			if (index == this.playlist.length) {
						// console.log("is if triggered")
						  index = 0
			}
			jimi.play_it()
		}
}

function grabSong(title, artist, url){
		  this.title = document.getElementById('title').value;
			this.artist = document.getElementById('artist').value;
			this.url = document.getElementById('url').value;
}

var jimi = new Jukebox();

	
	$('#play').on('click', function(){
			  jimi.play_it()
	});
	$('#pause').on('click', function(){
				jimi.pause_it()
	});
	$('#stop').on('click', function(){
				jimi.stop_it()	
	});
		
function Music(title, artist, url){
	this.title = title;
	this.artist = artist;
	this.url = url;
}

 var music1 = new Music("Mother's Day Again",'Marty McVeigh',"https://ia800202.us.archive.org/8/items/MothersDayAgain/2016-03-20%20mothers%20day%20again.mp3");
 var music2 = new Music("My Baby Done Left Me", "Marty McVeigh", "http://ia601404.us.archive.org/28/items/MyBabyDoneLeftMe/MyBabyDoneLeftMe.mp3");
 

jimi.add(music1);
jimi.add(music2);


});

