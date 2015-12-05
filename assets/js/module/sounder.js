
// Sound......................................................................

// Returns true if the browser can play sounds in the ogg file format.

// Sound

var soundOn = true;
var soundChannels = [];
var audio = new Audio();
var NUM_SOUND_CHANNELS = 5;

for (var i=0; i < NUM_SOUND_CHANNELS; ++i) {
  var audio = new Audio();
  soundChannels.push(audio);
}

function canPlayOggVorbis () {
   return "" != audio.canPlayType('audio/ogg; codecs="vorbis"');
}

// Returns true if the browser can play sounds in the mp3 file format.

function canPlayMp3() {
   return "" != audio.canPlayType('audio/mpeg');
}

// Returns the first available sound channel from the array of sound channels.

function getAvailableSoundChannel () {
   var audio;
   
   for (var i=0; i <NUM_SOUND_CHANNELS; ++i) {
      audio =soundChannels[i];

      if (audio.played.length === 0 || audio.ended) {
         return audio;
      }
   }
   return undefined; // all channels in use
}

// Given an identifier, play the associated sound.

function play (src) {
   var channel =getAvailableSoundChannel();
   if (channel) {
      channel.src = src;
      channel.load();
      channel.play();
   }
}

exports.play = play;