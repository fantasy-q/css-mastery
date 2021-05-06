const side = document.querySelector("#mySidebar");
const iframe = document.getElementById("myFrame").firstElementChild;

fetch($asset + "content.json")
  .then(Response => {
    console.log(Response);
    return Response.json();
  }).then(json => {
    // console.log(json);
    iframe.src = json[0].path;
    json.forEach(element => {
      const a = document.createElement("a");
      // 标题
      a.innerHTML = `第 ${element.chapter} 章 ${element.title}`;
      a.href = `${element.path}`;
      side.appendChild(a);
    });
  });

// side.addEventListener("click", (event) => {
//   console.log(event.target);
  
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.src = ""
//   iframe.contentDocument.head.appendChild(link);

// })
