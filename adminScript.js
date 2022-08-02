showData();
function saveData()
{
  let name, email, age, phone, adhaar, address, date;
  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  
  age=document.getElementById("age").value;
  phone=document.getElementById("phone").value;
  adhaar=document.getElementById("adhaar").value;
  address=document.getElementById("address").value;
  date=document.getElementById("date").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
    "name":name,
    "email":email,
    "age":age,
    "phone":phone,
    "adhaar":adhaar,
    "address":address,
    "date":date
})
localStorage.setItem("users",JSON.stringify(user_records));
}
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px;">'+user_records[i].name+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].email+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].age+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].phone+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].adhaar+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].address+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].date+'</div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
  showData();
  }
    