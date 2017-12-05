$(function(){
  $('#wordForm').submit(function(event){
    event.preventDefault();
    var word = $('#enterWords').val();
    codingWord = [];
    for(i =0; i<= word.length; i++){
      if(word[i]==='a' || word[i]==='e' ||word[i]==='i' ||word[i]==='o' ||word[i]==='u'){
        codingWord[i]='_';
      }
      else {
        codingWord[i]= word[i];
      }
    }
      var codingWordString = codingWord.slice();
      $("#codingWord").text(codingWordString.join(''));
  });
});
