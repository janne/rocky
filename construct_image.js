function constructImage(daysAgo) {
  var myDate = new Date();
  myDate.setDate(myDate.getDate() - daysAgo);
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  if (month < 10) { month = '0' + month }
  var day = myDate.getDate();
  if (day < 10) { day = '0' + day }
  var img = document.createElement("image");
  img.src = "http://channels.msn.se/serier/images/rocky/roc_" + year + "" + month + "" + day + ".jpg";
  img.id = 'strip';
  return img;
}
