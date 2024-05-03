var config = {
  style: "mapbox://styles/ilabmedia/clve99owv04ue01nucfpb5a52",
  accessToken:
    "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
  showMarkers: true,
  inset: false,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  chapters: [
    {
      id: "start",
      alignment: "right",
      hidden: true,
      location: {
        center: [122.14259, 23.66881],
        zoom: 5.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    // Introduction
    {
      id: "chapter1",
      alignment: "right",
      hidden: false,
      description:
        "<p>In this scenario, Taiwan takes some action that Beijing deems to be unacceptable. This could include another visit by a U.S. Speaker of the House.</p><br><p>When Speaker Nancy Pelosi visited Taiwan in August 2022, China escalated by severing key U.S.-China dialogues and staging unprecedented military exercises around Taiwan.</p><br><p>If a speaker or other high-ranking U.S. official visits Taiwan, Chinese officials may assess that diplomatic measures and PLA exercises are insufficient to deter such activities in the future.</p>",
      location: {
        center: [122.14259, 23.66881],
        zoom: 6.4,
        pitch: 0,
        bearing: 0,
        speed: 0.2,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    // Potentially a heat map?
    {
      id: "chapter2",
      alignment: "left",
      hidden: false,
      description:
        "<p><b>A heat map might go here. It's unclear where these paragraphs of text will go.</b></p><br><p>Thus, Beijing chooses to strongly signal its displeasure and showcase its ability to inflict pain on Taiwan by conducting a limited civilian-led quarantine of a key port in Taiwan.</p><br><p>China begins by declaring the establishment of an \"enhanced customs inspection regime\" that will inspect commercial ships and maritime cargo headed to Kaohsiung—Taiwan's busiest port. In 2023, it received over 15,000 port calls from cargo and tanker vessels, most of which arrived from mainland China and via routes through the South China Sea.</p><br><p>Chinese authorities announce the customs inspection regime will go into force 48 hours after this announcement. In order to enter Kaohsiung, vessels must file advance customs declarations with relevant PRC authorities. China Coast Guard (CCG) and Maritime Safety Administration (MSA) vessels will conduct visit, board, search, and seizure (VBSS) operations against non-compliant ships.</p>",
      location: {
        center: [122.14259, 23.66881],
        zoom: 5.26,
        pitch: 0,
        bearing: 0,
        speed: 0.7, // make the flying slow
        curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "chapter3",
      alignment: "right",
      hidden: false,
      description: `On the day that the quarantine goes into effect, China deploys 10 CCG vessels to patrol and picket the waters off of the coast of Kaohsiung. The vessels intrude well into Taiwan's 24-nautical mile contiguous zone and come close to the 12-nautical miles territorial seas boundary. China also deploys a smaller contingent of CCG and MSA vessels within Taiwan’s contiguous zone within the Taiwan Strait.`,
      location: {
        center: [120.38396, 22.54103],
        zoom: 7.5,
        pitch: 0,
        bearing: 0.0,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "china_coast_guard",
          opacity: 1,
        },
        {
          layer: "maritime_militia",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "china_coast_guard",
          opacity: 0,
        },
        {
          layer: "maritime_militia",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter4",
      alignment: "right",
      hidden: false,
      description:
        "Accompanying these law enforcement vessels are dozens of Chinese maritime militia vessels intruding as close as 4-nautical miles. The maritime militia vessels do not participate in conducting VBSS activities against shipping vessels. They focus primarily on distracting Taiwan’s Coast Guard Administration (CGA) and other vessels, including ramming them as needed.",
      location: {
        center: [122.14259, 23.66881],
        zoom: 6.45,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "china_coast_guard",
          opacity: 1,
        },
        {
          layer: "maritime_militia",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "china_coast_guard",
          opacity: 1,
        },
        {
          layer: "maritime_militia",
          opacity: 1,
        },
      ],
    },
    {
      id: "chapter5",
      alignment: "right",
      hidden: false,
      description: `<b>The design has the ships fade out and drones fade in and move. The text in the powerpoint has the drones appear first. Unclear which order is correct.</b><br><p>The military is present but not playing a leading role. The PLA flies manned and un-manned ISR aircraft around Taiwan to monitor traffic and to help fill gaps in areas between where CCG ships are concentrated. There is also an increase of PLAN destroyers and frigates around Taiwan, but they remain farther out.</p>`,
      location: {
        center: [122.14259, 23.66881],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.2,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "china_coast_guard",
          opacity: 1,
        },
        {
          layer: "maritime_militia",
          opacity: 1,
        },
        {
          layer: "PLA",
          opacity: 1,
        },
        {
          layer: "drones",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "china_coast_guard",
          opacity: 0,
        },
        {
          layer: "maritime_militia",
          opacity: 0,
        },
        {
          layer: "PLA",
          opacity: 0,
        },
        {
          layer: "drones",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter6",
      alignment: "right",
      hidden: false,
      description: `China does not have to hermetically seal off the island or the Port of Kaohsiung, so its CCG vessels do not have to inspect all of the traffic. Chinese-flagged shipping vessels (which account for much of the total traffic) are allowed to enter the port, and China counts on most foreign shipping companies to comply with Chinese authorities to avoid Beijing’s reprisals.`,
      location: {
        center: [122.14259, 23.66881],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.2,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "china_coast_guard",
          opacity: 1,
        },
        {
          layer: "maritime_militia",
          opacity: 1,
        },
        {
          layer: "PLA",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "china_coast_guard",
          opacity: 0,
        },
        {
          layer: "maritime_militia",
          opacity: 0,
        },
        {
          layer: "PLA",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter7",
      alignment: "right",
      hidden: false,
      description: `<p>The CCG thus selects two Taiwan-owned vessels to stop during their patrols, and they conduct VBSS operations.</p><br><p>After four days, the operations draw down significantly, but there is still a CCG and PLA presence in the area indefinitely.</p>`,
      location: {
        center: [122.14259, 23.66881],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.2,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "china_coast_guard",
          opacity: 1,
        },
        {
          layer: "maritime_militia",
          opacity: 1,
        },
        {
          layer: "PLA",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "china_coast_guard",
          opacity: 0,
        },
        {
          layer: "maritime_militia",
          opacity: 0,
        },
        {
          layer: "PLA",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter8",
      alignment: "center",
      hidden: false,
      description: `<p>In this scenario, Beijing’s goal is to punish Taiwan and demonstrate the PRC’s ability to dictate terms in the region. Beijing also aims to use this more limited version of a quarantine to test the capacity of its law enforcement and maritime militia vessels, as well as to test the extent to which foreign shipping companies comply with Beijing’s measures.</p>`,
      location: {
        center: [122.14259, 23.66881],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.2,
        curve: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
