var shuffleSequence = seq("test");

// Preloading two zip files
PennController.PreloadZip("http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/Images.zip",
                          "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/StopSentences.zip");

// Much quicker to type T than to type PennController.instruction each time
var t = PennController.instruction;

// Setting items is standard
var items = [

  // You call PennController instead of giving an object of options
  ["test", "PennController", PennController(

      // Simply add a line of text
      // Setting a variable for future reference
      pressToStart = 
        t("Press any key to start playing the sound")
      ,
      // Waiting for any keypress before continuing
      t.key()
      ,
      // Remove the text associated with the variable pressToStart
      pressToStart.remove()
      ,
      whileListening = 
        t("Please wait while the audio is playing..")
      ,
      // Play a WAV file (from the zip file) and wait until it's been played
      t("23.wav")
        .wait()
      ,
      whileListening.remove()
      ,
      pleaseClick = 
        t("Please click on the picture below")
      ,
      // Add an image on which you have to click before continuing (click removes pleaseClick's text)
      bakeryImage = 
        t("http://files.lab.florianschwarz.net/ibexfiles/Pictures/bakery.png").click(pleaseClick.remove())
      ,
      // Reward the click with a "Good job!" fancy message
      goodjob = 
        t("Good job!").shift(50, -75).css("background", "yellow")
      ,
      // Remove goodjob's message after 1500ms
      t.timer(1500, goodjob.remove())
      ,
      // This is executed right away (no WAIT instruction to the timer)
      t("How do you like the PennController so far?")
      ,
      // Group three elements on the same line
      scaleLine = 
        t(
              t("hate it"),
              // Add a 5 radio button scale (and save the final choice)
              scale = t.radioButtons('radios',5).save(),
              t("love it")
          )
      ,
      clickHere = 
        t("Click here to continue.")
          .click()  // Click the text before continuing
          .when(
                  scale.selected(), // But continue only if a radio button is selected
                  t(
                      // If not, add a warning message
                      warning = t("Please select a response before proceeding.")
                                    .css({color: "red", "font-weight": "bold"})
                                    .move(scaleLine)
                      ,
                      // Remove the warning message upon click on the scale
                      scale.click(warning.remove())
                  )
          )
      ,
      clickHere.remove()
      ,
      t("Now please select one of the two pictures on the screen using your mouse.")
      ,
      beachImage = 
        t("http://files.lab.florianschwarz.net/ibexfiles/Pictures/beach.png")
      ,
      // The images associated with the two variables now belong to a group
      // Wait for one to be selected (by clicking -- default) before continuing
      bakeryOrbeach = 
        t.selector(bakeryImage, beachImage).wait()
      ,
      pressSpaceContinue = 
        t("Press Space to continue")
      ,
      // Wait for a keypress on the spacebar before continuing
      t.key(" ")
      ,
      pressSpaceContinue.remove()
      ,
      // Disable selection of images (choice is now final)
      bakeryOrbeach.enable(false)
      ,
      // Play a sound from a distant URL
      t("https://github.com/florianslab/PennControllerIbexRepository/raw/master/practice1.wav")
      ,
      t("Will you have time to read this text before the audio playback is cut off in the middle?")
      ,
      // Proceed after 500ms from the start of playback (no WAIT instruction to the audio)
      t(1000).wait()

  )]
      
];