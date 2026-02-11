const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.getElementById("card");

// YES click – photo + emotional message
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <img src="photo1.jpeg" alt="Moments" class="profile-pic">

    <h1 style="font-size:19px;">
      🫶 Raakku....😁🫶
    </h1>

    <p style="color:#444; font-size:15px; line-height:1.6;">
      🖤Na unna ipdiye paathukuren…<br>
      indha sirippu,<br>
      idhe look ooda,<br>
      indha coffee maadhiri simple moments ellame…🤍<br><br>
      Life full ah,<br>
      ippadiye 🎀🫶
    </p>
  `;
});

// NO button move (fun)
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Falling hearts (slow & calm)
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🤍";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 4 + 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);