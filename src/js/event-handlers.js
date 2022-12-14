document.querySelector('.play-button').addEventListener('click', async () => {
  console.log('Play the track!');
  const record = document.querySelector('.record-img');
  record.classList.add('animate');
  fireworks.start();
  await Tone.Transport.start();
});

document.querySelector('.stop-button').addEventListener('click', async () => {
  const record = document.querySelector('.record-img');
  record.classList.remove('animate');
  fireworks.stop();
  await Tone.Transport.stop();
});

hiHatLoop.mute = true;
document.querySelector('.hi-hat-controller').addEventListener('click', async () => {
  hiHatLoop.mute = !hiHatLoop.mute;
});

baseSequence.mute = true;
document.querySelector('.bass-controller').addEventListener('click', async () => {
  baseSequence.mute = !baseSequence.mute;
});

Key1Sequence.mute = true;
Key2Sequence.mute = true;
document.querySelector('.synth1-controller').addEventListener('click', async () => {
  Key1Sequence.mute = !Key1Sequence.mute;
  Key2Sequence.mute = !Key2Sequence.mute;
});

synthLeadSequence.mute = true;
synthLeadSequence2.mute = true;
synthLeadSequence3.mute = true;
document.querySelector('.synthLead1-controller').addEventListener('click', () => {
  synthLeadSequence.mute = !synthLeadSequence.mute;
  synthLeadSequence2.mute = !synthLeadSequence2.mute;
  synthLeadSequence3.mute = !synthLeadSequence3.mute;
});

document.querySelector('.scratch-record').addEventListener('click', () => {
  const record2 = document.querySelector('.record-img-2');
  record2.classList.toggle('animate');
  if (scratchPlayer && scratchPlayer.loaded && record2.classList.contains('animate')) {
    if (scratchPlayer.state === 'started') {
      scratchPlayer.stop();
    } else {
      scratchPlayer.start();
    }
  }
  setTimeout(() => record2.classList.remove('animate'), 1100);
});


document.querySelector('.confetti').addEventListener('click', () => {
  if (crowdPlayer && crowdPlayer.loaded) {
    if (crowdPlayer.state === 'started') {
      crowdPlayer.stop();
    } else {
      crowdPlayer.start();

      confetti.addConfetti();
      setTimeout(() => {
        confetti.addConfetti();
        confetti.addConfetti({
          emojis: ['🌈', '🤟', '💀', '🦄', '🦋'],
        });
      }, 2000);
    }
  }
});

