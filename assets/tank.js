class Tank{

    constructor(table){

         this.get_table = table;
         this.createArea();
         this.createTank()
         this.drive();
    }



    createArea() {
        // let get_table = document.querySelector('.js_table');
    
        console.log(this.get_table);
    
        for (let tr = 0; tr < 30; tr++) {
            let create_tr = document.createElement('tr');
    
            for (let td = 0; td < 50; td++) {
                let creare_td = document.createElement('td');
                create_tr.append(creare_td);
            }
    
            this.get_table.append(create_tr);
        }
    
    }
    
    
    createTank() {
        let random_row = this.randomNum(0,29);
        let random_column = this.randomNum(0,49);
    
        // let get_table = document.querySelector('.js_table');
    
        // let start_point = get_table.rows[random_row].cells.item(random_column);
        // let direction = randomNum(1,5);
    
        let start_point = this.get_table.rows[27].cells.item(1);
        let direction = 5;
    
        console.log(random_row, random_column);
    
        if(direction == 1){
            this.get_table.rows[random_row+1].cells.item(random_column).style.backgroundColor = '#708090';
            this.get_table.rows[random_row+1].cells.item(random_column+1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row+1].cells.item(random_column-1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row+2].cells.item(random_column-1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row+2].cells.item(random_column+1).style.backgroundColor = '#708090';
        }else if(direction == 2){
            this.get_table.rows[random_row].cells.item(random_column-1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row-1].cells.item(random_column-1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row-1].cells.item(random_column-2).style.backgroundColor = '#708090';
            this.get_table.rows[random_row+1].cells.item(random_column-1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row+1].cells.item(random_column-2).style.backgroundColor = '#708090';
        }else if(direction == 3){
            this.get_table.rows[random_row-1].cells.item(random_column).style.backgroundColor = '#708090';
            this.get_table.rows[random_row-1].cells.item(random_column-1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row-1].cells.item(random_column+1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row-2].cells.item(random_column-1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row-2].cells.item(random_column+1).style.backgroundColor = '#708090';
        }else if(direction == 4){
            this.get_table.rows[random_row].cells.item(random_column+1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row-1].cells.item(random_column+1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row+1].cells.item(random_column+1).style.backgroundColor = '#708090';
            this.get_table.rows[random_row-1].cells.item(random_column+2).style.backgroundColor = '#708090';
            this.get_table.rows[random_row+1].cells.item(random_column+2).style.backgroundColor = '#708090';
        }else{
            this.get_table.rows[28].cells.item(0).style.backgroundColor = '#708090';
            this.get_table.rows[28].cells.item(1).style.backgroundColor = '#708090';
            this.get_table.rows[28].cells.item(2).style.backgroundColor = '#708090';
            this.get_table.rows[29].cells.item(0).style.backgroundColor = '#708090';
            this.get_table.rows[29].cells.item(2).style.backgroundColor = '#708090';
        }
    
        start_point.style.backgroundColor = '#708090';
    
    }
    
    
     drive(){
        document.addEventListener('keydown', (e)=>{
            
            if(e.keyCode == 37){
                console.log('Left');
    
            }else if(e.keyCode == 38){
                console.log('Up');
            }else if(e.keyCode == 39){
                console.log('Right');
            }else if(e.keyCode == 40){
                console.log('Down');
            }
    
    
        })
    
    }

    up(){

    }
    
    
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}


document.addEventListener("DOMContentLoaded", async ()=>{

    let get_table = document.querySelector('.js_table');
    let tank = new Tank(get_table);

    // await tank.createArea();
    // await tank.createTank();
    // await tank.drive();

    // createArea()
    // createTank()
    // drive()

 


});