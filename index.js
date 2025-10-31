const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
let a=[]
app.get("/items",(r,s)=>s.json(a))
app.post("/items",(r,s)=>{
 let b={id:Date.now(),name:r.body.name}
 a.push(b)
 s.status(201).json(b)
})
app.patch("/items/:id",(r,s)=>{
 let c=a.find(x=>x.id==r.params.id)
 if(c){c.name=r.body.name;s.json(c)}else s.status(404).json({m:"not found"})
})
app.delete("/items/:id",(r,s)=>{
 a=a.filter(x=>x.id!=r.params.id)
 s.json({m:"deleted"})
})
app.listen(6000,()=>console.log("Server running on port 5000"))
