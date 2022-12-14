const scratchGain = new Tone.Gain(0.4);
scratchGain.chain(Tone.Master);
const scratchMP3 = 'audio/scratch-edit.mp3';

const scratchPlayer = new Tone.Player();
scratchPlayer.loop = false;
scratchPlayer.autostart = false;

scratchPlayer.load(scratchMP3).then(() => {
  scratchPlayer.connect(scratchGain);
});


const crowdGain = new Tone.Gain(0.6);
crowdGain.chain(Tone.Master);
const crowdMP3 = 'audio/concert-crowd.mp3';

const crowdPlayer = new Tone.Player();
crowdPlayer.loop = false;
crowdPlayer.autostart = false;

crowdPlayer.load(crowdMP3).then(() => {
  crowdPlayer.connect(crowdGain);
});
