const express=require('express')
const router=express.Router()

router.post('/foodData',(req,res)=>{
    try {
        res.send([global.test,global.foodData])
    } catch (error) {
        console.log(error)
        res.send('Error')
    }
})

module.exports=router