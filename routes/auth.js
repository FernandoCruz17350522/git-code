const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.json({
        ok:true,
        msg: "acaba de llegar!",
    });
});

module.exports= router;