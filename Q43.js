onst magicians = ["Sarim","Faiz","Ateeb"]

const show_magicians =(arr)=>{
    arr.forEach((element)=>{
        console.log(element)
    })
}

show_magicians(magicians)

const make_great_magicians = (arr)=>{
   const great = [...arr]
        arr.forEach((ele,index)=>{
            great[index] = "Great "+ ele 
        })
        return great
}

console.log(make_great_magicians(magicians))

const graet_mag = make_great_magicians(magicians)
show_magicians(graet_mag)
show_magicians(magicians)
