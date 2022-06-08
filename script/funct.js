
class game{
    get deskItemCount(){ return this.deskItems.length}
    constructor(){
        this.deskSide = 0
        this.elemValue = 0
        this.deskItems = []
        this.elemRatio = 0

        this.dShow = false
        this.pItems =[]
    }

    setDeskSide(value){
        console.log(this)
        this.deskSide = value

        document.getElementById('left_block').style.display = 'none'
        document.getElementById('elem_value').style.display = 'flex'
    }

    setElemValue(value){
        this.elemValue = value

        document.getElementById('elem_value').style.display = 'none'

        this.deskItems = Array(this.deskSide*this.deskSide)

        if(this.deskItems.length%this.elemValue != 0)
            this.deskItems = Array(this.deskItems.length-1)

        this.elemRatio = (this.deskItems.length)/this.elemValue

        this.deskItems = []

        for(var i=0; i<this.elemRatio; i++){
            for(var j=0; j<this.elemValue; j++){
                this.deskItems.push(i)
            }
        }

        this.deskItems.sort(() => { return Math.random() - 0.5 }) 

        this.dShow = true
        this.display()

        setTimeout(() => this.start(),2000)
    }

    start(){
        console.log(this)

        this.dShow = false
        this.display()
    }
    
    display(){
        var field =  document.getElementById('field')
        field.style.display = 'block'
        var line = ''

        for(var i=0; i<this.deskItemCount; i++){
         
            var value = ''
            var fnc = "onclick='ng.onElemClick("+i+")'"

            if(i%this.deskSide == 0)   
                line += "<div class='row'>"

            if(this.dShow)
                value = this.deskItems[i]


            line += "<div id='"+i+"' class='cell' "+fnc+">"+value+"</div>"

            if((i+1)%this.deskSide == 0) 
                line += "</div>"
      
        }
        field.innerHTML = line
    }

    onElemClick(value){
        console.log(value)
        var item = document.getElementById(value)
        if(item.innerHTML != '') return

        item.innerHTML = this.deskItems[value]

        this.pItems.push(value)

        if(this.deskItems[this.pItems[0]] != this.deskItems[value]){
            for(var i=0; i<this.pItems.length; i++){
                document.getElementById(this.pItems[i]).innerHTML = ''
            }
            this.pItems=[]
        }else if(this.pItems.length == this.elemValue){
            this.pItems=[]
        }

                
        console.log(this.pItems)
    }

} 
var ng = new game()


window.onload = function(event) {

    document.getElementById('left_block').style.display = 'flex'

}
