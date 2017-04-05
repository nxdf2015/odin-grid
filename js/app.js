$(function(){
const width = $(".grid").width();

let numberCell = 4 ; // default value



   createGrid(width,numberCell); 

$("button.choice").on("click",function () {
    
    do { 
        numberCell = Number(prompt("enter number of cells ? ")) ;
    }while(  numberCell  <=0 );
    removeGrid();
    createGrid(width,numberCell);});

$("button.remove").on("click",function(){
    if (numberCell == 4 ) return;
    $('.row').remove();
    createGrid(width,4);
})




})//end main program




function removeGrid(){
    $(".row").remove();
}



function createRow(width,numberCell){
     let  cell = $("<div></div>",{class:"cell"});
     let row = $("<div></div>",{class:"row"});    
     let   size =  width / numberCell;
    // let backgroundCell;
     let r,g,b;
     cell.height(size);
     cell.width(size);
     cell.hover(
                function  enterHover(){
                backgroundCell =  $(this).css("background");
                // console.log(backgroundCell);
                let reg = /^.+\((\d{0,3})\D (\d{0,3})\D (\d{0,3})\)/g;
                let [r,g,b]= reg.exec(backgroundCell).slice(1,4).map(Number);
                  let colorCell = `rgb(${updateColor(r)}, ${updateColor(g)}, ${updateColor(b)})`;
                let colorHover = `rgba(${r},${g},${b},${0.5})`;
                $(this).css("background",colorCell);}
                //,

        // function leaveHover(){
        //       let colorCell = `rgb(${updateColor(r)}, ${updateColor(g)}, ${updateColor(b)})`;
        //       $(this).css("background",colorCell);
        //       //  $(this).css("background",backgroundCell);
        //     }
            );    
     row.height(size);  
     row.width(width);
     
    for (let i = 0 ; i< numberCell;i++){
        row.append(createCell(cell));};
   return row; };

 
 function createCell(cell)
        {let c = cell.clone(true);
         let color =selectColor();
        let colorCell = `rgb(${color.r},${color.g},${color.b})`;
        c.css("background",colorCell);
    return c;}


function createGrid(width,numberCell){
    const container = $(".grid");
    for (let i = 0 ; i < numberCell ; i++){
        container.append(createRow(width,numberCell));}
}

function selectColor(){
    color={r:0,g:0,b:0};
    for (let c of Object.getOwnPropertyNames(color)){
          color[c] = Math.round(Math.random() * 255)}
 return color;
}

 function updateColor(value){
     return Math.round(value * ( 1 - 1/10));
 }