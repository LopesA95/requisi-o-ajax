document.addEventListener("DOMContentLoaded", async function () {
  const apiUrl = "https://api.github.com/users/LopesA95";

  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error(`Erro ao carregar dados: ${response.status}`);
      }

      const userData = await response.json();

      const nameElement = document.querySelector("#name");
      const userNameElement = document.querySelector("#username");
      const avatarElement = document.querySelector("#avatar");
      const reposElement = document.querySelector("#repos");
      const followersElement = document.querySelector("#followers");
      const followingElement = document.querySelector("#following");
      const linkElement = document.querySelector("#link");

      nameElement.innerHTML = userData.name;
      userNameElement.innerHTML = userData.login;
      avatarElement.src = userData.avatar_url;
      followingElement.innerHTML = userData.following;
      followersElement.innerHTML = userData.followers;
      reposElement.innerHTML = userData.public_repos;
      linkElement.href = userData.html_url;
  } catch (error) {
      console.error("Erro ao carregar dados do GitHub:", error);
  }
});
