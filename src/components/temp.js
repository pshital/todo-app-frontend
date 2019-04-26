<div class="col-sm-3 first">
                            <label>Pay bills</label>
                            <button type="submit" class="btn btn-primary">Delete</button> 
                            <button type="submit"class="btn btn-primary">Done</button>
                        </div>
                        
                    
                     <div class="col-sm-3 first">
                        <label>Grossary </label>
                        <button type="submit" class="btn btn-primary">Delete</button> 
                        <button type="submit"class="btn btn-primary">Done</button>
                     </div>
                     <div class="col-sm-3 first">
                        <label>Go to gym</label>
                        <button type="submit" class="btn btn-primary">Delete</button> 
                        <button type="submit"class="btn btn-primary">Done</button>
                     </div>


const list=[{id:1, text:"pay bill"},
{id:2, text:"go to doctor"},
{id:3, text:"walk a dog"}]



render() {
   const list = ["pay bill", "go to doctor"];


   const updatedList = list.map((listItem) => {
       return (
           <div>
               <li>{listItem}</li>
               <button type="button" class="btn btn-primary">Done</button>
               <button type="button" class="btn btn-primary">Delete</button>

           </div>);
   }



   /*</div>
            {
              this.state.tasks.map(function (item, index) {
                return <DisplayTask tasksName={item} key={index} />
              })
            }
          </div>