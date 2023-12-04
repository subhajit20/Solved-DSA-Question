function Permutation(processes, unproccessed, count) {
  if (unproccessed === "") {
    console.log(processes)
    return;
  } else {
    let i = 0;
    let ch = unproccessed.charAt(i);
    while (i <= count) {
      let f = processes.substr(0, i);
      let s = processes.substr(i, processes.length);
      let p = f + ch + s;
      Permutation(p, unproccessed.substr(1), p.length);
      i++;
    }
  }
}

let process = "";
let unproccessed = "abc";
let pArr = [];
Permutation(process, unproccessed, process.length, []);
