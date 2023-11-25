function start(){
    setInterval(watch,1000);
    let day = 0;
    let hours = 0;
    let minutes = 0;
    store=0;

    function watch(){
        
        if(store<=60){
            document.getElementById('second').innerHTML = store
            store++;
        }

        else if(store>60){
            store = 0;
            minutes++;
            document.getElementById('minutes').innerHTML = minutes;
            if(minutes===60){
                hours++;
                minutes = 0;
                document.getElementById('hours').innerHTML = hours;
                if(hours === 24){
                    day++;
                    hours = 0;
                    document.getElementById('day').innerHTML=day;
                }
            }
        }
    }
}