const dictionary=(word)=>{


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53eb69c31fmshabac979c7d518d8p1f2c61jsne2d3202e3188',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
	.then(response => response.json())
	.then((response) =>{
        console.log(response)
        wordheading.innerHTML="Here Is The Meaning : "+response.word[0].toUpperCase() + word.slice(1);
        definition.innerHTML=response.definition.replace("1.","<br>1.").replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.").replace("5.","<br>5.").replace("6.","<br>6.").replace("7.","<br>7.");
    } 
 
    
    
    )
	.catch(err => console.error(err));
}
searchbtn.addEventListener('click',(e)=>{
e.preventDefault();
dictionary(searchword.value);
})

 