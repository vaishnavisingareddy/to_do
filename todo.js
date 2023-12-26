let todoarray = [
    {
        item:"frist", 
        due:'4-10-2024'
    },
    {
        item: "scodn",
        due:'4-9-2024'
    }];
dispayitems();

function additem() {
  let item = document.querySelector("#inputid");
  let dateelm=document.querySelector("#dateelement")
  let itemvalu = item.value;
  let datval=dateelm.value;
  todoarray.push({item:itemvalu,due:datval});
  item.value = "";
  dispayitems();
}

function dispayitems() {
  let elemt = document.querySelector("#mylistis");
  let newHTML = "";

  for (let i = 0; i < todoarray.length; i++) {
    let firstt=todoarray[i].item;
    let secc=todoarray[i].due;
    newHTML += `
        
             <span>${firstt}</span>
             <span>${secc}</span>
             <button onclick="todoarray.splice(${i},1); 
             dispayitems();" style="background-color: red; border-radius: 5px; border:1px; " >Delete</button>

        
        `;
  }
  elemt.innerHTML = newHTML;
}
