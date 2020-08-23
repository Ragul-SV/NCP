var frequency = { 1: 0,2: 0,3: 0,4: 0,5: 0};

var players = ["Cristiano Ronaldo", "Lionel Messi", "Neymar Jr.", "Robert Lewandowski", "Marcelo"];

var images = ["ronaldo.jpg", "messi.jpg", "neymar.jpg", " lewandowski.jpg", "marcelo.jpg"];

document.getElementById("gen").addEventListener("click", function (e) {
    let random_index = Math.floor(Math.random() * 5);
    frequency[random_index + 1] += 1;
    document.getElementById(String(random_index + 1)).innerText = String(frequency[random_index + 1]);
    document.getElementById("desc").innerText = players[random_index];
    document.getElementById("image").src = images[random_index];
    e.preventDefault();
});
