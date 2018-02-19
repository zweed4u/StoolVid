try{
    alert(document.getElementsByClassName('videoPlayer__video')[0].children[0].src);
}
catch(err){
    //alert(err.message);
    console.log('Video Url not found!');
    null;
}