var webpages = {
            "Home": "home.html",
            "About Us": "about_us.html",
            "Contact Us": " contact_us.html",
            "Products": {
                "Clearance": "clearance.html",
                "Today's Sale": "sale.html",
                "Bargain Bin": "bin.html"
            },
            "Login": "login.html"
        };

        var html;
        $.each(webpages, function(label, href){
            var type = typeof href; // What is the type of thing we are looping over?
            console.log(label + " -> " + href + " (type is " + type + ")");
            if(typeof href === "object"){
                html = "<li>" + label + "<ul>"; // "Products" label
                
                $.each(href, function(subLabel, subHref){
                    console.log("--- " + subLabel + " -> " + subHref);
                    
                    html += "<li><a href='" + subHref + "'>" + subLabel + "</a></li>";
                });
                
                html += "</ul></li>";
                /* Same as:
                
                html = html + "</ul></li>";
                
                */
                
            } else {
                html = "<li><a href='" + href + "'>" + label + "</a></li>";
            }
//            console.log(label + " -> " + href);
             $("body").append(html);
            $("a").css("text-decoration","none");
        });
        
