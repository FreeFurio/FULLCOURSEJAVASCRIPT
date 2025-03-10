//Conditionals: If Statements


var choice;
var customerIsBanned;
var soup;
var reply;

//if statement
function checkSoup() {
    choice = document.getElementById("input").value.toLowerCase();
    bannedRadio = document.querySelector('input[name="banned"]:checked').value;
    soup = ["chicken noodle", "tomato", "broccoli cheddar", "minestrone", "clam chowder", "french onion", "split pea", "lentil", "potato leek", "beef barley", "miso", "pumpkin",
        "butternut squash", "gazpacho", "borscht", "wonton", "matzo ball", "ramen", "pho", "gumbo", "jambalaya", "gazpacho", "vichyssoise", "bisque", "consomme", "chowder",
        "bouillabaisse", "bisque", "goulash", "cioppino", "pos"];
    reply;

    if (bannedRadio) {
        customerIsBanned = bannedRadio === "yes";
    } else {
        alert("You are not banned!");
        return
    }

    if (!customerIsBanned) {
        if (soup.includes(choice)) {
            reply = `Great choice! We have that! ${choice} soup is our special today!`;
        } else {
            reply = `We don't have ${choice}, but we have other soups!`;
        }
    } else {
        reply = "Sorry, you are banned!";
    }
    alert(reply);
    return reply, choice, customerIsBanned;
}

checkSoup();

console.log(choice);
console.log(customerIsBanned);
console.log(reply);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", checkSoup);
});

/*if (!customerIsBanned) {
    if (soup === choice) {
        reply = `Great choice! We have that! ${soup} soup is our special today!`;
    } else {
        reply = `We dont have ${soup}, but we have other soups!`;
    }
} else {
    reply = "Sorry, you are banned!";
}*/
