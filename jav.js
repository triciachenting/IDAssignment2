function randomQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        var content = data.content;
        var author = data.author;
        var tag = data.tags[0];
        $(".title").html(`${tag}`);
        $(".quote").html(`${content}`);
        $(".author").html(`${author}`);
        //console.log(content);
        //console.log(author);
    });
}

randomQuote();
generate.addEventListener('click', ()=> {
    randomQuote();
});