// step 1 : array for each part of sentence
const who = ["The funny monkey", "A brave cate", "My little sister", "A sleepy elephant"];
const didWhat = ["ate", "jumped over", "played with", "chased"];
const withWhat = ["spaghetti", "a ball", "a frog", "a sandwich"];
const where = ["at the park", "in the castle", "on the moon", "at school"];
const when = ["yesterday", "this morning", "last night", "on Monday"];
//  step 2 : Added Index trackers
let i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
//  step 3 Selected words
let selected = ["", "", "", "", ""];
//  step 4 Button references
document.getElementById("part1").addEventListener("click", () => {
    selected[0] = who[i1];
    document.getElementById("part1").textContent = selected[0];
    i1 = (i1 + 1) % who.length;
});
document.getElementById("part2").addEventListener("click", () => {
    selected[1] = didWhat[i2];
    document.getElementById("part2").textContent = selected[1];
    i2 = (i2 + 1) % didWhat.length;
});

document.getElementById("part3").addEventListener("click", () => {
    selected[2] = withWhat[i3];
    document.getElementById("part3").textContent = selected[2];
    i3 = (i3 + 1) % withWhat.length;
});

document.getElementById("part4").addEventListener("click", () => {
    selected[3] = where[i4];
    document.getElementById("part4").textContent = selected[3];
    i4 = (i4 + 1) % where.length;
});

document.getElementById("part5").addEventListener("click", () => {
    selected[4] = when[i5];
    document.getElementById("part5").textContent = selected[4];
    i5 = (i5 + 1) % when.length;
});
// step 5 : display the  full story
document.getElementById("showStory").addEventListener("click", () => {
    document.getElementById("storyOutput").textContent =
        selected.join(" ") + ".";