


window.addEventListener( "load", () => {

    var drawerSwitch = document.querySelector( ".drawerswitch" );
    var drawerToggle = document.querySelector( ".drawertoggle" );
    var menu3 = document.querySelector( ".menu3" );
    var details1 = document.querySelector( ".SelecionandoElementos" );
    var options = document.querySelectorAll( "option" );
    var drawer = document.querySelector( "drawer" );
    var drawerObserver = 0;

    function print( v ) { console.log( v ); }
    drawer.style.width = "0";

    
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
                    drawerObserver = 2;
                    options.forEach( el => el.style.display = "none" );
                break;
            case 1: drawer.style.width = "68px";
                    drawerObserver = 2;
                    options.forEach( el => el.style.display = "none" );
                break;
            case 2: drawer.style.width = "0";
                    drawerObserver = 1;
                    options.forEach( el => el.style.display = "none" );
                break;
        }
    } );

    menu3.addEventListener( "click", () => {
        details1.style.display = "block";
        console.log( "oi" );
    } );

    


} );