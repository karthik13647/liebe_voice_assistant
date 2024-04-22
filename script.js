const button=document.querySelector('.talk');
const content =document.querySelector('.content');
function speak(text){
    const tell=new SpeechSynthesisUtterance(text);
    tell.rate=1;
    tell.pitch=100;
    tell.volume=100;
    window.speechSynthesis.speak(tell);
}
function call(){
    var day=new Date();
    var hour=day.getHours();
    if(hour>=0 && hour<12){
        speak("Mangekyo Sharingan");
        speak("Hi Madara Uchiha...Wake up to Reality");
    }
    else if(hour>=12 && hour<17){
        speak("Liebe");
        speak("Hi Asta...Never Give Up");

    }
    else{
        speak("Attack Titan");
        speak("Hi Eren Yeager...Thathakaye");
    }
}
window.addEventListener('load',()=> {
    speak("Initializing...");
    call();
});
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

button.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    }else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Opening Linkedin...");
    }else if (message.includes('what') || message.includes('who') || message.includes('where') || message.includes('how') || message.includes('when')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}