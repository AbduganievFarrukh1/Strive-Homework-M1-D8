      /* EXERCISE 1
       Write a function for changing the title of the document to something else.
      */

       const changeTitle = function (newTitle) {
        let titleNode = document.getElementById("title");
        titleNode.innerText = "New Title";
      };

      /* EXERCISE 2
       Write a function for changing the class of the title of the page to "myHeading".
      */

      const addClassToTitle = function () {
        let titleNode = document.getElementById("title");
        titleNode.classList.add("myHeading");
        //
      };

      /* EXERCISE 3
       Write a function for changing the text of only the p which are children of a div.
      */

      const changePcontent = function () {
        let paragraphNodes = document.querySelectorAll("div p");

        for (let paragraphNode of paragraphNodes) {
          paragraphNode.innerText = "Changed p which are children of a div";
        }
        //
      };

      /* EXERCISE 4
       Write a function for changing the href property of every link to https://www.google.com
      */

      const changeUrls = function () {
        let linkNodes = document.getElementsByTagName("a");
        for (let linkNode of linkNodes) {
          linkNode.href = "https://www.google.com";
        }
        //
      };

      /* EXERCISE 5
       Write a function for adding a new list item in the second unordered list.
      */

      const addToTheSecond = function (content) {
        let newListElement = document.createElement("li");
        newListElement.innerText = "additional item";
        let parentNode = document.getElementById("secondList");
        parentNode.appendChild(newListElement);
      };

      /* EXERCISE 6
       Write a function for adding a paragraph to the first div.
      */

      const addParagraph = function (content) {
        let newParagraph = document.createElement("p");
        newParagraph.innerText = "Now you can see new paragraph";
        let parentNode = document.getElementsByTagName("div");
        parentNode[0].appendChild(newParagraph);
        //
      };

      /* EXERCISE 7
       Write a function for making the first unordered list disappear.
      */

      const firstUlDisappear = function () {
        let firstUnorderedList = document.getElementById("firstList");
        firstUnorderedList.style.display = "none";
        //
      };

      /* EXERCISE 8
       Write a function for making the background of every unordered list green.
      */

      const paintItGreen = function () {
        let everyUoLists = document.getElementsByTagName("ul");
        for (let everyUoList of everyUoLists) {
          everyUoList.style.backgroundColor = "green";
        }
        //
      };

      /* EXERCISE 9
       Make the heading of the page change color every time the user clicks on it.
      */

      const makeItClickable = function (e) {
        let headingNode = document.getElementById("title");
        headingNode.onclick = changeTextColor;
        //
      };

      function changeTextColor(e) {
        e.target.style.color = generateRandomColor();
      }

      const random255 = () => {
        return Math.round(Math.random() * 255);
      };

      const generateRandomColor = function () {
        const red = random255();
        const green = random255();
        const blue = random255();

        return `rgb(${red}, ${green}, ${blue})`;
      };

      makeItClickable(event);

      /* EXERCISE 10
       Change the footer text with something else when the user clicks on it.
      */

      const changeFooterText = function (e) {
        let footerNode = document.getElementsByTagName("footer");
        footerNode[0].onclick = changeContent;
        //
      };

      function changeContent(e) {
        e.target.innerText =
          "Hey, what are you doing here,u just click the footer";
      }

      changeFooterText(event);

      /* EXERCISE 11
       Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

      const inputField = document.getElementById("input-field");

      /* EXERCISE 12
       Create a welcome alert message when the page successfully loads.
      */

      window.onload = function () {
        alert("Hey! User:)");
      };

      /* EXERCISE 13
       Use HTML5 tags to properly provide semantic meaning to the different portions of the page.
      */