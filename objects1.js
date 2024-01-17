let tv = {
    name : "sony",
    hieght : 500,
    weight : 6000,
    colour : "black",
    tvOn : function(){
        console.log("switch on tv ");
        return this.name;
    }
}

console.log(tv.name);
console.log(tv["colour"]);
console.log(tv.tvOn());
tv.tvOn();




 