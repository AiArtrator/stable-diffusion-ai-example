function someFunctionToCallWhenFinished({ seed, base64Image }) {
  const image = document.createElement("img");
  image.src = `data:image/png;base64,${base64Image}`;
  document.body.appendChild(image);
}
