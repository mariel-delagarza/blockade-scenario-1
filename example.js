let markers = [];
if (config.showMarkers) {
  const pointArr = [
    [120.070653107119995, 20.924962032182101],
    [120.908702077244001, 25.743083042810799],
    [118.676353023174002, 22.415165453659299],
  ];

  /**We can't do the same thing for each marker anymore**/
  // pointArr.forEach((point, i) => {
  //   markers[i] = document.createElement("div");
  //   markers[i].className = "rotate-right-marker";
  //   markers[i].marker = new mapboxgl.Marker(markers[i]).setLngLat(pointArr[i]);
  // });

  /***********************/
  /*Instead, we make the markers separately and give them different classes - each class should have a different `background-image` (gif), and you should adjust the sizes as necessary.*/
  /***********************/

  // 1. Make the element to hold marker 1
  const myFirstMarkerElement = document.createElement("div");
  // 2. Tell it which CSS (which gif) to use
  myFirstMarkerElement.className = "my-first-marker";
  // 3. Tell Mapbox take a marker for that element, and which lat/long pair in the `pointArr` to use
  const myFirstMarker = new mapboxgl.Marker(myFirstMarkerElement).setLngLat([
    pointArr[0],
  ]);

  // 1. Make the element to hold marker 2
  const mySecondMarkerElement = document.createElement("div");
  // 2. Tell it which CSS (which gif) to use
  mySecondMarkerElement.className = "my-second-marker";
  // 3. Tell Mapbox take a marker for that element, and which lat/long pair in the `pointArr` to use
  const mySecondMarker = new mapboxgl.Marker(mySecondMarkerElement).setLngLat([
    pointArr[1],
  ]);
}

/***********************/
/*Later on in the file, specify which chapters add the markers and which remove them. Remember "exit" means both scrolling up and scrolling down. If you add a marker in chapter 3, but never tell it to be removed, when you scroll back up to chapter 2, it will still be there.*/
/***********************/
//inside onStepEnter 
if (chapter.id == "chapter1") {
  myFirstMarker.addTo(map);
}

if (chapter.id == "chapter4") {
  mySecondMarker.addTo(map);
}

//inside onStepExit
if (chapter.id == "chapter1") {
  myFirstMarker.remove();
}

if (chapter.id == "chapter4") {
  mySecondMarker.remove();
}
