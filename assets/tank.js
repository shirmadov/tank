class Tank{

    constructor(table){

         this.get_table = table;
         this.first = true;
         this.createMap();
         this.createTank()
         this.drive();

         this.height = table.rows.length;
         this.width = table.rows[0].cells.length;
         console.log(this.width);
         
    }



    createMap() {
        // let get_table = document.querySelector('.js_table');
    
        console.log(this.get_table);
    
        for (let tr = 0; tr < 30; tr++) {
            let create_tr = document.createElement('tr');
    
            for (let td = 0; td < 40; td++) {
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
         this.direction = this.randomNum(1,5);
        //  this.direction = 4;           
    
        let start_point = this.get_table.rows[27].cells.item(1);
        // let direction = 2;
        // this.tank = {
        //     gun:[0,0],
        //     body:[0,0],
        //     rfw:[0,0],
        //     rbw:[0,0],
        //     lfw:[0,0],
        //     lbw:[0,0]
        // }

        this.location = [28,1];

        console.log(location);

    

        if(this.direction == 1){
            this.tank = {
                gun:[this.location[0]-1,this.location[1]],
                body:[this.location[0],this.location[1]],
                rfw:[this.location[0],this.location[1]+1],
                rbw:[this.location[0]+1,this.location[1]+1],
                lfw:[this.location[0],this.location[1]-1],
                lbw:[this.location[0]+1,this.location[1]-1]
            }
            // this.up()
        }else if(this.direction == 2){
            this.tank = {
                gun:[this.location[0],this.location[1]+1],
                body:[this.location[0],this.location[1]],
                rfw:[this.location[0]+1,this.location[1]],
                rbw:[this.location[0]+1,this.location[1]-1],
                lfw:[this.location[0]-1,this.location[1]],
                lbw:[this.location[0]-1,this.location[1]-1]
            }
            // this.right()
        }else if(this.direction == 3){
            this.tank = {
                gun:[this.location[0]+1,this.location[1]],
                body:[this.location[0],this.location[1]],
                rfw:[this.location[0],this.location[1]-1],
                rbw:[this.location[0]-1,this.location[1]-1],
                lfw:[this.location[0],this.location[1]+1],
                lbw:[this.location[0]-1,this.location[1]+1]
            }
            // this.down()
        }else if(this.direction == 4){ 
            this.tank = {
                gun:[this.location[0],this.location[1]-1],
                body:[this.location[0],this.location[1]],
                rfw:[this.location[0]-1,this.location[1]],
                rbw:[this.location[0]-1,this.location[1]+1],
                lfw:[this.location[0]+1,this.location[1]],
                lbw:[this.location[0]+1,this.location[1]+1]
            }
             // this.left()
        }
        this.shapeTank();
    }
    
    
     drive(){
        document.addEventListener('keydown', (e)=>{
            
            if(e.keyCode == 37){
                this.left();
            }else if(e.keyCode == 38){
                this.up();
            }else if(e.keyCode == 39){
                this.right();
            }else if(e.keyCode == 40){
                this.down();
            }
        })
    
    }

    up(){
        this.clear()

   
        if(this.direction != 1){
            console.log('First');
            this.tank = {
                gun:[this.location[0]-1,this.location[1]],
                body:[this.location[0],this.location[1]],
                rfw:[this.location[0],this.location[1]+1],
                rbw:[this.location[0]+1,this.location[1]+1],
                lfw:[this.location[0],this.location[1]-1],
                lbw:[this.location[0]+1,this.location[1]-1]
            }
            this.direction = 1
        }else  if(this.direction == 1 && this.tank.gun[0]>0){
            console.log(this.tank.gun[0],this.height);
            console.log('Go');
            this.tank = {
                gun:[this.tank.gun[0]-1,this.tank.gun[1]],
                body:[this.tank.body[0]-1,this.tank.body[1]],
                rfw:[this.tank.rfw[0]-1,this.tank.rfw[1]],
                rbw:[this.tank.rbw[0]-1,this.tank.rbw[1]],
                lfw:[this.tank.lfw[0]-1,this.tank.lfw[1]],
                lbw:[this.tank.lbw[0]-1,this.tank.lbw[1]]
            }

            this.location = [this.tank.body[0],this.tank.body[1]];
        }
       
        console.log('Up');
        this.shapeTank()
    }

    right(){
        this.clear()
        if(this.direction != 2){
            this.tank = {
                gun:[this.location[0],this.location[1]+1],
                body:[this.location[0],this.location[1]],
                rfw:[this.location[0]+1,this.location[1]],
                rbw:[this.location[0]+1,this.location[1]-1],
                lfw:[this.location[0]-1,this.location[1]],
                lbw:[this.location[0]-1,this.location[1]-1]
            }
            this.direction = 2
        }else if(this.direction == 2 && this.tank.gun[1] < this.width-1){
            console.log(this.tank.gun[1])
            this.tank = {
                gun:[this.tank.gun[0],this.tank.gun[1]+1],
                body:[this.tank.body[0],this.tank.body[1]+1],
                rfw:[this.tank.rfw[0],this.tank.rfw[1]+1],
                rbw:[this.tank.rbw[0],this.tank.rbw[1]+1],
                lfw:[this.tank.lfw[0],this.tank.lfw[1]+1],
                lbw:[this.tank.lbw[0],this.tank.lbw[1]+1]
            }

            this.location = [this.tank.body[0],this.tank.body[1]];
        }
        this.shapeTank()
        console.log('Right');
    }

    down(){
        this.clear()
     

        if(this.direction != 3){
            this.tank = {
                gun:[this.location[0]+1,this.location[1]],
                body:[this.location[0],this.location[1]],
                rfw:[this.location[0],this.location[1]-1],
                rbw:[this.location[0]-1,this.location[1]-1],
                lfw:[this.location[0],this.location[1]+1],
                lbw:[this.location[0]-1,this.location[1]+1]
            }
            this.direction = 3
        }else if(this.tank.gun[0]<this.height-1){
            console.log(this.tank.gun[0],this.height);
            this.tank = {
                gun:[this.tank.gun[0]+1,this.tank.gun[1]],
                body:[this.tank.body[0]+1,this.tank.body[1]],
                rfw:[this.tank.rfw[0]+1,this.tank.rfw[1]],
                rbw:[this.tank.rbw[0]+1,this.tank.rbw[1]],
                lfw:[this.tank.lfw[0]+1,this.tank.lfw[1]],
                lbw:[this.tank.lbw[0]+1,this.tank.lbw[1]]
            }

            this.location = [this.tank.body[0],this.tank.body[1]];
        }


        this.shapeTank()
        console.log('Down');
    }

    left(){
        this.clear()
  
        if(this.direction != 4){
            this.tank = {
                gun:[this.location[0],this.location[1]-1],
                body:[this.location[0],this.location[1]],
                rfw:[this.location[0]-1,this.location[1]],
                rbw:[this.location[0]-1,this.location[1]+1],
                lfw:[this.location[0]+1,this.location[1]],
                lbw:[this.location[0]+1,this.location[1]+1]
            }
            this.direction = 4
        }else if(this.direction == 4 && this.tank.gun[1] > 0){
            this.tank = {
                gun:[this.tank.gun[0],this.tank.gun[1]-1],
                body:[this.tank.body[0],this.tank.body[1]-1],
                rfw:[this.tank.rfw[0],this.tank.rfw[1]-1],
                rbw:[this.tank.rbw[0],this.tank.rbw[1]-1],
                lfw:[this.tank.lfw[0],this.tank.lfw[1]-1],
                lbw:[this.tank.lbw[0],this.tank.lbw[1]-1]
            }

            this.location = [this.tank.body[0],this.tank.body[1]];
        }


        this.shapeTank()
        console.log('Left');
    }



    go(){
        // console.log();

    }

    shapeTank(){
        this.get_table.rows[this.tank.gun[0]].cells.item(this.tank.gun[1]).style.backgroundColor = '#708090';
        this.get_table.rows[this.tank.body[0]].cells.item(this.tank.body[1]).style.backgroundColor = '#708090';
        this.get_table.rows[this.tank.rfw[0]].cells.item(this.tank.rfw[1]).style.backgroundColor = '#708090';
        this.get_table.rows[this.tank.rbw[0]].cells.item(this.tank.rbw[1]).style.backgroundColor = '#708090';
        this.get_table.rows[this.tank.lfw[0]].cells.item(this.tank.lfw[1]).style.backgroundColor = '#708090';
        this.get_table.rows[this.tank.lbw[0]].cells.item(this.tank.lbw[1]).style.backgroundColor = '#708090';
    }
    
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    clear(){
        this.get_table.rows[this.tank.gun[0]].cells.item(this.tank.gun[1]).style.backgroundColor = '#ADFFCE';
        this.get_table.rows[this.tank.body[0]].cells.item(this.tank.body[1]).style.backgroundColor = '#ADFFCE';
        this.get_table.rows[this.tank.rfw[0]].cells.item(this.tank.rfw[1]).style.backgroundColor = '#ADFFCE';
        this.get_table.rows[this.tank.rbw[0]].cells.item(this.tank.rbw[1]).style.backgroundColor = '#ADFFCE';
        this.get_table.rows[this.tank.lfw[0]].cells.item(this.tank.lfw[1]).style.backgroundColor = '#ADFFCE';
        this.get_table.rows[this.tank.lbw[0]].cells.item(this.tank.lbw[1]).style.backgroundColor = '#ADFFCE';
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