const name = prompt("what is your first name in small letters please")

if (name === "ira") {
    document.getElementById("potato").textContent = "Ira Umesh Khot, You are currently the playwriter you are paired with Sevdip Singh Reel."
} else if (name === "nathan") {
    document.getElementById("potato").textContent = "Nathan Muturi Hunja, You are the director as of now you are paired with anyone as of now"
} else if (name === "nisarg") {
    document.getElementById("potato").textContent = "Nisarg Niraj Maru, You are currently the narrator you are not paired with anyone as of now."
} else if (name === "sevdip") {
    document.getElementById("potato").textContent = "Sevdip Singh Reel, You are currently the playwriter of the group you are paired with Ira Umesh Khot."
} else if (name === "shamari") {
    document.getElementById("potato").textContent = "Shamari Baraka Gioko, You do not have any roles as of now this will be changed in future website changes so please wait."
} else if (name === "leo") {
    document.getElementById("potato").textContent = "Leo Keli Mutuku, You currently working on the lights you are paired with Krish Utpalkumar Patel and Christopher Mathenge Mwangi."
} else if (name === "shreya") {
    document.getElementById("potato").textContent = "Shreya Anilkumar Nagda, You are currently working on the sound you are paired with Sahildev Surjit Singh."
} else if (name === "neema") {
    document.getElementById("potato").textContent = "Neema Bosibori Gunga, You are currently the Costume Designer you are paired with Shamari Baraka Gioko and Suki Minayo Anyonge."
} else if (name === "christopher") {
    document.getElementById("potato").textContent = "Christopher Mathenge Mwangi, You currently working on the lights you are paired with Krish Utpalkumar Patel and Leo Keli Mutuku."
} else if (name === "suki") {
    document.getElementById("potato").textContent = "Suki Minayo Anyonge, You are currently the Costume Designer you are paired with Shamari Baraka Gioko and Neema Bosibori Gunga."
} else if (name === "akshi") {
    document.getElementById("potato").textContent = "Akshi Pragnesh Chheda, You are currently paired with no ne as of now."
} else if (name === "krish") {
    document.getElementById("potato").textContent = "Krish Utpalkumar Patel, You hcurrently are working on the lights you are paired with Leo Keli Mutuku and Christopher Mathenge Mwangi."
} else if (name === "sahildev") {
    document.getElementById("potato").textContent = "Sahildev Surjit Singh, You are currently working on the sound you are paired with Shreya Anilkumar Nagda."
} else {
    document.getElementById("potato").textContent = "Sorry, " + name + " we cannot find your name or it must be a typo or you must have entered your name with a capital letter if this does not work please contact darklord7.inquiries@gmail.com for further support we will reply as soon as possible,Thank you."
}
