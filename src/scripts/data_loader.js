const DATA_LOADER = (data) => {
  let dataReturn = "";
  for(let i = 0; i < data.length; i++) {
    if(data[i].description.length > 150) {
      data[i].description = data[i].description.substring(0, 150) + "..."
    }

    dataReturn += `
       <article class="card-article">
        <img class="article-image" src="${data[i].pictureId}" alt="Kafe dengan nama ${data[i].name}" tabindex="0">
        <h3 class="article-title" tabindex="0">${data[i].name}</h3>
        <p class="article-desc" tabindex="0">${data[i].description}</p>
        <div class="article-footer">
          <p class="article-footer-item-1" tabindex="0">City: ${data[i].city}</p>
          <p class="article-footer-item-2" tabindex="0">Rating: ${data[i].rating}/5</p>
        </div>
       </article>
     `
  }

  return dataReturn;
}

export default DATA_LOADER;