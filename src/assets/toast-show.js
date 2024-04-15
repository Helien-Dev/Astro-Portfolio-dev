const permissionsToRequest = {
  permissions: ["bookmarks", "history", "clipboard"],
  origins: ["https://developer.mozilla.org/"],
};

async function requestPermissions() {
  function onResponse(response) {
    if (response) {
      console.log("Permission was granted");
    } else {
      console.log("Permission was refused");
    }
    return browser.permissions.getAll();
  }

  const response = await browser.permissions.request(permissionsToRequest);
  const currentPermissions = await onResponse(response);

  console.log(`Current permissions:`, currentPermissions);
}

document.querySelector("#request");
document.addEventListener("click", requestPermissions);

async function copiartexto(texto) {
  await navigator.clipboard
    .writeText(texto)
    .then(function () {
      var mensaje = document.getElementById("toast");
      mensaje.style.display = "block";

      setTimeout(function () {
        mensaje.style.display = "none";
      }, 2000);
    })
    .catch(function (error) {
      console.log("Error al intentar copiar al portapapeles: " + error);
    });
}

var textCopy = "Alvaroaviladev@gmail.com";

copiartexto(textCopy);
