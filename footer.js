document.body.innerHTML += '<div class="row-fluid"> <script> $(document).ready(function(){ $(document).keypress(function(e) { alert("hi"); if(e.which == 13){ if($("#newssub").is(":focus")){ window.location.href = "mailto:info@changethroughcode.com?body=" + $("#newssub").val(); } } }); }); </script> <div class="col-sm-12"> <div class="footerdiv"> <div class="col-sm-8 col-sm-offset-2"> <input id="newssub" type="text" placeholder="Send us an email"/> </div> <div class="row-fluid" id="footerrow"> <div class="col-sm-4"> <a id="joinuslink" href="https://docs.google.com/a/gapps.yrdsb.ca/forms/d/1gsaRADIE13jMRuqH3RJobpfK13ks6Tvxg9Lrgr2nNNs/viewform?c=0&w=1" target="_blank">Join us</a> </div> <div class="col-sm-4"> <a id="twitter-icon" href="https://twitter.com/MW6YouthCouncil?ref_src=twsrc%5Etfw" target="_blank" class="socialmedialink"><img src="twitter-button.png" width="28px" height="28px"/>@MW6YouthCouncil</a> </div> <div class="col-sm-4"> <a id="facebook-icon" href="https://www.facebook.com/w6ycmkm/?fref=ts" target="_blank" class="socialmedialink"><img src="facebook-button.png" width="28px" height="28px"/> Markham W6YC</a> </div> </div> </div> </div> </div>';
