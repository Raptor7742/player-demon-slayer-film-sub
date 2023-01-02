const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Demon Slayer: Kimetsu no Yaiba Le train de l'infini - VOSTFR",
      description: "Vous regardez",
      image: "https://freakingeek.com/wp-content/uploads/2021/05/DemonSlayeFilmr-Banniere-800x445.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m108.syncusercontent.com/mfs-60:8c5af58f37a4e156e20a9f2a74917a7e=============================/p/le%20train%20de%20l'infini%20sub.mp4?allowdd=0&datakey=W77ia8Vgc0lMRVVRcR2Yf8VOXNqgqjNGquCzxmirMyORsCGaaSAF7t0FWm32Fsd4mf7cSgPmQE9MVRkOP2eDEUl8Iwj8gljAj0bbL/fTnYIF0R6HB3lQ7N4T00UYE59YbZrrYraZujk2V82e70MKsqjucq7wEUY6thchTGR3naj/fd1Wpez1geFp8hrZXvmUWG3KcmhQ0TbmsH5z/DSBmtIaGxsXjgd/JhRV3E41pd+mJhvj2Pcnmp3nZU5WQztjb2B0dDoKs5CcZH7VT8ADayc+5d2Zmv89yXL4P+FBph6kEzprDPw8toXYwnz9icYnxumifiDb6F/TudR/DiyUzA&engine=ln-2.3.7.3&errurl=WQOaB1YtPD4ypNGzx4/mdgNEpbpmdY+p9yywfZv+mq/5ankMSXxBNchRJzs63YZrZYj5yffMCcNyEcAEegZPpqXF1T5AVwAQyAjAX+4lsm+oFC8Ecxw/fnRATqH1L7sJ0RSkC1qqfDevZEW4Ml26xBT0mmNrn6Tx3ybpdHuAunH6qaXp+uybz49a7jaQKpMJraheeMf2BFplmyBOtmT/AWBu9kKvJ+pisRqRYWt4MnP0Rcu0VZny0hWXSeNkXDLsAqpkTWfRkKzvOO0NgRsrgf+JB3uFb98YS/le0h0ow87bph3C5vxGZEQ+bBwP8nYoemfKrPLCehvspg1dzm9T1Q==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0ibGUlMjB0cmFpbiUyMGRlJTIwbCdpbmZpbmklMjBzdWIubXA0IjtmaWxlbmFtZSo9VVRGLTgnJ2xlJTIwdHJhaW4lMjBkZSUyMGwnaW5maW5pJTIwc3ViLm1wNDs&ipaddress=1458994159&linkcachekey=4011c7f90&linkoid=652410001&mode=101&sharelink_id=9106196700001&timestamp=1672670739102&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=dc008b8799be4b8c41025c0d211c8f14e30aef0a&cachekey=60:8c5af58f37a4e156e20a9f2a74917a7e=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
