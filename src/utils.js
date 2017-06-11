// Thanks to https://github.com/stuartmemo/qwerty-hancock/blob/master/src/qwerty-hancock.js
export default (note) => {
    const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

    const octave = (note.length === 3) ? note.charAt(2) : note.charAt(1);
    let keyNumber = NOTES.indexOf(note.slice(0, -1));

    if (keyNumber < 3) {
        keyNumber = keyNumber + 12 + ((octave - 1) * 12) + 1;
    } else {
        keyNumber = keyNumber + ((octave - 1) * 12) + 1;
    }

    return 440 * Math.pow(2, (keyNumber - 49) / 12);
};
