// @ts-nocheck
requestCSS.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/style.css");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("success!");
        const style = document.createElement("style");
        style.innerHTML = xhr.response;
        document.head.appendChild(style);
      } else {
        alert("失败了");
      }
    }
  };
  xhr.send();
};

requestJS.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/2.js");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const script = document.createElement("script");
        script.innerHTML = xhr.response;
        document.body.appendChild(script);
      } else {
        alert("失败了");
      }
    }
  };
  xhr.send();
};

requestHTML.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/1.html");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = xhr.response;
        document.body.appendChild(div);
      } else {
        alert("失败了");
      }
    }
  };
  xhr.send();
};

requestXML.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "3.xml");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const xml = xhr.responseXML;
      const text = xml.getElementsByTagName("warning")[0].textContent.trim();
      console.log(text);
    }
  };
  xhr.send();
};

requestJSON.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "4.json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const json = xhr.response;
      const obj = JSON.parse(json);
      myName.textContent = obj.name;
    }
  };
  xhr.send();
};
let n = 1;

requestNextPage.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `page${n + 1}.json`);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const array = JSON.parse(xhr.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.id}`;
        xxx.appendChild(li);
      });
    }
  };
  n += 1;
  xhr.send();
};
