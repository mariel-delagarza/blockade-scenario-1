# What is this

A Mapbox "interactive storytelling" map, [based on their demo/template](https://labs.mapbox.com/education/impact-tools/interactive-storytelling/). 

# What are the files
- `config.js` &rarr; The configuration file for your map. This is where you give Mapbox the style you want to use and create the "chapters" of your scrolly map and give them their settings (e.g. which layers to show and hide). 
- `index.html` &rarr; The meat of your map. This holds the HTML, including the styling, as well as the JavaScript that powers the map itself.

# What are "chapters"
- The chapters are discrete chunks of your scrolly map. Think of it was a scrolling PowerPoint.
- If you have the `config.js` file open while looking at the [live map](https://feat-taiwan-blockade-map--csis-cpower-viz.netlify.app/taiwan-blockade-map/scenario1/), you can see the text in the boxes will match up with the values of the `description` items. For example, line 33 matches up with the first text you see when you start the map. Each box of text is part of a separate chapter. 
- Each chapter has an `onChapterEnter` part and an `onChapterExit` part. This is where you tell Mapbox what layers to make visible (e.g. showing drones) when a user reaches the chapter, and what layers to hide (e.g. removing ships) when a user moves to the next chapter.
- The layers referenced are created via Mapbox Studio. There we set the opacity to `0`, and here we use opacity as a way to show and hide them. 

# The CSS
- Starts on line 23 of the `index.html` file. This includes some defaults from the Mapbox template as well as custom styles we've added. 
- In `config.js` the `id` of a chapter is what corresponds to the `id` in the CSS. On line 171 you'll see a list of chapters - that's where that comes from.
- Line 159 is for the drone gifs -- the `url` is the gif we're using, `background-size` tells it to take up all of the space it has, and `height` and `width` tell it how big to be.

# The JavaScript powering the map
- Starts on line 220 of the `index.html` file. Most of this is default and part of the Mapbox template. 
- When you see `config` referenced, it's referring to the `config.js` file. A `.` references a property. So `config.showMarkers` is referring to  line 5. The chapters are an array (a list) so to reference those we have to also reference their place in the array. If you see `config.chapters[0]` that's referring to the chapter labeled "start", since it's the first one in the array (JS lists start at 0, not 1). Once you're referencing an item in the array, you go back to using a `.` to reference a property. So `config.chapters[0].id` is referencing line 12.
- As far as markers, what we're interested in starts on line 365. I've added comments to explain what's happening in more detail, but lines 365 - 385 are where we actually create the markers and tell them (1) to use the gif we want and (2) where they go on the map. We *do not* add them to the map yet.
- On line 422, you see `onStepEnter` and on line 468 you see `onStepExit` -- These refer to when a user reaches a chapter (a step) in their scroll and when they leave a chapter and move to the next one. 
- Lines 429 - 435 are where we **add** the markers to the map.
- Lines 477 - 483 are where we **remove** the markers from the map.

# So how do I add markers (multiples of the same gif, like this map)
- [This tutorial from Mapbox](https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/#add-html-markers) covers adding custom markers to maps. It's more info than you really need but it's good background and has some examples.
- Step 1: you need to add your gif file(s) to your project. Your project should be structured like this one (`config.js`, `index.html`, any gifs you want to use). 
- Step 2: decide which "chapters" of your map will have them - once you've decided, make sure you note the chapter's `id`.
- Step 3: decide where on the map your markers will go. [This Mapbox tool](https://labs.mapbox.com/location-helper/#3/40.78/-73.97) can help you determine the exact lat/long to use. Once you have a lat/long pair, copy that somewhere because you'll need it. This value will be the center of your gif.
- Step 3: in `index.html`, if you're adding multiple markers _**that use the same gif**_ you can follow the code that's in this project's `index.html` file (starting on line 365). You'll make a list to hold your markers, make a list of their locations (the lat/long pairs from Step 2), and then create the `div`s that will hold your markers, tell them which gifs to use, and tell them where on the map they go.
- Step 4: once you've made your markers, jump to `onStepEnter` and `onStepExit` and tell Mapbox which chapters should add and remove them. In this project, that's lines 429 and 477. This is where you need the `id` from Step 1. 

# How do I add markers with different gifs
- The idea is the same (make the marker, tell it which gif to use and where to go, and tell the map when to add and remove it) but the how is a little different.
- There are a lot of different ways you can go about coding this, but I've given an example of a straightforward (if kind of clunky) way to do it in `example.js`. 
- The code in `index.html` is assuming we're using the same gif and the same size for each marker, and later on they all get added to and removed from the map at the same time. 
- In `example.js` we still make a list of the lat/long pairs for all of our markers, but we make the markers individually an add to and remove them from the map individually. 
