let xhr = new XMLHttpRequest();

xhr.open("GET", "https://www.linkedin.com/jobs/search/?currentJobId=2998258287&f_WT=2&geoId=106155005",true);
xhr.responseType = "document";

xhr.onload = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseXML.body);
  }

  xhr.onerror = () => {
    console.error(xhr.status, xhr.statusText);
  };


};
  xhr.send();
