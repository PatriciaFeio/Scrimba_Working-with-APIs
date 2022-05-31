/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

document.getElementById("get-activity-btn").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById("emoji1").textContent = `😄`
        document.getElementById("emoji2").textContent = `😄`
        document.getElementById("emoji1").classList.add("animation")
        document.getElementById("emoji2").classList.add("animation")
        document.getElementById("app-title").textContent = `HappyBot`
        document.getElementById("activity").textContent = data.activity
      })
  })

  document.getElementById("restart-activity-btn").addEventListener("click", function() {
        document.getElementById("emoji1").classList.remove("animation")
        document.getElementById("emoji2").classList.remove("animation")
        document.getElementById("app-title").textContent = `BoredBot`
        document.getElementById("emoji1").textContent = `🤖`
        document.getElementById("emoji2").textContent = `🤖`
        document.getElementById("activity").textContent = `Find something to do`
  })