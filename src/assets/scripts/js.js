


window.addEventListener( "load", () => {

    var drawerSwitch = document.querySelector( ".drawerswitch" );
    var drawerToggle = document.querySelector( ".drawertoggle" );
    var menu3 = document.querySelector( ".menu3" );
    var sidebar = document.querySelector( "sidebar" );
    var options = document.querySelectorAll( "option" );
    var drawer = document.querySelector( "drawer" );
    var drawerObserver = 0;

    function toggle( v ) {
        const bkp = v.getAttribute("display");
        
        if( v.style.display !== "none" ) {
            v.style.display = "none";
        } else {
            v.style.display = bkp;
        }
    }

    function print( v ) { console.log( v ); }
    // drawer.style.width = "0";

    
    drawerSwitch.addEventListener( "click", () => {
        switch( drawer.style.width ) {
            case "": drawer.style.width = "350px";
                     options.forEach( el => el.style.display = "block" );
                break;
            case "68px": drawer.style.width = "350px";
                         options.forEach( el => el.style.display = "block" );
                break;
            case "350px": drawer.style.width = "68px";
                          options.forEach( el => el.style.display = "none" );
                break;
        }
    } );

    drawerToggle.addEventListener( "click", () => {
        switch( drawerObserver ) {
            case 0: drawer.style.width = "68px";
                    drawer.style.display = "block";
                    drawerObserver = 2;
                    options.forEach( el => el.style.display = "none" );
                break;
            case 1: drawer.style.width = "68px";
                    drawer.style.display = "block";
                    drawerObserver = 2;
                    options.forEach( el => el.style.display = "none" );
                break;
            case 2: drawer.style.width = "0";
                    drawer.style.display = "none";
                    drawerObserver = 1;
                    options.forEach( el => el.style.display = "none" );
                break;
        }
        // toggle( drawer );
        // drawer.style.width = "68px";
    } );

    menu3.addEventListener( "click", () => {
        toggle( sidebar );
    } );
    


} );